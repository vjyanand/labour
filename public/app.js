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
    addPerson: '+ Add labourer to this day', emptyDay: 'No one is listed for this day. Pick labourers from the dropdown below.', fromPrev: 'List copied from', remove: 'Remove', yourName: 'Your name', yourNameHint: 'Saved with every change you make, so the team can see who did what.', auditLog: 'Audit log', allDates: 'All dates', noLog: 'No log entries', back: 'Back', lastBy: 'by',
    log_mark: '{who}: marked {s} on {date}', log_clear: '{who}: cleared mark on {date}', log_rate: '{who}: wage set to {rate} on {date}',
    log_dayrate: '{g} wage on {date} set to {rate}', log_addday: '{who}: added to {date}', log_rmday: '{who}: removed from {date}',
    log_lab_add: 'Labourer added: {who}', log_lab_edit: 'Labourer edited: {who} {chg}', log_lab_del: 'Labourer deleted: {who}', confirmRm: 'Remove this person from this day (their attendance for the day is deleted)?', summary: 'Summary', grid: 'Grid', span15: '15 days', spanMonth: 'Month', legend: '✓ full · ◐ morning · ◑ afternoon · ✗ absent · ● listed, not marked',
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
    addPerson: '+ இந்நாளுக்கு தொழிலாளர் சேர்', emptyDay: 'இந்த நாளுக்கு பட்டியலில் யாரும் இல்லை. கீழே உள்ள பட்டியலில் இருந்து தொழிலாளரை தேர்ந்தெடுக்கவும்.', fromPrev: 'பட்டியல் எடுக்கப்பட்ட நாள்', remove: 'நீக்கு', yourName: 'உங்கள் பெயர்', yourNameHint: 'நீங்கள் செய்யும் ஒவ்வொரு மாற்றத்துடனும் சேமிக்கப்படும்; யார் என்ன செய்தார் என்று தெரியும்.', auditLog: 'தணிக்கை பதிவு', allDates: 'அனைத்து நாட்கள்', noLog: 'பதிவுகள் இல்லை', back: 'பின்', lastBy: 'செய்தவர்',
    log_mark: '{who}: {date} அன்று {s} குறிக்கப்பட்டது', log_clear: '{who}: {date} அன்று குறியீடு நீக்கப்பட்டது', log_rate: '{who}: {date} அன்று கூலி {rate} ஆக மாற்றப்பட்டது',
    log_dayrate: '{date} அன்று {g} கூலி {rate} ஆக அமைக்கப்பட்டது', log_addday: '{who}: {date} பட்டியலில் சேர்க்கப்பட்டது', log_rmday: '{who}: {date} பட்டியலில் இருந்து நீக்கப்பட்டது',
    log_lab_add: 'தொழிலாளர் சேர்க்கப்பட்டார்: {who}', log_lab_edit: 'தொழிலாளர் திருத்தப்பட்டது: {who} {chg}', log_lab_del: 'தொழிலாளர் நீக்கப்பட்டார்: {who}', confirmRm: 'இந்த நாளுக்கான பட்டியலில் இருந்து நீக்கவா? (இன்றைய வருகை பதிவும் நீக்கப்படும்)', summary: 'சுருக்கம்', grid: 'அட்டவணை', span15: '15 நாட்கள்', spanMonth: 'மாதம்', legend: '✓ முழு · ◐ காலை · ◑ மதியம் · ✗ வரவில்லை · ● பட்டியலில், குறிக்கவில்லை',
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
let idb; const recs = new Map(); const meta = { user: '', lang: 'en', since: 0, server: '', key: '', lastSync: 0 };
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
  const r = { k, d, u: Date.now(), del, dirty: 1, b: meta.user };
  recs.set(k, r); idbPut('rec', r); scheduleSync(); return r;
}
// append-only audit trail: one unique record per action, synced like everything else, never deleted
function audit(act, o) {
  const u = Date.now(), k = `G:${u}:${uid().slice(0, 6)}`;
  const r = { k, d: { act, ...o }, u, del: 0, dirty: 1, b: meta.user || '?' };
  recs.set(k, r); idbPut('rec', r); scheduleSync();
}
const live = prefix => [...recs.values()].filter(r => !r.del && r.k.startsWith(prefix));
const labourers = () => live('L:').map(r => ({ id: r.k.slice(2), ...r.d }));
const labById = id => { const r = recs.get('L:' + id); return r ? { id, ...r.d } : null; };
const attOf = (date, id) => { const r = recs.get(`A:${date}:${id}`); return r && !r.del ? r.d : null; };
const dayRate = (date, g) => { const r = recs.get(`R:${date}:${g}`); return r && !r.del ? r.d.rate : null; };

/* ---------- day roster ---------- */
// D:<date>:<labourId> = labourer is on that day's list. A new day starts from the latest earlier day's list.
const liveLab = id => { const r = recs.get('L:' + id); return r && !r.del ? { id, ...r.d } : null; };
function dayMembers(d) {
  const s = new Set();
  for (const r of live(`D:${d}:`)) s.add(r.d.lid);
  for (const r of live(`A:${d}:`)) s.add(r.d.lid);
  return s;
}
function lastDayBefore(d) {
  let best = '';
  for (const r of recs.values()) if (!r.del && (r.k[0] === 'D' || r.k[0] === 'A') && r.d.date < d && r.d.date > best) best = r.d.date;
  return best;
}
function dayList(d) {
  let ids = dayMembers(d), from = '';
  if (!ids.size && (from = lastDayBefore(d))) ids = new Set([...dayMembers(from)].filter(id => { const l = liveLab(id); return l && l.active !== false; }));
  else ids = new Set([...ids].filter(id => labById(id)));
  return { ids: [...ids], from: ids.size ? from : '' };
}
function ensureRoster(d) { // make a carried-over list permanent before the first change
  if (dayMembers(d).size) return;
  for (const id of dayList(d).ids) put(`D:${d}:${id}`, { date: d, lid: id });
}
function addToDay(d, id) {
  if (!liveLab(id)) return false;
  ensureRoster(d);
  if (dayMembers(d).has(id)) return false; // no double add
  put(`D:${d}:${id}`, { date: d, lid: id });
  audit('addday', { date: d, who: liveLab(id).name });
  return true;
}

/* ---------- domain actions ---------- */
function mark(date, lid, s) {
  ensureRoster(date);
  const lab = labById(lid), cur = attOf(date, lid);
  if (cur && cur.s === s) { put(`A:${date}:${lid}`, cur, 1); audit('clear', { date, who: lab.name }); return; } // tap again = clear
  const base = cur && cur.ov ? cur.rate : (dayRate(date, lab.g) ?? lab.wage);
  put(`A:${date}:${lid}`, { date, lid, s, rate: base, ov: cur && cur.ov ? 1 : 0 });
  audit('mark', { date, who: lab.name, s });
}
function setPersonRate(date, lid, rate) {
  const cur = attOf(date, lid); if (!cur) return;
  put(`A:${date}:${lid}`, { ...cur, rate, ov: 1 });
  audit('rate', { date, who: labById(lid).name, rate });
}
function setDayRate(date, g, val) {
  const has = val !== '' && !isNaN(+val);
  audit('dayrate', { date, g, rate: has ? +val : null });
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
      body: JSON.stringify({ since: meta.since, records: sent.map(({ k, d, u, del, b }) => ({ k, d, u, del, b })) }),
    });
    if (!res.ok) throw new Error(res.status);
    const out = await res.json();
    for (const s of sent) { const cur = recs.get(s.k); if (cur && cur.u === s.u) { cur.dirty = 0; idbPut('rec', cur); } }
    for (const r of out.records) {
      const cur = recs.get(r.k);
      if (!cur || !cur.dirty) { const n = { k: r.k, d: r.d, u: r.u, del: r.del, b: r.b, dirty: 0 }; recs.set(r.k, n); idbPut('rec', n); }
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
  $('#nav').innerHTML = TABS.map(([k, ic, l]) => `<button data-act="tab" data-v="${k}" class="${tab === k || (tab === 'log' && k === 'set') ? 'on' : ''}"><span>${ic}</span>${esc(t(l))}</button>`).join('');
  updateSyncBtn();
}
function render(soft) {
  chrome();
  if (soft && tab === 'att' && $('#att-list')) return drawAttList();
  if (soft && document.activeElement && ['INPUT', 'SELECT'].includes(document.activeElement.tagName) && tab !== 'lab') return;
  $('#view').innerHTML = { att: attView, lab: labView, rep: repView, set: setView, log: logView }[tab]();
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
  const { ids, from } = dayList(date);
  const all = ids.map(labById).filter(Boolean);
  const list = all.filter(l => !q || l.name.toLowerCase().includes(q.toLowerCase())).sort((a, b) => a.name.localeCompare(b.name));
  let present = 0, pay = 0, dayEq = 0;
  for (const l of all) { const a = attOf(date, l.id); if (a) { const f = factor(a.s); if (f) present++; dayEq += f; pay += f * a.rate; } }
  const inList = new Set(ids);
  const avail = labourers().filter(l => l.active !== false && !inList.has(l.id)).sort((a, b) => a.name.localeCompare(b.name));
  const picker = avail.length ? `<select id="addsel" class="${all.length ? '' : 'big'}"><option value="">${esc(t('addPerson'))}</option>${avail.map(l => `<option value="${l.id}">${esc(l.name)} (${esc(t(l.g))})</option>`).join('')}</select>` : '';
  el.innerHTML = `
  <div class="stats">
    <div><b>${present}</b><small>${esc(t('present'))}</small></div>
    <div><b>${dayEq}</b><small>${esc(t('dayEq'))}</small></div>
    <div><b>${money(pay)}</b><small>${esc(t('wages'))}</small></div>
  </div>` + (from ? `<p class="mu">↩ ${esc(t('fromPrev'))} ${from}</p>` : '') + (list.length ? list.map(l => {
    const a = attOf(date, l.id), s = a && a.s;
    return `<div class="card">
      <div class="row sp"><div><span class="name">${esc(l.name)}</span> <span class="badge ${l.g}">${esc(t(l.g))}</span></div>
        <span class="row">${a && factor(a.s) ? `<button class="rate ${a.ov ? 'ov' : ''}" data-act="rate" data-id="${l.id}">${money(a.rate * factor(a.s))} ✎</button>` : `<span class="mu">${money(dayRate(date, l.g) ?? l.wage)}</span>`}
          <button class="rate" data-act="rmday" data-id="${l.id}" aria-label="${esc(t('remove'))}">✕</button></span>
      </div>
      ${a ? lastBy(`A:${date}:${l.id}`) : ''}
      <div class="seg">${['full', 'am', 'pm', 'abs'].map(k => `<button class="${k} ${s === k ? 'on' : ''}" data-act="mark" data-id="${l.id}" data-s="${k}">${esc(t(k))}</button>`).join('')}</div>
    </div>`;
  }).join('') : `<div class="empty">${esc(all.length ? '' : avail.length ? t('emptyDay') : t('noLabour'))}</div>`) + picker;
}

const fmtT = u => new Date(u).toLocaleString(lang === 'ta' ? 'ta-IN' : 'en-IN', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
function lastBy(k) { const r = recs.get(k); return r && r.b ? `<div class="mu" style="margin-top:6px">✎ ${esc(t('lastBy'))} ${esc(r.b)} · ${fmtT(r.u)}</div>` : ''; }

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
  if (id) $('#lbdel').onclick = () => { if (confirm(t('confirmDel'))) { put('L:' + id, recs.get('L:' + id).d, 1); audit('lab_del', { who: l.name }); dlg.close(); render(); } };
  $('#labform').onsubmit = e => {
    const f = new FormData(e.target);
    const nd = { name: f.get('name').trim(), g, wage: +f.get('wage'), phone: f.get('phone').trim(), active: f.get('active') === 'on' };
    const chg = id ? Object.keys(nd).filter(k => String(nd[k]) !== String(l[k])).map(k => `${k}: ${l[k]} → ${nd[k]}`).join(', ') : '';
    put('L:' + (id || uid()), nd);
    if (!id) audit('lab_add', { who: nd.name }); else if (chg) audit('lab_edit', { who: nd.name, chg: '(' + chg + ')' });
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
  const toggle = `<div class="gsel" style="margin-bottom:10px"><button class="${repMode === 'sum' ? 'on' : ''}" data-act="repmode" data-v="sum">${esc(t('summary'))}</button><button class="${repMode === 'grid' ? 'on' : ''}" data-act="repmode" data-v="grid">${esc(t('grid'))}</button></div>`;
  if (repMode === 'grid') return toggle + gridView();
  const rows = reportRows(), tot = rows.reduce((s, r) => ({ full: s.full + r.full, half: s.half + r.half, pay: s.pay + r.pay }), { full: 0, half: 0, pay: 0 });
  return toggle + `<div class="card two">
    <div><label>${esc(t('from'))}</label><input type="date" id="rf" value="${repFrom}"></div>
    <div><label>${esc(t('to'))}</label><input type="date" id="rt" value="${repTo}"></div></div>` +
    (rows.length ? `<div class="card"><table>
      <thead><tr><th>${esc(t('name'))}</th><th>${esc(t('fullDays'))}</th><th>${esc(t('halfDays'))}</th><th>${esc(t('pay'))}</th></tr></thead>
      <tbody>${rows.map(r => `<tr><td>${esc(r.name)} <span class="badge ${r.g}">${esc(t(r.g))}</span></td><td>${r.full}</td><td>${r.half}</td><td>${money(r.pay)}</td></tr>`).join('')}</tbody>
      <tfoot><tr><td>${esc(t('total'))}</td><td>${tot.full}</td><td>${tot.half}</td><td>${money(tot.pay)}</td></tr></tfoot></table></div>
      <button class="btn sec full" data-act="csv">⬇ ${esc(t('export'))}</button>` : `<div class="empty">${esc(t('noRecords'))}</div>`);
}
let repMode = 'sum', gridSpan = '15', gridAnchor = ymd(new Date());
function gridRange() {
  const [y, m, dd] = gridAnchor.split('-').map(Number), last = new Date(y, m, 0).getDate();
  const [a, b] = gridSpan === 'month' ? [1, last] : dd <= 15 ? [1, 15] : [16, last];
  return { y, m, a, b };
}
function gridShift(n) {
  const { y, m, a } = gridRange();
  if (gridSpan === 'month') gridAnchor = ymd(new Date(y, m - 1 + n, 1));
  else { const i = (y * 12 + m - 1) * 2 + (a === 16 ? 1 : 0) + n; gridAnchor = ymd(new Date(Math.floor(i / 24), Math.floor((i % 24) / 2), i % 2 ? 16 : 1)); }
}
function gridView() {
  const { y, m, a, b } = gridRange(), days = [];
  for (let d = a; d <= b; d++) days.push(`${y}-${pad(m)}-${pad(d)}`);
  const ids = new Set();
  for (const d of days) dayMembers(d).forEach(id => ids.add(id));
  const rows = [...ids].map(labById).filter(Boolean).sort((p, q) => p.name.localeCompare(q.name));
  const colPay = days.map(() => 0);
  const SYM = { full: '✓', am: '◐', pm: '◑', abs: '✗' };
  const body = rows.map(l => {
    let eq = 0, pay = 0;
    const cells = days.map((d, i) => {
      const at = attOf(d, l.id);
      if (at) { const f = factor(at.s); eq += f; pay += f * at.rate; colPay[i] += f * at.rate; return `<td class="c ${at.s}" data-act="goday" data-v="${d}">${SYM[at.s]}</td>`; }
      return dayMembers(d).has(l.id) ? `<td class="c" data-act="goday" data-v="${d}">●</td>` : '<td class="c"></td>';
    }).join('');
    return `<tr><td class="nm">${esc(l.name)} <span class="badge ${l.g}">${esc(t(l.g))}</span></td>${cells}<td><b>${eq}</b></td><td>${money(pay)}</td></tr>`;
  }).join('');
  const title = new Date(y, m - 1, 1).toLocaleDateString(lang === 'ta' ? 'ta-IN' : 'en-IN', { month: 'long', year: 'numeric' });
  const tot = colPay.reduce((p, q) => p + q, 0);
  return `<div class="row" style="margin-bottom:10px"><div class="gsel grow"><button class="${gridSpan === '15' ? 'on' : ''}" data-act="span" data-v="15">${esc(t('span15'))}</button><button class="${gridSpan === 'month' ? 'on' : ''}" data-act="span" data-v="month">${esc(t('spanMonth'))}</button></div></div>
  <div class="date"><button class="btn sec" data-act="shift" data-v="-1">‹</button><div class="grow card" style="margin:0;text-align:center;font-weight:600">${esc(title)} · ${a}–${b}</div><button class="btn sec" data-act="shift" data-v="1">›</button></div>` +
  (rows.length ? `<div class="gridwrap"><table class="grid"><thead><tr><th class="nm">${esc(t('name'))}</th>${days.map(d => `<th>${+d.slice(8)}</th>`).join('')}<th>${esc(t('days'))}</th><th>${esc(t('pay'))}</th></tr></thead>
    <tbody>${body}</tbody>
    <tfoot><tr><td class="nm">${esc(t('total'))}</td>${colPay.map(p => `<td class="c" style="font-size:10px">${p ? Math.round(p) : ''}</td>`).join('')}<td></td><td>${money(tot)}</td></tr></tfoot></table></div>
    <p class="mu">${esc(t('legend'))}</p>` : `<div class="empty">${esc(t('noRecords'))}</div>`);
}
function exportCSV() {
  const lines = [['Name', 'Gender', 'Full days', 'Half days', 'Pay'], ...reportRows().map(r => [r.name, r.g, r.full, r.half, r.pay])]
    .map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(','));
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob(['﻿' + lines.join('\n')], { type: 'text/csv' }));
  a.download = `wages_${repFrom}_${repTo}.csv`; a.click();
}

/* ---------- audit log ---------- */
let logDate = '';
function logText(o) {
  const v = { who: esc(o.who), s: esc(t(o.s)), date: o.date, rate: o.rate == null ? esc(t('normal')) : money(o.rate), g: esc(t(o.g || '')), chg: esc(o.chg || '') };
  return (t('log_' + o.act)).replace(/\{(\w+)\}/g, (m, k) => v[k] ?? '');
}
function logView() {
  const items = live('G:').filter(r => !logDate || r.d.date === logDate).sort((a, b) => b.u - a.u).slice(0, 300);
  return `<div class="row" style="margin-bottom:10px"><button class="btn sec sm" data-act="tab" data-v="set">‹ ${esc(t('back'))}</button>
    <input type="date" id="logdate" value="${logDate}" class="grow"><button class="btn sec sm" data-act="logall">${esc(t('allDates'))}</button></div>` +
    (items.length ? items.map(r => `<div class="card"><div>${logText(r.d)}</div><div class="mu">${esc(r.b)} · ${fmtT(r.u)}</div></div>`).join('') : `<div class="empty">${esc(t('noLog'))}</div>`);
}

/* ---------- settings ---------- */
function setView() {
  return `<div class="card"><label style="margin-top:0">${esc(t('yourName'))}</label><input id="uname" value="${esc(meta.user)}">
      <p class="mu" style="margin-bottom:0">${esc(t('yourNameHint'))}</p></div>
    <button class="btn sec full" style="margin-bottom:10px" data-act="tab" data-v="log">🕘 ${esc(t('auditLog'))}</button>
    <div class="card"><label style="margin-top:0">${esc(t('language'))}</label>
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
  else if (act === 'markall') { for (const id of dayList(date).ids) if (!attOf(date, id)) mark(date, id, 'full'); drawAttList(); }
  else if (act === 'rmday') {
    const a = attOf(date, id);
    if (a && !confirm(t('confirmRm'))) return;
    ensureRoster(date);
    audit('rmday', { date, who: labById(id).name });
    if (a) put(`A:${date}:${id}`, a, 1);
    put(`D:${date}:${id}`, { date, lid: id }, 1); drawAttList();
  }
  else if (act === 'repmode') { repMode = v; render(); }
  else if (act === 'span') { gridSpan = v; render(); }
  else if (act === 'shift') { gridShift(+v); render(); }
  else if (act === 'goday') { date = v; tab = 'att'; render(); }
  else if (act === 'rate') {
    const a = attOf(date, id), n = prompt(t('rateFor'), a.rate);
    if (n !== null && n.trim() !== '' && !isNaN(+n)) { setPersonRate(date, id, +n); drawAttList(); }
  }
  else if (act === 'addlab') labDialog();
  else if (act === 'editlab') labDialog(id);
  else if (act === 'csv') exportCSV();
  else if (act === 'logall') { logDate = ''; render(); }
  else if (act === 'lang') { lang = v; saveMeta('lang', v); render(); }
});
document.addEventListener('input', e => {
  if (e.target.id === 'q') { q = e.target.value; drawAttList(); }
});
document.addEventListener('change', e => {
  const el = e.target;
  if (el.id === 'date' && el.value) { date = el.value; render(); }
  else if (el.id === 'addsel') { if (el.value) addToDay(date, el.value); drawAttList(); }
  else if (el.dataset.rate) { setDayRate(date, el.dataset.rate, el.value.trim()); drawAttList(); }
  else if (el.id === 'rf' || el.id === 'rt') { repFrom = $('#rf').value || repFrom; repTo = $('#rt').value || repTo; render(); }
  else if (el.id === 'logdate') { logDate = el.value; render(); }
  else if (el.id === 'uname') { saveMeta('user', el.value.trim()); toast(t('saved')); }
  else if (el.id === 'srv') saveMeta('server', el.value.trim());
  else if (el.id === 'key') saveMeta('key', el.value);
});

/* ---------- who is using this phone ---------- */
function askName() {
  if (meta.user) return;
  const dlg = $('#dlg');
  dlg.innerHTML = `<form method="dialog" id="nameform"><h2>${esc(t('yourName'))}</h2><p class="mu">${esc(t('yourNameHint'))}</p>
    <input name="n" required autofocus><div class="row" style="margin-top:14px"><span class="grow"></span><button class="btn">${esc(t('save'))}</button></div></form>`;
  dlg.oncancel = e => { if (!meta.user) e.preventDefault(); };
  $('#nameform').onsubmit = e => { const n = new FormData(e.target).get('n').trim(); if (!n) return e.preventDefault(); saveMeta('user', n); dlg.oncancel = null; };
  dlg.showModal();
}

/* ---------- boot ---------- */
(async () => {
  await load();
  render();
  askName();
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
  if (navigator.storage && navigator.storage.persist) navigator.storage.persist();
  sync();
})();
