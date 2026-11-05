---
status: freigegeben (auf Probe), neu gefasst am 05.11.2026
auswerten: 2026-12-05
datum: 2026-11-05
entschieden_von: Mensch. Erste Fassung 28.10. (Frage: „Du hast Wissensmonopole im Chat erzeugt. Wie willst du das künftig verhindern?“); neue Fassung 05.11. im Chat („Ja“ zu #127, Punkt 1)
dient: A19, A26, A33
perspektive: system
---

# 0024 · Kein Wissen nur im Chat

**Anlass:** Die erste Fassung (28.10.) verlangte, jede Analyse im selben Schritt im Repo
abzulegen. Das verhinderte Wissensmonopole im Chat, belohnte aber Text: Berichte wuchsen schneller
als Werke, und ein neuer Chat musste viel lesen, um weiterzumachen (Experiment Entwurfsprozess,
Abschnitt 05.11.; Befund `research/2026-11-wissensformen/befund.md`). Das Ziel bleibt. Der Maßstab
wechselt von „alles aufschreiben“ zu „ein frischer Chat kann richtig weitermachen“.

**Entscheidung:**

1. **Maßstab ist der Neustart-Test.** Ein frischer Chat liest nur `AGENTS.md`, den Merkzettel
   seines Themas und seinen Auftrag und macht richtig weiter. Was ihm fehlt, ist eine Lücke im
   Repo. Wie viel Text dort steht, ist kein Maßstab.
2. **Drei Schichten:**
   - **Immer geladen**, klein: `AGENTS.md`, `stand.md`, der Merkzettel des Themas. Darin nur der
     Stand, der nächste Schritt und die geltenden Entscheidungen, als Verweis.
   - **Bei Bedarf:** Entscheidungen, Befunde, Prüffälle, Fachpakete, Leitfaden. Ein Modell holt
     sie gezielt über das erzeugte Verzeichnis `verzeichnis.md`, statt zu suchen.
   - **Archiv:** Denkwege, Gesprächsprotokolle (`research/gespraeche/`), Rohsammlungen und
     verdichtete Vorfassungen. Archiv ist nie Stand und nie Pflichtlektüre. Eine Datei gehört dazu
     durch ihren Ort oder die Kopfzeile `schicht: archiv`.
3. **Stand ist nur, was entschieden, ausgeführt oder erzeugt ist:** eine Entscheidung in
   `decisions/`; ein Prüffall, Werk oder Werkzeug, das läuft; eine Ansicht, die aus Daten
   entsteht. Dazu Belege ab Reifegrad „belegt“ in `research/`. Gesammeltes und Denkwege dürfen
   im Chat bleiben. Werden sie aufgeschrieben, gehören sie ins Archiv.
4. **Am Sitzungsende** zwei Sätze Stand im Merkzettel des Themas (0029), nicht mehr.
5. **Chat verweist auf das Repo:** Antworten nennen die Fundstelle.
6. **Werkdateien**, die nicht öffentlich sein dürfen, kommen in die private Ablage. Bis es die
   gibt, geht ein ZIP an den Menschen.
7. **Monatlich konsolidieren** (Pflege): Befunde eines Themas zu einem zusammenführen, die
   Vorfassungen ins Archiv; prüfen, ob jedes offene Issue und Experiment eine Fundstelle hat.

**Alternativen:**
- Erste Fassung beibehalten („alles sofort aufschreiben“): verworfen, weil sie Text statt Werk
  belohnt und die Startlast wachsen lässt.
- Wissen in einem Speicher außerhalb des Repos (z. B. Basic Memory): verworfen als Ersatz, weil
  dann nicht jedes Werkzeug denselben Stand sieht; im Radar unter „Beobachten“.
- Nur eine Längengrenze für Dateien: verworfen, weil sie Textmenge misst statt Anschluss.

**Folgen:** Leichter: kleinere Startlast, ein Ort für jede Art Wissen, Denkwege dürfen im Chat
bleiben. Schwerer: Der Chat muss unterscheiden, was Stand ist und was Denkweg; die Pflege hat den
Schritt „Konsolidieren“. Geändert: diese Datei, `tools/build.mjs` (erzeugt `verzeichnis.md`), die
Abschnitte zu 0024 in `.agents/skills/laborarbeit/references/zusammenarbeit.md` und im Skill
`pflege`. Punkt 4 der ersten Fassung war schon durch 0029 ersetzt.

**Rückgängig:** „Regel 0024 rückgängig“ stellt die erste Fassung wieder her (unten, eingeklappt).

<details><summary>Erste Fassung vom 28.10.2026 (abgelöst am 05.11.)</summary>

1. **Schreiben in derselben Arbeitseinheit:** Jede Recherche, Bewertung, Empfehlung, Messung oder
   Analyse, die mehr ist als eine kurze Rückfrage, wird im selben Arbeitsschritt im Repo abgelegt.
   Der Ort richtet sich nach der Art: Experiment, Konzept unter `research/`, Radar, Fachpaket,
   Entscheidung. Was keinen eigenen Ort hat, kommt ins Gesprächsprotokoll
   `research/gespraeche/<datum>-<thema>.md`.
2. **Chat verweist auf das Repo:** Antworten nennen die Fundstelle. Der Chat ist die Unterhaltung;
   das Wissen steht im Repo.
3. **Werkdateien:** Was nicht öffentlich sein darf, kommt in die private Ablage. Bis es die gibt,
   geht ein ZIP an den Menschen.
4. **Chatlänge ist Sache des Agenten:** An natürlichen Einschnitten sagt der Agent, dass ein neuer
   Chat sinnvoll ist, und schreibt vorher „Anschluss“ in `stand.md` fort. Ein Chat je Thema.
   *Abgelöst durch 0029 (28.10.).*
5. **Prüfung:** Die monatliche Pflege prüft, ob jedes offene Issue und Experiment eine Fundstelle
   im Repo hat.
</details>
