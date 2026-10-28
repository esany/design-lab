---
name: fachpaket-form
description: Domain expertise for typography (macro and micro), readability and print — canon, measurable quality criteria, German typesetting rules, mediocrity patterns, the AI's role and a tested comparison of InDesign, Scribus and HTML/CSS with Paged.js. Load before setting, checking or critiquing any text layout, flyer, poster, book page, web text or print file.
dient: A04, A05, A28
---

# Fachpaket „Form“ — Typografie und Print

Felder: Typografie (Makro und Mikro), Lesbarkeit, Print. Grafikdesign folgt in
einer späteren Version. Version 1, Stand **2026-10-28**. Erprobt an einem
Vereinsflyer (Wickelfalz 4 × A6), siehe `experiments/2026-10-print-pagedjs/`
(`decisions/0021`).

Verweise `[k:…]` führen ins Korpus. Mit diesem Paket werden diese Skills
mitgeladen: `kritik`, `farbkontraste-itten` (Farbe), `konkrete-kunst` (Raster
und Ordnung).

## So benutzt ein Agent dieses Paket

0. **Wahrnehmungssituation klären** (`manifest.md`, Abschnitt 0 unten):
   Medium, Publikum, Abstand, Zeit, Licht, Umgebung.
1. **Lesart klären:** Wird linear gelesen (Buch), informierend (Flyer, Zeitung),
   konsultierend (Liste) oder flüchtig (Plakat)? Die Lesart bestimmt Zeilenlänge,
   Größe und Gliederung [k:willberg-forssman-1997].
2. **Makro vor Mikro:** zuerst Format, Satzspiegel, Raster, Hierarchie, dann
   Zeile, Wort und Zeichen [k:ruder-1967] [k:hochuli-1987].
3. **Messen statt meinen:** Die Satzqualität wird mit
   `experiments/2026-10-print-pagedjs/typo-pruefung.py` gemessen (Abschnitt 4).
   Was sich nicht messen lässt, bewertet der Mensch.
4. **Feinsatz ist Regel, Inhalt ist Entscheidung:** Satzregeln (Abschnitt 2b)
   wendet der Agent an. Was den Wortlaut, Namen oder Zahlen ändert, legt er vor.

---

## 0 · Wahrnehmungssituation und Sehwinkel

Gestaltung dient (`manifest.md`). Vor Schrift und Raster wird geklärt, **wer
aus welchem Abstand, wie lange und bei welchem Licht** liest.

**Rechnung:** x-Höhe = Schriftgröße (pt) × 0,353 mm × x-Höhen-Anteil der Schrift;
Sehwinkel in Grad ≈ 57,3 × x-Höhe / Abstand.

| Richtwert | Wert | Quelle |
|---|---|---|
| kritische Größe, normales Sehen | ≈ 0,2° | [k:legge-bigelow-2011] |
| flüssiges Lesen | ≈ 0,2°–2° | [k:legge-bigelow-2011] |
| ältere Leser ohne Einbußen | ≈ 0,3°–1,0°; bei 0,15° deutlich langsamer | [k:akutsu-1991] |
| Kontrast am Bildschirm | ≥ 4,5 : 1, große Schrift ≥ 3 : 1 | [k:wcag-2-2] |
| Schrift im öffentlichen Raum | eigene Norm | [k:din-1450] |

**Mindest-x-Höhe je Abstand** (*abgeleitet* aus den Richtwerten):

| Situation | Abstand | x-Höhe bei 0,2° | bei 0,3° (ältere Leser) |
|---|---|---|---|
| Flyer, Karte in der Hand | 40 cm | 1,4 mm | 2,1 mm |
| Auslage, Tisch | 1,5 m | 5,2 mm | 7,9 mm |
| Plakat an der Wand | 3 m | 10,5 mm | 15,7 mm |
| Plakat von der Straße | 10 m | 35 mm | 52 mm |

Licht ist dabei nicht eingerechnet: Bei Dämmerung, Gegenlicht oder glänzendem
Papier sinkt der wirksame Kontrast. Dafür gibt es hier keinen belegten
Zuschlag; die Annahme wird im Einzelfall notiert.

**Am Testflyer gemessen** (Wickelfalz A6; Zielgruppe Förderverein, eher
älter; *getestet* mit den Schriftdateien, Abstand 40 cm):

| Element | Größe | x-Höhe | Sehwinkel | Bewertung (*abgeleitet*) |
|---|---|---|---|---|
| Fließtext Officina | 9 pt | 1,55 mm | 0,22° | knapp über der kritischen Grenze, unter dem Optimum für Ältere |
| Bildunterschrift, Adresse | 7 pt | 1,2 mm | 0,17–0,18° | darunter: Risiko für ältere Leser, ausgerechnet bei IBAN und Telefon |
| Kartenbeschriftung | 5 pt | 0,86 mm | 0,12° | deutlich darunter |
| Titel Euclid Flex | 25 pt | 4,4 mm | 0,63° in der Hand, **0,17° aus 1,5 m in der Auslage** | in der Auslage, wo der Flyer gewählt wird, kaum lesbar |



### Verweise des Eigentümers

| Verweis | Bezug zur Typografie (*abgeleitet*, offen) |
|---|---|
| Karl Gerstner [k:gerstner] [k:gerstner-1964] | Typografie als Programm: Regeln, aus denen viele Lösungen folgen. Schüler Emil Ruders |
| Boris Müller [k:mueller-esono] | Typografie im Interface, Eleganz als Maßstab |
| Ihre Pinterest-Sammlung [k:pinterest-el0631] | Ihr Blick; für Agenten gesperrt |

### Grundlagen (recherchiert)

| Werk | Kern |
|---|---|
| Emil Ruder, *Typographie* [k:ruder-1967] | Struktur, Raster, Rhythmus, Proportion, Lesbarkeit; Schweizer Schule |
| Jan Tschichold [k:tschichold-1928] [k:tschichold-1960] | erst funktionale Asymmetrie, später klassische Regeln für Drucksachen. Die Spannung liegt im Werk selbst |
| Jost Hochuli, *Das Detail in der Typografie* [k:hochuli-1987] | Buchstabe, Wort, Zeile, Zeilenabstand |
| Willberg/Forssman, *Lesetypografie* [k:willberg-forssman-1997] | Makrotypografie, Maßstab ist das Lesen |
| Forssman/de Jong, *Detailtypografie* [k:forssman-dejong-2004] | Mikrotypografie, der „Duden für Typografen“ |
| Robert Bringhurst [k:bringhurst-1992], fürs Web übertragen von Rutter [k:rutter-webtypography] | Zeilenlänge, Maß, Rhythmus |
| Matthew Butterick [k:butterick-practical-typography] | knappe, prüfbare Regeln |
| Legge/Bigelow [k:legge-bigelow-2011] | Lesbarkeit aus der Sehforschung: kritische Schriftgröße |
| DIN 5008 [k:din-5008] | Zahlen, IBAN, Telefonnummern |

### Spannungen — der Mensch entscheidet

- **Asymmetrie oder Achse:** Tschichold vertritt beides in verschiedenen
  Lebensphasen [k:tschichold-1928] [k:tschichold-1960].
- **Regel oder Ausdruck:** Ruders Raster [k:ruder-1967] und die freie Form
  der Referenzen in „Vermitteln“.
- **Treue zum Original oder Satzqualität:** Ein Nachbau kann gleich aussehen
  oder besser gesetzt sein; beides zugleich gelingt selten (Abschnitt 4).

## 2 · Best Practice

### 2a Makrotypografie: Ablauf

| Schritt | Leitfrage |
|---|---|
| 1 Lesart | Wie wird gelesen und wie lange? [k:willberg-forssman-1997] |
| 2 Format und Satzspiegel | Wo liegt der Text, wo der Weißraum, wo ist der Beschnitt? |
| 3 Raster | Spalten, Grundlinienraster, Bildflächen aus einem Maß [k:ruder-1967] |
| 4 Hierarchie | höchstens drei Ebenen; Auszeichnung sparsam [k:butterick-practical-typography] |
| 5 Schrift | Lesbarkeit bei der gewählten Größe und Lesedistanz [k:legge-bigelow-2011] |
| 6 Satzart | Blocksatz nur mit Silbentrennung [k:butterick-practical-typography]; sonst Flattersatz |

### 2b Mikrotypografie: Regeln, die ein Agent selbst anwendet

Diese Regeln setzt `experiments/2026-10-print-pagedjs/feinsatz.js` automatisch.

| Regel | Umsetzung | Herkunft |
|---|---|---|
| Kein Gedankenstrich am Zeilenanfang | geschütztes Leerzeichen davor | Satzregel ([k:forssman-dejong-2004], Regel *abgeleitet*) |
| Ordnungszahl und Wort nicht trennen („13. Jahrhundert“) | geschütztes Leerzeichen | ebd. |
| Zahl und Einheit nicht trennen, schmal („23 m“) | schmaler Abstand als Element; viele Schriften haben das Zeichen U+202F nicht | ebd.; *getestet*: fehlt in Officina, Euclid Flex, Univers, Jane Austen |
| Bis-Strich ohne Leerzeichen („1200–1608“) | Halbgeviertstrich | ebd. |
| Kein doppeltes Leerzeichen | ein Leerzeichen | [k:butterick-practical-typography] |
| Abkürzungen nach Duden: „e. V.“, „z. B.“, „d. h.“ | schmaler, geschützter Leerraum | Duden (Entscheidung 0023) |
| IBAN in Vierergruppen, Telefonnummer in Blöcken | Leerzeichen, nie umbrechen | [k:din-5008] |
| Kein Hurenkind, kein Schusterjunge | Umbruchregel im Rahmenfluss (`fluss.js`) | Satzregel |
| Höchstens drei Trennungen in Folge | Wort sperren und neu umbrechen (`fluss.js`) | Satzregel |
| Letztes Wort eines Absatzes nicht trennen | keine einzelne Silbe in der Ausgangszeile | Satzregel |
| Kerning an, echte Anführungszeichen „…“ und Auslassungszeichen … | CSS und Text | [k:butterick-practical-typography] |

**Grundlage:** Rechtschreibung und Satzregeln nach Duden (`decisions/0023`).
Logos und ausdrücklich festgelegte Namensschreibweisen sind Ausnahmen.

**Was nur der Mensch entscheidet:** Umformulierungen, Ausnahmen von der
Duden-Regel, das Sperren von Versalien, wenn es das Bild ändert.

## 3 · Stand der Technik (2026-10-28)

**Was die Werkzeuge können**, gemessen am selben Flyer (*getestet*, Ausnahmen
markiert):

| Fähigkeit | InDesign | HTML/CSS + Paged.js (Chromium 153) | Scribus 1.6.6 |
|---|---|---|---|
| Satzspiegel, Beschnitt, Druck-PDF | ja | ja, mit Druckvorstufe (`druckvorstufe.py`) | ja (*nicht getestet*) |
| CMYK, Farbprofil, PDF/X-4 | ja | nur über Nachbearbeitung; PDF/X gekennzeichnet, nicht validiert | ja [k:scribus] |
| Verkettete Textrahmen | ja | nein, ergänzt durch `fluss.js` | ja |
| Grundlinienraster | ja | nein (`line-height-step` fehlt), ergänzt durch `fluss.js` | ja |
| Absatz-Setzer, Wortabstand stauchen | ja | nein; Ersatz: enger Grundwortabstand + `text-wrap: pretty` | *nicht getestet* |
| Silbentrennung Deutsch | ja | Browser-Trennung je System unzuverlässig (*getestet*: „Akad-emie“); Paket `hyphen` [k:hyphen-npm] | ja |
| Trennungen begrenzen (`hyphenate-limit-lines`) | ja | im Entwurf [k:w3c-css-text-4], nicht in Chromium; ergänzt durch `fluss.js` | *nicht getestet* |
| Optischer Randausgleich (`hanging-punctuation`) | ja | nicht in Chromium | *nicht getestet* |
| OpenType: Kerning, Ligaturen, Ziffern, Kapitälchen | ja | ja | teilweise (*nicht getestet*) |
| Fehlende Sonderleerzeichen in der Schrift | erzeugt InDesign selbst | Ersatzschrift springt ein; Lösung als Element | *nicht getestet* |
| Schriften im PDF | eingebettet | OpenType-CFF und eingeschränkte TrueType als Type 3 | *nicht getestet* |
| Mit der Maus eingreifen | ja | nein, Text und Zahlen | ja |
| Von Agenten bedienbar | eingeschränkt (Skripte) | ja, vollständig | ja (Python) |

## 4 · Qualitätskriterien (messbar mit `typo-pruefung.py`)

| Kriterium | Richtwert | Quelle |
|---|---|---|
| Zeichen je Zeile | einspaltig 45–75 (Ideal 66), mehrspaltig 40–50 | [k:bringhurst-1992] |
| Zeilenabstand | 120–145 % der Schriftgröße | [k:butterick-practical-typography] |
| Schriftgröße | Print 10–12 pt; untere Grenze nach x-Höhe: ≈ 0,2° (bei 40 cm etwa 1,4 mm x-Höhe) | [k:butterick-practical-typography] [k:legge-bigelow-2011] |
| Erstzeileneinzug | 1–4 × Schriftgröße, nicht zusätzlich Absatzabstand | [k:butterick-practical-typography] |
| Wortabstände | gleichmäßig; Löcher über 2,5 mm zählen (Labor-Schwelle, *abgeleitet*) | — |
| Trennungen | höchstens 3 in Folge | Satzregel |
| Versalzeilen | 5–12 % sperren | [k:butterick-practical-typography] |
| Satzzeichen und Zahlen | Abschnitt 2b | [k:din-5008] |

**Messung am Testflyer** (9 pt Officina, *getestet*):

| | Original (InDesign) | Nachbau ohne Feinsatz | Nachbau mit Feinsatz |
|---|---|---|---|
| Zeichen je Zeile (Mittel) | 44 | 45 | 46 |
| Wortabstand Mittel ± Streuung | 1,41 ± 0,51 mm | 1,46 ± 0,53 mm | 1,24 ± 0,56 mm |
| Löcher über 2,5 mm | 5 | 4 | 3 |
| Trennungen / höchstens in Folge | 18 / 2 | 28 / 5 | 17 / 2 |
| Gedankenstrich am Zeilenanfang | 0 | 0 | 0 |

*abgeleitet:* Der Feinsatz erreicht die Satzqualität des Originals oder liegt
darüber, nur mit engeren Wortabständen. Ob das Bild dadurch zu dicht wirkt,
entscheidet der Mensch.

## 5 · Mittelmaß-Muster

- Blocksatz ohne Silbentrennung, mit Löchern und „Gießbächen“ [k:butterick-practical-typography]
- Zeilen über 80 Zeichen oder Spalten unter 35 Zeichen [k:bringhurst-1992]
- zu viele Hierarchieebenen; fett und kursiv kombiniert [k:butterick-practical-typography]
- Versalzeilen ohne Sperrung [k:butterick-practical-typography]
- Bindestrich statt Halbgeviertstrich, gerade statt typografischer Anführungszeichen, drei Punkte statt Auslassungszeichen
- Textfarbe vierfarbig gemischt bei kleiner Schrift. Passerrisiko; *abgeleitet* aus dem Testflyer (65/53/40/60 bei 9 pt)
- Vorgabewerte des Werkzeugs übernommen, ohne ein Raster
- Schrift „frei“ und „irgendwie passend“ gewählt, ohne die Laufweite zu messen (*getestet*: Ersatzschriften liefen 0–7 % anders)

## 6 · Verlernen — falsche Annahmen über KI und Typografie

| Annahme | Befund |
|---|---|
| „Die KI setzt typografisch richtig.“ | Satzregeln lassen sich prüfen und automatisieren; Gefühl für Grauwert und Rhythmus hat die KI nicht. Diese Prüfung bleibt beim Menschen (*abgeleitet*) |
| „Was der Browser trennt, stimmt.“ | Die Trennung hängt vom System ab; in der Cloud-Umgebung war sie falsch (*getestet*) |
| „Ein Zeichen in HTML ist auch im PDF.“ | Fehlt es in der Schrift, springt still eine Ersatzschrift ein (*getestet*, sichtbar in `pdffonts`) |
| „Gleich wie das Original heißt gut.“ | Nur 31 % der Zeilen brachen wie im Original um, die Satzqualität war trotzdem gleichwertig (*getestet*). Treue und Qualität sind zwei Maßstäbe |
| „Eine Ersatzschrift tut es auch.“ | Abweichende Laufweite verschiebt den ganzen Umbruch (*getestet*) |

## 7 · Rolle der KI

| Rolle | Was sie hier leistet | Wo sie unzuverlässig ist | Was beim Menschen bleibt |
|---|---|---|---|
| **Werkzeug** | Satz in Code, Feinsatzregeln, Druckvorstufe, Varianten | Grauwert, Rhythmus, Gewichtung; Inhalte von Namen und Schreibweisen | Schriftwahl, Hierarchie, Urteil über das Bild |
| **Gegenüber** | misst Satzqualität, findet Fehler (IBAN, Bis-Strich, Satzfehler) | Geschmack | Entscheidung über Inhalt und Abweichung |
| **Material** | — (*abgeleitet*: generative Schrift ist nicht Gegenstand dieses Pakets) | | |
| **Infrastruktur** | Prüfskripte, Vergleich mit dem Original, Dokumentation | — | Freigabe zum Druck |

## 8 · Werkzeugkette

| Aufgabe | Werkzeug | Stand im Labor |
|---|---|---|
| Satz als Code, von Agenten bedienbar | HTML/CSS + Paged.js [k:pagedjs], `fluss.js`, `feinsatz.js` | *getestet* (Flyer) |
| Silbentrennung | `hyphen` [k:hyphen-npm] | *getestet* |
| Druck-PDF in CMYK | `druckvorstufe.py` (Ghostscript, pikepdf) | *getestet*, PDF/X nicht validiert |
| Satzqualität messen | `typo-pruefung.py` | *getestet* |
| Satz mit der Maus, CMYK von Anfang an | Scribus [k:scribus] | *nicht getestet*, als Nächstes vorgeschlagen |

---

**Offene Lücken:** optischer Randausgleich im Browser; PDF/X-Validierung; Grafik
und Print-Produktion (Papier, Veredelung) noch nicht im Paket; Normtext der
DIN 5008 nicht eingesehen.
