/*!
 * jQuery UI Sortable 1.11.0
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/sortable/
 */

(function(e){typeof define=="function"&&define.amd?define(["jquery","./core","./mouse","./widget"],e):e(jQuery)})(function(e){return e.widget("ui.sortable",e.ui.mouse,{version:"1.11.0",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(e,t,n){return e>=t&&e<t+n},_isFloating:function(e){return/left|right/.test(e.css("float"))||/inline|table-cell/.test(e.css("display"))},_create:function(){var e=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?e.axis==="x"||this._isFloating(this.items[0].item):!1,this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(e,t){this._super(e,t),e==="handle"&&this._setHandleClassName()},_setHandleClassName:function(){this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"),e.each(this.items,function(){(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item).addClass("ui-sortable-handle")})},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"),this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(t,n){var r=null,i=!1,s=this;if(this.reverting)return!1;if(this.options.disabled||this.options.type==="static")return!1;this._refreshItems(t),e(t.target).parents().each(function(){if(e.data(this,s.widgetName+"-item")===s)return r=e(this),!1}),e.data(t.target,s.widgetName+"-item")===s&&(r=e(t.target));if(!r)return!1;if(this.options.handle&&!n){e(this.options.handle,r).find("*").addBack().each(function(){this===t.target&&(i=!0)});if(!i)return!1}return this.currentItem=r,this._removeCurrentsFromItems(),!0},_mouseStart:function(t,n,r){var i,s,o=this.options;this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),o.containment&&this._setContainment(),o.cursor&&o.cursor!=="auto"&&(s=this.document.find("body"),this.storedCursor=s.css("cursor"),s.css("cursor",o.cursor),this.storedStylesheet=e("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(s)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions();if(!r)for(i=this.containers.length-1;i>=0;i--)this.containers[i]._trigger("activate",t,this._uiHash(this));return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){var n,r,i,s,o=this.options,u=!1;this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=u=this.scrollParent[0].scrollTop+o.scrollSpeed:t.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=u=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=u=this.scrollParent[0].scrollLeft+o.scrollSpeed:t.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=u=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(t.pageY-e(document).scrollTop()<o.scrollSensitivity?u=e(document).scrollTop(e(document).scrollTop()-o.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<o.scrollSensitivity&&(u=e(document).scrollTop(e(document).scrollTop()+o.scrollSpeed)),t.pageX-e(document).scrollLeft()<o.scrollSensitivity?u=e(document).scrollLeft(e(document).scrollLeft()-o.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<o.scrollSensitivity&&(u=e(document).scrollLeft(e(document).scrollLeft()+o.scrollSpeed))),u!==!1&&e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!=="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!=="x")this.helper[0].style.top=this.position.top+"px";for(n=this.items.length-1;n>=0;n--){r=this.items[n],i=r.item[0],s=this._intersectsWithPointer(r);if(!s)continue;if(r.instance!==this.currentContainer)continue;if(i!==this.currentItem[0]&&this.placeholder[s===1?"next":"prev"]()[0]!==i&&!e.contains(this.placeholder[0],i)&&(this.options.type==="semi-dynamic"?!e.contains(this.element[0],i):!0)){this.direction=s===1?"down":"up";if(this.options.tolerance!=="pointer"&&!this._intersectsWithSides(r))break;this._rearrange(t,r),this._trigger("change",t,this._uiHash());break}}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,n){if(!t)return;e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t);if(this.options.revert){var r=this,i=this.placeholder.offset(),s=this.options.axis,o={};if(!s||s==="x")o.left=i.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft);if(!s||s==="y")o.top=i.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop);this.reverting=!0,e(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){r._clear(t)})}else this._clear(t,n);return!1},cancel:function(){if(this.dragging){this._mouseUp({target:null}),this.options.helper==="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var n=this._getItemsAsjQuery(t&&t.connected),r=[];return t=t||{},e(n).each(function(){var n=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/);n&&r.push((t.key||n[1]+"[]")+"="+(t.key&&t.expression?n[1]:n[2]))}),!r.length&&t.key&&r.push(t.key+"="),r.join("&")},toArray:function(t){var n=this._getItemsAsjQuery(t&&t.connected),r=[];return t=t||{},n.each(function(){r.push(e(t.item||this).attr(t.attribute||"id")||"")}),r},_intersectsWith:function(e){var t=this.positionAbs.left,n=t+this.helperProportions.width,r=this.positionAbs.top,i=r+this.helperProportions.height,s=e.left,o=s+e.width,u=e.top,a=u+e.height,f=this.offset.click.top,l=this.offset.click.left,c=this.options.axis==="x"||r+f>u&&r+f<a,h=this.options.axis==="y"||t+l>s&&t+l<o,p=c&&h;return this.options.tolerance==="pointer"||this.options.forcePointerForContainers||this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?p:s<t+this.helperProportions.width/2&&n-this.helperProportions.width/2<o&&u<r+this.helperProportions.height/2&&i-this.helperProportions.height/2<a},_intersectsWithPointer:function(e){var t=this.options.axis==="x"||this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top,e.height),n=this.options.axis==="y"||this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left,e.width),r=t&&n,i=this._getDragVerticalDirection(),s=this._getDragHorizontalDirection();return r?this.floating?s&&s==="right"||i==="down"?2:1:i&&(i==="down"?2:1):!1},_intersectsWithSides:function(e){var t=this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),n=this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),r=this._getDragVerticalDirection(),i=this._getDragHorizontalDirection();return this.floating&&i?i==="right"&&n||i==="left"&&!n:r&&(r==="down"&&t||r==="up"&&!t)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return e!==0&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return e!==0&&(e>0?"right":"left")},refresh:function(e){return this._refreshItems(e),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var e=this.options;return e.connectWith.constructor===String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){function f(){o.push(this)}var n,r,i,s,o=[],u=[],a=this._connectWith();if(a&&t)for(n=a.length-1;n>=0;n--){i=e(a[n]);for(r=i.length-1;r>=0;r--)s=e.data(i[r],this.widgetFullName),s&&s!==this&&!s.options.disabled&&u.push([e.isFunction(s.options.items)?s.options.items.call(s.element):e(s.options.items,s.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),s])}u.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(n=u.length-1;n>=0;n--)u[n][0].each(f);return e(o)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e){for(var n=0;n<t.length;n++)if(t[n]===e.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var n,r,i,s,o,u,a,f,l=this.items,c=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],h=this._connectWith();if(h&&this.ready)for(n=h.length-1;n>=0;n--){i=e(h[n]);for(r=i.length-1;r>=0;r--)s=e.data(i[r],this.widgetFullName),s&&s!==this&&!s.options.disabled&&(c.push([e.isFunction(s.options.items)?s.options.items.call(s.element[0],t,{item:this.currentItem}):e(s.options.items,s.element),s]),this.containers.push(s))}for(n=c.length-1;n>=0;n--){o=c[n][1],u=c[n][0];for(r=0,f=u.length;r<f;r++)a=e(u[r]),a.data(this.widgetName+"-item",o),l.push({item:a,instance:o,width:0,height:0,left:0,top:0})}},refreshPositions:function(t){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var n,r,i,s;for(n=this.items.length-1;n>=0;n--){r=this.items[n];if(r.instance!==this.currentContainer&&this.currentContainer&&r.item[0]!==this.currentItem[0])continue;i=this.options.toleranceElement?e(this.options.toleranceElement,r.item):r.item,t||(r.width=i.outerWidth(),r.height=i.outerHeight()),s=i.offset(),r.left=s.left,r.top=s.top}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(n=this.containers.length-1;n>=0;n--)s=this.containers[n].element.offset(),this.containers[n].containerCache.left=s.left,this.containers[n].containerCache.top=s.top,this.containers[n].containerCache.width=this.containers[n].element.outerWidth(),this.containers[n].containerCache.height=this.containers[n].element.outerHeight();return this},_createPlaceholder:function(t){t=t||this;var n,r=t.options;if(!r.placeholder||r.placeholder.constructor===String)n=r.placeholder,r.placeholder={element:function(){var r=t.currentItem[0].nodeName.toLowerCase(),i=e("<"+r+">",t.document[0]).addClass(n||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return r==="tr"?t.currentItem.children().each(function(){e("<td>&#160;</td>",t.document[0]).attr("colspan",e(this).attr("colspan")||1).appendTo(i)}):r==="img"&&i.attr("src",t.currentItem.attr("src")),n||i.css("visibility","hidden"),i},update:function(e,i){if(n&&!r.forcePlaceholderSize)return;i.height()||i.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),i.width()||i.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10))}};t.placeholder=e(r.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),r.placeholder.update(t,t.placeholder)},_contactContainers:function(t){var n,r,i,s,o,u,a,f,l,c,h=null,p=null;for(n=this.containers.length-1;n>=0;n--){if(e.contains(this.currentItem[0],this.containers[n].element[0]))continue;if(this._intersectsWith(this.containers[n].containerCache)){if(h&&e.contains(this.containers[n].element[0],h.element[0]))continue;h=this.containers[n],p=n}else this.containers[n].containerCache.over&&(this.containers[n]._trigger("out",t,this._uiHash(this)),this.containers[n].containerCache.over=0)}if(!h)return;if(this.containers.length===1)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1);else{i=1e4,s=null,l=h.floating||this._isFloating(this.currentItem),o=l?"left":"top",u=l?"width":"height",c=l?"clientX":"clientY";for(r=this.items.length-1;r>=0;r--){if(!e.contains(this.containers[p].element[0],this.items[r].item[0]))continue;if(this.items[r].item[0]===this.currentItem[0])continue;a=this.items[r].item.offset()[o],f=!1,t[c]-a>this.items[r][u]/2&&(f=!0),Math.abs(t[c]-a)<i&&(i=Math.abs(t[c]-a),s=this.items[r],this.direction=f?"up":"down")}if(!s&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return;s?this._rearrange(t,s,null,!0):this._rearrange(t,null,this.containers[p].element,!0),this._trigger("change",t,this._uiHash()),this.containers[p]._trigger("change",t,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(t){var n=this.options,r=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t,this.currentItem])):n.helper==="clone"?this.currentItem.clone():this.currentItem;return r.parents("body").length||e(n.appendTo!=="parent"?n.appendTo:this.currentItem[0].parentNode)[0].appendChild(r[0]),r[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!r[0].style.width||n.forceHelperSize)&&r.width(this.currentItem.width()),(!r[0].style.height||n.forceHelperSize)&&r.height(this.currentItem.height()),r},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&e.ui.ie)t={top:0,left:0};return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,n,r,i=this.options;i.containment==="parent"&&(i.containment=this.helper[0].parentNode);if(i.containment==="document"||i.containment==="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,e(i.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(e(i.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];/^(document|window|parent)$/.test(i.containment)||(t=e(i.containment)[0],n=e(i.containment).offset(),r=e(t).css("overflow")!=="hidden",this.containment=[n.left+(parseInt(e(t).css("borderLeftWidth"),10)||0)+(parseInt(e(t).css("paddingLeft"),10)||0)-this.margins.left,n.top+(parseInt(e(t).css("borderTopWidth"),10)||0)+(parseInt(e(t).css("paddingTop"),10)||0)-this.margins.top,n.left+(r?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(e(t).css("borderLeftWidth"),10)||0)-(parseInt(e(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,n.top+(r?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(e(t).css("borderTopWidth"),10)||0)-(parseInt(e(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(t,n){n||(n=this.position);var r=t==="absolute"?1:-1,i=this.cssPosition!=="absolute"||this.scrollParent[0]!==document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,s=/(html|body)/i.test(i[0].tagName);return{top:n.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():s?0:i.scrollTop())*r,left:n.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():s?0:i.scrollLeft())*r}},_generatePosition:function(t){var n,r,i=this.options,s=t.pageX,o=t.pageY,u=this.cssPosition!=="absolute"||this.scrollParent[0]!==document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(u[0].tagName);return this.cssPosition==="relative"&&(this.scrollParent[0]===document||this.scrollParent[0]===this.offsetParent[0])&&(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(s=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(s=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),i.grid&&(n=this.originalPageY+Math.round((o-this.originalPageY)/i.grid[1])*i.grid[1],o=this.containment?n-this.offset.click.top>=this.containment[1]&&n-this.offset.click.top<=this.containment[3]?n:n-this.offset.click.top>=this.containment[1]?n-i.grid[1]:n+i.grid[1]:n,r=this.originalPageX+Math.round((s-this.originalPageX)/i.grid[0])*i.grid[0],s=this.containment?r-this.offset.click.left>=this.containment[0]&&r-this.offset.click.left<=this.containment[2]?r:r-this.offset.click.left>=this.containment[0]?r-i.grid[0]:r+i.grid[0]:r)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():a?0:u.scrollTop()),left:s-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():a?0:u.scrollLeft())}},_rearrange:function(e,t,n,r){n?n[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],this.direction==="down"?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var i=this.counter;this._delay(function(){i===this.counter&&this.refreshPositions(!r)})},_clear:function(e,t){function i(e,t,n){return function(r){n._trigger(e,r,t._uiHash(t))}}this.reverting=!1;var n,r=[];!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null;if(this.helper[0]===this.currentItem[0]){for(n in this._storedCSS)if(this._storedCSS[n]==="auto"||this._storedCSS[n]==="static")this._storedCSS[n]="";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!t&&r.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),(this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!t&&r.push(function(e){this._trigger("update",e,this._uiHash())}),this!==this.currentContainer&&(t||(r.push(function(e){this._trigger("remove",e,this._uiHash())}),r.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),r.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer))));for(n=this.containers.length-1;n>=0;n--)t||r.push(i("deactivate",this,this.containers[n])),this.containers[n].containerCache.over&&(r.push(i("out",this,this.containers[n])),this.containers[n].containerCache.over=0);this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex),this.dragging=!1;if(this.cancelHelperRemoval){if(!t){this._trigger("beforeStop",e,this._uiHash());for(n=0;n<r.length;n++)r[n].call(this,e);this._trigger("stop",e,this._uiHash())}return this.fromOutside=!1,!1}t||this._trigger("beforeStop",e,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null;if(!t){for(n=0;n<r.length;n++)r[n].call(this,e);this._trigger("stop",e,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var n=t||this;return{helper:n.helper,placeholder:n.placeholder||e([]),position:n.position,originalPosition:n.originalPosition,offset:n.positionAbs,item:n.currentItem,sender:t?t.element:null}}})});