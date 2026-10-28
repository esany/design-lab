---
status: teilweise freigegeben (Orchestrator, 28.10.); der Rest ist Vorschlag und verschlankt
datum: 2026-10-28
entschieden_von: offen (Antwort des Menschen)
---

# 0025 · Übergaben zwischen Modellen laufen über Issues

**Anlass:** Mit Claude Opus 5.5 war nach wenigen Sitzungen viel Wochennutzung verbraucht; es
werden mehrere Modelle genutzt. Was von ihnen belegt ist: `research/2026-10-issue-arbeit/modelle.md`.

**Freigegeben (28.10.):** Claude ist Orchestrator. Es schreibt die Issues und gibt ihnen Labels;
andere Modelle arbeiten nur an Issues mit ihrem Label (`AGENTS.md`, „Start jeder Sitzung“).

## Vorschlag (nur noch das)

- Übergaben zwischen Modellen laufen über das Repo, nicht über den Menschen: ein Issue ist
  eine Aufgabe für ein Modell.
- Dafür genau drei Dinge: die vorhandenen Labels `an:claude`, `an:codex`, `an:chatgpt`,
  `an:gemini`, `an:mensch` · die Vorlage „Übergabe“ (`.github/ISSUE_TEMPLATE/uebergabe.yml`) ·
  der Skill `issue`. Die Regelquelle bleibt `AGENTS.md`.
- Die Abnahme steht im Issue („Fertig, wenn“). Ein Modell prüft vor dem Anfangen selbst, ob es
  dran ist (Skill `issue`, Abschnitt A). Ein Label allein ist kein Auftrag: der Mensch gibt das
  Issue frei („weiter“, „mach #n“).

## Gestrichen gegenüber der ersten Fassung

| Gestrichen | Grund |
|---|---|
| Zuschnitt „welches Modell macht was“ (Tabelle) | nicht belegt, in Wochen veraltet; Herstellerzahlen messen Coding, nicht Gestaltung. Zuordnung entsteht aus Prüffällen (`evals/uebergabe`) |
| Sparregeln für Claude (Chat je Thema, Unteragenten, Radar alle zwei Wochen) | Betriebstipps des Eigentümers, keine Laborregel; der Radar-Takt ist eine eigene Entscheidung (0015) |
| Label `übergabe` | doppelt: Titel `[Übergabe]` und die Vorlage kennzeichnen es schon |
| Unter-Issues, „blockiert durch“ als eigene Mechanik | genügt als Feld in der Vorlage |
| ChatGPT-Ergebnisse „als Block kopieren“ | steht jetzt im Skill (Abschnitt A3), keine eigene Regel |

## Prüfung

Fall `evals/uebergabe`: ein frisch nach Vorlage geschriebenes Issue wird von einem zweiten Modell
ohne Rückfrage richtig zugeordnet und bearbeitet. Status: angelegt, *nicht getestet*.

**Rückgängig:** „Regel 0025 rückgängig“.
