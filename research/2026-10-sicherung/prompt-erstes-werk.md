# Prompt: erstes Werk (Flyer) nach `esany/werke` hochladen

Für den Chat, in dem die Flyer-Dateien liegen. Bezug: #25, Entscheidung 0026. Der Eigentümer
kopiert den Block unten unverändert dorthin.

```text
Aufgabe: Lege die Werkdateien des Flyers als erstes Werk im privaten GitHub-Repo esany/werke ab
(https://github.com/esany/werke). Das Repo ist nur eine Ablage; das Labor bleibt esany/design-lab.

Zuerst lesen (im Repo esany/werke): README.md, AGENTS.md, werke/_vorlage/werk.md.

Zugang:
- Hänge esany/werke mit Schreibrecht an (Repo hinzufügen / GitHub-Connector). Geht das nicht,
  weil der Zugriff fehlt: sag mir genau das und hör auf. Dann muss ich die Claude-App auf GitHub
  für esany/werke freischalten (Settings → Applications → Claude → Configure). Nicht anderswo
  hochladen, nicht in ein anderes Repo, nicht ins öffentliche design-lab.

Was hochgeladen wird:
- Ordner: werke/2026-<kurzname>/ (kurzname klein, mit Bindestrichen, z. B. 2026-flyer-<anlass>).
- Darin: werk.md nach der Vorlage, ausgefüllt (Jahr, Anlass, meine Rolle, fremde Inhalte ja/nein
  und welche, Rechte, Schriften NUR als Namen, Werkzeuge, Bezug im Labor:
  experiments/2026-10-print-pagedjs/). Unklares als „offen“ eintragen, nicht raten.
- Daneben die Werkdateien: Satzquellen (HTML/CSS), Druck-PDF(s), Bilder, Vergleiche, Protokolle.
  In werk.md eine Tabelle: Datei · was · Stand (Entwurf / freigegeben / gedruckt). Die
  freigegebene Fassung ist die Variante „lesbar im Objekt“.

Nie hochladen:
- Schriftdateien (.otf .ttf .woff .woff2 .eot, auch in Unterordnern oder in ZIPs). Vor dem Commit
  danach suchen und entfernen; im Zweifel fragen.
- Zugangsdaten, Schlüssel, private Notizen, die nicht zum Werk gehören.
- Kein Git LFS. Dateien über 50 MiB vorher melden; über 100 MiB geht nicht.

Arbeitsweise:
- Branch werk/<kurzname>, ein Pull Request auf main. Die Prüfung „Prüfen“ muss grün sein; dann
  selbst übernehmen. Ist sie rot: Ursache nennen, nicht umgehen.
- Nichts löschen oder umschreiben, was schon im Repo liegt; Versionsgeschichte nicht ändern.

Fertig, wenn (je Punkt Ja / Nein / nicht geprüft, mit Beleg):
1. werke/2026-<kurzname>/werk.md existiert und alle Felder sind gefüllt oder als „offen“ markiert.
2. Jede hochgeladene Datei steht in der Dateitabelle von werk.md.
3. Keine Schriftdatei im Repo (Prüfung grün; Dateiliste angesehen).
4. Pull Request übernommen, Prüfung auf main grün.

Rückmeldung an mich (kurz, als ein Block zum Weitergeben): Ordnerpfad, Liste der Dateien mit
Größe, was offen geblieben ist, Link zum Pull Request. Keine Inhalte der Dateien.
```

## Danach (im Labor)

Der Eigentümer gibt die Rückmeldung an den Labor-Chat. Der trägt eine Zeile in `stand.md` ein
(Verweis auf den Ordner, ohne Inhalte) und schließt den Teil „erstes Werk“ in #25.
