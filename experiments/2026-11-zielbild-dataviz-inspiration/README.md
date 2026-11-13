---
title: Zielbild aus Dataviz Inspiration
date: 2026-11-11
status: läuft
timebox: 1 Sitzung
---

# Zielbild aus Dataviz Inspiration

Die Fachpakete beschreiben Qualität bisher vor allem von unten: Prüffragen und
Mittelmaß-Muster als Negativfolie. Hier fehlt das Gegenstück, also gesehene Arbeiten, die zeigen,
wie gut aussieht. Die Sammlung von Yan Holtz [k:holtz-dataviz-inspiration] liefert diesen
Bestand offen lizenziert.

**Hypothese:** Wenn man kuratierte Spitzenbeispiele mit den Prüffragen von „Vermitteln“ und
`bertin-semiologie` liest, findet man Muster, die die Pakete noch nicht als Ziel benennen. Denn
die Pakete sagen bisher genauer, was zu vermeiden ist, als was erreicht werden soll.

**Aufbau:**
- `katalog.json`: 462 Einträge (29 Favoriten) aus dem Repo `holtzy/dataviz-inspiration`, Commit
  im Kopf der Datei, mit `uebernehmen.py` per Textmuster gelesen (der fremde Code wird nicht
  ausgeführt). Namensnennung: *Data from dataviz-inspiration.com by Yan Holtz, licensed under
  CC BY 4.0.* Felder umbenannt und gekürzt. **Bilder sind nicht übernommen**, die Rechte liegen bei
  den Urhebern; jeder Eintrag verlinkt das Original.
- `zuordnung.json`: die 34 Technik-Labels je Fachpaket oder Methode (*abgeleitet*).
- Pilot: zehn der 29 Favoriten, gestreut über Diagrammtyp und Urheber. Gesehen wurden nur die
  Screenshots der Sammlung, nicht die Originale. Gelesen nach Munzners Ebenen aus „Vermitteln“
  (Abschnitt 4) und nach Bertins Prüfablauf.

**Erfolgskriterium** (erst nach der Auswahl festgelegt, also schwächer als vorgesehen): Der Pilot
trägt, wenn er mindestens drei Prüffragen liefert, die „Vermitteln“ noch nicht hat, und jede an
mindestens zwei Beispielen sichtbar ist.

## Ergebnis

### Die zehn Beispiele

| id | Werk | Urheber | Was es vorführt |
|---|---|---|---|
| 1 | [Omicron-Spirale](https://www.nytimes.com/2022/01/06/opinion/omicron-covid-us.html) | NYT | Jahreszyklus als Spirale: gleiche Monate liegen übereinander; Bandbreite mit Legenden-Glyphe erklärt |
| 40 | [Climate stripes](https://showyourstripes.info/s/globe) | Ed Hawkins | eine Variable, nur Helligkeit und Farbton, keine Achse: bewusst nur die Gesamtgestalt |
| 71 | [Bussed out](https://www.visualcinnamon.com/portfolio/bussed-out/) | Nadieh Bremer, Guardian | Titel ist der Befund; Prozentzahlen in Kategoriefarbe ersetzen die Legende |
| 116 | [Bruxelles malade](https://bxl-malade.medor.coop) | Catherine Joie u. a. | dunkle Grundkarte, Daten als einzige Farbe |
| 129 | [Remixing Rosling](https://truth-and-beauty.net/projects/remixing-rosling) | Moritz Stefaner | zwei Länder farbig, alle anderen grau; Zeit als Punktgröße entlang der Spur |
| 157 | [The most important problem](https://driven-by-data.net/2017/02/28/most-important-problem.html) | Gregor Aisch | Treemap: Farbton für drei Gruppen, Fläche für Anteil, Schrift folgt der Fläche |
| 214 | [Drug deaths, Chicago](https://www.nytimes.com/2025/01/30/upshot/black-men-overdose-deaths.html) | NYT | Alter × Jahr; ein schräges Band macht die Generation sichtbar, die sonst verborgen bliebe |
| 240 | [Efficient Traveler](https://www.scientificamerican.com/article/a-human-on-a-bicycle-is-among-the-most-efficient-forms-of-travel-in-the/) | Scientific American | Log-Achsen, deren Richtung in Worten steht („lighter / heavier“); ausführliche Quellenzeile |
| 301 | [Arctic sea ice](https://www.ft.com/content/63fbcf2b-9acc-4ccb-ac12-9f3b78e85b68) | Financial Times | Ridgeline mit Leseanleitung im Bild; Extremwerte mit Datum annotiert |
| 257 | [AU–EU-Infrastruktur](https://www.iss.europa.eu/sites/default/files/EUISSFiles/CP_180_screen_small.pdf) | EUISS | gedämpfter Grund, wenige Zeichen in zwei Farben, Legende als Zeichenschlüssel |

Links nach `katalog.json`, ohne Zugangs-Token; Bezahlschranken möglich (NYT, FT).

### Was schon in „Vermitteln“ steht und hier positiv sichtbar wird

- **Hervorheben und dämpfen** (Gegenstück zu „alles gleich laut“): 129, 214, 301.
- **Direkte Beschriftung statt Legende**: 71, 129, 240.
- **Form aus der Aufgabe, nicht aus der Bibliothek**: Die Spirale (1) dient dem
  Vergleich gleicher Jahreszeiten, das Raster mit Band (214) dem Vergleich von Generationen.
  Beides wäre als Liniendiagramm verborgen.
- **Herkunft sichtbar**: 214, 240, 301 nennen die Quelle im Bild, 301 auch den Datenstand.
- **Bertin erfüllt**: Geordnete Daten liegen auf Helligkeit (40, 214, 301), Kategorien auf Farbton
  (157, 240), Menge auf Fläche oder Position (157, 129).

### Was „Vermitteln“ noch nicht als Ziel benennt (Kandidaten)

1. **Der Titel sagt den Befund, nicht das Thema.** 71 („Most ticket recipients are relocated to
   places with a lower median income“), 301 („More days with less Arctic sea ice“), 1. Prüffrage:
   *Kann man nach dem Titel allein sagen, was das Bild zeigt?*
2. **Die ungewohnte Form erklärt sich an Ort und Stelle.** 301 erklärt im Bild, was eine Kurve
   ist, 1 zeigt mit einer Mini-Glyphe, wie das Band zu lesen ist, 71 benennt den Ursprungspunkt.
   „Vermitteln“ fordert, Abweichung zu *begründen*; das Zielbild fordert zusätzlich, sie *lesbar
   zu machen*. Prüffrage: *Steht die Leseanleitung dort, wo die Frage entsteht?*
3. **Achsenrichtung in Alltagssprache.** 240 („more efficient ↓ / heavier →“), 301 („less sea
   ice ← / more sea ice →“). Gerade bei Log-Skalen und Abweichungen trägt das. Prüffrage: *Versteht
   man ohne Zahlen, welche Richtung „mehr“ oder „besser“ ist?*
4. **Grund dämpfen, damit die Daten die Figur sind.** 116, 257, 129: Karte, Kontext und übrige
   Fälle treten zurück. Das liegt zwischen „Vermitteln“ und „Form“ (Figur und Grund) und steht
   in keinem der beiden als Ziel.

### Was das Zielbild nicht ist

Auch Favoriten sind nicht fehlerfrei. Sie gelten als Vorbild für einzelne Muster, nicht als Ganzes:

- 240: Die Farbwolken suggerieren eine Verteilung, die die wenigen Datenpunkte nicht hergeben
  (*abgeleitet*, Scheingenauigkeit). Das widerspricht „Zeigt das Bild genau die Daten?“.
- 1: Werte auf gekrümmter Bandbreite sind schwerer zu vergleichen als auf gemeinsamer Achse; die
  Spirale tauscht Genauigkeit gegen Periodizität. Das ist eine Entscheidung, kein Fehler, aber sie
  gehört benannt.
- 40: ohne Achse und Quelle im Bild. Für das Ziel „Gesamtgestalt auf einen Blick“ ist das
  richtig, es verstößt aber gegen „Herkunft sichtbar“. Das ist eine echte **Spannung** zwischen
  zwei Prüffragen. Der Eigentümer entscheidet, ob Pakete sie ausdrücklich zulassen.

### Grenzen des Bestands

- Ein Geschmack: Ein Kurator wählt. Nadieh Bremer (26), Datylon (18, ein Werkzeuganbieter),
  NYT (17) und Holtz selbst (16) stellen zusammen 17 % (*belegt*, gezählt in `katalog.json`).
- Schwerpunkt Redaktion und Einzelbild: Nur 9 Einträge tragen `dashboard`, 9 `uncertainty`. Für
  das Thema Visualisierungssysteme ist der Bestand Nachbar, nicht Grundlage. Die 154 Treffer in
  `zuordnung.json` kommen meist von `small multiples` und `interactive controls`.
- Englischsprachig und zeitlich gehäuft (112 Einträge aus 2022).
- Gesehen wurden Screenshots; Interaktion, Text und Zusammenhang der Originale nicht.
- Nicht gegengeprüft. Nach `kritik` sollte ein zweites Modell die zehn Lesungen prüfen.

**Urteil (Mensch):** offen.

**Folge (Vorschlag, nicht umgesetzt):** Die vier Kandidaten als Abschnitt „Zielbild“ in
`fachpaket-vermitteln` aufnehmen, je mit zwei Beispiel-IDs als Beleg; die Spannung zu Beispiel 40
dort als offene Frage festhalten. Weil das ein Skill ist, braucht es die Freigabe des Eigentümers.
Danach lässt sich derselbe Durchgang mit `typography` und `full-page layout` für „Form“
wiederholen.
