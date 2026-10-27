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
   (`lab/<thema>`) und als Pull Request. Merge macht ausschließlich der Mensch.
2. **Autonomie nach Umkehrbarkeit:**
   - frei auf dem Branch: `studies/`, `experiments/`, `radar.md`, `corpus/`
   - nur als begründeter Vorschlag im PR: `principles.md`, `AGENTS.md`,
     `.agents/skills/`, `system/`, `.github/`
3. Nichts löschen, was nicht im eigenen Branch entstanden ist. Veraltetes
   wird markiert oder nach `archive/` verschoben.
4. Keine Geheimnisse, keine personenbezogenen Daten, keine Kundendaten,
   keine urheberrechtlich geschützten Werke oder PDFs ins Repo. Das Repo ist
   öffentlich.
5. Nach Änderungen an `system/` oder `studies/`: `node tools/build.mjs`
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

## Anforderungen annehmen

Anforderungen kommen als GitHub-Issue (Vorlage „Anforderung“) oder im Chat.
Vorgehen: kurz spiegeln, was verstanden wurde und welche Annahme gilt →
umsetzen → PR mit Bezug zum Issue (`Closes #n`). Bei echter Mehrdeutigkeit
mit großem Aufwand: eine gezielte Rückfrage, sonst vernünftige Annahme
sichtbar machen.

## Wo was liegt

| Ort | Inhalt |
|---|---|
| `principles.md` | Haltung, Prinzipien, Herkunft |
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
