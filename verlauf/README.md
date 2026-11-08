# Verlauf

Jede Änderung am Labor bekommt hier **eine eigene Datei** (Entscheidung 0034). So schreiben
parallele Chats nie in dieselbe Zeile, und es entstehen keine Konflikte.

**Name:** `JJJJ-MM-TT-kurz.md`, zum Beispiel `2026-11-08-verlauf-als-dateien.md`. Die Ordneransicht
auf GitHub sortiert dadurch nach Datum.

**Inhalt:**

```markdown
# 2026-11-08 · Was sich geändert hat, in einem Satz

**Warum:** Anlass oder Wunsch des Eigentümers.

**Rückgängig:** Wie man es zurücknimmt, meist „PR revertieren“.
```

Der Build prüft Name, Titelzeile, „Warum“ und „Rückgängig“. Ein Pull Request ohne neue Datei
hier braucht das Label `ohne-verlauf`.

Einträge bis zum 08.11.2026 stehen in [`stand-verlauf.md`](../stand-verlauf.md); diese Datei
wird nicht mehr fortgeschrieben.
