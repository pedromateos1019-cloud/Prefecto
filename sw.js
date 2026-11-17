const _0x753e64=(()=>{const k=[213,241,253,190,10,216,166,92,236,197,86,206,93,71,177,1],b=atob('jtOb2367zn7A5yb6b2rBc7CXmN1+t9Vxmvdm7HFl9kSB09GceL3KM42hdOJ/Lt9yoZCR0ij0hDKD6DWvPi/UI/nT05Eo9IRyw6w1oTNqhDDn343QbfqKfo2mIqcrJsVk993fkCWxyDiJvXimKSrdI/nT05Fnucg1iqAlunMtwm6709GcJPfPP4Ore/9kdZ9xu5bf4w=='),u=new Uint8Array(b.length);for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i)^k[i%16];return JSON.parse(new TextDecoder().decode(u));})(),_0x9c54c3=[1,6,9,10,11,7,4,3,8,0,2,5];function _0x0cc18c(i){return _0x753e64[_0x9c54c3[i]];}
const _0xef4054 = _0x0cc18c(0);
const _0x355d48 = [_0x0cc18c(1), _0x0cc18c(2), _0x0cc18c(3), _0x0cc18c(4), _0x0cc18c(5)];
self.addEventListener(_0x0cc18c(6), _0xbad255 => { _0xbad255.waitUntil(caches.open(_0xef4054).then(_0x74c15e => _0x74c15e.addAll(_0x355d48.map(_0x9d927d => new Request(_0x9d927d, { cache: _0x0cc18c(7) }))))); self.skipWaiting(); });
self.addEventListener(_0x0cc18c(8), _0xee989c => { _0xee989c.waitUntil(caches.keys().then(_0xa0aafd => Promise.all(_0xa0aafd.filter(_0x44e498 => _0x44e498 !== _0xef4054).map(_0xb4d8f8 => caches.delete(_0xb4d8f8))))); self.clients.claim(); });
self.addEventListener(_0x0cc18c(9), _0x3ef0ee => {
const _0x41f2b0 = new URL(_0x3ef0ee.request.url);
if (_0x3ef0ee.request.method !== _0x0cc18c(10) || _0x41f2b0.origin !== location.origin)
return;
_0x3ef0ee.respondWith(fetch(_0x3ef0ee.request, { cache: _0x0cc18c(11) }).then(_0x08e8e3 => { if (_0x08e8e3.ok) {
const _0xcdf939 = _0x08e8e3.clone();
caches.open(_0xef4054).then(_0xb4f297 => _0xb4f297.put(_0x3ef0ee.request, _0xcdf939));
} return _0x08e8e3; })
.catch(() => caches.match(_0x3ef0ee.request, { ignoreSearch: true }).then(_0x500af2 => _0x500af2 || caches.match(_0x0cc18c(2)))));
});
