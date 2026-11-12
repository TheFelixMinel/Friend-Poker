const C = 'poker-v109-1';
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(C).then(c => c.addAll(['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'av/1.jpg', 'av/2.jpg', 'av/3.jpg', 'av/4.jpg', 'av/5.jpg', 'av/6.jpg', 'av/7.jpg', 'av/8.jpg', 'av/9.jpg', 'av/10.jpg', 'av/11.jpg', 'av/12.jpg', 'av/13.jpg']).catch(() => {}))); });
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  e.respondWith(fetch(e.request).then(r => { const cp = r.clone(); caches.open(C).then(c => c.put(e.request, cp)); return r; }).catch(() => caches.match(e.request).then(r => r || caches.match('index.html'))));
});
