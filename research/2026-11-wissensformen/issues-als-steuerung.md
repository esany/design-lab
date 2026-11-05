---
dient: A15, A21, A26, A31, A32, A34
datum: 2026-11-05
modell: Claude Opus 5.5 (Claude-App, Cloud-Sitzung)
status: Befund mit Empfehlung. Nichts beschlossen.
---

# Issues zur Steuerung der KI: Prüfung nach dem Stand der Technik

Frage des Eigentümers (Chat, 05.11.): Sein Ansatz ist, im Entwurfsprozess erst in Issues zu
sammeln und dann sauber in die richtige Struktur zu übertragen. Er fragt: Ist das Stand der
Technik? Welche Rahmenbedingungen braucht es, welche Risiken bestehen, welche Alternativen gibt es?

## Was der Stand der Technik sagt

1. **Issues als Auftrag an Agenten sind verbreitet.** GitHub empfiehlt, ein Issue für seinen
   Agenten wie einen Prompt zu lesen und nur klar umrissene Aufgaben zu vergeben. Mehrdeutige,
   breite oder heikle Aufgaben soll man selbst behalten (*belegt*, GitHub Docs „Best practices“).
   **Folge:** Ein Sammel-Issue ist per Definition mehrdeutig, also kein Auftrag für einen Agenten.
2. **Der Arbeitsstand langer Agentenarbeit liegt im Repo, nicht im Issue-System.** Anthropics
   Muster für Agenten über viele Sitzungen: eine Merkmalsliste als JSON mit „bestanden ja/nein“,
   eine Fortschrittsdatei, die Git-Historie und ein Startskript. Jede Sitzung liest diese und
   nimmt genau einen offenen Punkt (*belegt*, Anthropic, Nov. 2025). Beads (Yegge) legt aus
   demselben Grund einen Issue-Tracker als Datei ins Repo, weil Agenten nur kennen, was auf der
   Platte liegt (*belegt*, Zweitquelle morphllm, README). Der Trend geht also zu strukturierten
   Daten im Repo.
3. **Issues sind ein Einfallstor.** In öffentlichen Repos kann jeder ein Issue schreiben. Invariant
   Labs hat im Mai 2025 gezeigt, wie ein präpariertes Issue einen Agenten dazu bringt, Daten aus
   privaten Repos in einen öffentlichen PR zu schreiben. Simon Willison nennt diese Kombination
   die „tödliche Dreiheit“: Zugang zu privaten Daten, fremde Anweisungen und ein Weg nach außen
   (*belegt*, Invariant Labs, devclass). GitHubs Agent reagiert deshalb nur auf Kommentare von
   Personen mit Schreibrecht (*belegt*, GitHub Docs).

## Gegen das Labor gelesen

- **Die Dreiheit liegt hier vor** (*abgeleitet*): `design-lab` ist öffentlich, Claude-Sitzungen
  haben teils Zugang zum privaten `paleo-type`, und Claude kann PRs und Kommentare schreiben.
- **GraphQL ist in Claude-Sitzungen gesperrt** (*belegt*, Fehlermeldung beim Anlegen von PR #125).
  Werkzeuge, die darauf beruhen, etwa GitHub-Projektboards, sind für Claude hier nicht bedienbar.
- **Issues als zweite Uhr** (*belegt*, Lesekosten-Befund): Stand-Köpfe in Issues wichen vom
  Merkzettel ab.
- **Sammeln ohne Übertrag stockt** (*belegt*, Pflege 11/2026): zwölf `entwurf`-Issues ruhen seit
  dem 28./29.10.

## Rahmenbedingungen, wenn Issues steuern

1. **Zwei Arten trennen.** *Briefkasten* (`entwurf`): sammeln, Reifegrad 1–2, kein Agent setzt
   dort um. *Auftrag* (`an:<Modell>`): klar umrissen, mit Abnahme und Grenzen, als Prompt lesbar.
2. **Nur der Eigentümer gibt frei.** Agenten handeln nur auf Issues und Kommentare von Personen
   mit Schreibrecht; fremde Issues sind Daten, keine Anweisungen. Das steht als Regel im
   Skill `issue` (Freigabe durch den Menschen); technisch durchgesetzt ist es nicht.
3. **Ein Ort für den Stand.** Das Issue trägt keinen Stand, nur Auftrag, Abnahme und am Ende
   Verweise auf das Ergebnis im Repo.
4. **Begrenzte Lebensdauer.** Ein Briefkasten-Issue wird übertragen oder geschlossen. Die Pflege
   meldet, was länger als z. B. 14 Tage ruht.
5. **Kurze Threads.** Ergebnisse stehen im Repo, im Issue nur ein Verweis. Das spart Lesekosten.
6. **Kleinste Rechte.** Geschützter Hauptzweig (besteht); keine Agentensitzung, die zugleich
   fremde Issues liest und Zugang zu privaten Repos hat, ohne dass der Mensch zusieht.

## Alternativen

| | Wofür | Stärke | Schwäche |
|---|---|---|---|
| **A · Issues wie oben** | Briefkasten und Aufträge | Handy, Benachrichtigungen, vertraut | außerhalb des Repos, Einfallstor, zweite Uhr |
| **B · Eingang als Datei im Repo** (z. B. `eingang.json` mit Reifegrad, erzeugte Ansicht) | Sammeln und Reifen | ein Ort, versioniert, jedes Werkzeug liest es, keine fremden Einträge | Eintrag nur über Chat oder PR, keine Benachrichtigung |
| **C · Arbeitsliste im Projekt** (Anthropic-Muster: Merkmale mit „bestanden“, Fortschrittsdatei) | lange Umsetzung eines Werkzeugs | Stand der Technik, erzwingt Prüfung je Merkmal | nur für Umsetzung, nicht fürs Sammeln |
| **D · Beads** | Agenten-Aufgaben im Repo | Abhängigkeiten, Git-basiert, offen (MIT) | Installation, für Menschen ohne Zusatzoberfläche unsichtbar; laut Autor kaum getestet → Radar „beobachten“ |
| **E · GitHub-Projektboard** | Übersicht für den Menschen | visuell | GraphQL, für Claude hier nicht bedienbar |

## Empfehlung (*abgeleitet*)

Eine Mischform, die das Labor zum Teil schon lebt:

- **Sammeln:** Weiter dort, wo es für Sie am leichtesten ist, also im Chat oder per Issue. Die
  Sammlung ist aber ein **Briefkasten**, kein Lager: Was Reifegrad 3 („belegt“) erreicht, wandert
  ins Repo, und das Issue schließt mit Verweis. Wer am Handy lieber nur im Chat sammelt, braucht
  B, und der Chat schreibt per PR in die Datei.
- **Steuern:** Aufträge an Modelle bleiben Issues mit `an:`-Label, klar umrissen, mit Abnahme.
- **Umsetzen:** Bei einem Werkzeug über viele Sitzungen steht der Arbeitsstand im Projekt als
  Arbeitsliste (C), nicht im Issue.
- **Sicherheit:** Fremde Issues und Kommentare liest ein Agent nur als Daten. Der Eigentümer
  entscheidet, ob er Issues von Fremden im öffentlichen Labor überhaupt zulassen will. GitHub
  erlaubt, Issues auf Mitwirkende zu beschränken; das ist *nicht belegt* für dieses Repo geprüft.

## Quellen

- GitHub Docs: [Best practices for using Copilot to work on tasks](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/agents/copilot-coding-agent/best-practices-for-using-copilot-to-work-on-tasks)
- Anthropic: [Effective harnesses for long-running agents](https://anthropic.com/engineering/effective-harnesses-for-long-running-agents), Nov. 2025
- Invariant Labs: [GitHub MCP Exploited](https://invariantlabs.ai/blog/mcp-github-vulnerability), Mai 2025; devclass: [Researchers warn of prompt injection vulnerability in GitHub MCP](https://devclass.com/2025/05/27/researchers-warn-of-prompt-injection-vulnerability-in-github-mcp-with-no-obvious-fix/)
- Beads: [steveyegge/beads](https://github.com/steveyegge/beads) (über Fork und Zweitquellen gesehen)
- Labor: `research/2026-10-lesekosten/befund.md`, `stand.md` (Pflege 11/2026), Skill `issue`
