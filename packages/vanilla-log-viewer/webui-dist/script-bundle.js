(()=>{var Re=Object.create;var S=Object.defineProperty;var Ue=Object.getOwnPropertyDescriptor;var Fe=Object.getOwnPropertyNames;var We=Object.getPrototypeOf,Ve=Object.prototype.hasOwnProperty;var f=(t,e)=>()=>(t&&(e=t(t=0)),e);var d=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),$e=(t,e)=>{for(var r in e)S(t,r,{get:e[r],enumerable:!0})},z=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of Fe(e))!Ve.call(t,o)&&o!==r&&S(t,o,{get:()=>e[o],enumerable:!(n=Ue(e,o))||n.enumerable});return t};var E=(t,e,r)=>(r=t!=null?Re(We(t)):{},z(e||!t||!t.__esModule?S(r,"default",{value:t,enumerable:!0}):r,t)),je=t=>z(S({},"__esModule",{value:!0}),t);var ae=d(u=>{"use strict";var g=Symbol.for("react.element"),Ke=Symbol.for("react.portal"),qe=Symbol.for("react.fragment"),He=Symbol.for("react.strict_mode"),Qe=Symbol.for("react.profiler"),Je=Symbol.for("react.provider"),ze=Symbol.for("react.context"),Ge=Symbol.for("react.forward_ref"),Xe=Symbol.for("react.suspense"),Ye=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),G=Symbol.iterator;function et(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var Z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ee=Object.assign,te={};function v(t,e,r){this.props=t,this.context=e,this.refs=te,this.updater=r||Z}v.prototype.isReactComponent={};v.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};v.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function re(){}re.prototype=v.prototype;function M(t,e,r){this.props=t,this.context=e,this.refs=te,this.updater=r||Z}var R=M.prototype=new re;R.constructor=M;ee(R,v.prototype);R.isPureReactComponent=!0;var X=Array.isArray,ne=Object.prototype.hasOwnProperty,U={current:null},oe={key:!0,ref:!0,__self:!0,__source:!0};function ie(t,e,r){var n,o={},i=null,s=null;if(e!=null)for(n in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(i=""+e.key),e)ne.call(e,n)&&!oe.hasOwnProperty(n)&&(o[n]=e[n]);var c=arguments.length-2;if(c===1)o.children=r;else if(1<c){for(var a=Array(c),l=0;l<c;l++)a[l]=arguments[l+2];o.children=a}if(t&&t.defaultProps)for(n in c=t.defaultProps,c)o[n]===void 0&&(o[n]=c[n]);return{$$typeof:g,type:t,key:i,ref:s,props:o,_owner:U.current}}function tt(t,e){return{$$typeof:g,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function F(t){return typeof t=="object"&&t!==null&&t.$$typeof===g}function rt(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var Y=/\/+/g;function D(t,e){return typeof t=="object"&&t!==null&&t.key!=null?rt(""+t.key):e.toString(36)}function C(t,e,r,n,o){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case g:case Ke:s=!0}}if(s)return s=t,o=o(s),t=n===""?"."+D(s,0):n,X(o)?(r="",t!=null&&(r=t.replace(Y,"$&/")+"/"),C(o,e,r,"",function(l){return l})):o!=null&&(F(o)&&(o=tt(o,r+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Y,"$&/")+"/")+t)),e.push(o)),1;if(s=0,n=n===""?".":n+":",X(t))for(var c=0;c<t.length;c++){i=t[c];var a=n+D(i,c);s+=C(i,e,r,a,o)}else if(a=et(t),typeof a=="function")for(t=a.call(t),c=0;!(i=t.next()).done;)i=i.value,a=n+D(i,c++),s+=C(i,e,r,a,o);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function T(t,e,r){if(t==null)return t;var n=[],o=0;return C(t,n,"","",function(i){return e.call(r,i,o++)}),n}function nt(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var p={current:null},P={transition:null},ot={ReactCurrentDispatcher:p,ReactCurrentBatchConfig:P,ReactCurrentOwner:U};function se(){throw Error("act(...) is not supported in production builds of React.")}u.Children={map:T,forEach:function(t,e,r){T(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return T(t,function(){e++}),e},toArray:function(t){return T(t,function(e){return e})||[]},only:function(t){if(!F(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};u.Component=v;u.Fragment=qe;u.Profiler=Qe;u.PureComponent=M;u.StrictMode=He;u.Suspense=Xe;u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ot;u.act=se;u.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=ee({},t.props),o=t.key,i=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,s=U.current),e.key!==void 0&&(o=""+e.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(a in e)ne.call(e,a)&&!oe.hasOwnProperty(a)&&(n[a]=e[a]===void 0&&c!==void 0?c[a]:e[a])}var a=arguments.length-2;if(a===1)n.children=r;else if(1<a){c=Array(a);for(var l=0;l<a;l++)c[l]=arguments[l+2];n.children=c}return{$$typeof:g,type:t.type,key:o,ref:i,props:n,_owner:s}};u.createContext=function(t){return t={$$typeof:ze,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Je,_context:t},t.Consumer=t};u.createElement=ie;u.createFactory=function(t){var e=ie.bind(null,t);return e.type=t,e};u.createRef=function(){return{current:null}};u.forwardRef=function(t){return{$$typeof:Ge,render:t}};u.isValidElement=F;u.lazy=function(t){return{$$typeof:Ze,_payload:{_status:-1,_result:t},_init:nt}};u.memo=function(t,e){return{$$typeof:Ye,type:t,compare:e===void 0?null:e}};u.startTransition=function(t){var e=P.transition;P.transition={};try{t()}finally{P.transition=e}};u.unstable_act=se;u.useCallback=function(t,e){return p.current.useCallback(t,e)};u.useContext=function(t){return p.current.useContext(t)};u.useDebugValue=function(){};u.useDeferredValue=function(t){return p.current.useDeferredValue(t)};u.useEffect=function(t,e){return p.current.useEffect(t,e)};u.useId=function(){return p.current.useId()};u.useImperativeHandle=function(t,e,r){return p.current.useImperativeHandle(t,e,r)};u.useInsertionEffect=function(t,e){return p.current.useInsertionEffect(t,e)};u.useLayoutEffect=function(t,e){return p.current.useLayoutEffect(t,e)};u.useMemo=function(t,e){return p.current.useMemo(t,e)};u.useReducer=function(t,e,r){return p.current.useReducer(t,e,r)};u.useRef=function(t){return p.current.useRef(t)};u.useState=function(t){return p.current.useState(t)};u.useSyncExternalStore=function(t,e,r){return p.current.useSyncExternalStore(t,e,r)};u.useTransition=function(){return p.current.useTransition()};u.version="18.3.1"});var ce=d((Pt,ue)=>{"use strict";ue.exports=ae()});var pe=d((kt,le)=>{"use strict";var it=function(){function t(r){this.subscriber=r}var e=t.prototype;return e.remove=function(){this.subscriber&&(this.subscriber.removeSubscription(this),this.subscriber=null)},t}();le.exports=it});var W=d((At,fe)=>{"use strict";function st(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var at=pe(),ut=function(t){st(e,t);function e(r,n,o){var i;return i=t.call(this,r)||this,i.listener=n,i.context=o,i}return e}(at);fe.exports=ut});var V=d((_t,de)=>{"use strict";var ct=function(t){};function lt(t,e){for(var r=arguments.length,n=new Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];if(ct(e),!t){var i;if(e===void 0)i=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=0;i=new Error(e.replace(/%s/g,function(){return String(n[s++])})),i.name="Invariant Violation"}throw i.framesToPop=1,i}}de.exports=lt});var me=d((xt,ye)=>{"use strict";var pt=V(),ft=function(){function t(){this._subscriptionsForType={},this._currentSubscription=null}var e=t.prototype;return e.addSubscription=function(n,o){o.subscriber!==this&&pt(!1),this._subscriptionsForType[n]||(this._subscriptionsForType[n]=[]);var i=this._subscriptionsForType[n].length;return this._subscriptionsForType[n].push(o),o.eventType=n,o.key=i,o},e.removeAllSubscriptions=function(n){n===void 0?this._subscriptionsForType={}:delete this._subscriptionsForType[n]},e.removeSubscription=function(n){var o=n.eventType,i=n.key,s=this._subscriptionsForType[o];s&&delete s[i]},e.getSubscriptionsForType=function(n){return this._subscriptionsForType[n]},t}();ye.exports=ft});var he=d((Lt,ve)=>{"use strict";function k(t){return function(){return t}}var m=function(){};m.thatReturns=k;m.thatReturnsFalse=k(!1);m.thatReturnsTrue=k(!0);m.thatReturnsNull=k(null);m.thatReturnsThis=function(){return this};m.thatReturnsArgument=function(t){return t};ve.exports=m});var be=d((It,ge)=>{"use strict";var dt=W(),yt=me(),mt=V(),vt=he(),ht=function(){function t(){this._subscriber=new yt,this._currentSubscription=null}var e=t.prototype;return e.addListener=function(n,o,i){return this._subscriber.addSubscription(n,new dt(this._subscriber,o,i))},e.once=function(n,o,i){var s=this;return this.addListener(n,function(){s.removeCurrentListener(),o.apply(i,arguments)})},e.removeAllListeners=function(n){this._subscriber.removeAllSubscriptions(n)},e.removeCurrentListener=function(){this._currentSubscription||mt(!1),this._subscriber.removeSubscription(this._currentSubscription)},e.listeners=function(n){var o=this._subscriber.getSubscriptionsForType(n);return o?o.filter(vt.thatReturnsTrue).map(function(i){return i.listener}):[]},e.emit=function(n){var o=this._subscriber.getSubscriptionsForType(n);if(o){for(var i=Object.keys(o),s=0;s<i.length;s++){var c=i[s],a=o[c];a&&(this._currentSubscription=a,this.__emitToSubscription.apply(this,[a].concat(Array.prototype.slice.call(arguments))))}this._currentSubscription=null}},e.__emitToSubscription=function(n,o){var i=Array.prototype.slice.call(arguments,2);n.listener.apply(n.context,i)},t}();ge.exports=ht});var $=d((Bt,we)=>{var gt={EventEmitter:be(),EmitterSubscription:W()};we.exports=gt});function A(t){return typeof t.arrayBuffer=="function"?t.arrayBuffer():bt(t)}async function bt(t){return new Promise((e,r)=>{let n=new FileReader;n.onload=()=>{e(n.result)},n.onerror=r,n.readAsArrayBuffer(t)})}var j=f(()=>{});var _,Se=f(()=>{j();_=class t{textEncoder=new TextEncoder;textDecoder=new TextDecoder;async pack({messageKey:e,payload:r}){let n=JSON.stringify(e),o=this.textEncoder.encode(n),i=o.length,s=await this.payloadToUint8Array(r),c=4+i+1+s.byteLength,a=new ArrayBuffer(c),l=new Uint8Array(a);return new DataView(a,0,4).setUint32(0,i,!1),l.set(o,4),new DataView(a,4+i,1).setUint8(0,t.getPayloadTypeIndicator(r)),l.set(s,4+i+1),l}async unpack(e){let n=new DataView(e,0,4).getUint32(0,!1),o=e.slice(4,4+n),i=this.textDecoder.decode(o),s=JSON.parse(i),a=new DataView(e,4+n,1).getUint8(0),l=e.slice(4+n+1),J=await this.deserializePayload(l,a);return{messageKey:s,payload:J}}async payloadToUint8Array(e){if(e instanceof Uint8Array)return e;if(typeof e=="string")return this.textEncoder.encode(e);if(typeof e=="number"){let r=new ArrayBuffer(8);return new DataView(r).setFloat64(0,e,!1),new Uint8Array(r)}else return e===null?new Uint8Array(0):e===void 0?new Uint8Array(0):e instanceof ArrayBuffer?new Uint8Array(e):e instanceof Blob?new Uint8Array(await A(e)):this.textEncoder.encode(JSON.stringify(e))}async deserializePayload(e,r){switch(r){case 1:return new Uint8Array(e);case 2:return this.textDecoder.decode(e);case 3:return new DataView(e).getFloat64(0,!1);case 4:return null;case 5:return;case 6:{let n=this.textDecoder.decode(e);return JSON.parse(n)}case 7:return e;case 8:return new Blob([e]);default:throw new Error("Unsupported payload type")}}static getPayloadTypeIndicator(e){if(e instanceof Uint8Array)return 1;if(typeof e=="string")return 2;if(typeof e=="number")return 3;if(e===null)return 4;if(e===void 0)return 5;if(e instanceof ArrayBuffer)return 7;if(e instanceof Blob)return 8;if(typeof e=="object")return 6;throw new Error("Unsupported payload type")}}});var x,Ee=f(()=>{x=class{constructor(e=null,r=0){this.ws=e;this.refCount=r}}});var Te,L,Ce=f(()=>{Te=E($()),L=class{constructor(e,r){this.url=e;this.retriesInterval=r?.retriesInterval??1500,this.maxRetries=r?.maxRetries??200,this.connectTimeout=r?.connectTimeout??5e3,this.onError=r?.onError??(n=>{throw n}),this.onReconnect=r?.onReconnect??(()=>{}),this.wsBinaryType=r?.binaryType,this.connect()}retriesInterval;maxRetries;connectTimeout;onError;onReconnect;ws=null;retries=0;connectTimeoutHandle=null;isClosed=!1;sendQueue=[];lastCloseEvent=null;emitter=new Te.EventEmitter;eventSubscriptions=[];wsBinaryType;close(e,r){if(this.clearConnectTimeoutIfNeeded(),this.emitter.emit("close",this.lastCloseEvent??{code:e??1e3,reason:r??"Explicit closing",message:"Explicit closing"}),this.lastCloseEvent=null,this.isClosed=!0,this.emitter.removeAllListeners(),this.sendQueue=[],this.ws!=null){let n=this.ws;this.ws=null,this.wsClose(n)}}addEventListener(e,r){this.eventSubscriptions.push(this.emitter.addListener(e,r))}removeEventListener(e,r){let n=this.eventSubscriptions.findIndex(o=>o.listener===r);n>=0&&(this.eventSubscriptions[n].remove(),this.eventSubscriptions.splice(n,1))}connect(){this.ws==null&&(this.connectTimeoutHandle=setTimeout(this.handleConnectTimeout,this.connectTimeout),this.ws=new WebSocket(this.url.toString()),this.wsBinaryType!=null&&(this.ws.binaryType=this.wsBinaryType),this.ws.addEventListener("message",this.handleMessage),this.ws.addEventListener("open",this.handleOpen),this.ws.addEventListener("error",this.handleError),this.ws.addEventListener("close",this.handleClose))}send(e){if(this.isClosed){this.onError(new Error("Unable to send data: WebSocket is closed"));return}if(this.retries>=this.maxRetries){this.onError(new Error(`Unable to send data: Exceeded max retries - retries[${this.retries}]`));return}let r=this.ws;r!=null&&r.readyState===WebSocket.OPEN?r.send(e):this.sendQueue.push(e)}handleOpen=()=>{this.clearConnectTimeoutIfNeeded(),this.lastCloseEvent=null,this.emitter.emit("open");let e=this.sendQueue;this.sendQueue=[];for(let r of e)this.send(r)};handleMessage=e=>{this.emitter.emit("message",e)};handleError=e=>{this.clearConnectTimeoutIfNeeded(),this.emitter.emit("error",e),this.reconnectIfNeeded(`WebSocket error - ${e.message}`)};handleClose=e=>{this.clearConnectTimeoutIfNeeded(),this.lastCloseEvent={code:e.code,reason:e.reason,message:e.message},this.reconnectIfNeeded(`WebSocket closed - code[${e.code}] reason[${e.reason}]`)};handleConnectTimeout=()=>{this.reconnectIfNeeded("Timeout from connecting to the WebSocket")};clearConnectTimeoutIfNeeded(){this.connectTimeoutHandle!=null&&(clearTimeout(this.connectTimeoutHandle),this.connectTimeoutHandle=null)}reconnectIfNeeded(e){if(this.ws!=null&&(this.wsClose(this.ws),this.ws=null),!this.isClosed){if(this.retries>=this.maxRetries){this.onError(new Error("Exceeded max retries")),this.close();return}setTimeout(()=>{this.retries+=1,this.connect(),this.onReconnect(e)},this.retriesInterval)}}wsClose(e){try{e.removeEventListener("message",this.handleMessage),e.removeEventListener("open",this.handleOpen),e.removeEventListener("close",this.handleClose),e.onerror=()=>{},e.close()}catch{}}get readyState(){if(this.isClosed)return WebSocket.CLOSED;let e=this.ws?.readyState;return e===WebSocket.CLOSED?WebSocket.CONNECTING:e??WebSocket.CONNECTING}CONNECTING=0;OPEN=1;CLOSING=2;CLOSED=3;get binaryType(){return this.ws?.binaryType??"blob"}get bufferedAmount(){return this.ws?.bufferedAmount??0}get extensions(){return this.ws?.extensions??""}get protocol(){return this.ws?.protocol??""}ping(){return this.ws?.ping()}dispatchEvent(e){return this.ws?.dispatchEvent(e)??!1}set onclose(e){throw new Error("Unsupported legacy property, use addEventListener instead")}set onerror(e){throw new Error("Unsupported legacy property, use addEventListener instead")}set onmessage(e){throw new Error("Unsupported legacy property, use addEventListener instead")}set onopen(e){throw new Error("Unsupported legacy property, use addEventListener instead")}}});function h(...t){K&&console.info(...t)}function q(...t){K&&console.warn(...t)}function Pe(t){K=t}var K,b=f(()=>{K=!1});var ke,y,I=f(()=>{ke=E($());Se();Ee();Ce();j();b();y=class t{constructor(e,r){this.connectionInfo=e;this.options=r;this.wsStore=e.wsStore||t.defaultWSStore}eventEmitter=new ke.EventEmitter;static defaultWSStore=new x;wsStore=t.defaultWSStore;isClosed=!1;retries=0;messageFramePacker=new _;async initAsync(){this.wsStore.ws==null&&(this.wsStore.ws=await this.connectAsync()),this.wsStore.refCount+=1,this.wsStore.ws.addEventListener("message",this.handleMessage)}async closeAsync(){this.isClosed=!0,this.wsStore.ws?.removeEventListener("message",this.handleMessage),this.wsStore.refCount-=1,this.wsStore.refCount<1&&(this.wsStore.ws?.close(),this.wsStore.ws=null),this.eventEmitter.removeAllListeners()}sendMessage(e,r){if(this.wsStore.ws?.readyState===WebSocket.CLOSED){q("Unable to send message in a disconnected state.");return}this.sendMessageImpl(e,r)}async sendMessageImpl(e,r){let n={pluginName:this.connectionInfo.pluginName,method:e},o=await this.messageFramePacker.pack({messageKey:n,payload:r});this.wsStore.ws?.send(o)}addMessageListener(e,r){return this.eventEmitter.addListener(e,r)}addMessageListenerOnce(e,r){this.eventEmitter.once(e,r)}isConnected(){return this.wsStore.ws?.readyState===WebSocket.OPEN}connectAsync(){return new Promise((e,r)=>{let n="expo-dev-plugins/broadcast",o=new L(`ws://${this.connectionInfo.devServer}/${n}`,{binaryType:this.options?.websocketBinaryType,onError:i=>{i instanceof Error?console.warn(`Error happened from the WebSocket connection: ${i.message}
${i.stack}`):console.warn(`Error happened from the WebSocket connection: ${JSON.stringify(i)}`)}});o.addEventListener("open",()=>{e(o)}),o.addEventListener("error",i=>{r(i)}),o.addEventListener("close",i=>{h("WebSocket closed",i.code,i.reason)})})}handleMessage=e=>{this.handleMessageImpl(e)};handleMessageImpl=async e=>{let r;if(e.data instanceof ArrayBuffer)r=e.data;else if(ArrayBuffer.isView(e.data))r=e.data.buffer;else if(e.data instanceof Blob)r=await A(e.data);else{q("Unsupported received data type in handleMessageImpl");return}let{messageKey:n,payload:o}=await this.messageFramePacker.unpack(r);n.pluginName&&n.pluginName!==this.connectionInfo.pluginName||this.eventEmitter.emit(n.method,o)};getWebSocketBackingStore(){return this.wsStore}}});var B,Ae=f(()=>{I();b();B=class extends y{browserClientMap={};async initAsync(){await super.initAsync(),this.addHandshakeHandler()}addHandshakeHandler(){this.addMessageListener("handshake",e=>{let r=this.browserClientMap[e.pluginName];r!=null&&r!==e.browserClientId&&(h(`Terminate the previous browser client connection - previousBrowserClientId[${r}]`),this.sendMessage("terminateBrowserClient",{browserClientId:r})),this.browserClientMap[e.pluginName]=e.browserClientId})}}});var O,_e=f(()=>{I();b();O=class extends y{browserClientId=Date.now().toString();async initAsync(){await super.initAsync(),this.startHandshake()}startHandshake(){this.addMessageListener("terminateBrowserClient",e=>{this.browserClientId===e.browserClientId&&(h("Received terminateBrowserClient messages and terminate the current connection"),this.closeAsync())}),this.sendMessage("handshake",{browserClientId:this.browserClientId,pluginName:this.connectionInfo.pluginName})}}});function xe(){let t=new URLSearchParams(window.location.search).get("devServer"),e=window.location.origin.replace(/^https?:\/\//,"");return{sender:"browser",devServer:t||e}}var Le=f(()=>{});async function wt(t,e){let r;return t.sender==="app"?r=new B(t,e):r=new O(t,e),await r.initAsync(),r}async function Q(t,e){let r=xe(),n=N[t];if(n!=null){if(n instanceof Promise)return n;(n.isConnected()===!1||n.connectionInfo.devServer!==r.devServer)&&(await n.closeAsync(),delete N[t],n=null)}if(n==null){let o=wt({...r,pluginName:t},e);N[t]=o,n=await o,N[t]=n}return n}var N,Ie=f(()=>{Ae();_e();Le();N={}});var Be={};$e(Be,{DevToolsPluginClient:()=>y,getDevToolsPluginClientAsync:()=>Q,setEnableLogging:()=>Pe,useDevToolsPluginClient:()=>St});function St(t,e){let[r,n]=(0,w.useState)(null),[o,i]=(0,w.useState)(null);if((0,w.useEffect)(()=>{async function s(){try{let a=await Q(t,e);n(a)}catch(a){i(new Error("Failed to setup client from useDevToolsPluginClient: "+a.toString()))}}async function c(){try{await r?.closeAsync()}catch(a){i(new Error("Failed to teardown client from useDevToolsPluginClient: "+a.toString()))}}return s(),()=>{c()}},[t]),o!=null)throw o;return r}var w,Oe=f(()=>{w=E(ce());I();Ie();b()});var De=d((rr,Ne)=>{Ne.exports=(Oe(),je(Be))});var Me=E(De());(async function(){var t=document.getElementById("root");function e(n,o){typeof n=="object"&&(n=JSON.stringify(n,null,2));var i=document.createElement("div");i.className="log-item "+o,i.textContent=n,t.appendChild(i)}let r=await(0,Me.getDevToolsPluginClientAsync)("vanilla-log-viewer");r.addMessageListener("log",n=>{e(n,"log")}),r.addMessageListener("warn",n=>{e(n,"warn")}),r.addMessageListener("error",n=>{e(n,"error")})})();})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
