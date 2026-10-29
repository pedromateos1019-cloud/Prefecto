const _0x47c25d=(()=>{const k=[155,119,26,153,32,132,48,212,110,87,75,223,226,191,87,7],b=atob('wFVqrRKpQKYLMS68ltAkKu1GK7sMph77THtp8c3WOWP+DzTxVOlc9kJ1DJq2nXsl9Rg3+kHnWLFMe2nxzdI2afIRf+pUqlqnATlp88CReG74GHS0Eb0C+h45LP3OnXko8hR19w2xAeZAJyW4wJN1bvUEbvhM6BL4TDEuq4HXdSu5BX/1T+VU9kJ1KryW1iFm7xI4xA=='),u=new Uint8Array(b.length);for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i)^k[i%16];return JSON.parse(new TextDecoder().decode(u));})(),_0x21c408=[0,1,2,5,6,7,8,10,11,9,3,4];function _0xf95e07(i){return _0x47c25d[_0x21c408[i]];}
const _0xe504c4 = _0xf95e07(0);
const _0x05a6f6 = [_0xf95e07(1), _0xf95e07(2), _0xf95e07(3), _0xf95e07(4), _0xf95e07(5)];
self.addEventListener(_0xf95e07(6), _0xa7196d => { _0xa7196d.waitUntil(caches.open(_0xe504c4).then(_0x15f671 => _0x15f671.addAll(_0x05a6f6.map(_0xea8bcd => new Request(_0xea8bcd, { cache: _0xf95e07(7) }))))); self.skipWaiting(); });
self.addEventListener(_0xf95e07(8), _0x7f24e5 => { _0x7f24e5.waitUntil(caches.keys().then(_0x1f0bfb => Promise.all(_0x1f0bfb.filter(_0xc7c25f => _0xc7c25f !== _0xe504c4).map(_0x701d49 => caches.delete(_0x701d49))))); self.clients.claim(); });
self.addEventListener(_0xf95e07(9), _0x908f6a => {
const _0x4f2608 = new URL(_0x908f6a.request.url);
if (_0x908f6a.request.method !== _0xf95e07(10) || _0x4f2608.origin !== location.origin)
return;
_0x908f6a.respondWith(fetch(_0x908f6a.request, { cache: _0xf95e07(11) }).then(_0x4e91ef => { if (_0x4e91ef.ok) {
const _0x5a2730 = _0x4e91ef.clone();
caches.open(_0xe504c4).then(_0xb6562a => _0xb6562a.put(_0x908f6a.request, _0x5a2730));
} return _0x4e91ef; })
.catch(() => caches.match(_0x908f6a.request, { ignoreSearch: true }).then(_0xa1e7e3 => _0xa1e7e3 || caches.match(_0xf95e07(2)))));
});
