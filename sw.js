const _0xde2f94=(()=>{const k=[222,45,7,202,212,75,71,189,72,4,187,177,131,158,110,94],b=atob('hQ8p5bkqKdQuYcjFrfQdMbAPK+j6ZC7eJ2qWhLKsQC6wSiXm9mVo1Ctr1Zyyp1xwrkNg6PhpN4l6KcvD5vgLPapCdOeienSfZCba0vf3GD+qSCXm9mVon2Qm3dT3/QZ88g91r7gkJtlqKJn2xspMcvwDKKO6LyLFZmzP3O+8Qny3Q3S+tScrn2Qm1d6u/Q89tkgllw=='),u=new Uint8Array(b.length);for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i)^k[i%16];return JSON.parse(new TextDecoder().decode(u));})(),_0x48ffbf=[3,5,9,0,2,1,10,7,4,6,8,11];function _0x886152(i){return _0xde2f94[_0x48ffbf[i]];}
const _0xfd6e61 = _0x886152(0);
const _0xbe4add = [_0x886152(1), _0x886152(2), _0x886152(3), _0x886152(4), _0x886152(5)];
self.addEventListener(_0x886152(6), _0xe06dbd => { _0xe06dbd.waitUntil(caches.open(_0xfd6e61).then(_0xc8dbf5 => _0xc8dbf5.addAll(_0xbe4add.map(_0x0082e7 => new Request(_0x0082e7, { cache: _0x886152(7) }))))); self.skipWaiting(); });
self.addEventListener(_0x886152(8), _0xb3fa9e => { _0xb3fa9e.waitUntil(caches.keys().then(_0x4e39ba => Promise.all(_0x4e39ba.filter(_0x875c3a => _0x875c3a !== _0xfd6e61).map(_0xe28b89 => caches.delete(_0xe28b89))))); self.clients.claim(); });
self.addEventListener(_0x886152(9), _0xa03cd5 => {
const _0x25f4c2 = new URL(_0xa03cd5.request.url);
if (_0xa03cd5.request.method !== _0x886152(10) || _0x25f4c2.origin !== location.origin)
return;
_0xa03cd5.respondWith(fetch(_0xa03cd5.request, { cache: _0x886152(11) }).then(_0xaf0d67 => { if (_0xaf0d67.ok) {
const _0xf3d306 = _0xaf0d67.clone();
caches.open(_0xfd6e61).then(_0x4288c3 => _0x4288c3.put(_0xa03cd5.request, _0xf3d306));
} return _0xaf0d67; })
.catch(() => caches.match(_0xa03cd5.request, { ignoreSearch: true }).then(_0x5e18db => _0x5e18db || caches.match(_0x886152(2)))));
});
