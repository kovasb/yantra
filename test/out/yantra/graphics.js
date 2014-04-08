// Compiled by ClojureScript 0.0-2197
goog.provide('yantra.graphics');
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
yantra.graphics.BoundingBox = (function (){var obj9418 = {};return obj9418;
})();
yantra.graphics.bounding_points = (function bounding_points(x){if((function (){var and__3450__auto__ = x;if(and__3450__auto__)
{return x.yantra$graphics$BoundingBox$bounding_points$arity$1;
} else
{return and__3450__auto__;
}
})())
{return x.yantra$graphics$BoundingBox$bounding_points$arity$1(x);
} else
{var x__4089__auto__ = (((x == null))?null:x);return (function (){var or__3462__auto__ = (yantra.graphics.bounding_points[goog.typeOf(x__4089__auto__)]);if(or__3462__auto__)
{return or__3462__auto__;
} else
{var or__3462__auto____$1 = (yantra.graphics.bounding_points["_"]);if(or__3462__auto____$1)
{return or__3462__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"BoundingBox.bounding-points",x);
}
}
})().call(null,x);
}
});
yantra.datatypes.Rectangle.prototype.yantra$graphics$BoundingBox$ = true;
yantra.datatypes.Rectangle.prototype.yantra$graphics$BoundingBox$bounding_points$arity$1 = (function (this$){var this$__$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(this$__$1),new cljs.core.Keyword(null,"p2","p2",1013907764).cljs$core$IFn$_invoke$arity$1(this$__$1)], null);
});
yantra.datatypes.Disk.prototype.yantra$graphics$BoundingBox$ = true;
yantra.datatypes.Disk.prototype.yantra$graphics$BoundingBox$bounding_points$arity$1 = (function (this$){var this$__$1 = this;var point = new cljs.core.Keyword(null,"point","point",1120749826).cljs$core$IFn$_invoke$arity$1(this$__$1);var radius = new cljs.core.Keyword(null,"radius","radius",4370292740).cljs$core$IFn$_invoke$arity$1(this$__$1);var x = cljs.core.first.call(null,point);var y = cljs.core.last.call(null,point);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + radius),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - radius),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + radius)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - radius)], null)], null);
});
yantra.datatypes.Line.prototype.yantra$graphics$BoundingBox$ = true;
yantra.datatypes.Line.prototype.yantra$graphics$BoundingBox$bounding_points$arity$1 = (function (this$){var this$__$1 = this;return new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(this$__$1);
});
yantra.datatypes.Point.prototype.yantra$graphics$BoundingBox$ = true;
yantra.datatypes.Point.prototype.yantra$graphics$BoundingBox$bounding_points$arity$1 = (function (this$){var this$__$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1120749826).cljs$core$IFn$_invoke$arity$1(this$__$1)], null);
});
yantra.datatypes.Style.prototype.yantra$graphics$BoundingBox$ = true;
yantra.datatypes.Style.prototype.yantra$graphics$BoundingBox$bounding_points$arity$1 = (function (this$){var this$__$1 = this;return yantra.graphics.bounding_points.call(null,new cljs.core.Keyword(null,"prims","prims",1120839167).cljs$core$IFn$_invoke$arity$1(this$__$1));
});
(yantra.graphics.BoundingBox["_"] = true);
(yantra.graphics.bounding_points["_"] = (function (this$){if((cljs.core.seq_QMARK_.call(null,this$)) || (cljs.core.vector_QMARK_.call(null,this$)))
{return yantra.graphics.bounding_box.call(null,this$);
} else
{return cljs.core.PersistentVector.EMPTY;
}
}));
yantra.graphics.transpose = (function transpose(m){return cljs.core.apply.call(null,cljs.core.mapv,cljs.core.vector,m);
});
yantra.graphics.bounding_box = (function bounding_box(g){if((cljs.core.seq_QMARK_.call(null,g)) || (cljs.core.vector_QMARK_.call(null,g)))
{return yantra.graphics.transpose.call(null,cljs.core.map.call(null,(function (v){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.min,v),cljs.core.apply.call(null,cljs.core.max,v)], null);
}),yantra.graphics.transpose.call(null,cljs.core.mapcat.call(null,bounding_box,g))));
} else
{return yantra.graphics.transpose.call(null,cljs.core.map.call(null,(function (v){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.min,v),cljs.core.apply.call(null,cljs.core.max,v)], null);
}),yantra.graphics.transpose.call(null,yantra.graphics.bounding_points.call(null,g))));
}
});
yantra.graphics.expand_plot_range = (function expand_plot_range(bounding_box,image_size){var vec__9423 = bounding_box;var vec__9424 = cljs.core.nth.call(null,vec__9423,0,null);var xmin = cljs.core.nth.call(null,vec__9424,0,null);var ymin = cljs.core.nth.call(null,vec__9424,1,null);var vec__9425 = cljs.core.nth.call(null,vec__9423,1,null);var xmax = cljs.core.nth.call(null,vec__9425,0,null);var ymax = cljs.core.nth.call(null,vec__9425,1,null);var vec__9426 = image_size;var image_width = cljs.core.nth.call(null,vec__9426,0,null);var image_height = cljs.core.nth.call(null,vec__9426,1,null);var width = Math.abs.call(null,(xmax - xmin));var height = Math.abs.call(null,(ymax - ymin));var plotaspect = (height / width);var imageaspect = (image_height / image_width);if((plotaspect < imageaspect))
{var newheight = (width * imageaspect);var heightdiff = ((newheight - height) / 2);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xmin,(ymin - heightdiff)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xmax,(ymax + heightdiff)], null)], null);
} else
{return bounding_box;
}
});
yantra.graphics.coordinate_transformer = (function coordinate_transformer(bounding_box,image_size){var vec__9433 = yantra.graphics.expand_plot_range.call(null,bounding_box,image_size);var vec__9434 = cljs.core.nth.call(null,vec__9433,0,null);var xmin = cljs.core.nth.call(null,vec__9434,0,null);var ymin = cljs.core.nth.call(null,vec__9434,1,null);var vec__9435 = cljs.core.nth.call(null,vec__9433,1,null);var xmax = cljs.core.nth.call(null,vec__9435,0,null);var ymax = cljs.core.nth.call(null,vec__9435,1,null);var vec__9436 = image_size;var image_width = cljs.core.nth.call(null,vec__9436,0,null);var image_height = cljs.core.nth.call(null,vec__9436,1,null);var width = Math.abs.call(null,(xmax - xmin));var height = Math.abs.call(null,(ymax - ymin));return ((function (vec__9433,vec__9434,xmin,ymin,vec__9435,xmax,ymax,vec__9436,image_width,image_height,width,height){
return (function (p__9437){var vec__9438 = p__9437;var x = cljs.core.nth.call(null,vec__9438,0,null);var y = cljs.core.nth.call(null,vec__9438,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x - xmin) * (image_width / width)),(image_height - ((y - ymin) * (image_height / height)))], null);
});
;})(vec__9433,vec__9434,xmin,ymin,vec__9435,xmax,ymax,vec__9436,image_width,image_height,width,height))
});
yantra.graphics.distance_transformer = (function distance_transformer(bounding_box,image_size){var vec__9443 = bounding_box;var vec__9444 = cljs.core.nth.call(null,vec__9443,0,null);var xmin = cljs.core.nth.call(null,vec__9444,0,null);var ymin = cljs.core.nth.call(null,vec__9444,1,null);var vec__9445 = cljs.core.nth.call(null,vec__9443,1,null);var xmax = cljs.core.nth.call(null,vec__9445,0,null);var ymax = cljs.core.nth.call(null,vec__9445,1,null);var vec__9446 = image_size;var image_width = cljs.core.nth.call(null,vec__9446,0,null);var image_height = cljs.core.nth.call(null,vec__9446,1,null);var width = Math.abs.call(null,(xmax - xmin));var height = Math.abs.call(null,(ymax - ymin));return ((function (vec__9443,vec__9444,xmin,ymin,vec__9445,xmax,ymax,vec__9446,image_width,image_height,width,height){
return (function (d){return (d * (image_width / width));
});
;})(vec__9443,vec__9444,xmin,ymin,vec__9445,xmax,ymax,vec__9446,image_width,image_height,width,height))
});
yantra.graphics.listplot = (function listplot(l){return (new yantra.datatypes.Graphics(cljs.core.vec.call(null,cljs.core.map_indexed.call(null,(function (p1__9447_SHARP_,p2__9448_SHARP_){return (new yantra.datatypes.Point(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9447_SHARP_,p2__9448_SHARP_], null)));
}),l))));
});
yantra.graphics.points_to_svg_string = (function points_to_svg_string(points){return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core.map.call(null,(function (p1__9449_SHARP_){return [cljs.core.str(cljs.core.first.call(null,p1__9449_SHARP_)),cljs.core.str(","),cljs.core.str(cljs.core.last.call(null,p1__9449_SHARP_))].join('');
}),points)));
});
yantra.graphics.graphics_renderers = new cljs.core.PersistentArrayMap.fromArray([yantra.datatypes.Line,(function (cursor,owner,opts){if(typeof yantra.graphics.t9452 !== 'undefined')
{} else
{
/**
* @constructor
*/
yantra.graphics.t9452 = (function (opts,owner,cursor,meta9453){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta9453 = meta9453;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
yantra.graphics.t9452.cljs$lang$type = true;
yantra.graphics.t9452.cljs$lang$ctorStr = "yantra.graphics/t9452";
yantra.graphics.t9452.cljs$lang$ctorPrWriter = (function (this__4029__auto__,writer__4030__auto__,opt__4031__auto__){return cljs.core._write.call(null,writer__4030__auto__,"yantra.graphics/t9452");
});
yantra.graphics.t9452.prototype.om$core$IRender$ = true;
yantra.graphics.t9452.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var v = om.core.value.call(null,self__.cursor);var coordfn = new cljs.core.Keyword(null,"coord-fn","coord-fn",4768239122).cljs$core$IFn$_invoke$arity$1(self__.opts);return React.DOM.polyline({"points": yantra.graphics.points_to_svg_string.call(null,cljs.core.map.call(null,coordfn,new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(v))), "fill": "none"});
});
yantra.graphics.t9452.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9454){var self__ = this;
var _9454__$1 = this;return self__.meta9453;
});
yantra.graphics.t9452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9454,meta9453__$1){var self__ = this;
var _9454__$1 = this;return (new yantra.graphics.t9452(self__.opts,self__.owner,self__.cursor,meta9453__$1));
});
yantra.graphics.__GT_t9452 = (function __GT_t9452(opts__$1,owner__$1,cursor__$1,meta9453){return (new yantra.graphics.t9452(opts__$1,owner__$1,cursor__$1,meta9453));
});
}
return (new yantra.graphics.t9452(opts,owner,cursor,null));
}),yantra.datatypes.Style,(function (cursor,owner,opts){if(typeof yantra.graphics.t9455 !== 'undefined')
{} else
{
/**
* @constructor
*/
yantra.graphics.t9455 = (function (opts,owner,cursor,meta9456){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta9456 = meta9456;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
yantra.graphics.t9455.cljs$lang$type = true;
yantra.graphics.t9455.cljs$lang$ctorStr = "yantra.graphics/t9455";
yantra.graphics.t9455.cljs$lang$ctorPrWriter = (function (this__4029__auto__,writer__4030__auto__,opt__4031__auto__){return cljs.core._write.call(null,writer__4030__auto__,"yantra.graphics/t9455");
});
yantra.graphics.t9455.prototype.om$core$IRender$ = true;
yantra.graphics.t9455.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var e = om.core.value.call(null,self__.cursor);var coordfn = new cljs.core.Keyword(null,"coord-fn","coord-fn",4768239122).cljs$core$IFn$_invoke$arity$1(self__.opts);var distancefn = new cljs.core.Keyword(null,"distance-fn","distance-fn",4584217874).cljs$core$IFn$_invoke$arity$1(self__.opts);var builder = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"builder","builder",1244848909));return React.DOM.g(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.Keyword(null,"style","style",1123684643).cljs$core$IFn$_invoke$arity$1(e)], null)),(((cljs.core.seq_QMARK_.call(null,new cljs.core.Keyword(null,"prims","prims",1120839167).cljs$core$IFn$_invoke$arity$1(e))) || (cljs.core.vector_QMARK_.call(null,new cljs.core.Keyword(null,"prims","prims",1120839167).cljs$core$IFn$_invoke$arity$1(e))))?cljs.core.into_array.call(null,cljs.core.map.call(null,((function (e,coordfn,distancefn,builder,___$1){
return (function (p1__9450_SHARP_){return builder.call(null,p1__9450_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coord-fn","coord-fn",4768239122),coordfn,new cljs.core.Keyword(null,"distance-fn","distance-fn",4584217874),distancefn], null)], null));
});})(e,coordfn,distancefn,builder,___$1))
,new cljs.core.Keyword(null,"prims","prims",1120839167).cljs$core$IFn$_invoke$arity$1(self__.cursor))):builder.call(null,new cljs.core.Keyword(null,"prims","prims",1120839167).cljs$core$IFn$_invoke$arity$1(self__.cursor),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coord-fn","coord-fn",4768239122),coordfn,new cljs.core.Keyword(null,"distance-fn","distance-fn",4584217874),distancefn], null)], null))));
});
yantra.graphics.t9455.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9457){var self__ = this;
var _9457__$1 = this;return self__.meta9456;
});
yantra.graphics.t9455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9457,meta9456__$1){var self__ = this;
var _9457__$1 = this;return (new yantra.graphics.t9455(self__.opts,self__.owner,self__.cursor,meta9456__$1));
});
yantra.graphics.__GT_t9455 = (function __GT_t9455(opts__$1,owner__$1,cursor__$1,meta9456){return (new yantra.graphics.t9455(opts__$1,owner__$1,cursor__$1,meta9456));
});
}
return (new yantra.graphics.t9455(opts,owner,cursor,null));
}),yantra.datatypes.Point,(function (cursor,owner,opts){if(typeof yantra.graphics.t9458 !== 'undefined')
{} else
{
/**
* @constructor
*/
yantra.graphics.t9458 = (function (opts,owner,cursor,meta9459){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta9459 = meta9459;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
yantra.graphics.t9458.cljs$lang$type = true;
yantra.graphics.t9458.cljs$lang$ctorStr = "yantra.graphics/t9458";
yantra.graphics.t9458.cljs$lang$ctorPrWriter = (function (this__4029__auto__,writer__4030__auto__,opt__4031__auto__){return cljs.core._write.call(null,writer__4030__auto__,"yantra.graphics/t9458");
});
yantra.graphics.t9458.prototype.om$core$IRender$ = true;
yantra.graphics.t9458.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var p2 = new cljs.core.Keyword(null,"point","point",1120749826).cljs$core$IFn$_invoke$arity$1(om.core.value.call(null,self__.cursor));return React.DOM.circle(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1013907431),cljs.core.first.call(null,p2),new cljs.core.Keyword(null,"cy","cy",1013907432),cljs.core.last.call(null,p2),new cljs.core.Keyword(null,"r","r",1013904356),"3"], null));
});
yantra.graphics.t9458.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9460){var self__ = this;
var _9460__$1 = this;return self__.meta9459;
});
yantra.graphics.t9458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9460,meta9459__$1){var self__ = this;
var _9460__$1 = this;return (new yantra.graphics.t9458(self__.opts,self__.owner,self__.cursor,meta9459__$1));
});
yantra.graphics.__GT_t9458 = (function __GT_t9458(opts__$1,owner__$1,cursor__$1,meta9459){return (new yantra.graphics.t9458(opts__$1,owner__$1,cursor__$1,meta9459));
});
}
return (new yantra.graphics.t9458(opts,owner,cursor,null));
}),yantra.datatypes.Disk,(function (cursor,owner,opts){if(typeof yantra.graphics.t9461 !== 'undefined')
{} else
{
/**
* @constructor
*/
yantra.graphics.t9461 = (function (opts,owner,cursor,meta9462){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta9462 = meta9462;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
yantra.graphics.t9461.cljs$lang$type = true;
yantra.graphics.t9461.cljs$lang$ctorStr = "yantra.graphics/t9461";
yantra.graphics.t9461.cljs$lang$ctorPrWriter = (function (this__4029__auto__,writer__4030__auto__,opt__4031__auto__){return cljs.core._write.call(null,writer__4030__auto__,"yantra.graphics/t9461");
});
yantra.graphics.t9461.prototype.om$core$IRender$ = true;
yantra.graphics.t9461.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var coordfn = new cljs.core.Keyword(null,"coord-fn","coord-fn",4768239122).cljs$core$IFn$_invoke$arity$1(self__.opts);var distancefn = new cljs.core.Keyword(null,"distance-fn","distance-fn",4584217874).cljs$core$IFn$_invoke$arity$1(self__.opts);var v = om.core.value.call(null,self__.cursor);var p2 = coordfn.call(null,new cljs.core.Keyword(null,"point","point",1120749826).cljs$core$IFn$_invoke$arity$1(v));return React.DOM.circle({"r": distancefn.call(null,new cljs.core.Keyword(null,"radius","radius",4370292740).cljs$core$IFn$_invoke$arity$1(v)), "cy": cljs.core.last.call(null,p2), "cx": cljs.core.first.call(null,p2)});
});
yantra.graphics.t9461.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9463){var self__ = this;
var _9463__$1 = this;return self__.meta9462;
});
yantra.graphics.t9461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9463,meta9462__$1){var self__ = this;
var _9463__$1 = this;return (new yantra.graphics.t9461(self__.opts,self__.owner,self__.cursor,meta9462__$1));
});
yantra.graphics.__GT_t9461 = (function __GT_t9461(opts__$1,owner__$1,cursor__$1,meta9462){return (new yantra.graphics.t9461(opts__$1,owner__$1,cursor__$1,meta9462));
});
}
return (new yantra.graphics.t9461(opts,owner,cursor,null));
}),yantra.datatypes.Graphics,(function (cursor,owner,opts){if(typeof yantra.graphics.t9464 !== 'undefined')
{} else
{
/**
* @constructor
*/
yantra.graphics.t9464 = (function (opts,owner,cursor,meta9465){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta9465 = meta9465;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
yantra.graphics.t9464.cljs$lang$type = true;
yantra.graphics.t9464.cljs$lang$ctorStr = "yantra.graphics/t9464";
yantra.graphics.t9464.cljs$lang$ctorPrWriter = (function (this__4029__auto__,writer__4030__auto__,opt__4031__auto__){return cljs.core._write.call(null,writer__4030__auto__,"yantra.graphics/t9464");
});
yantra.graphics.t9464.prototype.om$core$IRender$ = true;
yantra.graphics.t9464.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var builder = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"builder","builder",1244848909));var bb = yantra.graphics.bounding_box.call(null,new cljs.core.Keyword(null,"contents","contents",4741549708).cljs$core$IFn$_invoke$arity$1(om.core.value.call(null,self__.cursor)));var coordfn = yantra.graphics.coordinate_transformer.call(null,bb,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [200,200], null));var distancefn = yantra.graphics.distance_transformer.call(null,bb,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [200,200], null));return React.DOM.svg({"height": 200, "width": 200},cljs.core.into_array.call(null,cljs.core.mapv.call(null,((function (builder,bb,coordfn,distancefn,___$1){
return (function (p1__9451_SHARP_){return builder.call(null,p1__9451_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coord-fn","coord-fn",4768239122),coordfn,new cljs.core.Keyword(null,"distance-fn","distance-fn",4584217874),distancefn], null)], null));
});})(builder,bb,coordfn,distancefn,___$1))
,new cljs.core.Keyword(null,"contents","contents",4741549708).cljs$core$IFn$_invoke$arity$1(self__.cursor))));
});
yantra.graphics.t9464.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9466){var self__ = this;
var _9466__$1 = this;return self__.meta9465;
});
yantra.graphics.t9464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9466,meta9465__$1){var self__ = this;
var _9466__$1 = this;return (new yantra.graphics.t9464(self__.opts,self__.owner,self__.cursor,meta9465__$1));
});
yantra.graphics.__GT_t9464 = (function __GT_t9464(opts__$1,owner__$1,cursor__$1,meta9465){return (new yantra.graphics.t9464(opts__$1,owner__$1,cursor__$1,meta9465));
});
}
return (new yantra.graphics.t9464(opts,owner,cursor,null));
})], true, false);
