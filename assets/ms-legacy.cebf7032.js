!function(){function e(r){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}System.register([],(function(r){"use strict";return{execute:function(){var s=1e3,n=60*s,t=60*n,a=24*t,c=7*a,u=365.25*a;r("m",(function(r,i){i=i||{};var m=e(r);if("string"===m&&r.length>0)return function(e){if((e=String(e)).length>100)return;var r=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!r)return;var o=parseFloat(r[1]);switch((r[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return o*u;case"weeks":case"week":case"w":return o*c;case"days":case"day":case"d":return o*a;case"hours":case"hour":case"hrs":case"hr":case"h":return o*t;case"minutes":case"minute":case"mins":case"min":case"m":return o*n;case"seconds":case"second":case"secs":case"sec":case"s":return o*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return o;default:return}}(r);if("number"===m&&isFinite(r))return i.long?function(e){var r=Math.abs(e);if(r>=a)return o(e,r,a,"day");if(r>=t)return o(e,r,t,"hour");if(r>=n)return o(e,r,n,"minute");if(r>=s)return o(e,r,s,"second");return e+" ms"}(r):function(e){var r=Math.abs(e);if(r>=a)return Math.round(e/a)+"d";if(r>=t)return Math.round(e/t)+"h";if(r>=n)return Math.round(e/n)+"m";if(r>=s)return Math.round(e/s)+"s";return e+"ms"}(r);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(r))}));function o(e,r,s,n){var t=r>=1.5*s;return Math.round(e/s)+" "+n+(t?"s":"")}}}}))}();