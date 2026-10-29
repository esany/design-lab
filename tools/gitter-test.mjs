#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { leseKopf, aktualisiereStand, pruefeLaenge, pruefeGitHub, MAX_MERKZETTEL, MAX_STAND } from './gitter.mjs';
const fixture = f => readFileSync(join(dirname(fileURLToPath(import.meta.url)), 'fixtures/gitter', f), 'utf8');
const t = { datei: 'beispiel.md', ...leseKopf(fixture('richtig.md'), 'richtig.md') };
const tests = [
  ['G1 Kopf', () => leseKopf(fixture('richtig.md'), 'richtig.md'), () => leseKopf(fixture('falsch.md'), 'falsch.md')],
  ['G2 erzeugter Block', () => { const s=aktualisiereStand('<!-- themen:start -->\n<!-- themen:end -->', [t]); if (aktualisiereStand(s,[t]) !== s) throw Error('Block abweichend'); }, () => { const s=aktualisiereStand('<!-- themen:start -->\n<!-- themen:end -->', [t]); if (aktualisiereStand(s.replace('Ein Satz.', 'Falsch.'), [t]) !== s.replace('Ein Satz.', 'Falsch.')) throw Error('Block abweichend'); }],
  ['G3 Längen', () => { const e=pruefeLaenge('x'.repeat(MAX_STAND), [{...t, body:'x'.repeat(MAX_MERKZETTEL)}]); if(e.length) throw Error(e.join(', ')); }, () => { const e=pruefeLaenge('x'.repeat(MAX_STAND+1), [{...t, body:'x'.repeat(MAX_MERKZETTEL+1)}]); if(e.length !== 2) throw Error('Grenzen nicht erkannt'); throw Error(e.join('; ')); }],
  ['G4 GitHub', () => { const e=pruefeGitHub([t], {1:'open'}, true, ['stand-verlauf.md'], []); if(e.length) throw Error(e.join(', ')); if(pruefeGitHub([t], {1:'open'}, true, [], ['ohne-verlauf']).length) throw Error('Ausnahme nicht erkannt'); }, () => { const e=pruefeGitHub([t], {1:'closed'}, true, [], []); if(e.length !== 2) throw Error('Fehler nicht erkannt'); throw Error(e.join('; ')); }],
];
let fail = false;
for (const [name, good, bad] of tests) {
  try { good(); console.log(`✓ ${name}: richtiger Fall grün`); } catch(e) { fail=true; console.error(`✗ ${name}: richtiger Fall rot: ${e.message}`); }
  try { bad(); fail=true; console.error(`✗ ${name}: falscher Fall blieb grün`); } catch(e) { console.log(`✓ ${name}: Gegenfall rot: ${e.message}`); }
}
if(fail) process.exit(1);
