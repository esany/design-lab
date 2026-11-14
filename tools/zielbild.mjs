#!/usr/bin/env node
// Zielbild: Punkte als Daten → eine Seite zum Prüfen, Urteilen und Zurückmelden.
// Das Labor hat genau ein Zielbild (zielbild/punkte.json, Stränge als Dimension); jedes Werk baut
// seines mit demselben Werkzeug in seinem eigenen Repo. Beschreibung der Daten und der Bausteine:
// tools/zielbild/README.md; Herleitung: research/2026-11-zielbild-bausteine/befund.md.
//
//   node tools/zielbild.mjs <punkte.json> [--aus <seite.html>] [--check] [--senden <adresse> --ablage <ordner>]
// --senden: Adresse des Dienstes, der die Rückmeldung als Datei ins Repo legt (nur private Fassung bei
// Cloudflare, Zugang nur für den Eigentümer); --ablage: Ordner dafür im Ziel-Repo. Ohne --senden nur Kopieren.
//
// Ohne --aus entsteht index.html neben punkte.json. --check erzeugt nichts und meldet nur,
// ob Daten gültig und die Seite aktuell ist. Keine Abhängigkeiten außer Node ≥ 18.
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { basename, dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const hier = dirname(fileURLToPath(import.meta.url));
export const LABOR = resolve(hier, "..");

/** Erlaubte Werte; die Seite zeigt sie mit Wörtern, nicht nur mit Farbe. */
export const STATUS = ["bestaetigt", "ableitung", "vorschlag", "befund", "offen", "freigabe", "impuls", "auftrag"];
export const STAND = ["vorbereitet", "startklar", "freigegeben", "läuft", "fertig"];
export const AENDERUNG = ["neu", "geändert", "ergänzt"];
export const PRIO = ["jetzt", "später", "parken"];
const DATUM = /^\d{4}-\d{2}-\d{2}$/;

/** Wer ist dran? „du“ heißt: der Eigentümer soll jetzt entscheiden, freigeben oder antworten.
 *  Ein ausdrückliches Feld „dran“ gilt vor der Ableitung; "" heißt: niemand, bewusst ruhend.
 *  „startklar“ heißt im Labor: alles erfüllt außer seiner Freigabe (Zielbild-Punkte „startklar-wann“
 *  und „auftraege“, bestätigt 11./12.11.). Darum ist er dran, auch wenn danach ein Modell ausführt.
 *  Eine Korrektur („muss besser“) macht nicht den Eigentümer zuständig, sondern das Modell. */
export function dran(p) {
  if (typeof p.dran === "string") return /^du$/i.test(p.dran.trim()) ? "du" : p.dran.trim();
  if (p.s === "auftrag") {
    if (p.stand === "startklar") return "du";
    if (p.stand === "fertig") return "";
    return /^du\b/i.test(p.wer ?? "") ? "du" : (p.wer ?? "");
  }
  if (["offen", "freigabe", "impuls"].includes(p.s) && !(p.bestaetigt && !p.n)) return "du";
  return "";
}

/** Nummern und Kürzel, die eine Aussage tragen statt eines Namens: Issue/PR (#12), Entscheidung (0031),
 *  Kürzel mit Ziffer (A02, O3, U4, V6, a63, f02). In Klammern dürfen sie als Beleg hinter dem Namen stehen. */
const NACKT = /#\d+|\b0\d{3}\b|\b[A-Za-z]{1,2}\d{1,3}\b/g;
const ohneKlammern = (s) => { let alt; s = String(s ?? ""); do { alt = s; s = s.replace(/\([^()]*\)/g, ""); } while (s !== alt); return s; };
export const nackteNummern = (s) => [...new Set(ohneKlammern(s).match(NACKT) ?? [])];

/** Was zum Eigentümer geht, muss für sich verständlich sein (Grundmodell in AGENTS.md: „mit Kontext, in
 *  Namen statt Nummern, jede Zahl mit ihrem Bezug“; Prüffall evals/verhalten-zahlbezug). Gilt nur für
 *  Punkte, bei denen er dran ist: Herkunft unter „Worauf das beruht“ darf Nummern tragen. */
export function fuerDich(p) {
  if (dran(p) !== "du") return [];
  const e = [];
  if (!String(p.k ?? "").trim()) e.push("du bist dran, aber der Kontext „k“ fehlt (was ist das, warum jetzt, was folgt aus deiner Antwort)");
  for (const [feld, text] of [["t", p.t], ["k", p.k]]) {
    const n = nackteNummern(text);
    if (n.length) e.push(`„${feld}“ nennt ${n.join(", ")} ohne Namen; Nummern nur in Klammern hinter dem Namen`);
    if (/\bsiehe\s+(den\s+)?chat\b/i.test(text ?? "")) e.push(`„${feld}“ verweist auf einen Chat, statt den Inhalt zu nennen`);
  }
  return e;
}

/** Issues und Pull Requests, die ein Punkt als laufend vorlegt: bei Punkten, bei denen der Eigentümer dran
 *  ist, und bei Aufträgen, die nicht fertig sind; nur im Satz „t“, der den Gegenstand nennt. Kontext und
 *  Herkunft dürfen auf Abgeschlossenes verweisen, auf dem etwas aufbaut. */
export function laufendeNummern(z) {
  const raus = new Map();
  for (const p of (z.teile ?? []).flatMap((t) => t.punkte ?? []))
    if (dran(p) === "du" || (p.s === "auftrag" && p.stand !== "fertig"))
      for (const m of String(p.t ?? "").matchAll(/#(\d+)\b/g)) raus.set(Number(m[1]), [...(raus.get(Number(m[1])) ?? []), p.id]);
  return raus;
}

/** Ein Punkt darf nichts als offen vorlegen, was auf GitHub schon geschlossen ist (Eigentümer 14.11.:
 *  „das Zielbild wird auch bei repoänderungen nicht mit aktualisiert … schwerer Bug“). staende: Nummer → Zustand. */
export function pruefeAktualitaet(z, staende, name = "zielbild/punkte.json") {
  const err = [];
  for (const [n, ids] of laufendeNummern(z)) if (staende[n] && staende[n] !== "open")
    err.push(`${name}: ${[...new Set(ids)].map((i) => `„${i}“`).join(", ")} ${ids.length > 1 ? "legen" : "legt"} #${n} als offen vor, aber es ist auf GitHub ${staende[n] === "merged" ? "übernommen" : "geschlossen"}: Punkt nachziehen`);
  return err;
}

/** Prüft die Daten eines Zielbilds. Gibt eine Liste von Fehlern in Alltagssprache zurück. */
export function pruefen(z, name = "punkte.json") {
  const err = [];
  if (!z || typeof z !== "object") return [`${name}: kein Objekt`];
  for (const f of ["titel", "ort", "schluessel"]) if (!z[f]) err.push(`${name}: „${f}“ fehlt`);
  if (z.schluessel && !/^[a-z0-9-]+$/.test(z.schluessel)) err.push(`${name}: „schluessel“ nur klein-mit-bindestrich`);
  if (!Number.isInteger(z.iteration) || z.iteration < 1) err.push(`${name}: „iteration“ muss eine ganze Zahl ab 1 sein`);
  if (!DATUM.test(z.stand ?? "")) err.push(`${name}: „stand“ muss ein Datum JJJJ-MM-TT sein`);
  if (!Array.isArray(z.teile) || !z.teile.length) { err.push(`${name}: „teile“ fehlt oder ist leer`); return err; }
  const strangIds = new Set();
  if (z.straenge !== undefined) {
    if (!Array.isArray(z.straenge) || !z.straenge.length) err.push(`${name}: „straenge“ ist leer`);
    for (const st of z.straenge ?? []) {
      if (!/^[a-z0-9-]+$/.test(st.id ?? "")) err.push(`${name}: Strang „${st.id ?? "?"}“: Kennung nur klein-mit-bindestrich`);
      if (strangIds.has(st.id)) err.push(`${name}: Strang „${st.id}“ doppelt`);
      strangIds.add(st.id);
      if (!st.name) err.push(`${name}: Strang „${st.id}“ ohne „name“`);
      if (!Number.isInteger(st.iteration) || st.iteration < 1) err.push(`${name}: Strang „${st.id}“: „iteration“ muss eine ganze Zahl ab 1 sein`);
    }
  }
  const ids = new Set();
  for (const teil of z.teile) {
    if (!teil.teil) err.push(`${name}: ein Teil ohne Überschrift „teil“`);
    if (strangIds.size && !strangIds.has(teil.strang)) err.push(`${name}: Teil „${teil.teil}“ ohne gültigen Strang (erlaubt: ${[...strangIds].join(", ")})`);
    if (!strangIds.size && teil.strang) err.push(`${name}: Teil „${teil.teil}“ nennt einen Strang, aber der Kopf hat keine „straenge“`);
    for (const p of teil.punkte ?? []) {
      const w = `${name}: Punkt „${p.id ?? "?"}“`;
      if (!/^[a-z0-9-]+$/.test(p.id ?? "")) err.push(`${w}: Kennung fehlt oder ist nicht klein-mit-bindestrich`);
      if (ids.has(p.id)) err.push(`${w}: Kennung doppelt`);
      ids.add(p.id);
      if (!STATUS.includes(p.s)) err.push(`${w}: Status „${p.s}“ unbekannt (erlaubt: ${STATUS.join(", ")})`);
      if (!p.t) err.push(`${w}: Satz „t“ fehlt`);
      if (p.n && !AENDERUNG.includes(p.n)) err.push(`${w}: Änderung „${p.n}“ unbekannt (erlaubt: ${AENDERUNG.join(", ")})`);
      if ((p.v || p.f) && !p.n) err.push(`${w}: „vorher“ oder Rückmeldung ohne Änderungsart „n“`);
      if (p.prio && !PRIO.includes(p.prio)) err.push(`${w}: Priorität „${p.prio}“ unbekannt (erlaubt: ${PRIO.join(", ")})`);
      if (p.s === "impuls" && !p.prio) err.push(`${w}: Impuls ohne Vorschlag zur Priorität`);
      if (p.bestaetigt && !DATUM.test(p.bestaetigt)) err.push(`${w}: „bestaetigt“ muss ein Datum JJJJ-MM-TT sein`);
      if (p.bestaetigt && p.n) err.push(`${w}: geändert („n“) und zugleich bestätigt; eine Änderung hebt die Bestätigung auf`);
      if (p.dran !== undefined && typeof p.dran !== "string") err.push(`${w}: „dran“ muss ein Text sein („du“, ein Name oder leer)`);
      if (p.auch !== undefined) {
        if (!strangIds.size) err.push(`${w}: „auch“ (Schnittstelle) braucht „straenge“ im Kopf`);
        else if (!Array.isArray(p.auch) || !p.auch.length) err.push(`${w}: „auch“ muss eine Liste von Strängen sein`);
        else for (const a of p.auch) {
          if (!strangIds.has(a)) err.push(`${w}: Schnittstelle zu unbekanntem Strang „${a}“`);
          if (a === teil.strang) err.push(`${w}: Schnittstelle zum eigenen Strang „${a}“`);
        }
      }
      if (p.stuetzt !== undefined && !Array.isArray(p.stuetzt)) err.push(`${w}: „stuetzt“ muss eine Liste sein`);
      if (p.stuetzt_warum !== undefined) {
        if (typeof p.stuetzt_warum !== "object" || Array.isArray(p.stuetzt_warum)) err.push(`${w}: „stuetzt_warum“ muss je Verbindung einen Satz nennen`);
        else for (const k of Object.keys(p.stuetzt_warum)) if (!(p.stuetzt ?? []).includes(k)) err.push(`${w}: Begründung für „${k}“, aber keine Verbindung dorthin`);
      }
      if (p.braucht !== undefined && (!Array.isArray(p.braucht) || !p.braucht.length)) err.push(`${w}: „braucht“ (Voraussetzungen) muss eine nicht leere Liste von Punkten sein`);
      if (p.s === "auftrag") {
        if (!STAND.includes(p.stand)) err.push(`${w}: Auftrag mit Stand „${p.stand}“ (erlaubt: ${STAND.join(", ")})`);
        if (!p.wer) err.push(`${w}: Auftrag ohne „wer“`);
        if (!Array.isArray(p.stuetzt) || !p.stuetzt.length) err.push(`${w}: Auftrag ohne „stuetzt“ (auf welchen Punkten er beruht)`);
      }
    }
  }
  if (z.repo !== undefined && !/^[\w.-]+\/[\w.-]+$/.test(z.repo)) err.push(`${name}: „repo“ muss „besitzer/name“ sein`);
  for (const p of z.teile.flatMap((t) => t.punkte ?? [])) for (const e of fuerDich(p)) err.push(`${name}: Punkt „${p.id}“: ${e}`);
  const alle = new Map(z.teile.flatMap((t) => t.punkte ?? []).map((p) => [p.id, p]));
  for (const p of alle.values()) for (const i of Array.isArray(p.stuetzt) ? p.stuetzt : []) {
    const q = alle.get(i);
    if (!q) err.push(`${name}: Punkt „${p.id}“ beruht auf unbekanntem Punkt „${i}“`);
    else if (i === p.id) err.push(`${name}: Punkt „${p.id}“ beruht auf sich selbst`);
    else if (p.s === "auftrag" && p.stand === "startklar" && !(q.bestaetigt && !q.n)) err.push(`${name}: Auftrag „${p.id}“ ist „startklar“, aber Punkt „${i}“ ist nicht bestätigt`);
  }
  // Voraussetzungen (Eigentümer 14.11.: „klare Voraussetzungen bzw. Abhängigkeiten und Blocker für Aufträge
  // … als Teil der Infrastruktur“): „braucht“ nennt Punkte, die erledigt sein müssen. Ein Auftrag, der läuft
  // oder startklar ist, und eine Frage an den Eigentümer dürfen nicht an Unerledigtem hängen; Kreise sind Fehler.
  for (const p of alle.values()) for (const i of Array.isArray(p.braucht) ? p.braucht : []) {
    const q = alle.get(i);
    if (!q) { err.push(`${name}: Punkt „${p.id}“ braucht unbekannten Punkt „${i}“`); continue; }
    if (i === p.id) { err.push(`${name}: Punkt „${p.id}“ braucht sich selbst`); continue; }
    if (erledigt(q)) continue;
    if (p.s === "auftrag" && ["startklar", "läuft"].includes(p.stand)) err.push(`${name}: Auftrag „${p.id}“ ist „${p.stand}“, aber seine Voraussetzung „${i}“ ist nicht erledigt: blockiert`);
    if (dran(p) === "du") err.push(`${name}: Punkt „${p.id}“ legt dir eine Frage vor, die an „${i}“ hängt (nicht erledigt); erst fragen, wenn sie entscheidbar ist`);
  }
  const besucht = new Map();
  const kreis = (id, pfad) => {
    if (besucht.get(id) === 2) return null;
    if (besucht.get(id) === 1) return [...pfad, id];
    besucht.set(id, 1);
    for (const i of alle.get(id)?.braucht ?? []) { const k = alle.has(i) && kreis(i, [...pfad, id]); if (k) return k; }
    besucht.set(id, 2); return null;
  };
  for (const id of alle.keys()) { const k = kreis(id, []); if (k) { err.push(`${name}: Voraussetzungen im Kreis: ${k.join(" → ")}`); break; } }
  return err;
}

/** Erledigt im Sinn von „braucht“: von dir bestätigt, als Befund abgeschlossen oder ein fertiger Auftrag. */
export function erledigt(p) {
  return (!!p.bestaetigt && !p.n) || p.s === "bestaetigt" || p.s === "befund" || (p.s === "auftrag" && p.stand === "fertig");
}

/** CSS-Variablen der Seite aus den Tokens des Labors (DTCG), hell und dunkel. Farben nur als Rollen. */
export function tokenCss(tokens) {
  const wert = (pfad) => {
    let t = pfad.split(".").reduce((o, k) => o?.[k], tokens);
    for (let i = 0; i < 5 && typeof t?.$value === "string" && /^\{.+\}$/.test(t.$value); i++)
      t = t.$value.slice(1, -1).split(".").reduce((o, k) => o?.[k], tokens);
    const v = t?.$value;
    if (v == null) throw new Error(`Token ${pfad} fehlt`);
    if (Array.isArray(v)) return v.map((x) => (/\s/.test(x) ? `"${x}"` : x)).join(",");
    if (typeof v === "object" && v.hex) return v.hex;
    if (typeof v === "object" && "value" in v) return `${v.value}${v.unit}`;
    return String(v);
  };
  const vars = (th) => ["bg", "fg", "muted", "line", "signal", "bestaetigt", "offen"].map((r) => `--${r}:${wert(`theme.${th}.${r}`)}`).join(";");
  return `:root{${vars("light")};--sans:${wert("font.sans")};--mono:${wert("font.mono")};color-scheme:light dark}\n` +
    `@media (prefers-color-scheme:dark){:root{${vars("dark")}}}`;
}

const html = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const js = (s) => JSON.stringify(String(s)).slice(1, -1).replace(/</g, "\\u003c");

/** Aktive Verweise eines Punkts (Grundmodell: Herkunft an jeder Aussage, als Hypertext; Eigentümer 14.11.:
 *  „Ein inaktiver Verweis ins repo ist keine Assistenz“). Nur mit „repo“ im Kopf, nur auf Dateien, die es im
 *  Labor gibt: Pfade, Entscheidungen (0031) und Issues oder Pull Requests (#12). Ergebnis: [Text, Adresse]. */
export function verweise(p, repo, wurzel = LABOR) {
  const basis = `https://github.com/${repo}`, raus = new Map();
  const dec = existsSync(join(wurzel, "decisions")) ? readdirSync(join(wurzel, "decisions")) : [];
  const text = [p.t, p.k, p.g].filter(Boolean).join(" \n ");
  for (const m of text.matchAll(/(?<![\w\/:.@-])((?:[a-z0-9_.-]+\/)+[A-Za-z0-9_.-]*|[A-Za-z0-9_-]+\.(?:md|json|mjs|html))/g)) {
    const pfad = m[1].replace(/[.,;:]+$/, "");
    const ziel = pfad.replace(/\/$/, "");
    const d = /^decisions\/(\d{4})$/.exec(ziel) && dec.find((f) => f.startsWith(ziel.slice(10) + "-"));
    const echt = d ? `decisions/${d}` : ziel;
    if (!echt || !existsSync(join(wurzel, echt))) continue;
    raus.set(pfad, `${basis}/${statSync(join(wurzel, echt)).isDirectory() ? "tree" : "blob"}/main/${echt}`);
  }
  for (const m of text.matchAll(/(?<![\w\/-])(0\d{3})(?![\w-])/g)) {
    const f = dec.find((x) => x.startsWith(m[1] + "-"));
    if (f && !raus.has(m[1])) raus.set(m[1], `${basis}/blob/main/decisions/${f}`);
  }
  for (const m of text.matchAll(/#(\d+)\b/g)) raus.set(`#${m[1]}`, `${basis}/issues/${m[1]}`);
  return [...raus].sort((a, b) => b[0].length - a[0].length);
}

/** Erzeugt die Seite. quelle: Pfad der Daten, nur für den Kopfkommentar. */
export function erzeugen(z, { vorlage, tokens, quelle = "punkte.json", senden = "", ablage = "" } = {}) {
  vorlage ??= readFileSync(join(hier, "zielbild/vorlage.html"), "utf8");
  tokens ??= JSON.parse(readFileSync(join(LABOR, "system/tokens/lab.tokens.json"), "utf8"));
  const [j, m, d] = [z.stand.slice(0, 4), z.stand.slice(5, 7), z.stand.slice(8, 10)];
  // Ohne Stränge (z. B. ein Werk) ist das ganze Zielbild ein Strang; die Seite blendet die Strang-Wahl aus.
  const straenge = z.straenge ?? [{ id: "_", name: z.titel, iteration: z.iteration, rueckmeldung: z.rueckmeldung }];
  const teile = z.teile.map((t) => ({ ...t, strang: t.strang ?? "_", punkte: (t.punkte ?? []).map((p) => ({ ...p, dran: dran(p), ...(z.repo ? { vw: verweise(p, z.repo) } : {}) })) }));
  const daten = { straenge, teile, einStrang: !z.straenge };
  const ersetzt = vorlage
    .replace("/*TOKENS*/", tokenCss(tokens))
    .replace("/*DATEN*/", JSON.stringify(daten).replace(/</g, "\\u003c"))
    .replaceAll("/*TITEL_JS*/", js(z.titel))
    .replaceAll("/*SENDEN*/", js(senden))
    .replaceAll("/*ABLAGE*/", js(ablage))
    .replaceAll("/*TITEL*/", html(z.titel))
    .replaceAll("/*ORT*/", html(z.ort))
    .replaceAll("/*VON*/", html(z.von ?? "Claude"))
    .replaceAll("/*SCHLUESSEL*/", z.schluessel)
    .replaceAll("/*ITERATION*/", String(z.iteration))
    .replaceAll("/*VORHER*/", String(z.iteration - 1))
    .replaceAll("/*STAND*/", `${d}.${m}.${j}`)
    .replaceAll("/*RUECKMELDUNG*/", html(z.rueckmeldung ?? ""))
    .replace("<head>", `<head>\n<!-- Erzeugt von design-lab/tools/zielbild.mjs aus ${html(quelle)}. Nicht von Hand ändern. -->`);
  const rest = ersetzt.match(/\/\*[A-Z_]+\*\//);
  if (rest) throw new Error(`Platzhalter ${rest[0]} in der Vorlage nicht ersetzt`);
  return ersetzt;
}

// ---------- Aufruf von der Kommandozeile ----------
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  const check = args.includes("--check");
  const ai = args.indexOf("--aus");
  const wert = (n) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : ""; };
  const mitWert = new Set(["--aus", "--senden", "--ablage"].map((n) => args.indexOf(n)).filter((i) => i >= 0).map((i) => i + 1));
  const daten = args.find((a, i) => !a.startsWith("--") && !mitWert.has(i));
  if (!daten) { console.error("Aufruf: node tools/zielbild.mjs <punkte.json> [--aus <seite.html>] [--check]"); process.exit(2); }
  const aus = ai >= 0 ? args[ai + 1] : join(dirname(daten), "index.html");
  let z;
  try { z = JSON.parse(readFileSync(daten, "utf8")); } catch (e) { console.error(`${daten}: ${e.message}`); process.exit(1); }
  const fehler = pruefen(z, daten);
  if (fehler.length) { console.error(fehler.join("\n")); process.exit(1); }
  const rel = relative(dirname(aus), daten);
  const seite = erzeugen(z, { quelle: rel && !rel.startsWith("..") ? rel : basename(daten), senden: wert("--senden"), ablage: wert("--ablage") });
  const punkte = z.teile.reduce((n, t) => n + (t.punkte?.length ?? 0), 0);
  if (check) {
    const aktuell = existsSync(aus) && readFileSync(aus, "utf8") === seite;
    console.log(aktuell ? `✓ ${aus} aktuell (${punkte} Punkte)` : `✗ ${aus} ist nicht aktuell; ohne --check neu erzeugen`);
    process.exit(aktuell ? 0 : 1);
  }
  writeFileSync(aus, seite);
  console.log(`✓ ${aus} erzeugt (${punkte} Punkte)`);
}
