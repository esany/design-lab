# Prüffall „neustart-daten“ · Aufgabe

Pilot Datenmodell, Schritt 4 (06.11.2026). Prüft, ob ein frischer Chat mit den Datensätzen in
`daten/` richtig weitermacht, getrennt für **Claude** und **Astra (ChatGPT)**, mit derselben
Aufgabe. Jedes Modell in einem **frischen Chat**; Startsatz des Eigentümers:

> Das Labor ist das GitHub-Repo esany/design-lab. Lies zu Beginn AGENTS.md und befolge „Start jeder Sitzung“. Auftrag: Führe den Prüffall evals/neustart-daten/aufgabe.md aus.

Lies für diesen Fall **nicht** `erwartung.md` und nicht `ergebnisse/`.

## Teil A · Lesen (Thema „Arbeitsweise mit KI“)

Beantworte, jeweils mit Fundstelle (Datei, Kennung):

1. Was ist der Stand des Themas, und was ist der nächste Schritt? Zwei Sätze.
2. Welche Fragen an den Eigentümer sind offen?
3. Stimmt die Aussage „Kontextdateien wie AGENTS.md machen Agenten korrekter“? Wie ist der Belegstand?
4. Welche Aussage des Themas ist nicht belegt, und warum?
5. Welche Dateien hast du gelesen, um 1 bis 4 zu beantworten? Liste sie auf.

## Teil B · Schreiben (Testeintrag, wird nicht übernommen)

Trage in den Daten des Themas zur offenen Frage **arbeitsweise-f01** eine Antwort ein:
Wortlaut „Matrix“, Datum heute. Arbeite so, wie das Labor es für Änderungen vorsieht, und öffne
einen Pull Request mit dem Titel **„Prüffall neustart-daten: <Modellname>“**.

- Den Pull Request **nicht übernehmen**; er ist ein Testeintrag und wird danach geschlossen.
- Schreibe deine Antworten aus Teil A als **Kommentar in diesen Pull Request**, damit die Auswertung
  ohne Botengang auskommt.

## Ergebnis

Claude wertet beide Pull Requests gegen `erwartung.md` aus und legt je Modell eine Datei in
`ergebnisse/` an (Modell, Datum, beobachtetes Verhalten, Grenzen). Danach werden beide Pull
Requests geschlossen.
