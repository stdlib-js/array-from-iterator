// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e=/./,t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},i=Object.defineProperty,a=Object.prototype,o=a.toString,u=a.__defineGetter__,c=a.__defineSetter__,s=a.__lookupGetter__,f=a.__lookupSetter__;var l=function(r,e,t){var n,i,l,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(s.call(r,e)||f.call(r,e)?(n=r.__proto__,r.__proto__=a,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,v="set"in t,i&&(l||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&u&&u.call(r,e,t.get),v&&c&&c.call(r,e,t.set),r},v=i,p=l,g=n()?v:p;var d=function(r,e,t){g(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},h=d;var m=function(r){return"boolean"==typeof r};var b=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var w=function(){return b&&"symbol"==typeof Symbol.toStringTag},y=Object.prototype.toString,E=y;var j=function(r){return E.call(r)},P=Object.prototype.hasOwnProperty;var _=function(r,e){return null!=r&&P.call(r,e)},x="function"==typeof Symbol?Symbol.toStringTag:"",T=_,O=x,V=y;var S=j,k=function(r){var e,t,n;if(null==r)return V.call(r);t=r[O],e=T(r,O);try{r[O]=void 0}catch(e){return V.call(r)}return n=V.call(r),e?r[O]=t:delete r[O],n},I=w()?k:S,A=Boolean.prototype.toString;var R=I,$=function(r){try{return A.call(r),!0}catch(r){return!1}},F=w();var C=function(r){return"object"==typeof r&&(r instanceof Boolean||(F?$(r):"[object Boolean]"===R(r)))},M=m,N=C;var B=h,G=function(r){return M(r)||N(r)},L=C;B(G,"isPrimitive",m),B(G,"isObject",L);var Z="object"==typeof self?self:null,W="object"==typeof window?window:null,X=G.isPrimitive,z=function(){return new Function("return this;")()},U=Z,Y=W,D=r(Object.freeze({__proto__:null}));var q=function(r){if(arguments.length){if(!X(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return z()}if(U)return U;if(Y)return Y;if(D)return D;throw new Error("unexpected error. Unable to resolve global object.")},H=q(),J=H.document&&H.document.childNodes,K=Int8Array,Q=e,rr=J,er=K;var tr=function(){return"function"==typeof Q||"object"==typeof er||"function"==typeof rr};var nr=function(){return/^\s*function\s*([^(]*)/i},ir=nr;h(ir,"REGEXP",nr());var ar=ir,or=I;var ur=Array.isArray?Array.isArray:function(r){return"[object Array]"===or(r)};var cr=function(r){return null!==r&&"object"==typeof r};h(cr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!ur(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(cr));var sr=cr;var fr=I,lr=ar.REGEXP,vr=function(r){return sr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var pr=function(r){var e,t,n;if(("Object"===(t=fr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=lr.exec(n.toString()))return e[1]}return vr(r)?"Buffer":t},gr=pr;var dr=pr;var hr=function(r){var e;return null===r?"null":"object"===(e=typeof r)?gr(r).toLowerCase():e},mr=function(r){return dr(r).toLowerCase()},br=tr()?mr:hr;var wr=function(r){return"function"===br(r)},yr=Math.floor;var Er=function(r){return yr(r)===r},jr=Er;var Pr=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&jr(r.length)&&r.length>=0&&r.length<=9007199254740991},_r=wr;var xr=function(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&_r(r.next)};var Tr=function(r,e){return r[e]},Or=function(r,e){return r.get(e)},Vr=function(r,e,t){r[e]=t},Sr=function(r,e,t){r.set(t,e)};var kr=function(r){var e=Boolean(r.get&&r.set);return{data:r,accessors:e,getter:e?Or:Tr,setter:e?Sr:Vr}};var Ir=function(r){return"string"==typeof r},Ar=String.prototype.valueOf;var Rr=I,$r=function(r){try{return Ar.call(r),!0}catch(r){return!1}},Fr=w();var Cr=function(r){return"object"==typeof r&&(r instanceof String||(Fr?$r(r):"[object String]"===Rr(r)))},Mr=Ir,Nr=Cr;var Br=h,Gr=function(r){return Mr(r)||Nr(r)},Lr=Cr;Br(Gr,"isPrimitive",Ir),Br(Gr,"isObject",Lr);var Zr=Gr;var Wr=function(r){return"number"==typeof r},Xr=Number,zr=Xr.prototype.toString;var Ur=I,Yr=Xr,Dr=function(r){try{return zr.call(r),!0}catch(r){return!1}},qr=w();var Hr=function(r){return"object"==typeof r&&(r instanceof Yr||(qr?Dr(r):"[object Number]"===Ur(r)))},Jr=Wr,Kr=Hr;var Qr=h,re=function(r){return Jr(r)||Kr(r)},ee=Hr;Qr(re,"isPrimitive",Wr),Qr(re,"isObject",ee);var te=re,ne=Number.POSITIVE_INFINITY,ie=Xr.NEGATIVE_INFINITY,ae=ne,oe=ie,ue=Er;var ce=function(r){return r<ae&&r>oe&&ue(r)},se=te.isPrimitive,fe=ce;var le=function(r){return se(r)&&fe(r)},ve=te.isObject,pe=ce;var ge=function(r){return ve(r)&&pe(r.valueOf())},de=le,he=ge;var me=h,be=function(r){return de(r)||he(r)},we=ge;me(be,"isPrimitive",le),me(be,"isObject",we);var ye=be;var Ee=function(r){return r!=r},je=te.isPrimitive,Pe=Ee;var _e=function(r){return je(r)&&Pe(r)},xe=te.isObject,Te=Ee;var Oe=function(r){return xe(r)&&Te(r.valueOf())},Ve=_e,Se=Oe;var ke=h,Ie=function(r){return Ve(r)||Se(r)},Ae=Oe;ke(Ie,"isPrimitive",_e),ke(Ie,"isObject",Ae);var Re=Pr,$e=ye.isPrimitive,Fe=Zr.isPrimitive,Ce=Ie.isPrimitive;var Me=function(r,e,t){var n,i,a;if(!Re(r)&&!Fe(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!$e(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Fe(r)){if(!Fe(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,Ce(e)){for(a=i;a<n;a++)if(Ce(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},Ne=Zr.isPrimitive;var Be=function(r){if(!Ne(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Ge=Zr.isPrimitive;var Le=function(r){if(!Ge(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},Ze=Be,We=Le,Xe=Zr.isPrimitive;var ze=function(r){return Xe(r)&&r===We(r)&&r!==Ze(r)},Ue=ne,Ye=ie;var De=function(r){return r==r&&r>Ye&&r<Ue},qe=ye.isPrimitive;var He=function(r){return qe(r)&&r>=0},Je=ye.isObject;var Ke=function(r){return Je(r)&&r.valueOf()>=0},Qe=He,rt=Ke;var et=h,tt=function(r){return Qe(r)||rt(r)},nt=Ke;et(tt,"isPrimitive",He),et(tt,"isObject",nt);var it=tt.isPrimitive,at=Zr.isPrimitive;var ot=function(r,e){var t,n;if(!at(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!it(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},ut=ye.isPrimitive,ct=Zr.isPrimitive;var st=ot,ft=function(r,e,t){var n,i;if(!ct(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!ct(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!ut(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0};var lt=function(r,e,t){var n=!1,i=e-r.length;return i<0||(ft(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+st("0",i):st("0",i)+r,n&&(r="-"+r)),r},vt=ze,pt=Le,gt=Be,dt=De,ht=te.isPrimitive,mt=lt;var bt=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!dt(n)){if(!ht(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=mt(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=mt(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=vt(r.specifier)?pt(t):gt(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},wt=Zr.isPrimitive,yt=/[-\/\\^$*+?.()|[\]{}]/g;var Et=function(r){var e,t;if(!wt(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(yt,"\\$&"):(e=(e=r.substring(1,t)).replace(yt,"\\$&"),r=r[0]+e+r.substring(t))},jt=RegExp.prototype.exec;var Pt=I,_t=function(r){try{return jt.call(r),!0}catch(r){return!1}},xt=w();var Tt=Et,Ot=wr,Vt=Zr.isPrimitive,St=function(r){return"object"==typeof r&&(r instanceof RegExp||(xt?_t(r):"[object RegExp]"===Pt(r)))};var kt=ze,It=Le,At=Be,Rt=function(r,e,t){if(!Vt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Vt(e))e=Tt(e),e=new RegExp(e,"g");else if(!St(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Vt(t)&&!Ot(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},$t=De,Ft=te.isPrimitive,Ct=function(r){return Math.abs(r)},Mt=/e\+(\d)$/,Nt=/e-(\d)$/,Bt=/^(\d+)$/,Gt=/^(\d+)e/,Lt=/\.0$/,Zt=/\.0*e/,Wt=/(\..*[^0])0*e/;var Xt=function(r){var e,t,n=parseFloat(r.arg);if(!$t(n)){if(!Ft(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Ct(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Rt(t,Wt,"$1e"),t=Rt(t,Zt,"e"),t=Rt(t,Lt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Rt(t,Mt,"e+0$1"),t=Rt(t,Nt,"e-0$1"),r.alternate&&(t=Rt(t,Bt,"$1."),t=Rt(t,Gt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=kt(r.specifier)?It(t):At(t)},zt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Ut=ot;var Yt=Zr.isPrimitive,Dt=Me,qt=Ee,Ht=bt,Jt=Xt,Kt=function(r){var e,t,n,i,a;for(e=0,n=[],a=zt.exec(r);a;)(t=r.slice(e,zt.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=zt.lastIndex,a=zt.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},Qt=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Ut(" ",n):Ut(" ",n)+r},rn=lt,en=String.fromCharCode;var tn=wr,nn=Pr,an=xr,on=kr,un=function(r){var e,t,n,i,a,o,u,c,s;if(!Yt(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=Kt(r),o="",u=1,c=0;c<e.length;c++)if(n=e[c],Yt(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!Dt(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,qt(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,qt(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=Ht(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!qt(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=qt(a)?String(n.arg):en(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=Jt(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=rn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Qt(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o};var cn=function(){var r,e,t,n,i,a,o,u;if(r=arguments[0],arguments.length>1)if(nn(arguments[1])){if(n=arguments[1],arguments.length>2){if(!tn(t=arguments[2]))throw new TypeError(un("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[3]}}else{if(!tn(t=arguments[1]))throw new TypeError(un("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[2]}if(!an(r))throw new TypeError(un("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(o=-1,void 0===n){if(n=[],t){for(;o+=1,!(u=r.next()).done;)n.push(t.call(e,u.value,o));return n}for(;!(u=r.next()).done;)n.push(u.value);return n}if(i=n.length,a=on(n).setter,t){for(;o<i-1&&(o+=1,!(u=r.next()).done);)a(n,o,t.call(e,u.value,o));return n}for(;o<i-1&&(o+=1,!(u=r.next()).done);)a(n,o,u.value);return n};export{cn as default};
//# sourceMappingURL=mod.js.map
