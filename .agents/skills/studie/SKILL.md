---
name: studie
description: Use when creating or extending a visual study in studies/ — generative, rule-based or data-driven works rendered as self-contained HTML/SVG/JS, documented, screenshotted and added to the lab index.
---

# Studie anlegen

Eine Studie ist eine prüfbare visuelle Untersuchung: eine Regel, ein
Parameterraum, ein Ergebnis, das man sehen kann.

## Struktur

```
studies/<jjjj-mm-slug>/
  index.html     eigenständig lauffähig, keine Build-Schritte, keine CDN-Pflicht
  study.md       Frontmatter + Regel + Beobachtung
  preview.png    optional, Screenshot für Index und PR
```

`study.md` beginnt mit:

```yaml
---
title: Titel der Studie
date: 2026-10-27
method: konkrete-kunst        # Skill-Name der verwendeten Methode
status: offen                 # offen | behalten | verworfen
tags: [geometrie, farbe, serie]
---
```

Danach die Abschnitte **Frage**, **Regel** (formal, so knapp wie möglich),
**Parameter**, **Beobachtung** (vom Menschen auszufüllen, Agent schreibt
höchstens „Vorschlag:“), **Nächster Schritt**.

## Technische Regeln

- **Deterministisch.** Gleiche Parameter → gleiches Bild. Zufall nur mit
  festem, sichtbarem Seed.
- **Parameter in der URL** (`?n=8&k=4`), damit jeder Zustand verlinkbar ist.
- **Export:** SVG-Download-Knopf, wo sinnvoll. Vektor vor Pixel.
- **Lab-Tokens nutzen:** `<link rel="stylesheet" href="../../assets/tokens.css">`
  für Rahmen, Schrift, Bedienelemente — die Arbeit selbst darf eigene Farben
  haben.
- Bibliotheken (D3, Observable Plot, p5.js) nur als feste Version und lokal
  oder per gepinntem CDN-Link mit Versionsnummer.

## Erklärbarkeit (gestufte Offenlegung)

Jede Einstellung, jede Funktion und jedes Ergebnis muss nachvollziehbar sein —
nach Bedarf in Stufen:

| Stufe | sichtbar | Inhalt |
|---|---|---|
| 1 | immer | Bezeichnung, aktueller Wert, ein Satz „was es tut“ |
| 2 | auf Klick (`?`) | was, warum, Wirkung, „Ausprobieren: …“ |
| 3 | aufklappbar (`<details>`) | wie umgesetzt (Formel/Algorithmus), Quelle, Belegstatus, Grenzen |
| live | bei Auswahl | Herleitung eines konkreten Ergebnisses (z. B. eines Feldes) Schritt für Schritt |

Regeln:
- Texte stehen getrennt vom Code in `texte.js` der Studie — bearbeitbar ohne
  Programmierkenntnis.
- Fehlt zu einer Einstellung ein Text, meldet die Studie einen Fehler; die
  automatische Prüfung schlägt dann an.
- Nur relevante Einstellungen zeigen (abhängig von Modus/System).
- Ein Schalter „Alle Erklärungen öffnen“ für vollständige Lektüre.
- Zugänglich: Erklär-Knöpfe mit `aria-expanded`, Tastaturbedienung,
  Live-Bereiche mit `aria-live`.

## Prüfen

1. `node tools/build.mjs` — aktualisiert Index und prüft Frontmatter.
2. Rendern und Screenshot ansehen (Playwright o. ä.). Prüfen, ob das Bild
   **die Regel** zeigt — nicht nur, ob es „gut aussieht“.
3. Bei Methodenbezug: Kriterien des Methoden-Skills durchgehen.
4. Im PR: Screenshot, Regel in einem Satz, was geprüft wurde.

## Gegen das Mittelmaß

Wenn sinnvoll, zuerst die naheliegende Variante erzeugen und benennen —
dann bewusst davon abweichen. Beides im PR zeigen.
