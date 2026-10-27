---
name: fachpaket-vermitteln
description: Domain expertise for diagrammatics, information design, information visualisation and knowledge transfer — canon (owner's references first), best practice, dated state of the art, quality criteria, mediocrity patterns and the AI's role. Load before planning, building or critiquing any chart, diagram, map, explanatory graphic, data art or exhibition graphic.
---

# Fachpaket „Vermitteln“

Felder: Diagrammatik, Informationsdesign, Informationsvisualisierung,
Wissensvermittlung. Version 1, Stand **2026-10-27**. Das Paket ist ein
Experiment und noch nicht erprobt (erst mit Issue #8, `decisions/0021`).

Verweise `[k:…]` führen ins Korpus (`corpus/uebersicht.md`). Die Methoden-Skills
`bertin-semiologie`, `isotype` und `kritik` gehören dazu und werden mitgeladen.

## So benutzt ein Agent dieses Paket

1. **Vor dem Bauen:** Abschnitt 2 durchgehen und die Antworten zu Frage,
   Publikum, Daten und Aufgabe kurz notieren (im PR oder in `study.md`).
2. **Varianten statt einer Lösung:** mindestens drei Formen skizzieren, eine
   davon als bewusste Negativfolie (Abschnitt 5). Die Varianten werden dem
   Menschen vorgelegt. Der Agent wählt nicht.
3. **Nach dem Bauen:** rendern, Screenshot machen, dann gegen Abschnitt 4
   prüfen. Notieren, was geprüft wurde und was nicht. Die Daten werden im Code
   nachgerechnet und nicht am Bild abgelesen.
4. **Kritik** mit Skill `kritik`, möglichst durch ein anderes Modell.

---

## 1 · Kanon

### Verweise des Eigentümers — Ausgangspunkte

Diese Verweise zeigen, wohin der Eigentümer schaut: auf Leute, Projekte,
Paper, Haltungen, Domänen und Methoden. Sie sind **kein gesetzter Kanon**.
Die rechte Spalte ist ein *abgeleiteter* erster Ansatz, den der Mensch
bestätigt oder verwirft. Ein Verweis wird erst durch Erschließen zu Wissen:
Projekte ansehen, Paper lesen, Methoden herauslösen.

| Verweis | Kern (belegt) | möglicher Ansatz fürs Labor (*abgeleitet*, offen) |
|---|---|---|
| **Tamara Munzner** [k:munzner-2014] [k:munzner-2009] | Visualisierung nach *was* (Daten), *warum* (Aufgabe), *wie* (Kodierung, Interaktion); Gestaltung in verschachtelten Ebenen mit je eigenen Fehlern | das Prüfgerüst dieses Pakets (Abschnitt 4) |
| **Sedlmair, Meyer, Munzner** [k:sedlmair-2012] | Methode für Gestaltungsstudien mit Fachleuten | Ablauf bei Arbeiten mit echten Fachfragen |
| **Marian Dörk, UCLAB** [k:uclab] [k:doerk-2011] [k:doerk-2013] | Informationsräume erkunden statt nur suchen („Flaneur“); Visualisierung ist nicht neutral | Einstiege für Neugier statt Zielsuche; Entscheidungen offenlegen |
| **Boris Müller** [k:mueller-esono] | Interaktion verbindet Menschen, Technik und ästhetischen Ausdruck; Leitbegriff Eleganz; Datenvisualisierung als kulturelles Bild | Visualisierung als Gestaltung, nicht als Technik-Ausgabe |
| **Nadieh Bremer** [k:bremer-visualcinnamon] [k:bremer-wu-2021] | maßgeschneidert statt Standarddiagramm („rather than using generic charts“); Datenkunst; offener Prozess vom Datensatz über die Skizze zum Code | Form aus den Daten entwickeln; Prozess dokumentieren |
| **Giorgia Lupi** [k:lupi] [k:lupi-data-humanism] [k:lupi-posavec-2016] | *Data Humanism*: Kontext, qualitative Erzählung, Unvollkommenheit und Lücken zeigen; Zeichnen als Erkenntnisweg | Lücken sichtbar lassen; von Hand oder schnell skizzieren, bevor Code entsteht |
| **Moritz Stefaner** [k:stefaner] | „Always chasing the perfect form for information“; öffentliche Datenprodukte (OECD Better Life Index, Impfdashboard, WHO Data Design Language) | Form so lange suchen, bis sie trägt; öffentliche Verantwortung |
| **Lev Manovich** [k:manovich] [k:manovich-2020] | Cultural Analytics: große Bildsammlungen mit Daten erkunden, ohne vorab festgelegte Hypothese | Sammlungen und Bildbestände als Datenraum (Brücke zu „Erkennen“) |
| **Karl Gerstner** [k:gerstner-1964] | Modell systematischer Gestaltung am Beginn der Computerzeit | Visualisierungsregeln als Programm formulieren (Brücke zu „Ordnung“, „System“) |
| **Ihre Pinterest-Sammlung** [k:pinterest-el0631] | Ihr Blick | für Agenten gesperrt. Gilt erst, wenn Sie Boards oder Merkmale nennen |

### Grundlagen (recherchiert)

| Position | Kern |
|---|---|
| Jacques Bertin [k:bertin-1967] | visuelle Variablen und was sie leisten → Skill `bertin-semiologie` |
| Neurath, Neurath, Arntz [k:neurath-isotype] | Bildstatistik für alle → Skill `isotype` |
| Cleveland, McGill [k:cleveland-mcgill-1984] | Rangfolge der Ablesegenauigkeit: Position vor Länge vor Winkel, Fläche, Farbe |
| Jock Mackinlay [k:mackinlay-1986] | Ausdrucksfähigkeit (genau die Daten, nicht mehr) und Wirksamkeit (die am besten wahrnehmbare Kodierung zuerst) |
| Edward Tufte [k:tufte-1983] | Daten-Tinte, Chartjunk, Small Multiples |
| Borland, Taylor [k:borland-taylor-2007] | Regenbogenskalen verzerren Ordnung |
| D'Ignazio, Klein [k:dignazio-klein-2020] | Macht in Daten: wer zählt, wer gezählt wird |

### Spannungen zwischen den Positionen — der Mensch entscheidet

*abgeleitet* aus den Positionen oben. Ein Agent legt die Spannung offen und
schlägt Varianten auf beiden Seiten vor:

- **Reduktion oder Reichtum:** Tufte und Wirksamkeit [k:tufte-1983]
  [k:mackinlay-1986] gegen Lupis und Bremers reiche, eigene Formen
  [k:lupi-data-humanism] [k:bremer-visualcinnamon].
- **Genauigkeit oder Einprägsamkeit:** Die Rangfolge nach Cleveland/McGill
  [k:cleveland-mcgill-1984] optimiert das Ablesen. Bremer will Geschichten,
  die im Gedächtnis bleiben [k:bremer-visualcinnamon].
- **Antwort oder Erkundung:** Ein Dashboard beantwortet Fragen, die man schon
  kennt. Das Flanieren im Sinne von Dörk [k:doerk-2011] und Manovich
  [k:manovich-2020] findet neue.

## 2 · Best Practice

Ein Ablauf entlang der Ebenen nach Munzner [k:munzner-2009]. Jeder Schritt
endet mit einer notierten Antwort:

| Schritt | Leitfrage | Herkunft |
|---|---|---|
| 1 Frage | Wer liest es, wozu, wo (Bildschirm, Print, Raum)? Was soll danach anders sein? | [k:munzner-2009] |
| 2 Daten | Woher stammen sie, wer hat gezählt, was fehlt? Lücken werden gezeigt, nicht geglättet | [k:dignazio-klein-2020] [k:lupi-data-humanism] |
| 3 Aufgabe | vergleichen · Verteilung · Entwicklung · Zusammenhang · Teil–Ganzes · Ort · Netz · Sammlung erkunden | [k:munzner-2014] |
| 4 Skizze | mindestens drei Formen, schnell, von Hand oder grob im Code, eine davon als Negativfolie | [k:lupi-posavec-2016] [k:bremer-wu-2021] |
| 5 Kodierung | Variablen nach ihrer Leistung zuordnen; das Wichtigste auf Position | [k:bertin-1967] [k:cleveland-mcgill-1984] [k:mackinlay-1986] |
| 6 Interaktion | Gibt es mehrere Einstiege? Bleibt der Zusammenhang beim Erkunden erhalten? | [k:doerk-2011] |
| 7 Erklären | Lesehilfe, Quelle, Methode und Entscheidungen gestuft offenlegen (Labor-Regel 0016) | [k:doerk-2013] |
| 8 Prüfen | Abschnitt 4, Ebene für Ebene | [k:munzner-2009] |

**Referenzprojekte zum Ansehen:** OECD Better Life Index und Impfdashboard
[k:stefaner] · Raoul-Hausmann-Sammlung, Un/Foldables [k:uclab] · „My Life with
Long Covid“ [k:lupi] · VIKUS Viewer für Kultursammlungen [k:vikus-viewer].

## 3 · Stand der Technik (2026-10-27)

**Werkzeuge** (Versionen von npm abgelesen, Status *sichtbar*):

| Werkzeug | Version | Lizenz | Stärke |
|---|---|---|---|
| Observable Plot [k:observable-plot] | 0.6.17 | ISC | schnelle, lesbare Erkundung |
| Vega-Lite [k:vega-lite] | 6.5.0 | BSD-3-Clause | Diagramm als JSON-Spezifikation, prüfbar und reproduzierbar |
| D3 [k:d3] | 7.9.0 | ISC | maßgeschneiderte Formen, das Werkzeug der Referenzen |
| Mermaid [k:mermaid] | 12.2.0 | MIT | Diagramme aus Text |
| VIKUS Viewer [k:vikus-viewer] | — | nicht geprüft | Sammlungen auf der Zeitleiste |
| p5.js [k:p5js] | 2.3.4 | LGPL-2.1 | generative Glyphen, Datenkunst |

**Forschung zu KI und Visualisierung:**

- *VisEval* [k:viseval-2024]: Auf 2.524 Anfragen erreicht das beste geprüfte
  Modell 2,89 von 5 Punkten. Typische Fehler sind erfundene Spaltennamen,
  falsche Datenumformung, falsche Sortierung, überlappende Balken, falsche
  Legenden, Textüberlauf und invertierte Achsen. Mit mehr Kanälen und mit
  überflüssigem Kontext wird das Ergebnis schlechter.
- *PlotCraft* [k:plotcraft-2025]: 23 Modelle. Einfache Einzeldiagramme
  gelingen, mehrteilige und zusammengesetzte Darstellungen scheitern meist.
- *abgeleitet:* Beide messen, ob ein Diagramm regelgerecht ist, nicht ob es gut
  vermittelt. Für Gestaltungsqualität gibt es keinen belastbaren Benchmark.
  Diesen Teil prüft deshalb der Mensch, gestützt auf Abschnitt 4.

## 4 · Qualitätskriterien (Prüffragen)

Geordnet nach den Ebenen von Munzner [k:munzner-2009]. Ein Fehler auf einer
äußeren Ebene macht alles Innere wertlos.

**Frage und Publikum**
- Ist die Frage in einem Satz benannt? Würde das Publikum sie selbst stellen?
- Ist klar, was nach dem Lesen anders sein soll?

**Daten und Aufgabe**
- Sind Herkunft, Zählweise und Lücken genannt und sichtbar? [k:dignazio-klein-2020] [k:lupi-data-humanism]
- Ist die Aufgabe (vergleichen, Verteilung …) benannt, und passt die Form zu ihr? [k:munzner-2014]

**Kodierung und Interaktion**
- Leistet jede visuelle Variable die Ordnungsebene ihrer Daten? → `bertin-semiologie` [k:bertin-1967]
- Liegt das Wichtigste auf der genauesten Kodierung (Position)? [k:cleveland-mcgill-1984]
- Zeigt das Bild genau die Daten, ohne Scheinordnung? Keine Regenbogenskala für geordnete Werte [k:mackinlay-1986] [k:borland-taylor-2007]
- Ist jede Tinte Daten oder Lesehilfe? [k:tufte-1983]
- Gibt es beim Erkunden mehrere Einstiege, und bleibt der Kontext erhalten? [k:doerk-2011]

**Richtigkeit** (*getestet*, nicht geschätzt)
- Stimmen Summen, Sortierung und Legende? Im Code gegen die Rohdaten nachgerechnet [k:viseval-2024]
- Kein Textüberlauf, keine verdeckten Elemente, Achsen richtig herum, auf dem Screenshot geprüft [k:viseval-2024]
- Kontrast und Lesbarkeit gemessen (Tokens, WCAG)

**Haltung**
- Ist die Form aus diesen Daten entwickelt oder aus der Standardbibliothek gewählt? [k:bremer-visualcinnamon]
- Legt das Werk seine Entscheidungen offen? [k:doerk-2013]
- Weicht es bewusst vom Erwartbaren ab, und lässt sich die Abweichung begründen? (Prinzip 1)

## 5 · Mittelmaß-Muster

Woran man die erwartbare Durchschnittslösung erkennt. Sie dient als
Negativfolie (Prinzip 1, Skill `kritik`):

- Diagrammtyp nach Gewohnheit, nicht nach Aufgabe; Balken in Standardfarben [k:bremer-visualcinnamon]
- Kachel-Dashboard mit Kennzahlen, das Fragen beantwortet, die niemand gestellt hat (*abgeleitet*)
- Regenbogen- oder Zufallspalette für geordnete Werte [k:borland-taylor-2007]
- Torte, 3D oder Fläche, wo ein Positionsvergleich nötig ist [k:cleveland-mcgill-1984]
- Dekor ohne Daten, Rahmen, Schatten, Verläufe [k:tufte-1983]
- geglättete Daten: Lücken interpoliert, Unsicherheit verschwiegen [k:lupi-data-humanism]
- Legende zum Nachschlagen, wo direkte Beschriftung ginge (*abgeleitet*)
- alles gleich laut, ohne Hierarchie und ohne Leserichtung (*abgeleitet*)
- typische KI-Spuren: überlappende Beschriftung, falsche Legende, Dezimal-Jahre, fremde Sortierung [k:viseval-2024]

## 6 · Verlernen — falsche Annahmen über KI in diesem Feld

| Annahme | Befund |
|---|---|
| „Die KI wählt das passende Diagramm.“ | Die besten geprüften Modelle liegen bei 2,89 von 5 [k:viseval-2024]. Die Wahl bleibt eine Gestaltungsentscheidung. |
| „Was fehlerfrei rendert, stimmt.“ | Lauffähiger Code zeigt oft falsch sortierte, falsch umgeformte oder falsch beschriftete Daten [k:viseval-2024]. Nachrechnen ist Pflicht. |
| „Komplexes kann sie genauso.“ | Mehrteilige und zusammengesetzte Darstellungen scheitern meist [k:plotcraft-2025]. |
| „Mehr Kontext hilft.“ | Überflüssige Tabellen im Kontext senken die Trefferquote [k:viseval-2024]. Deshalb gilt: kleinstes passendes Arbeitsobjekt (AGENTS.md). |
| „Daten sind neutral, die KI auch.“ | Auswahl, Zählung und Form sind Entscheidungen [k:doerk-2013] [k:dignazio-klein-2020]. |
| „Gute Visualisierung ist messbar.“ | Benchmarks messen Regelkonformität, nicht Vermittlung (*abgeleitet*, Abschnitt 3). |

## 7 · Rolle der KI

| Rolle | Was sie hier leistet | Wo sie unzuverlässig ist | Was beim Menschen bleibt |
|---|---|---|---|
| **Werkzeug** | Daten aufbereiten; Code in Plot, Vega-Lite, D3, Mermaid; viele Varianten schnell; Kontrast und Überlauf messen | Datenumformung, Sortierung, Legenden, mehrteilige Layouts [k:viseval-2024] [k:plotcraft-2025] | Frage, Publikum, Auswahl der Variante |
| **Material** | Sammlungen und Bildbestände als Datenraum erschließen, im Sinne von Cultural Analytics [k:manovich-2020] (*abgeleitet*: z. B. Ähnlichkeiten in Bildsammlungen) | erzeugte Ordnungen wirken objektiv, sind es aber nicht [k:doerk-2013] | Deutung und Bedeutung |
| **Gegenüber** | Kritik gegen benannte Kriterien (Abschnitt 4); Gegenposition aus dem Kanon vertreten (Tufte gegen Lupi) | Geschmack; Wirkung auf Menschen behaupten, ohne sie zu testen (Prinzip 2) | Urteil und Haltung |
| **Infrastruktur** | Korpus, Prüfungen, Screenshots, Dokumentation, Rückgängig-Wege | — | Verantwortung dafür, was öffentlich gezeigt wird |

*abgeleitet:* Am stärksten ist die KI hier als Werkzeug für viele schnelle
Varianten und als Prüferin der Richtigkeit. Am schwächsten ist sie bei der
Frage, was gezeigt werden soll, und bei der Form, die über das Erwartbare
hinausgeht.

## 8 · Werkzeugkette

| Aufgabe | Werkzeug | Anbindung im Labor |
|---|---|---|
| Daten erkunden, erste Formen | Observable Plot [k:observable-plot] | *nicht getestet*, Starter folgt mit Issue #8 |
| reproduzierbares Diagramm, von Agenten geschrieben und geprüft | Vega-Lite [k:vega-lite] | *nicht getestet* |
| maßgeschneiderte Form, Datenkunst | D3 [k:d3], p5.js [k:p5js] | *nicht getestet* (Studie 1 nutzt einfaches JavaScript) |
| Prozess-, Fluss- und Strukturdiagramme | Mermaid [k:mermaid] | in der Cloud-Umgebung vorhanden (`mmdc`), im Labor *nicht getestet* |
| Kultursammlung erkunden | VIKUS Viewer [k:vikus-viewer] | *nicht getestet* |
| Bildstatistik, Ausstellung | Methode `isotype` [k:neurath-isotype] | Methode vorhanden |
| Übergabe an Print und Feinsatz | SVG als offenes Übergabeformat | *abgeleitet*, nicht erprobt |
| Prüfung | `tools/smoke.mjs` (Playwright, Screenshot) | *getestet* (CI) |

Alle Werkzeuge sind offen lizenziert und laufen im Browser. Es gibt kein Konto
und keine Kosten. Damit sind A11, A13 und A14 erfüllt.

---

**Offene Lücken in diesem Paket** (Prinzip 10, keine Scheinreife):
Wikidata-Normdaten fehlen. Bertin, Isotype und Tufte sind nur *abgeleitet*
belegt. Ihre Pinterest-Sammlung ist nicht ausgewertet. Das Paket ist ohne Werk
nicht erprobt (Issue #8).
