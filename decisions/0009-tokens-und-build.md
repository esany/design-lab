---
status: freigegeben als Startversion
datum: 2026-10-27
entschieden_von: Vorschlag Agent (Claude) · Entscheidung Mensch am 2026-10-27
---

# 0009 · DTCG-Tokens und eigener Build ohne Abhängigkeiten

**Entscheidung:** Die Gestaltungswerte stehen als DTCG-Tokens in system/tokens/. Ein kleines Node-Skript ohne Pakete erzeugt daraus CSS und den Studien-Index.

**Begründung:** Offenes Format, keine Paketpflege, läuft in jedem Agenten. Bei Bedarf später Style Dictionary oder Terrazzo.

**Alternativen:** Style Dictionary sofort; gar keine Tokens.

**Betrifft:** system/, tools/build.mjs, assets/tokens.css

**Deine Entscheidung:** Als Startversion übernommen.
