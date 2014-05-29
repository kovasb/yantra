// Compiled by ClojureScript 0.0-2197
goog.provide('yantra.controls');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.reader');
goog.require('React');
goog.require('yantra.datatypes');
goog.require('yantra.datatypes');
yantra.controls.control_renderers = new cljs.core.PersistentArrayMap.fromArray([yantra.datatypes.Slider,(function (cursor,owner,opts){if(typeof yantra.controls.t9501 !== 'undefined')
{} else
{
/**
* @constructor
*/
yantra.controls.t9501 = (function (opts,owner,cursor,meta9502){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta9502 = meta9502;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
yantra.controls.t9501.cljs$lang$type = true;
yantra.controls.t9501.cljs$lang$ctorStr = "yantra.controls/t9501";
yantra.controls.t9501.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"yantra.controls/t9501");
});
yantra.controls.t9501.prototype.om$core$IRender$ = true;
yantra.controls.t9501.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var v = om.core.value.call(null,self__.cursor);var val = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(v);var r = new cljs.core.Keyword(null,"range","range",1122184367).cljs$core$IFn$_invoke$arity$1(v);var c = new cljs.core.Keyword(null,"channel","channel",1752854645).cljs$core$IFn$_invoke$arity$1(v);var min = cljs.core.first.call(null,r);var max = cljs.core.second.call(null,r);var step = ((cljs.core._EQ_.call(null,3,cljs.core.count.call(null,r)))?cljs.core.last.call(null,r):1);return om.dom.input.call(null,{"onChange": ((function (v,val,r,c,min,max,step,___$1){
return (function (e){console.log(e);
if(cljs.core.truth_(c))
{return cljs.core.async.put_BANG_.call(null,c,cljs.reader.read_string.call(null,e.target.value));
} else
{return null;
}
});})(v,val,r,c,min,max,step,___$1))
, "step": step, "max": max, "min": min, "defaultValue": val, "type": "range"});
});
yantra.controls.t9501.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9503){var self__ = this;
var _9503__$1 = this;return self__.meta9502;
});
yantra.controls.t9501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9503,meta9502__$1){var self__ = this;
var _9503__$1 = this;return (new yantra.controls.t9501(self__.opts,self__.owner,self__.cursor,meta9502__$1));
});
yantra.controls.__GT_t9501 = (function __GT_t9501(opts__$1,owner__$1,cursor__$1,meta9502){return (new yantra.controls.t9501(opts__$1,owner__$1,cursor__$1,meta9502));
});
}
return (new yantra.controls.t9501(opts,owner,cursor,null));
}),yantra.datatypes.ChannelDisplay,(function (cursor,owner,opts){if(typeof yantra.controls.t9504 !== 'undefined')
{} else
{
/**
* @constructor
*/
yantra.controls.t9504 = (function (opts,owner,cursor,meta9505){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta9505 = meta9505;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
yantra.controls.t9504.cljs$lang$type = true;
yantra.controls.t9504.cljs$lang$ctorStr = "yantra.controls/t9504";
yantra.controls.t9504.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"yantra.controls/t9504");
});
yantra.controls.t9504.prototype.om$core$IRender$ = true;
yantra.controls.t9504.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"builder","builder",1244848909)).call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(om.core.value.call(null,self__.cursor)));
});
yantra.controls.t9504.prototype.om$core$IWillMount$ = true;
yantra.controls.t9504.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c = new cljs.core.Keyword(null,"channel","channel",1752854645).cljs$core$IFn$_invoke$arity$1(om.core.value.call(null,self__.cursor));var c__6248__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto__,c,___$1){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto__,c,___$1){
return (function (state_9515){var state_val_9516 = (state_9515[1]);if((state_val_9516 === 4))
{var inst_9509 = (state_9515[2]);var inst_9510 = om.core.update_BANG_.call(null,self__.cursor,new cljs.core.Keyword(null,"value","value",1125876963),inst_9509);var state_9515__$1 = (function (){var statearr_9517 = state_9515;(statearr_9517[7] = inst_9510);
return statearr_9517;
})();var statearr_9518_9527 = state_9515__$1;(statearr_9518_9527[2] = null);
(statearr_9518_9527[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9516 === 3))
{var inst_9513 = (state_9515[2]);var state_9515__$1 = state_9515;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9515__$1,inst_9513);
} else
{if((state_val_9516 === 2))
{var state_9515__$1 = state_9515;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9515__$1,4,c);
} else
{if((state_val_9516 === 1))
{var state_9515__$1 = state_9515;var statearr_9519_9528 = state_9515__$1;(statearr_9519_9528[2] = null);
(statearr_9519_9528[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});})(c__6248__auto__,c,___$1))
;return ((function (switch__6233__auto__,c__6248__auto__,c,___$1){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_9523 = [null,null,null,null,null,null,null,null];(statearr_9523[0] = state_machine__6234__auto__);
(statearr_9523[1] = 1);
return statearr_9523;
});
var state_machine__6234__auto____1 = (function (state_9515){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_9515);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e9524){if((e9524 instanceof Object))
{var ex__6237__auto__ = e9524;var statearr_9525_9529 = state_9515;(statearr_9525_9529[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9515);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9524;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9530 = state_9515;
state_9515 = G__9530;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_9515){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_9515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto__,c,___$1))
})();var state__6250__auto__ = (function (){var statearr_9526 = f__6249__auto__.call(null);(statearr_9526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto__);
return statearr_9526;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto__,c,___$1))
);
return c__6248__auto__;
});
yantra.controls.t9504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9506){var self__ = this;
var _9506__$1 = this;return self__.meta9505;
});
yantra.controls.t9504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9506,meta9505__$1){var self__ = this;
var _9506__$1 = this;return (new yantra.controls.t9504(self__.opts,self__.owner,self__.cursor,meta9505__$1));
});
yantra.controls.__GT_t9504 = (function __GT_t9504(opts__$1,owner__$1,cursor__$1,meta9505){return (new yantra.controls.t9504(opts__$1,owner__$1,cursor__$1,meta9505));
});
}
return (new yantra.controls.t9504(opts,owner,cursor,null));
})], true, false);
