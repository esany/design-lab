---
status: freigegeben, Einrichtung durch den Eigentümer offen
datum: 2026-10-28
entschieden_von: Mensch („Können wir das öffentliche Repo schützen?“, Antwort auf #40)
dient: A15, A19
perspektive: system
---

# 0027 · `main` technisch schützen

**Anlass:** Audit von GPT-6 Astra (`research/2026-10-audit-astra/`). Die
GitHub-Schnittstelle meldet für `main` „Branch not protected“. Die Sperre, von
der `0002` spricht, gilt nur in Claudes Arbeitsumgebung, nicht für andere
Modelle.

**Entscheidung:** Eine GitHub-Regel für `main`:
- Änderungen nur über einen Pull Request, ohne Pflicht-Review (damit `0019`
  gültig bleibt);
- die Prüfungen „Tokens, Studien, Index“, „Interne Links“ und „Studien rendern“
  müssen grün sein;
- kein Force-Push, kein Löschen des Zweigs.

**Umsetzung:** Claude kann die Regel nicht anlegen, weil die GitHub-Verbindung
der Sitzung keine Repo-Einstellungen ändern darf (HTTP 403, *getestet*,
28.10.). Der Eigentümer richtet sie ein: Settings → Rules → Rulesets → New
branch ruleset.

**Was sie nicht schützt:** Lesen und Kopieren bleiben möglich, das Repo ist
öffentlich. Schreiben können ohnehin nur Personen mit Zugriff. Rechtlich gilt
`0001` (alle Rechte vorbehalten).

**Rückgängig:** Regel in den Settings deaktivieren oder löschen.
