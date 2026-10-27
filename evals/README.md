# Prüffälle (Evals)

Prüffälle machen Qualität messbar — und Unabhängigkeit belegbar. Wenn ein
Modell, Agent oder Werkzeug gewechselt werden soll, laufen dieselben Fälle
erneut. Das Ergebnis entscheidet, nicht der Eindruck.

## Aufbau eines Falls

```
evals/<fall>/
  aufgabe.md      Eingabe, so wie ein Agent sie bekommt
  erwartung.md    woran ein gutes Ergebnis erkennbar ist (vom Menschen)
  ergebnisse/     je Modell/Agent eine Datei mit Datum
```

## Geplante erste Fälle

| Fall | prüft | Skill |
|---|---|---|
| `beleg-kunstgeschichte` | 5 Fragen mit bekannten, belegbaren Antworten; erfindet das Modell Quellen? | `belegpflicht` |
| `regel-umsetzen` | eine schriftlich formulierte Kompositionsregel exakt als Studie umsetzen | `konkrete-kunst`, `studie` |
| `diagramm-zuordnung` | Datensatz → richtige visuelle Variablen nach Bertin | `bertin-semiologie` |

Die Fälle entstehen beim ersten echten Bedarf (Skill `pflege`,
Quartals-Ausweg-Test). Später kann `promptfoo` sie automatisiert ausführen.
