---
status: freigegeben (auf Probe)
auswerten: 2026-12-08
datum: 2026-11-08
entschieden_von: Eigentümer im Chat: „Übernimm alles“ (08.11.)
dient: A19, A26, A34
perspektive: system
---

# 0034 · Verlauf als einzelne Dateien; die Prüfung meldet Rot selbst

`perspektive:` system.

**Anlass:** Am 08.11. stießen parallele Chats dreimal in derselben Zeile von `stand-verlauf.md`
zusammen, jedes Mal musste von Hand aufgelöst werden (*belegt*: Zusammenführungen der
Leitfaden-Sicherung, des Konzeptstands und der automatischen Prüfung). Im Prüffall
neustart-daten meldete kein Modell eine rote Prüfung von sich aus (Aussage a27, *belegt*).

**Entscheidung:**

1. Jede Änderung legt ihren Verlaufseintrag als eigene Datei `verlauf/JJJJ-MM-TT-kurz.md` an,
   mit Titelzeile, „Warum“ und „Rückgängig“. Der Build prüft das Format.
2. `stand-verlauf.md` wird nicht mehr fortgeschrieben und bleibt als Historie. „Stand gegen
   GitHub“ akzeptiert für ältere Branches weiter eine Zeile dort.
3. Ein neuer Job „Rote Prüfung melden“ schreibt bei einem roten Lauf einen Hinweis in den PR, mit
   den roten Prüfungen und einem Link zum Lauf. Bei weiteren roten Läufen aktualisiert er
   denselben Kommentar, statt neue anzuhängen.

**Alternativen:**
- Eine Sammelansicht `verlauf.md` aus den Einzeldateien erzeugen: verworfen. Eine erzeugte
  Sammeldatei ändert sich in jedem PR und kollidiert genauso. Die Ordneransicht auf GitHub
  sortiert die Dateien schon nach Datum.
- Git-Merge-Strategie „union“ für `stand-verlauf.md`: verworfen. Die Zusammenführung auf der
  GitHub-Website beachtet sie nicht (*nicht belegt*, nicht geprüft).
- Rote Prüfung nur als Regel für die Modelle: verworfen. Genau das hat im Prüffall nicht
  getragen (Intent: Verlässlichkeit steckt in der Technik).

**Folgen:** Leichter: Parallele Chats kollidieren nicht mehr im Verlauf, und Rot wird sichtbar,
auch wenn das Modell schon weitergezogen ist. Schwerer: Der Verlauf ist auf viele kleine Dateien
verteilt, eine Gesamttabelle gibt es nur bis zum 08.11. Bei einem Konflikt startet GitHub weiterhin
keine Prüfung, also auch keine Meldung. Geändert: `tools/gitter.mjs`, `tools/build.mjs`,
`tools/gitter-test.mjs` (G5), `.github/workflows/pruefen.yml`, Schreibregeln, Skill `issue`,
`stand.md`, `stand-verlauf.md`, neuer Ordner `verlauf/`.

**Rückgängig:** PR revertieren; `stand-verlauf.md` wieder fortschreiben.
