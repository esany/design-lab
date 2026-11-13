# Zielbild-Generator

Macht aus einer Datei `punkte.json` eine Seite, auf der die KI zeigt, was sie verstanden hat, und
der Mensch je Punkt urteilt. Für jedes Werk und für das Labor selbst. Warum die Seite so aussieht:
[Bausteine](../../research/2026-11-zielbild-bausteine/befund.md).

## Benutzen

Aus einem Klon des Labors, Node 18 oder neuer, ohne weitere Pakete:

```bash
node tools/zielbild.mjs pfad/zu/punkte.json                 # schreibt index.html daneben
node tools/zielbild.mjs pfad/zu/punkte.json --aus seite.html
node tools/zielbild.mjs pfad/zu/punkte.json --check         # nur prüfen, nichts schreiben
```

Ein Werk in `esany/werke` braucht nur seine `punkte.json`; die Seite entsteht mit dem Werkzeug aus
dem Labor. Inhalte des Werks kommen dabei nicht ins Labor. Prüffälle: `node tools/zielbild-test.mjs`.
Beispiel: [`tools/fixtures/zielbild/beispiel.json`](../fixtures/zielbild/beispiel.json).

## Daten

Kopf:

| Feld | Pflicht | Bedeutung |
|---|---|---|
| `titel` | ja | Überschrift der Seite, z. B. „Zielbild Beispielwerk“ |
| `ort` | ja | Zeile darüber, z. B. „werke · Beispielwerk“ |
| `schluessel` | ja | klein-mit-bindestrich; hält die Markierungen im Browser je Seite und Iteration getrennt |
| `iteration` | ja | ganze Zahl; steigt mit jeder Fassung, die der Mensch prüft |
| `stand` | ja | Datum JJJJ-MM-TT |
| `rueckmeldung` | nein | Datum der letzten Rückmeldung, frei, z. B. „11.11.“ |
| `von` | nein | wer verstanden hat; Vorgabe „Claude“ |
| `hinweis` | nein | Notiz für die Pflege, wird nicht angezeigt |
| `teile` | ja | Liste von Teilen: `teil` (Überschrift) und `punkte` |

Punkt:

| Feld | Bedeutung |
|---|---|
| `id` | Kennung, klein-mit-bindestrich, eindeutig |
| `s` | Status: `bestaetigt` (vom Menschen gesagt) · `ableitung` · `vorschlag` · `befund` · `offen` (Frage an den Menschen) · `freigabe` · `impuls` (Eingang) · `auftrag` |
| `t` | der Satz, immer sichtbar |
| `k` | Erläuterung, darunter |
| `g` | Grundlage, aufklappbar („Worauf das beruht“) |
| `n` | Änderung seit der letzten Fassung: `neu` · `geändert` · `ergänzt` |
| `v` | der Satz vorher (nur mit `n`) |
| `f` | Rückmeldung des Menschen im Wortlaut (nur mit `n`) |
| `bestaetigt` | Datum der Bestätigung; nicht zusammen mit `n` |
| `prio` | bei `impuls` Pflicht: `jetzt` · `später` · `parken` |
| `stand` | bei `auftrag`: `vorbereitet` · `startklar` · `freigegeben` · `läuft` · `fertig` |
| `wer` | bei `auftrag`: wer ihn ausführt |
| `stuetzt` | bei `auftrag`: Kennungen der Punkte, auf denen er beruht; `startklar` nur, wenn alle bestätigt sind |
| `offen` | bei `auftrag`: was bewusst offen bleibt |

## Was der Generator prüft

Pflichtfelder, Kennungen, erlaubte Werte, `v` und `f` nur mit `n`, keine Bestätigung bei Änderung,
Aufträge mit `wer`, `stuetzt` und gültigem Stand, „startklar“ nur auf Bestätigtem. Farben und
Schriften kommen aus `system/tokens/lab.tokens.json`; Text aus den Daten wird maskiert.
