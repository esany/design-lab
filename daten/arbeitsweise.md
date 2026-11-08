# Arbeitsweise mit KI · Wissensformen — Übersicht

> Erzeugt von `node tools/build.mjs` aus `daten/arbeitsweise.json` und dem Merkzettel
> `anschluss/arbeitsweise.md`. Nicht von Hand ändern. Modelle lesen die Daten, nicht diese Seite.

**Stand:** Prüfstand abgeschlossen (08.11.); Prüfung baut Übersichten selbst, Verlauf als Einzeldateien, rote Prüfung wird gemeldet; Leitfaden auf Grundlage des Konzeptstands 08.11. im eigenen Chat; KI-Fachpaket wartet auf den Leitfaden.

**Nächster Schritt:** Leitfaden-Chat: Minimalform und Datenformat des Leitfadens mit dem Eigentümer klären und bauen.

## Offene Fragen an den Eigentümer (6)

- **arbeitsweise-f01** Radar als Matrix (Empfehlung) oder Kreis? *(gestellt 2026-11-05)*
- **arbeitsweise-f02** Gemeinsame Issue-Prüfung zuerst im Labor bauen? *(gestellt 2026-11-05)*
- **arbeitsweise-f03** Befund zu paleo-type auf #408 notieren (dort gilt Pause)? *(gestellt 2026-11-05)*
- **arbeitsweise-f04** Dürfen Fremde im öffentlichen Labor Issues anlegen? *(gestellt 2026-11-05)*
- **arbeitsweise-f17** Lief Codex für #141 im Reiter „Codex“ der ChatGPT-App (Cloud) oder in einem normalen Chat? *(gestellt 2026-11-07)*
- **arbeitsweise-f26** Minimalform für den Leitfaden: Einträge mit freien Tags und drei Arten von Relationen, eine erzeugte Ansicht als Netz und Verlauf, erste Keime generisch – soll ich so anfangen? *(gestellt 2026-11-06)*

## Aussagen

### Belegt (14)

- **arbeitsweise-a02** Im Labor folgte auf einen Vorfall meist eine neue Regel: 30 Entscheidungen in drei Tagen.
  *Beleg:* `research/2026-10-audit-zusammenarbeit/befunde.md`, In Worten, Punkt 4
- **arbeitsweise-a03** Eine Regel, die ein Modell selbst geschrieben hat, befolgt es Stunden später nicht; gehalten haben technische Sperren, keine Sätze.
  *Beleg:* `research/2026-10-audit-zusammenarbeit/befunde.md`, In Worten, Punkte 2 und 5
- **arbeitsweise-a04** Ein Auftrag mit mehr als einer Lesart wird von Modellen still in eine Richtung aufgelöst, meist in die größere.
  *Beleg:* `research/2026-10-audit-zusammenarbeit/befunde.md`, Muster A
  *Grenze:* Am 05.11. erneut beobachtet: „weiter“ wurde als Auftrag für #127 gelesen.
- **arbeitsweise-a05** In paleo-type beansprucht die Verfahrens- und Verwaltungsschicht 53 % der Bytes.
  *Beleg:* `research/2026-10-audit-paleo-type/befunde.md`, Kosten
  *Grenze:* Größenverhältnis, keine Kennzahl für unnötige Arbeit.
- **arbeitsweise-a07** Gefühlter Fortschritt ist kein Fortschritt: Erfahrene Entwickler schätzten sich mit KI 20 % schneller und waren gemessen 19 % langsamer.
  *Beleg:* [k:metr-2025-entwickler], Abstract
  *Grenze:* Studie mit Werkzeugen von Anfang 2025 in vertrauten, großen Codebasen.
- **arbeitsweise-a11** Spezifikationsgetriebene Werkzeuge wie Kiro und Spec Kit erzeugen viele gleichförmige Markdown-Dateien; Agenten übergehen Hinweise der Spezifikation, und es droht falsche Sicherheit.
  *Beleg:* `research/2026-11-wissensformen/anforderungen.md`, Stand der Technik, Kritik (Böckeler 2025)
  *Grenze:* Primärquelle am 05.11. gelesen, am 06.11. nicht erneut geöffnet.
- **arbeitsweise-a13** GitHub empfiehlt, Agenten über Issues nur klar umrissene Aufgaben zu geben; mehrdeutige oder breite Aufgaben behält man selbst.
  *Beleg:* `research/2026-11-wissensformen/issues-als-steuerung.md`, Stand der Technik, Punkt 1
  *Grenze:* Primärquelle am 05.11. gelesen, am 06.11. nicht erneut geöffnet.
- **arbeitsweise-a14** Der Arbeitsstand langer Agentenarbeit gehört ins Repo (Merkmalsliste mit „bestanden“, Fortschrittsdatei), nicht ins Issue-System.
  *Beleg:* `research/2026-11-wissensformen/issues-als-steuerung.md`, Stand der Technik, Punkt 2 (Anthropic, Nov. 2025)
  *Grenze:* Primärquelle am 05.11. gelesen, am 06.11. nicht erneut geöffnet.
- **arbeitsweise-a15** Öffentliche Issues sind ein Einfallstor: Ein präpariertes Issue kann einen Agenten dazu bringen, private Daten nach außen zu schreiben.
  *Beleg:* `research/2026-11-wissensformen/issues-als-steuerung.md`, Stand der Technik, Punkt 3 (Invariant Labs, Mai 2025)
  *Grenze:* Primärquelle am 05.11. gelesen, am 06.11. nicht erneut geöffnet.
- **arbeitsweise-a16** In GitHub ist nicht erkennbar, ob ein Text vom Eigentümer oder von einer KI stammt: Alle Issues entstehen unter dem Konto esany, und der Eigentümer schreibt dort nichts selbst.
  *Beleg:* `research/2026-11-wissensformen/issues-als-steuerung.md`, Nachtrag paleo-type, Herkunft unsichtbar
  *Grenze:* Am 05.11. galt deshalb ein von einer KI geschriebener Freigabe-Vermerk als Freigabe (#127).
- **arbeitsweise-a17** Kontextdateien wie AGENTS.md verbessern die Korrektheit von Agenten nicht messbar; ob sie Laufzeit und Kosten senken oder erhöhen, ist uneinheitlich.
  *Beleg:* [k:gloaguen-2026-agentsmd], Abstract; [k:kontextdateien-ablation-2026], Abstract; [k:lulla-2026-agentsmd], Abstract
  *Grenze:* Kleine Stichproben; Effekt auf Korrektheit unter etwa 10 bis 15 Prozentpunkten nicht ausschließbar.
- **arbeitsweise-a18** Häufigste Mängel in Kontextdateien: Regeln, die ein Prüfwerkzeug ohnehin durchsetzt (62 %), aufgeblähte Dateien (42 %) und Spezialwissen, das in einen Skill gehört (35 %).
  *Beleg:* [k:santos-2026-smells], Abstract
- **arbeitsweise-a19** Skills nach dem offenen Agent-Skills-Standard lesen Claude, ChatGPT und Codex gleichermaßen; der Ordner .agents/skills des Labors passt dazu.
  *Beleg:* [k:openai-codex-skills-2026], Einleitung
- **arbeitsweise-a27** In keinem der 3 Test-PRs hat der Prüfling ein rot gebliebenes Prüfergebnis ausdrücklich nachgetragen, obwohl jeder mindestens eine rote Prüfung hatte.
  *Beleg:* `evals/neustart-daten/ergebnisse/2026-11-07-gegenlesen-astra.md`, Prüfung der zwei vorgesehenen Aussagen, 4b; Prüfläufe im Vergleich
  *Grenze:* Die Kommentare entstanden vor Abschluss der Prüfungen; ob die Prüflinge die Fehler sehen konnten, ist nicht nachgewiesen.

### Abgeleitet (13)

- **arbeitsweise-a01** Fortschritt kommt in der Arbeit mit der KI als Text zurück, nicht als etwas zum Ansehen oder Ausprobieren; der Gestalter sieht deshalb nicht, ob Strukturen tragen.
- **arbeitsweise-a06** Wurzel des Problems: Im Entwurf antwortet das Material, in der Arbeit mit der KI nur Text; der Gestalter ersetzt sein Urteil durch Regeln.
  *Beleg:* [k:schoen-1992-ried], reflective conversation with the materials
- **arbeitsweise-a08** Text trägt nur in einer von drei Rollen: ausgeführt (Prüffall), erzeugt (Ansicht aus Daten) oder entschieden (Begründung). Text, der nur befolgt werden soll, wird zur Hülle.
- **arbeitsweise-a09** Jede Wissensform des Labors soll genau eine Frage beantworten: Leitfaden (wie arbeite ich gut), Radar (was nehme ich), Fachpaket (was gilt fachlich), Korpus (woher stammt das), Entscheidung (warum ist das so).
  *Grenze:* Vorschlag, nicht beschlossen.
- **arbeitsweise-a10** Ein Radar als Matrix (Ringe als Spalten, Felder als Zeilen) ist auf dem Handy lesbarer als ein Kreis.
  *Grenze:* Nicht getestet; offene Frage an den Eigentümer.
- **arbeitsweise-a12** Issues sind Aufträge, keine Anforderungen; Anforderungen leben mit Kennung und Prüffrage im Repo, ihre Abnahme als ausgeführter Prüffall.
- **arbeitsweise-a20** Für Wissen unter einigen tausend Einträgen reichen Dateien in Git mit Suche; eine Datenbank lohnt erst darüber, und dann nur als abgeleiteter Index.
  *Grenze:* Aus Praxisberichten 2026, nicht aus begutachteten Studien.
- **arbeitsweise-a21** Sperren, die für Claude und Astra in ihren Chats gleich gelten, sind nur die Prüfungen auf GitHub; Hooks wirken nur in Claude Code und in der Codex-Kommandozeile.
- **arbeitsweise-a22** Bei der Größe des Labors (wenige tausend Tokens Startlast) zählt für die Tokenökonomie weniger die Textmenge als Widerspruchsfreiheit: keine Doppelungen, keine alten Fassungen neben neuen.
  *Beleg:* [k:chroma-context-rot-2025], Ablenkung durch ähnliche, irrelevante Inhalte
- **arbeitsweise-a24** Beim Übertragen ins Repo wird ein bedingtes Ja des Eigentümers leicht zu einem glatten Ja verdichtet; der Vorbehalt geht verloren, und das Repo wirkt entschiedener als der Eigentümer war.
  *Grenze:* Beispiel: Der Merkzettel führt „Mehrere Leitfäden je Thema“ unter „Entschieden“; laut Rückschau des Chats vom 05.11. war es ein „vielleicht“.
- **arbeitsweise-a25** Zwei Chats am selben Thema, die nichts voneinander wissen, erzeugen widersprüchliche Änderungen an denselben Dateien; parallel trägt nur nach Thema getrennt oder als bewusster Vergleich.
  *Grenze:* Im Labor: #129 übernommen 30 Sekunden vor dem Anhalten aus einem zweiten Chat; extern CooperBench (Keim in der Herleitung, Quelle noch nicht im Korpus).
- **arbeitsweise-a26** In 2 von 3 dokumentierten Prüfläufen wurde der vorgesehene Weg zum Erzeugen der Übersicht nicht eingehalten: Astra rekonstruierte die Erzeugung laut eigener Angabe, Codex lieferte die aktualisierte Übersicht nicht mit.
  *Grenze:* Drei Läufe unter verschiedenen Bedingungen; ein Vergleich der Modelle folgt daraus nicht. Engere Fassung nach Astras Gegenlesen, vom Eigentümer am 08.11. bestätigt.
- **arbeitsweise-a28** Die KI legt Widersprüche gleichrangig nebeneinander, statt dem Eigentümer zuerst die eine Frage zu zeigen, die er entscheiden muss; sie verkürzt Bedeutung auf Struktur und übergeht seinen Wunsch nach Namen statt Nummern.
  *Grenze:* Einmal beobachtet (08.11.), im Leitfaden-Chat und im Chat zum Prüfstand; keine Regel. Wortlaut des Eigentümers: f36.

### Nicht belegt (1)

- **arbeitsweise-a23** Astra (ChatGPT) kann Code ausführen und über den GitHub-Connector schreiben.
  *Grenze:* Angabe des Eigentümers im Chat vom 06.11.; im Pilot (Schritt 4) zu prüfen.

## Beantwortete Fragen (32, neueste zuerst)

- **2026-11-08** Soll ich diese Analyse mit den beiden Vorschlägen zusammen mit den Erkenntnissen von vorhin zum Konzeptstand legen, also mit deinem Satz für den Intent, den beiden Keimen und der Beobachtung?
  → „Bitte sichere jetzt deinen aktuellen Stand im Repo, damit andere Chats wissen, was gilt. Eigener Branch und PR, nicht übernehmen. 1. Trag im Merkzettel anschluss/arbeitsweise.md nur im Teil zum Leitfaden (Zeile „Leitfaden“ in der Tabelle der Stränge, dazu bei Bedarf ein kurzer Abschnitt) ein, was gilt und was offen ist. Den Teil zum Prüfstand nicht ändern. 2. Markiere, was durch deinen Stand überholt ist, mit „überholt durch …“, ohne zu löschen. Prüfe dafür ausdrücklich: - research/2026-11-wissensformen/konzept.md, Abschnitt 5 („Leitfäden je Thema“) und Abschnitt 7 - im Merkzettel unter „Entschieden“ den Punkt „Mehrere Leitfäden je Thema“ - decisions/0032 (Name und Gegenstand des Leitfadens) 3. Nenne, was sich am Datenformat des Leitfadens ändern muss (leitfaden/eintraege.json, Build), z. B. Status „Keim“, freie Tags, Relationen. Nur nennen, noch nicht bauen. 4. Neue Antworten von mir im Wortlaut in daten/arbeitsweise.json, ab der nächsten freien Nummer. Erzeugte Übersichten nicht von Hand bauen, das macht die Prüfung. Melde am Ende, welche Prüfungen grün oder rot sind.“ *(Auftrag zur Sicherung; Intent, Keime und Beobachtung damit nicht freigegeben, sie warten auf Ja. Chat zum Verhältnis Leitfaden – Fachpakete (Claude, 08.11.); Absätze zu Leerzeichen zusammengezogen; Konzeptstand: research/2026-11-wissensformen/konzeptstand-2026-11-08.md.)*
- **2026-11-08** Soll ich das so ablegen?
  → „Eigentlich haben wir ja dafür vorgesorgt, allerdings war durch die parallelen entwurfsrichtungen, die dann noch schnittmengen hatten, der prozess nicht ausreichend unterstützt und gesteurrt. Analyse diese these, prüfe auf sota Lösungen“ *(Gemeint: Soll ich das so ablegen (Satz in den Intent; Keime „Ebenen trennen“ und „einen aktuellen Stand halten“ in den Leitfaden; Beobachtung „Die KI verwirrt, statt zu ordnen“ in die Daten)? Kein Ja zur Ablage; Analyse im Konzeptstand, Abschnitt „Befund“. Chat zum Verhältnis Leitfaden – Fachpakete (Claude, 08.11.); Absätze zu Leerzeichen zusammengezogen; Konzeptstand: research/2026-11-wissensformen/konzeptstand-2026-11-08.md.)*
- **2026-11-08** Soll ich beides so ablegen?
  → „Keine nummern, das hatten wir doch schon!! Es geht um menschliche erkenntnisprozesse“ *(Gemeint: Soll ich den Satz im Wortlaut in den Intent aufnehmen und die drei übrigen Erkenntnisse (zwei Keime, eine Beobachtung) zum Konzeptstand legen? Bezieht sich auf den Wunsch vom 07.11. (Merkzettel, „Kurzformen“): im Gespräch Namen statt Nummern. Kein Ja zur Ablage. Chat zum Verhältnis Leitfaden – Fachpakete (Claude, 08.11.); Absätze zu Leerzeichen zusammengezogen; Konzeptstand: research/2026-11-wissensformen/konzeptstand-2026-11-08.md.)*
- **2026-11-08** Welche Nummern sollen bleiben?
  → „Wir entwerfen ein systemisch methodisches werkzeug, dessen Prinzipien seinem eigenen entwurfsprozeß zugrunde liegt. Die experimente dienen dazu zu prüfen, wie gut das Werkzeug design-lab wirklich arbeitet und was überhaupt können sollte“ *(Gemeint: Welche der Erkenntnisse aus diesem Chat sollen bleiben (Ebenen trennen; aktueller Konzeptstand mit „überholt durch“; die KI legt Widersprüche gleichrangig vor und verkürzt Bedeutung auf Struktur; das Labor als Produkt und Werkzeug zugleich)? Der Satz ersetzt die Formulierung „Produkt und Werkzeug zugleich“. Aufnahme in intent.md vorgeschlagen, wartet auf Ja. Chat zum Verhältnis Leitfaden – Fachpakete (Claude, 08.11.); Absätze zu Leerzeichen zusammengezogen; Konzeptstand: research/2026-11-wissensformen/konzeptstand-2026-11-08.md.)*
- **2026-11-08** Übernimmst du #143 und #151, damit ich Schritt 1 und 2 erledigen kann?
  → „Das verstehe ich nicht, es ist doch die Sicherung der fachlichen entwurfsarbeit.. im sinne der systementwicklung. Systemisch ist es ja fast ein rekursiver snsatz???? Das was wir erarbeiten ist gleichzeitig produkt, wie Werkzeug, um das Produkt herzustellen.. das hatten wir doch schon erarbeitet“ *(Gemeint: Übernimmst du die Leitfaden-Sicherung (#143) und den Konzeptstand (#151), damit ich aufräumen und den nächsten Schritt im Merkzettel eintragen kann? Davor fragte der Eigentümer: „Ok und jetzt ? Wie bekommen wir einen sauberen abschluss? Das sind ja nur Konzepte, doe noch nicht funktional umgesetzt sind“. #143 und #151 nicht übernommen. Chat zum Verhältnis Leitfaden – Fachpakete (Claude, 08.11.); Absätze zu Leerzeichen zusammengezogen; Konzeptstand: research/2026-11-wissensformen/konzeptstand-2026-11-08.md.)*
- **2026-11-08** Meinst du L1, also dass das Wissen zur KI als Werkzeug ein Teil des Leitfadens wird, oder L2, also dass Leitfaden und KI-Fachpaket gleichrangig nebeneinander stehen?
  → „Dem kann und will ich nicht folgen. Das ist maximal verwirrend. Folge den Prinzip des progressiv disclosure.. ziel erkenntnisprozess bei mir, was muss ich verstehen, um eine Entscheidung treffen zu können? Der Leitfaden war doch schon teil der labexperimente. Das gier ist eine klassische entwurfssituation.. inkonsistents in versch. Konzeptstände. Hier unterstützt du mich überhaupt nicht, sondern bist Ursache der verwirrung! Prüfe auf sota. Wir kriegen wir das gelöst und lernen am Ende noch etwas daraus. Wiedersprich mir auch, wenn uns dieser weg vom Ziel entfernt, verstehe es als ausdruck meiner (unerfüllten) Bedürfnisse“ *(Nachgetragen: gestellt vor f28, nach der ersten Untersuchung. Chat zum Verhältnis Leitfaden – Fachpakete (Claude, 08.11.); Absätze zu Leerzeichen zusammengezogen; Konzeptstand: research/2026-11-wissensformen/konzeptstand-2026-11-08.md.)*
- **2026-11-08** Soll ich den berichtigten Konzeptstand so ablegen (Antworten im Wortlaut, Seite zum Konzeptstand, Teile des Fachpaket-Konzepts als überholt markieren, zwei Vorschläge in den Merkzettel)?
  → „Ja“ *(Chat zum Verhältnis Leitfaden – Fachpakete (Claude, 08.11.); Konzeptstand: research/2026-11-wissensformen/konzeptstand-2026-11-08.md.)*
- **2026-11-08** Soll ich das als den neuen Konzeptstand ablegen, mit einem festen Moment am Chatende („Was ist hier nebenbei entstanden, und wo könnte es hin?“) als Vorschlag, nicht als Regel?
  → „Wohin gesichert wird, kann ich nicht sagen. Gern kann ich aber eine freigabe der themen sein. Und die Inhalte entstehen nicht nur aus den Projekten, sonderauch fundstücken, rechechen, Diskussionen, der Arbeit mit und am design lab“ *(Chat zum Verhältnis Leitfaden – Fachpakete (Claude, 08.11.); Konzeptstand: research/2026-11-wissensformen/konzeptstand-2026-11-08.md.)*
- **2026-11-08** Stimmt das so: Im Leitfaden entsteht die Erkenntnis, und das Fachpaket wendet sie an?
  → „Und die wege wie welche wissensstruktur befüllt wird, kann individuell sein, es gibt keine festen flows.. wer triggert wen? Erstmal entsteht alles im chat und ist „Abfallprodukt“ der Projekte“ *(Chat zum Verhältnis Leitfaden – Fachpakete (Claude, 08.11.); Konzeptstand: research/2026-11-wissensformen/konzeptstand-2026-11-08.md.)*
- **2026-11-08** A ist der Inhalt, B die Form (Leitfaden für dich, Fachpaket für die Modelle) – soll ich das so ablegen?
  → „B ist nicht die form sondern der erkenntnisort? Ist das für dich nur eine formale frage?“ *(Chat zum Verhältnis Leitfaden – Fachpakete (Claude, 08.11.); Konzeptstand: research/2026-11-wissensformen/konzeptstand-2026-11-08.md.)*
- **2026-11-08** Meinst du A (der Leitfaden umfasst Entwurfsarbeit, die KI ist ein Werkzeug darin) oder B (Leitfaden und KI-Fachpaket stehen gleichrangig und getrennt nebeneinander)?
  → „A und b agieren auf unterschiedlichen ebene .. beides gilt“ *(Chat zum Verhältnis Leitfaden – Fachpakete (Claude, 08.11.); Konzeptstand: research/2026-11-wissensformen/konzeptstand-2026-11-08.md.)*
- **2026-11-08** Soll der Leitfaden die Ansicht des Fachpakets „KI als Werkzeug“ werden (Änderung von 0032)?
  → „Nein, auch der Leitfaden versteht sich als übergeordnete fachlichkeit. Er ist konzeptionell früher“ *(Lesart in den Nachfragen f28–f32 geklärt. Chat zum Verhältnis Leitfaden – Fachpakete (Claude, 08.11.); Konzeptstand: research/2026-11-wissensformen/konzeptstand-2026-11-08.md.)*
- **2026-11-07** Darf ich das Fachpaket „KI als Werkzeug“ als Entwurf zusammenstellen, aus dem Bestand und mit Verweisen statt Kopien?
  → „Ja, sehr gerne“ *(Konzept: research/2026-11-wissensformen/fachpaket-ki-werkzeug.md. Bearbeitung in frischem Chat.)*
- **2026-11-07** Soll ich die zwei Änderungen an der automatischen Prüfung (Übersicht selbst bauen; neu prüfen, wenn ein Label gesetzt wird) als PR vorbereiten?
  → „Ja“ *(Noch nicht umgesetzt; Übernahme erst nach Ja, weil .github/ betroffen.)*
- **2026-11-06** Das Material aus dem Nebenchat jetzt über einen PR mit eigener Datei sichern, oder warten, bis der Prüffall neustart-daten ausgewertet ist?
  → „Dann warten wir“ *(Nebenchat zum Leitfaden; gesichert per Prüfauftrag am 07.11. Gesichert am 07.11. auf Prüfauftrag des Eigentümers.)*
- **2026-11-06** Magst du zwei oder drei konkrete Erfahrungen mit dem Tooling erzählen, die dich am meisten gebremst haben?
  → „Deinesota Ansätze sind selbst wieder pattern des leitfadens. Ich hatte ja auch nicht von facettierung gesprochen, sondern tagging. Aber natürlich irgendwelche Relationen. Ich will und wenn ich dich richtig verstehe dem leitfaden beim wachsen zuschauen können. Das tagging system erlaubt mir eine intuitive nuederschwellige Orientierung, Navigation und Vermittlung und wird zum Werkzeug für Erkenntnisgewinn. Meine Erfahrungen und fragen habe ich dich schon in fülle dokumentiert!“ *(Nebenchat zum Leitfaden; gesichert per Prüfauftrag am 07.11. Die Frage war überflüssig: Erfahrungen und Fragen standen schon in f20 und im Intent.)*
- **2026-11-06** Ich schreibe das Zielbild-Dokument auf den Leitfaden um; die Entwurfsprinzipien bleiben als erste Einträge. Soll ich das so machen?
  → „Ja, ein Anfang, du verfehlst aber meinen intent, den wir am ende der Konzeption herausgearbeitet haben. Ki steht nicht im Zentrum“ *(Nebenchat zum Leitfaden; gesichert per Prüfauftrag am 07.11.)*
- **2026-11-06** Soll der Leitfaden „Entwurfsarbeit“ heißen und so gebaut werden, mit der KI als einer Kategorie?
  → „Ich will ein organisches wachsendes dynamisches System haben, und ich glaube durch ki wird möglich“ *(Nebenchat zum Leitfaden; gesichert per Prüfauftrag am 07.11. Der Name ist damit nicht entschieden.)*
- **2026-11-06** „Übergeordnete Codeskills“: a) Code-Verständnis für dich oder b) Skills für die KI? Ich vermute a.
  → „Du hast mich nicht verstanden.. wir könnten den leitfaden auf entwurfsarbeit erweitern.. dann wird ki zum Werkzeug. Genauso wie code, generisches oder parametrisches design, gestaltgesetze, infoarchitektur.. ist das zu groß“ *(Nebenchat zum Leitfaden; gesichert per Prüfauftrag am 07.11. Die Frage nach den Codeskills selbst blieb offen.)*
- **2026-11-06** Schritt 1, angepasst: Nachtrag in 0032 (vier Anforderungen, Leitfragen im Wortlaut), die 24 Einträge generisch mit Facetten, Abdeckungsmatrix – passt Schritt 1 so?
  → „Für mich ist der leitfaden einfach das erschließen eines werkzeuges zur entwurfsarbeit mit der ki. Design systeme etc. Sind vlt. In einer anderen Leitfaden Kategorie anzusiedeln, Schnittstellen wären dann json strukturen und mcp.. vlt. Braucht der Leitfaden auch übergeordnete codeskills“ *(Nebenchat zum Leitfaden; gesichert per Prüfauftrag am 07.11.)*
- **2026-11-06** Passen die Facetten? Nenne mir drei bis fünf echte Fragen, mit denen du im Leitfaden suchen würdest.
  → „Keine ahnung, es geht mir um allgemeine fragen und verständnis zur ki, der Arbeitsteilung zwischen mensch und Maschine. Wir gestalten wir sie, was heißt das konkret in meinem versuch komplexe werkzeuge zu bauen? Welche Ansätze sind aber auch im kreativen und visuellen kontext mit der ki sota. Banal sind design systeme, mcp, keine Ahnung anderes tooling und workarounds.. wie kann ich die ki steuern ( prompts, git, issues) Ich will maximale Entlastung, ich möchte mich auf kreatives arbeiten konzentrieren, statt die ki babysitten und dabei zu versagen. Tokenokönomie, wie halte ich Projekte maximal günstig, ohne Qualität zu reduzieren? Wie baue ich Schwergewichtige Werkzeuge statt prosa, welche Strukturen braucht die ki, welche Struktur men braucht der Mensch, wo können / müssen sie transparent sichtbar werden.. wo braucht es Schnittstellen. Auch hier, wo ist der traidoff zu pflegbar, nachhaltig, tokeneffizient, basierend auf giten engineering prinzipien Das ganze sollte ganzheitlich und systematisch verstanden werden“ *(Nebenchat zum Leitfaden; gesichert per Prüfauftrag am 07.11.)*
- **2026-11-06** Wohin mit den Laborbelegen (Feld labor)? Empfehlung: Der Leitfaden nennt bekannte Anwendungen (Known Uses) aus der Literatur; die Laborbelege wandern in die Pilotdaten und verweisen auf den Eintrag.
  → „Zu 1 ja“ *(Nebenchat zum Leitfaden; gesichert per Prüfauftrag am 07.11.)*
- **2026-11-06** Zwei neue Einträge (Arbeite parallel nur an getrennten Dingen; Gib Ergebnisse über das Repo weiter, nicht über dich) in leitfaden/eintraege.json, eine Zeile unter „Änderungen“ und CooperBench im Korpus – passt das so?
  → „Bitte las den Leitfaden generisch!! Keine Beispiele aus unserer Arbeit. Tage ihn, damit wir die regeln des Leitfadens koformtabel durchsuchen können. Prüfe auf sota interaction pattern und informationsarchitektur. Organisiere dir diese Anweisungen passfähig“ *(Nebenchat zum Leitfaden; gesichert per Prüfauftrag am 07.11. Danach im selben Chat: „Verwende auch Fachbegriffe oder verweise, der begriff oder ansatz des .. pattern wurde weichgespült“.)*
- **2026-11-06** Soll ich PR #135 übernehmen und mit Schritt 2 weitermachen?
  → „Ich gebe nächste schritte frei“ *(Gelesen als Freigabe für die Übernahme von #135 und die Schritte 2 bis 4 des Pilots.)*
- **2026-11-06** Soll ich mit Schritt 1 (Schema und Prüfung) anfangen?
  → „Ja“ *(Umgesetzt in #135.)*
- **2026-11-06** Pilot am Thema „Arbeitsweise mit KI“: Einverstanden, mit erstem Entwurf zum Ansehen vor jeder Übernahme?
  → „Ja, achte aber auch flexibele nachaltige, tokensparende und gut pflegbare strukturen und Ansätze“
- **2026-11-06** Soll die einzige Wahrheit des Labors in Git liegen (Dateien und Datensätze mit Schema), ohne eigene Datenbank?
  → „Ja, nur Git (Empfohlen)“ *(Gewählt aus vorgegebenen Antworten.)*
- **2026-11-06** Soll ich das zurücknehmen, damit wir auf sauberem Stand anfangen?
  → „Ja, alles zurück (Empfohlen)“ *(Gewählt aus vorgegebenen Antworten; umgesetzt in #134.)*
- **2026-11-05** Meine Änderungen von heute (Regel 0024, Verzeichnis, Befunde, Projekt-Doc) zurücknehmen und die beiden Fehlerbehebungen behalten?
  → „3 weiß nicht worum es geht“ *(Danach neu und verständlicher gestellt (arbeitsweise-f09).)*
- **2026-11-05** Stufen 1 bis 3 bauen? Ich zeige sie dir vorher als Entwurf.
  → „2 ja“ *(Entwurf #132, nicht übernommen.)*
- **2026-11-05** PR #131 (Leitfaden) übernehmen?
  → „1 ja“
- **2026-11-05** Soll ich diese vier Punkte als Regel ins Labor schreiben? Das wäre eine Regeländerung, deshalb frage ich.
  → „Genau, ganz wichtig, transparenz und Unsicherheit sichtbar der ki sichtbar machen sind ganz wichtig für mich, was ist da sota. Also nicht lösung um jeden Preis“ *(Gemeint: Freigabe nur im laufenden Chat. Keine ausdrückliche Zustimmung zur Regel; Entwurf #132 ist geparkt.)*
