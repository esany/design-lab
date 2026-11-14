#!/usr/bin/env node
// Prüffälle für tools/zielbild.mjs: je Regel ein richtiger und ein falscher Fall.
//   node tools/zielbild-test.mjs
import { readFileSync } from "node:fs";
import { pruefen, erzeugen, dran, verweise as punktVerweise, pruefeAktualitaet, nackteNummern } from "./zielbild.mjs";
import { pruefeFarbrollen, stileAusHtml } from "./farbrollen.mjs";
import { verweise, NICHT } from "./website.mjs";
import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const hier = dirname(fileURLToPath(import.meta.url));

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
  ["Farben als Rollen aus den Tokens", () => { const h = erzeugen(gut); return h.includes("--bg:#f4f2ed") && h.includes("--signal:#d92d17") && h.includes("--bestaetigt:#2f6b3a") && h.includes("--offen:#8a5a00") && !h.includes("--accent"); }],
  // Stränge, Schnittstellen, Verbindungen (Entwurf „ein Zielbild“, Abschnitt 2)
  ["Teil ohne gültigen Strang", () => hat(mit((d) => { d.straenge = [{ id: "a", name: "A", iteration: 1 }]; }), "ohne gültigen Strang")],
  ["Strang ohne Iteration", () => hat(mit((d) => { d.straenge = [{ id: "a", name: "A" }]; d.teile.forEach((t) => (t.strang = "a")); }), "„iteration“ muss")],
  ["mit Strängen gültig", () => mit((d) => { d.straenge = [{ id: "a", name: "A", iteration: 1 }, { id: "b", name: "B", iteration: 2 }]; d.teile.forEach((t) => (t.strang = "a")); punkt(d, "farbe").auch = ["b"]; }).length === 0],
  ["Schnittstelle zu unbekanntem Strang", () => hat(mit((d) => { d.straenge = [{ id: "a", name: "A", iteration: 1 }]; d.teile.forEach((t) => (t.strang = "a")); punkt(d, "farbe").auch = ["x"]; }), "unbekanntem Strang")],
  ["Schnittstelle ohne Stränge im Kopf", () => hat(mit((d) => { punkt(d, "farbe").auch = ["x"]; }), "braucht „straenge“")],
  ["Verbindung auf Unbekanntes, auch ohne Auftrag", () => hat(mit((d) => { punkt(d, "farbe").stuetzt = ["gibt-es-nicht"]; }), "unbekanntem Punkt")],
  ["Verbindung auf sich selbst", () => hat(mit((d) => { punkt(d, "farbe").stuetzt = ["farbe"]; }), "auf sich selbst")],
  // Wer dran ist: nur echte Entscheidungen des Eigentümers (Gegenprüfung #217, Abschnitt 4 B)
  ["dran: startklar heißt, deine Freigabe fehlt (auch wenn ein Modell ausführt)", () => dran({ s: "auftrag", stand: "startklar", wer: "Claude" }) === "du"],
  ["dran: laufender Auftrag gehört dem Ausführenden", () => dran({ s: "auftrag", stand: "läuft", wer: "Codex" }) === "Codex"],
  ["dran: Auftrag an dich", () => dran({ s: "auftrag", stand: "freigegeben", wer: "Du am Rechner" }) === "du"],
  ["dran: offene Frage ist deine", () => dran({ s: "offen" }) === "du"],
  ["dran: beantwortete Frage ist niemandes", () => dran({ s: "offen", bestaetigt: "2026-11-14" }) === ""],
  ["dran: Korrektur macht dich nicht zuständig", () => dran({ s: "vorschlag", n: "geändert", f: "muss besser" }) === ""],
  ["dran: ausdrücklich niemand", () => dran({ s: "offen", dran: "" }) === ""],
  // Farbe als Bedeutung (tools/farbrollen.mjs)
  ["Farbrolle am passenden Selektor", () => pruefeFarbrollen(".punkt.dran{border-color:var(--signal)}", "x.css").length === 0],
  ["Signalrot für etwas anderes", () => pruefeFarbrollen(".befund{color:var(--signal)}", "x.css").some((e) => e.includes("„signal“"))],
  ["Grün für etwas anderes", () => pruefeFarbrollen("a:hover{color:var(--lab-bestaetigt)}", "x.css").length === 1],
  ["alte Akzentfarbe gemeldet", () => pruefeFarbrollen("a{color:var(--lab-accent)}", "x.css").some((e) => e.includes("alte Akzentfarbe"))],
  ["Farbwert direkt gemeldet", () => pruefeFarbrollen(".x{color:#D92D17}", "x.css").some((e) => e.includes("direkt"))],
  ["Kommentar zählt nicht", () => pruefeFarbrollen("/* var(--signal) */.x{color:var(--fg)}", "x.css").length === 0],
  ["Vorlage hält die Farbrollen", () => pruefeFarbrollen(stileAusHtml(readFileSync(join(hier, "zielbild/vorlage.html"), "utf8")), "vorlage").length === 0],
  // Website: tote Links (tools/website.mjs)
  ["Links: Weiterleitung zählt als Link", () => JSON.stringify(verweise('<meta http-equiv="refresh" content="0; url=../../zielbild/">')) === '["../../zielbild/"]'],
  ["Zielbilder werden nicht öffentlich ausgeliefert (Eigentümer 14.11.)", () => { const r = (p) => join(hier, "..", p); return !NICHT(r("zielbild/index.html")) && !NICHT(r("leitfaden/zielbild/index.html")) && NICHT(r("leitfaden/index.html")) && NICHT(r("studies")); }],
  ["Grün nur für Bestätigtes", () => /const rolle=p=>p\.s==="bestaetigt"&&!fest\(p\)\?"":/.test(readFileSync(join(hier, "zielbild/vorlage.html"), "utf8"))],
  ["Begründung nur für bestehende Verbindung", () => hat(mit((d) => { punkt(d, "farbe").stuetzt_warum = { fokus: "x" }; }), "keine Verbindung dorthin")],
  ["Links: extern, Anker und Skript zählen nicht", () => JSON.stringify(verweise('<a href="x/">a</a><a href="https://b">b</a><a href="#c">c</a><script>"<a href=\\"d\\">"</script>')) === '["x/"]'],
  // Was zum Eigentümer geht, ist für sich verständlich (Grundmodell; Rückmeldung zum Zielbild 14.11.)
  ["für dich: ohne Kontext gemeldet", () => hat(mit((d) => { delete punkt(d, "druck").k; }), "Kontext „k“ fehlt")],
  ["für dich: nackte Nummer im Satz gemeldet", () => hat(mit((d) => { punkt(d, "druck").t = "#109 offen: wie drucken?"; }), "#109 ohne Namen")],
  ["für dich: Nummer in Klammern hinter dem Namen erlaubt", () => mit((d) => { punkt(d, "druck").t = "Neustart-Test (#109): wie drucken?"; }).length === 0],
  ["für dich: Kürzel und Entscheidungsnummer gemeldet", () => JSON.stringify(nackteNummern("O3 läuft, 0031 gilt, A02 fehlt")) === '["O3","0031","A02"]'],
  ["für dich: Verweis auf einen Chat statt Inhalt gemeldet", () => hat(mit((d) => { punkt(d, "druck").k = "Siehe Chat vom 14.11."; }), "verweist auf einen Chat")],
  ["für dich: Herkunft und Ruhendes dürfen Nummern tragen", () => mit((d) => { punkt(d, "druck").g = "#12, 0031"; punkt(d, "farbe").t = "#12 erledigt"; }).length === 0],
  ["Verweise: Datei, Entscheidung und Issue werden Links", () => { const v = Object.fromEntries(punktVerweise({ g: "stand.md, 0031 und #5; gibt/es/nicht.md" }, "o/r")); return v["stand.md"] === "https://github.com/o/r/blob/main/stand.md" && /decisions\/0031-/.test(v["0031"]) && v["#5"] === "https://github.com/o/r/issues/5" && !("gibt/es/nicht.md" in v); }],
  ["Verweise: Seite verlinkt nur mit „repo“ im Kopf", () => !erzeugen({ ...gut }).includes('"vw"') && erzeugen({ ...gut, repo: "o/r" }).includes('"vw"')],
  ["Aktualität: geschlossenes Issue im Satz gemeldet", () => pruefeAktualitaet({ teile: [{ punkte: [{ id: "x", s: "offen", t: "Neustart-Test (#5)?", k: "k" }] }] }, { 5: "closed" }).length === 1],
  ["Aktualität: offenes Issue und fertiger Auftrag still", () => pruefeAktualitaet({ teile: [{ punkte: [{ id: "x", s: "offen", t: "Test (#5)?", k: "k" }, { id: "y", s: "auftrag", stand: "fertig", wer: "C", t: "Test (#6)" }] }] }, { 5: "open", 6: "closed" }).length === 0],
  ["Kommandozeile ohne --aus findet die Datendatei", () => {
    const r = spawnSync(process.execPath, [join(hier, "zielbild.mjs"), join(hier, "fixtures/zielbild/beispiel.json"), "--check"], { encoding: "utf8" });
    return !/Aufruf:/.test(r.stderr) && /beispiel\.json|index\.html/.test(r.stdout + r.stderr);
  }],
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
