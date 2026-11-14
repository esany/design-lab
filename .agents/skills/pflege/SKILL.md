---
name: pflege
description: Maintenance routine for the lab — weekly radar scan and monthly health check. Use in scheduled runs or when asked to tidy, refresh or review the state of the lab. Ends in a pull request; merges itself only within the free zone when checks are green, otherwise raises open points.
dient: A23, A33
---

# Pflege des Labors

Das Labor bleibt lebendig, wenn Neues kontrolliert hineinkommt und Altes
sichtbar altert. Jede Pflege endet als **ein** Pull Request oder als kurze
Meldung „nichts zu tun“.

**Wer:** Radar-Scan und Pflege führt ChatGPT aus (Eigentümer, 14.11.2026; 0025). Die geplante
Claude-Aufgabe „design-lab Orchestrierung“ legt dafür Aufträge mit dem Label `an:chatgpt` an:
alle zwei Wochen montags den Radar-Scan (0025), am Monatsersten die Pflege. ChatGPT findet sie
in seiner geplanten Prüfung (Skill `issue`, Abschnitt H). ChatGPT übernimmt nichts selbst: Claude
prüft den Pull Request und übernimmt ihn. Fragen an den Eigentümer stehen im Ergebnis; Claude
bringt sie ins Zielbild. Jede Pflege braucht einen Verlaufseintrag `verlauf/JJJJ-MM-TT-<kurz>.md`.
`stand.md` wird aus den Merkzetteln erzeugt und nie von Hand geändert.

**Altbestand frisch halten (0039):** Jede Pflege nimmt auch Bestehendes mit: Skills, Fachpakete,
Radar und Quellen, die älter oder ungeprüft sind oder den Systemgrundsätzen nicht folgen (Beleg,
`dient:`, Geltungsbereich), werden mit dem Skill `fundstueck` neu eingeordnet. Das gilt auch für
fremde Skills und Plugins in der Arbeitsumgebung. Neues wird in Bestehendes eingearbeitet.

## Alle zwei Wochen: Radar-Scan

1. Suche nach Neuem zu: KI-Agenten und MCP für Gestaltungswerkzeuge, offene
   Design-Werkzeuge (Penpot, Blender, Typst, Observable …), generative
   Gestaltung, Informationsvisualisierung, Design-Tokens, offene Modelle.
2. Nur aufnehmen, was **konkret nutzbar** ist und eine Quelle hat
   (Release, Doku, Repo). Keine Meinungsartikel ohne Substanz.
3. Je Fund eine Zeile in `radar.md` unter „Neu — zu bewerten“: Name, was es
   ist, warum relevant, Quelle, Datum.
4. **Je Fund die Einordnung, ganzheitlich** (Zielbild Leitfaden, Punkt „Radar“, bestätigt
   11.11.2026): Was bedeutet es für das System? Welchen Mehrwert schafft es? Was koppelt es neu,
   und wie war es vorher? Welches fachliche und methodische Wissen trägt es (Skill `fundstueck`,
   Schritt 3)? Kurz, mit Status belegt · abgeleitet · nicht belegt. Das Radar sammelt so
   Erfahrung, nicht nur Namen.
5. Bestehende Einträge ändern den Ring nur mit Begründung; „Einsetzen“ und „Halten“ entscheidet
   der Eigentümer (Konzept Wissensformen).
6. Branch `lab/gpt-radar-JJJJ-MM-TT`, PR-Titel „Radar: …“, „Refs #<Auftrag>“.

## Monatlich: Gesundheits-Check

1. Ist die letzte automatische Prüfung auf `main` grün (GitHub, Workflow „Prüfen“)? Den Build
   selbst prüft jede Änderung schon.
2. Studien mit `status: offen` älter als 60 Tage → im PR auflisten
   (behalten, verwerfen oder weiterführen?).
3. Experimente ohne Ergebnis älter als 30 Tage → auflisten.
4. Radar-Einträge älter als 6 Monate → neu bewerten oder nach „Hold“.
5. Skills, die in 3 Monaten nicht genutzt wurden → Archivierung vorschlagen.
6. Offene Issues ohne Bewegung → kurz zusammenfassen.
7. Branch `lab/gpt-pflege-JJJJ-MM`, PR mit Checkliste (geprüft · nicht geprüft · offen).

## Monatlich: Verknüpfung und Issues (A31–A34)

1. `verknuepfung.md` lesen. Was dort unter „Auffällig“ steht, wird je eine Frage in
   Alltagssprache mit Empfehlung im Ergebnis.
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
5. PR „Leitfaden: …“. Neue oder überholte Einträge gehen als kurze
   Liste an den Menschen; reine Prüfdaten und Quellen darf die Pflege selbst übernehmen.

## Quartalsweise: Ausweg-Test

Prüffälle aus `evals/` mit einem zweiten Modell und einem zweiten Werkzeug
durchführen. Ergebnis als Eintrag in `experiments/`.

## Nie

- direkt auf `main` schreiben; Entscheidungen still treffen
- Dinge löschen — nur nach `archive/` verschieben oder markieren
- Radar-Einträge ohne Quelle

## Anschluss prüfen (Entscheidung 0024)

Monatlich: Hat jedes offene Issue und jedes laufende Experiment eine Fundstelle im
Repo (Experiment-Datei, `research/`, Fachpaket)? Sind die Merkzettel in
`anschluss/` aktuell (0029)? Fehlt etwas, kommt es als Frage ins Ergebnis.
