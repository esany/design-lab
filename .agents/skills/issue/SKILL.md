---
name: issue
description: Use when writing, picking up, ordering, handing over, splitting or closing a GitHub issue in the lab, and whenever Claude orchestrates — decides whether an issue is this model's turn and ready, what blocks it, what "done" means, how outdated issues are closed or split, and how questions and bugs reach the owner in plain language.
dient: A20, A22, A26, A31, A32, A33, A34
---

# Issue-Arbeit

Ein Issue ist eine Aufgabe, kein Gespräch. Das Repo ist das Gedächtnis (`AGENTS.md`, Regel
0024); der Mensch ist kein Durchreicher. Was ein Issue nicht hergibt, steht nicht im Chat.

## A · Bin ich dran? (vor dem Anfassen, jedes Modell)

Alle Punkte müssen stimmen, sonst nicht anfangen:

1. **Auftrag:** Der Mensch hat das Issue in dieser Sitzung **ausdrücklich** genannt oder
   freigegeben („mach #n“). Ein Label allein ist kein Auftrag. Ein Zitat, eine Frage oder Ärger
   über etwas ist keine Freigabe.
2. **Label:** genau `an:<ich>`. Fremdes Label oder `an:mensch`: nicht anfassen.
3. **Nicht blockiert:** Alle Issues unter „Blockiert durch“ sind geschlossen. Das gilt für die
   GitHub-Verknüpfung und für das Feld im Text.
4. **Zugang:** Ich kann lesen **und** schreiben, was die Ausgabe verlangt. Wenn nicht: genau das
   sagen und den fertigen Text mit Zielpfad als **einen** Block in den Kommentar setzen.
5. **Abnahme prüfbar:** „Fertig, wenn“ besteht aus Ja-Nein-Sätzen. Fehlt das: eine Rückfrage im
   Kommentar, nicht raten.
6. **Passt zum Modell:** Fehlen mir Werkzeuge oder soll ich meine eigene Arbeit beurteilen,
   kommentiere ich den Grund in einem Satz. Umverteilen tut nur Claude.

## B · Ein Issue schreiben (Vorlage „Übergabe“)

- **Dient:** die Anforderung(en) aus `intent.md` (A01 …). Ohne Bezug kein Issue: Entweder es
  dient einer Anforderung, oder es ist eine Frage an den Menschen, ob eine neue nötig ist.
- **Ziel** in einem Satz, ohne Lösungsweg. **Zuerst lesen:** höchstens fünf Pfade.
  **Ausgabe:** Zielpfad, Branch `lab/<thema>`, ein Pull Request.
- **Fertig, wenn:** zwei bis fünf Ja-Nein-Sätze.
- **Blockiert durch:** im Text nennen **und** als GitHub-Abhängigkeit setzen. GitHub verknüpft
  nur Issues, keine Pull Requests; hängt etwas an einem Pull Request, nimm dessen Issue.
- Eine Aufgabe, ein Modell, ein Pull Request. Wird es mehr: Unter-Issues.

## C · Bearbeiten

1. Kurz spiegeln, was verstanden wurde und welche Annahme gilt.
2. Branch, Pull Request mit `Closes #n` und Anforderung, Zeile in `stand.md`.
3. Im Pull Request jede Zeile von „Fertig, wenn“ mit Ja, Nein oder „nicht geprüft“ und Beleg.
   Die eigene Arbeit erklärt kein Modell für bestanden.

## D · Übergeben oder zurückgeben

Kommentar `Übergabe:` mit **Ergebnis** · **Geprüft / nicht geprüft** · **Offen** (höchstens
drei Fragen). Eigenes Label entfernen, `an:claude` oder `an:mensch` setzen.

## E · Orchestrator (nur Claude)

### E1 · Abgleich statt Annahme
Vor jeder Liste zum Stand, jeder neuen Nummer (Entscheidung, Issue) und jedem Pull Request:
`git fetch` und Änderungen seit dem letzten Blick holen (Issues und PRs mit `since=`). Das sind
wenige Zeilen, keine ganzen Dateien. Aus dem Stand des Sitzungsbeginns wird nichts behauptet.

### E2 · Freigabe ist nicht Umsetzungsreife
`an:<Modell>` setzt Claude erst, wenn alles stimmt:
- Der Mensch hat die Aufgabe ausdrücklich freigegeben.
- Das Issue nennt die Anforderung, der es dient.
- Alle Abhängigkeiten sind geschlossen, oder das Issue bleibt `entwurf`.
- „Fertig, wenn“ ist prüfbar, der Kontext liegt im Repo.
- Entscheidungen, die die Aufgabe braucht, sind getroffen.
- Das Modell hat die nötigen Werkzeuge.

Fehlt etwas: `entwurf` lassen und das Fehlende im Issue nennen.

### E3 · Reihenfolge
Grundlagen vor Details: Erst kommt, wovon anderes abhängt. `stand.md`, Abschnitt
„Reihenfolge“, führt die nächsten Schritte mit Abhängigkeit und Begründung. Das ist ein
Vorschlag; der Mensch ordnet um. Eine laute neue Frage verdrängt nichts stillschweigend:
Entweder sie bekommt einen Platz in der Reihenfolge, oder sie wird ausdrücklich vorgezogen.

### E3a · Themen und Merkzettel (0029)
Jedes aktive Thema hat einen Merkzettel `anschluss/<thema>.md` und, wenn möglich, ein führendes
Issue. Beginnt ein neues Thema: Merkzettel anlegen, Zeile in `stand.md`, Abschnitt „Themen“.
Am Ende der Sitzung nur den eigenen Merkzettel fortschreiben, oben in Worten, Nummern
eingeklappt darunter. Ist ein Thema abgeschlossen, kommt der Merkzettel nach `anschluss/archiv/`.

### E4 · Lebenszyklus (Tokenökonomie)
- **Überholt** (Ziel erledigt, verworfen oder von einem neuen Stand eingeholt): schließen mit
  einem Satz „ersetzt durch #n“ oder „nicht verfolgt, weil …“.
- **Gewachsen** (mehrere Themen, langer Verlauf): schließen und in neue Issues aufteilen. Jedes
  neue verweist auf das alte, das alte nennt die neuen. Der Kontext steht im neuen Issue, nicht
  im Verlauf des alten.
- Ein Pull Request mit mehreren Entscheidungen wird geteilt (Schreibregel 1).
- Die Pflege sucht monatlich offene Issues ohne Bewegung und schlägt Schließen oder Teilen vor.

### E5 · Befunde von außen (Audit, Review, Kritik)
Sichern → nachprüfen → Fragen an den Menschen → erst nach seiner Antwort Issues verteilen. Bis
dahin tragen neue Issues `entwurf`.

### E6 · Fragen an den Menschen
Jede Frage nennt, **was sich ändert**, **warum** und **was passiert, wenn man es lässt**, dazu
eine Empfehlung. „Darf ich?“ ohne diesen Inhalt ist keine Frage. Höchstens vier Fragen,
Alltagssprache (0018, A22). Ein Paket wird nicht als Ganzes zur Freigabe vorgelegt: jede
Entscheidung einzeln, besonders jede Streichung aus einem Vorschlag des Menschen.

### E7 · Bugs
Oben in Alltagssprache: **Was passiert ist · was das für dich heißt · was ich tue · musst du
etwas entscheiden?** Technische Details darunter, eingeklappt. Label `bug`, dazu `an:claude`
oder `an:mensch`.

## F · Labels

| Label | heißt | wer setzt |
|---|---|---|
| `an:claude` · `an:codex` · `an:chatgpt` · `an:gemini` | freigegeben **und** umsetzungsreif für dieses Modell | Claude (E2) |
| `an:mensch` | Frage oder Handgriff des Eigentümers | Claude oder das Modell bei der Übergabe |
| `entwurf` | Idee oder Aufgabe, noch nicht umsetzungsreif | alle |
| `bug` | etwas lief falsch (E7) | alle |

Neue Labels nur bei Bedarf, mit Eintrag in dieser Tabelle. Ungenutzte werden gelöscht.

**Übersicht über mehrere Issues (jedes Modell, #52):** Grundlage sind die aktuellen Labels und
die neuesten Kommentare, frisch geholt. Was im Text oder im Chat steht, ist älter. Jedes Issue
fällt in genau eine Gruppe:
1. `entwurf`: nicht freigegeben.
2. `an:mensch`: Der Eigentümer entscheidet oder handelt.
3. `an:<modell>`: freigegeben und zugewiesen; begonnen wird erst auf Auftrag.
4. ohne `an:`-Label und ohne `entwurf`: Zuständigkeit ungeklärt.

Blockaden stehen getrennt dabei. Pull Requests werden getrennt von Issues geführt.

## G · Prüffälle (`evals/`) sind kein Blocker
Sie zeigen, ob ein Modell oder Werkzeug mit dem Labor zurechtkommt. Sie blockieren keine Arbeit
und kein Schließen. Eine technische Voraussetzung (die Datei des Prüffalls existiert) ist
Abhängigkeit, kein Urteil.

## Typische Fehler

- Ein Label als Auftrag lesen, ein Zitat als Freigabe.
- Issue ohne Anforderung oder ohne gesetzte Abhängigkeit.
- Ein Paket zur Freigabe vorlegen; Streichungen darin verstecken.
- Verteilen vor der Antwort des Menschen.
- Mit dem Stand vom Sitzungsbeginn weiterarbeiten.
- Einen langen Issue-Verlauf fortschreiben, statt zu teilen.
