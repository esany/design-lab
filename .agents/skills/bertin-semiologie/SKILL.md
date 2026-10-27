---
name: bertin-semiologie
description: Method for checking and designing data and information graphics with Jacques Bertin's visual variables and their perceptual properties — use before building or when critiquing any chart, map, diagram or information visualisation.
---

# Methode: Graphische Semiologie (Bertin)

Quelle: Jacques Bertin, *Sémiologie graphique* (1967; dt. *Graphische
Semiologie*, 1974). Kern: Jede Datendimension wird einer visuellen Variable
zugeordnet. Die Variable muss die Organisationsebene der Daten leisten können.

## Visuelle Variablen und ihre Leistung

| Variable | assoziativ | selektiv | geordnet | quantitativ |
|---|---|---|---|---|
| Position in der Ebene (x, y) | ✓ | ✓ | ✓ | ✓ |
| Größe | – | ✓ | ✓ | ✓ |
| Helligkeit (Tonwert) | – | ✓ | ✓ | – |
| Korn (Textur) | ✓ | ✓ | ✓ | – |
| Farbton | ✓ | ✓ | – | – |
| Richtung (Orientierung) | ✓ | (✓) | – | – |
| Form | ✓ | – | – | – |

- **assoziativ:** Unterschiede lassen sich übersehen, Elemente gruppieren sich trotzdem
- **selektiv:** eine Klasse springt sofort heraus
- **geordnet:** Reihenfolge ist ohne Legende erkennbar
- **quantitativ:** Verhältnisse (doppelt so viel) sind ablesbar

## Prüfablauf

1. **Daten typisieren:** Für jede Dimension: nominal, ordinal oder quantitativ?
2. **Zuordnung prüfen:** Leistet die gewählte Variable die nötige Ebene?
   Typische Fehler: Farbton für geordnete Daten, Form für Mengen, Fläche ohne
   Bezug zur Wurzel.
3. **Lesestufen:** Elementar (ein Wert), mittel (Gruppe), gesamt (Gestalt
   des Ganzen). Welche Frage soll das Bild auf welcher Stufe beantworten?
4. **Bilder zählen:** Wie viele Variablen trägt ein Bild? Mehr als zwei
   bis drei Dimensionen pro Bild → Aufteilen in mehrere Bilder erwägen.
5. **Ergebnis** als Tabelle: Dimension · Datentyp · Variable · erfüllt?

## Anschluss

- Umsetzung mit Observable Plot, D3 oder Vega-Lite (Skill `studie`).
- Ergänzend: Tufte (Data-Ink), Isotype (Skill `isotype`) für Vermittlung an
  ein breites Publikum.
