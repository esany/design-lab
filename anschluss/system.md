# Thema: Das System in Ordnung bringen

**Zuletzt fortgeschrieben:** 29.10.2026 (Claude)

## In Worten

**Wo wir stehen:** Bevor wieder gestaltet wird, bringen wir die offenen Aufgaben des Systems in
Ordnung. So hat der Eigentümer es entschieden. Es gibt keinen Termin bis Ende November, die
Schritte laufen nacheinander.

**Heute entschieden:**
- Die Spielregeln für Aufträge gelten: Ist ein Modell dran? Ist alles da? Woran sieht man, dass
  es fertig ist? Fragen kommen in Alltagssprache.
- Die Untersuchung der Fehler startet, aber **nur über die Modelle**, nicht über die
  Zusammenarbeit oder die Arbeitsweise des Eigentümers. D3sign war ursprünglich dabei (nur
  Regeln und Prüfberichte); später am Abend auf **ein** Repo eingegrenzt, siehe unten.
- Arbeitsteilung: Gespart wird bei Routinen, nie zu Lasten der Qualität. Aufträge an andere
  Modelle berücksichtigen deren Funktionen und Limits. Ein Auftrag des Eigentümers außerhalb der
  Reihe hat Vorrang.
- Jedes Thema bekommt einen eigenen Merkzettel (diese Datei ist einer).
- **Codex und Work nur in begründeten Fällen**, wenn der normale Chat (Astra) nicht mehr reicht;
  der Auftrag nennt den Grund.

**Antworten des Eigentümers (28.10., spätabends):**
- Aufräumen: ja, **mit Sonnet** (der Eigentümer stellt um).
- Die drei fertigen Vorlagen übernehmen: Audit-Antwort, dann Sicherung der Werke, dann
  Verknüpfung. Jede einzeln.
- **Astra (ChatGPT-Chat) kann ins Labor schreiben.** Branches löschen kann es nicht, und auf
  die lokalen Ordner des Eigentümers kommt es nicht.
- Untersuchung der Modellfehler: **zurückgestellt**. Danach wird nur **ein** Repo gelesen:
  Wissensarbeit.
- Welche Aufträge an Astra oder Codex gehen, entscheidet der Orchestrator (siehe unten).

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
- **Zurückgestellt und danach geschlossen** (nicht geplant, nichts gelöscht) sind Farbkontrast, Prüffälle mit zweitem Modell und die Prüfung der Studie.
  Damit gehen vorerst keine Aufträge an Codex.
- **Astra** bekommt die Recherche zum Möglichkeitsraum (Thema „Möglichkeitsraum“) und, wenn der
  Eigentümer es sagt, die Freigabehinweise. Begonnen wird erst auf sein „mach“.
- Die **Untersuchung der Modellfehler** liest nur Wissensarbeit (und die Fehlerberichte dieses
  Labors). Sie bleibt zurückgestellt.
- Der **Hauptzweig-Schutz** kommt später. Bis dahin prüft Claude vor jedem Commit den Zweig.

**Am Ende des Tages erledigt:**
- Entscheidungen haben jetzt eine Perspektive (System, Fach, Gebrauch), Folgen und Alternativen
  (0030). Die Frage nach einem `docs/`-Verzeichnis ist als eigener Auftrag gesichert und wartet auf
  die Recherche zum Möglichkeitsraum.
- Das Auftragsformat für kleinere Modelle steht im Skill. Codex und Work bekommen nur in
  begründeten Fällen einen Auftrag, wenn der normale Chat nicht reicht.
- Kontrast, Prüffälle und die Prüfung der Studie sind geschlossen (nicht geplant, nichts gelöscht).
- Der Auftrag „Aufträge besser schreiben“ wartet auf die Untersuchung, die zurückgestellt bleibt.
- Prüfung auf Wissensmonopole: `research/gespraeche/2026-10-28-wissensmonopole.md`.

**29.10.:** Die Untersuchung der Modellfehler ist fertig (`research/2026-10-audit-zusammenarbeit/befunde.md`). Die Fehler hängen kaum am Modell. Fünf Muster: Lesart still aufgelöst, Stand aus dem Chat, eigene Regeln nicht befolgt, zu starke Aussagen, zu viel Befugnis. Wissensarbeit hat auf Fehler mit immer mehr Regeln und Reviews geantwortet, und das Labor ist auf demselben Weg. Vorschlag: weniger Text, eine Stelle für den Stand, Sperren statt Sätze (`auftraege.md`, mit Zuständigkeit). Astra liest gegen (#100). Dazu das Audit der Lesekosten (`research/2026-10-lesekosten/befund.md`).

**Was du entscheidest (vier Fragen in `auftraege.md`):** Hauptzweig jetzt schützen? Regelpause bis zur Regelprüfung? Regeln prüfen vor Modellprofilen? „Eine Uhr“ für den Stand an Astra, sobald #41 zeigt, dass Astra Branch und PR kann?

**Danach, in dieser Reihenfolge:** Modelle kennen und Aufträge besser schreiben (beides
parallel) → Regeln prüfen → Sparmaßnahmen mit Messung → Hilfe beim Entwerfen.

**Offene Fragen an den Eigentümer:**
- Soll Astra die Recherche zum Möglichkeitsraum übernehmen? Sag dafür „mach #49“ in einem Chat
  mit Astra. Genauso bei den Freigabehinweisen („mach #41“).
- Sobald du es willst: Hauptzweig schützen (zwei Minuten Klicks) und die Untersuchung starten.

<details><summary>Für die Modelle: Nummern und Lehren</summary>

- **Führendes Issue:** #62 (`an:claude`, Plan; Fragen beantwortet: 1 ja, 2 B, 3 A, danach
  auf ein Repo eingegrenzt). Kette wartet auf #56: #57 und #59 (beide von #56), #58 (#56, #57),
  #60 (#57, #59), #61 (#56, #49).
- #56 (`entwurf`, zurückgestellt): Gegenstand nur `esany/Wissensarbeit` und die Fehlerberichte
  dieses Labors. D3sign, Portfolio, pflege-arnshaugk-historie vorerst draußen.
- #49 → `an:chatgpt` (Dient A04, A07, A29), beginnt auf „mach #49“. #41 `an:chatgpt`, ohne
  Blocker, beginnt auf „mach #41“. #42, #43, #44 geschlossen (nicht geplant, 28.10., Anweisung des Eigentümers; Text lesbar, wieder öffnen möglich).
- Alle Pull Requests übernommen (0025, 0026, 0027, 0028, 0029; Verknüpfung A31–A34).
- #40 (`an:mensch`): Klicks für den Branch-Schutz, jetzt mit „Fertig, wenn“. #39 geschlossen
  (Sicherungs-Repo ist `esany/werke`). #77 offen (Bug „nachziehen“, dazu
  zweiter Fall: Schreiben direkt auf `main`).
- Erledigt am 28.10.: Skill `issue` (#38), 0029 (#67), Anschluss in Worten (#71), #50, #51, #53,
  #52, #55, #65, #31.
- Lücken bei Abnahmen: ruhende Aufträge #8, #9, #23, #24, #26, #27 haben keine Ausgabe oder kein
  „Fertig, wenn“. Beim Wiederaufnehmen schärfen.
- Triage und Auftragsformat für kleinere Modelle:
  `research/gespraeche/2026-10-28-triage-modelle.md`.
- Lehren: Bei Sammelbegriffen („die Issues zum Werk“) vorher die Liste nennen und bestätigen lassen, besonders bei Schließen (#77, 28.10.); Lesart spiegeln (#55); Vorarbeit in `research/2026-10-issue-arbeit/` ist kein Eingang;
  ein Zitat ist keine Freigabe; vor jeder Liste abgleichen und zuerst im Repo sichern (#65);
  Meldungen in Worten, Fragen als Auswahl (#71); „nachziehen“ ist kein Startsignal (#77); vor
  jedem Commit den Zweig prüfen.
</details>
