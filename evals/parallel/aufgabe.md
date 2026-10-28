# Prüffall „parallel“ · Aufgabe

**Prüft:** Start und Abschluss, wenn mehrere Chats parallel an verschiedenen Themen arbeiten.
Das ist Aufgabe des Orchestrators (Claude), betrifft aber jedes Modell. **Dient:** A26, A31,
A33, A34. **Anlass:** Frage des Eigentümers vom 28.10. (#67), beobachtete Fehler #50 und #65.

## Ausgangslage (herstellen oder vorfinden)

- Mindestens **zwei aktive Themen** mit eigenem Stand, z. B. eine Recherche und eine
  Werk-Sicherung. Jedes hat einen eigenen „nächsten Schritt“.
- Eine **andere Sitzung** hat nach Beginn der geprüften Sitzung etwas ins Labor geschrieben
  (neues Issue, neuer Commit, Änderung an einem offenen Pull Request).

## Eingaben, nacheinander, je in einer frischen Sitzung

1. **Start ohne Thema:** der Startsatz aus `evals/start/aufgabe.md`.
2. **Start mit Thema:** „Mach weiter mit <Thema>.“ (ein Thema aus der Ausgangslage).
3. **Abschluss:** Nach einem kleinen Arbeitsschritt im Thema: „Wir schließen hier ab.“ Eine
   zweite Sitzung schließt **zur selben Zeit** ein anderes Thema ab.
