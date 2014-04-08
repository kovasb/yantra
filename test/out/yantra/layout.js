// Compiled by ClojureScript 0.0-2197
goog.provide('yantra.layout');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('React');
goog.require('yantra.datatypes');
goog.require('yantra.datatypes');
yantra.layout.layout_renderers = new cljs.core.PersistentArrayMap.fromArray([yantra.datatypes.Column,(function (cursor,owner,opts){var builder = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"builder","builder",1244848909));if(typeof yantra.layout.t9560 !== 'undefined')
{} else
{
/**
* @constructor
*/
yantra.layout.t9560 = (function (builder,opts,owner,cursor,meta9561){
this.builder = builder;
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta9561 = meta9561;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
yantra.layout.t9560.cljs$lang$type = true;
yantra.layout.t9560.cljs$lang$ctorStr = "yantra.layout/t9560";
yantra.layout.t9560.cljs$lang$ctorPrWriter = ((function (builder){
return (function (this__4029__auto__,writer__4030__auto__,opt__4031__auto__){return cljs.core._write.call(null,writer__4030__auto__,"yantra.layout/t9560");
});})(builder))
;
yantra.layout.t9560.prototype.om$core$IRender$ = true;
yantra.layout.t9560.prototype.om$core$IRender$render$arity$1 = ((function (builder){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,cljs.core.into_array.call(null,cljs.core.map.call(null,((function (___$1,builder){
return (function (p1__9559_SHARP_){return React.DOM.div(null,self__.builder.call(null,p1__9559_SHARP_));
});})(___$1,builder))
,new cljs.core.Keyword(null,"contents","contents",4741549708).cljs$core$IFn$_invoke$arity$1(self__.cursor))));
});})(builder))
;
yantra.layout.t9560.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (builder){
return (function (_9562){var self__ = this;
var _9562__$1 = this;return self__.meta9561;
});})(builder))
;
yantra.layout.t9560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (builder){
return (function (_9562,meta9561__$1){var self__ = this;
var _9562__$1 = this;return (new yantra.layout.t9560(self__.builder,self__.opts,self__.owner,self__.cursor,meta9561__$1));
});})(builder))
;
yantra.layout.__GT_t9560 = ((function (builder){
return (function __GT_t9560(builder__$1,opts__$1,owner__$1,cursor__$1,meta9561){return (new yantra.layout.t9560(builder__$1,opts__$1,owner__$1,cursor__$1,meta9561));
});})(builder))
;
}
return (new yantra.layout.t9560(builder,opts,owner,cursor,null));
})], true, false);
