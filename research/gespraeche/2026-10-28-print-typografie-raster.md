# Gesprächsprotokoll 2026-10-27/28: Print, Typografie, Raster, Prozess

Destillat aller Erkenntnisse aus dem Chat, die nicht schon in Experimenten,
Fachpaketen oder Entscheidungen stehen. Die Status folgen AGENTS.md. Links
führen zu den Fundstellen.

## 1 · Freie Werkzeuge für Grafik und Print (Recherche, Stand 27.10.2026)

| Werkzeug | Befund | Status | Quelle |
|---|---|---|---|
| Scribus 1.6.6 (13.4.2026), Entwicklung 1.7.3 | echtes Layoutprogramm: CMYK, ICC, PDF/X-4, Python; IDML-Import nur in 1.7 | belegt | [Wikipedia](https://en.wikipedia.org/wiki/Scribus) |
| Affinity (Canva), kostenlos seit 10/2025 | Profiniveau, öffnet IDML, Pantone; aber Canva-Konto, geschlossenes Format, KI nur im Abo | belegt | [Printweek](https://printweek.mydigitalpublication.co.uk/articles/canva-s-free-affinity-app-shakes-up-design-market) |
| Typst | Satz als Code, Daten (CSV/JSON/XML), PDF/UA; CMYK und PDF/X auf der Fundstelle nicht erwähnt | belegt / nicht belegt | [typst.app](https://typst.app/blog/2025/automated-generation) |
| Inkscape | CMYK-PDF ab 1.4 angekündigt; die Seite ist als vorläufig markiert | nicht belegt (Stabilität) | [inkscape.org](https://inkscape.org/learn/cms), [Revoy](https://davidrevoy.com/article1061/cmyk-support-in-inkscape-could-be-a-game-changer-for-professional-print-designers) |
| Penpot | Bildschirm zuerst; PDF als Vektor, zu Beschnitt und CMYK nichts; ein Plugin aus der Community (7–8/2026) rüstet PDF/X-4 und CMYK nach; offizieller MCP-Server experimentell | belegt | [Hilfe](https://help.penpot.app/user-guide/exporting/), [Plugin](https://community.penpot.app/t/penpot-frame-export-plugin-testers-wanted/10755), [Smashing](https://smashingmagazine.com/2026/01/penpot-experimenting-mcp-servers-ai-powered-design-workflows/) |
| Figma für Print | Forum 9/2026: kein CMYK, kein Beschnitt, kein PDF/X, keine offizielle Antwort; Plugins als Ersatz | belegt | [Figma-Forum](https://forum.figma.com/suggest-a-feature-11/using-figma-to-create-print-ready-materials-57512) |
| Web-to-Print (OSP Brüssel, Paged.js, FHNW, WdKA) | in der experimentellen Szene etabliert; CMYK über eigenen Umwandlungsschritt; Chrome hat CSS Regions entfernt | belegt | [Varia/OSP](https://cc.vvvvvvaria.org/wiki/Standards_and_work_arounds), [Paged.js](https://pagedjs.org/en/about/), [FHNW](https://fhnw.ch/en/continuing-education/art-and-design/modules/from-web-to-print) |
| Graphite | knotenbasiert, prozedural, offen, Alpha; PDF-Export erst in der Beta geplant | belegt | [Digital Production](https://digitalproduction.com/2025/07/14/graphite-open-source-vector-design-tool-with-a-twist/) |
| KI-Design-Agenten (Lovart, Kittl, Canva-KI) | ob Ebenen und Druckausgabe möglich sind: nicht belegt; Quellen meist Eigenwerbung; geschlossen, Abo | nicht belegt | [Kittl](https://www.kittl.com/features/agentic-ai), [Lovart](https://www.lovart.ai/blog/10-best-ai-print-design-tools-2026) |

**Einordnung (*abgeleitet*):** Den Engpass bildet die Druckvorstufe, nicht
das Gestalten. Wird sie als eigener, automatisierter Schritt abgetrennt, ist
die Wahl des Gestaltungswerkzeugs frei. Grenze: Genaue CMYK-Werte, Sonderfarben
und Stanzformen brauchen ein Werkzeug, das von Anfang an in CMYK arbeitet.

## 2 · Penpot oder Paged.js

Penpot ist für freie Einzelseiten intuitiv (Maus), Paged.js ist stark bei
mehrseitigem Satz, Serien und Daten. Penpot braucht ein Konto bei einem externen
Dienst (oder einen eigenen Server). Entscheidung: Paged.js wurde getestet;
Scribus steht als nächster Vergleich offen.

## 3 · Sonderzeichen in Ihren Schriften (*getestet*, Schriftdateien)

Officina, Euclid Flex, Univers und Jane Austen enthalten: geschütztes
Leerzeichen, weiches Trennzeichen, Halbgeviert- und Geviertstrich, Auslassung,
deutsche Anführungszeichen, Minus, Mal. **Es fehlen** in allen vier: das
schmale geschützte Leerzeichen (U+202F), Achtelgeviert, Haarspatium,
Halbgeviert- und Geviert-Leerraum, Ziffernleerzeichen, der geschützte
Bindestrich (U+2011), der Wortverbinder und das Nullbreiten-Leerzeichen.
InDesign erzeugt diese Räume selbst; der Browser braucht das Zeichen in der
Schrift. Lösung im Labor: Abstand als Element (`feinsatz.js`).

## 4 · CSS und Typografie in Chromium 153 (*getestet* mit `CSS.supports`)

- **Vorhanden:** Kerning, Ligaturen, OpenType-Ziffern und -Kapitälchen,
  `text-wrap: pretty` und `balance`, `hyphenate-limit-chars`, `text-box-trim`
  und `-edge`, `initial-letter`, `widows`/`orphans`, `text-justify`.
- **Fehlt:** `hanging-punctuation` (optischer Randausgleich),
  `line-height-step` (Grundlinienraster), `hyphenate-limit-lines`, `-zone`,
  `-last`.
- Firefox und Safari sind nicht getestet.

## 5 · Lesbarkeitsbewertung des Flyers: alle Vorschläge mit Folgen

Kontraste am Bildschirm gerechnet (Softproof), also nur Näherung:

| Vorschlag | Begründung | Folge | Stand |
|---|---|---|---|
| Bankdaten 7 → 9 pt, dazu QR-Code für die Überweisung (GiroCode/EPC-QR) | wird abgeschrieben; 0,17° liegt unter der Grenze | Block etwa 30 % größer | Antwortkarte zurückgestellt; der Standard ist noch zu belegen |
| Fließtext 9 → 9,5 pt | 0,22° → 0,23°, Gewinn 5 % | etwa 10 % Text kürzen | verworfen (Aufwand ohne spürbare Wirkung); als Pilot 11–12 pt mit Kürzung um ein Drittel bis 44 % |
| Titel für die Auslage (A: oben und größer, B: Reiter) | aus 1,5 m nur 0,17° | A verändert die Titelseite | entfällt: der Flyer liegt nur im Objekt aus |
| Zweite Titelzeile im Verlauf auf Rot | 3,4–3,8 : 1 | Weiß hätte 6,3 : 1, ginge aber auf Kosten der Farbgeste | niedrige Priorität (in der Hand 0,63°) |
| Feld hinter „Sie wollen …“ deckender | 2,8–3,7 : 1 | Bild sieht weniger durch | umgesetzt (92 %) |
| Kartenbeschriftung 5 → 6,5 pt | 0,12° | Etiketten verdecken mehr Karte | zurückgestellt (Antwortkarte) |
| Fließtext 100 % Schwarz | 12,9 → 16,3 : 1, kein Passerrisiko | keine | umgesetzt |
| Bildunterschriften 7 → 8 pt | 0,17° → 0,20° | ein Etikett breiter | umgesetzt |

## 6 · Bewertung der offenen Punkte nach den Prinzipien

- **„e.V.“ oder „e. V.“:** Eine eigene, einheitliche Schreibweise des Vereins
  wurde nicht gefunden: ein Tagungsflyer von 2026 schreibt
  „e. V.“ ([Museumsverband](https://museumsverband-thueringen.de/wp-content/uploads/2026/03/Flyer-Knau-2026.pdf)),
  die Stadt „e.V.“ ([PM 2025](https://www.neustadtanderorla.de/fileadmin/inhalte/2_Buergerservice/1_Aktuelles/2_Presseportal/Dokumente_Bilder/Pressemitteilungen_2025/20250819-3_PM_Tag_des_offenen_Denkmals_in_Neustadt_Orla.pdf)).
  Entscheidung: Duden (0023).
- **Kürzere Spalte:** Beim Wickelfalz sieht der Leser keine Nachbarspalte auf
  gleicher Höhe; sie wieder zu füllen hieße, Löcher zurückzuholen. Bleibt so.
- **9,5 pt:** verworfen, siehe oben.

## 7 · Übergabe und Gedächtnis

- Gespräche werden bei Überlänge automatisch zusammengefasst; Detail geht
  dabei verloren. Gedächtnis ist deshalb das Repo; neue Sitzungen beginnen bei
  `stand.md` → „Anschluss“.
- Regel gegen Wissen, das nur im Chat steht: `decisions/0024`.
