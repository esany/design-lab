---
status: freigegeben (auf Probe)
datum: 2026-11-11
entschieden_von: Eigentümer im Chat: „freigabe“ (11.11.)
dient: A04, A07, A26, A34
perspektive: system, gebrauch
---

# 0035 · Laborregeln gelten für jedes Werk; ein Werkchat lädt das Labor nachweisbar und führt Korrekturen sofort zurück

`perspektive:` system, gebrauch

**Anlass:** Im ersten Werkchat mit Kundenauftrag (11.11.) hat Claude das genannte Laborwissen nicht
abgerufen, Gelesenes nicht angewendet, in früher Phase gebaut statt geklärt und Korrekturen des
Eigentümers nicht an das Labor zurückgeführt (a32–a34, Prüffall `evals/werkchat-lernen`, nicht
bestanden). Die Startnachricht des Werkes gab das Labor nur lesbar frei; ein Eingang war damit
technisch unmöglich. Anweisungen allein haben schon in a29–a31 nicht getragen.

**Entscheidung:**

0. **Geltung.** Alle Entwurfsregeln des Labors und die grundlegenden Prinzipien guter Entwurfs- und
   Gestaltungsarbeit (`principles.md`, `manifest.md`, Fachpakete, Methoden-Skills, Leitfaden) gelten
   für jedes neue Projekt, jedes Werk und jedes Artefakt, sofern dort nichts anderes vorgegeben ist.
   Abweichungen stehen ausdrücklich in `werk.md` des Werkes. Wortlaut des Eigentümers (11.11.): „alle
   Entwurfsregeln des Design Labs und grundlegenden Prinzipien für gute Entwurfs- und
   Gestaltungsarbeit müssen auch für neue Projekte und Artefakte gelten, wenn nicht anders
   vorgegeben“.
1. **Schreibrecht für Eingänge.** Ein Werkchat hängt das Labor mit Schreibrecht an. Er schreibt dort
   nur Eingänge ohne Kundeninhalte: Aussagen in `daten/arbeitsweise.json`, Ergebnisse in `evals/`,
   Bug-Issues, `verlauf/`. Alles andere bleibt Frage an den Menschen.
2. **Nachweis beim Start.** Die erste Antwort eines Werkchats nennt mit Pfaden, was er aus dem Labor
   gelesen hat (mindestens: was die Startdatei des Werkes nennt). Fehlt etwas, sagt er es.
3. **Korrektur ist Eingang.** Jede Korrektur des Eigentümers erzeugt im selben Schritt einen Eingang
   im Labor, nicht erst am Ende.
4. **Frühe Phase.** Steht in `werk.md` `phase: früh`, schreibt der Chat höchstens einmal je Sitzung ins
   Repo und klärt Lesart und Format im Gespräch, bevor er etwas erzeugt.
5. **Technische Prüfung (zu bauen):** Die Prüfung in `esany/werke` meldet einen neuen Eintrag mit
   Rückmeldung des Eigentümers ohne Zeile „→ Labor:“ mit Verweis auf den Eingang.

**Alternativen:**

- Nur eine weitere Anweisung in `AGENTS.md`: verworfen, gelesene Anweisungen wurden nicht befolgt
  (a29–a32).
- Hook beim Sitzungsstart, der die Leseliste in den Kontext schreibt: erwogen; ob Hooks in
  Cloud-Sitzungen laufen, ist nicht belegt. Kann Punkt 2 später technisch stützen.
- Rückkopplung gesammelt am Ende der Sitzung: verworfen, sie fiel genau dort aus.

**Folgen:** Werkchats brauchen Schreibrecht im Labor; die Trennung öffentlich/privat hängt dann an
der Disziplin des Eingangs ohne Kundeninhalte (Risiko, Prüfung durch den bestehenden Build nur für
Dateinamen und Schriften). Startdateien von Werken ändern sich (Labor nicht mehr „nur lesend“). Die Vorlage `werke/_vorlage/werk.md` in `esany/werke` bekommt ein Feld „Abweichungen vom Labor“.
Neue Prüfung in `esany/werke`. Prüffall `werkchat-lernen` wird nach jedem Werkchat ausgewertet.

**Rückgängig:** Entscheidung auf „verworfen“ setzen; Startdateien wieder auf „nur lesend“; Prüfung in
`esany/werke` entfernen.
