---
status: freigegeben als Startversion
datum: 2026-10-27
entschieden_von: Vorschlag Agent (Claude) · Entscheidung Mensch am 2026-10-27
dient: A04
perspektive: fach
---

# 0017 · Ittens Farbkontraste als Methode — übersetzt in OKLCH

**Anforderung (Mensch):** mit Ittens Farbkontrasten experimentieren, neben der
Permutation.

**Entscheidung:**
1. Neuer Skill `farbkontraste-itten` mit den sieben Kontrasten, Belegstatus
   und Prüffragen.
2. Ittens Zwölferkreis wird in OKLCH angenähert (Töne: Gelb 105°, Orange 60°,
   Rot 27°, Violett 310°, Blau 262°, Grün 150° … in größter darstellbarer
   Buntheit). Diese Zuordnung ist eine Annäherung des Agenten und als
   „nicht belegt“ markiert.
3. Wo Itten (Malfarben) und Farbmetrik (Licht) auseinandergehen, zeigt die
   Studie beide Varianten — z. B. Gegenfarbe nach Itten-Kreis oder nach
   Wahrnehmung.

**Begründung:** OKLCH ist wahrnehmungsnah und gut steuerbar; die Differenz zu
Itten wird nicht versteckt, sondern zum Lerninhalt.

**Alternativen:** feste sRGB-Farbwerte aus einer Itten-Abbildung (genauer am
Original, aber nicht steuerbar und urheberrechtlich heikler); RYB-Farbmodell
nachbauen.

**Betrifft:** `.agents/skills/farbkontraste-itten`, Studie „Reihe und
Verschiebung“ (`studie.js`, `texte.js`).

**Deine Entscheidung:** Als Startversion übernommen.
