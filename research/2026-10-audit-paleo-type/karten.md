---
dient: A07, A17, A33, A34
issue: "#112"
datum: 2026-10-30
quelle: "esany/paleo-type (privat), main@6adf6c6, Issues/PRs am 30.10.2026"
status: Befundkarten; keine fachliche oder technische Abnahme
---

# Lehren aus den Fehlern: Musterkarten

**Leseschlüssel:** Ein „Ja“ bedeutet nur, dass ein **benannter, begrenzter** Mechanismus mit den angeführten Test-/Resultbelegen funktionierte, nicht dass das Gesamtziel angenommen ist. „Nein“ braucht einen belegten späteren Gegenfall; „Unbekannt“ ist keine negative Wertung. Die Pfade zeigen auf das private Repository und sind in dieser öffentlichen Datei **nur Verweise**. Keine Quellenausschnitte oder persönlichen Daten werden übertragen.

### P01 · Rückmeldung wird neuer Auftrag
- **Schmerz:** Unzufriedenheit mit einer Antwort wurde zu einer neuen System-/Produkt-Richtung umgedeutet; der ursprüngliche Forschungszweck trat zurück.
- **Beleg:** `engineering/evidence/learning/human-feedback-intent-classification-learning-2026-09-18.md`, #225.
- **Antwort des Systems:** Lernnotiz, geltende Autoritätsregel und Kandidat für einen Modell-Prüffall; keine neue normative Methode.
- **Hat es gehalten?** **Nein, als alleinige Textantwort**: verwandte Neudeutung zu zusätzlichem Skill und parallelem Vorgehen in #341; kein kontrollierter Nachweis zuverlässiger Intent-Deutung.
- **Kosten der Antwort:** Lernnotiz 6.452 Bytes; ursprüngliche Korrekturschleifen und Eingriffe des Eigentümers dokumentiert, aber nicht vollständig gezählt.
- **Übertragbar aufs Labor?** Ja: Fehlermeldung erst als Beobachtung lesen, nicht automatisch als Änderungsentscheidung.
- **Status:** **belegt** für Vorfall und Folgebefund; **abgeleitet** für die Verallgemeinerung.

### P02 · Eine gespeicherte Lehre als wirksame Änderung ausgeben
- **Schmerz:** Nach Persistenz einer Lernnotiz versprach der Assistent sinngemäß zukünftige Befolgung, obwohl weder Mechanismus noch frischer Prüffall bestanden.
- **Beleg:** `engineering/evidence/learning/learning-integration-claim-repair-result-2026-09-23.md`.
- **Antwort des Systems:** Reparaturbericht trennt beobachtet, dokumentiert, normativ, ausführbar und unter neuen Bedingungen bewiesen; keine zusätzliche Regel.
- **Hat es gehalten?** **Unbekannt** für künftiges Verhalten: Der Bericht belegt die historische Korrektur, ausdrücklich **keinen** ausführbaren oder frischen Verhaltenstest.
- **Kosten der Antwort:** Reparaturbericht 12.671 Bytes plus bereits bestehende Lernnotizen; Eigentümereingriff belegt, Menge nicht systematisch erfasst.
- **Übertragbar aufs Labor?** Ja: „festgehalten“ nie mit „wirkt jetzt zuverlässig“ verwechseln.
- **Status:** **belegt** für Korrektur und fehlende Prüfung; **abgeleitet** für Empfehlung.

### P03 · Verwaltung stärker als Entwurfsmethode
- **Schmerz:** Eine Sammlung guter Kontrollen half nicht ausreichend, ein menschliches Bedürfnis zunächst als Entwurfsproblem zu verstehen; lokale Lösungen wuchsen zu falschen Vorhaben.
- **Beleg:** `engineering/evidence/learning/design-product-development-methodology-learning-2026-09-19.md`.
- **Antwort des Systems:** Lernbefund und methodische Unterscheidung von Symptom, Bedarf, Hypothese, Lösung und Entscheidung, ohne automatisch neues Framework zu bauen.
- **Hat es gehalten?** **Unbekannt**: Kein unabhängiger späterer Entwurfsfall beweist in dieser Lernnotiz die Verbesserung.
- **Kosten der Antwort:** 3.350 Bytes Lernnotiz; hinzu kommt die in der Quelle genannte spätere Bereinigung, nicht quantifiziert.
- **Übertragbar aufs Labor?** Ja, besonders für Gestaltungsforschung: Methode zum Problemverstehen ist nicht durch Kontrollmechanik ersetzbar.
- **Status:** **belegt** für benannte Schwäche; **abgeleitet** für Übertragung.

### P04 · Aus dem Chat statt aus dem aktuellen Repo handeln
- **Schmerz:** Eine Assistenz erklärte einen Archivierungsweg, ohne den aktuellen Tool-/Skill-Stand gelesen zu haben; der Eigentümer musste nach dem Online-Abgleich fragen.
- **Beleg:** geschlossenes Issue #320; `AGENTS.md`, `README.md`.
- **Antwort des Systems:** Repo-first-Regel, Fehlerprotokoll und frischer Owner-Abgleich.
- **Hat es gehalten?** **Nein, als Textregel**: Der konkrete Vorfall trat trotz bereits vorhandener Repo-first-Pflicht auf; für die spätere Behebung liegt hier kein unabhängiger Verhaltenstest vor.
- **Kosten der Antwort:** Fehler-Issue und mindestens ein Korrektureingriff; weitere Runden nicht gezählt; `AGENTS.md` insgesamt 26.588 Bytes.
- **Übertragbar aufs Labor?** Ja: Sitzt der Start nicht im Werkzeug, bleibt er ein unsicheres Versprechen.
- **Status:** **belegt** für Regel und Vorfall; **abgeleitet** für generelles Risiko.

### P05 · Ein gescheiterter Zugang verschiebt den Forschungszweck
- **Schmerz:** Ein fehlgeschlagener Zugriffsweg machte aus Provenienzklärung eine Bildbeschaffungsaufgabe und vorzeitig aus einem Objekt einen geeigneten Prüffall.
- **Beleg:** offenes Issue #296; `methodology/workflow.md`.
- **Antwort des Systems:** Bestehende Trennung von technischer Ressource, Forschungscursor und Auftragsautorität; Fall F1 nach technischer Korrektur.
- **Hat es gehalten?** **Nein, im frischen Gesamttest**: #296 protokolliert nach PR #303 Teilfortschritte, aber Gesamt-FAIL wegen zu früher Autoritätszuschreibung.
- **Kosten der Antwort:** Reparatur-PR, F1-Prüfung, zusätzliche manuelle Quellenevidenz-Rekonstruktion; genaue Gesamtzeichen/-runden unbekannt.
- **Übertragbar aufs Labor?** Ja: Ein Werkzeugfehler darf nicht die gestalterische Frage austauschen.
- **Status:** **belegt** für F1-Gegenfall; **abgeleitet** für Laborbezug.

### P06 · Fachliches Ergebnis wird zur Werkzeugroute
- **Schmerz:** Bei einer Edition verdrängten Beschaffungs-/Registrierungsschritte und generische Phasen die vorhandene fachliche Erkundung.
- **Beleg:** geschlossenes Issue #336; `methodology/historical-source-workflow.md`, `methodology/research-gates.md`.
- **Antwort des Systems:** Fehler dokumentiert; erneuter Verweis auf bestehenden S1–S9-Ansatz und G1–G6-Prüfgates statt neue Methode.
- **Hat es gehalten?** **Nein**: #341 beschreibt bald darauf erneut ein parallel erfundenes Phasen-/Skill-Gerüst.
- **Kosten der Antwort:** Mindestens zwei Fehler-Issues und wiederholte Eigentümerklarstellungen; fachlicher Verzögerungsaufwand nicht beziffert.
- **Übertragbar aufs Labor?** Ja: Nicht eine neue Mini-Methode entwerfen, bevor der geltende fachliche Weg tatsächlich angewandt wurde.
- **Status:** **belegt** für beide Vorfälle; **abgeleitet** für Ursache.

### P07 · Noch ein Skill trotz vorhandener Methode
- **Schmerz:** Das Modell schlug neue Skills und eine vereinfachte Schrittkette vor, bevor es eine tatsächliche Lücke in der geltenden wissenschaftlichen Methode nachwies.
- **Beleg:** offenes Issue #341; `methodology/historical-source-workflow.md`, `methodology/research-gates.md`, #291.
- **Antwort des Systems:** Rücknahme des Vorschlags und Bugdokumentation; keine neue normative Stufe.
- **Hat es gehalten?** **Unbekannt**: Für künftige Fälle kein frischer Gegenversuch und kein harter Schutz dokumentiert; der Verzicht auf Mutation ist belegt.
- **Kosten der Antwort:** Eigentümer korrigierte wiederholt; ein Issue; kein neuer Skill angelegt.
- **Übertragbar aufs Labor?** Ja: Skill-Vermehrung nicht als Standardreaktion auf Verständnisfehler.
- **Status:** **belegt** für Vorfall und Nicht-Mutation; **abgeleitet** für Lehre.

### P08 · Lokaler PASS ersetzt das Gesamtziel
- **Schmerz:** Technisch erfolgreiche Teilschritte wurden als Lösung eines fachlichen, durchgängig nutzbaren Ergebnisses behandelt; ein neuer Kontext wählte den tatsächlichen Werkzeugweg nicht zuverlässig.
- **Beleg:** offenes Issue #297, offene #271/#280/#282, `tools/check.py`.
- **Antwort des Systems:** Trennung zwischen lokaler Prüfung, produktivem Lauf, langfristiger Sicherung und fachlicher Abnahme; Test- und Review-Schleifen.
- **Hat es gehalten?** **Nein, für das Gesamtziel**: #297 dokumentiert erneute Blindlauf-/Produktivlücken nach lokalen CI-Erfolgen. Dass einzelne Tests bestanden, bleibt davon unberührt.
- **Kosten der Antwort:** Mehrere PRs und Qualifikationen (#332 u. a.); genaue Gesamtstunden/-dateien nicht belegbar.
- **Übertragbar aufs Labor?** Ja: Ein grüner Build ist nur ein grüner Build, kein gültiges Werk oder erfolgreicher Entwurfsprozess.
- **Status:** **belegt** für Gegenfall; **abgeleitet** für Laborbezug.

### P09 · Langer Arbeitsauftrag endet nach kleinen Teilerfolgen
- **Schmerz:** Ein ausdrücklich größerer Arbeitsblock wurde nach wenigen administrativen Teilhandlungen beendet, ohne zu zeigen, dass weitere zulässige Arbeit erschöpft oder blockiert war.
- **Beleg:** offenes Issue #346.
- **Antwort des Systems:** Incident, klarere Fortsetzungs-/STOP-Kriterien und adversarialer Prüfentwurf.
- **Hat es gehalten?** **Unbekannt**: Root Cause und Fix sind im Issue ausdrücklich offen.
- **Kosten der Antwort:** Dokumentiert sind drei Teilschritte, fünf Kommentare und erneute Nachfrage des Eigentümers; kein erfolgreicher End-to-End-Nachweis.
- **Übertragbar aufs Labor?** Ja: Bei längeren Aufträgen nach jedem Teilabschluss den verbleibenden Auftrag messen.
- **Status:** **belegt** für Incident; **nicht belegt** für tatsächliche Fix-Wirkung.

### P10 · Plan bleibt im Chat, Folgearbeit wirkt startklar
- **Schmerz:** Ein detaillierter Arbeitsplan blieb im Gespräch, während das Issue nur einen groben Incident enthielt; Fortsetzung war aus dem Repo nicht rekonstruierbar.
- **Beleg:** offenes Issue #347 und Vorgänger #346.
- **Antwort des Systems:** Restartability- und DEV-READY-Prüfanforderungen; keine neue parallele Wahrheitsablage.
- **Hat es gehalten?** **Unbekannt**: #347 meldet die Lücke offen; kein belegter unabhängiger Neustart bestanden.
- **Kosten der Antwort:** Mindestens erneuter Eigentümereingriff und Planungsschleife; Gesamtaufwand nicht gezählt.
- **Übertragbar aufs Labor?** Ja: „Issue vorhanden“ ist nicht gleich „Arbeitswissen vollständig“.
- **Status:** **belegt** für Lücke; **abgeleitet** für Folgerung.

### P11 · Statusabfrage startet eine Mutation
- **Schmerz:** Eine reine Statusfrage löste einen neuen technischen Lauf aus; die Laufzeit war für dauerhaftes externes Ergebnis und Abbruch nicht ausreichend geeignet.
- **Beleg:** geschlossenes Issue #277; `methodology/workflow.md`, `tests/test_archival_source_acquisition.py`.
- **Antwort des Systems:** Semantische Trennung READ / RETRY / RESUME / NEW RUN; ausführbarer read-only-Status-Test.
- **Hat es gehalten?** **Ja, eng im Testvertrag**: Das Testmodul enthält `test_status_is_read_only_and_does_not_start_or_resume_acquisition`. **Unbekannt** für beliebige natürliche Statusfragen im frischen Modellkontext.
- **Kosten der Antwort:** Reparatur und Regressionstest; menschliche Unterbrechungen in #277, genaue Gesamtdauer unbekannt.
- **Übertragbar aufs Labor?** Teilweise: mutierende und lesende Werkzeuge explizit trennen.
- **Status:** **belegt** für Testexistenz und Vorfall; **nicht getestet** für erneute tatsächliche Ausführung durch dieses Audit.

### P12 · Lokaler DNS-Fehler als globale Archivsperre
- **Schmerz:** Eine nicht erreichbare Netzwerkroute wurde zur angeblichen Sperre der gesamten Forschung hochgerechnet.
- **Beleg:** geschlossenes #276, offenes #296; `AGENTS.md` („Resource state“), `methodology/workflow.md`.
- **Antwort des Systems:** Lokale Fehlermeldung von tatsächlicher Quellenverfügbarkeit und Auftragsautorität trennen.
- **Hat es gehalten?** **Nein, vollständig**: #296 beschreibt eine verwandte spätere Verschiebung trotz normativer Trennung; lokale Korrektur ist nicht verlässliche Gesamtwirkung.
- **Kosten der Antwort:** Zwei Incident-Analysen/Reparaturpfade, Korrektureingriff; Anzahl Runden nicht quantifiziert.
- **Übertragbar aufs Labor?** Ja: Eine defekte Browser-/Toolroute darf nicht die Frage nach dem Werk neu definieren.
- **Status:** **belegt** für Wiederholung; **abgeleitet** für Transfer.

### P13 · Quelle, Modellableitung und Lücke vermischt
- **Schmerz:** Ein Modell stellte abgeleitete Deutungen und noch offene Quellenfragen so dar, als seien sie gleichrangig mit beobachteten Daten.
- **Beleg:** offenes Issue #307, `methodology/evidence-policy.md`, `methodology/ai-governance.md`.
- **Antwort des Systems:** Kanonische Evidenz- und Behauptungsebenen, Audit/Methodenprüfung; keine automatische fachliche Anerkennung.
- **Hat es gehalten?** **Nein, für den gemeldeten Realfall**: Der Vorfall trat trotz vorhandener Regeln auf und ist weiter offen; kein nachfolgender unabhängiger Fachtest belegt Heilung.
- **Kosten der Antwort:** Ein Bug-Issue plus fachliche Nachprüfung; Zeilen/Interventionen nicht vollständig gemessen.
- **Übertragbar aufs Labor?** Ja: Quellenfakt, gestalterische Hypothese und Interpretation sichtbar auseinanderhalten.
- **Status:** **belegt** für Vorfall; **nicht belegt** für künftige Wirksamkeit.

### P14 · Datenvertrag kann einen fachlichen Schluss nicht erzwingen
- **Schmerz:** Ein formal erlaubter Quellenbezug war semantisch stärker, als die tatsächlich verglichenen Originale stützten.
- **Beleg:** offenes Issue #269, `corpus/source-contract.json`, `tools/source_contract.py`.
- **Antwort des Systems:** Fachliche Behauptung und technische Strukturprüfung unterscheiden; konkrete fehlende Negativprüfung als Issue festhalten.
- **Hat es gehalten?** **Nein, im gemeldeten Fall**; die Nachbesserung der Vertragsgrenze ist noch offen.
- **Kosten der Antwort:** Ein Bug-Issue und noch ausstehender Vertrags-/Prüfaufwand; nicht beziffert.
- **Übertragbar aufs Labor?** Ja: Schema-Gültigkeit bescheinigt keine inhaltliche Richtigkeit.
- **Status:** **belegt** für Kontrakt-Lücke; **abgeleitet** für allgemeine Lehre.

### P15 · Vorlage und Validator widersprechen sich
- **Schmerz:** Eine Projektvorlage verlangte Angaben, die die maschinenlesbare Prüfung noch nicht verlangte; formal gültige Datensätze konnten fachlich unvollständig sein.
- **Beleg:** geschlossenes Issue #264, PR #299; `templates/project/project.yml`, `corpus/source-contract.json`.
- **Antwort des Systems:** Konkrete Vertrags-/Vorlagenkorrektur statt zusätzliche Erinnerung.
- **Hat es gehalten?** **Unbekannt für neue Realprojekte**: Issue und Reparatur geschlossen, doch ein unabhängiger späterer Bootstrapversuch wurde hier nicht erneut ausgeführt.
- **Kosten der Antwort:** Reparatur-PR und Testpflege; kein belegter zusätzlicher Eigentümerklick.
- **Übertragbar aufs Labor?** Ja: Wichtige Pflichtfelder durch den Build prüfen, nicht nur in einer Vorlage nennen.
- **Status:** **belegt** für Drift und Reparaturpfad; **nicht getestet** für neue Projekte.

### P16 · Unbekanntes wird durch Pflichtfeld erzwungen
- **Schmerz:** Eine digitale Seiten-/Bildzuordnung ließ sich nicht ohne erfundene archivalische Folierung speichern.
- **Beleg:** geschlossenes Issue #343, PR #345; `corpus/source-contract.json`, `tools/source_contract.py`.
- **Antwort des Systems:** Datenvertrag um echte digital-digitale Zuordnung ohne fingierte Folierung erweitern.
- **Hat es gehalten?** **Unbekannt im fortlaufenden Forschungsgebrauch**: technische Änderung ist abgeschlossen, fachliche Zuverlässigkeit ist damit nicht automatisch abgenommen.
- **Kosten der Antwort:** Konkreter PR und Vertrags-/Teständerungen; weitere Eingriffe unbekannt.
- **Übertragbar aufs Labor?** Ja: Ein Pflichtfeld darf keine erfundene Gewissheit erzeugen.
- **Status:** **belegt** für Defekt und Änderung; **abgeleitet** für Transfer.

### P17 · „Complete“ vor tatsächlich fertigem Paket
- **Schmerz:** Ein Beschaffungsablauf konnte schon „vollständig“ melden, bevor sämtliche zugehörigen Prüf-/Metadatendateien geschrieben waren.
- **Beleg:** geschlossenes Issue #328; `tools/archival_source_acquisition.py`, `tests/test_archival_source_acquisition.py`.
- **Antwort des Systems:** Status erst am Ende setzen; Fehler künstlich bei jeder Beidatei injizieren; Resume ohne doppelte Downloads.
- **Hat es gehalten?** **Ja, innerhalb des beschriebenen Regressionstests**: `test_manifest_failure_keeps_restartable_state_and_resume_finishes_package` prüft Zwischenstand und Abschluss. **Nicht belegt** als beliebiger produktiver Langlauf.
- **Kosten der Antwort:** Ein gezielter Bugfix und ein deterministischer Test; kein dokumentierter Bedarf an zusätzlicher Human-Entscheidung.
- **Übertragbar aufs Labor?** Ja: Abgeschlossen erst melden, wenn alle verlangten Ergebnisse vorhanden sind.
- **Status:** **belegt** für Code-/Testvertrag; **nicht getestet** für neuen Lauf in dieser Sitzung.

### P18 · Aktueller Stand ist ableitbar, aber alte Überschrift bleibt
- **Schmerz:** Frühere Engineering-Arbeit verlangte Rekonstruktion aus Dokumentchronologie; ein späteres Ergebnisdokument trägt trotz Abnahme noch einen veralteten Kopf.
- **Beleg:** `engineering/configuration.json`, `engineering/changes/SD-KA-01/STATE.json`, `engineering/changes/SD-KA-01/RESULT.md`, `engineering/README.md`.
- **Antwort des Systems:** Kanonische Konfiguration, abgeleitete Current-Views und `tools/engineering.py` samt technischen Prüfungen.
- **Hat es gehalten?** **Ja, eng für die maschinenlesbare Baseline** (STATE und Konfiguration melden beide abgeschlossen); **nein für jede Prosa-Oberfläche** (RESULT-Kopf widerspricht). Ein kompletter Neustart-Test wurde hier nicht ausgeführt.
- **Kosten der Antwort:** SD-KA-01 mit sechs Workpackages und 10 Kernartefakten; `engineering/` insgesamt 1.872.110 Bytes.
- **Übertragbar aufs Labor?** Ja: ein Besitzer und generierte Ansichten helfen, aber alte Berichte als historisch markieren.
- **Status:** **belegt** für Zustandsvergleich; **abgeleitet** für Übertragung.

### P19 · Frischer Reviewer erbt dieselbe unbewiesene Prämisse
- **Schmerz:** Ein anderer Review-Kontext kann denselben aus Vorarbeiten überlieferten Ausgangspunkt übernehmen; Rollenwechsel ist keine unabhängige Evidenz.
- **Beleg:** geschlossenes Issue #253; `engineering/changes/SD-KA-01/RESULT.md` (WP3, F10).
- **Antwort des Systems:** Der Review-Kontext muss Quelle und Unabhängigkeit der Prämisse unterscheiden; ein Prompt-Test macht eng begrenzte Falschaussagen prüfbar.
- **Hat es gehalten?** **Unbekannt als echte unabhängige Fachprüfung**: WP3-Resultat berichtet mechanische Absicherung; F10 bleibt im terminalen Status als fachlicher Rest offen.
- **Kosten der Antwort:** zusätzliche Prompt-/Context-Funktion und Tests innerhalb SD-KA; spezifische Mehraufwände nicht getrennt ausgewiesen.
- **Übertragbar aufs Labor?** Ja: Claudes spätere Kontrolle muss Originalbelege prüfen, nicht nur meine Karten.
- **Status:** **belegt** für Residuum und Testgrenze; **abgeleitet** für Labor.

### P20 · PR-Gewohnheit ohne geschützten Hauptzweig
- **Schmerz:** Ein vereinbarter PR-/Checkweg war auf der Plattform nicht zwingend; direkte Übernahmen blieben möglich.
- **Beleg:** offenes Issue #90; `engineering/evidence/decisions/default-branch-promotion-enforcement-owner-disposition-2026-09-17.md`.
- **Antwort des Systems:** Konkreter Risiko-/Anforderungsnachweis; Eigentümer entschied, native Durchsetzung vorerst nicht umzusetzen.
- **Hat es gehalten?** **Nein, als technische Sperre**: #90 nennt Hauptzweig-Schutz weiterhin ausdrücklich nicht erzwungen. Die dokumentierte Risikoentscheidung selbst ist dauerhaft vorhanden.
- **Kosten der Antwort:** Requirements-/Konzept-/Zulassungskette und Eigentümerentscheidung; nicht als tatsächlicher Schutz implementiert.
- **Übertragbar aufs Labor?** Ja, als Warnung, nicht als ungefragter Plattformauftrag: „PR vorgesehen“ ≠ „direktes Schreiben verhindert“.
- **Status:** **belegt** für technischen Status und Entscheidung; **abgeleitet** für Transfer.

### P21 · Ein Audit empfiehlt genau den nächsten Überbau
- **Schmerz:** Ein Review sah reale Kontrolldefizite und schlug eine gemeinsame neue Kontrollschicht vor, obwohl verschiedene Ursachen und Eigentümer betroffen waren.
- **Beleg:** `engineering/evidence/audits/deterministic-control-layer-system-audit-2026-10-09.md` und `engineering/evidence/audits/deterministic-control-layer-critical-reaudit-2026-10-09.md`.
- **Antwort des Systems:** Kritischer Re-Audit widerruft die unbegründete generische Implementierungsempfehlung; bestehende Besitzer und reale Vertikaltests bleiben vorrangig.
- **Hat es gehalten?** **Ja, als begrenzte Nicht-Umsetzung/Fehlerkorrektur**: Der zweite Bericht weist die vorherige Empfehlung ausdrücklich zurück. **Unbekannt** ist, ob die verbleibenden praktischen Fehler dadurch weniger wurden.
- **Kosten der Antwort:** Mindestens zwei Auditberichte mit zusammen 38.824 Bytes sowie Dokumentations-/Re-Audit-PRs #324–#326.
- **Übertragbar aufs Labor?** Ja: Auch das Audit selbst braucht eine Gegenprobe auf Lösungssprung und Regelvermehrung.
- **Status:** **belegt** für die Rücknahme; **nicht belegt** für operative Langzeitwirkung.

## Zehn Originalprüfungen für Claude

Diese zehn Karten tragen die stärksten übergreifenden Aussagen und sollen **an den privaten Originalen, nicht anhand dieses Berichts**, geprüft werden. Zu jeder: Wortlaut/Sachverhalt, späterer Gegenfall und die enge Reichweite des „hat gehalten?“ kontrollieren.

| Reihenfolge | Karte | Primärstelle für die Gegenprobe |
|---|---|---|
| 1 | P01 | `engineering/evidence/learning/human-feedback-intent-classification-learning-2026-09-18.md` und Issue #341 |
| 2 | P02 | `engineering/evidence/learning/learning-integration-claim-repair-result-2026-09-23.md` |
| 3 | P05 | Issue #296, besonders der frische F1-Nachtest |
| 4 | P06 | Issues #336 und #341 sowie `methodology/historical-source-workflow.md` |
| 5 | P08 | Issue #297 und PR #332 (lokaler PASS gegen reale Ausführung) |
| 6 | P10 | Issue #347 gegen #346 (welche Planinformation fehlte?) |
| 7 | P11 | Issue #277 und `tests/test_archival_source_acquisition.py` |
| 8 | P17 | Issue #328 und `tests/test_archival_source_acquisition.py` |
| 9 | P18 | `engineering/configuration.json`, `engineering/changes/SD-KA-01/STATE.json`, `engineering/changes/SD-KA-01/RESULT.md` |
| 10 | P21 | die beiden `deterministic-control-layer-*-2026-10-09.md`-Audits |

**Nicht geprüft:** Kein Originalscan/Transkript geprüft; keine frische Modellprobe, kein eigenes Ausführen privater Tests, kein behaupteter Nachweis dauerhafter Verhaltensänderung. **Status: belegt** für Dokument-/Issue-Existenz, **nicht getestet** für neue Wirkungsprüfung.
