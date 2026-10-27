---
status: Vorschlag
datum: 2026-10-27
entschieden_von: Agent (Claude) — Freigabe ausstehend
---

# 0010 · Automatische Prüfungen und Veröffentlichung

**Entscheidung:** Bei jedem Pull Request prüft GitHub: Tokens/Index aktuell, interne Links, fehlerfreies Rendern jeder Studie (Desktop/Mobil, mit Screenshots). Nach dem Merge wird die Website über GitHub Pages veröffentlicht (Pages muss einmal aktiviert werden).

**Begründung:** Deterministische Kontrolle statt Modell-Behauptung — die Maschine meldet, nicht der Agent.

**Alternativen:** weniger oder keine Prüfungen; keine Veröffentlichung.

**Betrifft:** .github/workflows/, tools/smoke.mjs

**Deine Entscheidung:** <!-- ok · ändern: … · streichen -->
