---
dient: A08, A14, A19, A25, A32
datum: 2026-11-11
anlass: "Eigentümer im Werkchat, 11.11.: Generator des Zielbilds allgemein machen; Gestaltungsprinzipien und Look and Feel der Seite als modulare Bausteine; prüfen, ob Fachpakete und Leitfaden sie schon tragen."
gelesen: "design-lab main@78767c5: principles.md, intent.md, decisions/0016, 0018, 0034, 0035, system/prinzipien.md, system/tokens/lab.tokens.json, Skills fachpaket-vermitteln und fachpaket-form (Stichwortsuche, nicht ganz gelesen), daten/arbeitsweise.json (a38, a40, a41); Vorlage des Zielbilds aus PR #167"
status: Befund von Claude; Bausteine beschrieben, nichts beschlossen (Vorschlag 0036)
---

# Zielbild: Bausteine der Seite und was das Labor davon schon trägt

## In Worten

Das Zielbild ist eine Seite, auf der die KI zeigt, was sie verstanden hat, und der Mensch je Punkt
urteilt. Es entstand für den Leitfaden (PR #167) und hat sich in einem Werk bewährt. Damit jedes
Werk es nutzen kann, gibt es jetzt einen Generator: `tools/zielbild.mjs` macht aus einer Datei
`punkte.json` die Seite, prüft dabei die Daten und nimmt Farben und Schriften aus den Tokens des
Labors. Die Seite folgt acht Gestaltungsprinzipien. Sieben davon hat der Eigentümer genannt, das
achte kam bei der Prüfung dazu. Jedes ist unten als Baustein beschrieben: wozu es dient, wie die
Seite es umsetzt, woran man es prüft und wo das Labor es schon trägt. Drei sind im Labor als Regel
vorhanden, fünf nur teilweise. Die Lücken stehen am Ende.

Status je Aussage: **belegt** (Fundstelle im Labor oder in der Vorlage) · **abgeleitet** · **nicht
belegt**.

## Die Bausteine

### 1 · Status sichtbar

- **Wozu:** Der Mensch sieht bei jedem Satz, wer ihn verantwortet: von ihm gesagt, Ableitung der KI,
  Vorschlag, Befund, offene Frage, Eingang, Auftrag.
- **Umsetzung:** Jeder Punkt trägt ein Etikett mit Worten (nicht nur Farbe); Status aus einer festen
  Liste, vom Generator geprüft (belegt, `tools/zielbild.mjs`, `STATUS`).
- **Prüffrage:** Lässt sich jeder Satz ohne Farbe einem Status zuordnen?
- **Im Labor:** **getragen.** `AGENTS.md` „Aussagen über die Welt tragen einen Status“; Prinzipien 3
  und 10; `intent.md`: „Status und Quelle je Aussage“; `system/prinzipien.md`: Status „nicht allein
  durch Farbe“ (alle belegt). **Lücke:** Das Vokabular der Seite (acht Status) ist nur im Generator
  festgelegt, nicht als Begriffe des Labors; Farben für „bestätigt“ und „Vorschlag“ fehlen in den
  Tokens.

### 2 · Wandel sichtbar

- **Wozu:** Nach einer Rückmeldung sieht der Mensch sofort, was sich geändert hat, was vorher galt
  und was er gesagt hat; er muss nicht alles neu lesen.
- **Umsetzung:** Feld `n` (neu, geändert, ergänzt) mit rotem Rand; `v` zeigt den Satz vorher, `f`
  den Wortlaut der Rückmeldung; eine Änderung hebt die Bestätigung auf (vom Generator geprüft).
- **Prüffrage:** Findet der Mensch jede Änderung seit seiner letzten Rückmeldung ohne Suchen?
- **Im Labor:** **teilweise.** Für das Repo: `decisions/0034` (Verlauf als Dateien); für Aussagen:
  `abgeloest_durch` in `daten/` und das Gegenmittel zu a40 („überholt durch“ mit Link, Korrektur am
  Ort) (belegt). **Lücke:** Als Gestaltungsmuster einer Seite (vorher, du, jetzt) nirgends
  beschrieben.

### 3 · Stufen

- **Wozu:** Kernsatz zuerst, Erklärung und Grundlage auf Abruf; der Mensch entscheidet, wie tief er
  liest.
- **Umsetzung:** Satz `t` immer sichtbar; Erläuterung `k` darunter; Grundlage `g` aufklappbar
  („Worauf das beruht“); bestätigte Punkte schrumpfen auf eine Zeile.
- **Prüffrage:** Kann man die Seite nur über die Kernsätze lesen und trotzdem urteilen?
- **Im Labor:** **getragen für Studien,** nicht für Arbeitsseiten. `decisions/0016` (drei Stufen,
  technisch erzwungen, gilt für Studien); `fachpaket-vermitteln`, Kriterium „Erklären gestuft“;
  Gegenmittel zu a38 (Kontext gestuft statt bloßer Kürzel) (belegt). **Lücke:** 0016 sagt nichts zu
  Seiten, mit denen Mensch und KI zusammenarbeiten.

### 4 · Handy zuerst

- **Wozu:** Der Mensch prüft unterwegs, ohne Git und ohne Rechner.
- **Umsetzung:** eine Spalte mit höchstens 38 rem; Knöpfe für das Urteil mindestens 40 px hoch; Leiste zum
  Kopieren bleibt unten stehen; Prüfung in 390 px Breite (belegt, Vorlage).
- **Prüffrage:** Lässt sich in 390 px alles lesen und jede Schaltfläche mit dem Daumen treffen?
- **Im Labor:** **teilweise.** `intent.md` A14 („im Browser/Handy“); Token `size.measure` = 38 rem;
  `fachpaket-form` zu Zeilenlänge und Kontrast (belegt). **Lücke:** Mindestgröße von Bedienflächen
  und die Prüfbreite sind keine Regel des Labors.

### 5 · Urteil je Punkt

- **Wozu:** Der Mensch urteilt über einzelne Sätze statt ein Dokument im Ganzen abzunicken; sein
  Urteil ist so genau wie die Punkte.
- **Umsetzung:** je Punkt „passt“ oder „muss besser“ mit Notiz; bei Aufträgen „freigeben“ oder
  „anders“; bei offenen Fragen „beantwortet“. Voreingestellt ist der Filter „zur Prüfung“: nur, was
  ein Urteil braucht.
- **Prüffrage:** Gibt es einen Satz, über den der Mensch nicht einzeln urteilen kann?
- **Im Labor:** **teilweise.** `decisions/0018` (Freigabe in Alltagssprache, höchstens vier Fragen)
  verfolgt dasselbe Ziel mit anderer Form (belegt). **Lücke:** „Urteil je Punkt statt Freigabe im
  Ganzen“ ist nicht beschrieben; wie sich das zu den vier Fragen aus 0018 verhält, ist offen.

### 6 · Rückmeldung kopieren

- **Wozu:** Das Urteil kommt ohne Konto, Server oder Formular zurück in den Chat, im Wortlaut.
- **Umsetzung:** Die Seite sammelt die Urteile im Browser und baut einen Text „Rückmeldung …
  (Iteration n)“ zum Kopieren; was zählt, ist der eingefügte Text, nicht der Speicher im Browser.
  Die KI überträgt den Wortlaut in `f`.
- **Prüffrage:** Kommt jede Notiz unverändert in den Daten an?
- **Im Labor:** **teilweise.** Wortlaut als Pflicht: `decisions/0035` (jede Korrektur ein Eingang
  im Labor) und die Prüfung im Werke-Repo (belegt). **Lücke:** Der Rückweg Seite → Chat → Daten ist
  nirgends als Muster beschrieben.

### 7 · Look and Feel

- **Wozu:** Ruhig, lesbar, als Teil des Labors erkennbar; Farbe trägt Bedeutung, nicht Schmuck.
- **Umsetzung:** Papier und Tinte, Grau für Nebensachen, Signalrot nur für Änderung und Befund;
  Helvetica für Text, Monospace für Etiketten und Zahlen; helles und dunkles Schema. Der Generator
  setzt diese Werte aus `system/tokens/lab.tokens.json` ein (belegt, `tokenCss`).
- **Prüffrage:** Stammt jede Farbe und Schrift aus den Tokens, und hat jede Farbe eine Bedeutung?
- **Im Labor:** **getragen.** Tokens für Farben hell und dunkel, Schriften, Maß; `system/prinzipien.md`
  „Bedeutung vor Ausprägung“ und Token-Ebenen (belegt). **Lücke:** „bestätigt“ (grün) und
  „Vorschlag“ (ocker) haben keine Tokens; Schriftgrößen der Seite (z. B. 0,75 rem für Etiketten)
  liegen unter der kleinsten Token-Größe 0,8125 rem.

### 8 · Auftrag beruht auf Bestätigtem

- **Wozu:** Die KI arbeitet nur an dem, was der Mensch bestätigt und freigegeben hat; ein Auftrag
  zeigt, auf welchen Punkten er beruht und ob sie bestätigt sind.
- **Umsetzung:** Jeder Auftrag nennt `wer`, „Fertig, wenn“ und `stuetzt`; „startklar“ ist nur
  erlaubt, wenn alle gestützten Punkte bestätigt sind (vom Generator geprüft).
- **Prüffrage:** Gibt es einen Auftrag, der auf einem unbestätigten Punkt startet?
- **Im Labor:** **getragen.** `intent.md` A32 („Freigabe ist nicht Umsetzungsreife“) und A21 („Keine
  Strukturen ohne Freigabe“); Skill `issue` (belegt). Das Zielbild setzt es technisch durch
  (abgeleitet).

## Lücken (Liste)

| Lücke | Wo sie zu schließen wäre | Wer entscheidet |
|---|---|---|
| Farben für „bestätigt“ und „Vorschlag“ als Tokens (Rolle `status.ok`, `status.warn`) | `system/tokens` | Mensch (Gestaltung) |
| Kleine Schriftgröße für Etiketten als Token oder bewusst als Ausnahme | `system/tokens` | Mensch (Gestaltung) |
| Status-Vokabular des Zielbilds als Begriffe des Labors | Leitfaden oder `system/prinzipien.md` | Mensch |
| „Wandel sichtbar“ (vorher, du, jetzt) als Muster für Arbeitsseiten | Leitfaden-Eintrag oder Skill | Mensch |
| Stufen nach 0016 auch für Arbeitsseiten | Ergänzung zu 0016 | Mensch |
| Mindestgröße von Bedienflächen und Prüfbreite 390 px | `fachpaket-form` oder Prüfregel | Mensch |
| Urteil je Punkt im Verhältnis zu 0018 (vier Fragen) | Ergänzung zu 0018 | Mensch |
| Rückweg Seite → Chat → Daten im Wortlaut | Leitfaden-Eintrag | Mensch |

Nicht geprüft: die Fachpakete im ganzen Wortlaut (nur Stichwortsuche); ob die Seite mit
Bildschirmleser und Tastatur bedienbar ist (WCAG); Gegenlesen durch ein zweites Modell.
