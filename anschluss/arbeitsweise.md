---
thema: Arbeitsweise mit KI · Wissensformen
stand: Das eine Zielbild des Labors ist übernommen und veröffentlicht (zielbild/, 14.11.): sieben Stränge, Schnittstellen, drei Ansichten, Farbe als Rollen; Leitfaden und Bug #200 darin aufgegangen und archiviert. Beide Gegenprüfungen durch ChatGPT übernommen (#224, #232). Leitfaden Iteration 7; Auftrag Werkbuch startklar; KI-Fachpaket wartet.
naechster_schritt: Nächste Claude-Sitzung: die fünf abgegebenen Ergebnisse von ChatGPT prüfen und übernehmen (PR #256, #257, #259, #267, #269), dann erste Läufe der Verhaltensprüfungen (#271), Pilot Mittelmaß (#247), Plugins (#248), Werkbuch, Betriebstexte. Neustart-Test (#109) als geplante frische Sitzung am 14.11. abends; ChatGPT arbeitet ab:, Fundstück dataviz-skills (#178), Issue-Pflege vorbereiten (#273), Abgleich Anforderungen gegen Recherchen (#274); danach Iteration 2 der Arbeitsoberfläche.
offen: [180, 189, 200, 216, 237, 238, 262, 263, 271, 273, 274]
---

# Thema: Arbeitsweise mit KI · Wissensformen

**Zuletzt fortgeschrieben:** 14.11.2026 (Claude; Rückmeldung zu Iteration 1 des Zielbilds eingearbeitet: veraltete Fragen zurückgezogen, Prüfung auf Kontext und Aktualität, Orchestrierungslauf pflegt das Zielbild; Abgleich Prinzipien, Grundmodell und Mechanismen vorgelegt, Punkt „Prinzipien und Grundmodell nicht abgeglichen“)

**Worum es geht:** Wie arbeitet der Gestalter mit KI so, dass echte Werke und Werkzeuge entstehen
statt Textberge, und wie bleibt Wissen für jeden Chat erreichbar, ohne dass er alles lesen muss?
Maßstab: „Ich will nicht, dass es fertig wird, ich will, dass es gut wird.“
Leitfrage: Welche Struktur braucht das Labor, damit Wissen sparsam, ohne Widersprüche und für alle
Modelle gleich gut nutzbar ist?

**Im Gespräch:** Namen statt Nummern, immer mit Kontext und dem, was es für den Erkenntnisprozess
bedeutet (Wunsch des Eigentümers, 07./08.11.; [a:arbeitsweise-a28]).

**Gilt:**
- Fundstücke werden zuerst am Bedarf aus dem Intent gemessen; eine Lücke im Labor ist Bedarf, kein Ausschluss (Skill `fundstueck`, Prüffall `fundstueck-bedarf`, 11.11.). Offen: agent-skills (Osmani) als Plugin installieren oder die Entwicklungsabläufe in eigene Labor-Skills übernehmen; Empfehlung: übernehmen, Pilot an „Raster als Programm“ (#180).
- Das Labor ist selbst Entwurfsgegenstand; Experimente prüfen, wie gut es arbeitet (Intent, 08.11.).
- Die einzige Wahrheit liegt in Git, Übersichten werden erzeugt. Die Prüfung baut sie selbst
  (0033), Verlaufseinträge sind einzelne Dateien in `verlauf/`, Rot meldet die Prüfung (0034).
- Ein Zielbild für das Labor (`zielbild/punkte.json`, 14.11.): Leitfaden, Arbeitsweise und die
  übrigen Stränge sind Dimensionen darin; bestätigte Punkte sind die Baseline. Alte Seiten archiviert.
  Wortlaut des Eigentümers: `daten/arbeitsweise.json`, f41–f65.

| Strang | Stand | Als Nächstes |
|---|---|---|
| Prüfstand | abgeschlossen 08.11.; [Ergebnis](../evals/neustart-daten/README.md) | – |
| Leitfaden | Zielbild, Strang Leitfaden, Iteration 7: Fachwissen als Wirknetz, Teil „Begriffe“; 0032 auf Probe bis 05.12. | Werkbuch bauen nach Freigabe; Recherche, Teil 2 (mit Frage 7), sobald „Kontext ist der Oberbegriff“ bestätigt ist |
| KI-Fachpaket | Konzept, teils überholt | erst nach dem Leitfaden |

**Zu beachten:** Was zum Eigentümer geht, prüft der Build auf Kontext und nackte Nummern, „Stand gegen GitHub“ auf Aktualität; der geplante Orchestrierungslauf zieht das Zielbild nach (14.11., Analyse im Nachtrag der Einordnung). Der Build lässt nur ein Labor-Zielbild zu und meldet Farbrollen in falscher Bedeutung (0036, präzisiert 14.11.); `tools/website.mjs` findet tote Links. Offen: Rückweg ohne Kopie (nach dem Werk-Test), Studien nutzen noch die alte Akzentfarbe, Marke im Kopf der Startseite. Berichte: jede Zahl mit Bezug, Freigabe im Chat ([a:arbeitsweise-a43]).

**Geparkt:** Radar als Daten und Ansicht (Matrix, Eigentümer 14.11.; Ringe als Spalten, Felder als Zeilen); Freigabe-Prüfung (#132);
Hooks; Projektnotiz paleo-type; Radar-Zeile Basic Memory; bei Konflikt startet GitHub keine Prüfung.

**Offene Fragen und Aussagen:** nur in `daten/arbeitsweise.json`, lesbar in `daten/arbeitsweise.md`.

<details><summary>Für die Modelle: Fundstellen</summary>

- `research/2026-11-wissensformen/`: `konzeptstand-2026-11-08.md` gilt; `konzept.md` und
  `fachpaket-ki-werkzeug.md` teils überholt (markiert).
- Vorfall 05.11.: #127 ohne Freigabe übernommen, am 06.11. zurückgenommen (#129, #130).
- Zielbild als Werkzeug: 0036, gültig und eingebunden seit 13.11.
</details>
