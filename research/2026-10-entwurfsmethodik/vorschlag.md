# Vorschlag: Fachpaket „Entwerfen“ — Entwurfsprozess und -methodik

**Status:** Vorschlag, wartet auf Antwort des Eigentümers · **Datum:** 2026-10-28
**Anlass:** Eigentümer im Chat: „Vielleicht braucht es hier auch einen Skill für
Entwurfsprozess und -methodik … bitte wieder inter- bzw. transdisziplinär gedacht.“
Rahmen: `decisions/0027` (top-down: Wissen und Regeln aus Erfahrung, Stand der Technik und
Best Practice; Experimente machen sie erfahrbar; Reverse Engineering als Werkzeug).

Alle Quellen unten sind **nicht belegt**, also Kandidaten aus Claudes Vorwissen. Ins Paket
kommen sie erst nach Prüfung mit Fundstelle (Skill `belegpflicht`) und als Eintrag in
`corpus/`. Vorhanden sind schon `gerstner-1964` und `hfg-archiv-ulm`.

## Idee in einem Satz

Entwerfen ist der Wechsel zwischen **Regel und Fall**. Top-down führt von der Regel zum Werk
(Programm, Raster, System). Reverse Engineering führt vom Werk zur Regel. Das Paket macht
beide Richtungen methodisch, prüfbar und für Mensch und Agent gleich lesbar.

## Gliederung (gleicher Aufbau wie „Form“ und „Vermitteln“)

| § | Inhalt |
|---|---|
| 0 | **Wahrnehmungssituation** als Einstieg, verweist auf `manifest.md` statt sie zu wiederholen |
| 1 | **Verweise des Eigentümers** zuerst: sein Erfahrungswissen, Schulen, eigener Prozess. Herkunft jeder Regel: *Erfahrung* · *Quelle* · *Experiment* |
| 2 | **Prozessmodelle im Vergleich**, keines als Pflicht (Kandidaten siehe unten) |
| 3 | **Methodenbaukasten** nach Modus: analysieren · rekonstruieren · programmieren · variieren · vergleichen · entscheiden · kritisieren · vermitteln, mit Verweis auf vorhandene Skills statt Wiederholung |
| 4 | **Reverse Engineering** als eigenes Modul: beschreiben → vermessen → Regel als Hypothese → Nachbau → Differenz messen → Regel bestätigen oder verwerfen → ins System. Am Flyer schon gelaufen (IDML-Nachbau) |
| 5 | **Inter- und transdisziplinär:** was Gestaltung von Nachbarfeldern übernimmt, siehe unten |
| 6 | **Stand der Technik** (datiert): Entwerfen mit KI-Assistenz |
| 7 | **Qualitätskriterien des Prozesses**, nicht des Werks: jede Entscheidung begründet und umkehrbar, Regel und Ausnahme benannt, Herkunft jeder Regel sichtbar |
| 8 | **Mittelmaß-Muster:** Prozess-Theater (Phasenmodell als Folie), Varianten ohne Kriterium, Moodboard statt Analyse, KI-Durchschnitt als Entwurf |
| 9 | **Rolle der KI:** Variation, Permutation, Vermessen, Nachbau, Dokumentation. Urteil und Bedeutung bleiben beim Menschen |

## Disziplinen und Kandidaten (*nicht belegt*)

| Feld | was es beiträgt | Kandidaten |
|---|---|---|
| Gestaltung, Schulen | Programm statt Einzellösung; Methodologie | Gerstner, *Programme entwerfen* (1964); HfG Ulm (Maldonado, Bonsiepe); Bauhaus-Vorkurs; Aicher |
| Kunst | Regel und Abweichung; Serie, Permutation | konkrete Kunst (vorhandener Skill `konkrete-kunst`) |
| Architektur | Muster, Entwurf als Gespräch mit der Situation | Alexander, *A Pattern Language* (1977); Schön, *The Reflective Practitioner* (1983); Lawson, *How Designers Think* |
| Planung, Systemtheorie | „bösartige“ Probleme; Argumentation dokumentieren | Rittel/Webber (1973), IBIS |
| Ingenieurwesen | Anforderungen, Funktionsstruktur, Lösungsraum | VDI 2221; Zwicky, morphologischer Kasten; TRIZ |
| Design Research | Designwissen als eigene Wissensform; Forschung durch Entwerfen | Design-Methods-Bewegung (Jones, Archer); Cross, *Designerly Ways of Knowing*; Dorst, *Frame Innovation*; Frayling (1993), Research through Design |
| HMI | menschzentrierter Prozess | ISO 9241-210 |
| Entscheidungslehre | Begründung festhalten | Design Rationale, QOC (MacLean u. a. 1991) |
| Wissenstheorie | Erfahrungswissen explizit machen | Polanyi, implizites Wissen (1966) |
| Reverse Engineering | vom Ergebnis zur Regel | Software- und Maschinenbau; Kopie als Lernpraxis der Kunstakademie; experimentelle Archäologie; Transkription in der Musik |
| transdisziplinär | Wissen von außerhalb der Fachwelt: Publikum, Auftraggeber, Nutzer | partizipative Gestaltung; Transdisziplinaritätsforschung |

## Hinweise und Risiken

- **Überschneidung:** Das Experiment „Entwurfsprozess“ (#23) behandelt die **Oberfläche**
  des Prozesses, das Paket die **Methode**. Das Paket verweist auf `kritik`,
  `konkrete-kunst`, `bildanalyse`, `bertin-semiologie` und `fachpaket-form`, statt sie zu
  wiederholen.
- **Abstraktion:** Ein Methodenkanon ohne Beispiel aus dem Labor bleibt Literatur. Hinweis:
  Jede Methode bekommt ein Beispiel aus dem Labor, sobald es eines gibt (der Flyer liefert
  schon eines für Reverse Engineering).
- **Aufwand:** Die Quellen zu belegen ist der größte Teil der Arbeit, etwa wie beim Korpus
  für „Vermitteln“.

## Fragen an den Eigentümer

1. Als **Fachpaket „Entwerfen“** im gewohnten Aufbau anlegen? Oder als schlanker Skill nur
   für den Prozess?
2. Welche **eigenen Verweise** (Personen, Schulen, eigener Ablauf) kommen zuerst?
3. Soll Reverse Engineering ein **eigener Skill** werden, den auch andere Pakete nutzen?
