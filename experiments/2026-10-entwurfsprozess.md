---
title: Entwurfsprozess mit KI-Assistenz — sichtbar, steuerbar, anschlussfähig
date: 2026-10-28
status: läuft
timebox: bis Ende November 2026 (gemeinsam mit „Labor-Aufbau“ auswerten)
---

# Entwurfsprozess mit KI-Assistenz

**Anlass:** Am Flyer (`experiments/2026-10-print-pagedjs/`) wurde aus einem
Werkzeugtest ein vollständiger Entwurfsprozess: Analyse, Nachbau, Runden,
Messen, Entscheiden, Freigeben, Lernen. Untersucht wird jetzt dieser Prozess
selbst: Wie wird er für den Menschen sichtbar und steuerbar, und wie bleibt er
über Sitzungen, Agenten und Werkzeuge hinweg anschlussfähig?

**Hypothese:** Wenn jeder Entwurf in Runden geführt wird, und zwar mit
Wahrnehmungssituation, Befund, Änderung, Messung und Entscheidung, sichtbar in
einer Oberfläche, die aus den Dateien des Labors liest und in sie schreibt,
dann kann der Mensch gestalten und urteilen, ohne Technik zu bedienen. Das Werk
wird nachvollziehbar und umkehrbar, und das Labor lernt aus jedem Werk.

## Der beobachtete Prozess (am Flyer)

```
Eingang (IDML, PDF, Schriften)
→ Wahrnehmungssituation (Medium, Publikum, Abstand, Licht)
→ Befund am Original (Raster, Satz, Farbe, Brüche)
→ Nachbau oder Entwurf
→ Runden mit Varianten (1 Ersatzschrift · 2 Originalschrift · 3 Feinsatz · 4 lesbar)
→ messen, vergleichen
→ Fragen an den Menschen → Entscheidung, Freigabe
→ Ausgabe (Druck-PDF)
→ Lernen: Was wandert ins System (Regel 0023, feinsatz.js, Fachpaket, A28–A30)?
```

Zwei Spuren laufen parallel: das **Werk** (Flyer) und das **System** (Regeln,
Werkzeuge, Fachpakete). Das entspricht Prinzip 9.

## Ideensammlung: Bausteine einer Oberfläche

| Baustein | Inhalt |
|---|---|
| A Werkbank je Werk | Status, Medium, nächste offene Frage; Wahrnehmungskarte (belegt oder Annahme) immer oben |
| B Laborbuch | Runden als Zeitleiste: Hypothese, Änderung, Messung, Entscheidung, Rückgängig-Satz; jede Fassung abrufbar |
| C Vergleichsansicht | nebeneinander, Überlagerung mit Schieber, Differenz, Blinkvergleich; Ebenen für Satzspiegel, Spalten, Grundlinien, Offset, Brüche, Abweichungen; Messwerte im Bild verortet |
| D Regelpult | Raster- und Satzregeln als Felder mit Herkunft (Quelle oder Entscheidung); Änderung ergibt neue Variante (A29) |
| E Wahrnehmungssimulator | Ansicht aus 40 cm, 1,5 m, bei Dämmerlicht; Sehwinkel an Stellen (Näherung, kein Probedruck-Ersatz) |
| F Messtafel | Kennzahl, Richtwert, Quelle, Prüfstatus — ohne Ampel |
| G Entscheidungsleiste | höchstens vier Fragen in Alltagssprache mit Optionen, Empfehlung, Risiko; Antwort wird Freigabe oder Entscheidung im Repo |
| H Ins System übernommen | was aus dem Werk zu Regel, Werkzeug, Fachpaket, Anforderung wurde |
| I Ausgaben | Druck-PDF, Probedruck mit Raster, Quellpaket, Bericht |
| J Gestufte Offenlegung | 1 Bild und Frage · 2 Messwerte und Begründung · 3 Quellen, Code, PR |

## Analyse (*abgeleitet*, noch nicht recherchiert)

- **Ort:** Werke enthalten oft fremde Inhalte, also private Oberfläche. Die
  öffentliche Website zeigt System und Methode. Miro (vorhandenes Abo) eignet
  sich als freie Laborwand, nicht für messbare Vergleiche. Eine eigene App
  wäre Überbau.
- **Wahrheit:** Die Dateien sind die Wahrheit; die Oberfläche liest und
  schreibt sie, sonst laufen zwei Stände auseinander.
- **Rollen:** Der Agent rechnet, misst und legt ab. Der Mensch entscheidet
  und justiert; Ziehen mit der Maus bleibt Sache von Scribus oder InDesign.
- **Reihenfolge nach Nutzen:** C, B, G zuerst; D mit dem Raster-Piloten;
  E als Pilot.
- **Vorbilder** prüfen, bevor gebaut wird (Skill `fundstueck`, A10):
  Bildvergleichs-Werkzeuge aus der Software-Prüfung, Notebooks, Versionsverläufe
  in Design-Werkzeugen.
- **Widerspruch:** Eine Oberfläche ist System. Sie lohnt sich erst, wenn sie
  an einem zweiten Werk trägt.

## Anschlussfähigkeit (Teil des Experiments)

- Gedächtnis ist das Repo, nicht der Chat. Gespräche werden bei Überlänge
  automatisch zusammengefasst, und dabei geht Detail verloren.
- Deshalb hält `stand.md` den Abschnitt „Anschluss“ aktuell: woran gearbeitet
  wird, wo Dateien liegen, was offen ist. Jede neue Sitzung und jeder Agent
  beginnt dort (AGENTS.md wird automatisch geladen).
- Werkdateien mit fremden Inhalten gehören in ein privates Repo des
  Eigentümers (nächster Schritt).

**Erfolgskriterium:**
1. Ein zweites Werk durchläuft denselben Prozess.
2. Der Mensch findet Stand, Fassungen und offene Fragen ohne GitHub-Kenntnis.
3. Eine neue Sitzung kann ohne Nachfrage anschließen (Test: frische Sitzung
   liest nur das Repo und nennt den Stand richtig).

**Ergebnis:** —

**Urteil (Mensch):** —

**Folge:** —

## Beobachtung 05.11.: Symptome, Warum-Kette, Rückfluss ins Repo

Frage des Eigentümers: Welche Probleme erzeuge ich in der Arbeitsteilung mit der KI, welche
Ursachen haben sie, bin ich allein damit, und wie fließt Erkenntnis zurück ins Repo, ohne dass
„repo first“ zu starr wird?

**Symptome** (Fundstellen in Klammern):
1. Ob echte Strukturen entstehen, ist für den Gestalter nicht sichtbar (Chat 05.11.).
2. Auf Fehler folgt eine Regel, die leer bleibt (Chat 05.11.; 30 Entscheidungen in drei Tagen,
   Audit Zusammenarbeit).
3. Jede Antwort öffnet eine neue Baustelle. Am 05.11. wurden aus einem Fundstück ein Leitfaden,
   ein Radar-Konzept, eine Leitfaden-Familie, zwei Befunde und eine Prüfung in paleo-type.
4. Text wächst schneller als Werk: paleo-type 53 % der Bytes Verwaltung (Audit 30.10.), 136 171
   Zeichen in 23 offenen Issues; im Labor eine Studie.
5. Neustarts brauchen Rettung (Label `rettung-eigentümer` in paleo-type, Lesart-Fehler im Audit).

**Warum-Kette** (*abgeleitet* aus den Fundstellen):
1. *Warum sieht der Gestalter nicht, ob es trägt?* Fortschritt kommt als Text zurück (Bericht,
   Issue, Audit), nicht als etwas, das man ansehen oder ausprobieren kann.
2. *Warum Text?* Text ist für die KI das billigste Abschlusssignal, und die Regeln des Labors
   belohnen ihn: 0024 verlangt, jede Analyse, die mehr ist als eine kurze Rückfrage, im selben
   Schritt im Repo abzulegen. Eine Vorführung verlangt keine Regel.
3. *Warum antwortet der Gestalter mit Regeln und Audits?* Ihm fehlt das Urteilsinstrument. Er
   urteilt über Ansehen, also Skizze, Probe, Modell. Code und Datenmodell sprechen nicht zu ihm,
   also prüft er, was er lesen kann: Text.
4. *Warum helfen Regeln nicht?* Text wird nur „fast immer“ befolgt, kostet bei jedem Start
   Lesezeit und verdünnt die übrigen Regeln. Die KI stimmt neuen Regeln bereitwillig zu.
5. *Warum dreht es sich weiter?* Große, offene Fragen („ganzheitlich, systemisch, Stand der
   Technik“) löst die KI in die größere Lesart auf, und es gibt keinen Ort, an dem „genug“ an einem
   sichtbaren Ergebnis entschieden wird.

**Wurzel:** Im Entwurf antwortet das Material: Die Skizze zeigt, was nicht stimmt (Schön,
„reflective conversation with the materials“ [k:schoen-1992-ried]). In der Arbeit mit der KI
antwortet nur Text. Der Gestalter verliert sein wichtigstes Instrument und ersetzt es durch Regeln.

**Nicht allein** (*belegt*, Quellen im Chat vom 05.11.): Osmanis „70-%-Problem“ (Nicht-Ingenieure
kommen schnell weit, das letzte Drittel wird zäh); „Workslop“ (HBR/Stanford 2025: polierte
Arbeit ohne Substanz, die Last landet beim Empfänger); METR 2025 (Entwickler glaubten sich 20 %
schneller und waren 19 % langsamer: gefühlter Fortschritt ist kein Fortschritt).

**Rückfluss ins Repo, Vorschlag** (*abgeleitet*, Änderung an 0024 entscheidet der Eigentümer):
„Kein Wissensmonopol“ bleibt das Ziel; der Maßstab wechselt von „alles aufschreiben“ zu „ein
frischer Chat kann richtig weitermachen“.
- **Im Chat bleiben dürfen** Denkwege und Reifegrade 1–2 (gesammelt, geordnet).
- **Ins Repo muss**, was eine der drei tragenden Rollen hat: *entschieden* (Entscheidung),
  *ausgeführt* (Prüffall, Werk, Werkzeug), *erzeugt* (Ansicht aus Daten). Dazu Belege ab Reifegrad 3.
- **Am Sitzungsende** zwei Sätze Stand im Merkzettel, nicht mehr.
- **Geprüft** wird das am Neustart-Test, nicht an der Textmenge.

**Hypothese Reifegrade (Chat 05.11., nicht beschlossen, an der nächsten Entwurfsaufgabe erproben):**
Analyse: 1 gesammelt (Issue oder Chat) · 2 geordnet · 3 belegt (`research/`) · 4 verdichtet.
Synthese: 5 Möglichkeitsraum mit Negativfolie · 6 Konzept, Anforderung mit Prüffrage · 7 entschieden
(`decisions/`) · 8 Durchstich, Werk · 9 geprüft. Jeder Übergang ist ein Urteilspunkt des Menschen;
was aufsteigt, wandert an seinen Ort, im Issue bleibt nur ein Verweis. Die KI ist stark in 1–3 und in
5; ihre typische Schwäche ist die vorschnelle, glatte Verdichtung in 4.
