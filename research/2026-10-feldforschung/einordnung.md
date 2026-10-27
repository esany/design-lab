# Einordnung: Was das Labor aus der Feldforschung macht

Grundlage: [`befunde.md`](befunde.md). Maßstab: [`intent.md`](../../intent.md).

## 1. Maschinenraum — was ein Agent für gute Facharbeit braucht

Ja: Ohne gut strukturierten, maschinenlesbaren Kontext liefert ein Agent das
Wahrscheinliche — also Mittelmaß. Fachqualität entsteht aus **kuratiertem
Wissen + Kriterien + Werkzeugvorlagen + Daten + Prüffällen**.

| Baustein | Vorhanden | Fehlt | Bedient |
|---|---|---|---|
| Arbeitsvertrag, Maßstab, Prinzipien | `AGENTS.md`, `intent.md`, `principles.md` | — | A17–A22 |
| Gedächtnis und Steuerung | `stand.md`, `decisions/`, Git-Historie | — | A19, A26 |
| Methoden-Wissen | 5 Methoden-Skills (Text) | **Fachpakete**: Kanon, Best Practice, Stand der Technik, Kriterien, Rolle der KI, Werkzeugkette — je Feld | A04, A05 |
| Wissensbasis | `corpus/` (leer) | **Quellen als Daten** (Titel, Autor, Jahr, Link, Lizenz, Feld, Status) — prüfbar, durchsuchbar | A07, A04 |
| Werkzeugvorlagen | einfache Studien-Vorlage | **Starter je Profi-Werkzeug** (Observable Plot/D3, Typst, Motion Canvas, p5.js + Generative Gestaltung) | A03 |
| Daten-Zugänge | — | Abrufskripte für offene Daten und Sammlungen (Wikidata, Museums-APIs, Statistik) | A01, A07 |
| Prüfung | Build, Rendern, Links (CI) | **Prüffälle** (`evals/`), fachliche Kriterien je Fachpaket | A07, A11 |
| Anbindungen | Miro, Websuche, Browser, Cloud-Agent | Zotero, Blender, Penpot (brauchen Ihre Konten/Ihren Rechner) | A09 |
| Fertige Skills | Design-Skills (Kritik, Accessibility, UX) im Konto verfügbar | nicht mit den Lab-Methoden verknüpft | A10 |

## 2. Learnings

1. **KI hat im Labor vier Rollen** — abgeleitet aus KINDLAB („Material“),
   UdK („gemeinsam, was keiner allein kann“) und re:shape („designing with
   uncertainty“). Das wird der Rahmen für A05:

   | Rolle | Die KI … | Mensch |
   |---|---|---|
   | **Werkzeug** | führt aus: Code, Satz, Varianten | spezifiziert, wählt |
   | **Material** | wird selbst Gegenstand: latente Räume, Fehler, Bias als Gestaltungsstoff | erforscht, deutet |
   | **Gegenüber** | widerspricht, kritisiert, zeigt die Negativfolie | urteilt |
   | **Infrastruktur** | recherchiert, belegt, pflegt, prüft | kuratiert |

2. **„Verlernen“ als Methode.** Vor jedem Fachpaket: Welche Annahmen über KI
   in diesem Feld sind falsch? (KINDLAB)
3. **Stabile offene Bausteine statt Hochschul-Repos.** Generative Gestaltung
   (Apache-2.0), VIKUS Viewer, ml5.js, p5.js sind direkt nutzbar.
4. **Wissen übertragen, nicht abhängig werden** — Projekte enden, Labore
   schließen. Quellen ins eigene Korpus, nicht nur Links.
5. **Community als Rhythmus.** re:shape, Correlations, Hidden Layers,
   TRANSFORM gehören ins Radar — als Beobachtung, nicht als Werkzeug.

## 3. Konzeptionell einfließen lassen

| Was | Wohin | Status |
|---|---|---|
| Vier Rollen der KI | Fachpaket-Vorlage (Pflichtabschnitt „Rolle der KI“) | umgesetzt in Entwurf E2 |
| „Verlernen“-Frage je Feld | Fachpaket-Vorlage | umgesetzt in Entwurf E2 |
| Radar-Abschnitt „Feld: Hochschulen und Konferenzen“ | `radar.md`, Radar-Scan | umgesetzt (Funde unter „Neu — zu bewerten“) |
| Leitfrage „Was können wir gemeinsam, was keiner allein kann?“ | Experiment-Vorlage | vorgemerkt |

## 4. Entwicklungsreife Entwürfe (als Issues angelegt)

| Nr. | Entwurf | Bedient | Abnahme |
|---|---|---|---|
| **E1** | **Korpus als Daten:** Schema (YAML), Prüfung im Build, erste ~15 Quellen aus dieser Recherche | A04, A07 | Build prüft Pflichtfelder und Links; jede Quelle hat Lizenz und Feld |
| **E2** | **Fachpaket-Vorlage + Fachpaket „Vermitteln“ v1** (Diagrammatik, Informationsdesign, Infovis, Wissensvermittlung) | A01, A04, A05 | Kanon, Best Practice, Stand der Technik, Kriterien, Mittelmaß-Muster, Rolle der KI, Werkzeugkette — alles belegt |
| **E3** | **Werkzeug-Starter „Vermitteln“ + erstes Werk:** Observable Plot/D3 mit echten offenen Daten, Erklärung in Stufen, Prüfung nach Bertin | A01, A03, A06, A08 | Werk rendert fehlerfrei, Kritik durch zweiten Durchgang, Datenquelle belegt |
| **E4** | **Generative Gestaltung als Referenzbibliothek** für das Fachpaket „Ordnung“ (Verweis + Lizenzhinweis, kein Kopieren des Buchs) | A03, A10 | Index der Prinzipien mit Links in den Code |

## 5. Konzeptskizzen (vorgemerkt)

| Nr. | Skizze | Fachpaket |
|---|---|---|
| S1 | Eigene Bildsammlung im VIKUS Viewer — Bildwissenschaft am Material | Erkennen |
| S2 | „KI als Material“: Studie zu latenten Räumen mit ml5.js oder Colab | Ordnung / Erkennen |
| S3 | Daten „off the screen“: physikalisierte Datenvermittlung für Ausstellung | Raum und Zeit |
| S4 | Mensch–Maschine-Kollaboration als Experimentformat (UdK-Leitfrage) | übergreifend |
| S5 | „un/learn ai“-Bände als Korpus-Grundlage für die Rolle der KI | übergreifend |

## Offen

- Ob „Ulm“ wirklich HfG-Tradition meint (Annahme).
- Weitere Häuser (Offenbach eigenständig, ZHdK, Weimar, international: RCA,
  Design Academy Eindhoven, MIT Media Lab) — zweiter Durchgang bei Bedarf.
