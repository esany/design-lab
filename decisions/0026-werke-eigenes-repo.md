---
status: freigegeben
datum: 2026-10-28
entschieden_von: Mensch („Ok, dann gern ein eigenes werk repo“, Chat 28.10.), Umsetzung durch den Agenten
dient: A16, A19
perspektive: system
---

# 0026 · Werkdateien in einem eigenen privaten Repo

**Anlass:** #25. Werkdateien mit fremden Inhalten (Flyer-Quellen, PDFs, Vergleiche) dürfen nicht
ins öffentliche Labor (Regel 5, A16). Geprüft wurde `esany/Portfolio`: privat, aber ein
Wissensraum, keine Dateiablage (`research/2026-10-sicherung/portfolio-pruefung.md`). Empfohlen
war Weg B.

## Entscheidung

- Werkdateien liegen in einem **eigenen privaten Repo: `esany/werke`** (angelegt 28.10.2026 vom
  Agenten im Browser des Eigentümers; Grundgerüst drin, Prüfung grün).
- **Das Labor bleibt `esany/design-lab`.** Im Werk-Repo stehen keine Regeln, kein Stand, keine
  Entscheidungen; nur Dateien und je Werk eine `werk.md` (Rolle, fremde Inhalte, Rechte,
  Schriften nur als Namen).
- **Schriften nie**, auch nicht privat. Eine Prüfung im Werk-Repo schlägt Alarm.
- Im Labor steht je Werk höchstens eine Zeile mit Verweis, ohne Inhalte.
- `esany/Portfolio` bleibt unberührt. Ob es später auf Werke verweist, entscheidet der Eigentümer
  dort.

## Was nicht entschieden ist

- Zugriff für Cloud-Agenten auf `esany/werke`: fehlt (die Claude-App auf GitHub ist nur für
  ausgewählte Repos freigeschaltet). Bis dahin arbeitet ein Agent dort nur über den Browser.

- Zweite Kopie außerhalb GitHub (sonst ist es keine Sicherung): offen, kann nur der Rechner des
  Eigentümers leisten.
- Git LFS: nicht vorgesehen, bis getestet ist, dass Agenten LFS-Dateien lesen können.

## Grenzen (belegt, GitHub-Doku)

Browser-Upload höchstens 25 MiB je Datei; Sperre ab 100 MiB; Repo-Größe ideal unter 1 GB.
Quelle: [About large files on GitHub](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github).

**Rückgängig:** „Werk-Repo rückgängig“ (das Repo selbst löscht nur der Eigentümer).
