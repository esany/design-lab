# Raster als Programm: Konzept und Pilot

Stand 2026-10-28 · Status: **Vorschlag**. Der Pilot startet, sobald der
Eigentümer den Arbeitsort gewählt hat.

## Anforderungen des Eigentümers (aus dem Gespräch)

- Typografie wirkt in einem System mit Grundlinienraster. Der Offset ist
  so gewählt, dass die Grundschrift bündig am oberen Satzspiegel steht.
- Satz, Layout und Raster sind ein zusammenhängendes System; die Grenzen
  zwischen ihnen fließen.
- Brüche und andere Rasteransätze sind **bewusste** gestalterische
  Entscheidungen.
- Rastersysteme sollen sich medien- und werkzeugunabhängig übertragen
  lassen: responsiv, in CSS, und digitale Ansätze auch im Druck.
- Die Strukturen werden **in den Werkzeugen selbst** nachgebaut, nicht nur
  im Ergebnis.
- Die Strukturen sind für den Menschen **sichtbar**: ausgezeichnet,
  hervorgehoben.
- Die Regeln kann der Mensch **selbst ändern**, nicht nur der Agent.

## Befund am Testflyer (*getestet*, aus der IDML gelesen)

| Ebene | Wert |
|---|---|
| Satzspiegel je Feld (105 mm) | Ränder 2,5 mm oben, links und rechts; 11,5 mm unten |
| Spalten | 6 × 12,5 mm, Zwischenraum 5 mm |
| Grundlinienraster | 4,5 mm (12,76 pt), Start 4,8 mm ab Seitenoberkante |
| Offset | 4,8 mm − Versalhöhe Officina 9 pt (2,18 mm) = 2,62 mm, also am oberen Rand (2,5 mm), Rest 0,1 mm |
| Bildkanten auf Grundlinien | 67,8 · 81,3 · 99,3 · 108,3 · 139,8 mm |
| Satzbreiten | 77,5 mm (Text im Kasten mit 5 mm Abstand) und 65 mm (Spalte 2–5) |
| Brüche (*abgeleitet*: absichtlich) | Diagonalen, gedrehte Antwortkarte, Titel, Festsaal-Foto (Oberkante 70,1 mm), Etiketten |

**Der Nachbau (Paged.js)** trifft dieses Ergebnis: Grundlinien und Bildkanten
liegen nachgemessen auf denselben Positionen. Es sind aber feste
Millimeterwerte und **kein Wirksystem**. Ändert sich der Zeilenabstand,
zieht nichts mit.

## Konzept

1. **Eine Rasterdatei als Regel**, in Klartext, von Mensch und Agent
   änderbar. Sie enthält Grundschrift, Zeilenabstand als Grundeinheit, Ränder,
   Spalten und Zwischenräume, den Offset (aus Rand und Versalhöhe gerechnet),
   die Ausrichtungsregeln (Bildkanten auf Grundlinie oder Versalhöhe) und die
   Brüche mit Begründung.
2. **Aus der Wahrnehmung abgeleitet** (`manifest.md`): Lesedistanz →
   Sehwinkel → Schriftgröße → Zeilenabstand → Raster → Format.
3. **Übersetzer je Werkzeug**, jeweils mit den eigenen Strukturen des
   Werkzeugs:

   | Werkzeug | Strukturen | Mensch kann ändern | Stand |
   |---|---|---|---|
   | Browser (CSS + Paged.js) | CSS Grid, Grundlinien per Skript, Raster einblendbar | Bedienfeld, schreibt in die Rasterdatei | *nicht getestet* |
   | InDesign (IDML) | Ränder, Spalten, Grundlinienraster | in InDesign; Rückweg durch Auslesen der IDML | Lesen *getestet*, Schreiben *nicht getestet* |
   | Scribus | Hilfslinien, Grundlinienraster (Python) | in Scribus | *nicht getestet* |
   | Penpot / Figma | Spalten- und Zeilenraster, kein Grundlinienraster | im Werkzeug | *nicht getestet* |

4. **Rasterprüfung** misst jedes Ergebnis: Was liegt im Raster, was ist ein
   ausgewiesener Bruch, was ist eine Abweichung ohne Begründung?

## Grenzen (Widerspruchspflicht)

- Übertragbar sind die Regeln, nicht jede Entscheidung. Druck hat ein festes
  Format, der Bildschirm fließt; die Gestaltung je Medium bleibt Arbeit.
- Werkzeuge verlieren unterschiedlich viel: CSS, Figma und Penpot haben kein
  Grundlinienraster.
- Es besteht die Gefahr eines Überbaus (Prinzip 9). Deshalb wird das System
  nur an echten Werken entwickelt.

## Pilot und Abnahme

1. **Flyer als Wirksystem (Browser).** Abnahme:
   - Das Raster lässt sich einblenden, Brüche sind ausgewiesen.
   - Der Mensch ändert selbst den Zeilenabstand von 4,5 auf 5 mm, und alles
     folgt; Übersatz wird gemeldet.
   - Die Rasterdatei ist ohne Hilfe lesbar.
2. **Zweiter Übersetzer:** Scribus mit derselben Rasterdatei.
3. **Plakat** aus derselben Rasterdatei für 2–3 m Abstand. Dafür braucht es
   Ort und Zweck vom Menschen.
4. Abschnitt „Raster und Layout“ im Fachpaket „Form“, mit Belegen
   (Müller-Brockmann, Gerstner, Ruder).

**Offene Entscheidung:** Wo arbeitet der Mensch an der Struktur? Empfehlung:
private Seite im Browser; Scribus als zweiter Weg.
