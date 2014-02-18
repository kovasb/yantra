// Compiled by ClojureScript 0.0-2138
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
yantra.graphics.BoundingBox = (function (){var obj9183 = {};return obj9183;
})();
yantra.graphics.bounding_points = (function bounding_points(x){if((function (){var and__3396__auto__ = x;if(and__3396__auto__)
{return x.yantra$graphics$BoundingBox$bounding_points$arity$1;
} else
{return and__3396__auto__;
}
})())
{return x.yantra$graphics$BoundingBox$bounding_points$arity$1(x);
} else
{var x__4029__auto__ = (((x == null))?null:x);return (function (){var or__3408__auto__ = (yantra.graphics.bounding_points[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (yantra.graphics.bounding_points["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"BoundingBox.bounding-points",x);
}
}
})().call(null,x);
}
});
yantra.datatypes.Style.prototype.yantra$graphics$BoundingBox$ = true;
yantra.datatypes.Style.prototype.yantra$graphics$BoundingBox$bounding_points$arity$1 = (function (this$){var this$__$1 = this;return yantra.graphics.bounding_points.call(null,new cljs.core.Keyword(null,"prims","prims",1120839167).cljs$core$IFn$_invoke$arity$1(this$__$1));
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
yantra.graphics.expand_plot_range = (function expand_plot_range(bounding_box,image_size){var vec__9188 = bounding_box;var vec__9189 = cljs.core.nth.call(null,vec__9188,0,null);var xmin = cljs.core.nth.call(null,vec__9189,0,null);var ymin = cljs.core.nth.call(null,vec__9189,1,null);var vec__9190 = cljs.core.nth.call(null,vec__9188,1,null);var xmax = cljs.core.nth.call(null,vec__9190,0,null);var ymax = cljs.core.nth.call(null,vec__9190,1,null);var vec__9191 = image_size;var image_width = cljs.core.nth.call(null,vec__9191,0,null);var image_height = cljs.core.nth.call(null,vec__9191,1,null);var width = Math.abs.call(null,(xmax - xmin));var height = Math.abs.call(null,(ymax - ymin));var plotaspect = (height / width);var imageaspect = (image_height / image_width);if((plotaspect < imageaspect))
{var newheight = (width * imageaspect);var heightdiff = ((newheight - height) / 2);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xmin,(ymin - heightdiff)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xmax,(ymax + heightdiff)], null)], null);
} else
{alert([cljs.core.str("no aspect change"),cljs.core.str(plotaspect),cljs.core.str(" "),cljs.core.str(imageaspect)].join(''));
return bounding_box;
}
});
yantra.graphics.coordinate_transformer = (function coordinate_transformer(bounding_box,image_size){var vec__9198 = yantra.graphics.expand_plot_range.call(null,bounding_box,image_size);var vec__9199 = cljs.core.nth.call(null,vec__9198,0,null);var xmin = cljs.core.nth.call(null,vec__9199,0,null);var ymin = cljs.core.nth.call(null,vec__9199,1,null);var vec__9200 = cljs.core.nth.call(null,vec__9198,1,null);var xmax = cljs.core.nth.call(null,vec__9200,0,null);var ymax = cljs.core.nth.call(null,vec__9200,1,null);var vec__9201 = image_size;var image_width = cljs.core.nth.call(null,vec__9201,0,null);var image_height = cljs.core.nth.call(null,vec__9201,1,null);var width = Math.abs.call(null,(xmax - xmin));var height = Math.abs.call(null,(ymax - ymin));return (function (p__9202){var vec__9203 = p__9202;var x = cljs.core.nth.call(null,vec__9203,0,null);var y = cljs.core.nth.call(null,vec__9203,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x - xmin) * (image_width / width)),(image_height - ((y - ymin) * (image_height / height)))], null);
});
});
yantra.graphics.distance_transformer = (function distance_transformer(bounding_box,image_size){var vec__9208 = bounding_box;var vec__9209 = cljs.core.nth.call(null,vec__9208,0,null);var xmin = cljs.core.nth.call(null,vec__9209,0,null);var ymin = cljs.core.nth.call(null,vec__9209,1,null);var vec__9210 = cljs.core.nth.call(null,vec__9208,1,null);var xmax = cljs.core.nth.call(null,vec__9210,0,null);var ymax = cljs.core.nth.call(null,vec__9210,1,null);var vec__9211 = image_size;var image_width = cljs.core.nth.call(null,vec__9211,0,null);var image_height = cljs.core.nth.call(null,vec__9211,1,null);var width = Math.abs.call(null,(xmax - xmin));var height = Math.abs.call(null,(ymax - ymin));return (function (d){return (d * (image_width / width));
});
});
yantra.graphics.listplot = (function listplot(l){return (new yantra.datatypes.Graphics(cljs.core.vec.call(null,cljs.core.map_indexed.call(null,(function (p1__9212_SHARP_,p2__9213_SHARP_){return (new yantra.datatypes.Point(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9212_SHARP_,p2__9213_SHARP_], null)));
}),l))));
});
yantra.graphics.graphics_renderers = new cljs.core.PersistentArrayMap.fromArray([yantra.datatypes.Point,(function (cursor,owner,opts){var p2 = new cljs.core.Keyword(null,"point","point",1120749826).cljs$core$IFn$_invoke$arity$1(om.core.value.call(null,cursor));return React.DOM.circle(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1013907431),cljs.core.first.call(null,p2),new cljs.core.Keyword(null,"cy","cy",1013907432),cljs.core.last.call(null,p2),new cljs.core.Keyword(null,"r","r",1013904356),"3"], null));
}),yantra.datatypes.Disk,(function (cursor,owner,opts){var coordfn = new cljs.core.Keyword(null,"coord-fn","coord-fn",4768239122).cljs$core$IFn$_invoke$arity$1(opts);var distancefn = new cljs.core.Keyword(null,"distance-fn","distance-fn",4584217874).cljs$core$IFn$_invoke$arity$1(opts);var v = om.core.value.call(null,cursor);var p2 = coordfn.call(null,new cljs.core.Keyword(null,"point","point",1120749826).cljs$core$IFn$_invoke$arity$1(v));return React.DOM.circle({"r": distancefn.call(null,new cljs.core.Keyword(null,"radius","radius",4370292740).cljs$core$IFn$_invoke$arity$1(v)), "cy": cljs.core.last.call(null,p2), "cx": cljs.core.first.call(null,p2)});
}),yantra.datatypes.Graphics,(function (cursor,owner,opts){var builder = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"builder","builder",1244848909));var bb = yantra.graphics.bounding_box.call(null,new cljs.core.Keyword(null,"contents","contents",4741549708).cljs$core$IFn$_invoke$arity$1(om.core.value.call(null,cursor)));var coordfn = yantra.graphics.coordinate_transformer.call(null,bb,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [200,200], null));var distancefn = yantra.graphics.distance_transformer.call(null,bb,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [200,200], null));return React.DOM.svg({"height": 200, "width": 200},cljs.core.into_array.call(null,cljs.core.map.call(null,(function (p1__9214_SHARP_){return builder.call(null,p1__9214_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coord-fn","coord-fn",4768239122),coordfn,new cljs.core.Keyword(null,"distance-fn","distance-fn",4584217874),distancefn], null)], null));
}),new cljs.core.Keyword(null,"contents","contents",4741549708).cljs$core$IFn$_invoke$arity$1(cursor))));
})], true, false);
