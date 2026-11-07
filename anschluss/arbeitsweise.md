---
thema: Arbeitsweise mit KI · Wissensformen
stand: Drei Stränge (07.11.): A Prüffall neustart-daten – Auswertung als Entwurf, nicht gegengelesen; B Leitfaden – Nebenchat hat gesichert (#143, Konflikt, Bericht fehlt); C Fachpaket „KI als Werkzeug“ – Konzept, Entwurf freigegeben.
naechster_schritt: Frischer Chat „Tests und Prüfungen“ (Claude) prüft zuerst #143, dann den Rest von Strang A (Abschnitt „Stränge und Reihenfolge“); B entscheidet der Eigentümer nach der Prüfung von #143; C erst danach.
offen: []
---

# Thema: Arbeitsweise mit KI · Wissensformen

**Zuletzt fortgeschrieben:** 07.11.2026 (Claude)

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

## Stränge und Reihenfolge (07.11.)

Maßstab des Eigentümers (07.11.): „Ich will nicht, dass es fertig wird, ich will, dass es gut wird.“

| | Strang | Stand | Hängt ab von |
|---|---|---|---|
| **A** | Prüffall neustart-daten, Prüfung des Leitfaden-Chats | Auswertung auf Branch `lab/neustart-daten-auswertung`, nicht gegengelesen; #137, #138, #141 offen als Belege | – |
| **B** | Leitfaden, fachlich und technisch | #143 aus dem Nebenchat: Keime, offenes System, Fragen f18–f27; Konflikt mit `main`, Bericht fehlt | A (Prüfung von #143) |
| **C** | Fachpaket „KI als Werkzeug“ | Konzept `research/2026-11-wissensformen/fachpaket-ki-werkzeug.md` | B (Leitfaden als Ansicht? f16, f26) |

**Strang A im frischen Chat, in dieser Reihenfolge:**
1. #143 prüfen, zuerst, weil B und C davon abhängen und die Prüfung nur liest: Bestand im Repo
   statt nur im Chat? Branch, PR, nicht übernommen, Verlauf, Prüfungen? Leitfaden-Einträge
   unangetastet? Ursache genannt? Fachlich: Was tragen Keime, Fragen f18–f27 und a24–a25 für den
   Leitfaden und für C? Fehlender Bericht und Konflikt mit `main` sind selbst Befunde; den Konflikt
   löst der Leitfaden-Chat. Ergebnis dem Eigentümer vorlegen.
2. Automatische Prüfung: baut die erzeugten Übersichten selbst und läuft beim Setzen eines Labels
   neu (f14, Ja), damit parallele Chats nicht in erzeugten Dateien kollidieren. Schreibrechte für
   die Prüfung sind eine Frage an den Eigentümer.
3. Zwei Beobachtungen als Aussagen (abgeleitet) in `daten/arbeitsweise.json`: Modelle übergehen
   Pflichtschritte oder bauen Erzeugtes nach (2 von 3 Läufen); keines nennt eine rote Prüfung
   von sich aus (3 von 3).
4. Gegenlesen der Auswertung, der Aussagen und der Prüfung von #143 durch Astra (Auftrag
   formulieren, Eigentümer gibt ihn weiter). Claude bewertet in #137 sich selbst.
5. Erst danach: Auswertung übernehmen, #137, #138, #141 schließen.

**Hauptfaden:** Welche Struktur braucht das Labor, damit Wissen sparsam, ohne Widersprüche und für
Claude und Astra gleich gut nutzbar ist?

**Geparkt (Nebenschauplätze, erst nach dem Hauptfaden):**
- Modellvergleich: Neigt Astra zu Prosa-lastigem Code? (Vermutung des Eigentümers; im Pilot prüfbar)
- Freigabe-Prüfung, Rückfrage vor Merge, Feld „unsicher“: Entwurf #132, nicht übernommen
- Hooks: wirken nur in Claude Code und Codex-Kommandozeile, nicht in den Chats
- Projektnotiz paleo-type: eigenes Claude-Projekt; Datei im Labor entfernen
- Radar-Zeile Basic Memory: behalten oder streichen

**Offene Fragen und Aussagen:** nur noch in `daten/arbeitsweise.json`; lesbar in
`daten/arbeitsweise.md`. Hier nicht wiederholen.

<details><summary>Für die Modelle: Fundstellen</summary>

- Befunde: `research/2026-11-wissensformen/` (`konzept.md`, `anforderungen.md`,
  `issues-als-steuerung.md`) und Abschnitt 05.11. in `experiments/2026-10-entwurfsprozess.md`.
- Vorfall 05.11.: #127 ohne Freigabe umgesetzt und übernommen (#129, #130); am 06.11. zurückgenommen
  bis auf die Fehlerbehebungen aus #130 und `projekt-doc-paleo-type-abgleich.md` (geparkt).
- Stand der Technik vom 06.11. und Angaben zu Astra: Aussagen a17–a23 in `daten/arbeitsweise.json`.
</details>
