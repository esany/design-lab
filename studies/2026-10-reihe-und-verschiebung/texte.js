/* Alle Erklärungen der Studie an einem Ort — inhaltlich bearbeitbar, ohne den
   Programmcode anzufassen. Aufbau je Eintrag:
     kurz  — eine Zeile, immer sichtbar (Stufe 1)
     mehr  — ausklappbare Erklärung: was, warum, ausprobieren (Stufe 2)
   Farbsysteme zusätzlich:
     wie   — wie die Studie es technisch umsetzt (Stufe 3)
     quelle— Herkunft, Belegstatus, Grenzen (Stufe 3)
   Belegstatus nach Skill „belegpflicht“: belegt · abgeleitet · nicht belegt. */

window.TEXTE = {
  studie: {
    kurz: "Zwei Fragen, getrennt einstellbar: WO steht eine Farbe (Anordnung) — und WELCHE Farben stehen zur Wahl (Farbsystem).",
    mehr: "Die Anordnung kommt aus der konkreten Kunst: eine Regel verteilt eine Farbfolge über ein Raster. Das Farbsystem bestimmt, welche Farben in dieser Folge stehen — als gleichmäßige Tonreihe oder nach einem der sieben Farbkontraste von Johannes Itten. So lässt sich prüfen, was die Ordnung leistet und was die Farbe leistet.",
  },

  /* ---------------- Anordnung ---------------- */
  modus: {
    kurz: "Regel verteilt nach Formel, Negativfolie verteilt zufällig.",
    mehr: "Die Negativfolie benutzt dieselben Farben und dieselbe Farbfolge, aber ohne Regel: jedes Feld zieht zufällig ein Glied der Folge. Sie zeigt das „Durchschnittsbild“ einer Fläche — und macht damit sichtbar, was die Regel eigentlich beiträgt. Ausprobieren: zwischen beiden hin- und herschalten und auf die Messung achten.",
  },
  n: {
    kurz: "Anzahl der Felder pro Zeile und Spalte.",
    mehr: "Bei n = 12 entstehen 144 Felder. Ist die Länge der Farbfolge ein Teiler von n, belegt jede Farbe exakt ihren vorgesehenen Anteil. Sonst bleibt in jeder Zeile ein Rest — die Messung zeigt das. Ausprobieren: n = 12 und n = 13 mit vier Farben vergleichen.",
  },
  s: {
    kurz: "Um wie viele Glieder jede Zeile gegenüber der vorigen verschoben ist.",
    mehr: "Die Formel: Position = (Zeile · s + Spalte) mod Länge der Folge. s = 0 ergibt senkrechte Streifen, s = 1 Diagonalen nach links unten, s = Länge − 1 Diagonalen nach rechts unten. Teilen s und die Länge der Folge einen gemeinsamen Faktor, wiederholt sich das Muster schneller und es entstehen Blöcke. Ausprobieren: Länge 6, dann s = 1, 2 und 3.",
  },
  gap: {
    kurz: "Abstand zwischen den Feldern, relativ zur Feldgröße.",
    mehr: "Die Fuge trennt die Felder optisch. Ohne Fuge (0) berühren sich die Farben — Simultan- und Komplementärkontrast wirken dann am stärksten. Mit breiter Fuge wird jedes Feld eher als einzelnes Element gelesen.",
  },
  seed: {
    kurz: "Startwert des Zufalls — nur für die Negativfolie.",
    mehr: "Gleicher Seed, gleiches Bild: Auch der Zufall ist hier wiederholbar, damit ein Zustand teilbar und überprüfbar bleibt.",
  },

  /* ---------------- Farbsysteme ---------------- */
  farbsystem: {
    kurz: "Woher die Farben der Folge kommen.",
    mehr: "„Tonreihe“ verteilt Farbtöne gleichmäßig bei gleicher Helligkeit und Buntheit — damit unterscheidet sich nur der Ton. Die sieben Itten-Kontraste stellen jeweils einen einzigen Gegensatz in den Vordergrund und halten die übrigen Eigenschaften möglichst konstant.",
  },

  systeme: {
    tonreihe: {
      titel: "Tonreihe (OKLCH)",
      kurz: "k Farbtöne in gleichen Schritten, Helligkeit und Buntheit konstant.",
      mehr: "Der Farbkreis wird in k gleiche Winkel geteilt. Weil Helligkeit (L) und Buntheit (C) für alle gleich sind, wirken die Farben ähnlich schwer — der einzige Unterschied ist der Farbton. Das ist die „neutrale“ Ausgangslage, gegen die sich die Itten-Kontraste abheben.",
      wie: "Farbe i: OKLCH(L, C, h + i · 360°/k). Liegt eine Farbe außerhalb des darstellbaren sRGB-Raums, wird nur ihre Buntheit verringert; Ton und Helligkeit bleiben.",
      quelle: "OKLCH ist ein wahrnehmungsnaher Farbraum (Björn Ottosson, 2020; Teil von CSS Color 4). Gleiche Zahlenschritte bedeuten dort annähernd gleich große wahrgenommene Unterschiede — belegt für Helligkeit, abgeleitet für Ton.",
    },
    "an-sich": {
      titel: "Farbe-an-sich-Kontrast",
      kurz: "Reine, voll gesättigte Farben nebeneinander — der einfachste Kontrast.",
      mehr: "Am stärksten wirkt er mit den drei Grundfarben Gelb, Rot, Blau; mit Sekundär- und Tertiärfarben wird er schwächer. Die Farben haben dabei unterschiedliche Helligkeit — Gelb ist von Natur aus hell, Blau dunkel. Ausprobieren: Primärfarben mit s = 1, dann den Zwölferkreis.",
      wie: "Jede Farbe des Itten-Kreises wird in ihrer buntesten darstellbaren Form gezeigt (größte Buntheit C, die im sRGB-Raum für diesen Ton möglich ist, bei der dazugehörigen Helligkeit).",
      quelle: "Johannes Itten, Kunst der Farbe (1961): einer der sieben Kontraste — belegt. Die Zuordnung von Ittens zwölf Farben zu OKLCH-Tönen ist eine Annäherung dieser Studie — nicht belegt.",
    },
    "hell-dunkel": {
      titel: "Hell-Dunkel-Kontrast",
      kurz: "Stufen von dunkel nach hell — eine Farbe oder unbunt.",
      mehr: "Der Hell-Dunkel-Kontrast trägt Form und Raum: Er bleibt sogar in einer Schwarz-Weiß-Kopie erhalten. Mit „unbunt“ sieht man ihn rein, mit einer Grundfarbe zeigt sich, wie sich Buntheit mit der Helligkeit verändert. Ausprobieren: unbunt mit 6 Stufen, dann Blau mit 6 Stufen.",
      wie: "Helligkeit L wächst in gleichen Schritten von 0,22 bis 0,95. Bei einer Grundfarbe bleibt der Ton gleich, die Buntheit ist jeweils die größte bei dieser Helligkeit darstellbare (× 0,9).",
      quelle: "Itten, Kunst der Farbe (1961) — belegt. Gleichmäßige Stufen in OKLCH statt Ittens gemalter Skalen — abgeleitet.",
    },
    "kalt-warm": {
      titel: "Kalt-Warm-Kontrast",
      kurz: "Warme gegen kalte Farben bei gleicher Helligkeit und Buntheit.",
      mehr: "Bei Itten gilt Rotorange als wärmste, Blaugrün als kälteste Farbe. Damit nur die Temperatur wirkt, haben hier alle Farben dieselbe Helligkeit und Buntheit. „Spannweite“ nimmt Nachbarn der beiden Pole hinzu. Ausprobieren: Spannweite 0 (nur die Pole), dann 2.",
      wie: "Warm: Rotorange ± Spannweite im Itten-Kreis, kalt: Blaugrün ± Spannweite. Alle Farben bei Helligkeit L; Buntheit = die kleinste, die für alle Töne bei L noch darstellbar ist. Die Folge wechselt warm–kalt ab.",
      quelle: "Itten (1961): Rotorange wärmster, Blaugrün kältester Pol — belegt (Sekundärquelle, siehe Skill). Gleichsetzung von Helligkeit und Buntheit in OKLCH — abgeleitet.",
    },
    komplementaer: {
      titel: "Komplementärkontrast",
      kurz: "Zwei Gegenfarben im Itten-Kreis — mit oder ohne Mischstufen.",
      mehr: "Komplementärfarben steigern sich gegenseitig in der Leuchtkraft. Bei Itten neutralisieren sie sich gemischt zu Grau. Die Studie bietet zwei Gegenfarben an: nach Ittens Malfarbenkreis und nach der Wahrnehmung (genau gegenüber im OKLCH-Kreis). Mit Mischstufen sieht man den Unterschied: Nur die wahrnehmungsbasierte Gegenfarbe führt in der Mitte zu Grau. Ausprobieren: Rot/Grün mit 3 Stufen, dann „Wahrnehmung“ wählen.",
      wie: "Itten: Gegenfarbe liegt im Zwölferkreis sechs Stellen weiter. Wahrnehmung: Farbton + 180° bei gleicher Helligkeit, größte darstellbare Buntheit. Mischstufen werden linear im OKLab-Raum gebildet.",
      quelle: "Itten (1961) — belegt. Ittens Kreis beruht auf Malfarben (Gelb–Rot–Blau); seine Paare liegen im wahrnehmungsnahen OKLCH-Raum nicht gegenüber (z. B. Rot ≈ 27°, Grün ≈ 150°). Dass sie dann beim Mischen nicht grau werden, ist kein Fehler der Studie, sondern der Unterschied zwischen Pigmentmischung und Lichtmetrik — abgeleitet.",
    },
    simultan: {
      titel: "Simultankontrast",
      kurz: "Graue Felder zwischen einer bunten Farbe — das Auge färbt sie ein.",
      mehr: "Das Auge fordert zu jeder Farbe ihre Gegenfarbe und erzeugt sie selbst, wenn sie fehlt. Ein neutrales Grau gleicher Helligkeit erscheint zwischen Rot leicht grünlich, zwischen Blau leicht orange. Das Bild enthält dieses Grün oder Orange nicht — die Herleitung einer Zelle beweist es. Ausprobieren: Fuge 0, ein Graufeld lange ansehen.",
      wie: "Folge aus (Anteil − 1) bunten Feldern und einem Graufeld. Das Grau hat dieselbe Helligkeit wie die bunte Farbe und die Buntheit 0.",
      quelle: "Itten (1961); Gesetz des Simultankontrasts nach Chevreul (1839) — belegt (Sekundärquelle). Stärke der Wirkung hängt von Größe, Dauer des Hinsehens und Umgebung ab.",
    },
    qualitaet: {
      titel: "Qualitätskontrast",
      kurz: "Eine Farbe von voll gesättigt bis grau — bei gleicher Helligkeit.",
      mehr: "„Qualität“ meint bei Itten die Reinheit oder Sättigung einer Farbe. Leuchtende Farben wirken neben getrübten noch leuchtender, getrübte noch stumpfer. Ausprobieren: Rot mit 5 Stufen, dann nur 2.",
      wie: "Buntheit C fällt in gleichen Schritten von der größten darstellbaren Buntheit bis 0; Ton und Helligkeit bleiben gleich.",
      quelle: "Itten (1961) — belegt. Itten trübt auch mit Schwarz, Weiß oder der Gegenfarbe; die Studie zeigt nur die Trübung zu Grau gleicher Helligkeit — abgeleitet.",
    },
    quantitaet: {
      titel: "Quantitätskontrast",
      kurz: "Zwei Farben in einem bestimmten Flächenverhältnis.",
      mehr: "Helle Farben brauchen weniger Fläche als dunkle, um gleich stark zu wirken. Itten übernimmt dafür Goethes Lichtwerte: Gelb 9, Orange 8, Rot 6, Grün 6, Blau 4, Violett 3. Harmonisch ist das umgekehrte Verhältnis: Gelb : Violett = 1 : 3, Orange : Blau = 1 : 2, Rot : Grün = 1 : 1. Ausprobieren: Gelb/Violett harmonisch, dann umgekehrt — „Ausdruck“ statt Ruhe.",
      wie: "Die Farbfolge enthält jede Farbe so oft, wie es das Verhältnis verlangt (z. B. Gelb, Violett, Violett, Violett). Die Anordnungsregel verteilt diese Folge; die Messung prüft das Ergebnis.",
      quelle: "Lichtwerte und Verhältnisse nach Itten (1961) — belegt. Grenzen: Eine Untersuchung im Color Culture and Science Journal (2017) schreibt die Werte eher Schopenhauer als Goethe zu und fand spektralphotometrisch quantitative Abweichungen. Die Werte sind ein Gestaltungsmaß, keine Messgröße.",
    },
  },

  /* Parameter, die nur bei bestimmten Farbsystemen erscheinen */
  k:       { kurz: "Anzahl der Farbtöne in der Reihe.", mehr: "Mehr Töne bedeuten kleinere Abstände im Farbkreis — die Unterschiede werden feiner, das Muster unruhiger. Die Länge der Farbfolge ist hier gleich k." },
  L:       { kurz: "Helligkeit (0 = schwarz, 1 = weiß).", mehr: "OKLCH-Helligkeit ist wahrnehmungsnah: gleiche Schritte wirken etwa gleich groß. Gleiche Helligkeit für alle Farben schaltet den Hell-Dunkel-Kontrast aus." },
  C:       { kurz: "Buntheit (0 = grau).", mehr: "Je höher die Buntheit, desto leuchtender. Nicht jede Kombination aus Ton und Helligkeit ist am Bildschirm darstellbar; die Studie verringert dann nur die Buntheit." },
  h:       { kurz: "Farbton, mit dem die Reihe beginnt (in Grad).", mehr: "0° Rotviolett, etwa 30° Rot, 90°–110° Gelb, 145° Grün, 260° Blau, 310° Violett." },
  satz:    { kurz: "Welche Farben des Itten-Kreises.", mehr: "Primärfarben: Gelb, Rot, Blau. Mit Sekundärfarben: dazu Orange, Violett, Grün. Zwölferkreis: alle zwölf Farben Ittens." },
  basis:   { kurz: "Die Farbe, um die es geht.", mehr: "Eine der zwölf Farben aus Ittens Farbkreis (in OKLCH angenähert)." },
  stufen:  { kurz: "Anzahl der Abstufungen.", mehr: "Mehr Stufen zeigen den Verlauf feiner, wenige Stufen verstärken den Kontrast zwischen den Enden." },
  weite:   { kurz: "Wie viele Nachbarn der beiden Pole dazukommen.", mehr: "0 = nur Rotorange und Blaugrün. 1 = je ein Nachbar links und rechts dazu, usw." },
  paar:    { kurz: "Welches Gegenfarbenpaar.", mehr: "Paare liegen im Itten-Kreis einander gegenüber." },
  gegen:   { kurz: "Woraus die Gegenfarbe bestimmt wird.", mehr: "Itten-Kreis: die Gegenfarbe aus Ittens Malfarbenkreis (Rot–Grün, Gelb–Violett, Orange–Blau). Wahrnehmung: der genau gegenüberliegende Ton im wahrnehmungsnahen OKLCH-Kreis bei gleicher Helligkeit. Der Vergleich zeigt, wo Ittens Modell und die heutige Farbmetrik auseinandergehen." },
  misch:   { kurz: "Zwischenstufen zwischen den beiden Farben.", mehr: "0 = nur die beiden Gegenfarben. Mit Stufen sieht man, wie sich die Farben auf dem Weg zueinander zu Grau neutralisieren." },
  anteil:  { kurz: "Jedes wievielte Feld der Folge grau ist.", mehr: "Bei 4 ist jedes vierte Feld grau. Seltene Graufelder zwischen viel Farbe zeigen den Simultankontrast am deutlichsten." },
  verh:    { kurz: "Flächenverhältnis der beiden Farben.", mehr: "Harmonisch: umgekehrt zu den Lichtwerten (ruhig, ausgewogen). Gleich: 1 : 1. Umgekehrt: die hellere Farbe bekommt mehr Fläche — bei Itten bewusster „Ausdruck“." },

  /* ---------------- Werkzeuge ---------------- */
  erklaermodus: {
    kurz: "Zeigt in jedem Feld seine Position in der Farbfolge.",
    mehr: "So wird die Regel direkt im Bild lesbar: Jede Zeile beginnt s Positionen weiter als die vorige. Die Zahlen erscheinen bei Rastern bis 16 × 16.",
  },
  zelle: {
    kurz: "Feld anklicken (oder Bild fokussieren und Pfeiltasten benutzen) — die Herleitung erscheint hier.",
  },
  feld: {
    kurz: "Dieselbe Folge mit jeder möglichen Verschiebung — ein Klick übernimmt sie.",
    mehr: "Das Variantenfeld zeigt den ganzen Raum der Regel auf einen Blick. Gestalterisch ist die Frage nicht, welche Variante „richtig“ ist, sondern welche die Absicht trägt.",
  },
  messung: {
    kurz: "Zählt die Felder je Farbe und vergleicht mit dem Soll der Farbfolge.",
    mehr: "Das Soll ergibt sich aus der Farbfolge (bei der Tonreihe: gleiche Mengen; beim Quantitätskontrast: das gewählte Verhältnis). Exakt erreicht wird es mit der Regel, wenn die Länge der Folge ein Teiler von n ist. Die Negativfolie erreicht es fast nie.",
  },
};
