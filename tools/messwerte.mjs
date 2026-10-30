#!/usr/bin/env node
// Messwerte für das Labor: lokal ohne Token nutzbar; mit Token GitHub-Eingriffe nach Label-Ereignis.
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const zeichen = s => [...s].length;
const groesse = path => zeichen(readFileSync(join(root, path), 'utf8'));
const agents = groesse('AGENTS.md');
const stand = groesse('stand.md');
const merkzettel = readdirSync(join(root, 'anschluss'))
  .filter(f => f.endsWith('.md') && f !== 'README.md')
  .map(f => ({ pfad: 'anschluss/' + f, zeichen: groesse('anschluss/' + f) }))
  .sort((a, b) => b.zeichen - a.zeichen || a.pfad.localeCompare(b.pfad))[0];

if (!merkzettel) throw new Error('Kein Merkzettel in anschluss/ gefunden');
console.log('Start-Lesekosten (Unicode-Zeichen, gesamte Dateien):');
console.log('  AGENTS.md: ' + agents);
console.log('  stand.md: ' + stand);
console.log('  größter Merkzettel: ' + merkzettel.pfad + ' (' + merkzettel.zeichen + ')');
console.log('  Summe: ' + (agents + stand + merkzettel.zeichen));

const token = process.env.GITHUB_TOKEN;
if (!token) {
  console.log('Eingriffe je Monat: nicht abgefragt (GITHUB_TOKEN fehlt; lokale Lesekosten sind verfügbar).');
} else {
  const repo = process.env.GITHUB_REPOSITORY || 'esany/design-lab';
  if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repo)) throw new Error('GITHUB_REPOSITORY ist ungültig');
  const monate = new Map();
  const bekannte = new Set();
  let seiten = 0;
  for (let page = 1; ; page++) {
    if (page > 100) throw new Error('Mehr als 10.000 GitHub-Ereignisse: Auswertung unvollständig');
    const url = 'https://api.github.com/repos/' + repo + '/issues/events?per_page=100&page=' + page;
    const response = await fetch(url, {
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });
    if (!response.ok) throw new Error('GitHub Issue-Ereignisse: HTTP ' + response.status + ' (Seite ' + page + ')');
    const events = await response.json();
    if (!Array.isArray(events)) throw new Error('GitHub Issue-Ereignisse: Antwort ist keine Liste');
    seiten++;
    for (const event of events) {
      if (event.event !== 'labeled' || event.label?.name !== 'eingriff' || bekannte.has(event.id)) continue;
      if (typeof event.created_at !== 'string' || !/^\d{4}-\d{2}-\d{2}/.test(event.created_at)) {
        throw new Error('Eingriff-Ereignis ohne gültiges Datum: ' + event.id);
      }
      bekannte.add(event.id);
      const monat = event.created_at.slice(0, 7); // Zeitpunkt der Kennzeichnung, UTC
      monate.set(monat, (monate.get(monat) || 0) + 1);
    }
    if (events.length < 100) break;
  }
  console.log('Eingriffe je Monat (Ereignis „eingriff“ gesetzt, UTC; kein Qualitätsurteil):');
  if (!monate.size) console.log('  bisher keine markierten Eingriffe');
  for (const [monat, anzahl] of [...monate].sort(([a], [b]) => a.localeCompare(b))) {
    console.log('  ' + monat + ': ' + anzahl);
  }
  console.log('  Gesamt: ' + bekannte.size + ' Label-Ereignisse (' + seiten + ' API-Seiten)');
}
