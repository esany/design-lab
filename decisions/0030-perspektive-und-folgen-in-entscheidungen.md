---
status: gültig
datum: 2026-10-28
entschieden_von: Eigentümer, Chat 28.10. („Option A“)
dient: A26, A33, A34
perspektive: system
---

# 0030 · Perspektive, Folgen und Alternativen in Entscheidungen

**Anlass:** Entscheidungen stehen in einer Liste, ohne dass man sieht, ob sie das Labor bauen
(system), Gestaltungswissen betreffen (fach) oder das Gestalten damit (gebrauch). Keine hat einen
Abschnitt „Folgen“, Alternativen stehen nur teilweise. Befund:
`research/2026-10-modi-und-dokumentation/befund.md` (Quellen: Nygards ADR-Vorlage u. a.).

**Entscheidung:**
1. Jede Entscheidung nennt im Kopf `perspektive:` (`system`, `fach`, `gebrauch`; bei Grenzfall
   mehrere). Der Build prüft das.
2. Neue Entscheidungen folgen `decisions/VORLAGE.md` mit den Abschnitten **Alternativen** und
   **Folgen**. Ältere Einträge bekommen nur die Kopfzeile und werden sonst nicht umgeschrieben.
3. Der Index `decisions/README.md` zeigt die Perspektive je Eintrag.
4. Die Einteilung der älteren Einträge ist nach Titel *abgeleitet*; der Eigentümer kann jedes
   Etikett ändern. Ob drei Perspektiven die richtige Einteilung sind, prüft die Recherche #49.

**Alternativen:** (B) Verzeichnis `docs/` nach Perspektiven: erst bei belegtem Bedarf, sonst
Doppelung (A33); als eigener Auftrag offen. (C) Abwarten bis #49: ließe die Lücke weiter wachsen.

**Folgen:** Leichter: gezielt nur Systementscheidungen finden; Wirkung einer Regel nachlesen.
Schwerer: eine Kopfzeile mehr je Entscheidung; Grenzfälle brauchen ein Etikett.

**Rückgängig:** „Regel 0030 rückgängig“: Kopfzeilen und Prüfpunkt im Build entfernen,
`VORLAGE.md` löschen.
