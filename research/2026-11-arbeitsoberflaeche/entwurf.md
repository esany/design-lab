---
dient: A01, A04, A14, A18, A22
datum: 2026-11-14
status: Entwurfsgrundlage, Iteration 3 der Arbeitsoberfläche; nichts gebaut
---

# Entwurfsgrundlage: der Arbeitsplatz des Eigentümers

**Herkunft:** Auftrag des Eigentümers im Chat vom 14.11.2026 [a81]: „Du sollst von mir und meiner Erkenntnislücke ausgehen … Kurz mach doch einfach mal Entwurfsarbeit … Bevor wir hier nicht weiter kommen, müssen wir die Seite nicht umbauen.“ Er verwarf die Varianten A bis C aus Iteration 2 ([Analyse](analyse.md), Abschnitt „Iteration 2“) als fragmentarisch: Sie ordneten Seiten, ohne von seinen Situationen und Aufgaben auszugehen.

**Lesart:** Gegenstand ist nicht eine Seite, sondern die Stelle, an der der Eigentümer die Arbeit mit den Modellen trifft: entscheiden, prüfen, verstehen, zurückmelden. Ich leite die Gestaltung in einer Kette ab: Mensch → Situationen → Aufgaben → Informationen → Anforderungen → Relationen → Ansichten → Pfade → visuelle Abbildung. Jede Stufe nennt ihre Herkunft.

**Schreibweise:** `[a65]` heißt: gesicherte Aussage des Eigentümers in `daten/arbeitsweise.json`. `[ao-…]`, `[st-…]` und ähnliche sind Punkte im Zielbild des Labors. `[R1 §n]` ist die übernommene [Recherche zu Interaktion und Struktur](recherche-muster.md). **Hypothese** steht ausdrücklich dabei, wo ich ableite und nichts belegt ist.

---

## 1 · Der Mensch

**Wer (belegt, Grundmodell in `AGENTS.md`):** Kunde, strategischer Konzepter und Gestalter in einer Person. Er verwaltet keine Technik, sieht keine Pull Requests und Issues [nk-orte] und ist Product Owner; die Orchestrierung liegt beim Modell [ao-transparenz].

**Zwei Rollen, eine Person (abgeleitet aus Intent und Leitbild):**
- *Product Owner des Labors:* Er entwickelt den Organismus, in dem jede Idee, jeder Fehler, jeder Wunsch als Eingang umgesetzt wird (Intent, Leitbild 29.10.).
- *Gestalter in Werken:* Er will fachliche Assistenz in seinen Projekten, auch dort, wo er nicht Experte ist (Intent, Leitbild).

**Ziele:**
| Ziel | Herkunft |
|---|---|
| Die Systementwicklung des Labors so schnell wie möglich voranbringen | [a65], [ao-reihenfolge] |
| Gut statt fertig | Merkzettel Arbeitsweise, Maßstab |
| Gestalten und den Stand gemeinsam durchgehen, nicht Technik bedienen | Intent; Entscheidung 0019 („kein Meat-Proxy“) |
| Die Modelle prüfen und bewerten können, ohne selbst zu orchestrieren | [ao-transparenz] |
| Domänenwissen aufbauen und nutzen, ohne dort technisch urteilen zu müssen | Intent, Leitbild |

**Bedürfnisse** (aus seinen Aussagen; [a46], [a47], [a01], [a06] sind in den Daten als abgeleitet geführt): Bedeutung statt Zahlen und Nummern [a72]; Herkunft am Satz [a46]; Hypothese sichtbar getrennt vom Beleg [a47]; sehen und ausprobieren statt lesen [a01], [a06]; Rückmeldung ohne Kopieren [st-rueckweg]; vom Handy aus gedacht, auf jedem Gerät nutzbar [a70]; wenig Aufwand, denn sein Kontingent ist knapp (Grundmodell).

**Schmerzpunkte (belegt):**
- Veraltete oder schon beantwortete Fragen [a71].
- Zahlen ohne Bezug [a43], [a72].
- Seiten neben Seiten statt eines Ganzen [a57]; Anforderungen angehängt statt eingearbeitet [a63].
- Widersprüche gleichrangig nebeneinander statt der einen Frage, die er entscheiden muss [a28].
- Aktionismus ohne Blick auf den bestätigten Plan [a68].
- Regeln statt Gestaltungsurteil [a67].
- Er sah nicht, ob seine Rückmeldung angekommen war, und schickte sie zweimal [a74].

### Was er weiß und was nicht: die Erkenntnislücke

| Er weiß | Er weiß nicht (strukturell, weil es außerhalb seines Blicks geschieht) |
|---|---|
| Seine Absicht, seine Maßstäbe und Prinzipien | Was seit seinem letzten Blick passiert ist |
| Gestaltung, Wahrnehmung, Vermittlung (seine Domäne) | Was davon sein Urteil braucht und was nicht |
| Den Kontext seiner Werke und Kunden | Worauf eine Entscheidung einzahlt und was sie auslöst |
| Was er gesagt hat | Ob es angekommen ist und was daraus wurde |
| | Ob die Modelle seine Prinzipien einhalten [a73] |
| | Wie belastbar eine Aussage ist (belegt, abgeleitet, Vermutung) |
| | Was blockiert ist, woran, und wer dran ist |

**Die Kernlücke (abgeleitet):** *Wo steht die Arbeit, gemessen an meiner Absicht, und wo braucht sie jetzt mein Urteil?* Alles, was die Oberfläche zeigt, muss diese Frage beantworten helfen. Was dazu nichts beiträgt, gehört nicht nach vorn [ao-einfacher].

## 2 · Situationen: wann und warum er hinschaut

Die Situationen sind **Hypothesen** aus seinen Aussagen. Bestätigen kann nur er, darum stehen sie unter „Was ich von dir brauche“ (Abschnitt 9).

| | Situation | Auslöser | Frage im Kopf | Zeit, Gerät |
|---|---|---|---|---|
| S1 | **Zwischendurch entscheiden** | Meldung des geplanten Orchestrierungslaufs (7:34 und 19:34 Uhr, `stand.md`) oder eigener Impuls | „Braucht mich etwas? Was zuerst?“ | Minuten, oft Handy [a70] |
| S2 | **Nachsehen, ob es angekommen ist** | nach einer Rückmeldung oder einem Chat | „Ist umgesetzt, was ich gesagt habe? Stimmt es?“ | kurz [a74] |
| S3 | **Im Werk gestalterisch urteilen** | eine Frage im Werk, Varianten liegen vor | „Was ist der Stand des Werks, was soll ich wählen, worauf beruht der Vorschlag?“ | länger, mit Bildern [a52], [a54] |
| S4 | **Prüfen, ob das System trägt** | Unbehagen, Stichprobe, eine Auffälligkeit | „Halten sich die Modelle an meine Prinzipien? Stimmt diese Aussage?“ | länger [a73], [ao-tiefe] |
| S5 | **Das Ganze erkunden** | Ruhe, Planung, ein neuer Gedanke | „Wie hängt das zusammen, wohin entwickelt sich das Labor?“ | lang [ao-ganzes] |

**Neue Wünsche gibt er im Chat** (Grundmodell, „Wo“). Auf der Oberfläche sieht er nur, wo sie gelandet sind. Darum ist „Auftrag anlegen“ keine Aufgabe der Oberfläche (abgeleitet).

## 3 · Aufgaben und Informationen

| Aufgabe | In Situation | Was er dafür wissen muss | Was er danach braucht |
|---|---|---|---|
| **Entscheiden** (freigeben, wählen, beantworten, priorisieren) | S1, S3 | Gegenstand in einem Satz; warum jetzt; was zur Wahl steht, *gezeigt* [a52]; Empfehlung mit Grund [a35]; worauf es einzahlt und was danach möglich wird [a65]; was passiert, wenn er nichts tut (R1 §8); wie sicher die Grundlage ist [a47] | Bestätigung, dass es ankommt, und was jetzt passiert (Selbstwirksamkeit, Bug „Bei offenen Fragen ist unklar, was zu tun ist“) |
| **Prüfen und berichtigen** | S2, S4 | Was er gesagt hat (Wortlaut); was daraus wurde (vorher, jetzt) [wandel-sichtbar]; wer es getan hat; Beleg und Prüfung [ao-rechenschaft] | Ein Weg, „stimmt nicht“ zu sagen, ohne zu kopieren [st-rueckweg] |
| **Verstehen, was läuft** | S1, S4 | Wer woran arbeitet, was blockiert ist und woran, was als Nächstes kommt [ao-transparenz] | Nichts tun müssen; Stichprobe auf Wunsch [ao-tiefe] |
| **Erkunden** | S5 | Alles, was gilt, läuft und offen ist, nach Strängen, Werken, Status; Zusammenhänge mit Methode [ao-methodisch] | Den Weg zurück zu dem, was ihn braucht |

## 4 · Anforderungen: global und konkret

**Global (an das System, gelten für jede Oberfläche des Labors):**

| | Anforderung | Herkunft |
|---|---|---|
| G1 | Was er sieht, folgt dem Stand im Repo, ohne Kopie und ohne Verzug. | [a71], [a74] |
| G2 | Eine Quelle, viele Sichten. Keine Sicht erzeugt eine eigene Wahrheit. | [st-zentrale], R1 §3 |
| G3 | Gleiche Funktion, gleiche Form. Labor und Werke sind Fälle derselben Sache. | [a77] |
| G4 | Bedeutung statt Nummern; jede Zahl mit Bezug; aktive Verweise. | [a72], [a43] |
| G5 | Status und Herkunft an jeder Aussage; Hypothese getrennt vom Beleg. | [a46], [a47] |
| G6 | **Voraussetzungen und Blocker sind Daten,** nicht Text: Jeder Auftrag und jede Frage nennt, was vorher erledigt sein muss. Fragen an ihn kommen erst, wenn sie entscheidbar sind. | [a82]; Folge von [a71] |
| G7 | Die Orchestrierung liegt beim Modell; die Oberfläche zeigt sie, sie verlangt sie nicht von ihm. | [ao-transparenz] |
| G8 | Privat: Zielbilder sind sein Arbeitsplatz, nicht öffentlich. | [a77] |
| G9 | Was ihn betrifft, nennt das Zielbild, um das es geht, nicht ein festes. | [a78] |

**Konkret (an den Arbeitsplatz als Entwurfsgegenstand):**

| | Anforderung | Herkunft |
|---|---|---|
| K1 | Einstieg ist, was ihn braucht, nach Priorität, mit Einzahlung und Folge. | [ao-reihenfolge] |
| K2 | Entscheiden eins nach dem anderen. | [ao-einzeln] |
| K3 | Tiefe auf Abruf: ein Satz, dann Warum, dann Hintergrund und Quellen; Prüftiefe in Stufen. | [ao-progressiv], [stufen-anzeige], [ao-tiefe] |
| K4 | Was sich seit seinem letzten Blick geändert hat, vor allem aus seinen Rückmeldungen. | [wandel-sichtbar] (abgeleitet), [a74]; Muster „Ereignis statt Kachel“, R1 §3 |
| K5 | Laufendes mit Zuständigkeit, Blocker und nächstem Schritt, ohne dass er etwas tun muss; dazu, wie die Stränge zusammenhängen. | [ao-transparenz], [ao-reihenfolge], [ao-rechenschaft] (abgeleitet) |
| K6 | Das Ganze zum Erkunden, mit Tags und Filtern. | [ao-ganzes], [tags-navigieren] (abgeleitet) |
| K7 | Vom Handy aus gedacht, auf jedem Gerät nutzbar; Situationen statt Geräte. | [a70]; [ao-situationen] (abgeleitet) |
| K8 | Farbe als Bedeutung im Zusammenspiel mit Form, Ort und Menge. | [st-farbe], [a67] |
| K9 | Systemfragen und Werkfragen unterscheidbar, ohne sie verschieden zu behandeln. | Bug „Zielbild ohne Informationsarchitektur“; [a77] |
| K10 | Verwaltung steht nie unter „Du bist dran“. | [a63]; Grundmodell, „Was zu ihm geht“ |

## 5 · Wie es zusammenhängt

**Synergien (abgeleitet):**
- **G6 trägt K1, K5 und S1.** Dieselben Daten beantworten drei Fragen: Was als Voraussetzung woran hängt, sagt dem Orchestrator, was bereit ist, sagt dem Eigentümer, worauf seine Entscheidung einzahlt und was sie freigibt, und zeigt in „Stand“, was blockiert ist. Eine Relation dient Orchestrierung und Oberfläche zugleich.
- **Senden trägt K4.** Jede gesendete Rückmeldung hat ein Datum. Damit weiß das System, wann er zuletzt geschaut hat, und kann zeigen, was seitdem aus seinen Worten wurde.
- **G3 und K9 zusammen** heißen: eine Form für alle Zielbilder, Herkunft (Labor oder Werk) als Merkmal und Filter. Das löst den Widerspruch, den er benannt hat: gleich behandelt und trotzdem unterscheidbar.
- **K2 und K3:** Wer eins nach dem anderen entscheidet, braucht die Tiefe genau dieses einen Punkts auf Abruf, nicht die Tiefe aller.

**Spannungen und ihre Auflösung:**
| Spannung | Stand |
|---|---|
| Begrenzte Sicht gegen großes Ganzes | entschieden durch die Reihenfolge [ao-reihenfolge] |
| Transparenz gegen „nicht machen müssen“ | entschieden durch Prüftiefe in Stufen [ao-tiefe] |
| Gleich behandelt gegen unterscheidbar (G3, K9) | **Hypothese:** eine Form, Herkunft als Merkmal |
| Eine Entscheidung nach der anderen gegen den Überblick, welche zuerst | **Hypothese:** Reihenfolge nach Hebel (wie viel sie freigibt), sichtbar als Liste vor dem Einstieg |

**Abhängigkeiten (was vor was kommen muss):**
1. *Nutzermodell und Situationen bestätigt* (Abschnitte 1, 2) → erst dann den Inhalt der drei bestätigten Ansichten festlegen.
2. *Voraussetzungen als Daten (G6)* → erst dann „worauf es einzahlt“ (K1) und Blocker in „Stand“ (K5).
3. *Prioritätsvorschlag durch den Orchestrator an jeder Frage* [a62] → erst dann Ordnung nach Priorität.
4. *Ein Datensatz über Labor und Werke an einem privaten Ort* (G3, G8) → erst dann eine Arbeitsfläche statt einer Übersicht über Seiten.
5. *Fachpaket Interaktion und Struktur mit Mikrotext* → erst dann Beschriftungen von Schaltflächen festschreiben.

## 6 · Ansichtsarchitektur

**Zwei Folgerungen, getrennt gehalten:**
1. **Eine Arbeitsfläche, Labor und Werke als Bereiche** (gut gestützt durch [st-zentrale], [a77], G2, G3, K9). Es gibt nicht eine Übersicht mit Zielbild-Seiten darunter, sondern eine Fläche über alle Zielbilder. „Labor“ oder ein Werk ist ein **Bereich**, den er eingrenzen kann. Innerhalb des Labors sind **Stränge** eine zweite Dimension; ein Punkt kann in mehreren Strängen zugleich stehen [ez-aufbau]. Werke haben keine Stränge. Das löst die Fragmentierung, die er an Iteration 2 kritisiert hat.
2. **Welche Ansichten:** Bestätigt sind drei: „Du bist dran“, „Stand“, „Alles“ [ez-aufbau], in dieser Reihenfolge [ao-reihenfolge]. Ich behalte sie und ihre Namen; die Situationen füllen sie. Ob „Stand“ so gefüllt werden soll, ist eine Frage an ihn (Abschnitt 9).

| Ansicht | Dient | Zeigt | Er tut | Leer, wenn |
|---|---|---|---|---|
| **Du bist dran** | S1, S3; K1, K2, K10 | Was sein Urteil braucht, nach Priorität und Hebel, ohne Verwaltung; jede Frage einzeln mit dem, was er zum Entscheiden wissen muss (Abschnitt 3) | entscheiden, eins nach dem anderen | „Nichts wartet auf dich.“ Dann öffnet sich „Stand“. |
| **Stand** | S2, S4; K4, K5 | Drei Teile in dieser Folge: *Was aus deinen Worten wurde* seit deinem letzten Blick (Wortlaut, vorher, jetzt; Muster „Ereignis statt Kachel“, R1 §3); *Was läuft* mit Wer, Blocker, nächstem Schritt; *Wie es zusammenhängt*: Stränge und Bereiche mit benannten Relationen („braucht“, „gibt frei“, „beruht auf“) [ao-reihenfolge] | prüfen, „passt“ oder „stimmt nicht“; sonst nichts tun; Stichprobe auf Wunsch [ao-tiefe] | „Nichts Neues seit …; gerade läuft nichts.“ |
| **Alles** | S5; K6 | Alle Punkte mit Filtern nach Bereich, Strang und Status; Zusammenhänge nur mit Methode [ao-methodisch] | erkunden, von dort zu einem Punkt springen | – |

**Was immer sichtbar ist (Rahmen):** wo er ist (Ansicht, Bereich); der Weg zu „Du bist dran“ und wie viel dort wartet; der Stand seiner Rückmeldung (markiert, gesendet, angekommen); ein Verweis auf die Daten des aktuellen Bereichs im Repo.

**Was auf Abruf ist:** Erklärungen der Farben und Zeichen; die Herkunft im Detail; Gegenprüfungen; die Geschichte eines Punkts; das Fachwissen, auf dem eine Empfehlung beruht. Das bedient das Ziel, Domänenwissen aufzubauen, ohne dort urteilen zu müssen (Intent).

**Wo „gut statt fertig“ sichtbar wird:** In „Stand“ steht nie ein Fortschritt in Prozent. Stattdessen: was geprüft ist, von wem, und was offen ist (G5, R1 §3).

## 7 · Aufgabenpfade und Interaktion

**P1 · Zwischendurch entscheiden (S1):**
1. Meldung, öffnen. Er landet in „Du bist dran“.
2. Oben steht, wie viele Fragen warten und welche den größten Hebel hat. Er sieht die Reihenfolge und darf sie ändern (Priorität setzen).
3. Er öffnet die erste Frage. Darin stehen:
   - die Frage in einem Satz;
   - die Empfehlung mit Grund;
   - was zur Wahl steht, als Bild oder Beispiel;
   - worauf es einzahlt und was es freigibt;
   - Herkunft und Belegstatus auf Abruf.
4. Er antwortet mit einer Handlung, die nach ihrer Folge benannt ist, nicht nach einem Status. Zum Beispiel „Freigeben, Claude baut es“, „Anders: …“, „Später“. Die genauen Wörter liefert das Fachpaket (Abhängigkeit 5).
5. Rückmeldung sofort: „Gemerkt. Danach: …“. Weiter zur nächsten Frage.
6. Am Ende senden, mit einer Zusammenfassung, was jetzt geschieht. **Offen:** sofort je Antwort senden oder gesammelt am Ende (Abschnitt 9).

**P2 · Nachsehen, ob es angekommen ist (S2):** Er öffnet „Stand“, Teil „Was aus deinen Worten wurde“. Dort stehen seine Sätze im Wortlaut, darunter was daraus wurde, mit Verweis an den Ort. Er sagt „passt“ oder „stimmt nicht: …“. Was er nicht berichtigt, gilt nicht als bestätigt (Regel des bisherigen Zielbilds bleibt).

**P3 · Im Werk urteilen (S3):** Er grenzt in „Du bist dran“ auf das Werk ein. Varianten stehen als Bilder nebeneinander, je mit Begründung [a54]. Er wählt mit einer Begründung oder verlangt eine neue Variante.

**P4 · Prüfen, ob das System trägt (S4):** In „Stand“ oder „Alles“ öffnet er an einem Punkt die Stichprobe: Begründung, Gegenprüfung, Belege [ao-tiefe]. Von dort kann er „stimmt nicht“ sagen; das wird ein Eingang wie jede Rückmeldung.

**P5 · Erkunden (S5):** In „Alles“ filtert er nach Bereich, Strang und Status. Er folgt benannten Relationen („beruht auf“, „braucht“, „gibt frei“) und springt zu einem Punkt. Von jedem Punkt, der ihn braucht, führt ein Weg zurück nach „Du bist dran“.

## 8 · Visuelle Abbildung (Hypothesen, nach Bertin und den Regeln des Labors)

| Bedeutung | Visuelle Variable | Begründung |
|---|---|---|
| Rang (Priorität, Hebel) | Position und Reihenfolge | Position ist die stärkste Variable für Ordnung (Bertin, Skill `bertin-semiologie`) |
| „Du bist dran“ | Rot, nur hier und nur für ihn; die Marke im Kopf behält ihre eigene Funktion durch Form und Ort | [st-farbe], [a67] |
| Von dir bestätigt / Vorschlag oder Hypothese | Grün / Ocker, dazu immer das Wort | Farbe nie allein (R1 §4) |
| Belegstatus | Wort und Linienart (durchgezogen belegt, unterbrochen abgeleitet) | [a47]: das Etikett allein reichte nicht |
| Wichtigkeit im Punkt | Typografische Hierarchie: Frage groß, Empfehlung normal, Herkunft klein, aber in Grundschrift lesbar | Fachpaket Form; Befund Iteration 2 (Code-Schrift in 12 px) |
| Wer arbeitet | Name als Wort, kein Avatar, keine Farbe | Farbe ist besetzt (K8) |
| Warnung, Blocker | Wort und Form aus der Formensprache des Labors, kein Emoji | Bug „Visuelle Sprache ohne Entwurfslogik“ |
| Relation | benannte Liste („braucht“, „gibt frei“, „beruht auf“), kein Netzbild ohne geprüfte Zuschreibung | [ao-methodisch], R1 §3 |

## 9 · Was ich von dir brauche

1. **Stimmen die fünf Situationen?** Wann schaust du wirklich hin, und fehlt eine?
2. **Stimmt die Kernlücke** („Wo steht die Arbeit, gemessen an meiner Absicht, und wo braucht sie mein Urteil?“)?
3. **Eine Arbeitsfläche über alle Zielbilder, Labor und Werke als Bereiche:** trägt diese Richtung?
4. **„Stand“ in drei Teilen** (was aus deinen Worten wurde, was läuft, wie es zusammenhängt): so füllen?
5. Senden **sofort je Antwort** oder **gesammelt am Ende**?

Mit deinen Antworten lege ich den Inhalt der drei Ansichten fest. Danach baue ich in der Reihenfolge der Voraussetzungen, die im Zielbild stehen:
1. das Datenmodell (Voraussetzungen, ein Datensatz über Labor und Werke);
2. „Du bist dran“;
3. „Stand“ und „Alles“;
4. den Körper der Punkte mit dem Mikrotext aus dem Fachpaket.

## Geprüft und nicht geprüft

**Geprüft:** alle gesicherten Aussagen in `daten/arbeitsweise.json` (a01 bis a82) und die Punkte zur Arbeitsoberfläche im Zielbild gelesen; Befund aus Iteration 2; R1. Unabhängige Prüfung am 14.11. (eigener Prüflauf, 24 Herkunftsangaben gegengeprüft): Sie fand eine Umbenennung der bestätigten drei Ansichten in vier, falsche Herkunft bei G6, fehlende Zitate von a78, a81, a82 und als belegt geführte Ableitungen. Berichtigt in dieser Fassung.
**Nicht geprüft:**
- Die Situationen und Pfade sind nicht an dir beobachtet worden.
- Keine Ansicht ist gebaut oder mit dir getestet; die Testfragen aus R1 §2 stehen aus.
- Die visuelle Abbildung ist ungeprüft gegen das Fachpaket Vermitteln.
