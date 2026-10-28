"""Typo-Prüfung: misst Satzqualität im Fließtext eines PDFs.

Aufruf: python3 typo-pruefung.py datei.pdf [--groesse 9] [--rand 3]
Misst je Spalte (Seite + linke Kante): Zeichen je Zeile, Wortabstände,
Löcher, Trennungen und Trennfolgen, Zeilen mit Gedankenstrich am Anfang.
Grenzwerte als Hinweis (Quellen im Fachpaket „Form“):
  Zeilenlänge 40–50 Zeichen mehrspaltig, 45–75 einspaltig (Bringhurst)
  höchstens 3 Trennungen in Folge (Satzregel)
"""
import sys, statistics as st, argparse, collections
import pymupdf
a = argparse.ArgumentParser(); a.add_argument("pdf"); a.add_argument("--groesse", type=float, default=9)
a.add_argument("--rand", type=float, default=3); a.add_argument("--loch", type=float, default=2.5); a.add_argument("--zeige", action="store_true")
o = a.parse_args(); k = 25.4 / 72
spalten = collections.defaultdict(list)
for pno, p in enumerate(pymupdf.open(o.pdf)):
    roh_zeilen = collections.defaultdict(list)   # (Feld, Grundlinie) → Zeichen
    for b in p.get_text("rawdict")["blocks"]:
        for l in b.get("lines", []):
            if l["dir"] != (1.0, 0.0): continue
            for s in l["spans"]:
                if abs(s["size"] - o.groesse) >= 0.25: continue
                for c in s["chars"]:
                    x = c["bbox"][0] * k - o.rand
                    roh_zeilen[(int((x + 5) // 105), round(c["origin"][1] * 2) / 2)].append(c)
    for (feld, y), ch in roh_zeilen.items():
        ch.sort(key=lambda c: c["bbox"][0])
        def echt(i, c):
            if c["c"] not in " \u00ad": return True
            vor = next((x for x in reversed(ch[:i]) if x["c"] not in " \u00ad"), None)
            nach = next((x for x in ch[i + 1:] if x["c"] not in " \u00ad"), None)
            if vor is None or nach is None: return False
            return (nach["bbox"][0] - vor["bbox"][2]) * k > 0.5
        ch = [c for i, c in enumerate(ch) if echt(i, c)]
        sicht = [c for c in ch if c["c"] not in " \u00ad"]
        if len(sicht) < 12: continue
        gaps = [(b2["bbox"][0] - a2["bbox"][2]) * k for a2, b2 in zip(sicht, sicht[1:]) if (b2["bbox"][0] - a2["bbox"][2]) * k > 0.6]
        roh = "".join(c["c"] for c in ch).rstrip()
        trenn = len(roh) > 1 and roh[-1] in "-\u00ad" and roh[-2] not in " –"
        txt = roh.replace("\u00ad", "")
        if o.zeige and gaps and max(gaps) > o.loch:
            print(f"  Loch {max(gaps):.2f} mm  S{pno+1} Feld {feld+1}: {' '.join(txt.split())}")
        spalten[(pno + 1, feld)].append(dict(y=y, gaps=gaps, trenn=trenn, zeichen=len(" ".join(txt.split())),
                                             strich_anfang=txt.lstrip().startswith(("–", "—"))))
gesamt = dict(zeilen=0, trenn=0, folge=0, loecher=0, strich=0, gaps=[], zeichen=[])
print(f"{'Spalte':12}{'Zeilen':>7}{'Zeichen/Zeile':>15}{'Trenn.':>8}{'in Folge':>10}{'Löcher':>8}")
for key in sorted(spalten):
    z = sorted(spalten[key], key=lambda r: r["y"])
    folge = m = 0
    for r in z:
        m = m + 1 if r["trenn"] else 0; folge = max(folge, m)
    zz = [r["zeichen"] for r in z]
    loecher = sum(1 for r in z if r["gaps"] and max(r["gaps"]) > o.loch)
    print(f"S{key[0]} Feld {key[1]+1:<4}{len(z):>7}{st.mean(zz):>10.0f} ({min(zz)}–{max(zz)}){sum(r['trenn'] for r in z):>6}{folge:>10}{loecher:>8}")
    gesamt["zeilen"] += len(z); gesamt["trenn"] += sum(r["trenn"] for r in z); gesamt["folge"] = max(gesamt["folge"], folge)
    gesamt["loecher"] += loecher; gesamt["strich"] += sum(r["strich_anfang"] for r in z)
    gesamt["gaps"] += [g for r in z for g in r["gaps"]]; gesamt["zeichen"] += zz
g = gesamt
print(f"\nGESAMT  Zeilen {g['zeilen']} · Zeichen/Zeile {st.mean(g['zeichen']):.0f} · Wortabstand {st.mean(g['gaps']):.2f} ± {st.pstdev(g['gaps']):.2f} mm (max {max(g['gaps']):.2f})"
      f" · Löcher >{o.loch} mm: {g['loecher']} · Trennungen {g['trenn']} (max. {g['folge']} in Folge) · Gedankenstrich am Zeilenanfang: {g['strich']}")
