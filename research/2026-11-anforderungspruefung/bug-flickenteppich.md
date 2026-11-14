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

## Wiederauftreten am 14.11. im Werk-Chat (Claude, Opus 5.5)

**Anlass:** Der Eigentümer im Werk-Chat, 14.11.: „hier scheint generell etwas schief oder nicht eindeutig zu laufen .. das sind Symptome von schwerwiegenden Fehlern“. Werkinhalte stehen nur im Werke-Repo; hier nur die Mechanik.

**In Worten:** Ein Werk-Chat ist gestartet, hat den Stand gelesen und hat in der ersten Antwort einen falschen Link genannt. Die Ursache war nicht Unachtsamkeit allein. Während der Sitzung haben andere Sitzungen die Regeln, die Adressen und die Kennungen geändert. Das Werk hängt an Teilen des Labors, die sich ohne Ankündigung ändern. F1 bis F3 wirken weiter, und vier neue Ursachen kommen dazu.

### Was passiert ist (belegt)

| Erscheinung | Beleg |
|---|---|
| **Falsches Zielbild.** Der Werk-Chat hat in seiner ersten Antwort den Link zum Zielbild des Labors genannt, nicht den zum Zielbild des Werks. | Aussage arbeitsweise-a78; Regel `AGENTS.md`, Grundmodell, „Was zu ihm geht“ |
| **Toter Link, zum zweiten Mal (F1).** Die genannte Adresse `esany.github.io/design-lab/zielbild/` wird seit #295 nicht mehr ausgeliefert. `stand.md` nennt sie weiter. Keine Prüfung meldet das, denn „Interne Links“ prüft keine absoluten Adressen. Claude kann die Seite nicht abrufen (F1) und hat das nicht gesagt. | `tools/website.mjs`, Zeile 17 (`NICHT … zielbild`); `stand.md`, Zeile 23; Verlauf `2026-11-14-zielbild-nicht-oeffentlich.md` |
| **Regeln ändern sich während der Sitzung.** `AGENTS.md` hat sich am 14.11. zweimal geändert, beide Male in der Link-Regel (13:26 und 14:12). Das Ziel des Links ist dabei von der öffentlichen Seite zum privaten Arbeitsplatz gewechselt. Was zu Beginn gelesen wurde, galt wenige Minuten später nicht mehr. | `git log -- AGENTS.md`, 14.11. |
| **Gleichzeitige Schreiber.** Am Nachmittag des 14.11. haben mindestens zwei Claude-Sitzungen parallel auf `main` übernommen. Dazu kommen ChatGPT mit zehn offenen Pull Requests, der geplante Orchestrierungslauf und der Neustart-Test. | Commit-Trailer `Claude-Session` (zwei verschiedene Sitzungen); offene PRs #256 bis #288 |
| **Kennungen kollidieren.** Die nächste freie Nummer in `daten/arbeitsweise.json` war innerhalb von 15 Minuten zweimal vergeben (a76, a77), jeweils von einer anderen Sitzung. Der Eingang musste zweimal neu gebaut werden. | PR #294, Verlauf der Pushes |
| **`main` rot durch eine fremde Übernahme.** Die Übernahme von #257 hat #237 geschlossen. Das Zielbild führte #237 noch als offen, also war „Stand gegen GitHub“ auf `main` rot, und alle Pull Requests waren gesperrt, bis eine andere Sitzung nachzog. Grund: Die Prüfung läuft vor der Übernahme, das Schließen geschieht erst bei ihr. | Check-Runs auf `main` vor und nach `f0bb42d`; Issue #237, geschlossen 14:29:04, PR #257, übernommen 14:29:01 |
| **Übernahme gesperrt nach dem Bot-Commit.** Erzeugt „Übersichten erzeugen“ etwas neu, legt der Bot einen Commit auf den Branch und startet die Prüfung über `workflow_dispatch` neu. Dieser Lauf ist grün, die Regel für `main` erwartet die fünf Pflichtprüfungen aber vom Lauf `pull_request`, und der steht auf „action_required“. Der Pull Request bleibt gesperrt („5 of 5 required status checks are expected“), bis jemand erneut pusht. | `.github/workflows/pruefen.yml`, Schritt „Neu erzeugen …“; PR #294, Läufe 43608258153 und 43608252228 |
| **Werkseite hängt am Stand des Labors.** Die private Seite eines Werks wird bei jedem Build mit dem Generator von `main` des Labors erzeugt. Die Daten des Werks sagen dagegen: eigener Build, bis der Eigentümer Ja sagt. Ändert das Labor den Generator, ändert sich die Werkseite ohne eine Iteration des Werks. | Werke-Repo `seiten.sh` (klont `design-lab` und ruft `tools/zielbild.mjs` auf); Werk-Zielbild, Auftrag „Generator“ |
| **Vier Startwege.** Ein Werk-Chat startet über die Projektanweisung, `AGENTS.md` des Labors, `AGENTS.md` der Werke und die Startdatei des Werks. Die Startdatei verweist noch auf `leitfaden/zielbild/` und nennt eine eigene Pflichtliste. | Startdatei des Werks, Abschnitt „Was der Werk-Chat … braucht“; `stand.md`, Thema Arbeitsweise („Leitfaden … archiviert“) |
| **Das Werk wartet ohne Termin.** Die Rückmeldung zum Werk-Zielbild ist als drei Bugs ans Labor gegangen (#280–#282), und das Werk wendet nur an. Laut `stand.md` stehen die Bugs „zuerst“. Am Nachmittag hat das Labor aber an anderem gearbeitet (Arbeitsplatz, Iteration 2). | `stand.md`, Thema Arbeitsweise; Verlauf `main` 14:37–14:42 |

### Neue Ursachen (abgeleitet), und wie sie zusammenwirken

**F6 · Mehrere Schreiber, kein Takt.** Das Grundmodell spricht von „dem orchestrierenden Modell“, also von einem. Tatsächlich schreiben mehrere Sitzungen gleichzeitig auf denselben Stand, und keine weiß von der anderen. Jede liest zu Beginn einen Stand, der während ihrer Arbeit veraltet. Folgen: Kollisionen bei Kennungen, rote Prüfungen nach fremden Übernahmen, Regeln, die sich mitten in der Sitzung ändern. Dazu kommt ein Fehler in der Prüfkette selbst: Der Neustart nach dem Bot-Commit zählt nicht als Pflichtprüfung. Jeder Pull Request, an dem der Bot etwas nachzieht, bleibt ohne weiteren Push gesperrt. Auch das kostet Zeit, und in dieser Zeit veraltet der Stand.

**F7 · Tatsachen als Wortlaut an vielen Orten.** Adressen und Pfade stehen als Text in `AGENTS.md`, `stand.md`, Merkzetteln, Aussagen, im README der Werke und in Startdateien. Ändert sich eine Adresse, wird sie an einem Ort berichtigt, an den anderen nicht. Das verletzt die eigene Regel aus dem Leitfaden: Halte jede Tatsache an einem Ort und erzeuge die Ansichten daraus. Tote Links (F1) sind die sichtbare Folge.

**F8 · „Das Zielbild“ ist mehrdeutig (Informationsarchitektur, #282).** Seit dem 14.11. gibt es ein Zielbild des Labors (privat und früher öffentlich) und je Werk ein Zielbild. Regeln und Texte des Labors sagen „das Zielbild“ und meinen das des Labors. Aus Sicht eines Werks ist das falsch. Das Verhältnis von Labor und Werk ist nicht als Ganzes entworfen (F3 auf der nächsten Ebene).

**F9 · Kopplung ohne Vertrag.** Das Werk nutzt Werkzeug und Regeln des Labors immer auf dem neuesten Stand, ohne festgelegte Fassung und ohne Rückweg. Das Labor ändert sie, ohne zu prüfen, was im Werk davon abhängt. Bugs, die ein Werk blockieren, tragen weder Vorrang noch Termin.

**Zusammenwirken:** F6 macht jeden Stand flüchtig, und F7 verteilt jede Änderung auf viele Orte. Zusammen erzeugen sie veraltete und tote Verweise, schneller als eine Sitzung sie bemerkt. F8 macht Regeln mehrdeutig, sobald man sie aus einem Werk liest. F9 lässt Änderungen des Labors ungeprüft ins Werk durchschlagen und Werkfragen im Labor liegen. Jede einzelne Sitzung handelt dabei lokal richtig, so wie in F5. Eine weitere Textregel hilft auch hier nicht. Es braucht Struktur.

### Was die Behebung möglich macht (Vorschlag; Entscheidungen beim Eigentümer)

1. **Ein Takt für Schreiber (F6):** Es schreibt immer nur eine Sitzung auf `main`. Andere arbeiten auf Branches und geben ab. Technisch dazu: Kennungen, die nicht kollidieren können, also Datum und Kurzname statt einer laufenden Nummer, und eine Prüfung auf doppelte Kennungen. Außerdem muss die Prüfkette nach einem Bot-Commit wieder übernehmbar sein, zum Beispiel weil der Bot mit einem Schlüssel pusht, der `pull_request` auslöst, oder weil die Regel auch `workflow_dispatch` anerkennt. Das betrifft Sicherheit und Konten, ist also eine Frage an den Eigentümer.
2. **Orte an einem Ort (F7):** Adressen und Pfade, die der Eigentümer bekommt, stehen in einer einzigen Datei. Alle Texte nennen sie nur beim Namen. Eine Prüfung meldet jede ausgeschriebene Adresse außerhalb dieser Datei und jede Adresse, die nicht mehr ausgeliefert wird.
3. **Zielbilder unterscheiden (F8, in #282):** Jede Regel sagt, welches Zielbild sie meint. Die Link-Regel ist als Frage arbeitsweise-f70 gestellt.
4. **Vertrag zwischen Labor und Werk (F9):** Ein Werk nutzt eine bestimmte Fassung des Generators, und das Labor kündigt Änderungen an. Bugs, die ein Werk blockieren, tragen Vorrang und den Namen des Werks.
5. **Ein Startweg je Werk:** Die Startdatei des Werks verweist nur noch auf den Start des Labors und auf ihr eigenes Zielbild, ohne eigene Pflichtliste und ohne Pfade des Labors.

**Sofort behoben (Fehler, keine neue Regel):** In `stand.md` steht statt der toten Adresse die Adresse des Arbeitsplatzes, die `AGENTS.md` heute nennt.

**Grenze:** Auch das ist eine Selbstanalyse. Eine Gegenprüfung durch ein Modell einer anderen Familie steht noch aus (Prinzip 4).
