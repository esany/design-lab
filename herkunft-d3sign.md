# Herkunft: Was aus D3sign übernommen ist

Abgleich der zentralen, übergreifenden Prinzipien des früheren Arbeits-Repos
D3sign (Stand Oktober 2026, jetzt privat) mit dem Labor. Geprüft gegen die
Originalquellen: `AGENTS.md`, Decisions D-001 bis D-036,
`foundations/design-principles.md`, `foundations/standards.md`,
`operations/workflows.md` (Arbeitsprinzipien evidenzbasierte Toolnutzung),
`governance/evaluation-framework.md`.

Status: **übernommen** · **bewusst abgelöst** (mit Grund) · **fehlt** (gültig,
aber nicht gesichert) · **nicht relevant** (an den Arbeitskontext gebunden).

## Arbeitsteilung und Steuerung

| D3sign-Prinzip | Quelle | Status im Labor |
|---|---|---|
| Mensch entscheidet Bedeutung, Priorität, Freigabe; technische Schreibfähigkeit ist keine Entscheidungsbefugnis | AGENTS, D-002 | **übernommen** (AGENTS.md Arbeitsteilung) |
| Rollen steuern Perspektive, nicht Befugnis (Design, Development, Review, Governance) | D-009 | **übernommen** (AGENTS.md „Prüfen vor dem Handeln“) |
| Fachliche Nutzung und Systementwicklung getrennt ausweisen | D-025 | **übernommen** (Prinzip 9) |
| Arbeitskontext vor jeder Aktion: Ziel, Gegenstand, Aktion, Umfang, Grenzen, Ergebnis, Abnahme | AGENTS | **übernommen** (AGENTS.md „Prüfen vor dem Handeln“) |
| `PROMPT`/`AUSFÜHREN` als Freigabe | D-018, D-030 | **bewusst abgelöst** durch 0019 — Freigabe über offene Punkte statt Codewort |
| Regelkandidat → explizite Regelsetzung | D-015 | **übernommen** als Dreimal-Regel + `decisions/` |
| Delta-Nachweis beim Sichern | D-016 | **übernommen** als `stand.md` |
| Aktive Ziel-, Lean- und Proportionalitätsprüfung; der Agent darf widersprechen | D-017 | **übernommen** (Widerspruchspflicht in AGENTS.md) |
| Priorisierung: jetzt umsetzen · Pilot · bewusst bewahren · nicht relevant · verwerfen — mit Nutzen, Aufwand, Folge des Nichtstuns | D-029 | **übernommen** (AGENTS.md) |

## Evidenz und Werkzeuge

| D3sign-Prinzip | Quelle | Status im Labor |
|---|---|---|
| Evidenz vor Ableitung | D-014 | **übernommen** (belegt · abgeleitet · nicht belegt) |
| Werkzeug-Status fein: sichtbar · abgeleitet · getestet · fehlgeschlagen · nicht getestet · nicht nachgewiesen · blockiert | workflows | **übernommen** (AGENTS.md, Werkzeug-Status) |
| Quelle vor Tool, minimal ausreichender Kontext | workflows | **übernommen** (AGENTS.md) |
| **Stoppen statt simulieren**: passt Werkzeug oder Zugriff nicht, Lücke benennen statt Ersatzhandlung | workflows, D-026 | **übernommen** (Prinzip 11) |
| Übernahmeart vor Werkzeugwahl klären | D-026 | **übernommen** (Prinzip 6) |
| Wissens-Dienste gelten nur bei passenden, belegten Treffern als Evidenz | D-028 | **übernommen** (`belegpflicht`) |
| Tests sind Befunde, keine Standards: Test → Befund → Bewertung → Übernahme | D-008, AGENTS | **übernommen** (`experiments/`) |
| Fundstücke bewerten: Wirkprinzip, Überschneidung, Unabhängigkeit, Sicherheit, Rückbaubarkeit; Integrationsgrade beobachten → Erkenntnis → Arbeitsmuster → Pilot → integrieren | D-032 | **übernommen** (Skill `fundstueck`) |
| Aus fremden Skills nur belegte Ablaufprinzipien übernehmen, keine fremden Rechte/Skripte | D-033 | **übernommen** (Skill `fundstueck`) |
| State-of-the-Art nur mit belastbarer Quelle oder begrenztem Test | Evaluation Framework | **teilweise** — in `belegpflicht`, nicht für Werkzeug-Empfehlungen |

## Qualität und Vermittlung

| D3sign-Prinzip | Quelle | Status im Labor |
|---|---|---|
| Erstellen, Prüfen, Dokumentieren getrennt | D-036 | **übernommen** (Prinzip 4) |
| **Vertrauen, Unterstützung, Verlässlichkeit** statt formaler Vollständigkeit — keine Scheinreife | D-035 | **übernommen** (Prinzip 10, allgemein) |
| Menschenzentrierte Vermittlung ohne Vorwissen, progressive Offenlegung | D-019, D-021 | **übernommen** (0016, 0018) |
| Zielgruppen- und Schichtpassung: Regeln für Agenten, Einordnung für Menschen getrennt | D-023 | **übernommen** (AGENTS.md vs. `stand.md`/README) |
| Versierter Review: technisch, agentisch, informationell | D-022 | **teilweise** (`kritik`) |
| Bewertungsmaßstab 0 kritisch · 1 teilweise · 2 erfüllt | Evaluation Framework | **teilweise** — `intent.md` nutzt erfüllt/teilweise/offen |

## Modul „System“ (der alte Intent)

| D3sign-Prinzip | Quelle | Status im Labor |
|---|---|---|
| Bedeutung vor Ausprägung | design-principles | **übernommen** (`system/prinzipien.md`) |
| Wiederverwendung mit klaren Grenzen | design-principles | **übernommen** (`system/prinzipien.md`) |
| Wenige unabhängige Variantenachsen; nur nötige Kombinationen | design-principles, standards | **übernommen** (`system/prinzipien.md`) |
| Zustände und Accessibility gehören zum Vertrag | design-principles | **übernommen** (`system/prinzipien.md`) |
| Tokens drücken Rollen aus (primitiv → semantisch → Komponente) | design-principles, standards | **übernommen** (`system/prinzipien.md`) |
| Evolution statt Big-Bang | design-principles | **übernommen** (`system/prinzipien.md`) |
| Erweiterungsfähige Komponentenverträge: Invarianten, Ausprägung, Kontextentscheidung, additiv/restriktiv/semantisch | D-034 | **übernommen** (`system/prinzipien.md`) |
| Semantisches Modell: Aktion, Navigation, Priorität, Auswahl, Eingabe, Status, Inhalt | semantic-model | **übernommen** (`system/prinzipien.md`) |

## Nicht relevant für das persönliche Labor

ISMS-/ISB-Freigaben für Dienste (D-031) — durch die Sicherheitsregel A15
ersetzt · Wiki-Pflege und `WIKI PRÜFEN` (D-019, D-024, E-071) — durch
`stand.md` ersetzt · Figma-spezifische Prüfgates (V3–V6) — bleiben im Archiv.

## Ergebnis (aktualisiert 2026-10-27, Entscheidung 0020)

- **übernommen:** 29 · **teilweise:** 3 · **bewusst abgelöst:** 1 (von 33)
- Teilweise bleiben: State-of-the-Art-Nachweis (entsteht mit den Fachpaketen),
  versierter Review (D-022 → Skill `kritik`) und der
  0-1-2-Bewertungsmaßstab (→ `intent.md` nutzt erfüllt/teilweise/offen).

- Das Modul „System“ ist übernommen, aber praktisch noch nicht erprobt.
