// Compiled by ClojureScript 0.0-2138
goog.provide('yantra.test');
goog.require('cljs.core');
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
goog.require('yantra.layout');
goog.require('yantra.controls');
yantra.test.app_state = 1;
yantra.test.tests = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"graphics-1","graphics-1",3304008929),(new yantra.datatypes.Column(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new yantra.datatypes.Slider(4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,10], null))),(new yantra.datatypes.Slider(5,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,10], null))),(new yantra.datatypes.Graphics(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new yantra.datatypes.Disk(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),1)),(new yantra.datatypes.Disk(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [10,2], null),1)),(new yantra.datatypes.Disk(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,0], null),1)),(new yantra.datatypes.Disk(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20,0], null),1))], null)))], null))),new cljs.core.Keyword(null,"column-1","column-1",4685450988),(new yantra.datatypes.Column(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,2,3], null))),new cljs.core.Keyword(null,"column-2","column-2",4685450989),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new yantra.datatypes.Column(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,2,3], null)))], null),new cljs.core.Keyword(null,"edn-0","edn-0",1110266116),1,new cljs.core.Keyword(null,"edn-1","edn-1",1110266117),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"a",new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.Symbol(null,"a","a",-1640531430,null),new cljs.core.PersistentArrayMap(null, 2, [1,2,3,4], null),(new yantra.datatypes.Slider(4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,10], null))),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [1,null,2,null,3,null,4,null], null), null),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,4),3),2),1),(new yantra.datatypes.Graphics(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new yantra.datatypes.Disk(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),1)),(new yantra.datatypes.Disk(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,2], null),1)),(new yantra.datatypes.Disk(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,0], null),1))], null)))], null)], null);
yantra.test.renderers = cljs.core.merge.call(null,yantra.graphics.graphics_renderers,yantra.controls.control_renderers,yantra.layout.layout_renderers,yantra.edn.edn_renderers);
yantra.test.builder = (function builder(x,y){console.log(om.core.value.call(null,x));
console.log(cljs.core.type.call(null,om.core.value.call(null,x)));
console.log(yantra.test.renderers.call(null,cljs.core.type.call(null,om.core.value.call(null,x))));
return om.core.build.call(null,yantra.test.renderers.call(null,cljs.core.type.call(null,om.core.value.call(null,x))),x,y);
});
yantra.test.t = document.getElementById("root");
yantra.test.start = (function start(){return om.core.root.call(null,cljs.core.atom.call(null,new cljs.core.Keyword(null,"column-2","column-2",4685450989).cljs$core$IFn$_invoke$arity$1(yantra.test.tests)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"builder","builder",1244848909),yantra.test.builder], null),(function (app,owner){return yantra.test.builder.call(null,app,cljs.core.PersistentArrayMap.EMPTY);
}),document.getElementById("root"));
});
goog.exportSymbol('yantra.test.start', yantra.test.start);
