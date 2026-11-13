---
thema: Arbeitsweise mit KI · Wissensformen
stand: Prüfstand abgeschlossen (08.11.); Leitfaden (Arbeitsname Werkbuch) wird über die Seite „Zielbild Leitfaden“ (leitfaden/zielbild/) entworfen, Iteration 7 vom 12.11. mit Teil „Begriffe“ und neuem Verständnis von Fachwissen als Wirknetz; Recherche (#174) und implizite Verweise (#175) am 13.11. übernommen; Auftrag Werkbuch startklar; KI-Fachpaket wartet.
naechster_schritt: Bug Flickenteppich (#216, 13.11.): Ursachen analysiert, Gegenprüfung durch ChatGPT (#217). Der Eigentümer will ein Zielbild statt mehrerer Seiten; Claude bestätigt im Chat das Verständnis und entwirft es dann als Entwurf, ohne schnellen Umbau. Bis dahin keine neuen Seiten, Werkzeuge oder Dateien neben Bestehendem.
offen: [180, 189, 200, 216, 217]
---

# Thema: Arbeitsweise mit KI · Wissensformen

**Zuletzt fortgeschrieben:** 13.11.2026 (Claude; Grundmodell in AGENTS.md, zehn Werkchat-Eingänge und Befund Skizze übernommen; Zielbild Bug #200, Iteration 3 mit der Gegenprüfung von ChatGPT; Stapel abgearbeitet)

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
- Leitfaden (Arbeitsname Werkbuch): Stand als Punkte auf der Seite „Zielbild Leitfaden“
  (`leitfaden/zielbild/`, PR #167); bestätigte Punkte sind die Baseline, Aufträge stehen oben.
  Wortlaut des Eigentümers: `daten/arbeitsweise.json`, f41–f65.

| Strang | Stand | Als Nächstes |
|---|---|---|
| Prüfstand | abgeschlossen 08.11.; [Ergebnis](../evals/neustart-daten/README.md) | – |
| Leitfaden | Zielbild Iteration 7 (`leitfaden/zielbild/`): Fachwissen als Wirknetz, Teil „Begriffe“; 0032 auf Probe bis 05.12. | Werkbuch bauen nach Freigabe; Recherche, Teil 2 (mit Frage 7), sobald „Kontext ist der Oberbegriff“ bestätigt ist |
| KI-Fachpaket | Konzept, teils überholt | erst nach dem Leitfaden |

**Zu beachten:** Der Zielbild-Generator ist seit 13.11. Werkzeug des Labors (0036, `tools/zielbild.mjs`); der Build erzeugt damit alle Zielbilder, auch den Leitfaden (13.11.); offen sind Kontrast und Rückweg (Fragen im Zielbild Bug #200). Der Farbvorschlag (Iteration 7) betrifft auch ihn. Berichte: jede Zahl mit Bezug, Freigabe im Chat ([a:arbeitsweise-a43]).

**Geparkt:** Radar als Daten und Ansicht (Matrix oder Kreis offen); Freigabe-Prüfung (#132);
Hooks; Projektnotiz paleo-type; Radar-Zeile Basic Memory; bei Konflikt startet GitHub keine Prüfung.

**Offene Fragen und Aussagen:** nur in `daten/arbeitsweise.json`, lesbar in `daten/arbeitsweise.md`.

<details><summary>Für die Modelle: Fundstellen</summary>

- `research/2026-11-wissensformen/`: `konzeptstand-2026-11-08.md` gilt; `konzept.md` und
  `fachpaket-ki-werkzeug.md` teils überholt (markiert).
- Vorfall 05.11.: #127 ohne Freigabe übernommen, am 06.11. zurückgenommen (#129, #130).
- Zielbild als Werkzeug: 0036, gültig und eingebunden seit 13.11.
</details>
