---
name: fundstueck
description: Use when a new tool, project, repo, MCP server, external skill, method, text, person, collection or conference is brought in — evaluates its subject and methodological knowledge and its interplay with the lab, then its fit, security and independence, before anything is adopted. Derived from D3sign D-032/D-033.
dient: A01, A03, A04, A10, A15, A27
---

# Fundstück bewerten

Ein Fundstück kann wertvoll sein, ohne dass man es installiert. Ziel ist der
Lerngewinn — nicht eine weitere Werkzeugschicht.

## Ablauf

1. **Was ist es?** Wirkprinzip in zwei Sätzen, Herkunft, Lizenz, Träger,
   Stand (Datum). Belegpflicht.
2. **Prüffrage Bedarf — vor jedem Vergleich:** Welcher Anforderung im
   [Intent](../../../intent.md) dient es, und welche Lücke schließt es? Das
   Labor zielt auf Umsetzung bis zum funktionierenden Werkzeug und Artefakt,
   nicht nur auf die Skizze. Fehlt dem Labor ein Weg für diese Fähigkeit, ist
   das ein **Bedarf**, kein Zeichen für „passt nicht“ oder „geringe
   Überschneidung“. Antwort mit Anforderung (A..) und Status.
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
6. **Integrationsgrad wählen** — einer oder mehrere:
   `beobachten` · `Erkenntnis übernehmen` · `Arbeitsmuster übernehmen` ·
   `begrenzter Pilot` · `integrieren` · `referenzieren`
7. **Status setzen** — genau einer:
   `beobachten` · `Pilot` · `integriert` · `bewusst bewahren` · `verwerfen`
8. **Festhalten:** Eintrag in `radar.md` (oder bewusst nicht, wenn der Mensch
   das so entscheidet) und Zeile in `stand.md`.

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
