"""Liest den Katalog von dataviz-inspiration (CC BY 4.0) als Text und schreibt katalog.json.

Aufruf: python3 -I uebernehmen.py <pfad>/util/viz-list.ts <pfad>/util/favorite-viz-list.ts <commit>
Der TypeScript-Code wird nicht ausgeführt, nur per Muster gelesen. Bilder werden nicht übernommen.
"""
import json, re, sys

STR = r'"((?:[^"\\]|\\.)*)"'

def text(block, key):
    m = re.search(r'\b' + key + r':\s*' + STR, block)
    return json.loads('"' + m.group(1) + '"') if m else None

def liste(block, key):
    m = re.search(r'\b' + key + r':\s*\[([^\]]*)\]', block)
    return [json.loads('"' + x + '"') for x in re.findall(STR, m.group(1))] if m else []

def eintraege(pfad, favorit):
    s = open(pfad, encoding='utf-8').read()
    for block in re.split(r'\n\s{4}\{\s*\n', s)[1:]:
        m = re.search(r'\bid:\s*(\d+)', block)
        if not m:
            continue
        d = re.search(r'new Date\((\d{4})\s*,\s*(\d+)', block)
        jahr = int(d.group(1)) if d else None
        yield {
            "id": int(m.group(1)),
            "titel": text(block, 'title'),
            "autor": text(block, 'author'),
            "jahr": None if jahr in (None, 1000) else jahr,
            "url": text(block, 'url'),
            "typen": liste(block, 'chartId'),
            "techniken": [l for l in liste(block, 'labels')],
            "werkzeuge": re.findall(r'name:\s*' + STR, block),
            "interaktiv": bool(re.search(r'interactive:\s*true', block)),
            "favorit": favorit,
            "kontext": text(block, 'contextDescription'),
            "gestaltung": text(block, 'chartDescription'),
        }

alle = list(eintraege(sys.argv[1], False)) + list(eintraege(sys.argv[2], True))
alle.sort(key=lambda e: e["id"])
assert len({e["id"] for e in alle}) == len(alle), "doppelte id"
for e in alle:
    assert e["titel"] and e["url"] and e["autor"], e["id"]
out = {
    "quelle": "Data from dataviz-inspiration.com by Yan Holtz, licensed under CC BY 4.0",
    "lizenz": "CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/)",
    "repo": "https://github.com/holtzy/dataviz-inspiration",
    "commit": sys.argv[3],
    "uebernommen": "2026-11-11",
    "aenderungen": "Felder umbenannt und gekürzt (Bild, Helligkeit, Werkzeug-Links entfernt); Jahr 1000 als unbekannt (null). Bilder nicht übernommen: Rechte bei den Urhebern.",
    "eintraege": alle,
}
json.dump(out, open('katalog.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print(len(alle), "Einträge,", sum(e["favorit"] for e in alle), "Favoriten")
