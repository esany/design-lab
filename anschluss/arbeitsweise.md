---
thema: Arbeitsweise mit KI · Wissensformen
stand: Prüfstand abgeschlossen (08.11.); Leitfaden (Arbeitsname Werkbuch) wird über die Seite „Zielbild Leitfaden“ (leitfaden/zielbild/, PR #167) entworfen, Iteration 6 vom 11.11. mit Teil „Aufträge“; Ergebnisse von #172 (PR #174) und #173 (PR #175) liegen ungeprüft; KI-Fachpaket wartet.
naechster_schritt: Neuer Leitfaden-Chat (Claude): PR #174 und #175 prüfen; Rückmeldung des Eigentümers zu Iteration 6 einarbeiten; Werkbuch startklar, sobald „werdend und gilt“ bestätigt ist; Issues pflegen.
offen: [180]
---

# Thema: Arbeitsweise mit KI · Wissensformen

**Zuletzt fortgeschrieben:** 11.11.2026 (Claude, Leitfaden-Chat, Abschluss)

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
  Wortlaut des Eigentümers: `daten/arbeitsweise.json`, f41–f64.

| Strang | Stand | Als Nächstes |
|---|---|---|
| Prüfstand | abgeschlossen 08.11.; [Ergebnis](../evals/neustart-daten/README.md) | – |
| Leitfaden | Zielbild Iteration 6 (`leitfaden/zielbild/`, PR #167); ersetzt Konzeptstand 08.11. sowie PR #164 und #166 als Arbeitsstand; 0032 auf Probe bis 05.12. | PR #174/#175 prüfen; Frage 7 (Schnitt von Fachwissen) nachreichen; Werkbuch bauen nach Freigabe; Begriffe festlegen |
| KI-Fachpaket | Konzept, teils überholt | erst nach dem Leitfaden |

**Vorschläge aus dem Konzeptstand 08.11.** (Moment am Chatende, Prüfung auf Dopplungen, Schnittmengen paralleler Richtungen) stehen jetzt im Zielbild.

**Zu beachten:** PR #187 baut den Zielbild-Generator als Werkzeug (0036); nach Übernahme nutzt #167 es statt eigener Vorlage. PR #176 kollidiert mit #167.

**Geparkt:** Radar als Daten und Ansicht (Matrix oder Kreis offen); Freigabe-Prüfung (#132);
Hooks; Projektnotiz paleo-type; Radar-Zeile Basic Memory; bei Konflikt startet GitHub keine Prüfung.

**Offene Fragen und Aussagen:** nur in `daten/arbeitsweise.json`, lesbar in `daten/arbeitsweise.md`.

<details><summary>Für die Modelle: Fundstellen</summary>

- `research/2026-11-wissensformen/`: `konzeptstand-2026-11-08.md` gilt; `konzept.md` und
  `fachpaket-ki-werkzeug.md` teils überholt (markiert).
- Vorfall 05.11.: #127 ohne Freigabe übernommen, am 06.11. zurückgenommen (#129, #130).
</details>
