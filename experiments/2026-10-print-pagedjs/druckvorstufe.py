"""Druckvorstufe für den Paged.js-Nachbau.

Schritte (in dieser Reihenfolge):
1. Farbfelder: RGB-Softproof-Werte → exakte CMYK-Werte (Tabelle unten)
2. Bilder: RGB-Bilder → die CMYK-Bilddaten der Quelle (gleiche Pixelmaße)
3. Format: MediaBox, BleedBox, TrimBox für 420 × 148 mm + 3 mm Beschnitt
4. Ghostscript: alles übrige (Verläufe, Weiß) nach CMYK, Profil FOGRA52
5. PDF/X-4-Kennzeichnung: OutputIntent mit Profil, Metadaten

Aufruf: python3 druckvorstufe.py nachbau-rgb.pdf quelle.pdf profil.icc ausgabe.pdf
"""
import sys, subprocess, pikepdf
from decimal import Decimal

ein, quelle, profil, aus = sys.argv[1:5]

# Softproof-RGB (wie Chrome es schreibt, 0..1 auf 4 Stellen) → CMYK 0..1
FARBEN = {
    "#313231": (0.654, 0.529, 0.397, 0.605),  # Fließtext
    "#BE283B": (0.029, 0.946, 0.580, 0.090),  # Zitat, Auszeichnung
    "#BE1033": (0.021, 1.000, 0.598, 0.101),  # Flächen
    "#A3D7DE": (0.331, 0.026, 0.096, 0.000),  # Hellblau
    "#44556B": (0.743, 0.481, 0.164, 0.249),  # Blau
    "#586679": (0.639, 0.402, 0.172, 0.176),  # Blau 80 %
    "#C92511": (0.017, 0.932, 0.991, 0.062),  # Markierung
    "#C5201C": (0.013, 1.000, 0.947, 0.064),  # Handschrift
    "#EBEBEB": (0.063, 0.041, 0.040, 0.000),  # Grau
    "#2A405C": (0.869, 0.561, 0.126, 0.343),  # Nachtblau
}
def schluessel(r, g, b):
    return "#%02X%02X%02X" % tuple(round(float(v) * 255) for v in (r, g, b))

pdf = pikepdf.open(ein)
ersetzt, unbekannt = {}, {}

def farben_ersetzen(stream_owner):
    ops = pikepdf.parse_content_stream(stream_owner)
    neu = []
    for operanden, op in ops:
        name = str(op)
        if name in ("rg", "RG") and len(operanden) == 3:
            k = schluessel(*operanden)
            if k in FARBEN:
                neu.append(([Decimal(str(v)) for v in FARBEN[k]], pikepdf.Operator("k" if name == "rg" else "K")))
                ersetzt[k] = ersetzt.get(k, 0) + 1
                continue
            unbekannt[k] = unbekannt.get(k, 0) + 1
        neu.append((operanden, op))
    return pikepdf.unparse_content_stream(neu)

gesehen = set()
def formen(res, tiefe=0):
    if res is None or tiefe > 8: return
    for _, x in (res.get("/XObject") or {}).items():
        if x.objgen in gesehen: continue
        gesehen.add(x.objgen)
        if x.get("/Subtype") == "/Form":
            # Masken (Luminosität) nicht anfassen: dort bedeutet Weiß/Schwarz Deckkraft
            x.write(farben_ersetzen(x))
            formen(x.get("/Resources"), tiefe + 1)

for seite in pdf.pages:
    seite.contents_coalesce()
    seite.Contents.write(farben_ersetzen(seite))
    formen(seite.Resources)

# --- 2. Bilder aus der Quelle (CMYK) einsetzen, gleiche Pixelmaße ---
src = pikepdf.open(quelle)
quellbilder = {}
for s in src.pages:
    for _, x in s.images.items():
        quellbilder[(int(x.Width), int(x.Height))] = x
bilder_ersetzt = 0
for seite in pdf.pages:
    def bilder(res, tiefe=0):
        global bilder_ersetzt
        xo = res.get("/XObject") if res is not None else None
        if not xo or tiefe > 8: return
        for name in list(xo.keys()):
            x = xo[name]
            if x.get("/Subtype") == "/Image":
                q = quellbilder.get((int(x.Width), int(x.Height)))
                if q is not None and x.get("/SMask") is None:
                    xo[name] = pdf.copy_foreign(q)
                    bilder_ersetzt += 1
            elif x.get("/Subtype") == "/Form":
                bilder(x.get("/Resources"), tiefe + 1)
    bilder(seite.Resources)

# --- 3. Format ---
MM = 72 / 25.4
for seite in pdf.pages:
    b, h = [float(v) for v in seite.MediaBox[2:]]
    soll_b, soll_h = 426 * MM, 154 * MM
    oben = h
    seite.MediaBox = [0, oben - soll_h, soll_b, oben]
    seite.BleedBox = [0, oben - soll_h, soll_b, oben]
    seite.TrimBox = [3 * MM, oben - soll_h + 3 * MM, soll_b - 3 * MM, oben - 3 * MM]
    if "/CropBox" in seite.obj: del seite.obj["/CropBox"]
pdf.save("_stufe1.pdf")
print("Farben ersetzt:", ersetzt)
print("unbekannte RGB-Farben (gehen über das Profil):", unbekannt)
print("Bilder durch CMYK-Quelle ersetzt:", bilder_ersetzt)

# --- 4. Ghostscript: Rest nach CMYK ---
subprocess.run([
    "gs", "-q", "-dBATCH", "-dNOPAUSE", "-dSAFER", "-sDEVICE=pdfwrite",
    "-dCompatibilityLevel=1.6",
    "-sColorConversionStrategy=CMYK", "-sProcessColorModel=DeviceCMYK",
    f"-sOutputICCProfile={profil}", f"-sDefaultCMYKProfile={profil}",
    "-dPassThroughJPEGImages=true", "-dDownsampleColorImages=false",
    "-dDownsampleGrayImages=false", "-dAutoFilterColorImages=false",
    "-dColorImageFilter=/FlateEncode", "-dEmbedAllFonts=true", "-dSubsetFonts=true",
    "-dUseTrimBox=false", "-dPreserveOverprintSettings=true",
    "-o", "_stufe2.pdf", "_stufe1.pdf"], check=True)

# --- 5. PDF/X-4-Kennzeichnung ---
out = pikepdf.open("_stufe2.pdf")
icc = pikepdf.Stream(out, open(profil, "rb").read())
icc["/N"] = 4
out.Root.OutputIntents = out.make_indirect(pikepdf.Array([pikepdf.Dictionary(
    Type=pikepdf.Name.OutputIntent, S=pikepdf.Name.GTS_PDFX,
    OutputConditionIdentifier="PSO Uncoated v3 (FOGRA52)",
    RegistryName="http://www.color.org", Info="PSO Uncoated v3 (FOGRA52)",
    DestOutputProfile=out.make_indirect(icc))]))
# Boxen gehen bei Ghostscript teils verloren → erneut setzen
for s_aus, s_ein in zip(out.pages, pikepdf.open("_stufe1.pdf").pages):
    for box in ("/MediaBox", "/BleedBox", "/TrimBox"):
        s_aus.obj[box] = pikepdf.Array([float(v) for v in s_ein.obj[box]])
    if "/CropBox" in s_aus.obj: del s_aus.obj["/CropBox"]
with out.open_metadata(set_pikepdf_as_editor=False) as meta:
    meta["pdfx:GTS_PDFXVersion"] = "PDF/X-4"
    meta["dc:title"] = "Flyer Rittergut Knau — Nachbau Paged.js"
    meta["xmp:CreatorTool"] = "Chromium + Paged.js 0.4.3, Druckvorstufe: Ghostscript 10.02, pikepdf"
out.docinfo["/GTS_PDFXVersion"] = "PDF/X-4"
out.docinfo["/Trapped"] = pikepdf.Name.False_
out.docinfo["/Title"] = "Flyer Rittergut Knau — Nachbau Paged.js"
out.save(aus)
print("geschrieben:", aus)
