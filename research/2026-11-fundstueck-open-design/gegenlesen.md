---
dient: A01, A04, A10, A26, A27
datum: 2026-11-14
issue: "#246"
status: unabhängiges Gegenlesen; keine Skill-Änderung
---

# Gegenlesen: OpenDesign und der Fundstück-Ablauf

**Lesart:** Ich prüfe die Korrektur einer wiederholten Unterschätzung, nicht die Attraktivität der OpenDesign-App. Maßstab ist, ob die neue Bewertung und der geänderte Ablauf fachlichen Ertrag auch dann erkennen, wenn eine Installation nicht infrage kommt.

## In fünf Sätzen
Die neue Bewertung trennt den Wert des Wissens von den Risiken der App und behebt damit den wichtigsten Fehler. Fünf der sechs genannten Ursachen sind im dokumentierten Ablauf gut nachvollziehbar; die Ursache „abgeschnittene Seite“ ist im Befund behauptet, aber ohne hier unabhängig überprüfte vollständige Zählung. Die Bestandteile sind sinnvoll getrennt, doch bei gstack fehlt weiterhin die fachliche Sichtung und bei den Katalogzahlen ist der Prüfstand datumsabhängig. Der Skill würde auch ein Fachbuch als Fundstück erkennen, kann aber kleine Fundstücke mit zu vielen technischen Pflichtfragen belasten. Ob der veränderte Skill Wiederholungen *tatsächlich* verhindert, ist ohne frischen Blindlauf nicht belegt.

**Lesestand:** AGENTS.md; Skill `fundstueck` vollständig; Befund OpenDesign §§8–9; Prüffallerwartung; Fundstück-Passung; Issue #98 vollständig; keine App installiert, keine Quellcode-Auditierung.

## 1. Sechs Ursachen – unabhängige Prüfung

| Ursache in §9 | Urteil und Status | Fundstelle / Grenze |
|---|---|---|
| 1. Gedächtnis nicht gelesen | **Tragfähig, belegt**: #98 ist vom 29.10.; dort sind Astra-Gegenlesen und gstack-Blick als unerledigte Aufnahme dokumentiert. **Nicht belegt** ist, ob der ausführende Lauf das Issue technisch tatsächlich nicht geöffnet hatte. | [#98](https://github.com/esany/design-lab/issues/98), „Aufnahme“; `fundstueck-passung/befund.md` §3 |
| 2. Wert mit Übernahme verwechselt | **Tragfähig, abgeleitet**: #98 empfiehlt „nicht installieren“ und „beobachten“, obwohl er zwei Arbeitsmuster nennt; die neue Trennung `Ertrag / Integrationsgrad / Status` wirkt gegen diesen Kurzschluss. Kein Nachweis eines einzelnen psychischen Motivs. | #98 „Vorschlag“; Skill Schritte 6–8 |
| 3. App-Risiko färbt Wissenswert | **Tragfähig, belegt für die Textverschiebung, abgeleitet für Ursache**: #98 diskutiert Datenwege und Marketing breit und behandelt Katalog/Methode nur punktuell. Die Risiken gelten nicht automatisch für offline gelesene Methoden. | #98 „Sichtung“ gegenüber Befund §9 |
| 4. Bedarf nur gegen Intent-Liste | **Teilweise, abgeleitet**: Fehlendes Feld UX/IA wurde im Labor erkannt und inzwischen 0037 beschlossen. Schon A01/A04 erlaubten eine weite fachliche Prüfung; nicht allein der alte Skill, auch seine Ausführung war zu eng (Gegenthese aus `fundstueck-passung` §3). | Entscheidung `0037`; `fundstueck-passung/befund.md` §3 |
| 5. Flache Sichtung (164/296) | **Plausibel, aber als Zahl nicht unabhängig belegt**: §9 nennt die Begrenzung; weder Abrufstand noch reproduzierbarer Katalog-Snapshot wurde hier verglichen. Die Zahl 296 nicht als stabilen Ist-Wert behandeln. | OpenDesign-Befund §9; vollständiger Katalog nicht erneut gezählt |
| 6. Kein Gegenlesen | **Tragfähig, belegt**: #98 sieht Astra ausdrücklich vor; in der hier gelesenen Akte gibt es kein dokumentiertes Ergebnis dieser Aufnahme. Die Nichtexistenz jeder externen Prüfung lässt sich daraus allein nicht beweisen. | #98 „Aufnahme“; `evals/fundstueck-wert/erwartung.md` |

**Zusätzliche Ursache, abgeleitet:** Der Bewertungsablauf hatte keinen überprüfbaren *Rückweg vom versprochenen Ertrag zum konkreten Auftrag*. #98 wollte gstack und Gegenlesen; die offenen Schritte wurden nicht geschlossen, obwohl erneut dieselbe Sache beurteilt wurde. Schritte 0 und 6 des neuen Skills nennen das jetzt, doch ein automatischer Verweis- und Abschlusscheck fehlt. Nicht als siebte bewiesene Ursache führen: Dafür wäre der ursprüngliche Laufprotokollabgleich nötig.

## 2. Vollständigkeit und Belegqualität je Bestandteil

| Bestandteil | Gegenurteil / Status | Nachweisgrenze |
|---|---|---|
| Katalog | **`abbauen` angemessen, abgeleitet**: Suchstelle und Quelle für Methoden; Quantität beweist nicht deren Qualität. Katalogangaben sind Snapshot, nicht selbst geprüft. | Befund §9; einzelne Einträge nur über das Labor referenziert |
| Designer-skills | **`abbauen` plausibel, abgeleitet**: Arbeitsabläufe als Steinbruch; jedes „Best Practice“ muss gegen Originalbelege geprüft werden. Die Beschreibung der Sammlung selbst ist kein Wirkungsbeleg. | Befund §§8–9; [Projekt-Index](https://github.com/Owl-Listener/designer-skills/blob/main/INDEX.md), nur Index gelesen |
| `craft/` | **Negativfolie sinnvoll, abgeleitet**: Regeln ohne erkennbare Geltungsgrenze sind ein Prüfgegenstand; nicht jedes einzelne `craft`-Regelwerk damit pauschal entwerten. | Befund §8.4/§9; keine Vollprüfung aller Regeldateien |
| `lint-artifact` | **Pilot angemessen, abgeleitet**: ein Prüfwerkzeug darf nur Muster melden, nicht Gestaltungsqualität bescheinigen. | §9; Auftrag #247, keine Probe ausgeführt |
| `design-brief` | **Negativfolie möglich, aber Überabwertung droht, abgeleitet**: Parameter sind für Briefing und Vergleich nützlich; problematisch erst, wenn acht Dimensionen den Entwurf ersetzen. | Befund §§8–9, keine Wirksamkeitsstudie |
| `od:`-Kopf | **Pilot angemessen, abgeleitet**: Eingaben, Ergebnis und Abhängigkeiten können ladbare Abschnitte fördern; Versions-/Kompatibilitätskosten prüfen. | §9; 0038 |
| App/Cloud | **Nicht installieren derzeit begründbar, aber `verwerfen` zu endgültig, abgeleitet**: §9 behauptet Telemetrie-/Abo-Risiken, eine aktuelle technische Auditierung liegt hier nicht vor. Präziser: „als aktive Integration jetzt verwerfen; bei neuer Datenlage erneut prüfen“. | §9; Risiko-Angaben nicht selbst technisch verifiziert |
| gstack | **Unzureichend bewertet, belegt**: schon #98 nennt zwei spezifische Arbeitsmuster; neuer Status `beobachten` ohne eigenen Lese- und Abschlussauftrag lässt denselben Leerlauf zu. | #98 „Aufnahme“, §9 letzte Zeile |

**Übergreifende Lücke, abgeleitet:** Ein Katalog kann selbst Quelle, Aggregator und Suchoberfläche zugleich sein. Die Bewertung sollte die Originalquelle jeder übernommenen Methode und deren Lizenz/Stand getrennt nachverfolgen. Die Sammlung ist kein Ersatz für die Primärquelle.

## 3. Gedanklicher Transfer: ein Fachbuch statt einer App

**Probe (hypothetisch, kein realer Prüflauf):** Ein Fachbuch zur Informationsarchitektur mit Forschungsreferenzen, kritischen Praxisbeispielen und einer umstrittenen „Faustregel“.

1. **Schritt 0** findet frühere Notizen im Korpus und offene Lektüreaufträge – **abgeleitet**: vermeidet Doppelrecherche, sofern die Suche tatsächlich erfolgt.
2. **Schritte 1–3** erkennen Kapitel, Modelle, Beobachtungen, Fallstudien und offene Fragen als Bestandteile; A01/A04 plus Feldprüfung machen den fachlichen Nutzen sichtbar – **abgeleitet**.
3. **Schritte 4–5** fragen jedoch auch nach Telemetrie, Betrieb und Rückbau. Bei einem gedruckten Buch sind diese Dimensionen **nicht anwendbar**, nicht „durchgefallen“; eine Pflicht-Tabelle für alle Fälle ist zu schwer – **abgeleitet**.
4. **Schritte 6–8** lassen die Regel als **Negativfolie**, Belegtexte als **Korpus-/Fachpaket-Kandidaten**, ungeklärte Praxis als **Pilot** erfassen. Kein Kapitel wird allein durch Nennung zum Kanon – **abgeleitet**.
5. **Gegenbeispiel:** Eine lebende Fachperson statt Buch: Aussagen, Beiträge, Widersprüche und Quellen getrennt prüfen; personenbezogene Angaben nicht ins öffentliche Repo kopieren. Bei einem bloßen Essay kann der vollständige Neun-Schritte-Prozess unverhältnismäßig sein – **abgeleitet**.

**Grenze:** Dies ist eine Papierprobe anhand des Skilltexts, keine unabhängige Ausführung in einem frischen Modell. Deshalb ist eine behauptete Schutzwirkung **nicht belegt**.

## 4. Fazit und höchstens drei Punkte für Claude

1. **Abgeleitet:** Status `verwerfen` für App/Cloud ausdrücklich zeit- und integrationsbezogen formulieren, nicht als Aussage zum Wissenswert; Telemetrie technisch nicht als unabhängig geprüft ausgeben.
2. **Abgeleitet:** gstack-Arbeitsmuster aus #98 mit überprüfbarem Ergebnis abschließen; bei Katalogmethoden Originalquellen statt aggregierter Etiketten prüfen.
3. **Abgeleitet:** Den neuen Skill blind an *zwei unterschiedlichen* Fundstücken testen, darunter ein kurzer Fachtext; nicht anwendbare technische Prüfungen überspringbar machen und Mehraufwand messen.

## Geprüft / nicht geprüft

**Geprüft:** Textlogik der sechs Ursachen, #98 gegen §9, Bestandteiltabelle, Prüffallerwartung, hypothetischer Transfer. **Nicht geprüft:** vollständiger Katalog-Snapshot, Originalcode/App-Telemetrie, Lizenzprüfung jedes Unterprojekts, unabhängiger experimenteller Blindlauf, tatsächliche Verbesserung der Bewertungsquote. **Offen:** drei Punkte oben; keine neue Regel, kein Skill geändert.
