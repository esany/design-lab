# Passung des Fundstück-Ablaufs zum Labor

**13.11.2026 · ChatGPT · Gegenprüfung zu #179 · Dient: A01, A04, A05, A06, A10, A27**

## In Worten (fünf Sätze für den Eigentümer)

Der Fundstück-Ablauf schützt das Labor bereits gut davor, unpassende Werkzeuge oder fremde Regeln blind zu übernehmen. Er fragt aber noch nicht zuverlässig, welches **Gestaltungswissen** in einem Fundstück steckt und was davon für das ganze Labor nutzbar ist. Der Fall mit den Visualisierungs-Skills zeigt diese Lücke deutlich: Erst nach einer Korrektur wurden Handwerk, Gestaltungssysteme, Bewegung und Qualitätsmaßstäbe sichtbar. Das ist nicht allein ein Fehler des Skills, denn die ausführende Sichtung hatte auch den bestehenden fachlichen Maßstab nicht vollständig angewandt. Ich empfehle deshalb eine gezielte Ergänzung des vorhandenen Ablaufs statt eines zweiten Systems, ohne schon jetzt eine neue Regel einzuführen.

## 1 · Was der Ablauf heute fragt

Quelle: `.agents/skills/fundstueck/SKILL.md`, Schritte 1–7 und „Aus fremden Skills übernehmen“.

| Schritt | Frage | Deckt ab (Werkzeug · Fach · System · Haltung) |
|---|---|---|
| 1 Was ist es? | Was ist das Wirkprinzip, wer ist Träger, welche Lizenz und welcher Stand? | Werkzeug, Herkunft; Fachinhalt **nicht ausdrücklich** |
| 2 Bedarf zuerst | Welcher Anforderung A.. dient es und welche Lücke schließt es? | System, Fach *indirekt* über A04/A01; verhindert „passt nicht, weil wir es noch nicht können“ |
| 3 Vergleich | Welche Fähigkeit existiert schon, welche ergänzt oder ersetzt das Fundstück, mit welchem Risiko? | Werkzeug und System; Fach nur, **wenn die Fähigkeit als Fachwissen erkannt wurde** |
| 4 Prüfen | Überschneidung, Offenheit, Sicherheit, Betrieb, Pflege, Rückbau, Kosten? | Werkzeug und System; weder Kanon noch Qualitäts- und Entwurfswissen ausdrücklich |
| 5 Integrationsgrad | Beobachten, Erkenntnis, Arbeitsmuster, Pilot, Integration oder Referenz? | System und Wissen; Zielort eines fachlichen Befunds nicht ausdrücklich |
| 6 Status | Beobachten, Pilot, integriert, bewusst bewahren, verwerfen? | Lebenszyklus, nicht Qualität des Fachwissens |
| 7 Festhalten | Radar oder begründeter Verzicht und Stand? | Werkzeug-/Projektgedächtnis; kein ausdrücklich genannter Korpus- oder Fachpaketweg |
| Fremde Skills | Welches belegte wiederverwendbare Ablaufprinzip übernehmen, ohne fremde Rechte/Skripte? | Methode und Sicherheit; fachlicher Gehalt jenseits des Ablaufs bleibt offen |
| Zum Menschen | Betrifft es Installation, Sicherheit, Kosten oder Konten? | Verantwortung; **Bedeutung und Haltung** sind hier nicht ausdrücklich genannt, gelten aber nach `AGENTS.md` |

**Urteil:** Die Fähigkeit „Fundstück als Quelle von Fachwissen“ ist möglich, aber nicht systematisch abgefragt. Ein Skill kann korrekt befolgt werden und trotzdem nur die technische Hülle bewerten.

## 2 · Was das Labor von einem Fundstück braucht

| Anforderung oder Leitbild | Was daraus für Fundstücke folgt | Quelle (Datei, Abschnitt) |
|---|---|---|
| **A01 – gesamte Entwurfsarbeit** | Nach Feld und Tätigkeit unterscheiden: Gestaltung, Typografie, Print, Animation, Informationsvisualisierung, Kunst, Vermittlung; nicht nur Software-Werkzeug | `intent.md`, A01 |
| **A04 – Fachwissen als Werkzeug** | Kanon, Best Practice, Stand der Technik und Qualitätskriterien samt Herkunft als möglichen Ertrag suchen | `intent.md`, A04 |
| **A05 – Rolle der KI je Kontext** | Für das Fundstück benennen, was die KI leisten kann, wo sie unsicher ist und wo das menschliche Urteil bleibt | `intent.md`, A05 |
| **A06 – gegen Mittelmaß** | Vorbilder, Gestaltungshaltung und typische Standardlösungen identifizieren; keine Stilentscheidung durch den Agenten | `intent.md`, A06; `principles.md`, 1 |
| **A10 – nichts nachbauen** | Vor Neuem bestehende Quellen, Fachpakete, Skills und Werkzeuge vergleichen | `intent.md`, A10; `fundstueck/SKILL.md`, 2–4 |
| **A27 – Fundstücke bewerten** | Auch Text, Person, Sammlung, Methode und Haltung als Fundstück zulassen; Ergebnis mit Evidenzstatus sichern | `intent.md`, A27; `decisions/0031-fundstuecke-als-modus.md` (Vorschlag, nicht gültig) |
| **Gestaltung dient** | Zweck, Publikum, Wahrnehmungssituation und Risiko vor Technik; ein Fundstück kann eine fachliche Sichtweise statt ein Tool liefern | `manifest.md`, Leitsätze 1–7 |
| **Werk und System getrennt** | Nutzen für ein einzelnes Werk und für ein übergreifendes Gestaltungssystem getrennt erfassen | `principles.md`, 9 |
| **Wissen in acht Dimensionen** | Kanon, Praxis, Technikstand, Kriterien, Mittelmaß, Verlernen, KI-Rolle, Werkzeugkette als **Prüfraster**, nicht als Pflicht zur Vollständigkeit | `.agents/skills/fachpaket-vermitteln/SKILL.md`, Abschnitte 1–8 |
| **Leiter Zweck bis Technik** | Fachliches auf Ebenen 0–5 verorten; reine Toolprüfung deckt nur die unterste Ebene ab | `research/2026-11-visualisierungssysteme/befund.md`, §1 (explizit **abgeleitet**, kein universelles Naturgesetz) |

## 3 · Lücken und Gegenproben

| Lücke / Prüfdimension | Beleg am Prüffall #178 / #98 | Folge und Status |
|---|---|---|
| **Felder aus A01** | #178 nennt in der **neu gefassten** Sichtung Informationsvisualisierung, Diagrammatik, Wissensvermittlung, Animation, Print und Karten; die ursprüngliche technische Sichtung war nach Issue-Text überholt | **Belegt:** Fachliche Reichweite wurde erst nach Korrektur explizit; Skill-Schritt 1 fordert sie nicht |
| **Acht Fachpaket-Abschnitte** | #178 enthält erst nach Neufassung Beiträge zu Kanon, Best Practice, Technikstand, Qualitätskriterien, Mittelmaß, KI-Rolle und Werkzeugkette; „Verlernen“ nur indirekt | **Belegt:** ohne Raster bleiben Fachbestandteile leicht unentdeckt; nicht jedes Fundstück muss alle acht liefern |
| **Leiter 0–5** | #178 verortet Holtz auf Ebenen 2–5 und nennt fehlenden Zweck/Haltung; die erste Sichtung laut Issue nur Werkzeug und Risiko | **Belegt:** Einordnung zeigt *wo* Fachwissen wirkt und wo die Quelle Grenzen hat |
| **Theorie und Praxis** | #178 unterscheidet Yan Holtz als Praxisposition neben Bertin/Tufte/Munzner und benennt Handwerksregeln | **Belegt:** Eine Skill-Sammlung kann Theorie, erprobte Praxis und Behauptungen mischen; Evidenzstatus je Teil nötig |
| **Einzelwerk gegen System** | #178: Regeln für eine Grafik **und** Farbkonstanz, Achsen, Ansichten und Bewegung über mehrere Grafiken; `visualisierungssysteme/befund.md` §1/§8 trennt Ebenen | **Belegt:** Einzelgrafik-Bewertung allein übersieht Systemwissen |
| **Nicht-Werkzeuge: Text, Person, Sammlung, Haltung** | #98 ist als App mit Skill-Sammlung bewertet; es wird ein fremdes Design-Review-Arbeitsmuster aus einer anderen Quelle vorgeschlagen. #178 ist eine Sammlung von Praxiswissen; beide Fälle sind noch überwiegend softwarebezogen | **Abgeleitet:** Es fehlt ein eigener echter Prüffall für einen Text, eine Person oder eine Haltung. Der Skill sagt zwar „new tool, project, repo, ... method“, aber nicht ausdrücklich „Text, Person, Sammlung, Haltung“ |
| **Beleg und Marketing getrennt vom fachlichen Wert** | #98 prüft Träger, Marketing, Lizenz und Datenwege differenziert; #178 benennt die Praxisquelle als fachlich wertvoll, aber trennt fremde Lizenz der Fehlerkarten | **Belegt:** Technische Vorsicht ist notwendig, reicht aber zur fachlichen Einordnung nicht aus |
| **Aufnahme an den richtigen Ort** | #98 schlägt Radar und einen eigenen gstack-Blick vor; #178 schlägt Korpus, Fachpakete und Visualisierungssysteme vor. Der geltende Skill nennt primär Radar und Stand | **Belegt:** Zielorte sind im **Vorschlag** 0031 detailliert, aber dieser ist noch nicht entschieden |

**Gegenthese zur ursprünglichen Kritik:** Das Problem ist **nicht nur** der Skill. Sein Schritt 2 verlangt schon die Prüfung am Intent, und A04/A01 nennen Fachlichkeit ausdrücklich. In #178 wurde der Skill zunächst offenbar zu eng **ausgeführt**. Ein geänderter Text allein würde denselben Fehler nicht zuverlässig verhindern; eine Gegenprobe mit zwei sehr verschiedenen Fundstücken ist nötig. **Status: abgeleitet** aus Skill und #178, nicht experimentell nachgewiesen.

**Was „ganzheitlich, systemisch“ hier bedeutet:** Zweck und Haltung prägen Erkenntnisform, Systemlogik, Form und Technik; Wechselwirkungen zwischen einzelnen Werken und dem übergreifenden System werden nicht auf ein Tool reduziert. Das ist die **Arbeitsannahme** aus `manifest.md` und `visualisierungssysteme/befund.md` §1, keine neue Definition im Namen des Eigentümers.

## 4 · Optionen

| Option | Was sich ändert | Folge | Risiko |
|---|---|---|---|
| **A – so lassen** | Geltenden Skill unverändert anwenden; bei jedem Fundstück bewusst A01/A04 und Fachpaket prüfen | Kein neues Regelwerk, wenig Pflege; ermöglicht fachliche Sichtung schon heute | Die Lücke bleibt vom ausführenden Modell abhängig; Wiederholungsfehler wahrscheinlich (**abgeleitet**) |
| **B – bestehenden Skill gezielt ergänzen** (**empfohlen als Entscheidungsvorlage**) | Nach Bedarfsprüfung eine kurze Frage: „Welches Fach-, Gestaltungs- oder Systemwissen trägt es, auf welcher Ebene, für welches Feld und mit welcher Belegstärke?“; Zielorte Korpus/Fachpaket/Experiment neben Radar nennen | Erfasst Theorie und Praxis, Einzelwerk und System, nicht nur Tools; kein zweiter Skill | Zu breites Raster kann kleine Fundstücke überfrachten; als selektive Prüffragen formulieren, nicht acht Pflichtabschnitte |
| **C – vollständigen Fundstück-Modus 0031 freigeben** | Eingang, Schatz-/Marketing-Sichtung, vertiefte Prüfung, Aufnahme und Erinnerung an Verworfenes als fester Prozess | Stärkerer Lebenszyklus, weniger verlorene Fundstücke; schließt auch Eingangs- und Übergabelücken | Neue Vorlage/Verwaltung, mehr Wartung; 0031 ist **noch Vorschlag** und darf nicht still als gültig behandelt werden |

**Empfehlung (abgeleitet):** Erst **Option B an zwei Fällen erproben**, einem fachlichen Text/Person und einem Werkzeug-/Skill-Paket. Dabei die bisherige Sichtung gegen die ergänzte vergleichen: Welche fachlichen Erkenntnisse wurden neu sichtbar, welche Fragen waren überflüssig, wie viel Mehraufwand entstand? Wenn die Eingangspflege anschließend wirklich hakt, Option C getrennt entscheiden. Keine Skill- oder Regeländerung im Rahmen dieses Befunds.

## 5 · Offene Fragen an den Eigentümer

**Eine Bedeutungsfrage nach Claudes Gegenprüfung:** Soll die Fundstück-Sichtung künftig ausdrücklich **fachliche Theorie und Praxis über alle Gestaltungsebenen** erfassen, auch wenn ein Fundstück gar kein Werkzeug ist? **Empfehlung:** ja, aber als gezielte Erweiterung des vorhandenen Skills mit Probe an zwei unterschiedlichen Fällen. **Folge des Nichtstuns:** Fachwissen kann weiter zufällig übersehen werden, selbst wenn Lizenz und Sicherheit richtig geprüft sind.

## Ergebnis · geprüft / nicht geprüft · offen

**Ergebnis:** Gegenprüfung des geltenden Fundstück-Ablaufs anhand der beiden Issues, Anforderungen, Fachpaket und Zweck-Technik-Leiter; drei Optionen mit Folgen und Risiken. **Geprüft:** aktuelle Repo-Texte und Issue-Texte #178/#98; keine neue Web-Recherche. **Nicht geprüft:** ursprüngliche, inzwischen überschriebene Fassung von #178 zeilenweise aus der Historie; kein realer Pilot. **Offen:** unabhängiges Gegenlesen durch Claude, dann die eine Bedeutungsentscheidung.
