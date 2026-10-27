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

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const check = process.argv.includes("--check");
const errors = [];
const outputs = new Map();

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

// ---------- Schreiben oder prüfen ----------
let stale = 0;
for (const [rel, content] of outputs) {
  const p = join(root, rel);
  const current = existsSync(p) ? readFileSync(p, "utf8") : null;
  if (current === content) continue;
  if (check) { errors.push(`${rel} ist veraltet — bitte „node tools/build.mjs“ ausführen`); stale++; }
  else writeFileSync(p, content);
}

if (errors.length) {
  console.error("✗ " + errors.length + " Problem(e):\n  - " + errors.join("\n  - "));
  process.exit(1);
}
console.log(`✓ ${Object.keys(flat).length} Tokens, ${studies.length} Studie(n)${check ? " — alles aktuell" : " — erzeugt"}`);
