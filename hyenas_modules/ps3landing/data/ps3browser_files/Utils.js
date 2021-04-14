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

(function(a){if(typeof module==="object"&&module.exports){module.exports=a()
}else{var b=window.Granite=window.Granite||{};
b.Sling=a()
}}(function(){return{SELECTOR_INFINITY:".infinity",CHARSET:"_charset_",STATUS:":status",STATUS_BROWSER:"browser",OPERATION:":operation",OPERATION_DELETE:"delete",OPERATION_MOVE:"move",DELETE_SUFFIX:"@Delete",TYPEHINT_SUFFIX:"@TypeHint",COPY_SUFFIX:"@CopyFrom",MOVE_SUFFIX:"@MoveFrom",ORDER:":order",REPLACE:":replace",DESTINATION:":dest",SAVE_PARAM_PREFIX:":saveParamPrefix",IGNORE_PARAM:":ignore",REQUEST_LOGIN_PARAM:"sling:authRequestLogin",LOGIN_URL:"/system/sling/login.html",LOGOUT_URL:"/system/sling/logout.html"}
}));
(function(a){if(typeof module==="object"&&module.exports){module.exports=a()
}else{var b=window.Granite=window.Granite||{};
b.Util=a()
}}(function(){var a=function(b){return Object.prototype.toString.call(b)==="[object Array]"
};
return{patchText:function(d,c){if(c){if(!a(c)){d=d.replace("{0}",c)
}else{for(var b=0;
b<c.length;
b++){d=d.replace(("{"+b+"}"),c[b])
}}}return d
},getTopWindow:function(){var c=window;
if(this.iFrameTopWindow){return this.iFrameTopWindow
}try{while(c.parent&&c!==c.parent&&c.parent.location.href){c=c.parent
}}catch(b){}return c
},setIFrameMode:function(b){this.iFrameTopWindow=b||window
},applyDefaults:function(){var d;
var f=arguments[0]||{};
for(var c=1;
c<arguments.length;
c++){d=arguments[c];
for(var b in d){var e=d[b];
if(d.hasOwnProperty(b)&&e!==undefined){if(e!==null&&typeof e==="object"&&!(e instanceof Array)){f[b]=this.applyDefaults(f[b],e)
}else{if(e instanceof Array){f[b]=e.slice(0)
}else{f[b]=e
}}}}}return f
},getKeyCode:function(b){return b.keyCode?b.keyCode:b.which
}}
}));
(function(a){if(typeof module==="object"&&module.exports){module.exports=a(require("@granite/util"),require("jquery"))
}else{window.Granite.HTTP=a(Granite.Util,jQuery)
}}(function(util,$){return(function(){var contextPath=null;
var SCRIPT_URL_REGEXP=/^(?:http|https):\/\/[^/]+(\/.*)\/(?:etc\.clientlibs|etc(\/.*)*\/clientlibs|libs(\/.*)*\/clientlibs|apps(\/.*)*\/clientlibs|etc\/designs).*\.js(\?.*)?$/;
var ENCODE_PATH_REGEXP=/[^\w-.~%:/?[\]@!$&'()*+,;=]/;
var URI_REGEXP=/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
var loginRedirected=false;
var self={};
self.getSchemeAndAuthority=function(uri){if(!uri){return""
}var result=URI_REGEXP.exec(uri);
if(result===null){return""
}return[result[1],result[3]].join("")
};
self.getContextPath=function(){if(contextPath===null){contextPath=self.detectContextPath()
}return contextPath
};
self.detectContextPath=function(){try{if(window.CQURLInfo){contextPath=CQURLInfo.contextPath||""
}else{var scripts=document.getElementsByTagName("script");
for(var i=0;
i<scripts.length;
i++){var result=SCRIPT_URL_REGEXP.exec(scripts[i].src);
if(result){contextPath=result[1];
return contextPath
}}contextPath=""
}}catch(e){}return contextPath
};
self.externalize=function(url){try{if(url.indexOf("/")===0&&self.getContextPath()&&url.indexOf(self.getContextPath()+"/")!==0){url=self.getContextPath()+url
}}catch(e){}return url
};
self.internalize=function(url,doc){if(url.charAt(0)==="/"){if(contextPath===url){return""
}else{if(contextPath&&url.indexOf(contextPath+"/")===0){return url.substring(contextPath.length)
}else{return url
}}}if(!doc){doc=document
}var docHost=self.getSchemeAndAuthority(doc.location.href);
var urlHost=self.getSchemeAndAuthority(url);
if(docHost===urlHost){return url.substring(urlHost.length+(contextPath?contextPath.length:0))
}else{return url
}};
self.getPath=function(url){if(!url){if(window.CQURLInfo&&CQURLInfo.requestPath){return CQURLInfo.requestPath
}else{url=window.location.pathname
}}else{url=self.removeParameters(url);
url=self.removeAnchor(url)
}url=self.internalize(url);
var i=url.indexOf(".",url.lastIndexOf("/"));
if(i!==-1){url=url.substring(0,i)
}return url
};
self.removeAnchor=function(uri){var fragmentIndex=uri.indexOf("#");
if(fragmentIndex>=0){return uri.substring(0,fragmentIndex)
}else{return uri
}};
self.removeParameters=function(uri){var queryIndex=uri.indexOf("?");
if(queryIndex>=0){return uri.substring(0,queryIndex)
}else{return uri
}};
self.encodePathOfURI=function(uri){var DELIMS=["?","#"];
var parts=[uri];
var delim;
for(var i=0,ln=DELIMS.length;
i<ln;
i++){delim=DELIMS[i];
if(uri.indexOf(delim)>=0){parts=uri.split(delim);
break
}}if(ENCODE_PATH_REGEXP.test(parts[0])){parts[0]=self.encodePath(parts[0])
}return parts.join(delim)
};
self.encodePath=function(uri){uri=encodeURI(uri);
uri=uri.replace(/%5B/g,"[").replace(/%5D/g,"]");
uri=uri.replace(/\?/g,"%3F");
uri=uri.replace(/#/g,"%23");
return uri
};
self.handleLoginRedirect=function(){if(!loginRedirected){loginRedirected=true;
alert(Granite.I18n.get("Your request could not be completed because you have been signed out."));
var l=util.getTopWindow().document.location;
l.href=self.externalize("/")+"?resource="+encodeURIComponent(l.pathname+l.search+l.hash)
}};
self.getXhrHook=function(url,method,params){method=method||"GET";
if(window.G_XHR_HOOK&&typeof G_XHR_HOOK==="function"){var p={url:url,method:method};
if(params){p.params=params
}return G_XHR_HOOK(p)
}return null
};
self.eval=function(response){if(typeof response!=="object"){response=$.ajax({url:response,type:"get",async:false})
}try{return eval("("+(response.body?response.body:response.responseText)+")")
}catch(e){}return null
};
return self
}())
}));
(function(a){if(typeof module==="object"&&module.exports){module.exports=a(require("@granite/http"))
}else{window.Granite.I18n=a(window.Granite.HTTP)
}}(function(a){return(function(){var b={};
var g="/libs/cq/i18n/dict.";
var j=".json";
var c=undefined;
var i=false;
var f=null;
var k={};
var e=false;
var d=function(l){if(e){return g+l+j
}var n;
var m=document.querySelector("html");
if(m){n=m.getAttribute("data-i18n-dictionary-src")
}if(!n){return g+l+j
}return n.replace("{locale}",encodeURIComponent(l)).replace("{+locale}",l)
};
var h=function(n,m){if(m){if(Array.isArray(m)){for(var l=0;
l<m.length;
l++){n=n.replace("{"+l+"}",m[l])
}}else{n=n.replace("{0}",m)
}}return n
};
k.LOCALE_DEFAULT="en";
k.PSEUDO_LANGUAGE="zz";
k.PSEUDO_PATTERN_KEY="_pseudoPattern_";
k.init=function(l){l=l||{};
this.setLocale(l.locale);
this.setUrlPrefix(l.urlPrefix);
this.setUrlSuffix(l.urlSuffix)
};
k.setLocale=function(l){if(!l){return
}c=l
};
k.getLocale=function(){if(typeof c==="function"){c=c()
}return c||document.documentElement.lang||k.LOCALE_DEFAULT
};
k.setUrlPrefix=function(l){if(!l){return
}g=l;
e=true
};
k.setUrlSuffix=function(l){if(!l){return
}j=l;
e=true
};
k.getDictionary=function(l){l=l||k.getLocale();
if(!b[l]){i=l.indexOf(k.PSEUDO_LANGUAGE)===0;
try{var n=new XMLHttpRequest();
n.open("GET",a.externalize(d(l)),false);
n.send();
b[l]=JSON.parse(n.responseText)
}catch(m){}if(!b[l]){b[l]={}
}}return b[l]
};
k.get=function(p,m,n){var q;
var o;
var l;
q=k.getDictionary();
l=i?k.PSEUDO_PATTERN_KEY:n?p+" (("+n+"))":p;
if(q){o=q[l]
}if(!o){o=p
}if(i){o=o.replace("{string}",p).replace("{comment}",n?n:"")
}return h(o,m)
};
k.getVar=function(m,l){if(!m){return null
}return k.get(m,null,l)
};
k.getLanguages=function(){if(!f){try{var l=a.externalize("/libs/wcm/core/resources/languages.overlay.infinity.json");
var o=new XMLHttpRequest();
o.open("GET",l,false);
o.send();
var m=JSON.parse(o.responseText);
Object.keys(m).forEach(function(q){var p=m[q];
if(p.language){p.title=k.getVar(p.language)
}if(p.title&&p.country&&p.country!=="*"){p.title+=" ("+k.getVar(p.country)+")"
}});
f=m
}catch(n){f={}
}}return f
};
k.parseLocale=function(o){if(!o){return null
}var n=o.indexOf("_");
if(n<0){n=o.indexOf("-")
}var m;
var l;
if(n<0){m=o;
l=null
}else{m=o.substring(0,n);
l=o.substring(n+1)
}return{code:o,language:m,country:l}
};
return k
}())
}));
(function(a){if(typeof module==="object"&&module.exports){module.exports=a(require("jquery"))
}else{var b=window.Granite=window.Granite||{};
b.TouchIndicator=a(window.jQuery)
}}(function(d){var b={visibility:"hidden",position:"absolute",width:"30px",height:"30px","-webkit-border-radius":"20px","border-radius":"20px",border:"5px solid orange","-webkit-user-select":"none","user-select":"none",opacity:"0.5","z-index":"2000","pointer-events":"none"};
var c={};
var a=[];
return{debugWithMouse:false,init:function(){var e=this;
var f=".touchindicator";
d(document).on("touchstart"+f+"touchmove"+f+"touchend"+f,function(h){var g=h.originalEvent.touches;
e.update(g);
return true
});
if(this.debugWithMouse){d(document).on("mousemove"+f,function(g){g.identifer="fake";
e.update([g]);
return true
})
}},update:function(h){var f={};
for(var g=0;
g<h.length;
g++){var k=h[g];
var j=k.identifier;
var e=c[j];
if(!e){e=a.pop();
if(!e){e=d(document.createElement("div")).css(b);
d("body").append(e)
}}f[j]=e;
e.offset({left:k.pageX-20,top:k.pageY-20});
e.css("visibility","visible")
}for(j in c){if(c.hasOwnProperty(j)&&!f[j]){e=c[j];
e.css("visibility","hidden");
a.push(e)
}}c=f
}}
}));
(function(a){if(typeof module==="object"&&module.exports){module.exports=a()
}else{var b=window.Granite=window.Granite||{};
b.OptOutUtil=a()
}}(function(b){function a(c){if(String.prototype.trim){return c.trim()
}return c.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")
}return(function(){var c={};
var d=[];
var e=[];
c.init=function(f){if(f){d=f.cookieNames||[];
e=f.whitelistCookieNames||[]
}else{d=[];
e=[]
}};
c.getCookieNames=function(){return d
};
c.getWhitelistCookieNames=function(){return e
};
c.isOptedOut=function(){var h=document.cookie.split(";");
for(var g=0;
g<h.length;
g++){var f=h[g];
var j=a(f.split("=")[0]);
if(c.getCookieNames().indexOf(j)>=0){return true
}}return false
};
c.maySetCookie=function(f){return !(c.isOptedOut()&&c.getWhitelistCookieNames().indexOf(f)===-1)
};
return c
}())
}));
Granite.OptOutUtil.init(window.GraniteOptOutConfig);
Granite.HTTP.detectContextPath();

}
/*
     FILE ARCHIVED ON 21:22:24 Jun 15, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:36:29 Apr 14, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  load_resource: 330.617 (2)
  xauthn.chkprivs: 55.686
  xauthn.identify: 88.663
  exclusion.robots.policy: 144.667
  RedisCDXSource: 0.611
  esindex: 0.014
  PetaboxLoader3.resolve: 116.991 (3)
  LoadShardBlock: 72.431 (3)
  PetaboxLoader3.datanode: 232.199 (5)
  exclusion.robots: 144.68
  CDXLines.iter: 35.496 (3)
  captures_list: 516.699
*/