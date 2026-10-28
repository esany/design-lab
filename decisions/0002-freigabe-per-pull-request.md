---
status: abgelöst durch 0019
datum: 2026-10-27
entschieden_von: Vorschlag Agent (Claude) · Entscheidung Mensch am 2026-10-27
dient: A19, A21
---

# 0002 · Freigabe per Pull Request

**Entscheidung:** Agenten schreiben nie direkt auf main, sondern auf einen Branch und eröffnen einen Pull Request. Gültig wird etwas erst durch deinen Merge. Für Claude ist das zusätzlich technisch gesperrt.

**Begründung:** Entspricht PROMPT/AUSFÜHREN aus D3sign, aber durch Git durchgesetzt statt per Text. Jede Änderung ist sichtbar, kommentierbar und umkehrbar.

**Alternativen:** direktes Schreiben für kleine Änderungen (schneller, weniger Kontrolle).

**Betrifft:** AGENTS.md (Schreibregeln), .claude/settings.json

**Deine Entscheidung:** Passt — erst einmal auf Probe.
