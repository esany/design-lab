# Stand — Verlauf

**2026-10-29 · #103:** Stand aus Merkzetteln erzeugt und automatisch geprüft. Rückgängig: „Stand-Gitter rückgängig“ (Revert des zugehörigen Pull Requests).

## Letzte Änderungen

| Datum | Was | Warum | Rückgängig |
|---|---|---|---|
| 2026-10-30 | **Umbauplan: Gefahren und Korrektur** (`research/2026-10-umbau/plan.md` § 6): Regeln in drei Klassen (fachlich bleibt), Zeichengrenzen als Warnung vorgeschlagen, neuer Strang G1–G4 für die Gestaltungsarbeit | Selbsteinschätzung paleo-type; Ihr Hinweis | Abschnitt entfernen |
| 2026-10-30 | **Gegenprüfung paleo-type-Audit (Claude):** zehn Originalbelege geprüft, P05 und P06 auf „teilweise“ berichtigt, Archivsignatur im Inventar durch Platzhalter ersetzt, `pruefung.md` ergänzt | Abnahme durch ein anderes Modell als das schreibende (#112) | „Gegenprüfung paleo rückgängig“ |
| 2026-10-30 | **Audit paleo-type (#112):** Schichteninventar, 21 Fehler-/Wirkungskarten und 10 Primärbelege für Claudes Gegenprüfung in `research/2026-10-audit-paleo-type/` | Lernen aus belegten Fehlern und ihren nur teilweise wirksamen Antworten; A07/A17/A33/A34. Keine Regel beschlossen. | „paleo-type-Audit rückgängig“ (PR zu #112 revertieren) |
| 2026-10-30 | **Sitzungsende:** Merkzettel System fortgeschrieben (U2, U3 erledigt; offen #109, #100, #112; Umbaupläne in Wissensarbeit #89 und paleo-type #353) | Regel Sitzungsende | Kopf zurücksetzen |
| 2026-10-30 | **Einordnung der paleo-type-Analyse** (`research/gespraeche/2026-10-30-einordnung-paleo-type.md`); Umbauplan berichtigt: Schwellen als Projektziele, Studie am Original geprüft, Messwert „Eingriffe des Eigentümers“ | Ihre geteilte Analyse; 0024 | „Einordnung paleo rückgängig“ |
| 2026-10-30 | **Durchsicht U3 (Claude):** Abschnitt „Immer, ohne Ausnahme“ in `AGENTS.md` (öffentliches Repo, nichts löschen, Bedeutung beim Menschen, Belegstatus), weil diese Grenzen keine Prüfung abfängt; Start ≈ 1.200 Tokens | Neustart-Test unsauber (altes `AGENTS.md` im Kontext), Grenzen gehören in den Kern | Abschnitt entfernen |
| 2026-10-29 | **U3 als Entwurf:** kurzer Startkern, ausgelagerte Arbeitsregeln, Archiv und Zuordnung, Längenprüfung und Neustart-Prüffälle | Ihr Auftrag zu U3, A12/A13/A17/A31/A33/A34 | „U3 rückgängig“ (zugehörigen PR zurücknehmen) |
| 2026-10-29 | **Stand als Datenquelle (#103, Astra):** `stand.md` wird aus den Merkzettel-Köpfen erzeugt; Längengrenzen und Abgleich mit GitHub als Prüfungen; Verlauf in dieser Datei. Durchsicht Claude: Nebenprüfung im Build vereinfacht, Kopf System berichtigt, `AGENTS.md` und Skill `issue` auf den Verlauf umgestellt | Ihr Auftrag #103; Umbauplan U2 | „Stand als Datenquelle rückgängig“ (PR zurücknehmen) |
| 2026-10-29 | **Umbauplan zum Organismus** (`research/2026-10-umbau/plan.md`): Stand der Technik, Zielwerte, U1–U9 mit Zuständigkeit, Kurs halten | Ihre Fragen im Chat; 0024 | Datei löschen: „Umbauplan rückgängig“ |
| 2026-10-29 | **Leitbild „System als Organismus“ als Intent** in `intent.md` | Ihr Auftrag „zentral als mein Intent“ | „Intent Organismus rückgängig“ |
| 2026-10-29 | **Leitbild „System als Organismus“** festgehalten, mit Folgen für die Architektur (`research/gespraeche/2026-10-29-system-als-organismus.md`) | Ihre Beschreibung im Chat; 0024 | Datei löschen: „Leitbild rückgängig“ |
| 2026-10-29 | **Berichtigt:** Astra kann implementieren; Aufträge 3 und 4 in `research/2026-10-audit-zusammenarbeit/auftraege.md` an Astra statt erst nach einer Probe bzw. an Codex | Ihr Hinweis im Chat | „Berichtigung Astra rückgängig“ |
| 2026-10-29 | **Befunde Fehlermuster der Modelle (#56)** (`research/2026-10-audit-zusammenarbeit/`): fünf Muster, kaum modellabhängig; Strukturbefund „mehr Regeln, Reviews und Stellen für den Stand statt Sperren“; Vorschläge mit Zuständigkeit in `auftraege.md`; Gegenlesen an Astra (#100) | Ihre Freigabe im Chat | „Befunde #56 rückgängig“ |
| 2026-10-29 | **Audit der Lesekosten** (`research/2026-10-lesekosten/befund.md`): Start ≈ 10.500 statt ≈ 3.500 Tokens; Stand an bis zu sechs Stellen, schon abweichend (#39); Möglichkeiten A–E. **Plan #62 begonnen:** #56 auf `an:claude`, Bestandsaufnahme im Issue | Ihr Auftrag im Chat; 0024 | „Lesekosten-Audit rückgängig“ |
| 2026-10-29 | **Probe Fundstück #98 (open-design):** gesichtet, Urteil „unklar, deutlicher Marketing-Anteil“; 0031 um „wer gibt wem wann welchen Auftrag“ ergänzt | Ihr Beispiel im Chat | Issue schließen, PR zurücknehmen |
| 2026-10-29 | **Vorschlag 0031 Fundstücke als Modus:** Eingang per Chat → Issue `[Fundstück]` → Sichtung (Astra) mit Prüfung „Schatz oder Marketing“ → Prüfung → Aufnahme an den passenden Ort (Claude); Skill `fundstueck` wird erweitert, nicht ersetzt; wartet auf Ihre Antwort | Ihr Wunsch im Chat | „Vorschlag 0031 rückgängig“ |
| 2026-10-29 | **Lesart „Werke ruhen“ berichtigt:** es ruht nur die Detailarbeit an bestehenden Experimenten, neue Experimente sind erwünscht; Befund vom selben Tag als Fehllesung markiert | Ihre Klarstellung im Chat | „Lesart Werke rückgängig“ |
| 2026-10-29 | **Befund „Bremst das System das Fach?“**: ja, derzeit durch die Reihenfolge „Werke ruhen“ (Widerspruch zu Prinzip 9); Optionen A–C (`research/gespraeche/2026-10-29-system-bremst-fach.md`) | Ihre Frage im Chat; 0024 | Datei löschen: „Befund System/Fach rückgängig“ |
| 2026-10-29 | **Rückmeldung von Astra** zur Übergabe festgehalten, mit Einordnung und Optionen A–C (`research/gespraeche/2026-10-29-astra-rueckmeldung.md`); stand.md abgeglichen | Ihre Nachricht im Chat; 0024 | Datei löschen: „Astra-Rückmeldung rückgängig“ |
| 2026-10-28 | **Sitzungsende:** Merkzettel fortgeschrieben, Prüfung auf Wissensmonopole (`research/gespraeche/2026-10-28-wissensmonopole.md`) | Ihr Auftrag im Chat; 0024 | Datei löschen: „Wissensmonopol-Prüfung rückgängig“ |
| 2026-10-28 | **Issues #42, #43, #44 geschlossen** (Kontrast, Prüffälle mit zweitem Modell, Prüfung der Studie; nicht geplant, nichts gelöscht). Zuvor irrtümlich geschlossene Werke-Issues wieder geöffnet, deren Merkzettel-Änderung zurückgenommen | Ihre Anweisung im Chat | Issues wieder öffnen: „Prüf-Issues wieder öffnen“ |
| 2026-10-28 | **Codex/Work nur in begründeten Fällen** (0025 Antwort 4, Skill `issue` B1 Punkt 7, Merkzettel System) | Ihre Vorgabe im Chat | „Regel Codex-Einsatz rückgängig“ (PR zurücknehmen) |
| 2026-10-28 | **Perspektive, Folgen, Alternativen in Entscheidungen (0030)** und **Auftragsformat im Skill `issue` (B1, #82)**; Frage `docs/` als #84 gesichert (wartet auf #49) | Ihre Antwort „Option A“, „skill umsetzen“ | „Regel 0030 rückgängig“ bzw. „Auftragsformat rückgängig“ (PR zurücknehmen) |
| 2026-10-28 | **Befund Modi, Entscheidungen, Dokumentation** (`research/2026-10-modi-und-dokumentation/befund.md`): drei Perspektiven, Lücke „Folgen“ in Entscheidungen, Optionen A–C; Auftrag #82 aus #59 ausgelagert | Ihre Frage im Chat; 0024 | Datei löschen, #82 schließen: „Befund Modi rückgängig“ |
| 2026-10-28 | **Triage:** Blocker, Zuständigkeit, welches Modell, Zuschnitt, Entwurf „Aufträge für kleinere Modelle“ (`research/gespraeche/2026-10-28-triage-modelle.md`) | Ihre Frage im Chat | „Triage rückgängig“ |
| 2026-10-28 | **Ein Merkzettel je Thema (0029):** `anschluss/` mit drei Themen (System, Möglichkeitsraum, Werke); hier steht nur noch die Themenliste; Start und Ende in `AGENTS.md` und Skill `issue` angepasst | Ihre Antwort auf #67 | „Regel 0029 rückgängig“ |
| 2026-10-28 | **Arbeitsteilung (0025) gültig:** Sparregeln gelten für Routinen, nicht zu Lasten der Qualität, Ihre Aufträge haben Vorrang; die Modell-Tabelle ist nur eine Vermutung, Aufträge berücksichtigen Funktionen und Limits des Modells; kein Etikett „Übergabe“. D3sign: Regeln und Prüfberichte dürfen in die Untersuchung, ohne Kundeninhalte | Ihre Antworten im Chat | „Regel 0025 rückgängig“ |
| 2026-10-28 | **Ihre Entscheidungen eingetragen:** Spielregeln für Aufträge übernommen (PR #38); Untersuchung startet, nur über die Modelle, ohne Termin bis November (#62, #56 zugeschnitten); Merkzettel je Thema (#67); Anschluss in Worten umgeschrieben (#71) | Ihre Antworten im Chat | „Entscheidungen 28.10. rückgängig“ |
| 2026-10-28 | **Lagebild:** offene Aufgaben, Reihenfolge, Blocker, Delegation, offene Fragen (`research/gespraeche/2026-10-28-lagebild.md`) | Ihre Frage im Chat; kein Wissen nur im Chat (0024) | Datei löschen: „Lagebild rückgängig“ |
| 2026-10-28 | **Plan #62** mit Aufträgen #56–#61 (Audit der Zusammenarbeit, Modellprofile, Regeln prüfen, Kommunikation und Delegation, Tokenökonomie, Assistenz im Entwurf), alle `entwurf`; **Bug #55** (#31 falsch gelesen) | Ihr Auftrag, Chat 28.10. | Issues schließen: „Plan #62 rückgängig“ |
| 2026-10-28 | **Start nur auf Auftrag:** Anschluss ist Vorschlag, kein Auftrag; ohne Auftrag nennt das Modell Stand und Vorschlag und wartet | Modelle begannen sonst eigenmächtig | „Start nur auf Auftrag rückgängig“ |
| 2026-10-28 | **Flyer als erstes Werk abgelegt** im privaten Repo `esany/werke`, Ordner `werke/2026-flyer-rgut-a6/` (46 Dateien, ohne Schriften) | Sicherung der Werkdateien (#25) | im Repo werke per Revert-PR |
| 2026-10-28 | **Issue-Arbeit (#31):** Skill `issue` (bin ich dran? · schreiben · bearbeiten · übergeben), Vorlage „Übergabe“, Prüffall `evals/uebergabe` (nicht getestet, kein Blocker); Skill ergänzt um Abhängigkeiten, Umsetzungsreife, Lebenszyklus, Labels, Fragen und Bugs in Alltagssprache (#50, #51); **Vorschlag 0025 unverändert** (die Kürzung war nicht abgesprochen, #51); Recherche zu Modellen und Beispiel-Repos in `research/2026-10-issue-arbeit/`; veraltete Zahlen in dieser Datei entfernt (stimmten nicht: 21 statt 25 Entscheidungen, 11 statt 12 Skills) | Ihr Auftrag #31 | „Issue-Arbeit rückgängig“ |
| 2026-10-28 | **Werk-Repo `esany/werke` angelegt** (privat, Entscheidung 0026, Weg B): Grundgerüst hochgeladen (README, Agenten-Hinweise, Vorlage `werk.md`, Schriften-Sperre, Prüfung); Inhalte bitgenau geprüft, Prüfung auf GitHub grün | Ihr „ja“ im Chat | „Werk-Repo rückgängig“ (Repo löschen kann nur der Eigentümer) |
| 2026-10-28 | **Prüfung `esany/Portfolio` als Sicherung** (#25): privat (belegt), aber ein Wissensraum für Ihr berufliches Werk, keine Dateiablage; als Ablage für Werkdateien heute nicht geeignet, als Ort für Werk-Beschreibung geeignet; drei Wege, Empfehlung: eigenes Archiv plus Verweis; Erweiterungen und Grenzen benannt (`research/2026-10-sicherung/portfolio-pruefung.md`) | Ihr Auftrag im Chat | „Portfolio-Prüfung rückgängig“ |
| 2026-10-28 | **Bug #39:** Sicherungs-Repo falsch übernommen (Adresse kam doppelt an, Modell fragte nicht nach); betroffene Aussagen zurückgesetzt, Repo-Name offen | Ihr Hinweis im Chat | „Bug-Korrektur rückgängig“ |
| 2026-10-28 | **Arbeiten nur mit Auftrag:** Modelle melden beim Start nur und warten; Claude ist Orchestrator und verteilt über Labels `an:…` | Modelle legten ohne Auftrag los | „Auftragsregel rückgängig“ |
| 2026-10-28 | **Start jeder Sitzung** in AGENTS.md: ein Startsatz für alle Modelle, Repo als einziger Ort, ohne Zugang aufhören statt suchen; Prüffall `evals/start` | ein neuer Chat fand stand.md nicht | „Start-Regel rückgängig“ |
| 2026-10-28 | **Vorschlag 0025 Arbeitsteilung zwischen Modellen** (wartet auf Antwort) | Tokenökonomie, mehrere Modelle | „Regel 0025 rückgängig“ |
| 2026-10-28 | **Regel 0024 „Kein Wissen nur im Chat“** (auf Probe); Gesprächsprotokoll mit allen Erkenntnissen, die nur im Chat standen (`research/gespraeche/2026-10-28-print-typografie-raster.md`); Radar um Print-Werkzeuge ergänzt | Ihr Hinweis auf Wissensmonopole im Chat | „Regel 0024 rückgängig“ |
| 2026-10-28 | **Sitzung „Audit von Astra“ abgeschlossen:** eigener Block im Anschluss fortgeschrieben, ohne andere Blöcke zu ändern | Abschlussregel | „Abschluss rückgängig“ |
| 2026-10-28 | **Prüffall `parallel`:** Start und Abschluss bei parallelen Chats; erste Beobachtung von heute als „nicht bestanden“ eingetragen; Aufgabe des Orchestrators | Ihr Auftrag „nimm das als Prüffall auf“ (#67) | „Prüffall parallel rückgängig“ |
| 2026-10-28 | **Anschluss** um die Sitzung „Audit von Astra“ ergänzt: Recherche Möglichkeitsraum, Entscheidungshilfe, Lehren, Bug zur Ursache | Kein Wissen nur im Chat (0024) | „Anschluss-Ergänzung rückgängig“ |
| 2026-10-28 | **Verknüpfung (A33):** Ihre Anforderungen aus dem Chat als A31–A34 in `intent.md` (Abhängigkeiten, Umsetzungsreife, nichts verrottet, Tokenökonomie); jede Entscheidung und jeder Skill nennt, welcher Anforderung sie dient; der Build erzeugt `verknuepfung.md` und meldet Lücken; Pflege prüft monatlich; Reihenfolge in dieser Datei | Ihre Sorge, dass Regeln in einer Ecke verrotten | „Verknüpfung rückgängig“ |
| 2026-10-28 | **Audit von GPT-6 Astra** nachgeprüft und eingeordnet (`research/2026-10-audit-astra/`): sechs Befunde bestätigt, einer ergänzt (Kontrast `muted`); verteilt als #40, #45 (an Sie) und #41–#44 (an Astra) | Ihr Auftrag, die Arbeit zu organisieren | „Audit-Einordnung rückgängig“ (Issues bleiben, werden geschlossen) |
| 2026-10-28 | **Ihre Antwort zum Audit:** Regel 0028 „Hinweise statt Vorgaben“ (nur Ihr Wortlaut); #45 nicht übernommen; #41 freigegeben; 0027 `main` schützen (freigegeben, **Einrichtung durch Sie offen**); ungenutzte Labels gelöscht | Ihre Rückmeldung zum Audit | „Regel 0028 rückgängig“ · Regel in GitHub deaktivieren |
| 2026-10-28 | **Experiment Entwurfsprozess** angelegt; offene Themen als Issues #23–#27; Abschnitt „Anschluss“ für neue Sitzungen; Flyer-Arbeitsstand als ZIP an Sie | Ihr Auftrag „alles sichern“ | „Entwurfsprozess rückgängig“ |
| 2026-10-28 | Konzept „Raster als Programm“: Ihr Flyer-Raster ausgelesen (Offset, Spalten, Grundlinien, Brüche), Ihre Anforderungen A29/A30, Pilot vorgeschlagen | Gespräch über Raster und Wirksysteme | „Raster-Konzept rückgängig“ |
| 2026-10-28 | **Duden als Basis** (0023): Abkürzungen wie „e. V.“ automatisch mit schmalem Leerraum; Flyer angepasst. Kürzere Spalte bleibt, keine Kürzung für 9,5 pt (Empfehlung, kein Widerspruch) | Ihre Entscheidung | „Duden-Regel rückgängig“ |
| 2026-10-28 | Variante „lesbar im Objekt“ von Ihnen freigegeben und jetzt Hauptfassung des Flyers; Experiment auf „behalten“ | Ihre Freigabe | „Freigabe Flyer rückgängig“ |
| 2026-10-28 | Variante „lesbar im Objekt“ am Flyer: Fließtext 100 % Schwarz, Bildunterschriften 8 pt, ruhigeres Feld hinter dem Aufruf; erste Anwendung des Manifests | Ihre Frage „was anpassen, welche Folgen“ | „Variante lesbar rückgängig“ |
| 2026-10-28 | **Manifest „Gestaltung dient“:** Wahrnehmung und Kognition als oberster Maßstab; Prinzip 0, Prüfschritt in AGENTS.md und Kritik, Sehwinkel-Rechnung im Fachpaket „Form“, Anforderung A28 | Ihr Auftrag | „Manifest rückgängig“ |
| 2026-10-28 | **Fachpaket „Form“ (Typografie):** Kanon, Satzregeln, messbare Kriterien, Werkzeugvergleich InDesign · CSS · Scribus. Dazu Feinsatz am Flyer: so gut wie das Original gesetzt (weniger Löcher, gleich viele Trennungen) | Ihr Auftrag Typografie | „Fachpaket Form rückgängig“ |
| 2026-10-28 | Print-Experiment Runde 2 mit Ihren Originalschriften: passt ohne Einpassen; 31 % der Fließtextzeilen brechen wie im Original um; Schriften landen als Type 3 im PDF. Schriften nicht im Repo | Ihre Schriften | „Runde 2 rückgängig“ |
| 2026-10-27 | Labor aufgebaut: Regeln, Prinzipien, Methoden, Website, Prüfungen | Startversion | „Labor-Aufbau rückgängig“ |
| 2026-10-27 | Studie „Reihe und Verschiebung“ mit Ittens Farbkontrasten und gestuften Erklärungen | Anforderung | „Itten-Erweiterung rückgängig“ |
| 2026-10-27 | Entscheidungen eingetragen; Repo öffentlich, alle Rechte vorbehalten | Antworten im Chat | — (Entscheidung) |
| 2026-10-27 | Arbeitsregel 0019: selbstständig im Rahmen, `stand.md` als Übersicht | Anforderung „kein Meat-Proxy“ | „Regel 0019 rückgängig“ |
| 2026-10-27 | D3sign auf privat gestellt | Kundendaten nicht öffentlich | in GitHub wieder umstellbar |
| 2026-10-27 | OpenClaw geprüft und verworfen, kein Radar-Eintrag | unsicher, nicht im Netzwerk | — |
| 2026-10-27 | Startversion übernommen (Pull Request #1) | Ihre Antworten im Chat | „Labor-Aufbau rückgängig“ |
| 2026-10-27 | Website veröffentlicht automatisch nach jeder Übernahme | Wunsch „Website automatisch“ | in GitHub-Einstellungen umstellbar |
| 2026-10-27 | Geplante Aufgaben: Radar-Scan montags 7:38, Pflege am 1. um 7:42 (Berlin) | Wunsch Pflege/Radar | „Radar-Scan/Pflege stoppen“ |
| 2026-10-27 | Erledigte Arbeitszweige werden automatisch gelöscht | Ordnung im Repo | in GitHub-Einstellungen umstellbar |
| 2026-10-27 | Studie „Reihe und Verschiebung“ abgeschlossen, bleibt als Referenz | Ihre Entscheidung: nicht weiterarbeiten | „Studie wieder öffnen“ |
| 2026-10-27 | D3sign-Prinzipien übernommen: Werk vor System, Vertrauen statt Scheinreife, Stoppen statt simulieren, Widerspruchspflicht, Priorisierung, Skill `fundstueck`, Modul „System“ | Ihr „ja“ (0020) | „D3sign-Übernahme rückgängig“ |
| 2026-10-27 | Feldforschung KI × Gestaltung (KINDLAB, KITeGG, UdK, FHP, Burg, KHM …): Befunde, Einordnung, 4 Entwürfe als Issues #6–#9, Radar ergänzt | Ihr Rechercheauftrag | „Feldforschung rückgängig“ |
| 2026-10-27 | **Experiment Print ohne InDesign:** Ihr Flyer mit HTML/CSS und Paged.js nachgebaut, Druck-PDF in CMYK. Wiederverwendbare Werkzeuge (Textfluss, Grundlinienraster, Silbentrennung, Druckvorstufe) in `experiments/2026-10-print-pagedjs/`. Der Flyer selbst bleibt außerhalb des Repos | Ihre Frage nach freien Print-Werkzeugen | „Print-Experiment rückgängig“ |
| 2026-10-27 | Ihre Verweise als **Ausgangspunkte** gekennzeichnet, nicht als Kanon; Ansätze daraus als offen markiert | Ihre Klärung im Chat | „Verweise-Klarstellung rückgängig“ |
| 2026-10-27 | **Fachpaket „Vermitteln“** (Issue #7): Ihre Verweise als Ausgangspunkte, Spannungen offen benannt, Ablauf in 8 Schritten, Stand der Technik vom 27.10., Prüffragen, Mittelmaß-Muster, „Verlernen“, Rolle der KI, Werkzeugkette. Vorlage für alle Fachpakete (0021) | Ihr „ja“, A04/A05 | „Fachpakete rückgängig“ |
| 2026-10-27 | **Korpus als Daten** (Issue #6): 49 Quellen — 22 aus Ihren Referenzen (UCLAB, Dörk, Müller, Bremer, Lupi, Stefaner, Munzner, Manovich, Gerstner, Pinterest), 27 recherchiert. Der Build prüft jede Quelle und jeden Verweis `[k:…]`; Übersicht in `corpus/uebersicht.md` | Fachpakete brauchen belegte Quellen (A04, A07) | „Korpus rückgängig“ |
| 2026-10-27 | Maßstab festgehalten: `intent.md` (27 Anforderungen, ehrlich bewertet) und `herkunft-d3sign.md` (33 Prinzipien abgeglichen) | Ihr Audit-Auftrag | „Maßstab rückgängig“ |

## Bisherige Übersicht (Archiv, Stand vor #103)

# Stand

Gemeinsame Übersicht zum Durchgehen. Jede Änderung ist einzeln rückgängig zu
machen — es genügt zu sagen: **„… rückgängig“**.

**Zuletzt aktualisiert:** 2026-10-29

## Wo das Labor steht

- **Website:** https://esany.github.io/design-lab/ — aktualisiert sich nach
  jeder Übernahme selbst.
- **Arbeitsweise:** Agenten arbeiten im freigegebenen Rahmen selbstständig;
  offene Punkte und Gestaltungsfragen klären wir gemeinsam (`decisions/0019`).
- **Inhalt:** Manifest · Prinzipien · Skills (`.agents/skills/`, darunter Fachpakete) · Korpus ·
  Modul „System“ · Studien · Feldforschung · Radar · Entscheidungen (`decisions/`). Zahlen stehen
  hier nicht mehr: sie veralten; die Ordner sind die Wahrheit.
- **Status:** Experiment (`experiments/2026-10-labor-aufbau.md`); ein fester Termin Ende November
  gilt nicht als Zwang, erst werden die offenen Aufgaben des Systems abgearbeitet.


## Offene Punkte — für uns gemeinsam

1. **Astra starten:** „mach #49“ (Recherche Möglichkeitsraum, jetzt mit drei Perspektiven) und
   „mach #41“ (Freigabehinweise). Wie die Übergabe an Astra am kürzesten geht, ist offen
   (Kurzstartformel, Rückfrage an Sie).
2. **Hauptzweig-Schutz (#40):** zwei Minuten Klicks, später.
3. **Fehlerberichte lesen:** #77 („nachziehen“ und „Sammelbegriff“ als Fehllesung). #39 ist erledigt.
4. **Untersuchung der Modellfehler (#56):** Befunde liegen vor. Vier Fragen in `research/2026-10-audit-zusammenarbeit/auftraege.md` (Hauptzweig schützen, Regelpause, Reihenfolge, „eine Uhr“). Astra liest gegen: „mach #100“.
5. **Ihre Pinterest-Sammlung** lässt sich nicht automatisch lesen (Pinterest sperrt das). Nennen Sie
   einzelne Boards je Feld oder beschreiben Sie in ein paar Worten, was sie zusammenhält.
6. **Lesekosten (A–E):** Soll `stand.md` und der Merkzettel umgebaut werden (A, B)? Siehe `research/2026-10-lesekosten/befund.md`.

(Die Gegenprüfung durch ein zweites Modell ist zurückgestellt; #43 geschlossen.)

## Reihenfolge — Vorschlag des Orchestrators, Sie ordnen um

Grundlagen vor Details (A31). Die Aufträge der Untersuchung und ihre Abhängigkeiten stehen im Plan #62.
Freigabe allein heißt nicht „umsetzungsreif“ (A32, Skill `issue`, E2).

| # | Was | Wartet auf | Davon hängt ab |
|---|---|---|---|
| 1 | **Recherche Entwicklung und Gebrauch, Möglichkeitsraum** (#49, Astra) | Ihr „mach“ | #61, #84 |
| 2 | **Freigabehinweise angleichen** (#41, Astra) | Ihr „mach“ | — |
| 3 | **Hauptzweig-Schutz** (#40) | Ihre Klicks, später | — |
| 4 | **Untersuchung der Modellfehler** (#56, nur Wissensarbeit und Fehlerberichte) | Ihr „mach“, zurückgestellt | #57, #59, #58, #60, #61 |
| 5 | **Docs-Verzeichnis ja/nein** (#84) | #49 | — |
| 6 | **Neue Experimente** (Kandidaten #24, #23, #8, #9, #27, #26) | Ihre Wahl, womit es losgeht | — |

**Erledigt am 28.10.:** Skill `issue` (#38), Verknüpfung (#54), Audit-Antwort (0027, 0028), Sicherung der
Werke (0026), Arbeitsteilung (0025), Merkzettel (0029), Perspektive in Entscheidungen (0030),
Auftragsformat (#82). **Geschlossen, nicht geplant:** #42 (Kontrast), #43 (Prüffälle mit zweitem Modell),
#44 (Studie prüfen).

## In Arbeit

| Thema | Stand | Issue |
|---|---|---|
| **Das System in Ordnung bringen** | Aufräumen erledigt; Befunde #56 liegen vor; Gegenlesen #100 (Astra), vier Fragen an Sie | #62 |
| **Möglichkeitsraum / drei Perspektiven** | Astra zugeordnet, wartet auf „mach“ | #49 |
| **Werke** | neue Experimente erwünscht; Detailarbeit an bestehenden (z. B. Antwortkarte, Kontrast) ruht | — |

## Themen — hier beginnt jede neue Sitzung

Jedes aktive Thema hat einen Merkzettel in `anschluss/` (Regel `decisions/0029`). Ein neuer Chat
liest nur den Merkzettel seines Themas. Ist kein Thema genannt, nennt er diese Liste und fragt,
welches gemeint ist.

| Thema | Stand in einem Satz | Merkzettel |
|---|---|---|
| **Das System in Ordnung bringen** | Befunde #56 liegen vor: weniger Text, eine Stelle für den Stand, Sperren statt Sätze; vier Fragen an Sie; Gegenlesen #100 | [`anschluss/system.md`](anschluss/system.md) |
| **Entwicklung und Gebrauch · Möglichkeitsraum** | Recherche Astra zugeordnet, jetzt mit drei Perspektiven; beginnt auf Ihr „mach“ | [`anschluss/moeglichkeitsraum.md`](anschluss/moeglichkeitsraum.md) |
| **Werke und Gestaltung** | neue Experimente erwünscht; nur Detailarbeit an bestehenden ruht; Flyer fertig | [`anschluss/werke.md`](anschluss/werke.md) |

**Wo was liegt:** Befunde in `experiments/` und `research/`, Fachwissen in
`.agents/skills/fachpaket-*`, Quellen in `corpus/`, Entscheidungen in `decisions/`,
Gesprächsprotokolle in `research/gespraeche/`. Werkdateien und Lizenzschriften sind nicht im
Labor (privat in `esany/werke` bzw. beim Eigentümer).

## Nächste Schritte (laufen ohne Sie)

- **Radar-Scan:** jeden Montag 7:38 Uhr (erster Lauf 2. November 2026).
- **Pflege:** am 1. jeden Monats 7:42 Uhr (erster Lauf 1. November 2026).
  Ende November wertet die Pflege das Experiment „Labor-Aufbau“ aus.
- Beide melden sich per Push-Nachricht; Entscheidungen landen hier unter
  „Offene Punkte“.
- Nach jeder Arbeitseinheit: diese Seite aktualisieren.


## Bisheriger System-Merkzettel (Archiv, Stand vor #103)

# Thema: Das System in Ordnung bringen

**Zuletzt fortgeschrieben:** 29.10.2026 (Claude)

## In Worten

**Wo wir stehen:** Bevor wieder gestaltet wird, bringen wir die offenen Aufgaben des Systems in
Ordnung. So hat der Eigentümer es entschieden. Es gibt keinen Termin bis Ende November, die
Schritte laufen nacheinander.

**Heute entschieden:**
- Die Spielregeln für Aufträge gelten: Ist ein Modell dran? Ist alles da? Woran sieht man, dass
  es fertig ist? Fragen kommen in Alltagssprache.
- Die Untersuchung der Fehler startet, aber **nur über die Modelle**, nicht über die
  Zusammenarbeit oder die Arbeitsweise des Eigentümers. D3sign war ursprünglich dabei (nur
  Regeln und Prüfberichte); später am Abend auf **ein** Repo eingegrenzt, siehe unten.
- Arbeitsteilung: Gespart wird bei Routinen, nie zu Lasten der Qualität. Aufträge an andere
  Modelle berücksichtigen deren Funktionen und Limits. Ein Auftrag des Eigentümers außerhalb der
  Reihe hat Vorrang.
- Jedes Thema bekommt einen eigenen Merkzettel (diese Datei ist einer).
- **Codex und Work nur in begründeten Fällen**, wenn der normale Chat (Astra) nicht mehr reicht;
  der Auftrag nennt den Grund.

**Antworten des Eigentümers (28.10., spätabends):**
- Aufräumen: ja, **mit Sonnet** (der Eigentümer stellt um).
- Die drei fertigen Vorlagen übernehmen: Audit-Antwort, dann Sicherung der Werke, dann
  Verknüpfung. Jede einzeln.
- **Astra (ChatGPT-Chat) kann ins Labor schreiben.** Branches löschen kann es nicht, und auf
  die lokalen Ordner des Eigentümers kommt es nicht.
- Untersuchung der Modellfehler: **zurückgestellt**. Danach wird nur **ein** Repo gelesen:
  Wissensarbeit.
- Welche Aufträge an Astra oder Codex gehen, entscheidet der Orchestrator (siehe unten).

**Aufgeräumt am 28.10. (Sonnet):**
- Die drei Vorlagen sind übernommen, jede einzeln: Audit-Antwort (0028, 0027), Sicherung der
  Werke (0026), Verknüpfung von Anforderungen mit Regeln. Dabei Konflikte aufgelöst und die
  Verknüpfung neu erzeugt.
- Der Kreis bei den Prüffällen war schon aufgelöst: Die Issue-Arbeit ist geschlossen.
- Drei Fehlerberichte sind geschlossen, ihr Inhalt als Fallmaterial in die Aufträge übertragen.
  Der Plan liegt jetzt bei Claude, weil seine Fragen beantwortet sind.
- „Freigabehinweise angleichen“ wartet nicht mehr auf deine Klicks, nur noch auf dein „mach“.
- Für die vier Aufträge an Astra und Codex gibt es einen Zuschnitt (Kommentare in den Aufträgen).
  Zwei sind für kleinere Modelle zu groß und sollen geteilt werden. Verteilt ist nichts.

**Entschieden am 28.10. (spätabends):**
- Die **Zuordnung der Aufträge** entscheidet der Orchestrator (Claude), nicht der Eigentümer.
- **Zurückgestellt und danach geschlossen** (nicht geplant, nichts gelöscht) sind Farbkontrast, Prüffälle mit zweitem Modell und die Prüfung der Studie.
  Damit gehen vorerst keine Aufträge an Codex.
- **Astra** bekommt die Recherche zum Möglichkeitsraum (Thema „Möglichkeitsraum“) und, wenn der
  Eigentümer es sagt, die Freigabehinweise. Begonnen wird erst auf sein „mach“.
- Die **Untersuchung der Modellfehler** liest nur Wissensarbeit (und die Fehlerberichte dieses
  Labors). Sie bleibt zurückgestellt.
- Der **Hauptzweig-Schutz** kommt später. Bis dahin prüft Claude vor jedem Commit den Zweig.

**Am Ende des Tages erledigt:**
- Entscheidungen haben jetzt eine Perspektive (System, Fach, Gebrauch), Folgen und Alternativen
  (0030). Die Frage nach einem `docs/`-Verzeichnis ist als eigener Auftrag gesichert und wartet auf
  die Recherche zum Möglichkeitsraum.
- Das Auftragsformat für kleinere Modelle steht im Skill. Codex und Work bekommen nur in
  begründeten Fällen einen Auftrag, wenn der normale Chat nicht reicht.
- Kontrast, Prüffälle und die Prüfung der Studie sind geschlossen (nicht geplant, nichts gelöscht).
- Der Auftrag „Aufträge besser schreiben“ wartet auf die Untersuchung, die zurückgestellt bleibt.
- Prüfung auf Wissensmonopole: `research/gespraeche/2026-10-28-wissensmonopole.md`.

**29.10.:** Die Untersuchung der Modellfehler ist fertig (`research/2026-10-audit-zusammenarbeit/befunde.md`). Die Fehler hängen kaum am Modell. Fünf Muster: Lesart still aufgelöst, Stand aus dem Chat, eigene Regeln nicht befolgt, zu starke Aussagen, zu viel Befugnis. Wissensarbeit hat auf Fehler mit immer mehr Regeln und Reviews geantwortet, und das Labor ist auf demselben Weg. Vorschlag: weniger Text, eine Stelle für den Stand, Sperren statt Sätze (`auftraege.md`, mit Zuständigkeit). Astra liest gegen (#100). Dazu das Audit der Lesekosten (`research/2026-10-lesekosten/befund.md`).

**Was du entscheidest (vier Fragen in `auftraege.md`):** Hauptzweig jetzt schützen? Regelpause bis zur Regelprüfung? Regeln prüfen vor Modellprofilen? „Eine Uhr“ für den Stand und die Prüfungen im Build an Astra (Astra kann implementieren, Eigentümer 29.10.)?

**Danach, in dieser Reihenfolge:** Modelle kennen und Aufträge besser schreiben (beides
parallel) → Regeln prüfen → Sparmaßnahmen mit Messung → Hilfe beim Entwerfen.

**Offene Fragen an den Eigentümer:**
- Soll Astra die Recherche zum Möglichkeitsraum übernehmen? Sag dafür „mach #49“ in einem Chat
  mit Astra. Genauso bei den Freigabehinweisen („mach #41“).
- Sobald du es willst: Hauptzweig schützen (zwei Minuten Klicks) und die Untersuchung starten.

<details><summary>Für die Modelle: Nummern und Lehren</summary>

- **Führendes Issue:** #62 (`an:claude`, Plan; Fragen beantwortet: 1 ja, 2 B, 3 A, danach
  auf ein Repo eingegrenzt). Kette wartet auf #56: #57 und #59 (beide von #56), #58 (#56, #57),
  #60 (#57, #59), #61 (#56, #49).
- #56 (`entwurf`, zurückgestellt): Gegenstand nur `esany/Wissensarbeit` und die Fehlerberichte
  dieses Labors. D3sign, Portfolio, pflege-arnshaugk-historie vorerst draußen.
- #49 → `an:chatgpt` (Dient A04, A07, A29), beginnt auf „mach #49“. #41 `an:chatgpt`, ohne
  Blocker, beginnt auf „mach #41“. #42, #43, #44 geschlossen (nicht geplant, 28.10., Anweisung des Eigentümers; Text lesbar, wieder öffnen möglich).
- Alle Pull Requests übernommen (0025, 0026, 0027, 0028, 0029; Verknüpfung A31–A34).
- #40 (`an:mensch`): Klicks für den Branch-Schutz, jetzt mit „Fertig, wenn“. #39 geschlossen
  (Sicherungs-Repo ist `esany/werke`). #77 offen (Bug „nachziehen“, dazu
  zweiter Fall: Schreiben direkt auf `main`).
- Erledigt am 28.10.: Skill `issue` (#38), 0029 (#67), Anschluss in Worten (#71), #50, #51, #53,
  #52, #55, #65, #31.
- Lücken bei Abnahmen: ruhende Aufträge #8, #9, #23, #24, #26, #27 haben keine Ausgabe oder kein
  „Fertig, wenn“. Beim Wiederaufnehmen schärfen.
- Triage und Auftragsformat für kleinere Modelle:
  `research/gespraeche/2026-10-28-triage-modelle.md`.
- Lehren: Fähigkeiten eines Modells nach der Erfahrung des Eigentümers eintragen, nicht nach seiner Selbstauskunft (29.10.: Astra kann implementieren); Bei Sammelbegriffen („die Issues zum Werk“) vorher die Liste nennen und bestätigen lassen, besonders bei Schließen (#77, 28.10.); Lesart spiegeln (#55); Vorarbeit in `research/2026-10-issue-arbeit/` ist kein Eingang;
  ein Zitat ist keine Freigabe; vor jeder Liste abgleichen und zuerst im Repo sichern (#65);
  Meldungen in Worten, Fragen als Auswahl (#71); „nachziehen“ ist kein Startsignal (#77); vor
  jedem Commit den Zweig prüfen.
</details>
