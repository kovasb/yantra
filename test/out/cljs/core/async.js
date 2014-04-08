// Compiled by ClojureScript 0.0-2197
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10687 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10687 = (function (f,fn_handler,meta10688){
this.f = f;
this.fn_handler = fn_handler;
this.meta10688 = meta10688;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10687.cljs$lang$type = true;
cljs.core.async.t10687.cljs$lang$ctorStr = "cljs.core.async/t10687";
cljs.core.async.t10687.cljs$lang$ctorPrWriter = (function (this__4029__auto__,writer__4030__auto__,opt__4031__auto__){return cljs.core._write.call(null,writer__4030__auto__,"cljs.core.async/t10687");
});
cljs.core.async.t10687.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10687.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10687.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10689){var self__ = this;
var _10689__$1 = this;return self__.meta10688;
});
cljs.core.async.t10687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10689,meta10688__$1){var self__ = this;
var _10689__$1 = this;return (new cljs.core.async.t10687(self__.f,self__.fn_handler,meta10688__$1));
});
cljs.core.async.__GT_t10687 = (function __GT_t10687(f__$1,fn_handler__$1,meta10688){return (new cljs.core.async.t10687(f__$1,fn_handler__$1,meta10688));
});
}
return (new cljs.core.async.t10687(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10691 = buff;if(G__10691)
{var bit__4112__auto__ = null;if(cljs.core.truth_((function (){var or__3462__auto__ = bit__4112__auto__;if(cljs.core.truth_(or__3462__auto__))
{return or__3462__auto__;
} else
{return G__10691.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10691.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10691);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10691);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_10692 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10692);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_10692,ret){
return (function (){return fn1.call(null,val_10692);
});})(val_10692,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3450__auto__ = ret;if(cljs.core.truth_(and__3450__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3450__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4310__auto___10693 = n;var x_10694 = 0;while(true){
if((x_10694 < n__4310__auto___10693))
{(a[x_10694] = 0);
{
var G__10695 = (x_10694 + 1);
x_10694 = G__10695;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10696 = (i + 1);
i = G__10696;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10700 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10700 = (function (flag,alt_flag,meta10701){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10701 = meta10701;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10700.cljs$lang$type = true;
cljs.core.async.t10700.cljs$lang$ctorStr = "cljs.core.async/t10700";
cljs.core.async.t10700.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4029__auto__,writer__4030__auto__,opt__4031__auto__){return cljs.core._write.call(null,writer__4030__auto__,"cljs.core.async/t10700");
});})(flag))
;
cljs.core.async.t10700.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10700.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t10700.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10700.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10702){var self__ = this;
var _10702__$1 = this;return self__.meta10701;
});})(flag))
;
cljs.core.async.t10700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10702,meta10701__$1){var self__ = this;
var _10702__$1 = this;return (new cljs.core.async.t10700(self__.flag,self__.alt_flag,meta10701__$1));
});})(flag))
;
cljs.core.async.__GT_t10700 = ((function (flag){
return (function __GT_t10700(flag__$1,alt_flag__$1,meta10701){return (new cljs.core.async.t10700(flag__$1,alt_flag__$1,meta10701));
});})(flag))
;
}
return (new cljs.core.async.t10700(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10706 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10706 = (function (cb,flag,alt_handler,meta10707){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10707 = meta10707;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10706.cljs$lang$type = true;
cljs.core.async.t10706.cljs$lang$ctorStr = "cljs.core.async/t10706";
cljs.core.async.t10706.cljs$lang$ctorPrWriter = (function (this__4029__auto__,writer__4030__auto__,opt__4031__auto__){return cljs.core._write.call(null,writer__4030__auto__,"cljs.core.async/t10706");
});
cljs.core.async.t10706.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10706.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10706.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10706.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10708){var self__ = this;
var _10708__$1 = this;return self__.meta10707;
});
cljs.core.async.t10706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10708,meta10707__$1){var self__ = this;
var _10708__$1 = this;return (new cljs.core.async.t10706(self__.cb,self__.flag,self__.alt_handler,meta10707__$1));
});
cljs.core.async.__GT_t10706 = (function __GT_t10706(cb__$1,flag__$1,alt_handler__$1,meta10707){return (new cljs.core.async.t10706(cb__$1,flag__$1,alt_handler__$1,meta10707));
});
}
return (new cljs.core.async.t10706(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10709_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10709_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3462__auto__ = wport;if(cljs.core.truth_(or__3462__auto__))
{return or__3462__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10710 = (i + 1);
i = G__10710;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3462__auto__ = ret;if(cljs.core.truth_(or__3462__auto__))
{return or__3462__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3450__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3450__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3450__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10711){var map__10713 = p__10711;var map__10713__$1 = ((cljs.core.seq_QMARK_.call(null,map__10713))?cljs.core.apply.call(null,cljs.core.hash_map,map__10713):map__10713);var opts = map__10713__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10711 = null;if (arguments.length > 1) {
  p__10711 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10711);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10714){
var ports = cljs.core.first(arglist__10714);
var p__10711 = cljs.core.rest(arglist__10714);
return alts_BANG___delegate(ports,p__10711);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10722 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10722 = (function (ch,f,map_LT_,meta10723){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10723 = meta10723;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10722.cljs$lang$type = true;
cljs.core.async.t10722.cljs$lang$ctorStr = "cljs.core.async/t10722";
cljs.core.async.t10722.cljs$lang$ctorPrWriter = (function (this__4029__auto__,writer__4030__auto__,opt__4031__auto__){return cljs.core._write.call(null,writer__4030__auto__,"cljs.core.async/t10722");
});
cljs.core.async.t10722.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10722.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10722.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10722.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10725 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10725 = (function (fn1,_,meta10723,ch,f,map_LT_,meta10726){
this.fn1 = fn1;
this._ = _;
this.meta10723 = meta10723;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10726 = meta10726;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10725.cljs$lang$type = true;
cljs.core.async.t10725.cljs$lang$ctorStr = "cljs.core.async/t10725";
cljs.core.async.t10725.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4029__auto__,writer__4030__auto__,opt__4031__auto__){return cljs.core._write.call(null,writer__4030__auto__,"cljs.core.async/t10725");
});})(___$1))
;
cljs.core.async.t10725.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10725.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10725.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10725.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__10715_SHARP_){return f1.call(null,(((p1__10715_SHARP_ == null))?null:self__.f.call(null,p1__10715_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t10725.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10727){var self__ = this;
var _10727__$1 = this;return self__.meta10726;
});})(___$1))
;
cljs.core.async.t10725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10727,meta10726__$1){var self__ = this;
var _10727__$1 = this;return (new cljs.core.async.t10725(self__.fn1,self__._,self__.meta10723,self__.ch,self__.f,self__.map_LT_,meta10726__$1));
});})(___$1))
;
cljs.core.async.__GT_t10725 = ((function (___$1){
return (function __GT_t10725(fn1__$1,___$2,meta10723__$1,ch__$2,f__$2,map_LT___$2,meta10726){return (new cljs.core.async.t10725(fn1__$1,___$2,meta10723__$1,ch__$2,f__$2,map_LT___$2,meta10726));
});})(___$1))
;
}
return (new cljs.core.async.t10725(fn1,___$1,self__.meta10723,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3450__auto__ = ret;if(cljs.core.truth_(and__3450__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3450__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10722.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10722.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10724){var self__ = this;
var _10724__$1 = this;return self__.meta10723;
});
cljs.core.async.t10722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10724,meta10723__$1){var self__ = this;
var _10724__$1 = this;return (new cljs.core.async.t10722(self__.ch,self__.f,self__.map_LT_,meta10723__$1));
});
cljs.core.async.__GT_t10722 = (function __GT_t10722(ch__$1,f__$1,map_LT___$1,meta10723){return (new cljs.core.async.t10722(ch__$1,f__$1,map_LT___$1,meta10723));
});
}
return (new cljs.core.async.t10722(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10731 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10731 = (function (ch,f,map_GT_,meta10732){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10732 = meta10732;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10731.cljs$lang$type = true;
cljs.core.async.t10731.cljs$lang$ctorStr = "cljs.core.async/t10731";
cljs.core.async.t10731.cljs$lang$ctorPrWriter = (function (this__4029__auto__,writer__4030__auto__,opt__4031__auto__){return cljs.core._write.call(null,writer__4030__auto__,"cljs.core.async/t10731");
});
cljs.core.async.t10731.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10731.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10731.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10731.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10731.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10731.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10731.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10733){var self__ = this;
var _10733__$1 = this;return self__.meta10732;
});
cljs.core.async.t10731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10733,meta10732__$1){var self__ = this;
var _10733__$1 = this;return (new cljs.core.async.t10731(self__.ch,self__.f,self__.map_GT_,meta10732__$1));
});
cljs.core.async.__GT_t10731 = (function __GT_t10731(ch__$1,f__$1,map_GT___$1,meta10732){return (new cljs.core.async.t10731(ch__$1,f__$1,map_GT___$1,meta10732));
});
}
return (new cljs.core.async.t10731(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10737 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10737 = (function (ch,p,filter_GT_,meta10738){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10738 = meta10738;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10737.cljs$lang$type = true;
cljs.core.async.t10737.cljs$lang$ctorStr = "cljs.core.async/t10737";
cljs.core.async.t10737.cljs$lang$ctorPrWriter = (function (this__4029__auto__,writer__4030__auto__,opt__4031__auto__){return cljs.core._write.call(null,writer__4030__auto__,"cljs.core.async/t10737");
});
cljs.core.async.t10737.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10737.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10737.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10737.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10737.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10737.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10739){var self__ = this;
var _10739__$1 = this;return self__.meta10738;
});
cljs.core.async.t10737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10739,meta10738__$1){var self__ = this;
var _10739__$1 = this;return (new cljs.core.async.t10737(self__.ch,self__.p,self__.filter_GT_,meta10738__$1));
});
cljs.core.async.__GT_t10737 = (function __GT_t10737(ch__$1,p__$1,filter_GT___$1,meta10738){return (new cljs.core.async.t10737(ch__$1,p__$1,filter_GT___$1,meta10738));
});
}
return (new cljs.core.async.t10737(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6232__auto___10822 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto___10822,out){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto___10822,out){
return (function (state_10801){var state_val_10802 = (state_10801[1]);if((state_val_10802 === 1))
{var state_10801__$1 = state_10801;var statearr_10803_10823 = state_10801__$1;(statearr_10803_10823[2] = null);
(statearr_10803_10823[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10802 === 2))
{var state_10801__$1 = state_10801;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10801__$1,4,ch);
} else
{if((state_val_10802 === 3))
{var inst_10799 = (state_10801[2]);var state_10801__$1 = state_10801;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10801__$1,inst_10799);
} else
{if((state_val_10802 === 4))
{var inst_10783 = (state_10801[7]);var inst_10783__$1 = (state_10801[2]);var inst_10784 = (inst_10783__$1 == null);var state_10801__$1 = (function (){var statearr_10804 = state_10801;(statearr_10804[7] = inst_10783__$1);
return statearr_10804;
})();if(cljs.core.truth_(inst_10784))
{var statearr_10805_10824 = state_10801__$1;(statearr_10805_10824[1] = 5);
} else
{var statearr_10806_10825 = state_10801__$1;(statearr_10806_10825[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10802 === 5))
{var inst_10786 = cljs.core.async.close_BANG_.call(null,out);var state_10801__$1 = state_10801;var statearr_10807_10826 = state_10801__$1;(statearr_10807_10826[2] = inst_10786);
(statearr_10807_10826[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10802 === 6))
{var inst_10783 = (state_10801[7]);var inst_10788 = p.call(null,inst_10783);var state_10801__$1 = state_10801;if(cljs.core.truth_(inst_10788))
{var statearr_10808_10827 = state_10801__$1;(statearr_10808_10827[1] = 8);
} else
{var statearr_10809_10828 = state_10801__$1;(statearr_10809_10828[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10802 === 7))
{var inst_10797 = (state_10801[2]);var state_10801__$1 = state_10801;var statearr_10810_10829 = state_10801__$1;(statearr_10810_10829[2] = inst_10797);
(statearr_10810_10829[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10802 === 8))
{var inst_10783 = (state_10801[7]);var state_10801__$1 = state_10801;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10801__$1,11,out,inst_10783);
} else
{if((state_val_10802 === 9))
{var state_10801__$1 = state_10801;var statearr_10811_10830 = state_10801__$1;(statearr_10811_10830[2] = null);
(statearr_10811_10830[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10802 === 10))
{var inst_10794 = (state_10801[2]);var state_10801__$1 = (function (){var statearr_10812 = state_10801;(statearr_10812[8] = inst_10794);
return statearr_10812;
})();var statearr_10813_10831 = state_10801__$1;(statearr_10813_10831[2] = null);
(statearr_10813_10831[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10802 === 11))
{var inst_10791 = (state_10801[2]);var state_10801__$1 = state_10801;var statearr_10814_10832 = state_10801__$1;(statearr_10814_10832[2] = inst_10791);
(statearr_10814_10832[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6232__auto___10822,out))
;return ((function (switch__6217__auto__,c__6232__auto___10822,out){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_10818 = [null,null,null,null,null,null,null,null,null];(statearr_10818[0] = state_machine__6218__auto__);
(statearr_10818[1] = 1);
return statearr_10818;
});
var state_machine__6218__auto____1 = (function (state_10801){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_10801);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e10819){if((e10819 instanceof Object))
{var ex__6221__auto__ = e10819;var statearr_10820_10833 = state_10801;(statearr_10820_10833[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10801);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10819;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10834 = state_10801;
state_10801 = G__10834;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_10801){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_10801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto___10822,out))
})();var state__6234__auto__ = (function (){var statearr_10821 = f__6233__auto__.call(null);(statearr_10821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___10822);
return statearr_10821;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto___10822,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6232__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto__){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto__){
return (function (state_10986){var state_val_10987 = (state_10986[1]);if((state_val_10987 === 1))
{var state_10986__$1 = state_10986;var statearr_10988_11025 = state_10986__$1;(statearr_10988_11025[2] = null);
(statearr_10988_11025[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10987 === 2))
{var state_10986__$1 = state_10986;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10986__$1,4,in$);
} else
{if((state_val_10987 === 3))
{var inst_10984 = (state_10986[2]);var state_10986__$1 = state_10986;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10986__$1,inst_10984);
} else
{if((state_val_10987 === 4))
{var inst_10932 = (state_10986[7]);var inst_10932__$1 = (state_10986[2]);var inst_10933 = (inst_10932__$1 == null);var state_10986__$1 = (function (){var statearr_10989 = state_10986;(statearr_10989[7] = inst_10932__$1);
return statearr_10989;
})();if(cljs.core.truth_(inst_10933))
{var statearr_10990_11026 = state_10986__$1;(statearr_10990_11026[1] = 5);
} else
{var statearr_10991_11027 = state_10986__$1;(statearr_10991_11027[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10987 === 5))
{var inst_10935 = cljs.core.async.close_BANG_.call(null,out);var state_10986__$1 = state_10986;var statearr_10992_11028 = state_10986__$1;(statearr_10992_11028[2] = inst_10935);
(statearr_10992_11028[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10987 === 6))
{var inst_10932 = (state_10986[7]);var inst_10937 = f.call(null,inst_10932);var inst_10942 = cljs.core.seq.call(null,inst_10937);var inst_10943 = inst_10942;var inst_10944 = null;var inst_10945 = 0;var inst_10946 = 0;var state_10986__$1 = (function (){var statearr_10993 = state_10986;(statearr_10993[8] = inst_10944);
(statearr_10993[9] = inst_10943);
(statearr_10993[10] = inst_10946);
(statearr_10993[11] = inst_10945);
return statearr_10993;
})();var statearr_10994_11029 = state_10986__$1;(statearr_10994_11029[2] = null);
(statearr_10994_11029[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10987 === 7))
{var inst_10982 = (state_10986[2]);var state_10986__$1 = state_10986;var statearr_10995_11030 = state_10986__$1;(statearr_10995_11030[2] = inst_10982);
(statearr_10995_11030[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10987 === 8))
{var inst_10946 = (state_10986[10]);var inst_10945 = (state_10986[11]);var inst_10948 = (inst_10946 < inst_10945);var inst_10949 = inst_10948;var state_10986__$1 = state_10986;if(cljs.core.truth_(inst_10949))
{var statearr_10996_11031 = state_10986__$1;(statearr_10996_11031[1] = 10);
} else
{var statearr_10997_11032 = state_10986__$1;(statearr_10997_11032[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10987 === 9))
{var inst_10979 = (state_10986[2]);var state_10986__$1 = (function (){var statearr_10998 = state_10986;(statearr_10998[12] = inst_10979);
return statearr_10998;
})();var statearr_10999_11033 = state_10986__$1;(statearr_10999_11033[2] = null);
(statearr_10999_11033[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10987 === 10))
{var inst_10944 = (state_10986[8]);var inst_10946 = (state_10986[10]);var inst_10951 = cljs.core._nth.call(null,inst_10944,inst_10946);var state_10986__$1 = state_10986;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10986__$1,13,out,inst_10951);
} else
{if((state_val_10987 === 11))
{var inst_10943 = (state_10986[9]);var inst_10957 = (state_10986[13]);var inst_10957__$1 = cljs.core.seq.call(null,inst_10943);var state_10986__$1 = (function (){var statearr_11003 = state_10986;(statearr_11003[13] = inst_10957__$1);
return statearr_11003;
})();if(inst_10957__$1)
{var statearr_11004_11034 = state_10986__$1;(statearr_11004_11034[1] = 14);
} else
{var statearr_11005_11035 = state_10986__$1;(statearr_11005_11035[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10987 === 12))
{var inst_10977 = (state_10986[2]);var state_10986__$1 = state_10986;var statearr_11006_11036 = state_10986__$1;(statearr_11006_11036[2] = inst_10977);
(statearr_11006_11036[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10987 === 13))
{var inst_10944 = (state_10986[8]);var inst_10943 = (state_10986[9]);var inst_10946 = (state_10986[10]);var inst_10945 = (state_10986[11]);var inst_10953 = (state_10986[2]);var inst_10954 = (inst_10946 + 1);var tmp11000 = inst_10944;var tmp11001 = inst_10943;var tmp11002 = inst_10945;var inst_10943__$1 = tmp11001;var inst_10944__$1 = tmp11000;var inst_10945__$1 = tmp11002;var inst_10946__$1 = inst_10954;var state_10986__$1 = (function (){var statearr_11007 = state_10986;(statearr_11007[8] = inst_10944__$1);
(statearr_11007[9] = inst_10943__$1);
(statearr_11007[10] = inst_10946__$1);
(statearr_11007[11] = inst_10945__$1);
(statearr_11007[14] = inst_10953);
return statearr_11007;
})();var statearr_11008_11037 = state_10986__$1;(statearr_11008_11037[2] = null);
(statearr_11008_11037[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10987 === 14))
{var inst_10957 = (state_10986[13]);var inst_10959 = cljs.core.chunked_seq_QMARK_.call(null,inst_10957);var state_10986__$1 = state_10986;if(inst_10959)
{var statearr_11009_11038 = state_10986__$1;(statearr_11009_11038[1] = 17);
} else
{var statearr_11010_11039 = state_10986__$1;(statearr_11010_11039[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10987 === 15))
{var state_10986__$1 = state_10986;var statearr_11011_11040 = state_10986__$1;(statearr_11011_11040[2] = null);
(statearr_11011_11040[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10987 === 16))
{var inst_10975 = (state_10986[2]);var state_10986__$1 = state_10986;var statearr_11012_11041 = state_10986__$1;(statearr_11012_11041[2] = inst_10975);
(statearr_11012_11041[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10987 === 17))
{var inst_10957 = (state_10986[13]);var inst_10961 = cljs.core.chunk_first.call(null,inst_10957);var inst_10962 = cljs.core.chunk_rest.call(null,inst_10957);var inst_10963 = cljs.core.count.call(null,inst_10961);var inst_10943 = inst_10962;var inst_10944 = inst_10961;var inst_10945 = inst_10963;var inst_10946 = 0;var state_10986__$1 = (function (){var statearr_11013 = state_10986;(statearr_11013[8] = inst_10944);
(statearr_11013[9] = inst_10943);
(statearr_11013[10] = inst_10946);
(statearr_11013[11] = inst_10945);
return statearr_11013;
})();var statearr_11014_11042 = state_10986__$1;(statearr_11014_11042[2] = null);
(statearr_11014_11042[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10987 === 18))
{var inst_10957 = (state_10986[13]);var inst_10966 = cljs.core.first.call(null,inst_10957);var state_10986__$1 = state_10986;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10986__$1,20,out,inst_10966);
} else
{if((state_val_10987 === 19))
{var inst_10972 = (state_10986[2]);var state_10986__$1 = state_10986;var statearr_11015_11043 = state_10986__$1;(statearr_11015_11043[2] = inst_10972);
(statearr_11015_11043[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10987 === 20))
{var inst_10957 = (state_10986[13]);var inst_10968 = (state_10986[2]);var inst_10969 = cljs.core.next.call(null,inst_10957);var inst_10943 = inst_10969;var inst_10944 = null;var inst_10945 = 0;var inst_10946 = 0;var state_10986__$1 = (function (){var statearr_11016 = state_10986;(statearr_11016[8] = inst_10944);
(statearr_11016[9] = inst_10943);
(statearr_11016[10] = inst_10946);
(statearr_11016[11] = inst_10945);
(statearr_11016[15] = inst_10968);
return statearr_11016;
})();var statearr_11017_11044 = state_10986__$1;(statearr_11017_11044[2] = null);
(statearr_11017_11044[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6232__auto__))
;return ((function (switch__6217__auto__,c__6232__auto__){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_11021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11021[0] = state_machine__6218__auto__);
(statearr_11021[1] = 1);
return statearr_11021;
});
var state_machine__6218__auto____1 = (function (state_10986){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_10986);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e11022){if((e11022 instanceof Object))
{var ex__6221__auto__ = e11022;var statearr_11023_11045 = state_10986;(statearr_11023_11045[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10986);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11022;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11046 = state_10986;
state_10986 = G__11046;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_10986){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_10986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto__))
})();var state__6234__auto__ = (function (){var statearr_11024 = f__6233__auto__.call(null);(statearr_11024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto__);
return statearr_11024;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto__))
);
return c__6232__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6232__auto___11127 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto___11127){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto___11127){
return (function (state_11106){var state_val_11107 = (state_11106[1]);if((state_val_11107 === 1))
{var state_11106__$1 = state_11106;var statearr_11108_11128 = state_11106__$1;(statearr_11108_11128[2] = null);
(statearr_11108_11128[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11107 === 2))
{var state_11106__$1 = state_11106;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11106__$1,4,from);
} else
{if((state_val_11107 === 3))
{var inst_11104 = (state_11106[2]);var state_11106__$1 = state_11106;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11106__$1,inst_11104);
} else
{if((state_val_11107 === 4))
{var inst_11089 = (state_11106[7]);var inst_11089__$1 = (state_11106[2]);var inst_11090 = (inst_11089__$1 == null);var state_11106__$1 = (function (){var statearr_11109 = state_11106;(statearr_11109[7] = inst_11089__$1);
return statearr_11109;
})();if(cljs.core.truth_(inst_11090))
{var statearr_11110_11129 = state_11106__$1;(statearr_11110_11129[1] = 5);
} else
{var statearr_11111_11130 = state_11106__$1;(statearr_11111_11130[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11107 === 5))
{var state_11106__$1 = state_11106;if(cljs.core.truth_(close_QMARK_))
{var statearr_11112_11131 = state_11106__$1;(statearr_11112_11131[1] = 8);
} else
{var statearr_11113_11132 = state_11106__$1;(statearr_11113_11132[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11107 === 6))
{var inst_11089 = (state_11106[7]);var state_11106__$1 = state_11106;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11106__$1,11,to,inst_11089);
} else
{if((state_val_11107 === 7))
{var inst_11102 = (state_11106[2]);var state_11106__$1 = state_11106;var statearr_11114_11133 = state_11106__$1;(statearr_11114_11133[2] = inst_11102);
(statearr_11114_11133[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11107 === 8))
{var inst_11093 = cljs.core.async.close_BANG_.call(null,to);var state_11106__$1 = state_11106;var statearr_11115_11134 = state_11106__$1;(statearr_11115_11134[2] = inst_11093);
(statearr_11115_11134[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11107 === 9))
{var state_11106__$1 = state_11106;var statearr_11116_11135 = state_11106__$1;(statearr_11116_11135[2] = null);
(statearr_11116_11135[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11107 === 10))
{var inst_11096 = (state_11106[2]);var state_11106__$1 = state_11106;var statearr_11117_11136 = state_11106__$1;(statearr_11117_11136[2] = inst_11096);
(statearr_11117_11136[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11107 === 11))
{var inst_11099 = (state_11106[2]);var state_11106__$1 = (function (){var statearr_11118 = state_11106;(statearr_11118[8] = inst_11099);
return statearr_11118;
})();var statearr_11119_11137 = state_11106__$1;(statearr_11119_11137[2] = null);
(statearr_11119_11137[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6232__auto___11127))
;return ((function (switch__6217__auto__,c__6232__auto___11127){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_11123 = [null,null,null,null,null,null,null,null,null];(statearr_11123[0] = state_machine__6218__auto__);
(statearr_11123[1] = 1);
return statearr_11123;
});
var state_machine__6218__auto____1 = (function (state_11106){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_11106);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e11124){if((e11124 instanceof Object))
{var ex__6221__auto__ = e11124;var statearr_11125_11138 = state_11106;(statearr_11125_11138[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11106);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11124;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11139 = state_11106;
state_11106 = G__11139;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_11106){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_11106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto___11127))
})();var state__6234__auto__ = (function (){var statearr_11126 = f__6233__auto__.call(null);(statearr_11126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___11127);
return statearr_11126;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto___11127))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6232__auto___11226 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto___11226,tc,fc){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto___11226,tc,fc){
return (function (state_11204){var state_val_11205 = (state_11204[1]);if((state_val_11205 === 1))
{var state_11204__$1 = state_11204;var statearr_11206_11227 = state_11204__$1;(statearr_11206_11227[2] = null);
(statearr_11206_11227[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11205 === 2))
{var state_11204__$1 = state_11204;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11204__$1,4,ch);
} else
{if((state_val_11205 === 3))
{var inst_11202 = (state_11204[2]);var state_11204__$1 = state_11204;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11204__$1,inst_11202);
} else
{if((state_val_11205 === 4))
{var inst_11185 = (state_11204[7]);var inst_11185__$1 = (state_11204[2]);var inst_11186 = (inst_11185__$1 == null);var state_11204__$1 = (function (){var statearr_11207 = state_11204;(statearr_11207[7] = inst_11185__$1);
return statearr_11207;
})();if(cljs.core.truth_(inst_11186))
{var statearr_11208_11228 = state_11204__$1;(statearr_11208_11228[1] = 5);
} else
{var statearr_11209_11229 = state_11204__$1;(statearr_11209_11229[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11205 === 5))
{var inst_11188 = cljs.core.async.close_BANG_.call(null,tc);var inst_11189 = cljs.core.async.close_BANG_.call(null,fc);var state_11204__$1 = (function (){var statearr_11210 = state_11204;(statearr_11210[8] = inst_11188);
return statearr_11210;
})();var statearr_11211_11230 = state_11204__$1;(statearr_11211_11230[2] = inst_11189);
(statearr_11211_11230[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11205 === 6))
{var inst_11185 = (state_11204[7]);var inst_11191 = p.call(null,inst_11185);var state_11204__$1 = state_11204;if(cljs.core.truth_(inst_11191))
{var statearr_11212_11231 = state_11204__$1;(statearr_11212_11231[1] = 9);
} else
{var statearr_11213_11232 = state_11204__$1;(statearr_11213_11232[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11205 === 7))
{var inst_11200 = (state_11204[2]);var state_11204__$1 = state_11204;var statearr_11214_11233 = state_11204__$1;(statearr_11214_11233[2] = inst_11200);
(statearr_11214_11233[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11205 === 8))
{var inst_11197 = (state_11204[2]);var state_11204__$1 = (function (){var statearr_11215 = state_11204;(statearr_11215[9] = inst_11197);
return statearr_11215;
})();var statearr_11216_11234 = state_11204__$1;(statearr_11216_11234[2] = null);
(statearr_11216_11234[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11205 === 9))
{var state_11204__$1 = state_11204;var statearr_11217_11235 = state_11204__$1;(statearr_11217_11235[2] = tc);
(statearr_11217_11235[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11205 === 10))
{var state_11204__$1 = state_11204;var statearr_11218_11236 = state_11204__$1;(statearr_11218_11236[2] = fc);
(statearr_11218_11236[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11205 === 11))
{var inst_11185 = (state_11204[7]);var inst_11195 = (state_11204[2]);var state_11204__$1 = state_11204;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11204__$1,8,inst_11195,inst_11185);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6232__auto___11226,tc,fc))
;return ((function (switch__6217__auto__,c__6232__auto___11226,tc,fc){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_11222 = [null,null,null,null,null,null,null,null,null,null];(statearr_11222[0] = state_machine__6218__auto__);
(statearr_11222[1] = 1);
return statearr_11222;
});
var state_machine__6218__auto____1 = (function (state_11204){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_11204);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e11223){if((e11223 instanceof Object))
{var ex__6221__auto__ = e11223;var statearr_11224_11237 = state_11204;(statearr_11224_11237[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11204);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11223;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11238 = state_11204;
state_11204 = G__11238;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_11204){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_11204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto___11226,tc,fc))
})();var state__6234__auto__ = (function (){var statearr_11225 = f__6233__auto__.call(null);(statearr_11225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___11226);
return statearr_11225;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto___11226,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6232__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto__){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto__){
return (function (state_11285){var state_val_11286 = (state_11285[1]);if((state_val_11286 === 7))
{var inst_11281 = (state_11285[2]);var state_11285__$1 = state_11285;var statearr_11287_11303 = state_11285__$1;(statearr_11287_11303[2] = inst_11281);
(statearr_11287_11303[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11286 === 6))
{var inst_11274 = (state_11285[7]);var inst_11271 = (state_11285[8]);var inst_11278 = f.call(null,inst_11271,inst_11274);var inst_11271__$1 = inst_11278;var state_11285__$1 = (function (){var statearr_11288 = state_11285;(statearr_11288[8] = inst_11271__$1);
return statearr_11288;
})();var statearr_11289_11304 = state_11285__$1;(statearr_11289_11304[2] = null);
(statearr_11289_11304[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11286 === 5))
{var inst_11271 = (state_11285[8]);var state_11285__$1 = state_11285;var statearr_11290_11305 = state_11285__$1;(statearr_11290_11305[2] = inst_11271);
(statearr_11290_11305[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11286 === 4))
{var inst_11274 = (state_11285[7]);var inst_11274__$1 = (state_11285[2]);var inst_11275 = (inst_11274__$1 == null);var state_11285__$1 = (function (){var statearr_11291 = state_11285;(statearr_11291[7] = inst_11274__$1);
return statearr_11291;
})();if(cljs.core.truth_(inst_11275))
{var statearr_11292_11306 = state_11285__$1;(statearr_11292_11306[1] = 5);
} else
{var statearr_11293_11307 = state_11285__$1;(statearr_11293_11307[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11286 === 3))
{var inst_11283 = (state_11285[2]);var state_11285__$1 = state_11285;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11285__$1,inst_11283);
} else
{if((state_val_11286 === 2))
{var state_11285__$1 = state_11285;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11285__$1,4,ch);
} else
{if((state_val_11286 === 1))
{var inst_11271 = init;var state_11285__$1 = (function (){var statearr_11294 = state_11285;(statearr_11294[8] = inst_11271);
return statearr_11294;
})();var statearr_11295_11308 = state_11285__$1;(statearr_11295_11308[2] = null);
(statearr_11295_11308[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6232__auto__))
;return ((function (switch__6217__auto__,c__6232__auto__){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_11299 = [null,null,null,null,null,null,null,null,null];(statearr_11299[0] = state_machine__6218__auto__);
(statearr_11299[1] = 1);
return statearr_11299;
});
var state_machine__6218__auto____1 = (function (state_11285){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_11285);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e11300){if((e11300 instanceof Object))
{var ex__6221__auto__ = e11300;var statearr_11301_11309 = state_11285;(statearr_11301_11309[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11285);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11300;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11310 = state_11285;
state_11285 = G__11310;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_11285){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_11285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto__))
})();var state__6234__auto__ = (function (){var statearr_11302 = f__6233__auto__.call(null);(statearr_11302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto__);
return statearr_11302;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto__))
);
return c__6232__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6232__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto__){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto__){
return (function (state_11372){var state_val_11373 = (state_11372[1]);if((state_val_11373 === 1))
{var inst_11352 = cljs.core.seq.call(null,coll);var inst_11353 = inst_11352;var state_11372__$1 = (function (){var statearr_11374 = state_11372;(statearr_11374[7] = inst_11353);
return statearr_11374;
})();var statearr_11375_11393 = state_11372__$1;(statearr_11375_11393[2] = null);
(statearr_11375_11393[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11373 === 2))
{var inst_11353 = (state_11372[7]);var state_11372__$1 = state_11372;if(cljs.core.truth_(inst_11353))
{var statearr_11376_11394 = state_11372__$1;(statearr_11376_11394[1] = 4);
} else
{var statearr_11377_11395 = state_11372__$1;(statearr_11377_11395[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11373 === 3))
{var inst_11370 = (state_11372[2]);var state_11372__$1 = state_11372;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11372__$1,inst_11370);
} else
{if((state_val_11373 === 4))
{var inst_11353 = (state_11372[7]);var inst_11356 = cljs.core.first.call(null,inst_11353);var state_11372__$1 = state_11372;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11372__$1,7,ch,inst_11356);
} else
{if((state_val_11373 === 5))
{var state_11372__$1 = state_11372;if(cljs.core.truth_(close_QMARK_))
{var statearr_11378_11396 = state_11372__$1;(statearr_11378_11396[1] = 8);
} else
{var statearr_11379_11397 = state_11372__$1;(statearr_11379_11397[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11373 === 6))
{var inst_11368 = (state_11372[2]);var state_11372__$1 = state_11372;var statearr_11380_11398 = state_11372__$1;(statearr_11380_11398[2] = inst_11368);
(statearr_11380_11398[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11373 === 7))
{var inst_11353 = (state_11372[7]);var inst_11358 = (state_11372[2]);var inst_11359 = cljs.core.next.call(null,inst_11353);var inst_11353__$1 = inst_11359;var state_11372__$1 = (function (){var statearr_11381 = state_11372;(statearr_11381[8] = inst_11358);
(statearr_11381[7] = inst_11353__$1);
return statearr_11381;
})();var statearr_11382_11399 = state_11372__$1;(statearr_11382_11399[2] = null);
(statearr_11382_11399[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11373 === 8))
{var inst_11363 = cljs.core.async.close_BANG_.call(null,ch);var state_11372__$1 = state_11372;var statearr_11383_11400 = state_11372__$1;(statearr_11383_11400[2] = inst_11363);
(statearr_11383_11400[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11373 === 9))
{var state_11372__$1 = state_11372;var statearr_11384_11401 = state_11372__$1;(statearr_11384_11401[2] = null);
(statearr_11384_11401[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11373 === 10))
{var inst_11366 = (state_11372[2]);var state_11372__$1 = state_11372;var statearr_11385_11402 = state_11372__$1;(statearr_11385_11402[2] = inst_11366);
(statearr_11385_11402[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__6232__auto__))
;return ((function (switch__6217__auto__,c__6232__auto__){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_11389 = [null,null,null,null,null,null,null,null,null];(statearr_11389[0] = state_machine__6218__auto__);
(statearr_11389[1] = 1);
return statearr_11389;
});
var state_machine__6218__auto____1 = (function (state_11372){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_11372);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e11390){if((e11390 instanceof Object))
{var ex__6221__auto__ = e11390;var statearr_11391_11403 = state_11372;(statearr_11391_11403[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11372);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11390;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11404 = state_11372;
state_11372 = G__11404;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_11372){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_11372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto__))
})();var state__6234__auto__ = (function (){var statearr_11392 = f__6233__auto__.call(null);(statearr_11392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto__);
return statearr_11392;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto__))
);
return c__6232__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11406 = {};return obj11406;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3450__auto__ = _;if(and__3450__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3450__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4089__auto__ = (((_ == null))?null:_);return (function (){var or__3462__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4089__auto__)]);if(or__3462__auto__)
{return or__3462__auto__;
} else
{var or__3462__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3462__auto____$1)
{return or__3462__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11408 = {};return obj11408;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3450__auto__ = m;if(and__3450__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3450__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4089__auto__ = (((m == null))?null:m);return (function (){var or__3462__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4089__auto__)]);if(or__3462__auto__)
{return or__3462__auto__;
} else
{var or__3462__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3462__auto____$1)
{return or__3462__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3450__auto__ = m;if(and__3450__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3450__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4089__auto__ = (((m == null))?null:m);return (function (){var or__3462__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4089__auto__)]);if(or__3462__auto__)
{return or__3462__auto__;
} else
{var or__3462__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3462__auto____$1)
{return or__3462__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3450__auto__ = m;if(and__3450__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3450__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4089__auto__ = (((m == null))?null:m);return (function (){var or__3462__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4089__auto__)]);if(or__3462__auto__)
{return or__3462__auto__;
} else
{var or__3462__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3462__auto____$1)
{return or__3462__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11632 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11632 = (function (cs,ch,mult,meta11633){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11633 = meta11633;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11632.cljs$lang$type = true;
cljs.core.async.t11632.cljs$lang$ctorStr = "cljs.core.async/t11632";
cljs.core.async.t11632.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4029__auto__,writer__4030__auto__,opt__4031__auto__){return cljs.core._write.call(null,writer__4030__auto__,"cljs.core.async/t11632");
});})(cs))
;
cljs.core.async.t11632.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11632.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11632.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11632.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11632.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11632.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11632.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11634){var self__ = this;
var _11634__$1 = this;return self__.meta11633;
});})(cs))
;
cljs.core.async.t11632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11634,meta11633__$1){var self__ = this;
var _11634__$1 = this;return (new cljs.core.async.t11632(self__.cs,self__.ch,self__.mult,meta11633__$1));
});})(cs))
;
cljs.core.async.__GT_t11632 = ((function (cs){
return (function __GT_t11632(cs__$1,ch__$1,mult__$1,meta11633){return (new cljs.core.async.t11632(cs__$1,ch__$1,mult__$1,meta11633));
});})(cs))
;
}
return (new cljs.core.async.t11632(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6232__auto___11855 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto___11855,cs,m,dchan,dctr,done){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto___11855,cs,m,dchan,dctr,done){
return (function (state_11769){var state_val_11770 = (state_11769[1]);if((state_val_11770 === 32))
{var inst_11637 = (state_11769[7]);var inst_11713 = (state_11769[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11769,31,Object,null,30);var inst_11720 = cljs.core.async.put_BANG_.call(null,inst_11713,inst_11637,done);var state_11769__$1 = state_11769;var statearr_11771_11856 = state_11769__$1;(statearr_11771_11856[2] = inst_11720);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11769__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 1))
{var state_11769__$1 = state_11769;var statearr_11772_11857 = state_11769__$1;(statearr_11772_11857[2] = null);
(statearr_11772_11857[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 33))
{var inst_11726 = (state_11769[9]);var inst_11728 = cljs.core.chunked_seq_QMARK_.call(null,inst_11726);var state_11769__$1 = state_11769;if(inst_11728)
{var statearr_11773_11858 = state_11769__$1;(statearr_11773_11858[1] = 36);
} else
{var statearr_11774_11859 = state_11769__$1;(statearr_11774_11859[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 2))
{var state_11769__$1 = state_11769;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11769__$1,4,ch);
} else
{if((state_val_11770 === 34))
{var state_11769__$1 = state_11769;var statearr_11775_11860 = state_11769__$1;(statearr_11775_11860[2] = null);
(statearr_11775_11860[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 3))
{var inst_11767 = (state_11769[2]);var state_11769__$1 = state_11769;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11769__$1,inst_11767);
} else
{if((state_val_11770 === 35))
{var inst_11751 = (state_11769[2]);var state_11769__$1 = state_11769;var statearr_11776_11861 = state_11769__$1;(statearr_11776_11861[2] = inst_11751);
(statearr_11776_11861[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 4))
{var inst_11637 = (state_11769[7]);var inst_11637__$1 = (state_11769[2]);var inst_11638 = (inst_11637__$1 == null);var state_11769__$1 = (function (){var statearr_11777 = state_11769;(statearr_11777[7] = inst_11637__$1);
return statearr_11777;
})();if(cljs.core.truth_(inst_11638))
{var statearr_11778_11862 = state_11769__$1;(statearr_11778_11862[1] = 5);
} else
{var statearr_11779_11863 = state_11769__$1;(statearr_11779_11863[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 36))
{var inst_11726 = (state_11769[9]);var inst_11730 = cljs.core.chunk_first.call(null,inst_11726);var inst_11731 = cljs.core.chunk_rest.call(null,inst_11726);var inst_11732 = cljs.core.count.call(null,inst_11730);var inst_11705 = inst_11731;var inst_11706 = inst_11730;var inst_11707 = inst_11732;var inst_11708 = 0;var state_11769__$1 = (function (){var statearr_11780 = state_11769;(statearr_11780[10] = inst_11705);
(statearr_11780[11] = inst_11708);
(statearr_11780[12] = inst_11706);
(statearr_11780[13] = inst_11707);
return statearr_11780;
})();var statearr_11781_11864 = state_11769__$1;(statearr_11781_11864[2] = null);
(statearr_11781_11864[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 5))
{var inst_11644 = cljs.core.deref.call(null,cs);var inst_11645 = cljs.core.seq.call(null,inst_11644);var inst_11646 = inst_11645;var inst_11647 = null;var inst_11648 = 0;var inst_11649 = 0;var state_11769__$1 = (function (){var statearr_11782 = state_11769;(statearr_11782[14] = inst_11646);
(statearr_11782[15] = inst_11648);
(statearr_11782[16] = inst_11647);
(statearr_11782[17] = inst_11649);
return statearr_11782;
})();var statearr_11783_11865 = state_11769__$1;(statearr_11783_11865[2] = null);
(statearr_11783_11865[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 37))
{var inst_11726 = (state_11769[9]);var inst_11735 = cljs.core.first.call(null,inst_11726);var state_11769__$1 = (function (){var statearr_11784 = state_11769;(statearr_11784[18] = inst_11735);
return statearr_11784;
})();var statearr_11785_11866 = state_11769__$1;(statearr_11785_11866[2] = null);
(statearr_11785_11866[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 6))
{var inst_11697 = (state_11769[19]);var inst_11696 = cljs.core.deref.call(null,cs);var inst_11697__$1 = cljs.core.keys.call(null,inst_11696);var inst_11698 = cljs.core.count.call(null,inst_11697__$1);var inst_11699 = cljs.core.reset_BANG_.call(null,dctr,inst_11698);var inst_11704 = cljs.core.seq.call(null,inst_11697__$1);var inst_11705 = inst_11704;var inst_11706 = null;var inst_11707 = 0;var inst_11708 = 0;var state_11769__$1 = (function (){var statearr_11786 = state_11769;(statearr_11786[10] = inst_11705);
(statearr_11786[11] = inst_11708);
(statearr_11786[20] = inst_11699);
(statearr_11786[12] = inst_11706);
(statearr_11786[13] = inst_11707);
(statearr_11786[19] = inst_11697__$1);
return statearr_11786;
})();var statearr_11787_11867 = state_11769__$1;(statearr_11787_11867[2] = null);
(statearr_11787_11867[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 38))
{var inst_11748 = (state_11769[2]);var state_11769__$1 = state_11769;var statearr_11788_11868 = state_11769__$1;(statearr_11788_11868[2] = inst_11748);
(statearr_11788_11868[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 7))
{var inst_11765 = (state_11769[2]);var state_11769__$1 = state_11769;var statearr_11789_11869 = state_11769__$1;(statearr_11789_11869[2] = inst_11765);
(statearr_11789_11869[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 39))
{var inst_11726 = (state_11769[9]);var inst_11744 = (state_11769[2]);var inst_11745 = cljs.core.next.call(null,inst_11726);var inst_11705 = inst_11745;var inst_11706 = null;var inst_11707 = 0;var inst_11708 = 0;var state_11769__$1 = (function (){var statearr_11790 = state_11769;(statearr_11790[10] = inst_11705);
(statearr_11790[11] = inst_11708);
(statearr_11790[12] = inst_11706);
(statearr_11790[13] = inst_11707);
(statearr_11790[21] = inst_11744);
return statearr_11790;
})();var statearr_11791_11870 = state_11769__$1;(statearr_11791_11870[2] = null);
(statearr_11791_11870[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 8))
{var inst_11648 = (state_11769[15]);var inst_11649 = (state_11769[17]);var inst_11651 = (inst_11649 < inst_11648);var inst_11652 = inst_11651;var state_11769__$1 = state_11769;if(cljs.core.truth_(inst_11652))
{var statearr_11792_11871 = state_11769__$1;(statearr_11792_11871[1] = 10);
} else
{var statearr_11793_11872 = state_11769__$1;(statearr_11793_11872[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 40))
{var inst_11735 = (state_11769[18]);var inst_11736 = (state_11769[2]);var inst_11737 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11738 = cljs.core.async.untap_STAR_.call(null,m,inst_11735);var state_11769__$1 = (function (){var statearr_11794 = state_11769;(statearr_11794[22] = inst_11736);
(statearr_11794[23] = inst_11737);
return statearr_11794;
})();var statearr_11795_11873 = state_11769__$1;(statearr_11795_11873[2] = inst_11738);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11769__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 9))
{var inst_11694 = (state_11769[2]);var state_11769__$1 = state_11769;var statearr_11796_11874 = state_11769__$1;(statearr_11796_11874[2] = inst_11694);
(statearr_11796_11874[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 41))
{var inst_11637 = (state_11769[7]);var inst_11735 = (state_11769[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11769,40,Object,null,39);var inst_11742 = cljs.core.async.put_BANG_.call(null,inst_11735,inst_11637,done);var state_11769__$1 = state_11769;var statearr_11797_11875 = state_11769__$1;(statearr_11797_11875[2] = inst_11742);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11769__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 10))
{var inst_11647 = (state_11769[16]);var inst_11649 = (state_11769[17]);var inst_11655 = cljs.core._nth.call(null,inst_11647,inst_11649);var inst_11656 = cljs.core.nth.call(null,inst_11655,0,null);var inst_11657 = cljs.core.nth.call(null,inst_11655,1,null);var state_11769__$1 = (function (){var statearr_11798 = state_11769;(statearr_11798[24] = inst_11656);
return statearr_11798;
})();if(cljs.core.truth_(inst_11657))
{var statearr_11799_11876 = state_11769__$1;(statearr_11799_11876[1] = 13);
} else
{var statearr_11800_11877 = state_11769__$1;(statearr_11800_11877[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 42))
{var state_11769__$1 = state_11769;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11769__$1,45,dchan);
} else
{if((state_val_11770 === 11))
{var inst_11646 = (state_11769[14]);var inst_11666 = (state_11769[25]);var inst_11666__$1 = cljs.core.seq.call(null,inst_11646);var state_11769__$1 = (function (){var statearr_11801 = state_11769;(statearr_11801[25] = inst_11666__$1);
return statearr_11801;
})();if(inst_11666__$1)
{var statearr_11802_11878 = state_11769__$1;(statearr_11802_11878[1] = 16);
} else
{var statearr_11803_11879 = state_11769__$1;(statearr_11803_11879[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 43))
{var state_11769__$1 = state_11769;var statearr_11804_11880 = state_11769__$1;(statearr_11804_11880[2] = null);
(statearr_11804_11880[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 12))
{var inst_11692 = (state_11769[2]);var state_11769__$1 = state_11769;var statearr_11805_11881 = state_11769__$1;(statearr_11805_11881[2] = inst_11692);
(statearr_11805_11881[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 44))
{var inst_11762 = (state_11769[2]);var state_11769__$1 = (function (){var statearr_11806 = state_11769;(statearr_11806[26] = inst_11762);
return statearr_11806;
})();var statearr_11807_11882 = state_11769__$1;(statearr_11807_11882[2] = null);
(statearr_11807_11882[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 13))
{var inst_11656 = (state_11769[24]);var inst_11659 = cljs.core.async.close_BANG_.call(null,inst_11656);var state_11769__$1 = state_11769;var statearr_11808_11883 = state_11769__$1;(statearr_11808_11883[2] = inst_11659);
(statearr_11808_11883[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 45))
{var inst_11759 = (state_11769[2]);var state_11769__$1 = state_11769;var statearr_11812_11884 = state_11769__$1;(statearr_11812_11884[2] = inst_11759);
(statearr_11812_11884[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 14))
{var state_11769__$1 = state_11769;var statearr_11813_11885 = state_11769__$1;(statearr_11813_11885[2] = null);
(statearr_11813_11885[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 15))
{var inst_11646 = (state_11769[14]);var inst_11648 = (state_11769[15]);var inst_11647 = (state_11769[16]);var inst_11649 = (state_11769[17]);var inst_11662 = (state_11769[2]);var inst_11663 = (inst_11649 + 1);var tmp11809 = inst_11646;var tmp11810 = inst_11648;var tmp11811 = inst_11647;var inst_11646__$1 = tmp11809;var inst_11647__$1 = tmp11811;var inst_11648__$1 = tmp11810;var inst_11649__$1 = inst_11663;var state_11769__$1 = (function (){var statearr_11814 = state_11769;(statearr_11814[27] = inst_11662);
(statearr_11814[14] = inst_11646__$1);
(statearr_11814[15] = inst_11648__$1);
(statearr_11814[16] = inst_11647__$1);
(statearr_11814[17] = inst_11649__$1);
return statearr_11814;
})();var statearr_11815_11886 = state_11769__$1;(statearr_11815_11886[2] = null);
(statearr_11815_11886[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 16))
{var inst_11666 = (state_11769[25]);var inst_11668 = cljs.core.chunked_seq_QMARK_.call(null,inst_11666);var state_11769__$1 = state_11769;if(inst_11668)
{var statearr_11816_11887 = state_11769__$1;(statearr_11816_11887[1] = 19);
} else
{var statearr_11817_11888 = state_11769__$1;(statearr_11817_11888[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 17))
{var state_11769__$1 = state_11769;var statearr_11818_11889 = state_11769__$1;(statearr_11818_11889[2] = null);
(statearr_11818_11889[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 18))
{var inst_11690 = (state_11769[2]);var state_11769__$1 = state_11769;var statearr_11819_11890 = state_11769__$1;(statearr_11819_11890[2] = inst_11690);
(statearr_11819_11890[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 19))
{var inst_11666 = (state_11769[25]);var inst_11670 = cljs.core.chunk_first.call(null,inst_11666);var inst_11671 = cljs.core.chunk_rest.call(null,inst_11666);var inst_11672 = cljs.core.count.call(null,inst_11670);var inst_11646 = inst_11671;var inst_11647 = inst_11670;var inst_11648 = inst_11672;var inst_11649 = 0;var state_11769__$1 = (function (){var statearr_11820 = state_11769;(statearr_11820[14] = inst_11646);
(statearr_11820[15] = inst_11648);
(statearr_11820[16] = inst_11647);
(statearr_11820[17] = inst_11649);
return statearr_11820;
})();var statearr_11821_11891 = state_11769__$1;(statearr_11821_11891[2] = null);
(statearr_11821_11891[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 20))
{var inst_11666 = (state_11769[25]);var inst_11676 = cljs.core.first.call(null,inst_11666);var inst_11677 = cljs.core.nth.call(null,inst_11676,0,null);var inst_11678 = cljs.core.nth.call(null,inst_11676,1,null);var state_11769__$1 = (function (){var statearr_11822 = state_11769;(statearr_11822[28] = inst_11677);
return statearr_11822;
})();if(cljs.core.truth_(inst_11678))
{var statearr_11823_11892 = state_11769__$1;(statearr_11823_11892[1] = 22);
} else
{var statearr_11824_11893 = state_11769__$1;(statearr_11824_11893[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 21))
{var inst_11687 = (state_11769[2]);var state_11769__$1 = state_11769;var statearr_11825_11894 = state_11769__$1;(statearr_11825_11894[2] = inst_11687);
(statearr_11825_11894[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 22))
{var inst_11677 = (state_11769[28]);var inst_11680 = cljs.core.async.close_BANG_.call(null,inst_11677);var state_11769__$1 = state_11769;var statearr_11826_11895 = state_11769__$1;(statearr_11826_11895[2] = inst_11680);
(statearr_11826_11895[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 23))
{var state_11769__$1 = state_11769;var statearr_11827_11896 = state_11769__$1;(statearr_11827_11896[2] = null);
(statearr_11827_11896[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 24))
{var inst_11666 = (state_11769[25]);var inst_11683 = (state_11769[2]);var inst_11684 = cljs.core.next.call(null,inst_11666);var inst_11646 = inst_11684;var inst_11647 = null;var inst_11648 = 0;var inst_11649 = 0;var state_11769__$1 = (function (){var statearr_11828 = state_11769;(statearr_11828[14] = inst_11646);
(statearr_11828[15] = inst_11648);
(statearr_11828[16] = inst_11647);
(statearr_11828[17] = inst_11649);
(statearr_11828[29] = inst_11683);
return statearr_11828;
})();var statearr_11829_11897 = state_11769__$1;(statearr_11829_11897[2] = null);
(statearr_11829_11897[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 25))
{var inst_11708 = (state_11769[11]);var inst_11707 = (state_11769[13]);var inst_11710 = (inst_11708 < inst_11707);var inst_11711 = inst_11710;var state_11769__$1 = state_11769;if(cljs.core.truth_(inst_11711))
{var statearr_11830_11898 = state_11769__$1;(statearr_11830_11898[1] = 27);
} else
{var statearr_11831_11899 = state_11769__$1;(statearr_11831_11899[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 26))
{var inst_11697 = (state_11769[19]);var inst_11755 = (state_11769[2]);var inst_11756 = cljs.core.seq.call(null,inst_11697);var state_11769__$1 = (function (){var statearr_11832 = state_11769;(statearr_11832[30] = inst_11755);
return statearr_11832;
})();if(inst_11756)
{var statearr_11833_11900 = state_11769__$1;(statearr_11833_11900[1] = 42);
} else
{var statearr_11834_11901 = state_11769__$1;(statearr_11834_11901[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 27))
{var inst_11708 = (state_11769[11]);var inst_11706 = (state_11769[12]);var inst_11713 = cljs.core._nth.call(null,inst_11706,inst_11708);var state_11769__$1 = (function (){var statearr_11835 = state_11769;(statearr_11835[8] = inst_11713);
return statearr_11835;
})();var statearr_11836_11902 = state_11769__$1;(statearr_11836_11902[2] = null);
(statearr_11836_11902[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 28))
{var inst_11705 = (state_11769[10]);var inst_11726 = (state_11769[9]);var inst_11726__$1 = cljs.core.seq.call(null,inst_11705);var state_11769__$1 = (function (){var statearr_11840 = state_11769;(statearr_11840[9] = inst_11726__$1);
return statearr_11840;
})();if(inst_11726__$1)
{var statearr_11841_11903 = state_11769__$1;(statearr_11841_11903[1] = 33);
} else
{var statearr_11842_11904 = state_11769__$1;(statearr_11842_11904[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 29))
{var inst_11753 = (state_11769[2]);var state_11769__$1 = state_11769;var statearr_11843_11905 = state_11769__$1;(statearr_11843_11905[2] = inst_11753);
(statearr_11843_11905[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 30))
{var inst_11705 = (state_11769[10]);var inst_11708 = (state_11769[11]);var inst_11706 = (state_11769[12]);var inst_11707 = (state_11769[13]);var inst_11722 = (state_11769[2]);var inst_11723 = (inst_11708 + 1);var tmp11837 = inst_11705;var tmp11838 = inst_11706;var tmp11839 = inst_11707;var inst_11705__$1 = tmp11837;var inst_11706__$1 = tmp11838;var inst_11707__$1 = tmp11839;var inst_11708__$1 = inst_11723;var state_11769__$1 = (function (){var statearr_11844 = state_11769;(statearr_11844[10] = inst_11705__$1);
(statearr_11844[11] = inst_11708__$1);
(statearr_11844[12] = inst_11706__$1);
(statearr_11844[13] = inst_11707__$1);
(statearr_11844[31] = inst_11722);
return statearr_11844;
})();var statearr_11845_11906 = state_11769__$1;(statearr_11845_11906[2] = null);
(statearr_11845_11906[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11770 === 31))
{var inst_11713 = (state_11769[8]);var inst_11714 = (state_11769[2]);var inst_11715 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11716 = cljs.core.async.untap_STAR_.call(null,m,inst_11713);var state_11769__$1 = (function (){var statearr_11846 = state_11769;(statearr_11846[32] = inst_11714);
(statearr_11846[33] = inst_11715);
return statearr_11846;
})();var statearr_11847_11907 = state_11769__$1;(statearr_11847_11907[2] = inst_11716);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11769__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6232__auto___11855,cs,m,dchan,dctr,done))
;return ((function (switch__6217__auto__,c__6232__auto___11855,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_11851 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11851[0] = state_machine__6218__auto__);
(statearr_11851[1] = 1);
return statearr_11851;
});
var state_machine__6218__auto____1 = (function (state_11769){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_11769);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e11852){if((e11852 instanceof Object))
{var ex__6221__auto__ = e11852;var statearr_11853_11908 = state_11769;(statearr_11853_11908[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11769);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11852;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11909 = state_11769;
state_11769 = G__11909;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_11769){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_11769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto___11855,cs,m,dchan,dctr,done))
})();var state__6234__auto__ = (function (){var statearr_11854 = f__6233__auto__.call(null);(statearr_11854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___11855);
return statearr_11854;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto___11855,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj11911 = {};return obj11911;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3450__auto__ = m;if(and__3450__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3450__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4089__auto__ = (((m == null))?null:m);return (function (){var or__3462__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4089__auto__)]);if(or__3462__auto__)
{return or__3462__auto__;
} else
{var or__3462__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3462__auto____$1)
{return or__3462__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3450__auto__ = m;if(and__3450__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3450__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4089__auto__ = (((m == null))?null:m);return (function (){var or__3462__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4089__auto__)]);if(or__3462__auto__)
{return or__3462__auto__;
} else
{var or__3462__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3462__auto____$1)
{return or__3462__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3450__auto__ = m;if(and__3450__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3450__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4089__auto__ = (((m == null))?null:m);return (function (){var or__3462__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4089__auto__)]);if(or__3462__auto__)
{return or__3462__auto__;
} else
{var or__3462__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3462__auto____$1)
{return or__3462__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3450__auto__ = m;if(and__3450__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3450__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4089__auto__ = (((m == null))?null:m);return (function (){var or__3462__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4089__auto__)]);if(or__3462__auto__)
{return or__3462__auto__;
} else
{var or__3462__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3462__auto____$1)
{return or__3462__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3450__auto__ = m;if(and__3450__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3450__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4089__auto__ = (((m == null))?null:m);return (function (){var or__3462__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4089__auto__)]);if(or__3462__auto__)
{return or__3462__auto__;
} else
{var or__3462__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3462__auto____$1)
{return or__3462__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12021 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12021 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12022){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta12022 = meta12022;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12021.cljs$lang$type = true;
cljs.core.async.t12021.cljs$lang$ctorStr = "cljs.core.async/t12021";
cljs.core.async.t12021.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4029__auto__,writer__4030__auto__,opt__4031__auto__){return cljs.core._write.call(null,writer__4030__auto__,"cljs.core.async/t12021");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12021.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12021.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12021.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12021.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12021.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12021.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12021.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12021.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12021.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12023){var self__ = this;
var _12023__$1 = this;return self__.meta12022;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12023,meta12022__$1){var self__ = this;
var _12023__$1 = this;return (new cljs.core.async.t12021(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12022__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12021 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12021(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12022){return (new cljs.core.async.t12021(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12022));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12021(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6232__auto___12130 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto___12130,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto___12130,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12088){var state_val_12089 = (state_12088[1]);if((state_val_12089 === 1))
{var inst_12027 = (state_12088[7]);var inst_12027__$1 = calc_state.call(null);var inst_12028 = cljs.core.seq_QMARK_.call(null,inst_12027__$1);var state_12088__$1 = (function (){var statearr_12090 = state_12088;(statearr_12090[7] = inst_12027__$1);
return statearr_12090;
})();if(inst_12028)
{var statearr_12091_12131 = state_12088__$1;(statearr_12091_12131[1] = 2);
} else
{var statearr_12092_12132 = state_12088__$1;(statearr_12092_12132[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12089 === 2))
{var inst_12027 = (state_12088[7]);var inst_12030 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12027);var state_12088__$1 = state_12088;var statearr_12093_12133 = state_12088__$1;(statearr_12093_12133[2] = inst_12030);
(statearr_12093_12133[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12089 === 3))
{var inst_12027 = (state_12088[7]);var state_12088__$1 = state_12088;var statearr_12094_12134 = state_12088__$1;(statearr_12094_12134[2] = inst_12027);
(statearr_12094_12134[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12089 === 4))
{var inst_12027 = (state_12088[7]);var inst_12033 = (state_12088[2]);var inst_12034 = cljs.core.get.call(null,inst_12033,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12035 = cljs.core.get.call(null,inst_12033,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12036 = cljs.core.get.call(null,inst_12033,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12037 = inst_12027;var state_12088__$1 = (function (){var statearr_12095 = state_12088;(statearr_12095[8] = inst_12037);
(statearr_12095[9] = inst_12036);
(statearr_12095[10] = inst_12035);
(statearr_12095[11] = inst_12034);
return statearr_12095;
})();var statearr_12096_12135 = state_12088__$1;(statearr_12096_12135[2] = null);
(statearr_12096_12135[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12089 === 5))
{var inst_12037 = (state_12088[8]);var inst_12040 = cljs.core.seq_QMARK_.call(null,inst_12037);var state_12088__$1 = state_12088;if(inst_12040)
{var statearr_12097_12136 = state_12088__$1;(statearr_12097_12136[1] = 7);
} else
{var statearr_12098_12137 = state_12088__$1;(statearr_12098_12137[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12089 === 6))
{var inst_12086 = (state_12088[2]);var state_12088__$1 = state_12088;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12088__$1,inst_12086);
} else
{if((state_val_12089 === 7))
{var inst_12037 = (state_12088[8]);var inst_12042 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12037);var state_12088__$1 = state_12088;var statearr_12099_12138 = state_12088__$1;(statearr_12099_12138[2] = inst_12042);
(statearr_12099_12138[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12089 === 8))
{var inst_12037 = (state_12088[8]);var state_12088__$1 = state_12088;var statearr_12100_12139 = state_12088__$1;(statearr_12100_12139[2] = inst_12037);
(statearr_12100_12139[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12089 === 9))
{var inst_12045 = (state_12088[12]);var inst_12045__$1 = (state_12088[2]);var inst_12046 = cljs.core.get.call(null,inst_12045__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12047 = cljs.core.get.call(null,inst_12045__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12048 = cljs.core.get.call(null,inst_12045__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12088__$1 = (function (){var statearr_12101 = state_12088;(statearr_12101[12] = inst_12045__$1);
(statearr_12101[13] = inst_12048);
(statearr_12101[14] = inst_12047);
return statearr_12101;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12088__$1,10,inst_12046);
} else
{if((state_val_12089 === 10))
{var inst_12053 = (state_12088[15]);var inst_12052 = (state_12088[16]);var inst_12051 = (state_12088[2]);var inst_12052__$1 = cljs.core.nth.call(null,inst_12051,0,null);var inst_12053__$1 = cljs.core.nth.call(null,inst_12051,1,null);var inst_12054 = (inst_12052__$1 == null);var inst_12055 = cljs.core._EQ_.call(null,inst_12053__$1,change);var inst_12056 = (inst_12054) || (inst_12055);var state_12088__$1 = (function (){var statearr_12102 = state_12088;(statearr_12102[15] = inst_12053__$1);
(statearr_12102[16] = inst_12052__$1);
return statearr_12102;
})();if(cljs.core.truth_(inst_12056))
{var statearr_12103_12140 = state_12088__$1;(statearr_12103_12140[1] = 11);
} else
{var statearr_12104_12141 = state_12088__$1;(statearr_12104_12141[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12089 === 11))
{var inst_12052 = (state_12088[16]);var inst_12058 = (inst_12052 == null);var state_12088__$1 = state_12088;if(cljs.core.truth_(inst_12058))
{var statearr_12105_12142 = state_12088__$1;(statearr_12105_12142[1] = 14);
} else
{var statearr_12106_12143 = state_12088__$1;(statearr_12106_12143[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12089 === 12))
{var inst_12067 = (state_12088[17]);var inst_12053 = (state_12088[15]);var inst_12048 = (state_12088[13]);var inst_12067__$1 = inst_12048.call(null,inst_12053);var state_12088__$1 = (function (){var statearr_12107 = state_12088;(statearr_12107[17] = inst_12067__$1);
return statearr_12107;
})();if(cljs.core.truth_(inst_12067__$1))
{var statearr_12108_12144 = state_12088__$1;(statearr_12108_12144[1] = 17);
} else
{var statearr_12109_12145 = state_12088__$1;(statearr_12109_12145[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12089 === 13))
{var inst_12084 = (state_12088[2]);var state_12088__$1 = state_12088;var statearr_12110_12146 = state_12088__$1;(statearr_12110_12146[2] = inst_12084);
(statearr_12110_12146[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12089 === 14))
{var inst_12053 = (state_12088[15]);var inst_12060 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12053);var state_12088__$1 = state_12088;var statearr_12111_12147 = state_12088__$1;(statearr_12111_12147[2] = inst_12060);
(statearr_12111_12147[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12089 === 15))
{var state_12088__$1 = state_12088;var statearr_12112_12148 = state_12088__$1;(statearr_12112_12148[2] = null);
(statearr_12112_12148[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12089 === 16))
{var inst_12063 = (state_12088[2]);var inst_12064 = calc_state.call(null);var inst_12037 = inst_12064;var state_12088__$1 = (function (){var statearr_12113 = state_12088;(statearr_12113[8] = inst_12037);
(statearr_12113[18] = inst_12063);
return statearr_12113;
})();var statearr_12114_12149 = state_12088__$1;(statearr_12114_12149[2] = null);
(statearr_12114_12149[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12089 === 17))
{var inst_12067 = (state_12088[17]);var state_12088__$1 = state_12088;var statearr_12115_12150 = state_12088__$1;(statearr_12115_12150[2] = inst_12067);
(statearr_12115_12150[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12089 === 18))
{var inst_12053 = (state_12088[15]);var inst_12048 = (state_12088[13]);var inst_12047 = (state_12088[14]);var inst_12070 = cljs.core.empty_QMARK_.call(null,inst_12048);var inst_12071 = inst_12047.call(null,inst_12053);var inst_12072 = cljs.core.not.call(null,inst_12071);var inst_12073 = (inst_12070) && (inst_12072);var state_12088__$1 = state_12088;var statearr_12116_12151 = state_12088__$1;(statearr_12116_12151[2] = inst_12073);
(statearr_12116_12151[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12089 === 19))
{var inst_12075 = (state_12088[2]);var state_12088__$1 = state_12088;if(cljs.core.truth_(inst_12075))
{var statearr_12117_12152 = state_12088__$1;(statearr_12117_12152[1] = 20);
} else
{var statearr_12118_12153 = state_12088__$1;(statearr_12118_12153[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12089 === 20))
{var inst_12052 = (state_12088[16]);var state_12088__$1 = state_12088;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12088__$1,23,out,inst_12052);
} else
{if((state_val_12089 === 21))
{var state_12088__$1 = state_12088;var statearr_12119_12154 = state_12088__$1;(statearr_12119_12154[2] = null);
(statearr_12119_12154[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12089 === 22))
{var inst_12045 = (state_12088[12]);var inst_12081 = (state_12088[2]);var inst_12037 = inst_12045;var state_12088__$1 = (function (){var statearr_12120 = state_12088;(statearr_12120[8] = inst_12037);
(statearr_12120[19] = inst_12081);
return statearr_12120;
})();var statearr_12121_12155 = state_12088__$1;(statearr_12121_12155[2] = null);
(statearr_12121_12155[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12089 === 23))
{var inst_12078 = (state_12088[2]);var state_12088__$1 = state_12088;var statearr_12122_12156 = state_12088__$1;(statearr_12122_12156[2] = inst_12078);
(statearr_12122_12156[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6232__auto___12130,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6217__auto__,c__6232__auto___12130,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_12126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12126[0] = state_machine__6218__auto__);
(statearr_12126[1] = 1);
return statearr_12126;
});
var state_machine__6218__auto____1 = (function (state_12088){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_12088);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e12127){if((e12127 instanceof Object))
{var ex__6221__auto__ = e12127;var statearr_12128_12157 = state_12088;(statearr_12128_12157[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12088);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12127;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12158 = state_12088;
state_12088 = G__12158;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_12088){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_12088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto___12130,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6234__auto__ = (function (){var statearr_12129 = f__6233__auto__.call(null);(statearr_12129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___12130);
return statearr_12129;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto___12130,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12160 = {};return obj12160;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3450__auto__ = p;if(and__3450__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3450__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4089__auto__ = (((p == null))?null:p);return (function (){var or__3462__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4089__auto__)]);if(or__3462__auto__)
{return or__3462__auto__;
} else
{var or__3462__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3462__auto____$1)
{return or__3462__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3450__auto__ = p;if(and__3450__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3450__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4089__auto__ = (((p == null))?null:p);return (function (){var or__3462__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4089__auto__)]);if(or__3462__auto__)
{return or__3462__auto__;
} else
{var or__3462__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3462__auto____$1)
{return or__3462__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3450__auto__ = p;if(and__3450__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3450__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4089__auto__ = (((p == null))?null:p);return (function (){var or__3462__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4089__auto__)]);if(or__3462__auto__)
{return or__3462__auto__;
} else
{var or__3462__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3462__auto____$1)
{return or__3462__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3450__auto__ = p;if(and__3450__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3450__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4089__auto__ = (((p == null))?null:p);return (function (){var or__3462__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4089__auto__)]);if(or__3462__auto__)
{return or__3462__auto__;
} else
{var or__3462__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3462__auto____$1)
{return or__3462__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3462__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3462__auto__))
{return or__3462__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3462__auto__,mults){
return (function (p1__12161_SHARP_){if(cljs.core.truth_(p1__12161_SHARP_.call(null,topic)))
{return p1__12161_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12161_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3462__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12286 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12286 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12287){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12287 = meta12287;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12286.cljs$lang$type = true;
cljs.core.async.t12286.cljs$lang$ctorStr = "cljs.core.async/t12286";
cljs.core.async.t12286.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4029__auto__,writer__4030__auto__,opt__4031__auto__){return cljs.core._write.call(null,writer__4030__auto__,"cljs.core.async/t12286");
});})(mults,ensure_mult))
;
cljs.core.async.t12286.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12286.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12286.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12286.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12286.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12286.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12286.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12286.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12288){var self__ = this;
var _12288__$1 = this;return self__.meta12287;
});})(mults,ensure_mult))
;
cljs.core.async.t12286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12288,meta12287__$1){var self__ = this;
var _12288__$1 = this;return (new cljs.core.async.t12286(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12287__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12286 = ((function (mults,ensure_mult){
return (function __GT_t12286(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12287){return (new cljs.core.async.t12286(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12287));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12286(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6232__auto___12410 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto___12410,mults,ensure_mult,p){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto___12410,mults,ensure_mult,p){
return (function (state_12362){var state_val_12363 = (state_12362[1]);if((state_val_12363 === 1))
{var state_12362__$1 = state_12362;var statearr_12364_12411 = state_12362__$1;(statearr_12364_12411[2] = null);
(statearr_12364_12411[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12363 === 2))
{var state_12362__$1 = state_12362;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12362__$1,4,ch);
} else
{if((state_val_12363 === 3))
{var inst_12360 = (state_12362[2]);var state_12362__$1 = state_12362;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12362__$1,inst_12360);
} else
{if((state_val_12363 === 4))
{var inst_12291 = (state_12362[7]);var inst_12291__$1 = (state_12362[2]);var inst_12292 = (inst_12291__$1 == null);var state_12362__$1 = (function (){var statearr_12365 = state_12362;(statearr_12365[7] = inst_12291__$1);
return statearr_12365;
})();if(cljs.core.truth_(inst_12292))
{var statearr_12366_12412 = state_12362__$1;(statearr_12366_12412[1] = 5);
} else
{var statearr_12367_12413 = state_12362__$1;(statearr_12367_12413[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12363 === 5))
{var inst_12298 = cljs.core.deref.call(null,mults);var inst_12299 = cljs.core.vals.call(null,inst_12298);var inst_12300 = cljs.core.seq.call(null,inst_12299);var inst_12301 = inst_12300;var inst_12302 = null;var inst_12303 = 0;var inst_12304 = 0;var state_12362__$1 = (function (){var statearr_12368 = state_12362;(statearr_12368[8] = inst_12303);
(statearr_12368[9] = inst_12304);
(statearr_12368[10] = inst_12302);
(statearr_12368[11] = inst_12301);
return statearr_12368;
})();var statearr_12369_12414 = state_12362__$1;(statearr_12369_12414[2] = null);
(statearr_12369_12414[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12363 === 6))
{var inst_12341 = (state_12362[12]);var inst_12339 = (state_12362[13]);var inst_12291 = (state_12362[7]);var inst_12339__$1 = topic_fn.call(null,inst_12291);var inst_12340 = cljs.core.deref.call(null,mults);var inst_12341__$1 = cljs.core.get.call(null,inst_12340,inst_12339__$1);var state_12362__$1 = (function (){var statearr_12370 = state_12362;(statearr_12370[12] = inst_12341__$1);
(statearr_12370[13] = inst_12339__$1);
return statearr_12370;
})();if(cljs.core.truth_(inst_12341__$1))
{var statearr_12371_12415 = state_12362__$1;(statearr_12371_12415[1] = 19);
} else
{var statearr_12372_12416 = state_12362__$1;(statearr_12372_12416[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12363 === 7))
{var inst_12358 = (state_12362[2]);var state_12362__$1 = state_12362;var statearr_12373_12417 = state_12362__$1;(statearr_12373_12417[2] = inst_12358);
(statearr_12373_12417[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12363 === 8))
{var inst_12303 = (state_12362[8]);var inst_12304 = (state_12362[9]);var inst_12306 = (inst_12304 < inst_12303);var inst_12307 = inst_12306;var state_12362__$1 = state_12362;if(cljs.core.truth_(inst_12307))
{var statearr_12377_12418 = state_12362__$1;(statearr_12377_12418[1] = 10);
} else
{var statearr_12378_12419 = state_12362__$1;(statearr_12378_12419[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12363 === 9))
{var inst_12337 = (state_12362[2]);var state_12362__$1 = state_12362;var statearr_12379_12420 = state_12362__$1;(statearr_12379_12420[2] = inst_12337);
(statearr_12379_12420[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12363 === 10))
{var inst_12303 = (state_12362[8]);var inst_12304 = (state_12362[9]);var inst_12302 = (state_12362[10]);var inst_12301 = (state_12362[11]);var inst_12309 = cljs.core._nth.call(null,inst_12302,inst_12304);var inst_12310 = cljs.core.async.muxch_STAR_.call(null,inst_12309);var inst_12311 = cljs.core.async.close_BANG_.call(null,inst_12310);var inst_12312 = (inst_12304 + 1);var tmp12374 = inst_12303;var tmp12375 = inst_12302;var tmp12376 = inst_12301;var inst_12301__$1 = tmp12376;var inst_12302__$1 = tmp12375;var inst_12303__$1 = tmp12374;var inst_12304__$1 = inst_12312;var state_12362__$1 = (function (){var statearr_12380 = state_12362;(statearr_12380[8] = inst_12303__$1);
(statearr_12380[9] = inst_12304__$1);
(statearr_12380[14] = inst_12311);
(statearr_12380[10] = inst_12302__$1);
(statearr_12380[11] = inst_12301__$1);
return statearr_12380;
})();var statearr_12381_12421 = state_12362__$1;(statearr_12381_12421[2] = null);
(statearr_12381_12421[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12363 === 11))
{var inst_12301 = (state_12362[11]);var inst_12315 = (state_12362[15]);var inst_12315__$1 = cljs.core.seq.call(null,inst_12301);var state_12362__$1 = (function (){var statearr_12382 = state_12362;(statearr_12382[15] = inst_12315__$1);
return statearr_12382;
})();if(inst_12315__$1)
{var statearr_12383_12422 = state_12362__$1;(statearr_12383_12422[1] = 13);
} else
{var statearr_12384_12423 = state_12362__$1;(statearr_12384_12423[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12363 === 12))
{var inst_12335 = (state_12362[2]);var state_12362__$1 = state_12362;var statearr_12385_12424 = state_12362__$1;(statearr_12385_12424[2] = inst_12335);
(statearr_12385_12424[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12363 === 13))
{var inst_12315 = (state_12362[15]);var inst_12317 = cljs.core.chunked_seq_QMARK_.call(null,inst_12315);var state_12362__$1 = state_12362;if(inst_12317)
{var statearr_12386_12425 = state_12362__$1;(statearr_12386_12425[1] = 16);
} else
{var statearr_12387_12426 = state_12362__$1;(statearr_12387_12426[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12363 === 14))
{var state_12362__$1 = state_12362;var statearr_12388_12427 = state_12362__$1;(statearr_12388_12427[2] = null);
(statearr_12388_12427[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12363 === 15))
{var inst_12333 = (state_12362[2]);var state_12362__$1 = state_12362;var statearr_12389_12428 = state_12362__$1;(statearr_12389_12428[2] = inst_12333);
(statearr_12389_12428[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12363 === 16))
{var inst_12315 = (state_12362[15]);var inst_12319 = cljs.core.chunk_first.call(null,inst_12315);var inst_12320 = cljs.core.chunk_rest.call(null,inst_12315);var inst_12321 = cljs.core.count.call(null,inst_12319);var inst_12301 = inst_12320;var inst_12302 = inst_12319;var inst_12303 = inst_12321;var inst_12304 = 0;var state_12362__$1 = (function (){var statearr_12390 = state_12362;(statearr_12390[8] = inst_12303);
(statearr_12390[9] = inst_12304);
(statearr_12390[10] = inst_12302);
(statearr_12390[11] = inst_12301);
return statearr_12390;
})();var statearr_12391_12429 = state_12362__$1;(statearr_12391_12429[2] = null);
(statearr_12391_12429[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12363 === 17))
{var inst_12315 = (state_12362[15]);var inst_12324 = cljs.core.first.call(null,inst_12315);var inst_12325 = cljs.core.async.muxch_STAR_.call(null,inst_12324);var inst_12326 = cljs.core.async.close_BANG_.call(null,inst_12325);var inst_12327 = cljs.core.next.call(null,inst_12315);var inst_12301 = inst_12327;var inst_12302 = null;var inst_12303 = 0;var inst_12304 = 0;var state_12362__$1 = (function (){var statearr_12392 = state_12362;(statearr_12392[8] = inst_12303);
(statearr_12392[9] = inst_12304);
(statearr_12392[10] = inst_12302);
(statearr_12392[11] = inst_12301);
(statearr_12392[16] = inst_12326);
return statearr_12392;
})();var statearr_12393_12430 = state_12362__$1;(statearr_12393_12430[2] = null);
(statearr_12393_12430[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12363 === 18))
{var inst_12330 = (state_12362[2]);var state_12362__$1 = state_12362;var statearr_12394_12431 = state_12362__$1;(statearr_12394_12431[2] = inst_12330);
(statearr_12394_12431[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12363 === 19))
{var state_12362__$1 = state_12362;var statearr_12395_12432 = state_12362__$1;(statearr_12395_12432[2] = null);
(statearr_12395_12432[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12363 === 20))
{var state_12362__$1 = state_12362;var statearr_12396_12433 = state_12362__$1;(statearr_12396_12433[2] = null);
(statearr_12396_12433[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12363 === 21))
{var inst_12355 = (state_12362[2]);var state_12362__$1 = (function (){var statearr_12397 = state_12362;(statearr_12397[17] = inst_12355);
return statearr_12397;
})();var statearr_12398_12434 = state_12362__$1;(statearr_12398_12434[2] = null);
(statearr_12398_12434[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12363 === 22))
{var inst_12352 = (state_12362[2]);var state_12362__$1 = state_12362;var statearr_12399_12435 = state_12362__$1;(statearr_12399_12435[2] = inst_12352);
(statearr_12399_12435[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12363 === 23))
{var inst_12339 = (state_12362[13]);var inst_12343 = (state_12362[2]);var inst_12344 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12339);var state_12362__$1 = (function (){var statearr_12400 = state_12362;(statearr_12400[18] = inst_12343);
return statearr_12400;
})();var statearr_12401_12436 = state_12362__$1;(statearr_12401_12436[2] = inst_12344);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12362__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12363 === 24))
{var inst_12341 = (state_12362[12]);var inst_12291 = (state_12362[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12362,23,Object,null,22);var inst_12348 = cljs.core.async.muxch_STAR_.call(null,inst_12341);var state_12362__$1 = state_12362;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12362__$1,25,inst_12348,inst_12291);
} else
{if((state_val_12363 === 25))
{var inst_12350 = (state_12362[2]);var state_12362__$1 = state_12362;var statearr_12402_12437 = state_12362__$1;(statearr_12402_12437[2] = inst_12350);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12362__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6232__auto___12410,mults,ensure_mult,p))
;return ((function (switch__6217__auto__,c__6232__auto___12410,mults,ensure_mult,p){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_12406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12406[0] = state_machine__6218__auto__);
(statearr_12406[1] = 1);
return statearr_12406;
});
var state_machine__6218__auto____1 = (function (state_12362){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_12362);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e12407){if((e12407 instanceof Object))
{var ex__6221__auto__ = e12407;var statearr_12408_12438 = state_12362;(statearr_12408_12438[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12362);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12407;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12439 = state_12362;
state_12362 = G__12439;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_12362){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_12362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto___12410,mults,ensure_mult,p))
})();var state__6234__auto__ = (function (){var statearr_12409 = f__6233__auto__.call(null);(statearr_12409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___12410);
return statearr_12409;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto___12410,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6232__auto___12576 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto___12576,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto___12576,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12546){var state_val_12547 = (state_12546[1]);if((state_val_12547 === 1))
{var state_12546__$1 = state_12546;var statearr_12548_12577 = state_12546__$1;(statearr_12548_12577[2] = null);
(statearr_12548_12577[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12547 === 2))
{var inst_12509 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12510 = 0;var state_12546__$1 = (function (){var statearr_12549 = state_12546;(statearr_12549[7] = inst_12510);
(statearr_12549[8] = inst_12509);
return statearr_12549;
})();var statearr_12550_12578 = state_12546__$1;(statearr_12550_12578[2] = null);
(statearr_12550_12578[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12547 === 3))
{var inst_12544 = (state_12546[2]);var state_12546__$1 = state_12546;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12546__$1,inst_12544);
} else
{if((state_val_12547 === 4))
{var inst_12510 = (state_12546[7]);var inst_12512 = (inst_12510 < cnt);var state_12546__$1 = state_12546;if(cljs.core.truth_(inst_12512))
{var statearr_12551_12579 = state_12546__$1;(statearr_12551_12579[1] = 6);
} else
{var statearr_12552_12580 = state_12546__$1;(statearr_12552_12580[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12547 === 5))
{var inst_12530 = (state_12546[2]);var state_12546__$1 = (function (){var statearr_12553 = state_12546;(statearr_12553[9] = inst_12530);
return statearr_12553;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12546__$1,12,dchan);
} else
{if((state_val_12547 === 6))
{var state_12546__$1 = state_12546;var statearr_12554_12581 = state_12546__$1;(statearr_12554_12581[2] = null);
(statearr_12554_12581[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12547 === 7))
{var state_12546__$1 = state_12546;var statearr_12555_12582 = state_12546__$1;(statearr_12555_12582[2] = null);
(statearr_12555_12582[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12547 === 8))
{var inst_12528 = (state_12546[2]);var state_12546__$1 = state_12546;var statearr_12556_12583 = state_12546__$1;(statearr_12556_12583[2] = inst_12528);
(statearr_12556_12583[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12547 === 9))
{var inst_12510 = (state_12546[7]);var inst_12523 = (state_12546[2]);var inst_12524 = (inst_12510 + 1);var inst_12510__$1 = inst_12524;var state_12546__$1 = (function (){var statearr_12557 = state_12546;(statearr_12557[7] = inst_12510__$1);
(statearr_12557[10] = inst_12523);
return statearr_12557;
})();var statearr_12558_12584 = state_12546__$1;(statearr_12558_12584[2] = null);
(statearr_12558_12584[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12547 === 10))
{var inst_12514 = (state_12546[2]);var inst_12515 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12546__$1 = (function (){var statearr_12559 = state_12546;(statearr_12559[11] = inst_12514);
return statearr_12559;
})();var statearr_12560_12585 = state_12546__$1;(statearr_12560_12585[2] = inst_12515);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12546__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12547 === 11))
{var inst_12510 = (state_12546[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12546,10,Object,null,9);var inst_12519 = chs__$1.call(null,inst_12510);var inst_12520 = done.call(null,inst_12510);var inst_12521 = cljs.core.async.take_BANG_.call(null,inst_12519,inst_12520);var state_12546__$1 = state_12546;var statearr_12561_12586 = state_12546__$1;(statearr_12561_12586[2] = inst_12521);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12546__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12547 === 12))
{var inst_12532 = (state_12546[12]);var inst_12532__$1 = (state_12546[2]);var inst_12533 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12532__$1);var state_12546__$1 = (function (){var statearr_12562 = state_12546;(statearr_12562[12] = inst_12532__$1);
return statearr_12562;
})();if(cljs.core.truth_(inst_12533))
{var statearr_12563_12587 = state_12546__$1;(statearr_12563_12587[1] = 13);
} else
{var statearr_12564_12588 = state_12546__$1;(statearr_12564_12588[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12547 === 13))
{var inst_12535 = cljs.core.async.close_BANG_.call(null,out);var state_12546__$1 = state_12546;var statearr_12565_12589 = state_12546__$1;(statearr_12565_12589[2] = inst_12535);
(statearr_12565_12589[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12547 === 14))
{var inst_12532 = (state_12546[12]);var inst_12537 = cljs.core.apply.call(null,f,inst_12532);var state_12546__$1 = state_12546;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12546__$1,16,out,inst_12537);
} else
{if((state_val_12547 === 15))
{var inst_12542 = (state_12546[2]);var state_12546__$1 = state_12546;var statearr_12566_12590 = state_12546__$1;(statearr_12566_12590[2] = inst_12542);
(statearr_12566_12590[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12547 === 16))
{var inst_12539 = (state_12546[2]);var state_12546__$1 = (function (){var statearr_12567 = state_12546;(statearr_12567[13] = inst_12539);
return statearr_12567;
})();var statearr_12568_12591 = state_12546__$1;(statearr_12568_12591[2] = null);
(statearr_12568_12591[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6232__auto___12576,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6217__auto__,c__6232__auto___12576,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_12572 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12572[0] = state_machine__6218__auto__);
(statearr_12572[1] = 1);
return statearr_12572;
});
var state_machine__6218__auto____1 = (function (state_12546){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_12546);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e12573){if((e12573 instanceof Object))
{var ex__6221__auto__ = e12573;var statearr_12574_12592 = state_12546;(statearr_12574_12592[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12546);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12573;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12593 = state_12546;
state_12546 = G__12593;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_12546){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_12546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto___12576,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6234__auto__ = (function (){var statearr_12575 = f__6233__auto__.call(null);(statearr_12575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___12576);
return statearr_12575;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto___12576,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6232__auto___12701 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto___12701,out){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto___12701,out){
return (function (state_12677){var state_val_12678 = (state_12677[1]);if((state_val_12678 === 1))
{var inst_12648 = cljs.core.vec.call(null,chs);var inst_12649 = inst_12648;var state_12677__$1 = (function (){var statearr_12679 = state_12677;(statearr_12679[7] = inst_12649);
return statearr_12679;
})();var statearr_12680_12702 = state_12677__$1;(statearr_12680_12702[2] = null);
(statearr_12680_12702[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12678 === 2))
{var inst_12649 = (state_12677[7]);var inst_12651 = cljs.core.count.call(null,inst_12649);var inst_12652 = (inst_12651 > 0);var state_12677__$1 = state_12677;if(cljs.core.truth_(inst_12652))
{var statearr_12681_12703 = state_12677__$1;(statearr_12681_12703[1] = 4);
} else
{var statearr_12682_12704 = state_12677__$1;(statearr_12682_12704[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12678 === 3))
{var inst_12675 = (state_12677[2]);var state_12677__$1 = state_12677;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12677__$1,inst_12675);
} else
{if((state_val_12678 === 4))
{var inst_12649 = (state_12677[7]);var state_12677__$1 = state_12677;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12677__$1,7,inst_12649);
} else
{if((state_val_12678 === 5))
{var inst_12671 = cljs.core.async.close_BANG_.call(null,out);var state_12677__$1 = state_12677;var statearr_12683_12705 = state_12677__$1;(statearr_12683_12705[2] = inst_12671);
(statearr_12683_12705[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12678 === 6))
{var inst_12673 = (state_12677[2]);var state_12677__$1 = state_12677;var statearr_12684_12706 = state_12677__$1;(statearr_12684_12706[2] = inst_12673);
(statearr_12684_12706[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12678 === 7))
{var inst_12656 = (state_12677[8]);var inst_12657 = (state_12677[9]);var inst_12656__$1 = (state_12677[2]);var inst_12657__$1 = cljs.core.nth.call(null,inst_12656__$1,0,null);var inst_12658 = cljs.core.nth.call(null,inst_12656__$1,1,null);var inst_12659 = (inst_12657__$1 == null);var state_12677__$1 = (function (){var statearr_12685 = state_12677;(statearr_12685[8] = inst_12656__$1);
(statearr_12685[9] = inst_12657__$1);
(statearr_12685[10] = inst_12658);
return statearr_12685;
})();if(cljs.core.truth_(inst_12659))
{var statearr_12686_12707 = state_12677__$1;(statearr_12686_12707[1] = 8);
} else
{var statearr_12687_12708 = state_12677__$1;(statearr_12687_12708[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12678 === 8))
{var inst_12649 = (state_12677[7]);var inst_12656 = (state_12677[8]);var inst_12657 = (state_12677[9]);var inst_12658 = (state_12677[10]);var inst_12661 = (function (){var c = inst_12658;var v = inst_12657;var vec__12654 = inst_12656;var cs = inst_12649;return ((function (c,v,vec__12654,cs,inst_12649,inst_12656,inst_12657,inst_12658,state_val_12678,c__6232__auto___12701,out){
return (function (p1__12594_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12594_SHARP_);
});
;})(c,v,vec__12654,cs,inst_12649,inst_12656,inst_12657,inst_12658,state_val_12678,c__6232__auto___12701,out))
})();var inst_12662 = cljs.core.filterv.call(null,inst_12661,inst_12649);var inst_12649__$1 = inst_12662;var state_12677__$1 = (function (){var statearr_12688 = state_12677;(statearr_12688[7] = inst_12649__$1);
return statearr_12688;
})();var statearr_12689_12709 = state_12677__$1;(statearr_12689_12709[2] = null);
(statearr_12689_12709[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12678 === 9))
{var inst_12657 = (state_12677[9]);var state_12677__$1 = state_12677;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12677__$1,11,out,inst_12657);
} else
{if((state_val_12678 === 10))
{var inst_12669 = (state_12677[2]);var state_12677__$1 = state_12677;var statearr_12691_12710 = state_12677__$1;(statearr_12691_12710[2] = inst_12669);
(statearr_12691_12710[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12678 === 11))
{var inst_12649 = (state_12677[7]);var inst_12666 = (state_12677[2]);var tmp12690 = inst_12649;var inst_12649__$1 = tmp12690;var state_12677__$1 = (function (){var statearr_12692 = state_12677;(statearr_12692[11] = inst_12666);
(statearr_12692[7] = inst_12649__$1);
return statearr_12692;
})();var statearr_12693_12711 = state_12677__$1;(statearr_12693_12711[2] = null);
(statearr_12693_12711[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6232__auto___12701,out))
;return ((function (switch__6217__auto__,c__6232__auto___12701,out){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_12697 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12697[0] = state_machine__6218__auto__);
(statearr_12697[1] = 1);
return statearr_12697;
});
var state_machine__6218__auto____1 = (function (state_12677){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_12677);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e12698){if((e12698 instanceof Object))
{var ex__6221__auto__ = e12698;var statearr_12699_12712 = state_12677;(statearr_12699_12712[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12677);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12698;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12713 = state_12677;
state_12677 = G__12713;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_12677){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_12677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto___12701,out))
})();var state__6234__auto__ = (function (){var statearr_12700 = f__6233__auto__.call(null);(statearr_12700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___12701);
return statearr_12700;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto___12701,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6232__auto___12806 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto___12806,out){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto___12806,out){
return (function (state_12783){var state_val_12784 = (state_12783[1]);if((state_val_12784 === 1))
{var inst_12760 = 0;var state_12783__$1 = (function (){var statearr_12785 = state_12783;(statearr_12785[7] = inst_12760);
return statearr_12785;
})();var statearr_12786_12807 = state_12783__$1;(statearr_12786_12807[2] = null);
(statearr_12786_12807[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12784 === 2))
{var inst_12760 = (state_12783[7]);var inst_12762 = (inst_12760 < n);var state_12783__$1 = state_12783;if(cljs.core.truth_(inst_12762))
{var statearr_12787_12808 = state_12783__$1;(statearr_12787_12808[1] = 4);
} else
{var statearr_12788_12809 = state_12783__$1;(statearr_12788_12809[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12784 === 3))
{var inst_12780 = (state_12783[2]);var inst_12781 = cljs.core.async.close_BANG_.call(null,out);var state_12783__$1 = (function (){var statearr_12789 = state_12783;(statearr_12789[8] = inst_12780);
return statearr_12789;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12783__$1,inst_12781);
} else
{if((state_val_12784 === 4))
{var state_12783__$1 = state_12783;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12783__$1,7,ch);
} else
{if((state_val_12784 === 5))
{var state_12783__$1 = state_12783;var statearr_12790_12810 = state_12783__$1;(statearr_12790_12810[2] = null);
(statearr_12790_12810[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12784 === 6))
{var inst_12778 = (state_12783[2]);var state_12783__$1 = state_12783;var statearr_12791_12811 = state_12783__$1;(statearr_12791_12811[2] = inst_12778);
(statearr_12791_12811[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12784 === 7))
{var inst_12765 = (state_12783[9]);var inst_12765__$1 = (state_12783[2]);var inst_12766 = (inst_12765__$1 == null);var inst_12767 = cljs.core.not.call(null,inst_12766);var state_12783__$1 = (function (){var statearr_12792 = state_12783;(statearr_12792[9] = inst_12765__$1);
return statearr_12792;
})();if(inst_12767)
{var statearr_12793_12812 = state_12783__$1;(statearr_12793_12812[1] = 8);
} else
{var statearr_12794_12813 = state_12783__$1;(statearr_12794_12813[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12784 === 8))
{var inst_12765 = (state_12783[9]);var state_12783__$1 = state_12783;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12783__$1,11,out,inst_12765);
} else
{if((state_val_12784 === 9))
{var state_12783__$1 = state_12783;var statearr_12795_12814 = state_12783__$1;(statearr_12795_12814[2] = null);
(statearr_12795_12814[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12784 === 10))
{var inst_12775 = (state_12783[2]);var state_12783__$1 = state_12783;var statearr_12796_12815 = state_12783__$1;(statearr_12796_12815[2] = inst_12775);
(statearr_12796_12815[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12784 === 11))
{var inst_12760 = (state_12783[7]);var inst_12770 = (state_12783[2]);var inst_12771 = (inst_12760 + 1);var inst_12760__$1 = inst_12771;var state_12783__$1 = (function (){var statearr_12797 = state_12783;(statearr_12797[7] = inst_12760__$1);
(statearr_12797[10] = inst_12770);
return statearr_12797;
})();var statearr_12798_12816 = state_12783__$1;(statearr_12798_12816[2] = null);
(statearr_12798_12816[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6232__auto___12806,out))
;return ((function (switch__6217__auto__,c__6232__auto___12806,out){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_12802 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12802[0] = state_machine__6218__auto__);
(statearr_12802[1] = 1);
return statearr_12802;
});
var state_machine__6218__auto____1 = (function (state_12783){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_12783);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e12803){if((e12803 instanceof Object))
{var ex__6221__auto__ = e12803;var statearr_12804_12817 = state_12783;(statearr_12804_12817[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12783);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12803;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12818 = state_12783;
state_12783 = G__12818;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_12783){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_12783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto___12806,out))
})();var state__6234__auto__ = (function (){var statearr_12805 = f__6233__auto__.call(null);(statearr_12805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___12806);
return statearr_12805;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto___12806,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6232__auto___12915 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto___12915,out){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto___12915,out){
return (function (state_12890){var state_val_12891 = (state_12890[1]);if((state_val_12891 === 1))
{var inst_12867 = null;var state_12890__$1 = (function (){var statearr_12892 = state_12890;(statearr_12892[7] = inst_12867);
return statearr_12892;
})();var statearr_12893_12916 = state_12890__$1;(statearr_12893_12916[2] = null);
(statearr_12893_12916[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12891 === 2))
{var state_12890__$1 = state_12890;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12890__$1,4,ch);
} else
{if((state_val_12891 === 3))
{var inst_12887 = (state_12890[2]);var inst_12888 = cljs.core.async.close_BANG_.call(null,out);var state_12890__$1 = (function (){var statearr_12894 = state_12890;(statearr_12894[8] = inst_12887);
return statearr_12894;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12890__$1,inst_12888);
} else
{if((state_val_12891 === 4))
{var inst_12870 = (state_12890[9]);var inst_12870__$1 = (state_12890[2]);var inst_12871 = (inst_12870__$1 == null);var inst_12872 = cljs.core.not.call(null,inst_12871);var state_12890__$1 = (function (){var statearr_12895 = state_12890;(statearr_12895[9] = inst_12870__$1);
return statearr_12895;
})();if(inst_12872)
{var statearr_12896_12917 = state_12890__$1;(statearr_12896_12917[1] = 5);
} else
{var statearr_12897_12918 = state_12890__$1;(statearr_12897_12918[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12891 === 5))
{var inst_12867 = (state_12890[7]);var inst_12870 = (state_12890[9]);var inst_12874 = cljs.core._EQ_.call(null,inst_12870,inst_12867);var state_12890__$1 = state_12890;if(inst_12874)
{var statearr_12898_12919 = state_12890__$1;(statearr_12898_12919[1] = 8);
} else
{var statearr_12899_12920 = state_12890__$1;(statearr_12899_12920[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12891 === 6))
{var state_12890__$1 = state_12890;var statearr_12901_12921 = state_12890__$1;(statearr_12901_12921[2] = null);
(statearr_12901_12921[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12891 === 7))
{var inst_12885 = (state_12890[2]);var state_12890__$1 = state_12890;var statearr_12902_12922 = state_12890__$1;(statearr_12902_12922[2] = inst_12885);
(statearr_12902_12922[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12891 === 8))
{var inst_12867 = (state_12890[7]);var tmp12900 = inst_12867;var inst_12867__$1 = tmp12900;var state_12890__$1 = (function (){var statearr_12903 = state_12890;(statearr_12903[7] = inst_12867__$1);
return statearr_12903;
})();var statearr_12904_12923 = state_12890__$1;(statearr_12904_12923[2] = null);
(statearr_12904_12923[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12891 === 9))
{var inst_12870 = (state_12890[9]);var state_12890__$1 = state_12890;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12890__$1,11,out,inst_12870);
} else
{if((state_val_12891 === 10))
{var inst_12882 = (state_12890[2]);var state_12890__$1 = state_12890;var statearr_12905_12924 = state_12890__$1;(statearr_12905_12924[2] = inst_12882);
(statearr_12905_12924[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12891 === 11))
{var inst_12870 = (state_12890[9]);var inst_12879 = (state_12890[2]);var inst_12867 = inst_12870;var state_12890__$1 = (function (){var statearr_12906 = state_12890;(statearr_12906[10] = inst_12879);
(statearr_12906[7] = inst_12867);
return statearr_12906;
})();var statearr_12907_12925 = state_12890__$1;(statearr_12907_12925[2] = null);
(statearr_12907_12925[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6232__auto___12915,out))
;return ((function (switch__6217__auto__,c__6232__auto___12915,out){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_12911 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12911[0] = state_machine__6218__auto__);
(statearr_12911[1] = 1);
return statearr_12911;
});
var state_machine__6218__auto____1 = (function (state_12890){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_12890);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e12912){if((e12912 instanceof Object))
{var ex__6221__auto__ = e12912;var statearr_12913_12926 = state_12890;(statearr_12913_12926[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12890);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12912;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12927 = state_12890;
state_12890 = G__12927;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_12890){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_12890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto___12915,out))
})();var state__6234__auto__ = (function (){var statearr_12914 = f__6233__auto__.call(null);(statearr_12914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___12915);
return statearr_12914;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto___12915,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6232__auto___13062 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto___13062,out){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto___13062,out){
return (function (state_13032){var state_val_13033 = (state_13032[1]);if((state_val_13033 === 1))
{var inst_12995 = (new Array(n));var inst_12996 = inst_12995;var inst_12997 = 0;var state_13032__$1 = (function (){var statearr_13034 = state_13032;(statearr_13034[7] = inst_12996);
(statearr_13034[8] = inst_12997);
return statearr_13034;
})();var statearr_13035_13063 = state_13032__$1;(statearr_13035_13063[2] = null);
(statearr_13035_13063[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13033 === 2))
{var state_13032__$1 = state_13032;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13032__$1,4,ch);
} else
{if((state_val_13033 === 3))
{var inst_13030 = (state_13032[2]);var state_13032__$1 = state_13032;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13032__$1,inst_13030);
} else
{if((state_val_13033 === 4))
{var inst_13000 = (state_13032[9]);var inst_13000__$1 = (state_13032[2]);var inst_13001 = (inst_13000__$1 == null);var inst_13002 = cljs.core.not.call(null,inst_13001);var state_13032__$1 = (function (){var statearr_13036 = state_13032;(statearr_13036[9] = inst_13000__$1);
return statearr_13036;
})();if(inst_13002)
{var statearr_13037_13064 = state_13032__$1;(statearr_13037_13064[1] = 5);
} else
{var statearr_13038_13065 = state_13032__$1;(statearr_13038_13065[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13033 === 5))
{var inst_13005 = (state_13032[10]);var inst_13000 = (state_13032[9]);var inst_12996 = (state_13032[7]);var inst_12997 = (state_13032[8]);var inst_13004 = (inst_12996[inst_12997] = inst_13000);var inst_13005__$1 = (inst_12997 + 1);var inst_13006 = (inst_13005__$1 < n);var state_13032__$1 = (function (){var statearr_13039 = state_13032;(statearr_13039[10] = inst_13005__$1);
(statearr_13039[11] = inst_13004);
return statearr_13039;
})();if(cljs.core.truth_(inst_13006))
{var statearr_13040_13066 = state_13032__$1;(statearr_13040_13066[1] = 8);
} else
{var statearr_13041_13067 = state_13032__$1;(statearr_13041_13067[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13033 === 6))
{var inst_12997 = (state_13032[8]);var inst_13018 = (inst_12997 > 0);var state_13032__$1 = state_13032;if(cljs.core.truth_(inst_13018))
{var statearr_13043_13068 = state_13032__$1;(statearr_13043_13068[1] = 12);
} else
{var statearr_13044_13069 = state_13032__$1;(statearr_13044_13069[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13033 === 7))
{var inst_13028 = (state_13032[2]);var state_13032__$1 = state_13032;var statearr_13045_13070 = state_13032__$1;(statearr_13045_13070[2] = inst_13028);
(statearr_13045_13070[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13033 === 8))
{var inst_13005 = (state_13032[10]);var inst_12996 = (state_13032[7]);var tmp13042 = inst_12996;var inst_12996__$1 = tmp13042;var inst_12997 = inst_13005;var state_13032__$1 = (function (){var statearr_13046 = state_13032;(statearr_13046[7] = inst_12996__$1);
(statearr_13046[8] = inst_12997);
return statearr_13046;
})();var statearr_13047_13071 = state_13032__$1;(statearr_13047_13071[2] = null);
(statearr_13047_13071[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13033 === 9))
{var inst_12996 = (state_13032[7]);var inst_13010 = cljs.core.vec.call(null,inst_12996);var state_13032__$1 = state_13032;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13032__$1,11,out,inst_13010);
} else
{if((state_val_13033 === 10))
{var inst_13016 = (state_13032[2]);var state_13032__$1 = state_13032;var statearr_13048_13072 = state_13032__$1;(statearr_13048_13072[2] = inst_13016);
(statearr_13048_13072[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13033 === 11))
{var inst_13012 = (state_13032[2]);var inst_13013 = (new Array(n));var inst_12996 = inst_13013;var inst_12997 = 0;var state_13032__$1 = (function (){var statearr_13049 = state_13032;(statearr_13049[12] = inst_13012);
(statearr_13049[7] = inst_12996);
(statearr_13049[8] = inst_12997);
return statearr_13049;
})();var statearr_13050_13073 = state_13032__$1;(statearr_13050_13073[2] = null);
(statearr_13050_13073[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13033 === 12))
{var inst_12996 = (state_13032[7]);var inst_13020 = cljs.core.vec.call(null,inst_12996);var state_13032__$1 = state_13032;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13032__$1,15,out,inst_13020);
} else
{if((state_val_13033 === 13))
{var state_13032__$1 = state_13032;var statearr_13051_13074 = state_13032__$1;(statearr_13051_13074[2] = null);
(statearr_13051_13074[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13033 === 14))
{var inst_13025 = (state_13032[2]);var inst_13026 = cljs.core.async.close_BANG_.call(null,out);var state_13032__$1 = (function (){var statearr_13052 = state_13032;(statearr_13052[13] = inst_13025);
return statearr_13052;
})();var statearr_13053_13075 = state_13032__$1;(statearr_13053_13075[2] = inst_13026);
(statearr_13053_13075[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13033 === 15))
{var inst_13022 = (state_13032[2]);var state_13032__$1 = state_13032;var statearr_13054_13076 = state_13032__$1;(statearr_13054_13076[2] = inst_13022);
(statearr_13054_13076[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6232__auto___13062,out))
;return ((function (switch__6217__auto__,c__6232__auto___13062,out){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_13058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13058[0] = state_machine__6218__auto__);
(statearr_13058[1] = 1);
return statearr_13058;
});
var state_machine__6218__auto____1 = (function (state_13032){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_13032);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e13059){if((e13059 instanceof Object))
{var ex__6221__auto__ = e13059;var statearr_13060_13077 = state_13032;(statearr_13060_13077[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13032);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13059;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13078 = state_13032;
state_13032 = G__13078;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_13032){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_13032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto___13062,out))
})();var state__6234__auto__ = (function (){var statearr_13061 = f__6233__auto__.call(null);(statearr_13061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___13062);
return statearr_13061;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto___13062,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6232__auto___13221 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6232__auto___13221,out){
return (function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = ((function (c__6232__auto___13221,out){
return (function (state_13191){var state_val_13192 = (state_13191[1]);if((state_val_13192 === 1))
{var inst_13150 = [];var inst_13151 = inst_13150;var inst_13152 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13191__$1 = (function (){var statearr_13193 = state_13191;(statearr_13193[7] = inst_13152);
(statearr_13193[8] = inst_13151);
return statearr_13193;
})();var statearr_13194_13222 = state_13191__$1;(statearr_13194_13222[2] = null);
(statearr_13194_13222[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13192 === 2))
{var state_13191__$1 = state_13191;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13191__$1,4,ch);
} else
{if((state_val_13192 === 3))
{var inst_13189 = (state_13191[2]);var state_13191__$1 = state_13191;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13191__$1,inst_13189);
} else
{if((state_val_13192 === 4))
{var inst_13155 = (state_13191[9]);var inst_13155__$1 = (state_13191[2]);var inst_13156 = (inst_13155__$1 == null);var inst_13157 = cljs.core.not.call(null,inst_13156);var state_13191__$1 = (function (){var statearr_13195 = state_13191;(statearr_13195[9] = inst_13155__$1);
return statearr_13195;
})();if(inst_13157)
{var statearr_13196_13223 = state_13191__$1;(statearr_13196_13223[1] = 5);
} else
{var statearr_13197_13224 = state_13191__$1;(statearr_13197_13224[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13192 === 5))
{var inst_13155 = (state_13191[9]);var inst_13152 = (state_13191[7]);var inst_13159 = (state_13191[10]);var inst_13159__$1 = f.call(null,inst_13155);var inst_13160 = cljs.core._EQ_.call(null,inst_13159__$1,inst_13152);var inst_13161 = cljs.core.keyword_identical_QMARK_.call(null,inst_13152,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13162 = (inst_13160) || (inst_13161);var state_13191__$1 = (function (){var statearr_13198 = state_13191;(statearr_13198[10] = inst_13159__$1);
return statearr_13198;
})();if(cljs.core.truth_(inst_13162))
{var statearr_13199_13225 = state_13191__$1;(statearr_13199_13225[1] = 8);
} else
{var statearr_13200_13226 = state_13191__$1;(statearr_13200_13226[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13192 === 6))
{var inst_13151 = (state_13191[8]);var inst_13176 = inst_13151.length;var inst_13177 = (inst_13176 > 0);var state_13191__$1 = state_13191;if(cljs.core.truth_(inst_13177))
{var statearr_13202_13227 = state_13191__$1;(statearr_13202_13227[1] = 12);
} else
{var statearr_13203_13228 = state_13191__$1;(statearr_13203_13228[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13192 === 7))
{var inst_13187 = (state_13191[2]);var state_13191__$1 = state_13191;var statearr_13204_13229 = state_13191__$1;(statearr_13204_13229[2] = inst_13187);
(statearr_13204_13229[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13192 === 8))
{var inst_13155 = (state_13191[9]);var inst_13151 = (state_13191[8]);var inst_13159 = (state_13191[10]);var inst_13164 = inst_13151.push(inst_13155);var tmp13201 = inst_13151;var inst_13151__$1 = tmp13201;var inst_13152 = inst_13159;var state_13191__$1 = (function (){var statearr_13205 = state_13191;(statearr_13205[7] = inst_13152);
(statearr_13205[8] = inst_13151__$1);
(statearr_13205[11] = inst_13164);
return statearr_13205;
})();var statearr_13206_13230 = state_13191__$1;(statearr_13206_13230[2] = null);
(statearr_13206_13230[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13192 === 9))
{var inst_13151 = (state_13191[8]);var inst_13167 = cljs.core.vec.call(null,inst_13151);var state_13191__$1 = state_13191;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13191__$1,11,out,inst_13167);
} else
{if((state_val_13192 === 10))
{var inst_13174 = (state_13191[2]);var state_13191__$1 = state_13191;var statearr_13207_13231 = state_13191__$1;(statearr_13207_13231[2] = inst_13174);
(statearr_13207_13231[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13192 === 11))
{var inst_13155 = (state_13191[9]);var inst_13159 = (state_13191[10]);var inst_13169 = (state_13191[2]);var inst_13170 = [];var inst_13171 = inst_13170.push(inst_13155);var inst_13151 = inst_13170;var inst_13152 = inst_13159;var state_13191__$1 = (function (){var statearr_13208 = state_13191;(statearr_13208[12] = inst_13169);
(statearr_13208[7] = inst_13152);
(statearr_13208[8] = inst_13151);
(statearr_13208[13] = inst_13171);
return statearr_13208;
})();var statearr_13209_13232 = state_13191__$1;(statearr_13209_13232[2] = null);
(statearr_13209_13232[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13192 === 12))
{var inst_13151 = (state_13191[8]);var inst_13179 = cljs.core.vec.call(null,inst_13151);var state_13191__$1 = state_13191;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13191__$1,15,out,inst_13179);
} else
{if((state_val_13192 === 13))
{var state_13191__$1 = state_13191;var statearr_13210_13233 = state_13191__$1;(statearr_13210_13233[2] = null);
(statearr_13210_13233[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13192 === 14))
{var inst_13184 = (state_13191[2]);var inst_13185 = cljs.core.async.close_BANG_.call(null,out);var state_13191__$1 = (function (){var statearr_13211 = state_13191;(statearr_13211[14] = inst_13184);
return statearr_13211;
})();var statearr_13212_13234 = state_13191__$1;(statearr_13212_13234[2] = inst_13185);
(statearr_13212_13234[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13192 === 15))
{var inst_13181 = (state_13191[2]);var state_13191__$1 = state_13191;var statearr_13213_13235 = state_13191__$1;(statearr_13213_13235[2] = inst_13181);
(statearr_13213_13235[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6232__auto___13221,out))
;return ((function (switch__6217__auto__,c__6232__auto___13221,out){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_13217 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13217[0] = state_machine__6218__auto__);
(statearr_13217[1] = 1);
return statearr_13217;
});
var state_machine__6218__auto____1 = (function (state_13191){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_13191);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e13218){if((e13218 instanceof Object))
{var ex__6221__auto__ = e13218;var statearr_13219_13236 = state_13191;(statearr_13219_13236[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13191);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13218;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13237 = state_13191;
state_13191 = G__13237;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_13191){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_13191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__,c__6232__auto___13221,out))
})();var state__6234__auto__ = (function (){var statearr_13220 = f__6233__auto__.call(null);(statearr_13220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___13221);
return statearr_13220;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
});})(c__6232__auto___13221,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
