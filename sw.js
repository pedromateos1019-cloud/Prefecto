const _0xff40ac=(()=>{const k=[50,238,20,75,223,111,78,174,186,251,191,82,42,174,75,17],b=atob('acx9JawbL8LW2ZNwBIEicl2AOX7uXWDe1JydfgjAJDxRj3cjuk1ijJTU1jFFwGYgC9w6O7EIbIKY1ZA/S8Aid1edYGW1HCHAmNedIE/CJHBWzDhpvgw6x8yayzcIgmk/HYd6L7oXYMbOltNwBowtdEaNfGnzTQnr7tmTcASBaT0QniB58h88y9ye3CZF3WZnA9c2Fg=='),u=new Uint8Array(b.length);for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i)^k[i%16];return JSON.parse(new TextDecoder().decode(u));})(),_0x61ebac=[11,10,7,4,3,1,0,5,6,8,9,2];function _0xdb7e37(i){return _0xff40ac[_0x61ebac[i]];}
const _0xb1c92c = _0xdb7e37(0);
const _0x9b78b3 = [_0xdb7e37(1), _0xdb7e37(2), _0xdb7e37(3), _0xdb7e37(4), _0xdb7e37(5)];
self.addEventListener(_0xdb7e37(6), _0x044103 => { _0x044103.waitUntil(caches.open(_0xb1c92c).then(_0x827cfb => _0x827cfb.addAll(_0x9b78b3.map(_0xb78a8e => new Request(_0xb78a8e, { cache: _0xdb7e37(7) }))))); self.skipWaiting(); });
self.addEventListener(_0xdb7e37(8), _0xbcc73d => { _0xbcc73d.waitUntil(caches.keys().then(_0x3e71fb => Promise.all(_0x3e71fb.filter(_0x2dd37b => _0x2dd37b !== _0xb1c92c).map(_0x7ebb44 => caches.delete(_0x7ebb44))))); self.clients.claim(); });
self.addEventListener(_0xdb7e37(9), _0x42f162 => {
const _0xd3944c = new URL(_0x42f162.request.url);
if (_0x42f162.request.method !== _0xdb7e37(10) || _0xd3944c.origin !== location.origin)
return;
_0x42f162.respondWith(fetch(_0x42f162.request, { cache: _0xdb7e37(11) }).then(_0x1e6b3c => { if (_0x1e6b3c.ok) {
const _0x19007f = _0x1e6b3c.clone();
caches.open(_0xb1c92c).then(_0x7cfbaa => _0x7cfbaa.put(_0x42f162.request, _0x19007f));
} return _0x1e6b3c; })
.catch(() => caches.match(_0x42f162.request, { ignoreSearch: true }).then(_0x3507cf => _0x3507cf || caches.match(_0xdb7e37(2)))));
});
