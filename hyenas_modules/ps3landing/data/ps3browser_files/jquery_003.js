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

/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */

(function ($, document, undefined) {

	var pluses = /\+/g;

	function raw(s) {
		return s;
	}

	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	var config = $.cookie = function (key, value, options) {

		// write
		if (value !== undefined) {
			options = $.extend({}, config.defaults, options);

			if (value === null) {
				options.expires = -1;
			}

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = config.json ? JSON.stringify(value) : String(value);

			return (document.cookie = [
				encodeURIComponent(key), '=', config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// read
		var decode = config.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			if (decode(parts.shift()) === key) {
				var cookie = decode(parts.join('='));
				return config.json ? JSON.parse(cookie) : cookie;
			}
		}

		return null;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== null) {
			$.cookie(key, null, options);
			return true;
		}
		return false;
	};
	$.ajaxSetup({
    		beforeSend: function(jqXHR, settings) {

			try {
				
				var localeString = globalLocale.toLowerCase().replace("_","-");
				if(typeof settings != "undefined" && typeof settings.url != "undefined" &&  settings.url != "" && 
					settings.url.indexOf("/libs") == -1 && settings.url.indexOf("/etc") == -1 && settings.url.indexOf("/bin") == -1 && settings.url.indexOf("/mbox") == -1 && settings.url.indexOf("/content/pdc") == -1
						&& settings.url.indexOf("/"+localeString+"/") == -1 && settings.url.indexOf("/apps") == -1 && settings.url.indexOf("/mnt") == -1 && settings.url.indexOf("http") == -1 && settings.url.indexOf("//") == -1) {
		        	
		        		settings.url = "/"+localeString+settings.url;
		        }
			}catch(err) {
			
  				console.log("Error in appending locale");
			}
		}
	});

})(jQuery, document);

}
/*
     FILE ARCHIVED ON 21:22:28 Jun 15, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:36:28 Apr 14, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 495.128
  exclusion.robots: 138.376
  exclusion.robots.policy: 138.364
  xauthn.identify: 62.241
  xauthn.chkprivs: 75.802
  RedisCDXSource: 21.171
  esindex: 0.01
  LoadShardBlock: 207.632 (3)
  PetaboxLoader3.datanode: 105.318 (5)
  CDXLines.iter: 49.787 (3)
  PetaboxLoader3.resolve: 210.406 (3)
  load_resource: 184.191 (2)
*/