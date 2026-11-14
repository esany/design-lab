---
dient: A01, A04, A05, A23
datum: 2026-11-14
issue: "#238"
status: Recherchebefund; kein neues Wissensmodell beschlossen
---

# Wissensnetz: Modell, Wachstum und gültige Verbindungen

**Lesart:** Ich untersuche, wie fachliches Wissen top-down, bottom-up und in Mischformen erschlossen, verbunden, gepflegt und dargestellt werden kann. Ich schneide damit weder Leitfaden noch Fachpakete neu und behaupte nicht, dass ein automatisch gezeichneter Zusammenhang schon wahr ist.

## In fünf Sätzen

Fachwissen muss nicht entweder aus einem fertigen Schema stammen oder ungeordnet wachsen: Beide Wege erfüllen unterschiedliche Aufgaben. Formale Modelle geben Beziehungen eine klare Bedeutung; offene Notizen und Tags erlauben zunächst auch unerwartete Zusammenhänge. Entscheidend ist, eine gefundene Ähnlichkeit von einer begründeten Beziehung und einer bestätigten Fachregel zu trennen. Verbindungen brauchen Herkunft, Geltungsbereich, Pflege und sichtbare Unsicherheit, sonst täuscht ein schönes Netz eine Erkenntnis vor. Für das Labor bietet sich ein leichtes, veränderbares Wirknetz mit präzisen Beziehungstypen an – als Vorschlag, nicht als neue Entscheidung.

**Lesestand (14.11.2026):** Intern `research/2026-11-arbeitsoberflaeche/analyse.md` §4, `research/2026-11-leitfaden-sota/befund.md` §3, `research/2026-11-visualisierungssysteme/befund.md` §§1, 6, `zielbild/punkte.json` über den im Auftrag und `analyse.md` dokumentierten Strang Leitfaden, `belegpflicht/SKILL.md`. Extern: Normtexte W3C (SKOS, PROV-O, SHACL, OWL 2), Fach-/Archivseiten und Forschungsabstracts; keine Gesamtauswertung des Feldes, kein neues Netz gebaut, keine Diagrammtests. **Belegt** heißt: Quelle enthält die konkrete Aussage; **abgeleitet** heißt: Vorschlag für das Labor; **nicht belegt** bezeichnet ungeklärte Wirkung.

## Quellen und genau gelesene Ebene

| ID | Fundstelle / Lesestand |
|---|---|
| W1 | [W3C, SKOS Reference (2009)](https://www.w3.org/TR/skos-reference/), §§7–10 zu Dokumentation, Relationen, Collections und Mapping; Normtext gelesen. |
| W2 | [W3C, SKOS Primer](https://www.w3.org/TR/skos-primer/), §2.3 zu mehreren Oberbegriffen; normative Grenze siehe W1. |
| W3 | [W3C, PROV-O (2013)](https://www.w3.org/TR/prov-o/), §§3.1, 3.3: Entity, Activity, Agent, qualifizierte Relationen; Normtext gelesen. |
| W4 | [W3C, OWL 2 Primer (2012)](https://www.w3.org/TR/owl2-primer/), Abstract und Einführung; formale Ontologiesprache, kein Praxisbeleg für Laborpassung. |
| W5 | [W3C, SHACL (2017)](https://www.w3.org/TR/shacl/), Abstract und Validierungsprinzip; Normtext in Auszügen. [SHACL 1.2 Overview](https://w3c.github.io/data-shapes/shacl12-overview/) ist am 14.11.2026 nur ein **Editor's Draft** (13.11.2026), kein bereits gültiger 1.2-Standard. |
| W6 | [Vander Wal, Folksonomy, Definition (2007)](https://vanderwal.net/folksonomy.html), Selbstbeschreibung und historische Notiz; Konzeptquelle, keine Wirkungsstudie. |
| W7 | [Niklas-Luhmann-Archiv, Zettelkasten](https://niklas-luhmann-archiv.de/nachlass/zettelkasten), Archiverschließung; [„Kommunikation mit Zettelkästen“](https://ckrybus.com/static/papers/luhmann1981.pdf) online als Text zugänglich, hier Einleitung gelesen. Kein Nachweis allgemeiner Überlegenheit. |
| W8 | [Alexander et al., A Pattern Language (1977)](https://content.www.wellcomecollection.org/works/grc5zequ), Bibliothekskatalog und Zusammenfassung, nicht das vollständige Buch; [Dawes/Ostwald, 2018](https://doi.org/10.1177/2399808318761396), Abstract zur Graphstruktur. |
| W9 | [Zhang/Adar/Hullman, NetHOPs, TVCG 2022](https://pubmed.ncbi.nlm.nih.gov/34587012/), Abstract zur Unsicherheit probabilistischer Netze. |
| W10 | [interner Vorbefund #172](../2026-11-leitfaden-sota/befund.md), §3; schon vorhandene Erkenntnisse zu Wissensabruf/Struktur, nicht neu recherchiert. |
| W11 | [interner Visualisierungssysteme-Befund](../2026-11-visualisierungssysteme/befund.md), §§1, 6, Leiter 0–5 und Entwicklung aus Praxis: Laborableitung, keine universelle Theorie. |

## 1 · Modell oder Wachstum? (Frage 1)

| Ansatz | Wie er arbeitet; Status | Stärke, Grenze und Relation zum Labor |
|---|---|---|
| **Formale Ontologie (OWL)** | **Belegt W4:** explizite Klassen, Eigenschaften, Individuen und formal definierte Bedeutung. | **Abgeleitet:** gut für präzise Aussagen/maschinenlesbare Schlussfolgerungen; teuer und riskant, wenn der Fachbegriff im Entwurf noch schwankt. Aus OWL folgt kein „richtiges“ Gestaltungsurteil. |
| **Begriffssystem (SKOS)** | **Belegt W1/W2:** Ober-/Unter- und assoziative Begriffsbeziehungen, mehrere Oberbegriffe und Mappings zwischen Vokabularen. | **Abgeleitet:** begrenzter semantischer Kern kann einen stabilen Kanon mit Schnittstellen bilden, ohne eine vollständige Ontologie zu behaupten. |
| **Folksonomie / Tags** | **Belegt W6:** von Nutzenden vergebene frei gewählte Schlagwörter statt zentral vorgabegesteuertem Vokabular. | **Abgeleitet:** nützlich für Eingänge und unvorhergesehene Begriffe, aber Synonyme, Bedeutungswandel und Vermischung von Themen müssen nachgepflegt werden. Nicht jede gemeinsame Markierung ist eine fachliche Beziehung. |
| **Zettelkasten / verknüpfte Notizen** | **Belegt W7:** Luhmanns Archiv beschreibt den Kasten als Denkwerkzeug für Anschlussfähigkeit und Differenzierung statt nur Aufbewahrung. | **Abgeleitet:** ein Bottom-up-Lesemodus für unerwartete Querverbindungen; **nicht belegt:** besserer Lernertrag als andere Systeme im Labor. |
| **Mustersprache** | **Belegt W8:** wiederkehrende Gestaltungsprobleme, Begründungen und Lösungen mit Querverbindungen; Analyse nennt 253 Muster und über 1.800 Verweise. | **Abgeleitet:** besonders nützlich für situationsgebundene Regeln von Zweck bis Technik; Warnung: ein Muster ist eine behauptete Regel, kein automatisch gültiges Gesetz. |
| **Hybrid aus Kanon und Entdeckungsnetz** | **Abgeleitet aus W1, W6–W8:** bestätigte Begriffe und Beziehungen neben losen, datierten Hypothesen und Fällen. | **Nicht belegt:** dieser Hybrid sei für den Eigentümer die optimale Darstellung; nur Vergleichsprobe könnte das zeigen. |

**Ergebnis, abgeleitet:** Die Dichotomie ist falsch. Top-down definiert, was eine geprüfte Verbindung *bedeutet*; Bottom-up eröffnet neue, zunächst ungeprüfte Verbindungen; ein menschlich verantworteter Abgleich verbindet beide. Das ist eine Architekturhypothese, kein Automatismus.

## 2 · Wann entstehen, verdichten und verfallen Beziehungen? (Frage 2)

**Belegt W1:** `skos:broader` ist hierarchisch, `skos:related` assoziativ. `skos:exactMatch` und `skos:closeMatch` sind nicht austauschbar; SKOS bietet history-, scope-, change- und editorial notes. **Belegt W3:** Provenienz kann Verantwortliche, Aktivitäten und Zwischenstufen unterscheiden. **Belegt W5:** SHACL validiert Strukturbedingungen; die Validierung beweist nicht die Wahrheit einer inhaltlichen Aussage.

**Abgeleiteter Lebenszyklus einer Kante:**

| Phase | Mindestnachweis | Wer darf was? | Verfall / Kontrolle |
|---|---|---|---|
| **Entdecken** | Fundstelle oder konkrete beobachtete Ähnlichkeit, Erstellungsdatum; Status Hypothese. | KI darf vorschlagen, nicht als Tatsache darstellen. | Wird bei Quellenänderung oder fehlender Anschlussfähigkeit erneut geprüft; keine automatische Beförderung. |
| **Benennen** | präziser Typ: `ist Teil von`, `beeinflusst`, `widerspricht`, `beruht auf`, `wurde geprüft durch`, `ist verwandt mit`. | KI darf Bedeutung als Ableitung vorschlagen; bei neuer Fachregel urteilt Eigentümer. | Unbenannte „hängt zusammen“-Kanten werden nicht als Beleg verwendet. |
| **Belegen** | Aussage + Quelle/Seite/Version + Geltungsbereich + Lesestand + optional Gegenbeleg. | Fachlicher Prüfer liest Quelle; KI kann formale Konsistenz prüfen. | Quellenumzug, Widerspruch oder Aktualisierung setzen `neu prüfen`, nicht still `falsch`. |
| **Bestätigen** | expliziter Beschluss oder klarer empirischer Nachweis, mit Trennung der beiden Arten von Gültigkeit. | Nur zuständige Person oder benanntes, freigegebenes Prüfverfahren. | Bestätigtes wird versioniert; Verwerfen löscht die Geschichte nicht. |
| **Verdichten** | wiederkehrende, einzeln belegte Fälle unter einer ausdrücklich abgegrenzten Aussage. | KI schlägt Zusammenfassung vor, Mensch prüft Reichweite. | Zusammenfassung führt zu Einzelfällen zurück; Ausnahmen sichtbar. |
| **Überholen / Archivieren** | Änderungsgrund, alter Stand, neuer Stand und betroffene Folgekanten. | Verantwortliche Instanz gemäß Freigaberegeln. | Nie still tilgen; historische Geltung und aktuelle Geltung trennen. |

**Konkrete Gegenprobe, abgeleitet:** „Interaktion“ und „Visualisierung“ teilen einen Tag – das ist **keine** nachgewiesene Ursache-Wirkungs-Kante. „Die Navigation nutzt den Begriff aus dem Fachpaket“ ist eine **nachweisbare Referenz** (Datei- oder Punkt-ID); „daher versteht ein Mensch die Navigation“ ist eine **nicht belegte Wirkhypothese**. Diese Relationen dürfen nicht identisch gezeichnet werden.

**Nicht belegt:** Eine allgemeine Halbwertszeit für Fachwissen oder die passende Revalidierungsfrequenz je Fachgebiet. Statt pauschaler Fristen empfehlen sich Ereignisse (Quellenänderung, Widerspruch, Nutzung, neue Prüfung), ergänzt durch datierte Wiedervorlagen als Vorschlag.

## 3 · Grenzen ohne Schubladen (Frage 3)

**Belegt W1/W2:** SKOS erlaubt mehr als einen Oberbegriff und explizite Mappings zwischen Begriffssystemen. Das ist eine Alternative zu einer einzigen starren Baumhierarchie. **Belegt W8:** Mustersprachen verbinden Maßstabsebenen und Probleme. **Abgeleitet aus W11:** Die Leiter Zweck → Haltung → Erkenntnisform → Systemlogik → Form → Technik ist eine *Arbeitsheuristik*, keine ontologische Einteilung aller Fachgebiete.

**Abgeleiteter Grenztest je Fachgebiet:**
- **Kern:** Welche Fragen, Gegenstände, Methoden und prüfbaren Aussagen gehören hierher? Ein Fach ist ein Bereich von Problemstellungen, nicht bloß ein Ordner.
- **Schnittstelle:** Welche Aussagen verwenden Konzepte eines anderen Fachs und zu welchem Zweck? Verweise mit Namen und Kontext statt Zwang zum ausschließlichen Einsortieren.
- **Unterschied zwischen Identität und Wechselwirkung:** `ist Teil von` ist etwas anderes als `wirkt auf`, `steht im Widerspruch zu` oder `verwendet Methode aus`.
- **Kontext als Oberbegriff:** Der Geltungsbereich einer Aussage (Aufgabe, Medium, Publikum, Wirkung, Zeit) steht nicht unterhalb der Disziplin, sondern bestimmt, wann diese Aussage sinnvoll ist. Dies ist **abgeleitet** und entspricht dem offenen Leitfaden-Gedanken, nicht bereits eine bewiesene einheitliche Fachtheorie.

**Nicht belegt:** dass das Labor genau sieben Stränge haben *muss*, weil die Wissenschaft diese sieben Felder verlangt. Die Stränge sind eine beschlossene Ordnung des Labors; ihr Nutzen für Erkenntnis muss am Gebrauch geprüft werden.

## 4 · Wissensnetze darstellen, ohne Aussagen zu erfinden (Frage 4)

**Belegt W9 (Abstract):** In probabilistischen Netzen erschweren statische Linienbreite oder Unschärfe das Abschätzen von Graphmerkmalen wie Dichte oder Pfadlänge unter Unsicherheit. **Belegt W1:** Relationen haben unterschiedliche Semantik. **Belegt W3:** Herkunft ist ein eigener Zusammenhang zwischen Entitäten, Aktivitäten und Akteuren.

**Abgeleitete Darstellungsregeln als Forschungsoptionen:**

| Zu zeigen | Angemessene erste Darstellung | Was ausdrücklich nicht folgt |
|---|---|---|
| Ein einzelner Sachverhalt | Text: Aussage + Status + Quelle + Kontext | Kein Punkt-Linie-Bild notwendig |
| Ein Vergleich von Hypothese und Bestätigung | eindeutige Begriffe/Symbole, optional Farbe nach bestehender Laborsemantik | Rot/Grün machen keine Erkenntnis wahr |
| Schnittstelle zwischen zwei Fachgebieten | benannte Relation mit Richtung und Beleg, klickbarer Rückweg | räumliche Nähe ist kein Beweis für Wirkung |
| Veränderungen | zeitlicher Verlauf von Behauptung → Prüfung → Revision, alte Fassung zugänglich | nicht alle Versionen gleich gültig |
| Ein größeres Netz | zuerst eine relevante Teilmenge, Filter und Beziehungen auf Abruf; bei Bedarf Tabellensicht | ein ungefilterter „Haarball“ ist keine Erkenntnis |
| Unsichere Verbindung | konkrete Aussage „Hypothese“ / „nicht geprüft“, Grund der Unsicherheit | keine scheinpräzise Wahrscheinlichkeit ohne Datenbasis |

**Methodischer Grenzsatz, abgeleitet:** Jede gezeichnete Kante muss auf eine benannte Relation zurückführbar sein, die ihren Evidenzstatus unabhängig vom Zeichnungsstil trägt. Ein Algorithmus zur Gruppierung, semantische Ähnlichkeit von Texten oder eine LLM-Vermutung erzeugt zunächst eine *Suchhypothese*, keine Fachbehauptung. **Nicht belegt:** ob der Eigentümer ein interaktives Netz besser versteht als eine geführte Liste; dafür braucht es einen realen Vergleich.

## 5 · Konsequenzen für das Labor (Frage 5, ausschließlich abgeleitet)

**Option A – starke Ontologie zuerst:** konsistente Klassen und Relationstypen vor jedem neuen Eintrag. Vorteil: maschinell gut prüfbare Semantik. Nachteil: der Kanon kann den Entwurf zu früh fixieren und Pflegeaufwand erhöhen.

**Option B – nur Bottom-up-Tags:** Eingänge schnell sammeln, später Muster finden. Vorteil: geringe Hürde. Nachteil: vage, verwechselbare Relationen und schwierige Provenienz.

**Option C – leichter Hybrid (Forschungsempfehlung, nicht beschlossen):** Einträge bleiben offene, versionierte Aussagen. Ein kleiner, explizit kontrollierter Satz von Relationstypen ermöglicht stabile Suche und Verweise; neue und unsichere Verbindungen dürfen wachsen, aber bleiben **Hypothesen**. Strukturelle Checks sichern ID, Referenz und Status; inhaltliche Prüfung prüft Aussage und Quelle. Beide sind getrennt.

| Labor-Anwendungsfall | Vorschlag (abgeleitet) | Prüfkriterium |
|---|---|---|
| Leitfaden `wechselwirkung` / `transdisziplinaer` | Wirkung und Schnittstelle als *typisierte*, gerichtete Aussage mit Gegenbelegmöglichkeit | Eine kritische Kante rückwärts zur Quelle und zum Geltungsbereich verfolgbar |
| `sammeln-verdichten` | Rohbeobachtungen nicht beim Verdichten überschreiben; verdichteter Satz verweist auf Beispiele und Ausnahmen | ursprünglicher Eintrag weiterhin lesbar |
| `relationen` | Beleg, Ableitung, Hypothese, Entscheidung getrennt | alle Kanten zeigen ihren Status ohne Farbenkenntnis |
| Wissen erschließen | Such-Tags sind Eingangsbegriffe, kontrollierte Begriffe optional zweite Schicht | neuer Begriff ohne Fachentscheidung auffindbar |
| Visualisierungssysteme | kein automatisch „objektives“ Netz; geführte Ausschnitte mit Rückweg | Nutzer kann Beziehungsart erklären und Grenzfall finden |
| Automatische Prüfung | W5/SHACL als *mögliches* Strukturprinzip, nicht zwingend als neue Infrastruktur | fehlende Quellen, verwaiste IDs, unzulässige Typen erkennbar; Semantik nicht durch Schema zertifiziert |

**Abgeleiteter minimaler Kantensatz für eine Diskussion, nicht Implementierung:** `quelle-von`, `begründet`, `widerspricht`, `Teil-von`, `beeinflusst`, `verwandt-mit`, `geprüft-durch`. Jede Instanz trägt `Subjekt, Prädikat, Objekt, Status, Quelle, Geltungsbereich, Version`. **Nicht belegt:** dass genau diese sieben Typen vollständig oder hinreichend sind. Keine neue JSON-Struktur, keine Regel hier festgelegt.

## 6 · Nicht noch einmal #172

**Belegt intern:** #172 §3 recherchierte bereits Formen von Gedächtnis, wissensbezogene Agentenprozesse und strukturiertes Wissen; seine Quellen und Entscheidungen werden **nicht** als neue Literatur ausgegeben. Hier liegt der zusätzliche Fokus auf **Gültigkeit einer konkreten Kante**, Wechsel zwischen freien und kontrollierten Begriffen, Lebenszyklus/Verfall, Grenzen der Netzzeichnung und der Unterscheidung **SHACL-Strukturprüfung vs. Quellenprüfung**. Die Brücke zum Befund Visualisierungssysteme §6 bleibt als abgeleitete Übertragung gekennzeichnet.

## Ergebnis · geprüft / nicht geprüft · offen

**Geprüft:** alle fünf Forschungsfragen, Unterschiede der Modellfamilien, dokumentierte Standards und deren Geltungsgrenzen, Übertrag auf vier Leitfaden-Punkte als Hypothese; Quellstellen W1–W11 und Stand der Lektüre. **Nicht geprüft:** vollständige Monografien, empirische Nutzbarkeit am Eigentümer, produktionsreifes Datenmodell, semantische Fehlerquote eines automatischen Verknüpfers, Regressionstest des Labors. **Nicht belegt:** die optimale Taxonomie, das perfekte Visualisierungsmuster und eine allgemein gültige Verfallsfrist.

**Höchstens drei offene Punkte für Claude:**
1. Einen echten, strittigen Zusammenhang aus dem Labor wählen und drei Darstellungen (Text, geführte Relationenliste, Netz) am Rückweg zur Quelle vergleichen, bevor ein Netz gezeichnet wird.
2. An zwei Fachbereichen testen, welche minimalen Beziehungstypen fehlen oder verwechselt werden; keine vorschnelle endgültige Ontologie festschreiben.
3. Bei späterer Implementierung Herkunfts-/Statusprüfung getrennt von semantischem Gegenlesen messen; eine grüne Strukturausgabe ist keine fachliche Bestätigung.
