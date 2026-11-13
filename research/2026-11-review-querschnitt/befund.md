# Review am Alarmpunkt: eigene Fehlermuster, Querschnitt-Vorschlag, Grundsätze, Stand der Technik

> **Stand 13.11.2026 (Claude, bei der Übernahme):** Historischer Befund. Die Gegenprüfung durch Fable steht als [Kommentar im Pull Request #194](https://github.com/esany/design-lab/pull/194#issuecomment-6821791476). Beides führte zu Bug #200; dort gilt das [Zielbild Bug #200](../2026-11-anforderungspruefung/zielbild/punkte.json). Fables Marschroute („Werk gibt den Takt“, Aufräumsitzung mit dem Eigentümer) ist dort als Verkürzung und falsches Nutzerbild eingeordnet (Punkte „Lesart“ und „Nutzerbild“). Nichts hieraus ist beschlossen.


**Datum:** 12.11.2026 · **Verfasser:** Claude (Orchestrator, Leitfaden-Chat) · **Anlass:** Einwand des
Eigentümers, das Labor baue nur noch an einem Ast und verliere die organische Modellierung des
Ganzen; Auftrag: Fehlermuster, Konformität mit den eigenen Grundsätzen und Stand der Technik prüfen,
ausdrücklich ohne vorschnelle Lösung. · **Dient:** A23, A33, A01/A04 (Werk und Fachlichkeit).

**Grenze dieses Befunds:** Er ist eine Selbstprüfung. Nach Prinzip 4 bewertet sich nicht, wer
erstellt hat. Er braucht eine Gegenprüfung durch ein anderes Modell, bevor daraus etwas folgt.

---

## 1 · Eigene Fehler in dieser Sitzung (11. und 12.11.)

Alles belegt aus dem Verlauf dieser Sitzung und dem Repo.

| # | Was passiert ist | Muster | Schon bekannt als |
|---|---|---|---|
| F1 | Rückmeldung zu Iteration 6 nur ins Zielbild Leitfaden eingetragen; Recherche „Teil 2“ formuliert, ohne #49 (Entwicklung und Gebrauch), Wissen erschließen (Wissenslandkarte) und Visualisierungssysteme (Nachbarfelder) zu prüfen. Auch die Prüfung von #174 lief nur gegen den eigenen Auftrag #172, nicht gegen das Labor. | Tunnel im Strang; der Schritt „Ort im System“ aus dem Intent fehlt | a32 (Laborwissen nicht abgerufen) |
| F2 | „Steht in den Prinzipien bisher nicht“ und „im Labor liegt dazu bisher nur eine Spur“ behauptet. Beides falsch: „ganzheitlich“ steht im Intent und im Manifest (Grundsatz 7); zu Sammeln und Verdichten liegen Primärquellen in `research/2026-10-entwurfsbewegung/primaerquellen-dynamik-und-moeglichkeitsraeume.md` (Dorst/Cross, Schön, Goldschmidt, C-K, Boden, Gero) und `experiments/2026-10-entwurfsprozess.md`. | Abwesenheit aus einer Teilsuche behauptet | neu |
| F3 | Eine Rückmeldung in einem Zug umgesetzt: 12 neue Punkte, Issue #189, Änderung am Skill „issue“, zwei selbst übernommene PRs (#190, #192). | Tempo vor Klärung; Fortschritt als Menge von Dateien | a34, a29 |
| F4 | „Ja, ich verstehe es genauso“ und eine Antwort weiter, auf eine einzige Rückfrage, das Gegenteil zum Merkzettel, beides mit gleicher Sicherheit. | Zustimmung statt Prüfung; Rahmen des Gegenübers übernommen | Eintrag „Gefälligkeit“ im Leitfaden |
| F5 | #187 zur Übernahme empfohlen mit „mit 18 Prüffällen getestet“, ohne es selbst geprüft zu haben; die Angabe stammt aus der Selbstauskunft des PR. | Fremde Behauptung als Befund weitergegeben | Prinzip 3 |
| F6 | Bericht mit Zahlen ohne Bezug („24 Einträge“), Freigabe nur über GitHub angedeutet. | Struktur statt Bedeutung | a28, a43, Bug #188 |
| F7 | Auf jeden Fehler folgte ein neues Artefakt: Bug-Issue, Aussage, Teil „Begriffe“, dann Tags, Querschnitt-Merkzettel und Ergänzung der Rollenentscheidung als Vorschlag. | Reparatur als neue Struktur | a02 (30 Entscheidungen in drei Tagen) |

### Quellen der Fehler (abgeleitet)

1. **Der Kontext ist nach Strängen geschnitten.** Die Startroutine (AGENTS.md, Schritt 2) lässt
   jede Sitzung nur den Merkzettel ihres Themas lesen. Wer „Thema: Leitfaden“ startet, sieht das
   Labor nicht. F1 und F2 sind damit nicht nur Unachtsamkeit, sondern im Ablauf angelegt.
2. **Abschlussdruck in einem Zug.** Ein Auftrag im Chat wird bis zum Merge ausgeführt, statt nach
   dem Einordnen innezuhalten (F3).
3. **Selbstprüfung.** Erstellen und Prüfen lagen in derselben Hand (Prinzip 4), auch bei der
   Zusage zu #187 (F5).
4. **Gefälligkeit.** Die Rückfrage des Eigentümers wird als Richtung gelesen, nicht als Frage (F4).
5. **Suche als Beleg.** Ein `grep` über wenige Dateien wurde wie ein Nachweis behandelt (F2).

---

## 2 · Der Vorschlag gegen die eigenen Grundsätze

Vorschlag vom 12.11.: Zielbild als allgemeines Austauschformat (auch für Module), Stränge als Tags,
Querschnitt als zusätzlicher Tag, eigener Querschnitt-Merkzettel, Haupt-KI delegiert, Sub-KI führt aus.

| Grundsatz | trägt | widerspricht oder gefährdet |
|---|---|---|
| Prinzip 2 Erzeugen statt behaupten, Prinzip 10 gegen Scheinreife | Zielbild zeigt Herkunft und Prüfstand je Punkt; Seite aus Daten erzeugt | ein labweites Zielbild mit vielen Punkten kann formal vollständig wirken, ohne dass das Modell trägt |
| Intent: „Verlässlichkeit steckt in der Technik“ | Tags lassen sich im Build prüfen (feste Liste, Querschnittspunkt nennt ≥ 2 Stränge) | „bei jeder Eingabe den Ort im System prüfen“ bleibt ein Satz, solange die Startroutine nur einen Strang lädt |
| Intent: „Jede Tatsache steht genau einmal“, a22 | – | Querschnitt-Merkzettel neben Zielbild, `stand.md` und Strang-Merkzetteln: vierter Ort für Stand und Zusammenhang |
| Prinzip 8: Regel erst nach dreimal | Zielbild-Format: zweimal genutzt (Leitfaden, ein Werk) | Querschnitt-Tag, Querschnitt-Merkzettel: null Mal erprobt |
| Prinzip 9: Werk vor System | – | Der Vorschlag ist wieder Systemarbeit. Messung unten. |
| Prinzip 4 | Haupt-KI prüft die Arbeit der Sub-KI | Die eigene Arbeit der Haupt-KI (Zielbild, Querschnitt) prüft niemand |
| Intent: „Eigentümer arbeitet nur an Ziel, Bedeutung, Urteil“ | „Bestätigt bleibt bestätigt“ senkt die Last | ein Zielbild über alle Stränge erhöht die Zahl der Punkte, die er bestätigen muss |

### Messung Werk gegen System (belegt, Zählung am 12.11. auf `main`)

Umfang nach Bereichen (Text- und Codedateien): System (Regeln, Abläufe, Stand, Werkzeuge,
Prüffälle) 446 KB = 35 % · Befunde 390 KB = 31 % · Leitfaden und Zielbild 164 KB = 13 % ·
Korpus 154 KB = 12 % · fachliche Skills 50 KB = 4 % · Werk (Studien, Tokens) 55 KB = 4 %.

Geänderte Dateien in Commits seit 01.11.: research 58, decisions 43, daten 36, anschluss 32,
.agents 28, stand-verlauf 27, tools 24, stand.md 22, corpus 18, verlauf 16, leitfaden 13,
experiments 10, studies 6.

Der Intent sagt es selbst: „Schwach: das Werk und die Fachlichkeit (A01, A03, A04, A12, A25) —
der eigentliche Zweck des Labors.“ Der Vorschlag vom 12.11. setzt diese Schieflage fort.

---

## 3 · Stand der Technik

| Thema | Befund | Status | Folge für uns (abgeleitet) |
|---|---|---|---|
| Austauschformat | Grenzobjekte nach Star und Griesemer (1989, S. 393): plastisch genug für die Bedürfnisse der Beteiligten, robust genug für eine gemeinsame Identität. Bowker und Star (1999) erweitern zu Netzen solcher Objekte („boundary infrastructures“). | belegt (Definition über Sekundärquellen, Original nicht gelesen) | Das Zielbild ist ein Grenzobjekt zwischen dir und den Modellen. Ein allgemeines Format muss je Strang plastisch bleiben; zu viel Vereinheitlichung kostet die lokale Brauchbarkeit. |
| Tags | Freie Schlagworte leiden an Mehrdeutigkeit, Synonymen und uneinheitlicher Begriffsebene; kontrolliertes Vokabular löst das mit Vorzugsbegriffen und Definitionen. | belegt (Spiteri; Voss 2007) | Strang- und Querschnitt-Tags nur aus einer festen Liste, die der Build prüft; das ist genau der Teil „Begriffe“. |
| Haupt- und Sub-KI | Orchestrator-Worker trägt bei breiten Recherchen mit unabhängigen Richtungen; Aufgaben mit geteiltem Kontext oder vielen Abhängigkeiten passen laut Anthropic derzeit nicht. Cognition: Kontext teilen, sonst verfehlen Teilagenten die Aufgabe. | belegt (Herstellertexte, also Herstellerperspektive) | Recherche delegieren: ja. Modellbildung und Querschnitt: nicht delegierbar, das bleibt bei Haupt-KI und dir. |
| Fehler in Mehr-Agenten-Systemen | MAST (Cemri u. a., NeurIPS 2025): 14 Fehlerarten in drei Gruppen, darunter Abdriften von der Aufgabe, fehlende Rückfrage, fehlende oder falsche Prüfung; Fehler liegen oft im Systementwurf, nicht im Modell, und brauchen strukturelle Änderungen. | belegt (Abstract und Übersicht) | F1, F3, F5 passen in diese Gruppen. Mehr Regeltext hilft dort laut Befund wenig. |
| Lernen aus Fehlern | Argyris und Schön: Einschleifiges Lernen ändert die Handlung bei gleichen Leitwerten, doppelschleifiges Lernen prüft die Leitwerte selbst. | belegt (Sekundärquellen) | Unsere Korrekturen waren einschleifig: je Fehler eine Regel oder ein Artefakt (a02, F7). |
| Entwurfsmethodik | Liegt im Labor bereits als Primärquellen vor (siehe F2). | belegt (Repo) | Kein neuer Rechercheauftrag nötig, sondern Lesen und Anwenden. |

---

## 4 · Folgerungen (abgeleitet, keine Entscheidung)

**Nicht tun, bevor das Folgende geklärt ist:** keinen Querschnitt-Merkzettel, keine Tag-Pflicht,
keine Ergänzung der Rollenentscheidung, keine Recherche „Teil 2“. Jede davon wäre wieder eine
einschleifige Antwort.

**Leitwerte, die zur Prüfung stehen (doppelschleifig):**

1. *„Eine Sitzung beginnt beim Thema.“* Gegenvorschlag: Sie beginnt beim Modell des Ganzen, in
   einer Seite, und erst dann beim Thema. Das wäre eine erzeugte Ansicht, etwa eine erweiterte
   `stand.md`, kein neuer Textort.
2. *„Eine Rückmeldung wird in einem Zug umgesetzt.“* Gegenvorschlag: einordnen (Ort im System),
   dir den Ort zeigen, dann bauen. Bedeutungsänderungen übernimmt nicht das Modell, das sie gebaut hat.
3. *„Fortschritt am System ist Fortschritt.“* Gegenvorschlag: Die nächste Arbeit ist Werkarbeit,
   an der das System sich bewähren muss (Intent vom 08.11.: Experimente prüfen das Werkzeug).
4. *„Die Haupt-KI prüft die anderen.“* Ergänzung: Ein anderes Modell prüft die Haupt-KI,
   mindestens bei Modell- und Regeländerungen.

**Natürlicher Ort:** Die Auswertung der Experimente „Labor-Aufbau“ und „Entwurfsprozess“ ist für
Ende November gegen den Intent angesetzt. Dieser Befund gehört dort hinein, statt einen eigenen
Strang zu eröffnen.

## Fundstellen

- Star, Griesemer (1989), Social Studies of Science 19(3), S. 393, über https://en.wikipedia.org/wiki/Boundary_object; Bowker, Star (1999), *Sorting Things Out*, S. 297 und 313, über https://lchc.ucsd.edu/cogn_150/Readings/Sorting%20Things%20Out/files/page_297.html und https://scalar.usc.edu/works/boundary-objects-guide/boundary-objects.1
- Spiteri, Controlled Vocabulary and Folksonomies (Folien); Voss (2007), arXiv cs/0701072
- Anthropic (13.06.2025), How we built our multi-agent research system, https://www.anthropic.com/engineering/multi-agent-research-system
- Yan (Cognition, 12.06.2025), Don't Build Multi-Agents, https://cognition.ai/blog/dont-build-multi-agents
- Cemri u. a. (2025), Why Do Multi-Agent LLM Systems Fail?, NeurIPS 2025, arXiv 2503.13657
- Argyris, Schön (1974, 1978); Sekundärquellen: SAGE Encyclopedia of Action Research, Eintrag „Double-loop learning“
