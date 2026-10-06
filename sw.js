// Guarda la app para que abra sin internet. Cambia la versión al publicar cambios.
// Estrategia: primero la red (para recibir actualizaciones), pero si no responde en 3 segundos
// (señal débil) se abre con la copia guardada; la respuesta de la red, si llega después, actualiza la copia.
const VERSION = 'p42-prefectos-v4';
const ARCHIVOS = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];
const ESPERA_RED = 3000;
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(ARCHIVOS))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  const copia = () => caches.match(req, {ignoreSearch: true}).then(r => r || (req.mode === 'navigate' ? caches.match('./index.html') : undefined));
  const red = fetch(req).then(r => { if (r.ok) { const c = r.clone(); caches.open(VERSION).then(x => x.put(req, c)); } return r; });
  e.waitUntil(red.catch(() => {}));
  const plazo = new Promise(ok => setTimeout(() => copia().then(ok), ESPERA_RED));
  e.respondWith(Promise.race([red, plazo])
    .then(r => r || red)                                   // sin copia guardada: se sigue esperando a la red
    .catch(() => copia().then(r => r || Response.error())));
});
