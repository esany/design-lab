# Radar

Werkzeuge und Entwicklungen, die das Labor beobachtet. Vier Ringe:

- **Einsetzen** — im Labor erprobt und Standard
- **Erproben** — lohnt ein konkretes Experiment
- **Beobachten** — interessant, noch kein Anlass
- **Halten** — bewusst nicht (mehr) nutzen

Jeder Eintrag: was es ist · warum relevant · Quelle · Stand. Änderungen nur mit
Begründung (Skill `pflege`). Stand des Radars: **2026-11-14**.

## Einsetzen

| Was | Warum | Quelle | Stand |
|---|---|---|---|
| Git + Pull Requests als Übergabe | vollständige Historie; der Eigentümer gibt im Zielbild oder im Chat frei, das orchestrierende Modell übernimmt (Prinzip 5, geändert 13.11.) | — | 2026-11 |
| `AGENTS.md` | gemeinsame Anweisung für Claude, Codex, Gemini; Linux-Foundation-Projekt (AAIF) | [linuxiac](https://linuxiac.com/model-context-protocol-joins-linux-foundation-in-major-ai-shift/) | 2026-10 |
| `SKILL.md` (Agent Skills) | Methoden als portable Skills, 30+ Werkzeuge | [noqta](https://www.noqta.tn/en/news/skill-md-open-standard-30-ai-coding-tools-adoption-2026) | 2026-10 |
| DTCG-Tokens (2025.10) | stabiles, offenes Token-Format | [W3C DTCG](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/) | 2026-10 |
| SVG + JavaScript ohne Build | dauerhaft lauffähig, keine Abhängigkeiten | — | 2026-10 |
| Playwright | Agent sieht und prüft sein eigenes Ergebnis | — | 2026-10 |

## Erproben

| Was | Warum | Quelle | Stand |
|---|---|---|---|
| Observable Plot, D3, Vega-Lite | Profistandard für Datenvisualisierung | — | 2026-10 |
| Dataviz Inspiration (Yan Holtz) | Zielbild-Bestand: 462 kuratierte Beispiele, je mit Kontext- und Gestaltungsbeschreibung, 46 Diagrammtypen und Technik-Labels (Annotation, Direktbeschriftung, Unsicherheit …); Katalog CC BY 4.0, Bilder nicht frei; als [Zielbild-Pilot](experiments/2026-11-zielbild-dataviz-inspiration/README.md) übernommen | [Seite](https://www.dataviz-inspiration.com/) · [Repo, Lizenz](https://github.com/holtzy/dataviz-inspiration/blob/main/LICENSE) | 2026-11-11 |
| Paged.js | Satz und Print aus Code; am Flyer erprobt: Seitenformat und Beschnitt ja, Textverkettung, Grundlinienraster und CMYK nur mit eigenen Ergänzungen | [Experiment](experiments/2026-10-print-pagedjs/README.md) | 2026-10-28 |
| Typst | Satz als Code, Daten; CMYK und PDF/X nicht belegt | [typst.app](https://typst.app/blog/2025/automated-generation) | 2026-10 |
| Scribus | freies Layoutprogramm mit CMYK, PDF/X-4, Python; nächster Vergleich am Flyer | [Wikipedia](https://en.wikipedia.org/wiki/Scribus) | 2026-10-28 |
| Penpot + offizielles MCP | offener Design-Kanal, selbst hostbar | [penpot.app](https://penpot.app/penpot-mcp-server) | 2026-10 |
| Blender 5 + Blender-Lab-MCP | 3D, Raum, Ausstellung; offizieller MCP seit 04/2026 | [StraySpark](https://www.strayspark.studio/blog/official-blender-mcp-server-comparison-2026) | 2026-10 |
| Motion Canvas, Theatre.js | Animation als Code | — | 2026-10 |
| Zotero + MCP | Literatur mit Zitat und Fundstelle | [Playbooks](https://playbooks.com/mcp/kujenga-zotero) | 2026-10 |
| Miro (MCP, Education-Lizenz) | Workshop- und Synthese-Fläche | — | 2026-10 |
| promptfoo | Prüffälle für Modellwechsel (`evals/`) | — | 2026-10 |
| Gegenprüfung durch zweites Modell | günstigster Qualitätshebel | — | 2026-10 |

## Beobachten

| Was | Warum | Quelle | Stand |
|---|---|---|---|
| OpenDesign (Powerformer, Inc.) | Katalog von 296 Design-Skills aus 84 Repos mit Lizenz je Karte: erste Suchstelle vor dem Bau (A10); Arbeitsmuster Mittelmaß als Linter mit ausgewiesener Prüfgrenze. App nicht installieren: Telemetrie standardmäßig an, Cloud-Guthaben; Regelwerke kaum belegt. [Befund](research/2026-11-fundstueck-open-design/befund.md) | [Katalog](https://open-design.ai/de/skills/) · [Repo](https://github.com/nexu-io/open-design) | 2026-11-14 |
| ComfyUI + Comfy MCP | steuerbare Bildgenerierung; offizieller MCP (Cloud, Beta) | [ComfyUI Wiki](https://comfyui-wiki.com/en/news/2026-06-30-comfy-mcp-agent-integration) | 2026-10 |
| TouchDesigner + MCP | Echtzeit, Installation; nicht Open Source | [mcpservers.org](https://mcpservers.org/servers/8beeeaaat/touchdesigner-mcp) | 2026-10 |
| cables.gl, Three.js | offene Echtzeit-Grafik | — | 2026-10 |
| Fontra, fontTools, DrawBot | Schriftgestaltung und Typo-Studien | — | 2026-10 |
| Slint, Godot | HMI-Prototypen | — | 2026-10 |
| GitHub Spec Kit | Spezifikation zuerst, dann Umsetzung | — | 2026-10 |
| Offene Modelle (Qwen, DeepSeek, GLM, Gemma) über Colab | Ausweg und private Daten | [MindStudio](https://www.mindstudio.ai/blog/best-open-source-llms-agentic-coding-2026) | 2026-10 |
| Jules, Antigravity (Google AI Pro) | dritter Agent auf GitHub | — | 2026-10 |
| Graphite | prozedural, knotenbasiert, offen; Alpha, PDF erst geplant | [Digital Production](https://digitalproduction.com/2025/07/14/graphite-open-source-vector-design-tool-with-a-twist/) | 2026-10-28 |
| Affinity (Canva) | kostenlos, Profiniveau, IDML-Import; aber Konto, geschlossenes Format — widerspricht Unabhängigkeit | [Printweek](https://printweek.mydigitalpublication.co.uk/articles/canva-s-free-affinity-app-shakes-up-design-market) | 2026-10-28 |
| Inkscape (CMYK) | CMYK-PDF angekündigt, Stabilität nicht belegt | [inkscape.org](https://inkscape.org/learn/cms) | 2026-10-28 |
| Basic Memory (MCP) | Gedächtnis über Chats als lokale Markdown-Dateien mit Wissensgraph; AGPL-3.0, Bezahlwolke optional. Liegt außerhalb des Repos, also sieht nicht jedes Werkzeug denselben Stand (0024) | [GitHub](https://github.com/basicmachines-co/basic-memory), [dev.co](https://dev.co/ai/mcp/basic-memory) | 2026-11-05 |
| Print Studio (Rodighiero) | Siebdruckfilme aus einer Datenvisualisierung im Browser: Farbtrennung (1–3 Sonderfarben, CMYK), Raster (Punkt, Linie, FM), Beschnitt, Passkreuze. Nur als methodische Referenz für die Druckvorstufe als eigenen Schritt: Raster am Bogen verankert, Prüfansicht in Exportauflösung. An einen Datensatz gebunden; CMYK ohne Farbprofil. Verfällt: ohne Weiterentwicklung bis 2027-05 nach „Halten“ (veraltet), ohne neue Prüfung | [GitHub](https://github.com/rodighiero/print-studio), [k:rodighiero-print-studio-2026] | 2026-11-08 |
| Papers Navigator (Guerra Gómez) | Konferenzbeiträge (IEEE VIS 2026) als Bedeutungskarte: Ähnliches liegt nah, Suche hebt Treffer hervor, Auswahl durch Ziehen, eigene Merkliste; Observable Framework, MIT. Erkenntnis für den Bibliothekar: den eigenen Korpus erkunden statt nur auflisten. Embedding-Modell und Rechenort nicht belegt. Verfällt: ohne neue Prüfung bis 2027-05 nach „Halten“ (veraltet) | [Seite](https://johnguerra.co/viz/papersNavigator/ieeevis2026/), [k:guerra-papers-navigator-2026] | 2026-11-08 |

## Halten

| Was | Warum | Stand |
|---|---|---|
| NotebookLM als Wahrheitsquelle | willkürliche Inhalte erlebt; nur als Einstieg (Skill `belegpflicht`) | 2026-10 |
| Bildgeneratoren ohne Steuerung | erzeugen Mittelmaß, keine Regel | 2026-10 |
| Agentenschwärme, „KI-Agenturen“ | Lärm; kein Qualitätsgewinn belegt | 2026-10 |
| Southleft Design Systems MCP | in D3sign getestet, keine passenden Treffer | 2026-07 |
| GSAP, Remotion | verbreitet, aber nicht Open Source — nur bewusst | 2026-10 |

## Neu — zu bewerten

*Hier trägt der wöchentliche Radar-Scan Funde ein.*

| Was | Warum relevant | Quelle | Stand |
|---|---|---|---|
| Generative Gestaltung — Code-Paket p5.js (Apache-2.0) | Referenz für regelbasierte Gestaltung, Fachpaket „Ordnung“ (Issue #9) | [GitHub](https://github.com/generative-design/Code-Package-p5.js) | 2026-10 |
| VIKUS Viewer (FH Potsdam, offen) | Sammlungen als Zeitleisten-Bildfeld — Bildwissenschaft, Skizze S1 | [UCLAB](https://uclab.fh-potsdam.de/projects/vikus-viewer/) | 2026-10 |
| ml5.js (NYU ITP) | „freundliches“ ML im Browser, KI als Material — Skizze S2 | [ml5js.org](https://ml5js.org/about) | 2026-10 |
| „un/learn ai“-Bände (KITeGG, Open Science Mainz) | Haltung und Lehre zu KI in ästhetischer Praxis — Korpus | [Open Science Mainz](https://openscience.ub.uni-mainz.de/items/02c2fbdd-fdc9-4bd6-a809-1174bd50714f/full) | 2026-10 |
| Penpot 2.19 „Is this it“ | Design-Tokens aus einer Bibliothek in alle verbundenen Dateien teilen, synchron bei Updates; Pfad-Editor, WebGL-Darstellung (Einstellung) — prüfen, ob DTCG-Tokens des Labors so zentral in Penpot liegen können | [Penpot Release Notes](https://penpot.app/release-notes/2-19-is-this-it) | 2026-10-28 |
| Style Dictionary 5.7 | Token-Übersetzer unterstützt DTCG-2025.10-`duration`-Tokens und `$root`-Gruppen — passt zu „DTCG-Tokens (2025.10)“ unter Einsetzen | [GitHub Release v5.7.0](https://github.com/style-dictionary/style-dictionary/releases/tag/v5.7.0) | 2026-10-16 |
| Observable Notebook Kit 2.9 (ISC) | offene Grundlage der Observable-Notebooks 2.0; neu: SQLite- und DuckDB-Dateien direkt als Datenquelle in Notebooks — für Datenvisualisierung ohne Server | [GitHub Release v2.9.0](https://github.com/observablehq/notebook-kit/releases/tag/v2.9.0) | 2026-10-27 |
| Scribus 1.6.7 (stabil) und 1.7.4 (Entwicklung) | 1.6.7 schließt sieben Speicherfehler beim Laden von PSD-, PICT-, TIFF-, DRW- und SVM-Bildern (Absturz bis Codeausführung möglich); 1.7.4 bringt überarbeitete Tabellen, Rechts-nach-links-Satz und neue Seitenformat-Vorlagen. Vor dem geplanten Flyer-Vergleich mindestens 1.6.7 verwenden. PDF/X und CMYK in den Meldungen nicht erwähnt (nicht belegt) | [ubuntuhandbook](https://ubuntuhandbook.org/index.php/2026/10/scribus-1-6-7-released-with-various-fixes-ppa-updated-for-ubuntu/), [linuxcompatible](https://www.linuxcompatible.org/story/scribus-167-and-174-ship-security-fixes-and-longawaited-tables-overhaul/); offizielle Notizen laut beiden: scribus.net (nicht selbst geprüft) | 2026-10-27 |
| Blender 5.3 (Release Candidate, Freigabe angekündigt für 2026-11-10) | Neu u. a. Gaussian Splatting, OpenTimelineIO, „Blender Projects“, verbesserter Video-Sequencer, Grease Pencil — für Raum- und Ausstellungsstudien (Blender steht unter „Erproben“). Inhalte der Unterseiten (Python-API, Projects) nicht geprüft; Verträglichkeit mit dem Blender-MCP offen | [blender.org](https://www.blender.org/releases/5-3/), [Release Notes](https://developer.blender.org/docs/release_notes/5.3/) | 2026-11-09 |

### Feld: Hochschulen und Konferenzen (beobachten)

| Was | Warum | Quelle | Stand |
|---|---|---|---|
| KINDLAB Trier / TRANSFORM | KI als Material, Nachhaltigkeit, „Verlernen“ | [kind-lab.de](https://kind-lab.de/) | 2026-10 |
| re:shape forum (HfG Gmünd) | Mensch-KI-Interaktion, „designing with uncertainty“; Vorträge als Video | [AI+D Lab](https://aid-lab.hfg-gmuend.de/appearances/2025-reshape-summer-school-hfg-schwaebisch-gmuend/) | 2026-10 |
| Correlations (HfG Offenbach), Hidden Layers (KISD) | Winter-/Summer Schools des KITeGG-Verbunds | [Hidden Layers](https://ground-zero.khm.de/hidden-layers-kisd/) | 2026-10 |
| UdK Designing_AI Lab | Mensch–Roboter-Kollaboration im Produktdesign | [UdK](https://produktdesign.udk-berlin.de/2026/08/designing_ai-lab-wraps-up-its-first-semester/) | 2026-10 |
| FH Potsdam UCLAB | Datenvisualisierung, Kultursammlungen, kritische Interfaces | [UCLAB](https://uclab.fh-potsdam.de/courses) | 2026-10 |
| Burg Halle XLab | KI und Robotik, Material und Nachhaltigkeit | [Burg Halle](https://www.burg-halle.de/en/university/facilities/burglabs) | 2026-10 |

Details: [`research/2026-10-feldforschung/`](research/2026-10-feldforschung/befunde.md)
