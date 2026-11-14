---
dient: A01, A03, A04, A05, A06, A07, A10, A28
datum: 2026-11-14
anlass: "Issue #178, neu zugeteilt durch Claude am 14.11.; unabhängige Sichtung nach fundstueck"
gelesen: "design-lab #178, #179, PR #177, Skill fundstueck, intent, bertin-semiologie, isotype, visualisierungssysteme/befund.md; holtzy/dataviz-skills README, LICENSE, sechs SKILL.md, roast-my-chart/LICENSE.txt und Beginn von inspiration/scripts/search_viz.py über GitHub-Connector"
status: "Befund und Empfehlung, keine Integration beschlossen; weitere Referenzen und Skript nicht vollständig geprüft"
---

# Fundstück: Yan Holtz' dataviz-skills — unabhängige Sichtung

## In fünf Sätzen

Die Sammlung enthält **mehr als Diagrammcode**: Sie bietet fachliche Kriterien, Fehlermuster, Vorbildsuche und technische Arbeitsmuster (**belegt**, [README](https://github.com/holtzy/dataviz-skills/blob/main/README.md), sechs SKILL-Dateien gelesen). Der Gewinn für das Labor ist gerade der Weg von der Erkenntnisabsicht über geeignete visuelle Kodierung bis zum überprüften Ergebnis (**abgeleitet** aus `inspiration/SKILL.md`, `roast-my-chart/SKILL.md` und Intent A01/A04). Der wertvollste Bestandteil ist die Kombination aus **61 ausdrücklich mit Ausnahmen versehenen Fehlerkarten** und dem Gebot, nur am tatsächlich sichtbaren Bild zu urteilen (**belegt**, `roast-my-chart/SKILL.md`; Kartentexte nicht vollständig gegengelesen). Die starren Vorgaben für ein neues React-Projekt sind dagegen **kein neutraler Standard** und widersprechen teilweise dem werkzeugunabhängigen Gestaltungsanspruch (**abgeleitet**, `new-dataviz-project/SKILL.md`, Intent A02/A03). Mein Vorschlag lautet: **als fachlichen Steinbruch und Suchstelle erschließen, nicht pauschal installieren**; die Übernahme einzelner Regeln braucht die bestehende Quellen- und Qualitätsprüfung (**abgeleitet**).

## 0 · Bestand und Lesestand

**Belegt:** Das Fundstück ist bereits [Issue #178](https://github.com/esany/design-lab/issues/178) mit ausführlicher Erstsichtung; [#179](https://github.com/esany/design-lab/issues/179) betrifft den Fundstück-Ablauf, [PR #177](https://github.com/esany/design-lab/pull/177) eine Dataviz-Inspiration-Pilotaufnahme. Dies ist eine **Gegen-/Vertiefungssichtung**, keine zweite unverbundene Bewertung. Das Labor hat Fachwissen in `.agents/skills/bertin-semiologie/SKILL.md`, `.agents/skills/isotype/SKILL.md` und `research/2026-11-visualisierungssysteme/befund.md`.

**Gelesen:** Die sechs laut aktuellem Fremd-README angebotenen `SKILL.md` (`inspiration`, `roast-my-chart`, `d3`, `ggplot2`, `matplotlib`, `new-dataviz-project`), README und zwei Lizenzdateien; Anfang des `inspiration`-Suchskripts mit URLs und Cache-Logik. Das `matplotlib`-Skill wurde abschnittsweise bis zum Anzeige-Limit ausgelesen, nicht jede verlinkte Referenz; die 61 Karten selbst, sämtliche weiteren Skripte und vollständige externe Kataloge **nicht vollständig gelesen**. Eine Suchanfrage nach 'dataviz' in offenen und geschlossenen Issues zeigte #178 und #179. **Einschränkung:** Die hier gelesene Fassung wurde nicht durch einen Git-Commit-SHA fixiert; spätere Änderungen sind möglich.

## 1–3 · Bestandteile, Bedarf und Fachwissen

Das Wirkprinzip: Fachliche Textanweisungen und Referenzkataloge beeinflussen den Entwurfs- und Kritikprozess; Bibliotheks-Skills liefern konventionelle Codegerüste. Der Nutzer kann einzelne Inhalte lesen, ohne den Skill-Mechanismus zu installieren (**belegt**, Fremd-README).

| Bestandteil | Fachlicher Gehalt / Bezug | Ertrag und Status | Fundstelle / Lesestand |
|---|---|---|---|
| **Inspiration** | Stellt vor der Skizze die Frage, **was der Leser sehen soll**; sieben Formenfamilien und 3–5 benannte Vorbilder, Original- und Fundlink; methodischer Gegenpol zu beliebiger Standardästhetik | **abbauen** · Suchstelle und Steinbruch → Fachpaket Vermitteln/Korpus; A01, A04, A06 | **belegt:** `inspiration/SKILL.md` vollständig, Suchskript nur teilweise |
| **Roast my chart** | Sichtbares Kodieren zuerst beschreiben; 61 Fehlerkarten in acht Gruppen mit 'Look for / Why / Fix / Fine when'; nicht prüfbar ≠ bestanden | **abbauen** · Kriterien und Negativfolie → Fachpaket Vermitteln/`kritik`; A04, A07 | **belegt:** `roast-my-chart/SKILL.md`; Karteninhalt **nicht vollständig geprüft** |
| **Matplotlib** | Einheiten, Größen- und Farbkodierung, konsistente Gruppenzuordnung, Leseformat, Export und direkte Labels; Bildqualität am Endformat statt nur DPI | **abbauen** · Arbeitsmuster → Vermitteln/Form/Print; A03, A04, A28 | **belegt:** wesentliche Abschnitte `matplotlib/SKILL.md`; Rest nicht komplett geprüft |
| **ggplot2** | Tidyverse-Konventionen, Zoom ohne Datenfilter, Achsen, Facets, expliziter Export | **abbauen** · Referenz bei tatsächlicher R-Arbeit; A03, A04 | **belegt:** `ggplot2/SKILL.md` vollständig |
| **D3 mit React** | Trennung D3-Rechenfunktionen/React-Rendering, Responsivität, Achsen, SVG/Canvas und Bewegung | **abbauen** · bedingtes technisches Arbeitsmuster, kein allgemeiner D3-Standard; A03, A29 | **belegt:** `d3/SKILL.md` vollständig; ausdrücklich **nicht** für Vanilla-D3 |
| **Neues Dataviz-Projekt** | React/TypeScript/shadcn/Tailwind, feste Schriften, 700px Lesespalte, Start-Balkendiagramm, GitHub Pages | **bewusst bewahren** als Beispiel und Negativfolie für fremden Hausstil, **nicht integrieren**; A02, A03 | **belegt:** `new-dataviz-project/SKILL.md` vollständig; **abgeleitet:** fehlende Passung |

**Bedarfsprobe (vor Installationsfrage):** Das Labor verlangt Feldtiefe mit Kanon, Best Practice, Qualität und umgesetztem Werk (Intent **A01, A03, A04**). Der bisherige Bertin-Skill behandelt die *Eignung visueller Variablen für Datentypen*, der Isotype-Skill die *Transformation fachlicher Aussage in zugängliche Bildstatistik*. Holtz ergänzt **praktische Vorbildsuche**, **bibliotheksspezifische Produktionskonventionen** und **konkrete Fehler-/Ausnahme-Karten**. **Abgeleitet:** Der Wert entsteht auch dann, wenn keinerlei Skill installiert wird. Das Feld Visualisierungssysteme braucht ferner Verbindungen zwischen Ansichten; nur die Einzelgrafik zu polieren würde den [Systembefund](../2026-11-visualisierungssysteme/befund.md) verengen.

**Kanon und Grenzen:** **Belegt:** Holtz' `inspiration/SKILL.md` nennt Data to Viz, Dataviz Inspiration und Dataviz Index als Suchorte; `matplotlib/SKILL.md` verweist auf Python Graph Gallery. **Abgeleitet:** Diese Quellen bilden eine **Praxisposition**, keinen Ersatz für Bertins Grundmodell, Neuraths Isotype-Transformation oder die Quellen zum Visualisierungssystem. Die Reihenfolge muss aus der Aussage des Werks entstehen (Zweck → Daten → Lesestufe → Kodierung → Form → Werkzeug), nicht aus einem fertigen Chart-Typ oder Framework. **Nicht belegt:** dass das automatische Laden der Fremdskills messbar bessere Werke erzeugt; dafür fehlt ein Blindvergleich.

## 4 · Vergleich am Bestand

| Fähigkeit | Bestehender Weg im Labor | Beitrag Holtz | Mehrwert gegenüber Bestand | Risiko |
|---|---|---|---|---|
| Datentyp → visuelle Kodierung | Bertins Variablen und Lesestufen | Familien von Verteilung, Korrelation, Rang, Teil–Ganzes, Entwicklung, Ort, Fluss | **abgeleitet:** schnellere Suchstruktur, nicht neue Theorie | Chartschema kann Bedeutung überstimmen |
| Bildstatistik und Vermittlung | Isotype: feste Bildzeichen und Transformation | Fehlerkarten, direkte Labels, Vergleichsmuster | **abgeleitet:** konkrete Kritik nach dem Entwurf | Zeichen/Zählung nicht mit frei skalierter Blase verwechseln |
| Mehransicht und System | Visualisierungssysteme: Ebene 3 als offene Aufgabe | Farbe über Filter und Panels stabil; Technik von D3/ggplot2 | **belegt für Fremdskill**, **abgeleitet für Labor:** nützliche Bausteine, kein vollständiges System | Tooltechnik als falsches Gesamtmodell |
| Qualität statt Mittelmaß | Fachpakete, Kritik und Prüffälle | 61 Karten mit 'Fine when', Suchstelle für echte Werke | **abgeleitet:** prüfbare Negativfolie statt Geschmacksurteil | Kritikliste als starres Regelwerk; übersehene gültige Ausnahmen |
| Gestaltungsprozess bis zum Werk | Laborspezifisches Tooling, A02/A03 | lauffähige Bibliotheksmuster | **abgeleitet:** schnellere professionelle Umsetzung für passenden Stack | React-Starter macht fremden Hausstil zur Voraussetzung |

## 5 · Rechte, Datenwege, Unabhängigkeit und Pflege

- **Belegt:** Das Hauptrepository nennt **MIT** (`LICENSE`). Die kopierte Textsammlung der Fehlerkarten steht jedoch ausdrücklich unter **CC BY-NC 4.0** (`roast-my-chart/LICENSE.txt`). **Folgerung:** Karten in eigenen Worten mit Originalverweis diskutieren, nicht als vollständig übernommene Datei im öffentlichen Labor ablegen; die konkrete Wiederverwendung rechtlich prüfen.
- **Belegt:** Das Inspirationsskript nutzt `urllib.request`, öffentliche URLs der zwei Kataloge und einen lokalen 24-Stunden-Cache (`inspiration/scripts/search_viz.py`, Kopf und `load_source`). **Nicht geprüft:** das komplette Skript, ausgeführte Netzverbindungen, weitere Abhängigkeiten, Änderungen auf der Gegenseite oder sämtliche Lizenzrechte an verlinkten Bildern. Die Skill-Anweisung untersagt ausdrücklich die Weiterverteilung fremder Bild-Screenshots.
- **Belegt:** D3-Skill ist auf React zugeschnitten; der neue Projektstarter schreibt einen konkreten Stack vor. **Abgeleitet:** Der Wissensinhalt ist ohne Installation grundsätzlich kopier-/austauschbar; die Starter- und Suchskript-Nutzung schafft dagegen konkrete Werkzeug- und Netzwerkabhängigkeiten. Kosten, Updatepflicht und Ausführungsrechte wären vor einem Pilot gesondert zu klären.
- **Nicht geprüft:** Sicherheit der gesamten Codebasis, alle externen Endpunkte, Reproduzierbarkeit des Suchergebnisses, Rechte jeder Inspiration und Build. **Kein Skript wurde ausgeführt, kein Fremdskill installiert.**

## 6–8 · Ertrag vor Übernahme, getrennt je Bestandteil

| Bestandteil | Ertragsart | Zielort und konkreter Folgeauftrag (Vorschlag, keine Freigabe) | Integrationsgrad / Status |
|---|---|---|---|
| Inspiration | Suchstelle + Steinbruch | Vor jeder Visualisierung drei passende fremde Werke mit Original/Quelle/Wirkprinzip prüfen; als **Ergänzung zu #178 / PR #177**, keine Dublette | referenzieren / **abbauen** |
| Roast my chart | Negativfolie + Prüfmuster | Aus Karten eine kleine Stichprobe mit sichtbar/ungeprüft/Ausnahme für `kritik` und Vermitteln ableiten, Lizenzgrenzen beachten | Erkenntnis übernehmen / **abbauen** |
| Matplotlib | Handwerk + Print | Format, Export, Einheiten, Beschriftung an einem vorhandenen geeigneten Diagramm erproben | Arbeitsmuster übernehmen / **abbauen** |
| ggplot2 | offenes Werkzeugwissen | Bei einem konkreten R-Werk als Alternativweg vergleichen; **keine neue Pflicht** | referenzieren / **abbauen** |
| D3/React | Technikreferenz | D3-Rechenlogik isoliert in der vorhandenen Werkzeugkette vergleichen; React-Teil nur beim passenden Werk | begrenzter Pilot / **abbauen** |
| React-Starter | Negativfolie | Hausstil und Stackbindung als Gegenbeispiel zur freien Werkzeugwahl dokumentiert halten, keine Integration | referenzieren / **bewusst bewahren** |

**Statusentscheidungen sind Vorschläge** innerhalb dieser Recherche, keine Veränderung von `radar.md`, Skills, Fachpaket oder Regeln. Der Eigentümer entscheidet erst bei konkreter Gestaltungs- oder Technikbindung.

## Nicht vorschnell daraus ableiten

1. **Nicht belegt:** Holtz beweise, welche Diagrammform für jeden Zweck *richtig* ist. Das Entscheidungsschema liefert Kandidaten, nicht eine Bedeutungsentscheidung.
2. **Nicht belegt:** Ein bestandener Karten-Check beweise eine gelungene Mitteilung. Wahrnehmung, Aussage, Kontext, Lesbarkeit und Wirkung bleiben am Werk zu prüfen.
3. **Nicht belegt:** Eine automatische Skill-Installation erhöhe die Qualität; ein Fremd-Workflow kann die gewünschte Gestaltung auch nivellieren.

## Geprüft / nicht geprüft / offen für Claude

**Geprüft (sichtbar):** Labor-Intent, drei einschlägige Labor-Methoden/Befunde, bestehendes Issue #178 sowie #179 und PR #177 als Bezug; sechs Fremd-Skill-Einstiege, README und Lizenzen; partielle Sicht auf Skript und Matplotlib; Quellen-/Lesestand je Teil. **Nicht geprüft:** vollständige 61 Karten, sämtliche Fremdskripte, Sicherheitstest, reale Visualisierungsprobe, CI/Build sowie unabhängige fachliche Gegenprüfung dieser Sichtung.

**Offen (maximal drei):**
1. Karten anhand zweier *wirklich gerenderter* Werke mitsamt Ausnahmen testen und die CC-BY-NC-Grenze vor einer Integration prüfen.
2. Für das Fachpaket „Vermitteln“ und den Systembefund die wenigen wertvollen Muster gegen Bertin, Isotype und eigene Gegenbeispiele abgleichen; keine Regel automatisch hochstufen.
3. Die Folgeaufträge in #178/PR #177 bündeln; keine zweite Fundstück-Akte und keine Installation ohne Entscheidung.
