// Offline cache for the calendars when served over https (e.g. GitHub Pages).
// Stale-while-revalidate: open instantly from cache, refresh in the background.
const CACHE = 'aplpt-calendars-v1';

self.addEventListener('install', (e) => self.skipWaiting());

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (e) => {
    const req = e.request;
    if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
    e.respondWith(
        caches.open(CACHE).then((cache) =>
            cache.match(req).then((hit) => {
                const net = fetch(req)
                    .then((res) => { if (res.ok) cache.put(req, res.clone()); return res; })
                    .catch(() => hit);
                return hit || net;
            })
        )
    );
});
