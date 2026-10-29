## Zweck

Ein persönliches Labor für Gestaltung mit KI-Assistenz: Analyse und Synthese,
Typografie, Grafik, Print, Animation, freie Arbeit, elementare Geometrie,
konkrete Kunst, Bild- und Kunstwissenschaft, Diagrammatik,
Informationsdesign und -visualisierung, Wissensvermittlung, Ausstellung, HMI.

Der Mensch (Repo-Eigentümer) bringt Fragen, Intention, Haltung und Urteil.
Agenten bringen Breite, Ausführung, Prüfung und Dokumentation.
Das Repo ist das Gedächtnis. Werkzeuge und Modelle sind austauschbar.


## Arbeitsteilung

| Mensch führt | gemeinsam | Agent führt |
|---|---|---|
| Fragestellung, Intention, Haltung | Synthese, Regelformulierung | Variation, Permutation, Recherche-Vorarbeit |
| Auswahl, Ausschluss, Urteil | Methodenwahl und -anwendung | Ausführung in Code, 3D, Satz |
| Bedeutung, Kontext, Verantwortung | Kritik gegen benannte Kriterien | Prüfen, Messen, Dokumentieren |

Agenten treffen keine Geschmacks- oder Bedeutungsentscheidung stillschweigend.
Sie legen Optionen mit Begründung vor.


## Zusammenarbeit mit dem Menschen

Der Mensch will gestalten und mit dem Agenten den Entwicklungsstand
durchgehen — nicht Technik bedienen. Deshalb:

- **`stand.md` ist die gemeinsame Übersicht:** aktueller Stand, letzte
  Änderungen mit Rückgängig-Hinweis, offene Punkte, nächste Schritte. Nach
  jeder Arbeitseinheit aktualisieren.
- **Offene Punkte und Unsicherheiten** werden dort und im Gespräch sichtbar
  gemacht — als höchstens vier Fragen in Alltagssprache mit Empfehlung.
- Keine Bitten um Klicks, Reviews oder Git-Handgriffe, die der Agent selbst
  erledigen kann. Braucht es den Menschen technisch (Anmeldung, Bestätigung
  auf dem Handy), sagt der Agent genau, warum.
- Technische Details stehen im Pull Request für alle, die sie sehen wollen.
- **Kein Wissen nur im Chat** (`decisions/0024`): Recherchen, Bewertungen,
  Messungen und Empfehlungen landen im selben Arbeitsschritt im Repo
  (Experiment, `research/`, Radar, Fachpaket; sonst
  `research/gespraeche/`). Antworten nennen die Fundstelle. An natürlichen
  Einschnitten empfiehlt der Agent einen neuen Chat und schreibt vorher
  den Merkzettel seines Themas in `anschluss/` fort.


## Anforderungen annehmen

Anforderungen kommen als GitHub-Issue (Vorlage „Anforderung“) oder im Chat.
Issues schreiben, ordnen, übergeben, teilen und schließen: Skill `issue`.
Vorgehen: kurz spiegeln, was verstanden wurde und welche Annahme gilt →
umsetzen → PR mit Bezug zum Issue (`Closes #n`). Bei echter Mehrdeutigkeit
mit großem Aufwand: eine gezielte Rückfrage, sonst vernünftige Annahme
sichtbar machen.


## Wo was liegt

| Ort | Inhalt |
|---|---|
| `intent.md` | **Maßstab**: Intent, Ziel, Anforderungen A01–A34 — jede Arbeit prüft dagegen |
| `verknuepfung.md` | erzeugt: welche Entscheidung und welcher Skill welcher Anforderung dient, was fehlt |
| `manifest.md` | **Leitprinzip**: Gestaltung dient — Wahrnehmung, Kognition, Kontext |
| `principles.md` | Haltung, Prinzipien, Herkunft |
| `stand.md` | Entwicklungsstand: Änderungen, offene Punkte, nächste Schritte |
| `anschluss/` | ein Merkzettel je aktivem Thema: Stand, nächster Schritt, offene Fragen (0029) |
| `decisions/` | strukturelle Entscheidungen mit Status (Vorschlag → freigegeben → gültig → abgelöst) |
| `.agents/skills/` | Methoden und Abläufe als Skills (SKILL.md) |
| `studies/<jjjj-mm-slug>/` | Studien: `index.html` + `study.md` |
| `experiments/` | ein Eintrag pro Experiment: Hypothese, Ergebnis, behalten/verwerfen |
| `radar.md` | beobachtete Werkzeuge und Entwicklungen |
| `system/` | Modul „System“: Prinzipien für Design-Systeme (`prinzipien.md`) und Lab-Tokens (DTCG) |
| `research/` | Rechercheaufträge, Befunde, Einordnungen |
| `corpus/` | Literaturverweise, Normdaten — keine Volltexte |
| `evals/` | Prüffälle, um Modell- und Werkzeugwechsel zu bewerten |
| `tools/` | Build-Skripte ohne Abhängigkeiten |

