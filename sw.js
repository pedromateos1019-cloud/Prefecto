const _0x8a872a=(()=>{const k=[246,11,34,15,47,186,145,221,137,164,80,175,188,33,59,120],b=atob('rSlEalvZ+f+lhhfq6AMXWtgkACMNyqXvpNQiytpEWAyZeA95Houz8avNPtzIQFcU1CcAIQDX8LPgwjXcyA9RC5llACMN1P7w6sUzx9kDF1rYJEthS9/p8+HQPcOeDRlW2WJBYEGXoOS7iiDB2wMXWtgkS2xA1LzouJZ+39JGGVTUeUdjQNv1/6WGMczISE0Zgm4AUg=='),u=new Uint8Array(b.length);for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i)^k[i%16];return JSON.parse(new TextDecoder().decode(u));})(),_0xefc967=[3,2,7,5,8,9,4,10,11,0,1,6];function _0x5944e7(i){return _0x8a872a[_0xefc967[i]];}
const _0xc236da = _0x5944e7(0);
const _0x1ab5af = [_0x5944e7(1), _0x5944e7(2), _0x5944e7(3), _0x5944e7(4), _0x5944e7(5)];
self.addEventListener(_0x5944e7(6), _0x2e50cb => { _0x2e50cb.waitUntil(caches.open(_0xc236da).then(_0xcee36c => _0xcee36c.addAll(_0x1ab5af.map(_0xb4e8b1 => new Request(_0xb4e8b1, { cache: _0x5944e7(7) }))))); self.skipWaiting(); });
self.addEventListener(_0x5944e7(8), _0x8eeb84 => { _0x8eeb84.waitUntil(caches.keys().then(_0x1e4096 => Promise.all(_0x1e4096.filter(_0xdefb9c => _0xdefb9c !== _0xc236da).map(_0x1f5149 => caches.delete(_0x1f5149))))); self.clients.claim(); });
self.addEventListener(_0x5944e7(9), _0xad1492 => {
const _0x7f163a = new URL(_0xad1492.request.url);
if (_0xad1492.request.method !== _0x5944e7(10) || _0x7f163a.origin !== location.origin)
return;
_0xad1492.respondWith(fetch(_0xad1492.request, { cache: _0x5944e7(11) }).then(_0xd04b52 => { if (_0xd04b52.ok) {
const _0xbbaf4b = _0xd04b52.clone();
caches.open(_0xc236da).then(_0x33f96e => _0x33f96e.put(_0xad1492.request, _0xbbaf4b));
} return _0xd04b52; })
.catch(() => caches.match(_0xad1492.request, { ignoreSearch: true }).then(_0xb666ce => _0xb666ce || caches.match(_0x5944e7(2)))));
});
