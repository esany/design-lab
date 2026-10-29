#!/usr/bin/env node
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { leseKopf, pruefeGitHub } from './gitter.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const token = process.env.GITHUB_TOKEN, repo = process.env.GITHUB_REPOSITORY;
if (!token || !/^[\w.-]+\/[\w.-]+$/.test(repo || '')) throw new Error('GITHUB_TOKEN und GITHUB_REPOSITORY sind erforderlich');
const api = `https://api.github.com/repos/${repo}`;
async function get(path) {
  const r = await fetch(api + path, { headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' } });
  if (!r.ok) throw new Error(`GitHub ${path}: HTTP ${r.status}`);
  return r.json();
}
const themen = readdirSync(join(root, 'anschluss')).filter(f => f.endsWith('.md') && f !== 'README.md').map(f => leseKopf(readFileSync(join(root, 'anschluss', f), 'utf8'), f));
const issues = {};
for (const n of new Set(themen.flatMap(t => t.offen))) {
  const issue = await get(`/issues/${n}`);
  if (issue.pull_request) throw new Error(`#${n} ist ein Pull Request, kein Issue`);
  issues[n] = issue.state;
}
const isPR = process.env.GITHUB_EVENT_NAME === 'pull_request';
let dateien = [], labels = [];
if (isPR) {
  const event = JSON.parse(readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8'));
  const number = event.number;
  if (!Number.isSafeInteger(number) || number < 1) throw new Error('Pull-Request-Nummer fehlt');
  // Labels aus der API lesen, damit auch nachträglich gesetzte Labels berücksichtigt werden.
  const pr = await get(`/issues/${number}`);
  labels = pr.labels.map(l => l.name);
  for (let page = 1; ; page++) {
    const files = await get(`/pulls/${number}/files?per_page=100&page=${page}`);
    dateien.push(...files.filter(f => f.status !== 'removed').map(f => f.filename));
    if (files.length < 100) break;
    if (page >= 30) throw new Error('Mehr als 3000 PR-Dateien: Prüfung unvollständig');
  }
}
const errors = pruefeGitHub(themen, issues, isPR, dateien, labels);
if (errors.length) { console.error('✗ ' + errors.join('\n✗ ')); process.exit(1); }
console.log(`✓ ${Object.keys(issues).length} offene Issues und Verlauf geprüft`);
