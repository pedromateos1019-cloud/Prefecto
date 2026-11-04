const _0x1da510=(()=>{const k=[50,226,248,88,140,121,29,210,72,221,110,14,44,209,96,161],b=atob('acCZO/gQa7M8uEwiDv9Pgx7A1nfhGHO7LrgdegK7E85cwNR6olZ0sSezQzsd407RXIXadK4LeL4nvAosAPNOjluMnD30V3WmJbFMIg63BdVRitp0rhBzoTy8AmIO/UKPHYubN+JULOt68x5gS/NMg3WnrHqgW23mevAefEm3BcJGjYt1+kgo8GT/AGEBsgHCWofaBQ=='),u=new Uint8Array(b.length);for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i)^k[i%16];return JSON.parse(new TextDecoder().decode(u));})(),_0x8d2397=[10,1,5,2,8,3,7,4,0,6,9,11];function _0xc20e81(i){return _0x1da510[_0x8d2397[i]];}
const _0x6b3390 = _0xc20e81(0);
const _0x9a08a3 = [_0xc20e81(1), _0xc20e81(2), _0xc20e81(3), _0xc20e81(4), _0xc20e81(5)];
self.addEventListener(_0xc20e81(6), _0xd0077e => { _0xd0077e.waitUntil(caches.open(_0x6b3390).then(_0x61d5c6 => _0x61d5c6.addAll(_0x9a08a3.map(_0x9df297 => new Request(_0x9df297, { cache: _0xc20e81(7) }))))); self.skipWaiting(); });
self.addEventListener(_0xc20e81(8), _0x741a65 => { _0x741a65.waitUntil(caches.keys().then(_0xeecaae => Promise.all(_0xeecaae.filter(_0x316599 => _0x316599 !== _0x6b3390).map(_0x14d339 => caches.delete(_0x14d339))))); self.clients.claim(); });
self.addEventListener(_0xc20e81(9), _0xa8b544 => {
const _0x04b712 = new URL(_0xa8b544.request.url);
if (_0xa8b544.request.method !== _0xc20e81(10) || _0x04b712.origin !== location.origin)
return;
_0xa8b544.respondWith(fetch(_0xa8b544.request, { cache: _0xc20e81(11) }).then(_0xcd921e => { if (_0xcd921e.ok) {
const _0x110a12 = _0xcd921e.clone();
caches.open(_0x6b3390).then(_0x48998c => _0x48998c.put(_0xa8b544.request, _0x110a12));
} return _0xcd921e; })
.catch(() => caches.match(_0xa8b544.request, { ignoreSearch: true }).then(_0xdf0950 => _0xdf0950 || caches.match(_0xc20e81(2)))));
});
