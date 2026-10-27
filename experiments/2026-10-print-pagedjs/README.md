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

## Aufwand

Etwa eine Arbeitssitzung des Agenten, davon die Hälfte für Werkzeuge, die
jetzt wiederverwendbar sind (`fluss.js`, `druckvorstufe.py`).

## Nicht geprüft

Druck auf Papier; Preflight einer Druckerei; Verhalten in Safari und Firefox;
Bearbeitung durch den Menschen.

**Urteil (Mensch):** —
