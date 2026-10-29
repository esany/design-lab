# design-lab — Arbeitsvertrag für Agenten

Diese Datei gilt für jeden Agenten (Claude, Codex, Gemini, Goose …). Sie ist
kurz, weil sie immer geladen wird. Wissen steht in den Skills unter
`.agents/skills/`, Haltung in `principles.md`.

## Start jeder Sitzung

Gilt für jedes Modell und jedes Werkzeug, mit oder ohne Repo-Zugang.

1. **Das Labor ist das GitHub-Repo `esany/design-lab`**
   (https://github.com/esany/design-lab), Zweig `main`. Lokale Ordner, Cloud-Speicher und
   Projektdateien sind nicht das Labor.
2. **Kein Zugang zum Repo?** Den Zugang im eigenen Werkzeug herstellen (Repo hinzufügen oder
   klonen, GitHub-Connector) oder die öffentliche Seite lesen:
   https://github.com/esany/design-lab/blob/main/stand.md. Geht beides nicht: genau das sagen
   und aufhören. Nicht anderswo suchen und nicht raten.
3. **Lesen:** diese Datei, dann `stand.md`, Abschnitt „Themen“. Nennt der Mensch ein Thema:
   nur dessen Merkzettel in `anschluss/` lesen. Nennt er keins: die aktiven Themen mit je einem
   Satz nennen und fragen, welches gemeint ist (Regel 0029).
4. **Melden, nicht loslegen:** in höchstens zwei Sätzen den Stand und den nächsten Schritt
   nennen, mit Zuständigkeit. Dann auf den Auftrag warten.
5. **Arbeiten nur mit Auftrag.** Ein Auftrag ist entweder
   - eine Aufgabe, die der Mensch im Chat nennt, oder
   - ein offenes Issue mit dem Label des eigenen Werkzeugs (`an:claude`, `an:codex`,
     `an:chatgpt`, `an:gemini`), das der Mensch freigibt („weiter“, „mach #n“).
   Issues mit fremdem Label oder `an:mensch` fasst ein Modell nicht an.
6. **Orchestrierung:** Claude verteilt die Arbeit, indem es Issues schreibt und ihnen ein
   Label gibt (Entscheidung des Eigentümers, 28.10.). Andere Modelle schlagen Aufgaben vor,
   verteilen sie aber nicht.
7. **Ende der Sitzung:** abgleichen, den Merkzettel des eigenen Themas in `anschluss/`
   fortschreiben (der Kopf erzeugt die Zeile in `stand.md`). Fremde Merkzettel nicht anfassen
   (Regeln 0024, 0029).

Anweisung, die der Mensch einmal je Werkzeug einträgt (sie ändert sich nicht mehr; alles
Weitere regelt dieser Abschnitt):

> Wenn es um Gestaltung, das Labor oder design-lab geht: Das Labor ist das GitHub-Repo esany/design-lab (https://github.com/esany/design-lab). Lies zu Beginn AGENTS.md und befolge den Abschnitt „Start jeder Sitzung“.

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

## Schreibregeln (verbindlich)

1. **Nie direkt auf `main`.** Jede Änderung auf einem eigenen Branch
   (`lab/<thema>`) und als Pull Request — eine Änderung, ein Thema, damit sie
   einzeln rückgängig gemacht werden kann.
2. **Selbst übernehmen (mergen) darf der Agent**, wenn alles zutrifft:
   - die Änderung liegt im Rahmen freigegebener Anforderungen, Prinzipien und
     Entscheidungen;
   - alle automatischen Prüfungen sind grün;
   - die Änderung ist in `stand-verlauf.md` eingetragen (was · warum · wie rückgängig;
     geprüft durch „Stand gegen GitHub“).
   **Zum Menschen** gehen stattdessen — als Frage, nicht als Review-Auftrag:
   offene Punkte und Unsicherheiten; Gestaltungs- und Bedeutungsentscheidungen;
   neue Regeln oder Prinzipien; alles schwer Umkehrbare (Löschen, Sichtbarkeit,
   Kosten, Konten, externe Dienste, Sicherheit). Der Mensch ist kein
   Durchreicher für Klicks.
3. **Autonomie nach Umkehrbarkeit:**
   - frei: `studies/`, `experiments/`, `radar.md`, `corpus/`, `stand.md`, `stand-verlauf.md`
   - nur mit Rückfrage, wenn es Haltung oder Regeln ändert: `principles.md`,
     `AGENTS.md`, `.agents/skills/`, `system/`, `.github/`
4. Nichts löschen, was nicht im eigenen Branch entstanden ist. Veraltetes
   wird markiert oder nach `archive/` verschoben.
5. Keine Geheimnisse, keine personenbezogenen Daten, keine Kundendaten,
   keine urheberrechtlich geschützten Werke oder PDFs ins Repo. Das Repo ist
   öffentlich einsehbar.
6. Jede strukturelle Entscheidung (Regel, Werkzeug, Gestaltung des Labors,
   Automatisierung) bekommt eine Datei in `decisions/`. Gültig wird sie durch
   die Antwort des Menschen; der Agent trägt sie ein. Kopf: `perspektive:` (system, fach,
   gebrauch); Aufbau nach `decisions/VORLAGE.md` mit Alternativen und Folgen (0030).
7. **Rückgängig:** Sagt der Mensch „X rückgängig“, erstellt der Agent einen
   Revert als eigenen Pull Request und vermerkt ihn in `stand-verlauf.md`.
8. Nach Änderungen an `system/` oder `studies/`: `node tools/build.mjs`
   ausführen und das Ergebnis mit committen.
9. **Jede Entscheidung und jeder Skill nennt im Kopf `dient: A..`**, also die
   Anforderung(en) aus `intent.md`. Der Build prüft das und erzeugt daraus
   `verknuepfung.md` (A33).

## Prüfen vor dem Handeln

Vor jeder größeren Arbeit, kurz und sichtbar (im PR oder Gespräch):

- **Wahrnehmungssituation zuerst** ([`manifest.md`](manifest.md)): Medium,
  Publikum, Abstand, Zeit, Licht, Umgebung. Unklares wird als begründete
  Annahme notiert. Kostet eine ästhetische Abweichung Lesbarkeit, legt der
  Agent sie als Option mit benanntem Risiko vor.
- **Werk oder System?** (Prinzip 9) — getrennt ausweisen, getrennt bewerten.
- **Ziel, Gegenstand, Umfang, Grenzen, Abnahme** — woran ist „fertig“ erkennbar?
  Bezug zu `intent.md` nennen.
- **Einordnung** (aus D3sign D-029): `jetzt umsetzen` · `Pilot` · `bewusst
  bewahren` · `derzeit nicht relevant` · `verwerfen` — mit Nutzen, Aufwand,
  Folge des Nichtstuns.
- **Widerspruch ist Pflicht** (D-017): Ist eine Idee redundant,
  überdimensioniert oder zielwidrig, sagt der Agent das — auch wenn der Mensch
  sie vorschlägt. Zustimmung allein ist keine Leistung.
- **Quelle vor Werkzeug:** kleinstes passendes Arbeitsobjekt, minimal
  ausreichender Kontext.
- **Perspektive** (D-009): Kritik und Prüfung können bewusst aus einer Rolle
  geschehen (Gestaltung, Technik, Vermittlung, Prüfung) — die Rolle steuert den
  Blick, nicht die Befugnis.

## Evidenz und Verlässlichkeit

Jede Aussage über die Welt trägt einen Status:

- **belegt** — mit wörtlichem Zitat oder Datensatz und Fundstelle
- **abgeleitet** — begründete Folgerung aus Belegtem
- **nicht belegt** — Vermutung; so markieren, nie als Fakt ausgeben

Fakten zu Personen, Werken, Daten und Zitaten nur mit Quelle (Normdaten:
Wikidata, Getty ULAN/AAT; Primärquellen; Zotero). „Weiß ich nicht“ ist eine
gültige Antwort. Details: Skill `belegpflicht`.

Werkzeug-Ergebnisse tragen den feineren Status: `sichtbar` · `abgeleitet` ·
`getestet` · `fehlgeschlagen` · `nicht getestet` · `nicht nachgewiesen` ·
`blockiert`. Ein einzelner Fehlschlag ist keine allgemeine Werkzeuggrenze.

Ergebnisse, die sich erzeugen lassen, werden erzeugt statt behauptet:
rendern, ansehen (Screenshot), messen. Passt ein Werkzeug nicht: stoppen und
die Lücke benennen, nicht simulieren (Prinzip 11).

Neue Werkzeuge, Projekte und fremde Skills werden über den Skill `fundstueck`
bewertet, bevor etwas davon übernommen wird.

## Qualitätsschleife

```
Spezifikation (Mensch) → Erzeugen (Agent A) → Rendern/Screenshot
→ Prüfen gegen gewählte Methode (möglichst anderes Modell)
→ Urteil (Mensch) → behalten / verwerfen → Eintrag in experiments/
```

Ein Agent bewertet seine eigene Arbeit nicht als „bestanden“. Er beschreibt,
was er geprüft hat und was nicht.

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

## Definition of Done für einen PR

- Zweck in einem Satz, Bezug zu Issue **und** Anforderung (A..)
- was erzeugt, was geprüft (wie), was nicht geprüft
- Screenshot bei visuellen Ergebnissen
- `node tools/build.mjs` ohne Fehler; keine Änderungen danach offen
- offene Fragen an den Menschen als Liste, höchstens drei
