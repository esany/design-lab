# Rechercheauftrag: Feldforschung Gestaltung × KI

**Datum:** 2026-10-27 · **Auftraggeber:** Eigentümer (Chat) · **Ausführung:** Agent
**Bedient:** `intent.md` A04 (Fachexpertise/Stand der Technik), A05 (Rolle der
KI je Kontext), A10 (nicht nachbauen), A01 (ganzer Entwurfsprozess)
**Position im Labor:** Schritt 0 vor den Fachpaketen.

## Auftrag (Prompt)

> Du recherchierst für ein persönliches Gestaltungslabor (siehe `intent.md`).
> Ziel ist nicht ein Überblick um seiner selbst willen, sondern **verwertbares
> Material für das Labor**.
>
> 1. **Konferenzen und Netzwerke:** Was ist KIND (kind-lab.de)? Wer steht
>    dahinter, welche Themen, Formate, Ergebnisse? Welche vergleichbaren
>    Konferenzen/Netzwerke zu KI und Gestaltung gibt es im deutschsprachigen
>    Raum?
> 2. **Hochschulen:** Woran experimentieren progressive Gestaltungs- und
>    Kunsthochschulen aktuell mit KI? Mindestens: UdK Berlin, FH Potsdam,
>    Burg Giebichenstein Halle, Ulm (HfG-Tradition: HfG-Archiv Ulm, HfG
>    Schwäbisch Gmünd), HfG Karlsruhe, HfG Offenbach, KISD Köln,
>    Bauhaus-Universität Weimar, ZHdK Zürich — weitere, wenn progressiv und
>    belegt.
> 3. **Verwertbares:** Gibt es offene Projekte, Repositories, Skills,
>    Werkzeuge, Datensätze, Lehrmaterialien, Leitfäden oder Learnings, die das
>    Labor direkt nutzen, entlehnen oder übertragen kann? Lizenz und
>    Zugänglichkeit angeben.
> 4. **Maschinenraum:** Welches KI-Tooling, welche Wissensbasis und welcher
>    maschinenlesbare Kontext (Strukturen, Schemata, Skripte) hat das Labor —
>    und was braucht ein Agent, um fachlich gut zu arbeiten?
> 5. **Einordnung:** Was lernen wir? Was fließt konzeptionell ein? Was kann
>    sofort als entwicklungsreifer Entwurf ausgearbeitet werden? Was wird als
>    Konzeptskizze vorgemerkt?
>
> **Regeln:** Skill `belegpflicht` — jede Aussage über die Welt mit Quelle und
> Status (belegt · abgeleitet · nicht belegt). Nichts aus dem Gedächtnis als
> Fakt. Lücken offen benennen. Keine Werbetexte nacherzählen; auf
> Substanz (Projekt, Repo, Methode, Ergebnis) achten.

## Annahmen

- „Ulm“ wird als HfG-Ulm-Tradition gelesen: Die HfG Ulm ist seit 1968
  geschlossen; heute relevant sind das HfG-Archiv Ulm und die HfG Schwäbisch
  Gmünd. *(Annahme des Agenten, zu bestätigen.)*
- Fokus deutschsprachiger Raum; internationale Quellen nur, wo sie für das
  Labor direkt verwertbar sind.

## Ausgabe

- `befunde.md` — Befunde mit Quellen und Status
- `einordnung.md` — Learnings, Konzept, entwicklungsreife Entwürfe,
  Konzeptskizzen, Maschinenraum
- entwicklungsreife Entwürfe zusätzlich als GitHub-Issues (Vorlage
  „Anforderung“), damit jeder Agent sie aufgreifen kann
