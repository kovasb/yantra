// Compiled by ClojureScript 0.0-2197
goog.provide('yantra.test');
goog.require('cljs.core');
goog.require('yantra.plot');
goog.require('om.dom');
goog.require('om.core');
goog.require('yantra.graphics');
goog.require('yantra.datatypes');
goog.require('yantra.layout');
goog.require('om.core');
goog.require('yantra.datatypes');
goog.require('React');
goog.require('yantra.edn');
goog.require('yantra.controls');
goog.require('yantra.graphics');
goog.require('yantra.edn');
goog.require('om.dom');
goog.require('cljs.reader');
goog.require('yantra.plot');
goog.require('yantra.layout');
goog.require('yantra.controls');
yantra.test.tests = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"column-2","column-2",4685450989),new cljs.core.Keyword(null,"plot-2","plot-2",4323529144),new cljs.core.Keyword(null,"string","string",4416885635),new cljs.core.Keyword(null,"column-1","column-1",4685450988),new cljs.core.Keyword(null,"plot-3","plot-3",4323529145),new cljs.core.Keyword(null,"edn-1","edn-1",1110266117),new cljs.core.Keyword(null,"edn-0","edn-0",1110266116),new cljs.core.Keyword(null,"plot-1","plot-1",4323529143),new cljs.core.Keyword(null,"nested-list","nested-list",3499779878),new cljs.core.Keyword(null,"nested-list-3","nested-list-3",1938575308),new cljs.core.Keyword(null,"nested-list-2","nested-list-2",1938575307),new cljs.core.Keyword(null,"graphics-1","graphics-1",3304008929),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"plot-4","plot-4",4323529146)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new yantra.datatypes.Column(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,2,3], null)))], null),(new yantra.datatypes.ListLinePlot(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,2,3,6,5,4,3,1], null),null)),"a\"b\"c",(new yantra.datatypes.Column(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,2,3], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new yantra.datatypes.ListLinePlot(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,2,3,6,5,4,3,1], null),null)),(new yantra.datatypes.ListLinePlot(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,2,3,6,5,4,3,1], null),null))], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"a",new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.Symbol(null,"a","a",-1640531430,null),new cljs.core.PersistentArrayMap(null, 2, [1,2,3,4], null),(new yantra.datatypes.Slider(4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,10], null))),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [1,null,2,null,3,null,4,null], null), null),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,4),3),2),1),(new yantra.datatypes.Graphics(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new yantra.datatypes.Disk(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),1)),(new yantra.datatypes.Disk(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,2], null),1)),(new yantra.datatypes.Disk(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,0], null),1))], null)))], null),1,(new yantra.datatypes.BarChart(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,2,6,5,4], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"labels","labels",4198454129),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c","d","e"], null)], null))),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,3),2),1)),2),1)),3),2),1),cljs.reader.read_string.call(null,"(1 2 3 (1 2 3))"),cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,2,3,4], null)),(new yantra.datatypes.Column(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new yantra.datatypes.Slider(4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,10], null))),(new yantra.datatypes.Slider(5,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,10], null))),(new yantra.datatypes.Graphics(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new yantra.datatypes.Disk(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),1)),(new yantra.datatypes.Disk(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [10,2], null),1)),(new yantra.datatypes.Disk(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,0], null),1)),(new yantra.datatypes.Disk(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20,0], null),1))], null)))], null))),(new yantra.datatypes.Graphics(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new yantra.datatypes.Line(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0], null)], null)))], null))),(new yantra.datatypes.ListLinePlot(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [10,4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [11,6], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20,40], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [30,5], null)], null),null))]);
yantra.test.renderers = cljs.core.merge.call(null,yantra.graphics.graphics_renderers,yantra.controls.control_renderers,yantra.layout.layout_renderers,yantra.edn.edn_renderers,yantra.plot.plot_renderers);
yantra.test.builder = (function builder(x,y){console.log(om.core.value.call(null,x));
console.log(cljs.core.type.call(null,om.core.value.call(null,x)));
console.log(yantra.test.renderers.call(null,cljs.core.type.call(null,om.core.value.call(null,x))));
return om.core.build.call(null,yantra.test.renderers.call(null,cljs.core.type.call(null,om.core.value.call(null,x))),x,y);
});
yantra.test.t = document.getElementById("root");
yantra.test.start = (function start(){return om.core.root.call(null,(function (app,owner){if(typeof yantra.test.t9504 !== 'undefined')
{} else
{
/**
* @constructor
*/
yantra.test.t9504 = (function (owner,app,start,meta9505){
this.owner = owner;
this.app = app;
this.start = start;
this.meta9505 = meta9505;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
yantra.test.t9504.cljs$lang$type = true;
yantra.test.t9504.cljs$lang$ctorStr = "yantra.test/t9504";
yantra.test.t9504.cljs$lang$ctorPrWriter = (function (this__4029__auto__,writer__4030__auto__,opt__4031__auto__){return cljs.core._write.call(null,writer__4030__auto__,"yantra.test/t9504");
});
yantra.test.t9504.prototype.om$core$IRender$ = true;
yantra.test.t9504.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return yantra.test.builder.call(null,self__.app,null);
});
yantra.test.t9504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9506){var self__ = this;
var _9506__$1 = this;return self__.meta9505;
});
yantra.test.t9504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9506,meta9505__$1){var self__ = this;
var _9506__$1 = this;return (new yantra.test.t9504(self__.owner,self__.app,self__.start,meta9505__$1));
});
yantra.test.__GT_t9504 = (function __GT_t9504(owner__$1,app__$1,start__$1,meta9505){return (new yantra.test.t9504(owner__$1,app__$1,start__$1,meta9505));
});
}
return (new yantra.test.t9504(owner,app,start,null));
}),cljs.core.atom.call(null,new cljs.core.Keyword(null,"nested-list-3","nested-list-3",1938575308).cljs$core$IFn$_invoke$arity$1(yantra.test.tests)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"builder","builder",1244848909),yantra.test.builder], null),new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("root")], null));
});
goog.exportSymbol('yantra.test.start', yantra.test.start);
