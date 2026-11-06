# Daten je Thema — Schema

Eine Datei je Thema: `daten/<thema>.json`, passend zum Merkzettel `anschluss/<thema>.md`. Sie hält
zwei Arten von Datensätzen, die bisher als Prosa doppelt und widersprüchlich wurden: **Aussagen**
(Befunde mit Beleg) und **Fragen an den Eigentümer** (mit seiner Antwort im Wortlaut). Der Merkzettel
bleibt der Stand; er verweist auf Datensätze, statt sie zu wiederholen.

Eingeführt am 06.11.2026 als Pilot (Entscheidung des Eigentümers: Wahrheit nur in Git, ohne
Datenbank). Geprüft von `tools/build.mjs`; Prüffälle in `tools/daten-test.mjs`. JSON wie beim
Korpus, damit der Build ohne Abhängigkeiten bleibt (`decisions/0009`).

```json
{ "thema": "arbeitsweise", "aussagen": [ … ], "fragen": [ … ] }
```

## Aussage

| Feld | Pflicht | Inhalt |
|---|---|---|
| `id` | ja | `<thema>-a01`, `<thema>-a02` … eindeutig, nie wiederverwendet |
| `aussage` | ja | ein, zwei Sätze, eigene Worte |
| `status` | ja | `belegt` · `abgeleitet` · `nicht belegt` |
| `seit` | ja | Datum `JJJJ-MM-TT` |
| `quellen` | bei `belegt` | Liste von `{ "id": "<Korpus-id>", "stelle": "…" }` oder `{ "datei": "<Pfad im Repo>", "stelle": "…" }` |
| `abgeloest_durch` | nein | id der Aussage, die diese ersetzt. Abgelöstes bleibt stehen, wird nie gelöscht |
| `herleitung` | nein | Pfad zur Prosa, aus der die Aussage stammt |
| `notiz` | nein | Grenze oder Einschränkung in einem Satz |

## Frage an den Eigentümer

| Feld | Pflicht | Inhalt |
|---|---|---|
| `id` | ja | `<thema>-f01`, `<thema>-f02` … |
| `frage` | ja | so, wie sie gestellt wurde |
| `gestellt` | ja | Datum |
| `antwort` | nein | **Wortlaut** des Eigentümers; fehlt, solange die Frage offen ist |
| `beantwortet` | mit Antwort | Datum |
| `notiz` | nein | z. B. wo die Frage gestellt wurde |

## Verweisen

In Markdown verweist `[a:<thema>-a07]` auf eine Aussage; der Build prüft, dass es sie gibt.
Unbekannte Felder ergeben nur eine Warnung, damit das Schema wachsen kann; neue **Arten** von
Datensätzen entscheidet der Eigentümer.
