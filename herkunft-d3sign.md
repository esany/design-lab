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
| Rollen steuern Perspektive, nicht Befugnis (Design, Development, Review, Governance) | D-009 | **fehlt** — für Kritik und Gegenprüfung nützlich |
| Fachliche Nutzung und Systementwicklung getrennt ausweisen | D-025 | **fehlt** — genau diese Vermischung hat das Labor heute ins Gerüst statt ins Werk gezogen |
| Arbeitskontext vor jeder Aktion: Ziel, Gegenstand, Aktion, Umfang, Grenzen, Ergebnis, Abnahme | AGENTS | **teilweise** — „Anforderung spiegeln“, ohne Abnahmekriterium |
| `PROMPT`/`AUSFÜHREN` als Freigabe | D-018, D-030 | **bewusst abgelöst** durch 0019 — Freigabe über offene Punkte statt Codewort |
| Regelkandidat → explizite Regelsetzung | D-015 | **übernommen** als Dreimal-Regel + `decisions/` |
| Delta-Nachweis beim Sichern | D-016 | **übernommen** als `stand.md` |
| Aktive Ziel-, Lean- und Proportionalitätsprüfung; der Agent darf widersprechen | D-017 | **teilweise** — Prinzip 8 „klein“, aber ohne Pflicht zum Widerspruch |
| Priorisierung: jetzt umsetzen · Pilot · bewusst bewahren · nicht relevant · verwerfen — mit Nutzen, Aufwand, Folge des Nichtstuns | D-029 | **fehlt** |

## Evidenz und Werkzeuge

| D3sign-Prinzip | Quelle | Status im Labor |
|---|---|---|
| Evidenz vor Ableitung | D-014 | **übernommen** (belegt · abgeleitet · nicht belegt) |
| Werkzeug-Status fein: sichtbar · abgeleitet · getestet · fehlgeschlagen · nicht getestet · nicht nachgewiesen · blockiert | workflows | **teilweise** — auf drei Stufen verkürzt; Werkzeug-Ergebnisse brauchen die feine Fassung |
| Quelle vor Tool, minimal ausreichender Kontext | workflows | **teilweise** — implizit in `belegpflicht` |
| **Stoppen statt simulieren**: passt Werkzeug oder Zugriff nicht, Lücke benennen statt Ersatzhandlung | workflows, D-026 | **fehlt** |
| Übernahmeart vor Werkzeugwahl klären | D-026 | **übernommen** (Prinzip 6) |
| Wissens-Dienste gelten nur bei passenden, belegten Treffern als Evidenz | D-028 | **übernommen** (`belegpflicht`) |
| Tests sind Befunde, keine Standards: Test → Befund → Bewertung → Übernahme | D-008, AGENTS | **übernommen** (`experiments/`) |
| Fundstücke bewerten: Wirkprinzip, Überschneidung, Unabhängigkeit, Sicherheit, Rückbaubarkeit; Integrationsgrade beobachten → Erkenntnis → Arbeitsmuster → Pilot → integrieren | D-032 | **fehlt** als Ablauf (bei OpenClaw angewandt) |
| Aus fremden Skills nur belegte Ablaufprinzipien übernehmen, keine fremden Rechte/Skripte | D-033 | **fehlt** |
| State-of-the-Art nur mit belastbarer Quelle oder begrenztem Test | Evaluation Framework | **teilweise** — in `belegpflicht`, nicht für Werkzeug-Empfehlungen |

## Qualität und Vermittlung

| D3sign-Prinzip | Quelle | Status im Labor |
|---|---|---|
| Erstellen, Prüfen, Dokumentieren getrennt | D-036 | **übernommen** (Prinzip 4) |
| **Vertrauen, Unterstützung, Verlässlichkeit** statt formaler Vollständigkeit — keine Scheinreife | D-035 | **fehlt** — galt für Figma-Doku, ist aber ein allgemeiner Qualitätsmaßstab für jedes Ergebnis |
| Menschenzentrierte Vermittlung ohne Vorwissen, progressive Offenlegung | D-019, D-021 | **übernommen** (0016, 0018) |
| Zielgruppen- und Schichtpassung: Regeln für Agenten, Einordnung für Menschen getrennt | D-023 | **übernommen** (AGENTS.md vs. `stand.md`/README) |
| Versierter Review: technisch, agentisch, informationell | D-022 | **teilweise** (`kritik`) |
| Bewertungsmaßstab 0 kritisch · 1 teilweise · 2 erfüllt | Evaluation Framework | **teilweise** — `intent.md` nutzt erfüllt/teilweise/offen |

## Modul „System“ (der alte Intent)

| D3sign-Prinzip | Quelle | Status im Labor |
|---|---|---|
| Bedeutung vor Ausprägung | design-principles | **fehlt** |
| Wiederverwendung mit klaren Grenzen | design-principles | **fehlt** |
| Wenige unabhängige Variantenachsen; nur nötige Kombinationen | design-principles, standards | **fehlt** |
| Zustände und Accessibility gehören zum Vertrag | design-principles | **fehlt** |
| Tokens drücken Rollen aus (primitiv → semantisch → Komponente) | design-principles, standards | **fehlt** |
| Evolution statt Big-Bang | design-principles | **teilweise** (Prinzip 8) |
| Erweiterungsfähige Komponentenverträge: Invarianten, Ausprägung, Kontextentscheidung, additiv/restriktiv/semantisch | D-034 | **fehlt** |
| Semantisches Modell: Aktion, Navigation, Priorität, Auswahl, Eingabe, Status, Inhalt | semantic-model | **fehlt** |

## Nicht relevant für das persönliche Labor

ISMS-/ISB-Freigaben für Dienste (D-031) — durch die Sicherheitsregel A15
ersetzt · Wiki-Pflege und `WIKI PRÜFEN` (D-019, D-024, E-071) — durch
`stand.md` ersetzt · Figma-spezifische Prüfgates (V3–V6) — bleiben im Archiv.

## Ergebnis

- **übernommen:** 10 · **teilweise:** 8 · **bewusst abgelöst:** 1 · **fehlt:** 14 (von 33)
- Die Steuerungs- und Evidenzprinzipien sind weitgehend da.
- **Es fehlen vor allem:** Trennung Werk/System (D-025), Priorisierung
  (D-029), Widerspruchspflicht (D-017), „Stoppen statt simulieren“,
  Fundstück-Bewertung (D-032/033), der allgemeine Qualitätsmaßstab
  Vertrauen–Unterstützung–Verlässlichkeit (D-035) und das gesamte Modul
  „System“.
