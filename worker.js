const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Authorization, Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }
  });
}

async function prepareDatabase(db) {
  await db.prepare(`CREATE TABLE IF NOT EXISTS copy_counts (
    title TEXT PRIMARY KEY,
    copies INTEGER NOT NULL DEFAULT 0,
    updated_at INTEGER NOT NULL DEFAULT (unixepoch())
  )`).run();
}

async function handleCopyApi(request, env, url) {
  if (request.method === 'OPTIONS') return new Response(null, { headers: CORS_HEADERS });
  if (!env.COUNTERS) return json({ error: 'Counter database is not configured.' }, 503);

  await prepareDatabase(env.COUNTERS);

  if (url.pathname === '/api/copies' && request.method === 'POST') {
    let payload;
    try { payload = await request.json(); } catch { return json({ error: 'Invalid request.' }, 400); }
    const title = typeof payload.title === 'string' ? payload.title.trim() : '';
    if (!title || title.length > 100) return json({ error: 'Invalid title.' }, 400);

    await env.COUNTERS.prepare(
      `INSERT INTO copy_counts (title, copies, updated_at) VALUES (?, 1, unixepoch())
       ON CONFLICT(title) DO UPDATE SET copies = copies + 1, updated_at = unixepoch()`
    ).bind(title).run();
    return json({ ok: true });
  }

  if (url.pathname === '/api/copies' && request.method === 'GET') {
    const rows = await env.COUNTERS.prepare(
      'SELECT title FROM copy_counts ORDER BY copies DESC, updated_at DESC LIMIT 10'
    ).all();
    return json({ rankings: rows.results.map((row, index) => ({ title: row.title, rank: index + 1 })) });
  }

  if (url.pathname === '/api/copies/admin' && request.method === 'GET') {
    const token = request.headers.get('Authorization');
    if (!env.ADMIN_TOKEN || token !== `Bearer ${env.ADMIN_TOKEN}`) return json({ error: 'Unauthorized.' }, 401);
    const rows = await env.COUNTERS.prepare(
      'SELECT title, copies, updated_at FROM copy_counts ORDER BY copies DESC, updated_at DESC'
    ).all();
    return json({ counts: rows.results });
  }

  return json({ error: 'Not found.' }, 404);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/api/copies')) return handleCopyApi(request, env, url);
    return env.ASSETS.fetch(request);
  }
};
