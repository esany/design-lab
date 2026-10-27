# Korpus-Schema

Quellen des Labors liegen als Daten vor. Agenten können damit belegt
arbeiten, und der Build prüft sie. Es sind nur **Verweise**, keine Volltexte.

## Dateien

| Datei | Inhalt | Ausgewählt von |
|---|---|---|
| `referenzen.json` | Verweise des Eigentümers: Ausgangspunkte zu Leuten, Projekten, Papern, Haltungen, Domänen, Methoden | Mensch |
| `recherche.json` | Quellen, die Agenten recherchiert haben (Feldforschung, Kanon, Werkzeuge) | Agent |
| `uebersicht.md` | **erzeugt**: lesbare Tabelle aller Quellen | — |

Die Trennung zeigt, wer worauf verwiesen hat. Die Verweise des Menschen sind
**Ausgangspunkte zum Erschließen**: Sie sagen, wohin er schaut. Sie sind kein
Kanon und kein Urteil. Was daraus für ein Fachpaket folgt, wird erst erschlossen
und dann vorgelegt.

JSON statt YAML, weil der Build ohne Abhängigkeiten auskommt (`decisions/0009`).

## Felder

| Feld | Pflicht | Werte |
|---|---|---|
| `id` | ja | Kleinbuchstaben, Ziffern, Bindestrich; eindeutig über alle Dateien, z. B. `munzner-2014` |
| `titel` | ja | Titel des Werks bzw. Name der Person, des Labors oder Projekts |
| `autor` | ja | Person(en) oder Institution; bei Personen-Einträgen die Person selbst |
| `jahr` | ja | Jahr (Zahl) oder Zeitraum als Text, z. B. `"1930–2017"`; `null`, wenn unbekannt |
| `art` | ja | `Buch` · `Paper` · `Artikel` · `Repo` · `Werkzeug` · `Projekt` · `Konferenz` · `Datensatz` · `Person` · `Labor` · `Sammlung` · `Werk` |
| `url` | ja | Fundstelle (https) |
| `lizenz` | ja | z. B. `MIT`, `Apache-2.0`, `CC BY 4.0`, `alle Rechte vorbehalten`, `unbekannt` |
| `felder` | ja | mindestens eines von: `vermitteln` · `form` · `ordnung` · `erkennen` · `raum-zeit` · `interaktion` · `system` · `labor` |
| `status` | ja | `belegt` (an der Fundstelle gesehen) · `abgeleitet` · `nicht belegt` |
| `notiz` | nein | Worum es geht und warum es zählt, in einem bis drei Sätzen |
| `zugang` | nein | `offen` · `eingeschränkt` · `blockiert` (für Agenten nicht abrufbar) |
| `wikidata` | nein | Q-Nummer, nur wenn sie nachgeschlagen wurde. Nie raten |
| `geprueft` | ja | Datum der letzten Sichtung (`JJJJ-MM-TT`) |

## Verweisen

In Skills, Fachpaketen und Studien wird so verwiesen: `[k:munzner-2014]`.
Der Build meldet jeden Verweis auf eine ID, die es nicht gibt.

## Pflege

Die monatliche Pflege prüft Einträge, deren `geprueft` älter als ein Jahr ist.
