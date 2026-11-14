---
dient: A04, A06, A10, A11, A15, A27
datum: 2026-11-14
modell: Claude Opus 5.5 (Claude-App, Cloud-Sitzung)
status: Fundstück bewertet, am 14.11. vom Eigentümer korrigiert (Abschnitt 9). Gegenlesen durch ein anderes Modell beauftragt.
---

# Fundstück OpenDesign (Skill-Katalog und Repo)

Eingang: Eigentümer im Chat, 14.11.2026: „Fundstück https://open-design.ai/de/skills/“.
Gesichtet: die Katalogseite (Text, zwei Abrufe) und das Repo `nexu-io/open-design`
(flacher Klon, letzter Commit 13.11.2026). Nicht gesichtet: die Desktop-App, die Cloud,
die einzelnen fremden Skills hinter den Katalogkarten.

## 1 · Was ist es?

**Wirkprinzip:** OpenDesign ist ein KI-Arbeitsplatz für Gestaltung: Ein Briefing geht an
einen Coding-Agenten (Claude Code, Codex, Cursor u. a.) oder an die eigene Cloud, der Agent
baut einen Prototyp im Rahmen eines Design-Systems. Dazu gibt es einen Katalog, der
Agent-Skills (`SKILL.md`) aus fremden Repos nach Aufgaben ordnet.

| Angabe | Wert | Status |
|---|---|---|
| Träger | Powerformer, Inc. (Fußzeile der Seite „© 2026 Powerformer, Inc.“) | belegt (Seite) |
| Lizenz | Apache-2.0 für das Repo; fremde Skills je eigene Lizenz (MIT, Apache-2.0, AGPL-3.0, CC-BY-4.0, nicht-kommerziell, „widersprüchlich“, „unbestätigt“) | belegt (`LICENSE`, Katalogkarten) |
| Umfang Katalog | 296 Skills aus 84 Repos; Schwerpunkte Web & UI (61), Animation & Video (69), UX & Research (37), Marke & Design-Systeme (32), Review & Barrierefreiheit (25) | belegt (Seite) |
| Umfang Repo | 171 eigene Skills, 154 Design-Systeme (meist Nachbildungen bekannter Marken), 13 „Craft“-Regelwerke, ein Prüfwerkzeug `lint-artifact` | belegt (Repo) |
| Geschäftsmodell | Open Core mit bezahlter Cloud und Guthaben-Abo („Go credits“) | belegt (README) |
| Datenwege | „local-first“; Nutzungsdaten **standardmäßig an** (PostHog, Langfuse), abschaltbar; Sicherheits-Telemetrie immer an, wo die Build-Konfiguration es vorsieht | belegt (`PRIVACY.md`) |

## 2 · Prüffrage Bedarf

| Anforderung | Lücke im Labor | Was das Fundstück dazu trägt | Status |
|---|---|---|---|
| A10 Nicht nachbauen | „fertige Design-Skills nicht eingebunden“; kein Ort, an dem man vor dem Bau sucht | der bisher breiteste geordnete Katalog fremder Design-Skills mit Lizenz und Quelle je Karte | **Bedarf**, belegt |
| A06 Mittelmaß | Mittelmaß-Muster stehen im Fachpaket Form als Prosa, nichts prüft sie maschinell | `anti-ai-slop.md` mit Linter: Mittelmaß-Muster als deterministische Prüfung (P0 = muss behoben werden) | **Bedarf**, abgeleitet |
| A04 Fachexpertise als Tooling | Fachpakete für 2 von 6 Feldern | 13 kurze Regelwerke (Typografie, Farbe, Bewegung, Barrierefreiheit, Laws of UX …), aber Bildschirm-UI, kaum belegt | Teil-Bedarf; Inhalt schwach |
| A01 Animation | kein Fachpaket, nur Radar (Motion Canvas, Theatre.js) | 69 Animations- und Video-Skills im Katalog | **Bedarf**, nicht geprüft (Skills nicht gelesen) |
| A01 Typografie, Print | Fachpaket Form vorhanden | keine eigene Kategorie, kein Druck; Typografie nur als Web-Regeln | keine Lücke geschlossen |

## 3 · Fachlicher und methodischer Gehalt

**Stärkster Gehalt ist methodisch, nicht inhaltlich.** Drei Muster:

1. **Wissen als zuschaltbare Schicht.** OpenDesign trennt vier Achsen: Skills (was man tut),
   Vorlagen (Form des Ergebnisses), Design-Systeme (welche Marke) und `craft/` (was unabhängig
   von der Marke gilt). Ein Skill nennt im Kopf, welche Regelwerke er braucht
   (`od.craft.requires: [typography, color]`); nur diese werden geladen. Das entspricht dem
   Labor-Grundsatz „lädt nur die nötigen Regeln“ (Skill `laborarbeit`) und dem Verhältnis von
   Fachpaket zu Methode, ist dort aber maschinenlesbar. *abgeleitet*
2. **Mittelmaß als Prüfung statt als Mahnung.** Die „sieben Kardinalsünden“ (z. B.
   Tailwind-Indigo als Akzent, Verlauf Lila→Blau, Emoji als Icon) prüft ein Linter im Code
   (`apps/daemon/src/lint-artifact.ts`, rund 1000 Zeilen); was er nicht prüft, ist ausdrücklich
   als „guidance, not auto-checked“ markiert. Diese Ehrlichkeit über die Prüfgrenze passt zur
   Belegpflicht des Labors (A07). *belegt (Datei)*
3. **Katalog mit Lizenzstatus je Eintrag**, einschließlich „widersprüchlich“ und „unbestätigt“.
   *belegt (Seite)*

**Inhaltlich schwach:** Die Regelwerke sind fast ohne Quellen; Typografie und Anti-Slop
nennen als einzige Herkunft ein anderes Skill-Repo (`referodesign/refero_skill`, MIT). Die
Werte sind Pixel-Tabellen für Bildschirm-UI (z. B. Body 15–18 px, Zeilenabstand 1,5–1,6),
ohne Medium, Abstand oder Publikum (A28). Gegen das Fachpaket Form (Bringhurst, Butterick,
am Flyer getestet) ist das eine Stufe darunter. Brauchbar ist der Hinweis zu CJK-Zeilenabstand
als Beispiel für eine Regel mit Begründung. *abgeleitet*

**Zielort des Ertrags:** Radar (Katalog als Suchquelle); Fachpaket Form, Abschnitt
Mittelmaß-Muster (Idee: welche Muster sind maschinell prüfbar); späteres Fachpaket Animation
(Katalog als Ausgangsliste). Kein Korpus-Eintrag: keine belastbare Fachquelle.

## 3a · Doppelrolle: Steinbruch und Negativfolie

Lesart des Eigentümers (Chat, 14.11.): „Skill-Quelle und Tagebau bzw. Negativvorlage?“ Beides gilt
zugleich, und die beiden Seiten stützen sich gegenseitig:

- **Steinbruch:** Abgebaut werden nur Ablaufprinzipien nach D-033 (Katalog als Suchstelle,
  Mittelmaß als Prüfung, Regelbedarf im Skill-Kopf). Fremde Skills, Skripte und Linter-Code
  werden nicht übernommen, und die Lizenz jeder Karte wird selbst nachgeprüft.
- **Negativfolie:** OpenDesign zeigt gut dokumentiert, wie KI-Gestaltung im Jahr 2026
  durchschnittlich aussieht. Das ist die Negativfolie, die der Skill `kritik` braucht (A06).
  Die Liste gegen Mittelmaß beschreibt die *alten* Erkennungszeichen von KI-Gestaltung. Die
  Regelwerke selbst (Skala 1,2, Body 15–18 px, Marken-DESIGN.md) beschreiben das *neue*
  Mittelmaß: Wer alle Erkennungszeichen vermeidet, landet beim nächsten Standard.
  *abgeleitet, nicht an Werken geprüft*
- **Zusammenspiel:** Eine Prüfung, die das Labor von dort übernimmt, fängt nur das Erwartbare
  ab. Für bewusste Abweichung sorgt sie nicht; dafür bleiben Kritik und Mensch zuständig.

## 4 · Vergleich je Fähigkeit

| Fähigkeit | Bisheriger Weg im Labor | Fundstück | Mehrwert | Risiko |
|---|---|---|---|---|
| fertige Skills finden (A10) | einzelne Fundstücke, Radar | geordneter Katalog, 296 Einträge, Lizenz je Karte | Ergänzung: erste Suchstelle vor dem Bau | Aggregator eines Anbieters; Lizenzangaben selbst nachprüfen |
| Mittelmaß erkennen (A06) | Prosa-Liste im Fachpaket Form, Kritik-Skill | Linter mit Prüfgrenze | Arbeitsmuster: ausgewählte Muster als Prüfung in `tools/` | Bildschirm- und Web-Muster, nicht übertragbar auf Druck; Code nicht übernehmen |
| Regeln zuschalten | `laborarbeit` lädt Referenzen per Text | `requires:` im Skill-Kopf | Erkenntnis: Bedarf an Regeln maschinenlesbar machen, wie schon `dient:` | neue Struktur, nur mit Freigabe |
| Design-System | `system/`, DTCG-Tokens | `DESIGN.md` je Marke, 154 Nachbildungen | kaum; Labor arbeitet nicht mit fremden Marken | Markennachbildungen, Rechte unklar |
| Prototyp aus Briefing | Claude im Repo, Artefakte | Desktop-App oder Cloud | keiner gegenüber dem Bestehenden | Telemetrie an, Guthaben-Abo, zweite Werkzeugschicht |

## 5 · Prüfen

- **Überschneidung:** hoch bei Kritik, Barrierefreiheit und Design-Systemen (vorhandene
  Skills im Labor und in den installierten Plugins); gering bei Katalog und Linter.
- **Unabhängigkeit:** Skills sind offenes `SKILL.md`, also austauschbar; die App ist
  Open Core mit Cloud-Anreiz.
- **Sicherheit (A15):** App schickt standardmäßig Nutzungsdaten an Dritte (PostHog,
  Langfuse); ein Kanal ist nicht abschaltbar. Fremde Skills aus 84 Repos sind ungeprüft.
  Nach D-033 werden nur Ablaufprinzipien übernommen, keine Skripte und keine Installation.
- **Betrieb, Rückbau, Kosten:** Ein Radar-Eintrag kostet nichts und ist rückbaubar; eine
  Installation der App wäre beides nicht sicher.

## 6 · Integrationsgrad und Status

- **Integrationsgrad:** `referenzieren` (Katalog als Suchstelle vor dem Bau) ·
  `Erkenntnis übernehmen` (Mittelmaß als Prüfung mit ausgewiesener Prüfgrenze; Regelbedarf
  im Skill-Kopf) · Negativfolie für `kritik` (Abschnitt 3a).
- **Nicht:** App installieren, Skills oder Linter-Code übernehmen, Design-Systeme nutzen.
- **Status:** ~~`beobachten`~~, korrigiert am 14.11., siehe Abschnitt 9.

## 7 · Frage an den Eigentümer

Soll das Labor einen kleinen Pilot machen: drei bis fünf Mittelmaß-Muster aus dem Fachpaket
Form (z. B. falsche Anführungszeichen, Versalien ohne Sperrung, Zeilen über 80 Zeichen) als
automatische Prüfung für Studien und Flyer, mit ausgewiesener Grenze, was die Prüfung nicht
sieht? Empfehlung: ja, als Experiment; es wäre eine neue Prüfung, daher die Frage.

## 8 · Vertiefung: Aufbau der Skills, Entwurf und Methode, UI/UX und Informationsarchitektur

Auftrag des Eigentümers (Chat, 14.11.): Was müssen wir noch festlegen, was haben die anderen
als neuen Durchschnitt, was haben wir gar nicht, wie sind die Skills aufgebaut und arbeiten sie
effizient, Prosa oder Regeln, nur Umsetzung oder auch Entwurf und Methode, UI/UX,
Informationsarchitektur. Gesichtet: alle 169 `SKILL.md` im Repo OpenDesign (Stand 13.11.) und
die 111 `SKILL.md` der Hauptquelle für UX im Katalog, `Owl-Listener/designer-skills` (MIT,
Stand 05.09.2026). Ausgezählt mit einem Skript, Stichproben gelesen.

### 8.1 · Wie die Skills aufgebaut sind (belegt, Zählung)

| | OpenDesign | designer-skills (UX) | Labor |
|---|---|---|---|
| Anzahl | 169 | 111 | 14 |
| Länge (Median, Zeichen) | 1516 | 2092 | 2900 (Fachpakete 14 000–15 000) |
| Inhalt liegt … | bei 144 von 169 nur ein Verweis auf das Ursprungs-Repo („Katalogeintrag“) | im Skill selbst | im Skill selbst |
| Quellen | 148 mit URL, fast nur das Ursprungs-Repo | 1 mit URL, 4 mit Autor oder Jahr | Pflicht, Belegstatus je Aussage |
| maschinenlesbarer Kopf | `od:` mit Modus, Eingaben, Ausgaben, Vorschau, Fähigkeiten, `craft.requires` | `name`, `description` mit „Use when … For X use Y“, Linter | `dient: A..`, vom Build geprüft |
| Aufteilung | Regelwerke je Abschnitt zuschaltbar | ein Skill = eine Methode | Fachpaket als ein Block; nur `laborarbeit` teilt in Referenzen |

**Effizienz (abgeleitet):** OpenDesign ist billig beim Laden, weil der Katalogeintrag kurz ist
und nur verlangte Regelwerke geladen werden; das eigentliche Wissen fehlt dann aber oder kommt
ungeprüft von außen. designer-skills ist knapp und klar abgegrenzt; die Beschreibung nennt den
Nachbar-Skill, das hilft dem Modell bei der Wahl. Das Labor lädt seine Fachpakete ganz (rund
14 000 Zeichen), auch wenn nur ein Abschnitt gebraucht wird.

### 8.2 · Der neue Durchschnitt (abgeleitet, mit Belegen)

1. **Entwurf als Parameterwahl.** Der Skill `design-brief` zerlegt jedes Briefing in acht
   Dimensionen (Palette, Schrift, Layout, Stimmung, Dichte …), *abgeleitet aus 71
   Marken-Design-Systemen*. Entwurf wird damit zur Auswahl aus dem, was es schon gibt: Mittelmaß
   durch Konstruktion. *belegt (Datei), Deutung abgeleitet*
2. **Regeln ohne Situation.** Pixelwerte ohne Medium, Abstand, Publikum (vgl. A28).
3. **Expertenrolle statt Beleg.** designer-skills beginnt mit „You are an expert in …“ und gibt
   Faustregeln als Tatsachen. Beispiel: `information-architecture` fordert, jedes Element in
   „unter 3 Klicks“ erreichbar zu machen. Diese Drei-Klick-Regel gilt seit Porter (UIE, 2003)
   als widerlegt: Abbruch und Zufriedenheit hängen nicht an der Zahl der Klicks
   ([NN/g](https://www.nngroup.com/articles/3-click-rule/), [Porter](https://articles.centercentre.com/three_click_rule/)). *belegt*
4. **Umsetzung vor Entwurf.** Die Modi bei OpenDesign: 45 Prototyp, 36 Design-System, 28 Bild,
   17 Video, 9 Folien. Entwurfsfragen (Wozu, für wen, welche Haltung) kommen kaum vor.
5. **Brauchbar und besser als Durchschnitt:** die Trennung von Beleg und Deutung in
   `empathy-map` und `affinity-diagram`; „Heuristic Evaluation“ gibt Expertenurteil nicht als
   Nutzerforschung aus; die Prüfgrenze beim Linter (Abschnitt 3).

### 8.3 · Was das Labor nicht hat (belegt, Bestand 14.11.)

- **Interaktion, UX, Informationsarchitektur:** kein Fachpaket (so auch
  [Arbeitsoberfläche, Abschnitt 4](../2026-11-arbeitsoberflaeche/analyse.md)); im Intent steht
  unter A01 nur „HMI“, UX und Informationsarchitektur fehlen als Feld. Der Skill `kritik` nennt
  Heuristiken und WCAG nur in einem Satz.
- **Methoden der Nutzerforschung** (Interview, Kartensortierung, Tree-Test, Journey,
  Service Blueprint): keine. Im Claude-Konto des Eigentümers sind dafür fremde Plugins
  installiert (u. a. `design-skills`, `design`, `ux-agent-skills`); das Labor kennt und
  bewertet sie nicht. Herkunft nicht geprüft.
- **Vertrag im Skill-Kopf:** Eingaben, Ergebnis, Vorschau, benötigte Regelwerke.
- **Maschinelle Prüfung** von Mittelmaß-Mustern.

### 8.4 · Prosa oder Regeln: drei Schichten (Vorschlag, nicht beschlossen)

Weder reine Prosa (Labor) noch kontextlose Regeln (OpenDesign) reichen. Vorschlag:

1. **Kanon als Prosa mit Quelle**, wie heute im Fachpaket: Begründung, Spannung, Grenze.
2. **Abgeleitete Regel**, prüfbar, mit drei Pflichtangaben: Quelle im Kanon, Geltungsbereich
   (Medium, Abstand, Publikum, A28) und Prüfgrenze (was die Prüfung nicht sieht). Ohne
   Geltungsbereich keine Regel. Diese Angaben unterscheiden das Labor vom neuen Durchschnitt.
3. **Frisch gezogen je Auftrag:** Stand der Technik und fremde Skills werden zur Aufgabe aus
   Radar und Katalogen geholt, mit Datum und Belegstatus, und verfallen. Sie werden nicht
   dauerhaft in den Kanon kopiert.

Effizienz: Fachpakete nach Abschnitten teilen und im Skill-Kopf angeben, welche Abschnitte ein
Auftrag braucht (wie `craft.requires`, analog zu `dient:`).

### 8.5 · Entwurf und Methode

Es geht um beides. Umsetzung ist bei den anderen gut abgedeckt und am wenigsten Lücke; die
Lücke des Feldes liegt bei Entwurfsfragen und Methode mit Beleg. Für das Labor heißt das: von
außen Umsetzungsmuster und Methodenlisten abbauen (Steinbruch), Entwurfshaltung, Situation und
Beleg selbst tragen (Negativfolie). *abgeleitet*

### 8.6 · Fragen an den Eigentümer

1. Sollen UX, Interaktionsgestaltung und Informationsarchitektur ein eigenes Feld in A01
   werden, mit einem Fachpaket aus der geplanten Recherche R1 (Arbeitsoberfläche) und
   designer-skills als Steinbruch? Empfehlung: ja, ein gemeinsames Fachpaket „Interaktion und
   Struktur“; das Labor selbst ist der erste Prüffall.
2. Gelten die drei Schichten (8.4) als Regelformat für Fachpakete, zuerst erprobt am Fachpaket
   Form mit dem Mittelmaß-Pilot? Empfehlung: ja, als Experiment.

## 9 · Korrektur des Eigentümers und neue Einordnung (14.11.)

**Korrektur (Chat, 14.11.):** „Es ist nicht so, dass das Fundstück nicht wertvoll für uns ist.
Wiedermal hast du seinen Wert für das Labor unterschätzt.“ Die Einstufung „beobachten“ war falsch.

**Ursachen (abgeleitet aus dem eigenen Ablauf, Prüffall `fundstueck-wert`):**
1. **Gedächtnis nicht gelesen:** OpenDesign war seit 29.10. als #98 im Labor, mit demselben
   Urteil und offenen Aufnahme-Punkten (gstack prüfen, Gegenlesen). Der Befund
   [Fundstück-Passung](../2026-11-fundstueck-passung/befund.md) hatte #98 bereits als Fall genannt,
   in dem technische Vorsicht den fachlichen Wert verdeckt.
2. **Wert mit Übernahme verwechselt:** Die Statusliste im Skill beschrieb nur den Lebenszyklus
   eines Werkzeugs; „beobachten“ war der sichere Ausgang für alles, was man nicht installiert.
3. **Werkzeugrisiko färbte den Wissenswert:** Telemetrie und Abo der App bestimmten das
   Gesamturteil, obwohl Katalog, Regelwerke und Methoden davon nicht betroffen sind.
4. **Bedarf nur gegen die Liste im Intent:** UX und Informationsarchitektur standen dort nicht,
   also wurde die Lücke im ersten Durchgang nicht gesehen.
5. **Flache Sichtung:** bewertet auf einer abgeschnittenen Katalogseite (164 von 296 Einträgen).
6. **Kein Gegenlesen:** Das in #98 vorgesehene Gegenlesen durch ein anderes Modell lief nie.

**Neue Einordnung je Bestandteil:**

| Bestandteil | Ertrag | Status | Zielort und Auftrag |
|---|---|---|---|
| Katalog (296 Skills, 84 Repos) | Suchstelle, Steinbruch | `abbauen` | erste Suchstelle vor jedem Bau (A10); UX-Methoden in die Recherche 0037 (#237) |
| `designer-skills` (111 UX-Skills, MIT) | Steinbruch, teils Negativfolie | `abbauen` | Recherche 0037: Methoden übernehmen, Faustregeln einzeln prüfen |
| `craft/`-Regelwerke | Negativfolie, Muster für zuschaltbare Abschnitte | `abbauen` | `kritik` und Fachpakete; Regelformat 0038 |
| `lint-artifact` (Prüfwerkzeug) | Arbeitsmuster: Mittelmaß als Prüfung mit Prüfgrenze | `Pilot` | Pilot Mittelmaß-Prüfung am Fachpaket Form (0038) |
| `design-brief` (acht Dimensionen) | Negativfolie: Entwurf als Parameterwahl | `abbauen` | `kritik`, Fachpaket Interaktion und Struktur |
| Skill-Kopf `od:` (Eingaben, Ergebnis, `requires`) | Arbeitsmuster | `Pilot` | Fachpakete in Abschnitte teilen (0038) |
| App und Cloud | – | `verwerfen` | Begründung: Telemetrie standardmäßig an, ein Kanal nicht abschaltbar, Abo; Werkzeugschicht neben dem Labor |
| gstack (aus #98) | offen | `beobachten` | wird mit der Recherche 0037 mitgeprüft |

**Entscheidungen daraus:** [0037](../../decisions/0037-feld-interaktion-und-struktur.md) ·
[0038](../../decisions/0038-regeln-in-drei-schichten.md) ·
[0039](../../decisions/0039-quellen-pruefen-und-frisch-halten.md).
