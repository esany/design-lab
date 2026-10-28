---
name: issue
description: Use when writing, picking up, handing over or closing a GitHub issue in the lab — decides whether an issue is this model's turn, what "done" means, and how the next model or the owner continues. Replaces ad-hoc hand-offs through the chat.
---

# Issue-Arbeit

Ein Issue ist eine Aufgabe für ein Modell, nicht ein Gespräch. Das Repo ist das Gedächtnis
(`AGENTS.md`, Regel 0024); der Mensch ist kein Durchreicher.

## A · Bin ich dran? (vor dem Anfassen, jedes Modell)

Alle sechs müssen stimmen, sonst nicht anfangen:

1. **Auftrag:** Der Mensch hat in dieser Sitzung das Issue genannt oder freigegeben („weiter“,
   „mach #n“), oder es ist ein geplanter Lauf mit festem Auftrag. Ein offenes Issue mit meinem
   Label ist allein **kein** Auftrag (`AGENTS.md`, „Start jeder Sitzung“).
2. **Label:** `an:<ich>` ist gesetzt (`an:claude`, `an:codex`, `an:chatgpt`, `an:gemini`). Issues
   mit fremdem Label oder `an:mensch` fasse ich nicht an. `an:mensch` ist eine Frage an den
   Eigentümer.
3. **Nicht blockiert:** kein offenes „Blockiert durch #n“.
4. **Zugang:** ich kann im Repo lesen **und** schreiben, was die Ausgabe verlangt. Wenn nicht:
   genau das sagen, aufhören (kein Raten, nicht anderswo suchen). Ein Modell ohne Schreibzugang
   liefert den fertigen Text mit Zielpfad als **einen** Block in den Kommentar.
5. **Abnahme prüfbar:** unter „Fertig, wenn“ stehen Sätze, die ich mit Ja oder Nein beantworten
   kann. Fehlen sie: eine Rückfrage als Kommentar, nicht raten.
6. **Passt zum Modell:** braucht die Aufgabe Werkzeuge, die ich nicht habe (Rendern, Messen,
   Druckvorstufe), oder ein unabhängiges Urteil über Arbeit, die ich selbst erzeugt habe? Dann
   nicht bearbeiten, sondern den Grund in einem Satz kommentieren und die Umverteilung
   vorschlagen. **Verteilen (Labels setzen) tut nur Claude als Orchestrator** (0025).

## B · Ein Issue schreiben

Vorlage „Übergabe“ verwenden (Titel beginnt mit `[Übergabe]`). Issues schreibt und etikettiert
Claude als Orchestrator; andere Modelle schlagen Aufgaben im Kommentar vor. Pro Feld:

- **Ziel** — ein Satz, ohne Lösungsweg.
- **Zuerst lesen** — Pfade im Repo, nicht Beschreibungen davon. Höchstens fünf.
- **Ausgabe** — Zielpfad(e) oder „Kommentar“. Branch `lab/<thema>`, ein PR, `Closes #n`.
- **Fertig, wenn** — zwei bis fünf Ja/Nein-Sätze, jeder prüfbar durch Ansehen, Rendern,
  Messen oder `node tools/build.mjs`. „Gut“ und „sauber“ sind keine Abnahme.
- **Nicht tun** — Grenzen (z. B. „keine Änderung an `AGENTS.md`“).
- **Danach an** — wer als Nächstes dran ist und was dann zu prüfen ist.
- **Blockiert durch** — `#n` oder leer.

Eine Aufgabe, ein Modell, ein PR. Wird es mehr, in Unter-Issues teilen.

## C · Bearbeiten

1. Kurz spiegeln, was verstanden wurde und welche Annahme gilt (ein bis zwei Sätze, im Issue).
2. Auf Branch arbeiten, PR öffnen mit `Closes #n`, `stand.md` fortschreiben.
3. Im PR **je Zeile von „Fertig, wenn“** Ja / Nein / nicht geprüft, mit Beleg (Pfad, Zahl,
   Screenshot). Ein Modell erklärt seine eigene Arbeit nicht für bestanden (`AGENTS.md`,
   Qualitätsschleife).

## D · Übergeben oder zurückgeben

Kommentar mit Block `Übergabe:` — **Ergebnis** (Pfad oder PR) · **Geprüft / nicht geprüft** ·
**Offen** (höchstens drei Fragen). Dann das eigene Label entfernen und genau eines setzen:
`an:claude` (zurück an den Orchestrator, der das nächste Modell bestimmt) oder `an:mensch`.
Claude selbst setzt `an:<nächstes Modell>`, wenn die Arbeit weitergeht. Entscheidungen über
Gestaltung, Bedeutung, neue Regeln und alles schwer Umkehrbare gehen immer an `an:mensch`.

## Typische Fehler

- Das Issue enthält die Lösung statt der Abnahme → das Modell setzt sie um und prüft nichts.
- „Siehe Chat“ als Kontext → Regel 0024 verletzt; die Fundstelle gehört ins Issue.
- Zwei `an:`-Labels gleichzeitig → niemand ist dran. Genau eines.
- Weiterarbeiten, obwohl A5 nicht stimmt, „weil es klar scheint“.
- Loslegen, weil das Label passt, ohne dass der Mensch das Issue freigegeben hat.
