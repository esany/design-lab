---
dient: A07, A17, A33, A34
issue: "#112 (Teil von #62)"
datum: 2026-10-30
quelle: "esany/paleo-type (privat), main@6adf6c6a944d4e8801f7ec65c376a67cc2583ebd"
status: Inventar; Dateigrößen exakt, Zeichen und Tokens geschätzt
---

# paleo-type: Schichten, Lesekosten und Berichtsketten

**Grenze:** Dies ist ein öffentliches *Metadateninventar* eines privaten Repositories. Es enthält nur Muster, Mengen und Pfad-/Issue-Verweise, keine Archivalien, Transkriptionen, privaten Inhalte oder Ausschnitte. **Status: belegt** für Anzahl, Pfade und UTF-8-Bytegrößen des Git-Trees; **abgeleitet** für Zuordnung und Näherungswerte.

## Schichten am Git-Stand vom 30. Oktober 2026

Gezählt wurden **267 Dateien, 3.698.730 UTF-8-Bytes** im vollständigen, nicht abgeschnittenen Git-Tree `main@6adf6c6`. Die Zuordnung unten ist einmalig und nach Dateipfad vorgenommen: Forschung = `projects/`, `corpus/`, `source-entry/`, `entities/`; Methode = `methodology/`, `requirements/`, `templates/`; Code und Tests = `tools/`, `tests/`; Verfahren/Verwaltung = `engineering/`, `.agents/`, `.github/`, `docs/` und fünf Wurzeldateien. Mischfälle wurden nicht doppelt gezählt.

| Schicht | Dateien | UTF-8-Bytes (gemessen) | Zeichen (ca.) | Tokens (ca.) |
|---|---:|---:|---:|---:|
| Forschung | 90 | 1.100.014 | 1.090.000 | 275.000 |
| Methode | 20 | 224.773 | 223.000 | 56.000 |
| Verfahren und Verwaltung | 120 | 1.965.395 | 1.950.000 | 491.000 |
| Code und Tests | 37 | 408.548 | 405.000 | 102.000 |
| **Gesamt** | **267** | **3.698.730** | **ca. 3.668.000** | **ca. 924.000** |

**Messgrenze (nicht belegt als exakte Zeichen-/Tokenzählung):** Der Git-Tree liefert exakte Dateigrößen in Bytes, keine Unicode-Zeichen oder Modelltokens. Zeichen sind hier mit rund 99 % der Bytes angenähert; Tokens grob mit Bytes/4. Diese beiden Spalten sind **keine** echte Zeichenzählung bzw. Tokenisierung, nicht als Abnahmeschwellen benutzen. Ein konkretes Beispiel: `AGENTS.md` hat 26.588 Bytes und beim Lesen 26.551 Unicode-Zeichen. Die Verfahrensschicht beansprucht nach Bytes **53,1 %**, die Forschungs- und Quellenschicht **29,7 %**. **Status: belegt** für Bytes/Anteile; **abgeleitet** für Lesekosten.

## Startpfad bis zur ersten Forschungsaktion

Ein neuer Arbeitskontext muss laut `paleo-type/AGENTS.md` mindestens `GOVERNING_OBJECTIVE.md`, `AGENTS.md`, zutreffende kanonische Regeln und den Projekt-/Quellenzustand lesen; `README.md` leitet die Navigation. Die drei häufigen Einstiegsdokumente `GOVERNING_OBJECTIVE.md` (4.695 Bytes), `AGENTS.md` (26.588) und `README.md` (12.327) ergeben **43.610 Bytes**, noch ohne Projektkontext. **Status: belegt**, Pfade in Repo-Wurzel.

**Beispiel, keine universelle Pflichtliste:** Für eine offene Quellenerkundung kommen etwa `methodology/historical-source-workflow.md` (24.161), `methodology/research-gates.md` (19.040), `projects/ssta-20578-nr-632/project.yml` (1.292) und `projects/ssta-20578-nr-632/STATUS.md` (15.610) hinzu: **103.713 Bytes** mit den drei Einstiegsdokumenten. Sind zusätzlich `methodology/workflow.md` (32.168), `methodology/source-and-provenance.md` (12.143) und `methodology/evidence-policy.md` (2.471) anwendbar, sind es **150.495 Bytes**, noch ohne den eigentlichen Bild-/Quellenbefund. **Status: abgeleitet** für den Beispielpfad; Bytes je Pfad **belegt** durch Git-Tree. Mehrfachzitate sind keine neuen Handlungen; fachliche Aktivierung kann früher und gezielter erfolgen.

## Wer hält den aktuellen Stand?

| Gegenstand | maßgeblicher Ort und Signal | Gegenprüfung am 30.10. | Status |
|---|---|---|---|
| Engineering-Baseline | `engineering/configuration.json`: akzeptierte Baseline, keine aktiven Änderungen; `engineering/changes/SD-KA-01/STATE.json`: `complete` | `README.md` und `engineering/README.md` beschreiben die Abnahme ebenfalls als abgeschlossen | **belegt: konsistent** |
| Engineering-Historie | `engineering/changes/SD-KA-01/RESULT.md` | **Der Kopf** nennt noch WP6 `READY-NEXT` und SD-KA-01 `ACTIVE`, obwohl Konfiguration/STATE/README abgeschlossen melden. Die spätere Ergebnisdarstellung ist historisch fortgeschrieben; der Kopf ist veraltet. | **belegt: Abweichung** |
| Forschungskontext | `projects/<id>/project.yml`, `STATUS.md`, zugehörige Quellen-/Evidenzregister | Verschiedene Projekte haben bewusst verschiedene Zeitpunkte. Ein älterer `STATUS.md` eines anderen Projekts ist nicht an sich ein Konflikt. | **belegt: verteilte, projektlokale Besitzer** |
| Arbeits-/Review-Reste | GitHub-Issues, offene PRs, `engineering/evidence/` | Neue #353 und #346/#347 liegen außerhalb des als abgeschlossen bezeichneten SD-KA-01-Pakets. Ihre Existenz widerruft die *technische* SD-KA-Abnahme nicht automatisch. | **belegt** für offen/geschlossen; **abgeleitet** für Reichweite |

**Befund:** Kanonische Daten können konsistent sein, während eine bequem lesbare historische Überschrift nicht nachgezogen wurde. Eine „aktuelle“ Überschrift ist keine verlässliche Statusquelle allein wegen ihres Dateinamens. **Status: abgeleitet**; Belege: `engineering/configuration.json`, `engineering/changes/SD-KA-01/STATE.json`, `engineering/changes/SD-KA-01/RESULT.md`.

## Berichtsketten und Wiederholung

- **Gesamtmenge:** `engineering/evidence/audits/` **25 Dateien, 506.357 Bytes**; `engineering/evidence/research/` **42 Dateien, 979.080 Bytes**; `engineering/evidence/learning/` **3 Dateien**. Das sind vorhandene Bestände, **nicht** 25 unabhängige Wirksamkeitsnachweise. **Status: belegt** (Git-Tree).
- **SD-KA-01:** `engineering/changes/SD-KA-01/` enthält **10** Artefakte (PROBLEM, REQUIREMENTS, DESIGN, PLAN, QUALIFICATION, RESULT, STATE, MIGRATION, D016-Brief und Eigentümerzulassung). `RESULT.md` zeichnet **WP1–WP6** und jeweilige Prüfung/Rückgabe nach; `STATE.json` meldet sechs verifizierte Pakete. Das sind **mindestens sechs Paketprüfungen plus terminale Qualifikation**; nicht sieben unabhängige Fachreviews. **Status: belegt** durch Dateinamen/Köpfe.
- **Kontrollschicht, Review → Re-Review:** `engineering/evidence/audits/deterministic-control-layer-system-audit-2026-10-09.md` wird durch `.../deterministic-control-layer-critical-reaudit-2026-10-09.md` korrigiert; der zweite Bericht nimmt die Empfehlung einer allgemeinen neuen Schicht zurück. Begleitende PRs #324, #325, #326 dienen Dokumentation/Quellen/Re-Audit. **Status: belegt**.
- **Gespeicherte Lehre → Reparatur der Fertigbehauptung:** Die drei Dateien unter `engineering/evidence/learning/` enthalten zwei Lernnotizen (18./19.09.) und einen Reparaturbericht (23.09.). Der Reparaturbericht trennt Dokumentation, normative Geltung, ausführbaren Test und nachgewiesenes Verhalten. **Status: belegt**.
- **Quelleneingang/Edition:** Geschlossene #336 und offene #341 zeigen erneute fachliche Fehlsteuerung trotz bereits beschriebener Methode; die Zahl der Reviews oder das Schließen von #336 beweist keine verlässliche Anwendung. **Status: belegt** für Fallfolge, **abgeleitet** für begrenzte Wirkung.

## Offener Arbeitsbestand (GitHub am 30.10.)

Die GitHub-API liefert aktuell **39 offene Issues und 7 offene Pull Requests**, zusammen **46**; die ältere Zahl „45“ im Auftrag ist also eine Momentaufnahme vor #353. Jeder Eintrag wurde nach seinem *dominanten Gegenstand*, nicht allein nach Label, genau einmal eingruppiert. Grenzfälle sind interpretativ. **Status: belegt** für IDs und Offenheit; **abgeleitet** für Kategorien.

| Kategorie | Offene Issues | Offene PRs |
|---|---|---|
| **Forschung** | #352, #351, #350, #337, #308, #307, #306, #291, #270, #269, #268, #267, #266, #265, #263, #202, #62, #22, #13, #12, #6, #4, #3, #2, #1 | #290 |
| **Verfahren** | #353, #347, #346, #341, #297, #296, #292, #282, #280, #272, #162, #90 | #349, #348, #327, #321 |
| **Technik** | #334, #271 | #335, #332 |

**Grenze:** „Forschung“ enthält auch konkrete Evidenz- und fachliche Datenmodellfragen, „Technik“ konkrete Quellensicherungs-/Intake-Implementierung, „Verfahren“ Steuerung, Fehler und Review. Ein offenes Issue bedeutet nicht automatisch aktuell freigegebenen Arbeitsbeginn. **Status: abgeleitet**; maßgeblich bleiben Issue- und PR-Texte.

## Prüfbarkeit

- **Gelesen:** vollständiger Git-Tree, zentrale methodische/Engineering-Besitzer, gezielte Lernen-/Incident-Dateien, aktuelle offene und ausgewählte geschlossene Issues.
- **Nicht ausgeführt:** privates Repo lokal klonen, Tokenizer über alle Dateien, Originalbilder untersuchen, Engineering-Suite erneut ausführen.
- **Vorsicht:** Hauptaussagen über Wirksamkeit in den Karten unterscheiden vorliegende Testberichte von selbst ausgeführten Tests.
