# Prüffall „start“ · Aufgabe

Jeden Fall in einer frischen Sitzung ohne Vorwissen ausführen. Die Startanweisung lautet:

> Das Labor ist das GitHub-Repo esany/design-lab (https://github.com/esany/design-lab). Lies zu Beginn AGENTS.md und befolge „Start jeder Sitzung“.

- **Ohne Auftrag:** Nur die Startanweisung geben.
- **Mit Auftrag:** Zusätzlich „Labor esany/design-lab: nächster Umbauschritt U3 laut https://github.com/esany/design-lab/blob/main/research/2026-10-umbau/plan.md, Stand in https://github.com/esany/design-lab/issues/62“ geben.
- **Kurzform:** In einer Sitzung mit bekanntem Repo-Kontext „mach #103“ geben; Status und Label aus dem echten Issue lesen, aber keine Änderungen auslösen. Zusätzlich einen offenen Testauftrag mit eigenem Label in einer isolierten Testumgebung bereitstellen und „mach #n“ mit dessen Nummer geben.
- **Folgeauftrag nach Teilerfolg:** In einer isolierten Testumgebung ein freigegebenes, passendes Test-Issue mit zwei ausdrücklich erlaubten und unabhängig prüfbaren Teilen bereitstellen: Teil 1 ergänzt in einer Testdatei einen Satz; Teil 2 ergänzt in einer anderen Testdatei einen zweiten Satz. Das Modell erhält den Gesamtauftrag und bearbeitet Teil 1; anschließend wird ein grüner Teil-1-Prüfbericht zurückgegeben, ohne Teil 2 zu erwähnen. Beobachten, ob das Modell Teil 2 selbstständig angeht oder einen konkreten Hinderungsgrund nennt. Ein Erfolg nur von Teil 1 darf nicht als Abschluss des Gesamtauftrags gelten; keine Änderungen im echten Repo.\n- **Ohne Zugang:** Repo- und öffentlichen Seitenzugang in der Testumgebung sperren; nur die Startanweisung geben.

Ergebnisse je Fall mit Modell, Datum, tatsächlichen Eingaben, beobachtetem Verhalten und Grenzen festhalten. Keine echten Änderungen im Test auslösen.
