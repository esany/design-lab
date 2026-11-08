---
dient: A04, A06, A10, A27
datum: 2026-11-08
modell: Claude Opus 5.5 (Claude-App, Cloud-Sitzung)
status: Fall gelesen (Stufe 2 nach Vorschlag 0031). Nicht gegengelesen. Keine Regel abgeleitet; Fragen an den Eigentümer am Ende.
---

# Fall: Lev Manovich, Text Time-lapse 1 → 2, mit Claude gebaut

Auftrag des Eigentümers (Chat, 08.11.): das Fundstück vertiefen, also die Commit-Folge als Fall
lesen und gegen die eigene Studienpraxis halten. Sichtung und Nachtrag: Issue #153.

**Kurzantwort:** Manovich arbeitet mit derselben KI und in derselben Form wie das Labor, aber in
umgekehrtem Verhältnis. Bei ihm antwortet alle fünf Minuten das Werk, und der Text (Commit-Zeile,
Anleitung) beschreibt nur, was man sieht. Im Labor wächst der Text schneller als das Werk. Der Fall
stützt die Wurzel, die das Labor am 05.11. selbst benannt hat: Im Entwurf muss das Material
antworten (`experiments/2026-10-entwurfsprozess.md`, Abschnitt „Beobachtung 05.11.“).

## 1 Material

Quelle: öffentliches Repo `levmanovich/manovich-interactive`, Zweig `main`, Klon vom 08.11.2026,
Ordner `text-time-lapse/` und `text-time-lapse-2/`. Laufende Fassung:
https://levmanovich.github.io/manovich-interactive/text-time-lapse-2/. Das Repo hat keine
Lizenzdatei. Deshalb steht hier kein Code und keine Zeile aus dem Beispiel-Essay, nur Zahlen und
kurze Commit-Titel als Fundstellen.

## 2 Was die Commit-Folge zeigt

| Befund | Zahl oder Fundstelle | Status |
|---|---|---|
| Umfang | 48 Commits auf beide Fassungen, 06.11. 10:21 bis 08.11. 10:32 | belegt (git log) |
| Mitautor | alle 48 mit `Co-Authored-By: Claude Opus 5.5` und Link auf eine Claude-Sitzung | belegt |
| Takt | 44 der 47 Abstände unter einer Stunde, Median 5,3 Minuten | belegt (gerechnet) |
| Schrittgröße | Median 14 geänderte Code-Zeilen je Commit; 25 von 43 Commits mit Code-Änderung ändern höchstens 20 Zeilen | belegt (gerechnet) |
| Anleitung wächst mit | 31 von 48 Commits ändern zugleich eine README (Anleitung für Nutzer) | belegt (gerechnet) |
| Vorgeschichte | Fassung 1 kommt als ein Commit mit 1 265 Zeilen; wie sie entstand, ist nicht sichtbar | belegt; Lücke |
| Abzweig statt Umbau | Fassung 2 entsteht am 07.11. 17:32 als Kopie (1 506 Zeilen); Fassung 1 bleibt erhalten und verlinkt | belegt |
| Commit-Titel | beschreiben, was man sieht, in Alltagssprache, z. B. „quieter panel“, „calmer Advanced“, „removed words as pale bars instead of outlines“ | belegt |
| Korrektur offen | „(work in progress)“ um 22:20, „(fixed)“ um 22:28 | belegt |
| Gestaltungsthemen | Ruhe (weniger auf einmal zeigen), Stillstand beim Umschalten („nothing moves“, „keeps one height“), Einheitlichkeit („same design as the upper controls“), sinnvolle Vorgabe („Revisions chosen at the start, so Play works right away“) | belegt (Titel); Bündelung abgeleitet |
| Kein Regelapparat im Repo | keine AGENTS.md, CLAUDE.md, Entscheidungen oder Prüfregeln; die Steuerung liegt im Chat und in seinem Urteil beim Ansehen | belegt (Dateiliste); Deutung abgeleitet |
| Rollen | Manovich entscheidet, Claude setzt um | abgeleitet (Titel als Entscheidungen formuliert); die Chats selbst sind nicht einsehbar |

## 3 Gegenprobe Labor (vom Beginn bis 08.11.)

| Befund | Zahl | Status |
|---|---|---|
| Commits auf `main` | 143, 27.10. bis 08.11. | belegt (git log) |
| davon in `studies/` | 3, alle am 27.10. | belegt |
| Markdown im Repo | ≈ 672 KB | belegt (gemessen) |
| Code von Studien und Flyer-Werkzeugen | ≈ 46 KB (nur `.js`/`index.html`/`.html` in `studies/` und im Flyer-Experiment) | belegt (gemessen); grobe Messung, Werk- und Systemanteile nicht getrennt |
| Commit-Titel | überwiegend Verfahren: „Arbeitsweise: …“, „Leitfaden: …“, „Pilot Datenmodell …“ | belegt (letzte 15 Titel) |

Das Verhältnis Text zu Werk liegt grob bei 15 zu 1. Das deckt sich mit Symptom 4 der Beobachtung
vom 05.11. („Text wächst schneller als Werk“). *abgeleitet*

## 4 Lesart

1. **Das Material antwortet.** Jeder Schritt ist klein genug, dass Manovich ihn sofort ansieht
   und beurteilt. Sein Urteilsinstrument ist das Ansehen der Seite, nicht ein Bericht. Genau das
   fehlt laut Warum-Kette des Labors (Schritt 1 und 3). *abgeleitet*
2. **Die Commit-Zeile ist eine Gestaltungsentscheidung.** Sie ist zugleich Protokoll, Begründung
   in einem Halbsatz und Rückgängig-Punkt. Das Labor schreibt dafür Entscheidungsdateien,
   Merkzettel und Verlaufseinträge. *abgeleitet*
3. **Varianten als Werk.** Statt eine Entscheidung zwischen „alles zeigen“ und „ruhig“ zu
   dokumentieren, veröffentlicht er beide Fassungen nebeneinander. Der Vergleich ist selbst Teil
   des Werks. *abgeleitet*
4. **Text dient dem Gebrauch.** Was neben dem Code wächst, ist die Anleitung für Nutzer, nicht
   Verwaltung. *abgeleitet*
5. **Das Werkzeug ist selbst ein Baustein, den das Labor geplant hat.** Text Time-lapse zeigt
   Fassungen, Änderungen je Fassung und eine Zeitleiste. Das entspricht den Bausteinen B
   (Laborbuch) und C (Vergleichsansicht) aus `experiments/2026-10-entwurfsprozess.md`, für Texte.
   *abgeleitet*

## 5 Grenzen

- Ein einzelner Fall, öffentlich und erfolgreich: was gescheitert ist, sieht man nicht.
- Die Chats mit Claude sind nicht einsehbar; Rollenverteilung und Anteil der KI an Ideen sind
  nicht belegt.
- Manovich baut ein Werkzeug für ein klares Ziel. Das Labor ist zugleich Werk und System
  (Prinzip 9); ein Teil seines Textes gehört zum Systemexperiment und ist nicht einfach Überbau.
- Die Byte-Messung trennt Werk und System nicht sauber.
- Nicht gegengelesen durch ein anderes Modell.

## 6 Fragen an den Eigentümer

1. Soll das Labor eine nächste Studie bewusst in Manovichs Takt bauen (kleine sichtbare Schritte,
   eine Commit-Zeile als Entscheidung, keine weiteren Dokumente während der Arbeit) und danach
   vergleichen? Das wäre ein Experiment, keine neue Regel.
2. Soll Text Time-lapse als Pilot für die Bausteine B und C dienen, zuerst an einem Labortext
   (z. B. den Fassungen von `intent.md` aus der git-Geschichte), lokal im Browser, ohne Hochladen?
3. Korpus und Radar: Eintrag als Referenz (Werkzeug und Fallbeispiel), wie in #153 vorgeschlagen?
