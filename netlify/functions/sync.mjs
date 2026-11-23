import { getStore } from '@netlify/blobs';

// Same protocol as server.js. Optional shared secret: set SYNC_KEY in Netlify env vars.
export default async (req) => {
  const key = process.env.SYNC_KEY || '', viewKey = process.env.VIEW_KEY || ''; // VIEW_KEY: optional read-only key
  const given = req.headers.get('x-sync-key') || '';
  let mode = 'edit';
  if (key && given !== key) {
    if (viewKey && given === viewKey) mode = 'view';
    else return new Response('bad key', { status: 401 });
  }
  if (req.method !== 'POST') return new Response('POST only', { status: 405 });

  let msg;
  try { msg = await req.json(); } catch { return new Response('bad json', { status: 400 }); }

  const store = getStore('labour');
  const db = (await store.get('db', { type: 'json' })) || { seq: 0, records: {} };
  const since = Number(msg.since) || 0;
  let changed = false;
  for (const r of mode === 'edit' ? msg.records || [] : []) { // view-only keys can never write
    if (!r || typeof r.k !== 'string') continue;
    const cur = db.records[r.k];
    if (!cur || r.u >= cur.u) { // last-write-wins
      db.records[r.k] = { k: r.k, d: r.d, u: r.u, del: r.del ? 1 : 0, b: String(r.b || ''), seq: ++db.seq };
      changed = true;
    }
  }
  if (changed) await store.setJSON('db', db);
  const records = Object.values(db.records).filter(r => r.seq > since);
  return Response.json({ seq: db.seq, now: Date.now(), mode, records });
};

export const config = { path: '/api/sync' };
