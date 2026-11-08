---
status: freigegeben (auf Probe)
auswerten: 2026-12-08
datum: 2026-11-08
entschieden_von: Eigentümer im Chat: „Ja“ zu f14 (07.11.); Schreibrechte für die Prüfung auf PR-Branches, nie auf main (08.11.)
dient: A14, A19, A26
perspektive: system
---

# 0033 · Die automatische Prüfung baut die Übersichten selbst

`perspektive:` system. Es geht um die Prüfung des Labors, nicht um ein Werk.

**Anlass:** Erzeugte Dateien (`stand.md`, `daten/*.md`, `verknuepfung.md` und weitere) stehen
im Repo und müssen im PR aktuell sein. Im Prüffall neustart-daten haben zwei von drei Modellen
den Build übergangen oder die Dateien von Hand nachgebaut (*abgeleitet*, Auswertung auf Branch
`lab/neustart-daten-auswertung`). Parallele PRs kollidieren in diesen Dateien. Beispiele sind die
Leitfaden-Sicherung (#143) und #149 (*belegt*, Probe-Zusammenführung am 08.11.). Außerdem prüft
die Prüfung nicht neu, wenn ein Label wie `ohne-verlauf` nachträglich gesetzt wird.

**Entscheidung:**

1. Ein neuer Job „Übersichten erzeugen“ in `.github/workflows/pruefen.yml` führt bei jedem PR
   aus einem Branch dieses Repos `node tools/build.mjs` aus. Ändert sich etwas, schreibt er
   einen Commit „Übersichten neu erzeugt“ in den PR-Branch. Dafür hat er `contents: write`, nur
   in diesem Job, nie für `main`.
2. Weil ein Push mit dem Standard-Token keine Prüfung auslöst, startet der Job die Prüfung für
   den neuen Stand ausdrücklich (`workflow_dispatch` mit der PR-Nummer; dafür `actions: write`).
   „Stand gegen GitHub“ prüft dabei denselben PR.
3. Die Prüfung läuft auch beim Setzen und Entfernen eines Labels neu.
4. Schreibregel 8: Erzeugte Dateien werden nie von Hand nachgebaut. Wer den Build nicht
   ausführen kann, lässt sie weg. Bei einem Konflikt in einer erzeugten Datei genügt irgendeine
   Seite.

**Alternativen:**
- Nur melden, nicht schreiben: verworfen (Eigentümer, 08.11.). Die Arbeit bliebe beim Modell,
  und genau dort scheitert sie.
- Erzeugte Dateien nicht mehr im Repo führen, sondern nur nach dem Merge auf `main` bauen:
  Damit fielen auch die Konflikte weg. Nicht gewählt, weil der Bot dann auf `main` schreiben
  müsste und Agenten die Übersichten während der Arbeit nicht mehr lesen könnten. Diese
  Alternative bleibt offen, falls Konflikte weiter stören.
- Personal Access Token statt `workflow_dispatch`: verworfen. Das wäre ein Geheimnis mit Ablauf
  und mehr Rechten als nötig.

**Folgen:** Leichter: Modelle ohne Node (z. B. über einen Connector) liefern nur Quellen; die
Übersichten stimmen trotzdem. Konflikte in erzeugten Dateien sind trivial aufzulösen. Ein
nachträgliches Label wird sofort wirksam. Schwerer: Im PR erscheinen Commits von
`github-actions[bot]`. Wer lokal weiterarbeitet, muss vorher den Branch holen (`git pull`).
Läuft ein PR in einen Konflikt, startet GitHub keine Prüfung, bis der Konflikt gelöst ist; das
löst diese Entscheidung nicht. Code aus dem PR-Branch läuft mit Schreibrecht auf diesen Branch.
Das ist vertretbar, weil nur Branches dieses Repos betroffen sind, deren Autoren ohnehin
schreiben dürfen. Geändert: `pruefen.yml`, `tools/stand-github.mjs`, Schreibregel 8.

**Rückgängig:** Den Job `uebersichten` und die Eingabe `workflow_dispatch` aus `pruefen.yml`
entfernen, Schreibregel 8 auf den alten Wortlaut setzen und diese Datei auf „abgelöst“ setzen.
