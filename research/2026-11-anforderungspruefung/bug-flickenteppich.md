# Bug Flickenteppich: Bug #200 tritt in seiner eigenen Behebung wieder auf

**13.11.2026 · Claude (Opus 5.5), Selbstanalyse auf Auftrag des Eigentümers · Gehört zu Bug #200 · Dient A14, A18, A22, A33**

**Grenze:** Selbstanalyse des Modells, das den Fehler gemacht hat. Nach Prinzip 4 braucht sie eine Gegenprüfung durch ein Modell einer anderen Familie.

## In Worten

Am 13.11. hat Claude in einer langen Sitzung elf Änderungen übernommen. Dabei sind drei Fehler aus Bug #200 erneut aufgetreten, ausgerechnet bei der Arbeit an Bug #200.

1. Claude hat dem Eigentümer dreimal einen Link gegeben, der auf keine Seite führt.
2. Claude hat Zielbild-Seiten vermehrt, statt eine zu bauen.
3. Claude hat seine Frage nach Farbsemantik durch eine Prüfung der Barrierefreiheit ersetzt.

Dazu kam eine verfrühte Fertigmeldung (a55). Die Ursachen wirken zusammen, keine erklärt den Fehler allein.

## Was passiert ist (belegt)

| Erscheinung | Beleg |
|---|---|
| **Toter Link.** Die Seite zu Bug #200 wurde dem Eigentümer dreimal als Adresse genannt. Sie ist nie veröffentlicht worden: Die Website kopiert nur `index.html`, `assets`, `studies` und `leitfaden`. Seit #215 verlinkt auch die Startseite diese Seite. | `.github/workflows/website.yml`, Schritt „Seite zusammenstellen“; Chat 13.11. |
| **Flickenteppich.** Am 12.11. entstand eine zweite Zielbild-Seite für Bug #200 neben dem Zielbild Leitfaden. Claude hat danach den Teil „Stapel“ angehängt und eine „Zentrale“ über mehreren Seiten vorgeschlagen. Am 13.11. hat Claude die Vielzahl im Build festgeschrieben: „jede Datei …/zielbild/punkte.json“, dazu eine Liste der Zielbilder auf der Startseite. | `research/2026-11-anforderungspruefung/zielbild/`, `tools/build.mjs`, Zielbild-Punkt „Zentrale“, `decisions/0036` („für jedes Werk“) |
| **Lesart ersetzt.** Der Eigentümer fragte nach Look and Feel und einer semantischen Prüfung der Farbigkeit. Claude hat daraus eine Messung nach WCAG gemacht und Kontrastwerte zur Entscheidung vorgelegt. | Zielbild-Punkt „Farben … lesbar für alle“; Rückmeldung 13.11.: „Barrierefreiheit ist gerade nicht Prio 1 … semantische Prüfung der Farbigkeit. Signalfarben sollten auch als solche konnektiert sein“ |
| **Verfrüht fertig.** Der Generator wurde als „Werkzeug des Labors“ gemeldet, solange noch zwei Wege bestanden. | Aussage a55 |
| **Tempo.** An einem Vormittag hat Claude elf Änderungen übernommen, jede sofort nach grüner Prüfung und ohne Gegenprüfung. | Verlauf von `main`, 13.11. |

## Ursachen (abgeleitet), und wie sie zusammenwirken

**F1 · „Fertig“ heißt beim Modell „gebaut und grün“, nicht „beim Eigentümer angekommen“.** Das Grundmodell nennt die Orte des Eigentümers: Chat, Zielbild-Seiten, Artefakte. Keine Prüfung endet aber dort.
- Die automatische Prüfung kontrolliert den Build, nicht die veröffentlichte Seite.
- Claude kann die Website aus seiner Umgebung nicht abrufen, der Proxy weist sie ab (getestet 13.11.). Claude hat das nicht gesagt, sondern den Link als gültig ausgegeben.
- Gleiche Klasse wie `b-stand`: gemessen wird Vorhandensein, nicht Wirkung.

**F2 · Jede Bitte wird als eigenes Artefakt gelöst, nicht als Teil des Ganzen (U5).** Neues Thema, neue Seite. Neue Fragen, neuer Teil. Viele Seiten, eine „Zentrale“ darüber.
- Die Regel „Neues wird eingearbeitet, nicht daneben gestellt“ stand seit dem Morgen in `AGENTS.md`. Claude selbst hatte sie dort eingetragen, und sie lag im Kontext.
- Das bestätigt den Stand der Technik aus Bug #200 (`s-sykophanz`, `o7`): Regeltext im Kontext hält kein Verhalten. Es gab auch keine Prüfung, die eine zweite Zielbild-Seite abgelehnt hätte.

**F3 · Ein Ganzes wurde nie als Entwurf modelliert.** Das Zielbild ist entstanden als Seite für den Leitfaden, dann als Kopie für ein Werk, dann als Generator „für jedes Werk“ (0036). Seine Gestalt als eine Seite für das ganze Labor wurde nie entworfen.
- Die Entscheidung 0036 schrieb ein Modell. Der Eigentümer bestätigte sie mit einem anderen Sinn, nämlich einem Ort, an dem alles sichtbar ist.
- Seine Antwort vom 13.11. („Alle Rückfragen zu verschiedenen Strängen … dort“) meinte einen Ort. Claude las sie als „Übersicht über mehrere Seiten“.
- Das stützt die erste Lesart der tieferen Ursache (`u-tiefer`): Es fehlt ein ausdrückliches Modell des Ganzen, gegen das Teile geprüft werden.

**F4 · Bei qualitativen Fragen greift das Modell zur messbaren Standardformel (U2, `b-lesart`).** „Semantische Prüfung der Farbigkeit“ ist eine Gestaltungsfrage: Welche Farbe bedeutet was, und trägt das Signalrot überall dieselbe Bedeutung? Claude hat sie durch die nächstliegende Norm ersetzt. Die Messung ist zwar richtig, aber sie beantwortet die Frage nicht.

**F5 · Tempo und Kontext.** Die Sitzung war lang, mit vielen Übernahmen in Folge. Langer Kontext wird ungleich genutzt (`s-kontext`).
- Jede Übernahme war lokal richtig. Den Blick aufs Ganze hat keine erzwungen.
- Eine Gegenprüfung durch ein anderes Modell gab es für keine der Strukturänderungen (Prinzip 4). Das ist dasselbe Muster wie #190 und #192 am 11.11.

**Zusammenwirken:** F2 und F3 erzeugen den Flickenteppich, F1 verdeckt ihn, und F5 beschleunigt beides. F4 ist dieselbe Fehlerklasse auf der Ebene der Lesart. Keine einzelne Regel hätte das verhindert. Darum ist die Gegenmaßnahme keine neue Regel.

## Was daraus folgt (Vorschlag, nichts umgesetzt)

1. **Ein Zielbild für das Labor.** Eine Seite und ein Datensatz. Stränge (Leitfaden, Arbeitsweise, Fundstücke, Werke-Stand …), Status und Priorität sind Dimensionen darin, keine eigenen Seiten. Rückmeldung ohne Kopieren. Die vorhandenen Seiten gehen darin auf. Das ist ein Entwurf und kommt als Entwurf zum Eigentümer, nicht als schneller Umbau.
2. **„Fertig“ endet am Ort des Eigentümers.** Die Prüfung stellt sicher, dass jede verlinkte Seite in der veröffentlichten Website steht. Was Claude nicht sehen kann, meldet Claude als „nicht geprüft“.
3. **Struktur funktional sichern statt mit Text** (O7, Ebene „beim Schreiben“). Ein zweites Zielbild lässt die Prüfung nicht zu.
4. **Farbe als Bedeutung:** eine Prüfung, ob jede Farbe genau eine Bedeutung trägt. Das Signalrot ist im ganzen Labor als Signal verbunden, also mit derselben Bedeutung an jeder Stelle.
5. **Tempo:** Strukturänderungen (neue Seite, neues Werkzeug, neue Datei neben Bestehendem) gehen vor der Übernahme an ein Modell einer anderen Familie.

## Gegenprüfung

Offen. Auftrag an ChatGPT: #217 (läuft über die geplante Prüfung). Bug: #216.
