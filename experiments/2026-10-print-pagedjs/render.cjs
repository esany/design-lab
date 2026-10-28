// Rendert index.html mit Paged.js zu PDF und PNG-Vorschau
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const b = await chromium.launch({ args: ['--allow-file-access-from-files'] });
  const p = await b.newPage();
  const logs = [];
  p.on('console', m => logs.push(m.type() + ': ' + m.text()));
  p.on('pageerror', e => logs.push('pageerror: ' + e.message));
  const quelle = process.argv[2] || 'index.html', ziel = process.argv[3] || 'nachbau-rgb.pdf';
  await p.goto('file://' + path.resolve(quelle));
  await p.waitForFunction(() => window.flyerFertig === true, null, { timeout: 60000 });
  await p.evaluate(() => document.fonts.ready);
  const info = await p.evaluate(() => ({
    uebersatz: document.body.dataset.uebersatz || null,
    satzbericht: document.body.dataset.satzbericht || null,
    rahmen: [...document.querySelectorAll('[data-fluss]')].sort((a,b)=>a.dataset.reihe-b.dataset.reihe).map(r=>r.dataset.reihe+' ['+(()=>{const g=document.createTreeWalker(r,NodeFilter.SHOW_TEXT);const tops=new Set();let n;const rg=document.createRange();while((n=g.nextNode())){for(let i=0;i<n.length;i++){rg.setStart(n,i);rg.setEnd(n,i+1);const c=rg.getClientRects()[0];if(c&&c.width>0)tops.add(Math.round(c.bottom))}}return tops.size+' Zeilen, Rahmen '+(r.getBoundingClientRect().height*25.4/96).toFixed(2)+'mm'})()+']: '+r.textContent.trim().slice(0,22)+' … '+r.textContent.trim().slice(-22)),
    seiten: document.querySelectorAll('.pagedjs_page').length,
    groesse: [...document.querySelectorAll('.pagedjs_page')].map(e => [e.offsetWidth, e.offsetHeight]),
    fonts: [...document.fonts].filter(f => f.status === 'loaded').map(f => f.family + ' ' + f.weight + ' ' + f.style),
  }));
  console.log(JSON.stringify(info, null, 1));
  await p.pdf({ path: ziel, preferCSSPageSize: true, printBackground: true });
  console.log(logs.filter(l => !l.includes('Download the React')).join('\n'));
  await b.close();
})();
