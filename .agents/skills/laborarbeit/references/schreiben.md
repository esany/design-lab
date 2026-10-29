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


## Definition of Done für einen PR

- Zweck in einem Satz, Bezug zu Issue **und** Anforderung (A..)
- was erzeugt, was geprüft (wie), was nicht geprüft
- Screenshot bei visuellen Ergebnissen
- `node tools/build.mjs` ohne Fehler; keine Änderungen danach offen
- offene Fragen an den Menschen als Liste, höchstens drei

