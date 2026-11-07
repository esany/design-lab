# Arbeitsweise mit KI · Wissensformen — Übersicht

> Erzeugt von `node tools/build.mjs` aus `daten/arbeitsweise.json` und dem Merkzettel
> `anschluss/arbeitsweise.md`. Nicht von Hand ändern. Modelle lesen die Daten, nicht diese Seite.

**Stand:** Drei Stränge (07.11.): Prüfstand – Leitfaden-Sicherung geprüft und vorgelegt, Auswertung der Testeinträge als Entwurf, nicht gegengelesen; Leitfaden – Leitfaden-Sicherung mit Bericht, ohne Konflikt, nicht übernommen; KI-Fachpaket – Konzept, Entwurf freigegeben.

**Nächster Schritt:** Der Eigentümer entscheidet über die Leitfaden-Sicherung (#143); Claude macht im Prüfstand mit der automatischen Prüfung weiter (Abschnitt „Stränge und Reihenfolge“); das KI-Fachpaket erst nach dem Leitfaden.

## Offene Fragen an den Eigentümer (6)

- **arbeitsweise-f01** Radar als Matrix (Empfehlung) oder Kreis? *(gestellt 2026-11-05)*
- **arbeitsweise-f02** Gemeinsame Issue-Prüfung zuerst im Labor bauen? *(gestellt 2026-11-05)*
- **arbeitsweise-f03** Befund zu paleo-type auf #408 notieren (dort gilt Pause)? *(gestellt 2026-11-05)*
- **arbeitsweise-f04** Dürfen Fremde im öffentlichen Labor Issues anlegen? *(gestellt 2026-11-05)*
- **arbeitsweise-f16** Soll der Leitfaden die Ansicht des Fachpakets „KI als Werkzeug“ werden (Änderung von 0032)? *(gestellt 2026-11-07)*
- **arbeitsweise-f17** Lief Codex für #141 im Reiter „Codex“ der ChatGPT-App (Cloud) oder in einem normalen Chat? *(gestellt 2026-11-07)*

## Aussagen

### Belegt (13)

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

### Abgeleitet (9)

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

### Nicht belegt (1)

- **arbeitsweise-a23** Astra (ChatGPT) kann Code ausführen und über den GitHub-Connector schreiben.
  *Grenze:* Angabe des Eigentümers im Chat vom 06.11.; im Pilot (Schritt 4) zu prüfen.

## Beantwortete Fragen (11, neueste zuerst)

- **2026-11-07** Darf ich das Fachpaket „KI als Werkzeug“ als Entwurf zusammenstellen, aus dem Bestand und mit Verweisen statt Kopien?
  → „Ja, sehr gerne“ *(Konzept: research/2026-11-wissensformen/fachpaket-ki-werkzeug.md. Bearbeitung in frischem Chat.)*
- **2026-11-07** Soll ich die zwei Änderungen an der automatischen Prüfung (Übersicht selbst bauen; neu prüfen, wenn ein Label gesetzt wird) als PR vorbereiten?
  → „Ja“ *(Noch nicht umgesetzt; Übernahme erst nach Ja, weil .github/ betroffen.)*
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
