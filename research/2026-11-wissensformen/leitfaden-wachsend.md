---
dient: A04, A08, A23, A33
datum: 2026-11-07
modell: Claude Opus 5.5 (Claude-App, Cloud-Sitzung)
status: Entwurf, gesichert aus dem Chat vom 05.–07.11. (Prüfauftrag des Eigentümers, 07.11.). Nichts davon ist beschlossen außer den Antworten des Eigentümers im Wortlaut (arbeitsweise-f18 bis f27).
---

# Leitfaden: ein offenes System, das wächst

Gesichert aus einem Nebenchat zum Leitfaden. Das dort erarbeitete Zielbild lag bis zum 07.11. nur
in einem privaten Claude-Dokument; diese Datei ersetzt es als Fundstelle. Die Antworten des
Eigentümers stehen im Wortlaut in `daten/arbeitsweise.json` (f18–f27) und werden hier nicht
wiederholt, nur zitiert, wo der Wortlaut die Richtung trägt.

## 1 · Was der Eigentümer gesagt hat (Wortlaut, Chat 06.11.)

- „Bitte las den Leitfaden generisch!! Keine Beispiele aus unserer Arbeit. Tage ihn, damit wir die
  regeln des Leitfadens koformtabel durchsuchen können.“ (f18)
- „Verwende auch Fachbegriffe oder verweise, der begriff oder ansatz des .. pattern wurde
  weichgespült“
- „wir könnten den leitfaden auf entwurfsarbeit erweitern.. dann wird ki zum Werkzeug. Genauso
  wie code, generisches oder parametrisches design, gestaltgesetze, infoarchitektur“ (f22)
- „Ich will ein organisches wachsendes dynamisches System haben, und ich glaube durch ki wird
  möglich“ (f23)
- „Ki steht nicht im Zentrum“ (f24)
- „Puh, das ist mir ein zu starkes luftschloss […] Dein zielbild versucht jetzt schon ein
  dünnbrettbohriges Verständnis von entwurf oder fachlichkeit herzustellen, das wir noch nicht mal
  ansatzweise umrissen haben, es war eher beispielhaft zu verstehen. Eine ontologie oder ähnliches
  ist dich sicher zu statisch und in der frühen entwurfsphase nicht sota, wir sind doch immer noch
  in der Analyse. Mir geht es nicht um lehrbuchmässoge bearbeitung nur um das gelebte Verständnis
  eines offenen organischen systems, das wachsen kann, ohne vorschnell starre statische
  Verständnisses zu postulieren.“
- „Deinesota Ansätze sind selbst wieder pattern des leitfadens. Ich hatte ja auch nicht von
  facettierung gesprochen, sondern tagging. Aber natürlich irgendwelche Relationen. Ich will […]
  dem leitfaden beim wachsen zuschauen können. Das tagging system erlaubt mir eine intuitive
  nuederschwellige Orientierung, Navigation und Vermittlung und wird zum Werkzeug für
  Erkenntnisgewinn.“ (f25)

Seine Fragen und Bedürfnisse zur Arbeit mit KI (Arbeitsteilung, Steuerung, Entlastung,
Tokenökonomie, Werkzeuge statt Prosa, Strukturen für Mensch und KI, Trade-offs) stehen im Wortlaut
in f20.

## 2 · Stand des Verständnisses (*abgeleitet*, Entwurf)

- **Gegenstand:** Der Leitfaden erschließt Entwurfsarbeit. Die KI ist ein Werkzeug darin, neben
  Code und generativen oder parametrischen Verfahren; sie steht nicht im Zentrum.
- **Form:** generisch, ohne Beispiele aus der eigenen Arbeit; Fachbegriffe mit Quelle statt
  Umschreibungen; bekannte Anwendungen (Known Uses) aus der Literatur. Erfahrungen aus dem Labor
  sind Daten, die auf einen Eintrag verweisen (f19).
- **Ordnung:** freie Tags (Folksonomy) und Relationen zwischen Einträgen. Bewusst noch keine
  Bereiche, Facetten, festes Vokabular oder Ontologie: Die Arbeit ist in der Analyse.
- **Wachsen sehen:** erzeugte Ansichten, etwa ein Netz aus Tags, Einträgen und Relationen und ein
  Verlauf, wann was dazukam. Die KI meldet ähnliche Tags, isolierte Einträge, Keime ohne Quelle;
  der Mensch entscheidet.

**Minimalform (Vorschlag, f26 offen):** Regel (ein Satz) · Begriff · Warum mit Quelle · Status
(Keim · belegt · gilt · überholt) · Tags (frei) · Relationen (*verwandt* · *folgt aus* ·
*widerspricht*). Weitere Felder nur, wenn mehrere Einträge sie verlangen.

**Technische Grenze heute:** `leitfaden/eintraege.json` kennt nur die Status „gilt“ und
„veraltet“; jeder Eintrag dort wird veröffentlicht. Keime haben dort noch keinen Platz. Sie stehen
deshalb unten, nicht im Leitfaden.

## 3 · Erste Keime (Entwurf, Status „Keim“)

Aus dem Gespräch selbst entstanden („Deinesota Ansätze sind selbst wieder pattern des
leitfadens“). Tags und Relationen sind ein erster Vorschlag. Quellen: Standardwissen oder am
06.11. über die Websuche gesichtet, nicht vollständig gelesen; vor „belegt“ an der Stelle prüfen
und in den Korpus aufnehmen.

| Keim | Begriff | Tags | Relation | Quelle |
|---|---|---|---|---|
| Lass ein System aus einem einfachen, funktionierenden wachsen | Gall's Law | wachstum, system | verwandt: Piecemeal Growth | Gall, Systemantics, 1975 |
| Wachse in kleinen Schritten aus dem Gebrauch | Piecemeal Growth | wachstum, entwurf | verwandt: Gall's Law | Alexander, The Timeless Way of Building, 1979 |
| Lege Ordnung erst fest, wenn das Material sie zeigt | Last Responsible Moment | analyse, entscheiden, ordnung | folgt aus: Piecemeal Growth | Poppendieck, Lean Software Development, 2003 |
| Lass Kategorien aus dem Material entstehen | Offenes Kodieren | analyse, ordnung, erkenntnis | verwandt: Folksonomy | Glaser, Strauss, Grounded Theory, 1967 |
| Verschlagworte frei; Ordnung zeigt sich im gemeinsamen Vorkommen | Folksonomy | tagging, ordnung, erkenntnis | widerspricht: Kontrolliertes Vokabular | Vander Wal, 2004 |
| Halte für häufige Begriffe einen festen Kern | Kontrolliertes Vokabular | tagging, ordnung | widerspricht: Folksonomy | Bibliothekswissenschaft, Standardwissen |
| Nenne den Fachbegriff, statt ihn zu umschreiben | — | sprache, vermittlung | — | Eigentümer 06.11. (*abgeleitet*) |
| Beschreibe Muster mit bekannten Anwendungen | Pattern-Form, Known Uses | wissen, form | — | Alexander 1977; Gamma u. a., Design Patterns, 1994 |
| Urteile am Material, nicht an der Beschreibung | Reflection-in-Action | urteil, entwurf | — | Schön, The Reflective Practitioner, 1983 |
| Wer nur überwacht, erkennt Fehler schlecht | Ironies of Automation | arbeitsteilung, überwachung | verwandt: Human-in-the-Loop | Bainbridge, 1983 |
| Gib das Vorhaben frei, bevor gehandelt wird | Human-in-the-Loop | freigabe, arbeitsteilung | folgt aus: Ironies of Automation | bestehender Eintrag `w-vorhaben` |
| Geh je Aufgabe von einer Stufe der Automatisierung aus, nicht von einem Schalter | Levels of Automation | arbeitsteilung | verwandt: Human-in-the-Loop | Parasuraman, Sheridan, Wickens, 2000 |
| Halte Absicht und Auswahl beim Gestalter | Creative Agency | urteil, arbeitsteilung, entwurf | verwandt: Reflection-in-Action | [arXiv 2603.12018](https://arxiv.org/abs/2603.12018); [Frontiers 2025](https://www.frontiersin.org/articles/10.3389/fcomp.2025.1672735) |
| Gib eine Freigabe im Wortlaut weiter, ohne den Vorbehalt zu glätten | — | freigabe, transparenz | verwandt: Human-in-the-Loop | [a:arbeitsweise-a24] |
| Halte jede Tatsache an einem Ort; erzeuge die Ansichten | Single Source of Truth | wissen, struktur | — | Hunt, Thomas, The Pragmatic Programmer, 1999 (DRY) |
| Text trägt nur, wenn er ausgeführt, erzeugt oder entschieden ist | — | struktur, prüfung | verwandt: Single Source of Truth | [a:arbeitsweise-a08] |
| Mach Struktur sichtbar und selbst änderbar | — | struktur, sichtbarkeit | — | Intent A29 (*abgeleitet*) |
| Arbeite parallel nur an getrennten Aufgaben | Curse of Coordination | parallel, zusammenarbeit | verwandt: Artifact Pattern | [CooperBench, arXiv 2601.13295](https://arxiv.org/abs/2601.13295): im Schnitt 30 % weniger Erfolg zu zweit |
| Gib Ergebnisse über einen gemeinsamen Ort weiter, nicht durch Nacherzählen | Artifact Pattern, Blackboard | übergabe, zusammenarbeit | verwandt: Curse of Coordination | [arXiv 2601.11672](https://arxiv.org/pdf/2601.11672) zu Anthropics Multi-Agent-System |
| Halte den geladenen Kern stabil, dann wird er billig | Prompt Caching | kosten, tokens | — | [Don't Break the Cache, arXiv 2601.06007](https://arxiv.org/abs/2601.06007): 41–80 % geringere Kosten bei API-Agenten |

## 4 · Verworfen im Chat (nur zur Nachvollziehbarkeit)

- Facetten mit festem Vokabular (Situation, Gegenstand, Beleg; später Bereich, Phase, Maßstab):
  verworfen, der Eigentümer meinte freies Tagging.
- Kategorien Grundlagen / Werkzeuge bauen / Schnittstellen / Design Systems / Code und ein
  Leitfaden „Entwurfsarbeit“ mit fünf Bereichen und acht Prinzipien: verworfen als zu statisch
  („Luftschloss“), die Beispiele waren beispielhaft gemeint.
- Ein Zielbild für das ganze Labor statt für den Leitfaden: verworfen, falscher Gegenstand.
- Entwürfe `w-parallel` und `w-uebergabe` mit Beispielen aus dem Labor: verworfen wegen der Vorgabe „generisch“;
  generisch als Keime oben.

## 5 · Offen

- f26: Minimalform als Anfang?
- Name und Gegenstand: „Mit KI arbeiten“ (0032) gegenüber Entwurfsarbeit mit der KI als Werkzeug.
- Verhältnis zu f16 (Leitfaden als Ansicht des Fachpakets „KI als Werkzeug“): Das würde die KI ins
  Zentrum des Leitfadens setzen; der Eigentümer hat am 06.11. das Gegenteil gesagt (f24).
- Die 24 bestehenden Einträge: 15 enthalten Bezüge zur eigenen Arbeit (Feld `labor` oder Text);
  ob und wie sie generisch werden, ist nicht entschieden.
- „Übergeordnete Codeskills“ (Frage des Eigentümers, 06.11.): nicht geklärt.
- Prüfauftrag an den Hauptchat (nicht gesendet): Feld „berührt“ je Aufgabe, damit der Build
  Überschneidungen meldet; Stand „mit Vorbehalt“ für Antworten des Eigentümers.
