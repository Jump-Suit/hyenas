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
 * jQuery UI 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (https://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * https://jquery.org/license
 *
 * https://docs.jquery.com/UI
 */
(function(e,d){function b(f,c){var g=f.nodeName.toLowerCase();
if("area"===g){c=f.parentNode;
g=c.name;
if(!f.href||!g||c.nodeName.toLowerCase()!=="map"){return false
}f=e("img[usemap=#"+g+"]")[0];
return !!f&&a(f)
}return(/input|select|textarea|button|object/.test(g)?!f.disabled:"a"==g?f.href||c:c)&&a(f)
}function a(c){return !e(c).parents().andSelf().filter(function(){return e.curCSS(this,"visibility")==="hidden"||e.expr.filters.hidden(this)
}).length
}e.ui=e.ui||{};
if(!e.ui.version){e.extend(e.ui,{version:"1.8.16",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});
e.fn.extend({propAttr:e.fn.prop||e.fn.attr,_focus:e.fn.focus,focus:function(f,c){return typeof f==="number"?this.each(function(){var g=this;
setTimeout(function(){e(g).focus();
c&&c.call(g)
},f)
}):this._focus.apply(this,arguments)
},scrollParent:function(){var c;
c=e.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.curCSS(this,"position",1))&&/(auto|scroll)/.test(e.curCSS(this,"overflow",1)+e.curCSS(this,"overflow-y",1)+e.curCSS(this,"overflow-x",1))
}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.curCSS(this,"overflow",1)+e.curCSS(this,"overflow-y",1)+e.curCSS(this,"overflow-x",1))
}).eq(0);
return/fixed/.test(this.css("position"))||!c.length?e(document):c
},zIndex:function(f){if(f!==d){return this.css("zIndex",f)
}if(this.length){f=e(this[0]);
for(var c;
f.length&&f[0]!==document;
){c=f.css("position");
if(c==="absolute"||c==="relative"||c==="fixed"){c=parseInt(f.css("zIndex"),10);
if(!isNaN(c)&&c!==0){return c
}}f=f.parent()
}}return 0
},disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(c){c.preventDefault()
})
},enableSelection:function(){return this.unbind(".ui-disableSelection")
}});
e.each(["Width","Height"],function(f,c){function l(p,o,h,q){e.each(k,function(){o-=parseFloat(e.curCSS(p,"padding"+this,true))||0;
if(h){o-=parseFloat(e.curCSS(p,"border"+this+"Width",true))||0
}if(q){o-=parseFloat(e.curCSS(p,"margin"+this,true))||0
}});
return o
}var k=c==="Width"?["Left","Right"]:["Top","Bottom"],j=c.toLowerCase(),g={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};
e.fn["inner"+c]=function(h){if(h===d){return g["inner"+c].call(this)
}return this.each(function(){e(this).css(j,l(this,h)+"px")
})
};
e.fn["outer"+c]=function(m,h){if(typeof m!=="number"){return g["outer"+c].call(this,m)
}return this.each(function(){e(this).css(j,l(this,m,true,h)+"px")
})
}
});
e.extend(e.expr[":"],{data:function(f,c,g){return !!e.data(f,g[3])
},focusable:function(c){return b(c,!isNaN(e.attr(c,"tabindex")))
},tabbable:function(f){var c=e.attr(f,"tabindex"),g=isNaN(c);
return(g||c>=0)&&b(f,!g)
}});
e(function(){var f=document.body,c=f.appendChild(c=document.createElement("div"));
e.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});
e.support.minHeight=c.offsetHeight===100;
e.support.selectstart="onselectstart" in c;
f.removeChild(c).style.display="none"
});
e.extend(e.ui,{plugin:{add:function(f,c,h){f=e.ui[f].prototype;
for(var g in h){f.plugins[g]=f.plugins[g]||[];
f.plugins[g].push([c,h[g]])
}},call:function(f,c,h){if((c=f.plugins[c])&&f.element[0].parentNode){for(var g=0;
g<c.length;
g++){f.options[c[g][0]]&&c[g][1].apply(f.element,h)
}}}},contains:function(f,c){return document.compareDocumentPosition?f.compareDocumentPosition(c)&16:f!==c&&f.contains(c)
},hasScroll:function(f,c){if(e(f).css("overflow")==="hidden"){return false
}c=c&&c==="left"?"scrollLeft":"scrollTop";
var g=false;
if(f[c]>0){return true
}f[c]=1;
g=f[c]>0;
f[c]=0;
return g
},isOverAxis:function(f,c,g){return f>c&&f<c+g
},isOver:function(f,c,l,k,j,g){return e.ui.isOverAxis(f,l,j)&&e.ui.isOverAxis(c,k,g)
}})
}})(jQuery);
/*!
 * jQuery UI Widget 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (https://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * https://jquery.org/license
 *
 * https://docs.jquery.com/UI/Widget
 */
(function(a,e){if(a.cleanData){var d=a.cleanData;
a.cleanData=function(b){for(var h=0,g;
(g=b[h])!=null;
h++){try{a(g).triggerHandler("remove")
}catch(f){}}d(b)
}
}else{var c=a.fn.remove;
a.fn.remove=function(b,f){return this.each(function(){if(!f){if(!b||a.filter(b,[this]).length){a("*",this).add([this]).each(function(){try{a(this).triggerHandler("remove")
}catch(g){}})
}}return c.call(a(this),b,f)
})
}
}a.widget=function(b,k,j){var h=b.split(".")[0],g;
b=b.split(".")[1];
g=h+"-"+b;
if(!j){j=k;
k=a.Widget
}a.expr[":"][g]=function(f){return !!a.data(f,b)
};
a[h]=a[h]||{};
a[h][b]=function(f,l){arguments.length&&this._createWidget(f,l)
};
k=new k;
k.options=a.extend(true,{},k.options);
a[h][b].prototype=a.extend(true,k,{namespace:h,widgetName:b,widgetEventPrefix:a[h][b].prototype.widgetEventPrefix||b,widgetBaseClass:g},j);
a.widget.bridge(b,a[h][b])
};
a.widget.bridge=function(b,f){a.fn[b]=function(l){var k=typeof l==="string",j=Array.prototype.slice.call(arguments,1),g=this;
l=!k&&j.length?a.extend.apply(null,[true,l].concat(j)):l;
if(k&&l.charAt(0)==="_"){return g
}k?this.each(function(){var m=a.data(this,b),h=m&&a.isFunction(m[l])?m[l].apply(m,j):m;
if(h!==m&&h!==e){g=h;
return false
}}):this.each(function(){var h=a.data(this,b);
h?h.option(l||{})._init():a.data(this,b,new f(l,this))
});
return g
}
};
a.Widget=function(b,f){arguments.length&&this._createWidget(b,f)
};
a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(b,g){a.data(g,this.widgetName,this);
this.element=a(g);
this.options=a.extend(true,{},this.options,this._getCreateOptions(),b);
var f=this;
this.element.bind("remove."+this.widgetName,function(){f.destroy()
});
this._create();
this._trigger("create");
this._init()
},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]
},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);
this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")
},widget:function(){return this.element
},option:function(b,g){var f=b;
if(arguments.length===0){return a.extend({},this.options)
}if(typeof b==="string"){if(g===e){return this.options[b]
}f={};
f[b]=g
}this._setOptions(f);
return this
},_setOptions:function(b){var f=this;
a.each(b,function(h,g){f._setOption(h,g)
});
return this
},_setOption:function(b,f){this.options[b]=f;
if(b==="disabled"){this.widget()[f?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",f)
}return this
},enable:function(){return this._setOption("disabled",false)
},disable:function(){return this._setOption("disabled",true)
},_trigger:function(b,k,j){var h=this.options[b];
k=a.Event(k);
k.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase();
j=j||{};
if(k.originalEvent){b=a.event.props.length;
for(var g;
b;
){g=a.event.props[--b];
k[g]=k.originalEvent[g]
}}this.element.trigger(k,j);
return !(a.isFunction(h)&&h.call(this.element[0],k,j)===false||k.isDefaultPrevented())
}}
})(jQuery);
/*!
 * jQuery UI Mouse 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (https://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * https://jquery.org/license
 *
 * https://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function(a){var c=false;
a(document).mouseup(function(){c=false
});
a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var b=this;
this.element.bind("mousedown."+this.widgetName,function(d){return b._mouseDown(d)
}).bind("click."+this.widgetName,function(d){if(true===a.data(d.target,b.widgetName+".preventClickEvent")){a.removeData(d.target,b.widgetName+".preventClickEvent");
d.stopImmediatePropagation();
return false
}});
this.started=false
},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)
},_mouseDown:function(b){if(!c){this._mouseStarted&&this._mouseUp(b);
this._mouseDownEvent=b;
var h=this,e=b.which==1,d=typeof this.options.cancel=="string"&&b.target.nodeName?a(b.target).closest(this.options.cancel).length:false;
if(!e||d||!this._mouseCapture(b)){return true
}this.mouseDelayMet=!this.options.delay;
if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){h.mouseDelayMet=true
},this.options.delay)
}if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=this._mouseStart(b)!==false;
if(!this._mouseStarted){b.preventDefault();
return true
}}true===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent");
this._mouseMoveDelegate=function(f){return h._mouseMove(f)
};
this._mouseUpDelegate=function(f){return h._mouseUp(f)
};
a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);
b.preventDefault();
return c=true
}},_mouseMove:function(b){if(a.browser.msie&&!(document.documentMode>=9)&&!b.button){return this._mouseUp(b)
}if(this._mouseStarted){this._mouseDrag(b);
return b.preventDefault()
}if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==false)?this._mouseDrag(b):this._mouseUp(b)
}return !this._mouseStarted
},_mouseUp:function(b){a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;
b.target==this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",true);
this._mouseStop(b)
}return false
},_mouseDistanceMet:function(b){return Math.max(Math.abs(this._mouseDownEvent.pageX-b.pageX),Math.abs(this._mouseDownEvent.pageY-b.pageY))>=this.options.distance
},_mouseDelayMet:function(){return this.mouseDelayMet
},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true
}})
})(jQuery);
(function(f){f.ui=f.ui||{};
var e=/left|center|right/,d=/top|center|bottom/,b=f.fn.position,a=f.fn.offset;
f.fn.position=function(c){if(!c||!c.of){return b.apply(this,arguments)
}c=f.extend({},c);
var l=f(c.of),r=l[0],p=(c.collision||"flip").split(" "),q=c.offset?c.offset.split(" "):[0,0],o,m,n;
if(r.nodeType===9){o=l.width();
m=l.height();
n={top:0,left:0}
}else{if(r.setTimeout){o=l.width();
m=l.height();
n={top:l.scrollTop(),left:l.scrollLeft()}
}else{if(r.preventDefault){c.at="left top";
o=m=0;
n={top:c.of.pageY,left:c.of.pageX}
}else{o=l.outerWidth();
m=l.outerHeight();
n=l.offset()
}}}f.each(["my","at"],function(){var g=(c[this]||"").split(" ");
if(g.length===1){g=e.test(g[0])?g.concat(["center"]):d.test(g[0])?["center"].concat(g):["center","center"]
}g[0]=e.test(g[0])?g[0]:"center";
g[1]=d.test(g[1])?g[1]:"center";
c[this]=g
});
if(p.length===1){p[1]=p[0]
}q[0]=parseInt(q[0],10)||0;
if(q.length===1){q[1]=q[0]
}q[1]=parseInt(q[1],10)||0;
if(c.at[0]==="right"){n.left+=o
}else{if(c.at[0]==="center"){n.left+=o/2
}}if(c.at[1]==="bottom"){n.top+=m
}else{if(c.at[1]==="center"){n.top+=m/2
}}n.left+=q[0];
n.top+=q[1];
return this.each(function(){var x=f(this),s=x.outerWidth(),k=x.outerHeight(),j=parseInt(f.curCSS(this,"marginLeft",true))||0,h=parseInt(f.curCSS(this,"marginTop",true))||0,z=s+j+(parseInt(f.curCSS(this,"marginRight",true))||0),y=k+h+(parseInt(f.curCSS(this,"marginBottom",true))||0),u=f.extend({},n),g;
if(c.my[0]==="right"){u.left-=s
}else{if(c.my[0]==="center"){u.left-=s/2
}}if(c.my[1]==="bottom"){u.top-=k
}else{if(c.my[1]==="center"){u.top-=k/2
}}u.left=Math.round(u.left);
u.top=Math.round(u.top);
g={left:u.left-j,top:u.top-h};
f.each(["left","top"],function(w,v){f.ui.position[p[w]]&&f.ui.position[p[w]][v](u,{targetWidth:o,targetHeight:m,elemWidth:s,elemHeight:k,collisionPosition:g,collisionWidth:z,collisionHeight:y,offset:q,my:c.my,at:c.at})
});
f.fn.bgiframe&&x.bgiframe();
x.offset(f.extend(u,{using:c.using}))
})
};
f.ui.position={fit:{left:function(c,g){var h=f(window);
h=g.collisionPosition.left+g.collisionWidth-h.width()-h.scrollLeft();
c.left=h>0?c.left-h:Math.max(c.left-g.collisionPosition.left,c.left)
},top:function(c,g){var h=f(window);
h=g.collisionPosition.top+g.collisionHeight-h.height()-h.scrollTop();
c.top=h>0?c.top-h:Math.max(c.top-g.collisionPosition.top,c.top)
}},flip:{left:function(c,j){if(j.at[0]!=="center"){var n=f(window);
n=j.collisionPosition.left+j.collisionWidth-n.width()-n.scrollLeft();
var l=j.my[0]==="left"?-j.elemWidth:j.my[0]==="right"?j.elemWidth:0,m=j.at[0]==="left"?j.targetWidth:-j.targetWidth,k=-2*j.offset[0];
c.left+=j.collisionPosition.left<0?l+m+k:n>0?l+m+k:0
}},top:function(c,j){if(j.at[1]!=="center"){var n=f(window);
n=j.collisionPosition.top+j.collisionHeight-n.height()-n.scrollTop();
var l=j.my[1]==="top"?-j.elemHeight:j.my[1]==="bottom"?j.elemHeight:0,m=j.at[1]==="top"?j.targetHeight:-j.targetHeight,k=-2*j.offset[1];
c.top+=j.collisionPosition.top<0?l+m+k:n>0?l+m+k:0
}}}};
if(!f.offset.setOffset){f.offset.setOffset=function(c,j){if(/static/.test(f.curCSS(c,"position"))){c.style.position="relative"
}var n=f(c),l=n.offset(),m=parseInt(f.curCSS(c,"top",true),10)||0,k=parseInt(f.curCSS(c,"left",true),10)||0;
l={top:j.top-l.top+m,left:j.left-l.left+k};
"using" in j?j.using.call(c,l):n.css(l)
};
f.fn.offset=function(c){var g=this[0];
if(!g||!g.ownerDocument){return null
}if(c){return this.each(function(){f.offset.setOffset(this,c)
})
}return a.call(this)
}
}})(jQuery);
(function(a){a.widget("ui.draggable",a.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))){this.element[0].style.position="relative"
}this.options.addClasses&&this.element.addClass("ui-draggable");
this.options.disabled&&this.element.addClass("ui-draggable-disabled");
this._mouseInit()
},destroy:function(){if(this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
this._mouseDestroy();
return this
}},_mouseCapture:function(d){var c=this.options;
if(this.helper||c.disabled||a(d.target).is(".ui-resizable-handle")){return false
}this.handle=this._getHandle(d);
if(!this.handle){return false
}if(c.iframeFix){a(c.iframeFix===true?"iframe":c.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(a(this).offset()).appendTo("body")
})
}return true
},_mouseStart:function(d){var c=this.options;
this.helper=this._createHelper(d);
this._cacheHelperProportions();
if(a.ui.ddmanager){a.ui.ddmanager.current=this
}this._cacheMargins();
this.cssPosition=this.helper.css("position");
this.scrollParent=this.helper.scrollParent();
this.offset=this.positionAbs=this.element.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
a.extend(this.offset,{click:{left:d.pageX-this.offset.left,top:d.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this.position=this._generatePosition(d);
this.originalPageX=d.pageX;
this.originalPageY=d.pageY;
c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt);
c.containment&&this._setContainment();
if(this._trigger("start",d)===false){this._clear();
return false
}this._cacheHelperProportions();
a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,d);
this.helper.addClass("ui-draggable-dragging");
this._mouseDrag(d,true);
a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,d);
return true
},_mouseDrag:function(d,c){this.position=this._generatePosition(d);
this.positionAbs=this._convertPositionTo("absolute");
if(!c){c=this._uiHash();
if(this._trigger("drag",d,c)===false){this._mouseUp({});
return false
}this.position=c.position
}if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"
}a.ui.ddmanager&&a.ui.ddmanager.drag(this,d);
return false
},_mouseStop:function(e){var d=false;
if(a.ui.ddmanager&&!this.options.dropBehaviour){d=a.ui.ddmanager.drop(this,e)
}if(this.dropped){d=this.dropped;
this.dropped=false
}if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original"){return false
}if(this.options.revert=="invalid"&&!d||this.options.revert=="valid"&&d||this.options.revert===true||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,d)){var f=this;
a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){f._trigger("stop",e)!==false&&f._clear()
})
}else{this._trigger("stop",e)!==false&&this._clear()
}return false
},_mouseUp:function(b){this.options.iframeFix===true&&a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)
});
a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b);
return a.ui.mouse.prototype._mouseUp.call(this,b)
},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();
return this
},_getHandle:function(d){var c=!this.options.handle||!a(this.options.handle,this.element).length?true:false;
a(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==d.target){c=true
}});
return c
},_createHelper:function(d){var c=this.options;
d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[d])):c.helper=="clone"?this.element.clone().removeAttr("id"):this.element;
d.parents("body").length||d.appendTo(c.appendTo=="parent"?this.element[0].parentNode:c.appendTo);
d[0]!=this.element[0]&&!/(fixed|absolute)/.test(d.css("position"))&&d.css("position","absolute");
return d
},_adjustOffsetFromHelper:function(b){if(typeof b=="string"){b=b.split(" ")
}if(a.isArray(b)){b={left:+b[0],top:+b[1]||0}
}if("left" in b){this.offset.click.left=b.left+this.margins.left
}if("right" in b){this.offset.click.left=this.helperProportions.width-b.right+this.margins.left
}if("top" in b){this.offset.click.top=b.top+this.margins.top
}if("bottom" in b){this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top
}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
var b=this.offsetParent.offset();
if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])){b.left+=this.scrollParent.scrollLeft();
b.top+=this.scrollParent.scrollTop()
}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie){b={top:0,left:0}
}return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var b=this.element.position();
return{top:b.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:b.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}
}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var e=this.options;
if(e.containment=="parent"){e.containment=this.helper[0].parentNode
}if(e.containment=="document"||e.containment=="window"){this.containment=[e.containment=="document"?0:a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e.containment=="document"?0:a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(e.containment=="document"?0:a(window).scrollLeft())+a(e.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(e.containment=="document"?0:a(window).scrollTop())+(a(e.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
}if(!/^(document|window|parent)$/.test(e.containment)&&e.containment.constructor!=Array){e=a(e.containment);
var d=e[0];
if(d){e.offset();
var f=a(d).css("overflow")!="hidden";
this.containment=[(parseInt(a(d).css("borderLeftWidth"),10)||0)+(parseInt(a(d).css("paddingLeft"),10)||0),(parseInt(a(d).css("borderTopWidth"),10)||0)+(parseInt(a(d).css("paddingTop"),10)||0),(f?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(a(d).css("borderLeftWidth"),10)||0)-(parseInt(a(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(f?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(a(d).css("borderTopWidth"),10)||0)-(parseInt(a(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];
this.relative_container=e
}}else{if(e.containment.constructor==Array){this.containment=e.containment
}}},_convertPositionTo:function(e,d){if(!d){d=this.position
}e=e=="absolute"?1:-1;
var h=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(h[0].tagName);
return{top:d.top+this.offset.relative.top*e+this.offset.parent.top*e-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:h.scrollTop())*e),left:d.left+this.offset.relative.left*e+this.offset.parent.left*e-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:h.scrollLeft())*e)}
},_generatePosition:function(j){var d=this.options,o=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,m=/(html|body)/i.test(o[0].tagName),n=j.pageX,k=j.pageY;
if(this.originalPosition){var l;
if(this.containment){if(this.relative_container){l=this.relative_container.offset();
l=[this.containment[0]+l.left,this.containment[1]+l.top,this.containment[2]+l.left,this.containment[3]+l.top]
}else{l=this.containment
}if(j.pageX-this.offset.click.left<l[0]){n=l[0]+this.offset.click.left
}if(j.pageY-this.offset.click.top<l[1]){k=l[1]+this.offset.click.top
}if(j.pageX-this.offset.click.left>l[2]){n=l[2]+this.offset.click.left
}if(j.pageY-this.offset.click.top>l[3]){k=l[3]+this.offset.click.top
}}if(d.grid){k=d.grid[1]?this.originalPageY+Math.round((k-this.originalPageY)/d.grid[1])*d.grid[1]:this.originalPageY;
k=l?!(k-this.offset.click.top<l[1]||k-this.offset.click.top>l[3])?k:!(k-this.offset.click.top<l[1])?k-d.grid[1]:k+d.grid[1]:k;
n=d.grid[0]?this.originalPageX+Math.round((n-this.originalPageX)/d.grid[0])*d.grid[0]:this.originalPageX;
n=l?!(n-this.offset.click.left<l[0]||n-this.offset.click.left>l[2])?n:!(n-this.offset.click.left<l[0])?n-d.grid[0]:n+d.grid[0]:n
}}return{top:k-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():m?0:o.scrollTop()),left:n-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():m?0:o.scrollLeft())}
},_clear:function(){this.helper.removeClass("ui-draggable-dragging");
this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove();
this.helper=null;
this.cancelHelperRemoval=false
},_trigger:function(e,d,f){f=f||this._uiHash();
a.ui.plugin.call(this,e,[d,f]);
if(e=="drag"){this.positionAbs=this._convertPositionTo("absolute")
}return a.Widget.prototype._trigger.call(this,e,d,f)
},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}
}});
a.extend(a.ui.draggable,{version:"1.8.16"});
a.ui.plugin.add("draggable","connectToSortable",{start:function(g,d){var k=a(this).data("draggable"),h=k.options,j=a.extend({},d,{item:k.element});
k.sortables=[];
a(h.connectToSortable).each(function(){var b=a.data(this,"sortable");
if(b&&!b.options.disabled){k.sortables.push({instance:b,shouldRevert:b.options.revert});
b.refreshPositions();
b._trigger("activate",g,j)
}})
},stop:function(e,d){var h=a(this).data("draggable"),g=a.extend({},d,{item:h.element});
a.each(h.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;
h.cancelHelperRemoval=true;
this.instance.cancelHelperRemoval=false;
if(this.shouldRevert){this.instance.options.revert=true
}this.instance._mouseStop(e);
this.instance.options.helper=this.instance.options._helper;
h.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})
}else{this.instance.cancelHelperRemoval=false;
this.instance._trigger("deactivate",e,g)
}})
},drag:function(e,d){var h=a(this).data("draggable"),g=this;
a.each(h.sortables,function(){this.instance.positionAbs=h.positionAbs;
this.instance.helperProportions=h.helperProportions;
this.instance.offset.click=h.offset.click;
if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;
this.instance.currentItem=a(g).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",true);
this.instance.options._helper=this.instance.options.helper;
this.instance.options.helper=function(){return d.helper[0]
};
e.target=this.instance.currentItem[0];
this.instance._mouseCapture(e,true);
this.instance._mouseStart(e,true,true);
this.instance.offset.click.top=h.offset.click.top;
this.instance.offset.click.left=h.offset.click.left;
this.instance.offset.parent.left-=h.offset.parent.left-this.instance.offset.parent.left;
this.instance.offset.parent.top-=h.offset.parent.top-this.instance.offset.parent.top;
h._trigger("toSortable",e);
h.dropped=this.instance.element;
h.currentItem=h.element;
this.instance.fromOutside=h
}this.instance.currentItem&&this.instance._mouseDrag(e)
}else{if(this.instance.isOver){this.instance.isOver=0;
this.instance.cancelHelperRemoval=true;
this.instance.options.revert=false;
this.instance._trigger("out",e,this.instance._uiHash(this.instance));
this.instance._mouseStop(e,true);
this.instance.options.helper=this.instance.options._helper;
this.instance.currentItem.remove();
this.instance.placeholder&&this.instance.placeholder.remove();
h._trigger("fromSortable",e);
h.dropped=false
}}})
}});
a.ui.plugin.add("draggable","cursor",{start:function(){var d=a("body"),c=a(this).data("draggable").options;
if(d.css("cursor")){c._cursor=d.css("cursor")
}d.css("cursor",c.cursor)
},stop:function(){var b=a(this).data("draggable").options;
b._cursor&&a("body").css("cursor",b._cursor)
}});
a.ui.plugin.add("draggable","opacity",{start:function(d,c){d=a(c.helper);
c=a(this).data("draggable").options;
if(d.css("opacity")){c._opacity=d.css("opacity")
}d.css("opacity",c.opacity)
},stop:function(d,c){d=a(this).data("draggable").options;
d._opacity&&a(c.helper).css("opacity",d._opacity)
}});
a.ui.plugin.add("draggable","scroll",{start:function(){var b=a(this).data("draggable");
if(b.scrollParent[0]!=document&&b.scrollParent[0].tagName!="HTML"){b.overflowOffset=b.scrollParent.offset()
}},drag:function(e){var d=a(this).data("draggable"),h=d.options,g=false;
if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"){if(!h.axis||h.axis!="x"){if(d.overflowOffset.top+d.scrollParent[0].offsetHeight-e.pageY<h.scrollSensitivity){d.scrollParent[0].scrollTop=g=d.scrollParent[0].scrollTop+h.scrollSpeed
}else{if(e.pageY-d.overflowOffset.top<h.scrollSensitivity){d.scrollParent[0].scrollTop=g=d.scrollParent[0].scrollTop-h.scrollSpeed
}}}if(!h.axis||h.axis!="y"){if(d.overflowOffset.left+d.scrollParent[0].offsetWidth-e.pageX<h.scrollSensitivity){d.scrollParent[0].scrollLeft=g=d.scrollParent[0].scrollLeft+h.scrollSpeed
}else{if(e.pageX-d.overflowOffset.left<h.scrollSensitivity){d.scrollParent[0].scrollLeft=g=d.scrollParent[0].scrollLeft-h.scrollSpeed
}}}}else{if(!h.axis||h.axis!="x"){if(e.pageY-a(document).scrollTop()<h.scrollSensitivity){g=a(document).scrollTop(a(document).scrollTop()-h.scrollSpeed)
}else{if(a(window).height()-(e.pageY-a(document).scrollTop())<h.scrollSensitivity){g=a(document).scrollTop(a(document).scrollTop()+h.scrollSpeed)
}}}if(!h.axis||h.axis!="y"){if(e.pageX-a(document).scrollLeft()<h.scrollSensitivity){g=a(document).scrollLeft(a(document).scrollLeft()-h.scrollSpeed)
}else{if(a(window).width()-(e.pageX-a(document).scrollLeft())<h.scrollSensitivity){g=a(document).scrollLeft(a(document).scrollLeft()+h.scrollSpeed)
}}}}g!==false&&a.ui.ddmanager&&!h.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,e)
}});
a.ui.plugin.add("draggable","snap",{start:function(){var d=a(this).data("draggable"),c=d.options;
d.snapElements=[];
a(c.snap.constructor!=String?c.snap.items||":data(draggable)":c.snap).each(function(){var e=a(this),b=e.offset();
this!=d.element[0]&&d.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:b.top,left:b.left})
})
},drag:function(L,K){for(var J=a(this).data("draggable"),H=J.options,I=H.snapTolerance,F=K.offset.left,G=F+J.helperProportions.width,z=K.offset.top,y=z+J.helperProportions.height,E=J.snapElements.length-1;
E>=0;
E--){var D=J.snapElements[E].left,B=D+J.snapElements[E].width,C=J.snapElements[E].top,A=C+J.snapElements[E].height;
if(D-I<F&&F<B+I&&C-I<z&&z<A+I||D-I<F&&F<B+I&&C-I<y&&y<A+I||D-I<G&&G<B+I&&C-I<z&&z<A+I||D-I<G&&G<B+I&&C-I<y&&y<A+I){if(H.snapMode!="inner"){var x=Math.abs(C-y)<=I,w=Math.abs(A-z)<=I,v=Math.abs(D-G)<=I,u=Math.abs(B-F)<=I;
if(x){K.position.top=J._convertPositionTo("relative",{top:C-J.helperProportions.height,left:0}).top-J.margins.top
}if(w){K.position.top=J._convertPositionTo("relative",{top:A,left:0}).top-J.margins.top
}if(v){K.position.left=J._convertPositionTo("relative",{top:0,left:D-J.helperProportions.width}).left-J.margins.left
}if(u){K.position.left=J._convertPositionTo("relative",{top:0,left:B}).left-J.margins.left
}}var d=x||w||v||u;
if(H.snapMode!="outer"){x=Math.abs(C-z)<=I;
w=Math.abs(A-y)<=I;
v=Math.abs(D-F)<=I;
u=Math.abs(B-G)<=I;
if(x){K.position.top=J._convertPositionTo("relative",{top:C,left:0}).top-J.margins.top
}if(w){K.position.top=J._convertPositionTo("relative",{top:A-J.helperProportions.height,left:0}).top-J.margins.top
}if(v){K.position.left=J._convertPositionTo("relative",{top:0,left:D}).left-J.margins.left
}if(u){K.position.left=J._convertPositionTo("relative",{top:0,left:B-J.helperProportions.width}).left-J.margins.left
}}if(!J.snapElements[E].snapping&&(x||w||v||u||d)){J.options.snap.snap&&J.options.snap.snap.call(J.element,L,a.extend(J._uiHash(),{snapItem:J.snapElements[E].item}))
}J.snapElements[E].snapping=x||w||v||u||d
}else{J.snapElements[E].snapping&&J.options.snap.release&&J.options.snap.release.call(J.element,L,a.extend(J._uiHash(),{snapItem:J.snapElements[E].item}));
J.snapElements[E].snapping=false
}}}});
a.ui.plugin.add("draggable","stack",{start:function(){var d=a(this).data("draggable").options;
d=a.makeArray(a(d.stack)).sort(function(e,b){return(parseInt(a(e).css("zIndex"),10)||0)-(parseInt(a(b).css("zIndex"),10)||0)
});
if(d.length){var c=parseInt(d[0].style.zIndex)||0;
a(d).each(function(b){this.style.zIndex=c+b
});
this[0].style.zIndex=c+d.length
}}});
a.ui.plugin.add("draggable","zIndex",{start:function(d,c){d=a(c.helper);
c=a(this).data("draggable").options;
if(d.css("zIndex")){c._zIndex=d.css("zIndex")
}d.css("zIndex",c.zIndex)
},stop:function(d,c){d=a(this).data("draggable").options;
d._zIndex&&a(c.helper).css("zIndex",d._zIndex)
}})
})(jQuery);
(function(a){a.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var d=this.options,c=d.accept;
this.isover=0;
this.isout=1;
this.accept=a.isFunction(c)?c:function(b){return b.is(c)
};
this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};
a.ui.ddmanager.droppables[d.scope]=a.ui.ddmanager.droppables[d.scope]||[];
a.ui.ddmanager.droppables[d.scope].push(this);
d.addClasses&&this.element.addClass("ui-droppable")
},destroy:function(){for(var d=a.ui.ddmanager.droppables[this.options.scope],c=0;
c<d.length;
c++){d[c]==this&&d.splice(c,1)
}this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");
return this
},_setOption:function(d,c){if(d=="accept"){this.accept=a.isFunction(c)?c:function(b){return b.is(c)
}
}a.Widget.prototype._setOption.apply(this,arguments)
},_activate:function(d){var c=a.ui.ddmanager.current;
this.options.activeClass&&this.element.addClass(this.options.activeClass);
c&&this._trigger("activate",d,this.ui(c))
},_deactivate:function(d){var c=a.ui.ddmanager.current;
this.options.activeClass&&this.element.removeClass(this.options.activeClass);
c&&this._trigger("deactivate",d,this.ui(c))
},_over:function(d){var c=a.ui.ddmanager.current;
if(!(!c||(c.currentItem||c.element)[0]==this.element[0])){if(this.accept.call(this.element[0],c.currentItem||c.element)){this.options.hoverClass&&this.element.addClass(this.options.hoverClass);
this._trigger("over",d,this.ui(c))
}}},_out:function(d){var c=a.ui.ddmanager.current;
if(!(!c||(c.currentItem||c.element)[0]==this.element[0])){if(this.accept.call(this.element[0],c.currentItem||c.element)){this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);
this._trigger("out",d,this.ui(c))
}}},_drop:function(f,d){var h=d||a.ui.ddmanager.current;
if(!h||(h.currentItem||h.element)[0]==this.element[0]){return false
}var g=false;
this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var b=a.data(this,"droppable");
if(b.options.greedy&&!b.options.disabled&&b.options.scope==h.options.scope&&b.accept.call(b.element[0],h.currentItem||h.element)&&a.ui.intersect(h,a.extend(b,{offset:b.element.offset()}),b.options.tolerance)){g=true;
return false
}});
if(g){return false
}if(this.accept.call(this.element[0],h.currentItem||h.element)){this.options.activeClass&&this.element.removeClass(this.options.activeClass);
this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);
this._trigger("drop",f,this.ui(h));
return this.element
}return false
},ui:function(b){return{draggable:b.currentItem||b.element,helper:b.helper,position:b.position,offset:b.positionAbs}
}});
a.extend(a.ui.droppable,{version:"1.8.16"});
a.ui.intersect=function(w,v,u){if(!v.offset){return false
}var s=(w.positionAbs||w.position.absolute).left,q=s+w.helperProportions.width,r=(w.positionAbs||w.position.absolute).top,p=r+w.helperProportions.height,o=v.offset.left,m=o+v.proportions.width,n=v.offset.top,d=n+v.proportions.height;
switch(u){case"fit":return o<=s&&q<=m&&n<=r&&p<=d;
case"intersect":return o<s+w.helperProportions.width/2&&q-w.helperProportions.width/2<m&&n<r+w.helperProportions.height/2&&p-w.helperProportions.height/2<d;
case"pointer":return a.ui.isOver((w.positionAbs||w.position.absolute).top+(w.clickOffset||w.offset.click).top,(w.positionAbs||w.position.absolute).left+(w.clickOffset||w.offset.click).left,n,o,v.proportions.height,v.proportions.width);
case"touch":return(r>=n&&r<=d||p>=n&&p<=d||r<n&&p>d)&&(s>=o&&s<=m||q>=o&&q<=m||s<o&&q>m);
default:return false
}};
a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(j,d){var o=a.ui.ddmanager.droppables[j.options.scope]||[],n=d?d.type:null,l=(j.currentItem||j.element).find(":data(droppable)").andSelf(),m=0;
j:for(;
m<o.length;
m++){if(!(o[m].options.disabled||j&&!o[m].accept.call(o[m].element[0],j.currentItem||j.element))){for(var k=0;
k<l.length;
k++){if(l[k]==o[m].element[0]){o[m].proportions.height=0;
continue j
}}o[m].visible=o[m].element.css("display")!="none";
if(o[m].visible){n=="mousedown"&&o[m]._activate.call(o[m],d);
o[m].offset=o[m].element.offset();
o[m].proportions={width:o[m].element[0].offsetWidth,height:o[m].element[0].offsetHeight}
}}}},drop:function(e,d){var f=false;
a.each(a.ui.ddmanager.droppables[e.options.scope]||[],function(){if(this.options){if(!this.options.disabled&&this.visible&&a.ui.intersect(e,this,this.options.tolerance)){f=f||this._drop.call(this,d)
}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)){this.isout=1;
this.isover=0;
this._deactivate.call(this,d)
}}});
return f
},dragStart:function(d,c){d.element.parents(":not(body,html)").bind("scroll.droppable",function(){d.options.refreshPositions||a.ui.ddmanager.prepareOffsets(d,c)
})
},drag:function(d,c){d.options.refreshPositions&&a.ui.ddmanager.prepareOffsets(d,c);
a.each(a.ui.ddmanager.droppables[d.options.scope]||[],function(){if(!(this.options.disabled||this.greedyChild||!this.visible)){var h=a.ui.intersect(d,this,this.options.tolerance);
if(h=!h&&this.isover==1?"isout":h&&this.isover==0?"isover":null){var f;
if(this.options.greedy){var b=this.element.parents(":data(droppable):eq(0)");
if(b.length){f=a.data(b[0],"droppable");
f.greedyChild=h=="isover"?1:0
}}if(f&&h=="isover"){f.isover=0;
f.isout=1;
f._out.call(f,c)
}this[h]=1;
this[h=="isout"?"isover":"isout"]=0;
this[h=="isover"?"_over":"_out"].call(this,c);
if(f&&h=="isout"){f.isout=0;
f.isover=1;
f._over.call(f,c)
}}}})
},dragStop:function(d,c){d.element.parents(":not(body,html)").unbind("scroll.droppable");
d.options.refreshPositions||a.ui.ddmanager.prepareOffsets(d,c)
}}
})(jQuery);
(function(c){c.widget("ui.resizable",c.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1000},_create:function(){var e=this,h=this.options;
this.element.addClass("ui-resizable");
c.extend(this,{_aspectRatio:!!h.aspectRatio,aspectRatio:h.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:h.helper||h.ghost||h.animate?h.helper||"ui-resizable-helper":null});
if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){/relative/.test(this.element.css("position"))&&c.browser.opera&&this.element.css({position:"relative",top:"auto",left:"auto"});
this.element.wrap(c('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));
this.element=this.element.parent().data("resizable",this.element.data("resizable"));
this.elementIsWrapper=true;
this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});
this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});
this.originalResizeStyle=this.originalElement.css("resize");
this.originalElement.css("resize","none");
this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));
this.originalElement.css({margin:this.originalElement.css("margin")});
this._proportionallyResize()
}this.handles=h.handles||(!c(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});
if(this.handles.constructor==String){if(this.handles=="all"){this.handles="n,e,s,w,se,sw,ne,nw"
}var m=this.handles.split(",");
this.handles={};
for(var l=0;
l<m.length;
l++){var k=c.trim(m[l]),j=c('<div class="ui-resizable-handle '+("ui-resizable-"+k)+'"></div>');
/sw|se|ne|nw/.test(k)&&j.css({zIndex:++h.zIndex});
"se"==k&&j.addClass("ui-icon ui-icon-gripsmall-diagonal-se");
this.handles[k]=".ui-resizable-"+k;
this.element.append(j)
}}this._renderAxis=function(n){n=n||this.element;
for(var g in this.handles){if(this.handles[g].constructor==String){this.handles[g]=c(this.handles[g],this.element).show()
}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var f=c(this.handles[g],this.element),d=0;
d=/sw|ne|nw|se|n|s/.test(g)?f.outerHeight():f.outerWidth();
f=["padding",/ne|nw|n/.test(g)?"Top":/se|sw|s/.test(g)?"Bottom":/^e$/.test(g)?"Right":"Left"].join("");
n.css(f,d);
this._proportionallyResize()
}c(this.handles[g])
}};
this._renderAxis(this.element);
this._handles=c(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){if(!e.resizing){if(this.className){var d=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
}e.axis=d&&d[1]?d[1]:"se"
}});
if(h.autoHide){this._handles.hide();
c(this.element).addClass("ui-resizable-autohide").hover(function(){if(!h.disabled){c(this).removeClass("ui-resizable-autohide");
e._handles.show()
}},function(){if(!h.disabled){if(!e.resizing){c(this).addClass("ui-resizable-autohide");
e._handles.hide()
}}})
}this._mouseInit()
},destroy:function(){this._mouseDestroy();
var d=function(f){c(f).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
};
if(this.elementIsWrapper){d(this.element);
var e=this.element;
e.after(this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")})).remove()
}this.originalElement.css("resize",this.originalResizeStyle);
d(this.originalElement);
return this
},_mouseCapture:function(d){var e=false;
for(var f in this.handles){if(c(this.handles[f])[0]==d.target){e=true
}}return !this.options.disabled&&e
},_mouseStart:function(e){var g=this.options,k=this.element.position(),j=this.element;
this.resizing=true;
this.documentScroll={top:c(document).scrollTop(),left:c(document).scrollLeft()};
if(j.is(".ui-draggable")||/absolute/.test(j.css("position"))){j.css({position:"absolute",top:k.top,left:k.left})
}c.browser.opera&&/relative/.test(j.css("position"))&&j.css({position:"relative",top:"auto",left:"auto"});
this._renderProxy();
k=a(this.helper.css("left"));
var h=a(this.helper.css("top"));
if(g.containment){k+=c(g.containment).scrollLeft()||0;
h+=c(g.containment).scrollTop()||0
}this.offset=this.helper.offset();
this.position={left:k,top:h};
this.size=this._helper?{width:j.outerWidth(),height:j.outerHeight()}:{width:j.width(),height:j.height()};
this.originalSize=this._helper?{width:j.outerWidth(),height:j.outerHeight()}:{width:j.width(),height:j.height()};
this.originalPosition={left:k,top:h};
this.sizeDiff={width:j.outerWidth()-j.width(),height:j.outerHeight()-j.height()};
this.originalMousePosition={left:e.pageX,top:e.pageY};
this.aspectRatio=typeof g.aspectRatio=="number"?g.aspectRatio:this.originalSize.width/this.originalSize.height||1;
g=c(".ui-resizable-"+this.axis).css("cursor");
c("body").css("cursor",g=="auto"?this.axis+"-resize":g);
j.addClass("ui-resizable-resizing");
this._propagate("start",e);
return true
},_mouseDrag:function(e){var f=this.helper,h=this.originalMousePosition,g=this._change[this.axis];
if(!g){return false
}h=g.apply(this,[e,e.pageX-h.left||0,e.pageY-h.top||0]);
this._updateVirtualBoundaries(e.shiftKey);
if(this._aspectRatio||e.shiftKey){h=this._updateRatio(h,e)
}h=this._respectSize(h,e);
this._propagate("resize",e);
f.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});
!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize();
this._updateCache(h);
this._trigger("resize",e,this.ui());
return false
},_mouseStop:function(e){this.resizing=false;
var h=this.options,m=this;
if(this._helper){var l=this._proportionallyResizeElements,k=l.length&&/textarea/i.test(l[0].nodeName);
l=k&&c.ui.hasScroll(l[0],"left")?0:m.sizeDiff.height;
k=k?0:m.sizeDiff.width;
k={width:m.helper.width()-k,height:m.helper.height()-l};
l=parseInt(m.element.css("left"),10)+(m.position.left-m.originalPosition.left)||null;
var j=parseInt(m.element.css("top"),10)+(m.position.top-m.originalPosition.top)||null;
h.animate||this.element.css(c.extend(k,{top:j,left:l}));
m.helper.height(m.size.height);
m.helper.width(m.size.width);
this._helper&&!h.animate&&this._proportionallyResize()
}c("body").css("cursor","auto");
this.element.removeClass("ui-resizable-resizing");
this._propagate("stop",e);
this._helper&&this.helper.remove();
return false
},_updateVirtualBoundaries:function(e){var g=this.options,k,j,h;
g={minWidth:b(g.minWidth)?g.minWidth:0,maxWidth:b(g.maxWidth)?g.maxWidth:Infinity,minHeight:b(g.minHeight)?g.minHeight:0,maxHeight:b(g.maxHeight)?g.maxHeight:Infinity};
if(this._aspectRatio||e){e=g.minHeight*this.aspectRatio;
j=g.minWidth/this.aspectRatio;
k=g.maxHeight*this.aspectRatio;
h=g.maxWidth/this.aspectRatio;
if(e>g.minWidth){g.minWidth=e
}if(j>g.minHeight){g.minHeight=j
}if(k<g.maxWidth){g.maxWidth=k
}if(h<g.maxHeight){g.maxHeight=h
}}this._vBoundaries=g
},_updateCache:function(d){this.offset=this.helper.offset();
if(b(d.left)){this.position.left=d.left
}if(b(d.top)){this.position.top=d.top
}if(b(d.height)){this.size.height=d.height
}if(b(d.width)){this.size.width=d.width
}},_updateRatio:function(e){var f=this.position,h=this.size,g=this.axis;
if(b(e.height)){e.width=e.height*this.aspectRatio
}else{if(b(e.width)){e.height=e.width/this.aspectRatio
}}if(g=="sw"){e.left=f.left+(h.width-e.width);
e.top=null
}if(g=="nw"){e.top=f.top+(h.height-e.height);
e.left=f.left+(h.width-e.width)
}return e
},_respectSize:function(s){var u=this._vBoundaries,r=this.axis,q=b(s.width)&&u.maxWidth&&u.maxWidth<s.width,p=b(s.height)&&u.maxHeight&&u.maxHeight<s.height,o=b(s.width)&&u.minWidth&&u.minWidth>s.width,n=b(s.height)&&u.minHeight&&u.minHeight>s.height;
if(o){s.width=u.minWidth
}if(n){s.height=u.minHeight
}if(q){s.width=u.maxWidth
}if(p){s.height=u.maxHeight
}var m=this.originalPosition.left+this.originalSize.width,k=this.position.top+this.size.height,e=/sw|nw|w/.test(r);
r=/nw|ne|n/.test(r);
if(o&&e){s.left=m-u.minWidth
}if(q&&e){s.left=m-u.maxWidth
}if(n&&r){s.top=k-u.minHeight
}if(p&&r){s.top=k-u.maxHeight
}if((u=!s.width&&!s.height)&&!s.left&&s.top){s.top=null
}else{if(u&&!s.top&&s.left){s.left=null
}}return s
},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){for(var e=this.helper||this.element,g=0;
g<this._proportionallyResizeElements.length;
g++){var k=this._proportionallyResizeElements[g];
if(!this.borderDif){var j=[k.css("borderTopWidth"),k.css("borderRightWidth"),k.css("borderBottomWidth"),k.css("borderLeftWidth")],h=[k.css("paddingTop"),k.css("paddingRight"),k.css("paddingBottom"),k.css("paddingLeft")];
this.borderDif=c.map(j,function(f,d){f=parseInt(f,10)||0;
d=parseInt(h[d],10)||0;
return f+d
})
}c.browser.msie&&(c(e).is(":hidden")||c(e).parents(":hidden").length)||k.css({height:e.height()-this.borderDif[0]-this.borderDif[2]||0,width:e.width()-this.borderDif[1]-this.borderDif[3]||0})
}}},_renderProxy:function(){var d=this.options;
this.elementOffset=this.element.offset();
if(this._helper){this.helper=this.helper||c('<div style="overflow:hidden;"></div>');
var e=c.browser.msie&&c.browser.version<7,f=e?1:0;
e=e?2:-1;
this.helper.addClass(this._helper).css({width:this.element.outerWidth()+e,height:this.element.outerHeight()+e,position:"absolute",left:this.elementOffset.left-f+"px",top:this.elementOffset.top-f+"px",zIndex:++d.zIndex});
this.helper.appendTo("body").disableSelection()
}else{this.helper=this.element
}},_change:{e:function(d,e){return{width:this.originalSize.width+e}
},w:function(d,e){return{left:this.originalPosition.left+e,width:this.originalSize.width-e}
},n:function(d,e,f){return{top:this.originalPosition.top+f,height:this.originalSize.height-f}
},s:function(d,e,f){return{height:this.originalSize.height+f}
},se:function(d,e,f){return c.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[d,e,f]))
},sw:function(d,e,f){return c.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[d,e,f]))
},ne:function(d,e,f){return c.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[d,e,f]))
},nw:function(d,e,f){return c.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[d,e,f]))
}},_propagate:function(d,e){c.ui.plugin.call(this,d,[e,this.ui()]);
d!="resize"&&this._trigger(d,e,this.ui())
},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}
}});
c.extend(c.ui.resizable,{version:"1.8.16"});
c.ui.plugin.add("resizable","alsoResize",{start:function(){var d=c(this).data("resizable").options,e=function(f){c(f).each(function(){var g=c(this);
g.data("resizable-alsoresize",{width:parseInt(g.width(),10),height:parseInt(g.height(),10),left:parseInt(g.css("left"),10),top:parseInt(g.css("top"),10),position:g.css("position")})
})
};
if(typeof d.alsoResize=="object"&&!d.alsoResize.parentNode){if(d.alsoResize.length){d.alsoResize=d.alsoResize[0];
e(d.alsoResize)
}else{c.each(d.alsoResize,function(f){e(f)
})
}}else{e(d.alsoResize)
}},resize:function(e,j){var o=c(this).data("resizable");
e=o.options;
var n=o.originalSize,m=o.originalPosition,l={height:o.size.height-n.height||0,width:o.size.width-n.width||0,top:o.position.top-m.top||0,left:o.position.left-m.left||0},k=function(f,d){c(f).each(function(){var g=c(this),s=c(this).data("resizable-alsoresize"),u={},h=d&&d.length?d:g.parents(j.originalElement[0]).length?["width","height"]:["width","height","top","left"];
c.each(h,function(q,p){if((q=(s[p]||0)+(l[p]||0))&&q>=0){u[p]=q||null
}});
if(c.browser.opera&&/relative/.test(g.css("position"))){o._revertToRelativePosition=true;
g.css({position:"absolute",top:"auto",left:"auto"})
}g.css(u)
})
};
typeof e.alsoResize=="object"&&!e.alsoResize.nodeType?c.each(e.alsoResize,function(f,d){k(f,d)
}):k(e.alsoResize)
},stop:function(){var d=c(this).data("resizable"),e=d.options,f=function(g){c(g).each(function(){var h=c(this);
h.css({position:h.data("resizable-alsoresize").position})
})
};
if(d._revertToRelativePosition){d._revertToRelativePosition=false;
typeof e.alsoResize=="object"&&!e.alsoResize.nodeType?c.each(e.alsoResize,function(g){f(g)
}):f(e.alsoResize)
}c(this).removeData("resizable-alsoresize")
}});
c.ui.plugin.add("resizable","animate",{stop:function(e){var j=c(this).data("resizable"),o=j.options,n=j._proportionallyResizeElements,m=n.length&&/textarea/i.test(n[0].nodeName),l=m&&c.ui.hasScroll(n[0],"left")?0:j.sizeDiff.height;
m={width:j.size.width-(m?0:j.sizeDiff.width),height:j.size.height-l};
l=parseInt(j.element.css("left"),10)+(j.position.left-j.originalPosition.left)||null;
var k=parseInt(j.element.css("top"),10)+(j.position.top-j.originalPosition.top)||null;
j.element.animate(c.extend(m,k&&l?{top:k,left:l}:{}),{duration:o.animateDuration,easing:o.animateEasing,step:function(){var d={width:parseInt(j.element.css("width"),10),height:parseInt(j.element.css("height"),10),top:parseInt(j.element.css("top"),10),left:parseInt(j.element.css("left"),10)};
n&&n.length&&c(n[0]).css({width:d.width,height:d.height});
j._updateCache(d);
j._propagate("resize",e)
}})
}});
c.ui.plugin.add("resizable","containment",{start:function(){var e=c(this).data("resizable"),j=e.element,o=e.options.containment;
if(j=o instanceof c?o.get(0):/parent/.test(o)?j.parent().get(0):o){e.containerElement=c(j);
if(/document/.test(o)||o==document){e.containerOffset={left:0,top:0};
e.containerPosition={left:0,top:0};
e.parentData={element:c(document),left:0,top:0,width:c(document).width(),height:c(document).height()||document.body.parentNode.scrollHeight}
}else{var n=c(j),m=[];
c(["Top","Right","Left","Bottom"]).each(function(f,d){m[f]=a(n.css("padding"+d))
});
e.containerOffset=n.offset();
e.containerPosition=n.position();
e.containerSize={height:n.innerHeight()-m[3],width:n.innerWidth()-m[1]};
o=e.containerOffset;
var l=e.containerSize.height,k=e.containerSize.width;
k=c.ui.hasScroll(j,"left")?j.scrollWidth:k;
l=c.ui.hasScroll(j)?j.scrollHeight:l;
e.parentData={element:j,left:o.left,top:o.top,width:k,height:l}
}}},resize:function(e){var j=c(this).data("resizable"),o=j.options,n=j.containerOffset,m=j.position;
e=j._aspectRatio||e.shiftKey;
var l={top:0,left:0},k=j.containerElement;
if(k[0]!=document&&/static/.test(k.css("position"))){l=n
}if(m.left<(j._helper?n.left:0)){j.size.width+=j._helper?j.position.left-n.left:j.position.left-l.left;
if(e){j.size.height=j.size.width/o.aspectRatio
}j.position.left=o.helper?n.left:0
}if(m.top<(j._helper?n.top:0)){j.size.height+=j._helper?j.position.top-n.top:j.position.top;
if(e){j.size.width=j.size.height*o.aspectRatio
}j.position.top=j._helper?n.top:0
}j.offset.left=j.parentData.left+j.position.left;
j.offset.top=j.parentData.top+j.position.top;
o=Math.abs((j._helper?j.offset.left-l.left:j.offset.left-l.left)+j.sizeDiff.width);
n=Math.abs((j._helper?j.offset.top-l.top:j.offset.top-n.top)+j.sizeDiff.height);
m=j.containerElement.get(0)==j.element.parent().get(0);
l=/relative|absolute/.test(j.containerElement.css("position"));
if(m&&l){o-=j.parentData.left
}if(o+j.size.width>=j.parentData.width){j.size.width=j.parentData.width-o;
if(e){j.size.height=j.size.width/j.aspectRatio
}}if(n+j.size.height>=j.parentData.height){j.size.height=j.parentData.height-n;
if(e){j.size.width=j.size.height*j.aspectRatio
}}},stop:function(){var e=c(this).data("resizable"),j=e.options,p=e.containerOffset,o=e.containerPosition,n=e.containerElement,m=c(e.helper),l=m.offset(),k=m.outerWidth()-e.sizeDiff.width;
m=m.outerHeight()-e.sizeDiff.height;
e._helper&&!j.animate&&/relative/.test(n.css("position"))&&c(this).css({left:l.left-o.left-p.left,width:k,height:m});
e._helper&&!j.animate&&/static/.test(n.css("position"))&&c(this).css({left:l.left-o.left-p.left,width:k,height:m})
}});
c.ui.plugin.add("resizable","ghost",{start:function(){var d=c(this).data("resizable"),e=d.options,f=d.size;
d.ghost=d.originalElement.clone();
d.ghost.css({opacity:0.25,display:"block",position:"relative",height:f.height,width:f.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof e.ghost=="string"?e.ghost:"");
d.ghost.appendTo(d.helper)
},resize:function(){var d=c(this).data("resizable");
d.ghost&&d.ghost.css({position:"relative",height:d.size.height,width:d.size.width})
},stop:function(){var d=c(this).data("resizable");
d.ghost&&d.helper&&d.helper.get(0).removeChild(d.ghost.get(0))
}});
c.ui.plugin.add("resizable","grid",{resize:function(){var e=c(this).data("resizable"),j=e.options,o=e.size,n=e.originalSize,m=e.originalPosition,l=e.axis;
j.grid=typeof j.grid=="number"?[j.grid,j.grid]:j.grid;
var k=Math.round((o.width-n.width)/(j.grid[0]||1))*(j.grid[0]||1);
j=Math.round((o.height-n.height)/(j.grid[1]||1))*(j.grid[1]||1);
if(/^(se|s|e)$/.test(l)){e.size.width=n.width+k;
e.size.height=n.height+j
}else{if(/^(ne)$/.test(l)){e.size.width=n.width+k;
e.size.height=n.height+j;
e.position.top=m.top-j
}else{if(/^(sw)$/.test(l)){e.size.width=n.width+k;
e.size.height=n.height+j
}else{e.size.width=n.width+k;
e.size.height=n.height+j;
e.position.top=m.top-j
}e.position.left=m.left-k
}}}});
var a=function(d){return parseInt(d,10)||0
},b=function(d){return !isNaN(parseInt(d,10))
}
})(jQuery);
(function(a){a.widget("ui.selectable",a.ui.mouse,{options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch"},_create:function(){var d=this;
this.element.addClass("ui-selectable");
this.dragged=false;
var b;
this.refresh=function(){b=a(d.options.filter,d.element[0]);
b.each(function(){var e=a(this),c=e.offset();
a.data(this,"selectable-item",{element:this,$element:e,left:c.left,top:c.top,right:c.left+e.outerWidth(),bottom:c.top+e.outerHeight(),startselected:false,selected:e.hasClass("ui-selected"),selecting:e.hasClass("ui-selecting"),unselecting:e.hasClass("ui-unselecting")})
})
};
this.refresh();
this.selectees=b.addClass("ui-selectee");
this._mouseInit();
this.helper=a("<div class='ui-selectable-helper'></div>")
},destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");
this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");
this._mouseDestroy();
return this
},_mouseStart:function(g){var b=this;
this.opos=[g.pageX,g.pageY];
if(!this.options.disabled){var e=this.options;
this.selectees=a(e.filter,this.element[0]);
this._trigger("start",g);
a(e.appendTo).append(this.helper);
this.helper.css({left:g.clientX,top:g.clientY,width:0,height:0});
e.autoRefresh&&this.refresh();
this.selectees.filter(".ui-selected").each(function(){var c=a.data(this,"selectable-item");
c.startselected=true;
if(!g.metaKey){c.$element.removeClass("ui-selected");
c.selected=false;
c.$element.addClass("ui-unselecting");
c.unselecting=true;
b._trigger("unselecting",g,{unselecting:c.element})
}});
a(g.target).parents().andSelf().each(function(){var c=a.data(this,"selectable-item");
if(c){var d=!g.metaKey||!c.$element.hasClass("ui-selected");
c.$element.removeClass(d?"ui-unselecting":"ui-selected").addClass(d?"ui-selecting":"ui-unselecting");
c.unselecting=!d;
c.selecting=d;
(c.selected=d)?b._trigger("selecting",g,{selecting:c.element}):b._trigger("unselecting",g,{unselecting:c.element});
return false
}})
}},_mouseDrag:function(q){var o=this;
this.dragged=true;
if(!this.options.disabled){var p=this.options,e=this.opos[0],n=this.opos[1],m=q.pageX,l=q.pageY;
if(e>m){var k=m;
m=e;
e=k
}if(n>l){k=l;
l=n;
n=k
}this.helper.css({left:e,top:n,width:m-e,height:l-n});
this.selectees.each(function(){var b=a.data(this,"selectable-item");
if(!(!b||b.element==o.element[0])){var c=false;
if(p.tolerance=="touch"){c=!(b.left>m||b.right<e||b.top>l||b.bottom<n)
}else{if(p.tolerance=="fit"){c=b.left>e&&b.right<m&&b.top>n&&b.bottom<l
}}if(c){if(b.selected){b.$element.removeClass("ui-selected");
b.selected=false
}if(b.unselecting){b.$element.removeClass("ui-unselecting");
b.unselecting=false
}if(!b.selecting){b.$element.addClass("ui-selecting");
b.selecting=true;
o._trigger("selecting",q,{selecting:b.element})
}}else{if(b.selecting){if(q.metaKey&&b.startselected){b.$element.removeClass("ui-selecting");
b.selecting=false;
b.$element.addClass("ui-selected");
b.selected=true
}else{b.$element.removeClass("ui-selecting");
b.selecting=false;
if(b.startselected){b.$element.addClass("ui-unselecting");
b.unselecting=true
}o._trigger("unselecting",q,{unselecting:b.element})
}}if(b.selected){if(!q.metaKey&&!b.startselected){b.$element.removeClass("ui-selected");
b.selected=false;
b.$element.addClass("ui-unselecting");
b.unselecting=true;
o._trigger("unselecting",q,{unselecting:b.element})
}}}}});
return false
}},_mouseStop:function(d){var b=this;
this.dragged=false;
a(".ui-unselecting",this.element[0]).each(function(){var c=a.data(this,"selectable-item");
c.$element.removeClass("ui-unselecting");
c.unselecting=false;
c.startselected=false;
b._trigger("unselected",d,{unselected:c.element})
});
a(".ui-selecting",this.element[0]).each(function(){var c=a.data(this,"selectable-item");
c.$element.removeClass("ui-selecting").addClass("ui-selected");
c.selecting=false;
c.selected=true;
c.startselected=true;
b._trigger("selected",d,{selected:c.element})
});
this._trigger("stop",d);
this.helper.remove();
return false
}});
a.extend(a.ui.selectable,{version:"1.8.16"})
})(jQuery);
(function(a){a.widget("ui.sortable",a.ui.mouse,{widgetEventPrefix:"sort",options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000},_create:function(){var b=this.options;
this.containerCache={};
this.element.addClass("ui-sortable");
this.refresh();
this.floating=this.items.length?b.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):false;
this.offset=this.element.offset();
this._mouseInit()
},destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");
this._mouseDestroy();
for(var b=this.items.length-1;
b>=0;
b--){this.items[b].item.removeData("sortable-item")
}return this
},_setOption:function(d,c){if(d==="disabled"){this.options[d]=c;
this.widget()[c?"addClass":"removeClass"]("ui-sortable-disabled")
}else{a.Widget.prototype._setOption.apply(this,arguments)
}},_mouseCapture:function(g,d){if(this.reverting){return false
}if(this.options.disabled||this.options.type=="static"){return false
}this._refreshItems(g);
var k=null,j=this;
a(g.target).parents().each(function(){if(a.data(this,"sortable-item")==j){k=a(this);
return false
}});
if(a.data(g.target,"sortable-item")==j){k=a(g.target)
}if(!k){return false
}if(this.options.handle&&!d){var h=false;
a(this.options.handle,k).find("*").andSelf().each(function(){if(this==g.target){h=true
}});
if(!h){return false
}}this.currentItem=k;
this._removeCurrentsFromItems();
return true
},_mouseStart:function(f,d,h){d=this.options;
var g=this;
this.currentContainer=this;
this.refreshPositions();
this.helper=this._createHelper(f);
this._cacheHelperProportions();
this._cacheMargins();
this.scrollParent=this.helper.scrollParent();
this.offset=this.currentItem.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
this.helper.css("position","absolute");
this.cssPosition=this.helper.css("position");
a.extend(this.offset,{click:{left:f.pageX-this.offset.left,top:f.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this._generatePosition(f);
this.originalPageX=f.pageX;
this.originalPageY=f.pageY;
d.cursorAt&&this._adjustOffsetFromHelper(d.cursorAt);
this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
this.helper[0]!=this.currentItem[0]&&this.currentItem.hide();
this._createPlaceholder();
d.containment&&this._setContainment();
if(d.cursor){if(a("body").css("cursor")){this._storedCursor=a("body").css("cursor")
}a("body").css("cursor",d.cursor)
}if(d.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")
}this.helper.css("opacity",d.opacity)
}if(d.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")
}this.helper.css("zIndex",d.zIndex)
}if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){this.overflowOffset=this.scrollParent.offset()
}this._trigger("start",f,this._uiHash());
this._preserveHelperProportions||this._cacheHelperProportions();
if(!h){for(h=this.containers.length-1;
h>=0;
h--){this.containers[h]._trigger("activate",f,g._uiHash(this))
}}if(a.ui.ddmanager){a.ui.ddmanager.current=this
}a.ui.ddmanager&&!d.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,f);
this.dragging=true;
this.helper.addClass("ui-sortable-helper");
this._mouseDrag(f);
return true
},_mouseDrag:function(g){this.position=this._generatePosition(g);
this.positionAbs=this._convertPositionTo("absolute");
if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs
}if(this.options.scroll){var d=this.options,k=false;
if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if(this.overflowOffset.top+this.scrollParent[0].offsetHeight-g.pageY<d.scrollSensitivity){this.scrollParent[0].scrollTop=k=this.scrollParent[0].scrollTop+d.scrollSpeed
}else{if(g.pageY-this.overflowOffset.top<d.scrollSensitivity){this.scrollParent[0].scrollTop=k=this.scrollParent[0].scrollTop-d.scrollSpeed
}}if(this.overflowOffset.left+this.scrollParent[0].offsetWidth-g.pageX<d.scrollSensitivity){this.scrollParent[0].scrollLeft=k=this.scrollParent[0].scrollLeft+d.scrollSpeed
}else{if(g.pageX-this.overflowOffset.left<d.scrollSensitivity){this.scrollParent[0].scrollLeft=k=this.scrollParent[0].scrollLeft-d.scrollSpeed
}}}else{if(g.pageY-a(document).scrollTop()<d.scrollSensitivity){k=a(document).scrollTop(a(document).scrollTop()-d.scrollSpeed)
}else{if(a(window).height()-(g.pageY-a(document).scrollTop())<d.scrollSensitivity){k=a(document).scrollTop(a(document).scrollTop()+d.scrollSpeed)
}}if(g.pageX-a(document).scrollLeft()<d.scrollSensitivity){k=a(document).scrollLeft(a(document).scrollLeft()-d.scrollSpeed)
}else{if(a(window).width()-(g.pageX-a(document).scrollLeft())<d.scrollSensitivity){k=a(document).scrollLeft(a(document).scrollLeft()+d.scrollSpeed)
}}}k!==false&&a.ui.ddmanager&&!d.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,g)
}this.positionAbs=this._convertPositionTo("absolute");
if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"
}for(d=this.items.length-1;
d>=0;
d--){k=this.items[d];
var j=k.item[0],h=this._intersectsWithPointer(k);
if(h){if(j!=this.currentItem[0]&&this.placeholder[h==1?"next":"prev"]()[0]!=j&&!a.ui.contains(this.placeholder[0],j)&&(this.options.type=="semi-dynamic"?!a.ui.contains(this.element[0],j):true)){this.direction=h==1?"down":"up";
if(this.options.tolerance=="pointer"||this._intersectsWithSides(k)){this._rearrange(g,k)
}else{break
}this._trigger("change",g,this._uiHash());
break
}}}this._contactContainers(g);
a.ui.ddmanager&&a.ui.ddmanager.drag(this,g);
this._trigger("sort",g,this._uiHash());
this.lastPositionAbs=this.positionAbs;
return false
},_mouseStop:function(e,d){if(e){a.ui.ddmanager&&!this.options.dropBehaviour&&a.ui.ddmanager.drop(this,e);
if(this.options.revert){var f=this;
d=f.placeholder.offset();
f.reverting=true;
a(this.helper).animate({left:d.left-this.offset.parent.left-f.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:d.top-this.offset.parent.top-f.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){f._clear(e)
})
}else{this._clear(e,d)
}return false
}},cancel:function(){var d=this;
if(this.dragging){this._mouseUp({target:null});
this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();
for(var c=this.containers.length-1;
c>=0;
c--){this.containers[c]._trigger("deactivate",null,d._uiHash(this));
if(this.containers[c].containerCache.over){this.containers[c]._trigger("out",null,d._uiHash(this));
this.containers[c].containerCache.over=0
}}}if(this.placeholder){this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove();
a.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});
this.domPosition.prev?a(this.domPosition.prev).after(this.currentItem):a(this.domPosition.parent).prepend(this.currentItem)
}return this
},serialize:function(e){var d=this._getItemsAsjQuery(e&&e.connected),f=[];
e=e||{};
a(d).each(function(){var b=(a(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[-=_](.+)/);
if(b){f.push((e.key||b[1]+"[]")+"="+(e.key&&e.expression?b[1]:b[2]))
}});
!f.length&&e.key&&f.push(e.key+"=");
return f.join("&")
},toArray:function(e){var d=this._getItemsAsjQuery(e&&e.connected),f=[];
e=e||{};
d.each(function(){f.push(a(e.item||this).attr(e.attribute||"id")||"")
});
return f
},_intersectsWith:function(w){var v=this.positionAbs.left,u=v+this.helperProportions.width,s=this.positionAbs.top,r=s+this.helperProportions.height,q=w.left,p=q+w.width,o=w.top,m=o+w.height,n=this.offset.click.top,d=this.offset.click.left;
n=s+n>o&&s+n<m&&v+d>q&&v+d<p;
return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>w[this.floating?"width":"height"]?n:q<v+this.helperProportions.width/2&&u-this.helperProportions.width/2<p&&o<s+this.helperProportions.height/2&&r-this.helperProportions.height/2<m
},_intersectsWithPointer:function(e){var d=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,e.top,e.height);
e=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,e.left,e.width);
d=d&&e;
e=this._getDragVerticalDirection();
var f=this._getDragHorizontalDirection();
if(!d){return false
}return this.floating?f&&f=="right"||e=="down"?2:1:e&&(e=="down"?2:1)
},_intersectsWithSides:function(f){var d=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,f.top+f.height/2,f.height);
f=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,f.left+f.width/2,f.width);
var h=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();
return this.floating&&g?g=="right"&&f||g=="left"&&!f:h&&(h=="down"&&d||h=="up"&&!d)
},_getDragVerticalDirection:function(){var b=this.positionAbs.top-this.lastPositionAbs.top;
return b!=0&&(b>0?"down":"up")
},_getDragHorizontalDirection:function(){var b=this.positionAbs.left-this.lastPositionAbs.left;
return b!=0&&(b>0?"right":"left")
},refresh:function(b){this._refreshItems(b);
this.refreshPositions();
return this
},_connectWith:function(){var b=this.options;
return b.connectWith.constructor==String?[b.connectWith]:b.connectWith
},_getItemsAsjQuery:function(j){var d=[],o=[],n=this._connectWith();
if(n&&j){for(j=n.length-1;
j>=0;
j--){for(var m=a(n[j]),l=m.length-1;
l>=0;
l--){var k=a.data(m[l],"sortable");
if(k&&k!=this&&!k.options.disabled){o.push([a.isFunction(k.options.items)?k.options.items.call(k.element):a(k.options.items,k.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),k])
}}}}o.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);
for(j=o.length-1;
j>=0;
j--){o[j][0].each(function(){d.push(this)
})
}return a(d)
},_removeCurrentsFromItems:function(){for(var e=this.currentItem.find(":data(sortable-item)"),d=0;
d<this.items.length;
d++){for(var f=0;
f<e.length;
f++){e[f]==this.items[d].item[0]&&this.items.splice(d,1)
}}},_refreshItems:function(j){this.items=[];
this.containers=[this];
var d=this.items,p=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],j,{item:this.currentItem}):a(this.options.items,this.element),this]],o=this._connectWith();
if(o){for(var n=o.length-1;
n>=0;
n--){for(var m=a(o[n]),l=m.length-1;
l>=0;
l--){var k=a.data(m[l],"sortable");
if(k&&k!=this&&!k.options.disabled){p.push([a.isFunction(k.options.items)?k.options.items.call(k.element[0],j,{item:this.currentItem}):a(k.options.items,k.element),k]);
this.containers.push(k)
}}}}for(n=p.length-1;
n>=0;
n--){j=p[n][1];
o=p[n][0];
l=0;
for(m=o.length;
l<m;
l++){k=a(o[l]);
k.data("sortable-item",j);
d.push({item:k,instance:j,width:0,height:0,left:0,top:0})
}}},refreshPositions:function(f){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()
}for(var d=this.items.length-1;
d>=0;
d--){var h=this.items[d];
if(!(h.instance!=this.currentContainer&&this.currentContainer&&h.item[0]!=this.currentItem[0])){var g=this.options.toleranceElement?a(this.options.toleranceElement,h.item):h.item;
if(!f){h.width=g.outerWidth();
h.height=g.outerHeight()
}g=g.offset();
h.left=g.left;
h.top=g.top
}}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)
}else{for(d=this.containers.length-1;
d>=0;
d--){g=this.containers[d].element.offset();
this.containers[d].containerCache.left=g.left;
this.containers[d].containerCache.top=g.top;
this.containers[d].containerCache.width=this.containers[d].element.outerWidth();
this.containers[d].containerCache.height=this.containers[d].element.outerHeight()
}}return this
},_createPlaceholder:function(f){var d=f||this,h=d.options;
if(!h.placeholder||h.placeholder.constructor==String){var g=h.placeholder;
h.placeholder={element:function(){var b=a(document.createElement(d.currentItem[0].nodeName)).addClass(g||d.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
if(!g){b.style.visibility="hidden"
}return b
},update:function(c,b){if(!(g&&!h.forcePlaceholderSize)){b.height()||b.height(d.currentItem.innerHeight()-parseInt(d.currentItem.css("paddingTop")||0,10)-parseInt(d.currentItem.css("paddingBottom")||0,10));
b.width()||b.width(d.currentItem.innerWidth()-parseInt(d.currentItem.css("paddingLeft")||0,10)-parseInt(d.currentItem.css("paddingRight")||0,10))
}}}
}d.placeholder=a(h.placeholder.element.call(d.element,d.currentItem));
d.currentItem.after(d.placeholder);
h.placeholder.update(d,d.placeholder)
},_contactContainers:function(j){for(var d=null,o=null,n=this.containers.length-1;
n>=0;
n--){if(!a.ui.contains(this.currentItem[0],this.containers[n].element[0])){if(this._intersectsWith(this.containers[n].containerCache)){if(!(d&&a.ui.contains(this.containers[n].element[0],d.element[0]))){d=this.containers[n];
o=n
}}else{if(this.containers[n].containerCache.over){this.containers[n]._trigger("out",j,this._uiHash(this));
this.containers[n].containerCache.over=0
}}}}if(d){if(this.containers.length===1){this.containers[o]._trigger("over",j,this._uiHash(this));
this.containers[o].containerCache.over=1
}else{if(this.currentContainer!=this.containers[o]){d=10000;
n=null;
for(var m=this.positionAbs[this.containers[o].floating?"left":"top"],l=this.items.length-1;
l>=0;
l--){if(a.ui.contains(this.containers[o].element[0],this.items[l].item[0])){var k=this.items[l][this.containers[o].floating?"left":"top"];
if(Math.abs(k-m)<d){d=Math.abs(k-m);
n=this.items[l]
}}}if(n||this.options.dropOnEmpty){this.currentContainer=this.containers[o];
n?this._rearrange(j,n,null,true):this._rearrange(j,null,this.containers[o].element,true);
this._trigger("change",j,this._uiHash());
this.containers[o]._trigger("change",j,this._uiHash(this));
this.options.placeholder.update(this.currentContainer,this.placeholder);
this.containers[o]._trigger("over",j,this._uiHash(this));
this.containers[o].containerCache.over=1
}}}}},_createHelper:function(d){var c=this.options;
d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[d,this.currentItem])):c.helper=="clone"?this.currentItem.clone():this.currentItem;
d.parents("body").length||a(c.appendTo!="parent"?c.appendTo:this.currentItem[0].parentNode)[0].appendChild(d[0]);
if(d[0]==this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}
}if(d[0].style.width==""||c.forceHelperSize){d.width(this.currentItem.width())
}if(d[0].style.height==""||c.forceHelperSize){d.height(this.currentItem.height())
}return d
},_adjustOffsetFromHelper:function(b){if(typeof b=="string"){b=b.split(" ")
}if(a.isArray(b)){b={left:+b[0],top:+b[1]||0}
}if("left" in b){this.offset.click.left=b.left+this.margins.left
}if("right" in b){this.offset.click.left=this.helperProportions.width-b.right+this.margins.left
}if("top" in b){this.offset.click.top=b.top+this.margins.top
}if("bottom" in b){this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top
}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
var b=this.offsetParent.offset();
if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])){b.left+=this.scrollParent.scrollLeft();
b.top+=this.scrollParent.scrollTop()
}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie){b={top:0,left:0}
}return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var b=this.currentItem.position();
return{top:b.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:b.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}
}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var e=this.options;
if(e.containment=="parent"){e.containment=this.helper[0].parentNode
}if(e.containment=="document"||e.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(e.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(e.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
}if(!/^(document|window|parent)$/.test(e.containment)){var d=a(e.containment)[0];
e=a(e.containment).offset();
var f=a(d).css("overflow")!="hidden";
this.containment=[e.left+(parseInt(a(d).css("borderLeftWidth"),10)||0)+(parseInt(a(d).css("paddingLeft"),10)||0)-this.margins.left,e.top+(parseInt(a(d).css("borderTopWidth"),10)||0)+(parseInt(a(d).css("paddingTop"),10)||0)-this.margins.top,e.left+(f?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(a(d).css("borderLeftWidth"),10)||0)-(parseInt(a(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,e.top+(f?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(a(d).css("borderTopWidth"),10)||0)-(parseInt(a(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]
}},_convertPositionTo:function(f,d){if(!d){d=this.position
}f=f=="absolute"?1:-1;
var h=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(h[0].tagName);
return{top:d.top+this.offset.relative.top*f+this.offset.parent.top*f-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:h.scrollTop())*f),left:d.left+this.offset.relative.left*f+this.offset.parent.left*f-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:h.scrollLeft())*f)}
},_generatePosition:function(h){var d=this.options,m=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,l=/(html|body)/i.test(m[0].tagName);
if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()
}var k=h.pageX,j=h.pageY;
if(this.originalPosition){if(this.containment){if(h.pageX-this.offset.click.left<this.containment[0]){k=this.containment[0]+this.offset.click.left
}if(h.pageY-this.offset.click.top<this.containment[1]){j=this.containment[1]+this.offset.click.top
}if(h.pageX-this.offset.click.left>this.containment[2]){k=this.containment[2]+this.offset.click.left
}if(h.pageY-this.offset.click.top>this.containment[3]){j=this.containment[3]+this.offset.click.top
}}if(d.grid){j=this.originalPageY+Math.round((j-this.originalPageY)/d.grid[1])*d.grid[1];
j=this.containment?!(j-this.offset.click.top<this.containment[1]||j-this.offset.click.top>this.containment[3])?j:!(j-this.offset.click.top<this.containment[1])?j-d.grid[1]:j+d.grid[1]:j;
k=this.originalPageX+Math.round((k-this.originalPageX)/d.grid[0])*d.grid[0];
k=this.containment?!(k-this.offset.click.left<this.containment[0]||k-this.offset.click.left>this.containment[2])?k:!(k-this.offset.click.left<this.containment[0])?k-d.grid[0]:k+d.grid[0]:k
}}return{top:j-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():l?0:m.scrollTop()),left:k-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():l?0:m.scrollLeft())}
},_rearrange:function(h,d,m,l){m?m[0].appendChild(this.placeholder[0]):d.item[0].parentNode.insertBefore(this.placeholder[0],this.direction=="down"?d.item[0]:d.item[0].nextSibling);
this.counter=this.counter?++this.counter:1;
var k=this,j=this.counter;
window.setTimeout(function(){j==k.counter&&k.refreshPositions(!l)
},0)
},_clear:function(f,d){this.reverting=false;
var h=[];
!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem);
this._noFinalSort=null;
if(this.helper[0]==this.currentItem[0]){for(var g in this._storedCSS){if(this._storedCSS[g]=="auto"||this._storedCSS[g]=="static"){this._storedCSS[g]=""
}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
}else{this.currentItem.show()
}this.fromOutside&&!d&&h.push(function(b){this._trigger("receive",b,this._uiHash(this.fromOutside))
});
if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!d){h.push(function(b){this._trigger("update",b,this._uiHash())
})
}if(!a.ui.contains(this.element[0],this.currentItem[0])){d||h.push(function(b){this._trigger("remove",b,this._uiHash())
});
for(g=this.containers.length-1;
g>=0;
g--){if(a.ui.contains(this.containers[g].element[0],this.currentItem[0])&&!d){h.push(function(b){return function(c){b._trigger("receive",c,this._uiHash(this))
}
}.call(this,this.containers[g]));
h.push(function(b){return function(c){b._trigger("update",c,this._uiHash(this))
}
}.call(this,this.containers[g]))
}}}for(g=this.containers.length-1;
g>=0;
g--){d||h.push(function(b){return function(c){b._trigger("deactivate",c,this._uiHash(this))
}
}.call(this,this.containers[g]));
if(this.containers[g].containerCache.over){h.push(function(b){return function(c){b._trigger("out",c,this._uiHash(this))
}
}.call(this,this.containers[g]));
this.containers[g].containerCache.over=0
}}this._storedCursor&&a("body").css("cursor",this._storedCursor);
this._storedOpacity&&this.helper.css("opacity",this._storedOpacity);
if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex)
}this.dragging=false;
if(this.cancelHelperRemoval){if(!d){this._trigger("beforeStop",f,this._uiHash());
for(g=0;
g<h.length;
g++){h[g].call(this,f)
}this._trigger("stop",f,this._uiHash())
}return false
}d||this._trigger("beforeStop",f,this._uiHash());
this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
this.helper[0]!=this.currentItem[0]&&this.helper.remove();
this.helper=null;
if(!d){for(g=0;
g<h.length;
g++){h[g].call(this,f)
}this._trigger("stop",f,this._uiHash())
}this.fromOutside=false;
return true
},_trigger:function(){a.Widget.prototype._trigger.apply(this,arguments)===false&&this.cancel()
},_uiHash:function(d){var c=d||this;
return{helper:c.helper,placeholder:c.placeholder||a([]),position:c.position,originalPosition:c.originalPosition,offset:c.positionAbs,item:c.currentItem,sender:d?d.element:null}
}});
a.extend(a.ui.sortable,{version:"1.8.16"})
})(jQuery);
(function(a){a.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()
}},_create:function(){var e=this,c=e.options;
e.running=0;
e.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");
e.headers=e.element.find(c.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){c.disabled||a(this).addClass("ui-state-hover")
}).bind("mouseleave.accordion",function(){c.disabled||a(this).removeClass("ui-state-hover")
}).bind("focus.accordion",function(){c.disabled||a(this).addClass("ui-state-focus")
}).bind("blur.accordion",function(){c.disabled||a(this).removeClass("ui-state-focus")
});
e.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
if(c.navigation){var g=e.element.find("a").filter(c.navigationFilter).eq(0);
if(g.length){var f=g.closest(".ui-accordion-header");
e.active=f.length?f:g.closest(".ui-accordion-content").prev()
}}e.active=e._findActive(e.active||c.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");
e.active.next().addClass("ui-accordion-content-active");
e._createIcons();
e.resize();
e.element.attr("role","tablist");
e.headers.attr("role","tab").bind("keydown.accordion",function(b){return e._keydown(b)
}).next().attr("role","tabpanel");
e.headers.not(e.active||"").attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).next().hide();
e.active.length?e.active.attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}):e.headers.eq(0).attr("tabIndex",0);
a.browser.safari||e.headers.find("a").attr("tabIndex",-1);
c.event&&e.headers.bind(c.event.split(" ").join(".accordion ")+".accordion",function(b){e._clickHandler.call(e,b,this);
b.preventDefault()
})
},_createIcons:function(){var b=this.options;
if(b.icons){a("<span></span>").addClass("ui-icon "+b.icons.header).prependTo(this.headers);
this.active.children(".ui-icon").toggleClass(b.icons.header).toggleClass(b.icons.headerSelected);
this.element.addClass("ui-accordion-icons")
}},_destroyIcons:function(){this.headers.children(".ui-icon").remove();
this.element.removeClass("ui-accordion-icons")
},destroy:function(){var d=this.options;
this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex");
this.headers.find("a").removeAttr("tabIndex");
this._destroyIcons();
var c=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");
if(d.autoHeight||d.fillHeight){c.css("height","")
}return a.Widget.prototype.destroy.call(this)
},_setOption:function(d,c){a.Widget.prototype._setOption.apply(this,arguments);
d=="active"&&this.activate(c);
if(d=="icons"){this._destroyIcons();
c&&this._createIcons()
}if(d=="disabled"){this.headers.add(this.headers.next())[c?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")
}},_keydown:function(e){if(!(this.options.disabled||e.altKey||e.ctrlKey)){var c=a.ui.keyCode,k=this.headers.length,g=this.headers.index(e.target),j=false;
switch(e.keyCode){case c.RIGHT:case c.DOWN:j=this.headers[(g+1)%k];
break;
case c.LEFT:case c.UP:j=this.headers[(g-1+k)%k];
break;
case c.SPACE:case c.ENTER:this._clickHandler({target:e.target},e.target);
e.preventDefault()
}if(j){a(e.target).attr("tabIndex",-1);
a(j).attr("tabIndex",0);
j.focus();
return false
}return true
}},resize:function(){var e=this.options,c;
if(e.fillSpace){if(a.browser.msie){var f=this.element.parent().css("overflow");
this.element.parent().css("overflow","hidden")
}c=this.element.parent().height();
a.browser.msie&&this.element.parent().css("overflow",f);
this.headers.each(function(){c-=a(this).outerHeight(true)
});
this.headers.next().each(function(){a(this).height(Math.max(0,c-a(this).innerHeight()+a(this).height()))
}).css("overflow","auto")
}else{if(e.autoHeight){c=0;
this.headers.next().each(function(){c=Math.max(c,a(this).height("").height())
}).height(c)
}}return this
},activate:function(b){this.options.active=b;
b=this._findActive(b)[0];
this._clickHandler({target:b},b);
return this
},_findActive:function(b){return b?typeof b==="number"?this.headers.filter(":eq("+b+")"):this.headers.not(this.headers.not(b)):b===false?a([]):this.headers.filter(":eq(0)")
},_clickHandler:function(k,c){var q=this.options;
if(!q.disabled){if(k.target){k=a(k.currentTarget||c);
c=k[0]===this.active[0];
q.active=q.collapsible&&c?false:this.headers.index(k);
if(!(this.running||!q.collapsible&&c)){var m=this.active;
l=k.next();
n=this.active.next();
p={options:q,newHeader:c&&q.collapsible?a([]):k,oldHeader:this.active,newContent:c&&q.collapsible?a([]):l,oldContent:n};
var o=this.headers.index(this.active[0])>this.headers.index(k[0]);
this.active=c?a([]):k;
this._toggle(l,n,p,c,o);
m.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(q.icons.headerSelected).addClass(q.icons.header);
if(!c){k.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(q.icons.header).addClass(q.icons.headerSelected);
k.next().addClass("ui-accordion-content-active")
}}}else{if(q.collapsible){this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(q.icons.headerSelected).addClass(q.icons.header);
this.active.next().addClass("ui-accordion-content-active");
var n=this.active.next(),p={options:q,newHeader:a([]),oldHeader:q.active,newContent:a([]),oldContent:n},l=this.active=a([]);
this._toggle(l,n,p)
}}}},_toggle:function(u,s,r,n,p){var o=this,q=o.options;
o.toShow=u;
o.toHide=s;
o.data=r;
var l=function(){if(o){return o._completed.apply(o,arguments)
}};
o._trigger("changestart",null,o.data);
o.running=s.size()===0?u.size():s.size();
if(q.animated){r={};
r=q.collapsible&&n?{toShow:a([]),toHide:s,complete:l,down:p,autoHeight:q.autoHeight||q.fillSpace}:{toShow:u,toHide:s,complete:l,down:p,autoHeight:q.autoHeight||q.fillSpace};
if(!q.proxied){q.proxied=q.animated
}if(!q.proxiedDuration){q.proxiedDuration=q.duration
}q.animated=a.isFunction(q.proxied)?q.proxied(r):q.proxied;
q.duration=a.isFunction(q.proxiedDuration)?q.proxiedDuration(r):q.proxiedDuration;
n=a.ui.accordion.animations;
var m=q.duration,c=q.animated;
if(c&&!n[c]&&!a.easing[c]){c="slide"
}n[c]||(n[c]=function(b){this.slide(b,{easing:c,duration:m||700})
});
n[c](r)
}else{if(q.collapsible&&n){u.toggle()
}else{s.hide();
u.show()
}l(true)
}s.prev().attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).blur();
u.prev().attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}).focus()
},_completed:function(b){this.running=b?0:--this.running;
if(!this.running){this.options.clearStyle&&this.toShow.add(this.toHide).css({height:"",overflow:""});
this.toHide.removeClass("ui-accordion-content-active");
if(this.toHide.length){this.toHide.parent()[0].className=this.toHide.parent()[0].className
}this._trigger("change",null,this.data)
}}});
a.extend(a.ui.accordion,{version:"1.8.16",animations:{slide:function(j,c){j=a.extend({easing:"swing",duration:300},j,c);
if(j.toHide.size()){if(j.toShow.size()){var o=j.toShow.css("overflow"),k=0,m={},l={},n;
c=j.toShow;
n=c[0].style.width;
c.width(parseInt(c.parent().width(),10)-parseInt(c.css("paddingLeft"),10)-parseInt(c.css("paddingRight"),10)-(parseInt(c.css("borderLeftWidth"),10)||0)-(parseInt(c.css("borderRightWidth"),10)||0));
a.each(["height","paddingTop","paddingBottom"],function(b,d){l[d]="hide";
b=(""+a.css(j.toShow[0],d)).match(/^([\d+-.]+)(.*)$/);
m[d]={value:b[1],unit:b[2]||"px"}
});
j.toShow.css({height:0,overflow:"hidden"}).show();
j.toHide.filter(":hidden").each(j.complete).end().filter(":visible").animate(l,{step:function(b,d){if(d.prop=="height"){k=d.end-d.start===0?0:(d.now-d.start)/(d.end-d.start)
}j.toShow[0].style[d.prop]=k*m[d.prop].value+m[d.prop].unit
},duration:j.duration,easing:j.easing,complete:function(){j.autoHeight||j.toShow.css("height","");
j.toShow.css({width:n,overflow:o});
j.complete()
}})
}else{j.toHide.animate({height:"hide",paddingTop:"hide",paddingBottom:"hide"},j)
}}else{j.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},j)
}},bounceslide:function(b){this.slide(b,{easing:b.down?"easeOutBounce":"swing",duration:b.down?1000:200})
}}})
})(jQuery);
(function(b){var a=0;
b.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var d=this,c=this.element[0].ownerDocument,e;
this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(h){if(!(d.options.disabled||d.element.propAttr("readOnly"))){e=false;
var g=b.ui.keyCode;
switch(h.keyCode){case g.PAGE_UP:d._move("previousPage",h);
break;
case g.PAGE_DOWN:d._move("nextPage",h);
break;
case g.UP:d._move("previous",h);
h.preventDefault();
break;
case g.DOWN:d._move("next",h);
h.preventDefault();
break;
case g.ENTER:case g.NUMPAD_ENTER:if(d.menu.active){e=true;
h.preventDefault()
}case g.TAB:if(!d.menu.active){return
}d.menu.select(h);
break;
case g.ESCAPE:d.element.val(d.term);
d.close(h);
break;
default:clearTimeout(d.searching);
d.searching=setTimeout(function(){if(d.term!=d.element.val()){d.selectedItem=null;
d.search(null,h)
}},d.options.delay);
break
}}}).bind("keypress.autocomplete",function(f){if(e){e=false;
f.preventDefault()
}}).bind("focus.autocomplete",function(){if(!d.options.disabled){d.selectedItem=null;
d.previous=d.element.val()
}}).bind("blur.autocomplete",function(f){if(!d.options.disabled){clearTimeout(d.searching);
d.closing=setTimeout(function(){d.close(f);
d._change(f)
},150)
}});
this._initSource();
this.response=function(){return d._response.apply(d,arguments)
};
this.menu=b("<ul></ul>").addClass("ui-autocomplete").appendTo(b(this.options.appendTo||"body",c)[0]).mousedown(function(h){var g=d.menu.element[0];
b(h.target).closest(".ui-menu-item").length||setTimeout(function(){b(document).one("mousedown",function(f){f.target!==d.element[0]&&f.target!==g&&!b.ui.contains(g,f.target)&&d.close()
})
},1);
setTimeout(function(){clearTimeout(d.closing)
},13)
}).menu({focus:function(h,g){g=g.item.data("item.autocomplete");
false!==d._trigger("focus",h,{item:g})&&/^key/.test(h.originalEvent.type)&&d.element.val(g.value)
},selected:function(l,k){var j=k.item.data("item.autocomplete"),g=d.previous;
if(d.element[0]!==c.activeElement){d.element.focus();
d.previous=g;
setTimeout(function(){d.previous=g;
d.selectedItem=j
},1)
}false!==d._trigger("select",l,{item:j})&&d.element.val(j.value);
d.term=d.element.val();
d.close(l);
d.selectedItem=j
},blur:function(){d.menu.element.is(":visible")&&d.element.val()!==d.term&&d.element.val(d.term)
}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");
b.fn.bgiframe&&this.menu.element.bgiframe()
},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");
this.menu.element.remove();
b.Widget.prototype.destroy.call(this)
},_setOption:function(d,c){b.Widget.prototype._setOption.apply(this,arguments);
d==="source"&&this._initSource();
if(d==="appendTo"){this.menu.element.appendTo(b(c||"body",this.element[0].ownerDocument)[0])
}d==="disabled"&&c&&this.xhr&&this.xhr.abort()
},_initSource:function(){var d=this,c,e;
if(b.isArray(this.options.source)){c=this.options.source;
this.source=function(h,g){g(b.ui.autocomplete.filter(c,h.term))
}
}else{if(typeof this.options.source==="string"){e=this.options.source;
this.source=function(h,g){d.xhr&&d.xhr.abort();
d.xhr=b.ajax({url:e,data:h,dataType:"json",autocompleteRequest:++a,success:function(f){this.autocompleteRequest===a&&g(f)
},error:function(){this.autocompleteRequest===a&&g([])
}})
}
}else{this.source=this.options.source
}}},search:function(d,c){d=d!=null?d:this.element.val();
this.term=this.element.val();
if(d.length<this.options.minLength){return this.close(c)
}clearTimeout(this.closing);
if(this._trigger("search",c)!==false){return this._search(d)
}},_search:function(c){this.pending++;
this.element.addClass("ui-autocomplete-loading");
this.source({term:c},this.response)
},_response:function(c){if(!this.options.disabled&&c&&c.length){c=this._normalize(c);
this._suggest(c);
this._trigger("open")
}else{this.close()
}this.pending--;
this.pending||this.element.removeClass("ui-autocomplete-loading")
},close:function(c){clearTimeout(this.closing);
if(this.menu.element.is(":visible")){this.menu.element.hide();
this.menu.deactivate();
this._trigger("close",c)
}},_change:function(c){this.previous!==this.element.val()&&this._trigger("change",c,{item:this.selectedItem})
},_normalize:function(c){if(c.length&&c[0].label&&c[0].value){return c
}return b.map(c,function(d){if(typeof d==="string"){return{label:d,value:d}
}return b.extend({label:d.label||d.value,value:d.value||d.label},d)
})
},_suggest:function(d){var c=this.menu.element.empty().zIndex(this.element.zIndex()+1);
this._renderMenu(c,d);
this.menu.deactivate();
this.menu.refresh();
c.show();
this._resizeMenu();
c.position(b.extend({of:this.element},this.options.position));
this.options.autoFocus&&this.menu.next(new b.Event("mouseover"))
},_resizeMenu:function(){var c=this.menu.element;
c.outerWidth(Math.max(c.width("").outerWidth(),this.element.outerWidth()))
},_renderMenu:function(d,c){var e=this;
b.each(c,function(h,g){e._renderItem(d,g)
})
},_renderItem:function(d,c){return b("<li></li>").data("item.autocomplete",c).append(b("<a></a>").text(c.label)).appendTo(d)
},_move:function(d,c){if(this.menu.element.is(":visible")){if(this.menu.first()&&/^previous/.test(d)||this.menu.last()&&/^next/.test(d)){this.element.val(this.term);
this.menu.deactivate()
}else{this.menu[d](c)
}}else{this.search(null,c)
}},widget:function(){return this.menu.element
}});
b.extend(b.ui.autocomplete,{escapeRegex:function(c){return c.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")
},filter:function(d,c){var e=new RegExp(b.ui.autocomplete.escapeRegex(c),"i");
return b.grep(d,function(f){return e.test(f.label||f.value||f)
})
}})
})(jQuery);
(function(a){a.widget("ui.menu",{_create:function(){var b=this;
this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(c){if(a(c.target).closest(".ui-menu-item a").length){c.preventDefault();
b.select(c)
}});
this.refresh()
},refresh:function(){var b=this;
this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem").children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(c){b.activate(c,a(this).parent())
}).mouseleave(function(){b.deactivate()
})
},activate:function(j,f){this.deactivate();
if(this.hasScroll()){var d=f.offset().top-this.element.offset().top,h=this.element.scrollTop(),k=this.element.height();
if(d<0){this.element.scrollTop(h+d)
}else{d>=k&&this.element.scrollTop(h+d-k+f.height())
}}this.active=f.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();
this._trigger("focus",j,{item:f})
},deactivate:function(){if(this.active){this.active.children("a").removeClass("ui-state-hover").removeAttr("id");
this._trigger("blur");
this.active=null
}},next:function(b){this.move("next",".ui-menu-item:first",b)
},previous:function(b){this.move("prev",".ui-menu-item:last",b)
},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length
},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length
},move:function(f,d,c){if(this.active){f=this.active[f+"All"](".ui-menu-item").eq(0);
f.length?this.activate(c,f):this.activate(c,this.element.children(d))
}else{this.activate(c,this.element.children(d))
}},nextPage:function(h){if(this.hasScroll()){if(!this.active||this.last()){this.activate(h,this.element.children(".ui-menu-item:first"))
}else{var d=this.active.offset().top,c=this.element.height(),f=this.element.children(".ui-menu-item").filter(function(){var b=a(this).offset().top-d-c+a(this).height();
return b<10&&b>-10
});
f.length||(f=this.element.children(".ui-menu-item:last"));
this.activate(h,f)
}}else{this.activate(h,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))
}},previousPage:function(f){if(this.hasScroll()){if(!this.active||this.first()){this.activate(f,this.element.children(".ui-menu-item:last"))
}else{var d=this.active.offset().top,c=this.element.height();
result=this.element.children(".ui-menu-item").filter(function(){var b=a(this).offset().top-d+c-a(this).height();
return b<10&&b>-10
});
result.length||(result=this.element.children(".ui-menu-item:first"));
this.activate(f,result)
}}else{this.activate(f,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))
}},hasScroll:function(){return this.element.height()<this.element[a.fn.prop?"prop":"attr"]("scrollHeight")
},select:function(b){this._trigger("selected",b,{item:this.active})
}})
})(jQuery);
(function(a){var m,f,e,n,c=function(){var b=a(this).find(":ui-button");
setTimeout(function(){b.button("refresh")
},1)
},d=function(b){var j=b.name,h=b.form,g=a([]);
if(j){g=h?a(h).find("[name='"+j+"']"):a("[name='"+j+"']",b.ownerDocument).filter(function(){return !this.form
})
}return g
};
a.widget("ui.button",{options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",c);
if(typeof this.options.disabled!=="boolean"){this.options.disabled=this.element.propAttr("disabled")
}this._determineButtonType();
this.hasTitle=!!this.buttonElement.attr("title");
var b=this,j=this.options,h=this.type==="checkbox"||this.type==="radio",g="ui-state-hover"+(!h?" ui-state-active":"");
if(j.label===null){j.label=this.buttonElement.html()
}if(this.element.is(":disabled")){j.disabled=true
}this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role","button").bind("mouseenter.button",function(){if(!j.disabled){a(this).addClass("ui-state-hover");
this===m&&a(this).addClass("ui-state-active")
}}).bind("mouseleave.button",function(){j.disabled||a(this).removeClass(g)
}).bind("click.button",function(k){if(j.disabled){k.preventDefault();
k.stopImmediatePropagation()
}});
this.element.bind("focus.button",function(){b.buttonElement.addClass("ui-state-focus")
}).bind("blur.button",function(){b.buttonElement.removeClass("ui-state-focus")
});
if(h){this.element.bind("change.button",function(){n||b.refresh()
});
this.buttonElement.bind("mousedown.button",function(k){if(!j.disabled){n=false;
f=k.pageX;
e=k.pageY
}}).bind("mouseup.button",function(k){if(!j.disabled){if(f!==k.pageX||e!==k.pageY){n=true
}}})
}if(this.type==="checkbox"){this.buttonElement.bind("click.button",function(){if(j.disabled||n){return false
}a(this).toggleClass("ui-state-active");
b.buttonElement.attr("aria-pressed",b.element[0].checked)
})
}else{if(this.type==="radio"){this.buttonElement.bind("click.button",function(){if(j.disabled||n){return false
}a(this).addClass("ui-state-active");
b.buttonElement.attr("aria-pressed","true");
var k=b.element[0];
d(k).not(k).map(function(){return a(this).button("widget")[0]
}).removeClass("ui-state-active").attr("aria-pressed","false")
})
}else{this.buttonElement.bind("mousedown.button",function(){if(j.disabled){return false
}a(this).addClass("ui-state-active");
m=this;
a(document).one("mouseup",function(){m=null
})
}).bind("mouseup.button",function(){if(j.disabled){return false
}a(this).removeClass("ui-state-active")
}).bind("keydown.button",function(k){if(j.disabled){return false
}if(k.keyCode==a.ui.keyCode.SPACE||k.keyCode==a.ui.keyCode.ENTER){a(this).addClass("ui-state-active")
}}).bind("keyup.button",function(){a(this).removeClass("ui-state-active")
});
this.buttonElement.is("a")&&this.buttonElement.keyup(function(k){k.keyCode===a.ui.keyCode.SPACE&&a(this).click()
})
}}this._setOption("disabled",j.disabled);
this._resetButton()
},_determineButtonType:function(){this.type=this.element.is(":checkbox")?"checkbox":this.element.is(":radio")?"radio":this.element.is("input")?"input":"button";
if(this.type==="checkbox"||this.type==="radio"){var b=this.element.parents().filter(":last"),g="label[for='"+this.element.attr("id")+"']";
this.buttonElement=b.find(g);
if(!this.buttonElement.length){b=b.length?b.siblings():this.element.siblings();
this.buttonElement=b.filter(g);
if(!this.buttonElement.length){this.buttonElement=b.find(g)
}}this.element.addClass("ui-helper-hidden-accessible");
(b=this.element.is(":checked"))&&this.buttonElement.addClass("ui-state-active");
this.buttonElement.attr("aria-pressed",b)
}else{this.buttonElement=this.element
}},widget:function(){return this.buttonElement
},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");
this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
this.hasTitle||this.buttonElement.removeAttr("title");
a.Widget.prototype.destroy.call(this)
},_setOption:function(b,g){a.Widget.prototype._setOption.apply(this,arguments);
if(b==="disabled"){g?this.element.propAttr("disabled",true):this.element.propAttr("disabled",false)
}else{this._resetButton()
}},refresh:function(){var b=this.element.is(":disabled");
b!==this.options.disabled&&this._setOption("disabled",b);
if(this.type==="radio"){d(this.element[0]).each(function(){a(this).is(":checked")?a(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")
})
}else{if(this.type==="checkbox"){this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")
}}},_resetButton:function(){if(this.type==="input"){this.options.label&&this.element.val(this.options.label)
}else{var b=this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),k=a("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),h=this.options.icons,g=h.primary&&h.secondary,j=[];
if(h.primary||h.secondary){if(this.options.text){j.push("ui-button-text-icon"+(g?"s":h.primary?"-primary":"-secondary"))
}h.primary&&b.prepend("<span class='ui-button-icon-primary ui-icon "+h.primary+"'></span>");
h.secondary&&b.append("<span class='ui-button-icon-secondary ui-icon "+h.secondary+"'></span>");
if(!this.options.text){j.push(g?"ui-button-icons-only":"ui-button-icon-only");
this.hasTitle||b.attr("title",k)
}}else{j.push("ui-button-text-only")
}b.addClass(j.join(" "))
}}});
a.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")
},_init:function(){this.refresh()
},_setOption:function(b,g){b==="disabled"&&this.buttons.button("option",b,g);
a.Widget.prototype._setOption.apply(this,arguments)
},refresh:function(){var b=this.element.css("direction")==="ltr";
this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return a(this).button("widget")[0]
}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b?"ui-corner-left":"ui-corner-right").end().filter(":last").addClass(b?"ui-corner-right":"ui-corner-left").end().end()
},destroy:function(){this.element.removeClass("ui-buttonset");
this.buttons.map(function(){return a(this).button("widget")[0]
}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
a.Widget.prototype.destroy.call(this)
}})
})(jQuery);
(function(f,b){var a={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},e={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true},d=f.attrFn||{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true,click:true};
f.widget("ui.dialog",{options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",collision:"fit",using:function(g){var c=f(this).css(g).offset().top;
c<0&&f(this).css("top",g.top-c)
}},resizable:true,show:null,stack:true,title:"",width:300,zIndex:1000},_create:function(){this.originalTitle=this.element.attr("title");
if(typeof this.originalTitle!=="string"){this.originalTitle=""
}this.options.title=this.options.title||this.originalTitle;
var j=this,c=j.options,o=c.title||"&#160;",n=f.ui.dialog.getTitleId(j.element),l=(j.uiDialog=f("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+c.dialogClass).css({zIndex:c.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(g){if(c.closeOnEscape&&!g.isDefaultPrevented()&&g.keyCode&&g.keyCode===f.ui.keyCode.ESCAPE){j.close(g);
g.preventDefault()
}}).attr({role:"dialog","aria-labelledby":n}).mousedown(function(g){j.moveToTop(false,g)
});
j.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(l);
var m=(j.uiDialogTitlebar=f("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(l),k=f('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){k.addClass("ui-state-hover")
},function(){k.removeClass("ui-state-hover")
}).focus(function(){k.addClass("ui-state-focus")
}).blur(function(){k.removeClass("ui-state-focus")
}).click(function(g){j.close(g);
return false
}).appendTo(m);
(j.uiDialogTitlebarCloseText=f("<span></span>")).addClass("ui-icon ui-icon-closethick").text(c.closeText).appendTo(k);
f("<span></span>").addClass("ui-dialog-title").attr("id",n).html(o).prependTo(m);
if(f.isFunction(c.beforeclose)&&!f.isFunction(c.beforeClose)){c.beforeClose=c.beforeclose
}m.find("*").add(m).disableSelection();
c.draggable&&f.fn.draggable&&j._makeDraggable();
c.resizable&&f.fn.resizable&&j._makeResizable();
j._createButtons(c.buttons);
j._isOpen=false;
f.fn.bgiframe&&l.bgiframe()
},_init:function(){this.options.autoOpen&&this.open()
},destroy:function(){var c=this;
c.overlay&&c.overlay.destroy();
c.uiDialog.hide();
c.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");
c.uiDialog.remove();
c.originalTitle&&c.element.attr("title",c.originalTitle);
return c
},widget:function(){return this.uiDialog
},close:function(g){var c=this,j,h;
if(false!==c._trigger("beforeClose",g)){c.overlay&&c.overlay.destroy();
c.uiDialog.unbind("keypress.ui-dialog");
c._isOpen=false;
if(c.options.hide){c.uiDialog.hide(c.options.hide,function(){c._trigger("close",g)
})
}else{c.uiDialog.hide();
c._trigger("close",g)
}f.ui.dialog.overlay.resize();
if(c.options.modal){j=0;
f(".ui-dialog").each(function(){if(this!==c.uiDialog[0]){h=f(this).css("z-index");
isNaN(h)||(j=Math.max(j,h))
}});
f.ui.dialog.maxZ=j
}return c
}},isOpen:function(){return this._isOpen
},moveToTop:function(g,c){var j=this,h=j.options;
if(h.modal&&!g||!h.stack&&!h.modal){return j._trigger("focus",c)
}if(h.zIndex>f.ui.dialog.maxZ){f.ui.dialog.maxZ=h.zIndex
}if(j.overlay){f.ui.dialog.maxZ+=1;
j.overlay.$el.css("z-index",f.ui.dialog.overlay.maxZ=f.ui.dialog.maxZ)
}g={scrollTop:j.element.scrollTop(),scrollLeft:j.element.scrollLeft()};
f.ui.dialog.maxZ+=1;
j.uiDialog.css("z-index",f.ui.dialog.maxZ);
j.element.attr(g);
j._trigger("focus",c);
return j
},open:function(){if(!this._isOpen){var g=this,c=g.options,h=g.uiDialog;
g.overlay=c.modal?new f.ui.dialog.overlay(g):null;
g._size();
g._position(c.position);
h.show(c.show);
g.moveToTop(true);
c.modal&&h.bind("keypress.ui-dialog",function(l){if(l.keyCode===f.ui.keyCode.TAB){var j=f(":tabbable",this),k=j.filter(":first");
j=j.filter(":last");
if(l.target===j[0]&&!l.shiftKey){k.focus(1);
return false
}else{if(l.target===k[0]&&l.shiftKey){j.focus(1);
return false
}}}});
f(g.element.find(":tabbable").get().concat(h.find(".ui-dialog-buttonpane :tabbable").get().concat(h.get()))).eq(0).focus();
g._isOpen=true;
g._trigger("open");
return g
}},_createButtons:function(h){var c=this,l=false,k=f("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),j=f("<div></div>").addClass("ui-dialog-buttonset").appendTo(k);
c.uiDialog.find(".ui-dialog-buttonpane").remove();
typeof h==="object"&&h!==null&&f.each(h,function(){return !(l=true)
});
if(l){f.each(h,function(n,m){m=f.isFunction(m)?{click:m,text:n}:m;
var g=f('<button type="button"></button>').click(function(){m.click.apply(c.element[0],arguments)
}).appendTo(j);
f.each(m,function(p,o){if(p!=="click"){p in d?g[p](o):g.attr(p,o)
}});
f.fn.button&&g.button()
});
k.appendTo(c.uiDialog)
}},_makeDraggable:function(){function h(g){return{position:g.position,offset:g.offset}
}var c=this,l=c.options,k=f(document),j;
c.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(m,g){j=l.height==="auto"?"auto":f(this).height();
f(this).height(f(this).height()).addClass("ui-dialog-dragging");
c._trigger("dragStart",m,h(g))
},drag:function(m,g){c._trigger("drag",m,h(g))
},stop:function(m,g){l.position=[g.position.left-k.scrollLeft(),g.position.top-k.scrollTop()];
f(this).removeClass("ui-dialog-dragging").height(j);
c._trigger("dragStop",m,h(g));
f.ui.dialog.overlay.resize()
}})
},_makeResizable:function(h){function c(g){return{originalPosition:g.originalPosition,originalSize:g.originalSize,position:g.position,size:g.size}
}h=h===b?this.options.resizable:h;
var l=this,k=l.options,j=l.uiDialog.css("position");
h=typeof h==="string"?h:"n,e,s,w,se,sw,ne,nw";
l.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:l.element,maxWidth:k.maxWidth,maxHeight:k.maxHeight,minWidth:k.minWidth,minHeight:l._minHeight(),handles:h,start:function(m,g){f(this).addClass("ui-dialog-resizing");
l._trigger("resizeStart",m,c(g))
},resize:function(m,g){l._trigger("resize",m,c(g))
},stop:function(m,g){f(this).removeClass("ui-dialog-resizing");
k.height=f(this).height();
k.width=f(this).width();
l._trigger("resizeStop",m,c(g));
f.ui.dialog.overlay.resize()
}}).css("position",j).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
},_minHeight:function(){var c=this.options;
return c.height==="auto"?c.minHeight:Math.min(c.minHeight,c.height)
},_position:function(g){var c=[],j=[0,0],h;
if(g){if(typeof g==="string"||typeof g==="object"&&"0" in g){c=g.split?g.split(" "):[g[0],g[1]];
if(c.length===1){c[1]=c[0]
}f.each(["left","top"],function(k,l){if(+c[k]===c[k]){j[k]=c[k];
c[k]=l
}});
g={my:c.join(" "),at:c.join(" "),offset:j.join(" ")}
}g=f.extend({},f.ui.dialog.prototype.options.position,g)
}else{g=f.ui.dialog.prototype.options.position
}(h=this.uiDialog.is(":visible"))||this.uiDialog.show();
this.uiDialog.css({top:0,left:0}).position(f.extend({of:window},g));
h||this.uiDialog.hide()
},_setOptions:function(g){var c=this,j={},h=false;
f.each(g,function(k,l){c._setOption(k,l);
if(k in a){h=true
}if(k in e){j[k]=l
}});
h&&this._size();
this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",j)
},_setOption:function(h,c){var l=this,k=l.uiDialog;
switch(h){case"beforeclose":h="beforeClose";
break;
case"buttons":l._createButtons(c);
break;
case"closeText":l.uiDialogTitlebarCloseText.text(""+c);
break;
case"dialogClass":k.removeClass(l.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+c);
break;
case"disabled":c?k.addClass("ui-dialog-disabled"):k.removeClass("ui-dialog-disabled");
break;
case"draggable":var j=k.is(":data(draggable)");
j&&!c&&k.draggable("destroy");
!j&&c&&l._makeDraggable();
break;
case"position":l._position(c);
break;
case"resizable":(j=k.is(":data(resizable)"))&&!c&&k.resizable("destroy");
j&&typeof c==="string"&&k.resizable("option","handles",c);
!j&&c!==false&&l._makeResizable(c);
break;
case"title":f(".ui-dialog-title",l.uiDialogTitlebar).html(""+(c||"&#160;"));
break
}f.Widget.prototype._setOption.apply(l,arguments)
},_size:function(){var g=this.options,c,j,h=this.uiDialog.is(":visible");
this.element.show().css({width:"auto",minHeight:0,height:0});
if(g.minWidth>g.width){g.width=g.minWidth
}c=this.uiDialog.css({height:"auto",width:g.width}).height();
j=Math.max(0,g.minHeight-c);
if(g.height==="auto"){if(f.support.minHeight){this.element.css({minHeight:j,height:"auto"})
}else{this.uiDialog.show();
g=this.element.css("height","auto").height();
h||this.uiDialog.hide();
this.element.height(Math.max(g,j))
}}else{this.element.height(Math.max(g.height-c,0))
}this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())
}});
f.extend(f.ui.dialog,{version:"1.8.16",uuid:0,maxZ:0,getTitleId:function(c){c=c.attr("id");
if(!c){this.uuid+=1;
c=this.uuid
}return"ui-dialog-title-"+c
},overlay:function(c){this.$el=f.ui.dialog.overlay.create(c)
}});
f.extend(f.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:f.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(c){return c+".dialog-overlay"
}).join(" "),create:function(g){if(this.instances.length===0){setTimeout(function(){f.ui.dialog.overlay.instances.length&&f(document).bind(f.ui.dialog.overlay.events,function(h){if(f(h.target).zIndex()<f.ui.dialog.overlay.maxZ){return false
}})
},1);
f(document).bind("keydown.dialog-overlay",function(h){if(g.options.closeOnEscape&&!h.isDefaultPrevented()&&h.keyCode&&h.keyCode===f.ui.keyCode.ESCAPE){g.close(h);
h.preventDefault()
}});
f(window).bind("resize.dialog-overlay",f.ui.dialog.overlay.resize)
}var c=(this.oldInstances.pop()||f("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),height:this.height()});
f.fn.bgiframe&&c.bgiframe();
this.instances.push(c);
return c
},destroy:function(g){var c=f.inArray(g,this.instances);
c!=-1&&this.oldInstances.push(this.instances.splice(c,1)[0]);
this.instances.length===0&&f([document,window]).unbind(".dialog-overlay");
g.remove();
var h=0;
f.each(this.instances,function(){h=Math.max(h,this.css("z-index"))
});
this.maxZ=h
},height:function(){var g,c;
if(f.browser.msie&&f.browser.version<7){g=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);
c=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);
return g<c?f(window).height()+"px":g+"px"
}else{return f(document).height()+"px"
}},width:function(){var g,c;
if(f.browser.msie){g=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);
c=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);
return g<c?f(window).width()+"px":g+"px"
}else{return f(document).width()+"px"
}},resize:function(){var c=f([]);
f.each(f.ui.dialog.overlay.instances,function(){c=c.add(this)
});
c.css({width:0,height:0}).css({width:f.ui.dialog.overlay.width(),height:f.ui.dialog.overlay.height()})
}});
f.extend(f.ui.dialog.overlay.prototype,{destroy:function(){f.ui.dialog.overlay.destroy(this.$el)
}})
})(jQuery);
(function(a){a.widget("ui.slider",a.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var g=this,d=this.options,m=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),k=d.values&&d.values.length||1,l=[];
this._mouseSliding=this._keySliding=false;
this._animateOff=true;
this._handleIndex=null;
this._detectOrientation();
this._mouseInit();
this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"+(d.disabled?" ui-slider-disabled ui-disabled":""));
this.range=a([]);
if(d.range){if(d.range===true){if(!d.values){d.values=[this._valueMin(),this._valueMin()]
}if(d.values.length&&d.values.length!==2){d.values=[d.values[0],d.values[0]]
}}this.range=a("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(d.range==="min"||d.range==="max"?" ui-slider-range-"+d.range:""))
}for(var h=m.length;
h<k;
h+=1){l.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>")
}this.handles=m.add(a(l.join("")).appendTo(g.element));
this.handle=this.handles.eq(0);
this.handles.add(this.range).filter("a").click(function(b){b.preventDefault()
}).hover(function(){d.disabled||a(this).addClass("ui-state-hover")
},function(){a(this).removeClass("ui-state-hover")
}).focus(function(){if(d.disabled){a(this).blur()
}else{a(".ui-slider .ui-state-focus").removeClass("ui-state-focus");
a(this).addClass("ui-state-focus")
}}).blur(function(){a(this).removeClass("ui-state-focus")
});
this.handles.each(function(b){a(this).data("index.ui-slider-handle",b)
});
this.handles.keydown(function(n){var e=true,c=a(this).data("index.ui-slider-handle"),f,j,b;
if(!g.options.disabled){switch(n.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:e=false;
if(!g._keySliding){g._keySliding=true;
a(this).addClass("ui-state-active");
f=g._start(n,c);
if(f===false){return
}}break
}b=g.options.step;
f=g.options.values&&g.options.values.length?(j=g.values(c)):(j=g.value());
switch(n.keyCode){case a.ui.keyCode.HOME:j=g._valueMin();
break;
case a.ui.keyCode.END:j=g._valueMax();
break;
case a.ui.keyCode.PAGE_UP:j=g._trimAlignValue(f+(g._valueMax()-g._valueMin())/5);
break;
case a.ui.keyCode.PAGE_DOWN:j=g._trimAlignValue(f-(g._valueMax()-g._valueMin())/5);
break;
case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(f===g._valueMax()){return
}j=g._trimAlignValue(f+b);
break;
case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(f===g._valueMin()){return
}j=g._trimAlignValue(f-b);
break
}g._slide(n,c,j);
return e
}}).keyup(function(c){var b=a(this).data("index.ui-slider-handle");
if(g._keySliding){g._keySliding=false;
g._stop(c,b);
g._change(c,b);
a(this).removeClass("ui-state-active")
}});
this._refreshValue();
this._animateOff=false
},destroy:function(){this.handles.remove();
this.range.remove();
this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");
this._mouseDestroy();
return this
},_mouseCapture:function(h){var d=this.options,o,m,n,k,l;
if(d.disabled){return false
}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};
this.elementOffset=this.element.offset();
o=this._normValueFromMouse({x:h.pageX,y:h.pageY});
m=this._valueMax()-this._valueMin()+1;
k=this;
this.handles.each(function(c){var b=Math.abs(o-k.values(c));
if(m>b){m=b;
n=a(this);
l=c
}});
if(d.range===true&&this.values(1)===d.min){l+=1;
n=a(this.handles[l])
}if(this._start(h,l)===false){return false
}this._mouseSliding=true;
k._handleIndex=l;
n.addClass("ui-state-active").focus();
d=n.offset();
this._clickOffset=!a(h.target).parents().andSelf().is(".ui-slider-handle")?{left:0,top:0}:{left:h.pageX-d.left-n.width()/2,top:h.pageY-d.top-n.height()/2-(parseInt(n.css("borderTopWidth"),10)||0)-(parseInt(n.css("borderBottomWidth"),10)||0)+(parseInt(n.css("marginTop"),10)||0)};
this.handles.hasClass("ui-state-hover")||this._slide(h,l,o);
return this._animateOff=true
},_mouseStart:function(){return true
},_mouseDrag:function(d){var c=this._normValueFromMouse({x:d.pageX,y:d.pageY});
this._slide(d,this._handleIndex,c);
return false
},_mouseStop:function(b){this.handles.removeClass("ui-state-active");
this._mouseSliding=false;
this._stop(b,this._handleIndex);
this._change(b,this._handleIndex);
this._clickOffset=this._handleIndex=null;
return this._animateOff=false
},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"
},_normValueFromMouse:function(d){var c;
if(this.orientation==="horizontal"){c=this.elementSize.width;
d=d.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)
}else{c=this.elementSize.height;
d=d.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)
}c=d/c;
if(c>1){c=1
}if(c<0){c=0
}if(this.orientation==="vertical"){c=1-c
}d=this._valueMax()-this._valueMin();
return this._trimAlignValue(this._valueMin()+c*d)
},_start:function(e,d){var f={handle:this.handles[d],value:this.value()};
if(this.options.values&&this.options.values.length){f.value=this.values(d);
f.values=this.values()
}return this._trigger("start",e,f)
},_slide:function(e,d,h){var g;
if(this.options.values&&this.options.values.length){g=this.values(d?0:1);
if(this.options.values.length===2&&this.options.range===true&&(d===0&&h>g||d===1&&h<g)){h=g
}if(h!==this.values(d)){g=this.values();
g[d]=h;
e=this._trigger("slide",e,{handle:this.handles[d],value:h,values:g});
this.values(d?0:1);
e!==false&&this.values(d,h,true)
}}else{if(h!==this.value()){e=this._trigger("slide",e,{handle:this.handles[d],value:h});
e!==false&&this.value(h)
}}},_stop:function(e,d){var f={handle:this.handles[d],value:this.value()};
if(this.options.values&&this.options.values.length){f.value=this.values(d);
f.values=this.values()
}this._trigger("stop",e,f)
},_change:function(e,d){if(!this._keySliding&&!this._mouseSliding){var f={handle:this.handles[d],value:this.value()};
if(this.options.values&&this.options.values.length){f.value=this.values(d);
f.values=this.values()
}this._trigger("change",e,f)
}},value:function(b){if(arguments.length){this.options.value=this._trimAlignValue(b);
this._refreshValue();
this._change(null,0)
}else{return this._value()
}},values:function(g,d){var k,h,j;
if(arguments.length>1){this.options.values[g]=this._trimAlignValue(d);
this._refreshValue();
this._change(null,g)
}else{if(arguments.length){if(a.isArray(arguments[0])){k=this.options.values;
h=arguments[0];
for(j=0;
j<k.length;
j+=1){k[j]=this._trimAlignValue(h[j]);
this._change(null,j)
}this._refreshValue()
}else{return this.options.values&&this.options.values.length?this._values(g):this.value()
}}else{return this._values()
}}},_setOption:function(e,d){var h,g=0;
if(a.isArray(this.options.values)){g=this.options.values.length
}a.Widget.prototype._setOption.apply(this,arguments);
switch(e){case"disabled":if(d){this.handles.filter(".ui-state-focus").blur();
this.handles.removeClass("ui-state-hover");
this.handles.propAttr("disabled",true);
this.element.addClass("ui-disabled")
}else{this.handles.propAttr("disabled",false);
this.element.removeClass("ui-disabled")
}break;
case"orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);
this._refreshValue();
break;
case"value":this._animateOff=true;
this._refreshValue();
this._change(null,0);
this._animateOff=false;
break;
case"values":this._animateOff=true;
this._refreshValue();
for(h=0;
h<g;
h+=1){this._change(null,h)
}this._animateOff=false;
break
}},_value:function(){var b=this.options.value;
return b=this._trimAlignValue(b)
},_values:function(e){var d,f;
if(arguments.length){d=this.options.values[e];
return d=this._trimAlignValue(d)
}else{d=this.options.values.slice();
for(f=0;
f<d.length;
f+=1){d[f]=this._trimAlignValue(d[f])
}return d
}},_trimAlignValue:function(e){if(e<=this._valueMin()){return this._valueMin()
}if(e>=this._valueMax()){return this._valueMax()
}var d=this.options.step>0?this.options.step:1,f=(e-this._valueMin())%d;
e=e-f;
if(Math.abs(f)*2>=d){e+=f>0?d:-d
}return parseFloat(e.toFixed(5))
},_valueMin:function(){return this.options.min
},_valueMax:function(){return this.options.max
},_refreshValue:function(){var u=this.options.range,s=this.options,r=this,p=!this._animateOff?s.animate:false,q,m={},o,h,d,n;
if(this.options.values&&this.options.values.length){this.handles.each(function(b){q=(r.values(b)-r._valueMin())/(r._valueMax()-r._valueMin())*100;
m[r.orientation==="horizontal"?"left":"bottom"]=q+"%";
a(this).stop(1,1)[p?"animate":"css"](m,s.animate);
if(r.options.range===true){if(r.orientation==="horizontal"){if(b===0){r.range.stop(1,1)[p?"animate":"css"]({left:q+"%"},s.animate)
}if(b===1){r.range[p?"animate":"css"]({width:q-o+"%"},{queue:false,duration:s.animate})
}}else{if(b===0){r.range.stop(1,1)[p?"animate":"css"]({bottom:q+"%"},s.animate)
}if(b===1){r.range[p?"animate":"css"]({height:q-o+"%"},{queue:false,duration:s.animate})
}}}o=q
})
}else{h=this.value();
d=this._valueMin();
n=this._valueMax();
q=n!==d?(h-d)/(n-d)*100:0;
m[r.orientation==="horizontal"?"left":"bottom"]=q+"%";
this.handle.stop(1,1)[p?"animate":"css"](m,s.animate);
if(u==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[p?"animate":"css"]({width:q+"%"},s.animate)
}if(u==="max"&&this.orientation==="horizontal"){this.range[p?"animate":"css"]({width:100-q+"%"},{queue:false,duration:s.animate})
}if(u==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[p?"animate":"css"]({height:q+"%"},s.animate)
}if(u==="max"&&this.orientation==="vertical"){this.range[p?"animate":"css"]({height:100-q+"%"},{queue:false,duration:s.animate})
}}}});
a.extend(a.ui.slider,{version:"1.8.16"})
})(jQuery);
(function(g,f){function e(){return ++c
}function b(){return ++a
}var c=0,a=0;
g.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:false,cookie:null,collapsible:false,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(true)
},_setOption:function(d,h){if(d=="selected"){this.options.collapsible&&h==this.options.selected||this.select(h)
}else{this.options[d]=h;
this._tabify()
}},_tabId:function(d){return d.title&&d.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+e()
},_sanitizeSelector:function(d){return d.replace(/:/g,"\\:")
},_cookie:function(){var d=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+b());
return g.cookie.apply(null,[d].concat(g.makeArray(arguments)))
},_ui:function(d,h){return{tab:d,panel:h,index:this.anchors.index(d)}
},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var d=g(this);
d.html(d.data("label.tabs")).removeData("label.tabs")
})
},_tabify:function(z){function x(h,j){h.css("display","");
!g.support.opacity&&j.opacity&&h[0].style.removeAttribute("filter")
}var A=this,y=this.options,w=/^#.+/;
this.list=this.element.find("ol,ul").eq(0);
this.lis=g(" > li:has(a[href])",this.list);
this.anchors=this.lis.map(function(){return g("a",this)[0]
});
this.panels=g([]);
this.anchors.each(function(k,n){var j=g(n).attr("href"),h=j.split("#")[0],m;
if(h&&(h===location.toString().split("#")[0]||(m=g("base")[0])&&h===m.href)){j=n.hash;
n.href=j
}if(w.test(j)){A.panels=A.panels.add(A.element.find(A._sanitizeSelector(j)))
}else{if(j&&j!=="#"){g.data(n,"href.tabs",j);
g.data(n,"load.tabs",j.replace(/#.*$/,""));
j=A._tabId(n);
n.href="#"+j;
n=A.element.find("#"+j);
if(!n.length){n=g(y.panelTemplate).attr("id",j).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(A.panels[k-1]||A.list);
n.data("destroy.tabs",true)
}A.panels=A.panels.add(n)
}else{y.disabled.push(k)
}}});
if(z){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
this.lis.addClass("ui-state-default ui-corner-top");
this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");
if(y.selected===f){location.hash&&this.anchors.each(function(h,j){if(j.hash==location.hash){y.selected=h;
return false
}});
if(typeof y.selected!=="number"&&y.cookie){y.selected=parseInt(A._cookie(),10)
}if(typeof y.selected!=="number"&&this.lis.filter(".ui-tabs-selected").length){y.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))
}y.selected=y.selected||(this.lis.length?0:-1)
}else{if(y.selected===null){y.selected=-1
}}y.selected=y.selected>=0&&this.anchors[y.selected]||y.selected<0?y.selected:0;
y.disabled=g.unique(y.disabled.concat(g.map(this.lis.filter(".ui-state-disabled"),function(h){return A.lis.index(h)
}))).sort();
g.inArray(y.selected,y.disabled)!=-1&&y.disabled.splice(g.inArray(y.selected,y.disabled),1);
this.panels.addClass("ui-tabs-hide");
this.lis.removeClass("ui-tabs-selected ui-state-active");
if(y.selected>=0&&this.anchors.length){A.element.find(A._sanitizeSelector(A.anchors[y.selected].hash)).removeClass("ui-tabs-hide");
this.lis.eq(y.selected).addClass("ui-tabs-selected ui-state-active");
A.element.queue("tabs",function(){A._trigger("show",null,A._ui(A.anchors[y.selected],A.element.find(A._sanitizeSelector(A.anchors[y.selected].hash))[0]))
});
this.load(y.selected)
}g(window).bind("unload",function(){A.lis.add(A.anchors).unbind(".tabs");
A.lis=A.anchors=A.panels=null
})
}else{y.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))
}this.element[y.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");
y.cookie&&this._cookie(y.selected,y.cookie);
z=0;
for(var v;
v=this.lis[z];
z++){g(v)[g.inArray(z,y.disabled)!=-1&&!g(v).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled")
}y.cache===false&&this.anchors.removeData("cache.tabs");
this.lis.add(this.anchors).unbind(".tabs");
if(y.event!=="mouseover"){var u=function(h,j){j.is(":not(.ui-state-disabled)")&&j.addClass("ui-state-"+h)
},p=function(h,j){j.removeClass("ui-state-"+h)
};
this.lis.bind("mouseover.tabs",function(){u("hover",g(this))
});
this.lis.bind("mouseout.tabs",function(){p("hover",g(this))
});
this.anchors.bind("focus.tabs",function(){u("focus",g(this).closest("li"))
});
this.anchors.bind("blur.tabs",function(){p("focus",g(this).closest("li"))
})
}var q,l;
if(y.fx){if(g.isArray(y.fx)){q=y.fx[0];
l=y.fx[1]
}else{q=l=y.fx
}}var d=l?function(h,j){g(h).closest("li").addClass("ui-tabs-selected ui-state-active");
j.hide().removeClass("ui-tabs-hide").animate(l,l.duration||"normal",function(){x(j,l);
A._trigger("show",null,A._ui(h,j[0]))
})
}:function(h,j){g(h).closest("li").addClass("ui-tabs-selected ui-state-active");
j.removeClass("ui-tabs-hide");
A._trigger("show",null,A._ui(h,j[0]))
},B=q?function(h,j){j.animate(q,q.duration||"normal",function(){A.lis.removeClass("ui-tabs-selected ui-state-active");
j.addClass("ui-tabs-hide");
x(j,q);
A.element.dequeue("tabs")
})
}:function(h,j){A.lis.removeClass("ui-tabs-selected ui-state-active");
j.addClass("ui-tabs-hide");
A.element.dequeue("tabs")
};
this.anchors.bind(y.event+".tabs",function(){var k=this,m=g(k).closest("li"),j=A.panels.filter(":not(.ui-tabs-hide)"),h=A.element.find(A._sanitizeSelector(k.hash));
if(m.hasClass("ui-tabs-selected")&&!y.collapsible||m.hasClass("ui-state-disabled")||m.hasClass("ui-state-processing")||A.panels.filter(":animated").length||A._trigger("select",null,A._ui(this,h[0]))===false){this.blur();
return false
}y.selected=A.anchors.index(this);
A.abort();
if(y.collapsible){if(m.hasClass("ui-tabs-selected")){y.selected=-1;
y.cookie&&A._cookie(y.selected,y.cookie);
A.element.queue("tabs",function(){B(k,j)
}).dequeue("tabs");
this.blur();
return false
}else{if(!j.length){y.cookie&&A._cookie(y.selected,y.cookie);
A.element.queue("tabs",function(){d(k,h)
});
A.load(A.anchors.index(this));
this.blur();
return false
}}}y.cookie&&A._cookie(y.selected,y.cookie);
if(h.length){j.length&&A.element.queue("tabs",function(){B(k,j)
});
A.element.queue("tabs",function(){d(k,h)
});
A.load(A.anchors.index(this))
}else{throw"jQuery UI Tabs: Mismatching fragment identifier."
}g.browser.msie&&this.blur()
});
this.anchors.bind("click.tabs",function(){return false
})
},_getIndex:function(d){if(typeof d=="string"){d=this.anchors.index(this.anchors.filter("[href$="+d+"]"))
}return d
},destroy:function(){var d=this.options;
this.abort();
this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");
this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
this.anchors.each(function(){var j=g.data(this,"href.tabs");
if(j){this.href=j
}var h=g(this).unbind(".tabs");
g.each(["href","load","cache"],function(l,k){h.removeData(k+".tabs")
})
});
this.lis.unbind(".tabs").add(this.panels).each(function(){g.data(this,"destroy.tabs")?g(this).remove():g(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")
});
d.cookie&&this._cookie(null,d.cookie);
return this
},add:function(d,n,k){if(k===f){k=this.anchors.length
}var o=this,m=this.options;
n=g(m.tabTemplate.replace(/#\{href\}/g,d).replace(/#\{label\}/g,n));
d=!d.indexOf("#")?d.replace("#",""):this._tabId(g("a",n)[0]);
n.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);
var l=o.element.find("#"+d);
l.length||(l=g(m.panelTemplate).attr("id",d).data("destroy.tabs",true));
l.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");
if(k>=this.lis.length){n.appendTo(this.list);
l.appendTo(this.list[0].parentNode)
}else{n.insertBefore(this.lis[k]);
l.insertBefore(this.panels[k])
}m.disabled=g.map(m.disabled,function(h){return h>=k?++h:h
});
this._tabify();
if(this.anchors.length==1){m.selected=0;
n.addClass("ui-tabs-selected ui-state-active");
l.removeClass("ui-tabs-hide");
this.element.queue("tabs",function(){o._trigger("show",null,o._ui(o.anchors[0],o.panels[0]))
});
this.load(0)
}this._trigger("add",null,this._ui(this.anchors[k],this.panels[k]));
return this
},remove:function(d){d=this._getIndex(d);
var j=this.options,h=this.lis.eq(d).remove(),k=this.panels.eq(d).remove();
if(h.hasClass("ui-tabs-selected")&&this.anchors.length>1){this.select(d+(d+1<this.anchors.length?1:-1))
}j.disabled=g.map(g.grep(j.disabled,function(l){return l!=d
}),function(l){return l>=d?--l:l
});
this._tabify();
this._trigger("remove",null,this._ui(h.find("a")[0],k[0]));
return this
},enable:function(d){d=this._getIndex(d);
var h=this.options;
if(g.inArray(d,h.disabled)!=-1){this.lis.eq(d).removeClass("ui-state-disabled");
h.disabled=g.grep(h.disabled,function(j){return j!=d
});
this._trigger("enable",null,this._ui(this.anchors[d],this.panels[d]));
return this
}},disable:function(d){d=this._getIndex(d);
var h=this.options;
if(d!=h.selected){this.lis.eq(d).addClass("ui-state-disabled");
h.disabled.push(d);
h.disabled.sort();
this._trigger("disable",null,this._ui(this.anchors[d],this.panels[d]))
}return this
},select:function(d){d=this._getIndex(d);
if(d==-1){if(this.options.collapsible&&this.options.selected!=-1){d=this.options.selected
}else{return this
}}this.anchors.eq(d).trigger(this.options.event+".tabs");
return this
},load:function(d){d=this._getIndex(d);
var n=this,k=this.options,o=this.anchors.eq(d)[0],m=g.data(o,"load.tabs");
this.abort();
if(!m||this.element.queue("tabs").length!==0&&g.data(o,"cache.tabs")){this.element.dequeue("tabs")
}else{this.lis.eq(d).addClass("ui-state-processing");
if(k.spinner){var l=g("span",o);
l.data("label.tabs",l.html()).html(k.spinner)
}this.xhr=g.ajax(g.extend({},k.ajaxOptions,{url:m,success:function(j,p){n.element.find(n._sanitizeSelector(o.hash)).html(j);
n._cleanup();
k.cache&&g.data(o,"cache.tabs",true);
n._trigger("load",null,n._ui(n.anchors[d],n.panels[d]));
try{k.ajaxOptions.success(j,p)
}catch(h){}},error:function(j,p){n._cleanup();
n._trigger("load",null,n._ui(n.anchors[d],n.panels[d]));
try{k.ajaxOptions.error(j,p,d,o)
}catch(h){}}}));
n.element.dequeue("tabs");
return this
}},abort:function(){this.element.queue([]);
this.panels.stop(false,true);
this.element.queue("tabs",this.element.queue("tabs").splice(-2,2));
if(this.xhr){this.xhr.abort();
delete this.xhr
}this._cleanup();
return this
},url:function(d,h){this.anchors.eq(d).removeData("cache.tabs").data("load.tabs",h);
return this
},length:function(){return this.anchors.length
}});
g.extend(g.ui.tabs,{version:"1.8.16"});
g.extend(g.ui.tabs.prototype,{rotation:null,rotate:function(d,l){var j=this,m=this.options,k=j._rotate||(j._rotate=function(h){clearTimeout(j.rotation);
j.rotation=setTimeout(function(){var n=m.selected;
j.select(++n<j.anchors.length?n:0)
},d);
h&&h.stopPropagation()
});
l=j._unrotate||(j._unrotate=!l?function(h){h.clientX&&j.rotate(null)
}:function(){t=m.selected;
k()
});
if(d){this.element.bind("tabsshow",k);
this.anchors.bind(m.event+".tabs",l);
k()
}else{clearTimeout(j.rotation);
this.element.unbind("tabsshow",k);
this.anchors.unbind(m.event+".tabs",l);
delete this._rotate;
delete this._unrotate
}return this
}})
})(jQuery);
(function(d,C){function M(){this.debug=false;
this._curInst=null;
this._keyEvent=false;
this._disabledInputs=[];
this._inDialog=this._datepickerShowing=false;
this._mainDivId="ui-datepicker-div";
this._inlineClass="ui-datepicker-inline";
this._appendClass="ui-datepicker-append";
this._triggerClass="ui-datepicker-trigger";
this._dialogClass="ui-datepicker-dialog";
this._disableClass="ui-datepicker-disabled";
this._unselectableClass="ui-datepicker-unselectable";
this._currentClass="ui-datepicker-current-day";
this._dayOverClass="ui-datepicker-days-cell-over";
this.regional=[];
this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};
d.extend(this._defaults,this.regional[""]);
this.dpDiv=N(d('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
}function N(a){return a.bind("mouseout",function(b){b=d(b.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");
b.length&&b.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")
}).bind("mouseover",function(b){b=d(b.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");
if(!(d.datepicker._isDisabledDatepicker(J.inline?a.parent()[0]:J.input[0])||!b.length)){b.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
b.addClass("ui-state-hover");
b.hasClass("ui-datepicker-prev")&&b.addClass("ui-datepicker-prev-hover");
b.hasClass("ui-datepicker-next")&&b.addClass("ui-datepicker-next-hover")
}})
}function H(a,b){d.extend(a,b);
for(var c in b){if(b[c]==null||b[c]==C){a[c]=b[c]
}}return a
}d.extend(d.ui,{datepicker:{version:"1.8.16"}});
var B=(new Date).getTime(),J;
d.extend(M.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)
},_widgetDatepicker:function(){return this.dpDiv
},setDefaults:function(a){H(this._defaults,a||{});
return this
},_attachDatepicker:function(a,b){var c=null;
for(var e in this._defaults){var f=a.getAttribute("date:"+e);
if(f){c=c||{};
try{c[e]=eval(f)
}catch(h){c[e]=f
}}}e=a.nodeName.toLowerCase();
f=e=="div"||e=="span";
if(!a.id){this.uuid+=1;
a.id="dp"+this.uuid
}var i=this._newInst(d(a),f);
i.settings=d.extend({},b||{},c||{});
if(e=="input"){this._connectDatepicker(a,i)
}else{f&&this._inlineDatepicker(a,i)
}},_newInst:function(a,b){return{id:a[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1"),input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:!b?this.dpDiv:N(d('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}
},_connectDatepicker:function(a,b){var c=d(a);
b.append=d([]);
b.trigger=d([]);
if(!c.hasClass(this.markerClassName)){this._attachments(c,b);
c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(e,f,h){b.settings[f]=h
}).bind("getData.datepicker",function(e,f){return this._get(b,f)
});
this._autoSize(b);
d.data(a,"datepicker",b);
b.settings.disabled&&this._disableDatepicker(a)
}},_attachments:function(a,b){var c=this._get(b,"appendText"),e=this._get(b,"isRTL");
b.append&&b.append.remove();
if(c){b.append=d('<span class="'+this._appendClass+'">'+c+"</span>");
a[e?"before":"after"](b.append)
}a.unbind("focus",this._showDatepicker);
b.trigger&&b.trigger.remove();
c=this._get(b,"showOn");
if(c=="focus"||c=="both"){a.focus(this._showDatepicker)
}if(c=="button"||c=="both"){c=this._get(b,"buttonText");
var f=this._get(b,"buttonImage");
b.trigger=d(this._get(b,"buttonImageOnly")?d("<img/>").addClass(this._triggerClass).attr({src:f,alt:c,title:c}):d('<button type="button"></button>').addClass(this._triggerClass).html(f==""?c:d("<img/>").attr({src:f,alt:c,title:c})));
a[e?"before":"after"](b.trigger);
b.trigger.click(function(){d.datepicker._datepickerShowing&&d.datepicker._lastInput==a[0]?d.datepicker._hideDatepicker():d.datepicker._showDatepicker(a[0]);
return false
})
}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b=new Date(2009,11,20),c=this._get(a,"dateFormat");
if(c.match(/[DM]/)){var e=function(f){for(var h=0,i=0,g=0;
g<f.length;
g++){if(f[g].length>h){h=f[g].length;
i=g
}}return i
};
b.setMonth(e(this._get(a,c.match(/MM/)?"monthNames":"monthNamesShort")));
b.setDate(e(this._get(a,c.match(/DD/)?"dayNames":"dayNamesShort"))+20-b.getDay())
}a.input.attr("size",this._formatDate(a,b).length)
}},_inlineDatepicker:function(a,b){var c=d(a);
if(!c.hasClass(this.markerClassName)){c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker",function(e,f,h){b.settings[f]=h
}).bind("getData.datepicker",function(e,f){return this._get(b,f)
});
d.data(a,"datepicker",b);
this._setDate(b,this._getDefaultDate(b),true);
this._updateDatepicker(b);
this._updateAlternate(b);
b.settings.disabled&&this._disableDatepicker(a);
b.dpDiv.css("display","block")
}},_dialogDatepicker:function(a,b,c,e,f){a=this._dialogInst;
if(!a){this.uuid+=1;
this._dialogInput=d('<input type="text" id="'+("dp"+this.uuid)+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');
this._dialogInput.keydown(this._doKeyDown);
d("body").append(this._dialogInput);
a=this._dialogInst=this._newInst(this._dialogInput,false);
a.settings={};
d.data(this._dialogInput[0],"datepicker",a)
}H(a.settings,e||{});
b=b&&b.constructor==Date?this._formatDate(a,b):b;
this._dialogInput.val(b);
this._pos=f?f.length?f:[f.pageX,f.pageY]:null;
if(!this._pos){this._pos=[document.documentElement.clientWidth/2-100+(document.documentElement.scrollLeft||document.body.scrollLeft),document.documentElement.clientHeight/2-150+(document.documentElement.scrollTop||document.body.scrollTop)]
}this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px");
a.settings.onSelect=c;
this._inDialog=true;
this.dpDiv.addClass(this._dialogClass);
this._showDatepicker(this._dialogInput[0]);
d.blockUI&&d.blockUI(this.dpDiv);
d.data(this._dialogInput[0],"datepicker",a);
return this
},_destroyDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");
if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();
d.removeData(a,"datepicker");
if(e=="input"){c.append.remove();
c.trigger.remove();
b.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)
}else{if(e=="div"||e=="span"){b.removeClass(this.markerClassName).empty()
}}}},_enableDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");
if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();
if(e=="input"){a.disabled=false;
c.trigger.filter("button").each(function(){this.disabled=false
}).end().filter("img").css({opacity:"1.0",cursor:""})
}else{if(e=="div"||e=="span"){b=b.children("."+this._inlineClass);
b.children().removeClass("ui-state-disabled");
b.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")
}}this._disabledInputs=d.map(this._disabledInputs,function(f){return f==a?null:f
})
}},_disableDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");
if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();
if(e=="input"){a.disabled=true;
c.trigger.filter("button").each(function(){this.disabled=true
}).end().filter("img").css({opacity:"0.5",cursor:"default"})
}else{if(e=="div"||e=="span"){b=b.children("."+this._inlineClass);
b.children().addClass("ui-state-disabled");
b.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled","disabled")
}}this._disabledInputs=d.map(this._disabledInputs,function(f){return f==a?null:f
});
this._disabledInputs[this._disabledInputs.length]=a
}},_isDisabledDatepicker:function(a){if(!a){return false
}for(var b=0;
b<this._disabledInputs.length;
b++){if(this._disabledInputs[b]==a){return true
}}return false
},_getInst:function(a){try{return d.data(a,"datepicker")
}catch(b){throw"Missing instance data for this datepicker"
}},_optionDatepicker:function(a,b,c){var e=this._getInst(a);
if(arguments.length==2&&typeof b=="string"){return b=="defaults"?d.extend({},d.datepicker._defaults):e?b=="all"?d.extend({},e.settings):this._get(e,b):null
}var f=b||{};
if(typeof b=="string"){f={};
f[b]=c
}if(e){this._curInst==e&&this._hideDatepicker();
var h=this._getDateDatepicker(a,true),i=this._getMinMaxDate(e,"min"),g=this._getMinMaxDate(e,"max");
H(e.settings,f);
if(i!==null&&f.dateFormat!==C&&f.minDate===C){e.settings.minDate=this._formatDate(e,i)
}if(g!==null&&f.dateFormat!==C&&f.maxDate===C){e.settings.maxDate=this._formatDate(e,g)
}this._attachments(d(a),e);
this._autoSize(e);
this._setDate(e,h);
this._updateAlternate(e);
this._updateDatepicker(e)
}},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)
},_refreshDatepicker:function(a){(a=this._getInst(a))&&this._updateDatepicker(a)
},_setDateDatepicker:function(a,b){if(a=this._getInst(a)){this._setDate(a,b);
this._updateDatepicker(a);
this._updateAlternate(a)
}},_getDateDatepicker:function(a,b){(a=this._getInst(a))&&!a.inline&&this._setDateFromField(a,b);
return a?this._getDate(a):null
},_doKeyDown:function(a){var b=d.datepicker._getInst(a.target),c=true,e=b.dpDiv.is(".ui-datepicker-rtl");
b._keyEvent=true;
if(d.datepicker._datepickerShowing){switch(a.keyCode){case 9:d.datepicker._hideDatepicker();
c=false;
break;
case 13:c=d("td."+d.datepicker._dayOverClass+":not(."+d.datepicker._currentClass+")",b.dpDiv);
c[0]&&d.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,c[0]);
if(a=d.datepicker._get(b,"onSelect")){c=d.datepicker._formatDate(b);
a.apply(b.input?b.input[0]:null,[c,b])
}else{d.datepicker._hideDatepicker()
}return false;
case 27:d.datepicker._hideDatepicker();
break;
case 33:d.datepicker._adjustDate(a.target,a.ctrlKey?-d.datepicker._get(b,"stepBigMonths"):-d.datepicker._get(b,"stepMonths"),"M");
break;
case 34:d.datepicker._adjustDate(a.target,a.ctrlKey?+d.datepicker._get(b,"stepBigMonths"):+d.datepicker._get(b,"stepMonths"),"M");
break;
case 35:if(a.ctrlKey||a.metaKey){d.datepicker._clearDate(a.target)
}c=a.ctrlKey||a.metaKey;
break;
case 36:if(a.ctrlKey||a.metaKey){d.datepicker._gotoToday(a.target)
}c=a.ctrlKey||a.metaKey;
break;
case 37:if(a.ctrlKey||a.metaKey){d.datepicker._adjustDate(a.target,e?+1:-1,"D")
}c=a.ctrlKey||a.metaKey;
if(a.originalEvent.altKey){d.datepicker._adjustDate(a.target,a.ctrlKey?-d.datepicker._get(b,"stepBigMonths"):-d.datepicker._get(b,"stepMonths"),"M")
}break;
case 38:if(a.ctrlKey||a.metaKey){d.datepicker._adjustDate(a.target,-7,"D")
}c=a.ctrlKey||a.metaKey;
break;
case 39:if(a.ctrlKey||a.metaKey){d.datepicker._adjustDate(a.target,e?-1:+1,"D")
}c=a.ctrlKey||a.metaKey;
if(a.originalEvent.altKey){d.datepicker._adjustDate(a.target,a.ctrlKey?+d.datepicker._get(b,"stepBigMonths"):+d.datepicker._get(b,"stepMonths"),"M")
}break;
case 40:if(a.ctrlKey||a.metaKey){d.datepicker._adjustDate(a.target,+7,"D")
}c=a.ctrlKey||a.metaKey;
break;
default:c=false
}}else{if(a.keyCode==36&&a.ctrlKey){d.datepicker._showDatepicker(this)
}else{c=false
}}if(c){a.preventDefault();
a.stopPropagation()
}},_doKeyPress:function(a){var b=d.datepicker._getInst(a.target);
if(d.datepicker._get(b,"constrainInput")){b=d.datepicker._possibleChars(d.datepicker._get(b,"dateFormat"));
var c=String.fromCharCode(a.charCode==C?a.keyCode:a.charCode);
return a.ctrlKey||a.metaKey||c<" "||!b||b.indexOf(c)>-1
}},_doKeyUp:function(a){a=d.datepicker._getInst(a.target);
if(a.input.val()!=a.lastVal){try{if(d.datepicker.parseDate(d.datepicker._get(a,"dateFormat"),a.input?a.input.val():null,d.datepicker._getFormatConfig(a))){d.datepicker._setDateFromField(a);
d.datepicker._updateAlternate(a);
d.datepicker._updateDatepicker(a)
}}catch(b){d.datepicker.log(b)
}}return true
},_showDatepicker:function(a){a=a.target||a;
if(a.nodeName.toLowerCase()!="input"){a=d("input",a.parentNode)[0]
}if(!(d.datepicker._isDisabledDatepicker(a)||d.datepicker._lastInput==a)){var b=d.datepicker._getInst(a);
if(d.datepicker._curInst&&d.datepicker._curInst!=b){d.datepicker._datepickerShowing&&d.datepicker._triggerOnClose(d.datepicker._curInst);
d.datepicker._curInst.dpDiv.stop(true,true)
}var c=d.datepicker._get(b,"beforeShow");
c=c?c.apply(a,[a,b]):{};
if(c!==false){H(b.settings,c);
b.lastVal=null;
d.datepicker._lastInput=a;
d.datepicker._setDateFromField(b);
if(d.datepicker._inDialog){a.value=""
}if(!d.datepicker._pos){d.datepicker._pos=d.datepicker._findPos(a);
d.datepicker._pos[1]+=a.offsetHeight
}var e=false;
d(a).parents().each(function(){e|=d(this).css("position")=="fixed";
return !e
});
if(e&&d.browser.opera){d.datepicker._pos[0]-=document.documentElement.scrollLeft;
d.datepicker._pos[1]-=document.documentElement.scrollTop
}c={left:d.datepicker._pos[0],top:d.datepicker._pos[1]};
d.datepicker._pos=null;
b.dpDiv.empty();
b.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});
d.datepicker._updateDatepicker(b);
c=d.datepicker._checkOffset(b,c,e);
b.dpDiv.css({position:d.datepicker._inDialog&&d.blockUI?"static":e?"fixed":"absolute",display:"none",left:c.left+"px",top:c.top+"px"});
if(!b.inline){c=d.datepicker._get(b,"showAnim");
var f=d.datepicker._get(b,"duration"),h=function(){var i=b.dpDiv.find("iframe.ui-datepicker-cover");
if(i.length){var g=d.datepicker._getBorders(b.dpDiv);
i.css({left:-g[0],top:-g[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()})
}};
b.dpDiv.zIndex(d(a).zIndex()+1);
d.datepicker._datepickerShowing=true;
d.effects&&d.effects[c]?b.dpDiv.show(c,d.datepicker._get(b,"showOptions"),f,h):b.dpDiv[c||"show"](c?f:null,h);
if(!c||!f){h()
}b.input.is(":visible")&&!b.input.is(":disabled")&&b.input.focus();
d.datepicker._curInst=b
}}}},_updateDatepicker:function(a){this.maxRows=4;
var b=d.datepicker._getBorders(a.dpDiv);
J=a;
a.dpDiv.empty().append(this._generateHTML(a));
var c=a.dpDiv.find("iframe.ui-datepicker-cover");
c.length&&c.css({left:-b[0],top:-b[1],width:a.dpDiv.outerWidth(),height:a.dpDiv.outerHeight()});
a.dpDiv.find("."+this._dayOverClass+" a").mouseover();
b=this._getNumberOfMonths(a);
c=b[1];
a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
c>1&&a.dpDiv.addClass("ui-datepicker-multi-"+c).css("width",17*c+"em");
a.dpDiv[(b[0]!=1||b[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");
a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");
a==d.datepicker._curInst&&d.datepicker._datepickerShowing&&a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&a.input[0]!=document.activeElement&&a.input.focus();
if(a.yearshtml){var e=a.yearshtml;
setTimeout(function(){e===a.yearshtml&&a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml);
e=a.yearshtml=null
},0)
}},_getBorders:function(a){var b=function(c){return{thin:1,medium:2,thick:3}[c]||c
};
return[parseFloat(b(a.css("border-left-width"))),parseFloat(b(a.css("border-top-width")))]
},_checkOffset:function(a,b,c){var e=a.dpDiv.outerWidth(),f=a.dpDiv.outerHeight(),h=a.input?a.input.outerWidth():0,i=a.input?a.input.outerHeight():0,g=document.documentElement.clientWidth+d(document).scrollLeft(),j=document.documentElement.clientHeight+d(document).scrollTop();
b.left-=this._get(a,"isRTL")?e-h:0;
b.left-=c&&b.left==a.input.offset().left?d(document).scrollLeft():0;
b.top-=c&&b.top==a.input.offset().top+i?d(document).scrollTop():0;
b.left-=Math.min(b.left,b.left+e>g&&g>e?Math.abs(b.left+e-g):0);
b.top-=Math.min(b.top,b.top+f>j&&j>f?Math.abs(f+i):0);
return b
},_findPos:function(a){for(var b=this._get(this._getInst(a),"isRTL");
a&&(a.type=="hidden"||a.nodeType!=1||d.expr.filters.hidden(a));
){a=a[b?"previousSibling":"nextSibling"]
}a=d(a).offset();
return[a.left,a.top]
},_triggerOnClose:function(a){var b=this._get(a,"onClose");
if(b){b.apply(a.input?a.input[0]:null,[a.input?a.input.val():"",a])
}},_hideDatepicker:function(a){var b=this._curInst;
if(!(!b||a&&b!=d.data(a,"datepicker"))){if(this._datepickerShowing){a=this._get(b,"showAnim");
var c=this._get(b,"duration"),e=function(){d.datepicker._tidyDialog(b);
this._curInst=null
};
d.effects&&d.effects[a]?b.dpDiv.hide(a,d.datepicker._get(b,"showOptions"),c,e):b.dpDiv[a=="slideDown"?"slideUp":a=="fadeIn"?"fadeOut":"hide"](a?c:null,e);
a||e();
d.datepicker._triggerOnClose(b);
this._datepickerShowing=false;
this._lastInput=null;
if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});
if(d.blockUI){d.unblockUI();
d("body").append(this.dpDiv)
}}this._inDialog=false
}}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
},_checkExternalClick:function(a){if(d.datepicker._curInst){a=d(a.target);
a[0].id!=d.datepicker._mainDivId&&a.parents("#"+d.datepicker._mainDivId).length==0&&!a.hasClass(d.datepicker.markerClassName)&&!a.hasClass(d.datepicker._triggerClass)&&d.datepicker._datepickerShowing&&!(d.datepicker._inDialog&&d.blockUI)&&d.datepicker._hideDatepicker()
}},_adjustDate:function(a,b,c){a=d(a);
var e=this._getInst(a[0]);
if(!this._isDisabledDatepicker(a[0])){this._adjustInstDate(e,b+(c=="M"?this._get(e,"showCurrentAtPos"):0),c);
this._updateDatepicker(e)
}},_gotoToday:function(a){a=d(a);
var b=this._getInst(a[0]);
if(this._get(b,"gotoCurrent")&&b.currentDay){b.selectedDay=b.currentDay;
b.drawMonth=b.selectedMonth=b.currentMonth;
b.drawYear=b.selectedYear=b.currentYear
}else{var c=new Date;
b.selectedDay=c.getDate();
b.drawMonth=b.selectedMonth=c.getMonth();
b.drawYear=b.selectedYear=c.getFullYear()
}this._notifyChange(b);
this._adjustDate(a)
},_selectMonthYear:function(a,b,c){a=d(a);
var e=this._getInst(a[0]);
e["selected"+(c=="M"?"Month":"Year")]=e["draw"+(c=="M"?"Month":"Year")]=parseInt(b.options[b.selectedIndex].value,10);
this._notifyChange(e);
this._adjustDate(a)
},_selectDay:function(a,b,c,e){var f=d(a);
if(!(d(e).hasClass(this._unselectableClass)||this._isDisabledDatepicker(f[0]))){f=this._getInst(f[0]);
f.selectedDay=f.currentDay=d("a",e).html();
f.selectedMonth=f.currentMonth=b;
f.selectedYear=f.currentYear=c;
this._selectDate(a,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear))
}},_clearDate:function(a){a=d(a);
this._getInst(a[0]);
this._selectDate(a,"")
},_selectDate:function(a,b){a=this._getInst(d(a)[0]);
b=b!=null?b:this._formatDate(a);
a.input&&a.input.val(b);
this._updateAlternate(a);
var c=this._get(a,"onSelect");
if(c){c.apply(a.input?a.input[0]:null,[b,a])
}else{a.input&&a.input.trigger("change")
}if(a.inline){this._updateDatepicker(a)
}else{this._hideDatepicker();
this._lastInput=a.input[0];
typeof a.input[0]!="object"&&a.input.focus();
this._lastInput=null
}},_updateAlternate:function(a){var b=this._get(a,"altField");
if(b){var c=this._get(a,"altFormat")||this._get(a,"dateFormat"),e=this._getDate(a),f=this.formatDate(c,e,this._getFormatConfig(a));
d(b).each(function(){d(this).val(f)
})
}},noWeekends:function(a){a=a.getDay();
return[a>0&&a<6,""]
},iso8601Week:function(a){a=new Date(a.getTime());
a.setDate(a.getDate()+4-(a.getDay()||7));
var b=a.getTime();
a.setMonth(0);
a.setDate(1);
return Math.floor(Math.round((b-a)/86400000)/7)+1
},parseDate:function(a,b,c){if(a==null||b==null){throw"Invalid arguments"
}b=typeof b=="object"?b.toString():b+"";
if(b==""){return null
}var e=(c?c.shortYearCutoff:null)||this._defaults.shortYearCutoff;
e=typeof e!="string"?e:(new Date).getFullYear()%100+parseInt(e,10);
for(var f=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,h=(c?c.dayNames:null)||this._defaults.dayNames,i=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,g=(c?c.monthNames:null)||this._defaults.monthNames,j=c=-1,l=-1,u=-1,k=false,o=function(p){(p=A+1<a.length&&a.charAt(A+1)==p)&&A++;
return p
},m=function(p){var D=o(p);
p=new RegExp("^\\d{1,"+(p=="@"?14:p=="!"?20:p=="y"&&D?4:p=="o"?3:2)+"}");
p=b.substring(q).match(p);
if(!p){throw"Missing number at position "+q
}q+=p[0].length;
return parseInt(p[0],10)
},n=function(p,D,K){p=d.map(o(p)?K:D,function(w,x){return[[x,w]]
}).sort(function(w,x){return -(w[1].length-x[1].length)
});
var E=-1;
d.each(p,function(w,x){w=x[1];
if(b.substr(q,w.length).toLowerCase()==w.toLowerCase()){E=x[0];
q+=w.length;
return false
}});
if(E!=-1){return E+1
}else{throw"Unknown name at position "+q
}},s=function(){if(b.charAt(q)!=a.charAt(A)){throw"Unexpected literal at position "+q
}q++
},q=0,A=0;
A<a.length;
A++){if(k){if(a.charAt(A)=="'"&&!o("'")){k=false
}else{s()
}}else{switch(a.charAt(A)){case"d":l=m("d");
break;
case"D":n("D",f,h);
break;
case"o":u=m("o");
break;
case"m":j=m("m");
break;
case"M":j=n("M",i,g);
break;
case"y":c=m("y");
break;
case"@":var v=new Date(m("@"));
c=v.getFullYear();
j=v.getMonth()+1;
l=v.getDate();
break;
case"!":v=new Date((m("!")-this._ticksTo1970)/10000);
c=v.getFullYear();
j=v.getMonth()+1;
l=v.getDate();
break;
case"'":if(o("'")){s()
}else{k=true
}break;
default:s()
}}}if(q<b.length){throw"Extra/unparsed characters found in date: "+b.substring(q)
}if(c==-1){c=(new Date).getFullYear()
}else{if(c<100){c+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c<=e?0:-100)
}}if(u>-1){j=1;
l=u;
do{e=this._getDaysInMonth(c,j-1);
if(l<=e){break
}j++;
l-=e
}while(1)
}v=this._daylightSavingAdjust(new Date(c,j-1,l));
if(v.getFullYear()!=c||v.getMonth()+1!=j||v.getDate()!=l){throw"Invalid date"
}return v
},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*10000000,formatDate:function(a,b,c){if(!b){return""
}var e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,h=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort;
c=(c?c.monthNames:null)||this._defaults.monthNames;
var i=function(o){(o=k+1<a.length&&a.charAt(k+1)==o)&&k++;
return o
},g=function(o,m,n){m=""+m;
if(i(o)){for(;
m.length<n;
){m="0"+m
}}return m
},j=function(o,m,n,s){return i(o)?s[m]:n[m]
},l="",u=false;
if(b){for(var k=0;
k<a.length;
k++){if(u){if(a.charAt(k)=="'"&&!i("'")){u=false
}else{l+=a.charAt(k)
}}else{switch(a.charAt(k)){case"d":l+=g("d",b.getDate(),2);
break;
case"D":l+=j("D",b.getDay(),e,f);
break;
case"o":l+=g("o",Math.round(((new Date(b.getFullYear(),b.getMonth(),b.getDate())).getTime()-(new Date(b.getFullYear(),0,0)).getTime())/86400000),3);
break;
case"m":l+=g("m",b.getMonth()+1,2);
break;
case"M":l+=j("M",b.getMonth(),h,c);
break;
case"y":l+=i("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;
break;
case"@":l+=b.getTime();
break;
case"!":l+=b.getTime()*10000+this._ticksTo1970;
break;
case"'":if(i("'")){l+="'"
}else{u=true
}break;
default:l+=a.charAt(k)
}}}}return l
},_possibleChars:function(a){for(var b="",c=false,e=function(h){(h=f+1<a.length&&a.charAt(f+1)==h)&&f++;
return h
},f=0;
f<a.length;
f++){if(c){if(a.charAt(f)=="'"&&!e("'")){c=false
}else{b+=a.charAt(f)
}}else{switch(a.charAt(f)){case"d":case"m":case"y":case"@":b+="0123456789";
break;
case"D":case"M":return null;
case"'":if(e("'")){b+="'"
}else{c=true
}break;
default:b+=a.charAt(f)
}}}return b
},_get:function(a,b){return a.settings[b]!==C?a.settings[b]:this._defaults[b]
},_setDateFromField:function(a,b){if(a.input.val()!=a.lastVal){var c=this._get(a,"dateFormat"),e=a.lastVal=a.input?a.input.val():null,f,h;
f=h=this._getDefaultDate(a);
var i=this._getFormatConfig(a);
try{f=this.parseDate(c,e,i)||h
}catch(g){this.log(g);
e=b?"":e
}a.selectedDay=f.getDate();
a.drawMonth=a.selectedMonth=f.getMonth();
a.drawYear=a.selectedYear=f.getFullYear();
a.currentDay=e?f.getDate():0;
a.currentMonth=e?f.getMonth():0;
a.currentYear=e?f.getFullYear():0;
this._adjustInstDate(a)
}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))
},_determineDate:function(a,b,c){var e=function(h){var i=new Date;
i.setDate(i.getDate()+h);
return i
},f=function(h){try{return d.datepicker.parseDate(d.datepicker._get(a,"dateFormat"),h,d.datepicker._getFormatConfig(a))
}catch(i){}var g=(h.toLowerCase().match(/^c/)?d.datepicker._getDate(a):null)||new Date,j=g.getFullYear(),l=g.getMonth();
g=g.getDate();
for(var u=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,k=u.exec(h);
k;
){switch(k[2]||"d"){case"d":case"D":g+=parseInt(k[1],10);
break;
case"w":case"W":g+=parseInt(k[1],10)*7;
break;
case"m":case"M":l+=parseInt(k[1],10);
g=Math.min(g,d.datepicker._getDaysInMonth(j,l));
break;
case"y":case"Y":j+=parseInt(k[1],10);
g=Math.min(g,d.datepicker._getDaysInMonth(j,l));
break
}k=u.exec(h)
}return new Date(j,l,g)
};
if(b=(b=b==null||b===""?c:typeof b=="string"?f(b):typeof b=="number"?isNaN(b)?c:e(b):new Date(b.getTime()))&&b.toString()=="Invalid Date"?c:b){b.setHours(0);
b.setMinutes(0);
b.setSeconds(0);
b.setMilliseconds(0)
}return this._daylightSavingAdjust(b)
},_daylightSavingAdjust:function(a){if(!a){return null
}a.setHours(a.getHours()>12?a.getHours()+2:0);
return a
},_setDate:function(a,b,c){var e=!b,f=a.selectedMonth,h=a.selectedYear;
b=this._restrictMinMax(a,this._determineDate(a,b,new Date));
a.selectedDay=a.currentDay=b.getDate();
a.drawMonth=a.selectedMonth=a.currentMonth=b.getMonth();
a.drawYear=a.selectedYear=a.currentYear=b.getFullYear();
if((f!=a.selectedMonth||h!=a.selectedYear)&&!c){this._notifyChange(a)
}this._adjustInstDate(a);
if(a.input){a.input.val(e?"":this._formatDate(a))
}},_getDate:function(a){return !a.currentYear||a.input&&a.input.val()==""?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay))
},_generateHTML:function(a){var b=new Date;
b=this._daylightSavingAdjust(new Date(b.getFullYear(),b.getMonth(),b.getDate()));
var c=this._get(a,"isRTL"),e=this._get(a,"showButtonPanel"),f=this._get(a,"hideIfNoPrevNext"),h=this._get(a,"navigationAsDateFormat"),i=this._getNumberOfMonths(a),g=this._get(a,"showCurrentAtPos"),j=this._get(a,"stepMonths"),l=i[0]!=1||i[1]!=1,u=this._daylightSavingAdjust(!a.currentDay?new Date(9999,9,9):new Date(a.currentYear,a.currentMonth,a.currentDay)),k=this._getMinMaxDate(a,"min"),o=this._getMinMaxDate(a,"max");
g=a.drawMonth-g;
var m=a.drawYear;
if(g<0){g+=12;
m--
}if(o){var n=this._daylightSavingAdjust(new Date(o.getFullYear(),o.getMonth()-i[0]*i[1]+1,o.getDate()));
for(n=k&&n<k?k:n;
this._daylightSavingAdjust(new Date(m,g,1))>n;
){g--;
if(g<0){g=11;
m--
}}}a.drawMonth=g;
a.drawYear=m;
n=this._get(a,"prevText");
n=!h?n:this.formatDate(n,this._daylightSavingAdjust(new Date(m,g-j,1)),this._getFormatConfig(a));
n=this._canAdjustMonth(a,-1,m,g)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+B+".datepicker._adjustDate('#"+a.id+"', -"+j+", 'M');\" title=\""+n+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+n+"</span></a>":f?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+n+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+n+"</span></a>";
var s=this._get(a,"nextText");
s=!h?s:this.formatDate(s,this._daylightSavingAdjust(new Date(m,g+j,1)),this._getFormatConfig(a));
f=this._canAdjustMonth(a,+1,m,g)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+B+".datepicker._adjustDate('#"+a.id+"', +"+j+", 'M');\" title=\""+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>":f?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>";
j=this._get(a,"currentText");
s=this._get(a,"gotoCurrent")&&a.currentDay?u:b;
j=!h?j:this.formatDate(j,s,this._getFormatConfig(a));
h=!a.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+B+'.datepicker._hideDatepicker();">'+this._get(a,"closeText")+"</button>":"";
e=e?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(c?h:"")+(this._isInRange(a,s)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+B+".datepicker._gotoToday('#"+a.id+"');\">"+j+"</button>":"")+(c?"":h)+"</div>":"";
h=parseInt(this._get(a,"firstDay"),10);
h=isNaN(h)?0:h;
j=this._get(a,"showWeek");
s=this._get(a,"dayNames");
this._get(a,"dayNamesShort");
var q=this._get(a,"dayNamesMin"),A=this._get(a,"monthNames"),v=this._get(a,"monthNamesShort"),p=this._get(a,"beforeShowDay"),D=this._get(a,"showOtherMonths"),K=this._get(a,"selectOtherMonths");
this._get(a,"calculateWeek");
for(var E=this._getDefaultDate(a),w="",x=0;
x<i[0];
x++){var O="";
this.maxRows=4;
for(var G=0;
G<i[1];
G++){var P=this._daylightSavingAdjust(new Date(m,g,a.selectedDay)),t=" ui-corner-all",y="";
if(l){y+='<div class="ui-datepicker-group';
if(i[1]>1){switch(G){case 0:y+=" ui-datepicker-group-first";
t=" ui-corner-"+(c?"right":"left");
break;
case i[1]-1:y+=" ui-datepicker-group-last";
t=" ui-corner-"+(c?"left":"right");
break;
default:y+=" ui-datepicker-group-middle";
t="";
break
}}y+='">'
}y+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+t+'">'+(/all|left/.test(t)&&x==0?c?f:n:"")+(/all|right/.test(t)&&x==0?c?n:f:"")+this._generateMonthYearHeader(a,g,m,k,o,x>0||G>0,A,v)+'</div><table class="ui-datepicker-calendar"><thead><tr>';
var z=j?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"";
for(t=0;
t<7;
t++){var r=(t+h)%7;
z+="<th"+((t+h+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+s[r]+'">'+q[r]+"</span></th>"
}y+=z+"</tr></thead><tbody>";
z=this._getDaysInMonth(m,g);
if(m==a.selectedYear&&g==a.selectedMonth){a.selectedDay=Math.min(a.selectedDay,z)
}t=(this._getFirstDayOfMonth(m,g)-h+7)%7;
z=Math.ceil((t+z)/7);
this.maxRows=z=l?this.maxRows>z?this.maxRows:z:z;
r=this._daylightSavingAdjust(new Date(m,g,1-t));
for(var Q=0;
Q<z;
Q++){y+="<tr>";
var R=!j?"":'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(r)+"</td>";
for(t=0;
t<7;
t++){var I=p?p.apply(a.input?a.input[0]:null,[r]):[true,""],F=r.getMonth()!=g,L=F&&!K||!I[0]||k&&r<k||o&&r>o;
R+='<td class="'+((t+h+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(r.getTime()==P.getTime()&&g==a.selectedMonth&&a._keyEvent||E.getTime()==r.getTime()&&E.getTime()==P.getTime()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!D?"":" "+I[1]+(r.getTime()==u.getTime()?" "+this._currentClass:"")+(r.getTime()==b.getTime()?" ui-datepicker-today":""))+'"'+((!F||D)&&I[2]?' title="'+I[2]+'"':"")+(L?"":' onclick="DP_jQuery_'+B+".datepicker._selectDay('#"+a.id+"',"+r.getMonth()+","+r.getFullYear()+', this);return false;"')+">"+(F&&!D?"&#xa0;":L?'<span class="ui-state-default">'+r.getDate()+"</span>":'<a class="ui-state-default'+(r.getTime()==b.getTime()?" ui-state-highlight":"")+(r.getTime()==u.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+'" href="#">'+r.getDate()+"</a>")+"</td>";
r.setDate(r.getDate()+1);
r=this._daylightSavingAdjust(r)
}y+=R+"</tr>"
}g++;
if(g>11){g=0;
m++
}y+="</tbody></table>"+(l?"</div>"+(i[0]>0&&G==i[1]-1?'<div class="ui-datepicker-row-break"></div>':""):"");
O+=y
}w+=O
}w+=e+(d.browser.msie&&parseInt(d.browser.version,10)<7&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':"");
a._keyEvent=false;
return w
},_generateMonthYearHeader:function(a,b,c,e,f,h,i,g){var j=this._get(a,"changeMonth"),l=this._get(a,"changeYear"),u=this._get(a,"showMonthAfterYear"),k='<div class="ui-datepicker-title">',o="";
if(h||!j){o+='<span class="ui-datepicker-month">'+i[b]+"</span>"
}else{i=e&&e.getFullYear()==c;
var m=f&&f.getFullYear()==c;
o+='<select class="ui-datepicker-month" onchange="DP_jQuery_'+B+".datepicker._selectMonthYear('#"+a.id+"', this, 'M');\" >";
for(var n=0;
n<12;
n++){if((!i||n>=e.getMonth())&&(!m||n<=f.getMonth())){o+='<option value="'+n+'"'+(n==b?' selected="selected"':"")+">"+g[n]+"</option>"
}}o+="</select>"
}u||(k+=o+(h||!(j&&l)?"&#xa0;":""));
if(!a.yearshtml){a.yearshtml="";
if(h||!l){k+='<span class="ui-datepicker-year">'+c+"</span>"
}else{g=this._get(a,"yearRange").split(":");
var s=(new Date).getFullYear();
i=function(q){q=q.match(/c[+-].*/)?c+parseInt(q.substring(1),10):q.match(/[+-].*/)?s+parseInt(q,10):parseInt(q,10);
return isNaN(q)?s:q
};
b=i(g[0]);
g=Math.max(b,i(g[1]||""));
b=e?Math.max(b,e.getFullYear()):b;
g=f?Math.min(g,f.getFullYear()):g;
for(a.yearshtml+='<select class="ui-datepicker-year" onchange="DP_jQuery_'+B+".datepicker._selectMonthYear('#"+a.id+"', this, 'Y');\" >";
b<=g;
b++){a.yearshtml+='<option value="'+b+'"'+(b==c?' selected="selected"':"")+">"+b+"</option>"
}a.yearshtml+="</select>";
k+=a.yearshtml;
a.yearshtml=null
}}k+=this._get(a,"yearSuffix");
if(u){k+=(h||!(j&&l)?"&#xa0;":"")+o
}k+="</div>";
return k
},_adjustInstDate:function(a,b,c){var e=a.drawYear+(c=="Y"?b:0),f=a.drawMonth+(c=="M"?b:0);
b=Math.min(a.selectedDay,this._getDaysInMonth(e,f))+(c=="D"?b:0);
e=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(e,f,b)));
a.selectedDay=e.getDate();
a.drawMonth=a.selectedMonth=e.getMonth();
a.drawYear=a.selectedYear=e.getFullYear();
if(c=="M"||c=="Y"){this._notifyChange(a)
}},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min");
a=this._getMinMaxDate(a,"max");
b=c&&b<c?c:b;
return b=a&&b>a?a:b
},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");
if(b){b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])
}},_getNumberOfMonths:function(a){a=this._get(a,"numberOfMonths");
return a==null?[1,1]:typeof a=="number"?[1,a]:a
},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)
},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()
},_getFirstDayOfMonth:function(a,b){return(new Date(a,b,1)).getDay()
},_canAdjustMonth:function(a,b,c,e){var f=this._getNumberOfMonths(a);
c=this._daylightSavingAdjust(new Date(c,e+(b<0?b:f[0]*f[1]),1));
b<0&&c.setDate(this._getDaysInMonth(c.getFullYear(),c.getMonth()));
return this._isInRange(a,c)
},_isInRange:function(a,b){var c=this._getMinMaxDate(a,"min");
a=this._getMinMaxDate(a,"max");
return(!c||b.getTime()>=c.getTime())&&(!a||b.getTime()<=a.getTime())
},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");
b=typeof b!="string"?b:(new Date).getFullYear()%100+parseInt(b,10);
return{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}
},_formatDate:function(a,b,c,e){if(!b){a.currentDay=a.selectedDay;
a.currentMonth=a.selectedMonth;
a.currentYear=a.selectedYear
}b=b?typeof b=="object"?b:this._daylightSavingAdjust(new Date(e,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));
return this.formatDate(this._get(a,"dateFormat"),b,this._getFormatConfig(a))
}});
d.fn.datepicker=function(a){if(!this.length){return this
}if(!d.datepicker.initialized){d(document).mousedown(d.datepicker._checkExternalClick).find("body").append(d.datepicker.dpDiv);
d.datepicker.initialized=true
}var b=Array.prototype.slice.call(arguments,1);
if(typeof a=="string"&&(a=="isDisabled"||a=="getDate"||a=="widget")){return d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this[0]].concat(b))
}if(a=="option"&&arguments.length==2&&typeof arguments[1]=="string"){return d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this[0]].concat(b))
}return this.each(function(){typeof a=="string"?d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this].concat(b)):d.datepicker._attachDatepicker(this,a)
})
};
d.datepicker=new M;
d.datepicker.initialized=false;
d.datepicker.uuid=(new Date).getTime();
d.datepicker.version="1.8.16";
window["DP_jQuery_"+B]=d
})(jQuery);
(function(a,c){a.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()});
this.valueDiv=a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
this.oldValue=this._value();
this._refreshValue()
},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.valueDiv.remove();
a.Widget.prototype.destroy.apply(this,arguments)
},value:function(b){if(b===c){return this._value()
}this._setOption("value",b);
return this
},_setOption:function(b,d){if(b==="value"){this.options.value=d;
this._refreshValue();
this._value()===this.options.max&&this._trigger("complete")
}a.Widget.prototype._setOption.apply(this,arguments)
},_value:function(){var b=this.options.value;
if(typeof b!=="number"){b=0
}return Math.min(this.options.max,Math.max(this.min,b))
},_percentage:function(){return 100*this._value()/this.options.max
},_refreshValue:function(){var b=this.value(),d=this._percentage();
if(this.oldValue!==b){this.oldValue=b;
this._trigger("change")
}this.valueDiv.toggle(b>this.min).toggleClass("ui-corner-right",b===this.options.max).width(d.toFixed(0)+"%");
this.element.attr("aria-valuenow",b)
}});
a.extend(a.ui.progressbar,{version:"1.8.16"})
})(jQuery);
jQuery.effects||function(v,r){function e(j){var f;
if(j&&j.constructor==Array&&j.length==3){return j
}if(f=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(j)){return[parseInt(f[1],10),parseInt(f[2],10),parseInt(f[3],10)]
}if(f=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(j)){return[parseFloat(f[1])*2.55,parseFloat(f[2])*2.55,parseFloat(f[3])*2.55]
}if(f=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(j)){return[parseInt(f[1],16),parseInt(f[2],16),parseInt(f[3],16)]
}if(f=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(j)){return[parseInt(f[1]+f[1],16),parseInt(f[2]+f[2],16),parseInt(f[3]+f[3],16)]
}if(/rgba\(0, 0, 0, 0\)/.exec(j)){return d.transparent
}return d[v.trim(j).toLowerCase()]
}function y(k,j){var f;
do{f=v.curCSS(k,j);
if(f!=""&&f!="transparent"||v.nodeName(k,"body")){break
}j="backgroundColor"
}while(k=k.parentNode);
return e(f)
}function c(){var m=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,j={},f,l;
if(m&&m.length&&m[0]&&m[m[0]]){for(var k=m.length;
k--;
){f=m[k];
if(typeof m[f]=="string"){l=f.replace(/\-(\w)/g,function(o,n){return n.toUpperCase()
});
j[l]=m[f]
}}}else{for(f in m){if(typeof m[f]==="string"){j[f]=m[f]
}}}return j
}function b(k){var j,f;
for(j in k){f=k[j];
if(f==null||v.isFunction(f)||j in x||/scrollbar/.test(j)||!/color/i.test(j)&&isNaN(parseFloat(f))){delete k[j]
}}return k
}function w(l,j){var f={_:0},k;
for(k in j){if(l[k]!=j[k]){f[k]=j[k]
}}return f
}function h(l,j,f,k){if(typeof l=="object"){k=j;
f=null;
j=l;
l=j.effect
}if(v.isFunction(j)){k=j;
f=null;
j={}
}if(typeof j=="number"||v.fx.speeds[j]){k=f;
f=j;
j={}
}if(v.isFunction(f)){k=f;
f=null
}j=j||{};
f=f||j.duration;
f=v.fx.off?0:typeof f=="number"?f:f in v.fx.speeds?v.fx.speeds[f]:v.fx.speeds._default;
k=k||j.complete;
return[l,j,f,k]
}function g(f){if(!f||typeof f==="number"||v.fx.speeds[f]){return true
}if(typeof f==="string"&&!v.effects[f]){return true
}return false
}v.effects={};
v.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","borderColor","color","outlineColor"],function(j,f){v.fx.step[f]=function(k){if(!k.colorInit){k.start=y(k.elem,f);
k.end=e(k.end);
k.colorInit=true
}k.elem.style[f]="rgb("+Math.max(Math.min(parseInt(k.pos*(k.end[0]-k.start[0])+k.start[0],10),255),0)+","+Math.max(Math.min(parseInt(k.pos*(k.end[1]-k.start[1])+k.start[1],10),255),0)+","+Math.max(Math.min(parseInt(k.pos*(k.end[2]-k.start[2])+k.start[2],10),255),0)+")"
}
});
var d={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},a=["add","remove","toggle"],x={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};
v.effects.animateClass=function(l,j,f,k){if(v.isFunction(f)){k=f;
f=null
}return this.queue(function(){var q=v(this),p=q.attr("style")||" ",n=b(c.call(this)),o,m=q.attr("class");
v.each(a,function(s,u){l[u]&&q[u+"Class"](l[u])
});
o=b(c.call(this));
q.attr("class",m);
q.animate(w(n,o),{queue:false,duration:j,easing:f,complete:function(){v.each(a,function(s,u){l[u]&&q[u+"Class"](l[u])
});
if(typeof q.attr("style")=="object"){q.attr("style").cssText="";
q.attr("style").cssText=p
}else{q.attr("style",p)
}k&&k.apply(this,arguments);
v.dequeue(this)
}})
})
};
v.fn.extend({_addClass:v.fn.addClass,addClass:function(l,j,f,k){return j?v.effects.animateClass.apply(this,[{add:l},j,f,k]):this._addClass(l)
},_removeClass:v.fn.removeClass,removeClass:function(l,j,f,k){return j?v.effects.animateClass.apply(this,[{remove:l},j,f,k]):this._removeClass(l)
},_toggleClass:v.fn.toggleClass,toggleClass:function(m,j,f,l,k){return typeof j=="boolean"||j===r?f?v.effects.animateClass.apply(this,[j?{add:m}:{remove:m},f,l,k]):this._toggleClass(m,j):v.effects.animateClass.apply(this,[{toggle:m},j,f,l])
},switchClass:function(m,j,f,l,k){return v.effects.animateClass.apply(this,[{add:j,remove:m},f,l,k])
}});
v.extend(v.effects,{version:"1.8.16",save:function(k,j){for(var f=0;
f<j.length;
f++){j[f]!==null&&k.data("ec.storage."+j[f],k[0].style[j[f]])
}},restore:function(k,j){for(var f=0;
f<j.length;
f++){j[f]!==null&&k.css(j[f],k.data("ec.storage."+j[f]))
}},setMode:function(j,f){if(f=="toggle"){f=j.is(":hidden")?"show":"hide"
}return f
},getBaseline:function(k,j){var f;
switch(k[0]){case"top":f=0;
break;
case"middle":f=0.5;
break;
case"bottom":f=1;
break;
default:f=k[0]/j.height
}switch(k[1]){case"left":k=0;
break;
case"center":k=0.5;
break;
case"right":k=1;
break;
default:k=k[1]/j.width
}return{x:k,y:f}
},createWrapper:function(l){if(l.parent().is(".ui-effects-wrapper")){return l.parent()
}var j={width:l.outerWidth(true),height:l.outerHeight(true),"float":l.css("float")},f=v("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),k=document.activeElement;
l.wrap(f);
if(l[0]===k||v.contains(l[0],k)){v(k).focus()
}f=l.parent();
if(l.css("position")=="static"){f.css({position:"relative"});
l.css({position:"relative"})
}else{v.extend(j,{position:l.css("position"),zIndex:l.css("z-index")});
v.each(["top","left","bottom","right"],function(n,m){j[m]=l.css(m);
if(isNaN(parseInt(j[m],10))){j[m]="auto"
}});
l.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})
}return f.css(j).show()
},removeWrapper:function(k){var j,f=document.activeElement;
if(k.parent().is(".ui-effects-wrapper")){j=k.parent().replaceWith(k);
if(k[0]===f||v.contains(k[0],f)){v(f).focus()
}return j
}return k
},setTransition:function(l,j,f,k){k=k||{};
v.each(j,function(n,m){unit=l.cssUnit(m);
if(unit[0]>0){k[m]=unit[0]*f+unit[1]
}});
return k
}});
v.fn.extend({effect:function(l){var j=h.apply(this,arguments),f={options:j[1],duration:j[2],callback:j[3]};
j=f.options.mode;
var k=v.effects[l];
if(v.fx.off||!k){return j?this[j](f.duration,f.callback):this.each(function(){f.callback&&f.callback.call(this)
})
}return k.call(this,f)
},_show:v.fn.show,show:function(j){if(g(j)){return this._show.apply(this,arguments)
}else{var f=h.apply(this,arguments);
f[1].mode="show";
return this.effect.apply(this,f)
}},_hide:v.fn.hide,hide:function(j){if(g(j)){return this._hide.apply(this,arguments)
}else{var f=h.apply(this,arguments);
f[1].mode="hide";
return this.effect.apply(this,f)
}},__toggle:v.fn.toggle,toggle:function(j){if(g(j)||typeof j==="boolean"||v.isFunction(j)){return this.__toggle.apply(this,arguments)
}else{var f=h.apply(this,arguments);
f[1].mode="toggle";
return this.effect.apply(this,f)
}},cssUnit:function(k){var j=this.css(k),f=[];
v.each(["em","px","%","pt"],function(m,l){if(j.indexOf(l)>0){f=[parseFloat(j),l]
}});
return f
}});
v.easing.jswing=v.easing.swing;
v.extend(v.easing,{def:"easeOutQuad",swing:function(m,j,f,l,k){return v.easing[v.easing.def](m,j,f,l,k)
},easeInQuad:function(m,j,f,l,k){return l*(j/=k)*j+f
},easeOutQuad:function(m,j,f,l,k){return -l*(j/=k)*(j-2)+f
},easeInOutQuad:function(m,j,f,l,k){if((j/=k/2)<1){return l/2*j*j+f
}return -l/2*(--j*(j-2)-1)+f
},easeInCubic:function(m,j,f,l,k){return l*(j/=k)*j*j+f
},easeOutCubic:function(m,j,f,l,k){return l*((j=j/k-1)*j*j+1)+f
},easeInOutCubic:function(m,j,f,l,k){if((j/=k/2)<1){return l/2*j*j*j+f
}return l/2*((j-=2)*j*j+2)+f
},easeInQuart:function(m,j,f,l,k){return l*(j/=k)*j*j*j+f
},easeOutQuart:function(m,j,f,l,k){return -l*((j=j/k-1)*j*j*j-1)+f
},easeInOutQuart:function(m,j,f,l,k){if((j/=k/2)<1){return l/2*j*j*j*j+f
}return -l/2*((j-=2)*j*j*j-2)+f
},easeInQuint:function(m,j,f,l,k){return l*(j/=k)*j*j*j*j+f
},easeOutQuint:function(m,j,f,l,k){return l*((j=j/k-1)*j*j*j*j+1)+f
},easeInOutQuint:function(m,j,f,l,k){if((j/=k/2)<1){return l/2*j*j*j*j*j+f
}return l/2*((j-=2)*j*j*j*j+2)+f
},easeInSine:function(m,j,f,l,k){return -l*Math.cos(j/k*(Math.PI/2))+l+f
},easeOutSine:function(m,j,f,l,k){return l*Math.sin(j/k*(Math.PI/2))+f
},easeInOutSine:function(m,j,f,l,k){return -l/2*(Math.cos(Math.PI*j/k)-1)+f
},easeInExpo:function(m,j,f,l,k){return j==0?f:l*Math.pow(2,10*(j/k-1))+f
},easeOutExpo:function(m,j,f,l,k){return j==k?f+l:l*(-Math.pow(2,-10*j/k)+1)+f
},easeInOutExpo:function(m,j,f,l,k){if(j==0){return f
}if(j==k){return f+l
}if((j/=k/2)<1){return l/2*Math.pow(2,10*(j-1))+f
}return l/2*(-Math.pow(2,-10*--j)+2)+f
},easeInCirc:function(m,j,f,l,k){return -l*(Math.sqrt(1-(j/=k)*j)-1)+f
},easeOutCirc:function(m,j,f,l,k){return l*Math.sqrt(1-(j=j/k-1)*j)+f
},easeInOutCirc:function(m,j,f,l,k){if((j/=k/2)<1){return -l/2*(Math.sqrt(1-j*j)-1)+f
}return l/2*(Math.sqrt(1-(j-=2)*j)+1)+f
},easeInElastic:function(o,j,f,n,m){o=1.70158;
var l=0,k=n;
if(j==0){return f
}if((j/=m)==1){return f+n
}l||(l=m*0.3);
if(k<Math.abs(n)){k=n;
o=l/4
}else{o=l/(2*Math.PI)*Math.asin(n/k)
}return -(k*Math.pow(2,10*(j-=1))*Math.sin((j*m-o)*2*Math.PI/l))+f
},easeOutElastic:function(o,j,f,n,m){o=1.70158;
var l=0,k=n;
if(j==0){return f
}if((j/=m)==1){return f+n
}l||(l=m*0.3);
if(k<Math.abs(n)){k=n;
o=l/4
}else{o=l/(2*Math.PI)*Math.asin(n/k)
}return k*Math.pow(2,-10*j)*Math.sin((j*m-o)*2*Math.PI/l)+n+f
},easeInOutElastic:function(o,j,f,n,m){o=1.70158;
var l=0,k=n;
if(j==0){return f
}if((j/=m/2)==2){return f+n
}l||(l=m*0.3*1.5);
if(k<Math.abs(n)){k=n;
o=l/4
}else{o=l/(2*Math.PI)*Math.asin(n/k)
}if(j<1){return -0.5*k*Math.pow(2,10*(j-=1))*Math.sin((j*m-o)*2*Math.PI/l)+f
}return k*Math.pow(2,-10*(j-=1))*Math.sin((j*m-o)*2*Math.PI/l)*0.5+n+f
},easeInBack:function(n,j,f,m,l,k){if(k==r){k=1.70158
}return m*(j/=l)*j*((k+1)*j-k)+f
},easeOutBack:function(n,j,f,m,l,k){if(k==r){k=1.70158
}return m*((j=j/l-1)*j*((k+1)*j+k)+1)+f
},easeInOutBack:function(n,j,f,m,l,k){if(k==r){k=1.70158
}if((j/=l/2)<1){return m/2*j*j*(((k*=1.525)+1)*j-k)+f
}return m/2*((j-=2)*j*(((k*=1.525)+1)*j+k)+2)+f
},easeInBounce:function(m,j,f,l,k){return l-v.easing.easeOutBounce(m,k-j,0,l,k)+f
},easeOutBounce:function(m,j,f,l,k){return(j/=k)<1/2.75?l*7.5625*j*j+f:j<2/2.75?l*(7.5625*(j-=1.5/2.75)*j+0.75)+f:j<2.5/2.75?l*(7.5625*(j-=2.25/2.75)*j+0.9375)+f:l*(7.5625*(j-=2.625/2.75)*j+0.984375)+f
},easeInOutBounce:function(m,j,f,l,k){if(j<k/2){return v.easing.easeInBounce(m,j*2,0,l,k)*0.5+f
}return v.easing.easeOutBounce(m,j*2-k,0,l,k)*0.5+l*0.5+f
}})
}(jQuery);
(function(a){a.effects.blind=function(b){return this.queue(function(){var c=a(this),l=["position","top","bottom","left","right"],m=a.effects.setMode(c,b.options.mode||"hide"),o=b.options.direction||"vertical";
a.effects.save(c,l);
c.show();
var n=a.effects.createWrapper(c).css({overflow:"hidden"}),k=o=="vertical"?"height":"width";
o=o=="vertical"?n.height():n.width();
m=="show"&&n.css(k,0);
var j={};
j[k]=m=="show"?o:0;
n.animate(j,b.duration,b.options.easing,function(){m=="hide"&&c.hide();
a.effects.restore(c,l);
a.effects.removeWrapper(c);
b.callback&&b.callback.apply(c[0],arguments);
c.dequeue()
})
})
}
})(jQuery);
(function(a){a.effects.bounce=function(c){return this.queue(function(){var w=a(this),e=["position","top","bottom","left","right"],q=a.effects.setMode(w,c.options.mode||"effect"),u=c.options.direction||"up",v=c.options.distance||20,b=c.options.times||5,p=c.duration||250;
/show|hide/.test(q)&&e.push("opacity");
a.effects.save(w,e);
w.show();
a.effects.createWrapper(w);
var s=u=="up"||u=="down"?"top":"left";
u=u=="up"||u=="left"?"pos":"neg";
v=c.options.distance||(s=="top"?w.outerHeight({margin:true})/3:w.outerWidth({margin:true})/3);
if(q=="show"){w.css("opacity",0).css(s,u=="pos"?-v:v)
}if(q=="hide"){v/=b*2
}q!="hide"&&b--;
if(q=="show"){var r={opacity:1};
r[s]=(u=="pos"?"+=":"-=")+v;
w.animate(r,p/2,c.options.easing);
v/=2;
b--
}for(r=0;
r<b;
r++){var o={},n={};
o[s]=(u=="pos"?"-=":"+=")+v;
n[s]=(u=="pos"?"+=":"-=")+v;
w.animate(o,p/2,c.options.easing).animate(n,p/2,c.options.easing);
v=q=="hide"?v*2:v/2
}if(q=="hide"){r={opacity:0};
r[s]=(u=="pos"?"-=":"+=")+v;
w.animate(r,p/2,c.options.easing,function(){w.hide();
a.effects.restore(w,e);
a.effects.removeWrapper(w);
c.callback&&c.callback.apply(this,arguments)
})
}else{o={};
n={};
o[s]=(u=="pos"?"-=":"+=")+v;
n[s]=(u=="pos"?"+=":"-=")+v;
w.animate(o,p/2,c.options.easing).animate(n,p/2,c.options.easing,function(){a.effects.restore(w,e);
a.effects.removeWrapper(w);
c.callback&&c.callback.apply(this,arguments)
})
}w.queue("fx",function(){w.dequeue()
});
w.dequeue()
})
}
})(jQuery);
(function(a){a.effects.clip=function(b){return this.queue(function(){var e=a(this),j=["position","top","bottom","left","right","height","width"],m=a.effects.setMode(e,b.options.mode||"hide"),o=b.options.direction||"vertical";
a.effects.save(e,j);
e.show();
var n=a.effects.createWrapper(e).css({overflow:"hidden"});
n=e[0].tagName=="IMG"?n:e;
var l={size:o=="vertical"?"height":"width",position:o=="vertical"?"top":"left"};
o=o=="vertical"?n.height():n.width();
if(m=="show"){n.css(l.size,0);
n.css(l.position,o/2)
}var k={};
k[l.size]=m=="show"?o:0;
k[l.position]=m=="show"?0:o/2;
n.animate(k,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){m=="hide"&&e.hide();
a.effects.restore(e,j);
a.effects.removeWrapper(e);
b.callback&&b.callback.apply(e[0],arguments);
e.dequeue()
}})
})
}
})(jQuery);
(function(a){a.effects.drop=function(b){return this.queue(function(){var d=a(this),k=["position","top","bottom","left","right","opacity"],n=a.effects.setMode(d,b.options.mode||"hide"),c=b.options.direction||"left";
a.effects.save(d,k);
d.show();
a.effects.createWrapper(d);
var m=c=="up"||c=="down"?"top":"left";
c=c=="up"||c=="left"?"pos":"neg";
var l=b.options.distance||(m=="top"?d.outerHeight({margin:true})/2:d.outerWidth({margin:true})/2);
if(n=="show"){d.css("opacity",0).css(m,c=="pos"?-l:l)
}var j={opacity:n=="show"?1:0};
j[m]=(n=="show"?c=="pos"?"+=":"-=":c=="pos"?"-=":"+=")+l;
d.animate(j,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){n=="hide"&&d.hide();
a.effects.restore(d,k);
a.effects.removeWrapper(d);
b.callback&&b.callback.apply(this,arguments);
d.dequeue()
}})
})
}
})(jQuery);
(function(a){a.effects.explode=function(b){return this.queue(function(){var q=b.options.pieces?Math.round(Math.sqrt(b.options.pieces)):3,p=b.options.pieces?Math.round(Math.sqrt(b.options.pieces)):3;
b.options.mode=b.options.mode=="toggle"?a(this).is(":visible")?"hide":"show":b.options.mode;
var j=a(this).show().css("visibility","hidden"),m=j.offset();
m.top-=parseInt(j.css("marginTop"),10)||0;
m.left-=parseInt(j.css("marginLeft"),10)||0;
for(var l=j.outerWidth(true),k=j.outerHeight(true),o=0;
o<q;
o++){for(var n=0;
n<p;
n++){j.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-n*(l/p),top:-o*(k/q)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:l/p,height:k/q,left:m.left+n*(l/p)+(b.options.mode=="show"?(n-Math.floor(p/2))*(l/p):0),top:m.top+o*(k/q)+(b.options.mode=="show"?(o-Math.floor(q/2))*(k/q):0),opacity:b.options.mode=="show"?0:1}).animate({left:m.left+n*(l/p)+(b.options.mode=="show"?0:(n-Math.floor(p/2))*(l/p)),top:m.top+o*(k/q)+(b.options.mode=="show"?0:(o-Math.floor(q/2))*(k/q)),opacity:b.options.mode=="show"?1:0},b.duration||500)
}}setTimeout(function(){b.options.mode=="show"?j.css({visibility:"visible"}):j.css({visibility:"visible"}).hide();
b.callback&&b.callback.apply(j[0]);
j.dequeue();
a("div.ui-effects-explode").remove()
},b.duration||500)
})
}
})(jQuery);
(function(a){a.effects.fade=function(b){return this.queue(function(){var f=a(this),e=a.effects.setMode(f,b.options.mode||"hide");
f.animate({opacity:e},{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){b.callback&&b.callback.apply(this,arguments);
f.dequeue()
}})
})
}
})(jQuery);
(function(a){a.effects.fold=function(b){return this.queue(function(){var v=a(this),n=["position","top","bottom","left","right"],u=a.effects.setMode(v,b.options.mode||"hide"),q=b.options.size||15,p=!!b.options.horizFirst,m=b.duration?b.duration/2:a.fx.speeds._default/2;
a.effects.save(v,n);
v.show();
var s=a.effects.createWrapper(v).css({overflow:"hidden"}),r=u=="show"!=p,c=r?["width","height"]:["height","width"];
r=r?[s.width(),s.height()]:[s.height(),s.width()];
var o=/([0-9]+)%/.exec(q);
if(o){q=parseInt(o[1],10)/100*r[u=="hide"?0:1]
}if(u=="show"){s.css(p?{height:0,width:q}:{height:q,width:0})
}p={};
o={};
p[c[0]]=u=="show"?r[0]:q;
o[c[1]]=u=="show"?r[1]:0;
s.animate(p,m,b.options.easing).animate(o,m,b.options.easing,function(){u=="hide"&&v.hide();
a.effects.restore(v,n);
a.effects.removeWrapper(v);
b.callback&&b.callback.apply(v[0],arguments);
v.dequeue()
})
})
}
})(jQuery);
(function(a){a.effects.highlight=function(b){return this.queue(function(){var c=a(this),h=["backgroundImage","backgroundColor","opacity"],j=a.effects.setMode(c,b.options.mode||"show"),g={backgroundColor:c.css("backgroundColor")};
if(j=="hide"){g.opacity=0
}a.effects.save(c,h);
c.show().css({backgroundImage:"none",backgroundColor:b.options.color||"#ffff99"}).animate(g,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){j=="hide"&&c.hide();
a.effects.restore(c,h);
j=="show"&&!a.support.opacity&&this.style.removeAttribute("filter");
b.callback&&b.callback.apply(this,arguments);
c.dequeue()
}})
})
}
})(jQuery);
(function(a){a.effects.pulsate=function(b){return this.queue(function(){var d=a(this),e=a.effects.setMode(d,b.options.mode||"show");
times=(b.options.times||5)*2-1;
duration=b.duration?b.duration/2:a.fx.speeds._default/2;
isVisible=d.is(":visible");
animateTo=0;
if(!isVisible){d.css("opacity",0).show();
animateTo=1
}if(e=="hide"&&isVisible||e=="show"&&!isVisible){times--
}for(e=0;
e<times;
e++){d.animate({opacity:animateTo},duration,b.options.easing);
animateTo=(animateTo+1)%2
}d.animate({opacity:animateTo},duration,b.options.easing,function(){animateTo==0&&d.hide();
b.callback&&b.callback.apply(this,arguments)
});
d.queue("fx",function(){d.dequeue()
}).dequeue()
})
}
})(jQuery);
(function(a){a.effects.puff=function(c){return this.queue(function(){var b=a(this),k=a.effects.setMode(b,c.options.mode||"hide"),j=parseInt(c.options.percent,10)||150,f=j/100,d={height:b.height(),width:b.width()};
a.extend(c.options,{fade:true,mode:k,percent:k=="hide"?j:100,from:k=="hide"?d:{height:d.height*f,width:d.width*f}});
b.effect("scale",c.options,c.duration,c.callback);
b.dequeue()
})
};
a.effects.scale=function(c){return this.queue(function(){var b=a(this),m=a.extend(true,{},c.options),k=a.effects.setMode(b,c.options.mode||"effect"),j=parseInt(c.options.percent,10)||(parseInt(c.options.percent,10)==0?0:k=="hide"?0:100),d=c.options.direction||"both",l=c.options.origin;
if(k!="effect"){m.origin=l||["middle","center"];
m.restore=true
}l={height:b.height(),width:b.width()};
b.from=c.options.from||(k=="show"?{height:0,width:0}:l);
j={y:d!="horizontal"?j/100:1,x:d!="vertical"?j/100:1};
b.to={height:l.height*j.y,width:l.width*j.x};
if(c.options.fade){if(k=="show"){b.from.opacity=0;
b.to.opacity=1
}if(k=="hide"){b.from.opacity=1;
b.to.opacity=0
}}m.from=b.from;
m.to=b.to;
m.mode=k;
b.effect("size",m,c.duration,c.callback);
b.dequeue()
})
};
a.effects.size=function(c){return this.queue(function(){var B=a(this),z=["position","top","bottom","left","right","width","height","overflow","opacity"],x=["position","top","bottom","left","right","overflow","opacity"],w=["width","height","overflow"],v=["fontSize"],y=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],s=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],b=a.effects.setMode(B,c.options.mode||"effect"),o=c.options.restore||false,q=c.options.scale||"both",r=c.options.origin,u={height:B.height(),width:B.width()};
B.from=c.options.from||u;
B.to=c.options.to||u;
if(r){r=a.effects.getBaseline(r,u);
B.from.top=(u.height-B.from.height)*r.y;
B.from.left=(u.width-B.from.width)*r.x;
B.to.top=(u.height-B.to.height)*r.y;
B.to.left=(u.width-B.to.width)*r.x
}var A={from:{y:B.from.height/u.height,x:B.from.width/u.width},to:{y:B.to.height/u.height,x:B.to.width/u.width}};
if(q=="box"||q=="both"){if(A.from.y!=A.to.y){z=z.concat(y);
B.from=a.effects.setTransition(B,y,A.from.y,B.from);
B.to=a.effects.setTransition(B,y,A.to.y,B.to)
}if(A.from.x!=A.to.x){z=z.concat(s);
B.from=a.effects.setTransition(B,s,A.from.x,B.from);
B.to=a.effects.setTransition(B,s,A.to.x,B.to)
}}if(q=="content"||q=="both"){if(A.from.y!=A.to.y){z=z.concat(v);
B.from=a.effects.setTransition(B,v,A.from.y,B.from);
B.to=a.effects.setTransition(B,v,A.to.y,B.to)
}}a.effects.save(B,o?z:x);
B.show();
a.effects.createWrapper(B);
B.css("overflow","hidden").css(B.from);
if(q=="content"||q=="both"){y=y.concat(["marginTop","marginBottom"]).concat(v);
s=s.concat(["marginLeft","marginRight"]);
w=z.concat(y).concat(s);
B.find("*[width]").each(function(){child=a(this);
o&&a.effects.save(child,w);
var d={height:child.height(),width:child.width()};
child.from={height:d.height*A.from.y,width:d.width*A.from.x};
child.to={height:d.height*A.to.y,width:d.width*A.to.x};
if(A.from.y!=A.to.y){child.from=a.effects.setTransition(child,y,A.from.y,child.from);
child.to=a.effects.setTransition(child,y,A.to.y,child.to)
}if(A.from.x!=A.to.x){child.from=a.effects.setTransition(child,s,A.from.x,child.from);
child.to=a.effects.setTransition(child,s,A.to.x,child.to)
}child.css(child.from);
child.animate(child.to,c.duration,c.options.easing,function(){o&&a.effects.restore(child,w)
})
})
}B.animate(B.to,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){B.to.opacity===0&&B.css("opacity",B.from.opacity);
b=="hide"&&B.hide();
a.effects.restore(B,o?z:x);
a.effects.removeWrapper(B);
c.callback&&c.callback.apply(this,arguments);
B.dequeue()
}})
})
}
})(jQuery);
(function(a){a.effects.shake=function(b){return this.queue(function(){var v=a(this),n=["position","top","bottom","left","right"];
a.effects.setMode(v,b.options.mode||"effect");
var u=b.options.direction||"left",s=b.options.distance||20,d=b.options.times||3,r=b.duration||b.options.duration||140;
a.effects.save(v,n);
v.show();
a.effects.createWrapper(v);
var q=u=="up"||u=="down"?"top":"left",p=u=="up"||u=="left"?"pos":"neg";
u={};
var o={},m={};
u[q]=(p=="pos"?"-=":"+=")+s;
o[q]=(p=="pos"?"+=":"-=")+s*2;
m[q]=(p=="pos"?"-=":"+=")+s*2;
v.animate(u,r,b.options.easing);
for(s=1;
s<d;
s++){v.animate(o,r,b.options.easing).animate(m,r,b.options.easing)
}v.animate(o,r,b.options.easing).animate(u,r/2,b.options.easing,function(){a.effects.restore(v,n);
a.effects.removeWrapper(v);
b.callback&&b.callback.apply(this,arguments)
});
v.queue("fx",function(){v.dequeue()
});
v.dequeue()
})
}
})(jQuery);
(function(a){a.effects.slide=function(b){return this.queue(function(){var d=a(this),k=["position","top","bottom","left","right"],m=a.effects.setMode(d,b.options.mode||"show"),c=b.options.direction||"left";
a.effects.save(d,k);
d.show();
a.effects.createWrapper(d).css({overflow:"hidden"});
var l=c=="up"||c=="down"?"top":"left";
c=c=="up"||c=="left"?"pos":"neg";
var n=b.options.distance||(l=="top"?d.outerHeight({margin:true}):d.outerWidth({margin:true}));
if(m=="show"){d.css(l,c=="pos"?isNaN(n)?"-"+n:-n:n)
}var j={};
j[l]=(m=="show"?c=="pos"?"+=":"-=":c=="pos"?"-=":"+=")+n;
d.animate(j,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){m=="hide"&&d.hide();
a.effects.restore(d,k);
a.effects.removeWrapper(d);
b.callback&&b.callback.apply(this,arguments);
d.dequeue()
}})
})
}
})(jQuery);
(function(a){a.effects.transfer=function(b){return this.queue(function(){var e=a(this),j=a(b.options.to),h=j.offset();
j={top:h.top,left:h.left,height:j.innerHeight(),width:j.innerWidth()};
h=e.offset();
var g=a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(b.options.className).css({top:h.top,left:h.left,height:e.innerHeight(),width:e.innerWidth(),position:"absolute"}).animate(j,b.duration,b.options.easing,function(){g.remove();
b.callback&&b.callback.apply(e[0],arguments);
e.dequeue()
})
})
}
})(jQuery);
jQuery.each(["Height","Width"],function(b,a){var c=a.toLowerCase();
jQuery.fn["inner"+a]=function(){var d=this[0];
return d&&d.style?parseFloat(jQuery.css(d,c,"padding")):null
};
jQuery.fn["outer"+a]=function(e){var d=this[0];
return d&&d.style?parseFloat(jQuery.css(d,c,e?"margin":"border")):null
}
});
(function(n,p,v){var x=n([]),s=n.resize=n.extend(n.resize,{}),o,l="setTimeout",m="resize",u=m+"-special-event",w="delay",r="throttleWindow";
s[w]=250;
s[r]=true;
n.event.special[m]={setup:function(){if(!s[r]&&this[l]){return false
}var a=n(this);
x=x.add(a);
n.data(this,u,{w:a.width(),h:a.height()});
if(x.length===1){q()
}},teardown:function(){if(!s[r]&&this[l]){return false
}var a=n(this);
x=x.not(a);
a.removeData(u);
if(!x.length){clearTimeout(o)
}},add:function(b){if(!s[r]&&this[l]){return false
}var c;
function a(d,h,g){var f=n(this),e=n.data(this,u);
e||(e=n.data(this,u,{}));
e.w=h!==v?h:f.width();
e.h=g!==v?g:f.height();
c.apply(this,arguments)
}if(n.isFunction(b)){c=b;
return a
}else{c=b.handler;
b.handler=a
}}};
function q(){o=p[l](function(){x.each(function(){var d=n(this),a=d.width(),b=d.height(),c=n.data(this,u);
if(a!==c.w||b!==c.h){d.trigger(m,[c.w=a,c.h=b])
}});
q()
},s[w])
}})(jQuery,this);
/*!
	Colorbox 1.6.3
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
(function(P,m,ad){var R={html:false,photo:false,iframe:false,inline:false,transition:"elastic",speed:300,fadeOut:300,width:false,initialWidth:"600",innerWidth:false,maxWidth:false,height:false,initialHeight:"450",innerHeight:false,maxHeight:false,scalePhotos:true,scrolling:true,opacity:0.9,preloading:true,className:false,overlayClose:true,escKey:true,arrowKey:true,top:false,bottom:false,left:false,right:false,fixed:false,data:undefined,closeButton:true,fastIframe:true,open:false,reposition:true,loop:true,slideshow:false,slideshowAuto:true,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:false,retinaUrl:false,retinaSuffix:"@2x.$1",current:"{current} / {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:true,trapFocus:true,onOpen:false,onLoad:false,onComplete:false,onCleanup:false,onClosed:false,rel:function(){return this.rel
},href:function(){return P(this).attr("href")
},title:function(){return this.title
},createImg:function(){var aq=new Image();
var ar=P(this).data("cbox-img-attrs");
if(typeof ar==="object"){P.each(ar,function(at,au){aq[at]=au
})
}return aq
},createIframe:function(){var ar=m.createElement("iframe");
var aq=P(this).data("cbox-iframe-attrs");
if(typeof aq==="object"){P.each(aq,function(at,au){ar[at]=au
})
}if("frameBorder" in ar){ar.frameBorder=0
}if("allowTransparency" in ar){ar.allowTransparency="true"
}ar.name=(new Date()).getTime();
ar.allowFullscreen=true;
return ar
}},z="colorbox",Z="cbox",u=Z+"Element",ac=Z+"_open",e=Z+"_load",aa=Z+"_complete",y=Z+"_cleanup",aj=Z+"_closed",j=Z+"_purge",X,an,ao,d,N,r,b,W,c,ah,U,l,h,q,x,ae,w,Y,B,E,L=P("<a/>"),al,ap,o,g,a,O,p,G,af,T,C,S,ak="div",J=0,ag={},ai;
function M(aq,au,at){var ar=m.createElement(aq);
if(au){ar.id=Z+au
}if(at){ar.style.cssText=at
}return P(ar)
}function v(){return ad.innerHeight?ad.innerHeight:P(ad).height()
}function D(ar,aq){if(aq!==Object(aq)){aq={}
}this.cache={};
this.el=ar;
this.value=function(at){var au;
if(this.cache[at]===undefined){au=P(this.el).attr("data-cbox-"+at);
if(au!==undefined){this.cache[at]=au
}else{if(aq[at]!==undefined){this.cache[at]=aq[at]
}else{if(R[at]!==undefined){this.cache[at]=R[at]
}}}}return this.cache[at]
};
this.get=function(at){var au=this.value(at);
return P.isFunction(au)?au.call(this.el,this):au
}
}function I(ar){var aq=c.length,at=(O+ar)%aq;
return(at<0)?aq+at:at
}function V(aq,ar){return Math.round((/%/.test(aq)?((ar==="x"?ah.width():v())/100):1)*parseInt(aq,10))
}function F(ar,aq){return ar.get("photo")||ar.get("photoRegex").test(aq)
}function H(ar,aq){return ar.get("retinaUrl")&&ad.devicePixelRatio>1?aq.replace(ar.get("photoRegex"),ar.get("retinaSuffix")):aq
}function am(aq){if("contains" in an[0]&&!an[0].contains(aq.target)&&aq.target!==X[0]){aq.stopPropagation();
an.focus()
}}function n(aq){if(n.str!==aq){an.add(X).removeClass(n.str).addClass(aq);
n.str=aq
}}function Q(aq,ar){O=0;
if(aq&&aq!==false&&aq!=="nofollow"){c=P("."+u).filter(function(){var at=P.data(this,z);
var au=new D(this,at);
return(au.get("rel")===aq)
});
O=c.index(al.el);
if(aq==="lb_imageWheel"&&ar!=undefined&&P(ad).width()<800){O=ar
}if(O===-1){c=c.add(al.el);
O=c.length-1
}}else{c=P(al.el)
}}function K(aq){P(m).trigger(aq);
L.triggerHandler(aq)
}var A=(function(){var ar,av=Z+"Slideshow_",az="click."+Z,ax;
function at(){clearTimeout(ax)
}function ay(){if(al.get("loop")||c[O+1]){at();
ax=setTimeout(S.next,al.get("slideshowSpeed"))
}}function aq(){ae.html(al.get("slideshowStop")).unbind(az).one(az,aw);
L.bind(aa,ay).bind(e,at);
an.removeClass(av+"off").addClass(av+"on")
}function aw(){at();
L.unbind(aa,ay).unbind(e,at);
ae.html(al.get("slideshowStart")).unbind(az).one(az,function(){S.next();
aq()
});
an.removeClass(av+"on").addClass(av+"off")
}function au(){ar=false;
ae.hide();
at();
L.unbind(aa,ay).unbind(e,at);
an.removeClass(av+"off "+av+"on")
}return function(){if(ar){if(!al.get("slideshow")){L.unbind(y,au);
au()
}}else{if(al.get("slideshow")&&c[1]){ar=true;
L.one(y,au);
if(al.get("slideshowAuto")){aq()
}else{aw()
}ae.show()
}}}
}());
function f(au,at){var ar;
if(!T){if(P(au).hasClass("lb_imageWheel")&&P(ad).width()<800){P(au).data("colorbox",{photo:true,rel:"lb_imageWheel"})
}ar=P(au).data(z);
al=new D(au,ar);
Q(al.get("rel"),at);
if(!G){G=af=true;
n(al.get("className"));
an.css({visibility:"hidden",display:"block",opacity:""});
U=M(ak,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden");
d.css({width:"",height:""}).append(U);
ap=N.height()+W.height()+d.outerHeight(true)-d.height();
o=r.width()+b.width()+d.outerWidth(true)-d.width();
g=U.outerHeight(true);
a=U.outerWidth(true);
var ay=V(al.get("initialWidth"),"x");
var av=V(al.get("initialHeight"),"y");
var ax=al.get("maxWidth");
var aw=al.get("maxHeight");
al.w=Math.max((ax!==false?Math.min(ay,V(ax,"x")):ay)-a-o,0);
al.h=Math.max((aw!==false?Math.min(av,V(aw,"y")):av)-g-ap,0);
U.css({width:"",height:al.h});
S.position();
K(ac);
al.get("onOpen");
E.add(q).hide();
an.focus();
if(al.get("trapFocus")){if(m.addEventListener){m.addEventListener("focus",am,true);
L.one(aj,function(){m.removeEventListener("focus",am,true)
})
}}if(al.get("returnFocus")){L.one(aj,function(){P(al.el).focus()
})
}}var aq=parseFloat(al.get("opacity"));
X.css({opacity:aq===aq?aq:"",cursor:al.get("overlayClose")?"pointer":"",visibility:"visible"}).show();
if(al.get("closeButton")){B.html(al.get("close")).appendTo(d)
}else{B.appendTo("<div/>")
}ab()
}}function s(){if(!an){ai=false;
ah=P(ad);
an=M(ak).attr({id:z,"class":P.support.opacity===false?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide();
X=M(ak,"Overlay").hide();
h=P([M(ak,"LoadingOverlay")[0],M(ak,"LoadingGraphic")[0]]);
ao=M(ak,"Wrapper");
d=M(ak,"Content").append(q=M(ak,"Title"),x=M(ak,"Current"),Y=P('<button type="button"/>').attr({id:Z+"Previous"}),w=P('<button type="button"/>').attr({id:Z+"Next"}),ae=P('<button type="button"/>').attr({id:Z+"Slideshow"}),h);
B=P('<button type="button"/>').attr({id:Z+"Close"});
ao.append(M(ak).append(M(ak,"TopLeft"),N=M(ak,"TopCenter"),M(ak,"TopRight")),M(ak,false,"clear:left").append(r=M(ak,"MiddleLeft"),d,b=M(ak,"MiddleRight")),M(ak,false,"clear:left").append(M(ak,"BottomLeft"),W=M(ak,"BottomCenter"),M(ak,"BottomRight"))).find("div div").css({"float":"left"});
l=M(ak,false,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;");
E=w.add(Y).add(x).add(ae)
}if(m.body&&!an.parent().length){P(m.body).append(X,an.append(ao,l))
}}function k(){function aq(ar){if(!(ar.which>1||ar.shiftKey||ar.altKey||ar.metaKey||ar.ctrlKey)){ar.preventDefault();
f(this)
}}if(an){if(!ai){ai=true;
w.click(function(){S.next()
});
Y.click(function(){S.prev()
});
B.click(function(){S.close()
});
X.click(function(){if(al.get("overlayClose")){S.close()
}});
if((P(ad).width()<500&&ad.orientation==0)||((ad.orientation==90||ad.orientation==-90)&&P(ad).width()<800)){an.swipe({swipeLeft:function(at,av,aw,au,ar){S.next()
},swipeRight:function(at,av,aw,au,ar){S.prev()
}})
}P(m).bind("keydown."+Z,function(at){var ar=at.keyCode;
if(G&&al.get("escKey")&&ar===27){at.preventDefault();
S.close()
}if(G&&al.get("arrowKey")&&c[1]&&!at.altKey){if(ar===37){at.preventDefault();
Y.click()
}else{if(ar===39){at.preventDefault();
w.click()
}}}});
if(P.isFunction(P.fn.on)){P(m).on("click."+Z,"."+u,aq)
}else{P("."+u).live("click."+Z,aq)
}}return true
}return false
}if(P[z]){return
}P(s);
S=P.fn[z]=P[z]=function(aq,au){var ar;
var at=this;
aq=aq||{};
if(P.isFunction(at)){at=P("<a/>");
aq.open=true
}if(!at[0]){return at
}s();
if(k()){if(au){aq.onComplete=au
}at.each(function(){var av=P.data(this,z)||{};
P.data(this,z,P.extend(av,aq))
}).addClass(u);
ar=new D(at[0],aq);
if(ar.get("open")){f(at[0])
}}return at
};
S.position=function(at,av){var ay,aA=0,ar=0,aw=an.offset(),aq,au;
ah.unbind("resize."+Z);
an.css({top:-90000,left:-90000});
aq=ah.scrollTop();
au=ah.scrollLeft();
if(al.get("fixed")){aw.top-=aq;
aw.left-=au;
an.css({position:"fixed"})
}else{aA=aq;
ar=au;
an.css({position:"absolute"})
}if(al.get("right")!==false){ar+=Math.max(ah.width()-al.w-a-o-V(al.get("right"),"x"),0)
}else{if(al.get("left")!==false){ar+=V(al.get("left"),"x")
}else{ar+=Math.round(Math.max(ah.width()-al.w-a-o,0)/2)
}}if(al.get("bottom")!==false){aA+=Math.max(v()-al.h-g-ap-V(al.get("bottom"),"y"),0)
}else{if(al.get("top")!==false){aA+=V(al.get("top"),"y")
}else{aA+=Math.round(Math.max(v()-al.h-g-ap,0)/2)
}}an.css({top:aw.top,left:aw.left,visibility:"visible"});
ao[0].style.width=ao[0].style.height="9999px";
function az(){N[0].style.width=W[0].style.width=d[0].style.width=(parseInt(an[0].style.width,10)-o)+"px";
d[0].style.height=r[0].style.height=b[0].style.height=(parseInt(an[0].style.height,10)-ap)+"px"
}ay={width:al.w+a+o,height:al.h+g+ap,top:aA,left:ar};
if(at){var ax=0;
P.each(ay,function(aB){if(ay[aB]!==ag[aB]){ax=at;
return
}});
at=ax
}ag=ay;
if(!at){an.css(ay)
}an.dequeue().animate(ay,{duration:at||0,complete:function(){az();
af=false;
ao[0].style.width=(al.w+a+o)+"px";
ao[0].style.height=(al.h+g+ap)+"px";
if(al.get("reposition")){setTimeout(function(){ah.bind("resize."+Z,S.position)
},1);
if(P(ad).width()<500&&ad.orientation==0){if(P("#cboxLoadedContent>img").hasClass("cboxPhoto")){P("#colorbox").attr("style","height: auto !important");
P("#cboxWrapper").attr("style","height: 300px !important; top: 25% !important; left: 20px !important;");
P("#cboxContent").attr("style","height: auto !important; left: 20px !important;");
P("#cboxLoadedContent").attr("style","height: auto !important");
P("#cboxClose").removeClass("with-dam")
}else{P("#cboxWrapper").attr("style","top: 0 !important");
P("#cboxClose").removeClass("with-dam")
}if(m.getElementById("cboxError")){P("#colorbox").attr("style","width: 250px !important; height: 100px !important; top: 3% !important; left: 15% !important;");
P("#cboxWrapper").attr("style","width: 250px !important; height: 180px !important; top: 25% !important; left: 15% !important;");
P("#cboxContent").attr("style","width: auto !important; height: auto !important; left: 15% !important;");
P("#cboxLoadedContent").attr("style","width: auto !important; height: auto !important");
P("#cboxClose").removeClass("with-dam")
}else{if(P("#cboxLoadedContent>img").hasClass("cboxPhoto")){P("#cboxContent").attr("style","height: auto !important; left: 20px !important;");
P("#cboxClose").removeClass("with-dam")
}else{if(P("#cboxLoadedContent .ytVideoContainer").length>0||P("#cboxLoadedContent .s7videoContainer").length>0||P("#cboxLoadedContent .colorbox-age-gate").length>0||P("#cboxLoadedContent .page-section.compareGameTriphiesSearchModule").length>0||P("#cboxLoadedContent .page-section .searchpsnId").length>0||P("#cboxLoadedContent .CM159_noOverviewResults-compare-games").length>0){P("#cboxContent").attr("style","left: 20px !important;");
P("#cboxClose").removeClass("with-dam");
if(P("#cboxLoadedContent .s7videoContainer").length>0){P("#cboxClose").addClass("with-dam")
}}}}}if((ad.orientation==90||ad.orientation==-90)&&P(ad).width()<800){if(P("#cboxLoadedContent>img").hasClass("cboxPhoto")){P("#cboxWrapper").attr("style","top: 0 !important");
P("#cboxContent").attr("style","width: 80% !important; height: 70% !important; left: 10%");
P(".cboxPhoto").attr("style","width: 100% !important; height: 100% !important");
P("#cboxClose").removeClass("with-dam")
}if(m.getElementById("cboxError")){P("#colorbox").attr("style","width: 250px !important; height: 200px !important; top: 25% !important; left: 30% !important;");
P("#cboxWrapper").attr("style","width: 250px !important; height: 200px !important; top: 25% !important; left: 30% !important;");
P("#cboxContent").attr("style","width: auto !important; height: auto !important; left: 30% !important;");
P("#cboxLoadedContent").attr("style","width: auto !important; height: auto !important");
P("#cboxClose").removeClass("with-dam")
}else{if(P("#cboxLoadedContent>img").hasClass("cboxPhoto")){P("#cboxContent").attr("style","width: 80% !important; height: 70% !important; left: 10%");
P("#cboxClose").removeClass("with-dam")
}else{if(P("#cboxLoadedContent .ytVideoContainer").length>0||P("#cboxLoadedContent .s7videoContainer").length>0||P("#cboxLoadedContent .colorbox-age-gate").length>0||P("#cboxLoadedContent .page-section.compareGameTriphiesSearchModule").length>0||P("#cboxLoadedContent .page-section .searchpsnId").length>0||P("#cboxLoadedContent .CM159_noOverviewResults-compare-games").length>0){P("#cboxContent").attr("style","left: 20px !important;");
P("#cboxWrapper").attr("style","top: 0 !important");
P("#cboxClose").removeClass("with-dam");
if(P("#cboxLoadedContent .s7videoContainer").length>0){P("#cboxClose").addClass("with-dam")
}}}}}if((P(ad).width()<500&&ad.orientation==0)||((ad.orientation==90||ad.orientation==-90)&&P(ad).width()<800)){if(P("#cboxLoadedContent .ytVideoContainer").length>0||P("#cboxLoadedContent .s7videoContainer").length>0||P("#cboxLoadedContent .cboxPhoto").length>0||P("#cboxLoadedContent .colorbox-age-gate").length>0||P("#cboxError").length>0||P("#cboxLoadedContent .page-section.compareGameTriphiesSearchModule").length>0||P("#cboxLoadedContent .page-section .searchpsnId").length>0||P("#cboxLoadedContent .CM159_noOverviewResults-compare-games").length>0){if(P("#cboxOverlay").css("opacity")>0){P("html.html-page").css("overflow-y","hidden")
}P("#cboxClose").removeClass("with-dam");
if(P("#cboxLoadedContent .s7videoContainer").length>0){P("#cboxClose").addClass("with-dam")
}}}if((P(ad).width()>=700&&P(ad).width()<900&&ad.orientation==0)||(P(ad).width()<=1025&&P(ad).width()>900&&ad.orientation!=0)){if(P("#cboxLoadedContent .ytVideoContainer").length>0||P("#cboxLoadedContent .s7videoContainer").length>0||P("#cboxLoadedContent .cboxPhoto").length>0||P("#cboxLoadedContent .colorbox-age-gate").length>0||P("#cboxError").length>0||P("#cboxLoadedContent .page-section.compareGameTriphiesSearchModule").length>0||P("#cboxLoadedContent .page-section .searchpsnId").length>0||P("#cboxLoadedContent .CM159_noOverviewResults-compare-games").length>0){if(!P("#cboxLoadedContent>img").hasClass("cboxPhoto")&&P("#cboxError").length==0){P("#colorbox").addClass("ipadVideo");
P("#cboxWrapper").addClass("ipadVideo");
P("#cboxContent").addClass("ipadVideo");
P("#cboxLoadedContent").addClass("ipadVideo")
}else{P("#colorbox").removeClass("ipadVideo");
P("#cboxWrapper").removeClass("ipadVideo");
P("#cboxContent").removeClass("ipadVideo");
P("#cboxLoadedContent").removeClass("ipadVideo")
}}}if(P(ad).width()==768){if(P("#cboxLoadedContent .ytVideoContainer").length>0||P("#cboxLoadedContent .s7videoContainer").length>0){P("#colorbox").addClass("mobileDisabled");
P("#cboxWrapper").addClass("mobileDisabled");
P("#cboxCurrent").addClass("mobileDisabled");
P("#cboxContent").addClass("mobileDisabled");
P("#cboxLoadedContent").addClass("mobileDisabled")
}else{P("#colorbox").removeClass("mobileDisabled");
P("#cboxWrapper").removeClass("mobileDisabled");
P("#cboxCurrent").removeClass("mobileDisabled");
P("#cboxContent").removeClass("mobileDisabled");
P("#cboxLoadedContent").removeClass("mobileDisabled")
}}if(P(ad).width()<740){if(P("#cboxLoadedContent .ytVideoContainer").length>0||P("#cboxLoadedContent .cboxPhoto").length>0||P("#cboxLoadedContent .colorbox-age-gate").length>0||P("#cboxError").length>0||P("#cboxLoadedContent .page-section.compareGameTriphiesSearchModule").length>0||P("#cboxLoadedContent .s7videoContainer").length>0||P("#cboxLoadedContent .page-section .searchpsnId").length>0||P("#cboxLoadedContent .CM159_noOverviewResults-compare-games").length>0){P("#colorbox").addClass("mediaContent");
P("#cboxWrapper").addClass("mediaContent");
P("#cboxCurrent").addClass("mediaContent");
P("#cboxContent").addClass("mediaContent");
P("#cboxLoadedContent").addClass("mediaContent");
P("#cboxPrevious").addClass("mediaContent");
P("#cboxNext").addClass("mediaContent")
}else{P("#colorbox").removeClass("mediaContent");
P("#cboxWrapper").removeClass("mediaContent");
P("#cboxCurrent").removeClass("mediaContent");
P("#cboxContent").removeClass("mediaContent");
P("#cboxLoadedContent").removeClass("mediaContent");
P("#cboxPrevious").removeClass("mediaContent");
P("#cboxNext").removeClass("mediaContent")
}}}if(P.isFunction(av)){av()
}},step:az})
};
S.resize=function(ar){var aq;
if(G){ar=ar||{};
if(ar.width){al.w=V(ar.width,"x")-a-o
}if(ar.innerWidth){al.w=V(ar.innerWidth,"x")
}U.css({width:al.w});
if(ar.height){al.h=V(ar.height,"y")-g-ap
}if(ar.innerHeight){al.h=V(ar.innerHeight,"y")
}if(!ar.innerHeight&&!ar.height){aq=U.scrollTop();
U.css({height:"auto"});
al.h=U.height()
}U.css({height:al.h});
if(aq){U.scrollTop(aq)
}S.position(al.get("transition")==="none"?0:al.get("speed"))
}};
S.prep=function(ar){if(!G){return
}var av,at=al.get("transition")==="none"?0:al.get("speed");
U.remove();
U=M(ak,"LoadedContent").append(ar);
function aq(){al.w=al.w||U.width();
al.w=al.mw&&al.mw<al.w?al.mw:al.w;
return al.w
}function au(){al.h=al.h||U.height();
al.h=al.mh&&al.mh<al.h?al.mh:al.h;
return al.h
}U.hide().appendTo(l.show()).css({width:aq(),overflow:al.get("scrolling")?"auto":"hidden"}).css({height:au()}).prependTo(d);
if(/iPhone|iPod|iPad/.test(navigator.userAgent)){U.css({"-webkit-overflow-scrolling":"touch"})
}l.hide();
P(p).css({"float":"none"});
n(al.get("className"));
av=function(){var ay=c.length,ax,aw;
if(!G){return
}function az(){if(P.support.opacity===false){an[0].style.removeAttribute("filter")
}}aw=function(){clearTimeout(C);
h.hide();
K(aa);
al.get("onComplete")
};
q.html(al.get("title")).show();
U.show();
if(ay>1){an.mouseover(function(){Y.stop().animate({left:"60px",opacity:1},300);
w.stop().animate({right:"60px",opacity:1},300)
}).mouseout(function(){Y.stop().animate({left:"0",opacity:0},300);
w.stop().animate({right:"0",opacity:0},300)
});
if(typeof al.get("current")==="string"){x.html(al.get("current").replace("{current}",O+1).replace("{total}",ay)).show()
}w[(al.get("loop")||O<ay-1)?"show":"hide"]().html(al.get("next"));
Y[(al.get("loop")||O)?"show":"hide"]().html(al.get("previous"));
A();
if((P(ad).width()<500||((ad.orientation==90||ad.orientation==-90)&&P(ad).width()<800))&&ay>1){P("#cboxCurrent").attr("style","display: block !important;")
}if(al.get("preloading")){P.each([I(-1),I(1)],function(){var aA,aB=c[this],aC=new D(aB,P.data(aB,z)),aD=aC.get("href");
if(aD&&F(aC,aD)){aD=H(aC,aD);
aA=m.createElement("img");
aA.src=aD
}})
}}else{E.hide()
}if(al.get("iframe")){ax=al.get("createIframe");
if(!al.get("scrolling")){ax.scrolling="no"
}P(ax).attr({src:al.get("href"),"class":Z+"Iframe"}).one("load",aw).appendTo(U);
L.one(j,function(){ax.src="https://about:blank"
});
if(al.get("fastIframe")){P(ax).trigger("load")
}}else{aw()
}if(al.get("transition")==="fade"){an.fadeTo(at,1,az)
}else{az()
}};
if(al.get("transition")==="fade"){an.fadeTo(at,0,function(){S.position(0,av)
})
}else{S.position(at,av)
}};
function ab(){var au,av,at=S.prep,ar,aw=++J;
af=true;
p=false;
K(j);
K(e);
al.get("onLoad");
al.h=al.get("height")?V(al.get("height"),"y")-g-ap:al.get("innerHeight")&&V(al.get("innerHeight"),"y");
al.w=al.get("width")?V(al.get("width"),"x")-a-o:al.get("innerWidth")&&V(al.get("innerWidth"),"x");
al.mw=al.w;
al.mh=al.h;
if(al.get("maxWidth")){al.mw=V(al.get("maxWidth"),"x")-a-o;
al.mw=al.w&&al.w<al.mw?al.w:al.mw
}if(al.get("maxHeight")){al.mh=V(al.get("maxHeight"),"y")-g-ap;
al.mh=al.h&&al.h<al.mh?al.h:al.mh
}au=al.get("href");
C=setTimeout(function(){h.show()
},100);
if(al.get("inline")){var aq=P(au);
ar=P("<div>").hide().insertBefore(aq);
L.one(j,function(){ar.replaceWith(aq)
});
at(aq)
}else{if(al.get("iframe")){at(" ")
}else{if(al.get("html")){at(al.get("html"))
}else{if(F(al,au)){au=H(al,au);
p=al.get("createImg");
P(p).addClass(Z+"Photo").bind("error."+Z,function(){at(M(ak,"Error").html(al.get("imgError")))
}).one("load",function(){if(aw!==J){return
}setTimeout(function(){var ax;
if(al.get("retinaImage")&&ad.devicePixelRatio>1){p.height=p.height/ad.devicePixelRatio;
p.width=p.width/ad.devicePixelRatio
}if(al.get("scalePhotos")){av=function(){if(P(ad).width()<500&&al.mh){p.height-=p.height*ax
}else{p.height-=p.height*ax
}p.width-=p.width*ax
};
if(al.mw&&p.width>al.mw){ax=(p.width-al.mw)/p.width;
av()
}if(al.mh&&p.height>al.mh){ax=(p.height-al.mh)/p.height;
av()
}}if(al.h){p.style.marginTop=Math.max(al.mh-p.height,0)/2+"px"
}if(c[1]&&(al.get("loop")||c[O+1])){p.style.cursor="pointer";
P(p).bind("click."+Z,function(){if(P(ad).width()>800){S.next()
}})
}p.style.width=p.width+"px";
p.style.height=p.height+"px";
at(p)
},1)
});
p.src=au
}else{if(au){l.load(au,al.get("data"),function(ay,ax){if(aw===J){at(ax==="error"?M(ak,"Error").html(al.get("xhrError")):P(this).contents())
}})
}}}}}}S.next=function(){if(!af&&c[1]&&(al.get("loop")||c[O+1])){O=I(1);
f(c[O],O)
}};
S.prev=function(){if(!af&&c[1]&&(al.get("loop")||O)){O=I(-1);
f(c[O],O)
}};
S.close=function(){if(G&&!T){T=true;
G=false;
K(y);
al.get("onCleanup");
ah.unbind("."+Z);
X.fadeTo(al.get("fadeOut")||0,0);
an.stop().fadeTo(al.get("fadeOut")||0,0,function(){an.hide();
X.hide();
K(j);
U.remove();
setTimeout(function(){T=false;
K(aj);
al.get("onClosed")
},1)
});
if((P(ad).width()<500&&ad.orientation==0)||((ad.orientation==90||ad.orientation==-90)&&P(ad).width()<800)){P("html.html-page").attr("style","overflow-y: auto !important")
}if(P(ad).width()==768){P("html.html-page").attr("style","overflow-y: auto !important")
}}};
S.remove=function(){if(!an){return
}an.stop();
P[z].close();
an.stop(false,true).remove();
X.remove();
T=false;
an=null;
P("."+u).removeData(z).removeClass(u);
P(m).unbind("click."+Z).unbind("keydown."+Z)
};
S.element=function(){return P(al.el)
};
S.settings=R
}(jQuery,document,window));
(function(b){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],b)
}else{b(jQuery)
}}(function(ac){var S="left",T="right",ad="up",G="down",af="in",E="out",V="none",L="auto",W="swipe",K="pinch",R="tap",Y="doubletap",ag="longtap",F="hold",M="horizontal",J="vertical",Z="all",O=10,ab="start",X="move",aa="end",Q="cancel",ah="ontouchstart" in window,I=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,ae=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,P="TouchSwipe";
var U={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe"};
ac.fn.swipe=function(a){var b=ac(this),c=b.data(P);
if(c&&typeof a==="string"){if(c[a]){return c[a].apply(this,Array.prototype.slice.call(arguments,1))
}else{ac.error("Method "+a+" does not exist on jQuery.swipe")
}}else{if(!c&&(typeof a==="object"||!a)){return H.apply(this,arguments)
}}return b
};
ac.fn.swipe.defaults=U;
ac.fn.swipe.phases={PHASE_START:ab,PHASE_MOVE:X,PHASE_END:aa,PHASE_CANCEL:Q};
ac.fn.swipe.directions={LEFT:S,RIGHT:T,UP:ad,DOWN:G,IN:af,OUT:E};
ac.fn.swipe.pageScroll={NONE:V,HORIZONTAL:M,VERTICAL:J,AUTO:L};
ac.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:Z};
function H(a){if(a&&(a.allowPageScroll===undefined&&(a.swipe!==undefined||a.swipeStatus!==undefined))){a.allowPageScroll=V
}if(a.click!==undefined&&a.tap===undefined){a.tap=a.click
}if(!a){a={}
}a=ac.extend({},ac.fn.swipe.defaults,a);
return this.each(function(){var b=ac(this);
var c=b.data(P);
if(!c){c=new N(this,a);
b.data(P,c)
}})
}function N(bV,aw){var w=(ah||ae||!aw.fallbackToMouseEvents),u=w?(ae?(I?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",y=w?(ae?(I?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",g=w?(ae?(I?"MSPointerUp":"pointerup"):"touchend"):"mouseup",j=w?null:"mouseleave",bM=(ae?(I?"MSPointerCancel":"pointercancel"):"touchcancel");
var bj=0,bA=null,bo=0,bY=0,bq=0,z=1,a0=0,bG=0,q=null;
var by=ac(bV);
var b="start";
var e=0;
var bz=null;
var h=0,bX=0,bU=0,bm=0,p=0;
var bt=null,bk=null;
try{by.bind(u,bC);
by.bind(bM,bQ)
}catch(bf){ac.error("events not supported "+u+","+bM+" on jQuery.swipe")
}this.enable=function(){by.bind(u,bC);
by.bind(bM,bQ);
return by
};
this.disable=function(){bF();
return by
};
this.destroy=function(){bF();
by.data(P,null);
return by
};
this.option=function(ai,aj){if(aw[ai]!==undefined){if(aj===undefined){return aw[ai]
}else{aw[ai]=aj
}}else{ac.error("Option "+ai+" does not exist on jQuery.swipe.options")
}return null
};
function bC(aj){if(bO()){return
}if(ac(aj.target).closest(aw.excludedElements,by).length>0){return
}var ai=aj.originalEvent?aj.originalEvent:aj;
var ak,al=ah?ai.touches[0]:ai;
b=ab;
if(ah){e=ai.touches.length
}else{aj.preventDefault()
}bj=0;
bA=null;
bG=null;
bo=0;
bY=0;
bq=0;
z=1;
a0=0;
bz=bg();
q=bp();
k();
if(!ah||(e===aw.fingers||aw.fingers===Z)||bs()){bh(0,al);
h=ay();
if(e==2){bh(1,ai.touches[1]);
bY=bq=ax(bz[0].start,bz[1].start)
}if(aw.swipeStatus||aw.pinchStatus){ak=o(ai,b)
}}else{ak=false
}if(ak===false){b=Q;
o(ai,b);
return ak
}else{if(aw.hold){bk=setTimeout(ac.proxy(function(){by.trigger("hold",[ai.target]);
if(aw.hold){ak=aw.hold.call(by,ai,ai.target)
}},this),aw.longTapThreshold)
}bb(true)
}return null
}function bW(al){var ai=al.originalEvent?al.originalEvent:al;
if(b===aa||b===Q||bd()){return
}var am,an=ah?ai.touches[0]:ai;
var ak=bI(an);
bX=ay();
if(ah){e=ai.touches.length
}if(aw.hold){clearTimeout(bk)
}b=X;
if(e==2){if(bY==0){bh(1,ai.touches[1]);
bY=bq=ax(bz[0].start,bz[1].start)
}else{bI(ai.touches[1]);
bq=ax(bz[0].end,bz[1].end);
bG=az(bz[0].end,bz[1].end)
}z=bS(bY,bq);
a0=Math.abs(bY-bq)
}if((e===aw.fingers||aw.fingers===Z)||!ah||bs()){bA=bE(ak.start,ak.end);
be(al,bA);
bj=bx(ak.start,ak.end);
bo=bD();
bH(bA,bj);
if(aw.swipeStatus||aw.pinchStatus){am=o(ai,b)
}if(!aw.triggerOnTouchEnd||aw.triggerOnTouchLeave){var ao=true;
if(aw.triggerOnTouchLeave){var aj=br(this);
ao=D(ak.end,aj)
}if(!aw.triggerOnTouchEnd&&ao){b=bN(X)
}else{if(aw.triggerOnTouchLeave&&!ao){b=bN(aa)
}}if(b==Q||b==aa){o(ai,b)
}}}else{b=Q;
o(ai,b)
}if(am===false){b=Q;
o(ai,b)
}}function r(aj){var ai=aj.originalEvent;
if(ah){if(ai.touches.length>0){C();
return true
}}if(bd()){e=bm
}bX=ay();
bo=bD();
if(n()||!bc()){b=Q;
o(ai,b)
}else{if(aw.triggerOnTouchEnd||(aw.triggerOnTouchEnd==false&&b===X)){aj.preventDefault();
b=aa;
o(ai,b)
}else{if(!aw.triggerOnTouchEnd&&bT()){b=aa;
bK(ai,b,R)
}else{if(b===X){b=Q;
o(ai,b)
}}}}bb(false);
return null
}function bQ(){e=0;
bX=0;
h=0;
bY=0;
bq=0;
z=1;
k();
bb(false)
}function s(aj){var ai=aj.originalEvent;
if(aw.triggerOnTouchLeave){b=bN(aa);
o(ai,b)
}}function bF(){by.unbind(u,bC);
by.unbind(bM,bQ);
by.unbind(y,bW);
by.unbind(g,r);
if(j){by.unbind(j,s)
}bb(false)
}function bN(ai){var aj=ai;
var ak=bP();
var al=bc();
var am=n();
if(!ak||am){aj=Q
}else{if(al&&ai==X&&(!aw.triggerOnTouchEnd||aw.triggerOnTouchLeave)){aj=aa
}else{if(!al&&ai==aa&&aw.triggerOnTouchLeave){aj=Q
}}}return aj
}function o(ai,ak){var aj=undefined;
if(v()||f()){aj=bK(ai,ak,W)
}else{if((m()||bs())&&aj!==false){aj=bK(ai,ak,K)
}}if(bJ()&&aj!==false){aj=bK(ai,ak,Y)
}else{if(ba()&&aj!==false){aj=bK(ai,ak,ag)
}else{if(bi()&&aj!==false){aj=bK(ai,ak,R)
}}}if(ak===Q){bQ(ai)
}if(ak===aa){if(ah){if(ai.touches.length==0){bQ(ai)
}}else{bQ(ai)
}}return aj
}function bK(ai,al,aj){var ak=undefined;
if(aj==W){by.trigger("swipeStatus",[al,bA||null,bj||0,bo||0,e,bz]);
if(aw.swipeStatus){ak=aw.swipeStatus.call(by,ai,al,bA||null,bj||0,bo||0,e,bz);
if(ak===false){return false
}}if(al==aa&&bu()){by.trigger("swipe",[bA,bj,bo,e,bz]);
if(aw.swipe){ak=aw.swipe.call(by,ai,bA,bj,bo,e,bz);
if(ak===false){return false
}}switch(bA){case S:by.trigger("swipeLeft",[bA,bj,bo,e,bz]);
if(aw.swipeLeft){ak=aw.swipeLeft.call(by,ai,bA,bj,bo,e,bz)
}break;
case T:by.trigger("swipeRight",[bA,bj,bo,e,bz]);
if(aw.swipeRight){ak=aw.swipeRight.call(by,ai,bA,bj,bo,e,bz)
}break;
case ad:by.trigger("swipeUp",[bA,bj,bo,e,bz]);
if(aw.swipeUp){ak=aw.swipeUp.call(by,ai,bA,bj,bo,e,bz)
}break;
case G:by.trigger("swipeDown",[bA,bj,bo,e,bz]);
if(aw.swipeDown){ak=aw.swipeDown.call(by,ai,bA,bj,bo,e,bz)
}break
}}}if(aj==K){by.trigger("pinchStatus",[al,bG||null,a0||0,bo||0,e,z,bz]);
if(aw.pinchStatus){ak=aw.pinchStatus.call(by,ai,al,bG||null,a0||0,bo||0,e,z,bz);
if(ak===false){return false
}}if(al==aa&&bR()){switch(bG){case af:by.trigger("pinchIn",[bG||null,a0||0,bo||0,e,z,bz]);
if(aw.pinchIn){ak=aw.pinchIn.call(by,ai,bG||null,a0||0,bo||0,e,z,bz)
}break;
case E:by.trigger("pinchOut",[bG||null,a0||0,bo||0,e,z,bz]);
if(aw.pinchOut){ak=aw.pinchOut.call(by,ai,bG||null,a0||0,bo||0,e,z,bz)
}break
}}}if(aj==R){if(al===Q||al===aa){clearTimeout(bt);
clearTimeout(bk);
if(c()&&!x()){p=ay();
bt=setTimeout(ac.proxy(function(){p=null;
by.trigger("tap",[ai.target]);
if(aw.tap){ak=aw.tap.call(by,ai,ai.target)
}},this),aw.doubleTapThreshold)
}else{p=null;
by.trigger("tap",[ai.target]);
if(aw.tap){ak=aw.tap.call(by,ai,ai.target)
}}}}else{if(aj==Y){if(al===Q||al===aa){clearTimeout(bt);
p=null;
by.trigger("doubletap",[ai.target]);
if(aw.doubleTap){ak=aw.doubleTap.call(by,ai,ai.target)
}}}else{if(aj==ag){if(al===Q||al===aa){clearTimeout(bt);
p=null;
by.trigger("longtap",[ai.target]);
if(aw.longTap){ak=aw.longTap.call(by,ai,ai.target)
}}}}}return ak
}function bc(){var ai=true;
if(aw.threshold!==null){ai=bj>=aw.threshold
}return ai
}function n(){var ai=false;
if(aw.cancelThreshold!==null&&bA!==null){ai=(bw(bA)-bj)>=aw.cancelThreshold
}return ai
}function bl(){if(aw.pinchThreshold!==null){return a0>=aw.pinchThreshold
}return true
}function bP(){var ai;
if(aw.maxTimeThreshold){if(bo>=aw.maxTimeThreshold){ai=false
}else{ai=true
}}else{ai=true
}return ai
}function be(ak,aj){if(aw.allowPageScroll===V||bs()){ak.preventDefault()
}else{var ai=aw.allowPageScroll===L;
switch(aj){case S:if((aw.swipeLeft&&ai)||(!ai&&aw.allowPageScroll!=M)){ak.preventDefault()
}break;
case T:if((aw.swipeRight&&ai)||(!ai&&aw.allowPageScroll!=M)){ak.preventDefault()
}break;
case ad:if((aw.swipeUp&&ai)||(!ai&&aw.allowPageScroll!=J)){ak.preventDefault()
}break;
case G:if((aw.swipeDown&&ai)||(!ai&&aw.allowPageScroll!=J)){ak.preventDefault()
}break
}}}function bR(){var aj=bB();
var ak=d();
var ai=bl();
return aj&&ak&&ai
}function bs(){return !!(aw.pinchStatus||aw.pinchIn||aw.pinchOut)
}function m(){return !!(bR()&&bs())
}function bu(){var ak=bP();
var ai=bc();
var al=bB();
var an=d();
var am=n();
var aj=!am&&an&&al&&ai&&ak;
return aj
}function f(){return !!(aw.swipe||aw.swipeStatus||aw.swipeLeft||aw.swipeRight||aw.swipeUp||aw.swipeDown)
}function v(){return !!(bu()&&f())
}function bB(){return((e===aw.fingers||aw.fingers===Z)||!ah)
}function d(){return bz[0].end.x!==0
}function bT(){return !!(aw.tap)
}function c(){return !!(aw.doubleTap)
}function bv(){return !!(aw.longTap)
}function l(){if(p==null){return false
}var ai=ay();
return(c()&&((ai-p)<=aw.doubleTapThreshold))
}function x(){return l()
}function A(){return((e===1||!ah)&&(isNaN(bj)||bj<aw.threshold))
}function a(){return((bo>aw.longTapThreshold)&&(bj<O))
}function bi(){return !!(A()&&bT())
}function bJ(){return !!(l()&&c())
}function ba(){return !!(a()&&bv())
}function C(){bU=ay();
bm=event.touches.length+1
}function k(){bU=0;
bm=0
}function bd(){var aj=false;
if(bU){var ai=ay()-bU;
if(ai<=aw.fingerReleaseThreshold){aj=true
}}return aj
}function bO(){return !!(by.data(P+"_intouch")===true)
}function bb(ai){if(ai===true){by.bind(y,bW);
by.bind(g,r);
if(j){by.bind(j,s)
}}else{by.unbind(y,bW,false);
by.unbind(g,r,false);
if(j){by.unbind(j,s,false)
}}by.data(P+"_intouch",ai===true)
}function bh(aj,ak){var ai=ak.identifier!==undefined?ak.identifier:0;
bz[aj].identifier=ai;
bz[aj].start.x=bz[aj].end.x=ak.pageX||ak.clientX;
bz[aj].start.y=bz[aj].end.y=ak.pageY||ak.clientY;
return bz[aj]
}function bI(ak){var ai=ak.identifier!==undefined?ak.identifier:0;
var aj=bn(ai);
aj.end.x=ak.pageX||ak.clientX;
aj.end.y=ak.pageY||ak.clientY;
return aj
}function bn(ai){for(var aj=0;
aj<bz.length;
aj++){if(bz[aj].identifier==ai){return bz[aj]
}}}function bg(){var aj=[];
for(var ai=0;
ai<=5;
ai++){aj.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})
}return aj
}function bH(aj,ai){ai=Math.max(ai,bw(aj));
q[aj].distance=ai
}function bw(ai){if(q[ai]){return q[ai].distance
}return undefined
}function bp(){var ai={};
ai[S]=B(S);
ai[T]=B(T);
ai[ad]=B(ad);
ai[G]=B(G);
return ai
}function B(ai){return{direction:ai,distance:0}
}function bD(){return bX-h
}function ax(ai,aj){var ak=Math.abs(ai.x-aj.x);
var al=Math.abs(ai.y-aj.y);
return Math.round(Math.sqrt(ak*ak+al*al))
}function bS(ak,aj){var ai=(aj/ak)*1;
return ai.toFixed(2)
}function az(){if(z<1){return E
}else{return af
}}function bx(ai,aj){return Math.round(Math.sqrt(Math.pow(aj.x-ai.x,2)+Math.pow(aj.y-ai.y,2)))
}function bL(ak,am){var an=ak.x-am.x;
var ai=am.y-ak.y;
var al=Math.atan2(ai,an);
var aj=Math.round(al*180/Math.PI);
if(aj<0){aj=360-Math.abs(aj)
}return aj
}function bE(aj,ak){var ai=bL(aj,ak);
if((ai<=45)&&(ai>=0)){return S
}else{if((ai<=360)&&(ai>=315)){return S
}else{if((ai>=135)&&(ai<=225)){return T
}else{if((ai>45)&&(ai<135)){return G
}else{return ad
}}}}}function ay(){var ai=new Date();
return ai.getTime()
}function br(ak){ak=ac(ak);
var ai=ak.offset();
var aj={left:ai.left,right:ai.left+ak.outerWidth(),top:ai.top,bottom:ai.top+ak.outerHeight()};
return aj
}function D(aj,ai){return(aj.x>ai.left&&aj.x<ai.right&&aj.y>ai.top&&aj.y<ai.bottom)
}}}));
(function(a){a.fn.touchwipe=function(c){var b={min_move_x:20,min_move_y:20,wipeLeft:function(){},wipeRight:function(){},wipeUp:function(){},wipeDown:function(){},preventDefaultEvents:true};
if(c){a.extend(b,c)
}this.each(function(){var e;
var d;
var j=false;
function h(){this.removeEventListener("touchmove",f);
e=null;
j=false
}function f(n){if(b.preventDefaultEvents){n.preventDefault()
}if(j){var k=n.touches[0].pageX;
var o=n.touches[0].pageY;
var m=e-k;
var l=d-o;
if(Math.abs(m)>=b.min_move_x){h();
if(m>0){b.wipeLeft()
}else{b.wipeRight()
}}else{if(Math.abs(l)>=b.min_move_y){h();
if(l>0){b.wipeDown()
}else{b.wipeUp()
}}}}}function g(k){if(k.touches.length==1){e=k.touches[0].pageX;
d=k.touches[0].pageY;
j=true;
this.addEventListener("touchmove",f,false)
}}if("ontouchstart" in document.documentElement){this.addEventListener("touchstart",g,false)
}});
return this
}
})(jQuery);
(function(d,f){var e="selectbox",c=false,b=true;
function a(){this._state=[];
this._defaults={classHolder:"sbHolder",classHolderDisabled:"sbHolderDisabled",classSelector:"sbSelector",classOptions:"sbOptions",classGroup:"sbGroup",classSub:"sbSub",classDisabled:"sbDisabled",classToggleOpen:"sbToggleOpen",classToggle:"sbToggle",classFocus:"sbFocus",speed:200,effect:"slide",onChange:null,onOpen:null,onClose:null}
}d.extend(a.prototype,{_isOpenSelectbox:function(h){if(!h){return c
}var g=this._getInst(h);
return g.isOpen
},_isDisabledSelectbox:function(h){if(!h){return c
}var g=this._getInst(h);
return g.isDisabled
},_attachSelectbox:function(p,l){if(this._getInst(p)){return c
}var k=d(p),w=this,n=w._newInst(k),m,u,j,q,x=c,v=k.find("optgroup"),h=k.find("option"),o=h.length;
k.attr("sb",n.uid);
d.extend(n.settings,w._defaults,l);
w._state[n.uid]=c;
k.hide();
function g(){var y,z,s=this.attr("id").split("_")[1];
for(y in w._state){if(y!==s){if(w._state.hasOwnProperty(y)){z=d("select[sb='"+y+"']")[0];
if(z){w._closeSelectbox(z)
}}}}}m=d("<div>",{id:"sbHolder_"+n.uid,"class":n.settings.classHolder,tabindex:k.attr("tabindex")});
u=d("<a>",{id:"sbSelector_"+n.uid,href:"#","class":n.settings.classSelector,click:function(y){y.preventDefault();
g.apply(d(this),[]);
var s=d(this).attr("id").split("_")[1];
if(w._state[s]){w._closeSelectbox(p)
}else{w._openSelectbox(p)
}}});
j=d("<a>",{id:"sbToggle_"+n.uid,href:"#","class":n.settings.classToggle,click:function(y){y.preventDefault();
g.apply(d(this),[]);
var s=d(this).attr("id").split("_")[1];
if(w._state[s]){w._closeSelectbox(p)
}else{w._openSelectbox(p)
}}});
j.appendTo(m);
q=d("<ul>",{id:"sbOptions_"+n.uid,"class":n.settings.classOptions,css:{display:"none"}});
k.children().each(function(z){var A=d(this),s,y={};
if(A.is("option")){r(A)
}else{if(A.is("optgroup")){s=d("<li>");
d("<span>",{text:A.attr("label")}).addClass(n.settings.classGroup).appendTo(s);
s.appendTo(q);
if(A.is(":disabled")){y.disabled=true
}y.sub=true;
r(A.find("option"),y)
}}});
function r(){var y=arguments[1]&&arguments[1].sub?true:false,s=arguments[1]&&arguments[1].disabled?true:false;
arguments[0].each(function(A){var B=d(this),z=d("<li>"),C;
if(B.is(":selected")){u.text(B.text());
x=b
}if(A===o-1){z.addClass("last")
}if(!B.is(":disabled")&&!s){C=d("<a>",{href:"#"+B.val(),rel:B.val()}).text(B.text()).bind("click.sb",function(G){if(G&&G.preventDefault){G.preventDefault()
}var E=j,F=d(this),D=E.attr("id").split("_")[1];
w._changeSelectbox(p,F.attr("rel"),F.text());
w._closeSelectbox(p)
}).bind("mouseover.sb",function(){var D=d(this);
D.parent().siblings().find("a").removeClass(n.settings.classFocus);
D.addClass(n.settings.classFocus)
}).bind("mouseout.sb",function(){d(this).removeClass(n.settings.classFocus)
});
if(y){C.addClass(n.settings.classSub)
}if(B.is(":selected")){C.addClass(n.settings.classFocus)
}C.appendTo(z)
}else{C=d("<span>",{text:B.text()}).addClass(n.settings.classDisabled);
if(y){C.addClass(n.settings.classSub)
}C.appendTo(z)
}z.appendTo(q)
})
}if(!x){u.text(h.first().text())
}d.data(p,e,n);
m.data("uid",n.uid).bind("keydown.sb",function(C){var F=C.charCode?C.charCode:C.keyCode?C.keyCode:0,E=d(this),B=E.data("uid"),A=E.siblings("select[sb='"+B+"']").data(e),D=E.siblings(["select[sb='",B,"']"].join("")).get(0),s=E.find("ul").find("a."+A.settings.classFocus);
switch(F){case 37:case 38:if(s.length>0){var y;
d("a",E).removeClass(A.settings.classFocus);
y=s.parent().prevAll("li:has(a)").eq(0).find("a");
if(y.length>0){y.addClass(A.settings.classFocus).focus();
d("#sbSelector_"+B).text(y.text())
}}break;
case 39:case 40:var y;
d("a",E).removeClass(A.settings.classFocus);
if(s.length>0){y=s.parent().nextAll("li:has(a)").eq(0).find("a")
}else{y=E.find("ul").find("a").eq(0)
}if(y.length>0){y.addClass(A.settings.classFocus).focus();
d("#sbSelector_"+B).text(y.text())
}break;
case 13:if(s.length>0){w._changeSelectbox(D,s.attr("rel"),s.text())
}w._closeSelectbox(D);
break;
case 9:if(D){var A=w._getInst(D);
if(A){if(s.length>0){w._changeSelectbox(D,s.attr("rel"),s.text())
}w._closeSelectbox(D)
}}var z=parseInt(E.attr("tabindex"),10);
if(!C.shiftKey){z++
}else{z--
}d("*[tabindex='"+z+"']").focus();
break;
case 27:w._closeSelectbox(D);
break
}C.stopPropagation();
return false
}).delegate("a","mouseover",function(s){d(this).addClass(n.settings.classFocus)
}).delegate("a","mouseout",function(s){d(this).removeClass(n.settings.classFocus)
});
u.appendTo(m);
q.appendTo(m);
m.insertAfter(k);
d("html").on("mousedown",function(s){s.stopPropagation();
d("select").selectbox("close")
});
d([".",n.settings.classHolder,", .",n.settings.classSelector].join("")).mousedown(function(s){s.stopPropagation()
})
},_detachSelectbox:function(h){var g=this._getInst(h);
if(!g){return c
}d("#sbHolder_"+g.uid).remove();
d.data(h,e,null);
d(h).show()
},_changeSelectbox:function(k,j,l){var g,h=this._getInst(k);
if(h){g=this._get(h,"onChange");
d("#sbSelector_"+h.uid).text(l)
}j=j.replace(/\'/g,"\\'");
d(k).find("option[value='"+j+"']").attr("selected",b);
if(h&&g){g.apply((h.input?h.input[0]:null),[j,h])
}else{if(h&&h.input){h.input.trigger("change")
}}},_enableSelectbox:function(h){var g=this._getInst(h);
if(!g||!g.isDisabled){return c
}d("#sbHolder_"+g.uid).removeClass(g.settings.classHolderDisabled);
g.isDisabled=c;
d.data(h,e,g)
},_disableSelectbox:function(h){var g=this._getInst(h);
if(!g||g.isDisabled){return c
}d("#sbHolder_"+g.uid).addClass(g.settings.classHolderDisabled);
g.isDisabled=b;
d.data(h,e,g)
},_optionSelectbox:function(k,g,j){var h=this._getInst(k);
if(!h){return c
}h[g]=j;
d.data(k,e,h)
},_openSelectbox:function(n){var l=this._getInst(n);
if(!l||l.isOpen||l.isDisabled){return
}var h=d("#sbOptions_"+l.uid),m=parseInt(d(window).height(),10),k=d("#sbHolder_"+l.uid).offset(),g=d(window).scrollTop(),p=h.prev().height(),o=m-(k.top-g)-p/2,j=this._get(l,"onOpen");
h.css({top:p+"px",maxHeight:(o-p)+"px"});
l.settings.effect==="fade"?h.fadeIn(l.settings.speed):h.slideDown(l.settings.speed);
d("#sbToggle_"+l.uid).addClass(l.settings.classToggleOpen);
this._state[l.uid]=b;
l.isOpen=b;
if(j){j.apply((l.input?l.input[0]:null),[l])
}d.data(n,e,l)
},_closeSelectbox:function(j){var h=this._getInst(j);
if(!h||!h.isOpen){return
}var g=this._get(h,"onClose");
h.settings.effect==="fade"?d("#sbOptions_"+h.uid).fadeOut(h.settings.speed):d("#sbOptions_"+h.uid).slideUp(h.settings.speed);
d("#sbToggle_"+h.uid).removeClass(h.settings.classToggleOpen);
this._state[h.uid]=c;
h.isOpen=c;
if(g){g.apply((h.input?h.input[0]:null),[h])
}d.data(j,e,h)
},_newInst:function(g){var h=g[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");
return{id:h,input:g,uid:Math.floor(Math.random()*99999999),isOpen:c,isDisabled:c,settings:{}}
},_getInst:function(h){try{return d.data(h,e)
}catch(g){throw"Missing instance data for this selectbox"
}},_get:function(h,g){return h.settings[g]!==f?h.settings[g]:this._defaults[g]
}});
d.fn.selectbox=function(h){var g=Array.prototype.slice.call(arguments,1);
if(typeof h=="string"&&h=="isDisabled"){return d.selectbox["_"+h+"Selectbox"].apply(d.selectbox,[this[0]].concat(g))
}if(h=="option"&&arguments.length==2&&typeof arguments[1]=="string"){return d.selectbox["_"+h+"Selectbox"].apply(d.selectbox,[this[0]].concat(g))
}return this.each(function(){typeof h=="string"?d.selectbox["_"+h+"Selectbox"].apply(d.selectbox,[this].concat(g)):d.selectbox._attachSelectbox(this,h)
})
};
d.selectbox=new a();
d.selectbox.version="0.2"
})(jQuery);
eval(function(h,b,j,d,g,f){g=function(a){return(a<b?"":g(parseInt(a/b)))+((a=a%b)>35?String.fromCharCode(a+29):a.toString(36))
};
if(!"".replace(/^/,String)){while(j--){f[g(j)]=d[j]||g(j)
}d=[function(a){return f[a]
}];
g=function(){return"\\w+"
};
j=1
}while(j--){if(d[j]){h=h.replace(new RegExp("\\b"+g(j)+"\\b","g"),d[j])
}}return h
}("(D($){8($.1s.1v){H}$.1s.6i=$.1s.1v=D(u,w){8(1l.S==0){18(J,'6j 55 6k 1j \"'+1l.4o+'\".');H 1l}8(1l.S>1){H 1l.1W(D(){$(1l).1v(u,w)})}F y=1l,$12=1l[0],56=L;8(y.1q('57')){56=y.1P('3o','4p');y.T('3o',['4q',J])}F z={};z.59=D(o,a,b){o=3S($12,o);o.E=6l($12,o.E);o.1K=6m($12,o.1K);o.N=6n($12,o.N);o.14=5a($12,o.14);o.16=5a($12,o.16);o.1b=6o($12,o.1b);o.1r=6p($12,o.1r);o.1Q=6q($12,o.1Q);8(a){31=$.1L(J,{},$.1s.1v.5b,o)}7=$.1L(J,{},$.1s.1v.5b,o);7.d=6r(7);A.2l=(7.2l=='5c'||7.2l=='1m')?'16':'14';F c=y.13(),2m=5d($1n,7,'P');8(3p(7.25)){7.25='7Q'+G.3T}7.3U=5e(7,2m);7.E=6s(7.E,7,c,b);7[7.d['P']]=6t(7[7.d['P']],7,c);7[7.d['1e']]=6u(7[7.d['1e']],7,c);8(7.2H){8(!3V(7[7.d['P']])){7[7.d['P']]='2I%'}}8(3V(7[7.d['P']])){A.6v=J;A.4r=7[7.d['P']];7[7.d['P']]=4s(2m,A.4r);8(!7.E.M){7.E.U.1d=J}}8(7.2H){7.1R=L;7.1i=[0,0,0,0];7.1B=L;7.E.U.1d=L}O{8(!7.E.M){7=6w(7,2m)}8(!7[7.d['P']]){8(!7.E.U.1d&&Y(7.E[7.d['P']])&&7.E.1t=='*'){7[7.d['P']]=7.E.M*7.E[7.d['P']];7.1B=L}O{7[7.d['P']]='1d'}}8(1z(7.1B)){7.1B=(Y(7[7.d['P']]))?'5f':L}8(7.E.U.1d){7.E.M=32(c,7,0)}}8(7.E.1t!='*'&&!7.E.U.1d){7.E.U.4t=7.E.M;7.E.M=3W(c,7,0)}7.E.M=2x(7.E.M,7,7.E.U.2c,$12);7.E.U.20=7.E.M;8(7.2H){8(!7.E.U.34){7.E.U.34=7.E.M}8(!7.E.U.1X){7.E.U.1X=7.E.M}7=5g(7,c,2m)}O{7.1i=6x(7.1i);8(7.1B=='3q'){7.1B='1m'}O 8(7.1B=='5h'){7.1B='35'}1F(7.1B){R'5f':R'1m':R'35':8(7[7.d['P']]!='1d'){7=5i(7,c);7.1R=J}17;2J:7.1B=L;7.1R=(7.1i[0]==0&&7.1i[1]==0&&7.1i[2]==0&&7.1i[3]==0)?L:J;17}}8(!Y(7.1K.1M)){7.1K.1M=6y}8(1z(7.1K.E)){7.1K.E=(7.2H||7.E.U.1d||7.E.1t!='*')?'M':7.E.M}7.N=$.1L(J,{},7.1K,7.N);7.14=$.1L(J,{},7.1K,7.14);7.16=$.1L(J,{},7.1K,7.16);7.1b=$.1L(J,{},7.1K,7.1b);7.N=6z($12,7.N);7.14=5j($12,7.14);7.16=5j($12,7.16);7.1b=6A($12,7.1b);7.1r=6B($12,7.1r);7.1Q=6C($12,7.1Q);8(7.2n){7.2n=5k(7.2n)}8(7.N.5l){7.N.4u=7.N.5l;3X('N.5l','N.4u')}8(7.N.5m){7.N.4v=7.N.5m;3X('N.5m','N.4v')}8(7.N.5n){7.N.4w=7.N.5n;3X('N.5n','N.4w')}8(7.N.5o){7.N.2K=7.N.5o;3X('N.5o','N.2K')}};z.6D=D(){y.1q('57',J);F a=y.13(),3Y=6E(y,['6F','6G','3r','3q','35','5h','1m','3Z','P','1e','6H','1S','5p','6I']),5q='7R';1F(3Y.3r){R'6J':R'7S':5q=3Y.3r;17}8(G.3s=='36'){41($1n)}O{$1n.Z(3Y)}$1n.Z({'7T':'3t','3r':5q});41(y);y.1q('6K',3Y.3Z);y.Z({'6F':'1m','6G':'42','3r':'6J','3q':0,'35':'N','5h':'N','1m':0,'6H':0,'1S':0,'5p':0,'6I':0});4x(a,7);41(a);8(7.2H){5r(7,a)}};z.6L=D(){z.5s();y.11(I('6M',G),D(e,a){e.1g();8(!A.2d){8(7.N.W){7.N.W.3a(2y('4y',G))}}A.2d=J;8(7.N.1G){7.N.1G=L;y.T(I('3b',G),a)}H J});y.11(I('5t',G),D(e){e.1g();8(A.26){43(V)}H J});y.11(I('3b',G),D(e,a,b){e.1g();1u=3u(1u);8(a&&A.26){V.2d=J;F c=2o()-V.2L;V.1M-=c;8(V.4z){V.4z.1M-=c}8(V.4A){V.4A.1M-=c}43(V,L)}8(!A.27&&!A.26){8(b){1u.3v+=2o()-1u.2L}}8(!A.27){8(7.N.W){7.N.W.3a(2y('6N',G))}}A.27=J;8(7.N.4v){F d=7.N.2K-1u.3v,3c=2I-1H.2z(d*2I/7.N.2K);7.N.4v.1h($12,3c,d)}H J});y.11(I('1G',G),D(e,b,c,d){e.1g();1u=3u(1u);F v=[b,c,d],t=['2M','28','3d'],a=3e(v,t);b=a[0];c=a[1];d=a[2];8(b!='14'&&b!='16'){b=A.2l}8(!Y(c)){c=0}8(!1k(d)){d=L}8(d){A.2d=L;7.N.1G=J}8(!7.N.1G){e.2e();H 18(G,'3w 4y: 2p 3f.')}8(A.27){8(7.N.W){7.N.W.2N(2y('4y',G));7.N.W.2N(2y('6N',G))}}A.27=L;1u.2L=2o();F f=7.N.2K+c;44=f-1u.3v;3c=2I-1H.2z(44*2I/f);8(7.N.1f){1u.1f=7U(D(){F a=2o()-1u.2L+1u.3v,3c=1H.2z(a*2I/f);7.N.1f.4B.1h(7.N.1f.2q[0],3c)},7.N.1f.5u)}1u.N=7V(D(){8(7.N.1f){7.N.1f.4B.1h(7.N.1f.2q[0],2I)}8(7.N.4w){7.N.4w.1h($12,3c,44)}8(A.26){y.T(I('1G',G),b)}O{y.T(I(b,G),7.N)}},44);8(7.N.4u){7.N.4u.1h($12,3c,44)}H J});y.11(I('3g',G),D(e){e.1g();8(V.2d){V.2d=L;A.27=L;A.26=J;V.2L=2o();3x(V,G)}O{y.T(I('1G',G))}H J});y.11(I('14',G)+' '+I('16',G),D(e,b,f,g,h){e.1g();8(A.2d||y.2f(':3t')){e.2e();H 18(G,'3w 4y 7W 3t: 2p 3f.')}F i=(Y(7.E.4C))?7.E.4C:7.E.M+1;8(i>K.Q){e.2e();H 18(G,'2p 6O E ('+K.Q+' Q, '+i+' 6P): 2p 3f.')}F v=[b,f,g,h],t=['2A','28/2M','D','3d'],a=3e(v,t);b=a[0];f=a[1];g=a[2];h=a[3];F k=e.5v.19(G.3y.45.S);8(!1T(b)){b={}}8(1o(g)){b.3h=g}8(1k(h)){b.2O=h}b=$.1L(J,{},7[k],b);8(b.5w&&!b.5w.1h($12,k)){e.2e();H 18(G,'7X \"5w\" 7Y L.')}8(!Y(f)){8(7.E.1t!='*'){f='M'}O{F m=[f,b.E,7[k].E];1j(F a=0,l=m.S;a<l;a++){8(Y(m[a])||m[a]=='6Q'||m[a]=='M'){f=m[a];17}}}1F(f){R'6Q':e.2e();H y.1P(I(k+'7Z',G),[b,g]);17;R'M':8(!7.E.U.1d&&7.E.1t=='*'){f=7.E.M}17}}8(V.2d){y.T(I('3g',G));y.T(I('2O',G),[k,[b,f,g]]);e.2e();H 18(G,'3w 80 3f.')}8(b.1M>0){8(A.26){8(b.2O){8(b.2O=='2P'){2g=[]}8(b.2O!='X'||2g.S==0){y.T(I('2O',G),[k,[b,f,g]])}}e.2e();H 18(G,'3w 81 3f.')}}1u.3v=0;y.T(I('6R'+k,G),[b,f]);8(7.2n){F s=7.2n,c=[b,f];1j(F j=0,l=s.S;j<l;j++){F d=k;8(!s[j][2]){d=(d=='14')?'16':'14'}8(!s[j][1]){c[0]=s[j][0].1P('3o',['6S',d])}c[1]=f+s[j][3];s[j][0].T('3o',['6R'+d,c])}}H J});y.11(I('82',G),D(e,b,c){e.1g();F d=y.13();8(!7.1U){8(K.X==0){8(7.3z){y.T(I('16',G),K.Q-1)}H e.2e()}}1Y(d,7);8(!Y(c)){8(7.E.U.1d){c=4D(d,7,K.Q-1)}O 8(7.E.1t!='*'){F f=(Y(b.E))?b.E:5x(y,7);c=6T(d,7,K.Q-1,f)}O{c=7.E.M}c=4E(c,7,b.E,$12)}8(!7.1U){8(K.Q-c<K.X){c=K.Q-K.X}}7.E.U.20=7.E.M;8(7.E.U.1d){F g=2x(32(d,7,K.Q-c),7,7.E.U.2c,$12);8(7.E.M+c<=g&&c<K.Q){c++;g=2x(32(d,7,K.Q-c),7,7.E.U.2c,$12)}7.E.M=g}O 8(7.E.1t!='*'){F g=3W(d,7,K.Q-c);7.E.M=2x(g,7,7.E.U.2c,$12)}1Y(d,7,J);8(c==0){e.2e();H 18(G,'0 E 46 1K: 2p 3f.')}18(G,'6U '+c+' E 5y.');K.X+=c;2h(K.X>=K.Q){K.X-=K.Q}8(!7.1U){8(K.X==0&&b.4F){b.4F.1h($12,'14')}8(!7.3z){3A(7,K.X,G)}}y.13().19(K.Q-c,K.Q).83(y);8(K.Q<7.E.M+c){y.13().19(0,(7.E.M+c)-K.Q).4G(J).47(y)}F d=y.13(),3i=6V(d,7,c),2i=6W(d,7),1Z=d.1N(c-1),21=3i.2P(),2r=2i.2P();1Y(d,7);F h=0,2B=0;8(7.1B){F p=4H(2i,7);h=p[0];2B=p[1]}F i=(h<0)?7.1i[7.d[3]]:0;F j=L,2Q=$();8(7.E.M<c){2Q=d.19(7.E.U.20,c);8(b.1V=='6X'){F k=7.E[7.d['P']];j=2Q;1Z=2r;5z(j);7.E[7.d['P']]='1d'}}F l=L,3B=2R(d.19(0,c),7,'P'),2j=4I(4J(2i,7,J),7,!7.1R),3C=0,29={},4K={},2s={},2S={},4L={},2T={},5A={},2U=5B(b,7,c,3B);1F(b.1V){R'1I':R'1I-1w':3C=2R(d.19(0,7.E.M),7,'P');17}8(j){7.E[7.d['P']]=k}1Y(d,7,J);8(2B>=0){1Y(21,7,7.1i[7.d[1]])}8(h>=0){1Y(1Z,7,7.1i[7.d[3]])}8(7.1B){7.1i[7.d[1]]=2B;7.1i[7.d[3]]=h}2T[7.d['1m']]=-(3B-i);5A[7.d['1m']]=-(3C-i);4K[7.d['1m']]=2j[7.d['P']];F m=D(){},1O=D(){},1C=D(){},3D=D(){},2C=D(){},5C=D(){},1D=D(){},3E=D(){},1x=D(){},1y=D(){},1J=D(){};1F(b.1V){R'3j':R'1I':R'1I-1w':R'22':R'22-1w':l=y.4G(J).47($1n);17}1F(b.1V){R'3j':R'22':R'22-1w':l.13().19(0,c).2t();l.13().19(7.E.U.20).2t();17;R'1I':R'1I-1w':l.13().19(7.E.M).2t();l.Z(5A);17}y.Z(2T);V=48(2U,b.2u,G);29[7.d['1m']]=(7.1R)?7.1i[7.d[3]]:0;8(7[7.d['P']]=='1d'||7[7.d['1e']]=='1d'){m=D(){$1n.Z(2j)};1O=D(){V.1a.1c([$1n,2j])}}8(7.1R){8(2r.4M(1Z).S){2s[7.d['1S']]=1Z.1q('2a');8(h<0){1Z.Z(2s)}O{1D=D(){1Z.Z(2s)};3E=D(){V.1a.1c([1Z,2s])}}}1F(b.1V){R'1I':R'1I-1w':l.13().1N(c-1).Z(2s);17}8(2r.4M(21).S){2S[7.d['1S']]=21.1q('2a');1C=D(){21.Z(2S)};3D=D(){V.1a.1c([21,2S])}}8(2B>=0){4L[7.d['1S']]=2r.1q('2a')+7.1i[7.d[1]];2C=D(){2r.Z(4L)};5C=D(){V.1a.1c([2r,4L])}}}1J=D(){y.Z(29)};F n=7.E.M+c-K.Q;1y=D(){8(n>0){y.13().19(K.Q).2t();3i=$(y.13().19(K.Q-(7.E.M-n)).3F().6Y(y.13().19(0,n).3F()))}5D(j);8(7.1R){F a=y.13().1N(7.E.M+c-1);a.Z(7.d['1S'],a.1q('2a'))}};F o=5E(3i,2Q,2i,c,'14',2U,2j);1x=D(){5F(y,l,b);A.26=L;2b.3h=4a($12,b,'3h',o,2b);2g=5G(y,2g,G);8(!A.27){y.T(I('1G',G))}};A.26=J;1u=3u(1u);2b.3G=4a($12,b,'3G',o,2b);1F(b.1V){R'42':y.Z(29);m();1C();2C();1D();1J();1y();1x();17;R'1w':V.1a.1c([y,{'1E':0},D(){m();1C();2C();1D();1J();1y();V=48(2U,b.2u,G);V.1a.1c([y,{'1E':1},1x]);3x(V,G)}]);17;R'3j':y.Z({'1E':0});V.1a.1c([l,{'1E':0}]);V.1a.1c([y,{'1E':1},1x]);1O();1C();2C();1D();1J();1y();17;R'1I':V.1a.1c([l,29,D(){1C();2C();1D();1J();1y();1x()}]);1O();17;R'1I-1w':V.1a.1c([y,{'1E':0}]);V.1a.1c([l,29,D(){y.Z({'1E':1});1C();2C();1D();1J();1y();1x()}]);1O();17;R'22':V.1a.1c([l,4K,1x]);1O();1C();2C();1D();1J();1y();17;R'22-1w':y.Z({'1E':0});V.1a.1c([y,{'1E':1}]);V.1a.1c([l,4K,1x]);1O();1C();2C();1D();1J();1y();17;2J:V.1a.1c([y,29,D(){1y();1x()}]);1O();3D();5C();3E();17}3x(V,G);5H(7.25,y,G);y.T(I('3H',G),[L,2j]);H J});y.11(I('84',G),D(e,c,d){e.1g();F f=y.13();8(!7.1U){8(K.X==7.E.M){8(7.3z){y.T(I('14',G),K.Q-1)}H e.2e()}}1Y(f,7);8(!Y(d)){8(7.E.1t!='*'){F g=(Y(c.E))?c.E:5x(y,7);d=6Z(f,7,0,g)}O{d=7.E.M}d=4E(d,7,c.E,$12)}F h=(K.X==0)?K.Q:K.X;8(!7.1U){8(7.E.U.1d){F i=32(f,7,d),g=4D(f,7,h-1)}O{F i=7.E.M,g=7.E.M}8(d+i>h){d=h-g}}7.E.U.20=7.E.M;8(7.E.U.1d){F i=2x(5I(f,7,d,h),7,7.E.U.2c,$12);2h(7.E.M-d>=i&&d<K.Q){d++;i=2x(5I(f,7,d,h),7,7.E.U.2c,$12)}7.E.M=i}O 8(7.E.1t!='*'){F i=3W(f,7,d);7.E.M=2x(i,7,7.E.U.2c,$12)}1Y(f,7,J);8(d==0){e.2e();H 18(G,'0 E 46 1K: 2p 3f.')}18(G,'6U '+d+' E 70.');K.X-=d;2h(K.X<0){K.X+=K.Q}8(!7.1U){8(K.X==7.E.M&&c.4F){c.4F.1h($12,'16')}8(!7.3z){3A(7,K.X,G)}}8(K.Q<7.E.M+d){y.13().19(0,(7.E.M+d)-K.Q).4G(J).47(y)}F f=y.13(),3i=71(f,7),2i=72(f,7,d),1Z=f.1N(d-1),21=3i.2P(),2r=2i.2P();1Y(f,7);F j=0,2B=0;8(7.1B){F p=4H(2i,7);j=p[0];2B=p[1]}F k=L,2Q=$();8(7.E.U.20<d){2Q=f.19(7.E.U.20,d);8(c.1V=='6X'){F l=7.E[7.d['P']];k=2Q;1Z=21;5z(k);7.E[7.d['P']]='1d'}}F m=L,3B=2R(f.19(0,d),7,'P'),2j=4I(4J(2i,7,J),7,!7.1R),3C=0,29={},4N={},2s={},2S={},2T={},2U=5B(c,7,d,3B);1F(c.1V){R'22':R'22-1w':3C=2R(f.19(0,7.E.U.20),7,'P');17}8(k){7.E[7.d['P']]=l}8(7.1B){8(7.1i[7.d[1]]<0){7.1i[7.d[1]]=0}}1Y(f,7,J);1Y(21,7,7.1i[7.d[1]]);8(7.1B){7.1i[7.d[1]]=2B;7.1i[7.d[3]]=j}2T[7.d['1m']]=(7.1R)?7.1i[7.d[3]]:0;F n=D(){},1O=D(){},1C=D(){},3D=D(){},1D=D(){},3E=D(){},1x=D(){},1y=D(){},1J=D(){};1F(c.1V){R'3j':R'1I':R'1I-1w':R'22':R'22-1w':m=y.4G(J).47($1n);m.13().19(7.E.U.20).2t();17}1F(c.1V){R'3j':R'1I':R'1I-1w':y.Z('3Z',1);m.Z('3Z',0);17}V=48(2U,c.2u,G);29[7.d['1m']]=-3B;4N[7.d['1m']]=-3C;8(j<0){29[7.d['1m']]+=j}8(7[7.d['P']]=='1d'||7[7.d['1e']]=='1d'){n=D(){$1n.Z(2j)};1O=D(){V.1a.1c([$1n,2j])}}8(7.1R){F o=2r.1q('2a');8(2B>=0){o+=7.1i[7.d[1]]}2r.Z(7.d['1S'],o);8(1Z.4M(21).S){2S[7.d['1S']]=21.1q('2a')}1C=D(){21.Z(2S)};3D=D(){V.1a.1c([21,2S])};F q=1Z.1q('2a');8(j>0){q+=7.1i[7.d[3]]}2s[7.d['1S']]=q;1D=D(){1Z.Z(2s)};3E=D(){V.1a.1c([1Z,2s])}}1J=D(){y.Z(2T)};F r=7.E.M+d-K.Q;1y=D(){8(r>0){y.13().19(K.Q).2t()}F a=y.13().19(0,d).47(y).2P();8(r>0){2i=3I(f,7)}5D(k);8(7.1R){8(K.Q<7.E.M+d){F b=y.13().1N(7.E.M-1);b.Z(7.d['1S'],b.1q('2a')+7.1i[7.d[1]])}a.Z(7.d['1S'],a.1q('2a'))}};F s=5E(3i,2Q,2i,d,'16',2U,2j);1x=D(){y.Z('3Z',y.1q('6K'));5F(y,m,c);A.26=L;2b.3h=4a($12,c,'3h',s,2b);2g=5G(y,2g,G);8(!A.27){y.T(I('1G',G))}};A.26=J;1u=3u(1u);2b.3G=4a($12,c,'3G',s,2b);1F(c.1V){R'42':y.Z(29);n();1C();1D();1J();1y();1x();17;R'1w':V.1a.1c([y,{'1E':0},D(){n();1C();1D();1J();1y();V=48(2U,c.2u,G);V.1a.1c([y,{'1E':1},1x]);3x(V,G)}]);17;R'3j':y.Z({'1E':0});V.1a.1c([m,{'1E':0}]);V.1a.1c([y,{'1E':1},1x]);1O();1C();1D();1J();1y();17;R'1I':y.Z(7.d['1m'],$1n[7.d['P']]());V.1a.1c([y,2T,1x]);1O();1C();1D();1y();17;R'1I-1w':y.Z(7.d['1m'],$1n[7.d['P']]());V.1a.1c([m,{'1E':0}]);V.1a.1c([y,2T,1x]);1O();1C();1D();1y();17;R'22':V.1a.1c([m,4N,1x]);1O();1C();1D();1J();1y();17;R'22-1w':y.Z({'1E':0});V.1a.1c([y,{'1E':1}]);V.1a.1c([m,4N,1x]);1O();1C();1D();1J();1y();17;2J:V.1a.1c([y,29,D(){1J();1y();1x()}]);1O();3D();3E();17}3x(V,G);5H(7.25,y,G);y.T(I('3H',G),[L,2j]);H J});y.11(I('3k',G),D(e,b,c,d,f,g,h){e.1g();F v=[b,c,d,f,g,h],t=['2M/28/2A','28','3d','2A','2M','D'],a=3e(v,t);f=a[3];g=a[4];h=a[5];b=3J(a[0],a[1],a[2],K,y);8(b==0){H L}8(!1T(f)){f=L}8(g!='14'&&g!='16'){8(7.1U){g=(b<=K.Q/2)?'16':'14'}O{g=(K.X==0||K.X>b)?'16':'14'}}8(g=='14'){b=K.Q-b}y.T(I(g,G),[f,b,h]);H J});y.11(I('85',G),D(e,a,b){e.1g();F c=y.1P(I('4b',G));H y.1P(I('5J',G),[c-1,a,'14',b])});y.11(I('86',G),D(e,a,b){e.1g();F c=y.1P(I('4b',G));H y.1P(I('5J',G),[c+1,a,'16',b])});y.11(I('5J',G),D(e,a,b,c,d){e.1g();8(!Y(a)){a=y.1P(I('4b',G))}F f=7.1b.E||7.E.M,1X=1H.2z(K.Q/f)-1;8(a<0){a=1X}8(a>1X){a=0}H y.1P(I('3k',G),[a*f,0,J,b,c,d])});y.11(I('73',G),D(e,s){e.1g();8(s){s=3J(s,0,J,K,y)}O{s=0}s+=K.X;8(s!=0){8(K.Q>0){2h(s>K.Q){s-=K.Q}}y.87(y.13().19(s,K.Q))}H J});y.11(I('2n',G),D(e,s){e.1g();8(s){s=5k(s)}O 8(7.2n){s=7.2n}O{H 18(G,'6j 88 46 2n.')}F n=y.1P(I('4p',G)),x=J;1j(F j=0,l=s.S;j<l;j++){8(!s[j][0].1P(I('3k',G),[n,s[j][3],J])){x=L}}H x});y.11(I('2O',G),D(e,a,b){e.1g();8(1o(a)){a.1h($12,2g)}O 8(2V(a)){2g=a}O 8(!1z(a)){2g.1c([a,b])}H 2g});y.11(I('89',G),D(e,b,c,d,f){e.1g();F v=[b,c,d,f],t=['2M/2A','2M/28/2A','3d','28'],a=3e(v,t);b=a[0];c=a[1];d=a[2];f=a[3];8(1T(b)&&!2v(b)){b=$(b)}O 8(1p(b)){b=$(b)}8(!2v(b)||b.S==0){H 18(G,'2p a 5K 2A.')}8(1z(c)){c='4c'}4x(b,7);41(b);F g=c,4d='4d';8(c=='4c'){8(d){8(K.X==0){c=K.Q-1;4d='74'}O{c=K.X;K.X+=b.S}8(c<0){c=0}}O{c=K.Q-1;4d='74'}}O{c=3J(c,f,d,K,y)}F h=y.13().1N(c);8(h.S){h[4d](b)}O{18(G,'8a 8b-3r 4M 6k! 8c 8d 46 75 4c.');y.76(b)}8(g!='4c'&&!d){8(c<K.X){K.X+=b.S}}K.Q=y.13().S;8(K.X>=K.Q){K.X-=K.Q}y.T(I('4O',G));y.T(I('5L',G));H J});y.11(I('77',G),D(e,c,d,f){e.1g();F v=[c,d,f],t=['2M/28/2A','3d','28'],a=3e(v,t);c=a[0];d=a[1];f=a[2];F g=L;8(c 2W $&&c.S>1){h=$();c.1W(D(i,a){F b=y.T(I('77',G),[$(1l),d,f]);8(b){h=h.8e(b)}});H h}8(1z(c)||c=='4c'){h=y.13().2P()}O{c=3J(c,f,d,K,y);F h=y.13().1N(c);8(h.S){8(c<K.X){K.X-=h.S}}}8(h&&h.S){h.8f();K.Q=y.13().S;y.T(I('4O',G))}H h});y.11(I('3G',G)+' '+I('3h',G),D(e,a){e.1g();F b=e.5v.19(G.3y.45.S);8(2V(a)){2b[b]=a}8(1o(a)){2b[b].1c(a)}H 2b[b]});y.11(I('4p',G),D(e,a){e.1g();8(K.X==0){F b=0}O{F b=K.Q-K.X}8(1o(a)){a.1h($12,b)}H b});y.11(I('4b',G),D(e,a){e.1g();F b=7.1b.E||7.E.M,1X=1H.2z(K.Q/b-1),2k;8(K.X==0){2k=0}O 8(K.X<K.Q%b){2k=0}O 8(K.X==b&&!7.1U){2k=1X}O{2k=1H.78((K.Q-K.X)/b)}8(2k<0){2k=0}8(2k>1X){2k=1X}8(1o(a)){a.1h($12,2k)}H 2k});y.11(I('8g',G),D(e,a){e.1g();F b=3I(y.13(),7);8(1o(a)){a.1h($12,b)}H b});y.11(I('19',G),D(e,f,l,b){e.1g();8(K.Q==0){H L}F v=[f,l,b],t=['28','28','D'],a=3e(v,t);f=(Y(a[0]))?a[0]:0;l=(Y(a[1]))?a[1]:K.Q;b=a[2];f+=K.X;l+=K.X;8(E.Q>0){2h(f>K.Q){f-=K.Q}2h(l>K.Q){l-=K.Q}2h(f<0){f+=K.Q}2h(l<0){l+=K.Q}}F c=y.13(),$i;8(l>f){$i=c.19(f,l)}O{$i=$(c.19(f,K.Q).3F().6Y(c.19(0,l).3F()))}8(1o(b)){b.1h($12,$i)}H $i});y.11(I('27',G)+' '+I('2d',G)+' '+I('26',G),D(e,a){e.1g();F b=e.5v.19(G.3y.45.S),5M=A[b];8(1o(a)){a.1h($12,5M)}H 5M});y.11(I('6S',G),D(e,a,b,c){e.1g();F d=L;8(1o(a)){a.1h($12,7)}O 8(1T(a)){31=$.1L(J,{},31,a);8(b!==L)d=J;O 7=$.1L(J,{},7,a)}O 8(!1z(a)){8(1o(b)){F f=4P('7.'+a);8(1z(f)){f=''}b.1h($12,f)}O 8(!1z(b)){8(2X c!=='3d')c=J;4P('31.'+a+' = b');8(c!==L)d=J;O 4P('7.'+a+' = b')}O{H 4P('7.'+a)}}8(d){1Y(y.13(),7);z.59(31);z.5N();F g=4Q(y,7);y.T(I('3H',G),[J,g])}H 7});y.11(I('5L',G),D(e,a,b){e.1g();8(1z(a)){a=$('8h')}O 8(1p(a)){a=$(a)}8(!2v(a)||a.S==0){H 18(G,'2p a 5K 2A.')}8(!1p(b)){b='a.6i'}a.8i(b).1W(D(){F h=1l.79||'';8(h.S>0&&y.13().7a($(h))!=-1){$(1l).23('5O').5O(D(e){e.2D();y.T(I('3k',G),h)})}});H J});y.11(I('3H',G),D(e,b,c){e.1g();8(!7.1b.1A){H}F d=7.1b.E||7.E.M,4R=1H.2z(K.Q/d);8(b){8(7.1b.3K){7.1b.1A.13().2t();7.1b.1A.1W(D(){1j(F a=0;a<4R;a++){F i=y.13().1N(3J(a*d,0,J,K,y));$(1l).76(7.1b.3K.1h(i[0],a+1))}})}7.1b.1A.1W(D(){$(1l).13().23(7.1b.3L).1W(D(a){$(1l).11(7.1b.3L,D(e){e.2D();y.T(I('3k',G),[a*d,-7.1b.4S,J,7.1b])})})})}F f=y.1P(I('4b',G))+7.1b.4S;8(f>=4R){f=0}8(f<0){f=4R-1}7.1b.1A.1W(D(){$(1l).13().2N(2y('7b',G)).1N(f).3a(2y('7b',G))});H J});y.11(I('4O',G),D(e){F a=7.E.M,2E=y.13(),2m=5d($1n,7,'P');K.Q=2E.S;8(A.4r){7.3U=2m;7[7.d['P']]=4s(2m,A.4r)}O{7.3U=5e(7,2m)}8(7.2H){7.E.P=7.E.3M.P;7.E.1e=7.E.3M.1e;7=5g(7,2E,2m);a=7.E.M;5r(7,2E)}O 8(7.E.U.1d){a=32(2E,7,0)}O 8(7.E.1t!='*'){a=3W(2E,7,0)}8(!7.1U&&K.X!=0&&a>K.X){8(7.E.U.1d){F b=4D(2E,7,K.X)-K.X}O 8(7.E.1t!='*'){F b=7c(2E,7,K.X)-K.X}O{F b=7.E.M-K.X}18(G,'8j 8k-1U: 8l '+b+' E 5y.');y.T(I('14',G),b)}7.E.M=2x(a,7,7.E.U.2c,$12);7.E.U.20=7.E.M;7=5i(7,2E);F c=4Q(y,7);y.T(I('3H',G),[J,c]);4T(7,K.Q,G);3A(7,K.X,G);H c});y.11(I('4q',G),D(e,a){e.1g();1u=3u(1u);y.1q('57',L);y.T(I('5t',G));8(a){y.T(I('73',G))}4U(y.13());4U(y);z.5s();z.5P();8(G.3s=='36'){4U($1n)}O{$1n.8m(y)}H J});y.11(I('18',G),D(e){18(G,'3w P: '+7.P);18(G,'3w 1e: '+7.1e);18(G,'7d 8n: '+7.E.P);18(G,'7d 8o: '+7.E.1e);18(G,'4e 4f E M: '+7.E.M);8(7.N.1G){18(G,'4e 4f E 5Q 8p: '+7.N.E)}8(7.14.W){18(G,'4e 4f E 5Q 5y: '+7.14.E)}8(7.16.W){18(G,'4e 4f E 5Q 70: '+7.16.E)}H G.18});y.11('3o',D(e,n,o){e.1g();H y.1P(I(n,G),o)})};z.5s=D(){y.23(I('',G));y.23(I('',G,L));y.23('3o')};z.5N=D(){z.5P();4T(7,K.Q,G);3A(7,K.X,G);8(7.N.2F){F b=3N(7.N.2F);$1n.11(I('4V',G,L),D(){y.T(I('3b',G),b)}).11(I('4W',G,L),D(){y.T(I('3g',G))})}8(7.N.W){7.N.W.11(I(7.N.3L,G,L),D(e){e.2D();F a=L,b=3O;8(A.27){a='1G'}O 8(7.N.4X){a='3b';b=3N(7.N.4X)}8(a){y.T(I(a,G),b)}})}8(7.14.W){7.14.W.11(I(7.14.3L,G,L),D(e){e.2D();y.T(I('14',G))});8(7.14.2F){F b=3N(7.14.2F);7.14.W.11(I('4V',G,L),D(){y.T(I('3b',G),b)}).11(I('4W',G,L),D(){y.T(I('3g',G))})}}8(7.16.W){7.16.W.11(I(7.16.3L,G,L),D(e){e.2D();y.T(I('16',G))});8(7.16.2F){F b=3N(7.16.2F);7.16.W.11(I('4V',G,L),D(){y.T(I('3b',G),b)}).11(I('4W',G,L),D(){y.T(I('3g',G))})}}8(7.1b.1A){8(7.1b.2F){F b=3N(7.1b.2F);7.1b.1A.11(I('4V',G,L),D(){y.T(I('3b',G),b)}).11(I('4W',G,L),D(){y.T(I('3g',G))})}}8(7.14.2Y||7.16.2Y){$(4g).11(I('7e',G,L,J,J),D(e){F k=e.7f;8(k==7.16.2Y){e.2D();y.T(I('16',G))}8(k==7.14.2Y){e.2D();y.T(I('14',G))}})}8(7.1b.4Y){$(4g).11(I('7e',G,L,J,J),D(e){F k=e.7f;8(k>=49&&k<58){k=(k-49)*7.E.M;8(k<=K.Q){e.2D();y.T(I('3k',G),[k,0,J,7.1b])}}})}8($.1s.1r){F c='8q'8r 3l;8((c&&7.1r.4h)||(!c&&7.1r.5R)){F d=$.1L(J,{},7.14,7.1r),7g=$.1L(J,{},7.16,7.1r),5S=D(){y.T(I('14',G),[d])},5T=D(){y.T(I('16',G),[7g])};1F(7.2l){R'5c':R'7h':7.1r.2G.8s=5T;7.1r.2G.8t=5S;17;2J:7.1r.2G.8u=5T;7.1r.2G.8v=5S}8(A.1r){y.1r('4q')}$1n.1r(7.1r.2G);$1n.Z('7i','8w');A.1r=J}}8($.1s.1Q){8(7.1Q){F f=$.1L(J,{},7.14,7.1Q),7j=$.1L(J,{},7.16,7.1Q);8(A.1Q){$1n.23(I('1Q',G,L))}$1n.11(I('1Q',G,L),D(e,a){e.2D();8(a>0){y.T(I('14',G),[f])}O{y.T(I('16',G),[7j])}});A.1Q=J}}8(7.N.1G){y.T(I('1G',G),7.N.5U)}8(A.6v){F g=D(e){y.T(I('5t',G));8(7.N.5V&&!A.27){y.T(I('1G',G))}1Y(y.13(),7);y.T(I('4O',G))};F h=$(3l),4i=3O;8($.5W&&G.5X=='5W'){4i=$.5W(8x,g)}O 8($.4Z&&G.5X=='4Z'){4i=$.4Z(8y,g)}O{F i=0,5Y=0;4i=D(){F a=h.P(),5Z=h.1e();8(a!=i||5Z!=5Y){g();i=a;5Y=5Z}}}h.11(I('8z',G,L,J,J),4i)}};z.5P=D(){F a=I('',G),3P=I('',G,L);61=I('',G,L,J,J);$(4g).23(61);$(3l).23(61);$1n.23(3P);8(7.N.W){7.N.W.23(3P)}8(7.14.W){7.14.W.23(3P)}8(7.16.W){7.16.W.23(3P)}8(7.1b.1A){7.1b.1A.23(3P);8(7.1b.3K){7.1b.1A.13().2t()}}8(A.1r){y.1r('4q');$1n.Z('7i','2J');A.1r=L}8(A.1Q){A.1Q=L}4T(7,'4j',G);3A(7,'2N',G)};8(1k(w)){w={'18':w}}F A={'2l':'16','27':J,'26':L,'2d':L,'1Q':L,'1r':L},K={'Q':y.13().S,'X':0},1u={'N':3O,'1f':3O,'2L':2o(),'3v':0},V={'2d':L,'1M':0,'2L':0,'2u':'','1a':[]},2b={'3G':[],'3h':[]},2g=[],G=$.1L(J,{},$.1s.1v.7k,w),7={},31=$.1L(J,{},u),$1n=(G.3s=='36')?y.36():y.8A('<'+G.3s.55+' 8B=\"'+G.3s.7l+'\" />').36();G.4o=y.4o;G.3T=$.1s.1v.3T++;G.2Z=(G.2Z&&$.1s.2Z)?'2Z':'8C';z.59(31,J,56);z.6D();z.6L();z.5N();8(2V(7.E.3m)){F B=7.E.3m}O{F B=[];8(7.E.3m!=0){B.1c(7.E.3m)}}8(7.25){B.8D(4k(7m(7.25),10))}8(B.S>0){1j(F a=0,l=B.S;a<l;a++){F s=B[a];8(s==0){62}8(s===J){s=3l.8E.79;8(s.S<1){62}}O 8(s==='7n'){s=1H.4l(1H.7n()*K.Q)}8(y.1P(I('3k',G),[s,0,J,{1V:'42'}])){17}}}F C=4Q(y,7),7o=3I(y.13(),7);8(7.7p){7.7p.1h($12,{'P':C.P,'1e':C.1e,'E':7o})}y.T(I('3H',G),[J,C]);y.T(I('5L',G));8(G.18){y.T(I('18',G))}H y};$.1s.1v.3T=1;$.1s.1v.5b={'2n':L,'3z':J,'1U':J,'2H':L,'2l':'1m','E':{'3m':0},'1K':{'2u':'7q','1M':6y,'2F':L,'3L':'5O','2O':L}};$.1s.1v.7k={'18':L,'2Z':L,'5X':'4Z','3y':{'45':'','7r':'8F'},'3s':{'55':'8G','7l':'8H'},'63':{}};$.1s.1v.7s=D(a){H'<a 8I=\"#\"><7t>'+a+'</7t></a>'};$.1s.1v.7u=D(a){$(1l).Z('P',a+'%')};$.1s.1v.25={3F:D(n){n+='=';F b=4g.25.3Q(';');1j(F a=0,l=b.S;a<l;a++){F c=b[a];2h(c.8J(0)==' '){c=c.19(1)}8(c.3R(n)==0){H c.19(n.S)}}H 0},64:D(n,v,d){F e=\"\";8(d){F a=7v 7w();a.8K(a.2o()+(d*24*60*60*8L));e=\"; 8M=\"+a.8N()}4g.25=n+'='+v+e+'; 8O=/'},2t:D(n){$.1s.1v.25.64(n,\"\",-1)}};D 48(d,e,c){8(c.2Z=='2Z'){8(e=='7q'){e='8P'}}H{1a:[],1M:d,8Q:d,2u:e,2L:2o()}}D 3x(s,c){1j(F a=0,l=s.1a.S;a<l;a++){F b=s.1a[a];8(!b){62}b[0][c.2Z](b[1],s.1M,s.2u,b[2])}}D 43(s,c){8(!1k(c)){c=J}8(1T(s.4z)){43(s.4z,c)}1j(F a=0,l=s.1a.S;a<l;a++){F b=s.1a[a];b[0].6M(J);8(c){b[0].Z(b[1]);8(1o(b[2])){b[2]()}}}8(1T(s.4A)){43(s.4A,c)}}D 5F(a,b,o){8(b){b.2t()}1F(o.1V){R'1w':R'3j':R'1I-1w':R'22-1w':a.Z('1t','');a.Z('1E',1);17}}D 4a(d,o,b,a,c){8(o[b]){o[b].1h(d,a)}8(c[b].S){1j(F i=0,l=c[b].S;i<l;i++){c[b][i].1h(d,a)}}H[]}D 5G(a,q,c){8(q.S){a.T(I(q[0][0],c),q[0][1]);q.8R()}H q}D 5z(b){b.1W(D(){F a=$(1l);a.1q('7x',a.2f(':3t')).4j()})}D 5D(b){8(b){b.1W(D(){F a=$(1l);8(!a.1q('7x')){a.4m()}})}}D 3u(t){8(t.N){8S(t.N)}8(t.1f){8T(t.1f)}H t}D 5E(a,b,c,d,e,f,g){H{'P':g.P,'1e':g.1e,'E':{'20':a,'8U':b,'M':c},'1K':{'E':d,'2l':e,'1M':f}}}D 5B(a,o,b,c){F d=a.1M;8(a.1V=='42'){H 0}8(d=='N'){d=o.1K.1M/o.1K.E*b}O 8(d<10){d=c/d}8(d<1){H 0}8(a.1V=='1w'){d=d/2}H 1H.78(d)}D 4T(o,t,c){F a=(Y(o.E.4C))?o.E.4C:o.E.M+1;8(t=='4m'||t=='4j'){F f=t}O 8(a>t){18(c,'2p 6O E ('+t+' Q, '+a+' 6P): 8V 8W.');F f='4j'}O{F f='4m'}F s=(f=='4m')?'2N':'3a',h=2y('3t',c);8(o.N.W){o.N.W[f]()[s](h)}8(o.14.W){o.14.W[f]()[s](h)}8(o.16.W){o.16.W[f]()[s](h)}8(o.1b.1A){o.1b.1A[f]()[s](h)}}D 3A(o,f,c){8(o.1U||o.3z)H;F a=(f=='2N'||f=='3a')?f:L,51=2y('8X',c);8(o.N.W&&a){o.N.W[a](51)}8(o.14.W){F b=a||(f==0)?'3a':'2N';o.14.W[b](51)}8(o.16.W){F b=a||(f==o.E.M)?'3a':'2N';o.16.W[b](51)}}D 3S(a,b){8(1o(b)){b=b.1h(a)}O 8(1z(b)){b={}}H b}D 6l(a,b){b=3S(a,b);8(Y(b)){b={'M':b}}O 8(b=='1d'){b={'M':b,'P':b,'1e':b}}O 8(!1T(b)){b={}}H b}D 6m(a,b){b=3S(a,b);8(Y(b)){8(b<=50){b={'E':b}}O{b={'1M':b}}}O 8(1p(b)){b={'2u':b}}O 8(!1T(b)){b={}}H b}D 52(a,b){b=3S(a,b);8(1p(b)){F c=65(b);8(c==-1){b=$(b)}O{b=c}}H b}D 6n(a,b){b=52(a,b);8(2v(b)){b={'W':b}}O 8(1k(b)){b={'1G':b}}O 8(Y(b)){b={'2K':b}}8(b.1f){8(1p(b.1f)||2v(b.1f)){b.1f={'2q':b.1f}}}H b}D 6z(a,b){8(1o(b.W)){b.W=b.W.1h(a)}8(1p(b.W)){b.W=$(b.W)}8(!1k(b.1G)){b.1G=J}8(!Y(b.5U)){b.5U=0}8(1z(b.4X)){b.4X=J}8(!1k(b.5V)){b.5V=J}8(!Y(b.2K)){b.2K=(b.1M<10)?8Y:b.1M*5}8(b.1f){8(1o(b.1f.2q)){b.1f.2q=b.1f.2q.1h(a)}8(1p(b.1f.2q)){b.1f.2q=$(b.1f.2q)}8(b.1f.2q){8(!1o(b.1f.4B)){b.1f.4B=$.1s.1v.7u}8(!Y(b.1f.5u)){b.1f.5u=50}}O{b.1f=L}}H b}D 5a(a,b){b=52(a,b);8(2v(b)){b={'W':b}}O 8(Y(b)){b={'2Y':b}}H b}D 5j(a,b){8(1o(b.W)){b.W=b.W.1h(a)}8(1p(b.W)){b.W=$(b.W)}8(1p(b.2Y)){b.2Y=65(b.2Y)}H b}D 6o(a,b){b=52(a,b);8(2v(b)){b={'1A':b}}O 8(1k(b)){b={'4Y':b}}H b}D 6A(a,b){8(1o(b.1A)){b.1A=b.1A.1h(a)}8(1p(b.1A)){b.1A=$(b.1A)}8(!Y(b.E)){b.E=L}8(!1k(b.4Y)){b.4Y=L}8(!1o(b.3K)&&!53(b.3K)){b.3K=$.1s.1v.7s}8(!Y(b.4S)){b.4S=0}H b}D 6p(a,b){8(1o(b)){b=b.1h(a)}8(1z(b)){b={'4h':L}}8(3p(b)){b={'4h':b}}O 8(Y(b)){b={'E':b}}H b}D 6B(a,b){8(!1k(b.4h)){b.4h=J}8(!1k(b.5R)){b.5R=L}8(!1T(b.2G)){b.2G={}}8(!1k(b.2G.7y)){b.2G.7y=L}H b}D 6q(a,b){8(1o(b)){b=b.1h(a)}8(3p(b)){b={}}O 8(Y(b)){b={'E':b}}O 8(1z(b)){b=L}H b}D 6C(a,b){H b}D 3J(a,b,c,d,e){8(1p(a)){a=$(a,e)}8(1T(a)){a=$(a,e)}8(2v(a)){a=e.13().7a(a);8(!1k(c)){c=L}}O{8(!1k(c)){c=J}}8(!Y(a)){a=0}8(!Y(b)){b=0}8(c){a+=d.X}a+=b;8(d.Q>0){2h(a>=d.Q){a-=d.Q}2h(a<0){a+=d.Q}}H a}D 4D(i,o,s){F t=0,x=0;1j(F a=s;a>=0;a--){F j=i.1N(a);t+=(j.2f(':M'))?j[o.d['2w']](J):0;8(t>o.3U){H x}8(a==0){a=i.S}x++}}D 7c(i,o,s){H 66(i,o.E.1t,o.E.U.4t,s)}D 6T(i,o,s,m){H 66(i,o.E.1t,m,s)}D 66(i,f,m,s){F t=0,x=0;1j(F a=s,l=i.S;a>=0;a--){x++;8(x==l){H x}F j=i.1N(a);8(j.2f(f)){t++;8(t==m){H x}}8(a==0){a=l}}}D 5x(a,o){H o.E.U.4t||a.13().19(0,o.E.M).1t(o.E.1t).S}D 32(i,o,s){F t=0,x=0;1j(F a=s,l=i.S-1;a<=l;a++){F j=i.1N(a);t+=(j.2f(':M'))?j[o.d['2w']](J):0;8(t>o.3U){H x}x++;8(x==l+1){H x}8(a==l){a=-1}}}D 5I(i,o,s,l){F v=32(i,o,s);8(!o.1U){8(s+v>l){v=l-s}}H v}D 3W(i,o,s){H 68(i,o.E.1t,o.E.U.4t,s,o.1U)}D 6Z(i,o,s,m){H 68(i,o.E.1t,m+1,s,o.1U)-1}D 68(i,f,m,s,c){F t=0,x=0;1j(F a=s,l=i.S-1;a<=l;a++){x++;8(x>=l){H x}F j=i.1N(a);8(j.2f(f)){t++;8(t==m){H x}}8(a==l){a=-1}}}D 3I(i,o){H i.19(0,o.E.M)}D 6V(i,o,n){H i.19(n,o.E.U.20+n)}D 6W(i,o){H i.19(0,o.E.M)}D 71(i,o){H i.19(0,o.E.U.20)}D 72(i,o,n){H i.19(n,o.E.M+n)}D 4x(i,o,d){8(o.1R){8(!1p(d)){d='2a'}i.1W(D(){F j=$(1l),m=4k(j.Z(o.d['1S']),10);8(!Y(m)){m=0}j.1q(d,m)})}}D 1Y(i,o,m){8(o.1R){F x=(1k(m))?m:L;8(!Y(m)){m=0}4x(i,o,'7z');i.1W(D(){F j=$(1l);j.Z(o.d['1S'],((x)?j.1q('7z'):m+j.1q('2a')))})}}D 41(i){i.1W(D(){F j=$(1l);j.1q('7A',j.7B('7C')||'')})}D 4U(i){i.1W(D(){F j=$(1l);j.7B('7C',j.1q('7A')||'')})}D 5r(o,b){F c=o.E.M,7D=o.E[o.d['P']],69=o[o.d['1e']],7E=3V(69);b.1W(D(){F a=$(1l),6a=7D-7F(a,o,'8Z');a[o.d['P']](6a);8(7E){a[o.d['1e']](4s(6a,69))}})}D 4Q(a,o){F b=a.36(),$i=a.13(),$v=3I($i,o),54=4I(4J($v,o,J),o,L);b.Z(54);8(o.1R){F p=o.1i,r=p[o.d[1]];8(o.1B&&r<0){r=0}F c=$v.2P();c.Z(o.d['1S'],c.1q('2a')+r);a.Z(o.d['3q'],p[o.d[0]]);a.Z(o.d['1m'],p[o.d[3]])}a.Z(o.d['P'],54[o.d['P']]+(2R($i,o,'P')*2));a.Z(o.d['1e'],6b($i,o,'1e'));H 54}D 4J(i,o,a){H[2R(i,o,'P',a),6b(i,o,'1e',a)]}D 6b(i,o,a,b){8(!1k(b)){b=L}8(Y(o[o.d[a]])&&b){H o[o.d[a]]}8(Y(o.E[o.d[a]])){H o.E[o.d[a]]}a=(a.6c().3R('P')>-1)?'2w':'3n';H 4n(i,o,a)}D 4n(i,o,b){F s=0;1j(F a=0,l=i.S;a<l;a++){F j=i.1N(a);F m=(j.2f(':M'))?j[o.d[b]](J):0;8(s<m){s=m}}H s}D 2R(i,o,b,c){8(!1k(c)){c=L}8(Y(o[o.d[b]])&&c){H o[o.d[b]]}8(Y(o.E[o.d[b]])){H o.E[o.d[b]]*i.S}F d=(b.6c().3R('P')>-1)?'2w':'3n',s=0;1j(F a=0,l=i.S;a<l;a++){F j=i.1N(a);s+=(j.2f(':M'))?j[o.d[d]](J):0}H s}D 5d(a,o,d){F b=a.2f(':M');8(b){a.4j()}F s=a.36()[o.d[d]]();8(b){a.4m()}H s}D 5e(o,a){H(Y(o[o.d['P']]))?o[o.d['P']]:a}D 6d(i,o,b){F s=L,v=L;1j(F a=0,l=i.S;a<l;a++){F j=i.1N(a);F c=(j.2f(':M'))?j[o.d[b]](J):0;8(s===L){s=c}O 8(s!=c){v=J}8(s==0){v=J}}H v}D 7F(i,o,d){H i[o.d['90'+d]](J)-i[o.d[d.6c()]]()}D 4s(s,o){8(3V(o)){o=4k(o.19(0,-1),10);8(!Y(o)){H s}s*=o/2I}H s}D I(n,c,a,b,d){8(!1k(a)){a=J}8(!1k(b)){b=J}8(!1k(d)){d=L}8(a){n=c.3y.45+n}8(b){n=n+'.'+c.3y.7r}8(b&&d){n+=c.3T}H n}D 2y(n,c){H(1p(c.63[n]))?c.63[n]:n}D 4I(a,o,p){8(!1k(p)){p=J}F b=(o.1R&&p)?o.1i:[0,0,0,0];F c={};c[o.d['P']]=a[0]+b[1]+b[3];c[o.d['1e']]=a[1]+b[0]+b[2];H c}D 3e(c,d){F e=[];1j(F a=0,7G=c.S;a<7G;a++){1j(F b=0,7H=d.S;b<7H;b++){8(d[b].3R(2X c[a])>-1&&1z(e[b])){e[b]=c[a];17}}}H e}D 6x(p){8(1z(p)){H[0,0,0,0]}8(Y(p)){H[p,p,p,p]}8(1p(p)){p=p.3Q('91').7I('').3Q('92').7I('').3Q(' ')}8(!2V(p)){H[0,0,0,0]}1j(F i=0;i<4;i++){p[i]=4k(p[i],10)}1F(p.S){R 0:H[0,0,0,0];R 1:H[p[0],p[0],p[0],p[0]];R 2:H[p[0],p[1],p[0],p[1]];R 3:H[p[0],p[1],p[2],p[1]];2J:H[p[0],p[1],p[2],p[3]]}}D 4H(a,o){F x=(Y(o[o.d['P']]))?1H.2z(o[o.d['P']]-2R(a,o,'P')):0;1F(o.1B){R'1m':H[0,x];R'35':H[x,0];R'5f':2J:H[1H.2z(x/2),1H.4l(x/2)]}}D 6r(o){F a=[['P','7J','2w','1e','7K','3n','1m','3q','1S',0,1,2,3],['1e','7K','3n','P','7J','2w','3q','1m','5p',3,2,1,0]];F b=a[0].S,7L=(o.2l=='35'||o.2l=='1m')?0:1;F c={};1j(F d=0;d<b;d++){c[a[0][d]]=a[7L][d]}H c}D 4E(x,o,a,b){F v=x;8(1o(a)){v=a.1h(b,v)}O 8(1p(a)){F p=a.3Q('+'),m=a.3Q('-');8(m.S>p.S){F c=J,6e=m[0],30=m[1]}O{F c=L,6e=p[0],30=p[1]}1F(6e){R'93':v=(x%2==1)?x-1:x;17;R'94':v=(x%2==0)?x-1:x;17;2J:v=x;17}30=4k(30,10);8(Y(30)){8(c){30=-30}v+=30}}8(!Y(v)||v<1){v=1}H v}D 2x(x,o,a,b){H 6f(4E(x,o,a,b),o.E.U)}D 6f(v,i){8(Y(i.34)&&v<i.34){v=i.34}8(Y(i.1X)&&v>i.1X){v=i.1X}8(v<1){v=1}H v}D 5k(s){8(!2V(s)){s=[[s]]}8(!2V(s[0])){s=[s]}1j(F j=0,l=s.S;j<l;j++){8(1p(s[j][0])){s[j][0]=$(s[j][0])}8(!1k(s[j][1])){s[j][1]=J}8(!1k(s[j][2])){s[j][2]=J}8(!Y(s[j][3])){s[j][3]=0}}H s}D 65(k){8(k=='35'){H 39}8(k=='1m'){H 37}8(k=='5c'){H 38}8(k=='7h'){H 40}H-1}D 5H(n,a,c){8(n){F v=a.1P(I('4p',c));$.1s.1v.25.64(n,v)}}D 7m(n){F c=$.1s.1v.25.3F(n);H(c=='')?0:c}D 6E(a,b){F c={};1j(F p=0,l=b.S;p<l;p++){c[b[p]]=a.Z(b[p])}H c}D 6s(a,b,c,d){8(!1T(a.U)){a.U={}}8(!1T(a.3M)){a.3M={}}8(a.3m==0&&Y(d)){a.3m=d}8(1T(a.M)){a.U.34=a.M.34;a.U.1X=a.M.1X;a.M=L}O 8(1p(a.M)){8(a.M=='1d'){a.U.1d=J}O{a.U.2c=a.M}a.M=L}O 8(1o(a.M)){a.U.2c=a.M;a.M=L}8(!1p(a.1t)){a.1t=(c.1t(':3t').S>0)?':M':'*'}8(!a[b.d['P']]){8(b.2H){18(J,'7M a '+b.d['P']+' 1j 75 E!');a[b.d['P']]=4n(c,b,'2w')}O{a[b.d['P']]=(6d(c,b,'2w'))?'1d':c[b.d['2w']](J)}}8(!a[b.d['1e']]){a[b.d['1e']]=(6d(c,b,'3n'))?'1d':c[b.d['3n']](J)}a.3M.P=a.P;a.3M.1e=a.1e;H a}D 6w(a,b){8(a.E[a.d['P']]=='1d'){a.E.U.1d=J}8(!a.E.U.1d){8(Y(a[a.d['P']])){a.E.M=1H.4l(a[a.d['P']]/a.E[a.d['P']])}O{a.E.M=1H.4l(b/a.E[a.d['P']]);a[a.d['P']]=a.E.M*a.E[a.d['P']];8(!a.E.U.2c){a.1B=L}}8(a.E.M=='95'||a.E.M<1){18(J,'2p a 5K 28 4f M E: 7M 46 \"1d\".');a.E.U.1d=J}}H a}D 6t(a,b,c){8(a=='N'){a=4n(c,b,'2w')}H a}D 6u(a,b,c){8(a=='N'){a=4n(c,b,'3n')}8(!a){a=b.E[b.d['1e']]}H a}D 5i(o,a){F p=4H(3I(a,o),o);o.1i[o.d[1]]=p[1];o.1i[o.d[3]]=p[0];H o}D 5g(o,a,b){F c=6f(1H.2z(o[o.d['P']]/o.E[o.d['P']]),o.E.U);8(c>a.S){c=a.S}F d=1H.4l(o[o.d['P']]/c);o.E.M=c;o.E[o.d['P']]=d;o[o.d['P']]=c*d;H o}D 3N(p){8(1p(p)){F i=(p.3R('96')>-1)?J:L,r=(p.3R('3g')>-1)?J:L}O{F i=r=L}H[i,r]}D 97(a){H(Y(a))?a:3O}D 6g(a){H(a===3O)}D 1z(a){H(6g(a)||2X a=='7N'||a===''||a==='7N')}D 2V(a){H(a 2W 98)}D 2v(a){H(a 2W 7O)}D 1T(a){H((a 2W 99||2X a=='2A')&&!6g(a)&&!2v(a)&&!2V(a))}D Y(a){H((a 2W 4e||2X a=='28')&&!9a(a))}D 1p(a){H((a 2W 9b||2X a=='2M')&&!1z(a)&&!3p(a)&&!53(a))}D 1o(a){H(a 2W 9c||2X a=='D')}D 1k(a){H(a 2W 9d||2X a=='3d'||3p(a)||53(a))}D 3p(a){H(a===J||a==='J')}D 53(a){H(a===L||a==='L')}D 3V(x){H(1p(x)&&x.19(-1)=='%')}D 2o(){H 7v 7w().2o()}D 3X(o,n){18(J,o+' 2f 9e, 9f 1j 9g 9h 9i 9j. 9k '+n+' 9l.')}D 18(d,m){8(!1z(3l.6h)&&!1z(3l.6h.7P)){8(1T(d)){F s=' ('+d.4o+')';d=d.18}O{F s=''}8(!d){H L}8(1p(m)){m='1v'+s+': '+m}O{m=['1v'+s+':',m]}3l.6h.7P(m)}H L}$.1L($.2u,{'9m':D(t){F a=t*t;H t*(-a*t+4*a-6*t+4)},'9n':D(t){H t*(4*t*t-9*t+6)},'9o':D(t){F a=t*t;H t*(33*a*a-9p*a*t+9q*a-67*t+15)}})})(7O);",62,585,"|||||||opts|if|||||||||||||||||||||||||||||||function|items|var|conf|return|cf_e|true|itms|false|visible|auto|else|width|total|case|length|trigger|visibleConf|scrl|button|first|is_number|css||bind|tt0|children|prev||next|break|debug|slice|anims|pagination|push|variable|height|progress|stopPropagation|call|padding|for|is_boolean|this|left|wrp|is_function|is_string|data|swipe|fn|filter|tmrs|carouFredSel|fade|_onafter|_moveitems|is_undefined|container|align|_s_paddingold|_s_paddingcur|opacity|switch|play|Math|cover|_position|scroll|extend|duration|eq|_a_wrapper|triggerHandler|mousewheel|usePadding|marginRight|is_object|circular|fx|each|max|sz_resetMargin|i_cur_l|old|i_old_l|uncover|unbind||cookie|isScrolling|isPaused|number|a_cfs|_cfs_origCssMargin|clbk|adjust|isStopped|stopImmediatePropagation|is|queu|while|i_new|w_siz|nr|direction|avail_primary|synchronise|getTime|Not|bar|i_new_l|a_cur|remove|easing|is_jquery|outerWidth|cf_getItemsAdjust|cf_c|ceil|object|pR|_s_paddingnew|preventDefault|a_itm|pauseOnHover|options|responsive|100|default|timeoutDuration|startTime|string|removeClass|queue|last|i_skp|ms_getTotalSize|a_old|a_lef|a_dur|is_array|instanceof|typeof|key|transition|adj|opts_orig|gn_getVisibleItemsNext||min|right|parent||||addClass|pause|perc|boolean|cf_sortParams|scrolling|resume|onAfter|i_old|crossfade|slideTo|window|start|outerHeight|_cfs_triggerEvent|is_true|top|position|wrapper|hidden|sc_clearTimers|timePassed|Carousel|sc_startScroll|events|infinite|nv_enableNavi|i_siz|i_siz_vis|_a_paddingold|_a_paddingcur|get|onBefore|updatePageStatus|gi_getCurrentItems|gn_getItemIndex|anchorBuilder|event|sizesConf|bt_pauseOnHoverConfig|null|ns2|split|indexOf|go_getObject|serialNumber|maxDimension|is_percentage|gn_getVisibleItemsNextFilter|deprecated|orgCSS|zIndex||sz_storeOrigCss|none|sc_stopScroll|dur2|prefix|to|appendTo|sc_setScroll||sc_fireCallbacks|currentPage|end|before|Number|of|document|onTouch|onResize|hide|parseInt|floor|show|ms_getTrueLargestSize|selector|currentPosition|destroy|primarySizePercentage|ms_getPercentage|org|onTimeoutStart|onTimeoutPause|onTimeoutEnd|sz_storeMargin|stopped|pre|post|updater|minimum|gn_getVisibleItemsPrev|cf_getAdjust|onEnd|clone|cf_getAlignPadding|cf_mapWrapperSizes|ms_getSizes|a_wsz|a_new|not|a_cfs_vis|updateSizes|eval|sz_setSizes|pgs|deviation|nv_showNavi|sz_restoreOrigCss|mouseenter|mouseleave|pauseOnEvent|keys|throttle||di|go_getNaviObject|is_false|sz|element|starting_position|_cfs_isCarousel||_cfs_init|go_getPrevNextObject|defaults|up|ms_getParentSize|ms_getMaxDimension|center|in_getResponsiveValues|bottom|in_getAlignPadding|go_complementPrevNextObject|cf_getSynchArr|onPauseStart|onPausePause|onPauseEnd|pauseDuration|marginBottom|newPosition|sz_setResponsiveSizes|_cfs_unbind_events|finish|interval|type|conditions|gn_getVisibleOrg|backward|sc_hideHiddenItems|a_lef_vis|sc_getDuration|_a_paddingnew|sc_showHiddenItems|sc_mapCallbackArguments|sc_afterScroll|sc_fireQueue|cf_setCookie|gn_getVisibleItemsNextTestCircular|slideToPage|valid|linkAnchors|value|_cfs_bind_buttons|click|_cfs_unbind_buttons|scrolled|onMouse|swP|swN|delay|pauseOnResize|debounce|onWindowResize|_windowHeight|nh||ns3|continue|classnames|set|cf_getKeyCode|gn_getItemsPrevFilter||gn_getItemsNextFilter|seco|nw|ms_getLargestSize|toLowerCase|ms_hasVariableSizes|sta|cf_getItemAdjustMinMax|is_null|console|caroufredsel|No|found|go_getItemsObject|go_getScrollObject|go_getAutoObject|go_getPaginationObject|go_getSwipeObject|go_getMousewheelObject|cf_getDimensions|in_complementItems|in_complementPrimarySize|in_complementSecondarySize|upDateOnWindowResize|in_complementVisibleItems|cf_getPadding|500|go_complementAutoObject|go_complementPaginationObject|go_complementSwipeObject|go_complementMousewheelObject|_cfs_build|in_mapCss|textAlign|float|marginTop|marginLeft|absolute|_cfs_origCssZindex|_cfs_bind_events|stop|paused|enough|needed|page|slide_|configuration|gn_getScrollItemsPrevFilter|Scrolling|gi_getOldItemsPrev|gi_getNewItemsPrev|directscroll|concat|gn_getScrollItemsNextFilter|forward|gi_getOldItemsNext|gi_getNewItemsNext|jumpToStart|after|the|append|removeItem|round|hash|index|selected|gn_getVisibleItemsPrevFilter|Item|keyup|keyCode|scN|down|cursor|mcN|configs|classname|cf_getCookie|random|itm|onCreate|swing|namespace|pageAnchorBuilder|span|progressbarUpdater|new|Date|_cfs_isHidden|triggerOnTouchEnd|_cfs_tempCssMargin|_cfs_origCss|attr|style|newS|secp|ms_getPaddingBorderMargin|l1|l2|join|innerWidth|innerHeight|dx|Set|undefined|jQuery|log|caroufredsel_cookie_|relative|fixed|overflow|setInterval|setTimeout|or|Callback|returned|Page|resumed|currently|slide_prev|prependTo|slide_next|prevPage|nextPage|prepend|carousel|insertItem|Correct|insert|Appending|item|add|detach|currentVisible|body|find|Preventing|non|sliding|replaceWith|widths|heights|automatically|ontouchstart|in|swipeUp|swipeDown|swipeLeft|swipeRight|move|200|300|resize|wrap|class|animate|unshift|location|cfs|div|caroufredsel_wrapper|href|charAt|setTime|1000|expires|toGMTString|path|ease|orgDuration|shift|clearTimeout|clearInterval|skipped|Hiding|navigation|disabled|2500|Width|outer|px|em|even|odd|Infinity|immediate|bt_mousesheelNumber|Array|Object|isNaN|String|Function|Boolean|DEPRECATED|support|it|will|be|removed|Use|instead|quadratic|cubic|elastic|106|126".split("|"),0,{}));
/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function(f,b,g){var a=/\+/g;
function e(h){return h
}function c(h){return decodeURIComponent(h.replace(a," "))
}var d=f.cookie=function(p,o,u){if(o!==g){u=f.extend({},d.defaults,u);
if(o===null){u.expires=-1
}if(typeof u.expires==="number"){var q=u.expires,s=u.expires=new Date();
s.setDate(s.getDate()+q)
}o=d.json?JSON.stringify(o):String(o);
return(b.cookie=[encodeURIComponent(p),"=",d.raw?o:encodeURIComponent(o),u.expires?"; expires="+u.expires.toUTCString():"",u.path?"; path="+u.path:"",u.domain?"; domain="+u.domain:"",u.secure?"; secure":""].join(""))
}var h=d.raw?e:c;
var r=b.cookie.split("; ");
for(var n=0,k=r.length;
n<k;
n++){var m=r[n].split("=");
if(h(m.shift())===p){var j=h(m.join("="));
return d.json?JSON.parse(j):j
}}return null
};
d.defaults={};
f.removeCookie=function(j,h){if(f.cookie(j)!==null){f.cookie(j,null,h);
return true
}return false
};
f.ajaxSetup({beforeSend:function(k,h){try{var l=globalLocale.toLowerCase().replace("_","-");
if(typeof h!="undefined"&&typeof h.url!="undefined"&&h.url!=""&&h.url.indexOf("/libs")==-1&&h.url.indexOf("/etc")==-1&&h.url.indexOf("/bin")==-1&&h.url.indexOf("/mbox")==-1&&h.url.indexOf("/content/pdc")==-1&&h.url.indexOf("/"+l+"/")==-1&&h.url.indexOf("/apps")==-1&&h.url.indexOf("/mnt")==-1&&h.url.indexOf("http")==-1&&h.url.indexOf("//")==-1){h.url="/"+l+h.url
}}catch(j){console.log("Error in appending locale")
}}})
})(jQuery,document);
function ScrollrControllr(){var d=[],j=[],h=false;
(function(){if(window.addEventListener){window.addEventListener("scroll",f,false);
window.addEventListener("touchmove",f,false);
window.addEventListener("resize",b,false)
}else{if(window.attachEvent){window.attachEvent("onscroll",f);
window.attachEvent("onresize",b)
}}if(!window.requestAnimationFrame){window.requestAnimationFrame=(function(){return(window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(l,k){window.setTimeout(l,1000/60)
})
})()
}})();
return{register:function(k){if(typeof k.trigger==="undefined"){k.trigger=null;
k.onScrollTo=null;
k.onScrollFrom=null
}else{if(typeof(k.onScrollTo)!=="function"){k.onScrollTo=null
}if(typeof(k.onScrollFrom)!=="function"){k.onScrollFrom=null
}}if(typeof(k.onScroll)!=="function"){k.onScroll=null
}if(k.onScroll||k.onScrollFrom||k.onScrollTo!==null){k.func=k.onScroll;
if(typeof k.inView!=="boolean"){k.inView=false
}d.push(k)
}if(typeof(k.onResize)==="function"){j.push({func:k.onResize})
}},registerScrollListener:function(k,l){if(typeof l==="undefined"){l=null
}if(typeof k==="function"){d.push({func:k,trigger:l,inView:false,onScrollTo:null,onScrollFrom:null})
}else{if(typeof k.scrollBack!=="undefined"&&typeof k.scrollBack==="function"){d.push({func:k.scrollBack,trigger:l,onScrollTo:null,onScrollFrom:null})
}}},registerResizeListener:function(k){if(typeof k==="function"){j.push({func:k})
}else{if(typeof k.scrollBack!=="undefined"&&typeof k.scrollBack==="function"){j.push({func:k.scrollBack})
}}}};
function f(){if(!h){requestAnimationFrame(c)
}h=true
}function b(){if(!h){requestAnimationFrame(g);
requestAnimationFrame(c)
}h=true
}function c(){var n=a(),l=d.length;
while(l--){var m=d[l];
if(m.trigger){var k=e(m.trigger);
if(k[2]||m.inView){if(k[2]!==m.inView){if(m.inView){if(m.onScrollFrom!==null){m.onScrollFrom()
}}else{if(m.onScrollTo!==null){m.onScrollTo()
}}}m.inView=k[2];
if(m.func!==null){m.func(n,k)
}}}else{m.func(n)
}}h=false
}function g(){var k=j.length;
while(k--){j[k].func()
}h=false
}function a(){try{return pageYOffset
}catch(k){var m=document.body;
var l=document.documentElement;
l=(l.clientHeight)?l:m;
return l.scrollTop
}}function e(n){var l="innerHeight" in window?window.innerHeight:document.documentElement.offsetHeight,k=null;
try{try{k=n[0].getBoundingClientRect()
}catch(m){k=n.getBoundingClientRect()
}}catch(m){return false
}return[(k.top>=0&&k.top<l),(k.bottom>=0&&k.bottom<=l),(k.top<l&&k.bottom>=0),k.top,k.bottom]
}}!function(G,A){function m(f,h,u){var g=f.children(),s=!1;
f.empty();
for(var c=0,p=g.length;
p>c;
c++){var a=g.eq(c);
if(f.append(a),u&&f.append(u),D(f,h)){a.remove(),s=!0;
break
}u&&u.detach()
}return s
}function b(o,v,g,p,a){var h=!1,r="table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style",f="script, .dotdotdot-keep";
return o.contents().detach().each(function(){var d=this,c=G(d);
if("undefined"==typeof d||3==d.nodeType&&0==G.trim(d.data).length){return !0
}if(c.is(f)){o.append(c)
}else{if(h){return !0
}o.append(c),a&&o[o.is(r)?"after":"append"](a),D(g,p)&&(h=3==d.nodeType?k(c,v,g,p,a):b(c,v,g,p,a),h||(c.detach(),h=!0)),h||a&&a.detach()
}}),h
}function k(N,u,a,s,O){var P=N[0];
if(!P){return !1
}var M=H(P),K=-1!==M.indexOf(" ")?" ":"　",l="letter"==s.wrap?"":K,L=M.split(l),V=-1,U=-1,R=0,Q=L.length-1;
for(s.fallbackToLetter&&0==R&&0==Q&&(l="",L=M.split(l),Q=L.length-1);
Q>=R&&(0!=R||0!=Q);
){var I=Math.floor((R+Q)/2);
if(I==U){break
}U=I,q(P,L.slice(0,U+1).join(l)+s.ellipsis),D(a,s)?(Q=U,s.fallbackToLetter&&0==R&&0==Q&&(l="",L=L[0].split(l),V=-1,U=-1,R=0,Q=L.length-1)):(V=U,R=U)
}if(-1==V||1==L.length&&0==L[0].length){var S=N.parent();
N.detach();
var J=O&&O.closest(S).length?O.length:0;
S.contents().length>J?P=F(S.contents().eq(-1-J),u):(P=F(S,u,!0),J||S.detach()),P&&(M=w(H(P),s),q(P,M),J&&O&&G(P).parent().append(O))
}else{M=w(L.slice(0,V+1).join(l),s),q(P,M)
}return !0
}function D(a,c){return a.innerHeight()>c.maxHeight
}function w(a,c){for(;
G.inArray(a.slice(-1),c.lastCharacter.remove)>-1;
){a=a.slice(0,-1)
}return G.inArray(a.slice(-1),c.lastCharacter.noEllipsis)<0&&(a+=c.ellipsis),a
}function B(a){return{width:a.innerWidth(),height:a.innerHeight()}
}function q(a,c){a.innerText?a.innerText=c:a.nodeValue?a.nodeValue=c:a.textContent&&(a.textContent=c)
}function H(a){return a.innerText?a.innerText:a.nodeValue?a.nodeValue:a.textContent?a.textContent:""
}function C(a){do{a=a.previousSibling
}while(a&&1!==a.nodeType&&3!==a.nodeType);
return a
}function F(f,h,d){var g,c=f&&f[0];
if(c){if(!d){if(3===c.nodeType){return c
}if(G.trim(f.text())){return F(f.contents().last(),h)
}}for(g=C(c);
!g;
){if(f=f.parent(),f.is(h)||!f.length){return !1
}g=C(f[0])
}if(g){return F(G(g),h)
}}return !1
}function z(a,c){return a?"string"==typeof a?(a=G(a,c),a.length?a:!1):a.jquery?a:!1:!1
}function x(d){for(var g=d.innerHeight(),l=["paddingTop","paddingBottom"],f=0,h=l.length;
h>f;
f++){var c=parseInt(d.css(l[f]),10);
isNaN(c)&&(c=0),g-=c
}return g
}if(!G.fn.dotdotdot){G.fn.dotdotdot=function(p){if(0==this.length){return G.fn.dotdotdot.debug('No element found for "'+this.selector+'".'),this
}if(this.length>1){return this.each(function(){G(this).dotdotdot(p)
})
}var r=this;
r.data("dotdotdot")&&r.trigger("destroy.dot"),r.data("dotdotdot-style",r.attr("style")||""),r.css("word-wrap","break-word"),"nowrap"===r.css("white-space")&&r.css("white-space","normal"),r.bind_events=function(){return r.bind("update.dot",function(l,o){l.preventDefault(),l.stopPropagation(),a.maxHeight="number"==typeof a.height?a.height:x(r),a.maxHeight+=a.tolerance,"undefined"!=typeof o&&(("string"==typeof o||o instanceof HTMLElement)&&(o=G("<div />").append(o).contents()),o instanceof G&&(f=o)),n=r.wrapInner('<div class="dotdotdot" />').children(),n.contents().detach().end().append(f.clone(!0)).find("br").replaceWith("  <br />  ").end().css({height:"auto",width:"auto",border:"none",padding:0,margin:0});
var s=!1,g=!1;
return h.afterElement&&(s=h.afterElement.clone(!0),s.show(),h.afterElement.detach()),D(n,a)&&(g="children"==a.wrap?m(n,a,s):b(n,r,n,a,s)),n.replaceWith(n.contents()),n=null,G.isFunction(a.callback)&&a.callback.call(r[0],g,f),h.isTruncated=g,g
}).bind("isTruncated.dot",function(c,g){return c.preventDefault(),c.stopPropagation(),"function"==typeof g&&g.call(r[0],h.isTruncated),h.isTruncated
}).bind("originalContent.dot",function(c,g){return c.preventDefault(),c.stopPropagation(),"function"==typeof g&&g.call(r[0],f),f
}).bind("destroy.dot",function(c){c.preventDefault(),c.stopPropagation(),r.unwatch().unbind_events().contents().detach().end().append(f).attr("style",r.data("dotdotdot-style")||"").data("dotdotdot",!1)
}),r
},r.unbind_events=function(){return r.unbind(".dot"),r
},r.watch=function(){if(r.unwatch(),"window"==a.watch){var g=G(window),l=g.width(),c=g.height();
g.bind("resize.dot"+h.dotId,function(){l==g.width()&&c==g.height()&&a.windowResizeFix||(l=g.width(),c=g.height(),d&&clearInterval(d),d=setTimeout(function(){r.trigger("update.dot")
},100))
})
}else{v=B(r),d=setInterval(function(){if(r.is(":visible")){var e=B(r);
(v.width!=e.width||v.height!=e.height)&&(r.trigger("update.dot"),v=e)
}},500)
}return r
},r.unwatch=function(){return G(window).unbind("resize.dot"+h.dotId),d&&clearInterval(d),r
};
var f=r.contents(),a=G.extend(!0,{},G.fn.dotdotdot.defaults,p),h={},v={},d=null,n=null;
return a.lastCharacter.remove instanceof Array||(a.lastCharacter.remove=G.fn.dotdotdot.defaultArrays.lastCharacter.remove),a.lastCharacter.noEllipsis instanceof Array||(a.lastCharacter.noEllipsis=G.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),h.afterElement=z(a.after,r),h.isTruncated=!1,h.dotId=j++,r.data("dotdotdot",!0).bind_events().trigger("update.dot"),a.watch&&r.watch(),r
},G.fn.dotdotdot.defaults={ellipsis:"... ",wrap:"word",fallbackToLetter:!0,lastCharacter:{},tolerance:0,callback:null,after:null,height:null,watch:!1,windowResizeFix:!0},G.fn.dotdotdot.defaultArrays={lastCharacter:{remove:[" ","　",",",";",".","!","?"],noEllipsis:[]}},G.fn.dotdotdot.debug=function(){};
var j=1,y=G.fn.html;
G.fn.html=function(a){return a!=A&&!G.isFunction(a)&&this.data("dotdotdot")?this.trigger("update",[a]):y.apply(this,arguments)
};
var E=G.fn.text;
G.fn.text=function(a){return a!=A&&!G.isFunction(a)&&this.data("dotdotdot")?(a=G("<div />").text(a).html(),this.trigger("update",[a])):E.apply(this,arguments)
}
}}(jQuery);
/*!
 * typeahead.js 0.9.3
 * https://github.com/twitter/typeahead
 * Copyright 2013 Twitter, Inc. and other contributors; Licensed MIT
 */
;
String.prototype.insert=function(a,c,b){return(this.slice(0,a)+b+this.slice(a+Math.abs(c)))
};
(function(c){var m="0.9.3.1";
var k={isMsie:function(){var n=/(msie) ([\w.]+)/i.exec(navigator.userAgent);
return n?parseInt(n[2],10):false
},isBlankString:function(n){return !n||/^\s*$/.test(n)
},escapeRegExChars:function(n){return n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")
},isString:function(n){return typeof n==="string"
},isNumber:function(n){return typeof n==="number"
},isArray:c.isArray,isFunction:c.isFunction,isObject:c.isPlainObject,isUndefined:function(n){return typeof n==="undefined"
},bind:c.proxy,bindAll:function(o){var p;
for(var n in o){c.isFunction(p=o[n])&&(o[n]=c.proxy(p,o))
}},indexOf:function(o,p){for(var n=0;
n<o.length;
n++){if(o[n]===p){return n
}}return -1
},each:c.each,map:c.map,filter:c.grep,every:function(o,p){var n=true;
if(!o){return n
}c.each(o,function(q,r){if(!(n=p.call(null,r,q,o))){return false
}});
return !!n
},some:function(o,p){var n=false;
if(!o){return n
}c.each(o,function(q,r){if(n=p.call(null,r,q,o)){return false
}});
return !!n
},mixin:c.extend,getUniqueId:function(){var n=0;
return function(){return n++
}
}(),defer:function(n){setTimeout(n,0)
},debounce:function(p,r,o){var q,n;
return function(){var w=this,v=arguments,u,s;
u=function(){q=null;
if(!o){n=p.apply(w,v)
}};
s=o&&!q;
clearTimeout(q);
q=setTimeout(u,r);
if(s){n=p.apply(w,v)
}return n
}
},throttle:function(s,v){var q,p,u,n,r,o;
r=0;
o=function(){r=new Date();
u=null;
n=s.apply(q,p)
};
return function(){var w=new Date(),x=v-(w-r);
q=this;
p=arguments;
if(x<=0){clearTimeout(u);
u=null;
r=w;
n=s.apply(q,p)
}else{if(!u){u=setTimeout(o,x)
}}return n
}
},tokenizeQuery:function(n){return c.trim(n).toLowerCase().split(/[\s]+/)
},tokenizeText:function(n){return c.trim(n).toLowerCase().split(/[\s\-_]+/)
},getProtocol:function(){return location.protocol
},noop:function(){}};
var l=function(){var n=/\s+/;
return{on:function(o,q){var p;
if(!q){return this
}this._callbacks=this._callbacks||{};
o=o.split(n);
while(p=o.shift()){this._callbacks[p]=this._callbacks[p]||[];
this._callbacks[p].push(q)
}return this
},trigger:function(p,s){var r,q;
if(!this._callbacks){return this
}p=p.split(n);
while(r=p.shift()){if(q=this._callbacks[r]){for(var o=0;
o<q.length;
o+=1){q[o].call(this,{type:r,data:s})
}}}return this
}}
}();
var e=function(){var o="typeahead:";
function n(p){if(!p||!p.el){c.error("EventBus initialized without el")
}this.$el=c(p.el)
}k.mixin(n.prototype,{trigger:function(q){var p=[].slice.call(arguments,1);
this.$el.trigger(o+q,p)
}});
return n
}();
var g=function(){var n,o;
try{n=window.localStorage;
n.setItem("~~~","!");
n.removeItem("~~~")
}catch(s){n=null
}function q(v){this.prefix=["__",v,"__"].join("");
this.ttlKey="__ttl__";
this.keyMatcher=new RegExp("^"+this.prefix)
}if(n&&window.JSON){o={_prefix:function(v){return this.prefix+v
},_ttlKey:function(v){return this._prefix(v)+this.ttlKey
},get:function(v){if(this.isExpired(v)){this.remove(v)
}return u(n.getItem(this._prefix(v)))
},set:function(w,x,v){if(k.isNumber(v)){n.setItem(this._ttlKey(w),r(p()+v))
}else{n.removeItem(this._ttlKey(w))
}return n.setItem(this._prefix(w),r(x))
},remove:function(v){n.removeItem(this._ttlKey(v));
n.removeItem(this._prefix(v));
return this
},clear:function(){var x,w,y=[],v=n.length;
for(x=0;
x<v;
x++){if((w=n.key(x)).match(this.keyMatcher)){y.push(w.replace(this.keyMatcher,""))
}}for(x=y.length;
x--;
){this.remove(y[x])
}return this
},isExpired:function(w){var v=u(n.getItem(this._ttlKey(w)));
return k.isNumber(v)&&p()>v?true:false
}}
}else{o={get:k.noop,set:k.noop,remove:k.noop,clear:k.noop,isExpired:k.noop}
}k.mixin(q.prototype,o);
return q;
function p(){return new Date().getTime()
}function r(v){return JSON.stringify(k.isUndefined(v)?null:v)
}function u(v){return JSON.parse(v)
}}();
var j=function(){function n(p){k.bindAll(this);
p=p||{};
this.sizeLimit=p.sizeLimit||10;
this.cache={};
this.cachedKeysByAge=[]
}k.mixin(n.prototype,{get:function(o){return this.cache[o]
},set:function(p,q){var o;
if(this.cachedKeysByAge.length===this.sizeLimit){o=this.cachedKeysByAge.shift();
delete this.cache[o]
}this.cache[p]=q;
this.cachedKeysByAge.push(p)
}});
return n
}();
var d=function(){var o=0,r={},n,u;
function v(w){k.bindAll(this);
w=k.isString(w)?{url:w}:w;
u=u||new j();
n=k.isNumber(w.maxParallelRequests)?w.maxParallelRequests:n||6;
this.url=w.url;
this.wildcard=w.wildcard||"%QUERY";
this.filter=w.filter;
this.replace=w.replace;
this.ajaxSettings={type:"get",cache:w.cache,timeout:w.timeout,dataType:w.dataType||"json",beforeSend:w.beforeSend};
this._get=(/^throttle$/i.test(w.rateLimitFn)?k.throttle:k.debounce)(this._get,w.rateLimitWait||300)
}k.mixin(v.prototype,{_get:function(y,w){var z=this;
if(q()){this._sendRequest(y).done(x).fail(this.fail?this.fail:k.noop)
}else{this.onDeckRequestArgs=[].slice.call(arguments,0)
}function x(B){var A=z.filter?z.filter(B):B;
w&&w(A);
u.set(y,B)
}},_sendRequest:function(x){var z=this,y=r[x];
if(!y){p();
y=r[x]=c.ajax(x,this.ajaxSettings).always(w)
}return y;
function w(){s();
r[x]=null;
if(z.onDeckRequestArgs){z._get.apply(z,z.onDeckRequestArgs);
z.onDeckRequestArgs=null
}}},get:function(A,w){var z=this,y=encodeURIComponent(A||""),x,B;
w=w||k.noop;
x=this.replace?this.replace(this.url,y):this.url.replace(this.wildcard,y);
if(B=u.get(x)){k.defer(function(){w(z.filter?z.filter(B):B)
})
}else{this._get(x,w)
}return !!B
}});
return v;
function p(){o++
}function s(){o--
}function q(){return o<n
}}();
var a=function(){var p={thumbprint:"thumbprint",protocol:"protocol",itemHash:"itemHash",adjacencyList:"adjacencyList"};
function o(q){k.bindAll(this);
if(k.isString(q.template)&&!q.engine){c.error("no template engine specified")
}if(!q.local&&!q.prefetch&&!q.remote){c.error("one of local, prefetch, or remote is required")
}this.name=q.name||k.getUniqueId();
this.limit=q.limit||5;
this.minLength=q.minLength||1;
this.header=q.header;
this.footer=q.footer;
this.valueKey=q.valueKey||"value";
this.template=n(q.template,q.engine,this.valueKey);
this.local=q.local;
this.highlight=q.highlight||false;
this.prefetch=q.prefetch;
this.remote=q.remote;
this.itemHash={};
this.adjacencyList={};
this.storage=q.name?new g(q.name):null
}k.mixin(o.prototype,{_processLocalData:function(q){this._mergeProcessedData(this._processData(q))
},_loadPrefetchData:function(r){var v=this,A=m+(r.thumbprint||""),y,s,w,q,u,z;
if(this.storage){y=this.storage.get(p.thumbprint);
s=this.storage.get(p.protocol);
w=this.storage.get(p.itemHash);
q=this.storage.get(p.adjacencyList)
}u=y!==A||s!==k.getProtocol();
r=k.isString(r)?{url:r}:r;
r.ttl=k.isNumber(r.ttl)?r.ttl:24*60*60*1000;
if(w&&q&&!u){this._mergeProcessedData({itemHash:w,adjacencyList:q});
z=c.Deferred().resolve()
}else{z=c.getJSON(r.url).done(x)
}return z;
function x(F){var E=r.filter?r.filter(F):F,D=v._processData(E),B=D.itemHash,C=D.adjacencyList;
if(v.storage){v.storage.set(p.itemHash,B,r.ttl);
v.storage.set(p.adjacencyList,C,r.ttl);
v.storage.set(p.thumbprint,A,r.ttl);
v.storage.set(p.protocol,k.getProtocol(),r.ttl)
}v._mergeProcessedData(D)
}},_transformDatum:function(q){var s=k.isString(q)?q:q[this.valueKey],u=q.tokens||k.tokenizeText(s),r={value:s,tokens:u};
if(k.isString(q)){r.datum={};
r.datum[this.valueKey]=q
}else{r.datum=q
}r.tokens=k.filter(r.tokens,function(v){return !k.isBlankString(v)
});
r.tokens=k.map(r.tokens,function(v){return v.toLowerCase()
});
return r
},_processData:function(u){var s=this,q={},r={};
k.each(u,function(w,v){var x=s._transformDatum(v),y=k.getUniqueId(x.value);
q[y]=x;
k.each(x.tokens,function(A,z){var C=z.charAt(0),B=r[C]||(r[C]=[y]);
!~k.indexOf(B,y)&&B.push(y)
})
});
return{itemHash:q,adjacencyList:r}
},_mergeProcessedData:function(q){var r=this;
k.mixin(this.itemHash,q.itemHash);
k.each(q.adjacencyList,function(v,u){var s=r.adjacencyList[v];
r.adjacencyList[v]=s?s.concat(u):u
})
},_getLocalSuggestions:function(w){var v=this,u=[],r=[],s,q=[];
k.each(w,function(y,x){var z=x.charAt(0);
!~k.indexOf(u,z)&&u.push(z)
});
k.each(u,function(x,y){var z=v.adjacencyList[y];
if(!z){return false
}r.push(z);
if(!s||z.length<s.length){s=z
}});
if(r.length<u.length){return[]
}k.each(s,function(x,B){var z=v.itemHash[B],A,y;
A=k.every(r,function(C){return ~k.indexOf(C,B)
});
y=A&&k.every(w,function(C){return k.some(z.tokens,function(D){return D.indexOf(C)===0
})
});
y&&q.push(z)
});
return q
},initialize:function(){var q;
this.local&&this._processLocalData(this.local);
this.transport=this.remote?new d(this.remote):null;
q=this.prefetch?this._loadPrefetchData(this.prefetch):c.Deferred().resolve();
this.local=this.prefetch=this.remote=null;
this.initialize=function(){return q
};
return q
},getSuggestions:function(w,r){var v=this,u,q,s=false;
if(w.length<this.minLength){return
}u=k.tokenizeQuery(w);
q=this._getLocalSuggestions(u).slice(0,this.limit);
if(q.length<this.limit&&this.transport){s=this.transport.get(w,x)
}!s&&r&&r(q);
function x(y){q=q.slice(0);
k.each(y,function(B,A){var C=v._transformDatum(A),z;
z=k.some(q,function(D){return C.value===D.value
});
!z&&q.push(C);
return q.length<v.limit
});
r&&r(q)
}}});
return o;
function n(u,s,v){var r,q;
if(k.isFunction(u)){r=u
}else{if(k.isString(u)){q=s.compile(u);
r=k.bind(q.render,q)
}else{r=function(w){return"<p>"+w[v]+"</p>"
}
}}return r
}}();
var b=function(){function o(r){var q=this;
k.bindAll(this);
this.specialKeyCodeMap={9:"tab",27:"esc",37:"left",39:"right",13:"enter",38:"up",40:"down"};
this.$hint=c(r.hint);
this.$input=c(r.input).on("blur.tt",this._handleBlur).on("focus.tt",this._handleFocus).on("keydown.tt",this._handleSpecialKeyEvent);
if(!k.isMsie()){this.$input.on("input.tt",this._compareQueryToInputValue)
}else{this.$input.on("keydown.tt keypress.tt cut.tt paste.tt",function(s){if(q.specialKeyCodeMap[s.which||s.keyCode]){return
}k.defer(q._compareQueryToInputValue)
})
}this.query=this.$input.val();
this.$overflowHelper=p(this.$input)
}k.mixin(o.prototype,l,{_handleFocus:function(){this.trigger("focused")
},_handleBlur:function(){this.trigger("blured")
},_handleSpecialKeyEvent:function(q){var r=this.specialKeyCodeMap[q.which||q.keyCode];
r&&this.trigger(r+"Keyed",q)
},_compareQueryToInputValue:function(){var q=this.getInputValue(),s=n(this.query,q),r=s?this.query.length!==q.length:false;
if(r){this.trigger("whitespaceChanged",{value:this.query})
}else{if(!s){this.trigger("queryChanged",{value:this.query=q})
}}},destroy:function(){this.$hint.off(".tt");
this.$input.off(".tt");
this.$hint=this.$input=this.$overflowHelper=null
},focus:function(){this.$input.focus()
},blur:function(){this.$input.blur()
},getQuery:function(){return this.query
},setQuery:function(q){this.query=q
},getInputValue:function(){return this.$input.val()
},setInputValue:function(r,q){this.$input.val(r);
!q&&this._compareQueryToInputValue()
},getHintValue:function(){return this.$hint.val()
},setHintValue:function(q){this.$hint.val(q)
},getLanguageDirection:function(){return(this.$input.css("direction")||"ltr").toLowerCase()
},isOverflow:function(){this.$overflowHelper.text(this.getInputValue());
return this.$overflowHelper.width()>this.$input.width()
},isCursorAtEnd:function(){var r=this.$input.val().length,s=this.$input[0].selectionStart,q;
if(k.isNumber(s)){return s===r
}else{if(document.selection){q=document.selection.createRange();
q.moveStart("character",-r);
return r===q.text.length
}}return true
}});
return o;
function p(q){return c("<span></span>").css({position:"absolute",left:"-9999px",visibility:"hidden",whiteSpace:"nowrap",fontFamily:q.css("font-family"),fontSize:q.css("font-size"),fontStyle:q.css("font-style"),fontVariant:q.css("font-variant"),fontWeight:q.css("font-weight"),wordSpacing:q.css("word-spacing"),letterSpacing:q.css("letter-spacing"),textIndent:q.css("text-indent"),textRendering:q.css("text-rendering"),textTransform:q.css("text-transform")}).insertAfter(q)
}function n(r,q){r=(r||"").replace(/^\s*/g,"").replace(/\s{2,}/g," ");
q=(q||"").replace(/^\s*/g,"").replace(/\s{2,}/g," ");
return r===q
}}();
var f=function(){var p={suggestionsList:'<span class="tt-suggestions"></span>'},o={suggestionsList:{display:"block"},suggestion:{whiteSpace:"nowrap",cursor:"pointer"},suggestionChild:{whiteSpace:"normal"},suggestionPlaceholder:{whiteSpace:"nowrap",cursor:"pointer"}};
function q(r){k.bindAll(this);
this.isOpen=false;
this.isEmpty=true;
this.showplaceholders=r.showplaceholders;
this.isMouseOverDropdown=false;
this.$menu=c(r.menu).on("mouseenter.tt",this._handleMouseenter).on("mouseleave.tt",this._handleMouseleave).on("click.tt",".tt-suggestion",this._handleSelection).on("mouseover.tt",".tt-suggestion",this._handleMouseover)
}k.mixin(q.prototype,l,{_handleMouseenter:function(){this.isMouseOverDropdown=true
},_handleMouseleave:function(){this.isMouseOverDropdown=false
},_handleMouseover:function(s){var r=c(s.currentTarget);
this._getSuggestions().removeClass("tt-is-under-cursor");
r.addClass("tt-is-under-cursor")
},_handleSelection:function(s){var r=c(s.currentTarget);
this.trigger("suggestionSelected",n(r))
},_show:function(){this.$menu.css("display","block")
},_hide:function(){this.$menu.hide()
},_moveCursor:function(u){var w,s,r,v;
if(!this.isVisible()){return
}w=this._getSuggestions();
s=w.filter(".tt-is-under-cursor");
s.removeClass("tt-is-under-cursor");
r=w.index(s)+u;
r=(r+1)%(w.length+1)-1;
if(r===-1){this.trigger("cursorRemoved");
return
}else{if(r<-1){r=w.length-1
}}v=w.eq(r).addClass("tt-is-under-cursor");
this._ensureVisibility(v);
this.trigger("cursorMoved",n(v))
},_getSuggestions:function(){return this.$menu.find(".tt-suggestions > .tt-suggestion")
},_ensureVisibility:function(v){var w=this.$menu.height()+parseInt(this.$menu.css("paddingTop"),10)+parseInt(this.$menu.css("paddingBottom"),10),s=this.$menu.scrollTop(),r=v.position().top,u=r+v.outerHeight(true);
if(r<0){this.$menu.scrollTop(s+r)
}else{if(w<u){this.$menu.scrollTop(s+(u-w))
}}},destroy:function(){this.$menu.off(".tt");
this.$menu=null
},isVisible:function(){return this.isOpen&&!this.isEmpty
},closeUnlessMouseIsOverDropdown:function(){if(!this.isMouseOverDropdown&&!this.showplaceholders){this.close()
}},close:function(){if(this.isOpen){this.isOpen=false;
this.isMouseOverDropdown=false;
this._hide();
this.$menu.find(".tt-suggestions > .tt-suggestion").removeClass("tt-is-under-cursor");
this.trigger("closed")
}},open:function(){if(!this.isOpen){this.isOpen=true;
!this.isEmpty&&this._show();
this.trigger("opened")
}},setLanguageDirection:function(r){var s={left:"0",right:"auto"},u={left:"auto",right:" 0"};
r==="ltr"?this.$menu.css(s):this.$menu.css(u)
},moveCursorUp:function(){this._moveCursor(-1)
},moveCursorDown:function(){this._moveCursor(+1)
},getSuggestionUnderCursor:function(){var r=this._getSuggestions().filter(".tt-is-under-cursor").first();
return r.length>0?n(r):null
},getFirstSuggestion:function(){var r=this._getSuggestions().first();
return r.length>0?n(r):null
},renderSuggestions:function(w,x,z){var r="tt-dataset-"+w.name,s='<div class="tt-suggestion">%body</div>',C,A,D=this.$menu.find("."+r),v,y,E;
if(D.length===0){A=c(p.suggestionsList).css(o.suggestionsList);
D=c("<div></div>").addClass(r).append(w.header).append(A).append(w.footer).appendTo(this.$menu)
}if(!this.showplaceholders){if(x.length>0){this.isEmpty=false;
this.isOpen&&this._show();
v=document.createElement("div");
y=document.createDocumentFragment();
k.each(x,function(G,F){if(w.highlight){F.datum.value=F.datum.value.replace(new RegExp(z,"ig"),function(H){return"<strong>"+H+"</strong>"
})
}F.dataset=w.name;
C=w.template(F.datum);
if(w.highlight){F.datum.value=F.datum.value.replace(/(<strong>)*(<\/strong>)*/gi,"");
C=C.replace(/&lt;/gi,"<");
C=C.replace(/&gt;/gi,">")
}v.innerHTML=s.replace("%body",C);
E=c(v.firstChild).css(o.suggestion).data("suggestion",F);
E.children().each(function(){c(this).css(o.suggestionChild)
});
y.appendChild(E[0])
});
D.show().find(".tt-suggestions").html(y)
}else{this.clearSuggestions(w)
}}else{this.isEmpty=false;
this.isOpen&&this._show();
v=document.createElement("div");
y=document.createDocumentFragment();
k.each(x,function(G,F){if(w.highlight){F.datum.value=F.datum.value.replace(new RegExp(z,"ig"),function(H){return"<strong>"+H+"</strong>"
})
}F.dataset=w.name;
C=w.template(F.datum);
if(w.highlight){F.datum.value=F.datum.value.replace(/(<strong>)*(<\/strong>)*/gi,"");
C=C.replace(/&lt;/gi,"<");
C=C.replace(/&gt;/gi,">")
}v.innerHTML=s.replace("%body",C);
E=c(v.firstChild).css(o.suggestion).data("suggestion",F);
E.children().each(function(){c(this).css(o.suggestionChild)
});
y.appendChild(E[0])
});
var u=w.limit-x.length,B=D.find(".league-name");
if(x.length===0){if(!B.hasClass("disabled")){B.addClass("disabled")
}}else{if(B.hasClass("disabled")){B.removeClass("disabled")
}}C="";
s='<div class="tt-placeholder">%body</div>';
for(i=0;
i<u;
i++){v.innerHTML=s.replace("%body",C);
E=c(v.firstChild);
y.appendChild(E[0])
}D.show().find(".tt-suggestions").html(y).data("limit",w.limit)
}this.trigger("suggestionsRendered")
},clearSuggestions:function(w){var u,v;
u=w?this.$menu.find(".tt-dataset-"+w):this.$menu.find('[class^="tt-dataset-"]');
v=u.find(".tt-suggestions");
if(!this.showplaceholders){v.empty();
u.hide();
if(this._getSuggestions().length===0){this.isEmpty=true;
this._hide()
}}else{var y=document.createElement("div"),s=document.createDocumentFragment(),x='<div class="tt-placeholder">%body</div>',r;
u.find(".league-name").addClass("disabled");
k.each(v,function(A,z){r=c(z).data("limit");
for(var A=0;
A<r;
A++){y.innerHTML=x.replace("%body","");
$el=c(y.firstChild);
s.appendChild($el[0])
}c(z).html(s)
})
}}});
return q;
function n(r){return r.data("suggestion")
}}();
var h=function(){var r={wrapper:'<span class="twitter-typeahead"></span>',hint:'<input class="tt-hint" type="text" autocomplete="off" spellcheck="off" disabled>',dropdown:'<span class="tt-dropdown-menu"></span>'},q={wrapper:{display:"inline-block"},hint:{position:"absolute",top:"0",left:"0",borderColor:"transparent"},query:{verticalAlign:"top",backgroundColor:"transparent"},dropdown:{position:"absolute",top:"100%",left:"0",zIndex:"100",display:"none"}};
if(k.isMsie()){k.mixin(q.query,{backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"})
}if(k.isMsie()&&k.isMsie()<=7){k.mixin(q.wrapper,{display:"inline",zoom:"1"});
k.mixin(q.query,{marginTop:"-1px"})
}function o(v){var u,w,s;
k.bindAll(this);
this.$node=n(v.input);
this.datasets=v.datasets;
this.showplaceholders=v.showplaceholders;
this.dir=null;
this.eventBus=v.eventBus;
u=this.$node.find(".tt-dropdown-menu");
w=this.$node.find(".tt-query");
s=this.$node.find(".tt-hint");
this.dropdownView=new f({menu:u,showplaceholders:v.showplaceholders}).on("suggestionSelected",this._handleSelection).on("cursorMoved",this._clearHint).on("cursorMoved",this._setInputValueToSuggestionUnderCursor).on("cursorRemoved",this._setInputValueToQuery).on("cursorRemoved",this._updateHint).on("suggestionsRendered",this._updateHint).on("opened",this._updateHint).on("closed",this._clearHint).on("opened closed",this._propagateEvent);
this.inputView=new b({input:w,hint:s}).on("focused",this._openDropdown).on("blured",this._closeDropdown).on("blured",this._setInputValueToQuery).on("enterKeyed tabKeyed",this._handleSelection).on("queryChanged",this._clearHint).on("queryChanged",this._clearSuggestions).on("queryChanged",this._getSuggestions).on("whitespaceChanged",this._updateHint).on("queryChanged whitespaceChanged",this._openDropdown).on("queryChanged whitespaceChanged",this._setLanguageDirection).on("escKeyed",this._closeDropdown).on("escKeyed",this._setInputValueToQuery).on("tabKeyed upKeyed downKeyed",this._managePreventDefault).on("upKeyed downKeyed",this._moveDropdownCursor).on("upKeyed downKeyed",this._openDropdown).on("tabKeyed leftKeyed rightKeyed",this._autocomplete)
}k.mixin(o.prototype,l,{_managePreventDefault:function(w){var v=w.data,x,s,u=false;
switch(w.type){case"tabKeyed":x=this.inputView.getHintValue();
s=this.inputView.getInputValue();
u=x&&x!==s;
break;
case"upKeyed":case"downKeyed":u=!v.shiftKey&&!v.ctrlKey&&!v.metaKey;
break
}u&&v.preventDefault()
},_setLanguageDirection:function(){var s=this.inputView.getLanguageDirection();
if(s!==this.dir){this.dir=s;
this.$node.css("direction",s);
this.dropdownView.setLanguageDirection(s)
}},_updateHint:function(){var w=this.dropdownView.getFirstSuggestion(),v=w?w.value:null,z=this.dropdownView.isVisible(),y=this.inputView.isOverflow(),u,A,B,s,x;
if(v&&z&&!y){u=this.inputView.getInputValue();
A=u.replace(/\s{2,}/g," ").replace(/^\s+/g,"");
B=k.escapeRegExChars(A);
s=new RegExp("^(?:"+B+")(.*$)","i");
x=s.exec(v);
this.inputView.setHintValue(u+(x?x[1]:""))
}},_clearHint:function(){this.inputView.setHintValue("")
},_clearSuggestions:function(){this.dropdownView.clearSuggestions()
},_setInputValueToQuery:function(){this.inputView.setInputValue(this.inputView.getQuery())
},_setInputValueToSuggestionUnderCursor:function(u){var s=u.data;
this.inputView.setInputValue(s.value,true)
},_openDropdown:function(){this.dropdownView.open()
},_closeDropdown:function(s){this.dropdownView[s.type==="blured"?"closeUnlessMouseIsOverDropdown":"close"]()
},_moveDropdownCursor:function(u){var s=u.data;
if(!s.shiftKey&&!s.ctrlKey&&!s.metaKey){this.dropdownView[u.type==="upKeyed"?"moveCursorUp":"moveCursorDown"]()
}},_handleSelection:function(v){var u=v.type==="suggestionSelected",s=u?v.data:this.dropdownView.getSuggestionUnderCursor();
if(s){this.inputView.setInputValue(s.value);
u?this.inputView.focus():v.data.preventDefault();
u&&k.isMsie()?k.defer(this.dropdownView.close):this.dropdownView.close();
this.eventBus.trigger("selected",s.datum,s.dataset)
}},_getSuggestions:function(){var s=this,u=this.inputView.getQuery();
if(k.isBlankString(u)){return
}k.each(this.datasets,function(v,w){w.getSuggestions(u,function(x){if(u===s.inputView.getQuery()){s.dropdownView.renderSuggestions(w,x,u)
}})
});
this.eventBus.trigger("altered")
},_autocomplete:function(x){var u,s,w,y,v;
if(x.type==="rightKeyed"||x.type==="leftKeyed"){u=this.inputView.isCursorAtEnd();
s=this.inputView.getLanguageDirection()==="ltr"?x.type==="leftKeyed":x.type==="rightKeyed";
if(!u||s){return
}}w=this.inputView.getQuery();
y=this.inputView.getHintValue();
if(y!==""&&w!==y){v=this.dropdownView.getFirstSuggestion();
this.inputView.setInputValue(v.value);
this.eventBus.trigger("autocompleted",v.datum,v.dataset)
}},_propagateEvent:function(s){this.eventBus.trigger(s.type)
},destroy:function(){this.inputView.destroy();
this.dropdownView.destroy();
p(this.$node);
this.$node=null
},setQuery:function(s){this.inputView.setQuery(s);
this.inputView.setInputValue(s);
this._clearHint();
this._clearSuggestions();
this._getSuggestions()
}});
return o;
function n(s){var w=c(r.wrapper),y=c(r.dropdown),z=c(s),u=c(r.hint);
w=w.css(q.wrapper);
y=y.css(q.dropdown);
u.css(q.hint).css({backgroundAttachment:z.css("background-attachment"),backgroundClip:z.css("background-clip"),backgroundColor:z.css("background-color"),backgroundImage:z.css("background-image"),backgroundOrigin:z.css("background-origin"),backgroundPosition:z.css("background-position"),backgroundRepeat:z.css("background-repeat"),backgroundSize:z.css("background-size")});
z.data("ttAttrs",{dir:z.attr("dir"),autocomplete:z.attr("autocomplete"),spellcheck:z.attr("spellcheck"),style:z.attr("style")});
z.addClass("tt-query").attr({autocomplete:"off",spellcheck:false}).css(q.query);
try{!z.attr("dir")&&z.attr("dir","auto")
}catch(x){}var v=c('<span class="ps-wrap"/>"');
return z.wrap(w).wrap(v).parent().prepend(u).parent().append(y)
}function p(s){var u=s.find(".tt-query");
k.each(u.data("ttAttrs"),function(v,w){k.isUndefined(w)?u.removeAttr(v):u.attr(v,w)
});
u.detach().removeData("ttAttrs").removeClass("tt-query").insertAfter(s);
s.remove()
}}();
(function(){var p={},q="ttView",o,n=false;
o={initialize:function(u,v){var s;
if(n!==undefined){n=v
}else{n=false
}u=k.isArray(u)?u:[u];
if(u.length===0){c.error("no datasets provided")
}s=k.map(u,function(x){var w=p[x.name]?p[x.name]:new a(x);
if(x.name){p[x.name]=w
}return w
});
return this.each(r);
function r(){var y=c(this),x,w=new e({el:y});
x=k.map(s,function(z){return z.initialize()
});
y.data(q,new h({input:y,eventBus:w=new e({el:y}),datasets:s,showplaceholders:n}));
c.when.apply(c,x).always(function(){k.defer(function(){w.trigger("initialized")
})
})
}},destroy:function(){return this.each(r);
function r(){var u=c(this),s=u.data(q);
if(s){s.destroy();
u.removeData(q)
}}},setQuery:function(r){return this.each(s);
function s(){var u=c(this).data(q);
u&&u.setQuery(r)
}}};
jQuery.fn.typeahead=function(r){if(o[r]){return o[r].apply(this,[].slice.call(arguments,1))
}else{return o.initialize.apply(this,arguments)
}}
})()
})(window.jQuery);
/*!
 * Packery PACKAGED v1.4.1
 * bin-packing layout library
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * http://packery.metafizzy.co
 * Copyright 2015 Metafizzy
 */
(function(b){function c(){}function a(f){function e(j){j.prototype.option||(j.prototype.option=function(k){f.isPlainObject(k)&&(this.options=f.extend(!0,this.options,k))
})
}function h(k,j){f.fn[k]=function(v){if("string"==typeof v){for(var q=d.call(arguments,1),l=0,n=this.length;
n>l;
l++){var r=this[l],m=f.data(r,k);
if(m){if(f.isFunction(m[v])&&"_"!==v.charAt(0)){var w=m[v].apply(m,q);
if(void 0!==w){return w
}}else{g("no such method '"+v+"' for "+k+" instance")
}}else{g("cannot call methods on "+k+" prior to initialization; attempted to call '"+v+"'")
}}return this
}return this.each(function(){var o=f.data(this,k);
o?(o.option(v),o._init()):(o=new j(this,v),f.data(this,k,o))
})
}
}if(f){var g="undefined"==typeof console?c:function(j){console.error(j)
};
return f.bridget=function(j,k){e(k),h(j,k)
},f.bridget
}}var d=Array.prototype.slice;
"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],a):"object"==typeof exports?a(require("jquery")):a(b.jQuery)
})(window),function(b){function f(e){return RegExp("(^|\\s+)"+e+"(\\s+|$)")
}function a(k,l){var j=h(k,l)?d:g;
j(k,l)
}var h,g,d;
"classList" in document.documentElement?(h=function(j,k){return j.classList.contains(k)
},g=function(j,k){j.classList.add(k)
},d=function(j,k){j.classList.remove(k)
}):(h=function(j,e){return f(e).test(j.className)
},g=function(j,k){h(j,k)||(j.className=j.className+" "+k)
},d=function(j,e){j.className=j.className.replace(f(e)," ")
});
var c={hasClass:h,addClass:g,removeClass:d,toggleClass:a,has:h,add:g,remove:d,toggle:a};
"function"==typeof define&&define.amd?define("classie/classie",c):"object"==typeof exports?module.exports=c:b.classie=c
}(window),function(b){function c(f){if(f){if("string"==typeof d[f]){return f
}f=f.charAt(0).toUpperCase()+f.slice(1);
for(var h,j=0,g=a.length;
g>j;
j++){if(h=a[j]+f,"string"==typeof d[h]){return h
}}}}var a="Webkit Moz ms Ms O".split(" "),d=document.documentElement.style;
"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return c
}):"object"==typeof exports?module.exports=c:b.getStyleProperty=c
}(window),function(b){function f(k){var l=parseFloat(k),j=-1===k.indexOf("%")&&!isNaN(l);
return j&&l
}function a(){}function h(){for(var k={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},l=0,j=c.length;
j>l;
l++){var m=c[l];
k[m]=0
}return k
}function g(k){function q(){if(!n){n=!0;
var w=b.getComputedStyle;
if(m=function(){var o=w?function(s){return w(s,null)
}:function(s){return s.currentStyle
};
return function(x){var s=o(x);
return s||d("Style returned "+s+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),s
}
}(),j=k("boxSizing")){var v=document.createElement("div");
v.style.width="200px",v.style.padding="1px 2px 3px 4px",v.style.borderStyle="solid",v.style.borderWidth="1px 2px 3px 4px",v.style[j]="border-box";
var u=document.body||document.documentElement;
u.appendChild(v);
var p=m(v);
r=200===f(p.width),u.removeChild(v)
}}}function e(D){if(q(),"string"==typeof D&&(D=document.querySelector(D)),D&&"object"==typeof D&&D.nodeType){var I=m(D);
if("none"===I.display){return h()
}var F={};
F.width=D.offsetWidth,F.height=D.offsetHeight;
for(var N=F.isBorderBox=!(!j||!I[j]||"border-box"!==I[j]),L=0,H=c.length;
H>L;
L++){var K=c[L],s=I[K];
s=l(D,s);
var G=parseFloat(s);
F[K]=isNaN(G)?0:G
}var J=F.paddingLeft+F.paddingRight,B=F.paddingTop+F.paddingBottom,u=F.marginLeft+F.marginRight,C=F.marginTop+F.marginBottom,M=F.borderLeftWidth+F.borderRightWidth,A=F.borderTopWidth+F.borderBottomWidth,O=N&&r,o=f(I.width);
o!==!1&&(F.width=o+(O?0:J+M));
var p=f(I.height);
return p!==!1&&(F.height=p+(O?0:B+A)),F.innerWidth=F.width-(J+M),F.innerHeight=F.height-(B+A),F.outerWidth=F.width+u,F.outerHeight=F.height+C,F
}}function l(w,p){if(b.getComputedStyle||-1===p.indexOf("%")){return p
}var y=w.style,x=y.left,v=w.runtimeStyle,u=v&&v.left;
return u&&(v.left=w.currentStyle.left),y.left=p,p=y.pixelLeft,y.left=x,u&&(v.left=u),p
}var m,j,r,n=!1;
return e
}var d="undefined"==typeof console?a:function(e){console.error(e)
},c=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];
"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],g):"object"==typeof exports?module.exports=g(require("desandro-get-style-property")):b.getSize=g(b.getStyleProperty)
}(window),function(b){function d(j){var h=b.event;
return h.target=h.target||h.srcElement||j,h
}var a=document.documentElement,g=function(){};
a.addEventListener?g=function(j,k,h){j.addEventListener(k,h,!1)
}:a.attachEvent&&(g=function(h,e,j){h[e+j]=j.handleEvent?function(){var k=d(h);
j.handleEvent.call(j,k)
}:function(){var k=d(h);
j.call(h,k)
},h.attachEvent("on"+e,h[e+j])
});
var f=function(){};
a.removeEventListener?f=function(j,k,h){j.removeEventListener(k,h,!1)
}:a.detachEvent&&(f=function(j,k,h){j.detachEvent("on"+k,j[k+h]);
try{delete j[k+h]
}catch(l){j[k+h]=void 0
}});
var c={bind:g,unbind:f};
"function"==typeof define&&define.amd?define("eventie/eventie",c):"object"==typeof exports?module.exports=c:b.eventie=c
}(window),function(){function b(){}function d(j,k){for(var h=j.length;
h--;
){if(j[h].listener===k){return h
}}return -1
}function a(e){return function(){return this[e].apply(this,arguments)
}
}var g=b.prototype,f=this,c=f.EventEmitter;
g.getListeners=function(j){var k,h,l=this._getEvents();
if(j instanceof RegExp){k={};
for(h in l){l.hasOwnProperty(h)&&j.test(h)&&(k[h]=l[h])
}}else{k=l[j]||(l[j]=[])
}return k
},g.flattenListeners=function(j){var k,h=[];
for(k=0;
j.length>k;
k+=1){h.push(j[k].listener)
}return h
},g.getListenersAsObject=function(j){var k,h=this.getListeners(j);
return h instanceof Array&&(k={},k[j]=h),k||h
},g.addListener=function(h,e){var l,k=this.getListenersAsObject(h),j="object"==typeof e;
for(l in k){k.hasOwnProperty(l)&&-1===d(k[l],e)&&k[l].push(j?e:{listener:e,once:!1})
}return this
},g.on=a("addListener"),g.addOnceListener=function(h,j){return this.addListener(h,{listener:j,once:!0})
},g.once=a("addOnceListener"),g.defineEvent=function(e){return this.getListeners(e),this
},g.defineEvents=function(h){for(var j=0;
h.length>j;
j+=1){this.defineEvent(h[j])
}return this
},g.removeListener=function(h,e){var l,k,j=this.getListenersAsObject(h);
for(k in j){j.hasOwnProperty(k)&&(l=d(j[k],e),-1!==l&&j[k].splice(l,1))
}return this
},g.off=a("removeListener"),g.addListeners=function(h,j){return this.manipulateListeners(!1,h,j)
},g.removeListeners=function(h,j){return this.manipulateListeners(!0,h,j)
},g.manipulateListeners=function(j,m,h){var q,p,l=j?this.removeListener:this.addListener,k=j?this.removeListeners:this.addListeners;
if("object"!=typeof m||m instanceof RegExp){for(q=h.length;
q--;
){l.call(this,m,h[q])
}}else{for(q in m){m.hasOwnProperty(q)&&(p=m[q])&&("function"==typeof p?l.call(this,q,p):k.call(this,q,p))
}}return this
},g.removeEvent=function(j){var k,h=typeof j,l=this._getEvents();
if("string"===h){delete l[j]
}else{if(j instanceof RegExp){for(k in l){l.hasOwnProperty(k)&&j.test(k)&&delete l[k]
}}else{delete this._events
}}return this
},g.removeAllListeners=a("removeEvent"),g.emitEvent=function(j,m){var h,q,p,l,k=this.getListenersAsObject(j);
for(p in k){if(k.hasOwnProperty(p)){for(q=k[p].length;
q--;
){h=k[p][q],h.once===!0&&this.removeListener(j,h.listener),l=h.listener.apply(this,m||[]),l===this._getOnceReturnValue()&&this.removeListener(j,h.listener)
}}}return this
},g.trigger=a("emitEvent"),g.emit=function(h){var j=Array.prototype.slice.call(arguments,1);
return this.emitEvent(h,j)
},g.setOnceReturnValue=function(e){return this._onceReturnValue=e,this
},g._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0
},g._getEvents=function(){return this._events||(this._events={})
},b.noConflict=function(){return f.EventEmitter=c,b
},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return b
}):"object"==typeof module&&module.exports?module.exports=b:f.EventEmitter=b
}.call(this),function(b){function f(e){"function"==typeof e&&(f.isReady?e():c.push(e))
}function a(j){var e="readystatechange"===j.type&&"complete"!==d.readyState;
f.isReady||e||h()
}function h(){f.isReady=!0;
for(var j=0,e=c.length;
e>j;
j++){var k=c[j];
k()
}}function g(e){return"complete"===d.readyState?h():(e.bind(d,"DOMContentLoaded",a),e.bind(d,"readystatechange",a),e.bind(b,"load",a)),f
}var d=b.document,c=[];
f.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],g):"object"==typeof exports?module.exports=g(require("eventie")):b.docReady=g(b.eventie)
}(window),function(l){function j(a,h){return a[m](h)
}function f(a){if(!a.parentNode){var h=document.createDocumentFragment();
h.appendChild(a)
}}function d(a,p){f(a);
for(var s=a.parentNode.querySelectorAll(p),q=0,h=s.length;
h>q;
q++){if(s[q]===a){return !0
}}return !1
}function c(a,e){return f(a),j(a,e)
}var b,m=function(){if(l.matches){return"matches"
}if(l.matchesSelector){return"matchesSelector"
}for(var p=["webkit","moz","ms","o"],a=0,s=p.length;
s>a;
a++){var q=p[a],h=q+"MatchesSelector";
if(l[h]){return h
}}}();
if(m){var k=document.createElement("div"),g=j(k,"div");
b=g?j:c
}else{b=d
}"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return b
}):"object"==typeof exports?module.exports=b:window.matchesSelector=b
}(Element.prototype),function(a,b){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["doc-ready/doc-ready","matches-selector/matches-selector"],function(c,d){return b(a,c,d)
}):"object"==typeof exports?module.exports=b(a,require("doc-ready"),require("desandro-matches-selector")):a.fizzyUIUtils=b(a,a.docReady,a.matchesSelector)
}(window,function(b,d,a){var g={};
g.extend=function(j,k){for(var h in k){j[h]=k[h]
}return j
},g.modulo=function(h,j){return(h%j+j)%j
};
var f=Object.prototype.toString;
g.isArray=function(e){return"[object Array]"==f.call(e)
},g.makeArray=function(j){var k=[];
if(g.isArray(j)){k=j
}else{if(j&&"number"==typeof j.length){for(var h=0,l=j.length;
l>h;
h++){k.push(j[h])
}}else{k.push(j)
}}return k
},g.indexOf=Array.prototype.indexOf?function(h,j){return h.indexOf(j)
}:function(j,k){for(var h=0,l=j.length;
l>h;
h++){if(j[h]===k){return h
}}return -1
},g.removeFrom=function(j,k){var h=g.indexOf(j,k);
-1!=h&&j.splice(h,1)
},g.isElement="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(e){return e instanceof HTMLElement
}:function(e){return e&&"object"==typeof e&&1==e.nodeType&&"string"==typeof e.nodeName
},g.setText=function(){function h(k,e){j=j||(void 0!==document.documentElement.textContent?"textContent":"innerText"),k[j]=e
}var j;
return h
}(),g.getParent=function(h,j){for(;
h!=document.body;
){if(h=h.parentNode,a(h,j)){return h
}}},g.getQueryElement=function(e){return"string"==typeof e?document.querySelector(e):e
},g.handleEvent=function(h){var j="on"+h.type;
this[j]&&this[j](h)
},g.filterFindElements=function(w,n){w=g.makeArray(w);
for(var l=[],j=0,x=w.length;
x>j;
j++){var q=w[j];
if(g.isElement(q)){if(n){a(q,n)&&l.push(q);
for(var m=q.querySelectorAll(n),k=0,v=m.length;
v>k;
k++){l.push(m[k])
}}else{l.push(q)
}}}return l
},g.debounceMethod=function(j,k,h){var m=j.prototype[k],l=k+"Timeout";
j.prototype[k]=function(){var n=this[l];
n&&clearTimeout(n);
var p=arguments,o=this;
this[l]=setTimeout(function(){m.apply(o,p),delete o[l]
},h||100)
}
},g.toDashed=function(e){return e.replace(/(.)([A-Z])/g,function(j,k,h){return k+"-"+h
}).toLowerCase()
};
var c=b.console;
return g.htmlInit=function(e,h){d(function(){for(var o=g.toDashed(h),z=document.querySelectorAll(".js-"+o),w="data-"+o+"-options",m=0,j=z.length;
j>m;
m++){var x,r=z[m],q=r.getAttribute(w);
try{x=q&&JSON.parse(q)
}catch(k){c&&c.error("Error parsing "+w+" on "+r.nodeName.toLowerCase()+(r.id?"#"+r.id:"")+": "+k);
continue
}var n=new e(r,x),v=b.jQuery;
v&&v.data(r,h,n)
}})
},g
}),function(a,b){"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property","fizzy-ui-utils/utils"],function(c,f,e,d){return b(a,c,f,e,d)
}):"object"==typeof exports?module.exports=b(a,require("wolfy87-eventemitter"),require("get-size"),require("desandro-get-style-property"),require("fizzy-ui-utils")):(a.Outlayer={},a.Outlayer.Item=b(a,a.EventEmitter,a.getSize,a.getStyleProperty,a.fizzyUIUtils))
}(window,function(w,K,G,D,C){function A(a){for(var c in a){return !1
}return c=null,!0
}function z(a,c){a&&(this.element=a,this.layout=c,this.position={x:0,y:0},this._create())
}var N=w.getComputedStyle,H=N?function(a){return N(a,null)
}:function(a){return a.currentStyle
},B=D("transition"),q=D("transform"),M=B&&q,L=!!D("perspective"),F={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[B],J=["transform","transition","transitionDuration","transitionProperty"],b=function(){for(var c={},f=0,a=J.length;
a>f;
f++){var g=J[f],d=D(g);
d&&d!==g&&(c[g]=d)
}return c
}();
C.extend(z.prototype,K.prototype),z.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})
},z.prototype.handleEvent=function(a){var c="on"+a.type;
this[c]&&this[c](a)
},z.prototype.getSize=function(){this.size=G(this.element)
},z.prototype.css=function(c){var d=this.element.style;
for(var a in c){var f=b[a]||a;
d[f]=c[a]
}},z.prototype.getPosition=function(){var c=H(this.element),g=this.layout.options,a=g.isOriginLeft,l=g.isOriginTop,h=parseInt(c[a?"left":"right"],10),f=parseInt(c[l?"top":"bottom"],10);
h=isNaN(h)?0:h,f=isNaN(f)?0:f;
var d=this.layout.size;
h-=a?d.paddingLeft:d.paddingRight,f-=l?d.paddingTop:d.paddingBottom,this.position.x=h,this.position.y=f
},z.prototype.layoutPosition=function(){var O=this.layout.size,v=this.layout.options,l={},g=v.isOriginLeft?"paddingLeft":"paddingRight",f=v.isOriginLeft?"left":"right",c=v.isOriginLeft?"right":"left",P=this.position.x+O[g];
P=v.percentPosition&&!v.isHorizontal?100*(P/O.width)+"%":P+"px",l[f]=P,l[c]="";
var x=v.isOriginTop?"paddingTop":"paddingBottom",m=v.isOriginTop?"top":"bottom",d=v.isOriginTop?"bottom":"top",y=this.position.y+O[x];
y=v.percentPosition&&v.isHorizontal?100*(y/O.height)+"%":y+"px",l[m]=y,l[d]="",this.css(l),this.emitEvent("layout",[this])
};
var E=L?function(a,c){return"translate3d("+a+"px, "+c+"px, 0)"
}:function(a,c){return"translate("+a+"px, "+c+"px)"
};
z.prototype._transitionTo=function(O,v){this.getPosition();
var l=this.position.x,g=this.position.y,f=parseInt(O,10),c=parseInt(v,10),P=f===this.position.x&&c===this.position.y;
if(this.setPosition(O,v),P&&!this.isTransitioning){return this.layoutPosition(),void 0
}var x=O-l,m=v-g,d={},y=this.layout.options;
x=y.isOriginLeft?x:-x,m=y.isOriginTop?m:-m,d.transform=E(x,m),this.transition({to:d,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})
},z.prototype.goTo=function(a,c){this.setPosition(a,c),this.layoutPosition()
},z.prototype.moveTo=M?z.prototype._transitionTo:z.prototype.goTo,z.prototype.setPosition=function(a,c){this.position.x=parseInt(a,10),this.position.y=parseInt(c,10)
},z.prototype._nonTransition=function(a){this.css(a.to),a.isCleaning&&this._removeStyles(a.to);
for(var c in a.onTransitionEnd){a.onTransitionEnd[c].call(this)
}},z.prototype._transition=function(c){if(!parseFloat(this.layout.options.transitionDuration)){return this._nonTransition(c),void 0
}var d=this._transn;
for(var a in c.onTransitionEnd){d.onEnd[a]=c.onTransitionEnd[a]
}for(a in c.to){d.ingProperties[a]=!0,c.isCleaning&&(d.clean[a]=!0)
}if(c.from){this.css(c.from);
var f=this.element.offsetHeight;
f=null
}this.enableTransition(c.to),this.css(c.to),this.isTransitioning=!0
};
var I=q&&C.toDashed(q)+",opacity";
z.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:I,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(F,this,!1))
},z.prototype.transition=z.prototype[B?"_transition":"_nonTransition"],z.prototype.onwebkitTransitionEnd=function(a){this.ontransitionend(a)
},z.prototype.onotransitionend=function(a){this.ontransitionend(a)
};
var k={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};
z.prototype.ontransitionend=function(c){if(c.target===this.element){var d=this._transn,a=k[c.propertyName]||c.propertyName;
if(delete d.ingProperties[a],A(d.ingProperties)&&this.disableTransition(),a in d.clean&&(this.element.style[c.propertyName]="",delete d.clean[a]),a in d.onEnd){var f=d.onEnd[a];
f.call(this),delete d.onEnd[a]
}this.emitEvent("transitionEnd",[this])
}},z.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(F,this,!1),this.isTransitioning=!1
},z.prototype._removeStyles=function(c){var d={};
for(var a in c){d[a]=""
}this.css(d)
};
var j={transitionProperty:"",transitionDuration:""};
return z.prototype.removeTransitionStyles=function(){this.css(j)
},z.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])
},z.prototype.remove=function(){if(!B||!parseFloat(this.layout.options.transitionDuration)){return this.removeElem(),void 0
}var a=this;
this.once("transitionEnd",function(){a.removeElem()
}),this.hide()
},z.prototype.reveal=function(){delete this.isHidden,this.css({display:""});
var c=this.layout.options,d={},a=this.getHideRevealTransitionEndProperty("visibleStyle");
d[a]=this.onRevealTransitionEnd,this.transition({from:c.hiddenStyle,to:c.visibleStyle,isCleaning:!0,onTransitionEnd:d})
},z.prototype.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")
},z.prototype.getHideRevealTransitionEndProperty=function(c){var d=this.layout.options[c];
if(d.opacity){return"opacity"
}for(var a in d){return a
}},z.prototype.hide=function(){this.isHidden=!0,this.css({display:""});
var c=this.layout.options,d={},a=this.getHideRevealTransitionEndProperty("hiddenStyle");
d[a]=this.onHideTransitionEnd,this.transition({from:c.visibleStyle,to:c.hiddenStyle,isCleaning:!0,onTransitionEnd:d})
},z.prototype.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))
},z.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})
},z
}),function(a,b){"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","eventEmitter/EventEmitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(c,g,f,e,d){return b(a,c,g,f,e,d)
}):"object"==typeof exports?module.exports=b(a,require("eventie"),require("wolfy87-eventemitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):a.Outlayer=b(a,a.eventie,a.EventEmitter,a.getSize,a.fizzyUIUtils,a.Outlayer.Item)
}(window,function(w,l,j,g,f,b){function x(c,h){var a=f.getQueryElement(c);
if(!a){return q&&q.error("Bad element for "+this.constructor.namespace+": "+(a||c)),void 0
}this.element=a,k&&(this.$element=k(this.element)),this.options=f.extend({},this.constructor.defaults),this.option(h);
var o=++v;
this.element.outlayerGUID=o,m[o]=this,this._create(),this.options.isInitLayout&&this.layout()
}var q=w.console,k=w.jQuery,d=function(){},v=0,m={};
return x.namespace="outlayer",x.Item=b,x.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},f.extend(x.prototype,j.prototype),x.prototype.option=function(a){f.extend(this.options,a)
},x.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),f.extend(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()
},x.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)
},x.prototype._itemize=function(p){for(var z=this._filterFindItemElements(p),h=this.constructor.Item,B=[],A=0,y=z.length;
y>A;
A++){var u=z[A],c=new h(u,this);
B.push(c)
}return B
},x.prototype._filterFindItemElements=function(a){return f.filterFindElements(a,this.options.itemSelector)
},x.prototype.getItemElements=function(){for(var c=[],h=0,a=this.items.length;
a>h;
h++){c.push(this.items[h].element)
}return c
},x.prototype.layout=function(){this._resetLayout(),this._manageStamps();
var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;
this.layoutItems(this.items,a),this._isLayoutInited=!0
},x.prototype._init=x.prototype.layout,x.prototype._resetLayout=function(){this.getSize()
},x.prototype.getSize=function(){this.size=g(this.element)
},x.prototype._getMeasurement=function(c,n){var a,h=this.options[c];
h?("string"==typeof h?a=this.element.querySelector(h):f.isElement(h)&&(a=h),this[c]=a?g(a)[n]:h):this[c]=0
},x.prototype.layoutItems=function(a,c){a=this._getItemsForLayout(a),this._layoutItems(a,c),this._postLayout()
},x.prototype._getItemsForLayout=function(c){for(var h=[],a=0,r=c.length;
r>a;
a++){var p=c[a];
p.isIgnored||h.push(p)
}return h
},x.prototype._layoutItems=function(c,u){if(this._emitCompleteOnItems("layout",c),c&&c.length){for(var a=[],z=0,y=c.length;
y>z;
z++){var p=c[z],h=this._getItemLayoutPosition(p);
h.item=p,h.isInstant=u||p.isLayoutInstant,a.push(h)
}this._processLayoutQueue(a)
}},x.prototype._getItemLayoutPosition=function(){return{x:0,y:0}
},x.prototype._processLayoutQueue=function(c){for(var h=0,a=c.length;
a>h;
h++){var o=c[h];
this._positionItem(o.item,o.x,o.y,o.isInstant)
}},x.prototype._positionItem=function(c,h,a,o){o?c.goTo(h,a):c.moveTo(h,a)
},x.prototype._postLayout=function(){this.resizeContainer()
},x.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var a=this._getContainerSize();
a&&(this._setContainerMeasure(a.width,!0),this._setContainerMeasure(a.height,!1))
}},x.prototype._getContainerSize=d,x.prototype._setContainerMeasure=function(c,h){if(void 0!==c){var a=this.size;
a.isBorderBox&&(c+=h?a.paddingLeft+a.paddingRight+a.borderLeftWidth+a.borderRightWidth:a.paddingBottom+a.paddingTop+a.borderTopWidth+a.borderBottomWidth),c=Math.max(c,0),this.element.style[h?"width":"height"]=c+"px"
}},x.prototype._emitCompleteOnItems=function(E,C){function A(){y.emitEvent(E+"Complete",[C])
}function z(){F++,F===c&&A()
}var y=this,c=C.length;
if(!C||!c){return A(),void 0
}for(var F=0,D=0,B=C.length;
B>D;
D++){var u=C[D];
u.once(E,z)
}},x.prototype.ignore=function(a){var c=this.getItem(a);
c&&(c.isIgnored=!0)
},x.prototype.unignore=function(a){var c=this.getItem(a);
c&&delete c.isIgnored
},x.prototype.stamp=function(c){if(c=this._find(c)){this.stamps=this.stamps.concat(c);
for(var h=0,a=c.length;
a>h;
h++){var o=c[h];
this.ignore(o)
}}},x.prototype.unstamp=function(c){if(c=this._find(c)){for(var h=0,a=c.length;
a>h;
h++){var o=c[h];
f.removeFrom(this.stamps,o),this.unignore(o)
}}},x.prototype._find=function(a){return a?("string"==typeof a&&(a=this.element.querySelectorAll(a)),a=f.makeArray(a)):void 0
},x.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();
for(var c=0,h=this.stamps.length;
h>c;
c++){var a=this.stamps[c];
this._manageStamp(a)
}}},x.prototype._getBoundingRect=function(){var a=this.element.getBoundingClientRect(),c=this.size;
this._boundingRect={left:a.left+c.paddingLeft+c.borderLeftWidth,top:a.top+c.paddingTop+c.borderTopWidth,right:a.right-(c.paddingRight+c.borderRightWidth),bottom:a.bottom-(c.paddingBottom+c.borderBottomWidth)}
},x.prototype._manageStamp=d,x.prototype._getElementOffset=function(c){var n=c.getBoundingClientRect(),a=this._boundingRect,p=g(c),h={left:n.left-a.left-p.marginLeft,top:n.top-a.top-p.marginTop,right:a.right-n.right-p.marginRight,bottom:a.bottom-n.bottom-p.marginBottom};
return h
},x.prototype.handleEvent=function(a){var c="on"+a.type;
this[c]&&this[c](a)
},x.prototype.bindResize=function(){this.isResizeBound||(l.bind(w,"resize",this),this.isResizeBound=!0)
},x.prototype.unbindResize=function(){this.isResizeBound&&l.unbind(w,"resize",this),this.isResizeBound=!1
},x.prototype.onresize=function(){function a(){c.resize(),delete c.resizeTimeout
}this.resizeTimeout&&clearTimeout(this.resizeTimeout);
var c=this;
this.resizeTimeout=setTimeout(a,100)
},x.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()
},x.prototype.needsResizeLayout=function(){var a=g(this.element),c=this.size&&a;
return c&&a.innerWidth!==this.size.innerWidth
},x.prototype.addItems=function(a){var c=this._itemize(a);
return c.length&&(this.items=this.items.concat(c)),c
},x.prototype.appended=function(a){var c=this.addItems(a);
c.length&&(this.layoutItems(c,!0),this.reveal(c))
},x.prototype.prepended=function(c){var h=this._itemize(c);
if(h.length){var a=this.items.slice(0);
this.items=h.concat(a),this._resetLayout(),this._manageStamps(),this.layoutItems(h,!0),this.reveal(h),this.layoutItems(a)
}},x.prototype.reveal=function(c){this._emitCompleteOnItems("reveal",c);
for(var h=c&&c.length,a=0;
h&&h>a;
a++){var o=c[a];
o.reveal()
}},x.prototype.hide=function(c){this._emitCompleteOnItems("hide",c);
for(var h=c&&c.length,a=0;
h&&h>a;
a++){var o=c[a];
o.hide()
}},x.prototype.revealItemElements=function(a){var c=this.getItems(a);
this.reveal(c)
},x.prototype.hideItemElements=function(a){var c=this.getItems(a);
this.hide(c)
},x.prototype.getItem=function(c){for(var h=0,a=this.items.length;
a>h;
h++){var o=this.items[h];
if(o.element===c){return o
}}},x.prototype.getItems=function(c){c=f.makeArray(c);
for(var p=[],a=0,u=c.length;
u>a;
a++){var o=c[a],h=this.getItem(o);
h&&p.push(h)
}return p
},x.prototype.remove=function(c){var o=this.getItems(c);
if(this._emitCompleteOnItems("remove",o),o&&o.length){for(var a=0,p=o.length;
p>a;
a++){var h=o[a];
h.remove(),f.removeFrom(this.items,h)
}}},x.prototype.destroy=function(){var c=this.element.style;
c.height="",c.position="",c.width="";
for(var h=0,a=this.items.length;
a>h;
h++){var r=this.items[h];
r.destroy()
}this.unbindResize();
var p=this.element.outlayerGUID;
delete m[p],delete this.element.outlayerGUID,k&&k.removeData(this.element,this.constructor.namespace)
},x.data=function(a){a=f.getQueryElement(a);
var c=a&&a.outlayerGUID;
return c&&m[c]
},x.create=function(c,h){function a(){x.apply(this,arguments)
}return Object.create?a.prototype=Object.create(x.prototype):f.extend(a.prototype,x.prototype),a.prototype.constructor=a,a.defaults=f.extend({},x.defaults),f.extend(a.defaults,h),a.prototype.settings={},a.namespace=c,a.data=x.data,a.Item=function(){b.apply(this,arguments)
},a.Item.prototype=new b,f.htmlInit(a,c),k&&k.bridget&&k.bridget(c,a),a
},x.Item=b,x
}),function(a,b){"function"==typeof define&&define.amd?define("packery/js/rect",b):"object"==typeof exports?module.exports=b():(a.Packery=a.Packery||{},a.Packery.Rect=b())
}(window,function(){function a(d){for(var c in a.defaults){this[c]=a.defaults[c]
}for(c in d){this[c]=d[c]
}}var b=window.Packery=function(){};
return b.Rect=a,a.defaults={x:0,y:0,width:0,height:0},a.prototype.contains=function(d){var f=d.width||0,c=d.height||0;
return this.x<=d.x&&this.y<=d.y&&this.x+this.width>=d.x+f&&this.y+this.height>=d.y+c
},a.prototype.overlaps=function(d){var f=this.x+this.width,c=this.y+this.height,h=d.x+d.width,g=d.y+d.height;
return h>this.x&&f>d.x&&g>this.y&&c>d.y
},a.prototype.getMaximalFreeRects=function(h){if(!this.overlaps(h)){return !1
}var d,k=[],j=this.x+this.width,g=this.y+this.height,f=h.x+h.width,c=h.y+h.height;
return this.y<h.y&&(d=new a({x:this.x,y:this.y,width:this.width,height:h.y-this.y}),k.push(d)),j>f&&(d=new a({x:f,y:this.y,width:j-f,height:this.height}),k.push(d)),g>c&&(d=new a({x:this.x,y:c,width:this.width,height:g-c}),k.push(d)),this.x<h.x&&(d=new a({x:this.x,y:this.y,width:h.x-this.x,height:this.height}),k.push(d)),k
},a.prototype.canFit=function(c){return this.width>=c.width&&this.height>=c.height
},a
}),function(b,c){if("function"==typeof define&&define.amd){define("packery/js/packer",["./rect"],c)
}else{if("object"==typeof exports){module.exports=c(require("./rect"))
}else{var a=b.Packery=b.Packery||{};
a.Packer=c(a.Rect)
}}}(window,function(b){function c(f,g,d){this.width=f||0,this.height=g||0,this.sortDirection=d||"downwardLeftToRight",this.reset()
}c.prototype.reset=function(){this.spaces=[],this.newSpaces=[];
var d=new b({x:0,y:0,width:this.width,height:this.height});
this.spaces.push(d),this.sorter=a[this.sortDirection]||a.downwardLeftToRight
},c.prototype.pack=function(f){for(var g=0,d=this.spaces.length;
d>g;
g++){var h=this.spaces[g];
if(h.canFit(f)){this.placeInSpace(f,h);
break
}}},c.prototype.placeInSpace=function(d,f){d.x=f.x,d.y=f.y,this.placed(d)
},c.prototype.placed=function(f){for(var h=[],d=0,k=this.spaces.length;
k>d;
d++){var j=this.spaces[d],g=j.getMaximalFreeRects(f);
g?h.push.apply(h,g):h.push(j)
}this.spaces=h,this.mergeSortSpaces()
},c.prototype.mergeSortSpaces=function(){c.mergeRects(this.spaces),this.spaces.sort(this.sorter)
},c.prototype.addSpace=function(d){this.spaces.push(d),this.mergeSortSpaces()
},c.mergeRects=function(u){for(var m=0,k=u.length;
k>m;
m++){var j=u[m];
if(j){var g=u.slice(0);
g.splice(m,1);
for(var d=0,v=0,q=g.length;
q>v;
v++){var l=g[v],f=m>v?0:1;
j.contains(l)&&(u.splice(v+f-d,1),d++)
}}}return u
};
var a={downwardLeftToRight:function(d,f){return d.y-f.y||d.x-f.x
},rightwardTopToBottom:function(d,f){return d.x-f.x||d.y-f.y
}};
return c
}),function(a,b){"function"==typeof define&&define.amd?define("packery/js/item",["get-style-property/get-style-property","outlayer/outlayer","./rect"],b):"object"==typeof exports?module.exports=b(require("desandro-get-style-property"),require("outlayer"),require("./rect")):a.Packery.Item=b(a.getStyleProperty,a.Outlayer,a.Packery.Rect)
}(window,function(b,d,a){var g=b("transform"),f=function(){d.Item.apply(this,arguments)
};
f.prototype=new d.Item;
var c=f.prototype._create;
return f.prototype._create=function(){c.call(this),this.rect=new a,this.placeRect=new a
},f.prototype.dragStart=function(){this.getPosition(),this.removeTransitionStyles(),this.isTransitioning&&g&&(this.element.style[g]="none"),this.getSize(),this.isPlacing=!0,this.needsPositioning=!1,this.positionPlaceRect(this.position.x,this.position.y),this.isTransitioning=!1,this.didDrag=!1
},f.prototype.dragMove=function(j,k){this.didDrag=!0;
var h=this.layout.size;
j-=h.paddingLeft,k-=h.paddingTop,this.positionPlaceRect(j,k)
},f.prototype.dragStop=function(){this.getPosition();
var h=this.position.x!=this.placeRect.x,j=this.position.y!=this.placeRect.y;
this.needsPositioning=h||j,this.didDrag=!1
},f.prototype.positionPlaceRect=function(j,k,h){this.placeRect.x=this.getPlaceRectCoord(j,!0),this.placeRect.y=this.getPlaceRectCoord(k,!1,h)
},f.prototype.getPlaceRectCoord=function(x,v,q){var m=v?"Width":"Height",l=this.size["outer"+m],j=this.layout[v?"columnWidth":"rowHeight"],y=this.layout.size["inner"+m];
v||(y=Math.max(y,this.layout.maxY),this.layout.rowHeight||(y-=this.layout.gutter));
var w;
if(j){j+=this.layout.gutter,y+=v?this.layout.gutter:0,x=Math.round(x/j);
var u;
u=this.layout.options.isHorizontal?v?"ceil":"floor":v?"floor":"ceil";
var k=Math[u](y/j);
k-=Math.ceil(l/j),w=k
}else{w=y-l
}return x=q?x:Math.min(x,w),x*=j||1,Math.max(0,x)
},f.prototype.copyPlaceRectPosition=function(){this.rect.x=this.placeRect.x,this.rect.y=this.placeRect.y
},f.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.layout.packer.addSpace(this.rect),this.emitEvent("remove",[this])
},f
}),function(a,b){"function"==typeof define&&define.amd?define(["classie/classie","get-size/get-size","outlayer/outlayer","packery/js/rect","packery/js/packer","packery/js/item"],b):"object"==typeof exports?module.exports=b(require("desandro-classie"),require("get-size"),require("outlayer"),require("./rect"),require("./packer"),require("./item")):a.Packery=b(a.classie,a.getSize,a.Outlayer,a.Packery.Rect,a.Packery.Packer,a.Packery.Item)
}(window,function(l,j,f,d,c,b){function m(a,h){return a.position.y-h.position.y||a.position.x-h.position.x
}function k(a,h){return a.position.x-h.position.x||a.position.y-h.position.y
}d.prototype.canFit=function(a){return this.width>=a.width-1&&this.height>=a.height-1
};
var g=f.create("packery");
return g.Item=b,g.prototype._create=function(){f.prototype._create.call(this),this.packer=new c,this.stamp(this.options.stamped);
var a=this;
this.handleDraggabilly={dragStart:function(){a.itemDragStart(this.element)
},dragMove:function(){a.itemDragMove(this.element,this.position.x,this.position.y)
},dragEnd:function(){a.itemDragEnd(this.element)
}},this.handleUIDraggable={start:function(h){a.itemDragStart(h.currentTarget)
},drag:function(n,h){a.itemDragMove(n.currentTarget,h.position.left,h.position.top)
},stop:function(h){a.itemDragEnd(h.currentTarget)
}}
},g.prototype._resetLayout=function(){this.getSize(),this._getMeasurements();
var a=this.packer;
this.options.isHorizontal?(a.width=Number.POSITIVE_INFINITY,a.height=this.size.innerHeight+this.gutter,a.sortDirection="rightwardTopToBottom"):(a.width=this.size.innerWidth+this.gutter,a.height=Number.POSITIVE_INFINITY,a.sortDirection="downwardLeftToRight"),a.reset(),this.maxY=0,this.maxX=0
},g.prototype._getMeasurements=function(){this._getMeasurement("columnWidth","width"),this._getMeasurement("rowHeight","height"),this._getMeasurement("gutter","width")
},g.prototype._getItemLayoutPosition=function(a){return this._packItem(a),a.rect
},g.prototype._packItem=function(a){this._setRectSize(a.element,a.rect),this.packer.pack(a.rect),this._setMaxXY(a.rect)
},g.prototype._setMaxXY=function(a){this.maxX=Math.max(a.x+a.width,this.maxX),this.maxY=Math.max(a.y+a.height,this.maxY)
},g.prototype._setRectSize=function(e,a){var q=j(e),p=q.outerWidth,h=q.outerHeight;
(p||h)&&(p=this._applyGridGutter(p,this.columnWidth),h=this._applyGridGutter(h,this.rowHeight)),a.width=Math.min(p,this.packer.width),a.height=Math.min(h,this.packer.height)
},g.prototype._applyGridGutter=function(h,o){if(!o){return h+this.gutter
}o+=this.gutter;
var a=h%o,p=a&&1>a?"round":"ceil";
return h=Math[p](h/o)*o
},g.prototype._getContainerSize=function(){return this.options.isHorizontal?{width:this.maxX-this.gutter}:{height:this.maxY-this.gutter}
},g.prototype._manageStamp=function(h){var n,a=this.getItem(h);
if(a&&a.isPlacing){n=a.placeRect
}else{var p=this._getElementOffset(h);
n=new d({x:this.options.isOriginLeft?p.left:p.right,y:this.options.isOriginTop?p.top:p.bottom})
}this._setRectSize(h,n),this.packer.placed(n),this._setMaxXY(n)
},g.prototype.sortItemsByPosition=function(){var a=this.options.isHorizontal?k:m;
this.items.sort(a)
},g.prototype.fit=function(h,o,a){var p=this.getItem(h);
p&&(this._getMeasurements(),this.stamp(p.element),p.getSize(),p.isPlacing=!0,o=void 0===o?p.rect.x:o,a=void 0===a?p.rect.y:a,p.positionPlaceRect(o,a,!0),this._bindFitEvents(p),p.moveTo(p.placeRect.x,p.placeRect.y),this.layout(),this.unstamp(p.element),this.sortItemsByPosition(),p.isPlacing=!1,p.copyPlaceRectPosition())
},g.prototype._bindFitEvents=function(h){function o(){p++,2==p&&a.emitEvent("fitComplete",[h])
}var a=this,p=0;
h.on("layout",function(){return o(),!0
}),this.on("layoutComplete",function(){return o(),!0
})
},g.prototype.resize=function(){var e=j(this.element),a=this.size&&e,h=this.options.isHorizontal?"innerHeight":"innerWidth";
a&&e[h]==this.size[h]||this.layout()
},g.prototype.itemDragStart=function(a){this.stamp(a);
var h=this.getItem(a);
h&&h.dragStart()
},g.prototype.itemDragMove=function(h,q,a){function u(){p.layout(),delete p.dragTimeout
}var s=this.getItem(h);
s&&s.dragMove(q,a);
var p=this;
this.clearDragTimeout(),this.dragTimeout=setTimeout(u,40)
},g.prototype.clearDragTimeout=function(){this.dragTimeout&&clearTimeout(this.dragTimeout)
},g.prototype.itemDragEnd=function(h){var a,q=this.getItem(h);
if(q&&(a=q.didDrag,q.dragStop()),!q||!a&&!q.needsPositioning){return this.unstamp(h),void 0
}l.add(q.element,"is-positioning-post-drag");
var p=this._getDragEndLayoutComplete(h,q);
q.needsPositioning?(q.on("layout",p),q.moveTo(q.placeRect.x,q.placeRect.y)):q&&q.copyPlaceRectPosition(),this.clearDragTimeout(),this.on("layoutComplete",p),this.layout()
},g.prototype._getDragEndLayoutComplete=function(q,a){var v=a&&a.needsPositioning,u=0,p=v?2:1,h=this;
return function(){return u++,u!=p?!0:(a&&(l.remove(a.element,"is-positioning-post-drag"),a.isPlacing=!1,a.copyPlaceRectPosition()),h.unstamp(q),h.sortItemsByPosition(),v&&h.emitEvent("dragItemPositioned",[a]),!0)
}
},g.prototype.bindDraggabillyEvents=function(a){a.on("dragStart",this.handleDraggabilly.dragStart),a.on("dragMove",this.handleDraggabilly.dragMove),a.on("dragEnd",this.handleDraggabilly.dragEnd)
},g.prototype.bindUIDraggableEvents=function(a){a.on("dragstart",this.handleUIDraggable.start).on("drag",this.handleUIDraggable.drag).on("dragstop",this.handleUIDraggable.stop)
},g.Rect=d,g.Packer=c,g
});
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{if(typeof exports!=="undefined"){module.exports=a(require("jquery"))
}else{a(jQuery)
}}}(function(a){var b=window.Slick||{};
b=(function(){var c=0;
function d(h,k){var g=this,e,j,f;
g.defaults={accessibility:true,adaptiveHeight:false,appendArrows:a(h),appendDots:a(h),arrows:true,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="previous">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="next">Next</button>',autoplay:false,autoplaySpeed:3000,centerMode:false,centerPadding:"50px",cssEase:"ease",customPaging:function(m,l){return'<button type="button" data-role="none">'+(l+1)+"</button>"
},dots:false,dotsClass:"slick-dots",draggable:true,easing:"linear",edgeFriction:0.35,fade:false,focusOnSelect:false,infinite:true,initialSlide:0,lazyLoad:"ondemand",mobileFirst:false,pauseOnHover:true,pauseOnDotsHover:false,respondTo:"window",responsive:null,rows:1,rtl:false,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:true,swipeToSlide:false,touchMove:true,touchThreshold:5,useCSS:true,variableWidth:false,vertical:false,verticalSwiping:false,waitForAnimate:true};
g.initials={animating:false,dragging:false,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:false,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:false};
a.extend(g,g.initials);
g.activeBreakpoint=null;
g.animType=null;
g.animProp=null;
g.breakpoints=[];
g.breakpointSettings=[];
g.cssTransitions=false;
g.hidden="hidden";
g.paused=false;
g.positionProp=null;
g.respondTo=null;
g.rowCount=1;
g.shouldClick=true;
g.$slider=a(h);
g.$slidesCache=null;
g.transformType=null;
g.transitionType=null;
g.visibilityChange="visibilitychange";
g.windowWidth=0;
g.windowTimer=null;
e=a(h).data("slick")||{};
g.options=a.extend({},g.defaults,e,k);
g.currentSlide=g.options.initialSlide;
g.originalSettings=g.options;
j=g.options.responsive||null;
if(j&&j.length>-1){g.respondTo=g.options.respondTo||"window";
for(f in j){if(j.hasOwnProperty(f)){g.breakpoints.push(j[f].breakpoint);
g.breakpointSettings[j[f].breakpoint]=j[f].settings
}}g.breakpoints.sort(function(m,l){if(g.options.mobileFirst===true){return m-l
}else{return l-m
}})
}if(typeof document.mozHidden!=="undefined"){g.hidden="mozHidden";
g.visibilityChange="mozvisibilitychange"
}else{if(typeof document.msHidden!=="undefined"){g.hidden="msHidden";
g.visibilityChange="msvisibilitychange"
}else{if(typeof document.webkitHidden!=="undefined"){g.hidden="webkitHidden";
g.visibilityChange="webkitvisibilitychange"
}}}g.autoPlay=a.proxy(g.autoPlay,g);
g.autoPlayClear=a.proxy(g.autoPlayClear,g);
g.changeSlide=a.proxy(g.changeSlide,g);
g.clickHandler=a.proxy(g.clickHandler,g);
g.selectHandler=a.proxy(g.selectHandler,g);
g.setPosition=a.proxy(g.setPosition,g);
g.swipeHandler=a.proxy(g.swipeHandler,g);
g.dragHandler=a.proxy(g.dragHandler,g);
g.keyHandler=a.proxy(g.keyHandler,g);
g.autoPlayIterator=a.proxy(g.autoPlayIterator,g);
g.instanceUid=c++;
g.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/;
g.init();
g.checkResponsive(true)
}return d
}());
b.prototype.addSlide=b.prototype.slickAdd=function(c,e,f){var d=this;
if(typeof(e)==="boolean"){f=e;
e=null
}else{if(e<0||(e>=d.slideCount)){return false
}}d.unload();
if(typeof(e)==="number"){if(e===0&&d.$slides.length===0){a(c).appendTo(d.$slideTrack)
}else{if(f){a(c).insertBefore(d.$slides.eq(e))
}else{a(c).insertAfter(d.$slides.eq(e))
}}}else{if(f===true){a(c).prependTo(d.$slideTrack)
}else{a(c).appendTo(d.$slideTrack)
}}d.$slides=d.$slideTrack.children(this.options.slide);
d.$slideTrack.children(this.options.slide).detach();
d.$slideTrack.append(d.$slides);
d.$slides.each(function(g,h){a(h).attr("data-slick-index",g)
});
d.$slidesCache=d.$slides;
d.reinit()
};
b.prototype.animateHeight=function(){var d=this;
if(d.options.slidesToShow===1&&d.options.adaptiveHeight===true&&d.options.vertical===false){var c=d.$slides.eq(d.currentSlide).outerHeight(true);
d.$list.animate({height:c},d.options.speed)
}};
b.prototype.animateSlide=function(f,e){var d={},c=this;
c.animateHeight();
if(c.options.rtl===true&&c.options.vertical===false){f=-f
}if(c.transformsEnabled===false){if(c.options.vertical===false){c.$slideTrack.animate({left:f},c.options.speed,c.options.easing,e)
}else{c.$slideTrack.animate({top:f},c.options.speed,c.options.easing,e)
}}else{if(c.cssTransitions===false){if(c.options.rtl===true){c.currentLeft=-(c.currentLeft)
}a({animStart:c.currentLeft}).animate({animStart:f},{duration:c.options.speed,easing:c.options.easing,step:function(g){g=Math.ceil(g);
if(c.options.vertical===false){d[c.animType]="translate("+g+"px, 0px)";
c.$slideTrack.css(d)
}else{d[c.animType]="translate(0px,"+g+"px)";
c.$slideTrack.css(d)
}},complete:function(){if(e){e.call()
}}})
}else{c.applyTransition();
f=Math.ceil(f);
if(c.options.vertical===false){d[c.animType]="translate3d("+f+"px, 0px, 0px)"
}else{d[c.animType]="translate3d(0px,"+f+"px, 0px)"
}c.$slideTrack.css(d);
if(e){setTimeout(function(){c.disableTransition();
e.call()
},c.options.speed)
}}}};
b.prototype.asNavFor=function(e){var d=this,c=d.options.asNavFor!==null?a(d.options.asNavFor).slick("getSlick"):null;
if(c!==null){c.slideHandler(e,true)
}};
b.prototype.applyTransition=function(c){var d=this,e={};
if(d.options.fade===false){e[d.transitionType]=d.transformType+" "+d.options.speed+"ms "+d.options.cssEase
}else{e[d.transitionType]="opacity "+d.options.speed+"ms "+d.options.cssEase
}if(d.options.fade===false){d.$slideTrack.css(e)
}else{d.$slides.eq(c).css(e)
}};
b.prototype.autoPlay=function(){var c=this;
if(c.autoPlayTimer){clearInterval(c.autoPlayTimer)
}if(c.slideCount>c.options.slidesToShow&&c.paused!==true){c.autoPlayTimer=setInterval(c.autoPlayIterator,c.options.autoplaySpeed)
}};
b.prototype.autoPlayClear=function(){var c=this;
if(c.autoPlayTimer){clearInterval(c.autoPlayTimer)
}};
b.prototype.autoPlayIterator=function(){var c=this;
if(c.options.infinite===false){if(c.direction===1){if((c.currentSlide+1)===c.slideCount-1){c.direction=0
}c.slideHandler(c.currentSlide+c.options.slidesToScroll)
}else{if((c.currentSlide-1===0)){c.direction=1
}c.slideHandler(c.currentSlide-c.options.slidesToScroll)
}}else{c.slideHandler(c.currentSlide+c.options.slidesToScroll)
}};
b.prototype.buildArrows=function(){var c=this;
if(c.options.arrows===true&&c.slideCount>c.options.slidesToShow){c.$prevArrow=a(c.options.prevArrow);
c.$nextArrow=a(c.options.nextArrow);
if(c.htmlExpr.test(c.options.prevArrow)){c.$prevArrow.appendTo(c.options.appendArrows)
}if(c.htmlExpr.test(c.options.nextArrow)){c.$nextArrow.appendTo(c.options.appendArrows)
}if(c.options.infinite!==true){c.$prevArrow.addClass("slick-disabled")
}}};
b.prototype.buildDots=function(){var d=this,e,c;
if(d.options.dots===true&&d.slideCount>d.options.slidesToShow){c='<ul class="'+d.options.dotsClass+'">';
for(e=0;
e<=d.getDotCount();
e+=1){c+="<li>"+d.options.customPaging.call(this,d,e)+"</li>"
}c+="</ul>";
d.$dots=a(c).appendTo(d.options.appendDots);
d.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")
}};
b.prototype.buildOut=function(){var c=this;
c.$slides=c.$slider.children(":not(.slick-cloned)").addClass("slick-slide");
c.slideCount=c.$slides.length;
c.$slides.each(function(d,e){a(e).attr("data-slick-index",d)
});
c.$slidesCache=c.$slides;
c.$slider.addClass("slick-slider");
c.$slideTrack=(c.slideCount===0)?a('<div class="slick-track"/>').appendTo(c.$slider):c.$slides.wrapAll('<div class="slick-track"/>').parent();
c.$list=c.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();
c.$slideTrack.css("opacity",0);
if(c.options.centerMode===true||c.options.swipeToSlide===true){c.options.slidesToScroll=1
}a("img[data-lazy]",c.$slider).not("[src]").addClass("slick-loading");
c.setupInfinite();
c.buildArrows();
c.buildDots();
c.updateDots();
if(c.options.accessibility===true){c.$list.prop("tabIndex",0)
}c.setSlideClasses(typeof this.currentSlide==="number"?this.currentSlide:0);
if(c.options.draggable===true){c.$list.addClass("draggable")
}};
b.prototype.buildRows=function(){var n=this,m,l,j,d,k,h,e;
d=document.createDocumentFragment();
h=n.$slider.children();
if(n.options.rows>1){e=n.options.slidesPerRow*n.options.rows;
k=Math.ceil(h.length/e);
for(m=0;
m<k;
m++){var f=document.createElement("div");
for(l=0;
l<n.options.rows;
l++){var o=document.createElement("div");
for(j=0;
j<n.options.slidesPerRow;
j++){var g=(m*e+((l*n.options.slidesPerRow)+j));
if(h.get(g)){o.appendChild(h.get(g))
}}f.appendChild(o)
}d.appendChild(f)
}n.$slider.html(d);
n.$slider.children().children().children().width((100/n.options.slidesPerRow)+"%").css({display:"inline-block"})
}};
b.prototype.checkResponsive=function(e){var d=this,c,j,h;
var g=d.$slider.width();
var f=window.innerWidth||a(window).width();
if(d.respondTo==="window"){h=f
}else{if(d.respondTo==="slider"){h=g
}else{if(d.respondTo==="min"){h=Math.min(f,g)
}}}if(d.originalSettings.responsive&&d.originalSettings.responsive.length>-1&&d.originalSettings.responsive!==null){j=null;
for(c in d.breakpoints){if(d.breakpoints.hasOwnProperty(c)){if(d.originalSettings.mobileFirst===false){if(h<d.breakpoints[c]){j=d.breakpoints[c]
}}else{if(h>d.breakpoints[c]){j=d.breakpoints[c]
}}}}if(j!==null){if(d.activeBreakpoint!==null){if(j!==d.activeBreakpoint){d.activeBreakpoint=j;
if(d.breakpointSettings[j]==="unslick"){d.unslick()
}else{d.options=a.extend({},d.originalSettings,d.breakpointSettings[j]);
if(e===true){d.currentSlide=d.options.initialSlide
}d.refresh()
}}}else{d.activeBreakpoint=j;
if(d.breakpointSettings[j]==="unslick"){d.unslick()
}else{d.options=a.extend({},d.originalSettings,d.breakpointSettings[j]);
if(e===true){d.currentSlide=d.options.initialSlide
}d.refresh()
}}}else{if(d.activeBreakpoint!==null){d.activeBreakpoint=null;
d.options=d.originalSettings;
if(e===true){d.currentSlide=d.options.initialSlide
}d.refresh()
}}}};
b.prototype.changeSlide=function(g,k){var e=this,c=a(g.target),j,f,h;
c.is("a")&&g.preventDefault();
h=(e.slideCount%e.options.slidesToScroll!==0);
j=h?0:(e.slideCount-e.currentSlide)%e.options.slidesToScroll;
switch(g.data.message){case"previous":f=j===0?e.options.slidesToScroll:e.options.slidesToShow-j;
if(e.slideCount>e.options.slidesToShow){e.slideHandler(e.currentSlide-f,false,k)
}break;
case"next":f=j===0?e.options.slidesToScroll:j;
if(e.slideCount>e.options.slidesToShow){e.slideHandler(e.currentSlide+f,false,k)
}break;
case"index":var d=g.data.index===0?0:g.data.index||a(g.target).parent().index()*e.options.slidesToScroll;
e.slideHandler(e.checkNavigable(d),false,k);
break;
default:return
}};
b.prototype.checkNavigable=function(d){var c=this,e,f;
e=c.getNavigableIndexes();
f=0;
if(d>e[e.length-1]){d=e[e.length-1]
}else{for(var g in e){if(d<e[g]){d=f;
break
}f=e[g]
}}return d
};
b.prototype.cleanUpEvents=function(){var c=this;
if(c.options.dots===true&&c.slideCount>c.options.slidesToShow){a("li",c.$dots).off("click.slick",c.changeSlide)
}if(c.options.dots===true&&c.options.pauseOnDotsHover===true&&c.options.autoplay===true){a("li",c.$dots).off("mouseenter.slick",c.setPaused.bind(c,true)).off("mouseleave.slick",c.setPaused.bind(c,false))
}if(c.options.arrows===true&&c.slideCount>c.options.slidesToShow){c.$prevArrow&&c.$prevArrow.off("click.slick",c.changeSlide);
c.$nextArrow&&c.$nextArrow.off("click.slick",c.changeSlide)
}c.$list.off("touchstart.slick mousedown.slick",c.swipeHandler);
c.$list.off("touchmove.slick mousemove.slick",c.swipeHandler);
c.$list.off("touchend.slick mouseup.slick",c.swipeHandler);
c.$list.off("touchcancel.slick mouseleave.slick",c.swipeHandler);
c.$list.off("click.slick",c.clickHandler);
if(c.options.autoplay===true){a(document).off(c.visibilityChange,c.visibility)
}c.$list.off("mouseenter.slick",c.setPaused.bind(c,true));
c.$list.off("mouseleave.slick",c.setPaused.bind(c,false));
if(c.options.accessibility===true){c.$list.off("keydown.slick",c.keyHandler)
}if(c.options.focusOnSelect===true){a(c.$slideTrack).children().off("click.slick",c.selectHandler)
}a(window).off("orientationchange.slick.slick-"+c.instanceUid,c.orientationChange);
a(window).off("resize.slick.slick-"+c.instanceUid,c.resize);
a("[draggable!=true]",c.$slideTrack).off("dragstart",c.preventDefault);
a(window).off("load.slick.slick-"+c.instanceUid,c.setPosition);
a(document).off("ready.slick.slick-"+c.instanceUid,c.setPosition)
};
b.prototype.cleanUpRows=function(){var d=this,c;
if(d.options.rows>1){c=d.$slides.children().children();
c.removeAttr("style");
d.$slider.html(c)
}};
b.prototype.clickHandler=function(d){var c=this;
if(c.shouldClick===false){d.stopImmediatePropagation();
d.stopPropagation();
d.preventDefault()
}};
b.prototype.destroy=function(){var c=this;
c.autoPlayClear();
c.touchObject={};
c.cleanUpEvents();
a(".slick-cloned",c.$slider).remove();
if(c.$dots){c.$dots.remove()
}if(c.$prevArrow&&(typeof c.options.prevArrow!=="object")){c.$prevArrow.remove()
}if(c.$nextArrow&&(typeof c.options.nextArrow!=="object")){c.$nextArrow.remove()
}if(c.$slides){c.$slides.removeClass("slick-slide slick-active slick-center slick-visible").attr("aria-hidden","true").removeAttr("data-slick-index").css({position:"",left:"",top:"",zIndex:"",opacity:"",width:""});
c.$slider.html(c.$slides)
}c.cleanUpRows();
c.$slider.removeClass("slick-slider");
c.$slider.removeClass("slick-initialized")
};
b.prototype.disableTransition=function(c){var d=this,e={};
e[d.transitionType]="";
if(d.options.fade===false){d.$slideTrack.css(e)
}else{d.$slides.eq(c).css(e)
}};
b.prototype.fadeSlide=function(d,e){var c=this;
if(c.cssTransitions===false){c.$slides.eq(d).css({zIndex:1000});
c.$slides.eq(d).animate({opacity:1},c.options.speed,c.options.easing,e)
}else{c.applyTransition(d);
c.$slides.eq(d).css({opacity:1,zIndex:1000});
if(e){setTimeout(function(){c.disableTransition(d);
e.call()
},c.options.speed)
}}};
b.prototype.filterSlides=b.prototype.slickFilter=function(d){var c=this;
if(d!==null){c.unload();
c.$slideTrack.children(this.options.slide).detach();
c.$slidesCache.filter(d).appendTo(c.$slideTrack);
c.reinit()
}};
b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var c=this;
return c.currentSlide
};
b.prototype.getDotCount=function(){var d=this;
var f=0;
var c=0;
var e=0;
if(d.options.infinite===true){e=Math.ceil(d.slideCount/d.options.slidesToScroll)
}else{if(d.options.centerMode===true){e=d.slideCount
}else{while(f<d.slideCount){++e;
f=c+d.options.slidesToShow;
c+=d.options.slidesToScroll<=d.options.slidesToShow?d.options.slidesToScroll:d.options.slidesToShow
}}}return e-1
};
b.prototype.getLeft=function(f){var d=this,h,e,c=0,g;
d.slideOffset=0;
e=d.$slides.first().outerHeight();
if(d.options.infinite===true){if(d.slideCount>d.options.slidesToShow){d.slideOffset=(d.slideWidth*d.options.slidesToShow)*-1;
c=(e*d.options.slidesToShow)*-1
}if(d.slideCount%d.options.slidesToScroll!==0){if(f+d.options.slidesToScroll>d.slideCount&&d.slideCount>d.options.slidesToShow){if(f>d.slideCount){d.slideOffset=((d.options.slidesToShow-(f-d.slideCount))*d.slideWidth)*-1;
c=((d.options.slidesToShow-(f-d.slideCount))*e)*-1
}else{d.slideOffset=((d.slideCount%d.options.slidesToScroll)*d.slideWidth)*-1;
c=((d.slideCount%d.options.slidesToScroll)*e)*-1
}}}}else{if(f+d.options.slidesToShow>d.slideCount){d.slideOffset=((f+d.options.slidesToShow)-d.slideCount)*d.slideWidth;
c=((f+d.options.slidesToShow)-d.slideCount)*e
}}if(d.slideCount<=d.options.slidesToShow){d.slideOffset=0;
c=0
}if(d.options.centerMode===true&&d.options.infinite===true){d.slideOffset+=d.slideWidth*Math.floor(d.options.slidesToShow/2)-d.slideWidth
}else{if(d.options.centerMode===true){d.slideOffset=0;
d.slideOffset+=d.slideWidth*Math.floor(d.options.slidesToShow/2)
}}if(d.options.vertical===false){h=((f*d.slideWidth)*-1)+d.slideOffset
}else{h=((f*e)*-1)+c
}if(d.options.variableWidth===true){if(d.slideCount<=d.options.slidesToShow||d.options.infinite===false){g=d.$slideTrack.children(".slick-slide").eq(f)
}else{g=d.$slideTrack.children(".slick-slide").eq(f+d.options.slidesToShow)
}h=g[0]?g[0].offsetLeft*-1:0;
if(d.options.centerMode===true){if(d.options.infinite===false){g=d.$slideTrack.children(".slick-slide").eq(f)
}else{g=d.$slideTrack.children(".slick-slide").eq(f+d.options.slidesToShow+1)
}h=g[0]?g[0].offsetLeft*-1:0;
h+=(d.$list.width()-g.outerWidth())/2
}}return h
};
b.prototype.getOption=b.prototype.slickGetOption=function(d){var c=this;
return c.options[d]
};
b.prototype.getNavigableIndexes=function(){var f=this,g=0,d=0,e=[],c;
if(f.options.infinite===false){c=f.slideCount-f.options.slidesToShow+1;
if(f.options.centerMode===true){c=f.slideCount
}}else{g=f.options.slidesToScroll*-1;
d=f.options.slidesToScroll*-1;
c=f.slideCount*2
}while(g<c){e.push(g);
g=d+f.options.slidesToScroll;
d+=f.options.slidesToScroll<=f.options.slidesToShow?f.options.slidesToScroll:f.options.slidesToShow
}return e
};
b.prototype.getSlick=function(){return this
};
b.prototype.getSlideCount=function(){var e=this,d,f,c;
c=e.options.centerMode===true?e.slideWidth*Math.floor(e.options.slidesToShow/2):0;
if(e.options.swipeToSlide===true){e.$slideTrack.find(".slick-slide").each(function(h,g){if(g.offsetLeft-c+(a(g).outerWidth()/2)>(e.swipeLeft*-1)){f=g;
return false
}});
d=Math.abs(a(f).attr("data-slick-index")-e.currentSlide)||1;
return d
}else{return e.options.slidesToScroll
}};
b.prototype.goTo=b.prototype.slickGoTo=function(c,e){var d=this;
d.changeSlide({data:{message:"index",index:parseInt(c)}},e)
};
b.prototype.init=function(){var c=this;
if(!a(c.$slider).hasClass("slick-initialized")){a(c.$slider).addClass("slick-initialized");
c.buildRows();
c.buildOut();
c.setProps();
c.startLoad();
c.loadSlider();
c.initializeEvents();
c.updateArrows();
c.updateDots()
}c.$slider.trigger("init",[c])
};
b.prototype.initArrowEvents=function(){var c=this;
if(c.options.arrows===true&&c.slideCount>c.options.slidesToShow){c.$prevArrow.on("click.slick",{message:"previous"},c.changeSlide);
c.$nextArrow.on("click.slick",{message:"next"},c.changeSlide)
}};
b.prototype.initDotEvents=function(){var c=this;
if(c.options.dots===true&&c.slideCount>c.options.slidesToShow){a("li",c.$dots).on("click.slick",{message:"index"},c.changeSlide)
}if(c.options.dots===true&&c.options.pauseOnDotsHover===true&&c.options.autoplay===true){a("li",c.$dots).on("mouseenter.slick",c.setPaused.bind(c,true)).on("mouseleave.slick",c.setPaused.bind(c,false))
}};
b.prototype.initializeEvents=function(){var c=this;
c.initArrowEvents();
c.initDotEvents();
c.$list.on("touchstart.slick mousedown.slick",{action:"start"},c.swipeHandler);
c.$list.on("touchmove.slick mousemove.slick",{action:"move"},c.swipeHandler);
c.$list.on("touchend.slick mouseup.slick",{action:"end"},c.swipeHandler);
c.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},c.swipeHandler);
c.$list.on("click.slick",c.clickHandler);
if(c.options.autoplay===true){a(document).on(c.visibilityChange,c.visibility.bind(c))
}c.$list.on("mouseenter.slick",c.setPaused.bind(c,true));
c.$list.on("mouseleave.slick",c.setPaused.bind(c,false));
if(c.options.accessibility===true){c.$list.on("keydown.slick",c.keyHandler)
}if(c.options.focusOnSelect===true){a(c.$slideTrack).children().on("click.slick",c.selectHandler)
}a(window).on("orientationchange.slick.slick-"+c.instanceUid,c.orientationChange.bind(c));
a(window).on("resize.slick.slick-"+c.instanceUid,c.resize.bind(c));
a("[draggable!=true]",c.$slideTrack).on("dragstart",c.preventDefault);
a(window).on("load.slick.slick-"+c.instanceUid,c.setPosition);
a(document).on("ready.slick.slick-"+c.instanceUid,c.setPosition)
};
b.prototype.initUI=function(){var c=this;
if(c.options.arrows===true&&c.slideCount>c.options.slidesToShow){c.$prevArrow.show();
c.$nextArrow.show()
}if(c.options.dots===true&&c.slideCount>c.options.slidesToShow){c.$dots.show()
}if(c.options.autoplay===true){c.autoPlay()
}};
b.prototype.keyHandler=function(d){var c=this;
if(d.keyCode===37&&c.options.accessibility===true){c.changeSlide({data:{message:"previous"}})
}else{if(d.keyCode===39&&c.options.accessibility===true){c.changeSlide({data:{message:"next"}})
}}};
b.prototype.lazyLoad=function(){var e=this,c,h,g,f;
function d(j){a("img[data-lazy]",j).each(function(){var l=a(this),m=a(this).attr("data-lazy"),k=document.createElement("img");
k.onload=function(){l.animate({opacity:1},200)
};
k.src=m;
l.css({opacity:0}).attr("src",m).removeAttr("data-lazy").removeClass("slick-loading")
})
}if(e.options.centerMode===true){if(e.options.infinite===true){g=e.currentSlide+(e.options.slidesToShow/2+1);
f=g+e.options.slidesToShow+2
}else{g=Math.max(0,e.currentSlide-(e.options.slidesToShow/2+1));
f=2+(e.options.slidesToShow/2+1)+e.currentSlide
}}else{g=e.options.infinite?e.options.slidesToShow+e.currentSlide:e.currentSlide;
f=g+e.options.slidesToShow;
if(e.options.fade===true){if(g>0){g--
}if(f<=e.slideCount){f++
}}}c=e.$slider.find(".slick-slide").slice(g,f);
d(c);
if(e.slideCount<=e.options.slidesToShow){h=e.$slider.find(".slick-slide");
d(h)
}else{if(e.currentSlide>=e.slideCount-e.options.slidesToShow){h=e.$slider.find(".slick-cloned").slice(0,e.options.slidesToShow);
d(h)
}else{if(e.currentSlide===0){h=e.$slider.find(".slick-cloned").slice(e.options.slidesToShow*-1);
d(h)
}}}};
b.prototype.loadSlider=function(){var c=this;
c.setPosition();
c.$slideTrack.css({opacity:1});
c.$slider.removeClass("slick-loading");
c.initUI();
if(c.options.lazyLoad==="progressive"){c.progressiveLazyLoad()
}};
b.prototype.next=b.prototype.slickNext=function(){var c=this;
c.changeSlide({data:{message:"next"}})
};
b.prototype.orientationChange=function(){var c=this;
c.checkResponsive();
c.setPosition()
};
b.prototype.pause=b.prototype.slickPause=function(){var c=this;
c.autoPlayClear();
c.paused=true
};
b.prototype.play=b.prototype.slickPlay=function(){var c=this;
c.paused=false;
c.autoPlay()
};
b.prototype.postSlide=function(d){var c=this;
c.$slider.trigger("afterChange",[c,d]);
c.animating=false;
c.setPosition();
c.swipeLeft=null;
if(c.options.autoplay===true&&c.paused===false){c.autoPlay()
}};
b.prototype.prev=b.prototype.slickPrev=function(){var c=this;
c.changeSlide({data:{message:"previous"}})
};
b.prototype.preventDefault=function(c){c.preventDefault()
};
b.prototype.progressiveLazyLoad=function(){var d=this,c,e;
c=a("img[data-lazy]",d.$slider).length;
if(c>0){e=a("img[data-lazy]",d.$slider).first();
e.attr("src",e.attr("data-lazy")).removeClass("slick-loading").load(function(){e.removeAttr("data-lazy");
d.progressiveLazyLoad();
if(d.options.adaptiveHeight===true){d.setPosition()
}}).error(function(){e.removeAttr("data-lazy");
d.progressiveLazyLoad()
})
}};
b.prototype.refresh=function(){var c=this,d=c.currentSlide;
c.destroy();
a.extend(c,c.initials);
c.init();
c.changeSlide({data:{message:"index",index:d}},false)
};
b.prototype.reinit=function(){var c=this;
c.$slides=c.$slideTrack.children(c.options.slide).addClass("slick-slide");
c.slideCount=c.$slides.length;
if(c.currentSlide>=c.slideCount&&c.currentSlide!==0){c.currentSlide=c.currentSlide-c.options.slidesToScroll
}if(c.slideCount<=c.options.slidesToShow){c.currentSlide=0
}c.setProps();
c.setupInfinite();
c.buildArrows();
c.updateArrows();
c.initArrowEvents();
c.buildDots();
c.updateDots();
c.initDotEvents();
if(c.options.focusOnSelect===true){a(c.$slideTrack).children().on("click.slick",c.selectHandler)
}c.setSlideClasses(0);
c.setPosition();
c.$slider.trigger("reInit",[c])
};
b.prototype.resize=function(){var c=this;
if(a(window).width()!==c.windowWidth){clearTimeout(c.windowDelay);
c.windowDelay=window.setTimeout(function(){c.windowWidth=a(window).width();
c.checkResponsive();
c.setPosition()
},50)
}};
b.prototype.removeSlide=b.prototype.slickRemove=function(d,f,e){var c=this;
if(typeof(d)==="boolean"){f=d;
d=f===true?0:c.slideCount-1
}else{d=f===true?--d:d
}if(c.slideCount<1||d<0||d>c.slideCount-1){return false
}c.unload();
if(e===true){c.$slideTrack.children().remove()
}else{c.$slideTrack.children(this.options.slide).eq(d).remove()
}c.$slides=c.$slideTrack.children(this.options.slide);
c.$slideTrack.children(this.options.slide).detach();
c.$slideTrack.append(c.$slides);
c.$slidesCache=c.$slides;
c.reinit()
};
b.prototype.setCSS=function(d){var e=this,f={},c,g;
if(e.options.rtl===true){d=-d
}c=e.positionProp=="left"?Math.ceil(d)+"px":"0px";
g=e.positionProp=="top"?Math.ceil(d)+"px":"0px";
f[e.positionProp]=d;
if(e.transformsEnabled===false){e.$slideTrack.css(f)
}else{f={};
if(e.cssTransitions===false){f[e.animType]="translate("+c+", "+g+")";
e.$slideTrack.css(f)
}else{f[e.animType]="translate3d("+c+", "+g+", 0px)";
e.$slideTrack.css(f)
}}};
b.prototype.setDimensions=function(){var c=this;
if(c.options.vertical===false){if(c.options.centerMode===true){c.$list.css({padding:("0px "+c.options.centerPadding)})
}}else{c.$list.height(c.$slides.first().outerHeight(true)*c.options.slidesToShow);
if(c.options.centerMode===true){c.$list.css({padding:(c.options.centerPadding+" 0px")})
}}c.listWidth=c.$list.width();
c.listHeight=c.$list.height();
if(c.options.vertical===false&&c.options.variableWidth===false){c.slideWidth=Math.ceil(c.listWidth/c.options.slidesToShow);
c.$slideTrack.width(Math.ceil((c.slideWidth*c.$slideTrack.children(".slick-slide").length)))
}else{if(c.options.variableWidth===true){c.$slideTrack.width(5000*c.slideCount)
}else{c.slideWidth=Math.ceil(c.listWidth);
c.$slideTrack.height(Math.ceil((c.$slides.first().outerHeight(true)*c.$slideTrack.children(".slick-slide").length)))
}}var d=c.$slides.first().outerWidth(true)-c.$slides.first().width();
if(c.options.variableWidth===false){c.$slideTrack.children(".slick-slide").width(c.slideWidth-d)
}};
b.prototype.setFade=function(){var c=this,d;
c.$slides.each(function(e,f){d=(c.slideWidth*e)*-1;
if(c.options.rtl===true){a(f).css({position:"relative",right:d,top:0,zIndex:800,opacity:0})
}else{a(f).css({position:"relative",left:d,top:0,zIndex:800,opacity:0})
}});
c.$slides.eq(c.currentSlide).css({zIndex:900,opacity:1})
};
b.prototype.setHeight=function(){var d=this;
if(d.options.slidesToShow===1&&d.options.adaptiveHeight===true&&d.options.vertical===false){var c=d.$slides.eq(d.currentSlide).outerHeight(true);
d.$list.css("height",c)
}};
b.prototype.setOption=b.prototype.slickSetOption=function(e,f,d){var c=this;
c.options[e]=f;
if(d===true){c.unload();
c.reinit()
}};
b.prototype.setPosition=function(){var c=this;
c.setDimensions();
c.setHeight();
if(c.options.fade===false){c.setCSS(c.getLeft(c.currentSlide))
}else{c.setFade()
}c.$slider.trigger("setPosition",[c])
};
b.prototype.setProps=function(){var d=this,c=document.body.style;
d.positionProp=d.options.vertical===true?"top":"left";
if(d.positionProp==="top"){d.$slider.addClass("slick-vertical")
}else{d.$slider.removeClass("slick-vertical")
}if(c.WebkitTransition!==undefined||c.MozTransition!==undefined||c.msTransition!==undefined){if(d.options.useCSS===true){d.cssTransitions=true
}}if(c.OTransform!==undefined){d.animType="OTransform";
d.transformType="-o-transform";
d.transitionType="OTransition";
if(c.perspectiveProperty===undefined&&c.webkitPerspective===undefined){d.animType=false
}}if(c.MozTransform!==undefined){d.animType="MozTransform";
d.transformType="-moz-transform";
d.transitionType="MozTransition";
if(c.perspectiveProperty===undefined&&c.MozPerspective===undefined){d.animType=false
}}if(c.webkitTransform!==undefined){d.animType="webkitTransform";
d.transformType="-webkit-transform";
d.transitionType="webkitTransition";
if(c.perspectiveProperty===undefined&&c.webkitPerspective===undefined){d.animType=false
}}if(c.msTransform!==undefined){d.animType="msTransform";
d.transformType="-ms-transform";
d.transitionType="msTransition";
if(c.msTransform===undefined){d.animType=false
}}if(c.transform!==undefined&&d.animType!==false){d.animType="transform";
d.transformType="transform";
d.transitionType="transition"
}d.transformsEnabled=(d.animType!==null&&d.animType!==false)
};
b.prototype.setSlideClasses=function(f){var e=this,c,d,h,g;
e.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden","true").removeClass("slick-center");
d=e.$slider.find(".slick-slide");
if(e.options.centerMode===true){c=Math.floor(e.options.slidesToShow/2);
if(e.options.infinite===true){if(f>=c&&f<=(e.slideCount-1)-c){e.$slides.slice(f-c,f+c+1).addClass("slick-active").attr("aria-hidden","false")
}else{h=e.options.slidesToShow+f;
d.slice(h-c+1,h+c+2).addClass("slick-active").attr("aria-hidden","false")
}if(f===0){d.eq(d.length-1-e.options.slidesToShow).addClass("slick-center")
}else{if(f===e.slideCount-1){d.eq(e.options.slidesToShow).addClass("slick-center")
}}}e.$slides.eq(f).addClass("slick-center")
}else{if(f>=0&&f<=(e.slideCount-e.options.slidesToShow)){e.$slides.slice(f,f+e.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")
}else{if(d.length<=e.options.slidesToShow){d.addClass("slick-active").attr("aria-hidden","false")
}else{g=e.slideCount%e.options.slidesToShow;
h=e.options.infinite===true?e.options.slidesToShow+f:f;
if(e.options.slidesToShow==e.options.slidesToScroll&&(e.slideCount-f)<e.options.slidesToShow){d.slice(h-(e.options.slidesToShow-g),h+g).addClass("slick-active").attr("aria-hidden","false")
}else{d.slice(h,h+e.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")
}}}}if(e.options.lazyLoad==="ondemand"){e.lazyLoad()
}};
b.prototype.setupInfinite=function(){var c=this,d,f,e;
if(c.options.fade===true){c.options.centerMode=false
}if(c.options.infinite===true&&c.options.fade===false){f=null;
if(c.slideCount>c.options.slidesToShow){if(c.options.centerMode===true){e=c.options.slidesToShow+1
}else{e=c.options.slidesToShow
}for(d=c.slideCount;
d>(c.slideCount-e);
d-=1){f=d-1;
a(c.$slides[f]).clone(true).attr("id","").attr("data-slick-index",f-c.slideCount).prependTo(c.$slideTrack).addClass("slick-cloned")
}for(d=0;
d<e;
d+=1){f=d;
a(c.$slides[f]).clone(true).attr("id","").attr("data-slick-index",f+c.slideCount).appendTo(c.$slideTrack).addClass("slick-cloned")
}c.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")
})
}}};
b.prototype.setPaused=function(d){var c=this;
if(c.options.autoplay===true&&c.options.pauseOnHover===true){c.paused=d;
c.autoPlayClear()
}};
b.prototype.selectHandler=function(f){var e=this;
var d=a(f.target).is(".slick-slide")?a(f.target):a(f.target).parents(".slick-slide");
var c=parseInt(d.attr("data-slick-index"));
if(!c){c=0
}if(e.slideCount<=e.options.slidesToShow){e.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden","true");
e.$slides.eq(c).addClass("slick-active").attr("aria-hidden","false");
if(e.options.centerMode===true){e.$slider.find(".slick-slide").removeClass("slick-center");
e.$slides.eq(c).addClass("slick-center")
}e.asNavFor(c);
return
}e.slideHandler(c)
};
b.prototype.slideHandler=function(e,h,d){var c,l,g,j,f=null,k=this;
h=h||false;
if(k.animating===true&&k.options.waitForAnimate===true){return
}if(k.options.fade===true&&k.currentSlide===e){return
}if(k.slideCount<=k.options.slidesToShow){return
}if(h===false){k.asNavFor(e)
}c=e;
f=k.getLeft(c);
j=k.getLeft(k.currentSlide);
k.currentLeft=k.swipeLeft===null?j:k.swipeLeft;
if(k.options.infinite===false&&k.options.centerMode===false&&(e<0||e>k.getDotCount()*k.options.slidesToScroll)){if(k.options.fade===false){c=k.currentSlide;
if(d!==true){k.animateSlide(j,function(){k.postSlide(c)
})
}else{k.postSlide(c)
}}return
}else{if(k.options.infinite===false&&k.options.centerMode===true&&(e<0||e>(k.slideCount-k.options.slidesToScroll))){if(k.options.fade===false){c=k.currentSlide;
if(d!==true){k.animateSlide(j,function(){k.postSlide(c)
})
}else{k.postSlide(c)
}}return
}}if(k.options.autoplay===true){clearInterval(k.autoPlayTimer)
}if(c<0){if(k.slideCount%k.options.slidesToScroll!==0){l=k.slideCount-(k.slideCount%k.options.slidesToScroll)
}else{l=k.slideCount+c
}}else{if(c>=k.slideCount){if(k.slideCount%k.options.slidesToScroll!==0){l=0
}else{l=c-k.slideCount
}}else{l=c
}}k.animating=true;
k.$slider.trigger("beforeChange",[k,k.currentSlide,l]);
g=k.currentSlide;
k.currentSlide=l;
k.setSlideClasses(k.currentSlide);
k.updateDots();
k.updateArrows();
if(k.options.fade===true){if(d!==true){k.fadeSlide(l,function(){k.postSlide(l)
})
}else{k.postSlide(l)
}k.animateHeight();
return
}if(d!==true){k.animateSlide(f,function(){k.postSlide(l)
})
}else{k.postSlide(l)
}};
b.prototype.startLoad=function(){var c=this;
if(c.options.arrows===true&&c.slideCount>c.options.slidesToShow){c.$prevArrow.hide();
c.$nextArrow.hide()
}if(c.options.dots===true&&c.slideCount>c.options.slidesToShow){c.$dots.hide()
}c.$slider.addClass("slick-loading")
};
b.prototype.swipeDirection=function(){var c,f,e,g,d=this;
c=d.touchObject.startX-d.touchObject.curX;
f=d.touchObject.startY-d.touchObject.curY;
e=Math.atan2(f,c);
g=Math.round(e*180/Math.PI);
if(g<0){g=360-Math.abs(g)
}if((g<=45)&&(g>=0)){return(d.options.rtl===false?"left":"right")
}if((g<=360)&&(g>=315)){return(d.options.rtl===false?"left":"right")
}if((g>=135)&&(g<=225)){return(d.options.rtl===false?"right":"left")
}if(d.options.verticalSwiping===true){if((g>=35)&&(g<=135)){return"left"
}else{return"right"
}}return"vertical"
};
b.prototype.swipeEnd=function(e){var d=this,c;
d.dragging=false;
d.shouldClick=(d.touchObject.swipeLength>10)?false:true;
if(d.touchObject.curX===undefined){return false
}if(d.touchObject.edgeHit===true){d.$slider.trigger("edge",[d,d.swipeDirection()])
}if(d.touchObject.swipeLength>=d.touchObject.minSwipe){switch(d.swipeDirection()){case"left":c=d.options.swipeToSlide?d.checkNavigable(d.currentSlide+d.getSlideCount()):d.currentSlide+d.getSlideCount();
d.slideHandler(c);
d.currentDirection=0;
d.touchObject={};
d.$slider.trigger("swipe",[d,"left"]);
break;
case"right":c=d.options.swipeToSlide?d.checkNavigable(d.currentSlide-d.getSlideCount()):d.currentSlide-d.getSlideCount();
d.slideHandler(c);
d.currentDirection=1;
d.touchObject={};
d.$slider.trigger("swipe",[d,"right"]);
break
}}else{if(d.touchObject.startX!==d.touchObject.curX){d.slideHandler(d.currentSlide);
d.touchObject={}
}}};
b.prototype.swipeHandler=function(d){var c=this;
if((c.options.swipe===false)||("ontouchend" in document&&c.options.swipe===false)){return
}else{if(c.options.draggable===false&&d.type.indexOf("mouse")!==-1){return
}}c.touchObject.fingerCount=d.originalEvent&&d.originalEvent.touches!==undefined?d.originalEvent.touches.length:1;
c.touchObject.minSwipe=c.listWidth/c.options.touchThreshold;
if(c.options.verticalSwiping===true){c.touchObject.minSwipe=c.listHeight/c.options.touchThreshold
}switch(d.data.action){case"start":c.swipeStart(d);
break;
case"move":c.swipeMove(d);
break;
case"end":c.swipeEnd(d);
break
}};
b.prototype.swipeMove=function(f){var e=this,k=false,h,d,g,c,j;
j=f.originalEvent!==undefined?f.originalEvent.touches:null;
if(!e.dragging||j&&j.length!==1){return false
}h=e.getLeft(e.currentSlide);
e.touchObject.curX=j!==undefined?j[0].pageX:f.clientX;
e.touchObject.curY=j!==undefined?j[0].pageY:f.clientY;
e.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(e.touchObject.curX-e.touchObject.startX,2)));
if(e.options.verticalSwiping===true){e.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(e.touchObject.curY-e.touchObject.startY,2)))
}d=e.swipeDirection();
if(d==="vertical"){return
}if(f.originalEvent!==undefined&&e.touchObject.swipeLength>4){f.preventDefault()
}c=(e.options.rtl===false?1:-1)*(e.touchObject.curX>e.touchObject.startX?1:-1);
if(e.options.verticalSwiping===true){c=e.touchObject.curY>e.touchObject.startY?1:-1
}g=e.touchObject.swipeLength;
e.touchObject.edgeHit=false;
if(e.options.infinite===false){if((e.currentSlide===0&&d==="right")||(e.currentSlide>=e.getDotCount()&&d==="left")){g=e.touchObject.swipeLength*e.options.edgeFriction;
e.touchObject.edgeHit=true
}}if(e.options.vertical===false){e.swipeLeft=h+g*c
}else{e.swipeLeft=h+(g*(e.$list.height()/e.listWidth))*c
}if(e.options.verticalSwiping===true){e.swipeLeft=h+g*c
}if(e.options.fade===true||e.options.touchMove===false){return false
}if(e.animating===true){e.swipeLeft=null;
return false
}e.setCSS(e.swipeLeft)
};
b.prototype.swipeStart=function(d){var c=this,e;
if(c.touchObject.fingerCount!==1||c.slideCount<=c.options.slidesToShow){c.touchObject={};
return false
}if(d.originalEvent!==undefined&&d.originalEvent.touches!==undefined){e=d.originalEvent.touches[0]
}c.touchObject.startX=c.touchObject.curX=e!==undefined?e.pageX:d.clientX;
c.touchObject.startY=c.touchObject.curY=e!==undefined?e.pageY:d.clientY;
c.dragging=true
};
b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var c=this;
if(c.$slidesCache!==null){c.unload();
c.$slideTrack.children(this.options.slide).detach();
c.$slidesCache.appendTo(c.$slideTrack);
c.reinit()
}};
b.prototype.unload=function(){var c=this;
a(".slick-cloned",c.$slider).remove();
if(c.$dots){c.$dots.remove()
}if(c.$prevArrow&&(typeof c.options.prevArrow!=="object")){c.$prevArrow.remove()
}if(c.$nextArrow&&(typeof c.options.nextArrow!=="object")){c.$nextArrow.remove()
}c.$slides.removeClass("slick-slide slick-active slick-visible").attr("aria-hidden","true").css("width","")
};
b.prototype.unslick=function(){var c=this;
c.destroy()
};
b.prototype.updateArrows=function(){var d=this,c;
c=Math.floor(d.options.slidesToShow/2);
if(d.options.arrows===true&&d.options.infinite!==true&&d.slideCount>d.options.slidesToShow){d.$prevArrow.removeClass("slick-disabled");
d.$nextArrow.removeClass("slick-disabled");
if(d.currentSlide===0){d.$prevArrow.addClass("slick-disabled");
d.$nextArrow.removeClass("slick-disabled")
}else{if(d.currentSlide>=d.slideCount-d.options.slidesToShow&&d.options.centerMode===false){d.$nextArrow.addClass("slick-disabled");
d.$prevArrow.removeClass("slick-disabled")
}else{if(d.currentSlide>=d.slideCount-1&&d.options.centerMode===true){d.$nextArrow.addClass("slick-disabled");
d.$prevArrow.removeClass("slick-disabled")
}}}}};
b.prototype.updateDots=function(){var c=this;
if(c.$dots!==null){c.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true");
c.$dots.find("li").eq(Math.floor(c.currentSlide/c.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false")
}};
b.prototype.visibility=function(){var c=this;
if(document[c.hidden]){c.paused=true;
c.autoPlayClear()
}else{c.paused=false;
c.autoPlay()
}};
a.fn.slick=function(){var f=this,h=arguments[0],e=Array.prototype.slice.call(arguments,1),c=f.length,g=0,d;
for(g;
g<c;
g++){if(typeof h=="object"||typeof h=="undefined"){f[g].slick=new b(f[g],h)
}else{d=f[g].slick[h].apply(f[g].slick,e)
}if(typeof d!="undefined"){return d
}}return f
}
}));
/*! Hammer.JS - v2.0.4 - 2014-09-28
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2014 Jorik Tangelder;
 * Licensed under the MIT license */
;
!function(a7,a6,a5,a4){function a1(e,d,f){return setTimeout(aT(e,f),d)
}function a0(e,d,f){return Array.isArray(e)?(aZ(e,f[d],f),!0):!1
}function aZ(f,d,h){var g;
if(f){if(f.forEach){f.forEach(d,h)
}else{if(f.length!==a4){for(g=0;
g<f.length;
){d.call(h,f[g],g,f),g++
}}else{for(g in f){f.hasOwnProperty(g)&&d.call(h,f[g],g,f)
}}}}}function aY(g,d,k){for(var j=Object.keys(d),h=0;
h<j.length;
){(!k||k&&g[j[h]]===a4)&&(g[j[h]]=d[j[h]]),h++
}return g
}function aX(d,c){return aY(d,c,!0)
}function aU(g,f,k){var j,h=f.prototype;
j=g.prototype=Object.create(h),j.constructor=g,j._super=h,k&&aY(j,k)
}function aT(d,c){return function(){return d.apply(c,arguments)
}
}function aR(d,c){return typeof d==aj?d.apply(c?c[0]||a4:a4,c):d
}function aQ(d,c){return d===a4?c:d
}function aP(e,d,f){aZ(aJ(d),function(a){e.addEventListener(a,f,!1)
})
}function aN(e,d,f){aZ(aJ(d),function(a){e.removeEventListener(a,f,!1)
})
}function aM(d,c){for(;
d;
){if(d==c){return !0
}d=d.parentNode
}return !1
}function aK(d,c){return d.indexOf(c)>-1
}function aJ(b){return b.trim().split(/\s+/g)
}function aI(f,e,h){if(f.indexOf&&!h){return f.indexOf(e)
}for(var g=0;
g<f.length;
){if(h&&f[g][h]==e||!h&&f[g]===e){return g
}g++
}return -1
}function aH(b){return Array.prototype.slice.call(b,0)
}function aG(j,h,o){for(var n=[],m=[],l=0;
l<j.length;
){var k=h?j[l][h]:j[l];
aI(m,k)<0&&n.push(j[l]),m[l]=k,l++
}return o&&(n=h?n.sort(function(b,d){return b[h]>d[h]
}):n.sort()),n
}function aF(h,d){for(var m,l,k=d[0].toUpperCase()+d.slice(1),j=0;
j<aV.length;
){if(m=aV[j],l=m?m+k:d,l in h){return l
}j++
}return a4
}function aE(){return a2++
}function aD(d){var c=d.ownerDocument;
return c.defaultView||c.parentWindow
}function aC(e,d){var f=this;
this.manager=e,this.callback=d,this.element=e.element,this.target=e.options.inputTarget,this.domHandler=function(a){aR(e.options.enable,[e])&&f.handler(a)
},this.init()
}function aA(e){var d,f=e.options.inputClass;
return new (d=f?f:ca?bs:bZ?bo:al?bl:bt)(e,bM)
}function bM(j,h,o){var n=o.pointers.length,m=o.changedPointers.length,l=h&b1&&n-m===0,k=h&(b6|bU)&&n-m===0;
o.isFirst=!!l,o.isFinal=!!k,l&&(j.session={}),o.eventType=h,bK(j,o),j.emit("hammer.input",o),j.recognize(o),j.session.prevInput=o
}function bK(u,s){var r=u.session,q=s.pointers,p=q.length;
r.firstInput||(r.firstInput=bG(s)),p>1&&!r.firstMultiple?r.firstMultiple=bG(s):1===p&&(r.firstMultiple=!1);
var o=r.firstInput,n=r.firstMultiple,m=n?n.center:o.center,l=s.center=bD(q);
s.timeStamp=bE(),s.deltaTime=s.timeStamp-o.timeStamp,s.angle=bz(m,l),s.distance=bA(m,l),bJ(r,s),s.offsetDirection=bB(s.deltaX,s.deltaY),s.scale=n?bv(n.pointers,q):1,s.rotation=n?bw(n.pointers,q):0,bI(r,s);
var k=u.element;
aM(s.srcEvent.target,k)&&(k=s.srcEvent.target),s.target=k
}function bJ(h,g){var m=g.center,l=h.offsetDelta||{},k=h.prevDelta||{},j=h.prevInput||{};
(g.eventType===b1||j.eventType===b6)&&(k=h.prevDelta={x:j.deltaX||0,y:j.deltaY||0},l=h.offsetDelta={x:m.x,y:m.y}),g.deltaX=k.x+(m.x-l.x),g.deltaY=k.y+(m.y-l.y)
}function bI(w,v){var u,s,r,q,p=w.lastInterval||v,o=v.timeStamp-p.timeStamp;
if(v.eventType!=bU&&(o>aa||p.velocity===a4)){var n=p.deltaX-v.deltaX,m=p.deltaY-v.deltaY,d=bC(o,n,m);
s=d.x,r=d.y,u=bW(d.x)>bW(d.y)?d.x:d.y,q=bB(n,m),w.lastInterval=v
}else{u=p.velocity,s=p.velocityX,r=p.velocityY,q=p.direction
}v.velocity=u,v.velocityX=s,v.velocityY=r,v.direction=q
}function bG(e){for(var d=[],f=0;
f<e.pointers.length;
){d[f]={clientX:b8(e.pointers[f].clientX),clientY:b8(e.pointers[f].clientY)},f++
}return{timeStamp:bE(),pointers:d,center:bD(d),deltaX:e.deltaX,deltaY:e.deltaY}
}function bD(g){var f=g.length;
if(1===f){return{x:b8(g[0].clientX),y:b8(g[0].clientY)}
}for(var k=0,j=0,h=0;
f>h;
){k+=g[h].clientX,j+=g[h].clientY,h++
}return{x:b8(k/f),y:b8(j/f)}
}function bC(e,d,f){return{x:d/e||0,y:f/e||0}
}function bB(d,c){return d===c?by:bW(d)>=bW(c)?d>0?aW:av:c>0?ak:b9
}function bA(g,f,k){k||(k=ax);
var j=f[k[0]]-g[k[0]],h=f[k[1]]-g[k[1]];
return Math.sqrt(j*j+h*h)
}function bz(g,f,k){k||(k=ax);
var j=f[k[0]]-g[k[0]],h=f[k[1]]-g[k[1]];
return 180*Math.atan2(h,j)/Math.PI
}function bw(d,c){return bz(c[1],c[0],am)-bz(d[1],d[0],am)
}function bv(d,c){return bA(c[0],c[1],am)/bA(d[0],d[1],am)
}function bt(){this.evEl=b0,this.evWin=bN,this.allow=!0,this.pressed=!1,aC.apply(this,arguments)
}function bs(){this.evEl=ao,this.evWin=ad,aC.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]
}function br(){this.evTarget=bP,this.evWin=bd,this.started=!1,aC.apply(this,arguments)
}function bq(f,e){var h=aH(f.touches),g=aH(f.changedTouches);
return e&(b6|bU)&&(h=aG(h.concat(g),"identifier",!0)),[h,g]
}function bo(){this.evTarget=ap,this.targetIds={},aC.apply(this,arguments)
}function bm(r,q){var p=aH(r.touches),o=this.targetIds;
if(q&(b1|bO)&&1===p.length){return o[p[0].identifier]=!0,[p,p]
}var n,m,l=aH(r.changedTouches),k=[],j=this.target;
if(m=p.filter(function(b){return aM(b.target,j)
}),q===b1){for(n=0;
n<m.length;
){o[m[n].identifier]=!0,n++
}}for(n=0;
n<l.length;
){o[l[n].identifier]&&k.push(l[n]),q&(b6|bU)&&delete o[l[n].identifier],n++
}return k.length?[aG(m.concat(k),"identifier",!0),k]:void 0
}function bl(){aC.apply(this,arguments);
var b=aT(this.handler,this);
this.touch=new bo(this.manager,b),this.mouse=new bt(this.manager,b)
}function bk(d,c){this.manager=d,this.set(c)
}function bj(e){if(aK(e,bn)){return bn
}var d=aK(e,aL),f=aK(e,aq);
return d&&f?aL+" "+aq:d||f?d?aL:aq:aK(e,bQ)?bQ:af
}function bi(b){this.id=aE(),this.manager=null,this.options=aX(b||{},this.defaults),this.options.enable=aQ(this.options.enable,!0),this.state=ag,this.simultaneous={},this.requireFail=[]
}function bh(b){return b&at?"cancel":b&bu?"end":b&bS?"move":b&b4?"start":""
}function bg(b){return b==b9?"down":b==ak?"up":b==aW?"left":b==av?"right":""
}function bf(e,d){var f=d.manager;
return f?f.get(e):e
}function be(){bi.apply(this,arguments)
}function bY(){be.apply(this,arguments),this.pX=null,this.pY=null
}function ba(){be.apply(this,arguments)
}function bR(){bi.apply(this,arguments),this._timer=null,this._input=null
}function bp(){be.apply(this,arguments)
}function aO(){be.apply(this,arguments)
}function ar(){bi.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0
}function ah(d,c){return c=c||{},c.recognizers=aQ(c.recognizers,ah.defaults.preset),new b5(d,c)
}function b5(d,c){c=c||{},this.options=aX(c,ah.defaults),this.options.inputTarget=this.options.inputTarget||d,this.handlers={},this.session={},this.recognizers=[],this.element=d,this.input=aA(this),this.touchAction=new bk(this,this.options.touchAction),bT(this,!0),aZ(c.recognizers,function(f){var e=this.add(new f[0](f[1]));
f[2]&&e.recognizeWith(f[2]),f[3]&&e.requireFailure(f[3])
},this)
}function bT(e,d){var f=e.element;
aZ(e.options.cssProps,function(b,c){f.style[aF(f.style,c)]=d?b:""
})
}function bx(b,f){var e=a6.createEvent("Event");
e.initEvent(b,!0,!0),e.gesture=f,f.target.dispatchEvent(e)
}var aV=["","webkit","moz","MS","ms","o"],au=a6.createElement("div"),aj="function",b8=Math.round,bW=Math.abs,bE=Date.now,a2=1,aw=/mobile|tablet|ip(ad|hone|od)|android/i,al="ontouchstart" in a7,ca=aF(a7,"PointerEvent")!==a4,bZ=al&&aw.test(navigator.userAgent),bL="touch",a8="pen",ay="mouse",an="kinect",aa=25,b1=1,bO=2,b6=4,bU=8,by=1,aW=2,av=4,ak=8,b9=16,bX=aW|av,bF=ak|b9,a3=bX|bF,ax=["x","y"],am=["clientX","clientY"];
aC.prototype={handler:function(){},init:function(){this.evEl&&aP(this.element,this.evEl,this.domHandler),this.evTarget&&aP(this.target,this.evTarget,this.domHandler),this.evWin&&aP(aD(this.element),this.evWin,this.domHandler)
},destroy:function(){this.evEl&&aN(this.element,this.evEl,this.domHandler),this.evTarget&&aN(this.target,this.evTarget,this.domHandler),this.evWin&&aN(aD(this.element),this.evWin,this.domHandler)
}};
var cd={mousedown:b1,mousemove:bO,mouseup:b6},b0="mousedown",bN="mousemove mouseup";
aU(bt,aC,{handler:function(d){var c=cd[d.type];
c&b1&&0===d.button&&(this.pressed=!0),c&bO&&1!==d.which&&(c=b6),this.pressed&&this.allow&&(c&b6&&(this.pressed=!1),this.callback(this.manager,c,{pointers:[d],changedPointers:[d],pointerType:ay,srcEvent:d}))
}});
var a9={pointerdown:b1,pointermove:bO,pointerup:b6,pointercancel:bU,pointerout:bU},az={2:bL,3:a8,4:ay,5:an},ao="pointerdown",ad="pointermove pointerup pointercancel";
a7.MSPointerEvent&&(ao="MSPointerDown",ad="MSPointerMove MSPointerUp MSPointerCancel"),aU(bs,aC,{handler:function(k){var j=this.store,q=!1,p=k.type.toLowerCase().replace("ms",""),o=a9[p],n=az[k.pointerType]||k.pointerType,m=n==bL,l=aI(j,k.pointerId,"pointerId");
o&b1&&(0===k.button||m)?0>l&&(j.push(k),l=j.length-1):o&(b6|bU)&&(q=!0),0>l||(j[l]=k,this.callback(this.manager,o,{pointers:j,changedPointers:[k],pointerType:n,srcEvent:k}),q&&j.splice(l,1))
}});
var b2={touchstart:b1,touchmove:bO,touchend:b6,touchcancel:bU},bP="touchstart",bd="touchstart touchmove touchend touchcancel";
aU(br,aC,{handler:function(e){var d=b2[e.type];
if(d===b1&&(this.started=!0),this.started){var f=bq.call(this,e,d);
d&(b6|bU)&&f[0].length-f[1].length===0&&(this.started=!1),this.callback(this.manager,d,{pointers:f[0],changedPointers:f[1],pointerType:bL,srcEvent:e})
}}});
var aB={touchstart:b1,touchmove:bO,touchend:b6,touchcancel:bU},ap="touchstart touchmove touchend touchcancel";
aU(bo,aC,{handler:function(e){var d=aB[e.type],f=bm.call(this,e,d);
f&&this.callback(this.manager,d,{pointers:f[0],changedPointers:f[1],pointerType:bL,srcEvent:e})
}}),aU(bl,aC,{handler:function(g,f,k){var j=k.pointerType==bL,h=k.pointerType==ay;
if(j){this.mouse.allow=!1
}else{if(h&&!this.mouse.allow){return
}}f&(b6|bU)&&(this.mouse.allow=!0),this.callback(g,f,k)
},destroy:function(){this.touch.destroy(),this.mouse.destroy()
}});
var ae=aF(au.style,"touchAction"),b3=ae!==a4,bH="compute",af="auto",bQ="manipulation",bn="none",aL="pan-x",aq="pan-y";
bk.prototype={set:function(b){b==bH&&(b=this.compute()),b3&&(this.manager.element.style[ae]=b),this.actions=b.toLowerCase().trim()
},update:function(){this.set(this.manager.options.touchAction)
},compute:function(){var b=[];
return aZ(this.manager.recognizers,function(a){aR(a.options.enable,[a])&&(b=b.concat(a.getTouchAction()))
}),bj(b.join(" "))
},preventDefaults:function(j){if(!b3){var h=j.srcEvent,o=j.offsetDirection;
if(this.manager.session.prevented){return void h.preventDefault()
}var n=this.actions,m=aK(n,bn),l=aK(n,aq),k=aK(n,aL);
return m||l&&o&bX||k&&o&bF?this.preventSrc(h):void 0
}},preventSrc:function(b){this.manager.session.prevented=!0,b.preventDefault()
}};
var ag=1,b4=2,bS=4,bu=8,aS=bu,at=16,ai=32;
bi.prototype={defaults:{},set:function(b){return aY(this.options,b),this.manager&&this.manager.touchAction.update(),this
},recognizeWith:function(d){if(a0(d,"recognizeWith",this)){return this
}var c=this.simultaneous;
return d=bf(d,this),c[d.id]||(c[d.id]=d,d.recognizeWith(this)),this
},dropRecognizeWith:function(b){return a0(b,"dropRecognizeWith",this)?this:(b=bf(b,this),delete this.simultaneous[b.id],this)
},requireFailure:function(d){if(a0(d,"requireFailure",this)){return this
}var c=this.requireFail;
return d=bf(d,this),-1===aI(c,d)&&(c.push(d),d.requireFailure(this)),this
},dropRequireFailure:function(d){if(a0(d,"dropRequireFailure",this)){return this
}d=bf(d,this);
var c=aI(this.requireFail,d);
return c>-1&&this.requireFail.splice(c,1),this
},hasRequireFailures:function(){return this.requireFail.length>0
},canRecognizeWith:function(b){return !!this.simultaneous[b.id]
},emit:function(f){function e(a){h.manager.emit(h.options.event+(a?bh(g):""),f)
}var h=this,g=this.state;
bu>g&&e(!0),e(),g>=bu&&e(!0)
},tryEmit:function(b){return this.canEmit()?this.emit(b):void (this.state=ai)
},canEmit:function(){for(var b=0;
b<this.requireFail.length;
){if(!(this.requireFail[b].state&(ai|ag))){return !1
}b++
}return !0
},recognize:function(d){var c=aY({},d);
return aR(this.options.enable,[this,c])?(this.state&(aS|at|ai)&&(this.state=ag),this.state=this.process(c),void (this.state&(b4|bS|bu|at)&&this.tryEmit(c))):(this.reset(),void (this.state=ai))
},process:function(){},getTouchAction:function(){},reset:function(){}},aU(be,bi,{defaults:{pointers:1},attrTest:function(d){var c=this.options.pointers;
return 0===c||d.pointers.length===c
},process:function(g){var f=this.state,k=g.eventType,j=f&(b4|bS),h=this.attrTest(g);
return j&&(k&bU||!h)?f|at:j||h?k&b6?f|bu:f&b4?f|bS:b4:ai
}}),aU(bY,be,{defaults:{event:"pan",threshold:10,pointers:1,direction:a3},getTouchAction:function(){var d=this.options.direction,c=[];
return d&bX&&c.push(aq),d&bF&&c.push(aL),c
},directionTest:function(j){var h=this.options,o=!0,n=j.distance,m=j.direction,l=j.deltaX,k=j.deltaY;
return m&h.direction||(h.direction&bX?(m=0===l?by:0>l?aW:av,o=l!=this.pX,n=Math.abs(j.deltaX)):(m=0===k?by:0>k?ak:b9,o=k!=this.pY,n=Math.abs(j.deltaY))),j.direction=m,o&&n>h.threshold&&m&h.direction
},attrTest:function(b){return be.prototype.attrTest.call(this,b)&&(this.state&b4||!(this.state&b4)&&this.directionTest(b))
},emit:function(d){this.pX=d.deltaX,this.pY=d.deltaY;
var c=bg(d.direction);
c&&this.manager.emit(this.options.event+c,d),this._super.emit.call(this,d)
}}),aU(ba,be,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[bn]
},attrTest:function(b){return this._super.attrTest.call(this,b)&&(Math.abs(b.scale-1)>this.options.threshold||this.state&b4)
},emit:function(d){if(this._super.emit.call(this,d),1!==d.scale){var c=d.scale<1?"in":"out";
this.manager.emit(this.options.event+c,d)
}}}),aU(bR,bi,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[af]
},process:function(g){var e=this.options,k=g.pointers.length===e.pointers,j=g.distance<e.threshold,h=g.deltaTime>e.time;
if(this._input=g,!j||!k||g.eventType&(b6|bU)&&!h){this.reset()
}else{if(g.eventType&b1){this.reset(),this._timer=a1(function(){this.state=aS,this.tryEmit()
},e.time,this)
}else{if(g.eventType&b6){return aS
}}}return ai
},reset:function(){clearTimeout(this._timer)
},emit:function(b){this.state===aS&&(b&&b.eventType&b6?this.manager.emit(this.options.event+"up",b):(this._input.timeStamp=bE(),this.manager.emit(this.options.event,this._input)))
}}),aU(bp,be,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[bn]
},attrTest:function(b){return this._super.attrTest.call(this,b)&&(Math.abs(b.rotation)>this.options.threshold||this.state&b4)
}}),aU(aO,be,{defaults:{event:"swipe",threshold:10,velocity:0.65,direction:bX|bF,pointers:1},getTouchAction:function(){return bY.prototype.getTouchAction.call(this)
},attrTest:function(e){var d,f=this.options.direction;
return f&(bX|bF)?d=e.velocity:f&bX?d=e.velocityX:f&bF&&(d=e.velocityY),this._super.attrTest.call(this,e)&&f&e.direction&&e.distance>this.options.threshold&&bW(d)>this.options.velocity&&e.eventType&b6
},emit:function(d){var c=bg(d.direction);
c&&this.manager.emit(this.options.event+c,d),this.manager.emit(this.options.event,d)
}}),aU(ar,bi,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[bQ]
},process:function(j){var e=this.options,p=j.pointers.length===e.pointers,o=j.distance<e.threshold,n=j.deltaTime<e.time;
if(this.reset(),j.eventType&b1&&0===this.count){return this.failTimeout()
}if(o&&n&&p){if(j.eventType!=b6){return this.failTimeout()
}var m=this.pTime?j.timeStamp-this.pTime<e.interval:!0,l=!this.pCenter||bA(this.pCenter,j.center)<e.posThreshold;
this.pTime=j.timeStamp,this.pCenter=j.center,l&&m?this.count+=1:this.count=1,this._input=j;
var k=this.count%e.taps;
if(0===k){return this.hasRequireFailures()?(this._timer=a1(function(){this.state=aS,this.tryEmit()
},e.interval,this),b4):aS
}}return ai
},failTimeout:function(){return this._timer=a1(function(){this.state=ai
},this.options.interval,this),ai
},reset:function(){clearTimeout(this._timer)
},emit:function(){this.state==aS&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))
}}),ah.VERSION="2.0.4",ah.defaults={domEvents:!1,touchAction:bH,enable:!0,inputTarget:null,inputClass:null,preset:[[bp,{enable:!1}],[ba,{enable:!1},["rotate"]],[aO,{direction:bX}],[bY,{direction:bX},["swipe"]],[ar],[ar,{event:"doubletap",taps:2},["tap"]],[bR]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};
var b7=1,bV=2;
b5.prototype={set:function(b){return aY(this.options,b),b.touchAction&&this.touchAction.update(),b.inputTarget&&(this.input.destroy(),this.input.target=b.inputTarget,this.input.init()),this
},stop:function(b){this.session.stopped=b?bV:b7
},recognize:function(h){var g=this.session;
if(!g.stopped){this.touchAction.preventDefaults(h);
var m,l=this.recognizers,k=g.curRecognizer;
(!k||k&&k.state&aS)&&(k=g.curRecognizer=null);
for(var j=0;
j<l.length;
){m=l[j],g.stopped===bV||k&&m!=k&&!m.canRecognizeWith(k)?m.reset():m.recognize(h),!k&&m.state&(b4|bS|bu)&&(k=g.curRecognizer=m),j++
}}},get:function(e){if(e instanceof bi){return e
}for(var d=this.recognizers,f=0;
f<d.length;
f++){if(d[f].options.event==e){return d[f]
}}return null
},add:function(d){if(a0(d,"add",this)){return this
}var c=this.get(d.options.event);
return c&&this.remove(c),this.recognizers.push(d),d.manager=this,this.touchAction.update(),d
},remove:function(d){if(a0(d,"remove",this)){return this
}var c=this.recognizers;
return d=this.get(d),c.splice(aI(c,d),1),this.touchAction.update(),this
},on:function(e,d){var f=this.handlers;
return aZ(aJ(e),function(b){f[b]=f[b]||[],f[b].push(d)
}),this
},off:function(e,d){var f=this.handlers;
return aZ(aJ(e),function(b){d?f[b].splice(aI(f[b],d),1):delete f[b]
}),this
},emit:function(f,e){this.options.domEvents&&bx(f,e);
var h=this.handlers[f]&&this.handlers[f].slice();
if(h&&h.length){e.type=f,e.preventDefault=function(){e.srcEvent.preventDefault()
};
for(var g=0;
g<h.length;
){h[g](e),g++
}}},destroy:function(){this.element&&bT(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null
}},aY(ah,{INPUT_START:b1,INPUT_MOVE:bO,INPUT_END:b6,INPUT_CANCEL:bU,STATE_POSSIBLE:ag,STATE_BEGAN:b4,STATE_CHANGED:bS,STATE_ENDED:bu,STATE_RECOGNIZED:aS,STATE_CANCELLED:at,STATE_FAILED:ai,DIRECTION_NONE:by,DIRECTION_LEFT:aW,DIRECTION_RIGHT:av,DIRECTION_UP:ak,DIRECTION_DOWN:b9,DIRECTION_HORIZONTAL:bX,DIRECTION_VERTICAL:bF,DIRECTION_ALL:a3,Manager:b5,Input:aC,TouchAction:bk,TouchInput:bo,MouseInput:bt,PointerEventInput:bs,TouchMouseInput:bl,SingleTouchInput:br,Recognizer:bi,AttrRecognizer:be,Tap:ar,Pan:bY,Swipe:aO,Pinch:ba,Rotate:bp,Press:bR,on:aP,off:aN,each:aZ,merge:aX,extend:aY,inherit:aU,bindFn:aT,prefixed:aF}),typeof define==aj&&define.amd?define(function(){return ah
}):"undefined"!=typeof module&&module.exports?module.exports=ah:a7[a5]=ah
}(window,document,"Hammer");
(function(){function d(o,k){var p;
k=k||{};
this.trackingClick=false;
this.trackingClickStart=0;
this.targetElement=null;
this.touchStartX=0;
this.touchStartY=0;
this.lastTouchIdentifier=0;
this.touchBoundary=k.touchBoundary||10;
this.layer=o;
this.tapDelay=k.tapDelay||200;
this.tapTimeout=k.tapTimeout||700;
if(d.notNeeded(o)){return
}function q(r,l){return function(){return r.apply(l,arguments)
}
}var j=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"];
var n=this;
for(var m=0,h=j.length;
m<h;
m++){n[j[m]]=q(n[j[m]],n)
}if(b){o.addEventListener("mouseover",this.onMouse,true);
o.addEventListener("mousedown",this.onMouse,true);
o.addEventListener("mouseup",this.onMouse,true)
}o.addEventListener("click",this.onClick,true);
o.addEventListener("touchstart",this.onTouchStart,false);
o.addEventListener("touchmove",this.onTouchMove,false);
o.addEventListener("touchend",this.onTouchEnd,false);
o.addEventListener("touchcancel",this.onTouchCancel,false);
if(!Event.prototype.stopImmediatePropagation){o.removeEventListener=function(r,u,l){var s=Node.prototype.removeEventListener;
if(r==="click"){s.call(o,r,u.hijacked||u,l)
}else{s.call(o,r,u,l)
}};
o.addEventListener=function(s,u,r){var l=Node.prototype.addEventListener;
if(s==="click"){l.call(o,s,u.hijacked||(u.hijacked=function(v){if(!v.propagationStopped){u(v)
}}),r)
}else{l.call(o,s,u,r)
}}
}if(typeof o.onclick==="function"){p=o.onclick;
o.addEventListener("click",function(l){p(l)
},false);
o.onclick=null
}}var c=navigator.userAgent.indexOf("Windows Phone")>=0;
var b=navigator.userAgent.indexOf("Android")>0&&!c;
var g=/iP(ad|hone|od)/.test(navigator.userAgent)&&!c;
var e=g&&(/OS 4_\d(_\d)?/).test(navigator.userAgent);
var f=g&&(/OS [6-7]_\d/).test(navigator.userAgent);
var a=navigator.userAgent.indexOf("BB10")>0;
d.prototype.needsClick=function(h){switch(h.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(h.disabled){return true
}break;
case"input":if((g&&h.type==="file")||h.disabled){return true
}break;
case"label":case"iframe":case"video":return true
}return(/\bneedsclick\b/).test(h.className)
};
d.prototype.needsFocus=function(h){switch(h.nodeName.toLowerCase()){case"textarea":return true;
case"select":return !b;
case"input":switch(h.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return false
}return !h.disabled&&!h.readOnly;
default:return(/\bneedsfocus\b/).test(h.className)
}};
d.prototype.sendClick=function(j,k){var h,l;
if(document.activeElement&&document.activeElement!==j){document.activeElement.blur()
}l=k.changedTouches[0];
h=document.createEvent("MouseEvents");
h.initMouseEvent(this.determineEventType(j),true,true,window,1,l.screenX,l.screenY,l.clientX,l.clientY,false,false,false,false,0,null);
h.forwardedTouchEvent=true;
j.dispatchEvent(h)
};
d.prototype.determineEventType=function(h){if(b&&h.tagName.toLowerCase()==="select"){return"mousedown"
}return"click"
};
d.prototype.focus=function(h){var j;
if(g&&h.setSelectionRange&&h.type.indexOf("date")!==0&&h.type!=="time"&&h.type!=="month"){j=h.value.length;
h.setSelectionRange(j,j)
}else{h.focus()
}};
d.prototype.updateScrollParent=function(j){var k,h;
k=j.fastClickScrollParent;
if(!k||!k.contains(j)){h=j;
do{if(h.scrollHeight>h.offsetHeight){k=h;
j.fastClickScrollParent=h;
break
}h=h.parentElement
}while(h)
}if(k){k.fastClickLastScrollTop=k.scrollTop
}};
d.prototype.getTargetElementFromEventTarget=function(h){if(h.nodeType===Node.TEXT_NODE){return h.parentNode
}return h
};
d.prototype.onTouchStart=function(k){var h,l,j;
if(k.targetTouches.length>1){return true
}h=this.getTargetElementFromEventTarget(k.target);
l=k.targetTouches[0];
if(g){j=window.getSelection();
if(j.rangeCount&&!j.isCollapsed){return true
}if(!e){if(l.identifier&&l.identifier===this.lastTouchIdentifier){k.preventDefault();
return false
}this.lastTouchIdentifier=l.identifier;
this.updateScrollParent(h)
}}this.trackingClick=true;
this.trackingClickStart=k.timeStamp;
this.targetElement=h;
this.touchStartX=l.pageX;
this.touchStartY=l.pageY;
if((k.timeStamp-this.lastClickTime)<this.tapDelay){k.preventDefault()
}return true
};
d.prototype.touchHasMoved=function(h){var k=h.changedTouches[0],j=this.touchBoundary;
if(Math.abs(k.pageX-this.touchStartX)>j||Math.abs(k.pageY-this.touchStartY)>j){return true
}return false
};
d.prototype.onTouchMove=function(h){if(!this.trackingClick){return true
}if(this.targetElement!==this.getTargetElementFromEventTarget(h.target)||this.touchHasMoved(h)){this.trackingClick=false;
this.targetElement=null
}return true
};
d.prototype.findControl=function(h){if(h.control!==undefined){return h.control
}if(h.htmlFor){return document.getElementById(h.htmlFor)
}return h.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
};
d.prototype.onTouchEnd=function(k){var m,l,j,o,n,h=this.targetElement;
if(!this.trackingClick){return true
}if((k.timeStamp-this.lastClickTime)<this.tapDelay){this.cancelNextClick=true;
return true
}if((k.timeStamp-this.trackingClickStart)>this.tapTimeout){return true
}this.cancelNextClick=false;
this.lastClickTime=k.timeStamp;
l=this.trackingClickStart;
this.trackingClick=false;
this.trackingClickStart=0;
if(f){n=k.changedTouches[0];
h=document.elementFromPoint(n.pageX-window.pageXOffset,n.pageY-window.pageYOffset)||h;
h.fastClickScrollParent=this.targetElement.fastClickScrollParent
}j=h.tagName.toLowerCase();
if(j==="label"){m=this.findControl(h);
if(m){this.focus(h);
if(b){return false
}h=m
}}else{if(this.needsFocus(h)){if((k.timeStamp-l)>100||(g&&window.top!==window&&j==="input")){this.targetElement=null;
return false
}this.focus(h);
this.sendClick(h,k);
if(!g||j!=="select"){this.targetElement=null;
k.preventDefault()
}return false
}}if(g&&!e){o=h.fastClickScrollParent;
if(o&&o.fastClickLastScrollTop!==o.scrollTop){return true
}}if(!this.needsClick(h)){k.preventDefault();
this.sendClick(h,k)
}return false
};
d.prototype.onTouchCancel=function(){this.trackingClick=false;
this.targetElement=null
};
d.prototype.onMouse=function(h){if(!this.targetElement){return true
}if(h.forwardedTouchEvent){return true
}if(!h.cancelable){return true
}if(!this.needsClick(this.targetElement)||this.cancelNextClick){if(h.stopImmediatePropagation){h.stopImmediatePropagation()
}else{h.propagationStopped=true
}h.stopPropagation();
h.preventDefault();
return false
}return true
};
d.prototype.onClick=function(h){var j;
if(this.trackingClick){this.targetElement=null;
this.trackingClick=false;
return true
}if(h.target.type==="submit"&&h.detail===0){return true
}j=this.onMouse(h);
if(!j){this.targetElement=null
}return j
};
d.prototype.destroy=function(){var h=this.layer;
if(b){h.removeEventListener("mouseover",this.onMouse,true);
h.removeEventListener("mousedown",this.onMouse,true);
h.removeEventListener("mouseup",this.onMouse,true)
}h.removeEventListener("click",this.onClick,true);
h.removeEventListener("touchstart",this.onTouchStart,false);
h.removeEventListener("touchmove",this.onTouchMove,false);
h.removeEventListener("touchend",this.onTouchEnd,false);
h.removeEventListener("touchcancel",this.onTouchCancel,false)
};
d.notNeeded=function(j){var h;
var m;
var l;
var k;
if(typeof window.ontouchstart==="undefined"){return true
}m=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];
if(m){if(b){h=document.querySelector("meta[name=viewport]");
if(h){if(h.content.indexOf("user-scalable=no")!==-1){return true
}if(m>31&&document.documentElement.scrollWidth<=window.outerWidth){return true
}}}else{return true
}}if(a){l=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);
if(l[1]>=10&&l[2]>=3){h=document.querySelector("meta[name=viewport]");
if(h){if(h.content.indexOf("user-scalable=no")!==-1){return true
}if(document.documentElement.scrollWidth<=window.outerWidth){return true
}}}}if(j.style.msTouchAction==="none"||j.style.touchAction==="manipulation"){return true
}k=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];
if(k>=27){h=document.querySelector("meta[name=viewport]");
if(h&&(h.content.indexOf("user-scalable=no")!==-1||document.documentElement.scrollWidth<=window.outerWidth)){return true
}}if(j.style.touchAction==="none"||j.style.touchAction==="manipulation"){return true
}return false
};
d.attach=function(j,h){return new d(j,h)
};
if(typeof define==="function"&&typeof define.amd==="object"&&define.amd){define(function(){return d
})
}else{if(typeof module!=="undefined"&&module.exports){module.exports=d.attach;
module.exports.FastClick=d
}else{window.FastClick=d
}}}());
(function(a){window.MBP=window.MBP||{};
MBP.viewportmeta=a.querySelector&&a.querySelector('meta[name="viewport"]');
MBP.ua=navigator.userAgent;
MBP.scaleFix=function(){if(MBP.viewportmeta&&/iPhone|iPad|iPod/.test(MBP.ua)&&!/Opera Mini/.test(MBP.ua)){MBP.viewportmeta.content="width=device-width, minimum-scale=1.0, maximum-scale=1.0";
a.addEventListener("gesturestart",MBP.gestureStart,false)
}};
MBP.gestureStart=function(){MBP.viewportmeta.content="width=device-width, minimum-scale=0.25, maximum-scale=1.6"
};
MBP.BODY_SCROLL_TOP=false;
MBP.getScrollTop=function(){var e=window;
var d=a;
return e.pageYOffset||d.compatMode==="CSS1Compat"&&d.documentElement.scrollTop||d.body.scrollTop||0
};
MBP.hideUrlBar=function(){var d=window;
if(!location.hash&&MBP.BODY_SCROLL_TOP!==false){d.scrollTo(0,MBP.BODY_SCROLL_TOP===1?0:1)
}};
MBP.hideUrlBarOnLoad=function(){var f=window;
var e=f.document;
var d;
if(!f.navigator.standalone&&!location.hash&&f.addEventListener){window.scrollTo(0,1);
MBP.BODY_SCROLL_TOP=1;
d=setInterval(function(){if(e.body){clearInterval(d);
MBP.BODY_SCROLL_TOP=MBP.getScrollTop();
MBP.hideUrlBar()
}},15);
f.addEventListener("load",function(){setTimeout(function(){if(MBP.getScrollTop()<20){MBP.hideUrlBar()
}},0)
},false)
}};
MBP.fastButton=function(e,f,d){this.handler=f;
this.pressedClass=typeof d==="undefined"?"pressed":d;
MBP.listenForGhostClicks();
if(e.length&&e.length>1){for(var g in e){this.addClickEvent(e[g])
}}else{this.addClickEvent(e)
}};
MBP.fastButton.prototype.handleEvent=function(d){d=d||window.event;
switch(d.type){case"touchstart":this.onTouchStart(d);
break;
case"touchmove":this.onTouchMove(d);
break;
case"touchend":this.onClick(d);
break;
case"click":this.onClick(d);
break
}};
MBP.fastButton.prototype.onTouchStart=function(e){var d=e.target||e.srcElement;
e.stopPropagation();
d.addEventListener("touchend",this,false);
a.body.addEventListener("touchmove",this,false);
this.startX=e.touches[0].clientX;
this.startY=e.touches[0].clientY;
d.className+=" "+this.pressedClass
};
MBP.fastButton.prototype.onTouchMove=function(d){if(Math.abs(d.touches[0].clientX-this.startX)>10||Math.abs(d.touches[0].clientY-this.startY)>10){this.reset(d)
}};
MBP.fastButton.prototype.onClick=function(e){e=e||window.event;
var d=e.target||e.srcElement;
if(e.stopPropagation){e.stopPropagation()
}this.reset(e);
this.handler.apply(e.currentTarget,[e]);
if(e.type=="touchend"){MBP.preventGhostClick(this.startX,this.startY)
}var f=new RegExp(" ?"+this.pressedClass,"gi");
d.className=d.className.replace(f,"")
};
MBP.fastButton.prototype.reset=function(e){var d=e.target||e.srcElement;
b(d,"touchend",this,false);
b(a.body,"touchmove",this,false);
var f=new RegExp(" ?"+this.pressedClass,"gi");
d.className=d.className.replace(f,"")
};
MBP.fastButton.prototype.addClickEvent=function(d){c(d,"touchstart",this,false);
c(d,"click",this,false)
};
MBP.preventGhostClick=function(d,e){MBP.coords.push(d,e);
window.setTimeout(function(){MBP.coords.splice(0,2)
},2500)
};
MBP.ghostClickHandler=function(g){if(!MBP.hadTouchEvent&&MBP.dodgyAndroid){g.stopPropagation();
g.preventDefault();
return
}for(var f=0,e=MBP.coords.length;
f<e;
f+=2){var d=MBP.coords[f];
var h=MBP.coords[f+1];
if(Math.abs(g.clientX-d)<25&&Math.abs(g.clientY-h)<25){g.stopPropagation();
g.preventDefault()
}}};
MBP.dodgyAndroid=("ontouchstart" in window)&&(navigator.userAgent.indexOf("Android 2.3")!=-1);
MBP.listenForGhostClicks=(function(){var d=false;
return function(){if(d){return
}if(a.addEventListener){a.addEventListener("click",MBP.ghostClickHandler,true)
}c(a.documentElement,"touchstart",function(){MBP.hadTouchEvent=true
},false);
d=true
}
})();
MBP.coords=[];
function c(h,f,g,d){if("addEventListener" in h){try{h.addEventListener(f,g,d)
}catch(j){if(typeof g=="object"&&g.handleEvent){h.addEventListener(f,function(k){g.handleEvent.call(g,k)
},d)
}else{throw j
}}}else{if("attachEvent" in h){if(typeof g=="object"&&g.handleEvent){h.attachEvent("on"+f,function(){g.handleEvent.call(g)
})
}else{h.attachEvent("on"+f,g)
}}}}function b(h,f,g,d){if("removeEventListener" in h){try{h.removeEventListener(f,g,d)
}catch(j){if(typeof g=="object"&&g.handleEvent){h.removeEventListener(f,function(k){g.handleEvent.call(g,k)
},d)
}else{throw j
}}}else{if("detachEvent" in h){if(typeof g=="object"&&g.handleEvent){h.detachEvent("on"+f,function(){g.handleEvent.call(g)
})
}else{h.detachEvent("on"+f,g)
}}}}MBP.autogrow=function(f,d){function g(k){var j=this.scrollHeight;
var l=this.clientHeight;
if(j>l){this.style.height=j+3*h+"px"
}}var e=(d)?d:12;
var h=f.currentStyle?f.currentStyle.lineHeight:getComputedStyle(f,null).lineHeight;
h=(h.indexOf("px")==-1)?e:parseInt(h,10);
f.style.overflow="hidden";
f.addEventListener?f.addEventListener("input",g,false):f.attachEvent("onpropertychange",g)
};
MBP.enableActive=function(){a.addEventListener("touchstart",function(){},false)
};
MBP.preventScrolling=function(){a.addEventListener("touchmove",function(d){if(d.target.type==="range"){return
}d.preventDefault()
},false)
};
MBP.preventZoom=function(){if(MBP.viewportmeta&&navigator.platform.match(/iPad|iPhone|iPod/i)){var f=a.querySelectorAll("input, select, textarea");
var j="width=device-width,initial-scale=1,maximum-scale=";
var d=0;
var h=f.length;
var g=function(){MBP.viewportmeta.content=j+"1"
};
var e=function(){MBP.viewportmeta.content=j+"10"
};
for(;
d<h;
d++){f[d].onfocus=g;
f[d].onblur=e
}}};
MBP.startupImage=function(){var j;
var g;
var h;
var f;
var e;
var d;
h=window.devicePixelRatio;
f=a.getElementsByTagName("head")[0];
if(navigator.platform==="iPad"){j=h===2?"img/startup/startup-tablet-portrait-retina.png":"img/startup/startup-tablet-portrait.png";
g=h===2?"img/startup/startup-tablet-landscape-retina.png":"img/startup/startup-tablet-landscape.png";
e=a.createElement("link");
e.setAttribute("rel","apple-touch-startup-image");
e.setAttribute("media","screen and (orientation: portrait)");
e.setAttribute("href",j);
f.appendChild(e);
d=a.createElement("link");
d.setAttribute("rel","apple-touch-startup-image");
d.setAttribute("media","screen and (orientation: landscape)");
d.setAttribute("href",g);
f.appendChild(d)
}else{j=h===2?"img/startup/startup-retina.png":"img/startup/startup.png";
j=screen.height===568?"img/startup/startup-retina-4in.png":j;
e=a.createElement("link");
e.setAttribute("rel","apple-touch-startup-image");
e.setAttribute("href",j);
f.appendChild(e)
}if(navigator.platform.match(/iPhone|iPod/i)&&(screen.height===568)&&navigator.userAgent.match(/\bOS 6_/)){if(MBP.viewportmeta){MBP.viewportmeta.content=MBP.viewportmeta.content.replace(/\bwidth\s*=\s*320\b/,"width=320.1").replace(/\bwidth\s*=\s*device-width\b/,"")
}}}
})(document);
(function(g){var s=g("html"),r=g("body"),n=g(window),E=0,w=500,A=false,m=s.hasClass("touch"),e="80%",l="80%",u=false,z=false,k={};
var q=PDC.Browser.getViewport()=="mobile"||PDC.Browser.getViewport()=="tablet";
function h(F){return decodeURIComponent((new RegExp("[?|&]"+F+"=([^&;]+?)(&|#|;|$)").exec(location.search)||[,""])[1].replace(/\+/g,"%20"))||null
}function B(){var G=g("div#cboxPrevious");
var F=g("div#cboxNext");
g("div#colorbox").mouseover(function(){var H=g.colorbox.element();
if(!H.hasClass("lb_s7video")){G.stop().animate({left:"60px",opacity:1},300);
F.stop().animate({right:"60px",opacity:1},300)
}}).mouseout(function(){var H=g.colorbox.element();
if(!H.hasClass("lb_s7video")){G.stop().animate({left:"0",opacity:0},300);
F.stop().animate({right:"0",opacity:0},300)
}})
}function v(){g("#cboxClose").on("hover",function(F){g("#cboxClose").unbind("click");
g("#cboxClose").on("click",function(G){G.stopPropagation();
g("#cboxClose").addClass("cboxClose").removeAttr("id");
g.colorbox({scrolling:false,inline:true,maxWidth:"380px",height:"280px",href:"#confirm-dialog"})
})
})
}function p(){var F=g("#main-header").find("nav");
if(F&&F.length){var G=F.find("audio");
var H=F.find(".nav-volume")
}if(!G||!G.length){return false
}bAudio=G.length>0;
if(Modernizr.audio&&bAudio){if(H.hasClass("vol-on")){G[0].pause();
H.removeClass("vol-on")
}}}var y=function(F){F.preventDefault()
};
var a;
var j=function(){window.clearTimeout(a);
var F=function(){var G=g.colorbox.element();
if(G.hasClass("lb_youtube")||G.hasClass("lb_s7video")||G.hasClass("lb_kmjVideo")||G.hasClass("conditionalMsg")){return
}g("#colorbox").css("overflow","visible");
g.colorbox.resize({width:"60%"})
};
a=window.setTimeout(F,w)
};
var f=function(){p();
if(m){}n.on("resize.colorboxInit",j)
};
var D=function(){if(m){}n.off("resize.colorboxInit",j)
};
var x=h("lb");
function o(){A=swfobject.hasFlashPlayerVersion("9.0.2");
g.extend(g.colorbox.settings,{fixed:false,onOpen:f,onClosed:D,photo:true,scalePhotos:true,returnFocus:false,maxWidth:e,onComplete:c});
if(!m){B()
}u=true
}var c=function(){if(g(this).hasClass("lb_image")){g(window).on("resize",function(){if(window.innerHeight>window.innerWidth){var H=g(".cboxPhoto").width();
var G=g(".cboxPhoto").height();
var F=H-(0.25)*(H);
var J=G-(0.25)*(G);
var I=window.screen.width;
g("#colorbox").css("overflow","visible");
if(H>=I&&I>415){g.colorbox.resize({height:J,width:F});
g(".cboxLoadedContent").css({width:g("#cboxContent").innerWidth(),height:g("#cboxContent").innerHeight()});
g(".cboxPhoto").css({width:g("#cboxLoadedContent").innerWidth(),height:g("#cboxLoadedContent").innerHeight()})
}}})
}};
function C(F){if(F.hasClass("lb_image")){F.colorbox({photo:true})
}if(F.hasClass("lb_imageWheel")){F.colorbox({photo:true,rel:"lb_imageWheel"})
}}function b(F){if(F.hasClass("lb_youtube")){F.colorbox({photo:false,iframe:false,innerWidth:e,innerHeight:l,maxWidth:false,maxHeight:false,html:function(){return F.getAgeGatedVideoHTML(F.getYTVideoDivHTML("ytVideoContainer"))
},onComplete:function(){F.playVideo(function(){g(".ytVideoContainer").showYTVideoPanel()
})
},onClosed:function(){}});
F.updateYoutubeMetadata()
}if(F.hasClass("lb_s7video")){F.colorbox({photo:false,iframe:false,innerWidth:e,innerHeight:l,maxWidth:false,maxHeight:false,html:function(){return F.getAgeGatedVideoHTML(F.getVideoDivHTML("s7videoContainer"))
},onComplete:function(){F.playVideo(function(){if(!m){g(".s7videoContainer").showScene7VideoPanel()
}else{g(".s7videoContainer").s7NativeVideo()
}})
},onCleanup:function(){if(typeof onVideoPlayerClose=="function"){onVideoPlayerClose()
}}})
}if(F.hasClass("lb_kmjVideo")){if(A&&!m){F.colorbox({photo:false,iframe:false,innerWidth:e,innerHeight:l,maxWidth:false,maxHeight:false,html:function(){return g(this).getKMJVideoDivHTML("kmjVideoContainer")
},onComplete:function(){g(".kmjVideoContainer").showKMJVideoPanel()
}})
}else{F.nativeKmjVideo()
}}}function d(H){if(H.hasClass("lb_inline")){H.colorbox({scrolling:false,inline:true})
}if(H.hasClass("lb_inline_modal")){H.colorbox({scrolling:false,inline:true,width:"700px",height:"760px",maxWidth:"700px",maxHeight:"760px",overlayClose:true,onComplete:v})
}if(H.hasClass("lb_iframe")){var G={iframe:true,scrolling:true,width:"700px",height:"760px",maxWidth:"800px",maxHeight:"760px",overlayClose:true,fixed:true};
var F=false;
if(H.hasClass("link-btn")){if(q){G.width="300px";
G.height="400px"
}else{G.width="800px";
G.height="600px"
}}if(F){g(H).on("click",function(I){I.preventDefault();
window.open(this.href,"_blank")
})
}else{H.colorbox(G)
}}if(H.hasClass("lb_iframe_rtg")){var G={iframe:true,scrolling:false,width:"640px",height:"640px",overlayClose:true};
H.colorbox(G)
}if(H.hasClass("lb_inline_noscroll")){H.colorbox({inline:true,scrolling:false})
}}g.fn.pdcLightbox=function(){if(!z){return
}if(!u){o()
}g(this).each(function(){var F=g(this);
C(F);
b(F);
d(F)
});
return this
};
g(document).ready(function(){z=true;
if(g(".lb_youtube[vhref]").length>0){g(".lb_youtube[vhref]").each(function(){var G=g(this);
var F=G.attr("vhref");
if(F&&F!=""){G.attr("href",G.attr("vhref"))
}})
}if(g(".lb_image[vhref]").length>0){g(".lb_image[vhref]").each(function(){var G=g(this);
var F=G.attr("vhref");
if(F&&F!=""){G.attr("href",G.attr("vhref"))
}})
}g(".lb_image,.lb_youtube,.lb_kmjVideo,.lb_s7video,.lb_inline,.lb_inline_modal,.lb_linline_noscroll,.lb_iframe,.lb_iframe_rtg,.lb_imageWheel").pdcLightbox();
if(x){g("#"+x).click()
}})
})(jQuery);
$(document).bind("cbox_cleanup",function(){$("#cboxClose").hide()
});
$(document).bind("cbox_complete",function(){var a=$("#cboxClose").get(0);
try{if($("#cboxContent .s7videoContainer").length>0){cb_left=a.style.left;
cb_top=a.style.top;
$(a).show();
return
}var c=$("#colorbox").get(0);
var d=$("#cboxContent").get(0);
var b=a.parentNode;
b.removeChild(a);
d.appendChild(a);
a.style.top="";
a.style.right="";
a.style.left="";
$(a).show()
}catch(f){console.log("load error: "+f)
}});
(function(b,a,c){b.fn.releaseDate=function(d){return this.each(function(){var f=new Date().getTime();
var g=parseInt(b(this).attr("releaseenddate"));
if(g&&g!=-1&&f>g){var e="";
if(b(this).hasClass("to-uppercase")){e=Adobe.I18n.get("OUT NOW")
}else{e=Adobe.I18n.get("Out Now")
}b(this).text(e)
}})
}
})(jQuery,document);
var Adobe={};
Adobe.I18n=(function(d){var c={};
var a="/etc/pdc/i18n/dict.";
var e="en";
var b={};
b.setLocale=function(f){e=f
};
b.getLocale=function(){return e
};
b.setUrlPrefix=function(f){a=f
};
b.getDictionary=function(f){f=f||b.getLocale();
if(!c[f]){var h=a+f+".json";
try{var g=d.ajax(h,{async:false,dataType:"json"});
c[f]=d.parseJSON(g.responseText)
}catch(j){}if(!c[f]){c[f]={}
}}return c[f]
};
b.get=function(g){var h=b.getDictionary();
var f=null;
if(h){f=h[g]
}if(!f){f=g
}return f
};
b.getVar=function(f){if(!f){return null
}return b.get(f)
};
return b
}(jQuery));
if(typeof globalLocale!="undefined"){Adobe.I18n.setLocale(globalLocale)
}(function(b){var f,d=false;
options={threshold:18,defaultBkg:"/etc/designs/pdc/clientlibs_base/images/CM104_ageGateOverlay/ageGateBackground.jpg",texts:{title:"agegate/title",subtitle:"agegate/subtitle",body:"agegate/body",btnText:"agegate/button",failheading:"agegate/failtitle",failsubheading:"agegate/failsubtitle",faildesc:"agegate/failbody"}};
function e(){for(var k in options.texts){if(options.texts.hasOwnProperty(k)){options.texts[k]=Adobe.I18n.get(options.texts[k])
}}d=true
}function h(){var m=PDC.Header.DateFormat;
if(m&&!m==""){m=m.toLowerCase()
}else{m="dmy"
}var n=[m.indexOf("d")+"d",m.indexOf("m")+"m",m.indexOf("y")+"y"].sort(),o={m:"<input class='month' maxlength='2' value='MM' name='month' type='text'>",d:"<input class='day' maxlength='2' value='DD' name='day' type='text'>",y:"<input class='year' maxlength='4' value='YYYY' name='year' type='text'>"},l="";
for(var k=0;
k<n.length;
k++){l+=o[n[k].charAt(1)]
}return l
}function g(o){var m=b(o).find("img"),l=document.body.clientHeight>document.body.clientWidth?"landscape":"portrait",n=options.defaultBkg;
if(!d){e()
}if(m.size()>0){n=m.attr("src")
}var k="";
k+="<div class='colorbox-age-gate "+l+"' style='background-image: url("+n+");'>";
k+="        <div class='opacity'></div>";
k+="        <div class='age-gate-content'>";
k+="            <div class='wrapper'>";
k+="                <div class='text-contents'>";
k+="                    <h1>"+options.texts.title+"</h1>";
k+="                    <h2>"+options.texts.subtitle+"</h2>";
k+="                    <p>"+options.texts.body+"</p>";
k+="                </div>";
k+="                <div class='age-form clearfix'>";
k+="                    <div class='left'>";
k+=h();
k+="                    </div>";
k+="                    <div class='right'>";
k+="                        <a class='link-btn blue-btn let-me-in'>";
k+="                            <div class='btn'>"+options.texts.btnText+"</div>";
k+="                        </a>";
k+="                    </div>";
k+="                </div>";
k+="            </div>   ";
k+="        </div>";
k+="    </div>";
return k
}function a(k){var l=Number(k.attr("data-agethreshold"));
k.removeData("tooyoung");
if(k.attr("data-agegating")!="yes"||(PDC.Header&&(Number(PDC.Header.AgeGateThreshold))>l)){return false
}if(!PDC.isVisitorAgeKnown()){return true
}if(!PDC.isVisitorOldEnough(l)){k.data("tooyoung",true);
return true
}return false
}function c(){var l=b(".colorbox-age-gate"),k=l.find(".age-gate-content");
k.find("h1").text(options.texts.failheading);
k.find("h2").text(options.texts.failsubheading);
k.find("p").text(options.texts.faildesc).addClass("fail");
k.find(".age-form").hide()
}function j(p,l){var r=b(".colorbox-age-gate"),k=p.attr("data-agethreshold"),o=p.attr("data-ageExpiry"),n=r.find(".let-me-in"),m=r.find(".age-gate-content");
if(b(p).data("tooyoung")){c();
return
}function q(){r.hide().remove();
l()
}r.find(".day, .month, .year").setAgeGateInputEvents(n);
n.setAgeGateSubmitHandler(o,k,q,c)
}b.fn.getAgeGatedVideoHTML=function(k){var l=b(this);
if(a(l)){l.data("agegate",true);
l.data("videoHtml",k);
return g(this)
}else{l.data("agegate",false);
return k
}};
b.fn.playVideo=function(k){var l=this;
var m=b(window).scrollTop();
if(b(l).data("agegate")==false){k();
return
}j(b(l),function(){b("#cboxLoadedContent").html((b(l).data("videoHtml")));
b(window).scrollTop(m);
k()
})
}
})(jQuery);
/*!
 * jQuery-ajaxTransport-XDomainRequest - v1.0.1 - 2013-10-17
 * https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest
 * Copyright (c) 2013 Jason Moon (@JSONMOON)
 * Licensed MIT (/blob/master/LICENSE.txt)
 */
(function(d){if(!d.support.cors&&d.ajaxTransport&&window.XDomainRequest){var g=/^https?:\/\//i;
var f=/^get|post$/i;
var e=new RegExp("^"+location.protocol,"i");
var c=/text\/html/i;
var b=/\/json/i;
var a=/\/xml/i;
d.ajaxTransport("* text html xml json",function(q,p,o){if(q.crossDomain&&q.async&&f.test(q.type)&&g.test(q.url)&&e.test(q.url)){var n=null;
var h=(p.dataType||"").toLowerCase();
return{send:function(l,k){n=new XDomainRequest();
if(/^\d+$/.test(p.timeout)){n.timeout=p.timeout
}n.ontimeout=function(){k(500,"timeout")
};
n.onload=function(){var r="Content-Length: "+n.responseText.length+"\r\nContent-Type: "+n.contentType;
var m={code:200,message:"success"};
var w={text:n.responseText};
try{if(h==="html"||c.test(n.contentType)){w.html=n.responseText
}else{if(h==="json"||(h!=="text"&&b.test(n.contentType))){try{w.json=d.parseJSON(n.responseText)
}catch(u){m.code=500;
m.message="parseerror"
}}else{if(h==="xml"||(h!=="text"&&a.test(n.contentType))){var v=new ActiveXObject("Microsoft.XMLDOM");
v.async=false;
try{v.loadXML(n.responseText)
}catch(u){v=undefined
}if(!v||!v.documentElement||v.getElementsByTagName("parsererror").length){m.code=500;
m.message="parseerror";
throw"Invalid XML: "+n.responseText
}w.xml=v
}}}}catch(s){throw s
}finally{k(m.code,m.message,w,r)
}};
n.onprogress=function(){};
n.onerror=function(){k(500,"error",{text:n.responseText})
};
var j="";
if(p.data){j=(d.type(p.data)==="string")?p.data:d.param(p.data)
}n.open(q.type,q.url);
n.send(j)
},abort:function(){if(n){n.abort()
}}}
}})
}})(jQuery);
$(document).ready(function(){window.setTimeout(function(){var a=document.location.href.match(/video=([0-9]+)/);
if(a){var c=parseInt(a[1])-1;
var b=$(".videoItem a");
if(c!=-1&&b.get(c)){$(b.get(c)).trigger("click")
}else{if(c!=-1&&b.get(0)){$(b.get(0)).trigger("click")
}else{$(".prod-media .lb_youtube,.prod-media .lb_s7video").trigger("click")
}}}},500)
});
(function(b){var a=function(e,d){var c=!/[^\w\-\.:]/.test(e)?a.cache[e]=a.cache[e]||a(a.load(e)):new Function(a.arg+",tmpl","var _e=tmpl.encode"+a.helper+",_s='"+e.replace(a.regexp,a.func)+"';return _s;");
return d?c(d,a):function(f){return c(f,a)
}
};
a.cache={};
a.load=function(c){return document.getElementById(c).innerHTML
};
a.regexp=/([\s'\\])(?![^%]*%\})|(?:\{%(=|#)([\s\S]+?)%\})|(\{%)|(%\})/g;
a.func=function(d,h,g,f,e,c){if(h){return{"\n":"\\n","\r":"\\r","\t":"\\t"," ":" "}[d]||"\\"+d
}if(g){if(g==="="){return"'+_e("+f+")+'"
}return"'+("+f+"||'')+'"
}if(e){return"';"
}if(c){return"_s+='"
}};
a.encReg=/[<>&"'\x00]/g;
a.encMap={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#39;"};
a.encode=function(c){return String(c||"").replace(a.encReg,function(d){return a.encMap[d]||""
})
};
a.arg="o";
a.helper=",print=function(s,e){_s+=e&&(s||'')||_e(s);},include=function(s,d){_s+=tmpl(s,d);}";
if(typeof define==="function"&&define.amd){define(function(){return a
})
}else{b.tmpl=a
}}(this));
var PDC=PDC||{};
PDC.portableId={pidData:{},generated:false,callbacks:[],getPidData:function(d,c){PDC.portableId.callbacks.push(d);
var a=function(e){PDC.portableId.pidData=e||{};
$(PDC.portableId.callbacks).each(function(f,g){g(PDC.portableId.pidData)
});
PDC.portableId.callbacks=[]
};
if(document.cookie.match("userinfo")){if(typeof PDC.portableId.pidData.pidUrl!=="undefined"&&PDC.portableId.pidData.pidUrl!==null&&PDC.portableId.pidData.pidUrl!==""){a(PDC.portableId.pidData);
return 0
}var b={userInfoCookie:$.cookie("userinfo")};
$.ajax({type:"get",async:true,crossDomain:true,data:b,cache:false,url:c,dataType:"json"}).done(function(e){a(e)
})
}else{a(null)
}},generatePid:function(d,c){PDC.portableId.callbacks.push(d);
var a=function(e){PDC.portableId.pidData=e||{};
$(PDC.portableId.callbacks).each(function(f,g){g(PDC.portableId.pidData)
});
PDC.portableId.callbacks=[];
PDC.portableId.generated=false
};
if(document.cookie.match("userinfo")){if(PDC.portableId.generated){return
}PDC.portableId.generated=true;
var b={userInfoCookie:$.cookie("userinfo")};
$.ajax({type:"POST",async:true,crossDomain:true,data:b,cache:false,url:c,dataType:"json"}).done(function(e){a(e)
})
}else{a(null)
}}};
PDC.DTM=PDC.DTM||{};
PDC.DTM.rs_json=JSON.parse('[ {"reportsuite": "snepdcar", "locale" : "es-ar", "country" : "Argentina"},{"reportsuite": "snepdccl", "locale" : "es-cl", "country" : "Chile"},{"reportsuite": "snepdcco", "locale" : "es-co", "country" : "Columbia"},{"reportsuite": "snepdccr", "locale" : "es-cr", "country" : "Costa Rica"},{"reportsuite": "snepdcec", "locale" : "es-ec", "country" : "Ecuador"},{"reportsuite": "snepdcsv", "locale" : "es-sv", "country" : "El Savador"},{"reportsuite": "snepdcgt", "locale" : "es-gt", "country" : "Guatemala"},{"reportsuite": "snepdchn", "locale" : "es-hn", "country" : "Honduras"},{"reportsuite": "snepdcmx", "locale" : "es-mx", "country" : "Mexico"},{"reportsuite": "snepdcni", "locale" : "es-ni", "country" : "Nicaragua"},{"reportsuite": "snepdcpa", "locale" : "es-pa", "country" : "Panama"},{"reportsuite": "snepdcpe", "locale" : "es-pe", "country" : "Peru"},{"reportsuite": "snepdcve", "locale" : "es-ve", "country" : "Venezuela"},{"reportsuite": "snepdcbr", "locale" : "pt-br", "country" : "Brazil"},{"reportsuite": "snepdcus", "locale" : "es-us", "country" : "US"},{"reportsuite": "snepdcca", "locale" : "en-ca", "country" : "Canada"},{"reportsuite": "snepdcca", "locale" : "fr-ca", "country" : "Canada"},{"reportsuite": "snepdcbo", "locale" : "es-bo", "country" : "Bolivia"},{"reportsuite": "snepdcpy", "locale" : "es-py", "country" : "Paraguay"},{"reportsuite": "snepdcuy", "locale" : "es-uy", "country" : "Uruguay"},{"reportsuite": "snepdclatam", "locale" : "latam", "country" : "All latam Countries"},{"reportsuite": "snepdcscea", "locale" : "scea", "country" : "US"},{"reportsuite": "snepdcus", "locale" : "en-us", "country" : "USA"}]');
PDC.DTM.getLocaleReportSuite=function(){var a=undefined;
var b=document.location.pathname.split("/");
if(b.length>2){for(var c in PDC.DTM.rs_json){if(PDC.DTM.rs_json.hasOwnProperty(c)){if(PDC.DTM.rs_json[c].locale==b[1]){if(PDC.isLiveURL(document.location.host)){a=PDC.DTM.rs_json[c].reportsuite
}else{a=PDC.DTM.rs_json[c].reportsuite+"-dev"
}}}}if(a==undefined){window.console.warn("Unexpected locale, so fallback to default report suite for locale "+b[1]);
a="snepdc5gb-dev"
}}else{window.console.warn("Unexpected, so fallback to default report suite for locale "+b[1]);
a="snepdc5gb-dev"
}return a
};
PDC.DTM.getBrowserName=function(){var a=navigator.userAgent;
if(a.indexOf("ps3")>-1){a="ps3-browser"
}else{if(a.indexOf("psvita")>-1){a="psvita-browser"
}else{if(a.indexOf("Chrome")>-1){a="chrome-browser"
}else{if(a.indexOf("Firefox")>-1){a="firefox-browser"
}}}}return a
};
(function setUpDTMAnalytics(d,c,b){var a;
if(b){b.init();
a=b.event.click.elements.join(",");
$("body").on("click",a,b.event.click.eventListener)
}})(window,PDC.isLiveURL,PDC.DigitalDataAPI);
$(document).ready(function(){var a=$("img.cq-dd-image");
$.each(a,function(){$(this).removeAttr("title")
})
});
window.sharedNav=window.sharedNav||{};
window.sharedNav.opts=window.sharedNav.opts||{skipToAnchor:"page-content"};
(function(c,d,g,b){var e=g.getElementById("shared-nav-container"),h=g.getElementById("jetstream-tertiary-nav"),a=function(){var o=d.location.hash,m=0,l=0;
if(d.location.hash&&!c(o).length){if(c("*[name="+o.substring(1)+"]").length){o="*[name='"+o.substring(1)+"']:eq(0)"
}}if(d.location.hash&&c(o).length){if(c("#subnav").length){l+=c("#subnav").outerHeight()
}if(c(".secondary-nav").length){l+=c(".secondary-nav").outerHeight()
}if(PDC.Browser.device=="ipad"){l-=30
}var k=(d.innerHeight<d.innerWidth)?"landscape":"portrait";
if(c(g).width()==768||k=="portrait"){l-=20
}l+=c("#shared-nav-root").outerHeight()+c("#sony-bar").outerHeight()+10;
var n=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor);
if(d.location.href.indexOf("/vue/")!=-1&&(n||PDC.Browser.device=="ipad")){return
}else{c(o).find(".fakeObj").remove();
c(o).prepend('<span class="fakeObj" style="visibility: hidden; width: 0px; height: 1px; float: left;"></span>');
if(d.location.hash=="#california_privacy_rights"&&c(g).width()<=1024){m=c(o+" span.fakeObj").offset().top-20
}else{m=c(o+" span.fakeObj").offset().top-l
}setTimeout(function(){c("html, body").animate({scrollTop:m},1,function(){if(d.paggeYOffset!=m){c("html, body").animate({scrollTop:m},500)
}})
},500)
}}},f=function(){if(e){d.sharedNav.makeSticky(h||e)
}},j=function(){d.addEventListener("hashchange",a,false);
a();
f()
};
c(g).ready(function(){j()
})
})(jQuery,window,document);

}
/*
     FILE ARCHIVED ON 21:22:34 Jun 15, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:36:48 Apr 14, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 851.43
  exclusion.robots: 139.908
  exclusion.robots.policy: 139.896
  xauthn.identify: 88.566
  xauthn.chkprivs: 51.086
  RedisCDXSource: 1.716
  esindex: 0.012
  LoadShardBlock: 622.272 (3)
  PetaboxLoader3.datanode: 661.652 (5)
  CDXLines.iter: 34.046 (3)
  load_resource: 159.796 (2)
  PetaboxLoader3.resolve: 83.626 (2)
*/