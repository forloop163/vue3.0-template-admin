!function(){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}System.register(["./element-plus-legacy.ca5e6fff.js"],(function(t){"use strict";var n;return{setters:[function(e){n=e.c}],execute:function(){var r,i=t("E",{exports:{}});
/*!
             * EventEmitter v5.2.9 - git.io/ee
             * Unlicense - http://unlicense.org/
             * Oliver Caldwell - https://oli.me.uk/
             * @preserve
             */r=i,function(t){function n(){}var i=n.prototype,s=t.EventEmitter;function o(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function u(e){return function(){return this[e].apply(this,arguments)}}function f(t){return"function"==typeof t||t instanceof RegExp||!(!t||"object"!==e(t))&&f(t.listener)}i.getListeners=function(e){var t,n,r=this._getEvents();if(e instanceof RegExp)for(n in t={},r)r.hasOwnProperty(n)&&e.test(n)&&(t[n]=r[n]);else t=r[e]||(r[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;t<e.length;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&((t={})[e]=n),t||n},i.addListener=function(t,n){if(!f(n))throw new TypeError("listener must be a function");var r,i=this.getListenersAsObject(t),s="object"===e(n);for(r in i)i.hasOwnProperty(r)&&-1===o(i[r],n)&&i[r].push(s?n:{listener:n,once:!1});return this},i.on=u("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=u("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;t<e.length;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,t){var n,r,i=this.getListenersAsObject(e);for(r in i)i.hasOwnProperty(r)&&-1!==(n=o(i[r],t))&&i[r].splice(n,1);return this},i.off=u("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(t,n,r){var i,s,o=t?this.removeListener:this.addListener,u=t?this.removeListeners:this.addListeners;if("object"!==e(n)||n instanceof RegExp)for(i=r.length;i--;)o.call(this,n,r[i]);else for(i in n)n.hasOwnProperty(i)&&(s=n[i])&&("function"==typeof s?o.call(this,i,s):u.call(this,i,s));return this},i.removeEvent=function(t){var n,r=e(t),i=this._getEvents();if("string"===r)delete i[t];else if(t instanceof RegExp)for(n in i)i.hasOwnProperty(n)&&t.test(n)&&delete i[n];else delete this._events;return this},i.removeAllListeners=u("removeEvent"),i.emitEvent=function(e,t){var n,r,i,s,o=this.getListenersAsObject(e);for(s in o)if(o.hasOwnProperty(s))for(n=o[s].slice(0),i=0;i<n.length;i++)!0===(r=n[i]).once&&this.removeListener(e,r.listener),r.listener.apply(this,t||[])===this._getOnceReturnValue()&&this.removeListener(e,r.listener);return this},i.trigger=u("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},i._getEvents=function(){return this._events||(this._events={})},n.noConflict=function(){return t.EventEmitter=s,n},r.exports?r.exports=n:t.EventEmitter=n}("undefined"!=typeof window?window:n||{})}}}))}();