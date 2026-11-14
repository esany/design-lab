---
thema: Werke und Gestaltung
stand: neue Experimente erwünscht (auch als Tests des Systems, Eigentümer 13.11.); Flyer fertig; private Zielbild-Seiten der Werke laufen bei Cloudflare (14.11.): Werke-Repo verbunden, jede Änderung baut neu, Haupt- und Vorschau-Adressen nur mit seiner E-Mail zugänglich; Adresse im README des Werke-Repos
naechster_schritt: Der Eigentümer wählt das nächste Experiment.
offen: [8, 9, 23, 24, 26, 27]
---

# Thema: Werke und Gestaltung

**Zuletzt fortgeschrieben:** 14.11.2026 (Claude, Cloudflare eingerichtet)

**Private Zielbild-Seiten (14.11.):** Cloudflare Pages, Projekt aus `esany/werke`, Build
`bash seiten.sh`, Ausgabe `_site`. Zwei Zugangsregeln in Cloudflare Zero Trust: Hauptadresse
„Nur Eigentümer“ (seine E-Mail), Vorschau-Adressen „Allow Members“ (nur Kontomitglieder, also er).
Anmeldung über Einmal-Code per E-Mail. Die GitHub-App von Cloudflare sieht derzeit alle Repos des
Kontos; auf `werke` allein einschränken wäre sauberer (GitHub → Settings → Applications); Eigentümer 14.11.: „mache erstmal nicht“. Anmeldung vom Eigentümer getestet: „läuft“ (14.11.).

## In Worten

**Wo wir stehen:** **Neue Experimente sind ausdrücklich erwünscht.** Was ruht, ist nur die
Detailarbeit an bestehenden Experimenten (z. B. Kontrast nachoptimieren), weil sie teure Tokens
kostet und gerade nichts Neues bringt (Klarstellung des Eigentümers, 29.10.). Die Lesart „Werke
ruhen ganz, bis das System in Ordnung ist“ war falsch.

**Zuletzt fertig:** der Flyer, in vier Runden entworfen und freigegeben. Offen ist dort nur die
Antwortkarte. Die Werkdateien liegen privat in `esany/werke`, Lizenzschriften nur beim
Eigentümer. Aus dem Flyer sind entstanden: das Manifest „Gestaltung dient“, die Duden-Regel,
das Fachpaket „Form“ und die Werkzeuge für den Feinsatz.

**Wartet auf die Wiederaufnahme (Vorschläge, noch nicht freigegeben):**
- Raster als Programm: Das Raster wird als Regel geschrieben, und alles folgt ihm. Offen ist
  der Arbeitsort (Browser empfohlen).
- Den Entwurfsprozess sichtbar machen: Vergleich, Laborbuch, Entscheidungen.
- Die Labor-Website zeigt Stand, Manifest, Fachpakete und Experimente.
- Fachpaket „Form“, Abschnitt Raster und Layout.
- Ein erstes Werk zum Vermitteln mit Profi-Werkzeug.
- Generative Gestaltung als Referenzbibliothek.

**Sicherung der Werke (Entscheidung 0026, privates Repo `esany/werke`):** angelegt. Offen laut
dem Pull Request dazu: die Claude-App auf GitHub für `werke` freischalten, damit Cloud-Agenten
ohne Browser schreiben können, und eine zweite Kopie außerhalb von GitHub.

**Beim Wiederaufnehmen:** Der Eigentümer wählt, womit es losgeht. Dann wird das führende Issue
festgelegt.

<details><summary>Für die Modelle: Nummern</summary>

- Alle `entwurf`: #24 (Raster als Programm), #23 (Entwurfsprozess), #26 (Website), #27
  (Fachpaket Form, Raster), #8 (Vermitteln), #9 (Generative Gestaltung).
- Grundlagen: `experiments/` (Flyer), `research/2026-10-raster-als-programm/konzept.md`,
  `experiments/2026-10-entwurfsprozess.md`.
- #23 und #61 berühren dasselbe Feld; die Reihenfolge entscheidet der Eigentümer.
</details>
