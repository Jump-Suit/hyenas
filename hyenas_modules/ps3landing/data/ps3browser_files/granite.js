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

(function(c,b){var a;
b.Granite=b.Granite||{};
b.Granite.$=b.Granite.$||c;
b._g=b._g||{};
b._g.$=b._g.$||c;
a=Granite.HTTP;
c.ajaxSetup({externalize:true,encodePath:true,hook:true,beforeSend:function(e,d){if(typeof G_IS_HOOKED==="undefined"||!G_IS_HOOKED(d.url)){if(d.externalize){d.url=a.externalize(d.url)
}if(d.encodePath){d.url=a.encodePathOfURI(d.url)
}}if(d.hook){var f=a.getXhrHook(d.url,d.type,d.data);
if(f){d.url=f.url;
if(f.params){if(d.type.toUpperCase()==="GET"){d.url+="?"+c.param(f.params)
}else{d.data=c.param(f.params)
}}}}},statusCode:{403:function(d){if(d.getResponseHeader("X-Reason")==="Authentication Failed"){a.handleLoginRedirect()
}}}});
c.ajaxSettings.traditional=true
}(jQuery,this));
(function(a){if(window.Granite.csrf){return
}window.Granite.csrf=a(window.Granite.HTTP)
}(function(m){function b(){this._handler=[]
}b.prototype={then:function(t,s){this._handler.push({resolve:t,reject:s})
},resolve:function(){this._execute("resolve",arguments)
},reject:function(){this._execute("reject",arguments)
},_execute:function(s,t){if(this._handler===null){throw new Error("Promise already completed.")
}for(var u=0,v=this._handler.length;
u<v;
u++){this._handler[u][s].apply(window,t)
}this.then=function(x,w){(s==="resolve"?x:w).apply(window,t)
};
this._handler=null
}};
function e(t){var u=document.location.host;
var w=document.location.protocol;
var v="//"+u;
var s=w+v;
return(t===s||t.slice(0,s.length+1)===s+"/")||(t===v||t.slice(0,v.length+1)===v+"/")||!(/^(\/\/|http:|https:).*/.test(t))
}var p=":cq_csrf_token";
var g="CSRF-Token";
var k=m.externalize("/libs/granite/csrf/token.json");
var j;
var r;
function o(s){if(window.console){console.warn("CSRF data not available;The data may be unavailable by design, such as during non-authenticated requests: "+s)
}}function n(){var s=new b();
j=s;
var t=new XMLHttpRequest();
t.onreadystatechange=function(){if(t.readyState===4){try{var v=JSON.parse(t.responseText);
r=v.token;
s.resolve(r)
}catch(u){o(u);
s.reject(t.responseText)
}}};
t.open("GET",k,true);
t.send();
return s
}function d(){var t=new XMLHttpRequest();
t.open("GET",k,false);
t.send();
try{return r=JSON.parse(t.responseText).token
}catch(s){o(s)
}}function l(){r=undefined;
n()
}function a(t){var u=t.getAttribute("action");
if(t.method.toUpperCase()==="GET"||(u&&!e(u))){return
}if(!r){d()
}if(!r){return
}var s=t.querySelector('input[name="'+p+'"]');
if(!s){s=document.createElement("input");
s.setAttribute("type","hidden");
s.setAttribute("name",p);
t.appendChild(s)
}s.setAttribute("value",r)
}function i(s){var t=function(v){var u=v.target;
if(u.nodeName==="FORM"){a(u)
}};
if(s.addEventListener){s.addEventListener("submit",t,true)
}else{if(s.attachEvent){s.attachEvent("submit",t)
}}}i(document);
var h=XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open=function(u,s,t){if(u.toLowerCase()!=="get"&&e(s)){this._csrf=true;
this._async=t
}return h.apply(this,arguments)
};
var c=XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.send=function(){if(!this._csrf){c.apply(this,arguments);
return
}if(r){this.setRequestHeader(g,r);
c.apply(this,arguments);
return
}if(this._async===false){d();
if(r){this.setRequestHeader(g,r)
}c.apply(this,arguments);
return
}var s=this;
var t=Array.prototype.slice.call(arguments);
j.then(function(u){s.setRequestHeader(g,u);
c.apply(s,t)
},function(){c.apply(s,t)
})
};
var f=HTMLFormElement.prototype.submit;
HTMLFormElement.prototype.submit=function(){a(this);
return f.apply(this,arguments)
};
if(window.Node){var q=Node.prototype.appendChild;
Node.prototype.appendChild=function(){var s=q.apply(this,arguments);
if(s.nodeName==="IFRAME"){try{if(s.contentWindow&&!s._csrf){s._csrf=true;
i(s.contentWindow.document)
}}catch(t){if(s.src&&s.src.length&&e(s.src)){if(window.console){console.error("Unable to attach CSRF token to an iframe element on the same origin")
}}}}return s
}
}setInterval(function(){},300000);
return{initialised:false,refreshToken:n,_clearToken:l}
}));

}
/*
     FILE ARCHIVED ON 21:22:25 Jun 15, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:36:28 Apr 14, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  esindex: 0.011
  LoadShardBlock: 60.637 (3)
  xauthn.chkprivs: 511.293
  exclusion.robots: 589.05
  xauthn.identify: 77.505
  RedisCDXSource: 1.053
  captures_list: 753.592
  PetaboxLoader3.datanode: 114.165 (5)
  exclusion.robots.policy: 589.039
  load_resource: 167.232 (2)
  CDXLines.iter: 28.278 (3)
  PetaboxLoader3.resolve: 71.55 (2)
*/