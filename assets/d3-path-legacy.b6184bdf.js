System.register([],(function(t){"use strict";return{execute:function(){t("p",r);var i=Math.PI,s=2*i,h=1e-6,_=s-h;function n(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function r(){return new n}n.prototype=r.prototype={constructor:n,moveTo:function(t,i){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+i)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,i){this._+="L"+(this._x1=+t)+","+(this._y1=+i)},quadraticCurveTo:function(t,i,s,h){this._+="Q"+ +t+","+ +i+","+(this._x1=+s)+","+(this._y1=+h)},bezierCurveTo:function(t,i,s,h,_,n){this._+="C"+ +t+","+ +i+","+ +s+","+ +h+","+(this._x1=+_)+","+(this._y1=+n)},arcTo:function(t,s,_,n,r){t=+t,s=+s,_=+_,n=+n,r=+r;var o=this._x1,a=this._y1,e=_-t,u=n-s,c=o-t,x=a-s,y=c*c+x*x;if(r<0)throw new Error("negative radius: "+r);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=s);else if(y>h)if(Math.abs(x*e-u*c)>h&&r){var f=_-o,M=n-a,l=e*e+u*u,v=f*f+M*M,b=Math.sqrt(l),p=Math.sqrt(y),w=r*Math.tan((i-Math.acos((l+y-v)/(2*b*p)))/2),T=w/p,g=w/b;Math.abs(T-1)>h&&(this._+="L"+(t+T*c)+","+(s+T*x)),this._+="A"+r+","+r+",0,0,"+ +(x*f>c*M)+","+(this._x1=t+g*e)+","+(this._y1=s+g*u)}else this._+="L"+(this._x1=t)+","+(this._y1=s)},arc:function(t,n,r,o,a,e){t=+t,n=+n,e=!!e;var u=(r=+r)*Math.cos(o),c=r*Math.sin(o),x=t+u,y=n+c,f=1^e,M=e?o-a:a-o;if(r<0)throw new Error("negative radius: "+r);null===this._x1?this._+="M"+x+","+y:(Math.abs(this._x1-x)>h||Math.abs(this._y1-y)>h)&&(this._+="L"+x+","+y),r&&(M<0&&(M=M%s+s),M>_?this._+="A"+r+","+r+",0,1,"+f+","+(t-u)+","+(n-c)+"A"+r+","+r+",0,1,"+f+","+(this._x1=x)+","+(this._y1=y):M>h&&(this._+="A"+r+","+r+",0,"+ +(M>=i)+","+f+","+(this._x1=t+r*Math.cos(a))+","+(this._y1=n+r*Math.sin(a))))},rect:function(t,i,s,h){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+i)+"h"+ +s+"v"+ +h+"h"+-s+"Z"},toString:function(){return this._}}}}}));