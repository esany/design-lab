---
dient: A04, A05, A07, A08, A10, A14, A23, A27, A33
datum: 2026-11-05
modell: Claude Opus 5.5 (Claude-App, Cloud-Sitzung)
status: Konzept. Beschlossen ist nur der Leitfaden (0032). Alles Weitere wartet auf die Antworten des Eigentümers.
---

# Arbeitsteilung der Wissensformen: Leitfaden, Radar, Fachpakete, Korpus

Auftrag des Eigentümers (Chat, 05.11.): „Dann braucht der Radar auch eine visuelle Form? Haben wir
das schon eingeplant? Erarbeite eine Arbeitsteilung der Ansätze. Achte auf Motivation, Intent und
Nutzungssituation. Arbeite ganzheitlich und systemisch.“

**Kurzantwort:** Eine visuelle Form des Radars ist **nicht eingeplant**. Es gibt dazu kein Issue
und keinen Eintrag im Umbauplan; `radar.md` ist eine Tabelle, die von Hand gepflegt wird
(*belegt*, Suche in Issues, `research/2026-10-umbau/plan.md` und `anschluss/`). Sie lohnt sich
aber, und zwar nicht als Einzelstück, sondern als zweite Ansicht neben dem Leitfaden. Beide sind
dann Teil einer gemeinsamen Arbeitsteilung, in der jede Wissensform genau eine Frage beantwortet
und jede Tatsache genau einmal steht.

## 1 · Ausgangslage: was der Eigentümer tut und wo

**Intent** (`intent.md`): Gestalten und den Entwicklungsstand gemeinsam durchgehen, nicht Technik
bedienen. Im Leitbild steht: Domänenwissen aufbauen und nutzen, ohne technisch oder fachlich
urteilen zu müssen. Verlässlichkeit soll in der Technik stecken, nicht in Anweisungen.

**Nutzungssituation** (*abgeleitet* aus dem Verlauf der Sitzungen und A14):

| | |
|---|---|
| Gerät | meist Handy (Claude-App), manchmal Desktop |
| Zeit | kurze Fenster, oft zwischen anderer Arbeit; selten langes Lesen |
| Vorwissen | Gestalter und Systemdenker, kein Entwickler; liest keinen Code |
| Absicht | sich orientieren, entscheiden, lernen, nachfragen |
| Risiko | zu viel Text, mehrere Stellen mit demselben Stand, Regeln ohne Wirkung |

**Motivation** in seinen Worten, verdichtet: professionell arbeiten, hochwertige Projekte und
Werkzeuge entwickeln, fehlende Fähigkeiten aufbauen, in der eigenen Domäne auf dem Stand der
Zeit bleiben, ohne dafür Techniker werden zu müssen.

## 2 · Die Arbeitsteilung: jede Form beantwortet eine Frage

| Form | Frage des Eigentümers | Leser zuerst | Art des Wissens | Rhythmus | Wer pflegt | Wer entscheidet |
|---|---|---|---|---|---|---|
| **Leitfaden** | Wie arbeite ich gut? | Mensch | Handlungswissen: Regeln, Kriterien, Warum | monatlich | Pflege | neue und überholte Einträge: Eigentümer |
| **Radar** | Was nehme ich, was ist neu? | Mensch und Modell | konkrete Dinge mit Urteil und Datum | wöchentlich | Radar-Scan | Ring „Einsetzen“ und „Halten“: Eigentümer |
| **Fachpakete** | Was gilt fachlich in Feld X? | Modell | Kanon, Qualitätskriterien, Rolle der KI | bei Bedarf | Claude, gegengelesen | Kanon: Eigentümer |
| **Korpus** | Woher stammt das? | beide | Herkunft: Verweise mit Status | bei jeder Aufnahme | wer eine Quelle nutzt | Auswahl in `referenzen.json`: Eigentümer |
| **Entscheidungen** | Warum ist das so? | beide | Begründungen | bei Bedarf | Claude | Eigentümer |
| **Fundstücke** | Ist das etwas? | Mensch | Eingang, Sichtung | laufend | jeder Chat | verwerfen oder vertiefen: Eigentümer |

**Die Grenze zwischen Leitfaden und Radar** ist die wichtigste:

- Der **Leitfaden** sagt, *woran* man ein gutes Werkzeug oder Vorgehen erkennt. Seine Aussagen
  halten Monate bis Jahre, etwa: „Prüfung, die die KI selbst ausführen kann“.
- Das **Radar** sagt, *welches* Werkzeug heute in welchem Ring steht. Das hält Wochen bis Monate,
  etwa: „Penpot 2.19 mit MCP: erproben“.
- Der Leitfaden verweist auf Radar-Einträge, das Radar verweist auf Leitfaden-Kriterien. Keiner
  kopiert den anderen.

**Leitfaden und Fachpaket** unterscheiden sich durch den Leser. Ein Fachpaket wird vom Modell
während der Arbeit geladen und ist dicht und lang. Der Leitfaden-Bereich „Domänen“ übersetzt
für den Menschen nur, was dort gerade wichtig ist, und verlinkt hinein.

**Der Fundstück-Weg verteilt in alle Formen** (0031): Eine Quelle kommt in den Korpus, ein
Werkzeug ins Radar, eine Arbeitsweise in den Leitfaden, Fachwissen ins Fachpaket. Das
Fundstück Palmer ist der erste Fall: Quelle im Korpus, Eintrag „Überholt“ im Leitfaden.

## 3 · Ein gemeinsames Muster für alle Ansichten

Was der Leitfaden eingeführt hat, gilt für jede Ansicht, die der Mensch liest (A08, A14):

1. **Daten statt Seite:** JSON im Repo, die Seite wird erzeugt, der Build prüft. Eine Ansicht
   kann deshalb nicht von ihren Daten abweichen.
2. **Drei Stufen:** Überblick in einem Satz → Warum → Hintergrund und Quellen.
3. **Status und Datum sichtbar:** Belegstatus, geprüft am, überholt seit.
4. **Änderungen sichtbar:** Liste „Was hat sich bewegt“, dazu der Git-Verlauf.
5. **Verweise per ID:** Quellen über den Korpus, Querverweise zwischen Leitfaden und Radar.
6. **Handy zuerst:** einspaltig, große Regel, Details zum Aufklappen.

## 4 · Das Radar als Ansicht

**Zweck in der Nutzungssituation:** auf einen Blick sehen, was sich bewegt hat und was man
heute einsetzen sollte. Das sind zwei bis drei Minuten am Handy.

**Daten:** `radar.md` wird zu `radar/eintraege.json`. Daraus erzeugt der Build die Seite
`radar/` **und** weiterhin `radar.md`, damit Agenten und der Radar-Scan wie gewohnt arbeiten.
Neu je Eintrag sind ein **Feld** (z. B. Entwurf und Gestaltung · Daten und Visualisierung ·
KI-Anbindung und Agenten · Formate und Standards · Methoden und Prüfung · später Digitale
Edition) und eine **Bewegung** (neu · hoch · runter · gleich, mit Datum).

**Darstellung, zwei Wege** (Gestaltungsentscheidung, siehe Fragen):

| | A · klassisches Radar (Kreis, Ringe, Sektoren) | B · Matrix: Ringe als Spalten, Felder als Zeilen |
|---|---|---|
| Stärke | bekanntes Bild, schöne Gesamtgestalt | lesbar auf dem Handy; die Zeilen stapeln sich |
| Schwäche | bei über 30 Einträgen und 390 px Breite kleine, sich überlagernde Beschriftungen; Position im Sektor trägt keine Bedeutung | weniger ikonisch |
| Bertin | Lage im Kreis ist nur grob ordnend; der Winkel innerhalb eines Sektors ist Rauschen | Spalte (geordnet) und Zeile (selektiv) tragen beide Bedeutung |

**Empfehlung (*abgeleitet*):** B als Hauptansicht, ergänzt um die Leiste „Bewegt seit dem
letzten Scan“ oben. A höchstens als Desktop-Poster. Das Radar-Bild ist ein bekanntes Muster,
aber für dieses Publikum, Gerät und diese Menge eine ästhetische Wahl mit benanntem Risiko
(Manifest, Leitsatz 3).

## 5 · Der Leitfaden wächst, aber nur entlang der Arbeitsteilung

Vorschlag für die Bereiche, geordnet nach der Frage „Wie arbeite ich gut?“:

| Bereich | Inhalt | Verweist auf |
|---|---|---|
| Grundlagen | besteht | — |
| **Prüfen und Qualität** | Vorführung statt Bericht, Fehler mit Absicht, frischer Blick, grün ist nicht fertig | Labor-Audits |
| **Anforderungen und Abnahme** | „fertig“ vorher festlegen, dünner Durchstich, Lesart klären | `decisions/`, Skill `issue` |
| Systeme entwickeln | Einträge aus „Werkzeuge entwerfen“ (Sperren, ein Ort, Regelflut, Runden) | Labor-Audits |
| Daten und Struktur | Datenmodell, offene Formate, Standards | Radar (Formate) |
| Werkzeuge wählen | Kriterien: offen, austauschbar, prüfbar, Schatz oder Marketing | **Radar**, 0031 |
| Zusammenarbeit der KIs | Arbeitsteilung, Übergaben, wer prüft wen | 0025 |
| Sicherheit, Recht, Kosten | öffentliches Repo, fremde Skills, Lizenzen, Modellwahl | A13, A15, A16 |
| Domänen | je Feld: was gerade wichtig ist | **Fachpakete** |
| Überholt | besteht | — |

„Werkzeuge entwerfen“ wird dabei auf „Prüfen und Qualität“ und „Systeme entwickeln“ verteilt.
Sonst überschneiden sich die Bereiche.

## 6 · Lücken, die das Konzept sichtbar macht

- **Fachpaket „Digitale Edition und Paläografie“ fehlt.** paleo-type arbeitet ohne fachliche
  Rückendeckung des Labors. Es ist das größte Stück und braucht eigene Recherche.
- **Radar ohne Felder:** Heute ist nicht erkennbar, für welches Feld ein Werkzeug steht.
- **Zwei Radar-Einträge widersprechen dem Leitfaden nicht, sind aber nicht verbunden:**
  „Gegenprüfung durch zweites Modell“ (Radar, Methoden) und `k-zweitblick` (Leitfaden). Das
  ist ein Beleg für die Grenze in Abschnitt 2: Eine Methode gehört in den Leitfaden, ein
  Werkzeug ins Radar.

## 7 · Reihenfolge (Vorschlag)

1. Leitfaden: Bereiche „Prüfen und Qualität“ sowie „Anforderungen und Abnahme“. Das ist das
   akute Problem in paleo-type. Klein, Muster vorhanden.
2. Radar als Daten und Ansicht (B), mit Feldern und Bewegung. Mittel, Muster vom Leitfaden.
3. Leitfaden: übrige Bereiche, je einer pro Monat, jeweils an echter Arbeit erprobt.
4. Fachpaket „Digitale Edition“. Groß; erst wenn die Pause in paleo-type endet.

Die Reihenfolge folgt dem Befund des Labors, dass Stützarbeit nicht schneller wachsen soll als
Sacharbeit: immer nur ein Bereich, und jeder wird an echter Arbeit erprobt.

## Was nicht geprüft ist

- Die Nutzungssituation ist abgeleitet, nicht erfragt oder gemessen.
- Ob Darstellung B auf dem Handy wirklich besser gelesen wird, ist nicht getestet. Prüfbar wäre
  es mit beiden Varianten am echten Bestand (46 Einträge, davon 13 noch unbewertet).
- Die Felder für das Radar sind ein Vorschlag; die Zuordnung der 46 Einträge ist nicht gemacht.
