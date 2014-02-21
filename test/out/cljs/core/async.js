// Compiled by ClojureScript 0.0-2138
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10490 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10490 = (function (f,fn_handler,meta10491){
this.f = f;
this.fn_handler = fn_handler;
this.meta10491 = meta10491;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10490.cljs$lang$type = true;
cljs.core.async.t10490.cljs$lang$ctorStr = "cljs.core.async/t10490";
cljs.core.async.t10490.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10490");
});
cljs.core.async.t10490.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10490.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10490.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10492){var self__ = this;
var _10492__$1 = this;return self__.meta10491;
});
cljs.core.async.t10490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10492,meta10491__$1){var self__ = this;
var _10492__$1 = this;return (new cljs.core.async.t10490(self__.f,self__.fn_handler,meta10491__$1));
});
cljs.core.async.__GT_t10490 = (function __GT_t10490(f__$1,fn_handler__$1,meta10491){return (new cljs.core.async.t10490(f__$1,fn_handler__$1,meta10491));
});
}
return (new cljs.core.async.t10490(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10494 = buff;if(G__10494)
{var bit__4052__auto__ = null;if(cljs.core.truth_((function (){var or__3408__auto__ = bit__4052__auto__;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return G__10494.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10494.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10494);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10494);
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
{var val_10495 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10495);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_10495);
}));
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3396__auto__ = ret;if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3396__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4250__auto___10496 = n;var x_10497 = 0;while(true){
if((x_10497 < n__4250__auto___10496))
{(a[x_10497] = 0);
{
var G__10498 = (x_10497 + 1);
x_10497 = G__10498;
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
var G__10499 = (i + 1);
i = G__10499;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10503 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10503 = (function (flag,alt_flag,meta10504){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10504 = meta10504;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10503.cljs$lang$type = true;
cljs.core.async.t10503.cljs$lang$ctorStr = "cljs.core.async/t10503";
cljs.core.async.t10503.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10503");
});
cljs.core.async.t10503.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10503.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t10503.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t10503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10505){var self__ = this;
var _10505__$1 = this;return self__.meta10504;
});
cljs.core.async.t10503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10505,meta10504__$1){var self__ = this;
var _10505__$1 = this;return (new cljs.core.async.t10503(self__.flag,self__.alt_flag,meta10504__$1));
});
cljs.core.async.__GT_t10503 = (function __GT_t10503(flag__$1,alt_flag__$1,meta10504){return (new cljs.core.async.t10503(flag__$1,alt_flag__$1,meta10504));
});
}
return (new cljs.core.async.t10503(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10509 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10509 = (function (cb,flag,alt_handler,meta10510){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10510 = meta10510;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10509.cljs$lang$type = true;
cljs.core.async.t10509.cljs$lang$ctorStr = "cljs.core.async/t10509";
cljs.core.async.t10509.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10509");
});
cljs.core.async.t10509.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10509.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10509.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10511){var self__ = this;
var _10511__$1 = this;return self__.meta10510;
});
cljs.core.async.t10509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10511,meta10510__$1){var self__ = this;
var _10511__$1 = this;return (new cljs.core.async.t10509(self__.cb,self__.flag,self__.alt_handler,meta10510__$1));
});
cljs.core.async.__GT_t10509 = (function __GT_t10509(cb__$1,flag__$1,alt_handler__$1,meta10510){return (new cljs.core.async.t10509(cb__$1,flag__$1,alt_handler__$1,meta10510));
});
}
return (new cljs.core.async.t10509(cb,flag,alt_handler,null));
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
return (function (p1__10512_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10512_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3408__auto__ = wport;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10513 = (i + 1);
i = G__10513;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3408__auto__ = ret;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3396__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3396__auto__;
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
var alts_BANG___delegate = function (ports,p__10514){var map__10516 = p__10514;var map__10516__$1 = ((cljs.core.seq_QMARK_.call(null,map__10516))?cljs.core.apply.call(null,cljs.core.hash_map,map__10516):map__10516);var opts = map__10516__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10514 = null;if (arguments.length > 1) {
  p__10514 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10514);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10517){
var ports = cljs.core.first(arglist__10517);
var p__10514 = cljs.core.rest(arglist__10517);
return alts_BANG___delegate(ports,p__10514);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10525 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10525 = (function (ch,f,map_LT_,meta10526){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10526 = meta10526;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10525.cljs$lang$type = true;
cljs.core.async.t10525.cljs$lang$ctorStr = "cljs.core.async/t10525";
cljs.core.async.t10525.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10525");
});
cljs.core.async.t10525.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10525.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10525.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10525.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10528 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10528 = (function (fn1,_,meta10526,ch,f,map_LT_,meta10529){
this.fn1 = fn1;
this._ = _;
this.meta10526 = meta10526;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10529 = meta10529;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10528.cljs$lang$type = true;
cljs.core.async.t10528.cljs$lang$ctorStr = "cljs.core.async/t10528";
cljs.core.async.t10528.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10528");
});
cljs.core.async.t10528.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10528.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t10528.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t10528.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__10518_SHARP_){return f1.call(null,(((p1__10518_SHARP_ == null))?null:self__.f.call(null,p1__10518_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t10528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10530){var self__ = this;
var _10530__$1 = this;return self__.meta10529;
});
cljs.core.async.t10528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10530,meta10529__$1){var self__ = this;
var _10530__$1 = this;return (new cljs.core.async.t10528(self__.fn1,self__._,self__.meta10526,self__.ch,self__.f,self__.map_LT_,meta10529__$1));
});
cljs.core.async.__GT_t10528 = (function __GT_t10528(fn1__$1,___$2,meta10526__$1,ch__$2,f__$2,map_LT___$2,meta10529){return (new cljs.core.async.t10528(fn1__$1,___$2,meta10526__$1,ch__$2,f__$2,map_LT___$2,meta10529));
});
}
return (new cljs.core.async.t10528(fn1,___$1,self__.meta10526,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3396__auto__ = ret;if(cljs.core.truth_(and__3396__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3396__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10525.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10525.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10527){var self__ = this;
var _10527__$1 = this;return self__.meta10526;
});
cljs.core.async.t10525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10527,meta10526__$1){var self__ = this;
var _10527__$1 = this;return (new cljs.core.async.t10525(self__.ch,self__.f,self__.map_LT_,meta10526__$1));
});
cljs.core.async.__GT_t10525 = (function __GT_t10525(ch__$1,f__$1,map_LT___$1,meta10526){return (new cljs.core.async.t10525(ch__$1,f__$1,map_LT___$1,meta10526));
});
}
return (new cljs.core.async.t10525(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10534 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10534 = (function (ch,f,map_GT_,meta10535){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10535 = meta10535;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10534.cljs$lang$type = true;
cljs.core.async.t10534.cljs$lang$ctorStr = "cljs.core.async/t10534";
cljs.core.async.t10534.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10534");
});
cljs.core.async.t10534.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10534.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10534.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10534.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10534.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10534.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10536){var self__ = this;
var _10536__$1 = this;return self__.meta10535;
});
cljs.core.async.t10534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10536,meta10535__$1){var self__ = this;
var _10536__$1 = this;return (new cljs.core.async.t10534(self__.ch,self__.f,self__.map_GT_,meta10535__$1));
});
cljs.core.async.__GT_t10534 = (function __GT_t10534(ch__$1,f__$1,map_GT___$1,meta10535){return (new cljs.core.async.t10534(ch__$1,f__$1,map_GT___$1,meta10535));
});
}
return (new cljs.core.async.t10534(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10540 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10540 = (function (ch,p,filter_GT_,meta10541){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10541 = meta10541;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10540.cljs$lang$type = true;
cljs.core.async.t10540.cljs$lang$ctorStr = "cljs.core.async/t10540";
cljs.core.async.t10540.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10540");
});
cljs.core.async.t10540.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10540.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10540.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10540.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10540.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10540.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10542){var self__ = this;
var _10542__$1 = this;return self__.meta10541;
});
cljs.core.async.t10540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10542,meta10541__$1){var self__ = this;
var _10542__$1 = this;return (new cljs.core.async.t10540(self__.ch,self__.p,self__.filter_GT_,meta10541__$1));
});
cljs.core.async.__GT_t10540 = (function __GT_t10540(ch__$1,p__$1,filter_GT___$1,meta10541){return (new cljs.core.async.t10540(ch__$1,p__$1,filter_GT___$1,meta10541));
});
}
return (new cljs.core.async.t10540(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6175__auto___10625 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_10604){var state_val_10605 = (state_10604[1]);if((state_val_10605 === 1))
{var state_10604__$1 = state_10604;var statearr_10606_10626 = state_10604__$1;(statearr_10606_10626[2] = null);
(statearr_10606_10626[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10605 === 2))
{var state_10604__$1 = state_10604;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10604__$1,4,ch);
} else
{if((state_val_10605 === 3))
{var inst_10602 = (state_10604[2]);var state_10604__$1 = state_10604;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10604__$1,inst_10602);
} else
{if((state_val_10605 === 4))
{var inst_10586 = (state_10604[7]);var inst_10586__$1 = (state_10604[2]);var inst_10587 = (inst_10586__$1 == null);var state_10604__$1 = (function (){var statearr_10607 = state_10604;(statearr_10607[7] = inst_10586__$1);
return statearr_10607;
})();if(cljs.core.truth_(inst_10587))
{var statearr_10608_10627 = state_10604__$1;(statearr_10608_10627[1] = 5);
} else
{var statearr_10609_10628 = state_10604__$1;(statearr_10609_10628[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10605 === 5))
{var inst_10589 = cljs.core.async.close_BANG_.call(null,out);var state_10604__$1 = state_10604;var statearr_10610_10629 = state_10604__$1;(statearr_10610_10629[2] = inst_10589);
(statearr_10610_10629[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10605 === 6))
{var inst_10586 = (state_10604[7]);var inst_10591 = p.call(null,inst_10586);var state_10604__$1 = state_10604;if(cljs.core.truth_(inst_10591))
{var statearr_10611_10630 = state_10604__$1;(statearr_10611_10630[1] = 8);
} else
{var statearr_10612_10631 = state_10604__$1;(statearr_10612_10631[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10605 === 7))
{var inst_10600 = (state_10604[2]);var state_10604__$1 = state_10604;var statearr_10613_10632 = state_10604__$1;(statearr_10613_10632[2] = inst_10600);
(statearr_10613_10632[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10605 === 8))
{var inst_10586 = (state_10604[7]);var state_10604__$1 = state_10604;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10604__$1,11,out,inst_10586);
} else
{if((state_val_10605 === 9))
{var state_10604__$1 = state_10604;var statearr_10614_10633 = state_10604__$1;(statearr_10614_10633[2] = null);
(statearr_10614_10633[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10605 === 10))
{var inst_10597 = (state_10604[2]);var state_10604__$1 = (function (){var statearr_10615 = state_10604;(statearr_10615[8] = inst_10597);
return statearr_10615;
})();var statearr_10616_10634 = state_10604__$1;(statearr_10616_10634[2] = null);
(statearr_10616_10634[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10605 === 11))
{var inst_10594 = (state_10604[2]);var state_10604__$1 = state_10604;var statearr_10617_10635 = state_10604__$1;(statearr_10617_10635[2] = inst_10594);
(statearr_10617_10635[1] = 10);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_10621 = [null,null,null,null,null,null,null,null,null];(statearr_10621[0] = state_machine__6161__auto__);
(statearr_10621[1] = 1);
return statearr_10621;
});
var state_machine__6161__auto____1 = (function (state_10604){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_10604);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e10622){if((e10622 instanceof Object))
{var ex__6164__auto__ = e10622;var statearr_10623_10636 = state_10604;(statearr_10623_10636[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10604);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10622;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10637 = state_10604;
state_10604 = G__10637;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_10604){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_10604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_10624 = f__6176__auto__.call(null);(statearr_10624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___10625);
return statearr_10624;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6175__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_10789){var state_val_10790 = (state_10789[1]);if((state_val_10790 === 1))
{var state_10789__$1 = state_10789;var statearr_10791_10828 = state_10789__$1;(statearr_10791_10828[2] = null);
(statearr_10791_10828[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10790 === 2))
{var state_10789__$1 = state_10789;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10789__$1,4,in$);
} else
{if((state_val_10790 === 3))
{var inst_10787 = (state_10789[2]);var state_10789__$1 = state_10789;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10789__$1,inst_10787);
} else
{if((state_val_10790 === 4))
{var inst_10735 = (state_10789[7]);var inst_10735__$1 = (state_10789[2]);var inst_10736 = (inst_10735__$1 == null);var state_10789__$1 = (function (){var statearr_10792 = state_10789;(statearr_10792[7] = inst_10735__$1);
return statearr_10792;
})();if(cljs.core.truth_(inst_10736))
{var statearr_10793_10829 = state_10789__$1;(statearr_10793_10829[1] = 5);
} else
{var statearr_10794_10830 = state_10789__$1;(statearr_10794_10830[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10790 === 5))
{var inst_10738 = cljs.core.async.close_BANG_.call(null,out);var state_10789__$1 = state_10789;var statearr_10795_10831 = state_10789__$1;(statearr_10795_10831[2] = inst_10738);
(statearr_10795_10831[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10790 === 6))
{var inst_10735 = (state_10789[7]);var inst_10740 = f.call(null,inst_10735);var inst_10745 = cljs.core.seq.call(null,inst_10740);var inst_10746 = inst_10745;var inst_10747 = null;var inst_10748 = 0;var inst_10749 = 0;var state_10789__$1 = (function (){var statearr_10796 = state_10789;(statearr_10796[8] = inst_10746);
(statearr_10796[9] = inst_10748);
(statearr_10796[10] = inst_10747);
(statearr_10796[11] = inst_10749);
return statearr_10796;
})();var statearr_10797_10832 = state_10789__$1;(statearr_10797_10832[2] = null);
(statearr_10797_10832[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10790 === 7))
{var inst_10785 = (state_10789[2]);var state_10789__$1 = state_10789;var statearr_10798_10833 = state_10789__$1;(statearr_10798_10833[2] = inst_10785);
(statearr_10798_10833[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10790 === 8))
{var inst_10748 = (state_10789[9]);var inst_10749 = (state_10789[11]);var inst_10751 = (inst_10749 < inst_10748);var inst_10752 = inst_10751;var state_10789__$1 = state_10789;if(cljs.core.truth_(inst_10752))
{var statearr_10799_10834 = state_10789__$1;(statearr_10799_10834[1] = 10);
} else
{var statearr_10800_10835 = state_10789__$1;(statearr_10800_10835[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10790 === 9))
{var inst_10782 = (state_10789[2]);var state_10789__$1 = (function (){var statearr_10801 = state_10789;(statearr_10801[12] = inst_10782);
return statearr_10801;
})();var statearr_10802_10836 = state_10789__$1;(statearr_10802_10836[2] = null);
(statearr_10802_10836[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10790 === 10))
{var inst_10747 = (state_10789[10]);var inst_10749 = (state_10789[11]);var inst_10754 = cljs.core._nth.call(null,inst_10747,inst_10749);var state_10789__$1 = state_10789;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10789__$1,13,out,inst_10754);
} else
{if((state_val_10790 === 11))
{var inst_10746 = (state_10789[8]);var inst_10760 = (state_10789[13]);var inst_10760__$1 = cljs.core.seq.call(null,inst_10746);var state_10789__$1 = (function (){var statearr_10806 = state_10789;(statearr_10806[13] = inst_10760__$1);
return statearr_10806;
})();if(inst_10760__$1)
{var statearr_10807_10837 = state_10789__$1;(statearr_10807_10837[1] = 14);
} else
{var statearr_10808_10838 = state_10789__$1;(statearr_10808_10838[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10790 === 12))
{var inst_10780 = (state_10789[2]);var state_10789__$1 = state_10789;var statearr_10809_10839 = state_10789__$1;(statearr_10809_10839[2] = inst_10780);
(statearr_10809_10839[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10790 === 13))
{var inst_10746 = (state_10789[8]);var inst_10748 = (state_10789[9]);var inst_10747 = (state_10789[10]);var inst_10749 = (state_10789[11]);var inst_10756 = (state_10789[2]);var inst_10757 = (inst_10749 + 1);var tmp10803 = inst_10746;var tmp10804 = inst_10748;var tmp10805 = inst_10747;var inst_10746__$1 = tmp10803;var inst_10747__$1 = tmp10805;var inst_10748__$1 = tmp10804;var inst_10749__$1 = inst_10757;var state_10789__$1 = (function (){var statearr_10810 = state_10789;(statearr_10810[8] = inst_10746__$1);
(statearr_10810[9] = inst_10748__$1);
(statearr_10810[10] = inst_10747__$1);
(statearr_10810[11] = inst_10749__$1);
(statearr_10810[14] = inst_10756);
return statearr_10810;
})();var statearr_10811_10840 = state_10789__$1;(statearr_10811_10840[2] = null);
(statearr_10811_10840[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10790 === 14))
{var inst_10760 = (state_10789[13]);var inst_10762 = cljs.core.chunked_seq_QMARK_.call(null,inst_10760);var state_10789__$1 = state_10789;if(inst_10762)
{var statearr_10812_10841 = state_10789__$1;(statearr_10812_10841[1] = 17);
} else
{var statearr_10813_10842 = state_10789__$1;(statearr_10813_10842[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10790 === 15))
{var state_10789__$1 = state_10789;var statearr_10814_10843 = state_10789__$1;(statearr_10814_10843[2] = null);
(statearr_10814_10843[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10790 === 16))
{var inst_10778 = (state_10789[2]);var state_10789__$1 = state_10789;var statearr_10815_10844 = state_10789__$1;(statearr_10815_10844[2] = inst_10778);
(statearr_10815_10844[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10790 === 17))
{var inst_10760 = (state_10789[13]);var inst_10764 = cljs.core.chunk_first.call(null,inst_10760);var inst_10765 = cljs.core.chunk_rest.call(null,inst_10760);var inst_10766 = cljs.core.count.call(null,inst_10764);var inst_10746 = inst_10765;var inst_10747 = inst_10764;var inst_10748 = inst_10766;var inst_10749 = 0;var state_10789__$1 = (function (){var statearr_10816 = state_10789;(statearr_10816[8] = inst_10746);
(statearr_10816[9] = inst_10748);
(statearr_10816[10] = inst_10747);
(statearr_10816[11] = inst_10749);
return statearr_10816;
})();var statearr_10817_10845 = state_10789__$1;(statearr_10817_10845[2] = null);
(statearr_10817_10845[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10790 === 18))
{var inst_10760 = (state_10789[13]);var inst_10769 = cljs.core.first.call(null,inst_10760);var state_10789__$1 = state_10789;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10789__$1,20,out,inst_10769);
} else
{if((state_val_10790 === 19))
{var inst_10775 = (state_10789[2]);var state_10789__$1 = state_10789;var statearr_10818_10846 = state_10789__$1;(statearr_10818_10846[2] = inst_10775);
(statearr_10818_10846[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10790 === 20))
{var inst_10760 = (state_10789[13]);var inst_10771 = (state_10789[2]);var inst_10772 = cljs.core.next.call(null,inst_10760);var inst_10746 = inst_10772;var inst_10747 = null;var inst_10748 = 0;var inst_10749 = 0;var state_10789__$1 = (function (){var statearr_10819 = state_10789;(statearr_10819[15] = inst_10771);
(statearr_10819[8] = inst_10746);
(statearr_10819[9] = inst_10748);
(statearr_10819[10] = inst_10747);
(statearr_10819[11] = inst_10749);
return statearr_10819;
})();var statearr_10820_10847 = state_10789__$1;(statearr_10820_10847[2] = null);
(statearr_10820_10847[1] = 8);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_10824 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10824[0] = state_machine__6161__auto__);
(statearr_10824[1] = 1);
return statearr_10824;
});
var state_machine__6161__auto____1 = (function (state_10789){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_10789);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e10825){if((e10825 instanceof Object))
{var ex__6164__auto__ = e10825;var statearr_10826_10848 = state_10789;(statearr_10826_10848[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10789);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10825;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10849 = state_10789;
state_10789 = G__10849;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_10789){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_10789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_10827 = f__6176__auto__.call(null);(statearr_10827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto__);
return statearr_10827;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return c__6175__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6175__auto___10930 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_10909){var state_val_10910 = (state_10909[1]);if((state_val_10910 === 1))
{var state_10909__$1 = state_10909;var statearr_10911_10931 = state_10909__$1;(statearr_10911_10931[2] = null);
(statearr_10911_10931[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10910 === 2))
{var state_10909__$1 = state_10909;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10909__$1,4,from);
} else
{if((state_val_10910 === 3))
{var inst_10907 = (state_10909[2]);var state_10909__$1 = state_10909;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10909__$1,inst_10907);
} else
{if((state_val_10910 === 4))
{var inst_10892 = (state_10909[7]);var inst_10892__$1 = (state_10909[2]);var inst_10893 = (inst_10892__$1 == null);var state_10909__$1 = (function (){var statearr_10912 = state_10909;(statearr_10912[7] = inst_10892__$1);
return statearr_10912;
})();if(cljs.core.truth_(inst_10893))
{var statearr_10913_10932 = state_10909__$1;(statearr_10913_10932[1] = 5);
} else
{var statearr_10914_10933 = state_10909__$1;(statearr_10914_10933[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10910 === 5))
{var state_10909__$1 = state_10909;if(cljs.core.truth_(close_QMARK_))
{var statearr_10915_10934 = state_10909__$1;(statearr_10915_10934[1] = 8);
} else
{var statearr_10916_10935 = state_10909__$1;(statearr_10916_10935[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10910 === 6))
{var inst_10892 = (state_10909[7]);var state_10909__$1 = state_10909;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10909__$1,11,to,inst_10892);
} else
{if((state_val_10910 === 7))
{var inst_10905 = (state_10909[2]);var state_10909__$1 = state_10909;var statearr_10917_10936 = state_10909__$1;(statearr_10917_10936[2] = inst_10905);
(statearr_10917_10936[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10910 === 8))
{var inst_10896 = cljs.core.async.close_BANG_.call(null,to);var state_10909__$1 = state_10909;var statearr_10918_10937 = state_10909__$1;(statearr_10918_10937[2] = inst_10896);
(statearr_10918_10937[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10910 === 9))
{var state_10909__$1 = state_10909;var statearr_10919_10938 = state_10909__$1;(statearr_10919_10938[2] = null);
(statearr_10919_10938[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10910 === 10))
{var inst_10899 = (state_10909[2]);var state_10909__$1 = state_10909;var statearr_10920_10939 = state_10909__$1;(statearr_10920_10939[2] = inst_10899);
(statearr_10920_10939[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10910 === 11))
{var inst_10902 = (state_10909[2]);var state_10909__$1 = (function (){var statearr_10921 = state_10909;(statearr_10921[8] = inst_10902);
return statearr_10921;
})();var statearr_10922_10940 = state_10909__$1;(statearr_10922_10940[2] = null);
(statearr_10922_10940[1] = 2);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_10926 = [null,null,null,null,null,null,null,null,null];(statearr_10926[0] = state_machine__6161__auto__);
(statearr_10926[1] = 1);
return statearr_10926;
});
var state_machine__6161__auto____1 = (function (state_10909){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_10909);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e10927){if((e10927 instanceof Object))
{var ex__6164__auto__ = e10927;var statearr_10928_10941 = state_10909;(statearr_10928_10941[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10909);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10927;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10942 = state_10909;
state_10909 = G__10942;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_10909){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_10909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_10929 = f__6176__auto__.call(null);(statearr_10929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___10930);
return statearr_10929;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6175__auto___11029 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_11007){var state_val_11008 = (state_11007[1]);if((state_val_11008 === 1))
{var state_11007__$1 = state_11007;var statearr_11009_11030 = state_11007__$1;(statearr_11009_11030[2] = null);
(statearr_11009_11030[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11008 === 2))
{var state_11007__$1 = state_11007;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11007__$1,4,ch);
} else
{if((state_val_11008 === 3))
{var inst_11005 = (state_11007[2]);var state_11007__$1 = state_11007;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11007__$1,inst_11005);
} else
{if((state_val_11008 === 4))
{var inst_10988 = (state_11007[7]);var inst_10988__$1 = (state_11007[2]);var inst_10989 = (inst_10988__$1 == null);var state_11007__$1 = (function (){var statearr_11010 = state_11007;(statearr_11010[7] = inst_10988__$1);
return statearr_11010;
})();if(cljs.core.truth_(inst_10989))
{var statearr_11011_11031 = state_11007__$1;(statearr_11011_11031[1] = 5);
} else
{var statearr_11012_11032 = state_11007__$1;(statearr_11012_11032[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11008 === 5))
{var inst_10991 = cljs.core.async.close_BANG_.call(null,tc);var inst_10992 = cljs.core.async.close_BANG_.call(null,fc);var state_11007__$1 = (function (){var statearr_11013 = state_11007;(statearr_11013[8] = inst_10991);
return statearr_11013;
})();var statearr_11014_11033 = state_11007__$1;(statearr_11014_11033[2] = inst_10992);
(statearr_11014_11033[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11008 === 6))
{var inst_10988 = (state_11007[7]);var inst_10994 = p.call(null,inst_10988);var state_11007__$1 = state_11007;if(cljs.core.truth_(inst_10994))
{var statearr_11015_11034 = state_11007__$1;(statearr_11015_11034[1] = 9);
} else
{var statearr_11016_11035 = state_11007__$1;(statearr_11016_11035[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11008 === 7))
{var inst_11003 = (state_11007[2]);var state_11007__$1 = state_11007;var statearr_11017_11036 = state_11007__$1;(statearr_11017_11036[2] = inst_11003);
(statearr_11017_11036[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11008 === 8))
{var inst_11000 = (state_11007[2]);var state_11007__$1 = (function (){var statearr_11018 = state_11007;(statearr_11018[9] = inst_11000);
return statearr_11018;
})();var statearr_11019_11037 = state_11007__$1;(statearr_11019_11037[2] = null);
(statearr_11019_11037[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11008 === 9))
{var state_11007__$1 = state_11007;var statearr_11020_11038 = state_11007__$1;(statearr_11020_11038[2] = tc);
(statearr_11020_11038[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11008 === 10))
{var state_11007__$1 = state_11007;var statearr_11021_11039 = state_11007__$1;(statearr_11021_11039[2] = fc);
(statearr_11021_11039[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11008 === 11))
{var inst_10988 = (state_11007[7]);var inst_10998 = (state_11007[2]);var state_11007__$1 = state_11007;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11007__$1,8,inst_10998,inst_10988);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_11025 = [null,null,null,null,null,null,null,null,null,null];(statearr_11025[0] = state_machine__6161__auto__);
(statearr_11025[1] = 1);
return statearr_11025;
});
var state_machine__6161__auto____1 = (function (state_11007){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_11007);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e11026){if((e11026 instanceof Object))
{var ex__6164__auto__ = e11026;var statearr_11027_11040 = state_11007;(statearr_11027_11040[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11007);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11026;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11041 = state_11007;
state_11007 = G__11041;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_11007){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_11007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_11028 = f__6176__auto__.call(null);(statearr_11028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___11029);
return statearr_11028;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6175__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_11088){var state_val_11089 = (state_11088[1]);if((state_val_11089 === 7))
{var inst_11084 = (state_11088[2]);var state_11088__$1 = state_11088;var statearr_11090_11106 = state_11088__$1;(statearr_11090_11106[2] = inst_11084);
(statearr_11090_11106[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11089 === 6))
{var inst_11077 = (state_11088[7]);var inst_11074 = (state_11088[8]);var inst_11081 = f.call(null,inst_11074,inst_11077);var inst_11074__$1 = inst_11081;var state_11088__$1 = (function (){var statearr_11091 = state_11088;(statearr_11091[8] = inst_11074__$1);
return statearr_11091;
})();var statearr_11092_11107 = state_11088__$1;(statearr_11092_11107[2] = null);
(statearr_11092_11107[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11089 === 5))
{var inst_11074 = (state_11088[8]);var state_11088__$1 = state_11088;var statearr_11093_11108 = state_11088__$1;(statearr_11093_11108[2] = inst_11074);
(statearr_11093_11108[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11089 === 4))
{var inst_11077 = (state_11088[7]);var inst_11077__$1 = (state_11088[2]);var inst_11078 = (inst_11077__$1 == null);var state_11088__$1 = (function (){var statearr_11094 = state_11088;(statearr_11094[7] = inst_11077__$1);
return statearr_11094;
})();if(cljs.core.truth_(inst_11078))
{var statearr_11095_11109 = state_11088__$1;(statearr_11095_11109[1] = 5);
} else
{var statearr_11096_11110 = state_11088__$1;(statearr_11096_11110[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11089 === 3))
{var inst_11086 = (state_11088[2]);var state_11088__$1 = state_11088;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11088__$1,inst_11086);
} else
{if((state_val_11089 === 2))
{var state_11088__$1 = state_11088;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11088__$1,4,ch);
} else
{if((state_val_11089 === 1))
{var inst_11074 = init;var state_11088__$1 = (function (){var statearr_11097 = state_11088;(statearr_11097[8] = inst_11074);
return statearr_11097;
})();var statearr_11098_11111 = state_11088__$1;(statearr_11098_11111[2] = null);
(statearr_11098_11111[1] = 2);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_11102 = [null,null,null,null,null,null,null,null,null];(statearr_11102[0] = state_machine__6161__auto__);
(statearr_11102[1] = 1);
return statearr_11102;
});
var state_machine__6161__auto____1 = (function (state_11088){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_11088);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e11103){if((e11103 instanceof Object))
{var ex__6164__auto__ = e11103;var statearr_11104_11112 = state_11088;(statearr_11104_11112[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11088);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11103;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11113 = state_11088;
state_11088 = G__11113;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_11088){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_11088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_11105 = f__6176__auto__.call(null);(statearr_11105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto__);
return statearr_11105;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return c__6175__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6175__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_11175){var state_val_11176 = (state_11175[1]);if((state_val_11176 === 1))
{var inst_11155 = cljs.core.seq.call(null,coll);var inst_11156 = inst_11155;var state_11175__$1 = (function (){var statearr_11177 = state_11175;(statearr_11177[7] = inst_11156);
return statearr_11177;
})();var statearr_11178_11196 = state_11175__$1;(statearr_11178_11196[2] = null);
(statearr_11178_11196[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11176 === 2))
{var inst_11156 = (state_11175[7]);var state_11175__$1 = state_11175;if(cljs.core.truth_(inst_11156))
{var statearr_11179_11197 = state_11175__$1;(statearr_11179_11197[1] = 4);
} else
{var statearr_11180_11198 = state_11175__$1;(statearr_11180_11198[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11176 === 3))
{var inst_11173 = (state_11175[2]);var state_11175__$1 = state_11175;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11175__$1,inst_11173);
} else
{if((state_val_11176 === 4))
{var inst_11156 = (state_11175[7]);var inst_11159 = cljs.core.first.call(null,inst_11156);var state_11175__$1 = state_11175;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11175__$1,7,ch,inst_11159);
} else
{if((state_val_11176 === 5))
{var state_11175__$1 = state_11175;if(cljs.core.truth_(close_QMARK_))
{var statearr_11181_11199 = state_11175__$1;(statearr_11181_11199[1] = 8);
} else
{var statearr_11182_11200 = state_11175__$1;(statearr_11182_11200[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11176 === 6))
{var inst_11171 = (state_11175[2]);var state_11175__$1 = state_11175;var statearr_11183_11201 = state_11175__$1;(statearr_11183_11201[2] = inst_11171);
(statearr_11183_11201[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11176 === 7))
{var inst_11156 = (state_11175[7]);var inst_11161 = (state_11175[2]);var inst_11162 = cljs.core.next.call(null,inst_11156);var inst_11156__$1 = inst_11162;var state_11175__$1 = (function (){var statearr_11184 = state_11175;(statearr_11184[7] = inst_11156__$1);
(statearr_11184[8] = inst_11161);
return statearr_11184;
})();var statearr_11185_11202 = state_11175__$1;(statearr_11185_11202[2] = null);
(statearr_11185_11202[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11176 === 8))
{var inst_11166 = cljs.core.async.close_BANG_.call(null,ch);var state_11175__$1 = state_11175;var statearr_11186_11203 = state_11175__$1;(statearr_11186_11203[2] = inst_11166);
(statearr_11186_11203[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11176 === 9))
{var state_11175__$1 = state_11175;var statearr_11187_11204 = state_11175__$1;(statearr_11187_11204[2] = null);
(statearr_11187_11204[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11176 === 10))
{var inst_11169 = (state_11175[2]);var state_11175__$1 = state_11175;var statearr_11188_11205 = state_11175__$1;(statearr_11188_11205[2] = inst_11169);
(statearr_11188_11205[1] = 6);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_11192 = [null,null,null,null,null,null,null,null,null];(statearr_11192[0] = state_machine__6161__auto__);
(statearr_11192[1] = 1);
return statearr_11192;
});
var state_machine__6161__auto____1 = (function (state_11175){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_11175);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e11193){if((e11193 instanceof Object))
{var ex__6164__auto__ = e11193;var statearr_11194_11206 = state_11175;(statearr_11194_11206[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11175);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11193;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11207 = state_11175;
state_11175 = G__11207;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_11175){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_11175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_11195 = f__6176__auto__.call(null);(statearr_11195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto__);
return statearr_11195;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return c__6175__auto__;
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
cljs.core.async.Mux = (function (){var obj11209 = {};return obj11209;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3396__auto__ = _;if(and__3396__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4029__auto__ = (((_ == null))?null:_);return (function (){var or__3408__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11211 = {};return obj11211;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11435 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11435 = (function (cs,ch,mult,meta11436){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11436 = meta11436;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11435.cljs$lang$type = true;
cljs.core.async.t11435.cljs$lang$ctorStr = "cljs.core.async/t11435";
cljs.core.async.t11435.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11435");
});})(cs))
;
cljs.core.async.t11435.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11435.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11435.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11435.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11435.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11435.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11435.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11437){var self__ = this;
var _11437__$1 = this;return self__.meta11436;
});})(cs))
;
cljs.core.async.t11435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11437,meta11436__$1){var self__ = this;
var _11437__$1 = this;return (new cljs.core.async.t11435(self__.cs,self__.ch,self__.mult,meta11436__$1));
});})(cs))
;
cljs.core.async.__GT_t11435 = ((function (cs){
return (function __GT_t11435(cs__$1,ch__$1,mult__$1,meta11436){return (new cljs.core.async.t11435(cs__$1,ch__$1,mult__$1,meta11436));
});})(cs))
;
}
return (new cljs.core.async.t11435(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6175__auto___11658 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_11572){var state_val_11573 = (state_11572[1]);if((state_val_11573 === 32))
{var inst_11516 = (state_11572[7]);var inst_11440 = (state_11572[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11572,31,Object,null,30);var inst_11523 = cljs.core.async.put_BANG_.call(null,inst_11516,inst_11440,done);var state_11572__$1 = state_11572;var statearr_11574_11659 = state_11572__$1;(statearr_11574_11659[2] = inst_11523);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11572__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 1))
{var state_11572__$1 = state_11572;var statearr_11575_11660 = state_11572__$1;(statearr_11575_11660[2] = null);
(statearr_11575_11660[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 33))
{var inst_11529 = (state_11572[9]);var inst_11531 = cljs.core.chunked_seq_QMARK_.call(null,inst_11529);var state_11572__$1 = state_11572;if(inst_11531)
{var statearr_11576_11661 = state_11572__$1;(statearr_11576_11661[1] = 36);
} else
{var statearr_11577_11662 = state_11572__$1;(statearr_11577_11662[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 2))
{var state_11572__$1 = state_11572;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11572__$1,4,ch);
} else
{if((state_val_11573 === 34))
{var state_11572__$1 = state_11572;var statearr_11578_11663 = state_11572__$1;(statearr_11578_11663[2] = null);
(statearr_11578_11663[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 3))
{var inst_11570 = (state_11572[2]);var state_11572__$1 = state_11572;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11572__$1,inst_11570);
} else
{if((state_val_11573 === 35))
{var inst_11554 = (state_11572[2]);var state_11572__$1 = state_11572;var statearr_11579_11664 = state_11572__$1;(statearr_11579_11664[2] = inst_11554);
(statearr_11579_11664[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 4))
{var inst_11440 = (state_11572[8]);var inst_11440__$1 = (state_11572[2]);var inst_11441 = (inst_11440__$1 == null);var state_11572__$1 = (function (){var statearr_11580 = state_11572;(statearr_11580[8] = inst_11440__$1);
return statearr_11580;
})();if(cljs.core.truth_(inst_11441))
{var statearr_11581_11665 = state_11572__$1;(statearr_11581_11665[1] = 5);
} else
{var statearr_11582_11666 = state_11572__$1;(statearr_11582_11666[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 36))
{var inst_11529 = (state_11572[9]);var inst_11533 = cljs.core.chunk_first.call(null,inst_11529);var inst_11534 = cljs.core.chunk_rest.call(null,inst_11529);var inst_11535 = cljs.core.count.call(null,inst_11533);var inst_11508 = inst_11534;var inst_11509 = inst_11533;var inst_11510 = inst_11535;var inst_11511 = 0;var state_11572__$1 = (function (){var statearr_11583 = state_11572;(statearr_11583[10] = inst_11508);
(statearr_11583[11] = inst_11509);
(statearr_11583[12] = inst_11511);
(statearr_11583[13] = inst_11510);
return statearr_11583;
})();var statearr_11584_11667 = state_11572__$1;(statearr_11584_11667[2] = null);
(statearr_11584_11667[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 5))
{var inst_11447 = cljs.core.deref.call(null,cs);var inst_11448 = cljs.core.seq.call(null,inst_11447);var inst_11449 = inst_11448;var inst_11450 = null;var inst_11451 = 0;var inst_11452 = 0;var state_11572__$1 = (function (){var statearr_11585 = state_11572;(statearr_11585[14] = inst_11450);
(statearr_11585[15] = inst_11451);
(statearr_11585[16] = inst_11452);
(statearr_11585[17] = inst_11449);
return statearr_11585;
})();var statearr_11586_11668 = state_11572__$1;(statearr_11586_11668[2] = null);
(statearr_11586_11668[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 37))
{var inst_11529 = (state_11572[9]);var inst_11538 = cljs.core.first.call(null,inst_11529);var state_11572__$1 = (function (){var statearr_11587 = state_11572;(statearr_11587[18] = inst_11538);
return statearr_11587;
})();var statearr_11588_11669 = state_11572__$1;(statearr_11588_11669[2] = null);
(statearr_11588_11669[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 6))
{var inst_11500 = (state_11572[19]);var inst_11499 = cljs.core.deref.call(null,cs);var inst_11500__$1 = cljs.core.keys.call(null,inst_11499);var inst_11501 = cljs.core.count.call(null,inst_11500__$1);var inst_11502 = cljs.core.reset_BANG_.call(null,dctr,inst_11501);var inst_11507 = cljs.core.seq.call(null,inst_11500__$1);var inst_11508 = inst_11507;var inst_11509 = null;var inst_11510 = 0;var inst_11511 = 0;var state_11572__$1 = (function (){var statearr_11589 = state_11572;(statearr_11589[10] = inst_11508);
(statearr_11589[11] = inst_11509);
(statearr_11589[12] = inst_11511);
(statearr_11589[19] = inst_11500__$1);
(statearr_11589[13] = inst_11510);
(statearr_11589[20] = inst_11502);
return statearr_11589;
})();var statearr_11590_11670 = state_11572__$1;(statearr_11590_11670[2] = null);
(statearr_11590_11670[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 38))
{var inst_11551 = (state_11572[2]);var state_11572__$1 = state_11572;var statearr_11591_11671 = state_11572__$1;(statearr_11591_11671[2] = inst_11551);
(statearr_11591_11671[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 7))
{var inst_11568 = (state_11572[2]);var state_11572__$1 = state_11572;var statearr_11592_11672 = state_11572__$1;(statearr_11592_11672[2] = inst_11568);
(statearr_11592_11672[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 39))
{var inst_11529 = (state_11572[9]);var inst_11547 = (state_11572[2]);var inst_11548 = cljs.core.next.call(null,inst_11529);var inst_11508 = inst_11548;var inst_11509 = null;var inst_11510 = 0;var inst_11511 = 0;var state_11572__$1 = (function (){var statearr_11593 = state_11572;(statearr_11593[10] = inst_11508);
(statearr_11593[11] = inst_11509);
(statearr_11593[12] = inst_11511);
(statearr_11593[13] = inst_11510);
(statearr_11593[21] = inst_11547);
return statearr_11593;
})();var statearr_11594_11673 = state_11572__$1;(statearr_11594_11673[2] = null);
(statearr_11594_11673[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 8))
{var inst_11451 = (state_11572[15]);var inst_11452 = (state_11572[16]);var inst_11454 = (inst_11452 < inst_11451);var inst_11455 = inst_11454;var state_11572__$1 = state_11572;if(cljs.core.truth_(inst_11455))
{var statearr_11595_11674 = state_11572__$1;(statearr_11595_11674[1] = 10);
} else
{var statearr_11596_11675 = state_11572__$1;(statearr_11596_11675[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 40))
{var inst_11538 = (state_11572[18]);var inst_11539 = (state_11572[2]);var inst_11540 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11541 = cljs.core.async.untap_STAR_.call(null,m,inst_11538);var state_11572__$1 = (function (){var statearr_11597 = state_11572;(statearr_11597[22] = inst_11540);
(statearr_11597[23] = inst_11539);
return statearr_11597;
})();var statearr_11598_11676 = state_11572__$1;(statearr_11598_11676[2] = inst_11541);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11572__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 9))
{var inst_11497 = (state_11572[2]);var state_11572__$1 = state_11572;var statearr_11599_11677 = state_11572__$1;(statearr_11599_11677[2] = inst_11497);
(statearr_11599_11677[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 41))
{var inst_11538 = (state_11572[18]);var inst_11440 = (state_11572[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11572,40,Object,null,39);var inst_11545 = cljs.core.async.put_BANG_.call(null,inst_11538,inst_11440,done);var state_11572__$1 = state_11572;var statearr_11600_11678 = state_11572__$1;(statearr_11600_11678[2] = inst_11545);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11572__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 10))
{var inst_11450 = (state_11572[14]);var inst_11452 = (state_11572[16]);var inst_11458 = cljs.core._nth.call(null,inst_11450,inst_11452);var inst_11459 = cljs.core.nth.call(null,inst_11458,0,null);var inst_11460 = cljs.core.nth.call(null,inst_11458,1,null);var state_11572__$1 = (function (){var statearr_11601 = state_11572;(statearr_11601[24] = inst_11459);
return statearr_11601;
})();if(cljs.core.truth_(inst_11460))
{var statearr_11602_11679 = state_11572__$1;(statearr_11602_11679[1] = 13);
} else
{var statearr_11603_11680 = state_11572__$1;(statearr_11603_11680[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 42))
{var state_11572__$1 = state_11572;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11572__$1,45,dchan);
} else
{if((state_val_11573 === 11))
{var inst_11449 = (state_11572[17]);var inst_11469 = (state_11572[25]);var inst_11469__$1 = cljs.core.seq.call(null,inst_11449);var state_11572__$1 = (function (){var statearr_11604 = state_11572;(statearr_11604[25] = inst_11469__$1);
return statearr_11604;
})();if(inst_11469__$1)
{var statearr_11605_11681 = state_11572__$1;(statearr_11605_11681[1] = 16);
} else
{var statearr_11606_11682 = state_11572__$1;(statearr_11606_11682[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 43))
{var state_11572__$1 = state_11572;var statearr_11607_11683 = state_11572__$1;(statearr_11607_11683[2] = null);
(statearr_11607_11683[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 12))
{var inst_11495 = (state_11572[2]);var state_11572__$1 = state_11572;var statearr_11608_11684 = state_11572__$1;(statearr_11608_11684[2] = inst_11495);
(statearr_11608_11684[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 44))
{var inst_11565 = (state_11572[2]);var state_11572__$1 = (function (){var statearr_11609 = state_11572;(statearr_11609[26] = inst_11565);
return statearr_11609;
})();var statearr_11610_11685 = state_11572__$1;(statearr_11610_11685[2] = null);
(statearr_11610_11685[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 13))
{var inst_11459 = (state_11572[24]);var inst_11462 = cljs.core.async.close_BANG_.call(null,inst_11459);var state_11572__$1 = state_11572;var statearr_11611_11686 = state_11572__$1;(statearr_11611_11686[2] = inst_11462);
(statearr_11611_11686[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 45))
{var inst_11562 = (state_11572[2]);var state_11572__$1 = state_11572;var statearr_11615_11687 = state_11572__$1;(statearr_11615_11687[2] = inst_11562);
(statearr_11615_11687[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 14))
{var state_11572__$1 = state_11572;var statearr_11616_11688 = state_11572__$1;(statearr_11616_11688[2] = null);
(statearr_11616_11688[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 15))
{var inst_11450 = (state_11572[14]);var inst_11451 = (state_11572[15]);var inst_11452 = (state_11572[16]);var inst_11449 = (state_11572[17]);var inst_11465 = (state_11572[2]);var inst_11466 = (inst_11452 + 1);var tmp11612 = inst_11450;var tmp11613 = inst_11451;var tmp11614 = inst_11449;var inst_11449__$1 = tmp11614;var inst_11450__$1 = tmp11612;var inst_11451__$1 = tmp11613;var inst_11452__$1 = inst_11466;var state_11572__$1 = (function (){var statearr_11617 = state_11572;(statearr_11617[14] = inst_11450__$1);
(statearr_11617[15] = inst_11451__$1);
(statearr_11617[27] = inst_11465);
(statearr_11617[16] = inst_11452__$1);
(statearr_11617[17] = inst_11449__$1);
return statearr_11617;
})();var statearr_11618_11689 = state_11572__$1;(statearr_11618_11689[2] = null);
(statearr_11618_11689[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 16))
{var inst_11469 = (state_11572[25]);var inst_11471 = cljs.core.chunked_seq_QMARK_.call(null,inst_11469);var state_11572__$1 = state_11572;if(inst_11471)
{var statearr_11619_11690 = state_11572__$1;(statearr_11619_11690[1] = 19);
} else
{var statearr_11620_11691 = state_11572__$1;(statearr_11620_11691[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 17))
{var state_11572__$1 = state_11572;var statearr_11621_11692 = state_11572__$1;(statearr_11621_11692[2] = null);
(statearr_11621_11692[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 18))
{var inst_11493 = (state_11572[2]);var state_11572__$1 = state_11572;var statearr_11622_11693 = state_11572__$1;(statearr_11622_11693[2] = inst_11493);
(statearr_11622_11693[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 19))
{var inst_11469 = (state_11572[25]);var inst_11473 = cljs.core.chunk_first.call(null,inst_11469);var inst_11474 = cljs.core.chunk_rest.call(null,inst_11469);var inst_11475 = cljs.core.count.call(null,inst_11473);var inst_11449 = inst_11474;var inst_11450 = inst_11473;var inst_11451 = inst_11475;var inst_11452 = 0;var state_11572__$1 = (function (){var statearr_11623 = state_11572;(statearr_11623[14] = inst_11450);
(statearr_11623[15] = inst_11451);
(statearr_11623[16] = inst_11452);
(statearr_11623[17] = inst_11449);
return statearr_11623;
})();var statearr_11624_11694 = state_11572__$1;(statearr_11624_11694[2] = null);
(statearr_11624_11694[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 20))
{var inst_11469 = (state_11572[25]);var inst_11479 = cljs.core.first.call(null,inst_11469);var inst_11480 = cljs.core.nth.call(null,inst_11479,0,null);var inst_11481 = cljs.core.nth.call(null,inst_11479,1,null);var state_11572__$1 = (function (){var statearr_11625 = state_11572;(statearr_11625[28] = inst_11480);
return statearr_11625;
})();if(cljs.core.truth_(inst_11481))
{var statearr_11626_11695 = state_11572__$1;(statearr_11626_11695[1] = 22);
} else
{var statearr_11627_11696 = state_11572__$1;(statearr_11627_11696[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 21))
{var inst_11490 = (state_11572[2]);var state_11572__$1 = state_11572;var statearr_11628_11697 = state_11572__$1;(statearr_11628_11697[2] = inst_11490);
(statearr_11628_11697[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 22))
{var inst_11480 = (state_11572[28]);var inst_11483 = cljs.core.async.close_BANG_.call(null,inst_11480);var state_11572__$1 = state_11572;var statearr_11629_11698 = state_11572__$1;(statearr_11629_11698[2] = inst_11483);
(statearr_11629_11698[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 23))
{var state_11572__$1 = state_11572;var statearr_11630_11699 = state_11572__$1;(statearr_11630_11699[2] = null);
(statearr_11630_11699[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 24))
{var inst_11469 = (state_11572[25]);var inst_11486 = (state_11572[2]);var inst_11487 = cljs.core.next.call(null,inst_11469);var inst_11449 = inst_11487;var inst_11450 = null;var inst_11451 = 0;var inst_11452 = 0;var state_11572__$1 = (function (){var statearr_11631 = state_11572;(statearr_11631[14] = inst_11450);
(statearr_11631[15] = inst_11451);
(statearr_11631[16] = inst_11452);
(statearr_11631[17] = inst_11449);
(statearr_11631[29] = inst_11486);
return statearr_11631;
})();var statearr_11632_11700 = state_11572__$1;(statearr_11632_11700[2] = null);
(statearr_11632_11700[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 25))
{var inst_11511 = (state_11572[12]);var inst_11510 = (state_11572[13]);var inst_11513 = (inst_11511 < inst_11510);var inst_11514 = inst_11513;var state_11572__$1 = state_11572;if(cljs.core.truth_(inst_11514))
{var statearr_11633_11701 = state_11572__$1;(statearr_11633_11701[1] = 27);
} else
{var statearr_11634_11702 = state_11572__$1;(statearr_11634_11702[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 26))
{var inst_11500 = (state_11572[19]);var inst_11558 = (state_11572[2]);var inst_11559 = cljs.core.seq.call(null,inst_11500);var state_11572__$1 = (function (){var statearr_11635 = state_11572;(statearr_11635[30] = inst_11558);
return statearr_11635;
})();if(inst_11559)
{var statearr_11636_11703 = state_11572__$1;(statearr_11636_11703[1] = 42);
} else
{var statearr_11637_11704 = state_11572__$1;(statearr_11637_11704[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 27))
{var inst_11509 = (state_11572[11]);var inst_11511 = (state_11572[12]);var inst_11516 = cljs.core._nth.call(null,inst_11509,inst_11511);var state_11572__$1 = (function (){var statearr_11638 = state_11572;(statearr_11638[7] = inst_11516);
return statearr_11638;
})();var statearr_11639_11705 = state_11572__$1;(statearr_11639_11705[2] = null);
(statearr_11639_11705[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 28))
{var inst_11508 = (state_11572[10]);var inst_11529 = (state_11572[9]);var inst_11529__$1 = cljs.core.seq.call(null,inst_11508);var state_11572__$1 = (function (){var statearr_11643 = state_11572;(statearr_11643[9] = inst_11529__$1);
return statearr_11643;
})();if(inst_11529__$1)
{var statearr_11644_11706 = state_11572__$1;(statearr_11644_11706[1] = 33);
} else
{var statearr_11645_11707 = state_11572__$1;(statearr_11645_11707[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 29))
{var inst_11556 = (state_11572[2]);var state_11572__$1 = state_11572;var statearr_11646_11708 = state_11572__$1;(statearr_11646_11708[2] = inst_11556);
(statearr_11646_11708[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 30))
{var inst_11508 = (state_11572[10]);var inst_11509 = (state_11572[11]);var inst_11511 = (state_11572[12]);var inst_11510 = (state_11572[13]);var inst_11525 = (state_11572[2]);var inst_11526 = (inst_11511 + 1);var tmp11640 = inst_11508;var tmp11641 = inst_11509;var tmp11642 = inst_11510;var inst_11508__$1 = tmp11640;var inst_11509__$1 = tmp11641;var inst_11510__$1 = tmp11642;var inst_11511__$1 = inst_11526;var state_11572__$1 = (function (){var statearr_11647 = state_11572;(statearr_11647[10] = inst_11508__$1);
(statearr_11647[11] = inst_11509__$1);
(statearr_11647[31] = inst_11525);
(statearr_11647[12] = inst_11511__$1);
(statearr_11647[13] = inst_11510__$1);
return statearr_11647;
})();var statearr_11648_11709 = state_11572__$1;(statearr_11648_11709[2] = null);
(statearr_11648_11709[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11573 === 31))
{var inst_11516 = (state_11572[7]);var inst_11517 = (state_11572[2]);var inst_11518 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11519 = cljs.core.async.untap_STAR_.call(null,m,inst_11516);var state_11572__$1 = (function (){var statearr_11649 = state_11572;(statearr_11649[32] = inst_11518);
(statearr_11649[33] = inst_11517);
return statearr_11649;
})();var statearr_11650_11710 = state_11572__$1;(statearr_11650_11710[2] = inst_11519);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11572__$1);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_11654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11654[0] = state_machine__6161__auto__);
(statearr_11654[1] = 1);
return statearr_11654;
});
var state_machine__6161__auto____1 = (function (state_11572){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_11572);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e11655){if((e11655 instanceof Object))
{var ex__6164__auto__ = e11655;var statearr_11656_11711 = state_11572;(statearr_11656_11711[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11572);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11655;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11712 = state_11572;
state_11572 = G__11712;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_11572){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_11572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_11657 = f__6176__auto__.call(null);(statearr_11657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___11658);
return statearr_11657;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
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
cljs.core.async.Mix = (function (){var obj11714 = {};return obj11714;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t11824 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11824 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta11825){
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
this.meta11825 = meta11825;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11824.cljs$lang$type = true;
cljs.core.async.t11824.cljs$lang$ctorStr = "cljs.core.async/t11824";
cljs.core.async.t11824.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11824");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11824.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11824.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11824.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11824.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11824.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11824.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11824.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11824.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11824.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11826){var self__ = this;
var _11826__$1 = this;return self__.meta11825;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11826,meta11825__$1){var self__ = this;
var _11826__$1 = this;return (new cljs.core.async.t11824(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta11825__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11824 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11824(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11825){return (new cljs.core.async.t11824(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11825));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11824(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6175__auto___11933 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_11891){var state_val_11892 = (state_11891[1]);if((state_val_11892 === 1))
{var inst_11830 = (state_11891[7]);var inst_11830__$1 = calc_state.call(null);var inst_11831 = cljs.core.seq_QMARK_.call(null,inst_11830__$1);var state_11891__$1 = (function (){var statearr_11893 = state_11891;(statearr_11893[7] = inst_11830__$1);
return statearr_11893;
})();if(inst_11831)
{var statearr_11894_11934 = state_11891__$1;(statearr_11894_11934[1] = 2);
} else
{var statearr_11895_11935 = state_11891__$1;(statearr_11895_11935[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11892 === 2))
{var inst_11830 = (state_11891[7]);var inst_11833 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11830);var state_11891__$1 = state_11891;var statearr_11896_11936 = state_11891__$1;(statearr_11896_11936[2] = inst_11833);
(statearr_11896_11936[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11892 === 3))
{var inst_11830 = (state_11891[7]);var state_11891__$1 = state_11891;var statearr_11897_11937 = state_11891__$1;(statearr_11897_11937[2] = inst_11830);
(statearr_11897_11937[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11892 === 4))
{var inst_11830 = (state_11891[7]);var inst_11836 = (state_11891[2]);var inst_11837 = cljs.core.get.call(null,inst_11836,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11838 = cljs.core.get.call(null,inst_11836,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11839 = cljs.core.get.call(null,inst_11836,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_11840 = inst_11830;var state_11891__$1 = (function (){var statearr_11898 = state_11891;(statearr_11898[8] = inst_11837);
(statearr_11898[9] = inst_11838);
(statearr_11898[10] = inst_11839);
(statearr_11898[11] = inst_11840);
return statearr_11898;
})();var statearr_11899_11938 = state_11891__$1;(statearr_11899_11938[2] = null);
(statearr_11899_11938[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11892 === 5))
{var inst_11840 = (state_11891[11]);var inst_11843 = cljs.core.seq_QMARK_.call(null,inst_11840);var state_11891__$1 = state_11891;if(inst_11843)
{var statearr_11900_11939 = state_11891__$1;(statearr_11900_11939[1] = 7);
} else
{var statearr_11901_11940 = state_11891__$1;(statearr_11901_11940[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11892 === 6))
{var inst_11889 = (state_11891[2]);var state_11891__$1 = state_11891;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11891__$1,inst_11889);
} else
{if((state_val_11892 === 7))
{var inst_11840 = (state_11891[11]);var inst_11845 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11840);var state_11891__$1 = state_11891;var statearr_11902_11941 = state_11891__$1;(statearr_11902_11941[2] = inst_11845);
(statearr_11902_11941[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11892 === 8))
{var inst_11840 = (state_11891[11]);var state_11891__$1 = state_11891;var statearr_11903_11942 = state_11891__$1;(statearr_11903_11942[2] = inst_11840);
(statearr_11903_11942[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11892 === 9))
{var inst_11848 = (state_11891[12]);var inst_11848__$1 = (state_11891[2]);var inst_11849 = cljs.core.get.call(null,inst_11848__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11850 = cljs.core.get.call(null,inst_11848__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11851 = cljs.core.get.call(null,inst_11848__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_11891__$1 = (function (){var statearr_11904 = state_11891;(statearr_11904[13] = inst_11851);
(statearr_11904[14] = inst_11850);
(statearr_11904[12] = inst_11848__$1);
return statearr_11904;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11891__$1,10,inst_11849);
} else
{if((state_val_11892 === 10))
{var inst_11855 = (state_11891[15]);var inst_11856 = (state_11891[16]);var inst_11854 = (state_11891[2]);var inst_11855__$1 = cljs.core.nth.call(null,inst_11854,0,null);var inst_11856__$1 = cljs.core.nth.call(null,inst_11854,1,null);var inst_11857 = (inst_11855__$1 == null);var inst_11858 = cljs.core._EQ_.call(null,inst_11856__$1,change);var inst_11859 = (inst_11857) || (inst_11858);var state_11891__$1 = (function (){var statearr_11905 = state_11891;(statearr_11905[15] = inst_11855__$1);
(statearr_11905[16] = inst_11856__$1);
return statearr_11905;
})();if(cljs.core.truth_(inst_11859))
{var statearr_11906_11943 = state_11891__$1;(statearr_11906_11943[1] = 11);
} else
{var statearr_11907_11944 = state_11891__$1;(statearr_11907_11944[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11892 === 11))
{var inst_11855 = (state_11891[15]);var inst_11861 = (inst_11855 == null);var state_11891__$1 = state_11891;if(cljs.core.truth_(inst_11861))
{var statearr_11908_11945 = state_11891__$1;(statearr_11908_11945[1] = 14);
} else
{var statearr_11909_11946 = state_11891__$1;(statearr_11909_11946[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11892 === 12))
{var inst_11851 = (state_11891[13]);var inst_11856 = (state_11891[16]);var inst_11870 = (state_11891[17]);var inst_11870__$1 = inst_11851.call(null,inst_11856);var state_11891__$1 = (function (){var statearr_11910 = state_11891;(statearr_11910[17] = inst_11870__$1);
return statearr_11910;
})();if(cljs.core.truth_(inst_11870__$1))
{var statearr_11911_11947 = state_11891__$1;(statearr_11911_11947[1] = 17);
} else
{var statearr_11912_11948 = state_11891__$1;(statearr_11912_11948[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11892 === 13))
{var inst_11887 = (state_11891[2]);var state_11891__$1 = state_11891;var statearr_11913_11949 = state_11891__$1;(statearr_11913_11949[2] = inst_11887);
(statearr_11913_11949[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11892 === 14))
{var inst_11856 = (state_11891[16]);var inst_11863 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11856);var state_11891__$1 = state_11891;var statearr_11914_11950 = state_11891__$1;(statearr_11914_11950[2] = inst_11863);
(statearr_11914_11950[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11892 === 15))
{var state_11891__$1 = state_11891;var statearr_11915_11951 = state_11891__$1;(statearr_11915_11951[2] = null);
(statearr_11915_11951[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11892 === 16))
{var inst_11866 = (state_11891[2]);var inst_11867 = calc_state.call(null);var inst_11840 = inst_11867;var state_11891__$1 = (function (){var statearr_11916 = state_11891;(statearr_11916[11] = inst_11840);
(statearr_11916[18] = inst_11866);
return statearr_11916;
})();var statearr_11917_11952 = state_11891__$1;(statearr_11917_11952[2] = null);
(statearr_11917_11952[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11892 === 17))
{var inst_11870 = (state_11891[17]);var state_11891__$1 = state_11891;var statearr_11918_11953 = state_11891__$1;(statearr_11918_11953[2] = inst_11870);
(statearr_11918_11953[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11892 === 18))
{var inst_11851 = (state_11891[13]);var inst_11850 = (state_11891[14]);var inst_11856 = (state_11891[16]);var inst_11873 = cljs.core.empty_QMARK_.call(null,inst_11851);var inst_11874 = inst_11850.call(null,inst_11856);var inst_11875 = cljs.core.not.call(null,inst_11874);var inst_11876 = (inst_11873) && (inst_11875);var state_11891__$1 = state_11891;var statearr_11919_11954 = state_11891__$1;(statearr_11919_11954[2] = inst_11876);
(statearr_11919_11954[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11892 === 19))
{var inst_11878 = (state_11891[2]);var state_11891__$1 = state_11891;if(cljs.core.truth_(inst_11878))
{var statearr_11920_11955 = state_11891__$1;(statearr_11920_11955[1] = 20);
} else
{var statearr_11921_11956 = state_11891__$1;(statearr_11921_11956[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11892 === 20))
{var inst_11855 = (state_11891[15]);var state_11891__$1 = state_11891;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11891__$1,23,out,inst_11855);
} else
{if((state_val_11892 === 21))
{var state_11891__$1 = state_11891;var statearr_11922_11957 = state_11891__$1;(statearr_11922_11957[2] = null);
(statearr_11922_11957[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11892 === 22))
{var inst_11848 = (state_11891[12]);var inst_11884 = (state_11891[2]);var inst_11840 = inst_11848;var state_11891__$1 = (function (){var statearr_11923 = state_11891;(statearr_11923[11] = inst_11840);
(statearr_11923[19] = inst_11884);
return statearr_11923;
})();var statearr_11924_11958 = state_11891__$1;(statearr_11924_11958[2] = null);
(statearr_11924_11958[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11892 === 23))
{var inst_11881 = (state_11891[2]);var state_11891__$1 = state_11891;var statearr_11925_11959 = state_11891__$1;(statearr_11925_11959[2] = inst_11881);
(statearr_11925_11959[1] = 22);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_11929 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11929[0] = state_machine__6161__auto__);
(statearr_11929[1] = 1);
return statearr_11929;
});
var state_machine__6161__auto____1 = (function (state_11891){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_11891);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e11930){if((e11930 instanceof Object))
{var ex__6164__auto__ = e11930;var statearr_11931_11960 = state_11891;(statearr_11931_11960[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11891);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11930;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11961 = state_11891;
state_11891 = G__11961;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_11891){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_11891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_11932 = f__6176__auto__.call(null);(statearr_11932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___11933);
return statearr_11932;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
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
cljs.core.async.Pub = (function (){var obj11963 = {};return obj11963;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
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
return (function (topic){var or__3408__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3408__auto__,mults){
return (function (p1__11964_SHARP_){if(cljs.core.truth_(p1__11964_SHARP_.call(null,topic)))
{return p1__11964_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11964_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3408__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12089 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12089 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12090){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12090 = meta12090;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12089.cljs$lang$type = true;
cljs.core.async.t12089.cljs$lang$ctorStr = "cljs.core.async/t12089";
cljs.core.async.t12089.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t12089");
});})(mults,ensure_mult))
;
cljs.core.async.t12089.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12089.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12089.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12089.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12089.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12089.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12089.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12089.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12091){var self__ = this;
var _12091__$1 = this;return self__.meta12090;
});})(mults,ensure_mult))
;
cljs.core.async.t12089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12091,meta12090__$1){var self__ = this;
var _12091__$1 = this;return (new cljs.core.async.t12089(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12090__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12089 = ((function (mults,ensure_mult){
return (function __GT_t12089(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12090){return (new cljs.core.async.t12089(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12090));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12089(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6175__auto___12213 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_12165){var state_val_12166 = (state_12165[1]);if((state_val_12166 === 1))
{var state_12165__$1 = state_12165;var statearr_12167_12214 = state_12165__$1;(statearr_12167_12214[2] = null);
(statearr_12167_12214[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 2))
{var state_12165__$1 = state_12165;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12165__$1,4,ch);
} else
{if((state_val_12166 === 3))
{var inst_12163 = (state_12165[2]);var state_12165__$1 = state_12165;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12165__$1,inst_12163);
} else
{if((state_val_12166 === 4))
{var inst_12094 = (state_12165[7]);var inst_12094__$1 = (state_12165[2]);var inst_12095 = (inst_12094__$1 == null);var state_12165__$1 = (function (){var statearr_12168 = state_12165;(statearr_12168[7] = inst_12094__$1);
return statearr_12168;
})();if(cljs.core.truth_(inst_12095))
{var statearr_12169_12215 = state_12165__$1;(statearr_12169_12215[1] = 5);
} else
{var statearr_12170_12216 = state_12165__$1;(statearr_12170_12216[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 5))
{var inst_12101 = cljs.core.deref.call(null,mults);var inst_12102 = cljs.core.vals.call(null,inst_12101);var inst_12103 = cljs.core.seq.call(null,inst_12102);var inst_12104 = inst_12103;var inst_12105 = null;var inst_12106 = 0;var inst_12107 = 0;var state_12165__$1 = (function (){var statearr_12171 = state_12165;(statearr_12171[8] = inst_12105);
(statearr_12171[9] = inst_12106);
(statearr_12171[10] = inst_12107);
(statearr_12171[11] = inst_12104);
return statearr_12171;
})();var statearr_12172_12217 = state_12165__$1;(statearr_12172_12217[2] = null);
(statearr_12172_12217[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 6))
{var inst_12144 = (state_12165[12]);var inst_12142 = (state_12165[13]);var inst_12094 = (state_12165[7]);var inst_12142__$1 = topic_fn.call(null,inst_12094);var inst_12143 = cljs.core.deref.call(null,mults);var inst_12144__$1 = cljs.core.get.call(null,inst_12143,inst_12142__$1);var state_12165__$1 = (function (){var statearr_12173 = state_12165;(statearr_12173[12] = inst_12144__$1);
(statearr_12173[13] = inst_12142__$1);
return statearr_12173;
})();if(cljs.core.truth_(inst_12144__$1))
{var statearr_12174_12218 = state_12165__$1;(statearr_12174_12218[1] = 19);
} else
{var statearr_12175_12219 = state_12165__$1;(statearr_12175_12219[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 7))
{var inst_12161 = (state_12165[2]);var state_12165__$1 = state_12165;var statearr_12176_12220 = state_12165__$1;(statearr_12176_12220[2] = inst_12161);
(statearr_12176_12220[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 8))
{var inst_12106 = (state_12165[9]);var inst_12107 = (state_12165[10]);var inst_12109 = (inst_12107 < inst_12106);var inst_12110 = inst_12109;var state_12165__$1 = state_12165;if(cljs.core.truth_(inst_12110))
{var statearr_12180_12221 = state_12165__$1;(statearr_12180_12221[1] = 10);
} else
{var statearr_12181_12222 = state_12165__$1;(statearr_12181_12222[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 9))
{var inst_12140 = (state_12165[2]);var state_12165__$1 = state_12165;var statearr_12182_12223 = state_12165__$1;(statearr_12182_12223[2] = inst_12140);
(statearr_12182_12223[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 10))
{var inst_12105 = (state_12165[8]);var inst_12106 = (state_12165[9]);var inst_12107 = (state_12165[10]);var inst_12104 = (state_12165[11]);var inst_12112 = cljs.core._nth.call(null,inst_12105,inst_12107);var inst_12113 = cljs.core.async.muxch_STAR_.call(null,inst_12112);var inst_12114 = cljs.core.async.close_BANG_.call(null,inst_12113);var inst_12115 = (inst_12107 + 1);var tmp12177 = inst_12105;var tmp12178 = inst_12106;var tmp12179 = inst_12104;var inst_12104__$1 = tmp12179;var inst_12105__$1 = tmp12177;var inst_12106__$1 = tmp12178;var inst_12107__$1 = inst_12115;var state_12165__$1 = (function (){var statearr_12183 = state_12165;(statearr_12183[8] = inst_12105__$1);
(statearr_12183[14] = inst_12114);
(statearr_12183[9] = inst_12106__$1);
(statearr_12183[10] = inst_12107__$1);
(statearr_12183[11] = inst_12104__$1);
return statearr_12183;
})();var statearr_12184_12224 = state_12165__$1;(statearr_12184_12224[2] = null);
(statearr_12184_12224[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 11))
{var inst_12104 = (state_12165[11]);var inst_12118 = (state_12165[15]);var inst_12118__$1 = cljs.core.seq.call(null,inst_12104);var state_12165__$1 = (function (){var statearr_12185 = state_12165;(statearr_12185[15] = inst_12118__$1);
return statearr_12185;
})();if(inst_12118__$1)
{var statearr_12186_12225 = state_12165__$1;(statearr_12186_12225[1] = 13);
} else
{var statearr_12187_12226 = state_12165__$1;(statearr_12187_12226[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 12))
{var inst_12138 = (state_12165[2]);var state_12165__$1 = state_12165;var statearr_12188_12227 = state_12165__$1;(statearr_12188_12227[2] = inst_12138);
(statearr_12188_12227[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 13))
{var inst_12118 = (state_12165[15]);var inst_12120 = cljs.core.chunked_seq_QMARK_.call(null,inst_12118);var state_12165__$1 = state_12165;if(inst_12120)
{var statearr_12189_12228 = state_12165__$1;(statearr_12189_12228[1] = 16);
} else
{var statearr_12190_12229 = state_12165__$1;(statearr_12190_12229[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 14))
{var state_12165__$1 = state_12165;var statearr_12191_12230 = state_12165__$1;(statearr_12191_12230[2] = null);
(statearr_12191_12230[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 15))
{var inst_12136 = (state_12165[2]);var state_12165__$1 = state_12165;var statearr_12192_12231 = state_12165__$1;(statearr_12192_12231[2] = inst_12136);
(statearr_12192_12231[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 16))
{var inst_12118 = (state_12165[15]);var inst_12122 = cljs.core.chunk_first.call(null,inst_12118);var inst_12123 = cljs.core.chunk_rest.call(null,inst_12118);var inst_12124 = cljs.core.count.call(null,inst_12122);var inst_12104 = inst_12123;var inst_12105 = inst_12122;var inst_12106 = inst_12124;var inst_12107 = 0;var state_12165__$1 = (function (){var statearr_12193 = state_12165;(statearr_12193[8] = inst_12105);
(statearr_12193[9] = inst_12106);
(statearr_12193[10] = inst_12107);
(statearr_12193[11] = inst_12104);
return statearr_12193;
})();var statearr_12194_12232 = state_12165__$1;(statearr_12194_12232[2] = null);
(statearr_12194_12232[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 17))
{var inst_12118 = (state_12165[15]);var inst_12127 = cljs.core.first.call(null,inst_12118);var inst_12128 = cljs.core.async.muxch_STAR_.call(null,inst_12127);var inst_12129 = cljs.core.async.close_BANG_.call(null,inst_12128);var inst_12130 = cljs.core.next.call(null,inst_12118);var inst_12104 = inst_12130;var inst_12105 = null;var inst_12106 = 0;var inst_12107 = 0;var state_12165__$1 = (function (){var statearr_12195 = state_12165;(statearr_12195[8] = inst_12105);
(statearr_12195[9] = inst_12106);
(statearr_12195[10] = inst_12107);
(statearr_12195[11] = inst_12104);
(statearr_12195[16] = inst_12129);
return statearr_12195;
})();var statearr_12196_12233 = state_12165__$1;(statearr_12196_12233[2] = null);
(statearr_12196_12233[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 18))
{var inst_12133 = (state_12165[2]);var state_12165__$1 = state_12165;var statearr_12197_12234 = state_12165__$1;(statearr_12197_12234[2] = inst_12133);
(statearr_12197_12234[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 19))
{var state_12165__$1 = state_12165;var statearr_12198_12235 = state_12165__$1;(statearr_12198_12235[2] = null);
(statearr_12198_12235[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 20))
{var state_12165__$1 = state_12165;var statearr_12199_12236 = state_12165__$1;(statearr_12199_12236[2] = null);
(statearr_12199_12236[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 21))
{var inst_12158 = (state_12165[2]);var state_12165__$1 = (function (){var statearr_12200 = state_12165;(statearr_12200[17] = inst_12158);
return statearr_12200;
})();var statearr_12201_12237 = state_12165__$1;(statearr_12201_12237[2] = null);
(statearr_12201_12237[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 22))
{var inst_12155 = (state_12165[2]);var state_12165__$1 = state_12165;var statearr_12202_12238 = state_12165__$1;(statearr_12202_12238[2] = inst_12155);
(statearr_12202_12238[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 23))
{var inst_12142 = (state_12165[13]);var inst_12146 = (state_12165[2]);var inst_12147 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12142);var state_12165__$1 = (function (){var statearr_12203 = state_12165;(statearr_12203[18] = inst_12146);
return statearr_12203;
})();var statearr_12204_12239 = state_12165__$1;(statearr_12204_12239[2] = inst_12147);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12165__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 24))
{var inst_12144 = (state_12165[12]);var inst_12094 = (state_12165[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12165,23,Object,null,22);var inst_12151 = cljs.core.async.muxch_STAR_.call(null,inst_12144);var state_12165__$1 = state_12165;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12165__$1,25,inst_12151,inst_12094);
} else
{if((state_val_12166 === 25))
{var inst_12153 = (state_12165[2]);var state_12165__$1 = state_12165;var statearr_12205_12240 = state_12165__$1;(statearr_12205_12240[2] = inst_12153);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12165__$1);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_12209 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12209[0] = state_machine__6161__auto__);
(statearr_12209[1] = 1);
return statearr_12209;
});
var state_machine__6161__auto____1 = (function (state_12165){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_12165);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e12210){if((e12210 instanceof Object))
{var ex__6164__auto__ = e12210;var statearr_12211_12241 = state_12165;(statearr_12211_12241[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12165);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12210;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12242 = state_12165;
state_12165 = G__12242;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_12165){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_12165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_12212 = f__6176__auto__.call(null);(statearr_12212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___12213);
return statearr_12212;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
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
,cljs.core.range.call(null,cnt));var c__6175__auto___12379 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_12349){var state_val_12350 = (state_12349[1]);if((state_val_12350 === 1))
{var state_12349__$1 = state_12349;var statearr_12351_12380 = state_12349__$1;(statearr_12351_12380[2] = null);
(statearr_12351_12380[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12350 === 2))
{var inst_12312 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12313 = 0;var state_12349__$1 = (function (){var statearr_12352 = state_12349;(statearr_12352[7] = inst_12313);
(statearr_12352[8] = inst_12312);
return statearr_12352;
})();var statearr_12353_12381 = state_12349__$1;(statearr_12353_12381[2] = null);
(statearr_12353_12381[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12350 === 3))
{var inst_12347 = (state_12349[2]);var state_12349__$1 = state_12349;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12349__$1,inst_12347);
} else
{if((state_val_12350 === 4))
{var inst_12313 = (state_12349[7]);var inst_12315 = (inst_12313 < cnt);var state_12349__$1 = state_12349;if(cljs.core.truth_(inst_12315))
{var statearr_12354_12382 = state_12349__$1;(statearr_12354_12382[1] = 6);
} else
{var statearr_12355_12383 = state_12349__$1;(statearr_12355_12383[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12350 === 5))
{var inst_12333 = (state_12349[2]);var state_12349__$1 = (function (){var statearr_12356 = state_12349;(statearr_12356[9] = inst_12333);
return statearr_12356;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12349__$1,12,dchan);
} else
{if((state_val_12350 === 6))
{var state_12349__$1 = state_12349;var statearr_12357_12384 = state_12349__$1;(statearr_12357_12384[2] = null);
(statearr_12357_12384[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12350 === 7))
{var state_12349__$1 = state_12349;var statearr_12358_12385 = state_12349__$1;(statearr_12358_12385[2] = null);
(statearr_12358_12385[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12350 === 8))
{var inst_12331 = (state_12349[2]);var state_12349__$1 = state_12349;var statearr_12359_12386 = state_12349__$1;(statearr_12359_12386[2] = inst_12331);
(statearr_12359_12386[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12350 === 9))
{var inst_12313 = (state_12349[7]);var inst_12326 = (state_12349[2]);var inst_12327 = (inst_12313 + 1);var inst_12313__$1 = inst_12327;var state_12349__$1 = (function (){var statearr_12360 = state_12349;(statearr_12360[7] = inst_12313__$1);
(statearr_12360[10] = inst_12326);
return statearr_12360;
})();var statearr_12361_12387 = state_12349__$1;(statearr_12361_12387[2] = null);
(statearr_12361_12387[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12350 === 10))
{var inst_12317 = (state_12349[2]);var inst_12318 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12349__$1 = (function (){var statearr_12362 = state_12349;(statearr_12362[11] = inst_12317);
return statearr_12362;
})();var statearr_12363_12388 = state_12349__$1;(statearr_12363_12388[2] = inst_12318);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12349__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12350 === 11))
{var inst_12313 = (state_12349[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12349,10,Object,null,9);var inst_12322 = chs__$1.call(null,inst_12313);var inst_12323 = done.call(null,inst_12313);var inst_12324 = cljs.core.async.take_BANG_.call(null,inst_12322,inst_12323);var state_12349__$1 = state_12349;var statearr_12364_12389 = state_12349__$1;(statearr_12364_12389[2] = inst_12324);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12349__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12350 === 12))
{var inst_12335 = (state_12349[12]);var inst_12335__$1 = (state_12349[2]);var inst_12336 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12335__$1);var state_12349__$1 = (function (){var statearr_12365 = state_12349;(statearr_12365[12] = inst_12335__$1);
return statearr_12365;
})();if(cljs.core.truth_(inst_12336))
{var statearr_12366_12390 = state_12349__$1;(statearr_12366_12390[1] = 13);
} else
{var statearr_12367_12391 = state_12349__$1;(statearr_12367_12391[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12350 === 13))
{var inst_12338 = cljs.core.async.close_BANG_.call(null,out);var state_12349__$1 = state_12349;var statearr_12368_12392 = state_12349__$1;(statearr_12368_12392[2] = inst_12338);
(statearr_12368_12392[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12350 === 14))
{var inst_12335 = (state_12349[12]);var inst_12340 = cljs.core.apply.call(null,f,inst_12335);var state_12349__$1 = state_12349;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12349__$1,16,out,inst_12340);
} else
{if((state_val_12350 === 15))
{var inst_12345 = (state_12349[2]);var state_12349__$1 = state_12349;var statearr_12369_12393 = state_12349__$1;(statearr_12369_12393[2] = inst_12345);
(statearr_12369_12393[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12350 === 16))
{var inst_12342 = (state_12349[2]);var state_12349__$1 = (function (){var statearr_12370 = state_12349;(statearr_12370[13] = inst_12342);
return statearr_12370;
})();var statearr_12371_12394 = state_12349__$1;(statearr_12371_12394[2] = null);
(statearr_12371_12394[1] = 2);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_12375 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12375[0] = state_machine__6161__auto__);
(statearr_12375[1] = 1);
return statearr_12375;
});
var state_machine__6161__auto____1 = (function (state_12349){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_12349);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e12376){if((e12376 instanceof Object))
{var ex__6164__auto__ = e12376;var statearr_12377_12395 = state_12349;(statearr_12377_12395[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12349);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12376;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12396 = state_12349;
state_12349 = G__12396;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_12349){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_12349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_12378 = f__6176__auto__.call(null);(statearr_12378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___12379);
return statearr_12378;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6175__auto___12504 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_12480){var state_val_12481 = (state_12480[1]);if((state_val_12481 === 1))
{var inst_12451 = cljs.core.vec.call(null,chs);var inst_12452 = inst_12451;var state_12480__$1 = (function (){var statearr_12482 = state_12480;(statearr_12482[7] = inst_12452);
return statearr_12482;
})();var statearr_12483_12505 = state_12480__$1;(statearr_12483_12505[2] = null);
(statearr_12483_12505[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12481 === 2))
{var inst_12452 = (state_12480[7]);var inst_12454 = cljs.core.count.call(null,inst_12452);var inst_12455 = (inst_12454 > 0);var state_12480__$1 = state_12480;if(cljs.core.truth_(inst_12455))
{var statearr_12484_12506 = state_12480__$1;(statearr_12484_12506[1] = 4);
} else
{var statearr_12485_12507 = state_12480__$1;(statearr_12485_12507[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12481 === 3))
{var inst_12478 = (state_12480[2]);var state_12480__$1 = state_12480;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12480__$1,inst_12478);
} else
{if((state_val_12481 === 4))
{var inst_12452 = (state_12480[7]);var state_12480__$1 = state_12480;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12480__$1,7,inst_12452);
} else
{if((state_val_12481 === 5))
{var inst_12474 = cljs.core.async.close_BANG_.call(null,out);var state_12480__$1 = state_12480;var statearr_12486_12508 = state_12480__$1;(statearr_12486_12508[2] = inst_12474);
(statearr_12486_12508[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12481 === 6))
{var inst_12476 = (state_12480[2]);var state_12480__$1 = state_12480;var statearr_12487_12509 = state_12480__$1;(statearr_12487_12509[2] = inst_12476);
(statearr_12487_12509[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12481 === 7))
{var inst_12460 = (state_12480[8]);var inst_12459 = (state_12480[9]);var inst_12459__$1 = (state_12480[2]);var inst_12460__$1 = cljs.core.nth.call(null,inst_12459__$1,0,null);var inst_12461 = cljs.core.nth.call(null,inst_12459__$1,1,null);var inst_12462 = (inst_12460__$1 == null);var state_12480__$1 = (function (){var statearr_12488 = state_12480;(statearr_12488[8] = inst_12460__$1);
(statearr_12488[10] = inst_12461);
(statearr_12488[9] = inst_12459__$1);
return statearr_12488;
})();if(cljs.core.truth_(inst_12462))
{var statearr_12489_12510 = state_12480__$1;(statearr_12489_12510[1] = 8);
} else
{var statearr_12490_12511 = state_12480__$1;(statearr_12490_12511[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12481 === 8))
{var inst_12460 = (state_12480[8]);var inst_12461 = (state_12480[10]);var inst_12459 = (state_12480[9]);var inst_12452 = (state_12480[7]);var inst_12464 = (function (){var c = inst_12461;var v = inst_12460;var vec__12457 = inst_12459;var cs = inst_12452;return ((function (c,v,vec__12457,cs,inst_12460,inst_12461,inst_12459,inst_12452,state_val_12481){
return (function (p1__12397_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12397_SHARP_);
});
;})(c,v,vec__12457,cs,inst_12460,inst_12461,inst_12459,inst_12452,state_val_12481))
})();var inst_12465 = cljs.core.filterv.call(null,inst_12464,inst_12452);var inst_12452__$1 = inst_12465;var state_12480__$1 = (function (){var statearr_12491 = state_12480;(statearr_12491[7] = inst_12452__$1);
return statearr_12491;
})();var statearr_12492_12512 = state_12480__$1;(statearr_12492_12512[2] = null);
(statearr_12492_12512[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12481 === 9))
{var inst_12460 = (state_12480[8]);var state_12480__$1 = state_12480;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12480__$1,11,out,inst_12460);
} else
{if((state_val_12481 === 10))
{var inst_12472 = (state_12480[2]);var state_12480__$1 = state_12480;var statearr_12494_12513 = state_12480__$1;(statearr_12494_12513[2] = inst_12472);
(statearr_12494_12513[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12481 === 11))
{var inst_12452 = (state_12480[7]);var inst_12469 = (state_12480[2]);var tmp12493 = inst_12452;var inst_12452__$1 = tmp12493;var state_12480__$1 = (function (){var statearr_12495 = state_12480;(statearr_12495[11] = inst_12469);
(statearr_12495[7] = inst_12452__$1);
return statearr_12495;
})();var statearr_12496_12514 = state_12480__$1;(statearr_12496_12514[2] = null);
(statearr_12496_12514[1] = 2);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_12500 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12500[0] = state_machine__6161__auto__);
(statearr_12500[1] = 1);
return statearr_12500;
});
var state_machine__6161__auto____1 = (function (state_12480){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_12480);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e12501){if((e12501 instanceof Object))
{var ex__6164__auto__ = e12501;var statearr_12502_12515 = state_12480;(statearr_12502_12515[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12480);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12501;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12516 = state_12480;
state_12480 = G__12516;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_12480){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_12480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_12503 = f__6176__auto__.call(null);(statearr_12503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___12504);
return statearr_12503;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6175__auto___12609 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_12586){var state_val_12587 = (state_12586[1]);if((state_val_12587 === 1))
{var inst_12563 = 0;var state_12586__$1 = (function (){var statearr_12588 = state_12586;(statearr_12588[7] = inst_12563);
return statearr_12588;
})();var statearr_12589_12610 = state_12586__$1;(statearr_12589_12610[2] = null);
(statearr_12589_12610[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12587 === 2))
{var inst_12563 = (state_12586[7]);var inst_12565 = (inst_12563 < n);var state_12586__$1 = state_12586;if(cljs.core.truth_(inst_12565))
{var statearr_12590_12611 = state_12586__$1;(statearr_12590_12611[1] = 4);
} else
{var statearr_12591_12612 = state_12586__$1;(statearr_12591_12612[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12587 === 3))
{var inst_12583 = (state_12586[2]);var inst_12584 = cljs.core.async.close_BANG_.call(null,out);var state_12586__$1 = (function (){var statearr_12592 = state_12586;(statearr_12592[8] = inst_12583);
return statearr_12592;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12586__$1,inst_12584);
} else
{if((state_val_12587 === 4))
{var state_12586__$1 = state_12586;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12586__$1,7,ch);
} else
{if((state_val_12587 === 5))
{var state_12586__$1 = state_12586;var statearr_12593_12613 = state_12586__$1;(statearr_12593_12613[2] = null);
(statearr_12593_12613[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12587 === 6))
{var inst_12581 = (state_12586[2]);var state_12586__$1 = state_12586;var statearr_12594_12614 = state_12586__$1;(statearr_12594_12614[2] = inst_12581);
(statearr_12594_12614[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12587 === 7))
{var inst_12568 = (state_12586[9]);var inst_12568__$1 = (state_12586[2]);var inst_12569 = (inst_12568__$1 == null);var inst_12570 = cljs.core.not.call(null,inst_12569);var state_12586__$1 = (function (){var statearr_12595 = state_12586;(statearr_12595[9] = inst_12568__$1);
return statearr_12595;
})();if(inst_12570)
{var statearr_12596_12615 = state_12586__$1;(statearr_12596_12615[1] = 8);
} else
{var statearr_12597_12616 = state_12586__$1;(statearr_12597_12616[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12587 === 8))
{var inst_12568 = (state_12586[9]);var state_12586__$1 = state_12586;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12586__$1,11,out,inst_12568);
} else
{if((state_val_12587 === 9))
{var state_12586__$1 = state_12586;var statearr_12598_12617 = state_12586__$1;(statearr_12598_12617[2] = null);
(statearr_12598_12617[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12587 === 10))
{var inst_12578 = (state_12586[2]);var state_12586__$1 = state_12586;var statearr_12599_12618 = state_12586__$1;(statearr_12599_12618[2] = inst_12578);
(statearr_12599_12618[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12587 === 11))
{var inst_12563 = (state_12586[7]);var inst_12573 = (state_12586[2]);var inst_12574 = (inst_12563 + 1);var inst_12563__$1 = inst_12574;var state_12586__$1 = (function (){var statearr_12600 = state_12586;(statearr_12600[10] = inst_12573);
(statearr_12600[7] = inst_12563__$1);
return statearr_12600;
})();var statearr_12601_12619 = state_12586__$1;(statearr_12601_12619[2] = null);
(statearr_12601_12619[1] = 2);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_12605 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12605[0] = state_machine__6161__auto__);
(statearr_12605[1] = 1);
return statearr_12605;
});
var state_machine__6161__auto____1 = (function (state_12586){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_12586);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e12606){if((e12606 instanceof Object))
{var ex__6164__auto__ = e12606;var statearr_12607_12620 = state_12586;(statearr_12607_12620[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12586);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12606;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12621 = state_12586;
state_12586 = G__12621;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_12586){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_12586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_12608 = f__6176__auto__.call(null);(statearr_12608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___12609);
return statearr_12608;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6175__auto___12718 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_12693){var state_val_12694 = (state_12693[1]);if((state_val_12694 === 1))
{var inst_12670 = null;var state_12693__$1 = (function (){var statearr_12695 = state_12693;(statearr_12695[7] = inst_12670);
return statearr_12695;
})();var statearr_12696_12719 = state_12693__$1;(statearr_12696_12719[2] = null);
(statearr_12696_12719[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12694 === 2))
{var state_12693__$1 = state_12693;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12693__$1,4,ch);
} else
{if((state_val_12694 === 3))
{var inst_12690 = (state_12693[2]);var inst_12691 = cljs.core.async.close_BANG_.call(null,out);var state_12693__$1 = (function (){var statearr_12697 = state_12693;(statearr_12697[8] = inst_12690);
return statearr_12697;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12693__$1,inst_12691);
} else
{if((state_val_12694 === 4))
{var inst_12673 = (state_12693[9]);var inst_12673__$1 = (state_12693[2]);var inst_12674 = (inst_12673__$1 == null);var inst_12675 = cljs.core.not.call(null,inst_12674);var state_12693__$1 = (function (){var statearr_12698 = state_12693;(statearr_12698[9] = inst_12673__$1);
return statearr_12698;
})();if(inst_12675)
{var statearr_12699_12720 = state_12693__$1;(statearr_12699_12720[1] = 5);
} else
{var statearr_12700_12721 = state_12693__$1;(statearr_12700_12721[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12694 === 5))
{var inst_12673 = (state_12693[9]);var inst_12670 = (state_12693[7]);var inst_12677 = cljs.core._EQ_.call(null,inst_12673,inst_12670);var state_12693__$1 = state_12693;if(inst_12677)
{var statearr_12701_12722 = state_12693__$1;(statearr_12701_12722[1] = 8);
} else
{var statearr_12702_12723 = state_12693__$1;(statearr_12702_12723[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12694 === 6))
{var state_12693__$1 = state_12693;var statearr_12704_12724 = state_12693__$1;(statearr_12704_12724[2] = null);
(statearr_12704_12724[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12694 === 7))
{var inst_12688 = (state_12693[2]);var state_12693__$1 = state_12693;var statearr_12705_12725 = state_12693__$1;(statearr_12705_12725[2] = inst_12688);
(statearr_12705_12725[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12694 === 8))
{var inst_12670 = (state_12693[7]);var tmp12703 = inst_12670;var inst_12670__$1 = tmp12703;var state_12693__$1 = (function (){var statearr_12706 = state_12693;(statearr_12706[7] = inst_12670__$1);
return statearr_12706;
})();var statearr_12707_12726 = state_12693__$1;(statearr_12707_12726[2] = null);
(statearr_12707_12726[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12694 === 9))
{var inst_12673 = (state_12693[9]);var state_12693__$1 = state_12693;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12693__$1,11,out,inst_12673);
} else
{if((state_val_12694 === 10))
{var inst_12685 = (state_12693[2]);var state_12693__$1 = state_12693;var statearr_12708_12727 = state_12693__$1;(statearr_12708_12727[2] = inst_12685);
(statearr_12708_12727[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12694 === 11))
{var inst_12673 = (state_12693[9]);var inst_12682 = (state_12693[2]);var inst_12670 = inst_12673;var state_12693__$1 = (function (){var statearr_12709 = state_12693;(statearr_12709[7] = inst_12670);
(statearr_12709[10] = inst_12682);
return statearr_12709;
})();var statearr_12710_12728 = state_12693__$1;(statearr_12710_12728[2] = null);
(statearr_12710_12728[1] = 2);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_12714 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12714[0] = state_machine__6161__auto__);
(statearr_12714[1] = 1);
return statearr_12714;
});
var state_machine__6161__auto____1 = (function (state_12693){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_12693);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e12715){if((e12715 instanceof Object))
{var ex__6164__auto__ = e12715;var statearr_12716_12729 = state_12693;(statearr_12716_12729[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12693);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12715;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12730 = state_12693;
state_12693 = G__12730;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_12693){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_12693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_12717 = f__6176__auto__.call(null);(statearr_12717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___12718);
return statearr_12717;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6175__auto___12865 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_12835){var state_val_12836 = (state_12835[1]);if((state_val_12836 === 1))
{var inst_12798 = (new Array(n));var inst_12799 = inst_12798;var inst_12800 = 0;var state_12835__$1 = (function (){var statearr_12837 = state_12835;(statearr_12837[7] = inst_12800);
(statearr_12837[8] = inst_12799);
return statearr_12837;
})();var statearr_12838_12866 = state_12835__$1;(statearr_12838_12866[2] = null);
(statearr_12838_12866[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 2))
{var state_12835__$1 = state_12835;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12835__$1,4,ch);
} else
{if((state_val_12836 === 3))
{var inst_12833 = (state_12835[2]);var state_12835__$1 = state_12835;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12835__$1,inst_12833);
} else
{if((state_val_12836 === 4))
{var inst_12803 = (state_12835[9]);var inst_12803__$1 = (state_12835[2]);var inst_12804 = (inst_12803__$1 == null);var inst_12805 = cljs.core.not.call(null,inst_12804);var state_12835__$1 = (function (){var statearr_12839 = state_12835;(statearr_12839[9] = inst_12803__$1);
return statearr_12839;
})();if(inst_12805)
{var statearr_12840_12867 = state_12835__$1;(statearr_12840_12867[1] = 5);
} else
{var statearr_12841_12868 = state_12835__$1;(statearr_12841_12868[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 5))
{var inst_12803 = (state_12835[9]);var inst_12808 = (state_12835[10]);var inst_12800 = (state_12835[7]);var inst_12799 = (state_12835[8]);var inst_12807 = (inst_12799[inst_12800] = inst_12803);var inst_12808__$1 = (inst_12800 + 1);var inst_12809 = (inst_12808__$1 < n);var state_12835__$1 = (function (){var statearr_12842 = state_12835;(statearr_12842[10] = inst_12808__$1);
(statearr_12842[11] = inst_12807);
return statearr_12842;
})();if(cljs.core.truth_(inst_12809))
{var statearr_12843_12869 = state_12835__$1;(statearr_12843_12869[1] = 8);
} else
{var statearr_12844_12870 = state_12835__$1;(statearr_12844_12870[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 6))
{var inst_12800 = (state_12835[7]);var inst_12821 = (inst_12800 > 0);var state_12835__$1 = state_12835;if(cljs.core.truth_(inst_12821))
{var statearr_12846_12871 = state_12835__$1;(statearr_12846_12871[1] = 12);
} else
{var statearr_12847_12872 = state_12835__$1;(statearr_12847_12872[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 7))
{var inst_12831 = (state_12835[2]);var state_12835__$1 = state_12835;var statearr_12848_12873 = state_12835__$1;(statearr_12848_12873[2] = inst_12831);
(statearr_12848_12873[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 8))
{var inst_12808 = (state_12835[10]);var inst_12799 = (state_12835[8]);var tmp12845 = inst_12799;var inst_12799__$1 = tmp12845;var inst_12800 = inst_12808;var state_12835__$1 = (function (){var statearr_12849 = state_12835;(statearr_12849[7] = inst_12800);
(statearr_12849[8] = inst_12799__$1);
return statearr_12849;
})();var statearr_12850_12874 = state_12835__$1;(statearr_12850_12874[2] = null);
(statearr_12850_12874[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 9))
{var inst_12799 = (state_12835[8]);var inst_12813 = cljs.core.vec.call(null,inst_12799);var state_12835__$1 = state_12835;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12835__$1,11,out,inst_12813);
} else
{if((state_val_12836 === 10))
{var inst_12819 = (state_12835[2]);var state_12835__$1 = state_12835;var statearr_12851_12875 = state_12835__$1;(statearr_12851_12875[2] = inst_12819);
(statearr_12851_12875[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 11))
{var inst_12815 = (state_12835[2]);var inst_12816 = (new Array(n));var inst_12799 = inst_12816;var inst_12800 = 0;var state_12835__$1 = (function (){var statearr_12852 = state_12835;(statearr_12852[12] = inst_12815);
(statearr_12852[7] = inst_12800);
(statearr_12852[8] = inst_12799);
return statearr_12852;
})();var statearr_12853_12876 = state_12835__$1;(statearr_12853_12876[2] = null);
(statearr_12853_12876[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 12))
{var inst_12799 = (state_12835[8]);var inst_12823 = cljs.core.vec.call(null,inst_12799);var state_12835__$1 = state_12835;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12835__$1,15,out,inst_12823);
} else
{if((state_val_12836 === 13))
{var state_12835__$1 = state_12835;var statearr_12854_12877 = state_12835__$1;(statearr_12854_12877[2] = null);
(statearr_12854_12877[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 14))
{var inst_12828 = (state_12835[2]);var inst_12829 = cljs.core.async.close_BANG_.call(null,out);var state_12835__$1 = (function (){var statearr_12855 = state_12835;(statearr_12855[13] = inst_12828);
return statearr_12855;
})();var statearr_12856_12878 = state_12835__$1;(statearr_12856_12878[2] = inst_12829);
(statearr_12856_12878[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 15))
{var inst_12825 = (state_12835[2]);var state_12835__$1 = state_12835;var statearr_12857_12879 = state_12835__$1;(statearr_12857_12879[2] = inst_12825);
(statearr_12857_12879[1] = 14);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_12861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12861[0] = state_machine__6161__auto__);
(statearr_12861[1] = 1);
return statearr_12861;
});
var state_machine__6161__auto____1 = (function (state_12835){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_12835);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e12862){if((e12862 instanceof Object))
{var ex__6164__auto__ = e12862;var statearr_12863_12880 = state_12835;(statearr_12863_12880[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12835);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12862;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12881 = state_12835;
state_12835 = G__12881;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_12835){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_12835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_12864 = f__6176__auto__.call(null);(statearr_12864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___12865);
return statearr_12864;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6175__auto___13024 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_12994){var state_val_12995 = (state_12994[1]);if((state_val_12995 === 1))
{var inst_12953 = [];var inst_12954 = inst_12953;var inst_12955 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_12994__$1 = (function (){var statearr_12996 = state_12994;(statearr_12996[7] = inst_12954);
(statearr_12996[8] = inst_12955);
return statearr_12996;
})();var statearr_12997_13025 = state_12994__$1;(statearr_12997_13025[2] = null);
(statearr_12997_13025[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12995 === 2))
{var state_12994__$1 = state_12994;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12994__$1,4,ch);
} else
{if((state_val_12995 === 3))
{var inst_12992 = (state_12994[2]);var state_12994__$1 = state_12994;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12994__$1,inst_12992);
} else
{if((state_val_12995 === 4))
{var inst_12958 = (state_12994[9]);var inst_12958__$1 = (state_12994[2]);var inst_12959 = (inst_12958__$1 == null);var inst_12960 = cljs.core.not.call(null,inst_12959);var state_12994__$1 = (function (){var statearr_12998 = state_12994;(statearr_12998[9] = inst_12958__$1);
return statearr_12998;
})();if(inst_12960)
{var statearr_12999_13026 = state_12994__$1;(statearr_12999_13026[1] = 5);
} else
{var statearr_13000_13027 = state_12994__$1;(statearr_13000_13027[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12995 === 5))
{var inst_12958 = (state_12994[9]);var inst_12962 = (state_12994[10]);var inst_12955 = (state_12994[8]);var inst_12962__$1 = f.call(null,inst_12958);var inst_12963 = cljs.core._EQ_.call(null,inst_12962__$1,inst_12955);var inst_12964 = cljs.core.keyword_identical_QMARK_.call(null,inst_12955,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_12965 = (inst_12963) || (inst_12964);var state_12994__$1 = (function (){var statearr_13001 = state_12994;(statearr_13001[10] = inst_12962__$1);
return statearr_13001;
})();if(cljs.core.truth_(inst_12965))
{var statearr_13002_13028 = state_12994__$1;(statearr_13002_13028[1] = 8);
} else
{var statearr_13003_13029 = state_12994__$1;(statearr_13003_13029[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12995 === 6))
{var inst_12954 = (state_12994[7]);var inst_12979 = inst_12954.length;var inst_12980 = (inst_12979 > 0);var state_12994__$1 = state_12994;if(cljs.core.truth_(inst_12980))
{var statearr_13005_13030 = state_12994__$1;(statearr_13005_13030[1] = 12);
} else
{var statearr_13006_13031 = state_12994__$1;(statearr_13006_13031[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12995 === 7))
{var inst_12990 = (state_12994[2]);var state_12994__$1 = state_12994;var statearr_13007_13032 = state_12994__$1;(statearr_13007_13032[2] = inst_12990);
(statearr_13007_13032[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12995 === 8))
{var inst_12958 = (state_12994[9]);var inst_12962 = (state_12994[10]);var inst_12954 = (state_12994[7]);var inst_12967 = inst_12954.push(inst_12958);var tmp13004 = inst_12954;var inst_12954__$1 = tmp13004;var inst_12955 = inst_12962;var state_12994__$1 = (function (){var statearr_13008 = state_12994;(statearr_13008[11] = inst_12967);
(statearr_13008[7] = inst_12954__$1);
(statearr_13008[8] = inst_12955);
return statearr_13008;
})();var statearr_13009_13033 = state_12994__$1;(statearr_13009_13033[2] = null);
(statearr_13009_13033[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12995 === 9))
{var inst_12954 = (state_12994[7]);var inst_12970 = cljs.core.vec.call(null,inst_12954);var state_12994__$1 = state_12994;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12994__$1,11,out,inst_12970);
} else
{if((state_val_12995 === 10))
{var inst_12977 = (state_12994[2]);var state_12994__$1 = state_12994;var statearr_13010_13034 = state_12994__$1;(statearr_13010_13034[2] = inst_12977);
(statearr_13010_13034[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12995 === 11))
{var inst_12958 = (state_12994[9]);var inst_12962 = (state_12994[10]);var inst_12972 = (state_12994[2]);var inst_12973 = [];var inst_12974 = inst_12973.push(inst_12958);var inst_12954 = inst_12973;var inst_12955 = inst_12962;var state_12994__$1 = (function (){var statearr_13011 = state_12994;(statearr_13011[12] = inst_12974);
(statearr_13011[13] = inst_12972);
(statearr_13011[7] = inst_12954);
(statearr_13011[8] = inst_12955);
return statearr_13011;
})();var statearr_13012_13035 = state_12994__$1;(statearr_13012_13035[2] = null);
(statearr_13012_13035[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12995 === 12))
{var inst_12954 = (state_12994[7]);var inst_12982 = cljs.core.vec.call(null,inst_12954);var state_12994__$1 = state_12994;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12994__$1,15,out,inst_12982);
} else
{if((state_val_12995 === 13))
{var state_12994__$1 = state_12994;var statearr_13013_13036 = state_12994__$1;(statearr_13013_13036[2] = null);
(statearr_13013_13036[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12995 === 14))
{var inst_12987 = (state_12994[2]);var inst_12988 = cljs.core.async.close_BANG_.call(null,out);var state_12994__$1 = (function (){var statearr_13014 = state_12994;(statearr_13014[14] = inst_12987);
return statearr_13014;
})();var statearr_13015_13037 = state_12994__$1;(statearr_13015_13037[2] = inst_12988);
(statearr_13015_13037[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12995 === 15))
{var inst_12984 = (state_12994[2]);var state_12994__$1 = state_12994;var statearr_13016_13038 = state_12994__$1;(statearr_13016_13038[2] = inst_12984);
(statearr_13016_13038[1] = 14);
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_13020 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13020[0] = state_machine__6161__auto__);
(statearr_13020[1] = 1);
return statearr_13020;
});
var state_machine__6161__auto____1 = (function (state_12994){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_12994);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e13021){if((e13021 instanceof Object))
{var ex__6164__auto__ = e13021;var statearr_13022_13039 = state_12994;(statearr_13022_13039[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12994);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13021;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13040 = state_12994;
state_12994 = G__13040;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_12994){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_12994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_13023 = f__6176__auto__.call(null);(statearr_13023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___13024);
return statearr_13023;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
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
