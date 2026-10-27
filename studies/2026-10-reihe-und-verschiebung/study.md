---
title: Reihe und Verschiebung
date: 2026-10-27
method: konkrete-kunst
status: offen
tags: [geometrie, farbe, serie, permutation, oklch]
---

# Reihe und Verschiebung

## Frage

Wie viel Ordnung braucht ein quadratisches Feld aus gleichwertigen Farben,
damit eine Regel sichtbar wird — und ab wann kippt Ordnung in Ornament?

## Regel

- Raster `n × n`, `k` Farben.
- Zelle `(i, j)` erhält Farbe `(i · s + j) mod k`.
  Jede Zeile ist die um `s` verschobene vorige (zyklische Permutation).
- Farben: `k` gleiche Schritte im Farbton (OKLCH), Helligkeit und Buntheit
  konstant — damit nur der Ton variiert, nicht das Gewicht.
- **Gleiche Mengen** genau dann, wenn `k` ein Teiler von `n` ist.
  Die Studie misst das bei jedem Zustand.

**Negativfolie:** dieselben Mittel (Raster, Farben), zufällig verteilt. Sie
zeigt, was ohne Regel entsteht — das „Durchschnittsbild“ einer Fläche.

## Parameter

| Parameter | Bereich | Wirkung |
|---|---|---|
| `n` | 2–24 | Feinheit des Rasters |
| `k` | 2–12 | Anzahl der Farben |
| `s` | 0 … k−1 | Verschiebung: 0 = Streifen, 1 = Diagonale, andere = Sprünge |
| `gap` | 0–0,3 | Fuge zwischen Feldern (relativ) |
| `L`, `C`, `h` | OKLCH | Helligkeit, Buntheit, Startton |
| `seed` | 1–999 | nur für die Negativfolie |

Jeder Zustand ist per URL teilbar; Export als SVG mit sRGB-Farben.

## Was geprüft wurde (Agent)

- Regel umgesetzt wie formuliert; Mengenmessung zeigt bei `n=12, k=4`
  je 36 Felder pro Farbe.
- Farbumrechnung OKLCH → sRGB mit Rücknahme der Buntheit bei
  Gamut-Überschreitung (Ton und Helligkeit bleiben erhalten).
- Nicht geprüft: Druckwiedergabe (CMYK), Wirkung gleicher Mengen bei
  unterschiedlicher wahrgenommener Farbschwere.

## Beobachtung

*Vom Menschen auszufüllen.*

Vorschlag zum Hinsehen: Bei `s = 0` dominiert die Richtung (Streifen), bei
`s = 1` die Diagonale. Bei `k = 5, s = 2` entsteht ein Feld ohne
Hauptrichtung — die Regel ist streng, aber nicht mehr sofort lesbar. Liegt dort
die Grenze zwischen Ordnung und Ereignis?

## Nächster Schritt

Offen — mögliche Fortsetzungen: Progression der Feldgrößen statt gleicher
Module; zweite Regel für Helligkeit (überlagerte Reihen); Übertragung als
Druck (Typst/PDF) oder Raum (Blender).
