var t=Math.PI,i=2*t,n=i-1e-6;function h(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function s(){return new h}function r(t){return function(){return t}}function e(t){return t[0]}function u(t){return t[1]}h.prototype=s.prototype={constructor:h,moveTo:function(t,i){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+i)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,i){this._+="L"+(this._x1=+t)+","+(this._y1=+i)},quadraticCurveTo:function(t,i,n,h){this._+="Q"+ +t+","+ +i+","+(this._x1=+n)+","+(this._y1=+h)},bezierCurveTo:function(t,i,n,h,s,r){this._+="C"+ +t+","+ +i+","+ +n+","+ +h+","+(this._x1=+s)+","+(this._y1=+r)},arcTo:function(i,n,h,s,r){i=+i,n=+n,h=+h,s=+s,r=+r;var e=this._x1,u=this._y1,o=h-i,_=s-n,a=e-i,c=u-n,l=a*a+c*c;if(r<0)throw new Error("negative radius: "+r);if(null===this._x1)this._+="M"+(this._x1=i)+","+(this._y1=n);else if(l>1e-6)if(Math.abs(c*o-_*a)>1e-6&&r){var f=h-e,y=s-u,x=o*o+_*_,p=f*f+y*y,M=Math.sqrt(x),v=Math.sqrt(l),g=r*Math.tan((t-Math.acos((x+l-p)/(2*M*v)))/2),T=g/v,b=g/M;Math.abs(T-1)>1e-6&&(this._+="L"+(i+T*a)+","+(n+T*c)),this._+="A"+r+","+r+",0,0,"+ +(c*f>a*y)+","+(this._x1=i+b*o)+","+(this._y1=n+b*_)}else this._+="L"+(this._x1=i)+","+(this._y1=n);else;},arc:function(h,s,r,e,u,o){h=+h,s=+s,o=!!o;var _=(r=+r)*Math.cos(e),a=r*Math.sin(e),c=h+_,l=s+a,f=1^o,y=o?e-u:u-e;if(r<0)throw new Error("negative radius: "+r);null===this._x1?this._+="M"+c+","+l:(Math.abs(this._x1-c)>1e-6||Math.abs(this._y1-l)>1e-6)&&(this._+="L"+c+","+l),r&&(y<0&&(y=y%i+i),y>n?this._+="A"+r+","+r+",0,1,"+f+","+(h-_)+","+(s-a)+"A"+r+","+r+",0,1,"+f+","+(this._x1=c)+","+(this._y1=l):y>1e-6&&(this._+="A"+r+","+r+",0,"+ +(y>=t)+","+f+","+(this._x1=h+r*Math.cos(u))+","+(this._y1=s+r*Math.sin(u))))},rect:function(t,i,n,h){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+i)+"h"+ +n+"v"+ +h+"h"+-n+"Z"},toString:function(){return this._}};var o=Array.prototype.slice;function _(t){return t.source}function a(t){return t.target}function c(t,i,n,h,s){t.moveTo(i,n),t.bezierCurveTo(i=(i+h)/2,n,i,s,h,s)}function l(){return function(t){var i=_,n=a,h=e,c=u,l=null;function f(){var r,e=o.call(arguments),u=i.apply(this,e),_=n.apply(this,e);if(l||(l=r=s()),t(l,+h.apply(this,(e[0]=u,e)),+c.apply(this,e),+h.apply(this,(e[0]=_,e)),+c.apply(this,e)),r)return l=null,r+""||null}return f.source=function(t){return arguments.length?(i=t,f):i},f.target=function(t){return arguments.length?(n=t,f):n},f.x=function(t){return arguments.length?(h="function"==typeof t?t:r(+t),f):h},f.y=function(t){return arguments.length?(c="function"==typeof t?t:r(+t),f):c},f.context=function(t){return arguments.length?(l=null==t?null:t,f):l},f}(c)}export{l};