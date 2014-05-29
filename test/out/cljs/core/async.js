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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10789 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10789 = (function (f,fn_handler,meta10790){
this.f = f;
this.fn_handler = fn_handler;
this.meta10790 = meta10790;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10789.cljs$lang$type = true;
cljs.core.async.t10789.cljs$lang$ctorStr = "cljs.core.async/t10789";
cljs.core.async.t10789.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t10789");
});
cljs.core.async.t10789.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10789.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10789.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10791){var self__ = this;
var _10791__$1 = this;return self__.meta10790;
});
cljs.core.async.t10789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10791,meta10790__$1){var self__ = this;
var _10791__$1 = this;return (new cljs.core.async.t10789(self__.f,self__.fn_handler,meta10790__$1));
});
cljs.core.async.__GT_t10789 = (function __GT_t10789(f__$1,fn_handler__$1,meta10790){return (new cljs.core.async.t10789(f__$1,fn_handler__$1,meta10790));
});
}
return (new cljs.core.async.t10789(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10793 = buff;if(G__10793)
{var bit__4128__auto__ = null;if(cljs.core.truth_((function (){var or__3478__auto__ = bit__4128__auto__;if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return G__10793.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10793.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10793);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10793);
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
{var val_10794 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10794);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_10794,ret){
return (function (){return fn1.call(null,val_10794);
});})(val_10794,ret))
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3466__auto__ = ret;if(cljs.core.truth_(and__3466__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3466__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4326__auto___10795 = n;var x_10796 = 0;while(true){
if((x_10796 < n__4326__auto___10795))
{(a[x_10796] = 0);
{
var G__10797 = (x_10796 + 1);
x_10796 = G__10797;
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
var G__10798 = (i + 1);
i = G__10798;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10802 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10802 = (function (flag,alt_flag,meta10803){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10803 = meta10803;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10802.cljs$lang$type = true;
cljs.core.async.t10802.cljs$lang$ctorStr = "cljs.core.async/t10802";
cljs.core.async.t10802.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t10802");
});})(flag))
;
cljs.core.async.t10802.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10802.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t10802.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10802.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10804){var self__ = this;
var _10804__$1 = this;return self__.meta10803;
});})(flag))
;
cljs.core.async.t10802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10804,meta10803__$1){var self__ = this;
var _10804__$1 = this;return (new cljs.core.async.t10802(self__.flag,self__.alt_flag,meta10803__$1));
});})(flag))
;
cljs.core.async.__GT_t10802 = ((function (flag){
return (function __GT_t10802(flag__$1,alt_flag__$1,meta10803){return (new cljs.core.async.t10802(flag__$1,alt_flag__$1,meta10803));
});})(flag))
;
}
return (new cljs.core.async.t10802(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10808 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10808 = (function (cb,flag,alt_handler,meta10809){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10809 = meta10809;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10808.cljs$lang$type = true;
cljs.core.async.t10808.cljs$lang$ctorStr = "cljs.core.async/t10808";
cljs.core.async.t10808.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t10808");
});
cljs.core.async.t10808.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10808.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10808.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10810){var self__ = this;
var _10810__$1 = this;return self__.meta10809;
});
cljs.core.async.t10808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10810,meta10809__$1){var self__ = this;
var _10810__$1 = this;return (new cljs.core.async.t10808(self__.cb,self__.flag,self__.alt_handler,meta10809__$1));
});
cljs.core.async.__GT_t10808 = (function __GT_t10808(cb__$1,flag__$1,alt_handler__$1,meta10809){return (new cljs.core.async.t10808(cb__$1,flag__$1,alt_handler__$1,meta10809));
});
}
return (new cljs.core.async.t10808(cb,flag,alt_handler,null));
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
return (function (p1__10811_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10811_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3478__auto__ = wport;if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10812 = (i + 1);
i = G__10812;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3478__auto__ = ret;if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3466__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3466__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3466__auto__;
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
var alts_BANG___delegate = function (ports,p__10813){var map__10815 = p__10813;var map__10815__$1 = ((cljs.core.seq_QMARK_.call(null,map__10815))?cljs.core.apply.call(null,cljs.core.hash_map,map__10815):map__10815);var opts = map__10815__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10813 = null;if (arguments.length > 1) {
  p__10813 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10813);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10816){
var ports = cljs.core.first(arglist__10816);
var p__10813 = cljs.core.rest(arglist__10816);
return alts_BANG___delegate(ports,p__10813);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10824 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10824 = (function (ch,f,map_LT_,meta10825){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10825 = meta10825;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10824.cljs$lang$type = true;
cljs.core.async.t10824.cljs$lang$ctorStr = "cljs.core.async/t10824";
cljs.core.async.t10824.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t10824");
});
cljs.core.async.t10824.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10824.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10824.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10824.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10827 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10827 = (function (fn1,_,meta10825,ch,f,map_LT_,meta10828){
this.fn1 = fn1;
this._ = _;
this.meta10825 = meta10825;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10828 = meta10828;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10827.cljs$lang$type = true;
cljs.core.async.t10827.cljs$lang$ctorStr = "cljs.core.async/t10827";
cljs.core.async.t10827.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t10827");
});})(___$1))
;
cljs.core.async.t10827.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10827.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10827.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10827.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__10817_SHARP_){return f1.call(null,(((p1__10817_SHARP_ == null))?null:self__.f.call(null,p1__10817_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t10827.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10829){var self__ = this;
var _10829__$1 = this;return self__.meta10828;
});})(___$1))
;
cljs.core.async.t10827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10829,meta10828__$1){var self__ = this;
var _10829__$1 = this;return (new cljs.core.async.t10827(self__.fn1,self__._,self__.meta10825,self__.ch,self__.f,self__.map_LT_,meta10828__$1));
});})(___$1))
;
cljs.core.async.__GT_t10827 = ((function (___$1){
return (function __GT_t10827(fn1__$1,___$2,meta10825__$1,ch__$2,f__$2,map_LT___$2,meta10828){return (new cljs.core.async.t10827(fn1__$1,___$2,meta10825__$1,ch__$2,f__$2,map_LT___$2,meta10828));
});})(___$1))
;
}
return (new cljs.core.async.t10827(fn1,___$1,self__.meta10825,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3466__auto__ = ret;if(cljs.core.truth_(and__3466__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3466__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10824.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10824.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10826){var self__ = this;
var _10826__$1 = this;return self__.meta10825;
});
cljs.core.async.t10824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10826,meta10825__$1){var self__ = this;
var _10826__$1 = this;return (new cljs.core.async.t10824(self__.ch,self__.f,self__.map_LT_,meta10825__$1));
});
cljs.core.async.__GT_t10824 = (function __GT_t10824(ch__$1,f__$1,map_LT___$1,meta10825){return (new cljs.core.async.t10824(ch__$1,f__$1,map_LT___$1,meta10825));
});
}
return (new cljs.core.async.t10824(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10833 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10833 = (function (ch,f,map_GT_,meta10834){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10834 = meta10834;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10833.cljs$lang$type = true;
cljs.core.async.t10833.cljs$lang$ctorStr = "cljs.core.async/t10833";
cljs.core.async.t10833.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t10833");
});
cljs.core.async.t10833.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10833.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10833.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10833.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10833.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10833.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10835){var self__ = this;
var _10835__$1 = this;return self__.meta10834;
});
cljs.core.async.t10833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10835,meta10834__$1){var self__ = this;
var _10835__$1 = this;return (new cljs.core.async.t10833(self__.ch,self__.f,self__.map_GT_,meta10834__$1));
});
cljs.core.async.__GT_t10833 = (function __GT_t10833(ch__$1,f__$1,map_GT___$1,meta10834){return (new cljs.core.async.t10833(ch__$1,f__$1,map_GT___$1,meta10834));
});
}
return (new cljs.core.async.t10833(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10839 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10839 = (function (ch,p,filter_GT_,meta10840){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10840 = meta10840;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10839.cljs$lang$type = true;
cljs.core.async.t10839.cljs$lang$ctorStr = "cljs.core.async/t10839";
cljs.core.async.t10839.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t10839");
});
cljs.core.async.t10839.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10839.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10839.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10839.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10839.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10839.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10839.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10841){var self__ = this;
var _10841__$1 = this;return self__.meta10840;
});
cljs.core.async.t10839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10841,meta10840__$1){var self__ = this;
var _10841__$1 = this;return (new cljs.core.async.t10839(self__.ch,self__.p,self__.filter_GT_,meta10840__$1));
});
cljs.core.async.__GT_t10839 = (function __GT_t10839(ch__$1,p__$1,filter_GT___$1,meta10840){return (new cljs.core.async.t10839(ch__$1,p__$1,filter_GT___$1,meta10840));
});
}
return (new cljs.core.async.t10839(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6248__auto___10924 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___10924,out){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___10924,out){
return (function (state_10903){var state_val_10904 = (state_10903[1]);if((state_val_10904 === 1))
{var state_10903__$1 = state_10903;var statearr_10905_10925 = state_10903__$1;(statearr_10905_10925[2] = null);
(statearr_10905_10925[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10904 === 2))
{var state_10903__$1 = state_10903;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10903__$1,4,ch);
} else
{if((state_val_10904 === 3))
{var inst_10901 = (state_10903[2]);var state_10903__$1 = state_10903;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10903__$1,inst_10901);
} else
{if((state_val_10904 === 4))
{var inst_10885 = (state_10903[7]);var inst_10885__$1 = (state_10903[2]);var inst_10886 = (inst_10885__$1 == null);var state_10903__$1 = (function (){var statearr_10906 = state_10903;(statearr_10906[7] = inst_10885__$1);
return statearr_10906;
})();if(cljs.core.truth_(inst_10886))
{var statearr_10907_10926 = state_10903__$1;(statearr_10907_10926[1] = 5);
} else
{var statearr_10908_10927 = state_10903__$1;(statearr_10908_10927[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10904 === 5))
{var inst_10888 = cljs.core.async.close_BANG_.call(null,out);var state_10903__$1 = state_10903;var statearr_10909_10928 = state_10903__$1;(statearr_10909_10928[2] = inst_10888);
(statearr_10909_10928[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10904 === 6))
{var inst_10885 = (state_10903[7]);var inst_10890 = p.call(null,inst_10885);var state_10903__$1 = state_10903;if(cljs.core.truth_(inst_10890))
{var statearr_10910_10929 = state_10903__$1;(statearr_10910_10929[1] = 8);
} else
{var statearr_10911_10930 = state_10903__$1;(statearr_10911_10930[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10904 === 7))
{var inst_10899 = (state_10903[2]);var state_10903__$1 = state_10903;var statearr_10912_10931 = state_10903__$1;(statearr_10912_10931[2] = inst_10899);
(statearr_10912_10931[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10904 === 8))
{var inst_10885 = (state_10903[7]);var state_10903__$1 = state_10903;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10903__$1,11,out,inst_10885);
} else
{if((state_val_10904 === 9))
{var state_10903__$1 = state_10903;var statearr_10913_10932 = state_10903__$1;(statearr_10913_10932[2] = null);
(statearr_10913_10932[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10904 === 10))
{var inst_10896 = (state_10903[2]);var state_10903__$1 = (function (){var statearr_10914 = state_10903;(statearr_10914[8] = inst_10896);
return statearr_10914;
})();var statearr_10915_10933 = state_10903__$1;(statearr_10915_10933[2] = null);
(statearr_10915_10933[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10904 === 11))
{var inst_10893 = (state_10903[2]);var state_10903__$1 = state_10903;var statearr_10916_10934 = state_10903__$1;(statearr_10916_10934[2] = inst_10893);
(statearr_10916_10934[1] = 10);
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
});})(c__6248__auto___10924,out))
;return ((function (switch__6233__auto__,c__6248__auto___10924,out){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_10920 = [null,null,null,null,null,null,null,null,null];(statearr_10920[0] = state_machine__6234__auto__);
(statearr_10920[1] = 1);
return statearr_10920;
});
var state_machine__6234__auto____1 = (function (state_10903){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_10903);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e10921){if((e10921 instanceof Object))
{var ex__6237__auto__ = e10921;var statearr_10922_10935 = state_10903;(statearr_10922_10935[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10903);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10921;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10936 = state_10903;
state_10903 = G__10936;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_10903){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_10903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___10924,out))
})();var state__6250__auto__ = (function (){var statearr_10923 = f__6249__auto__.call(null);(statearr_10923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___10924);
return statearr_10923;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___10924,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6248__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto__){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto__){
return (function (state_11088){var state_val_11089 = (state_11088[1]);if((state_val_11089 === 1))
{var state_11088__$1 = state_11088;var statearr_11090_11127 = state_11088__$1;(statearr_11090_11127[2] = null);
(statearr_11090_11127[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11089 === 2))
{var state_11088__$1 = state_11088;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11088__$1,4,in$);
} else
{if((state_val_11089 === 3))
{var inst_11086 = (state_11088[2]);var state_11088__$1 = state_11088;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11088__$1,inst_11086);
} else
{if((state_val_11089 === 4))
{var inst_11034 = (state_11088[7]);var inst_11034__$1 = (state_11088[2]);var inst_11035 = (inst_11034__$1 == null);var state_11088__$1 = (function (){var statearr_11091 = state_11088;(statearr_11091[7] = inst_11034__$1);
return statearr_11091;
})();if(cljs.core.truth_(inst_11035))
{var statearr_11092_11128 = state_11088__$1;(statearr_11092_11128[1] = 5);
} else
{var statearr_11093_11129 = state_11088__$1;(statearr_11093_11129[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11089 === 5))
{var inst_11037 = cljs.core.async.close_BANG_.call(null,out);var state_11088__$1 = state_11088;var statearr_11094_11130 = state_11088__$1;(statearr_11094_11130[2] = inst_11037);
(statearr_11094_11130[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11089 === 6))
{var inst_11034 = (state_11088[7]);var inst_11039 = f.call(null,inst_11034);var inst_11044 = cljs.core.seq.call(null,inst_11039);var inst_11045 = inst_11044;var inst_11046 = null;var inst_11047 = 0;var inst_11048 = 0;var state_11088__$1 = (function (){var statearr_11095 = state_11088;(statearr_11095[8] = inst_11048);
(statearr_11095[9] = inst_11047);
(statearr_11095[10] = inst_11046);
(statearr_11095[11] = inst_11045);
return statearr_11095;
})();var statearr_11096_11131 = state_11088__$1;(statearr_11096_11131[2] = null);
(statearr_11096_11131[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11089 === 7))
{var inst_11084 = (state_11088[2]);var state_11088__$1 = state_11088;var statearr_11097_11132 = state_11088__$1;(statearr_11097_11132[2] = inst_11084);
(statearr_11097_11132[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11089 === 8))
{var inst_11048 = (state_11088[8]);var inst_11047 = (state_11088[9]);var inst_11050 = (inst_11048 < inst_11047);var inst_11051 = inst_11050;var state_11088__$1 = state_11088;if(cljs.core.truth_(inst_11051))
{var statearr_11098_11133 = state_11088__$1;(statearr_11098_11133[1] = 10);
} else
{var statearr_11099_11134 = state_11088__$1;(statearr_11099_11134[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11089 === 9))
{var inst_11081 = (state_11088[2]);var state_11088__$1 = (function (){var statearr_11100 = state_11088;(statearr_11100[12] = inst_11081);
return statearr_11100;
})();var statearr_11101_11135 = state_11088__$1;(statearr_11101_11135[2] = null);
(statearr_11101_11135[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11089 === 10))
{var inst_11048 = (state_11088[8]);var inst_11046 = (state_11088[10]);var inst_11053 = cljs.core._nth.call(null,inst_11046,inst_11048);var state_11088__$1 = state_11088;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11088__$1,13,out,inst_11053);
} else
{if((state_val_11089 === 11))
{var inst_11059 = (state_11088[13]);var inst_11045 = (state_11088[11]);var inst_11059__$1 = cljs.core.seq.call(null,inst_11045);var state_11088__$1 = (function (){var statearr_11105 = state_11088;(statearr_11105[13] = inst_11059__$1);
return statearr_11105;
})();if(inst_11059__$1)
{var statearr_11106_11136 = state_11088__$1;(statearr_11106_11136[1] = 14);
} else
{var statearr_11107_11137 = state_11088__$1;(statearr_11107_11137[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11089 === 12))
{var inst_11079 = (state_11088[2]);var state_11088__$1 = state_11088;var statearr_11108_11138 = state_11088__$1;(statearr_11108_11138[2] = inst_11079);
(statearr_11108_11138[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11089 === 13))
{var inst_11048 = (state_11088[8]);var inst_11047 = (state_11088[9]);var inst_11046 = (state_11088[10]);var inst_11045 = (state_11088[11]);var inst_11055 = (state_11088[2]);var inst_11056 = (inst_11048 + 1);var tmp11102 = inst_11047;var tmp11103 = inst_11046;var tmp11104 = inst_11045;var inst_11045__$1 = tmp11104;var inst_11046__$1 = tmp11103;var inst_11047__$1 = tmp11102;var inst_11048__$1 = inst_11056;var state_11088__$1 = (function (){var statearr_11109 = state_11088;(statearr_11109[14] = inst_11055);
(statearr_11109[8] = inst_11048__$1);
(statearr_11109[9] = inst_11047__$1);
(statearr_11109[10] = inst_11046__$1);
(statearr_11109[11] = inst_11045__$1);
return statearr_11109;
})();var statearr_11110_11139 = state_11088__$1;(statearr_11110_11139[2] = null);
(statearr_11110_11139[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11089 === 14))
{var inst_11059 = (state_11088[13]);var inst_11061 = cljs.core.chunked_seq_QMARK_.call(null,inst_11059);var state_11088__$1 = state_11088;if(inst_11061)
{var statearr_11111_11140 = state_11088__$1;(statearr_11111_11140[1] = 17);
} else
{var statearr_11112_11141 = state_11088__$1;(statearr_11112_11141[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11089 === 15))
{var state_11088__$1 = state_11088;var statearr_11113_11142 = state_11088__$1;(statearr_11113_11142[2] = null);
(statearr_11113_11142[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11089 === 16))
{var inst_11077 = (state_11088[2]);var state_11088__$1 = state_11088;var statearr_11114_11143 = state_11088__$1;(statearr_11114_11143[2] = inst_11077);
(statearr_11114_11143[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11089 === 17))
{var inst_11059 = (state_11088[13]);var inst_11063 = cljs.core.chunk_first.call(null,inst_11059);var inst_11064 = cljs.core.chunk_rest.call(null,inst_11059);var inst_11065 = cljs.core.count.call(null,inst_11063);var inst_11045 = inst_11064;var inst_11046 = inst_11063;var inst_11047 = inst_11065;var inst_11048 = 0;var state_11088__$1 = (function (){var statearr_11115 = state_11088;(statearr_11115[8] = inst_11048);
(statearr_11115[9] = inst_11047);
(statearr_11115[10] = inst_11046);
(statearr_11115[11] = inst_11045);
return statearr_11115;
})();var statearr_11116_11144 = state_11088__$1;(statearr_11116_11144[2] = null);
(statearr_11116_11144[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11089 === 18))
{var inst_11059 = (state_11088[13]);var inst_11068 = cljs.core.first.call(null,inst_11059);var state_11088__$1 = state_11088;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11088__$1,20,out,inst_11068);
} else
{if((state_val_11089 === 19))
{var inst_11074 = (state_11088[2]);var state_11088__$1 = state_11088;var statearr_11117_11145 = state_11088__$1;(statearr_11117_11145[2] = inst_11074);
(statearr_11117_11145[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11089 === 20))
{var inst_11059 = (state_11088[13]);var inst_11070 = (state_11088[2]);var inst_11071 = cljs.core.next.call(null,inst_11059);var inst_11045 = inst_11071;var inst_11046 = null;var inst_11047 = 0;var inst_11048 = 0;var state_11088__$1 = (function (){var statearr_11118 = state_11088;(statearr_11118[8] = inst_11048);
(statearr_11118[15] = inst_11070);
(statearr_11118[9] = inst_11047);
(statearr_11118[10] = inst_11046);
(statearr_11118[11] = inst_11045);
return statearr_11118;
})();var statearr_11119_11146 = state_11088__$1;(statearr_11119_11146[2] = null);
(statearr_11119_11146[1] = 8);
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
});})(c__6248__auto__))
;return ((function (switch__6233__auto__,c__6248__auto__){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_11123 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11123[0] = state_machine__6234__auto__);
(statearr_11123[1] = 1);
return statearr_11123;
});
var state_machine__6234__auto____1 = (function (state_11088){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_11088);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e11124){if((e11124 instanceof Object))
{var ex__6237__auto__ = e11124;var statearr_11125_11147 = state_11088;(statearr_11125_11147[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11088);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11124;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11148 = state_11088;
state_11088 = G__11148;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_11088){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_11088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto__))
})();var state__6250__auto__ = (function (){var statearr_11126 = f__6249__auto__.call(null);(statearr_11126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto__);
return statearr_11126;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto__))
);
return c__6248__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6248__auto___11229 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___11229){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___11229){
return (function (state_11208){var state_val_11209 = (state_11208[1]);if((state_val_11209 === 1))
{var state_11208__$1 = state_11208;var statearr_11210_11230 = state_11208__$1;(statearr_11210_11230[2] = null);
(statearr_11210_11230[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11209 === 2))
{var state_11208__$1 = state_11208;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11208__$1,4,from);
} else
{if((state_val_11209 === 3))
{var inst_11206 = (state_11208[2]);var state_11208__$1 = state_11208;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11208__$1,inst_11206);
} else
{if((state_val_11209 === 4))
{var inst_11191 = (state_11208[7]);var inst_11191__$1 = (state_11208[2]);var inst_11192 = (inst_11191__$1 == null);var state_11208__$1 = (function (){var statearr_11211 = state_11208;(statearr_11211[7] = inst_11191__$1);
return statearr_11211;
})();if(cljs.core.truth_(inst_11192))
{var statearr_11212_11231 = state_11208__$1;(statearr_11212_11231[1] = 5);
} else
{var statearr_11213_11232 = state_11208__$1;(statearr_11213_11232[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11209 === 5))
{var state_11208__$1 = state_11208;if(cljs.core.truth_(close_QMARK_))
{var statearr_11214_11233 = state_11208__$1;(statearr_11214_11233[1] = 8);
} else
{var statearr_11215_11234 = state_11208__$1;(statearr_11215_11234[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11209 === 6))
{var inst_11191 = (state_11208[7]);var state_11208__$1 = state_11208;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11208__$1,11,to,inst_11191);
} else
{if((state_val_11209 === 7))
{var inst_11204 = (state_11208[2]);var state_11208__$1 = state_11208;var statearr_11216_11235 = state_11208__$1;(statearr_11216_11235[2] = inst_11204);
(statearr_11216_11235[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11209 === 8))
{var inst_11195 = cljs.core.async.close_BANG_.call(null,to);var state_11208__$1 = state_11208;var statearr_11217_11236 = state_11208__$1;(statearr_11217_11236[2] = inst_11195);
(statearr_11217_11236[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11209 === 9))
{var state_11208__$1 = state_11208;var statearr_11218_11237 = state_11208__$1;(statearr_11218_11237[2] = null);
(statearr_11218_11237[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11209 === 10))
{var inst_11198 = (state_11208[2]);var state_11208__$1 = state_11208;var statearr_11219_11238 = state_11208__$1;(statearr_11219_11238[2] = inst_11198);
(statearr_11219_11238[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11209 === 11))
{var inst_11201 = (state_11208[2]);var state_11208__$1 = (function (){var statearr_11220 = state_11208;(statearr_11220[8] = inst_11201);
return statearr_11220;
})();var statearr_11221_11239 = state_11208__$1;(statearr_11221_11239[2] = null);
(statearr_11221_11239[1] = 2);
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
});})(c__6248__auto___11229))
;return ((function (switch__6233__auto__,c__6248__auto___11229){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_11225 = [null,null,null,null,null,null,null,null,null];(statearr_11225[0] = state_machine__6234__auto__);
(statearr_11225[1] = 1);
return statearr_11225;
});
var state_machine__6234__auto____1 = (function (state_11208){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_11208);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e11226){if((e11226 instanceof Object))
{var ex__6237__auto__ = e11226;var statearr_11227_11240 = state_11208;(statearr_11227_11240[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11208);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11226;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11241 = state_11208;
state_11208 = G__11241;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_11208){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_11208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___11229))
})();var state__6250__auto__ = (function (){var statearr_11228 = f__6249__auto__.call(null);(statearr_11228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___11229);
return statearr_11228;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___11229))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6248__auto___11328 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___11328,tc,fc){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___11328,tc,fc){
return (function (state_11306){var state_val_11307 = (state_11306[1]);if((state_val_11307 === 1))
{var state_11306__$1 = state_11306;var statearr_11308_11329 = state_11306__$1;(statearr_11308_11329[2] = null);
(statearr_11308_11329[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11307 === 2))
{var state_11306__$1 = state_11306;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11306__$1,4,ch);
} else
{if((state_val_11307 === 3))
{var inst_11304 = (state_11306[2]);var state_11306__$1 = state_11306;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11306__$1,inst_11304);
} else
{if((state_val_11307 === 4))
{var inst_11287 = (state_11306[7]);var inst_11287__$1 = (state_11306[2]);var inst_11288 = (inst_11287__$1 == null);var state_11306__$1 = (function (){var statearr_11309 = state_11306;(statearr_11309[7] = inst_11287__$1);
return statearr_11309;
})();if(cljs.core.truth_(inst_11288))
{var statearr_11310_11330 = state_11306__$1;(statearr_11310_11330[1] = 5);
} else
{var statearr_11311_11331 = state_11306__$1;(statearr_11311_11331[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11307 === 5))
{var inst_11290 = cljs.core.async.close_BANG_.call(null,tc);var inst_11291 = cljs.core.async.close_BANG_.call(null,fc);var state_11306__$1 = (function (){var statearr_11312 = state_11306;(statearr_11312[8] = inst_11290);
return statearr_11312;
})();var statearr_11313_11332 = state_11306__$1;(statearr_11313_11332[2] = inst_11291);
(statearr_11313_11332[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11307 === 6))
{var inst_11287 = (state_11306[7]);var inst_11293 = p.call(null,inst_11287);var state_11306__$1 = state_11306;if(cljs.core.truth_(inst_11293))
{var statearr_11314_11333 = state_11306__$1;(statearr_11314_11333[1] = 9);
} else
{var statearr_11315_11334 = state_11306__$1;(statearr_11315_11334[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11307 === 7))
{var inst_11302 = (state_11306[2]);var state_11306__$1 = state_11306;var statearr_11316_11335 = state_11306__$1;(statearr_11316_11335[2] = inst_11302);
(statearr_11316_11335[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11307 === 8))
{var inst_11299 = (state_11306[2]);var state_11306__$1 = (function (){var statearr_11317 = state_11306;(statearr_11317[9] = inst_11299);
return statearr_11317;
})();var statearr_11318_11336 = state_11306__$1;(statearr_11318_11336[2] = null);
(statearr_11318_11336[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11307 === 9))
{var state_11306__$1 = state_11306;var statearr_11319_11337 = state_11306__$1;(statearr_11319_11337[2] = tc);
(statearr_11319_11337[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11307 === 10))
{var state_11306__$1 = state_11306;var statearr_11320_11338 = state_11306__$1;(statearr_11320_11338[2] = fc);
(statearr_11320_11338[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11307 === 11))
{var inst_11287 = (state_11306[7]);var inst_11297 = (state_11306[2]);var state_11306__$1 = state_11306;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11306__$1,8,inst_11297,inst_11287);
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
});})(c__6248__auto___11328,tc,fc))
;return ((function (switch__6233__auto__,c__6248__auto___11328,tc,fc){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_11324 = [null,null,null,null,null,null,null,null,null,null];(statearr_11324[0] = state_machine__6234__auto__);
(statearr_11324[1] = 1);
return statearr_11324;
});
var state_machine__6234__auto____1 = (function (state_11306){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_11306);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e11325){if((e11325 instanceof Object))
{var ex__6237__auto__ = e11325;var statearr_11326_11339 = state_11306;(statearr_11326_11339[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11306);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11325;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11340 = state_11306;
state_11306 = G__11340;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_11306){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_11306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___11328,tc,fc))
})();var state__6250__auto__ = (function (){var statearr_11327 = f__6249__auto__.call(null);(statearr_11327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___11328);
return statearr_11327;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___11328,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6248__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto__){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto__){
return (function (state_11387){var state_val_11388 = (state_11387[1]);if((state_val_11388 === 7))
{var inst_11383 = (state_11387[2]);var state_11387__$1 = state_11387;var statearr_11389_11405 = state_11387__$1;(statearr_11389_11405[2] = inst_11383);
(statearr_11389_11405[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11388 === 6))
{var inst_11373 = (state_11387[7]);var inst_11376 = (state_11387[8]);var inst_11380 = f.call(null,inst_11373,inst_11376);var inst_11373__$1 = inst_11380;var state_11387__$1 = (function (){var statearr_11390 = state_11387;(statearr_11390[7] = inst_11373__$1);
return statearr_11390;
})();var statearr_11391_11406 = state_11387__$1;(statearr_11391_11406[2] = null);
(statearr_11391_11406[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11388 === 5))
{var inst_11373 = (state_11387[7]);var state_11387__$1 = state_11387;var statearr_11392_11407 = state_11387__$1;(statearr_11392_11407[2] = inst_11373);
(statearr_11392_11407[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11388 === 4))
{var inst_11376 = (state_11387[8]);var inst_11376__$1 = (state_11387[2]);var inst_11377 = (inst_11376__$1 == null);var state_11387__$1 = (function (){var statearr_11393 = state_11387;(statearr_11393[8] = inst_11376__$1);
return statearr_11393;
})();if(cljs.core.truth_(inst_11377))
{var statearr_11394_11408 = state_11387__$1;(statearr_11394_11408[1] = 5);
} else
{var statearr_11395_11409 = state_11387__$1;(statearr_11395_11409[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11388 === 3))
{var inst_11385 = (state_11387[2]);var state_11387__$1 = state_11387;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11387__$1,inst_11385);
} else
{if((state_val_11388 === 2))
{var state_11387__$1 = state_11387;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11387__$1,4,ch);
} else
{if((state_val_11388 === 1))
{var inst_11373 = init;var state_11387__$1 = (function (){var statearr_11396 = state_11387;(statearr_11396[7] = inst_11373);
return statearr_11396;
})();var statearr_11397_11410 = state_11387__$1;(statearr_11397_11410[2] = null);
(statearr_11397_11410[1] = 2);
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
});})(c__6248__auto__))
;return ((function (switch__6233__auto__,c__6248__auto__){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_11401 = [null,null,null,null,null,null,null,null,null];(statearr_11401[0] = state_machine__6234__auto__);
(statearr_11401[1] = 1);
return statearr_11401;
});
var state_machine__6234__auto____1 = (function (state_11387){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_11387);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e11402){if((e11402 instanceof Object))
{var ex__6237__auto__ = e11402;var statearr_11403_11411 = state_11387;(statearr_11403_11411[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11387);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11402;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11412 = state_11387;
state_11387 = G__11412;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_11387){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_11387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto__))
})();var state__6250__auto__ = (function (){var statearr_11404 = f__6249__auto__.call(null);(statearr_11404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto__);
return statearr_11404;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto__))
);
return c__6248__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6248__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto__){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto__){
return (function (state_11474){var state_val_11475 = (state_11474[1]);if((state_val_11475 === 1))
{var inst_11454 = cljs.core.seq.call(null,coll);var inst_11455 = inst_11454;var state_11474__$1 = (function (){var statearr_11476 = state_11474;(statearr_11476[7] = inst_11455);
return statearr_11476;
})();var statearr_11477_11495 = state_11474__$1;(statearr_11477_11495[2] = null);
(statearr_11477_11495[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11475 === 2))
{var inst_11455 = (state_11474[7]);var state_11474__$1 = state_11474;if(cljs.core.truth_(inst_11455))
{var statearr_11478_11496 = state_11474__$1;(statearr_11478_11496[1] = 4);
} else
{var statearr_11479_11497 = state_11474__$1;(statearr_11479_11497[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11475 === 3))
{var inst_11472 = (state_11474[2]);var state_11474__$1 = state_11474;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11474__$1,inst_11472);
} else
{if((state_val_11475 === 4))
{var inst_11455 = (state_11474[7]);var inst_11458 = cljs.core.first.call(null,inst_11455);var state_11474__$1 = state_11474;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11474__$1,7,ch,inst_11458);
} else
{if((state_val_11475 === 5))
{var state_11474__$1 = state_11474;if(cljs.core.truth_(close_QMARK_))
{var statearr_11480_11498 = state_11474__$1;(statearr_11480_11498[1] = 8);
} else
{var statearr_11481_11499 = state_11474__$1;(statearr_11481_11499[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11475 === 6))
{var inst_11470 = (state_11474[2]);var state_11474__$1 = state_11474;var statearr_11482_11500 = state_11474__$1;(statearr_11482_11500[2] = inst_11470);
(statearr_11482_11500[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11475 === 7))
{var inst_11455 = (state_11474[7]);var inst_11460 = (state_11474[2]);var inst_11461 = cljs.core.next.call(null,inst_11455);var inst_11455__$1 = inst_11461;var state_11474__$1 = (function (){var statearr_11483 = state_11474;(statearr_11483[8] = inst_11460);
(statearr_11483[7] = inst_11455__$1);
return statearr_11483;
})();var statearr_11484_11501 = state_11474__$1;(statearr_11484_11501[2] = null);
(statearr_11484_11501[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11475 === 8))
{var inst_11465 = cljs.core.async.close_BANG_.call(null,ch);var state_11474__$1 = state_11474;var statearr_11485_11502 = state_11474__$1;(statearr_11485_11502[2] = inst_11465);
(statearr_11485_11502[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11475 === 9))
{var state_11474__$1 = state_11474;var statearr_11486_11503 = state_11474__$1;(statearr_11486_11503[2] = null);
(statearr_11486_11503[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11475 === 10))
{var inst_11468 = (state_11474[2]);var state_11474__$1 = state_11474;var statearr_11487_11504 = state_11474__$1;(statearr_11487_11504[2] = inst_11468);
(statearr_11487_11504[1] = 6);
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
});})(c__6248__auto__))
;return ((function (switch__6233__auto__,c__6248__auto__){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_11491 = [null,null,null,null,null,null,null,null,null];(statearr_11491[0] = state_machine__6234__auto__);
(statearr_11491[1] = 1);
return statearr_11491;
});
var state_machine__6234__auto____1 = (function (state_11474){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_11474);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e11492){if((e11492 instanceof Object))
{var ex__6237__auto__ = e11492;var statearr_11493_11505 = state_11474;(statearr_11493_11505[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11474);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11492;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11506 = state_11474;
state_11474 = G__11506;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_11474){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_11474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto__))
})();var state__6250__auto__ = (function (){var statearr_11494 = f__6249__auto__.call(null);(statearr_11494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto__);
return statearr_11494;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto__))
);
return c__6248__auto__;
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
cljs.core.async.Mux = (function (){var obj11508 = {};return obj11508;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3466__auto__ = _;if(and__3466__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3466__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4105__auto__ = (((_ == null))?null:_);return (function (){var or__3478__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11510 = {};return obj11510;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11734 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11734 = (function (cs,ch,mult,meta11735){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11735 = meta11735;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11734.cljs$lang$type = true;
cljs.core.async.t11734.cljs$lang$ctorStr = "cljs.core.async/t11734";
cljs.core.async.t11734.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t11734");
});})(cs))
;
cljs.core.async.t11734.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11734.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11734.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11734.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11734.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11734.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11734.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11736){var self__ = this;
var _11736__$1 = this;return self__.meta11735;
});})(cs))
;
cljs.core.async.t11734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11736,meta11735__$1){var self__ = this;
var _11736__$1 = this;return (new cljs.core.async.t11734(self__.cs,self__.ch,self__.mult,meta11735__$1));
});})(cs))
;
cljs.core.async.__GT_t11734 = ((function (cs){
return (function __GT_t11734(cs__$1,ch__$1,mult__$1,meta11735){return (new cljs.core.async.t11734(cs__$1,ch__$1,mult__$1,meta11735));
});})(cs))
;
}
return (new cljs.core.async.t11734(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6248__auto___11957 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___11957,cs,m,dchan,dctr,done){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___11957,cs,m,dchan,dctr,done){
return (function (state_11871){var state_val_11872 = (state_11871[1]);if((state_val_11872 === 32))
{var inst_11815 = (state_11871[7]);var inst_11739 = (state_11871[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11871,31,Object,null,30);var inst_11822 = cljs.core.async.put_BANG_.call(null,inst_11815,inst_11739,done);var state_11871__$1 = state_11871;var statearr_11873_11958 = state_11871__$1;(statearr_11873_11958[2] = inst_11822);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11871__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 1))
{var state_11871__$1 = state_11871;var statearr_11874_11959 = state_11871__$1;(statearr_11874_11959[2] = null);
(statearr_11874_11959[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 33))
{var inst_11828 = (state_11871[9]);var inst_11830 = cljs.core.chunked_seq_QMARK_.call(null,inst_11828);var state_11871__$1 = state_11871;if(inst_11830)
{var statearr_11875_11960 = state_11871__$1;(statearr_11875_11960[1] = 36);
} else
{var statearr_11876_11961 = state_11871__$1;(statearr_11876_11961[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 2))
{var state_11871__$1 = state_11871;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11871__$1,4,ch);
} else
{if((state_val_11872 === 34))
{var state_11871__$1 = state_11871;var statearr_11877_11962 = state_11871__$1;(statearr_11877_11962[2] = null);
(statearr_11877_11962[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 3))
{var inst_11869 = (state_11871[2]);var state_11871__$1 = state_11871;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11871__$1,inst_11869);
} else
{if((state_val_11872 === 35))
{var inst_11853 = (state_11871[2]);var state_11871__$1 = state_11871;var statearr_11878_11963 = state_11871__$1;(statearr_11878_11963[2] = inst_11853);
(statearr_11878_11963[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 4))
{var inst_11739 = (state_11871[8]);var inst_11739__$1 = (state_11871[2]);var inst_11740 = (inst_11739__$1 == null);var state_11871__$1 = (function (){var statearr_11879 = state_11871;(statearr_11879[8] = inst_11739__$1);
return statearr_11879;
})();if(cljs.core.truth_(inst_11740))
{var statearr_11880_11964 = state_11871__$1;(statearr_11880_11964[1] = 5);
} else
{var statearr_11881_11965 = state_11871__$1;(statearr_11881_11965[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 36))
{var inst_11828 = (state_11871[9]);var inst_11832 = cljs.core.chunk_first.call(null,inst_11828);var inst_11833 = cljs.core.chunk_rest.call(null,inst_11828);var inst_11834 = cljs.core.count.call(null,inst_11832);var inst_11807 = inst_11833;var inst_11808 = inst_11832;var inst_11809 = inst_11834;var inst_11810 = 0;var state_11871__$1 = (function (){var statearr_11882 = state_11871;(statearr_11882[10] = inst_11810);
(statearr_11882[11] = inst_11807);
(statearr_11882[12] = inst_11808);
(statearr_11882[13] = inst_11809);
return statearr_11882;
})();var statearr_11883_11966 = state_11871__$1;(statearr_11883_11966[2] = null);
(statearr_11883_11966[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 5))
{var inst_11746 = cljs.core.deref.call(null,cs);var inst_11747 = cljs.core.seq.call(null,inst_11746);var inst_11748 = inst_11747;var inst_11749 = null;var inst_11750 = 0;var inst_11751 = 0;var state_11871__$1 = (function (){var statearr_11884 = state_11871;(statearr_11884[14] = inst_11749);
(statearr_11884[15] = inst_11748);
(statearr_11884[16] = inst_11751);
(statearr_11884[17] = inst_11750);
return statearr_11884;
})();var statearr_11885_11967 = state_11871__$1;(statearr_11885_11967[2] = null);
(statearr_11885_11967[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 37))
{var inst_11828 = (state_11871[9]);var inst_11837 = cljs.core.first.call(null,inst_11828);var state_11871__$1 = (function (){var statearr_11886 = state_11871;(statearr_11886[18] = inst_11837);
return statearr_11886;
})();var statearr_11887_11968 = state_11871__$1;(statearr_11887_11968[2] = null);
(statearr_11887_11968[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 6))
{var inst_11799 = (state_11871[19]);var inst_11798 = cljs.core.deref.call(null,cs);var inst_11799__$1 = cljs.core.keys.call(null,inst_11798);var inst_11800 = cljs.core.count.call(null,inst_11799__$1);var inst_11801 = cljs.core.reset_BANG_.call(null,dctr,inst_11800);var inst_11806 = cljs.core.seq.call(null,inst_11799__$1);var inst_11807 = inst_11806;var inst_11808 = null;var inst_11809 = 0;var inst_11810 = 0;var state_11871__$1 = (function (){var statearr_11888 = state_11871;(statearr_11888[10] = inst_11810);
(statearr_11888[20] = inst_11801);
(statearr_11888[11] = inst_11807);
(statearr_11888[12] = inst_11808);
(statearr_11888[19] = inst_11799__$1);
(statearr_11888[13] = inst_11809);
return statearr_11888;
})();var statearr_11889_11969 = state_11871__$1;(statearr_11889_11969[2] = null);
(statearr_11889_11969[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 38))
{var inst_11850 = (state_11871[2]);var state_11871__$1 = state_11871;var statearr_11890_11970 = state_11871__$1;(statearr_11890_11970[2] = inst_11850);
(statearr_11890_11970[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 7))
{var inst_11867 = (state_11871[2]);var state_11871__$1 = state_11871;var statearr_11891_11971 = state_11871__$1;(statearr_11891_11971[2] = inst_11867);
(statearr_11891_11971[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 39))
{var inst_11828 = (state_11871[9]);var inst_11846 = (state_11871[2]);var inst_11847 = cljs.core.next.call(null,inst_11828);var inst_11807 = inst_11847;var inst_11808 = null;var inst_11809 = 0;var inst_11810 = 0;var state_11871__$1 = (function (){var statearr_11892 = state_11871;(statearr_11892[10] = inst_11810);
(statearr_11892[21] = inst_11846);
(statearr_11892[11] = inst_11807);
(statearr_11892[12] = inst_11808);
(statearr_11892[13] = inst_11809);
return statearr_11892;
})();var statearr_11893_11972 = state_11871__$1;(statearr_11893_11972[2] = null);
(statearr_11893_11972[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 8))
{var inst_11751 = (state_11871[16]);var inst_11750 = (state_11871[17]);var inst_11753 = (inst_11751 < inst_11750);var inst_11754 = inst_11753;var state_11871__$1 = state_11871;if(cljs.core.truth_(inst_11754))
{var statearr_11894_11973 = state_11871__$1;(statearr_11894_11973[1] = 10);
} else
{var statearr_11895_11974 = state_11871__$1;(statearr_11895_11974[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 40))
{var inst_11837 = (state_11871[18]);var inst_11838 = (state_11871[2]);var inst_11839 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11840 = cljs.core.async.untap_STAR_.call(null,m,inst_11837);var state_11871__$1 = (function (){var statearr_11896 = state_11871;(statearr_11896[22] = inst_11838);
(statearr_11896[23] = inst_11839);
return statearr_11896;
})();var statearr_11897_11975 = state_11871__$1;(statearr_11897_11975[2] = inst_11840);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11871__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 9))
{var inst_11796 = (state_11871[2]);var state_11871__$1 = state_11871;var statearr_11898_11976 = state_11871__$1;(statearr_11898_11976[2] = inst_11796);
(statearr_11898_11976[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 41))
{var inst_11837 = (state_11871[18]);var inst_11739 = (state_11871[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11871,40,Object,null,39);var inst_11844 = cljs.core.async.put_BANG_.call(null,inst_11837,inst_11739,done);var state_11871__$1 = state_11871;var statearr_11899_11977 = state_11871__$1;(statearr_11899_11977[2] = inst_11844);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11871__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 10))
{var inst_11749 = (state_11871[14]);var inst_11751 = (state_11871[16]);var inst_11757 = cljs.core._nth.call(null,inst_11749,inst_11751);var inst_11758 = cljs.core.nth.call(null,inst_11757,0,null);var inst_11759 = cljs.core.nth.call(null,inst_11757,1,null);var state_11871__$1 = (function (){var statearr_11900 = state_11871;(statearr_11900[24] = inst_11758);
return statearr_11900;
})();if(cljs.core.truth_(inst_11759))
{var statearr_11901_11978 = state_11871__$1;(statearr_11901_11978[1] = 13);
} else
{var statearr_11902_11979 = state_11871__$1;(statearr_11902_11979[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 42))
{var state_11871__$1 = state_11871;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11871__$1,45,dchan);
} else
{if((state_val_11872 === 11))
{var inst_11748 = (state_11871[15]);var inst_11768 = (state_11871[25]);var inst_11768__$1 = cljs.core.seq.call(null,inst_11748);var state_11871__$1 = (function (){var statearr_11903 = state_11871;(statearr_11903[25] = inst_11768__$1);
return statearr_11903;
})();if(inst_11768__$1)
{var statearr_11904_11980 = state_11871__$1;(statearr_11904_11980[1] = 16);
} else
{var statearr_11905_11981 = state_11871__$1;(statearr_11905_11981[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 43))
{var state_11871__$1 = state_11871;var statearr_11906_11982 = state_11871__$1;(statearr_11906_11982[2] = null);
(statearr_11906_11982[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 12))
{var inst_11794 = (state_11871[2]);var state_11871__$1 = state_11871;var statearr_11907_11983 = state_11871__$1;(statearr_11907_11983[2] = inst_11794);
(statearr_11907_11983[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 44))
{var inst_11864 = (state_11871[2]);var state_11871__$1 = (function (){var statearr_11908 = state_11871;(statearr_11908[26] = inst_11864);
return statearr_11908;
})();var statearr_11909_11984 = state_11871__$1;(statearr_11909_11984[2] = null);
(statearr_11909_11984[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 13))
{var inst_11758 = (state_11871[24]);var inst_11761 = cljs.core.async.close_BANG_.call(null,inst_11758);var state_11871__$1 = state_11871;var statearr_11910_11985 = state_11871__$1;(statearr_11910_11985[2] = inst_11761);
(statearr_11910_11985[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 45))
{var inst_11861 = (state_11871[2]);var state_11871__$1 = state_11871;var statearr_11914_11986 = state_11871__$1;(statearr_11914_11986[2] = inst_11861);
(statearr_11914_11986[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 14))
{var state_11871__$1 = state_11871;var statearr_11915_11987 = state_11871__$1;(statearr_11915_11987[2] = null);
(statearr_11915_11987[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 15))
{var inst_11749 = (state_11871[14]);var inst_11748 = (state_11871[15]);var inst_11751 = (state_11871[16]);var inst_11750 = (state_11871[17]);var inst_11764 = (state_11871[2]);var inst_11765 = (inst_11751 + 1);var tmp11911 = inst_11749;var tmp11912 = inst_11748;var tmp11913 = inst_11750;var inst_11748__$1 = tmp11912;var inst_11749__$1 = tmp11911;var inst_11750__$1 = tmp11913;var inst_11751__$1 = inst_11765;var state_11871__$1 = (function (){var statearr_11916 = state_11871;(statearr_11916[14] = inst_11749__$1);
(statearr_11916[15] = inst_11748__$1);
(statearr_11916[27] = inst_11764);
(statearr_11916[16] = inst_11751__$1);
(statearr_11916[17] = inst_11750__$1);
return statearr_11916;
})();var statearr_11917_11988 = state_11871__$1;(statearr_11917_11988[2] = null);
(statearr_11917_11988[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 16))
{var inst_11768 = (state_11871[25]);var inst_11770 = cljs.core.chunked_seq_QMARK_.call(null,inst_11768);var state_11871__$1 = state_11871;if(inst_11770)
{var statearr_11918_11989 = state_11871__$1;(statearr_11918_11989[1] = 19);
} else
{var statearr_11919_11990 = state_11871__$1;(statearr_11919_11990[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 17))
{var state_11871__$1 = state_11871;var statearr_11920_11991 = state_11871__$1;(statearr_11920_11991[2] = null);
(statearr_11920_11991[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 18))
{var inst_11792 = (state_11871[2]);var state_11871__$1 = state_11871;var statearr_11921_11992 = state_11871__$1;(statearr_11921_11992[2] = inst_11792);
(statearr_11921_11992[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 19))
{var inst_11768 = (state_11871[25]);var inst_11772 = cljs.core.chunk_first.call(null,inst_11768);var inst_11773 = cljs.core.chunk_rest.call(null,inst_11768);var inst_11774 = cljs.core.count.call(null,inst_11772);var inst_11748 = inst_11773;var inst_11749 = inst_11772;var inst_11750 = inst_11774;var inst_11751 = 0;var state_11871__$1 = (function (){var statearr_11922 = state_11871;(statearr_11922[14] = inst_11749);
(statearr_11922[15] = inst_11748);
(statearr_11922[16] = inst_11751);
(statearr_11922[17] = inst_11750);
return statearr_11922;
})();var statearr_11923_11993 = state_11871__$1;(statearr_11923_11993[2] = null);
(statearr_11923_11993[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 20))
{var inst_11768 = (state_11871[25]);var inst_11778 = cljs.core.first.call(null,inst_11768);var inst_11779 = cljs.core.nth.call(null,inst_11778,0,null);var inst_11780 = cljs.core.nth.call(null,inst_11778,1,null);var state_11871__$1 = (function (){var statearr_11924 = state_11871;(statearr_11924[28] = inst_11779);
return statearr_11924;
})();if(cljs.core.truth_(inst_11780))
{var statearr_11925_11994 = state_11871__$1;(statearr_11925_11994[1] = 22);
} else
{var statearr_11926_11995 = state_11871__$1;(statearr_11926_11995[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 21))
{var inst_11789 = (state_11871[2]);var state_11871__$1 = state_11871;var statearr_11927_11996 = state_11871__$1;(statearr_11927_11996[2] = inst_11789);
(statearr_11927_11996[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 22))
{var inst_11779 = (state_11871[28]);var inst_11782 = cljs.core.async.close_BANG_.call(null,inst_11779);var state_11871__$1 = state_11871;var statearr_11928_11997 = state_11871__$1;(statearr_11928_11997[2] = inst_11782);
(statearr_11928_11997[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 23))
{var state_11871__$1 = state_11871;var statearr_11929_11998 = state_11871__$1;(statearr_11929_11998[2] = null);
(statearr_11929_11998[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 24))
{var inst_11768 = (state_11871[25]);var inst_11785 = (state_11871[2]);var inst_11786 = cljs.core.next.call(null,inst_11768);var inst_11748 = inst_11786;var inst_11749 = null;var inst_11750 = 0;var inst_11751 = 0;var state_11871__$1 = (function (){var statearr_11930 = state_11871;(statearr_11930[14] = inst_11749);
(statearr_11930[15] = inst_11748);
(statearr_11930[29] = inst_11785);
(statearr_11930[16] = inst_11751);
(statearr_11930[17] = inst_11750);
return statearr_11930;
})();var statearr_11931_11999 = state_11871__$1;(statearr_11931_11999[2] = null);
(statearr_11931_11999[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 25))
{var inst_11810 = (state_11871[10]);var inst_11809 = (state_11871[13]);var inst_11812 = (inst_11810 < inst_11809);var inst_11813 = inst_11812;var state_11871__$1 = state_11871;if(cljs.core.truth_(inst_11813))
{var statearr_11932_12000 = state_11871__$1;(statearr_11932_12000[1] = 27);
} else
{var statearr_11933_12001 = state_11871__$1;(statearr_11933_12001[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 26))
{var inst_11799 = (state_11871[19]);var inst_11857 = (state_11871[2]);var inst_11858 = cljs.core.seq.call(null,inst_11799);var state_11871__$1 = (function (){var statearr_11934 = state_11871;(statearr_11934[30] = inst_11857);
return statearr_11934;
})();if(inst_11858)
{var statearr_11935_12002 = state_11871__$1;(statearr_11935_12002[1] = 42);
} else
{var statearr_11936_12003 = state_11871__$1;(statearr_11936_12003[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 27))
{var inst_11810 = (state_11871[10]);var inst_11808 = (state_11871[12]);var inst_11815 = cljs.core._nth.call(null,inst_11808,inst_11810);var state_11871__$1 = (function (){var statearr_11937 = state_11871;(statearr_11937[7] = inst_11815);
return statearr_11937;
})();var statearr_11938_12004 = state_11871__$1;(statearr_11938_12004[2] = null);
(statearr_11938_12004[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 28))
{var inst_11828 = (state_11871[9]);var inst_11807 = (state_11871[11]);var inst_11828__$1 = cljs.core.seq.call(null,inst_11807);var state_11871__$1 = (function (){var statearr_11942 = state_11871;(statearr_11942[9] = inst_11828__$1);
return statearr_11942;
})();if(inst_11828__$1)
{var statearr_11943_12005 = state_11871__$1;(statearr_11943_12005[1] = 33);
} else
{var statearr_11944_12006 = state_11871__$1;(statearr_11944_12006[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 29))
{var inst_11855 = (state_11871[2]);var state_11871__$1 = state_11871;var statearr_11945_12007 = state_11871__$1;(statearr_11945_12007[2] = inst_11855);
(statearr_11945_12007[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 30))
{var inst_11810 = (state_11871[10]);var inst_11807 = (state_11871[11]);var inst_11808 = (state_11871[12]);var inst_11809 = (state_11871[13]);var inst_11824 = (state_11871[2]);var inst_11825 = (inst_11810 + 1);var tmp11939 = inst_11807;var tmp11940 = inst_11808;var tmp11941 = inst_11809;var inst_11807__$1 = tmp11939;var inst_11808__$1 = tmp11940;var inst_11809__$1 = tmp11941;var inst_11810__$1 = inst_11825;var state_11871__$1 = (function (){var statearr_11946 = state_11871;(statearr_11946[31] = inst_11824);
(statearr_11946[10] = inst_11810__$1);
(statearr_11946[11] = inst_11807__$1);
(statearr_11946[12] = inst_11808__$1);
(statearr_11946[13] = inst_11809__$1);
return statearr_11946;
})();var statearr_11947_12008 = state_11871__$1;(statearr_11947_12008[2] = null);
(statearr_11947_12008[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11872 === 31))
{var inst_11815 = (state_11871[7]);var inst_11816 = (state_11871[2]);var inst_11817 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11818 = cljs.core.async.untap_STAR_.call(null,m,inst_11815);var state_11871__$1 = (function (){var statearr_11948 = state_11871;(statearr_11948[32] = inst_11816);
(statearr_11948[33] = inst_11817);
return statearr_11948;
})();var statearr_11949_12009 = state_11871__$1;(statearr_11949_12009[2] = inst_11818);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11871__$1);
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
});})(c__6248__auto___11957,cs,m,dchan,dctr,done))
;return ((function (switch__6233__auto__,c__6248__auto___11957,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_11953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11953[0] = state_machine__6234__auto__);
(statearr_11953[1] = 1);
return statearr_11953;
});
var state_machine__6234__auto____1 = (function (state_11871){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_11871);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e11954){if((e11954 instanceof Object))
{var ex__6237__auto__ = e11954;var statearr_11955_12010 = state_11871;(statearr_11955_12010[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11871);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11954;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12011 = state_11871;
state_11871 = G__12011;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_11871){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_11871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___11957,cs,m,dchan,dctr,done))
})();var state__6250__auto__ = (function (){var statearr_11956 = f__6249__auto__.call(null);(statearr_11956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___11957);
return statearr_11956;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___11957,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj12013 = {};return obj12013;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t12123 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12123 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12124){
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
this.meta12124 = meta12124;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12123.cljs$lang$type = true;
cljs.core.async.t12123.cljs$lang$ctorStr = "cljs.core.async/t12123";
cljs.core.async.t12123.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t12123");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12123.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12123.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12123.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12123.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12123.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12123.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12123.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12123.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12123.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12125){var self__ = this;
var _12125__$1 = this;return self__.meta12124;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12125,meta12124__$1){var self__ = this;
var _12125__$1 = this;return (new cljs.core.async.t12123(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12124__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12123 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12123(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12124){return (new cljs.core.async.t12123(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12124));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12123(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6248__auto___12232 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___12232,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___12232,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12190){var state_val_12191 = (state_12190[1]);if((state_val_12191 === 1))
{var inst_12129 = (state_12190[7]);var inst_12129__$1 = calc_state.call(null);var inst_12130 = cljs.core.seq_QMARK_.call(null,inst_12129__$1);var state_12190__$1 = (function (){var statearr_12192 = state_12190;(statearr_12192[7] = inst_12129__$1);
return statearr_12192;
})();if(inst_12130)
{var statearr_12193_12233 = state_12190__$1;(statearr_12193_12233[1] = 2);
} else
{var statearr_12194_12234 = state_12190__$1;(statearr_12194_12234[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12191 === 2))
{var inst_12129 = (state_12190[7]);var inst_12132 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12129);var state_12190__$1 = state_12190;var statearr_12195_12235 = state_12190__$1;(statearr_12195_12235[2] = inst_12132);
(statearr_12195_12235[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12191 === 3))
{var inst_12129 = (state_12190[7]);var state_12190__$1 = state_12190;var statearr_12196_12236 = state_12190__$1;(statearr_12196_12236[2] = inst_12129);
(statearr_12196_12236[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12191 === 4))
{var inst_12129 = (state_12190[7]);var inst_12135 = (state_12190[2]);var inst_12136 = cljs.core.get.call(null,inst_12135,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12137 = cljs.core.get.call(null,inst_12135,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12138 = cljs.core.get.call(null,inst_12135,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12139 = inst_12129;var state_12190__$1 = (function (){var statearr_12197 = state_12190;(statearr_12197[8] = inst_12138);
(statearr_12197[9] = inst_12139);
(statearr_12197[10] = inst_12137);
(statearr_12197[11] = inst_12136);
return statearr_12197;
})();var statearr_12198_12237 = state_12190__$1;(statearr_12198_12237[2] = null);
(statearr_12198_12237[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12191 === 5))
{var inst_12139 = (state_12190[9]);var inst_12142 = cljs.core.seq_QMARK_.call(null,inst_12139);var state_12190__$1 = state_12190;if(inst_12142)
{var statearr_12199_12238 = state_12190__$1;(statearr_12199_12238[1] = 7);
} else
{var statearr_12200_12239 = state_12190__$1;(statearr_12200_12239[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12191 === 6))
{var inst_12188 = (state_12190[2]);var state_12190__$1 = state_12190;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12190__$1,inst_12188);
} else
{if((state_val_12191 === 7))
{var inst_12139 = (state_12190[9]);var inst_12144 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12139);var state_12190__$1 = state_12190;var statearr_12201_12240 = state_12190__$1;(statearr_12201_12240[2] = inst_12144);
(statearr_12201_12240[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12191 === 8))
{var inst_12139 = (state_12190[9]);var state_12190__$1 = state_12190;var statearr_12202_12241 = state_12190__$1;(statearr_12202_12241[2] = inst_12139);
(statearr_12202_12241[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12191 === 9))
{var inst_12147 = (state_12190[12]);var inst_12147__$1 = (state_12190[2]);var inst_12148 = cljs.core.get.call(null,inst_12147__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12149 = cljs.core.get.call(null,inst_12147__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12150 = cljs.core.get.call(null,inst_12147__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12190__$1 = (function (){var statearr_12203 = state_12190;(statearr_12203[13] = inst_12149);
(statearr_12203[12] = inst_12147__$1);
(statearr_12203[14] = inst_12150);
return statearr_12203;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12190__$1,10,inst_12148);
} else
{if((state_val_12191 === 10))
{var inst_12154 = (state_12190[15]);var inst_12155 = (state_12190[16]);var inst_12153 = (state_12190[2]);var inst_12154__$1 = cljs.core.nth.call(null,inst_12153,0,null);var inst_12155__$1 = cljs.core.nth.call(null,inst_12153,1,null);var inst_12156 = (inst_12154__$1 == null);var inst_12157 = cljs.core._EQ_.call(null,inst_12155__$1,change);var inst_12158 = (inst_12156) || (inst_12157);var state_12190__$1 = (function (){var statearr_12204 = state_12190;(statearr_12204[15] = inst_12154__$1);
(statearr_12204[16] = inst_12155__$1);
return statearr_12204;
})();if(cljs.core.truth_(inst_12158))
{var statearr_12205_12242 = state_12190__$1;(statearr_12205_12242[1] = 11);
} else
{var statearr_12206_12243 = state_12190__$1;(statearr_12206_12243[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12191 === 11))
{var inst_12154 = (state_12190[15]);var inst_12160 = (inst_12154 == null);var state_12190__$1 = state_12190;if(cljs.core.truth_(inst_12160))
{var statearr_12207_12244 = state_12190__$1;(statearr_12207_12244[1] = 14);
} else
{var statearr_12208_12245 = state_12190__$1;(statearr_12208_12245[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12191 === 12))
{var inst_12155 = (state_12190[16]);var inst_12150 = (state_12190[14]);var inst_12169 = (state_12190[17]);var inst_12169__$1 = inst_12150.call(null,inst_12155);var state_12190__$1 = (function (){var statearr_12209 = state_12190;(statearr_12209[17] = inst_12169__$1);
return statearr_12209;
})();if(cljs.core.truth_(inst_12169__$1))
{var statearr_12210_12246 = state_12190__$1;(statearr_12210_12246[1] = 17);
} else
{var statearr_12211_12247 = state_12190__$1;(statearr_12211_12247[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12191 === 13))
{var inst_12186 = (state_12190[2]);var state_12190__$1 = state_12190;var statearr_12212_12248 = state_12190__$1;(statearr_12212_12248[2] = inst_12186);
(statearr_12212_12248[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12191 === 14))
{var inst_12155 = (state_12190[16]);var inst_12162 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12155);var state_12190__$1 = state_12190;var statearr_12213_12249 = state_12190__$1;(statearr_12213_12249[2] = inst_12162);
(statearr_12213_12249[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12191 === 15))
{var state_12190__$1 = state_12190;var statearr_12214_12250 = state_12190__$1;(statearr_12214_12250[2] = null);
(statearr_12214_12250[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12191 === 16))
{var inst_12165 = (state_12190[2]);var inst_12166 = calc_state.call(null);var inst_12139 = inst_12166;var state_12190__$1 = (function (){var statearr_12215 = state_12190;(statearr_12215[9] = inst_12139);
(statearr_12215[18] = inst_12165);
return statearr_12215;
})();var statearr_12216_12251 = state_12190__$1;(statearr_12216_12251[2] = null);
(statearr_12216_12251[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12191 === 17))
{var inst_12169 = (state_12190[17]);var state_12190__$1 = state_12190;var statearr_12217_12252 = state_12190__$1;(statearr_12217_12252[2] = inst_12169);
(statearr_12217_12252[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12191 === 18))
{var inst_12149 = (state_12190[13]);var inst_12155 = (state_12190[16]);var inst_12150 = (state_12190[14]);var inst_12172 = cljs.core.empty_QMARK_.call(null,inst_12150);var inst_12173 = inst_12149.call(null,inst_12155);var inst_12174 = cljs.core.not.call(null,inst_12173);var inst_12175 = (inst_12172) && (inst_12174);var state_12190__$1 = state_12190;var statearr_12218_12253 = state_12190__$1;(statearr_12218_12253[2] = inst_12175);
(statearr_12218_12253[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12191 === 19))
{var inst_12177 = (state_12190[2]);var state_12190__$1 = state_12190;if(cljs.core.truth_(inst_12177))
{var statearr_12219_12254 = state_12190__$1;(statearr_12219_12254[1] = 20);
} else
{var statearr_12220_12255 = state_12190__$1;(statearr_12220_12255[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12191 === 20))
{var inst_12154 = (state_12190[15]);var state_12190__$1 = state_12190;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12190__$1,23,out,inst_12154);
} else
{if((state_val_12191 === 21))
{var state_12190__$1 = state_12190;var statearr_12221_12256 = state_12190__$1;(statearr_12221_12256[2] = null);
(statearr_12221_12256[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12191 === 22))
{var inst_12147 = (state_12190[12]);var inst_12183 = (state_12190[2]);var inst_12139 = inst_12147;var state_12190__$1 = (function (){var statearr_12222 = state_12190;(statearr_12222[19] = inst_12183);
(statearr_12222[9] = inst_12139);
return statearr_12222;
})();var statearr_12223_12257 = state_12190__$1;(statearr_12223_12257[2] = null);
(statearr_12223_12257[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12191 === 23))
{var inst_12180 = (state_12190[2]);var state_12190__$1 = state_12190;var statearr_12224_12258 = state_12190__$1;(statearr_12224_12258[2] = inst_12180);
(statearr_12224_12258[1] = 22);
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
});})(c__6248__auto___12232,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6233__auto__,c__6248__auto___12232,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_12228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12228[0] = state_machine__6234__auto__);
(statearr_12228[1] = 1);
return statearr_12228;
});
var state_machine__6234__auto____1 = (function (state_12190){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_12190);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e12229){if((e12229 instanceof Object))
{var ex__6237__auto__ = e12229;var statearr_12230_12259 = state_12190;(statearr_12230_12259[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12190);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12229;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12260 = state_12190;
state_12190 = G__12260;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_12190){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_12190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___12232,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6250__auto__ = (function (){var statearr_12231 = f__6249__auto__.call(null);(statearr_12231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___12232);
return statearr_12231;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___12232,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj12262 = {};return obj12262;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3466__auto__ = p;if(and__3466__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3466__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4105__auto__ = (((p == null))?null:p);return (function (){var or__3478__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3466__auto__ = p;if(and__3466__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3466__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4105__auto__ = (((p == null))?null:p);return (function (){var or__3478__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3466__auto__ = p;if(and__3466__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3466__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4105__auto__ = (((p == null))?null:p);return (function (){var or__3478__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3466__auto__ = p;if(and__3466__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3466__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4105__auto__ = (((p == null))?null:p);return (function (){var or__3478__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
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
return (function (topic){var or__3478__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3478__auto__,mults){
return (function (p1__12263_SHARP_){if(cljs.core.truth_(p1__12263_SHARP_.call(null,topic)))
{return p1__12263_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12263_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3478__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12388 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12388 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12389){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12389 = meta12389;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12388.cljs$lang$type = true;
cljs.core.async.t12388.cljs$lang$ctorStr = "cljs.core.async/t12388";
cljs.core.async.t12388.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t12388");
});})(mults,ensure_mult))
;
cljs.core.async.t12388.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12388.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12388.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12388.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12388.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12388.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12388.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12388.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12390){var self__ = this;
var _12390__$1 = this;return self__.meta12389;
});})(mults,ensure_mult))
;
cljs.core.async.t12388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12390,meta12389__$1){var self__ = this;
var _12390__$1 = this;return (new cljs.core.async.t12388(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12389__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12388 = ((function (mults,ensure_mult){
return (function __GT_t12388(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12389){return (new cljs.core.async.t12388(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12389));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12388(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6248__auto___12512 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___12512,mults,ensure_mult,p){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___12512,mults,ensure_mult,p){
return (function (state_12464){var state_val_12465 = (state_12464[1]);if((state_val_12465 === 1))
{var state_12464__$1 = state_12464;var statearr_12466_12513 = state_12464__$1;(statearr_12466_12513[2] = null);
(statearr_12466_12513[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12465 === 2))
{var state_12464__$1 = state_12464;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12464__$1,4,ch);
} else
{if((state_val_12465 === 3))
{var inst_12462 = (state_12464[2]);var state_12464__$1 = state_12464;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12464__$1,inst_12462);
} else
{if((state_val_12465 === 4))
{var inst_12393 = (state_12464[7]);var inst_12393__$1 = (state_12464[2]);var inst_12394 = (inst_12393__$1 == null);var state_12464__$1 = (function (){var statearr_12467 = state_12464;(statearr_12467[7] = inst_12393__$1);
return statearr_12467;
})();if(cljs.core.truth_(inst_12394))
{var statearr_12468_12514 = state_12464__$1;(statearr_12468_12514[1] = 5);
} else
{var statearr_12469_12515 = state_12464__$1;(statearr_12469_12515[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12465 === 5))
{var inst_12400 = cljs.core.deref.call(null,mults);var inst_12401 = cljs.core.vals.call(null,inst_12400);var inst_12402 = cljs.core.seq.call(null,inst_12401);var inst_12403 = inst_12402;var inst_12404 = null;var inst_12405 = 0;var inst_12406 = 0;var state_12464__$1 = (function (){var statearr_12470 = state_12464;(statearr_12470[8] = inst_12406);
(statearr_12470[9] = inst_12403);
(statearr_12470[10] = inst_12404);
(statearr_12470[11] = inst_12405);
return statearr_12470;
})();var statearr_12471_12516 = state_12464__$1;(statearr_12471_12516[2] = null);
(statearr_12471_12516[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12465 === 6))
{var inst_12393 = (state_12464[7]);var inst_12441 = (state_12464[12]);var inst_12443 = (state_12464[13]);var inst_12441__$1 = topic_fn.call(null,inst_12393);var inst_12442 = cljs.core.deref.call(null,mults);var inst_12443__$1 = cljs.core.get.call(null,inst_12442,inst_12441__$1);var state_12464__$1 = (function (){var statearr_12472 = state_12464;(statearr_12472[12] = inst_12441__$1);
(statearr_12472[13] = inst_12443__$1);
return statearr_12472;
})();if(cljs.core.truth_(inst_12443__$1))
{var statearr_12473_12517 = state_12464__$1;(statearr_12473_12517[1] = 19);
} else
{var statearr_12474_12518 = state_12464__$1;(statearr_12474_12518[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12465 === 7))
{var inst_12460 = (state_12464[2]);var state_12464__$1 = state_12464;var statearr_12475_12519 = state_12464__$1;(statearr_12475_12519[2] = inst_12460);
(statearr_12475_12519[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12465 === 8))
{var inst_12406 = (state_12464[8]);var inst_12405 = (state_12464[11]);var inst_12408 = (inst_12406 < inst_12405);var inst_12409 = inst_12408;var state_12464__$1 = state_12464;if(cljs.core.truth_(inst_12409))
{var statearr_12479_12520 = state_12464__$1;(statearr_12479_12520[1] = 10);
} else
{var statearr_12480_12521 = state_12464__$1;(statearr_12480_12521[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12465 === 9))
{var inst_12439 = (state_12464[2]);var state_12464__$1 = state_12464;var statearr_12481_12522 = state_12464__$1;(statearr_12481_12522[2] = inst_12439);
(statearr_12481_12522[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12465 === 10))
{var inst_12406 = (state_12464[8]);var inst_12403 = (state_12464[9]);var inst_12404 = (state_12464[10]);var inst_12405 = (state_12464[11]);var inst_12411 = cljs.core._nth.call(null,inst_12404,inst_12406);var inst_12412 = cljs.core.async.muxch_STAR_.call(null,inst_12411);var inst_12413 = cljs.core.async.close_BANG_.call(null,inst_12412);var inst_12414 = (inst_12406 + 1);var tmp12476 = inst_12403;var tmp12477 = inst_12404;var tmp12478 = inst_12405;var inst_12403__$1 = tmp12476;var inst_12404__$1 = tmp12477;var inst_12405__$1 = tmp12478;var inst_12406__$1 = inst_12414;var state_12464__$1 = (function (){var statearr_12482 = state_12464;(statearr_12482[8] = inst_12406__$1);
(statearr_12482[14] = inst_12413);
(statearr_12482[9] = inst_12403__$1);
(statearr_12482[10] = inst_12404__$1);
(statearr_12482[11] = inst_12405__$1);
return statearr_12482;
})();var statearr_12483_12523 = state_12464__$1;(statearr_12483_12523[2] = null);
(statearr_12483_12523[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12465 === 11))
{var inst_12417 = (state_12464[15]);var inst_12403 = (state_12464[9]);var inst_12417__$1 = cljs.core.seq.call(null,inst_12403);var state_12464__$1 = (function (){var statearr_12484 = state_12464;(statearr_12484[15] = inst_12417__$1);
return statearr_12484;
})();if(inst_12417__$1)
{var statearr_12485_12524 = state_12464__$1;(statearr_12485_12524[1] = 13);
} else
{var statearr_12486_12525 = state_12464__$1;(statearr_12486_12525[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12465 === 12))
{var inst_12437 = (state_12464[2]);var state_12464__$1 = state_12464;var statearr_12487_12526 = state_12464__$1;(statearr_12487_12526[2] = inst_12437);
(statearr_12487_12526[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12465 === 13))
{var inst_12417 = (state_12464[15]);var inst_12419 = cljs.core.chunked_seq_QMARK_.call(null,inst_12417);var state_12464__$1 = state_12464;if(inst_12419)
{var statearr_12488_12527 = state_12464__$1;(statearr_12488_12527[1] = 16);
} else
{var statearr_12489_12528 = state_12464__$1;(statearr_12489_12528[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12465 === 14))
{var state_12464__$1 = state_12464;var statearr_12490_12529 = state_12464__$1;(statearr_12490_12529[2] = null);
(statearr_12490_12529[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12465 === 15))
{var inst_12435 = (state_12464[2]);var state_12464__$1 = state_12464;var statearr_12491_12530 = state_12464__$1;(statearr_12491_12530[2] = inst_12435);
(statearr_12491_12530[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12465 === 16))
{var inst_12417 = (state_12464[15]);var inst_12421 = cljs.core.chunk_first.call(null,inst_12417);var inst_12422 = cljs.core.chunk_rest.call(null,inst_12417);var inst_12423 = cljs.core.count.call(null,inst_12421);var inst_12403 = inst_12422;var inst_12404 = inst_12421;var inst_12405 = inst_12423;var inst_12406 = 0;var state_12464__$1 = (function (){var statearr_12492 = state_12464;(statearr_12492[8] = inst_12406);
(statearr_12492[9] = inst_12403);
(statearr_12492[10] = inst_12404);
(statearr_12492[11] = inst_12405);
return statearr_12492;
})();var statearr_12493_12531 = state_12464__$1;(statearr_12493_12531[2] = null);
(statearr_12493_12531[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12465 === 17))
{var inst_12417 = (state_12464[15]);var inst_12426 = cljs.core.first.call(null,inst_12417);var inst_12427 = cljs.core.async.muxch_STAR_.call(null,inst_12426);var inst_12428 = cljs.core.async.close_BANG_.call(null,inst_12427);var inst_12429 = cljs.core.next.call(null,inst_12417);var inst_12403 = inst_12429;var inst_12404 = null;var inst_12405 = 0;var inst_12406 = 0;var state_12464__$1 = (function (){var statearr_12494 = state_12464;(statearr_12494[8] = inst_12406);
(statearr_12494[9] = inst_12403);
(statearr_12494[10] = inst_12404);
(statearr_12494[11] = inst_12405);
(statearr_12494[16] = inst_12428);
return statearr_12494;
})();var statearr_12495_12532 = state_12464__$1;(statearr_12495_12532[2] = null);
(statearr_12495_12532[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12465 === 18))
{var inst_12432 = (state_12464[2]);var state_12464__$1 = state_12464;var statearr_12496_12533 = state_12464__$1;(statearr_12496_12533[2] = inst_12432);
(statearr_12496_12533[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12465 === 19))
{var state_12464__$1 = state_12464;var statearr_12497_12534 = state_12464__$1;(statearr_12497_12534[2] = null);
(statearr_12497_12534[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12465 === 20))
{var state_12464__$1 = state_12464;var statearr_12498_12535 = state_12464__$1;(statearr_12498_12535[2] = null);
(statearr_12498_12535[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12465 === 21))
{var inst_12457 = (state_12464[2]);var state_12464__$1 = (function (){var statearr_12499 = state_12464;(statearr_12499[17] = inst_12457);
return statearr_12499;
})();var statearr_12500_12536 = state_12464__$1;(statearr_12500_12536[2] = null);
(statearr_12500_12536[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12465 === 22))
{var inst_12454 = (state_12464[2]);var state_12464__$1 = state_12464;var statearr_12501_12537 = state_12464__$1;(statearr_12501_12537[2] = inst_12454);
(statearr_12501_12537[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12465 === 23))
{var inst_12441 = (state_12464[12]);var inst_12445 = (state_12464[2]);var inst_12446 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12441);var state_12464__$1 = (function (){var statearr_12502 = state_12464;(statearr_12502[18] = inst_12445);
return statearr_12502;
})();var statearr_12503_12538 = state_12464__$1;(statearr_12503_12538[2] = inst_12446);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12464__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12465 === 24))
{var inst_12393 = (state_12464[7]);var inst_12443 = (state_12464[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12464,23,Object,null,22);var inst_12450 = cljs.core.async.muxch_STAR_.call(null,inst_12443);var state_12464__$1 = state_12464;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12464__$1,25,inst_12450,inst_12393);
} else
{if((state_val_12465 === 25))
{var inst_12452 = (state_12464[2]);var state_12464__$1 = state_12464;var statearr_12504_12539 = state_12464__$1;(statearr_12504_12539[2] = inst_12452);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12464__$1);
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
});})(c__6248__auto___12512,mults,ensure_mult,p))
;return ((function (switch__6233__auto__,c__6248__auto___12512,mults,ensure_mult,p){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_12508 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12508[0] = state_machine__6234__auto__);
(statearr_12508[1] = 1);
return statearr_12508;
});
var state_machine__6234__auto____1 = (function (state_12464){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_12464);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e12509){if((e12509 instanceof Object))
{var ex__6237__auto__ = e12509;var statearr_12510_12540 = state_12464;(statearr_12510_12540[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12464);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12509;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12541 = state_12464;
state_12464 = G__12541;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_12464){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_12464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___12512,mults,ensure_mult,p))
})();var state__6250__auto__ = (function (){var statearr_12511 = f__6249__auto__.call(null);(statearr_12511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___12512);
return statearr_12511;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___12512,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__6248__auto___12678 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___12678,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___12678,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12648){var state_val_12649 = (state_12648[1]);if((state_val_12649 === 1))
{var state_12648__$1 = state_12648;var statearr_12650_12679 = state_12648__$1;(statearr_12650_12679[2] = null);
(statearr_12650_12679[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12649 === 2))
{var inst_12611 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12612 = 0;var state_12648__$1 = (function (){var statearr_12651 = state_12648;(statearr_12651[7] = inst_12611);
(statearr_12651[8] = inst_12612);
return statearr_12651;
})();var statearr_12652_12680 = state_12648__$1;(statearr_12652_12680[2] = null);
(statearr_12652_12680[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12649 === 3))
{var inst_12646 = (state_12648[2]);var state_12648__$1 = state_12648;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12648__$1,inst_12646);
} else
{if((state_val_12649 === 4))
{var inst_12612 = (state_12648[8]);var inst_12614 = (inst_12612 < cnt);var state_12648__$1 = state_12648;if(cljs.core.truth_(inst_12614))
{var statearr_12653_12681 = state_12648__$1;(statearr_12653_12681[1] = 6);
} else
{var statearr_12654_12682 = state_12648__$1;(statearr_12654_12682[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12649 === 5))
{var inst_12632 = (state_12648[2]);var state_12648__$1 = (function (){var statearr_12655 = state_12648;(statearr_12655[9] = inst_12632);
return statearr_12655;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12648__$1,12,dchan);
} else
{if((state_val_12649 === 6))
{var state_12648__$1 = state_12648;var statearr_12656_12683 = state_12648__$1;(statearr_12656_12683[2] = null);
(statearr_12656_12683[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12649 === 7))
{var state_12648__$1 = state_12648;var statearr_12657_12684 = state_12648__$1;(statearr_12657_12684[2] = null);
(statearr_12657_12684[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12649 === 8))
{var inst_12630 = (state_12648[2]);var state_12648__$1 = state_12648;var statearr_12658_12685 = state_12648__$1;(statearr_12658_12685[2] = inst_12630);
(statearr_12658_12685[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12649 === 9))
{var inst_12612 = (state_12648[8]);var inst_12625 = (state_12648[2]);var inst_12626 = (inst_12612 + 1);var inst_12612__$1 = inst_12626;var state_12648__$1 = (function (){var statearr_12659 = state_12648;(statearr_12659[10] = inst_12625);
(statearr_12659[8] = inst_12612__$1);
return statearr_12659;
})();var statearr_12660_12686 = state_12648__$1;(statearr_12660_12686[2] = null);
(statearr_12660_12686[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12649 === 10))
{var inst_12616 = (state_12648[2]);var inst_12617 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12648__$1 = (function (){var statearr_12661 = state_12648;(statearr_12661[11] = inst_12616);
return statearr_12661;
})();var statearr_12662_12687 = state_12648__$1;(statearr_12662_12687[2] = inst_12617);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12648__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12649 === 11))
{var inst_12612 = (state_12648[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12648,10,Object,null,9);var inst_12621 = chs__$1.call(null,inst_12612);var inst_12622 = done.call(null,inst_12612);var inst_12623 = cljs.core.async.take_BANG_.call(null,inst_12621,inst_12622);var state_12648__$1 = state_12648;var statearr_12663_12688 = state_12648__$1;(statearr_12663_12688[2] = inst_12623);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12648__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12649 === 12))
{var inst_12634 = (state_12648[12]);var inst_12634__$1 = (state_12648[2]);var inst_12635 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12634__$1);var state_12648__$1 = (function (){var statearr_12664 = state_12648;(statearr_12664[12] = inst_12634__$1);
return statearr_12664;
})();if(cljs.core.truth_(inst_12635))
{var statearr_12665_12689 = state_12648__$1;(statearr_12665_12689[1] = 13);
} else
{var statearr_12666_12690 = state_12648__$1;(statearr_12666_12690[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12649 === 13))
{var inst_12637 = cljs.core.async.close_BANG_.call(null,out);var state_12648__$1 = state_12648;var statearr_12667_12691 = state_12648__$1;(statearr_12667_12691[2] = inst_12637);
(statearr_12667_12691[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12649 === 14))
{var inst_12634 = (state_12648[12]);var inst_12639 = cljs.core.apply.call(null,f,inst_12634);var state_12648__$1 = state_12648;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12648__$1,16,out,inst_12639);
} else
{if((state_val_12649 === 15))
{var inst_12644 = (state_12648[2]);var state_12648__$1 = state_12648;var statearr_12668_12692 = state_12648__$1;(statearr_12668_12692[2] = inst_12644);
(statearr_12668_12692[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12649 === 16))
{var inst_12641 = (state_12648[2]);var state_12648__$1 = (function (){var statearr_12669 = state_12648;(statearr_12669[13] = inst_12641);
return statearr_12669;
})();var statearr_12670_12693 = state_12648__$1;(statearr_12670_12693[2] = null);
(statearr_12670_12693[1] = 2);
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
});})(c__6248__auto___12678,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6233__auto__,c__6248__auto___12678,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_12674 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12674[0] = state_machine__6234__auto__);
(statearr_12674[1] = 1);
return statearr_12674;
});
var state_machine__6234__auto____1 = (function (state_12648){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_12648);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e12675){if((e12675 instanceof Object))
{var ex__6237__auto__ = e12675;var statearr_12676_12694 = state_12648;(statearr_12676_12694[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12648);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12675;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12695 = state_12648;
state_12648 = G__12695;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_12648){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_12648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___12678,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6250__auto__ = (function (){var statearr_12677 = f__6249__auto__.call(null);(statearr_12677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___12678);
return statearr_12677;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___12678,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6248__auto___12803 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___12803,out){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___12803,out){
return (function (state_12779){var state_val_12780 = (state_12779[1]);if((state_val_12780 === 1))
{var inst_12750 = cljs.core.vec.call(null,chs);var inst_12751 = inst_12750;var state_12779__$1 = (function (){var statearr_12781 = state_12779;(statearr_12781[7] = inst_12751);
return statearr_12781;
})();var statearr_12782_12804 = state_12779__$1;(statearr_12782_12804[2] = null);
(statearr_12782_12804[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12780 === 2))
{var inst_12751 = (state_12779[7]);var inst_12753 = cljs.core.count.call(null,inst_12751);var inst_12754 = (inst_12753 > 0);var state_12779__$1 = state_12779;if(cljs.core.truth_(inst_12754))
{var statearr_12783_12805 = state_12779__$1;(statearr_12783_12805[1] = 4);
} else
{var statearr_12784_12806 = state_12779__$1;(statearr_12784_12806[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12780 === 3))
{var inst_12777 = (state_12779[2]);var state_12779__$1 = state_12779;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12779__$1,inst_12777);
} else
{if((state_val_12780 === 4))
{var inst_12751 = (state_12779[7]);var state_12779__$1 = state_12779;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12779__$1,7,inst_12751);
} else
{if((state_val_12780 === 5))
{var inst_12773 = cljs.core.async.close_BANG_.call(null,out);var state_12779__$1 = state_12779;var statearr_12785_12807 = state_12779__$1;(statearr_12785_12807[2] = inst_12773);
(statearr_12785_12807[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12780 === 6))
{var inst_12775 = (state_12779[2]);var state_12779__$1 = state_12779;var statearr_12786_12808 = state_12779__$1;(statearr_12786_12808[2] = inst_12775);
(statearr_12786_12808[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12780 === 7))
{var inst_12759 = (state_12779[8]);var inst_12758 = (state_12779[9]);var inst_12758__$1 = (state_12779[2]);var inst_12759__$1 = cljs.core.nth.call(null,inst_12758__$1,0,null);var inst_12760 = cljs.core.nth.call(null,inst_12758__$1,1,null);var inst_12761 = (inst_12759__$1 == null);var state_12779__$1 = (function (){var statearr_12787 = state_12779;(statearr_12787[8] = inst_12759__$1);
(statearr_12787[9] = inst_12758__$1);
(statearr_12787[10] = inst_12760);
return statearr_12787;
})();if(cljs.core.truth_(inst_12761))
{var statearr_12788_12809 = state_12779__$1;(statearr_12788_12809[1] = 8);
} else
{var statearr_12789_12810 = state_12779__$1;(statearr_12789_12810[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12780 === 8))
{var inst_12759 = (state_12779[8]);var inst_12758 = (state_12779[9]);var inst_12751 = (state_12779[7]);var inst_12760 = (state_12779[10]);var inst_12763 = (function (){var c = inst_12760;var v = inst_12759;var vec__12756 = inst_12758;var cs = inst_12751;return ((function (c,v,vec__12756,cs,inst_12759,inst_12758,inst_12751,inst_12760,state_val_12780,c__6248__auto___12803,out){
return (function (p1__12696_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12696_SHARP_);
});
;})(c,v,vec__12756,cs,inst_12759,inst_12758,inst_12751,inst_12760,state_val_12780,c__6248__auto___12803,out))
})();var inst_12764 = cljs.core.filterv.call(null,inst_12763,inst_12751);var inst_12751__$1 = inst_12764;var state_12779__$1 = (function (){var statearr_12790 = state_12779;(statearr_12790[7] = inst_12751__$1);
return statearr_12790;
})();var statearr_12791_12811 = state_12779__$1;(statearr_12791_12811[2] = null);
(statearr_12791_12811[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12780 === 9))
{var inst_12759 = (state_12779[8]);var state_12779__$1 = state_12779;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12779__$1,11,out,inst_12759);
} else
{if((state_val_12780 === 10))
{var inst_12771 = (state_12779[2]);var state_12779__$1 = state_12779;var statearr_12793_12812 = state_12779__$1;(statearr_12793_12812[2] = inst_12771);
(statearr_12793_12812[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12780 === 11))
{var inst_12751 = (state_12779[7]);var inst_12768 = (state_12779[2]);var tmp12792 = inst_12751;var inst_12751__$1 = tmp12792;var state_12779__$1 = (function (){var statearr_12794 = state_12779;(statearr_12794[7] = inst_12751__$1);
(statearr_12794[11] = inst_12768);
return statearr_12794;
})();var statearr_12795_12813 = state_12779__$1;(statearr_12795_12813[2] = null);
(statearr_12795_12813[1] = 2);
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
});})(c__6248__auto___12803,out))
;return ((function (switch__6233__auto__,c__6248__auto___12803,out){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_12799 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12799[0] = state_machine__6234__auto__);
(statearr_12799[1] = 1);
return statearr_12799;
});
var state_machine__6234__auto____1 = (function (state_12779){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_12779);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e12800){if((e12800 instanceof Object))
{var ex__6237__auto__ = e12800;var statearr_12801_12814 = state_12779;(statearr_12801_12814[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12779);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12800;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12815 = state_12779;
state_12779 = G__12815;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_12779){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_12779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___12803,out))
})();var state__6250__auto__ = (function (){var statearr_12802 = f__6249__auto__.call(null);(statearr_12802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___12803);
return statearr_12802;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___12803,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6248__auto___12908 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___12908,out){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___12908,out){
return (function (state_12885){var state_val_12886 = (state_12885[1]);if((state_val_12886 === 1))
{var inst_12862 = 0;var state_12885__$1 = (function (){var statearr_12887 = state_12885;(statearr_12887[7] = inst_12862);
return statearr_12887;
})();var statearr_12888_12909 = state_12885__$1;(statearr_12888_12909[2] = null);
(statearr_12888_12909[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12886 === 2))
{var inst_12862 = (state_12885[7]);var inst_12864 = (inst_12862 < n);var state_12885__$1 = state_12885;if(cljs.core.truth_(inst_12864))
{var statearr_12889_12910 = state_12885__$1;(statearr_12889_12910[1] = 4);
} else
{var statearr_12890_12911 = state_12885__$1;(statearr_12890_12911[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12886 === 3))
{var inst_12882 = (state_12885[2]);var inst_12883 = cljs.core.async.close_BANG_.call(null,out);var state_12885__$1 = (function (){var statearr_12891 = state_12885;(statearr_12891[8] = inst_12882);
return statearr_12891;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12885__$1,inst_12883);
} else
{if((state_val_12886 === 4))
{var state_12885__$1 = state_12885;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12885__$1,7,ch);
} else
{if((state_val_12886 === 5))
{var state_12885__$1 = state_12885;var statearr_12892_12912 = state_12885__$1;(statearr_12892_12912[2] = null);
(statearr_12892_12912[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12886 === 6))
{var inst_12880 = (state_12885[2]);var state_12885__$1 = state_12885;var statearr_12893_12913 = state_12885__$1;(statearr_12893_12913[2] = inst_12880);
(statearr_12893_12913[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12886 === 7))
{var inst_12867 = (state_12885[9]);var inst_12867__$1 = (state_12885[2]);var inst_12868 = (inst_12867__$1 == null);var inst_12869 = cljs.core.not.call(null,inst_12868);var state_12885__$1 = (function (){var statearr_12894 = state_12885;(statearr_12894[9] = inst_12867__$1);
return statearr_12894;
})();if(inst_12869)
{var statearr_12895_12914 = state_12885__$1;(statearr_12895_12914[1] = 8);
} else
{var statearr_12896_12915 = state_12885__$1;(statearr_12896_12915[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12886 === 8))
{var inst_12867 = (state_12885[9]);var state_12885__$1 = state_12885;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12885__$1,11,out,inst_12867);
} else
{if((state_val_12886 === 9))
{var state_12885__$1 = state_12885;var statearr_12897_12916 = state_12885__$1;(statearr_12897_12916[2] = null);
(statearr_12897_12916[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12886 === 10))
{var inst_12877 = (state_12885[2]);var state_12885__$1 = state_12885;var statearr_12898_12917 = state_12885__$1;(statearr_12898_12917[2] = inst_12877);
(statearr_12898_12917[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12886 === 11))
{var inst_12862 = (state_12885[7]);var inst_12872 = (state_12885[2]);var inst_12873 = (inst_12862 + 1);var inst_12862__$1 = inst_12873;var state_12885__$1 = (function (){var statearr_12899 = state_12885;(statearr_12899[10] = inst_12872);
(statearr_12899[7] = inst_12862__$1);
return statearr_12899;
})();var statearr_12900_12918 = state_12885__$1;(statearr_12900_12918[2] = null);
(statearr_12900_12918[1] = 2);
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
});})(c__6248__auto___12908,out))
;return ((function (switch__6233__auto__,c__6248__auto___12908,out){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_12904 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12904[0] = state_machine__6234__auto__);
(statearr_12904[1] = 1);
return statearr_12904;
});
var state_machine__6234__auto____1 = (function (state_12885){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_12885);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e12905){if((e12905 instanceof Object))
{var ex__6237__auto__ = e12905;var statearr_12906_12919 = state_12885;(statearr_12906_12919[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12885);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12905;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12920 = state_12885;
state_12885 = G__12920;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_12885){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_12885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___12908,out))
})();var state__6250__auto__ = (function (){var statearr_12907 = f__6249__auto__.call(null);(statearr_12907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___12908);
return statearr_12907;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___12908,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6248__auto___13017 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___13017,out){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___13017,out){
return (function (state_12992){var state_val_12993 = (state_12992[1]);if((state_val_12993 === 1))
{var inst_12969 = null;var state_12992__$1 = (function (){var statearr_12994 = state_12992;(statearr_12994[7] = inst_12969);
return statearr_12994;
})();var statearr_12995_13018 = state_12992__$1;(statearr_12995_13018[2] = null);
(statearr_12995_13018[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12993 === 2))
{var state_12992__$1 = state_12992;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12992__$1,4,ch);
} else
{if((state_val_12993 === 3))
{var inst_12989 = (state_12992[2]);var inst_12990 = cljs.core.async.close_BANG_.call(null,out);var state_12992__$1 = (function (){var statearr_12996 = state_12992;(statearr_12996[8] = inst_12989);
return statearr_12996;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12992__$1,inst_12990);
} else
{if((state_val_12993 === 4))
{var inst_12972 = (state_12992[9]);var inst_12972__$1 = (state_12992[2]);var inst_12973 = (inst_12972__$1 == null);var inst_12974 = cljs.core.not.call(null,inst_12973);var state_12992__$1 = (function (){var statearr_12997 = state_12992;(statearr_12997[9] = inst_12972__$1);
return statearr_12997;
})();if(inst_12974)
{var statearr_12998_13019 = state_12992__$1;(statearr_12998_13019[1] = 5);
} else
{var statearr_12999_13020 = state_12992__$1;(statearr_12999_13020[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12993 === 5))
{var inst_12969 = (state_12992[7]);var inst_12972 = (state_12992[9]);var inst_12976 = cljs.core._EQ_.call(null,inst_12972,inst_12969);var state_12992__$1 = state_12992;if(inst_12976)
{var statearr_13000_13021 = state_12992__$1;(statearr_13000_13021[1] = 8);
} else
{var statearr_13001_13022 = state_12992__$1;(statearr_13001_13022[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12993 === 6))
{var state_12992__$1 = state_12992;var statearr_13003_13023 = state_12992__$1;(statearr_13003_13023[2] = null);
(statearr_13003_13023[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12993 === 7))
{var inst_12987 = (state_12992[2]);var state_12992__$1 = state_12992;var statearr_13004_13024 = state_12992__$1;(statearr_13004_13024[2] = inst_12987);
(statearr_13004_13024[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12993 === 8))
{var inst_12969 = (state_12992[7]);var tmp13002 = inst_12969;var inst_12969__$1 = tmp13002;var state_12992__$1 = (function (){var statearr_13005 = state_12992;(statearr_13005[7] = inst_12969__$1);
return statearr_13005;
})();var statearr_13006_13025 = state_12992__$1;(statearr_13006_13025[2] = null);
(statearr_13006_13025[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12993 === 9))
{var inst_12972 = (state_12992[9]);var state_12992__$1 = state_12992;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12992__$1,11,out,inst_12972);
} else
{if((state_val_12993 === 10))
{var inst_12984 = (state_12992[2]);var state_12992__$1 = state_12992;var statearr_13007_13026 = state_12992__$1;(statearr_13007_13026[2] = inst_12984);
(statearr_13007_13026[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12993 === 11))
{var inst_12972 = (state_12992[9]);var inst_12981 = (state_12992[2]);var inst_12969 = inst_12972;var state_12992__$1 = (function (){var statearr_13008 = state_12992;(statearr_13008[7] = inst_12969);
(statearr_13008[10] = inst_12981);
return statearr_13008;
})();var statearr_13009_13027 = state_12992__$1;(statearr_13009_13027[2] = null);
(statearr_13009_13027[1] = 2);
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
});})(c__6248__auto___13017,out))
;return ((function (switch__6233__auto__,c__6248__auto___13017,out){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_13013 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13013[0] = state_machine__6234__auto__);
(statearr_13013[1] = 1);
return statearr_13013;
});
var state_machine__6234__auto____1 = (function (state_12992){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_12992);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e13014){if((e13014 instanceof Object))
{var ex__6237__auto__ = e13014;var statearr_13015_13028 = state_12992;(statearr_13015_13028[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12992);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13014;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13029 = state_12992;
state_12992 = G__13029;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_12992){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_12992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___13017,out))
})();var state__6250__auto__ = (function (){var statearr_13016 = f__6249__auto__.call(null);(statearr_13016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___13017);
return statearr_13016;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___13017,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6248__auto___13164 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___13164,out){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___13164,out){
return (function (state_13134){var state_val_13135 = (state_13134[1]);if((state_val_13135 === 1))
{var inst_13097 = (new Array(n));var inst_13098 = inst_13097;var inst_13099 = 0;var state_13134__$1 = (function (){var statearr_13136 = state_13134;(statearr_13136[7] = inst_13098);
(statearr_13136[8] = inst_13099);
return statearr_13136;
})();var statearr_13137_13165 = state_13134__$1;(statearr_13137_13165[2] = null);
(statearr_13137_13165[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 2))
{var state_13134__$1 = state_13134;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13134__$1,4,ch);
} else
{if((state_val_13135 === 3))
{var inst_13132 = (state_13134[2]);var state_13134__$1 = state_13134;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13134__$1,inst_13132);
} else
{if((state_val_13135 === 4))
{var inst_13102 = (state_13134[9]);var inst_13102__$1 = (state_13134[2]);var inst_13103 = (inst_13102__$1 == null);var inst_13104 = cljs.core.not.call(null,inst_13103);var state_13134__$1 = (function (){var statearr_13138 = state_13134;(statearr_13138[9] = inst_13102__$1);
return statearr_13138;
})();if(inst_13104)
{var statearr_13139_13166 = state_13134__$1;(statearr_13139_13166[1] = 5);
} else
{var statearr_13140_13167 = state_13134__$1;(statearr_13140_13167[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 5))
{var inst_13107 = (state_13134[10]);var inst_13098 = (state_13134[7]);var inst_13099 = (state_13134[8]);var inst_13102 = (state_13134[9]);var inst_13106 = (inst_13098[inst_13099] = inst_13102);var inst_13107__$1 = (inst_13099 + 1);var inst_13108 = (inst_13107__$1 < n);var state_13134__$1 = (function (){var statearr_13141 = state_13134;(statearr_13141[11] = inst_13106);
(statearr_13141[10] = inst_13107__$1);
return statearr_13141;
})();if(cljs.core.truth_(inst_13108))
{var statearr_13142_13168 = state_13134__$1;(statearr_13142_13168[1] = 8);
} else
{var statearr_13143_13169 = state_13134__$1;(statearr_13143_13169[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 6))
{var inst_13099 = (state_13134[8]);var inst_13120 = (inst_13099 > 0);var state_13134__$1 = state_13134;if(cljs.core.truth_(inst_13120))
{var statearr_13145_13170 = state_13134__$1;(statearr_13145_13170[1] = 12);
} else
{var statearr_13146_13171 = state_13134__$1;(statearr_13146_13171[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 7))
{var inst_13130 = (state_13134[2]);var state_13134__$1 = state_13134;var statearr_13147_13172 = state_13134__$1;(statearr_13147_13172[2] = inst_13130);
(statearr_13147_13172[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 8))
{var inst_13107 = (state_13134[10]);var inst_13098 = (state_13134[7]);var tmp13144 = inst_13098;var inst_13098__$1 = tmp13144;var inst_13099 = inst_13107;var state_13134__$1 = (function (){var statearr_13148 = state_13134;(statearr_13148[7] = inst_13098__$1);
(statearr_13148[8] = inst_13099);
return statearr_13148;
})();var statearr_13149_13173 = state_13134__$1;(statearr_13149_13173[2] = null);
(statearr_13149_13173[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 9))
{var inst_13098 = (state_13134[7]);var inst_13112 = cljs.core.vec.call(null,inst_13098);var state_13134__$1 = state_13134;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13134__$1,11,out,inst_13112);
} else
{if((state_val_13135 === 10))
{var inst_13118 = (state_13134[2]);var state_13134__$1 = state_13134;var statearr_13150_13174 = state_13134__$1;(statearr_13150_13174[2] = inst_13118);
(statearr_13150_13174[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 11))
{var inst_13114 = (state_13134[2]);var inst_13115 = (new Array(n));var inst_13098 = inst_13115;var inst_13099 = 0;var state_13134__$1 = (function (){var statearr_13151 = state_13134;(statearr_13151[12] = inst_13114);
(statearr_13151[7] = inst_13098);
(statearr_13151[8] = inst_13099);
return statearr_13151;
})();var statearr_13152_13175 = state_13134__$1;(statearr_13152_13175[2] = null);
(statearr_13152_13175[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 12))
{var inst_13098 = (state_13134[7]);var inst_13122 = cljs.core.vec.call(null,inst_13098);var state_13134__$1 = state_13134;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13134__$1,15,out,inst_13122);
} else
{if((state_val_13135 === 13))
{var state_13134__$1 = state_13134;var statearr_13153_13176 = state_13134__$1;(statearr_13153_13176[2] = null);
(statearr_13153_13176[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 14))
{var inst_13127 = (state_13134[2]);var inst_13128 = cljs.core.async.close_BANG_.call(null,out);var state_13134__$1 = (function (){var statearr_13154 = state_13134;(statearr_13154[13] = inst_13127);
return statearr_13154;
})();var statearr_13155_13177 = state_13134__$1;(statearr_13155_13177[2] = inst_13128);
(statearr_13155_13177[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13135 === 15))
{var inst_13124 = (state_13134[2]);var state_13134__$1 = state_13134;var statearr_13156_13178 = state_13134__$1;(statearr_13156_13178[2] = inst_13124);
(statearr_13156_13178[1] = 14);
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
});})(c__6248__auto___13164,out))
;return ((function (switch__6233__auto__,c__6248__auto___13164,out){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_13160 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13160[0] = state_machine__6234__auto__);
(statearr_13160[1] = 1);
return statearr_13160;
});
var state_machine__6234__auto____1 = (function (state_13134){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_13134);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e13161){if((e13161 instanceof Object))
{var ex__6237__auto__ = e13161;var statearr_13162_13179 = state_13134;(statearr_13162_13179[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13134);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13161;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13180 = state_13134;
state_13134 = G__13180;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_13134){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_13134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___13164,out))
})();var state__6250__auto__ = (function (){var statearr_13163 = f__6249__auto__.call(null);(statearr_13163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___13164);
return statearr_13163;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___13164,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6248__auto___13323 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___13323,out){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___13323,out){
return (function (state_13293){var state_val_13294 = (state_13293[1]);if((state_val_13294 === 1))
{var inst_13252 = [];var inst_13253 = inst_13252;var inst_13254 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13293__$1 = (function (){var statearr_13295 = state_13293;(statearr_13295[7] = inst_13254);
(statearr_13295[8] = inst_13253);
return statearr_13295;
})();var statearr_13296_13324 = state_13293__$1;(statearr_13296_13324[2] = null);
(statearr_13296_13324[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13294 === 2))
{var state_13293__$1 = state_13293;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13293__$1,4,ch);
} else
{if((state_val_13294 === 3))
{var inst_13291 = (state_13293[2]);var state_13293__$1 = state_13293;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13293__$1,inst_13291);
} else
{if((state_val_13294 === 4))
{var inst_13257 = (state_13293[9]);var inst_13257__$1 = (state_13293[2]);var inst_13258 = (inst_13257__$1 == null);var inst_13259 = cljs.core.not.call(null,inst_13258);var state_13293__$1 = (function (){var statearr_13297 = state_13293;(statearr_13297[9] = inst_13257__$1);
return statearr_13297;
})();if(inst_13259)
{var statearr_13298_13325 = state_13293__$1;(statearr_13298_13325[1] = 5);
} else
{var statearr_13299_13326 = state_13293__$1;(statearr_13299_13326[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13294 === 5))
{var inst_13254 = (state_13293[7]);var inst_13257 = (state_13293[9]);var inst_13261 = (state_13293[10]);var inst_13261__$1 = f.call(null,inst_13257);var inst_13262 = cljs.core._EQ_.call(null,inst_13261__$1,inst_13254);var inst_13263 = cljs.core.keyword_identical_QMARK_.call(null,inst_13254,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13264 = (inst_13262) || (inst_13263);var state_13293__$1 = (function (){var statearr_13300 = state_13293;(statearr_13300[10] = inst_13261__$1);
return statearr_13300;
})();if(cljs.core.truth_(inst_13264))
{var statearr_13301_13327 = state_13293__$1;(statearr_13301_13327[1] = 8);
} else
{var statearr_13302_13328 = state_13293__$1;(statearr_13302_13328[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13294 === 6))
{var inst_13253 = (state_13293[8]);var inst_13278 = inst_13253.length;var inst_13279 = (inst_13278 > 0);var state_13293__$1 = state_13293;if(cljs.core.truth_(inst_13279))
{var statearr_13304_13329 = state_13293__$1;(statearr_13304_13329[1] = 12);
} else
{var statearr_13305_13330 = state_13293__$1;(statearr_13305_13330[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13294 === 7))
{var inst_13289 = (state_13293[2]);var state_13293__$1 = state_13293;var statearr_13306_13331 = state_13293__$1;(statearr_13306_13331[2] = inst_13289);
(statearr_13306_13331[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13294 === 8))
{var inst_13253 = (state_13293[8]);var inst_13257 = (state_13293[9]);var inst_13261 = (state_13293[10]);var inst_13266 = inst_13253.push(inst_13257);var tmp13303 = inst_13253;var inst_13253__$1 = tmp13303;var inst_13254 = inst_13261;var state_13293__$1 = (function (){var statearr_13307 = state_13293;(statearr_13307[7] = inst_13254);
(statearr_13307[8] = inst_13253__$1);
(statearr_13307[11] = inst_13266);
return statearr_13307;
})();var statearr_13308_13332 = state_13293__$1;(statearr_13308_13332[2] = null);
(statearr_13308_13332[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13294 === 9))
{var inst_13253 = (state_13293[8]);var inst_13269 = cljs.core.vec.call(null,inst_13253);var state_13293__$1 = state_13293;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13293__$1,11,out,inst_13269);
} else
{if((state_val_13294 === 10))
{var inst_13276 = (state_13293[2]);var state_13293__$1 = state_13293;var statearr_13309_13333 = state_13293__$1;(statearr_13309_13333[2] = inst_13276);
(statearr_13309_13333[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13294 === 11))
{var inst_13257 = (state_13293[9]);var inst_13261 = (state_13293[10]);var inst_13271 = (state_13293[2]);var inst_13272 = [];var inst_13273 = inst_13272.push(inst_13257);var inst_13253 = inst_13272;var inst_13254 = inst_13261;var state_13293__$1 = (function (){var statearr_13310 = state_13293;(statearr_13310[12] = inst_13271);
(statearr_13310[13] = inst_13273);
(statearr_13310[7] = inst_13254);
(statearr_13310[8] = inst_13253);
return statearr_13310;
})();var statearr_13311_13334 = state_13293__$1;(statearr_13311_13334[2] = null);
(statearr_13311_13334[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13294 === 12))
{var inst_13253 = (state_13293[8]);var inst_13281 = cljs.core.vec.call(null,inst_13253);var state_13293__$1 = state_13293;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13293__$1,15,out,inst_13281);
} else
{if((state_val_13294 === 13))
{var state_13293__$1 = state_13293;var statearr_13312_13335 = state_13293__$1;(statearr_13312_13335[2] = null);
(statearr_13312_13335[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13294 === 14))
{var inst_13286 = (state_13293[2]);var inst_13287 = cljs.core.async.close_BANG_.call(null,out);var state_13293__$1 = (function (){var statearr_13313 = state_13293;(statearr_13313[14] = inst_13286);
return statearr_13313;
})();var statearr_13314_13336 = state_13293__$1;(statearr_13314_13336[2] = inst_13287);
(statearr_13314_13336[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13294 === 15))
{var inst_13283 = (state_13293[2]);var state_13293__$1 = state_13293;var statearr_13315_13337 = state_13293__$1;(statearr_13315_13337[2] = inst_13283);
(statearr_13315_13337[1] = 14);
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
});})(c__6248__auto___13323,out))
;return ((function (switch__6233__auto__,c__6248__auto___13323,out){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_13319 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13319[0] = state_machine__6234__auto__);
(statearr_13319[1] = 1);
return statearr_13319;
});
var state_machine__6234__auto____1 = (function (state_13293){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_13293);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e13320){if((e13320 instanceof Object))
{var ex__6237__auto__ = e13320;var statearr_13321_13338 = state_13293;(statearr_13321_13338[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13293);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13320;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13339 = state_13293;
state_13293 = G__13339;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_13293){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_13293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___13323,out))
})();var state__6250__auto__ = (function (){var statearr_13322 = f__6249__auto__.call(null);(statearr_13322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___13323);
return statearr_13322;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___13323,out))
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
