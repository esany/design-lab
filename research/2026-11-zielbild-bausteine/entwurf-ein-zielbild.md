# Entwurf: ein Zielbild für das Labor

**13.11.2026 · Claude (Opus 5.5) · Entwurf zur Prüfung durch den Eigentümer, nichts umgesetzt · Folgt aus Bug Flickenteppich (#216) · Dient A01, A14, A18, A22, A33**

**Herkunft:**
- Eigentümer, 13.11.: „Ich will nicht mehrere Zielbildseiten sondern eine … organische, ganzheitliche, systemische, transdisziplinäre Entwicklung und Entwurfsarbeit … kein Flickenteppich“.
- Eigentümer, 13.11.: „Alle Rückfragen zu verschiedenen Strängen, Status quo und Freigaben … transparent sichtbar und thematisch navigierbar … Prios abstimmen … Feedback punktuell oder zu allen offenen Punkten“.
- Eigentümer, 13.11.: „Ohne Kopie noch besser“.
- Eigentümer, 13.11.: Look and Feel und eine semantische Prüfung der Farbigkeit, Signalfarben im ganzen System verbunden.
- Werke behalten ihr eigenes Zielbild (privat, gleicher Ablauf).

## 1 · Was es ist

Das Zielbild ist eine Seite, aus einem Datensatz erzeugt. Es zeigt das Labor als ein Gefüge: Stränge, die sich gegenseitig stützen, und keine Sammlung von Themen-Seiten. Heute liegen zwei Seiten nebeneinander: der Leitfaden mit Iteration 7 und 76 Punkten und Bug #200 mit Iteration 3 und 70 Punkten. Dazu kommen offene Fragen in den Merkzetteln. Das alles geht darin auf.

## 2 · Aufbau

**Stränge als Dimension, nicht als Seite.** Jeder Punkt trägt einen Strang:

- Leitfaden
- Arbeitsweise mit KI (Bug #200 und #216)
- Fundstücke
- System und Pflege
- Werke: nur der Stand, ohne Inhalte

Ein Strang ist ein Filter. Die Grenze zwischen Strängen ist durchlässig.

**Verbindungen sichtbar.** Punkte verweisen heute schon aufeinander („stützt“). Neu gelten diese Verweise auch über Stränge hinweg. Beim Punkt steht, was er trägt und was ihn trägt, auch in anderen Strängen. Zum Beispiel stützt die Fundstück-Sichtung („Fachwissen erfassen“) den Leitfaden („Fachwissen als Module“). So wird die Wechselwirkung lesbar, die eine Themen-Seite verdeckt.

**Drei Ansichten derselben Punkte:**

1. **Du bist dran:** Freigaben, Fragen an dich, „muss besser“ ohne Antwort. Geordnet nach Priorität, über alle Stränge.
2. **Stand:** je Strang, was gilt, was läuft und was offen ist, mit der Iteration des Strangs.
3. **Alles:** mit Filtern nach Strang, Status und Priorität.

**Iterationen:** Jeder Strang zählt seine eigene Iteration. Die Seite zeigt, was sich seit deiner letzten Rückmeldung geändert hat, egal in welchem Strang.

## 3 · Rückmeldung ohne Kopie

Du kannst einen einzelnen Punkt beurteilen („passt“, „muss besser“, Text) oder alle offenen auf einmal. Der Rückweg landet als Datei im Repo und damit transparent im Verlauf, nicht in einem Artefakt (a59).

| Variante | Wie | Für dich | Offen |
|---|---|---|---|
| **A** | Kleiner Dienst bei Cloudflare (Gratis-Stufe, nach dem Werk-Test): Die Seite schickt dein Urteil, der Dienst legt es als Datei ins Repo. | Klicken, fertig | Ein Zugangsschlüssel für GitHub muss bei Cloudflare hinterlegt werden; das richtest du einmal mit mir ein. |
| **B** | Bis A steht: Kopieren in den Chat wie heute. | Kopieren | Nichts; Übergang. |

Empfehlung: A, eingerichtet zusammen mit der Werk-Seite. Bis dahin gilt B.

## 4 · Farbe als Bedeutung

**Bestandsaufnahme (belegt, `tools/zielbild/vorlage.html`):**

| Farbe | Heute | Bedeutungen |
|---|---|---|
| Signalrot | Befund-Etikett, „muss besser“, Änderungsstrich, Zahlenbilanz, fehlende Bestätigung | **fünf** |
| Grün | bestätigt, „passt“, Stütze bestätigt, „fest“ | eine: von dir abgesichert |
| Ocker | Vorschlag | eine |
| Grau | Ableitung, ergänzt, Nebeninfo | zwei |

Das Signal ist verwässert. Wer Rot sieht, weiß nicht, ob er handeln muss.

**Vorschlag, je Farbe genau eine Bedeutung im ganzen Labor:**
- **Signalrot:** Du bist dran. Freigabe, Frage an dich oder deine Korrektur steht aus. Sonst nichts.
- **Grün:** Von dir bestätigt.
- **Ocker:** offen gedacht, also Vorschlag oder Hypothese. Noch nicht entschieden.
- **Grundfarbe und Form statt Farbe:** Befund, Änderung und Zahlen. Änderungen zeigt ein Strich in der Grundfarbe, Zahlen stehen ohne Farbe.

**Verbunden heißt:** Die Farben werden in den Tokens als Rollen benannt (signal, bestätigt, offen), nicht als Farbtöne. Startseite, Studien und Zielbild beziehen sie über die Rolle. Die Prüfung im Build meldet, wenn eine Rolle für etwas anderes benutzt wird. So bleibt das Signal überall ein Signal.

**Variante:** Ocker entfällt. Vorschläge erscheinen in der Grundfarbe mit dem Wort „Vorschlag“. Das ist ruhiger, aber Hypothese und Beleg unterscheiden sich dann weniger auf einen Blick.

## 5 · Was mit dem Bestehenden geschieht

- Die Punkte beider Seiten wandern mit Strang-Angabe in den einen Datensatz. Ihre Geschichte bleibt erhalten: Wortlaut, vorher, Bestätigungen.
- Die alten Seiten werden archiviert, nicht gelöscht.
- Offene Fragen aus den Merkzetteln werden Punkte im Zielbild. Die Merkzettel verweisen dann darauf, statt sie doppelt zu führen.
- Der Generator bleibt das eine Werkzeug. Der Build lässt nur ein Labor-Zielbild zu (Folgerung 3 aus #216); Werke bauen ihres mit demselben Werkzeug in ihrem Repo.
- Die Website veröffentlicht das Zielbild. Die Prüfung stellt sicher, dass jede verlinkte Seite in der Website steht (Folgerung 2 aus #216).

## 6 · Was du entscheidest

1. Stimmt der Aufbau: Stränge als Dimension, Verbindungen über Stränge, drei Ansichten?
2. Farbe: Vorschlag mit Ocker oder Variante ohne?
3. Rückweg: A nach dem Werk-Test?

## Gegenprobe

Gefahr: eine Riesen-Seite, die alles zeigt und nichts ordnet. Gegenmittel: Die Ansicht „Du bist dran“ ist der Einstieg. Alles Übrige ist eine Ebene tiefer.

Prüfung des Entwurfs vor dem Bau durch ein Modell einer anderen Familie (Prinzip 4).
