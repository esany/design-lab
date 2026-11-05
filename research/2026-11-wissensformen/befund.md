---
dient: A04, A05, A07, A08, A14, A15, A21, A23, A26, A27, A31, A33, A34
datum: 2026-11-05
modell: Claude Opus 5.5 (Claude-App, Cloud-Sitzung)
status: Befund, zusammengeführt (#127). Beschlossen sind nur 0032 (Leitfaden) und 0024 neu; alles Weitere wartet auf den Eigentümer.
---

# Wissensformen: warum Text wuchert, wo welches Wissen lebt, wie Aufträge tragen

Zusammengeführt am 05.11.2026 aus vier Teilen vom selben Tag. Die Vorfassungen bleiben als
Archiv mit allen Einzelheiten und Quellenangaben: [`konzept.md`](konzept.md),
[`anforderungen.md`](anforderungen.md), [`issues-als-steuerung.md`](issues-als-steuerung.md) und
der Abschnitt 05.11. im [Experiment Entwurfsprozess](../../experiments/2026-10-entwurfsprozess.md).
Diese Fassung verdichtet. Wer eine Zahl oder ein Zitat braucht, liest in der Vorfassung nach.

## 1 · Kern: Im Entwurf antwortet das Material, in der KI-Arbeit nur Text

**Symptome** (*belegt*, Fundstellen im Experiment): Ob Strukturen tragen, sieht der Gestalter
nicht. Auf Fehler folgen Regeln, die leer bleiben (30 Entscheidungen in drei Tagen). Jede Antwort
öffnet eine neue Baustelle. Text wächst schneller als Werk (paleo-type: 53 % der Bytes Verwaltung;
136 171 Zeichen in 23 offenen Issues; im Labor eine Studie). Neustarts brauchen Rettung.

**Warum** (*abgeleitet*): Fortschritt kommt als Text zurück, weil Text für die KI das billigste
Abschlusssignal ist und die erste Fassung von 0024 ihn belohnte. Der Gestalter urteilt über
Ansehen; Code spricht nicht zu ihm, also prüft er Text und antwortet mit Regeln. Regeln werden nur
„fast immer“ befolgt, kosten bei jedem Start Lesezeit und verdünnen einander. Große offene Fragen
löst die KI in die größere Lesart auf, und es gibt keinen Ort, an dem „genug“ am Ergebnis
entschieden wird.

**Nicht allein** (*belegt*, Quellen im Experiment): Osmanis „70-%-Problem“, „Workslop“ (HBR/Stanford
2025), METR 2025 (gefühlt 20 % schneller, gemessen 19 % langsamer).

**Gegenmittel:** Schaufenster und Vorführung statt Bericht; Prüfungen, die laufen, statt Regeln;
Issues nur als Auftrag; kleine Startlast, gezieltes Nachladen. Umgesetzt in **0024 neu** (drei
Schichten, Neustart-Test) und `verzeichnis.md`.

## 2 · Text trägt nur in einer von drei Rollen (*abgeleitet*)

| Rolle | Beispiel | Warum er nicht zur Hülle wird |
|---|---|---|
| **ausgeführt** | Test, Prüffall, Build-Prüfung, Schema | schlägt an, wenn das Werkzeug abweicht |
| **erzeugt** | Statusseite, Übersicht, Vorführung aus Daten | kann nicht von den Daten abweichen |
| **entschieden** | Entscheidung mit Warum, Alternativen, Folgen | wird nachgeschlagen, nicht befolgt |

Text, der nur befolgt werden soll (Regeln, Verfahren, Checklisten), ist die Hülle. Die Audits
Zusammenarbeit und paleo-type zeigen, dass er nicht reicht.

## 3 · Arbeitsteilung: jede Wissensform beantwortet eine Frage

| Form | Frage | Leser zuerst | Rhythmus | entscheidet |
|---|---|---|---|---|
| **Leitfaden** | Wie arbeite ich gut? | Mensch | monatlich | neue und überholte Einträge: Eigentümer |
| **Radar** | Was nehme ich, was ist neu? | beide | wöchentlich | „Einsetzen“ und „Halten“: Eigentümer |
| **Fachpakete** | Was gilt fachlich in Feld X? | Modell | bei Bedarf | Kanon: Eigentümer |
| **Korpus** | Woher stammt das? | beide | bei jeder Aufnahme | Auswahl: Eigentümer |
| **Entscheidungen** | Warum ist das so? | beide | bei Bedarf | Eigentümer |
| **Fundstücke** | Ist das etwas? | Mensch | laufend | verwerfen oder vertiefen: Eigentümer |

- **Leitfaden und Radar:** Der Leitfaden sagt, *woran* man Gutes erkennt (hält Monate bis Jahre),
  das Radar, *welches* Werkzeug heute wo steht (Wochen bis Monate). Sie verweisen aufeinander,
  keiner kopiert den anderen.
- **Leitfaden und Fachpaket** unterscheiden sich durch den Leser: Mensch gegen Modell.
- **Gemeinsames Muster jeder Ansicht:** Daten statt Seite, drei Stufen (Satz → Warum → Quellen),
  Status und Datum sichtbar, Änderungen sichtbar, Verweise per ID, Handy zuerst.
- **Leitfäden je Thema** (entschieden 05.11.): Mit KI arbeiten · Systeme entwickeln · Werkzeuge
  wählen · Gestalten mit KI. Vorschlag: ein neuer Leitfaden entsteht erst ab fünf belegten Einträgen.
- **Grenze des Labors** (Eigentümer, 05.11.): Fachwissen fremder Domänen bleibt in deren Projekt;
  ins Labor kommt nur der Entwurfsprozess.
- **Radar als Ansicht** (offen, Frage 1 im Merkzettel): Daten in JSON, neu je Eintrag Feld und
  Bewegung. Empfehlung Matrix (Ringe als Spalten, Felder als Zeilen) statt Kreis, weil auf dem
  Handy bei über 30 Einträgen die Beschriftungen kollidieren und der Winkel im Sektor nichts
  bedeutet (Bertin). Nicht am Handy getestet.

## 4 · Anforderungen: wo sie leben, damit ein Werkzeug entsteht

Stand der Technik (*belegt*, Vorfassung `anforderungen.md`): Spezifikation zuerst (Kiro, Spec Kit)
mit Abnahme in EARS-Satzform; Kritik von Böckeler: viele gleichförmige Dateien, falsche Sicherheit,
Agenten übergehen Hinweise. EARS ist Satzform, keine Prüfung. Anthropic: kurze `SPEC.md` aus
einem Interview, frische Sitzung zum Bauen, Prüfungen, die die KI ausführen kann.

| Was | Form | Wo |
|---|---|---|
| Absicht, Nutzer, Situation | Alltagssprache | Intent des Projekts |
| Anforderung | eine Zeile mit Kennung und Prüffrage | Anforderungsliste im Repo |
| Abnahme | Prüffall, der läuft, plus ein Satz „Wenn …, soll …“ | Tests, `evals/` |
| Auftrag | Issue mit Ziel, Abnahme, Grenzen | GitHub, bis erledigt |
| Aufgaben-Spezifikation | kurze Datei je Aufgabe | Branch; geht danach in Tests und Entscheidungen auf |
| Begründung | Entscheidung | `decisions/` |

**Kontext für wen:** KI immer nur, was sie nicht selbst aus dem Repo liest (Prüfbefehle,
irreführende Stellen, nicht sichtbare Entscheidungen); KI je Aufgabe Ziel, Abnahme, Grenzen; der
Code Tests und Schemas; der Mensch Intent, Warum, Vorführung und Abnahme mit Screenshot.

**Phasen:** klären (bis die Abnahme formulierbar ist) → Durchstich zeigen → je Schritt erst der
fehlschlagende Prüffall, dann Code, frische Sitzung → abnehmen mit Vorführung und Zweitblick →
pflegen (Text ohne Rolle streichen). Im Labor fehlt noch der Schritt von der Prüffrage in
`intent.md` zum ausgeführten Prüffall.

## 5 · Issues zur Steuerung: Briefkasten und Auftrag trennen

Stand der Technik (*belegt*, Vorfassung `issues-als-steuerung.md`): GitHub empfiehlt Issues als
Prompt nur für klar umrissene Aufgaben. Langer Agentenstand liegt im Repo (Anthropic: Merkmalsliste
mit „bestanden“, Fortschrittsdatei; Beads: Tracker als Datei). Öffentliche Issues sind ein
Einfallstor (Invariant Labs, Mai 2025; „tödliche Dreiheit“ nach Willison).

Gegen das Labor gelesen: Die Dreiheit liegt vor (*abgeleitet*). GraphQL ist in Claude-Sitzungen
gesperrt (*belegt*). Stand-Köpfe in Issues wichen vom Merkzettel ab (*belegt*). Zwölf
`entwurf`-Issues ruhen seit dem 28./29.10. (*belegt*).

**Empfehlung** (*abgeleitet*): Sammeln im Chat oder als Briefkasten-Issue, das ab „belegt“ ins Repo
wandert und mit Verweis schließt. Aufträge als Issue mit genau einem `an:`-Label, Abnahme und
Grenzen. Arbeitsstand eines Werkzeugs als Arbeitsliste im Projekt. Fremde Issues sind Daten.

**Stichprobe paleo-type** (*belegt*, 41 Issues, `main@22b255b`): Herkunft unsichtbar (alles vom
Konto `esany`); 9 von 23 offenen ohne `an:`, 5 mit widersprüchlichem Titel; 23 offene mit 136 171
Zeichen; dieselbe Label-Regel als Abschrift in zwei Repos; paleo-type ist öffentlich lesbar, das
Audit vom 30.10. nennt es „privat“. **Folgerung:** eine Quelle für die Issue-Regeln im Labor plus
eine gemeinsame, ausgeführte Prüfung (wiederverwendbarer Workflow), nicht ein weiterer Text
(offen, Frage 2 im Merkzettel).

## 6 · Offen und nicht geprüft

- Reifegrade (Analyse 1–4, Synthese 5–9) sind Hypothese, an der nächsten Entwurfsaufgabe zu erproben.
- Nutzungssituation des Eigentümers ist abgeleitet, nicht erfragt.
- Ob der Anforderungsweg in paleo-type trägt, ist nicht erprobt (Pause #399).
- Kiro- und Spec-Kit-Urteile stammen aus Oktober 2025; neuere Fassungen nicht geprüft.
- Ob GitHub hier Issues auf Mitwirkende beschränken kann, ist *nicht belegt* (Frage 4 im Merkzettel).
