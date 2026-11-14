---
dient: A01, A04, A14, A18, A22, A33
datum: 2026-11-14
modell: Claude Opus 5.5 (Orchestrator)
status: Analyse, Iteration 1 abgeschlossen (14.11.: Ableitungen bestätigt, Situationen geräteunabhängig); Iteration 2 nach #237 und #238
---

# Die Arbeitsoberfläche des Labors: Analyse und Anforderungen, Iteration 1

**Herkunft:** Rückmeldungen des Eigentümers vom 14.11.2026, im Wortlaut in `daten/arbeitsweise.json`, Einträge a63 („komplizierter statt übersichtlicher“) und a64 („echte PAIN“, Perspektiven, Sichten, Überblick, Muster, Recherche). Vorlauf: [Einordnung und Skizzen](../2026-11-zielbild-bausteine/einordnung-und-ueberarbeitung.md).

## In fünf Sätzen

Gegenstand ist nicht eine Seite, sondern die Oberfläche, über die du und die Modelle die Arbeit teilen: entscheiden, prüfen, erkunden, zurückmelden. Ich erhebe die Anforderungen daran in Iterationen; sie stehen als Punkte im Zielbild (Teil „Anforderungen an die Arbeitsoberfläche“), deine Aussagen im Wortlaut getrennt von meinen Ableitungen. Das Labor hat Fachwissen zu Diagrammatik und Informationsdesign, aber keines zu Interaktionsgestaltung; dafür und für die Frage, wie Fachwissen wächst, gehen zwei Recherchen an ChatGPT. Die Überarbeitung des Zielbilds beginnt erst nach Iteration 2, damit sie als Ganzes entworfen wird. Prüffrage für jede Iteration: Wird es für dich einfacher?

## 1 · Gegenstand

**Was es ist (abgeleitet):** die Mensch-Maschine-Schnittstelle der Arbeitsteilung im Labor. Heute verteilt auf Chat, Zielbild-Seite, Website, Dateien, Pull Requests und Issues; du siehst nur die ersten drei (Grundmodell, AGENTS.md).

**Was es nicht ist:** kein Dashboard im Sinn von Kennzahlen (der Befund Visualisierungssysteme führt das Dashboard als belegte Negativfolie, Abschnitt 4), keine neue Seite neben dem Zielbild (Entscheidung 0036, präzisiert 14.11.).

## 2 · Vorgehen

1. **Iteration 1 (dieses Papier):** deine Aussagen sammeln, meine Ableitungen getrennt markieren, Bestand im Labor sichten.
2. **Recherchen R1 und R2** (Abschnitt 5) laufen parallel.
3. **Iteration 2:** Anforderungen mit den Recherchen verdichten, Widersprüche benennen, Prüfkriterien je Anforderung.
4. **Entwurf in Varianten** mit den Methoden der Fachpakete; erst nach deinem Urteil wird gebaut.

Schreibweise der Anforderungen: ein Satz, Herkunft, Status (von dir gesagt · abgeleitet · offen). Ort: das Zielbild, damit es keine zweite Quelle gibt.

## 3 · Anforderungen, Iteration 1

| Gruppe | Punkte im Zielbild | Status |
|---|---|---|
| Grundsätze | `ao-anforderung` (Anforderung, nicht Gespräch), `ao-einfacher` (wissen, brauchen, nicht brauchen), `ao-ganzheitlich` (einarbeiten statt anhängen) | von dir gesagt |
| Perspektiven und Sichten | `ao-perspektiven` (Entwurfsprozess, Systemzustand), `ao-sichten` (individuell, priorisiert, begrenzt), `ao-ganzes` (Überblick mit Tags zum Erkunden), `ao-progressiv` (progressive Offenlegung), `ao-einzeln` (eins nach dem anderen) | von dir gesagt |
| Darstellung | `ao-methodisch` (Zusammenhänge nur mit Methode und geprüft) | von dir gesagt |
| Vertrauen | `ao-transparenz` (Transparenz ermöglicht Arbeitsteilung; du bist Product Owner), `ao-rechenschaft` (wer, was, warum, Ergebnis, Prüfung), `ao-tiefe` (Prüftiefe in Stufen) | von dir gesagt · bestätigt |
| Kontext | `ao-akteure` (drei Akteure; der Entwickler ist Qualitätsanspruch), `ao-situationen` (geräteunabhängig, vom Handy aus gedacht) | von dir bestätigt, 14.11. |
| Perspektive | `ao-experiment` (Arbeitsteilung sichtbar machen als Experiment) | von dir gesagt |

**Schon gültig und hierher gehörig (belegt, Zielbild):** ein Zielbild für das Labor (`st-zentrale`, `ez-aufbau`), Farbe als Bedeutung (`st-farbe`), Rückmeldung ohne Kopieren (`st-rueckweg`), aus dem Leitfaden Erklären in Stufen (`stufen-anzeige`), Handy zuerst (`handy-zuerst`), Navigieren mit Tags (`tags-navigieren`), Status und Wandel sichtbar (`status-sichtbar`, `wandel-sichtbar`).

**Spannungen (abgeleitet):** begrenzte Sicht gegen großes Ganzes, **entschieden 14.11.** (`ao-reihenfolge`, a65): Einstieg ist dein Input nach Priorität, mit Einzahlung und Ergebnis; dann laufende Arbeit und Relationen; am Schluss das Ganze zum Erkunden. Offen: Transparenz gegen „nicht machen müssen“ (`ao-tiefe`).

## 4 · Was das Labor schon hat (Querschnitt)

**Fachpakete und Methoden** (belegt: `.agents/skills/`, Abruf 14.11.): Form (Typografie, Lesbarkeit, Druck), Vermitteln (Diagrammatik, Informationsdesign, Informationsvisualisierung, Wissensvermittlung), dazu Methoden nach Bertin, Isotype, Itten, konkrete Kunst, Bildanalyse und Kritik. **Ein Fachpaket zu Interaktionsgestaltung gibt es nicht.**

**Befunde, auf denen aufzubauen ist (belegt, Pfade):**
- `research/2026-11-leitfaden-sota/befund.md` (#172): Stand der Technik zur Mensch-KI-Zusammenarbeit, darunter dynamische Wissensstrukturen (Abschnitt 3) und Kurs halten (Abschnitt 6).
- `research/2026-11-visualisierungssysteme/befund.md`: Visualisierungssysteme als Gefüge, Top-down vom Zweck (Abschnitt 1) und Bottom-up aus Praxis (Abschnitt 6), Dashboard als Negativfolie (Abschnitt 4).
- `research/2026-11-wissensformen/anforderungen.md`: wo Anforderungen leben und welcher Kontext für wen.
- Leitfaden-Punkte zu Fachwissen als Wirknetz (`wechselwirkung`, `transdisziplinaer`, `sammeln-verdichten`, `relationen`); Wissen erschließen mit der Wissenslandkarte (acht Felder).

**Querschnitt (abgeleitet):** Leitfaden, Wissen erschließen und Visualisierungssysteme stellen dieselbe Frage auf drei Ebenen: wie Fachwissen geschnitten und verknüpft wird, wie es gesammelt wird, wie Systeme der Darstellung entstehen. Darum eine gemeinsame Recherche (R2) statt drei. Das hebt den Halt der „Recherche, Teil 2“ auf.

**Außerhalb des Labors (beobachtet):** In dieser Arbeitsumgebung stehen fremde Design-Skills bereit, etwa zu Interaktionsgestaltung, Designkritik und UX-Forschung. Sie sind Fundstücke, kein Fachwissen des Labors; vor jeder Übernahme gilt der Skill `fundstueck`.

## 5 · Zwei Recherchen

**R1 · Muster für KI-assistierende Oberflächen und sichtbare Arbeitsteilung** (Punkt `ao-recherche-muster`). Fragen: Welche Interaktionsmuster sind belegt für Oberflächen, über die Menschen KI-Systeme steuern, prüfen und ihnen vertrauen (progressive Offenlegung, gemischte Initiative, Erklärbarkeit und Herkunft, kalibriertes Vertrauen, Grade der Automatisierung, Lagebewusstsein in Leitwarten, Überblick und Detail, mehrere koordinierte Ansichten, Beobachtbarkeit von Agenten)? Was davon passt zu einem Gestalter als Product Owner, der nicht orchestrieren will? Was ergibt sich für ein Fachpaket Interaktionsgestaltung? Die genannten Begriffe sind Ausgangspunkte für die Suche, nicht geprüft.

**R2 · Wie Fachwissen wächst** (Punkt `a-recherche-2`, erweitert). Fragen: Wird ein Wissensnetz aus einem Modell (Ontologie, Kanon) gebildet oder wächst es von unten (Zettelkasten, Folksonomie, Mustersprachen), oder beides? Nach welchen Regeln entstehen und verfallen Verknüpfungen? Wie wird ein solches Netz dargestellt, ohne vorschnelle Zuschreibungen? Bezug: Leitfaden-Punkte zum Wirknetz, Wissenslandkarte, Befund Visualisierungssysteme.

## 6 · Was als Nächstes geschieht, und was nicht

- Ich baue das Zielbild jetzt nicht um. Iteration 2 kommt mit den Recherchen.
- Die Sitzung am Rechner (Cloudflare, Hauptzweig) bleibt der schnellste Weg, das Kopieren zu beenden; sie hängt nicht an dieser Analyse.
- Urteil zu den Skizzen (14.11.): A ohne Einwand; B ist keine Landkarte, ihre Zuschreibungen sind ungeprüft; C gut. Eingearbeitet als `ao-methodisch` und `ao-einzeln`.

## Iteration 2 · Der Rahmen: Arbeitsplatz, Kopf, Navigation (14.11., Claude)

**Anlass (belegt, `daten/arbeitsweise.json`, a76, a77):** Der Eigentümer verwarf eine Wegebeschreibung über drei Orte („was soll das denn für ein mentales Modell sein“), nahm das Zielbild von der öffentlichen Seite und nannte die private Übersicht einen Bruch mit allen Entwurfsgrundsätzen: Labor- und Werk-Zielbild funktionieren gleich und werden verschieden behandelt; Kopf ohne Nutzen, Repo nicht verlinkt, Navigation nicht Stand der Technik. Auftrag: überarbeiten, als Test, ob das Labor seine Regeln anwendet. Grundlage jetzt: Recherche R1 (`recherche-muster.md`, übernommen 14.11.; Quellen dort als Q01–Q16).

**Befund am Bestand (belegt: Bildschirmfotos 390 und 1280 px, 14.11.; Kriterien aus R1 und Fachpaket Form):**

| Element | Befund | Kriterium |
|---|---|---|
| Übersicht | Browser-Standardstil, Titel „Werke · Zielbilder“ obwohl das Labor darin steht; zwei Einträge in zwei Formen („(mit Senden)“ gegen „Iteration 6 · Stand 2026-11-13“, ISO-Datum); nichts darüber, was auf ihn wartet. | Konsistenz gleicher Funktion; Reihenfolge `ao-reihenfolge`; Status als Rolle (R1 §3) |
| Kopf des Zielbilds | Eine Zeile in Code-Schrift („design-lab · Zielbild, Iteration 2 · Stand …“), auf dem Handy umbrochen, nichts davon verlinkt; kein Weg zurück, kein Ort, kein Repo. | Orientierung und Rückweg (Q01/Q02, „Kontrolle und Erholung“); Auffindbarkeit (Q09) |
| Erklärtext | Derselbe Satz über jedem Zielbild erklärt das Werkzeug, nicht den Inhalt; wird bei jedem Besuch gelesen. | ao-einfacher; gestufte Offenlegung (Q02) |
| Legende | Vier Farbmarken oben sehen aus wie Filterknöpfe, sind aber keine: falsches Angebot. | Status als Rolle, nicht Dekoration (R1 §3) |
| Bilanz | Ein Absatz Zahlen in Code-Schrift ohne Handlung („88 seit deiner Rückmeldung geändert“). | Zahl mit Bezug (Grundmodell); Ereignis statt Kachel (R1 §3) |
| Navigation | Zwei Systeme übereinander (Ansichten als Reiter, Stränge als neun Knöpfe in vier Reihen am Handy); „Stand“ als Reitername mehrdeutig. | ein Navigationssystem je Ebene; Handy zuerst (`handy-zuerst`) |
| Verweise | Kein Sprung direkt an einen Punkt; Verweise von außen landen oben. | Beziehungsweg statt Organigramm (R1 §3) |

**Anforderungen, Iteration 2 (abgeleitet aus Befund und R1; je Anforderung prüfbar):**
1. *Ein Einstieg, ein Muster:* Jedes Zielbild erscheint auf dem Arbeitsplatz in derselben Form; Art (Labor, Werk) ist ein Merkmal, keine andere Behandlung. Prüfung: gleiche Komponente im Code, ein Generator.
2. *Dringlichkeit zuerst:* Was auf ihn wartet, steht oben, mit Zahl und dem Wichtigsten (`ao-reihenfolge`). Prüfung: Reihenfolge aus Daten, nicht von Hand.
3. *Fester Kopf:* Ort, Rückweg, Daten im Repo, auf jeder Seite gleich, auch beim Scrollen. Prüfung: in allen Zielbildern derselbe Kopf (Generator).
4. *Kein Werkzeugtext über dem Inhalt;* Erklärung auf Abruf. Prüfung: Erklärtext nur in aufklappbarem Teil.
5. *Ein Navigationssystem je Ebene,* am Handy ohne Mehrfachreihen. Prüfung: 390 px Bildschirmfoto.
6. *Sprung an jeden Punkt.* Prüfung: Adresse mit Punkt-Kennung öffnet den Punkt.
7. *Generisch:* Jede Änderung am Rahmen wirkt in allen Zielbildern, weil sie im Generator (`tools/zielbild.mjs`, Vorlage) liegt.

**Varianten (gezeigt, nicht entschieden; Vorschau privat bei Cloudflare, Zweig `werk/entwurf-arbeitsplatz`, mit echten Daten):**
- **A · Eine Liste nach Dringlichkeit.** Zeile gleicher Form je Zielbild; Kopf mit Pfad „Arbeitsplatz / Labor“. Stärke: ein Muster. Schwäche: Entscheidungen bleiben in ihren Zielbildern.
- **B · Erst dein Eingang, dann die Zielbilder.** Alle Entscheidungen aus allen Zielbildern nach Priorität, je mit Herkunft und Sprung an den Punkt; darunter die Zielbilder. Stärke: folgt `ao-reihenfolge` am genauesten. Schwäche: Punkte ohne Priorität sammeln sich.
- **C · Getrennt nach Labor und Werken,** Kopf als Umschalter. Stärke: trennt System- und Werkarbeit sichtbar (Bug „Systementwicklung und Gestaltungsfragen vermischt“). Schwäche: zwei Orte; der Weg zur Übersicht liegt hinter der Marke.

Gemeinsam in allen dreien: Kopf, Kontextzeile in Grundschrift, Legende auf Abruf, wischbare Strang-Zeile am Handy, Sprung an Punkte. Die Marke ist im Zielbild schwarz, weil Rot dort nur „du bist dran“ heißt (0036).

**Nicht Teil dieses Schritts (offen, eigene Aufträge):** der Körper der Zielbild-Seite: Beschriftung der Schaltflächen (Bug „Bei offenen Fragen ist unklar, was zu tun ist“), Zeichen und Warnstufen (Bug „Visuelle Sprache ohne Entwurfslogik“), Gliederung der Punkte (Bug „ohne Informationsarchitektur“). Der Rahmen kommt zuerst, weil er für alle Zielbilder gleich ist.

**Was dem Labor an Fachkompetenz fehlt (abgeleitet aus Befund, R1 und den drei Bugs):**

| Lücke | Woran sichtbar | Was es braucht |
|---|---|---|
| Interaktion und Struktur (UX, IA, Interaktionsgestaltung) | Kopf, Navigation, Übersicht ohne Muster | Fachpaket aus R1 (0037, 0038); Recherche liegt vor |
| UX-Writing, Mikrotext | „beantwortet“ / „Antwort“ ohne klare Handlung | Recherche Stand der Technik, Teil des Fachpakets |
| Navigationsmuster im Netz und am Handy, datiert | Pfad, Umschalter, fester Kopf, Tiefenverweise ohne Kanon | Teil des Fachpakets, mit Tree-Test am Eigentümer |
| Zeichensysteme der Oberfläche (Semiotik von Status und Warnung) | Warndreieck als Emoji | Ergänzung Fachpaket Vermitteln oder Form |
| Komponenten und Musterbibliothek | gleiche Funktion, verschiedene Form | Regel: eine Funktion, eine Komponente; Bestand im Generator |
| Prüfen mit dem Nutzer | nur Bildschirmfotos, kein Test | Aufgabe am Handy mit dem Eigentümer (R1 §2, Testfragen) |

## Geprüft und nicht geprüft

Geprüft: Bestand der Skills und Befunde im Repo, Wortlaut deiner Aussagen; Iteration 2: Bildschirmfotos der Seiten, Varianten im Browser gerendert, Sprung an Punkte. Nicht geprüft: Wirkung der Varianten beim Eigentümer (kein Test), R2; jede Aussage über den Stand der Technik nur so weit, wie R1 sie belegt.
