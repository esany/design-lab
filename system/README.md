# System

Design-Tokens des Labors selbst im offenen DTCG-Format (Version 2025.10).
Quelle der Wahrheit: `tokens/*.tokens.json`. Daraus erzeugt
`node tools/build.mjs` die Datei `assets/tokens.css`.

Das Labor nutzt sein eigenes System: Website und Studien lesen ihre Rahmenwerte
aus diesen Tokens. Änderungen hier nur als begründeter Vorschlag im PR.

Wenn das System wächst (Komponentenverträge, mehrere Themes, Export nach
Penpot/Figma), übernehmen Style Dictionary oder Terrazzo die Umwandlung —
beide verstehen DTCG.
