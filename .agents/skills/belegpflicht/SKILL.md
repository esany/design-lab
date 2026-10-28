---
name: belegpflicht
description: Use for any research, art or image history, theory, facts about people, works, dates or quotes — enforces quote-plus-source, evidence status and a verification pass so results are reliable rather than plausible.
dient: A07
---

# Belegpflicht

Ziel: verlässliche statt plausibler Aussagen. Sprachmodelle füllen Lücken mit
Wahrscheinlichem — dieser Ablauf verhindert, dass das unbemerkt geschieht.

## Ablauf

1. **Frage eingrenzen.** Was genau soll beantwortet werden? Welche Art Quelle
   kann das beantworten (Primärquelle, Werkverzeichnis, Normdatum, Fachtext)?
2. **Quellen holen, nicht erinnern.** Reihenfolge:
   - eigenes Korpus (`corpus/`, Zotero-Bibliothek, falls angebunden)
   - Normdaten: Wikidata, Getty ULAN (Personen), Getty AAT (Begriffe),
     Getty TGN (Orte), GND (Deutsche Nationalbibliothek)
   - offene Sammlungen: Met Open Access, Rijksmuseum, Europeana, SMB-digital
   - Fachliteratur über Websuche; Primärquelle vor Sekundärquelle
3. **Belegen.** Jede Aussage über die Welt bekommt:
   - Status: `belegt` · `abgeleitet` · `nicht belegt`
   - bei `belegt`: wörtliches Kurzzitat (≤ 25 Wörter) oder Datensatz-ID und
     Fundstelle (URL, Seite, Datensatz)
4. **Gegenprüfen.** Für folgenreiche Ergebnisse: ein zweites Modell oder ein
   zweiter Durchgang prüft jede `belegt`-Aussage gegen ihre Fundstelle.
   Abweichungen werden markiert, nicht geglättet.
5. **Lücken zeigen.** Was nicht belegbar ist, steht als offene Frage da.

## Ausgabeform

```markdown
| Aussage | Status | Beleg |
|---|---|---|
| <Person>, geboren <Jahr> in <Ort> | belegt | Wikidata Q<ID> (P569 Geburtsdatum, P19 Geburtsort) |
| … | abgeleitet | aus Zeile 1 und … |
| … | nicht belegt | keine Quelle gefunden |
```

Danach erst die Synthese in Prosa — mit Verweis auf die Tabellenzeilen.

## Nie

- Zitate, Daten, Werktitel oder Zuschreibungen aus dem Gedächtnis als Fakt
- Abbildungen geschützter Werke ins Repo kopieren (Verweis genügt)
- eine „wahrscheinlich richtige“ Antwort glätten, wenn Quellen sich widersprechen
  — den Widerspruch zeigen

## Hinweis zu NotebookLM und RAG-Werkzeugen

Nützlich als Einstieg in eine Textmenge, nie als Wahrheit. Kleine, saubere
Korpora (≤ 10–15 gut lesbare Texte pro Frage) liefern deutlich verlässlichere
Ergebnisse als große Sammlungen gescannter PDFs.
