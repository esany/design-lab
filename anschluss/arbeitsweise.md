---
thema: Arbeitsweise mit KI · Wissensformen
stand: Hauptfaden ist eine tragfähige Wissens- und Arbeitsstruktur für Claude und Astra; Vorschlag liegt im Chat vom 06.11., nichts davon umgesetzt. Die Änderungen aus #129 (0024 neu, Verzeichnis, zusammengeführter Befund) kamen ohne Freigabe auf main.
naechster_schritt: Der Eigentümer entscheidet drei Punkte (Wahrheit nur in Git; Pilot mit diesem Thema für Claude und Astra; #129 zurücknehmen). Nebenschauplätze bleiben geparkt.
offen: []
---

# Thema: Arbeitsweise mit KI · Wissensformen

**Zuletzt fortgeschrieben:** 06.11.2026 (Claude)

## In Worten

**Worum es geht:** Wie arbeitet der Gestalter mit KI so, dass echte Werke und Werkzeuge entstehen
statt Textberge, und wie bleibt das Wissen für jeden Chat erreichbar, ohne dass er alles lesen muss?

**Entschieden:**
- Leitfaden „Mit KI arbeiten“ auf der Website, monatlich gepflegt (0032, Probe bis 05.12.).
- Mehrere Leitfäden je Thema; das Labor ist für Gestaltung und Entwurf, fremdes Fachwissen bleibt
  in dessen Projekt.
- **Repo first neu (0024, Probe bis 05.12.):** Maßstab ist, dass ein frischer Chat richtig
  weitermacht. Drei Schichten: immer geladen (klein) · bei Bedarf (über `verzeichnis.md`) ·
  Archiv (nie Stand). Stand ist nur, was entschieden, ausgeführt oder erzeugt ist.

**Erkannt** (Befund `research/2026-11-wissensformen/befund.md`): Im Entwurf antwortet das Material,
in der KI-Arbeit nur Text; deshalb ersetzt der Gestalter sein Urteil durch Regeln. Gegenmittel:
Vorführung statt Bericht, Prüfungen, die laufen, kleine Startlast.

**Hauptfaden:** Welche Struktur braucht das Labor, damit Wissen tokensparend, ohne Widersprüche
und für Claude und Astra gleich gut nutzbar ist? Offene Entscheidungen: (a) Wahrheit nur in Git,
ohne Datenbank; (b) Pilot mit diesem Thema, gleiche Aufgabe für Claude und Astra, mit Neustart-Test;
(c) #129 zurücknehmen.

**Geparkt (Nebenschauplätze, erst nach dem Hauptfaden):**
- Modellvergleich: Neigt Astra zu Prosa-lastigem Code? (Vermutung des Eigentümers; im Pilot prüfbar)
- Freigabe-Prüfung, Rückfrage vor Merge, Feld „unsicher“: Entwurf #132, nicht übernommen
- Hooks: wirken nur in Claude Code und Codex-Kommandozeile, nicht in den Chats
- Projektnotiz paleo-type: eigenes Claude-Projekt; Datei im Labor entfernen
- Radar-Zeile Basic Memory: behalten oder streichen

**Offen beim Eigentümer (älter):**
1. Radar als Matrix (Empfehlung) oder Kreis?
2. Gemeinsame Issue-Prüfung zuerst im Labor bauen?
3. Befund zu paleo-type auf #408 notieren (dort gilt Pause)?
4. Dürfen Fremde im öffentlichen Labor Issues anlegen?
5. Das Projekt-Doc zu paleo-type ließ sich nicht ganz auf einen Zeiger kürzen: Ziel, Arbeitsweise
   und Technikhinweise stehen nirgends in paleo-type. Nach der Pause dorthin übertragen?

<details><summary>Für die Modelle: Fundstellen</summary>

- PR #125 (Leitfaden), #126 (Konzept und Befunde), Auftrag #127 und sein PR.
- `decisions/0024-kein-wissen-nur-im-chat.md` (Fassung 05.11., erste Fassung eingeklappt).
- `verzeichnis.md`, erzeugt in `tools/build.mjs`; veraltet nur als Warnung, damit Chats ohne Build
  nicht gesperrt werden.
- `research/2026-11-wissensformen/befund.md`; Vorfassungen dort mit `schicht: archiv`;
  `projekt-doc-paleo-type-abgleich.md` mit Abgleich und wörtlicher Vorfassung des Projekt-Docs.
- Neustart-Test #127 (Lücken): „vier Befunde“ im Issue, aber drei Dateien (vierter Teil = Abschnitt
  05.11. im Experiment Entwurfsprozess); dass das Projekt-Doc kein reiner Zeiger werden kann, war
  aus dem Issue nicht absehbar. Sonst reichten AGENTS.md, Merkzettel und Issue.
- Lesekosten: Start laut `tools/messwerte.mjs` 8 536 → 8 636 Zeichen (Verweis auf das Verzeichnis
  in AGENTS.md); Projekt-Doc, das jeder Chat im Projekt „Design“ mitlädt, 5 253 → 2 496;
  Befunde des Themas 25 812 → 8 099 (Vorfassungen Archiv).
- Website: `website.yml` kopierte `leitfaden/` nicht mit (eigener PR).
</details>
