System.register([],(function(t){"use strict";return{execute:function(){t({m:e,n:function(){var t,n,r,c=[],f=[];function a(r,i,u,o){if(i>=c.length)return null!=t&&r.sort(t),null!=n?n(r):r;for(var s,f,h,l=-1,v=r.length,p=c[i++],y=e(),g=u();++l<v;)(h=y.get(s=p(f=r[l])+""))?h.push(f):y.set(s,[f]);return y.each((function(t,n){o(g,n,a(t,i,u,o))})),g}function h(t,r){if(++r>c.length)return t;var e,i=f[r-1];return null!=n&&r>=c.length?e=t.entries():(e=[],t.each((function(t,n){e.push({key:n,values:h(t,r)})}))),null!=i?e.sort((function(t,n){return i(t.key,n.key)})):e}return r={object:function(t){return a(t,0,i,u)},map:function(t){return a(t,0,o,s)},entries:function(t){return h(a(t,0,o,s),0)},key:function(t){return c.push(t),r},sortKeys:function(t){return f[c.length-1]=t,r},sortValues:function(n){return t=n,r},rollup:function(t){return n=t,r}}}});var n="$";function r(){}function e(t,n){var e=new r;if(t instanceof r)t.each((function(t,n){e.set(n,t)}));else if(Array.isArray(t)){var i,u=-1,o=t.length;if(null==n)for(;++u<o;)e.set(u,t[u]);else for(;++u<o;)e.set(n(i=t[u],u,t),i)}else if(t)for(var s in t)e.set(s,t[s]);return e}function i(){return{}}function u(t,n,r){t[n]=r}function o(){return e()}function s(t,n,r){t.set(n,r)}function c(){}r.prototype=e.prototype={constructor:r,has:function(t){return n+t in this},get:function(t){return this[n+t]},set:function(t,r){return this[n+t]=r,this},remove:function(t){var r=n+t;return r in this&&delete this[r]},clear:function(){for(var t in this)t[0]===n&&delete this[t]},keys:function(){var t=[];for(var r in this)r[0]===n&&t.push(r.slice(1));return t},values:function(){var t=[];for(var r in this)r[0]===n&&t.push(this[r]);return t},entries:function(){var t=[];for(var r in this)r[0]===n&&t.push({key:r.slice(1),value:this[r]});return t},size:function(){var t=0;for(var r in this)r[0]===n&&++t;return t},empty:function(){for(var t in this)if(t[0]===n)return!1;return!0},each:function(t){for(var r in this)r[0]===n&&t(this[r],r.slice(1),this)}};var f=e.prototype;c.prototype={constructor:c,has:f.has,add:function(t){return this[n+(t+="")]=t,this},remove:f.remove,clear:f.clear,values:f.keys,size:f.size,empty:f.empty,each:f.each}}}}));