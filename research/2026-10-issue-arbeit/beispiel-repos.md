# Beispiel-Repos des Eigentümers — was wir übernehmen, was nicht

Anlass: Issue #31, „zuerst ansehen, dann bauen“. Gelesen am 28.10.2026 (Wissensarbeit,
pflege-arnshaugk-historie; beide öffentlich, Stand `main`). Bewertung nach Skill `fundstueck`.
Status der Aussagen: **belegt** (steht in den Dateien) oder **abgeleitet** (meine Folgerung).

## Was dort steht (belegt)

| Muster | Wo | Kern |
|---|---|---|
| „Chat ist Werkstatt. GitHub ist Projektgedächtnis.“ | `AGENTS.md` beider Repos | Fortsetzung darf nie nur im Chat hängen; neuer Bearbeiter rekonstruiert alles aus dem Repo |
| Pflicht-Bootstrap in fester Reihenfolge | `AGENTS.md`, `README.md`, `PROJECT_STATE.md` | AGENTS → Stand → README → zuständiges Issue → verlinkte Artefakte |
| Capability-first | `pflege-arnshaugk-historie/AGENTS.md` §2.1 | erst prüfen, was der aktuelle Kontext schon kann; Handoff nur bei konkretem Mehrwert (Handoff kostet Kontext) |
| Kostenprinzip | `Wissensarbeit/AGENTS.md` | lesen, was da ist → deterministisch prüfen → erst dann Modelllauf; größere Posten vorher mit Zahl nennen |
| Issue-Vorlage in Alltagssprache | `Wissensarbeit/.github/ISSUE_TEMPLATE/work-item.yml` | Felder: Typ, „Was ist das Problem?“, „Warum wichtig?“, Belege, Unsicherheit, „Wie sähe ein brauchbares Ergebnis aus?“; ausdrücklich keine Lösungsvorgabe |
| Ergebnisse als Kandidaten | `Wissensarbeit/README.md` | KI-Ausgabe ist zunächst Kandidat; Übernahme braucht ausdrückliche Autorität |
| Zustand per Skript abgeleitet | `Wissensarbeit/project/CURRENT_STATE.md` | „Generated … Do not maintain parallel truth here“ |

## Was zu design-lab passt (abgeleitet)

1. **Abnahme in menschlicher Sprache, keine Lösungsvorgabe** (Wissensarbeit-Vorlage) — das ist
   genau der Teil, den ein Modell braucht, um „fertig“ zu erkennen. Übernommen in die Vorlage
   „Übergabe“.
2. **Capability-first und „Handoff kostet“** — gleicht unserem Startsatz: Zugang herstellen oder
   sagen, dass er fehlt. Als Prüfpunkt A im Skill `issue` übernommen, ohne neue Regel.
3. **Abgeleiteter Zustand statt Handpflege** — design-lab hat dasselbe Problem im Kleinen:
   die Zahlen in `stand.md` („21 Entscheidungen“, „11 Skills“) waren veraltet (tatsächlich 25
   und 12). Kein neues Skript jetzt; die Zeile wurde korrigiert und führt keine Zählungen mehr.

## Was nicht passt (Widerspruch nach AGENTS.md „Widerspruch ist Pflicht“)

- **Umfang der Governance.** Beide Repos sind für ein Forschungssystem mit Zustandsautomat
  gebaut (Requirement-, Criterion-, Verification-JSONs, Reconciliation, Audit-Skripte,
  Evidence-Reifegrade). design-lab ist ein Labor mit ca. 3.800 Zeilen Text und Code; dieselbe
  Maschinerie wäre das Gegenteil von „keine weitere Governance“ (#31). **Nicht übernommen.**
- **Prompt-Skill mit Codewörtern** (`.prompt`): löst ein anderes Problem (Prompts bauen). Radar,
  nicht integrieren; `fundstueck`-Status: `beobachten`.
- **Reifegradskala, Decision Briefs, Reconciliation-Gate:** nützlich dort, hier Überbau.

## Zur Sicherung der Werke (#25)

**Ungeklärt: das Sicherungs-Repo ist nicht bekannt.** Die Adresse, die der Eigentümer dafür
nannte, kam beim Modell als Wiederholung der Beispiel-Repo-Adresse an (Bug #39). Welches Repo
gemeint war, ist *nicht belegt* und wird nicht geraten.

Unabhängig davon, als Beobachtung zu genau einem Repo: `pflege-arnshaugk-historie` gilt laut
Antwort des Werkzeugs `add_repo` (28.10.2026) als öffentlich. Eine eigene Gegenprobe war nicht
möglich (Webzugriff aus der Sitzung: 403). Für Flyer-Werkdateien und Lizenzschriften gilt
`AGENTS.md` Regel 5; das sagt nichts darüber, wo der Eigentümer sichern will.
Prüfung eines weiteren Kandidaten: `research/2026-10-sicherung/portfolio-pruefung.md`.
