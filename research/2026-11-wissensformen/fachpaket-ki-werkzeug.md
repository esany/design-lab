---
dient: A04, A05, A23, A26, A33
datum: 2026-11-07
modell: Claude Opus 5.5 (Claude-App, Cloud-Sitzung)
status: Konzept aus dem Chat vom 06./07.11. Beschlossen ist nur, dass ein Entwurf entsteht (arbeitsweise-f15). „Rollen der Orte“ und „Schwelle“ sind überholt durch konzeptstand-2026-11-08.md.
---

# Fachpaket „KI als Werkzeug“: Wissen einmal, Anwendung mehrfach

Fragen des Eigentümers (Chat, 07.11.): Sollte KI als Werkzeug in ein Fachpaket, damit dieses
Werkzeugwissen nicht immer wieder mühsam erarbeitet werden muss? Welche Schwelle braucht ein
Eintrag, wie flüchtig ist das Wissen, wie pflegt man es günstig? Und: Es gibt eine Dopplung
zwischen dem Systementwurf des Labors und dem allgemeinen Entwurfswissen mit dem Werkzeug.

## Anlass

Der Prüffall neustart-daten (#137 Claude, #138 Astra, #141 Codex; Auswertung auf Branch
`lab/neustart-daten-auswertung`) zeigte: Lesen gelingt allen drei Modellen, beim Schreiben weicht
jedes anders ab, und keines nennt die rote Prüfung. Die Umgebung war nicht der Grund: Codex in der
Cloud hat Repo und Node, ChatGPT kann im Container Node ausführen (*belegt*: learn.chatgpt.com,
„Cloud environments“; hyper.ai über ChatGPT-Container, Januar 2026). Das Verhalten gilt
unabhängig von der Fachdomäne. Solches Wissen wurde bisher in jedem Chat neu erarbeitet.

## Befund: Dopplung (*abgeleitet*)

Dieselbe Erkenntnis steht an mehreren Orten mit eigenem Wortlaut und ohne gemeinsame Kennung, zum
Beispiel „Sperre statt Satz“: Aussage `arbeitsweise-a03`, Leitfaden-Eintrag `w-sperren`, Befunde in
`research/2026-10-audit-zusammenarbeit/`. Ursache: Wissen und Anwendung sind nicht getrennt. Das
Labor ist Quelle der Erkenntnisse und zugleich ihr Anwendungsfall, wie paleo-type.

## Vorschlag

**Ein Fachpaket „KI als Werkzeug“**, quer zu allen Feldern, im selben Aufbau wie „Form“ und
„Vermitteln“. Der Aufbau (Grundlagen, Prinzipien, Methodik, Stand der Technik, Qualität,
Mittelmaß, Verlernen) gilt für alle Fachpakete; „Entwerfen“ bleibt ein eigenes, späteres Paket
(Merkzettel Wissen, Frage 3).

| Abschnitt | Inhalt | Bestand | Hält |
|---|---|---|---|
| Grundlagen | Wie Modelle arbeiten, Grenzen | Korpus | Jahre |
| Prinzipien, Best Practice | „Sag wofür“, „Sperre statt Satz“, Zweitblick | 18 Leitfaden-Einträge | Jahre |
| Stand der Technik | Was Claude, Codex, ChatGPT heute können, mit Datum | Recherche 07.11. | Wochen bis Monate |
| Werkzeugkette | Konnektor, Container, Cloud: wer was ausführen kann | Recherche 07.11. | Wochen bis Monate |
| Verhalten der Modelle | übergehen Pflichtschritte, größere Lesart, Gefälligkeit | Aussagen in `daten/`, Prüffall | bis zur nächsten Modellgeneration |
| Qualitätskriterien | Prüffälle, z. B. neustart-daten | `evals/` | wie die Prüffälle |
| Mittelmaß-Muster | Workslop, glatte Verdichtung, Regelflut | Aussagen, Audits | Jahre |
| Verlernen | Rollenvorgabe, „Denk Schritt für Schritt“ | Leitfaden „Überholt“ | Jahre |

**Rollen der Orte**
> **Überholt durch [Konzeptstand 08.11.](konzeptstand-2026-11-08.md):** Der Leitfaden wird nicht die Ansicht dieses Pakets (f16: Nein). Leitfaden und Fachpaket sind getrennte Erkenntnisorte.

- Fachpakete der Felder behalten unter „Rolle der KI“ nur das Feldspezifische und verweisen für
  das Allgemeine auf dieses Paket.
- Der Leitfaden wird die Ansicht dieses Pakets für den Menschen (dieselben Daten, zwei Leser).
  Das ändert 0032, wo „Einträge als Fachpaket“ verworfen wurde: Frage `arbeitsweise-f16`.
- Laborregeln und paleo-type sind Anwendungsfälle: Sie setzen Grundsätze als Prüfung oder Sperre
  um, verweisen auf Kennungen und liefern Belege zurück (Feld `labor`); sie formulieren das Wissen
  nicht neu.

**Schwelle** (nach der Reifegrade-Hypothese, `experiments/2026-10-entwurfsprozess.md`)
> **Überholt durch [Konzeptstand 08.11.](konzeptstand-2026-11-08.md):** Es gibt keine feste Stufenfolge und keine festen Wege zwischen Leitfaden und Fachpaket (f30).

1. Beobachtung, einmal: Aussage in `daten/` mit Modell und Datum.
2. Muster, mindestens zweimal unabhängig oder extern belegt: Kandidat.
3. Grundsatz, ohne Werkzeugnamen formulierbar und prüfbar: Eintrag im Fachpaket, sichtbar im Leitfaden.
4. Angewendet: in eigenen Systemen als Prüfung oder Sperre, nicht als Regeltext.

**Pflege:** Prinzipien in der Monatspflege; Verhalten der Modelle über Prüffälle, die bei einem
neuen Modell erneut laufen; Stand der Technik und Werkzeugkette mit Datum und Frist, der Build warnt
bei Überfälligem. Jede Tatsache steht einmal und wird per Kennung verwiesen.

## Kandidaten aus dem 06./07.11.

- Modelle übergehen Pflichtschritte oder bauen erzeugte Dateien nach (Build): 2 von 3 Läufen,
  dazu a03. Erfüllt Stufe 2.
- Keines der drei Modelle nennt eine rote Prüfung von sich aus: 3 von 3 Läufen.
- a23 (Astra kann Code ausführen und schreiben): Schreiben in #138 beobachtet, Ausführen nach
  eigener Angabe und Quelle; neu bewerten.

## Nicht geprüft

- Ob ein Paket quer zu allen Feldern tatsächlich Lesekosten spart, ist nicht gemessen.
- In welcher Umgebung Codex lief (#141), ist unbekannt.
