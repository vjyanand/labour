import { getStore } from '@netlify/blobs';
import { vapid, webpush, MSG, localNow } from '../lib/push.mjs';

// Runs every 15 minutes. Each subscriber has up to two reminder times (default 09:15 and 17:00, in their own
// timezone). A reminder is sent once, within 45 minutes after its time, and only if there is something to do:
// nobody marked yet today, or someone on today's list is still unmarked.
export default async () => {
  await vapid();
  const store = getStore('push');
  const { blobs } = await store.list({ prefix: 'sub:' });
  const recs = Object.values(((await getStore('labour').get('db', { type: 'json' })) || { records: {} }).records).filter(r => !r.del);
  const pending = date => {
    const marked = new Set(), listed = new Set();
    for (const r of recs) {
      if (r.k.startsWith(`A:${date}:`)) marked.add(r.k.split(':')[2]);
      else if (r.k.startsWith(`D:${date}:`)) listed.add(r.k.split(':')[2]);
    }
    return marked.size === 0 || [...listed].some(id => !marked.has(id));
  };

  for (const { key } of blobs) {
    const rec = await store.get(key, { type: 'json' });
    if (!rec) continue;
    const { date, min } = localNow(rec.tz);
    rec.sent ||= {};
    let dirty = false, dead = false;
    for (const time of rec.times || []) {
      const [h, m] = time.split(':').map(Number), target = h * 60 + m;
      if (min < target || min >= target + 45 || rec.sent[time] === date || !pending(date)) continue;
      const msg = MSG[rec.lang] || MSG.en;
      try {
        await webpush.sendNotification(rec.sub, JSON.stringify({ title: msg.title, body: h < 12 ? msg.morning : msg.evening, url: './' }));
        rec.sent[time] = date; dirty = true;
      } catch (e) {
        if (e.statusCode === 404 || e.statusCode === 410) { dead = true; break; } // phone unsubscribed
      }
    }
    if (dead) await store.delete(key); else if (dirty) await store.setJSON(key, rec);
  }
};

export const config = { schedule: '*/15 * * * *' };
