---
dient: A04, A06, A10, A11, A15, A27
datum: 2026-11-14
modell: Claude Opus 5.5 (Claude-App, Cloud-Sitzung)
status: Fundstück bewertet nach Skill `fundstueck`. Nicht gegengelesen. Keine Regel abgeleitet; eine Frage an den Eigentümer.
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
- **Status:** `beobachten`. Radar-Ring „Beobachten“.

## 7 · Frage an den Eigentümer

Soll das Labor einen kleinen Pilot machen: drei bis fünf Mittelmaß-Muster aus dem Fachpaket
Form (z. B. falsche Anführungszeichen, Versalien ohne Sperrung, Zeilen über 80 Zeichen) als
automatische Prüfung für Studien und Flyer, mit ausgewiesener Grenze, was die Prüfung nicht
sieht? Empfehlung: ja, als Experiment; es wäre eine neue Prüfung, daher die Frage.
