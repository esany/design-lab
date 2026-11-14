---
name: fundstueck
description: Use when a new tool, project, repo, MCP server, external skill, method, text, person, collection or conference is brought in — evaluates its subject and methodological knowledge and its interplay with the lab, then its fit, security and independence, before anything is adopted. Derived from D3sign D-032/D-033.
dient: A01, A03, A04, A10, A15, A27
---

# Fundstück bewerten

Ein Fundstück kann wertvoll sein, ohne dass man es installiert. Ziel ist der
Lerngewinn — nicht eine weitere Werkzeugschicht. **Wert und Übernahme sind zwei
Fragen:** Wie viel ein Fundstück dem Labor bringt, misst sich am Ertrag, nicht daran,
ob man es installiert. Ein Werkzeug, das man nicht einsetzt, kann ein reicher
Steinbruch und eine gute Negativfolie sein.

## Ablauf

0. **Gedächtnis zuerst:** Gab es das Fundstück oder seine Quellen schon im Labor?
   Issues (auch geschlossene), `radar.md`, `research/`, `corpus/` durchsuchen. Eine
   frühere Bewertung wird fortgeführt und ihre offenen Punkte erledigt, nicht neu
   begonnen (Umsetzen vor Neuem).
1. **Was ist es?** In **Bestandteile zerlegen** (z. B. App, Katalog, Regelwerke,
   Prüfwerkzeug, Quellen dahinter); jeder Bestandteil wird für sich bewertet, ein
   Risiko gilt nur für den Bestandteil, den es betrifft.
   **Ganz sichten, bevor bewertet wird:** Ist eine Seite abgeschnitten oder nur eine
   Stichprobe gelesen, steht das da, und die Bewertung bleibt vorläufig. Wirkprinzip in zwei Sätzen, Herkunft, Lizenz, Träger,
   Stand (Datum). Belegpflicht.
2. **Prüffrage Bedarf — vor jedem Vergleich:** Welcher Anforderung im
   [Intent](../../../intent.md) dient es, und welche Lücke schließt es? Das
   Labor zielt auf Umsetzung bis zum funktionierenden Werkzeug und Artefakt,
   nicht nur auf die Skizze. Fehlt dem Labor ein Weg für diese Fähigkeit, ist
   das ein **Bedarf**, kein Zeichen für „passt nicht“ oder „geringe
   Überschneidung“. Antwort mit Anforderung (A..) und Status.
   **Auch gegen das Feld prüfen, nicht nur gegen die Liste im Intent:** Deckt das
   Fundstück ein Feld oder eine Methode ab, die das Labor gar nicht führt (Fall
   OpenDesign: UX, Interaktionsgestaltung, Informationsarchitektur), ist das ein Bedarf
   und eine Frage an den Eigentümer, ob der Intent erweitert wird.
   Schwache Belege im Fundstück sind kein Ausschluss: Sie bestimmen, wie abgebaut wird
   (nur mit eigener Prüfung), und machen es oft zur Negativfolie.
   Prüffall: [`evals/fundstueck-bedarf`](../../../evals/fundstueck-bedarf/aufgabe.md).
3. **Fachlicher und methodischer Gehalt:** Welches Wissen trägt es, in
   Theorie und Praxis, auf welcher Ebene (vom Zweck bis zur Technik), für
   welches Feld, mit welcher Belegstärke? Wie wirkt es mit Vorhandenem
   zusammen, quer über Felder und Ebenen, und was zahlt es auf die Entwicklung
   des Labors selbst ein? Ein Fundstück muss kein Werkzeug sein: Text, Person,
   Sammlung, Methode und Haltung zählen genauso. Zielort des Ertrags nennen
   (Korpus, Fachpaket, Skill, Experiment, Radar). Gezielte Fragen statt
   Pflichtabschnitte.
   Herkunft: Eigentümer, 13.11.2026, Zielbild Bug #200 („Fundstück im Sinne
   aller fachlichen und methodischen Fragen“); Befund
   [`fundstueck-passung`](../../../research/2026-11-fundstueck-passung/befund.md).
4. **Vergleich je betroffener Fähigkeit**:

   | Fähigkeit | Bisheriger Weg im Labor | Fundstück | Mehrwert | Risiko |
   |---|---|---|---|---|

   Mehrwert und Risiko immer *gegenüber dem Bestehenden*: Ergänzung, Ersatz,
   Rückfallebene bei Preis- oder Anbieteränderung?
5. **Prüfen:** Überschneidung mit Vorhandenem · Unabhängigkeit (offen,
   austauschbar?) · Sicherheit (Rechte, Datenwege, Marktplätze, bekannte
   Lücken) · Betrieb und Pflege · Rückbaubarkeit · Kosten.
6. **Ertrag vor Übernahme:** je Bestandteil eine Zeile *Ertrag · Zielort · Auftrag*.
   Ertragsarten: `Steinbruch` (Wissen, Methoden, Muster aktiv abbauen) ·
   `Negativfolie` (zeigt das erwartbare Mittelmaß, für `kritik` und Fachpakete) ·
   `Suchstelle` (vor dem Bau nachsehen) · `Werkzeug`. Zielorte: Korpus, Fachpaket,
   Skill, Prüfwerkzeug, Experiment, Radar. Jeder Ertrag endet als Auftrag (Issue),
   nicht nur als Radarzeile.
7. **Integrationsgrad wählen** — einer oder mehrere:
   `beobachten` · `Erkenntnis übernehmen` · `Arbeitsmuster übernehmen` ·
   `abbauen` · `begrenzter Pilot` · `integrieren` · `referenzieren`
8. **Status setzen** — je Bestandteil genau einer:
   `beobachten` · `abbauen` · `Pilot` · `integriert` · `bewusst bewahren` · `verwerfen`.
   `beobachten` und `verwerfen` brauchen eine Begründung, warum *jetzt kein Ertrag*
   möglich ist. Haben sie einen Bedarf aus Schritt 2 gegen sich, liest ein **anderes
   Modell** gegen, bevor die Bewertung gilt (A26).
9. **Festhalten:** Befund in `research/`, Eintrag in `radar.md` je Bestandteil (oder
   bewusst nicht, wenn der Mensch das so entscheidet), Aufträge als Issues.
   Prüffall: [`evals/fundstueck-wert`](../../../evals/fundstueck-wert/aufgabe.md).

## Aus fremden Skills übernehmen (D-033)

Übernommen werden nur belegte, wiederverwendbare **Ablaufprinzipien** — nicht
Installation, Rechte, automatische Aktivierung oder fremde Skripte. Ein
übernommener Ablauf nennt Ziel, Voraussetzungen, Lesebereich, Schreibgrenze,
erwartetes Ergebnis und Prüfung danach. Prüf- und Lint-Ergebnisse fremder
Werkzeuge sind Vorprüfungen, keine Freigabe.

## Zum Menschen

Sicherheit, Kosten, Konten und Installation auf seinem Rechner entscheidet der
Mensch — als kurze Frage mit Empfehlung.

## Beispiel

OpenClaw (Oktober 2026): geprüft, Sicherheitsrisiken belegt, vom Menschen
verworfen — bewusst ohne Radar-Eintrag.

agent-skills (Osmani, November 2026): zuerst als „nur Softwareentwicklung,
beobachten“ abgelegt, weil das Labor keine Entwicklungsabläufe hatte. Der
Eigentümer hat korrigiert: Genau diese Lücke ist der Bedarf (#180). Daraus
entstand die Prüffrage Bedarf in Schritt 2.

OpenDesign (29.10. als #98 und 14.11. erneut): zweimal als „beobachten“ abgelegt,
weil die Risiken der App die ganze Bewertung bestimmten, die frühere Bewertung nicht
gelesen wurde und UX und Informationsarchitektur im Intent fehlten. Der Eigentümer hat
korrigiert: Es ist Steinbruch und Negativfolie zugleich. Daraus entstanden Schritt 0,
die Zerlegung in Bestandteile, die Prüfung gegen das Feld und Schritt 6.
