var t=function(){};t.prototype.append=function(e){return e.length?(e=t.from(e),!this.length&&e||e.length<200&&this.leafAppend(e)||this.length<200&&e.leafPrepend(this)||this.appendInner(e)):this},t.prototype.prepend=function(e){return e.length?t.from(e).append(this):this},t.prototype.appendInner=function(t){return new n(this,t)},t.prototype.slice=function(e,n){return void 0===e&&(e=0),void 0===n&&(n=this.length),e>=n?t.empty:this.sliceInner(Math.max(0,e),Math.min(this.length,n))},t.prototype.get=function(t){if(!(t<0||t>=this.length))return this.getInner(t)},t.prototype.forEach=function(t,e,n){void 0===e&&(e=0),void 0===n&&(n=this.length),e<=n?this.forEachInner(t,e,n,0):this.forEachInvertedInner(t,e,n,0)},t.prototype.map=function(t,e,n){void 0===e&&(e=0),void 0===n&&(n=this.length);var r=[];return this.forEach((function(e,n){return r.push(t(e,n))}),e,n),r},t.from=function(n){return n instanceof t?n:n&&n.length?new e(n):t.empty};var e=function(t){function e(e){t.call(this),this.values=e}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={length:{configurable:!0},depth:{configurable:!0}};return e.prototype.flatten=function(){return this.values},e.prototype.sliceInner=function(t,n){return 0==t&&n==this.length?this:new e(this.values.slice(t,n))},e.prototype.getInner=function(t){return this.values[t]},e.prototype.forEachInner=function(t,e,n,r){for(var i=e;i<n;i++)if(!1===t(this.values[i],r+i))return!1},e.prototype.forEachInvertedInner=function(t,e,n,r){for(var i=e-1;i>=n;i--)if(!1===t(this.values[i],r+i))return!1},e.prototype.leafAppend=function(t){if(this.length+t.length<=200)return new e(this.values.concat(t.flatten()))},e.prototype.leafPrepend=function(t){if(this.length+t.length<=200)return new e(t.flatten().concat(this.values))},n.length.get=function(){return this.values.length},n.depth.get=function(){return 0},Object.defineProperties(e.prototype,n),e}(t);t.empty=new e([]);var n=function(t){function e(e,n){t.call(this),this.left=e,this.right=n,this.length=e.length+n.length,this.depth=Math.max(e.depth,n.depth)+1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.flatten=function(){return this.left.flatten().concat(this.right.flatten())},e.prototype.getInner=function(t){return t<this.left.length?this.left.get(t):this.right.get(t-this.left.length)},e.prototype.forEachInner=function(t,e,n,r){var i=this.left.length;return!(e<i&&!1===this.left.forEachInner(t,e,Math.min(n,i),r))&&(!(n>i&&!1===this.right.forEachInner(t,Math.max(e-i,0),Math.min(this.length,n)-i,r+i))&&void 0)},e.prototype.forEachInvertedInner=function(t,e,n,r){var i=this.left.length;return!(e>i&&!1===this.right.forEachInvertedInner(t,e-i,Math.max(n,i)-i,r+i))&&(!(n<i&&!1===this.left.forEachInvertedInner(t,Math.min(e,i),n,r))&&void 0)},e.prototype.sliceInner=function(t,e){if(0==t&&e==this.length)return this;var n=this.left.length;return e<=n?this.left.slice(t,e):t>=n?this.right.slice(t-n,e-n):this.left.slice(t,n).append(this.right.slice(0,e-n))},e.prototype.leafAppend=function(t){var n=this.right.leafAppend(t);if(n)return new e(this.left,n)},e.prototype.leafPrepend=function(t){var n=this.left.leafPrepend(t);if(n)return new e(n,this.right)},e.prototype.appendInner=function(t){return this.left.depth>=Math.max(this.right.depth,t.depth)+1?new e(this.left,new e(this.right,t)):new e(this,t)},e}(t),r=t;export{r};