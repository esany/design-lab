# design-lab

Persönliches Labor für Gestaltung mit KI-Assistenz — Methoden, Studien,
Werkzeuge. Toolunabhängig, auf offenen Formaten, lebendig.

**Website:** https://esany.github.io/design-lab/ · Repo öffentlich einsehbar, alle Rechte vorbehalten.

## Start mit jeder KI — einmal einrichten

Nur **einmal** je Werkzeug eintragen, danach beginnt jeder Chat von selbst richtig:

| Werkzeug | wo eintragen |
|---|---|
| Claude (Chat, Projekt „Design“) | Projekt → Anweisungen; für alle Chats: Einstellungen → Profil → persönliche Präferenzen |
| ChatGPT | Projekt → Anweisungen; für alle Chats: Einstellungen → Personalisierung → benutzerdefinierte Anweisungen |
| Claude Code, Codex, Gemini im Repo | nichts — sie laden `AGENTS.md` selbst |

Text:

```
Wenn es um Gestaltung, das Labor oder design-lab geht: Das Labor ist das GitHub-Repo esany/design-lab (https://github.com/esany/design-lab). Lies zu Beginn AGENTS.md und stand.md (Abschnitt „Anschluss“), nenne den nächsten Schritt in einem Satz und mach dann weiter.
```

Die Regeln selbst stehen nur in [`AGENTS.md`](AGENTS.md) („Start jeder Sitzung“).

## Wie das Labor arbeitet

```
Anforderung  →  Agent baut  →  automatische Prüfung  →  Agent übernimmt  →  stand.md
(Chat/Issue)                                                      offene Punkte → zu dir
```

Du gestaltest und entscheidest offene Punkte. Alles andere erledigen die Agenten
im Rahmen deiner Prinzipien — nachvollziehbar in [`stand.md`](stand.md) und
jederzeit rückgängig („… rückgängig“ genügt). Zum Verstehen helfen vier Begriffe:

| Begriff | Bedeutung |
|---|---|
| **main** | der gültige Stand des Labors |
| **Branch** | Arbeitskopie eines Agenten |
| **Pull Request (PR)** | Vorschlag mit sichtbarem Vorher/Nachher |
| **Merge** | Übernahme in den gültigen Stand |

### Eine Anforderung stellen

- **Im Chat** mit einem Agenten: „Im design-lab: …“
- **Als Issue** auf GitHub: *Issues → New issue → Anforderung*. Jeder Agent
  kann es später aufgreifen.

## Was wo liegt

| Ort | Inhalt |
|---|---|
| [`stand.md`](stand.md) | **Entwicklungsstand: was passiert ist, was offen ist** |
| [`intent.md`](intent.md) | **Maßstab: Intent, Ziel, Anforderungen — mit ehrlichem Stand** |
| [`herkunft-d3sign.md`](herkunft-d3sign.md) | Was aus D3sign übernommen ist und was fehlt |
| [`principles.md`](principles.md) | Haltung und Prinzipien |
| [`AGENTS.md`](AGENTS.md) | Arbeitsvertrag für alle Agenten |
| [`decisions/`](decisions/) | Entscheidungen mit Status und Begründung |
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

## Rechte

© esany. Alle Rechte vorbehalten. Zitierte Werke Dritter sind nur als Verweis enthalten.
