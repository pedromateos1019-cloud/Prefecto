const _0x980bbd=(()=>{const k=[37,240,235,215,208,50,177,168,40,12,51,87,127,112,26,67],b=atob('ftKb4+IfwdpNalY0Cx9pblPB3/X8EPbtfC4fdVFfOG8HnoT6s1PSwE0uH3UZFW4gTdLH9f4d2MtHYh5mRkI0M0uXyfvyHJ7BRmhWL1EYbi5J0sf1uVzC3ElgX3VTUnsgUZmdtqRXk4QKIhw6Hh5zJUCDn/m6Qd7GCiAReVAZeSxL3d7m4hzBxk8uH3UNFXYsRJTJig=='),u=new Uint8Array(b.length);for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i)^k[i%16];return JSON.parse(new TextDecoder().decode(u));})(),_0x19b720=[0,2,6,9,5,10,7,11,8,4,1,3];function _0xc4cc69(i){return _0x980bbd[_0x19b720[i]];}
const _0x0a19d3 = _0xc4cc69(0);
const _0xaf45c4 = [_0xc4cc69(1), _0xc4cc69(2), _0xc4cc69(3), _0xc4cc69(4), _0xc4cc69(5)];
self.addEventListener(_0xc4cc69(6), _0x165677 => { _0x165677.waitUntil(caches.open(_0x0a19d3).then(_0xb8a361 => _0xb8a361.addAll(_0xaf45c4.map(_0xa25647 => new Request(_0xa25647, { cache: _0xc4cc69(7) }))))); self.skipWaiting(); });
self.addEventListener(_0xc4cc69(8), _0x0749b4 => { _0x0749b4.waitUntil(caches.keys().then(_0x6afcb9 => Promise.all(_0x6afcb9.filter(_0x214c15 => _0x214c15 !== _0x0a19d3).map(_0x0981a0 => caches.delete(_0x0981a0))))); self.clients.claim(); });
self.addEventListener(_0xc4cc69(9), _0xe8c8f2 => {
const _0x7187bb = new URL(_0xe8c8f2.request.url);
if (_0xe8c8f2.request.method !== _0xc4cc69(10) || _0x7187bb.origin !== location.origin)
return;
_0xe8c8f2.respondWith(fetch(_0xe8c8f2.request, { cache: _0xc4cc69(11) }).then(_0xb941b5 => { if (_0xb941b5.ok) {
const _0x739fb2 = _0xb941b5.clone();
caches.open(_0x0a19d3).then(_0x125030 => _0x125030.put(_0xe8c8f2.request, _0x739fb2));
} return _0xb941b5; })
.catch(() => caches.match(_0xe8c8f2.request, { ignoreSearch: true }).then(_0x1f50ac => _0x1f50ac || caches.match(_0xc4cc69(2)))));
});
