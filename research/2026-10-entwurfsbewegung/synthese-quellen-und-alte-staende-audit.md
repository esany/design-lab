# Fallmaterial zu #49: Synthese – Quellen- und Standaudit

**Datum:** 2026-10-29 · **Dient:** A04, A07, A29 · **Evidenz:** Repository- und Git-Abgleich · **Status:** vorläufig; keine fachliche Kanonisierung.

**Datenschutzgrenze:** Das untersuchte Repository `esany/Synthese` ist privat; das Labor ist öffentlich. Deshalb werden hier **keine** internen Textpassagen, Dateiinhalte, Rohchat-Fragmente oder detaillierten wissenschaftlichen Arbeitsmodelle daraus reproduziert. Die Originalbelege bleiben an ihrem privaten Ort. Diese öffentliche Notiz dokumentiert nur methodische Befunde, Beobachtungsumfang und offene Prüfungen. Vor einer breiteren Veröffentlichung ist die Auswahl des Eigentümers erforderlich.

## Prüfgegenstand und Methode

Untersucht wurde der Stand auf `main` und dessen erreichbare Git-Commitfolge, einschließlich des ältesten sichtbaren Repository-Bootstraps und des zuletzt überlieferten Stands. Zusätzlich wurden Start- und Statusdateien, eine Modell-Arbeitsfassung, ein Quellenlinien-Register, ein Materialinventar und Sicherungsblocker **direkt gelesen**. Git-Objekte und Dokumentinhalte wurden getrennt bewertet; ein in einem Register **genanntes** Dokument wurde nicht als **gelesener** Primärtext behandelt.

Die zugängliche Repository-Geschichte reicht bis zum Bootstrap im September 2026. Ältere fachliche Phasen werden durch Dateinamen, Handoffs und Paketreferenzen erwähnt, doch die entsprechenden Rohmaterialien sind im überprüften aktuellen Git-Dateibestand **nicht vollständig vorhanden**. Die noch nicht verfügbaren Originaldateien dürfen weder aus Zusammenfassungen rekonstruiert noch als nachgewiesen verloren behandelt werden.

## Befunde

| ID | Beobachtung | Status | Tragweite und Grenze |
|---|---|---|---|
| S1 | Das Repo beschreibt den Arbeitsstand ausdrücklich als noch nicht endgültig konsolidiert. | **belegt durch interne Statusquellen** | Für #49 darf dieser Zwischenstand nicht an Maßstäben eines fertigen Systems gemessen werden; seine Aussagen sind als Arbeitsmaterial, nicht als gültige Laborregeln zu lesen. |
| S2 | Der gegenwärtige Git-Bestand enthält eine spätere, konsolidierende Dokumentations- und Sicherungsphase; ältere fachliche Quellen werden teilweise nur in Manifesten genannt. | **belegt durch Baum/Commitliste/Inventar** | Eine historische Rekonstruktion aus Git allein wäre unvollständig. |
| S3 | Unterschiedliche Versionierungs-, Arbeits- und Statushinweise müssen vor Aussagen über den „aktuellen“ fachlichen Stand gegeneinander geprüft werden. | **abgeleitet aus S1/S2** | Ein aktuelles Dokument ist nicht notwendigerweise der jüngste fachlich freigegebene Stand. |
| S4 | Die älteren zentralen Originalquellen seien definitiv verloren oder methodisch falsch. | **nicht belegt** | Ohne Originaldateien, gesicherten Snapshot und Leselog ist weder Verlust noch sachliche Fehlerhaftigkeit bestimmbar. |
| S5 | Teile der Arbeit könnten für Leitfragen 1–3 von #49 als Praxisfall für Entwicklung/Gebrauch, Entwurfsbewegung und Möglichkeitsräume dienen. | **abgeleitet** | Erst Originaltext, Beispiel und Variantenprozess prüfen, dann eine Übertragung verantworten. |
| S6 | Die im aktuellen Arbeitsmodell behaupteten fachlichen Beziehungen seien wissenschaftlich unabhängig validiert. | **nicht belegt** | Repository-Persistenz und nachträglicher Handoff sind kein Quellen- oder Wirksamkeitsnachweis. |

## Was „fehlende zentrale Quellen“ wissenschaftlich bedeutet

Die methodisch entscheidende Unterscheidung lautet:

1. **Quelle genannt, nicht verfügbar:** Ein Verzeichnis nennt einen früheren Primärtext bzw. ein Paket; dessen Inhalt konnte nicht eingesehen werden. Status: *referenziert, nicht geprüft*.
2. **Quelle verfügbar, nicht gelesen:** Die Datei existiert, aber Text und Kontext wurden nicht geprüft. Status: *vorhanden, inhaltlich nicht geprüft*.
3. **Textstelle gelesen, Aussage nicht gedeckt:** Zitat korrekt, aber die hergeleitete Theorie nicht hinreichend belegt. Status: *Beleg ungeeignet*.
4. **Historischer Widerspruch:** Ältere und neue Fassung wurden tatsächlich gelesen und widersprechen einander. Status erst dann: *konkurrierende Fassungen*, nicht automatisch *alte Fassung falsch*.

**Zwischenergebnis:** Für Synthese ist aktuell vor allem Fall 1 nachgewiesen. Eine Liste externer Theoriequellen, die in früheren Paketen enthalten waren, darf aus ihrem Fehlen im aktuellen Baum nicht als „nie benutzt“ beschrieben werden.

## Anschluss an #49, ohne den Auftrag zu verändern

**Leitfrage 1 (abgeleitet):** Die Trennung zwischen Entwicklung einer Modell-/Prozessarchitektur und einem realen Entwurfsdurchlauf ist im Quellenbestand als Untersuchungsfrage greifbar. Ihre Wechselwirkung darf nur aus tatsächlichen Fällen, nicht aus Versionsbezeichnungen gefolgert werden.

**Leitfrage 2 (abgeleitet):** Änderungsstände des Entwurfs können Formfindung, Variation, Umstrukturierung, Rücksprung und eine Änderung der Kriterien umfassen. Dass diese Dynamik in Synthese so ablief, ist noch **nicht durch historische Rohdurchläufe nachgewiesen**.

**Leitfrage 3 (abgeleitet):** Kandidaten, ausgeschlossene Varianten und Transformationsräume könnten am Praxisfall unterscheidbar sein. Der Umfang des tatsächlichen Möglichkeitsraums lässt sich aber weder aus einem konsolidierten Prozessdiagramm noch aus einem unvollständigen Sicherungsinventar ableiten.

## Priorisierte nächste Prüfhandlungen (Optionen, keine Auftrags- oder Regeländerung)

- **Zuerst Quellenkette retten, nicht interpretieren:** Original-Snapshot und die darin genannten historischen Dateien anhand des bereits dokumentierten Hash-/Manifest-Bezugs auffinden; Inhalte bleiben im privaten Bereich.
- **Danach Versionen vergleichen:** Dokumenttitel, Fassung, Fundort, Entstehungszeit, tatsächlich gelesene Passagen, Widersprüche und Quelle-zu-Behauptung-Deckung erfassen.
- **Dann Fallprüfung:** Einen vollständig dokumentierten Entwurfsdurchlauf mit Eingabe, Varianten, Revisionen und Urteil prüfen, bevor eine Aussage über „organische“ bzw. dynamische Gestaltung getroffen wird.

**Prüfgrenzen:** Keine alten ZIPs importiert oder geöffnet, kein vollständiger historischer Rohchat, keine Validierung von Renderern oder Modellwirksamkeit, keine überprüfte externe theoretische Quellenbibliografie dieser älteren Phasen; Build nicht ausgeführt. Dieses Audit ist keine Abnahme von #49, keine selbstständige Änderung am privaten Repo und kein Ersatz für die Quellenrecherche im laufenden Issue.
