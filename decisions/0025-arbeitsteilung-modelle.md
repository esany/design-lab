---
status: gültig
datum: 2026-10-28
entschieden_von: Eigentümer, Chat 28.10. (Antworten auf #53)
dient: A12, A13, A26, A34
perspektive: system
---

# 0025 · Arbeitsteilung zwischen Modellen, Übergaben als Issues

**Anlass:** Mit Claude Opus 5.5 (Stufe mittel) war nach wenigen Sitzungen schon rund 30 % der
Wochennutzung verbraucht. ChatGPT „Astra 6 max“ ist laut Eigentümer im normalen Chat ohne Limit
nutzbar; „Work Luna 6 / 5.5 max“ unterliegt Limits. Die Modellnamen und ihre Stärken sind hier
**nicht belegt** und werden über `evals/` geprüft, nicht angenommen.

## Entscheidung des Eigentümers (28.10., Antworten auf #53)

Der Vorschlag unten bleibt im Wortlaut stehen. Gültig ist er mit diesen Antworten:

1. **Sparregeln gelten als Regel**, mit zwei Bedingungen des Eigentümers: „ich kann es
   jederzeit anpassen und aus der Reihe beauftragen“ und „[Sparen] darf nicht zu Lasten der
   Qualität gehen. Für Routinen ist es aber ok.“ Gespart wird also bei Routinen (Pflege, Radar,
   mechanische Teilaufgaben). Bei Gestaltung, Prüfung und Urteil geht Qualität vor. Ein Auftrag
   des Eigentümers außerhalb der Reihe hat Vorrang. Radar alle zwei Wochen.
2. **Die Tabelle „wer macht was“ ist keine Regel.** Sie bleibt als *nicht belegte*
   Ausgangsvermutung stehen. Worum es geht, sagt der Eigentümer: „es geht darum zu
   differenzieren“. Code kann auch im normalen Chat (Astra) entstehen, dort fehlen aber
   bestimmte Funktionen. Codex und Work verbrauchen Limits und laufen deshalb auf einem
   kleineren Modell (Luna 5.6). **Ein Auftrag muss das berücksichtigen:** Er nennt, welche
   Funktionen nötig sind (z. B. ins Repo schreiben), und ist so klar und eng geschnitten, dass
   ihn das kleinere Modell sauber erledigen kann. Die Profile dazu entstehen in #57.
3. **Kein Label `übergabe`.** Titel `[Übergabe]` und Vorlage genügen.
4. **Codex und Work nur in begründeten Fällen (Eigentümer, 28.10., nach der Triage):** Der
   normale Chat (Astra) ist die Regel für Aufgaben, die er kann. Ein Auftrag geht an Codex oder
   Work nur, wenn der normale Chat nicht mehr reicht, und der Auftrag nennt den Grund (welche
   Funktion fehlt, z. B. lokale Ordner, Branches löschen, lange Läufe). Ohne Grund geht er an
   Astra oder Claude. Die Tabelle „Zuschnitt“ unten ist entsprechend nur Vermutung.

**Freigegeben (28.10.):** Claude ist Orchestrator. Es schreibt die Issues und gibt ihnen Labels; andere Modelle arbeiten nur an Issues mit ihrem Label. Der Rest bleibt Vorschlag (#31).

## Grundsatz

- Das teure Modell bekommt nur die Arbeit, die Werkzeuge **und** Genauigkeit braucht.
- Die Übergaben laufen über das Repo, nicht über den Menschen. Wer nicht ins Repo schreiben
  kann, bekommt nur Aufgaben, bei denen der Mensch ohnehin im Gespräch ist.
- Eine Regelquelle: `AGENTS.md`. Die Projekt-Anweisungen in Claude und ChatGPT verweisen nur
  darauf und enthalten keine eigene Kopie, damit die beiden Fassungen nicht auseinanderlaufen.

## Zuschnitt (Ausgangsvermutung, *nicht belegt*, keine Regel; Antwort 2)

| Aufgabe | wer | warum |
|---|---|---|
| Gespräch, Ideensammlung, Varianten in Worten, Vorrecherche | ChatGPT (ohne Limit) | billig; der Mensch ist ohnehin dabei |
| Kritik als **anderes Modell** (Qualitätsschleife) | ChatGPT | Pflicht laut AGENTS.md; trennt Erzeugen und Prüfen |
| Code- und Repo-Arbeit mit klarer Abnahme (Skripte, Build, Links, Korpus) | Codex (Work), sobald mit GitHub verbunden | schreibt direkt ins Repo, öffnet PRs |
| Rendern, Messen, Druckvorstufe, Typografie-Prüfung, Orchestrierung schwieriger Fälle | Claude Opus | Werkzeuge plus Genauigkeit |
| Mechanisches innerhalb einer Claude-Sitzung (Suchen, Listen, Linkprüfung) | Claude-Unteragent mit kleinerem Modell (Sonnet/Haiku) | kostet einen Bruchteil |
| Urteil, Auswahl, Bedeutung | Mensch | unverändert |

## Sparregeln für Claude

1. Ein Chat je Thema. Lange Chats kosten bei jedem Schritt mehr, weil der ganze Verlauf
   mitgelesen wird.
2. Große Dateien nicht ganz lesen; Skills nur bei Bedarf laden.
3. Mechanische Teilaufgaben an kleinere Modelle als Unteragenten geben.
4. Wiederkehrende Läufe sparsam halten: Radar alle zwei Wochen statt wöchentlich (Vorschlag).

## Übergaben als Issues

- Labels: `an:claude`, `an:codex`, `an:chatgpt`, `an:mensch`; dazu `übergabe` (entfällt, Antwort 3).
- Neue Vorlage „Übergabe“ mit den Feldern Ziel, Fundstellen (Kontext im Repo), Eingang,
  erwartete Ausgabe mit Zielpfad, Abnahme, Rückgabe an.
- Beziehungen über Unter-Issues und „blockiert durch #n“; ein Issue ist eine Aufgabe für ein
  Modell.
- Ergebnisse aus ChatGPT-Chats kommen als Kommentar ins Issue. Solange ChatGPT nicht selbst ins
  Repo schreiben kann, gibt es sie als fertigen Text mit Zielpfad aus, und der Mensch kopiert
  nur diesen einen Block. Ob ChatGPT über den GitHub-Connector lesen kann: *nicht getestet*.

## Prüfung

Je Modell drei kleine Prüffälle in `evals/` (z. B. Duden-Feinsatz an einem Absatz; Kritik des
Flyers gegen Fachpaket Form; ein Build-Skript-Fix). Danach wird der Zuschnitt angepasst.

**Rückgängig:** „Regel 0025 rückgängig“.
