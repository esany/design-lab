# Thema: Das System in Ordnung bringen

**Zuletzt fortgeschrieben:** 28.10.2026, abends (Claude)

## In Worten

**Wo wir stehen:** Bevor wieder gestaltet wird, bringen wir die offenen Aufgaben des Systems in
Ordnung. So hat der Eigentümer es entschieden. Es gibt keinen Termin bis Ende November, die
Schritte laufen nacheinander.

**Heute entschieden:**
- Die Spielregeln für Aufträge gelten: Ist ein Modell dran? Ist alles da? Woran sieht man, dass
  es fertig ist? Fragen kommen in Alltagssprache.
- Die Untersuchung der Fehler startet, aber **nur über die Modelle**, nicht über die
  Zusammenarbeit oder die Arbeitsweise des Eigentümers. D3sign gehört dazu, aber nur seine
  Regeln und Prüfberichte, keine Kundeninhalte.
- Arbeitsteilung: Gespart wird bei Routinen, nie zu Lasten der Qualität. Aufträge an andere
  Modelle berücksichtigen deren Funktionen und Limits. Ein Auftrag des Eigentümers außerhalb der
  Reihe hat Vorrang.
- Jedes Thema bekommt einen eigenen Merkzettel (diese Datei ist einer).

**Antworten des Eigentümers (28.10., spätabends):**
- Aufräumen: ja, **mit Sonnet** (der Eigentümer stellt um).
- Die drei fertigen Vorlagen übernehmen: Audit-Antwort, dann Sicherung der Werke, dann
  Verknüpfung. Jede einzeln.
- **Astra (ChatGPT-Chat) kann ins Labor schreiben.** Branches löschen kann es nicht, und auf
  die lokalen Ordner des Eigentümers kommt es nicht.
- Untersuchung der Modellfehler: **zurückgestellt**. Danach wird nur **ein** Repo gelesen.
  Welches, wird noch festgelegt.
- Welche Aufträge an Astra oder Codex gehen, ist noch nicht entschieden.

**Aufgeräumt am 28.10. (Sonnet):**
- Die drei Vorlagen sind übernommen, jede einzeln: Audit-Antwort (0028, 0027), Sicherung der
  Werke (0026), Verknüpfung von Anforderungen mit Regeln. Dabei Konflikte aufgelöst und die
  Verknüpfung neu erzeugt.
- Der Kreis bei den Prüffällen war schon aufgelöst: Die Issue-Arbeit ist geschlossen.
- Drei Fehlerberichte sind geschlossen, ihr Inhalt als Fallmaterial in die Aufträge übertragen.
  Der Plan liegt jetzt bei Claude, weil seine Fragen beantwortet sind.
- „Freigabehinweise angleichen“ wartet nicht mehr auf deine Klicks, nur noch auf dein „mach“.
- Für die vier Aufträge an Astra und Codex gibt es einen Zuschnitt (Kommentare in den Aufträgen).
  Zwei sind für kleinere Modelle zu groß und sollen geteilt werden. Verteilt ist nichts.

**Entschieden am 28.10. (spätabends):**
- Die **Zuordnung der Aufträge** entscheidet der Orchestrator (Claude), nicht der Eigentümer.
- **Zurückgestellt** sind Farbkontrast, Prüffälle mit zweitem Modell und die Prüfung der Studie.
  Damit gehen vorerst keine Aufträge an Codex.
- **Astra** bekommt die Recherche zum Möglichkeitsraum (Thema „Möglichkeitsraum“) und, wenn der
  Eigentümer es sagt, die Freigabehinweise. Begonnen wird erst auf sein „mach“.
- Die **Untersuchung der Modellfehler** liest nur Wissensarbeit (und die Fehlerberichte dieses
  Labors). Sie bleibt zurückgestellt.
- Der **Hauptzweig-Schutz** kommt später. Bis dahin prüft Claude vor jedem Commit den Zweig.

**Danach, in dieser Reihenfolge:** Modelle kennen und Aufträge besser schreiben (beides
parallel) → Regeln prüfen → Sparmaßnahmen mit Messung → Hilfe beim Entwerfen.

**Offene Fragen an den Eigentümer:**
- Soll Astra die Recherche zum Möglichkeitsraum übernehmen? Sag dafür „mach #49“ in einem Chat
  mit Astra. Genauso bei den Freigabehinweisen („mach #41“).
- Sobald du es willst: Hauptzweig schützen (zwei Minuten Klicks) und die Untersuchung starten.

<details><summary>Für die Modelle: Nummern und Lehren</summary>

- Aufräumliste (erledigt) = Triage `research/gespraeche/2026-10-28-triage-modelle.md`,
  Abschnitt „Was bei Claude liegt“: PRs #48 → #47 → #54; #31 schließen, Abhängigkeit #43←#31
  entfernen; #55, #65, #52 schließen (Fallmaterial #56/#43); #62 → an:claude; #41: blocked_by
  #40 ersetzen durch Bezug auf PR #48; #56 bleibt `entwurf` (zurückgestellt); Bug #77 offen.
- **Führendes Issue:** #62 (freigegeben: 1 ja, 2 B, 3 A; Kommentare dort).
- #56 auf „nur Modelle“ zugeschnitten. Gegenstand: Wissensarbeit, pflege-arnshaugk-historie,
  Portfolio (ohne `self-observation/`), D3sign (nur Regeln und Prüfberichte), design-lab.
  Danach #57 und #59, dann #58, #60, #61.
- Erledigt am 28.10.: PR #38 (Skill `issue`), #53 → 0025 gültig, #67 → 0029, #71
  (Anschluss in Worten), #50, #51.
- Offene PRs: #48 (0027, 0028), #47 (0026), #54 (A31–A34; nach #48 und #47 übernehmen).
- #40 an:mensch (Klicks) → blockiert #41 (an:chatgpt). #65 Ursache, Maßnahme aus #56. #31 offen
  bis Prüffall `evals/uebergabe` (#43). #52 ist Fall für #43.
- Lehren: Lesart spiegeln (#55); die Vorarbeit in `research/2026-10-issue-arbeit/` ist kein
  Eingang für #56/#57; ein Zitat ist keine Freigabe; vor jeder Liste abgleichen und zuerst im
  Repo sichern (#65); Meldungen an den Eigentümer in Worten, Fragen als Auswahl (#71).
- Lagebild: `research/gespraeche/2026-10-28-lagebild.md`. Audit von Astra:
  `research/2026-10-audit-astra/`.
</details>
