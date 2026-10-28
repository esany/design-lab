---
status: gültig
datum: 2026-10-28
entschieden_von: Eigentümer, Chat 28.10. (Antwort auf #67: Option A, „ein Zettel je Thema“)
dient: A26, A33, A34
---

# 0029 · Ein Merkzettel je Thema

**Anlass:** Mehrere Chats arbeiten gleichzeitig an verschiedenen Themen. Alle schrieben in
denselben Abschnitt „Anschluss“ in `stand.md`. Das führte zu Schreibkonflikten und einer
Stapelablage, und ein neuer Chat konnte nicht erkennen, welcher Faden zu seinem Thema gehört
(#67, Prüffall `evals/parallel/`).

**Rückfrage des Eigentümers:** „Zahlt das auf ein internes Projektgedächtnis im Repo ein?“
Antwort: ja. Die Merkzettel sind **Dateien im Labor**, keine Kommentare bei GitHub. Sie sind
versioniert, in jeder Kopie vorhanden und für jedes Modell lesbar, auch ohne Zugang zur
GitHub-Schnittstelle.

## Regel

1. **Jedes aktive Thema hat einen Merkzettel:** `anschluss/<thema>.md`. Oben steht in Worten,
   wo das Thema steht, was als Nächstes kommt und was der Eigentümer entscheidet. Nummern stehen
   nur eingeklappt darunter, für die Modelle (#71).
2. **`stand.md` führt nur die Liste der aktiven Themen**, je eine Zeile mit Verweis auf den
   Merkzettel. Inhalte stehen auf dem Merkzettel, nicht dort.
3. **Start:** Nennt der Eigentümer ein Thema, liest das Modell nur dessen Merkzettel und meldet
   den Stand. Nennt er keins, nennt das Modell die aktiven Themen mit je einem Satz und fragt,
   welches gemeint ist.
4. **Ende:** Das Modell gleicht ab (`git fetch`), schreibt den Merkzettel **seines** Themas
   fort, entfernt dort Überholtes und passt die Zeile in `stand.md` an. Fremde Merkzettel fasst
   es nicht an.
5. **Neues Thema:** Merkzettel anlegen und eine Zeile in `stand.md`. Ein Thema hat, wenn
   möglich, ein führendes Issue. Der Merkzettel nennt es.
6. **Thema abgeschlossen:** Der Merkzettel wandert nach `anschluss/archiv/`, die Zeile in
   `stand.md` wird gestrichen.

Ersetzt in `0024`, Punkt 4, den Satz „schreibt vorher ‚Anschluss‘ in `stand.md` fort“ und den
Startsatz „Lies stand.md und mach weiter“. Alles andere aus 0024 gilt weiter.

**Rückgängig:** „Regel 0029 rückgängig“ (der Abschnitt „Anschluss“ in `stand.md` kehrt zurück).
