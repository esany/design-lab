---
status: freigegeben (auf Probe)
datum: 2026-10-28
entschieden_von: Mensch (Frage: „Du hast Wissensmonopole im Chat erzeugt. Wie willst du das künftig verhindern?“), Umsetzung durch den Agenten
---

# 0024 · Kein Wissen nur im Chat

**Anlass:** Recherchen, Bewertungen und Messungen standen teils nur im
Gespräch. Ein langer Chat wird automatisch zusammengefasst, dabei geht Detail
verloren. Der Mensch soll sich darum nicht kümmern müssen.

**Entscheidung:**
1. **Schreiben in derselben Arbeitseinheit:** Jede Recherche, Bewertung,
   Empfehlung, Messung oder Analyse, die mehr ist als eine kurze Rückfrage,
   wird im selben Arbeitsschritt im Repo abgelegt. Der Ort richtet sich nach
   der Art: Experiment, Konzept unter `research/`, Radar, Fachpaket,
   Entscheidung. Was keinen eigenen Ort hat, kommt ins Gesprächsprotokoll
   `research/gespraeche/<datum>-<thema>.md`.
2. **Chat verweist auf das Repo:** Antworten nennen die Fundstelle. Der Chat
   ist die Unterhaltung; das Wissen steht im Repo.
3. **Werkdateien:** Was nicht öffentlich sein darf, kommt in die private
   Ablage. Bis es die gibt, geht ein ZIP an den Menschen.
4. **Chatlänge ist Sache des Agenten:** An natürlichen Einschnitten (Thema
   abgeschlossen, neues Experiment) sagt der Agent, dass ein neuer Chat sinnvoll
   ist, und schreibt vorher „Anschluss“ in `stand.md` fort. Ein Chat je Thema.
   Ein neuer Chat beginnt mit: „Lies stand.md und mach weiter.“
   *Abgelöst durch 0029 (28.10.): Der Anschluss steht im Merkzettel des Themas in
   `anschluss/`; ein neuer Chat beginnt mit dem Thema.*
5. **Prüfung:** Die monatliche Pflege prüft, ob jedes offene Issue und
   Experiment eine Fundstelle im Repo hat.

**Rückgängig:** „Regel 0024 rückgängig“.
