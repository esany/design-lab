---
name: fundstueck
description: Use when a new tool, project, repo, MCP server, external skill, method or conference is brought in — evaluates it against the lab's existing approach, security and independence before anything is adopted. Derived from D3sign D-032/D-033.
dient: A03, A10, A15, A27
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
3. **Vergleich je betroffener Fähigkeit**:

   | Fähigkeit | Bisheriger Weg im Labor | Fundstück | Mehrwert | Risiko |
   |---|---|---|---|---|

   Mehrwert und Risiko immer *gegenüber dem Bestehenden*: Ergänzung, Ersatz,
   Rückfallebene bei Preis- oder Anbieteränderung?
4. **Prüfen:** Überschneidung mit Vorhandenem · Unabhängigkeit (offen,
   austauschbar?) · Sicherheit (Rechte, Datenwege, Marktplätze, bekannte
   Lücken) · Betrieb und Pflege · Rückbaubarkeit · Kosten.
5. **Integrationsgrad wählen** — einer oder mehrere:
   `beobachten` · `Erkenntnis übernehmen` · `Arbeitsmuster übernehmen` ·
   `begrenzter Pilot` · `integrieren` · `referenzieren`
6. **Status setzen** — genau einer:
   `beobachten` · `Pilot` · `integriert` · `bewusst bewahren` · `verwerfen`
7. **Festhalten:** Eintrag in `radar.md` (oder bewusst nicht, wenn der Mensch
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
