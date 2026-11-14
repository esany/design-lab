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
   **Ausnahme geplante Prüfung (H):** In einem Lauf der geplanten Aufgabe des Eigentümers gilt
   das Label `an:<ich>` als Auftrag, denn Claude setzt es nur auf Freigegebenes (E2).
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

## B1 · Auftragsformat für kleinere Modelle (Hinweise, 0028; #82)

Ein kleineres Modell (Luna 5.6 in Work/Codex, auch Astra) soll nichts erraten müssen. Urteilen
bleibt beim Menschen oder Orchestrator, das Modell führt aus, misst und erfasst. Herkunft:
`research/gespraeche/2026-10-28-triage-modelle.md`. Wer schreibt, prüft jeden Punkt:

1. **Ziel und Ergebnis trennen:** Ziel = was am Ende gelten soll; Ergebnis = welche Datei, welcher
   Pull Request. Ein Ergebnis, eine Datei, ein Branch.
2. **Lesart spiegeln:** Das Modell sagt zuerst in zwei Sätzen, was es verstanden hat und welche
   Annahme gilt (C 1). Weicht das vom Gemeinten ab, stoppt es und fragt.
3. **Bereit, wenn / Fertig, wenn:** Voraussetzungen als Ja-Nein-Sätze („Bereit“), Abnahme je
   Teilergebnis als Ja-Nein-Sätze („Fertig“), möglichst mit einem Befehl prüfbar.
4. **Umfang und Abbruchpunkt:** Obergrenze nennen (Dateien, Zeilen, Quellen). Wenn X unklar ist
   oder Y fehlt: eine Frage als Kommentar, nicht raten, nicht weitermachen.
5. **Eingang vollständig:** höchstens fünf Pfade, Begriffe des Labors in einem Satz erklärt;
   Ausgabe als Gerüst mit Überschriften und Tabellenköpfen mitgeben.
6. **Tun / Nicht-tun:** z. B. „nichts löschen“, „keine Regeln, Skills, `AGENTS.md`,
   Entscheidungen ändern“. Keine Geschmacks- oder Bedeutungsentscheidung; wo Optionen nötig
   sind, eine Tabelle (Option · Messwert · Folge · Risiko).
   Immer dabei: „Merkzettel nicht fortschreiben, das macht das orchestrierende Modell“ (Zielbild
   Leitfaden, bestätigt 12.11.).
7. **Zielmodell berücksichtigen:** Codex und Work nur in begründeten Fällen, wenn der normale
   Chat (Astra) nicht mehr reicht; der Auftrag nennt den Grund (0025). Werkzeuge nennen (ins Repo schreiben, Browser, Node); fehlt
   eines, sagt das Modell es zuerst. Teure Modelle nicht für Routinen, nie zu Lasten der Qualität.
8. **Rückmeldung fest:** Ergebnis · geprüft / nicht geprüft · offen (höchstens drei Fragen). Eine
   Prüfung durch ein anderes Modell, nicht durch das eigene.
9. **Sprache:** kurze Sätze, Deutsch nach Duden (0023), Meldungen und Fragen an den Menschen in
   Worten ohne Nummern (E6, #71). Vor jedem Commit den Zweig prüfen; bei einem Fehler in einer
   Kette abbrechen und melden statt weitermachen.

Offen und nicht Teil davon: was der Eigentümer meist schreibt und meint, und der Detailgrad je
Auftragsart. Das kommt aus der Untersuchung (#59, wartet auf #56).

## C · Bearbeiten

1. Kurz spiegeln, was verstanden wurde und welche Annahme gilt.
2. Branch, Pull Request mit `Closes #n` und Anforderung, eigene Datei in `verlauf/` (0034).
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
Issue. Beginnt ein neues Thema: Merkzettel mit Kopf anlegen; die Zeile in `stand.md` wird erzeugt.
Am Ende der Sitzung nur den eigenen Merkzettel fortschreiben, oben in Worten, Nummern
eingeklappt darunter. Bei einer Übergabe schreibt ihn nur das orchestrierende Modell, nicht das ausführende. Ist ein Thema abgeschlossen, kommt der Merkzettel nach `anschluss/archiv/`.

### E4 · Lebenszyklus (Tokenökonomie)
- **Überholt** (Ziel erledigt, verworfen oder von einem neuen Stand eingeholt): schließen mit
  einem Satz „ersetzt durch #n“ oder „nicht verfolgt, weil …“.
- **Gewachsen** (mehrere Themen, langer Verlauf): schließen und in neue Issues aufteilen. Jedes
  neue verweist auf das alte, das alte nennt die neuen. Der Kontext steht im neuen Issue, nicht
  im Verlauf des alten.
- Ein Pull Request mit mehreren Entscheidungen wird geteilt (Schreibregel 1).
- Die Pflege sucht monatlich offene Issues ohne Bewegung und schlägt Schließen oder Teilen vor.
- **Freigabe des Eigentümers (14.11.2026, f69):** Erledigte oder durch Neueres ersetzte Issues schließt Claude selbst und zeigt dem Eigentümer danach die Liste (Name, Grund, Ersatz). Streicht ein Abschluss einen Vorschlag oder ein Anliegen des Eigentümers, geht er vorher einzeln an ihn (E6).

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
| `an:mensch` | Frage oder Handgriff des Eigentümers; Claude bringt sie in den Chat oder ins Zielbild, denn er liest GitHub nicht | Claude oder das Modell bei der Übergabe |
| `entwurf` | Idee oder Aufgabe, noch nicht umsetzungsreif | alle |
| `bug` | etwas lief falsch (E7) | alle |
| `eingriff` | Eigentümer musste korrigieren: falsche Fertigmeldung, selbst verlangte Gegenprobe, gestoppte Erfindung oder erklärte maßgebliche Datei; das betroffene Modell setzt das Label und nennt den Anlass in einem Satz im Issue. | das korrigierte Modell |

Neue Labels nur bei Bedarf, mit Eintrag in dieser Tabelle. Ungenutzte werden gelöscht.

**Übersicht über mehrere Issues (jedes Modell, #52):** Grundlage sind die aktuellen Labels und
die neuesten Kommentare, frisch geholt. Was im Text oder im Chat steht, ist älter. Jedes Issue
fällt in genau eine Gruppe:
1. `entwurf`: nicht freigegeben.
2. `an:mensch`: Der Eigentümer entscheidet oder handelt, nachdem Claude die Frage in den Chat oder ins Zielbild gebracht hat.
3. `an:<modell>`: freigegeben und zugewiesen; begonnen wird erst auf Auftrag.
4. ohne `an:`-Label und ohne `entwurf`: Zuständigkeit ungeklärt.

Blockaden stehen getrennt dabei. Pull Requests werden getrennt von Issues geführt.

## G · Prüffälle (`evals/`) sind kein Blocker
Sie zeigen, ob ein Modell oder Werkzeug mit dem Labor zurechtkommt. Sie blockieren keine Arbeit
und kein Schließen. Eine technische Voraussetzung (die Datei des Prüffalls existiert) ist
Abhängigkeit, kein Urteil.

## G2 · Startprompts für den Eigentümer

Jeder Prompt, den ein Modell dem Eigentümer für einen anderen Chat gibt, reicht für sich allein:
Er nennt das Labor als GitHub-Repo `esany/design-lab` (Zweig `main`), das Thema und den Auftrag.
Er setzt weder ein Projekt noch angehängte Dateien noch einen verbundenen Computer voraus (a61).

## H · Geplante Prüfung (ChatGPT, alle drei Stunden)

Der Eigentümer hat in ChatGPT eine geplante Aufgabe, die das Labor alle drei Stunden auf
Aufträge prüft (Wunsch des Eigentümers, 13.11.2026). Der Prompt steht unten im Wortlaut; ändert
er sich, wird er hier geändert und im Zielbild Bug #200 gezeigt, damit der Eigentümer ihn
einfügen kann. Lehre aus #203: Der erste Lauf suchte das falsche Label und behauptete Prüfungen,
die er nicht gemacht hatte.

Regeln für den Lauf: nur `an:chatgpt`; je Lauf höchstens ein Issue; nichts übernehmen (mergen),
keine Regel, Entscheidung, Prinzip oder Merkzettel ändern; Fragen an den Eigentümer nur als
Kommentar im Issue, Claude bringt sie ins Zielbild. Claude sieht nach jedem Lauf die neuen
Pull Requests, prüft sie und übernimmt sie.

```text
Geplante Prüfung des Labors esany/design-lab (GitHub, Zweig main). Arbeite nur mit dem, was du in diesem Lauf selbst liest; behaupte keine Prüfung, die du nicht gemacht hast.

1. Lies frisch: AGENTS.md und .agents/skills/issue/SKILL.md (Abschnitte A, C, D, H).
2. Suche offene Issues mit genau dem Label an:chatgpt. Andere Labels nicht beachten. Prüfe je Issue frisch: offen; Label noch an:chatgpt; alles unter „Blockiert durch“ geschlossen; noch kein Pull Request oder Zweig mit deinem Ergebnis; die neuesten Kommentare gelesen.
3. Ist keins bereit: nichts im Repo ändern. Antworte mit einer Zeile: „Keine Aufgabe für ChatGPT“ und die Uhrzeit.
4. Sonst das älteste bereite Issue, genau eins, nach Abschnitt C bearbeiten: eigener Zweig lab/gpt-<kurz>; Ergebnis in der im Issue genannten Datei; ein Verlaufseintrag verlauf/JJJJ-MM-TT-<kurz>.md mit erster Zeile „# JJJJ-MM-TT · Titel“ und den Zeilen „**Warum:** …“ und „**Rückgängig:** …“; Pull Request mit „Refs #<nummer>“. Nichts mergen. Keine Regel, Entscheidung, kein Prinzip und keinen Merkzettel ändern.
5. Übergabe als Kommentar im Issue: Ergebnis mit Link · geprüft · nicht geprüft · offen. Trenne: zugewiesen, begonnen, abgegeben.
6. Kannst du nicht ins Repo schreiben: sag genau das im Kommentar und lege das vollständige Ergebnis mit Zielpfad als einen Block in den Kommentar.
7. Fragen an den Eigentümer schreibst du in den Issue-Kommentar, nicht an ihn; Claude bringt sie ins Zielbild.
8. Antworte am Ende in höchstens drei Sätzen Alltagssprache: was du getan hast, mit Namen statt Nummern.
```

## Typische Fehler

- Ein Label als Auftrag lesen, ein Zitat als Freigabe.
- Issue ohne Anforderung oder ohne gesetzte Abhängigkeit.
- Ein Paket zur Freigabe vorlegen; Streichungen darin verstecken.
- Verteilen vor der Antwort des Menschen.
- Mit dem Stand vom Sitzungsbeginn weiterarbeiten.
- Einen langen Issue-Verlauf fortschreiben, statt zu teilen.
