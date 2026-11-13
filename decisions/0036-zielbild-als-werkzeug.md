---
status: gültig
datum: 2026-11-11
entschieden_von: Eigentümer, Zielbild Bug #200, 13.11.2026 („Unbedingt! Alle Rückfragen zu verschiedenen Strängen, Status quo und Freigaben können wir dort transparent sichtbar und thematisch navigierbar machen“)
dient: A08, A14, A19, A25, A32
perspektive: system, gebrauch
---

# 0036 · Zielbild als Werkzeug für jedes Werk

`perspektive:` system, gebrauch.

**Anlass:** Die Zielbild-Seite entstand für den Leitfaden (PR #167) und wurde in einem Werk von
Hand nachgebaut, mit eigener Kopie der Vorlage und eigenem Build. Der Eigentümer hat am 11.11.
gebeten, den Generator allgemein zu machen und die Gestaltungsprinzipien der Seite als Bausteine
abzulegen.

**Entscheidung:** Es gibt ein Werkzeug `tools/zielbild.mjs` mit einer neutralen
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
Ein Werk hängt von einem Klon des Labors ab; Änderungen an der Vorlage wirken auf alle Werke. 

**Umsetzung (13.11.2026):** `tools/build.mjs` erzeugt jede Datei `…/zielbild/punkte.json` im Labor
mit diesem Werkzeug und prüft, ob die Seite aktuell ist; die eigene Vorlage und Prüfung des
Zielbilds Leitfaden sind abgelöst (Vorlage archiviert). Die Prüffälle laufen in der automatischen
Prüfung. Die Startseite listet alle Zielbilder. Offen: Kontrast nach WCAG AA (Grau und Signalrot
bei kleiner Schrift), Doppelbedeutung der Farben, Rückweg von der Seite ins Labor; das sind
Gestaltungsfragen an den Eigentümer im Zielbild Bug #200.

**Rückgängig:** PR revertieren; Werke behalten ihre zuletzt erzeugte Seite.
