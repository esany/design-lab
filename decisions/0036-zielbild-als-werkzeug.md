---
status: Vorschlag
datum: 2026-11-11
entschieden_von: (nach der Antwort des Menschen eintragen)
dient: A08, A14, A19, A25, A32
perspektive: system, gebrauch
---

# 0036 · Zielbild als Werkzeug für jedes Werk

`perspektive:` system, gebrauch.

**Anlass:** Die Zielbild-Seite entstand für den Leitfaden (PR #167) und wurde in einem Werk von
Hand nachgebaut, mit eigener Kopie der Vorlage und eigenem Build. Der Eigentümer hat am 11.11.
gebeten, den Generator allgemein zu machen und die Gestaltungsprinzipien der Seite als Bausteine
abzulegen.

**Entscheidung (Vorschlag):** Es gibt ein Werkzeug `tools/zielbild.mjs` mit einer neutralen
Vorlage `tools/zielbild/vorlage.html`. Es prüft die Daten eines Zielbilds und erzeugt die Seite;
Farben und Schriften kommen aus den Tokens des Labors. Werke nutzen es aus einem Klon des Labors,
ohne eigene Kopie der Vorlage. Die acht Bausteine stehen im
[Befund](../research/2026-11-zielbild-bausteine/befund.md); wo sie dauerhaft hingehören (Leitfaden,
Fachpaket, System), entscheidet der Mensch je Lücke.

**Alternativen:** Vorlage je Werk kopieren (so bisher; Kopien laufen auseinander, Verbesserungen
kommen nicht an). Zielbild nur im Build des Labors für den Leitfaden (PR #167; Werke könnten es
nicht nutzen). Ein fremdes Werkzeug für Rückmeldungen (Formular, Kommentarfunktion; braucht Konto
oder Server, widerspricht A14 und A15).

**Folgen:** Leichter: ein Ort für Vorlage und Prüfung; ein Werk braucht nur Daten. PR #167 kann
seine eigene Vorlage und den Abschnitt in `tools/build.mjs` durch das Werkzeug ersetzen. Schwerer:
Ein Werk hängt von einem Klon des Labors ab; Änderungen an der Vorlage wirken auf alle Werke. Die
Prüffälle `tools/zielbild-test.mjs` laufen noch nicht in der automatischen Prüfung; dazu wäre
`.github/workflows/pruefen.yml` zu ergänzen (Rückfrage).

**Rückgängig:** PR revertieren; Werke behalten ihre zuletzt erzeugte Seite.
