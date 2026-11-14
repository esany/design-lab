# 2026-11-14 · Unabhängige Gegenprüfung des Zielbild-Baus

**Warum:** Die vom Eigentümer bestätigte Zusammenführung zu einem Labor-Zielbild soll vor der Übernahme von PR #231 an fünf konkreten Proben unabhängig geprüft werden (Auftrag #230, Bug #216; dient A01, A14, A18, A22, A33).

**Rückgängig:** Den später übernommenen Commit dieses Prüf-PRs zurücknehmen; nur diesen Verlaufseintrag und research/2026-11-zielbild-bausteine/gegenpruefung-bau.md entfernen. Der geprüfte Bauzweig bleibt unberührt.

**Was:** Gegenprüfung mit den Status „belegt“, „abgeleitet“, „nicht belegt“ und mit getrennten Grenzen der Prüfung unter [gegenpruefung-bau.md](../research/2026-11-zielbild-bausteine/gegenpruefung-bau.md) dokumentiert. Ergebnis: Nachbesserungen an Eigentümer-Zuständigkeit, Farbsemantik, Nachvollziehbarkeit der Migration und alter Veröffentlichungsadresse nötig (abgeleitet).

**Geprüft (belegt):** Drei Punktbestände einschließlich Feldvergleich, neue Frageverweise, Generator und Ansichten, Relationen, Farbrollen und Website-Skript, Workflow und GitHub-CI-Lauf für Bau-Commit 623c76f.

**Nicht geprüft:** eigener Node-/Browserlauf, Live-Publikation, Bilder und Nutzungsdurchlauf. Kein Merge; keine Regeln, Entscheidungen oder Merkzettel geändert.
