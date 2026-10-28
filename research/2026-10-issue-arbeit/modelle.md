# Modelle im Einsatz — was belegt ist (Stand 28.10.2026)

Anlass: Issue #31, Punkt 2. Regel: `belegpflicht`. Alles hier stammt aus Herstellerseiten oder
einer Presseseite, die Herstellerangaben wiedergibt. **Keine Angabe ist unabhängig geprüft.**
Benchmark-Zahlen sind deshalb *belegt als Herstellerangabe*, nicht als Tatsache über die Welt.

## Belegt (Herstellerangabe)

| Modell | Aussage | Quelle |
|---|---|---|
| Claude Opus 5.5 (Anthropic, 22.09.2026) | Führt bei agentischem Coding (Terminal-Bench 4.0: 66,4 %, Fable 5.1: 55,8 %); delegiert besser an Unteragenten und prüft eigene Arbeit; Standard-Effort „medium“; Kosten laut Anthropic etwa 40 % unter Opus 5 | [anthropic.com/claude-opus-5-5](https://www.anthropic.com/claude-opus-5-5) |
| Claude Opus 5.5 | Anthropic nennt selbst: Benchmark-Abstände sind bei diesem Niveau weniger verlässlich; das Modell vermutet oft, dass es geprüft wird (offene Frage für Tests); Thinking lässt sich nicht abschalten; GPT-6 Astra liegt bei AutomationBench (41,4 % zu 40,0 %) und Terminal-Bench-Science (64,6 % zu 58,7 %) vorn | dieselbe Seite |
| GPT-6 Astra (OpenAI; „Anfang September“ laut TechCrunch, die OpenAI-Seite nennt kein Datum) | Stärken laut OpenAI: Computernutzung (OSWorld 2.0: 72,6 %), Software-Engineering, langer Kontext (MRCR v2: 96,3 %), stellt Rückfragen, wenn Antworten das Ergebnis wesentlich ändern | [openai.com/…/gpt-6-astra](https://openai.com/sk-SK/index/gpt-6-astra/) (slowakische Fassung) |
| GPT-6 Astra | Schwächen laut OpenAI: lehnt fortgeschrittene Cybersicherheitsaufgaben ab; Sicherheitsprüfungen können legitime Arbeit verlangsamen oder stoppen; schriftliche Begründung schwerer zu überwachen; bei Humanity's Last Exam (mit Werkzeugen) hinter Claude Fable 5.1 (57,2 % zu 65,0 %) | dieselbe Seite |
| GPT-6 Sol / Luna (OpenAI, 22.09.2026) | Sol: komplexe Aufgaben wie Programmieren; Luna: Routinearbeit mit hohem Volumen und klarem Ziel (Zusammenfassen, Extrahieren, kurze Fragen); API-Kosten laut OpenAI halb so hoch wie in der 5.6-Reihe; beide in ChatGPT Work und Codex | [TechCrunch, 22.09.2026](https://techcrunch.com/2026/09/22/openai-launches-gpt-6-sol-and-luna/) |

Hinweis zur Lesart: Die Seiten wurden maschinell zusammengefasst gelesen (WebFetch), nicht
im Wortlaut geprüft. Die OpenAI-Seite liegt nur in slowakischer Fassung vor; deutsche
Wiedergabe ist von uns. Zahlen vor einer Entscheidung am Original nachlesen.

## Abgeleitet

- Luna ist laut OpenAI für „klares Ziel“ gedacht. Das spricht dafür, Aufgaben mit prüfbarer
  Abnahme an das günstigere Modell zu geben und mehrdeutige an Astra oder Opus.
  Daraus folgt für Issues: **die Abnahme muss im Issue stehen**, sonst ist es keine Luna-Aufgabe.
- Opus 5.5 wird von Anthropic als stark bei Unteragenten und Selbstprüfung beschrieben. Das
  stützt die Aufteilung „Opus arbeitet, ein anderes Modell prüft“ nicht von selbst: ein Modell,
  das seine Arbeit selbst prüft, ist nach `AGENTS.md` weiterhin kein unabhängiger Prüfer.

## Nicht belegt

- Dass Astra „im normalen Chat ohne Limit“ nutzbar ist: OpenAI nennt auf der Seite keine
  Nutzungsgrenzen und keine Zahlen; die Aussage des Eigentümers bleibt Annahme.
- Was „Work Luna 6 / 5.5 max“ genau bedeutet. Belegt ist Luna 6 (neben der 5.6-Reihe); die
  Bezeichnung „5.5“ habe ich nicht gefunden.
- Wie sich Astra, Luna und Opus **an design-lab-Aufgaben** (Duden-Satz, Kritik, Build-Skripte)
  schlagen. Dafür gibt es keine Quelle; das zeigen nur eigene Prüffälle in `evals/`.
- Jede Rangfolge „Modell A ist besser für Gestaltung“. Die Herstellerzahlen messen Coding,
  Computernutzung und Wissenschaft, nicht Gestaltungsurteil.

## Folge fürs Labor

Keine feste Modell-Zuordnung in die Regeln schreiben (veraltet in Wochen). Stattdessen: Issues so
schreiben, dass jedes Modell prüfen kann, ob es dran ist (Skill `issue`), und Zuordnung über Prüffälle
nachziehen (`evals/uebergabe`).
