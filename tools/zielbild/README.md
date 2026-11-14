# Zielbild-Generator

Macht aus einer Datei `punkte.json` eine Seite, auf der die KI zeigt, was sie verstanden hat, und
der Mensch je Punkt urteilt. Das Labor hat genau ein Zielbild: [`zielbild/punkte.json`](../../zielbild/punkte.json),
mit Strängen als Dimension. Ein Werk baut seines mit demselben Werkzeug in seinem eigenen Repo. Warum die Seite so aussieht:
[Bausteine](../../research/2026-11-zielbild-bausteine/befund.md).

## Benutzen

Aus einem Klon des Labors, Node 18 oder neuer, ohne weitere Pakete:

```bash
node tools/zielbild.mjs pfad/zu/punkte.json                 # schreibt index.html daneben
node tools/zielbild.mjs pfad/zu/punkte.json --aus seite.html
node tools/zielbild.mjs pfad/zu/punkte.json --check         # nur prüfen, nichts schreiben
```

Ein Werk in `esany/werke` braucht nur seine `punkte.json`; die Seite entsteht mit dem Werkzeug aus
dem Labor. Inhalte des Werks kommen dabei nicht ins Labor. Prüffälle: `node tools/zielbild-test.mjs`.
Beispiel: [`tools/fixtures/zielbild/beispiel.json`](../fixtures/zielbild/beispiel.json).

## Daten

Kopf:

| Feld | Pflicht | Bedeutung |
|---|---|---|
| `titel` | ja | Überschrift der Seite, z. B. „Zielbild Beispielwerk“ |
| `ort` | ja | Zeile darüber, z. B. „werke · Beispielwerk“ |
| `schluessel` | ja | klein-mit-bindestrich; hält die Markierungen im Browser je Seite und Iteration getrennt |
| `iteration` | ja | ganze Zahl; steigt mit jeder Fassung, die der Mensch prüft |
| `stand` | ja | Datum JJJJ-MM-TT |
| `rueckmeldung` | nein | Datum der letzten Rückmeldung, frei, z. B. „11.11.“ |
| `von` | nein | wer verstanden hat; Vorgabe „Claude“ |
| `hinweis` | nein | Notiz für die Pflege, wird nicht angezeigt |
| `repo` | nein | `besitzer/name` des Repos, in dem die Daten liegen (im Labor `esany/design-lab`). Dann werden Pfade, Entscheidungen und Issue-Nummern in Erläuterung und Grundlage zu Links, aber nur auf Dateien, die es gibt. |
| `straenge` | nein | Liste von Strängen: `id`, `name`, `iteration` (je Strang), `rueckmeldung`. Das Labor-Zielbild braucht sie; ohne sie ist die ganze Seite ein Strang (Werke). |
| `teile` | ja | Liste von Teilen: `teil` (Überschrift), `strang` (mit `straenge` Pflicht) und `punkte` |
| `archiviert` | nein | nur im Labor: `am`, `nach`, `strang`, `grund`. Der Build erzeugt dann statt der Seite einen Hinweis auf das eine Zielbild. |

Punkt:

| Feld | Bedeutung |
|---|---|
| `id` | Kennung, klein-mit-bindestrich, eindeutig |
| `s` | Status: `bestaetigt` (vom Menschen gesagt) · `ableitung` · `vorschlag` · `befund` · `offen` (Frage an den Menschen) · `freigabe` · `impuls` (Eingang) · `auftrag` |
| `t` | der Satz, immer sichtbar |
| `k` | Erläuterung, darunter |
| `g` | Grundlage, aufklappbar („Worauf das beruht“) |
| `n` | Änderung seit der letzten Fassung: `neu` · `geändert` · `ergänzt` |
| `v` | der Satz vorher (nur mit `n`) |
| `f` | Rückmeldung des Menschen im Wortlaut (nur mit `n`) |
| `bestaetigt` | Datum der Bestätigung; nicht zusammen mit `n` |
| `prio` | Vorschlag zur Priorität: `jetzt` · `später` · `parken`; bei `impuls` Pflicht. Der Eigentümer setzt seine auf der Seite. |
| `stand` | bei `auftrag`: `vorbereitet` · `startklar` · `freigegeben` · `läuft` · `fertig` |
| `wer` | bei `auftrag`: wer ihn ausführt |
| `stuetzt` | Kennungen der Punkte, auf denen dieser beruht, auch über Stränge hinweg; bei `auftrag` Pflicht, `startklar` nur, wenn alle bestätigt sind. Die Seite zeigt beide Richtungen („Beruht auf“, „Trägt“). |
| `auch` | Schnittstelle: weitere Stränge, in denen derselbe Punkt erscheint, mit demselben Stand und derselben Rückmeldung |
| `dran` | wer jetzt handeln muss: `du` (der Eigentümer), ein Name oder leer. Ohne das Feld abgeleitet: offene Frage, Freigabe, Eingang und startklarer Auftrag → du; laufender Auftrag → `wer`; sonst niemand. Eine Korrektur („muss besser“) macht nicht den Eigentümer zuständig. |
| `frage` | nur im Labor: Kennung einer Frage in `daten/<thema>.json`; der Build holt Wortlaut und Antwort von dort, `t` bleibt leer |
| `offen` | bei `auftrag`: was bewusst offen bleibt |

## Die Seite

Drei Ansichten derselben Punkte: **Du bist dran** (Entscheidungen des Eigentümers nach Priorität, darunter
was sich seit seiner Rückmeldung geändert hat), **Stand** (je Strang: dran, läuft, offen gedacht,
Schnittstellen, gilt, erledigt) und **Alles** (Filter nach Strang und Art). Ein Urteil gilt für den
Punkt, nicht für die Ansicht. Ein Querverweis auf einen ausgeblendeten Punkt springt in „Alles“.

Farbe trägt Bedeutung: Signalrot nur „du bist dran“, Grün nur „von dir bestätigt“, Ocker nur
„Vorschlag oder Hypothese“; Befund, Änderung und Zahlen in Grundfarbe und Form. Die Werte kommen als
Rollen aus den Tokens; `tools/farbrollen.mjs` prüft im Build, dass die Vorlage sie nur so nutzt.

## Was der Generator prüft

Pflichtfelder, Kennungen (eindeutig über alle Stränge), erlaubte Werte, `v` und `f` nur mit `n`, keine
Bestätigung bei Änderung, Stränge und Schnittstellen nur zu bekannten Strängen, Verbindungen nur zu
bekannten Punkten, Aufträge mit `wer`, `stuetzt` und gültigem Stand, „startklar“ nur auf Bestätigtem. Farben und
Schriften kommen aus `system/tokens/lab.tokens.json`; Text aus den Daten wird maskiert.

Bei Punkten, bei denen der Eigentümer dran ist, zusätzlich das Grundmodell aus `AGENTS.md` („mit Kontext, in
Namen statt Nummern, jede Zahl mit ihrem Bezug“; Rückmeldung 14.11.): Der Kontext `k` ist Pflicht; Satz und
Kontext nennen Issue-, Entscheidungs- und Kürzelnummern nur in Klammern hinter dem Namen; kein „siehe Chat“
statt Inhalt. Grenze: Die Prüfung erkennt Nummern, nicht ob der Kontext genügt; das prüft der Prüffall
`evals/verhalten-zahlbezug`.

„Stand gegen GitHub“ (`tools/stand-github.mjs`) prüft außerdem: Was ein Punkt im Satz als offen vorlegt (bei dir
dran oder Auftrag nicht fertig), muss auf GitHub offen sein. Kontext und Herkunft dürfen auf Abgeschlossenes
verweisen. Grenze: Antworten, die nur in einem anderen Punkt stehen, findet keine Prüfung; dafür gilt beim
Fortschreiben, jede Frage gegen die bestätigten Punkte zu lesen.
