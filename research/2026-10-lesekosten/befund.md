---
dient: A17, A31, A33, A34
datum: 2026-10-29
modell: Claude Opus 5.5 (Claude-App, Cloud-Sitzung)
status: Befund, keine Maßnahme beschlossen (0028)
---

# Lesekosten der Labor-Struktur: Was ein Modell lesen muss, bevor es arbeitet

Auftrag des Eigentümers (Chat, 29.10.): „auditiere labor … ist die Struktur für dich maximal
tokensparend im Lesen des Kontextes bei maximaler Qualität?“

**Kurzantwort:** Nein, noch nicht. Die *Idee* trägt (kleine Startdatei, Wissen in Skills, ein
Merkzettel je Thema). Die *Ausführung* kostet beim Start etwa dreimal so viel wie nötig, und
derselbe Stand steht an drei bis fünf Stellen, die schon voneinander abweichen. Das kostet
nicht nur Tokens, sondern Qualität.

Zählung: Zeichen mit `wc -c` (*getestet*), Tokens ≈ Zeichen ÷ 3,5 (*abgeleitet*, nicht mit
einem Tokenizer gemessen). Stand: `main` @ `ad24f8e`.

## 1 · Der Startpfad (jede Sitzung)

| Datei | Zeichen | ≈ Tokens | davon nötig für den Start |
|---|---:|---:|---|
| `AGENTS.md` (immer geladen, auch über `CLAUDE.md`) | 11.467 | 3.300 | „Start jeder Sitzung“ 2.117 Zeichen; der Rest erst beim Arbeiten |
| `stand.md` | 18.627 | 5.300 | Abschnitt „Themen“ 1.159 Zeichen (6 %) |
| Merkzettel, z. B. `anschluss/system.md` | 6.529 | 1.900 | der aktuelle Stand; etwa die Hälfte ist Tagesprotokoll |
| **Summe** | **36.623** | **≈ 10.500** | **≈ 3.000–3.500 Tokens würden reichen** |

**Befunde:**

1. **`stand.md` versteckt den Einstieg am Ende** (*belegt*, Abschnittsgrößen gemessen):
   „Letzte Änderungen“ belegt 13.816 Zeichen (74 %), „Themen“ steht danach. Wer die Datei
   öffnet (Dateiwerkzeug, Web-Ansicht, Connector), liest alles, auch wenn die Regel nur einen
   Abschnitt verlangt. Das Änderungsprotokoll hat 54 Zeilen, ist nicht chronologisch sortiert
   (Einträge vom 27.10. stehen zwischen solchen vom 28.10.) und wächst mit jeder Sitzung.
   Ohne Gegenmaßnahme wird der Startpfad jede Woche teurer.
2. **Der Merkzettel ist ein Tagebuch geworden** (*belegt*): `anschluss/system.md` hat vier
   Zeitblöcke („Heute entschieden“, „Aufgeräumt am 28.10.“, „Entschieden spätabends“, „Am
   Ende des Tages erledigt“). `anschluss/README.md` verlangt „Überholtes dort entfernen“; das
   geschieht nicht. Ein Merkzettel soll den *Stand* tragen, die Geschichte steht in den PRs.
3. **`AGENTS.md` lädt Arbeitswissen beim Start mit** (*abgeleitet*): Arbeitsteilung,
   Qualitätsschleife, „Wo was liegt“ (doppelt zu `stand.md`), Definition of Done und
   „Prüfen vor dem Handeln“ braucht ein Modell erst, wenn es schreibt. In Claude-Werkzeugen
   bleibt die Datei über die ganze Sitzung im Kontext; ihre Kosten fallen also nicht einmal,
   sondern bei jedem Schritt an. Der Satz „Sie ist kurz, weil sie immer geladen wird“ stimmt
   bei 11.467 Zeichen nicht mehr.

## 2 · Derselbe Stand an mehreren Orten (Qualität)

Der Stand des Themas „System“ steht in `stand.md` (Offene Punkte, Reihenfolge, In Arbeit,
Themen), in `anschluss/system.md` und im Kopf von Issue #62. Das sind fünf Stellen.

**Folge, schon eingetreten** (*belegt*): #39 ist auf GitHub geschlossen; `stand.md` nennt es
„erledigt“; `anschluss/system.md` (Für die Modelle) nennt es „offen“ und stellt dazu eine Frage
an den Eigentümer. Ein Modell, das nur den Merkzettel liest (wie es die Regel verlangt), meldet
einen falschen Stand. Die Redundanz kostet doppelt: mehr Lesen und widersprüchliche Wahrheit.

Dasselbe gilt für #49/Astra: viermal in `stand.md` (Offene Punkte 1, Reihenfolge 1, In Arbeit,
Themen), dazu im Merkzettel `moeglichkeitsraum.md`.

## 3 · Der Arbeitspfad (wenn ein Issue bearbeitet wird)

| Gelesen | Zeichen | ≈ Tokens |
|---|---:|---:|
| Skill `issue` | 9.977 | 2.900 |
| Plan #62 (Text + Kommentare) | 7.593 | 2.200 |
| Auftrag #56 (Text + Kommentare) | 8.852 | 2.500 |

**Befund** (*belegt*): Die Aufträge #56, #57 und #60 wiederholen denselben Absatz „Nicht tun …
Vorarbeit aus #38 … nicht als Eingang“ wörtlich, und jedes Issue trägt einen Kopf mit
Zwischenständen („Stand 28.10. abends: …“), der den Merkzettel noch einmal spiegelt. Das ist
eine sechste Stelle für den Stand. Kleinere Modelle (Auftragsformat B1) lesen das alles mit.

## 4 · Was gut ist und bleiben sollte

- **Skills werden erst bei Bedarf geladen.** Die großen Fachpakete (je ≈ 14.000 Zeichen) kosten
  beim Start nur ihre Beschreibung. Das ist das richtige Muster.
- **Ein Merkzettel je Thema (0029)** schneidet den Kontext richtig zu; nur der Inhalt ist zu
  breit geworden (Befund 2).
- **Erzeugte Übersichten** (`verknuepfung.md`, `corpus/uebersicht.md`) statt Handpflege.
- **Entscheidungen** liegen einzeln und klein in `decisions/` (je 550–2.200 Zeichen, außer
  0025 mit 5.168) und werden nur bei Bedarf geöffnet.

## 5 · Möglichkeiten (Hinweise, keine Vorgaben; 0028)

| | Was | Ersparnis je Start (*abgeleitet*) | Risiko für die Qualität | Wo, wer entscheidet |
|---|---|---:|---|---|
| **A** | `stand.md` umbauen: „Themen“ und „Offene Fragen“ nach oben; das Änderungsprotokoll in eine eigene Datei (z. B. `stand-verlauf.md`), chronologisch, mit allen Rückgängig-Hinweisen; „Reihenfolge“ und „In Arbeit“ in die Themen-Tabelle falten | ≈ 4.500 Tokens | gering: nichts geht verloren, die Rückgängig-Sätze bleiben auffindbar | `stand.md` ist frei; die neue Datei und der Verweis in `AGENTS.md` brauchen ein Ja |
| **B** | Merkzettel als Zustand, nicht als Tagebuch: oben „Stand · Nächster Schritt · Was du entscheidest“, unten eingeklappt nur *offene* Nummern; Erledigtes raus (steht in PRs und im Verlauf); Obergrenze z. B. 3.000 Zeichen, vom Build gemeldet (nicht erzwungen) | ≈ 1.000 Tokens | gering, wenn Lehren in den Skill `issue` wandern statt verloren zu gehen | Merkzettel frei; die Prüfung im Build ist eine Regel (Ja nötig) |
| **C** | `AGENTS.md` teilen: Kern (Start, Schreibregeln, Belegpflicht kurz, ≈ 5.000 Zeichen) bleibt; „Prüfen vor dem Handeln“, Qualitätsschleife, DoD, „Wo was liegt“ wandern in einen Skill `arbeiten` oder in `README.md` | ≈ 1.800 Tokens, *bei jedem Schritt* | mittel: Werkzeuge ohne Skill-Mechanik (z. B. ein Chat ohne Repo) sähen diese Regeln nicht mehr von selbst; Gegenmittel: ein Satz im Kern, wann der Skill zu laden ist | `AGENTS.md`: nur mit Ihrem Ja |
| **D** | Ein Ort für den Stand je Thema: der Merkzettel. `stand.md` verweist nur, Issues tragen keine Stand-Köpfe mehr, nur Auftrag und Abnahme | indirekt, vor allem Qualität (Befund 2) | gering; beseitigt die belegte Abweichung | Regel im Skill `issue`: Ja nötig |
| **E** | Wiederholte Textbausteine in Issues durch einen Verweis ersetzen („Nicht tun: siehe Plan #62, Eingangsregel“) | ≈ 300 Tokens je Auftrag | gering | frei (Issue-Pflege durch den Orchestrator) |

**Empfehlung:** A und B zuerst. Sie bringen den größten Teil der Ersparnis, sind leicht
rückgängig zu machen und berühren keine Haltung. C erst, wenn #60 (Tokenökonomie) gemessen hat,
was ein Start wirklich kostet; dann mit einem Prüffall in `evals/start`, ob ein kleineres
Modell mit dem gekürzten Kern noch richtig startet.

## Was nicht geprüft ist

- Echte Tokenzahlen je Modell (kein Tokenizer, nur Zeichen ÷ 3,5).
- Ob andere Werkzeuge (ChatGPT, Gemini) `stand.md` ganz lesen oder nur einen Abschnitt.
- Ob ein gekürzter Start die Startregel genauso gut einhält (Prüffall fehlt).
- Kosten durch Werkzeug-Ausgaben und Wiederholungen im Gesprächsverlauf; die sind
  wahrscheinlich größer als die Lesekosten der Dateien (*nicht belegt*), gehören aber zu #60.

## Bezug

Material für #60 (Tokenökonomie, wartet auf #57 und #59): Messung, kein Vorbefund zur
Arbeitsteilung. Berührt 0029 (Merkzettel), 0024 (kein Wissen nur im Chat), A34.
