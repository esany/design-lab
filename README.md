# design-lab

Persönliches Labor für Gestaltung mit KI-Assistenz — Methoden, Studien,
Werkzeuge. Offen, toolunabhängig, lebendig.

**Website:** https://esany.github.io/design-lab/ (nach Aktivierung von GitHub Pages)

## Wie das Labor arbeitet

```
Anforderung  →  Agent baut auf einem Branch  →  Pull Request  →  du klickst „Merge“
(Issue/Chat)     (Claude, Codex oder Gemini)     (Vorschlag)       (Freigabe)
```

Du musst kein Git können. Vier Begriffe genügen:

| Begriff | Bedeutung |
|---|---|
| **main** | der gültige Stand des Labors |
| **Branch** | Arbeitskopie eines Agenten |
| **Pull Request (PR)** | Vorschlag mit sichtbarem Vorher/Nachher |
| **Merge** | deine Freigabe — erst dann gilt es |

### Eine Anforderung stellen

- **Im Chat** mit einem Agenten: „Im design-lab: …“
- **Als Issue** auf GitHub: *Issues → New issue → Anforderung*. Jeder Agent
  kann es später aufgreifen.

### Freigeben

Auf GitHub (Web oder App) den PR öffnen, unter *Files changed* ansehen,
dann **Merge pull request**. Nicht einverstanden? Kommentar schreiben —
der Agent arbeitet nach.

## Was wo liegt

| Ort | Inhalt |
|---|---|
| [`principles.md`](principles.md) | Haltung und Prinzipien |
| [`AGENTS.md`](AGENTS.md) | Arbeitsvertrag für alle Agenten |
| [`decisions/`](decisions/) | Entscheidungen mit Status — hier gibst du frei |
| [`.agents/skills/`](.agents/skills/) | Methoden und Abläufe als Skills |
| [`studies/`](studies/) | Studien (generativ, visuell, prüfbar) |
| [`experiments/`](experiments/) | Experimente: Hypothese → Ergebnis → behalten/verwerfen |
| [`radar.md`](radar.md) | Werkzeug- und Entwicklungsradar |
| [`system/`](system/) | Design-Tokens des Labors (DTCG) |
| [`corpus/`](corpus/) | Literatur und Normdaten (Verweise, keine Volltexte) |
| [`evals/`](evals/) | Prüffälle für Modell- und Werkzeugwechsel |

## Wie es lebendig bleibt

- **Wöchentlich:** Radar-Scan neuer Entwicklungen → PR mit Vorschlägen
- **Monatlich:** Pflege-Durchlauf (Links, Veraltetes, offene Experimente) → PR
- **Quartalsweise:** Ausweg-Test — Prüffälle mit einem anderen Modell/Werkzeug
- **Automatisch bei jedem PR:** Prüfungen (Links, Tokens, Studien, Index)

## Werkzeuge

Agenten: Claude Code · Codex · Gemini CLI (alle lesen `AGENTS.md`).
Kanäle: Code (SVG, D3, Observable Plot, Typst …), Penpot, Blender, Miro.
Details und Bewertung: [`radar.md`](radar.md).

## Lizenz

Code: MIT ([`LICENSE`](LICENSE)). Texte, Bilder, Studien: CC BY 4.0
([`LICENSE-CONTENT.md`](LICENSE-CONTENT.md)).
