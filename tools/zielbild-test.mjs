#!/usr/bin/env node
// Prüffälle für tools/zielbild.mjs: je Regel ein richtiger und ein falscher Fall.
//   node tools/zielbild-test.mjs
import { readFileSync } from "node:fs";
import { pruefen, erzeugen } from "./zielbild.mjs";

const gut = JSON.parse(readFileSync(new URL("./fixtures/zielbild/beispiel.json", import.meta.url), "utf8"));
const mit = (f) => { const d = structuredClone(gut); f(d); return pruefen(d); };
const punkt = (d, id) => d.teile.flatMap((t) => t.punkte).find((p) => p.id === id);
const hat = (fehler, text) => fehler.some((e) => e.includes(text));

const tests = [
  ["richtiges Beispiel", () => pruefen(gut).length === 0],
  ["Titel fehlt", () => hat(mit((d) => { delete d.titel; }), "„titel“ fehlt")],
  ["Schlüssel mit Großbuchstaben", () => hat(mit((d) => { d.schluessel = "Zielbild"; }), "„schluessel“")],
  ["Iteration keine Zahl", () => hat(mit((d) => { d.iteration = "2"; }), "„iteration“")],
  ["Stand kein Datum", () => hat(mit((d) => { d.stand = "11.11.2026"; }), "„stand“")],
  ["Kennung doppelt", () => hat(mit((d) => { punkt(d, "farbe").id = "fokus"; }), "doppelt")],
  ["Status unbekannt", () => hat(mit((d) => { punkt(d, "farbe").s = "sicher"; }), "Status „sicher“")],
  ["Satz fehlt", () => hat(mit((d) => { delete punkt(d, "farbe").t; }), "Satz „t“ fehlt")],
  ["vorher ohne Änderungsart", () => hat(mit((d) => { delete punkt(d, "abstand").n; }), "ohne Änderungsart")],
  ["geändert und bestätigt", () => hat(mit((d) => { punkt(d, "fokus").n = "geändert"; }), "hebt die Bestätigung auf")],
  ["Impuls ohne Priorität", () => hat(mit((d) => { delete punkt(d, "papier").prio; }), "Impuls ohne")],
  ["Auftrag ohne wer", () => hat(mit((d) => { delete punkt(d, "a-quellen").wer; }), "ohne „wer“")],
  ["Auftrag beruht auf Unbekanntem", () => hat(mit((d) => { punkt(d, "a-quellen").stuetzt = ["gibt-es-nicht"]; }), "unbekanntem Punkt")],
  ["startklar auf Unbestätigtem", () => hat(mit((d) => { punkt(d, "a-entwurf").stand = "startklar"; }), "nicht bestätigt")],
  ["Seite ohne offene Platzhalter", () => !/\/\*[A-Z_]+\*\//.test(erzeugen(gut))],
  ["Titel wird maskiert", () => erzeugen({ ...gut, titel: "A <b>" }).includes("<h1>A &lt;b&gt;</h1>")],
  ["Farben aus den Tokens", () => erzeugen(gut).includes("--bg:#f4f2ed") && erzeugen(gut).includes("--accent:#d92d17")],
  ["Daten können kein Skript schließen", () => !erzeugen({ ...gut, teile: [{ teil: "x", punkte: [{ id: "x", s: "offen", t: "</script>" }] }] }).includes("\"</script>")],
];

let falsch = 0;
for (const [name, f] of tests) {
  let ok = false;
  try { ok = f(); } catch (e) { console.error(`  Ausnahme: ${e.message}`); }
  console.log(`${ok ? "✓" : "✗"} ${name}`);
  if (!ok) falsch++;
}
console.log(falsch ? `${falsch} von ${tests.length} Prüffällen falsch` : `alle ${tests.length} Prüffälle richtig`);
process.exit(falsch ? 1 : 0);
