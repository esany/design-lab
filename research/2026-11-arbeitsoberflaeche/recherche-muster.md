---
dient: A01, A04, A05, A07, A14, A18, A22
datum: 2026-11-14
issue: "#237"
status: Recherchebefund; keine Gestaltungsentscheidung
---

# Interaktion und Struktur: UX, KI-assistierende Oberflächen und Arbeitsteilung

**Lesart:** Ich suche belegte Verfahren und Muster für Nutzerforschung, Interaktionsgestaltung und Informationsarchitektur, mit besonderem Blick auf eine Arbeitsoberfläche für Menschen und mehrere KI-Modelle. Ich entwerfe weder eine neue Labor-Seite noch entscheide ich, welche konkrete Oberfläche gebaut wird.

## In fünf Sätzen

Eine KI-Arbeitsoberfläche muss zuerst verständlich machen, worüber der Mensch tatsächlich entscheiden soll, und darf die technische Orchestrierung nicht zu seiner Aufgabe machen. Forschung stützt steuerbare, fehlertolerante Interaktion und nachprüfbare Herkunft, aber eine Erklärung allein macht KI-Ratschläge nicht zuverlässig. Für Nutzerforschung, Navigation und Informationsarchitektur gibt es unterschiedliche Methoden mit unterschiedlichen Prüfgegenständen; keine Faustregel ersetzt einen Test in der konkreten Situation. Fremde Skill-Sammlungen sind nützliche Suchstellen und Negativfolien, aber sie sind keine unabhängig validierten Lehrbücher. Für das Labor folgt ein Fachpaket aus belegter Theorie, situationsgebundenen Regeln und echten Prüfungen an der eigenen Oberfläche.

**Recherche- und Lesestand (14.11.2026):** Repo: `research/2026-11-arbeitsoberflaeche/analyse.md`, `research/2026-11-leitfaden-sota/befund.md` (insb. §§3, 6), `research/2026-11-visualisierungssysteme/befund.md`, `research/2026-11-fundstueck-open-design/befund.md` (§§8–9), Entscheidungen 0037/0038, Belegpflicht und Fachpaket Vermitteln. Extern: offizielle Forschungs- und Normseiten, Abstracts, ausgewählte zugängliche Fachtexte/Methodenseiten und Repositorien. **Keine systematische Volltext-Metaanalyse**, keine Nutzertests, keine Vollsichtung sämtlicher Fremdskills. „Belegt“ belegt, was die Quelle beschreibt oder untersucht, nicht die Wirkung im Labor.

## Quellenregister (konkrete Fundstellen)

| ID | Quelle und Lesestand |
|---|---|
| Q01 | [Amershi et al., Guidelines for Human-AI Interaction, CHI 2019](https://www.microsoft.com/en-us/research/project/guidelines-for-human-ai-interaction/), Forschungsprojekt und Abstract des Papers; 18 Leitlinien, mehrstufige Validierung mit 49 Designpraktikern und 20 Produkten. Kein Labortest. |
| Q02 | [Google PAIR, People + AI Guidebook](https://pair.withgoogle.com/guidebook-v2/chapters), Kapitelübersicht sowie [Mental Models](https://pair.withgoogle.com/guidebook-v2/chapter/mental-models/); Herstellerleitfaden, kein neutraler Wirksamkeitsbeleg. |
| Q03 | [Horvitz, Principles of Mixed-Initiative User Interfaces, CHI 1999](https://doi.org/10.1145/302979.303030), Abstract und [Autoren-Zusammenfassung](https://www.microsoft.com/en-us/research/publication/mixed-initiative-interaction/). |
| Q04 | [Shneiderman, The Eyes Have It, 1996](https://www.cs.umd.edu/~ben/papers/Shneiderman1996eyes.pdf), Referenz zum Visual Information Seeking Mantra; Kern auch im Labor-Befund Visualisierungssysteme §3. PDF im Recherchelauf nicht vollständig gelesen. |
| Q05 | [Naik et al., Exploring Early Adopters' Use of AI Driven Multi-Agent Systems, CHI 2025](https://www.microsoft.com/en-us/research/publication/exploring-early-adopters-use-of-ai-driven-multi-agent-systems-to-inform-human-agent-interaction-design-insights-from-industry-practice/), Abstract; 13 Interviews, explorativer Kontext. |
| Q06 | [Romeo/Conti, Exploring automation bias, 2025/26](https://doi.org/10.1007/s00146-025-02422-7), Abstract einer Übersicht von 35 Studien; Review, keine definitive Regel für alle Kontexte. |
| Q07 | [Beck et al., Bias in the Loop, 2026](https://hdsr.mitpress.mit.edu/pub/nrcn4h7d/release/2), Abstract einer experimentellen Prüfung mit 2.784 Beteiligten in einer spezifischen Verifikationsaufgabe. |
| Q08 | [ISO 9241-210:2019](https://www.iso.org/standard/77520.html), offizielles Abstract (2025 als gültig bestätigt), Normvolltext nicht gelesen. |
| Q09 | [Nielsen Norman Group, Card Sorting vs. Tree Testing](https://www.nngroup.com/articles/card-sorting-tree-testing-differences/), Praxisüberblick, nicht selbst empirisch nachgeprüft. |
| Q10 | [NN/g, Service Blueprinting FAQ](https://www.nngroup.com/articles/service-blueprinting-faq/) und [Journey Mapping 101](https://www.nngroup.com/articles/journey-mapping-101/), Praxisdefinitionen, kein universeller Wirkungsnachweis. |
| Q11 | [NN/g, The 3-Click Rule Is False](https://www.nngroup.com/articles/3-click-rule/), Praxisargument zu fehlender Evidenz für drei Klicks als Grenzwert. |
| Q12 | [W3C, WCAG 2.2, §2.5.8](https://www.w3.org/TR/WCAG22/#target-size-minimum), Normtext, konkret 24 × 24 CSS-Pixel mit Ausnahmen. |
| Q13 | [Owl-Listener/designer-skills, INDEX.md](https://github.com/Owl-Listener/designer-skills/blob/main/INDEX.md) und [README](https://github.com/Owl-Listener/designer-skills), Katalog/Projektbeschreibung, kein Effektivitätsnachweis; Zahlen sind versionsabhängig. |
| Q14 | [OpenDesign-Katalog](https://open-design.ai/de/skills/), Verzeichnis als Suchstelle; hier nur über die Repo-Auswertung §§8–9 quergelesen, nicht jeder Eintrag geprüft. |
| Q15 | [W3C PROV-O](https://www.w3.org/TR/prov-o/), normative Beschreibung von Entität, Aktivität, Agent und qualifizierter Herkunft. |
| Q16 | [Romeo/Conti, Erklärungsgrenzen](https://doi.org/10.1007/s00146-025-02422-7) und [Studie zu irreführenden Erklärungen, 2025](https://doi.org/10.1080/10447318.2025.2574511), Abstracts, Übertragbarkeit auf das Labor offen. |

## 1 · KI-Oberflächen: welche Muster tragen? (Frage 1)

| Muster | Aussage mit Evidenzstatus | Transfer/Prüfgrenze |
|---|---|---|
| **Fähigkeiten und Grenzen erklären** | **Belegt Q01/Q02 (Leitlinien):** Erwartungsbildung, Anpassung im Verlauf, verständliche Fehler und Korrekturmöglichkeiten werden ausdrücklich empfohlen. | **Abgeleitet:** Status „Vorschlag / bestätigt / nicht geprüft“ sichtbar halten; **nicht belegt:** bessere Entscheidungen allein durch Labels. |
| **Gemischte Initiative** | **Belegt Q03 (Konzept/Paper):** Mensch und System ergreifen abhängig von Unsicherheit, Kosten und Situation die Initiative; weder Totalautomatisierung noch ständige Handarbeit ist das Ziel. | **Abgeleitet:** Modelle erledigen Routine, Eigentümer urteilt bei Bedeutung; ein Ticket muss ihn nicht zum Dispatcher machen. |
| **Kontrolle und Erholung** | **Belegt Q01/Q02:** Korrektur, Feedback, Abbruch und Umgang mit Fehlern gehören zur Interaktion. | **Abgeleitet:** vor schwer umkehrbarer Handlung Freigabe, nach einfacher Handlung Rückweg; UI-Belege für tatsächliche Wirksamkeit im Labor fehlen. |
| **Herkunft und Rechenschaft** | **Belegt Q15:** PROV-O modelliert Ergebnis, Aktivität und verantwortlichen Agenten; **nicht belegt**, dass ein Provenienzlabel Wahrheit garantiert. | **Abgeleitet:** Wer hat was aus welcher Grundlage abgeleitet, wer hat geprüft, was ist noch Hypothese. |
| **Kalibriertes statt blindes Vertrauen** | **Belegt Q06/Q07/Q16:** Automatisierungsbias und Übernahmefehler sind relevante Risiken; Erklärungen können sogar irreführen. | **Abgeleitet:** zum Prüfen auffordern, aber nicht jede Aufgabe in manuelle Kontrolle verwandeln. |
| **Überblick, Relationen, Detail** | **Belegt Q04** als Darstellungsheuristik, keine universelle Startreihenfolge; verschiedene Aufgaben verlangen verschiedene Einstiege. | **Abgeleitet:** zunächst nächste relevante Entscheidung, dann Vorgang, dann Gesamtnetz; entspricht bestätigter Laboranforderung `ao-reihenfolge`. |
| **Beobachtbarkeit mehrerer Agenten** | **Belegt Q05 (explorative Fallstudie):** Beteiligte berichten von Herausforderungen der Komplexität, Transparenz und Autonomie. | **Abgeleitet:** Statusübergänge und Verantwortlichkeiten sichtbar; **nicht belegt:** eine bestimmte Karten- oder Zeitachsenoberfläche sei optimal. |
| **Gestufte Offenlegung** | **Belegt Q02** als Empfehlung: schrittweise Einführung; **abgeleitet** für Fortschritts- und Nachweisschichten. | Zu viel versteckte Information könnte kritische Gegenprüfung verhindern; Informationen zum Risiko nicht hinter mehreren Klicks verstecken. |

**Nicht belegt:** Dass eine farbcodierte „Leitwarte“ ohne Nutzertest eine zuverlässige mentale Vorstellung von Agentenarbeit vermittelt. Die Leitwarten-Analogie ist ein Forschungsansatz, keine Laborentscheidung.

## 2 · Der Eigentümer als Gestalter, nicht Orchestrator (Frage 2)

**Belegt, interner Kontext:** `AGENTS.md`, Grundmodell: Der Eigentümer ist Kunde, strategischer Konzepter und Gestalter; das Modell organisiert Issues/PRs; Handy für schnelle Entscheidungen und Rechner zum Erkunden laut `analyse.md` §3.

**Abgeleitete zwei Situationen:**

| Kurz am Handy | Am Rechner erkundend |
|---|---|
| Eine Frage mit Gegenstand, Grund, Alternativen, Folge des Nichtstuns und Empfehlung – nur wenn wirklich Urteilsbedarf besteht. | Arbeitspfad mit Eingabe → Bearbeitung → Ergebnis → Prüfung, Relationen, Quellen und abweichende Befunde. |
| Entscheidung und Rückweg ohne Nummern, technische Repository-Details auf Abruf. | Nachvollziehbare Rechenschaft bis zum konkreten Fund und Versionsstand; mehrere koordinierte Sichten statt bloßes Kennzahlenbrett. |
| Fehler und blockierte, irreversible Vorgänge nicht verstecken. | Unterschied zwischen Hypothese, Ausführung, Prüfung und Freigabe offenlegen. |

**Prüfbar, aber noch nicht getestet (abgeleitet):** Kann der Eigentümer ohne GitHub eine echte Entscheidung treffen und weiß er, was dann passiert? Findet er bei einer strittigen Aussage in höchstens einer klar beschrifteten Vertiefung deren Beleg? Kann er eine bereits bestätigte Entscheidung von einem bloßen Entwurf unterscheiden? Das sind Testfragen, keine behaupteten Ergebnisse.

## 3 · Arbeitsteilung und Zustand ohne Kennzahlen-Dashboard (Frage 3)

**Abgeleitet aus Q03–Q05, Q15 und `visualisierungssysteme/befund.md` §§1–4:**

- **Ereignis statt Kachel:** „Was hat sich seit meinem letzten Blick verändert?“ — Eintrag, Ursache, Auswirkung, Status, nächste Verantwortung. Nicht „5 offene Issues“ ohne Bezug.
- **Beziehungsweg statt Organigramm:** Ein Punkt führt zu seiner Quelle, betroffenen Arbeiten, Entscheidung und Prüfung. Eine Verbindung hat einen benannten Typ, nicht nur eine gezeichnete Linie.
- **Sichten mit derselben Quelle:** priorisierte Eingänge, laufende Arbeit, Zusammenhang. Neue Ansichten dürfen keine neuen Wahrheiten erzeugen.
- **Status als Rolle, nicht als Dekoration:** „Du bist dran“ nur bei Eigentümerentscheidung, „bestätigt“ getrennt von „vorgeschlagen“, „nicht geprüft“ als Text auch ohne Farbe.

**Nicht belegt:** Ob ein Netzdiagramm dem Eigentümer hilft. Eine unüberprüfte Zuschreibung als Linie würde einen falschen Sachverhalt visualisieren; zunächst relationale Liste mit Belegen, Netz erst als geprüfte Hypothese.

## 4 · Fehler und Mittelmaß-Muster (Frage 4)

| Muster | Warum problematisch / Status | Gegenprobe |
|---|---|---|
| „KI hat entschieden, Mensch klickt nur OK“ | **Abgeleitet** aus gemischter Initiative Q03 und Bias Q06/Q07. | Darf der Mensch die Grundlage und Alternative unabhängig prüfen? |
| Ampelfarbe ersetzt Status | **Abgeleitet** aus WCAG Q12 und Labor-Farbsemantik; Farbe allein ist kein ausreichender Kontext. | Eindeutiger Text plus Ort plus semantische Farbe? |
| Vertrauen durch Erklärung behauptet | **Belegt Q06/Q16**: Erklärung kann Übervertrauen und Fehler fördern. | Falsche Empfehlung mit überzeugender Erklärung in kontrolliertem Test vorlegen. |
| Dashboard voller Zahlen ohne Ursache | **Abgeleitet** aus `visualisierungssysteme/befund.md` §4; Dashboard-Forschung ist differenzierter. | Kann eine Zahl in Frage, Entwicklung, Quelle und Handlung übersetzt werden? |
| Versteckte Unsicherheit | **Abgeleitet** aus Q01/Q02/Q15. | Wird ein ungeprüfter Satz von einem bestätigten unterschieden? |
| „Drei Klicks genügen“ | **Belegt Q11:** Drei-Klick-Grenze ist nicht datenbasiert; mehr Klicks sind nicht automatisch schlechter. | Sucherfolg, Irrwege, Verständnis und Aufwand in Tests messen. |
| Starre Persona-/Journey-Schablone | **Abgeleitet** aus Q08–Q10: Artefakte ersetzen keine tatsächliche Nutzerbeobachtung. | Welche reale Aussage / Beobachtung begründet jede Persona oder Phase? |
| Allzweck-Skill ohne Kontext | **Abgeleitet** aus Q13/Q14 und 0038. | Geltungsbereich, Beleg und Prüfgrenze je Regel vorhanden? |

## 5 · Was in das Fachpaket gehört (Frage 5)

**Abgeleiteter Vorschlag, keine Entscheidung:** ein gemeinsames Fachpaket „Interaktion und Struktur“ entsprechend 0037. Fachliche Abschnitte nach *Problemraum statt Softwarewerkzeug*: (1) Nutzerfragen und Beobachtung, (2) Inhalt und Navigation, (3) Zustände, Kontrolle, Rückweg, (4) Mensch-KI-Arbeitsteilung, (5) strukturelle und visuelle Beziehungen, (6) Test und Wirksamkeitsgrenzen. Zu jedem Abschnitt: Referenzkanon mit Streitfällen, Praxisverfahren, datierter Technikstand, Qualitätskriterien, Mittelmaß und KI-Rolle. Regeln folgen 0038 in drei Schichten; das Fachpaket selbst wird hier nicht angelegt.

**Abgeleiteter Mindestmaßstab:** Eine Regel ohne Situation, Evidenz, Testmethode und Prüfgrenze ist ein Prüfauftrag, noch keine verbindliche Automatikwahrheit.

## 6 · Kanon und Methoden des gesamten Feldes (Frage 6)

| Methode / Gegenstand | Aussage und Status | Sinnvolle Anwendung / Grenze |
|---|---|---|
| Human-Centered Design | **Belegt Q08 (Normabstract):** ISO 9241-210 beschreibt HCD-Prinzipien und Aktivitäten über den Lebenszyklus; Norminhalt nicht voll gelesen. | **Abgeleitet:** Iteration und Gebrauchssituation vor dem UI; keine Aussage zu konkreter Erfolgsrate. |
| Qualitative Interviews und Beobachtung | **Belegt Q05:** halbstrukturierte Interviews werden bei Multi-Agenten-Erkundung verwendet; **abgeleitet:** Beobachtung und Befragung unterscheiden sich. | Interview ermittelt Sicht und Erzählung, Beobachtung tatsächlichen Ablauf; nicht als identische Evidenz behandeln. |
| Card Sorting | **Belegt Q09 (Praxisquelle):** Menschen gruppieren bezeichnete Inhalte, um mentale Kategorien zu erschließen. | **Abgeleitet:** Hypothesen über Navigation, nicht fertige Struktur oder Kausalitätsbeleg. |
| Tree Testing | **Belegt Q09:** prüft Auffindbarkeit in einer bestehenden oder geplanten Navigationshierarchie. | **Abgeleitet:** Test der Benennung/Struktur ohne Oberfläche; kein Test der visuellen Gestaltung. |
| Journey Map | **Belegt Q10:** Handlung, Gedanken und Emotionen eines bestimmten Nutzers über eine Situation. | Nicht ohne belastbare Beobachtungen zur vermeintlich realen Biografie aufblasen. |
| Service Blueprint | **Belegt Q10:** ergänzt sichtbare Berührungspunkte durch rückwärtige Prozesse und beteiligte Rollen. | **Abgeleitet:** für Modell-Handoff interessant, aber nicht automatisch für Eigentümeransicht geeignet. |
| User Flow / Zustandsmodell | **Belegt Q10:** Interaktionsschritte und Systemantworten innerhalb einer Aufgabe. | **Abgeleitet:** Zustandswechsel als Grundlage für Testfälle, nicht nur Bild. |
| Inhaltsmodell und Navigation | **Abgeleitet** aus Q09–Q10: Typen, Namen, Beziehungen und Zugangswege getrennt beschreiben; nicht ein einziges Menü als Architektur missverstehen. | Gegenprobe per Tree Test und realen Suchaufgaben. |
| Zugänglichkeit | **Belegt Q12:** 24×24 CSS-Pixel für Pointer-Ziele als WCAG-2.2-AA-Kriterium mit Ausnahmen. | Maschinell teilweise messbar, aber Ausnahmen und Verständlichkeit benötigen Prüfung. |
| Stand der Technik mit Agenten | **Belegt Q05:** 2025 explorative Daten über Multi-Agenten-Praxis; **belegt Q07:** 2026 experimentelle Studie zu KI-Vorschlagsverifikation. | **Nicht belegt:** robuste plattformübergreifende Designgesetze für autonome Agenten 2026. |

**Kanon nach Ebenen (abgeleitet):** Norm (ISO/WCAG), HCI- und KI-Interaktionsforschung (Horvitz, Amershi), Informationssuche (Shneiderman), Methodenpraxis (NN/g) und aktuelle Agentenstudien getrennt halten. Eine Norm definiert Anforderungen, ein Paper untersucht eine begrenzte Fragestellung, eine Skill-Sammlung liefert zunächst nur Behauptungen oder Arbeitsgerüste. Keines ersetzt die anderen.

## 7 · Steinbrüche: Ertrag und Negativfolie (Frage 7)

| Fundstück / Bestandteil | Probe und Status | Nutzen / Grenze / Zielort |
|---|---|---|
| `designer-skills`: `design-research`, `interaction-design`, `prototyping-testing` | **Belegt Q13 (README/Index):** die Sammlung gliedert Prozesse nach Arbeitsphase, mit separaten Skill- und Command-Ebenen; **nicht belegt:** einzelne Skills erzielen nachweislich bessere Gestaltung. | **Abgeleitet, abbauen:** Methodennamen und Ablaufstruktur für Fachpaket; jeden methodischen Rat nach Originalquelle prüfen. |
| `designer-skills`: `visual-critique` und `design-ops` | **Belegt Q13:** Kritik und Übergabe sind explizite Module. | **Abgeleitet, Steinbruch:** Ergebnis- und Handoff-Strukturen mit Labor-Kritik vergleichen; keine Installation und kein Codeimport. |
| OpenDesign-Katalog | **Belegt im Labor-Befund §9, nicht extern vollständig nachgezählt:** als Suchstelle für heterogene Regelwerke erfasst. | **Abgeleitet, Suchstelle:** vor Neubau nachsehen; Mengenangaben nicht als Gütesiegel behandeln. |
| `craft/` und `design-brief` | **Belegt nur anhand des Labor-Befunds §§8–9**, Originalregelwerke nicht im vollständigen Wortlaut geprüft. | **Abgeleitet, Negativfolie:** situationsfreie Zahlenvorgaben und Entwurf als Parameterwahl kritisieren; ein Briefing ist nicht per se schlecht. |
| OpenDesign `lint-artifact` | **Belegt nur im Labor-Befund §9** als vorhandenes Prüfkonzept. | **Abgeleitet, Pilot:** maschinelle Mustererkennung mit sichtbar begrenzter Prüfaussage; Pilot #247 bei Claude, hier nicht gebaut. |
| Skill-Kopf `od:` | **Belegt nur im Labor-Befund §9**: Ein-/Ausgaben und Abhängigkeiten. | **Abgeleitet, Pilot:** gezieltes Laden statt Pflicht-Lektüre des ganzen Feldes; Versions- und Pflegekosten offen. |
| Drei-Klick-Regel aus beliebiger Sammlung | **Belegt Q11:** als allgemeine Grenze ohne empirische Grundlage. | **Negativfolie:** keine Übernahme, stattdessen reale Suchaufgaben/Erfolg messen. |
| KI-Automatik als „vollständiger Forschungsprozess“ | **Abgeleitet** aus Q13 und Q08: ein Command kann Research-Artefakte generieren, aber keine interviewten Personen ersetzen. | **Nicht belegt:** „Personas“ aus einem Prompt sind empirische Nutzerforschung. |

**Gegenfrage zum Wert, abgeleitet:** Der Nutzen der Sammlungen ist hoch als **Such- und Ablaufhilfe**, aber die Kompetenz zur kritischen Quellenbewertung bleibt bei der Laborarbeit. Quantität von Skills ist kein Beleg für wissenschaftlichen Kanon. Stand einzelner README-Zahlen kann sich ändern.

## 8 · Regelkandidaten nach 0038 (Frage 8)

*Jeder Eintrag ist eine abgeleitete Kandidatur, keine neue gültige Laborregel.*

| Kandidat | Quelle im Kanon | Geltungsbereich | Prüfgrenze / automatische Probe |
|---|---|---|---|
| **Entscheidung hat Gegenstand, Grund, Alternative, Folge, Status** | Q01–Q03; interner Grundmodell-Text | Eigentümerentscheidung am Handy und Rechner | **Teilweise automatisch:** Pflichtfelder, echte Zuordnung `an:mensch`; **nicht automatisch:** ob Bedeutung eine Entscheidung verlangt. |
| **Ungeprüfte KI-Aussage ist als solche sichtbar** | Q01/Q02, Q15/Q16 | fachliche Aussagen und automatisch erzeugte Entwürfe | **Automatisch:** Status/Herkunft vorhanden; **nicht:** ob eine zitierte Quelle inhaltlich trägt. |
| **Fehler mit Rückweg** | Q01/Q02, Q03 | reversible Aktionen, nicht bloße Lektüre | **Automatisch:** Rückgängig-Hinweis und Statuskette; **nicht:** ob Wiederherstellung in der Praxis vollständig klappt. |
| **Struktursuche an Aufgabe prüfen, nicht an Klickzahl** | Q09/Q11 | Navigation des Zielbilds, Informationsarchitektur | **Test mit Menschen:** Auffindbarkeit, Suchfehler, Verständnis; **nicht** sinnvoll rein statisch. |
| **Pointer-Ziele nach WCAG 2.2** | Q12 | Weboberfläche, Pointer-Eingabe; normierte Ausnahmen beachten | **Teilweise automatisch:** Maße/Abstände; **nicht:** jede Ausnahme oder ergonomische Situation. |
| **Verknüpfung benennt Typ und Fundstelle** | Q15 plus Labor-Anforderung `ao-methodisch` | Relationsdarstellungen und Wissensverweise | **Automatisch:** Edge-Typ, IDs, Quellfeld; **nicht:** tatsächliche semantische Richtigkeit. |
| **Mehrere Ansichten verweisen auf dieselbe Zustandsquelle** | Q04 und `analyse.md` §3 | Zielbild, laufende Arbeit, Erkunden | **Automatisch:** gemeinsame IDs und Referenzintegrität; **nicht:** ob die Erkundung verstanden wird. |
| **Menschliche Prüfung bei teuren Fehlern** | Q06/Q07/Q16 | Entscheidungen mit schwer umkehrbarer Wirkung | **Teilweise automatisch:** Freigabeübergang; **nicht:** ob Prüfer unabhängig und kompetent urteilt. |

## 9 · Bezug zu #172: neu und nicht erneut zu behaupten

**Belegt intern:** `research/2026-11-leitfaden-sota/befund.md` behandelt bereits gestuftes Laden, Provenienz (PROV-O), Human-AI-Risikomanagement, Werkzeugaktionen und „Kurs halten“. Diese Mechanismen werden hier **nicht als neue Entdeckung** ausgegeben. **Neu in dieser Recherche:** getrennte UX-/IA-Verfahren (Card Sort vs. Tree Test, Journey vs. Service Blueprint), falsche Klick-Heuristiken, WCAG-Prüfgrenzen, Multi-Agenten-Fallstudie 2025, Bias-Evidenz 2025/26 und acht Regeln mit konkreten Geltungsbereichen. **Abgeleitet:** Das Labor braucht kein zweites allgemeines KI-Gedächtniskonzept, sondern die *Interaktionsgestaltung* des Übergangs von Information zu Entscheidung und zurück.

## Ergebnis · geprüft / nicht geprüft · offen

**Geprüft:** Repo-Bestand und Entscheidungen, Fragestellungen 1–8 gegen benannte externe Quellen; Status und Lesestand pro Behauptung; zwei Fremdsammlungen als Suchstellen anhand indexierter Inhalte und Labor-Befund. **Nicht geprüft:** Volltexte aller Papers und der ISO-Norm, alle OpenDesign-/designer-skills-Einzeldateien, tatsächliche Endnutzer-Tests, automatische Checks im Labor, API-/Code-Sicherheit fremder Plugins. **Nicht belegt:** dass die vorgeschlagenen Muster die Arbeitsoberfläche nachweislich einfacher machen.

**Drei Punkte für Claude (abgeleitet):**
1. In Iteration 2 aus den Regelkandidaten nur die auswählen, deren Verhalten an realen Eigentümeraufgaben messbar wird (Handy: Entscheidung; Rechner: Fall rückwärts verfolgen); kein eigenständiges Dashboard bauen.
2. Zuerst Card Sort/Tree Test bzw. Zustandsmodell dort einsetzen, wo die konkrete Frage passt; „drei Klicks“ und andere kontextfreie Grenzwerte aussortieren.
3. Für spätere Fachpaket-Übernahme zunächst drei repräsentative Originalskills aus beiden Steinbrüchen mit Originalquellen tief prüfen; dieser Bericht leistet keine vollständige Skill-Auditierung.
