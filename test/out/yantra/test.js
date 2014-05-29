// Compiled by ClojureScript 0.0-2197
goog.provide('yantra.test');
goog.require('cljs.core');
goog.require('cljs.core.async');
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
goog.require('cljs.core.async');
goog.require('yantra.layout');
goog.require('yantra.controls');
yantra.test.tests = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"column-2","column-2",4685450989),new cljs.core.Keyword(null,"plot-2","plot-2",4323529144),new cljs.core.Keyword(null,"string","string",4416885635),new cljs.core.Keyword(null,"column-1","column-1",4685450988),new cljs.core.Keyword(null,"plot-3","plot-3",4323529145),new cljs.core.Keyword(null,"edn-1","edn-1",1110266117),new cljs.core.Keyword(null,"edn-0","edn-0",1110266116),new cljs.core.Keyword(null,"plot-1","plot-1",4323529143),new cljs.core.Keyword(null,"nested-list","nested-list",3499779878),new cljs.core.Keyword(null,"nested-list-3","nested-list-3",1938575308),new cljs.core.Keyword(null,"channel-1","channel-1",2475639129),new cljs.core.Keyword(null,"nested-list-2","nested-list-2",1938575307),new cljs.core.Keyword(null,"graphics-1","graphics-1",3304008929),new cljs.core.Keyword(null,"channel-2","channel-2",2475639130),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"plot-4","plot-4",4323529146)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new yantra.datatypes.Column(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,2,3], null)))], null),(new yantra.datatypes.ListLinePlot(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,2,3,6,5,4,3,1], null),null)),"a\"b\"c",(new yantra.datatypes.Column(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,2,3], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new yantra.datatypes.ListLinePlot(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,2,3,6,5,4,3,1], null),null)),(new yantra.datatypes.ListLinePlot(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,2,3,6,5,4,3,1], null),null))], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"a",new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.Symbol(null,"a","a",-1640531430,null),new cljs.core.PersistentArrayMap(null, 2, [1,2,3,4], null),(new yantra.datatypes.Slider(4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,10], null),null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [1,null,2,null,3,null,4,null], null), null),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,4),3),2),1),(new yantra.datatypes.Graphics(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new yantra.datatypes.Disk(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),1)),(new yantra.datatypes.Disk(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,2], null),1)),(new yantra.datatypes.Disk(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,0], null),1))], null)))], null),1,(new yantra.datatypes.BarChart(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,2,6,5,4], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"labels","labels",4198454129),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c","d","e"], null)], null))),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,3),2),1)),2),1)),3),2),1),cljs.reader.read_string.call(null,"(1 2 3 (1 2 3))"),(function (){var c = cljs.core.async.chan.call(null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new yantra.datatypes.Slider(1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,10,1], null),c)),(new yantra.datatypes.ChannelDisplay(c,new cljs.core.Keyword(null,"default","default",2558708147)))], null);
})(),cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,2,3,4], null)),(new yantra.datatypes.Column(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new yantra.datatypes.Slider(4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,10], null),null)),(new yantra.datatypes.Slider(5,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,10], null),null)),(new yantra.datatypes.Graphics(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new yantra.datatypes.Disk(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),1)),(new yantra.datatypes.Disk(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [10,2], null),1)),(new yantra.datatypes.Disk(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,0], null),1)),(new yantra.datatypes.Disk(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20,0], null),1))], null)))], null))),(function (){var c1 = cljs.core.async.chan.call(null);var c2 = cljs.core.async.chan.call(null);var c__6248__auto___9617 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___9617,c1,c2){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___9617,c1,c2){
return (function (state_9605){var state_val_9606 = (state_9605[1]);if((state_val_9606 === 5))
{var inst_9597 = (state_9605[2]);var inst_9598 = (10 + inst_9597);var state_9605__$1 = state_9605;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9605__$1,4,c2,inst_9598);
} else
{if((state_val_9606 === 4))
{var inst_9600 = (state_9605[2]);var state_9605__$1 = (function (){var statearr_9607 = state_9605;(statearr_9607[7] = inst_9600);
return statearr_9607;
})();var statearr_9608_9618 = state_9605__$1;(statearr_9608_9618[2] = null);
(statearr_9608_9618[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9606 === 3))
{var inst_9603 = (state_9605[2]);var state_9605__$1 = state_9605;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9605__$1,inst_9603);
} else
{if((state_val_9606 === 2))
{var state_9605__$1 = state_9605;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9605__$1,5,c1);
} else
{if((state_val_9606 === 1))
{var state_9605__$1 = state_9605;var statearr_9609_9619 = state_9605__$1;(statearr_9609_9619[2] = null);
(statearr_9609_9619[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
});})(c__6248__auto___9617,c1,c2))
;return ((function (switch__6233__auto__,c__6248__auto___9617,c1,c2){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_9613 = [null,null,null,null,null,null,null,null];(statearr_9613[0] = state_machine__6234__auto__);
(statearr_9613[1] = 1);
return statearr_9613;
});
var state_machine__6234__auto____1 = (function (state_9605){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_9605);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e9614){if((e9614 instanceof Object))
{var ex__6237__auto__ = e9614;var statearr_9615_9620 = state_9605;(statearr_9615_9620[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9605);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9614;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9621 = state_9605;
state_9605 = G__9621;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_9605){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_9605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___9617,c1,c2))
})();var state__6250__auto__ = (function (){var statearr_9616 = f__6249__auto__.call(null);(statearr_9616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___9617);
return statearr_9616;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___9617,c1,c2))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new yantra.datatypes.Slider(1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,10,1], null),c1)),(new yantra.datatypes.ChannelDisplay(c2,new cljs.core.Keyword(null,"default","default",2558708147)))], null);
})(),(new yantra.datatypes.Graphics(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new yantra.datatypes.Line(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0], null)], null)))], null))),(new yantra.datatypes.ListLinePlot(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [10,4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [11,6], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20,40], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [30,5], null)], null),null))]);
yantra.test.renderers = cljs.core.merge.call(null,yantra.graphics.graphics_renderers,yantra.controls.control_renderers,yantra.layout.layout_renderers,yantra.edn.edn_renderers,yantra.plot.plot_renderers);
yantra.test.builder = (function builder(x,y){console.log(om.core.value.call(null,x));
console.log(cljs.core.type.call(null,om.core.value.call(null,x)));
console.log(yantra.test.renderers.call(null,cljs.core.type.call(null,om.core.value.call(null,x))));
return om.core.build.call(null,yantra.test.renderers.call(null,cljs.core.type.call(null,om.core.value.call(null,x))),x,y);
});
yantra.test.t = document.getElementById("root");
yantra.test.start = (function start(){return om.core.root.call(null,(function (app,owner){if(typeof yantra.test.t9625 !== 'undefined')
{} else
{
/**
* @constructor
*/
yantra.test.t9625 = (function (owner,app,start,meta9626){
this.owner = owner;
this.app = app;
this.start = start;
this.meta9626 = meta9626;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
yantra.test.t9625.cljs$lang$type = true;
yantra.test.t9625.cljs$lang$ctorStr = "yantra.test/t9625";
yantra.test.t9625.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"yantra.test/t9625");
});
yantra.test.t9625.prototype.om$core$IRender$ = true;
yantra.test.t9625.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return yantra.test.builder.call(null,self__.app,null);
});
yantra.test.t9625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9627){var self__ = this;
var _9627__$1 = this;return self__.meta9626;
});
yantra.test.t9625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9627,meta9626__$1){var self__ = this;
var _9627__$1 = this;return (new yantra.test.t9625(self__.owner,self__.app,self__.start,meta9626__$1));
});
yantra.test.__GT_t9625 = (function __GT_t9625(owner__$1,app__$1,start__$1,meta9626){return (new yantra.test.t9625(owner__$1,app__$1,start__$1,meta9626));
});
}
return (new yantra.test.t9625(owner,app,start,null));
}),cljs.core.atom.call(null,new cljs.core.Keyword(null,"channel-2","channel-2",2475639130).cljs$core$IFn$_invoke$arity$1(yantra.test.tests)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"builder","builder",1244848909),yantra.test.builder], null),new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("root")], null));
});
goog.exportSymbol('yantra.test.start', yantra.test.start);
