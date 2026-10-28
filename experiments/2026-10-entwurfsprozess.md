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
