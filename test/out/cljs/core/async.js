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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10460 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10460 = (function (f,fn_handler,meta10461){
this.f = f;
this.fn_handler = fn_handler;
this.meta10461 = meta10461;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10460.cljs$lang$type = true;
cljs.core.async.t10460.cljs$lang$ctorStr = "cljs.core.async/t10460";
cljs.core.async.t10460.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10460");
});
cljs.core.async.t10460.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10460.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10460.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10462){var self__ = this;
var _10462__$1 = this;return self__.meta10461;
});
cljs.core.async.t10460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10462,meta10461__$1){var self__ = this;
var _10462__$1 = this;return (new cljs.core.async.t10460(self__.f,self__.fn_handler,meta10461__$1));
});
cljs.core.async.__GT_t10460 = (function __GT_t10460(f__$1,fn_handler__$1,meta10461){return (new cljs.core.async.t10460(f__$1,fn_handler__$1,meta10461));
});
}
return (new cljs.core.async.t10460(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10464 = buff;if(G__10464)
{var bit__4052__auto__ = null;if(cljs.core.truth_((function (){var or__3408__auto__ = bit__4052__auto__;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return G__10464.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10464.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10464);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10464);
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
{var val_10465 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10465);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_10465);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4250__auto___10466 = n;var x_10467 = 0;while(true){
if((x_10467 < n__4250__auto___10466))
{(a[x_10467] = 0);
{
var G__10468 = (x_10467 + 1);
x_10467 = G__10468;
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
var G__10469 = (i + 1);
i = G__10469;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10473 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10473 = (function (flag,alt_flag,meta10474){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10474 = meta10474;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10473.cljs$lang$type = true;
cljs.core.async.t10473.cljs$lang$ctorStr = "cljs.core.async/t10473";
cljs.core.async.t10473.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10473");
});
cljs.core.async.t10473.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10473.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t10473.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t10473.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10475){var self__ = this;
var _10475__$1 = this;return self__.meta10474;
});
cljs.core.async.t10473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10475,meta10474__$1){var self__ = this;
var _10475__$1 = this;return (new cljs.core.async.t10473(self__.flag,self__.alt_flag,meta10474__$1));
});
cljs.core.async.__GT_t10473 = (function __GT_t10473(flag__$1,alt_flag__$1,meta10474){return (new cljs.core.async.t10473(flag__$1,alt_flag__$1,meta10474));
});
}
return (new cljs.core.async.t10473(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10479 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10479 = (function (cb,flag,alt_handler,meta10480){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10480 = meta10480;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10479.cljs$lang$type = true;
cljs.core.async.t10479.cljs$lang$ctorStr = "cljs.core.async/t10479";
cljs.core.async.t10479.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10479");
});
cljs.core.async.t10479.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10479.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10479.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10481){var self__ = this;
var _10481__$1 = this;return self__.meta10480;
});
cljs.core.async.t10479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10481,meta10480__$1){var self__ = this;
var _10481__$1 = this;return (new cljs.core.async.t10479(self__.cb,self__.flag,self__.alt_handler,meta10480__$1));
});
cljs.core.async.__GT_t10479 = (function __GT_t10479(cb__$1,flag__$1,alt_handler__$1,meta10480){return (new cljs.core.async.t10479(cb__$1,flag__$1,alt_handler__$1,meta10480));
});
}
return (new cljs.core.async.t10479(cb,flag,alt_handler,null));
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
return (function (p1__10482_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10482_SHARP_,port], null));
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
var G__10483 = (i + 1);
i = G__10483;
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
var alts_BANG___delegate = function (ports,p__10484){var map__10486 = p__10484;var map__10486__$1 = ((cljs.core.seq_QMARK_.call(null,map__10486))?cljs.core.apply.call(null,cljs.core.hash_map,map__10486):map__10486);var opts = map__10486__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10484 = null;if (arguments.length > 1) {
  p__10484 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10484);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10487){
var ports = cljs.core.first(arglist__10487);
var p__10484 = cljs.core.rest(arglist__10487);
return alts_BANG___delegate(ports,p__10484);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10495 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10495 = (function (ch,f,map_LT_,meta10496){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10496 = meta10496;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10495.cljs$lang$type = true;
cljs.core.async.t10495.cljs$lang$ctorStr = "cljs.core.async/t10495";
cljs.core.async.t10495.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10495");
});
cljs.core.async.t10495.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10495.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10495.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10495.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10498 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10498 = (function (fn1,_,meta10496,ch,f,map_LT_,meta10499){
this.fn1 = fn1;
this._ = _;
this.meta10496 = meta10496;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10499 = meta10499;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10498.cljs$lang$type = true;
cljs.core.async.t10498.cljs$lang$ctorStr = "cljs.core.async/t10498";
cljs.core.async.t10498.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10498");
});
cljs.core.async.t10498.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10498.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t10498.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t10498.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__10488_SHARP_){return f1.call(null,(((p1__10488_SHARP_ == null))?null:self__.f.call(null,p1__10488_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t10498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10500){var self__ = this;
var _10500__$1 = this;return self__.meta10499;
});
cljs.core.async.t10498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10500,meta10499__$1){var self__ = this;
var _10500__$1 = this;return (new cljs.core.async.t10498(self__.fn1,self__._,self__.meta10496,self__.ch,self__.f,self__.map_LT_,meta10499__$1));
});
cljs.core.async.__GT_t10498 = (function __GT_t10498(fn1__$1,___$2,meta10496__$1,ch__$2,f__$2,map_LT___$2,meta10499){return (new cljs.core.async.t10498(fn1__$1,___$2,meta10496__$1,ch__$2,f__$2,map_LT___$2,meta10499));
});
}
return (new cljs.core.async.t10498(fn1,___$1,self__.meta10496,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t10495.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10495.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10497){var self__ = this;
var _10497__$1 = this;return self__.meta10496;
});
cljs.core.async.t10495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10497,meta10496__$1){var self__ = this;
var _10497__$1 = this;return (new cljs.core.async.t10495(self__.ch,self__.f,self__.map_LT_,meta10496__$1));
});
cljs.core.async.__GT_t10495 = (function __GT_t10495(ch__$1,f__$1,map_LT___$1,meta10496){return (new cljs.core.async.t10495(ch__$1,f__$1,map_LT___$1,meta10496));
});
}
return (new cljs.core.async.t10495(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10504 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10504 = (function (ch,f,map_GT_,meta10505){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10505 = meta10505;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10504.cljs$lang$type = true;
cljs.core.async.t10504.cljs$lang$ctorStr = "cljs.core.async/t10504";
cljs.core.async.t10504.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10504");
});
cljs.core.async.t10504.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10504.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10504.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10504.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10504.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10504.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10506){var self__ = this;
var _10506__$1 = this;return self__.meta10505;
});
cljs.core.async.t10504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10506,meta10505__$1){var self__ = this;
var _10506__$1 = this;return (new cljs.core.async.t10504(self__.ch,self__.f,self__.map_GT_,meta10505__$1));
});
cljs.core.async.__GT_t10504 = (function __GT_t10504(ch__$1,f__$1,map_GT___$1,meta10505){return (new cljs.core.async.t10504(ch__$1,f__$1,map_GT___$1,meta10505));
});
}
return (new cljs.core.async.t10504(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10510 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10510 = (function (ch,p,filter_GT_,meta10511){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10511 = meta10511;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10510.cljs$lang$type = true;
cljs.core.async.t10510.cljs$lang$ctorStr = "cljs.core.async/t10510";
cljs.core.async.t10510.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10510");
});
cljs.core.async.t10510.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10510.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10510.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10510.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10510.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10510.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10512){var self__ = this;
var _10512__$1 = this;return self__.meta10511;
});
cljs.core.async.t10510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10512,meta10511__$1){var self__ = this;
var _10512__$1 = this;return (new cljs.core.async.t10510(self__.ch,self__.p,self__.filter_GT_,meta10511__$1));
});
cljs.core.async.__GT_t10510 = (function __GT_t10510(ch__$1,p__$1,filter_GT___$1,meta10511){return (new cljs.core.async.t10510(ch__$1,p__$1,filter_GT___$1,meta10511));
});
}
return (new cljs.core.async.t10510(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6175__auto___10595 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_10574){var state_val_10575 = (state_10574[1]);if((state_val_10575 === 1))
{var state_10574__$1 = state_10574;var statearr_10576_10596 = state_10574__$1;(statearr_10576_10596[2] = null);
(statearr_10576_10596[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10575 === 2))
{var state_10574__$1 = state_10574;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10574__$1,4,ch);
} else
{if((state_val_10575 === 3))
{var inst_10572 = (state_10574[2]);var state_10574__$1 = state_10574;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10574__$1,inst_10572);
} else
{if((state_val_10575 === 4))
{var inst_10556 = (state_10574[7]);var inst_10556__$1 = (state_10574[2]);var inst_10557 = (inst_10556__$1 == null);var state_10574__$1 = (function (){var statearr_10577 = state_10574;(statearr_10577[7] = inst_10556__$1);
return statearr_10577;
})();if(cljs.core.truth_(inst_10557))
{var statearr_10578_10597 = state_10574__$1;(statearr_10578_10597[1] = 5);
} else
{var statearr_10579_10598 = state_10574__$1;(statearr_10579_10598[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10575 === 5))
{var inst_10559 = cljs.core.async.close_BANG_.call(null,out);var state_10574__$1 = state_10574;var statearr_10580_10599 = state_10574__$1;(statearr_10580_10599[2] = inst_10559);
(statearr_10580_10599[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10575 === 6))
{var inst_10556 = (state_10574[7]);var inst_10561 = p.call(null,inst_10556);var state_10574__$1 = state_10574;if(cljs.core.truth_(inst_10561))
{var statearr_10581_10600 = state_10574__$1;(statearr_10581_10600[1] = 8);
} else
{var statearr_10582_10601 = state_10574__$1;(statearr_10582_10601[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10575 === 7))
{var inst_10570 = (state_10574[2]);var state_10574__$1 = state_10574;var statearr_10583_10602 = state_10574__$1;(statearr_10583_10602[2] = inst_10570);
(statearr_10583_10602[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10575 === 8))
{var inst_10556 = (state_10574[7]);var state_10574__$1 = state_10574;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10574__$1,11,out,inst_10556);
} else
{if((state_val_10575 === 9))
{var state_10574__$1 = state_10574;var statearr_10584_10603 = state_10574__$1;(statearr_10584_10603[2] = null);
(statearr_10584_10603[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10575 === 10))
{var inst_10567 = (state_10574[2]);var state_10574__$1 = (function (){var statearr_10585 = state_10574;(statearr_10585[8] = inst_10567);
return statearr_10585;
})();var statearr_10586_10604 = state_10574__$1;(statearr_10586_10604[2] = null);
(statearr_10586_10604[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10575 === 11))
{var inst_10564 = (state_10574[2]);var state_10574__$1 = state_10574;var statearr_10587_10605 = state_10574__$1;(statearr_10587_10605[2] = inst_10564);
(statearr_10587_10605[1] = 10);
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
var state_machine__6161__auto____0 = (function (){var statearr_10591 = [null,null,null,null,null,null,null,null,null];(statearr_10591[0] = state_machine__6161__auto__);
(statearr_10591[1] = 1);
return statearr_10591;
});
var state_machine__6161__auto____1 = (function (state_10574){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_10574);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e10592){if((e10592 instanceof Object))
{var ex__6164__auto__ = e10592;var statearr_10593_10606 = state_10574;(statearr_10593_10606[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10574);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10592;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10607 = state_10574;
state_10574 = G__10607;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_10574){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_10574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_10594 = f__6176__auto__.call(null);(statearr_10594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___10595);
return statearr_10594;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6175__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_10759){var state_val_10760 = (state_10759[1]);if((state_val_10760 === 1))
{var state_10759__$1 = state_10759;var statearr_10761_10798 = state_10759__$1;(statearr_10761_10798[2] = null);
(statearr_10761_10798[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10760 === 2))
{var state_10759__$1 = state_10759;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10759__$1,4,in$);
} else
{if((state_val_10760 === 3))
{var inst_10757 = (state_10759[2]);var state_10759__$1 = state_10759;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10759__$1,inst_10757);
} else
{if((state_val_10760 === 4))
{var inst_10705 = (state_10759[7]);var inst_10705__$1 = (state_10759[2]);var inst_10706 = (inst_10705__$1 == null);var state_10759__$1 = (function (){var statearr_10762 = state_10759;(statearr_10762[7] = inst_10705__$1);
return statearr_10762;
})();if(cljs.core.truth_(inst_10706))
{var statearr_10763_10799 = state_10759__$1;(statearr_10763_10799[1] = 5);
} else
{var statearr_10764_10800 = state_10759__$1;(statearr_10764_10800[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10760 === 5))
{var inst_10708 = cljs.core.async.close_BANG_.call(null,out);var state_10759__$1 = state_10759;var statearr_10765_10801 = state_10759__$1;(statearr_10765_10801[2] = inst_10708);
(statearr_10765_10801[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10760 === 6))
{var inst_10705 = (state_10759[7]);var inst_10710 = f.call(null,inst_10705);var inst_10715 = cljs.core.seq.call(null,inst_10710);var inst_10716 = inst_10715;var inst_10717 = null;var inst_10718 = 0;var inst_10719 = 0;var state_10759__$1 = (function (){var statearr_10766 = state_10759;(statearr_10766[8] = inst_10718);
(statearr_10766[9] = inst_10719);
(statearr_10766[10] = inst_10716);
(statearr_10766[11] = inst_10717);
return statearr_10766;
})();var statearr_10767_10802 = state_10759__$1;(statearr_10767_10802[2] = null);
(statearr_10767_10802[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10760 === 7))
{var inst_10755 = (state_10759[2]);var state_10759__$1 = state_10759;var statearr_10768_10803 = state_10759__$1;(statearr_10768_10803[2] = inst_10755);
(statearr_10768_10803[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10760 === 8))
{var inst_10718 = (state_10759[8]);var inst_10719 = (state_10759[9]);var inst_10721 = (inst_10719 < inst_10718);var inst_10722 = inst_10721;var state_10759__$1 = state_10759;if(cljs.core.truth_(inst_10722))
{var statearr_10769_10804 = state_10759__$1;(statearr_10769_10804[1] = 10);
} else
{var statearr_10770_10805 = state_10759__$1;(statearr_10770_10805[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10760 === 9))
{var inst_10752 = (state_10759[2]);var state_10759__$1 = (function (){var statearr_10771 = state_10759;(statearr_10771[12] = inst_10752);
return statearr_10771;
})();var statearr_10772_10806 = state_10759__$1;(statearr_10772_10806[2] = null);
(statearr_10772_10806[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10760 === 10))
{var inst_10719 = (state_10759[9]);var inst_10717 = (state_10759[11]);var inst_10724 = cljs.core._nth.call(null,inst_10717,inst_10719);var state_10759__$1 = state_10759;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10759__$1,13,out,inst_10724);
} else
{if((state_val_10760 === 11))
{var inst_10716 = (state_10759[10]);var inst_10730 = (state_10759[13]);var inst_10730__$1 = cljs.core.seq.call(null,inst_10716);var state_10759__$1 = (function (){var statearr_10776 = state_10759;(statearr_10776[13] = inst_10730__$1);
return statearr_10776;
})();if(inst_10730__$1)
{var statearr_10777_10807 = state_10759__$1;(statearr_10777_10807[1] = 14);
} else
{var statearr_10778_10808 = state_10759__$1;(statearr_10778_10808[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10760 === 12))
{var inst_10750 = (state_10759[2]);var state_10759__$1 = state_10759;var statearr_10779_10809 = state_10759__$1;(statearr_10779_10809[2] = inst_10750);
(statearr_10779_10809[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10760 === 13))
{var inst_10718 = (state_10759[8]);var inst_10719 = (state_10759[9]);var inst_10716 = (state_10759[10]);var inst_10717 = (state_10759[11]);var inst_10726 = (state_10759[2]);var inst_10727 = (inst_10719 + 1);var tmp10773 = inst_10718;var tmp10774 = inst_10716;var tmp10775 = inst_10717;var inst_10716__$1 = tmp10774;var inst_10717__$1 = tmp10775;var inst_10718__$1 = tmp10773;var inst_10719__$1 = inst_10727;var state_10759__$1 = (function (){var statearr_10780 = state_10759;(statearr_10780[8] = inst_10718__$1);
(statearr_10780[9] = inst_10719__$1);
(statearr_10780[10] = inst_10716__$1);
(statearr_10780[11] = inst_10717__$1);
(statearr_10780[14] = inst_10726);
return statearr_10780;
})();var statearr_10781_10810 = state_10759__$1;(statearr_10781_10810[2] = null);
(statearr_10781_10810[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10760 === 14))
{var inst_10730 = (state_10759[13]);var inst_10732 = cljs.core.chunked_seq_QMARK_.call(null,inst_10730);var state_10759__$1 = state_10759;if(inst_10732)
{var statearr_10782_10811 = state_10759__$1;(statearr_10782_10811[1] = 17);
} else
{var statearr_10783_10812 = state_10759__$1;(statearr_10783_10812[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10760 === 15))
{var state_10759__$1 = state_10759;var statearr_10784_10813 = state_10759__$1;(statearr_10784_10813[2] = null);
(statearr_10784_10813[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10760 === 16))
{var inst_10748 = (state_10759[2]);var state_10759__$1 = state_10759;var statearr_10785_10814 = state_10759__$1;(statearr_10785_10814[2] = inst_10748);
(statearr_10785_10814[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10760 === 17))
{var inst_10730 = (state_10759[13]);var inst_10734 = cljs.core.chunk_first.call(null,inst_10730);var inst_10735 = cljs.core.chunk_rest.call(null,inst_10730);var inst_10736 = cljs.core.count.call(null,inst_10734);var inst_10716 = inst_10735;var inst_10717 = inst_10734;var inst_10718 = inst_10736;var inst_10719 = 0;var state_10759__$1 = (function (){var statearr_10786 = state_10759;(statearr_10786[8] = inst_10718);
(statearr_10786[9] = inst_10719);
(statearr_10786[10] = inst_10716);
(statearr_10786[11] = inst_10717);
return statearr_10786;
})();var statearr_10787_10815 = state_10759__$1;(statearr_10787_10815[2] = null);
(statearr_10787_10815[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10760 === 18))
{var inst_10730 = (state_10759[13]);var inst_10739 = cljs.core.first.call(null,inst_10730);var state_10759__$1 = state_10759;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10759__$1,20,out,inst_10739);
} else
{if((state_val_10760 === 19))
{var inst_10745 = (state_10759[2]);var state_10759__$1 = state_10759;var statearr_10788_10816 = state_10759__$1;(statearr_10788_10816[2] = inst_10745);
(statearr_10788_10816[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10760 === 20))
{var inst_10730 = (state_10759[13]);var inst_10741 = (state_10759[2]);var inst_10742 = cljs.core.next.call(null,inst_10730);var inst_10716 = inst_10742;var inst_10717 = null;var inst_10718 = 0;var inst_10719 = 0;var state_10759__$1 = (function (){var statearr_10789 = state_10759;(statearr_10789[8] = inst_10718);
(statearr_10789[15] = inst_10741);
(statearr_10789[9] = inst_10719);
(statearr_10789[10] = inst_10716);
(statearr_10789[11] = inst_10717);
return statearr_10789;
})();var statearr_10790_10817 = state_10759__$1;(statearr_10790_10817[2] = null);
(statearr_10790_10817[1] = 8);
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
var state_machine__6161__auto____0 = (function (){var statearr_10794 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10794[0] = state_machine__6161__auto__);
(statearr_10794[1] = 1);
return statearr_10794;
});
var state_machine__6161__auto____1 = (function (state_10759){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_10759);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e10795){if((e10795 instanceof Object))
{var ex__6164__auto__ = e10795;var statearr_10796_10818 = state_10759;(statearr_10796_10818[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10759);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10795;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10819 = state_10759;
state_10759 = G__10819;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_10759){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_10759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_10797 = f__6176__auto__.call(null);(statearr_10797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto__);
return statearr_10797;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6175__auto___10900 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_10879){var state_val_10880 = (state_10879[1]);if((state_val_10880 === 1))
{var state_10879__$1 = state_10879;var statearr_10881_10901 = state_10879__$1;(statearr_10881_10901[2] = null);
(statearr_10881_10901[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10880 === 2))
{var state_10879__$1 = state_10879;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10879__$1,4,from);
} else
{if((state_val_10880 === 3))
{var inst_10877 = (state_10879[2]);var state_10879__$1 = state_10879;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10879__$1,inst_10877);
} else
{if((state_val_10880 === 4))
{var inst_10862 = (state_10879[7]);var inst_10862__$1 = (state_10879[2]);var inst_10863 = (inst_10862__$1 == null);var state_10879__$1 = (function (){var statearr_10882 = state_10879;(statearr_10882[7] = inst_10862__$1);
return statearr_10882;
})();if(cljs.core.truth_(inst_10863))
{var statearr_10883_10902 = state_10879__$1;(statearr_10883_10902[1] = 5);
} else
{var statearr_10884_10903 = state_10879__$1;(statearr_10884_10903[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10880 === 5))
{var state_10879__$1 = state_10879;if(cljs.core.truth_(close_QMARK_))
{var statearr_10885_10904 = state_10879__$1;(statearr_10885_10904[1] = 8);
} else
{var statearr_10886_10905 = state_10879__$1;(statearr_10886_10905[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10880 === 6))
{var inst_10862 = (state_10879[7]);var state_10879__$1 = state_10879;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10879__$1,11,to,inst_10862);
} else
{if((state_val_10880 === 7))
{var inst_10875 = (state_10879[2]);var state_10879__$1 = state_10879;var statearr_10887_10906 = state_10879__$1;(statearr_10887_10906[2] = inst_10875);
(statearr_10887_10906[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10880 === 8))
{var inst_10866 = cljs.core.async.close_BANG_.call(null,to);var state_10879__$1 = state_10879;var statearr_10888_10907 = state_10879__$1;(statearr_10888_10907[2] = inst_10866);
(statearr_10888_10907[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10880 === 9))
{var state_10879__$1 = state_10879;var statearr_10889_10908 = state_10879__$1;(statearr_10889_10908[2] = null);
(statearr_10889_10908[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10880 === 10))
{var inst_10869 = (state_10879[2]);var state_10879__$1 = state_10879;var statearr_10890_10909 = state_10879__$1;(statearr_10890_10909[2] = inst_10869);
(statearr_10890_10909[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10880 === 11))
{var inst_10872 = (state_10879[2]);var state_10879__$1 = (function (){var statearr_10891 = state_10879;(statearr_10891[8] = inst_10872);
return statearr_10891;
})();var statearr_10892_10910 = state_10879__$1;(statearr_10892_10910[2] = null);
(statearr_10892_10910[1] = 2);
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
var state_machine__6161__auto____0 = (function (){var statearr_10896 = [null,null,null,null,null,null,null,null,null];(statearr_10896[0] = state_machine__6161__auto__);
(statearr_10896[1] = 1);
return statearr_10896;
});
var state_machine__6161__auto____1 = (function (state_10879){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_10879);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e10897){if((e10897 instanceof Object))
{var ex__6164__auto__ = e10897;var statearr_10898_10911 = state_10879;(statearr_10898_10911[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10879);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10897;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10912 = state_10879;
state_10879 = G__10912;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_10879){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_10879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_10899 = f__6176__auto__.call(null);(statearr_10899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___10900);
return statearr_10899;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6175__auto___10999 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_10977){var state_val_10978 = (state_10977[1]);if((state_val_10978 === 1))
{var state_10977__$1 = state_10977;var statearr_10979_11000 = state_10977__$1;(statearr_10979_11000[2] = null);
(statearr_10979_11000[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10978 === 2))
{var state_10977__$1 = state_10977;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10977__$1,4,ch);
} else
{if((state_val_10978 === 3))
{var inst_10975 = (state_10977[2]);var state_10977__$1 = state_10977;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10977__$1,inst_10975);
} else
{if((state_val_10978 === 4))
{var inst_10958 = (state_10977[7]);var inst_10958__$1 = (state_10977[2]);var inst_10959 = (inst_10958__$1 == null);var state_10977__$1 = (function (){var statearr_10980 = state_10977;(statearr_10980[7] = inst_10958__$1);
return statearr_10980;
})();if(cljs.core.truth_(inst_10959))
{var statearr_10981_11001 = state_10977__$1;(statearr_10981_11001[1] = 5);
} else
{var statearr_10982_11002 = state_10977__$1;(statearr_10982_11002[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10978 === 5))
{var inst_10961 = cljs.core.async.close_BANG_.call(null,tc);var inst_10962 = cljs.core.async.close_BANG_.call(null,fc);var state_10977__$1 = (function (){var statearr_10983 = state_10977;(statearr_10983[8] = inst_10961);
return statearr_10983;
})();var statearr_10984_11003 = state_10977__$1;(statearr_10984_11003[2] = inst_10962);
(statearr_10984_11003[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10978 === 6))
{var inst_10958 = (state_10977[7]);var inst_10964 = p.call(null,inst_10958);var state_10977__$1 = state_10977;if(cljs.core.truth_(inst_10964))
{var statearr_10985_11004 = state_10977__$1;(statearr_10985_11004[1] = 9);
} else
{var statearr_10986_11005 = state_10977__$1;(statearr_10986_11005[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10978 === 7))
{var inst_10973 = (state_10977[2]);var state_10977__$1 = state_10977;var statearr_10987_11006 = state_10977__$1;(statearr_10987_11006[2] = inst_10973);
(statearr_10987_11006[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10978 === 8))
{var inst_10970 = (state_10977[2]);var state_10977__$1 = (function (){var statearr_10988 = state_10977;(statearr_10988[9] = inst_10970);
return statearr_10988;
})();var statearr_10989_11007 = state_10977__$1;(statearr_10989_11007[2] = null);
(statearr_10989_11007[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10978 === 9))
{var state_10977__$1 = state_10977;var statearr_10990_11008 = state_10977__$1;(statearr_10990_11008[2] = tc);
(statearr_10990_11008[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10978 === 10))
{var state_10977__$1 = state_10977;var statearr_10991_11009 = state_10977__$1;(statearr_10991_11009[2] = fc);
(statearr_10991_11009[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10978 === 11))
{var inst_10958 = (state_10977[7]);var inst_10968 = (state_10977[2]);var state_10977__$1 = state_10977;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10977__$1,8,inst_10968,inst_10958);
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
var state_machine__6161__auto____0 = (function (){var statearr_10995 = [null,null,null,null,null,null,null,null,null,null];(statearr_10995[0] = state_machine__6161__auto__);
(statearr_10995[1] = 1);
return statearr_10995;
});
var state_machine__6161__auto____1 = (function (state_10977){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_10977);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e10996){if((e10996 instanceof Object))
{var ex__6164__auto__ = e10996;var statearr_10997_11010 = state_10977;(statearr_10997_11010[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10977);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10996;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11011 = state_10977;
state_10977 = G__11011;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_10977){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_10977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_10998 = f__6176__auto__.call(null);(statearr_10998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___10999);
return statearr_10998;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6175__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_11058){var state_val_11059 = (state_11058[1]);if((state_val_11059 === 7))
{var inst_11054 = (state_11058[2]);var state_11058__$1 = state_11058;var statearr_11060_11076 = state_11058__$1;(statearr_11060_11076[2] = inst_11054);
(statearr_11060_11076[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11059 === 6))
{var inst_11047 = (state_11058[7]);var inst_11044 = (state_11058[8]);var inst_11051 = f.call(null,inst_11044,inst_11047);var inst_11044__$1 = inst_11051;var state_11058__$1 = (function (){var statearr_11061 = state_11058;(statearr_11061[8] = inst_11044__$1);
return statearr_11061;
})();var statearr_11062_11077 = state_11058__$1;(statearr_11062_11077[2] = null);
(statearr_11062_11077[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11059 === 5))
{var inst_11044 = (state_11058[8]);var state_11058__$1 = state_11058;var statearr_11063_11078 = state_11058__$1;(statearr_11063_11078[2] = inst_11044);
(statearr_11063_11078[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11059 === 4))
{var inst_11047 = (state_11058[7]);var inst_11047__$1 = (state_11058[2]);var inst_11048 = (inst_11047__$1 == null);var state_11058__$1 = (function (){var statearr_11064 = state_11058;(statearr_11064[7] = inst_11047__$1);
return statearr_11064;
})();if(cljs.core.truth_(inst_11048))
{var statearr_11065_11079 = state_11058__$1;(statearr_11065_11079[1] = 5);
} else
{var statearr_11066_11080 = state_11058__$1;(statearr_11066_11080[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11059 === 3))
{var inst_11056 = (state_11058[2]);var state_11058__$1 = state_11058;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11058__$1,inst_11056);
} else
{if((state_val_11059 === 2))
{var state_11058__$1 = state_11058;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11058__$1,4,ch);
} else
{if((state_val_11059 === 1))
{var inst_11044 = init;var state_11058__$1 = (function (){var statearr_11067 = state_11058;(statearr_11067[8] = inst_11044);
return statearr_11067;
})();var statearr_11068_11081 = state_11058__$1;(statearr_11068_11081[2] = null);
(statearr_11068_11081[1] = 2);
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
var state_machine__6161__auto____0 = (function (){var statearr_11072 = [null,null,null,null,null,null,null,null,null];(statearr_11072[0] = state_machine__6161__auto__);
(statearr_11072[1] = 1);
return statearr_11072;
});
var state_machine__6161__auto____1 = (function (state_11058){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_11058);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e11073){if((e11073 instanceof Object))
{var ex__6164__auto__ = e11073;var statearr_11074_11082 = state_11058;(statearr_11074_11082[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11058);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11073;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11083 = state_11058;
state_11058 = G__11083;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_11058){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_11058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_11075 = f__6176__auto__.call(null);(statearr_11075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto__);
return statearr_11075;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6175__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_11145){var state_val_11146 = (state_11145[1]);if((state_val_11146 === 1))
{var inst_11125 = cljs.core.seq.call(null,coll);var inst_11126 = inst_11125;var state_11145__$1 = (function (){var statearr_11147 = state_11145;(statearr_11147[7] = inst_11126);
return statearr_11147;
})();var statearr_11148_11166 = state_11145__$1;(statearr_11148_11166[2] = null);
(statearr_11148_11166[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11146 === 2))
{var inst_11126 = (state_11145[7]);var state_11145__$1 = state_11145;if(cljs.core.truth_(inst_11126))
{var statearr_11149_11167 = state_11145__$1;(statearr_11149_11167[1] = 4);
} else
{var statearr_11150_11168 = state_11145__$1;(statearr_11150_11168[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11146 === 3))
{var inst_11143 = (state_11145[2]);var state_11145__$1 = state_11145;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11145__$1,inst_11143);
} else
{if((state_val_11146 === 4))
{var inst_11126 = (state_11145[7]);var inst_11129 = cljs.core.first.call(null,inst_11126);var state_11145__$1 = state_11145;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11145__$1,7,ch,inst_11129);
} else
{if((state_val_11146 === 5))
{var state_11145__$1 = state_11145;if(cljs.core.truth_(close_QMARK_))
{var statearr_11151_11169 = state_11145__$1;(statearr_11151_11169[1] = 8);
} else
{var statearr_11152_11170 = state_11145__$1;(statearr_11152_11170[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11146 === 6))
{var inst_11141 = (state_11145[2]);var state_11145__$1 = state_11145;var statearr_11153_11171 = state_11145__$1;(statearr_11153_11171[2] = inst_11141);
(statearr_11153_11171[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11146 === 7))
{var inst_11126 = (state_11145[7]);var inst_11131 = (state_11145[2]);var inst_11132 = cljs.core.next.call(null,inst_11126);var inst_11126__$1 = inst_11132;var state_11145__$1 = (function (){var statearr_11154 = state_11145;(statearr_11154[8] = inst_11131);
(statearr_11154[7] = inst_11126__$1);
return statearr_11154;
})();var statearr_11155_11172 = state_11145__$1;(statearr_11155_11172[2] = null);
(statearr_11155_11172[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11146 === 8))
{var inst_11136 = cljs.core.async.close_BANG_.call(null,ch);var state_11145__$1 = state_11145;var statearr_11156_11173 = state_11145__$1;(statearr_11156_11173[2] = inst_11136);
(statearr_11156_11173[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11146 === 9))
{var state_11145__$1 = state_11145;var statearr_11157_11174 = state_11145__$1;(statearr_11157_11174[2] = null);
(statearr_11157_11174[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11146 === 10))
{var inst_11139 = (state_11145[2]);var state_11145__$1 = state_11145;var statearr_11158_11175 = state_11145__$1;(statearr_11158_11175[2] = inst_11139);
(statearr_11158_11175[1] = 6);
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
var state_machine__6161__auto____0 = (function (){var statearr_11162 = [null,null,null,null,null,null,null,null,null];(statearr_11162[0] = state_machine__6161__auto__);
(statearr_11162[1] = 1);
return statearr_11162;
});
var state_machine__6161__auto____1 = (function (state_11145){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_11145);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e11163){if((e11163 instanceof Object))
{var ex__6164__auto__ = e11163;var statearr_11164_11176 = state_11145;(statearr_11164_11176[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11145);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11163;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11177 = state_11145;
state_11145 = G__11177;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_11145){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_11145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_11165 = f__6176__auto__.call(null);(statearr_11165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto__);
return statearr_11165;
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
cljs.core.async.Mux = (function (){var obj11179 = {};return obj11179;
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
cljs.core.async.Mult = (function (){var obj11181 = {};return obj11181;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11405 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11405 = (function (cs,ch,mult,meta11406){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11406 = meta11406;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11405.cljs$lang$type = true;
cljs.core.async.t11405.cljs$lang$ctorStr = "cljs.core.async/t11405";
cljs.core.async.t11405.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11405");
});})(cs))
;
cljs.core.async.t11405.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11405.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11405.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11405.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11405.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11405.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11405.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11407){var self__ = this;
var _11407__$1 = this;return self__.meta11406;
});})(cs))
;
cljs.core.async.t11405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11407,meta11406__$1){var self__ = this;
var _11407__$1 = this;return (new cljs.core.async.t11405(self__.cs,self__.ch,self__.mult,meta11406__$1));
});})(cs))
;
cljs.core.async.__GT_t11405 = ((function (cs){
return (function __GT_t11405(cs__$1,ch__$1,mult__$1,meta11406){return (new cljs.core.async.t11405(cs__$1,ch__$1,mult__$1,meta11406));
});})(cs))
;
}
return (new cljs.core.async.t11405(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6175__auto___11628 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_11542){var state_val_11543 = (state_11542[1]);if((state_val_11543 === 32))
{var inst_11410 = (state_11542[7]);var inst_11486 = (state_11542[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11542,31,Object,null,30);var inst_11493 = cljs.core.async.put_BANG_.call(null,inst_11486,inst_11410,done);var state_11542__$1 = state_11542;var statearr_11544_11629 = state_11542__$1;(statearr_11544_11629[2] = inst_11493);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11542__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 1))
{var state_11542__$1 = state_11542;var statearr_11545_11630 = state_11542__$1;(statearr_11545_11630[2] = null);
(statearr_11545_11630[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 33))
{var inst_11499 = (state_11542[9]);var inst_11501 = cljs.core.chunked_seq_QMARK_.call(null,inst_11499);var state_11542__$1 = state_11542;if(inst_11501)
{var statearr_11546_11631 = state_11542__$1;(statearr_11546_11631[1] = 36);
} else
{var statearr_11547_11632 = state_11542__$1;(statearr_11547_11632[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 2))
{var state_11542__$1 = state_11542;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11542__$1,4,ch);
} else
{if((state_val_11543 === 34))
{var state_11542__$1 = state_11542;var statearr_11548_11633 = state_11542__$1;(statearr_11548_11633[2] = null);
(statearr_11548_11633[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 3))
{var inst_11540 = (state_11542[2]);var state_11542__$1 = state_11542;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11542__$1,inst_11540);
} else
{if((state_val_11543 === 35))
{var inst_11524 = (state_11542[2]);var state_11542__$1 = state_11542;var statearr_11549_11634 = state_11542__$1;(statearr_11549_11634[2] = inst_11524);
(statearr_11549_11634[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 4))
{var inst_11410 = (state_11542[7]);var inst_11410__$1 = (state_11542[2]);var inst_11411 = (inst_11410__$1 == null);var state_11542__$1 = (function (){var statearr_11550 = state_11542;(statearr_11550[7] = inst_11410__$1);
return statearr_11550;
})();if(cljs.core.truth_(inst_11411))
{var statearr_11551_11635 = state_11542__$1;(statearr_11551_11635[1] = 5);
} else
{var statearr_11552_11636 = state_11542__$1;(statearr_11552_11636[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 36))
{var inst_11499 = (state_11542[9]);var inst_11503 = cljs.core.chunk_first.call(null,inst_11499);var inst_11504 = cljs.core.chunk_rest.call(null,inst_11499);var inst_11505 = cljs.core.count.call(null,inst_11503);var inst_11478 = inst_11504;var inst_11479 = inst_11503;var inst_11480 = inst_11505;var inst_11481 = 0;var state_11542__$1 = (function (){var statearr_11553 = state_11542;(statearr_11553[10] = inst_11478);
(statearr_11553[11] = inst_11479);
(statearr_11553[12] = inst_11481);
(statearr_11553[13] = inst_11480);
return statearr_11553;
})();var statearr_11554_11637 = state_11542__$1;(statearr_11554_11637[2] = null);
(statearr_11554_11637[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 5))
{var inst_11417 = cljs.core.deref.call(null,cs);var inst_11418 = cljs.core.seq.call(null,inst_11417);var inst_11419 = inst_11418;var inst_11420 = null;var inst_11421 = 0;var inst_11422 = 0;var state_11542__$1 = (function (){var statearr_11555 = state_11542;(statearr_11555[14] = inst_11422);
(statearr_11555[15] = inst_11421);
(statearr_11555[16] = inst_11420);
(statearr_11555[17] = inst_11419);
return statearr_11555;
})();var statearr_11556_11638 = state_11542__$1;(statearr_11556_11638[2] = null);
(statearr_11556_11638[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 37))
{var inst_11499 = (state_11542[9]);var inst_11508 = cljs.core.first.call(null,inst_11499);var state_11542__$1 = (function (){var statearr_11557 = state_11542;(statearr_11557[18] = inst_11508);
return statearr_11557;
})();var statearr_11558_11639 = state_11542__$1;(statearr_11558_11639[2] = null);
(statearr_11558_11639[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 6))
{var inst_11470 = (state_11542[19]);var inst_11469 = cljs.core.deref.call(null,cs);var inst_11470__$1 = cljs.core.keys.call(null,inst_11469);var inst_11471 = cljs.core.count.call(null,inst_11470__$1);var inst_11472 = cljs.core.reset_BANG_.call(null,dctr,inst_11471);var inst_11477 = cljs.core.seq.call(null,inst_11470__$1);var inst_11478 = inst_11477;var inst_11479 = null;var inst_11480 = 0;var inst_11481 = 0;var state_11542__$1 = (function (){var statearr_11559 = state_11542;(statearr_11559[20] = inst_11472);
(statearr_11559[19] = inst_11470__$1);
(statearr_11559[10] = inst_11478);
(statearr_11559[11] = inst_11479);
(statearr_11559[12] = inst_11481);
(statearr_11559[13] = inst_11480);
return statearr_11559;
})();var statearr_11560_11640 = state_11542__$1;(statearr_11560_11640[2] = null);
(statearr_11560_11640[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 38))
{var inst_11521 = (state_11542[2]);var state_11542__$1 = state_11542;var statearr_11561_11641 = state_11542__$1;(statearr_11561_11641[2] = inst_11521);
(statearr_11561_11641[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 7))
{var inst_11538 = (state_11542[2]);var state_11542__$1 = state_11542;var statearr_11562_11642 = state_11542__$1;(statearr_11562_11642[2] = inst_11538);
(statearr_11562_11642[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 39))
{var inst_11499 = (state_11542[9]);var inst_11517 = (state_11542[2]);var inst_11518 = cljs.core.next.call(null,inst_11499);var inst_11478 = inst_11518;var inst_11479 = null;var inst_11480 = 0;var inst_11481 = 0;var state_11542__$1 = (function (){var statearr_11563 = state_11542;(statearr_11563[21] = inst_11517);
(statearr_11563[10] = inst_11478);
(statearr_11563[11] = inst_11479);
(statearr_11563[12] = inst_11481);
(statearr_11563[13] = inst_11480);
return statearr_11563;
})();var statearr_11564_11643 = state_11542__$1;(statearr_11564_11643[2] = null);
(statearr_11564_11643[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 8))
{var inst_11422 = (state_11542[14]);var inst_11421 = (state_11542[15]);var inst_11424 = (inst_11422 < inst_11421);var inst_11425 = inst_11424;var state_11542__$1 = state_11542;if(cljs.core.truth_(inst_11425))
{var statearr_11565_11644 = state_11542__$1;(statearr_11565_11644[1] = 10);
} else
{var statearr_11566_11645 = state_11542__$1;(statearr_11566_11645[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 40))
{var inst_11508 = (state_11542[18]);var inst_11509 = (state_11542[2]);var inst_11510 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11511 = cljs.core.async.untap_STAR_.call(null,m,inst_11508);var state_11542__$1 = (function (){var statearr_11567 = state_11542;(statearr_11567[22] = inst_11509);
(statearr_11567[23] = inst_11510);
return statearr_11567;
})();var statearr_11568_11646 = state_11542__$1;(statearr_11568_11646[2] = inst_11511);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11542__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 9))
{var inst_11467 = (state_11542[2]);var state_11542__$1 = state_11542;var statearr_11569_11647 = state_11542__$1;(statearr_11569_11647[2] = inst_11467);
(statearr_11569_11647[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 41))
{var inst_11508 = (state_11542[18]);var inst_11410 = (state_11542[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11542,40,Object,null,39);var inst_11515 = cljs.core.async.put_BANG_.call(null,inst_11508,inst_11410,done);var state_11542__$1 = state_11542;var statearr_11570_11648 = state_11542__$1;(statearr_11570_11648[2] = inst_11515);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11542__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 10))
{var inst_11422 = (state_11542[14]);var inst_11420 = (state_11542[16]);var inst_11428 = cljs.core._nth.call(null,inst_11420,inst_11422);var inst_11429 = cljs.core.nth.call(null,inst_11428,0,null);var inst_11430 = cljs.core.nth.call(null,inst_11428,1,null);var state_11542__$1 = (function (){var statearr_11571 = state_11542;(statearr_11571[24] = inst_11429);
return statearr_11571;
})();if(cljs.core.truth_(inst_11430))
{var statearr_11572_11649 = state_11542__$1;(statearr_11572_11649[1] = 13);
} else
{var statearr_11573_11650 = state_11542__$1;(statearr_11573_11650[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 42))
{var state_11542__$1 = state_11542;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11542__$1,45,dchan);
} else
{if((state_val_11543 === 11))
{var inst_11439 = (state_11542[25]);var inst_11419 = (state_11542[17]);var inst_11439__$1 = cljs.core.seq.call(null,inst_11419);var state_11542__$1 = (function (){var statearr_11574 = state_11542;(statearr_11574[25] = inst_11439__$1);
return statearr_11574;
})();if(inst_11439__$1)
{var statearr_11575_11651 = state_11542__$1;(statearr_11575_11651[1] = 16);
} else
{var statearr_11576_11652 = state_11542__$1;(statearr_11576_11652[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 43))
{var state_11542__$1 = state_11542;var statearr_11577_11653 = state_11542__$1;(statearr_11577_11653[2] = null);
(statearr_11577_11653[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 12))
{var inst_11465 = (state_11542[2]);var state_11542__$1 = state_11542;var statearr_11578_11654 = state_11542__$1;(statearr_11578_11654[2] = inst_11465);
(statearr_11578_11654[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 44))
{var inst_11535 = (state_11542[2]);var state_11542__$1 = (function (){var statearr_11579 = state_11542;(statearr_11579[26] = inst_11535);
return statearr_11579;
})();var statearr_11580_11655 = state_11542__$1;(statearr_11580_11655[2] = null);
(statearr_11580_11655[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 13))
{var inst_11429 = (state_11542[24]);var inst_11432 = cljs.core.async.close_BANG_.call(null,inst_11429);var state_11542__$1 = state_11542;var statearr_11581_11656 = state_11542__$1;(statearr_11581_11656[2] = inst_11432);
(statearr_11581_11656[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 45))
{var inst_11532 = (state_11542[2]);var state_11542__$1 = state_11542;var statearr_11585_11657 = state_11542__$1;(statearr_11585_11657[2] = inst_11532);
(statearr_11585_11657[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 14))
{var state_11542__$1 = state_11542;var statearr_11586_11658 = state_11542__$1;(statearr_11586_11658[2] = null);
(statearr_11586_11658[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 15))
{var inst_11422 = (state_11542[14]);var inst_11421 = (state_11542[15]);var inst_11420 = (state_11542[16]);var inst_11419 = (state_11542[17]);var inst_11435 = (state_11542[2]);var inst_11436 = (inst_11422 + 1);var tmp11582 = inst_11421;var tmp11583 = inst_11420;var tmp11584 = inst_11419;var inst_11419__$1 = tmp11584;var inst_11420__$1 = tmp11583;var inst_11421__$1 = tmp11582;var inst_11422__$1 = inst_11436;var state_11542__$1 = (function (){var statearr_11587 = state_11542;(statearr_11587[14] = inst_11422__$1);
(statearr_11587[15] = inst_11421__$1);
(statearr_11587[16] = inst_11420__$1);
(statearr_11587[27] = inst_11435);
(statearr_11587[17] = inst_11419__$1);
return statearr_11587;
})();var statearr_11588_11659 = state_11542__$1;(statearr_11588_11659[2] = null);
(statearr_11588_11659[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 16))
{var inst_11439 = (state_11542[25]);var inst_11441 = cljs.core.chunked_seq_QMARK_.call(null,inst_11439);var state_11542__$1 = state_11542;if(inst_11441)
{var statearr_11589_11660 = state_11542__$1;(statearr_11589_11660[1] = 19);
} else
{var statearr_11590_11661 = state_11542__$1;(statearr_11590_11661[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 17))
{var state_11542__$1 = state_11542;var statearr_11591_11662 = state_11542__$1;(statearr_11591_11662[2] = null);
(statearr_11591_11662[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 18))
{var inst_11463 = (state_11542[2]);var state_11542__$1 = state_11542;var statearr_11592_11663 = state_11542__$1;(statearr_11592_11663[2] = inst_11463);
(statearr_11592_11663[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 19))
{var inst_11439 = (state_11542[25]);var inst_11443 = cljs.core.chunk_first.call(null,inst_11439);var inst_11444 = cljs.core.chunk_rest.call(null,inst_11439);var inst_11445 = cljs.core.count.call(null,inst_11443);var inst_11419 = inst_11444;var inst_11420 = inst_11443;var inst_11421 = inst_11445;var inst_11422 = 0;var state_11542__$1 = (function (){var statearr_11593 = state_11542;(statearr_11593[14] = inst_11422);
(statearr_11593[15] = inst_11421);
(statearr_11593[16] = inst_11420);
(statearr_11593[17] = inst_11419);
return statearr_11593;
})();var statearr_11594_11664 = state_11542__$1;(statearr_11594_11664[2] = null);
(statearr_11594_11664[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 20))
{var inst_11439 = (state_11542[25]);var inst_11449 = cljs.core.first.call(null,inst_11439);var inst_11450 = cljs.core.nth.call(null,inst_11449,0,null);var inst_11451 = cljs.core.nth.call(null,inst_11449,1,null);var state_11542__$1 = (function (){var statearr_11595 = state_11542;(statearr_11595[28] = inst_11450);
return statearr_11595;
})();if(cljs.core.truth_(inst_11451))
{var statearr_11596_11665 = state_11542__$1;(statearr_11596_11665[1] = 22);
} else
{var statearr_11597_11666 = state_11542__$1;(statearr_11597_11666[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 21))
{var inst_11460 = (state_11542[2]);var state_11542__$1 = state_11542;var statearr_11598_11667 = state_11542__$1;(statearr_11598_11667[2] = inst_11460);
(statearr_11598_11667[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 22))
{var inst_11450 = (state_11542[28]);var inst_11453 = cljs.core.async.close_BANG_.call(null,inst_11450);var state_11542__$1 = state_11542;var statearr_11599_11668 = state_11542__$1;(statearr_11599_11668[2] = inst_11453);
(statearr_11599_11668[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 23))
{var state_11542__$1 = state_11542;var statearr_11600_11669 = state_11542__$1;(statearr_11600_11669[2] = null);
(statearr_11600_11669[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 24))
{var inst_11439 = (state_11542[25]);var inst_11456 = (state_11542[2]);var inst_11457 = cljs.core.next.call(null,inst_11439);var inst_11419 = inst_11457;var inst_11420 = null;var inst_11421 = 0;var inst_11422 = 0;var state_11542__$1 = (function (){var statearr_11601 = state_11542;(statearr_11601[14] = inst_11422);
(statearr_11601[29] = inst_11456);
(statearr_11601[15] = inst_11421);
(statearr_11601[16] = inst_11420);
(statearr_11601[17] = inst_11419);
return statearr_11601;
})();var statearr_11602_11670 = state_11542__$1;(statearr_11602_11670[2] = null);
(statearr_11602_11670[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 25))
{var inst_11481 = (state_11542[12]);var inst_11480 = (state_11542[13]);var inst_11483 = (inst_11481 < inst_11480);var inst_11484 = inst_11483;var state_11542__$1 = state_11542;if(cljs.core.truth_(inst_11484))
{var statearr_11603_11671 = state_11542__$1;(statearr_11603_11671[1] = 27);
} else
{var statearr_11604_11672 = state_11542__$1;(statearr_11604_11672[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 26))
{var inst_11470 = (state_11542[19]);var inst_11528 = (state_11542[2]);var inst_11529 = cljs.core.seq.call(null,inst_11470);var state_11542__$1 = (function (){var statearr_11605 = state_11542;(statearr_11605[30] = inst_11528);
return statearr_11605;
})();if(inst_11529)
{var statearr_11606_11673 = state_11542__$1;(statearr_11606_11673[1] = 42);
} else
{var statearr_11607_11674 = state_11542__$1;(statearr_11607_11674[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 27))
{var inst_11479 = (state_11542[11]);var inst_11481 = (state_11542[12]);var inst_11486 = cljs.core._nth.call(null,inst_11479,inst_11481);var state_11542__$1 = (function (){var statearr_11608 = state_11542;(statearr_11608[8] = inst_11486);
return statearr_11608;
})();var statearr_11609_11675 = state_11542__$1;(statearr_11609_11675[2] = null);
(statearr_11609_11675[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 28))
{var inst_11499 = (state_11542[9]);var inst_11478 = (state_11542[10]);var inst_11499__$1 = cljs.core.seq.call(null,inst_11478);var state_11542__$1 = (function (){var statearr_11613 = state_11542;(statearr_11613[9] = inst_11499__$1);
return statearr_11613;
})();if(inst_11499__$1)
{var statearr_11614_11676 = state_11542__$1;(statearr_11614_11676[1] = 33);
} else
{var statearr_11615_11677 = state_11542__$1;(statearr_11615_11677[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 29))
{var inst_11526 = (state_11542[2]);var state_11542__$1 = state_11542;var statearr_11616_11678 = state_11542__$1;(statearr_11616_11678[2] = inst_11526);
(statearr_11616_11678[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 30))
{var inst_11478 = (state_11542[10]);var inst_11479 = (state_11542[11]);var inst_11481 = (state_11542[12]);var inst_11480 = (state_11542[13]);var inst_11495 = (state_11542[2]);var inst_11496 = (inst_11481 + 1);var tmp11610 = inst_11478;var tmp11611 = inst_11479;var tmp11612 = inst_11480;var inst_11478__$1 = tmp11610;var inst_11479__$1 = tmp11611;var inst_11480__$1 = tmp11612;var inst_11481__$1 = inst_11496;var state_11542__$1 = (function (){var statearr_11617 = state_11542;(statearr_11617[31] = inst_11495);
(statearr_11617[10] = inst_11478__$1);
(statearr_11617[11] = inst_11479__$1);
(statearr_11617[12] = inst_11481__$1);
(statearr_11617[13] = inst_11480__$1);
return statearr_11617;
})();var statearr_11618_11679 = state_11542__$1;(statearr_11618_11679[2] = null);
(statearr_11618_11679[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11543 === 31))
{var inst_11486 = (state_11542[8]);var inst_11487 = (state_11542[2]);var inst_11488 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11489 = cljs.core.async.untap_STAR_.call(null,m,inst_11486);var state_11542__$1 = (function (){var statearr_11619 = state_11542;(statearr_11619[32] = inst_11488);
(statearr_11619[33] = inst_11487);
return statearr_11619;
})();var statearr_11620_11680 = state_11542__$1;(statearr_11620_11680[2] = inst_11489);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11542__$1);
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
var state_machine__6161__auto____0 = (function (){var statearr_11624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11624[0] = state_machine__6161__auto__);
(statearr_11624[1] = 1);
return statearr_11624;
});
var state_machine__6161__auto____1 = (function (state_11542){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_11542);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e11625){if((e11625 instanceof Object))
{var ex__6164__auto__ = e11625;var statearr_11626_11681 = state_11542;(statearr_11626_11681[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11542);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11625;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11682 = state_11542;
state_11542 = G__11682;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_11542){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_11542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_11627 = f__6176__auto__.call(null);(statearr_11627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___11628);
return statearr_11627;
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
cljs.core.async.Mix = (function (){var obj11684 = {};return obj11684;
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
;var m = (function (){if(typeof cljs.core.async.t11794 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11794 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta11795){
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
this.meta11795 = meta11795;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11794.cljs$lang$type = true;
cljs.core.async.t11794.cljs$lang$ctorStr = "cljs.core.async/t11794";
cljs.core.async.t11794.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11794");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11794.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11794.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11794.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11794.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11794.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11794.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11794.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11794.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11794.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11796){var self__ = this;
var _11796__$1 = this;return self__.meta11795;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11796,meta11795__$1){var self__ = this;
var _11796__$1 = this;return (new cljs.core.async.t11794(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta11795__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11794 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11794(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11795){return (new cljs.core.async.t11794(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11795));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11794(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6175__auto___11903 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_11861){var state_val_11862 = (state_11861[1]);if((state_val_11862 === 1))
{var inst_11800 = (state_11861[7]);var inst_11800__$1 = calc_state.call(null);var inst_11801 = cljs.core.seq_QMARK_.call(null,inst_11800__$1);var state_11861__$1 = (function (){var statearr_11863 = state_11861;(statearr_11863[7] = inst_11800__$1);
return statearr_11863;
})();if(inst_11801)
{var statearr_11864_11904 = state_11861__$1;(statearr_11864_11904[1] = 2);
} else
{var statearr_11865_11905 = state_11861__$1;(statearr_11865_11905[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11862 === 2))
{var inst_11800 = (state_11861[7]);var inst_11803 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11800);var state_11861__$1 = state_11861;var statearr_11866_11906 = state_11861__$1;(statearr_11866_11906[2] = inst_11803);
(statearr_11866_11906[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11862 === 3))
{var inst_11800 = (state_11861[7]);var state_11861__$1 = state_11861;var statearr_11867_11907 = state_11861__$1;(statearr_11867_11907[2] = inst_11800);
(statearr_11867_11907[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11862 === 4))
{var inst_11800 = (state_11861[7]);var inst_11806 = (state_11861[2]);var inst_11807 = cljs.core.get.call(null,inst_11806,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11808 = cljs.core.get.call(null,inst_11806,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11809 = cljs.core.get.call(null,inst_11806,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_11810 = inst_11800;var state_11861__$1 = (function (){var statearr_11868 = state_11861;(statearr_11868[8] = inst_11810);
(statearr_11868[9] = inst_11807);
(statearr_11868[10] = inst_11808);
(statearr_11868[11] = inst_11809);
return statearr_11868;
})();var statearr_11869_11908 = state_11861__$1;(statearr_11869_11908[2] = null);
(statearr_11869_11908[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11862 === 5))
{var inst_11810 = (state_11861[8]);var inst_11813 = cljs.core.seq_QMARK_.call(null,inst_11810);var state_11861__$1 = state_11861;if(inst_11813)
{var statearr_11870_11909 = state_11861__$1;(statearr_11870_11909[1] = 7);
} else
{var statearr_11871_11910 = state_11861__$1;(statearr_11871_11910[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11862 === 6))
{var inst_11859 = (state_11861[2]);var state_11861__$1 = state_11861;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11861__$1,inst_11859);
} else
{if((state_val_11862 === 7))
{var inst_11810 = (state_11861[8]);var inst_11815 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11810);var state_11861__$1 = state_11861;var statearr_11872_11911 = state_11861__$1;(statearr_11872_11911[2] = inst_11815);
(statearr_11872_11911[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11862 === 8))
{var inst_11810 = (state_11861[8]);var state_11861__$1 = state_11861;var statearr_11873_11912 = state_11861__$1;(statearr_11873_11912[2] = inst_11810);
(statearr_11873_11912[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11862 === 9))
{var inst_11818 = (state_11861[12]);var inst_11818__$1 = (state_11861[2]);var inst_11819 = cljs.core.get.call(null,inst_11818__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11820 = cljs.core.get.call(null,inst_11818__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11821 = cljs.core.get.call(null,inst_11818__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_11861__$1 = (function (){var statearr_11874 = state_11861;(statearr_11874[12] = inst_11818__$1);
(statearr_11874[13] = inst_11820);
(statearr_11874[14] = inst_11821);
return statearr_11874;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11861__$1,10,inst_11819);
} else
{if((state_val_11862 === 10))
{var inst_11826 = (state_11861[15]);var inst_11825 = (state_11861[16]);var inst_11824 = (state_11861[2]);var inst_11825__$1 = cljs.core.nth.call(null,inst_11824,0,null);var inst_11826__$1 = cljs.core.nth.call(null,inst_11824,1,null);var inst_11827 = (inst_11825__$1 == null);var inst_11828 = cljs.core._EQ_.call(null,inst_11826__$1,change);var inst_11829 = (inst_11827) || (inst_11828);var state_11861__$1 = (function (){var statearr_11875 = state_11861;(statearr_11875[15] = inst_11826__$1);
(statearr_11875[16] = inst_11825__$1);
return statearr_11875;
})();if(cljs.core.truth_(inst_11829))
{var statearr_11876_11913 = state_11861__$1;(statearr_11876_11913[1] = 11);
} else
{var statearr_11877_11914 = state_11861__$1;(statearr_11877_11914[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11862 === 11))
{var inst_11825 = (state_11861[16]);var inst_11831 = (inst_11825 == null);var state_11861__$1 = state_11861;if(cljs.core.truth_(inst_11831))
{var statearr_11878_11915 = state_11861__$1;(statearr_11878_11915[1] = 14);
} else
{var statearr_11879_11916 = state_11861__$1;(statearr_11879_11916[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11862 === 12))
{var inst_11826 = (state_11861[15]);var inst_11840 = (state_11861[17]);var inst_11821 = (state_11861[14]);var inst_11840__$1 = inst_11821.call(null,inst_11826);var state_11861__$1 = (function (){var statearr_11880 = state_11861;(statearr_11880[17] = inst_11840__$1);
return statearr_11880;
})();if(cljs.core.truth_(inst_11840__$1))
{var statearr_11881_11917 = state_11861__$1;(statearr_11881_11917[1] = 17);
} else
{var statearr_11882_11918 = state_11861__$1;(statearr_11882_11918[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11862 === 13))
{var inst_11857 = (state_11861[2]);var state_11861__$1 = state_11861;var statearr_11883_11919 = state_11861__$1;(statearr_11883_11919[2] = inst_11857);
(statearr_11883_11919[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11862 === 14))
{var inst_11826 = (state_11861[15]);var inst_11833 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11826);var state_11861__$1 = state_11861;var statearr_11884_11920 = state_11861__$1;(statearr_11884_11920[2] = inst_11833);
(statearr_11884_11920[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11862 === 15))
{var state_11861__$1 = state_11861;var statearr_11885_11921 = state_11861__$1;(statearr_11885_11921[2] = null);
(statearr_11885_11921[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11862 === 16))
{var inst_11836 = (state_11861[2]);var inst_11837 = calc_state.call(null);var inst_11810 = inst_11837;var state_11861__$1 = (function (){var statearr_11886 = state_11861;(statearr_11886[8] = inst_11810);
(statearr_11886[18] = inst_11836);
return statearr_11886;
})();var statearr_11887_11922 = state_11861__$1;(statearr_11887_11922[2] = null);
(statearr_11887_11922[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11862 === 17))
{var inst_11840 = (state_11861[17]);var state_11861__$1 = state_11861;var statearr_11888_11923 = state_11861__$1;(statearr_11888_11923[2] = inst_11840);
(statearr_11888_11923[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11862 === 18))
{var inst_11826 = (state_11861[15]);var inst_11820 = (state_11861[13]);var inst_11821 = (state_11861[14]);var inst_11843 = cljs.core.empty_QMARK_.call(null,inst_11821);var inst_11844 = inst_11820.call(null,inst_11826);var inst_11845 = cljs.core.not.call(null,inst_11844);var inst_11846 = (inst_11843) && (inst_11845);var state_11861__$1 = state_11861;var statearr_11889_11924 = state_11861__$1;(statearr_11889_11924[2] = inst_11846);
(statearr_11889_11924[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11862 === 19))
{var inst_11848 = (state_11861[2]);var state_11861__$1 = state_11861;if(cljs.core.truth_(inst_11848))
{var statearr_11890_11925 = state_11861__$1;(statearr_11890_11925[1] = 20);
} else
{var statearr_11891_11926 = state_11861__$1;(statearr_11891_11926[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11862 === 20))
{var inst_11825 = (state_11861[16]);var state_11861__$1 = state_11861;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11861__$1,23,out,inst_11825);
} else
{if((state_val_11862 === 21))
{var state_11861__$1 = state_11861;var statearr_11892_11927 = state_11861__$1;(statearr_11892_11927[2] = null);
(statearr_11892_11927[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11862 === 22))
{var inst_11818 = (state_11861[12]);var inst_11854 = (state_11861[2]);var inst_11810 = inst_11818;var state_11861__$1 = (function (){var statearr_11893 = state_11861;(statearr_11893[8] = inst_11810);
(statearr_11893[19] = inst_11854);
return statearr_11893;
})();var statearr_11894_11928 = state_11861__$1;(statearr_11894_11928[2] = null);
(statearr_11894_11928[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11862 === 23))
{var inst_11851 = (state_11861[2]);var state_11861__$1 = state_11861;var statearr_11895_11929 = state_11861__$1;(statearr_11895_11929[2] = inst_11851);
(statearr_11895_11929[1] = 22);
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
var state_machine__6161__auto____0 = (function (){var statearr_11899 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11899[0] = state_machine__6161__auto__);
(statearr_11899[1] = 1);
return statearr_11899;
});
var state_machine__6161__auto____1 = (function (state_11861){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_11861);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e11900){if((e11900 instanceof Object))
{var ex__6164__auto__ = e11900;var statearr_11901_11930 = state_11861;(statearr_11901_11930[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11861);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11900;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11931 = state_11861;
state_11861 = G__11931;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_11861){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_11861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_11902 = f__6176__auto__.call(null);(statearr_11902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___11903);
return statearr_11902;
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
cljs.core.async.Pub = (function (){var obj11933 = {};return obj11933;
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
return (function (p1__11934_SHARP_){if(cljs.core.truth_(p1__11934_SHARP_.call(null,topic)))
{return p1__11934_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11934_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3408__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12059 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12059 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12060){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12060 = meta12060;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12059.cljs$lang$type = true;
cljs.core.async.t12059.cljs$lang$ctorStr = "cljs.core.async/t12059";
cljs.core.async.t12059.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t12059");
});})(mults,ensure_mult))
;
cljs.core.async.t12059.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12059.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12059.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12059.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12059.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12059.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12059.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12059.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12061){var self__ = this;
var _12061__$1 = this;return self__.meta12060;
});})(mults,ensure_mult))
;
cljs.core.async.t12059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12061,meta12060__$1){var self__ = this;
var _12061__$1 = this;return (new cljs.core.async.t12059(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12060__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12059 = ((function (mults,ensure_mult){
return (function __GT_t12059(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12060){return (new cljs.core.async.t12059(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12060));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12059(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6175__auto___12183 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_12135){var state_val_12136 = (state_12135[1]);if((state_val_12136 === 1))
{var state_12135__$1 = state_12135;var statearr_12137_12184 = state_12135__$1;(statearr_12137_12184[2] = null);
(statearr_12137_12184[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 2))
{var state_12135__$1 = state_12135;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12135__$1,4,ch);
} else
{if((state_val_12136 === 3))
{var inst_12133 = (state_12135[2]);var state_12135__$1 = state_12135;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12135__$1,inst_12133);
} else
{if((state_val_12136 === 4))
{var inst_12064 = (state_12135[7]);var inst_12064__$1 = (state_12135[2]);var inst_12065 = (inst_12064__$1 == null);var state_12135__$1 = (function (){var statearr_12138 = state_12135;(statearr_12138[7] = inst_12064__$1);
return statearr_12138;
})();if(cljs.core.truth_(inst_12065))
{var statearr_12139_12185 = state_12135__$1;(statearr_12139_12185[1] = 5);
} else
{var statearr_12140_12186 = state_12135__$1;(statearr_12140_12186[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 5))
{var inst_12071 = cljs.core.deref.call(null,mults);var inst_12072 = cljs.core.vals.call(null,inst_12071);var inst_12073 = cljs.core.seq.call(null,inst_12072);var inst_12074 = inst_12073;var inst_12075 = null;var inst_12076 = 0;var inst_12077 = 0;var state_12135__$1 = (function (){var statearr_12141 = state_12135;(statearr_12141[8] = inst_12077);
(statearr_12141[9] = inst_12075);
(statearr_12141[10] = inst_12076);
(statearr_12141[11] = inst_12074);
return statearr_12141;
})();var statearr_12142_12187 = state_12135__$1;(statearr_12142_12187[2] = null);
(statearr_12142_12187[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 6))
{var inst_12064 = (state_12135[7]);var inst_12114 = (state_12135[12]);var inst_12112 = (state_12135[13]);var inst_12112__$1 = topic_fn.call(null,inst_12064);var inst_12113 = cljs.core.deref.call(null,mults);var inst_12114__$1 = cljs.core.get.call(null,inst_12113,inst_12112__$1);var state_12135__$1 = (function (){var statearr_12143 = state_12135;(statearr_12143[12] = inst_12114__$1);
(statearr_12143[13] = inst_12112__$1);
return statearr_12143;
})();if(cljs.core.truth_(inst_12114__$1))
{var statearr_12144_12188 = state_12135__$1;(statearr_12144_12188[1] = 19);
} else
{var statearr_12145_12189 = state_12135__$1;(statearr_12145_12189[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 7))
{var inst_12131 = (state_12135[2]);var state_12135__$1 = state_12135;var statearr_12146_12190 = state_12135__$1;(statearr_12146_12190[2] = inst_12131);
(statearr_12146_12190[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 8))
{var inst_12077 = (state_12135[8]);var inst_12076 = (state_12135[10]);var inst_12079 = (inst_12077 < inst_12076);var inst_12080 = inst_12079;var state_12135__$1 = state_12135;if(cljs.core.truth_(inst_12080))
{var statearr_12150_12191 = state_12135__$1;(statearr_12150_12191[1] = 10);
} else
{var statearr_12151_12192 = state_12135__$1;(statearr_12151_12192[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 9))
{var inst_12110 = (state_12135[2]);var state_12135__$1 = state_12135;var statearr_12152_12193 = state_12135__$1;(statearr_12152_12193[2] = inst_12110);
(statearr_12152_12193[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 10))
{var inst_12077 = (state_12135[8]);var inst_12075 = (state_12135[9]);var inst_12076 = (state_12135[10]);var inst_12074 = (state_12135[11]);var inst_12082 = cljs.core._nth.call(null,inst_12075,inst_12077);var inst_12083 = cljs.core.async.muxch_STAR_.call(null,inst_12082);var inst_12084 = cljs.core.async.close_BANG_.call(null,inst_12083);var inst_12085 = (inst_12077 + 1);var tmp12147 = inst_12075;var tmp12148 = inst_12076;var tmp12149 = inst_12074;var inst_12074__$1 = tmp12149;var inst_12075__$1 = tmp12147;var inst_12076__$1 = tmp12148;var inst_12077__$1 = inst_12085;var state_12135__$1 = (function (){var statearr_12153 = state_12135;(statearr_12153[8] = inst_12077__$1);
(statearr_12153[9] = inst_12075__$1);
(statearr_12153[10] = inst_12076__$1);
(statearr_12153[11] = inst_12074__$1);
(statearr_12153[14] = inst_12084);
return statearr_12153;
})();var statearr_12154_12194 = state_12135__$1;(statearr_12154_12194[2] = null);
(statearr_12154_12194[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 11))
{var inst_12074 = (state_12135[11]);var inst_12088 = (state_12135[15]);var inst_12088__$1 = cljs.core.seq.call(null,inst_12074);var state_12135__$1 = (function (){var statearr_12155 = state_12135;(statearr_12155[15] = inst_12088__$1);
return statearr_12155;
})();if(inst_12088__$1)
{var statearr_12156_12195 = state_12135__$1;(statearr_12156_12195[1] = 13);
} else
{var statearr_12157_12196 = state_12135__$1;(statearr_12157_12196[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 12))
{var inst_12108 = (state_12135[2]);var state_12135__$1 = state_12135;var statearr_12158_12197 = state_12135__$1;(statearr_12158_12197[2] = inst_12108);
(statearr_12158_12197[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 13))
{var inst_12088 = (state_12135[15]);var inst_12090 = cljs.core.chunked_seq_QMARK_.call(null,inst_12088);var state_12135__$1 = state_12135;if(inst_12090)
{var statearr_12159_12198 = state_12135__$1;(statearr_12159_12198[1] = 16);
} else
{var statearr_12160_12199 = state_12135__$1;(statearr_12160_12199[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 14))
{var state_12135__$1 = state_12135;var statearr_12161_12200 = state_12135__$1;(statearr_12161_12200[2] = null);
(statearr_12161_12200[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 15))
{var inst_12106 = (state_12135[2]);var state_12135__$1 = state_12135;var statearr_12162_12201 = state_12135__$1;(statearr_12162_12201[2] = inst_12106);
(statearr_12162_12201[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 16))
{var inst_12088 = (state_12135[15]);var inst_12092 = cljs.core.chunk_first.call(null,inst_12088);var inst_12093 = cljs.core.chunk_rest.call(null,inst_12088);var inst_12094 = cljs.core.count.call(null,inst_12092);var inst_12074 = inst_12093;var inst_12075 = inst_12092;var inst_12076 = inst_12094;var inst_12077 = 0;var state_12135__$1 = (function (){var statearr_12163 = state_12135;(statearr_12163[8] = inst_12077);
(statearr_12163[9] = inst_12075);
(statearr_12163[10] = inst_12076);
(statearr_12163[11] = inst_12074);
return statearr_12163;
})();var statearr_12164_12202 = state_12135__$1;(statearr_12164_12202[2] = null);
(statearr_12164_12202[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 17))
{var inst_12088 = (state_12135[15]);var inst_12097 = cljs.core.first.call(null,inst_12088);var inst_12098 = cljs.core.async.muxch_STAR_.call(null,inst_12097);var inst_12099 = cljs.core.async.close_BANG_.call(null,inst_12098);var inst_12100 = cljs.core.next.call(null,inst_12088);var inst_12074 = inst_12100;var inst_12075 = null;var inst_12076 = 0;var inst_12077 = 0;var state_12135__$1 = (function (){var statearr_12165 = state_12135;(statearr_12165[8] = inst_12077);
(statearr_12165[9] = inst_12075);
(statearr_12165[10] = inst_12076);
(statearr_12165[11] = inst_12074);
(statearr_12165[16] = inst_12099);
return statearr_12165;
})();var statearr_12166_12203 = state_12135__$1;(statearr_12166_12203[2] = null);
(statearr_12166_12203[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 18))
{var inst_12103 = (state_12135[2]);var state_12135__$1 = state_12135;var statearr_12167_12204 = state_12135__$1;(statearr_12167_12204[2] = inst_12103);
(statearr_12167_12204[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 19))
{var state_12135__$1 = state_12135;var statearr_12168_12205 = state_12135__$1;(statearr_12168_12205[2] = null);
(statearr_12168_12205[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 20))
{var state_12135__$1 = state_12135;var statearr_12169_12206 = state_12135__$1;(statearr_12169_12206[2] = null);
(statearr_12169_12206[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 21))
{var inst_12128 = (state_12135[2]);var state_12135__$1 = (function (){var statearr_12170 = state_12135;(statearr_12170[17] = inst_12128);
return statearr_12170;
})();var statearr_12171_12207 = state_12135__$1;(statearr_12171_12207[2] = null);
(statearr_12171_12207[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 22))
{var inst_12125 = (state_12135[2]);var state_12135__$1 = state_12135;var statearr_12172_12208 = state_12135__$1;(statearr_12172_12208[2] = inst_12125);
(statearr_12172_12208[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 23))
{var inst_12112 = (state_12135[13]);var inst_12116 = (state_12135[2]);var inst_12117 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12112);var state_12135__$1 = (function (){var statearr_12173 = state_12135;(statearr_12173[18] = inst_12116);
return statearr_12173;
})();var statearr_12174_12209 = state_12135__$1;(statearr_12174_12209[2] = inst_12117);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12135__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 24))
{var inst_12064 = (state_12135[7]);var inst_12114 = (state_12135[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12135,23,Object,null,22);var inst_12121 = cljs.core.async.muxch_STAR_.call(null,inst_12114);var state_12135__$1 = state_12135;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12135__$1,25,inst_12121,inst_12064);
} else
{if((state_val_12136 === 25))
{var inst_12123 = (state_12135[2]);var state_12135__$1 = state_12135;var statearr_12175_12210 = state_12135__$1;(statearr_12175_12210[2] = inst_12123);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12135__$1);
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
var state_machine__6161__auto____0 = (function (){var statearr_12179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12179[0] = state_machine__6161__auto__);
(statearr_12179[1] = 1);
return statearr_12179;
});
var state_machine__6161__auto____1 = (function (state_12135){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_12135);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e12180){if((e12180 instanceof Object))
{var ex__6164__auto__ = e12180;var statearr_12181_12211 = state_12135;(statearr_12181_12211[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12135);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12180;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12212 = state_12135;
state_12135 = G__12212;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_12135){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_12135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_12182 = f__6176__auto__.call(null);(statearr_12182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___12183);
return statearr_12182;
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
,cljs.core.range.call(null,cnt));var c__6175__auto___12349 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_12319){var state_val_12320 = (state_12319[1]);if((state_val_12320 === 1))
{var state_12319__$1 = state_12319;var statearr_12321_12350 = state_12319__$1;(statearr_12321_12350[2] = null);
(statearr_12321_12350[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12320 === 2))
{var inst_12282 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12283 = 0;var state_12319__$1 = (function (){var statearr_12322 = state_12319;(statearr_12322[7] = inst_12283);
(statearr_12322[8] = inst_12282);
return statearr_12322;
})();var statearr_12323_12351 = state_12319__$1;(statearr_12323_12351[2] = null);
(statearr_12323_12351[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12320 === 3))
{var inst_12317 = (state_12319[2]);var state_12319__$1 = state_12319;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12319__$1,inst_12317);
} else
{if((state_val_12320 === 4))
{var inst_12283 = (state_12319[7]);var inst_12285 = (inst_12283 < cnt);var state_12319__$1 = state_12319;if(cljs.core.truth_(inst_12285))
{var statearr_12324_12352 = state_12319__$1;(statearr_12324_12352[1] = 6);
} else
{var statearr_12325_12353 = state_12319__$1;(statearr_12325_12353[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12320 === 5))
{var inst_12303 = (state_12319[2]);var state_12319__$1 = (function (){var statearr_12326 = state_12319;(statearr_12326[9] = inst_12303);
return statearr_12326;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12319__$1,12,dchan);
} else
{if((state_val_12320 === 6))
{var state_12319__$1 = state_12319;var statearr_12327_12354 = state_12319__$1;(statearr_12327_12354[2] = null);
(statearr_12327_12354[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12320 === 7))
{var state_12319__$1 = state_12319;var statearr_12328_12355 = state_12319__$1;(statearr_12328_12355[2] = null);
(statearr_12328_12355[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12320 === 8))
{var inst_12301 = (state_12319[2]);var state_12319__$1 = state_12319;var statearr_12329_12356 = state_12319__$1;(statearr_12329_12356[2] = inst_12301);
(statearr_12329_12356[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12320 === 9))
{var inst_12283 = (state_12319[7]);var inst_12296 = (state_12319[2]);var inst_12297 = (inst_12283 + 1);var inst_12283__$1 = inst_12297;var state_12319__$1 = (function (){var statearr_12330 = state_12319;(statearr_12330[7] = inst_12283__$1);
(statearr_12330[10] = inst_12296);
return statearr_12330;
})();var statearr_12331_12357 = state_12319__$1;(statearr_12331_12357[2] = null);
(statearr_12331_12357[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12320 === 10))
{var inst_12287 = (state_12319[2]);var inst_12288 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12319__$1 = (function (){var statearr_12332 = state_12319;(statearr_12332[11] = inst_12287);
return statearr_12332;
})();var statearr_12333_12358 = state_12319__$1;(statearr_12333_12358[2] = inst_12288);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12319__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12320 === 11))
{var inst_12283 = (state_12319[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12319,10,Object,null,9);var inst_12292 = chs__$1.call(null,inst_12283);var inst_12293 = done.call(null,inst_12283);var inst_12294 = cljs.core.async.take_BANG_.call(null,inst_12292,inst_12293);var state_12319__$1 = state_12319;var statearr_12334_12359 = state_12319__$1;(statearr_12334_12359[2] = inst_12294);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12319__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12320 === 12))
{var inst_12305 = (state_12319[12]);var inst_12305__$1 = (state_12319[2]);var inst_12306 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12305__$1);var state_12319__$1 = (function (){var statearr_12335 = state_12319;(statearr_12335[12] = inst_12305__$1);
return statearr_12335;
})();if(cljs.core.truth_(inst_12306))
{var statearr_12336_12360 = state_12319__$1;(statearr_12336_12360[1] = 13);
} else
{var statearr_12337_12361 = state_12319__$1;(statearr_12337_12361[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12320 === 13))
{var inst_12308 = cljs.core.async.close_BANG_.call(null,out);var state_12319__$1 = state_12319;var statearr_12338_12362 = state_12319__$1;(statearr_12338_12362[2] = inst_12308);
(statearr_12338_12362[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12320 === 14))
{var inst_12305 = (state_12319[12]);var inst_12310 = cljs.core.apply.call(null,f,inst_12305);var state_12319__$1 = state_12319;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12319__$1,16,out,inst_12310);
} else
{if((state_val_12320 === 15))
{var inst_12315 = (state_12319[2]);var state_12319__$1 = state_12319;var statearr_12339_12363 = state_12319__$1;(statearr_12339_12363[2] = inst_12315);
(statearr_12339_12363[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12320 === 16))
{var inst_12312 = (state_12319[2]);var state_12319__$1 = (function (){var statearr_12340 = state_12319;(statearr_12340[13] = inst_12312);
return statearr_12340;
})();var statearr_12341_12364 = state_12319__$1;(statearr_12341_12364[2] = null);
(statearr_12341_12364[1] = 2);
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
var state_machine__6161__auto____0 = (function (){var statearr_12345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12345[0] = state_machine__6161__auto__);
(statearr_12345[1] = 1);
return statearr_12345;
});
var state_machine__6161__auto____1 = (function (state_12319){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_12319);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e12346){if((e12346 instanceof Object))
{var ex__6164__auto__ = e12346;var statearr_12347_12365 = state_12319;(statearr_12347_12365[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12319);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12346;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12366 = state_12319;
state_12319 = G__12366;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_12319){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_12319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_12348 = f__6176__auto__.call(null);(statearr_12348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___12349);
return statearr_12348;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6175__auto___12474 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_12450){var state_val_12451 = (state_12450[1]);if((state_val_12451 === 1))
{var inst_12421 = cljs.core.vec.call(null,chs);var inst_12422 = inst_12421;var state_12450__$1 = (function (){var statearr_12452 = state_12450;(statearr_12452[7] = inst_12422);
return statearr_12452;
})();var statearr_12453_12475 = state_12450__$1;(statearr_12453_12475[2] = null);
(statearr_12453_12475[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 2))
{var inst_12422 = (state_12450[7]);var inst_12424 = cljs.core.count.call(null,inst_12422);var inst_12425 = (inst_12424 > 0);var state_12450__$1 = state_12450;if(cljs.core.truth_(inst_12425))
{var statearr_12454_12476 = state_12450__$1;(statearr_12454_12476[1] = 4);
} else
{var statearr_12455_12477 = state_12450__$1;(statearr_12455_12477[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 3))
{var inst_12448 = (state_12450[2]);var state_12450__$1 = state_12450;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12450__$1,inst_12448);
} else
{if((state_val_12451 === 4))
{var inst_12422 = (state_12450[7]);var state_12450__$1 = state_12450;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12450__$1,7,inst_12422);
} else
{if((state_val_12451 === 5))
{var inst_12444 = cljs.core.async.close_BANG_.call(null,out);var state_12450__$1 = state_12450;var statearr_12456_12478 = state_12450__$1;(statearr_12456_12478[2] = inst_12444);
(statearr_12456_12478[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 6))
{var inst_12446 = (state_12450[2]);var state_12450__$1 = state_12450;var statearr_12457_12479 = state_12450__$1;(statearr_12457_12479[2] = inst_12446);
(statearr_12457_12479[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 7))
{var inst_12430 = (state_12450[8]);var inst_12429 = (state_12450[9]);var inst_12429__$1 = (state_12450[2]);var inst_12430__$1 = cljs.core.nth.call(null,inst_12429__$1,0,null);var inst_12431 = cljs.core.nth.call(null,inst_12429__$1,1,null);var inst_12432 = (inst_12430__$1 == null);var state_12450__$1 = (function (){var statearr_12458 = state_12450;(statearr_12458[10] = inst_12431);
(statearr_12458[8] = inst_12430__$1);
(statearr_12458[9] = inst_12429__$1);
return statearr_12458;
})();if(cljs.core.truth_(inst_12432))
{var statearr_12459_12480 = state_12450__$1;(statearr_12459_12480[1] = 8);
} else
{var statearr_12460_12481 = state_12450__$1;(statearr_12460_12481[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 8))
{var inst_12431 = (state_12450[10]);var inst_12430 = (state_12450[8]);var inst_12422 = (state_12450[7]);var inst_12429 = (state_12450[9]);var inst_12434 = (function (){var c = inst_12431;var v = inst_12430;var vec__12427 = inst_12429;var cs = inst_12422;return ((function (c,v,vec__12427,cs,inst_12431,inst_12430,inst_12422,inst_12429,state_val_12451){
return (function (p1__12367_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12367_SHARP_);
});
;})(c,v,vec__12427,cs,inst_12431,inst_12430,inst_12422,inst_12429,state_val_12451))
})();var inst_12435 = cljs.core.filterv.call(null,inst_12434,inst_12422);var inst_12422__$1 = inst_12435;var state_12450__$1 = (function (){var statearr_12461 = state_12450;(statearr_12461[7] = inst_12422__$1);
return statearr_12461;
})();var statearr_12462_12482 = state_12450__$1;(statearr_12462_12482[2] = null);
(statearr_12462_12482[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 9))
{var inst_12430 = (state_12450[8]);var state_12450__$1 = state_12450;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12450__$1,11,out,inst_12430);
} else
{if((state_val_12451 === 10))
{var inst_12442 = (state_12450[2]);var state_12450__$1 = state_12450;var statearr_12464_12483 = state_12450__$1;(statearr_12464_12483[2] = inst_12442);
(statearr_12464_12483[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 11))
{var inst_12422 = (state_12450[7]);var inst_12439 = (state_12450[2]);var tmp12463 = inst_12422;var inst_12422__$1 = tmp12463;var state_12450__$1 = (function (){var statearr_12465 = state_12450;(statearr_12465[11] = inst_12439);
(statearr_12465[7] = inst_12422__$1);
return statearr_12465;
})();var statearr_12466_12484 = state_12450__$1;(statearr_12466_12484[2] = null);
(statearr_12466_12484[1] = 2);
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
var state_machine__6161__auto____0 = (function (){var statearr_12470 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12470[0] = state_machine__6161__auto__);
(statearr_12470[1] = 1);
return statearr_12470;
});
var state_machine__6161__auto____1 = (function (state_12450){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_12450);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e12471){if((e12471 instanceof Object))
{var ex__6164__auto__ = e12471;var statearr_12472_12485 = state_12450;(statearr_12472_12485[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12450);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12471;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12486 = state_12450;
state_12450 = G__12486;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_12450){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_12450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_12473 = f__6176__auto__.call(null);(statearr_12473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___12474);
return statearr_12473;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6175__auto___12579 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_12556){var state_val_12557 = (state_12556[1]);if((state_val_12557 === 1))
{var inst_12533 = 0;var state_12556__$1 = (function (){var statearr_12558 = state_12556;(statearr_12558[7] = inst_12533);
return statearr_12558;
})();var statearr_12559_12580 = state_12556__$1;(statearr_12559_12580[2] = null);
(statearr_12559_12580[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12557 === 2))
{var inst_12533 = (state_12556[7]);var inst_12535 = (inst_12533 < n);var state_12556__$1 = state_12556;if(cljs.core.truth_(inst_12535))
{var statearr_12560_12581 = state_12556__$1;(statearr_12560_12581[1] = 4);
} else
{var statearr_12561_12582 = state_12556__$1;(statearr_12561_12582[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12557 === 3))
{var inst_12553 = (state_12556[2]);var inst_12554 = cljs.core.async.close_BANG_.call(null,out);var state_12556__$1 = (function (){var statearr_12562 = state_12556;(statearr_12562[8] = inst_12553);
return statearr_12562;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12556__$1,inst_12554);
} else
{if((state_val_12557 === 4))
{var state_12556__$1 = state_12556;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12556__$1,7,ch);
} else
{if((state_val_12557 === 5))
{var state_12556__$1 = state_12556;var statearr_12563_12583 = state_12556__$1;(statearr_12563_12583[2] = null);
(statearr_12563_12583[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12557 === 6))
{var inst_12551 = (state_12556[2]);var state_12556__$1 = state_12556;var statearr_12564_12584 = state_12556__$1;(statearr_12564_12584[2] = inst_12551);
(statearr_12564_12584[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12557 === 7))
{var inst_12538 = (state_12556[9]);var inst_12538__$1 = (state_12556[2]);var inst_12539 = (inst_12538__$1 == null);var inst_12540 = cljs.core.not.call(null,inst_12539);var state_12556__$1 = (function (){var statearr_12565 = state_12556;(statearr_12565[9] = inst_12538__$1);
return statearr_12565;
})();if(inst_12540)
{var statearr_12566_12585 = state_12556__$1;(statearr_12566_12585[1] = 8);
} else
{var statearr_12567_12586 = state_12556__$1;(statearr_12567_12586[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12557 === 8))
{var inst_12538 = (state_12556[9]);var state_12556__$1 = state_12556;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12556__$1,11,out,inst_12538);
} else
{if((state_val_12557 === 9))
{var state_12556__$1 = state_12556;var statearr_12568_12587 = state_12556__$1;(statearr_12568_12587[2] = null);
(statearr_12568_12587[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12557 === 10))
{var inst_12548 = (state_12556[2]);var state_12556__$1 = state_12556;var statearr_12569_12588 = state_12556__$1;(statearr_12569_12588[2] = inst_12548);
(statearr_12569_12588[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12557 === 11))
{var inst_12533 = (state_12556[7]);var inst_12543 = (state_12556[2]);var inst_12544 = (inst_12533 + 1);var inst_12533__$1 = inst_12544;var state_12556__$1 = (function (){var statearr_12570 = state_12556;(statearr_12570[10] = inst_12543);
(statearr_12570[7] = inst_12533__$1);
return statearr_12570;
})();var statearr_12571_12589 = state_12556__$1;(statearr_12571_12589[2] = null);
(statearr_12571_12589[1] = 2);
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
var state_machine__6161__auto____0 = (function (){var statearr_12575 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12575[0] = state_machine__6161__auto__);
(statearr_12575[1] = 1);
return statearr_12575;
});
var state_machine__6161__auto____1 = (function (state_12556){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_12556);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e12576){if((e12576 instanceof Object))
{var ex__6164__auto__ = e12576;var statearr_12577_12590 = state_12556;(statearr_12577_12590[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12556);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12576;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12591 = state_12556;
state_12556 = G__12591;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_12556){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_12556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_12578 = f__6176__auto__.call(null);(statearr_12578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___12579);
return statearr_12578;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6175__auto___12688 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_12663){var state_val_12664 = (state_12663[1]);if((state_val_12664 === 1))
{var inst_12640 = null;var state_12663__$1 = (function (){var statearr_12665 = state_12663;(statearr_12665[7] = inst_12640);
return statearr_12665;
})();var statearr_12666_12689 = state_12663__$1;(statearr_12666_12689[2] = null);
(statearr_12666_12689[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12664 === 2))
{var state_12663__$1 = state_12663;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12663__$1,4,ch);
} else
{if((state_val_12664 === 3))
{var inst_12660 = (state_12663[2]);var inst_12661 = cljs.core.async.close_BANG_.call(null,out);var state_12663__$1 = (function (){var statearr_12667 = state_12663;(statearr_12667[8] = inst_12660);
return statearr_12667;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12663__$1,inst_12661);
} else
{if((state_val_12664 === 4))
{var inst_12643 = (state_12663[9]);var inst_12643__$1 = (state_12663[2]);var inst_12644 = (inst_12643__$1 == null);var inst_12645 = cljs.core.not.call(null,inst_12644);var state_12663__$1 = (function (){var statearr_12668 = state_12663;(statearr_12668[9] = inst_12643__$1);
return statearr_12668;
})();if(inst_12645)
{var statearr_12669_12690 = state_12663__$1;(statearr_12669_12690[1] = 5);
} else
{var statearr_12670_12691 = state_12663__$1;(statearr_12670_12691[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12664 === 5))
{var inst_12643 = (state_12663[9]);var inst_12640 = (state_12663[7]);var inst_12647 = cljs.core._EQ_.call(null,inst_12643,inst_12640);var state_12663__$1 = state_12663;if(inst_12647)
{var statearr_12671_12692 = state_12663__$1;(statearr_12671_12692[1] = 8);
} else
{var statearr_12672_12693 = state_12663__$1;(statearr_12672_12693[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12664 === 6))
{var state_12663__$1 = state_12663;var statearr_12674_12694 = state_12663__$1;(statearr_12674_12694[2] = null);
(statearr_12674_12694[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12664 === 7))
{var inst_12658 = (state_12663[2]);var state_12663__$1 = state_12663;var statearr_12675_12695 = state_12663__$1;(statearr_12675_12695[2] = inst_12658);
(statearr_12675_12695[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12664 === 8))
{var inst_12640 = (state_12663[7]);var tmp12673 = inst_12640;var inst_12640__$1 = tmp12673;var state_12663__$1 = (function (){var statearr_12676 = state_12663;(statearr_12676[7] = inst_12640__$1);
return statearr_12676;
})();var statearr_12677_12696 = state_12663__$1;(statearr_12677_12696[2] = null);
(statearr_12677_12696[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12664 === 9))
{var inst_12643 = (state_12663[9]);var state_12663__$1 = state_12663;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12663__$1,11,out,inst_12643);
} else
{if((state_val_12664 === 10))
{var inst_12655 = (state_12663[2]);var state_12663__$1 = state_12663;var statearr_12678_12697 = state_12663__$1;(statearr_12678_12697[2] = inst_12655);
(statearr_12678_12697[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12664 === 11))
{var inst_12643 = (state_12663[9]);var inst_12652 = (state_12663[2]);var inst_12640 = inst_12643;var state_12663__$1 = (function (){var statearr_12679 = state_12663;(statearr_12679[10] = inst_12652);
(statearr_12679[7] = inst_12640);
return statearr_12679;
})();var statearr_12680_12698 = state_12663__$1;(statearr_12680_12698[2] = null);
(statearr_12680_12698[1] = 2);
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
var state_machine__6161__auto____0 = (function (){var statearr_12684 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12684[0] = state_machine__6161__auto__);
(statearr_12684[1] = 1);
return statearr_12684;
});
var state_machine__6161__auto____1 = (function (state_12663){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_12663);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e12685){if((e12685 instanceof Object))
{var ex__6164__auto__ = e12685;var statearr_12686_12699 = state_12663;(statearr_12686_12699[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12663);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12685;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12700 = state_12663;
state_12663 = G__12700;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_12663){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_12663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_12687 = f__6176__auto__.call(null);(statearr_12687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___12688);
return statearr_12687;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6175__auto___12835 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_12805){var state_val_12806 = (state_12805[1]);if((state_val_12806 === 1))
{var inst_12768 = (new Array(n));var inst_12769 = inst_12768;var inst_12770 = 0;var state_12805__$1 = (function (){var statearr_12807 = state_12805;(statearr_12807[7] = inst_12769);
(statearr_12807[8] = inst_12770);
return statearr_12807;
})();var statearr_12808_12836 = state_12805__$1;(statearr_12808_12836[2] = null);
(statearr_12808_12836[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 2))
{var state_12805__$1 = state_12805;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12805__$1,4,ch);
} else
{if((state_val_12806 === 3))
{var inst_12803 = (state_12805[2]);var state_12805__$1 = state_12805;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12805__$1,inst_12803);
} else
{if((state_val_12806 === 4))
{var inst_12773 = (state_12805[9]);var inst_12773__$1 = (state_12805[2]);var inst_12774 = (inst_12773__$1 == null);var inst_12775 = cljs.core.not.call(null,inst_12774);var state_12805__$1 = (function (){var statearr_12809 = state_12805;(statearr_12809[9] = inst_12773__$1);
return statearr_12809;
})();if(inst_12775)
{var statearr_12810_12837 = state_12805__$1;(statearr_12810_12837[1] = 5);
} else
{var statearr_12811_12838 = state_12805__$1;(statearr_12811_12838[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 5))
{var inst_12769 = (state_12805[7]);var inst_12778 = (state_12805[10]);var inst_12773 = (state_12805[9]);var inst_12770 = (state_12805[8]);var inst_12777 = (inst_12769[inst_12770] = inst_12773);var inst_12778__$1 = (inst_12770 + 1);var inst_12779 = (inst_12778__$1 < n);var state_12805__$1 = (function (){var statearr_12812 = state_12805;(statearr_12812[11] = inst_12777);
(statearr_12812[10] = inst_12778__$1);
return statearr_12812;
})();if(cljs.core.truth_(inst_12779))
{var statearr_12813_12839 = state_12805__$1;(statearr_12813_12839[1] = 8);
} else
{var statearr_12814_12840 = state_12805__$1;(statearr_12814_12840[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 6))
{var inst_12770 = (state_12805[8]);var inst_12791 = (inst_12770 > 0);var state_12805__$1 = state_12805;if(cljs.core.truth_(inst_12791))
{var statearr_12816_12841 = state_12805__$1;(statearr_12816_12841[1] = 12);
} else
{var statearr_12817_12842 = state_12805__$1;(statearr_12817_12842[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 7))
{var inst_12801 = (state_12805[2]);var state_12805__$1 = state_12805;var statearr_12818_12843 = state_12805__$1;(statearr_12818_12843[2] = inst_12801);
(statearr_12818_12843[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 8))
{var inst_12769 = (state_12805[7]);var inst_12778 = (state_12805[10]);var tmp12815 = inst_12769;var inst_12769__$1 = tmp12815;var inst_12770 = inst_12778;var state_12805__$1 = (function (){var statearr_12819 = state_12805;(statearr_12819[7] = inst_12769__$1);
(statearr_12819[8] = inst_12770);
return statearr_12819;
})();var statearr_12820_12844 = state_12805__$1;(statearr_12820_12844[2] = null);
(statearr_12820_12844[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 9))
{var inst_12769 = (state_12805[7]);var inst_12783 = cljs.core.vec.call(null,inst_12769);var state_12805__$1 = state_12805;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12805__$1,11,out,inst_12783);
} else
{if((state_val_12806 === 10))
{var inst_12789 = (state_12805[2]);var state_12805__$1 = state_12805;var statearr_12821_12845 = state_12805__$1;(statearr_12821_12845[2] = inst_12789);
(statearr_12821_12845[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 11))
{var inst_12785 = (state_12805[2]);var inst_12786 = (new Array(n));var inst_12769 = inst_12786;var inst_12770 = 0;var state_12805__$1 = (function (){var statearr_12822 = state_12805;(statearr_12822[7] = inst_12769);
(statearr_12822[12] = inst_12785);
(statearr_12822[8] = inst_12770);
return statearr_12822;
})();var statearr_12823_12846 = state_12805__$1;(statearr_12823_12846[2] = null);
(statearr_12823_12846[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 12))
{var inst_12769 = (state_12805[7]);var inst_12793 = cljs.core.vec.call(null,inst_12769);var state_12805__$1 = state_12805;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12805__$1,15,out,inst_12793);
} else
{if((state_val_12806 === 13))
{var state_12805__$1 = state_12805;var statearr_12824_12847 = state_12805__$1;(statearr_12824_12847[2] = null);
(statearr_12824_12847[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 14))
{var inst_12798 = (state_12805[2]);var inst_12799 = cljs.core.async.close_BANG_.call(null,out);var state_12805__$1 = (function (){var statearr_12825 = state_12805;(statearr_12825[13] = inst_12798);
return statearr_12825;
})();var statearr_12826_12848 = state_12805__$1;(statearr_12826_12848[2] = inst_12799);
(statearr_12826_12848[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 15))
{var inst_12795 = (state_12805[2]);var state_12805__$1 = state_12805;var statearr_12827_12849 = state_12805__$1;(statearr_12827_12849[2] = inst_12795);
(statearr_12827_12849[1] = 14);
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
var state_machine__6161__auto____0 = (function (){var statearr_12831 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12831[0] = state_machine__6161__auto__);
(statearr_12831[1] = 1);
return statearr_12831;
});
var state_machine__6161__auto____1 = (function (state_12805){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_12805);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e12832){if((e12832 instanceof Object))
{var ex__6164__auto__ = e12832;var statearr_12833_12850 = state_12805;(statearr_12833_12850[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12805);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12832;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12851 = state_12805;
state_12805 = G__12851;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_12805){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_12805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_12834 = f__6176__auto__.call(null);(statearr_12834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___12835);
return statearr_12834;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6175__auto___12994 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_12964){var state_val_12965 = (state_12964[1]);if((state_val_12965 === 1))
{var inst_12923 = [];var inst_12924 = inst_12923;var inst_12925 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_12964__$1 = (function (){var statearr_12966 = state_12964;(statearr_12966[7] = inst_12924);
(statearr_12966[8] = inst_12925);
return statearr_12966;
})();var statearr_12967_12995 = state_12964__$1;(statearr_12967_12995[2] = null);
(statearr_12967_12995[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12965 === 2))
{var state_12964__$1 = state_12964;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12964__$1,4,ch);
} else
{if((state_val_12965 === 3))
{var inst_12962 = (state_12964[2]);var state_12964__$1 = state_12964;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12964__$1,inst_12962);
} else
{if((state_val_12965 === 4))
{var inst_12928 = (state_12964[9]);var inst_12928__$1 = (state_12964[2]);var inst_12929 = (inst_12928__$1 == null);var inst_12930 = cljs.core.not.call(null,inst_12929);var state_12964__$1 = (function (){var statearr_12968 = state_12964;(statearr_12968[9] = inst_12928__$1);
return statearr_12968;
})();if(inst_12930)
{var statearr_12969_12996 = state_12964__$1;(statearr_12969_12996[1] = 5);
} else
{var statearr_12970_12997 = state_12964__$1;(statearr_12970_12997[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12965 === 5))
{var inst_12925 = (state_12964[8]);var inst_12932 = (state_12964[10]);var inst_12928 = (state_12964[9]);var inst_12932__$1 = f.call(null,inst_12928);var inst_12933 = cljs.core._EQ_.call(null,inst_12932__$1,inst_12925);var inst_12934 = cljs.core.keyword_identical_QMARK_.call(null,inst_12925,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_12935 = (inst_12933) || (inst_12934);var state_12964__$1 = (function (){var statearr_12971 = state_12964;(statearr_12971[10] = inst_12932__$1);
return statearr_12971;
})();if(cljs.core.truth_(inst_12935))
{var statearr_12972_12998 = state_12964__$1;(statearr_12972_12998[1] = 8);
} else
{var statearr_12973_12999 = state_12964__$1;(statearr_12973_12999[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12965 === 6))
{var inst_12924 = (state_12964[7]);var inst_12949 = inst_12924.length;var inst_12950 = (inst_12949 > 0);var state_12964__$1 = state_12964;if(cljs.core.truth_(inst_12950))
{var statearr_12975_13000 = state_12964__$1;(statearr_12975_13000[1] = 12);
} else
{var statearr_12976_13001 = state_12964__$1;(statearr_12976_13001[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12965 === 7))
{var inst_12960 = (state_12964[2]);var state_12964__$1 = state_12964;var statearr_12977_13002 = state_12964__$1;(statearr_12977_13002[2] = inst_12960);
(statearr_12977_13002[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12965 === 8))
{var inst_12924 = (state_12964[7]);var inst_12932 = (state_12964[10]);var inst_12928 = (state_12964[9]);var inst_12937 = inst_12924.push(inst_12928);var tmp12974 = inst_12924;var inst_12924__$1 = tmp12974;var inst_12925 = inst_12932;var state_12964__$1 = (function (){var statearr_12978 = state_12964;(statearr_12978[7] = inst_12924__$1);
(statearr_12978[8] = inst_12925);
(statearr_12978[11] = inst_12937);
return statearr_12978;
})();var statearr_12979_13003 = state_12964__$1;(statearr_12979_13003[2] = null);
(statearr_12979_13003[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12965 === 9))
{var inst_12924 = (state_12964[7]);var inst_12940 = cljs.core.vec.call(null,inst_12924);var state_12964__$1 = state_12964;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12964__$1,11,out,inst_12940);
} else
{if((state_val_12965 === 10))
{var inst_12947 = (state_12964[2]);var state_12964__$1 = state_12964;var statearr_12980_13004 = state_12964__$1;(statearr_12980_13004[2] = inst_12947);
(statearr_12980_13004[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12965 === 11))
{var inst_12932 = (state_12964[10]);var inst_12928 = (state_12964[9]);var inst_12942 = (state_12964[2]);var inst_12943 = [];var inst_12944 = inst_12943.push(inst_12928);var inst_12924 = inst_12943;var inst_12925 = inst_12932;var state_12964__$1 = (function (){var statearr_12981 = state_12964;(statearr_12981[12] = inst_12942);
(statearr_12981[13] = inst_12944);
(statearr_12981[7] = inst_12924);
(statearr_12981[8] = inst_12925);
return statearr_12981;
})();var statearr_12982_13005 = state_12964__$1;(statearr_12982_13005[2] = null);
(statearr_12982_13005[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12965 === 12))
{var inst_12924 = (state_12964[7]);var inst_12952 = cljs.core.vec.call(null,inst_12924);var state_12964__$1 = state_12964;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12964__$1,15,out,inst_12952);
} else
{if((state_val_12965 === 13))
{var state_12964__$1 = state_12964;var statearr_12983_13006 = state_12964__$1;(statearr_12983_13006[2] = null);
(statearr_12983_13006[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12965 === 14))
{var inst_12957 = (state_12964[2]);var inst_12958 = cljs.core.async.close_BANG_.call(null,out);var state_12964__$1 = (function (){var statearr_12984 = state_12964;(statearr_12984[14] = inst_12957);
return statearr_12984;
})();var statearr_12985_13007 = state_12964__$1;(statearr_12985_13007[2] = inst_12958);
(statearr_12985_13007[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12965 === 15))
{var inst_12954 = (state_12964[2]);var state_12964__$1 = state_12964;var statearr_12986_13008 = state_12964__$1;(statearr_12986_13008[2] = inst_12954);
(statearr_12986_13008[1] = 14);
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
var state_machine__6161__auto____0 = (function (){var statearr_12990 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12990[0] = state_machine__6161__auto__);
(statearr_12990[1] = 1);
return statearr_12990;
});
var state_machine__6161__auto____1 = (function (state_12964){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_12964);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e12991){if((e12991 instanceof Object))
{var ex__6164__auto__ = e12991;var statearr_12992_13009 = state_12964;(statearr_12992_13009[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12964);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12991;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13010 = state_12964;
state_12964 = G__13010;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_12964){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_12964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_12993 = f__6176__auto__.call(null);(statearr_12993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___12994);
return statearr_12993;
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
