---
status: freigegeben
datum: 2026-10-27
entschieden_von: Mensch (im Chat: „ja ja“ zu den Fachpaketen, Start mit „Vermitteln“; Entwurf Issue #7)
dient: A04, A05
perspektive: fach, system
---

# 0021 · Fachpakete: Fachexpertise als Werkzeug

**Anlass:** „Es reicht mir nicht, wenn du nur die nackigen Werkzeuge einbindest
… Fachexpertise, Best Practices und State of the Art sollten genauso als
Tooling verfügbar sein“ (intent A04, A05).

**Entscheidung:**

- Ein Fachpaket ist ein Skill `.agents/skills/fachpaket-<name>/SKILL.md`.
  Agenten laden es, bevor sie in dem Feld planen, bauen oder kritisieren.
- Sechs Pakete sind geplant: **Vermitteln** (zuerst), Form, Ordnung, Erkennen,
  Raum und Zeit, Interaktion.
- Jedes Paket hat diese acht Pflichtabschnitte:
  1. **Kanon** — die Verweise des Eigentümers als Ausgangspunkte (kein gesetzter Kanon), danach recherchierte Grundlagen
  2. **Best Practice** — Ablauf, Leitlinien, Referenzprojekte
  3. **Stand der Technik** — Werkzeuge und Forschung, mit Datum
  4. **Qualitätskriterien** — Prüffragen
  5. **Mittelmaß-Muster** — woran man das Erwartbare erkennt
  6. **Verlernen** — falsche Annahmen über KI in diesem Feld
  7. **Rolle der KI** — Werkzeug · Material · Gegenüber · Infrastruktur: was sie
     leistet, wo sie unzuverlässig ist, was beim Menschen bleibt
  8. **Werkzeugkette** — welches Profi-Werkzeug wofür, mit Stand der Anbindung
- Jede Tatsachenaussage verweist mit `[k:…]` auf das Korpus. Der Build prüft
  diese Verweise. Eigene Einordnungen sind als *abgeleitet* markiert.
- Wo Positionen einander widersprechen, benennt das Paket den
  Widerspruch. Es entscheidet ihn nicht. Die Wahl trifft der Mensch (AGENTS.md,
  Arbeitsteilung).
- Ein Paket gilt erst dann als erprobt, wenn mit ihm ein Werk entstanden und
  gegen seine Kriterien geprüft worden ist. Für „Vermitteln“ ist das Issue #8.

**Rückgängig:** „Fachpakete rückgängig“ entfernt die Vorlage und das Paket.
