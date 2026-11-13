#!/usr/bin/env node
// Zielbild: Punkte als Daten → eine Seite zum Prüfen, Urteilen und Zurückmelden.
// Für jedes Werk und das Labor selbst. Beschreibung der Daten und der Bausteine:
// tools/zielbild/README.md; Herleitung: research/2026-11-zielbild-bausteine/befund.md.
//
//   node tools/zielbild.mjs <punkte.json> [--aus <seite.html>] [--check]
//
// Ohne --aus entsteht index.html neben punkte.json. --check erzeugt nichts und meldet nur,
// ob Daten gültig und die Seite aktuell ist. Keine Abhängigkeiten außer Node ≥ 18.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
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

/** Prüft die Daten eines Zielbilds. Gibt eine Liste von Fehlern in Alltagssprache zurück. */
export function pruefen(z, name = "punkte.json") {
  const err = [];
  if (!z || typeof z !== "object") return [`${name}: kein Objekt`];
  for (const f of ["titel", "ort", "schluessel"]) if (!z[f]) err.push(`${name}: „${f}“ fehlt`);
  if (z.schluessel && !/^[a-z0-9-]+$/.test(z.schluessel)) err.push(`${name}: „schluessel“ nur klein-mit-bindestrich`);
  if (!Number.isInteger(z.iteration) || z.iteration < 1) err.push(`${name}: „iteration“ muss eine ganze Zahl ab 1 sein`);
  if (!DATUM.test(z.stand ?? "")) err.push(`${name}: „stand“ muss ein Datum JJJJ-MM-TT sein`);
  if (!Array.isArray(z.teile) || !z.teile.length) { err.push(`${name}: „teile“ fehlt oder ist leer`); return err; }
  const ids = new Set();
  for (const teil of z.teile) {
    if (!teil.teil) err.push(`${name}: ein Teil ohne Überschrift „teil“`);
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
      if (p.s === "auftrag") {
        if (!STAND.includes(p.stand)) err.push(`${w}: Auftrag mit Stand „${p.stand}“ (erlaubt: ${STAND.join(", ")})`);
        if (!p.wer) err.push(`${w}: Auftrag ohne „wer“`);
        if (!Array.isArray(p.stuetzt) || !p.stuetzt.length) err.push(`${w}: Auftrag ohne „stuetzt“ (auf welchen Punkten er beruht)`);
      }
    }
  }
  const alle = new Map(z.teile.flatMap((t) => t.punkte ?? []).map((p) => [p.id, p]));
  for (const p of alle.values()) if (p.s === "auftrag") for (const i of p.stuetzt ?? []) {
    const q = alle.get(i);
    if (!q) err.push(`${name}: Auftrag „${p.id}“ beruht auf unbekanntem Punkt „${i}“`);
    else if (p.stand === "startklar" && !(q.bestaetigt && !q.n)) err.push(`${name}: Auftrag „${p.id}“ ist „startklar“, aber Punkt „${i}“ ist nicht bestätigt`);
  }
  return err;
}

/** CSS-Variablen der Seite aus den Tokens des Labors (DTCG), hell und dunkel. */
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
  // ok und warn gibt es (noch) nicht als Token; Lücke, siehe Befund.
  const vars = (th, ok, warn) => `--bg:${wert(`theme.${th}.bg`)};--fg:${wert(`theme.${th}.fg`)};--muted:${wert(`theme.${th}.muted`)};--line:${wert(`theme.${th}.line`)};--accent:${wert(`theme.${th}.accent`)};--ok:${ok};--warn:${warn}`;
  return `:root{${vars("light", "#2f6b3a", "#8a5a00")};--sans:${wert("font.sans")};--mono:${wert("font.mono")};color-scheme:light dark}\n` +
    `@media (prefers-color-scheme:dark){:root{${vars("dark", "#7fbf8a", "#e0b060")}}}`;
}

const html = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const js = (s) => JSON.stringify(String(s)).slice(1, -1).replace(/</g, "\\u003c");

/** Erzeugt die Seite. quelle: Pfad der Daten, nur für den Kopfkommentar. */
export function erzeugen(z, { vorlage, tokens, quelle = "punkte.json" } = {}) {
  vorlage ??= readFileSync(join(hier, "zielbild/vorlage.html"), "utf8");
  tokens ??= JSON.parse(readFileSync(join(LABOR, "system/tokens/lab.tokens.json"), "utf8"));
  const [j, m, d] = [z.stand.slice(0, 4), z.stand.slice(5, 7), z.stand.slice(8, 10)];
  const ersetzt = vorlage
    .replace("/*TOKENS*/", tokenCss(tokens))
    .replace("/*DATEN*/", JSON.stringify(z.teile).replace(/</g, "\\u003c"))
    .replaceAll("/*TITEL_JS*/", js(z.titel))
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
  const daten = args.find((a, i) => !a.startsWith("--") && (ai < 0 || i !== ai + 1));
  if (!daten) { console.error("Aufruf: node tools/zielbild.mjs <punkte.json> [--aus <seite.html>] [--check]"); process.exit(2); }
  const aus = ai >= 0 ? args[ai + 1] : join(dirname(daten), "index.html");
  let z;
  try { z = JSON.parse(readFileSync(daten, "utf8")); } catch (e) { console.error(`${daten}: ${e.message}`); process.exit(1); }
  const fehler = pruefen(z, daten);
  if (fehler.length) { console.error(fehler.join("\n")); process.exit(1); }
  const rel = relative(dirname(aus), daten);
  const seite = erzeugen(z, { quelle: rel && !rel.startsWith("..") ? rel : basename(daten) });
  const punkte = z.teile.reduce((n, t) => n + (t.punkte?.length ?? 0), 0);
  if (check) {
    const aktuell = existsSync(aus) && readFileSync(aus, "utf8") === seite;
    console.log(aktuell ? `✓ ${aus} aktuell (${punkte} Punkte)` : `✗ ${aus} ist nicht aktuell; ohne --check neu erzeugen`);
    process.exit(aktuell ? 0 : 1);
  }
  writeFileSync(aus, seite);
  console.log(`✓ ${aus} erzeugt (${punkte} Punkte)`);
}
