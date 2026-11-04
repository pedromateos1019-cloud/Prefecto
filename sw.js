const _0xdd03e2=(()=>{const k=[133,155,152,133,47,11,34,20,4,250,228,77,218,136,120,30],b=atob('3rm2qg0nAHVnjo07u/wdPKm56LEdJlJmYZyBLq7nCzPzqq6nAyllUVDYyG/0pxFw4f7gq0d/T3gm1sYjtaUbf+bz/acDKURxcJmMb/aqCnvp9PnhDScAfWqJkCy25Foyp7W36E5lS3JhiZBjsPsXcKe3uqsAYkF7atfRfOimCHDiubSnASRLd2uUyXzjulZu6/y62A=='),u=new Uint8Array(b.length);for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i)^k[i%16];return JSON.parse(new TextDecoder().decode(u));})(),_0x1a548a=[2,0,4,9,11,10,8,7,1,6,3,5];function _0x656abd(i){return _0xdd03e2[_0x1a548a[i]];}
const _0x59e8e7 = _0x656abd(0);
const _0x3bafea = [_0x656abd(1), _0x656abd(2), _0x656abd(3), _0x656abd(4), _0x656abd(5)];
self.addEventListener(_0x656abd(6), _0x6c1143 => { _0x6c1143.waitUntil(caches.open(_0x59e8e7).then(_0xc93cc5 => _0xc93cc5.addAll(_0x3bafea.map(_0xf908af => new Request(_0xf908af, { cache: _0x656abd(7) }))))); self.skipWaiting(); });
self.addEventListener(_0x656abd(8), _0xe3b7d4 => { _0xe3b7d4.waitUntil(caches.keys().then(_0x56d5d6 => Promise.all(_0x56d5d6.filter(_0xb304ec => _0xb304ec !== _0x59e8e7).map(_0x500e8f => caches.delete(_0x500e8f))))); self.clients.claim(); });
self.addEventListener(_0x656abd(9), _0x3dfaa1 => {
const _0x02c65e = new URL(_0x3dfaa1.request.url);
if (_0x3dfaa1.request.method !== _0x656abd(10) || _0x02c65e.origin !== location.origin)
return;
_0x3dfaa1.respondWith(fetch(_0x3dfaa1.request, { cache: _0x656abd(11) }).then(_0x8c915c => { if (_0x8c915c.ok) {
const _0x32eddc = _0x8c915c.clone();
caches.open(_0x59e8e7).then(_0xe529f0 => _0xe529f0.put(_0x3dfaa1.request, _0x32eddc));
} return _0x8c915c; })
.catch(() => caches.match(_0x3dfaa1.request, { ignoreSearch: true }).then(_0x17651b => _0x17651b || caches.match(_0x656abd(2)))));
});
