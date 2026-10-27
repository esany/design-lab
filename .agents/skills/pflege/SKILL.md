---
name: pflege
description: Maintenance routine for the lab — weekly radar scan and monthly health check. Use in scheduled runs or when asked to tidy, refresh or review the state of the lab. Ends in a pull request; merges itself only within the free zone when checks are green, otherwise raises open points.
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

## Quartalsweise: Ausweg-Test

Prüffälle aus `evals/` mit einem zweiten Modell und einem zweiten Werkzeug
durchführen. Ergebnis als Eintrag in `experiments/`.

## Nie

- direkt auf `main` schreiben; Entscheidungen still treffen
- Dinge löschen — nur nach `archive/` verschieben oder markieren
- Radar-Einträge ohne Quelle
