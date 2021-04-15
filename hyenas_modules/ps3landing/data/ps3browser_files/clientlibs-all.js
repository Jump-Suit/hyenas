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

(function(e,c,a,g){var d="searchField",f={};
function b(k,h){this.element=k;
this.$element=e(this.element);
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){var m=this,k=this.$element.find(".typeahead"),h,q=this.$element.find(".clear"),o=this.$element.find(".search"),p=e(".lt-ie9").length>0,l=e("#headerSearch"),n=e(".header-search a");
if(p){e.fn.placeholder()
}k.typeahead(m.options.typeaheadconfig.datasets,m.options.typeaheadconfig.placeholders);
q.click(function(){var r=e(this);
k.typeahead("setQuery","");
if(r.hasClass("visible")){r.removeClass("visible")
}if(p){e.fn.placeholder()
}});
k.on("keyup",function(r){clearTimeout(h);
h=setTimeout(function(){if(k.val()!=""){if(!q.hasClass("visible")){q.addClass("visible")
}}else{if(q.hasClass("visible")){q.removeClass("visible");
if(p){e.fn.placeholder()
}}}},200)
});
k.bind("keypress",function(t){var r=(t.keyCode?t.keyCode:t.which);
if(r==13){e(c).trigger("playstation:search",k.val())
}});
o.click(function(){e(c).trigger("playstation:search",k.val())
});
k.bind("typeahead:selected",function(t,r){e(c).trigger("playstation:search",t.currentTarget.value)
});
k.bind("typeahead:initialized ",function(){var r=e.fn.getURLVar("q");
if(r){k.typeahead("setQuery",r);
k.setCursorToTextEnd();
if(!q.hasClass("visible")){q.addClass("visible")
}}})
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(e,c,a,g){var d="search",f={breakPoint:1024,searchPage:"./search_results.html",ingestibleId:"#sony-header"};
function b(k,h){this.element=k;
this.$element=e(this.element);
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
if(this.options.ingestibleId&&this.options.ingestibleId.length>0){this.initStandard()
}else{this.initOverlay()
}}b.prototype.initStandard=function(){var n=this,r=n.options,q=true,l,p=n.$element.find(".header-search");
p.inputField=p.find("input");
p.search=p.find("a");
if("matchMedia" in c){var k=c.matchMedia("(max-width: "+r.breakPoint+"px)");
l=function(o){if(o.matches){q=false
}else{q=true
}};
if(k.addListener){k.addListener(l)
}else{if(k.attachEvent){k.attachEvent(l)
}}l(k)
}else{var h;
l=function(){if(e(c).width()<=n.options.mediaMatchMeasure){q=false
}else{q=true
}};
l();
e(c).resize(function(){if(h){clearTimeout(h)
}h=setTimeout(l,500)
})
}p.search.on("click",function(t){t.preventDefault();
var o=p.inputField.val();
if(q){m(o)
}else{if(o){m(o)
}else{c.location.assign(r.searchPage)
}}});
p.inputField.bind("keypress",function(u){var o=(u.keyCode?u.keyCode:u.which);
if(o==13){var t=p.inputField.val();
e(c).trigger("playstation:search",t)
}});
e(c).bind("playstation:search",function(o,t){m(t)
});
function m(o){if(o!=""){c.location.assign(r.searchPage.replace(/%QUERY/,encodeURIComponent(o)))
}}};
b.prototype.initOverlay=function(){var p=this,k=p.options,x=true,u,q=p.$element.find(".header-search"),w=e("#search-overlay");
q.inputField=q.find("input");
q.search=q.find("a");
w.close=w.find("a.close");
w.search=w.find("a.search-all");
w.typeaheadObj=w.find(".typeahead");
var r=e.fn.getURLVar("q");
if(r){q.inputField.val(r)
}q.inputField.on("keypress",function(z){var A=e(this).val(),o=String.fromCharCode(z.which);
z.preventDefault();
w.css({display:"block"});
l(A,o)
});
e(a).on("keyup",function(o){if(o.keyCode==27){w.close.click()
}});
w.close.on("click",function(z){z.preventDefault();
var o=w.typeaheadObj.val();
w.css({display:"none"});
q.inputField.val(o);
v()
});
w.search.on("click",function(o){e(c).trigger("playstation:search",w.typeaheadObj.val())
});
q.search.on("click",function(o){o.preventDefault();
if(x){if(w.typeaheadObj.val()!=""){y(w.typeaheadObj.val())
}else{w.css({display:"block"});
l(q.inputField.val(),null)
}}else{w.css({display:"block"});
var z=q.inputField.val();
if(z===""){l("a",null)
}l(z,null)
}});
if("matchMedia" in c){var t=c.matchMedia("(max-width: "+k.breakPoint+"px)");
u=function(o){if(o.matches){x=false
}else{x=true
}};
if(t.addListener){t.addListener(u)
}else{if(t.attachEvent){t.attachEvent(u)
}}u(t)
}else{var n;
u=function(){if(e(c).width()<=p.options.mediaMatchMeasure){x=false
}else{x=true
}};
u();
e(c).resize(function(){if(n){clearTimeout(n)
}n=setTimeout(u,500)
})
}if(PDC.Browser.actAsTouch()){q.inputField.on("click",function(o){var z=e(this).val();
w.css({display:"block"});
l(z,null)
})
}else{q.inputField.on("click",function(o){var z=e(this).val();
if(z){w.css({display:"block"});
l(z,null)
}})
}function l(z,o){if(o!==null){z=z+o
}w.typeaheadObj.typeahead("setQuery",z).focus().setCursorToTextEnd();
h()
}function m(o){o=o||c.event;
if(o.preventDefault){o.preventDefault()
}o.returnValue=false
}function h(){if(c.addEventListener){c.addEventListener("DOMMouseScroll",m,false)
}c.onmousewheel=a.onmousewheel=m
}function v(){if(c.removeEventListener){c.removeEventListener("DOMMouseScroll",m,false)
}c.onmousewheel=a.onmousewheel=a.onkeydown=null
}e(c).bind("playstation:search",function(o,z){y(z)
});
function y(o){if(o!=""){try{var A=k.searchPage.replace("%QUERY",encodeURIComponent(o));
c.location.assign(A)
}catch(z){console.log(z)
}}}};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(e,g,h,b){var f="heroActionPanel",d={};
function k(m,l){this.element=m;
this.$element=e(this.element);
this.options=e.extend({},d,l);
this._defaults=d;
this._name=f;
this.init()
}k.prototype.init=function(){var n=PDC.Profile.isLoggedIn();
var l=PDC.Region.getRegion();
if(n){e(".section-user-details").show();
e(".section-signup").hide();
c()
}else{var m=getCookie("psvisitM");
if(!m&&PDC.isUserConsentedCookie()){setCookie("psvisitM","w",".playstation.com")
}if(m){e(".box-signin label").hide();
e(".box-signup label").hide();
e(".welcomeText").css({display:"block"})
}}};
function c(){if(PDC.Profile){var o=PDC.Profile;
var r=o.getOnlineID();
var u=o.getPsPlus();
var p=o.getMediumAvatar();
var n=e(".section-user-details");
var q="";
var t=e("<h3/>");
var w=e("<div/>");
var m=e(".signouttitle").text();
var v=e(".signouttitle").attr("rel");
e(".section-user-details").html("");
if(r){var l=e("<a>").attr("href",v).text(r);
PDC.DigitalDataAPI.event.set.dataTrackWrapperAttribute(l);
t.append(m+" ").append(l)
}t.appendTo(n);
if(p){q=e("<img>").addClass("avatar").attr("alt","Avatar").attr("src",p)
}if(u=="true"){w.addClass("isuser").append(e("<div/>").addClass("plusUser")).append(q)
}else{w.addClass("isuser").append(q)
}w.appendTo(n);
n.addClass("pannelPadding")
}}function a(){if(PDC.Profile){var o=PDC.Profile;
var n=o.getSmallAvatar();
var m=e(".user-icon");
var p=o.getOnlineID();
var l=e(".userhandle");
l.empty().append(e("<h3>").text(p));
if(n){m.empty().append(e("<img>").addClass("avatar").attr("alt","Avatar").attr("src",n))
}}}e.fn[f]=function(l){return this.each(function(){if(!e.data(this,"plugin_"+f)){e.data(this,"plugin_"+f,new k(this,l))
}})
}
})(jQuery,window,document);
(function(e,c,a,g){var d="contextualNav",f={navHeight:"64",hidden:false,excludedBrowsers:[{os:"android",devices:"all"},{os:"ios",devices:["iphone"]}],resizeDelay:250};
function b(k,h){this.element=k;
this.$element=e(k);
this.$navigation=this.$element.find("nav");
this.$levelOneNav=this.$element.find(".header-nav");
this.$sonyBar=this.$element.find("#sony-header-bar");
this.$responsiveList=this.$element.find(".secondary-nav.responsive");
this.$contextualNavControl=this.$element.find(".top-volume");
this.$topTopControl=this.$element.find(".top-volume .nav-link-top ");
this.$volumeControl=this.$element.find(".top-volume .nav-volume ");
this.$audio=this.$element.find("audio");
this.$window=e(c);
this.$pageContainer=e(a.getElementById("page-content"));
if(this.$pageContainer.length==0){this.$pageContainer=e(a.getElementsByTagName("section")[0])
}this.pageContainerPadding=this.$levelOneNav.outerHeight(true);
if(typeof PDC.Browser.getViewport!="undefined"&&"mobile"!=PDC.Browser.getViewport()){this.pageContainerPadding+=this.$sonyBar.outerHeight()
}this.totalPadding=this.pageContainerPadding;
this.$alertBar=e(a.getElementById("main-header")).find(".alert-bar");
this.$cookieMsgBar=e(a.getElementById("main-header")).find(".cookie-message");
this.options=e.extend({},f,h);
this.init()
}b.prototype.init=function(){var v=this,w=v.options,m=v.$audio.length>0,n=false,x=e("html"),G=true,J,h,z=46,p=e(".secondary-nav-container").outerHeight(true),L=e(".secondary-nav.root.with-section li"),H=L.html(),r=800,I=e(".secondary-nav.responsive");
e(".contextual-fixed-table").before(I.clone().addClass("outer-context-nav"));
I=e(".secondary-nav-container > .secondary-nav.responsive");
e(".root").click(function(R){if(!e(".reduced:visible").length){if(PDC.Browser.getViewport()=="mobile"){R.preventDefault()
}var P=e(this),o=e(".nav-bg"),Q=e(".secondary-nav-chevron");
if(P.hasClass("expand")){P.removeClass("expand");
Q.removeClass("expand");
o.removeClass("opaque_bg");
I.removeClass("context-show").css("height","")
}else{P.addClass("expand");
Q.addClass("expand");
o.addClass("opaque_bg");
I.addClass("context-show").css("height",I.children("li.nav-link").not("li.selector").length*z)
}}});
v.$window.scroll(function(){if(I.length){B(v)
}}).resize(function(){if(v.$window.width()>r){I.removeClass("context-show").css("height","")
}});
if(typeof ScrollControl==="undefined"){ScrollControl=new ScrollrControllr()
}var A=getCookie("DisableAlertBar");
var F=getCookie("DisableCookieAlert");
function B(P){if(!e("html").hasClass("mobile-lock")){var Q=P.cookieMsgBarOffset||P.alertBarOffset;
var T=0,S=P.$window.scrollTop(),o=P.$alertBar.is(":visible");
if(P.cookieMsgBarOffset){P.cookieMsgBarOffset=T=P.$cookieMsgBar.outerHeight()
}else{if(o){P.alertBarOffset=T=P.$alertBar.outerHeight()
}}if(T!=null&&T!=Q){P.alertBarOffset=T;
P.totalPadding=P.pageContainerPadding+P.alertBarOffset;
P.$pageContainer.css("padding-top",P.totalPadding+"px")
}if(S>=P.totalPadding){P.$navigation.stop().css("top",-(P.totalPadding)+"px");
P.$pageContainer.stop().css("paddingTop","0");
if(P.$window.width()<=r){if(!I.hasClass("expand")){e("#mobile-menu-wrapper").hide()
}e(".search-box").removeClass("mobile-active-search");
e(".header-search .mobile-search-icon").removeClass("mobile-close")
}P.$navigation.addClass("gotFixed");
try{e("#sb-social-toolbar-root .sb-toolbar-icons__item--selected").click();
e("#sb-profile-dropdown:visible").hide()
}catch(R){}}else{P.$navigation.stop().css("top","0");
P.$pageContainer.stop().css("paddingTop",(P.totalPadding-S)+"px");
P.$navigation.removeClass("gotFixed")
}}}if((v.$cookieMsgBar.length>0)&&(F===null||F!=="YES")){var k=true;
v.cookieMsgBarOffset=v.$cookieMsgBar.outerHeight();
v.$cookieMsgBar.on("click",".close",function(P){P.preventDefault();
v.$cookieMsgBar.remove();
k=false;
v.cookieMsgBarOffset=0;
e(".alert-bar").show();
v.alertBarOffset=v.alertBarOffset||0;
v.totalPadding=v.pageContainerPadding+v.alertBarOffset;
v.$pageContainer.css("padding-top",v.totalPadding+"px");
if(PDC.isUserConsentedCookie()){setCookie("DisableCookieAlert","YES")
}if(PDC.Browser.getViewport()=="mobile"){var o=PDC.Navigation.getHeight();
e("#curtainLeft").css("height","calc(100% - "+o.curtainLeft+"px)");
e("div.menu-wrapper").css("height","calc(100% - "+o.globalMenuWrapper+"px)")
}});
ScrollControl.registerResizeListener(function(){if(k){B(v)
}});
v.$window.load(function(){B(v)
})
}else{v.cookieMsgBarOffset=0
}if((v.$alertBar.length>0)&&(A===null||A!=="YES")){var l=true,q=22,E=PDC.Browser.getViewport();
v.alertBarOffset=v.$alertBar.outerHeight();
if(E=="mobile"){v.alertBarOffset-=q
}v.$alertBar.on("click",".close",function(P){P.preventDefault();
v.$alertBar.remove();
l=false;
v.alertBarOffset=0;
v.cookieMsgBarOffset=v.cookieMsgBarOffset||0;
v.totalPadding=v.pageContainerPadding+v.cookieMsgBarOffset;
v.$pageContainer.css("padding-top",v.totalPadding+"px");
if(PDC.isUserConsentedCookie()){setCookie("DisableAlertBar","YES")
}if(PDC.Browser.getViewport()=="mobile"){var o=PDC.Navigation.getHeight();
e("#curtainLeft").css("height","calc(100% - "+o.curtainLeft+"px)");
e("div.menu-wrapper").css("height","calc(100% - "+o.globalMenuWrapper+"px)")
}});
if(v.cookieMsgBarOffset===0){ScrollControl.registerResizeListener(function(){if(l){B(v)
}});
v.$window.load(function(){B(v)
})
}}else{v.alertBarOffset=0
}var C=v.cookieMsgBarOffset||v.alertBarOffset;
v.totalPadding=v.pageContainerPadding+C;
v.$pageContainer.css("padding-top",v.totalPadding+"px");
var t=0;
e(".contextual-fixed-table .secondary-nav").each(function(){t+=e(this).outerWidth(true)
});
t+=v.$contextualNavControl.outerWidth(true)+40;
if(G){if(!Modernizr.touch){ScrollControl.registerScrollListener(function(){if(!e("html").hasClass("mobile-lock")){var R=arguments[0];
if(R<v.totalPadding){var P=R*-1,o=v.totalPadding-R;
v.$navigation.hidden=false;
v.$navigation.stop().css("top",P+"px");
v.$pageContainer.stop().css("paddingTop",o+"px")
}else{if(v.$navigation.hidden==false){v.$navigation.hidden=true;
var Q=v.totalPadding*-1;
if(v.$navigation.offset().top!==Q){v.$navigation.stop().css("top",Q+"px");
v.$pageContainer.stop().css("paddingTop","0px")
}}}x.trigger("scrollslider")
}},v.$navigation)
}else{var N=true,u;
e(a).bind("touchmove",function(){if(u){c.clearTimeout(u)
}u=c.setTimeout(function(){if(!e("html").hasClass("mobile-lock")){var P=e(c).scrollTop(),o=v.totalPadding*-1;
if(P>=v.totalPadding&&N){if(Modernizr.csstransitions){v.$navigation.stop().css({top:o+"px"})
}else{v.$navigation.stop().animate({top:o+"px"},600)
}N=false
}if(P<v.totalPadding&&!N){if(Modernizr.csstransitions){v.$navigation.stop().css({top:"0px"})
}else{v.$navigation.stop().animate({top:"0px"},600)
}N=true
}}},300)
})
}}if(G){v.bWindowLoadNotTriggered=true;
var M=function(o){var P=e(c).scrollTop();
if(P==0){return
}else{v.bWindowLoadNotTriggered=false
}if(P>=o.totalPadding){o.$navigation.stop().animate({top:(o.totalPadding*-1)+"px"},800);
o.$pageContainer.stop().animate({paddingTop:"0px"},800)
}};
e(c).load(function(){if(v.bWindowLoadNotTriggered){M(v)
}else{return
}});
e(c).one("scroll",function(){if(v.bWindowLoadNotTriggered){M(v)
}else{return
}})
}if(Modernizr.audio&&m){if(e("html").hasClass("mobile")){v.$volumeControl.removeClass("vol-on")
}v.$volumeControl.css({display:"table-cell"}).click(function(){var o=e(this);
if(o.hasClass("vol-on")){v.$audio[0].pause();
o.removeClass("vol-on")
}else{v.$audio[0].play();
o.addClass("vol-on")
}return false
});
t+=v.$volumeControl.outerWidth(true)
}e(".contextual-fixed-table .responsive").on("click",".selector",function(o){o.preventDefault();
if(n===true){D()
}else{y()
}});
if(e(c).width()<=t){K()
}this.$responsiveList.removeClass("width-calculation");
ScrollControl.registerResizeListener(function(){if(v.$window.width()<=t||O){K()
}else{if(v.$responsiveList.hasClass("reduced")){n=false;
v.$responsiveList.removeClass("reduced").removeAttr("style")
}}});
function K(){var P=e(".contextual-fixed-table .selector span"),o=e(".contextual-fixed-table .secondary-nav .nav-link.selected a span");
v.$responsiveList.addClass("reduced");
J=v.$responsiveList.css({height:"auto"}).height();
v.$responsiveList.css({height:p+"px"});
P.text(o.text()).width(o.width());
if(!o.text()){P.text("Overview")
}}function y(){e(".selector").addClass("expand");
e(".selector").parent(".secondary-nav").addClass("ellaborated-menu");
v.$responsiveList.animate({height:J+"px"},400,function(){n=true;
x.bind("click",function(o){D()
});
x.bind("scrollslider",function(o){D()
});
x.bind("touchmove",function(o){if(e(o.target).parents(".secondary-nav.responsive").length==0){D()
}})
})
}function D(){if(n===true){e(".selector").removeClass("expand");
e(".selector").parent(".secondary-nav").removeClass("ellaborated-menu");
v.$responsiveList.animate({height:p+"px"},400);
n=false;
x.unbind("click");
x.unbind("touchmove");
x.unbind("scrollslider")
}}var O=e(".contextual-fixed-table .secondary-nav .nav-link",this.element).not(".selector").length>9;
if(O){K()
}};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(e,c,a,g){var d="CC023_contentTile",f={};
function b(k,h){this.element=k;
this.$element=e(this.element);
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){var h=this.$element;
var k=h.find(".text-container").find(":header");
var l=h.find(".text-container").find("p");
var m=h.find(".img-holder").find(".title");
if(m.length>0){m.html(m.html().replace(/(\w),(\w)/g,"$1, $2"))
}if(k.height()>50){k.addClass("ellipsis")
}if(l.height()>70){l.addClass("ellipsis")
}};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
function ContentTile(a){this.image=a.image;
this.url=a.url;
this.platform=a.platform;
this.title=a.title;
this.description=a.description;
this.onclick=a.onclick
}ContentTile.prototype.appendTo=function(a){$(a).append(this.show())
};
ContentTile.prototype.show=function(){return ContentTile.template.replace(/@image/g,this.image).replace(/@url/g,this.url).replace(/@platform/,this.platform).replace(/@title/,this.title).replace(/@onclick/,this.onclick).replace(/@description/,this.description)
};
ContentTile.template='<div class="item">    <!-- CC023_Content Tile -->    <div class="CC023-Content-Tile">        <a 	onclick="@onclick" class="tile-link" href="@url">            <div class="img-holder">                <img src="@image" class="standard">                <span class="title">@platform</span>            </div>            <div class="text-container">                <div class="header-wrap">                    <h3>@title</h3>                 </div>                <div class="text-wrap">                     <p>@description</p>                 </div>            </div>        </a>    </div>    <!-- END CC023_Content Tile --></div>';
(function(e,c,a,g){var d="waysToBuyPreOrder",f={hiddenSection:"div.hidden-wrap"};
function b(k,h){this.element=k;
this.parent=k.parentNode;
this.elementHeight=0;
this.timeoutId=0;
this.wasVisible=null;
this.isNowVisible=false;
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this._isExcludedBrowser=e(".lt-ie8").length>0;
this.init()
}b.prototype.init=function(){var l=this,n=e(this.element),m=n.find(this.options.elementSelector);
n.find("div.hidden-wrap").css("aria-expanded","false");
var k=this.options.hiddenSection;
var h=function(){n.find(".box.additional-box.expandable").each(function(){var o=e(this);
id=o.parents(".game").attr("id");
if(o.attr("aria-expanded")=="true"){b.hideAll("#"+id+" div.hidden-wrap");
o.removeClass("up");
o.attr("aria-expanded","false").find("span")
}else{b.revealAll("#"+id+" div.hidden-wrap");
o.addClass("up");
o.attr("aria-expanded","true").find("span")
}})
};
n.find(".box.additional-box.expandable").on("click",function(o){o.preventDefault();
h()
});
b.hideAll("div.hidden-wrap");
if(n.find("div").length==0&&this.options.hide){n.hideSingleComponentSection()
}};
b.hideAll=function(h){e(h).slideUp()
};
b.revealAll=function(h){e(h).slideDown()
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(c,b,a,d){c.visitList=function(g,f){var k={};
var h=this;
h.settings={};
var e=c(g),g=g;
h.init=function(){h.settings=c.extend({},k,f);
var p=h.settings,n=e.find("ul"),m=e.find("ul").children(),l=e.find("div.more-link");
h.resizeTiles();
l.attr("aria-expanded","false").click(function(q){q.preventDefault();
var o=c(this);
if(o.attr("aria-expanded")=="true"){h.hideAll(n,m);
o.attr("aria-expanded","false").find("span").removeClass("showLess").html(Adobe.I18n.get("MORE"))
}else{h.revealAll(n,m);
o.attr("aria-expanded","true").find("span").addClass("showLess").html(Adobe.I18n.get("LESS"))
}});
h.hideAll(n,m)
};
h.resizeTiles=function(){var m=122;
if(c(b).width()>=700){var l=e.clone();
l.css({display:"block",visibility:"hidden"}).appendTo("body").find(".wrapper ul li > a .content").each(function(){var o=c(this),n=o.height();
padding=37;
o.parent().css("display","");
m=n+padding>m?n+padding:m
});
l.remove()
}else{m="0"
}e.find(".wrapper ul li > a").css("minHeight",m)
};
h.hideAll=function(n,m){var l=Modernizr.touch,o="hideItem";
if(c(b).width()<=700){o="mobileItem"
}c.each(m,function(p,q){if(c(this).hasClass(o)==true){if(l){this.style.display="none"
}else{c(this).slideUp()
}}})
};
h.revealAll=function(n,m){var l=Modernizr.touch,o="hideItem";
if(c(b).width()<=700){o="mobileItem"
}c.each(m,function(p,q){if(c(this).hasClass(o)==true){if(l){this.style.display="block"
}else{c(this).slideDown()
}}})
};
h.init()
};
c.fn.visitList=function(e){return this.each(function(){if(d==c(this).data("visitList")){var f=new c.visitList(this,e);
c(this).data("visitList",f)
}})
}
})(jQuery,window,document);
/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 * Original code (with comments) can be found at:
 * http://coding.smashingmagazine.com/2011/10/11/essential-jquery-plugin-patterns/
 */
;
(function(e,c,a,g){var d="twoColumnExpandable",f={textContainerSelector:".content-block",toggleButtonSelector:".expand-button",openClassName:"content-open",closedClassName:"content-closed",imgClassName:".image-bck-background",contentClassName:".copy-block-expandableDIv"};
function b(k,h){this.element=k;
this.parent=k.parentNode;
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.$thisElement=e(this.element);
this.$additionalTextContainer=null;
this.$imgClassName=this.options.imgClassName;
this.$contentClassName=this.options.contentClassName;
this._isExcludedBrowser=e(".lt-ie8").length>0;
this.$contentHeight=e(".copy-block-expandableDIv").outerHeight();
this.init()
}b.prototype.init=function(){var m=this,k=this.$thisElement.find(this.options.textContainerSelector),l=this.$imgClassName,h=this.$contentClassName;
if(k.length!=2){return
}this.$additionalTextContainer=k.eq(1).hide();
if(!this._isExcludedBrowser){this.$thisElement.addClass(this.options.closedClassName);
this.$thisElement.on("click",this.options.toggleButtonSelector,function(){m.$additionalTextContainer.slideToggle("fast",function(){var r=e(this),o=m.options.openClassName,p=m.options.closedClassName,n=e(m.$thisElement.parent().find("img")).outerHeight(true);
l=m.$imgClassName;
var q=m.$thisElement.parent().find(h);
if(r.is(":visible")){m.$thisElement.removeClass(p);
m.$thisElement.addClass(o);
e(m.$thisElement.parent().find(l)).css("height",n)
}else{m.$thisElement.removeClass(o);
m.$thisElement.addClass(p);
e(m.$thisElement.parent().find(l)).css("height",q.height())
}})
});
this.setHeightHandler()
}else{return
}};
b.prototype.setHeightHandler=function(){var l=this;
$contentClassName=l.$contentClassName;
$imgClassName=l.$imgClassName;
var k=l.$thisElement.parent().find($contentClassName).outerHeight(true);
var h=e(".expand-button").outerHeight(true);
e(l.$thisElement.parent().find($imgClassName)).css({overflow:"hidden",height:k})
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(f,c,a,h){var e="twinComparison",g={scrollTime:500,videoIndex:0,mediaType:"",mediaId:""};
function b(l,k){this.element=l;
this.parent=l.parentNode;
this.options=f.extend({},g,k);
this._defaults=g;
this._name=e;
this.element=f(this.element);
this.init()
}function d(m){for(var l=0;
l<m.link.length;
l++){if(m.link[l].rel=="related"){var k=m.link[l].href;
return k.replace(/.*\//,"").replace(/\?.*$/,"")
}}return"unknown"
}b.prototype.init=function(){var p=this.options,n=this.element,l=n.find(".twinComp"),m=l.parent("a").attr("data-playlist-id");
function k(o){f.getJSON("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId="+m+"&key=AIzaSyAKRzl4h3hhO1X3imjDNBNFkgqmiBhzk_U&alt=json&callback=?",function(r){var q=r.items[p.videoIndex];
ytJSON=true;
o.each(function(){o=f(this);
var v=q.snippet.resourceId.videoId,u="https://www.youtube.com/watch?v="+v;
var t="no";
if(f(q).isVideoItemAgeGated){if(f(q).isVideoItemAgeGated()){t="yes"
}}o.find(".button").parent().append('<img src="https://img.youtube.com/vi/'+v+'/hqdefault.jpg" class="ytImage" />');
o.parent("a").attr("href",u).addClass("lb_youtube").attr("data-agegating",t).removeClass("lb_ytPlaylist");
if(f.fn.pdcLightbox){o.parent("a").pdcLightbox()
}})
})
}if(m!=h){k(l)
}};
f.fn[e]=function(k){return this.each(function(){if(!f.data(this,"plugin_"+e)){f.data(this,"plugin_"+e,new b(this,k))
}})
}
})(jQuery,window,document);
/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 * Original code (with comments) can be found at:
 * http://coding.smashingmagazine.com/2011/10/11/essential-jquery-plugin-patterns/
 */
;
(function(e,c,a,f){var d="thumbnailTabs";
function b(h,g){this.$element=e(h);
this.lock=false;
this.init()
}b.prototype.init=function(){var g=this;
g.$element.find(".tabs .tab").on("click",function(l){l.preventDefault();
if(!g.lock){g.lock=true;
var k=e(this);
var h=k.data("tab-id");
if(h){g.$element.find(".selected-tab").removeClass("selected-tab");
k.addClass("selected-tab");
g.$element.find(".selected").fadeOut("fast",function(){e(this).removeClass("selected");
g.$element.find("."+h).fadeIn("slow",function(){e(this).addClass("selected");
g.lock=false
})
})
}}})
};
e.fn[d]=function(g){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,g))
}})
}
})(jQuery,window,document);
(function(e,c,a,g){var d="scrapeContent",f={};
function b(k,h){this.element=k;
this.$element=e(this.element);
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){var k=this;
var l=k.options;
k.$element.find("a").each(function(n){var o=e(this);
o.remove()
});
var h=k.$element.html();
h=k.linkify(h);
k.$element.html(h);
var m;
k.$element.find("h2").each(function(n){if(n==0){m=e(this).text();
e(this).replaceWith("")
}});
k.replaceHeadings(m)
};
b.prototype.linkify=function(l){var n=/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
var k=l.replace(n,'<a href="$1" target="_blank">$1</a>');
var m=/(^|[^\/])(www\.[\S]+(\b|$))/gim;
var k=k.replace(m,'$1<a href="http://$2" target="_blank">$2</a>');
var h=/(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/gim;
var k=k.replace(h,'<a href="mailto:$1">$1</a>');
return k
};
b.prototype.replaceHeadings=function(l){var m=e(".cm114-heroBanner").find(".centering-wrapper");
var h=e(".cm077-heroBanner").find(".content-wrap > .copy");
var n=e(".huge-hero-banner").find(".CC024-hero-title-lockup");
if(m&&m.length){var o=e(m).find(".headers");
if(o&&o.length){var k=o.find("h2");
if(k&&k.length){k.text(l)
}else{e("<h2>").text(l).appendTo(o)
}}else{var o=e("<div>").attr({"class":"headers"});
e("<h2>").text(l).appendTo(o);
o.appendTo(m)
}}else{if(h&&h.length){var o=e(h).find(".basic-header");
if(o&&o.length){var k=o.find("h2");
if(k&&k.length){k.text(l)
}else{e("<h2>").text(l).appendTo(o)
}}else{var o=e("<div>").attr({"class":"basic-header"});
e("<h2>").text(l).appendTo(o);
o.appendTo(h)
}}else{if(n&&n.length){var o=e(n).find(".wrapper");
if(o&&o.length){var k=o.find("h2");
if(k&&k.length){k.text(l)
}else{e("<h2>").text(l).appendTo(o)
}}else{var o=e("<div>").attr({"class":"wrapper"});
e("<h2>").text(l).appendTo(o);
o.appendTo(n)
}}}}};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(e,c,a,g){var d="threeStepBanner",f={};
function b(l,k){this.element=l;
this.$element=e(this.element);
this.options=e.extend({},f,k);
this.elmId=e(this.element).attr("id");
this._defaults=f;
this._name=d;
var h=this;
h.init()
}b.prototype.init=function(){var l=this;
var h=l.options.imagePath;
var k=new Image;
k.onload=function(){var m=k.height;
if(m>725){l.$element.addClass("parallaxer");
l.$element.find(".wide div").css({height:m});
l.$element.parallaxer()
}};
k.src=l.$element.find(".wide div").css("backgroundImage").replace(/url\(\"?|\"?\)$/ig,"");
e(c).on("load orientationchange",function(){if(e(c).width()<740){e(".three-step-banner").each(function(){var o=e(this).find(".simple-block").height();
if(o>380){var n=o-380;
var m=e(this).height();
e(this).css("height",n+m)
}})
}})
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(d,c,a,f){var e={enabledClassName:"parallaxer",wideImageParentSelector:".wide div",wideImageSelector:".wide"},b={init:function(g){var h=d.extend(e,g);
return this.each(function(){var q=d(this);
if(!Modernizr.touch&&q.hasClass(h.enabledClassName)){if(typeof ScrollControl==="undefined"){ScrollControl=new ScrollrControllr()
}var r=q.find(h.wideImageParentSelector),l=q.find(h.wideImageSelector).outerHeight(),p=r.outerHeight(),k=d(c).height(),o=q.offset().top-(k),t=o+k+l,m=t-o,n=(p-l);
r.css("top",-n);
ScrollControl.registerScrollListener(function(){if(r.is(":visible")){r.css("top",-n+(n/m)*(arguments[0]-o))
}else{}},q)
}else{}})
}};
d.fn.parallaxer=function(g){return b.init.apply(this,arguments)
}
})(jQuery,window,document);
(function(e,c,a,g){var d="CN17_sectionCarousel",f={};
function b(k,h){this.element=k;
this.$element=e(this.element);
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){this.$element.slick({dots:true})
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(e,c,a,g){var d="searchResults",f={defaultPath:"/etc/designs/pdc/clientlibs_search/images/icon-default.jpg"};
function b(k,h){this.element=k;
this.$element=e(this.element);
this.$key=e(this.element).attr("id");
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){var k=e(".result-desc");
k.dotdotdot();
e(c).resize(function(){k.dotdotdot()
});
var l=e(".result-image"),h=this.options.defaultPath;
l.each(function(){var n=this.style.backgroundImage.replace(/"/g,"").replace(/url\(|\)$/ig,""),o=h,m=this.dataset.index-1,p=new Image();
p.onerror=function(){l[this.dataset.index].style.backgroundImage="url("+o+")"
};
p.src=n;
p.dataset.index=m
})
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(e,c,a,g){var d="searchBox",f={queryParameter:null};
function b(k,h){this.element=k;
this.$element=e(this.element);
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){this.setupFormSubmission()
};
b.prototype.setupFormSubmission=function(){var l=this.$element.find(".form").data("href"),n=this.options.queryParameter,h=this.$element.find('input[type="search"]'),m=this.$element.find('input[type="submit"]'),k=function(p,r,q){var o=(p.indexOf("?")>0)?"&":"?";
return p+o+r+"="+q
};
h.on("keypress",function(p){var o=(p.keyCode||p.which);
if(o==13){m.trigger("click")
}});
m.on("click",function(q){q.preventDefault();
var o,p=h.val();
if(p!=""){o=k(l,n,p);
c.location.href=o
}})
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(e,c,a,g){var d="scrapeContent",f={};
function b(k,h){this.element=k;
this.$element=e(this.element);
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){var l=this;
var m=l.options;
l.$element.find("a").each(function(r){var t=e(this);
t.remove()
});
var n=e("script#content_"+l.element.id).html();
n=l.linkify(n.substring(n.indexOf("/*")+2,n.lastIndexOf("*/")));
l.$element.html(n);
l.$element.find("a").each(function(){var r=e(this);
if(e.trim(r.text())=="Document selection"||e.trim(r.text())=="Country / Region selection"){r.remove()
}});
var h;
l.$element.find("h3").each(function(r){h=e(this).text();
if(h.indexOf("Your California Privacy Rights")!==-1){e(this).replaceWith('<div class="privacyRight"><a name="california_privacy_rights"></a></div><h3>Your California Privacy Rights</h3>')
}});
var o;
var p=e(".cm114-heroBanner").find(".centering-wrapper");
var k=e(".cm077-heroBanner").find(".content-wrap > .copy");
var q=e(".huge-hero-banner").find(".CC024-hero-title-lockup");
l.$element.find("h2").each(function(r){if(r==0){o=e(this).text();
if((p&&p.length)||(k&&k.length)||(q&&q.length)){e(this).replaceWith("")
}}});
l.replaceHeadings(o)
};
b.prototype.linkify=function(l){var n=/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
var k=l.replace(n,'<a href="$1" target="_blank">$1</a>');
var m=/(^|[^\/])(www\.[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
k=k.replace(m,'$1<a href="http://$2" target="_blank">$2</a>');
k=k.replace(/ href=\"<a href=\"/gim,' href="');
k=k.replace(/ src=\"<a href=\"/gim,' src="');
k=k.replace(/\" target=\"_blank\">(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])<\/a>\"/gim,'"');
var h=/(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/gim;
k=k.replace(h,'<a href="mailto:$1">$1</a>');
return k
};
b.prototype.replaceHeadings=function(l){var m=e(".cm114-heroBanner").find(".centering-wrapper");
var h=e(".cm077-heroBanner").find(".content-wrap > .copy");
var n=e(".huge-hero-banner").find(".CC024-hero-title-lockup");
if(m&&m.length){var o=e(m).find(".headers");
if(o&&o.length){var k=o.find("h2");
if(k&&k.length){k.text(l)
}else{e("<h2>").text(l).appendTo(o)
}}else{var o=e("<div>").attr({"class":"headers"});
e("<h2>").text(l).appendTo(o);
o.appendTo(m)
}}else{if(h&&h.length){var o=e(h).find(".basic-header");
if(o&&o.length){var k=o.find("h2");
if(k&&k.length){k.text(l)
}else{e("<h2>").text(l).appendTo(o)
}}else{var o=e("<div>").attr({"class":"basic-header"});
e("<h2>").text(l).appendTo(o);
o.appendTo(h)
}}else{if(n&&n.length){var o=e(n).find(".wrapper");
if(o&&o.length){var k=o.find("h2");
if(k&&k.length){k.text(l)
}else{e("<h2>").text(l).appendTo(o)
}}else{var o=e("<div>").attr({"class":"wrapper"});
e("<h2>").text(l).appendTo(o);
o.appendTo(n)
}}}}};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(c,b,a,d){jQuery.fn.ninetile=function(e){var f=c(this);
if(c.fn.pdcLightbox){c.each(f.find("li.tile a.lb_iframe_rtg"),function(g,h){c(h).pdcLightbox()
})
}c.each(f.find("li.tile"),function(g,h){c(h).on("click",function(k){if(c(this).find("a.lb_iframe_rtg").length>=0){c(this).find("a.lb_iframe_rtg")[0].click()
}})
})
}
})(jQuery,window,document);
(function(c,b,a,d){jQuery.fn.player_stories=function(o){(function(t,p,u){var r,q=t.getElementsByTagName(p)[0];
if(t.getElementById(u)){return
}r=t.createElement(p);
c(".fb-like").each(function(){if(a.location.href.indexOf("?")>0){c(this).attr("data-href",a.location.href.substr(0,a.location.href.indexOf("?")))
}});
r.id=u;
r.src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3&appId=5437122869";
q.parentNode.insertBefore(r,q)
}(a,"script","facebook-jssdk"));
b.twttr=(function(v,q,w){var p,u,r=v.getElementsByTagName(q)[0];
if(v.getElementById(w)){return
}u=v.createElement(q);
u.id=w;
u.src="https:https://platform.twitter.com/widgets.js";
r.parentNode.insertBefore(u,r);
return b.twttr||(p={_e:[],ready:function(t){p._e.push(t)
}})
}(a,"script","twitter-wjs"));
var f=c(this);
f.find("a.more-link").on("click",function(p){p.preventDefault();
e()
});
var k=10;
if(o.pageSize){k=o.pageSize
}f.find("li.filter").on("click",function(p){p.preventDefault();
m(c(this).data("st"))
});
c(b).on("filterChange",function(p,q){m(q.state)
});
var h=f.find("a.more-link");
var g=f.find("ul.storylist");
var n=g.children("li").last();
c("ul.storylist li:last-child").css({"padding-bottom":0});
var m=function(p){h.attr("data-page","1");
h.attr("data-state",p);
g.empty();
e()
};
var e=function(){var v=h.attr("data-page");
var u=h.attr("data-state");
if(v==d||v<1){v=1
}var r=(v*k)-(k-1);
var p=(v*k);
var t=1;
if(u&&u!="ALL"){for(var q=r-1;
q<p&&q<o.stories[u].length;
q++){l((o.stories[u])[q])
}FB.XFBML.parse();
twttr.widgets.load();
if(p>=o.stories[u].length){h.hide()
}else{h.show()
}}else{c.each(o.stories,function(w,x){c.each(x,function(y,z){if(t>=r&&t<=p){l(z)
}t++;
if(t>p){return
}});
if(t>p){return
}});
FB.XFBML.parse();
twttr.widgets.load();
if(p>=o.storiesCount){h.hide()
}else{h.show()
}}h.attr("data-page",parseInt(v)+1)
};
var l=function(u){var p="lb_image";
var t=u.image;
var x=u.image;
if(u.iconClass=="video"){p="lb_youtube";
t="https://www.youtube.com/watch?v="+u.videoRef;
x="https://img.youtube.com/vi/"+u.videoRef+"/maxresdefault.jpg"
}var r=c("<a>").addClass(p).attr("target","_blank").attr("href",t).append(c("<p>").addClass(u.iconClass)).append(c("<img>").addClass("main").attr("src",x));
r.pdcLightbox();
var v=encodeURI(c("#"+u.shareUrlKey).data("href"));
var q=c("<div>").addClass("social").append(c("<div>").addClass("fbwrapper").append(c("<div>").addClass("fb-like").attr("data-href",v).attr("data-layout","button_count").attr("data-action","like").attr("data-show-faces","false").attr("data-share","false"))).append(c("<div>").addClass("twitterwrapper").append(c("<a>").addClass("twitter-share-button").attr("href","https://twitter.com/share").attr("data-url",v).text("Tweet")));
var w=c("<li>").addClass("story").append(r).append(c("<p>").addClass("location").text(u.city+", "+u.stateDisplayName)).append(c("<p>").addClass("name").text(u.name)).append(c("<p>").addClass("description").text(u.description)).append(q);
g.append(w)
};
e()
}
})(jQuery,window,document);
(function(e,c,a,g){var d="player_viewall_filter",f={};
function b(k,h){this.element=k;
this.$element=e(this.element);
this.$key=e(this.element).attr("id");
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){this.$element.find("select.filters").selectbox({effect:"fade",speed:400,onChange:function(n,k){var m={},l=e(this).attr("data-filter-key");
m[l]=n;
e(c).trigger("filterChange",m)
}});
var h=this;
e(c).on("newfacets",function(o,q){h.clearAllCounts();
if(q&&q.release_cat){for(var k=0,n=q.release_cat.length;
k<n;
k++){var m=q.release_cat[k];
var p=m.value;
var l=m.count;
h.setFacets(p,l)
}}})
};
b.prototype.clearAllCounts=function(){for(var h=0;
h<this.options.facetCountType.length;
h++){var k=this.options.facetCountType[h];
this.setFacets(k,0)
}};
b.prototype.setFacets=function(h,l){var k=e('#filter-tab-container .grouping a[data-filter-value="'+h+'"]');
l=(l+"").replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,");
var m=k.text();
if(m){k.text(m.replace(/[\d,]+/g,l))
}};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(c,b,a,d){jQuery.fn.playerstory=function(e){var f=c(this);
(function(l,g,m){var k,h=l.getElementsByTagName(g)[0];
if(l.getElementById(m)){return
}k=l.createElement(g);
c(".fb-like").each(function(){if(a.location.href.indexOf("?")>0){c(this).attr("data-href",a.location.href.substr(0,a.location.href.indexOf("?")))
}});
k.id=m;
k.src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3&appId=5437122869";
h.parentNode.insertBefore(k,h)
}(a,"script","facebook-jssdk"));
b.twttr=(function(m,h,n){var g,l,k=m.getElementsByTagName(h)[0];
if(m.getElementById(n)){return
}l=m.createElement(h);
l.id=n;
l.src="https:https://platform.twitter.com/widgets.js";
k.parentNode.insertBefore(l,k);
return b.twttr||(g={_e:[],ready:function(o){g._e.push(o)
}})
}(a,"script","twitter-wjs"))
}
})(jQuery,window,document);
(function(e,c,a,g){var d="rtgInteractiveMap",f={};
function b(k,h){this.element=k;
this.$element=e(this.element);
this.$key=e(this.element).attr("id");
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){var p;
var n=(new Date).getTime();
var h=n;
e(".rtgcircle").each(function(){var t=Date.parse(e(this).attr("data-startdate"));
var q=Date.parse(e(this).attr("data-enddate"));
var r=t+86400000;
if(n>=t&&n<=q){h=0;
p=e(this)
}else{if(n>t&&n<r){h=0;
p=e(this)
}else{if(n<=t&&((t-n)<h)){h=t-n;
p=e(this)
}}}e(this).hover(function(){var u=e(this).parent().siblings(".rtginfo");
k(u,e(this))
},function(){var u=e(this).parent().siblings(".rtginfo");
m(u)
});
e(this).on("click",function(){if(!e(this).hasClass("selected")){e(this).closest(".rtgmap").find(".selected").each(function(){e(this).removeClass("selected")
});
e(this).addClass("selected");
var u=e(this).parent().siblings(".rtginfo");
k(u,e(this))
}})
});
p.addClass("default selected").removeClass("rtgcircle");
p.css("left",(parseInt(p.css("left"))-21)+"px");
l(p.closest(".mapwrapper"));
e(".rtgInteractiveMap").each(function(){e(this).mouseup(function(r){var q=e(".rtgimage");
if(q.is(r.target)){e(this).find(".selected").removeClass("selected");
l(e(this))
}})
});
e(".rtgclosebutton").on("click",function(){e(this).closest(".rtginfo").siblings(".rtgmap").find(".rtgTruck").each(function(){e(this).remove()
});
l(e(this).closest(".rtginfo"))
});
function k(u,x){var v=u.find(".rtgcity");
v.attr("data-previousCity",v.text());
var t=u.children(".rtgdate");
var q=t.children(".startdate");
t.attr("data-previousStartDate",q.text());
var r=t.children(".enddate");
t.attr("data-previousEndDate",r.text());
var w=u.children(".rtgdescription");
w.attr("data-previousDescription",w.text());
u.children(".rtgcity").text(x.attr("data-city"));
u.children(".rtgdate").empty();
var z=x.attr("data-displayStartDate");
var y=x.attr("data-displayEndDate");
if(y){u.children(".rtgdate").append("<span class='startdate'>"+z+"</span> - <span class='enddate'>"+y+"</span>")
}else{u.children(".rtgdate").append("<span class='startdate'>"+z+"</span>")
}u.children(".rtgdescription").text(x.attr("data-description"))
}function m(t){$rtgCity=t.children(".rtgcity");
$rtgCity.text($rtgCity.attr("data-previousCity"));
$rtgDate=t.children(".rtgdate");
$rtgDate.empty();
var q=$rtgDate.attr("data-previousStartDate");
var r=$rtgDate.attr("data-previousEndDate");
if(r){t.children(".rtgdate").append("<span class='startdate'>"+q+"</span> - <span class='enddate'>"+r+"</span>")
}else{t.children(".rtgdate").append("<span class='startdate'>"+q+"</span>")
}$rtgDescription=t.children(".rtgdescription");
$rtgDescription.text($rtgDescription.attr("data-previousDescription"))
}function o(t){$rtgDate=$infoDiv.children(".rtgdate");
$rtgDate.empty();
var q=$rtgDate.attr("data-previousStartDate");
var r=$rtgDate.attr("data-previousEndDate");
if(r){$infoDiv.children(".rtgdate").append("<span class='startdate'>"+q+"</span> - <span class='enddate'>"+r+"</span>")
}else{$infoDiv.children(".rtgdate").append("<span class='startdate'>"+q+"</span>")
}}function l(t){var u=t.find(".default");
u.addClass("selected");
var v=t.find(".rtginfo");
v.children(".rtgcity").text(u.attr("data-city"));
v.children(".rtgStartDate").text(u.attr("data-displayStartDate"));
v.children(".rtgEndDate").text(u.attr("data-endDate"));
v.children(".rtgdate").empty();
var r=u.attr("data-displayStartDate");
var q=u.attr("data-displayEndDate");
if(q){v.children(".rtgdate").append("<span class='startdate'>"+r+"</span> - <span class='enddate'>"+q+"</span>")
}else{v.children(".rtgdate").append("<span class='startdate'>"+r+"</span>")
}v.children(".rtgdescription").text(u.attr("data-description"))
}};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(c,b,a,d){c.fn.charCount=function(e){var g=c(this).find(".comment");
var h={allowed:300,warning:25,css:"counter",counterElement:"span",cssWarning:"warning",cssExceeded:"exceeded",counterText:""};
var e=c.extend(h,e);
function f(m){var k=c(m).val().length;
var l=e.allowed-k;
if(l<=e.warning&&l>=0){c(m).next().addClass(e.cssWarning)
}else{c(m).next().removeClass(e.cssWarning)
}if(l<0){c(m).next().addClass(e.cssExceeded)
}else{c(m).next().removeClass(e.cssExceeded)
}c(m).next().html(l+" "+e.counterText)
}g.each(function(){c(this).after("<"+e.counterElement+' class="'+e.css+'">'+e.counterText+"</"+e.counterElement+">");
f(this);
c(this).keyup(function(){f(this)
});
c(this).change(function(){f(this)
})
})
}
})(jQuery,window,document);
(function(c,b,a,d){jQuery.fn.reviews_ratings=function(x){var h=c(this);
h.find("a.more-link").on("click",function(y){y.preventDefault();
f()
});
var n=PDC.Profile.getOnlineID();
if(!n){var u=h.find("div.reviewsratings-my-rating");
if(u.find("a")[0]){c(u.find("div.btn")).text(x.signInText)
}}var k=h.find("a.more-link");
var o=h.find("div.total");
var l=h.find("ul.reviews");
var m=l.children("li").last();
c(o).hide();
c(k).hide();
c(l).hide();
c("ul.reviews li:last-child").css({"padding-bottom":0});
var g=h.find(".sort select").selectbox({effect:"fade",speed:400,onChange:function(z,y){r(z)
}});
var r=function(y){k.attr("data-page","1");
k.attr("data-state","reset");
if(y){k.attr("data-sort",y)
}f(false)
};
var p=function(z){var B=z+"=";
var y=a.cookie.split(";");
for(var A=0;
A<y.length;
A++){var C=y[A];
while(C.charAt(0)==" "){C=C.substring(1,C.length)
}if(C.indexOf(B)==0){return C.substring(B.length,C.length)
}}return null
};
var f=function(y){var B=k.attr("data-page");
var z=g.val();
var A=k.attr("data-state");
if(B==d||B<1){B=1
}PDC.ReviewsRatings.getFeedback(x.reviewsServiceUrl,x.gameId,B,z,y,function(H){if(H.gameReviews>0){c(o).show();
c(k).show();
c(l).show();
var L=h.find("div.total h3");
var K=h.find("p.reviewsratings-rating-caption");
var C=K.attr("data-optional-rating-caption");
if(A=="initial"||A=="reset"){L.text(H.gameReviews+" "+L.attr("data-text"));
K.text(C.replace("#",H.gameReviews));
if(n&&n==H.list[0].authorId){var J=h.find("h3.reviewsratings-review-title");
J.text(J.attr("data-optional-review-title"));
var M=h.find("p.reviewsratings-review-caption");
M.text(M.attr("data-optional-review-caption"));
var I=M.attr("data-review-caption-link");
var N=h.find("div.reviewsratings-my-rating");
if(N.find("a")[0]){var E=N.find("a").attr("href");
N.find("a").remove();
N.append(c("<span>").addClass("stars"+H.list[0].reviewRating));
N.append(c("<h3>").text(N.attr("data-my-score-label")));
M.parent().append(c("<a>").attr("href",E).attr("data-review-text",H.list[0].reviewText).attr("data-review-rating",H.list[0].reviewRating).attr("data-review-title",H.list[0].reviewTitle).addClass("reviewsratings-review-edit").text(I).on("click",function(O){q(O,this,{comment:c(this).attr("data-review-text"),rating:c(this).attr("data-review-rating"),title:c(this).attr("data-review-title")})
}))
}else{var D=N.find("span")[0];
if(D){c(D).removeClass();
c(D).addClass("stars"+H.list[0].reviewRating)
}var G=M.parent().find("a")[0];
if(G){c(G).attr("data-review-text",H.list[0].reviewText).attr("data-review-rating",H.list[0].reviewRating).attr("data-review-title",H.list[0].reviewTitle)
}}}}if(A=="initial"){var F=h.find("h3.reviewsratings-rating-title");
F.text(F.attr("data-optional-rating-title"))
}else{if(A=="reset"){c("ul.reviews").empty()
}}c.each(H.list,function(T,X){if(!(B>1&&(n&&n==X.authorId))){var R=c("<p>").addClass("starRating").append(c("<span>").addClass("stars"+X.reviewRating)).append(c("<a>").attr("href","javascript:void(0);").text(X.authorId)).append(" "+x.ratedThisOnText+" "+X.updatedDate);
var S=c("<a>").attr("title",x.reportText).text(x.reportText).attr("href","javascript:void(0);").on("click",function(aa){var Z=c(h.find("ul.reviews")).attr("data-url");
w(aa,Z,X.authorId)
});
var Y=c("<div>").addClass("HeadingAndUserRating").append(c("<h3>").text(X.reviewTitle));
if(n&&!(n==X.authorId)){c(Y).append(c("<span>").append(S))
}c(Y).append(c("<br>").addClass("clear")).append(R);
var P=c("<div>").addClass("clear").append(c("<p>").text(X.reviewText));
var Q=c("<div>").addClass("commentsDetails").append(Y).append(P);
var W=c("<a>").append(c("<span>").addClass("classLike").text(x.likeText)).append(c("<span>").addClass("counter").text(X.reviewHelpFullVotes));
if(n&&n==X.authorId){c(W).css("cursor","default").addClass("commentsRatingsClicked")
}else{if(n){c(W).addClass("commentsRatings").attr("href","javascript:void(0);").on("click",function(aa){var Z={action:"updateReviewVote",gameId:x.gameId,author:X.authorId,userVote:"helpful"};
if(p("userinfo")){Z.userInfoCookie=p("userinfo")
}c.ajax({url:x.reviewsServiceUrl,type:"POST",dataType:"json",async:true,crossDomain:true,cache:false,data:Z,success:U})
})
}else{c(W).addClass("commentsRatingsNoClick")
}}var U=function(ab){c(W).off("click");
c(W).css("cursor","default");
c(W).removeClass().addClass("commentsRatingsClicked");
var Z=c(W).find("span.counter");
var aa=c(W).find("span.counter").text();
c(W).find("span.counter").text(parseInt(aa)+1)
};
var V=c("<img>").attr("width",60).attr("height",60).attr("alt",X.authorId);
var O=c("<li>").addClass("user").append(V).append(Q).append(W);
O.find("img").wrap('<div class="avatar" />');
O.children().last().wrap('<div class="ratings-wrap" />');
c("ul.reviews").append(O);
e(X.authorId,V)
}});
if(H.gameReviews>(parseInt(B)*5)){h.find("a.more-link").attr("data-page",parseInt(B)+1);
h.find("a.more-link").show()
}else{h.find("a.more-link").hide();
c("ul.reviews li:last-child").css({"padding-bottom":0})
}}else{c(o).hide();
c(k).hide();
c(l).hide();
c("ul.reviews li:last-child").css({"padding-bottom":0})
}})
};
var t=function(){var y=h.find("a.more-link");
PDC.ReviewsRatings.getRating(x.reviewsServiceUrl,x.gameId,function(A){if(A.averageGameRating>=0){var z=h.find("span.averagerating");
z.removeClass();
z.addClass("averagerating stars"+A.averageGameRating)
}})
};
var e=function(z,y){c.ajax({url:x.avatarServiceUrl+"/"+z,type:"GET",dataType:"json",success:function(A){y.attr("src",A.avatarUrl)
}})
};
var w=function(A,z,y){A.preventDefault();
c.colorbox({href:z,scrolling:true,overlayClose:true,photo:false,onOpen:function(){c("#colorbox").addClass("visible-ajax")
},onComplete:function(){var B=c("#colorbox");
var D=c("#rr");
var F=B.find("textarea");
var C=B.find('select[name="type"]');
var G=B.find("div.name h3");
var I=B.find(".errorBox");
var J=B.find("div.avtarHolder");
var H=B.find('form[name="report-abuse"]');
var E=PDC.Profile.getOnlineID();
b.addEventListener("resize",function(){if(c("#cboxOverlay").is(":visible")){c.colorbox.resize()
}},false);
D.find(".comment").focusin(function(){var K=c(this);
K.css("background","#fff").removeClass("red");
if(K.hasClass("comment")){if(K.val().indexOf("Write your comments")>-1){K.val("");
c.colorbox.resize()
}}}).focusout(function(){var K=c(this);
if(K.val()==""){if(K.hasClass("comment")){K.val("Write your comments here...")
}}});
F.on("click",function(){F.removeClass("error")
});
B.find("a.cancel").on("click",function(K){c.colorbox.close()
});
B.find("a.submit").on("click",function(N){N.preventDefault();
var M=true;
var L=F.val();
var O=C.val();
if(L===""||L===x.writeYourCommentsText){F.addClass("error");
I.show();
M=false
}if(M){var K={action:"reportAbuse",author:y,gameId:x.gameId,comment:L,option:O};
if(p("userinfo")){K.userInfoCookie=p("userinfo")
}c.ajax({url:H.attr("action"),type:"POST",dataType:"json",async:true,crossDomain:true,cache:false,data:K,success:function(P){c("#rr .write-form-wrapper").remove();
c("#rr .write-form-message").css({display:"table-cell"});
c("#wc div.module-wrap").show()
}})
}})
}})
};
var q=function(z,y,A){z.preventDefault();
if(!PDC.Profile.isLoggedIn()){b.location.href=c(y).attr("data-psn-signin");
return false
}c.ajax({type:"GET",url:c(y).attr("href"),async:true,crossDomain:true,cache:false,dataType:"html"}).done(function(D){c("#cr div.module-wrap").hide();
c(D).insertAfter(".reviewsratings div.headingWrapper");
var C=c("#wc");
var F=C.find("textarea");
var B=C.find(".st_rating");
var H=C.find(".rating-info");
var L=C.find("input.subject");
var N=C.find(".terms-checkbox");
var K=C.find(".checkTerms");
var J=C.find(".errorBox");
var I=C.find('form[name="write-comment"]');
var G=C.find("div.name h3");
var M=C.find("div.avtarHolder");
var E=PDC.Profile.getOnlineID();
C.find(".comment,.subject").focusin(function(){var O=c(this);
O.css("background","#fff").removeClass("red");
if(O.hasClass("comment")){if(O.val().indexOf("Write your review")>-1){O.val("");
c.colorbox.resize()
}}if(O.hasClass("subject")){if(O.val()=="Write your review subject here..."){O.val("");
c.colorbox.resize()
}}}).focusout(function(){var O=c(this);
if(O.val()==""){if(O.hasClass("comment")){O.val("Write your review here...")
}if(O.hasClass("subject")){O.val("Write your review subject here...")
}}});
if(E){G.text(E);
M.append(c("<img>").attr("src",PDC.Profile.getSmallAvatar()).attr("alt",E))
}if(A){if(A.comment){F.val(A.comment)
}if(A.rating&&A.rating>=1){c(B.find(".rating").children()[A.rating-1]).trigger("click")
}if(A.title){L.val(A.title)
}N.prop("checked",true)
}F.on("click",function(){F.removeClass("error")
});
B.on("click",function(){B.find("h3").removeClass("error")
});
L.on("click",function(){L.removeClass("error")
});
N.on("click",function(){K.find("label").removeClass("error")
});
C.find("a.cancel").on("click",function(O){c("#wc").remove();
c("#cr div.module-wrap").show()
});
C.find("a.submit").on("click",function(T){T.preventDefault();
var S=true;
var P=F.val();
var R=H.val();
var Q=L.val();
if(P===""||P===x.writeReviewText){F.addClass("error");
J.show();
S=false
}if(Q===""||Q===x.writeReviewSubject){L.addClass("error");
J.show();
S=false
}if(R===""){B.find("h3").addClass("error");
J.show();
S=false
}if(!N.is(":checked")){K.find("label").addClass("error");
J.show();
S=false
}if(S){var O={action:"updateReview",gameId:x.gameId,title:Q,comment:P,rating:R};
if(p("userinfo")){O.userInfoCookie=p("userinfo")
}c.ajax({url:I.attr("action"),type:"POST",dataType:"json",async:true,crossDomain:true,cache:false,data:O,success:function(U){PDC.DigitalDataAPI.event.add(c(this),{eventName:"reviewsratings",eventAction:"click"},{assetName:"empty",linkUrl:"empty",impressionCount:"1",label:"empty",moduleName:"reviewsratings",elementType:"button",userActionFlag:true});
c("#cr div.module-wrap").show();
r();
c("#wc").remove()
}})
}});
c.fn.autoresize=function(P){var R=c.extend({debug:false},P),S=["font-family","font-size","font-weight","font-style","letter-spacing","text-transform","word-spacing","text-indent","line-height","padding-top","padding-bottom"],O={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};
function T(V){var U="<br />";
return(V+"<br />~").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,"$1"+U+"$2")
}function Q(U){return U.replace(/[&<>"'\/]/g,function(V){return O[V]
})
}return this.each(function(){var V=c(this),U=c("<div></div>");
V.css("overflow","hidden");
c.each(S,function(W,X){U.css(X,V.css(X))
});
U.css({"word-wrap":"break-word",position:"absolute",height:"auto",width:V.width()});
if(R.debug===false){U.css({top:"-999em",left:"-999em"})
}else{U.css({top:"10px",left:"10px"})
}U.html(T(Q(V.val())));
c("body").append(U);
V.height(U.height());
V.bind("textchange",function(){U.html(T(Q(V.val())));
V.height(U.height())
})
})
};
c.event.special.textchange={setup:function(P,O){c(this).data("lastValue",this.contentEditable==="true"?c(this).html():c(this).val());
c(this).bind("keyup.textchange",c.event.special.textchange.handler);
c(this).bind("cut.textchange paste.textchange input.textchange",c.event.special.textchange.delayedHandler)
},teardown:function(O){c(this).unbind(".textchange")
},handler:function(O){c.event.special.textchange.triggerIfChanged(c(this))
},delayedHandler:function(P){var O=c(this);
setTimeout(function(){c.event.special.textchange.triggerIfChanged(O)
},25)
},triggerIfChanged:function(O){var P=O[0].contentEditable==="true"?O.html():O.val();
if(P!==O.data("lastValue")){O.trigger("textchange",[O.data("lastValue")]);
O.data("lastValue",P)
}}};
F.autoresize()
}).fail(function(){console.log("Document call fail")
})
};
f(true);
t();
var v=h.find(".createReview");
v.on("click",function(y){q(y,this)
})
}
})(jQuery,window,document);
(function(c,b,a,d){jQuery.fn.ratings=function(e,g){var f=this;
return this.each(function(){if(!g){g=0
}var o=this;
var h=jQuery(this);
var k=Array();
o.rating=g;
h.css("overflow","auto");
for(var n=0;
n<e;
n++){var m=a.createElement("div");
var l=jQuery(m);
m.rating=n+1;
l.addClass("jquery-ratings-star");
if(n<g){l.addClass("jquery-ratings-full")
}h.append(l);
k.push(l);
l.click(function(){f.triggerHandler("ratingchanged",{rating:this.rating});
o.rating=this.rating
});
l.click(function(){for(var p=0;
p<this.rating;
p++){k[p].addClass("jquery-ratings-full")
}for(var p=this.rating;
p<e;
p++){k[p].removeClass("jquery-ratings-full")
}});
h.mouseleave(function(){for(var p=0;
p<o.rating;
p++){k[p].addClass("jquery-ratings-full")
}for(var p=o.rating;
p<e;
p++){k[p].removeClass("jquery-ratings-full")
}})
}})
};
c.fn.starrating=function(f){var g=c(this);
var h={stars:5,starsSelector:".rating",starsValSelector:".rating-info"};
var f=c.extend(h,f);
var e=function(){g.find(f.starsSelector).ratings(f.stars).bind("ratingchanged",function(k,l){g.find(f.starsValSelector).val(l.rating)
})
};
return this.each(e)
}
})(jQuery,window,document);
(function(e,c,a,g){var d="sortBy",f={fakeTimeDelay:1000,loadingClassName:"loading",ajaxPath:"/ajax/",ajaxPrefix:"sort_",ajaxSeparator:"_",ajaxSuffix:".html"};
function b(k,h){this.element=k;
this.$element=e(this.element);
this.parentId=e(this.element).attr("id");
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){var l=this;
var h=this.$element.attr("data-target-id");
if(typeof h!="undefined"){l.sTargetId=h
}else{return
}var m=this.$element.attr("data-ajax-url");
if(typeof m!="undefined"){l.sAjaxUrl=m
}else{return
}c.PDC.SortByRequest=c.PDC.SortByAjaxRequest||{};
l.sLoadingContainerId=="";
var k=this.$element.attr("data-loading-container-id");
if(typeof k!="undefined"){l.sLoadingContainerId=k
}l.bReplaceContent=true;
var n=this.$element.attr("data-replace-content");
if(typeof n!="undefined"){l.bReplaceContent=(n=="true"?true:false)
}this.$element.find(".sort select").selectbox({effect:"fade",speed:400,onChange:function(q,p){var o="sortBy="+q;
l.updateResults(o)
}})
};
b.prototype.updateResults=function(k){var l=this,m=e(a.getElementById(l.sTargetId)),h=m,n=l.parentId;
if(l.sLoadingContainerId!=""){h=e(a.getElementById(l.sLoadingContainerId))
}if(typeof(c.PDC.SortByRequest[n])!="undefined"){c.PDC.SortByRequest[n].abort()
}c.clearTimeout(c.fakeContentTimeout);
h.addClass(l.options.loadingClassName);
c.PDC.SortByRequest[n]=e.ajax({url:l.sAjaxUrl+"?"+k,success:function(o){c.fakeContentTimeout=c.setTimeout(function(){var p=e(o);
if(l.bReplaceContent){m.html(p)
}else{m.append(p)
}e(c).trigger("filterChange");
h.removeClass(l.options.loadingClassName)
},l.options.fakeTimeDelay)
},error:function(o){}})
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(e,c,a,g){var d="selectDropdown",f={currentItemValue:"current"};
function b(k,h){this.element=k;
this.$element=e(this.element);
this.parentId=e(this.element).attr("id");
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){var h=this;
this.$element.find("select").selectbox({effect:"fade",speed:400,onChange:function(l,k){}})
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 * Original code (with comments) can be found at:
 * http://coding.smashingmagazine.com/2011/10/11/essential-jquery-plugin-patterns/
 */
;
(function(e,c,a,g){var d="reviewHighlight",f={displayTime:3000,fadeTime:500,quoteContainerSelector:".review-quotes",quoteActiveAreaSelector:".review-hover",activeClassName:"active",elementSelector:"section"};
function b(k,h){this.element=k;
this.parent=k.parentNode;
this.elementHeight=0;
this.timeoutId=0;
this.wasVisible=null;
this.isNowVisible=false;
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
var l=e("html");
this.init()
}b.prototype.init=function(){var h=this,l=e(this.element),k=l.find(this.options.elementSelector);
if(k.length==1){return
}else{k.eq(0).addClass(h.options.activeClassName)
}this.updateDimensions();
e(c).on("scroll",function(){h.checkVisibility()
});
this.checkVisibility();
l.on({mouseenter:function(){h.pause()
},mouseleave:function(){h.queueNext(true)
},click:function(){h.queueNext()
}},this.options.quoteActiveAreaSelector)
};
b.prototype.updateDimensions=function(){var k=this.options.activeClassName,h=e(this.element),l=0;
h.find(this.options.elementSelector).each(function(m){var n=e(this);
n.show().css("display","block");
l=(n.height()>l)?n.height():l;
n.css("display","table-cell");
if(!n.hasClass(k)){n.hide()
}});
l+=6;
h.find(this.options.quoteContainerSelector).css("height",l+"px");
this.elementHeight=l
};
b.prototype.checkVisibility=function(){var h=e(this.element.parentNode).isVisible();
if((this.wasVisible!=h)||this.wasVisible==null){if(h){this.queueNext()
}else{this.pause()
}this.wasVisible=h
}};
b.prototype.pause=function(){c.clearTimeout(this.timeoutId);
var m=e(this.element),k=this.options.fadeTime,h=this.options.activeClassName,l=m.find("."+h).first();
l.stop(true,false).attr("style","").css("display","table-cell").siblings().hide()
};
b.prototype.next=function(){var n=this,o=e(this.element),l=this.options.fadeTime,k=this.options.activeClassName,m=o.find("."+k).first(),h=m.next().length?m.next():o.find(this.options.elementSelector).eq(0);
m.fadeOut(l,function(){m.removeClass(k).siblings().hide();
h.addClass(k).fadeIn(l,function(){n.queueNext()
})
})
};
b.prototype.queueNext=function(k){var h=this;
c.clearTimeout(this.timeoutId);
if(k){h.next()
}else{this.timeoutId=c.setTimeout(function(){h.next()
},this.options.displayTime)
}};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(e,c,a,g){var d="personalizedSection",f={mdmServiceUrl:""};
function b(k,h){this.element=k;
this.$element=e(this.element);
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){var h=this;
var k=h.options;
var l=h.$element.data("show-state");
if((l==="notuser"&&PDC.Profile.isLoggedIn()===false)||(l==="userloggedin"&&PDC.Profile.isLoggedIn()===true)||(l==="notsubscriber"&&PDC.Profile.isLoggedIn()===true&&!PDC.User.isPlusUser)||(l==="subscriber"&&PDC.Profile.isLoggedIn()===true&&PDC.User.isPlusUser)){h.$element.removeClass("hide")
}else{PDC.MDM.getMdmData(k.mdmServiceUrl,function(n){var m=false;
if(typeof n.listOfAccount!=="undefined"&&n.listOfAccount!==null&&typeof n.listOfAccount.account[0]!=="undefined"&&typeof n.listOfAccount.account[0].listOfAsset!=="undefined"&&typeof n.listOfAccount.account[0].listOfAsset.asset!=="undefined"){e(n.listOfAccount.account[0].listOfAsset.asset).each(function(o,p){if(p.consoleType==="PS4"&&p.assetGroup==="Hardware"){m=true;
return false
}})
}if((l==="ps4owner"&&PDC.Profile.isLoggedIn()===true&&m===true)||(l==="notps4owner"&&PDC.Profile.isLoggedIn()===true&&m===false)||(l==="notps4plus"&&PDC.Profile.isLoggedIn()===true&&m===false&&!PDC.User.isPlusUser)||(l==="ps4plus"&&PDC.Profile.isLoggedIn()===true&&m===true&&PDC.User.isPlusUser)){h.$element.removeClass("hide")
}})
}};
PDC.MDM=PDC.MDM||{};
PDC.MDM.ajaxLoading=false;
PDC.MDM.mdmData={};
PDC.MDM.callbacks=[];
PDC.MDM.getMdmData=function(k,l){PDC.MDM.callbacks.push(l);
var h=function(m){PDC.MDM.mdmData=m||{};
e(PDC.MDM.callbacks).each(function(n,o){o(PDC.MDM.mdmData)
});
PDC.MDM.callbacks=[];
PDC.MDM.ajaxLoading=false
};
if(e.cookie("userinfo")){if(typeof PDC.MDM.mdmData.listOfAccount!=="undefined"){h(self.mdmData);
return 0
}if(PDC.MDM.ajaxLoading){return 0
}if(k==="undefined"||k==="null"&&k===""){h(null);
return 0
}PDC.MDM.ajaxLoading=true;
e.ajax({url:k,dataType:"json",cache:false,async:true,crossDomain:true,data:{userInfoCookie:e.cookie("userinfo")}}).done(function(m){if(m.listOfAccount!=="undefined"){h(m)
}else{h(null)
}}).fail(function(o,n,m){h(null)
})
}else{h(null)
}};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(e,h,l,c){var p='    <div class="hover">';
p+='        <div class="tab">Video</div>';
p+='        <div class="tab-content">';
p+="            <p></p>";
p+="        </div>";
p+="    </div>";
var b='            <div class="button video">&nbsp;</div>';
var o='    <div class="primary media videoItem">';
o+='        <a href="" class="clearfix lb_youtube">';
o+=b;
o+=p;
o+="        </a>";
o+="    </div>";
var f='        <div class="media videoItem">';
f+='            <a href="" class="lb_youtube">';
f+=b;
f+=p;
f+="            </a>";
f+="        </div>";
var k='    <div class="secondary">';
k+=f;
k+=f;
k+="    </div>";
var n="<li>";
n+=o;
n+=k;
n+="</li> ";
var g="mediaCarousel",d={largeWidth:939,largeHeight:352,smallWidth:622,smallHeight:529,breakPoint:959};
function m(r,q){this.element=r;
this.$key=e(this.element).attr("id");
this.options=e.extend({},d,q);
this._defaults=d;
this._name=g;
this.init()
}function a(u,q){var r=false,t='<div class="media empty-media">&nbsp;</div>';
e(u).find("li .media.mediaItem:not(:has(a))").remove();
e(u).find("li").each(function(){var y=e(this),x=y.find(".media:not(.empty-media)"),w=x.size();
if(w==0){y.remove();
r=true
}else{if(w<3){var v=y.find(".secondary");
if(w==1){if(v.size()>0){v.remove()
}x.addClass("center")
}else{if(w==2){x.removeClass("center");
if(y.find(".media").size()==2){v.append(t)
}}}}else{x.removeClass("center")
}}});
if(r&&typeof q!="undefined"){q()
}}m.prototype.init=function(){var B=this.options,D=this,q=e(this.element),A,t,x=false,E,J,H=true,K=e(h).width(),G=this,v,w=0,u,F;
if($deviceSize>500||h.orientation!=0){q.find(".next").addClass("mcnext"+this.$key);
q.find(".prev").addClass("mcprev"+this.$key);
q.find(".pages").addClass("mcpages"+this.$key)
}A=q.find("ul");
A.find("li").last().each(function(){var L=e(this);
if(L.find("div.secondary").length===0){L.find("div.primary").addClass("center")
}});
function C(){A.carouFredSel({width:B.largeWidth,height:B.largeHeight,next:".mcnext"+D.$key,prev:".mcprev"+D.$key,pagination:".mcpages"+D.$key,infinite:false,circular:false,auto:false,scroll:1,items:{width:B.largeWidth,height:B.largeHeight},mousewheel:false})
}a(A);
C();
A.swipe({fingers:"all",swipeLeft:r,swipeRight:I,allowPageScroll:"auto",excludedElements:"button, input, select, textarea"});
function r(M,O,P,N,L){if($deviceSize>500||h.orientation!=0){A.trigger("next",1)
}}function I(M,O,P,N,L){if($deviceSize>500||h.orientation!=0){A.trigger("prev",1)
}}if(K<=B.breakPoint&&!x){x=true;
if($deviceSize>500||h.orientation!=0){q.find("ul").trigger("configuration",{width:B.smallWidth,height:B.smallHeight,swipe:{onMouse:true,onTouch:true},items:{width:B.smallWidth,height:B.smallHeight}})
}else{q.find("ul").trigger("configuration",{width:B.smallWidth,height:B.smallHeight,items:{width:B.smallWidth,height:B.smallHeight}})
}q.addClass("resize")
}if(q.find("ul li").length<1){if($deviceSize>500||h.orientation!=0){q.find(".control-panel").remove()
}}e(h).bind("resize",function(){var L=e(this).width();
if(L<=B.breakPoint&&!x){if($deviceSize>500||h.orientation!=0){x=true;
q.find("ul").trigger("configuration",{width:B.smallWidth,height:B.smallHeight,swipe:{onMouse:true,onTouch:true},items:{width:B.smallWidth,height:B.smallHeight}});
if(q.find("ul li").length<=1){q.css({height:"529px"})
}q.addClass("resize")
}}if(L>B.breakPoint&&x){if($deviceSize>500||h.orientation!=0){x=false;
q.find("ul").trigger("configuration",{width:B.largeWidth,height:B.largeHeight,swipe:{onMouse:true,onTouch:true},items:{width:B.largeWidth,height:B.largeHeight}});
if(q.find("ul li").length<1){q.css({height:"353px"})
}q.removeClass("resize")
}}});
if(e(".lt-ie8").length>0){var z=q.find(".control-panel").width()/2;
q.find(".control-panel").css({marginLeft:-z+"px"})
}e(l).ready(function(){var L=e("img[data-original-alt]");
if(L.length>0){L.each(function(){var M=e(this);
M.attr({title:M.data("original-alt"),alt:M.data("original-alt")+"_"+M.data("videokey")});
PDC.DigitalDataAPI.event.add(M,{eventName:"videoCarousel",eventAction:"click"},{assetName:"empty",linkUrl:'currentImgElmnt.data("videokey")',impressionCount:"1",label:'currentImgElmnt.data("original-alt")',moduleName:"mediaCarousel",elementType:"video",userActionFlag:false})
})
}});
var y=A.find("li a").map(function(L,N){var Q=e(this),P=false;
w++;
if(u==c){u=Q.attr("rel")
}if(Q.hasClass("lb_ytPlaylist")){B.insertAt=w;
return G.processPlaylist(Q,u,B.insertAt,A,C)
}else{var O=Q.find("img"),M=O.attr("alt"),R=O.data("asset-videourl");
if(R){if(R.indexOf("=")>-1){R=R.substring(R.lastIndexOf("=")+1)
}O.attr({"data-original-alt":M,"data-videokey":R})
}}});
e.when.apply(null,y.get()).then(function(){A.find("li a").each(function(){var P=e(this),O=false;
P.focus(function(V){var W=e(this),Y=W.parents("li"),R,U,S,Q=A.find("li"),T=Math.ceil(Q.length/N.length);
if($deviceSize>500||h.orientation!=0){if(O){O=false;
t=null
}else{V.preventDefault();
O=true;
R=Q.index(Y);
U=Math.ceil((R+1)/N.length)-1;
S=A.triggerHandler("currentPage");
var X=(S+U);
if(X>T){X=X-T
}if(X===S){t=null;
W.focus()
}else{A.triggerHandler("slideToPage",X);
t=W
}}}})
});
var N=A.triggerHandler("currentVisible"),M=A.find("a").first(),L=A.find("a").last();
a(A,C);
q.bind("keydown",function(S){if($deviceSize>500||h.orientation!=0){var R=S.keyCode||S.which;
if(R==9){if(!S.shiftKey){var T=e(l.activeElement),P=T.parents("li"),Q=P.find("a").index(T);
S.preventDefault();
if(Q<2){var O=P.find("a:eq("+(Q+1)+")");
if(O.length){O.focus()
}else{q.find(".prev").focus()
}}else{var O=P.next("li").find("a:eq(0)");
if(O.length){O.focus()
}else{q.find(".prev").focus()
}}}else{if(M===e(l.activeElement)){M.blur()
}}}}})
})
};
m.prototype.getYoutubeVideoID=function(t){for(var r=0;
r<t.link.length;
r++){if(t.link[r].rel=="related"){var q=t.link[r].href;
return q.replace(/.*\//,"").replace(/\?.*$/,"")
}}};
m.prototype.processPlaylist=function(v,C,t,u,A){var B=new jQuery.Deferred(),x=this,r=v.attr("data-playlist-id"),y=v.attr("data-playlist-startfrom"),q=v.attr("data-agethreshold"),w=(v.attr("data-playlist-hover")==="true");
if(!y){y=0
}else{if(y>0){y--
}}t--;
var z=false;
e.getJSON("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId="+r+"&key=AIzaSyAKRzl4h3hhO1X3imjDNBNFkgqmiBhzk_U&alt=json&callback=?",function(F){z=true;
var K=e(".CM106-lead-product-info").filter(function(){$a=e(this).find(".overlay").parent("a");
return $a.hasClass("lb_ytPlaylist")&&$a.attr("data-playlist-id")==r
});
if(K.length>0){K={overlay:K.find(".overlay"),startFrom:K.find(".overlay").parent("a").attr("data-playlist-startfrom")}
}var L=u.find("div.media").slice(t+1).not(".empty-media");
var D=L.clone();
L.find("img").remove();
L.first().parents("li").nextAll().each(function(){u.trigger("removeItem",e(this))
});
var E=u.find("li").index(L.first().parents("li")),G=u.find("li:eq("+E+")"),J,H=true,I=F.items.length-1;
if(E<0){E=0;
G=u.find("li:eq(0)")
}u.find("li .secondary a img").click(function(){PDC.DigitalDataAPI.event.add(e(this),{eventName:"imagecarousel",eventAction:"click"},{assetName:"secondary a img",linkUrl:"empty",impressionCount:"1",label:"empty",moduleName:"imagecarousel",elementType:"image",userActionFlag:true})
});
u.find("li .secondary a img").click(function(){PDC.DigitalDataAPI.event.add(e(this),{eventName:"imagecarousel",eventAction:"click"},{assetName:"secondary a img",linkUrl:"empty",impressionCount:"1",label:"empty",moduleName:"imagecarousel",elementType:"image",userActionFlag:true})
});
e.each(F.items,function(S,W){var Q="no";
if(e(W).isVideoItemAgeGated){if(e(W).isVideoItemAgeGated()){Q="yes"
}}var N=W.snippet.title,M=W.snippet.resourceId.videoId,U=W.snippet.title,O="https://www.youtube.com/watch?v="+M,P;
if(K.overlay&&S==0){K.overlay.getProductInfoVideoFromYTFeed(W,e(K.overlay).parent("a").attr("data-playlist-hover"))
}if(S>=y){J=(t+S-y)%3;
if(J==0&&!H){u.trigger("insertItem",[e(n),"end"]);
E++;
G=u.find("li:eq("+E+")")
}H=false;
P=G.find("div.media:eq("+J+")").find("a");
if(P.length===0){if(J===1){G.append(k);
G.find(".primary").removeClass("center")
}if(J===2){G.find(".secondary").append(f)
}P=G.find("div.media:eq("+J+")").find("a")
}else{var T=P.parent();
T.html("<a>"+b+"</a>");
P=T.find("a")
}var R="{&quot;eventInfo&quot;:{&quot;eventAction&quot;:&quot;click&quot;,&quot;eventName&quot;:&quot;videoCarousel click&quot;},&quot;attributes&quot;:{&quot;moduleName&quot;:&quot;videoCarousel&quot;,&quot;label&quot;: &quot;"+U+"&quot;,&quot;assetName&quot;:&quot;empty&quot;,&quot;elementType&quot;:&quot;video&quot;,&quot;position&quot;:&quot;1&quot;,&quot;userActionFlag&quot;:false}}";
P.attr("href",O).addClass("lb_youtube").removeClass("lb_ytPlaylist").attr("rel",C).attr("data-agegating",Q).attr("data-agethreshold",q).attr("data-track",R.split("&quot;").join('"')).append('<img src="https://img.youtube.com/vi/'+M+'/hqdefault.jpg" class="ytImage" alt="'+U+'" />');
if(w){if(P.find(".hover").length==0){P.append(p)
}P.attr("href",O).find(".hover .tab-content p").text(N).parent().find(".tab").text("VIDEO")
}else{P.attr("href",O).find(".hover").remove()
}if(e.fn.pdcLightbox){P.pdcLightbox()
}}if(I==S){var V=J;
I=D.length-1;
D.each(function(X,Y){J=(1+X+V)%3;
if(J==0){u.trigger("insertItem",[e(n),"end"]);
E++;
G=u.find("li:eq("+E+")")
}G.find("div.media:eq("+J+")").find("a").replaceWith(e(Y).find("a"))
});
if(J==0){G.find(".secondary").remove();
G.find(".primary").addClass("center")
}if(J==1){G.find(".secondary .media:eq(1)").empty().addClass("empty-media")
}if(e.fn.pdcLightbox){u.find("li .media a").pdcLightbox()
}if(PDC.updateTilePreset){PDC.updateTilePreset(u.find("li .primary a img"),true);
PDC.updateTilePreset(u.find("li .secondary a img"),false)
}B.resolve()
}})
});
setTimeout(function(){if(!z){var D=jQuery.inArray(e("a[data-playlist-id='"+r+"']")[0],u.find("a"));
u.find("a").slice(D).each(function(E){if(u.find("a").slice(D).size()+1==E){e(u.find("a")[(E)]).remove()
}else{var F=e(u.find("a")[(E+D+1)]).clone(true);
e(u.find("a")[(E+D)]).replaceWith(F)
}});
a(u,A)
}},5000);
return B.promise()
};
e.fn[g]=function(q){if($deviceSize<500&&ornChangeFlag==1){e(".cm109-mediaCarousel").each(function(){new m(this,q)
});
ornChangeFlag=0
}return this.each(function(){if(!e.data(this,"plugin_"+g)){e.data(this,"plugin_"+g,new m(this,q))
}})
}
})(jQuery,window,document);
var $deviceSize=$(window).width();
var ornChangeFlag=0;
$(window).on("load orientationchange",function(){if($(".parbase").hasClass("mediaCarousel")){if($deviceSize<500){var f=1;
var c=function(){if($deviceSize<500){var n=$(".mediaCarousel");
n.each(function(){var q=$(this).find('[id^="mediacarousel"]');
var o=$(this).find('[id^="videocarousel"]');
o.find("ul li:last-child .secondary div.empty-media").remove();
var z=q.find("ul li").length;
var y=o.find("ul li").length;
var u=y*3;
var t=z*3;
var v=o.find("ul li:last-child .secondary div.media:not(.empty-media)");
var r=q.find("ul li:last-child .secondary div.media:not(.empty-media)");
var x=v.length;
var w=r.length;
var A=o.find(".control-wrapper");
if(o.length!=0){if($deviceSize<500&&window.orientation==0){if(x!=0){u-=(2-x)
}else{u-=2
}if(u<=1){o.find(".control-panel .control-wrapper").css("display","none")
}else{o.find(".control-panel .control-wrapper").css("display","inline-block")
}if(u>1){var p=u;
A.find("div.pages a").remove();
if(f>=0&&f<p){if(u>5){if($deviceSize<500&&window.orientation==0){A.find("div.pages").append("<span></span>");
A.find("div.pages span").text(f+"/"+u)
}}}if(u>1&&u<=5){A.find("div.pages").append('<a href="#" class="video-pages selected"> <span></span> </a>');
for($i=2;
$i<=u;
$i++){A.find("div.pages").append('<a href="#" class="video-pages"> <span></span> </a>')
}}}}A.find("a.prev").addClass("disabled");
A.find("a.next").removeClass("disabled")
}else{if(q.length!=0){if($deviceSize<500&&window.orientation==0){if(w!=0){t-=(2-w)
}else{t-=2
}if(t<=6){if(q.parents('[id^="inlinetabs"]').hasClass("active")){$(this).parents(".inlineTabs").css("height","450px");
if(t<=4){if(w==1){$(this).parents(".inlineTabs").css("height","450px")
}else{$(this).parents(".inlineTabs").css("height","350px")
}}if(t<=2){if(w==1){$(this).parents(".inlineTabs").css("height","350px")
}else{$(this).parents(".inlineTabs").css("height","250px")
}}}}else{$(this).parents(".inlineTabs").css("height","auto");
q.find(".more-images-view-button").css("display","block")
}if(t==1){q.find("ul li .primary").addClass("single")
}else{q.find("ul li .primary").removeClass("single")
}if(z>=2){q.css("height","380px")
}}}}})
}};
$(".control-panel").on("click",$(".cm109-mediaCarousel").find(".more-less-button>button"),function(u){if(window.orientation==0){var n=$(this).parent(".carousel").parent('[id^="mediacarousel"]');
var q=n.find("ul li").length;
var p=n.find("ul li:last-child .secondary div.media:not(.empty-media)");
var r=p.length;
var o=100;
var t=q*3;
if(r!=0){t-=(2-r)
}else{t-=2
}if($(this).find(".more-less-button").hasClass("show-less")){n.attr("style","height: 380px");
$(this).find(".more-less-button").addClass("more-images-view-button");
$(this).find(".more-less-button").removeClass("show-less");
$(this).find(".more-less-button span").attr("style","transform: rotate(135deg) !important");
$(this).find(".more-less-button>button").text("MORE")
}else{if($(this).find(".more-less-button").hasClass("more-images-view-button")){if(t>=6){if(t%2==0){n.css("height",(80+(t/2)*100))
}else{n.css("height",(80+((t+1)/2)*100))
}}$(this).find(".more-less-button").addClass("show-less");
$(this).find(".more-less-button").removeClass("more-images-view-button");
$(this).find(".more-less-button span").attr("style","transform: rotate(-45deg) !important; bottom: 0;");
$(this).find(".more-less-button>button").text("LESS")
}}return false
}});
$(".in-line-tab-item").click(function(){var n=$(this).attr("data-content-id");
var o=$('[id^="inlinetabs"].active [id^="videocarousel"]');
if($deviceSize<500&&window.orientation==0){l(n)
}});
var l=function(p){var y=$(document.getElementById(p)).find(".control-panel .control-wrapper");
var n=$(document.getElementById(p)).find(".control-panel");
f=1;
var o=$(document.getElementById(p)).find('[id^="mediacarousel"]');
$(document.getElementById(p)).parents(".inlineTabs").css("height","auto");
if($(document.getElementById(p)).find('[id^="videocarousel"]').length!=0){if($deviceSize<500&&window.orientation==0){n.find(".more-images-view-button").css("display","none");
var w=$(document.getElementById(p)).find('[id^="videocarousel"] ul li').length;
$(document.getElementById(p)).find('[id^="videocarousel"]').find("ul li:last-child .secondary div.empty-media").remove();
var t=$(document.getElementById(p)).find('[id^="videocarousel"]').find("ul li:last-child .secondary div.media:not(.empty-media)");
var v=t.length;
$videoPages=w*3;
if(v!=0){$videoPages-=(2-v)
}else{$videoPages-=2
}if($videoPages<=1){y.css("display","none")
}else{y.css("display","inline-block")
}if($videoPages>1&&$videoPages<=5){if(y.find("div.pages a").length<0){y.find("div.pages a").remove();
y.find("div.pages").append('<a href="#" class="video-pages selected"> <span></span> </a>');
for($i=2;
$i<=$videoPages;
$i++){y.find("div.pages").append('<a href="#" class="video-pages"> <span></span> </a>')
}y.css("display","inline-block")
}}}}else{if($deviceSize<500&&window.orientation==0){if(n.find(".more-less-button").hasClass("show-less")){o.attr("style","height: 380px");
n.find(".more-less-button").addClass("more-images-view-button");
n.find(".more-less-button").removeClass("show-less");
n.find(".more-less-button span").attr("style","transform: rotate(135deg) !important");
n.find(".more-less-button>button").text("MORE")
}var x=$(document.getElementById(p)).find('[id^="mediacarousel"] ul li').length;
var q=$(document.getElementById(p)).find('[id^="mediacarousel"]').find("ul li:last-child .secondary div.media:not(.empty-media)");
var u=q.length;
var r=x*3;
if(u!=0){r-=(2-u)
}else{r-=2
}if(r<=6){n.find(".more-images-view-button").css("display","none");
o.parents(".inlineTabs").css("height","450px");
if(r<=4){if(u==1){$(this).parents(".inlineTabs").css("height","450px")
}else{o.parents(".inlineTabs").css("height","350px")
}}if(r<=2){if(u==1){$(this).parents(".inlineTabs").css("height","350px")
}else{o.parents(".inlineTabs").css("height","250px")
}}}else{n.find(".more-images-view-button").css("display","block");
o.parents(".inlineTabs").css("height","auto")
}if(r==1){o.find("ul li .primary").addClass("single")
}else{o.find("ul li .primary").removeClass("single")
}if(x>=2){o.css("height","380px")
}}}};
$('[id^="videocarousel"] ul li').swipe({swipeLeft:function(p,r,t,q,o){if(window.orientation==0){var n=$(this).parents('[id^="videocarousel"]').find(".control-panel .control-wrapper a.next");
k(n)
}},swipeRight:function(p,r,t,q,o){if(window.orientation==0){var n=$(this).parents('[id^="videocarousel"]').find(".control-panel .control-wrapper a.prev");
e(n)
}},excludedElements:"button, input, select, textarea"});
$(".cm109-mediaCarousel .control-panel .control-wrapper a.next").on("click",function(n){if(window.orientation==0){n.stopImmediatePropagation();
k($(this))
}return false
});
$(".cm109-mediaCarousel .control-panel .control-wrapper a.prev").on("click",function(n){if(window.orientation==0){n.stopImmediatePropagation();
e($(this))
}return false
});
var k=function(w){w=w.parent(".control-wrapper");
if(w.prop("count")==undefined){w.prop("count",1)
}f=w.prop("count");
var n=w.parent(".control-panel").parent(".carousel").parent('[id^="videocarousel"]');
var v=n.find("ul li").length;
n.find("ul li:last-child .secondary div.empty-media").remove();
var r=n.find("ul li:last-child .secondary div.media:not(.empty-media)");
var u=r.length;
var t=v*3;
if(u!=0){t-=(2-u)
}else{t-=2
}var o=t;
var q,p=-330;
if(window.orientation==0){if($deviceSize>375){p=-380
}if($deviceSize==320){p=-280
}if(f>=1&&f<o){q=p*f;
f++;
if(t>5){if($deviceSize<500&&window.orientation==0){w.find("div.pages span").text(f+"/"+o)
}}}if(f<=t){w.find("div.pages a").removeClass("selected");
$(w.find("div.pages a")[(f-1)]).addClass("selected");
w.find("a.prev").removeClass("disabled");
w.find("a.next").removeClass("disabled");
if($deviceSize<500&&window.orientation==0){n.find("ul li").css("left",q)
}}if(f==t){w.find("a.next").addClass("disabled")
}}w.prop("count",f);
return false
};
var e=function(w){w=w.parent(".control-wrapper");
if(w.prop("count")==undefined){w.prop("count",1)
}f=w.prop("count");
var n=w.parent(".control-panel").parent(".carousel").parent('[id^="videocarousel"]');
var v=n.find("ul li").length;
n.find("ul li:last-child .secondary div.empty-media").remove();
var r=n.find("ul li:last-child .secondary div.media:not(.empty-media)");
var u=r.length;
var t=v*3;
if(u!=0){t-=(2-u)
}else{t-=2
}var o=t;
var q,p=-330;
if(window.orientation==0){if($deviceSize>375){p=-380
}if($deviceSize==320){p=-280
}if(f>1&&f<=o){f--;
q=p*(f-1);
if(t>5){if($deviceSize<500&&window.orientation==0){w.find("div.pages span").text(f+"/"+o)
}}}if(f>=1){w.find("div.pages a").removeClass("selected");
$(w.find("div.pages a")[(f-1)]).addClass("selected");
w.find("a.prev").removeClass("disabled");
w.find("a.next").removeClass("disabled");
if($deviceSize<500&&window.orientation==0){n.find("ul li").css("left",q)
}}if(f==1){w.find("a.prev").addClass("disabled")
}}w.prop("count",f);
return false
};
$('[id^="videocarousel"] .control-panel .control-wrapper div.pages').off("click").on("click","a.video-pages",function(){if(window.orientation==0){var n=$(this).parents('[id^="videocarousel"]');
var x=n.find(".control-wrapper");
if(x.prop("count")==undefined){x.prop("count",1)
}f=x.prop("count");
var o=$(this).index();
var w=n.find("ul li").length;
n.find("ul li:last-child .secondary div.empty-media").remove();
var t=n.find("ul li:last-child .secondary div.media:not(.empty-media)");
var v=t.length;
var u=w*3;
if(v!=0){u-=(2-v)
}else{u-=2
}var p=u;
var r,q=-330;
if($deviceSize>375){q=-380
}if($deviceSize==320){q=-280
}r=q*o;
f=o+1;
if(f>=1&&f<=u){x.find("a.video-pages").removeClass("selected");
$(x.find("div.pages a")[(f-1)]).addClass("selected");
x.find("a.prev").removeClass("disabled");
x.find("a.next").removeClass("disabled");
if($deviceSize<500&&window.orientation==0){n.find("ul li").css("left",r)
}if(f==p){x.find("a.next").addClass("disabled")
}else{if(f==1){x.find("a.prev").addClass("disabled")
}}x.prop("count",f)
}}});
if(window.orientation==0){var b=$('[id^="mediacarousel"].cm109-mediaCarousel');
var d={largeWidth:939,largeHeight:352,smallWidth:622,smallHeight:529,breakPoint:959};
if(ornChangeFlag==1){$.fn.mediaCarousel(d)
}var h=$(".cm109-mediaCarousel");
h.each(function(){var n=$(this).find("ul li:last-child");
if(n.find("div.secondary div.media:not(.empty-media)").length==2){$(this).find("ul li").each(function(){var o=$(this).find("div.secondary div.media:not(.empty-media)");
if(o.length<2){this.cindex=$(this).index();
$(this).insertAfter(n);
return false
}})
}else{if(n.prop("cindex")!=undefined){n.prop("cindex",n.index())
}}});
var a=$('[id^="videocarousel"].cm109-mediaCarousel');
var g=a.find(".control-panel .control-wrapper");
$(g).each(function(){if($(this).prop("count")!=undefined){$(this).prop("count",1)
}});
if($(".more-less-button").hasClass("show-less")){b.attr("style","height: 380px");
$(".more-less-button").addClass("more-images-view-button");
$(".more-less-button").removeClass("show-less");
$(".more-less-button span").attr("style","transform: rotate(135deg) !important");
$(".more-less-button>button").text("MORE")
}c();
return false
}else{var d={largeWidth:939,largeHeight:352,smallWidth:622,smallHeight:529,breakPoint:959};
var h=$(".cm109-mediaCarousel");
var m=$(".cm109-mediaCarousel .control-wrapper");
h.each(function(){var o=$(this).find("ul li");
var n=this;
var p=$(this).find("ul li:last-child");
if(p.prop("cindex")!=undefined){o.each(function(){var q=$(this).prop("cindex");
var u=$(this).index();
var t=p.index();
if((q!=undefined&&u!=t)||(u==t&&q!=u)){var r=$(n).find("ul li").eq(q);
$(this).insertBefore(r);
return false
}})
}});
$(".inlineTabs").css("height","auto");
$('[id^="mediacarousel"].cm109-mediaCarousel').css("height","610px");
ornChangeFlag=1;
$(".more-less-button").css("display","none");
m.find("div.pages span").remove();
$.fn.mediaCarousel(d);
ornChangeFlag=1;
return false
}}}});
(function(f,c,a,h){var e="leadProductInfo",g={scrollTime:500,videoIndex:0};
function b(l,k){this.element=l;
this.parent=l.parentNode;
this.options=f.extend({},g,k);
this._defaults=g;
this._name=e;
this.element=f(this.element);
this.init()
}function d(m){for(var l=0;
l<m.link.length;
l++){if(m.link[l].rel=="related"){var k=m.link[l].href;
return k.replace(/.*\//,"").replace(/\?.*$/,"")
}}return"unknown"
}f.fn.getProductInfoVideoFromYTFeed=function(l,k){this.each(function(){$overlay=f(this);
var o=l.snippet.resourceId.videoId,n="https://www.youtube.com/watch?v="+o;
var m="no";
if(f(l).isVideoItemAgeGated){if(f(l).isVideoItemAgeGated()){m="yes"
}}if(k==="true"){if($overlay.find(".hover").length==0){$overlay.append('<div class="hover"><div class="tab">VIDEO</div><div class="content"><p></p></div></div>')
}$overlay.find(".hover .content p").html(l.snippet.title)
}else{}$overlay.find(".button").parent().append('<img src="https://img.youtube.com/vi/'+o+'/hqdefault.jpg" class="ytImage" />');
$overlay.parent("a").attr("href",n).addClass("lb_youtube").attr("data-agegating",m).removeClass("lb_ytPlaylist");
if(f.fn.pdcLightbox){$overlay.parent("a").pdcLightbox()
}})
};
b.prototype.init=function(){var u=this.options,A=this.element,q=A.find(".overlay"),F=f("div.prod-media > a.more-link",A),y=u.scrollTime,z=q.parent("a").attr("data-playlist-id"),E=q.parent("a").attr("data-playlist-hover"),t=false,p=f("div.prod-media");
function C(){f.getJSON("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId="+z+"&key=AIzaSyAKRzl4h3hhO1X3imjDNBNFkgqmiBhzk_U&alt=json&callback=?",function(G){var o=G.items[u.videoIndex];
t=true;
q.getProductInfoVideoFromYTFeed(o,E)
})
}function l(){$buttons=A.find(".button-more");
$buttons.each(function(){f(this).data("text-original",f(this).text())
});
$buttons.on("click",function(){var o=f(this);
o.prev(".hide-show").toggleClass("visible");
o.text()==o.data("text-swap")?o.text(o.data("text-original")):o.text(o.data("text-swap"))
})
}if(z!=h){var k=f(".cm109-mediaCarousel li .media a"),D=this,r=k.length;
if(r>0){k.each(function(){var o=f(this);
if(o.attr("data-playlist-id")==z){t=true;
return
}r--;
if(!r){C()
}})
}else{C()
}setTimeout(function(){if(!q.hasClass("donothide")&&!t){A.find(".prod-media").remove()
}},10000)
}if(F.length){var w=f(".cm109-mediaCarousel");
var x=f(".cm109-mediaCarousel").closest("section");
var m=f("#sony-bar")?f("#sony-bar").outerHeight():0;
var B=f("#shared-nav-root")?f("#shared-nav-root").outerHeight():0;
var v=f("#jetstream-tertiary-nav")?f("#jetstream-tertiary-nav").outerHeight():0;
if(w.length){var n=parseInt(w.css("paddingTop"),10);
F.show();
F.on("click",function(o){o.preventDefault();
f("html, body").animate({scrollTop:parseInt(x.offset().top,10)-(m+B+v)},y)
}).addClass("visible")
}}if(!p.length){f(".CM106-lead-product-info .prod-meta ul").addClass("release-info-no-lb");
l()
}if(f(c).width()<736){if(f(".herobanner .thinherobanner").length>0||f(".herobanner .cm077-heroBanner").length>0){f(".CM106-lead-product-info .prod-meta span.psvr").attr("style","top: 2px !important");
f(".CM106-lead-product-info .prod-meta span.psvrmode").attr("style","top: 2px !important")
}if(f("#huge-hero-banner").length>0){f(".CM106-lead-product-info .prod-meta span.psvr").attr("style","top: -18px !important");
f(".CM106-lead-product-info .prod-meta span.psvrmode").attr("style","top: -18px !important")
}}};
f.fn[e]=function(k){return this.each(function(){if(!f.data(this,"plugin_"+e)){f.data(this,"plugin_"+e,new b(this,k))
}})
}
})(jQuery,window,document);
/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 * Original code (with comments) can be found at:
 * http://coding.smashingmagazine.com/2011/10/11/essential-jquery-plugin-patterns/
 */
;
(function(e,c,a,g){var d="gotWantOne",f={wantSelector:".want-one",gotSelector:".got-one",iconSelector:".icon",textSelector:"h4",dataType:"jsonp",jsonpCallback:"functionCall",initialisedClassName:"initialised",activeClassName:"active",selectedClassName:"selected",disabledClassName:"disabled",itemUUIDQueryStringKey:"uuid",returnUrlQueryStringKey:"postSignInUrl",wantStatusQueryStringKey:"userWant"};
function b(k,h){this.element=k;
this.$element=e(k);
this.parent=k.parentNode;
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this._intialised=false;
this._toggleLock=false;
this._want=false;
this._got=false;
this._returnUrl=encodeURI(c.location.href.split("?")[0]);
this.init()
}b.prototype.init=function(){var h=this.options;
this.$got=this.$element.find(h.gotSelector);
this.$want=this.$element.find(h.wantSelector);
this.$wantIcon=this.$want.find(h.iconSelector);
this.$wantText=this.$want.find(h.textSelector);
this.itemUUID=this.$wantIcon.data("uuid");
this.signInUrl=this.$wantIcon.data("sign-in-url");
this.ajaxUrl=this.$wantIcon.data("ajax-url");
if(this.isSignedIn()==true){this.getCurrentStatusFromServer()
}else{this.updateUI();
this.initialiseComplete()
}};
b.prototype.getCurrentStatusFromServer=function(){var h=this,k=h.options,l={};
if(typeof(h._xhr)!="undefined"){h._xhr.abort()
}l[k.itemUUIDQueryStringKey]=h.itemUUID;
h._xhr=e.ajax({dataType:k.dataType,jsonpCallback:k.jsonpCallback,url:h.ajaxUrl,xhrFields:{withCredentials:true},data:l,success:function(m){h.processServerResponse(m);
h.initialiseComplete();
h.processPendingUserAction()
},error:function(m,o,n){},complete:function(m,n){}})
};
b.prototype.processServerResponse=function(h){if(h.error){}else{if(String(h.user.got)=="true"){this.setGot(h.user.got,true)
}else{this.setGot(h.user.got,false);
this.setWant(h.user.want,false)
}}};
b.prototype.processPendingUserAction=function(){if(this.hasGot()){return
}if(c.location.search.length==0){return
}var q=this.options,m=c.location.search.substring(1).split("&"),h="",k="";
var l=m.length;
while(l--){var n=m[l].split("="),p=n[0];
if(p==q.itemUUIDQueryStringKey){k=decodeURIComponent(n[1]);
if(k!=this.itemUUID){return
}}if(p==q.wantStatusQueryStringKey){h=n[1]
}}if(h!=""&&k!=""){this.setWant(h,true)
}};
b.prototype.updateUI=function(){var h=this.options;
if(this.isInitialised()==false){if(this.hasGot()){if(this.$want.length!=0){this.$want.remove()
}return
}else{if(this.$got.length!=0){this.$got.remove();
this.attachClickHandler()
}}}if(this.doesWant()){this.$wantIcon.addClass(h.activeClassName);
this.$wantText.html(this.$wantText.data("active-text"))
}else{this.$wantIcon.removeClass(h.activeClassName);
this.$wantText.html(this.$wantText.data("inactive-text"))
}};
b.prototype.attachClickHandler=function(){var h=this,k=h.options;
h.$element.on("click",k.iconSelector,function(l){l.preventDefault();
h.toggleButton(this)
})
};
b.prototype.updateCurrentStatusOnServer=function(){var h=this,k=h.options,l={};
if(h.isSignedIn()){l[k.itemUUIDQueryStringKey]=this.itemUUID;
l[k.wantStatusQueryStringKey]=this.doesWant();
if(typeof(h._xhr)!="undefined"){h._xhr.abort()
}h._xhr=e.ajax({dataType:"jsonp",jsonpCallback:k.jsonpCallback,url:h.ajaxUrl,xhrFields:{withCredentials:true},data:l,success:function(m){if(typeof(h._timeout)!="undefined"){c.clearTimeout(h._timeout)
}h._timeout=c.setTimeout(function(){},2000)
},error:function(m,o,n){},complete:function(m,n){}})
}else{this.logUserIn()
}};
b.prototype.logUserIn=function(){var k=this.options;
var h=this.signInUrl+"?";
h+=k.returnUrlQueryStringKey+"="+this._returnUrl+"&";
h+=k.itemUUIDQueryStringKey+"="+this.itemUUID+"&";
h+=k.wantStatusQueryStringKey+"="+this.doesWant();
c.location.href=h
};
b.prototype.toggleButton=function(h){if(!this.isToggleLocked()){this.lockToggle();
var k=e(h),l=k.data("toggle-type");
this.toggleWant();
this.updateUI();
this.unlockToggle()
}};
b.prototype.isSignedIn=function(){return this.$wantIcon.data("signed-in")
};
b.prototype.initialiseComplete=function(){this._intialised=true;
this.$element.addClass(this.options.initialisedClassName)
};
b.prototype.isInitialised=function(){return this._intialised
};
b.prototype.toggleWant=function(){this._want=!this._want;
this.updateCurrentStatusOnServer()
};
b.prototype.returnBoolean=function(k,h){if(typeof(k)!="undefined"){switch(String(k)){case"true":return(true);
case"false":return(false);
default:return(h)
}}else{return h
}};
b.prototype.setWant=function(l,k){var h=this.doesWant(),m=this.returnBoolean(l,h);
if(m!=h){this._want=m;
if(k){this.updateCurrentStatusOnServer()
}}this.updateUI()
};
b.prototype.setGot=function(k,h){this._got=this.returnBoolean(k,this._got);
if(h){this.updateUI()
}};
b.prototype.doesWant=function(){return this._want
};
b.prototype.hasGot=function(){return this._got
};
b.prototype.lockToggle=function(){this._toggleLock=true
};
b.prototype.unlockToggle=function(){this._toggleLock=false
};
b.prototype.isToggleLocked=function(){return this._toggleLock
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(e,c,a,g){var d="leadProductInfo-followbutton",f={followGameLink:"https://stagea.us.playstation.com/playstation/psn/game/follow",unFollowGameLink:"https://stagea.us.playstation.com/playstation/psn/game/unfollow",checkFollowGameLink:"https://stagea.us.playstation.complaystation/playstation/psn/game/checkfollow"};
function b(k,h){this.element=k;
this.$element=e(this.element);
this.$elementParent=this.$element.parent();
this.options=e.extend(true,{},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){var h=this;
var k=h.options;
this.$followGameContainer=h.$element;
this.$followGameButtons=h.$followGameContainer.find(".followgamebuttons");
this.$followButton=h.$followGameContainer.find(".followbutton");
this.$unfollowButton=h.$followGameContainer.find(".unfollowbutton");
this.itemProductId=h.$followGameButtons.data("productid");
h.checkFolowGame();
h.$followButton.on("click",function(){h.followGame()
});
h.$unfollowButton.on("click",function(){h.unfollowGame()
})
};
b.prototype.followGame=function(){var h=this;
var k=h.options;
if(e.cookie("userinfo")){e.ajax({url:k.followGameLink,type:"post",dataType:"json",cache:false,data:{userInfoCookie:e.cookie("userinfo"),productId:h.itemProductId,operation:"follow"}}).done(function(l){if(l.status==="success"){h.$followButton.addClass("hide");
h.$unfollowButton.removeClass("hide")
}})
}else{PDC.MyPlaystationProfile.redirectToLogin()
}};
b.prototype.unfollowGame=function(){var h=this;
var k=h.options;
e.ajax({url:k.unFollowGameLink,type:"post",dataType:"json",cache:false,data:{userInfoCookie:e.cookie("userinfo"),productId:h.itemProductId,operation:"unfollow"}}).done(function(l){if(l.status==="success"){h.$followButton.removeClass("hide");
h.$unfollowButton.addClass("hide")
}})
};
b.prototype.checkFolowGame=function(){var h=this;
var k=h.options;
if(e.cookie("userinfo")){e.ajax({url:k.checkFollowGameLink,dataType:"json",crossDomain:true,data:{userInfoCookie:e.cookie("userinfo"),productId:h.itemProductId}}).done(function(l){if(typeof l!=="undefined"&&l!==null){if(l.isFollow==true){h.$followButton.addClass("hide");
h.$unfollowButton.removeClass("hide")
}else{h.$followButton.removeClass("hide");
h.$unfollowButton.addClass("hide")
}}})
}};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(d,f,k,b){var e="leadProductInfo-reviewsRatingsWishlist",c={dataType:"json"};
function l(n,m){var o=m||{};
this.sku=o.sku;
this.showReviewsRatings=m.showReviewsRatings;
this.showScore=m.showScore;
this.reviewsRatingsUrl=m.reviewsRatingsUrl;
this.wishlistServiceUrl=m.wishlistServiceUrl;
this.signinUrl=m.signinUrl;
this.signinUrl=this.signinUrl.replace(/postSignInURL=[^&]+/,"postSignInURL="+encodeURI(k.location.href+"#signin-complete"));
this.$score=d(n).find(".item.score");
this.$ratings=d(n).find(".item.user-rating");
this.$wantgot=d(n).find(".item.want");
this.userinfo=d.cookie("userinfo");
this.init()
}var a={init:function(o){if(o.$score.length==1){o.$score.show()
}else{if(o.$score.length>1){var n=o.$score.length;
var m=Math.round(Math.random()*n);
if(m==n){m--
}console.log("INDEX: "+m);
d(o.$score.get(m)).show()
}}}};
var h={init:function(m){PDC.ReviewsRatings.getRating(m.reviewsRatingsUrl,m.sku,function(n){if(n.averageGameRating>=0){m.$ratings.find(".value div").removeClass("count-0").addClass("count-"+n.averageGameRating)
}});
PDC.ReviewsRatings.getFeedback(m.reviewsRatingsUrl,m.sku,null,"dateReviewed",true,function(n){m.$ratings.find(".info .review-count").text(n.gameReviews)
})
}};
var g={wantAction:function(m){d.ajax({url:m.wishlistServiceUrl,type:"POST",data:{gameId:m.sku,action:"addToWishList",userInfoCookie:m.userinfo},dataType:"json",success:function(n){if(n.status==1){m.$wantgot.find("div.want-one").hide();
m.$wantgot.find("div.got-one").show()
}else{pdclog("wantAction: ");
pdclog(n)
}},error:function(p,o,n){pdclog("wishlist error #2: "+o);
pdclog(n)
}})
},init:function(m){if(!m.wishlistServiceUrl){pdclog("no url defined")
}else{if(m.userinfo){d.ajax({url:m.wishlistServiceUrl,type:"POST",data:{gameId:m.sku,action:"isGameInWishList",userInfoCookie:m.userinfo},dataType:"json",success:function(n){if(n.status==1){m.$wantgot.find("div.want-one").hide();
m.$wantgot.find("div.got-one").show();
m.$wantgot.find("a.want-icon").off("click")
}else{pdclog("wishlist: not saved")
}},error:function(p,o,n){pdclog("wishlist error: "+o);
pdclog(n)
},failure:function(n){pdclog("failure: "+n)
}});
m.$wantgot.find("a.want-icon").click(function(){g.wantAction(m)
})
}else{pdclog("wishlist: not logged in");
m.$wantgot.find("a.want-icon").click(function(){pdclog("wishlist: clicked anon");
k.location=m.signinUrl
})
}}}};
l.prototype.init=function(){pdclog("RRW init");
g.init(this);
a.init(this);
if(this.showReviewsRatings=="true"){h.init(this)
}};
d.fn[e]=function(m){return this.each(function(){if(!d.data(this,"plugin_"+e)){d.data(this,"plugin_"+e,new l(this,m))
}})
}
})(jQuery,window,document);
(function(e,c,a,g){var d="kamajiBoxCarousal",f={latsetGamesDataUrl:"/apps/pdc/components/functional/kamajiMediaCarousel/clientlibs/js/latest_game.json",latestShowsDataUrl:"/apps/pdc/components/functional/kamajiMediaCarousel/clientlibs/js/latest_shows.json",latestMoviesDataUrl:"/apps/pdc/components/functional/kamajiMediaCarousel/clientlibs/js/latest_movies.json",templateId:"",dataType:"games",slidesToShow:3,slidesToScroll:3,showDots:true};
function b(l,k){this.element=l;
this.$element=e(this.element);
this.options=e.extend({},f,k);
this._defaults=f;
this._name=d;
this.$loadingIcon=this.$element.find(".loader");
this.$errorMsg=this.$element.find(".message-box");
this.$carousalBlock=this.$element.find(".tiles-slider");
this.$carousalSection=this.$element.find(".carousel-section-link");
this.init();
var h=this;
e(c).bind("orientationchange",function(){setTimeout(function(){h.initClickAction(h.$element.find(".tiles-slider").find(".tile-image"),"image",h.options.dataType);
h.$carousalBlock.find(".mediaTital").dotdotdot()
},500)
})
}b.prototype.init=function(){var h=this;
h.initClickAction(h.$carousalSection,"text",h.options.dataType);
h.loadData()
};
b.prototype.loadData=function(){var k=this;
var h=k.options.dataType;
var l=k.options.latsetGamesDataUrl;
if(h==="shows"){l=k.options.latestShowsDataUrl
}else{if(h==="movies"){l=k.options.latestMoviesDataUrl
}}e.when(e.ajax({type:"get",async:true,crossDomain:true,url:l,dataType:"json"})).done(function(m){if(!e.isEmptyObject(m)&&typeof m.products!=="undefined"&&m.products.length>=1){k.$loadingIcon.addClass("hide");
k.$carousalBlock.append(tmpl(k.options.templateId,m));
k.$carousalBlock.slick({slidesToShow:k.options.slidesToShow,slidesToScroll:k.options.slidesToScroll,dots:k.options.showDots,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}}]});
k.$carousalBlock.find(".mediaTital").dotdotdot();
k.initClickAction(k.$carousalBlock.find(".tile-image"),"image",h)
}else{k.$element.hideSingleComponentSection()
}}).fail(function(){k.$element.hideSingleComponentSection()
})
};
b.prototype.initClickAction=function(k,h,l){k.click(function(){c.open(e(this).data("href"))
})
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(e,c,a,g){var d="inlineTabs",f={fakeTimeDelay:1000,selectedClassName:"selected",loadingClassName:"loading",activeClassName:"active",contentContainerSelectorPrefix:".content-",disabledClassName:"type-disabled",tabSelector:".in-line-tab-item",headerTabSelector:".tab-heading",activeSelector:".active",wrapperSelector:".wrapper",initialTab:".tab-1",tabIndexClassPrefix:"tab-"};
function b(k,h){this.element=k;
this.$element=e(this.element);
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init();
if(!CQ||!CQ.WCM||(CQ&&CQ.WCM&&CQ.WCM.getMode()!=null&&CQ.WCM.getMode()!="edit")){this.hideEmptyTab()
}}b.prototype.init=function(){var h=this;
if(e.fn.getURLVar("q")){e(this.options.tabSelector+this.options.initialTab,this.$element).each(function(){e(this).removeClass(h.options.disabledClassName).addClass(h.options.selectedClassName).siblings().removeClass(h.options.selectedClassName)
});
e(".in-line-tab-item",this.$element).each(function(){h.triggerQuery(e(this))
})
}e(".CM090-inlineTabs > .wrapper .dropdownEnabled div.tabs").off("click").on("click",function(k){if((e(c).width()<800)||((c.orientation==90||c.orientation==-90)&&e(c).width()<800)){e(this).toggleClass("expanded");
var m=e(".CM090-inlineTabs .wrapper .dropdownEnabled div.expanded a.selected");
var l=e(".CM090-inlineTabs .wrapper .dropdownEnabled div.expanded a:first-child");
m.insertBefore(l)
}});
this.$element.on("click",this.options.tabSelector,function(k){k.preventDefault();
var m=e(this),l=h.$element;
if(m.hasClass(h.options.disabledClassName)){return false
}if(typeof m.attr("data-next-page")=="undefined"){m.addClass(h.options.selectedClassName).siblings().removeClass(h.options.selectedClassName);
l.find(h.options.activeSelector).removeClass(h.options.activeClassName);
l.find(h.options.headerTabSelector+"."+m.attr("header-class")).addClass(h.options.activeClassName).siblings().removeClass(h.options.activeClassName);
e(a.getElementById(m.attr("data-content-id"))).addClass(h.options.activeClassName);
if(typeof PriceSpider!=="undefined"){PriceSpider.rebind()
}}else{h.triggerQuery(m,true)
}})
};
b.prototype.triggerQuery=function(l,p){var m=e(l);
var k=m.attr("data-next-page"),o=m.attr("data-content-id"),n=m.attr("data-ajax-cache");
var h=(this.$element.find(this.options.wrapperSelector).css("display")=="none");
if(h){return
}if(k&&o){$targetContainer=e(a.getElementById(o));
sCount=$targetContainer.attr("count");
if(sCount){if(k.indexOf("?")!=-1){k=k+"&count="+sCount
}else{k=k+"?count="+sCount
}}if(p){m.addClass(this.options.selectedClassName).siblings().removeClass(this.options.selectedClassName)
}this.$element.find(this.options.activeSelector).prepend("<div class='ajax-loader'> </div>");
e(c).trigger("single_tab_query",[k,$targetContainer,n,m,this.options.fakeTimeDelay,p])
}};
b.prototype.hideEmptyTab=function(){this.$element.find(".content").each(function(){var m=e(this);
var n=null;
var o=m.text();
if(o&&o.replace(/\s+/g,"")==""){n=m.find(".wrapper");
pdclog(["inlinetabs: evaluated text is empty! ",m])
}else{pdclog("inlinetabs: not empty: ",m)
}if(n!=null){m.hide();
m.siblings().each(function(){if(e(this).css("display")!="none"){}});
var k=n.find(">.content").index(m);
var l=".tab-wrapper .tabs a:eq("+k+")";
var h=n.find(l);
if(h){h.hide();
h.siblings().each(function(){if(e(this).css("display")!="none"){e(this).addClass("active");
e(this).addClass("selected")
}})
}}})
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(c,f,h,a){var e="imageCarWheel",b={};
function k(n,m){this.element=n;
this.$element=c(this.element);
this.options=c.extend({},b,m);
this._defaults=b;
this._name=e;
var l=this;
var o;
c(f).bind("resize orientationchange",function(){clearTimeout(o);
o=setTimeout(function(){l.$element.find("ul").trigger("destroy");
l.init()
},300)
});
l.init()
}var d=function(){function m(t,p,w,A,q,z,y){var x=t.parentNode,v=2;
if(9===x.nodeType){return true
}if("0"===l(t,"opacity")||"none"===l(t,"display")||"hidden"===l(t,"visibility")){return false
}if("undefined"===typeof p||"undefined"===typeof w||"undefined"===typeof A||"undefined"===typeof q||"undefined"===typeof z||"undefined"===typeof y){p=t.offsetTop;
q=t.offsetLeft;
A=p+t.offsetHeight;
w=q+t.offsetWidth;
z=t.offsetWidth;
y=t.offsetHeight
}if(x){if(("hidden"===l(x,"overflow")||"scroll"===l(x,"overflow"))&&t.offsetParent===x){if(q+v>x.offsetWidth+x.scrollLeft||q+z-v<x.scrollLeft||p+v>x.offsetHeight+x.scrollTop||p+y-v<x.scrollTop){return false
}}if(t.offsetParent===x){q+=x.offsetLeft;
p+=x.offsetTop
}return m(x,p,w,A,q,z,y)
}return true
}function l(o,n){if(f.getComputedStyle){return h.defaultView.getComputedStyle(o)[n]
}if(o.currentStyle){return o.currentStyle[n]
}}return{getStyle:l,isVisible:m}
}();
var g=function(){var l=c(".imageWheelCarousel");
l.css("visibility","visible");
l.find(".container-block").remove();
for(j=0;
j<l.length;
j++){var m=0;
var n=c(".imageWheelCarousel:eq("+j+") ul li");
boxLength=Math.floor(n.length);
n.each(function(o,p){if(d.isVisible(this)){m++
}});
modulusBlock=boxLength%m;
if(modulusBlock!=0){for(i=0;
i<m;
i++){blockLength=(parseInt(boxLength)+parseInt(i));
if(blockLength%m!=0){c(".imageWheelCarousel:eq("+j+") ul").trigger("insertItem","<li class='container-block'><div></div></li>","end")
}else{i=m
}}}}};
k.prototype.init=function(){var p=this.$element.attr("id"),r=this.$element,o=r.find("ul"),l,m=this;
m.$carDom?o.html(m.$carDom.html()):m.$carDom=o.clone();
r.find(".next").addClass("bcnext"+p);
r.find(".prev").addClass("bcprev"+p);
r.find(".pages").addClass("bcpages"+p);
var n=r.find("ul").children("li:first").width();
var q=c(f).width()<=960?3:4;
o.carouFredSel({auto:false,circular:false,infinite:false,items:{width:n,height:"auto",visible:{max:q}},next:".bcnext"+p,prev:".bcprev"+p,pagination:".bcpages"+p,responsive:true,swipe:{onMouse:true,onTouch:true,options:{excludedElements:"button, input, select, textarea"}},width:null,height:200,scroll:{onAfter:function(u){if(l!=null){l.focus()
}}},onCreate:function(u){r.find("div.loader").hide();
o.show();
g()
}});
var t=o.triggerHandler("currentVisible");
o.find("li a").each(function(){var v=c(this);
var u=false;
v.focus(function(B){var C=c(this),E=C.parents("li"),x,A,y,w=o.find("li"),z=Math.ceil(w.length/t.length);
if(u){u=false;
l=null
}else{B.preventDefault();
u=true;
x=w.index(E);
A=Math.ceil((x+1)/t.length)-1;
y=o.triggerHandler("currentPage");
var D=(y+A);
if(D>z){D=D-z
}if(D===y){l=null;
C.focus()
}else{o.triggerHandler("slideToPage",D);
l=C
}}})
});
r.bind("keydown",function(w){var v=w.keyCode||w.which;
if(v==9){var x=o.triggerHandler("currentVisible"),y=c(h.activeElement),u=y.parents("li");
if(w.shiftKey){if(y.is(".bcnext"+p)){w.preventDefault();
x.last().find("a").focus()
}}else{if(x.index(u)===x.length-1){w.preventDefault();
c(".bcnext"+p).focus()
}}}});
if(typeof c.fn.pdcLightbox==="function"){c(".lb_imageWheel").pdcLightbox()
}};
c.fn[e]=function(l){return this.each(function(){if(!c.data(this,"plugin_"+e)){c.data(this,"plugin_"+e,new k(this,l))
}})
}
})(jQuery,window,document);
(function(e,c,a,g){var d="hugeHeroBanner",f={sectionOffset:0,moveNextSection:true,pullUpClassNames:["headingWrapper","moduleComponent"],scriptBlocker:true,videoIncluded:true};
function b(k,h){this.element=k;
this.$element=e(k);
this.parent=k.parentNode;
this.$banner=e(k).find(".banner-wrapper");
this.$animatelayers=e(k).find(".layer:visible");
this.$movingLayers=e(k).find(".wiggle");
this.$background=e(k).find("#huge-hero-banner-bg");
this.useVideo=e("html").hasClass("video");
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.replaceButton=function(){if(e(a).width()<700||e(a).width()==736){if(e("#huge-hero-content").find(".CC024-hero-title-lockup").length>0){e(".hugeherobanner").find("#huge-hero-banner").removeClass("extralCls")
}else{e(".hugeherobanner").find("#huge-hero-banner").addClass("extralCls")
}}else{console.log("ELSEE")
}};
b.prototype.init=function(){var w=this,q=false,x=e(w.element),u=x.parents("section"),D=u.next("section"),m=w.$banner,r=m.find(".load-layer"),C=r.length,o=1,E=false;
blockerClosed=true,$loader=x.find(".loader-wrapper"),$canvas=e(".progress-bar"),startBannerFlag=false,$video=e(w.element).find(".intro-video"),videoObject=$video[0],$ageValidated=e(".age-validated").length>0;
this.replaceButton();
var z=this;
e(c).resize(function(){z.replaceButton()
});
this.$element.find(".content-wrap .title-award-left").css({top:this.$element.find(".layer-heading .text-lock-up").outerHeight(true)+54});
if($ageValidated){blockerClosed=true
}$loader.show();
if(w.useVideo&&videoObject){function k(){o=0
}videoObject.oncanplaythrough=k();
if(w.options.videoIncluded&&w.useVideo){var n=$canvas.get(0),A=1,y=n.getContext("2d");
y.fillStyle="gray";
if(videoObject.buffered){videoBuffer=c.setInterval(function(){var G=videoObject.buffered;
if(G){for(var H=0;
H<G.length;
H++){var I=G.start(H)/videoObject.duration*n.width,F=G.end(H)/videoObject.duration*n.width;
y.fillRect(I+A,A,Math.max(A*2,F-I-A*2),n.height-A*2);
if(!o||videoObject.readyState==4){E=true;
c.clearInterval(videoBuffer);
v()
}}}},500)
}}else{$canvas.remove();
o=0
}}else{v()
}function v(){r.each(function(){var G=e(this);
var F=G.attr("data-background")+"?nocache="+new Date().getTime();
e("<img/>").attr("src",F).load(function(){C--;
if(!C){if(!w.useVideo){startBannerFlag=true;
h()
}else{if(w.options.scriptBlocker){if(blockerClosed&&E){startBannerFlag=true;
h()
}}else{if(E){startBannerFlag=true;
h()
}}}}})
})
}if(this.options.scriptBlocker&&!$ageValidated){blockerClosed=false;
e(c).bind("bannerBlockerClosed",function(F){blockerClosed=true;
if(!C&&E||!w.useVideo){h()
}})
}if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)){q=true
}if(w.options.moveNextSection){D.css({position:"relative",top:w.options.sectionOffset+"px"});
var t=D.children("div"),p=false;
t.each(function(){var F=e(this);
e.each(w.options.pullUpClassNames,function(G,H){if(F.hasClass(H)){p=true;
return false
}});
if(p){return false
}});
D.find("> :first-child")
}function h(){$loader.hide();
w.playVideo(q)
}var B=Modernizr.touch,l=e("html.lt-ie8").length>0;
if(!B&&!l){e(c).bind("scroll",function(){var I=e(c).scrollTop();
var G=e(c).height();
var F=(1-(I/G)*3);
var H=-3-((I/G)*30);
w.$element.find(".left-shapes").css("left",H+"%");
w.$element.find(".right-shapes").css("right",H+"%");
w.$element.find(".fadeItem").css({opacity:F})
})
}if(B){w.backgroundIn=true;
if(typeof ScrollControl==="undefined"){ScrollControl=new ScrollrControllr()
}ScrollControl.register({trigger:w.$element,onScrollTo:function(){w.$background.show()
},onScrollFrom:function(){w.$background.hide()
}})
}e(c).resize(function(){w.relativePosition();
w.$movingLayers.each(function(){w.resetCss(this);
var F=w.setPosition(this)
})
})
};
b.prototype.initAnimate=function(m){var l=0;
var k=this;
var h=k.$animatelayers.length;
k.$animatelayers.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function(n){l++;
if(l==h){k.$animatelayers.each(function(){e(this).removeClass("animate");
k.setPosition(this)
});
k.relativePosition();
if(!m){k.bindMouseMove()
}k.$animatelayers.off("webkitAnimationEnd oanimationend msAnimationEnd animationend")
}})
};
b.prototype.playVideo=function(o){var m=this;
var l=m.$banner;
var k=e(m.element).find(".intro-video");
var h=l.find(".layer");
if(o){k.remove();
n()
}else{if(k.length&&m.useVideo){l.hide();
k.fadeIn(100);
k.get(0).play();
h.removeClass("animate").hide();
if(Modernizr.video){k.bind("ended",function(){k.fadeOut("200",function(){n()
})
})
}else{k.hide();
n()
}}else{n()
}}function n(){l.fadeIn(1,function(){h.each(function(){var p=e(this);
if(p.parent().is(":visible")){e(this).addClass("animate")
}e(this).show()
});
m.$animatelayers=e(m.element).find(".layer:visible");
m.initAnimate(o)
});
return
}};
b.prototype.getWindowWidth=function(){var h=this;
if(e(c).width()>=1600){h.disableBkgMove=true
}else{h.disableBkgMove=false
}};
b.prototype.bindMouseMove=function(){var k=this,h=e(this);
e(k.element).bind("mousemove",l(function(o){var p=o.pageY,q=o.pageX;
var n=h.attr("windowCenterX");
var m=h.attr("windowCenterY");
k.$movingLayers.each(function(){var w=e(this);
var y=w.attr("data-distance");
var x=n-q;
var r=x/n;
var v=m-p;
var t=v/m;
var u=e(c).width()-(parseInt(w.attr("data-offset-right"))+(r*y));
k.animateLayer(w,u,y)
})
},20));
function l(n,m){var o=null;
return function(){var q=this,p=arguments;
clearTimeout(o);
o=setTimeout(function(){n.apply(q,p)
},m)
}
}};
b.prototype.animateLayer=function(k,h,l){k.animate({right:h},{queue:false,duration:1500+(l*10),easing:"easeOutSine"})
};
b.prototype.relativePosition=function(m){var o=this,n=e(this),h=e(m);
var l=Math.floor(e(o.element).width()/2);
var k=Math.floor(e(o.element).height()/2);
n.attr("windowCenterX",l);
n.attr("windowCenterY",k);
return
};
b.prototype.setPosition=function(m){var n=this,k=e(m);
var q=k.offset(),l=q.left,p=q.left+k.outerWidth(),h=q.top;
var o={layerX:p,layerY:h};
k.attr("data-offset-left",l);
k.attr("data-offset-right",p);
return(o)
};
b.prototype.resetCss=function(k){var l=this,h=e(k);
h.css({right:h.attr("data-right-pos"),left:""})
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(c,b,a,d){c(a).ready(function(){function e(){var B=c("#CM001_homeHero"),R=this,aC=c("div.foreground-container",B),D=c("div.background-container",B),ar=c("div.pagination-container",aC),n=c(".thumbnail",ar),aF=c("div.left-shapes",B),al=c("div.right-shapes",B),G=c(".slide",D),ad=c(".slide",aC),y="loading",x="slide-",p=false,F="stopped",o=0,ay="loaded",U="paused",N=c(".slide",D).length-1,am=-1,av=[],aB=1,P=1,w=0.5,aE="ease-in-out",u="<style type='text/css'>",T,g=false,aD=-1,W,E,ax=[],ah,v,aq,m,X,A=0.7,an,ak,aA,z,C,ag=false,ap=false,S=false,Q="undefined"!==typeof(b.innerHeight)?b.innerHeight:a.documentElement.offsetHeight,aw,V=false,ai=[],az=1024,aj=420,f=5000,L=10000,r;
var M={};
function ae(t){return"-webkit-transition: "+t+";\n-moz-transition: "+t+";\n-ms-transition: "+t+";\n-o-transition: "+t+";\ntransition: "+t+";\n"
}function ac(){g=true;
b.clearTimeout(aD);
aD=b.setTimeout(function(){g=false
},an)
}function aa(t){t.bVideo=false;
t.$bg.toggleClass("video image").find("video").remove()
}function H(aH,aG){if(Modernizr.video&&!Modernizr.touch){aH.bVideo=true;
aH.$video=c("video",aG);
aH.$video[0].volume=0;
aH.$video.on("ended",function(){if(aH.slide===o){this.setAttribute("currentTime",0);
this.play()
}});
ai.push(aH)
}else{aa(aH)
}}function au(){if(ax[o].bVideo){V=false;
ax[o].$video[0].pause()
}}function at(){if(ax[o].bVideo){var t=ax[o].$video[0];
V=true;
if(t.readyState>0){t.currentTime=0
}t.play()
}}function ab(){b.clearTimeout(am);
ar.addClass(U);
ap=true;
au()
}if(Modernizr.csstransitions){an=(w*2+aB)*1000;
W=function(){ac();
var t=o;
do{o=++o<=N?o:0;
if(o===t){break
}}while(!ax[o].loaded);
B.attr("class",x+o);
at();
if(!p){X()
}};
E=function(){ac();
var t=o;
do{o=--o>=0?o:N;
if(o===t){break
}}while(!ax[o].loaded);
B.attr("class",x+o);
at();
if(!p){X()
}};
ah=function(t){this.$thumb=t;
this.time=t.data("time");
this.slide=t.data("slide");
av.push((this.time+aB+w)*1000);
u+="#CM001_homeHero."+x+this.slide+" .pagination-container ."+x+this.slide+" .blue-timer{\n";
u+=ae("opacity "+w+"s "+aE+" "+w+"s, height "+this.time+"s linear "+(aB+w)+"s");
u+="}\n";
u+="#CM001_homeHero."+x+this.slide+" .pagination-container .narrow .pagination-"+this.slide+"{\n";
u+=ae("background-position "+this.time+"s linear "+(aB+w)+"s");
u+="}\n";
u+="#CM001_homeHero."+x+this.slide+" .pagination-container .portrait .pagination-"+this.slide+"{\n";
u+=ae("background-position "+this.time+"s linear "+(aB+w)+"s");
u+="}\n";
this.$bg=G.filter("."+x+this.slide);
this.image={wide:this.$bg.find("div.wide div"),narrow:this.$bg.find("div.narrow div"),portrait:this.$bg.find("div.portrait div")};
if(this.$bg.hasClass("video")){H(this,this.$bg)
}else{this.bVideo=false
}this.loaded=false
};
aq=function(){p=true;
B.attr("class",x+o+" "+F);
at()
};
X=function(){var t=o<=N?o:0;
PDC.DigitalDataAPI.event.add(c(this),{eventName:"homeherobanner",eventAction:"click"},{assetName:"empty",linkUrl:"empty",impressionCount:"1",label:"empty",moduleName:"homeherobanner",elementType:"image",userActionFlag:true});
b.clearTimeout(am);
am=b.setTimeout(function(){W();
if(M[t]==null||M[t]<3){if(M[t]==null){M[t]=0
}M[t]++
}},av[t])
};
C=function(){var t=y+" loader";
B.removeClass(t);
if(ax[o].bVideo){at()
}if(!r){if(typeof s!=="undefined"&&(typeof CQ_Analytics.ClientContextMgr.areStoresInitialized==="undefined"||!CQ_Analytics.ClientContextMgr.areStoresInitialized)){c(a).on("sitecatalystAfterCollect",function(){X()
})
}else{X()
}}ag=true;
b.setTimeout(function(){aC.addClass(ay);
aF.addClass(ay);
al.addClass(ay);
S=true
},(w+P)*1000)
};
aw=function(){ap=false;
ar.removeClass(U);
at();
X()
}
}else{ak=c("div.narrow > div",aC);
w*=1000;
aB*=1000;
an=(w*2+aB)*1100;
aA=Modernizr.bgpositionxy?{"background-position-y":"126px"}:{backgroundPosition:"0 126"};
ah=function(t){this.$thumb=t;
this.time=t.data("time")*1000;
av.push(this.time+aB+w);
this.slide=t.data("slide");
this.$bg=G.filter("."+x+this.slide);
this.$fg=ad.filter("."+x+this.slide);
this.$timer=c("div.blue-timer",this.$thumb);
this.$thumbGreyBox=c("div.grey-overlay",this.$thumb);
this.$narrowTimer=ak.filter(".pagination-"+this.slide);
this.image={wide:this.$bg.find("div.wide div"),narrow:this.$bg.find("div.narrow div"),portrait:this.$bg.find("div.portrait div")};
if(this.$bg.hasClass("video")){H(this,this.$bg)
}else{this.bVideo=false
}this.loaded=false
};
m=function(){ax[o].$timer.stop().css({opacity:1,height:"100%",display:"block"}).animate({height:"0px"},ax[o].time,"linear");
ax[o].$narrowTimer.stop().css({backgroundPosition:"0 0"}).animate(aA,ax[o].time,"linear")
};
v=function(t){if(t!==o){b.clearTimeout(aD);
g=true;
ax[t].$fg.animate({opacity:0},w,function(){ax[o].$bg.css("z-index","3").animate({top:"0%"},aB,function(){ax[o].$fg.css("top","0").animate({opacity:1},w,function(){if(!p){X();
m();
B.attr("class",x+o)
}else{B.attr("class",x+o+" "+F)
}g=false;
ax[t].$fg.removeAttr("style");
ax[o].$bg.removeAttr("style");
ax[o].$fg.removeAttr("style")
})
})
});
ax[t].$thumbGreyBox.animate({opacity:A},w+aB/2,function(){ax[o].$thumbGreyBox.animate({opacity:0},w+aB/2,function(){ax[t].$thumbGreyBox.removeAttr("style")
})
});
ax[t].$timer.animate({opacity:0},{duration:w+aB/2,complete:function(){if(!p){ax[o].$timer.css({height:"100%",opacity:0,display:"block"}).animate({opacity:1},w+aB/2)
}},queue:false})
}};
W=function(){var t=o;
do{o=++o<=N?o:0;
if(o===t){break
}}while(!ax[o].loaded);
v(t,p);
at()
};
E=function(){var t=o;
do{o=--o>=0?o:N;
if(o===t){break
}}while(!ax[o].loaded);
v(t,p);
at()
};
aq=function(t){p=true;
v(t);
B.addClass(F);
at()
};
X=function(){b.clearTimeout(am);
am=b.setTimeout(function(){W()
},ax[o].time)
};
C=function(){var t=y+" loader";
g=true;
if(Modernizr.generatedcontent){B.css({backgroundImage:"none"})
}aF.css({backgroundImage:"none"}).animate({height:"330px",bottom:"-10%",marginLeft:"0px",marginBottom:"0px",left:"0px"},{duration:w,step:function(aH,aI){if(aI.prop==="marginLeft"){var aG=(1-aH/aI.start)*30;
aF.css({"-ms-transform":"rotate(-"+aG+"deg)",transform:"rotate(-"+aG+"deg)"});
al.css({"-ms-transform":"rotate("+aG+"deg)",transform:"rotate("+aG+"deg)"})
}}});
al.animate({height:"330px",bottom:"-10%",marginRight:"0px",marginBottom:"0px",right:"0px"},w);
c(".shape",B).animate({maxWidth:"160px"},w);
D.animate({opacity:1},w,function(){aC.animate({opacity:1},w,function(){B.removeClass(t);
m();
g=false;
S=true;
ag=true;
if(ax[o].bVideo){at()
}X()
})
})
};
aw=function(){ap=false;
ar.removeClass(U);
at();
m()
}
}function h(){if(!Modernizr.touch){if("undefined"===typeof z){z=new ScrollrControllr()
}z.register({trigger:B,onScroll:function(t){var aG=(t/Q)*2;
if(S){aC.css({opacity:(1-aG),display:Math.floor(1-aG)<0?"none":"block"});
aF.css({left:-105*aG+"px"});
al.css({right:-105*aG+"px"})
}},onScrollFrom:function(){if(!ap){ab()
}},onScrollTo:function(){aw()
}})
}}function q(){ad.on("click",function(aH){try{mboxTrack("mbox_conversion","action=marqueeClicked")
}catch(aH){}var aI=c(aH.target).closest("a, .slide");
var aG=(aI.hasClass("slide"))?aI.data("href"):aI.attr("href");
var t=(aI.hasClass("slide"))?"image":((aI.parent().hasClass("info-video")||aI.parent().hasClass("videoPlayerContainer"))?"video":"button");
if(t==="video"){return
}PDC.DigitalDataAPI.event.add(c(this),{eventName:"homeherobanner",eventAction:"click"},{assetName:"empty",linkUrl:"empty",impressionCount:"1",label:"empty",moduleName:"homeherobanner",elementType:"image",userActionFlag:true});
if(aI.hasClass("slide")&&typeof aG!=="undefined"&&aG!==null&&aG!==""){b.location=aG
}})
}function l(){n.on("click",function(){var t=c(this).data("slide");
if(!g&&!B.hasClass(x+t)&&ax[t].loaded){PDC.DigitalDataAPI.event.add(c(this),{eventName:"homeherobanner",eventAction:"click"},{assetName:t,linkUrl:"empty",impressionCount:"1",label:"empty",moduleName:"homeherobanner",elementType:"image",userActionFlag:true});
var aG=o;
o=t;
b.clearTimeout(am);
aq(aG);
ac()
}});
c(".narrow a.prev,.portrait a.prev",ar).on("click",function(t){t.preventDefault();
if(!g){b.clearTimeout(am);
p=true;
E();
ac();
B.addClass(F)
}});
c(".narrow a.next,.portrait a.next",ar).on("click",function(t){t.preventDefault();
if(!g){b.clearTimeout(am);
p=true;
W();
ac();
B.addClass(F)
}});
c(".CC027_heroActionPanel a.double-arrow-down").on("click",function(t){t.preventDefault();
c("html, body").animate({scrollTop:Q-300})
})
}function Y(){if("undefined"===typeof z){z=new ScrollrControllr()
}var t=ai.length;
z.register({onResize:function(){Q="undefined"!==typeof(b.innerHeight)?b.innerHeight:a.documentElement.offsetHeight;
B.height(Q);
if(t){var aH,aI=B.width(),aG=B.height();
for(aH=0;
aH<t;
aH+=1){ai[aH].$video.removeAttr("style");
var aJ=ai[aH].$video.height();
if(aJ>=aG){ai[aH].$video.css({top:"50%",marginTop:-aJ/2})
}else{ai[aH].$video.css({left:"50%",marginLeft:-ai[aH].$video.width()/2})
}}}}})
}function J(t,aG){if(ax[t].image[aG].length){ax[t].loaded=false;
var aH=new Image();
aH.index=t;
aH.onload=function(){ax[this.index].image[aG].css("background-image","url("+this.src+")");
ax[this.index].$thumb.removeClass(y);
ax[this.index].loaded=true;
if(!ag&&this.index===0){C()
}};
aH.src=ax[t].image[aG].attr("data-src")
}}function Z(t){var aG;
for(aG=0;
aG<=N;
aG+=1){J(aG,t)
}}function k(){var aG,t,aJ;
if(b.matchMedia===d){var aK=c(b),aI;
if(aK.width()<=az){Z("narrow");
aI="wide"
}else{if(aK.width()<=aj){Z("portrait");
aI="narrow"
}else{Z("wide");
aI="narrow"
}}aK.on("resize.lazyLoad",function(){if(t){b.clearTimeout(t)
}t=b.setTimeout(function(){Z(aI);
aK.off("resize.lazyLoad")
},400)
})
}else{aG=b.matchMedia("(max-width: "+az+"px)");
aJ=b.matchMedia("(min-device-width : 320px) and (max-device-width : 480px)");
if(aG.matches){if(aJ.matches){Z("portrait");
aG.addListener(function aH(){Z("narrow");
aG.removeListener(aH)
})
}else{Z("narrow");
aG.addListener(function aH(){Z("wide");
aG.removeListener(aH)
})
}}else{Z("wide");
aG.addListener(function aH(){Z("narrow");
aG.removeListener(aH)
})
}}}function K(t){var aG=t.$video[0];
if(!aG.buffered||!aG.buffered.end(0)){b.clearTimeout(aG.firstVideoSlideTimer);
b.clearTimeout(aG.nthVideoSlideTimer);
aa(t);
return false
}else{return true
}}function I(){var t=o;
if(K(ax[0])){do{o=++o<=N?o:0;
if(o===0){break
}}while(!ax[o].loaded)
}if(o){B.attr("class",x+o);
ac();
C()
}else{ax[0].$video[0].firstVideoSlideTimer=b.window.setTimeout(I(),f)
}}function ao(aG){var t=aG.$video[0];
aG.$thumb.removeClass(y);
aG.loaded=true;
b.clearTimeout(t.firstVideoSlideTimer);
b.clearTimeout(t.nthVideoSlideTimer);
if(!ag&&t.slideIndex===0){C()
}}function O(){var t,aG=ai.length-1;
for(t=0;
t<=aG;
t+=1){var aH=ai[t].$video[0];
aH.index=t;
aH.slideIndex=ai[t].slide;
ai[t].loaded=false;
aH.firstVideoSlideTimer;
aH.nthVideoSlideTimer;
if(aH.slideIndex===0){aH.firstVideoSlideTimer=b.window.setTimeout(I,f)
}else{aH.firstVideoSlideTimer=b.window.setTimeout(function(){K(ax[aH.slideIndex])
},f)
}aH.nthVideoSlideTimer=b.window.setTimeout(function(){aa(ax[aH.slideIndex])
},L);
ai[t].$video.oncanplaythrough=ao(ai[aH.index])
}}function af(){pdclog("-- homeherobanner: init");
if(n.length==1){B.addClass("single-slide loading");
r=true
}for(T=0;
T<n.length;
T+=1){ax[T]=new ah(n.eq(T))
}if(Modernizr.csstransitions){u+="</style>";
c(u).appendTo("head")
}if(r){Z("narrow");
Z("wide");
Z("portrait");
h();
q();
return
}else{k()
}O();
l();
Y();
h();
q()
}af()
}new e()
})
}(jQuery,window,document));
(function(f,c,a,h){var e="heroInfoBar",g={scrollTime:500,videoIndex:0,mediaType:"",mediaId:""};
function b(l,k){this.element=l;
this.parent=l.parentNode;
this.options=f.extend({},g,k);
this._defaults=g;
this._name=e;
this.element=f(this.element);
this.init()
}function d(m){for(var l=0;
l<m.link.length;
l++){if(m.link[l].rel=="related"){var k=m.link[l].href;
return k.replace(/.*\//,"").replace(/\?.*$/,"")
}}return"unknown"
}b.prototype.init=function(){var p=this.options,n=this.element,l=n.find(".vid-image"),m=l.parent("a").attr("data-playlist-id");
function k(){f.getJSON("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId="+m+"&key=AIzaSyAKRzl4h3hhO1X3imjDNBNFkgqmiBhzk_U&alt=json&callback=?",function(q){var o=q.items[p.videoIndex];
ytJSON=true;
l.each(function(){l=f(this);
var u=o.snippet.resourceId.videoId,t="https://www.youtube.com/watch?v="+u;
var r="no";
if(f(o).isVideoItemAgeGated){if(f(o).isVideoItemAgeGated()){r="yes"
}}l.parent("a").attr("href",t).addClass("lb_youtube").attr("data-agegating",r).removeClass("lb_ytPlaylist");
if(f.fn.pdcLightbox){l.parent("a").pdcLightbox()
}})
})
}if(m!=h){k()
}};
f.fn[e]=function(k){return this.each(function(){if(!f.data(this,"plugin_"+e)){f.data(this,"plugin_"+e,new b(this,k))
}})
}
})(jQuery,window,document);
(function(e,c,a,g){var d="heroBanner",f={sectionOffset:0,contentOffset:-40,moveNextSection:true,pullUpClassNames:["headingWrapper","moduleComponent","moduleComponentOverflow"]};
function b(k,h){this.element=k;
this.$element=e(k);
this.parent=k.parentNode;
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.replaceButton=function(){var m=e(".cm077-heroBanner").find(".CC025-hero-info-bar");
var k=e(".cm077-heroBanner").find(".CC024-hero-title-lockup");
if(a.body.clientWidth<900||a.body.clientWidth==736){e(m).prepend(e(".info-video"));
e(k).append(e(".CC025-hero-info-bar"));
if(e(".heroTitleLockup").find(".CC024-hero-title-lockup").length>0){e(".cm077-heroBanner").find(".image-wrap").removeClass("strike")
}else{e(".cm077-heroBanner").find(".image-wrap").addClass("strike")
}if(e(".heroTitleLockup").find(".CC025-hero-info-bar").length>0){e(".cm077-heroBanner").find(".image-wrap").removeClass("lockupBtns")
}else{if(e(".heroTitleLockup").find(".CC024-hero-title-lockup").length==0){e(".cm077-heroBanner").find(".image-wrap").removeClass("lockupBtns")
}else{e(".cm077-heroBanner").find(".image-wrap").addClass("lockupBtns")
}}}else{e(".CC025-hero-info-bar").append(e(".info-video"));
e(".info-bar .heroinfobar").append(e(".CC025-hero-info-bar"))
}if(e(c).width()<800){if(e(".cm077-heroBanner .CC024-hero-title-lockup .wrapper").hasClass("black_bkg")){e(".cm077-heroBanner .CC024-hero-title-lockup .CC025-hero-info-bar").css("background","#363636")
}if(e(".cm077-heroBanner .CC024-hero-title-lockup .wrapper").hasClass("white_bkg")){e(".cm077-heroBanner .CC024-hero-title-lockup .CC025-hero-info-bar").css("background","rgba(255,255,255,.8)")
}if(e(".cm077-heroBanner .CC024-hero-title-lockup .wrapper").hasClass("blue_bkg")){e(".cm077-heroBanner .CC024-hero-title-lockup .CC025-hero-info-bar").css("background","rgba(14,107,185,.8)")
}this.$element.parent().find(".cm077-heroBanner").find(".image-wrap").removeAttr("style");
this.$element.parent().find(".cm077-heroBanner .image-wrap").find(".content-wrap").removeAttr("style");
var p=e(".cm077-heroBanner .text-lock-up").height();
var q=e(".cm077-heroBanner.with-contextual-nav .text-lock-up").height();
var o=e(".cm077-heroBanner.with-contextual-nav .image-wrap .content-wrap").height();
var h=e(".cm077-heroBanner .image-wrap .content-wrap").height();
if(c.orientation==0){if(e(".cm077-heroBanner").hasClass("with-contextual-nav")&&q>220){var n=q-220;
e(".cm077-heroBanner.with-contextual-nav .image-wrap .content-wrap").css("height",o+n);
e(".cm077-heroBanner.with-contextual-nav .image-wrap").css("height",o+n+85)
}else{if(p>220){var l=p-220;
e(".cm077-heroBanner .image-wrap .content-wrap").css("height",l+h);
e(".cm077-heroBanner .image-wrap").css("height",l+h+30)
}}}else{if(e(".cm077-heroBanner").hasClass("with-contextual-nav")&&q>190){var n=q-190;
e(".cm077-heroBanner.with-contextual-nav .image-wrap .content-wrap").css("height",o+n);
e(".cm077-heroBanner.with-contextual-nav .image-wrap").css("height",o+n+70)
}else{if(p>190){var l=p-190;
e(".cm077-heroBanner .image-wrap .content-wrap").css("height",l+h);
e(".cm077-heroBanner .image-wrap").css("height",l+h)
}}}}};
b.prototype.init=function(){var r=Modernizr.touch,m=e(".lt-ie8").length>0,t=this.$element,k=this.options,n=t.parents(".bannerWrapper"),l=n.siblings(".content_par");
this.replaceButton();
var q=this;
e(c).resize(function(){q.replaceButton()
});
if(k.moveNextSection){l.css({position:"relative",top:k.sectionOffset+"px"});
if(!l.hasClass("pull-up")){l.addClass("pull-up")
}var p=l.find("section:first").children(".headingWrapper");
if(typeof(p)==="undefined"||p===null||p.length==0){p=l.find(".page-section-par:first")
}p.css({position:"relative",marginTop:k.contentOffset+"px"})
}if(typeof ScrollControl==="undefined"){ScrollControl=new ScrollrControllr()
}if(!r&&!m){ScrollControl.registerScrollListener(function(){h(arguments)
},t)
}function h(w){var x=w[0],u=e(c).height(),o=(1-(x/u)*3),v=-3-((x/u)*30);
t.find(".left-shapes").css("left",v+"%");
t.find(".right-shapes").css("right",v+"%");
t.find(".fadeItem").css({opacity:o})
}e(".image-wrap",this.$element).on("click",function(v){var u=e(this).data("href");
var o=e(this).data("href-external")=="1"?true:false;
var w=e(v.target).closest("a, .image-wrap");
if(w.hasClass("image-wrap")&&typeof u!=="undefined"&&u!==null&&u!==""){if(typeof s!=="undefined"){PDC.DigitalDataAPI.event.add(currentImgElmnt,{eventName:"herobanner",eventAction:"click"},{assetName:'$(this).data("image-title")',linkUrl:'$(this).data("href-external")',impressionCount:"1",label:"empty",moduleName:"herobanner",elementType:"image",userActionFlag:false})
}else{if(o){c.open(u);
return false
}else{c.location.href=u
}}}})
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(e,c,a,g){var d="gearsproductgrid",f={gearsService:"",templateId:""};
function b(k,h){this.element=k;
this.$element=e(this.element);
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.$loadingIcon=this.$element.find(".loader");
this.$gearsProductTiles=this.$element.find(".gao-rfgrid");
this.$errorMsg=this.$element.find(".message-box");
this.$addonSection=this.$element.find(".component-section-link");
this.$moreLink=this.$element.find(".more-link");
this.pageNum=1;
this.init()
}b.prototype.init=function(){var h=this;
h.initClickHandler();
h.loadData()
};
b.prototype.loadData=function(){var h=this;
var k=h.generateAddOnSrvc();
e.when(e.ajax({type:"get",async:true,crossDomain:true,url:k,dataType:"json"})).done(function(l){if(!e.isEmptyObject(l)&&typeof l.products!=="undefined"&&l.products.length>=1){h.$loadingIcon.addClass("hide");
h.$gearsProductTiles.append(tmpl(h.options.templateId,l));
h.initClickAction(h.$gearsProductTiles.find(".tile-image"),"image");
if(l.total<=h.pageNum*16){h.$moreLink.addClass("hide")
}}else{h.onerror()
}}).fail(function(){h.onerror()
})
};
b.prototype.onerror=function(){var h=this;
h.$loadingIcon.addClass("hide");
h.$errorMsg.removeClass("hide");
h.$moreLink.addClass("hide")
};
b.prototype.initClickAction=function(k,h){k.on("click",function(l){c.open(e(this).data("href"))
})
};
b.prototype.initClickHandler=function(){var h=this;
h.$moreLink.on("click",function(){h.showMore()
})
};
b.prototype.showMore=function(){var h=this;
h.pageNum+=1;
h.loadData()
};
b.prototype.generateAddOnSrvc=function(){var h=this;
var k=h.options.gearsService;
k=k+"&page="+h.pageNum;
return k
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(e,c,a,g){var d="gamesPromo",f={maxItems:5,serviceUrl:"https:https://io.playstation.com/service/products/en-us/related/30"};
function b(k,h){this.element=k;
this.$element=e(this.element);
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.maxItems=this.options.maxItems;
this.tileWrapper=this.$element.find(".gp-wrapper");
this.pagerWrapper=this.$element.find(".gp-pager");
if(this.maxItems==""&&isNaN(this.maxItems)){this.maxItems=this._defaults.maxItems
}this.gpInterval=null;
this.gpMobileInterval=null;
this.tileLength=0;
this.currentTile=0;
this.deviceWidth=0;
this.lastSlideAmount=0;
this.serviceUrl=this.options.serviceUrl+"?attr=locationWidgetId&value=25&size="+this.maxItems;
this.promoTileTemplate='<div class="gp-item<% if(index == 0) { %> gp-active<%}%>"><a href="<%=storeLink%>" data-track="{ &quot;eventInfo&quot;: { &quot;eventAction&quot;: &quot;click&quot;, &quot;eventName&quot;: &quot;gamespromo click&quot; }, &quot;attributes&quot;: { &quot;moduleName&quot;: &quot;gamespromo&quot;, &quot;label&quot;: &quot;<%=name%>&quot;, &quot;assetName&quot;: &quot;<%=thumbnail%>&quot;, &quot;elementType&quot;: &quot;image&quot;, &quot;position&quot;: 1, &quot;userActionFlag&quot;: true } }" data-id="<%=id%>" data-storeid="<%=storeid%>" data-sourceid="<%=sourceId%>" target="_blank"><img src="<%=thumbnail%>" alt="<%=name%>"></a></div>';
this.fetchData()
}b.prototype.fetchData=function(){var h=this;
h.$element.find(".gp-pagination").hide();
e.ajax({type:"get",async:true,crossDomain:true,url:this.serviceUrl,dataType:"json",success:function(l){var n=l.products;
h.tileLength=n.length;
for(var m=0;
m<h.tileLength;
m++){var o=n[m];
o.index=m;
var k=_.template(h.promoTileTemplate,o);
h.tileWrapper.append(k);
if(m==0){h.pagerWrapper.append('<a href="javascript:void(0);" class="gp-active-page"><span>'+m+"</span></a>")
}else{h.pagerWrapper.append('<a href="javascript:void(0);"><span>'+m+"</span></a>")
}}if(h.tileLength>0){if(PDC.Browser.getViewport()=="mobile"){h.$element.addClass("gp-mobile");
h.deviceWidth=e(c).width();
h.$element.find(".gp-wrapper").css("width",h.tileLength*h.deviceWidth);
h.$element.find(".gp-item").css("width",h.deviceWidth);
h.$element.find(".gp-item").each(function(p){e(this).css({width:h.deviceWidth,left:p*h.deviceWidth})
});
h.attachMobileEvents()
}else{h.$element.removeClass("gp-mobile");
h.$element.find(".gp-wrapper").removeAttr("style");
h.attachEvents()
}h.$element.find(".gp-pagination").show()
}else{h.$element.find(".gp-pagination").hide()
}h.$element.addClass("nobg")
},error:function(k){h.$element.addClass("nobg");
h.tileWrapper.append("Error Displaying Games Promo! Please try again!")
}})
};
b.prototype.jumpStep=function(k){var l=this.pagerWrapper.find("a").index(this.pagerWrapper.find(".gp-active-page")),h=this;
this.tileWrapper.find(".gp-item:eq("+l+")").removeClass("gp-active");
this.pagerWrapper.find("a:eq("+l+")").removeClass("gp-active-page");
this.tileWrapper.find(".gp-item:eq("+k+")").addClass("gp-active");
this.pagerWrapper.find("a:eq("+k+")").addClass("gp-active-page");
clearInterval(h.gpInterval);
this.gpInterval=setInterval(function(){h.nextStep()
},5000)
};
b.prototype.jumpMobileStep=function(k){var l=this.pagerWrapper.find("a").index(this.pagerWrapper.find(".gp-active-page")),h=this;
h.tileWrapper.find(".gp-item:eq("+l+")").removeClass("gp-active");
h.pagerWrapper.find("a:eq("+l+")").removeClass("gp-active-page");
h.tileWrapper.find(".gp-item:eq("+k+")").addClass("gp-active");
h.pagerWrapper.find("a:eq("+k+")").addClass("gp-active-page");
h.$element.find(".gp-scroller").animate({scrollLeft:h.deviceWidth*k},300);
clearInterval(this.gpMobileInterval);
h.gpMobileInterval=setInterval(function(){var n=h.pagerWrapper.find("a").index(h.pagerWrapper.find(".gp-active-page")),m=h.pagerWrapper.find("a").length;
n++;
if(n>=m){n=0
}h.jumpMobileStep(n)
},5000)
};
b.prototype.prevStep=function(){this.currentTile=this.currentTile-1;
if(this.currentTile<0){this.currentTile=this.tileLength-1
}this.jumpStep(this.currentTile)
};
b.prototype.nextStep=function(){this.currentTile=this.currentTile+1;
if(this.currentTile>=this.tileLength){this.currentTile=0
}this.jumpStep(this.currentTile)
};
b.prototype.attachEvents=function(){var h=this;
h.gpInterval=setInterval(function(){h.nextStep()
},5000);
h.$element.find(".gp-prev").click(function(){h.prevStep()
});
h.$element.find(".gp-next").click(function(){h.nextStep()
});
h.pagerWrapper.find("a").click(function(){var k=h.pagerWrapper.find("a").index(e(this));
h.jumpStep(k)
})
};
b.prototype.attachMobileEvents=function(){var h=this;
h.pagerWrapper.find("a").click(function(){var k=h.pagerWrapper.find("a").index(e(this));
h.jumpMobileStep(k)
});
h.gpMobileInterval=setInterval(function(){var l=h.pagerWrapper.find("a").index(h.pagerWrapper.find(".gp-active-page")),k=h.pagerWrapper.find("a").length;
l++;
if(l>=k){l=0
}h.jumpMobileStep(l)
},5000);
e(c).on("orientationchange resize",function(){h.deviceWidth=e(c).width();
h.$element.find(".gp-wrapper").css("width",h.tileLength*h.deviceWidth);
h.$element.find(".gp-item").css("width",h.deviceWidth);
var k=h.pagerWrapper.find("a").index(h.pagerWrapper.find(".gp-active-page"));
h.jumpMobileStep(k)
});
h.$element.find(".gp-scroller").on("mouseup mouseleave touchend touchcancel",function(){e(this).addClass("scrolled");
var l=-(h.$element.find(".gp-wrapper").offset().left),k;
if(l>=h.lastSlideAmount){k=Math.ceil(-(h.$element.find(".gp-wrapper").offset().left)/h.deviceWidth)
}else{k=Math.floor(-(h.$element.find(".gp-wrapper").offset().left)/h.deviceWidth)
}h.jumpMobileStep(k)
}).on("mousedown touchstart",function(){e(this).removeClass("scrolled");
h.lastSlideAmount=-(h.$element.find(".gp-wrapper").offset().left)
})
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(a){$gameFeatures=function(d,c){var f={};
var e=this;
e.settings={};
var b=a(d),d=d;
e.init=function(){e.settings=a.extend({},f,c);
var g=e.settings;
b.find(".feature-items").find("li").setAllToMaxHeight();
b.find(".feature-items").find(".text-wrap").setAllToMaxHeight()
};
e.init()
};
a.fn.setAllToMaxHeight=function(){return this.height(Math.max.apply(this,a.map(this,function(b){return a(b).height()
})))
};
a.fn.gameFeatures=function(b){return this.each(function(){if(undefined==a(this).data("gameFeatures")){var c=new $gameFeatures(this,b);
a(this).data("gameFeatures",c)
}})
}
})(jQuery);
(function(a){a.gameTileHover=function(e,d){var g={delay:500};
var b=a(e);
var h=a(".window",b);
var c=a(".content",b);
var k=true;
var f=this;
f.settings={};
f.init=function(){f.settings=a.extend({},g,d);
if(!Modernizr.touch){$gameTiles=a(".game-tile")
}};
f.init()
};
a.fn.gameTileHover=function(b){return this.each(function(){if(undefined==a(this).data("gameTileHover")){var c=new a.gameTileHover(this,b);
a(this).data("gameTileHover",c)
}})
}
})(jQuery);
(function(e,c,a,g){var d="CM091_gameTiles",f={};
function b(k,h){this.element=k;
this.$element=e(this.element);
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){var h=1000;
var k=this.$element;
k.find("li").each(function(){e(this).css({zIndex:h});
h-=10
});
var h=100;
e("section").slice(1).each(function(){e(this).css({zIndex:h});
h-=10
})
};
if(navigator.appVersion.indexOf("MSIE 7.")!=-1){e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
}else{e.fn[d]=function(){return false
}
}})(jQuery,window,document);
(function(c,f,g,a){var e="GameGrid_Auto",b={layout:"layout-type-1",smallImagePreset:"GameTile_Small",largeImagePreset:"GameTile_Large",smallMobileImagePreset:"GameTile_Small",largeMobileImagePreset:"GameTile_Large",ageRatingImagePreset:"GameTile_AgeRatingLogo",layoutLargIndex:["1","3","2"],featured:false,psproflag:false,psvrflag:false,addgenre:false,genre:"",initialTiles:4,showMoreTiles:4,morelinkTemplate:'<a class="more-link" href="javascript:void(0)"><span class="more">More</span></a>'};
var h={any:function(){if(PDC.Browser.device=="iphone"||PDC.Browser.device=="ipod"||PDC.Browser.os=="android"){return true
}else{return false
}}};
function d(l){if(l=="layout-type-4"){return true
}}function k(m,l){this.element=m;
this.$element=c(this.element);
this.$key=c(this.element).attr("id");
this.options=c.extend({},b,l);
this._defaults=b;
this._name=e;
this.$ul=c("ul",this.$element);
this.url=this.options.url;
this.morelinkSelector="a.more-link";
this.init()
}k.prototype.init=function(){var l=this;
this.searchPromoteInstance=PDC.searchBuffer.get({baseUrl:l.addParameters(),debugMode:false});
this.searchPromoteInstance.requestData(this.options.initialTiles,function(m,n,o){if(m&&m.length>0){l.showTab();
l.addTiles(m);
l.createMoreLink(n)
}else{l.hideTab()
}},function(n,m){l.hideTab()
})
};
k.prototype.addParameters=function(){try{var n=this.url;
var o={coming_soon:"coming_soon",just_released:"out_now",out_this_week:"out_this_week"};
var l={coming_soon:"release_date",just_released:"release_date_desc",out_this_week:"release_date_desc"};
var p=n.split(".query.");
queryType=p[1].replace(".json","");
n=n+"?x1=content_type&q1=Game&x2=release_cat&q2="+o[queryType]+"&sort="+l[queryType];
if(this.options.featured===true){n=n+"&x3=featured&q3=true"
}if(this.options.featured===true&&this.options.psproflag===true){n=n+"&x4=psproflag&q4=true"
}else{if(this.options.psproflag===true){n=n+"&x3=psproflag&q3=true"
}}if(this.options.featured===true&&this.options.psproflag===true&&this.options.psvrflag===true){n=n+"&x5=psvrflag&q5=true"
}else{if(this.options.featured===true&&this.options.psvrflag===true){n=n+"&x4=psvrflag&q4=true"
}else{if(this.options.psproflag===true&&this.options.psvrflag===true){n=n+"&x4=psvrflag&q4=true"
}else{if(this.options.psvrflag===true){n=n+"&x3=psvrflag&q3=true"
}}}}if(this.options.addgenre===true&&this.options.genre!=""){n=n+"&x6=genre&q6="+this.options.genre
}}catch(m){console.log("error appending Query")
}return n
};
k.prototype.createMoreLink=function(m){if(!m){this.$element.append(this.options.morelinkTemplate);
var l=this;
this.$element.on("click touchend",this.morelinkSelector,function(o){o.preventDefault();
var n=this;
l.searchPromoteInstance.requestData(l.options.showMoreTiles,function(p,q,r){if(q){c(n).hide()
}if(p&&p.length>0){l.addTiles(p)
}},function(q,p){c(n).hide()
})
})
}};
k.prototype.getNextIndex=function(){var l=this.$ul.find("li").length+1;
return"tile-"+l
};
k.prototype.addTiles=function(l){if(l){for(var n=0;
n<l.length;
n++){var q=l[n];
var p=new PDC.GameTileTemplate();
for(var m in q){p[m]=q[m]
}this.appendTile(p)
}}};
k.prototype.appendTile=function(o){var l=this.getNextIndex();
var n=this.options.layout;
if(l&&n&&typeof l==="string"&&typeof n==="string"){if(d(n)){if(h.any()){o.addPreset(this.options.smallMobileImagePreset)
}else{o.addPreset(this.options.smallImagePreset)
}}else{if(l=="tile-1"){if(h.any()){o.addPreset(this.options.largeMobileImagePreset)
}else{o.addPreset(this.options.largeImagePreset)
}}else{if(h.any()){o.addPreset(this.options.smallMobileImagePreset)
}else{o.addPreset(this.options.smallImagePreset)
}}}o.addAgeRatingPreset(this.options.ageRatingImagePreset)
}if(d(n)){this.$ul.addGameTile(o,"no-large "+l)
}else{this.$ul.addGameTile(o,n+" "+l)
}var r=this.$ul.find("li."+l);
r.find(".lb_iframe").pdcLightbox();
var m=r.find(".priceSpider");
var q=m.attr("id");
var p=m.data("text");
m.append('<script>PriceSpider.insertWidget({"sku":"'+q+'","text":"'+p+'"})<\/script>');
if(typeof PriceSpider!=="undefined"){PriceSpider.rebind()
}};
k.prototype.hideAndSetActive=function(l){if(l){l.hide();
l.removeClass("selected");
l.removeClass("active");
l.siblings().each(function(){if(c(this).css("display")!="none"){c(this).addClass("selected");
c(this).addClass("active");
return false
}})
}};
k.prototype.hideTab=function(){var o=true;
if(CQ&&CQ.WCM&&CQ.WCM.getMode()=="edit"){o=false
}if(o){var p=this.$element.parent();
this.hideAndSetActive(p);
var m=p.parents().find(">.content").index(p);
var n=".tab-wrapper .tabs a:eq("+m+")";
var l=p.parents().find(n);
this.hideAndSetActive(l)
}};
k.prototype.showAndSetActive=function(l){if(l){l.show()
}};
k.prototype.showTab=function(){var o=this.$element.parent();
o.show();
var m=o.parents().find(">.content").index(o);
var n=".tab-wrapper .tabs a:eq("+m+")";
var l=o.parents().find(n);
this.showAndSetActive(l)
};
c.fn[e]=function(l){return this.each(function(){if(!c.data(this,"plugin_"+e)){c.data(this,"plugin_"+e,new k(this,l))
}})
}
})(jQuery,window,document);
(function(e,c,a,g){var d="CM094_gameGrid",f={initialTiles:4,showMoreTiles:4};
function b(k,h){this.element=k;
this.$element=e(this.element);
this.$key=e(this.element).attr("id");
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){var l=this,r=l.options,n=l.$element.find("ul"),p=l.$element.find("a.more-link"),k=n.find("li").length,q=k,h=r.initialTiles;
for(var m=0;
m<r.initialTiles;
m++){n.find("li").eq(m).removeClass("hidden")
}if(k>r.initialTiles){p.removeClass("hidden")
}this.$element.find("a.more-link").on("click touchend",function(t){t.preventDefault();
if(h<k){for(var o=h;
o<(h+r.showMoreTiles);
o++){n.find("li").eq(o).removeClass("hidden")
}h+=r.showMoreTiles
}q=k-h;
if(q<=0){p.hide()
}})
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(d){var f={onlyType:["out_now","coming_soon"],fakeTimeDelay:1000,resultsParentSelector:"#results",resultsSelector:"#results-list",messageSelector:".error-server",defaultMessageSelector:"p.info",smallImagePreset:"GameTile_Small",largeImagePreset:"GameTile_Large",ageRatingImagePreset:"GameTile_AgeRatingLogo",layout:"largeTile",selectedClass:"selected",filters:["platform","genre","rating","feature","release_cat"]};
function a(h){if(c(h)){return 13
}else{return 16
}}function c(h){if(h=="largeTile"){return true
}}function b(h,m){var k=false;
if(h&&h.length&&m){for(var l=0;
l<h.length;
l++){if(m===h[l]){k=true;
break
}}}return k
}function g(k,o,h){for(var m in o){var p=o[m];
if(b(h,m)){for(var l=0;
l<h.length;
l++){var n=h[l];
if(k[n]){delete k[n]
}}}if(p=="all"){if(k[m]){delete k[m]
}}else{k[m]=p
}}}var e=function(){this.nCurrentDummyURLindex=0;
this.nCurrentPage=1;
this.template='<li class="$sequence $index "></li>';
this.aCurrentSearchQuery={content_type:"Game"};
this.SEQUENCE=["primary-highlights","cross-sell-highlights"];
this.isPublish=false;
if(typeof CQ.WCM=="undefined"){this.isPublish=true
}};
e.prototype.init=function(n){var k=this;
this.loaderHtml='<div class="more-loader"></div>';
this.defaults=d.extend(f,n);
this.$resultsParent=d(this.defaults.resultsParentSelector);
this.$resultsContainer=this.$resultsParent.find(this.defaults.resultsSelector);
this.$message=(d(this.defaults.messageSelector).find(".parsys").html().length>1)?this.$resultsParent.find(this.defaults.messageSelector):this.$resultsParent.find(this.defaults.defaultMessageSelector);
d(window).on("setFilter",function(o,p){k.setFilter(p)
});
d(window).on("filterChange",function(o,p){k.onFilterChange(o,p)
});
var l=this.getDefaultFilters();
if(!(d.isEmptyObject(l))){this.setFilter(l)
}if(typeof l.release_cat!=="undefined"&&l.release_cat!==null&&l.release_cat!==""){var h=d(".sort select").val();
var m=d('.sort select option[value="'+h+'"]');
d(".sort select").selectbox("change",m.attr("value"),m.text())
}else{d(".grouping a").first().trigger("click")
}};
e.prototype.replaceResults=function(h){var l=this,k=this.$resultsParent.parents(".gameFinder").find(".game-finder-data-url");
if(l.isPublish){this.$message.hide()
}this.$resultsParent.addClass("loading");
this.$resultsContainer.html();
if(typeof this.searchPromoteInstance!="undefined"){this.searchPromoteInstance.terminate()
}this.searchPromoteInstance=PDC.searchBuffer.get({baseUrl:k.attr("data-href")+"?"+h,debugMode:false});
this.searchPromoteInstance.requestData(a(this.defaults.layout),function(m,n,o){l.onDataReady(m,n,o,true)
},function(n,m){l.$resultsParent.removeClass("loading");
l.$resultsContainer.siblings("a").remove();
l.$resultsContainer.empty();
l.$message.show()
})
};
e.prototype.updateResults=function(){var h=this;
if(h.isPublish){this.$message.hide()
}this.searchPromoteInstance.requestData(a("smallTile"),function(k,l,m){h.onDataReady(k,l,m,false)
},function(l,k){h.$resultsParent.removeClass("loading");
h.$resultsContainer.siblings("a").remove();
h.$resultsContainer.empty();
h.$message.show()
})
};
e.prototype.createMore=function(){var l=this,k=this.$resultsParent.find("#gamefinder-More").attr("value"),h=d('<a href="#" class="more-link "></a>').append('<span class="more">'+k+"</span>");
this.$resultsParent.append(h);
h.on("click",function(m){l.onMoreClick(this,m)
})
};
e.prototype.onDataReady=function(m,o,p,l){var n=this;
if(n.isPublish){var h=false;
var k=d(".error-no-results");
if(k.find(".parsys").html().length>1){h=true
}if(!m.length){if(h){k.removeClass("hide")
}else{d("p.info").show()
}}else{if(h){if(!k.hasClass("hide")){k.addClass("hide")
}}else{d("p.info").hide()
}}}if(l){n.$resultsParent.removeClass("loading");
n.nCurrentPage=1;
n.$resultsContainer.siblings("a").remove();
n.$resultsContainer.empty()
}d(window).trigger("newfacets",p);
n.$resultsParent.find(".more-loader").remove();
n.reloadTileList(m,l);
n.$resultsParent.find(".game-tile h2 a.title").dotdotdot({wrap:"letter"});
if(!o){n.createMore()
}};
e.prototype.onMoreClick=function(l,k){var h=this;
k.preventDefault();
PDC.DigitalDataAPI.event.add(l,{eventName:"gamefinder",eventAction:"click"},{assetName:"empty",linkURL:"empty",impressionCount:"1",label:"empty",moduleName:"gamefinder",elementType:"text",userActionFlag:true});
d(l).remove();
d(h.defaults.resultsSelector).after(this.loaderHtml);
this.updateResults()
};
e.prototype.setFilter=function(h){if(typeof h!="undefined"){g(this.aCurrentSearchQuery,h,this.defaults.onlyType)
}};
e.prototype.onFilterChange=function(h,k){this.setFilter(k);
this.replaceResults(PDC.searchBuffer.getURLParams(this.aCurrentSearchQuery))
};
e.prototype.appendTile=function(l,h){var o=d(this.createLiTag());
if(c(this.defaults.layout)&&h){if(o.hasClass("tile-1")){l.addPreset(this.defaults.largeImagePreset)
}else{l.addPreset(this.defaults.smallImagePreset)
}}else{l.addPreset(this.defaults.smallImagePreset)
}l.addAgeRatingPreset(this.defaults.ageRatingImagePreset);
o.appendTo(this.$resultsContainer).addGameTile(l);
o.find(".lb_iframe").pdcLightbox();
var k=o.find(".priceSpider");
var n=k.attr("id");
var m=k.data("text");
k.append('<script>PriceSpider.insertWidget({"sku":"'+n+'","text":"'+m+'"})<\/script>')
};
e.prototype.createLiTag=function(){return this.template.replace("$sequence",this.getNextSequence()).replace("$index",this.getNextIndex())
};
e.prototype.getNextSequence=function(){if(c(this.defaults.layout)){var h=Math.floor(this.$resultsContainer.find("li").length/13)%2;
return this.SEQUENCE[h]
}else{return""
}};
e.prototype.getNextIndex=function(){var h=this.$resultsContainer.find("li").length+1;
return"tile-"+h
};
e.prototype.reloadTileList=function(m,h){if(m){for(var l=0;
l<m.length;
l++){var p=m[l];
var n=new PDC.GameTileTemplate();
for(var k in p){n[k]=p[k]
}this.appendTile(n,h)
}PriceSpider.rebind()
}};
e.prototype.getDefaultFilters=function(){var o={};
for(var m=0;
m<this.defaults.filters.length;
m++){var n=this.defaults.filters[m];
var l=d("a."+this.defaults.selectedClass+'[data-filter-key="'+n+'"]');
if(l.length>0){var p=l.data("filter-value");
if(n==="rating"){var h=[];
if(typeof l.data("filter-mappedratings")!=="undefined"&&l.data("filter-mappedratings")!==null&&l.data("filter-mappedratings")!==""){h=l.data("filter-mappedratings").split(",")
}o[n]=[];
o[n].push(p);
for(var k=0;
k<h.length;
k++){o[n].push(h[k])
}}else{if(!(n==="platform"&&p==="all")){o[n]=p
}}d('input[type="hidden"][name="'+n+'"]').val(p)
}}return o
};
PDC.gameFinder=new e()
})(jQuery);
(function(e,c,a,g){var d="groupingAndSorting",f={facetCountType:["out_now","coming_soon"]};
function b(k,h){this.element=k;
this.$element=e(this.element);
this.$key=e(this.element).attr("id");
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){var k=this.$element.find(".grouping a");
var h=this;
k.on("click",function(p){p.preventDefault();
var o=e(this),n={},m=o.attr("data-filter-key"),q=o.attr("data-filter-value"),l=o.attr("release_date");
k.removeClass("selected");
e(this).addClass("selected");
n[m]=q;
e('input[type="hidden"][name="'+m+'"]').val(q);
e(c).trigger("setFilter",n);
$releaseOption=e('option[value="'+l+'"]');
if($releaseOption){h.$element.find(".sort select").selectbox("change",$releaseOption.attr("value"),$releaseOption.text())
}});
this.$element.find(".sort select").selectbox({effect:"fade",speed:400,onChange:function(o,l){var n={},m=e(this).attr("data-filter-key");
n[m]=o;
e(c).trigger("filterChange",n)
}});
var h=this;
e(c).on("newfacets",function(p,r){h.clearAllCounts();
if(r&&r.release_cat){for(var l=0,o=r.release_cat.length;
l<o;
l++){var n=r.release_cat[l];
var q=n.value;
var m=n.count;
h.setFacets(q,m)
}}})
};
b.prototype.clearAllCounts=function(){for(var h=0;
h<this.options.facetCountType.length;
h++){var k=this.options.facetCountType[h];
this.setFacets(k,0)
}};
b.prototype.setFacets=function(h,l){var k=e('#filter-tab-container .grouping a[data-filter-value="'+h+'"]');
l=(l+"").replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,");
var m=k.text();
if(m){k.text(m.replace(/[\d,]+/g,l))
}};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 * Original code (with comments) can be found at:
 * http://coding.smashingmagazine.com/2011/10/11/essential-jquery-plugin-patterns/

 This plug-in enables the game finder UI and attaches click handlers to the filters.
 Dependencies are that CM021_gameFinderLoader.js needs to be included and have run (to enable the custom event on $(window)).

 */
;
(function(d,f,g,a){var e="CM021_gameFilter",c={selectedClass:"selected",tabletBreak:"980px",fadeTime:0.3,slideTime:0.3,defaultKeyValue:"all",facetCountType:["genre","feature"],queryParameterMapping:[{query:"console",filter:"platform"},{query:"genre",filter:"genre"},{query:"rating",filter:"rating"}]};
function h(n,m){this.$element=d(n);
this.options=d.extend({},c,m);
this._defaults=c;
this.$deviceFilters=d(".device-filters a",this.$element);
this.$tabButtons=d(".filter-tabs a",this.$element);
this.$tabContainer=d(".filter-tab-content",this.$element);
this.$tabs=d(".tab",this.$tabContainer);
this.$activeFilters=d(".active-filters li",this.$element);
if(typeof ScrollControl==="undefined"){ScrollControl=new ScrollrControllr()
}this.tabs={};
this.classList="";
this.init()
}function b(m,n){this.name=m;
this.$elem=n;
this.height=this.$elem.outerHeight();
this.$elem.addClass("tablet initialised");
this.tabletHeight=this.$elem.outerHeight();
this.$elem.removeClass("tablet");
this.$filters=this.$elem.find("a.filter");
this.$selectedFilter=null;
this.$activeFilter=null;
this.$button=null
}function l(m){return"-webkit-transition: "+m+";\n-moz-transition: "+m+";\n-ms-transition: "+m+";\n-o-transition: "+m+";\ntransition: "+m+";\n"
}function k(o){o=o.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
var p=new RegExp("[\\?&]"+o+"=([^&#]*)"),n=p.exec(location.search);
var m="";
if(n!=null){m=decodeURIComponent(n[1].replace(/\+/g," "))
}return m
}h.prototype.init=function(){var n=this,q="<style>",m=0;
for(;
m<n.$tabs.length;
m+=1){var p=n.$tabs.eq(m),o=p.data("tab");
if(typeof n.tabs[o]==="undefined"){n.tabs[o]=new b(o,p);
n.tabs[o].$button=n.$tabButtons.filter("."+o);
n.tabs[o].$activeFilter=n.$activeFilters.filter("."+o);
n.classList+=o+" ";
totalTime=n.options.fadeTime+n.options.slideTime;
q+="#"+e+" .filter-wrap div.filter-tab-content."+o+"{height:"+n.tabs[o].height+"px;}\n";
q+="@media all and (max-width: "+n.options.tabletBreak+"){#"+e+" .filter-wrap div.filter-tab-content."+o+"{height:"+n.tabs[o].tabletHeight+"px;}}\n";
q+="#"+e+" .filter-wrap div."+o+">."+o+"{left:0;opacity:1;\n";
if(Modernizr.csstransitions){q+=l("opacity "+n.options.fadeTime+"s ease-in-out "+totalTime+"s, left 0s linear "+totalTime+"s")
}q+="}"
}}d(f).on("newfacets",function(v,w){if(w){n.clearAllCounts();
for(var r=0,u=n.options.facetCountType.length;
r<u;
r++){var t=n.options.facetCountType[r];
n.updateFacets(w,t)
}}});
d(q+"</style>").appendTo("head");
this.initTabs();
this.initFilters();
this.initDefaultFilters();
this.initShapeParallax()
};
h.prototype.initTabs=function(){var m=this;
m.$tabButtons.on("click",function(p){p.preventDefault();
var o=d(this),n=o.data("tab");
if(m.$tabContainer.hasClass(n)){o.removeClass(m.options.selectedClass);
m.$tabContainer.removeClass(n)
}else{m.$tabButtons.removeClass(m.options.selectedClass);
o.addClass(m.options.selectedClass);
m.$tabContainer.removeClass(m.classList);
m.$tabContainer.addClass(n)
}PDC.DigitalDataAPI.event.add(self.$element,{eventName:"gameFinder",eventAction:"click"},{assetName:"empty",linkURL:"empty",impressionCount:"1",label:"empty",moduleName:"gameFinder",elementType:"text",userActionFlag:true})
})
};
h.prototype.initFilters=function(){var m=this;
m.$tabContainer.on("click","a.filter",function(o){o.preventDefault();
var r=d(this),q={},p=r.attr("data-filter-key");
if(typeof m.tabs[p]!=="undefined"){if(r.hasClass(m.options.selectedClass)){m.tabs[p].$activeFilter.removeClass(m.options.selectedClass);
r.removeClass(m.options.selectedClass);
m.tabs[p].$selectedFilter=null;
var t=m.options.defaultKeyValue;
d('input[type="hidden"][name="'+p+'"]',self.$element).val("")
}else{if(m.tabs[p].$selectedFilter!==null){m.tabs[p].$selectedFilter.removeClass(m.options.selectedClass)
}m.tabs[p].$selectedFilter=r.addClass(m.options.selectedClass);
m.tabs[p].$activeFilter.addClass(m.options.selectedClass).find(".name").text(r.find(".name").text());
m.$tabContainer.removeClass(m.classList);
m.$tabButtons.removeClass(m.options.selectedClass);
var t=r.attr("data-filter-value");
var n=[];
if(p=="rating"&&r.attr("data-filter-mappedRatings")!=""){n=r.attr("data-filter-mappedRatings").split(",")
}d('input[type="hidden"][name="'+p+'"]',self.$element).val(t)
}if(p=="rating"){q[p]=[];
q[p].push(t);
for(i=0;
i<n.length;
i++){q[p].push(n[i])
}}else{q[p]=t
}d(f).trigger("filterChange",q);
if(p=="rating"){PDC.DigitalDataAPI.event.add(this,{eventName:"gameFinder",eventAction:"click"},{assetName:"empty",linkURL:"empty",impressionCount:"1",label:"empty",moduleName:"gameFinder",elementType:"image",userActionFlag:true})
}else{PDC.DigitalDataAPI.event.add(r.attr("data-filter-value"),{eventName:"gameFinder",eventAction:"click"},{assetName:"empty",linkURL:"empty",impressionCount:"1",label:p,moduleName:"gameFinder",elementType:"text",userActionFlag:true})
}}});
m.$deviceFilters.on("click",function(r){r.preventDefault();
var t=d(this),n=t.attr("class"),p={},x=t.attr("data-filter-key"),u=m.$deviceFilters.filter(".filter-all"),w=m.options.defaultKeyValue;
d(".gamefeatured",m.$element).hide();
d(".device-filters .caret",m.$element).hide();
if(t[0]==u[0]){m.$deviceFilters.removeClass(m.options.selectedClass)
}else{u.removeClass(m.options.selectedClass)
}t.toggleClass(m.options.selectedClass);
if(!m.$deviceFilters.hasClass(m.options.selectedClass)){u.addClass(m.options.selectedClass)
}if(!u.hasClass(m.options.selectedClass)){w=m.$deviceFilters.filter(".selected").map(function(){return d(this).attr("data-filter-value")
}).get().join("|")
}var q=m.$deviceFilters.filter("."+m.options.selectedClass);
if(q.length==1){var v=q.data("filter-label");
var o=d(".gamefeature-wrap[data-filter-label='"+v+"']",m.$element);
if(o.length>0){o.parent().slideDown("slow");
q.next(".caret").show("slow")
}}d('input[type="hidden"][name="'+x+'"]',self.$element).val(w);
p[x]=w;
d(f).trigger("filterChange",p);
PDC.DigitalDataAPI.event.add(this,{eventName:"gameFinder",eventAction:"click"},{assetName:"empty",linkURL:"empty",impressionCount:"1",label:"empty",moduleName:"gameFinder",elementType:"image",userActionFlag:true})
});
m.$activeFilters.find("a.close").on("click",function(q){q.preventDefault();
var p=d(this),o={},n=p.data("tab"),r=m.options.defaultKeyValue;
if(typeof m.tabs[n]!=="undefined"){m.tabs[n].$selectedFilter.removeClass(m.options.selectedClass);
m.tabs[n].$activeFilter.removeClass(m.options.selectedClass);
m.tabs[n].$selectedFilter=null;
d('input[type="hidden"][name="'+n+'"]',self.$element).val("");
o[n]=r;
d(f).trigger("filterChange",o)
}});
m.$tabContainer.find("div.hide-filter>a").on("click",function(n){n.preventDefault();
m.$tabContainer.removeClass(m.classList);
m.$tabButtons.removeClass(m.options.selectedClass)
})
};
h.prototype.initDefaultFilters=function(){var x=this;
var u=x.options;
var v=u.queryParameterMapping;
var o=function(D,G){var F="";
if(G==="platform"){if(D!==""){D=D.toLowerCase();
if(D.indexOf("|")>-1){var E=D.split("|");
for(var B=0;
B<E.length;
B++){var z=E[B];
var y=d("a[data-filter-key='"+G+"'][data-filter-label='"+z+"']",x.$element);
if(y.length>0){x.$deviceFilters.filter(".filter-all").removeClass(u.selectedClass);
y.toggleClass(u.selectedClass)
}}}else{var y=d("a[data-filter-key='"+G+"'][data-filter-label='"+D+"']",x.$element);
if(y.length>0){x.$deviceFilters.filter(".filter-all").removeClass(u.selectedClass);
y.toggleClass(u.selectedClass)
}}}var C=x.$deviceFilters.filter("."+u.selectedClass);
if(C.length==1){var A=d('.gamefeature-wrap[data-filter-label="'+C.data("filter-label")+'"]',x.$element);
if(A.length>0){A.parent().slideDown("slow");
C.next(".caret").show()
}}if(!C.hasClass("filter-all")){F=C.map(function(){return d(this).data("filter-value")
}).get().join("|")
}}else{if(G==="release_cat"){if(D!==""){D=D.toLowerCase();
d("a[data-filter-key='"+G+"'][data-filter-value='"+D+"']",x.$element).addClass(u.selectedClass)
}}else{if(D!==""){D=D.toLowerCase();
var y=d("a[data-filter-key='"+G+"'][data-filter-label='"+D+"']",x.$element);
if(y.length>0){x.tabs[G].$selectedFilter=y.addClass(u.selectedClass);
x.tabs[G].$activeFilter.addClass(u.selectedClass).find(".name").text(y.find(".name").text());
F=y.data("filter-value")
}}}}d('input[type="hidden"][name="'+G+'"]',x.$element).val(F)
};
if((typeof d('input[type="hidden"][name="platform"]').val()!=="undefined"&&d('input[type="hidden"][name="platform"]').val()!==null&&d('input[type="hidden"][name="platform"]').val()!=="")||(typeof d('input[type="hidden"][name="genre"]').val()!=="undefined"&&d('input[type="hidden"][name="genre"]').val()!==null&&d('input[type="hidden"][name="genre"]').val()!=="")||(typeof d('input[type="hidden"][name="rating"]').val()!=="undefined"&&d('input[type="hidden"][name="rating"]').val()!==null&&d('input[type="hidden"][name="rating"]').val()!=="")||(typeof d('input[type="hidden"][name="feature"]').val()!=="undefined"&&d('input[type="hidden"][name="feature"]').val()!==null&&d('input[type="hidden"][name="feature"]').val()!=="")||(typeof d('input[type="hidden"][name="release_cat"]').val()!=="undefined"&&d('input[type="hidden"][name="release_cat"]').val()!==null&&d('input[type="hidden"][name="release_cat"]').val()!=="")){var t=["platform","genre","rating","release_cat"];
for(var q=0;
q<t.length;
q++){var p=d('input[type="hidden"][name="'+t[q]+'"]',x.$element).val();
o(p,t[q])
}}else{for(var r=0;
r<v.length;
r++){var m=v[r];
var n=m.query;
var w=m.filter;
var p=k(n);
o(p,w)
}}};
h.prototype.triggerChange=function(n){var m=d(n),p={},o=m.data("tab"),q=this.options.defaultKeyValue;
if(typeof this.tabs[o]!=="undefined"){this.tabs[o].$selectedFilter.removeClass(this.options.selectedClass);
this.tabs[o].$activeFilter.removeClass(this.options.selectedClass);
this.tabs[o].$selectedFilter=null;
p[o]=q;
d(f).trigger("filterChange",p)
}};
h.prototype.initShapeParallax=function(){var n=d(".playstation-left-shapes",this.$element),m=d(".playstation-right-shapes",this.$element);
ScrollControl.registerScrollListener(function(){var r=arguments[0];
var p=d(f).height();
var o=(1-(r/p)*3);
var q=-3-((r/p)*30);
n.css("left",q+"%");
m.css("right",q+"%")
})
};
h.prototype.updateFacets=function(o,t){if(o&&o[t]){var m=d('.filter-tab-content a[data-filter-key="'+t+'"]');
for(var p=0,n=o[t].length;
p<n;
p++){var v=o[t][p];
var q=v.count;
var u=v.value;
if(q&&u){u=(u+"").replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,");
var r=m.filter('[data-filter-value="'+u+'"]');
d(" span.total",r).text("("+q+")");
r.removeClass("no-filter").addClass("filter")
}}}};
h.prototype.clearAllCounts=function(){var m=d('.filter-tab-content a[data-filter-key]:not([data-filter-key="rating"])');
m.removeClass("filter").addClass("no-filter");
d(" span.total",m).text("("+0+")")
};
d.fn[e]=function(m){return this.each(function(){if(!d.data(this,"plugin_"+e)){d.data(this,"plugin_"+e,new h(this,m))
}})
}
})(jQuery,window,document);
(function(a){var b={bufferSize:100,bufferThreshold:50,debugMode:false};
function c(o){var e="";
var g=1;
for(var n in o){if(n!="count"&&n!="sort"){var l=false;
var h=g++;
var f="q"+h+"=";
var k="x"+h+"=";
e+=k+n+"&";
if((typeof o[n])==="object"){for(j=0;
j<o[n].length;
j++){sValue=o[n][j];
if(sValue==="all"){l=true;
break
}f+=sValue+"|"
}if(!l){f=f.substring(0,f.length-1);
e+=f+"&"
}}else{f+=o[n];
e+=f+"&"
}}else{var m=o[n];
e+=n+"="+m+"&"
}}e=e.replace(/ /g,"+");
if(e[e.length-1]=="&"){e=e.substring(0,e.length-1)
}e=(e=="")?this.baseUrl:e;
e+="&callback=?";
return e
}var d=function(e){this.options=a.extend(b,e);
this.totalRead=0;
this.totalRequest=0;
this.atEnd=false;
this.results=[];
this.nextUrl=this.options.baseUrl+(this.options.baseUrl.indexOf("&")>0?"&count=":"?count=")+this.options.bufferSize;
this.baseUrl=this.options.baseUrl.replace(/\?.*$/,"")
};
d.prototype.log=function(){if(this.options.debugMode){var e=Array.prototype.slice.call(arguments);
e.unshift("--SB: ");
console.log.apply(console,e)
}};
d.prototype.fillBuffer=function(){if(this.waitingAjax){return
}var e=this;
this.log("AJAX call to "+this.nextUrl);
this.waitingAjax=true;
a.ajax({type:"GET",dataType:"jsonp",data:{},url:this.nextUrl,success:function(f){e.onData(f)
},error:function(g,h,f){e.onDataError(h,f)
}})
};
d.prototype.needMore=function(){return(this.results.length<this.options.bufferThreshold)&&(!this.atEnd)
};
d.prototype.onDataError=function(f,e){this.hasError=true;
this.waitingAjax=false;
this.pendingFailFunc(f,e)
};
d.prototype.arrangeFacets=function(f){var g={};
for(var e=0;
e<f.length;
e++){if(f[e].name){g[f[e].name]=f[e].items
}}return g
};
d.prototype.onData=function(g){if(this.terminating){return
}if(typeof g.results=="undefined"||typeof g.pagination=="undefined"||typeof g.facets=="undefined"){onError("Invalid response.",null);
return
}var f=g.results[0].results,e=g.pagination[0].next;
this.waitingAjax=false;
this.totalResults=Number(g.resultcount.total);
this.results=this.results.concat(f);
this.filter();
this.totalRead+=f.length;
this.nextUrl=this.baseUrl+e;
this.facets=this.arrangeFacets(g.facets);
if(this.totalRead>=this.totalResults||e==""){this.atEnd=true;
this.nextUrl=null
}this.log("Got data: ",this.results.length,"results",this.totalRead,"read so far. ",(this.totalResults-this.totalRead)," unread.");
if(this.pending){if(this.results.length>=this.pendingCount||this.atEnd){this.provideData(this.pendingCount,this.pendingFunc)
}else{this.fillBuffer()
}}};
d.prototype.filter=function(){if(this.options.filter){if(typeof this.options.filter==="function"){this.results=_.filter(this.results,this.options.filter,this.options.filterContext)
}}};
d.prototype.provideData=function(h,k){var f=h;
var e,g=false;
if(this.options.maxCount){if(this.totalRequest<this.options.maxCount){if(this.totalRequest+h>this.options.maxCount){f=this.options.maxCount-this.totalRequest;
this.totalRequest+=f;
g=true
}else{this.totalRequest+=h
}e=this.results.splice(0,f);
if(e.length<f){g=true
}}else{g=true
}if(g){this.atEnd=g
}}else{e=this.results.splice(0,f),g=(this.results.length==0&&this.atEnd)
}this.pending=false;
if(this.needMore()){this.fillBuffer()
}this.log("Returning ",e.length," results. Reached end? ",g);
k(e,g,this.facets)
};
d.prototype.requestData=function(f,g,e){if(this.results.length>=f||this.atEnd){this.provideData(f,g)
}else{this.pending=true;
this.pendingFunc=g;
this.pendingFailFunc=e;
this.pendingCount=f;
this.fillBuffer()
}};
d.prototype.terminate=function(){this.terminating=true
};
PDC.searchBuffer={get:function(e){return new d(e)
},getURLParams:function(e){return c(e)
}}
})(jQuery);
PDC.searchBuffer.getTest=function(){return PDC.searchBuffer.get({baseUrl:$(".gameFinder .game-finder-data-url").attr("data-href")+".query.json",debugMode:true})
};
PDC.searchBuffer.testfunc=function(a){console.log("YEA, GOT "+a.length+" RESULTS!")
};
(function(f,d,a,h){var e="boxCarousel",g={showOverlayOnHover:false};
function b(m,l){this.element=m;
this.$element=f(this.element);
this.options=f.extend({},g,l);
this._defaults=g;
this._name=e;
this.init();
var k=this;
var n;
f(d).bind("resize orientationchange",function(){clearTimeout(n);
n=setTimeout(function(){k.init()
},300)
});
k.init()
}var c=function(){function l(q,m,v,z,p,y,x){var w=q.parentNode,t=2;
if(9===w.nodeType){return true
}if("0"===k(q,"opacity")||"none"===k(q,"display")||"hidden"===k(q,"visibility")){return false
}if("undefined"===typeof m||"undefined"===typeof v||"undefined"===typeof z||"undefined"===typeof p||"undefined"===typeof y||"undefined"===typeof x){m=q.offsetTop;
p=q.offsetLeft;
z=m+q.offsetHeight;
v=p+q.offsetWidth;
y=q.offsetWidth;
x=q.offsetHeight
}if(w){if(("hidden"===k(w,"overflow")||"scroll"===k(w,"overflow"))&&q.offsetParent===w){if(p+t>w.offsetWidth+w.scrollLeft||p+y-t<w.scrollLeft||m+t>w.offsetHeight+w.scrollTop||m+x-t<w.scrollTop){return false
}}if(q.offsetParent===w){p+=w.offsetLeft;
m+=w.offsetTop
}return l(w,m,v,z,p,y,x)
}return true
}function k(n,m){if(d.getComputedStyle){return a.defaultView.getComputedStyle(n)[m]
}if(n.currentStyle){return n.currentStyle[m]
}}return{getStyle:k,isVisible:l}
}();
b.prototype.init=function(){var n=this.$element.attr("id"),o=this.$element,m=o.find("ul"),k;
o.find(".next").addClass("bcnext"+n);
o.find(".prev").addClass("bcprev"+n);
o.find(".pages").addClass("bcpages"+n);
var l=o.find("ul").children("li:first").width();
m.carouFredSel({auto:false,circular:false,infinite:false,items:{width:l,visible:{max:f(d).width()<=960?3:4}},next:".bcnext"+n,prev:".bcprev"+n,pagination:".bcpages"+n,responsive:true,swipe:{onMouse:true,onTouch:true,options:{excludedElements:"button, input, select, textarea"}},width:"100%",height:230,scroll:{onAfter:function(q){if(k!=null){k.focus()
}}},onCreate:function(q){o.find("div.loader").hide();
m.show()
}});
var p=m.triggerHandler("currentVisible");
m.find("li a").each(function(){var r=f(this);
var q=false;
r.focus(function(y){var z=f(this),B=z.parents("li"),u,x,v,t=m.find("li"),w=Math.ceil(t.length/p.length);
if(q){q=false;
k=null
}else{y.preventDefault();
q=true;
u=t.index(B);
x=Math.ceil((u+1)/p.length)-1;
v=m.triggerHandler("currentPage");
var A=(v+x);
if(A>w){A=A-w
}if(A===v){k=null;
z.focus()
}else{m.triggerHandler("slideToPage",A);
k=z
}}})
});
o.bind("keydown",function(t){var r=t.keyCode||t.which;
if(r==9){var u=m.triggerHandler("currentVisible"),v=f(a.activeElement),q=v.parents("li");
if(t.shiftKey){if(v.is(".bcnext"+n)){t.preventDefault();
u.last().find("a").focus()
}}else{if(u.index(q)===u.length-1){t.preventDefault();
f(".bcnext"+n).focus()
}}}});
if(this.options.showOverlayOnHover&&f("html").hasClass("no-touch")){this.initShowOverlayOnHover()
}};
b.prototype.initShowOverlayOnHover=function(){var k=this;
var l=k.$element.find("ul li");
var m=true;
l.off("mouseenter");
f(".box-carousel-overlay").remove();
l.on("mouseenter",function(o){if(m){var q=f(this);
var n=q.children();
var p=q.offset();
q.css("visibility","hidden");
f("<div>").addClass("box-carousel-overlay").append(n.clone(true,true)).css({position:"absolute",top:p.top,left:p.left,zIndex:9}).appendTo(f("body")).on("mouseleave",function(){q.css("visibility","visible");
var r=f(this);
setTimeout(function(){r.remove()
},300)
}).on("click",function(){q.css("visibility","visible");
f(this).remove();
m=false
});
if(typeof PriceSpider!=="undefined"){PriceSpider.rebind()
}}else{m=true
}});
k.$element.find(".prev, .next").on("click",function(){l.css("visibility","visible");
f(".box-carousel-overlay").remove()
})
};
f.fn[e]=function(k){return this.each(function(){if(!f.data(this,"plugin_"+e)){f.data(this,"plugin_"+e,new b(this,k))
}})
}
})(jQuery,window,document);
(function(e,c,a,g){var d="gameaddons",f={gameAddOnsService:"/apps/pdc/components/functional/gameAddOns/clientlibs/js/related-addons.json",templateId:"",dataType:"relatedaddons",slidesToShowDesktop:3,slidesToShowTablet:3,slidesToShowMobile:3,showDots:true,records:16,scrollInfinite:false};
function b(k,h){this.element=k;
this.$element=e(this.element);
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.$loadingIcon=this.$element.find(".loader");
this.$carousalBlock=this.$element.find(".tiles-slider");
this.$addOnsBlock=this.$element.find(".game-add-ons");
this.$addOnTiles=this.$element.find(".gao-rfgrid");
this.$errorMsg=this.$element.find(".message-box");
this.$addonSection=this.$element.find(".addon-section-link");
this.$moreLink=this.$element.find(".more-link");
this.pageNum=1;
this.init()
}b.prototype.init=function(){var l=this;
var k=l.options.dataType;
if(k==="relatedaddons"){var m=l.$addonSection.attr("href");
if(m.indexOf("ADDONPAGEGAMEID")>-1){var h=l.getContextualPSNID();
l.$addonSection.attr("href",m.replace("ADDONPAGEGAMEID","game="+h));
l.initSectionClickAction(l.$addonSection,"text",k)
}}else{l.initClickHandler()
}l.loadData(k)
};
b.prototype.loadData=function(k){var h=this;
var l=h.generateAddOnSrvc();
e.when(e.ajax({type:"get",async:true,crossDomain:true,url:l,dataType:"json"})).done(function(m){if(!e.isEmptyObject(m)&&typeof m.products!=="undefined"&&m.products.length>=1){h.$loadingIcon.addClass("hide");
if(k==="relatedaddons"){h.$carousalBlock.append(tmpl(h.options.templateId,m));
h.addonscarousal();
h.initClickAction(h.$carousalBlock.find(".tile-image"),"image",k)
}else{h.$addOnTiles.append(tmpl(h.options.templateId,m));
h.initClickAction(h.$addOnTiles.find(".tile-image"),"image",k);
if(m.total<=h.pageNum*h.options.records){h.$moreLink.addClass("hide")
}}}else{h.onerror(k)
}}).fail(function(){h.onerror(k)
})
};
b.prototype.onerror=function(k){var h=this;
h.$loadingIcon.addClass("hide");
h.$errorMsg.removeClass("hide");
if(k==="addonspage"){h.$moreLink.addClass("hide")
}};
b.prototype.initClickAction=function(l,k,h){l.on("click",function(m){c.open(e(this).data("href"))
})
};
b.prototype.initSectionClickAction=function(l,k,h){l.on("click",function(m){c.location.href=e(this).attr("href")
})
};
b.prototype.initClickHandler=function(){var h=this;
h.$moreLink.on("click",function(){PDC.DigitalDataAPI.event.add(this.$element,{eventName:"gameAddOns",eventAction:"click"},{linkUrl:"empty",impressionCount:"1",elementType:"link",moduleName:"gameAddOns",userActionFlag:false});
h.showMore()
})
};
b.prototype.showMore=function(){var h=this;
h.pageNum+=1;
h.loadData()
};
b.prototype.addonscarousal=function(){var h=this;
h.$carousalBlock.slick({slidesToShow:h.options.slidesToShowDesktop,slidesToScroll:h.options.slidesToShowDesktop,dots:h.options.showDots,infinite:h.options.scrollInfinite,responsive:[{breakpoint:1024,settings:{slidesToShow:h.options.slidesToShowTablet,slidesToScroll:h.options.slidesToShowTablet}},{breakpoint:600,settings:{slidesToShow:h.options.slidesToShowMobile,slidesToScroll:h.options.slidesToShowMobile}}]});
h.$carousalBlock.find(".mediaTital").dotdotdot()
};
b.prototype.generateAddOnSrvc=function(){var h=this;
var k=h.options.gameAddOnsService;
var l="";
l=h.getContextualPSNID();
k=k+"&page="+h.pageNum;
return k.replace("PSNID",l)
};
b.prototype.getContextualPSNID=function(){var h=this.$addOnsBlock.data("gamepsnidoverride");
if(typeof h==="undefined"||h===""){h=this.getParameterByName("game")
}if(h===""){if(e("meta[name='psnId']").length){h=e("meta[name='psnId']").attr("content")
}}return h
};
b.prototype.getParameterByName=function(l){l=l.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
var m=new RegExp("[\\?&]"+l+"=([^&#]*)"),k=m.exec(location.search);
var h="";
if(k!=null){h=decodeURIComponent(k[1].replace(/\+/g," "))
}return h
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(a){a.letterbox=function(d,l){var o={pageWidth:977,margin:0,videoIndex:0};
var u=a(d);
var r=a(".window",u);
var m=a(".content",u);
var g=a(".lt-ie8").length>0;
var v=false;
var q=0;
var p=0;
var e=0;
var C=0;
var b=0;
var x=0;
var c;
var A;
var z="";
function t(F){for(var E=0;
E<F.link.length;
E++){if(F.link[E].rel=="related"){var D=F.link[E].href;
return D.replace(/.*\//,"").replace(/\?.*$/,"")
}}return"unknown"
}var k=true;
var h=this;
h.settings={};
h.init=function(){h.settings=a.extend({},o,l);
var G=a.extend({},o,l),F=u,E=u;
function D(H){a.getJSON("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId="+z+"&key=AIzaSyAKRzl4h3hhO1X3imjDNBNFkgqmiBhzk_U&alt=json&callback=?",function(M){var L=M.items[G.videoIndex];
ytJSON=true;
var K=L.snippet.resourceId.videoId,J="https://www.youtube.com/watch?v="+K;
var I="no";
if(a(L).isVideoItemAgeGated){if(a(L).isVideoItemAgeGated()){I="yes"
}}H.find("a").attr("href",J).addClass("lb_youtube").attr("data-agegating",I).removeClass("lb_ytPlaylist");
if(a.fn.pdcLightbox){H.find("a").pdcLightbox()
}})
}E.find("a").each(function(){$this=a(this);
if($this.attr("data-playlist-id")){z=$this.attr("data-playlist-id");
D($this.parent())
}});
if(!Modernizr.touch&&!g){if(a(".lt-ie8").length>0){k=false;
r.css("top","-"+u.height()+"px")
}a(window).bind("scroll",function(){w()
})
}if(!g){a(window).resize(function(){y()
})
}q=n();
p=a(window).height();
e=q+p;
C=u.offset().top;
b=m.height();
x=C+b
};
function y(){if(!Modernizr.touch){B()
}f(function(){q=n();
p=a(window).height();
e=q+p;
C=u.offset().top;
b=m.height();
x=C+b
},500)
}function f(E,D){clearTimeout(c);
c=setTimeout(E,D)
}function w(){if(u.isVisible()){if(!v){requestAnimFrame(B);
v=true
}}else{if(r.hasClass("fixed")){r.removeClass("fixed");
r.removeAttr("style");
u.removeAttr("style")
}}}function B(){var J=n();
var H=J+p;
var E=u.offset().top;
var F=m.height();
var G=E+F;
if(k){if(E<H&&(G+h.settings.margin)>H){var D=(H-E)-h.settings.margin;
if(D<0){D=0
}u.height(F);
r.height(D);
r.addClass("fixed scrolling");
clearTimeout(A);
A=setTimeout(function(){r.removeClass("scrolling")
},500)
}else{if(r.hasClass("fixed")){r.removeClass("fixed");
r.removeAttr("style");
u.removeAttr("style")
}}}else{if(J>(E-p)&&H<(G+p)){var I=H-E-(F+h.settings.margin);
if(I<(-F)){I=-F
}else{if(I>0){I=0
}}r.css("top",I+"px")
}}v=false
}function n(){return(document.documentElement.scrollTop||document.body.scrollTop)
}h.init()
};
a.fn.letterbox=function(b){return this.each(function(){if(undefined==a(this).data("letterbox")){var c=new a.letterbox(this,b);
a(this).data("letterbox",c)
}})
}
})(jQuery);
(function(e,c,a,g){var d="faqExpand",f={};
function b(k,h){this.element=k;
this.$element=e(this.element);
this.$key=e(this.element).attr("id");
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){var h=this;
h.$element.on("click","a.toggleHeader",function(){var m=e(this);
if(h.$lastOpened&&h.$lastOpened.find("a").get(0)!==this){h.$lastOpened.removeClass("accordion-active");
h.$lastOpened.find(".accordion-section-container").slideUp(300)
}var l=h.$lastOpened=m.parent();
l.toggleClass("accordion-active");
var k=l.find(".accordion-section-container");
if(l.hasClass("accordion-active")){h.curOpenAccordHeight=k.outerHeight()?k.outerHeight():0;
k.slideDown(300)
}else{h.curOpenAccordHeight=0;
k.slideUp(300)
}h.showMoreFaqs()
});
h.$wrapper=h.$element.find(".wrapper");
h.$element.on("click",".more-links",function(){h.loadMoreFaqs(e(this).data())
});
h.showMoreFaqs();
e(c).on("resize",function(){h.showMoreFaqs()
});
e(c).on("orientationchange",function(){h.showMoreFaqs()
})
};
b.prototype.loadMoreFaqs=function(h){var k=this;
if(!k.$ajaxLoader){var l=k.$wrapper.find(".items > ul");
k.$element.find(".more-links").remove();
k.$ajaxLoader=e("<div>").attr({"class":"ajax-loader"}).appendTo(l).css({position:"relative",backgroundPosition:"top center",width:"100%",height:"50px",marginTop:"20px"});
e.ajax({url:h.nextPage,dataType:"html"}).done(function(n){var m=e(n);
if(m.length){l.css("height",l.outerHeight());
l.append(m);
k.showMoreFaqs()
}k.$ajaxLoader.remove();
k.$ajaxLoader=null
})
}};
b.prototype.showMoreFaqs=function(){var k=this;
var n=300;
var m=0;
var l=k.$wrapper.find(".items > ul").eq(0);
l.find(".item div > a").each(function(){m+=e(this).outerHeight()+2
});
var h=k.$element.find(".more-links");
m=m+(h.outerHeight()?h.outerHeight(true):0);
m=m+(k.curOpenAccordHeight||0);
l.eq(0).animate({height:m},n,function(){l.css("height","")
})
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(e,c,a,g){var d="faqSearch",f={faqServlet:"${searchQuery.faqServletURL}",noResultsMsg:"0 Results Found"};
function b(k,h){this.element=k;
this.$element=e(this.element);
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.$loadingIcon=this.$element.find(".loader");
this.$searchButton=this.$element.find(".currentSearchButtonFaq");
this.$searchTextBox=this.$element.find(".currentFaqSearchTerm");
this.$exportPage=this.$element.find(".buttonExportPage");
this.$resultsDiv=this.$element.find(".results-list");
this.$exportStatus=this.$element.find(".exportStatus");
this.init()
}b.prototype.init=function(){var k=this;
if(c.location.search!==""&&c.location.search!=="?"){var n=c.location.search.substring(1),l=n.split("&");
for(var m=0;
m<l.length;
m++){var h=l[m].split("=");
if(h[0]==="search"){k.$searchTextBox.val(decodeURIComponent(h[1]));
k.scrollToSearchBar();
k.simpleSearch()
}}}k.initGSAFAQ()
};
b.prototype.scrollToSearchBar=function(){var h=this;
try{e(a).ready(function(){setTimeout(function(){e("html, body").animate({scrollTop:h.$element.offset().top-180},200)
},1000)
})
}catch(k){}};
b.prototype.initGSAFAQ=function(){var h=this;
h.$searchButton.click(function(){var k=h.$searchTextBox.val();
h.simpleSearch()
});
this.$searchTextBox.keypress(function(m){var l=(m.keyCode?m.keyCode:m.which);
if(l==13){var k=h.$searchTextBox.val();
h.simpleSearch();
a.activeElement.blur()
}});
h.$exportPage.click(function(){h.$exportStatus.empty();
h.$exportStatus.append(e("<p>").html("Exporting..."));
e.ajax({url:h.options.faqServlet+".faqpagecreator.json",type:"GET",cache:false,dataType:"json"}).done(function(k){h.$exportStatus.empty();
h.$exportStatus.append(e("<p>").html("All Pages Exported"))
}).fail(function(){h.$exportStatus.empty();
h.$exportStatus.append(e("<p>").html("Error Exporting Page"))
})
})
};
b.prototype.simpleSearch=function(){var h=this;
h.$resultsDiv.empty();
var k=h.$searchTextBox.val();
if(k.match(/<script\b[^>]*>(.*?)<\/script>/gi)){k=k.replace(/<script\b[^>]*>(.*?)<\/script>/gi,"");
h.$searchTextBox.attr({value:k})
}if(k==""){h.$resultsDiv.append(e("<div class='no-results'>").append(e("<p>").html("Enter valid search term")));
return
}else{if(typeof k!="undefined"&&k.length<3){h.$resultsDiv.append(e("<div class='no-results'>").append(e("<p>").html("Searched word must contain more than 2 characters")));
return
}}e(".loader").show();
var l=c.location.protocol+"//"+c.location.host+"/bin/faqSearch?searchWord="+encodeURIComponent(k);
e.ajax({url:l,dataType:"json",type:"GET",success:function(o){try{h.$resultsDiv.empty();
if(!e.isEmptyObject(o)&&typeof o.results!=="undefined"&&o.results.length>=1){var m=o.results;
e.each(m,function(p,q){h.$resultsDiv.append(e(q.htmlResponse))
});
e(".loader").hide()
}else{h.$resultsDiv.append(e("<div class='no-results'>").append(e("<p>").html(h.options.noResultsMsg)));
e(".loader").hide()
}}catch(n){h.$resultsDiv.append(e("<div class='no-results'>").append(e("<p>").html(h.options.noResultsMsg)));
e(".loader").hide()
}},error:function(m){h.$resultsDiv.empty();
h.$resultsDiv.append(e("<div class='no-results'>").append(e("<p>").html(h.options.noResultsMsg)));
e(".loader").hide()
}})
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(e,c,a,g){var d="conditionalMessaging",f={query:""};
function b(k,h){this.element=k;
this.$element=e(this.element);
this.$key=e(this.element).attr("id");
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){var h=this;
var l=h.options;
var k=h.getParameters(decodeURIComponent(l.query));
var n=h.getParameters(a.location.search.substring(1));
var m=true;
e.each(k,function(o,p){if(typeof n[o]==="undefined"||n[o]!==p){m=false;
return false
}});
if(m){e(a).ready(function(){h.anchorToSection();
setTimeout(function(){var o=screen.width>980?845:c.innerWidth*0.8;
e.colorbox({href:"#"+h.$key,width:o,inline:true,className:"conditionalMsg",scrolling:false})
},600)
})
}};
b.prototype.anchorToSection=function(){var k=this;
var h=k.$element.data("deeplink");
var l=e("#"+h);
if(l.length>0){var n=l.offset().top-e(c).scrollTop(),m=e("nav").height();
e("html, body").animate({scrollTop:n-(m+22)})
}};
b.prototype.getParameters=function(l){var m={};
var h=l.split("&");
for(var k=0;
k<h.length;
k++){var n=h[k].split("=");
m[n[0]]=decodeURIComponent(n[1])
}return m
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(c,b,a,d){c.statList=function(g,f){var k={};
var h=this;
h.settings={};
var e=c(g),g=g;
h.init=function(){h.settings=c.extend({},k,f);
var m=h.settings;
var l=e.find(".hidden");
e.find("div.more").attr("aria-expanded","false").on("click",function(o){o.preventDefault();
var n=c(this);
if(n.attr("aria-expanded")=="true"){h.hideAll(l,m);
n.attr("aria-expanded","false").find("span").removeClass("showLess").html("MORE")
}else{h.revealAll(l,m);
n.attr("aria-expanded","true").find("span").addClass("showLess").html("LESS")
}});
h.hideAll(l,m)
};
h.hideAll=function(l,m){l.hide()
};
h.revealAll=function(l,m){l.show()
};
h.init()
};
c.fn.statList=function(e){return this.each(function(){if(d==c(this).data("statList")){var f=new c.statList(this,e);
c(this).data("statList",f)
}})
}
})(jQuery,window,document);
(function(e,c,a,g){var d="collapsiblefootnote",f={};
function b(k,h){this.element=k;
this.$element=e(k);
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.$footnotecontainer=this.$element.find(".footnotes");
this.$footnote=this.$element.find(".csc-default");
this.init()
}b.prototype.init=function(){var h=this;
h.$footnotecontainer.click(function(){h.$footnotecontainer.toggleClass("iscollapsed","isexpanded")
})
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(e,c,a,g){var d="CM115_articleList",f={revealMore:5};
function b(k,h){this.element=k;
this.$element=e(k);
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.moreButton=this.$element.find("div.more");
this.init();
this.articleTotal;
this.articleCount
}b.prototype.init=function(){var m=this;
var h=m.$element.find("ul.articles li.li-article-container"),l=h.length,k=0,n=m.options;
for(i=0;
i<=n.revealMore-1;
i++){k++;
e(h[i]).removeClass("hide");
e(h[i]).find("article").find("h3").dotdotdot();
e(h[i]).find("article").find("p").dotdotdot()
}if(l<=n.revealMore){m.moreButton.remove()
}m.articleCount=k;
this.showMore(h,l)
};
b.prototype.showMore=function(h,k){var l=this,n=l.options;
var m=l.articleCount+n.revealMore;
l.moreButton.on("click",function(o){for(i=l.articleCount;
i<=m-1;
i++){e(h[i]).removeClass("hide");
l.articleCount++
}m+=5;
if(l.articleCount>=k){l.moreButton.remove()
}})
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(a){a.fn.showScene7VideoPanel=function(){var p=this.attr("data-link").split("/is/content/");
if(p.length!=2){return
}var e,b,d,q=false,l=0,g=p[0],k=p[1],c=this.attr("id"),o=this.parent().innerWidth(),m=this.parent().innerHeight();
function f(r,u,t){if(l==0&&e.viewController&&e.viewController.playbackInfo&&e.viewController.playbackInfo.duration){l=e.viewController.playbackInfo.duration/1000
}if(typeof s!="undefined"&&typeof s.Media!="undefined"&&l!=0){if(r=="Select"){if(t){d=t
}return
}var h=Number(t)/1000,v=d;
if(!v){v=u
}v=v.replace(/.*\//,"")+"/"+s.pageName.replace(/:/g,"-");
if(r=="Play"){s.Media.open(v,l,s.Media.playerName);
s.Media.play(v,h);
q=true
}else{if(r=="Ended"){s.Media.stop(v,h);
s.Media.close(v);
q=false
}else{if(r=="Pause"){s.Media.stop(v,h);
q=false
}else{if(r=="Seek"){if(q){s.Media.stop(v,b);
s.Media.play(v,h)
}}}}}b=h
}}if(g.substring(0,2)=="//"){g=location.protocol+g
}if(typeof this.attr("data-avs")!="undefined"){k=this.attr("data-avs")
}d=k;
this.css("width","100%").css("height","100%");
if(window.onVideoPlayerClose){window.onVideoPlayerClose()
}var n={serverUrl:g+"/is/image/",videoServerUrl:g+"/is/content/",asset:k,videoTitle:this.attr("data-title"),cqPath:this.attr("data-path"),ageRating:this.attr("data-agethreshold"),translationService:function(h){if(h=="seek video"||h=="video time"){return""
}if(typeof Adobe.I18n.get=="function"){return Adobe.I18n.get(h)
}return h
},container:document.getElementById(c),locale:window.mboxRelatedVideosLocale,mboxContId:window.mboxRelatedVideosName,onViewerEvent:f,params:{progressivebitrate:900,transition:"fade,1,0.5"}};
if(n.cqPath){d=n.cqPath
}if(window.scene7Servers){n.testServerUrl=scene7Servers.test+"/is/image/";
n.prodServerUrl=scene7Servers.production+"/is/image/";
n.testVideoServerUrl=scene7Servers.test+"/is/content/";
n.prodVideoServerUrl=scene7Servers.production+"/is/content/"
}e=new com.videoViewer.S7ViewerWrapper(n);
e.onWindowResize=function(){a.colorbox.resize({innerWidth:"80%",innerHeight:"80%"})
};
e.onUIFadeAnimation=function(t){var r=a("div#cboxPrevious");
var h=a("div#cboxNext");
r.css("opacity",t);
h.css("opacity",t);
r.css("left",(60*t)+"px");
h.css("right",(60*t)+"px")
};
window.onVideoPlayerClose=function(){try{e.onViewerClosed()
}catch(h){}try{delete window.onVideoPlayerClose
}catch(h){window.onVideoPlayerClose=undefined
}};
window.setRelatedVideos=function(h){e.setRelatedVideos(h)
};
e.draw()
};
a.fn.getVideoDivHTML=function(b){var c="";
a(this).each(function(){a.each(this.attributes,function(){if(this.name=="href"){c+="data-link='"+this.value+"' "
}else{if(this.name.match(/^data/)){c+=this.name+"='"+this.value.replace(/'/g,"&apos;")+"' "
}}})
});
return"<div class='s7videoContainer' id='"+b+"' "+c+"></div>"
}
})(jQuery);
if(!com){var com={videoViewer:{}}
}else{com.videoViewer={}
}com.videoViewer.DataController=function(b){this.processConfig(b);
this.utils=new com.videoViewer.ViewerUtils();
var a=navigator.userAgent.toLowerCase();
this.isIE=(a.indexOf("msie")!=-1&&!this.isOpera&&(a.indexOf("webtv")==-1));
this.isIE8=(a.indexOf("msie 8")!=-1);
this.isIE9=(this.isIE&&((a.indexOf("msie 9")!=-1)||(a.indexOf("msie 8")!=-1)||(a.indexOf("msie 7")!=-1)));
this.isAndroid=a.toLowerCase().indexOf("android")!=-1;
this.isChrome=a.toLowerCase().indexOf("chrome")!=-1;
this.container=null;
this.debugMode=false;
this.lasTrackedEvent=null;
this.applyCheckStop=(s7sdk.browser.device.name!="desktop")
};
com.videoViewer.DataController.prototype.processConfig=function(a){this.serverUrl=a.serverUrl?a.serverUrl:"/is/image";
this.videoServerUrl=a.videoServerUrl?a.videoServerUrl:null;
this.asset=a.asset?a.asset:null;
this.parentContainer=a.container?a.container:null;
this.posterImage=a.posterImage?a.posterImage:null;
this.videoTitle=a.videoTitle?a.videoTitle:null;
this.cqPath=a.cqPath?a.cqPath:null;
this.defaultGenre=a.defaultGenre?a.defaultGenre:null;
this.autoPlay="0";
this.locale=a.locale?a.locale:"en-uk";
this.review=a.review?a.review:[];
this.handler=a.onViewerEvent?a.onViewerEvent:null;
this.debugMode=a.debugMode?a.debugMode:false;
this.cqBasePath=a.cqBasePath?a.cqBasePath:"";
this.mboxContId=a.mboxContId?a.mboxContId:null;
this.translationService=a.translationService?a.translationService:null;
this.confParams=a.params?a.params:null;
this.ageRating=a.ageRating?a.ageRating:null;
this.testServerUrl=a.testServerUrl?a.testServerUrl:null;
this.testVideoServerUrl=a.testVideoServerUrl?a.testVideoServerUrl:null;
this.prodServerUrl=a.prodServerUrl?a.prodServerUrl:null;
this.prodVideoServerUrl=a.prodVideoServerUrl?a.prodVideoServerUrl:null
};
com.videoViewer.DataController.prototype.getContainer=function(){return this.container
};
com.videoViewer.DataController.prototype.init=function(){this.trackEvent("Init");
this.container=document.createElement("div");
this.containerId="viewerContainer_"+this.instanceCount;
this.container.id="viewerContainer_"+this.instanceCount;
this.container.style.overflow="hidden";
this.container.style.width="100%";
this.container.style.height="100%";
this.parentContainer.appendChild(this.container);
this.currentImageIdx=-1;
if(!s7sdk.video||(typeof(s7sdk.video.VideoPlayer)!=="function")){s7sdk.Util.lib.include("s7sdk.event.Event");
s7sdk.Util.lib.include("s7sdk.video.VideoPlayer");
s7sdk.Util.lib.include("s7sdk.common.Container");
s7sdk.Util.lib.include("s7sdk.common.ControlBar");
s7sdk.Util.lib.include("s7sdk.common.Button");
s7sdk.Util.lib.include("s7sdk.video.VideoControls");
s7sdk.Util.init()
}var b=this.container;
while(b.parentNode){b=b.parentNode;
if(b.id&&(b.id=="cboxLoadedContent")){this.cboxLoadedContent=b
}else{if(b.id&&(b.id=="colorbox")){this.colorbox=b
}else{if(b.id&&(b.id=="cboxContent")){this.cboxContent=b
}}}}if(!this.cboxCloseButton){var e=this.cboxContent.childNodes;
for(var c=0;
c<e.length;
c++){if(this.cboxContent.childNodes[c].id&&(this.cboxContent.childNodes[c].id=="cboxClose")){var a=this.cboxContent.childNodes[c];
var d=a.parentNode;
d.removeChild(a);
document.body.appendChild(a);
a.style.top=(this.colorbox.offsetTop)+"px";
a.style.left=(this.colorbox.offsetLeft+this.colorbox.offsetWidth-a.offsetWidth+4)+"px";
a.style.zIndex="9999";
this.cboxCloseButton=a;
com.videoViewer.DataController.cboxCloseButton=a;
break
}}}if(!this.cboxCloseButton&&com.videoViewer.DataController.cboxCloseButton){this.cboxCloseButton=com.videoViewer.DataController.cboxCloseButton
}this.createParamManager();
if(this.testServerUrl&&this.testVideoServerUrl&&this.prodServerUrl&&this.prodVideoServerUrl){this.createTestParamManager();
this.createProdParamManager()
}};
com.videoViewer.DataController.prototype.onAssetChanged=function(){this.params=null;
this.createParamManager()
};
com.videoViewer.DataController.prototype.createParamManager=function(){var d=this;
this.recommendationLabel="You might also like";
this.params=new s7sdk.ParameterManager(null,this.locale);
function e(){d.onDataControllerInitComplete()
}this.params.push("serverurl",this.serverUrl);
this.params.push("videoPlayer_"+this.instanceCount+".autoplay","0");
this.params.push("videoPlayerReview_"+this.instanceCount+".autoplay","1");
if(typeof(this.translationService)==="function"){var a={};
a[this.locale]={"PlayPauseButton.TOOLTIP_SELECTED":this.translationService("play"),"PlayPauseButton.TOOLTIP_UNSELECTED":this.translationService("pause"),"VideoScrubber.TOOLTIP":this.translationService("seek video"),"FullScreenButton.TOOLTIP_SELECTED":this.translationService("Exit full screen"),"FullScreenButton.TOOLTIP_UNSELECTED":this.translationService("full screen"),"VideoTime.TOOLTIP":this.translationService("video time"),"MutableVolume.TOOLTIP_SELECTED":this.translationService("video volume"),"MutableVolume.TOOLTIP_UNSELECTED":this.translationService("video volume")};
this.params.setLocalizedTexts(a);
this.recommendationLabel=this.translationService("You might also like")
}else{var a={};
a[this.locale]={"FullScreenButton.TOOLTIP_SELECTED":"Exit full screen"};
this.params.setLocalizedTexts(a)
}this.params.push("videoserverurl",this.videoServerUrl);
var b="1,-1,0.3,0";
if(s7sdk.browser.name=="ie"&&s7sdk.browser.version.minor==8){b="1,-1,0,0"
}this.params.push("iconeffect",b);
this.params.push("Container.stagesize","10, 10");
if(this.confParams){for(var c in this.confParams){this.params.push(c,this.confParams[c]+"")
}}if(this.posterImage){}this.params.addEventListener(s7sdk.Event.SDK_READY,e,false);
this.params.init()
};
com.videoViewer.DataController.prototype.createTestParamManager=function(){var d=this;
this.recommendationLabel="You might also like";
this.testParams=new s7sdk.ParameterManager(null,this.locale);
function e(){}this.testParams.push("serverurl",this.testServerUrl);
this.testParams.push("videoPlayer_"+this.instanceCount+".autoplay","0");
this.testParams.push("videoPlayerReview_"+this.instanceCount+".autoplay","1");
if(typeof(this.translationService)==="function"){var a={};
a[this.locale]={"PlayPauseButton.TOOLTIP_SELECTED":this.translationService("play"),"PlayPauseButton.TOOLTIP_UNSELECTED":this.translationService("pause"),"VideoScrubber.TOOLTIP":this.translationService("seek video"),"FullScreenButton.TOOLTIP_SELECTED":this.translationService("Exit full screen"),"FullScreenButton.TOOLTIP_UNSELECTED":this.translationService("full screen"),"VideoTime.TOOLTIP":this.translationService("video time"),"MutableVolume.TOOLTIP_SELECTED":this.translationService("video volume"),"MutableVolume.TOOLTIP_UNSELECTED":this.translationService("video volume")};
this.testParams.setLocalizedTexts(a);
this.recommendationLabel=this.translationService("You might also like")
}else{var a={};
a[this.locale]={"FullScreenButton.TOOLTIP_SELECTED":"Exit full screen"};
this.testParams.setLocalizedTexts(a)
}this.testParams.push("videoserverurl",this.testVideoServerUrl);
var b="1,-1,0.3,0";
if(s7sdk.browser.name=="ie"&&s7sdk.browser.version.minor==8){b="1,-1,0,0"
}this.testParams.push("iconeffect",b);
this.testParams.push("Container.stagesize","10, 10");
if(this.confParams){for(var c in this.confParams){this.testParams.push(c,this.confParams[c]+"")
}}if(this.posterImage){}this.testParams.addEventListener(s7sdk.Event.SDK_READY,e,false);
this.testParams.init()
};
com.videoViewer.DataController.prototype.createProdParamManager=function(){var d=this;
this.recommendationLabel="You might also like";
this.prodParams=new s7sdk.ParameterManager(null,this.locale);
function e(){}this.prodParams.push("serverurl",this.prodServerUrl);
this.prodParams.push("videoPlayer_"+this.instanceCount+".autoplay","0");
this.prodParams.push("videoPlayerReview_"+this.instanceCount+".autoplay","1");
if(typeof(this.translationService)==="function"){var a={};
a[this.locale]={"PlayPauseButton.TOOLTIP_SELECTED":this.translationService("play"),"PlayPauseButton.TOOLTIP_UNSELECTED":this.translationService("pause"),"VideoScrubber.TOOLTIP":this.translationService("seek video"),"FullScreenButton.TOOLTIP_SELECTED":this.translationService("Exit full screen"),"FullScreenButton.TOOLTIP_UNSELECTED":this.translationService("full screen"),"VideoTime.TOOLTIP":this.translationService("video time"),"MutableVolume.TOOLTIP_SELECTED":this.translationService("video volume"),"MutableVolume.TOOLTIP_UNSELECTED":this.translationService("video volume")};
this.prodParams.setLocalizedTexts(a);
this.recommendationLabel=this.translationService("You might also like")
}else{var a={};
a[this.locale]={"FullScreenButton.TOOLTIP_SELECTED":"Exit full screen"};
this.prodParams.setLocalizedTexts(a)
}this.prodParams.push("videoserverurl",this.prodVideoServerUrl);
var b="1,-1,0.3,0";
if(s7sdk.browser.name=="ie"&&s7sdk.browser.version.minor==8){b="1,-1,0,0"
}this.prodParams.push("iconeffect",b);
this.prodParams.push("Container.stagesize","10, 10");
if(this.confParams){for(var c in this.confParams){this.prodParams.push(c,this.confParams[c]+"")
}}if(this.posterImage){}this.prodParams.addEventListener(s7sdk.Event.SDK_READY,e,false);
this.prodParams.init()
};
com.videoViewer.DataController.prototype.getElementPosition=function(a){var c={x:0,y:0};
var b=a;
while(b.offsetParent!==null){c.x+=b.offsetLeft;
c.y+=b.offsetTop;
if(b!==a){c.x+=b.clientLeft;
c.y+=b.clientTop
}b=b.offsetParent
}return c
};
com.videoViewer.DataController.prototype.sjSetOpacity=function(b,d){if(d<0){d=0
}if(d>99){d=99.999999
}b.style.opacity=(d/100);
b.style.MozOpacity=(d/100);
b.style.KhtmlOpacity=(d/100);
var c=navigator.appVersion.split("MSIE");
var a=parseFloat(c[1]);
if((a>=5.5)&&(a<=8)&&(document.body.filters)){if(d>99){d=100;
b.style.opacity=(d/100)
}if(b.filters){if(b.filters.length>0){if(b.filters["DXImageTransform.Microsoft.Alpha"]){b.filters.item("DXImageTransform.Microsoft.Alpha").Opacity=d
}else{b.style.filter+=" progid:DXImageTransform.Microsoft.Alpha(opacity="+d+")"
}}else{b.style.filter=" progid:DXImageTransform.Microsoft.Alpha(opacity="+d+")"
}}}b.opacity=b.style.opacity;
return b.opacity
};
com.videoViewer.DataController.prototype.hitTestPoint=function(a,e,c){var d={x:a.getBoundingClientRect().left,y:a.getBoundingClientRect().top};
d.width=a.offsetWidth;
d.height=a.offsetHeight;
var b=false;
if((e>=d.x)&&e<=(d.x+d.width)&&(c>=d.y)&&c<=(d.y+d.height)){b=true
}return b
};
com.videoViewer.DataController.prototype.trackEvent=function(a,c,b){this.lasTrackedEvent=a;
if(typeof this.handler=="function"){this.handler(a,c,b)
}if(this.debugMode==true&&typeof console!="undefined"){console.log("-- "+this.getTimestamp()+" -- Event: "+a+(typeof c!="undefined"?" Asset: "+c:"")+(typeof b!="undefined"?" Data: "+b:""))
}};
com.videoViewer.DataController.prototype.getTimestamp=function(a){if(typeof a=="undefined"){a=new Date()
}return this.pad2digits(a.getHours())+":"+this.pad2digits(a.getMinutes())+":"+this.pad2digits(a.getSeconds())+"."+a.getMilliseconds()
};
com.videoViewer.DataController.prototype.pad2digits=function(a){return(a<10?"0"+a:a)
};
com.videoViewer.ViewerUtils=function(){};
com.videoViewer.ViewerUtils.prototype.parseVideoTime=function(b){var a=Math.floor(b/60);
var d=Math.floor(b-(a*60));
var c=a+":"+((d<10)?"0"+d:d);
return c
};
com.videoViewer.ViewerUtils.prototype.getOpacity=function(c){var b=c.style.opacity?c.style.opacity:c.style.MozOpacity?c.style.MozOpacity:c.style.KhtmlOpacity?c.style.KhtmlOpacity:null;
var d=navigator.appVersion.split("MSIE");
var a=parseFloat(d[1]);
if(!b&&(a>=5.5)&&(a<=8)&&(document.body.filters)){if(c.filters){if(c.filters.length>0){if(c.filters["DXImageTransform.Microsoft.Alpha"]){b=c.filters.item("DXImageTransform.Microsoft.Alpha").Opacity
}}}}return b?b:1
};
com.videoViewer.ViewerUtils.prototype.hitTestPoint=function(a,e,c){var d={x:a.getBoundingClientRect().left,y:a.getBoundingClientRect().top};
d.width=a.offsetWidth;
d.height=a.offsetHeight;
var b=false;
if((e>=d.x)&&e<=(d.x+d.width)&&(c>=d.y)&&c<=(d.y+d.height)){b=true
}return b
};
com.videoViewer.ViewerUtils.prototype.sjScreenSize=function(){var a=(window.innerWidth?window.innerWidth:(document.documentElement.clientWidth?document.documentElement.clientWidth:document.body.offsetWidth));
var b=(window.innerHeight?window.innerHeight:(document.documentElement.clientHeight?document.documentElement.clientHeight:document.body.offsetHeight));
return{w:a,h:b}
};
com.videoViewer.ViewerUtils.prototype.addClass=function(e,a){var f=e.className;
var d="";
if(f.indexOf(a)==-1){var b=" ";
if(f==""){b=""
}d=f+b+a;
e.className=d
}};
com.videoViewer.ViewerUtils.prototype.removeClass=function(d,a){var e=d.className;
var b="";
if(e.indexOf(a)!=-1){if(e.indexOf(" "+a)!=-1){b=e.replace(" "+a,"")
}else{b=e.replace(a,"")
}d.className=b
}};
com.videoViewer.ViewerUtils.prototype.hasClass=function(b,a){var d=b.className;
return(d.indexOf(a)!=-1)
};
var sjCallbacks=[];
var sjErrCallbacks=[];
function sjGetResponse(d,c,a,g){var b="";
var f=c.indexOf("?");
if(f>=0){b=c+"&"+d
}else{b=c+"?"+d
}var h=sjHashCode(b);
b+="&id="+h;
if(typeof a!="undefined"){sjCallbacks.push({callback:a,id:h})
}if(typeof g!="undefined"){sjErrCallbacks.push({callback:g,id:h})
}var e=document.getElementById("sjScript_"+h);
if(e){document.getElementsByTagName("head")[0].removeChild(e);
e=null
}e=document.createElement("script");
e.type="text/javascript";
e.id="sjScript_"+h;
e.src=b;
if(typeof e!="undefined"){document.getElementsByTagName("head")[0].appendChild(e)
}}function utilsJSONResponse(c,b){for(var a=0;
a<sjCallbacks.length;
a++){if(sjCallbacks[a]!=null){if(sjCallbacks[a].id==parseInt(b)){if(sjCallbacks[a].callback){sjCallbacks[a].callback(c)
}delete sjCallbacks[a]
}}}}function s7jsonError(d,c){var a=true;
for(var b=0;
b<sjErrCallbacks.length;
b++){if(sjErrCallbacks[b]!=null){if(sjErrCallbacks[b].id==parseInt(c)){if(sjErrCallbacks[b].callback){sjErrCallbacks[b].callback(d)
}delete sjErrCallbacks[b];
a=false
}}}if(a){}}function sjDebug(d,a,c,b){}function sjHashCode(f){if(!f||f==""){return 1
}var b=0,e=0;
for(var a=f.length-1;
a>=0;
a--){var k=parseInt(f.charCodeAt(a));
b=((b<<6)&268435455)+k+(k<<14);
if((e=b&266338304)!=0){b=(b^(e>>21))
}}return b
}com.videoViewer.ViewController=function(a){this.dataController=a;
this.androidTimeout=null;
this.positionAdjustmentTick=null;
this.videoHeader=null;
this.volumeControlsHideTick=null;
this.prevState=null;
this.playbackInfo={duration:0,playedTime:0,loadedTime:0};
this.checkStopTick=null;
this.skipCapabilityStateEvent=false;
this.lastTrackedTime=-1;
this.playEventSent=false;
this.doCallMBoxUpdate=true;
this.prevState=null;
this.disposed=false;
this.posterImageHolder=null;
this.fixTransparencyTick=null;
this.isTestMode=false;
this.playPending=false;
this.isMuted=false
};
com.videoViewer.ViewController.prototype.init=function(){this.createVideo();
this.createVideoToolBar();
this.createVideoHeader();
this.createReviewPage()
};
com.videoViewer.ViewController.prototype.resizeViewer=function(){var a={w:this.dataController.getContainer().offsetWidth,h:this.dataController.getContainer().offsetHeight};
if(!this.videoContainer.isFullScreen()){this.videoContainer.resize(a.w,a.h)
}};
com.videoViewer.ViewController.prototype.dispose=function(){this.disposed=true;
this.video.pause();
if(this.checkStopTick){clearInterval(this.checkStopTick);
this.checkStopTick=null
}if(this.androidTimeout){clearInterval(this.androidTimeout);
this.androidTimeout=null
}if(this.positionAdjustmentTick){clearInterval(this.positionAdjustmentTick);
this.positionAdjustmentTick=null
}if(this.volumeControlsHideTick){clearTimeout(this.volumeControlsHideTick);
this.volumeControlsHideTick=null
}if(this.doubleClickPendingTick){clearTimeout(this.doubleClickPendingTick);
this.doubleClickPendingTick=null
}if(this.volumeCtrl){this.volumeCtrl.dispose()
}if(this.videoHeader){this.videoHeader.dispose()
}};
com.videoViewer.ViewController.prototype.setAsset=function(a,b){this.doCallMBoxUpdate=true;
this.dataController.asset=a;
this.dataController.posterImage=b?b:null;
this.dataController.review=[];
this.playEventSent=false;
this.lastTrackedTime=-1;
this.dataController.trackEvent("Select",this.dataController.asset,this.dataController.cqPath);
this.createVideo();
this.playbackInfo={duration:0,playedTime:0,loadedTime:0}
};
com.videoViewer.ViewController.prototype.createVideo=function(){var b=this;
var k=this.dataController.getContainer().offsetWidth;
var e=this.dataController.getContainer().offsetHeight;
if(!this.videoContainer){this.videoContainer=new s7sdk.Container(this.dataController.containerId,this.dataController.params,"videoContainer_"+this.dataController.instanceCount);
this.videoContainer.resize(k,e);
this.videoContainer.addEventListener(s7sdk.event.ResizeEvent.COMPONENT_RESIZE,function(h){b.onResizeViewer(h)
},false);
this.videoContainer.addEventListener(s7sdk.event.ResizeEvent.FULLSCREEN_RESIZE,function(h){b.onFullscreen(h)
},false);
if(!this.videoContainer.supportsNativeFullScreen()){if(window.addEventListener){window.addEventListener("resize",function(m){if(b.videoContainer.isFullScreen()){var h=b.dataController.utils.sjScreenSize();
b.videoContainer.resize(h.w,h.h)
}},false)
}else{if(window.attachEvent){window.attachEvent("onresize",function(){if(b.videoContainer.isFullScreen()){var h=b.dataController.utils.sjScreenSize();
b.videoContainer.resize(h.w,h.h)
}})
}}}}var f=true;
var l=false;
if(this.video){this.videoToolbar.detachView(this.video);
this.videoContainer.obj.removeChild(this.video.obj);
if(this.dataController.testServerUrl&&this.dataController.testVideoServerUrl&&this.dataController.prodServerUrl&&this.dataController.prodVideoServerUrl){if(this.isTestMode){this.video=new s7sdk.video.VideoPlayer(this.videoContainer.id,this.dataController.testParams,"videoPlayerReview_"+this.dataController.instanceCount)
}else{this.video=new s7sdk.video.VideoPlayer(this.videoContainer.id,this.dataController.prodParams,"videoPlayerReview_"+this.dataController.instanceCount)
}}else{this.video=new s7sdk.video.VideoPlayer(this.videoContainer.id,this.dataController.params,"videoPlayerReview_"+this.dataController.instanceCount)
}l=true
}else{this.video=new s7sdk.video.VideoPlayer(this.videoContainer.id,this.dataController.params,"videoPlayer_"+this.dataController.instanceCount)
}if(this.dataController.isChrome){this.video.obj.style.visibility="hidden"
}this.video.addEventListener(s7sdk.event.VideoEvent.NOTF_CURRENT_TIME,function(h){b.onNotifyVideoTime(h)
},false);
this.video.addEventListener(s7sdk.event.VideoEvent.NOTF_DURATION,function(h){b.onNotifyVideoTime(h)
},false);
this.video.addEventListener(s7sdk.event.VideoEvent.NOTF_LOAD_PROGRESS,function(h){b.onNotifyVideoTime(h)
},false);
this.video.addEventListener(s7sdk.event.CapabilityStateEvent.NOTF_VIDEO_CAPABILITY_STATE,function(h){b.onNotifyVideoState(h)
},false);
this.video.setAsset(this.dataController.asset,this.dataController.posterImage?this.dataController.posterImage:null);
if((s7sdk.browser.name=="ie")&&(s7sdk.browser.version.minor==9)&&(this.video.obj.childNodes[0].tagName=="VIDEO")){var g=this.video.obj.childNodes;
var c=false;
for(var d=0;
d<g.length;
d++){if(g[d].tagName=="VIDEO"){c=true;
break
}}if(c){if(!this.posterImageHolder){this.posterImageHolder=document.createElement("img");
this.posterImageHolder.style.width="100%";
this.posterImageHolder.style.height="100%";
this.posterImageHolder.style.position="absolute";
this.posterImageHolder.style.left="0px";
this.posterImageHolder.style.top="0px";
this.videoContainer.obj.appendChild(this.posterImageHolder)
}var a=this.dataController.serverUrl+"/"+this.dataController.posterImage+"?wid="+this.dataController.getContainer().offsetWidth+"&hei="+this.dataController.getContainer().offsetHeight+"&fit=fit,1&bgc=0x000000";
this.posterImageHolder.src=a
}}this.videoMouseEventHolder=document.createElement("div");
this.videoMouseEventHolder.className="s7videoplayer";
this.videoContainer.obj.appendChild(this.videoMouseEventHolder);
this.videoMouseEventHolder.style.width="100%";
this.videoMouseEventHolder.style.height="100%";
this.videoMouseEventHolder.style.position="absolute";
this.videoMouseEventHolder.style.left="0px";
this.videoMouseEventHolder.style.top="0px";
this.videoMouseEventHolder.style.zIndex="1";
this.videoMouseEventHolder.style.background="#000000";
this.dataController.sjSetOpacity(this.videoMouseEventHolder,0);
this.videoMouseEventHolderIcon=document.createElement("div");
this.videoMouseEventHolderIcon.className="s7iconeffect";
this.videoMouseEventHolderIcon.style.position="absolute";
this.videoMouseEventHolderIcon.style.zIndex="9999";
this.videoMouseEventHolder.appendChild(this.videoMouseEventHolderIcon);
this.dataController.sjSetOpacity(this.videoMouseEventHolderIcon,0);
this.videoMouseEventHolderIcon.style.top="50%";
this.videoMouseEventHolderIcon.style.left="50%";
this.videoMouseEventHolderIcon.style.marginTop="-"+(this.videoMouseEventHolderIcon.offsetHeight/2)+"px";
this.videoMouseEventHolderIcon.style.marginLeft="-"+(this.videoMouseEventHolderIcon.offsetWidth/2)+"px";
if(window.addEventListener){this.videoMouseEventHolder.addEventListener("mouseup",function(){b.onVideoAreaClick()
});
this.videoMouseEventHolderIcon.addEventListener("mouseover",function(h){b.onOverIconEffect()
},false);
this.videoMouseEventHolderIcon.addEventListener("mouseout",function(h){b.onOutIconEffect()
},false)
}else{if(window.attachEvent){this.videoMouseEventHolder.attachEvent("onmouseup",function(){b.onVideoAreaClick()
});
this.videoMouseEventHolderIcon.attachEvent("onmouseover",function(h){b.onOverIconEffect()
});
this.videoMouseEventHolderIcon.attachEvent("onmouseout",function(h){b.onOutIconEffect()
})
}}if(l){this.videoToolbar.attachView(this.videoMouseEventHolder)
}};
com.videoViewer.ViewController.prototype.onOverIconEffect=function(){this.dataController.utils.addClass(this.dataController.getContainer(),"overIconEffect"+(this.dataController.isIE8?"IE8":""))
};
com.videoViewer.ViewController.prototype.onOutIconEffect=function(){this.dataController.utils.removeClass(this.dataController.getContainer(),"overIconEffect"+(this.dataController.isIE8?"IE8":""))
};
com.videoViewer.ViewController.prototype.onVideoAreaClick=function(){if(this.doubleClickPendingTick){clearTimeout(this.doubleClickPendingTick);
this.doubleClickPendingTick=null;
this.onDoubleClickPerformed()
}else{var a=this;
this.doubleClickPendingTick=setTimeout(function(){a.onSingleClickPerformed()
},250)
}};
com.videoViewer.ViewController.prototype.onDoubleClickPerformed=function(){this.onClickFullScreen()
};
com.videoViewer.ViewController.prototype.onSingleClickPerformed=function(){if(this.doubleClickPendingTick){clearTimeout(this.doubleClickPendingTick);
this.doubleClickPendingTick=null
}this.playStop()
};
com.videoViewer.ViewController.prototype.playStop=function(){var b=this.video.getCapabilityState();
var a=b.hasCapability(s7sdk.VideoCapabilityState.PLAY);
var d=b.hasCapability(s7sdk.VideoCapabilityState.PAUSE);
var c=b.hasCapability(s7sdk.VideoCapabilityState.STOP);
if(this.dataController.lasTrackedEvent=="Ended"){this.video.seek(0);
this.video.play()
}if(a){this.video.play()
}if(d){this.video.pause()
}};
com.videoViewer.ViewController.prototype.createVideoToolBar=function(){var c=this;
this.videoScrubberMinimized=new s7sdk.video.VideoScrubber(this.videoContainer.id,this.dataController.params,"minimizedVideoScrubber_"+this.dataController.instanceCount);
if(this.videoToolbar){}this.videoToolbar=new s7sdk.common.ControlBar(this.videoContainer.id,this.dataController.params,"videoToolbar_"+this.dataController.instanceCount);
this.videoToolbar.attachView(this.videoMouseEventHolder);
this.btnPlay=new s7sdk.common.PlayPauseButton(this.videoToolbar.id,this.dataController.params,"playpauseBtn_"+this.dataController.instanceCount);
this.btnPlay.setSelected(true);
this.btnPlay.addEventListener("click",function(f){c.onPlayPauseButtonClick(f)
},false);
this.videoScrubber=new s7sdk.video.VideoScrubber(this.videoToolbar.id,this.dataController.params,"videoScrubber_"+this.dataController.instanceCount);
if(this.dataController.isAndroid&&typeof(window.ontouchend)!=="undefined"){document.body.addEventListener("touchend",function(){c.videoScrubber.inTouch=false
},false)
}if(!this.videoContainer.isMobile()){this.createVolumeControl()
}else{this.dataController.getContainer().className="mobile"
}this.videoTime=new s7sdk.video.VideoTime(this.videoToolbar.id,this.dataController.params,"videoTime_"+this.dataController.instanceCount);
this.videoScrubber.resize((this.videoTime.obj.offsetLeft-this.videoScrubber.obj.offsetLeft)-24,this.videoScrubber.obj.offsetHeight);
this.videoScrubberMinimized.resize(this.videoToolbar.obj.offsetWidth,this.videoScrubberMinimized.obj.offsetHeight);
this.videoScrubber.addEventListener(s7sdk.event.SliderEvent.NOTF_SLIDER_DOWN,function(f){c.onNotifyScrubberEvent(f)
},false);
this.videoScrubber.addEventListener(s7sdk.event.SliderEvent.NOTF_SLIDER_MOVE,function(f){c.onNotifyScrubberEvent(f)
},false);
this.videoScrubber.addEventListener(s7sdk.event.SliderEvent.NOTF_SLIDER_UP,function(f){c.onNotifyScrubberEvent(f)
},false);
var d=this.videoScrubber.obj.childNodes;
var a=null;
for(var b=0;
b<d.length;
b++){if(d[b].className=="s7knob"){a=d[b];
break
}}if(window.addEventListener){this.videoScrubber.obj.addEventListener("mouseup",function(f){if(c.dataController.utils.getOpacity(c.videoToolbar.obj)>0.2){c.onVideoScrubberClick(f)
}else{c.onVideoAreaClick()
}},false);
this.videoScrubber.obj.addEventListener("mousedown",function(f){if(a&&c.dataController.utils.hitTestPoint(a,f.clientX,f.clientY)){return
}else{f.preventDefault();
f.stopPropagation()
}},true)
}else{if(window.attachEvent){this.videoScrubber.obj.attachEvent("onmouseup",function(){if(c.dataController.utils.getOpacity(c.videoToolbar.obj)>0.2){c.onVideoScrubberClick(window.event)
}else{c.onVideoAreaClick()
}})
}}this.btnFullscreen=new s7sdk.common.FullScreenButton(this.videoToolbar.id,this.dataController.params,"fullScreenBtn_"+this.dataController.instanceCount);
if(typeof(window.ontouchend)!=="undefined"){this.btnFullscreen.addEventListener("touchend",function(){c.onClickFullScreen()
})
}else{this.btnFullscreen.addEventListener("click",function(){c.onClickFullScreen()
})
}};
com.videoViewer.ViewController.prototype.onVideoScrubberClick=function(f){var c=this;
var g=this.videoScrubber.obj.getBoundingClientRect();
if(!this.video.getDuration()){return
}var d=Math.max(0,Math.min(1,(f.clientX-g.left-8)/(this.videoScrubber.obj.offsetWidth)));
if((1-d)<0.01){d=1
}var a=d*this.video.getDuration();
if((s7sdk.browser.device.name=="desktop")&&(a==this.video.getDuration())){a=-1
}var b=(a>-1)?a:this.video.getDuration();
this.dataController.trackEvent("Seek",this.dataController.asset,b);
if(!this.playEventSent&&(b>=this.video.getDuration()/2)){if(this.reviewPage&&this.doCallMBoxUpdate){this.doCallMBoxUpdate=false;
this.reviewPage.getRelatedVideosForVideo()
}}if(a>-1){this.videoScrubber.setPosition(d);
this.video.seek(a)
}else{this.video.seek(this.video.getDuration()-100);
if(this.checkStopTick){clearInterval(this.checkStopTick);
this.checkStopTick=null
}this.checkStopTick=setInterval(function(){c.checkStopBySeek()
},500)
}};
com.videoViewer.ViewController.prototype.createVolumeControl=function(){this.volumeControllerHolder=document.createElement("div");
this.volumeControllerHolder.className="VolumeControllerHolder s7mutablevolume";
this.videoToolbar.obj.appendChild(this.volumeControllerHolder);
this.volumeControllerHolderHei=this.volumeControllerHolder.offsetHeight;
var e=0;
this.vcTransition=new com.videoViewer.Transition(this.volumeControllerHolder.offsetHeight,this.volumeControllerHolderHei,250);
this.volumeControllerHolder.style.visibility="hidden";
this.dataController.sjSetOpacity(this.volumeControllerHolder,0);
var d=this;
this.volumeCtrl=new com.videoViewer.VolumeController();
this.volumeCtrl.setContainer(this.volumeControllerHolder);
function a(f){if(!d.volumeCtrl.onSliderDown){d.dataController.trackEvent("Volume",d.dataController.asset,d.volumeCtrl.getSliderPos())
}d.video.setVolume(d.volumeCtrl.getSliderPos())
}this.volumeCtrl.onSliderPositionChanged=function(f){a()
};
this.volumeCtrl.init();
this.vcTransition.onTransition=function(f){e=f;
d.dataController.sjSetOpacity(d.volumeControllerHolder,f*100);
if(f<0.01){d.volumeControllerHolder.style.visibility="hidden"
}else{d.volumeControllerHolder.style.visibility="inherit"
}};
this.btnVolume=new s7sdk.video.MutableVolume(this.videoToolbar.id,this.dataController.params,"mutableVolume_"+this.dataController.instanceCount);
function b(){d.vcTransition.stop();
d.vcTransition.setStartValue(e);
d.vcTransition.setEndValue(1);
d.vcTransition.start()
}function c(){d.vcTransition.stop();
d.vcTransition.setStartValue(e);
d.vcTransition.setEndValue(0);
d.vcTransition.start()
}this.btnVolume.addEventListener("click",function(f){d.isMuted=!d.isMuted;
if(d.isMuted){d.video.mute();
d.dataController.utils.addClass(d.dataController.getContainer(),"muted")
}else{d.video.unmute();
d.dataController.utils.removeClass(d.dataController.getContainer(),"muted")
}},false);
this.btnVolume.obj.onmouseover=function(f){if(d.volumeControlsHideTick){clearTimeout(d.volumeControlsHideTick);
d.volumeControlsHideTick=null
}d.volumeControlsHideTick=setTimeout(function(){c()
},2000);
b()
};
this.btnVolume.obj.onmouseout=function(f){if(!f){f=window.event
}if(!d.dataController.utils.hitTestPoint(d.volumeControllerHolder,f.clientX,f.clientY)){if(d.volumeControlsHideTick){clearTimeout(d.volumeControlsHideTick);
d.volumeControlsHideTick=null
}d.volumeControlsHideTick=setTimeout(function(){c()
},2000)
}};
this.volumeControllerHolder.onmouseover=function(f){if(d.volumeControlsHideTick){clearTimeout(d.volumeControlsHideTick);
d.volumeControlsHideTick=null
}};
this.volumeControllerHolder.onmousemove=function(){if(d.volumeControlsHideTick){clearTimeout(d.volumeControlsHideTick);
d.volumeControlsHideTick=null
}d.volumeControlsHideTick=setTimeout(function(){c()
},2000)
};
this.volumeControllerHolder.onmouseout=function(f){if(d.volumeControlsHideTick){clearTimeout(d.volumeControlsHideTick);
d.volumeControlsHideTick=null
}d.volumeControlsHideTick=setTimeout(function(){c()
},2000)
}
};
com.videoViewer.ViewController.prototype.createVideoHeader=function(){this.videoHeader=new com.videoViewer.VideoHeaderController(this.dataController);
this.videoHeader.setContainer(this.videoContainer.obj);
this.videoHeader.setTargetComponent(this.videoToolbar.obj);
var a=this;
this.videoHeader.onVideoHeaderHide=function(){a.videoScrubber.inTouch=false
};
this.videoHeader.onHeaderPositionChange=function(b){if(typeof(a.onUIFadeAnimation)==="function"){a.onUIFadeAnimation(b)
}};
this.videoHeader.init()
};
com.videoViewer.ViewController.prototype.createReviewPage=function(){var a=this;
this.reviewPage=new com.videoViewer.ReviewPageController(this.dataController);
this.reviewPage.setContainer(this.videoContainer.obj);
this.reviewPage.onReviewPageDisplayChange=function(){if(typeof(a.notifyReviewPageDisplayChange)==="function"){a.notifyReviewPageDisplayChange()
}};
this.reviewPage.onReviewIdxHandler=function(c){var b=a.dataController.reviewList[c];
a.dataController.cqPath=a.dataController.review[a.dataController.reviewList[c].reviewIndex].path;
a.dataController.videoTitle=a.dataController.reviewList[c].videoTitle;
if(a.videoHeader){a.videoHeader.updateVideoTitleText()
}if(a.videoScrubber){a.videoScrubber.setPlayedTime(0);
a.videoTime.setPlayedTime(0);
a.videoScrubber.setLoadedPosition(0);
a.videoTime.setDuration(0)
}if(b.published&&b.published=="true"){a.isTestMode=false
}else{if(b.published&&b.published=="false"){a.isTestMode=true
}}a.setAsset(b.assetId);
this.hide()
};
this.reviewPage.onReplayClick=function(){if(!a.video){return
}a.video.seek(0);
a.video.play()
};
this.reviewPage.init();
this.videoToolbar.attachView(this.reviewPage.getHolder())
};
com.videoViewer.ViewController.prototype.sjScreenSize=function(){var a=(window.innerWidth?window.innerWidth:(document.documentElement.clientWidth?document.documentElement.clientWidth:document.body.offsetWidth));
var b=(window.innerHeight?window.innerHeight:(document.documentElement.clientHeight?document.documentElement.clientHeight:document.body.offsetHeight));
return{w:a,h:b}
};
com.videoViewer.ViewController.prototype.onFullscreen=function(a){if(this.disposed){return
}this.btnFullscreen.setSelected(this.videoContainer.isFullScreen());
this.btnFullscreen.obj.setAttribute("state","up");
if(this.videoContainer.isFullScreen()){if(!$("html").hasClass("isFullScreenMode")){$("html").addClass("isFullScreenMode")
}if($("html").hasClass("isEmbeddedMode")){$("html").removeClass("isEmbeddedMode")
}this.dataController.trackEvent("EnterFullScreen",this.dataController.asset)
}else{if($("html").hasClass("isFullScreenMode")){$("html").removeClass("isFullScreenMode")
}if(!$("html").hasClass("isEmbeddedMode")){$("html").addClass("isEmbeddedMode")
}this.dataController.trackEvent("ExitFullScreen",this.dataController.asset)
}this.generateEvent()
};
com.videoViewer.ViewController.prototype.generateEvent=function(){if(typeof(document.createEvent)==="undefined"){return
}var a=document.createEvent("MouseEvents");
a.initEvent("mousemove",true,true);
this.btnFullscreen.obj.dispatchEvent(a)
};
com.videoViewer.ViewController.prototype.onResizeViewer=function(b){if(this.disposed){return
}this.dataController.getContainer().style.overflow=this.videoContainer.isFullScreen()?"visible":"hidden";
if(this.dataController.cboxLoadedContent){this.dataController.cboxLoadedContent.style.overflow=this.videoContainer.isFullScreen()?"visible":"auto"
}if(this.dataController.colorbox){this.dataController.colorbox.style.overflow=this.videoContainer.isFullScreen()?"visible":"visible"
}var a=this;
if(!this.videoContainer.isFullScreen()&&((this.dataController.getContainer().offsetWidth!=b.s7event.w)||(this.dataController.getContainer().offsetHeight!=b.s7event.h))){this.videoContainer.resize(this.dataController.getContainer().offsetWidth,this.dataController.getContainer().offsetHeight)
}s=b.s7event;
if(this.videoContainer.isFullScreen()&&(this.dataController.isChrome||this.dataController.isAndroid)&&this.videoContainer.supportsNativeFullScreen()){if(this.androidTimeout){clearInterval(this.androidTimeout);
this.androidTimeout=null
}this.androidTimeout=setInterval(function(){a.adjustComponents(a.videoContainer.obj.offsetWidth,a.videoContainer.obj.offsetHeight)
},500)
}else{this.adjustComponents(this.videoContainer.isFullScreen()?s.w:this.dataController.getContainer().offsetWidth,this.videoContainer.isFullScreen()?s.h:this.dataController.getContainer().offsetHeight)
}if(!this.videoContainer.supportsNativeFullScreen()&&(this.videoContainer.isMobile()||(s7sdk.browser.name=="ie"))){if(this.positionAdjustmentTick){clearInterval(this.positionAdjustmentTick);
this.positionAdjustmentTick=null
}if(this.dataController.colorbox&&(s7sdk.browser.name=="ie")){var c=this.videoContainer.isFullScreen()?"visible":"visible";
if(this.dataController.colorbox.style.overflow!==c){this.dataController.colorbox.style.overflow=this.videoContainer.isFullScreen()?"visible":"visible"
}}this.positionAdjustmentTick=setInterval(function(){a.adjustPosition()
},100)
}if(this.videoHeader){this.videoHeader.updateVideoTitleText()
}};
com.videoViewer.ViewController.prototype.adjustPosition=function(){if(!this.videoContainer.isFullScreen()&&this.positionAdjustmentTick){this.positionAdjustmentTick=clearInterval(this.positionAdjustmentTick);
this.positionAdjustmentTick=null;
return
}if((s7sdk.browser.name=="ie")&&(s7sdk.browser.version.minor>=9)){if(this.dataController.colorbox){var f=this.videoContainer.isFullScreen()?"visible":"visible";
if(this.dataController.colorbox.style.overflow!==f){this.dataController.colorbox.style.overflow=this.videoContainer.isFullScreen()?"visible":"visible"
}}}if((s7sdk.browser.name=="ie")&&(s7sdk.browser.version.minor<=9)){this.videoContainer.obj.style.position=this.videoContainer.isFullScreen()?"fixed":"relative";
this.videoContainer.obj.style.top=0+"px";
this.videoContainer.obj.style.left=0+"px";
return
}var e=window.pageXOffset||document.body.scrollLeft;
var d=window.pageYOffset||document.body.scrollTop;
var a=this.dataController.getContainer();
var c={x:a.getBoundingClientRect().left,y:a.getBoundingClientRect().top};
var b=this.dataController.getElementPosition(a);
if(this.videoContainer.obj.style.top!=(c.y*-1)+"px"){this.videoContainer.obj.style.top=(c.y*-1)+"px"
}if(this.videoContainer.obj.style.left!=(c.x*-1)+"px"){this.videoContainer.obj.style.left=(c.x*-1)+"px"
}if(this.dataController.colorbox&&this.dataController.isIE9){var f=this.videoContainer.isFullScreen()?"visible":"visible";
if(this.dataController.colorbox.style.overflow!==f){this.dataController.colorbox.style.overflow=this.videoContainer.isFullScreen()?"visible":"visible"
}}};
com.videoViewer.ViewController.prototype.adjustComponents=function(a,b){if(this.androidTimeout&&!this.videoContainer.isFullScreen()){clearInterval(this.androidTimeout);
this.androidTimeout=null
}if((parseInt(this.video.obj.style.width)!=a)||(parseInt(this.video.obj.style.height)!=b)){this.video.resize(a,b);
this.videoScrubber.resize((this.videoTime.obj.offsetLeft-this.videoScrubber.obj.offsetLeft)-24,this.videoScrubber.obj.offsetHeight);
this.videoScrubberMinimized.resize(a,this.videoScrubberMinimized.obj.offsetHeight)
}};
com.videoViewer.ViewController.prototype.onClickFullScreen=function(){if(this.videoContainer.isFullScreen()){this.videoContainer.cancelFullScreen()
}else{this.videoContainer.requestFullScreen()
}};
com.videoViewer.ViewController.prototype.onNotifyScrubberEvent=function(d){if(this.disposed){return
}if(!this.video.getDuration()){return
}var c=this;
var a=d.s7event.position*this.video.getDuration();
if((s7sdk.browser.device.name=="desktop")&&(a==this.video.getDuration())){a=-1
}if(d.s7event.type==s7sdk.event.SliderEvent.NOTF_SLIDER_UP){var b=(a>-1)?a:this.video.getDuration();
this.dataController.trackEvent("Seek",this.dataController.asset,b);
if(!this.playEventSent&&(b>=this.video.getDuration()/2)){if(this.reviewPage&&this.doCallMBoxUpdate){this.doCallMBoxUpdate=false;
this.reviewPage.getRelatedVideosForVideo()
}}}if(a>-1){this.video.seek(a)
}else{this.video.seek(this.video.getDuration()-100);
if((d.s7event.type==s7sdk.event.SliderEvent.NOTF_SLIDER_UP)){if(this.checkStopTick){clearInterval(this.checkStopTick);
this.checkStopTick=null
}this.checkStopTick=setInterval(function(){c.checkStopBySeek()
},500)
}}};
com.videoViewer.ViewController.prototype.onPlayPauseButtonClick=function(a){var b=this.video.getCapabilityState();
if(this.btnPlay.isSelected()){this.video.pause()
}else{if(this.video.getCapabilityState().hasCapability(s7sdk.VideoCapabilityState.REPLAY)||(this.dataController.lasTrackedEvent=="Ended")){this.video.seek(0)
}this.video.play();
if(!b.hasCapability(s7sdk.VideoCapabilityState.PLAY)&&!b.hasCapability(s7sdk.VideoCapabilityState.PAUSE)&&!b.hasCapability(s7sdk.VideoCapabilityState.STOP)){this.playPending=true
}}};
com.videoViewer.ViewController.prototype.onNotifyVideoState=function(b){if(s7sdk.browser.name=="ie"&&s7sdk.browser.version.minor==8){var a=this;
if(b.s7event.state.hasCapability(s7sdk.VideoCapabilityState.PLAY)){if(!this.fixTransparencyTick){this.fixTransparencyTick=setInterval(function(){a.fixIconEffectTransparency()
},100)
}}else{if(this.fixTransparencyTick){clearInterval(this.fixTransparencyTick);
this.fixTransparencyTick=null
}}}if(this.skipCapabilityStateEvent){this.btnPlay.setSelected(b.s7event.state.hasCapability(s7sdk.VideoCapabilityState.PLAY)||b.s7event.state.hasCapability(s7sdk.VideoCapabilityState.REPLAY));
this.skipCapabilityStateEvent=false;
return
}if(this.video.obj.style.visibility=="hidden"){this.video.obj.style.visibility="visible"
}if(b.s7event.state.hasCapability(s7sdk.VideoCapabilityState.PAUSE)&&!isNaN(this.video.getCurrentTime())){this.dataController.trackEvent("Play",this.dataController.asset,this.video.getCurrentTime());
this.hidePosterImage();
if(!this.playEventSent){if(this.reviewPage&&this.doCallMBoxUpdate){this.doCallMBoxUpdate=false;
this.reviewPage.getRelatedVideosForVideo()
}}this.playPending=false;
this.playEventSent=true
}else{if(b.s7event.state.hasCapability(s7sdk.VideoCapabilityState.PLAY)&&!isNaN(this.video.getCurrentTime())&&this.playEventSent){var c=this.video.getDuration()-this.video.getCurrentTime();
if(c>200&&(!this.prevState||this.prevState.hasCapability(s7sdk.VideoCapabilityState.PAUSE))){this.dataController.trackEvent("Pause",this.dataController.asset,this.video.getCurrentTime())
}}else{if(b.s7event.state.hasCapability(s7sdk.VideoCapabilityState.PLAY)&&!this.playEventSent&&this.playPending){this.video.play()
}}}if((!b.s7event.state.hasCapability(s7sdk.VideoCapabilityState.PLAY)&&!b.s7event.state.hasCapability(s7sdk.VideoCapabilityState.PAUSE)&&!b.s7event.state.hasCapability(s7sdk.VideoCapabilityState.STOP))){this.dataController.trackEvent("Ended",this.dataController.asset,this.video.getCurrentTime());
this.lastTrackedTime=-1;
if(this.dataController.reviewList.length==0){this.video.seek(0);
this.showPosterImage()
}else{this.reviewPage.show()
}}else{this.reviewPage.hide()
}if(this.playEventSent){this.btnPlay.setSelected(b.s7event.state.hasCapability(s7sdk.VideoCapabilityState.PLAY)||b.s7event.state.hasCapability(s7sdk.VideoCapabilityState.REPLAY))
}else{if(!this.playPending){this.btnPlay.setSelected(true)
}}this.prevState=b.s7event.state
};
com.videoViewer.ViewController.prototype.onNotifyVideoTime=function(c){if(this.disposed){return
}if(this.video.getDuration()&&(this.playbackInfo.duration!=this.video.getDuration())){this.playbackInfo.duration=this.video.getDuration();
this.videoScrubber.setDuration(this.playbackInfo.duration);
this.videoScrubberMinimized.setDuration(this.playbackInfo.duration);
this.videoTime.setDuration(this.playbackInfo.duration)
}if(c.s7event.type==s7sdk.event.VideoEvent.NOTF_CURRENT_TIME){this.playbackInfo.playedTime=c.s7event.data;
var e=this.video.getCapabilityState();
if(e.hasCapability(s7sdk.VideoCapabilityState.PAUSE)&&((this.lastTrackedTime==-1)||((this.video.getCurrentTime()-this.lastTrackedTime)>=1000))){if(!this.playEventSent){this.dataController.trackEvent("Play",this.dataController.asset,this.video.getCurrentTime());
this.hidePosterImage();
if(!this.playEventSent){if(this.reviewPage&&this.doCallMBoxUpdate){this.doCallMBoxUpdate=false;
this.reviewPage.getRelatedVideosForVideo()
}}this.playPending=false;
this.playEventSent=true;
this.btnPlay.setSelected(this.video.getCapabilityState().hasCapability(s7sdk.VideoCapabilityState.PLAY)||this.video.getCapabilityState().hasCapability(s7sdk.VideoCapabilityState.REPLAY))
}this.dataController.trackEvent("Progress",this.dataController.asset,this.video.getCurrentTime());
this.lastTrackedTime=this.video.getCurrentTime()
}}else{if(c.s7event.type==s7sdk.event.VideoEvent.NOTF_LOAD_PROGRESS){this.playbackInfo.loadedTime=c.s7event.data
}}if(this.video.ended()){this.playbackInfo.playedTime=this.playbackInfo.duration;
this.playbackInfo.loadedTime=this.playbackInfo.duration
}var b=Math.min(this.playbackInfo.playedTime,this.playbackInfo.duration);
var a=this;
if(this.dataController.applyCheckStop){if((Math.abs(b-this.playbackInfo.duration)<200)&&(this.playbackInfo.duration>0)){if(s7sdk.browser.device.name=="ipad"){this.skipCapabilityStateEvent=true;
this.video.pause()
}if(this.checkStopTick){clearInterval(this.checkStopTick);
this.checkStopTick=null
}this.checkStopTick=setInterval(function(){a.checkStop()
},500)
}else{if(this.checkStopTick){clearInterval(this.checkStopTick);
this.checkStopTick=null
}if(this.reviewPage.isVisible()){this.reviewPage.hide()
}}}this.videoScrubber.setPlayedTime(b);
this.videoScrubberMinimized.setPlayedTime(b);
this.videoTime.setPlayedTime(b);
var d=Math.min(this.playbackInfo.loadedTime,this.playbackInfo.duration);
this.videoScrubber.setLoadedPosition(d);
this.videoScrubberMinimized.setLoadedPosition(d)
};
com.videoViewer.ViewController.prototype.checkStop=function(){if(this.checkStopTick){clearInterval(this.checkStopTick);
this.checkStopTick=null
}if(this.reviewPage.isVisible()){return
}else{var a=Math.min(this.playbackInfo.playedTime,this.playbackInfo.duration);
if((this.playbackInfo.duration>0)&&(Math.abs(a-this.playbackInfo.duration)<200)){this.skipCapabilityStateEvent=true;
this.video.pause();
this.dataController.trackEvent("Ended",this.dataController.asset,this.video.getCurrentTime());
if(this.dataController.reviewList.length==0){this.video.seek(0);
this.showPosterImage()
}else{this.reviewPage.show()
}}}};
com.videoViewer.ViewController.prototype.checkStopBySeek=function(){if(this.checkStopTick){clearInterval(this.checkStopTick);
this.checkStopTick=null
}if(this.reviewPage.isVisible()){return
}else{var a=Math.min(this.playbackInfo.playedTime,this.playbackInfo.duration);
this.skipCapabilityStateEvent=true;
this.video.pause();
this.dataController.trackEvent("Ended",this.dataController.asset,this.video.getCurrentTime());
if(this.dataController.reviewList&&(this.dataController.reviewList.length>0)){this.reviewPage.show()
}}};
com.videoViewer.ViewController.prototype.fixIconEffectTransparency=function(){var c=this.video.obj.childNodes;
var a=null;
for(var b=0;
b<c.length;
b++){if(c[b].className=="s7iconeffect"){a=c[b];
break
}}if(a&&a.filters&&(a.filters.length>0)&&(this.dataController.utils.getOpacity(a)>0.9)&&(a.style.filter!="none")){a.style.filter="none"
}};
com.videoViewer.ViewController.prototype.hidePosterImage=function(){if(this.posterImageHolder){this.posterImageHolder.style.visibility="hidden"
}};
com.videoViewer.ViewController.prototype.showPosterImage=function(){if(this.posterImageHolder){this.posterImageHolder.style.visibility="visible"
}};
com.videoViewer.VolumeController=function(){this.mutedVolume=null
};
com.videoViewer.VolumeController.prototype.dispose=function(){if(this.tick){clearInterval(this.tick);
this.tick=null
}};
com.videoViewer.VolumeController.prototype.setContainer=function(a){this.container=a
};
com.videoViewer.VolumeController.prototype.init=function(){this.holder=document.createElement("div");
this.holder.style.width="100%";
this.holder.style.height="100%";
this.holder.style.position="absolute";
this.container.appendChild(this.holder);
this.volumeTrackOnHolder=document.createElement("div");
this.volumeTrackOnHolder.className="volumeTrackOnHolder";
this.holder.appendChild(this.volumeTrackOnHolder);
this.volumeTrackOnHolderInitialRect={w:this.volumeTrackOnHolder.offsetWidth,h:this.volumeTrackOnHolder.offsetHeight};
this.volumeTrackOn=document.createElement("div");
this.volumeTrackOn.className="volumeTrackOn";
this.volumeTrackOnHolder.appendChild(this.volumeTrackOn);
this.volumeKnob=document.createElement("div");
this.volumeKnob.className="volumeKnob";
this.holder.appendChild(this.volumeKnob);
this.volumeValue=document.createElement("div");
this.volumeValue.className="volumeValue";
this.holder.appendChild(this.volumeValue);
this.volumeKnob.style.top=this.volumeTrackOnHolder.offsetTop+"px";
this.setListeners();
this.updateVolumeValue()
};
com.videoViewer.VolumeController.prototype.setListeners=function(){var a=this;
if(window.attachEvent){document.attachEvent("onmousemove",function(){a.onSliderMouseMoveHandler(window.event)
});
document.attachEvent("onmouseup",function(){a.onSliderMouseUp(window.event)
});
this.holder.attachEvent("onmousedown",function(){a.onSliderMouseDown()
})
}else{if(typeof(document.body.ontouchstart)!=="undefined"){document.addEventListener("touchmove",function(b){a.onSliderTouchMoveHandler(b)
},true);
document.addEventListener("touchend",function(b){a.onSliderMouseUp(b)
},true);
this.holder.addEventListener("touchstart",function(b){a.onSliderTouchStart(b)
},false)
}else{document.addEventListener("mousemove",function(b){a.onSliderMouseMoveHandler(b)
},false);
document.addEventListener("mouseup",function(b){a.onSliderMouseUp(b)
},false);
this.holder.addEventListener("mousedown",function(b){a.onSliderMouseDown(b)
},false)
}}};
com.videoViewer.VolumeController.prototype.onSliderTouchStart=function(a){a.preventDefault();
var b=a.touches[0];
this.onSliderDown=true;
this.sliderStartX=b.clientX
};
com.videoViewer.VolumeController.prototype.onSliderMouseDown=function(b){if(!b){evt=window.event
}else{evt=b
}if(evt.preventDefault){evt.preventDefault()
}this.onSliderDown=true;
this.sliderStartY=evt.clientY;
var a=this.volumeTrackOn.offsetHeight;
this.volumeTrackOnHolder.style.height=Math.min(Math.max(0,this.volumeTrackOnHolderInitialRect.h-(evt.clientY-this.volumeTrackOn.getBoundingClientRect().top)),a)+"px";
this.volumeTrackOn.style.top="-"+(this.volumeTrackOnHolderInitialRect.h-parseInt(this.volumeTrackOnHolder.style.height))+"px";
this.volumeKnob.style.top=this.volumeTrackOnHolder.offsetTop+"px";
this.notifySliderPositionChanged()
};
com.videoViewer.VolumeController.prototype.onSliderMouseUp=function(a){if(this.onSliderDown){this.onSliderDown=false;
this.notifySliderPositionChanged()
}};
com.videoViewer.VolumeController.prototype.onSliderTouchMoveHandler=function(b){if(this.onSliderDown){b.preventDefault();
var c=b.touches[0];
var a=this.volumeTrackOn.offsetHeight;
this.volumeTrackOnHolder.style.height=Math.min(Math.max(0,this.volumeTrackOnHolderInitialRect.h-(evt.clientY-this.volumeTrackOn.getBoundingClientRect().top)),a)+"px";
this.volumeTrackOn.style.top="-"+(this.volumeTrackOnHolderInitialRect.h-parseInt(this.volumeTrackOnHolder.style.height))+"px";
this.volumeKnob.style.top=this.volumeTrackOnHolder.offsetTop+"px";
this.sliderStartY=c.clientY;
this.notifySliderPositionChanged()
}};
com.videoViewer.VolumeController.prototype.onSliderMouseMoveHandler=function(b){if(this.onSliderDown){if(!b){evt=window.event
}else{evt=b
}var a=this.volumeTrackOn.offsetHeight;
this.volumeTrackOnHolder.style.height=Math.min(Math.max(0,this.volumeTrackOnHolderInitialRect.h-(evt.clientY-this.volumeTrackOn.getBoundingClientRect().top)),a)+"px";
this.volumeTrackOn.style.top="-"+(this.volumeTrackOnHolderInitialRect.h-parseInt(this.volumeTrackOnHolder.style.height))+"px";
this.volumeKnob.style.top=this.volumeTrackOnHolder.offsetTop+"px";
this.sliderStartY=b.clientY;
this.notifySliderPositionChanged()
}};
com.videoViewer.VolumeController.prototype.notifySliderPositionChanged=function(){this.updateVolumeValue();
this.onSliderPositionChanged(this.getSliderPos())
};
com.videoViewer.VolumeController.prototype.getSliderPos=function(){return this.volumeTrackOnHolder.offsetHeight/this.volumeTrackOnHolderInitialRect.h
};
com.videoViewer.VolumeController.prototype.setSliderPos=function(a){this.volumeTrackOnHolder.style.height=this.volumeTrackOnHolderInitialRect.h*a+"px";
this.volumeTrackOn.style.top="0px";
this.volumeKnob.style.top=this.volumeTrackOnHolder.offsetTop+"px";
this.notifySliderPositionChanged()
};
com.videoViewer.VolumeController.prototype.setMuted=function(a){if(a){this.mutedVolume=this.getSliderPos();
this.setSliderPos(0)
}else{this.setSliderPos(this.mutedVolume)
}};
com.videoViewer.VolumeController.prototype.updateVolumeValue=function(){this.volumeValue.innerHTML=Math.round(this.getSliderPos()*5)
};
com.videoViewer.VolumeController.prototype.getElementPosition=function(a){var c={x:0,y:0};
var b=a;
while(b.offsetParent!==null){c.x+=b.offsetLeft;
c.y+=b.offsetTop;
if(b!==a){c.x+=b.clientLeft;
c.y+=b.clientTop
}b=b.offsetParent
}return c
};
com.videoViewer.Transition=function(c,b,a){this.startValue=c;
this.endValue=b;
this.transitionTime=a;
this.tick=null;
this.startTime=null;
this.currentValue=this.startValue
};
com.videoViewer.Transition.prototype.setStartValue=function(a){this.startValue=a
};
com.videoViewer.Transition.prototype.setEndValue=function(a){this.endValue=a
};
com.videoViewer.Transition.prototype.setTransitionTime=function(a){this.transitionTime=a
};
com.videoViewer.Transition.prototype.start=function(){var a=this;
this.doStop();
this.delta=this.endValue-this.startValue;
this.startTime=(new Date()).getTime();
this.tick=setInterval(function(){a.doTransition()
},10)
};
com.videoViewer.Transition.prototype.isRunning=function(){return(this.tick?true:false)
};
com.videoViewer.Transition.prototype.stop=function(){this.doStop()
};
com.videoViewer.Transition.prototype.doStop=function(){if(this.tick){clearInterval(this.tick);
this.tick=null
}};
com.videoViewer.Transition.prototype.doTransition=function(){var a=(new Date()).getTime();
var b=(a-this.startTime)/this.transitionTime;
if(b>=1){this.doStop();
b=1
}this.onTransition(this.startValue+this.delta*b)
};
com.videoViewer.Transition.prototype.onTransition=function(a){};
com.videoViewer.VideoHeaderController=function(a){this.dataController=a;
this.slideTick=null;
this.prevOpacity=null;
this.maxIterations=10;
this.iterationsCount=0
};
com.videoViewer.VideoHeaderController.prototype.dispose=function(){if(this.slideTick){clearInterval(this.slideTick);
this.slideTick=null
}};
com.videoViewer.VideoHeaderController.prototype.setContainer=function(a){this.container=a
};
com.videoViewer.VideoHeaderController.prototype.setTargetComponent=function(a){this.targetComponent=a
};
com.videoViewer.VideoHeaderController.prototype.init=function(){var a=this;
this.videoTitleContainer=document.createElement("div");
this.videoTitleContainer.className="videoTitleContainer";
this.videoTitleContainer.style.webkitTransform="translate3d(0,0,0)";
this.container.appendChild(this.videoTitleContainer);
this.videoTitleSlideHolder=document.createElement("div");
this.videoTitleSlideHolder.className="videoTitleSlideHolder";
this.videoTitleSlideHolder.style.webkitTransform="translate3d(0,0,0)";
this.videoTitleContainer.appendChild(this.videoTitleSlideHolder);
if(!this.dataController.videoTitle){this.videoTitleSlideHolder.style.top="-"+this.videoTitleSlideHolder.offsetHeight+"px"
}this.videoTitleSlideBg=document.createElement("div");
this.videoTitleSlideBg.className="videoTitleSlideBg";
this.videoTitleSlideHolder.appendChild(this.videoTitleSlideBg);
this.iconHolder=document.createElement("div");
this.iconHolder.className="videoTitleIcon";
this.videoTitleSlideHolder.appendChild(this.iconHolder);
this.labelHolder=document.createElement("span");
this.labelHolder.className="videoTitleLabel";
this.videoTitleSlideHolder.appendChild(this.labelHolder);
this.updateVideoTitleText();
this.setMouseEvent();
if(!this.slideTick){this.iterationsCount=0;
this.slideTick=setInterval(function(){a.checkTragetComponent()
},100)
}};
com.videoViewer.VideoHeaderController.prototype.updateVideoTitleText=function(){this.labelHolder.style.width=(this.videoTitleSlideHolder.offsetWidth-this.labelHolder.offsetLeft)+"px";
this.labelHolder.innerHTML=this.dataController.videoTitle
};
com.videoViewer.VideoHeaderController.prototype.setMouseEvent=function(){var a=this;
if(typeof(window.ontouchmove)!=="undefined"){this.container.addEventListener("touchmove",function(b){a.onMoveHandler(b)
},false);
this.container.addEventListener("touchstart",function(b){a.onMoveHandler(b)
},false);
this.container.addEventListener("touchend",function(b){a.onMoveHandler(b)
},false)
}else{if(typeof(window.addEventListener)!=="undefined"){this.container.addEventListener("mousemove",function(b){a.onMoveHandler(b)
},false);
this.container.addEventListener("mouseup",function(b){a.onMoveHandler(b)
},false)
}else{this.container.attachEvent("onmousemove",function(){a.onMoveHandler(window.event)
});
this.container.attachEvent("onmouseup",function(){a.onMoveHandler(window.event)
})
}}};
com.videoViewer.VideoHeaderController.prototype.onMoveHandler=function(b){var a=this;
if(!this.slideTick){this.iterationsCount=0;
this.slideTick=setInterval(function(){a.checkTragetComponent()
},10)
}};
com.videoViewer.VideoHeaderController.prototype.checkTragetComponent=function(){var b=this.dataController.utils.getOpacity(this.targetComponent);
var c=this;
if(this.targetComponent.style.visibility==="hidden"){this.updatePosition(0);
if(this.slideTick){clearInterval(this.slideTick);
this.slideTick=null;
this.onVideoHeaderHide()
}return
}else{if((this.targetComponent.style.visibility==="visible")||(this.targetComponent.style.visibility==="inherit")){this.updatePosition(1);
return
}}if(b==0){this.iterationsCount++;
if(this.iterationsCount>=10){if(this.slideTick){clearInterval(this.slideTick);
this.slideTick=null;
this.onVideoHeaderHide()
}}}this.updatePosition(b)
};
com.videoViewer.VideoHeaderController.prototype.updatePosition=function(b){this.onHeaderPositionChange(b);
if(!this.dataController.videoTitle){this.videoTitleSlideHolder.style.top="-"+this.videoTitleSlideHolder.offsetHeight+"px";
return
}var a="-"+this.videoTitleSlideHolder.offsetHeight*(1-b)+"px";
if(this.videoTitleSlideHolder.style.top!=a){this.videoTitleSlideHolder.style.top=a
}};
com.videoViewer.ReviewPageController=function(a){this.dataController=a;
this.reviewCellGrid=null;
this.completedRequestCount=0;
this.cellList=[]
};
com.videoViewer.ReviewPageController.prototype.setContainer=function(a){this.container=a
};
com.videoViewer.ReviewPageController.prototype.isVisible=function(){return(this.holder.style.display==="block")
};
com.videoViewer.ReviewPageController.prototype.init=function(){var a=this;
this.cellList=[];
this.dataController.onReviewListUpdated=function(){a.getRelatedVideo()
};
this.holder=document.createElement("div");
this.holder.className="reviewPageHolder";
this.container.appendChild(this.holder);
this.overlay=document.createElement("div");
this.overlay.className="reviewPageOverlay";
this.holder.appendChild(this.overlay);
this.contentContainer=document.createElement("div");
this.contentContainer.className="contentContainer";
this.holder.appendChild(this.contentContainer);
this.createLayout();
this.hide()
};
com.videoViewer.ReviewPageController.prototype.onAssetChanged=function(){this.getRelatedVideosForVideo()
};
com.videoViewer.ReviewPageController.prototype.getHolder=function(){return this.holder
};
com.videoViewer.ReviewPageController.prototype.show=function(){this.holder.style.display="block";
if(this.reviewCellGrid==null){this.createCellGrid()
}if(typeof(this.onReviewPageDisplayChange)==="function"){this.onReviewPageDisplayChange()
}};
com.videoViewer.ReviewPageController.prototype.hide=function(){if(this.reviewCellGrid!=null){this.destroyCellGrid()
}this.holder.style.display="none";
if(typeof(this.onReviewPageDisplayChange)==="function"){this.onReviewPageDisplayChange()
}};
com.videoViewer.ReviewPageController.prototype.createLayout=function(){this.headerLabel=document.createElement("span");
this.headerLabel.className="reviewPageheaderlabel";
this.contentContainer.appendChild(this.headerLabel);
this.headerLabel.innerHTML=this.dataController.recommendationLabel
};
com.videoViewer.ReviewPageController.prototype.createCellGrid=function(){this.reviewCellGrid=document.createElement("div");
this.reviewCellGrid.className="reviewCellGrid three";
this.contentContainer.appendChild(this.reviewCellGrid);
var c=0;
for(var b=0;
b<this.dataController.review.length;
b++){for(var a=0;
a<this.dataController.reviewList.length;
a++){if(this.dataController.reviewList[a].reviewIndex==b){this.createCell(a);
c++
}}}for(var b=c;
b<3;
b++){this.createBlankCell()
}for(var b=0;
b<this.reviewCellGrid.childNodes.length;
b++){if(b==0){for(var a=0;
a<this.cellList.length;
a++){if(this.cellList[a].holder==this.reviewCellGrid.childNodes[b]){this.dataController.utils.addClass(this.reviewCellGrid.childNodes[b],"firstCell");
this.cellList[a].setFirstChild(true);
break
}}break
}}};
com.videoViewer.ReviewPageController.prototype.destroyCellGrid=function(){this.contentContainer.removeChild(this.reviewCellGrid);
delete this.reviewCellGrid
};
com.videoViewer.ReviewPageController.prototype.createCell=function(c){var a=new com.videoViewer.ReviewCell(this.dataController);
a.setContainer(this.reviewCellGrid);
a.setIndex(c);
var b=this;
a.onCellClicked=function(d){b.onReviewIdxHandler(d)
};
a.init();
this.cellList.push(a)
};
com.videoViewer.ReviewPageController.prototype.createBlankCell=function(){var a=new com.videoViewer.ReviewBlankCell();
a.setContainer(this.reviewCellGrid);
a.init()
};
com.videoViewer.ReviewPageController.prototype.getRelatedVideosForVideo=function(){this.dataController.reviewList=[];
if(typeof(mboxUpdate)==="function"){mboxUpdate(this.dataController.mboxContId,"entity.id="+this.dataController.cqPath,"entity.locale="+this.dataController.locale,"entity.categoryId=video","entity.ageRating="+this.dataController.ageRating)
}};
com.videoViewer.ReviewPageController.prototype.getRelatedVideo=function(){var b=this;
this.dataController.reviewList=[];
if(!this.dataController.review){return
}for(var a=0;
a<Math.min(this.dataController.review.length,3);
a++){this.doGetRelatedVideo(this.dataController.review[a]["path"])
}};
com.videoViewer.ReviewPageController.prototype.checkAllReqsComplete=function(){this.completedRequestCount++;
if(this.completedRequestCount==Math.min(this.dataController.review.length,3)){if(this.dataController.testServerUrl&&this.dataController.testVideoServerUrl&&this.dataController.prodServerUrl&&this.dataController.prodVideoServerUrl){this.getIsAssetPublished()
}}};
com.videoViewer.ReviewPageController.prototype.getIsAssetPublished=function(){if(this.dataController.reviewList.length==0){return
}var f="";
for(var b=0;
b<this.dataController.reviewList.length;
b++){var c=this.dataController.reviewList[b]["assetId"];
if(f==""){f+=c
}else{f+=","+c
}}function e(g){if(d.dataController.reviewList.length==1){if(g.set.type=="unknown"&&g.set.item.i&&g.set.item.i.isDefault&&(g.set.item.i.isDefault==1)){d.dataController.reviewList[0].published="false"
}else{if((g.set.type!="unknown")&&(g.set.n==d.dataController.reviewList[0]["assetId"])){d.dataController.reviewList[0].published="true"
}}}else{var k=g.set["item"];
for(var h=0;
h<k.length;
h++){if(k[h].set&&(k[h].set.n==d.dataController.reviewList[h]["assetId"])){d.dataController.reviewList[h].published="true"
}else{if(k[h].i&&k[h].i.isDefault&&(k[h].i.isDefault==1)){d.dataController.reviewList[h].published="false"
}}}}}var a=this.dataController.serverUrl+"/psmediadev?req=set,json&imageSet="+f+"&defaultImage=Scene7SharedAssets/Backpack_B&handler=utilsJSONResponse";
var d=this;
sjGetResponse("",a,function(g){e(g)
},function(g){})
};
com.videoViewer.ReviewPageController.prototype.doGetRelatedVideo=function(a){var c=this;
var b=this.dataController.cqBasePath+a+"/jcr:content/metadata.json";
function d(k){if(!k||!k["dam:scene7Type"]||(k["dam:scene7Type"]!="MbrSet")){return
}var o=c.dataController.defaultGenre?c.dataController.defaultGenre:"";
if(k["cq:tags"]){var m=k["cq:tags"];
for(var h=0;
h<m.length;
h++){if(m[h].indexOf("asset_type")!=-1){o=m[h].split(":")[1];
break
}}}var e=k["dam:scene7VideoLength"];
var l=-1;
for(var h=0;
h<c.dataController.review.length;
h++){if(a===c.dataController.review[h]["path"]){l=h;
break
}}var p=o?o:"video/default";
if(typeof(c.dataController.translationService)=="function"){p=c.dataController.translationService(o);
if(p==o){p=c.dataController.translationService("video/default")
}}obj={assetId:k["dam:scene7File"],poster:k["dam:scene7File"],type:p,description:k["dc:title"]?k["dc:title"]:"",videoTitle:k["dc:title"]?k["dc:title"]:"",duration:e,reviewIndex:l};
if(c.dataController.locale&&k.locale_title){var f=k.locale_title;
for(var n in f){if(n.indexOf(c.dataController.locale)!=-1){obj.videoTitle=f[n];
obj.description=f[n];
doBreak=true;
break
}}}c.dataController.reviewList.push(obj)
}$.ajax({url:b,dataType:"json",success:function(e){d(e);
c.checkAllReqsComplete()
},error:function(e,g,f){c.checkAllReqsComplete()
}})
};
com.videoViewer.ReviewCell=function(a){this.dataController=a;
this.isFirstChild=false
};
com.videoViewer.ReviewCell.prototype.setContainer=function(a){this.container=a
};
com.videoViewer.ReviewCell.prototype.setIndex=function(a){this.index=a;
this.reviewConfig=this.dataController.reviewList[this.index]
};
com.videoViewer.ReviewCell.prototype.setFirstChild=function(a){this.isFirstChild=a
};
com.videoViewer.ReviewCell.prototype.init=function(){this.serverUrl=!this.reviewConfig.published?this.dataController.serverUrl:(this.reviewConfig.published=="true")?this.dataController.prodServerUrl:this.dataController.testServerUrl;
this.createLayout();
this.setContent()
};
com.videoViewer.ReviewCell.prototype.createLayout=function(){this.holder=document.createElement("div");
this.holder.className="reviewCell up"+(this.isFirstChild?" firstCell":"");
this.container.appendChild(this.holder);
var a=this;
if(typeof(window.ontouchstart)!=="undefined"){this.holder.addEventListener("touchstart",function(){a.onmouseOver()
},false);
this.holder.addEventListener("touchend",function(){a.onmouseOut();
a.onClickHandler()
},false)
}else{if(typeof(window.addEventListener)!=="undefined"){this.holder.addEventListener("mouseover",function(){a.onmouseOver()
},false);
this.holder.addEventListener("mouseout",function(){a.onmouseOut()
},false);
this.holder.addEventListener("click",function(){a.onClickHandler()
},false)
}else{if(typeof(window.attachEvent)!=="undefined"){this.holder.attachEvent("onmouseover",function(){a.onmouseOver()
});
this.holder.attachEvent("onmouseout",function(){a.onmouseOut()
});
this.holder.attachEvent("onclick",function(){a.onClickHandler()
})
}}}this.imageHolder=document.createElement("div");
this.imageHolder.className="reviewCellImage";
this.holder.appendChild(this.imageHolder);
this.overlayIcon=document.createElement("div");
this.overlayIcon.className="reviewCellOverlayIcon";
this.imageHolder.appendChild(this.overlayIcon);
this.infoContainer=document.createElement("div");
this.infoContainer.className="reviewCellInfoContainer";
this.holder.appendChild(this.infoContainer);
this.infoContainerBg=document.createElement("div");
this.infoContainerBg.className="reviewCellInfoContainerBg";
this.infoContainer.appendChild(this.infoContainerBg);
this.lblType=document.createElement("div");
this.lblType.className="reviewCellType";
this.infoContainer.appendChild(this.lblType);
this.lblDescription=document.createElement("div");
this.lblDescription.className="reviewCellDescription";
this.infoContainer.appendChild(this.lblDescription);
this.lblDuration=document.createElement("div");
this.lblDuration.className="reviewCellDuration";
this.infoContainer.appendChild(this.lblDuration)
};
com.videoViewer.ReviewCell.prototype.onmouseOver=function(){this.holder.className="reviewCell over"+(this.isFirstChild?" firstCell":"")
};
com.videoViewer.ReviewCell.prototype.onmouseOut=function(){this.holder.className="reviewCell up"+(this.isFirstChild?" firstCell":"")
};
com.videoViewer.ReviewCell.prototype.onClickHandler=function(){this.onCellClicked(this.index)
};
com.videoViewer.ReviewCell.prototype.setContent=function(){var a=this.serverUrl+"/"+encodeURI(this.reviewConfig.poster?this.reviewConfig.poster:this.reviewConfig.assetId)+"?fit=crop,1&wid="+this.imageHolder.offsetWidth+"&hei="+this.imageHolder.offsetHeight;
a=a.replace("(","%28");
a=a.replace(")","%29");
this.imageHolder.style.background="url("+a+") no-repeat center";
this.lblType.innerHTML=this.reviewConfig.type;
this.lblDescription.innerHTML=this.truncateDescription(this.reviewConfig.description);
this.lblDuration.innerHTML=this.dataController.utils.parseVideoTime(this.reviewConfig.duration)
};
com.videoViewer.ReviewCell.prototype.truncateDescription=function(b){var a=document.createElement("div");
a.className="reviewCellDescription";
this.infoContainer.appendChild(a);
var d=document.createElement("span");
a.appendChild(d);
d.style.width="100%";
var c=0;
var e="";
while((d.offsetHeight<a.offsetHeight)&&(c<=b.length)){e=b.substring(0,c);
d.innerHTML=e;
c++
}if((d.offsetHeight>=a.offsetHeight)){e=e.substring(0,e.length-4)+"..."
}this.infoContainer.removeChild(a);
return e
};
com.videoViewer.ReviewCell.prototype.getVideoDuration=function(){var a=this.serverUrl+"/"+this.reviewConfig.assetId+"?req=set,json,utf-8&handler=utilsJSONResponse";
var b=this;
sjGetResponse("",a,function(c){b.processResponse(c)
},function(c){})
};
com.videoViewer.ReviewCell.prototype.processResponse=function(c){var a=c.set;
a=a.item.length?a.item[0]:a.item;
a=a.userdata.length?a.userdata[0]:a.userdata;
var b=null;
if(a.Video_Length){b=a.Video_Length
}this.lblDuration.innerHTML=this.dataController.utils.parseVideoTime(b)
};
com.videoViewer.ReviewBlankCell=function(){};
com.videoViewer.ReviewBlankCell.prototype.setContainer=function(a){this.container=a
};
com.videoViewer.ReviewBlankCell.prototype.init=function(){this.createLayout()
};
com.videoViewer.ReviewBlankCell.prototype.createLayout=function(){this.holder=document.createElement("div");
this.holder.className="reviewBlankCell";
this.container.appendChild(this.holder)
};
com.videoViewer.S7ViewerWrapper=function(b){this.dataController=new com.videoViewer.DataController(b);
com.videoViewer.S7ViewerWrapper.COUNTER++;
this.dataController.instanceCount=com.videoViewer.S7ViewerWrapper.COUNTER;
com.videoViewer.S7ViewerWrapper.INSTANCES[com.videoViewer.S7ViewerWrapper.COUNTER]=this;
var a=this;
if(window.addEventListener){window.addEventListener("resize",function(c){a.notifyOnWindowResize()
},false)
}else{if(window.attachEvent){window.attachEvent("onresize",function(){a.notifyOnWindowResize()
})
}}this.resizeTimeout=null;
this.onResizeTick=null;
this.overflowTick=null
};
com.videoViewer.S7ViewerWrapper.COUNTER=0;
com.videoViewer.S7ViewerWrapper.INSTANCES=new Object();
com.videoViewer.S7ViewerWrapper.prototype.dispose=function(){delete this.viewController.onUIFadeAnimation;
delete this.viewController
};
com.videoViewer.S7ViewerWrapper.prototype.isReviewPageDisplayed=function(){return this.viewController.reviewPage.isVisible()
};
com.videoViewer.S7ViewerWrapper.prototype.setRelatedVideos=function(a){this.dataController.review=a;
this.dataController.onReviewListUpdated()
};
com.videoViewer.S7ViewerWrapper.prototype.onResize=function(){if(this.viewController){this.viewController.resizeViewer()
}if(this.dataController&&this.dataController.isChrome){if(this.resizeTimeout){clearTimeout(this.resizeTimeout);
this.resizeTimeout=null
}var a=this;
this.resizeTimeout=setTimeout(function(){if((parseInt(a.dataController.cboxLoadedContent.style.height)!=parseInt(a.dataController.cboxContent.style.height))||(parseInt(a.dataController.cboxLoadedContent.style.width)!=parseInt(a.dataController.cboxContent.style.width))){a.onWindowResize();
setTimeout(function(){a.onResize()
},500)
}},750)
}};
com.videoViewer.S7ViewerWrapper.prototype.notifyOnWindowResize=function(){if(this.dataController.cboxContent){this.dataController.cboxContent.style.overflow="hidden";
this.dataController.cboxCloseButton.style.visibility="hidden"
}if(typeof(this.onWindowResize)==="function"){this.onWindowResize()
}var a=this;
this.onResize();
if(this.onResizeTick){clearTimeout(this.onResizeTick)
}this.onResizeTick=setTimeout(function(){a.onResize()
},750);
if(this.overflowTick){clearTimeout(this.overflowTick);
this.overflowTick=null
}this.overflowTick=setTimeout(function(){if(a.dataController.cboxContent){a.btnClosePositionStartTime=(new Date()).getTime();
if(a.btnClosePositionTick){clearInterval(a.btnClosePositionTick);
a.btnClosePositionTick=null
}a.btnClosePositionTick=setInterval(function(){a.positionCloseButton()
},100);
a.dataController.cboxContent.style.overflow="visible";
a.dataController.cboxCloseButton.style.visibility="visible";
a.dataController.cboxCloseButton.style.top=(a.dataController.colorbox.offsetTop)+"px";
a.dataController.cboxCloseButton.style.left=(a.dataController.colorbox.offsetLeft+a.dataController.colorbox.offsetWidth-a.dataController.cboxCloseButton.offsetWidth)+"px"
}},950)
};
com.videoViewer.S7ViewerWrapper.prototype.positionCloseButton=function(){if(((new Date()).getTime()-this.btnClosePositionStartTime)>10000){clearInterval(this.btnClosePositionTick);
this.btnClosePositionTick=null
}var a=this;
a.dataController.cboxCloseButton.style.top=(a.dataController.colorbox.offsetTop)+"px";
a.dataController.cboxCloseButton.style.left=(a.dataController.colorbox.offsetLeft+a.dataController.colorbox.offsetWidth-a.dataController.cboxCloseButton.offsetWidth)+"px"
};
com.videoViewer.S7ViewerWrapper.prototype.onViewerClosed=function(){if($("html").hasClass("isFullScreenMode")){$("html").removeClass("isFullScreenMode")
}if($("html").hasClass("isEmbeddedMode")){$("html").removeClass("isEmbeddedMode")
}this.dataController.cboxContent.appendChild(this.dataController.cboxCloseButton);
this.dataController.cboxCloseButton.style.top="";
this.dataController.cboxCloseButton.style.left="";
com.videoViewer.DataController.cboxCloseButton=null;
this.viewController.dispose()
};
com.videoViewer.S7ViewerWrapper.prototype.draw=function(){var a=this;
this.dataController.onDataControllerInitComplete=function(){a.init()
};
this.dataController.init()
};
com.videoViewer.S7ViewerWrapper.prototype.init=function(){var a=this;
this.dataController.trackEvent("Ready");
this.viewController=new com.videoViewer.ViewController(this.dataController);
this.viewController.onUIFadeAnimation=function(b){if(typeof(a.onUIFadeAnimation)==="function"){a.onUIFadeAnimation(!a.viewController.reviewPage.isVisible()?b:0)
}};
this.viewController.notifyReviewPageDisplayChange=function(){if(typeof(a.onUIFadeAnimation)==="function"){a.onUIFadeAnimation(!a.viewController.reviewPage.isVisible()?1:0)
}};
this.viewController.init()
};
com.videoViewer.S7NativeVideoWrapper=function(f){this.isAppleMobile=((navigator.platform.indexOf("iPhone")!=-1)||(navigator.userAgent.indexOf("iPhone")!=-1)||(navigator.userAgent.indexOf("iPod")!=-1)||(navigator.userAgent.indexOf("iPad")!=-1));
this.parentContainer=f.container;
this.videoObjRef=null;
this.eventsTimeout=null;
var g=$("#"+this.parentContainer.id).attr("data-link").split("/is/content/");
if(g.length!=2){return
}this.server=g[0];
this.asset=g[1];
if(this.isAppleMobile){this.asset=$("#"+this.parentContainer.id).attr("data-avs")
}this.vidServerUrl=this.server+"/is/content/";
this.serverUrl=this.server+"/is/image/";
this.poster=f.poster?f.poster:null;
this.videoTitle=$("#"+this.parentContainer.id).attr("data-title")?$("#"+this.parentContainer.id).attr("data-title"):null;
this.slideTick=null;
this.slideTickTimeout=null;
this.headerHideTime=500;
this.headerHideDelay=2000;
this.utils=new com.videoViewer.ViewerUtils();
this.isHeaderHidden=false;
var e=this;
if(window.addEventListener){window.addEventListener("resize",function(k){e.notifyOnWindowResize()
},false)
}else{if(window.attachEvent){window.attachEvent("onresize",function(){e.notifyOnWindowResize()
})
}}var b=this.parentContainer;
while(b.parentNode){b=b.parentNode;
if(b.id&&(b.id=="cboxLoadedContent")){this.cboxLoadedContent=b
}else{if(b.id&&(b.id=="colorbox")){this.colorbox=b
}else{if(b.id&&(b.id=="cboxContent")){this.cboxContent=b
}}}}if(!this.cboxCloseButton){var h=this.cboxContent.childNodes;
for(var c=0;
c<h.length;
c++){if(this.cboxContent.childNodes[c].id&&(this.cboxContent.childNodes[c].id=="cboxClose")){var a=this.cboxContent.childNodes[c];
var d=a.parentNode;
d.removeChild(a);
document.body.appendChild(a);
a.style.top=(this.colorbox.offsetTop)+"px";
a.style.left=(this.colorbox.offsetLeft+this.colorbox.offsetWidth-a.offsetWidth)+"px";
a.style.zIndex="9999";
this.cboxCloseButton=a;
com.videoViewer.S7NativeVideoWrapper.cboxCloseButton=this.cboxCloseButton;
break
}}}if(!this.cboxCloseButton&&com.videoViewer.S7NativeVideoWrapper.cboxCloseButton){this.cboxCloseButton=com.videoViewer.S7NativeVideoWrapper.cboxCloseButton
}};
com.videoViewer.S7NativeVideoWrapper.prototype.onViewerClosed=function(){if(this.cboxContent&&this.cboxCloseButton){this.cboxContent.appendChild(this.cboxCloseButton);
com.videoViewer.S7NativeVideoWrapper.cboxCloseButton=null
}if(this.videoObjRef){if(this.videoObjRef.video){document.body.removeChild(this.videoObjRef.video);
this.videoObjRef.video=null
}if(this.container){this.parentContainer.removeChild(this.container);
this.container=null
}}if(this.eventsTimeout){clearTimeout(this.eventsTimeout);
this.eventsTimeout=null
}};
com.videoViewer.S7NativeVideoWrapper.prototype.notifyOnWindowResize=function(){if(this.cboxCloseButton){this.cboxCloseButton.style.visibility="hidden"
}if(typeof(this.onWindowResize)==="function"){this.onWindowResize()
}var a=this;
this.onResize();
if(this.onResizeTick){clearTimeout(this.onResizeTick)
}this.onResizeTick=setTimeout(function(){a.onResize()
},750);
if(this.overflowTick){clearTimeout(this.overflowTick);
this.overflowTick=null
}this.overflowTick=setTimeout(function(){if(a.cboxContent){a.btnClosePositionStartTime=(new Date()).getTime();
if(a.btnClosePositionTick){clearInterval(a.btnClosePositionTick);
a.btnClosePositionTick=null
}a.btnClosePositionTick=setInterval(function(){a.positionCloseButton()
},100);
a.cboxCloseButton.style.visibility="visible";
a.cboxCloseButton.style.top=(a.colorbox.offsetTop)+"px";
a.cboxCloseButton.style.left=(a.colorbox.offsetLeft+a.colorbox.offsetWidth-a.cboxCloseButton.offsetWidth)+"px"
}},950)
};
com.videoViewer.S7NativeVideoWrapper.prototype.draw=function(){this.createLayout();
this.init();
this.createVideoHeader()
};
com.videoViewer.S7NativeVideoWrapper.prototype.positionCloseButton=function(){if(((new Date()).getTime()-this.btnClosePositionStartTime)>10000){clearInterval(this.btnClosePositionTick);
this.btnClosePositionTick=null
}var a=this;
a.cboxCloseButton.style.top=(a.colorbox.offsetTop)+"px";
a.cboxCloseButton.style.left=(a.colorbox.offsetLeft+a.colorbox.offsetWidth-a.cboxCloseButton.offsetWidth)+"px"
};
com.videoViewer.S7NativeVideoWrapper.prototype.onResize=function(){this.posterContainer.src=this.serverUrl+(this.poster?this.poster:this.asset)+"?wid="+this.container.offsetWidth+"&hei="+this.container.offsetHeight+"&bgc=0x000000"
};
com.videoViewer.S7NativeVideoWrapper.prototype.createLayout=function(){this.container=document.createElement("div");
this.container.className="s7NativeVideoContainer";
this.parentContainer.appendChild(this.container);
this.posterContainer=document.createElement("img");
this.posterContainer.className="s7PosterContainer";
this.container.appendChild(this.posterContainer);
this.iconEffect=document.createElement("div");
this.iconEffect.className="s7NativeVideoIconEffect";
if(this.isAppleMobile){this.iconEffect.style.display="none"
}this.container.appendChild(this.iconEffect)
};
com.videoViewer.S7NativeVideoWrapper.prototype.init=function(){var a="/is/content";
var e=$("#"+this.parentContainer.id).attr("data-link");
this.posterContainer.src=this.serverUrl+(this.poster?this.poster:this.asset)+"?wid="+this.container.offsetWidth+"&hei="+this.container.offsetHeight+"&bgc=0x000000";
var d=this;
if(this.isAppleMobile&&e.indexOf(a)>0){var c=e.substring(0,e.indexOf(a)+a.length)+"/";
e=c+$("#"+this.parentContainer.id).attr("data-avs").replace("-AVS","-AVS.m3u8")
}var b={};
this.videoObjRef=b;
b.createVideo=function(){b.video=document.createElement("video");
b.video.className="fsVideoPlayer";
b.video.style.position="absolute";
b.video.style.top="0px";
b.video.style.left="0px";
b.video.style.width="10px";
b.video.style.height="10px";
document.body.appendChild(b.video);
b.video.controls=true;
b.video.src=e;
b.video.addEventListener("loadedmetadata",function(g){if(d.isAppleMobile){b.video.webkitEnterFullscreen()
}});
b.video.addEventListener("canplay",function(g){if(d.isAppleMobile){b.video.webkitEnterFullscreen()
}});
b.video.addEventListener("webkitendfullscreen",function(){b.removeVideoElement()
},false);
b.video.addEventListener("webkitfullscreenchange",function(){b.removeVideoElement()
},false)
};
b.createVideo();
b.openVideo=function(g){b.video.play();
if(b.video.webkitSupportsFullscreen){b.video.webkitEnterFullscreen()
}};
b.removeVideoElement=function(){if((typeof(b.video.webkitDisplayingFullscreen)!=="undefined")&&!b.video.webkitDisplayingFullscreen){document.body.removeChild(b.video);
b.video=null;
d.videoObjRef=null;
d.cboxContent.appendChild(d.cboxCloseButton);
d.cboxCloseButton.style.top="";
d.cboxCloseButton.style.left="";
com.videoViewer.S7NativeVideoWrapper.cboxCloseButton=null;
if(this.container){this.parentContainer.removeChild(this.container);
this.container=null
}if(typeof d.onExitFullscreen==="function"){d.onExitFullscreen()
}if(this.eventsTimeout){clearTimeout(this.eventsTimeout);
this.eventsTimeout=null
}}};
function f(){d.posterContainer.addEventListener("click",function(g){try{b.openVideo(g);
g.preventDefault()
}catch(g){}});
d.iconEffect.addEventListener("click",function(g){try{b.openVideo(g);
g.preventDefault()
}catch(g){}});
d.iconEffect.addEventListener("touchend",function(g){d.utils.removeClass(d.iconEffect,"overIconEffect")
});
d.iconEffect.addEventListener("touchstart",function(g){d.utils.addClass(d.iconEffect,"overIconEffect")
});
d.iconEffect.style.display="block"
}if(b.video.webkitEnterFullscreen){if(d.isAppleMobile){this.eventsTimeout=setTimeout(function(){f()
},1000)
}else{f()
}}else{b.removeVideoElement()
}};
com.videoViewer.S7NativeVideoWrapper.prototype.createVideoHeader=function(){var a=this;
this.videoTitleContainer=document.createElement("div");
this.videoTitleContainer.className="videoTitleContainer";
this.videoTitleContainer.style.webkitTransform="translate3d(0,0,0)";
this.container.appendChild(this.videoTitleContainer);
this.videoTitleSlideHolder=document.createElement("div");
this.videoTitleSlideHolder.className="videoTitleSlideHolder";
this.videoTitleSlideHolder.style.webkitTransform="translate3d(0,0,0)";
this.videoTitleContainer.appendChild(this.videoTitleSlideHolder);
if(!this.videoTitle){this.videoTitleSlideHolder.style.top="-"+this.videoTitleSlideHolder.offsetHeight+"px"
}this.videoTitleSlideBg=document.createElement("div");
this.videoTitleSlideBg.className="videoTitleSlideBg";
this.videoTitleSlideHolder.appendChild(this.videoTitleSlideBg);
this.iconHolder=document.createElement("div");
this.iconHolder.className="videoTitleIcon";
this.videoTitleSlideHolder.appendChild(this.iconHolder);
this.labelHolder=document.createElement("span");
this.labelHolder.className="videoTitleLabel";
this.videoTitleSlideHolder.appendChild(this.labelHolder);
this.updateVideoTitleText()
};
com.videoViewer.S7NativeVideoWrapper.prototype.updateVideoTitleText=function(){this.labelHolder.style.width=(this.videoTitleSlideHolder.offsetWidth-this.labelHolder.offsetLeft)+"px";
this.labelHolder.innerHTML=this.videoTitle
};
(function(b){var c=((navigator.platform.indexOf("iPhone")!=-1)||(navigator.userAgent.indexOf("iPhone")!=-1)||(navigator.userAgent.indexOf("iPod")!=-1)||(navigator.userAgent.indexOf("iPad")!=-1));
var a="/is/content";
function d(l,p){if(l.videoObjRef&&typeof s!="undefined"&&typeof s.Media!="undefined"){var n=l.videoObjRef.video,g=p.replace(/.*\//,"")+"/"+s.pageName.replace(/:/g,"-"),h=-1,k,o=false,f=false;
function e(){s.Media.open(g,h,s.Media.playerName+" (HTML5)");
s.Media.play(g,k);
o=true;
f=false
}function m(){if(h==-1&&!isNaN(n.duration)){h=n.duration;
if(f){e()
}}if(!n.seeking){k=Math.round(n.currentTime)
}}n.addEventListener("loadedmetadata",function(q){m()
});
n.addEventListener("timeupdate",function(q){m()
});
n.addEventListener("play",function(q){m();
if(h>-1){e()
}else{f=true
}});
n.addEventListener("ended",function(q){m();
s.Media.stop(g,k);
s.Media.close(g);
o=false
});
n.addEventListener("pause",function(q){m();
s.Media.stop(g,k);
o=false
});
n.addEventListener("seeked",function(r){var q=k;
m();
if(o){s.Media.stop(g,q);
s.Media.play(g,k)
}})
}}b.fn.s7NativeVideo=function(){this.css("width","100%").css("height","100%");
var f=this.attr("id");
var e=new com.videoViewer.S7NativeVideoWrapper({container:document.getElementById(f)});
e.draw();
e.onWindowResize=function(){b.colorbox.resize({innerWidth:"80%",innerHeight:"80%"})
};
d(e,this.attr("data-path"));
e.onExitFullscreen=function(){b(this).colorbox.close()
};
window.onVideoPlayerClose=function(){try{e.onViewerClosed()
}catch(g){}try{delete window.onVideoPlayerClose
}catch(g){window.onVideoPlayerClose=undefined
}}
};
b.fn.nativeKmjVideo=function(){b(this).each(function(){var g=b(this).prop("href");
if(c&&g.indexOf(a)>0){var f=g.substring(0,g.indexOf(a)+a.length)+"/";
g=f+b(this).attr("data-avs").replace("-AVS","-AVS.m3u8");
b(this).prop("href",g)
}var e={};
e.createVideo=function(){e.video=document.createElement("video");
e.video.className="fsVideoPlayer";
e.video.style.position="absolute";
e.video.style.top="0px";
e.video.style.left="0px";
e.video.style.width="10px";
e.video.style.height="10px";
document.body.appendChild(e.video);
e.video.controls=true;
e.video.src=g;
e.video.addEventListener("loadedmetadata",function(h){e.video.webkitEnterFullscreen()
});
e.video.addEventListener("webkitendfullscreen",function(){e.removeVideoElement()
},false);
e.video.addEventListener("webkitfullscreenchange",function(){e.removeVideoElement()
},false)
};
e.createVideo();
e.openVideo=function(h){e.video.play();
if(e.video.webkitSupportsFullscreen){e.video.webkitEnterFullscreen()
}};
e.removeVideoElement=function(){if((typeof(e.video.webkitDisplayingFullscreen)!=="undefined")&&!e.video.webkitDisplayingFullscreen){document.body.removeChild(e.video);
e.video=null;
e.createVideo()
}};
if(e.video.webkitEnterFullscreen){b(this).find("img").bind("click",function(h){try{if(h.stopPropagation){h.stopPropagation()
}h.preventDefault();
e.openVideo(h)
}catch(h){}})
}else{e.removeVideoElement()
}})
}
})(jQuery);
function ytPlayerDestroyed(a){psplayer.players[a].setPlayerDestroy("videoPlayer")
}function videoPlayerDestroyed(a){psplayer.players[a].setPlayerDestroy("ytPlayer")
}function onPsMediaPlayerReady(a){psplayer.players[a].setPlayerReady("playlistPlayer")
}function onPsYtPlayerReady(a){psplayer.players[a].setPlayerReady("ytPlayer")
}function onPsPlayerReady(a){psplayer.players[a].setPlayerReady("videoPlayer")
}function onVideoComplete(c){if(typeof c!="undefined"&&c!==""){var l=$("#"+c).parent();
var m=$(l).data("videoids");
var d=$(l).data("videoititle");
var e=$(l).data("videoindex");
var a=m.split(",");
var k=d.split(",");
var g=parseInt(e);
if(g>=a.length){g=0
}else{g=g+1
}$(l).data("videoindex",g);
var f=a[g];
var n=k[g];
var b={};
b.videoId=f;
b.autoPlay="1";
b.ageGate="0";
b.width="100%";
b.height="100%";
b.containerid=c;
if(typeof n=="undefined"||n==""||n==""){$.getJSON("https:https://www.googleapis.com/youtube/v3/videos?part=snippet&id="+f+"&key=AIzaSyBuLBaGnPHD8wGqfEYmwVzC_Mr6-MtGbrM&alt=json&callback=?",function(q){b.vtitle=q.items[0].snippet.title;
if(swfobject.hasFlashPlayerVersion("9.0.2")){var p=new psplayer.VideoPlayer(c,b)
}else{o(container,b)
}function o(r,t){r.html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+t.videoId+"?autoplay="+t.autoPlay+'&rel=0&showinfo=0&autohide=1&iv_load_policy=3" frameborder="0" allowfullscreen></iframe>')
}})
}else{b.vtitle=n;
var h=new psplayer.VideoPlayer(c,b)
}}}function loadYtIframe(a,b){a.html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+b.videoId+"?autoplay="+b.autoPlay+'&rel=0&showinfo=0&autohide=1&iv_load_policy=3" frameborder="0" allowfullscreen></iframe>')
}function initVars(d){var c=d.flashVars||{},b=d.params||{};
return d.playerRef&&(psplayer.players[d.playerApiId]=d.playerRef),c.playerApiId=d.playerApiId,c.vtitle=d.vtitle||"",c.containerid=d.containerid||"",c.ytPlayerId=d.ytPlayerId||psplayer.ytVideoPlayerId,c.psPlayerId=d.psPlayerId||psplayer.flvVideoPlayerId,c.imgViewerId=d.imgViewerId||psplayer.imgViewerId,d.playlistPlayerId||(d.playlistPlayerId=psplayer.playlistPlayerId),d.assetPath=d.assetPath||psplayer.assetPath,d.dataPath=d.dataPath||psplayer.dataPath,null!=d.fullscreen&&(c.fullscreen=d.fullscreen),null!=d.embedding&&(c.embedding=d.embedding),null!=d.sharing&&(c.sharing=d.sharing),d.autoPlayId&&(c.autoPlayId=d.autoPlayId),null!=d.autoPlayIndex&&(c.autoPlayIndex=d.autoPlayIndex),d.playlistId&&(c.playlistId=d.playlistId),d.playlistUrl&&(c.playlistUrl=encodeURIComponent(d.playlistUrl)),d.playlistTitle&&(c.playlistTitle=d.playlistTitle),d.videoId&&(c.videoId=d.videoId),d.videoUrl&&(c.videoUrl=encodeURIComponent(d.videoUrl)),d.playlist&&(c.playlist=d.playlist),d.playlistIndex&&(c.playlistIndex=d.playlistIndex),null!=d.autoPlay&&(c.autoPlay=d.autoPlay),d.videoImgUrl&&(c.videoImgUrl=d.videoImgUrl),d.videoImgId&&(c.videoImgId=d.videoImgId),d.ageGate&&(c.ageGate=d.ageGate),b.menu=d.menu||"false",b.scale=d.scale||"noscale",b.allowfullscreen=d.allowfullscreen||"true",b.allowscriptaccess=d.allowscriptaccess||"always",b.bgcolor=d.bgcolor||"#000000",b.allownetworking=d.allownetworking||"all",b.wmode=d.wmode||"transparent",d.fpVersion=d.fpVersion||"9.0.47",d.flashVars=c,d.params=b,d
}function encodeUrlVars(h){for(var f=h.substring(h.indexOf("?")+1),c={},d=f.split("&"),b=d.length;
b--;
){var k=d[b],g=k.substring(0,k.indexOf("="));
c[g]=k.substring(k.indexOf("=")+1)
}return c
}var swfobject=function(){function aL(){if(!ai){try{var f=ae.getElementsByTagName("body")[0].appendChild(aI("span"));
f.parentNode.removeChild(f)
}catch(d){return
}ai=!0;
for(var b=am.length,c=0;
b>c;
c++){am[c]()
}}}function ax(a){ai?a():am[am.length]=a
}function aP(b){if(typeof ac.addEventListener!=X){ac.addEventListener("load",b,!1)
}else{if(typeof ae.addEventListener!=X){ae.addEventListener("load",b,!1)
}else{if(typeof ac.attachEvent!=X){aD(ac,"onload",b)
}else{if("function"==typeof ac.onload){var a=ac.onload;
ac.onload=function(){a(),b()
}
}else{ac.onload=b
}}}}}function aH(){aF?aE():aC()
}function aE(){var f=ae.getElementsByTagName("body")[0],d=aI(at);
d.setAttribute("type",af);
var b=f.appendChild(d);
if(b){var c=0;
(function(){if(typeof b.GetVariable!=X){var a=b.GetVariable("$version");
a&&(a=a.split(" ")[1].split(","),aa.pv=[parseInt(a[0],10),parseInt(a[1],10),parseInt(a[2],10)])
}else{if(10>c){return c++,setTimeout(arguments.callee,10),void 0
}}f.removeChild(d),b=null,aC()
})()
}else{aC()
}}function aC(){var r=ak.length;
if(r>0){for(var B=0;
r>B;
B++){var x=ak[B].id,k=ak[B].callbackFn,g={success:!1,id:x};
if(aa.pv[0]>0){var d=av(x);
if(d){if(!aJ(ak[B].swfVersion)||aa.wk&&312>aa.wk){if(ak[B].expressInstall&&aB()){var w={};
w.data=ak[B].expressInstall,w.width=d.getAttribute("width")||"0",w.height=d.getAttribute("height")||"0",d.getAttribute("class")&&(w.styleclass=d.getAttribute("class")),d.getAttribute("align")&&(w.align=d.getAttribute("align"));
for(var b={},A=d.getElementsByTagName("param"),v=A.length,o=0;
v>o;
o++){"movie"!=A[o].getAttribute("name").toLowerCase()&&(b[A[o].getAttribute("name")]=A[o].getAttribute("value"))
}ay(w,b,x,k)
}else{aM(d),k&&k(g)
}}else{ab(x,!0),k&&(g.success=!0,g.ref=az(x),k(g))
}}}else{if(ab(x,!0),k){var m=az(x);
m&&typeof m.SetVariable!=X&&(g.success=!0,g.ref=m),k(g)
}}}}}function az(f){var d=null,b=av(f);
if(b&&"OBJECT"==b.nodeName){if(typeof b.SetVariable!=X){d=b
}else{var c=b.getElementsByTagName(at)[0];
c&&(d=c)
}}return d
}function aB(){return !aj&&aJ("6.0.65")&&(aa.win||aa.mac)&&!(aa.wk&&312>aa.wk)
}function ay(h,f,c,d){aj=!0,an=d||null,al={success:!1,id:c};
var b=av(c);
if(b){"OBJECT"==b.nodeName?(aO=ar(b),z=null):(aO=b,z=c),h.id=ad,(typeof h.width==X||!/%$/.test(h.width)&&310>parseInt(h.width,10))&&(h.width="310"),(typeof h.height==X||!/%$/.test(h.height)&&137>parseInt(h.height,10))&&(h.height="137"),ae.title=ae.title.slice(0,47)+" - Flash Player Installation";
var m=aa.ie&&aa.win?"ActiveX":"PlugIn",g="MMredirectURL="+(""+ac.location).replace(/&/g,"%26")+"&MMplayerType="+m+"&MMdoctitle="+ae.title;
if(typeof f.flashvars!=X?f.flashvars+="&"+g:f.flashvars=g,aa.ie&&aa.win&&4!=b.readyState){var k=aI("div");
c+="SWFObjectNew",k.setAttribute("id",c),b.parentNode.insertBefore(k,b),b.style.display="none",function(){4==b.readyState?b.parentNode.removeChild(b):setTimeout(arguments.callee,10)
}()
}aA(h,f,c)
}}function aM(b){if(aa.ie&&aa.win&&4!=b.readyState){var a=aI("div");
b.parentNode.insertBefore(a,b),a.parentNode.replaceChild(ar(b),a),b.style.display="none",function(){4==b.readyState?b.parentNode.removeChild(b):setTimeout(arguments.callee,10)
}()
}else{b.parentNode.replaceChild(ar(b),b)
}}function ar(g){var f=aI("div");
if(aa.win&&aa.ie){f.innerHTML=g.innerHTML
}else{var c=g.getElementsByTagName(at)[0];
if(c){var d=c.childNodes;
if(d){for(var b=d.length,h=0;
b>h;
h++){1==d[h].nodeType&&"PARAM"==d[h].nodeName||8==d[h].nodeType||f.appendChild(d[h].cloneNode(!0))
}}}}return f
}function aA(m,x,w){var k,h=av(w);
if(aa.wk&&312>aa.wk){return k
}if(h){if(typeof m.id==X&&(m.id=w),aa.ie&&aa.win){var g="";
for(var b in m){m[b]!=Object.prototype[b]&&("data"==b.toLowerCase()?x.movie=m[b]:"styleclass"==b.toLowerCase()?g+=' class="'+m[b]+'"':"classid"!=b.toLowerCase()&&(g+=" "+b+'="'+m[b]+'"'))
}var f="";
for(var A in x){x[A]!=Object.prototype[A]&&(f+='<param name="'+A+'" value="'+x[A]+'" />')
}h.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+g+">"+f+"</object>",aq[aq.length]=m.id,k=av(m.id)
}else{var u=aI(at);
u.setAttribute("type",af);
for(var v in m){m[v]!=Object.prototype[v]&&("styleclass"==v.toLowerCase()?u.setAttribute("class",m[v]):"classid"!=v.toLowerCase()&&u.setAttribute(v,m[v]))
}for(var c in x){x[c]!=Object.prototype[c]&&"movie"!=c.toLowerCase()&&aw(u,c,x[c])
}h.parentNode.replaceChild(u,h),k=u
}}return k
}function aw(f,d,b){var c=aI("param");
c.setAttribute("name",d),c.setAttribute("value",b),f.appendChild(c)
}function aN(b){var a=av(b);
a&&"OBJECT"==a.nodeName&&(aa.ie&&aa.win?(a.style.display="none",function(){4==a.readyState?aK(b):setTimeout(arguments.callee,10)
}()):a.parentNode.removeChild(a))
}function aK(d){var c=av(d);
if(c){for(var b in c){"function"==typeof c[b]&&(c[b]=null)
}c.parentNode.removeChild(c)
}}function av(d){var c=null;
try{c=ae.getElementById(d)
}catch(b){}return c
}function aI(a){return ae.createElement(a)
}function aD(d,c,b){d.attachEvent(c,b),q[q.length]=[d,c,b]
}function aJ(d){var c=aa.pv,b=d.split(".");
return b[0]=parseInt(b[0],10),b[1]=parseInt(b[1],10)||0,b[2]=parseInt(b[2],10)||0,c[0]>b[0]||c[0]==b[0]&&c[1]>b[1]||c[0]==b[0]&&c[1]==b[1]&&c[2]>=b[2]?!0:!1
}function au(h,f,c,d){if(!aa.ie||!aa.mac){var b=ae.getElementsByTagName("head")[0];
if(b){var k=c&&"string"==typeof c?c:"screen";
if(d&&(ap=null,ao=null),!ap||ao!=k){var g=aI("style");
g.setAttribute("type","text/css"),g.setAttribute("media",k),ap=b.appendChild(g),aa.ie&&aa.win&&typeof ae.styleSheets!=X&&ae.styleSheets.length>0&&(ap=ae.styleSheets[ae.styleSheets.length-1]),ao=k
}aa.ie&&aa.win?ap&&typeof ap.addRule==at&&ap.addRule(h,f):ap&&typeof ae.createTextNode!=X&&ap.appendChild(ae.createTextNode(h+" {"+f+"}"))
}}}function ab(d,c){if(ag){var b=c?"visible":"hidden";
ai&&av(d)?av(d).style.visibility=b:au("#"+d,"visibility:"+b)
}}function ah(d){var c=/[\\\"<>\.;]/,b=null!=c.exec(d);
return b&&typeof encodeURIComponent!=X?encodeURIComponent(d):d
}var aO,z,an,al,ap,ao,X="undefined",at="object",Y="Shockwave Flash",K="ShockwaveFlash.ShockwaveFlash",af="application/x-shockwave-flash",ad="SWFObjectExprInst",aG="onreadystatechange",ac=window,ae=document,Z=navigator,aF=!1,am=[aH],ak=[],aq=[],q=[],ai=!1,aj=!1,ag=!0,aa=function(){var k=typeof ae.getElementById!=X&&typeof ae.getElementsByTagName!=X&&typeof ae.createElement!=X,v=Z.userAgent.toLowerCase(),u=Z.platform.toLowerCase(),h=u?/win/.test(u):/win/.test(v),g=u?/mac/.test(u):/mac/.test(v),f=/webkit/.test(v)?parseFloat(v.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,b=!1,c=[0,0,0],w=null;
if(typeof Z.plugins!=X&&typeof Z.plugins[Y]==at){w=Z.plugins[Y].description,!w||typeof Z.mimeTypes!=X&&Z.mimeTypes[af]&&!Z.mimeTypes[af].enabledPlugin||(aF=!0,b=!1,w=w.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),c[0]=parseInt(w.replace(/^(.*)\..*$/,"$1"),10),c[1]=parseInt(w.replace(/^.*\.(.*)\s.*$/,"$1"),10),c[2]=/[a-zA-Z]/.test(w)?parseInt(w.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0)
}else{if(typeof ac.ActiveXObject!=X){try{var m=new ActiveXObject(K);
m&&(w=m.GetVariable("$version"),w&&(b=!0,w=w.split(" ")[1].split(","),c=[parseInt(w[0],10),parseInt(w[1],10),parseInt(w[2],10)]))
}catch(p){}}}return{w3:k,pv:c,wk:f,ie:b,win:h,mac:g}
}();
return function(){aa.w3&&((typeof ae.readyState!=X&&"complete"==ae.readyState||typeof ae.readyState==X&&(ae.getElementsByTagName("body")[0]||ae.body))&&aL(),ai||(typeof ae.addEventListener!=X&&ae.addEventListener("DOMContentLoaded",aL,!1),aa.ie&&aa.win&&(ae.attachEvent(aG,function(){"complete"==ae.readyState&&(ae.detachEvent(aG,arguments.callee),aL())
}),ac==top&&function(){if(!ai){try{ae.documentElement.doScroll("left")
}catch(a){return setTimeout(arguments.callee,0),void 0
}aL()
}}()),aa.wk&&function(){return ai?void 0:/loaded|complete/.test(ae.readyState)?(aL(),void 0):(setTimeout(arguments.callee,0),void 0)
}(),aP(aL)))
}(),function(){aa.ie&&aa.win&&window.attachEvent("onunload",function(){for(var g=q.length,f=0;
g>f;
f++){q[f][0].detachEvent(q[f][1],q[f][2])
}for(var c=aq.length,d=0;
c>d;
d++){aN(aq[d])
}for(var b in aa){aa[b]=null
}aa=null;
for(var h in swfobject){swfobject[h]=null
}swfobject=null
})
}(),{registerObject:function(g,f,c,d){if(aa.w3&&g&&f){var b={};
b.id=g,b.swfVersion=f,b.expressInstall=c,b.callbackFn=d,ak[ak.length]=b,ab(g,!1)
}else{d&&d({success:!1,id:g})
}},getObjectById:function(a){return aa.w3?az(a):void 0
},embedSWF:function(o,w,k,h,g,b,p,v,x,t){var m={success:!1,id:w};
aa.w3&&!(aa.wk&&312>aa.wk)&&o&&w&&k&&h&&g?(ab(w,!1),ax(function(){k+="",h+="";
var f={};
if(x&&typeof x===at){for(var d in x){f[d]=x[d]
}}f.data=o,f.width=k,f.height=h;
var l={};
if(v&&typeof v===at){for(var a in v){l[a]=v[a]
}}if(p&&typeof p===at){for(var c in p){typeof l.flashvars!=X?l.flashvars+="&"+c+"="+p[c]:l.flashvars=c+"="+p[c]
}}if(aJ(g)){var e=aA(f,l,w);
f.id==w&&ab(w,!0),m.success=!0,m.ref=e
}else{if(b&&aB()){return f.data=b,ay(f,l,w,t),void 0
}ab(w,!0)
}t&&t(m)
})):t&&t(m)
},switchOffAutoHideShow:function(){ag=!1
},ua:aa,getFlashPlayerVersion:function(){return{major:aa.pv[0],minor:aa.pv[1],release:aa.pv[2]}
},hasFlashPlayerVersion:aJ,createSWF:function(d,c,b){return aa.w3?aA(d,c,b):void 0
},showExpressInstall:function(f,d,b,c){aa.w3&&aB()&&ay(f,d,b,c)
},removeSWF:function(a){aa.w3&&aN(a)
},createCSS:function(f,d,b,c){aa.w3&&au(f,d,b,c)
},addDomLoadEvent:ax,addLoadEvent:aP,getQueryParamValue:function(f){var d=ae.location.search||ae.location.hash;
if(d){if(/\?/.test(d)&&(d=d.split("?")[1]),null==f){return ah(d)
}for(var b=d.split("&"),c=0;
b.length>c;
c++){if(b[c].substring(0,b[c].indexOf("="))==f){return ah(b[c].substring(b[c].indexOf("=")+1))
}}}return""
},expressInstallCallback:function(){if(aj){var a=av(ad);
a&&aO&&(a.parentNode.replaceChild(aO,a),z&&(ab(z,!0),aa.ie&&aa.win&&(aO.style.display="block")),an&&an(al)),aj=!1
}}}
}();
if(function(){function d(p,w){var v,m,k,h,f="mList_"+p,g=!1,x=!1,q=w.width||"860",u=w.height||"581";
return this.setPlayerReady=function(a){"playlistPlayer"==a&&(v=document.getElementById(f),"function"==typeof h.onComplete&&h.onComplete({target:v})),"videoPlayer"==a&&(m=document.getElementById(f),g&&m.pauseVideo(),m.addEventListener("onPlayerDestroy","videoPlayerDestroyed"),g=!1),"ytPlayer"==a&&(k=document.getElementById(f),k.addEventListener("onPlayerDestroy","ytPlayerDestroyed"),x&&k.pauseVideo(),x=!1)
},this.setPlayerDestroy=function(a){"ytPlayer"==a&&(k=null),"videoPlayer"==a&&(m=null)
},w.playerRef=this,w.playerApiId=f,h=initVars(w),swfobject.addDomLoadEvent(function(){var l=document.getElementById(p);
if(l&&swfobject.hasFlashPlayerVersion(h.fpVersion)){l.innerHTML='<div id="'+f+'"> </div>';
var e=h.assetPath+h.playlistPlayerId+"?psCacheBust="+(new Date).getTime();
swfobject.embedSWF(e,f,q,u,h.fpVersion,h.assetPath+"expressInstall.swf",h.flashVars,h.params,{id:f})
}}),{pauseVideo:function(){var a=v.getCurrentMediaType();
"video"==a?m?m.pauseVideo():g=!0:"yt-video"==a&&(k?k.pauseVideo():x=!0)
},playVideo:function(){g=!1,x=!1;
var a=v.getCurrentMediaType();
"video"==a&&m?m.playVideo():"yt-video"==a&&k&&k.playVideo()
},viewMediaAt:function(a){v&&v.viewMediaAt(a)
},closeMedia:function(){v&&v.viewMediaAt(-1)
},nextMedia:function(){v&&v.nextMedia()
},previousMedia:function(){v&&v.previousMedia()
},loadQuery:function(a){v&&v.loadQuery(a)
},loadPlaylistByUrl:function(l,a){v&&v.loadPlaylistByUrl(l,a)
},loadPlaylistById:function(l,a){v&&v.loadPlaylistById(l,a)
},loadPlaylistByUrls:function(l,a){v&&v.loadPlaylistByUrls(l,a)
},loadPlaylistByIds:function(l,a){v&&v.loadPlaylistByIds(l,a)
},getPlayerRef:function(){return v
},destroy:function(){g=!1,x=!1,m=null,k=null,v=null,swfobject.removeSWF(f)
},vars:h}
}function c(p,w){function v(){var o=h.videoId?h.videoId:h.videoUrl;
if(!o){if(!h.playlist){return
}o=h.playlist
}var n,l=o.toLowerCase();
n=-1!=l.indexOf(".flv")||-1!=l.indexOf(".mp4")||-1!=l.indexOf(".f4v")?k.assetPath+h.psPlayerId:k.assetPath+h.ytPlayerId,x=!1,m=null,swfobject.removeSWF(g),swfobject.addDomLoadEvent(function(){var y=document.getElementById(f);
if(y&&swfobject.hasFlashPlayerVersion(k.fpVersion)){var r=-1!=(""+q).indexOf("%")?q:q+"px",t=-1!=(""+u).indexOf("%")?u:u+"px";
y.innerHTML='<div style="background-color:'+k.params.bgcolor+";width:"+r+";height:"+t+';"><div id="'+g+'"></div></div>',swfobject.embedSWF(n,g,"100%","100%",k.fpVersion,k.assetPath+"expressInstall.swf",h,k.params,{id:g})
}})
}var m,k,h,f=p,g="vPlayer_"+p,x=!1,q=w.width||"616",u=w.height||"348";
return this.setPlayerReady=function(){m=document.getElementById(g),x&&m.pauseVideo(),x=!1,"function"==typeof k.onComplete&&k.onComplete({target:m})
},this.setPlayerDestroy=function(){m=null
},w.playerRef=this,w.playerApiId=g,k=initVars(w),h=k.flashVars,v(),{loadVideoByUrl:function(a){delete h.videoId,h.videoUrl=encodeURIComponent(a),h.autoPlay=1,v()
},loadVideoById:function(a){delete h.videoUrl,h.videoId=a,h.autoPlay=1,v()
},cueVideoByUrl:function(l,a){delete h.videoId,h.videoUrl=encodeURIComponent(l),a&&a.length>0?h.videoImgUrl=a:delete h.videoImgUrl,h.autoPlay=0,v()
},cueVideoById:function(l,a){delete h.videoId,h.videoId=l,h.videoImgId=a,h.autoPlay=0,v()
},loadPlaylist:function(l,a){delete h.videoId,delete h.videoUrl,h.playlist=l,a&&(h.playlistIndex=a),h.autoPlay=1
},cuePlaylist:function(l,a){delete h.videoId,delete h.videoUrl,h.playlist=l,a&&(h.playlistIndex=a),h.autoPlay=0
},pauseVideo:function(){m?m.pauseVideo():x=!0
},playVideo:function(){m&&m.playVideo()
},destroy:function(){x=!1,m=null,swfobject.removeSWF(g)
},getPlayerRef:function(){return m
},vars:k}
}var b=window.psplayer;
b={players:{},flvVideoPlayerId:"ps-video-player.swf",ytVideoPlayerId:"ps-youtube-player.swf",playlistPlayerId:"ps-media-playlist.swf",imgViewerId:"ps-img-viewer.swf",assetPath:"/etc/designs/pdc/clientlibs_youtube/swf/",dataPath:"/etc/designs/pdc/clientlibs_youtube/swf/",httpVideoPath:"/etc/designs/pdc/clientlibs_youtube/swf/",PlaylistPlayer:d,VideoPlayer:c},window.psplayer=b
}(),"function"!=typeof getAssetPath){var getAssetPath=function(){return psplayer.assetPath
}
}else{psplayer.assetPath=getAssetPath()
}if("function"!=typeof getHttpVideoPath){var getHttpVideoPath=function(){return psplayer.httpVideoPath
}
}else{psplayer.httpVideoPath=getHttpVideoPath()
}if("function"!=typeof getDataPath){var getDataPath=function(){return psplayer.dataPath
}
}else{psplayer.dataPath=getDataPath()
}function getOmnitureAccount(){if(typeof s_account!="undefined"){return s_account
}}function getSiteCatalystConfig(){pdclog("yvideo:getSiteCatalystConfig > s=",s,", s_account=",s_account);
if(typeof s!="undefined"){return{s_account:s_account,charSet:s.charSet,trackingServer:s.trackingServer,trackingServerSecure:s.trackingServerSecure,visitorNamespace:s.visitorNamespace,currencyCode:s.currencyCode,pageName:s.pageName}
}return{}
}(function(b){var a=["rated mature","content inappropriate for children","inappropriate content for children","rated teen-mature","rated teen - mature","rated e-mature","rated e - mature"];
b.fn.showYTVideoPanel=function(){var c=this.attr("data-video");
var d={};
d.videoId=c;
d.autoPlay="0";
d.ageGate="0";
d.width="100%";
d.height="100%";
this.html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+d.videoId+"?enablejsapi=1&autoplay="+d.autoPlay+'&rel=0&showinfo=0&autohide=1&iv_load_policy=3" frameborder="0" allowfullscreen></iframe>')
};
b.fn.getYTVideoDivHTML=function(c){var d="";
b(this).each(function(){b.each(this.attributes,function(){if((this.name=="href"&&this.value!="javascript:void(0);")||(this.name=="vhref")){d+="data-video='"+this.value.replace(/.*=/,"")+"' "
}else{if(this.name.match(/^data/)){d+=this.name+"='"+this.value.replace(/'/g,"&apos;")+"' "
}}})
});
return"<div class='ytVideoContainer' id='"+c+"' "+d+"></div>"
};
b.fn.updateYoutubeMetadata=function(){b(this).each(function(){var e=b(this),c=e.attr("href"),d=c.substring(c.indexOf("?v=")+3),f="https://www.googleapis.com/youtube/v3/videos?part=snippet&id="+d+"&key=AIzaSyAKRzl4h3hhO1X3imjDNBNFkgqmiBhzk_U&alt=json&callback=?";
b.getJSON(f,function(g){if(b(g.items).isVideoItemAgeGated()){e.attr("data-agegating","yes")
}else{e.attr("data-agegating","no")
}})
})
};
b.fn.isVideoItemAgeGated=function(){var d=this[0];
if(d&&d.snippet){var f=d.snippet["description"];
if(f){var e=f;
if(e){e=e.toLowerCase();
for(var c=0;
c<a.length;
c++){if(e.indexOf(a[c])>=0){return true
}}}}}return false
}
})(jQuery);
(function(a){a.fn.showKMJVideoPanel=function(){var b=this.attr("data-video");
var d={};
d.videoId=b;
d.autoPlay="1";
d.ageGate="0";
d.width="100%";
d.height="100%";
if(swfobject.hasFlashPlayerVersion("9.0.2")){var c=new psplayer.VideoPlayer(this.prop("id"),d)
}else{}};
a.fn.getKMJVideoDivHTML=function(b){var c="";
a(this).each(function(){a.each(this.attributes,function(){if(this.name=="href"){c+="data-video='"+this.value+"' "
}else{if(this.name.match(/^data/)){c+=this.name+"='"+this.value.replace(/'/g,"&apos;")+"' "
}}})
});
return"<div class='kmjVideoContainer' id='"+b+"' "+c+"></div>"
}
})(jQuery);

}
/*
     FILE ARCHIVED ON 21:22:35 Jun 15, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:36:48 Apr 14, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 899.918
  exclusion.robots: 145.103
  exclusion.robots.policy: 145.096
  xauthn.identify: 95.789
  xauthn.chkprivs: 49.142
  RedisCDXSource: 2.151
  esindex: 0.007
  LoadShardBlock: 665.89 (3)
  PetaboxLoader3.datanode: 628.517 (5)
  CDXLines.iter: 32.453 (3)
  load_resource: 265.78 (2)
  PetaboxLoader3.resolve: 165.184 (2)
*/