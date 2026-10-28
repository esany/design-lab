# Audit von GPT-6 Astra · Einordnung durch Claude

**Datum:** 2026-10-28 · **Gegenstand:** `main`, Commit `6e621ae` · **Auditor:** GPT-6 Astra
(ChatGPT), rein lesend · **Einordnung:** Claude Opus 5.5 als Orchestrator.
Wortlaut des Audits: [`audit-wortlaut.txt`](audit-wortlaut.txt). Er wurde aus dem Chat
übernommen, die Links des Originals fehlen.

## Nachprüfung der Befunde

| # | Befund (Astra) | Nachprüfung durch Claude | Status | Weiter in |
|---|---|---|---|---|
| 1 | `main` nicht geschützt, obwohl 0019 eine technische Sperre behauptet | API: „Branch not protected“, keine Rulesets. Die Sperre in 0002/0019 meint Claudes Arbeitsumgebung, nicht GitHub. Für andere Modelle gilt sie nicht | belegt · Lesart abgeleitet | #40 (`an:mensch`) |
| 2 | Akzent als Text 4,33:1 (hell) und 3,77:1 (dunkel) | nachgerechnet, beide Werte bestätigt. **Zusätzlich:** `muted` hell (#71706b auf #f4f2ed) 4,44:1, ebenfalls unter 4,5 | belegt | #42 (`an:chatgpt`) |
| 3 | `stand.md`: 11/21/49 statt 12/25/67 | bestätigt. Pull Request #38 entfernt die handgepflegten Zahlen schon | belegt · erledigt mit #38 | — |
| 4 | PR-Vorlage verlangt manuellen Merge, 0019 erlaubt Selbstübernahme | bestätigt (`.github/pull_request_template.md`, letzte Zeile) | belegt | #41 (`an:chatgpt`) |
| 5 | Browser-Test prüft nur Fehler und Überlauf | bestätigt (`tools/smoke.mjs`: `pageerror`, `console.error`, Überlauf) | belegt | im Pilot #44 |
| 6 | Start-Eval meldet „bestanden“ trotz Einschränkungen | bestätigt (`evals/start/ergebnisse/2026-10-28-claude-haiku.md`) | belegt | #43 (`an:chatgpt`) |

## Einordnung der Empfehlungen

| Empfehlung (Astra) | Einordnung (Claude) | Begründung |
|---|---|---|
| `main` schützen | **jetzt umsetzen**, nach Antwort des Menschen | Sicherheit ist schwer umkehrbar, die Antwort gehört deshalb dem Menschen (Schreibregel 2). Es braucht Schutz ohne Pflicht-Review, sonst fällt `0019` weg |
| Freigabehinweise bereinigen | **jetzt umsetzen** | Der Text widerspricht einer gültigen Regel; die Korrektur ist klein |
| `stand.md` synchronisieren | **erledigt mit #38** | Statt Zahlen nachzuführen, entfernt #38 sie. Wo Zahlen fehlen, können sie nicht veralten |
| Pilot: eine Studie unabhängig prüfen | **Pilot** | Das ist der stärkste Punkt des Audits: Belege für Wirkung statt mehr Methode. Ein anderes Modell prüft Claudes Studie (Qualitätsschleife) |
| Manifest, Intent, AGENTS.md, Entscheidungen, Tokens bewahren | **bewusst bewahren** | Zustimmung |
| keine neue Governance, Rollenmodelle, Skills ohne Anwendungsfall | **Frage an den Menschen** (#45) | Das ist selbst eine Regel und braucht die Antwort des Eigentümers |
| Modellzuordnung erst nach Prüffällen | **erledigt mit #38** | `0025` ist dort auf Labels, Vorlage und Skill verschlankt |

## Wo Claude widerspricht oder ergänzt

- **Zahlen in `stand.md`:** Synchronisieren heißt hier entfernen, nicht nachführen (siehe oben).
- **Kontrast:** Das Audit hat `muted` hell übersehen. Außerdem verwendet die Website den Akzent
  nur an zwei Stellen als Text (`a:hover`, `.pipeline b`). Das Problem ist also klein, betrifft
  aber eine Gestaltungsentscheidung (Signalfarbe). Deshalb legt Astra Optionen vor, und der
  Mensch wählt.
- **„Nicht noch mehr Labor bauen“:** Claude stimmt zu, mit einer Einschränkung: Der Skill `issue`
  aus #38 ist ebenfalls Labor. Claude hält ihn für gedeckt, weil diese Verteilung ihn sofort
  anwendet. Wenn die Übergaben #41–#44 ohne Rückfragen durchlaufen, ist das der Beleg.
  Wenn nicht, gehört er auf den Prüfstand.
- **Modell-Label:** Astra arbeitet in ChatGPT, darum `an:chatgpt` (*abgeleitet* aus
  `research/2026-10-issue-arbeit/modelle.md`; nach #38 nur auf dem Branch). Hat Astra keinen
  Schreibzugang, liefert es den Text im Kommentar (Skill `issue`, A4).

## Reihenfolge

1. Der Mensch gibt #38 frei (bringt Skill `issue`, Vorlage „Übergabe“ und Prüffall `uebergabe`).
2. Der Mensch beantwortet #40 und #45.
3. Astra übernimmt #42 und #44 (beide nicht blockiert), danach #41 (nach #40) und #43 (nach #38).
