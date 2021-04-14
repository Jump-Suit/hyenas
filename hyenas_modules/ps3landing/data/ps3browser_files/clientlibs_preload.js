var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

if(window.Element&&!Element.prototype.closest){Element.prototype.closest=function(c){var d=(this.document||this.ownerDocument).querySelectorAll(c),a,b=this;
do{a=d.length;
while(--a>=0&&d.item(a)!==b){}}while((a<0)&&(b=b.parentElement));
return b
}
}if(!Element.prototype.matches){Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(b){var c=(this.document||this.ownerDocument).querySelectorAll(b),a=c.length;
while(--a>=0&&c.item(a)!==this){}return a>-1
}
}if(typeof Object.assign!="function"){Object.assign=function(d,f){if(d==null){throw new TypeError("Cannot convert undefined or null to object")
}var e=Object(d);
for(var c=1;
c<arguments.length;
c++){var b=arguments[c];
if(b!=null){for(var a in b){if(Object.prototype.hasOwnProperty.call(b,a)){e[a]=b[a]
}}}}return e
}
}if(!String.prototype.includes){String.prototype.includes=function(a,b){if(typeof b!=="number"){b=0
}if(b+a.length>this.length){return false
}else{return this.indexOf(a,b)!==-1
}}
}window.Modernizr=function(ay,ax,aw){function U(b){ao.cssText=b
}function T(d,c){return U(ak.join(d+";")+(c||""))
}function S(d,c){return typeof d===c
}function R(d,c){return !!~(""+d).indexOf(c)
}function Q(f,c){for(var h in f){var g=f[h];
if(!R(g,"-")&&ao[g]!==aw){return c=="pfx"?g:!0
}}return !1
}function P(g,c,j){for(var i in g){var h=c[g[i]];
if(h!==aw){return j===!1?g[i]:S(h,"function")?h.bind(j||c):h
}}return !1
}function O(g,f,j){var i=g.charAt(0).toUpperCase()+g.slice(1),h=(g+" "+ai.join(i+" ")+i).split(" ");
return S(f,"string")||S(f,"undefined")?Q(h,f):(h=(g+" "+ah.join(i+" ")+i).split(" "),P(h,f,j))
}function N(){au.input=function(f){for(var b=0,a=f.length;
b<a;
b++){ad[f[b]]=f[b] in an
}return ad.list&&(ad.list=!!ax.createElement("datalist")&&!!ay.HTMLDataListElement),ad
}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),au.inputtypes=function(b){for(var l=0,k,j,g,c=b.length;
l<c;
l++){an.setAttribute("type",j=b[l]),k=an.type!=="text",k&&(an.value=am,an.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(j)&&an.style.WebkitAppearance!==aw?(ar.appendChild(an),g=ax.defaultView,k=g.getComputedStyle&&g.getComputedStyle(an,null).WebkitAppearance!=="textfield"&&an.offsetHeight!==0,ar.removeChild(an)):/^(search|tel)$/.test(j)||(/^(url|email)$/.test(j)?k=an.checkValidity&&an.checkValidity()===!1:k=an.value!=am)),ae[b[l]]=!!k
}return ae
}("search tel url email datetime date month week time datetime-local number range color".split(" "))
}var av="2.6.2",au={},at=!0,ar=ax.documentElement,aq="modernizr",ap=ax.createElement(aq),ao=ap.style,an=ax.createElement("input"),am=":)",al={}.toString,ak=" -webkit- -moz- -o- -ms- ".split(" "),aj="Webkit Moz O ms",ai=aj.split(" "),ah=aj.toLowerCase().split(" "),ag={svg:"http://www.w3.org/2000/svg"},af={},ae={},ad={},ac=[],ab=ac.slice,aa,Z=function(v,u,t,s){var r,q,p,o,h=ax.createElement("div"),g=ax.body,b=g||ax.createElement("body");
if(parseInt(t,10)){while(t--){p=ax.createElement("div"),p.id=s?s[t]:aq+(t+1),h.appendChild(p)
}}return r=["&#173;",'<style id="s',aq,'">',v,"</style>"].join(""),h.id=aq,(g?h:b).innerHTML+=r,b.appendChild(h),g||(b.style.background="",b.style.overflow="hidden",o=ar.style.overflow,ar.style.overflow="hidden",ar.appendChild(b)),q=u(h,v),g?h.parentNode.removeChild(h):(b.parentNode.removeChild(b),ar.style.overflow=o),!!q
},Y=function(a){var f=ay.matchMedia||ay.msMatchMedia;
if(f){return f(a).matches
}var e;
return Z("@media "+a+" { #"+aq+" { position: absolute; } }",function(c){e=(ay.getComputedStyle?getComputedStyle(c,null):c.currentStyle)["position"]=="absolute"
}),e
},X=function(){function c(h,g){g=g||ax.createElement(b[h]||"div"),h="on"+h;
var a=h in g;
return a||(g.setAttribute||(g=ax.createElement("div")),g.setAttribute&&g.removeAttribute&&(g.setAttribute(h,""),a=S(g[h],"function"),S(g[h],"undefined")||(g[h]=aw),g.removeAttribute(h))),g=null,a
}var b={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};
return c
}(),W={}.hasOwnProperty,V;
!S(W,"undefined")&&!S(W.call,"undefined")?V=function(d,c){return W.call(d,c)
}:V=function(d,c){return c in d&&S(d.constructor.prototype[c],"undefined")
},Function.prototype.bind||(Function.prototype.bind=function(a){var h=this;
if(typeof h!="function"){throw new TypeError
}var g=ab.call(arguments,1),f=function(){if(this instanceof f){var b=function(){};
b.prototype=h.prototype;
var d=new b,c=h.apply(d,g.concat(ab.call(arguments)));
return Object(c)===c?c:d
}return h.apply(a,g.concat(ab.call(arguments)))
};
return f
}),af.flexbox=function(){return O("flexWrap")
},af.canvas=function(){var b=ax.createElement("canvas");
return !!b.getContext&&!!b.getContext("2d")
},af.canvastext=function(){return !!au.canvas&&!!S(ax.createElement("canvas").getContext("2d").fillText,"function")
},af.webgl=function(){return !!ay.WebGLRenderingContext
},af.touch=function(){var a;
return"ontouchstart" in ay||ay.DocumentTouch&&ax instanceof DocumentTouch?a=!0:Z(["@media (",ak.join("touch-enabled),("),aq,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(b){a=b.offsetTop===9
}),a
},af.geolocation=function(){return"geolocation" in navigator
},af.postmessage=function(){return !!ay.postMessage
},af.websqldatabase=function(){return !!ay.openDatabase
},af.indexedDB=function(){return !!O("indexedDB",ay)
},af.hashchange=function(){return X("hashchange",ay)&&(ax.documentMode===aw||ax.documentMode>7)
},af.history=function(){return !!ay.history&&!!history.pushState
},af.draganddrop=function(){var b=ax.createElement("div");
return"draggable" in b||"ondragstart" in b&&"ondrop" in b
},af.websockets=function(){return"WebSocket" in ay||"MozWebSocket" in ay
},af.rgba=function(){return U("background-color:rgba(150,255,150,.5)"),R(ao.backgroundColor,"rgba")
},af.hsla=function(){return U("background-color:hsla(120,40%,100%,.5)"),R(ao.backgroundColor,"rgba")||R(ao.backgroundColor,"hsla")
},af.multiplebgs=function(){return U("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(ao.background)
},af.backgroundsize=function(){return O("backgroundSize")
},af.borderimage=function(){return O("borderImage")
},af.borderradius=function(){return O("borderRadius")
},af.boxshadow=function(){return O("boxShadow")
},af.textshadow=function(){return ax.createElement("div").style.textShadow===""
},af.opacity=function(){return T("opacity:.55"),/^0.55$/.test(ao.opacity)
},af.cssanimations=function(){return O("animationName")
},af.csscolumns=function(){return O("columnCount")
},af.cssgradients=function(){var e="background-image:",d="gradient(linear,left top,right bottom,from(#9f9),to(white));",f="linear-gradient(left top,#9f9, white);";
return U((e+"-webkit- ".split(" ").join(d+e)+ak.join(f+e)).slice(0,-e.length)),R(ao.backgroundImage,"gradient")
},af.cssreflections=function(){return O("boxReflect")
},af.csstransforms=function(){return !!O("transform")
},af.csstransforms3d=function(){var b=!!O("perspective");
return b&&"webkitPerspective" in ar.style&&Z("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(a,d){b=a.offsetLeft===9&&a.offsetHeight===3
}),b
},af.csstransitions=function(){return O("transition")
},af.fontface=function(){var b;
return Z('@font-face {font-family:"font";src:url("https://")}',function(k,j){var i=ax.getElementById("smodernizr"),h=i.sheet||i.styleSheet,a=h?h.cssRules&&h.cssRules[0]?h.cssRules[0].cssText:h.cssText||"":"";
b=/src/i.test(a)&&a.indexOf(j.split(" ")[0])===0
}),b
},af.generatedcontent=function(){var b;
return Z(["#",aq,"{font:0/0 a}#",aq,':after{content:"',am,'";visibility:hidden;font:3px/1 a}'].join(""),function(a){b=a.offsetHeight>=3
}),b
},af.video=function(){var b=ax.createElement("video"),f=!1;
try{if(f=!!b.canPlayType){f=new Boolean(f),f.ogg=b.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),f.h264=b.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),f.webm=b.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")
}}catch(e){}return f
},af.audio=function(){var b=ax.createElement("audio"),f=!1;
try{if(f=!!b.canPlayType){f=new Boolean(f),f.ogg=b.canPlayType('static/audio/ogg; codecs="vorbis"').replace(/^no$/,""),f.mp3=b.canPlayType("static/audio/mpeg;").replace(/^no$/,""),f.wav=b.canPlayType('static/audio/wav; codecs="1"').replace(/^no$/,""),f.m4a=(b.canPlayType("static/audio/x-m4a;")||b.canPlayType("static/audio/aac;")).replace(/^no$/,"")
}}catch(e){}return f
},af.localstorage=function(){try{return localStorage.setItem(aq,aq),localStorage.removeItem(aq),!0
}catch(b){return !1
}},af.sessionstorage=function(){try{return sessionStorage.setItem(aq,aq),sessionStorage.removeItem(aq),!0
}catch(b){return !1
}},af.webworkers=function(){return !!ay.Worker
},af.applicationcache=function(){return !!ay.applicationCache
},af.svg=function(){return !!ax.createElementNS&&!!ax.createElementNS(ag.svg,"svg").createSVGRect
},af.inlinesvg=function(){var b=ax.createElement("div");
return b.innerHTML="<svg/>",(b.firstChild&&b.firstChild.namespaceURI)==ag.svg
},af.smil=function(){return !!ax.createElementNS&&/SVGAnimate/.test(al.call(ax.createElementNS(ag.svg,"animate")))
},af.svgclippaths=function(){return !!ax.createElementNS&&/SVGClipPath/.test(al.call(ax.createElementNS(ag.svg,"clipPath")))
};
for(var M in af){V(af,M)&&(aa=M.toLowerCase(),au[aa]=af[M](),ac.push((au[aa]?"":"no-")+aa))
}return au.input||N(),au.addTest=function(e,c){if(typeof e=="object"){for(var f in e){V(e,f)&&au.addTest(f,e[f])
}}else{e=e.toLowerCase();
if(au[e]!==aw){return au
}c=typeof c=="function"?c():c,typeof at!="undefined"&&at&&(ar.className+=" "+(c?"":"no-")+e),au[e]=c
}return au
},U(""),ap=an=null,function(J,I){function z(f,e){var h=f.createElement("p"),g=f.getElementsByTagName("head")[0]||f.documentElement;
return h.innerHTML="x<style>"+e+"</style>",g.insertBefore(h.lastChild,g.firstChild)
}function y(){var b=s.elements;
return typeof b=="string"?b.split(" "):b
}function x(d){var c=B[d[D]];
return c||(c={},C++,d[D]=C,B[C]=c),c
}function w(b,h,e){h||(h=I);
if(A){return h.createElement(b)
}e||(e=x(h));
var d;
return e.cache[b]?d=e.cache[b].cloneNode():F.test(b)?d=(e.cache[b]=e.createElem(b)).cloneNode():d=e.createElem(b),d.canHaveChildren&&!G.test(b)?e.frag.appendChild(d):d
}function v(b,l){b||(b=I);
if(A){return b.createDocumentFragment()
}l=l||x(b);
var k=l.frag.cloneNode(),j=0,i=y(),h=i.length;
for(;
j<h;
j++){k.createElement(i[j])
}return k
}function u(d,c){c.cache||(c.cache={},c.createElem=d.createElement,c.createFrag=d.createDocumentFragment,c.frag=c.createFrag()),d.createElement=function(a){return s.shivMethods?w(a,d,c):c.createElem(a)
},d.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+y().join().replace(/\w+/g,function(b){return c.createElem(b),c.frag.createElement(b),'c("'+b+'")'
})+");return n}")(s,c.frag)
}function t(b){b||(b=I);
var d=x(b);
return s.shivCSS&&!E&&!d.hasCSS&&(d.hasCSS=!!z(b,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),A||u(b,d),b
}var H=J.html5||{},G=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,F=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,E,D="_html5shiv",C=0,B={},A;
(function(){try{var b=I.createElement("a");
b.innerHTML="<xyz></xyz>",E="hidden" in b,A=b.childNodes.length==1||function(){I.createElement("a");
var c=I.createDocumentFragment();
return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"
}()
}catch(d){E=!0,A=!0
}})();
var s={elements:H.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:H.shivCSS!==!1,supportsUnknownElements:A,shivMethods:H.shivMethods!==!1,type:"default",shivDocument:t,createElement:w,createDocumentFragment:v};
J.html5=s,t(I)
}(this,ax),au._version=av,au._prefixes=ak,au._domPrefixes=ah,au._cssomPrefixes=ai,au.mq=Y,au.hasEvent=X,au.testProp=function(b){return Q([b])
},au.testAllProps=O,au.testStyles=Z,au.prefixed=function(e,d,f){return d?O(e,d,f):O(e,"pfx")
},ar.className=ar.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(at?" js "+ac.join(" "):""),au
}(this,this.document),function(ad,ac,ab){function aa(b){return"[object Function]"==P.call(b)
}function Z(b){return"string"==typeof b
}function Y(){}function X(b){return !b||"loaded"==b||"complete"==b||"uninitialized"==b
}function W(){var b=O.shift();
M=1,b?b.t?R(function(){("c"==b.t?L.injectCss:L.injectJs)(b.s,0,b.a,b.x,b.e,1)
},0):(b(),W()):M=0
}function V(w,v,t,s,q,p,n){function m(a){if(!g&&X(h.readyState)&&(x.r=g=1,!M&&W(),h.onload=h.onreadystatechange=null,a)){"img"!=w&&R(function(){I.removeChild(h)
},50);
for(var c in D[v]){D[v].hasOwnProperty(c)&&D[v][c].onload()
}}}var n=n||L.errorTimeout,h=ac.createElement(w),g=0,b=0,x={t:t,s:v,e:q,a:p,x:n};
1===D[v]&&(b=1,D[v]=[]),"object"==w?h.data=v:(h.src=v,h.type=w),h.width=h.height="0",h.onerror=h.onload=h.onreadystatechange=function(){m.call(this,b)
},O.splice(s,0,x),"img"!=w&&(b||2===D[v]?(I.insertBefore(h,J?null:Q),R(m,n)):D[v].push(h))
}function U(g,e,j,i,h){return M=0,e=e||"j",Z(g)?V("c"==e?G:H,g,e,this.i++,j,i,h):(O.splice(this.i++,0,g),1==O.length&&W()),this
}function T(){var b=L;
return b.loader={load:U,i:0},b
}var S=ac.documentElement,R=ad.setTimeout,Q=ac.getElementsByTagName("script")[0],P={}.toString,O=[],M=0,K="MozAppearance" in S.style,J=K&&!!ac.createRange().compareNode,I=J?S:Q.parentNode,S=ad.opera&&"[object Opera]"==P.call(ad.opera),S=!!ac.attachEvent&&!S,H=K?"object":S?"script":"img",G=S?"script":H,F=Array.isArray||function(b){return"[object Array]"==P.call(b)
},E=[],D={},C={timeout:function(d,c){return c.length&&(d.timeout=c[0]),d
}},N,L;
L=function(e){function c(i){var i=i.split("!"),h=E.length,q=i.pop(),p=i.length,q={url:q,origUrl:q,prefixes:i},o,l,j;
for(l=0;
l<p;
l++){j=i[l].split("="),(o=C[j.shift()])&&(q=o(q,j))
}for(l=0;
l<h;
l++){q=E[l](q)
}return q
}function n(b,s,r,q,p){var o=c(b),l=o.autoCallback;
o.url.split(".").pop().split("?").shift(),o.bypass||(s&&(s=aa(s)?s:s[b]||s[q]||s[b.split("/").pop().split("?")[0]]),o.instead?o.instead(b,s,r,q,p):(D[o.url]?o.noexec=!0:D[o.url]=1,r.load(o.url,o.forceCSS||!o.forceJS&&"css"==o.url.split(".").pop().split("?").shift()?"c":ab,o.noexec,o.attrs,o.timeout),(aa(s)||aa(l))&&r.load(function(){T(),s&&s(o.origUrl,p,q),l&&l(o.origUrl,p,q),D[o.url]=2
})))
}function m(w,v){function u(b,h){if(b){if(Z(b)){h||(r=function(){var i=[].slice.call(arguments);
q.apply(this,i),p()
}),n(b,r,v,0,t)
}else{if(Object(b)===b){for(g in o=function(){var a=0,i;
for(i in b){b.hasOwnProperty(i)&&a++
}return a
}(),b){b.hasOwnProperty(g)&&(!h&&!--o&&(aa(r)?r=function(){var i=[].slice.call(arguments);
q.apply(this,i),p()
}:r[g]=function(i){return function(){var a=[].slice.call(arguments);
i&&i.apply(this,a),p()
}
}(q[g])),n(b[g],r,v,g,t))
}}}}else{!h&&p()
}}var t=!!w.test,s=w.load||w.both,r=w.callback||Y,q=r,p=w.complete||Y,o,g;
u(t?w.yep:w.nope,!!s),s&&u(s)
}var k,f,d=this.yepnope.loader;
if(Z(e)){n(e,0,d,0)
}else{if(F(e)){for(k=0;
k<e.length;
k++){f=e[k],Z(f)?n(f,0,d,0):F(f)?L(f):Object(f)===f&&m(f,d)
}}else{Object(e)===e&&m(e,d)
}}},L.addPrefix=function(d,c){C[d]=c
},L.addFilter=function(b){E.push(b)
},L.errorTimeout=10000,null==ac.readyState&&ac.addEventListener&&(ac.readyState="loading",ac.addEventListener("DOMContentLoaded",N=function(){ac.removeEventListener("DOMContentLoaded",N,0),ac.readyState="complete"
},0)),ad.yepnope=T(),ad.yepnope.executeStack=W,ad.yepnope.injectJs=function(r,q,p,n,m,h){var g=ac.createElement("script"),f,b,n=n||L.errorTimeout;
g.src=r;
for(b in p){g.setAttribute(b,p[b])
}q=h?W:q||Y,g.onreadystatechange=g.onload=function(){!f&&X(g.readyState)&&(f=1,q(),g.onload=g.onreadystatechange=null)
},R(function(){f||(f=1,q(1))
},n),m?g.onload():Q.parentNode.insertBefore(g,Q)
},ad.yepnope.injectCss=function(b,n,m,l,k,h){var l=ac.createElement("link"),f,n=h?W:n||Y;
l.href=b,l.rel="stylesheet",l.type="text/css";
for(f in m){l.setAttribute(f,m[f])
}k||(Q.parentNode.insertBefore(l,Q),R(n,0))
}
}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))
},Modernizr.addTest("bgpositionxy",function(){return Modernizr.testStyles("#modernizr {background-position: 3px 5px;}",function(f){var e=window.getComputedStyle?getComputedStyle(f,null):f.currentStyle,h=e.backgroundPositionX=="3px"||e["background-position-x"]=="3px",g=e.backgroundPositionY=="5px"||e["background-position-y"]=="5px";
return h&&g
})
});
var Hogan={};
(function(j,h){j.Template=function(o,p,n,m){this.r=o||this.r;
this.c=n;
this.options=m;
this.text=p||"";
this.buf=(h)?[]:""
};
j.Template.prototype={r:function(o,n,m){return""
},v:c,t:e,render:function b(o,n,m){return this.ri([o],n||{},m)
},ri:function(o,n,m){return this.r(o,n,m)
},rp:function(o,q,p,m){var n=p[o];
if(!n){return""
}if(this.c&&typeof n=="string"){n=this.c.compile(n,this.options)
}return n.ri(q,p,m)
},rs:function(p,o,q){var m=p[p.length-1];
if(!g(m)){q(p,o,this);
return
}for(var n=0;
n<m.length;
n++){p.push(m[n]);
q(p,o,this);
p.pop()
}},s:function(s,n,q,o,t,m,p){var r;
if(g(s)&&s.length===0){return false
}if(typeof s=="function"){s=this.ls(s,n,q,o,t,m,p)
}r=(s==="")||!!s;
if(!o&&r&&n){n.push((typeof s=="object")?s:n[n.length-1])
}return r
},d:function(r,n,p,q){var s=r.split("."),t=this.f(s[0],n,p,q),m=null;
if(r==="."&&g(n[n.length-2])){return n[n.length-1]
}for(var o=1;
o<s.length;
o++){if(t&&typeof t=="object"&&s[o] in t){m=t;
t=t[s[o]]
}else{t=""
}}if(q&&!t){return false
}if(!q&&typeof t=="function"){n.push(m);
t=this.lv(t,n,p);
n.pop()
}return t
},f:function(q,m,p,r){var t=false,n=null,s=false;
for(var o=m.length-1;
o>=0;
o--){n=m[o];
if(n&&typeof n=="object"&&q in n){t=n[q];
s=true;
break
}}if(!s){return(r)?false:""
}if(!r&&typeof t=="function"){t=this.lv(t,m,p)
}return t
},ho:function(s,m,p,r,o){var q=this.c;
var n=this.options;
n.delimiters=o;
var r=s.call(m,r);
r=(r==null)?String(r):r.toString();
this.b(q.compile(r,n).render(m,p));
return false
},b:(h)?function(m){this.buf.push(m)
}:function(m){this.buf+=m
},fl:(h)?function(){var m=this.buf.join("");
this.buf=[];
return m
}:function(){var m=this.buf;
this.buf="";
return m
},ls:function(n,u,r,o,m,p,v){var q=u[u.length-1],s=null;
if(!o&&this.c&&n.length>0){return this.ho(n,q,r,this.text.substring(m,p),v)
}s=n.call(q);
if(typeof s=="function"){if(o){return true
}else{if(this.c){return this.ho(s,q,r,this.text.substring(m,p),v)
}}}return s
},lv:function(q,o,p){var n=o[o.length-1];
var m=q.call(n);
if(typeof m=="function"){m=e(m.call(n));
if(this.c&&~m.indexOf("{\u007B")){return this.c.compile(m,this.options).render(n,p)
}}return e(m)
}};
var i=/&/g,d=/</g,a=/>/g,l=/\'/g,k=/\"/g,f=/[&<>\"\']/;
function e(m){return String((m===null||m===undefined)?"":m)
}function c(m){m=e(m);
return f.test(m)?m.replace(i,"&amp;").replace(d,"&lt;").replace(a,"&gt;").replace(l,"&#39;").replace(k,"&quot;"):m
}var g=Array.isArray||function(m){return Object.prototype.toString.call(m)==="[object Array]"
}
})(typeof exports!=="undefined"?exports:Hogan);
(function(n){var f=/\S/,j=/\"/g,o=/\n/g,k=/\r/g,u=/\\/g,a={"#":1,"^":2,"/":3,"!":4,">":5,"<":6,"=":7,_v:8,"{":9,"&":10};
n.scan=function m(G,B){var O=G.length,y=0,D=1,x=2,z=y,C=null,Q=null,P="",J=[],F=false,N=0,K=0,H="{{",M="}}";
function L(){if(P.length>0){J.push(new String(P));
P=""
}}function A(){var S=true;
for(var R=K;
R<J.length;
R++){S=(J[R].tag&&a[J[R].tag]<a._v)||(!J[R].tag&&J[R].match(f)===null);
if(!S){return false
}}return S
}function I(U,R){L();
if(U&&A()){for(var S=K,T;
S<J.length;
S++){if(!J[S].tag){if((T=J[S+1])&&T.tag==">"){T.indent=J[S].toString()
}J.splice(S,1)
}}}else{if(!R){J.push({tag:"\n"})
}}F=false;
K=J.length
}function E(V,S){var U="="+M,R=V.indexOf(U,S),T=q(V.substring(V.indexOf("=",S)+1,R)).split(" ");
H=T[0];
M=T[1];
return R+U.length-1
}if(B){B=B.split(" ");
H=B[0];
M=B[1]
}for(N=0;
N<O;
N++){if(z==y){if(w(H,G,N)){--N;
L();
z=D
}else{if(G.charAt(N)=="\n"){I(F)
}else{P+=G.charAt(N)
}}}else{if(z==D){N+=H.length-1;
Q=a[G.charAt(N+1)];
C=Q?G.charAt(N+1):"_v";
if(C=="="){N=E(G,N);
z=y
}else{if(Q){N++
}z=x
}F=N
}else{if(w(M,G,N)){J.push({tag:C,n:q(P),otag:H,ctag:M,i:(C=="/")?F-M.length:N+H.length});
P="";
N+=M.length-1;
z=y;
if(C=="{"){if(M=="}}"){N++
}else{r(J[J.length-1])
}}}else{P+=G.charAt(N)
}}}}I(F,true);
return J
};
function r(x){if(x.n.substr(x.n.length-1)==="}"){x.n=x.n.substring(0,x.n.length-1)
}}function q(x){if(x.trim){return x.trim()
}return x.replace(/^\s*|\s*$/g,"")
}function w(x,B,z){if(B.charAt(z)!=x.charAt(0)){return false
}for(var A=1,y=x.length;
A<y;
A++){if(B.charAt(z+A)!=x.charAt(A)){return false
}}return true
}function b(D,A,y,C){var x=[],B=null,z=null;
while(D.length>0){z=D.shift();
if(z.tag=="#"||z.tag=="^"||e(z,C)){y.push(z);
z.nodes=b(D,z.tag,y,C);
x.push(z)
}else{if(z.tag=="/"){if(y.length===0){throw new Error("Closing tag without opener: /"+z.n)
}B=y.pop();
if(z.n!=B.n&&!g(z.n,B.n,C)){throw new Error("Nesting error: "+B.n+" vs. "+z.n)
}B.end=z.i;
return x
}else{x.push(z)
}}}if(y.length>0){throw new Error("missing closing tag: "+y.pop().n)
}return x
}function e(A,y){for(var z=0,x=y.length;
z<x;
z++){if(y[z].o==A.n){A.tag="#";
return true
}}}function g(B,z,y){for(var A=0,x=y.length;
A<x;
A++){if(y[A].c==B&&y[A].o==z){return true
}}}n.generate=function(x,A,y){var z='var _=this;_.b(i=i||"");'+t(x)+"return _.fl();";
if(y.asString){return"function(c,p,i){"+z+";}"
}return new n.Template(new Function("c","p","i",z),A,n,y)
};
function v(x){return x.replace(u,"\\\\").replace(j,'\\"').replace(o,"\\n").replace(k,"\\r")
}function i(x){return(~x.indexOf("."))?"d":"f"
}function t(y){var B="";
for(var A=0,z=y.length;
A<z;
A++){var x=y[A].tag;
if(x=="#"){B+=h(y[A].nodes,y[A].n,i(y[A].n),y[A].i,y[A].end,y[A].otag+" "+y[A].ctag)
}else{if(x=="^"){B+=s(y[A].nodes,y[A].n,i(y[A].n))
}else{if(x=="<"||x==">"){B+=d(y[A])
}else{if(x=="{"||x=="&"){B+=c(y[A].n,i(y[A].n))
}else{if(x=="\n"){B+=l('"\\n"'+(y.length-1==A?"":" + i"))
}else{if(x=="_v"){B+=p(y[A].n,i(y[A].n))
}else{if(x===undefined){B+=l('"'+v(y[A])+'"')
}}}}}}}}return B
}function h(y,C,B,A,x,z){return"if(_.s(_."+B+'("'+v(C)+'",c,p,1),c,p,0,'+A+","+x+',"'+z+'")){_.rs(c,p,function(c,p,_){'+t(y)+"});c.pop();}"
}function s(x,z,y){return"if(!_.s(_."+y+'("'+v(z)+'",c,p,1),c,p,1,0,0,"")){'+t(x)+"};"
}function d(x){return'_.b(_.rp("'+v(x.n)+'",c,p,"'+(x.indent||"")+'"));'
}function c(y,x){return"_.b(_.t(_."+x+'("'+v(y)+'",c,p,0)));'
}function p(y,x){return"_.b(_.v(_."+x+'("'+v(y)+'",c,p,0)));'
}function l(x){return"_.b("+x+");"
}n.parse=function(y,z,x){x=x||{};
return b(y,"",[],x.sectionTags||[])
},n.cache={};
n.compile=function(A,x){x=x||{};
var z=A+"||"+!!x.asString;
var y=this.cache[z];
if(y){return y
}y=this.generate(this.parse(this.scan(A,x.delimiters),A,x),A,x);
return this.cache[z]=y
}
})(typeof exports!=="undefined"?exports:Hogan);
(function(){var v=this;
var j=v._;
var D={};
var C=Array.prototype,f=Object.prototype,q=Function.prototype;
var m=C.slice,z=C.unshift,c=f.toString,h=f.hasOwnProperty;
var L=C.forEach,o=C.map,E=C.reduce,b=C.reduceRight,a=C.filter,A=C.every,n=C.some,l=C.indexOf,k=C.lastIndexOf,s=Array.isArray,e=Object.keys,F=q.bind;
var M=function(p){return new t(p)
};
if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=M
}exports._=M
}else{v._=M
}M.VERSION="1.3.3";
var I=M.each=M.forEach=function(R,Q,P){if(R==null){return
}if(L&&R.forEach===L){R.forEach(Q,P)
}else{if(R.length===+R.length){for(var O=0,p=R.length;
O<p;
O++){if(O in R&&Q.call(P,R[O],O,R)===D){return
}}}else{for(var N in R){if(M.has(R,N)){if(Q.call(P,R[N],N,R)===D){return
}}}}}};
M.map=M.collect=function(P,O,N){var p=[];
if(P==null){return p
}if(o&&P.map===o){return P.map(O,N)
}I(P,function(S,Q,R){p[p.length]=O.call(N,S,Q,R)
});
if(P.length===+P.length){p.length=P.length
}return p
};
M.reduce=M.foldl=M.inject=function(Q,P,p,O){var N=arguments.length>2;
if(Q==null){Q=[]
}if(E&&Q.reduce===E){if(O){P=M.bind(P,O)
}return N?Q.reduce(P,p):Q.reduce(P)
}I(Q,function(T,R,S){if(!N){p=T;
N=true
}else{p=P.call(O,p,T,R,S)
}});
if(!N){throw new TypeError("Reduce of empty array with no initial value")
}return p
};
M.reduceRight=M.foldr=function(Q,P,p,O){var N=arguments.length>2;
if(Q==null){Q=[]
}if(b&&Q.reduceRight===b){if(O){P=M.bind(P,O)
}return N?Q.reduceRight(P,p):Q.reduceRight(P)
}var R=M.toArray(Q).reverse();
if(O&&!N){P=M.bind(P,O)
}return N?M.reduce(R,P,p,O):M.reduce(R,P)
};
M.find=M.detect=function(P,O,N){var p;
y(P,function(S,Q,R){if(O.call(N,S,Q,R)){p=S;
return true
}});
return p
};
M.filter=M.select=function(P,O,N){var p=[];
if(P==null){return p
}if(a&&P.filter===a){return P.filter(O,N)
}I(P,function(S,Q,R){if(O.call(N,S,Q,R)){p[p.length]=S
}});
return p
};
M.reject=function(P,O,N){var p=[];
if(P==null){return p
}I(P,function(S,Q,R){if(!O.call(N,S,Q,R)){p[p.length]=S
}});
return p
};
M.every=M.all=function(P,O,N){var p=true;
if(P==null){return p
}if(A&&P.every===A){return P.every(O,N)
}I(P,function(S,Q,R){if(!(p=p&&O.call(N,S,Q,R))){return D
}});
return !!p
};
var y=M.some=M.any=function(P,O,N){O||(O=M.identity);
var p=false;
if(P==null){return p
}if(n&&P.some===n){return P.some(O,N)
}I(P,function(S,Q,R){if(p||(p=O.call(N,S,Q,R))){return D
}});
return !!p
};
M.include=M.contains=function(O,N){var p=false;
if(O==null){return p
}if(l&&O.indexOf===l){return O.indexOf(N)!=-1
}p=y(O,function(P){return P===N
});
return p
};
M.invoke=function(N,O){var p=m.call(arguments,2);
return M.map(N,function(P){return(M.isFunction(O)?O||P:P[O]).apply(P,p)
})
};
M.pluck=function(N,p){return M.map(N,function(O){return O[p]
})
};
M.max=function(P,O,N){if(!O&&M.isArray(P)&&P[0]===+P[0]){return Math.max.apply(Math,P)
}if(!O&&M.isEmpty(P)){return -Infinity
}var p={computed:-Infinity};
I(P,function(T,Q,S){var R=O?O.call(N,T,Q,S):T;
R>=p.computed&&(p={value:T,computed:R})
});
return p.value
};
M.min=function(P,O,N){if(!O&&M.isArray(P)&&P[0]===+P[0]){return Math.min.apply(Math,P)
}if(!O&&M.isEmpty(P)){return Infinity
}var p={computed:Infinity};
I(P,function(T,Q,S){var R=O?O.call(N,T,Q,S):T;
R<p.computed&&(p={value:T,computed:R})
});
return p.value
};
M.shuffle=function(O){var p=[],N;
I(O,function(R,P,Q){N=Math.floor(Math.random()*(P+1));
p[P]=p[N];
p[N]=R
});
return p
};
M.sortBy=function(O,P,p){var N=M.isFunction(P)?P:function(Q){return Q[P]
};
return M.pluck(M.map(O,function(S,Q,R){return{value:S,criteria:N.call(p,S,Q,R)}
}).sort(function(T,S){var R=T.criteria,Q=S.criteria;
if(R===void 0){return 1
}if(Q===void 0){return -1
}return R<Q?-1:R>Q?1:0
}),"value")
};
M.groupBy=function(O,P){var p={};
var N=M.isFunction(P)?P:function(Q){return Q[P]
};
I(O,function(S,Q){var R=N(S,Q);
(p[R]||(p[R]=[])).push(S)
});
return p
};
M.sortedIndex=function(R,Q,O){O||(O=M.identity);
var p=0,P=R.length;
while(p<P){var N=(p+P)>>1;
O(R[N])<O(Q)?p=N+1:P=N
}return p
};
M.toArray=function(p){if(!p){return[]
}if(M.isArray(p)){return m.call(p)
}if(M.isArguments(p)){return m.call(p)
}if(p.toArray&&M.isFunction(p.toArray)){return p.toArray()
}return M.values(p)
};
M.size=function(p){return M.isArray(p)?p.length:M.keys(p).length
};
M.first=M.head=M.take=function(O,N,p){return(N!=null)&&!p?m.call(O,0,N):O[0]
};
M.initial=function(O,N,p){return m.call(O,0,O.length-((N==null)||p?1:N))
};
M.last=function(O,N,p){if((N!=null)&&!p){return m.call(O,Math.max(O.length-N,0))
}else{return O[O.length-1]
}};
M.rest=M.tail=function(O,p,N){return m.call(O,(p==null)||N?1:p)
};
M.compact=function(p){return M.filter(p,function(N){return !!N
})
};
M.flatten=function(N,p){return M.reduce(N,function(O,P){if(M.isArray(P)){return O.concat(p?P:M.flatten(P))
}O[O.length]=P;
return O
},[])
};
M.without=function(p){return M.difference(p,m.call(arguments,1))
};
M.uniq=M.unique=function(Q,P,O){var p=O?M.map(Q,O):Q;
var N=[];
if(Q.length<3){P=true
}M.reduce(p,function(R,T,S){if(P?M.last(R)!==T||!R.length:!M.include(R,T)){R.push(T);
N.push(Q[S])
}return R
},[]);
return N
};
M.union=function(){return M.uniq(M.flatten(arguments,true))
};
M.intersection=M.intersect=function(N){var p=m.call(arguments,1);
return M.filter(M.uniq(N),function(O){return M.every(p,function(P){return M.indexOf(P,O)>=0
})
})
};
M.difference=function(N){var p=M.flatten(m.call(arguments,1),true);
return M.filter(N,function(O){return !M.include(p,O)
})
};
M.zip=function(){var p=m.call(arguments);
var P=M.max(M.pluck(p,"length"));
var O=new Array(P);
for(var N=0;
N<P;
N++){O[N]=M.pluck(p,""+N)
}return O
};
M.indexOf=function(Q,O,P){if(Q==null){return -1
}var N,p;
if(P){N=M.sortedIndex(Q,O);
return Q[N]===O?N:-1
}if(l&&Q.indexOf===l){return Q.indexOf(O)
}for(N=0,p=Q.length;
N<p;
N++){if(N in Q&&Q[N]===O){return N
}}return -1
};
M.lastIndexOf=function(O,N){if(O==null){return -1
}if(k&&O.lastIndexOf===k){return O.lastIndexOf(N)
}var p=O.length;
while(p--){if(p in O&&O[p]===N){return p
}}return -1
};
M.range=function(R,P,Q){if(arguments.length<=1){P=R||0;
R=0
}Q=arguments[2]||1;
var N=Math.max(Math.ceil((P-R)/Q),0);
var p=0;
var O=new Array(N);
while(p<N){O[p++]=R;
R+=Q
}return O
};
var G=function(){};
M.bind=function d(P,N){var O,p;
if(P.bind===F&&F){return F.apply(P,m.call(arguments,1))
}if(!M.isFunction(P)){throw new TypeError
}p=m.call(arguments,2);
return O=function(){if(!(this instanceof O)){return P.apply(N,p.concat(m.call(arguments)))
}G.prototype=P.prototype;
var R=new G;
var Q=P.apply(R,p.concat(m.call(arguments)));
if(Object(Q)===Q){return Q
}return R
}
};
M.bindAll=function(N){var p=m.call(arguments,1);
if(p.length==0){p=M.functions(N)
}I(p,function(O){N[O]=M.bind(N[O],N)
});
return N
};
M.memoize=function(O,N){var p={};
N||(N=M.identity);
return function(){var P=N.apply(this,arguments);
return M.has(p,P)?p[P]:(p[P]=O.apply(this,arguments))
}
};
M.delay=function(N,O){var p=m.call(arguments,2);
return setTimeout(function(){return N.apply(null,p)
},O)
};
M.defer=function(p){return M.delay.apply(M,[p,1].concat(m.call(arguments,1)))
};
M.throttle=function(O,P){var N,R,S,T,Q,U;
var p=M.debounce(function(){Q=T=false
},P);
return function(){N=this;
R=arguments;
var V=function(){S=null;
if(Q){O.apply(N,R)
}p()
};
if(!S){S=setTimeout(V,P)
}if(T){Q=true
}else{U=O.apply(N,R)
}p();
T=true;
return U
}
};
M.debounce=function(N,P,p){var O;
return function(){var S=this,R=arguments;
var Q=function(){O=null;
if(!p){N.apply(S,R)
}};
if(p&&!O){N.apply(S,R)
}clearTimeout(O);
O=setTimeout(Q,P)
}
};
M.once=function(O){var p=false,N;
return function(){if(p){return N
}p=true;
return N=O.apply(this,arguments)
}
};
M.wrap=function(p,N){return function(){var O=[p].concat(m.call(arguments,0));
return N.apply(this,O)
}
};
M.compose=function(){var p=arguments;
return function(){var N=arguments;
for(var O=p.length-1;
O>=0;
O--){N=[p[O].apply(this,N)]
}return N[0]
}
};
M.after=function(N,p){if(N<=0){return p()
}return function(){if(--N<1){return p.apply(this,arguments)
}}
};
M.keys=e||function(O){if(O!==Object(O)){throw new TypeError("Invalid object")
}var N=[];
for(var p in O){if(M.has(O,p)){N[N.length]=p
}}return N
};
M.values=function(p){return M.map(p,M.identity)
};
M.functions=M.methods=function(O){var N=[];
for(var p in O){if(M.isFunction(O[p])){N.push(p)
}}return N.sort()
};
M.extend=function(p){I(m.call(arguments,1),function(N){for(var O in N){p[O]=N[O]
}});
return p
};
M.pick=function(N){var p={};
I(M.flatten(m.call(arguments,1)),function(O){if(O in N){p[O]=N[O]
}});
return p
};
M.defaults=function(p){I(m.call(arguments,1),function(N){for(var O in N){if(p[O]==null){p[O]=N[O]
}}});
return p
};
M.clone=function(p){if(!M.isObject(p)){return p
}return M.isArray(p)?p.slice():M.extend({},p)
};
M.tap=function(N,p){p(N);
return N
};
function J(P,O,N){if(P===O){return P!==0||1/P==1/O
}if(P==null||O==null){return P===O
}if(P._chain){P=P._wrapped
}if(O._chain){O=O._wrapped
}if(P.isEqual&&M.isFunction(P.isEqual)){return P.isEqual(O)
}if(O.isEqual&&M.isFunction(O.isEqual)){return O.isEqual(P)
}var S=c.call(P);
if(S!=c.call(O)){return false
}switch(S){case"[object String]":return P==String(O);
case"[object Number]":return P!=+P?O!=+O:(P==0?1/P==1/O:P==+O);
case"[object Date]":case"[object Boolean]":return +P==+O;
case"[object RegExp]":return P.source==O.source&&P.global==O.global&&P.multiline==O.multiline&&P.ignoreCase==O.ignoreCase
}if(typeof P!="object"||typeof O!="object"){return false
}var T=N.length;
while(T--){if(N[T]==P){return true
}}N.push(P);
var R=0,p=true;
if(S=="[object Array]"){R=P.length;
p=R==O.length;
if(p){while(R--){if(!(p=R in P==R in O&&J(P[R],O[R],N))){break
}}}}else{if("constructor" in P!="constructor" in O||P.constructor!=O.constructor){return false
}for(var Q in P){if(M.has(P,Q)){R++;
if(!(p=M.has(O,Q)&&J(P[Q],O[Q],N))){break
}}}if(p){for(Q in O){if(M.has(O,Q)&&!(R--)){break
}}p=!R
}}N.pop();
return p
}M.isEqual=function(N,p){return J(N,p,[])
};
M.isEmpty=function(N){if(N==null){return true
}if(M.isArray(N)||M.isString(N)){return N.length===0
}for(var p in N){if(M.has(N,p)){return false
}}return true
};
M.isElement=function(p){return !!(p&&p.nodeType==1)
};
M.isArray=s||function(p){return c.call(p)=="[object Array]"
};
M.isObject=function(p){return p===Object(p)
};
M.isArguments=function(p){return c.call(p)=="[object Arguments]"
};
if(!M.isArguments(arguments)){M.isArguments=function(p){return !!(p&&M.has(p,"callee"))
}
}M.isFunction=function(p){return c.call(p)=="[object Function]"
};
M.isString=function(p){return c.call(p)=="[object String]"
};
M.isNumber=function(p){return c.call(p)=="[object Number]"
};
M.isFinite=function(p){return M.isNumber(p)&&isFinite(p)
};
M.isNaN=function(p){return p!==p
};
M.isBoolean=function(p){return p===true||p===false||c.call(p)=="[object Boolean]"
};
M.isDate=function(p){return c.call(p)=="[object Date]"
};
M.isRegExp=function(p){return c.call(p)=="[object RegExp]"
};
M.isNull=function(p){return p===null
};
M.isUndefined=function(p){return p===void 0
};
M.has=function(N,p){return h.call(N,p)
};
M.noConflict=function(){v._=j;
return this
};
M.identity=function(p){return p
};
M.times=function(P,O,N){for(var p=0;
p<P;
p++){O.call(N,p)
}};
M.escape=function(p){return(""+p).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")
};
M.result=function(p,O){if(p==null){return null
}var N=p[O];
return M.isFunction(N)?N.call(p):N
};
M.mixin=function(p){I(M.functions(p),function(N){w(N,M[N]=p[N])
})
};
var x=0;
M.uniqueId=function(p){var N=x++;
return p?p+N:N
};
M.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};
var u=/.^/;
var g={"\\":"\\","'":"'",r:"\r",n:"\n",t:"\t",u2028:"\u2028",u2029:"\u2029"};
for(var H in g){g[g[H]]=H
}var i=/\\|'|\r|\n|\t|\u2028|\u2029/g;
var B=/\\(\\|'|r|n|t|u2028|u2029)/g;
var K=function(p){return p.replace(B,function(N,O){return g[O]
})
};
M.template=function(R,Q,O){O=M.defaults(O||{},M.templateSettings);
var P="__p+='"+R.replace(i,function(S){return"\\"+g[S]
}).replace(O.escape||u,function(S,T){return"'+\n_.escape("+K(T)+")+\n'"
}).replace(O.interpolate||u,function(S,T){return"'+\n("+K(T)+")+\n'"
}).replace(O.evaluate||u,function(S,T){return"';\n"+K(T)+"\n;__p+='"
})+"';\n";
if(!O.variable){P="with(obj||{}){\n"+P+"}\n"
}P="var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n"+P+"return __p;\n";
var N=new Function(O.variable||"obj","_",P);
if(Q){return N(Q,M)
}var p=function(S){return N.call(this,S,M)
};
p.source="function("+(O.variable||"obj")+"){\n"+P+"}";
return p
};
M.chain=function(p){return M(p).chain()
};
var t=function(p){this._wrapped=p
};
M.prototype=t.prototype;
var r=function(N,p){return p?M(N).chain():N
};
var w=function(p,N){t.prototype[p]=function(){var O=m.call(arguments);
z.call(O,this._wrapped);
return r(N.apply(M,O),this._chain)
}
};
M.mixin(M);
I(["pop","push","reverse","shift","sort","splice","unshift"],function(p){var N=C[p];
t.prototype[p]=function(){var O=this._wrapped;
N.apply(O,arguments);
var P=O.length;
if((p=="shift"||p=="splice")&&P===0){delete O[0]
}return r(O,this._chain)
}
});
I(["concat","join","slice"],function(p){var N=C[p];
t.prototype[p]=function(){return r(N.apply(this._wrapped,arguments),this._chain)
}
});
t.prototype.chain=function(){this._chain=true;
return this
};
t.prototype.value=function(){return this._wrapped
}
}).call(this);
window.sharedNav=window.sharedNav||{};
window.sharedNav.opts=window.sharedNav.opts||{skipToAnchor:"page-content"};
var PDC=PDC||{};
window.sbWeb=window.sbWeb||{};
var sbWeb=window.sbWeb;
(function(e,d,a,g){var f=[],c=false;
PDC.Browser={os:"unknown",device:"unknown"};
if(/Android/i.test(navigator.userAgent)){f.push("os-android");
PDC.Browser.os="android"
}if(/iPhone/i.test(navigator.userAgent)){f.push("device-iphone");
c=true;
PDC.Browser.device="iphone"
}if(/iPod/i.test(navigator.userAgent)){f.push("device-ipod");
c=true;
PDC.Browser.device="ipod"
}if(/iPad/i.test(navigator.userAgent)){f.push("device-ipad");
c=true;
PDC.Browser.device="ipad"
}if(/PLAYSTATION 4/i.test(navigator.userAgent)){f.push("device-ps4");
PDC.Browser.device="ps4"
}if(/PLAYSTATION 3/i.test(navigator.userAgent)){f.push("device-ps3");
PDC.Browser.device="ps3"
}if(/MSIE 10.0/i.test(navigator.userAgent)){f.push("browser-ie10")
}if(c){f.push("os-ios");
PDC.Browser.os="ios"
}var b=f.join(" ");
e("html").addClass(b);
PDC.Browser.isSupportedBrowser=function(i){var h=true;
if(typeof PDC.Browser!="undefined"){e.each(i,function(n,j){var m=e(this),l=j.os,k=j.devices;
if(PDC.Browser.os==l){if(typeof k=="object"){e.each(k,function(o,p){if(PDC.Browser.device==PDC.Browser.device){h=false;
return false
}})
}else{if(typeof k=="string"){if(k=="all"){h=false
}}}return false
}})
}return h
};
PDC.Browser.getViewport=function(){if(a.body){return d.getComputedStyle(a.body,":after").content.replace(/"/g,"")
}else{return d.getComputedStyle(a.head,":after").content.replace(/"/g,"")
}}
})(jQuery,window,document);
(function(c,b,a,d){PDC.Locale=PDC.Locale||{};
PDC.Locale.Mappings=[{"es-ar":"AR"},{"es-cl":"CH"},{"es-co":"CO"},{"es-cr":"COS"},{"es-ec":"EC"},{"es-sv":"SAL"},{"es-gt":"GA"},{"es-hn":"HN"},{"es-mx":"MX"},{"es-ni":"NI"},{"es-pa":"PA"},{"es-pe":"PE"},{"es-ve":"VE"}];
PDC.Locale.matchLocale=function(g){if(g){var e=g.split("/")[3];
if(e){var f=/^\D{2}-\D{2}$/;
return e.match(f)
}}return null
};
PDC.Locale.setLocale=function(){var f=b.location.href;
var e=PDC.Locale.matchLocale(f);
if(e==null&&typeof globalLocale!="undefined"){e=[globalLocale.toLowerCase().replace("_","-")]
}PDC.addProperty("Locale","Locale",e)
};
PDC.Locale.getLocale=function(){var e=null;
if(PDC.Locale.hasOwnProperty("Locale")){e=PDC.Locale.Locale
}return e
};
PDC.Locale.setLocale()
})(jQuery,window,document);
(function(c,b,a,d){PDC.Region={};
PDC.Region.Regions={};
PDC.Region.Regions.SCEA=["en-us","en-ca","fr-ca","en-hk","ja-jp","cht-hk","chs-hk","en-id","ko-kr","en-my","en-ph","en-sg","cht-tw","en-th","th-th","en-vn"];
PDC.Region.Regions.BR=["pt-br"];
PDC.Region.Regions.LATAM=["es-ar","es-cl","es-co","es-cr","es-ec","es-sv","es-gt","es-hn","es-mx","es-ni","es-pa","es-pe","es-ve"];
PDC.Region.Regions.SCEE=["en-au","de-at","fr-be","nl-be","cs-cz","da-dk","fi-fi","fr-fr","de-de","el-gr","en-in","en-ie","it-it","fr-lu","de-lu","nl-nl","en-nz","no-no","pl-pl","pt-pt","ru-ru","en-za","en-es","sv-se","de-ch","fr-ch","it-ch","tr-tr","en-ae","en-gb"];
PDC.ExodusRegions={SCEJA:["en-hk","ja-jp","cht-hk","chs-hk","en-id","ko-kr","en-my","en-ph","en-sg","cht-tw","en-th","th-th","en-vn"]};
PDC.Region.matchRegion=function(){var e=PDC.Locale.getLocale();
if(e){if(PDC.hasOwnProperty("Region")&&PDC.Region.hasOwnProperty("Regions")){for(var f in PDC.Region.Regions){var g=PDC.Region.Regions[f];
for(var h in g){if(g.hasOwnProperty(h)&&g[h].match(e)){return f
}}}}}return null
};
PDC.Region.setRegion=function(){var e=PDC.Region.matchRegion();
PDC.addProperty("Region","Region",e)
};
PDC.Region.getRegion=function(){var e=null;
if(PDC.Region.hasOwnProperty("Region")){e=PDC.Region.Region
}return e
};
PDC.Region.getExodusRegion=function(){var e,f;
if(!b.PDC){return""
}e=PDC.Locale&&typeof PDC.Locale.getLocale=="function"?PDC.Locale.getLocale():null,f=PDC.Region&&typeof PDC.Region.getRegion=="function"?PDC.Region.getRegion():null;
if(e&&e.length&&e[0]){e=e[0];
f=PDC.ExodusRegions.SCEJA.indexOf(e)>-1?"SCEJA":f;
f=PDC.Region.Regions.BR.indexOf(e)>-1?"SCEA":f;
f=PDC.Region.Regions.LATAM.indexOf(e)>-1?"SCEA":f;
f=PDC.Region.Regions.SCEE.indexOf(e)>-1?"SCEE":f
}return f
};
PDC.Region.setRegion()
})(jQuery,window,document);
(function(c,b,a,d){PDC.Profile=PDC.Profile||{};
PDC.Profile.setLoggedIn=function(){var e=false;
var m=PDC.Region.getRegion();
if(m!=null){if(m.match("SCEA")&&a.cookie.match("userinfo=")){e=true;
if(PDC.Header!=null&&PDC.Header.PostLoginAjaxUrl!=null&&PDC.Header.PostLoginAjaxUrl){var n=getCookie("userinfo");
c.ajax({type:"POST",url:PDC.Header.PostLoginAjaxUrl,data:"token="+n,success:function(){},error:function(){}})
}}else{if(m.match("BR")&&a.cookie.match("userinfo=")){e=true
}else{if(m.match("LATAM")&&a.cookie.match("userinfo=")){e=true;
var j=PDC.Locale.Mappings;
var o=PDC.Locale.getLocale();
var k=null;
for(var h=0,f=j.length;
h<f;
h++){var g=j[h];
if(g["es-ar"]){k=g[o];
break
}}if(k){setCookie("LOCALE",k,".playstation.com");
setCookie("test",k)
}}}}}PDC.addProperty("Profile","loggedIn",e);
b.sbWeb.authSystemName="centralAuth";
sbWeb.showBrowserCompatibilityOnSignIn=true;
sbWeb.isUserSignedIn=function(i){if(getCookie("userinfo")){i(true)
}else{i(false)
}};
sbWeb.onSignIn=function(i){urlTarget=c("#psnSignInUrl").data("href");
b.location=urlTarget
};
sbWeb.onSignOut=function(i){urlTarget=c("#psnSignOutUrl").data("href");
b.location=urlTarget
};
sbWeb.getLocale=function(t,r){var p=PDC.Locale.getLocale();
if(p){var q=p[0].split("-"),u=q[0]+"-"+q[1].toUpperCase();
for(var s=0;
s<t.length;
s++){var l=t[s];
if(l===u){r(l);
return
}}}r()
};
sbWeb.shouldInitialize=function(i){i(true)
};
sbWeb.getAccountInfo=function(i){var l={};
if(PDC.User&&PDC.User.handle){l={age:PDC.User.age,accountId:PDC.User.accountId,avatarUrl:PDC.User.avatarUrl,legalCountry:PDC.User.region,onlineId:PDC.User.handle,chatControl:1,isSubAccount:false}
}i(l)
};
sbWeb.onInitialize=function(){return{initialDisplay:sbWeb.onResize(),textTransform:"capitalize",rightToLeft:false}
}
};
PDC.Profile.setLoggedIn();
PDC.Profile.isLoggedIn=function(){var e=false;
if(PDC.Profile.hasOwnProperty("loggedIn")){e=PDC.Profile.loggedIn
}return e
};
PDC.Profile.setContentToId=function(f){if(PDC.Profile){var e=PDC.Profile,g=e.getOnlineID();
if(g!=null&&g){c(f).text(g)
}}};
PDC.Profile.setContentToSmallAvatar=function(g){if(PDC.Profile){var e=PDC.Profile,f=e.getOnlineID();
if(f!=null&&f){c(g).attr("src",e.getSmallAvatar())
}}};
PDC.Profile.setProfile=function(){if(PDC.Profile.isLoggedIn()){var e=PDC.Region.getRegion();
if(e!=null){if(e.match("SCEA")||e.match("BR")||e.match("LATAM")){if(PDC.User&&getCookie("userinfo")){PDC.addProperty("Profile","avatar_url_large",PDC.User.avatar_url_large);
PDC.addProperty("Profile","avatar_url_medium",PDC.User.avatar_url_medium);
PDC.addProperty("Profile","psplus",(PDC.User.isPlusUser==1));
PDC.addProperty("Profile","avatar_url_small",PDC.User.avatar_url_small);
PDC.addProperty("Profile","online_id",PDC.User.handle)
}}var g="uh";
var f=getCookie(g);
if(f!=null){PDC.addProperty("Profile","encrypted_id",f)
}}}};
PDC.Profile.setProfile();
PDC.Profile.getProfileProp=function(g){if(!g){return null
}var e=null;
var f=PDC.Profile;
if(f.hasOwnProperty(g)){e=f[g]
}return e
};
PDC.Profile.getOnlineID=function(){var e=PDC.Profile.getProfileProp("online_id");
if(typeof e!=="undefined"&&e!==null){e=e.replace(/"/,"")
}return e
};
PDC.Profile.getSmallAvatar=function(){return PDC.Profile.getProfileProp("avatar_url_small")
};
PDC.Profile.getMediumAvatar=function(){return PDC.Profile.getProfileProp("avatar_url_medium")
};
PDC.Profile.getPsPlus=function(){return PDC.Profile.getProfileProp("psplus")
};
PDC.Profile.getAge=function(){return PDC.Profile.getProfileProp("age")
};
PDC.Profile.getEncryptedID=function(){return PDC.Profile.getProfileProp("encrypted_id")
};
PDC.Profile.isMature=function(f){var e=null;
var i=PDC.Profile.isLoggedIn();
if(i){var h=PDC.Region.getRegion();
if(h!=null){if(a.cookie.match("ag_US=")){var g=getCookie("ag_US");
if(g=="m"){e=true
}else{e=false
}}}}return e
}
})(jQuery,window,document);
(function(c,b,a,d){PDC.Navigation=PDC.Navigation||{};
PDC.Navigation.resizeToTablet=function(g){var i=false,h=940,e=0;
function f(){var k=c(b).width(),j=g.find(".primary-nav-container").outerWidth();
if(i&&(k>e)){g.removeClass("tablet-view");
i=false
}if((k>h)&&(j>k)){e=j;
i=true;
g.addClass("tablet-view")
}}b.addEventListener("resize",f);
f()
}
})(jQuery,window,document);
(function(c,b,a,d){PDC.MyPlaystationProfile=PDC.MyPlaystationProfile||{};
PDC.MyPlaystationProfile.checkingUserSignIn=false;
PDC.MyPlaystationProfile.signedUserData={};
PDC.MyPlaystationProfile.callbacks=[];
PDC.MyPlaystationProfile.getSignedUserData=function(g){PDC.MyPlaystationProfile.callbacks.push(g);
var f=function(h){PDC.MyPlaystationProfile.signedUserData=h||{};
c(PDC.MyPlaystationProfile.callbacks).each(function(j,k){k(PDC.MyPlaystationProfile.signedUserData)
});
PDC.MyPlaystationProfile.callbacks=[];
PDC.MyPlaystationProfile.checkingUserSignIn=false
};
if(a.cookie.match("userinfo")){if(PDC.MyPlaystationProfile.signedUserData.handle){f(PDC.MyPlaystationProfile.signedUserData);
return 0
}if(PDC.MyPlaystationProfile.checkingUserSignIn){return 0
}if(PDC.Header.MyPlaystationCookieDecryptionUrl===""){f(null);
return 0
}PDC.MyPlaystationProfile.checkingUserSignIn=true;
var e=PDC.User;
if(e.handle){if(!e.avatarUrl){e.avatarUrl="/etc/designs/pdc/clientlibs_base/images/CM156_CompeteConnectHeroBanner/defaultavatar.png"
}f(e)
}else{f(null)
}}else{f(null)
}};
PDC.MyPlaystationProfile.redirectToLogin=function(){var e=PDC.Locale.getLocale()[0];
a.location=PDC.Header.MyPlaystationLoginUrl+"?locale="+globalLocale+"&postSignInURL="+a.location.href+"&cancelUrl=https://www.playstation.com/"+e+"/"
};
PDC.MyPlaystationProfile.isFriendsAuthExist=function(e){if(a.cookie.match("ps_auth")){return true
}else{if(!e){PDC.MyPlaystationProfile.redirectToLogin()
}return false
}};
PDC.MyPlaystationProfile.getPublicSearchId=function(){var f=this;
if(typeof f.fetchedPublicSearchId==="undefined"){f.fetchedPublicSearchId=true;
try{if(typeof b.sessionStorage.publicTrophiesSearchId!=="undefined"&&b.sessionStorage.publicTrophiesSearchId!==null&&b.sessionStorage.publicTrophiesSearchId!==""){c(a).ready(function(){c(a).trigger("usersearch.search",b.sessionStorage.publicTrophiesSearchId);
b.sessionStorage.publicTrophiesSearchId=""
})
}}catch(g){}}}
})(jQuery,window,document);
(function(c,b,a,d){getCookie=function(e){if(a.cookie.indexOf(e)!=-1){var f=a.cookie.split(e+"=");
return f.pop().split(";").shift()
}return null
}
})(jQuery,window,document);
(function(c,b,a,d){c(a).ready(function(){var l=c(this),j=c(".background-section"),k=false,i=false,f=c(b).width(),g=b.location.hash;
function h(m){if(m.length>0){var p=m.substring(1).replace(/[!"#$%&'()*+,./:;<=>?@[\]^`{|}~]/g,"\\$&");
if(c("a[name="+p+"]").length>0){var o=c("a[name="+p+"]").offset().top-c(b).scrollTop(),n=c("nav").height();
if(o<n){c("html, body").animate({scrollTop:c(b).scrollTop()-(n+20)})
}}}}h(g);
function e(){j.each(function(){var o=c(this),p=o.attr("data-alternative-background"),m=o.css("background-image"),q=o.attr("data-alternative-height"),n=o.css("height");
if(p!==d){o.attr("data-alternative-background",m).css("backgroundImage",p)
}if(q==d){o.attr("data-alternative-height",n).css("height","")
}else{o.attr("data-alternative-height",n).css("height",q)
}})
}if(f>=1600&&!k){j.addClass("upper-limit");
k=true
}if(f<=700&&!i){i=true;
e()
}c(b).bind("resize",function(){var m=c(b).width();
if(m>=1600&&!k){j.addClass("upper-limit");
k=true
}if(m<1600&&k){j.removeClass("upper-limit");
k=false
}if(m<=700&&!i){i=true;
e()
}if(m>700&&i){i=false;
e()
}});
if(c(b).width()<736){c(".parsys.content_par .parbase.section").each(function(){if((c("#page-content .herobanner .thinherobanner").length!=0&&c(".section_prodinfo").length==0)&&(this==c(".parsys.content_par>.parbase.section:first-child")[0])){c(this).css("margin-top","0")
}else{if(c(this).find(".headingWrapper hgroup").length>0){c(this).css("margin-top","110px")
}}})
}})
})(jQuery,window,document);
(function(c,b,a,d){c.fn.isVisible=function(){var f=c(b).height(),e=this[0].getBoundingClientRect();
return((e.top>=0&&e.top<f)||(e.bottom>=0&&e.bottom<=f))
}
})(jQuery,window,document);
(function(c,b,a,d){c.fn.isPartiallyVisible=function(g){var f=this[0],h=(c(b).height()*(g/100)),e=f.getBoundingClientRect();
return([(!(e.bottom<0)&&!(e.top>h)),(e.bottom<0),(e.top>h)])
}
})(jQuery,window,document);
(function(d,c,a,e){d.fn.reverse=[].reverse;
c.requestAnimFrame=(function(){return c.requestAnimationFrame||c.webkitRequestAnimationFrame||c.mozRequestAnimationFrame||c.oRequestAnimationFrame||c.msRequestAnimationFrame||function(f){c.setTimeout(f,1000/60)
}
})();
c.performance=c.performance||{};
performance.now=(function(){return performance.now||performance.mozNow||performance.msNow||performance.oNow||performance.webkitNow||function(){return new Date().getTime()
}
})();
function b(){return(a.documentElement.scrollTop||a.body.scrollTop)
}})(jQuery,window,document);
(function(a){a.fn.placeholder=function(){if(typeof document.createElement("input").placeholder=="undefined"){a("[placeholder]").focus(function(){var b=a(this);
if(b.val()==b.attr("placeholder")){b.val("");
b.removeClass("placeholder")
}}).blur(function(){var b=a(this);
if(b.val()==""||b.val()==b.attr("placeholder")){b.addClass("placeholder");
b.val(b.attr("placeholder"))
}}).blur().parents("form").submit(function(){a(this).find("[placeholder]").each(function(){var b=a(this);
if(b.val()==b.attr("placeholder")){b.val("")
}})
})
}};
a.fn.getURLVar=function(b){var d=window.location.search.substring(1),e=d.split("&");
for(var c=0;
c<e.length;
c++){var f=e[c].split("=");
if(f[0]==b){return decodeURIComponent(f[1])
}}return(false)
};
a.fn.setCursorToTextEnd=function(){var b=this.val();
this.val("");
this.val(b)
}
})(jQuery);
PDC.newWindow=function(f,d,b){var a=(typeof d==="undefined"?800:d),c=(typeof b==="undefined"?480:b),e=(screen.width/2)-(a/2),g=(screen.height/2)-(c/2);
window.open(f,"pdcPopup","scrollbars=yes, width="+a+", height="+c+", left="+e+", top="+g);
return false
};
var el=document.querySelector("html.device-ipad");
var orientationTimer;
if(el!==null){window.addEventListener("orientationchange",function(){if(orientationTimer){window.clearTimeout(orientationTimer)
}orientationTimer=window.setTimeout(function(){var a=Math.ceil(Math.random()*new Date().getTime());
$("body").append('<div id="'+a+'" style="background: black;">Safari Refresh</div>');
setTimeout(function(){$("#"+a).remove()
},500)
},500)
},false)
}function setCookie(a,e,d){var c=30;
var f=new Date();
f.setTime(f.getTime()+c*24*60*60*1000);
var b=a+"="+escape(e)+";expires="+f.toGMTString()+";path=/";
if(d){b+=";domain="+d
}document.cookie=b
}function getCookie(b){var a=document.cookie.match(new RegExp("(^| )"+b+"=([^;]*)(;|$)"));
if(a!=null){return unescape(a[2])
}return null
}$(document).ready(function(){if(document.location.href.match(/pdclog/)){pdclog=function(){console.log.apply(console,arguments)
};
for(var a=0;
a<pdclogqueue.length;
a++){pdclog.apply(pdclog,pdclogqueue[a])
}}});
var getDeviceUrlForSniffer=function(b){var d={};
b.replace(/([^#\/&=?]+)=([^?&=]+)/gi,function(g,f,i,h){d[f]=decodeURIComponent(i)
});
var a=d.cid;
if(a){var e=(a.match(/STORE-/))?"psns:browse?category=":"psns:browse?product=";
var c=e+a;
b=c
}return b
};
function updateUrlForBtnSniffer(a){var b=a.attr("data-href");
if(b.indexOf("store.sonyentertainmentnetwork")>-1||b.indexOf("store.playstation")>-1){a.attr("data-href",getDeviceUrl(b));
a.attr("href",getDeviceUrl(b));
a.attr("data-track","{ &quot;eventInfo&quot;: { &quot;eventAction&quot;: &quot;click&quot;, &quot;eventName&quot;: &quot;leadproductinfo click&quot; }, &quot;attributes&quot;: { &quot;moduleName&quot;: &quot;leadproductinfo&quot;, &quot;assetName&quot;: &quot;empty&quot;, &quot;label&quot;: &quot;empty&quot;, &quot;position&quot;: &quot;1&quot;, &quot;elementType&quot;: &quot;button&quot;, &quot;userActionFlag&quot;: true } }");
a.attr("target","_self")
}}(function(c,b,a,d){b.onpageshow=function(e){if(navigator.userAgent.match(/Version\/9.[0-9.]+ (Mobile\/[A-Za-z0-9]+ )?Safari/)){if(e.persisted){b.location.reload()
}}}
})(jQuery,window,document);
(function(){PDC.Utilities={CSS:{stripStartCharacter:function g(i){if(PDC.Utilities.String.isValid(i)){return i.replace(/^(#|\.)/,"")
}return i
}},Element:{isValid:function e(i){return(i instanceof (Element))
},convertJQueryElement:function c(i){function j(){return(typeof jQuery!=="undefined")
}if(j()&&i instanceof (jQuery)){return i[0]
}return i
}},String:{isValid:function a(i){return(typeof(i)==="string")
},slugify:function(i,j){if(PDC.Utilities.String.isValid(i)){i=(String.prototype.trim)?i.trim():i;
return i.toLowerCase().replace(/\s+/g,j||"-")
}return""
},truncate:function f(i,l){var j=parseInt(l,10)||150,k=(PDC.Utilities.String.isValid(i))?i:"";
k=k.trim().replace(/(\n|\t)/g," ").replace(/\s+/g," ");
if(k.length>j){return k.substr(0,j)+"..."
}return k
}},URI:{getQueryString:function h(i){var j={};
if(PDC.Utilities.String.isValid(i)){i=i.replace(/^\?/,"");
i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(l,k,m){if(k){j[decodeURI(k)]=decodeURI(m)
}})
}return j
},setQueryString:function d(k){var i=[],j;
if(typeof(k)==="object"){for(j in k){if(k.hasOwnProperty(j)){i.push(encodeURI(j)+"="+encodeURI(k[j]))
}}}return(i.length)?"?"+i.join("&"):""
},parse:(function b(k){var i={key:["href","protocol","host","hostname","port","relative","path","pathname","file","search","hash"],parser:/^(?:([^:\/?#]+):)?(?:\/\/(([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/};
function j(m){var l;
if(!m.search&&(m.hash&&(/\?/).test(m.hash))){l=(/(?:\?([^#]*)?)/).exec(m.hash);
if(l){m.search=l[1];
m.hash=m.hash.replace("?"+l[1],"")
}}return m
}return function(o){var n,m={},l=i.key.length;
if(PDC.Utilities.String.isValid(o)){n=i.parser.exec(o);
while(l--){m[i.key[l]]=n[l]||""
}m=j(m);
m.queryObject=PDC.Utilities.URI.getQueryString(m[i.key[9]]);
m.origin=m.protocol+"://"+m.host
}return m
}
})()}}
})();
PDC.Analytics=PDC.Analytics||{};
PDC.Analytics.PageInstanceID=function createPageInstanceID(d,e){var c=e||{},k=PDC.Config.Tracking;
function g(){var l=null;
l=h()+":"+j()+":"+b()+":"+i();
return c.setKeyValue(d,"pageInstanceID",l)
}function a(){return c.getKeyValue(d,"pageInstanceID")
}function h(){return"web-pdc"
}function j(){return(k.aemVersion||null)
}function b(){return"$$DTM_VERSION$$"
}function i(){return"empty"
}c.setPageInstanceIDData=function f(){return(d=Object.assign({pageInstanceID:g()}))
};
return{get:{pageInstanceID:a},set:{pageInstanceID:g}}
};
PDC.Analytics=PDC.Analytics||{};
PDC.Analytics.PageInfo=function createPageInfo(a,o){var f=window,D=document,B=PDC.Browser,e=PDC.Config.Tracking,b=o||{};
function y(I){var J=(typeof(I)==="string")?I:"",F=(J.includes("/content/"))?true:false,H=J.split("/"),G=H.filter(function(K){if(K){return K
}});
if(F){G.splice(0,3)
}G[0]="web:pdc";
if(G.length===1){G[1]="home"
}return G.join(":").replace(/.html/i,"")
}function r(){var F=D.querySelector('meta[name="title"][content^="404"]');
return(F)?true:false
}function u(){var F="",H="pdc-local",G=window.location.hostname;
if(G.match(/dev/i)){F="dev"
}else{if(G.match(/qa/i)){F="qa"
}else{if(G.match(/stage/i)){F="stage"
}else{if(G.match(/^www\.playstation/i)){F="prod"
}}}}F=(F)?H+F:F;
return F
}function i(H){var F=y(H),G="";
if(r()){G="error"
}else{if(F.match(/^web:pdc:home/i)){G="home"
}else{if(F.match(/^web:pdc:get-help/i)||F.match(/^web:pdc:(legal|corporate|footer)/i)){G="service"
}else{if(F.match(/^web:pdc:search/i)){G="search results"
}else{if(F.match(/^web:pdc:sign-in-and-connect:email-sign-up/i)){G="lead"
}else{G="category"
}}}}}return G
}function E(){var G=D.querySelector('input[name="q"]'),F=null;
if(G&&G.value){F=G.value
}return F
}function d(G){if(r()){G="error"
}var F=(G&&typeof(G)==="string")?G:i(f.location.pathname);
return b.setKeyValue(a.page.pageInfo.category,"primaryCategory",F)
}function j(){return b.getKeyValue(a.page.pageInfo.category,"primaryCategory")
}function C(){return b.setKeyValue(a.page.pageInfo,"destinationURL",f.location.href)
}function A(){return b.getKeyValue(a.page.pageInfo,"destinationURL")
}function v(){return b.setKeyValue(a.page.pageInfo,"version",u())
}function l(){return b.getKeyValue(a.page.pageInfo,"version")
}function w(I){var H="data-query-total",J=D.querySelector("["+H+"]"),G=E(),F=null;
if(typeof(I)==="number"){return b.setKeyValue(a.page.pageInfo,"onsiteSearchResults",I)
}else{if(G&&G!==null){F=(J)?parseInt(J.getAttribute(H),10):0
}}return b.setKeyValue(a.page.pageInfo,"onsiteSearchResults",F)
}function q(){return b.getKeyValue(a.page.pageInfo,"onsiteSearchResults")
}function p(G){var F=(G&&typeof(G)==="string")?G:E();
return b.setKeyValue(a.page.pageInfo,"onsiteSearchTerm",F)
}function x(){return b.getKeyValue(a.page.pageInfo,"onsiteSearchTerm")
}function c(F){if(F&&typeof(F)==="string"){return b.setKeyValue(a.page.pageInfo,"onsiteSearchType",F)
}return b.setKeyValue(a.page.pageInfo,"onsiteSearchType",(E())?"manual":null)
}function n(){return b.getKeyValue(a.page.pageInfo,"onsiteSearchType")
}function s(G,H){var F=null,I=parseInt(G,10);
if(!isNaN(I)){F=H||"";
F+=(":"+G)
}return b.setKeyValue(a.page.pageInfo,"onsiteSearchResultSelected",F)
}function g(){return b.getKeyValue(a.page.pageInfo,"onsiteSearchResultSelected")
}function m(F){var G=(F&&typeof(F)==="string")?F:y(f.location.pathname);
return b.setKeyValue(a.page.pageInfo,"pageName",G)
}function h(){return b.getKeyValue(a.page.pageInfo,"pageName")
}function t(){var H=B.device,G=B.getViewport(),F="";
if(!(/^ps[0-9]+$/i).test(H)){F=(G==="desktop"||G==="tv")?"web":G
}else{F=H
}return b.setKeyValue(a.page.pageInfo,"sysEnv",F)
}function z(){return b.getKeyValue(a.page.pageInfo,"sysEnv")
}b.setPageInfo=function k(G){var F=G||{};
a.page.pageInfo=a.page.pageInfo||{};
a.page.pageInfo=Object.assign({pageName:m(),category:{},sysEnv:t(),destinationURL:C(),version:v(),onsiteSearchTerm:p(),onsiteSearchResults:w(),onsiteSearchType:c(),onsiteSearchResultSelected:s()},F);
d(e.primaryCategory||null);
if(f.location.href.indexOf("showDTMObject=true")>-1){console.log("Page Load Object:"+JSON.stringify(a.page.pageInfo))
}return a.page.pageInfo
};
return{set:{pageName:m,primaryCategory:d,sysEnv:t,destinationURL:C,version:v,onsiteSearchTerm:p,onsiteSearchResults:w,onsiteSearchType:c,onsiteSearchResultSelected:s},get:{pageName:h,primaryCategory:j,sysEnv:z,destinationURL:A,version:l,onsiteSearchTerm:x,onsiteSearchResults:q,onsiteSearchType:n,onsiteSearchResultSelected:g}}
};
$(function(){$(".link-btnnew, .subnav__btn-container").each(function(a,b){$(b).attr("data-cusposition",a+1)
})
});
PDC.Analytics=PDC.Analytics||{};
PDC.Analytics.User=function createUserInfo(c,e){var b=e||{},n=document,m=PDC.Locale,d=PDC.Profile,l={};
function i(){var q=null;
if(d.isLoggedIn()){q=(d.getPsPlus().toString()==="true")?"plususer":"nonplususer"
}return b.setKeyValue(l,"plusUser",q)
}function j(){return b.getKeyValue(l,"plusUser")
}function k(){var q=n.documentElement,s=m.getLocale(),r="-";
if(Array.isArray(s)&&s.length>0){s=s[0]
}else{s=(q.getAttribute("xml:lang"))?q.getAttribute("xml:lang"):q.getAttribute("lang")
}s=(s)?s.trim().toLowerCase().split(r).reverse().join(r):null;
return b.setKeyValue(c.user.profile.profileInfo,"language",s)
}function o(){return b.getKeyValue(c.user.profile.profileInfo,"language")
}function p(){var q="guest";
if(d.isLoggedIn()){q="signed_in"
}return b.setKeyValue(l,"visitorType",q)
}function g(){return b.getKeyValue(l,"visitorType")
}function a(){var q=null;
if(d.isLoggedIn()){q=d.getEncryptedID()
}return b.setKeyValue(c.user.profile.profileInfo,"profileID",q)
}function f(){return b.getKeyValue(c.user.profile.profileInfo,"profileID")
}b.setUserData=function h(q,r){q=q||{};
r=r||{};
c.user.profile=c.user.profile||{};
l=l||{};
c.user.profile.profileInfo=c.user.profile.profileInfo||{};
l=Object.assign({plusUser:i(),visitorType:p()},q);
c.user.profile.profileInfo=Object.assign({profileID:a(),language:k()},r);
c.user.profile.profileInfo.attributes=l;
if(location.href.indexOf("showDTMObject=true")>-1){console.log("User Object:"+JSON.stringify(c.user.profile))
}return c.user.profile
};
return{get:{profileID:f,language:o,plusUser:j,visitorType:g},set:{profileID:a,language:k,plusUser:i,visitorType:p}}
};
PDC.Analytics=PDC.Analytics||{};
PDC.Analytics.Event=function createEventInfo(J,O){var w=O||{},ab=PDC.Utilities;
var k,B,S,b,I,u=".dtm-no-track",M=".dtm-track",r=["button",'input[type="button"]','input[type="cancel"]','input[type="reset"]','input[type="submit"]',"a",M];
k={track:"data-track",trackwrapper:"data-track-wrapper",modulename:"data-track-modulename",noclickdelay:"data-track-noclickdelay",position:"data-position"};
B=["button",'input[type="button"]','input[type="cancel"]','input[type="reset"]','input[type="submit"]',"a.dtm-type-button","a.link-btn","a.in-line-tab-item"];
b=[".cq-dd-video",".lb_youtube",".lb_s7video"];
r=X(r);
S=B.join(",");
I=b.join(",");
function X(ac){return ac.map(function(ad){return ad+":not("+u+")"
})
}function o(ah,ad,ae){var aj=ad||["a","button","input"],ai=ae||{method:"closest"},ag,ac=aj.length,af;
if(ab.Element.isValid(ah)){ag=ah.tagName.toLowerCase();
for(af=0;
af<ac;
af+=1){if(ag===aj[af]){return ah
}}return(ah[ai.method](aj.join(","))||ah)
}return null
}function E(ac,ae){var ad=o(ae);
return((ac===ad)?ac:ad)
}function F(ad){var ac=["div["+k.modulename+"]","div.moduleComponent","div.dtmTrackModule","div[id]","nav"];
return ad.closest(ac.join(","))
}function U(ac,ae){var ad=F(ac);
if(ad){if(ad.hasAttribute(k.modulename)){return ad.getAttribute(k.modulename)
}if(ad.className){return ad.className.trim().split(" ")[0]
}if(ad.hasAttribute("id")){return ad.getAttribute("id").match(/^[a-zA-Z0-9\-]+/i)[0]
}}return ae||"unknown"
}function C(ac){var ad=ac.getAttribute("target")||"_self";
return ad.toLowerCase().trim().replace("_","")
}function f(ad){var ac=(ab.String.isValid(ad))?ad:C(ad);
return(ac==="blank")
}function q(ac){return(ac.matches(S))
}function t(ac){return(ac.matches(I))
}function l(ac){if(ac.getAttribute("type")==="submit"){return ac.closest("form")
}return null
}function c(ac){return ac.classList.contains("cboxElement")
}function H(ac){return((ac.getAttribute(k.noclickdelay))?true:false)
}function aa(ac){return((ac.getAttribute("data-api")||ac.getAttribute("data-apiurl"))?true:false)
}function Q(ac,af,ae){var ad=(ae)?aa(ae):false;
if((ac&&!(/^(#|(javascript|psns)\:)/i).test(ac))&&!f(af)&&!ad){return true
}return false
}function D(ad){var ac=ad.getAttribute(k.trackwrapper);
if(ac&&ac==="true"){return(ad.closest("["+k.track+"]")||ad)
}return ad
}function V(ad,ac){var ae=ab.Element.convertJQueryElement(ad);
if(ab.Element.isValid(ae)){return ae.getAttribute(ac)
}}function Z(ad,ac){var af=ab.Element.convertJQueryElement(ad),ag=(ac&&typeof(ac)==="object")?ac:{},ae=JSON.stringify(ag);
if(ab.Element.isValid(af)){af.setAttribute(k.track,JSON.stringify(ag))
}else{return k.track+'="'+ae.replace(/\"/g,"&quot;")+'"'
}}function n(ac){var ad=ab.Element.convertJQueryElement(ac);
if(ab.Element.isValid(ad)){ad=D(ad);
return w.jsonParseUtility(ad.getAttribute(k.track))
}}function i(ac,ae){var ad=ab.Element.convertJQueryElement(ac);
if(ab.Element.isValid(ad)&&ab.String.isValid(ae)){return ad.setAttribute(k.modulename,ae)
}}function e(ac){return V(ac,k.modulename)
}function R(ac){var ad=ab.Element.convertJQueryElement(ac);
if(ab.Element.isValid(ad)){return ad.setAttribute(k.noclickdelay,"true")
}}function d(ac){return V(ac,k.noclickdelay)
}function m(ac){var ad=ab.Element.convertJQueryElement(ac);
if(ab.Element.isValid(ad)){return ad.setAttribute(k.trackwrapper,"true")
}}function y(ac){return V(ac,k.trackwrapper)
}function L(ac){var ad=["iframe","img","video"],ae=ac.querySelector(ad.join(",")),af;
if(ae){af=ab.URI.parse(ae.getAttribute("src"));
return(af.file||af.pathname)
}return j(ae)
}function T(ae,ad){var ac=(ae.getAttribute("href")||ae.getAttribute("data-href"));
if(ac==null){if(ad.linkUrl!=null){ac=ad.linkUrl
}else{if(ad.linkURL!=null){ac=ad.linkURL
}else{ac="empty"
}}}if(ac!=null&&ac.indexOf("//")>-1){ac=ac.split("//")[1]
}return ac
}function P(ac,ae){var af;
if(!t(ac)){af=(ac.innerText||ac.getAttribute("value")||"").trim();
af=x(af);
var ad=(af)?ab.String.truncate(af):"empty";
if(ad=="empty"&&typeof ae!="undefined"&&ae!=""&&ae!="empty"){ad=ae
}return ad
}return"empty"
}function x(ac){if(ac!=null&&ac!=""){var ad=ac.trim().replace(/[^a-zA-Z0-9]/g,"-").toLowerCase();
return ad
}else{return ac
}}function v(ad){try{if(typeof ad.closest("section")!="undefined"&&ad.closest("section")!=null){var ac=ad.closest("section").getAttribute("data-persname");
return ac
}}catch(ae){return""
}}function G(ad){var ac=ad.getAttribute(k.position),ae;
if(!ac){ae=ad.closest("["+k.position+"]");
ac=(ae)?ae.getAttribute(k.position):null
}return ac
}function Y(ad,ae){var ac;
ad=ad||{};
if(!ad.hasOwnProperty("position")){ac=ad.position
}return ad.position
}function z(ac){var ad="link";
if(q(ac)){ad="button"
}if(t(ac)){ad="video"
}return ad
}function W(ad,ae,af){var ac=af||{};
ae.eventInfo=Object.assign({eventName:ac.eventName||U(ad,"unknown eventName"),eventAction:ac.eventAction||z(ad)},ac);
return ae.eventInfo
}function A(ae,ag,ac){var ad=ac||{},ai;
ai=(function(){if(typeof(ad.assetName)!=="undefined"){return j(ad.assetName)
}return L(ae)
})();
var ah="1";
try{if(ae.getAttribute("data-cusposition")!=null){ah=ae.getAttribute("data-cusposition");
ad.position=ah
}}catch(af){ah="1";
console.log("Error in reading custom data position")
}ag.attributes=Object.assign({assetName:ai||"empty",label:x(ad.label)||P(ae,ai),moduleName:ad.moduleName||U(ae,"unknown moduleName"),elementType:ad.elementType,linkURL:l(ae)?form.getAttribute("action"):T(ae,ad),userActionFlag:ad.userActionFlag,persName:v(ae),position:ad.position||ad.impressionCount||ah});
return ag.attributes
}function j(ad){if(ad==null){return"empty"
}if(ad.indexOf("/")>-1&&ad.indexOf("image/SCEA")>-1){var ae=ad.lastIndexOf("/");
var ac=ad.substring(ae+1);
if(ac.indexOf("?")>-1){ac=ac.split("?")[0]
}if(ac.indexOf(".")>-1){ac=ac.split(".")[0].trim()
}if(ac.startsWith("-")){ac=ac.slice(1).trim()
}return ac
}else{if(ad.indexOf("/")>-1&&ad.indexOf("/images")>-1){var ae=ad.lastIndexOf("/");
var ac=ad.substring(ae+1);
if(ac.indexOf(".")>-1){ac=ac.split(".")[0]
}if(ac.indexOf(".")>-1){ac=ac.split(".")[0].trim()
}if(ac.startsWith("-")){ac=ac.slice(1).trim()
}return ac
}else{return ad
}}}function g(ac){var ad=n(ac);
ad.eventInfo=ad.eventInfo||{};
ad.attributes=ad.attributes||{};
return(h(ac,ad.eventInfo,ad.attributes))
}function s(ac){var ad=PDC.DigitalDataAPI.get.onsiteSearchResults();
if(ad){PDC.DigitalDataAPI.set.onsiteSearchResultSelected(ac.position,ac.label)
}}function h(ad,ah,ag){var af={},ae=(function ac(ai){var aj=ab.Element.convertJQueryElement(ai);
if(ab.Element.isValid(aj)){return aj
}return document.createElement("span")
})(ad);
W(ae,af,ah);
A(ae,af,ag);
p(ag);
if(!J.event){J.event=[]
}J.event.push(af);
if(window.location.href.indexOf("showDTMObject=true")>-1){console.log("Event Object"+JSON.stringify(af))
}w.frozenLinkMessaging("Event");
return af
}function K(ad,af){var ae,ah,ac,ag;
if(window.freezeLinksForTesting){af.preventDefault();
return false
}if(ab.Element.isValid(ad)&&!(H(ad))&&!(c(ad))){ae=l(ad);
ag=C(ad);
ac=(ae)?ae.getAttribute("action"):ad.getAttribute("href");
if(Q(ac,ag,ae)){af.preventDefault();
ah=setTimeout(function(){clearTimeout(ah);
if(ae){ae.submit()
}else{window[ag].location=ac
}},500);
return ac
}}}function N(ad){var ac=this,ae;
ae=n(ac);
PDC.Commerce.updateStoreOrVueLinkHref(ad,ac);
h(E(ac,ad.target),ae.eventInfo,ae.attributes);
s(ae.attributes);
K(ac,ad)
}function a(ac){if(J.event){return w.getItemFromArray(J.event,ac)
}}function p(ag){try{var al=ag||{};
if(typeof al!="undefined"&&al!=null&&al!=""){if(typeof al.elementType!="undefined"&&al.elementType!=null&&al.elementType!=""&&al.elementType=="button"){var af=al.label.replace(/ /g,"").replace(/[^a-z0-9\s]/gi,"");
var aj=af.toLowerCase().substring(0,12)+"Cli";
var ak=af.toLowerCase().substring(0,12)+"Con";
var ac={};
ac[aj]=1;
ac[ak]=1;
var ae=["download","digital","shopnow","freetrial","membership","subscribe","stream","startstreaming","getpsnow"];
for(var ah=0,ai=ae.length;
ah<ai;
++ah){if(af.toLowerCase().indexOf(ae[ah])!=-1){if(typeof BOOMR!="undefined"){console.log("MPulse Button Variables passed"+ac);
BOOMR.session.length++;
BOOMR.sendMetrics(ac)
}}}}}}catch(ad){console.log("Error while calling Akamai mPulse")
}}return{add:h,triggerFromElement:g,click:{elements:r,eventListener:N},css:{notrack:ab.CSS.stripStartCharacter(u),track:ab.CSS.stripStartCharacter(M)},set:{dataTrackAttribute:Z,dataTrackModuleNameAttribute:i,dataTrackNoClickDelayAttribute:R,dataTrackWrapperAttribute:m},get:{dataTrackAttribute:n,dataTrackModuleNameAttribute:e,dataTrackNoClickDelayAttribute:d,dataTrackWrapperAttribute:y,item:a}}
};
PDC.Analytics=PDC.Analytics||{};
PDC.Analytics.Product=function createProductInfo(e,b){var c=b||{};
function a(h){var f=h||{},g;
if(!e.product){e.product=[]
}g=Object.assign({productInfo:{genre:null,productName:null,publisher:null,sku:{preorderID:null,psnID:null}}},f);
e.product.push(g);
c.frozenLinkMessaging("Product");
return g
}function d(f){if(e.product){return b.getItemFromArray(e.product,f)
}}return{add:a,get:{item:d}}
};
PDC.Analytics=PDC.Analytics||{};
PDC.Analytics.Component=function createComponentInfo(h,c){var f=c||{};
function e(){this.componentInfo={componentName:null,componentID:null};
this.category={primaryCategory:null};
this.attributes={developer:null,publisher:null,releaseDate:null,genre:null,ageRating:null}
}function d(){this.componentInfo={componentName:null,componentID:null};
this.category={primaryCategory:null,componentType:null};
this.attributes={componentURL:null,position:null,date:null}
}function b(o,n){var m=o||{},l=n||"productDetailPage",j=(l==="banner")?new d():new e(),k,i;
if(!h.component){h.component=[]
}k=Object.assign(j,m);
i=h.component.length;
h.component.push(k);
f.frozenLinkMessaging("Component");
return i
}function a(i){if(i>=0){h.component.splice(i,1)
}return h.component
}function g(i){if(h.component){return c.getItemFromArray(h.component,i)
}}return{add:b,get:{item:g}}
};
window.digitalData={};
PDC.DigitalDataAPI=(function digitalDataLayerAPI(p,a){var b={},f=p,j,e,s,m,c,i;
function g(v,t){var u=t||"info";
if(window.freezeLinksForTesting){if(window.console&&window.console[u]){window.console[u]("DIGITAL DATA OBJECT: "+v+".\n",window.digitalData);
return u.toUpperCase()+":"+v
}}return v
}function q(u){var t=u||window.location.search;
window.freezeLinksForTesting=false;
if(t.match(/preventDefault=true/)){window.freezeLinksForTesting=true;
g("initial page impression")
}return window.freezeLinksForTesting
}b.frozenLinkMessaging=function d(t){return g((t||"Unspecified type")+" added")
};
b.getKeyValue=function l(u,t){if(u.hasOwnProperty(t)){return u[t]
}};
b.setKeyValue=function o(v,t,u){return v[t]=u
};
b.setTimeStamp=function k(){return Math.round((new Date()).getTime()/1000)
};
b.jsonParseUtility=function r(u){try{if(u&&typeof(u)==="string"){u=u.replace(/&quot;/gi,'"');
return JSON.parse(u)
}return{}
}catch(t){throw ("DigitalDataLayer Events API: Translating JSON object failed - "+u)
}};
b.getItemFromArray=function h(t,u){var v;
if(Array.isArray(t)&&typeof(u)==="number"){v=parseInt(u,10);
if(v<t.length){return t[v]
}}};
j=f.PageInstanceID(a,b);
e=f.PageInfo(a,b);
s=f.User(a,b);
m=f.Event(a,b);
c=f.Product(a,b);
i=f.Component(a,b);
function n(){a.page={};
a.user={};
a.pageInstanceID={};
b.setPageInstanceIDData();
b.setPageInfo();
b.setUserData();
q();
return a
}return{init:n,timeStamp:b.setTimeStamp,get:Object.assign(j.get,e.get,s.get),set:Object.assign(j.set,e.set,s.set),event:m,product:c,component:i,jsonParseUtility:b.jsonParseUtility}
})(PDC.Analytics,window.digitalData);
PDC.Commerce=(function eCommerceMarketing(t,w){var e="smcid",q="emcid",i,u=getCookie("sc_emcid"),l=getCookie("sc-cmp-id"),d=getCookie("sc-cmp-type");
var f=window.location.search.match(/emcid=([^&]+)/i);
if(f){i=f[1]
}function c(y){var z=/^(https?\:)?(\/{2})(store\.(playstation|sonyentertainmentnetwork))/,x=/^(psns\:browse)/;
return((typeof(y)==="string")&&(z.test(y)||x.test(y)))
}function n(y){var x=/^(https?\:)?(\/{2})((vue|direct)\.(playstation|sonyentertainmentnetwork))/;
return(y&&x.test(y))
}function j(C,D,z,x){var E=PDC.DigitalDataAPI,y=["pdc",E.get.language(),E.get.pageName().replace(/\:/g,"-")],B,A,F;
if(C){B=E.event.get.dataTrackAttribute(C);
A=PDC.DigitalDataAPI.product.get.item(0);
if(B&&B.attributes){y.push([B.attributes.moduleName,B.attributes.label].join("-"));
F=p(B.attributes.productName,(A)?A.productInfo.productName:null);
F=F.replace(/[^\w\s]/gi,"");
y.push(t.String.slugify(F));
y.push(g(D))
}}if(z){y.push(z)
}if(x){y.push(x)
}return y.join(":")
}function p(){var x=arguments.length,y;
for(y=0;
y<x;
y+=1){if(arguments[y]){return arguments[y]
}}return"null"
}function m(y){var x;
if(y instanceof (Element)){x=y.getAttribute("href");
if(x&&!(/^(javascript\:)/i).test(x)){return x
}return y.getAttribute("data-href")
}return null
}function h(){return((d===e)?l:null)
}function g(y){var x;
if(typeof(y)==="string"){x=(/(\/cid|\?(category|product))\=([^\?&]*)/).exec(y);
if(x&&x.length){x.reverse();
return x[0]
}}}function k(A,C){var z,y,B;
if(c(C)||n(C)){y=t.URI.parse(C);
z=y.queryObject;
if(!z.hasOwnProperty(e)){z[e]=j(A,C,h());
if((!u||u!=i)||(A.getAttribute("target")=="_self"||!A.getAttribute("target"))){if(typeof i!="undefined"){z[q]=i
}}}B=(y.protocol==="psns")?(y.protocol+":"+y.path):(y.origin+y.path);
var x=(B+t.URI.setQueryString(z));
if(y.hash&&y.hash!=""){x+="/#"+y.hash
}return x
}return C
}function r(z){var x,y=g(z);
if(y){x=t.URI.parse(z);
x.queryObject[(y.match(/STORE-/))?"category":"product"]=y;
return("psns:browse"+t.URI.setQueryString(x.queryObject))
}return z
}function o(z){var y=t.Element.convertJQueryElement(z),x;
if(t.Element.isValid(y)){x=y.getAttribute("href");
if(c(x)){y.setAttribute("href",r(x));
y.setAttribute("target",r("_self"))
}}return y
}function v(y,z,B,A){var x=(B)?B.match(A):[y.getAttribute("data-platform")||"no-platform-info"];
if(z[0].toLowerCase()===x[0].toLowerCase()){return o(y)
}return y
}return{updateStoreOrVueLinkHref:function b(A,z,E){var y=m(z),D,x;
if(!y){return false
}D=n(y);
x=c(y);
if(x&&E){return k(z,y)
}if(x||D){var C=z.getAttribute("target"),B=k(z,y);
if(C=="_blank"){A.preventDefault();
window.open(B,C);
z.setAttribute("href",B.split("&emcid=")[0])
}else{z.setAttribute("href",B)
}}if(!D){return z.setAttribute("href",k(z,y))
}},updateStoreLinksOnConsoles:function s(z,B){var y=document.querySelectorAll(z)||null,A=/^ps[0-9]/i,x=w.device.match(A);
if(x&&y){Array.prototype.forEach.call(y,function(C){return v(C,x,B,A)
});
return y
}},getGamePlatform:function a(z){var y=t.Element.convertJQueryElement(z),x;
if(t.Element.isValid(y)){x=y.getAttribute("href");
if(x){return x.split("-").pop()
}}}}
})(PDC.Utilities,PDC.Browser);
function createCookie(b){var a=new Date();
a.setTime(a.getTime()+24*3600*1000);
if(b){document.cookie="sc_emcid="+b+"; expires="+a.toUTCString()+";path=/; domain=.playstation.com"
}}$(window).load(function(){var h=window.location.search.match(/emcid=([^&]+)/i),e=new Date();
e.setTime(e.getTime()+24*3600*1000);
if(h){if(PDC.isUserConsentedCookie()){var g=".playstation.com";
if(document.location.href.indexOf("://localhost")>0){g="."+document.location.host
}var d="sc-cmp-id";
var a="sc-cmp-type";
createCookie(h[1]);
if($.cookie){$.cookie(d,h[1],{domain:g,path:"/"});
$.cookie(a,"emcid",{domain:g,path:"/"})
}else{setCookie(d,h[1],g);
setCookie(a,"emcid",g)
}}}if(h&&((window.location.href.indexOf("/vue/")!=-1||window.location.href.indexOf("/vue")!=-1))){var f=h[1];
document.cookie="sc_emcid="+f+"; expires="+e.toUTCString()+";path=/; domain=.playstation.com"
}var c="",b="; "+document.cookie;
if(b.split("; sc_emcid=").length==2){c=b.split("; sc_emcid=").pop().split(";").shift()
}if(c!=""){$(".return-url-link, .sign-out-btn a, #sb-signin-link, #sb-social-toolbar-root").each(function(){var i=$(this);
c=$.cookie("sc_emcid");
if(!i.hasClass("emcid_added_"+c)){i.addClass("emcid_added_"+c);
if(i.data("signouthref")){i.data("signouthref",i.data("signouthref")+"&emcid="+c)
}else{if(i.data("href")){i.data("href",i.data("href")+"&emcid="+c);
$("#sb-signin-link").attr("href",i.data("href"))
}else{i.attr("href",i.attr("href")+"&emcid="+c)
}}}if($(".return-url-link[href='']").length){$(".return-url-link[href='']").attr("href",$("#sb-social-toolbar-root").data("href"))
}})
}if((window.location.href.indexOf("/vue/")!=-1||window.location.href.indexOf("/vue")!=-1)&&c!==""){$(".secondary-nav-container a, #page-content a").attr("href",function(k,j){try{if(typeof j!="undefined"&&j!="null"&&j!=""){if(j.indexOf("smcid=")>-1){$(this).attr("href",j.trim()+"&emcid="+encodeURIComponent(c)).addClass("sc_emcId_added_"+c)
}}}catch(l){console.log("Error in getting href value from page")
}})
}});
PDC.Analytics=PDC.Analytics||{};
PDC.Analytics.VideoEvents=(function videoStateEvents(){var c=[];
function a(d){var e=c.length;
if(e){if(c[e-1]===d){return false
}}c.push(d);
return true
}function b(f,e){var h=PDC.DigitalDataAPI.event.get.dataTrackAttribute(f)||{},d=h.attributes||{},g={eventInfo:{type:"video",eventName:e||null},attributes:{assetName:d.assetName||null,destinationURL:d.assetName||null,label:d.label||null,moduleName:"video-component"}};
if(a(g.eventInfo.eventName)){PDC.DigitalDataAPI.event.add(f,g.eventInfo,g.attributes)
}return g
}return{ended:function(d){return b(d,"video ended")
},paused:function(d){return b(d,"video paused")
},resumed:function(d){return b(d,"video resumed")
},started:function(d){return b(d,"video started")
}}
})();
PDC=PDC||{};
(function(e,c,a,g){var d="gameCarouselRecs",f={};
function b(i,h){this.element=i;
this.$element=e(this.element);
this.$ul=e("ul",this.$element);
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.result=h.result;
this.smallPreset=h.smallPreset;
this.ageRatingPreset=h.ageRatingPreset;
this.init()
}b.prototype.init=function(){if(this.result){this.appendJSON(this.result,function(h){this.$ul.addGameTile(h)
});
if(e.fn.boxCarousel){e(".boxCarousel").boxCarousel({})
}}else{this.$element.hide()
}};
b.prototype.appendJSON=function(h,m){for(var k=0;
k<h.length;
k++){var n=h[k];
if(typeof n.title!="undefined"){var l=new PDC.GameTileTemplate();
for(var j in n){l[j]=n[j]
}if(typeof this.smallPreset!="undefined"){l.addPreset(this.smallPreset)
}if(typeof this.ageRatingPreset!="undefined"){l.addAgeRatingPreset(this.ageRatingPreset)
}if(m&&typeof m==="function"){m.call(this,l)
}}}if(typeof PriceSpider!=="undefined"){PriceSpider.rebind()
}};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
};
PDC.getEntityDefFromMeta=function(j,i){if(typeof i=="undefined"){i=j
}var h=e('meta[name="'+j+'"]');
if(h.length==1){return"entity."+i+"="+h.attr("content")
}else{return"entity."+i+"="
}}
})(jQuery,window,document);
var PDC=PDC||{};
(function(e,c,a,g){var d="gameTile",f={};
function b(i,h){this.element=i;
this.$element=e(this.element);
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){var n=null,r=null,l=false,p=e(".game-tile-hover",this.$element),m=this.$element,j=Modernizr.opacity?250:100,i=Modernizr.opacity?200:350;
var k=m.find(".game-tile-details").find("h2");
var o=k.find("a").height();
if(o>50){k.addClass("ellipsis")
}if(p.length&&!Modernizr.csstransitions){this.$element.on("mouseenter.displayHover",function(){clearTimeout(r);
clearTimeout(n);
r=null;
n=setTimeout(function(){l=true;
n=null;
if(Modernizr.opacity){p.addClass("show").animate({opacity:1},250)
}else{p.addClass("show")
}},400)
}).on("mouseleave.displayHover",function(){if(l){r=setTimeout(function(){l=false;
r=null;
if(Modernizr.opacity){p.animate({opacity:0},j,function(){p.removeClass("show")
})
}else{p.removeClass("show")
}},i)
}else{clearTimeout(n);
n=null
}})
}var q=e("div.possession",this.$element);
e(".want-it",q).on("click.togglePossession",function(h){h.preventDefault();
m.toggleClass("want-it");
if(m.hasClass("have-it")){m.removeClass("have-it")
}});
e(".have-it",q).on("click.togglePossession",function(h){h.preventDefault();
m.toggleClass("have-it");
if(m.hasClass("want-it")){m.removeClass("want-it")
}})
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(c){b.template='<div class="CM091-gametile game-tile x-sc" id="137122767921067" data-sc="{game_title: \'<%= productTitle %>\'}"><div class="tile clearfix"><a class="game-tile-image" href="<%= url %>" data-track="{ &quot;eventInfo&quot;: { &quot;eventAction&quot;: &quot;click&quot;, &quot;eventName&quot;: &quot;gametile click&quot; }, &quot;attributes&quot;: { &quot;moduleName&quot;: &quot;gametile&quot;, &quot;assetName&quot;: &quot;<%= img %>&quot;, &quot;label&quot;: &quot;<%= productTitle %>&quot;, &quot;position&quot;: &quot;1&quot;, &quot;elementType&quot;: &quot;image&quot;, &quot;userActionFlag&quot;: true } }"><img src="<%= img %>" alt=""></a><div class="game-tile-details"><span><%= platform%></span><h2><a class="title" href="<%= url %>"><%= title %></a></h2></div></div><div class="game-tile-hover"><div class="background"><a class="game-tile-image" href="<%= url %>" data-track="{ &quot;eventInfo&quot;: { &quot;eventAction&quot;: &quot;click&quot;, &quot;eventName&quot;: &quot;gametile click&quot; }, &quot;attributes&quot;: { &quot;moduleName&quot;: &quot;gametile&quot;, &quot;assetName&quot;: &quot;<%= ageRatingImage %>&quot;, &quot;label&quot;: &quot;<%= productTitle %>&quot;, &quot;position&quot;: &quot;1&quot;, &quot;elementType&quot;: &quot;image&quot;, &quot;userActionFlag&quot;: true } }"><% if (ageRatingImage && !ratingTbc) {%><div class="game-tile-hover-cert pegi-rating"><img src="<%= ageRatingImage %>" alt="<%= ageRatingImageAlt %>" title="<%= ageRatingImageAlt %>" /></div><%}%><img src="<%= hoverImg %>" alt=""></a><div class="game-tile-details clearfix"><span><%= platform %></span><h2><a class="title" href="<%= url %>" data-track="{ &quot;eventInfo&quot;: { &quot;eventAction&quot;: &quot;click&quot;, &quot;eventName&quot;: &quot;gametile click&quot; }, &quot;attributes&quot;: { &quot;moduleName&quot;: &quot;gametile&quot;, &quot;assetName&quot;: &quot;empty&quot;, &quot;label&quot;: &quot;<%= title %>&quot;, &quot;position&quot;: &quot;1&quot;, &quot;elementType&quot;: &quot;link&quot;, &quot;userActionFlag&quot;: true } }"><%= title %></a></h2><% if (buttonTxt) {if(buttonType.indexOf("auto-retail") >= 0 && typeof PriceSpider !== "undefined"){%><div class="priceSpider" id="<%=upc%>" data-text="<%=buttonTxt%>"></div><%}else{%><a id="" target="<%= buttonTarget%>" class="link-btn <%= buttonType%> <%= buttonColor%> small-btn x-sku-<%= sku%> x-title-<%= productTitle%>" x-upc-<%= upc %> style="" <% if(!newModal) {%> href="javascript:void(0);" data-href="<%= buttonURL%>" data-track="{ &quot;eventInfo&quot;: { &quot;eventAction&quot;: &quot;click&quot;, &quot;eventName&quot;: &quot;gametile click&quot; }, &quot;attributes&quot;: { &quot;moduleName&quot;: &quot;gametile&quot;, &quot;assetName&quot;: &quot;empty&quot;, &quot;label&quot;: &quot;<%= productTitle %>&quot;, &quot;position&quot;: &quot;1&quot;, &quot;elementType&quot;: &quot;button&quot;, &quot;userActionFlag&quot;: false } }"><% } else {%> href="<%= buttonURL%>" data-track="{ &quot;eventInfo&quot;: { &quot;eventAction&quot;: &quot;click&quot;, &quot;eventName&quot;: &quot;gametile click&quot; }, &quot;attributes&quot;: { &quot;moduleName&quot;: &quot;gametile&quot;, &quot;assetName&quot;: &quot;empty&quot;, &quot;label&quot;: &quot;<%= productTitle %>&quot;, &quot;position&quot;: &quot;1&quot;, &quot;elementType&quot;: &quot;button&quot;, &quot;userActionFlag&quot;: false } }"><% }%><div class="btn"><%= buttonTxt %></div></a><%}%><%}%><h3 class="clearfix"><%= releaseDate %></h3>                   </div></div></div></div>';
function b(){this.title;
this.image="";
this.hoverImage="";
this.platform="";
this.description;
this.release_date_display;
this.release_date;
this.url;
this.buttonTxt;
this.buttonColor;
this.buttonURL;
this.buttonType;
this.sku;
this.upc;
if(PDC.GameTile){this.image=PDC.GameTile.DefaultImage
}}b.prototype.addPreset=function(d){this.preset=d
};
b.prototype.addAgeRatingPreset=function(d){this.ageRatingPreset=d
};
b.prototype.getAgeRatingImageURL=function(){if(!(this.ageRatingImage&&this.ageRatingImage.length>1)){return undefined
}if(this.ageRatingPreset){return this.ageRatingImage.replace(/\?.*$/,"")+"?$"+this.ageRatingPreset+"$"
}else{return this.ageRatingImage
}};
b.prototype.getImageURL=function(){if(!(this.image&&this.image.length>1)){this.image=PDC.GameTile.DefaultImage
}if(this.preset){return this.image.replace(/\?.*$/,"")+"?$"+this.preset+"$"
}return this.image
};
b.prototype.getHoverImageURL=function(){if(!(this.hoverImage&&this.hoverImage.length>1)){return this.getImageURL()
}if(this.preset){return this.hoverImage.replace(/\?.*$/,"")+"?$"+this.preset+"$"
}return this.hoverImage
};
b.prototype.getEscapedTitle=function(){if(this.title){var d=this.title.replace(/&[^;\s]+;/g,"").replace(/[^\w_-]+/g," ").replace(/^\s+/g,"").replace(/\s+$/g,"").replace(/\s+/g," ").toLowerCase();
return d.replace(/\s/g,"-")
}return""
};
b.prototype.show=function(d){var e=this.replace(),f=$(e);
return e
};
b.prototype.replace=function(){var d=this.buttonTxt;
try{if(this.psnId!=""&&(d.indexOf("Pre-Order Disc")>=0||d.indexOf("Buy Disc")>=0)){this.buttonTxt=d.replace(/Disc/,"Download")
}else{if(this.psnId!=""&&this.release_date_display!=""){if(this.release_date_display=="Out Now"){this.buttonTxt=Adobe.I18n.get("Buy Download")
}else{this.buttonTxt=Adobe.I18n.get("Pre-Order Download")
}}}}catch(e){}if(typeof this.platform=="undefined"||this.platform==null){this.platform=""
}this.jsondata={title:this.title,img:this.getImageURL(),hoverImg:this.getHoverImageURL(),platform:this.platform.replace(/(\w),(\w)/g,"$1, $2"),description:this.description,url:this.url,buttonColor:this.buttonColor,buttonTxt:this.buttonTxt,buttonURL:this.psnId!=""?"https://web.archive.org/web/20200615212229/https://store.playstation.com/?resolve="+this.psnId:this.buttonURL,buttonType:this.psnId!=""?"orange-btn auto-download":this.buttonType,ageRatingImage:this.getAgeRatingImageURL(),ageRatingImageAlt:this.ageRatingImageAlt,ratingTbc:this.ratingTbc,releaseDate:this.getDate(),newWindow:this.psnId!=""?this.buttonURL.indexOf("https://web.archive.org/web/20200615212229/https://store")>0:this.buttonURL.indexOf("https://web.archive.org/web/20200615212229/https://store")==0,newModal:this.psnId!=""?this.buttonType.indexOf("lb_iframe")==0:this.buttonType.indexOf("lb_iframe")>0,buttonTarget:this.buttonURL.indexOf("https://web.archive.org/web/20200615212229/https://store")==0?"_target":"_self",productTitle:this.getEscapedTitle(),sku:this.sku,upc:this.upc};
var f=_.template(b.template,this.jsondata);
return f
};
var a={"1":31,"2":28,"3":31,"4":30,"5":31,"6":30,"7":31,"8":31,"9":30,"10":31,"11":30,"12":31};
b.prototype.getDate=function(){var d=this.release_date_display;
if($("#CM021_gameFilter").size()>0){try{var i=new Date(Date.parse(this.release_date));
var h=i.getMonth()+1;
var g=i.getDate()+1;
var f=i.getFullYear();
if(a[h]<g){if(f%4==0&&h==2&&g==29){}else{g=1;
h+=1;
if(h==13){h=1;
f++
}}}d=(new Date()).getTime()>=i.getTime()?(h+"/"+g+"/"+f):this.release_date_display
}catch(j){console.log(j)
}}return d
};
c.GameTileTemplate=b
})(PDC);
(function(a){a.fn.addGameTile=function(b,c){var d=this.is("li")?this:a("<li/>");
if(this.is("ul")){this.append(d)
}if(typeof c!="undefined"){d.addClass(c)
}d.append(b.show());
d.find(".game-tile").gameTile()
}
})(jQuery);
var PDC=PDC||{};
(function(e,c){e.fn.hideSingleComponentSection=function(){var l=this.parents(".page-section-par");
if(l.length==1){if(l.find(">div:not(.sectionButtonRow)").length==1){l.parent().addClass("hidden")
}}return this
};
e.fn.showSingleComponentSection=function(){var l=this.parents(".page-section-par");
if(l.length==1){if(l.find(">div:not(.sectionButtonRow)").length==1){l.parent().removeClass("hidden")
}}return this
};
e.fn.setAgeGateInputEvents=function(l){this.each(function(){var m=e(this);
m.focusin(function(){m.removeClass("fail");
if(m.val()=="DD"||m.val()=="MM"||m.val()=="YYYY"){m.val("")
}}).focusout(function(){var o=m.val();
if(m.hasClass("day")){if(o==="DD"||o==""||o>31||o<1){m.addClass("fail");
m.val("DD")
}else{m.removeClass("fail")
}}if(m.hasClass("month")){if(o==="MM"||o==""||o>12||o<1){m.addClass("fail");
m.val("MM")
}else{m.removeClass("fail")
}}if(m.hasClass("year")){var n=new Date();
if(o=="YYYY"||o==""||o>=n.getFullYear()||(o<n.getFullYear()-100)){m.addClass("fail");
m.val("YYYY")
}else{m.removeClass("fail")
}}}).keydown(function(n){if(n.keyCode==13){e(l).trigger("click")
}if(n.keyCode==46||n.keyCode==8||n.keyCode==9||n.keyCode==27||(n.keyCode==65&&n.ctrlKey===true)||(n.keyCode>=35&&n.keyCode<=39)){return
}else{if(n.shiftKey||(n.keyCode<48||n.keyCode>57)&&(n.keyCode<96||n.keyCode>105)){n.preventDefault()
}}})
})
};
function k(l){var m="";
e.each(l,function(){m=m+this.i
});
return m
}var j="sony_pga_age";
function f(m,l){l-=m.toString().length;
if(l>0){return new Array(l+(/\./.test(m)?2:1)).join("0")+m
}return m+""
}function g(o){if(o==null){return null
}var m=o.split("-");
var n=new Date().getHours();
var s=new Date().getMinutes();
var t=new Date().getSeconds();
var p=((n*3600)+(s*60)+t)*1000;
var r=(new Date(m[0],m[1]-1,m[2],0,0,0).getTime())+p;
var q=new Date().getTime()-r;
var l=new Date(q);
return Math.abs(l.getFullYear()-1970)
}function d(o,l){var n="";
for(var m=0;
m<o.length;
m++){if(o[m].ea<=l){n=o[m].i
}}return n
}function i(n,m){for(var l=0;
l<n.length;
l++){if(n[l].i==m){return n[l].ea
}}return -1
}function b(){return PDC.isUserConsentedCookie()
}function h(t,p){if(!b()){return
}var q=window.location.hostname,o=d(PDC.Rating.PRS,t),m=d(PDC.Rating.SRS,t),r=(t>=Number(PDC.Header.AgeGateThreshold)?"1":"0"),l=k(PDC.Rating.PRS)+k(PDC.Rating.SRS),s=o+"-"+m+"-"+r+"-"+l+"-"+globalLocale;
if(p&&p!=""){var n=new Date();
n.setTime(n.getTime()+p*60*1000);
document.cookie=j+"="+escape(s)+"; expires="+n.toGMTString()+"; path=/; domain="+q
}else{document.cookie=j+"="+escape(s)+"; path=/; domain="+q
}}c.getAgeFromSequence=function(o){var l,p=k(PDC.Rating.PRS)+k(PDC.Rating.SRS);
if(typeof o=="undefined"||o==null||(l=o.match(/^(\d*)-(\d*)-([01])-(\d*)-(.*)$/))==null){return -1
}if(l[5]!=globalLocale||l[4]!=p){return -1
}var n=i(PDC.Rating.PRS,l[1]),r=i(PDC.Rating.SRS,l[2]),q=Number(PDC.Header.AgeGateThreshold);
if(r>n){n=r
}if(n>-1&&q>n&&(l[3]=="1")){n=q
}return n
};
function a(){return c.getAgeFromSequence(getCookie(j))
}e.fn.setAgeGateSubmitHandler=function(r,m,s,p){var q=e(this).parents(".age-form"),l=q.find(".day"),n=q.find(".month"),o=q.find(".year");
function t(v,x,y){var B=v.val(),z=x.val(),A=y.val(),u=[31,28,31,30,31,30,31,31,30,31,30,31],w=new Date().getFullYear(),C=w-100;
if(z=="MM"||A=="YYYY"||B=="DD"){if(z=="MM"){x.addClass("fail")
}if(A=="YYYY"){y.addClass("fail")
}if(B=="DD"){v.addClass("fail")
}}else{if(A<w&&A>C){if((!(A%4)&&A%100)||!(A%400)){u[1]=29
}if(B<=u[z-1]){return f(A,4)+"-"+f(z,2)+"-"+f(B,2)
}else{v.val("DD");
v.addClass("fail")
}}}return null
}e(this).click(function(){var v=t(l,n,o),u=g(v);
if(u!=null){h(u,r);
if(u>=m){s()
}else{p()
}}})
};
c.isVisitorOldEnough=function(l){if(c.Profile.isLoggedIn()){var m=c.Profile.isMature(l.toString());
if(m==true){return true
}else{if(m==false){return false
}}}var n=a();
return n>=l
};
c.isVisitorAgeKnown=function(){if(c.Profile.isLoggedIn()){if(c.Profile.isMature(0)!=null){return true
}}var l=a();
return l>-1
};
c.showPageAgeGate=function(){if(typeof c.GamePage!="undefined"){var l=c.GamePage.getEquivalentAge(),m=c.GamePage.getThreshold();
if(c.GamePage.isAgeGateOn()&&(l>=m)){if(!c.isVisitorAgeKnown()||!c.isVisitorOldEnough(l)){return true
}}}return false
}
})(jQuery,PDC);
(function(e,c,a,g){var d="ageGateOverlay",f={threshold:18,failheading:"Sorry",failsubheading:"You're too young",faildesc:"You are not eligible to view the contents of this page. Please come back when your old enough."};
function b(i,h){this.element=i;
this.parent=i.parentNode;
this.elementHeight=0;
this.timeoutId=0;
this.wasVisible=null;
this.isNowVisible=false;
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){var o=this,p=e(this.element),k=p.find(this.options.elementSelector),l=true,i=p.find(".let-me-in"),j=i.text(),h=p.find(".age-gate-content");
function m(){if(PDC.showPage){PDC.showPage()
}e(c).off("resize.ageGate").scrollTop(0);
p.hide().remove();
e(c).trigger("bannerBlockerClosed");
PDC.DigitalDataAPI.event.add(j,{eventName:"agegate",eventAction:"click"},{assetName:"empty",linkURL:"empty",impressionCount:"1",label:"empty",moduleName:"agegate",elementType:"button",userActionFlag:true})
}function n(){h.find("h2").text(o.options.failheading);
h.find("h3").text(o.options.failsubheading);
h.find("p").text(o.options.faildesc).addClass("red");
h.find(".age-form").hide();
h.find(".skip-this").hide();
e("#find-another-game").removeClass("hide");
PDC.DigitalDataAPI.event.add(j,{eventName:"agegate",eventAction:"click"},{assetName:"empty",linkURL:"empty",impressionCount:"1",label:"empty",moduleName:"agegate",elementType:"button",userActionFlag:true})
}p.find(".day, .month, .year").setAgeGateInputEvents(i);
i.setAgeGateSubmitHandler(o.options.expired,o.options.threshold,m,n);
e(c).on("resize.ageGate",function(){var s=e(c).height(),r=e("#shared-nav-root").outerHeight(),u=r+60,q=e(a.getElementById("age-gate-overlay"));
q.addClass("align-middle").children(".age-gate").css({height:s,"padding-top":""});
var t=q.find(".age-gate-content").offset().top;
if(t<=u){o.ageGateAlignTop(q,u)
}});
e(c).trigger("resize.ageGate")
};
b.prototype.ageGateAlignTop=function(h,i){h.removeClass("align-middle").children(".age-gate").css({"padding-top":i})
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(g){var o="GamePaths",k="GameTitles",i="GameDescs",c="GameDates",b="ImageScene7Paths",h=",",e=";",j="SmallHero_Hygiene_Legal_09Oct13",d={wwwdev:"//web.archive.org/web/20200615212229/https://media.playstation.com/is/image/SCEADEV/",wwwqa:"//web.archive.org/web/20200615212229/https://media.playstation.com/is/image/SCEAQA/",wwwstage:"//web.archive.org/web/20200615212229/https://media.playstation.com/is/image/SCEASTAGE/",wwwuat:"//web.archive.org/web/20200615212229/https://media.playstation.com/is/image/psmedia/",www:"//web.archive.org/web/20200615212229/https://media.playstation.com/is/image/SCEA/"},n={path:[],title:[],desc:[],date:[],scene7Path:[]};
g.fn.manageGameCookie=function(B){var p=g.extend({},g.fn.manageGameCookie.defaults,B);
if(p.cookieAction==="set"){try{var x=g("[name='gameTitle']").attr("content");
var u=g("[name='gameLongDescription']").attr("content");
var A="undefined";
var q=g("[name='assetImageUrl']").attr("content");
if(typeof x==="undefined"||x===""){g(this).find("h1").each(function(){x=g(this).html()
})
}A=g(location).attr("pathname");
if(x!==""){if(typeof u==="undefined"||u===""){g(this).find(".teaser").each(function(){u=g(this).html()
})
}if(typeof q==="undefined"||q===""){if(g(".wide #huge-hero-banner-bg").length){q=g(".wide #huge-hero-banner-bg").data("background")
}else{if(g(".wide .banner-image").length){q=g(".wide .banner-image").css("background-image")
}else{q==="undefined"
}}}else{if(q.indexOf("/content/")>-1){var t=q.split("/").pop();
if(A.indexOf("wwwqa")>-1){q=d.wwwqa
}else{q=d.www
}q=q+t.split(".")[0]+"?$ThreeColFeature_Image$"
}}if(typeof q!=="undefined"&&q!=="undefined"&&q.indexOf(j)<0){if(q.indexOf("url")>-1){q=q.replace(/"/g,"");
q=q.substring(4,q.length-1)
}if(q.indexOf("?$")>-1){q=q.substring(0,q.indexOf("?$")+1)+"$ThreeColFeature_Image$"
}else{if(q.indexOf("/content/dam")>-1){q=q+"/jcr:content/renditions/cq5dam.thumbnail.319.319.png"
}}}else{q="undefined"
}m(A,x,u,q)
}}catch(s){console.log("error saving game details"+s.message)
}}else{try{var z=f();
var v=0;
var y=z.path.length;
if(y>0){var r="<div class='btn'>LEARN MORE</div>";
var w=g(this).parent().find("ul.buttonlist").find("li:last").find("a");
if(g(w).hasClass("blue-btn")){r=g(w).html()
}g(this).find("li").each(function(){if(v<y){if(g(this).data("tracker-enabled")){var D=g(this).find(".padd a");
if(D.length==0){g(this).children(".padd").append(g("<a>"));
D=g(this).find(".padd a");
g(this).find(".padd div.image").appendTo(D);
g(D).attr("href","javascript:void(0);")
}var H=z.scene7Path[v];
g(D).data("href",z.path[v]);
var C=g(D).attr("onclick");
if(H==="undefined"){H="//web.archive.org/web/20200615212229/https://media.playstation.com/is/image/SCEA/playstation-now-spotlight-27jun14?$ThreeColFeature_Image$"
}var F=g(D).find(".cq-dd-image");
F.attr("src",H);
F.attr("title",z.title[v]);
F.attr("alt",z.title[v]);
var G=g(this).find(".device > .padd");
g(G).find("h2").html("");
g(G).find("h3").html(z.title[v]);
if(z.desc[v]==="undefined"){g(G).find("p").html("")
}else{g(G).find("p").html(z.desc[v])
}var E=g(this).index();
var I=g(this).closest("ul").parent().find("ul.buttonlist").find("li:eq("+E+")").find("a");
g(I).attr("href",z.path[v]);
g(I).removeClass().addClass("link-btn manual-other blue-btn");
g(I).html(r);
v++
}}else{return false
}})
}}catch(s){console.log("error saving game details: "+s.message)
}}};
g.fn.manageGameCookie.defaults={expirationDays:30,cookieAction:"set"};
function a(){var t=localStorage.getItem(o);
var v=localStorage.getItem(k);
var u=localStorage.getItem(i);
var r=localStorage.getItem(c);
var s=localStorage.getItem(b);
if(t!==null){var q={path:t.split(e),title:v.split(e),desc:u.split(e),date:r.split(e),scene7Path:s.split(e)};
return q
}else{var p={path:[],title:[],desc:[],date:[],scene7Path:[]};
return p
}}function l(p){localStorage.setItem(o,p.path.join(e));
localStorage.setItem(k,p.title.join(e));
localStorage.setItem(i,p.desc.join(e));
localStorage.setItem(c,p.date.join(e));
localStorage.setItem(b,p.scene7Path.join(e))
}function m(u,w,v,s){var p=a();
var t=p.path;
if(w==="undefined"&&s==="undefined"){console.log("game data undefined")
}else{if(p.path.length>=1&&g.inArray(u,t)>-1){var r=g.inArray(u,t);
p.path.splice(r,1);
p.title.splice(r,1);
p.desc.splice(r,1);
p.date.splice(r,1);
p.scene7Path.splice(r,1)
}var q=new Date().getTime();
p.path.unshift(u);
p.title.unshift(w);
p.desc.unshift(v);
p.date.unshift(q);
p.scene7Path.unshift(s);
l(p)
}}function f(){var q=a();
var s=q.path.length;
var u=q.date;
if(s>0){var t=new Date().getTime();
for(var p=s;
p>=0;
p--){var r=u[p-1];
if(p>3){q.path.splice(p-1);
q.title.splice(p-1);
q.desc.splice(p-1);
q.date.splice(p-1);
q.scene7Path.splice(p-1)
}else{if(t-r>2592000000){if(p===1){localStorage.clear();
return
}else{q.path.splice(p-1);
q.title.splice(p-1);
q.desc.splice(p-1);
q.date.splice(p-1);
q.scene7Path.splice(p-1)
}}}}l(q)
}return q
}})(jQuery);
(function(a){a.fn.selectedPage=function(b){var c=a.extend({},a.fn.selectedPage.defaults,b);
a(this).find(".nav-link-page").each(function(){var d=a(this).find("a").attr("href");
console.log("anchor"+d);
console.log("anchor"+c.pagePath);
var e=c.pagePath.split("/").pop();
console.log(d.indexOf(e));
if(d.indexOf(e)>=0){a(this).addClass("selected")
}})
};
a.fn.selectedPage.defaults={pagePath:"home"};
a(document).ready(function(){a.fn.reSizeWin=function(){window.resizeTo(screen.width,screen.height);
window.moveTo(0,0)
};
if(PDC.Browser.device.match(/ps3/i)||PDC.Browser.device.match(/ps4/i)){a.fn.reSizeWin();
setInterval("reSizeWin()",1000)
}})
})(jQuery);
$(document).ready(function(){var f={wwwdev:"https://web.archive.org/web/20200615212229/https://dev.io.playstation.com/",wwwqa:"https://web.archive.org/web/20200615212229/https://qa.io.playstation.com/",wwwqa2:"https://web.archive.org/web/20200615212229/https://qa2.io.playstation.com/",wwwstage:"https://web.archive.org/web/20200615212229/https://stage.io.playstation.com/",www:"https://web.archive.org/web/20200615212229/https://io.playstation.com/",preview:"https://web.archive.org/web/20200615212229/https://preview.io.playstation.com/"};
window.getEnvironment=function(){var g=window.location.hostname;
return g.split(".")[0]
};
environmentVariable=getEnvironment();
var b=f[environmentVariable]+"api/personalization?uh=";
var d="";
if($.cookie("uh")){d=b+$.cookie("uh")
}else{d=b
}var e=typeof $.cookie("userinfo")==="undefined"||$.cookie("userinfo")===null||$.cookie("userinfo")==="";
var a=typeof $.cookie("dcm")==="undefined"||$.cookie("dcm")===null||$.cookie("dcm")==="";
var c=typeof $.cookie("dcm2")==="undefined"||$.cookie("dcm2")===null||$.cookie("dcm2")==="";
if(!e&&a){$.ajax({type:"GET",url:d,success:function(h){var g=h.console+"|"+h.psvr+"|"+h.firstGenre+"|"+h.secondGenre+"|"+h.segment+"|"+h.psplus_expDate;
$.cookie("dcm",g,{expires:1,path:"/",domain:location.hostname});
$.cookie("dcm2",g,{expires:365,path:"/",domain:location.hostname})
}})
}else{if(e){$.removeCookie("dcm",{path:"/",domain:location.hostname})
}}});
var addDTMToCopyBlockLinksPlugin=function(){var a=function(c){return(c?c.replace(/\s+/g,"-").toLowerCase():"empty")
},b=function(){var c=$(".copy-block .richtext a, section .richtext .section-sub-text a, .CM168-text a, .richtext .block-copy a");
if(!c||!c.length){return false
}c.each(function(e){var d=$(this);
d.addClass("dtm-no-track");
d.on("click",function(){var g=a(d.text());
try{PDC.DigitalDataAPI.event.add(d,{eventName:"copyblock click",eventAction:"click"},{assetName:"empty",linkUrl:(d.attr("href")||"empty"),impressionCount:(e+1),label:g,moduleName:"copyblock",elementType:"link",userActionFlag:true})
}catch(f){console.log("PDC.DigitalDataAPI not available.")
}})
})
};
b()
};
$(document).ready(function(){addDTMToCopyBlockLinksPlugin()
});

}
/*
     FILE ARCHIVED ON 21:22:29 Jun 15, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:36:28 Apr 14, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 348.378
  exclusion.robots: 215.377
  exclusion.robots.policy: 215.365
  xauthn.identify: 128.677
  xauthn.chkprivs: 86.33
  RedisCDXSource: 0.672
  esindex: 0.011
  LoadShardBlock: 98.559 (3)
  PetaboxLoader3.datanode: 69.66 (5)
  CDXLines.iter: 21.31 (3)
  PetaboxLoader3.resolve: 166.557 (3)
  load_resource: 194.066 (2)
*/