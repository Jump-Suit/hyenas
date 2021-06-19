"use strict";var options={},translation={},CONSTANTS={INPUT_MAX_LENGTH:256};Object.freeze(CONSTANTS),translation["ja-JP"]={RESULT_PAGE_TITLE:"{{query}} - {{initialTitle}}",SEARCH_INPUT_PLACEHOLDER_INPUT_WORD:"単語を入力してください",SEARCH_INPUT_SEARCH_BUTTON:"検索",RESULT_HEADER_INFO:"&quot;{{query}}&quot; の検索結果 {{totalCount}}件&nbsp;({{tookTime}}秒)&nbsp;{{currentPage}}ページ目&nbsp;{{resultBeginNum}}件〜{{resultEndNum}}件を表示",RESULT_HEADER_INFO_NO_LENGTH:"&quot;{{query}}&quot; の検索結果 {{totalCount}}件",RESULT_CONTENT_NO_LENGTH:"検索結果はありません。",ERROR_IN_RESULT_GETTING_COMM:"通信エラーが発生しています。",ERROR_IN_RESULT_BAD_REQUEST:"与えられたクエリーは無効です。",RESULT_FILTER_BY:"絞り込み条件",RESULT_FILTER_INPUT_SELECT_ALL:"全て選択",RESULT_FILTER_INPUT_DESELECT_ALL:"全て選択解除"};var translate=function(e,s){return translation[options.locale][e].replace(/{{([^{|}]+)}}/g,function(e,t){return void 0!==s[t]?s[t]:t})},escapeHtml=function(e){return"string"!=typeof e?e:e.replace(/[<>&"'`]/g,function(e){return{"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#39;","`":"&#x60;","?":"&#63;","/":"&#47;"}[e]})},SearchPlus={initialTitle:"",currentPage:1,currentQuery:null,queryChanged:!1,searchState:{search_fields:[],return_fields:[],filters:{}},timeoutTimer:null,init:function(e){var t=this;this.setBasicOpts(e),this.setAdditionalOpts(e),this.processURLQueryStr(window.location.search),this.initialTitle=escapeHtml(document.title),document.addEventListener("DOMContentLoaded",function(){(t.show(),t.currentQuery)?(document.querySelector(".searchplus-query").value=t.currentQuery,1!==t.currentPage?t.getPaginate(t.currentQuery,t.currentPage):t.getResult(t.currentQuery)):null!==t.currentQuery&&""===t.currentQuery&&t.showNoResult("")})},initForm:function(e){var t=this;e.formOnly=!0,this.setBasicOpts(e),document.addEventListener("DOMContentLoaded",function(){t.showForms()})},setBasicOpts:function(e){if((options=e||{}).suggest="boolean"==typeof e.suggest&&e.suggest,options.suggestsSize="number"==typeof e.suggestsSize?e.suggestsSize:5,options.searchButton="boolean"==typeof e.searchButton&&e.searchButton,options.demoMode="boolean"==typeof e.demoMode&&e.demoMode,options.apiHost="string"==typeof e.apiHost?e.apiHost:"",options.apiKey="string"==typeof e.apiKey?e.apiKey:"",options.resultUrl="string"==typeof e.resultUrl?e.resultUrl:null,options.formOnly="boolean"==typeof e.formOnly&&e.formOnly,options.locale="string"==typeof e.locale?e.locale:"ja-JP",""===options.apiHost)return console.log("Error: please set API HOST."),!1},setAdditionalOpts:function(e){return options.resultsSize="number"==typeof e.resultsSize?e.resultsSize:10,options.operator="string"==typeof e.operator?e.operator:"AND",options.sortBy="string"==typeof e.sortBy?e.sortBy:"_score",options.orderBy="string"==typeof e.orderBy?e.orderBy:"desc",options.alias="string"==typeof e.alias?e.alias:"",options.queryType="string"==typeof e.queryType?e.queryType:"default",options.filters=e.filters instanceof Array?e.filters:[],options.filterField="string"==typeof e.filterField?e.filterField:"category",options.paginationShowsAt="string"==typeof e.paginationShowsAt?e.paginationShowsAt:"both",options.resultTitleFieldDefault="_source.title",options.resultContentFieldDefault="_source.content",options.resultLinkLoadTarget="string"==typeof e.resultLinkLoadTarget?e.resultLinkLoadTarget:"same",options.templateId={search:"search_"+options.queryType,aggs:"aggs_"+options.queryType},this.searchState.search_fields=e.searchFields instanceof Array?e.searchFields:[],this.searchState.return_fields=e.returnFields instanceof Array?e.returnFields:[],options.resultUrlField="string"==typeof e.resultUrlField?e.resultUrlField:"_source.source",e.resultTitleField instanceof Array?options.resultTitleField=e.resultTitleField:"string"==typeof e.resultTitleField?options.resultTitleField=[e.resultTitleField]:options.resultTitleField=[],options.resultTitleField.push(options.resultTitleFieldDefault),e.resultContentField instanceof Array?options.resultContentField=e.resultContentField:"string"==typeof e.resultContentField?options.resultContentField=[e.resultContentField]:options.resultContentField=[],options.resultContentField.push(options.resultContentFieldDefault),options.resultContentMaxLength="number"==typeof e.resultContentMaxLength?e.resultContentMaxLength:450,""===options.alias?(console.log("Error: please set alias."),!1):this.searchState.search_fields===[]?(console.log("Error: please set search fields."),!1):this.searchState.return_fields===[]?(console.log("Error: please set return fields."),!1):void 0},show:function(){this.showForms();var e=document.querySelector("searchplus-result"),t=document.createElement("div");t.className="searchplus-result",e.replaceWith(t);var s=document.querySelector("searchplus-result-filter");if(s){var r=document.createElement("div");r.className="searchplus-filter-wrapper",s.replaceWith(r)}},showForms:function(){var e,t=this,s=document.querySelector("searchplus-form"),r=document.createElement("div");if(r.className="searchplus-form-wrapper",(e=document.createElement("form")).className="searchplus-form",e.method="GET",options.formOnly?e.action=options.resultUrl:e.action="",r.appendChild(e),options.demoMode){var n=document.createElement("div");n.className="searchplus-demo-logo-wrapper",n.innerHTML="&nbsp;",e.appendChild(n)}var l=document.createElement("input");l.className="searchplus-query",l.type="text",l.maxLength=CONSTANTS.INPUT_MAX_LENGTH,l.autocomplete="off",options.demoMode&&l.classList.add("searchplus-demo"),l.name="q";var i=document.createElement("input");if(i.type="hidden",i.name="queryType",i.value=options.queryType,e.appendChild(i),l.placeholder=translate("SEARCH_INPUT_PLACEHOLDER_INPUT_WORD"),e.appendChild(l),options.formOnly||e.addEventListener("submit",function(e){l.value||e.preventDefault()}),options.suggest&&e.addEventListener("input",function(e){t.timeoutTimer&&clearTimeout(t.timeoutTimer),t.timeoutTimer=setTimeout(function(){t.querySuggests(e.srcElement.value)},300)}),options.suggest){var a=document.createElement("ul");a.className="searchplus-suggests",a.style.position="absolute",e.appendChild(a)}if(options.searchButton){var o=document.createElement("button");o.className="searchplus-submit",o.innerText=translate("SEARCH_INPUT_SEARCH_BUTTON"),e.appendChild(o),o.type="submit"}s.replaceWith(r)},searchOnEnter:function(e){if(13!==e.keyCode||13===e.keyCode&&(!0===e.shiftKey||!0===e.ctrlKey||!0===e.altKey)||""===e.srcElement.value)return!1;(this.parent?this.parent:this).getResult(e.srcElement.value)},blurInputFocus:function(){document.querySelector(".searchplus-query").blur()},getResult:function(e){if(e){for(var t=document.querySelector(".searchplus-result");t.firstChild;)t.removeChild(t.firstChild);var s=document.createElement("div");s.className="loader",s.innerText="Loading...",t.appendChild(s),this.getSearch(e),document.querySelector("div.searchplus-filter-wrapper")&&this.getFilter(e)}},getSearch:function(s){s=escapeHtml(s);var r=this;this.currentQuery!==s?(r.queryChanged=!0,SearchPlus.searchState.filters={}):r.queryChanged=!1,this.currentPage=1,this.changeURLQryStr({q:escapeHtml(s),p:""},r.queryChanged);var e=(this.currentPage-1)*options.resultsSize,t=this.createSearchRequest("search",s,e),n=t.url,l=t.requestBody;this.httpRequest("POST",n,l,function(e){if(200===e.status||304===e.status){var t=JSON.parse(e.responseText);r.currentQuery=t.reqinfo.q,r.showResult(t,s)}else console.log("POST Request Failed. "+e.statusText),r.errorFinish(e.status)})},showResult:function(e,t){var s=this;this.hideSuggests(),this.blurInputFocus(),document.title=translate("RESULT_PAGE_TITLE",{query:escapeHtml(t),initialTitle:escapeHtml(this.initialTitle)});for(var r=document.querySelector(".searchplus-result");r.firstChild;)r.removeChild(r.firstChild);if(0<e.hits.hits.length){var n=document.createElement("div");n.className="searchplus-result-header";var l=e.took/1e3,i=(this.currentPage-1)*options.resultsSize+1,a=this.currentPage*options.resultsSize>=e.hits.total?e.hits.total:this.currentPage*options.resultsSize;n.innerHTML=translate("RESULT_HEADER_INFO",{query:escapeHtml(t),totalCount:escapeHtml(e.hits.total),tookTime:escapeHtml(l),currentPage:escapeHtml(this.currentPage),resultBeginNum:escapeHtml(i),resultEndNum:escapeHtml(a)}),r.appendChild(n),e.hits.hits.forEach(function(e){s.createResultUnit(e)}),SearchPlus.showPagination(t,SearchPlus.currentPage,e.hits.total)}else this.showNoResult(t);var o=new Event("searched");window.dispatchEvent(o)},createResultUnit:function(e){var t=document.querySelector(".searchplus-result"),s=this.createResultUnitElements(e);t.appendChild(s)},createResultUnitElements:function(e){var t=this,s=document.createElement("div");s.className="searchplus-result-list-unit";var r=document.createElement("div");r.className="searchplus-result-list-unit-header";var n=document.createElement("a");n.href=t.getResultProps(e,options.resultUrlField),n.target="_blank";for(var l="",i=0;i<options.resultTitleField.length;i++)if(void 0!==t.getResultProps(e,options.resultTitleField[i])){l=t.getResultProps(e,options.resultTitleField[i]);break}var a="";l instanceof Array?l.forEach(function(e){a+=e}):"string"!=typeof l&&"number"!=typeof l||(a=l),n.innerHTML=a,n.addEventListener("click",{result:e,parent:t,key:S,handleEvent:t.processLinkClick}),n.addEventListener("touchend",{result:e,parent:t,key:S,handleEvent:t.processLinkClick}),r.appendChild(n),s.appendChild(r);var o=document.createElement("div");o.className="searchplus-result-list-unit-content-wrapper",s.appendChild(o);var u=document.createElement("div");u.className="searchplus-result-list-unit-url",u.innerHTML=decodeURI(SearchPlus.getResultProps(e,options.resultUrlField)),o.appendChild(u);var c=document.createElement("div");c.className="searchplus-result-list-unit-content";var p=null;for(i=0;i<options.resultContentField.length;i++)if(void 0!==t.getResultProps(e,options.resultContentField[i])){p=t.getResultProps(e,options.resultContentField[i]);break}if(p instanceof Array){for(var d=0,h=0;h<p.length;h++){var m=document.createElement("span");if(d+p[h].replace(/<\/?mark>/i,"").length>=options.resultContentMaxLength){for(var f=options.resultContentMaxLength-d,g=Array.from(p[h]),y="",S=0,E=1,v=!1,T=!1,C=!1;E<=f&&S<g.length;)y+=g[S],"<"===g[S]?v=T=!0:T&&v&&"/"===g[S]?C=!0:">"===g[S]?(C&&(C=T=!1),v=!1):v||(T&&E===f&&f++,E++),S++;m.innerHTML=y,h=p.length}else m.innerHTML=p[h],d+=p[h].replace(/<\/?mark>/i,"").length;c.appendChild(m);var L=document.createElement("span");L.innerHTML="...",c.appendChild(L)}c.lastElementChild.remove()}else if("string"==typeof p||"number"==typeof p){var R,_;y="",g=Array.from(p);_=options.resultContentMaxLength<=g.length?(R=options.resultContentMaxLength,"..."):(R=g.length,"");for(var P=0;P<R;P++)y+=g[P];c.innerHTML=y+_}return o.appendChild(c),s},showNoResult:function(e){var t=document.querySelector(".searchplus-result"),s=document.createElement("div");s.className="searchplus-result-header ",s.innerHTML=translate("RESULT_HEADER_INFO_NO_LENGTH",{query:escapeHtml(e),totalCount:0}),t.appendChild(s);var r=document.createElement("div");r.className="searchplus-no-result",r.innerHTML=translate("RESULT_CONTENT_NO_LENGTH",{query:escapeHtml(e)}),t.appendChild(r)},processLinkClick:function(e){var t;e.preventDefault();var s=((t=this.parent?this.parent:this).currentPage-1)*options.resultsSize+this.key+1,r=t.getResultProps(this.result,options.resultTitleFieldDefault),n="";r instanceof Array?r.forEach(function(e){n+=e}):"string"!=typeof r&&"number"!=typeof r||(n=r),t.postLog(t.currentQuery,s,this.result._id,n,t.getResultProps(this.result,options.resultUrlField),e)},errorFinish:function(e){for(var t=document.querySelector(".searchplus-result");t.firstChild;)t.removeChild(t.firstChild);var s=document.createElement("div");s.className="searchplus-error-result",s.innerHTML=translate(400===e?"ERROR_IN_RESULT_BAD_REQUEST":"ERROR_IN_RESULT_GETTING_COMM"),t.appendChild(s)},getResultProps:function(e,t){var s=new RegExp("\\.");return new RegExp("\\[").test(t)?(t=t.replace("]","")).split("[").reduce(function(e,t){return e&&e[t]?e[t]:void 0},e):s.test(t)?t.split(".").reduce(function(e,t){return e&&e[t]?e[t]:void 0},e):e[t]},postLog:function(e,t,s,r,n,l){e=escapeHtml(e);var i=options.apiHost+"/api/history/alias/"+options.alias,a={searchq:e,searchno:t,docid:s,name:r};this.httpRequest("POST",i,a,function(e){200!==e.status&&console.log("POST Request Failed. "+e.statusText);var t="blank"===options.resultLinkLoadTarget;"touchend"===l.type&&(t=!1),SearchPlus.navigate(n,t)})},navigate:function(e,t){var s=escapeHtml(e);t?window.open(s,"_blank"):window.location.href=s},showPagination:function(s,r,e){var t=Math.ceil(e/options.resultsSize),n=[];if(5<=t)for(var l=-2;l<=2;l++)n.push(r+l);else for(var i=0;i<t;i++)n.push(r+i);for(l in n)n[l]<=0?n[l]=n[n.length-1]-n[l]+1:n[l]>t&&(n[l]=n[0]-(n[l]-t));n.sort(function(e,t){return e<t?-1:t<e?1:0});var a,o,u=document.querySelector(".searchplus-result");switch(options.paginationShowsAt){case"top":a=1,o=2;break;case"bottom":a=0,o=1;break;case"none":o=a=0;break;case"both":default:a=0,o=2}for(var c=a;c<o;c++){var p=document.createElement("div");p.className="searchplus-result-pagination";var d=document.createElement("button");d.className="searchplus-btn",d.innerHTML="&lt;",1===r&&(d.disabled=!0),1===t&&(d.style.display="none"),p.appendChild(d),d.addEventListener("click",function(){SearchPlus.getPaginate(s,r-1)},!1),n.forEach(function(e){var t=document.createElement("button");t.className="searchplus-btn",t.innerHTML=escapeHtml(e),r===e&&t.classList.add("active"),p.appendChild(t),t.addEventListener("click",function(){SearchPlus.getPaginate(s,e)},!1)});var h=document.createElement("button");h.className="searchplus-btn",h.innerHTML="&gt;",r===t&&(h.disabled=!0),1===t&&(h.style.display="none"),p.appendChild(h),h.addEventListener("click",function(){SearchPlus.getPaginate(s,r+1)},!1),0===c&&u.appendChild(p),1===c&&u.insertBefore(p,u.firstChild.nextSibling)}},getPaginate:function(e,t){this.changeURLQryStr({q:escapeHtml(e),p:t},!0);for(var s=document.querySelector(".searchplus-result");s.firstChild;)s.removeChild(s.firstChild);var r=document.createElement("div");r.className="loader",r.innerText="Loading...",s.appendChild(r),this.getNext(e,t),document.querySelector("div.searchplus-filter-wrapper")&&this.getFilter(e)},getNext:function(s,e){s=escapeHtml(s);var r=this;e="number"==typeof e?e:1,SearchPlus.currentPage=e;var t=options.resultsSize*(e-1),n=this.createSearchRequest("next",s,t),l=n.url,i=n.requestBody;this.httpRequest("POST",l,i,function(e){if(200===e.status||304===e.status){var t=JSON.parse(e.responseText);window.scrollTo(0,0),SearchPlus.showResult(t,s)}else console.log("GET Request Failed. "+e.statusText),r.errorFinish(e.status)}),document.querySelector("div.searchplus-filter-wrapper")&&this.getFilter(s)},createSearchRequest:function(e,t,s){return{url:options.apiHost+"/api/"+e+"/alias/"+options.alias+"/query/"+options.templateId.search+("?q="+escapeHtml(encodeURIComponent(t).replace("%20","+"))+"&from="+s+"&size="+options.resultsSize+"&op="+options.operator+"&so="+options.orderBy+"&sf="+options.sortBy),requestBody:{search_fields:this.searchState.search_fields,return_fields:this.searchState.return_fields,filter_field:options.filterField,filter_select:this.searchState.filters[options.filterField]||options.filters}}},getFilter:function(e){e=escapeHtml(e);var t=options.apiHost+"/api/aggs/alias/"+options.alias+"/query/"+options.templateId.aggs,s="?q="+e,r={search_fields:[],filter_field:options.filterField,filter_select:[]};SearchPlus.searchState.search_fields.forEach(function(e){r.search_fields.push(e)});this.httpRequest("POST",t+s,r,function(e){if(200===e.status||304===e.status){var t=JSON.parse(e.responseText);SearchPlus.showFilter(t)}else 404===e.status?SearchPlus.hideFilter():console.log("POST Request Failed. "+e.statusText)})},showFilter:function(e){var i=this,a=options.filterField;SearchPlus.hideFilter();var t=document.querySelector(".searchplus-filter-wrapper"),s=document.createElement("ul");if(s.className="searchplus-filter-group-wrapper","aggregations"in e&&a in e.aggregations){var r=document.createElement("li"),n=document.createElement("span");n.className="searchplus-filter-group-title",n.innerHTML=translate("RESULT_FILTER_BY"),r.appendChild(n);var o=document.createElement("ul");o.className="searchplus-filter-list",r.appendChild(o),e.aggregations[a].buckets.forEach(function(e){var t=document.createElement("label");o.appendChild(t);var s=document.createElement("li"),r=document.createElement("input");r.type="checkbox",r.name=escapeHtml(a+"."+e.key),Object.keys(SearchPlus.searchState.filters).length&&0<=SearchPlus.searchState.filters[a].indexOf(e.key)?r.checked=!0:r.checked=!1,r.addEventListener("click",{parent:i,handleEvent:i.changeFilter},!1),r.className="searchplus-filter-input",r.value=escapeHtml(e.key),s.appendChild(r);var n=document.createElement("span");n.className="searchplus-filter-name",n.innerHTML=escapeHtml(e.key),s.appendChild(n);var l=document.createElement("span");l.className="searchplus-filter-count",l.innerHTML=escapeHtml("("+e.doc_count+")"),n.appendChild(l),t.appendChild(s)}),s.appendChild(r)}var l=document.createElement("li"),u=document.createElement("button");u.className="searchplus-filter-button",u.innerText=translate("RESULT_FILTER_INPUT_SELECT_ALL"),u.addEventListener("click",{parent:i,handleEvent:SearchPlus.selectAllFilters},!1),l.appendChild(u);var c=document.createElement("button");c.className="searchplus-filter-button",c.innerText=translate("RESULT_FILTER_INPUT_DESELECT_ALL"),c.addEventListener("click",{parent:this,handleEvent:SearchPlus.deselectAllFilters},!1),l.appendChild(c),s.appendChild(l),t.appendChild(s)},changeFilter:function(){var e;(e=this.parent?this.parent:this).searchState.filters||(e.searchState.filters={});var t=document.getElementsByClassName("searchplus-filter-input");SearchPlus.searchState.filters[options.filterField]=[],options.filterField in SearchPlus.searchState.filters&&[].forEach.call(t,function(e){if(e.checked){var t=e.name.split(".");SearchPlus.searchState.filters[options.filterField].push(t[1])}})},selectAllFilters:function(){SearchPlus.changeAllFilterStatuses(!0)},deselectAllFilters:function(){SearchPlus.changeAllFilterStatuses(!1)},changeAllFilterStatuses:function(t){var e;e=this.parent?this.parent:this;var s=document.getElementsByClassName("searchplus-filter-input");[].forEach.call(s,function(e){e.checked=t}),e.changeFilter()},hideFilter:function(){for(var e=document.querySelector(".searchplus-filter-wrapper");e.firstChild;)e.removeChild(e.firstChild)},querySuggests:function(e){if(e=escapeHtml(e)){var t=options.apiHost+"/api/suggest/alias/"+options.alias,s="?q="+e+"&size="+options.suggestsSize;this.httpRequest("GET",t+s,null,function(e){if(200===e.status||304===e.status){var t=JSON.parse(e.responseText);SearchPlus.showSuggests(t)}else 404===e.status?SearchPlus.hideSuggests():console.log("GET Request Failed. "+e.statusText)})}else SearchPlus.hideSuggests()},showSuggests:function(e){for(var t=document.querySelector(".searchplus-query"),s=document.querySelector(".searchplus-suggests");s.firstChild;)s.removeChild(s.firstChild);e&&0<e.aggregations.keywords.buckets.length?(e.aggregations.keywords.buckets.forEach(function(e){var t=document.createElement("li");t.innerText=e.key,s.appendChild(t)}),SearchPlus.adjustPosSuggests(),s.style.display="block",t.addEventListener("keydown",SearchPlus.selectSuggest,!1),document.addEventListener("click",SearchPlus.processSuggestClick,!1),document.addEventListener("touchend",SearchPlus.processSuggestClick,!1)):SearchPlus.hideSuggests()},adjustPosSuggests:function(){var e=document.querySelector(".searchplus-suggests"),t=document.querySelector(".searchplus-query").getBoundingClientRect();if(options.demoMode){var s=document.querySelector(".searchplus-demo-logo-wrapper");e.style.left=(s.getBoundingClientRect().width+10).toString()+"px"}else e.style.left="0px";e.style.top=(t.height+6).toString()+"px",e.style.width=t.width+"px",e.style.display="block"},processSuggestClick:function(e){e.srcElement.parentNode&&e.srcElement.parentNode.className&&"searchplus-suggests"===e.srcElement.parentNode.className&&(SearchPlus.completeInputFromSuggest(e.srcElement.innerText),"touchend"===e.type&&(options.formOnly?document.querySelector(".searchplus-form").submit():SearchPlus.getResult(e.srcElement.innerText)));"searchplus-query"!==e.srcElement.className&&SearchPlus.hideSuggests()},hideSuggests:function(){if(options.suggest){var e=document.querySelector(".searchplus-suggests");for(e.style.display="none";e.firstChild;)e.removeChild(e.firstChild);document.querySelector(".searchplus-query").removeEventListener("keydown",SearchPlus.selectSuggest,!1),document.removeEventListener("click",SearchPlus.processSuggestClick,!1),document.removeEventListener("touchend",SearchPlus.processSuggestClick,!1)}},selectSuggest:function(e){var t=document.querySelector(".searchplus-suggests"),s=document.querySelector(".searchplus-query");38!==e.keyCode&&40!==e.keyCode&&13!==e.keyCode&&27!==e.keyCode&&9!==e.keyCode||e.preventDefault();var r=t.querySelector(".selected");if(r){if((38===e.keyCode||e.shiftKey&&9===e.keyCode)&&r.previousElementSibling&&(r.classList.remove("selected"),r.previousElementSibling.classList.add("selected")),40!==e.keyCode&&9!==e.keyCode||r.nextElementSibling&&(r.classList.remove("selected"),r.nextElementSibling.classList.add("selected")),27===e.keyCode&&SearchPlus.hideSuggests(),13===e.keyCode){var n=r.innerText;SearchPlus.completeInputFromSuggest(n),s.addEventListener("keypress",{parent:this,handleEvent:this.searchOnEnter})}}else(38===e.keyCode||e.shiftKey&&9===e.keyCode)&&t.lastElementChild.classList.add("selected"),40!==e.keyCode&&9!==e.keyCode||t.firstElementChild.classList.add("selected"),27===e.keyCode&&SearchPlus.hideSuggests(),38!==e.keyCode&&40!==e.keyCode&&27!==e.keyCode||s.removeEventListener("keypress",SearchPlus.searchOnEnter,!1),13===e.keyCode&&SearchPlus.searchOnEnter(e)},processURLQueryStr:function(e){var r=this;e.slice(1).split("&").forEach(function(e){var t=e.split("="),s="";t[1]&&(s=escapeHtml(decodeURIComponent(t[1]))),"q"===t[0]&&(r.currentQuery=String(s).replace(/\+/g," ")),"p"===t[0]&&(r.currentPage=Number(s)),"queryType"===t[0]&&(options.queryType=String(s),options.templateId={search:"search_"+options.queryType,aggs:"aggs_"+options.queryType})})},changeURLQryStr:function(e,t){var s=escapeHtml(window.location.search).slice(1).split("&"),r=[];for(var n in s.forEach(function(e){var t=e.split("=");t[0]&&""!==t[1]&&(r[t[0]]=t[1])}),e)""!==e[n]?r[n]=e[n]:delete r[n];var l="";for(var i in r)l+=encodeURIComponent(i)+"="+encodeURIComponent(r[i])+"&";l="?"+l.slice(0,-1),t&&history.pushState(null,null,l)},completeInputFromSuggest:function(e){document.querySelector(".searchplus-query").value=escapeHtml(e),SearchPlus.hideSuggests()},httpRequest:function(e,t,s,r){var n=new XMLHttpRequest;n.onreadystatechange=function(){4===n.readyState&&r(n)},n.open(e,t,!0),n.setRequestHeader("Content-Type","application/json"),n.send(JSON.stringify(s))},fixedEncodeURIComponent:function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16)})}};