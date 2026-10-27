---
title: Reihe und Verschiebung
date: 2026-10-27
method: konkrete-kunst
status: behalten
tags: [geometrie, farbe, serie, permutation, itten, oklch]
---

# Reihe und Verschiebung

## Frage

Was leistet die **Ordnung**, was leistet die **Farbe**? Die Studie trennt beide:
eine Anordnungsregel aus der konkreten Kunst (Permutation) und ein wählbares
Farbsystem — eine neutrale Tonreihe oder einer der sieben Farbkontraste nach
Johannes Itten (Skill `farbkontraste-itten`).

## Regel

**Anordnung:** Eine Farbfolge der Länge `m` wird über ein Raster `n × n`
verteilt. Feld `(i, j)` erhält das Glied `p = (i · s + j) mod m` — jede Zeile
ist die um `s` verschobene vorige. **Negativfolie:** dieselbe Folge, zufällig
verteilt (fester Seed).

**Farbsysteme:**

| System | Farbfolge |
|---|---|
| Tonreihe (OKLCH) | `k` Töne in gleichen Schritten, L und C konstant |
| Farbe-an-sich | Itten-Farben in größter Buntheit (3, 6 oder 12) |
| Hell-Dunkel | Helligkeitsstufen, unbunt oder in einem Ton |
| Kalt-Warm | Pole Rotorange/Blaugrün ± Nachbarn, gleiche L und C |
| Komplementär | Gegenfarben nach Itten-Kreis **oder** Wahrnehmung (OKLCH +180°), mit Mischstufen |
| Simultan | eine bunte Farbe + neutrales Grau gleicher Helligkeit |
| Qualität | ein Ton, Sättigung in Stufen bis Grau |
| Quantität | zwei Farben im Flächenverhältnis nach Lichtwerten (Goethe/Itten) — als gewichtete Folge |

## Erklärbarkeit

Jede Einstellung erklärt sich in Stufen (Skill `studie`, Abschnitt
Erklärbarkeit): Kurzzeile → `?` → „Wie umgesetzt“ und „Quelle und Grenzen“.
Ein Klick auf ein Feld (oder Pfeiltasten) zeigt dessen vollständige
Herleitung bis zum Farbwert. Der **Erklärmodus** schreibt die Position `p` in
jedes Feld. Alle Texte stehen in `texte.js`.

## Was geprüft wurde (Agent)

- Alle acht Farbsysteme rendern ohne Fehler; Mengenmessung entspricht dem Soll
  der Folge, z. B. Quantität Gelb/Violett harmonisch bei n = 12: 36 : 108 = 1 : 3.
- Herleitung eines Feldes stimmt mit der Formel überein (Stichproben).
- Komplementär: Itten-Paar Rot/Grün mischt sich in OKLab **nicht** zu Grau,
  das wahrnehmungsbasierte Paar schon — als Lerninhalt offen ausgewiesen.
- Mobil ohne horizontalen Überlauf; Tastatursteuerung der Feldauswahl.
- **Nicht geprüft:** Druckwiedergabe; fachliche Gegenlesung der Itten-Texte
  durch eine Fachperson; Zuordnung der zwölf Itten-Farben zu OKLCH-Tönen
  (Annäherung des Agenten).

## Beobachtung

Abgeschlossen am 27.10.2026: wird nicht weitergeführt. Bleibt als Referenz für
Anordnung × Farbsystem und für gestufte Erklärungen erhalten.

## Nächster Schritt

Keiner.
