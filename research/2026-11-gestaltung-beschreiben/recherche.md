# Recherche: Gestaltung beschreiben als Übersetzung zwischen Gestalter und Maschine

**14.11.2026 · Auftrag #262 · Forschungsstand, kein Beschluss · A01, A04, A05**

## In fünf Sätzen

Gestaltung lässt sich nicht vollständig in eine Liste von Eigenschaften übersetzen: Beim Entwerfen verändert die Antwort des Materials oft schon die Frage [Q1, Q2; belegt]. Eine Maschine braucht deshalb neben sichtbaren Merkmalen auch Aufgabe, Verwendung, Ort, bisherige Entscheidungen und die Möglichkeit, Unsicherheit zu melden [Q2; abgeleitet; ein Verweis auf „Q4“ stand ohne Eintrag im Register und ist gestrichen, Claude 14.11.]. Die Semiotik hilft, Zeichen und ihre möglichen Bedeutungen zu untersuchen, aber eine rote Marke ist nicht allein wegen der Farbe ein Alarmsignal [Q5–Q8; abgeleitet]. Bild-Sprach-Modelle können bestimmte Merkmale und Urteile prüfen, bleiben bei komplexem Grafikverständnis jedoch nach veröffentlichten Benchmarks deutlich begrenzt [Q10, Q11; belegt auf Abstract-Ebene]. Für das Labor empfiehlt sich vorerst eine **verbindende Fragestellung** über vorhandene Fachpakete und ein realer Gestaltungsprüffall, nicht vorschnell eine neue universelle Beschreibungssprache [abgeleitet].

## Lesart und Methode

Ich prüfe die Übersetzung **in beide Richtungen**: Welche Ressourcen braucht ein intuitiv handelnder Mensch, und welche expliziten Informationen und Rückmeldungen braucht ein Modell, um sinnvolle Entwurfsarbeit zu unterstützen? Ich nehme an, dass nicht der Mensch seine Praxis an ein starres Datenformat anzupassen hat, sondern das Werkzeug Artefakt, Kontext und Gespräch miteinander vermitteln muss.

**Lesestand:** Am 14.11.2026 wurden offen zugängliche Abstracts, Verlags-/Normseiten und ausgewählte frei zugängliche Originaltext-Ausschnitte per Webrecherche gelesen; keine vollständige systematische Literaturauswertung und keine eigenen Modellversuche. Im Labor gelesen: `AGENTS.md`, die beiden Skills `bertin-semiologie` und `bildanalyse`, `belegpflicht`, Zielbildpunkt `a-recherche-gestaltung-beschreiben`, Eingang `arbeitsweise-a67`. „Belegt“ meint nur die enge Aussage der Fundstelle, keine experimentelle Bestätigung im Labor.

## 1 · Übersetzung und Arbeitsteilung

| Aussage | Status und Beleg / Lesestand |
|---|---|
| Entwerfen ist bei Schön ein Wechsel von *sehen – verändern – erneut sehen*, einschließlich unerwarteter Wirkungen; als KI-Ziel empfiehlt er **Assistenten** statt phänomenologisch gleichartiger Designer. | **belegt** · [Q1], Abstract und Einleitung im offen zugänglichen Aufsatz (1992), kein vollständiger Textdurchgang. |
| Handlungspläne und Beschreibungen ersetzen bei Suchman die konkrete Situation nicht; Mensch und Maschine haben asymmetrischen Zugang zum Handlungskontext. | **belegt** · [Q2], Originaltext-Auszug S. 124 und Verlagskapitel-Zusammenfassung. |
| Menschen brauchen zurückwirkende Artefakte und die Freiheit, ihr Problem neu zu rahmen; Modelle brauchen konkrete Aufgaben, Beispiele, Bedingungen und explizite Grenzen des Wissens. | **abgeleitet** · aus [Q1], [Q2] und Laborgrundmodell. Es ist keine geprüfte vollständige Anforderungsliste. |
| Das System sollte bei Fehlern, Unsicherheit und sich entwickelnder Nutzung nachvollziehbar reagieren: die 18 Leitlinien von Amershi et al. wurden in einer Untersuchung mit 49 Praktikern an 20 Produkten eingesetzt. | **belegt** · [Q3], CHI-2019-Abstract; Leitlinien sind Designhilfe, keine Garantie für Vertrauen. |
| „Die KI kann die Intuition des Gestalters vollständig aus einem Prompt rekonstruieren.“ | **nicht belegt** · widerspricht der in [Q1] und [Q2] beschriebenen Grenze; keine entsprechend stützende Studie geprüft. |

**Praktische, noch nicht beschlossene Übersetzungsprobe (abgeleitet):** Mensch → Modell: Was ist das Werk, für wen und wo erscheint es, welche Absicht und Spannungen gelten, was bleibt offen? Modell → Mensch: Was sehe ich konkret, welche Funktion vermute ich, welche Alternative wäre möglich, welche Nebenwirkung zeigt ein vergleichbares Rendering, worüber entscheidest du? Ein Ergebnis sollte das Artefakt **zeigen**, nicht nur seine Eigenschaften behaupten.

## 2 · Semiologie/Semiotik: Zeichen im Kontext

| Ansatz | Eng belegbarer Beitrag | Grenze / Lesestand |
|---|---|---|
| **Peirce**: ikonisch, indexikalisch, symbolisch als unterschiedliche Beziehungen von Zeichen und Gegenstand. | **belegt** · [Q5], Stanford Encyclopedia, Abschnitt zur Trichotomie; der Text warnt selbst vor reinen Fällen. | **abgeleitet:** Farbton und Bedeutung dürfen nicht eins zu eins gleichgesetzt werden; ein Zeichen kann mehrere Funktionsweisen vereinen. |
| **Groupe µ**, *Traité du signe visuel* (1992). | **belegt** · [Q6], Bibliotheksnormdatensatz und Buchvorschau (Inhaltsrubriken, nicht Theorie im Volltext). | **nicht belegt:** Welche konkrete Taxonomie der plastischen Zeichen am Labortest überlegen ist, bleibt ohne Lektüre offen. |
| **Kress/van Leeuwen**, *Reading Images*, dritte Auflage 2021. | **belegt** · [Q7], Verlagsbeschreibung: systematische Analyse visueller Bedeutungsbildung; überarbeitet mit Diagrammen, Datenvisualisierung und Modalität. | **nicht belegt:** Übertragbarkeit einzelner Kategorien auf die Laboroberfläche; Volltext nicht gelesen. |
| **Krippendorff / Butter**, Artefakte als Bedeutungen in Verwendung und für unterschiedliche Beteiligte. | **belegt** · [Q8], Verlags-Abstract des Kapitels „Semantics: Meanings and Contexts of Artifacts“ und [Q9] Buchgliederung. | **abgeleitet:** Bedeutungen müssen nach Gebrauchssituation und Beteiligten, nicht nur nach Aussehen geprüft werden. |
| **Barthes, Eco, Bonsiepe**, weitere Suchstellen. | **nicht belegt** · keine Primärstellen in diesem Durchgang erschlossen. | Weder als ungeprüften Kanon übernehmen noch ihre Relevanz verwerfen. |

**Rote Marke als Laborfall (belegt für den Vorfall):** `daten/arbeitsweise.json`, Aussage `arbeitsweise-a67`, dokumentiert die Entfernung der roten Marke wegen einer zu allgemeinen Farbregel. **Abgeleitet:** Eine Prüfung muss mindestens zwischen *Identitätszeichen/Marke* und *Handlungs- oder Gefahrenindikator* unterscheiden und Farbe, Form, Menge, Platzierung, Nachbarschaft und Medium gemeinsam beurteilen. **Nicht belegt:** Dass eine dieser Dimensionen unabhängig vom konkreten Bild hinreichend ist, um die Wirkung zu bestimmen.

## 3 · Was Maschinen heute beschreiben können

| Evidenz | Was sie zeigt und nicht zeigt |
|---|---|
| **DesignProbe**, Lin et al., IEEE Transactions on Multimedia 2026: 8 Aufgaben auf Erkennungs-, semantischer und Gesamtebene, 1.600 annotierte Beispiele, 19 Modelle; bestes angegebenes Gesamtergebnis 65,5 %. | **belegt auf Abstract-Ebene** · [Q10]. Die Quote ist **eine Benchmark-Leistung**, kein Anteil „verstandener Gestaltung“ und nicht auf andere Designs übertragbar. Testfälle und Fehlermuster im Volltext nicht geprüft. |
| **AesEval-Bench**, An et al. (2026), vier Dimensionen, zwölf Indikatoren, Aufgaben zu ästhetischem Urteil, Regionenwahl und Lokalisierung; Autoren berichten deutliche Lücken. | **belegt auf Abstract-Ebene** · [Q11]. Preprint, keine geprüfte Feldvalidierung. |
| **Design Tokens Community Group**, stabile Formatspezifikation 2025.10: Namen, Werte, Typen, Beschreibungen und Referenzen transportieren gestalterische Eigenschaften zwischen Werkzeugen. | **belegt** · [Q12], Normtext §3 und §6; Gruppen sollen ausdrücklich **nicht** zur automatischen Ableitung von Typ/Zweck verwendet werden. |
| „Tokens beschreiben die kulturelle Bedeutung, Bildwirkung und die Absicht des Gestalters vollständig.“ | **nicht belegt** · [Q12] spezifiziert Austausch von Eigenschaften, nicht die vollständige Interpretation eines Werks. |
| **Ontologien / strukturierte Bildkritik-Datensätze** als vollständige Übersetzungssprache für die offene Gestaltungspraxis. | **nicht belegt** · in dieser Recherche keine belastbare, über mehrere Werktypen validierte Gesamtlösung gefunden. Eine Ontologie könnte Teilrelationen ausdrücken; ihr Mehrwert müsste geprüft werden. |

**Abgeleitete Arbeitsgrenze:** Bildmodelle können Befunde wie „links oben steht eine rote Fläche“ als überprüfbare Hypothese anbieten. Aussagen wie „die rote Fläche bedeutet Gefahr“, „sie muss verschwinden“ oder „die Komposition wirkt stimmig“ brauchen Kontext, Vergleich und letztlich das Gestaltungsurteil; sie sind nicht automatisch aus der Pixelklassifikation bewiesen.

## 4 · Grenzen der Semiologie, Ergänzungen

1. **Praxis und implizites Können:** Schön beschreibt wissendes Handeln, das sich nicht restlos verbalisieren lässt (**belegt**, [Q1]). Folgerung: Rendern, Variieren und Gegenüberstellen sind für die Übersetzung ebenso zentral wie Beschreiben (**abgeleitet**).
2. **Situierung:** Suchman unterscheidet Handeln von seiner nachträglichen bzw. geplanten Beschreibung (**belegt**, [Q2]). Folgerung: Kontext nicht als Metadaten-Dekoration behandeln, sondern vor jeder Umdeutung erneut abgleichen (**abgeleitet**).
3. **Gebrauch, Kultur, Erfahrung:** Bødker benennt in der HCI-Forschung Multiplikität, Kontext, Grenzen, Erfahrung und Partizipation (**belegt**, [Q13], frei zugänglicher Preprint/Abstract). Folgerung: Semiotik allein ersetzt Nutzerforschung und reale Wirkungstests nicht (**abgeleitet**).
4. **Wahrnehmungs- und Gestalttheorie, Farbgestaltung, Bildwissenschaft:** ergänzende Fachgebiete für Gewichtung, Gruppierung, Material, Wahrnehmungsbedingungen und Wirkungsanalyse (**abgeleitet** aus der Art der offenen Fragen). **Nicht belegt** ist in diesem Durchgang ein empirischer Vorrang einer einzelnen Theorie oder ein universelles Farburteil.

## 5 · Konsequenz für das Labor (Vorschlag, keine Regel)

**Empfehlung: zunächst eine fachübergreifende Klammer als Forschungsfrage, kein eigenes neues Fachpaket.** **Abgeleitet:** Der Gegenstand verbindet Gestaltungspraxis, Zeicheninterpretation, Produktsemantik, Interaktion, Wahrnehmung und technische Repräsentation. Ein Spezialpaket könnte später folgen, **wenn** konkrete Prüffälle wiederholt eigene Methoden verlangen, die die bestehenden Pakete nicht abdecken.

**Abgrenzung der vorhandenen Skills:**

- `bertin-semiologie` prüft die **Eignung visueller Variablen für Datentypen und Leseaufgaben**. Das ist nicht die allgemeine Semiotik aller Marken, Bilder und Gebrauchsobjekte (**belegt**, Skilltext; **abgeleitete** Reichweitengrenze).
- `bildanalyse` trennt **gesehen, gewusst, gedeutet** und nutzt formale Analyse/Panofsky/Bildakt. Sie gibt einen Erkenntnisablauf für einzelne Bilder, aber keine garantierte Rückübersetzung in umsetzbare, getestete Gestaltungsentscheidungen (**belegt**, Skilltext; Grenze **abgeleitet**).
- Die vorgeschlagene Klammer wäre *Übersetzungsqualität*: Hat das Modell Kontext und Geltungsbereich einer Regel erhalten, die eigene Interpretation sichtbar als Interpretation ausgewiesen und eine prüfbare Alternative am Artefakt angeboten? (**abgeleitet**, noch nicht beschlossen).

**Kleiner realer Prüffall (abgeleitet):** Rote Marke im Seitenkopf versus rote „Du bist dran“-Markierung. Dasselbe Farbattribut in zwei Verwendungen, mit tatsächlichen Abbildungen, Nutzeraufgabe und dem genauen Ort; die KI soll beide beschreiben, ihre Bedeutungsannahmen trennen und keine Änderung allein aus dem Farbton ableiten. **Nicht geprüft:** Ob der heutige Bildmodell-Workflow diese Probe besteht. Nicht ohne Kontext ein automatisches Verbot generieren.

## Offene Punkte für Claude (maximal drei)

1. **Priorität für Vertiefung:** Erst das tatsächliche Marken-/Signalpaar als Bildprobe prüfen oder zunächst Originalkapitel von Groupe µ und Krippendorff vollständig lesen? Empfehlung: zuerst Bildprobe, anschließend gezielt vertiefen.
2. **Facharchitektur:** Bleibt Übersetzung eine Querverbindung, bis mindestens zwei reale Werke den Bedarf an einem eigenen Fachpaket belegen? Empfehlung: ja, nichts duplizieren.
3. **Messbarkeit:** Welche sichtbaren Verhaltensindikatoren (Kontext abgefragt, Hypothese markiert, Variante gerendert, Konsequenz geprüft) tragen ohne Scheinquantifizierung? Empfehlung: am realen Fall definieren.

## Quellenregister mit tatsächlichem Lesestand

- **[Q1]** Donald A. Schön, „Designing as Reflective Conversation with the Materials of a Design Situation“, *Research in Engineering Design* 3 (1992), 131–147. Abstract und Einleitung im offen zugänglichen Manuskript gelesen: https://creativetech.mat.ucsb.edu/readings/Schon1992_Article_DesigningAsReflectiveConversat.pdf
- **[Q2]** Lucy Suchman, *Plans and Situated Actions*, Cambridge University Press 1987, Auszug S. 124 gelesen; zusätzlich Cambridge-Verlagszusammenfassung des 2006er Kapitels gelesen (Verweis auf einen Scan einer Kursseite entfernt, Claude 14.11.): https://www.cambridge.org/core/books/abs/humanmachine-reconfigurations/conclusion-to-the-1st-edition/8386E26332B53FF8314D54C5167BFCCF
- **[Q3]** Saleema Amershi et al., „Guidelines for Human-AI Interaction“, CHI 2019, DOI 10.1145/3290605.3300233. Abstract auf Microsoft Research gelesen: https://www.microsoft.com/en-us/research/project/guidelines-for-human-ai-interaction/
- **[Q5]** Stanford Encyclopedia of Philosophy, „Peirce’s Theory of Signs“, Abschnitt zu icon/index/symbol gelesen: https://plato.stanford.edu/entries/peirce-semiotics/
- **[Q6]** Bibliothèque nationale de France, Datensatz FRBNF35489161, *Traité du signe visuel* (1992), bibliografische Angaben; keine Volltextlektüre: https://catalogue.bnf.fr/ark:/12148/cb354891612
- **[Q7]** Routledge, *Reading Images: The Grammar of Visual Design*, 3. Auflage 2021, Beschreibung gelesen: https://www.routledge.com/Reading-Images-The-Grammar-of-Visual-Design/Kress-vanLeeuwen/p/book/9781003099857
- **[Q8]** Klaus Krippendorff / Reinhart Butter, „Semantics: Meanings and Contexts of Artifacts“ (2008), Verlags-Abstract gelesen: https://www.sciencedirect.com/science/article/abs/pii/B9780080450896500174
- **[Q9]** Klaus Krippendorff, *The Semantic Turn*, Routledge, Inhaltsverzeichnis gelesen, nicht Volltext: https://www.routledge.com/link/link/p/book/9780415322201
- **[Q10]** Jieru Lin et al., „Can Multimodal Large Language Models Understand Graphic Design? A Comparative Study“, *IEEE Transactions on Multimedia* (2026), DOI 10.1109/TMM.2026.3684992; Abstract gelesen: https://doi.org/10.1109/TMM.2026.3684992 **Fundstelle bei der Übernahme nicht nachgeprüft** (Claude, 14.11.: doi.org und arxiv.org aus der Prüfumgebung nicht erreichbar); vor Weiterverwendung gegenprüfen.
- **[Q11]** Arctanx An et al., „Can Vision Language Models Assess Graphic Design Aesthetics?“, arXiv:2603.01083 (2026), Abstract gelesen: https://arxiv.org/abs/2603.01083 **Fundstelle bei der Übernahme nicht nachgeprüft** (Claude, 14.11.: doi.org und arxiv.org aus der Prüfumgebung nicht erreichbar); vor Weiterverwendung gegenprüfen.
- **[Q12]** Design Tokens Community Group, *Design Tokens Format Module 2025.10*, §3 und §6, Normtext gelesen: https://www.w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/
- **[Q13]** Susanne Bødker, „When Second Wave HCI Meets Third Wave Challenges“, NordiCHI 2006, Abstract und Anfang des frei verfügbaren Preprints gelesen: https://pure.au.dk/ws/files/93115128/nordichipreprint.pdf

**Prüfstatus:** Quellen-URLs und grobe Belegstellen aufgerufen; Aussagen eng am lesbaren Ausschnitt formuliert. **Nicht geprüft:** Volltexte durchgehend, unabhängige Zweitprüfung, Bildexperimente, Barrierefreiheit, Repo-Build/CI. Keine geschützten Texte oder Bilder in das Repository übernommen.
