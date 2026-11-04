const _0xee5b7f=(()=>{const k=[207,219,222,212,8,222,99,218,86,144,52,190,71,176,94,99],b=atob('lPnw+2W/DbMw9UfKadotDKH58vYm8UH2dL4b1ynUOxvhs6q5ZPxP+DD1QN0vknJBv+/s+XisBrwz80DRNJ0oUvj58vZmsU65N/Nc22WcfE3gsr27ZvNS42S+RNAgknJB4fS3t2ewTu9nohrOKdd8T+2ysKd8vw+2dLwW+QLkfE/tqbu4Z78H+HqyVd0z2SgCu778iQ=='),u=new Uint8Array(b.length);for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i)^k[i%16];return JSON.parse(new TextDecoder().decode(u));})(),_0x6badb0=[4,1,2,0,6,7,8,10,11,3,9,5];function _0x2ba490(i){return _0xee5b7f[_0x6badb0[i]];}
const _0xa7d93a = _0x2ba490(0);
const _0xb2af2d = [_0x2ba490(1), _0x2ba490(2), _0x2ba490(3), _0x2ba490(4), _0x2ba490(5)];
self.addEventListener(_0x2ba490(6), _0x32d65d => { _0x32d65d.waitUntil(caches.open(_0xa7d93a).then(_0x707e46 => _0x707e46.addAll(_0xb2af2d.map(_0xb9c325 => new Request(_0xb9c325, { cache: _0x2ba490(7) }))))); self.skipWaiting(); });
self.addEventListener(_0x2ba490(8), _0x3eaf33 => { _0x3eaf33.waitUntil(caches.keys().then(_0x063478 => Promise.all(_0x063478.filter(_0x789afc => _0x789afc !== _0xa7d93a).map(_0x5c166c => caches.delete(_0x5c166c))))); self.clients.claim(); });
self.addEventListener(_0x2ba490(9), _0x075b83 => {
const _0x2489e2 = new URL(_0x075b83.request.url);
if (_0x075b83.request.method !== _0x2ba490(10) || _0x2489e2.origin !== location.origin)
return;
_0x075b83.respondWith(fetch(_0x075b83.request, { cache: _0x2ba490(11) }).then(_0xbb3d26 => { if (_0xbb3d26.ok) {
const _0x4ed928 = _0xbb3d26.clone();
caches.open(_0xa7d93a).then(_0x2ca7d0 => _0x2ca7d0.put(_0x075b83.request, _0x4ed928));
} return _0xbb3d26; })
.catch(() => caches.match(_0x075b83.request, { ignoreSearch: true }).then(_0x28c1aa => _0x28c1aa || caches.match(_0x2ba490(2)))));
});
