---
dient: A04, A05, A08, A23, A33
datum: 2026-11-08
modell: Claude Opus 5.5 (Claude-App, Cloud-Sitzung)
status: Konzeptstand, vom Eigentümer am 08.11. zur Ablage freigegeben (arbeitsweise-f32). Keine Entscheidung im Sinne von `decisions/`; die beiden Vorschläge unten sind keine Regeln.
---

# Konzeptstand 08.11.: Leitfaden, Fachpakete und wie Wissen entsteht

Diese Seite hält den aktuellen Stand fest. Ältere Konzepte bleiben stehen; wo sie abweichen, tragen
sie den Vermerk „überholt durch Konzeptstand 08.11.“. Die Antworten des Eigentümers stehen im
Wortlaut in `daten/arbeitsweise.json` (f16, f28–f32) und werden hier nicht wiederholt.

## Frage

Soll der Leitfaden die Ansicht des Fachpakets „KI als Werkzeug“ werden (f16)? **Nein.**

## Stand

1. **Zwei Ebenen, beide gelten** (f28):
   - **Inhalt:** Der Leitfaden versteht sich als übergeordnete Fachlichkeit: Entwurfsarbeit. Die KI
     ist darin ein Werkzeug unter mehreren, nicht das Zentrum (f16, f22, f24).
   - **Erkenntnisort:** Leitfaden und Fachpaket sind getrennte Orte, keiner ist die Ansicht des
     anderen (f29). Im Leitfaden gewinnt der Gestalter Erkenntnis: Orientierung, Verstehen, dem
     Wachsen zusehen (f25). Im Fachpaket wird Wissen für die Arbeit der Modelle angewendet (0021).
     Das ist keine Frage des Formats.
2. **Keine festen Wege** (f30): Welcher Ort wie befüllt wird, ist von Fall zu Fall verschieden. Es
   gibt kein Fließband zwischen Leitfaden und Fachpaket und keinen festen Auslöser.
3. **Woher Wissen kommt** (f30, f31): Es entsteht zuerst im Chat, als Nebenprodukt von Projekten,
   Fundstücken, Recherchen, Diskussionen und der Arbeit mit dem und am Labor.
4. **Wer was tut** (f31): Der Eigentümer gibt Themen frei, also ob etwas bleiben soll. Den Ort
   schlägt die KI vor und legt ab. Das passt zum Intent: Der Eigentümer arbeitet an Ziel, Bedeutung
   und Urteil (`intent.md`).

## Vorschläge (keine Regeln, nicht beschlossen)

- **Fester Moment am Chatende:** Die KI fragt: „Das ist nebenbei entstanden, soll es bleiben?“ Anlass:
  Die Leitfaden-Arbeit lag drei Fassungen lang in einem privaten Dokument, und nichts bemerkte es
  (Bericht zu #143, Ursache 4; *belegt*).
- **Prüfung auf Dopplungen:** Wenn die KI den Ort allein wählt, kann dasselbe an zwei Orten landen,
  wie „Sperre statt Satz“ heute in drei Fassungen (`fachpaket-ki-werkzeug.md`, Befund; *belegt*).
  Eine Prüfung meldet das, nicht der Eigentümer. Sie gibt es noch nicht.

## Was dadurch überholt ist

- `fachpaket-ki-werkzeug.md`: „Rollen der Orte“ (Leitfaden als Ansicht) und „Schwelle“ (feste
  Stufenfolge, Stufe 3 „Eintrag im Fachpaket, sichtbar im Leitfaden“). Der übrige Inhalt bleibt
  als Bestand brauchbar.
- Merkzettel Arbeitsweise, Strang „KI-Fachpaket“: die Abhängigkeit „als Ansicht?“.
- *Nachtrag 08.11.:* `konzept.md`, Abschnitt 2 (Leitfaden und Fachpaket nur nach Leser), Abschnitt 5
  (Familie von Leitfäden mit festen Bereichen; weiter gültig: „Grenze des Labors“) und Abschnitt 7,
  Schritte 1 und 3.
- *Nachtrag 08.11.:* Merkzettel, „Entschieden“: „Mehrere Leitfäden je Thema“ war ein „vielleicht“.
- *Nachtrag 08.11.:* `decisions/0032`: der Gegenstand („Mit KI arbeiten“, KI im Zentrum); Vermerk im
  Kopf der Entscheidung.

**Nicht berührt, weiter offen:** f26 (Minimalform des Leitfadens), der Name des Leitfadens in 0032,
ein oder mehrere Leitfäden (Bericht zu #143, A1), das Fachpaket „Entwerfen“ (Merkzettel Wissen,
Frage 3). *Berichtigt am 08.11.:* Der Gegenstand ist nicht offen, er folgt aus Stand 1.

## Befund: parallele Entwurfsrichtungen (Nachtrag 08.11., *abgeleitet*)

These des Eigentümers (f37): vorgesorgt war, aber parallele Entwurfsrichtungen mit Schnittmengen
haben den Prozess nicht ausreichend unterstützt und gesteuert.

- **Vorgesorgt war** (*belegt*): Merkzettel je Thema, Regel „Kein Wissen nur im Chat“ (0024), Fragen
  mit Antworten im Wortlaut (`daten/`), die Beobachtung vom 06.11., dass parallele Chats am selben
  Thema kollidieren (Aussage a25 in der Leitfaden-Sicherung).
- **Gebrochen ist es so** (*belegt*): Das Konzept zum KI-Fachpaket wurde am 07.11. um 08:15 Uhr
  übernommen (#142), die Leitfaden-Sicherung kam elf Minuten später ins Repo (#143). Bis dahin stand
  „Ki steht nicht im Zentrum“ (f24, 06.11.) nur im Nebenchat und einem privaten Dokument; das
  Fachpaket-Konzept schlug das Gegenteil vor. Die Reihenfolge der Stränge wurde erst danach
  festgelegt (#145). Der Auftrag, je Aufgabe festzuhalten, was sie berührt, wurde nie gesendet
  (`leitfaden-wachsend.md`, Abschnitt 5).
- **Kern:** Git meldete den Konflikt in den Dateien, und er wurde gelöst. Den Konflikt in der
  Bedeutung sah keine Prüfung. Parallelität war nicht das Problem, sondern unsichtbare
  Schnittmengen und kein geplantes Zusammenführen.
- **Stand der Technik** (gesichtet, nicht im Korpus): mengenbasiertes Entwerfen nach Toyota
  (Sobek, Ward, Liker 1999: parallele Alternativen, Zusammenführen an Schnittmengen, Festlegen erst
  bei erwiesener Machbarkeit); Design Structure Matrix (Steward; Eppinger: Abhängigkeiten zeigen,
  wo Abstimmung nötig ist); Mehrere KIs an einem Repo (2026): isolierte Arbeitskopien verschieben
  Konflikte ins Zusammenführen, neuere Ansätze melden sie beim Schreiben (STORM, arXiv 2605.20563;
  ICML-Position 2026 zu Concurrency Control).
- **Vorschläge, nicht beschlossen:** Jede Entwurfsrichtung hält fest, welche Fragen und Konzepte sie
  berührt, und eine erzeugte Übersicht zeigt Schnittmengen; laufen Richtungen parallel, wird ein
  Moment des Zusammenführens geplant, an dem die KI den Konzeptstand schreibt und der Eigentümer
  urteilt.

## Warten auf das Ja des Eigentümers (Nachtrag 08.11.)

- Sein Satz (f35) über das Labor als systemisch-methodisches Werkzeug, dessen Prinzipien seinem
  eigenen Entwurfsprozess zugrunde liegen, und die Experimente als Prüfung, im Wortlaut in
  `intent.md`.
- Zwei Keime für den Leitfaden: „Trenne Fragen nach Ebene, bevor du Positionen abwägst“ und „Halte
  einen aktuellen Konzeptstand; ältere Stände tragen ‚überholt durch‘“ (Bezug IBIS).
- Eine Beobachtung, einmal gemacht: Die KI legt Widersprüche gleichrangig vor, statt zuerst die eine
  Frage zum Entscheiden zu zeigen, verkürzt Bedeutung auf Struktur und übergeht den Wunsch nach
  Namen statt Nummern (f36).
- Die beiden Vorschläge aus dem Befund oben.

## Datenformat des Leitfadens: was sich ändern müsste (nur genannt, nicht gebaut)

Heute (`tools/build.mjs`, Abschnitt Leitfaden; `leitfaden/eintraege.json`): Pflichtfelder `id`,
`bereich`, `status`, `regel`, `kurz`, `warum`, `beleg`, `quellen`, `labor`, `seit`, `geprueft`;
Status `gilt` · `umstritten` · `veraltet`; jeder Eintrag wird veröffentlicht und nach Bereich
gruppiert. Für den Stand oben und die Minimalform (f26) müsste sich ändern (*abgeleitet*):

1. **Status „Keim“:** neuer Status vor „gilt“; Keime werden nicht als geltende Regel gezeigt
   (eigene Ansicht oder sichtbar markiert). Zu klären: Verhältnis zu `beleg` (belegt · abgeleitet)
   und Name „veraltet“ gegenüber „überholt“.
2. **Freie Tags statt Bereich:** Feld `tags` (Liste, frei); `bereich` nicht mehr Pflicht. Die Seite
   gruppiert nicht mehr nach Bereich, sondern filtert nach Tags (Mehrfachauswahl, Trefferzahl,
   Auswahl in der Adresse; `leitfaden-wachsend.md`, Abschnitt 2b). Der Bereich „Überholt“ wird zum
   Status.
3. **Relationen:** Feld `relationen` mit `art` (verwandt · folgt aus · widerspricht) und `ziel`
   (Kennung); der Build prüft, dass das Ziel existiert und die Art erlaubt ist.
4. **Begriff:** Feld `begriff` für den Fachbegriff (Pattern-Name), mit Quelle.
5. **Laborbelege:** `labor` nicht mehr Pflicht; Belege aus der eigenen Arbeit wandern in `daten/`
   und verweisen auf die Kennung des Eintrags (f19). Bekannte Anwendungen aus der Literatur in
   `quellen`.
6. **Quellen bei Keimen:** Heute muss jede Quelle im Korpus stehen. Keime brauchen entweder eine
   Aufnahme in den Korpus mit Lesestand oder dürfen bis „gilt“ ohne geprüfte Quelle sein.
7. **Erzeugte Ansichten zum Wachsen:** Netz aus Tags, Einträgen und Relationen; Verlauf, wann was
   dazukam (aus `seit` und `aenderungen`); Hinweise der KI auf ähnliche Tags, isolierte Einträge,
   Keime ohne Quelle.
8. **Titel:** `titel` und Kommentar im Build sagen „Mit KI arbeiten“; ändert sich erst mit dem Namen.

## Was wir gelernt haben (*abgeleitet*)

- **Scheinbare Widersprüche waren oft vermischte Ebenen.** Ein Konzept sprach über den Inhalt, ein
  anderes über den Erkenntnisort; nebeneinander lasen sie sich wie Konkurrenz. In der Entwurfs-
  begründung nach IBIS (Kunz, Rittel 1970) wären das zwei Fragen mit je eigener Antwort gewesen.
- **Konzeptstände brauchen einen Ort.** Für Entscheidungen gibt es `decisions/`, für den laufenden
  Konzeptstand zwischen Chats gab es keinen. Drei Konzepte standen gleichrangig in `research/`, und
  jeder neue Chat hielt alle für gültig. Ältere Stände tragen deshalb „überholt durch …“.
- **Die KI hat die Verwirrung verstärkt:** Sie legte sieben Widersprüche gleichrangig vor, statt
  zuerst die eine Frage zu zeigen, die der Eigentümer zum Entscheiden verstehen muss, und sie
  verkürzte „Erkenntnisort“ zuerst auf eine Formfrage. Das ist das schon beschriebene Muster der
  größeren Lesart und der glatten Verdichtung (`experiments/2026-10-entwurfsprozess.md`,
  Beobachtung 05.11.).

## Nicht geprüft

- Die Datierung „gedacht vor abgelegt“ ist nur so weit belegt, wie das Repo reicht. Ob der
  Leitfaden vor dem 05.11. schon in einem Chat oder Laborexperiment gedacht war, zeigt das Repo
  nicht (Eigentümer, 08.11.: „Der Leitfaden war doch schon teil der labexperimente“).
- IBIS ist nur über Sekundärquellen gesichtet (Wikipedia, eight2late.com) und nicht im Korpus.
