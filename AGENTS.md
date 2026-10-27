# design-lab — Arbeitsvertrag für Agenten

Diese Datei gilt für jeden Agenten (Claude, Codex, Gemini, Goose …). Sie ist
kurz, weil sie immer geladen wird. Wissen steht in den Skills unter
`.agents/skills/`, Haltung in `principles.md`.

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
   - die Änderung ist in `stand.md` eingetragen (was · warum · wie rückgängig).
   **Zum Menschen** gehen stattdessen — als Frage, nicht als Review-Auftrag:
   offene Punkte und Unsicherheiten; Gestaltungs- und Bedeutungsentscheidungen;
   neue Regeln oder Prinzipien; alles schwer Umkehrbare (Löschen, Sichtbarkeit,
   Kosten, Konten, externe Dienste, Sicherheit). Der Mensch ist kein
   Durchreicher für Klicks.
3. **Autonomie nach Umkehrbarkeit:**
   - frei: `studies/`, `experiments/`, `radar.md`, `corpus/`, `stand.md`
   - nur mit Rückfrage, wenn es Haltung oder Regeln ändert: `principles.md`,
     `AGENTS.md`, `.agents/skills/`, `system/`, `.github/`
4. Nichts löschen, was nicht im eigenen Branch entstanden ist. Veraltetes
   wird markiert oder nach `archive/` verschoben.
5. Keine Geheimnisse, keine personenbezogenen Daten, keine Kundendaten,
   keine urheberrechtlich geschützten Werke oder PDFs ins Repo. Das Repo ist
   öffentlich einsehbar.
6. Jede strukturelle Entscheidung (Regel, Werkzeug, Gestaltung des Labors,
   Automatisierung) bekommt eine Datei in `decisions/`. Gültig wird sie durch
   die Antwort des Menschen; der Agent trägt sie ein.
7. **Rückgängig:** Sagt der Mensch „X rückgängig“, erstellt der Agent einen
   Revert als eigenen Pull Request und vermerkt ihn in `stand.md`.
8. Nach Änderungen an `system/` oder `studies/`: `node tools/build.mjs`
   ausführen und das Ergebnis mit committen.

## Evidenz und Verlässlichkeit

Jede Aussage über die Welt trägt einen Status:

- **belegt** — mit wörtlichem Zitat oder Datensatz und Fundstelle
- **abgeleitet** — begründete Folgerung aus Belegtem
- **nicht belegt** — Vermutung; so markieren, nie als Fakt ausgeben

Fakten zu Personen, Werken, Daten und Zitaten nur mit Quelle (Normdaten:
Wikidata, Getty ULAN/AAT; Primärquellen; Zotero). „Weiß ich nicht“ ist eine
gültige Antwort. Details: Skill `belegpflicht`.

Ergebnisse, die sich erzeugen lassen, werden erzeugt statt behauptet:
rendern, ansehen (Screenshot), messen.

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

## Anforderungen annehmen

Anforderungen kommen als GitHub-Issue (Vorlage „Anforderung“) oder im Chat.
Vorgehen: kurz spiegeln, was verstanden wurde und welche Annahme gilt →
umsetzen → PR mit Bezug zum Issue (`Closes #n`). Bei echter Mehrdeutigkeit
mit großem Aufwand: eine gezielte Rückfrage, sonst vernünftige Annahme
sichtbar machen.

## Wo was liegt

| Ort | Inhalt |
|---|---|
| `intent.md` | **Maßstab**: Intent, Ziel, Anforderungen A01–A27 — jede Arbeit prüft dagegen |
| `principles.md` | Haltung, Prinzipien, Herkunft |
| `stand.md` | Entwicklungsstand: Änderungen, offene Punkte, nächste Schritte |
| `decisions/` | strukturelle Entscheidungen mit Status (Vorschlag → freigegeben → gültig → abgelöst) |
| `.agents/skills/` | Methoden und Abläufe als Skills (SKILL.md) |
| `studies/<jjjj-mm-slug>/` | Studien: `index.html` + `study.md` |
| `experiments/` | ein Eintrag pro Experiment: Hypothese, Ergebnis, behalten/verwerfen |
| `radar.md` | beobachtete Werkzeuge und Entwicklungen |
| `system/tokens/` | Design-Tokens (DTCG) des Labors selbst |
| `corpus/` | Literaturverweise, Normdaten — keine Volltexte |
| `evals/` | Prüffälle, um Modell- und Werkzeugwechsel zu bewerten |
| `tools/` | Build-Skripte ohne Abhängigkeiten |

## Definition of Done für einen PR

- Zweck in einem Satz, Bezug zu Issue oder Anforderung
- was erzeugt, was geprüft (wie), was nicht geprüft
- Screenshot bei visuellen Ergebnissen
- `node tools/build.mjs` ohne Fehler; keine Änderungen danach offen
- offene Fragen an den Menschen als Liste, höchstens drei
