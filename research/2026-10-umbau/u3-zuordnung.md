# U3 · Zuordnung der bisherigen Anweisungen

Der [unveränderte frühere Wortlaut](agents-vor-u3.txt) ist archiviert. Die Auslagerung
hebt keine Regel auf; die Referenzen des Skills sind weiterhin verbindlich. Ein Archiv
allein ist keine technische Durchsetzung. Die Prüfung anderer Modelle steht aus.

| Bisheriger Abschnitt | Ziel | Prüfung / Grenze |
|---|---|---|
| Start jeder Sitzung | `AGENTS.md`, Start | Neustart-Prüffall `evals/start`; unabhängig noch nicht ausgeführt |
| Zweck, Arbeitsteilung, Zusammenarbeit, Anforderungen, Wo was liegt | `.agents/skills/laborarbeit/references/zusammenarbeit.md` | keine automatische Prüfung der Bedeutung |
| Schreibregeln, Definition of Done | `.agents/skills/laborarbeit/references/schreiben.md` | Stand gegen GitHub prüft Verlauf und offene Issues; Build prüft `dient:` und erzeugte Dateien. Andere Regeln bleiben menschlich zu prüfen |
| Prüfen vor dem Handeln, Qualitätsschleife | `.agents/skills/laborarbeit/references/pruefen.md` | keine automatische Prüfung des Urteils |
| Evidenz und Verlässlichkeit | `.agents/skills/laborarbeit/references/belege.md` | keine automatische Prüfung der Quellenqualität |

Die 100-Zeilen-Grenze prüft `tools/build.mjs`. Die alte bedingte Startformel wird
als Anweisung ohne Vorbedingung formuliert; ein bereits gegebener Auftrag löst Arbeit aus.
Die archivierte Fassung dokumentiert die frühere Formulierung, ist keine zweite aktive Quelle.
