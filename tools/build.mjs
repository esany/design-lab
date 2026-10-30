#!/usr/bin/env node
// design-lab build — ohne Abhängigkeiten (Node ≥ 18).
//   node tools/build.mjs          erzeugt assets/tokens.css, index.html, studies/index.json
//   node tools/build.mjs --check  prüft nur; Fehler, wenn erzeugte Dateien veraltet sind
//
// Bewusst klein gehalten. Wenn Tokens komplexer werden: Style Dictionary oder
// Terrazzo (beide DTCG-fähig) übernehmen diese Aufgabe.

import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { leseKopf, aktualisiereStand, pruefeLaenge } from "./gitter.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const check = process.argv.includes("--check");
const errors = [];
const warnings = [];
const outputs = new Map();

// Die Startdatei wird in jeder Sitzung geladen; eine Überschreitung ist ein Fehler.
const agentsText = readFileSync(join(root, "AGENTS.md"), "utf8");
const agentsLines = agentsText.split(/\r?\n/).length - (agentsText.endsWith("\n") ? 1 : 0);
if (agentsLines > 100) errors.push(`AGENTS.md: ${agentsLines} Zeilen, höchstens 100 erlaubt; Inhalte auslagern`);

// ---------- Tokens (DTCG) → CSS ----------
const tokenDir = join(root, "system/tokens");
const tokens = {};
for (const f of readdirSync(tokenDir).filter((f) => f.endsWith(".tokens.json"))) {
  try { Object.assign(tokens, JSON.parse(readFileSync(join(tokenDir, f), "utf8"))); }
  catch (e) { errors.push(`Tokens: ${f} ist kein gültiges JSON (${e.message})`); }
}

const flat = {}; // "color.paper" → { type, value }
(function walk(node, path, inheritedType) {
  const type = node.$type ?? inheritedType;
  if ("$value" in node) {
    if (!type) errors.push(`Tokens: ${path.join(".")} hat keinen $type`);
    flat[path.join(".")] = { type, value: node.$value };
    return;
  }
  for (const [k, v] of Object.entries(node)) {
    if (k.startsWith("$") || typeof v !== "object" || v === null) continue;
    walk(v, [...path, k], type);
  }
})(tokens, [], undefined);

function resolve(name, seen = new Set()) {
  const t = flat[name];
  if (!t) { errors.push(`Tokens: Verweis auf unbekanntes Token {${name}}`); return null; }
  if (typeof t.value === "string" && /^\{.+\}$/.test(t.value)) {
    const ref = t.value.slice(1, -1);
    if (seen.has(ref)) { errors.push(`Tokens: Zirkelverweis bei {${ref}}`); return null; }
    seen.add(ref);
    return resolve(ref, seen);
  }
  return t;
}

function css(t) {
  if (!t) return "initial";
  const v = t.value;
  switch (t.type) {
    case "color":
      if (v.hex) return v.hex;
      if (v.colorSpace === "srgb") return `rgb(${v.components.map((c) => Math.round(c * 255)).join(" ")})`;
      return `color(${v.colorSpace} ${v.components.join(" ")})`;
    case "dimension": return `${v.value}${v.unit}`;
    case "fontFamily": return (Array.isArray(v) ? v : [v]).map((f) => (/\s/.test(f) ? `"${f}"` : f)).join(", ");
    default: return String(v);
  }
}

const varName = (n) => "--lab-" + n.replace(/^theme\.(light|dark)\./, "").replace(/\./g, "-");
const base = [], light = [], dark = [];
for (const name of Object.keys(flat)) {
  const line = `  ${varName(name)}: ${css(resolve(name))};`;
  if (name.startsWith("theme.light.")) light.push(line);
  else if (name.startsWith("theme.dark.")) dark.push(line);
  else base.push(line);
}
outputs.set("assets/tokens.css",
`/* Erzeugt aus system/tokens/*.tokens.json — nicht von Hand bearbeiten. */
:root {
${base.join("\n")}
${light.join("\n")}
  color-scheme: light dark;
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
${dark.map((l) => "  " + l).join("\n")}
  }
}
:root[data-theme="dark"] {
${dark.join("\n")}
}
`);

// ---------- Studien → Index ----------
const REQUIRED = ["title", "date", "method", "status"];
const STATUS = ["offen", "behalten", "verworfen"];
const skills = existsSync(join(root, ".agents/skills")) ? readdirSync(join(root, ".agents/skills")) : [];

function frontmatter(text, file) {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  if (!m) { errors.push(`${file}: Frontmatter fehlt`); return {}; }
  const data = {};
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^([\w-]+):\s*(.*?)\s*(#.*)?$/);
    if (!kv) continue;
    let v = kv[2];
    if (/^\[.*\]$/.test(v)) v = v.slice(1, -1).split(",").map((s) => s.trim()).filter(Boolean);
    data[kv[1]] = v;
  }
  return data;
}

const studiesDir = join(root, "studies");
const studies = [];
for (const slug of readdirSync(studiesDir).sort().reverse()) {
  const dir = join(studiesDir, slug);
  if (!statSync(dir).isDirectory()) continue;
  const md = join(dir, "study.md");
  if (!existsSync(md)) { errors.push(`studies/${slug}: study.md fehlt`); continue; }
  if (!existsSync(join(dir, "index.html"))) errors.push(`studies/${slug}: index.html fehlt`);
  const fm = frontmatter(readFileSync(md, "utf8"), `studies/${slug}/study.md`);
  for (const k of REQUIRED) if (!fm[k]) errors.push(`studies/${slug}: Feld „${k}“ fehlt`);
  if (fm.status && !STATUS.includes(fm.status)) errors.push(`studies/${slug}: status muss ${STATUS.join("|")} sein`);
  if (fm.method && fm.method !== "frei" && !skills.includes(fm.method))
    errors.push(`studies/${slug}: method „${fm.method}“ ist kein Skill in .agents/skills/ (oder „frei“)`);
  studies.push({ slug, ...fm, tags: fm.tags ?? [], preview: existsSync(join(dir, "preview.png")) });
}
outputs.set("studies/index.json", JSON.stringify(studies, null, 2) + "\n");

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const cards = studies.map((s) => `      <li class="study">
        <a href="studies/${esc(s.slug)}/">
          ${s.preview ? `<img src="studies/${esc(s.slug)}/preview.png" alt="" loading="lazy">` : `<span class="placeholder" aria-hidden="true"></span>`}
          <span class="meta">${esc(s.date)} · ${esc(s.method)} · <span class="status status-${esc(s.status)}">${esc(s.status)}</span></span>
          <span class="title">${esc(s.title)}</span>
        </a>
      </li>`).join("\n");

const template = readFileSync(join(root, "tools/index.template.html"), "utf8");
outputs.set("index.html", template.replace("<!--STUDIES-->", cards || "      <li>Noch keine Studien.</li>")
  .replace("<!--COUNT-->", String(studies.length)));

// ---------- Korpus → prüfen, Übersicht ----------
const CORPUS = { "referenzen.json": "Mensch", "recherche.json": "Agent" };
const C_REQ = ["id", "titel", "autor", "jahr", "art", "url", "lizenz", "felder", "status", "geprueft"];
const C_ART = ["Buch", "Paper", "Artikel", "Repo", "Werkzeug", "Projekt", "Konferenz", "Datensatz", "Person", "Labor", "Sammlung", "Werk"];
const C_FELD = ["vermitteln", "form", "ordnung", "erkennen", "raum-zeit", "interaktion", "system", "labor"];
const C_STATUS = ["belegt", "abgeleitet", "nicht belegt"];
const C_ZUGANG = ["offen", "eingeschränkt", "blockiert"];
const corpus = new Map();
for (const [file, auswahl] of Object.entries(CORPUS)) {
  const p = join(root, "corpus", file);
  if (!existsSync(p)) { errors.push(`corpus/${file} fehlt`); continue; }
  let list;
  try { list = JSON.parse(readFileSync(p, "utf8")); } catch (e) { errors.push(`corpus/${file}: kein gültiges JSON (${e.message})`); continue; }
  for (const [i, q] of list.entries()) {
    const at = `corpus/${file} #${i + 1}${q.id ? ` (${q.id})` : ""}`;
    for (const k of C_REQ) if (!(k in q) || q[k] === "" || (k !== "jahr" && q[k] == null)) errors.push(`${at}: Feld „${k}“ fehlt`);
    if (q.id && !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(q.id)) errors.push(`${at}: id nur Kleinbuchstaben, Ziffern, Bindestrich`);
    if (q.id && corpus.has(q.id)) errors.push(`${at}: id doppelt`);
    if (q.art && !C_ART.includes(q.art)) errors.push(`${at}: art „${q.art}“ unbekannt`);
    if (!Array.isArray(q.felder) || !q.felder.length) errors.push(`${at}: felder braucht mindestens einen Eintrag`);
    else for (const f of q.felder) if (!C_FELD.includes(f)) errors.push(`${at}: Feld „${f}“ unbekannt`);
    if (q.status && !C_STATUS.includes(q.status)) errors.push(`${at}: status muss ${C_STATUS.join(" | ")} sein`);
    if (q.zugang && !C_ZUGANG.includes(q.zugang)) errors.push(`${at}: zugang muss ${C_ZUGANG.join(" | ")} sein`);
    if (q.url && !/^https:\/\//.test(q.url)) errors.push(`${at}: url muss mit https:// beginnen`);
    if (q.geprueft && !/^\d{4}-\d{2}-\d{2}$/.test(q.geprueft)) errors.push(`${at}: geprueft als JJJJ-MM-TT`);
    if (q.wikidata && !/^Q\d+$/.test(q.wikidata)) errors.push(`${at}: wikidata als Q-Nummer`);
    if (q.id) corpus.set(q.id, { ...q, auswahl });
  }
}

// Verweise [k:id] in allen Markdown-Dateien müssen existieren
function* mdFiles(dir) {
  for (const name of readdirSync(dir)) {
    if (name.startsWith(".") && name !== ".agents") continue;
    if (name === "node_modules" || name === "archive") continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* mdFiles(p);
    else if (name.endsWith(".md")) yield p;
  }
}
const cited = new Map();
for (const p of mdFiles(root)) {
  const rel = p.slice(root.length + 1);
  if (rel === "corpus/uebersicht.md") continue;
  for (const m of readFileSync(p, "utf8").matchAll(/\[k:([a-z0-9-]+)\]/g)) {
    if (!corpus.has(m[1])) errors.push(`${rel}: Verweis [k:${m[1]}] — keine solche Quelle im Korpus`);
    else if (!rel.startsWith("corpus/")) cited.set(m[1], (cited.get(m[1]) ?? new Set()).add(rel));
  }
}

const cell = (s) => String(s ?? "—").replace(/\|/g, "\\|").replace(/\n/g, " ");
const byField = C_FELD.map((f) => {
  const rows = [...corpus.values()].filter((q) => q.felder?.includes(f))
    .sort((a, b) => (a.auswahl === b.auswahl ? a.id.localeCompare(b.id) : a.auswahl === "Mensch" ? -1 : 1));
  if (!rows.length) return "";
  return `## ${f}\n\n| ID | Titel | Autor | Jahr | Art | Status | Auswahl | genutzt in |\n|---|---|---|---|---|---|---|---|\n` +
    rows.map((q) => `| \`${q.id}\` | [${cell(q.titel)}](${q.url}) | ${cell(q.autor)} | ${cell(q.jahr)} | ${q.art} | ${q.status}${q.zugang === "blockiert" ? " · blockiert" : ""} | ${q.auswahl} | ${[...(cited.get(q.id) ?? [])].map((r) => `\`${r}\``).join(", ") || "—"} |`).join("\n") + "\n";
}).filter(Boolean).join("\n");
const nMensch = [...corpus.values()].filter((q) => q.auswahl === "Mensch").length;
outputs.set("corpus/uebersicht.md", `# Korpus — Übersicht

> Erzeugt von \`node tools/build.mjs\` aus \`referenzen.json\` und \`recherche.json\`. Nicht von Hand ändern.
> Schema: [\`schema.md\`](schema.md).

**${corpus.size} Quellen** — ${nMensch} ausgewählt vom Eigentümer, ${corpus.size - nMensch} recherchiert vom Agenten.
Je Feld zuerst die Verweise des Eigentümers (Ausgangspunkte, kein Kanon). Eine Quelle kann in mehreren Feldern stehen.

${byField}`);

// ---------- Verknüpfung: Anforderungen (intent.md) ↔ Entscheidungen und Skills ----------
// Jede Entscheidung und jeder Skill nennt im Kopf `dient: A..`. Daraus entsteht verknuepfung.md.
const reqs = new Map();
for (const line of readFileSync(join(root, "intent.md"), "utf8").split("\n")) {
  const m = line.match(/^\| (A\d\d) \| (.+?) \| .+? \| (.+) \|$/);
  if (m) reqs.set(m[1], { titel: (m[2].match(/\*\*(.+?)\*\*/) ?? [, m[2]])[1], stand: (m[3].match(/\*\*([^*]+)\*\*/) ?? [, "?"])[1] });
}
function head(p) {
  const s = readFileSync(p, "utf8"); const m = s.match(/^---\n([\s\S]*?)\n---/);
  const o = {}; if (m) for (const l of m[1].split("\n")) { const k = l.match(/^([a-z_]+):\s*(.*)$/); if (k) o[k[1]] = k[2]; }
  return o;
}
const mech = [];
for (const f of readdirSync(join(root, "decisions")).filter((f) => /^\d{4}-.*\.md$/.test(f)).sort())
  mech.push({ art: "Entscheidung", id: f.slice(0, 4), pfad: `decisions/${f}`, ...head(join(root, "decisions", f)) });
for (const d of readdirSync(join(root, ".agents/skills")).sort()) {
  const p = join(root, ".agents/skills", d, "SKILL.md");
  if (existsSync(p)) mech.push({ art: "Skill", id: d, pfad: `.agents/skills/${d}/SKILL.md`, ...head(p) });
}
const PERSP = ["system", "fach", "gebrauch"];
for (const x of mech.filter((m) => m.art === "Entscheidung")) {
  if (!x.perspektive) { errors.push(`${x.pfad}: Kopfzeile „perspektive:“ fehlt (system, fach, gebrauch)`); continue; }
  for (const p of x.perspektive.split(/[,\s]+/).filter(Boolean))
    if (!PERSP.includes(p)) errors.push(`${x.pfad}: perspektive „${p}“ unbekannt (erlaubt: ${PERSP.join(", ")})`);
}
const byReq = new Map([...reqs.keys()].map((a) => [a, []]));
for (const x of mech) {
  if (!x.dient) { errors.push(`${x.pfad}: Kopfzeile „dient: A..“ fehlt (welcher Anforderung dient es?)`); continue; }
  for (const a of x.dient.split(/[,\s]+/).filter(Boolean)) {
    if (!byReq.has(a)) errors.push(`${x.pfad}: dient ${a} — keine solche Anforderung in intent.md`);
    else byReq.get(a).push(x);
  }
}
const ohne = [...byReq].filter(([, l]) => !l.length).map(([a]) => a);
const probe = mech.filter((x) => /auf Probe/.test(x.status ?? "") && !x.auswerten);
const vorschlag = mech.filter((x) => /^Vorschlag/.test(x.status ?? ""));
const zahl = (w) => [...reqs.values()].filter((r) => r.stand === w).length;
const link = (x) => `[${x.id}](${x.pfad})`;
outputs.set("verknuepfung.md", `# Verknüpfung — Anforderungen und Mechanismen

> Erzeugt von \`node tools/build.mjs\` aus \`intent.md\` und der Kopfzeile \`dient:\` jeder
> Entscheidung und jedes Skills. Nicht von Hand ändern. Zweck: A33 „Nichts verrottet“.

**Stand der ${reqs.size} Anforderungen:** ${zahl("erfüllt")} erfüllt · ${zahl("teilweise")} teilweise · ${zahl("offen")} offen (laut \`intent.md\`).

## Auffällig — die Pflege prüft das monatlich

- **Anforderungen ohne Entscheidung oder Skill:** ${ohne.join(", ") || "keine"}
- **Auf Probe ohne Auswertungsdatum** (\`auswerten:\` fehlt): ${probe.map(link).join(", ") || "keine"}
- **Vorschläge, die auf Antwort warten:** ${vorschlag.map(link).join(", ") || "keine"}

## Je Anforderung

| Nr. | Anforderung | Stand | Entscheidungen | Skills |
|---|---|---|---|---|
${[...reqs].map(([a, r]) => { const l = byReq.get(a); return `| ${a} | ${cell(r.titel)} | ${r.stand} | ${l.filter((x) => x.art === "Entscheidung").map(link).join(", ") || "—"} | ${l.filter((x) => x.art === "Skill").map(link).join(", ") || "—"} |`; }).join("\n")}
`);

// ---------- Stand aus den Merkzetteln ----------
const themen = [];
for (const datei of readdirSync(join(root, "anschluss")).filter(f => f.endsWith(".md") && f !== "README.md").sort()) {
  try { themen.push({ datei, ...leseKopf(readFileSync(join(root, "anschluss", datei), "utf8"), `anschluss/${datei}`) }); }
  catch (e) { errors.push(e.message); }
}
const standOriginal = readFileSync(join(root, "stand.md"), "utf8");
try {
  const standNeu = aktualisiereStand(standOriginal, themen);
  outputs.set("stand.md", standNeu);
  warnings.push(...pruefeLaenge(standNeu, themen));
} catch (e) { errors.push(e.message); }

// ---------- Schreiben oder prüfen ----------
let stale = 0;
for (const [rel, content] of outputs) {
  const p = join(root, rel);
  const current = existsSync(p) ? readFileSync(p, "utf8") : null;
  if (current === content) continue;
  if (check) { errors.push(`${rel} ist veraltet — bitte „node tools/build.mjs“ ausführen`); stale++; }
  else writeFileSync(p, content);
}

if (warnings.length) console.warn(warnings.join("\n"));
if (errors.length) {
  console.error("✗ " + errors.length + " Problem(e):\n  - " + errors.join("\n  - "));
  process.exit(1);
}
console.log(`✓ ${Object.keys(flat).length} Tokens, ${studies.length} Studie(n), ${corpus.size} Quellen (${[...cited.values()].length} zitiert)${check ? " — alles aktuell" : " — erzeugt"}`);
