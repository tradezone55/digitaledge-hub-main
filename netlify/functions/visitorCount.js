// Total learner-visit count for analytics-dashboard.html.
// Proxies the same Apps Script call the homepage stat uses.
// Only ever call action=getTotalCount: any other action logs a junk row.
const COUNTER_URL =
  'https://script.google.com/macros/s/AKfycbywTtj1F7V_fdU6Lui3KBbKn1HEOecB8YMSJrlK4F7wjxWN8fggpikGainA6OJ-Nyzv/exec?action=getTotalCount';

exports.handler = async () => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'public, max-age=30',
  };
  try {
    const r = await fetch(COUNTER_URL, { redirect: 'follow' });
    const d = await r.json();
    if (d.status !== 'success' || typeof d.totalVisits !== 'number') {
      return { statusCode: 502, headers, body: JSON.stringify({ error: 'counter unavailable' }) };
    }
    return { statusCode: 200, headers, body: JSON.stringify({ value: d.totalVisits }) };
  } catch (e) {
    return { statusCode: 502, headers, body: JSON.stringify({ error: 'counter unavailable' }) };
  }
};
