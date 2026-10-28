# `esany/Portfolio` als Sicherung der Werke — Prüfung

Anlass: #25 (Sicherung der Werke), Bug #39. Auftrag des Eigentümers, 28.10.2026: prüfen, ob das
Repo als Sicherung taugt und welche Erweiterungen nötig wären, **ohne Intent und Zielstellung des
Labors zu gefährden** (`intent.md`). Gelesen: `main` @ `f12696d`, 65 Dateien (56 `.md`, 7 `.json`,
2 `.example`), 523 KB laut GitHub. Status je Aussage: **belegt** · **abgeleitet** · **nicht getestet**.

**Was „Sicherung“ hier heißt** (Wortlaut #25): Werkdateien mit fremden Inhalten — Flyer-Quellen,
PDFs, Vergleiche, Protokolle — im privaten Repo sichern; Schriften bleiben nur beim Eigentümer.
Bedient A16 (Vertraulichkeit) und A19 (rückgängig). Zwischensicherung: ZIP beim Eigentümer.

## Was das Repo ist (belegt)

Ein **Wissensraum zur Rekonstruktion deines beruflichen Werks** (`README.md`, `PROJECT_MODEL.md`):
Works, Contribution, Quellen, Self-Observation, Praxis/Kompetenzen, daraus abgeleitete
Bewerbungsdarstellungen. Intent dort: ein „belastbares, widerspruchsfähiges“ Verständnis der eigenen
Praxis (§1). Es ist **keine Dateiablage**: Works liegen nur als Issue (`works/README.md`: Ordner erst,
wenn Material Issues „insufficient“ macht), Bücher/PDFs werden referenziert, nicht gespeichert
(`source.json`: `binary_in_repo: false`). Es enthält persönliche Einschätzungsmaterial
(`self-observation/README.md`, CliftonStrengths).

## Prüfung gegen die Anforderungen des Labors

| Nr. | Kriterium | Befund | Status |
|---|---|---|---|
| K1 | **Vertraulich** (A16) | Privat: GitHub-API `private: true`; anonymer Webzugriff 404 | **belegt** |
| K2 | **Agent kann lesen und schreiben, Mensch ohne Git** (A14, A18) | Lesen: ja (Sitzung hat geklont). Schreiben (`add_repo` mit `push`): nicht versucht, die Werkzeug-Antwort sagt „may still refuse“ | Lesen **belegt**, Schreiben **nicht getestet** |
| K3 | **Binärdateien** (Druck-PDF, Bilder) | Heute nur Text; keine `.gitattributes`, kein LFS, keine Größenregel. Die einzige Binärregel („nicht speichern“) gilt für Quellen und widerspricht dem Zweck einer Sicherung | **belegt** |
| K4 | **LFS als Ausweg** | Die Sitzung kann LFS-Objekte über den Lesezugang nicht holen (Werkzeug-Antwort von `add_repo`). Ob es mit Schreibzugang geht, ist offen. Wären Werkdateien in LFS, könnte ein Agent sie womöglich nicht lesen | Aussage des Werkzeugs **belegt**, Folge **abgeleitet** |
| K5 | **Fremde Inhalte und Rechte** (Regel 5, A16) | Konzept da: Einschränkung C06, Anforderung R13, `rights`-Block im Quellen-Schema. Ablauf dafür ist „zurückgestellt bis zu einem echten Fall“ (`PROGRAMME.md` P7). Schriften brauchen eine eigene Regel „nie ablegen“ | Konzept **belegt**, Ablauf **nicht vorhanden** |
| K6 | **Wenig Aufwand, keine weitere Governance** (Zielstellung, #31) | Portfolio führt 12 ADRs, Requirement-IDs, ein Programm, Bounded-Issue-Vertrag. Werke dort ablegen hieße entweder diesen Ablauf übernehmen oder eine Ausnahme einbauen | **belegt** (Dateien); Last **abgeleitet** |
| K7 | **Rückgängig, nachvollziehbar** (A19) | Git ja. Kein `.github`: keine Prüfung, keine Vorlagen. Ob `main` geschützt ist: nicht geprüft. Laut `decisions/0001` braucht Branch-Schutz in privaten Repos GitHub Pro | Git **belegt**, Schutz **nicht getestet** |
| K8 | **Unabhängig, kein Lock-in** (A11, Zielstellung) | Ein GitHub-Repo ist keine zweite Kopie neben GitHub; das Labor liegt schon dort. Für „Sicherung“ fehlt eine Kopie außerhalb | **abgeleitet** |
| K9 | **Ein Gedächtnis** (A26, Regel 0024) | Das Labor ist `esany/design-lab` (AGENTS.md). Werke woanders brauchen einen Verweis im Labor, sonst entsteht eine zweite Wahrheit. Portfolio warnt selbst davor | **abgeleitet** |
| K10 | **Zugriffsbreite** | Eine Sitzung bekommt das ganze Repo, nicht einen Ordner. Damit sähe jede Werke-Sitzung auch die Selbstbeobachtung | **abgeleitet** |

## Urteil

- **Als Ort, der Werke beschreibt und einordnet** (wer, welche Rolle, welche Rechte, was
  gelernt): **geeignet**. Das ist sein Zweck. K1, K5 und das Werk-Modell passen.
- **Als Ablage für Werkdateien** (die Sicherung aus #25): **heute nicht geeignet**, wegen K3, K4,
  K6, K10. Mit den Erweiterungen unten geht es, aber nur gegen Kosten bei einem der beiden Repos.

## Drei Wege

| | Weg | Nutzen | Aufwand | Risiko für Intent |
|---|---|---|---|---|
| A | **Werkdateien in Portfolio** (`works/<id>/`) | ein Repo, schon privat | Erweiterungen E1–E6 | Portfolio verliert sein Profil als Wissensraum (QA11 Context Economy); Selbstbeobachtung sichtbar für jede Werke-Sitzung (K10); Governance-Last (K6) |
| B | **Eigenes privates Archiv für Werkdateien, Portfolio verweist** (`work.json`: Titel, Rolle, Rechte, Archivpfad) | beide Repos behalten ihren Zweck; Zugriff schmal | neues Repo + eine Verweisdatei | gering; ein Repo mehr |
| C | **Nur ZIP und zweite Kopie** (Ist-Zustand, regelmäßig) | kein Aufwand im Repo | Handarbeit des Eigentümers | verstößt gegen A18/A23 (Handpflege), nicht gegen den Intent |

**Empfehlung: B**, weil es beide Intents unberührt lässt und K10 löst. **Widerspruch zu A**, solange
nicht klar ist, dass Portfolio sein Werk-Modell um Dateien erweitern *soll* — das ist eine
Entscheidung in diesem Repo, nicht im Labor. Wenn A gewollt ist, gilt:

## Erweiterungen, falls Weg A

Nur das Nötige, in dieser Reihenfolge:

1. **E1 Regel „Werke-Ablage“** in `AGENTS.md` von Portfolio: gilt eigenes Verfahren (nicht ADR-Ablauf),
   Selbstbeobachtung ist für Werke-Aufgaben tabu. Ändert Portfolio-Regeln → Entscheidung dort.
2. **E2 Ordner** `works/<id>/` mit `work.json` (Titel, Rolle, Fremdinhalt ja/nein, Rechte, Schriften nur
   als Verweis) und `files/`.
3. **E3 Binärregel**: Größengrenze je Datei und Gesamtgröße; LFS nur nach Test, dass der Agent die
   Dateien lesen kann (K4).
4. **E4 Schriften-Sperre**: nie `.otf .ttf .woff .woff2 .eot`; ein kleines Prüfskript (oder
   Agentenregel) und eine Liste der Lizenzschriften nur als Namen.
5. **E5 Verweis im Labor**: eine Zeile in `stand.md` („Werke liegen in `esany/Portfolio`,
   Ordner `works/`“), ohne Inhalte.
6. **E6 Zugriff**: Schreibzugang für die Sitzung testen (`add_repo` mit `push`); Rückfall: der
   Agent liefert den fertigen Block, der Eigentümer lädt hoch.

Für **jeden** Weg zusätzlich: **E7 zweite Kopie außerhalb GitHub** (K8), z. B. regelmäßiger
lokaler Klon oder Export durch den Eigentümer. Das kann kein Agent in der Cloud erledigen.

## Was den Intent gefährden würde (Grenzen)

- Portfolio-Verfahren (ADRs, Requirement-IDs) ins Labor holen → verstößt gegen „keine weitere
  Governance“ (#31) und die Zielstellung (minimale Ressourcen).
- `stand.md`, „Anschluss“ oder Entscheidungen aus `design-lab` verlagern → verstößt gegen
  AGENTS.md Regel 1 und A26; das Labor bleibt `design-lab`.
- Schriften oder fremde PDFs ablegen → Lizenz und Regel 5; auch private Cloud-Ablage ist eine
  Weitergabe (nicht belegt, ob die jeweiligen Lizenzen es erlauben: Lizenztexte prüfen).
- Das Labor von einem Schema aus Portfolio abhängig machen → A11, A24 (alles ist Experiment).

## Offen (nicht belegt)

- Ob **dieses** Repo das ist, das der Eigentümer zur Sicherung meinte (Bug #39).
- Größe der Werkdateien (die ZIP liegt beim Eigentümer; Größe unbekannt).
- Ob Portfolio-`main` geschützt ist und welchen GitHub-Tarif der Eigentümer hat.
- Ob LFS-Dateien mit Schreibzugang für Agenten lesbar sind.

## Vergleich im Vorbeigehen

`pflege-arnshaugk-historie`: laut `add_repo`-Antwort öffentlich (eigene Gegenprobe nicht möglich,
der Webzugriff aus der Sitzung gibt 403). Inhalt ist historische Forschung, ebenfalls keine
Dateiablage. Für Werkdateien ungeeignet, solange es öffentlich ist.
