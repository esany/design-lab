---
thema: Arbeitsweise mit KI · Wissensformen
stand: Drei Stränge (07.11.): Prüfstand – Leitfaden-Sicherung geprüft und vorgelegt, Auswertung der Testeinträge als Entwurf, nicht gegengelesen; Leitfaden – Leitfaden-Sicherung mit Bericht, ohne Konflikt, nicht übernommen; KI-Fachpaket – Konzept, Entwurf freigegeben.
naechster_schritt: Der Eigentümer entscheidet über die Leitfaden-Sicherung (#143); Claude macht im Prüfstand mit der automatischen Prüfung weiter (Abschnitt „Stränge und Reihenfolge“); das KI-Fachpaket ist dem Leitfaden übergeordnet (f16).
offen: []
---

# Thema: Arbeitsweise mit KI · Wissensformen

**Zuletzt fortgeschrieben:** 07.11.2026 (Claude, Prüfstand)

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

**Kurzformen** (Wunsch des Eigentümers, 07.11.: im Gespräch diese Namen statt Buchstaben und
Nummern):

| Kurzform | meint |
|---|---|
| Prüfstand | Strang A: Prüffall neustart-daten und Prüfung der Leitfaden-Sicherung |
| Leitfaden | Strang B: Leitfaden, fachlich und technisch |
| KI-Fachpaket | Strang C: Fachpaket „KI als Werkzeug“ |
| Testeintrag von Claude · Astra · Codex | #137 · #138 · #141 |
| Leitfaden-Sicherung | #143 |

| | Strang | Stand | Hängt ab von |
|---|---|---|---|
| **A** | Prüfstand | Leitfaden-Sicherung geprüft, vorgelegt (07.11.); Auswertung der Testeinträge auf Branch `lab/neustart-daten-auswertung`, nicht gegengelesen; Testeinträge offen als Belege | – |
| **B** | Leitfaden | Leitfaden-Sicherung: Keime, offenes System, Fragen f18–f27; Bericht als Kommentar, Konflikt gelöst, nicht übernommen | Prüfstand (Prüfung der Leitfaden-Sicherung); KI-Fachpaket (übergeordnet) |
| **C** | KI-Fachpaket | Konzept `research/2026-11-wissensformen/fachpaket-ki-werkzeug.md` | – (übergeordnet und konzeptionell früher als der Leitfaden, f16, 08.11.) |

**Prüfstand im frischen Chat, in dieser Reihenfolge:**
1. *Erledigt 07.11., dem Eigentümer vorgelegt:* Leitfaden-Sicherung prüfen (Bestand im Repo,
   Branch, PR, Verlauf, Prüfungen, Leitfaden-Einträge unangetastet, Ursache, fachlicher Ertrag
   für Leitfaden und KI-Fachpaket). Ergebnis bisher nur im Chat; ob es als Kommentar in die
   Leitfaden-Sicherung geht, ist eine Frage an den Eigentümer.
2. Automatische Prüfung: baut die erzeugten Übersichten selbst und läuft beim Setzen eines Labels
   neu (f14, Ja), damit parallele Chats nicht in erzeugten Dateien kollidieren. Schreibrechte für
   die Prüfung sind eine Frage an den Eigentümer.
3. Zwei Beobachtungen als Aussagen (abgeleitet) in `daten/arbeitsweise.json`: Modelle übergehen
   Pflichtschritte oder bauen Erzeugtes nach (2 von 3 Läufen); keines nennt eine rote Prüfung
   von sich aus (3 von 3). Nächste freie Nummer nach der Leitfaden-Sicherung: a26.
4. Gegenlesen der Auswertung der Testeinträge und der zwei Beobachtungen durch Astra: Auftrag am
   07.11. im Chat formuliert, der Eigentümer gibt ihn weiter. Claude bewertet im Testeintrag von
   Claude sich selbst.
5. Erst danach: Auswertung übernehmen, die drei Testeinträge schließen.

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
