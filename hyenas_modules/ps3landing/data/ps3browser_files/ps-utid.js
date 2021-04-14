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

var PriceSpider=PriceSpider||{};PriceSpider.UTID={utidCookieName:"ps-utid",utParamCookieName:"ps-utparam",cookieDurationMin:60,setCookie:function(i,e,o,t,a,n){var r=new Date;r.setTime(r.getTime()),o&&(o=1e3*o*60);var s=new Date(r.getTime()+o);document.cookie=i+"="+encodeURIComponent(e)+(o?"; expires="+s.toGMTString():"")+(t?"; path="+t:"")+(a?"; domain="+a:"")+(n?"; secure":"")},init:function(i){for(var e=i?i.length:0,o=0;e>o;o++){var t=i[o],a=location.search?location.search.match(new RegExp("[?&]"+t.name+"=([^&#]+)","i")):null;if(a){if(t.values){for(var n=!1,r=a[1].toLowerCase(),s=t.values.length,c=0;s>c;c++)if((t.values[c]?t.values[c].toLowerCase():null)==r){n=!0;break}if(!n)continue}this.setCookie(this.utidCookieName,a[1],this.cookieDurationMin,"/",location.hostname),this.setCookie(this.utParamCookieName,t.name,this.cookieDurationMin,"/",location.hostname);break}}},set:function(i,e){if(!i||"string"!=typeof i)throw"Invalid or missing utid. Expected String";if(e&&"string"!=typeof e)throw"Invalid utParamName";this.setCookie(this.utidCookieName,i,this.cookieDurationMin,"/",location.hostname),e&&this.setCookie(this.utParamCookieName,e,this.cookieDurationMin,"/",location.hostname)}},PriceSpider.UTID.init([{"name":"emcid","values":null},{"name":"smcid"},{"name":"utid","values":null},{"name":"v"}]);

}
/*
     FILE ARCHIVED ON 21:22:30 Jun 15, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:36:29 Apr 14, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 520.586
  exclusion.robots: 228.297
  exclusion.robots.policy: 228.286
  xauthn.identify: 186.135
  xauthn.chkprivs: 41.9
  RedisCDXSource: 2.577
  esindex: 0.01
  LoadShardBlock: 159.036 (3)
  PetaboxLoader3.datanode: 146.477 (5)
  CDXLines.iter: 38.459 (3)
  load_resource: 244.39 (2)
  PetaboxLoader3.resolve: 180.54 (2)
*/