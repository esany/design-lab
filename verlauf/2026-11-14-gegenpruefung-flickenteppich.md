# 2026-11-14 · Gegenprüfung Flickenteppich und gemeinsames Zielbild

**Was:** ChatGPT hat die Selbstanalyse von Claude zum Bug Flickenteppich (#216) und den vom Eigentümer am 14.11. im Grundsatz bestätigten Entwurf „ein Zielbild für das Labor“ unabhängig gegengelesen. Ergebnis: `research/2026-11-anforderungspruefung/gegenpruefung-flickenteppich.md`; Auftrag #217, dient A14, A18, A22 und A33 (Zielbild zusätzlich A01).

**Warum:** Die Veröffentlichung des Bug-Zielbilds ist im Workflow nicht durchgängig, und ein gemeinsames Werkzeug garantiert noch keinen gemeinsamen Ort mit Schnittstellenthemen. Der Befund trennt geprüfte Belege von nicht bewiesenen Ursachen, priorisiert die fünf Folgerungen und nennt Prüfbedingungen für den Bau, ohne neue Regeln oder Parallelstrukturen zu erzeugen.

**Geprüft:** Quellen auf `main` vom 14.11. (u. a. Workflow, Build, Generator, Punktdaten, Vorlagen, Tokens), aktuelle Issue- und PR-Metadaten und das Urteil des Eigentümers aus PR #223.

**Nicht geprüft:** Live-Website, privater Chatverlauf, Browser-/Mobilansichten, Build-Ausführung und CI. Keine Umsetzung des Zielbilds in diesem PR.

**Rückgängig:** Den Pull Request dieser Gegenprüfung revertieren; keine bestehenden Inhalte wurden verändert.
