#!/usr/bin/env node
// Prüffälle für tools/daten.mjs: je Regel ein richtiger und ein falscher Fall.
import { pruefeDaten, pruefeVerweise } from "./daten.mjs";

const kontext = { korpus: new Set(["quelle-2026"]), themen: new Set(["beispiel"]), dateiDa: (p) => p === "research/notiz.md" };
const gut = {
  thema: "beispiel",
  aussagen: [
    { id: "beispiel-a01", aussage: "Alt.", status: "abgeleitet", seit: "2026-11-01", abgeloest_durch: "beispiel-a02" },
    { id: "beispiel-a02", aussage: "Neu.", status: "belegt", seit: "2026-11-06", quellen: [{ id: "quelle-2026", stelle: "S. 3" }, { datei: "research/notiz.md", stelle: "Abschnitt 2" }], herleitung: "research/notiz.md" },
  ],
  fragen: [
    { id: "beispiel-f01", frage: "Ja oder nein?", gestellt: "2026-11-06", antwort: "Ja", beantwortet: "2026-11-06" },
    { id: "beispiel-f02", frage: "Offen?", gestellt: "2026-11-06" },
  ],
};
const lauf = (d, name = "beispiel.json") => pruefeDaten([{ name, text: typeof d === "string" ? d : JSON.stringify(d) }], kontext);
const mit = (f) => { const d = structuredClone(gut); f(d); return lauf(d).errors; };

const tests = [
  ["richtiger Datensatz", () => lauf(gut).errors.length === 0 && lauf(gut).warnings.length === 0],
  ["kein JSON", () => lauf("{").errors.some((e) => e.includes("kein gültiges JSON"))],
  ["thema passt nicht zum Dateinamen", () => mit((d) => { d.thema = "anders"; }).some((e) => e.includes("„thema“ muss"))],
  ["kein Merkzettel zum Thema", () => lauf({ ...gut, thema: "fremd" }, "fremd.json").errors.some((e) => e.includes("kein Merkzettel"))],
  ["Pflichtfeld fehlt", () => mit((d) => { delete d.aussagen[0].aussage; }).some((e) => e.includes("Feld „aussage“ fehlt"))],
  ["falsche id", () => mit((d) => { d.aussagen[0].id = "AW-7"; }).some((e) => e.includes("id als"))],
  ["doppelte id", () => mit((d) => { d.aussagen[1].id = "beispiel-a01"; }).some((e) => e.includes("doppelt"))],
  ["unbekannter Status", () => mit((d) => { d.aussagen[0].status = "sicher"; }).some((e) => e.includes("status muss"))],
  ["belegt ohne Quelle", () => mit((d) => { d.aussagen[1].quellen = []; }).some((e) => e.includes("braucht mindestens eine Quelle"))],
  ["Quelle ohne Stelle", () => mit((d) => { delete d.aussagen[1].quellen[0].stelle; }).some((e) => e.includes("„stelle“"))],
  ["Quelle nicht im Korpus", () => mit((d) => { d.aussagen[1].quellen[0].id = "gibt-es-nicht"; }).some((e) => e.includes("nicht im Korpus"))],
  ["Datei fehlt", () => mit((d) => { d.aussagen[1].quellen[1].datei = "fehlt.md"; }).some((e) => e.includes("„fehlt.md“ fehlt"))],
  ["Ablösung ins Leere", () => mit((d) => { d.aussagen[0].abgeloest_durch = "beispiel-a09"; }).some((e) => e.includes("keine Aussage"))],
  ["Ablösung durch sich selbst", () => mit((d) => { d.aussagen[0].abgeloest_durch = "beispiel-a01"; }).some((e) => e.includes("selbst"))],
  ["Antwort ohne Datum", () => mit((d) => { delete d.fragen[0].beantwortet; }).some((e) => e.includes("braucht „beantwortet“"))],
  ["Datum ohne Antwort", () => mit((d) => { delete d.fragen[0].antwort; }).some((e) => e.includes("ohne Antwort"))],
  ["unbekanntes Feld nur Warnung", () => { const d = structuredClone(gut); d.aussagen[0].farbe = "rot"; const r = lauf(d); return r.errors.length === 0 && r.warnings.some((w) => w.includes("„farbe“")); }],
  ["Verweis [a:] gültig", () => pruefeVerweise("x.md", "siehe [a:beispiel-a02]", lauf(gut).ids).length === 0],
  ["Verweis [a:] ins Leere", () => pruefeVerweise("x.md", "siehe [a:beispiel-a99]", lauf(gut).ids).length === 1],
];
let fail = 0;
for (const [name, t] of tests) { const ok = t(); console.log(`${ok ? "✓" : "✗"} ${name}`); if (!ok) fail++; }
if (fail) { console.error(`✗ ${fail} von ${tests.length} Prüffällen fehlgeschlagen`); process.exit(1); }
console.log(`✓ ${tests.length} Prüffälle für daten/`);
