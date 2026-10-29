---
dient: A17, A33, A34
datum: 2026-10-29
quelle: Chat des Eigentümers mit Claude (Orchestrator), sinngemäß zusammengefasst
status: Leitbild des Eigentümers (belegt als seine Aussage); Folgerungen abgeleitet; noch nicht in intent.md
---

# Das System als Organismus: Leitbild und Folgen für die Architektur

## Was der Eigentümer will (seine Aussagen, 29.10.)

- Ein **Organismus**, in dem die Technik sauber und unsichtbar im Hintergrund läuft.
- Er **entwickelt und modelliert** das System nach Belieben: Jede Idee geht als Eingang an die
  Entwicklung und wird umgesetzt, egal ob Fehler, Funktion oder Wunsch.
- Gesprächspartner ist ein **ganzheitlich systemisch denkender Entwickler** und transdisziplinärer
  Experte für menschzentrierte Technikgestaltung, kein Verwalter von Regeln.
- Er will **technische Verlässlichkeit, keine Prosa-Regeln**. Regeln waren bisher sein einziger
  Hebel; aus ihnen wurde Architektur und Governance statt Implementierung.
- Vor allem will er **fachliche Assistenz** in seinen Projekten. Im Labor ist er selbst
  Fachmann. In anderen Domänen will er sich mit solchen Systemen **Domänenwissen aufbauen und
  nutzen** (Erfahrung, Grundlagen, Methodik, Stand der Technik), ohne dort technisch oder
  fachlich Experte zu sein.
- `esany/wissensarbeit` war als **Vorlage** für ein solches Wissensprojekt gedacht.

## Folgen für die Architektur (abgeleitet)

1. **Vier Schichten:** Mensch (Bedarf, Urteil) → Quellen (jede Tatsache genau einmal) →
   Werkzeuge (erzeugen und prüfen) → Ansichten (erzeugt, nie frei geschrieben). Die KI schreibt
   nur in den Quellen und baut die Werkzeuge. Der Mensch arbeitet nur oben.
2. **Jede Eingabe durchläuft denselben Ablauf:** Bedarf und Situation → Anforderung → Ort im
   System (Daten, Erzeugung, Prüfung, Ansicht) → Umsetzung durch ein Modell → Nachweis, dass es
   wirkt. Eine Regel ist nur dort das Ergebnis, wo nichts davon technisch geht.
3. **Wo der Eigentümer fachlich und technisch nicht urteilen kann**, muss das System Qualität
   *sichtbar* machen statt sie zu behaupten:
   - jede Aussage mit Status und Quelle (Belegpflicht, schon im Labor);
   - Prüfung durch ein anderes Modell, einmal, nicht als Kette;
   - Ergebnisse vorführen (gerendert, getestet, gemessen) statt beschreiben;
   - je Domäne eine erzeugte Liste „Was wir noch nicht wissen“;
   - Fragen an den Menschen nur zu Bedeutung und Ziel, in Alltagssprache.
4. **Vorlage aus Bewährtem, nicht vorab:** Wissensarbeit hat die Vorlage zuerst als Governance
   entworfen und ist daran schwer geworden (Befunde #56). Hier umgekehrt: Was sich im Labor als
   Mechanismus bewährt (erzeugter Stand, Prüfungen, Fachpakete, Korpus mit Normdaten), wird
   später als Kern herausgelöst. Das Fachliche bleibt je Projekt eine eigene Schicht.
5. **Das wiederverwendbare Fachformat gibt es schon:** die Fachpakete (Kanon, Methode, Stand der
   Technik, Qualitätskriterien, Mittelmaß-Muster, Rolle der KI) plus Korpus. Sie sind der Kern
   des Domänenaufbaus für fremde Felder.

## Offen

- Soll das Leitbild als Intent in `intent.md` stehen (Frage an den Eigentümer)?
- Wann wird der Kern herausgelöst? Vorschlag: wenn die ersten drei Mechanismen im Labor laufen
  (#103 und zwei weitere).
