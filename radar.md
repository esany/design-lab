# Radar

Werkzeuge und Entwicklungen, die das Labor beobachtet. Vier Ringe:

- **Einsetzen** — im Labor erprobt und Standard
- **Erproben** — lohnt ein konkretes Experiment
- **Beobachten** — interessant, noch kein Anlass
- **Halten** — bewusst nicht (mehr) nutzen

Jeder Eintrag: was es ist · warum relevant · Quelle · Stand. Änderungen nur mit
Begründung (Skill `pflege`). Stand des Radars: **2026-10-27**.

## Einsetzen

| Was | Warum | Quelle | Stand |
|---|---|---|---|
| Git + Pull Requests als Freigabe | Mensch gibt per Merge frei; vollständige Historie | — | 2026-10 |
| `AGENTS.md` | gemeinsame Anweisung für Claude, Codex, Gemini; Linux-Foundation-Projekt (AAIF) | [linuxiac](https://linuxiac.com/model-context-protocol-joins-linux-foundation-in-major-ai-shift/) | 2026-10 |
| `SKILL.md` (Agent Skills) | Methoden als portable Skills, 30+ Werkzeuge | [noqta](https://www.noqta.tn/en/news/skill-md-open-standard-30-ai-coding-tools-adoption-2026) | 2026-10 |
| DTCG-Tokens (2025.10) | stabiles, offenes Token-Format | [W3C DTCG](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/) | 2026-10 |
| SVG + JavaScript ohne Build | dauerhaft lauffähig, keine Abhängigkeiten | — | 2026-10 |
| Playwright | Agent sieht und prüft sein eigenes Ergebnis | — | 2026-10 |

## Erproben

| Was | Warum | Quelle | Stand |
|---|---|---|---|
| Observable Plot, D3, Vega-Lite | Profistandard für Datenvisualisierung | — | 2026-10 |
| Typst, Paged.js | Satz und Print aus Code | — | 2026-10 |
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
| ComfyUI + Comfy MCP | steuerbare Bildgenerierung; offizieller MCP (Cloud, Beta) | [ComfyUI Wiki](https://comfyui-wiki.com/en/news/2026-06-30-comfy-mcp-agent-integration) | 2026-10 |
| TouchDesigner + MCP | Echtzeit, Installation; nicht Open Source | [mcpservers.org](https://mcpservers.org/servers/8beeeaaat/touchdesigner-mcp) | 2026-10 |
| cables.gl, Three.js | offene Echtzeit-Grafik | — | 2026-10 |
| Fontra, fontTools, DrawBot | Schriftgestaltung und Typo-Studien | — | 2026-10 |
| Slint, Godot | HMI-Prototypen | — | 2026-10 |
| GitHub Spec Kit | Spezifikation zuerst, dann Umsetzung | — | 2026-10 |
| Offene Modelle (Qwen, DeepSeek, GLM, Gemma) über Colab | Ausweg und private Daten | [MindStudio](https://www.mindstudio.ai/blog/best-open-source-llms-agentic-coding-2026) | 2026-10 |
| Jules, Antigravity (Google AI Pro) | dritter Agent auf GitHub | — | 2026-10 |

## Halten

| Was | Warum | Stand |
|---|---|---|
| NotebookLM als Wahrheitsquelle | willkürliche Inhalte erlebt; nur als Einstieg (Skill `belegpflicht`) | 2026-10 |
| Bildgeneratoren ohne Steuerung | erzeugen Mittelmaß, keine Regel | 2026-10 |
| Agentenschwärme, „KI-Agenturen“ | Lärm; kein Qualitätsgewinn belegt | 2026-10 |
| Southleft Design Systems MCP | in D3sign getestet, keine passenden Treffer | 2026-07 |
| GSAP, Remotion | verbreitet, aber nicht Open Source — nur bewusst | 2026-10 |
| OpenClaw | persönlicher Agent mit breiten Systemrechten; 341 schadhafte ClawHub-Skills (02/2026), RCE-Lücke CVE-2026-25253, Zugangsdaten im Klartext. Entscheidung: unsicheres System, nicht im Netzwerk. Für Gestaltung ohne Mehrwert gegenüber dem bestehenden Stack | 2026-10 |

**Quellen zu OpenClaw:** [openclaw.ai](https://openclaw.ai/) ·
[The Hacker News, 02/2026](https://thehackernews.com/2026/02/researchers-find-341-malicious-clawhub.html) ·
[DigitalOcean: 7 Security Challenges](https://www.digitalocean.com/resources/articles/openclaw-security-challenges)

## Neu — zu bewerten

*Hier trägt der wöchentliche Radar-Scan Funde ein.*

