---
dient: A04, A05, A06, A10, A27
datum: 2026-11-08
modell: Claude Opus 5.5 (Claude-App, Cloud-Sitzung)
status: Analyse, Stufe 2 nach Vorschlag 0031. Nicht gegengelesen. Keine Regel abgeleitet; Fragen am Ende.
---

# Text Time-lapse als Erkenntnisinstrument: Muster, Herkunft, Spannungen

Auftrag des Eigentümers (Chat, 08.11.): „Es ist doch selbst ein Werkzeug zum Erkenntnisgewinn, das
visuelle Ansätze, Informationsdesign und Unterstützung wählt. Welche Pattern stecken darin? Ich will
ganzheitliche, systematische, transdisziplinäre Analysen.“ Die vorige Fassung (Infrastruktur, UI, UX)
war dafür zu dünn; sie bleibt als [Prüfprotokoll](fall.md) stehen. Sichtung: Issue #153.

## Kurzantwort

Text Time-lapse macht aus einem unsichtbaren Vorgang, dem Überarbeiten eines Textes, einen
Gegenstand, den man ansehen, vergleichen und abspielen kann. Es verbindet dafür vier Traditionen,
die selten zusammenkommen: die **Textgenetik** der Philologie (der Text als Ergebnis seiner
Fassungen), die **Software-Visualisierung** (Zeilen nach Alter einfärben, seit Seesoft 1992), die
**Informationsvisualisierung** (Überblick zuerst, Small Multiples, Fokus und Kontext) und Manovichs
eigene **direkte Visualisierung** (Text bleibt Text). Daraus entstehen 38 benennbare Muster auf neun
Ebenen, vom Datenmodell bis zur Ethik. Die stärksten: das **Palimpsest als Datenmodell** (jedes je
geschriebene Wort mit Geburt und Tod), die **Herkunftsfarbe** auf dem Text selbst und **drei Zeitmodelle**
für dieselben Daten. Die größten Spannungen: Farbe soll zugleich Zeit ordnen und Text lesbar halten,
und die Schreib-Animation zeigt eine **Rekonstruktion, keine Beobachtung**, ohne das zu sagen.

## 1 Gegenstand, Fragestellung, Vorgehen

**Gegenstand:** Text Time-lapse 2 (Fassung vom 08.11.2026), mit Blick auf Fassung 1. Quelle,
Lizenzlage und Tests: [Prüfprotokoll](fall.md). Kein Code und kein Essaytext im Repo.

**Frage:** Welche Muster der Erkenntnisgewinnung stecken im Werkzeug, woher kommen sie, was leisten
sie, wo widersprechen sie einander, und was kann das Labor daraus lernen?

**Vorgehen:**
1. Alle Ansichten, Modi und Animationen gerendert und angesehen (13 Zustände, Desktop und mobil).
2. Datenmodell und Algorithmus im Code gelesen (`buildHistory`, `matcher`), nicht nur die Anleitung.
3. Den Beispieldatensatz nachgerechnet, um zu prüfen, welche Erkenntnisse das Werkzeug tatsächlich
   hergibt (Abschnitt 3).
4. Linsen des Labors angelegt: Munzners Ebenen [k:munzner-2009], Bertin [k:bertin-1967], Fachpaket
   Vermitteln, Manifest (Wahrnehmung), Skill `kritik` (Negativfolie).
5. Herkunft der Muster in Fachliteratur geprüft (Quellen am Ende); was ich nicht belegen konnte, ist
   markiert.

**Wahrnehmungssituation** (Manifest): Bildschirm am Schreibtisch, 50–70 cm, eine Person allein,
die ihren eigenen Text untersucht, Zeit für Erkundung, Vorwissen über den Text hoch, über
Visualisierung beliebig. *abgeleitet aus Anleitung und Gestaltung*

## 2 Das Werkzeug als Erkenntnisinstrument

Visualisierung gilt in der Informatik als computergestützte, interaktive, visuelle Darstellung von
Daten, die das Denken erweitert (Card, Mackinlay, Shneiderman 1999, Q1). Die Frage ist also: Welches
Denken erweitert dieses Werkzeug?

| Ebene nach Munzner | Antwort im Werk | Status |
|---|---|---|
| **Domäne, Frage** | Wie ist mein Text entstanden? Was blieb, was fiel, wo wurde umgeschrieben, wann kam was dazu? | belegt (Anleitung) |
| **Daten** | Fassungen eines Textes als Dateien, geordnet nach Dateinamen; abgeleitet daraus eine Wortgeschichte | belegt (Code) |
| **Aufgaben** | Überblick, Vergleich zwischen Fassungen, Filtern nach Fassung, Lesen im Detail, Ablauf nachvollziehen | abgeleitet |
| **Kodierung** | Herkunftsfarbe, Durchstreichen, Fett, Balken, kleine Seiten, Stapel, Bewegung | belegt |
| **Interaktion** | Ansicht wählen, Fassungen an- und abwählen, Zoom und Lupe, abspielen, springen | belegt |

**Erkenntnisart:** Das Werkzeug ist reflexiv. Es richtet die Methode der Cultural Analytics, also
große Bestände ohne vorab festgelegte Hypothese zu erkunden [k:manovich-2020], auf das eigene
Schreiben. Das schließt an Schöns Bild vom Entwerfen als Gespräch mit dem Material an
[k:schoen-1992-ried]: Hier antwortet der eigene Text. *abgeleitet*

**Textgenetik als Gegenstück:** Die critique génétique untersucht nicht den „fertigen“ Text, sondern
den Schreibprozess, rekonstruiert aus Notizen, Entwürfen und Korrekturen, dem „avant-texte“ (Q7).
Ihr eigentlicher Gegenstand ist die Bewegung des Schreibens, die aus den Dokumenten erschlossen
werden muss (Q7). Text Time-lapse ist ein Rechenwerkzeug für genau diese Erschließung, allerdings
nur aus gespeicherten Fassungen, nicht aus Notizen oder Hand. *Vergleich abgeleitet*

**Schreibforschung als Gegenstück:** Seit Flower und Hayes (1981) gilt Überarbeiten nicht als
Reparatur am Ende, sondern als Teil, der den ganzen Schreibprozess durchzieht (Q8). Die Forschung
beobachtet das mit Tastatur-Protokollen, etwa Inputlog, mit Pausen- und Revisionsanalyse (Q8). Text
Time-lapse arbeitet gröber, mit Fassungen statt Tastenanschlägen, dafür ohne Aufzeichnung und für
jeden Text, der in Fassungen vorliegt. *Vergleich abgeleitet*

## 3 Was das Instrument tatsächlich zeigt (Probe am Beispiel)

Aus dem Beispieldatensatz gerechnet (16 Fassungen; nur Zahlen, kein Text). Das zeigt, welche Art von
Befund das Werkzeug ermöglicht; es ist keine Aussage darüber, wie Manovich arbeitet.

| Befund | Zahl | Im Werkzeug sichtbar als |
|---|---|---|
| Je geschrieben / im Endtext | 5 423 / 3 946 Wörter; 27 % gestrichen | Zahlen auf den Knöpfen |
| Anteil der letzten Fassung am Endtext | 1 787 von 3 946 Wörtern (45 %) | Orange dominiert die ganze Seite |
| Lage der späten Fassung im Endtext | Zehntel 5 bis 7 des Endtextes stammen ganz aus Fassung 16 | ein geschlossener oranger Block in der Seitenmitte |
| Überlebensrate je Fassung | von 0 % (v6, v11) bis 96 % (v15); v5: 35 %, v8: 1 % | „16 pages“ und Ansicht „Deleted“ |
| Lebensdauer gestrichener Wörter | zweigipflig: viele sterben nach 1–2 Fassungen, ein Block von 466 Wörtern nach genau 10 | Revisions-Animation, Stapel |

*belegt (gerechnet aus `EX_D`)*. Gelesen heißt das: Das Werkzeug zeigt **Schichtung** (welche
Fassung trägt welchen Teil), **Erosion** (was übersteht) und **Ereignisse** (ein großer Schnitt).
Ob es Gründe zeigt, etwa warum ein Block fiel, nein: Es zeigt Spuren, keine Absichten. *abgeleitet*

## 4 Musterkatalog

Je Muster: was es löst, wie es im Werk umgesetzt ist, woher es kommt, wie es zu bewerten ist.
Status je Zeile: **b** belegt · **a** abgeleitet · **n** nicht belegt.

### A · Daten und Modell

| # | Muster | Im Werk | Herkunft | Bewertung |
|---|---|---|---|---|
| A1 | **Palimpsest als Datenmodell** | Jedes je geschriebene Wort bleibt in Lesereihenfolge erhalten, mit Fassung der Entstehung, Fassung der Streichung und Art der Änderung (neu, umgeschrieben, gestrichen) (b, Code) | Textgenetik: das avant-texte als Sammlung aller Stufen (Q7, b); Software: ein gemeinsamer Graph aller Zeilen aller Fassungen, etwa CVSscan (Q4, b) | Kernidee. Ein Datensatz trägt alle Ansichten. Stärkstes übertragbares Muster (a) |
| A2 | **Vergleich als Messinstrument** | Wortweiser Vergleich nach Pythons `difflib`; „Edited“ ist ein Ersetzen, nicht ein inhaltliches Urteil (b, Code) | Versionsverwaltung: diff zwischen Fassungen, gelöschte und eingefügte Zeilen gelten zusammen als geändert (Q4, b) | Die Körnung „Wort“ ist eine Entscheidung: feiner als Zeilen, gröber als Zeichen. Tippfehlerkorrekturen und Umstellungen erscheinen als Umschreiben (a) |
| A3 | **Verschiebung erkennen** | Ein Lauf von 6 oder mehr Wörtern, der an einer Stelle gestrichen und an anderer eingefügt wird, gilt als verschoben und behält seine alte Fassung (b, Code) | — | Eine Schwelle, die man nicht sieht und nicht einstellen kann. Kürzere Umstellungen zählen als neu (a) |
| A4 | **Fassung als Zeitachse** | Zeit ist die Reihenfolge der Fassungen, nicht der Kalender; Abstände sind gleich, egal ob Minuten oder Wochen dazwischen lagen (b, Anleitung) | History Flow bot beides an: gleiche Abstände oder echte Zeit (Q2, b) | Ordinale Zeit ist ehrlich, wenn die Daten nur so sicher sind (Dateidatum ist unzuverlässig, sagt die Anleitung). Echte Zeit fehlt als Option (a) |

### B · Kodierung

| # | Muster | Im Werk | Herkunft | Bewertung |
|---|---|---|---|---|
| B1 | **Herkunftsfarbe** | Jedes Wort trägt die Farbe der Fassung, in der es entstand | Seesoft (1992): jede Codezeile als dünne Zeile, gefärbt nach Alter oder Autor (Q3, b); History Flow: Farbe je Autor (Q2, b); Ben Fry, Darwin-Ausgaben: Änderungen je Auflage farbig (Q5, b) | Bewährte Lösung aus drei Feldern. Neu ist sie auf Fließtext in Seitenform (a) |
| B2 | **Direkte Visualisierung** | Der Text selbst ist das Zeichen, nicht ein Punkt oder Balken für ihn | Manovich: „visualization without reduction“, Text bleibt Text (Q6, b) | Die Theorie des Autors, hier in eigenem Werkzeug umgesetzt. Erhält Lesbarkeit und Kontext (a) |
| B3 | **Abstraktion auf Wunsch** | „Blocks“ ersetzt Wörter durch Balken gleicher Länge und Farbe | Seesoft, Zeile → Pixelzeile (Q3, Q4, b) | Der Wechsel zwischen direkter und reduzierter Darstellung ist ein Schalter, kein Werkzeugwechsel. Gute Brücke zwischen Lesen und Muster (a) |
| B4 | **Kulturtechnik Durchstreichen** | Gestrichenes bleibt durchgestrichen sichtbar („All written“) | Korrektur auf Papier, Manuskript (n, Allgemeinwissen) | Sofort verständlich ohne Legende (Kongruenz nach Tversky, Q9) (a) |
| B5 | **Zweite Variable auf Schriftgewicht** | „Rewrites bold“: Umgeschriebenes fett und dunkler, Neues heller | — | Fügt eine Dimension hinzu, ohne Farbe zu verbrauchen (Bertin: Größe/Helligkeit sind selektiv) [k:bertin-1967] (a) |
| B6 | **Farbverlauf für Ordnung** | Navy → Magenta → Orange, im Lab-Raum gemischt; dazu ruhige und kräftige Farbtöne, Grau, eigene Farben | Regenbogen verzerrt Ordnung [k:borland-taylor-2007] | Teilweise gelöst: Der Verlauf ist kein Regenbogen, aber die Ordnung trägt vor allem der Farbton, und der ist nach Bertin nicht geordnet [k:bertin-1967]. Späte Fassungen werden hell und schwer lesbar (siehe Spannung S1) (a) |

### C · Ansichten und Lesestufen

| # | Muster | Im Werk | Herkunft | Bewertung |
|---|---|---|---|---|
| C1 | **Ganzer Text auf einer Seite** | „Whole page“ setzt den ganzen Text in Spalten auf eine Seite; Startzustand | Shneiderman: Überblick zuerst (Q10, b); Bertin: Lesestufe „gesamt“ [k:bertin-1967] | Man liest nicht, man sieht die Gestalt des Textes. Starke Erstbegegnung (a) |
| C2 | **Small Multiples** | „16 pages“: eine kleine Seite je Fassung, gleicher Rahmen, nur die Änderungen farbig, mit Zahlen | Tufte: gleiche Gestaltung, wechselnde Daten, Vergleich im Blickfeld (Q11, b) | Stärkste Vergleichsansicht. Zeigt Rhythmus der Arbeit auf einen Blick (a) |
| C3 | **Stapel als Schichtung** | „3D view“: Seiten übereinander, Abstand und Transparenz einstellbar | Geologische Schichten als Metapher (n) | Einprägsam, aber Verdeckung und Perspektive erschweren genaues Ablesen. Eine Kursfolie zu Tversky (UBC) fasst zusammen, dass 3D weder Tempo noch Genauigkeit verbessert; im Original nicht geprüft (a) |
| C4 | **Lesestufe einzeln** | „Large type“: etwa zehn lesbare Zeilen, eine Spalte zum Scrollen | Bertin: Lesestufe „elementar“ [k:bertin-1967] | Schließt den Kreis von Muster zu Wort (a) |
| C5 | **Seite als Messfläche** | Text erscheint auf Papierformaten (A4, 4:5, Quadrat, 9:16, 16:9), Serifenschrift, Blocksatz, Einzug | Typografische Konvention des Buches (n) | Die Seite ist zugleich Leseobjekt und Diagramm. Formate verraten Zielmedien: Druck, Instagram, Story, Folie (a) |

### D · Interaktion

| # | Muster | Im Werk | Herkunft | Bewertung |
|---|---|---|---|---|
| D1 | **Sieben Aufgaben nach Shneiderman** | Überblick (Whole page), Zoom (Regler, Large type), Filter (Fassungen wählen, Textansicht), Details (Lupe), Beziehen (Fassung gegen frühere), Verlauf (Animationen), Extrahieren (fehlt) | Shneiderman 1996: sieben Aufgaben (Q10, b) | Sechs von sieben abgedeckt. Es fehlt Export: kein Bild, keine Daten, keine Liste der Änderungen (a) |
| D2 | **Fokus und Kontext** | „Earlier versions in gray“: eine Fassung farbig, der Rest grau; Lupe über der Seite | Card u. a.: eigenes Kapitel Focus + Context (Q1, b) | Klassisch und gut umgesetzt (a) |
| D3 | **Auswahl als Abfrage** | Fassungs-Leiste: eine oder mehrere Fassungen wählen, nur deren Wörter erscheinen | Dynamische Abfragen mit sofortiger Antwort nach Shneiderman (Kolloquium Stanford 2000, [Ankündigung](https://web.stanford.edu/class/ee380/Abstracts/O01018.html); im Original nicht geprüft) | Schnell, umkehrbar, sichtbar (a) |
| D4 | **Zahlen als Vorschau** | Jeder Ansichtsknopf nennt seine Menge („Deleted 1,477“) | — (n) | Sagt vorher, was kommt; macht Proportionen ohne Diagramm sichtbar (a) |

### E · Zeit und Bewegung

| # | Muster | Im Werk | Herkunft | Bewertung |
|---|---|---|---|---|
| E1 | **Drei Zeitmodelle** | *Revisions*: Ereignis je Fassung (neu, gestrichen, ersetzt); *Versions*: Zustand je Fassung (Daumenkino); *Write*: Prozess Wort für Wort | Wiedergabe von Schreibverläufen: Etherpad, Draftback (Q12, b) | Selten: dieselben Daten als Ereignis, Zustand und Prozess. Jede Form beantwortet eine andere Frage (a) |
| E2 | **Inszenierte Übergänge** | Gestrichenes bleibt kurz durchgestrichen stehen, dann verschwindet es; Pause nach jeder Fassung | Heer und Robertson: Übergänge in Stufen sind besser und werden bevorzugt (Q13, b) | Entspricht dem Stand der Forschung (a) |
| E3 | **Dauer als Variable** | „Big versions longer“: Fassungen mit mehr Änderungen bekommen mehr Zeit | — (n) | Zeit kodiert Menge. Ungewöhnlich, sinnvoll, aber nicht erklärt (a) |
| E4 | **Synthetische Schreibreihenfolge** | „Write“ und „Reading order“ spielen Wörter in Lesereihenfolge ab; „Scattered“ verstreut. Die echte Reihenfolge ist aus Fassungen nicht bekannt | Draftback nutzt echte Tastenprotokolle aus Google Docs (Q12, b) | Wichtigster Befund zur Ehrlichkeit: Die Animation sieht aus wie Beobachtung, ist aber Rekonstruktion. Die Anleitung sagt das nicht (a); siehe Spannung S2 |
| E5 | **Animation neben Standbild** | Jede Animation hat ein statisches Gegenstück (Seite, kleine Seiten) | Tversky u. a.: Animation ist oft zu schnell oder zu komplex; Interaktivität kann das ausgleichen (Q9, b); Animation zeigt Trends, Small Multiples erleichtern Vergleich (Q11, b) | Richtig gelöst: Bewegung erzählt, Standbild prüft; Abspielen ist steuerbar (Tempo, Schritt, Regler) (a) |

### F · Vermittlung und Bedienung

| # | Muster | Im Werk | Bewertung |
|---|---|---|---|
| F1 | **Beispiel zuerst** | Öffnet mit einem echten, eigenen Text in 16 Fassungen; „Example“ holt ihn zurück | Ersetzt die leere Seite durch einen Fall. Der Autor zeigt sich selbst als Untersuchungsgegenstand (a) |
| F2 | **Stufen der Bedienung** | Fassung 1 zeigt alles, Fassung 2 fünf Zeilen und „Advanced“; Einstellungen erscheinen nur, wo sie wirken | Zwei Antworten auf dieselbe Frage, beide veröffentlicht (b, README) |
| F3 | **Hilfe als Modus** | „?“ schaltet einen Zustand, in dem Zeigen erklärt statt auslöst | Vergleichbar mit der gestuften Erklärung der Labor-Studie „Reihe und Verschiebung“ (a) |
| F4 | **Stillstand beim Umschalten** | Spieler-Zeile ist immer da, nur blass; Höhe bleibt | Entspricht Heers Rat, Bezugspunkte zu halten (Q13); im Werk als Ziel in Commit-Titeln benannt (a/b) |
| F5 | **Anleitung als Teil des Werks** | README mit Tabellen, Dateibenennung mit Gegenbeispielen, Grenzen (Dateidatum) | Ehrliche, praktische Vermittlung; die Lücke E4 fehlt dort (a) |

### G · Form und Ästhetik

| # | Muster | Im Werk | Bewertung |
|---|---|---|---|
| G1 | **Papier im Bildschirm** | Die Seite bleibt weiß, auch im Dunkelmodus; Oberfläche ruhig, grau, klein | Trennung von Gegenstand (Seite) und Werkzeug (Steuerung). Ästhetisch klar, vgl. Müllers Eleganz [k:mueller-esono] (a) |
| G2 | **Datenbild als Bild** | Die ganze Seite in Farbe hat eigenen Bildwert; Fry hat seine Darwin-Arbeit auch als Buch und Plakat ausgegeben (Q5, b) | Brücke zu Datenkunst [k:bremer-visualcinnamon]; Manovichs Werk changiert bewusst zwischen Werkzeug und Bild (a) |

### H · Infrastruktur und Medium

| # | Muster | Im Werk | Bewertung |
|---|---|---|---|
| H1 | **Öffentliche Seite, private Daten** | Dateien werden nur im Browser gelesen, nichts hochgeladen | Gleiches Versprechen wie Draftback, dessen Daten den Browser nicht verlassen (Q12, b). Löst einen offenen Punkt des Labors (a) |
| H2 | **Werkzeug als eine Datei** | 227 KB, ohne Build, auf GitHub Pages | Rückbaubar, archivierbar, weitergebbar (a) |
| H3 | **Fassungen des Werkzeugs als Adressen** | Fassung 1 und 2 nebeneinander | Das Werkzeug wendet sein eigenes Thema auf sich an (a) |
| H4 | **Mit KI gebaut** | alle 48 Commits mit Claude als Mitautor; Vorarbeit in Python | Rahmenbedingungen unbekannt; siehe Prüfprotokoll (b/n) |

### I · Gesellschaft und Ethik

| # | Muster | Befund | Bewertung |
|---|---|---|---|
| I1 | **Selbstbeobachtung statt Überwachung** | Das Werkzeug ist für den eigenen Text gebaut und lädt nichts hoch | Dieselbe Form dient anderswo der Kontrolle: Draftback wird laut Beschreibung im Erweiterungs-Katalog vor allem von Lehrkräften genutzt, um Plagiat und ChatGPT-Nutzung zu erkennen (Q12, b). Prozesssichtbarkeit ist ambivalent (a) |
| I2 | **Autorschaft im KI-Zeitalter** | Ein Werkzeug, das Schreibfassungen sichtbar macht, mit KI gebaut, von einem Theoretiker der KI-Ästhetik [k:manovich-2024] | Es kann als Beleg menschlicher Arbeit gelesen werden oder als Spiel damit. Ob Manovich das beabsichtigt, ist nicht belegt (n) |
| I3 | **Wer wird gezeigt** | Das Beispiel ist der eigene Text des Autors | Kein fremder Schreibprozess wird ausgestellt; D'Ignazio und Klein fragen genau das [k:dignazio-klein-2020] (a) |

## 5 Spannungen

| # | Spannung | Wo | Einordnung |
|---|---|---|---|
| S1 | **Farbe für Zeit gegen Lesbarkeit** | Späte Fassungen in Orange auf Weiß bei 2,2–3,4 zu 1 (Prüfprotokoll); Farbton trägt die Ordnung | Manifest: Lesbarkeit zuerst, Abweichung mit benanntem Risiko. Hier ist das Risiko nicht benannt. Lösungsrichtung: Helligkeit monoton und im lesbaren Bereich, Farbton nur zur Unterscheidung (Bertin) (a) |
| S2 | **Rekonstruktion sieht aus wie Beobachtung** | Write, Reading order | Textgenetik betont, dass die Bewegung des Schreibens erschlossen werden muss (Q7). Das Werkzeug zeigt eine Hypothese als Film. Ein Hinweis „gespielt in Lesereihenfolge, nicht in Schreibreihenfolge“ würde genügen (a) |
| S3 | **Reduktion gegen Erklärung** | Fassung 2 ist ruhiger, erklärt aber über Hilfemodus statt sichtbar | Zwei Fassungen nebeneinander lassen die Nutzer wählen; eine Messung, welche besser trägt, gibt es nicht (a) |
| S4 | **Direkt gegen reduziert** | Text gegen Blocks | Manovich stellt beides nebeneinander statt zu entscheiden; das ist selbst eine Haltung (Fachpaket Vermitteln: Spannung Reduktion oder Reichtum) (a) |
| S5 | **Einprägsam gegen genau** | 3D-Stapel, Animation | Bild für Erinnerung und Vermittlung, Small Multiples für Prüfung. Das Werk bietet beides (a) |
| S6 | **Unsichtbare Parameter** | Schwelle 6 Wörter für Verschiebung, Wortkörnung, Sortierung nach Dateinamen | Entscheidungen, die das Ergebnis prägen, aber nicht in der Oberfläche stehen; Dörk: Visualisierung ist nicht neutral [k:doerk-2013] (a) |

## 6 Negativfolie

Die naheliegende Lösung für „zeige, wie sich mein Text verändert hat“ wäre (Skill `kritik`):
eine Liste der Fassungen mit Datum, ein Vergleich zweier Fassungen nebeneinander mit Rot und Grün,
dazu ein Liniendiagramm der Wortzahl. *abgeleitet*

Text Time-lapse weicht davon in vier Punkten bewusst ab: **alle Fassungen zugleich** statt zwei,
**Text als Bild** statt Liste, **Herkunft statt Differenz** (jedes Wort weiß, woher es kommt, nicht
nur was sich zuletzt änderte) und **Zeit als Bewegung** statt als Achse. Wo es nicht abweicht, wäre
Abweichung nötig: bei der Farbe (S1) und beim Kennzeichnen von Rekonstruktion (S2). *abgeleitet*

## 7 Was das Labor daraus lernen kann

Keine Regeln. Kandidaten, je mit Bezug zu einem offenen Punkt des Labors:

1. **Palimpsest-Modell für Laborbuch und Vergleichsansicht** (A1, E1): Die Bausteine B und C aus
   `experiments/2026-10-entwurfsprozess.md` sind für Gestaltungsrunden geplant. Das Muster „ein
   Datensatz mit Geburt und Tod jedes Elements, daraus Ereignis-, Zustands- und Prozessansicht“
   ließe sich von Wörtern auf Entwurfselemente übertragen (Raster, Farben, Textblöcke eines Flyers).
2. **Lücken im Fachpaket Vermitteln:** Es hat keine Position zu **Animation** (Tversky; Heer und
   Robertson), zu **Text als Datenraum** (Seesoft, History Flow, Fry, direkte Visualisierung) und zu
   **Zeitmodellen** (Ereignis, Zustand, Prozess). Diese Quellen fehlen auch im Korpus.
3. **Prüffall für Farbe auf Text** (B6, S1): ein Prüffall in `evals/` für geordnete Farben auf
   Schrift, mit Kontrastmessung und Bertin-Prüfung.
4. **Rekonstruktion kennzeichnen** (E4, S2): als Prüffrage für eigene Studien: Zeigt eine Bewegung
   Beobachtetes oder Erschlossenes, und steht das dabei?
5. **Öffentliche Seite, private Daten** (H1): für Werke mit fremden Inhalten.

## 8 Grenzen

- Ein Werk, eine Momentaufnahme; es ändert sich stündlich.
- Die Herkunft der Muster ist als Verwandtschaft belegt, nicht als Einfluss: Ob Manovich Seesoft,
  History Flow oder Frys Arbeit vor Augen hatte, ist nicht belegt.
- Die Wirkung auf Nutzer ist nicht getestet; Aussagen über Verständlichkeit sind abgeleitet aus
  Forschung, nicht gemessen.
- Fachliteratur über Suchauszüge und Verlagsseiten geprüft, nicht vollständig gelesen.
- Nicht gegengelesen durch ein anderes Modell.

## 9 Für den Eigentümer zu entscheiden

1. Sollen die neuen Quellen (Q1–Q13) in den Korpus und die Lücken aus Abschnitt 7.2 ins Fachpaket
   Vermitteln?
2. Soll das Palimpsest-Modell (7.1) als Entwurf für das Laborbuch weiterverfolgt werden?
3. Wer liest gegen: Astra, oder ein anderes Modell Ihrer Wahl?

## Quellen

| Nr. | Quelle | Wofür |
|---|---|---|
| Q1 | Card, Mackinlay, Shneiderman (Hg.): *Readings in Information Visualization: Using Vision to Think*, 1999, [Verlag](https://shop.elsevier.com/books/readings-in-information-visualization/card/978-0-08-051573-1); Definition zitiert nach [Stasko, Vorlesung 2013](https://faculty.cc.gatech.edu/~stasko/7450/13/Notes/value.pdf) | Definition, Fokus und Kontext |
| Q2 | Viégas, Wattenberg, Dave: *Studying Cooperation and Conflict between Authors with history flow Visualizations*, CHI 2004, S. 575–582, doi:10.1145/985692.985765, [Zusammenfassung](https://acawiki.org/Studying_cooperation_and_conflict_between_authors_with_history_flow_visualizations), [Bericht zur Vorstellung](https://thoughtcrumbs.com/2004/05/wikipedia-authorship-visualization.shtml) | Fassungen nach Autor gefärbt; Zeit gleichmäßig oder echt |
| Q3 | Eick, Steffen, Sumner: *Seesoft – A Tool for Visualizing Line Oriented Software Statistics*, IEEE TSE 18(11), 1992, doi:10.1109/32.177365 | Zeile als farbige Pixelzeile, Alter aus Versionsverwaltung |
| Q4 | *A Line Based Visualization of Code Evolution* (CVSscan; Telea u. a., Autorenangabe nicht geprüft), [PDF](https://webspace.science.uu.nl/~telea001/uploads/PAPERS/ASCI05/cvsscan.pdf) | diff als Grundlage; gemeinsamer Graph aller Fassungen |
| Q5 | Ben Fry: *On the Origin of Species: The Preservation of Favoured Traces*, 2009, [Cooper Hewitt](https://www-4.collection.cooperhewitt.org/objects/1108751253) | Darwins sechs Auflagen, Änderungen je Auflage farbig; Buch und Plakat |
| Q6 | Manovich: *What is Visualisation?*, Visual Studies 26(1), 2011, S. 36–49; [Abstract](https://paj-ojs-tamu.tdl.org/paj/index.php/paj/article/view/19) | direkte Visualisierung, Visualisierung ohne Reduktion |
| Q7 | Deppman, Ferrer, Groden (Hg.): *Genetic Criticism: Texts and Avant-textes*, 2004, [Verlag](https://www.pennpress.org/9780812237771/genetic-criticism/) | Textgenetik, avant-texte, Rekonstruktion des Schreibprozesses |
| Q8 | Leijten, Van Waes: *Keystroke logging in writing research: Inputlog*, [Uni Antwerpen](https://repository.uantwerpen.be/link/irua/79195); zu Flower und Hayes 1981 und Revision: [Aufsatz zur Online-Revision](https://core.ac.uk/download/270180221.pdf) | Schreibprozessforschung, Revision als durchgehender Teil |
| Q9 | Tversky, Morrison, Bétrancourt: *Animation: can it facilitate?*, IJHCS 57, 2002, S. 247–262, [PDF](https://hci.stanford.edu/courses/cs448b/papers/Tversky_AnimationFacilitate_IJHCS02.pdf) | Kongruenz und Auffassung; Grenzen der Animation |
| Q10 | Shneiderman: *The Eyes Have It*, IEEE VL 1996, doi:10.1109/VL.1996.545307 | Überblick zuerst; sieben Aufgaben |
| Q11 | Tufte: *Envisioning Information*, 1990, S. 67; Überblick [Wikipedia](https://en.wikipedia.org/wiki/Small_multiple) | Small Multiples; Animation gegen Small Multiples |
| Q12 | James Somers: Draftback (2014), [Bericht](https://features.jsomers.net/how-i-reverse-engineered-google-docs/), [Erweiterung](https://extpose.com/ext/68313) | Wiedergabe echter Tastenprotokolle; Daten bleiben im Browser; Nutzung zur KI-Erkennung |
| Q13 | Heer, Robertson: *Animated Transitions in Statistical Data Graphics*, IEEE TVCG 13(6), 2007, [PDF](https://vis.berkeley.edu/papers/animated_transitions/2007-AnimatedTransitions-InfoVis.pdf) | Übergänge in Stufen, Bezugspunkte halten |
