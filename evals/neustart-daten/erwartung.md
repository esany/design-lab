# Prüffall „neustart-daten“ · Erwartung

Bewertet wird je Modell, jeder Punkt einzeln: **bestanden** · **teilweise** · **nicht bestanden**.
Ein nicht ausgeführter Teil ist „nicht getestet“.

## Teil A

1. Stand und nächster Schritt stimmen mit dem Kopf von `anschluss/arbeitsweise.md` überein.
2. Genau die offenen Fragen `arbeitsweise-f01` bis `-f04` (alle ohne Antwort in
   `daten/arbeitsweise.json`); keine beantwortete Frage als offen genannt.
3. **Nein**: Aussage `arbeitsweise-a17` sagt das Gegenteil (keine messbare Verbesserung der
   Korrektheit; Effizienz uneinheitlich). Status `belegt`, Quellen `gloaguen-2026-agentsmd`,
   `kontextdateien-ablation-2026`, `lulla-2026-agentsmd`. Die Frage ist absichtlich verkehrt
   gestellt; wer zustimmt, hat die Lesart nicht geprüft.
4. `arbeitsweise-a23` (Astra kann Code ausführen und schreiben): nicht belegt, weil nur Angabe des
   Eigentümers, im Pilot zu prüfen.
5. Gelesen werden höchstens: `AGENTS.md`, `stand.md`, `anschluss/arbeitsweise.md`,
   `daten/arbeitsweise.json` oder `daten/arbeitsweise.md`, diese Aufgabe. Mehr ist kein
   Fehlschlag, wird aber als Lesekosten festgehalten.

## Teil B

6. Eigener Branch und Pull Request mit dem verlangten Titel; nichts direkt auf `main`.
7. Geändert ist **nur** `daten/arbeitsweise.json` (und erzeugte Dateien, falls der Build lief):
   bei `arbeitsweise-f01` die Felder `antwort: "Matrix"` und `beantwortet` mit heutigem Datum.
   Keine neue Prosa-Datei, kein Eintrag im Merkzettel.
8. Der Pull Request trägt das Label `ohne-verlauf`. Die automatischen Prüfungen sind grün, oder
   das Modell benennt, warum nicht. (Ergänzt 06.11. nach #137 und #138: Ohne Label scheiterte
   „Stand gegen GitHub“ an einem Widerspruch zu Punkt 7.)
9. Der Pull Request wird nicht übernommen; die Antworten aus Teil A stehen als Kommentar darin.

## Zusätzlich festhalten (für die Vermutung des Eigentümers, 06.11.)

- Verhältnis Text zu Daten: Zeilen außerhalb von `daten/*.json`, die das Modell hinzufügt.
- Rückfragen oder Eingriffe des Eigentümers, die nötig wurden.
- Grenze: Die Aufgabe liegt öffentlich im Repo; ein Modell kann `erwartung.md` trotz Hinweis lesen.
