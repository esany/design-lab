---
thema: Arbeitsweise mit KI · Wissensformen
stand: Drei Stränge (08.11.): Prüfstand abgeschlossen – Testeinträge ausgewertet, zweimal gegengelesen, geschlossen; automatische Prüfung baut die Übersichten selbst (0033); Leitfaden – Leitfaden-Sicherung und Konzeptstand übernommen, Konkretisierung im eigenen Chat; KI-Fachpaket – Konzept, in Teilen überholt durch den Konzeptstand.
naechster_schritt: Der Leitfaden-Chat konkretisiert den Leitfaden auf Grundlage des Konzeptstands (Eigentümer und Leitfaden-Chat); der Prüfstand hat keinen offenen Schritt.
offen: []
---

# Thema: Arbeitsweise mit KI · Wissensformen

**Zuletzt fortgeschrieben:** 08.11.2026 (Claude, Abschluss Prüfstand)

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
| **A** | Prüfstand | **Abgeschlossen 08.11.** Ergebnis im Abschnitt darunter | – |
| **B** | Leitfaden | Leitfaden-Sicherung (Keime, offenes System, Fragen f18–f27) und Konzeptstand übernommen (08.11.); Konkretisierung im eigenen Chat | Prüfstand (Prüfung der Leitfaden-Sicherung) |
| **C** | KI-Fachpaket | Konzept `research/2026-11-wissensformen/fachpaket-ki-werkzeug.md`; „Rollen der Orte“ und „Schwelle“ überholt durch den [Konzeptstand 08.11.](../research/2026-11-wissensformen/konzeptstand-2026-11-08.md) | Leitfaden (erst danach; getrennte Erkenntnisorte, keine Ansicht) |

**Prüfstand, Ergebnis (abgeschlossen 08.11.):** Getestet wurde, ob ein frischer Chat im Labor
richtig weitermacht. Claude, Astra und Codex bekamen dieselbe Aufgabe; Claude wertete aus, Astra
las gegen, Codex prüfte Astras Selbstbewertung. Ablage: `evals/neustart-daten/ergebnisse/`; die
drei Testeinträge sind geschlossen und bleiben als Belege.
- Was wir über die Modelle wissen: Den Weg zum Erzeugen halten sie oft nicht ein, und eine rote
  Prüfung trägt keines nach ([a:arbeitsweise-a26], [a:arbeitsweise-a27]). Drei Läufe tragen
  keinen Modellvergleich.
- Was daraus folgt: Was Modelle wiederholt übergehen, übernimmt die Maschine. Die Prüfung baut
  die Übersichten jetzt selbst und läuft beim Setzen eines Labels neu (0033); beides hat sich am
  08.11. im Betrieb bewährt.
- Was wir über das Prüfen gelernt haben: Gegenlesen durch ein anderes Modell hat überzogene
  Formulierungen gefunden; die Selbstbewertung von Astra hielt der fremden Prüfung stand. Wer
  einen Text selbst geschrieben hat, prüft ihn nicht selbst.
- Rahmen der Gegenprüfung (Angabe des Eigentümers): Codex mit Luna, Stufe mittel, längerer
  Auftrag. Sie las rund neun Quellen, trug die Prüfergebnisse wieder nicht nach und verwechselte
  beim Vergleich die Wertungen der Läufe mit Astras Urteil (Kommentar in #156).
- Offen, nicht Teil des Prüfstands: Bei einem Konflikt startet GitHub keine Prüfung; Konflikte im
  Verlauf bleiben Handarbeit. Eine knappere Fassung des Codex-Auftrags liegt im Chat vom 08.11.
  als Vergleich für einen späteren Lauf.

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
