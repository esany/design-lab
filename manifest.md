# Manifest: Gestaltung dient

> „Alle Gestaltung ist dienend, menschenzentriert und unterliegt der
> Wahrnehmung und Kognition.“
> — der Eigentümer des Labors, 28.10.2026

Dieses Manifest steht über allen Prinzipien, Fachpaketen und Methoden. Jede
Arbeit im Labor beginnt hier, egal ob es um Blei oder Pixel, um Plakat,
Karte, Ausstellung oder Interface geht. Prüfstein ist es auch.

## Leitsätze

1. **Gestaltung dient.** Sie dient Menschen, die etwas verstehen, finden,
   erleben oder tun wollen. Sie ist kein Selbstzweck.

2. **Der Mensch nimmt wahr, bevor er versteht.** Jede Gestaltung durchläuft
   Auge, Aufmerksamkeit und Gedächtnis. Was dort nicht ankommt, existiert für
   den Betrachter nicht.

3. **Lesbarkeit und Verständlichkeit zuerst.** Die Ästhetik darf darüber
   hinausgehen und sich davon auch entfernen. Tut sie das, werden die Risiken
   benannt: Wer liest es dann nicht mehr, wann, unter welchen Bedingungen?
   Die Entscheidung trifft der Mensch, im Wissen um diese Folgen.

4. **Kein Entwurf ohne Wahrnehmungssituation.** Medium, Abstand, Licht,
   Umgebung, Zeit und Publikum werden vorher geklärt, nicht hinterher geprüft
   (siehe unten).

5. **Messen, was messbar ist.** Sehwinkel, Kontrast, Zeilenlänge und
   Lesezeit lassen sich berechnen oder testen. Was nur die Erfahrung beurteilen
   kann, wird als Urteil ausgewiesen und nicht als Messwert ausgegeben
   (Prinzip 3).

6. **Für die Ränder gestalten.** Wer gut sieht, ausgeruht ist und gutes Licht
   hat, liest fast alles. Gestaltet wird für ältere Augen, schlechtes Licht,
   Eile, Ablenkung und Zweitsprache. Was dort trägt, trägt überall.

7. **Ganzheitlich und systematisch.** Wahrnehmung ist kein Prüfschritt am
   Ende. Sie bestimmt Format, Raster, Schrift, Farbe, Bild und Text
   gemeinsam.

## Die Wahrnehmungssituation, vor jedem Entwurf

| Frage | Beispiele | Folgt daraus |
|---|---|---|
| **Medium und Format** | Plakat, Flyer, Karte, Buch, Bildschirm, Raum | Lesart, Maßstab, Material |
| **Publikum** | Alter, Sehvermögen, Vorwissen, Sprache, Motivation | Mindestgröße, Kontrast, Sprachebene |
| **Abstand** | Hand (30–40 cm), Tisch, Wand (1–3 m), Straße (5–20 m) | Schriftgröße über den Sehwinkel |
| **Zeit** | im Vorbeigehen (Sekunden), Auslage, in Ruhe lesen | Hierarchie, Textmenge, erstes Signal |
| **Licht** | Tageslicht, Kunstlicht, Dämmerung, Gegenlicht, Bildschirm nachts | Kontrast, Papier, Glanz, Farbwahl |
| **Umgebung** | Konkurrenz anderer Reize, Lärm, Bewegung, Wetter | Auffälligkeit, Robustheit, Einfachheit |
| **Haltung und Bewegung** | sitzend, gehend, fahrend, stehend in der Schlange | Lesedauer, Blickwinkel |
| **Zugang** | Sehbehinderung, Farbfehlsichtigkeit, Leseschwäche | Kontrast, nicht nur Farbe, einfache Sprache |

## Ein Werkzeug dafür: der Sehwinkel

Die Lesbarkeit hängt vom Sehwinkel der x-Höhe ab, nicht von der Punktgröße
allein:

```
Sehwinkel ≈ x-Höhe / Abstand  (im Bogenmaß; × 57,3 ergibt Grad)
x-Höhe    = Schriftgröße in pt × 0,353 mm × x-Höhen-Anteil der Schrift
```

- **0,2°** ist die kritische Größe für normales Sehen. Darunter wird das Lesen
  langsamer. Flüssig gelesen wird zwischen etwa 0,2° und 2°
  [k:legge-bigelow-2011].
- **Ältere Leser** lesen zwischen etwa 0,3° und 1,0° so schnell wie junge. Bei
  0,15° fallen sie deutlich zurück [k:akutsu-1991].
- **Kontrast:** auf Bildschirmen mindestens 4,5 : 1, ab 18 pt oder 14 pt fett
  3 : 1 [k:wcag-2-2]. Für Schrift im öffentlichen Raum gibt es eine eigene
  Norm, DIN 1450 [k:din-1450].

Die Rechnung und Beispiele stehen im Fachpaket `fachpaket-form`.

## Was daraus für Agenten folgt

- Vor jedem Entwurf wird die Wahrnehmungssituation geklärt oder als begründete
  Annahme notiert (AGENTS.md, „Prüfen vor dem Handeln“).
- Jede Kritik prüft zuerst gegen die Wahrnehmung und erst dann gegen
  Stil und Methode (Skill `kritik`).
- Wenn ästhetische Abweichungen die Lesbarkeit kosten, legt der Agent sie als
  Option mit benanntem Risiko vor. Er entscheidet sie nicht.
