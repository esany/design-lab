# Bremst die Systementwicklung die fachliche Entwicklung? (29.10.2026)

Frage des Eigentümers im Chat: „Behindert uns die Systementwicklung in der weiteren fachlichen
Entwicklung?“ Repo frisch gelesen (Stand `main`, ad24f8e). Status je Aussage nach `AGENTS.md`.

## Kurzantwort

**Ja, derzeit.** Nicht das System an sich, sondern die Reihenfolge „Werke ruhen, bis das System in
Ordnung ist“ (Entscheidung 28.10., `anschluss/werke.md`). Sie widerspricht Prinzip 9 und hat kein
„Fertig, wenn“. Damit gibt es keinen Zeitpunkt, an dem wieder gestaltet wird. *(abgeleitet)*

## Befunde

1. **Widerspruch zu Prinzip 9.** `principles.md`: „Systemarbeit braucht einen Anlass aus der
   Werkarbeit — sonst wächst das Gerüst statt des Werks.“ Seit dem 28.10. gilt das Gegenteil:
   erst System, dann Werk. *(belegt: principles.md Z. 70–75; anschluss/werke.md)*
2. **Die Arbeit hat sich vollständig ins System verlagert.** Seit dem 28.10. betreffen die
   Dateiänderungen `decisions/` (64), `anschluss/` (18), `stand.md` (16), `.agents/` (16),
   `AGENTS.md` (3) — keine einzige `studies/`, `experiments/` oder ein Fachpaket. Von 74 Commits
   nennen 3 überhaupt ein fachliches Stichwort (Flyer, Werk). 32 Entscheidungen in drei Tagen.
   *(belegt: `git log --since=2026-10-28`)*
3. **Umfang:** Regel-, Stand- und Protokolltexte ca. 24 000 Wörter, Fachpakete, Methoden-Skills,
   Studien, Experimente und Korpus zusammen ca. 19 000 (davon 7 000 Korpus-Daten).
   AGENTS.md, die immer geladen wird, hat allein 1 460 Wörter. *(belegt: `wc -w`, grobe Zuordnung)*
4. **Kette ohne Anfang.** Die Hilfe beim Entwerfen (#61) steht am Ende der Kette #56 → #57/#59 →
   #58/#60 → #61. #56 ist zurückgestellt. Die Werke-Issues #8, #9, #23, #24, #26, #27 sind alle
   `entwurf` und „ruhen“. Gestaltung ist also hinter einem Glied blockiert, das selbst ruht.
   *(belegt: offene Issues, anschluss/system.md)*
5. **Die offenen Anforderungen sind fachlich.** A01, A03, A29, A30 „offen“, A04/A05 „2 von 6“.
   Keine Systemarbeit der letzten zwei Tage hat eine davon bewegt. *(belegt: intent.md)*
6. **Das wertvolle System entstand am Werk.** Der Flyer (27./28.10.) hat Manifest, Duden-Regel,
   Fachpaket „Form“, Feinsatz-Werkzeuge und Prüfmaßstab (Sehwinkel) hervorgebracht — geprüft an
   einem echten Gegenstand. Die Systemarbeit danach erzeugt vor allem Regeln über Regeln
   (Merkzettel 0029, Perspektive 0030, Auftragsformat) und Fehlerberichte über das Lesen von Regeln
   (#55, #77). *(abgeleitet)*
7. **Selbstverstärkung.** Mehr Regeln → mehr Fehllesungen durch Modelle → neue Regeln und Bugs.
   Die Anforderungen A33 („nichts verrottet“) und A34 („Tokenökonomie“) beschreiben genau dieses
   Risiko. *(abgeleitet)*

**Was die Systemarbeit gebracht hat (fair):** Sicherung der Werke (0026), Start-Regel, Arbeit nur
mit Auftrag — das löste echte Probleme. Der Befund richtet sich gegen die Reihenfolge, nicht gegen
diese Teile.

## Optionen

| Option | Inhalt | Folge |
|---|---|---|
| **A (Hinweis)** | Prinzip 9 wieder in Kraft: Werke wieder aufnehmen mit einem kleinen, konkreten Werk (z. B. Antwortkarte zum Flyer oder Pilot „Raster als Programm“ #24). Neue Systemarbeit nur, wenn das Werk sie auslöst. Laufende Systemaufträge (#41, #49) dürfen weiterlaufen, nichts Neues. | System wird wieder am Gegenstand geprüft; Gefahr: offene Systemfragen bleiben länger offen |
| B | Feste Quote, z. B. zwei Drittel Werk, ein Drittel System je Sitzung | planbar; schwer zu messen, Gefahr der Mechanik |
| C | Weiter wie bisher, aber „System in Ordnung“ bekommt ein „Fertig, wenn“ mit Datum | bleibt systemlastig, endet aber sicher |

Nach 0028 sind das Hinweise, keine Vorgaben. Die Wahl trifft der Eigentümer; danach gehört die
Änderung der Reihenfolge in `stand.md` und die Merkzettel `system` und `werke`.
