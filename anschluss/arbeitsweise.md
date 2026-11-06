---
thema: Arbeitsweise mit KI · Wissensformen
stand: #129 zurückgenommen (0024 wieder in erster Fassung, kein Verzeichnis, drei Notizen). Entschieden 06.11.: Wahrheit nur in Git, ohne Datenbank; Pilot an diesem Thema.
naechster_schritt: Claude legt dem Eigentümer einen Entwurf des Datenmodells für den Pilot vor (flexibel, nachhaltig, tokensparend, gut pflegbar); übernommen wird erst nach seinem Ja.
offen: []
---

# Thema: Arbeitsweise mit KI · Wissensformen

**Zuletzt fortgeschrieben:** 06.11.2026 (Claude)

## In Worten

**Worum es geht:** Wie arbeitet der Gestalter mit KI so, dass echte Werke und Werkzeuge entstehen
statt Textberge, und wie bleibt das Wissen für jeden Chat erreichbar, ohne dass er alles lesen muss?

**Entschieden:**
- Leitfaden „Mit KI arbeiten“ auf der Website, monatlich gepflegt (0032, Probe bis 05.12.); seit
  06.11. mit Einträgen zu Unsicherheit, Nichtwissen und Freigabe vor dem Handeln (#131).
- Mehrere Leitfäden je Thema; das Labor ist für Gestaltung und Entwurf, fremdes Fachwissen bleibt
  in dessen Projekt.
- **06.11.:** Die einzige Wahrheit liegt in Git (Dateien und Datensätze mit Schema). Eine Datenbank
  kommt höchstens später als abgeleiteter Suchindex.
- **06.11.:** Pilot an diesem Thema: Datenmodell im Kleinen, daraus erzeugte Übersicht; danach
  dieselbe Aufgabe getrennt für Claude und Astra und der Test, ob ein frischer Chat richtig
  weitermacht. Maßstab des Eigentümers: flexibel, nachhaltig, tokensparend, gut pflegbar.

**Hauptfaden:** Welche Struktur braucht das Labor, damit Wissen sparsam, ohne Widersprüche und für
Claude und Astra gleich gut nutzbar ist?

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

<details><summary>Für die Modelle: Fundstellen</summary>

- Befunde: `research/2026-11-wissensformen/` (`konzept.md`, `anforderungen.md`,
  `issues-als-steuerung.md`) und Abschnitt 05.11. in `experiments/2026-10-entwurfsprozess.md`.
- Vorfall 05.11.: #127 ohne Freigabe umgesetzt und übernommen (#129, #130); am 06.11. zurückgenommen
  bis auf die Fehlerbehebungen aus #130 und `projekt-doc-paleo-type-abgleich.md` (geparkt).
- Stand der Technik zur Struktur (Chat 06.11., nicht im Repo): Kontextdateien verbessern die
  Korrektheit nicht messbar, eher die Effizienz; Skills nach offenem Standard lesen Claude und
  ChatGPT/Codex; Gedächtnis in Dateien statt Datenbank bis einige tausend Einträge; Sperren, die
  für alle gelten, sind nur die Prüfungen auf GitHub.
- Astra (ChatGPT) kann Code ausführen und über den GitHub-Connector schreiben (Eigentümer, 06.11.).
</details>
