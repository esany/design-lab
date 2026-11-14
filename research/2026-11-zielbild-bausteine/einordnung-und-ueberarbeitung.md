# Einordnung über alle Stränge und Überarbeitung des Zielbilds

**14.11.2026 · Claude (Opus 5.5), Orchestrator · Entwurf, nichts umgebaut · Auftrag des Eigentümers im Chat, 14.11. · Folgt aus Eingang a63 · Dient A01, A14, A18, A22, A33**

**Herkunft:**
- Eigentümer, 14.11.: „Was muss ich wissen, was brauche ich, was nicht.. ich finde das ui und die Informationsarchitektur noch nicht optimal gelöst.. es ist für mich komplizierter statt übersichtlicher geworden. Auch zeigt es wieder tendenzen Dinge mit neuen Anforderungen anzuklatschen“ (a63).
- Eigentümer, 14.11.: „Ich brauche aber zusätzlich auch eine Einordnung, was überhaupt über alle Stränge hinweg als erstes bearbeitet werden sollte? Was ist Systembau, was fachliche Erweiterung des Systems, was zahlt auf aktuelle Projekte/Werke ein. Wir haben schwere Bugs und Fehler. Welche Relation haben die einzelnen Aufträge, was löst was, wo sind die Blocker, was muss erledigt werden, was liegt schon bereit und läuft. Ich will das nicht machen müssen, ich brauche aber dein Feedback bzw. Transparenz, um dich zu prüfen und bewerten zu können. Die Orchestrierung liegt bei dir, ich bin aber PO und du musst dich verantworten.“

**Grenze:** Einordnung und Reihenfolge sind meine Ableitung als Orchestrator. Die Fakten (Stand, wer, blockiert) sind belegt mit Fundstelle; Gewichtung und Reihenfolge sind abgeleitet. Du prüfst sie als Product Owner.

## In fünf Sätzen

Der schwerste offene Fehler ist derselbe wie seit Bug #200: Ich löse Teile, ohne das Ganze zu entwerfen. Heute zeigte er sich am Zielbild, das dir mehr Arbeit macht statt weniger (a63). Darum kommt zuerst die Überarbeitung des Zielbilds, und zwar auf Grundlage dieser Einordnung, denn genau sie fehlt dem Labor als „Modell des Ganzen“. Danach eine gemeinsame Sitzung am Rechner von etwa 20 Minuten: Cloudflare für die Werke einrichten (das löst auch das Kopieren) und den Hauptzweig schützen. Fachliches (Werkbuch) und ein Werk-Experiment folgen; die Verwaltung erledige ich im Hintergrund und berichte nur, was sich ändert.

## 1 · Was es gibt: vier Arten von Arbeit

| Art | Was dazugehört | Wie es steht |
|---|---|---|
| **Fehler im Zusammenspiel** (schwer) | Bug #200 (Modelle verfehlen deine Anforderungen), Bug Flickenteppich #216, Eingang a63 (Zielbild komplizierter), Bug Fundstück-Bewertung #180 | #180 im Skill behoben (Prüffrage Bedarf, Prüffall `fundstueck-bedarf`), offen nur die Osmani-Entscheidung. #216: Folgerungen 1–4 gebaut (ein Zielbild, Website-Prüfung, kein zweites Zielbild, Farbrollen). #200: Kern offen; O1-Rest läuft, Verhaltensprüfungen (O3) vorbereitet. a63 zeigt: Der Kern ist nicht gelöst. |
| **Systembau** (wie das Labor arbeitet) | Zielbild überarbeiten, Rückweg ohne Kopieren, Hauptzweig schützen (#40), Neustart-Test (#109), Betriebstexte (O1-Rest), Verhaltensprüfungen (O3), Issue-Pflege, Befunde zu Fehlermustern (#56/#100), Regeln auf Probe, Anforderungen ohne Zuordnung, Klärung Projektgrundlage (#170), docs-Frage (#84) | Vieles liegt seit Ende Oktober. Läuft automatisch: Orchestrierung zweimal täglich, ChatGPT alle drei Stunden, Radar und Pflege. |
| **Fachliche Erweiterung** | Werkbuch (Leitfaden), Recherche Teil 2, Fragenliste in alten Chats (#189), KI-Fachpaket, Fachpakete neu schneiden, Visualisierungssysteme (4 Fragen), Wissen erschließen (5 Fragen), Fundstücke open-design (#98) und dataviz-skills (#178) | Werkbuch startklar, wartet nur auf deine Freigabe. Alles andere wartet auf Fragen an dich oder auf den Leitfaden. |
| **Werke und Projekte** | Zielbild-Seiten der Werke bei Cloudflare, nächstes Experiment, Raster als Programm (#24), fünf ruhende Werk-Ideen (#8, #9, #23, #26, #27), Sicherung der Werke, Antwortkarte des Flyers | Cloudflare startklar, braucht dich am Rechner. Werk-Ideen ruhen seit 28.10. |

**Fundstellen (belegt):** offene Issues auf GitHub, Abruf 14.11.; `zielbild/punkte.json` (Aufträge mit `stand` und `wer`); Merkzettel in `anschluss/`; `.agents/skills/fundstueck/SKILL.md`, Punkt 2; Kommentar in #40 vom 29.10. (Claude blockiert: Proxy verweigert Schreiben auf Einstellungen, getestet); Kommentar in #100 vom 13.11. (Gegenlesen durch ChatGPT liegt vor).

## 2 · Was löst was, und wo es hängt

```
Einordnung (dieses Papier) ──► Zielbild überarbeiten ──► du arbeitest dort ohne Mühe
        │                              ▲                         │
        │  ist der erste Teil des      │ Rückweg ohne Kopieren   ▼
        │  „Modells des Ganzen“        │                  Rückmeldungen kommen an,
        ▼  (u-tiefer, O2, u6)          │                  Verhaltensprüfungen (O3)
Bug #200 / #216 / a63, Kern     Cloudflare einrichten ◄── braucht dich am Rechner (Konto)
                                       │
                                       ├──► Zielbild-Seiten der Werke
                                       └──► nächstes Werk-Experiment
                                                   │
                     Raster als Programm (#24) ◄───┘ ist zugleich Pilot für
                                                     Osmani-Abläufe (#180) und Systemtest
Hauptzweig schützen (#40) ── unabhängig, 5 Minuten; gebündelt mit Cloudflare
Werkbuch ── unabhängig, startklar; bekommt Wirkung erst, wenn das Zielbild trägt
```

| Auftrag | löst oder entblockt | blockiert durch | bereit? | wer |
|---|---|---|---|---|
| Einordnung (dieses Papier) | gibt dem Zielbild das fehlende „was worauf einzahlt“ (u6-priorisierung, O2) | – | erledigt mit diesem Papier | Claude |
| Zielbild überarbeiten | a63; Kern von #216; deine Prüfbarkeit | dein Urteil zu den Varianten (Abschnitt 4) | nach deinem Urteil | Claude, Gegenprüfung ChatGPT |
| Cloudflare einrichten | Rückweg ohne Kopieren; Werk-Zielbilder | du am Rechner (Konto, Zugang nur für dich) | startklar | du und Claude im Browser |
| Hauptzweig schützen (#40) | Schutz vor Überschreiben durch jedes Modell | Claude darf Einstellungen nicht schreiben (belegt, 29.10.) | startklar | du, 5 Minuten, mit meiner Anleitung |
| Betriebstexte widerspruchsfrei (O1-Rest) | U1 in Bug #200 | – | läuft | Claude |
| Verhaltensprüfungen (O3) | Alarmanlage für Rückfälle (u-alarm) | sinnvoll erst nach der Zielbild-Überarbeitung, sonst prüfen sie den alten Zustand | vorbereitet | Claude baut, ChatGPT prüft, du nimmst Stichproben ab |
| Werkbuch | Leitfaden wird ein Werk statt Punkte | deine Freigabe | startklar | Claude |
| Nächstes Experiment | Werk; testet das System (st-experimente) | Cloudflare | wartet | du wählst |
| Issue-Pflege, #56/#100, Regeln auf Probe, Neustart-Test | Ordnung im Bestand | – | bereit | Claude, im Hintergrund |

## 3 · Reihenfolge, die ich vorschlage, und warum

1. **Zielbild überarbeiten, mit dieser Einordnung als Inhalt.** Abgeleitet: Hier zeigt sich der schwere Fehler gerade, und jede Rückmeldung von dir läuft über diese Seite. Solange sie dir Arbeit macht, kostet alles andere doppelt.
2. **Eine Sitzung am Rechner, etwa 20 Minuten:** Cloudflare einrichten und den Hauptzweig schützen. Abgeleitet: Beides braucht dich, beides ist klein, und Cloudflare entblockt zwei Dinge auf einmal (Rückweg, Werk-Seiten).
3. **Im Hintergrund, ohne dich:** Issue-Pflege (ruhende Issues schließen, teilen oder neu zuschneiden), Befunde #56 mit dem Gegenlesen #100 abschließen, Betriebstexte (O1-Rest), Neustart-Test als frischer geplanter Lauf, Regeln auf Probe am 24.11. auswerten. Du bekommst je eine Zeile, was sich geändert hat.
4. **Werkbuch freigeben und ein Werk-Experiment wählen.** Mein Vorschlag fürs Experiment: Raster als Programm. Es testet das System, erprobt die Entwicklungsabläufe aus dem Fundstück Osmani und bringt ein Werk weiter (drei Stränge in einem Schritt).
5. **Verhaltensprüfungen (O3)** am überarbeiteten Zielbild und am Experiment, mit deinen Abnahmekriterien.
6. **Später, gebündelt in einer Sitzung:** die Fragen zu Wissen, Visualisierung und Fundstücken.

**Was ich bewusst nicht vorschlage:** neue Regeln, einen weiteren Prüfmechanismus, neue Seiten. Die Fehler entstanden durch Hinzufügen; die Antwort ist Überarbeiten.

## 4 · Die 25 Punkte bei „Du bist dran“, nach dem Grundmodell sortiert

Grundmodell: Zu dir gehen nur Bedeutung, Gestaltung, neue Regeln und schwer Umkehrbares; Verwaltung erledige ich.

| Gruppe | Punkte | Zahl |
|---|---|---|
| **Deine Entscheidung, jetzt** | Werkbuch freigeben; nächstes Experiment wählen (mit Osmani-Pilot, zusammengelegt) | 2 |
| **Dein Handgriff, gebündelt in einer Sitzung** | Cloudflare einrichten; Hauptzweig schützen (mit Regelpause, zusammengelegt) | 2 |
| **Deine Entscheidung, später, gebündelt** | Wissen (4), Visualisierung (4), Fundstücke als Modus (0031), Fragenliste in alten Chats (#189), Sicherung der Werke | 11 |
| **Ich übernehme (Verwaltung)** | ruhende Entwurf-Issues sortieren (dir kommen nur Werk-Ideen zur Wahl), Regeln auf Probe auswerten, Neustart-Test, Issue-Prüfung im Labor (f02, überholt durch die geplanten Läufe) | 4 |
| **Geparkt** | Marke, paleo-type #408, fremde Issues, Pinterest-Boards | 4 |

Zusammen 23 Einträge aus 25 Punkten, weil Osmani und das nächste Experiment eine Entscheidung werden, ebenso Regelpause und Hauptzweig.

## 5 · Die Seite: drei Varianten für den ersten Bildschirm

Gemeinsam (aus deinen drei Fragen): oben „Was du wissen musst“ in wenigen Sätzen, dann „Was du brauchst“: nur deine Entscheidungen, höchstens drei sichtbar. Alles andere liegt eine Ebene tiefer. Keine Legende, keine Zahlenbilanz, keine sieben Filter vorne. Rückweg: Jede Antwort geht per „Senden“ direkt ins Labor, sobald Cloudflare steht; bis dahin heißt derselbe Knopf „Kopieren“, und es bleibt ein Knopf statt eines Ablaufs.

| | A · Lagebericht | B · Landkarte | C · Eins nach dem anderen |
|---|---|---|---|
| **Idee** | Wie ein kurzer Bericht: Lage, deine Entscheidungen, was ich tue | Die vier Arten von Arbeit als Bahnen, Aufträge als Knoten mit Pfeilen (löst, blockiert) | Eine Entscheidung pro Bildschirm, mit Kontext und Folge; danach die nächste |
| **Für dich gut** | schnell gelesen, vertraute Form | du siehst das Gefüge und kannst mich prüfen | am wenigsten auf einmal, gut auf dem Handy |
| **Risiko** | Gefüge nur als Text; Zusammenhänge gehen unter | auf dem Handy eng; braucht gute Gestaltung, sonst wieder kompliziert | Überblick fehlt; du siehst nicht, was ich sonst tue |
| **Rückweg** | Knopf unter jeder Entscheidung | Knopf im Detail eines Knotens | Knopf „Senden und weiter“ |

**Meine Empfehlung (abgeleitet):** A als Einstieg, B eine Ebene tiefer als „Wie es zusammenhängt“. A beantwortet „was muss ich wissen, was brauche ich“; B gibt dir die Transparenz, um mich zu prüfen. C wäre der richtige Modus für eine Sitzung, in der du nur entscheiden willst, und kann später ein Knopf in A werden. Skizzen: `skizzen/a-lagebericht.html`, `skizzen/b-landkarte.html`, `skizzen/c-eins-nach-dem-anderen.html`.

## 6 · Wofür ich mich verantworte

Heute (belegt, Eingänge in `daten/arbeitsweise.json`): Startprompt ohne Repo-Namen (a61); das Zielbild komplizierter gebaut statt übersichtlicher (a63); eine Nebenfrage als Hauptfrage gestellt (a62); bei „Du bist dran“ Verwaltung an dich gegeben, entgegen dem Grundmodell (a63). Gemeinsames Muster (abgeleitet): Ich prüfe gegen Einzelanforderungen, die ich aufgezählt habe, nicht gegen die Frage, ob es für dich einfacher wird. Gegenmittel in diesem Entwurf: Ich zeige dir zuerst Skizzen am echten Inhalt und baue erst nach deinem Urteil; die Gegenprüfung durch ChatGPT bekommt als erste Frage „Wird es für den Eigentümer einfacher?“.

## Urteil des Eigentümers (14.11.)

Skizze B ist keine Landkarte; die Fachpakete zur Diagrammatik gibt es, vorschnelle, ungeprüfte Zuschreibungen braucht er nicht. Skizze C gut. Dazu: Das sind Anforderungen, keine Gesprächsthemen; mehrere Perspektiven, individuelle Sichten, ein großer Überblick mit Tags. Weiter in der [Analyse der Arbeitsoberfläche](../2026-11-arbeitsoberflaeche/analyse.md); Wortlaut: `daten/arbeitsweise.json`, a64.

## Gegenprobe

Gefahr: Auch diese Einordnung ist wieder ein langer Text. Gegenmittel: Sie ist als Inhalt für die Seite gedacht (Variante A oben, B darunter), nicht als Dokument zum Lesen. Diese Datei ist die Herkunft für Modelle und Entwickler.
