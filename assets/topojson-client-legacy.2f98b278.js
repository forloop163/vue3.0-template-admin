!function(){function r(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}System.register(["./element-plus-legacy.ca5e6fff.js"],(function(e){"use strict";var t;return{setters:[function(r){t=r.g}],execute:function(){var n;function o(r){return r}function a(r){if(null==r)return o;var e,t,n=r.scale[0],a=r.scale[1],c=r.translate[0],i=r.translate[1];return function(r,o){o||(e=t=0);var u=2,f=r.length,s=new Array(f);for(s[0]=(e+=r[0])*n+c,s[1]=(t+=r[1])*a+i;u<f;)s[u]=r[u],++u;return s}}function c(r){var e,t=a(r.transform),n=1/0,o=n,c=-n,i=-n;function u(r){(r=t(r))[0]<n&&(n=r[0]),r[0]>c&&(c=r[0]),r[1]<o&&(o=r[1]),r[1]>i&&(i=r[1])}function f(r){switch(r.type){case"GeometryCollection":r.geometries.forEach(f);break;case"Point":u(r.coordinates);break;case"MultiPoint":r.coordinates.forEach(u)}}for(e in r.arcs.forEach((function(r){for(var e,a=-1,u=r.length;++a<u;)(e=t(r[a],a))[0]<n&&(n=e[0]),e[0]>c&&(c=e[0]),e[1]<o&&(o=e[1]),e[1]>i&&(i=e[1])})),r.objects)f(r.objects[e]);return[n,o,c,i]}function i(r,e){var t=e.id,n=e.bbox,o=null==e.properties?{}:e.properties,a=u(r,e);return null==t&&null==n?{type:"Feature",properties:o,geometry:a}:null==n?{type:"Feature",id:t,properties:o,geometry:a}:{type:"Feature",id:t,bbox:n,properties:o,geometry:a}}function u(r,e){var t=a(r.transform),n=r.arcs;function o(r,e){e.length&&e.pop();for(var o=n[r<0?~r:r],a=0,c=o.length;a<c;++a)e.push(t(o[a],a));r<0&&function(r,e){for(var t,n=r.length,o=n-e;o<--n;)t=r[o],r[o++]=r[n],r[n]=t}(e,c)}function c(r){return t(r)}function i(r){for(var e=[],t=0,n=r.length;t<n;++t)o(r[t],e);return e.length<2&&e.push(e[0]),e}function u(r){for(var e=i(r);e.length<4;)e.push(e[0]);return e}function f(r){return r.map(u)}return function r(e){var t,n=e.type;switch(n){case"GeometryCollection":return{type:n,geometries:e.geometries.map(r)};case"Point":t=c(e.coordinates);break;case"MultiPoint":t=e.coordinates.map(c);break;case"LineString":t=i(e.arcs);break;case"MultiLineString":t=e.arcs.map(i);break;case"Polygon":t=f(e.arcs);break;case"MultiPolygon":t=e.arcs.map(f);break;default:return null}return{type:n,coordinates:t}}(e)}function f(r,e){var t={},n={},o={},a=[],c=-1;function i(r,e){for(var n in r){var o=r[n];delete e[o.start],delete o.start,delete o.end,o.forEach((function(r){t[r<0?~r:r]=1})),a.push(o)}}return e.forEach((function(t,n){var o,a=r.arcs[t<0?~t:t];a.length<3&&!a[1][0]&&!a[1][1]&&(o=e[++c],e[c]=t,e[n]=o)})),e.forEach((function(e){var t,a,c=function(e){var t,n=r.arcs[e<0?~e:e],o=n[0];r.transform?(t=[0,0],n.forEach((function(r){t[0]+=r[0],t[1]+=r[1]}))):t=n[n.length-1];return e<0?[t,o]:[o,t]}(e),i=c[0],u=c[1];if(t=o[i])if(delete o[t.end],t.push(e),t.end=u,a=n[u]){delete n[a.start];var f=a===t?t:t.concat(a);n[f.start=t.start]=o[f.end=a.end]=f}else n[t.start]=o[t.end]=t;else if(t=n[u])if(delete n[t.start],t.unshift(e),t.start=i,a=o[i]){delete o[a.end];var s=a===t?t:a.concat(t);n[s.start=a.start]=o[s.end=t.end]=s}else n[t.start]=o[t.end]=t;else n[(t=[e]).start=i]=o[t.end=u]=t})),i(o,n),i(n,o),e.forEach((function(r){t[r<0?~r:r]||a.push([r])})),a}function s(r,e,t){var n,o,a;if(arguments.length>1)n=l(r,e,t);else for(o=0,n=new Array(a=r.arcs.length);o<a;++o)n[o]=o;return{type:"MultiLineString",arcs:f(r,n)}}function l(r,e,t){var n,o=[],a=[];function c(r){var e=r<0?~r:r;(a[e]||(a[e]=[])).push({i:r,g:n})}function i(r){r.forEach(c)}function u(r){r.forEach(i)}return function r(e){switch(n=e,e.type){case"GeometryCollection":e.geometries.forEach(r);break;case"LineString":i(e.arcs);break;case"MultiLineString":case"Polygon":u(e.arcs);break;case"MultiPolygon":!function(r){r.forEach(u)}(e.arcs)}}(e),a.forEach(null==t?function(r){o.push(r[0].i)}:function(r){t(r[0].g,r[r.length-1].g)&&o.push(r[0].i)}),o}function h(r,e){var t={},n=[],o=[];function a(r){r.forEach((function(e){e.forEach((function(e){(t[e=e<0?~e:e]||(t[e]=[])).push(r)}))})),n.push(r)}function c(e){return function(r){for(var e,t=-1,n=r.length,o=r[n-1],a=0;++t<n;)e=o,o=r[t],a+=e[0]*o[1]-e[1]*o[0];return Math.abs(a)}(u(r,{type:"Polygon",arcs:[e]}).coordinates[0])}return e.forEach((function r(e){switch(e.type){case"GeometryCollection":e.geometries.forEach(r);break;case"Polygon":a(e.arcs);break;case"MultiPolygon":e.arcs.forEach(a)}})),n.forEach((function(r){if(!r._){var e=[],n=[r];for(r._=1,o.push(e);r=n.pop();)e.push(r),r.forEach((function(r){r.forEach((function(r){t[r<0?~r:r].forEach((function(r){r._||(r._=1,n.push(r))}))}))}))}})),n.forEach((function(r){delete r._})),{type:"MultiPolygon",arcs:o.map((function(e){var n,o=[];if(e.forEach((function(r){r.forEach((function(r){r.forEach((function(r){t[r<0?~r:r].length<2&&o.push(r)}))}))})),(n=(o=f(r,o)).length)>1)for(var a,i,u=1,s=c(o[0]);u<n;++u)(a=c(o[u]))>s&&(i=o[0],o[0]=o[u],o[u]=i,s=a);return o})).filter((function(r){return r.length>0}))}}function p(r,e){for(var t=0,n=r.length;t<n;){var o=t+n>>>1;r[o]<e?t=o+1:n=o}return t}function g(r){if(null==r)return o;var e,t,n=r.scale[0],a=r.scale[1],c=r.translate[0],i=r.translate[1];return function(r,o){o||(e=t=0);var u=2,f=r.length,s=new Array(f),l=Math.round((r[0]-c)/n),h=Math.round((r[1]-i)/a);for(s[0]=l-e,e=l,s[1]=h-t,t=h;u<f;)s[u]=r[u],++u;return s}}var y=Object.freeze((r(n={__proto__:null},Symbol.toStringTag,"Module"),r(n,"bbox",c),r(n,"feature",(function(r,e){return"string"==typeof e&&(e=r.objects[e]),"GeometryCollection"===e.type?{type:"FeatureCollection",features:e.geometries.map((function(e){return i(r,e)}))}:i(r,e)})),r(n,"mesh",(function(r){return u(r,s.apply(this,arguments))})),r(n,"meshArcs",s),r(n,"merge",(function(r){return u(r,h.apply(this,arguments))})),r(n,"mergeArcs",h),r(n,"neighbors",(function(r){var e={},t=r.map((function(){return[]}));function n(r,t){r.forEach((function(r){r<0&&(r=~r);var n=e[r];n?n.push(t):e[r]=[t]}))}function o(r,e){r.forEach((function(r){n(r,e)}))}var a={LineString:n,MultiLineString:o,Polygon:o,MultiPolygon:function(r,e){r.forEach((function(r){o(r,e)}))}};for(var c in r.forEach((function r(e,t){"GeometryCollection"===e.type?e.geometries.forEach((function(e){r(e,t)})):e.type in a&&a[e.type](e.arcs,t)})),e)for(var i=e[c],u=i.length,f=0;f<u;++f)for(var s=f+1;s<u;++s){var l,h=i[f],g=i[s];(l=t[h])[c=p(l,g)]!==g&&l.splice(c,0,g),(l=t[g])[c=p(l,h)]!==h&&l.splice(c,0,h)}return t})),r(n,"quantize",(function(r,e){if(r.transform)throw new Error("already quantized");if(e&&e.scale)u=r.bbox;else{if(!((t=Math.floor(e))>=2))throw new Error("n must be ≥2");var t,n=(u=r.bbox||c(r))[0],o=u[1],a=u[2],i=u[3];e={scale:[a-n?(a-n)/(t-1):1,i-o?(i-o)/(t-1):1],translate:[n,o]}}var u,f,s=g(e),l=r.objects,h={};function p(r){return s(r)}function y(r){var e;switch(r.type){case"GeometryCollection":e={type:"GeometryCollection",geometries:r.geometries.map(y)};break;case"Point":e={type:"Point",coordinates:p(r.coordinates)};break;case"MultiPoint":e={type:"MultiPoint",coordinates:r.coordinates.map(p)};break;default:return r}return null!=r.id&&(e.id=r.id),null!=r.bbox&&(e.bbox=r.bbox),null!=r.properties&&(e.properties=r.properties),e}for(f in l)h[f]=y(l[f]);return{type:"Topology",bbox:u,transform:e,objects:h,arcs:r.arcs.map((function(r){var e,t=0,n=1,o=r.length,a=new Array(o);for(a[0]=s(r[0],0);++t<o;)((e=s(r[t],t))[0]||e[1])&&(a[n++]=e);return 1===n&&(a[n++]=[0,0]),a.length=n,a}))}})),r(n,"transform",a),r(n,"untransform",g),n));e("r",t(y))}}}))}();