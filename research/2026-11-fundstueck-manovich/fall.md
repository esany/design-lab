---
dient: A04, A06, A10, A27
datum: 2026-11-08
modell: Claude Opus 5.5 (Claude-App, Cloud-Sitzung)
status: Prüfprotokoll zur Analyse (analyse.md). Nicht gegengelesen.
---

# Prüfprotokoll: Text Time-lapse 2 – Infrastruktur, Bedienung, Lesbarkeit

Die Hauptanalyse steht in [analyse.md](analyse.md); hier stehen Material, Tests und Messungen.

Auftrag des Eigentümers (Chat, 08.11.): das Fundstück vertiefen. Eine erste Fassung verglich Takt
und Textmenge mit dem Labor. Der Eigentümer hat das verworfen, weil die Rahmenbedingungen unbekannt
sind (Werkzeuge, Vorarbeit, Infrastruktur, Kosten). Gefragt ist jetzt: Was lässt sich am Werk selbst
über Infrastruktur, UI und UX lernen? Sichtung: Issue #153.

**Kurzantwort:** Am meisten lässt sich über die Infrastruktur lernen. Eine öffentliche Seite liest
private Dateien nur im Browser, also ohne Server und ohne Hochladen, und das Beispiel steckt als
kleines, vorberechnetes Datenmodell in der Seite. Bei der Bedienung lohnen sich fünf Muster:
Start mit Beispiel, Zahlen auf den Knöpfen, Hilfemodus, ein Layout, das beim Umschalten stillsteht,
und Einstellungen nur dort, wo sie wirken. Schwach ist die Lesbarkeit: Farbe trägt zugleich Daten
und Text, späte Fassungen liegen unter dem Kontrastminimum.

## 1 Material und was unbekannt bleibt

Quelle: öffentliches Repo `levmanovich/manovich-interactive`, Klon vom 08.11.2026, Ordner
`text-time-lapse-2/`; laufende Fassung
https://levmanovich.github.io/manovich-interactive/text-time-lapse-2/. Keine Lizenzdatei, daher
hier kein Code, kein Text aus dem Beispiel-Essay und keine Bildschirmfotos (sie zeigen den Essay).
Eigene Tests: Seite aus dem Klon in Chrome ohne Bildschirm, 1440 × 900 hell und dunkel, 390 × 844
mobil; Tastatur; axe-core 4 (WCAG 2 A/AA).

| Bekannt | Unbekannt |
|---|---|
| Alle 48 Commits beider Fassungen nennen Claude Opus 5.5 als Mitautor, mit Claude-Sitzung (git log) | weitere Werkzeuge, Tarif, Tokenkosten, Zeit außerhalb der Commits |
| Der Code verweist auf ein älteres Werkzeug: Kommentare „same steps as history.py“ und „so results match the original tool“ (`index.html`) | dieses Werkzeug selbst, frühere Studien, wie Fassung 1 entstand (sie kommt als ein Commit mit 1 265 Zeilen) |
| Manovich hat Erfahrung mit Werkzeugen dieser Art (ImagePlot seit 2009, README) | seine Vorgaben an die KI, Anteil der KI an Ideen |

Die Vorarbeit ist also real und nur zum Teil sichtbar. *belegt (Verweise); Umfang nicht belegt*

## 2 Infrastruktur

| Befund | Fundstelle, Messung | Status |
|---|---|---|
| Eine Datei, ohne Build und ohne Framework: 227 KB, davon ≈ 193 KB JavaScript und ≈ 20 KB CSS | `index.html`, gemessen | belegt |
| Nur zwei fremde Abhängigkeiten: JSZip (nur für .docx) und Google Fonts | Netzanfragen beim Laden | getestet |
| Veröffentlichung über GitHub Pages; die README ist zugleich Anleitung; eine Startseite im Repo verbindet die Werkzeuge | Repo | belegt |
| **Private Dateien bleiben im Browser:** Ordner- und Dateiwahl, Ziehen und Ablegen, Lesen über die Datei-Schnittstelle des Browsers; keine Netzaufrufe für Inhalte | `webkitdirectory`, Ereignis `drop`; keine `fetch`-Aufrufe ins Netz | belegt (Code); mit eigenen Dateien nicht getestet |
| **Beispiel als Datenmodell, nicht als 16 Dateien:** eine „Wortgeschichte“, je Wort: Text, Fassung der Entstehung, Fassung der Streichung, Art der Änderung (≈ 105 KB) | Konstante `EX_D` | belegt |
| Der Wortvergleich ist eine Übertragung von Pythons `difflib.SequenceMatcher`, damit die Ergebnisse dem älteren Werkzeug gleichen | Kommentar am `matcher` | belegt |
| Einstellungen bleiben im Browser gespeichert, Zugriffe in `try/catch` | `localStorage` | belegt |
| Der Seitenumbruch je Ansicht wird berechnet, zwischengespeichert und im Hintergrund vorab gerechnet | `solve`, `fitCache`, `prefetch` | belegt |
| Fassung 1 bleibt als eigener Ordner und eigene Adresse stehen; Varianten sind Adressen, keine Zweige | Repo | belegt |

## 3 Bedienung (UI und UX)

| Muster | Beobachtung | Status |
|---|---|---|
| **Start mit Beispiel** | Die Seite öffnet nie leer: Beispiel geladen, „Revisions“ vorgewählt, ein Druck auf Play genügt; „Example“ holt es zurück | getestet |
| **Zahlen auf den Knöpfen** | Jeder Ansichtsknopf nennt, was er zeigt: „Final text 3,946“, „Deleted 1,477“, „16 pages“ | getestet |
| **Hilfemodus** | „?“ schaltet einen Modus, in dem ein Zeigen auf ein Bedienelement eine Erklärung daneben öffnet und nichts auslöst; Esc beendet; dazu ein Hinweis unten | getestet |
| **Stillstand beim Umschalten** | Die Spieler-Zeile ist von Anfang an da, nur blass; Höhe bleibt beim Wechsel der Animation | getestet; als Ziel in Commit-Titeln benannt |
| **Einstellungen nur, wo sie wirken** | Fünf Zeilen sichtbar, der Rest unter „Advanced“; Zeitsteuerung erscheint nur bei Revisions, Balkenregler nur bei Blocks | getestet |
| **Eine Gestaltung für alles** | „Advanced“ nutzt dieselben Umschaltknöpfe und Abstände wie oben, je Zeile eine Art Bedienelement | getestet |
| **Dieselben Daten, vier Ansichten** | Text, Balken, kleine Seite je Fassung, 3D-Stapel; dazu drei Animationen | getestet (Text, 16 pages, Player) |
| **Bildschirmgröße** | Breit: Steuerung links, Seite rechts. Mobil: Steuerung eingeklappt, ganze Seite im Überblick, nichts läuft seitlich über | getestet |
| **Dunkelmodus** | Die Oberfläche wird dunkel, die Seite bleibt weißes Papier | getestet; Absicht abgeleitet |

## 4 Darstellung und Lesbarkeit

| Befund | Messung | Status |
|---|---|---|
| Fassung als Farbe auf einem Verlauf (Navy → Magenta → Orange), im Lab-Raum gemischt | Code `toLab`, `fromLab` | belegt |
| Die Helligkeit steigt mit der Fassung: frühe Fassungen dunkel, späte hell; späte Wörter wirken leichter, obwohl sie den Endtext prägen | Bild, Kontrastwerte unten | abgeleitet |
| Späte Fassungen (Orange) auf Weiß: Kontrast 2,2 bis 3,4 zu 1, unter dem Minimum 4,5 zu 1 | axe-core, 200 Stellen | getestet |
| Graue Zeilenbeschriftungen der Steuerung: 3,1 zu 1 | axe-core | getestet |
| Seite ohne Sprachangabe (`lang`) | axe-core | getestet |
| Positiv: echte Knöpfe, Zustände für Hilfstechnik (`aria-pressed`, `aria-expanded`, 85 `aria-`-Angaben), sichtbarer Fokus, Rücksicht auf „weniger Bewegung“ bei der Einblendung | Tastaturtest, Code | getestet |

Der Kern-Zielkonflikt: Dieselbe Farbe soll eine geordnete Größe (Zeit) zeigen und Text lesbar
halten. Nach Bertin taugt der Farbton schlecht für Ordnung, die Helligkeit gut; die Helligkeit ist
hier aber durch die Lesbarkeit begrenzt. *abgeleitet (Skill `bertin-semiologie`)*

## 5 Kandidaten für das Labor (keine Regeln, Entscheidung beim Eigentümer)

1. **Öffentliche Seite, private Daten im Browser.** Das löst einen offenen Punkt aus
   `experiments/2026-10-entwurfsprozess.md`: Werke enthalten fremde Inhalte und brauchen deshalb
   bisher eine private Oberfläche. Eine Studie oder ein Werkzeug könnte öffentlich liegen und die
   Dateien des Eigentümers nur lokal lesen. *abgeleitet*
2. **Wortgeschichte als Datenmodell** für die geplanten Bausteine Laborbuch und Vergleichsansicht
   (gleiche Datei): ein Datensatz, aus dem alle Ansichten entstehen. *abgeleitet*
3. **Bedienmuster** für Studien prüfen: Start mit Beispiel, Zahlen auf Knöpfen, Hilfemodus neben
   der eigenen gestuften Erklärung (Studie „Reihe und Verschiebung“), Stillstand beim Umschalten.
   *abgeleitet*
4. **Gegenbeispiel Farbe:** Fassungs- oder Zeitfarben auf Text brauchen eine Kontrastprüfung; der
   Fall eignet sich als Prüffall für `bertin-semiologie` und `farbkontraste-itten`. *abgeleitet*

## 6 Grenzen

- Ein Werkzeug, eine Momentaufnahme vom 08.11.; es ändert sich stündlich.
- .docx-Lesen nicht getestet (JSZip im Container nicht erreichbar); eigene Dateien nicht getestet.
- axe-core findet nur einen Teil der Barrieren; kein Test mit Bildschirmleser.
- Nicht gegengelesen durch ein anderes Modell.
