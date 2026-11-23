'use strict';
/* ---------- i18n ---------- */
const I18N = {
  en: {
    app: 'Labour Attendance', attendance: 'Attendance', labour: 'Labour', report: 'Report', settings: 'Settings',
    full: 'Full', am: 'Morning', pm: 'Afternoon', abs: 'Absent',
    M: 'Male', F: 'Female', name: 'Name', phone: 'Phone', wage: 'Daily wage (full day)', add: 'Add labourer', edit: 'Edit',
    save: 'Save', cancel: 'Cancel', del: 'Delete', search: 'Search…', today: 'Today', present: 'Present', total: 'Total',
    wages: 'Wages', days: 'Days', from: 'From', to: 'To', export: 'Download CSV', language: 'Language',
    syncNow: 'Sync now', online: 'Online', offline: 'Offline', pending: 'pending', synced: 'Synced',
    dayRate: 'Today\'s wage override', dayRateHint: 'Set a different full-day wage for all male/female labourers on this day. Leave blank for normal wages.',
    active: 'Currently working', noLabour: 'No labourers yet. Tap + to add.', markAll: 'Mark all full day',
    halfDays: 'Half', fullDays: 'Full', confirmDel: 'Delete this labourer? Past attendance is kept.',
    server: 'Server address (blank = this site)', key: 'Sync key (if set on server)', syncFail: 'Sync failed, will retry',
    saved: 'Saved', rateFor: 'Wage for this person today', gender: 'Gender', pay: 'Pay', normal: 'normal', inactive: 'inactive',
    noRecords: 'No attendance in this period', installHint: 'Tip: use "Add to Home screen" to install the app.',
    lastSync: 'Last sync', never: 'never', dayEq: 'Day-equivalents',
  },
  ta: {
    app: 'கூலி வருகை', attendance: 'வருகை', labour: 'தொழிலாளர்', report: 'அறிக்கை', settings: 'அமைப்புகள்',
    full: 'முழு நாள்', am: 'காலை', pm: 'மதியம்', abs: 'வரவில்லை',
    M: 'ஆண்', F: 'பெண்', name: 'பெயர்', phone: 'தொலைபேசி', wage: 'தினக்கூலி (முழு நாள்)', add: 'தொழிலாளர் சேர்', edit: 'திருத்து',
    save: 'சேமி', cancel: 'ரத்து', del: 'நீக்கு', search: 'தேடு…', today: 'இன்று', present: 'வந்தவர்', total: 'மொத்தம்',
    wages: 'கூலி', days: 'நாட்கள்', from: 'முதல்', to: 'வரை', export: 'CSV பதிவிறக்கு', language: 'மொழி',
    syncNow: 'இப்போது ஒத்திசை', online: 'இணைப்பில்', offline: 'இணைப்பு இல்லை', pending: 'நிலுவை', synced: 'ஒத்திசைந்தது',
    dayRate: 'இன்றைய கூலி மாற்றம்', dayRateHint: 'இந்த நாளுக்கு ஆண்/பெண் அனைவருக்கும் வேறு முழு நாள் கூலி அமைக்கவும். வழக்கமான கூலிக்கு காலியாக விடவும்.',
    active: 'தற்போது பணியில்', noLabour: 'தொழிலாளர் இல்லை. + அழுத்தி சேர்க்கவும்.', markAll: 'அனைவருக்கும் முழு நாள்',
    halfDays: 'அரை', fullDays: 'முழு', confirmDel: 'இந்த தொழிலாளரை நீக்கவா? முந்தைய வருகை பதிவுகள் இருக்கும்.',
    server: 'சர்வர் முகவரி (காலி = இதே தளம்)', key: 'ஒத்திசைவு விசை (சர்வரில் இருந்தால்)', syncFail: 'ஒத்திசைவு தோல்வி, மீண்டும் முயற்சிக்கும்',
    saved: 'சேமிக்கப்பட்டது', rateFor: 'இன்று இவருக்கான கூலி', gender: 'பாலினம்', pay: 'கூலி', normal: 'வழக்கம்', inactive: 'பணியில் இல்லை',
    noRecords: 'இந்த காலத்தில் வருகை பதிவு இல்லை', installHint: 'குறிப்பு: "Add to Home screen" மூலம் செயலியாக நிறுவலாம்.',
    lastSync: 'கடைசி ஒத்திசைவு', never: 'இல்லை', dayEq: 'நாள் கணக்கு',
  },
};

/* ---------- helpers ---------- */
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const uid = () => (crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2, 10));
const pad = n => String(n).padStart(2, '0');
const ymd = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const addDays = (s, n) => { const d = new Date(s + 'T00:00:00'); d.setDate(d.getDate() + n); return ymd(d); };
const money = n => '₹' + (Math.round(n * 100) / 100).toLocaleString('en-IN');
const factor = s => (s === 'full' ? 1 : s === 'am' || s === 'pm' ? 0.5 : 0);
let lang = 'en';
const t = k => (I18N[lang] && I18N[lang][k]) || I18N.en[k] || k;

/* ---------- storage (IndexedDB, everything cached in memory) ---------- */
// record: {k, d:{...}, u:updatedAt, del:0|1, dirty:0|1}
// keys:  L:<id> labourer | A:<date>:<labourId> attendance | R:<date>:<M|F> day wage override
let idb; const recs = new Map(); const meta = { lang: 'en', since: 0, server: '', key: '', lastSync: 0 };
function openDB() {
  return new Promise((res, rej) => {
    const r = indexedDB.open('labour-db', 1);
    r.onupgradeneeded = () => { r.result.createObjectStore('rec', { keyPath: 'k' }); r.result.createObjectStore('meta'); };
    r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error);
  });
}
const idbAll = st => new Promise(res => { const q = idb.transaction(st).objectStore(st).getAll(); q.onsuccess = () => res(q.result); });
const idbKeys = st => new Promise(res => { const q = idb.transaction(st).objectStore(st).getAllKeys(); q.onsuccess = () => res(q.result); });
const idbGet = (st, k) => new Promise(res => { const q = idb.transaction(st).objectStore(st).get(k); q.onsuccess = () => res(q.result); });
const idbPut = (st, v, k) => idb.transaction(st, 'readwrite').objectStore(st).put(v, k);
async function load() {
  idb = await openDB();
  (await idbAll('rec')).forEach(r => recs.set(r.k, r));
  for (const k of Object.keys(meta)) { const v = await idbGet('meta', k); if (v !== undefined) meta[k] = v; }
  lang = meta.lang;
}
const saveMeta = (k, v) => { meta[k] = v; idbPut('meta', v, k); };
function put(k, d, del = 0) {
  const r = { k, d, u: Date.now(), del, dirty: 1 };
  recs.set(k, r); idbPut('rec', r); scheduleSync(); return r;
}
const live = prefix => [...recs.values()].filter(r => !r.del && r.k.startsWith(prefix));
const labourers = () => live('L:').map(r => ({ id: r.k.slice(2), ...r.d }));
const labById = id => { const r = recs.get('L:' + id); return r ? { id, ...r.d } : null; };
const attOf = (date, id) => { const r = recs.get(`A:${date}:${id}`); return r && !r.del ? r.d : null; };
const dayRate = (date, g) => { const r = recs.get(`R:${date}:${g}`); return r && !r.del ? r.d.rate : null; };

/* ---------- domain actions ---------- */
function mark(date, lid, s) {
  const lab = labById(lid), cur = attOf(date, lid);
  if (cur && cur.s === s) { put(`A:${date}:${lid}`, cur, 1); return; } // tap again = clear
  const base = cur && cur.ov ? cur.rate : (dayRate(date, lab.g) ?? lab.wage);
  put(`A:${date}:${lid}`, { date, lid, s, rate: base, ov: cur && cur.ov ? 1 : 0 });
}
function setPersonRate(date, lid, rate) {
  const cur = attOf(date, lid); if (!cur) return;
  put(`A:${date}:${lid}`, { ...cur, rate, ov: 1 });
}
function setDayRate(date, g, val) {
  const has = val !== '' && !isNaN(+val);
  if (has) put(`R:${date}:${g}`, { date, g, rate: +val }); else if (recs.has(`R:${date}:${g}`)) put(`R:${date}:${g}`, { date, g }, 1);
  for (const r of live(`A:${date}:`)) { // re-price this day's non-manual records
    const lab = labById(r.d.lid); if (!lab || lab.g !== g || r.d.ov) continue;
    put(r.k, { ...r.d, rate: has ? +val : lab.wage });
  }
}

/* ---------- sync ---------- */
let syncing = false, syncTimer, online = navigator.onLine, syncErr = false;
const pendingCount = () => [...recs.values()].filter(r => r.dirty).length;
function scheduleSync() { updateSyncBtn(); clearTimeout(syncTimer); syncTimer = setTimeout(sync, 1500); }
async function sync(manual) {
  if (syncing) return;
  if (!navigator.onLine) { if (manual === true) toast(t('offline')); return; }
  syncing = true; syncErr = false; updateSyncBtn();
  try {
    const sent = [...recs.values()].filter(r => r.dirty);
    const res = await fetch((meta.server || '').replace(/\/$/, '') + '/api/sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...(meta.key ? { 'x-sync-key': meta.key } : {}) },
      body: JSON.stringify({ since: meta.since, records: sent.map(({ k, d, u, del }) => ({ k, d, u, del })) }),
    });
    if (!res.ok) throw new Error(res.status);
    const out = await res.json();
    for (const s of sent) { const cur = recs.get(s.k); if (cur && cur.u === s.u) { cur.dirty = 0; idbPut('rec', cur); } }
    for (const r of out.records) {
      const cur = recs.get(r.k);
      if (!cur || !cur.dirty) { const n = { k: r.k, d: r.d, u: r.u, del: r.del, dirty: 0 }; recs.set(r.k, n); idbPut('rec', n); }
    }
    saveMeta('since', out.seq); saveMeta('lastSync', Date.now());
    if (out.records.length && !document.querySelector('dialog[open]')) render(true);
  } catch (e) { syncErr = true; if (manual === true) toast(t('syncFail')); }
  syncing = false; updateSyncBtn();
}
function updateSyncBtn() {
  const b = $('#syncbtn'), p = pendingCount();
  b.className = 'sync ' + (!navigator.onLine ? 'off' : p || syncErr ? 'pend' : '');
  b.textContent = !navigator.onLine ? '⛔ ' + t('offline') + (p ? ` · ${p}` : '')
    : syncing ? '⟳ …' : p ? `⟳ ${p} ${t('pending')}` : '✓ ' + t('synced');
}
addEventListener('online', () => { updateSyncBtn(); sync(); });
addEventListener('offline', updateSyncBtn);
setInterval(() => { if (pendingCount() || navigator.onLine) sync(); }, 60000);

/* ---------- UI shell ---------- */
let tab = 'att', date = ymd(new Date()), q = '';
let repFrom = ymd(new Date(new Date().getFullYear(), new Date().getMonth(), 1)), repTo = ymd(new Date());
const TABS = [['att', '📋', 'attendance'], ['lab', '👥', 'labour'], ['rep', '📊', 'report'], ['set', '⚙️', 'settings']];
function toast(m) { const e = $('#toast'); e.textContent = m; e.classList.add('show'); clearTimeout(toast.t); toast.t = setTimeout(() => e.classList.remove('show'), 1800); }
function chrome() {
  document.documentElement.lang = lang === 'ta' ? 'ta' : 'en';
  $('#title').textContent = t('app');
  $('#nav').innerHTML = TABS.map(([k, ic, l]) => `<button data-act="tab" data-v="${k}" class="${tab === k ? 'on' : ''}"><span>${ic}</span>${esc(t(l))}</button>`).join('');
  updateSyncBtn();
}
function render(soft) {
  chrome();
  if (soft && tab === 'att' && $('#att-list')) return drawAttList();
  if (soft && document.activeElement && ['INPUT', 'SELECT'].includes(document.activeElement.tagName) && tab !== 'lab') return;
  $('#view').innerHTML = { att: attView, lab: labView, rep: repView, set: setView }[tab]();
  if (tab === 'att') drawAttList();
}

/* ---------- attendance ---------- */
function attView() {
  const dr = g => dayRate(date, g);
  return `
  <div class="date">
    <button class="btn sec" data-act="day" data-v="-1">‹</button>
    <input type="date" id="date" value="${date}">
    <button class="btn sec" data-act="day" data-v="1">›</button>
  </div>
  <details class="card"><summary>💰 ${esc(t('dayRate'))}</summary>
    <p class="mu">${esc(t('dayRateHint'))}</p>
    <div class="two">
      <div><label>${esc(t('M'))}</label><input type="number" inputmode="decimal" data-rate="M" value="${dr('M') ?? ''}" placeholder="${esc(t('normal'))}"></div>
      <div><label>${esc(t('F'))}</label><input type="number" inputmode="decimal" data-rate="F" value="${dr('F') ?? ''}" placeholder="${esc(t('normal'))}"></div>
    </div>
  </details>
  <div class="row" style="margin-bottom:10px">
    <input id="q" class="grow" type="search" placeholder="${esc(t('search'))}" value="${esc(q)}">
    <button class="btn sec" data-act="markall" style="white-space:nowrap">✓ ${esc(t('markAll'))}</button>
  </div>
  <div id="att-list"></div>`;
}
function drawAttList() {
  const el = $('#att-list'); if (!el) return;
  const all = labourers().filter(l => l.active !== false || attOf(date, l.id));
  const list = all.filter(l => !q || l.name.toLowerCase().includes(q.toLowerCase())).sort((a, b) => a.name.localeCompare(b.name));
  let present = 0, pay = 0, dayEq = 0;
  for (const l of all) { const a = attOf(date, l.id); if (a) { const f = factor(a.s); if (f) present++; dayEq += f; pay += f * a.rate; } }
  el.innerHTML = `
  <div class="stats">
    <div><b>${present}</b><small>${esc(t('present'))}</small></div>
    <div><b>${dayEq}</b><small>${esc(t('dayEq'))}</small></div>
    <div><b>${money(pay)}</b><small>${esc(t('wages'))}</small></div>
  </div>` + (list.length ? list.map(l => {
    const a = attOf(date, l.id), s = a && a.s;
    return `<div class="card">
      <div class="row sp"><div><span class="name">${esc(l.name)}</span> <span class="badge ${l.g}">${esc(t(l.g))}</span></div>
        ${a && factor(a.s) ? `<button class="rate ${a.ov ? 'ov' : ''}" data-act="rate" data-id="${l.id}">${money(a.rate * factor(a.s))} ✎</button>` : `<span class="mu">${money(dayRate(date, l.g) ?? l.wage)}</span>`}
      </div>
      <div class="seg">${['full', 'am', 'pm', 'abs'].map(k => `<button class="${k} ${s === k ? 'on' : ''}" data-act="mark" data-id="${l.id}" data-s="${k}">${esc(t(k))}</button>`).join('')}</div>
    </div>`;
  }).join('') : `<div class="empty">${esc(t('noLabour'))}</div>`);
}

/* ---------- labour management ---------- */
function labView() {
  const list = labourers().sort((a, b) => a.name.localeCompare(b.name));
  return (list.length ? list.map(l => `
    <div class="card row sp" data-act="editlab" data-id="${l.id}">
      <div><span class="name">${esc(l.name)}</span> <span class="badge ${l.g}">${esc(t(l.g))}</span>
        ${l.active === false ? `<span class="mu">· ${esc(t('inactive'))}</span>` : ''}
        <div class="mu">${esc(l.phone || '')}</div></div>
      <b>${money(l.wage)}</b>
    </div>`).join('') : `<div class="empty">${esc(t('noLabour'))}</div>`) +
    `<button class="fab" data-act="addlab" aria-label="${esc(t('add'))}">+</button>`;
}
function labDialog(id) {
  const l = id ? labById(id) : { name: '', g: 'M', phone: '', wage: '', active: true };
  const dlg = $('#dlg');
  dlg.innerHTML = `<form method="dialog" id="labform">
    <h2>${esc(id ? t('edit') : t('add'))}</h2>
    <label>${esc(t('name'))}</label><input name="name" required value="${esc(l.name)}">
    <label>${esc(t('gender'))}</label>
    <div class="gsel"><button type="button" data-g="M" class="${l.g === 'M' ? 'on' : ''}">${esc(t('M'))}</button><button type="button" data-g="F" class="${l.g === 'F' ? 'on' : ''}">${esc(t('F'))}</button></div>
    <label>${esc(t('wage'))}</label><input name="wage" type="number" inputmode="decimal" min="0" required value="${l.wage}">
    <label>${esc(t('phone'))}</label><input name="phone" type="tel" value="${esc(l.phone)}">
    <label class="row" style="color:var(--tx);font-size:16px"><input type="checkbox" name="active" style="width:auto" ${l.active !== false ? 'checked' : ''}> ${esc(t('active'))}</label>
    <div class="row" style="margin-top:14px">
      ${id ? `<button type="button" class="btn dng" id="lbdel">${esc(t('del'))}</button>` : ''}
      <span class="grow"></span><button type="button" class="btn sec" id="lbcancel">${esc(t('cancel'))}</button><button class="btn">${esc(t('save'))}</button>
    </div></form>`;
  let g = l.g;
  dlg.querySelectorAll('[data-g]').forEach(b => b.onclick = () => { g = b.dataset.g; dlg.querySelectorAll('[data-g]').forEach(x => x.classList.toggle('on', x === b)); });
  $('#lbcancel').onclick = () => dlg.close();
  if (id) $('#lbdel').onclick = () => { if (confirm(t('confirmDel'))) { put('L:' + id, recs.get('L:' + id).d, 1); dlg.close(); render(); } };
  $('#labform').onsubmit = e => {
    const f = new FormData(e.target);
    put('L:' + (id || uid()), { name: f.get('name').trim(), g, wage: +f.get('wage'), phone: f.get('phone').trim(), active: f.get('active') === 'on' });
    render(); toast(t('saved'));
  };
  dlg.showModal();
}

/* ---------- report ---------- */
function reportRows() {
  const by = {};
  for (const r of live('A:')) {
    const a = r.d; if (a.date < repFrom || a.date > repTo) continue;
    const o = by[a.lid] ||= { id: a.lid, full: 0, half: 0, pay: 0 };
    const f = factor(a.s); if (a.s === 'full') o.full++; else if (f) o.half++;
    o.pay += f * a.rate;
  }
  return Object.values(by).map(o => { const l = labById(o.id) || { name: '?', g: 'M' }; return { ...o, name: l.name, g: l.g }; })
    .sort((a, b) => a.name.localeCompare(b.name));
}
function repView() {
  const rows = reportRows(), tot = rows.reduce((s, r) => ({ full: s.full + r.full, half: s.half + r.half, pay: s.pay + r.pay }), { full: 0, half: 0, pay: 0 });
  return `<div class="card two">
    <div><label>${esc(t('from'))}</label><input type="date" id="rf" value="${repFrom}"></div>
    <div><label>${esc(t('to'))}</label><input type="date" id="rt" value="${repTo}"></div></div>` +
    (rows.length ? `<div class="card"><table>
      <thead><tr><th>${esc(t('name'))}</th><th>${esc(t('fullDays'))}</th><th>${esc(t('halfDays'))}</th><th>${esc(t('pay'))}</th></tr></thead>
      <tbody>${rows.map(r => `<tr><td>${esc(r.name)} <span class="badge ${r.g}">${esc(t(r.g))}</span></td><td>${r.full}</td><td>${r.half}</td><td>${money(r.pay)}</td></tr>`).join('')}</tbody>
      <tfoot><tr><td>${esc(t('total'))}</td><td>${tot.full}</td><td>${tot.half}</td><td>${money(tot.pay)}</td></tr></tfoot></table></div>
      <button class="btn sec full" data-act="csv">⬇ ${esc(t('export'))}</button>` : `<div class="empty">${esc(t('noRecords'))}</div>`);
}
function exportCSV() {
  const lines = [['Name', 'Gender', 'Full days', 'Half days', 'Pay'], ...reportRows().map(r => [r.name, r.g, r.full, r.half, r.pay])]
    .map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(','));
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob(['﻿' + lines.join('\n')], { type: 'text/csv' }));
  a.download = `wages_${repFrom}_${repTo}.csv`; a.click();
}

/* ---------- settings ---------- */
function setView() {
  return `<div class="card"><label style="margin-top:0">${esc(t('language'))}</label>
      <div class="gsel"><button class="${lang === 'en' ? 'on' : ''}" data-act="lang" data-v="en">English</button><button class="${lang === 'ta' ? 'on' : ''}" data-act="lang" data-v="ta">தமிழ்</button></div></div>
    <div class="card"><label style="margin-top:0">${esc(t('server'))}</label><input id="srv" value="${esc(meta.server)}" placeholder="https://example.com">
      <label>${esc(t('key'))}</label><input id="key" type="password" value="${esc(meta.key)}">
      <p class="mu">${esc(t('lastSync'))}: ${meta.lastSync ? new Date(meta.lastSync).toLocaleString() : esc(t('never'))} · ${pendingCount()} ${esc(t('pending'))}</p>
      <button class="btn full" data-act="sync">⟳ ${esc(t('syncNow'))}</button></div>
    <p class="mu">${esc(t('installHint'))}</p>`;
}

/* ---------- events ---------- */
document.addEventListener('click', e => {
  const b = e.target.closest('[data-act]'); if (!b) return;
  const { act, v, id, s } = b.dataset;
  if (act === 'tab') { tab = v; render(); }
  else if (act === 'sync') sync(true);
  else if (act === 'day') { date = addDays(date, +v); render(); }
  else if (act === 'mark') { mark(date, id, s); drawAttList(); updateSyncBtn(); }
  else if (act === 'markall') { for (const l of labourers().filter(l => l.active !== false)) if (!attOf(date, l.id)) mark(date, l.id, 'full'); drawAttList(); }
  else if (act === 'rate') {
    const a = attOf(date, id), n = prompt(t('rateFor'), a.rate);
    if (n !== null && n.trim() !== '' && !isNaN(+n)) { setPersonRate(date, id, +n); drawAttList(); }
  }
  else if (act === 'addlab') labDialog();
  else if (act === 'editlab') labDialog(id);
  else if (act === 'csv') exportCSV();
  else if (act === 'lang') { lang = v; saveMeta('lang', v); render(); }
});
document.addEventListener('input', e => {
  if (e.target.id === 'q') { q = e.target.value; drawAttList(); }
});
document.addEventListener('change', e => {
  const el = e.target;
  if (el.id === 'date' && el.value) { date = el.value; render(); }
  else if (el.dataset.rate) { setDayRate(date, el.dataset.rate, el.value.trim()); drawAttList(); }
  else if (el.id === 'rf' || el.id === 'rt') { repFrom = $('#rf').value || repFrom; repTo = $('#rt').value || repTo; render(); }
  else if (el.id === 'srv') saveMeta('server', el.value.trim());
  else if (el.id === 'key') saveMeta('key', el.value);
});

/* ---------- boot ---------- */
(async () => {
  await load();
  render();
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
  if (navigator.storage && navigator.storage.persist) navigator.storage.persist();
  sync();
})();
