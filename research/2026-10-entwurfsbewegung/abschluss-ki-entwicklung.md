# Entwicklung mit KI: Entwurfsbewegung, Möglichkeitsraum und wiederkehrende Fehler

**13.11.2026 · Ergänzung und Abschluss der Leitfragen 4–5 aus #49 · Dient A04, A07, A29; berücksichtigt A14, A18, A22, A26.**

**Auftrag und Eigentümer-Rückmeldung:** Der Eigentümer bestätigt am 13.11. die Arbeitsdefinition aus dem Zwischenstand und ergänzt: „Und wie schaffen wir eine Entwicklung mit der ki. Prüfe auch im kontext mit den immer wieder kehrenden fehlermustern“. Dies ist eine **Forschungsfrage**, keine Freigabe neuer Regeln, Skills, Entscheidungen oder weiterer Issues.

## In Worten

Entwicklung mit KI gelingt nicht dadurch, dass die KI den Entwurf als eine Folge fertiger Lösungen behandelt. Sie muss die Bewegung zwischen Frage, Versuch, Beobachtung und Neuformulierung ermöglichen und zugleich bei der Entwicklung des Labors nachweisbar zuverlässig sein. Die bisherigen Fehlerfälle zeigen, dass Modelle Aufträge überdehnen, den aktuellen Stand verfehlen, eigene Regeln nicht einhalten und technische Prüfungen mit inhaltlicher Reife verwechseln können. Deshalb brauchen wir **zwei verschiedene Prüfungen**: Ist die Zusammenarbeit technisch und organisatorisch zuverlässig? Und öffnet sie beim Gestalten tatsächlich Möglichkeiten, statt sie unbemerkt zu schließen? Das sind zusammengehörige, aber nicht identische Ziele.

## Grundlagen: was belegt ist und was wir daraus ableiten

| Kennung | Aussage | Status und Fundstelle |
|---|---|---|
| E1 | Problem- und Lösungsraum können sich im Entwerfen wechselseitig verändern. | **Belegt als Forschungsmodell**: Dorst/Cross (2001), „co-evolution of problem/solution spaces“, [DOI](https://doi.org/10.1016/S0142-694X(01)00009-6), bereits als R2 in [Zwischenstand](zwischenstand.md) gegen Quellen geprüft. **Nicht belegt** als universeller Ablauf. |
| E2 | Ein Programm eröffnet mehrere Lösungen statt eine einzige Form vorzuschreiben. | **Belegt als Gerstners Position**: „Instead of solutions for problems, programmes for solutions“, *Designing Programmes* (1964), [CUNY-Auszug](https://openlab.citytech.cuny.edu/langecomd3504sp2020/files/2018/10/Gerstner_DesigningProgrammes-1.pdf), R1 im Zwischenstand und Claudes Gegenlesen zu #49. |
| E3 | Nutzung und Entwicklung sind unterscheidbar und können iterativ ineinandergreifen. | **Belegt im Lebenszyklusrahmen**: ISO/IEC/IEEE 15288:2023, [ISO-Abstract](https://www.iso.org/standard/81702.html), R3; die konkrete Laborübertragung ist **abgeleitet**. |
| E4 | Handlungsmöglichkeiten hängen von Akteur und Umgebung ab. | **Belegt als Theorie**: Gibson (1979), „the complementarity of the animal and the environment“, [Kapitel-PDF](https://web.eecs.umich.edu/~stellayu/teach/2023action/papers/1979gibsonAffordance.pdf), R5; auf KI-Entwurfsarbeit **abgeleitet**. |
| E5 | Gestaltung kann durch Artefakte und Reflexion selbst Erkenntnis erzeugen. | **Belegt als Position in gelesenen Textauszügen**: Grabbe/Held (2024), „Forschung ‚durch Design‘“, und Schmitz u. a. (2016), „Träger von Wissen“, dokumentierte PDF-Stellen in [Chat-Rücksicherung](chat-ruecksicherung-2026-10-30.md). **Nicht belegt**: allgemeine Wirksamkeit für dieses Labor. |
| E6 | Das Labor verzeichnet wiederholte Fehler bei Lesart, Stand, Befugnis, Behauptungsstärke und Regelbefolgung. | **Belegt als dokumentierte Einzelfälle**: [Fehlermusterbefund](../2026-10-audit-zusammenarbeit/befunde.md), Karten K1–K16, Issues #39, #52, #55, #65, #77; ChatGPT-Gegenlesen in #100. **Nicht belegt**: dass die Muster gleich häufig bei allen Modellen sind oder eine einzelne Ursache haben. |
| E7 | In den WA-Evals 020–023 lagen zwölf Prüferfehler und null klassifizierte Modellfehler vor. | **Belegt in ausgewerteten Projektdaten**, dokumentiert in #100 und [Fehlermusterbefund](../2026-10-audit-zusammenarbeit/befunde.md) Abschnitt „Strukturbefund“; **nicht** gleichbedeutend mit fehlerfreiem Modellverhalten in allen Fällen. |
| E8 | Das Labor unterscheidet Werk und System, hält Bedeutung beim Eigentümer und delegiert Technik. | **Belegt als geltender Projektmaßstab**: [AGENTS.md](../../AGENTS.md), [principles.md](../../principles.md) Prinzip 9 und [intent.md](../../intent.md). **Nicht belegt**: dass diese Regeln bereits zuverlässig umgesetzt werden. |

## Leitfrage 4: Wie entwickeln wir das Labor und gestalten mit KI?

**Arbeitsmodell (abgeleitet aus E1–E8):** Es gibt zwei ineinander verschränkte Schleifen, keine zwei isolierten Arbeitswelten.

1. **Systementwicklung:** Ein Problem aus dem tatsächlichen Gebrauch oder dem Laborbetrieb wird beobachtet → der betroffene Zweck und die gültige Anforderung werden ermittelt → Alternativen und Grenzen werden gezeigt → eine reversible Änderung wird auf einem Branch umgesetzt → technischer Test **und** Verhaltens-Gegenprobe → nach unabhängiger Prüfung übernommen oder verworfen. Der Eigentümer entscheidet nur über Bedeutung, Gestaltung, neue Regeln und schwer Umkehrbares.
2. **Gestalterischer Gebrauch:** Der Eigentümer stellt eine gestalterische Frage oder zeigt Material → die KI öffnet mehrere fachlich begründete Wege, Gegenbeispiele und noch unbekannte Fragen → ein Versuch erzeugt Artefakte/Erfahrungen → die Fragestellung und der Möglichkeitsraum werden neu bewertet. Eine beobachtete Arbeitsweise wird **nicht automatisch** zur Systemregel.

**Entscheidender Übergang:** Eine Beobachtung im Gebrauch ist **Evidenz für eine mögliche Verbesserung** des Systems, nicht deren Freigabe. Die KI kann eine kleine reversible Korrektur innerhalb des bestehenden Auftrags erledigen, aber sie darf aus einer einzelnen Reaktion keine neue allgemeine Gestaltungsdoktrin ableiten. Das ist keine Trennung von Praxis und Theorie, sondern eine Unterscheidung ihrer Verbindlichkeit.

### Wiederkehrende Fehlermuster als Entwurfsrisiken

| Beobachteter Fall | Wie er den Möglichkeitsraum schädigt (abgeleitet) | Gegenprobe, die wirklich etwas zeigt (Vorschlag) |
|---|---|---|
| **Mehrdeutigkeit still verengt oder erweitert** (#55, #77; K1–K4) | Die KI wählt unbemerkt, welche Frage überhaupt bearbeitet wird; aus Kritik wird ein neues Vorhaben. | Vor irreversibler Handlung die gemeinte Lesart kurz spiegeln; prüfen, ob ein Einwand **korrigiert** statt ein neues Projekt startet. |
| **Alter Stand statt aktuellem Repo** (#52, #65; K11–K14) | Entwurfsvarianten beruhen auf nicht mehr geltenden Bedingungen; parallel entstehen konkurrierende Lösungen. | Vor Änderung den führenden Stand und tatsächliche Labels/Abhängigkeiten frisch lesen; mit absichtlich widersprüchlichem Alttext testen. |
| **Eigene Regel nicht eingehalten** (#65, #77; K10) | Eine vermeintlich sichere Systemgrenze ist nur Text; der Mensch muss überwachen. | Für objektive Grenzen technische Sperren; für semantische Grenzen echte Dialogfälle, nicht bloß „Regel vorhanden“. |
| **Scheinbeleg / zu starke Erfolgsmeldung** (#39, #52; K6/K12) | Eine Hypothese wird zur Prämisse; weitere Optionen werden zu früh ausgeschlossen. | Jede wesentliche Aussage mit „belegt / abgeleitet / nicht belegt“ und sichtbarer Fundstelle; Build ≠ inhaltliche Abnahme. |
| **Übergriff auf Freigaben und Branches** (#77; K15/K16) | Der Eigentümer verliert die Entscheidung über Rahmen und Richtung. | Vor Schreibschritt Branch, Auftrag und Berechtigung maschinell prüfen; nach Fehler **abbrechen**, nicht mit dem nächsten Kommando fortfahren. |
| **Regel-/Review-Überbau** (WA-Audit, K23–K25) | Energie wandert von Entwurf zu Stützarbeit; der Raum der Experimente wird faktisch kleiner. | Vor neuer Datei/Regel vorhandene Funktion verbessern; Aufwand für echte Entwurfsversuche und Korrekturen messen. |
| **Prüferfehler als Modellfehler** (WA-Evals 020–023; E7) | Eine korrekte Entwurfsbewegung wird durch falsche Bewertung ausgeschlossen. | Prüfer und Modell getrennt untersuchen; Fehlfälle mit unabhängiger Stichprobe kalibrieren. |

**Wichtig:** Diese Tabelle beschreibt überprüfbare **Risiken**. Sie beweist nicht, dass ein einzelnes Regelwerk oder ein Modellwechsel alle Fälle verhindert.

### Drei mögliche Wege

**A – Bestehendes Grundmodell im Alltag erproben (bevorzugter erster Schritt, abgeleitet).** `AGENTS.md`, `intent.md`, `anschluss/` und vorhandene Checks benutzen; drei echte Szenarien: (i) Einwand ohne Neuauftrag, (ii) veraltetes Issue mit aktuellem Label, (iii) gestalterische Frage, bei der die KI Varianten eröffnet statt Stil festzulegen. **Nutzen:** wenig neue Infrastruktur, echte Wirkung sichtbar. **Risiko:** Verhaltensgrenzen lassen sich nicht vollständig technisch erzwingen.

**B – Sichtbare Entwurfs- und Entwicklungsansicht als Pilot (abgeleitet).** Ein und dieselbe Arbeit kann eine Ansicht für *Zweck, Varianten, Versuch, Erkenntnis* und eine für *Anforderung, Änderung, Test, Rückbau* besitzen. Beide beziehen sich auf denselben Fall, aber die Kriterien bleiben unterscheidbar. **Nutzen:** Wechselwirkungen werden sichtbar. **Risiko:** zusätzliche Oberfläche, doppelte Datenhaltung; erst als Mock-up/Experiment, nicht als neue Pflichtstruktur.

**C – Zusätzlicher Skill/Policy-Schicht (zurückstellen, abgeleitet).** Denkbar, falls die drei Szenarien wiederholt scheitern und eine konkrete Lücke nachweisbar ist. **Nutzen:** wiederverwendbare Führung. **Risiko:** gerade die bereits beobachtete Regel- und Prüfspirale; Textregeln garantieren kein Verhalten. **Kein Auftrag zur Einführung.**

### Was wäre ein aussagekräftiger Pilot?

**Vorschlag, keine bereits durchgeführte Messung:** Mit dem gleichen Modell und derselben Ausgangslage drei Aufträge zweimal durchführen – einmal im heutigen Labor, einmal mit expliziter Modusunterscheidung und kurzer Gegenprobe. Dokumentieren: (1) wurde die Eigentümerfrage richtig verstanden, (2) wie viele eigenmächtige Richtungswechsel, (3) welche neuen *qualitativ unterschiedlichen* Entwurfsoptionen entstanden, (4) wie viel Rückfrage- und Korrekturarbeit musste der Eigentümer leisten, (5) welche technische Prüfung wurde tatsächlich ausgeführt. Eine höhere Variantenanzahl allein ist kein Qualitätsgewinn. Mindestens ein Test muss die *Prüfvorrichtung selbst* herausfordern.

## Leitfrage 5: zwei Modi oder drei Perspektiven?

**Urteil: Die drei Perspektiven sind als *Etiketten* nützlich, aber nicht als drei abgeschlossene Phasen.** **Abgeleitet** aus E1/E3/E5/E8 und [Modi-und-Dokumentation-Befund](../2026-10-modi-und-dokumentation/befund.md).

| Perspektive | Gegenstand | Qualitätsmaßstab | Grenze |
|---|---|---|---|
| **system** | Fähigkeiten und Verlässlichkeit des Labors bauen und verbessern | Nachvollziehbarkeit, Rechte, tatsächliche Prüfungen, Rückbau, geringe Stützlast | Nicht aus einzelner Praxis eine allgemeine Regel ableiten |
| **fach** | Gestaltungswissen, Methoden, Modelle, Kanon und Kritik erarbeiten | Herkunft, Geltungsgrenzen, fachliche Tiefe, neue Erkenntnisse | Fachliche Position ist nicht automatisch Gestaltungsvorgabe |
| **gebrauch** | Mit dem Labor in einer konkreten Situation gestalten | Wirkung, Qualität, Offenheit, gestalterisches Urteil, Lernen aus Versuch | Ein Werk ist kein alleiniger Systemreife-Test |

**Beziehungen:** Fachliche Entwicklung kann in Systementwicklung *und* Gebrauch stattfinden; Gebrauch liefert neue fachliche Erkenntnisse und Systemanforderungen. Ein Experiment kann deshalb **mehrere Perspektiven** berühren, soll aber **seinen primären Prüfgegenstand** nennen. Ein starres exklusives Label würde die vom Eigentümer betonte Dynamik wieder abschneiden.

**Empfehlung für `decisions/` (abgeleitet):** `system | fach | gebrauch` **vorläufig beibehalten**, weil sie als Such- und Prüfhilfe brauchbar sind; **nicht** zu drei separaten Silos, verpflichtenden Abläufen oder einem neuen Regelwerk ausbauen. Grenzfälle als Mehrfachbezug und mit erklärtem Hauptmaßstab führen. Bei der nächsten tatsächlichen Entscheidung beobachten, ob die Etiketten die falsche Vermischung verhindern; bei Misserfolg die Etiketten ändern, nicht die Praxis passend machen. Die endgültige Bedeutungsentscheidung liegt beim Eigentümer.

## Übergabe, Grenzen und offene Punkte

**Ergebnis:** Leitfragen 4 und 5 beantwortet; die vom Eigentümer am 13.11. ergänzte Frage „Entwicklung mit KI im Kontext wiederkehrender Fehlermuster“ ausdrücklich integriert. **Geprüft:** bestehender Zwischenstand #49, dokumentierte Quellenrücksicherung #120, Projektgrundmodell, Fehlermusterbefund und dessen ChatGPT-Gegenlesen #100. **Nicht geprüft:** neue Primärquellen jenseits des vorhandenen Korpus, reproduzierte Modelltests, eine tatsächlich erprobte Oberfläche oder Skill, vollständige Volltexte. Die von Claude am Zwischenstand angemerkte **R6-Zitatunsicherheit** bleibt bestehen: Kauffman nicht als wörtlich verifiziert behandeln. **Offen:** unabhängige Gegenlesung dieses zweiten Teils (Quellenstichprobe), technische Build-Prüfung und Eigentümerentscheidung zu einer späteren Pilotierung. Keine Regeln, Skills oder Entscheidungen verändert.
