# [Übergabe] Prüfzeile für den Fall „übergabe“ eintragen

**An wen?** (Label `an:<Modell>` setzen, je Lauf ein anderes)

**Ziel**
Im Prüffall „übergabe“ steht eine Ergebnisdatei, die belegt, dass dieses Issue ohne Rückfrage
bearbeitet wurde.

**Zuerst lesen**
```
AGENTS.md
evals/uebergabe/erwartung.md
```

**Ausgabe**
Neue Datei `evals/uebergabe/ergebnisse/<jjjj-mm-tt>-<modell>.md`; Branch `lab/uebergabe-test`,
ein Pull Request mit `Closes #<diese Nummer>`.

**Fertig, wenn**
- Die Datei existiert und nennt Modell, Datum und das bearbeitete Issue.
- Sie beantwortet je Zeile von „Fertig, wenn“ mit Ja, Nein oder „nicht geprüft“.
- `node tools/build.mjs --check` läuft ohne Fehler.
- Es wurde keine Datei außerhalb von `evals/uebergabe/ergebnisse/` und `stand.md` geändert.

**Nicht tun**
`AGENTS.md`, `.agents/skills/` und `.github/` nicht ändern.

**Danach an**
Mensch (Urteil, ob die Zuordnung ohne Rückfrage gelang).

**Blockiert durch**
—
