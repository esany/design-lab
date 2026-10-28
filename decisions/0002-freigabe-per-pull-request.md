---
status: abgelöst durch 0019
datum: 2026-10-27
entschieden_von: Vorschlag Agent (Claude) · Entscheidung Mensch am 2026-10-27
dient: A19, A21
perspektive: system
---

# 0002 · Freigabe per Pull Request

**Entscheidung:** Agenten schreiben nie direkt auf main, sondern auf einen Branch und eröffnen einen Pull Request. Gültig wird etwas erst durch deinen Merge. Für Claude ist das zusätzlich technisch gesperrt.

**Begründung:** Entspricht PROMPT/AUSFÜHREN aus D3sign, aber durch Git durchgesetzt statt per Text. Jede Änderung ist sichtbar, kommentierbar und umkehrbar.

**Alternativen:** direktes Schreiben für kleine Änderungen (schneller, weniger Kontrolle).

**Betrifft:** AGENTS.md (Schreibregeln), .claude/settings.json

**Deine Entscheidung:** Passt — erst einmal auf Probe.

**Historischer Hinweis (2026-10-29):** Die obige Entscheidung bleibt als ursprünglicher Wortlaut erhalten, ist aber durch [`0019`](0019-selbststaendig-im-rahmen.md) in der ausschließlichen Merge-Zuständigkeit abgelöst: Agenten dürfen innerhalb der dort genannten Bedingungen selbst übernehmen. Die Aussage über eine technische Sperre für Claude bezog sich auf dessen Arbeitsumgebung; ein allgemeiner GitHub-Branch-Schutz für `main` war damit nicht nachgewiesen. [`0027`](0027-main-schuetzen.md) regelt den vorgesehenen Schutz; dessen Einrichtung durch den Eigentümer ist noch offen (#40).
