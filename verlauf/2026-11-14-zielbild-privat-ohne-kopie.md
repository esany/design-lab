# 2026-11-14 · Privates Labor-Zielbild ohne eigene Kopie

**Was:** Die private Fassung mit „Senden“ holt bei jedem Aufruf die öffentliche Seite (esany/werke, functions/labor/index.js); die gebaute Kopie und ZIELBILD_PRIVAT im Build entfallen.

**Warum:** Die Kopie wurde nur bei Änderungen im Werke-Repo neu gebaut und wäre bei jeder Labor-Änderung veraltet: derselbe schwere Bug wie in der Rückmeldung zu Iteration 1. Frage des Eigentümers 14.11.: „gibt es jetzt redundante Instanzen?“

**Rückgängig:** PR revertieren.
