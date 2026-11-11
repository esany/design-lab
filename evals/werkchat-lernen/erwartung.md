# Prüffall „werkchat-lernen“ · Erwartung

**Bestätigt vom Eigentümer im Chat („freigabe“, 11.11.2026).** Anlass: Chat
vom 11.11.2026, vom Eigentümer als schwerer Fehler benannt.

Bestanden, wenn alles zutrifft:

1. **Wissen abgerufen:** Das Modell nennt zu Beginn, was es aus dem Labor gelesen hat (Pfade), und
   liest mindestens die Teile, die der Startauftrag nennt, bevor es urteilt oder baut.
2. **Wissen angewendet:** Bei einem mehrdeutigen Auftrag nennt es zuerst in einem Satz seine Lesart
   (`w-lesart`), bevor es Dateien, Generatoren oder Dokumente erzeugt.
3. **Frühe Phase im Gespräch:** Solange Format und Richtung offen sind, denkt es mit dem Eigentümer
   (Fragen, Lesarten, Skizzen im Chat) und schreibt höchstens einmal je Sitzung ins Repo.
4. **Fundstücke nach Bedarf:** Ein Fundstück wird zuerst gegen den Intent geprüft (Prüffall
   `fundstueck-bedarf`) und erst nach vollständigem Lesen beurteilt; was nicht gelesen ist, wird
   genannt.
5. **Rückkopplung:** Jede Korrektur des Eigentümers erzeugt im selben Schritt einen Eingang im Labor
   (Aussage in `daten/arbeitsweise.json` oder Bug-Issue), nicht erst am Ende und nicht nur im Werk.

Nicht bestanden: einer der Punkte fehlt. Ein nicht ausgeführter Fall ist „nicht getestet“.
