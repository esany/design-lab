---
dient: A07, A17, A33, A34
issue: "#112 (Teil von #62)"
datum: 2026-10-30
quellen: "esany/paleo-type (privat) main@6adf6c6, research/2026-10-audit-paleo-type/inventar.md und karten.md"
status: Befund, nicht abgenommen; keine Regel oder Maßnahme beschlossen
---

# paleo-type: Was aus Fehlern tatsächlich gelernt wurde

## Ergebnis in Worten

**Belegt:** `paleo-type` hat reale, teilweise wiederholte Assistenzfehler mit ungewöhnlich sorgfältiger Nachverfolgung dokumentiert: falsche Auftragslesart (P01), behauptete Wirksamkeit einer bloß gespeicherten Lehre (P02), Arbeit aus altem Chat (P04), fachliche Zielverschiebung durch Zugriffsprobleme (P05–P07), lokaler PASS statt Gesamtergebnis (P08) und nicht rekonstruierbare Folgearbeit (P09–P10). Die Fehler hängen häufig **nicht** daran, dass die passende Regel fehlte. Sie traten teils **nach** ihrer Niederschrift erneut auf. Belege: `paleo-type/AGENTS.md`, `engineering/evidence/learning/`, Issues #296, #297, #341, #346, #347.

**Belegt, mit engem Geltungsbereich:** Deterministische Prüfungen können präzise Zustandsfehler verhindern. Der read-only-Status und der erst nach vollständiger Finalisierung gesetzte Abschlusszustand haben konkrete Regressionstests (P11, P17; `tests/test_archival_source_acquisition.py`). Die Engineering-Baseline ist in `engineering/configuration.json` und `engineering/changes/SD-KA-01/STATE.json` maschinenlesbar, mit sechs dokumentierten Workpackage-Prüfungen (P18). **Nicht getestet in diesem Audit:** erneutes Ausführen dieser Tests. **Nicht belegt:** dass damit frische Modelle selbstständig ein ganzes Forschungsziel erreichen.

**Belegt:** Die Probleme reichen über technische Prüfungen hinaus. #297 blieb trotz lokaler CI-Erfolge offen. #296 meldet einen misslungenen frischen F1-Test nach technischer Korrektur. #341 zeigt erneut die Erfindung einer methodischen Parallelschicht trotz bestehender Fachmethode. Der erste Kontrollschicht-Audit wurde am selben Tag selbst korrigiert, weil sein Vorschlag zu schnell eine neue allgemeine Lösung ausrief (P21). **Abgeleitet:** Mehr Absicherung durch Text und Review-Volumen ist nicht automatisch mehr praktische Wirkung.

## Der Unterschied zwischen haltenden und nicht haltenden Antworten

| Antwort | Was das Material tatsächlich trägt | Grenze | Status |
|---|---|---|---|
| **Enge ausführbare Negativprüfung** | Ein bestimmter unzulässiger Statuswechsel lässt sich gezielt verhindern (P11, P17). | Der Nutzerauftrag außerhalb dieser Prüfung kann weiterhin scheitern. | **belegt**, Testdatei; **nicht erneut getestet** |
| **Kanonische Daten + abgeleitete Ansicht** | Konfiguration/STATE stimmen im SD-KA-Abschluss überein (P18). | Der alte Kopf von `engineering/changes/SD-KA-01/RESULT.md` behauptet noch `ACTIVE`. | **belegt**, Dateivergleich |
| **Regel, Lernnotiz oder Review allein** | Ein Fehler ist präzise wiederauffindbar und erklärbar (P01–P07). | Verhalten in neuem Kontext wird durch das Aufschreiben nicht bewiesen; teils konkrete Gegenfälle. | **belegt** für Wiederholung, **abgeleitet** für allgemeine Grenze |
| **Lokaler CI-/PR-PASS** | Technische Eigenschaften eines benannten Stands wurden geprüft (P08, P18). | Kein Ersatz für produktive Ausführung, unabhängige Quellenarbeit oder menschliche Zielabnahme. | **belegt**, #297 und `tools/check.py` |

**Kosten (belegt):** Die Verfahrens-/Verwaltungsschicht beansprucht **120 von 267 Dateien und 1,97 MB** (53,1 % der Bytes); der Bestand enthält **25 Audit-Dateien und 42 weitere Engineering-Recherchedokumente**. Das ist ein Größenverhältnis, noch keine Kennzahl für unnötige Arbeit. Mehrere Fehler-Issues dokumentieren erneute Eigentümerklarstellungen; eine saubere Gesamtsumme der Eingriffe existiert im untersuchten Bestand nicht. Fundstellen und Messgrenzen: [Inventar](inventar.md), `engineering/evidence/audits/`, Issues #341, #346, #347. **Abgeleitet:** Die Gefahr, dass die Verfahren schneller wachsen als die fachliche Tätigkeit, ist real, aber der Anteil unnötiger Arbeit lässt sich aus Dateigrößen allein nicht messen.

## Gegen das heutige Labor gelesen

**Schon vorhanden (belegt):** `design-lab/AGENTS.md` ist ein kurzer Einstieg; `anschluss/` und generierte `stand.md` trennen Themenzustand von Übersicht; `.agents/skills/issue/SKILL.md` verlangt Auftrag, richtiges Label, Blocker und prüfbare Abnahme; `tools/build.mjs` prüft strukturelle Vorgaben; `research/2026-10-audit-zusammenarbeit/befunde.md` kennt die Muster aus Wissensarbeit. Der U3/U7-Plan führt Reduktion der Lesekosten und ausführbare Checks bereits als Ziel. Keine neue Systemregel ist nötig, um diesen Befund aufzunehmen. **Belege:** `research/2026-10-umbau/plan.md`, `AGENTS.md`, `anschluss/system.md`.

**Weiter offen (abgeleitet, nicht als Defekt bewiesen):** Erstens ist ein grüner Build noch kein unabhängiger Neustart mit richtiger Lesart oder ein gelungenes Gestaltungsresultat — das U3-Prüfvorhaben läuft. Zweitens besitzt das Labor noch keinen belegten, realen Test für „nach einem lokalen PASS die verbleibende erlaubte Arbeit prüfen“ wie der Gegenfall #346 verlangt. Drittens wird die **Anzahl der Rettungseingriffe durch den Eigentümer** im Umbauplan zwar als wichtigste Zielgröße benannt, aber noch nicht beobachtet. Viertens ersetzt Claudes geplante Gegenprüfung der zehn Originalstellen keine Fachabnahme sämtlicher Karten. **Belege:** `research/2026-10-umbau/plan.md`, `research/2026-10-audit-zusammenarbeit/befunde.md`, `karten.md`, Issues #346/#347 (privat).

**Nicht übertragen:** Keine neue zentrale Kontrollschicht, keine generische Stufenleiter, keine neue Skill-Familie und keine zusätzliche kanonische Statusablage. Die kritische Re-Audit-Korrektur in `paleo-type/engineering/evidence/audits/deterministic-control-layer-critical-reaudit-2026-10-09.md` ist gerade ein Gegenbeleg für vorschnelle Architektur. **Status: abgeleitet** als vorsichtige Einordnung, keine Entscheidung.

## Drei einzelne Fragen an den Eigentümer

1. **Soll der nächste Labor-Neustart-Test ausdrücklich einen realen Folgeauftrag nach lokalem Teilerfolg enthalten?** Dann ließe sich sehen, ob das Modell korrekt fortsetzt oder begründet stoppt. Ohne diese Probe bleibt genau die in #346 beobachtete Lücke ungetestet. **Empfehlung:** ja, als einzelner Prüffall statt neue Regel. **Status: abgeleitet**.
2. **Sollen wir bei nächsten technischen Änderungen den Abnahmebericht ausdrücklich in „Build“, „neuer Kontext“ und „tatsächliches Ergebnis“ trennen?** Das macht Unterschiede sichtbar, ohne allen Arbeiten drei Pflichtreviews aufzuerlegen. Ohne Trennung droht derselbe lokale-PASS-Fehlschluss wie in #297. **Empfehlung:** ja, zunächst an einem Beispiel prüfen. **Status: abgeleitet**.
3. **Sollen die Rettungseingriffe des Eigentümers für einen Monat schlicht mit Fall und Anlass gezählt werden?** Das misst, ob das Labor Entlastung erzeugt, statt nur mehr Prüftexte. Ohne Messung bleibt der wichtigste Zielwert aus dem Umbauplan unbelegt. **Empfehlung:** kleiner, freiwilliger Pilot; keine neue umfassende Erfassung. **Status: abgeleitet**.

**Offene Prüfung:** Claudes unabhängiger Originalabgleich zu den **zehn benannten Karten** in [`karten.md`](karten.md) sowie ein tatsächlicher grüner Labor-Build. Die Karten behaupten keine abgeschlossene Prüfung durch ein anderes Modell. **Status: nicht getestet**.
