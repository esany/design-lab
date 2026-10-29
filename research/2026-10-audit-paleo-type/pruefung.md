---
dient: A07, A17, A33, A34
issue: "#112"
datum: 2026-10-30
quelle: "esany/paleo-type (privat), main@d734640 (30.10.2026, 00:50) und Issues per GitHub-API am 30.10.2026"
status: Gegenprüfung durch Claude an den Originalen; Befund abgenommen mit zwei Berichtigungen
---

# Gegenprüfung der zehn Originalbelege

Geprüft hat Claude, nicht das Modell, das die Karten schrieb. Gelesen wurden die Originaldateien
und die vollständigen Issue-Verläufe in `paleo-type`, nicht die Karten. In `paleo-type` wurde
nichts geschrieben. Der vom Audit genannte Stand `6adf6c6` ließ sich nicht einzeln holen. Geprüft
wurde deshalb am jüngeren `main@d734640`; die nachgemessenen Dateigrößen stimmen mit den Angaben
der Karten überein.

## Ergebnis

| Karte | Aussage der Karte | Am Original | Urteil |
|---|---|---|---|
| P01 | Lernnotiz allein hielt nicht; #341 ist ein verwandter Gegenfall | Lernnotiz (6.452 Bytes) sagt selbst „nur Fehlerbeleg“, keine Regel. #341 (29.10.) zeigt nach einer Korrektur des Eigentümers erneut einen neuen Skill-Vorschlag. Auslöser war eine bedingte Frage des Eigentümers, nicht reine Unzufriedenheit. | **bestätigt**; „verwandt“ ist die richtige Stärke |
| P02 | Reparatur belegt, künftiges Verhalten unbewiesen | Bericht (12.671 Bytes) schreibt ausdrücklich: keine ausführbare Prüfung, kein frischer Verhaltenstest | **bestätigt** |
| P05 | Nachtest nach technischer Korrektur: Gesamt-FAIL | #296: F1 nach PR #303 insgesamt FAIL. Der Kern des ursprünglichen Schmerzes, das Verschieben der Forschungsfrage, trat im Nachtest aber **nicht** mehr auf. Gescheitert ist eine verwandte Teilfrage, die zu frühe Zuschreibung eines Prüffalls. | **berichtigt**: „teilweise“ statt „nein“ |
| P06 | Antwort war nur Dokumentation; hielt nicht wegen #341 | #336 wurde mit einer Änderung am Einstieg (PR #338, gemergt 28.10.) beantwortet und nach einem frischen Nachtest als gelöst geschlossen. #341 folgt einen Tag später in verwandter Form; #341 nennt #336 selbst „einen anderen Fehler“. | **berichtigt**: Antwort war Text plus bestandener Nachtest; „teilweise“ statt „nein“ |
| P08 | Lokale Prüfungen grün, Blindlauf gescheitert | #297 und PR #332: 171 bzw. 174 Tests grün; ein frischer Blindlauf lud das Werkzeug nicht und scheiterte | **bestätigt** |
| P10 | Plan blieb im Chat; Lücke offen | #347 beschreibt genau das und steht auf „nicht startklar“; #346 nennt drei Teilschritte und fünf Kommentare | **bestätigt** |
| P11 | Enger Test existiert | Test `test_status_is_read_only_…` vorhanden; #277 geschlossen mit Umsetzung in PR #273 und #288 | **bestätigt**; Test von Claude ausgeführt: **bestanden** |
| P17 | Enger Test existiert | Test `test_manifest_failure_…` prüft alle drei Beidateien; #328 beschreibt genau diesen Test | **bestätigt**; Test von Claude ausgeführt: **bestanden** (3 Teilfälle) |
| P18 | Daten sagen „fertig“, alter Prosakopf sagt „ACTIVE“ | `configuration.json`: accepted; `STATE.json`: complete; Kopf von `RESULT.md`: „SD-KA-01 ACTIVE“; `engineering/` 1.872.110 Bytes | **bestätigt** |
| P21 | Zweites Audit nimmt die Empfehlung des ersten zurück | Re-Audit: frühere Empfehlung „superseded“; das erste Audit trägt den Rücknahmehinweis; zusammen 38.824 Bytes | **bestätigt** |

Nicht nachgeprüft: die PR-Nummern #324–#326 in P21 und die übrigen elf Karten.

## Was die Berichtigungen für den Befund heißen

Die beiden Berichtigungen schwächen den Befund nicht, sie schärfen ihn. In P05 und P06 gab es
jeweils eine Antwort **mit** bestandenem frischen Nachtest. Der benannte Fehler kam danach nicht
wieder, ein verwandter aber doch, in P06 schon am nächsten Tag. **Abgeleitet:** Ein Nachtest belegt
die Wirkung für den geprüften Fall, nicht für die Familie. Das passt zur Hauptaussage in
[befunde.md](befunde.md): Enge Prüfungen halten, was sie prüfen, und sonst nichts.

## Öffentlich und privat

Die drei Dateien enthalten keine Quellinhalte, Transkriptionen oder Personen. Ein Pfad im Inventar
nannte die Archivsignatur des Projekts; er ist durch einen Platzhalter ersetzt.
