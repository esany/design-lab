---
dient: A08, A19, A32
datum: 2026-11-12
anlass: "Eigentümer im Werkchat, 12.11.: Was prüft eine erste Skizze, welche Strukturen sind relevant, wofür ist sie da, Varianten und Vorzugsvariante, Begründung gestuft offenlegen; praxisbereites Wissen für das Labor, Stand der Technik prüfen."
gelesen: "Abstracts, Inhaltsverzeichnisse und Vorlesungsfolien, die die Quellen wörtlich wiedergeben (Fundstellen unten); keine Volltexte außer Tohidi et al. 2006 und Dow et al. 2010 in Auszügen"
status: Befund von Claude als Grundlage für praxisbereites Wissen; nichts beschlossen
---

# Skizze, Varianten und Begründung: was eine erste Skizze leisten soll

## In Worten

Eine erste Skizze ist keine Gliederung und kein kleiner Entwurf. Sie stellt eine einzige
Entwurfsfrage, zum Beispiel „Wonach ordnet sich das Ganze?“, und beantwortet sie in mehreren
echten Varianten, so roh, wie die Idee noch ist. Wer mehrere Varianten zugleich zeigt, bekommt
ehrlichere Kritik und kommt zu besseren Ergebnissen. Die Wahl der Vorzugsvariante wird begründet:
Welche Frage, welche Optionen, welche Kriterien. Diese Begründung liegt gestuft bei der Skizze,
aufklappbar, damit sie nicht überfordert. Bei Vorschlägen einer KI ist besondere Vorsicht nötig,
weil sie auf das erste Beispiel festlegen können.

Status je Aussage: **belegt** (Fundstelle) · **abgeleitet** (Vorschlag von Claude).

## Was die Quellen sagen

| Aussage | Status | Fundstelle |
|---|---|---|
| Skizze und Prototyp unterscheiden sich in der Absicht: Skizze schlägt vor, erkundet, fragt; Prototyp beschreibt, verfeinert, antwortet. | belegt | Buxton, B. (2007): Sketching User Experiences; Gegenüberstellung u. a. in Stanford CS147 (2025), Folie „From Sketch to Prototype“ |
| Eine Skizze zeigt nur so viel Detail, wie für ihren Zweck nötig ist, und wirkt nicht reifer als die Idee. | belegt | Buxton 2007, S. 111–112 („minimal detail“, „appropriate degree of refinement“) |
| Ein Prototyp filtert: Er macht nur die Dimension sichtbar, um die es gerade geht. Fünf Filterdimensionen: Erscheinung, Daten, Funktion, Interaktion, räumliche Struktur. | belegt | Lim, Stolterman, Tenenberg (2008): The Anatomy of Prototypes. ACM TOCHI 15(2), doi:10.1145/1375761.1375762 |
| Wer eine Gestaltung allein zeigt, bekommt höhere Bewertungen und weniger Kritik als mit drei Alternativen. | belegt | Tohidi, Buxton, Baecker, Sellen (2006): Getting the right design and the design right. CHI 2006, 1243–1252, doi:10.1145/1124772.1124960 |
| Parallel entwerfen (mehrere Varianten vor dem ersten Feedback) führt zu besseren und vielfältigeren Ergebnissen und zu mehr Zuversicht. | belegt | Dow et al. (2010): Parallel prototyping leads to better design results, more divergence, and increased self-efficacy. ACM TOCHI 17(4), Art. 18, doi:10.1145/1879831.1879836 |
| Begründung als Fragen, Optionen, Kriterien (QOC), dazu die Bewertung, ob eine Option ein Kriterium stützt oder schwächt. | belegt | MacLean, Young, Bellotti, Moran (1991): Questions, Options, and Criteria. Human-Computer Interaction 6(3–4), 201–250 |
| KI-erzeugte Beispiele erhöhten in einer Studie mit 60 Gestaltenden die Fixierung auf ein erstes Beispiel und senkten Vielfalt und Originalität. | belegt | Wadinambiarachchi et al. (2024): The Effects of Generative AI on Design Fixation and Divergent Thinking. CHI 2024, doi:10.1145/3613904.3642919 |

## Was daraus für die Praxis folgt (abgeleitet)

1. **Erst die Frage, dann die Skizze.** Eine erste Skizze nennt die eine Entwurfsfrage, die sie prüft,
   und die Filterdimension (meist räumliche Struktur oder Ordnungsprinzip). Inhalt und Aussehen
   bleiben draußen.
2. **Drei bis vier echte Varianten,** die sich im Prinzip unterscheiden, nicht in Details. Eine
   Ausgangslage ist als Nullpunkt dabei.
3. **Je Variante ein Satz Stärke, ein Satz Schwäche.** Mehr nicht auf der ersten Ebene.
4. **Begründung gestuft:** Warum diese Variante, worauf sie beruht, aufklappbar; die Wahl als
   Fragen, Optionen, Kriterien mit den bestätigten Anforderungen als Kriterien.
5. **Der Mensch wählt;** Verbindungen von Varianten sind erlaubt und häufig.
6. **Gegen Fixierung:** Wenn eine KI Varianten erzeugt, müssen sie sich im Prinzip unterscheiden;
   die KI sagt, welche sie selbst für naheliegend hält, damit der Mensch dagegen prüfen kann.
7. **Darstellung in der visuellen Sprache des Labors** (Tokens), ohne vorgetäuschte Handzeichnung.
8. **Neutrale Begründung als Übergabe** an KI und Entwicklung: Ihre Herkunft nennt von Anfang an
   nur externe Primärquellen, unabhängig von Repos und internen Verweisen (Anforderung des
   Eigentümers, 12.11.), damit sie sich ohne Bereinigung weitergeben lässt.

## Offen

- Ob es neuere Übersichten zu Varianten und Entwurfsbegründung gibt (nach 2020): nur eine kurze Suche.
- Wohin das Wissen gehört: Fachpaket, Leitfaden oder ein eigener Skill. Frage an den Eigentümer.
- Gestufte Begründung als Baustein des Zielbilds (verwandt mit Baustein „Stufen“, PR #187).
