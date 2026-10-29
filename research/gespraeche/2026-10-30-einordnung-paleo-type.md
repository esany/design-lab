---
dient: A07, A17, A34
datum: 2026-10-30
quelle: Systemanalyse zu esany/paleo-type (vom Eigentümer im Chat geteilt, Modell nicht genannt); Einordnung Claude (Orchestrator)
status: Einordnung; paleo-type selbst nicht gelesen (nicht geprüft)
---

# Einordnung: Systemanalyse paleo-type und was das Labor daraus übernimmt

## Wo die Analyse recht hat und das Labor korrigiert

1. **Schwellen sind Projektziele, keine Wissenschaft.** Der Umbauplan hatte Studienwerte aus
   Sekundärquellen verwendet. Geprüft am Original-Abstract (arXiv 2602.11988): Die Richtung
   „minimaler Kern“ ist belegt, die Zahlen (≈ 100 Zeilen, + 4 %) sind es nicht. `plan.md` berichtigt.
2. **Ein zweites Modell ist kein unabhängiger Zeuge.** Liest es dieselbe abgeleitete
   Zusammenfassung, übernimmt es dieselbe falsche Prämisse. Gegenprüfung muss an der
   **Quelle** ansetzen (Original, Datei, Messung), nicht an der Zusammenfassung. Gilt auch für das
   Gegenlesen #100: Astra soll Zitate in den Originalen prüfen, nicht nur `befunde.md` lesen.
3. **Technik sichert Struktur, nicht Wahrheit** (asymmetrische Qualitätssicherung). Ein grüner
   Build sagt nichts über die fachliche Richtigkeit. Ansichten sollen deshalb ausweisen, *was*
   geprüft ist (Struktur, Quelle, Fachurteil), statt einen Gesamtstatus zu zeigen.
4. **Der richtige Erfolgsmaßstab** ist, ob ein frischer Kontext eine Aufgabe aufnimmt und zu
   einem brauchbaren Ergebnis oder einer begründeten Grenze bringt, ohne dass der Eigentümer
   retten muss. Übernommen als wichtigster Messwert „Eingriffe des Eigentümers“ (`plan.md`).
5. **Vorhandene Fähigkeit wird nicht aktiviert** (Skill nicht geladen, #280 dort). Für das Labor
   heißt das: Harte Grenzen gehören in den immer geladenen Kern, nicht nur in Skills (so in U3
   umgesetzt), und der Neustart-Test (#109) prüft das Aktivieren, nicht nur das Vorhandensein.
6. **Nicht radikal verkleinern, ohne Verlust zu testen** (Alternative E). U3 hat den alten
   Wortlaut archiviert und zugeordnet; der Verlusttest ist #109.

## Wo die Analyse selbst das Muster zeigt (Hinweis, kein Urteil über paleo-type)

- Sie ist lang (≈ 420 Zeilen) und schlägt als nächsten Schritt erneut Rekonstruktion,
  Gegenfälle T01–T12 und Abnahmen in einem Draft-PR mit Anforderungen R01–R16 vor. Das ist
  begründet, kann aber in dieselbe Prüfkette münden. Hinweis: Zeitrahmen und **ausführbare**
  Tests (rot/grün) statt beschriebener Testfälle festlegen.
- Ihre Kernsätze sind übertragbar und knapp: „Technische Invarianten durch echte Technik
  sichern. Fachkompetenz durch überprüfte Erfahrung entwickeln. Forschung an Originalquellen als
  eigenständigen Zweck verwirklichen.“

## Für die Vorlage (U9)

Das Muster für Wissensprojekte hat drei getrennte Nachweisebenen: **technisch geprüft** ·
**an der Quelle geprüft** · **fachlich validiert (oder Grenze benannt)**. Jede Aussage zeigt,
welche Ebene erreicht ist.
