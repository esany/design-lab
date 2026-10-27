---
title: Labor-Aufbau mit PR-Freigabe
date: 2026-10-27
status: läuft
timebox: 4 Wochen
---

# Labor-Aufbau mit PR-Freigabe

**Hypothese:** Wenn Agenten ausschließlich über Pull Requests arbeiten und der
Mensch nur Anforderungen stellt und per Merge freigibt, dann entsteht ein
lebendiges Labor ohne Git-Kenntnisse und ohne Kontrollverlust, weil jede
Änderung sichtbar, umkehrbar und begründet ist.

**Aufbau:**
- Repo `esany/design-lab` (öffentlich), Regeln in `AGENTS.md`, Methoden als Skills.
- Agenten: Claude Code (Cloud), Codex, Gemini — alle lesen `AGENTS.md`.
- Automatische Prüfung bei jedem PR (`.github/workflows/pruefen.yml`).
- Geplante Pflege: wöchentlich Radar, monatlich Gesundheits-Check.

**Erfolgskriterium (nach 4 Wochen):**
1. Mindestens 5 Anforderungen wurden als PR umgesetzt und gemergt.
2. Kein ungewollter Eingriff auf `main`.
3. Der Mensch musste nie einen Git-Befehl eingeben.
4. Mindestens ein PR wurde von einem anderen Agenten als Claude erstellt.

**Ergebnis:** —

**Urteil (Mensch):** —

**Folge:** —
