---
thema: Das System in Ordnung bringen
stand: Umbau läuft – Stand als Datenquelle (#103), schlanker Kern (U3, #108), Audit paleo-type (#112) und Messen und warnen (#116) übernommen; Neustart-Test #110 geprüft, vier Fälle nicht getestet
naechster_schritt: Astra bringt #110 auf den Stand von main; der Eigentümer entscheidet, wie die Startfälle frisch laufen (#109); Claude prüft nach Astras Gegenlesen #100 und spezifiziert U4.
offen: [40, 56, 62, 100, 109]
---

# Thema: Das System in Ordnung bringen

Die Befunde der Untersuchung stehen in `research/2026-10-audit-zusammenarbeit/befunde.md`;
die vier Fragen und Vorschläge in `research/2026-10-audit-zusammenarbeit/auftraege.md`.
Das Audit der Lesekosten liegt in `research/2026-10-lesekosten/befund.md`.
Astra liest die Befunde gegen (#100). Der Plan steht in #62.

Der Stand wird seit #103 aus diesem Kopf erzeugt und gegen GitHub geprüft. Umbauplan: `research/2026-10-umbau/plan.md` (U1–U9). Frühere Inhalte dieses Merkzettels
stehen im [Verlauf](../stand-verlauf.md).

## Audit paleo-type · #112 (30.10.2026)

21 Musterkarten, zehn gezielt ausgewählte Originalprüfungen und ein Schichteninventar stehen unter [den paleo-type-Befunden](../research/2026-10-audit-paleo-type/befunde.md). Die private Quelle wurde nur gelesen; öffentlich sind ausschließlich abstrahierte Muster und Pfadverweise. **Geprüft (Claude, 30.10.):** Acht der zehn Belege stimmen; zwei Karten waren zu hart und sind berichtigt ([Gegenprüfung](../research/2026-10-audit-paleo-type/pruefung.md)). Kern: Enge Prüfungen halten, was sie prüfen; ein bestandener Nachtest schützt nicht vor dem verwandten nächsten Fehler. **Offen beim Eigentümer:** die drei Fragen in den Befunden. Keine Regel oder Maßnahme beschlossen.

## #116 · Messen und warnen · übernommen (30.10.2026)

Längengrenzen warnen nur noch; `tools/messwerte.mjs` misst im CI Start-Lesekosten (6.223 Zeichen) und gesetzte Labels `eingriff`; PRs trennen Build, frischen Kontext und Ergebnis. Geprüft und übernommen von Claude ([Prüfung](https://github.com/esany/design-lab/pull/118#issuecomment-6512259942)); Label angelegt, `\n`-Fehler im Prüffall berichtigt. Der neue Fall „Folgeauftrag nach Teilerfolg“ ist nicht getestet.

## Neustart-Test U3 · #110 geprüft (30.10.2026)

Astras Protokoll stimmt (Zeichenzahlen, Labels, Zitat nachgeprüft). Alle vier Startfälle sind **nicht getestet**, weil der Chat Projektkontext hatte; drei Zusatznachrichten nur beschrieben, die „radar.md“-Antwort ohne Quelle/`fundstueck` unvollständig. PR #110 hat Konflikte mit `main`. [Prüfung](https://github.com/esany/design-lab/pull/110#issuecomment-6512047766). **Offen beim Eigentümer:** echte frische Sitzungen für die Startfälle.
