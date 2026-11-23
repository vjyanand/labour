import * as wp from 'web-push';
const webpush = wp.default || wp;
import { getStore } from '@netlify/blobs';

export { webpush };

// VAPID keys are generated once and kept in Netlify Blobs, so no manual key setup is needed.
export async function vapid() {
  const store = getStore('push');
  let k = await store.get('vapid', { type: 'json' });
  if (!k) { k = webpush.generateVAPIDKeys(); await store.setJSON('vapid', k); }
  webpush.setVapidDetails(process.env.URL || 'https://example.com', k.publicKey, k.privateKey);
  return k;
}

export const MSG = {
  en: { title: 'Attendance reminder', morning: "Mark today's attendance", evening: "Complete today's attendance", test: 'Test reminder works ✓' },
  ta: { title: 'வருகை நினைவூட்டல்', morning: 'இன்றைய வருகையைப் பதிவு செய்யவும்', evening: 'இன்றைய வருகையை முடிக்கவும்', test: 'சோதனை நினைவூட்டல் வேலை செய்கிறது ✓' },
};

export function localNow(tz) {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-CA', {
    timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(new Date()).map(x => [x.type, x.value]));
  return { date: `${p.year}-${p.month}-${p.day}`, min: +p.hour * 60 + +p.minute };
}
