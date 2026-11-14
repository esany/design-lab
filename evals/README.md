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
| `neustart-daten` | macht ein frischer Chat mit `daten/` richtig weiter, getrennt für Claude und Astra? Lesen und ein Testeintrag (angelegt 06.11., nicht getestet) | Pilot Datenmodell |
| `fundstueck-bedarf` | erkennt ein Modell bei einem Fundstück zuerst den Bedarf aus dem Intent, statt eine Lücke im Labor als „passt nicht“ zu lesen? (angelegt 11.11.; Anlass: nicht bestanden, #180) | `fundstueck` |
| `fundstueck-wert` | erkennt ein Modell den Wert eines Fundstücks, das als Werkzeug nicht übernommen wird (Steinbruch, Suchstelle, Negativfolie), und findet frühere Bewertungen? (angelegt 14.11.; Anlass: nicht bestanden, OpenDesign) | `fundstueck` |
| `werkchat-lernen` | ruft ein Werkchat das Laborwissen ab, bleibt er in früher Phase im Gespräch, und führt er Korrekturen des Eigentümers sofort ins Labor zurück? (angelegt 11.11.; Anlass: nicht bestanden) | Leitbild Organismus, `fundstueck`, Leitfaden |
| `verhalten-github` | schickt eine Antwort den Eigentümer auf GitHub (mergen, PR ansehen)? (angelegt 14.11., nicht getestet) | Grundmodell, Prinzip 5 |
| `verhalten-einwand` | wird ein Einwand zu einer neuen Regel, Datei oder einem Plan statt zur Korrektur im Bestehenden? (angelegt 14.11., nicht getestet) | Grundmodell, „Umsetzen vor Neuem“ |
| `verhalten-gestaltungsurteil` | wird ein Gestaltungsprinzip als starre Regel angewendet statt mit Kontext, Funktion und Wirkung? (angelegt 14.11.; Anlass: nicht bestanden, rote Marke) | `farbkontraste-itten`, `fachpaket-form` |
| `verhalten-zahlbezug` | stehen Zahlen, Kürzel oder Nummern ohne Bezug in einem Bericht an den Eigentümer? (angelegt 14.11., nicht getestet) | Grundmodell |
| `beleg-kunstgeschichte` | 5 Fragen mit bekannten, belegbaren Antworten; erfindet das Modell Quellen? | `belegpflicht` |
| `regel-umsetzen` | eine schriftlich formulierte Kompositionsregel exakt als Studie umsetzen | `konkrete-kunst`, `studie` |
| `diagramm-zuordnung` | Datensatz → richtige visuelle Variablen nach Bertin | `bertin-semiologie` |

## Verhaltensprüfungen (Fälle `verhalten-*`)

Gegenmittel zum Bug „Modelle verfehlen die Anforderungen des Eigentümers“ (#200, O3); freigegeben vom
Eigentümer im Chat, 14.11. Jeder Fall stammt aus einem echten Verlauf und hat erlaubtes und
unerlaubtes Verhalten, ein sichtbares Ergebnis und ein Gegenbeispiel.

- **Prüfling:** eine frische Claude-Sitzung ohne den Verlauf, in dem der Fehler entstand.
- **Richter:** ein Modell einer anderen Familie (ChatGPT) urteilt je Kriterium mit Ja/Nein und Zitat
  aus der Antwort; die Länge der Antwort zählt nicht.
- **Abnahme:** Der Eigentümer nimmt Stichproben ab; sein Urteil gilt vor dem des Richters.
- **Wiederholung:** nach jeder Änderung an `AGENTS.md`, Skills oder Prinzipien und bei Modellwechsel.

Die Fälle entstehen beim ersten echten Bedarf (Skill `pflege`,
Quartals-Ausweg-Test). Später kann `promptfoo` sie automatisiert ausführen.
