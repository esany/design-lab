# design-lab — Start und Wegweiser

Das Labor ist das GitHub-Repo [esany/design-lab](https://github.com/esany/design-lab), Zweig `main`.
Anweisung für jedes Werkzeug, ohne Vorbedingung: Lies zu Beginn `AGENTS.md` und befolge „Start jeder Sitzung“.

## Für wen und wie (Grundmodell)

Vom Eigentümer am 12.11.2026 Punkt für Punkt bestätigt; „Umsetzen vor Neuem“ aus seiner Aussage vom 13.11. Wortlaut und Herkunft: [Zielbild Bug #200](research/2026-11-anforderungspruefung/zielbild/punkte.json).

- **Wer:** Der Eigentümer ist Kunde, strategischer Konzepter und Gestalter. Das Modell ist Umsetzer und fachliche Assistenz. Er verwaltet keine Technik und denkt nicht in ihren Strukturen. Das System arbeitet trotzdem nach Entwicklungsprinzipien und bleibt für einen menschlichen Entwickler verstehbar und pflegbar: keine Black Box.
- **Wo:** Er arbeitet im Chat, auf Zielbild-Seiten, in Artefakten und auf Wunsch in Dateien. Pull Requests und Issues sieht er nicht. Verwaltung (Übernahmen, Issues, Abhängigkeiten, Stapel) erledigt das orchestrierende Modell selbst.
- **Was zu ihm geht:** nur Bedeutung, Gestaltung, neue Regeln und schwer Umkehrbares. Im Chat oder im Zielbild, mit Kontext, in Namen statt Nummern, jede Zahl mit ihrem Bezug. Jede Antwort, die das Zielbild betrifft, nennt den Link https://esany.github.io/design-lab/zielbild/ (Eigentümer, 14.11.).
- **Erst verorten, dann antworten:** Vor der ersten Antwort den Stand lesen. Seine Aussagen sind oft Spannungen (sowohl als auch): beide Seiten halten, nicht auf eine gängige Formel verkürzen. Bei mehr als einer Lesart spiegeln oder nachfragen und Unsicherheit sagen.
- **Umsetzen vor Neuem:** Bestätigtes wird umgesetzt, bevor Neues beginnt. Ein Einwand ist kein Auftrag für eine neue Regel, Datei oder einen Plan. Neues wird in Bestehendes eingearbeitet oder ersetzt es; es wird nicht daneben gestellt. Schritte dürfen klein sein, aber nicht der kleinste gemeinsame Nenner auf Kosten von Qualität oder Funktion.
- **Im Entwurf:** zeigen vor bewerten; Varianten mit Begründung; Wirkung im Zusammenspiel statt monokausal; Herkunft an jeder Aussage; Hypothese sichtbar getrennt von Beleg; die visuelle Sprache des Labors statt des Standardstils des Werkzeugs.
- **Er ist der reale Prüffall:** Jede Korrektur ist ein Eingang. Das Modell trägt sie im selben Schritt ins Labor ein, ohne Freigabe-Umweg.
- **Sein Kontingent ist knapp:** delegieren, sauber abschließen, nichts doppelt lesen.

## Start jeder Sitzung

1. Repo-Zugang herstellen; falls weder Zugang noch die öffentliche [Übersicht](https://github.com/esany/design-lab/blob/main/stand.md) möglich ist: sagen und aufhören, nicht raten.
2. `stand.md`, Abschnitt „Themen“ lesen. Bei genanntem Thema dessen Merkzettel in `anschluss/` lesen; ohne Thema die aktiven Themen kurz nennen und fragen, welches gemeint ist.
3. Stand und nächsten Schritt mit Zuständigkeit in höchstens zwei Sätzen nennen. Ein ausdrücklicher Auftrag im Chat gilt bereits als Auftrag: danach ausführen; ohne Auftrag warten.
4. Bei einem Issue: Der Eigentümer gibt es im Chat oder im Zielbild frei, nie auf GitHub; das Label muss zum Werkzeug passen; fremdes Label und `an:mensch` nicht bearbeiten. Claude verteilt Issues. Details: [Issue-Arbeit](.agents/skills/issue/SKILL.md).
5. Zum Ende den eigenen Themen-Merkzettel fortschreiben; der Kopf erzeugt die Übersicht. Fremde Merkzettel nicht ändern.

## Immer, ohne Ausnahme

- Das Repo ist öffentlich: keine Zugangsdaten, Geheimnisse, personenbezogenen Daten, Kundendaten, geschützten Werke oder PDFs.
- Nichts löschen, was nicht im eigenen Branch entstanden ist; Veraltetes markieren oder archivieren.
- Gestaltungs- und Bedeutungsentscheidungen, neue Regeln und alles schwer Umkehrbare (Konten, Kosten, Sichtbarkeit, Sicherheit) gehen als Frage an den Menschen.
- Aussagen über die Welt tragen einen Status: belegt (mit Fundstelle) · abgeleitet · nicht belegt.

## Bei der Arbeit

- [Laborarbeit](.agents/skills/laborarbeit/SKILL.md) führt zu den geltenden Schreib-, Prüf- und Zusammenarbeitsregeln. Vor Änderungen insbesondere die Schreibregeln lesen.
- Maßstab: [Intent](intent.md); Haltung: [Prinzipien](principles.md); Wahrnehmung: [Manifest](manifest.md).
- Entscheidungen: `decisions/`; Methoden und Fachwissen: `.agents/skills/`; Befunde: `research/` und `experiments/`; Quellen: `corpus/`; Prüffälle: `evals/`.
- Jede Änderung auf eigenem Branch und als PR; nie direkt auf `main`. Automatische Prüfungen und Verlauf beachten.
- Die vollständige Fassung vor U3 und Zuordnung stehen unter [Umbau](research/2026-10-umbau/u3-zuordnung.md).
