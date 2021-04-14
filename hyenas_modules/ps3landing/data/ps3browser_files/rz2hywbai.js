



/* ControlTag Loader for Sony Interactive - Americas ef6d426b-e5ac-4ba5-9dfc-ea78bf8e1291 */
(function(w, cs) {
  
  if (/Twitter for iPhone/.test(w.navigator.userAgent || '')) {
    return;
  }

  var debugging = /kxdebug/.test(w.location);
  var log = function() {
    
    debugging && w.console && w.console.log([].slice.call(arguments).join(' '));
  };

  var load = function(url, callback) {
    log('Loading script from:', url);
    var node = w.document.createElement('script');
    node.async = true;  
    node.src = url;

    
    node.onload = node.onreadystatechange = function () {
      var state = node.readyState;
      if (!callback.done && (!state || /loaded|complete/.test(state))) {
        log('Script loaded from:', url);
        callback.done = true;  
        callback();
      }
    };

    
    var sibling = w.document.getElementsByTagName('script')[0];
    sibling.parentNode.insertBefore(node, sibling);
  };

  var config = {"app":{"name":"krux-scala-config-webservice","version":"3.42.4","schema_version":3},"confid":"rz2hywbai","context_terms":[],"publisher":{"name":"Sony Interactive - Americas","active":true,"uuid":"ef6d426b-e5ac-4ba5-9dfc-ea78bf8e1291","version_bucket":"stable","id":2488},"params":{"link_header_bidder":false,"site_level_supertag_config":"site","recommend":false,"control_tag_pixel_throttle":100,"fingerprint":false,"optout_button_optout_text":"Browser Opt Out","user_data_timing":"load","consent_active":true,"use_central_usermatch":true,"store_realtime_segments":false,"tag_source":false,"link_hb_start_event":"ready","optout_button_optin_text":"Browser Opt In","link_hb_timeout":2000,"link_hb_adserver_subordinate":true,"optimize_realtime_segments":false,"link_hb_adserver":"dfp","target_fingerprint":false,"prime_sdk_configs":true,"context_terms":true,"optout_button_id":"kx-optout-button","dfp_premium":true,"control_tag_namespace":"sie1"},"prioritized_segments":[],"realtime_segments":[{"id":"smg78qkhh","test":["and",["and",["or",["contains","$page_attr_c_product_id_atc:,",["UP9000-EXDG91000_00-GAO0000000000000"]]]]]},{"id":"sj9l6byzh","test":["and",["and",["or",["intersects","$page_attr_c_product_id_atc:,",["up1004-cusa00419_00-gtavdigitaldownl"]]]]]},{"id":"sgaon5ekj","test":["and",["and",["or",["contains","$page_attr_c_product_id_purchase:,",["UP9000-SFQA92000_01-GAME920000000001"]]]]]},{"id":"sjqa86da6","test":["and",["and",["or",["intersects","$page_attr_c_product_default_sku_price_atc:,",["0","10000","1099","1199","11999","12499","1299","12999","13599","1399","149","1499","14999","1599","1699","1749","1799","1899","199","1999","19999","2099","2199","2249","2299","2399","249","2499","2599","2699","2799","2899","299","2999","349","3499","3599","3799","399","3999","4399","4499","4699","49","499","4999","5399","5499","5949","599","5999","6499","6599","699","6999","749","7499","7599","799","7999","8449","8499","899","8999","9899","99","999","9999"]]],["and",["intersects","$user_attr_s_user_country_code",["us"]]]]]},{"id":"sf7t5zjud","test":["and",["and",["or",["contains","$page_attr_c_product_id_purchase:,",["UP9000-CUSA05186_00-0TRICKYTOWERSPS4"]]]]]},{"id":"smgw6ld4x","test":["and",["and",["or",["contains","$page_attr_c_product_id_atc:,",["UP9000-CUSA05186_00-0TRICKYTOWERSPS4"]]]]]},{"id":"sdysm14ew","test":["and",["and",["or",["contains","$page_attr_c_product_id_atc:,",["UP9000-CUSA05186_00-0TRICKYTOWERSPS4"]]]]]},{"id":"sganrgrky","test":["and",["and",["or",["contains","$page_attr_c_product_id_purchase:,",["IV0003-SWQA13046_00-0000000000000005"]]]]]},{"id":"sbs5lqog2","test":["and",["and",["or",["contains","$page_attr_c_product_id_atc:,",["UP9000-EXDG00466_00-0TRICKYTOWERSPS4"]]]]]},{"id":"sjqa146g9","test":["and",["and",["or",["intersects","$page_attr_c_product_default_sku_price_atc:,",["10000","1099","1199","11999","12499","1299","12999","13599","1399","149","1499","14999","1599","1699","1749","1799","1899","199","1999","19999","2099","2199","2249","2299","2399","249","2499","2599","2699","2799","2899","299","2999","349","3499","3599","3799","399","3999","4399","4499","4699","49","499","4999","5399","5499","5949","599","5999","6499","6599","699","6999","749","7499","7599","799","7999","8449","8499","899","8999","9899","99","999","9999"]]],["and",["intersects","$user_attr_s_user_country_code",["us"]]]]]},{"id":"sdy8tdmkb","test":["and",["and",["or",["contains","$page_attr_c_product_id_visit:,",["UP9000-EXDG60001_00-PVUSF60000000001"]]]]]}],"services":{"userdata":"//cdn.krxd.net/userdata/get","contentConnector":"https://connector.krxd.net/content_connector","stats":"//apiservices.krxd.net/stats","optout":"//cdn.krxd.net/userdata/optout/status","event":"//beacon.krxd.net/event.gif","set_optout":"https://consumer.krxd.net/consumer/optout","data":"//beacon.krxd.net/data.gif","link_hb_stats":"//beacon.krxd.net/link_bidder_stats.gif","userData":"//cdn.krxd.net/userdata/get","link_hb_mas":"https://link.krxd.net/hb","config":"//cdn.krxd.net/controltag/{{ confid }}.js","social":"//beacon.krxd.net/social.gif","addSegment":"//cdn.krxd.net/userdata/add","pixel":"//beacon.krxd.net/pixel.gif","um":"https://usermatch.krxd.net/um/v2","controltag":"//cdn.krxd.net/ctjs/controltag.js.{hash}","loopback":"https://consumer.krxd.net/consumer/tmp_cookie","remove":"https://consumer.krxd.net/consumer/remove/ef6d426b-e5ac-4ba5-9dfc-ea78bf8e1291","click":"https://apiservices.krxd.net/click_tracker/track","stats_export":"//beacon.krxd.net/controltag_stats.gif","userdataApi":"//cdn.krxd.net/userdata/v1/segments/get","cookie":"//beacon.krxd.net/cookie2json","proxy":"//cdn.krxd.net/partnerjs/xdi","consent_get":"https://consumer.krxd.net/consent/get/ef6d426b-e5ac-4ba5-9dfc-ea78bf8e1291","consent_set":"https://consumer.krxd.net/consent/set/ef6d426b-e5ac-4ba5-9dfc-ea78bf8e1291","is_optout":"https://beacon.krxd.net/optout_check","impression":"//beacon.krxd.net/ad_impression.gif","transaction":"//beacon.krxd.net/transaction.gif","log":"//jslog.krxd.net/jslog.gif","portability":"https://consumer.krxd.net/consumer/portability/ef6d426b-e5ac-4ba5-9dfc-ea78bf8e1291","set_optin":"https://consumer.krxd.net/consumer/optin","usermatch":"//beacon.krxd.net/usermatch.gif"},"experiments":[],"site":{"name":"playstation.com","cap":0,"id":1654614,"organization_id":2488,"uid":"rz2hywbai"},"tags":[{"id":31068,"name":"DTC","content":"<script>\n(function(){\n\tKrux('scrape',{'page_attr_url_path_1':{'url_path':'1'}});\n\tKrux('scrape',{'page_attr_url_path_2':{'url_path':'2'}});\n\tKrux('scrape',{'page_attr_url_path_3':{'url_path':'3'}});\n\tKrux('scrape',{'page_attr_meta_keywords':{meta_name:'keywords'}});\n\tKrux('scrape',{'page_attr_domain':{url_domain: '2'}});\n  \nif (window.sie_aid) { \n  \tKrux('scrape', {'user_attr_sie-aid' :{javascript:'sie_aid'}} );\n  }\n\nelse if (window._kruxObj) {\n    Krux('scrape', {'user_attr_sie-aid' :{javascript:'_kruxObj.SIEAdvId'}} );\n  }\n  \n\n})();\n</script>","target":null,"target_action":"append","timing":"onready","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true},{"id":33137,"name":"EMCID","content":"<script>\n(function(){\n\n\tvar params = Krux('require:util').urlParams();\n\t\n\tKrux ('set', { \n\t'page_attr_emcid': params.emcid \n\t});\n\t\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true}],"usermatch_tags":[{"id":6,"name":"Google User Match","content":"<script>\r\n(function() {\r\n\r\nvar kuid = Krux('get', 'user');\r\n  if(kuid){\r\n  // original google user match tag. will be deprecated june 1, 2020\r\n  new Image().src = 'https://usermatch.krxd.net/um/v2?partner=google';\r\n\r\n  // new google user match where they host the match table. The KUID needs to be base64 encoded, but the ids sent will be regular kuids\r\n  var baseEncodedKuid = btoa(kuid).replace(/=$/, '');\r\n  new Image().src = 'https://cm.g.doubleclick.net/pixel?google_nid=krux_digital&google_cm&google_hm='+baseEncodedKuid;\r\n  }\r\n\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":15,"name":"TheTradeDesk User Match","content":"<script>\r\n(function(){\r\nvar kuid = Krux('get', 'user');\r\nvar consent = Krux('iab:urlParams');\r\nif (kuid) {\r\nif(!consent){\r\nconsent = \"\";\r\n}\r\nvar p = location.protocol == 'https:' ? 'https:' : 'http:';\r\nvar purl = '//match.adsrvr.org/track/cmf/generic?ttd_pid=krux&ttd_tpi=1';\r\n(new Image()).src  = p + purl + consent; \r\n}\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":71,"name":"Xandr Connect","content":"<script>\r\n(function(){\r\n        var kuid = Krux('get', 'user');\r\n        var consent = Krux('iab:urlParams');\r\n        if (kuid) {\r\n            if(!consent){\r\n                consent = \"\";\r\n            }\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl = prefix + '//beacon.krxd.net/usermatch.gif?adnxs_uid=$UID';\r\n            var appnexus_url = '//ib.adnxs.com/getuid?' + kurl + consent;\r\n            (new Image()).src=appnexus_url;\r\n        }\r\n})();\r\n</script>\r\n\r\n<!-- Krux Config:\r\n\r\n-->","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":77,"name":"MediaMath User Match","content":"<script>\r\n(function(){\r\n        var kuid = Krux('get', 'user');\r\n        var consent = Krux('iab:urlParams','gdpr_consent','gdpr',true);\r\n        var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\r\n        if (kuid) {\r\n            if(!consent){\r\n                consent = \"\";\r\n            }\r\n            var url = prefix + '//pixel.mathtag.com/sync/img?redir=' + prefix + '%2F%2Fbeacon.krxd.net%2Fusermatch.gif%3Fpartner%3Dmediamath%26mmuuid%3D%5BMM_UUID%5D' + consent;\r\n            (new Image()).src = url;\r\n        }\r\n    })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":99,"name":"Amazon User Match Pixel","content":"<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n\n  if (kuid) {\n      var partner_url = prefix +'//s.amazon-adsystem.com/ecm3?ex=krux.com&id=' + kuid;\n      new Image().src = partner_url;\n  }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":96,"name":"Signal User Match","content":"<script>\r\n(function(){\r\n\r\n  var kuid = Krux('get', 'user');\r\n  var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n\r\n  if (kuid) {\r\n    new Image().src = prefix + '//s.thebrighttag.com/cs?tp=nC1b0SU&uid=' + kuid;\r\n  }\r\n  \r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true}],"link":{"adslots":{},"bidders":{}}};
  
  for (var i = 0, tags = config.tags, len = tags.length, tag; (tag = tags[i]); ++i) {
    if (String(tag.id) in cs) {
      tag.content = cs[tag.id];
    }
  }

  
  var esiGeo = String(function(){/*
   <esi:include src="/geoip_esi"/>
  */}).replace(/^.*\/\*[^{]+|[^}]+\*\/.*$/g, '');

  if (esiGeo) {
    log('Got a request for:', esiGeo, 'adding geo to config.');
    try {
      config.geo = w.JSON.parse(esiGeo);
    } catch (__) {
      
      log('Unable to parse geo from:', config.geo);
      config.geo = {};
    }
  }



  var proxy = (window.Krux && window.Krux.q && window.Krux.q[0] && window.Krux.q[0][0] === 'proxy');

  if (!proxy || true) {
    

  load('//cdn.krxd.net/ctjs/controltag.js.0631b7d64dbbd3656a8b7368ad227a04', function() {
    log('Loaded stable controltag resource');
    Krux('config', config);
  });

  }

})(window, (function() {
  var obj = {};
  
  return obj;
})());
