---
status: Vorschlag
datum: 2026-10-27
entschieden_von: Agent (Claude) auf Anforderung — Freigabe ausstehend
---

# 0016 · Erklärbarkeit in Stufen für alle Studien

**Anforderung (Mensch):** „Alle Konfigurationen brauchen Kontext und
Erklärung, ich muss Regeln oder Funktionen nachvollziehen können — durch alle
Funktionen, nach Bedarf und differenziert, nach zeitgenössischen
Interaktionsmustern wie progressive Disclosure.“

**Entscheidung:** Jede Studie erklärt jede Einstellung in drei Stufen
(Kurzzeile immer sichtbar → `?` → aufklappbar „Wie umgesetzt“ / „Quelle und
Grenzen“) plus Live-Herleitung eines Ergebnisses. Texte liegen getrennt vom
Code (`texte.js`). Fehlt ein Text, meldet die Studie einen Fehler und die
automatische Prüfung schlägt an — die Regel wird also technisch erzwungen.

**Begründung:** Nachvollziehbarkeit als Eigenschaft des Systems, nicht als
guter Vorsatz. Getrennte Texte erlauben fachliche Bearbeitung ohne Code.

**Alternativen:** nur Tooltips; eine separate Erklärseite; keine Erzwingung.

**Betrifft:** `.agents/skills/studie` (Abschnitt Erklärbarkeit), Studie
„Reihe und Verschiebung“.

**Deine Entscheidung:** <!-- ok · ändern: … · streichen -->
