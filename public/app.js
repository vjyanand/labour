'use strict';
/* ---------- i18n ---------- */
const I18N = {
  en: {
    app: 'Farm Book', attendance: 'Attendance', labour: 'People', report: 'Report', settings: 'Settings',
    full: 'Full', am: 'Morning', pm: 'Afternoon', abs: 'Absent',
    M: 'Male', F: 'Female', name: 'Name', phone: 'Phone', wage: 'Daily wage (full day)', add: 'Add labourer', edit: 'Edit',
    save: 'Save', cancel: 'Cancel', del: 'Delete', search: 'Search…', today: 'Today', present: 'Present', total: 'Total',
    wages: 'Wages', days: 'Days', from: 'From', to: 'To', export: 'Download CSV', language: 'Language',
    syncNow: 'Sync now', online: 'Online', offline: 'Offline', pending: 'pending', synced: 'Synced',
    dayRate: 'Today\'s wage override', dayRateHint: 'Set a different full-day wage for all male/female labourers on this day. Leave blank for normal wages.',
    active: 'Currently working', noLabour: 'No labourers yet. Tap + to add.', markAll: 'Mark all full day',
    halfDays: 'Half', fullDays: 'Full', confirmDel: 'Delete this labourer? Past attendance is kept.',
    updatedBy: 'Updated by', server: 'Server address (blank = this site)', key: 'Sync key (if set on server)', syncFail: 'Sync failed, will retry', syncErrShort: 'Sync failed',
    saved: 'Saved', rateFor: 'Full-day wage for this person today (leave blank to use the normal wage)', gender: 'Gender', pay: 'Pay', normal: 'normal', inactive: 'inactive',
    noRecords: 'No attendance in this period', installHint: 'Tip: use "Add to Home screen" to install the app.',
    lastSync: 'Last sync', dataVer: 'Data version', capital: 'Capital / own money', capHint: 'Capital / own money (keep out of monthly tally)', overall: 'Overall', netAfterCap: 'Net after capital', allTime: 'All time', never: 'never', dayEq: 'Day-equivalents',
    addPerson: '+ Add labourer to this day', emptyDay: 'No one is listed for this day. Pick labourers from the dropdown below.', fromPrev: 'List copied from', remove: 'Remove', viewOnly: 'View only', viewOnlyHint: 'You can see everything, but this phone cannot change anything.', payType: 'Pay type', payDaily: 'Daily wage', payMonthly: 'Monthly salary', monthlySalary: 'Monthly salary (fixed)', monthlyTag: 'Monthly', perMonth: '/ month', monthlySalaries: 'Monthly salaries', monthCol: 'Month', tally: 'Tally', noFuture: 'Future dates are not allowed', weekSpan: 'Week', markMode: 'Mark', listMode: 'List', nobodyYet: 'No one is marked present yet', accounts: 'Accounts', expense: 'Expense', income: 'Income', addInc: 'Add income', banana: 'Banana', cardamom: 'Cardamom', net: 'Net (income − cost)', expenses: 'Expenses', description: 'Description', amount: 'Amount', petrol: 'Petrol', food: 'Food', travel: 'Travel',
    addExp: 'Add expense', noExp: 'No entries for this day', confirmExp: 'Delete this entry?', grandTotal: 'Total cost', date: 'Date',
    log_inc_add: 'Income added: {desc} {amt} ({date})', log_inc_edit: 'Income edited: {desc} {amt} ({date})', log_inc_del: 'Income deleted: {desc} {amt} ({date})', log_exp_add: 'Expense added: {desc} {amt} ({date})', log_exp_edit: 'Expense edited: {desc} {amt} ({date})', log_exp_del: 'Expense deleted: {desc} {amt} ({date})', cannotDel: 'Cannot delete: attendance was marked for this person on {date} (within the last 60 days). Make them inactive instead.', version: 'App version', changeLog: 'Change log', built: 'Built', localChanges: 'local changes', remindTitle: 'Daily reminders', remindHint: 'Push notifications asking you to mark attendance. Sent only when there is attendance still to mark.',
    remindT1: 'First reminder', remindT2: 'Second reminder', turnOn: 'Turn on', turnOff: 'Turn off', sendTest: 'Send test',
    pushNo: 'Notifications are not supported here. On iPhone, add the app to the Home Screen first.', pushDenied: 'Notifications are blocked in the browser settings.',
    pushUnavail: 'Reminders need the online server.', remindSet: 'Reminders set', testSent: 'Test sent', people: 'People', cost: 'Cost', auto: 'Auto (follow browser language)', deactivate: 'Make inactive', activate: 'Make active', yourName: 'Your name', yourNameHint: 'Saved with every change you make, so the team can see who did what.', auditLog: 'Audit log', allDates: 'All dates', noLog: 'No log entries', back: 'Back', lastBy: 'by',
    log_mark: '{who}: marked {s} on {date}', log_clear: '{who}: cleared mark on {date}', log_rate: '{who}: wage set to {rate} on {date}',
    log_dayrate: '{g} wage on {date} set to {rate}', log_addday: '{who}: added to {date}', log_rmday: '{who}: removed from {date}',
    log_lab_add: 'Labourer added: {who}', log_lab_edit: 'Labourer edited: {who} {chg}', log_lab_del: 'Labourer deleted: {who}', confirmRm: 'Remove this person from this day (their attendance for the day is deleted)?', summary: 'Summary', grid: 'Grid', span15: '15 days', spanMonth: 'Month', legend: '✓ full · ◐ morning · ◑ afternoon · ✗ absent',
  },
  ta: {
    app: 'பண்ணை கணக்கு', attendance: 'வருகை', labour: 'நபர்கள்', report: 'அறிக்கை', settings: 'அமைப்புகள்',
    full: 'முழு நாள்', am: 'காலை', pm: 'மதியம்', abs: 'வரவில்லை',
    M: 'ஆண்', F: 'பெண்', name: 'பெயர்', phone: 'தொலைபேசி', wage: 'தினக்கூலி (முழு நாள்)', add: 'தொழிலாளர் சேர்', edit: 'திருத்து',
    save: 'சேமி', cancel: 'ரத்து', del: 'நீக்கு', search: 'தேடு…', today: 'இன்று', present: 'வந்தவர்', total: 'மொத்தம்',
    wages: 'கூலி', days: 'நாட்கள்', from: 'முதல்', to: 'வரை', export: 'CSV பதிவிறக்கு', language: 'மொழி',
    syncNow: 'இப்போது ஒத்திசை', dataVer: 'தரவு பதிப்பு', capital: 'முதலீடு / சொந்தப் பணம்', capHint: 'முதலீடு / சொந்தப் பணம் (மாதக் கணக்கில் சேர்க்காது)', overall: 'ஒட்டுமொத்தம்', netAfterCap: 'முதலீட்டுக்குப் பின் நிகரம்', allTime: 'அனைத்துக் காலம்', online: 'இணைப்பில்', offline: 'இணைப்பு இல்லை', pending: 'நிலுவை', synced: 'ஒத்திசைந்தது',
    dayRate: 'இன்றைய கூலி மாற்றம்', dayRateHint: 'இந்த நாளுக்கு ஆண்/பெண் அனைவருக்கும் வேறு முழு நாள் கூலி அமைக்கவும். வழக்கமான கூலிக்கு காலியாக விடவும்.',
    active: 'தற்போது பணியில்', noLabour: 'தொழிலாளர் இல்லை. + அழுத்தி சேர்க்கவும்.', markAll: 'அனைவருக்கும் முழு நாள்',
    halfDays: 'அரை', fullDays: 'முழு', confirmDel: 'இந்த தொழிலாளரை நீக்கவா? முந்தைய வருகை பதிவுகள் இருக்கும்.',
    updatedBy: 'புதுப்பித்தவர்', server: 'சர்வர் முகவரி (காலி = இதே தளம்)', key: 'ஒத்திசைவு விசை (சர்வரில் இருந்தால்)', syncFail: 'ஒத்திசைவு தோல்வி, மீண்டும் முயற்சிக்கும்', syncErrShort: 'ஒத்திசைவு தோல்வி',
    saved: 'சேமிக்கப்பட்டது', rateFor: 'இன்று இவருக்கான முழு நாள் கூலி (வழக்கமான கூலிக்கு காலியாக விடவும்)', gender: 'பாலினம்', pay: 'கூலி', normal: 'வழக்கம்', inactive: 'பணியில் இல்லை',
    noRecords: 'இந்த காலத்தில் வருகை பதிவு இல்லை', installHint: 'குறிப்பு: "Add to Home screen" மூலம் செயலியாக நிறுவலாம்.',
    lastSync: 'கடைசி ஒத்திசைவு', never: 'இல்லை', dayEq: 'நாள் கணக்கு',
    addPerson: '+ இந்நாளுக்கு தொழிலாளர் சேர்', emptyDay: 'இந்த நாளுக்கு பட்டியலில் யாரும் இல்லை. கீழே உள்ள பட்டியலில் இருந்து தொழிலாளரை தேர்ந்தெடுக்கவும்.', fromPrev: 'பட்டியல் எடுக்கப்பட்ட நாள்', remove: 'நீக்கு', viewOnly: 'பார்வை மட்டும்', viewOnlyHint: 'நீங்கள் அனைத்தையும் பார்க்கலாம், ஆனால் இந்த போனில் மாற்றம் செய்ய முடியாது.', payType: 'ஊதிய வகை', payDaily: 'தினக்கூலி', payMonthly: 'மாத சம்பளம்', monthlySalary: 'மாத சம்பளம் (நிலையானது)', monthlyTag: 'மாதம்', perMonth: '/ மாதம்', monthlySalaries: 'மாத சம்பளங்கள்', monthCol: 'மாதம்', tally: 'மொத்த கணக்கு', noFuture: 'எதிர்கால தேதிக்கு பதிவு செய்ய முடியாது', weekSpan: 'வாரம்', markMode: 'பதிவு', listMode: 'பட்டியல்', nobodyYet: 'இதுவரை யாரும் வந்ததாகப் பதிவு இல்லை', accounts: 'கணக்கு', expense: 'செலவு', income: 'வருமானம்', addInc: 'வருமானம் சேர்', banana: 'வாழை', cardamom: 'ஏலக்காய்', net: 'நிகர (வருமானம் − செலவு)', expenses: 'செலவுகள்', description: 'விவரம்', amount: 'தொகை', petrol: 'பெட்ரோல்', food: 'உணவு', travel: 'பயணம்',
    addExp: 'செலவு சேர்', noExp: 'இந்த நாளுக்கு பதிவு இல்லை', confirmExp: 'இந்த பதிவை நீக்கவா?', grandTotal: 'மொத்த செலவு', date: 'தேதி',
    log_inc_add: 'வருமானம் சேர்க்கப்பட்டது: {desc} {amt} ({date})', log_inc_edit: 'வருமானம் திருத்தப்பட்டது: {desc} {amt} ({date})', log_inc_del: 'வருமானம் நீக்கப்பட்டது: {desc} {amt} ({date})', log_exp_add: 'செலவு சேர்க்கப்பட்டது: {desc} {amt} ({date})', log_exp_edit: 'செலவு திருத்தப்பட்டது: {desc} {amt} ({date})', log_exp_del: 'செலவு நீக்கப்பட்டது: {desc} {amt} ({date})', cannotDel: 'நீக்க முடியாது: கடந்த 60 நாட்களுக்குள் ({date}) இவருக்கு வருகை பதிவு செய்யப்பட்டுள்ளது. அதற்குப் பதிலாக "பணியில் இல்லை" ஆக்கவும்.', version: 'செயலி பதிப்பு', changeLog: 'மாற்றங்களின் பதிவு', built: 'உருவாக்கியது', localChanges: 'உள்ளூர் மாற்றங்கள்', remindTitle: 'தினசரி நினைவூட்டல்கள்', remindHint: 'வருகை பதிவு செய்ய நினைவூட்டும் அறிவிப்புகள். பதிவு செய்ய வேண்டியது இருக்கும்போது மட்டுமே அனுப்பப்படும்.',
    remindT1: 'முதல் நினைவூட்டல்', remindT2: 'இரண்டாம் நினைவூட்டல்', turnOn: 'இயக்கு', turnOff: 'நிறுத்து', sendTest: 'சோதனை அனுப்பு',
    pushNo: 'இங்கு அறிவிப்புகள் ஆதரிக்கப்படவில்லை. ஐபோனில் முதலில் செயலியை Home Screen-இல் சேர்க்கவும்.', pushDenied: 'உலாவி அமைப்புகளில் அறிவிப்புகள் தடுக்கப்பட்டுள்ளன.',
    pushUnavail: 'நினைவூட்டலுக்கு இணைய சர்வர் தேவை.', remindSet: 'நினைவூட்டல் அமைக்கப்பட்டது', testSent: 'சோதனை அனுப்பப்பட்டது', people: 'மொத்த நபர்', cost: 'செலவு', auto: 'தானியங்கி (உலாவி மொழி)', deactivate: 'பணியில் இல்லை', activate: 'பணியில் சேர்', yourName: 'உங்கள் பெயர்', yourNameHint: 'நீங்கள் செய்யும் ஒவ்வொரு மாற்றத்துடனும் சேமிக்கப்படும்; யார் என்ன செய்தார் என்று தெரியும்.', auditLog: 'தணிக்கை பதிவு', allDates: 'அனைத்து நாட்கள்', noLog: 'பதிவுகள் இல்லை', back: 'பின்', lastBy: 'செய்தவர்',
    log_mark: '{who}: {date} அன்று {s} குறிக்கப்பட்டது', log_clear: '{who}: {date} அன்று குறியீடு நீக்கப்பட்டது', log_rate: '{who}: {date} அன்று கூலி {rate} ஆக மாற்றப்பட்டது',
    log_dayrate: '{date} அன்று {g} கூலி {rate} ஆக அமைக்கப்பட்டது', log_addday: '{who}: {date} பட்டியலில் சேர்க்கப்பட்டது', log_rmday: '{who}: {date} பட்டியலில் இருந்து நீக்கப்பட்டது',
    log_lab_add: 'தொழிலாளர் சேர்க்கப்பட்டார்: {who}', log_lab_edit: 'தொழிலாளர் திருத்தப்பட்டது: {who} {chg}', log_lab_del: 'தொழிலாளர் நீக்கப்பட்டார்: {who}', confirmRm: 'இந்த நாளுக்கான பட்டியலில் இருந்து நீக்கவா? (இன்றைய வருகை பதிவும் நீக்கப்படும்)', summary: 'சுருக்கம்', grid: 'அட்டவணை', span15: '15 நாட்கள்', spanMonth: 'மாதம்', legend: '✓ முழு · ◐ காலை · ◑ மதியம் · ✗ வரவில்லை',
  },
};

/* ---------- helpers ---------- */
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const uid = () => (crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2, 10));
const pad = n => String(n).padStart(2, '0');
const ymd = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
// every date shown to people is dd/mm/yy; stored values stay yyyy-mm-dd so they sort and compare correctly
const dmy = s => s ? `${s.slice(8, 10)}/${s.slice(5, 7)}/${s.slice(2, 4)}` : '';
const addDays = (s, n) => { const d = new Date(s + 'T00:00:00'); d.setDate(d.getDate() + n); return ymd(d); };
const money = n => (n < 0 ? '−' : '') + '₹' + (Math.round(Math.abs(n) * 100) / 100).toLocaleString('en-IN');
const factor = s => (s === 'full' ? 1 : s === 'am' || s === 'pm' ? 0.5 : 0);
let lang = 'en';
// '' = follow the browser's language list; anything else is the user's explicit choice
const detectLang = () => ((navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en']).map(l => String(l).toLowerCase()).find(l => l.startsWith('ta') || l.startsWith('en')) || 'en').startsWith('ta') ? 'ta' : 'en';
const t = k => (I18N[lang] && I18N[lang][k]) || I18N.en[k] || k;

/* ---------- storage (IndexedDB, everything cached in memory) ---------- */
// record: {k, d:{...}, u:updatedAt, del:0|1, dirty:0|1}
// keys:  L:<id> labourer | A:<date>:<labourId> attendance | R:<date>:<M|F> day wage override
let idb; const recs = new Map(); const meta = { mode: 'edit', clockOffset: 0, user: '', remind: null, lang: '', since: 0, server: '', key: '', lastSync: 0, syncGen: 0 };
function openDB() {
  return new Promise((res, rej) => {
    const r = indexedDB.open('labour-db', 1);
    r.onupgradeneeded = () => { r.result.createObjectStore('rec', { keyPath: 'k' }); r.result.createObjectStore('meta'); };
    r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error);
  });
}
const idbAll = st => new Promise(res => { const q = idb.transaction(st).objectStore(st).getAll(); q.onsuccess = () => res(q.result); });
const idbGet = (st, k) => new Promise(res => { const q = idb.transaction(st).objectStore(st).get(k); q.onsuccess = () => res(q.result); });
const idbPut = (st, v, k) => idb.transaction(st, 'readwrite').objectStore(st).put(v, k);
async function load() {
  idb = await openDB();
  (await idbAll('rec')).forEach(r => recs.set(r.k, r));
  for (const k of Object.keys(meta)) { const v = await idbGet('meta', k); if (v !== undefined) meta[k] = v; }
  lang = I18N[meta.lang] ? meta.lang : detectLang();
  if (meta.syncGen < 1) await fullResync();
}
// One-time repair: older versions could lose a change on the server. Fetch everything again and send this
// phone's copy of every record; the server keeps whichever is newest.
async function fullResync() {
  if (meta.mode !== 'view') {
    const tx = idb.transaction('rec', 'readwrite');
    for (const r of recs.values()) { r.dirty = 1; tx.objectStore('rec').put(r); }
    await new Promise((ok, no) => { tx.oncomplete = ok; tx.onabort = () => no(tx.error); });
  }
  saveMeta('since', 0); saveMeta('syncGen', 1);
}
const saveMeta = (k, v) => { meta[k] = v; idbPut('meta', v, k); };
// "today" comes from the server's clock when we have synced (corrects a wrong phone clock);
// before the first sync, or if the server never answered, the phone's own date is the fallback
// The farm runs on Indian time: "today" is always the IST date, whatever timezone the phone is set to.
const TZ = 'Asia/Kolkata';
const istDate = new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit' });
const now = () => Date.now() + Math.round(meta.clockOffset || 0);
const today = () => istDate.format(new Date(now()));
// 'view' = this phone signed in with the read-only key: nothing can be changed. 'probe' = key just changed, mode not known yet.
const ro = () => meta.mode === 'view';
function needName() { // nothing may be changed until this phone has a user name (it's stored with every change)
  if (meta.user) return;
  askName(); throw new Error('user name required');
}
function put(k, d, del = 0) {
  if (ro()) { toast(t('viewOnly')); throw new Error('read only'); }
  needName();
  if (d && d.date && d.date > today()) { toast(t('noFuture')); throw new Error('future date'); }
  const u = Math.max(now(), (recs.get(k)?.u || 0) + 1);
  const r = { k, d, u, del, dirty: 1, b: meta.user };
  recs.set(k, r); idbPut('rec', r); scheduleSync(); return r;
}
// append-only audit trail: one unique record per action, synced like everything else, never deleted
function audit(act, o) {
  if (ro()) throw new Error('read only');
  needName();
  const u = now(), k = `G:${u}:${uid().slice(0, 6)}`;
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
  const pr = personRate(date, lab), base = pr.rate;
  put(`A:${date}:${lid}`, { date, lid, s, rate: base, ov: pr.ov ? 1 : 0 });
  audit('mark', { date, who: lab.name, s });
}
// per-person override for one day: stored on the attendance record, or on the day-list entry if not marked yet
const dayEntry = (date, lid) => { const r = recs.get(`D:${date}:${lid}`); return r && !r.del ? r.d : null; };
function personRate(date, lab) { // -> { rate, ov, monthly }
  if (lab.type === 'monthly') return { rate: 0, ov: false, monthly: true }; // paid a fixed monthly salary, no daily wage
  const a = attOf(date, lab.id); if (a) return { rate: a.rate, ov: !!a.ov };
  const e = dayEntry(date, lab.id); if (e && e.ov) return { rate: e.rate, ov: true };
  return { rate: dayRate(date, lab.g) ?? lab.wage, ov: false };
}
function setPersonRate(date, lid, rate) { // rate === null -> back to the normal wage
  if (labById(lid).type === 'monthly') return;
  const lab = labById(lid), cur = attOf(date, lid), normal = dayRate(date, lab.g) ?? lab.wage;
  ensureRoster(date);
  if (cur) put(`A:${date}:${lid}`, { ...cur, rate: rate ?? normal, ov: rate == null ? 0 : 1 });
  else put(`D:${date}:${lid}`, rate == null ? { date, lid } : { date, lid, rate, ov: 1 });
  audit('rate', { date, who: lab.name, rate });
}
function setDayRate(date, g, val) {
  const has = val !== '' && !isNaN(+val);
  audit('dayrate', { date, g, rate: has ? +val : null });
  if (has) put(`R:${date}:${g}`, { date, g, rate: +val }); else if (recs.has(`R:${date}:${g}`)) put(`R:${date}:${g}`, { date, g }, 1);
  for (const r of live(`A:${date}:`)) { // re-price this day's non-manual records
    const lab = labById(r.d.lid); if (!lab || lab.g !== g || r.d.ov || lab.type === 'monthly') continue;
    put(r.k, { ...r.d, rate: has ? +val : lab.wage });
  }
}

/* ---------- sync ---------- */
let syncing = false, syncTimer, syncErr = false, syncMsg = '';
const pendingCount = () => [...recs.values()].filter(r => r.dirty).length;
function scheduleSync() { updateSyncBtn(); clearTimeout(syncTimer); syncTimer = setTimeout(sync, 1500); }
async function sync(manual) {
  if (syncing) return;
  if (!navigator.onLine) { if (manual === true) toast(t('offline')); return; }
  syncing = true; syncErr = false; updateSyncBtn();
  const abort = new AbortController(), timeout = setTimeout(() => abort.abort(), 30000); // a hung request must not block later syncs
  const url = (meta.server || '').replace(/\/$/, '') + '/api/sync';
  try {
    const queue = meta.mode === 'edit' ? [...recs.values()].filter(r => r.dirty) : [], sent = queue.slice(0, 500), t0 = Date.now();
    const res = await fetch(url, {
      method: 'POST', signal: abort.signal,
      headers: { 'Content-Type': 'application/json', ...(meta.key ? { 'x-sync-key': meta.key } : {}) },
      body: JSON.stringify({ since: meta.since, records: sent.map(({ k, d, u, del, b }) => ({ k, d, u, del, b })) }),
    });
    if (!res.ok) throw new Error('HTTP ' + res.status + (res.status === 404 ? ' (no sync server at this address)' : res.status === 401 ? ' (wrong sync key)' : ''));
    const out = await res.json().catch(() => { throw new Error('unexpected reply (not the sync server)'); });
    if (out.now) saveMeta('clockOffset', out.now - Math.round((t0 + Date.now()) / 2));
    for (const s of out.mode === 'view' ? [] : sent) { const cur = recs.get(s.k); if (cur && cur.u === s.u) { cur.dirty = 0; idbPut('rec', cur); } }
    const others = new Set(), first = !meta.since; // names of other people whose changes just arrived
    for (const r of out.records) {
      const cur = recs.get(r.k);
      if (!cur || !cur.dirty) { if (!first && r.b && r.b !== meta.user && r.b !== '?') others.add(r.b); const n = { k: r.k, d: r.d, u: r.u, del: r.del, b: r.b, dirty: 0 }; recs.set(r.k, n); idbPut('rec', n); }
    }
    const mode = out.mode === 'view' ? 'view' : 'edit', modeChanged = mode !== meta.mode; saveMeta('mode', mode);
    syncMsg = ''; saveMeta('since', out.seq); saveMeta('lastSync', Date.now());
    if (modeChanged) { chrome(); render(); } else if (out.records.length && !document.querySelector('dialog[open]')) render(true);
    if (queue.length > sent.length) scheduleSync(); // large backlog goes in batches
    if (others.size) toast(t('updatedBy') + ' ' + [...others].slice(0, 3).join(', '), 3000);
  } catch (e) {
    syncErr = true; syncMsg = (e instanceof TypeError || e.name === 'AbortError' ? 'cannot reach server' : e.message) + ' — ' + url;
    if (manual === true) toast(t('syncFail') + ' · ' + syncMsg.split(' — ')[0]);
  }
  clearTimeout(timeout); syncing = false; updateSyncBtn(); if (tab === 'set' && !document.querySelector('dialog[open]')) render(true);
}
function updateSyncBtn() {
  const b = $('#syncbtn'), p = pendingCount();
  b.className = 'sync ' + (!navigator.onLine ? 'off' : syncErr ? 'off' : p ? 'pend' : '');
  b.textContent = !navigator.onLine ? '⛔ ' + t('offline') + (p ? ` · ${p}` : '')
    : syncing ? '⟳ …' : syncErr ? '⚠ ' + t('syncErrShort') + (p ? ` · ${p}` : '') : p ? `⟳ ${p} ${t('pending')}` : '✓ ' + t('synced');
}
addEventListener('online', () => { updateSyncBtn(); sync(); });
addEventListener('offline', updateSyncBtn);
// pick up other people's changes quickly while the page is open and visible; a hidden page waits for the next minute
setInterval(() => { if (document.visibilityState === 'visible' ? navigator.onLine : pendingCount()) sync(); }, 15000);
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && navigator.onLine) sync(); });

/* ---------- UI shell ---------- */
let tab = 'att', date = ymd(new Date()), q = '';
let repFrom = ymd(new Date(new Date().getFullYear(), new Date().getMonth(), 1)), repTo = ymd(new Date());
const TABS = [['att', '📋', 'attendance'], ['exp', '💰', 'accounts'], ['rep', '📊', 'report'], ['lab', '👥', 'labour'], ['set', '⚙️', 'settings']];
function toast(m, ms) { const e = $('#toast'); e.textContent = m; e.classList.add('show'); clearTimeout(toast.t); toast.t = setTimeout(() => e.classList.remove('show'), ms || 1800); }
function chrome() {
  document.documentElement.lang = lang === 'ta' ? 'ta' : 'en';
  const rb = $('#robadge'); rb.hidden = !ro(); rb.textContent = '👁 ' + t('viewOnly');
  $('#title').textContent = t('app'); document.title = t('app');
  $('#nav').innerHTML = TABS.map(([k, ic, l]) => `<button data-act="tab" data-v="${k}" class="${tab === k || ((tab === 'log' || tab === 'help') && k === 'set') ? 'on' : ''}"><span>${ic}</span>${esc(t(l))}</button>`).join('');
  updateSyncBtn();
}
// every screen has its own URL: #/attendance/2026-11-22, #/accounts/<date>, #/report, #/labour, #/settings, #/help, #/log
const SLUG = { att: 'attendance', exp: 'accounts', rep: 'report', lab: 'labour', set: 'settings', log: 'log', help: 'help' };
const TAB_OF = Object.fromEntries(Object.entries(SLUG).map(([k, v]) => [v, k]));
let lastHash = '', attMode = 'mark';
let urlLang = ''; // optional language in the link: #/ta/report ... (overrides the saved language for that link only)
const hashFor = () => '#/' + (urlLang ? urlLang + '/' : '') + SLUG[tab] + (tab === 'att' || tab === 'exp' ? '/' + date : '') + (tab === 'att' && attMode === 'list' ? '/list' : '')
  + (tab === 'rep' ? (repMode === 'grid' ? `/grid/${gridSpan}/${gridAnchor}` : `/summary/${repFrom}/${repTo}`) : '');
function readHash() {
  const p = location.hash.replace(/^#\/?/, '').split('/');
  urlLang = I18N[p[0]] ? p.shift() : '';
  lang = urlLang || (I18N[meta.lang] ? meta.lang : detectLang());
  tab = TAB_OF[p[0]] || 'att';
  if (/^\d{4}-\d\d-\d\d$/.test(p[1] || '')) date = p[1] > today() ? today() : p[1]; // never a future date
  if (tab === 'att') attMode = p[2] === 'list' ? 'list' : 'mark';
  if (tab === 'rep') { // #/report/summary/<from>/<to>  or  #/report/grid/<week|15|month>/<any date in the period>
    const isDate = x => /^\d{4}-\d\d-\d\d$/.test(x || ''), capped = x => (x > today() ? today() : x);
    if (p[1] === 'grid') {
      repMode = 'grid';
      if (['week', '15', 'month'].includes(p[2])) gridSpan = p[2];
      if (isDate(p[3])) gridAnchor = capped(p[3]);
    } else if (p[1] === 'summary') {
      repMode = 'sum';
      if (isDate(p[2])) repFrom = p[2];
      if (isDate(p[3])) repTo = capped(p[3]);
      if (repFrom > repTo) repFrom = repTo;
    }
  }
}
addEventListener('popstate', () => { readHash(); lastHash = location.hash; render(); });
function render(soft) {
  if (!soft) {
    const h = hashFor();
    if (h !== lastHash) { if (lastHash) history.pushState(null, '', h); else history.replaceState(null, '', h); lastHash = h; }
  }
  chrome();
  $('#view').classList.toggle('wide', tab === 'rep' && repMode === 'grid'); // the grid uses the full screen width
  if (soft && tab === 'att' && $('#att-list')) return drawAttList();
  if (soft && tab === 'exp' && $('#exp-list')) return drawExpList();
  if (soft && document.activeElement && ['INPUT', 'SELECT'].includes(document.activeElement.tagName) && tab !== 'lab') return;
  $('#view').innerHTML = { att: attView, lab: labView, exp: expView, rep: repView, set: setView, log: logView, help: helpView }[tab]();
  if (tab === 'att') drawAttList();
  if (tab === 'exp') drawExpList();
}

/* ---------- attendance ---------- */
const weekday = d => new Date(d + 'T00:00:00').toLocaleDateString(lang === 'ta' ? 'ta-IN' : 'en-IN', { weekday: 'short' });
const dateInput = (id, value, attrs = '', empty = 'dd/mm/yy') => `<span class="dpick"><span>${esc(value ? dmy(value) : empty)} 📅</span><input type="date" id="${id}" value="${value}" aria-label="${esc(t('date'))}" ${attrs}></span>`;
const dateBar = () => `<div class="wd"><span>${esc(weekday(date))}${date === today() ? ` · ${esc(t('today'))}` : ''}</span>${date !== today() ? `<button class="todaybtn" data-act="today">${esc(t('today'))}</button>` : ''}</div><div class="date">
    <button class="btn sec" data-act="day" data-v="-1">‹</button>
    ${dateInput('date', date, `max="${today()}"`)}
    <button class="btn sec" data-act="day" data-v="1" ${date >= today() ? 'disabled' : ''}>›</button>
  </div>`;
// attendance order: daily wage (low to high, monthly-salary people last), then female before male, then name.
// Uses the normal wage, so changing one day's rate doesn't move anyone around.
const payRank = l => (l.type === 'monthly' ? Number.MAX_SAFE_INTEGER : +l.wage || 0);
const byPaySexName = (p, q) => payRank(p) - payRank(q) || (p.g === 'M') - (q.g === 'M') || p.name.localeCompare(q.name);
function attView() {
  const dr = g => dayRate(date, g);
  const list = attMode === 'list';
  return `
  ${dateBar()}
  <div class="gsel" style="margin-bottom:10px"><button data-act="attmode" data-v="mark" class="${list ? '' : 'on'}">${esc(t('markMode'))}</button><button data-act="attmode" data-v="list" class="${list ? 'on' : ''}">${esc(t('listMode'))}</button></div>
  ${list ? '' : `<div class="row" style="margin-bottom:10px">
    <input id="q" class="grow" type="search" placeholder="${esc(t('search'))}" value="${esc(q)}">
    ${ro() ? '' : `<button class="btn sec" data-act="markall" style="white-space:nowrap">✓ ${esc(t('markAll'))}</button>`}
  </div>`}
  <div id="att-list"></div>
  ${list || ro() ? '' : `<details class="card"><summary>💰 ${esc(t('dayRate'))}</summary>
    <p class="mu">${esc(t('dayRateHint'))}</p>
    <div class="two">
      <div><label>${esc(t('M'))}</label><input type="number" inputmode="decimal" data-rate="M" value="${dr('M') ?? ''}" placeholder="${esc(t('normal'))}"></div>
      <div><label>${esc(t('F'))}</label><input type="number" inputmode="decimal" data-rate="F" value="${dr('F') ?? ''}" placeholder="${esc(t('normal'))}"></div>
    </div>
  </details>`}`;
}
function drawAttList() {
  const el = $('#att-list'); if (!el) return;
  if (attMode === 'list') { // quick view: only who came, no buttons
    const rows = labourers().map(l => ({ l, a: attOf(date, l.id) })).filter(x => x.a && factor(x.a.s)).sort((p, q) => byPaySexName(p.l, q.l));
    const eq = rows.reduce((n, x) => n + factor(x.a.s), 0), tot = rows.reduce((n, x) => n + factor(x.a.s) * x.a.rate, 0);
    el.innerHTML = rows.length ? `<div class="card"><div class="row sp" style="margin-bottom:6px"><b style="font-size:18px">${rows.length} ${esc(t('present'))}</b><span class="mu">${eq} ${esc(t('dayEq'))}</span></div>
      ${rows.map(x => `<div class="row sp lrow"><span class="name g${x.l.g}">${esc(x.l.name)}</span><span class="mu">${esc(t(x.a.s))}</span>${x.l.type === 'monthly' ? `<span class="mu">${esc(t('monthlyTag'))}</span>` : `<b>${money(factor(x.a.s) * x.a.rate)}</b>`}</div>`).join('')}
      <div class="row sp lrow" style="border-bottom:0"><b>${esc(t('total'))}</b><span></span><b>${money(tot)}</b></div></div>` : `<div class="empty">${esc(t('nobodyYet'))}</div>`;
    return;
  }
  const { ids, from } = dayList(date);
  const all = ids.map(labById).filter(Boolean);
  const list = all.filter(l => !q || l.name.toLowerCase().includes(q.toLowerCase())).sort(byPaySexName);
  let present = 0, pay = 0, dayEq = 0;
  for (const l of all) { const a = attOf(date, l.id); if (a) { const f = factor(a.s); if (f) present++; dayEq += f; pay += f * a.rate; } }
  const exAmt = expSum(running(expOf(date))), inAmt = expSum(incOf(date));
  const expLine = exAmt || inAmt ? `<p class="mu">${exAmt ? `🧾 ${esc(t('expenses'))} ${money(exAmt)} · ${esc(t('grandTotal'))} ${money(pay + exAmt)}` : ''}${exAmt && inAmt ? '<br>' : ''}${inAmt ? `💰 ${esc(t('income'))} ${money(inAmt)} · ${esc(t('net'))} ${money(inAmt - pay - exAmt)}` : ''}</p>` : '';
  const inList = new Set(ids);
  const avail = labourers().filter(l => l.active !== false && !inList.has(l.id)).sort((a, b) => a.name.localeCompare(b.name));
  // add-person list: opens in place so each name can be coloured (blue / pink) on every phone; native dropdowns can't do that
  const wasOpen = !!el.querySelector('details.picker[open]');
  const picker = avail.length ? `<details class="picker ${all.length ? '' : 'big'}" ${wasOpen ? 'open' : ''}><summary>${esc(t('addPerson'))}</summary>
    <div class="plist">${avail.map(l => `<button class="pitem g${l.g}" data-act="addperson" data-id="${l.id}">${esc(l.name)}</button>`).join('')}</div></details>` : '';
  el.innerHTML = `
  <div class="stats">
    <div><b>${all.length}</b><small>${esc(t('people'))}</small></div>
    <div><b>${present}</b><small>${esc(t('present'))}</small></div>
    <div><b>${dayEq}</b><small>${esc(t('dayEq'))}</small></div>
    <div><b>${money(pay)}</b><small>${esc(t('cost'))}</small></div>
  </div>` + expLine + (from ? `<p class="mu">↩ ${esc(t('fromPrev'))} ${dmy(from)}</p>` : '') + (list.length ? list.map(l => {
    const a = attOf(date, l.id), s = a && a.s;
    return `<div class="card">
      <div class="row sp"><div><span class="name g${l.g}">${esc(l.name)}</span></div>
        <span class="row">${(() => { const pr = personRate(date, l); if (pr.monthly) return `<span class="mu">${esc(t('monthlyTag'))}</span>`; return `${ro() ? `<span class="mu">${money(pr.rate)}${pr.ov ? ' ★' : ''}</span>` : `<button class="rate ${pr.ov ? 'ov' : ''}" data-act="rate" data-id="${l.id}">${money(pr.rate)}${pr.ov ? ' ★' : ''} ✎</button>`}${a && factor(a.s) && factor(a.s) < 1 ? `<span class="mu">= ${money(pr.rate * factor(a.s))}</span>` : ''}`; })()}
          ${ro() ? '' : `<button class="rate" data-act="rmday" data-id="${l.id}" aria-label="${esc(t('remove'))}">✕</button>`}</span>
      </div>
      ${a ? lastBy(`A:${date}:${l.id}`) : ''}
      ${ro() ? `<span class="rostatus ${s || ''}">${s ? esc(t(s)) : '—'}</span>` : `<div class="seg">${['full', 'am', 'pm', 'abs'].map(k => `<button class="${k} ${s === k ? 'on' : ''}" data-act="mark" data-id="${l.id}" data-s="${k}">${esc(t(k))}</button>`).join('')}</div>`}
    </div>`;
  }).join('') : `<div class="empty">${esc(all.length ? '' : avail.length ? t('emptyDay') : t('noLabour'))}</div>`) + (ro() ? '' : picker);
}

const fmtT = u => `${dmy(istDate.format(new Date(u)))}, ${new Date(u).toLocaleTimeString(lang === 'ta' ? 'ta-IN' : 'en-IN', { timeZone: TZ, hour: '2-digit', minute: '2-digit' })}`;
function lastBy(k) { const r = recs.get(k); return r && r.b ? `<div class="mu" style="margin-top:6px">✎ ${esc(t('lastBy'))} ${esc(r.b)} · ${fmtT(r.u)}</div>` : ''; }

// a labourer with attendance marked in the last 60 days can't be deleted (make inactive instead)
function deleteBlockedBy(id) {
  const cutoff = addDays(today(), -60);
  let last = '';
  for (const r of live('A:')) if (r.d.lid === id && r.d.date >= cutoff && r.d.date > last) last = r.d.date;
  return last;
}
function canDelete(id) {
  const last = deleteBlockedBy(id);
  if (last) alert(t('cannotDel').replace('{date}', dmy(last)));
  return !last;
}

/* ---------- labour management ---------- */
function labView() {
  const list = labourers().sort((a, b) => (a.active === false) - (b.active === false) || a.name.localeCompare(b.name)); // active first, then by name
  return (list.length ? list.map(l => `
    <div class="card" style="${l.active === false ? 'opacity:.7' : ''}">
      <div class="row sp" ${ro() ? '' : `data-act="editlab" data-id="${l.id}"`}>
        <div><span class="name g${l.g}">${esc(l.name)}</span>
          ${l.type === 'monthly' ? `<span class="mu">· ${esc(t('monthlyTag'))}</span>` : ''}${l.active === false ? `<span class="mu">· ${esc(t('inactive'))}</span>` : ''}
          </div>
        <b>${money(l.wage)}${l.type === 'monthly' ? ` <span class="mu">${esc(t('perMonth'))}</span>` : ''}</b>
      </div>
      ${ro() ? '' : `
      <div class="row" style="margin-top:10px">
        <button class="btn sec sm grow" data-act="toggleact" data-id="${l.id}">${esc(t(l.active === false ? 'activate' : 'deactivate'))}</button>
        <button class="btn dng sm grow" data-act="dellab" data-id="${l.id}">${esc(t('del'))}</button>
      </div>
      `}
    </div>`).join('') : `<div class="empty">${esc(t('noLabour'))}</div>`) +
    (ro() ? '' : `<div style="height:84px"></div><button class="fab" data-act="addlab" aria-label="${esc(t('add'))}" title="${esc(t('add'))}"><svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true"><path d="M12 5v14M5 12h14" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/></svg></button>`);
}
function labDialog(id) {
  const l = id ? labById(id) : { name: '', g: 'M', wage: '', active: true };
  const dlg = $('#dlg');
  dlg.innerHTML = `<form method="dialog" id="labform">
    <h2>${esc(id ? t('edit') : t('add'))}</h2>
    <label>${esc(t('name'))}</label><input name="name" required value="${esc(l.name)}">
    <label>${esc(t('gender'))}</label>
    <div class="gsel"><button type="button" data-g="M" class="${l.g === 'M' ? 'on' : ''}">${esc(t('M'))}</button><button type="button" data-g="F" class="${l.g === 'F' ? 'on' : ''}">${esc(t('F'))}</button></div>
    <label>${esc(t('payType'))}</label>
    <div class="gsel"><button type="button" data-p="daily" class="${l.type === 'monthly' ? '' : 'on'}">${esc(t('payDaily'))}</button><button type="button" data-p="monthly" class="${l.type === 'monthly' ? 'on' : ''}">${esc(t('payMonthly'))}</button></div>
    <label id="wagelbl">${esc(t(l.type === 'monthly' ? 'monthlySalary' : 'wage'))}</label><input name="wage" type="number" inputmode="decimal" min="0" required value="${l.wage}">
    <label class="row" style="color:var(--tx);font-size:16px"><input type="checkbox" name="active" style="width:auto" ${l.active !== false ? 'checked' : ''}> ${esc(t('active'))}</label>
    <div class="row" style="margin-top:14px">
      ${id ? `<button type="button" class="btn dng" id="lbdel">${esc(t('del'))}</button>` : ''}
      <span class="grow"></span><button type="button" class="btn sec" id="lbcancel">${esc(t('cancel'))}</button><button class="btn">${esc(t('save'))}</button>
    </div></form>`;
  let g = l.g, pay = l.type === 'monthly' ? 'monthly' : 'daily';
  dlg.querySelectorAll('[data-p]').forEach(b => b.onclick = () => { pay = b.dataset.p; dlg.querySelectorAll('[data-p]').forEach(x => x.classList.toggle('on', x === b)); $('#wagelbl').textContent = t(pay === 'monthly' ? 'monthlySalary' : 'wage'); });
  dlg.querySelectorAll('[data-g]').forEach(b => b.onclick = () => { g = b.dataset.g; dlg.querySelectorAll('[data-g]').forEach(x => x.classList.toggle('on', x === b)); });
  $('#lbcancel').onclick = () => dlg.close();
  if (id) $('#lbdel').onclick = () => { if (!canDelete(id)) return; if (confirm(t('confirmDel'))) { put('L:' + id, recs.get('L:' + id).d, 1); audit('lab_del', { who: l.name }); dlg.close(); render(); } };
  $('#labform').onsubmit = e => {
    const f = new FormData(e.target);
    const nd = { name: f.get('name').trim(), g, type: pay, wage: +f.get('wage'), active: f.get('active') === 'on' }, old = { ...l, type: l.type || 'daily' };
    const chg = id ? Object.keys(nd).filter(k => String(nd[k]) !== String(old[k])).map(k => [k, old[k], nd[k]]) : [];
    put('L:' + (id || uid()), nd);
    if (!id) audit('lab_add', { who: nd.name }); else if (chg.length) audit('lab_edit', { who: nd.name, chg });
    render(); toast(t('saved'));
  };
  dlg.showModal();
}

/* ---------- money: expenses E:<date>:<id> and income I:<date>:<id>, both {date, desc, amt} ---------- */
// an expense with cap:1 is capital / the owner's own money: left out of the day and period tallies, shown on its own
const entRecs = (p, from, to) => live(p).filter(r => r.d.date >= from && r.d.date <= to)
  .map(r => ({ id: r.k.split(':')[2], kind: p[0], ...r.d, u: r.u })).sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : a.u - b.u));
const expRecs = (from, to) => entRecs('E:', from, to), incRecs = (from, to) => entRecs('I:', from, to);
const expOf = d => expRecs(d, d), incOf = d => incRecs(d, d);
const expSum = list => list.reduce((s, e) => s + e.amt, 0);
const running = list => list.filter(e => !e.cap), capital = list => list.filter(e => e.cap);
const capTag = e => (e.cap ? '🏦 ' : '');
const capCheck = (attrs, on) => `<label class="row" style="color:var(--tx);font-size:16px"><input type="checkbox" ${attrs} style="width:auto" ${on ? 'checked' : ''}> 🏦 ${esc(t('capHint'))}</label>`;
const dayWages = d => live(`A:${d}:`).reduce((s, r) => s + factor(r.d.s) * r.d.rate, 0);
let acctKind = 'E';
function expView() {
  const inc = acctKind === 'I';
  const chips = (inc ? [['🍌', 'banana'], ['🌿', 'cardamom']] : [['⛽', 'petrol'], ['🍽️', 'food'], ['🚌', 'travel']])
    .map(([ic, k]) => `<button class="chip" data-act="chip" data-v="${k}">${ic} ${esc(t(k))}</button>`).join('');
  if (ro()) return dateBar() + '<div id="exp-list"></div>';
  return dateBar() + `<div class="gsel" style="margin-bottom:10px"><button data-v="E" class="${inc ? '' : 'on'}" data-act="acct">${esc(t('expense'))}</button><button data-v="I" class="${inc ? 'on' : ''}" data-act="acct">${esc(t('income'))}</button></div>
    <div class="card"><div class="chips">${chips}</div>
    <label>${esc(t('description'))}</label><input id="xdesc" maxlength="120" placeholder="${esc(t('description'))}">
    <label>${esc(t('amount'))}</label><input id="xamt" type="number" inputmode="decimal" min="0" placeholder="₹">
    ${inc ? '' : capCheck('id="xcap"', false)}
    <button class="btn full" style="margin-top:12px" data-act="addexp">${esc(t(inc ? 'addInc' : 'addExp'))}</button></div><div id="exp-list"></div>`;
}
function drawExpList() {
  const el = $('#exp-list'); if (!el) return;
  const ex = expOf(date), inc = incOf(date), list = [...ex, ...inc].sort((a, b) => a.u - b.u);
  const exT = expSum(running(ex)), capT = expSum(capital(ex)), inT = expSum(inc), w = dayWages(date);
  el.innerHTML = list.length ? list.map(e => `<div class="card row sp" ${ro() ? '' : `data-act="editexp" data-id="${e.id}" data-k="${e.kind}"`}>
      <div><div class="name" style="font-size:16px">${capTag(e)}${esc(e.desc || t(e.kind === 'I' ? 'income' : 'expense'))}</div>${lastBy(`${e.kind}:${date}:${e.id}`)}</div>
      <b class="${e.kind === 'I' ? 'amt-in' : 'amt-ex'}">${e.kind === 'I' ? '+' : '−'}${money(e.amt)}</b></div>`).join('') +
    `<div class="card"><table><tbody>
      <tr><td>${esc(t('income'))}</td><td class="amt-in">${money(inT)}</td></tr><tr><td>${esc(t('expenses'))}</td><td>${money(exT)}</td></tr>
      <tr><td>${esc(t('wages'))}</td><td>${money(w)}</td></tr></tbody>
      <tfoot><tr><td>${esc(t('net'))}</td><td class="${inT - exT - w < 0 ? 'amt-ex' : 'amt-in'}">${money(inT - exT - w)}</td></tr></tfoot></table>
      ${capT ? `<p class="mu">🏦 ${esc(t('capital'))}: ${money(capT)}</p>` : ''}</div>` : `<div class="empty">${esc(t('noExp'))}</div>`;
}
function addExpense() {
  const desc = $('#xdesc').value.trim(), amt = +$('#xamt').value, k = acctKind, flag = k === 'E' && $('#xcap').checked ? { cap: 1 } : {};
  if (!(amt > 0)) { toast(t('amount') + ' ?'); $('#xamt').focus(); return; }
  put(`${k}:${date}:${uid()}`, { date, desc, amt, ...flag }); audit(k === 'I' ? 'inc_add' : 'exp_add', { date, desc, amt, ...flag });
  $('#xdesc').value = ''; $('#xamt').value = ''; if ($('#xcap')) $('#xcap').checked = false; drawExpList(); toast(t('saved'));
}
function expDialog(id, kind) {
  const k = `${kind}:${date}:${id}`, e = recs.get(k).d, dlg = $('#dlg'), tag = kind === 'I' ? 'inc' : 'exp';
  dlg.innerHTML = `<form method="dialog" id="expform"><h2>${esc(t(kind === 'I' ? 'income' : 'expense'))} · ${dmy(date)}</h2>
    <label>${esc(t('description'))}</label><input name="desc" maxlength="120" value="${esc(e.desc)}">
    <label>${esc(t('amount'))}</label><input name="amt" type="number" inputmode="decimal" min="0" required value="${e.amt}">
    ${kind === 'E' ? capCheck('name="cap"', e.cap) : ''}
    <div class="row" style="margin-top:14px"><button type="button" class="btn dng" id="exdel">${esc(t('del'))}</button><span class="grow"></span>
    <button type="button" class="btn sec" id="excancel">${esc(t('cancel'))}</button><button class="btn">${esc(t('save'))}</button></div></form>`;
  $('#excancel').onclick = () => dlg.close();
  $('#exdel').onclick = () => { if (!confirm(t('confirmExp'))) return; put(k, e, 1); audit(tag + '_del', { date, desc: e.desc, amt: e.amt, ...(e.cap ? { cap: 1 } : {}) }); dlg.close(); drawExpList(); };
  $('#expform').onsubmit = ev => {
    const f = new FormData(ev.target), amt = +f.get('amt'), desc = f.get('desc').trim();
    if (!(amt > 0)) return ev.preventDefault();
    const flag = f.get('cap') ? { cap: 1 } : {};
    put(k, { date, desc, amt, ...flag }); audit(tag + '_edit', { date, desc, amt, ...flag }); drawExpList(); toast(t('saved'));
  };
  dlg.showModal();
}
const expTable = (list, cls = '') => `<table><thead><tr><th>${esc(t('date'))}</th><th>${esc(t('description'))}</th><th>${esc(t('amount'))}</th></tr></thead>
  <tbody>${list.map(e => `<tr data-act="goexp" data-v="${e.date}"><td>${dmy(e.date)}</td><td style="text-align:left">${esc(e.desc || '—')}</td><td class="${cls}">${money(e.amt)}</td></tr>`).join('')}</tbody>
  <tfoot><tr><td colspan="2">${esc(t('total'))}</td><td class="${cls}">${money(expSum(list))}</td></tr></tfoot></table>`;

/* ---------- report ---------- */
// the broad picture: capital / own-money spending listed after the tally, and what is left once it is counted
const capSection = (list, net) => list.length ? `<div class="secthead">🏦 ${esc(t('capital'))}</div><div class="card">${expTable(list)}</div>
  <div class="secthead">🌍 ${esc(t('overall'))}</div><div class="card"><table><tbody>
    <tr><td>${esc(t('net'))}</td><td>${money(net)}</td></tr><tr><td>${esc(t('capital'))}</td><td>${money(expSum(list))}</td></tr>
    <tr class="sum"><td>${esc(t('netAfterCap'))}</td><td class="${net - expSum(list) < 0 ? 'amt-ex' : 'amt-in'}">${money(net - expSum(list))}</td></tr></tbody></table></div>` : '';
function firstEntryDate() {
  let first = today();
  for (const r of recs.values()) if (!r.del && 'AEI'.includes(r.k[0]) && r.d.date < first) first = r.d.date;
  return first;
}
function reportRows() {
  const by = {};
  for (const r of live('A:')) {
    const a = r.d; if (a.date < repFrom || a.date > repTo) continue;
    const o = by[a.lid] ||= { id: a.lid, full: 0, half: 0, pay: 0 };
    const f = factor(a.s); if (a.s === 'full') o.full++; else if (f) o.half++;
    o.pay += f * a.rate;
  }
  return Object.values(by).map(o => { const l = labById(o.id) || { name: '?', g: 'M' }; return { ...o, name: l.name, g: l.g, monthly: l.type === 'monthly' }; })
    .sort((a, b) => a.name.localeCompare(b.name));
}
// Monthly-salary people are paid a fixed amount for every whole calendar month a report covers
// (counted for months in which they have attendance entries). Partial periods show no salary.
const monthLabel = ym => new Date(ym + '-01T00:00:00').toLocaleDateString(lang === 'ta' ? 'ta-IN' : 'en-IN', { month: 'short', year: 'numeric' });
function monthlyDue(from, to) {
  const out = [], people = labourers().filter(l => l.type === 'monthly');
  if (!people.length) return out;
  let y = +from.slice(0, 4), m = +from.slice(5, 7);
  for (;;) {
    const ym = `${y}-${pad(m)}`, first = ym + '-01', last = `${ym}-${pad(new Date(y, m, 0).getDate())}`;
    if (first > to) break;
    if (from <= first && to >= last) for (const l of people) if (live(`A:${ym}-`).some(r => r.d.lid === l.id)) out.push({ ...l, ym, amt: l.wage });
    if (++m > 12) { m = 1; y++; }
  }
  return out;
}
const monthlyTable = list => `<table><thead><tr><th>${esc(t('name'))}</th><th>${esc(t('monthCol'))}</th><th>${esc(t('amount'))}</th></tr></thead>
  <tbody>${list.map(x => `<tr><td class="g${x.g}">${esc(x.name)}</td><td>${esc(monthLabel(x.ym))}</td><td>${money(x.amt)}</td></tr>`).join('')}</tbody>
  <tfoot><tr><td colspan="2">${esc(t('total'))}</td><td>${money(expSum(list.map(x => ({ amt: x.amt }))))}</td></tr></tfoot></table>`;
function repView() {
  const toggle = `<div class="gsel" style="margin-bottom:10px"><button class="${repMode === 'sum' ? 'on' : ''}" data-act="repmode" data-v="sum">${esc(t('summary'))}</button><button class="${repMode === 'grid' ? 'on' : ''}" data-act="repmode" data-v="grid">${esc(t('grid'))}</button></div>`;
  if (repMode === 'grid') return toggle + gridView();
  const rows = reportRows(), tot = rows.reduce((s, r) => ({ full: s.full + r.full, half: s.half + r.half, pay: s.pay + r.pay }), { full: 0, half: 0, pay: 0 });
  const all = expRecs(repFrom, repTo), exps = running(all), caps = capital(all), incs = incRecs(repFrom, repTo), exTot = expSum(exps), inTot = expSum(incs);
  const mdue = monthlyDue(repFrom, repTo), mTot = mdue.reduce((n, x) => n + x.amt, 0), cost = tot.pay + mTot + exTot;
  return toggle + `<div class="card two">
    <div><label>${esc(t('from'))}</label>${dateInput('rf', repFrom, `max="${today()}"`)}</div>
    <div><label>${esc(t('to'))}</label>${dateInput('rt', repTo, `max="${today()}"`)}</div></div>
    <button class="btn sec full" style="margin-bottom:10px" data-act="alltime">${esc(t('allTime'))}</button>` +
    (rows.length || all.length || incs.length || mdue.length ? (rows.length ? `<div class="secthead">👷 ${esc(t('wages'))}</div><div class="card"><table>
      <thead><tr><th>${esc(t('name'))}</th><th>${esc(t('fullDays'))}</th><th>${esc(t('halfDays'))}</th><th>${esc(t('pay'))}</th></tr></thead>
      <tbody>${rows.map(r => `<tr><td class="g${r.g}">${esc(r.name)}</td><td>${r.full}</td><td>${r.half}</td><td>${r.monthly ? '—' : money(r.pay)}</td></tr>`).join('')}</tbody>
      <tfoot><tr><td>${esc(t('total'))}</td><td>${tot.full}</td><td>${tot.half}</td><td>${money(tot.pay)}</td></tr></tfoot></table></div>` : '') +
      (mdue.length ? `<div class="secthead">📅 ${esc(t('monthlySalaries'))}</div><div class="card">${monthlyTable(mdue)}</div>` : '') +
      (exps.length ? `<div class="secthead">🧾 ${esc(t('expenses'))}</div><div class="card">${expTable(exps)}</div>` : '') +
      (incs.length ? `<div class="secthead">💰 ${esc(t('income'))}</div><div class="card">${expTable(incs, 'amt-in')}</div>` : '') +
      `<div class="secthead">🧮 ${esc(t('tally'))}</div><div class="card"><table><tbody>
        <tr><td>${esc(t('wages'))}</td><td>${money(tot.pay)}</td></tr>${mTot ? `<tr><td>${esc(t('monthlySalaries'))}</td><td>${money(mTot)}</td></tr>` : ''}<tr><td>${esc(t('expenses'))}</td><td>${money(exTot)}</td></tr>
        <tr class="sum"><td>${esc(t('grandTotal'))}</td><td>${money(cost)}</td></tr>
        <tr><td>${esc(t('income'))}</td><td class="amt-in">${money(inTot)}</td></tr>
        <tr class="sum"><td>${esc(t('net'))}</td><td class="${inTot - cost < 0 ? 'amt-ex' : 'amt-in'}">${money(inTot - cost)}</td></tr>
        </tbody></table></div>${capSection(caps, inTot - cost)}
      <button class="btn sec full" data-act="csv">⬇ ${esc(t('export'))}</button>` : `<div class="empty">${esc(t('noRecords'))}</div>`);
}
let repMode = 'sum', gridSpan = '15', gridAnchor = ymd(new Date());
function gridRange() {
  const [y, m, dd] = gridAnchor.split('-').map(Number), last = new Date(y, m, 0).getDate();
  const [a, b] = gridSpan === 'month' ? [1, last] : dd <= 15 ? [1, 15] : [16, last];
  return { y, m, a, b };
}
// week = Sunday to Saturday containing the anchor date
function gridDays() {
  if (gridSpan === 'week') {
    const d = new Date(gridAnchor + 'T00:00:00'); d.setDate(d.getDate() - d.getDay());
    return Array.from({ length: 7 }, (_, i) => addDays(ymd(d), i));
  }
  const { y, m, a, b } = gridRange(), days = [];
  for (let d = a; d <= b; d++) days.push(`${y}-${pad(m)}-${pad(d)}`);
  return days;
}
function gridShift(n) {
  const prev = gridAnchor;
  shiftGrid(n);
  if (n > 0 && gridDays()[0] > today()) gridAnchor = prev; // don't scroll into the future
}
function shiftGrid(n) {
  const { y, m, a } = gridRange();
  if (gridSpan === 'week') gridAnchor = addDays(gridAnchor, 7 * n);
  else if (gridSpan === 'month') gridAnchor = ymd(new Date(y, m - 1 + n, 1));
  else { const i = (y * 12 + m - 1) * 2 + (a === 16 ? 1 : 0) + n; gridAnchor = ymd(new Date(Math.floor(i / 24), Math.floor((i % 24) / 2), i % 2 ? 16 : 1)); }
}
function gridView() {
  const days = gridDays();
  const ids = new Set();
  for (const d of days) dayMembers(d).forEach(id => ids.add(id));
  const wageClass = l => (l.type === 'monthly' ? 'M' : l.wage);          // people paid the same daily rate form one class
  const rank = l => (l.type === 'monthly' ? Infinity : l.wage);
  const rows = [...ids].map(labById).filter(Boolean).sort((p, q) => rank(p) - rank(q) || p.name.localeCompare(q.name));
  const classes = new Set(rows.map(wageClass));
  const colPay = days.map(() => 0);
  const all = expRecs(days[0], days[days.length - 1]), exps = running(all), caps = capital(all), colExp = days.map(d => expSum(exps.filter(e => e.date === d)));
  const incs = incRecs(days[0], days[days.length - 1]), colInc = days.map(d => expSum(incs.filter(e => e.date === d)));
  const SYM = { full: '✓', am: '◐', pm: '◑', abs: '✗' };
  let lastClass = null;
  const body = rows.map(l => {
    let eq = 0, pay = 0;
    const cells = days.map((d, i) => {
      const at = attOf(d, l.id);
      if (at) { const f = factor(at.s); eq += f; pay += f * at.rate; colPay[i] += f * at.rate; return `<td class="c ${at.s}" data-act="goday" data-v="${d}">${SYM[at.s]}</td>`; }
      return '<td class="c"></td>';
    }).join('');
    const sep = classes.size > 1 && wageClass(l) !== lastClass
      ? `<tr class="grpsep"><td class="nm">${l.type === 'monthly' ? esc(t('monthlyTag')) : money(l.wage)}</td><td colspan="${2 + days.length}"></td></tr>` : '';
    lastClass = wageClass(l);
    return `${sep}<tr><td class="nm g${l.g}">${esc(l.name)}</td><td><b>${eq}</b></td><td>${l.type === 'monthly' ? '—' : money(pay)}</td>${cells}</tr>`;
  }).join('');
  const loc = lang === 'ta' ? 'ta-IN' : 'en-IN', fd = (d, o) => new Date(d + 'T00:00:00').toLocaleDateString(loc, o);
  const heading = `${dmy(days[0])} – ${dmy(days[days.length - 1])}`;
  const tot = colPay.reduce((p, q) => p + q, 0), exTot = colExp.reduce((p, q) => p + q, 0), inTot = colInc.reduce((p, q) => p + q, 0);
  const mdue = monthlyDue(days[0], days[days.length - 1]), mTot = mdue.reduce((n, x) => n + x.amt, 0);
  const dayHead = days.map(d => `<th class="dh">${gridSpan === 'week' ? `${esc(fd(d, { weekday: 'short' }))}<br>` : ''}${+d.slice(8)}</th>`).join('');
  const small = (arr, act) => arr.map((p, i) => `<td class="c" style="font-size:10px"${act ? ` data-act="goexp" data-v="${days[i]}"` : ''}>${p ? (p < 0 ? '−' : '') + Math.abs(Math.round(p)) : ''}</td>`).join('');
  return `<div class="row" style="margin-bottom:10px"><div class="gsel three grow"><button class="${gridSpan === 'week' ? 'on' : ''}" data-act="span" data-v="week">${esc(t('weekSpan'))}</button><button class="${gridSpan === '15' ? 'on' : ''}" data-act="span" data-v="15">${esc(t('span15'))}</button><button class="${gridSpan === 'month' ? 'on' : ''}" data-act="span" data-v="month">${esc(t('spanMonth'))}</button></div></div>
  <div class="date"><button class="btn sec" data-act="shift" data-v="-1">‹</button><div class="grow card" style="margin:0;text-align:center;font-weight:600">${esc(heading)}</div><button class="btn sec" data-act="shift" data-v="1">›</button></div>` +
  (rows.length || all.length || incs.length || mdue.length ? `
    <div class="secthead">👷 ${esc(t('wages'))}</div>
    ${rows.length ? `<div class="gridwrap"><table class="grid"><thead><tr><th class="nm">${esc(t('name'))}</th><th>${esc(t('days'))}</th><th>${esc(t('pay'))}</th>${dayHead}</tr></thead>
      <tbody>${body}</tbody>
      <tfoot><tr><td class="nm">${esc(t('total'))}</td><td></td><td>${money(tot)}</td>${small(colPay)}</tr></tfoot></table></div>
      <p class="mu">${esc(t('legend'))}</p>` : `<div class="empty">${esc(t('noRecords'))}</div>`}
    ${mdue.length ? `<div class="secthead">📅 ${esc(t('monthlySalaries'))}</div><div class="card">${monthlyTable(mdue)}</div>` : ''}
    ${exps.length ? `<div class="secthead">🧾 ${esc(t('expenses'))}</div><div class="card">${expTable(exps)}</div>` : ''}
    ${incs.length ? `<div class="secthead">💰 ${esc(t('income'))}</div><div class="card">${expTable(incs, 'amt-in')}</div>` : ''}
    <div class="secthead">🧮 ${esc(t('tally'))}</div>
    <div class="gridwrap"><table class="grid"><thead><tr><th class="nm"></th><th>${esc(t('total'))}</th>${dayHead}</tr></thead><tbody>
      <tr><td class="nm">${esc(t('wages'))}</td><td>${money(tot)}</td>${small(colPay)}</tr>
      ${mTot ? `<tr><td class="nm">${esc(t('monthlySalaries'))}</td><td>${money(mTot)}</td>${days.map(() => '<td class="c"></td>').join('')}</tr>` : ''}
      <tr><td class="nm">${esc(t('expenses'))}</td><td>${money(exTot)}</td>${small(colExp, true)}</tr>
      <tr class="sum"><td class="nm">${esc(t('grandTotal'))}</td><td>${money(tot + mTot + exTot)}</td>${small(colPay.map((p, i) => p + colExp[i]))}</tr>
      <tr><td class="nm">${esc(t('income'))}</td><td class="amt-in">${money(inTot)}</td>${small(colInc, true)}</tr>
      <tr class="sum"><td class="nm">${esc(t('net'))}</td><td class="${inTot - tot - mTot - exTot < 0 ? 'amt-ex' : 'amt-in'}">${money(inTot - tot - mTot - exTot)}</td>${small(colPay.map((p, i) => colInc[i] - p - colExp[i]))}</tr>
    </tbody></table></div>${capSection(caps, inTot - tot - mTot - exTot)}` : `<div class="empty">${esc(t('noRecords'))}</div>`);
}
function exportCSV() {
  const rows = reportRows(), all = expRecs(repFrom, repTo), exps = running(all), caps = capital(all), incs = incRecs(repFrom, repTo), wagesTot = rows.reduce((s, r) => s + r.pay, 0);
  const mdue = monthlyDue(repFrom, repTo), mTot = mdue.reduce((n, x) => n + x.amt, 0);
  const lines = [[t('name'), t('gender'), t('fullDays'), t('halfDays'), t('pay')], ...rows.map(r => [r.name, t(r.g), r.full, r.half, r.pay]), [t('wages'), '', '', '', wagesTot],
    ...(mdue.length ? [[], [t('name'), t('monthCol'), t('amount')], ...mdue.map(x => [x.name, x.ym, x.amt]), [t('monthlySalaries'), '', mTot]] : []),
    [], [t('date'), t('description'), t('amount')], ...exps.map(e => [dmy(e.date), e.desc, e.amt]), [t('expenses'), '', expSum(exps)],
    [], [t('income'), t('description'), t('amount')], ...incs.map(e => [dmy(e.date), e.desc, e.amt]), [t('income'), '', expSum(incs)],
    [], [t('grandTotal'), '', '', '', wagesTot + mTot + expSum(exps)], [t('net'), '', '', '', expSum(incs) - wagesTot - mTot - expSum(exps)],
    ...(caps.length ? [[], [t('capital'), t('description'), t('amount')], ...caps.map(e => [dmy(e.date), e.desc, e.amt]), [t('capital'), '', expSum(caps)],
      [t('netAfterCap'), '', '', '', expSum(incs) - wagesTot - mTot - expSum(all)]] : [])]
    .map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(','));
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob(['﻿' + lines.join('\n')], { type: 'text/csv' }));
  a.download = `wages_${repFrom}_${repTo}.csv`; a.click();
}

/* ---------- push reminders (defaults: 9:15 AM and 5:00 PM IST) ---------- */
const pushOK = () => 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
const remindCfg = () => ({ on: false, t1: '09:15', t2: '17:00', ...(meta.remind || {}) });
const apiUrl = p => (meta.server || '').replace(/\/$/, '') + p;
const apiHdr = () => ({ 'Content-Type': 'application/json', ...(meta.key ? { 'x-sync-key': meta.key } : {}) });
const b64 = s => Uint8Array.from(atob((s + '='.repeat((4 - s.length % 4) % 4)).replace(/-/g, '+').replace(/_/g, '/')), c => c.charCodeAt(0));
async function pushSubscribe() { // create/refresh this phone's subscription and its reminder settings on the server
  const reg = await navigator.serviceWorker.ready, c = remindCfg();
  let sub = await reg.pushManager.getSubscription();
  if (!sub) {
    const kr = await fetch(apiUrl('/api/push/key'), { headers: apiHdr() });
    if (!kr.ok) throw new Error('unavailable');
    sub = await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: b64((await kr.json()).key) });
  }
  const r = await fetch(apiUrl('/api/push/subscribe'), { method: 'POST', headers: apiHdr(), body: JSON.stringify({
    sub: sub.toJSON(), times: [c.t1, c.t2].filter(Boolean), tz: TZ, lang, user: meta.user }) });
  if (!r.ok) throw new Error('unavailable');
  return sub;
}
async function remindOn() {
  if (!pushOK()) return toast(t('pushNo'));
  if ((await Notification.requestPermission()) !== 'granted') return toast(t('pushDenied'));
  saveMeta('remind', { ...remindCfg(), on: true });
  try { await pushSubscribe(); toast(t('remindSet')); } catch { saveMeta('remind', { ...remindCfg(), on: false }); toast(t('pushUnavail')); }
  render();
}
async function remindOff() {
  saveMeta('remind', { ...remindCfg(), on: false });
  try {
    const sub = await (await navigator.serviceWorker.ready).pushManager.getSubscription();
    if (sub) { await fetch(apiUrl('/api/push/unsubscribe'), { method: 'POST', headers: apiHdr(), body: JSON.stringify({ endpoint: sub.endpoint }) }).catch(() => {}); await sub.unsubscribe(); }
  } catch {}
  render();
}
async function remindTest() {
  try {
    const sub = await (await navigator.serviceWorker.ready).pushManager.getSubscription();
    const r = sub && await fetch(apiUrl('/api/push/test'), { method: 'POST', headers: apiHdr(), body: JSON.stringify({ endpoint: sub.endpoint, lang }) });
    toast(r && r.ok ? t('testSent') : t('pushUnavail'));
  } catch { toast(t('pushUnavail')); }
}

/* ---------- audit log ---------- */
let logDate = '';
const FIELD = { name: 'name', g: 'gender', type: 'payType', wage: 'wage', phone: 'phone', active: 'active' };
function fmtChg(c) {
  if (!Array.isArray(c)) return esc(c || ''); // entries written by older versions are plain text
  const val = (k, x) => k === 'active' ? (x ? '✓' : '✗') : k === 'g' ? t(x) : k === 'type' ? t(x === 'monthly' ? 'payMonthly' : 'payDaily') : x === '' || x == null ? '—' : x;
  return '(' + c.map(([k, a, b]) => `${esc(t(FIELD[k] || k))}: ${esc(val(k, a))} → ${esc(val(k, b))}`).join(', ') + ')';
}
function logText(o) {
  const v = { who: esc(o.who), s: esc(t(o.s)), date: dmy(o.date), rate: o.rate == null ? esc(t('normal')) : money(o.rate), g: esc(t(o.g || '')), chg: fmtChg(o.chg), desc: capTag(o) + esc(o.desc || ''), amt: o.amt == null ? '' : money(o.amt) };
  return (t('log_' + o.act)).replace(/\{(\w+)\}/g, (m, k) => v[k] ?? '');
}
function logView() {
  const items = live('G:').filter(r => !logDate || r.d.date === logDate).sort((a, b) => b.u - a.u).slice(0, 300);
  return `<div class="row" style="margin-bottom:10px"><button class="btn sec sm" data-act="tab" data-v="set">‹ ${esc(t('back'))}</button>
    ${dateInput('logdate', logDate)}<button class="btn sec sm" data-act="logall">${esc(t('allDates'))}</button></div>` +
    (items.length ? items.map(r => `<div class="card"><div>${logText(r.d)}</div><div class="mu">${esc(r.b)} · ${fmtT(r.u)}</div></div>`).join('') : `<div class="empty">${esc(t('noLog'))}</div>`);
}

/* ---------- app version (public/version.json, written at build time) ---------- */
let ver = null;
async function loadVersion() {
  try { const r = await fetch('version.json'); if (r.ok) { ver = await r.json(); if (tab === 'set') render(true); } } catch {}
}
const fmtD = d => d ? dmy(istDate.format(new Date(d))) : '';
function verCard() {
  if (!ver) return '';
  return `<div class="card"><div class="row sp"><b>${esc(t('version'))}</b><span><code>${esc(ver.short || '—')}</code>${ver.dirty ? ` <span class="mu">+ ${esc(t('localChanges'))}</span>` : ''}</span></div>
    <div class="mu">${esc(fmtD(ver.date))}${ver.built ? ` · ${esc(t('built'))} ${esc(fmtT(Date.parse(ver.built)))}` : ''}</div>
    ${ver.log && ver.log.length ? `<details style="margin-top:8px"><summary>${esc(t('changeLog'))}</summary>${ver.log.map(c => `<div style="padding:6px 0;border-bottom:1px solid var(--bd)"><div>${esc(c.s)}</div><div class="mu"><code>${esc(c.h)}</code> · ${esc(fmtD(c.d))}</div></div>`).join('')}</details>` : ''}</div>`;
}

/* ---------- help for new users (English + Tamil). The sync key itself is deliberately NOT written here:
   this site is public, so the key must be shared privately by the owner. ---------- */
const HELP = {
  en: ['Open <a href="https://l.iavian.net">https://l.iavian.net</a> in Chrome (Android) or Safari (iPhone). Then choose <b>Add to Home screen</b> in the browser menu to install it like an app.',
    'Open <b>Settings</b> (⚙️, bottom right).',
    'Type your name in the <b>Your name</b> box. It is saved with every change you make, so everyone can see who did what. You will also be asked for it the first time you mark attendance or change anything.',
    'In the <b>Sync key</b> box, type the key the farm owner gave you. Leave <b>Server address</b> empty.',
    'Tap <b>Sync now</b>. The top button should say <b>✓ Synced</b>. If it says <b>⚠ Sync failed</b>, read the reason shown under the box: <i>HTTP 401</i> means the key is wrong; <i>cannot reach server</i> means check your internet.',
    'The app works without internet. Everything is saved on your phone and syncs by itself when the internet comes back.',
    'Tip: you can change the language in Settings → Language.'],
  ta: ['Android-இல் Chrome அல்லது iPhone-இல் Safari-யில் <a href="https://l.iavian.net">https://l.iavian.net</a> திறக்கவும். பிறகு உலாவி மெனுவில் <b>Add to Home screen</b> தேர்ந்தெடுத்து செயலியாக நிறுவவும்.',
    'கீழே வலது பக்கம் உள்ள <b>அமைப்புகள்</b> (⚙️) தொடவும்.',
    '<b>உங்கள் பெயர்</b> பெட்டியில் உங்கள் பெயரை எழுதவும். நீங்கள் செய்யும் ஒவ்வொரு மாற்றத்துடனும் இது சேமிக்கப்படும்; யார் என்ன செய்தார் என்று எல்லோருக்கும் தெரியும். முதல் முறை வருகை பதிவு செய்யும்போதும் பெயர் கேட்கப்படும்.',
    '<b>ஒத்திசைவு விசை</b> பெட்டியில் பண்ணை உரிமையாளர் கொடுத்த விசையை எழுதவும். <b>சர்வர் முகவரி</b> பெட்டியை காலியாக விடவும்.',
    '<b>இப்போது ஒத்திசை</b> தொடவும். மேலே <b>✓ ஒத்திசைந்தது</b> என்று வர வேண்டும். <b>⚠ ஒத்திசைவு தோல்வி</b> என்றால் பெட்டிக்கு கீழே உள்ள காரணத்தைப் பார்க்கவும்: <i>HTTP 401</i> என்றால் விசை தவறு; <i>cannot reach server</i> என்றால் இணையத்தைச் சரிபார்க்கவும்.',
    'இணையம் இல்லாமலும் செயலி வேலை செய்யும். பதிவுகள் போனில் சேமிக்கப்பட்டு, இணையம் வந்ததும் தானாக ஒத்திசைக்கப்படும்.',
    'குறிப்பு: மொழியை அமைப்புகள் → மொழி-யில் மாற்றலாம்.'],
};
const helpView = () => `<div class="row" style="margin-bottom:10px"><button class="btn sec sm" data-act="tab" data-v="set">‹ ${esc(t('back'))}</button></div>
  <div class="card"><h2 style="margin:0;font-size:18px">❓ Help / உதவி</h2>
  ${['en', 'ta'].sort(l => (l === lang ? -1 : 1)).map(l => `<h3 class="hh">${l === 'en' ? 'English' : 'தமிழ்'}</h3><ol class="help">${HELP[l].map(x => `<li>${x}</li>`).join('')}</ol>`).join('')}</div>`;

/* ---------- settings ---------- */
function setView() {
  return `<button class="btn ${!meta.user || !meta.key ? '' : 'sec'} full" style="margin-bottom:10px" data-act="tab" data-v="help">❓ Help / உதவி</button>
    ${ro() ? `<div class="card"><b>👁 ${esc(t('viewOnly'))}</b><p class="mu" style="margin-bottom:0">${esc(t('viewOnlyHint'))}</p></div>` : ''}
    <div class="card"><label style="margin-top:0">${esc(t('yourName'))}</label><input id="uname" value="${esc(meta.user)}">
      <p class="mu" style="margin-bottom:0">${esc(t('yourNameHint'))}</p></div>
    ${ro() ? '' : (() => { const c = remindCfg(), on = c.on && pushOK() && Notification.permission === 'granted';
      return `<div class="card"><b>🔔 ${esc(t('remindTitle'))}</b><p class="mu">${esc(t('remindHint'))}</p>` + (!pushOK() ? `<p class="mu">${esc(t('pushNo'))}</p>` :
      `<div class="two"><div><label>${esc(t('remindT1'))}</label><input type="time" id="rt1" value="${c.t1}"></div><div><label>${esc(t('remindT2'))}</label><input type="time" id="rt2" value="${c.t2}"></div></div>
      <div class="row" style="margin-top:12px">${on ? `<button class="btn dng grow" data-act="remindoff">${esc(t('turnOff'))}</button><button class="btn sec grow" data-act="remindtest">${esc(t('sendTest'))}</button>` : `<button class="btn grow" data-act="remindon">${esc(t('turnOn'))}</button>`}</div>`) + '</div>'; })()}
    <button class="btn sec full" style="margin-bottom:10px" data-act="tab" data-v="log">🕘 ${esc(t('auditLog'))}</button>
    <div class="card"><label style="margin-top:0">${esc(t('language'))}</label>
      <div class="gsel"><button class="${meta.lang === 'en' ? 'on' : ''}" data-act="lang" data-v="en">English</button><button class="${meta.lang === 'ta' ? 'on' : ''}" data-act="lang" data-v="ta">தமிழ்</button></div>
      <button class="btn sec sm full" style="margin-top:8px;${!meta.lang ? 'font-weight:800;outline:2px solid var(--g)' : ''}" data-act="lang" data-v="">🌐 ${esc(t('auto'))}</button></div>
    <div class="card" id="synccard"><label style="margin-top:0">${esc(t('server'))}</label><input id="srv" value="${esc(meta.server)}" placeholder="https://example.com">
      <label>${esc(t('key'))}</label><input id="key" type="password" value="${esc(meta.key)}">
      ${syncErr && syncMsg ? `<p style="color:var(--re);font-size:14px">⚠ ${esc(syncMsg)}</p>` : ''}
      <p class="mu">${esc(t('lastSync'))}: ${meta.lastSync ? fmtT(meta.lastSync) : esc(t('never'))} · ${pendingCount()} ${esc(t('pending'))}<br>${esc(t('dataVer'))}: ${meta.since || '—'}</p>
      <button class="btn full" data-act="sync">⟳ ${esc(t('syncNow'))}</button></div>
    ${verCard()}
    <p class="mu">${esc(t('installHint'))}</p>`;
}

/* ---------- events ---------- */
document.addEventListener('click', e => {
  const b = e.target.closest('[data-act]'); if (!b) return;
  const { act, v, id, s } = b.dataset;
  if (act === 'tab') { tab = v; render(); }
  else if (act === 'sync') sync(true);
  else if (act === 'syncbtn') {
    if (syncErr) { tab = 'set'; render(); const c = $('#synccard'); if (c) { c.scrollIntoView({ block: 'center' }); c.classList.add('flash'); setTimeout(() => c.classList.remove('flash'), 1600); } }
    else sync(true);
  }
  else if (act === 'today') { date = today(); render(); }
  else if (act === 'day') { const n = addDays(date, +v); if (n > today()) return; date = n; render(); }
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
  else if (act === 'addperson') { addToDay(date, id); drawAttList(); }
  else if (act === 'attmode') { attMode = v; render(); }
  else if (act === 'addexp') addExpense();
  else if (act === 'editexp') expDialog(id, b.dataset.k);
  else if (act === 'acct') { acctKind = v; render(); }
  else if (act === 'chip') { $('#xdesc').value = t(v); $('#xamt').focus(); }
  else if (act === 'goexp') { date = v; tab = 'exp'; render(); }
  else if (act === 'repmode') { repMode = v; render(); }
  else if (act === 'alltime') { repFrom = firstEntryDate().slice(0, 8) + '01'; repTo = today(); render(); } // from the 1st, so that month's salaries count
  else if (act === 'span') { gridSpan = v; render(); }
  else if (act === 'shift') { gridShift(+v); render(); }
  else if (act === 'goday') { date = v; tab = 'att'; render(); }
  else if (act === 'rate') {
    const n = prompt(t('rateFor'), personRate(date, labById(id)).rate);
    if (n === null) return;
    if (n.trim() === '') setPersonRate(date, id, null);
    else if (!isNaN(+n) && +n >= 0) setPersonRate(date, id, +n); else return;
    drawAttList();
  }
  else if (act === 'toggleact') {
    const l = labById(id), on = l.active === false;
    put('L:' + id, { ...recs.get('L:' + id).d, active: on }); audit('lab_edit', { who: l.name, chg: [['active', !on, on]] }); render();
  }
  else if (act === 'dellab') {
    const l = labById(id);
    if (!canDelete(id)) return;
    if (confirm(t('confirmDel'))) { put('L:' + id, recs.get('L:' + id).d, 1); audit('lab_del', { who: l.name }); render(); }
  }
  else if (act === 'addlab') labDialog();
  else if (act === 'editlab') labDialog(id);
  else if (act === 'csv') exportCSV();
  else if (act === 'remindon') remindOn();
  else if (act === 'remindoff') remindOff();
  else if (act === 'remindtest') remindTest();
  else if (act === 'logall') { logDate = ''; render(); }
  else if (act === 'lang') { saveMeta('lang', v); urlLang = ''; lang = v || detectLang(); render(); if (remindCfg().on) pushSubscribe().catch(() => {}); }
});
document.addEventListener('input', e => {
  if (e.target.id === 'q') { q = e.target.value; drawAttList(); }
});
// open the calendar on a tap or click anywhere on a date field (desktop browsers don't do this by themselves)
document.addEventListener('click', e => { if (e.target.matches('input[type=date]')) try { e.target.showPicker(); } catch {} });
document.addEventListener('change', e => {
  const el = e.target;
  if (el.id === 'date' && el.value) { if (el.value > today()) { toast(t('noFuture')); date = today(); } else date = el.value; render(); }
  else if (el.dataset.rate) { setDayRate(date, el.dataset.rate, el.value.trim()); drawAttList(); }
  else if (el.id === 'rf' || el.id === 'rt') { repFrom = $('#rf').value || repFrom; repTo = $('#rt').value || repTo; render(); }
  else if (el.id === 'logdate') { logDate = el.value; render(); }
  else if (el.id === 'rt1' || el.id === 'rt2') { saveMeta('remind', { ...remindCfg(), [el.id === 'rt1' ? 't1' : 't2']: el.value }); if (remindCfg().on) pushSubscribe().then(() => toast(t('remindSet'))).catch(() => toast(t('pushUnavail'))); }
  else if (el.id === 'uname') { const n = el.value.trim(); if (!n) { el.value = meta.user; askName(); return; } saveMeta('user', n); toast(t('saved')); }
  else if (el.id === 'srv') { saveMeta('server', el.value.trim()); saveMeta('mode', 'probe'); sync(true); }
  else if (el.id === 'key') { saveMeta('key', el.value); saveMeta('mode', 'probe'); sync(true); } // a different key may mean a different role
});

/* ---------- who is using this phone ---------- */
function askName() {
  const dlg = $('#namedlg');
  if (meta.user || dlg.open) return;
  dlg.innerHTML = `<form method="dialog" id="nameform"><h2>${esc(t('yourName'))}</h2><p class="mu">${esc(t('yourNameHint'))}</p>
    <input name="n" required autofocus><div class="row" style="margin-top:14px"><span class="grow"></span><button class="btn">${esc(t('save'))}</button></div></form>`;
  dlg.oncancel = e => { if (!meta.user) e.preventDefault(); };
  $('#nameform').onsubmit = e => {
    const n = new FormData(e.target).get('n').trim();
    if (!n) return e.preventDefault();
    saveMeta('user', n); dlg.oncancel = null; render(); toast(t('saved'));
  };
  dlg.showModal();
}

// the deliberate abort from needName() is not an error worth logging
addEventListener('error', e => { if (/user name required|future date|read only/.test(e.message)) e.preventDefault(); });

/* ---------- boot ---------- */
(async () => {
  await load();
  date = today(); repTo = today(); gridAnchor = today(); repFrom = today().slice(0, 8) + '01'; // defaults; a link may override them
  readHash();
  render();
  loadVersion();
  if (!ro() && remindCfg().on && pushOK() && Notification.permission === 'granted' && navigator.onLine) pushSubscribe().catch(() => {}); // refresh language/timezone/name
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
  if (navigator.storage && navigator.storage.persist) navigator.storage.persist();
  sync();
})();
