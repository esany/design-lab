# Gegenprüfung zu Bug #200 und Stand der Technik

**13.11.2026 · ChatGPT (unabhängige Modellfamilie) · Auftrag #203 · Dient: A07, A14, A18, A22, A26, A33**

## Für den Eigentümer – fünf Sätze

Die Untersuchung von Claude trifft einen wichtigen Widerspruch: Das Labor soll dir technische Verwaltung abnehmen, fordert aber an mehreren Stellen genau diese Verwaltung von dir. Die sechs genannten Ursachen erklären unterschiedliche Teile des Problems, sind jedoch keine sechs unabhängig bewiesenen Ursachen; vor allem die Erklärung durch Modellvoreinstellungen bleibt eine Hypothese. Ein gemeinsames Ziel- und Rollenmodell kann Entscheidungen besser verknüpfen, ersetzt aber weder zuverlässige Werkzeuge noch beobachtbare Prüfungen im echten Gebrauch. Sinnvoll ist deshalb, zuerst die bereits bestätigte Arbeitsweise tatsächlich durchzusetzen und anschließend ihr Verhalten an konkreten Situationen zu prüfen, statt weitere Regeln anzuhäufen. Die Recherche zeigt dafür belastbare Methoden, aber keinen wissenschaftlichen Beleg dafür, dass ein einzelnes Zielmodell sämtliche Fehler behebt.

## Prüfrahmen und Lesetiefe

**Gegenstand:** System der Zusammenarbeit, nicht die Qualität einzelner Werke. **Maßstab:** `intent.md` (A07/A14/A18/A22/A26/A33), `principles.md` (3, 4, 9–11), bestätigte Punkte aus `research/2026-11-anforderungspruefung/zielbild/punkte.json` (Iteration 2). **Grenze:** Kein Zugriff auf private Werk-Chats; PR-Inhalte und historische Messungen wurden nicht vollständig unabhängig rekonstruiert. **Lesetiefe extern:** soweit nicht anders bezeichnet Abstract, Verlags-/Projektseite oder öffentliches Skill-Dokument; **keine Volltextstudie**. „Belegt“ bezeichnet jeweils die eng benannte Aussage, nicht die Wirksamkeit im Labor.

### Teil 1 – Gegenprüfung der Ursachen U1–U6

| Ursache | Urteil | Fundstelle und Gegenargument |
|---|---|---|
| **U1: widersprüchliche Anweisungen** | **belegt, im Detail zeitabhängig** | `principles.md`, Prinzip 5 nennt den menschlichen Merge; `decisions/0019-selbststaendig-im-rahmen.md` delegiert Übernahmen ausdrücklich an Agenten. `research/2026-11-anforderungspruefung/befund.md` §3 nennt weitere Fundstellen. **Gegenprüfung:** `AGENTS.md` auf main enthält seit 13.11. ein neues Grundmodell; die pauschale Behauptung, es fehle überall, ist bereits überholt. |
| **U2: Modellvoreinstellungen** | **plausibel, nicht kausal nachgewiesen** | `befund.md` §§1,3 beschreibt Standardstil, Überkorrektur und Entwicklersprache; `punkte.json`, `b-werk`, `b-ueberkorrektur`. Aus wiederkehrenden Fehlern folgt nicht eindeutig deren Trainingsursache. **Gegenthese:** widersprüchliche Anweisungen, Auswahl der Aufgaben und unklare Rückmeldungen könnten genügen. |
| **U3: fehlende Verhaltensnachweise** | **für den beschriebenen Prüfstand belegt, nicht für jede spätere Version** | `befund.md` §3 und `punkte.json`, `u3`: Anforderungen A14/A18/A22 als „erfüllt“ trotz beobachteter Verletzungen. **Gegenthese:** vorhandene technische Checks prüfen bereits Teilaspekte; es fehlt die nachgewiesene Abdeckung der Zusammenarbeit, nicht schlechthin jede Prüfung. |
| **U4: Nutzerbild verstreut** | **historisch belegt, inzwischen teilweise behoben** | `befund.md` §3; `decisions/0019-selbststaendig-im-rahmen.md`; `punkte.json`, `nk-rolle`, `nk-orte`. **Aktueller Gegenbefund:** `AGENTS.md` bündelt inzwischen Rollen, Orte und Grenzen. Ob das bei allen Modellen ankommt, ist noch nicht getestet. |
| **U5: isolierte Reaktion je Nachricht** | **Beobachtung plausibel, Mechanismus nicht belegt** | `befund.md` §§1,3 und `punkte.json`, `b-schnell`, `u5`. Eine Folge von schnellen Artefakten beweist nicht, dass das Modell die übrigen Anforderungen gar nicht berücksichtigt hat. Gegenprobe: dieselben Fälle mit expliziter Anforderungsprüfung und identischen Werkzeugen wiederholen. |
| **U6: Rückkopplung endet im Stapel** | **konkret belegt für die damaligen Beispiele** | `befund.md` §3: Rückmeldungen a45–a54 in PR #193, aber nicht in der wirksamen Arbeitsweise. `punkte.json`, `u6`; `stand.md` am 13.11. beschreibt nun den von Claude selbst abzuarbeitenden Stapel. **Gegenthese:** Ursache kann fehlende Priorisierung, fehlende Übernahmeautomatik oder legitimer Prüfbedarf sein, nicht nur ein fehlendes Zielmodell. |

**Schwarz-Weiß- und Verkürzungsrisiken im Ausgangsbefund:**

1. `befund.md` Einleitung nennt das offene Dateisystem praktisch „die einzige Stelle“, an der das Labor zuverlässig sei. **Abgeleitet, zu absolut:** Auch Dialog, fachliche Recherche und menschliches Urteil können zuverlässig sein; ihre Qualität wurde nicht vergleichbar gemessen.
2. `befund.md` §5 folgert, eine Prüfung innerhalb derselben Modellfamilie finde den Fehler nicht. **Zu stark:** Forschung zu Eigenbevorzugung begründet zusätzliche unabhängige Prüfungen, aber kein generelles Unvermögen gleicher Familien. Der Prüfer braucht Kriterien und Gegenbeispiele, nicht nur einen anderen Anbieter.
3. `befund.md` Einleitung erklärt, das Problem sei „nur“ mit vier Maßnahmen zusammen behebbar. **Nicht belegt:** Es gibt keinen Vergleich der Maßnahmenkombinationen. Sie sind ein plausibler Entwurf, keine nachgewiesene notwendige und hinreichende Bedingung.
4. `befund.md` §6 schlägt mehrere neue Mechanismen vor, obwohl `punkte.json`, `b-schnell` gerade das reflexhafte Erzeugen neuer Strukturen beanstandet. **Abgeleitet:** Erst bestehende Regeln und Werkzeuge auf Wirkung prüfen, danach ergänzen.
5. Der Satz „Komplexität ist nicht das Ziel“ darf nicht als „minimiere die Komplexität“ gelesen werden. `punkte.json`, `nk-komplex` bestätigt ausdrücklich systemische, transdisziplinäre Entwurfsarbeit und Qualität vor dem kleinsten gemeinsamen Nenner.

**Hypothese „tiefere Ursache“ (`u-tiefer`):** **teilweise tragfähig, nicht bewiesen.** Ein verknüpftes Modell von Akteuren, Zielen, Anforderungen, Mechanismen und Nachweisen kann Widersprüche, unbegründete Prioritäten und Scheinreife sichtbar machen (U1/U3/U4/U6). **Gegenthese:** Das Labor besitzt bereits `intent.md`, `verknuepfung.md`, Entscheidungen, Prüffälle und nun das Grundmodell in `AGENTS.md`; das Problem könnte vor allem die fehlende *Ausführung* und die mangelhafte Wirksamkeitsmessung dieser bestehenden Elemente sein. Zudem erklärt ein solches Modell weder Sykophanz noch Werkzeugfehler noch unzureichende Recherche. **Entscheidender Test:** Zwei identische Auftragsserien, einmal mit heutiger Startroutine, einmal mit expliziter Verknüpfung und automatischer Prüfung; Fehler, Korrekturen und Aufwand vergleichen. Ohne diesen Test keine Kausalbehauptung.

## Teil 2 – Stand der Technik und Folgen für das Labor

**Leseschlüssel:** B = belegt durch die genannte Quelle in ihrem angegebenen Umfang; A = abgeleitete Anwendung auf das Labor; N = nicht belegt. Alle Literaturangaben enthalten Link und Lesetiefe. Ein Titel allein ist kein Nachweis für die Wirksamkeit einer Laborlösung.

### 1. Verhalten von KI-Agenten prüfbar machen (U3)

- **[Zhu u. a. 2025, *Establishing Best Practices for Building Rigorous Agentic Benchmarks*](https://arxiv.org/abs/2507.02825)** — wissenschaftliche Vorabfassung, **Abstract**. **B:** Unzureichende Aufgaben- und Bewertungsdefinition kann Agentenleistung erheblich über- oder unterschätzen; die Autoren schlagen eine Benchmark-Checkliste vor. **A:** Tests für „fordert der Agent einen GitHub-Klick vom Eigentümer?“ brauchen ein eindeutig beobachtbares Ergebnis und Negativfälle.
- **[τ-bench, Yao u. a. 2024](https://arxiv.org/abs/2406.12045)** — Forschungsarbeit, **nur bibliografisch/Abstract nicht erneut vertieft**. **A:** Mehrschrittige Interaktionen mit Regeln und Werkzeugen testen statt nur einzelne Textantworten.
- **[Amershi u. a. 2019, *Guidelines for Human-AI Interaction*](https://doi.org/10.1145/3290605.3300233)** — begutachtete CHI-Arbeit, **Abstract**. **B:** 18 Richtlinien wurden mit Gestaltenden und Produkten evaluiert, darunter Umgang mit Fehlern über Zeit. **A:** Menschliche Nutzbarkeit und Fehlererholung gehören zu den Abnahmekriterien.

**Folge (A):** Für A14/A18/A22 je einen echten Dialog-Prüffall mit Eingabe, erlaubtem/unerlaubtem Verhalten, sichtbarem Werkzeugergebnis und Gegenbeispiel anlegen. Automatische Ja/Nein-Prüfung für objektive Punkte, unabhängige Modellprüfung nur für Bedeutung. Wiederholungen mit gleichem Modellstand und dokumentierten Fehlerraten; kein Selbsturteil „bestanden“.

### 2. Zielmodelle, Nachverfolgbarkeit und Mensch–KI-Rollen (U4/O2)

- **[van Lamsweerde 2001, *Goal-Oriented Requirements Engineering: A Guided Tour*](https://webperso.info.ucl.ac.be/~avl/gore.php)** — begutachteter Konferenzbeitrag, **Autorenverzeichnis/Zusammenfassung**. **B:** Zielorientiertes Requirements Engineering modelliert Ziele, Verfeinerung und Hindernisse. **A:** Akteur → Ziel → Anforderung → Mechanismus → Nachweis explizit verknüpfen.
- **[van Lamsweerde & Letier 2000, *Handling Obstacles in Goal-Oriented Requirements Engineering*](https://webperso.info.ucl.ac.be/~avl/gore.php)** — IEEE TSE, **bibliografisch bestätigt, kein Volltext**. **A:** Widersprüche und Ausnahmen als Hindernisse erfassen, nicht einfach Regeln vermehren.
- **[ISO 9241-11:2018](https://www.iso.org/standard/63500.html)** — Norm, **Definition im bestehenden `befund.md` referenziert, Normvolltext nicht gelesen**. **B nur im Rahmen der dort genannten Definition:** Gebrauchstauglichkeit hängt von Nutzern, Zielen, Ressourcen und Umgebung ab.
- **[Amershi u. a. 2019](https://doi.org/10.1145/3290605.3300233)** — CHI, **Abstract**. **A:** Rollen und Interaktionszeitpunkte um Fehlererkennung, Korrektur und Übergabe ergänzen.

**Folge (A):** Das neue `AGENTS.md`-Grundmodell als **bestehenden Kern** nutzen, nicht sofort eine zweite konkurrierende Modellquelle schaffen. Eine kleine nachvollziehbare Zuordnung für „Eigentümer / orchestrierendes Modell / ausführendes Modell / menschlicher Entwickler“ mit Zielen, Zuständigkeiten, erlaubten Orten und Abnahmebelegen als *Vorschlag* prüfen. i* eignet sich für Abhängigkeiten, KAOS für Ziele und Hindernisse; ihre Überlegenheit für dieses Labor ist **N**.

### 3. Jede Nachricht gegen den gesamten Anforderungssatz prüfen (U5)

- **[Liu u. a. 2024, *Lost in the Middle*](https://arxiv.org/abs/2307.03172)** — TACL, **im `befund.md` über Abstract**. **B:** Information in langen Kontexten wird nicht gleichmäßig genutzt. **A:** Nicht alle 34 Anforderungen wortreich in jeden Prompt kopieren.
- **[Zhu u. a. 2025](https://arxiv.org/abs/2507.02825)** — **Abstract**. **B:** Auch die Bewertungsaufgabe selbst muss vollständig und korrekt spezifiziert sein.
- **[Open Policy Agent: CI/CD](https://www.openpolicyagent.org/docs/cicd)** — Projektdokumentation, **Dokumentationsseite**. **B:** Regeln können automatisiert gegen strukturierte Eingaben und Repository-Daten geprüft werden.

**Folge (A):** Vor *Änderungen* maschinenlesbare Bezüge zu A.., Zuständigkeit und betroffenen Zielen prüfen; bei *Gesprächsantworten* eine kurze Anforderungs-/Rollenprüfung mit gezieltem Abruf relevanter Regeln. Kein Anspruch, dass damit jedes Wort gegen alle 34 Anforderungen logisch vollständig geprüft wäre (**N**). Für Zielkonflikte den Menschen nach Bedeutung fragen.

### 4. Priorisierung des Rückstands nach Zielen und Gewichten (U6)

- **[van Lamsweerde 2001](https://webperso.info.ucl.ac.be/~avl/gore.php)** — **Autorenverzeichnis**. **A:** Abhängigkeiten zwischen Zielen und Hindernissen als Grundlage der Reihenfolge.
- **[Impact Mapping, Gojko Adzic](https://www.impactmapping.org/)** — Methoden-/Autorenquelle, **nur Methode, kein unabhängiger Wirksamkeitsnachweis**. **A:** Ziel → Akteure → gewünschte Verhaltensänderung → Liefergegenstand verbindet Aufgaben mit Wirkung.
- **[SAFe WSJF](https://scaledagileframework.com/wsjf/)** — Anbieter-/Methodenseite, **nicht empirisch unabhängig geprüft**. **A:** Zeitkritik und Aufwand können ergänzend sortieren, sind aber keine objektiven Gewichte.

**Folge (A):** Zuerst zwingende Blockaden und bestätigte Anforderungen, dann Wirkung auf den Eigentümer, Rückbaubarkeit und Ressourcen berücksichtigen. Keine Scheingenauigkeit durch frei erfundene Gewichte. **Gegenposition:** Story Mapping kann den Zusammenhang von Nutzungsschritten zeigen, QFD verknüpft Bedürfnisse und technische Merkmale; keine Methode wurde hier gegeneinander experimentell getestet (**N**).

### 5. Nachfragen, Unsicherheit und Korrekturkalibrierung

- **[Amershi u. a. 2019](https://doi.org/10.1145/3290605.3300233)** — **Abstract/Projektseite**. **B:** Umgang mit Fehlern und zeitlicher Entwicklung gehört zum Entwurf menschlicher KI-Interaktion.
- **[Laban u. a. 2024, *FlipFlop*](https://arxiv.org/abs/2311.08596)** — Forschungsarbeit, **Abstract laut `befund.md`**. **B in diesem Umfang:** Modelle können Antworten nach unspezifischem Zweifel ändern; das allein zeigt keine echte Korrektur.
- **[Guo u. a. 2017, *On Calibration of Modern Neural Networks*](https://arxiv.org/abs/1706.04599)** — ICML, **bibliografisch/Abstract**. **B:** Konfidenz und tatsächliche Trefferhäufigkeit können auseinanderfallen. **A:** Kalibrierung braucht definierte, wiederholbare Ereignisse.

**Folge (A):** Im Zielbild je Punkt Vorhersage/Status, Korrektur des Eigentümers, Art und Stärke der Korrektur erfassen. Getrennt messen: falsche Sicherheit, unnötige Rückfragen, übersehene echte Mehrdeutigkeit. Ein einzelnes „passt“ ist keine objektive Wahrheitsmarke. Nachfragen nur bei relevanter Bedeutungsunsicherheit, nicht zur technischen Delegation.

### 6. Regeln in funktionale Umsetzung bringen (O7)

- **[Open Policy Agent, *Using OPA in CI/CD Pipelines*](https://www.openpolicyagent.org/docs/cicd)** — offizielle Dokumentation, **Dokumentationsseite**. **B:** Regeln über strukturierte Daten in CI auswerten; Conftest für verschiedene Konfigurationsformate.
- **[NIST AI Risk Management Framework 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf)** — behördlicher Rahmen, **Titel/Struktur, nicht Volltext gelesen**. **A:** Risiken dokumentieren, messen und kontrollieren statt nur Regeln aufzuschreiben.
- **[Zhu u. a. 2025](https://arxiv.org/abs/2507.02825)** — **Abstract**. **B:** Auch Prüfkriterien können falsche Erfolgssignale liefern.

**Folge (A):** Drei Ebenen unterscheiden: (1) **vor der Handlung** Zugriffs-/Abhängigkeitsregeln, (2) **beim Schreiben** Branch-, Datei- und Sicherheitschecks, (3) **nach der Antwort** beobachtete Verhaltensprüfungen. Für deterministische Regeln vorhandenes `tools/build.mjs` und GitHub-Prüfungen bevorzugen. Prompttext allein kann keine garantierte Sperre bilden.

### 7. Fehlermuster über Modellwechsel pflegen

- **[Zhu u. a. 2025](https://arxiv.org/abs/2507.02825)** — **Abstract**. **B:** Benchmark-Design beeinflusst die scheinbare Leistungsänderung; bei Modellwechseln dieselbe Version der Prüfaufgaben festhalten.
- **[Amershi u. a. 2019](https://doi.org/10.1145/3290605.3300233)** — **Abstract**. **B:** Interaktion über Zeit und Fehlerbehandlung sind Entwurfsdimensionen.
- **[Liu u. a. 2024](https://arxiv.org/abs/2307.03172)** — **Abstract über `befund.md`**. **A:** Kontextänderungen sind ein eigener Störfaktor neben dem Modellwechsel.

**Folge (A):** Versioniertes Register mit Fehlermuster, Auslöser, negativem/positivem Beispiel, beobachteter Häufigkeit, Modellversion und Gegenprobe. Bei Wechsel eine unveränderte Basissuite **und** neue echte Fehlfälle testen. „Drift“ nur behaupten, wenn Vergleichsbedingungen kontrolliert sind; sonst **N**.

### 8. Technische Entwurfsfragen methodisch behandeln

- **[Kazman, Klein & Clements 2000, *ATAM: Method for Architecture Evaluation*](https://www.sei.cmu.edu/library/atam-method-for-architecture-evaluation/)** — CMU/SEI-Bericht, **Abstract/Einleitung**. **B:** Architekturen anhand konkurrierender Qualitätsziele und Risiken analysieren, nicht nur anhand einer einzigen Kennzahl.
- **[Kazman u. a. 1998, *The Architecture Tradeoff Analysis Method*](https://www.sei.cmu.edu/library/the-architecture-tradeoff-analysis-method-2/)** — SEI-Bericht, **Abstract**. **B:** Qualitätseigenschaften können sich gegenseitig beeinflussen; Varianten werden an Szenarien geprüft.
- **[Amershi u. a. 2019](https://doi.org/10.1145/3290605.3300233)** — CHI, **Abstract**. **A:** Technische Architektur auch an Nutzung und Fehlererholung messen.

**Folge (A):** Für große Entscheidungen ein kurzes Szenario mit Ausgangslage, Qualitätszielen, mindestens zwei Optionen, Risiken, Gegenprobe und Rückbauweg. Kleine reversible Änderungen brauchen kein vollständiges ATAM-Verfahren. Urteil über Gestaltung/Bedeutung bleibt beim Eigentümer.

### 9. Ponytail als Fundstück (Nachtrag zu #203)

**Was ist es?** [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail), öffentliches Projekt unter MIT-Lizenz, Stand der gelesenen README vom 13.11.2026; Agenten-Skill mit dem Grundsatz: bestehende Fähigkeiten vor Eigenbau, aber erst nach vollständigem Problemverständnis. **Lesetiefe:** README und öffentliches Skill-Dokument; keine Installation, kein Ausführen der Hooks, keine unabhängige Reproduktion der Benchmarks.

**Bedarf zuerst:** A10 (nichts nachbauen), A03 (professionelle Werkzeuge), A07 (verlässliche Ergebnisse), A27 (Fundstücke prüfen), A18 (Arbeit abnehmen). **Belegt im Labor:** Es gibt bereits `fundstueck`, `laborarbeit`, `principles.md` 2/9/10/11 und `tools/build.mjs`. **Lücke (A):** Ein durchgängiger *nachgewiesener* Weg, der vorhandene Fähigkeiten bei jeder Änderung zuerst prüft und bewusst aufgeschobene Vereinfachungen später wieder aufgreift.

| Fähigkeit | Bisheriger Weg | Ponytail | Mehrwert | Risiko |
|---|---|---|---|---|
| Vorhandenes nutzen | A10, Skill `fundstueck` | Stufenfolge: bestehender Code, Standardbibliothek, Plattform, Abhängigkeiten | Konkrete Auswahlreihenfolge | Zu frühe Verengung auf Code-Minimum |
| Regeln wirksam machen | Repo-Build und Prüfungen | Skill-Anweisung plus optionale Lebenszyklus-Hooks | Erinnerung vor Handlung; wiederholbare Auslösung | Hook-Text ist nicht automatisch technische Durchsetzung jeder Regel |
| Abkürzungen nachhalten | Issues/Verlauf | markierte `shortcut:`-Stellen und `/ponytail-debt` | Rückweg für bewusst verschobene Arbeit | weiteres Register, wenn es nicht mit bestehendem Gedächtnis verbunden wird |
| Qualität schützen | `principles.md`, Checks | „When NOT to be lazy“: Validierung, Datenverlust, Sicherheit, Zugänglichkeit, ausdrücklich Gefordertes und gründliches Verstehen nie kürzen; Test für nichttriviale Logik | sinnvolle Untergrenze | Regeln sind nicht automatisch korrekt umgesetzt |

**„When NOT to be lazy“:** Die öffentlich gelesene Skill-Fassung untersagt insbesondere, Eingabevalidierung an Vertrauensgrenzen, Schutz vor Datenverlust, Sicherheit, grundlegende Zugänglichkeit, ausdrückliche Anforderungen und das Verstehen des gesamten betroffenen Ablaufs wegzuoptimieren. **A:** Das entspricht dem Qualitätsvorbehalt des Eigentümers, aber nur, wenn „kleinstes“ *kleinste vollständige Lösung* heißt; das bloß kürzeste Artefakt würde seine systemische Entwurfsarbeit verletzen.

**Herstellerzahlen:** Die Projekt-README nennt für Ponytail 5 unter anderem **−53 % Code, −41 % Zeit, −26 % Kosten, −45 % Tokens** bei eigenen Agentenversuchen. **Status: Herstellerangabe, nicht unabhängig geprüft**; weder Verallgemeinerung auf andere Modelle noch auf nicht-programmierende Entwurfsarbeit zulässig.

**Unabhängigkeit/Sicherheit/Betrieb:** MIT und Textprinzipien sprechen für austauschbare Erkenntnisse (**B**); Hooks brauchen Laufzeit-/Vertrauensprüfung, die hier **nicht getestet** wurde. Installation, Rechte und Kosten nicht freigegeben. Die Idee ist auf Regeln, Dateien und Prozesse **übertragbar als Hypothese**, nicht als belegte Wirksamkeit. Kein Kopieren fremder Skripte, keine automatische Aktivierung.

**Empfohlener Integrationsgrad:** **Arbeitsmuster übernehmen**, nicht integrieren. **Status:** **Pilot** (noch nicht durchgeführt). Pilot an einem reversiblen Laborschritt: Vorhandenes suchen → vollständige Qualitätsanforderungen notieren → Varianten vergleichen → kleinste *vollständig tragfähige* Lösung mit Gegenprobe wählen; Qualität, Rückfragen, Wiederverwendung und Aufwand messen. **Bewusste Nicht-Übernahme:** keine fremden Hooks, keine neuen Regeln oder Dateien aus diesem Bericht.

## Reihenfolge und Bewertung

| Reihenfolge | Option | Nutzen für Qualität/Funktion | Risiko und Gegenprobe |
|---|---|---|---|
| **1 – jetzt umsetzen** | **O1 und O5 im bereits freigegebenen Rahmen:** widersprüchliche technische Übergabewege beseitigen; bestehende Arbeit abschließen statt Neues aufzustapeln | Wirkt unmittelbar auf A14/A18/A22 und macht vorhandene Rückmeldungen nutzbar | Nicht eigenmächtig Prinzipien ändern; nach Änderungen echte Übergabesituation testen |
| **2 – jetzt als Prüfspezifikation, dann Pilot** | **O3:** wenige repräsentative Verhaltensprüfungen für den Eigentümer als Nutzer, inklusive Gegenbeispielen | Unterscheidet „steht als Regel da“ von „funktioniert“ | Richterverzerrung, falsche Erfolgssignale; menschliches Urteil als unabhängige Stichprobe |
| **3 – gezielter Pilot** | **O2/U4:** bestätigtes Grundmodell mit Anforderungen, Mechanismen und Belegen verknüpfen | Macht Zielkonflikte und Scheinreife prüfbar, ohne das bestehende Grundmodell zu duplizieren | Modellierungsaufwand; an echten Entscheidungen zeigen, ob es hilft |
| **4 – im Betrieb prüfen** | **O4/U6:** Korrekturen bis zur wirksamen Gegenprobe verfolgen | Schließt die Lernschleife | Nicht jede Korrektur rechtfertigt eine neue Regel; Wirkung messen |
| **5 – optionaler Pilot** | **Ponytail-Arbeitsmuster**, nicht das Plugin | Vorhandenes nutzen und Komplexität mit Qualitätsschranke begrenzen | Risiko des kleinsten gemeinsamen Nenners; Qualitäts-/Sicherheitsfälle explizit testen |
| **Später, bei nachgewiesenem Bedarf** | neue Infrastruktur/umfangreiche Policy-as-Code-Schicht | könnte Wiederholbarkeit erhöhen | Wartungsaufwand und neue Widersprüche; erst Lücke im vorhandenen Build zeigen |

**Keine automatische Übernahme dieses Urteils:** Die Reihenfolge ist eine fachliche Empfehlung, keine Bedeutungsentscheidung. **Offen für Claude:** Die am 13.11. geänderte `AGENTS.md`-Grundregel ist bereits ein erster Umsetzungsschritt; neue Maßnahmen müssen an ihrem tatsächlichen Verhalten und nicht am ursprünglichen Befund vom 12.11. gemessen werden.

## Ergebnis · geprüft / nicht geprüft · offen

**Ergebnis:** Gegenprüfung U1–U6, Gegenthese zu `u-tiefer`, neun Themen mit Quellen, Lesetiefe, Evidenzstatus und priorisierten Optionen. **Geprüft:** Repo-Dateien und öffentliche Projekt-/Abstractseiten; kein Code oder Regelwerk geändert. **Nicht geprüft:** Normvolltexte, alle referenzierten Forschungs-Volltexte, Ponytail-Hooks/Benchmarks, unabhängige Reproduktion der historischen PR- und Werkchat-Befunde sowie tatsächliche Wirkung der vorgeschlagenen Piloten. **Offen:** Claude soll die Empfehlungen mit dem inzwischen fortgeschriebenen Repo-Stand abgleichen und eine unabhängige Gegenprobe der vorgeschlagenen Verhaltensprüfungen organisieren.
