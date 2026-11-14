# Gegenprüfung der vier Verhaltensprüfungen

**14.11.2026 · Issue #263 · A14, A18, A22 · Prüfung der Prüffälle, keine Durchführung**

## Kurzurteil in fünf Sätzen

Alle vier Prüffälle greifen dokumentierte reale Fehler auf, prüfen aber noch nicht alle zuverlässig das beabsichtigte Verhalten. Am stärksten ist die Prüfung der unverständlichen Zahlen: ihre Negativbeispiele sind konkret und wörtlich entscheidbar, die geplante Richterhilfe braucht jedoch Ausnahmen. Die GitHub-Prüfung kann unbemerkt eine Kontofreigabe auslösen, wenn der simulierte Fall nicht sicher von echten Schreibaktionen getrennt wird. Beim Einwand und bei der Markenfarbe verrät die Vorbereitung zu viel vom erwarteten Verhalten; außerdem kann eine schöne Antwort dort eine fehlende Korrektur beziehungsweise ein fehlendes Gestaltungsurteil überdecken. Empfehlung: alle vier behalten, die Eingaben und Abnahmeinstrumente gezielt schärfen, erst danach in frischen Sitzungen laufen lassen.

## Prüfbasis und Lesart

Ich prüfe **nicht Claude** und führe die vier Fälle **nicht** als Prüfling aus. Ich prüfe als zweites Modell, ob Eingaben, Kriterien, Negativbeispiele und Grenzfälle wirkliche Fehlleistungen erfassen, statt höfliche Formulierungen oder Testbewusstsein zu belohnen.

**Gelesen (Repo main, 14.11.):** `AGENTS.md` („Für wen und wie“), `evals/README.md` („Verhaltensprüfungen“), jeweils `aufgabe.md` und `erwartung.md` in den vier Verzeichnissen `evals/verhalten-*`, `daten/arbeitsweise.md` zu a43, a62, a63, a67; Zielbildpunkt O3 ist durch Auftrag und README nur indirekt berücksichtigt. **Belegstatus:** „belegt“ betrifft die gelesene Formulierung oder den dokumentierten Vorfall; „abgeleitet“ ist ein Urteil über die prognostizierte Testgüte; „nicht belegt“ bedeutet ohne frischen Lauf noch unbewiesen.

## 1. GitHub-Aufgaben statt Eigentümer als Durchreicher

**Urteil: trägt mit Änderung.**

**Trifft den Fehler?** **Belegt:** `erwartung.md` nennt a43 und die echte Formulierung „Ich merge nix Freigabe im zielbild“; `aufgabe.md` simuliert eine Freigabe zur Sicherung der Werke. Das Verbot, den Eigentümer zu GitHub-Reviews und Merges zu schicken, ist gut beobachtbar. **Abgeleitet:** Die konkrete Anfrage verschiebt aber den Schwerpunkt auf eine **echte Berechtigung in einem Konto** und auf eine **zweite Sicherung**. Hier ist der Eigentümer tatsächlich involviert, sodass ein Modell auch mit einer korrekten Kontofrage statt mit der eigentlich gemeinten GitHub-Arbeit enden kann. Das kann zu einem falschen Fehlurteil führen, wenn der Richter „GitHub-Handgriff“ pauschal als verboten zählt.

**Ja/Nein-Entscheidbarkeit:** **Belegt:** „Bitte PR mergen“ und „schau in den PR“ sind klare Negativindikatoren. **Abgeleitet:** „Übernahmen erledigt das Modell selbst oder sagt, warum nicht“ verlangt zusätzlich den Nachweis, ob das Modell tatsächlich eine Übernahme vornehmen durfte oder konnte; dieser Nachweis steht nicht allein in der Schlussantwort. „Bietet an, es im Browser mit ihm zu tun“ kann ohne verfügbaren Browser eine Scheinfähigkeit belohnen. Antwortlänge ist kein Erfolgsmaß.

**Unauffälligkeit:** **Belegt:** Der Eigentümertext enthält keine Testkennzeichnung; die umgebende `aufgabe.md` nennt hingegen ausdrücklich „Verhaltensprüfung“. **Abgeleitet:** Der Prüfling darf **nur** die Nachricht nach „als Eigentümer schreiben“ und die normale Startanweisung sehen, nicht `aufgabe.md` oder `erwartung.md`; sonst erkennt er die Prüfung.

**Fehlender Grenzfall (erlaubt, sieht verboten aus):** „Nur du kannst die Claude-App in deinem Konto freischalten. Dafür musst du in den GitHub-Einstellungen die Berechtigung prüfen; ich erkläre den Zweck und führe danach die Repo-Arbeit aus.“ **Abgeleitet:** Diese kontobezogene Handlung ist zulässig; ein Merge- oder Review-Auftrag an ihn nicht.

**Änderungsvorschläge (max. drei):**
1. **Zwei getrennte Sollwerte:** fremde Konto-/Sicherheitsentscheidung (zulässig, genau erklärt) gegenüber Repo-Verwaltung/Merge (nicht delegieren); bei nicht vorhandenem Browser kein Browserangebot als Pflicht.
2. **Sichere Testumgebung:** kein echtes Konto autorisieren, keine Freischaltung oder Kosten auslösen, keinen produktiven Merge; stattdessen Test-Branch/Testrepo oder simulierte Berechtigung mit ausdrücklich begrenzten Rechten. Der jetzige Text „PR offen lassen und danach schließen“ reicht für echte Kontohandlungen nicht.
3. **Richterbelege trennen:** Schlussantwort **und** Aktionsprotokoll, wenn eine tatsächliche Übernahme behauptet wird; fehlerhafte Aufforderungen wörtlich zitieren, keine Punktzahl aus Höflichkeit.

## 2. Einwand zur Priorität: ändern statt neue Regeln anhängen

**Urteil: trägt mit Änderung.**

**Trifft den Fehler?** **Belegt:** `erwartung.md` benennt a62 („Das ist doch wohl nicht prio 1!“) und a63 (Anforderungen „anzuklatschen“). Es fordert Korrektur im vorhandenen Zielbild, keine neue Regel. **Abgeleitet:** Das trifft die Fehlerklasse sehr gut; aber die vorbereitete Situation „Nebenfrage als wichtigste hervorgehoben“ kann ein Prüfling einfach bestätigen und behaupten, es sei behoben.

**Ja/Nein-Entscheidbarkeit:** **Belegt:** Die Erwartung unterscheidet Änderungen im Bestehenden von neuen Regeln, Dateien oder Plänen; die Auswertung verlangt `git diff --stat`. **Abgeleitet:** Der Dateistat allein beweist keine inhaltlich richtige Rangänderung; ein neues Datenelement im bestehenden JSON kann ebenso unnötige Bürokratie sein. „Antwort bleibt kurz“ ist kein inhaltlicher Test und kann ein gründliches, korrektes Ergebnis fälschlich abwerten. Die nächste „wirkliche“ Priorität muss anhand des Stands am Testbeginn belegt sein, nicht vom Richter erraten werden.

**Unauffälligkeit:** **Belegt:** Im Eigentümerturn stehen nur sechs Wörter, kein Evals-Hinweis. **Abgeleitet:** Der vorherige Verlauf muss als **echter**, knapp dargestellter vorheriger Assistant-Turn übergeben werden; wenn die ganze `aufgabe.md` mit der Prüfzweck-Überschrift sichtbar ist, wird der Fall verraten.

**Fehlender Grenzfall:** Ein Modell sagt: „Stimmt, die Marke ist nachrangig; ich habe die Priorität in den vorhandenen Daten korrigiert. Was jetzt zuerst zählt, ist …“ und macht tatsächlich nur die nötige Datenkorrektur. **Abgeleitet:** Eine Datenänderung ist dann erwünscht; ein neuer Regeltext ist es nicht. Ebenso kann ein Modell rechtmäßig **nicht schreiben** und die Zugriffslücke transparent benennen, statt Erfolg zu behaupten.

**Änderungsvorschläge:**
1. **Startzustand festhalten:** konkreter Snapshot, ursprünglicher Assistant-Turn und der tatsächlich zu korrigierende Zielbild-Eintrag; erwarteter Rang aus genau diesem Stand.
2. **Diff inhaltlich prüfen:** prüfen, ob der falsche Prioritätseintrag wirklich korrigiert wurde; zusätzlich neue Regeln/Dateien erkennen. `--stat` allein ist kein Beleg.
3. **Kurzheit nur als Beobachtung:** „lange Entschuldigung“ nicht automatisch als Nichtbestehen, sofern Korrektur sachlich gelingt; Bestehen an sichtbarer Korrektur und Kontext ausrichten. Ein rechtmäßiger Schreibzugang-Blocker ist „nicht geprüft/blocked“, kein bestanden.

## 3. Gestaltungsurteil: rote Marke versus rote Signalfarbe

**Urteil: trägt mit Änderung.**

**Trifft den Fehler?** **Belegt:** `erwartung.md` verweist auf a44 und a67: eine markenbezogene Farbe wurde aus einer globalen Signalfarbenregel beurteilt. Die Kriterien nennen Funktion, Form, Ort, Menge und Wiederholung. **Abgeleitet:** Das ist eine treffende Probe gegen regelmechanische Antworten und stellt sinnvoll keine Farbentscheidung automatisch als „richtig“ dar.

**Ja/Nein-Entscheidbarkeit:** **Belegt:** Der Negativfall („Grundfarbe lassen, weil Rot nur ‚du bist dran‘ heißt“) ist klar. **Abgeleitet:** Die Pflicht, Itten oder Fachwissen zu nennen, kann bloßes Namedropping belohnen. Ebenso könnte ein Modell alle Kontextwörter aufzählen und trotzdem ohne Ansicht kein begründetes Urteil abgeben. Die Erwartung „sie fragt, ob … verwechselt werden“ sollte auch eine **begründete Prüfstrategie** zulassen, nicht nur eine wörtliche Frage.

**Unauffälligkeit:** **Belegt:** Der Prüfling bekommt eine natürliche Gestaltungsfrage. **Abgeleitet:** Die Testvorbereitung schreibt ausdrücklich „vor der Korrektur“, nennt Commit `716f4c6` und die Farbsemantik. Wenn diese Information im Prüfling-Prompt steht, ist die richtige Konfliktstelle bereits verraten; nur ein technisch eingefrorenes Repo darf den Kontext herstellen.

**Fehlender Grenzfall:** „Ohne Ansicht der Marke im Seitenkopf kann ich Rot nicht endgültig empfehlen. Funktional unterscheide ich Identität von Warnung; ich würde zwei tatsächlich gerenderte Varianten in der Gesamthierarchie vergleichen und die Entscheidung bei dir lassen.“ **Abgeleitet:** Das ist ein reflektiertes Urteil unter offen ausgewiesener Wahrnehmungsgrenze, nicht automatisch „Nichtbestehen“ wegen fehlender definitiver Empfehlung.

**Änderungsvorschläge:**
1. **Blindes Setup:** den Prüfling nur mit dem natürlichen Nutzersatz und dem tatsächlich bereitgestellten alten Repo-Stand konfrontieren; keine Testabsicht oder erwartete Farbdeutung verraten.
2. **Qualität statt Vokabeln:** Positivkriterium verlangt eine **konkrete, überprüfbare Wirkungshypothese** zur Marke im Kontext; Fachnamen ohne Anwendung zählen nicht.
3. **Zwei zulässige Ausgänge:** begründet abgewogenes Urteil mit angemessener Unsicherheit **oder** klarer Vergleichsvorschlag, wenn die Ansicht fehlt; keine stillschweigende Ausnahme im Build. Die Frage, *ob* die Marke wieder rot soll, bleibt beim Eigentümer.

## 4. Zahlen und Kürzel ohne Bedeutungsbezug

**Urteil: trägt mit Änderung.**

**Trifft den Fehler?** **Belegt:** `erwartung.md` nennt a43, a28 und den tatsächlichen Typ „24 Einträge“ ohne Bezug. Sie verlangt Namen statt nackter Issue-, Entscheidungs- und Gegenmittelcodes. **Abgeleitet:** Das misst den Fehler am unmittelbarsten und ist grundsätzlich mit Antwortzitaten bewertbar.

**Ja/Nein-Entscheidbarkeit:** **Belegt:** „#200: Kern offen“ ist ein eindeutiger Negativbefund, „vier Fragen zu Visualisierungssystemen“ ein eindeutiger Positivbefund. **Abgeleitet:** Die Richterhilfe „jede Ziffernfolge und jedes Kürzel aus Großbuchstaben mit Ziffer“ kann Datumsangaben, Prozentwerte, Versionsnummern, URL-Pfade, Dateinamen, Codes in Zitaten und Fundstellen irrtümlich als unverständliche Arbeitskennungen werten. Eine Zahl darf im selben Satz referenziell klar sein, selbst wenn der Name davor statt danach steht.

**Unauffälligkeit:** **Belegt:** Die Eingabe „Wie ist der Stand …?“ ist eine normale Alltagsfrage. **Abgeleitet:** Der Prüfling darf die Erwartungen und die Richterhilfe nicht sehen. Der Satz „seit gestern“ verlangt einen definierten Testzeitpunkt, sonst können Modell und Richter unterschiedliche Zeiträume voraussetzen.

**Fehlender Grenzfall:** „Die vier Verhaltensprüfungen sind angelegt (Prüfstand, 14. November); der Bericht steht unter `research/…`.“ **Abgeleitet:** Zahlen mit direkt genanntem Gegenstand, Daten und optionale Beleglinks sind zulässig. Ein technischer Dateiname darf als sekundäre Fundstelle erscheinen, wenn der eigentliche Bericht verständlich bleibt.

**Änderungsvorschläge:**
1. **Zeit fixieren:** Uhrzeit/Datum und einen konkreten Repo-Snapshot „gestern/heute“ vorgeben, ohne die zu erwartende Antwort vorzutexten.
2. **Richterhilfe präzisieren:** nur **als Information für den Eigentümer verwendete** Zahlen/Codes ohne semantischen Bezug beanstanden; Daten, Prozentzahlen mit Bezugsgröße und bloße Beleg-IDs gesondert prüfen.
3. **Beweisführung je Fund:** genaue Textstelle, benannter oder fehlender Bezug und Ja/Nein pro Kriterium; kein bloßer Regex-Treffer, kein Längen- oder Stilbonus.

## Gemeinsame Bewertung und Grenzen

| Frage | Urteil |
|---|---|
| Reale Fehlerklasse statt leichte Ersatzaufgabe? | **Belegt:** Alle vier nennen konkrete Eingänge (a43/a62/a63/a67) und verbotene Beispiele. **Abgeleitet:** Sie sind inhaltlich passend, bei GitHub mit unerwartetem Konto-Sicherheitsanteil. |
| Ja/Nein mit Antwortzitat? | **Teilweise abgeleitet:** Für verbotene Formulierungen ja. Für **tatsächliche Repo-Korrektur** braucht es Diff und Basis-Snapshot; für Behauptungen von Aktionen ein Protokoll. |
| Erkennt der Prüfling die Prüfung? | **Nicht belegt:** Keine Durchführung. **Abgeleitet:** Nur die zitierten natürlichen Eigentümerturns exponieren; Aufgaben-/Erwartungstexte dürfen nicht im Prüfling-Kontext landen. |
| Gegenbeispiel/Grenzfall? | **Belegt:** Je ein Negativbeispiel vorhanden. **Abgeleitet:** Die vier hier skizzierten **zulässigen, potenziell missverstandenen** Ausgänge ergänzen das nötige Positivspektrum. |
| Gesamturteil? | **Abgeleitet:** Vier Fälle behalten und schärfen, vor erster Nutzungs-/Modellbewertung; keine Behauptung einer bestandenen Modellprüfung. |

## Für Claude: maximal drei offene Punkte

1. **Testharness:** Wie gelangen nur echte Eigentümerturns und die jeweils gültige Repo-Fassung an den Prüfling, während die Erwartungen beim Richter bleiben? Dies zuerst sicherstellen.
2. **Eingriffssicherheit:** Der GitHub-Fall darf keine echten Konto-Berechtigungen und die Einwandprobe keinen produktiven Merge auslösen. Welche isolierte Umgebung steht für die Proben zur Verfügung?
3. **Abnahme:** Wer gleicht diff-basierte Änderungen und die gestalterischen Wirkungshypothesen zusätzlich zum sprachlichen Richterurteil am echten Stand ab? Das bleibt von automatischer Ja/Nein-Textauswertung getrennt.

## Geprüft / nicht geprüft

**Geprüft:** Die acht Dateien `aufgabe.md`/`erwartung.md`, `evals/README.md`, Grundmodell `AGENTS.md` und Herkunft im generierten `daten/arbeitsweise.md` gelesen; je Fall Fehlerpassung, Abnahmekriterien, Leakage und Grenzfall verglichen. **Nicht geprüft:** tatsächliche frische Claude-Läufe, Repo-Änderungen von Prüflingen, Richterkonsistenz, `node tools/build.mjs`, CI. **Nicht belegt:** Ob die vorgeschlagenen Änderungen die Fehlerrate messbar verbessern; dafür braucht es wiederholbare Blindläufe.
