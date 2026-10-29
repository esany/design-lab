---
dient: A17, A20, A26, A31, A34
issue: "#56 → Folgeaufträge in #62"
datum: 2026-10-29
status: Vorschlag des Orchestrators. Nichts verteilt, bevor der Eigentümer antwortet (außer dem Gegenlesen, das zur Abnahme von #56 gehört).
---

# Aufträge aus den Befunden: was dringend ist und wer es macht

Grundlage: [`befunde.md`](befunde.md) und [`../2026-10-lesekosten/befund.md`](../2026-10-lesekosten/befund.md).
Leitlinie aus beiden Befunden: **weniger Text, weniger Stellen für den Stand, Sperren statt
Sätze.** Jeder Auftrag unten muss das Labor kleiner oder prüfbarer machen, nicht größer.

## Wer kann was (Stand 29.10.)

| Wer | nachgewiesen | nicht nachgewiesen | belastet |
|---|---|---|---|
| **Astra** (ChatGPT-Chat, GPT-6) | Issues lesen, anlegen, kommentieren; ins Repo schreiben; **implementieren** (Eigentümer 28.10. und 29.10.) | Branches löschen; lokale Ordner (Eigentümer 28.10.) | ChatGPT-Abo |
| **Codex** | Node, Prüfungen, Pull Requests (frühere Repos) | Arbeit in diesem Labor | ChatGPT-Abo; nur mit Begründung (0025), hier derzeit keine |
| **Claude Sonnet** (Claude Code, Helfer) | alles im Repo, Lesen in eigenem Kontext | — | Claude-Abo (Lesen ≈ ×4 der Quelle, siehe Befunde) |
| **Claude Opus** (Orchestrator) | alles | — | Claude-Abo, teuer: nur Planen, Urteilen, Prüfen |
| **Eigentümer** | GitHub-Einstellungen, Urteil | — | Zeit |

**Folge für die Verteilung (*abgeleitet*):** Die Ausführung geht an Astra, also Lesen, Gegenlesen,
Bestandsaufnahme, Textumbau und Implementierung. So wird das Claude-Abo geschont, und Claude prüft
als anderes Modell. Codex hat derzeit keinen begründeten Fall (0025). Was Haltung oder Regeln
berührt, bewertet Claude Opus, und der Eigentümer entscheidet.

*Berichtigt am 29.10.:* Zuerst stand hier, Branch, PR und Build seien für Astra nicht nachgewiesen.
Das stützte sich auf Astras eigene Rückmeldung, nicht auf die Erfahrung des Eigentümers (Muster C).

## Aufträge, nach Dringlichkeit

### 1 · Gegenlesen der Befunde · an Astra · jetzt (Abnahme von #56)
- **Warum Astra:** Die Regel verlangt ein anderes Modell, weil Claude Gegenstand der Prüfung ist.
  Astra braucht nur Lesen und einen Kommentar; beides ist nachgewiesen.
- **Lesen:** `befunde.md`, `karten.md`; Stichproben in `esany/wissensarbeit` (öffentlich).
- **Ergebnis:** ein Kommentar im Gegenlese-Issue: stimmen die Gruppen? Fehlt ein Muster?
  Sind fünf weitere Zitate wörtlich? Wo ist eine Aussage stärker als ihr Beleg?
- **Fertig, wenn:** fünf Zitate geprüft, mit Pfad; jede Gruppe mit „trägt / trägt nicht / unklar“;
  höchstens drei Einwände.
- **Nicht tun:** nichts im Repo ändern, keine Maßnahmen vorschlagen.

### 2 · Hauptzweig schützen (#40) · an den Eigentümer · dringend
- **Warum:** Das ist die einzige fehlende Sperre gegen Muster E (Schreiben auf `main`, #77). Sätze
  haben das nicht verhindert, eine Sperre würde es. Dauer: etwa zwei Minuten Klicks; die
  Anleitung steht in #40.

### 3 · Eine Uhr für den Stand · an Astra
- **Warum:** Muster C und Strukturbefund 3; spart ≈ 5.500 Tokens je Start (Lesekosten A, B, D).
  Es ist Textarbeit in wenigen Dateien und braucht keinen Code.
- **Ziel:** Der Stand eines Themas steht an genau einer Stelle, dem Merkzettel. `stand.md` zeigt nur
  noch die Themen und Ihre offenen Fragen.
- **Ergebnis (ein PR, Branch `lab/eine-uhr`):**
  - `stand.md`: oben „Themen“ und „Offene Fragen“, darunter „Läuft ohne Sie“, sonst nichts.
    „Reihenfolge“ und „In Arbeit“ werden in die Themen-Tabelle gefaltet.
  - `stand-verlauf.md` (neu): alle Zeilen aus „Letzte Änderungen“, neueste oben, nach Datum
    sortiert, Wortlaut unverändert.
  - Jeder Merkzettel: oben „Stand · Nächster Schritt · Was du entscheidest“, eingeklappt nur
    **offene** Nummern; Erledigtes raus (es steht im Verlauf). Lehren, die gelten sollen, werden
    nicht gestrichen, sondern als Liste im PR an Claude übergeben.
  - `AGENTS.md` (Schreibregel 2, Zusammenarbeit) und Skill `issue`: „in `stand.md` eingetragen“ wird
    zu „in `stand-verlauf.md` eingetragen“. **Nur mit Ihrem Ja** (Frage 4).
- **Fertig, wenn:** `stand.md` ≤ 4.000 Zeichen; die Zeilenzahl in `stand-verlauf.md` entspricht der
  alten Tabelle; jeder Merkzettel ≤ 3.000 Zeichen; keine Issue-Nummer im Merkzettel widerspricht
  ihrem Zustand auf GitHub; Build grün.
- **Nicht tun:** keine Regel neu formulieren, nichts löschen, was nicht in den Verlauf wandert,
  fremde Themen nicht inhaltlich ändern, nur kürzen.
- **Prüft:** Claude Opus (Stichprobe: drei Rückgängig-Sätze auffindbar, ein Neustart nach
  `evals/start` mit den neuen Dateien).

### 4 · Prüfungen statt Sätze · an Astra · nach 3
- **Warum Astra:** Kleine Änderung in Node und einer GitHub-Prüfung; Astra kann implementieren,
  also gibt es keinen Grund für Codex (0025).
- **Ziel:** Der Build meldet (als Warnung, nicht als Fehler): Merkzettel über 3.000 Zeichen;
  `stand.md` über 4.000; in der GitHub-Prüfung zusätzlich Issue-Nummern, die ein Merkzettel
  „offen“ nennt, die aber geschlossen sind.
- **Fertig, wenn:** jede Warnung mit einem absichtlich falschen Beispiel ausgelöst und danach wieder
  grün; keine neue Abhängigkeit in `tools/`.
- Berührt `.github/` und `tools/`: **nur mit Ihrem Ja** (gehört zu Frage 4).

### 5 · Regeln prüfen (#58) vorziehen · Bestand an Astra, Urteil bei Claude Opus, Entscheidung bei Ihnen
- **Warum vorziehen:** Muster B und Strukturbefund 5: Regeln wachsen, ohne zu wirken. #58
  wartet heute auf #57 (Modellprofile). Die Befunde zeigen aber, dass Modellprofile aus diesem
  Material nicht belegbar sind. #57 trägt #58 also nicht.
- **Teil a · Bestand (Astra):** Tabelle aller Regeln in `AGENTS.md`, `decisions/`, Skill `issue`:
  Regel · Fundstelle · Zeichen · wird sie mechanisch geprüft (ja/nein, womit) · Doppelung mit (Fundstelle).
  Nur erfassen, nicht bewerten.
- **Teil b · Urteil (Claude Opus):** je Regel ein Vorschlag: behalten · durch Prüfung ersetzen ·
  zusammenlegen · archivieren, mit Folge. Ziel: `AGENTS.md` ≤ 6.000 Zeichen ohne Funktionsverlust
  (Lesekosten C), geprüft mit `evals/start`.
- **Teil c:** Sie entscheiden je Regel; höchstens vier Fragen je Runde.

### 6 · Modellprofile (#57) verkleinern · an Claude Opus (Issue umschreiben)
- **Vorschlag:** #57 wird „Werkzeugnachweis je Modell“: Was kann jedes Modell im Labor wirklich
  (Branch, PR, Build, Browser, Rendern)? Die Angaben des Eigentümers zählen als Beleg, Selbstauskünfte der Modelle nicht. Ergänzt an echten Aufträgen,
  nicht aus Herstellerangaben. Die Tabelle oben ist der Anfang.

### Nicht vorgeschlagen
- **Neue Regeln aus diesen Befunden.** Das wäre Muster H. Ausnahme ist die Sperre in Auftrag 2.
- **Änderungen in `esany/wissensarbeit`.** Das Repo ist Gegenstand der Prüfung, nicht des Aufräumens.
  Ob es ruhen oder weitergeführt werden soll, ist Ihre Entscheidung und nicht dringend.
- **#59 (Aufträge besser schreiben)** und **#60 (Tokenökonomie)** bleiben in der Reihe. Die Messung
  aus den Befunden (Helfer ≈ ×4) und das Audit der Lesekosten gehen als Material dorthin.

## Fragen an den Eigentümer

1. **Hauptzweig jetzt schützen (#40)?** *Empfehlung: ja, heute.*
2. **Regelpause:** Bis die Regeln geprüft sind (Auftrag 5), werden aus einzelnen Vorfällen keine
   neuen Regeln. Vorfälle kommen nur als Fallmaterial zu #58. *Empfehlung: ja.*
3. **Reihenfolge:** Regeln prüfen vor Modellprofilen; Modellprofile werden zum Werkzeugnachweis.
   *Empfehlung: ja.*
4. **„Eine Uhr“ und Prüfungen (Aufträge 3 und 4)**, einschließlich der kleinen Änderung in
   `AGENTS.md`, im Skill `issue` und in `.github/`? *Empfehlung: ja; beides an Astra, Claude prüft.*
