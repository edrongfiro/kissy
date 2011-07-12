/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: ${build.time}
*/
KISSY.add("component/container",function(f,g,h){return g.create(h,{bindUI:function(){this.get("view").get("el").on("mousedown mouseup mouseover mouseout",this._handleChildMouseEvents,this)},_handleChildMouseEvents:function(e){var a=this.getOwnerControl(f.one(e.target)[0]);if(a)switch(e.type){case "mousedown":a._handleMouseDown(e);break;case "mouseup":a._handleMouseUp(e);break;case "mouseover":a._handleMouseOver(e);break;case "mouseout":a._handleMouseOut(e)}},getOwnerControl:function(e){for(var a=
this.get("children"),b=a.length,c=this.get("view").get("el")[0];e&&e!==c;){for(var d=0;d<b;d++)if(a[d].get("view").get("el")[0]===e)return a[d];e=e.parentNode}return null}})},{requires:["uibase","./modelcontrol"]});
KISSY.add("component/modelcontrol",function(f,g){function h(a){return function(b){this.get("view").set(a,b)}}function e(a){a+="";return a.charAt(0).toUpperCase()+a.substring(1)}return g.create([g.Box],{renderUI:function(){this.get("view").render();var a=this.get("children");f.each(a,function(b){b.render()})},createDom:function(){var a=this.__attrs,b;for(b in a)if(a.hasOwnProperty(b))if(a[b].view&&!this["_uiSet"+e(b)])this["_uiSet"+e(b)]=h(b);if(!(a=this.get("view"))){a=this.constructor;for(var c;a&&
!c;){c=a.DefaultRender;a=a.superclass&&a.superclass.constructor}if(c){a=this.__attrs;b={};for(var d in a)if(a.hasOwnProperty(d)){var i;if(a[d].view&&(i=this.get(d))!==undefined)b[d]=i}a=new c(b)}else a=0}if(c=a){c.create();this.get("allowTextSelection_")||c.get("el").unselectable();this.set("view",c)}else{f.error("no view for");f.error(this.constructor)}},getContentElement:function(){var a=this.get("view");return a.get("contentEl")||a.get("el")},addChild:function(a,b,c){var d=this.get("children"),
i=d[b];b?d.splice(b,0,a):d.push(a);this._initChild(a,i,c)},_initChild:function(a,b,c){this.create();var d=this.getContentElement();a.set("parent",this);a.set("render",d);a.set("elBefore",b);if(c)a.render();else{a.create();d[0].insertBefore(a.get("el")[0],b&&b[0]||null)}},removeChild:function(a,b){var c=this.get("children"),d=f.indexOf(a,c);d!=-1&&c.splice(d,1);b&&a.destroy()},getChildAt:function(a){return this.get("children")[a]},_uiSetHandleMouseEvents:function(a){var b=this.get("view").get("el");
if(a){b.on("mouseenter",this._handleMouseEnter,this);b.on("mouseleave",this._handleMouseLeave,this);b.on("mousedown",this._handleMouseDown,this);b.on("mouseup",this._handleMouseUp,this);b.on("click",this._handleClick,this)}else{b.detach("mouseenter",this._handleMouseEnter,this);b.detach("mouseleave",this._handleMouseLeave,this);b.detach("mousedown",this._handleMouseDown,this);b.detach("mouseup",this._handleMouseUp,this);b.detach("click",this._handleClick,this)}},isMouseEventWithinElement_:function(a,
b){var c=a.relatedTarget;c=c&&f.one(c)[0];if(!c)return false;if(c===b[0]||b.contains(c))return true},_uiSetSupportFocused:function(a){var b=this.get("view").get("el");if(a){b.on("focus",this._handleFocus,this);b.on("blur",this._handleBlur,this);b.on("keydown",this.__handleKeydown,this)}else{b.detach("focus",this._handleFocus,this);b.detach("blur",this._handleBlur,this);b.detach("keydown",this.__handleKeydown,this)}},_forwordToView:function(a,b){var c=this.get("view");c[a]&&c[a](b)},_handleMouseOver:function(a){if(this.get("disabled"))return true;
var b=this.get("view").get("el");this.isMouseEventWithinElement_(a,b)||this._handleMouseEnter(a)},_handleMouseOut:function(a){if(this.get("disabled"))return true;var b=this.get("view").get("el");this.isMouseEventWithinElement_(a,b)||this._handleMouseLeave(a)},_handleMouseEnter:function(a){if(this.get("disabled"))return true;this._forwordToView("_handleMouseEnter",a)},_handleMouseLeave:function(a){if(this.get("disabled"))return true;this._forwordToView("_handleMouseLeave",a)},_handleMouseDown:function(a){if(this.get("disabled"))return true;
this._forwordToView("_handleMouseDown",a);var b=this.get("el");a.which==1&&b.attr("tabindex")>=0&&this.getKeyEventTarget()[0].focus()},getKeyEventTarget:function(){return this.get("view").getKeyEventTarget()},_handleMouseUp:function(a){if(this.get("disabled"))return true;this._forwordToView("_handleMouseUp",a)},_handleFocus:function(a){if(this.get("disabled"))return true;this._forwordToView("_handleFocus",a)},_handleBlur:function(a){if(this.get("disabled"))return true;this._forwordToView("_handleBlur",
a)},_handleKeydown:function(a){this._forwordToView("_handleKeydown",a)},__handleKeydown:function(a){if(this.get("disabled"))return true;this.get("view");if(a.keyCode==13||a.keyCode==32){a.preventDefault();return this._handleClick(a)}else return this._handleKeydown(a)},_handleClick:function(a){if(this.get("disabled"))return true;this._forwordToView("_handleClick",a)},_uiSetDisabled:function(a){this.get("view").set("disabled",a)},destructor:function(){var a=this.get("children");f.each(a,function(b){b.destroy()});
(a=this.get("view"))&&a.destroy()}},{ATTRS:{handleMouseEvents:{value:true},supportFocused:{value:true},children:{value:[],setter:function(a){var b=this;f.each(a,function(c){b._initChild(c)})}},srcNode:{view:true},prefixCls:{view:true,value:"ks-"},render:{view:true},parent:{},view:{},disabled:{value:false,view:true},allowTextSelection_:{value:false}}})},{requires:["uibase"]});
KISSY.add("component/render",function(f,g){return g.create([g.Box.Render],{getKeyEventTarget:function(){return this.get("el")}},{ATTRS:{srcNode:{},prefixCls:{},disabled:{}}})},{requires:["uibase"]});KISSY.add("component",function(f,g,h,e){return{ModelControl:g,Render:h,Container:e}},{requires:["component/modelcontrol","component/render","component/container"]});