# Implizite Verweise in den 24 Leitfadeneinträgen

Geprüft wurden bei allen 24 Einträgen die Felder Regel, Kurz, Warum, Beispiel, Vertiefung, Labor und Quellen. Als implizit gelten konkrete Verweise auf Projekte, Issues, Dateien, Gespräche oder Vorfälle des Labors oder der eigenen Arbeit; allgemeine Formulierungen ohne eindeutigen Bezug stehen als „unklar“ mit Begründung. Jede Fundstelle ist ein Wortlaut von höchstens 15 Wörtern. Die Quellenkennungen sind die Einträge aus corpus/referenzen.json oder corpus/recherche.json; „nein“ bedeutet, dass das Feld quellen leer ist. Interne Laborbelege zählen nicht als Quelle aus der Fachwelt.

| Kennung | Regel | Feld | Fundstelle (Wortlaut, höchstens 15 Wörter) | Art | Quelle aus der Fachwelt vorhanden |
|---|---|---|---|---|---|
| k-zweck | Sag, wofür – nicht nur was. | vertiefung | „Was im Projekt steht, liest die KI selbst.“ | unklar — kein konkretes Projekt benannt; allgemeiner Hinweis | ja: anthropic-claude-code-praxis; anthropic-prompting-praxis |
| k-pruefung | Gib der KI eine Prüfung, die sie selbst ausführen kann. | vertiefung | „Das Labor macht es so in seiner Qualitätsschleife“ | Beispiel aus eigener Arbeit | ja: anthropic-claude-code-praxis |
| k-pruefung | Gib der KI eine Prüfung, die sie selbst ausführen kann. | labor | .agents/skills/laborarbeit/references/pruefen.md | Datei | ja: anthropic-claude-code-praxis |
| k-zweitblick | Lass die KI ihre eigene Arbeit nicht selbst abnehmen. | vertiefung | „In einer Testreihe von Wissensarbeit lagen 12 von 12 gemeldeten Fehlern beim Prüfer“ | Projekt | ja: panickssery-2024-selbst; anthropic-claude-code-praxis |
| k-zweitblick | Lass die KI ihre eigene Arbeit nicht selbst abnehmen. | labor | research/2026-10-audit-zusammenarbeit/befunde.md | Datei | ja: panickssery-2024-selbst; anthropic-claude-code-praxis |
| k-kontext | Gib gezielten Kontext, nicht alles. | vertiefung | „Im Labor gemessen: Der Startpfad kostete etwa dreimal so viel wie nötig“ | Beispiel aus eigener Arbeit | ja: chroma-context-rot-2025; anthropic-kontext-2025; anthropic-claude-code-praxis |
| k-kontext | Gib gezielten Kontext, nicht alles. | labor | research/2026-10-lesekosten/befund.md | Datei | ja: chroma-context-rot-2025; anthropic-kontext-2025; anthropic-claude-code-praxis |
| k-neustart | Nach zwei Korrekturen: neu anfangen statt weiter korrigieren. | vertiefung | „im Labor: Merkzettel und Repo“ | unklar — allgemeiner Hinweis auf Laborstrukturen, ohne konkrete Datei | ja: anthropic-claude-code-praxis |
| k-neustart | Nach zwei Korrekturen: neu anfangen statt weiter korrigieren. | labor | decisions/0024-kein-wissen-nur-im-chat.md | Datei | ja: anthropic-claude-code-praxis |
| k-beispiele | Zeig wenige gute Beispiele statt vieler Sonderfälle. | vertiefung | „Die Negativfolie des Labors (die Durchschnittslösung) ist so ein Gegenbeispiel.“ | Beispiel aus eigener Arbeit | ja: anthropic-kontext-2025 |
| k-beispiele | Zeig wenige gute Beispiele statt vieler Sonderfälle. | labor | .agents/skills/kritik/SKILL.md | Datei | ja: anthropic-kontext-2025 |
| k-gefaelligkeit | Rechne mit Zustimmung – frag nach Widerspruch. | vertiefung | „Im Labor gilt deshalb ‚Widerspruch ist Pflicht‘“ | Beispiel aus eigener Arbeit | ja: sharma-2023-gefaelligkeit; cheng-2026-gefaelligkeit |
| k-gefaelligkeit | Rechne mit Zustimmung – frag nach Widerspruch. | labor | .agents/skills/laborarbeit/references/pruefen.md | Datei | ja: sharma-2023-gefaelligkeit; cheng-2026-gefaelligkeit |
| k-status | Verlange zu jeder Aussage, woher sie kommt. | warum | „häufigsten Fehler, die das Labor dokumentiert hat“ | Beispiel aus eigener Arbeit | nein |
| k-status | Verlange zu jeder Aussage, woher sie kommt. | vertiefung | „Diese Regel stammt aus der Arbeit des Labors“ | Beispiel aus eigener Arbeit | nein |
| k-status | Verlange zu jeder Aussage, woher sie kommt. | labor | decisions/0007-belegpflicht.md | Datei | nein |
| k-status | Verlange zu jeder Aussage, woher sie kommt. | labor | research/2026-10-audit-zusammenarbeit/befunde.md | Datei | nein |
| k-unsicherheit | Lass die KI Unsicherheit in Worten sagen – in der Ich-Form, nicht in Prozent. | vertiefung | „siehe ‚Verlange zu jeder Aussage, woher sie kommt‘“ | unklar — Querverweis auf eine andere Leitfadenregel, keine Datei genannt | ja: kim-2024-unsicherheit; xiong-2024-konfidenz; amershi-2019-hax |
| k-nichtwissen | Erlaube ausdrücklich „Das weiß ich nicht“ und „Hier höre ich auf“. | — | keiner | — | ja: openai-2025-halluzination; cheng-2026-gefaelligkeit |
| k-aufwand | Steuere die Denktiefe über die Einstellung, nicht über Formeln. | — | keiner | — | ja: anthropic-claude-code-praxis |
| w-sperren | Was immer gelten muss, als Sperre bauen, nicht als Satz. | warum | „Im Labor und in Wissensarbeit wurden selbst geschriebene Regeln Stunden später gebrochen.“ | Beispiel aus eigener Arbeit; Projekt | ja: anthropic-claude-code-praxis |
| w-sperren | Was immer gelten muss, als Sperre bauen, nicht als Satz. | labor | research/2026-10-audit-zusammenarbeit/befunde.md | Datei | ja: anthropic-claude-code-praxis |
| w-sperren | Was immer gelten muss, als Sperre bauen, nicht als Satz. | labor | research/2026-10-audit-paleo-type/befunde.md | Datei | ja: anthropic-claude-code-praxis |
| w-regelflut | Antworte auf einen Fehler nicht reflexhaft mit einer neuen Regel. | warum | „In paleo-type traten Fehler teils erst auf, nachdem die passende Regel schon aufgeschrieben war.“ | Projekt | nein |
| w-regelflut | Antworte auf einen Fehler nicht reflexhaft mit einer neuen Regel. | warum | „In Wissensarbeit wuchs die Stützarbeit aus Berichten, Reviews und Regeln schneller als die eigentliche Arbeit.“ | Projekt | nein |
| w-regelflut | Antworte auf einen Fehler nicht reflexhaft mit einer neuen Regel. | labor | research/2026-10-audit-paleo-type/befunde.md | Datei | nein |
| w-regelflut | Antworte auf einen Fehler nicht reflexhaft mit einer neuen Regel. | labor | research/2026-10-audit-zusammenarbeit/befunde.md | Datei | nein |
| w-ein-ort | Halte den Stand an genau einem Ort. | warum | „Im Labor ist das passiert: Ein geschlossenes Issue galt im Merkzettel noch als offen.“ | Vorfall | nein |
| w-ein-ort | Halte den Stand an genau einem Ort. | vertiefung | „Wissensarbeit führte die ‚mehreren Uhren‘ als wichtigsten Befund.“ | Projekt | nein |
| w-ein-ort | Halte den Stand an genau einem Ort. | labor | research/2026-10-lesekosten/befund.md | Datei | nein |
| w-ein-ort | Halte den Stand an genau einem Ort. | labor | research/2026-10-audit-zusammenarbeit/befunde.md | Datei | nein |
| w-gruen | Grün ist nicht fertig. | warum | „In paleo-type blieben Aufgaben trotz grüner Prüfungen offen“ | Vorfall | nein |
| w-gruen | Grün ist nicht fertig. | labor | research/2026-10-audit-paleo-type/befunde.md | Datei | nein |
| w-lesart | Lass die KI die Lesart nennen, bevor sie loslegt. | warum | „Das häufigste Fehlermuster in den Audits“ | unklar — „Audits“ benennt nicht, welche Prüfung oder welchen Vorfall | ja: anthropic-claude-code-praxis |
| w-lesart | Lass die KI die Lesart nennen, bevor sie loslegt. | labor | research/2026-10-audit-zusammenarbeit/befunde.md | Datei | ja: anthropic-claude-code-praxis |
| w-vorhaben | Erst das Vorhaben freigeben, dann handeln lassen. | beispiel | „‚Arbeitsweise, weiter.‘ – die KI baut los.“ | unklar — als Beispiel formuliert; nicht belegt, ob dies ein konkretes Gespräch zitiert | ja: anthropic-agenten-2025; anthropic-agenten-2026 |
| w-vorhaben | Erst das Vorhaben freigeben, dann handeln lassen. | beispiel | „Regel 0024 neu fassen“ | Datei | ja: anthropic-agenten-2025; anthropic-agenten-2026 |
| w-vorhaben | Erst das Vorhaben freigeben, dann handeln lassen. | vertiefung | „Am 05.11.2026 las ein Chat im Labor“ | Vorfall | ja: anthropic-agenten-2025; anthropic-agenten-2026 |
| w-vorhaben | Erst das Vorhaben freigeben, dann handeln lassen. | labor | research/2026-11-wissensformen/issues-als-steuerung.md | Datei | ja: anthropic-agenten-2025; anthropic-agenten-2026 |
| w-runden | Begrenze Prüfrunden – danach entscheidest du. | warum | „In Wissensarbeit durchlief eine kleine Korrektur drei Reviews und zwei Prüfläufe“ | Projekt | ja: anthropic-claude-code-praxis |
| w-runden | Begrenze Prüfrunden – danach entscheidest du. | labor | research/2026-10-audit-zusammenarbeit/befunde.md | Datei | ja: anthropic-claude-code-praxis |
| v-rolle | „Du bist ein erfahrener Experte für …“ | — | keiner | — | ja: zheng-2024-personas; basil-2025-rollen; palmer-2026-rollen; araujo-2025-personas; mullens-2026-personas |
| v-schritt | „Denk Schritt für Schritt.“ · „Denk gründlich nach.“ | — | keiner | — | ja: meincke-2025-cot; anthropic-claude-code-praxis |
| v-schreien | WICHTIG, KRITISCH, MUSS in Großbuchstaben | — | keiner | — | ja: anthropic-claude-code-praxis; anthropic-prompting-praxis |
| v-weiter | „Mach weiter, bis alles fertig ist. Sei nicht faul.“ | — | keiner | — | ja: anthropic-claude-code-praxis |
| v-platz | Platz im Kontextfenster um jeden Preis sparen | — | keiner | — | ja: anthropic-claude-code-praxis |
| v-helfer | Für eine bessere Antwort an einen Helfer abgeben | — | keiner | — | ja: anthropic-claude-code-praxis |

## Zählung je Art

Ein Fund kann mehrere Arten berühren, wie bei „Im Labor und in Wissensarbeit“. Gezählt sind die erfassten Fundstellen; „unklar“ bleibt als eigene Art stehen.

| Art | Anzahl |
|---|---:|
| Projekt | 6 |
| Issue | 0 |
| Datei | 19 |
| Gespräch | 0 |
| Vorfall | 3 |
| Beispiel aus eigener Arbeit | 7 |
| unklar | 5 |

## Einträge ohne Quelle aus der Fachwelt

k-status, w-regelflut, w-ein-ort, w-gruen.
