---
dient: A12, A13, A17, A31, A33, A34
datum: 2026-10-29
status: Plan des Orchestrators, nach Antwort des Eigentümers umzusetzen; Recherche-Stand 29.10.2026
bezug: intent.md (Leitbild), research/2026-10-audit-zusammenarbeit/, research/2026-10-lesekosten/
---

# Umbau zum Organismus: Stand der Technik, Plan, Zuständigkeit, Kurs halten

## 1 · Ist das trivial? Nein.

Drei Hindernisse, nur eines davon ist Kommunikation:

1. **Die Werkzeugschicht fehlt** (*belegt*, Befunde #56): Fast alles, was gelten soll, steht als
   Text. Das ist Bauarbeit, keine Formulierungsfrage, und kostet einige Arbeitssitzungen.
2. **Modelle erzeugen von sich aus Text statt Mechanik** (*belegt*, Muster H, #65). Der
   Orchestrator muss jede Eingabe aktiv in Technik übersetzen und widersprechen, wenn eine Regel
   entsteht. Das ist der Kommunikationsanteil, und er liegt beim Orchestrator, nicht beim Eigentümer.
3. **Fachwissen in fremden Domänen prüfen, ohne Experte zu sein**, ist grundsätzlich schwer
   (*abgeleitet*). Lösbar ist es nur teilweise: Status und Quelle je Aussage, Gegenprüfung durch
   ein anderes Modell, Vorführen statt Beschreiben, eine Liste „Was wir nicht wissen“. Eine Restunsicherheit
   bleibt; das System muss sie zeigen statt sie zu verdecken.

## 2 · Stand der Technik (Recherche 29.10.2026)

| Strömung | Kern | Fürs Labor |
|---|---|---|
| **Harness Engineering** (OpenAI, Anthropic, LangChain, Fowler) | Umgebung schlägt Modell und Prompt; Doku wird zu harten Prüfungen; Repo ist einzige Wahrheit | Werkzeugschicht bauen; Prüfungen mit Reparaturhinweis |
| **Kontextdateien zurückhaltend** (Gloaguen u. a., ETH Zürich, arXiv 2602.11988, Abstract *belegt*) | Kontextdateien senken die Erfolgsquote eher, als dass sie sie heben, und erhöhen die Kosten um über 20 %; unnötige Vorgaben erschweren Aufgaben; menschlich geschriebene Dateien sollen nur minimale Vorgaben enthalten | Richtung *belegt*: Kern minimal. Die Zahl „≈ 100 Zeilen“ ist eine Praktiker-Faustregel (*nicht belegt*), hier nur als Projektgrenze |
| **Kontextverfall** (Sekundärquelle, Original nicht geprüft: *nicht belegt*) | erfolgreiche Agentenläufe bleiben meist unter 20–30 k Tokens | kleine Aufträge, frischer Chat je Einheit |
| **Spec-driven Development** (GitHub Spec Kit, Kiro, OpenSpec) | Absicht lebt in der Spezifikation; Abnahme als prüfbare Bedingung | Issues als Spezifikation mit prüfbarem „Fertig, wenn“ |
| **LLM-Wiki** (Karpathy, April 2026) | unveränderliche Quellen → vom Modell gepflegtes Wiki → Schema-Datei; Operationen: aufnehmen, abfragen, „lint“ | Vorbild für Domänenaufbau: Korpus = Quellen, Fachpaket = Wiki, Build = Lint |

Quellen am Ende.

## 3 · Ziele für ein sparsames Repo (messbar)

Die Grenzwerte sind **Projektziele des Labors**, keine allgemeinen Qualitätsschwellen (Einwand aus der paleo-type-Analyse, 30.10., berechtigt).

| Messwert | heute | Ziel |
|---|---:|---:|
| Lesekosten beim Start | ≈ 10.500 Tokens | ≤ 3.500 |
| `AGENTS.md` | 212 Zeilen | ≤ 100 Zeilen |
| Stellen für den Stand je Thema | bis 6 | 1 (Rest erzeugt) |
| Regeln mit technischer Prüfung | wenige (z. B. `dient:`) | jede, die technisch prüfbar ist |
| Arbeitseinheit | offen | 1 Issue = 1 PR, Chat ≤ ≈ 30 k Tokens Kontext |
| **Eingriffe des Eigentümers** (Rettungen: falsche Fertigmeldung entdeckt, Gegenprobe selbst verlangt, Erfindung gestoppt, maßgebliche Datei erklärt) | nicht gezählt | sinkend, bei gleicher Qualität — **wichtigster Wert** |

## 4 · Umbau: was, wer, warum

**Rollen:** Eigentümer: Ziel, Bedeutung, Urteil, GitHub-Einstellungen · **Claude Opus**:
Architektur, Spezifikation, Prüfung, Widerspruch · **Astra**: Umsetzung (Code, Text, Bestand) ·
**Codex**: nur, wenn ein Auftrag die Grenzen des Chats sprengt (derzeit keiner) · **Claude Sonnet**:
Lesen großer Mengen im eigenen Kontext, nur wenn Astra nicht passt.

| # | Umbau | Schicht | Wer baut | Wer prüft | Bedingung |
|---|---|---|---|---|---|
| U1 | Hauptzweig-Schutz | Werkzeug | Eigentümer (Klicks; Claude ist gesperrt) | Claude liest | — |
| U2 | Stand als Datenquelle, Übersicht erzeugt, Abweichung rot (#103) | Quelle, Werkzeug, Ansicht | Astra | Claude | — |
| U3 | `AGENTS.md` als Index ≤ 100 Zeilen; Inhalte in Skills; jede gestrichene Regel durch Prüfung ersetzt oder archiviert; Neustart-Test `evals/start` | Quelle | Astra nach Spezifikation von Claude | Claude + Prüffall | nach U2; Ja des Eigentümers |
| U4 | Gültige Regeln als erzeugtes Register: Entscheidungen bekommen `ersetzt_durch:` / `geprüft_durch:` im Kopf; abgelöste wandern nach `archiv/` | Quelle, Ansicht | Astra (Bestand), Claude (Vorschlag je Regel) | Eigentümer entscheidet | nach U3 |
| U5 | Issue-Formulare (GitHub YAML) für Auftrag, Fehler, Fundstück: Pflichtfelder statt Freitext | Quelle | Astra | Claude | — |
| U6 | Fundstück-Modus (0031) als Formular + Sichtungsskript + erzeugte Übersicht | alle | Astra | Claude | Ja zu 0031 in dieser Form |
| U7 | Messwerte aus Abschnitt 3 als Skript; Ausgabe in jedem PR und im Pflege-Lauf | Werkzeug | Astra | Claude | nach U2 |
| U8 | Fachpakete maschinenlesbar (Kopf: Quellen, Stand-Datum, Lücken); erzeugte Liste „Was wir nicht wissen“ je Domäne | Quelle, Ansicht | Astra nach Spezifikation von Claude | anderes Modell | nach U7; Grundlage für die spätere Vorlage |
| U9 | Kern als Vorlage herauslösen (für Wissensprojekte) | — | Claude plant, Astra baut | Eigentümer | wenn U2–U8 laufen |

## 5 · Kurs halten

1. **Messwerte mit Schwellen im Build** (U7): steigt `AGENTS.md` über 100 Zeilen oder der
   Start über 3.500 Tokens, wird die Prüfung rot. Eine Abweichung lässt sich dann nicht übersehen.
2. **Kennzahl „Regel ohne Prüfung“** (U4): Der Build zählt gültige Regeln ohne `geprüft_durch:`.
   Die Zahl darf nicht steigen, ohne dass der PR es begründet.
3. **Neustart-Test nach jeder Änderung am Kern** (`evals/start`): Ein frisches Modell muss
   mit dem Kern richtig starten.
4. **Monatlicher Pflege-Lauf** (gibt es schon) meldet die Messwerte im Vergleich zum Vormonat, in
   Worten, mit höchstens drei Fragen.
5. **Widerspruchspflicht des Orchestrators:** Kommt eine Regel als Antwort auf einen Vorfall, schlägt
   Claude zuerst die Prüfung vor, die ihn abgefangen hätte.

## 6 · Gefahren und Korrektur (30.10., nach der Selbsteinschätzung von paleo-type)

Leitsatz, übertragen: **Das gestalterische und fachliche Urteil bleibt beweglich; Verwaltungs- und Herkunftsarbeit wird verlässlich automatisiert.** Nicht das Fach abrüsten, sondern es von Verwaltung entlasten.

| Gefahr | Wo im Labor | Korrektur |
|---|---|---|
| **Abrüsten statt entlasten:** fachliche Unterscheidungen als Ballast behandelt | U3 (`AGENTS.md` 213 → 27 Zeilen); U4 | #110 (Neustart-Test) hat Vorrang vor weiterem Kürzen. U4 ordnet jede Regel in **drei** Klassen: *fachlich* (bleibt, z. B. Belegpflicht, Wahrnehmungssituation, Werk/System, Manifest) · *technisch prüfbar* (→ Prüfung) · *Ritual* (→ Archiv). Gestrichen wird nur die dritte. |
| **Starre Grenzen erzwingen Kürzung** | Build: Merkzettel > 3.000, `stand.md` > 4.000 Zeichen = Fehler | Zeichengrenzen werden **Warnungen**, keine Fehler. Fehler bleiben nur, wo Abweichung sicher falsch ist (Hand-Edit erzeugter Blöcke, geschlossenes Issue als offen geführt). |
| **Zweck aus dem Blick:** nur das System aufgeräumt, keine Entlastung der Gestaltungsarbeit | U1–U9 | Neuer Strang **G1–G4** (unten), je an einem echten Werk erprobt. |
| **Eile:** übernommen vor grünen Prüfungen, Pläne schnell umgeschrieben | Orchestrator, 29.10. | Hauptzweig-Schutz (#40) bleibt die wirksame Antwort; bis dahin keine Übernahme ohne Rücklesen der Prüfungen. |

### Werkzeuge für die Gestaltungsarbeit (Kandidaten; je eigener Auftrag, je an einem Werk erprobt)

| | Werkzeug | Was es tut | Was es nicht darf |
|---|---|---|---|
| G1 | **Werk-Kontextpaket** | Wahrnehmungssituation, passende Fachpakete und Abschnitte, frühere Entscheidungen und Varianten zum Werk; ersetzt Vollkontext | gestalterische Richtung vorgeben |
| G2 | **Messen** | Kontrast (OKLCH/WCAG), Satzqualität (Löcher, Trennungen, Grauwert), Sehwinkel aus Abstand und Größe; Bausteine im Print-Experiment vorhanden | ein Ergebnis „gut“ nennen |
| G3 | **Varianten rendern und vergleichen** | Varianten nebeneinander, mit Messwerten, als Screenshot | die Auswahl treffen |
| G4 | **Bereitschaft für Druck/Abgabe** | Schriften, Farbraum, Beschnitt, Auflösung, offene Punkte | „fertig“ erklären; das bleibt Urteil des Eigentümers |

## Quellen

- Harness Engineering, Übersicht: https://www.agentpatterns.ai/agent-design/harness-engineering/
- Harness Engineering, Glossar: https://www.ministryoftesting.com/software-testing-glossary/harness-engineering
- Kontextdateien (ETH, MSR), Zusammenfassung: https://readysolutions.ai/guides/context-engineering-for-ai-coding-agents/
- AGENTS.md-Studie (MSR 2026): https://arxiv.org/abs/2510.21413v4
- Spec-driven Development: https://www.truefoundry.com/blog/spec-driven-development-ai-agents · https://www.designnews.com/embedded-systems/a-practical-guide-to-spec-driven-development-with-ai
- LLM-Wiki (Karpathy): https://blog.starmorph.com/blog/karpathy-llm-wiki-knowledge-base-guide · https://notesbylex.com/llm-wiki
