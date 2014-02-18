// Compiled by ClojureScript 0.0-2138
goog.provide('yantra.edn');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('React');
(cljs.core.ICloneable["number"] = true);
(cljs.core._clone["number"] = (function (n){return (new Number(n));
}));
(cljs.core.ICloneable["string"] = true);
(cljs.core._clone["string"] = (function (n){return (new String(n));
}));
yantra.edn.render_sequential = (function render_sequential(begin,render_one,sep,end,sequence){return React.DOM.span(null,cljs.core.into_array.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [begin], null),cljs.core.interpose.call(null,sep,cljs.core.map.call(null,render_one,sequence)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [end], null))));
});

/**
* @constructor
*/
yantra.edn.SequentialCursor = (function (value,state,path,shared){
this.value = value;
this.state = state;
this.path = path;
this.shared = shared;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2175180810;
})
yantra.edn.SequentialCursor.cljs$lang$type = true;
yantra.edn.SequentialCursor.cljs$lang$ctorStr = "yantra.edn/SequentialCursor";
yantra.edn.SequentialCursor.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"yantra.edn/SequentialCursor");
});
yantra.edn.SequentialCursor.prototype.om$core$ICursor$ = true;
yantra.edn.SequentialCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return self__.path;
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
yantra.edn.SequentialCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return self__.state;
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
yantra.edn.SequentialCursor.prototype.om$core$ICursor$_shared$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.shared;
});
yantra.edn.SequentialCursor.prototype.om$core$IValue$ = true;
yantra.edn.SequentialCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return self__.value;
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
yantra.edn.SequentialCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path);
} else
{throw (new Error([cljs.core.str("Cannot deref cursor during render phase: "),cljs.core.str(this$__$1)].join('')));
}
});
yantra.edn.SequentialCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._pr_writer.call(null,self__.value,writer,opts);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
yantra.edn.SequentialCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new yantra.edn.SequentialCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path,self__.shared));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
yantra.edn.SequentialCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((cljs.core.count.call(null,self__.value) > 0))
{return cljs.core.map.call(null,(function (v,i){return om.core.to_cursor.call(null,v,self__.state,cljs.core.conj.call(null,self__.path,i),self__.shared);
}),self__.value,cljs.core.range.call(null));
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
yantra.edn.SequentialCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._count.call(null,self__.value);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
yantra.edn.SequentialCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core.to_cursor.call(null,cljs.core._peek.call(null,self__.value),self__.state,self__.path,self__.shared);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
yantra.edn.SequentialCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core.to_cursor.call(null,cljs.core._pop.call(null,self__.value),self__.state,self__.path,self__.shared);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
yantra.edn.SequentialCursor.prototype.om$core$ITransact$ = true;
yantra.edn.SequentialCursor.prototype.om$core$ITransact$_transact_BANG_$arity$2 = (function (_,f){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.state,f,self__.path);
});
yantra.edn.SequentialCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,self__.value,other);
}
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
yantra.edn.SequentialCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new yantra.edn.SequentialCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path,self__.shared));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
yantra.edn.SequentialCursor.prototype.cljs$core$ICloneable$ = true;
yantra.edn.SequentialCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new yantra.edn.SequentialCursor(self__.value,self__.state,self__.path,self__.shared));
});
yantra.edn.SequentialCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.meta.call(null,self__.value);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
yantra.edn.__GT_SequentialCursor = (function __GT_SequentialCursor(value,state,path,shared){return (new yantra.edn.SequentialCursor(value,state,path,shared));
});
yantra.edn.extend_sequential_cursor = (function extend_sequential_cursor(type){type.prototype.om$core$IToCursor$ = true;
type.prototype.om$core$IToCursor$_to_cursor$arity$2 = (function (value,state){var value__$1 = this;return (new yantra.edn.SequentialCursor(value__$1,state,cljs.core.PersistentVector.EMPTY,null));
});
type.prototype.om$core$IToCursor$_to_cursor$arity$3 = (function (value,state,path){var value__$1 = this;return (new yantra.edn.SequentialCursor(value__$1,state,path,null));
});
return type.prototype.om$core$IToCursor$_to_cursor$arity$4 = (function (value,state,path,shared){var value__$1 = this;return (new yantra.edn.SequentialCursor(value__$1,state,path,shared));
});
});
cljs.core.map.call(null,yantra.edn.extend_sequential_cursor,cljs.core.PersistentHashSet.fromArray([cljs.core.KeySeq,cljs.core.IndexedSeq,cljs.core.ChunkedCons,cljs.core.LazySeq,cljs.core.RSeq,cljs.core.NodeSeq,cljs.core.List,cljs.core.PersistentArrayMapSeq,cljs.core.EmptyList,cljs.core.Cons,cljs.core.Range,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentTreeMapSeq], true));
yantra.edn.thread_sets = (function thread_sets(x){return cljs.core.reduce.call(null,(function (m,p__9152){var vec__9153 = p__9152;var k = cljs.core.nth.call(null,vec__9153,0,null);var v = cljs.core.nth.call(null,vec__9153,1,null);if(cljs.core.set_QMARK_.call(null,k))
{return cljs.core.reduce.call(null,(function (p1__9148_SHARP_,p2__9149_SHARP_){return cljs.core.assoc.call(null,p1__9148_SHARP_,p2__9149_SHARP_,v);
}),m,k);
} else
{return cljs.core.assoc.call(null,m,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,x);
});
yantra.edn.edn_renderers = yantra.edn.thread_sets.call(null,new cljs.core.PersistentArrayMap.fromArray([String,(function (cursor,owner,opts){if(typeof yantra.edn.t9158 !== 'undefined')
{} else
{
/**
* @constructor
*/
yantra.edn.t9158 = (function (opts,owner,cursor,meta9159){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta9159 = meta9159;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
yantra.edn.t9158.cljs$lang$type = true;
yantra.edn.t9158.cljs$lang$ctorStr = "yantra.edn/t9158";
yantra.edn.t9158.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"yantra.edn/t9158");
});
yantra.edn.t9158.prototype.om$core$IRender$ = true;
yantra.edn.t9158.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.span(null,[cljs.core.str("\""),cljs.core.str(om.core.value.call(null,self__.cursor)),cljs.core.str("\"")].join(''));
});
yantra.edn.t9158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9160){var self__ = this;
var _9160__$1 = this;return self__.meta9159;
});
yantra.edn.t9158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9160,meta9159__$1){var self__ = this;
var _9160__$1 = this;return (new yantra.edn.t9158(self__.opts,self__.owner,self__.cursor,meta9159__$1));
});
yantra.edn.__GT_t9158 = (function __GT_t9158(opts__$1,owner__$1,cursor__$1,meta9159){return (new yantra.edn.t9158(opts__$1,owner__$1,cursor__$1,meta9159));
});
}
return (new yantra.edn.t9158(opts,owner,cursor,null));
}),Number,(function (cursor,owner,opts){if(typeof yantra.edn.t9161 !== 'undefined')
{} else
{
/**
* @constructor
*/
yantra.edn.t9161 = (function (opts,owner,cursor,meta9162){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta9162 = meta9162;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
yantra.edn.t9161.cljs$lang$type = true;
yantra.edn.t9161.cljs$lang$ctorStr = "yantra.edn/t9161";
yantra.edn.t9161.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"yantra.edn/t9161");
});
yantra.edn.t9161.prototype.om$core$IRender$ = true;
yantra.edn.t9161.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.span(null,[cljs.core.str(om.core.value.call(null,self__.cursor))].join(''));
});
yantra.edn.t9161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9163){var self__ = this;
var _9163__$1 = this;return self__.meta9162;
});
yantra.edn.t9161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9163,meta9162__$1){var self__ = this;
var _9163__$1 = this;return (new yantra.edn.t9161(self__.opts,self__.owner,self__.cursor,meta9162__$1));
});
yantra.edn.__GT_t9161 = (function __GT_t9161(opts__$1,owner__$1,cursor__$1,meta9162){return (new yantra.edn.t9161(opts__$1,owner__$1,cursor__$1,meta9162));
});
}
return (new yantra.edn.t9161(opts,owner,cursor,null));
}),cljs.core.Keyword,(function (cursor,owner,opts){if(typeof yantra.edn.t9164 !== 'undefined')
{} else
{
/**
* @constructor
*/
yantra.edn.t9164 = (function (opts,owner,cursor,meta9165){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta9165 = meta9165;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
yantra.edn.t9164.cljs$lang$type = true;
yantra.edn.t9164.cljs$lang$ctorStr = "yantra.edn/t9164";
yantra.edn.t9164.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"yantra.edn/t9164");
});
yantra.edn.t9164.prototype.om$core$IRender$ = true;
yantra.edn.t9164.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.span(null,[cljs.core.str(om.core.value.call(null,self__.cursor))].join(''));
});
yantra.edn.t9164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9166){var self__ = this;
var _9166__$1 = this;return self__.meta9165;
});
yantra.edn.t9164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9166,meta9165__$1){var self__ = this;
var _9166__$1 = this;return (new yantra.edn.t9164(self__.opts,self__.owner,self__.cursor,meta9165__$1));
});
yantra.edn.__GT_t9164 = (function __GT_t9164(opts__$1,owner__$1,cursor__$1,meta9165){return (new yantra.edn.t9164(opts__$1,owner__$1,cursor__$1,meta9165));
});
}
return (new yantra.edn.t9164(opts,owner,cursor,null));
}),cljs.core.Symbol,(function (cursor,owner,opts){if(typeof yantra.edn.t9167 !== 'undefined')
{} else
{
/**
* @constructor
*/
yantra.edn.t9167 = (function (opts,owner,cursor,meta9168){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta9168 = meta9168;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
yantra.edn.t9167.cljs$lang$type = true;
yantra.edn.t9167.cljs$lang$ctorStr = "yantra.edn/t9167";
yantra.edn.t9167.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"yantra.edn/t9167");
});
yantra.edn.t9167.prototype.om$core$IRender$ = true;
yantra.edn.t9167.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.span(null,[cljs.core.str(om.core.value.call(null,self__.cursor))].join(''));
});
yantra.edn.t9167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9169){var self__ = this;
var _9169__$1 = this;return self__.meta9168;
});
yantra.edn.t9167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9169,meta9168__$1){var self__ = this;
var _9169__$1 = this;return (new yantra.edn.t9167(self__.opts,self__.owner,self__.cursor,meta9168__$1));
});
yantra.edn.__GT_t9167 = (function __GT_t9167(opts__$1,owner__$1,cursor__$1,meta9168){return (new yantra.edn.t9167(opts__$1,owner__$1,cursor__$1,meta9168));
});
}
return (new yantra.edn.t9167(opts,owner,cursor,null));
}),cljs.core.PersistentHashSet.fromArray([cljs.core.KeySeq,cljs.core.IndexedSeq,cljs.core.ChunkedCons,cljs.core.LazySeq,cljs.core.RSeq,cljs.core.NodeSeq,cljs.core.ChunkedSeq,cljs.core.List,cljs.core.PersistentArrayMapSeq,cljs.core.EmptyList,cljs.core.Cons,cljs.core.Range,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentTreeMapSeq], true),(function (cursor,owner,opts){var builder = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"builder","builder",1244848909));if(typeof yantra.edn.t9170 !== 'undefined')
{} else
{
/**
* @constructor
*/
yantra.edn.t9170 = (function (builder,opts,owner,cursor,meta9171){
this.builder = builder;
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta9171 = meta9171;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
yantra.edn.t9170.cljs$lang$type = true;
yantra.edn.t9170.cljs$lang$ctorStr = "yantra.edn/t9170";
yantra.edn.t9170.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"yantra.edn/t9170");
});
yantra.edn.t9170.prototype.om$core$IRender$ = true;
yantra.edn.t9170.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return yantra.edn.render_sequential.call(null,"(",(function (p1__9154_SHARP_){return self__.builder.call(null,p1__9154_SHARP_);
})," ",")",self__.cursor);
});
yantra.edn.t9170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9172){var self__ = this;
var _9172__$1 = this;return self__.meta9171;
});
yantra.edn.t9170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9172,meta9171__$1){var self__ = this;
var _9172__$1 = this;return (new yantra.edn.t9170(self__.builder,self__.opts,self__.owner,self__.cursor,meta9171__$1));
});
yantra.edn.__GT_t9170 = (function __GT_t9170(builder__$1,opts__$1,owner__$1,cursor__$1,meta9171){return (new yantra.edn.t9170(builder__$1,opts__$1,owner__$1,cursor__$1,meta9171));
});
}
return (new yantra.edn.t9170(builder,opts,owner,cursor,null));
}),cljs.core.PersistentHashSet.fromArray([cljs.core.Subvec,cljs.core.RedNode,cljs.core.PersistentVector,cljs.core.BlackNode], true),(function (cursor,owner,opts){var builder = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"builder","builder",1244848909));if(typeof yantra.edn.t9173 !== 'undefined')
{} else
{
/**
* @constructor
*/
yantra.edn.t9173 = (function (builder,opts,owner,cursor,meta9174){
this.builder = builder;
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta9174 = meta9174;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
yantra.edn.t9173.cljs$lang$type = true;
yantra.edn.t9173.cljs$lang$ctorStr = "yantra.edn/t9173";
yantra.edn.t9173.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"yantra.edn/t9173");
});
yantra.edn.t9173.prototype.om$core$IRender$ = true;
yantra.edn.t9173.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return yantra.edn.render_sequential.call(null,"[",(function (p1__9155_SHARP_){return self__.builder.call(null,p1__9155_SHARP_);
})," ","]",self__.cursor);
});
yantra.edn.t9173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9175){var self__ = this;
var _9175__$1 = this;return self__.meta9174;
});
yantra.edn.t9173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9175,meta9174__$1){var self__ = this;
var _9175__$1 = this;return (new yantra.edn.t9173(self__.builder,self__.opts,self__.owner,self__.cursor,meta9174__$1));
});
yantra.edn.__GT_t9173 = (function __GT_t9173(builder__$1,opts__$1,owner__$1,cursor__$1,meta9174){return (new yantra.edn.t9173(builder__$1,opts__$1,owner__$1,cursor__$1,meta9174));
});
}
return (new yantra.edn.t9173(builder,opts,owner,cursor,null));
}),cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentTreeSet,cljs.core.PersistentHashSet], true),(function (cursor,owner,opts){var builder = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"builder","builder",1244848909));if(typeof yantra.edn.t9176 !== 'undefined')
{} else
{
/**
* @constructor
*/
yantra.edn.t9176 = (function (builder,opts,owner,cursor,meta9177){
this.builder = builder;
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta9177 = meta9177;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
yantra.edn.t9176.cljs$lang$type = true;
yantra.edn.t9176.cljs$lang$ctorStr = "yantra.edn/t9176";
yantra.edn.t9176.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"yantra.edn/t9176");
});
yantra.edn.t9176.prototype.om$core$IRender$ = true;
yantra.edn.t9176.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return yantra.edn.render_sequential.call(null,"#{",(function (p1__9156_SHARP_){return self__.builder.call(null,p1__9156_SHARP_);
})," ","}",self__.cursor);
});
yantra.edn.t9176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9178){var self__ = this;
var _9178__$1 = this;return self__.meta9177;
});
yantra.edn.t9176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9178,meta9177__$1){var self__ = this;
var _9178__$1 = this;return (new yantra.edn.t9176(self__.builder,self__.opts,self__.owner,self__.cursor,meta9177__$1));
});
yantra.edn.__GT_t9176 = (function __GT_t9176(builder__$1,opts__$1,owner__$1,cursor__$1,meta9177){return (new yantra.edn.t9176(builder__$1,opts__$1,owner__$1,cursor__$1,meta9177));
});
}
return (new yantra.edn.t9176(builder,opts,owner,cursor,null));
}),cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentTreeMap,cljs.core.PersistentArrayMap,cljs.core.PersistentHashMap], true),(function (cursor,owner,opts){var builder = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"builder","builder",1244848909));if(typeof yantra.edn.t9179 !== 'undefined')
{} else
{
/**
* @constructor
*/
yantra.edn.t9179 = (function (builder,opts,owner,cursor,meta9180){
this.builder = builder;
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta9180 = meta9180;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
yantra.edn.t9179.cljs$lang$type = true;
yantra.edn.t9179.cljs$lang$ctorStr = "yantra.edn/t9179";
yantra.edn.t9179.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"yantra.edn/t9179");
});
yantra.edn.t9179.prototype.om$core$IRender$ = true;
yantra.edn.t9179.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return yantra.edn.render_sequential.call(null,"{",(function (p1__9157_SHARP_){return React.DOM.span(null,[self__.builder.call(null,cljs.core.key.call(null,p1__9157_SHARP_))," ",self__.builder.call(null,cljs.core.val.call(null,p1__9157_SHARP_),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null))]);
}),", ","}",self__.cursor);
});
yantra.edn.t9179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9181){var self__ = this;
var _9181__$1 = this;return self__.meta9180;
});
yantra.edn.t9179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9181,meta9180__$1){var self__ = this;
var _9181__$1 = this;return (new yantra.edn.t9179(self__.builder,self__.opts,self__.owner,self__.cursor,meta9180__$1));
});
yantra.edn.__GT_t9179 = (function __GT_t9179(builder__$1,opts__$1,owner__$1,cursor__$1,meta9180){return (new yantra.edn.t9179(builder__$1,opts__$1,owner__$1,cursor__$1,meta9180));
});
}
return (new yantra.edn.t9179(builder,opts,owner,cursor,null));
})], true, false));
