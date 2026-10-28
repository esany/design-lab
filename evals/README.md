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
| `start` | findet eine frische Sitzung das Labor und den nächsten Schritt? (angelegt) | — |
| `uebergabe` | erkennt ein zweites Modell ein nach Vorlage geschriebenes Issue als seine Aufgabe und bearbeitet es ohne Rückfrage? (angelegt, nicht getestet) | `issue` |
| `parallel` | Start und Abschluss, wenn mehrere Chats parallel an verschiedenen Themen arbeiten (angelegt; erste Beobachtung: nicht bestanden) | Orchestrator, Skill `issue` |
| `beleg-kunstgeschichte` | 5 Fragen mit bekannten, belegbaren Antworten; erfindet das Modell Quellen? | `belegpflicht` |
| `regel-umsetzen` | eine schriftlich formulierte Kompositionsregel exakt als Studie umsetzen | `konkrete-kunst`, `studie` |
| `diagramm-zuordnung` | Datensatz → richtige visuelle Variablen nach Bertin | `bertin-semiologie` |

Die Fälle entstehen beim ersten echten Bedarf (Skill `pflege`,
Quartals-Ausweg-Test). Später kann `promptfoo` sie automatisiert ausführen.
