---
name: pflege
description: Maintenance routine for the lab — weekly radar scan and monthly health check. Use in scheduled runs or when asked to tidy, refresh or review the state of the lab. Ends in a pull request; merges itself only within the free zone when checks are green, otherwise raises open points.
dient: A23, A33
---

# Pflege des Labors

Das Labor bleibt lebendig, wenn Neues kontrolliert hineinkommt und Altes
sichtbar altert. Jede Pflege endet als **ein** Pull Request oder als kurze
Meldung „nichts zu tun“. Der Agent übernimmt den Pull Request selbst, wenn er
nur `radar.md`, `stand.md`, `experiments/` oder `studies/` betrifft und alle
Prüfungen grün sind (Regel 2 in `AGENTS.md`). Alles, was eine Entscheidung
braucht, landet als offener Punkt in `stand.md`.

## Wöchentlich: Radar-Scan

1. Suche nach Neuem zu: KI-Agenten und MCP für Gestaltungswerkzeuge, offene
   Design-Werkzeuge (Penpot, Blender, Typst, Observable …), generative
   Gestaltung, Informationsvisualisierung, Design-Tokens, offene Modelle.
2. Nur aufnehmen, was **konkret nutzbar** ist und eine Quelle hat
   (Release, Doku, Repo). Keine Meinungsartikel ohne Substanz.
3. Je Fund eine Zeile in `radar.md` unter „Neu — zu bewerten“: Name, was es
   ist, warum relevant, Quelle, Datum.
4. Bestehende Einträge ändern den Ring nur mit Begründung.
5. Branch `lab/radar-JJJJ-MM-TT`, PR-Titel „Radar: …“.

## Monatlich: Gesundheits-Check

1. `node tools/build.mjs` — läuft es fehlerfrei?
2. Studien mit `status: offen` älter als 60 Tage → im PR auflisten
   (behalten, verwerfen oder weiterführen?).
3. Experimente ohne Ergebnis älter als 30 Tage → auflisten.
4. Radar-Einträge älter als 6 Monate → neu bewerten oder nach „Hold“.
5. Skills, die in 3 Monaten nicht genutzt wurden → Archivierung vorschlagen.
6. Offene Issues ohne Bewegung → kurz zusammenfassen.
7. Branch `lab/pflege-JJJJ-MM`, PR mit Checkliste.

## Monatlich: Verknüpfung und Issues (A31–A34)

1. `verknuepfung.md` lesen. Was dort unter „Auffällig“ steht, wird je ein offener Punkt in
   `stand.md`, als Frage in Alltagssprache mit Empfehlung.
2. Offene Issues: ohne Anforderung? ohne gesetzte Abhängigkeit? überholt oder gewachsen
   (Skill `issue`, E4)? Vorschlag: schließen, teilen oder ergänzen.
3. Die Spalte „Stand“ in `intent.md` mit Beleg prüfen; Änderungen schlägt die Pflege vor,
   sie entscheidet sie nicht.

## Monatlich: Leitfaden „Mit KI arbeiten“ (0032)

1. Die Quellen der Einträge in `leitfaden/eintraege.json` erneut öffnen, zuerst die
   laufend gepflegten Anleitungen der Anbieter (z. B. `anthropic-claude-code-praxis`).
   Hat sich eine Empfehlung geändert oder ist etwas als überholt markiert worden?
2. Nach Neuem suchen, das einen Eintrag stützt, widerlegt oder überholt: Anleitungen
   der Anbieter, Studien, Fundstücke und Radar-Funde des Monats.
3. Ändern nur mit Quelle: Text anpassen, `geprueft` setzen, Zeile in `aenderungen`.
   Überholtes **nicht löschen**: `status: veraltet`, `veraltet_seit`, `stattdessen`
   setzen und den Eintrag in den Bereich `veraltet` verschieben. Neue Quellen in den Korpus.
4. Neue Einträge nur mit mindestens einer Quelle oder einem Laborbefund; Faustregeln
   als `abgeleitet` markieren.
5. `node tools/build.mjs`, PR „Leitfaden: …“. Neue oder überholte Einträge gehen als kurze
   Liste an den Menschen; reine Prüfdaten und Quellen darf die Pflege selbst übernehmen.

## Quartalsweise: Ausweg-Test

Prüffälle aus `evals/` mit einem zweiten Modell und einem zweiten Werkzeug
durchführen. Ergebnis als Eintrag in `experiments/`.

## Nie

- direkt auf `main` schreiben; Entscheidungen still treffen
- Dinge löschen — nur nach `archive/` verschieben oder markieren
- Radar-Einträge ohne Quelle

## Anschluss prüfen und konsolidieren (Entscheidung 0024)

Monatlich: Befunde eines Themas zu einem zusammenführen, die Vorfassungen mit
`schicht: archiv` markieren (nicht löschen); `verzeichnis.md` zeigt, was wo liegt.
Hat jedes offene Issue und jedes laufende Experiment eine Fundstelle im
Repo (Experiment-Datei, `research/`, Fachpaket)? Sind die Merkzettel in
`anschluss/` aktuell und passt die Themenliste in `stand.md` dazu (0029)? Fehlt etwas, kommt es als offener Punkt in `stand.md`.
