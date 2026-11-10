---
dient: A04, A05, A28
datum: 2026-11-10
anlass: "Eigentümer im Chat, 09./10.11.: Fachpaket zu Visualisierungssystemen, Reporting als erstes Anwendungsfeld, ausdrücklich jenseits des Dashboards."
gelesen: "design-lab main@59c704b (fachpaket-vermitteln, research/2026-10-entwurfsbewegung, corpus); Quellen siehe Tabellen, jeweils nur Abstract, Inhaltsverzeichnis oder Einleitung"
status: Befund von Claude als Grundlage für ein Fachpaket; nichts beschlossen
---

# Visualisierungssysteme: Befund für ein Fachpaket

## In Worten

**Worum es geht.** Der Eigentümer will ein Fachpaket zu Visualisierungssystemen. Reporting ist
das erste Anwendungsfeld, aber in seinem Verständnis: nicht das Dashboard des Konzernalltags,
sondern „ganzheitliche organische systemische Visualisierungssysteme, die dem Erkenntnisgewinn
des Menschen dienen (menschenzentrierte Technikgestaltung)“ (Chat, 09.11.). Er hat die Richtung
zweimal geschärft:

- Wissen über Endnutzer, Branche und Werkzeuge spielt keine Rolle. Es geht um die Sache selbst.
- Die Aufgabe ist vor allem **Kommunikation**, „nur bedingt die Analyse“ (Chat, 09.11.).

**Was hier steht.** Eine Leiter vom Zweck zur Technik (Top-down), Arbeitsbegriffe, eine Feldkarte
mit Belegen, der Forschungsstand zum Dashboard als Negativfolie, der Stand der Technik mit KI,
eine Beobachtung aus eigener Praxis (Bottom-up), Nachbarfelder, Schnittstellen im Labor und
offene Spannungen.

**Was nicht hier steht.** Kein fertiges Fachpaket, keine Regeln, kein Werkzeugwissen. Alle
Quellen sind nur auf Ebene von Abstract, Inhaltsverzeichnis oder Einleitung gesehen. Kein Buch
und kein Paper ist ganz gelesen.

**Was der Eigentümer entscheidet.** Siehe Abschnitt 10, drei Fragen.

---

## 1 · Top-down: vom Zweck zur Technik (abgeleitet)

Jede Ebene begründet die nächste. Techniken stehen unten und sind austauschbar. Diese Leiter ist
ein Vorschlag von Claude, kein Befund aus einer Quelle. Sie lehnt sich an das Ebenenmodell nach
Munzner an [k:munzner-2009], setzt aber außen zwei Ebenen davor (Zweck, Haltung) und denkt das
Ganze als System statt als einzelne Darstellung.

| Ebene | Frage | Arbeitsstand |
|---|---|---|
| 0 Zweck | Wozu? | Ein Mensch versteht die Lage eines Systems; die Erkenntnis entsteht beim Gegenüber, durch Mitteilen |
| 1 Haltung | In welchem Geist? | menschenzentriert (A28), ehrlich (Lücken, Unsicherheit, Herkunft), offen (Entscheidungen sichtbar) |
| 2 Erkenntnisform | Was soll verstanden werden? | Zustand, Veränderung, Abweichung, Ursache, Zusammenhang, Möglichkeit |
| 3 Systemlogik | Wie hängt das Ganze zusammen? | eine visuelle Sprache, geführte Struktur, Ebenen der Abstraktion, Übergänge zwischen Ansichten |
| 4 Form | Welche Gestalt? | erst hier: Diagramm, Karte, Netz, Text, Raum, Bewegung |
| 5 Technik | Womit? | Werkzeug und Code folgen aus allem darüber |

**Lesart (abgeleitet):** Das Dashboard ist ein Fehler auf Ebene 3, der als Entscheidung auf
Ebene 5 auftritt. Das Werkzeug bestimmt dort das System, nicht umgekehrt.

## 2 · Arbeitsbegriffe (abgeleitet)

- **Visualisierungssystem:** ein zusammenhängendes Gefüge aus Ansichten, Kodierungsregeln,
  Übergängen und Datenbeziehungen. Darin kann ein Mensch einen Sachverhalt aus mehreren
  Blickwinkeln und auf mehreren Abstraktionsebenen durchdringen.
- **Dashboard (als Negativfolie):** eine Fläche nebeneinanderliegender Einzelantworten, ohne
  Zusammenhang und ohne Wege zwischen ihnen. Gemeint ist das Muster, nicht jede Software dieses
  Namens; die Forschung kennt auch narrative Dashboard-Genres [k:bach-2023].
- **Reporting im Sinne des Eigentümers:** die Lage eines Systems so mitteilen, dass Menschen sie
  verstehen: Zustand, Entwicklung, Abweichung, Zusammenhang, Unsicherheit.

## 3 · Feldkarte mit Belegen

| Feld | Aussage | Status | Beleg |
|---|---|---|---|
| 1 Mitteilen als Zweck | Bertin unterscheidet drei Funktionen grafischer Darstellung: Bestand festhalten, Information mitteilen, Information bearbeiten | belegt | [k:bertin-1967], englische Ausgabe, Inhaltsverzeichnis S. 160–164 („Recording“, „Communicating“, „Processing information“); Inhaltsverzeichnis gesehen, Kapitel nicht gelesen |
| | Ziel ist Einsicht, nicht Bilder („insight, not pictures“) | belegt | [k:card-mackinlay-shneiderman-1999]; Satz von Shneiderman in einem Interview wiederholt (Medium, „Multiple Views“) |
| | Präsentation und Kommunikation waren in der Forschung Nebensache gegenüber Exploration und Analyse und verdienen gleiches Gewicht | belegt | [k:kosara-mackinlay-2013], Abstract |
| 2 Geführte Struktur | Narrative Visualisierung reicht von „vom Autor geführt“ bis „vom Leser gesteuert“; Muster Martini-Glas: erst geführter Weg, dann freie Erkundung | belegt | [k:segel-heer-2010], Abstract und Einleitung; Martini-Glas über Sekundärquellen |
| | Gestaltungsentscheidungen auf Ebene von Daten, Darstellung, Text und Interaktion lenken die Deutung | belegt | [k:hullman-diakopoulos-2011], Abstract |
| 3 Abstraktionsleiter | zwischen Einzelfall und Gesamtsicht wechseln, beides gekoppelt | abgeleitet | [k:victor-2011], Essay nicht abrufbar, Kern nur über Sekundärquellen |
| | Überblick zuerst, dann zoomen und filtern, Details bei Bedarf | belegt | [k:shneiderman-1996], Abstract |
| 4 Eine visuelle Sprache | Grafik als Zusammensetzung aus Regeln statt Katalog von Diagrammtypen | belegt | [k:wilkinson-2005], Inhaltsverzeichnis; umgesetzt u. a. in [k:vega-lite] |
| | Gestaltungssystem für Daten im öffentlichen Auftrag (WHO Data Design Language) | belegt | [k:stefaner] |
| 5 Gefüge der Ansichten | koordinierte Mehrfachansichten, verknüpfte Auswahl (Brushing) | belegt | [k:roberts-2007], Abstract; Small Multiples [k:tufte-1983] |
| 6 Zusammenhang statt Kennzahl | Ursache, Wirkung und Fluss im Bild zeigen statt Werte aufzählen | nicht belegt | Quellen zu suchen (Systemdiagramme, Fluss- und Netzdarstellungen) |
| 7 Ehrlich mitteilen | Herkunft, Zählweise, Lücken und Unsicherheit sichtbar machen | belegt | [k:dignazio-klein-2020], [k:lupi-data-humanism] |
| 8 Vertiefen auf Wunsch | Erkunden als zweite Ebene: Informationsräume flanieren statt nur suchen | belegt | [k:doerk-2011] |
| 9 Organisches Wachstum | Das System wächst mit den Fragen der Menschen | nicht belegt | Brücke zu #49 Möglichkeitsraum (Entwicklung und Gebrauch) |

## 4 · Das Dashboard in der Forschung: belegte Negativfolie

| Aussage | Status | Beleg |
|---|---|---|
| Dashboards gehören zu den häufigsten Anwendungen; Gestaltung und Gebrauch unterscheiden sich deutlich von explorativen Werkzeugen | belegt | [k:sarikaya-2019], Abstract |
| Aus 144 Dashboards wurden 42 Gestaltungsmuster in acht Gruppen abgeleitet; es gibt Genres wie narrativ, analytisch, eingebettet | belegt | [k:bach-2023], Abstract |
| Ein Dashboard bildet einen Datenraum ab, der kleiner ist als der der Daten und größer als der der Entscheidung; Informationsverlust ist unvermeidlich | belegt | [k:bach-2023], Wiedergabe der Autoren (ursprünglicher Abschnitt 7.1, veröffentlicht als 5.1) |
| Folgerung: Die Frage ist nicht, ob verdichtet wird, sondern **wo und wie sichtbar**. Ein System kann den Verlust offenlegen und Wege zurück zu den Daten anbieten; eine Kachelfläche verbirgt ihn | abgeleitet | aus den drei Zeilen oben und Feld 7 |
| Ein Dashboard ist oft eine Bestandszeichnung, die sich als Mitteilung ausgibt: Es hält Werte fest, sagt aber nicht, was sie bedeuten | abgeleitet | Bertins drei Funktionen (Feld 1) auf das Mittelmaß-Muster in [k:viseval-2024] und „Vermitteln“ Abschnitt 5 angewendet |

## 5 · Stand der Technik mit KI (Stand 10.11.2026)

| Aussage | Status | Beleg |
|---|---|---|
| Systematische Übersicht über 48 Arbeiten zu Sprachmodellen und Visualisierung, Schwerpunkt Wort-Bild-Interaktion; Evaluation solcher Systeme ist eine offene Lücke | belegt | [k:brossier-2026], Abstract |
| Generative KI wird in vier Aufgaben eingesetzt (Daten anreichern, visuelle Zuordnung, Stil, Interaktion); offen sind Evaluation, Datensätze und die Lücke zwischen End-to-End-Generierung und Visualisierung | belegt | [k:ye-2024-genai4vis], Abstract |
| Für narrative Visualisierung mit Basismodellen gibt es ein Referenzmodell in vier Phasen: Analyse, Erzählung, Visualisierung, Präsentation | belegt | [k:he-2025-narrative-fm], Abstract |
| Neben „Mensch gestaltet, KI assistiert“ tritt neu „KI gestaltet, Mensch prüft“ | belegt | [k:li-2025-storytelling-ki], Abstract |
| Gegenmodell zum Einmal-Prompt: Oberfläche plus Sprache, KI übernimmt die Datenumformung, Verlauf verzweigt und wiederverwendbar | belegt | [k:wang-2025-data-formulator], Abstract und Einleitung |
| In der Praxis fasst KI Kennzahlen als Text zusammen; die direkte Übersetzung von Zahlen in korrekte Sätze ist für Sprachmodelle schwierig, deshalb arbeiten die Entwickler mit Vorlagen dazwischen | belegt | [k:tableau-pulse-2024] |
| Beim Erzeugen von Diagrammen bleiben Modelle schwach (bestes geprüftes Modell 2,89 von 5) | belegt | [k:viseval-2024], [k:plotcraft-2025] |

**Einordnung (abgeleitet):**

- Der Großteil der KI-Arbeit setzt **bei der einzelnen Darstellung oder der einzelnen Kennzahl**
  an: ein Diagramm erzeugen, eine Zahl erklären, eine Frage beantworten. Der Gefüge-Gedanke
  (Ebene 3 der Leiter) kommt in den gesichteten Abstracts kaum vor. Das ist eine Lücke und
  zugleich der Ort, an dem das Fachpaket ansetzen kann.
- KI macht Reporting gesprächiger, aber nicht automatisch verständlicher. Ein Kennzahlen-Feed
  mit Sätzen bleibt eine Bestandszeichnung (Abschnitt 4).
- Die Rolle, die zum Zweck passt, wäre **Infrastruktur des Systems**: Wort und Bild koppeln,
  Herleitung und Herkunft auf Nachfrage erklären, dem Menschen Wege durch die Abstraktionsebenen
  öffnen. Die Bildfabrik ist die schwächere Rolle.
- Die Muster „KI gestaltet, Mensch prüft“ und der verzweigte Verlauf (Data Formulator) berühren
  direkt die Arbeitsweise des Labors (Thema Arbeitsweise mit KI).

## 6 · Bottom-up: eine Beobachtung aus eigener Praxis (abgeleitet)

Der Eigentümer hat einen eigenen, vertraulichen Reporting-Leitfaden von 2021 als Fundstück
vorgelegt. Bewertung nach Skill `fundstueck`: als Grundlage **verworfen** (Einsteigerniveau,
werkzeuggebunden, ohne Quellen). Das Dokument liegt bewusst **nicht** im Labor und nicht im
Werk-Repo. Übernommen ist nur diese Beobachtung, ohne Kunden- und Werkzeugbezug:

> Systemdenken entsteht oft schon unter Werkzeugzwang: Gefüge der Seiten, Farbkonstanz über alle
> Ansichten, Leserichtung als Bedeutung, Aggregationsebenen je Publikum. Das Werkzeug lässt es aber
> nur als Navigation zwischen Seiten zu, nicht als Zusammenhang im Bild.

Der theoretische Teil des Leitfadens folgte im Kern dem Was-Warum-Wie nach Munzner
[k:munzner-2014]; das passt zum Prüfgerüst von „Vermitteln“.

## 7 · Nachbarfelder, die beackert werden müssten (nicht belegt, Quellen zu suchen)

| Feld | Warum |
|---|---|
| Wahrnehmung und Kognition | was Menschen sehen, behalten, verstehen (Anschluss: [k:cleveland-mcgill-1984]) |
| Bildwissenschaft und Diagrammatik | wie Bilder Wissen erzeugen (Skill `bildanalyse`, „Vermitteln“) |
| Systemtheorie und Kybernetik | was es heißt, ein *System* zu zeigen: Rückkopplung, Verzögerung, Struktur ([k:dubberly-how-design] als Sekundärquelle) |
| Organisation und Entscheidung | wie Verständnis in Gruppen entsteht; wer liest, wer entscheidet |
| Statistik und Unsicherheit | Bandbreiten und Prognosen ehrlich mitteilen |
| Erzählung und Sprache | Bild und Text als ein Gefüge (Felder 1 und 2) |
| Gestaltungssysteme und Typografie | Raster und Regeln ([k:gerstner-1964], `fachpaket-form`, `konkrete-kunst`) |
| Ethik und Macht | wer zählt, wer gezeigt wird ([k:dignazio-klein-2020]) |

## 8 · Schnittstellen im Labor (abgeleitet)

- **Fachpaket „Vermitteln“:** zuständig für die einzelne Darstellung. Das neue Paket würde das
  Gefüge behandeln: Sprache, Führung, Zusammenhang über viele Ansichten. Beide verweisen
  aufeinander.
- **Fachpaket „Form“:** Typografie, Raster, Lesbarkeit.
- **Skills** `bertin-semiologie`, `isotype`, `konkrete-kunst`, `kritik`.
- **#49 Möglichkeitsraum:** Auch ein Visualisierungssystem hat Entwicklung *und* Gebrauch. Das
  könnte der stärkste Querbezug sein (Feld 9).
- **Arbeitsweise mit KI:** Rollenmuster aus Abschnitt 5.

## 9 · Spannungen, die der Mensch entscheidet (abgeleitet)

- **Führen oder öffnen:** vom Autor geführte Mitteilung gegen vom Leser gesteuerte Erkundung
  [k:segel-heer-2010]. Der Eigentümer gewichtet Mitteilung; offen ist, wie viel Erkundung bleibt.
- **Verdichten oder zeigen:** Verdichtung ist unvermeidlich [k:bach-2023]; Data Humanism will
  Lücken und Reichtum zeigen [k:lupi-data-humanism].
- **Rhetorik:** Führung ist immer auch Rahmung [k:hullman-diakopoulos-2011]. Wie viel Lenkung ist
  Dienst am Menschen, ab wann wird sie Überredung?

## 10 · Offene Fragen an den Eigentümer

1. **Eigenes Paket?** Trägt die Trennung „Vermitteln = einzelne Darstellung, Visualisierungssysteme
   = Gefüge“, sodass ein eigenes Fachpaket entsteht?
2. **Prüffall:** Soll das Paket an einem selbst gewählten, offenen Datensatz erprobt werden, als
   Reporting im eigenen Sinn (ein kleines System statt eines Dashboards)?
3. **Tiefe:** Welche zwei oder drei Quellen soll ein Modell zuerst ganz lesen? Vorschlag:
   Bertin (Funktionen der Grafik), Segel/Heer, Bach et al.

## Was geprüft ist und was nicht

- **Geprüft:** Existenz, bibliografische Angaben und Kernaussage jeder neuen Quelle an der
  genannten Fundstelle (Abstract, Inhaltsverzeichnis, Einleitung), 10.11.2026.
- **Nicht geprüft:** Volltexte; ob die Abstracts das Argument vollständig wiedergeben; Victor nur
  über Sekundärquellen; keine unabhängige Gegenprüfung durch ein zweites Modell.
