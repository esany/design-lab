# Korpus

Die Quellen des Labors liegen als **Daten**: Verweise, keine Volltexte. PDFs und
geschützte Abbildungen gehören nicht in dieses Repository.

- **[Übersicht](uebersicht.md)** — alle Quellen nach Feld, mit Status und
  Angabe, wo sie genutzt werden (erzeugt)
- [`referenzen.json`](referenzen.json) — **Ihre Verweise**: Ausgangspunkte zu Leuten, Projekten, Papern, Haltungen, Domänen, Methoden
- [`recherche.json`](recherche.json) — von Agenten recherchiert
- [`schema.md`](schema.md) — Felder, Werte, Verweisform `[k:…]`

Der Build prüft Pflichtfelder, eindeutige IDs und erlaubte Werte. Er meldet
auch jeden Verweis `[k:…]` in Skills, Studien und Texten, für den es keine
Quelle gibt. Eine Behauptung ohne Quelle fällt so auf.

## Bevorzugte Quellen für Agenten

| Art | Quelle |
|---|---|
| Literatur | Zotero (Web-Bibliothek; optional per MCP angebunden) |
| Personen | Wikidata, Getty ULAN, GND |
| Begriffe | Getty AAT |
| Orte | Getty TGN, Wikidata |
| Werke, Bilder (offen) | Met Open Access, Rijksmuseum, Europeana, SMB-digital |

Siehe Skill `belegpflicht`.
