---
title: Print ohne InDesign — Flyer-Nachbau mit HTML/CSS und Paged.js
date: 2026-10-27
status: offen
timebox: 1 Arbeitssitzung
---

# Print ohne InDesign: Flyer-Nachbau mit HTML/CSS und Paged.js

**Frage des Eigentümers:** Gibt es für Grafik und Print freie Profi-Alternativen,
mit denen er Arbeit abgeben und trotzdem jederzeit frei eingreifen kann, ohne
an Komfort zu verlieren?

**Hypothese:** Ein fertiger, in InDesign gesetzter Druckflyer lässt sich mit
offenen Webwerkzeugen (HTML/CSS, Paged.js, Ghostscript) so nachbauen, dass ein
druckfähiges PDF entsteht, das dem Original gleichwertig ist.

**Gegenstand:** Wickelfalz 4 × A6 (420 × 148 mm, 3 mm Beschnitt), zwei Seiten,
Blocksatz mit Grundlinienraster, Text über fünf verkettete Rahmen, elf Bilder,
gedrehte Antwortkarte, Verläufe, Transparenzen. Original: InDesign 2024,
PDF/X-4, PSO Uncoated v3 (FOGRA52).

**Werk oder System (Prinzip 9):**
- **Werk:** der Nachbau. Er liegt **nicht** im Repo, denn er enthält Inhalte,
  Bilder und Kontaktdaten eines Vereins und Lizenzschriften (A16).
- **System:** die Werkzeuge in diesem Ordner. Sie sind allgemein nutzbar.

## Was hier liegt

| Datei | Zweck |
|---|---|
| `fluss.js` | Paged.js-Erweiterung: **verkettete Textrahmen** (Text fließt durch Rahmen, wie in InDesign), **Grundlinienraster** (erste Grundlinie in mm), Übersatz-Meldung, Trennung an Rahmengrenzen, **deutsche Silbentrennung** über das Paket `hyphen` |
| `druckvorstufe.py` | RGB-PDF aus dem Browser → Druck-PDF: Farbfelder exakt in CMYK, Bilder aus den CMYK-Quelldaten, Rest über das ICC-Profil (Ghostscript), Endformat- und Beschnittrahmen, PDF/X-4-Kennzeichnung |
| `feinsatz.js` | Satzregeln für deutschen Text: Gedankenstrich, Ordnungszahl, Zahl + Einheit (schmal, schriftunabhängig), Bis-Strich, doppelte Leerzeichen |
| `typo-pruefung.py` | misst Satzqualität im PDF je Spalte: Zeichen je Zeile, Wortabstände, Löcher, Trennungen und Trennfolgen |
| `render.cjs` | Rendert die Seite mit Chromium und Paged.js zu PDF und meldet Übersatz und Zeilen je Rahmen |

## Ergebnis

Das Druck-PDF ist **gleichwertig im Aufbau** und **abweichend in der Typografie**.

- **Deckungsgleich** (*getestet*, Überlagerung bei 110 dpi): Bilder, Flächen,
  Rahmen, Beschnitt und erste Grundlinien liegen auf dem Original.
- **Textumbruch:** Nach dem Einpassen beginnen und enden alle fünf Rahmen an
  denselben Stellen wie im Original (*getestet*: Zeilen je Rahmen 11 · 11 · 27 ·
  27 · 13, wie im Original). Innerhalb der Absätze bricht der Text anders, weil
  andere Schriften und ein anderer Setzalgorithmus im Spiel sind.
- **Farbe** (*getestet*): Alle Farbfelder haben exakt die CMYK-Werte des
  Originals (Abweichung nur in der Rundung), es bleiben keine RGB-Reste. Die
  Fotos sind die CMYK-Bilddaten der Quelle, ohne Umrechnung.
- **Schriften:** Alle sind eingebettet (*getestet* mit `pdffonts`).
- **Pixelabweichung** gegenüber dem Original (Toleranz 12 %): 11,5 % auf der
  Innenseite und 9,1 % auf der Außenseite. Fast alles davon ist Text, weil
  andere Schriften verwendet werden.

## Befunde

1. **Paged.js leistet hier wenig.** Es liefert Seitenformat und Beschnitt. Die
   eigentliche Satzarbeit fehlt im Browser und musste dazugebaut werden
   (*abgeleitet* aus dem Bauaufwand):
   - **Textverkettung über Rahmen:** Das gibt es in CSS nicht mehr, seit
     Chrome die CSS Regions entfernt hat. Ersetzt durch `fluss.js`.
   - **Grundlinienraster:** Auch das fehlt in CSS. Ersetzt durch `fluss.js`.
   - **Silbentrennung:** Chromium in der Cloud-Umgebung trennt Deutsch falsch
     („Akad-emie“, „ausgestatt-et“). *Getestet.* Deshalb trennt jetzt das
     Paket `hyphen` (ISC) nach deutschen Mustern; das funktioniert auf jedem
     System gleich.
   - **CMYK:** Der Browser erzeugt nur RGB. Die Umwandlung übernimmt
     `druckvorstufe.py`.
2. **Blocksatz:** Der Browser kann Wortabstände nur dehnen, nicht stauchen, und
   kennt keinen Absatz-Setzer. Der Text lief eine Zeile zu lang. Gelöst wurde
   das mit Laufweite −10 auf dem Fließtext und einem leicht verringerten
   Wortabstand; *getestet* über den Vergleich der Rahmengrenzen.
3. **Schriften:** Die Lizenzschriften (Officina Sans, Euclid Flex, Univers
   Condensed, Jane Austen) wurden durch offene Schriften ersetzt. Die Auswahl
   folgte der **gemessenen Laufweite** an den Absatzenden des Originals:
   - PT Sans: 100,3 %
   - Plus Jakarta Sans: 101,7 %
   - zum Vergleich Fira Sans: 106,7 %

   Ein fehlendes Zeichen (U+2011) holte sich unbemerkt eine Ersatzschrift. Das
   fiel erst bei der Prüfung mit `pdffonts` auf.
4. **Verlaufstext und Verlaufsfläche** gibt Chromium als Rasterbild aus. Das
   Original von InDesign hat dieselben Elemente ebenfalls gerastert.
5. **PDF/X-4** ist gekennzeichnet, aber **nicht validiert**. Ein freier
   PDF/X-Prüfer war nicht verfügbar; veraPDF prüft nur PDF/A und PDF/UA.
   Vor dem echten Druck gehört das PDF durch den Preflight der Druckerei.
6. **Eingreifen** geht nur über Text und Zahlen in `index.html` und
   `flyer.css`: Positionen in mm, Texte als ein durchlaufender Block, Farben
   als Farbfelder. Ziehen und Schieben mit der Maus geht nicht. Für einen
   Gestalter ist das indirekt (*abgeleitet*). Ob das trägt, entscheidet der
   Mensch.
7. **Auffälligkeiten im Original**, nebenbei gefunden:
   - Der Fließtext ist vierfarbig aufgebaut (65/53/40/60). Bei 9 pt ist das ein
     Passerrisiko; üblich wäre 100 % Schwarz.
   - „Landwirtschaftswis–senschaften“ enthält einen Gedankenstrich als
     Trennstrich. Im Nachbau ist das korrigiert.
   - Die Grammatik in „zu thematische Führungen“ und „durch ihre“ ist
     unverändert gelassen; das ist eine inhaltliche Frage.

## Runde 2: mit den Originalschriften (2026-10-28)

Der Eigentümer stellte die Lizenzschriften für den Test bereit. Sie wurden nur
in der Arbeitsumgebung genutzt und liegen **nicht im Repo**.

- **Kein Einpassen mehr nötig.** Ohne Laufweite −10 und ohne Wortabstands-Trick
  passt der Text in die fünf Rahmen (*getestet*: kein Übersatz, Zeilen je Rahmen
  wie im Original). Der Mehrbedarf in Runde 1 lag also an den Ersatzschriften,
  nicht am Browser.
- **Was jetzt deckungsgleich ist** (*getestet* durch Überlagerung): Titel,
  Aufruf, Bildunterschriften, Antwortkarte, Adresse, Banner und die
  Grundlinien im Infokasten (Abweichung unter 0,2 mm).
- **Zeilenumbruch im Fließtext:** Nur 28 von 90 Zeilen sind inhaltsgleich mit
  dem Original (31 %; *getestet*). Der Rest bricht anders um, weil Browser und
  InDesign mit verschiedenen Setzalgorithmen und Trennregeln arbeiten. Das ist
  der verbleibende echte Unterschied. Zwei Maßnahmen haben ihn verringert:
  - Trennung erst nach dem dritten und vor dem drittletzten Buchstaben: von 18 % auf 26 %
  - `text-wrap: pretty`: weiter auf 31 %
- **Neuer Befund — Schrifteinbettung:** Chromium bettet die OpenType-CFF-Schriften
  (Euclid Flex, Univers) und die TrueType-Schrift mit Einbettungsbeschränkung
  (Officina, fsType 6) als **Type-3-Schriften** ein, also als Vektor-Umrisse
  ohne Hinting (*getestet* mit `pdffonts` und Prüfung der Glyphen). Für den Druck
  ist das in der Regel unkritisch. Manche Druckerei-Preflights warnen aber
  bei Type 3, deshalb vorher abklären.
- Pixelabweichung (Toleranz 12 %): 11,2 % auf der Innenseite und 8,6 % auf der
  Außenseite. Fast alles davon ist der anders umbrochene Fließtext.

## Runde 3: Feinsatz nach Fachpaket „Form“ (2026-10-28)

Regeln aus dem Fachpaket `fachpaket-form` (Abschnitt 2b), automatisch gesetzt.
Gemessen mit `typo-pruefung.py` (*getestet*):

| | Original | ohne Feinsatz | mit Feinsatz |
|---|---|---|---|
| Wortabstand Mittel ± Streuung | 1,41 ± 0,51 mm | 1,46 ± 0,53 mm | 1,24 ± 0,56 mm |
| Löcher über 2,5 mm | 5 | 4 | 3 |
| Trennungen / höchstens in Folge | 18 / 2 | 28 / 5 | 17 / 2 |

- Neu in `fluss.js`: kein Hurenkind und kein Schusterjunge, höchstens drei
  Trennungen in Folge (kurze Wörter zuerst sperren, weil lange ungetrennte
  Wörter Löcher reißen), letztes Wort eines Absatzes nie trennen.
- Grundwortabstand −0,08 em als Ersatz für das Stauchen, das Browser nicht können.
- Nebenwirkung: Der Text ist etwas kürzer, deshalb endet Feld 2 der Außenseite
  eine Zeile vor dem Rahmenende. Ob das so bleiben soll, ist eine
  Gestaltungsfrage an den Menschen.
- Inhaltliche Korrekturen mit Zustimmung des Eigentümers: IBAN in
  Vierergruppen, Bis-Strich „1200–1608“, „Saale-Orla“. „e.V.“ bleibt offen.

## Aufwand

Etwa eine Arbeitssitzung des Agenten, davon die Hälfte für Werkzeuge, die
jetzt wiederverwendbar sind (`fluss.js`, `druckvorstufe.py`).

## Nicht geprüft

Druck auf Papier; Preflight einer Druckerei; Verhalten in Safari und Firefox;
Bearbeitung durch den Menschen.

**Urteil (Mensch):** —
