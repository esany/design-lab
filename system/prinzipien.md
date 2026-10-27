# Modul „System“ — Prinzipien für Design-Systeme

Der ursprüngliche Intent aus D3sign — ein generischer Grundbaustein für
Design-Systeme — lebt hier als **Modul** des Labors weiter (intent A25). Es
greift, sobald im Labor an einem Design-System, einer Komponente oder an Tokens
gearbeitet wird — egal ob in Penpot, Figma oder Code.

Quelle: D3sign `foundations/design-principles.md`, `foundations/standards.md`,
`foundations/semantic-model.md`, Decisions D-034 bis D-036. Status: übernommen
als Startversion, praktisch noch nicht erprobt.

## Prinzipien

1. **Bedeutung vor Ausprägung.** Zuerst Rolle, Nutzungskontext und Verhalten
   eines Bausteins oder Tokens — Farbe, Größe, Framework folgen daraus.
   *Prüfen:* Ist erkennbar, ob es um Aktion, Navigation, Status, Eingabe oder
   Inhalt geht, bevor ein visueller Name vergeben wird?
2. **Wiederverwendung mit klaren Grenzen.** Erfüllt ein Bestehendes den Zweck,
   wird es genutzt oder innerhalb seines Vertrags variiert. Neu nur bei
   wiederkehrendem, belegtem Bedarf.
3. **Wenige unabhängige Variantenachsen.** Jede Eigenschaft beschreibt genau
   eine Dimension (Größe, Zustand, Ausrichtung). Keine Sammelwerte wie
   `primary-large-hover`. Nur tatsächlich nötige Kombinationen — als
   ausdrückliche Liste.
4. **Zustände und Zugänglichkeit gehören zum Vertrag.** Zustände, Fokus,
   Bedienbarkeit, zugängliche Benennung, nicht nur visuelle Rückmeldung.
5. **Tokens drücken Rollen aus, nicht nur Werte.** Ebenen: primitiv →
   semantisch → komponentenspezifisch; höhere verweisen auf niedrigere.
   Direkte Werte in Komponenten sind begründete Ausnahme.
6. **Evolution statt Big-Bang.** Kleine, rückverfolgbare Schritte; Nutzung,
   Migration und Ablösung sichtbar.
7. **Erweiterbare Verträge** (D-034). Ein Komponentenvertrag trennt stabile
   Invarianten, aktuelle Ausprägung, zulässige Kontextentscheidung und die Art
   einer Änderung: additiv · restriktiv · semantische Korrektur. Nur additive
   Änderungen dürfen still erfolgen.
8. **Erstellen, prüfen, dokumentieren getrennt** (D-036) — Dokumentation
   ersetzt nie den Baustein.
9. **Vertrauensfähige Dokumentation** (D-035) — siehe Prinzip 10 des Labors.

## Semantisches Minimalmodell

| Begriff | Bedeutung | Abgrenzung |
|---|---|---|
| Aktion | löst im aktuellen Kontext eine Operation aus | keine Navigation |
| Navigation | wechselt Ort, Ansicht oder Ziel | keine Operation im Kontext |
| Priorität | ordnet eine Handlung relativ zu anderen im selben Kontext | keine globale Eigenschaft |
| Auswahl | Entscheidung innerhalb einer vorgegebenen Menge | keine Ausführung |
| Eingabe | erfasst oder verändert einen Wert | keine bloße Darstellung |
| Status | vermittelt Zustand, Fortschritt, Erfolg, Warnung, Fehler | nicht allein durch Farbe |
| Inhalt/Struktur | ordnet Information und Beziehungen | keine Handlung |

## Token-Ebenen

| Ebene | Zweck | Darf enthalten | Darf nicht |
|---|---|---|---|
| Primitiv | Rohwerte zentral | Skalen, Farben, Maße | Nutzungszweck |
| Semantisch | wiederkehrende Rollen | Text, Fläche, Fokus, Aktion, Status | Markenname als einzige Bedeutung |
| Komponente | eigener stabiler Bedarf | `button/primary/background` | allgemeine Rollen |

Format: DTCG (2025.10), siehe `tokens/`.
