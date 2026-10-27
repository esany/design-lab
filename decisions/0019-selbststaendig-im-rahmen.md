---
status: freigegeben
datum: 2026-10-27
entschieden_von: Mensch (im Chat)
---

# 0019 · Selbstständig im Rahmen — der Mensch gestaltet, klärt offene Punkte

**Anforderung (Mensch, wörtlich):** „Ich will hier kein Meat-Proxy sein. Ich will
gestalten und mit dir den aktuellen Entwicklungsstand durchgehen. Für dich und mich
müssen Schritte transparent und nachvollziehbar sein, damit wir sie beliebig
unkompliziert ändern oder rückgängig machen und so flexibel entwickeln können —
ohne Fehlerquellen und Qualitätsverlust. Unsicherheiten und offene Punkte klären
wir gemeinsam, diese machst du transparent — alles andere kannst du im Sinne
meiner Anforderungen, Prinzipien und Bedürfnisse abarbeiten.“

**Entscheidung:**
- Der Agent übernimmt (merged) selbst, wenn die Änderung im freigegebenen Rahmen
  liegt, alle Prüfungen grün sind und sie in `stand.md` mit Rückgängig-Hinweis
  steht.
- Zum Menschen gehen nur offene Punkte, Unsicherheiten, Gestaltungs- und
  Bedeutungsfragen, neue Regeln und schwer Umkehrbares — als Fragen in
  Alltagssprache.
- `stand.md` ist die gemeinsame Übersicht für das Durchgehen des Standes.
- „X rückgängig“ genügt; der Agent macht einen Revert als eigene Änderung.

**Löst ab:** 0002 (Merge ausschließlich durch den Menschen).

**Sicherungen, die bleiben:** kein direktes Schreiben auf `main` (technisch
gesperrt), automatische Prüfungen vor jeder Übernahme, eine Änderung pro Thema,
vollständige Historie in Git.
