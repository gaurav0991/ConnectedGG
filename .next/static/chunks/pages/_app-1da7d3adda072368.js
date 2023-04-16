(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4444:function(a,b,c){"use strict";c.d(b,{BH:function(){return E},L:function(){return k},LL:function(){return H},P0:function(){return B},Pz:function(){return D},Sg:function(){return F},UG:function(){return q},ZR:function(){return G},aH:function(){return C},"b$":function(){return s},eu:function(){return v},hl:function(){return u},m9:function(){return V},ne:function(){return R},pd:function(){return Q},q4:function(){return A},ru:function(){return r},tV:function(){return l},uI:function(){return p},vZ:function(){return M},w1:function(){return t},xO:function(){return O},xb:function(){return L},"z$":function(){return o},zd:function(){return P}});var d=c(3454);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */ let e={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},f=function(a){return Error("Firebase Database ("+e.SDK_VERSION+") INTERNAL ASSERT FAILED: "+a)},g=function(a){let b=[],c=0;for(let d=0;d<a.length;d++){let e=a.charCodeAt(d);e<128?b[c++]=e:e<2048?(b[c++]=e>>6|192,b[c++]=63&e|128):(64512&e)==55296&&d+1<a.length&&(64512&a.charCodeAt(d+1))==56320?(e=65536+((1023&e)<<10)+(1023&a.charCodeAt(++d)),b[c++]=e>>18|240,b[c++]=e>>12&63|128,b[c++]=e>>6&63|128,b[c++]=63&e|128):(b[c++]=e>>12|224,b[c++]=e>>6&63|128,b[c++]=63&e|128)}return b},h=function(a){let b=[],c=0,d=0;for(;c<a.length;){let e=a[c++];if(e<128)b[d++]=String.fromCharCode(e);else if(e>191&&e<224){let f=a[c++];b[d++]=String.fromCharCode((31&e)<<6|63&f)}else if(e>239&&e<365){let g=a[c++],h=a[c++],i=a[c++],j=((7&e)<<18|(63&g)<<12|(63&h)<<6|63&i)-65536;b[d++]=String.fromCharCode(55296+(j>>10)),b[d++]=String.fromCharCode(56320+(1023&j))}else{let k=a[c++],l=a[c++];b[d++]=String.fromCharCode((15&e)<<12|(63&k)<<6|63&l)}}return b.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(a,b){if(!Array.isArray(a))throw Error("encodeByteArray takes an array as a parameter");this.init_();let c=b?this.byteToCharMapWebSafe_:this.byteToCharMap_,d=[];for(let e=0;e<a.length;e+=3){let f=a[e],g=e+1<a.length,h=g?a[e+1]:0,i=e+2<a.length,j=i?a[e+2]:0,k=f>>2,l=(3&f)<<4|h>>4,m=(15&h)<<2|j>>6,n=63&j;i||(n=64,g||(m=64)),d.push(c[k],c[l],c[m],c[n])}return d.join("")},encodeString(a,b){return this.HAS_NATIVE_SUPPORT&&!b?btoa(a):this.encodeByteArray(g(a),b)},decodeString(a,b){return this.HAS_NATIVE_SUPPORT&&!b?atob(a):h(this.decodeStringToByteArray(a,b))},decodeStringToByteArray(a,b){this.init_();let c=b?this.charToByteMapWebSafe_:this.charToByteMap_,d=[];for(let e=0;e<a.length;){let f=c[a.charAt(e++)],g=e<a.length,h=g?c[a.charAt(e)]:0;++e;let i=e<a.length,j=i?c[a.charAt(e)]:64;++e;let k=e<a.length,l=k?c[a.charAt(e)]:64;if(++e,null==f||null==h||null==j||null==l)throw Error();let m=f<<2|h>>4;if(d.push(m),64!==j){let n=h<<4&240|j>>2;if(d.push(n),64!==l){let o=j<<6&192|l;d.push(o)}}}return d},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let a=0;a<this.ENCODED_VALS.length;a++)this.byteToCharMap_[a]=this.ENCODED_VALS.charAt(a),this.charToByteMap_[this.byteToCharMap_[a]]=a,this.byteToCharMapWebSafe_[a]=this.ENCODED_VALS_WEBSAFE.charAt(a),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[a]]=a,a>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(a)]=a,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(a)]=a)}}},j=function(a){let b=g(a);return i.encodeByteArray(b,!0)},k=function(a){return j(a).replace(/\./g,"")},l=function(a){try{return i.decodeString(a,!0)}catch(b){console.error("base64Decode failed: ",b)}return null};function m(a,b){if(!(b instanceof Object))return b;switch(b.constructor){case Date:let c=b;return new Date(c.getTime());case Object:void 0===a&&(a={});break;case Array:a=[];break;default:return b}for(let d in b)b.hasOwnProperty(d)&&n(d)&&(a[d]=m(a[d],b[d]));return a}function n(a){return"__proto__"!==a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */ function o(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function p(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(o())}function q(){try{return"[object process]"===Object.prototype.toString.call(c.g.process)}catch(a){return!1}}function r(){let a="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof a&& void 0!==a.id}function s(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function t(){let a=o();return a.indexOf("MSIE ")>=0||a.indexOf("Trident/")>=0}function u(){return"object"==typeof indexedDB}function v(){return new Promise((a,b)=>{try{let c=!0,d="validate-browser-context-for-indexeddb-analytics-module",e=self.indexedDB.open(d);e.onsuccess=()=>{e.result.close(),c||self.indexedDB.deleteDatabase(d),a(!0)},e.onupgradeneeded=()=>{c=!1},e.onerror=()=>{var a;b((null===(a=e.error)|| void 0===a?void 0:a.message)||"")}}catch(f){b(f)}})}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let w=()=>(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==c.g)return c.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,x=()=>{if(void 0===d|| void 0===d.env)return;let a=d.env.__FIREBASE_DEFAULTS__;if(a)return JSON.parse(a)},y=()=>{if("undefined"==typeof document)return;let a;try{a=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(b){return}let c=a&&l(a[1]);return c&&JSON.parse(c)},z=()=>{try{return w()||x()||y()}catch(a){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${a}`);return}},A=a=>{var b,c;return null===(c=null===(b=z())|| void 0===b?void 0:b.emulatorHosts)|| void 0===c?void 0:c[a]},B=a=>{let b=A(a);if(!b)return;let c=b.lastIndexOf(":");if(c<=0||c+1===b.length)throw Error(`Invalid host ${b} with no separate hostname and port!`);let d=parseInt(b.substring(c+1),10);return"["===b[0]?[b.substring(1,c-1),d]:[b.substring(0,c),d]},C=()=>{var a;return null===(a=z())|| void 0===a?void 0:a.config},D=a=>{var b;return null===(b=z())|| void 0===b?void 0:b[`_${a}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class E{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((a,b)=>{this.resolve=a,this.reject=b})}wrapCallback(a){return(b,c)=>{b?this.reject(b):this.resolve(c),"function"==typeof a&&(this.promise.catch(()=>{}),1===a.length?a(b):a(b,c))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function F(a,b){if(a.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let c=b||"demo-project",d=a.iat||0,e=a.sub||a.user_id;if(!e)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let f=Object.assign({iss:`https://securetoken.google.com/${c}`,aud:c,iat:d,exp:d+3600,auth_time:d,sub:e,user_id:e,firebase:{sign_in_provider:"custom",identities:{}}},a);return[k(JSON.stringify({alg:"none",type:"JWT"})),k(JSON.stringify(f)),""].join(".")}class G extends Error{constructor(a,b,c){super(b),this.code=a,this.customData=c,this.name="FirebaseError",Object.setPrototypeOf(this,G.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,H.prototype.create)}}class H{constructor(a,b,c){this.service=a,this.serviceName=b,this.errors=c}create(a,...b){let c=b[0]||{},d=`${this.service}/${a}`,e=this.errors[a],f=e?I(e,c):"Error",g=`${this.serviceName}: ${f} (${d}).`,h=new G(d,g,c);return h}}function I(a,b){return a.replace(J,(a,c)=>{let d=b[c];return null!=d?String(d):`<${c}?>`})}let J=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */ function K(a){return JSON.parse(a)}function L(a){for(let b in a)if(Object.prototype.hasOwnProperty.call(a,b))return!1;return!0}function M(a,b){if(a===b)return!0;let c=Object.keys(a),d=Object.keys(b);for(let e of c){if(!d.includes(e))return!1;let f=a[e],g=b[e];if(N(f)&&N(g)){if(!M(f,g))return!1}else if(f!==g)return!1}for(let h of d)if(!c.includes(h))return!1;return!0}function N(a){return null!==a&&"object"==typeof a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */ function O(a){let b=[];for(let[c,d]of Object.entries(a))Array.isArray(d)?d.forEach(a=>{b.push(encodeURIComponent(c)+"="+encodeURIComponent(a))}):b.push(encodeURIComponent(c)+"="+encodeURIComponent(d));return b.length?"&"+b.join("&"):""}function P(a){let b={},c=a.replace(/^\?/,"").split("&");return c.forEach(a=>{if(a){let[c,d]=a.split("=");b[decodeURIComponent(c)]=decodeURIComponent(d)}}),b}function Q(a){let b=a.indexOf("?");if(!b)return"";let c=a.indexOf("#",b);return a.substring(b,c>0?c:void 0)}function R(a,b){let c=new S(a,b);return c.subscribe.bind(c)}class S{constructor(a,b){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=b,this.task.then(()=>{a(this)}).catch(a=>{this.error(a)})}next(a){this.forEachObserver(b=>{b.next(a)})}error(a){this.forEachObserver(b=>{b.error(a)}),this.close(a)}complete(){this.forEachObserver(a=>{a.complete()}),this.close()}subscribe(a,b,c){let d;if(void 0===a&& void 0===b&& void 0===c)throw Error("Missing Observer.");void 0===(d=T(a,["next","error","complete"])?a:{next:a,error:b,complete:c}).next&&(d.next=U),void 0===d.error&&(d.error=U),void 0===d.complete&&(d.complete=U);let e=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?d.error(this.finalError):d.complete()}catch(a){}}),this.observers.push(d),e}unsubscribeOne(a){void 0!==this.observers&& void 0!==this.observers[a]&&(delete this.observers[a],this.observerCount-=1,0===this.observerCount&& void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(a){if(!this.finalized)for(let b=0;b<this.observers.length;b++)this.sendOne(b,a)}sendOne(a,b){this.task.then(()=>{if(void 0!==this.observers&& void 0!==this.observers[a])try{b(this.observers[a])}catch(c){"undefined"!=typeof console&&console.error&&console.error(c)}})}close(a){!this.finalized&&(this.finalized=!0,void 0!==a&&(this.finalError=a),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function T(a,b){if("object"!=typeof a||null===a)return!1;for(let c of b)if(c in a&&"function"==typeof a[c])return!0;return!1}function U(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function V(a){return a&&a._delegate?a._delegate:a}},8006:function(a,b,c){"use strict";c.d(b,{hJ:function(){return aR},v0:function(){return ck},Aj:function(){return a4},rh:function(){return bI},w7:function(){return a5}});var d,e=c(4444),f=c(5816),g=c(3333),h=c(655),i=c(8463);function j(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let k=j,l=new e.LL("auth","Firebase",j()),m=new g.Yd("@firebase/auth");function n(a,...b){m.logLevel<=g.in.ERROR&&m.error(`Auth (${f.Jn}): ${a}`,...b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function o(a,...b){throw s(a,...b)}function p(a,...b){return s(a,...b)}function q(a,b,c){let d=Object.assign(Object.assign({},k()),{[b]:c}),f=new e.LL("auth","Firebase",d);return f.create(b,{appName:a.name})}function r(a,b,c){let d=c;if(!(b instanceof d))throw d.name!==b.constructor.name&&o(a,"argument-error"),q(a,"argument-error",`Type of ${b.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function s(a,...b){if("string"!=typeof a){let c=b[0],d=[...b.slice(1)];return d[0]&&(d[0].appName=a.name),a._errorFactory.create(c,...d)}return l.create(a,...b)}function t(a,b,...c){if(!a)throw s(b,...c)}function u(a){let b="INTERNAL ASSERTION FAILED: "+a;throw n(b),Error(b)}function v(a,b){a||u(b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let w=new Map;function x(a){v(a instanceof Function,"Expected a class definition");let b=w.get(a);return b?(v(b instanceof a,"Instance stored in cache mismatched with class"),b):(b=new a,w.set(a,b),b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function y(){var a;return"undefined"!=typeof self&&(null===(a=self.location)|| void 0===a?void 0:a.href)||""}function z(){var a;return"undefined"!=typeof self&&(null===(a=self.location)|| void 0===a?void 0:a.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A structure to help pick between a range of long and short delay durations
 * depending on the current environment. In general, the long delay is used for
 * mobile environments whereas short delays are used for desktop environments.
 */ class A{constructor(a,b){this.shortDelay=a,this.longDelay=b,v(b>a,"Short delay should be less than long delay!"),this.isMobile=(0,e.uI)()||(0,e.b$)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===z()||"https:"===z()||(0,e.ru)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function B(a,b){v(a.emulator,"Emulator should always be set here");let{url:c}=a.emulator;return b?`${c}${b.startsWith("/")?b.slice(1):b}`:c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class C{static initialize(a,b,c){this.fetchImpl=a,b&&(this.headersImpl=b),c&&(this.responseImpl=c)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void u("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void u("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void u("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Map from errors returned by the server to errors to developer visible errors
 */ let D={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},E=new A(3e4,6e4);function F(a,b){return a.tenantId&&!b.tenantId?Object.assign(Object.assign({},b),{tenantId:a.tenantId}):b}async function G(a,b,c,d,f={}){return H(a,f,async()=>{let f={},g={};d&&("GET"===b?g=d:f={body:JSON.stringify(d)});let h=(0,e.xO)(Object.assign({key:a.config.apiKey},g)).slice(1),i=await a._getAdditionalHeaders();return i["Content-Type"]="application/json",a.languageCode&&(i["X-Firebase-Locale"]=a.languageCode),C.fetch()(J(a,a.config.apiHost,c,h),Object.assign({method:b,headers:i,referrerPolicy:"no-referrer"},f))})}async function H(a,b,c){a._canInitEmulator=!1;let d=Object.assign(Object.assign({},D),b);try{let f=new K(a),g=await Promise.race([c(),f.promise]);f.clearNetworkTimeout();let h=await g.json();if("needConfirmation"in h)throw L(a,"account-exists-with-different-credential",h);if(g.ok&&!("errorMessage"in h))return h;{let i=g.ok?h.errorMessage:h.error.message,[j,k]=i.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===j)throw L(a,"credential-already-in-use",h);if("EMAIL_EXISTS"===j)throw L(a,"email-already-in-use",h);if("USER_DISABLED"===j)throw L(a,"user-disabled",h);let l=d[j]||j.toLowerCase().replace(/[_\s]+/g,"-");if(k)throw q(a,l,k);o(a,l)}}catch(m){if(m instanceof e.ZR)throw m;o(a,"network-request-failed")}}async function I(a,b,c,d,e={}){let f=await G(a,b,c,d,e);return"mfaPendingCredential"in f&&o(a,"multi-factor-auth-required",{_serverResponse:f}),f}function J(a,b,c,d){let e=`${b}${c}?${d}`;return a.config.emulator?B(a.config,e):`${a.config.apiScheme}://${e}`}class K{constructor(a){this.auth=a,this.timer=null,this.promise=new Promise((a,b)=>{this.timer=setTimeout(()=>b(p(this.auth,"network-request-failed")),E.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function L(a,b,c){let d={appName:a.name};c.email&&(d.email=c.email),c.phoneNumber&&(d.phoneNumber=c.phoneNumber);let e=p(a,b,d);return e.customData._tokenResponse=c,e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function M(a,b){return G(a,"POST","/v1/accounts:delete",b)}async function N(a,b){return G(a,"POST","/v1/accounts:lookup",b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function O(a){if(a)try{let b=new Date(Number(a));if(!isNaN(b.getTime()))return b.toUTCString()}catch(c){}}async function P(a,b=!1){let c=(0,e.m9)(a),d=await c.getIdToken(b),f=R(d);t(f&&f.exp&&f.auth_time&&f.iat,c.auth,"internal-error");let g="object"==typeof f.firebase?f.firebase:void 0,h=null==g?void 0:g.sign_in_provider;return{claims:f,token:d,authTime:O(Q(f.auth_time)),issuedAtTime:O(Q(f.iat)),expirationTime:O(Q(f.exp)),signInProvider:h||null,signInSecondFactor:(null==g?void 0:g.sign_in_second_factor)||null}}function Q(a){return 1e3*Number(a)}function R(a){var b;let[c,d,f]=a.split(".");if(void 0===c|| void 0===d|| void 0===f)return n("JWT malformed, contained fewer than 3 sections"),null;try{let g=(0,e.tV)(d);if(!g)return n("Failed to decode base64 JWT payload"),null;return JSON.parse(g)}catch(h){return n("Caught error parsing JWT payload as JSON",null===(b=h)|| void 0===b?void 0:b.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function S(a,b,c=!1){if(c)return b;try{return await b}catch(d){throw d instanceof e.ZR&&T(d)&&a.auth.currentUser===a&&await a.auth.signOut(),d}}function T({code:a}){return"auth/user-disabled"===a||"auth/user-token-expired"===a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class U{constructor(a,b){this.createdAt=a,this.lastLoginAt=b,this._initializeTime()}_initializeTime(){this.lastSignInTime=O(this.lastLoginAt),this.creationTime=O(this.createdAt)}_copy(a){this.createdAt=a.createdAt,this.lastLoginAt=a.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function V(a){var b;let c=a.auth,d=await a.getIdToken(),e=await S(a,N(c,{idToken:d}));t(null==e?void 0:e.users.length,c,"internal-error");let f=e.users[0];a._notifyReloadListener(f);let g=(null===(b=f.providerUserInfo)|| void 0===b?void 0:b.length)?Y(f.providerUserInfo):[],h=X(a.providerData,g),i=a.isAnonymous,j=!(a.email&&f.passwordHash)&&!(null==h?void 0:h.length),k={uid:f.localId,displayName:f.displayName||null,photoURL:f.photoUrl||null,email:f.email||null,emailVerified:f.emailVerified||!1,phoneNumber:f.phoneNumber||null,tenantId:f.tenantId||null,providerData:h,metadata:new U(f.createdAt,f.lastLoginAt),isAnonymous:!!i&&j};Object.assign(a,k)}async function W(a){let b=(0,e.m9)(a);await V(b),await b.auth._persistUserIfCurrent(b),b.auth._notifyListenersIfCurrent(b)}function X(a,b){let c=a.filter(a=>!b.some(b=>b.providerId===a.providerId));return[...c,...b]}function Y(a){return a.map(a=>{var{providerId:b}=a,c=(0,h._T)(a,["providerId"]);return{providerId:b,uid:c.rawId||"",displayName:c.displayName||null,email:c.email||null,phoneNumber:c.phoneNumber||null,photoURL:c.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Z(a,b){let c=await H(a,{},async()=>{let c=(0,e.xO)({grant_type:"refresh_token",refresh_token:b}).slice(1),{tokenApiHost:d,apiKey:f}=a.config,g=J(a,d,"/v1/token",`key=${f}`),h=await a._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",C.fetch()(g,{method:"POST",headers:h,body:c})});return{accessToken:c.access_token,expiresIn:c.expires_in,refreshToken:c.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * We need to mark this class as internal explicitly to exclude it in the public typings, because
 * it references AuthInternal which has a circular dependency with UserInternal.
 *
 * @internal
 */ class ${constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(a){t(a.idToken,"internal-error"),t(void 0!==a.idToken,"internal-error"),t(void 0!==a.refreshToken,"internal-error");let b="expiresIn"in a&& void 0!==a.expiresIn?Number(a.expiresIn):function(a){let b=R(a);return t(b,"internal-error"),t(void 0!==b.exp,"internal-error"),t(void 0!==b.iat,"internal-error"),Number(b.exp)-Number(b.iat)}(a.idToken);this.updateTokensAndExpiration(a.idToken,a.refreshToken,b)}async getToken(a,b=!1){return(t(!this.accessToken||this.refreshToken,a,"user-token-expired"),b||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(a,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(a,b){let{accessToken:c,refreshToken:d,expiresIn:e}=await Z(a,b);this.updateTokensAndExpiration(c,d,Number(e))}updateTokensAndExpiration(a,b,c){this.refreshToken=b||null,this.accessToken=a||null,this.expirationTime=Date.now()+1e3*c}static fromJSON(a,b){let{refreshToken:c,accessToken:d,expirationTime:e}=b,f=new $;return c&&(t("string"==typeof c,"internal-error",{appName:a}),f.refreshToken=c),d&&(t("string"==typeof d,"internal-error",{appName:a}),f.accessToken=d),e&&(t("number"==typeof e,"internal-error",{appName:a}),f.expirationTime=e),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(a){this.accessToken=a.accessToken,this.refreshToken=a.refreshToken,this.expirationTime=a.expirationTime}_clone(){return Object.assign(new $,this.toJSON())}_performRefresh(){return u("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _(a,b){t("string"==typeof a|| void 0===a,"internal-error",{appName:b})}class aa{constructor(a){var{uid:b,auth:c,stsTokenManager:d}=a,e=(0,h._T)(a,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(a){this.user=a,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){!this.isRunning&&(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(a){var b;if(a){let c=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),c}{this.errorBackoff=3e4;let d=null!==(b=this.user.stsTokenManager.expirationTime)&& void 0!==b?b:0,e=d-Date.now()-3e5;return Math.max(0,e)}}schedule(a=!1){if(!this.isRunning)return;let b=this.getInterval(a);this.timerId=setTimeout(async()=>{await this.iteration()},b)}async iteration(){var a;try{await this.user.getIdToken(!0)}catch(b){(null===(a=b)|| void 0===a?void 0:a.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=b,this.auth=c,this.stsTokenManager=d,this.accessToken=d.accessToken,this.displayName=e.displayName||null,this.email=e.email||null,this.emailVerified=e.emailVerified||!1,this.phoneNumber=e.phoneNumber||null,this.photoURL=e.photoURL||null,this.isAnonymous=e.isAnonymous||!1,this.tenantId=e.tenantId||null,this.providerData=e.providerData?[...e.providerData]:[],this.metadata=new U(e.createdAt||void 0,e.lastLoginAt||void 0)}async getIdToken(a){let b=await S(this,this.stsTokenManager.getToken(this.auth,a));return t(b,this.auth,"internal-error"),this.accessToken!==b&&(this.accessToken=b,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),b}getIdTokenResult(a){return P(this,a)}reload(){return W(this)}_assign(a){this!==a&&(t(this.uid===a.uid,this.auth,"internal-error"),this.displayName=a.displayName,this.photoURL=a.photoURL,this.email=a.email,this.emailVerified=a.emailVerified,this.phoneNumber=a.phoneNumber,this.isAnonymous=a.isAnonymous,this.tenantId=a.tenantId,this.providerData=a.providerData.map(a=>Object.assign({},a)),this.metadata._copy(a.metadata),this.stsTokenManager._assign(a.stsTokenManager))}_clone(a){return new aa(Object.assign(Object.assign({},this),{auth:a,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(a){t(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=a,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(a){this.reloadListener?this.reloadListener(a):this.reloadUserInfo=a}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(a,b=!1){let c=!1;a.idToken&&a.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(a),c=!0),b&&await V(this),await this.auth._persistUserIfCurrent(this),c&&this.auth._notifyListenersIfCurrent(this)}async delete(){let a=await this.getIdToken();return await S(this,M(this.auth,{idToken:a})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(a=>Object.assign({},a)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(a,b){var c,d,e,f,g,h,i,j;let k=null!==(c=b.displayName)&& void 0!==c?c:void 0,l=null!==(d=b.email)&& void 0!==d?d:void 0,m=null!==(e=b.phoneNumber)&& void 0!==e?e:void 0,n=null!==(f=b.photoURL)&& void 0!==f?f:void 0,o=null!==(g=b.tenantId)&& void 0!==g?g:void 0,p=null!==(h=b._redirectEventId)&& void 0!==h?h:void 0,q=null!==(i=b.createdAt)&& void 0!==i?i:void 0,r=null!==(j=b.lastLoginAt)&& void 0!==j?j:void 0,{uid:s,emailVerified:u,isAnonymous:v,providerData:w,stsTokenManager:x}=b;t(s&&x,a,"internal-error");let y=$.fromJSON(this.name,x);t("string"==typeof s,a,"internal-error"),_(k,a.name),_(l,a.name),t("boolean"==typeof u,a,"internal-error"),t("boolean"==typeof v,a,"internal-error"),_(m,a.name),_(n,a.name),_(o,a.name),_(p,a.name),_(q,a.name),_(r,a.name);let z=new aa({uid:s,auth:a,email:l,emailVerified:u,displayName:k,isAnonymous:v,photoURL:n,phoneNumber:m,tenantId:o,stsTokenManager:y,createdAt:q,lastLoginAt:r});return w&&Array.isArray(w)&&(z.providerData=w.map(a=>Object.assign({},a))),p&&(z._redirectEventId=p),z}static async _fromIdTokenResponse(a,b,c=!1){let d=new $;d.updateFromServerResponse(b);let e=new aa({uid:b.localId,auth:a,stsTokenManager:d,isAnonymous:c});return await V(e),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ab{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(a,b){this.storage[a]=b}async _get(a){let b=this.storage[a];return void 0===b?null:b}async _remove(a){delete this.storage[a]}_addListener(a,b){}_removeListener(a,b){}}ab.type="NONE";let ac=ab;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ad(a,b,c){return`firebase:${a}:${b}:${c}`}class ae{constructor(a,b,c){this.persistence=a,this.auth=b,this.userKey=c;let{config:d,name:e}=this.auth;this.fullUserKey=ad(this.userKey,d.apiKey,e),this.fullPersistenceKey=ad("persistence",d.apiKey,e),this.boundEventHandler=b._onStorageEvent.bind(b),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(a){return this.persistence._set(this.fullUserKey,a.toJSON())}async getCurrentUser(){let a=await this.persistence._get(this.fullUserKey);return a?aa._fromJSON(this.auth,a):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(a){if(this.persistence===a)return;let b=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=a,b)return this.setCurrentUser(b)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(a,b,c="authUser"){if(!b.length)return new ae(x(ac),a,c);let d=(await Promise.all(b.map(async a=>{if(await a._isAvailable())return a}))).filter(a=>a),e=d[0]||x(ac),f=ad(c,a.config.apiKey,a.name),g=null;for(let h of b)try{let i=await h._get(f);if(i){let j=aa._fromJSON(a,i);h!==e&&(g=j),e=h;break}}catch(k){}let l=d.filter(a=>a._shouldAllowMigration);return e._shouldAllowMigration&&l.length&&(e=l[0],g&&await e._set(f,g.toJSON()),await Promise.all(b.map(async a=>{if(a!==e)try{await a._remove(f)}catch(b){}}))),new ae(e,a,c)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Determine the browser for the purposes of reporting usage to the API
 */ function af(a){let b=a.toLowerCase();if(b.includes("opera/")||b.includes("opr/")||b.includes("opios/"))return"Opera";if(aj(b))return"IEMobile";if(b.includes("msie")||b.includes("trident/"))return"IE";{if(b.includes("edge/"))return"Edge";if(ag(b))return"Firefox";if(b.includes("silk/"))return"Silk";if(al(b))return"Blackberry";if(am(b))return"Webos";if(ah(b))return"Safari";if((b.includes("chrome/")||ai(b))&&!b.includes("edge/"))return"Chrome";if(ak(b))return"Android";let c=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,d=a.match(c);if((null==d?void 0:d.length)===2)return d[1]}return"Other"}function ag(a=(0,e.z$)()){return/firefox\//i.test(a)}function ah(a=(0,e.z$)()){let b=a.toLowerCase();return b.includes("safari/")&&!b.includes("chrome/")&&!b.includes("crios/")&&!b.includes("android")}function ai(a=(0,e.z$)()){return/crios\//i.test(a)}function aj(a=(0,e.z$)()){return/iemobile/i.test(a)}function ak(a=(0,e.z$)()){return/android/i.test(a)}function al(a=(0,e.z$)()){return/blackberry/i.test(a)}function am(a=(0,e.z$)()){return/webos/i.test(a)}function an(a=(0,e.z$)()){return/iphone|ipad|ipod/i.test(a)||/macintosh/i.test(a)&&/mobile/i.test(a)}function ao(a=(0,e.z$)()){return an(a)||ak(a)||am(a)||al(a)||/windows phone/i.test(a)||aj(a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /*
 * Determine the SDK version string
 */ function ap(a,b=[]){let c;switch(a){case"Browser":c=af((0,e.z$)());break;case"Worker":c=`${af((0,e.z$)())}-${a}`;break;default:c=a}let d=b.length?b.join(","):"FirebaseCore-web";return`${c}/JsCore/${f.Jn}/${d}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aq{constructor(a,b,c){this.app=a,this.heartbeatServiceProvider=b,this.config=c,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new as(this),this.idTokenSubscription=new as(this),this.beforeStateQueue=new /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(a){this.auth=a,this.queue=[]}pushCallback(a,b){let c=b=>new Promise((c,d)=>{try{let e=a(b);c(e)}catch(f){d(f)}});c.onAbort=b,this.queue.push(c);let d=this.queue.length-1;return()=>{this.queue[d]=()=>Promise.resolve()}}async runMiddleware(a){var b;if(this.auth.currentUser===a)return;let c=[];try{for(let d of this.queue)await d(a),d.onAbort&&c.push(d.onAbort)}catch(e){for(let f of(c.reverse(),c))try{f()}catch(g){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(b=e)|| void 0===b?void 0:b.message})}}}(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=a.name,this.clientVersion=c.sdkClientVersion}_initializeWithPersistence(a,b){return b&&(this._popupRedirectResolver=x(b)),this._initializationPromise=this.queue(async()=>{var c,d;if(!this._deleted&&(this.persistenceManager=await ae.create(this,a),!this._deleted)){if(null===(c=this._popupRedirectResolver)|| void 0===c?void 0:c._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(b),this.lastNotifiedUid=(null===(d=this.currentUser)|| void 0===d?void 0:d.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let a=await this.assertedPersistence.getCurrentUser();if(this.currentUser||a){if(this.currentUser&&a&&this.currentUser.uid===a.uid){this._currentUser._assign(a),await this.currentUser.getIdToken();return}await this._updateCurrentUser(a,!0)}}async initializeCurrentUser(a){var b;let c=await this.assertedPersistence.getCurrentUser(),d=c,e=!1;if(a&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let f=null===(b=this.redirectUser)|| void 0===b?void 0:b._redirectEventId,g=null==d?void 0:d._redirectEventId,h=await this.tryRedirectSignIn(a);(!f||f===g)&&(null==h?void 0:h.user)&&(d=h.user,e=!0)}if(!d)return this.directlySetCurrentUser(null);if(!d._redirectEventId){if(e)try{await this.beforeStateQueue.runMiddleware(d)}catch(i){d=c,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return d?this.reloadAndSetCurrentUserOrClear(d):this.directlySetCurrentUser(null)}return(t(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===d._redirectEventId)?this.directlySetCurrentUser(d):this.reloadAndSetCurrentUserOrClear(d)}async tryRedirectSignIn(a){let b=null;try{b=await this._popupRedirectResolver._completeRedirectFn(this,a,!0)}catch(c){await this._setRedirectUser(null)}return b}async reloadAndSetCurrentUserOrClear(a){var b;try{await V(a)}catch(c){if((null===(b=c)|| void 0===b?void 0:b.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(a)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let a=navigator;return a.languages&&a.languages[0]||a.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(a){let b=a?(0,e.m9)(a):null;return b&&t(b.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(b&&b._clone(this))}async _updateCurrentUser(a,b=!1){if(!this._deleted)return a&&t(this.tenantId===a.tenantId,this,"tenant-id-mismatch"),b||await this.beforeStateQueue.runMiddleware(a),this.queue(async()=>{await this.directlySetCurrentUser(a),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(a){return this.queue(async()=>{await this.assertedPersistence.setPersistence(x(a))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(a){this._errorFactory=new e.LL("auth","Firebase",a())}onAuthStateChanged(a,b,c){return this.registerStateListener(this.authStateSubscription,a,b,c)}beforeAuthStateChanged(a,b){return this.beforeStateQueue.pushCallback(a,b)}onIdTokenChanged(a,b,c){return this.registerStateListener(this.idTokenSubscription,a,b,c)}toJSON(){var a;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(a=this._currentUser)|| void 0===a?void 0:a.toJSON()}}async _setRedirectUser(a,b){let c=await this.getOrInitRedirectPersistenceManager(b);return null===a?c.removeCurrentUser():c.setCurrentUser(a)}async getOrInitRedirectPersistenceManager(a){if(!this.redirectPersistenceManager){let b=a&&x(a)||this._popupRedirectResolver;t(b,this,"argument-error"),this.redirectPersistenceManager=await ae.create(this,[x(b._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(a){var b,c;return(this._isInitialized&&await this.queue(async()=>{}),(null===(b=this._currentUser)|| void 0===b?void 0:b._redirectEventId)===a)?this._currentUser:(null===(c=this.redirectUser)|| void 0===c?void 0:c._redirectEventId)===a?this.redirectUser:null}async _persistUserIfCurrent(a){if(a===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(a))}_notifyListenersIfCurrent(a){a===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var a,b;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let c=null!==(b=null===(a=this.currentUser)|| void 0===a?void 0:a.uid)&& void 0!==b?b:null;this.lastNotifiedUid!==c&&(this.lastNotifiedUid=c,this.authStateSubscription.next(this.currentUser))}registerStateListener(a,b,c,d){if(this._deleted)return()=>{};let e="function"==typeof b?b:b.next.bind(b),f=this._isInitialized?Promise.resolve():this._initializationPromise;return(t(f,this,"internal-error"),f.then(()=>e(this.currentUser)),"function"==typeof b)?a.addObserver(b,c,d):a.addObserver(b)}async directlySetCurrentUser(a){this.currentUser&&this.currentUser!==a&&this._currentUser._stopProactiveRefresh(),a&&this.isProactiveRefreshEnabled&&a._startProactiveRefresh(),this.currentUser=a,a?await this.assertedPersistence.setCurrentUser(a):await this.assertedPersistence.removeCurrentUser()}queue(a){return this.operations=this.operations.then(a,a),this.operations}get assertedPersistence(){return t(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(a){!(!a||this.frameworks.includes(a))&&(this.frameworks.push(a),this.frameworks.sort(),this.clientVersion=ap(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var a;let b={"X-Client-Version":this.clientVersion};this.app.options.appId&&(b["X-Firebase-gmpid"]=this.app.options.appId);let c=await (null===(a=this.heartbeatServiceProvider.getImmediate({optional:!0}))|| void 0===a?void 0:a.getHeartbeatsHeader());return c&&(b["X-Firebase-Client"]=c),b}}function ar(a){return(0,e.m9)(a)}class as{constructor(a){this.auth=a,this.observer=null,this.addObserver=(0,e.ne)(a=>this.observer=a)}get next(){return t(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function at(a){let b=a.indexOf(":");return b<0?"":a.substr(0,b+1)}function au(a){if(!a)return null;let b=Number(a);return isNaN(b)?null:b}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Interface that represents the credentials returned by an {@link AuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */ class av{constructor(a,b){this.providerId=a,this.signInMethod=b}toJSON(){return u("not implemented")}_getIdTokenResponse(a){return u("not implemented")}_linkToIdToken(a,b){return u("not implemented")}_getReauthenticationResolver(a){return u("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function aw(a,b){return G(a,"POST","/v1/accounts:resetPassword",F(a,b))}async function ax(a,b){return G(a,"POST","/v1/accounts:update",b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ay(a,b){return I(a,"POST","/v1/accounts:signInWithPassword",F(a,b))}async function az(a,b){return G(a,"POST","/v1/accounts:sendOobCode",F(a,b))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function aA(a,b){return I(a,"POST","/v1/accounts:signInWithEmailLink",F(a,b))}async function aB(a,b){return I(a,"POST","/v1/accounts:signInWithEmailLink",F(a,b))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Interface that represents the credentials returned by {@link EmailAuthProvider} for
 * {@link ProviderId}.PASSWORD
 *
 * @remarks
 * Covers both {@link SignInMethod}.EMAIL_PASSWORD and
 * {@link SignInMethod}.EMAIL_LINK.
 *
 * @public
 */ class aC extends av{constructor(a,b,c,d=null){super("password",c),this._email=a,this._password=b,this._tenantId=d}static _fromEmailAndPassword(a,b){return new aC(a,b,"password")}static _fromEmailAndCode(a,b,c=null){return new aC(a,b,"emailLink",c)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(a){let b="string"==typeof a?JSON.parse(a):a;if((null==b?void 0:b.email)&&(null==b?void 0:b.password)){if("password"===b.signInMethod)return this._fromEmailAndPassword(b.email,b.password);if("emailLink"===b.signInMethod)return this._fromEmailAndCode(b.email,b.password,b.tenantId)}return null}async _getIdTokenResponse(a){switch(this.signInMethod){case"password":return ay(a,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return aA(a,{email:this._email,oobCode:this._password});default:o(a,"internal-error")}}async _linkToIdToken(a,b){switch(this.signInMethod){case"password":return ax(a,{idToken:b,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return aB(a,{idToken:b,email:this._email,oobCode:this._password});default:o(a,"internal-error")}}_getReauthenticationResolver(a){return this._getIdTokenResponse(a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function aD(a,b){return I(a,"POST","/v1/accounts:signInWithIdp",F(a,b))}class aE extends av{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(a){let b=new aE(a.providerId,a.signInMethod);return a.idToken||a.accessToken?(a.idToken&&(b.idToken=a.idToken),a.accessToken&&(b.accessToken=a.accessToken),a.nonce&&!a.pendingToken&&(b.nonce=a.nonce),a.pendingToken&&(b.pendingToken=a.pendingToken)):a.oauthToken&&a.oauthTokenSecret?(b.accessToken=a.oauthToken,b.secret=a.oauthTokenSecret):o("argument-error"),b}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(a){let b="string"==typeof a?JSON.parse(a):a,{providerId:c,signInMethod:d}=b,e=(0,h._T)(b,["providerId","signInMethod"]);if(!c||!d)return null;let f=new aE(c,d);return f.idToken=e.idToken||void 0,f.accessToken=e.accessToken||void 0,f.secret=e.secret,f.nonce=e.nonce,f.pendingToken=e.pendingToken||null,f}_getIdTokenResponse(a){let b=this.buildRequest();return aD(a,b)}_linkToIdToken(a,b){let c=this.buildRequest();return c.idToken=b,aD(a,c)}_getReauthenticationResolver(a){let b=this.buildRequest();return b.autoCreate=!1,aD(a,b)}buildRequest(){let a={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)a.pendingToken=this.pendingToken;else{let b={};this.idToken&&(b.id_token=this.idToken),this.accessToken&&(b.access_token=this.accessToken),this.secret&&(b.oauth_token_secret=this.secret),b.providerId=this.providerId,this.nonce&&!this.pendingToken&&(b.nonce=this.nonce),a.postBody=(0,e.xO)(b)}return a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function aF(a,b){return G(a,"POST","/v1/accounts:sendVerificationCode",F(a,b))}async function aG(a,b){return I(a,"POST","/v1/accounts:signInWithPhoneNumber",F(a,b))}async function aH(a,b){let c=await I(a,"POST","/v1/accounts:signInWithPhoneNumber",F(a,b));if(c.temporaryProof)throw L(a,"account-exists-with-different-credential",c);return c}let aI={USER_NOT_FOUND:"user-not-found"};async function aJ(a,b){let c=Object.assign(Object.assign({},b),{operation:"REAUTH"});return I(a,"POST","/v1/accounts:signInWithPhoneNumber",F(a,c),aI)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents the credentials returned by {@link PhoneAuthProvider}.
 *
 * @public
 */ class aK extends av{constructor(a){super("phone","phone"),this.params=a}static _fromVerification(a,b){return new aK({verificationId:a,verificationCode:b})}static _fromTokenResponse(a,b){return new aK({phoneNumber:a,temporaryProof:b})}_getIdTokenResponse(a){return aG(a,this._makeVerificationRequest())}_linkToIdToken(a,b){return aH(a,Object.assign({idToken:b},this._makeVerificationRequest()))}_getReauthenticationResolver(a){return aJ(a,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:a,phoneNumber:b,verificationId:c,verificationCode:d}=this.params;return a&&b?{temporaryProof:a,phoneNumber:b}:{sessionInfo:c,code:d}}toJSON(){let a={providerId:this.providerId};return this.params.phoneNumber&&(a.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(a.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(a.verificationCode=this.params.verificationCode),this.params.verificationId&&(a.verificationId=this.params.verificationId),a}static fromJSON(a){"string"==typeof a&&(a=JSON.parse(a));let{verificationId:b,verificationCode:c,phoneNumber:d,temporaryProof:e}=a;return c||b||d||e?new aK({verificationId:b,verificationCode:c,phoneNumber:d,temporaryProof:e}):null}}class aL{constructor(a){var b,c,d,f,g,h;let i=(0,e.zd)((0,e.pd)(a)),j=null!==(b=i.apiKey)&& void 0!==b?b:null,k=null!==(c=i.oobCode)&& void 0!==c?c:null,l=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Maps the mode string in action code URL to Action Code Info operation.
 *
 * @param mode
 */ function(a){switch(a){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(d=i.mode)&& void 0!==d?d:null);t(j&&k&&l,"argument-error"),this.apiKey=j,this.operation=l,this.code=k,this.continueUrl=null!==(f=i.continueUrl)&& void 0!==f?f:null,this.languageCode=null!==(g=i.languageCode)&& void 0!==g?g:null,this.tenantId=null!==(h=i.tenantId)&& void 0!==h?h:null}static parseLink(a){let b=function(a){let b=(0,e.zd)((0,e.pd)(a)).link,c=b?(0,e.zd)((0,e.pd)(b)).deep_link_id:null,d=(0,e.zd)((0,e.pd)(a)).deep_link_id,f=d?(0,e.zd)((0,e.pd)(d)).link:null;return f||d||c||b||a}(a);try{return new aL(b)}catch(c){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating {@link EmailAuthCredential}.
 *
 * @public
 */ class aM{constructor(){this.providerId=aM.PROVIDER_ID}static credential(a,b){return aC._fromEmailAndPassword(a,b)}static credentialWithLink(a,b){let c=aL.parseLink(b);return t(c,"argument-error"),aC._fromEmailAndCode(a,c.code,c.tenantId)}}aM.PROVIDER_ID="password",aM.EMAIL_PASSWORD_SIGN_IN_METHOD="password",aM.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The base class for all Federated providers (OAuth (including OIDC), SAML).
 *
 * This class is not meant to be instantiated directly.
 *
 * @public
 */ class aN{constructor(a){this.providerId=a,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(a){this.defaultLanguageCode=a}setCustomParameters(a){return this.customParameters=a,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Common code to all OAuth providers. This is separate from the
 * {@link OAuthProvider} so that child providers (like
 * {@link GoogleAuthProvider}) don't inherit the `credential` instance method.
 * Instead, they rely on a static `credential` method.
 */ class aO extends aN{constructor(){super(...arguments),this.scopes=[]}addScope(a){return this.scopes.includes(a)||this.scopes.push(a),this}getScopes(){return[...this.scopes]}}class aP extends null{static credentialFromJSON(a){let b="string"==typeof a?JSON.parse(a):a;return t("providerId"in b&&"signInMethod"in b,"argument-error"),aE._fromParams(b)}credential(a){return this._credential(Object.assign(Object.assign({},a),{nonce:a.rawNonce}))}_credential(a){return t(a.idToken||a.accessToken,"argument-error"),aE._fromParams(Object.assign(Object.assign({},a),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(a){return aP.oauthCredentialFromTaggedObject(a)}static credentialFromError(a){return aP.oauthCredentialFromTaggedObject(a.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;let{oauthIdToken:b,oauthAccessToken:c,oauthTokenSecret:d,pendingToken:e,nonce:f,providerId:g}=a;if(!c&&!d&&!b&&!e||!g)return null;try{return new aP(g)._credential({idToken:b,accessToken:c,nonce:f,pendingToken:e})}catch(h){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.FACEBOOK.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new FacebookAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('user_birthday');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Facebook Access Token.
 *   const credential = FacebookAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new FacebookAuthProvider();
 * provider.addScope('user_birthday');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Facebook Access Token.
 * const credential = FacebookAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */ class aQ extends aO{constructor(){super("facebook.com")}static credential(a){return aE._fromParams({providerId:aQ.PROVIDER_ID,signInMethod:aQ.FACEBOOK_SIGN_IN_METHOD,accessToken:a})}static credentialFromResult(a){return aQ.credentialFromTaggedObject(a)}static credentialFromError(a){return aQ.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a||!("oauthAccessToken"in a)||!a.oauthAccessToken)return null;try{return aQ.credential(a.oauthAccessToken)}catch(b){return null}}}aQ.FACEBOOK_SIGN_IN_METHOD="facebook.com",aQ.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an an {@link OAuthCredential} for {@link ProviderId}.GOOGLE.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GoogleAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('profile');
 * provider.addScope('email');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Google Access Token.
 *   const credential = GoogleAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GoogleAuthProvider();
 * provider.addScope('profile');
 * provider.addScope('email');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Google Access Token.
 * const credential = GoogleAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */ class aR extends aO{constructor(){super("google.com"),this.addScope("profile")}static credential(a,b){return aE._fromParams({providerId:aR.PROVIDER_ID,signInMethod:aR.GOOGLE_SIGN_IN_METHOD,idToken:a,accessToken:b})}static credentialFromResult(a){return aR.credentialFromTaggedObject(a)}static credentialFromError(a){return aR.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;let{oauthIdToken:b,oauthAccessToken:c}=a;if(!b&&!c)return null;try{return aR.credential(b,c)}catch(d){return null}}}aR.GOOGLE_SIGN_IN_METHOD="google.com",aR.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.GITHUB.
 *
 * @remarks
 * GitHub requires an OAuth 2.0 redirect, so you can either handle the redirect directly, or use
 * the {@link signInWithPopup} handler:
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GithubAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('repo');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Github Access Token.
 *   const credential = GithubAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GithubAuthProvider();
 * provider.addScope('repo');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Github Access Token.
 * const credential = GithubAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 * @public
 */ class aS extends aO{constructor(){super("github.com")}static credential(a){return aE._fromParams({providerId:aS.PROVIDER_ID,signInMethod:aS.GITHUB_SIGN_IN_METHOD,accessToken:a})}static credentialFromResult(a){return aS.credentialFromTaggedObject(a)}static credentialFromError(a){return aS.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a||!("oauthAccessToken"in a)||!a.oauthAccessToken)return null;try{return aS.credential(a.oauthAccessToken)}catch(b){return null}}}aS.GITHUB_SIGN_IN_METHOD="github.com",aS.PROVIDER_ID="github.com";class aT extends null{constructor(a,b){super(a,a),this.pendingToken=b}_getIdTokenResponse(a){let b=this.buildRequest();return aD(a,b)}_linkToIdToken(a,b){let c=this.buildRequest();return c.idToken=b,aD(a,c)}_getReauthenticationResolver(a){let b=this.buildRequest();return b.autoCreate=!1,aD(a,b)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(a){let b="string"==typeof a?JSON.parse(a):a,{providerId:c,signInMethod:d,pendingToken:e}=b;return c&&d&&e&&c===d?new aT(c,e):null}static _create(a,b){return new aT(a,b)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}}class aU extends null{constructor(a){t(a.startsWith("saml."),"argument-error"),super(a)}static credentialFromResult(a){return aU.samlCredentialFromTaggedObject(a)}static credentialFromError(a){return aU.samlCredentialFromTaggedObject(a.customData||{})}static credentialFromJSON(a){let b=aT.fromJSON(a);return t(b,"argument-error"),b}static samlCredentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;let{pendingToken:b,providerId:c}=a;if(!b||!c)return null;try{return aT._create(c,b)}catch(d){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.TWITTER.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new TwitterAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Twitter Access Token and Secret.
 *   const credential = TwitterAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 *   const secret = credential.secret;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new TwitterAuthProvider();
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Twitter Access Token and Secret.
 * const credential = TwitterAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * const secret = credential.secret;
 * ```
 *
 * @public
 */ class aV extends aO{constructor(){super("twitter.com")}static credential(a,b){return aE._fromParams({providerId:aV.PROVIDER_ID,signInMethod:aV.TWITTER_SIGN_IN_METHOD,oauthToken:a,oauthTokenSecret:b})}static credentialFromResult(a){return aV.credentialFromTaggedObject(a)}static credentialFromError(a){return aV.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;let{oauthAccessToken:b,oauthTokenSecret:c}=a;if(!b||!c)return null;try{return aV.credential(b,c)}catch(d){return null}}}aV.TWITTER_SIGN_IN_METHOD="twitter.com",aV.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aW{constructor(a){this.user=a.user,this.providerId=a.providerId,this._tokenResponse=a._tokenResponse,this.operationType=a.operationType}static async _fromIdTokenResponse(a,b,c,d=!1){let e=await aa._fromIdTokenResponse(a,c,d),f=aX(c),g=new aW({user:e,providerId:f,_tokenResponse:c,operationType:b});return g}static async _forOperation(a,b,c){await a._updateTokensIfNecessary(c,!0);let d=aX(c);return new aW({user:a,providerId:d,_tokenResponse:c,operationType:b})}}function aX(a){return a.providerId?a.providerId:"phoneNumber"in a?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aY extends e.ZR{constructor(a,b,c,d){var e;super(b.code,b.message),this.operationType=c,this.user=d,Object.setPrototypeOf(this,aY.prototype),this.customData={appName:a.name,tenantId:null!==(e=a.tenantId)&& void 0!==e?e:void 0,_serverResponse:b.customData._serverResponse,operationType:c}}static _fromErrorAndOperation(a,b,c,d){return new aY(a,b,c,d)}}function aZ(a,b,c,d){let e="reauthenticate"===b?c._getReauthenticationResolver(a):c._getIdTokenResponse(a);return e.catch(c=>{if("auth/multi-factor-auth-required"===c.code)throw aY._fromErrorAndOperation(a,c,b,d);throw c})}async function a$(a,b,c=!1){let d=await S(a,b._linkToIdToken(a.auth,await a.getIdToken()),c);return aW._forOperation(a,"link",d)}async function a_(a,b,c){var d;await V(b);let e=(d=b.providerData,new Set(d.map(({providerId:a})=>a).filter(a=>!!a)));t(e.has(c)===a,b.auth,!1===a?"provider-already-linked":"no-such-provider")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function a0(a,b,c=!1){var d;let{auth:e}=a,f="reauthenticate";try{let g=await S(a,aZ(e,f,b,a),c);t(g.idToken,e,"internal-error");let h=R(g.idToken);t(h,e,"internal-error");let{sub:i}=h;return t(a.uid===i,e,"user-mismatch"),aW._forOperation(a,f,g)}catch(j){throw(null===(d=j)|| void 0===d?void 0:d.code)==="auth/user-not-found"&&o(e,"user-mismatch"),j}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function a1(a,b,c=!1){let d="signIn",e=await aZ(a,d,b),f=await aW._fromIdTokenResponse(a,d,e);return c||await a._updateCurrentUser(f.user),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class a2{constructor(a,b){this.factorId=a,this.uid=b.mfaEnrollmentId,this.enrollmentTime=new Date(b.enrolledAt).toUTCString(),this.displayName=b.displayName}static _fromServerResponse(a,b){return"phoneInfo"in b?a3._fromServerResponse(a,b):o(a,"internal-error")}}class a3 extends null{constructor(a){super("phone",a),this.phoneNumber=a.phoneInfo}static _fromServerResponse(a,b){return new a3(b)}}function a4(a,b,c,d){return(0,e.m9)(a).onAuthStateChanged(b,c,d)}function a5(a){return(0,e.m9)(a).signOut()}class a6{constructor(a,b,c){this.type=a,this.credential=b,this.auth=c}static _fromIdtoken(a,b){return new a6("enroll",a,b)}static _fromMfaPendingCredential(a){return new a6("signin",a)}toJSON(){let a="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[a]:this.credential}}}static fromJSON(a){var b,c;if(null==a?void 0:a.multiFactorSession){if(null===(b=a.multiFactorSession)|| void 0===b?void 0:b.pendingCredential)return a6._fromMfaPendingCredential(a.multiFactorSession.pendingCredential);if(null===(c=a.multiFactorSession)|| void 0===c?void 0:c.idToken)return a6._fromIdtoken(a.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class a7{constructor(a,b,c){this.session=a,this.hints=b,this.signInResolver=c}static _fromError(a,b){let c=ar(a),d=b.customData._serverResponse,e=(d.mfaInfo||[]).map(a=>a2._fromServerResponse(c,a));t(d.mfaPendingCredential,c,"internal-error");let f=a6._fromMfaPendingCredential(d.mfaPendingCredential);return new a7(f,e,async a=>{let e=await a._process(c,f);delete d.mfaInfo,delete d.mfaPendingCredential;let g=Object.assign(Object.assign({},d),{idToken:e.idToken,refreshToken:e.refreshToken});switch(b.operationType){case"signIn":let h=await aW._fromIdTokenResponse(c,b.operationType,g);return await c._updateCurrentUser(h.user),h;case"reauthenticate":return t(b.user,c,"internal-error"),aW._forOperation(b.user,b.operationType,g);default:o(c,"internal-error")}})}async resolveSignIn(a){return this.signInResolver(a)}}class a8{constructor(a){this.user=a,this.enrolledFactors=[],a._onReload(b=>{b.mfaInfo&&(this.enrolledFactors=b.mfaInfo.map(b=>a2._fromServerResponse(a.auth,b)))})}static _fromUser(a){return new a8(a)}async getSession(){return a6._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(a,b){let c=await this.getSession(),d=await S(this.user,a._process(this.user.auth,c,b));return await this.user._updateTokensIfNecessary(d),this.user.reload()}async unenroll(a){var b,c,d;let e="string"==typeof a?a:a.uid,f=await this.user.getIdToken(),g=await S(this.user,(c=this.user.auth,G(c,"POST","/v2/accounts/mfaEnrollment:withdraw",F(c,d={idToken:f,mfaEnrollmentId:e}))));this.enrolledFactors=this.enrolledFactors.filter(({uid:a})=>a!==e),await this.user._updateTokensIfNecessary(g);try{await this.user.reload()}catch(h){if((null===(b=h)|| void 0===b?void 0:b.code)!=="auth/user-token-expired")throw h}}}new WeakMap;let a9="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // There are two different browser persistence types: local and session.
// Both have the same implementation but use a different underlying storage
// object.
class ba{constructor(a,b){this.storageRetriever=a,this.type=b}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(a9,"1"),this.storage.removeItem(a9),Promise.resolve(!0)}catch(a){return Promise.resolve(!1)}}_set(a,b){return this.storage.setItem(a,JSON.stringify(b)),Promise.resolve()}_get(a){let b=this.storage.getItem(a);return Promise.resolve(b?JSON.parse(b):null)}_remove(a){return this.storage.removeItem(a),Promise.resolve()}get storage(){return this.storageRetriever()}}class bb extends ba{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(a,b)=>this.onStorageEvent(a,b),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(){let a=(0,e.z$)();return ah(a)||an(a)}()&&function(){try{return!!(window&&window!==window.top)}catch(a){return!1}}(),this.fallbackToPolling=ao(),this._shouldAllowMigration=!0}forAllChangedKeys(a){for(let b of Object.keys(this.listeners)){let c=this.storage.getItem(b),d=this.localCache[b];c!==d&&a(b,d,c)}}onStorageEvent(a,b=!1){if(!a.key){this.forAllChangedKeys((a,b,c)=>{this.notifyListeners(a,c)});return}let c=a.key;if(b?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let d=this.storage.getItem(c);if(a.newValue!==d)null!==a.newValue?this.storage.setItem(c,a.newValue):this.storage.removeItem(c);else if(this.localCache[c]===a.newValue&&!b)return}let f=()=>{let a=this.storage.getItem(c);(b||this.localCache[c]!==a)&&this.notifyListeners(c,a)},g=this.storage.getItem(c);(0,e.w1)()&&10===document.documentMode&&g!==a.newValue&&a.newValue!==a.oldValue?setTimeout(f,10):f()}notifyListeners(a,b){this.localCache[a]=b;let c=this.listeners[a];if(c)for(let d of Array.from(c))d(b?JSON.parse(b):b)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((a,b,c)=>{this.onStorageEvent(new StorageEvent("storage",{key:a,oldValue:b,newValue:c}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(a,b){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[a]||(this.listeners[a]=new Set,this.localCache[a]=this.storage.getItem(a)),this.listeners[a].add(b)}_removeListener(a,b){this.listeners[a]&&(this.listeners[a].delete(b),0===this.listeners[a].size&&delete this.listeners[a]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(a,b){await super._set(a,b),this.localCache[a]=JSON.stringify(b)}async _get(a){let b=await super._get(a);return this.localCache[a]=JSON.stringify(b),b}async _remove(a){await super._remove(a),delete this.localCache[a]}}bb.type="LOCAL";let bc=bb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bd extends ba{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(a,b){}_removeListener(a,b){}}bd.type="SESSION";let be=bd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Interface class for receiving messages.
 *
 */ class bf{constructor(a){this.eventTarget=a,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(a){let b=this.receivers.find(b=>b.isListeningto(a));if(b)return b;let c=new bf(a);return this.receivers.push(c),c}isListeningto(a){return this.eventTarget===a}async handleEvent(a){var b;let c=a,{eventId:d,eventType:e,data:f}=c.data,g=this.handlersMap[e];if(!(null==g?void 0:g.size))return;c.ports[0].postMessage({status:"ack",eventId:d,eventType:e});let h=Array.from(g).map(async a=>a(c.origin,f)),i=await Promise.all((b=h).map(async a=>{try{let b=await a;return{fulfilled:!0,value:b}}catch(c){return{fulfilled:!1,reason:c}}}));c.ports[0].postMessage({status:"done",eventId:d,eventType:e,response:i})}_subscribe(a,b){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[a]||(this.handlersMap[a]=new Set),this.handlersMap[a].add(b)}_unsubscribe(a,b){this.handlersMap[a]&&b&&this.handlersMap[a].delete(b),b&&0!==this.handlersMap[a].size||delete this.handlersMap[a],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function bg(a="",b=10){let c="";for(let d=0;d<b;d++)c+=Math.floor(10*Math.random());return a+c}bf.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Interface for sending messages and waiting for a completion response.
 *
 */ class bh{constructor(a){this.target=a,this.handlers=new Set}removeMessageHandler(a){a.messageChannel&&(a.messageChannel.port1.removeEventListener("message",a.onMessage),a.messageChannel.port1.close()),this.handlers.delete(a)}async _send(a,b,c=50){let d="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!d)throw Error("connection_unavailable");let e,f;return new Promise((g,h)=>{let i=bg("",20);d.port1.start();let j=setTimeout(()=>{h(Error("unsupported_event"))},c);f={messageChannel:d,onMessage(a){let b=a;if(b.data.eventId===i)switch(b.data.status){case"ack":clearTimeout(j),e=setTimeout(()=>{h(Error("timeout"))},3e3);break;case"done":clearTimeout(e),g(b.data.response);break;default:clearTimeout(j),clearTimeout(e),h(Error("invalid_response"))}}},this.handlers.add(f),d.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:a,eventId:i,data:b},[d.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Lazy accessor for window, since the compat layer won't tree shake this out,
 * we need to make sure not to mess with window unless we have to
 */ function bi(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function bj(){return void 0!==bi().WorkerGlobalScope&&"function"==typeof bi().importScripts}async function bk(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let a=await navigator.serviceWorker.ready;return a.active}catch(b){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let bl="firebaseLocalStorageDb",bm="firebaseLocalStorage",bn="fbase_key";class bo{constructor(a){this.request=a}toPromise(){return new Promise((a,b)=>{this.request.addEventListener("success",()=>{a(this.request.result)}),this.request.addEventListener("error",()=>{b(this.request.error)})})}}function bp(a,b){return a.transaction([bm],b?"readwrite":"readonly").objectStore(bm)}function bq(){let a=indexedDB.open(bl,1);return new Promise((b,c)=>{a.addEventListener("error",()=>{c(a.error)}),a.addEventListener("upgradeneeded",()=>{let b=a.result;try{b.createObjectStore(bm,{keyPath:bn})}catch(d){c(d)}}),a.addEventListener("success",async()=>{let c=a.result;c.objectStoreNames.contains(bm)?b(c):(c.close(),await function(){let a=indexedDB.deleteDatabase(bl);return new bo(a).toPromise()}(),b(await bq()))})})}async function br(a,b,c){let d=bp(a,!0).put({[bn]:b,value:c});return new bo(d).toPromise()}async function bs(a,b){let c=bp(a,!1).get(b),d=await new bo(c).toPromise();return void 0===d?null:d.value}function bt(a,b){let c=bp(a,!0).delete(b);return new bo(c).toPromise()}class bu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await bq()),this.db}async _withRetries(a){let b=0;for(;;)try{let c=await this._openDb();return await a(c)}catch(d){if(b++ >3)throw d;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bj()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bf._getInstance(bj()?self:null),this.receiver._subscribe("keyChanged",async(a,b)=>{let c=await this._poll();return{keyProcessed:c.includes(b.key)}}),this.receiver._subscribe("ping",async(a,b)=>["keyChanged"])}async initializeSender(){var a,b;if(this.activeServiceWorker=await bk(),!this.activeServiceWorker)return;this.sender=new bh(this.activeServiceWorker);let c=await this.sender._send("ping",{},800);c&&(null===(a=c[0])|| void 0===a?void 0:a.fulfilled)&&(null===(b=c[0])|| void 0===b?void 0:b.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(a){var b;if(this.sender&&this.activeServiceWorker&&((null===(b=null==navigator?void 0:navigator.serviceWorker)|| void 0===b?void 0:b.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:a},this.serviceWorkerReceiverAvailable?800:50)}catch(c){}}async _isAvailable(){try{if(!indexedDB)return!1;let a=await bq();return await br(a,a9,"1"),await bt(a,a9),!0}catch(b){}return!1}async _withPendingWrite(a){this.pendingWrites++;try{await a()}finally{this.pendingWrites--}}async _set(a,b){return this._withPendingWrite(async()=>(await this._withRetries(c=>br(c,a,b)),this.localCache[a]=b,this.notifyServiceWorker(a)))}async _get(a){let b=await this._withRetries(b=>bs(b,a));return this.localCache[a]=b,b}async _remove(a){return this._withPendingWrite(async()=>(await this._withRetries(b=>bt(b,a)),delete this.localCache[a],this.notifyServiceWorker(a)))}async _poll(){let a=await this._withRetries(a=>{let b=bp(a,!1).getAll();return new bo(b).toPromise()});if(!a||0!==this.pendingWrites)return[];let b=[],c=new Set;for(let{fbase_key:d,value:e}of a)c.add(d),JSON.stringify(this.localCache[d])!==JSON.stringify(e)&&(this.notifyListeners(d,e),b.push(d));for(let f of Object.keys(this.localCache))this.localCache[f]&&!c.has(f)&&(this.notifyListeners(f,null),b.push(f));return b}notifyListeners(a,b){this.localCache[a]=b;let c=this.listeners[a];if(c)for(let d of Array.from(c))d(b)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(a,b){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[a]||(this.listeners[a]=new Set,this._get(a)),this.listeners[a].add(b)}_removeListener(a,b){this.listeners[a]&&(this.listeners[a].delete(b),0===this.listeners[a].size&&delete this.listeners[a]),0===Object.keys(this.listeners).length&&this.stopPolling()}}bu.type="LOCAL";let bv=bu;function bw(a){return`__${a}${Math.floor(1e6*Math.random())}`}class bx{constructor(a,b,c){this.params=c,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};let d="string"==typeof a?document.getElementById(a):a;t(d,"argument-error",{appName:b}),this.container=d,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=by(50);let{callback:a,"expired-callback":b}=this.params;if(a)try{a(this.responseToken)}catch(c){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,b)try{b()}catch(a){}this.isVisible&&this.execute()},6e4)},500))}checkIfDeleted(){if(this.deleted)throw Error("reCAPTCHA mock was already deleted!")}}function by(a){let b=[],c="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let d=0;d<a;d++)b.push(c.charAt(Math.floor(Math.random()*c.length)));return b.join("")}bw("rcb"),new A(3e4,6e4);async function bz(a,b,c){var d,e,f,g,h;let i=await c.verify();try{t("string"==typeof i,a,"argument-error"),t("recaptcha"===c.type,a,"argument-error");let j;if(j="string"==typeof b?{phoneNumber:b}:b,"session"in j){let k=j.session;if("phoneNumber"in j){t("enroll"===k.type,a,"internal-error");let l=await (e=a,f={idToken:k.credential,phoneEnrollmentInfo:{phoneNumber:j.phoneNumber,recaptchaToken:i}},G(e,"POST","/v2/accounts/mfaEnrollment:start",F(e,f)));return l.phoneSessionInfo.sessionInfo}{t("signin"===k.type,a,"internal-error");let m=(null===(d=j.multiFactorHint)|| void 0===d?void 0:d.uid)||j.multiFactorUid;t(m,a,"missing-multi-factor-info");let n=await (g=a,h={mfaPendingCredential:k.credential,mfaEnrollmentId:m,phoneSignInInfo:{recaptchaToken:i}},G(g,"POST","/v2/accounts/mfaSignIn:start",F(g,h)));return n.phoneResponseInfo.sessionInfo}}{let{sessionInfo:o}=await aF(a,{phoneNumber:j.phoneNumber,recaptchaToken:i});return o}}finally{c._reset()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an {@link PhoneAuthCredential}.
 *
 * @example
 * ```javascript
 * // 'recaptcha-container' is the ID of an element in the DOM.
 * const applicationVerifier = new RecaptchaVerifier('recaptcha-container');
 * const provider = new PhoneAuthProvider(auth);
 * const verificationId = await provider.verifyPhoneNumber('+16505550101', applicationVerifier);
 * // Obtain the verificationCode from the user.
 * const phoneCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
 * const userCredential = await signInWithCredential(auth, phoneCredential);
 * ```
 *
 * @public
 */ class bA{constructor(a){this.providerId=bA.PROVIDER_ID,this.auth=ar(a)}verifyPhoneNumber(a,b){return bz(this.auth,a,(0,e.m9)(b))}static credential(a,b){return aK._fromVerification(a,b)}static credentialFromResult(a){return bA.credentialFromTaggedObject(a)}static credentialFromError(a){return bA.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;let{phoneNumber:b,temporaryProof:c}=a;return b&&c?aK._fromTokenResponse(b,c):null}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Chooses a popup/redirect resolver to use. This prefers the override (which
 * is directly passed in), and falls back to the property set on the auth
 * object. If neither are available, this function errors w/ an argument error.
 */ function bB(a,b){return b?x(b):(t(a._popupRedirectResolver,a,"argument-error"),a._popupRedirectResolver)}bA.PROVIDER_ID="phone",bA.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bC extends av{constructor(a){super("custom","custom"),this.params=a}_getIdTokenResponse(a){return aD(a,this._buildIdpRequest())}_linkToIdToken(a,b){return aD(a,this._buildIdpRequest(b))}_getReauthenticationResolver(a){return aD(a,this._buildIdpRequest())}_buildIdpRequest(a){let b={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return a&&(b.idToken=a),b}}function bD(a){return a1(a.auth,new bC(a),a.bypassAuthState)}function bE(a){let{auth:b,user:c}=a;return t(c,b,"internal-error"),a0(c,new bC(a),a.bypassAuthState)}async function bF(a){let{auth:b,user:c}=a;return t(c,b,"internal-error"),a$(c,new bC(a),a.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 */ class bG{constructor(a,b,c,d,e=!1){this.auth=a,this.resolver=c,this.user=d,this.bypassAuthState=e,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(b)?b:[b]}execute(){return new Promise(async(a,b)=>{this.pendingPromise={resolve:a,reject:b};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(c){this.reject(c)}})}async onAuthEvent(a){let{urlResponse:b,sessionId:c,postBody:d,tenantId:e,error:f,type:g}=a;if(f){this.reject(f);return}let h={auth:this.auth,requestUri:b,sessionId:c,tenantId:e||void 0,postBody:d||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(h))}catch(i){this.reject(i)}}onError(a){this.reject(a)}getIdpTask(a){switch(a){case"signInViaPopup":case"signInViaRedirect":return bD;case"linkViaPopup":case"linkViaRedirect":return bF;case"reauthViaPopup":case"reauthViaRedirect":return bE;default:o(this.auth,"internal-error")}}resolve(a){v(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(a),this.unregisterAndCleanUp()}reject(a){v(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(a),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let bH=new A(2e3,1e4);async function bI(a,b,c){let d=ar(a);r(a,b,aN);let e=bB(d,c),f=new bJ(d,"signInViaPopup",b,e);return f.executeNotNull()}class bJ extends bG{constructor(a,b,c,d,e){super(a,b,d,e),this.provider=c,this.authWindow=null,this.pollId=null,bJ.currentPopupAction&&bJ.currentPopupAction.cancel(),bJ.currentPopupAction=this}async executeNotNull(){let a=await this.execute();return t(a,this.auth,"internal-error"),a}async onExecution(){v(1===this.filter.length,"Popup operations only handle one event");let a=bg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],a),this.authWindow.associatedEvent=a,this.resolver._originValidation(this.auth).catch(a=>{this.reject(a)}),this.resolver._isIframeWebStorageSupported(this.auth,a=>{a||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var a;return(null===(a=this.authWindow)|| void 0===a?void 0:a.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bJ.currentPopupAction=null}pollUserCancellation(){let a=()=>{var b,c;if(null===(c=null===(b=this.authWindow)|| void 0===b?void 0:b.window)|| void 0===c?void 0:c.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(a,bH.get())};a()}}bJ.currentPopupAction=null;let bK=new Map;class bL extends bG{constructor(a,b,c=!1){super(a,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],b,void 0,c),this.eventId=null}async execute(){let a=bK.get(this.auth._key());if(!a){try{let b=await bM(this.resolver,this.auth),c=b?await super.execute():null;a=()=>Promise.resolve(c)}catch(d){a=()=>Promise.reject(d)}bK.set(this.auth._key(),a)}return this.bypassAuthState||bK.set(this.auth._key(),()=>Promise.resolve(null)),a()}async onAuthEvent(a){if("signInViaRedirect"===a.type)return super.onAuthEvent(a);if("unknown"===a.type){this.resolve(null);return}if(a.eventId){let b=await this.auth._redirectUserForId(a.eventId);if(b)return this.user=b,super.onAuthEvent(a);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bM(a,b){let c=bP(b),d=bO(a);if(!await d._isAvailable())return!1;let e=await d._get(c)==="true";return await d._remove(c),e}async function bN(a,b){return bO(a)._set(bP(b),"true")}function bO(a){return x(a._redirectPersistence)}function bP(a){return ad("pendingRedirect",a.config.apiKey,a.name)}async function bQ(a,b,c=!1){let d=ar(a),e=bB(d,b),f=new bL(d,e,c),g=await f.execute();return g&&!c&&(delete g.user._redirectEventId,await d._persistUserIfCurrent(g.user),await d._setRedirectUser(null,b)),g}async function bR(a){let b=bg(`${a.uid}:::`);return a._redirectEventId=b,await a.auth._setRedirectUser(a),await a.auth._persistUserIfCurrent(a),b}class bS{constructor(a){this.auth=a,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(a){this.consumers.add(a),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,a)&&(this.sendToConsumer(this.queuedRedirectEvent,a),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(a){this.consumers.delete(a)}onEvent(a){if(this.hasEventBeenHandled(a))return!1;let b=!1;return this.consumers.forEach(c=>{this.isEventForConsumer(a,c)&&(b=!0,this.sendToConsumer(a,c),this.saveEventToCache(a))}),this.hasHandledPotentialRedirect||!bV(a)||(this.hasHandledPotentialRedirect=!0,b||(this.queuedRedirectEvent=a,b=!0)),b}sendToConsumer(a,b){var c;if(a.error&&!bU(a)){let d=(null===(c=a.error.code)|| void 0===c?void 0:c.split("auth/")[1])||"internal-error";b.onError(p(this.auth,d))}else b.onAuthEvent(a)}isEventForConsumer(a,b){let c=null===b.eventId|| !!a.eventId&&a.eventId===b.eventId;return b.filter.includes(a.type)&&c}hasEventBeenHandled(a){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(bT(a))}saveEventToCache(a){this.cachedEventUids.add(bT(a)),this.lastProcessedEventTime=Date.now()}}function bT(a){return[a.type,a.eventId,a.sessionId,a.tenantId].filter(a=>a).join("-")}function bU({type:a,error:b}){return"unknown"===a&&(null==b?void 0:b.code)==="auth/no-auth-event"}function bV(a){switch(a.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bU(a);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function bW(a,b={}){return G(a,"GET","/v1/projects",b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let bX=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bY=/^https?/;async function bZ(a){if(a.config.emulator)return;let{authorizedDomains:b}=await bW(a);for(let c of b)try{if(b$(c))return}catch(d){}o(a,"unauthorized-domain")}function b$(a){let b=y(),{protocol:c,hostname:d}=new URL(b);if(a.startsWith("chrome-extension://")){let e=new URL(a);return""===e.hostname&&""===d?"chrome-extension:"===c&&a.replace("chrome-extension://","")===b.replace("chrome-extension://",""):"chrome-extension:"===c&&e.hostname===d}if(!bY.test(c))return!1;if(bX.test(a))return d===a;let f=a.replace(/\./g,"\\."),g=RegExp("^(.+\\."+f+"|"+f+")$","i");return g.test(d)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let b_=new A(3e4,6e4);function b0(){let a=bi().___jsl;if(null==a?void 0:a.H){for(let b of Object.keys(a.H))if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=[...a.H[b].L],a.CP)for(let c=0;c<a.CP.length;c++)a.CP[c]=null}}let b1=null,b2=new A(5e3,15e3),b3={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},b4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function b5(a){var b,c;let d=await (b=a,b1=b1||(c=b,new Promise((a,b)=>{var d,e,f,g;function h(){b0(),gapi.load("gapi.iframes",{callback:()=>{a(gapi.iframes.getContext())},ontimeout:()=>{b0(),b(p(c,"network-request-failed"))},timeout:b_.get()})}if(null===(e=null===(d=bi().gapi)|| void 0===d?void 0:d.iframes)|| void 0===e?void 0:e.Iframe)a(gapi.iframes.getContext());else if(null===(f=bi().gapi)|| void 0===f?void 0:f.load)h();else{let i=bw("iframefcb");return bi()[i]=()=>{gapi.load?h():b(p(c,"network-request-failed"))},(g=`https://apis.google.com/js/api.js?onload=${i}`,new Promise((a,b)=>{var c,d;let e=document.createElement("script");e.setAttribute("src",g),e.onload=a,e.onerror=a=>{let c=p("internal-error");c.customData=a,b(c)},e.type="text/javascript",e.charset="UTF-8",(null!==(d=null===(c=document.getElementsByTagName("head"))|| void 0===c?void 0:c[0])&& void 0!==d?d:document).appendChild(e)})).catch(a=>b(a))}}).catch(a=>{throw b1=null,a}))),g=bi().gapi;return t(g,a,"internal-error"),d.open({where:document.body,url:function(a){let b=a.config;t(b.authDomain,a,"auth-domain-config-required");let c=b.emulator?B(b,"emulator/auth/iframe"):`https://${a.config.authDomain}/__/auth/iframe`,d={apiKey:b.apiKey,appName:a.name,v:f.Jn},g=b4.get(a.config.apiHost);g&&(d.eid=g);let h=a._getFrameworks();return h.length&&(d.fw=h.join(",")),`${c}?${(0,e.xO)(d).slice(1)}`}(a),messageHandlersFilter:g.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:b3,dontclear:!0},b=>new Promise(async(c,d)=>{await b.restyle({setHideOnLeave:!1});let e=p(a,"network-request-failed"),f=bi().setTimeout(()=>{d(e)},b2.get());function g(){bi().clearTimeout(f),c(b)}b.ping(g).then(g,()=>{d(e)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let b6={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class b7{constructor(a){this.window=a,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(a){}}}function b8(a,b,c,d,g,h){t(a.config.authDomain,a,"auth-domain-config-required"),t(a.config.apiKey,a,"invalid-api-key");let i={apiKey:a.config.apiKey,appName:a.name,authType:c,redirectUrl:d,v:f.Jn,eventId:g};if(b instanceof aN)for(let[j,k]of(b.setDefaultLanguage(a.languageCode),i.providerId=b.providerId||"",(0,e.xb)(b.getCustomParameters())||(i.customParameters=JSON.stringify(b.getCustomParameters())),Object.entries(h||{})))i[j]=k;if(b instanceof aO){let l=b.getScopes().filter(a=>""!==a);l.length>0&&(i.scopes=l.join(","))}a.tenantId&&(i.tid=a.tenantId);let m=i;for(let n of Object.keys(m))void 0===m[n]&&delete m[n];return`${b9(a)}?${(0,e.xO)(m).slice(1)}`}function b9({config:a}){return a.emulator?B(a,"emulator/auth/handler"):`https://${a.authDomain}/__/auth/handler`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The special web storage event
 *
 */ let ca="webStorageSupport",cb=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=be,this._completeRedirectFn=bQ,this._overrideRedirectResult=function(a,b){bK.set(a._key(),b)}}async _openPopup(a,b,c,d){var f;v(null===(f=this.eventManagers[a._key()])|| void 0===f?void 0:f.manager,"_initialize() not called before _openPopup()");let g=b8(a,b,c,y(),d);return function(a,b,c,d=500,f=600){let g=Math.max((window.screen.availHeight-f)/2,0).toString(),h=Math.max((window.screen.availWidth-d)/2,0).toString(),i="",j=Object.assign(Object.assign({},b6),{width:d.toString(),height:f.toString(),top:g,left:h}),k=(0,e.z$)().toLowerCase();c&&(i=ai(k)?"_blank":c),ag(k)&&(b=b||"http://localhost",j.scrollbars="yes");let l=Object.entries(j).reduce((a,[b,c])=>`${a}${b}=${c},`,"");if(function(a=(0,e.z$)()){var b;return an(a)&&!!(null===(b=window.navigator)|| void 0===b?void 0:b.standalone)}(k)&&"_self"!==i)return function a(b,c){let d=document.createElement("a");d.href=b,d.target=c;let e=document.createEvent("MouseEvent");e.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),d.dispatchEvent(e)}(b||"",i),new b7(null);let m=window.open(b||"",i,l);t(m,a,"popup-blocked");try{m.focus()}catch(n){}return new b7(m)}(a,g,bg())}async _openRedirect(a,b,c,d){var e;return await this._originValidation(a),e=b8(a,b,c,y(),d),bi().location.href=e,new Promise(()=>{})}_initialize(a){let b=a._key();if(this.eventManagers[b]){let{manager:c,promise:d}=this.eventManagers[b];return c?Promise.resolve(c):(v(d,"If manager is not set, promise should be"),d)}let e=this.initAndGetManager(a);return this.eventManagers[b]={promise:e},e.catch(()=>{delete this.eventManagers[b]}),e}async initAndGetManager(a){let b=await b5(a),c=new bS(a);return b.register("authEvent",b=>{t(null==b?void 0:b.authEvent,a,"invalid-auth-event");let d=c.onEvent(b.authEvent);return{status:d?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[a._key()]={manager:c},this.iframes[a._key()]=b,c}_isIframeWebStorageSupported(a,b){let c=this.iframes[a._key()];c.send(ca,{type:ca},c=>{var d;let e=null===(d=null==c?void 0:c[0])|| void 0===d?void 0:d[ca];void 0!==e&&b(!!e),o(a,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(a){let b=a._key();return this.originValidationPromises[b]||(this.originValidationPromises[b]=bZ(a)),this.originValidationPromises[b]}get _shouldInitProactively(){return ao()||ah()||an()}};class cc{constructor(a){this.factorId=a}_process(a,b,c){switch(b.type){case"enroll":return this._finalizeEnroll(a,b.credential,c);case"signin":return this._finalizeSignIn(a,b.credential);default:return u("unexpected MultiFactorSessionType")}}}class cd extends cc{constructor(a){super("phone"),this.credential=a}static _fromCredential(a){return new cd(a)}_finalizeEnroll(a,b,c){var d,e;return d=a,G(d,"POST","/v2/accounts/mfaEnrollment:finalize",F(d,e={idToken:b,displayName:c,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(a,b){var c,d;return c=a,G(c,"POST","/v2/accounts/mfaSignIn:finalize",F(c,d={mfaPendingCredential:b,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}(class{constructor(){}static assertion(a){return cd._fromCredential(a)}}).FACTOR_ID="phone";var ce="@firebase/auth",cf="0.20.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cg{constructor(a){this.auth=a,this.internalListeners=new Map}getUid(){var a;return this.assertAuthConfigured(),(null===(a=this.auth.currentUser)|| void 0===a?void 0:a.uid)||null}async getToken(a){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let b=await this.auth.currentUser.getIdToken(a);return{accessToken:b}}addAuthTokenListener(a){if(this.assertAuthConfigured(),this.internalListeners.has(a))return;let b=this.auth.onIdTokenChanged(b=>{var c;a((null===(c=b)|| void 0===c?void 0:c.stsTokenManager.accessToken)||null)});this.internalListeners.set(a,b),this.updateProactiveRefresh()}removeAuthTokenListener(a){this.assertAuthConfigured();let b=this.internalListeners.get(a);b&&(this.internalListeners.delete(a),b(),this.updateProactiveRefresh())}assertAuthConfigured(){t(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}let ch=(0,e.Pz)("authIdTokenMaxAge")||300,ci=null,cj=a=>async b=>{let c=b&&await b.getIdTokenResult(),d=c&&(new Date().getTime()-Date.parse(c.issuedAtTime))/1e3;if(d&&d>ch)return;let e=null==c?void 0:c.token;ci!==e&&(ci=e,await fetch(a,{method:e?"POST":"DELETE",headers:e?{Authorization:`Bearer ${e}`}:{}}))};function ck(a=(0,f.Mq)()){let b=(0,f.qX)(a,"auth");if(b.isInitialized())return b.getImmediate();let c=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Initializes an {@link Auth} instance with fine-grained control over
 * {@link Dependencies}.
 *
 * @remarks
 *
 * This function allows more control over the {@link Auth} instance than
 * {@link getAuth}. `getAuth` uses platform-specific defaults to supply
 * the {@link Dependencies}. In general, `getAuth` is the easiest way to
 * initialize Auth and works for most use cases. Use `initializeAuth` if you
 * need control over which persistence layer is used, or to minimize bundle
 * size if you're not using either `signInWithPopup` or `signInWithRedirect`.
 *
 * For example, if your app only uses anonymous accounts and you only want
 * accounts saved for the current session, initialize `Auth` with:
 *
 * ```js
 * const auth = initializeAuth(app, {
 *   persistence: browserSessionPersistence,
 *   popupRedirectResolver: undefined,
 * });
 * ```
 *
 * @public
 */ function(a,b){let c=(0,f.qX)(a,"auth");if(c.isInitialized()){let d=c.getImmediate(),g=c.getOptions();if((0,e.vZ)(g,null!=b?b:{}))return d;o(d,"already-initialized")}let h=c.initialize({options:b});return h}(a,{popupRedirectResolver:cb,persistence:[bv,bc,be]}),d=(0,e.Pz)("authTokenSyncURL");if(d){let g=cj(d);!function(a,b,c){return(0,e.m9)(a).beforeAuthStateChanged(b,c)}(c,g,()=>g(c.currentUser)),function(a,b,c,d){(0,e.m9)(a).onIdTokenChanged(b,void 0,void 0)}(c,a=>g(a))}let h=(0,e.q4)("auth");return h&&function(a,b,c){let d=ar(a);t(d._canInitEmulator,d,"emulator-config-failed"),t(/^https?:\/\//.test(b),d,"invalid-emulator-scheme");let e=!!(null==c?void 0:c.disableWarnings),f=at(b),{host:g,port:h}=function a(b){let c=at(b),d=/(\/\/)?([^?#/]+)/.exec(b.substr(c.length));if(!d)return{host:"",port:null};let e=d[2].split("@").pop()||"",f=/^(\[[^\]]+\])(:|$)/.exec(e);if(f){let g=f[1];return{host:g,port:au(e.substr(g.length+1))}}{let[h,i]=e.split(":");return{host:h,port:au(i)}}}(b),i=null===h?"":`:${h}`;d.config.emulator={url:`${f}//${g}${i}/`},d.settings.appVerificationDisabledForTesting=!0,d.emulatorConfig=Object.freeze({host:g,port:h,protocol:f.replace(":",""),options:Object.freeze({disableWarnings:e})}),e||function a(){function b(){let a=document.createElement("p"),b=a.style;a.innerText="Running in emulator mode. Do not use with production credentials.",b.position="fixed",b.width="100%",b.backgroundColor="#ffffff",b.border=".1em solid #000000",b.color="#b50000",b.bottom="0px",b.left="0px",b.margin="0px",b.zIndex="10000",b.textAlign="center",a.classList.add("firebase-emulator-warning"),document.body.appendChild(a)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",b):b())}()}(c,`http://${h}`),c}d="Browser",(0,f.Xd)(new i.wA("auth",(a,{options:b})=>{let c=a.getProvider("app").getImmediate(),e=a.getProvider("heartbeat"),{apiKey:f,authDomain:g}=c.options;return((a,c)=>{t(f&&!f.includes(":"),"invalid-api-key",{appName:a.name}),t(!(null==g?void 0:g.includes(":")),"argument-error",{appName:a.name});let e={apiKey:f,authDomain:g,clientPlatform:d,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ap(d)},h=new aq(a,c,e);return function(a,b){let c=(null==b?void 0:b.persistence)||[],d=(Array.isArray(c)?c:[c]).map(x);(null==b?void 0:b.errorMap)&&a._updateErrorMap(b.errorMap),a._initializeWithPersistence(d,null==b?void 0:b.popupRedirectResolver)}(h,b),h})(c,e)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((a,b,c)=>{let d=a.getProvider("auth-internal");d.initialize()})),(0,f.Xd)(new i.wA("auth-internal",a=>{var b;let c=ar(a.getProvider("auth").getImmediate());return b=c,new cg(b)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,f.KN)(ce,cf,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(a){switch(a){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(d)),(0,f.KN)(ce,cf,"esm2017")},5321:function(a,b,c){"use strict";c.d(b,{ET:function(){return lj},Ab:function(){return ls},vr:function(){return lr},hJ:function(){return j4},oe:function(){return li},JU:function(){return j5},Jm:function(){return kp},Yp:function(){return ln},QT:function(){return ld},PL:function(){return lf},ad:function(){return kk},nP:function(){return lt},b9:function(){return k1},cf:function(){return lk},Xo:function(){return k_},IO:function(){return kX},iE:function(){return j7},Eo:function(){return j6},Bt:function(){return lq},pl:function(){return lg},r7:function(){return lh},ar:function(){return kZ},qs:function(){return lu}});var d,e,f,g,h,i,j,k,l,m=c(5816),n=c(8463),o=c(3333),p=c(4444),q="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==c.g?c.g:"undefined"!=typeof self?self:{},r={},s=s||{},t=q||self;function u(){}function v(a){var b=typeof a;return"array"==(b="object"!=b?b:a?Array.isArray(a)?"array":b:"null")||"object"==b&&"number"==typeof a.length}function w(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function x(a,b,c){return a.call.apply(a.bind,arguments)}function y(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(c,d),a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function z(a,b,c){return(z=Function.prototype.bind&& -1!=Function.prototype.bind.toString().indexOf("native code")?x:y).apply(null,arguments)}function A(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();return b.push.apply(b,arguments),a.apply(this,b)}}function B(a,b){function c(){}c.prototype=b.prototype,a.X=b.prototype,a.prototype=new c,a.prototype.constructor=a,a.Wb=function(a,c,d){for(var e=Array(arguments.length-2),f=2;f<arguments.length;f++)e[f-2]=arguments[f];return b.prototype[c].apply(a,e)}}function C(){this.s=this.s,this.o=this.o}C.prototype.s=!1,C.prototype.na=function(){this.s||(this.s=!0,this.M())},C.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let D=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"==typeof a)return"string"!=typeof b||1!=b.length?-1:a.indexOf(b,0);for(let c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return -1};function E(a){let b=a.length;if(0<b){let c=Array(b);for(let d=0;d<b;d++)c[d]=a[d];return c}return[]}function F(a,b){for(let c=1;c<arguments.length;c++){let d=arguments[c];if(v(d)){let e=a.length||0,f=d.length||0;a.length=e+f;for(let g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}function G(a,b){this.type=a,this.g=this.target=b,this.defaultPrevented=!1}G.prototype.h=function(){this.defaultPrevented=!0};var H=function(){if(!t.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{t.addEventListener("test",u,b),t.removeEventListener("test",u,b)}catch(c){}return a}();function I(a){return/^[\s\xa0]*$/.test(a)}var J=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function K(a,b){return a<b?-1:a>b?1:0}function L(){var a=t.navigator;return a&&(a=a.userAgent)?a:""}function M(a){return -1!=L().indexOf(a)}function N(a){return N[" "](a),a}N[" "]=u;var O=M("Opera"),P=M("Trident")||M("MSIE"),Q=M("Edge"),R=Q||P,S=M("Gecko")&&!(-1!=L().toLowerCase().indexOf("webkit")&&!M("Edge"))&&!(M("Trident")||M("MSIE"))&&!M("Edge"),T=-1!=L().toLowerCase().indexOf("webkit")&&!M("Edge");function U(){var a=t.document;return a?a.documentMode:void 0}a:{var V,W="",X=(V=L(),S?/rv:([^\);]+)(\)|;)/.exec(V):Q?/Edge\/([\d\.]+)/.exec(V):P?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(V):T?/WebKit\/(\S+)/.exec(V):O?/(?:Version)[ \/]?(\S+)/.exec(V):void 0);if(X&&(W=X?X[1]:""),P){var Y=U();if(null!=Y&&Y>parseFloat(W)){f=String(Y);break a}}f=W}var Z={};if(t.document&&P){g=U()||parseInt(f,10)||void 0}else g=void 0;var $=g;function _(a,b){if(G.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=b,b=a.relatedTarget){if(S){a:{try{N(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b,d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType="string"==typeof a.pointerType?a.pointerType:aa[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&_.X.h.call(this)}}B(_,G);var aa={2:"touch",3:"pen",4:"mouse"};_.prototype.h=function(){_.X.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ab="closure_listenable_"+(1e6*Math.random()|0),ac=0;function ad(a,b,c,d,e){this.listener=a,this.proxy=null,this.src=b,this.type=c,this.capture=!!d,this.ha=e,this.key=++ac,this.ba=this.ea=!1}function ae(a){a.ba=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function af(a,b,c){for(let d in a)b.call(c,a[d],d,a)}function ag(a){let b={};for(let c in a)b[c]=a[c];return b}let ah="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ai(a,b){let c,d;for(let e=1;e<arguments.length;e++){for(c in d=arguments[e])a[c]=d[c];for(let f=0;f<ah.length;f++)c=ah[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}function aj(a){this.src=a,this.g={},this.h=0}function ak(a,b){var c=b.type;if(c in a.g){var d,e=a.g[c],f=D(e,b);(d=0<=f)&&Array.prototype.splice.call(e,f,1),d&&(ae(b),0==a.g[c].length&&(delete a.g[c],a.h--))}}function al(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ba&&f.listener==b&& !!c==f.capture&&f.ha==d)return e}return -1}aj.prototype.add=function(a,b,c,d,e){var f=a.toString();(a=this.g[f])||(a=this.g[f]=[],this.h++);var g=al(a,b,d,e);return -1<g?(b=a[g],c||(b.ea=!1)):((b=new ad(b,this.src,f,!!d,e)).ea=c,a.push(b)),b};var am="closure_lm_"+(1e6*Math.random()|0),an={};function ao(a,b,c,d,e){if(d&&d.once)return ar(a,b,c,d,e);if(Array.isArray(b)){for(var f=0;f<b.length;f++)ao(a,b[f],c,d,e);return null}return c=ay(c),a&&a[ab]?a.N(b,c,w(d)?!!d.capture:!!d,e):ap(a,b,c,!1,d,e)}function ap(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=w(e)?!!e.capture:!!e,h=aw(a);if(h||(a[am]=h=new aj(a)),(c=h.add(b,c,d,g,f)).proxy)return c;if(d=aq(),c.proxy=d,d.src=a,d.listener=c,a.addEventListener)H||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(au(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function aq(){function a(c){return b.call(a.src,a.listener,c)}let b=av;return a}function ar(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)ar(a,b[f],c,d,e);return null}return c=ay(c),a&&a[ab]?a.O(b,c,w(d)?!!d.capture:!!d,e):ap(a,b,c,!0,d,e)}function as(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)as(a,b[f],c,d,e);else(d=w(d)?!!d.capture:!!d,c=ay(c),a&&a[ab])?(a=a.i,(b=String(b).toString())in a.g&& -1<(c=al(f=a.g[b],c,d,e))&&(ae(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.g[b],a.h--))):a&&(a=aw(a))&&(b=a.g[b.toString()],a=-1,b&&(a=al(b,c,d,e)),(c=-1<a?b[a]:null)&&at(c))}function at(a){if("number"!=typeof a&&a&&!a.ba){var b=a.src;if(b&&b[ab])ak(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(au(c),d):b.addListener&&b.removeListener&&b.removeListener(d),(c=aw(b))?(ak(c,a),0==c.h&&(c.src=null,b[am]=null)):ae(a)}}}function au(a){return a in an?an[a]:an[a]="on"+a}function av(a,b){if(a.ba)a=!0;else{b=new _(b,this);var c=a.listener,d=a.ha||a.src;a.ea&&at(a),a=c.call(d,b)}return a}function aw(a){return(a=a[am])instanceof aj?a:null}var ax="__closure_events_fn_"+(1e9*Math.random()>>>0);function ay(a){return"function"==typeof a?a:(a[ax]||(a[ax]=function(b){return a.handleEvent(b)}),a[ax])}function az(){C.call(this),this.i=new aj(this),this.P=this,this.I=null}function aA(a,b){var c,d=a.I;if(d)for(c=[];d;d=d.I)c.push(d);if(a=a.P,d=b.type||b,"string"==typeof b)b=new G(b,a);else if(b instanceof G)b.target=b.target||a;else{var e=b;ai(b=new G(d,a),e)}if(e=!0,c)for(var f=c.length-1;0<=f;f--){var g=b.g=c[f];e=aB(g,d,!0,b)&&e}if(e=aB(g=b.g=a,d,!0,b)&&e,e=aB(g,d,!1,b)&&e,c)for(f=0;f<c.length;f++)e=aB(g=b.g=c[f],d,!1,b)&&e}function aB(a,b,c,d){if(!(b=a.i.g[String(b)]))return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ba&&g.capture==c){var h=g.listener,i=g.ha||g.src;g.ea&&ak(a.i,g),e=!1!==h.call(i,d)&&e}}return e&&!d.defaultPrevented}B(az,C),az.prototype[ab]=!0,az.prototype.removeEventListener=function(a,b,c,d){as(this,a,b,c,d)},az.prototype.M=function(){if(az.X.M.call(this),this.i){var a,b=this.i;for(a in b.g){for(var c=b.g[a],d=0;d<c.length;d++)ae(c[d]);delete b.g[a],b.h--}}this.I=null},az.prototype.N=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)},az.prototype.O=function(a,b,c,d){return this.i.add(String(a),b,!0,c,d)};var aC=t.JSON.stringify;function aD(){var a=aK;let b=null;return a.g&&(b=a.g,a.g=a.g.next,a.g||(a.h=null),b.next=null),b}var aE=new class{constructor(a,b){this.i=a,this.j=b,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}(()=>new aF,a=>a.reset());class aF{constructor(){this.next=this.g=this.h=null}set(a,b){this.h=a,this.g=b,this.next=null}reset(){this.next=this.g=this.h=null}}function aG(a){t.setTimeout(()=>{throw a},0)}function aH(a,b){h||aI(),aJ||(h(),aJ=!0),aK.add(a,b)}function aI(){var a=t.Promise.resolve(void 0);h=function(){a.then(aL)}}var aJ=!1,aK=new class{constructor(){this.h=this.g=null}add(a,b){let c=aE.get();c.set(a,b),this.h?this.h.next=c:this.g=c,this.h=c}};function aL(){for(var a;a=aD();){try{a.h.call(a.g)}catch(b){aG(b)}var c=aE;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}aJ=!1}function aM(a,b){az.call(this),this.h=a||1,this.g=b||t,this.j=z(this.lb,this),this.l=Date.now()}function aN(a){a.ca=!1,a.R&&(a.g.clearTimeout(a.R),a.R=null)}function aO(a,b,c){if("function"==typeof a)c&&(a=z(a,c));else if(a&&"function"==typeof a.handleEvent)a=z(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:t.setTimeout(a,b||0)}function aP(a){a.g=aO(()=>{a.g=null,a.i&&(a.i=!1,aP(a))},a.j);let b=a.h;a.h=null,a.m.apply(null,b)}B(aM,az),(l=aM.prototype).ca=!1,l.R=null,l.lb=function(){if(this.ca){var a=Date.now()-this.l;0<a&&a<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-a):(this.R&&(this.g.clearTimeout(this.R),this.R=null),aA(this,"tick"),this.ca&&(aN(this),this.start()))}},l.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},l.M=function(){aM.X.M.call(this),aN(this),delete this.g};class aQ extends C{constructor(a,b){super(),this.m=a,this.j=b,this.h=null,this.i=!1,this.g=null}l(a){this.h=arguments,this.g?this.i=!0:aP(this)}M(){super.M(),this.g&&(t.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function aR(a){C.call(this),this.h=a,this.g={}}B(aR,C);var aS=[];function aT(a,b,c,d){Array.isArray(c)||(c&&(aS[0]=c.toString()),c=aS);for(var e=0;e<c.length;e++){var f=ao(b,c[e],d||a.handleEvent,!1,a.h||a);if(!f)break;a.g[f.key]=f}}function aU(a){af(a.g,function(a,b){this.g.hasOwnProperty(b)&&at(a)},a),a.g={}}function aV(){this.g=!0}function aW(a,b,c,d){a.info(function(){return"XMLHTTP TEXT ("+b+"): "+aX(a,c)+(d?" "+d:"")})}function aX(a,b){if(!a.g)return b;if(!b)return null;try{var c=JSON.parse(b);if(c){for(a=0;a<c.length;a++)if(Array.isArray(c[a])){var d=c[a];if(!(2>d.length)){var e=d[1];if(Array.isArray(e)&&!(1>e.length)){var f=e[0];if("noop"!=f&&"stop"!=f&&"close"!=f)for(var g=1;g<e.length;g++)e[g]=""}}}}return aC(c)}catch(h){return b}}aR.prototype.M=function(){aR.X.M.call(this),aU(this)},aR.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},aV.prototype.Aa=function(){this.g=!1},aV.prototype.info=function(){};var aY={},aZ=null;function a$(){return aZ=aZ||new az}function a_(a){G.call(this,aY.Pa,a)}function a0(a){let b=a$();aA(b,new a_(b))}function a1(a,b){G.call(this,aY.STAT_EVENT,a),this.stat=b}function a2(a){let b=a$();aA(b,new a1(b,a))}function a3(a,b){G.call(this,aY.Qa,a),this.size=b}function a4(a,b){if("function"!=typeof a)throw Error("Fn must not be null and must be a function");return t.setTimeout(function(){a()},b)}aY.Pa="serverreachability",B(a_,G),aY.STAT_EVENT="statevent",B(a1,G),aY.Qa="timingevent",B(a3,G);var a5={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},a6={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function a7(){}function a8(a){return a.h||(a.h=a.i())}function a9(){}a7.prototype.h=null;var ba={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function bb(){G.call(this,"d")}function bc(){G.call(this,"c")}function bd(){}function be(a,b,c,d){this.l=a,this.j=b,this.m=c,this.U=d||1,this.S=new aR(this),this.O=bg,a=R?125:void 0,this.T=new aM(a),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new bf}function bf(){this.i=null,this.g="",this.h=!1}B(bb,G),B(bc,G),B(bd,a7),bd.prototype.g=function(){return new XMLHttpRequest},bd.prototype.i=function(){return{}},i=new bd;var bg=45e3,bh={},bi={};function bj(a,b,c){a.K=1,a.v=bC(bx(b)),a.s=c,a.P=!0,bk(a,null)}function bk(a,b){a.F=Date.now(),bo(a),a.A=bx(a.v);var c=a.A,d=a.U;Array.isArray(d)||(d=[String(d)]),bP(c.i,"t",d),a.C=0,c=a.l.H,a.h=new bf,a.g=cG(a.l,c?b:null,!a.s),0<a.N&&(a.L=new aQ(z(a.La,a,a.g),a.N)),aT(a.S,a.g,"readystatechange",a.ib),b=a.H?ag(a.H):{},a.s?(a.u||(a.u="POST"),b["Content-Type"]="application/x-www-form-urlencoded",a.g.da(a.A,a.u,a.s,b)):(a.u="GET",a.g.da(a.A,a.u,null,b)),a0(),function(a,b,c,d,e,f){a.info(function(){if(a.g){if(f)for(var g="",h=f.split("&"),i=0;i<h.length;i++){var j=h[i].split("=");if(1<j.length){var k=j[0];j=j[1];var l=k.split("_");g=2<=l.length&&"type"==l[1]?g+(k+"=")+j+"&":g+(k+"=redacted&")}}else g=null}else g=f;return"XMLHTTP REQ ("+d+") [attempt "+e+"]: "+b+"\n"+c+"\n"+g})}(a.j,a.u,a.A,a.m,a.U,a.s)}function bl(a){return!!a.g&&"GET"==a.u&&2!=a.K&&a.l.Da}function bm(a,b,c){let d=!0,e;for(;!a.I&&a.C<c.length;)if((e=bn(a,c))==bi){4==b&&(a.o=4,a2(14),d=!1),aW(a.j,a.m,null,"[Incomplete Response]");break}else if(e==bh){a.o=4,a2(15),aW(a.j,a.m,c,"[Invalid Chunk]"),d=!1;break}else aW(a.j,a.m,e,null),bt(a,e);bl(a)&&e!=bi&&e!=bh&&(a.h.g="",a.C=0),4!=b||0!=c.length||a.h.h||(a.o=1,a2(16),d=!1),a.i=a.i&&d,d?0<c.length&&!a.$&&(a.$=!0,(b=a.l).g==a&&b.$&&!b.K&&(b.j.info("Great, no buffering proxy detected. Bytes received: "+c.length),cy(b),b.K=!0,a2(11))):(aW(a.j,a.m,c,"[Invalid Chunked Response]"),bs(a),br(a))}function bn(a,b){var c=a.C,d=b.indexOf("\n",c);return -1==d?bi:isNaN(c=Number(b.substring(c,d)))?bh:(d+=1)+c>b.length?bi:(b=b.substr(d,c),a.C=d+c,b)}function bo(a){a.V=Date.now()+a.O,bp(a,a.O)}function bp(a,b){if(null!=a.B)throw Error("WatchDog timer not null");a.B=a4(z(a.gb,a),b)}function bq(a){a.B&&(t.clearTimeout(a.B),a.B=null)}function br(a){0==a.l.G||a.I||cB(a.l,a)}function bs(a){bq(a);var b=a.L;b&&"function"==typeof b.na&&b.na(),a.L=null,aN(a.T),aU(a.S),a.g&&(b=a.g,a.g=null,b.abort(),b.na())}function bt(a,b){try{var c=a.l;if(0!=c.G&&(c.g==a||bX(c.h,a))){if(!a.J&&bX(c.h,a)&&3==c.G){try{var d=c.Fa.g.parse(b)}catch(e){d=null}if(Array.isArray(d)&&3==d.length){var f=d;if(0==f[0]){a:if(!c.u){if(c.g){if(c.g.F+3e3<a.F)cA(c),cq(c);else break a}cx(c),a2(18)}}else c.Ba=f[1],0<c.Ba-c.T&&37500>f[2]&&c.L&&0==c.A&&!c.v&&(c.v=a4(z(c.cb,c),6e3));if(1>=bW(c.h)&&c.ja){try{c.ja()}catch(g){}c.ja=void 0}}else cD(c,11)}else if((a.J||c.g==a)&&cA(c),!I(b))for(f=c.Fa.g.parse(b),b=0;b<f.length;b++){let h=f[b];if(c.T=h[0],h=h[1],2==c.G){if("c"==h[0]){c.I=h[1],c.ka=h[2];let i=h[3];null!=i&&(c.ma=i,c.j.info("VER="+c.ma));let j=h[4];null!=j&&(c.Ca=j,c.j.info("SVER="+c.Ca));let k=h[5];null!=k&&"number"==typeof k&&0<k&&(d=1.5*k,c.J=d,c.j.info("backChannelRequestTimeoutMs_="+d)),d=c;let l=a.g;if(l){let m=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var n=d.h;n.g|| -1==m.indexOf("spdy")&& -1==m.indexOf("quic")&& -1==m.indexOf("h2")||(n.j=n.l,n.g=new Set,n.h&&(bY(n,n.h),n.h=null))}if(d.D){let o=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;o&&(d.za=o,bB(d.F,d.D,o))}}c.G=3,c.l&&c.l.xa(),c.$&&(c.P=Date.now()-a.F,c.j.info("Handshake RTT: "+c.P+"ms")),d=c;var p=a;if(d.sa=cF(d,d.H?d.ka:null,d.V),p.J){bZ(d.h,p);var q=p,r=d.J;r&&q.setTimeout(r),q.B&&(bq(q),bo(q)),d.g=p}else cw(d);0<c.i.length&&cs(c)}else"stop"!=h[0]&&"close"!=h[0]||cD(c,7)}else 3==c.G&&("stop"==h[0]||"close"==h[0]?"stop"==h[0]?cD(c,7):cp(c):"noop"!=h[0]&&c.l&&c.l.wa(h),c.A=0)}}a0(4)}catch(s){}}function bu(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(v(a)||"string"==typeof a)Array.prototype.forEach.call(a,b,void 0);else for(var c=function(a){if(a.oa&&"function"==typeof a.oa)return a.oa();if(!a.W||"function"!=typeof a.W){if("undefined"!=typeof Map&&a instanceof Map)return Array.from(a.keys());if(!("undefined"!=typeof Set&&a instanceof Set)){if(v(a)||"string"==typeof a){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}for(let d in b=[],c=0,a)b[c++]=d;return b}}}(a),d=function(a){if(a.W&&"function"==typeof a.W)return a.W();if("undefined"!=typeof Map&&a instanceof Map||"undefined"!=typeof Set&&a instanceof Set)return Array.from(a.values());if("string"==typeof a)return a.split("");if(v(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}for(d in b=[],c=0,a)b[c++]=a[d];return b}(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}(l=be.prototype).setTimeout=function(a){this.O=a},l.ib=function(a){a=a.target;let b=this.L;b&&3==cj(a)?b.l():this.La(a)},l.La=function(a){try{if(a==this.g)a:{let b=cj(this.g);var c=this.g.Ea();let d=this.g.aa();if(!(3>b)&&(3!=b||R||this.g&&(this.h.h||this.g.fa()||ck(this.g)))){this.I||4!=b||7==c||(8==c||0>=d?a0(3):a0(2)),bq(this);var e=this.g.aa();this.Y=e;b:if(bl(this)){var f=ck(this.g);a="";var g=f.length,h=4==cj(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){bs(this),br(this);var i="";break b}this.h.i=new t.TextDecoder}for(c=0;c<g;c++)this.h.h=!0,a+=this.h.i.decode(f[c],{stream:h&&c==g-1});f.splice(0,g),this.h.g+=a,this.C=0,i=this.h.g}else i=this.g.fa();if(this.i=200==e,function(a,b,c,d,e,f,g){a.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+e+"]: "+b+"\n"+c+"\n"+f+" "+g})}(this.j,this.u,this.A,this.m,this.U,b,e),this.i){if(this.Z&&!this.J){b:{if(this.g){var j,k=this.g;if((j=k.g?k.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(j)){var l=j;break b}}l=null}if(e=l)aW(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,bt(this,e);else{this.i=!1,this.o=3,a2(12),bs(this),br(this);break a}}this.P?(bm(this,b,i),R&&this.i&&3==b&&(aT(this.S,this.T,"tick",this.hb),this.T.start())):(aW(this.j,this.m,i,null),bt(this,i)),4==b&&bs(this),this.i&&!this.I&&(4==b?cB(this.l,this):(this.i=!1,bo(this)))}else 400==e&&0<i.indexOf("Unknown SID")?(this.o=3,a2(12)):(this.o=0,a2(13)),bs(this),br(this)}}}catch(m){}finally{}},l.hb=function(){if(this.g){var a=cj(this.g),b=this.g.fa();this.C<b.length&&(bq(this),bm(this,a,b),this.i&&4!=a&&bo(this))}},l.cancel=function(){this.I=!0,bs(this)},l.gb=function(){this.B=null;let a=Date.now();0<=a-this.V?(function(a,b){a.info(function(){return"TIMEOUT: "+b})}(this.j,this.A),2!=this.K&&(a0(),a2(17)),bs(this),this.o=2,br(this)):bp(this,this.V-a)};var bv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bw(a,b){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,a instanceof bw){this.h=void 0!==b?b:a.h,by(this,a.j),this.s=a.s,this.g=a.g,bz(this,a.m),this.l=a.l,b=a.i;var c=new bL;c.i=b.i,b.g&&(c.g=new Map(b.g),c.h=b.h),bA(this,c),this.o=a.o}else a&&(c=String(a).match(bv))?(this.h=!!b,by(this,c[1]||"",!0),this.s=bD(c[2]||""),this.g=bD(c[3]||"",!0),bz(this,c[4]),this.l=bD(c[5]||"",!0),bA(this,c[6]||"",!0),this.o=bD(c[7]||"")):(this.h=!!b,this.i=new bL(null,this.h))}function bx(a){return new bw(a)}function by(a,b,c){a.j=c?bD(b,!0):b,a.j&&(a.j=a.j.replace(/:$/,""))}function bz(a,b){if(b){if(isNaN(b=Number(b))||0>b)throw Error("Bad port number "+b);a.m=b}else a.m=null}function bA(a,b,c){b instanceof bL?(a.i=b,bR(a.i,a.h)):(c||(b=bE(b,bJ)),a.i=new bL(b,a.h))}function bB(a,b,c){a.i.set(b,c)}function bC(a){return bB(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function bD(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function bE(a,b,c){return"string"==typeof a?(a=encodeURI(a).replace(b,bF),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function bF(a){return"%"+((a=a.charCodeAt(0))>>4&15).toString(16)+(15&a).toString(16)}bw.prototype.toString=function(){var a=[],b=this.j;b&&a.push(bE(b,bG,!0),":");var c=this.g;return(c||"file"==b)&&(a.push("//"),(b=this.s)&&a.push(bE(b,bG,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(c=this.m)&&a.push(":",String(c))),(c=this.l)&&(this.g&&"/"!=c.charAt(0)&&a.push("/"),a.push(bE(c,"/"==c.charAt(0)?bI:bH,!0))),(c=this.i.toString())&&a.push("?",c),(c=this.o)&&a.push("#",bE(c,bK)),a.join("")};var bG=/[#\/\?@]/g,bH=/[#\?:]/g,bI=/[#\?]/g,bJ=/[#\?@]/g,bK=/#/g;function bL(a,b){this.h=this.g=null,this.i=a||null,this.j=!!b}function bM(a){a.g||(a.g=new Map,a.h=0,a.i&&function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}}(a.i,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))}function bN(a,b){bM(a),b=bQ(a,b),a.g.has(b)&&(a.i=null,a.h-=a.g.get(b).length,a.g.delete(b))}function bO(a,b){return bM(a),b=bQ(a,b),a.g.has(b)}function bP(a,b,c){bN(a,b),0<c.length&&(a.i=null,a.g.set(bQ(a,b),E(c)),a.h+=c.length)}function bQ(a,b){return b=String(b),a.j&&(b=b.toLowerCase()),b}function bR(a,b){b&&!a.j&&(bM(a),a.i=null,a.g.forEach(function(a,b){var c=b.toLowerCase();b!=c&&(bN(this,b),bP(this,c,a))},a)),a.j=b}(l=bL.prototype).add=function(a,b){bM(this),this.i=null,a=bQ(this,a);var c=this.g.get(a);return c||this.g.set(a,c=[]),c.push(b),this.h+=1,this},l.forEach=function(a,b){bM(this),this.g.forEach(function(c,d){c.forEach(function(c){a.call(b,c,d,this)},this)},this)},l.oa=function(){bM(this);let a=Array.from(this.g.values()),b=Array.from(this.g.keys()),c=[];for(let d=0;d<b.length;d++){let e=a[d];for(let f=0;f<e.length;f++)c.push(b[d])}return c},l.W=function(a){bM(this);let b=[];if("string"==typeof a)bO(this,a)&&(b=b.concat(this.g.get(bQ(this,a))));else{a=Array.from(this.g.values());for(let c=0;c<a.length;c++)b=b.concat(a[c])}return b},l.set=function(a,b){return bM(this),this.i=null,a=bQ(this,a),bO(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[b]),this.h+=1,this},l.get=function(a,b){return a&&0<(a=this.W(a)).length?String(a[0]):b},l.toString=function(){if(this.i)return this.i;if(!this.g)return"";let a=[],b=Array.from(this.g.keys());for(var c=0;c<b.length;c++){var d=b[c];let e=encodeURIComponent(String(d)),f=this.W(d);for(d=0;d<f.length;d++){var g=e;""!==f[d]&&(g+="="+encodeURIComponent(String(f[d]))),a.push(g)}}return this.i=a.join("&")};var bS=class{constructor(a,b){this.h=a,this.g=b}};function bT(a){this.l=a||bU,a=t.PerformanceNavigationTiming?0<(a=t.performance.getEntriesByType("navigation")).length&&("hq"==a[0].nextHopProtocol||"h2"==a[0].nextHopProtocol):!!(t.g&&t.g.Ga&&t.g.Ga()&&t.g.Ga().$b),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var bU=10;function bV(a){return!!a.h|| !!a.g&&a.g.size>=a.j}function bW(a){return a.h?1:a.g?a.g.size:0}function bX(a,b){return a.h?a.h==b:!!a.g&&a.g.has(b)}function bY(a,b){a.g?a.g.add(b):a.h=b}function bZ(a,b){a.h&&a.h==b?a.h=null:a.g&&a.g.has(b)&&a.g.delete(b)}function b$(a){if(null!=a.h)return a.i.concat(a.h.D);if(null!=a.g&&0!==a.g.size){let b=a.i;for(let c of a.g.values())b=b.concat(c.D);return b}return E(a.i)}function b_(){}function b0(){this.g=new b_}function b1(a,b,c){let d=c||"";try{bu(a,function(a,c){let e=a;w(a)&&(e=aC(a)),b.push(d+c+"="+encodeURIComponent(e))})}catch(e){throw b.push(d+"type="+encodeURIComponent("_badmap")),e}}function b2(a,b,c,d,e){try{b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null,e(d)}catch(f){}}function b3(a){this.l=a.ac||null,this.j=a.jb||!1}function b4(a,b){az.call(this),this.D=a,this.u=b,this.m=void 0,this.readyState=b5,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}bT.prototype.cancel=function(){if(this.i=b$(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let a of this.g.values())a.cancel();this.g.clear()}},b_.prototype.stringify=function(a){return t.JSON.stringify(a,void 0)},b_.prototype.parse=function(a){return t.JSON.parse(a,void 0)},B(b3,a7),b3.prototype.g=function(){return new b4(this.l,this.j)},b3.prototype.i=(e={},function(){return e}),B(b4,az);var b5=0;function b6(a){a.j.read().then(a.Ta.bind(a)).catch(a.ga.bind(a))}function b7(a){a.readyState=4,a.l=null,a.j=null,a.A=null,b8(a)}function b8(a){a.onreadystatechange&&a.onreadystatechange.call(a)}(l=b4.prototype).open=function(a,b){if(this.readyState!=b5)throw this.abort(),Error("Error reopening a connection");this.C=a,this.B=b,this.readyState=1,b8(this)},l.send=function(a){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let b={headers:this.v,method:this.C,credentials:this.m,cache:void 0};a&&(b.body=a),(this.D||t).fetch(new Request(this.B,b)).then(this.Wa.bind(this),this.ga.bind(this))},l.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,b7(this)),this.readyState=b5},l.Wa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,b8(this)),this.g&&(this.readyState=3,b8(this),this.g))){if("arraybuffer"===this.responseType)a.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==t.ReadableStream&&"body"in a){if(this.j=a.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;b6(this)}else a.text().then(this.Va.bind(this),this.ga.bind(this))}},l.Ta=function(a){if(this.g){if(this.u&&a.value)this.response.push(a.value);else if(!this.u){var b=a.value?a.value:new Uint8Array(0);(b=this.A.decode(b,{stream:!a.done}))&&(this.response=this.responseText+=b)}a.done?b7(this):b8(this),3==this.readyState&&b6(this)}},l.Va=function(a){this.g&&(this.response=this.responseText=a,b7(this))},l.Ua=function(a){this.g&&(this.response=a,b7(this))},l.ga=function(){this.g&&b7(this)},l.setRequestHeader=function(a,b){this.v.append(a,b)},l.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},l.getAllResponseHeaders=function(){if(!this.h)return"";let a=[],b=this.h.entries();for(var c=b.next();!c.done;)a.push((c=c.value)[0]+": "+c[1]),c=b.next();return a.join("\r\n")},Object.defineProperty(b4.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(a){this.m=a?"include":"same-origin"}});var b9=t.JSON.parse;function ca(a){az.call(this),this.headers=new Map,this.u=a||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=cb,this.K=this.L=!1}B(ca,az);var cb="",cc=/^https?$/i,cd=["POST","PUT"];function ce(a,b){a.h=!1,a.g&&(a.l=!0,a.g.abort(),a.l=!1),a.j=b,a.m=5,cf(a),ch(a)}function cf(a){a.D||(a.D=!0,aA(a,"complete"),aA(a,"error"))}function cg(a){if(a.h&& void 0!==s&&(!a.C[1]||4!=cj(a)||2!=a.aa())){if(a.v&&4==cj(a))aO(a.Ha,0,a);else if(aA(a,"readystatechange"),4==cj(a)){a.h=!1;try{let b=a.aa();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c,d,e=!0;break a;default:e=!1}if(!(c=e)){if(d=0===b){var f=String(a.H).match(bv)[1]||null;if(!f&&t.self&&t.self.location){var g=t.self.location.protocol;f=g.substr(0,g.length-1)}d=!cc.test(f?f.toLowerCase():"")}c=d}if(c)aA(a,"complete"),aA(a,"success");else{a.m=6;try{var h=2<cj(a)?a.g.statusText:""}catch(i){h=""}a.j=h+" ["+a.aa()+"]",cf(a)}}finally{ch(a)}}}}function ch(a,b){if(a.g){ci(a);let c=a.g,d=a.C[0]?u:null;a.g=null,a.C=null,b||aA(a,"ready");try{c.onreadystatechange=d}catch(e){}}}function ci(a){a.g&&a.K&&(a.g.ontimeout=null),a.A&&(t.clearTimeout(a.A),a.A=null)}function cj(a){return a.g?a.g.readyState:0}function ck(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.J){case cb:case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch(b){return null}}function cl(a){let b="";return af(a,function(a,c){b+=c,b+=":",b+=a,b+="\r\n"}),b}function cm(a,b,c){a:{for(d in c){var d=!1;break a}d=!0}d||(c=cl(c),"string"==typeof a?null!=c&&encodeURIComponent(String(c)):bB(a,b,c))}function cn(a,b,c){return c&&c.internalChannelParams&&c.internalChannelParams[a]||b}function co(a){this.Ca=0,this.i=[],this.j=new aV,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=cn("failFast",!1,a),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=cn("baseRetryDelayMs",5e3,a),this.bb=cn("retryDelaySeedMs",1e4,a),this.$a=cn("forwardChannelMaxRetries",2,a),this.ta=cn("forwardChannelRequestTimeoutMs",2e4,a),this.ra=a&&a.xmlHttpFactory||void 0,this.Da=a&&a.Zb||!1,this.J=void 0,this.H=a&&a.supportsCrossDomainXhr||!1,this.I="",this.h=new bT(a&&a.concurrentRequestLimit),this.Fa=new b0,this.O=a&&a.fastHandshake||!1,this.N=a&&a.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=a&&a.Xb||!1,a&&a.Aa&&this.j.Aa(),a&&a.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&a&&a.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function cp(a){if(cr(a),3==a.G){var b=a.U++,c=bx(a.F);bB(c,"SID",a.I),bB(c,"RID",b),bB(c,"TYPE","terminate"),cu(a,c),(b=new be(a,a.j,b,void 0)).K=2,b.v=bC(bx(c)),c=!1,t.navigator&&t.navigator.sendBeacon&&(c=t.navigator.sendBeacon(b.v.toString(),"")),!c&&t.Image&&((new Image).src=b.v,c=!0),c||(b.g=cG(b.l,null),b.g.da(b.v)),b.F=Date.now(),bo(b)}cE(a)}function cq(a){a.g&&(cy(a),a.g.cancel(),a.g=null)}function cr(a){cq(a),a.u&&(t.clearTimeout(a.u),a.u=null),cA(a),a.h.cancel(),a.m&&("number"==typeof a.m&&t.clearTimeout(a.m),a.m=null)}function cs(a){bV(a.h)||a.m||(a.m=!0,aH(a.Ja,a),a.C=0)}function ct(a,b){var c;c=b?b.m:a.U++;let d=bx(a.F);bB(d,"SID",a.I),bB(d,"RID",c),bB(d,"AID",a.T),cu(a,d),a.o&&a.s&&cm(d,a.o,a.s),c=new be(a,a.j,c,a.C+1),null===a.o&&(c.H=a.s),b&&(a.i=b.D.concat(a.i)),b=cv(a,c,1e3),c.setTimeout(Math.round(.5*a.ta)+Math.round(.5*a.ta*Math.random())),bY(a.h,c),bj(c,d,b)}function cu(a,b){a.ia&&af(a.ia,function(a,c){bB(b,c,a)}),a.l&&bu({},function(a,c){bB(b,c,a)})}function cv(a,b,c){c=Math.min(a.i.length,c);var d=a.l?z(a.l.Ra,a.l,a):null;a:{var e=a.i;let f=-1;for(;;){let g=["count="+c];-1==f?0<c?(f=e[0].h,g.push("ofs="+f)):f=0:g.push("ofs="+f);let h=!0;for(let i=0;i<c;i++){let j=e[i].h,k=e[i].g;if(0>(j-=f))f=Math.max(0,e[i].h-100),h=!1;else try{b1(k,g,"req"+j+"_")}catch(l){d&&d(k)}}if(h){d=g.join("&");break a}}}return a=a.i.splice(0,c),b.D=a,d}function cw(a){a.g||a.u||(a.Z=1,aH(a.Ia,a),a.A=0)}function cx(a){return!a.g&&!a.u&&!(3<=a.A)&&(a.Z++,a.u=a4(z(a.Ia,a),cC(a,a.A)),a.A++,!0)}function cy(a){null!=a.B&&(t.clearTimeout(a.B),a.B=null)}function cz(a){a.g=new be(a,a.j,"rpc",a.Z),null===a.o&&(a.g.H=a.s),a.g.N=0;var b=bx(a.sa);bB(b,"RID","rpc"),bB(b,"SID",a.I),bB(b,"CI",a.L?"0":"1"),bB(b,"AID",a.T),bB(b,"TYPE","xmlhttp"),cu(a,b),a.o&&a.s&&cm(b,a.o,a.s),a.J&&a.g.setTimeout(a.J);var c=a.g;a=a.ka,c.K=1,c.v=bC(bx(b)),c.s=null,c.P=!0,bk(c,a)}function cA(a){null!=a.v&&(t.clearTimeout(a.v),a.v=null)}function cB(a,b){var c=null;if(a.g==b){cA(a),cy(a),a.g=null;var d=2}else{if(!bX(a.h,b))return;c=b.D,bZ(a.h,b),d=1}if(0!=a.G){if(a.pa=b.Y,b.i){if(1==d){c=b.s?b.s.length:0,b=Date.now()-b.F;var e,f,g=a.C;d=a$(),aA(d,new a3(d,c)),cs(a)}else cw(a)}else if(3==(g=b.o)||0==g&&0<a.pa||!(1==d&&(e=a,f=b,!(bW(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=f.D.concat(e.i),!0):1!=e.G&&2!=e.G&&!(e.C>=(e.Za?0:e.$a))&&(e.m=a4(z(e.Ja,e,f),cC(e,e.C)),e.C++,!0)))||2==d&&cx(a)))switch(c&&0<c.length&&((b=a.h).i=b.i.concat(c)),g){case 1:cD(a,5);break;case 4:cD(a,10);break;case 3:cD(a,6);break;default:cD(a,2)}}}function cC(a,b){let c=a.Xa+Math.floor(Math.random()*a.bb);return a.l||(c*=2),c*b}function cD(a,b){if(a.j.info("Error code "+b),2==b){var c=null;a.l&&(c=null);var d=z(a.kb,a);c||(c=new bw("//www.google.com/images/cleardot.gif"),t.location&&"http"==t.location.protocol||by(c,"https"),bC(c)),function(a,b){let c=new aV;if(t.Image){let d=new Image;d.onload=A(b2,c,d,"TestLoadImage: loaded",!0,b),d.onerror=A(b2,c,d,"TestLoadImage: error",!1,b),d.onabort=A(b2,c,d,"TestLoadImage: abort",!1,b),d.ontimeout=A(b2,c,d,"TestLoadImage: timeout",!1,b),t.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=a}else b(!1)}(c.toString(),d)}else a2(2);a.G=0,a.l&&a.l.va(b),cE(a),cr(a)}function cE(a){if(a.G=0,a.la=[],a.l){let b=b$(a.h);(0!=b.length||0!=a.i.length)&&(F(a.la,b),F(a.la,a.i),a.h.i.length=0,E(a.i),a.i.length=0),a.l.ua()}}function cF(a,b,c){var d=c instanceof bw?bx(c):new bw(c,void 0);if(""!=d.g)b&&(d.g=b+"."+d.g),bz(d,d.m);else{var e=t.location;d=e.protocol,b=b?b+"."+e.hostname:e.hostname,e=+e.port;var f=new bw(null,void 0);d&&by(f,d),b&&(f.g=b),e&&bz(f,e),c&&(f.l=c),d=f}return c=a.D,b=a.za,c&&b&&bB(d,c,b),bB(d,"VER",a.ma),cu(a,d),d}function cG(a,b,c){if(b&&!a.H)throw Error("Can't create secondary domain capable XhrIo object.");return(b=new ca(c&&a.Da&&!a.ra?new b3({jb:!0}):a.ra)).Ka(a.H),b}function cH(){}function cI(){if(P&&!(10<=Number($)))throw Error("Environmental error: no available transport.")}function cJ(a,b){az.call(this),this.g=new co(b),this.l=a,this.h=b&&b.messageUrlParams||null,a=b&&b.messageHeaders||null,b&&b.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.s=a,a=b&&b.initMessageHeaders||null,b&&b.messageContentType&&(a?a["X-WebChannel-Content-Type"]=b.messageContentType:a={"X-WebChannel-Content-Type":b.messageContentType}),b&&b.ya&&(a?a["X-WebChannel-Client-Profile"]=b.ya:a={"X-WebChannel-Client-Profile":b.ya}),this.g.S=a,(a=b&&b.Yb)&&!I(a)&&(this.g.o=a),this.A=b&&b.supportsCrossDomainXhr||!1,this.v=b&&b.sendRawJson||!1,(b=b&&b.httpSessionIdParam)&&!I(b)&&(this.g.D=b,null!==(a=this.h)&&b in a&&b in(a=this.h)&&delete a[b]),this.j=new cM(this)}function cK(a){bb.call(this);var b=a.__sm__;if(b){a:{for(let c in b){a=c;break a}a=void 0}(this.i=a)&&(a=this.i,b=null!==b&&a in b?b[a]:void 0),this.data=b}else this.data=a}function cL(){bc.call(this),this.status=1}function cM(a){this.g=a}(l=ca.prototype).Ka=function(a){this.L=a},l.da=function(a,b,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+a);b=b?b.toUpperCase():"GET",this.H=a,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():i.g(),this.C=this.u?a8(this.u):a8(i),this.g.onreadystatechange=z(this.Ha,this);try{this.F=!0,this.g.open(b,String(a),!0),this.F=!1}catch(e){ce(this,e);return}if(a=c||"",c=new Map(this.headers),d){if(Object.getPrototypeOf(d)===Object.prototype)for(var g in d)c.set(g,d[g]);else if("function"==typeof d.keys&&"function"==typeof d.get)for(let h of d.keys())c.set(h,d.get(h));else throw Error("Unknown input type for opt_headers: "+String(d))}for(let[j,k]of(d=Array.from(c.keys()).find(a=>"content-type"==a.toLowerCase()),g=t.FormData&&a instanceof t.FormData,!(0<=D(cd,b))||d||g||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),c))this.g.setRequestHeader(j,k);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{var l;ci(this),0<this.B&&((this.K=(l=this.g,P&&function(a){var b=Z;return Object.prototype.hasOwnProperty.call(b,9)?b[9]:b[9]=a(9)}(function(){let a=0,b=J(String(f)).split("."),c=J("9").split("."),d=Math.max(b.length,c.length);for(let e=0;0==a&&e<d;e++){var g=b[e]||"",h=c[e]||"";do{if(g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""],h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""],0==g[0].length&&0==h[0].length)break;a=K(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||K(0==g[2].length,0==h[2].length)||K(g[2],h[2]),g=g[3],h=h[3]}while(0==a)}return 0<=a})&&"number"==typeof l.timeout&& void 0!==l.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=z(this.qa,this)):this.A=aO(this.qa,this.B,this)),this.v=!0,this.g.send(a),this.v=!1}catch(m){ce(this,m)}},l.qa=function(){void 0!==s&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,aA(this,"timeout"),this.abort(8))},l.abort=function(a){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=a||7,aA(this,"complete"),aA(this,"abort"),ch(this))},l.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ch(this,!0)),ca.X.M.call(this)},l.Ha=function(){this.s||(this.F||this.v||this.l?cg(this):this.fb())},l.fb=function(){cg(this)},l.aa=function(){try{return 2<cj(this)?this.g.status:-1}catch(a){return -1}},l.fa=function(){try{return this.g?this.g.responseText:""}catch(a){return""}},l.Sa=function(a){if(this.g){var b=this.g.responseText;return a&&0==b.indexOf(a)&&(b=b.substring(a.length)),b9(b)}},l.Ea=function(){return this.m},l.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(l=co.prototype).ma=8,l.G=1,l.Ja=function(a){if(this.m){if(this.m=null,1==this.G){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;let b=new be(this,this.j,a,void 0),c=this.s;if(this.S&&(c?ai(c=ag(c),this.S):c=this.S),null!==this.o||this.N||(b.H=c,c=null),this.O)a:{for(var d=0,e=0;e<this.i.length;e++){b:{var f=this.i[e];if("__data__"in f.g&&"string"==typeof(f=f.g.__data__)){f=f.length;break b}f=void 0}if(void 0===f)break;if(4096<(d+=f)){d=e;break a}if(4096===d||e===this.i.length-1){d=e+1;break a}}d=1e3}else d=1e3;d=cv(this,b,d),e=bx(this.F),bB(e,"RID",a),bB(e,"CVER",22),this.D&&bB(e,"X-HTTP-Session-Id",this.D),cu(this,e),c&&(this.N?d="headers="+encodeURIComponent(String(cl(c)))+"&"+d:this.o&&cm(e,this.o,c)),bY(this.h,b),this.Ya&&bB(e,"TYPE","init"),this.O?(bB(e,"$req",d),bB(e,"SID","null"),b.Z=!0,bj(b,e,null)):bj(b,e,d),this.G=2}}else 3==this.G&&(a?ct(this,a):0==this.i.length||bV(this.h)||ct(this))}},l.Ia=function(){if(this.u=null,cz(this),this.$&&!(this.K||null==this.g||0>=this.P)){var a=2*this.P;this.j.info("BP detection timer enabled: "+a),this.B=a4(z(this.eb,this),a)}},l.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,a2(10),cq(this),cz(this))},l.cb=function(){null!=this.v&&(this.v=null,cq(this),cx(this),a2(19))},l.kb=function(a){a?(this.j.info("Successfully pinged google.com"),a2(2)):(this.j.info("Failed to ping google.com"),a2(1))},(l=cH.prototype).xa=function(){},l.wa=function(){},l.va=function(){},l.ua=function(){},l.Ra=function(){},cI.prototype.g=function(a,b){return new cJ(a,b)},B(cJ,az),cJ.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var a=this.g,b=this.l,c=this.h||void 0;a2(0),a.V=b,a.ia=c||{},a.L=a.Y,a.F=cF(a,null,a.V),cs(a)},cJ.prototype.close=function(){cp(this.g)},cJ.prototype.u=function(a){var b=this.g;if("string"==typeof a){var c={};c.__data__=a,a=c}else this.v&&((c={}).__data__=aC(a),a=c);b.i.push(new bS(b.ab++,a)),3==b.G&&cs(b)},cJ.prototype.M=function(){this.g.l=null,delete this.j,cp(this.g),delete this.g,cJ.X.M.call(this)},B(cK,bb),B(cL,bc),B(cM,cH),cM.prototype.xa=function(){aA(this.g,"a")},cM.prototype.wa=function(a){aA(this.g,new cK(a))},cM.prototype.va=function(a){aA(this.g,new cL)},cM.prototype.ua=function(){aA(this.g,"b")},cI.prototype.createWebChannel=cI.prototype.g,cJ.prototype.send=cJ.prototype.u,cJ.prototype.open=cJ.prototype.m,cJ.prototype.close=cJ.prototype.close,a5.NO_ERROR=0,a5.TIMEOUT=8,a5.HTTP_ERROR=6,a6.COMPLETE="complete",a9.EventType=ba,ba.OPEN="a",ba.CLOSE="b",ba.ERROR="c",ba.MESSAGE="d",az.prototype.listen=az.prototype.N,ca.prototype.listenOnce=ca.prototype.O,ca.prototype.getLastError=ca.prototype.Oa,ca.prototype.getLastErrorCode=ca.prototype.Ea,ca.prototype.getStatus=ca.prototype.aa,ca.prototype.getResponseJson=ca.prototype.Sa,ca.prototype.getResponseText=ca.prototype.fa,ca.prototype.send=ca.prototype.da,ca.prototype.setWithCredentials=ca.prototype.Ka;var cN=r.createWebChannelTransport=function(){return new cI},cO=r.getStatEventTarget=function(){return a$()},cP=r.ErrorCode=a5,cQ=r.EventType=a6,cR=r.Event=aY,cS=r.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},cT=r.FetchXmlHttpFactory=b3,cU=r.WebChannel=a9,cV=r.XhrIo=ca,cW=c(3454);let cX="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Simple wrapper around a nullable UID. Mostly exists to make code more
 * readable.
 */ class cY{constructor(a){this.uid=a}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(a){return a.uid===this.uid}}cY.UNAUTHENTICATED=new cY(null),cY.GOOGLE_CREDENTIALS=new cY("google-credentials-uid"),cY.FIRST_PARTY=new cY("first-party-uid"),cY.MOCK_USER=new cY("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let cZ="9.13.0",c$=new o.Yd("@firebase/firestore");function c_(){return c$.logLevel}function c0(a,...b){if(c$.logLevel<=o.in.DEBUG){let c=b.map(c3);c$.debug(`Firestore (${cZ}): ${a}`,...c)}}function c1(a,...b){if(c$.logLevel<=o.in.ERROR){let c=b.map(c3);c$.error(`Firestore (${cZ}): ${a}`,...c)}}function c2(a,...b){if(c$.logLevel<=o.in.WARN){let c=b.map(c3);c$.warn(`Firestore (${cZ}): ${a}`,...c)}}function c3(a){var b;if("string"==typeof a)return a;try{return b=a,JSON.stringify(b)}catch(c){return a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */ function c4(a="Unexpected state"){let b=`FIRESTORE (${cZ}) INTERNAL ASSERTION FAILED: `+a;throw c1(b),Error(b)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let c5={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class c6 extends p.ZR{constructor(a,b){super(a,b),this.code=a,this.message=b,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class c7{constructor(){this.promise=new Promise((a,b)=>{this.resolve=a,this.reject=b})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class c8{constructor(a,b){this.user=b,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${a}`)}}class c9{getToken(){return Promise.resolve(null)}invalidateToken(){}start(a,b){a.enqueueRetryable(()=>b(cY.UNAUTHENTICATED))}shutdown(){}}class da{constructor(a){this.token=a,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(a,b){this.changeListener=b,a.enqueueRetryable(()=>b(this.token.user))}shutdown(){this.changeListener=null}}class db{constructor(a){this.t=a,this.currentUser=cY.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(a,b){let c=this.i,d=a=>this.i!==c?(c=this.i,b(a)):Promise.resolve(),e=new c7;this.o=()=>{this.i++,this.currentUser=this.u(),e.resolve(),e=new c7,a.enqueueRetryable(()=>d(this.currentUser))};let f=()=>{let b=e;a.enqueueRetryable(async()=>{await b.promise,await d(this.currentUser)})},g=a=>{c0("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),f()};this.t.onInit(a=>g(a)),setTimeout(()=>{if(!this.auth){let a=this.t.getImmediate({optional:!0});a?g(a):(c0("FirebaseAuthCredentialsProvider","Auth not yet detected"),e.resolve(),e=new c7)}},0),f()}getToken(){let a=this.i,b=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(b).then(b=>{var c;return this.i!==a?(c0("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):b?("string"==typeof b.accessToken||c4(),new c8(b.accessToken,this.currentUser)):null}):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){var a;let b=this.auth&&this.auth.getUid();return null===b||"string"==typeof b||c4(),new cY(b)}}class dc{constructor(a,b,c,d){this.h=a,this.l=b,this.m=c,this.g=d,this.type="FirstParty",this.user=cY.FIRST_PARTY,this.p=new Map}I(){var a;return this.g?this.g():(("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)&&c4(),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);let a=this.I();return a&&this.p.set("Authorization",a),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class dd{constructor(a,b,c,d){this.h=a,this.l=b,this.m=c,this.g=d}getToken(){return Promise.resolve(new dc(this.h,this.l,this.m,this.g))}start(a,b){a.enqueueRetryable(()=>b(cY.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class de{constructor(a){this.value=a,this.type="AppCheck",this.headers=new Map,a&&a.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class df{constructor(a){this.T=a,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(a,b){let c=a=>{null!=a.error&&c0("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);let c=a.token!==this.A;return this.A=a.token,c0("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?b(a.token):Promise.resolve()};this.o=b=>{a.enqueueRetryable(()=>c(b))};let d=a=>{c0("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.appCheck.addTokenListener(this.o)};this.T.onInit(a=>d(a)),setTimeout(()=>{if(!this.appCheck){let a=this.T.getImmediate({optional:!0});a?d(a):c0("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let a=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(a).then(a=>{var b;return a?("string"==typeof a.token||c4(),this.A=a.token,new de(a.token)):null}):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * Builds a CredentialsProvider depending on the type of
 * the credentials passed in.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Generates `nBytes` of random bytes.
 *
 * If `nBytes < 0` , an error will be thrown.
 */ function dg(a){let b="undefined"!=typeof self&&(self.crypto||self.msCrypto),c=new Uint8Array(a);if(b&&"function"==typeof b.getRandomValues)b.getRandomValues(c);else for(let d=0;d<a;d++)c[d]=Math.floor(256*Math.random());return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dh{static R(){let a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",b=Math.floor(256/a.length)*a.length,c="";for(;c.length<20;){let d=dg(40);for(let e=0;e<d.length;++e)c.length<20&&d[e]<b&&(c+=a.charAt(d[e]%a.length))}return c}}function di(a,b){return a<b?-1:a>b?1:0}function dj(a,b,c){return a.length===b.length&&a.every((a,d)=>c(a,b[d]))}function dk(a){return a+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // The earliest date supported by Firestore timestamps (0001-01-01T00:00:00Z).
/**
 * A `Timestamp` represents a point in time independent of any time zone or
 * calendar, represented as seconds and fractions of seconds at nanosecond
 * resolution in UTC Epoch time.
 *
 * It is encoded using the Proleptic Gregorian Calendar which extends the
 * Gregorian calendar backwards to year one. It is encoded assuming all minutes
 * are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
 * table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
 * 9999-12-31T23:59:59.999999999Z.
 *
 * For examples and further specifications, refer to the
 * {@link https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto | Timestamp definition}.
 */ class dl{constructor(a,b){if(this.seconds=a,this.nanoseconds=b,b<0||b>=1e9)throw new c6(c5.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+b);if(a< -62135596800||a>=253402300800)throw new c6(c5.INVALID_ARGUMENT,"Timestamp seconds out of range: "+a)}static now(){return dl.fromMillis(Date.now())}static fromDate(a){return dl.fromMillis(a.getTime())}static fromMillis(a){let b=Math.floor(a/1e3);return new dl(b,Math.floor(1e6*(a-1e3*b)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(a){return this.seconds===a.seconds?di(this.nanoseconds,a.nanoseconds):di(this.seconds,a.seconds)}isEqual(a){return a.seconds===this.seconds&&a.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let a=this.seconds- -62135596800;return String(a).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A version of a document in Firestore. This corresponds to the version
 * timestamp, such as update_time or read_time.
 */ class dm{constructor(a){this.timestamp=a}static fromTimestamp(a){return new dm(a)}static min(){return new dm(new dl(0,0))}static max(){return new dm(new dl(253402300799,999999999))}compareTo(a){return this.timestamp._compareTo(a.timestamp)}isEqual(a){return this.timestamp.isEqual(a.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Path represents an ordered sequence of string segments.
 */ class dn{constructor(a,b,c){void 0===b?b=0:b>a.length&&c4(),void 0===c?c=a.length-b:c>a.length-b&&c4(),this.segments=a,this.offset=b,this.len=c}get length(){return this.len}isEqual(a){return 0===dn.comparator(this,a)}child(a){let b=this.segments.slice(this.offset,this.limit());return a instanceof dn?a.forEach(a=>{b.push(a)}):b.push(a),this.construct(b)}limit(){return this.offset+this.length}popFirst(a){return a=void 0===a?1:a,this.construct(this.segments,this.offset+a,this.length-a)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(a){return this.segments[this.offset+a]}isEmpty(){return 0===this.length}isPrefixOf(a){if(a.length<this.length)return!1;for(let b=0;b<this.length;b++)if(this.get(b)!==a.get(b))return!1;return!0}isImmediateParentOf(a){if(this.length+1!==a.length)return!1;for(let b=0;b<this.length;b++)if(this.get(b)!==a.get(b))return!1;return!0}forEach(a){for(let b=this.offset,c=this.limit();b<c;b++)a(this.segments[b])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(a,b){let c=Math.min(a.length,b.length);for(let d=0;d<c;d++){let e=a.get(d),f=b.get(d);if(e<f)return -1;if(e>f)return 1}return a.length<b.length?-1:a.length>b.length?1:0}}class dp extends dn{construct(a,b,c){return new dp(a,b,c)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...a){let b=[];for(let c of a){if(c.indexOf("//")>=0)throw new c6(c5.INVALID_ARGUMENT,`Invalid segment (${c}). Paths must not contain // in them.`);b.push(...c.split("/").filter(a=>a.length>0))}return new dp(b)}static emptyPath(){return new dp([])}}let dq=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dr extends dn{construct(a,b,c){return new dr(a,b,c)}static isValidIdentifier(a){return dq.test(a)}canonicalString(){return this.toArray().map(a=>(a=a.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dr.isValidIdentifier(a)||(a="`"+a+"`"),a)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new dr(["__name__"])}static fromServerFormat(a){let b=[],c="",d=0,e=()=>{if(0===c.length)throw new c6(c5.INVALID_ARGUMENT,`Invalid field path (${a}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);b.push(c),c=""},f=!1;for(;d<a.length;){let g=a[d];if("\\"===g){if(d+1===a.length)throw new c6(c5.INVALID_ARGUMENT,"Path has trailing escape character: "+a);let h=a[d+1];if("\\"!==h&&"."!==h&&"`"!==h)throw new c6(c5.INVALID_ARGUMENT,"Path has invalid escape sequence: "+a);c+=h,d+=2}else"`"===g?(f=!f,d++):"."!==g||f?(c+=g,d++):(e(),d++)}if(e(),f)throw new c6(c5.INVALID_ARGUMENT,"Unterminated ` in path: "+a);return new dr(b)}static emptyPath(){return new dr([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @internal
 */ class ds{constructor(a){this.path=a}static fromPath(a){return new ds(dp.fromString(a))}static fromName(a){return new ds(dp.fromString(a).popFirst(5))}static empty(){return new ds(dp.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(a){return this.path.length>=2&&this.path.get(this.path.length-2)===a}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(a){return null!==a&&0===dp.comparator(this.path,a.path)}toString(){return this.path.toString()}static comparator(a,b){return dp.comparator(a.path,b.path)}static isDocumentKey(a){return a.length%2==0}static fromSegments(a){return new ds(new dp(a.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The initial mutation batch id for each index. Gets updated during index
 * backfill.
 */ /**
 * An index definition for field indexes in Firestore.
 *
 * Every index is associated with a collection. The definition contains a list
 * of fields and their index kind (which can be `ASCENDING`, `DESCENDING` or
 * `CONTAINS` for ArrayContains/ArrayContainsAny queries).
 *
 * Unlike the backend, the SDK does not differentiate between collection or
 * collection group-scoped indices. Every index can be used for both single
 * collection and collection group queries.
 */ class dt{constructor(a,b,c,d){this.indexId=a,this.collectionGroup=b,this.fields=c,this.indexState=d}}function du(a){return a.fields.find(a=>2===a.kind)}function dv(a){return a.fields.filter(a=>2!==a.kind)}dt.UNKNOWN_ID=-1;class dw{constructor(a,b){this.fieldPath=a,this.kind=b}}function dx(a,b){let c=dr.comparator(a.fieldPath,b.fieldPath);return 0!==c?c:di(a.kind,b.kind)}class dy{constructor(a,b){this.sequenceNumber=a,this.offset=b}static empty(){return new dy(0,dB.min())}}function dz(a,b){let c=a.toTimestamp().seconds,d=a.toTimestamp().nanoseconds+1,e=dm.fromTimestamp(1e9===d?new dl(c+1,0):new dl(c,d));return new dB(e,ds.empty(),b)}function dA(a){return new dB(a.readTime,a.key,-1)}class dB{constructor(a,b,c){this.readTime=a,this.documentKey=b,this.largestBatchId=c}static min(){return new dB(dm.min(),ds.empty(),-1)}static max(){return new dB(dm.max(),ds.empty(),-1)}}function dC(a,b){let c=a.readTime.compareTo(b.readTime);return 0!==c?c:0!==(c=ds.comparator(a.documentKey,b.documentKey))?c:di(a.largestBatchId,b.largestBatchId)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let dD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(a){this.onCommittedListeners.push(a)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(a=>a())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err - An error returned by a LocalStore operation.
 * @returns A Promise that resolves after we recovered, or the original error.
 */ async function dF(a){if(a.code!==c5.FAILED_PRECONDITION||a.message!==dD)throw a;c0("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * PersistencePromise is essentially a re-implementation of Promise except
 * it has a .next() method instead of .then() and .next() and .catch() callbacks
 * are executed synchronously when a PersistencePromise resolves rather than
 * asynchronously (Promise implementations use setImmediate() or similar).
 *
 * This is necessary to interoperate with IndexedDB which will automatically
 * commit transactions if control is returned to the event loop without
 * synchronously initiating another operation on the transaction.
 *
 * NOTE: .then() and .catch() only allow a single consumer, unlike normal
 * Promises.
 */ class dG{constructor(a){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,a(a=>{this.isDone=!0,this.result=a,this.nextCallback&&this.nextCallback(a)},a=>{this.isDone=!0,this.error=a,this.catchCallback&&this.catchCallback(a)})}catch(a){return this.next(void 0,a)}next(a,b){return this.callbackAttached&&c4(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(b,this.error):this.wrapSuccess(a,this.result):new dG((c,d)=>{this.nextCallback=b=>{this.wrapSuccess(a,b).next(c,d)},this.catchCallback=a=>{this.wrapFailure(b,a).next(c,d)}})}toPromise(){return new Promise((a,b)=>{this.next(a,b)})}wrapUserFunction(a){try{let b=a();return b instanceof dG?b:dG.resolve(b)}catch(c){return dG.reject(c)}}wrapSuccess(a,b){return a?this.wrapUserFunction(()=>a(b)):dG.resolve(b)}wrapFailure(a,b){return a?this.wrapUserFunction(()=>a(b)):dG.reject(b)}static resolve(a){return new dG((b,c)=>{b(a)})}static reject(a){return new dG((b,c)=>{c(a)})}static waitFor(a){return new dG((b,c)=>{let d=0,e=0,f=!1;a.forEach(a=>{++d,a.next(()=>{++e,f&&e===d&&b()},a=>c(a))}),f=!0,e===d&&b()})}static or(a){let b=dG.resolve(!1);for(let c of a)b=b.next(a=>a?dG.resolve(a):c());return b}static forEach(a,b){let c=[];return a.forEach((a,d)=>{c.push(b.call(this,a,d))}),this.waitFor(c)}static mapArray(a,b){return new dG((c,d)=>{let e=a.length,f=Array(e),g=0;for(let h=0;h<e;h++){let i=h;b(a[i]).next(a=>{f[i]=a,++g===e&&c(f)},a=>d(a))}})}static doWhile(a,b){return new dG((c,d)=>{let e=()=>{!0===a()?b().next(()=>{e()},d):c()};e()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // References to `window` are guarded by SimpleDb.isAvailable()
/* eslint-disable no-restricted-globals */ /**
 * Wraps an IDBTransaction and exposes a store() method to get a handle to a
 * specific object store.
 */ class dH{constructor(a,b){this.action=a,this.transaction=b,this.aborted=!1,this.P=new c7,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{b.error?this.P.reject(new dK(a,b.error)):this.P.resolve()},this.transaction.onerror=b=>{let c=dP(b.target.error);this.P.reject(new dK(a,c))}}static open(a,b,c,d){try{return new dH(b,a.transaction(d,c))}catch(e){throw new dK(b,e)}}get v(){return this.P.promise}abort(a){a&&this.P.reject(a),this.aborted||(c0("SimpleDb","Aborting transaction:",a?a.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){let a=this.transaction;this.aborted||"function"!=typeof a.commit||a.commit()}store(a){let b=this.transaction.objectStore(a);return new dM(b)}}class dI{constructor(a,b,c){this.name=a,this.version=b,this.S=c,12.2===dI.D(getUA())&&c1("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(a){return c0("SimpleDb","Removing database:",a),dN(window.indexedDB.deleteDatabase(a)).toPromise()}static C(){if(!isIndexedDBAvailable())return!1;if(dI.N())return!0;let a=getUA(),b=dI.D(a),c=0<b&&b<10,d=dI.k(a),e=0<d&&d<4.5;return!(a.indexOf("MSIE ")>0||a.indexOf("Trident/")>0||a.indexOf("Edge/")>0||c||e)}static N(){var a;return void 0!==cW&&"YES"===(null===(a=cW.env)|| void 0===a?void 0:a.O)}static M(a,b){return a.store(b)}static D(a){let b=a.match(/i(?:phone|pad|pod) os ([\d_]+)/i),c=b?b[1].split("_").slice(0,2).join("."):"-1";return Number(c)}static k(a){let b=a.match(/Android ([\d.]+)/i),c=b?b[1].split(".").slice(0,2).join("."):"-1";return Number(c)}async F(a){return this.db||(c0("SimpleDb","Opening database:",this.name),this.db=await new Promise((b,c)=>{let d=indexedDB.open(this.name,this.version);d.onsuccess=a=>{let c=a.target.result;b(c)},d.onblocked=()=>{c(new dK(a,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},d.onerror=b=>{let d=b.target.error;"VersionError"===d.name?c(new c6(c5.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===d.name?c(new c6(c5.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+d)):c(new dK(a,d))},d.onupgradeneeded=a=>{c0("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',a.oldVersion);let b=a.target.result;this.S.$(b,d.transaction,a.oldVersion,this.version).next(()=>{c0("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=a=>this.B(a)),this.db}L(a){this.B=a,this.db&&(this.db.onversionchange=b=>a(b))}async runTransaction(a,b,c,d){let e="readonly"===b,f=0;for(;;){++f;try{this.db=await this.F(a);let g=dH.open(this.db,a,e?"readonly":"readwrite",c),h=d(g).next(a=>(g.V(),a)).catch(a=>(g.abort(a),dG.reject(a))).toPromise();return h.catch(()=>{}),await g.v,h}catch(i){let j=i,k="FirebaseError"!==j.name&&f<3;if(c0("SimpleDb","Transaction failed with error:",j.message,"Retrying:",k),this.close(),!k)return Promise.reject(j)}}}close(){this.db&&this.db.close(),this.db=void 0}}class dJ{constructor(a){this.U=a,this.q=!1,this.K=null}get isDone(){return this.q}get G(){return this.K}set cursor(a){this.U=a}done(){this.q=!0}j(a){this.K=a}delete(){return dN(this.U.delete())}}class dK extends null{constructor(a,b){super(c5.UNAVAILABLE,`IndexedDB transaction '${a}' failed: ${b}`),this.name="IndexedDbTransactionError"}}function dL(a){return"IndexedDbTransactionError"===a.name}class dM{constructor(a){this.store=a}put(a,b){let c;return void 0!==b?(c0("SimpleDb","PUT",this.store.name,a,b),c=this.store.put(b,a)):(c0("SimpleDb","PUT",this.store.name,"<auto-key>",a),c=this.store.put(a)),dN(c)}add(a){return c0("SimpleDb","ADD",this.store.name,a,a),dN(this.store.add(a))}get(a){return dN(this.store.get(a)).next(b=>(void 0===b&&(b=null),c0("SimpleDb","GET",this.store.name,a,b),b))}delete(a){return c0("SimpleDb","DELETE",this.store.name,a),dN(this.store.delete(a))}count(){return c0("SimpleDb","COUNT",this.store.name),dN(this.store.count())}W(a,b){let c=this.options(a,b);if(c.index||"function"!=typeof this.store.getAll){let d=this.cursor(c),e=[];return this.H(d,(a,b)=>{e.push(b)}).next(()=>e)}{let f=this.store.getAll(c.range);return new dG((a,b)=>{f.onerror=a=>{b(a.target.error)},f.onsuccess=b=>{a(b.target.result)}})}}J(a,b){let c=this.store.getAll(a,null===b?void 0:b);return new dG((a,b)=>{c.onerror=a=>{b(a.target.error)},c.onsuccess=b=>{a(b.target.result)}})}Y(a,b){c0("SimpleDb","DELETE ALL",this.store.name);let c=this.options(a,b);c.X=!1;let d=this.cursor(c);return this.H(d,(a,b,c)=>c.delete())}Z(a,b){let c;b?c=a:(c={},b=a);let d=this.cursor(c);return this.H(d,b)}tt(a){let b=this.cursor({});return new dG((c,d)=>{b.onerror=a=>{let b=dP(a.target.error);d(b)},b.onsuccess=b=>{let d=b.target.result;d?a(d.primaryKey,d.value).next(a=>{a?d.continue():c()}):c()}})}H(a,b){let c=[];return new dG((d,e)=>{a.onerror=a=>{e(a.target.error)},a.onsuccess=a=>{let e=a.target.result;if(!e)return void d();let f=new dJ(e),g=b(e.primaryKey,e.value,f);if(g instanceof dG){let h=g.catch(a=>(f.done(),dG.reject(a)));c.push(h)}f.isDone?d():null===f.G?e.continue():e.continue(f.G)}}).next(()=>dG.waitFor(c))}options(a,b){let c;return void 0!==a&&("string"==typeof a?c=a:b=a),{index:c,range:b}}cursor(a){let b="next";if(a.reverse&&(b="prev"),a.index){let c=this.store.index(a.index);return a.X?c.openKeyCursor(a.range,b):c.openCursor(a.range,b)}return this.store.openCursor(a.range,b)}}function dN(a){return new dG((b,c)=>{a.onsuccess=a=>{let c=a.target.result;b(c)},a.onerror=a=>{let b=dP(a.target.error);c(b)}})}let dO=null;function dP(a){let b=dI.D(getUA());if(b>=12.2&&b<13){let c="An internal error was encountered in the Indexed Database server";if(a.message.indexOf(c)>=0){let d=new c6("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${c}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return dO||(dO=!0,setTimeout(()=>{throw d},0)),d}}return a}class dQ{constructor(a,b){this.asyncQueue=a,this.et=b,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}nt(a){c0("IndexBackiller",`Scheduled in ${a}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",a,async()=>{this.task=null;try{c0("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(a){dL(a)?c0("IndexBackiller","Ignoring IndexedDB error during index backfill: ",a):await dF(a)}await this.nt(6e4)})}}class dR{constructor(a,b){this.localStore=a,this.persistence=b}async st(a=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",b=>this.it(b,a))}it(a,b){let c=new Set,d=b,e=!0;return dG.doWhile(()=>!0===e&&d>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(a).next(b=>{if(null!==b&&!c.has(b))return c0("IndexBackiller",`Processing collection: ${b}`),this.rt(a,b,d).next(a=>{d-=a,c.add(b)});e=!1})).next(()=>b-d)}rt(a,b,c){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(a,b).next(d=>this.localStore.localDocuments.getNextDocuments(a,b,d,c).next(c=>{let e=c.changes;return this.localStore.indexManager.updateIndexEntries(a,e).next(()=>this.ot(d,c)).next(c=>(c0("IndexBackiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(a,b,c))).next(()=>e.size)}))}ot(a,b){let c=a;return b.changes.forEach((a,b)=>{let d=dA(b);dC(d,c)>0&&(c=d)}),new dB(c.readTime,c.documentKey,Math.max(b.batchId,a.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * `ListenSequence` is a monotonic sequence. It is initialized with a minimum value to
 * exceed. All subsequent calls to next will return increasing values. If provided with a
 * `SequenceNumberSyncer`, it will additionally bump its next value when told of a new value, as
 * well as write out sequence numbers that it produces via `next()`.
 */ class dS{constructor(a,b){this.previousValue=a,b&&(b.sequenceNumberHandler=a=>this.ut(a),this.ct=a=>b.writeSequenceNumber(a))}ut(a){return this.previousValue=Math.max(a,this.previousValue),this.previousValue}next(){let a=++this.previousValue;return this.ct&&this.ct(a),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function dT(a){let b=0;for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&b++;return b}function dU(a,b){for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])}function dV(a){for(let b in a)if(Object.prototype.hasOwnProperty.call(a,b))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
dS.at=-1;class dW{constructor(a,b){this.comparator=a,this.root=b||dY.EMPTY}insert(a,b){return new dW(this.comparator,this.root.insert(a,b,this.comparator).copy(null,null,dY.BLACK,null,null))}remove(a){return new dW(this.comparator,this.root.remove(a,this.comparator).copy(null,null,dY.BLACK,null,null))}get(a){let b=this.root;for(;!b.isEmpty();){let c=this.comparator(a,b.key);if(0===c)return b.value;c<0?b=b.left:c>0&&(b=b.right)}return null}indexOf(a){let b=0,c=this.root;for(;!c.isEmpty();){let d=this.comparator(a,c.key);if(0===d)return b+c.left.size;d<0?c=c.left:(b+=c.left.size+1,c=c.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(a){return this.root.inorderTraversal(a)}forEach(a){this.inorderTraversal((b,c)=>(a(b,c),!1))}toString(){let a=[];return this.inorderTraversal((b,c)=>(a.push(`${b}:${c}`),!1)),`{${a.join(", ")}}`}reverseTraversal(a){return this.root.reverseTraversal(a)}getIterator(){return new dX(this.root,null,this.comparator,!1)}getIteratorFrom(a){return new dX(this.root,a,this.comparator,!1)}getReverseIterator(){return new dX(this.root,null,this.comparator,!0)}getReverseIteratorFrom(a){return new dX(this.root,a,this.comparator,!0)}}class dX{constructor(a,b,c,d){this.isReverse=d,this.nodeStack=[];let e=1;for(;!a.isEmpty();)if(e=b?c(a.key,b):1,b&&d&&(e*=-1),e<0)a=this.isReverse?a.left:a.right;else{if(0===e){this.nodeStack.push(a);break}this.nodeStack.push(a),a=this.isReverse?a.right:a.left}}getNext(){let a=this.nodeStack.pop(),b={key:a.key,value:a.value};if(this.isReverse)for(a=a.left;!a.isEmpty();)this.nodeStack.push(a),a=a.right;else for(a=a.right;!a.isEmpty();)this.nodeStack.push(a),a=a.left;return b}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let a=this.nodeStack[this.nodeStack.length-1];return{key:a.key,value:a.value}}}class dY{constructor(a,b,c,d,e){this.key=a,this.value=b,this.color=null!=c?c:dY.RED,this.left=null!=d?d:dY.EMPTY,this.right=null!=e?e:dY.EMPTY,this.size=this.left.size+1+this.right.size}copy(a,b,c,d,e){return new dY(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)}isEmpty(){return!1}inorderTraversal(a){return this.left.inorderTraversal(a)||a(this.key,this.value)||this.right.inorderTraversal(a)}reverseTraversal(a){return this.right.reverseTraversal(a)||a(this.key,this.value)||this.left.reverseTraversal(a)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(a,b,c){let d=this,e=c(a,d.key);return(d=e<0?d.copy(null,null,null,d.left.insert(a,b,c),null):0===e?d.copy(null,b,null,null,null):d.copy(null,null,null,null,d.right.insert(a,b,c))).fixUp()}removeMin(){if(this.left.isEmpty())return dY.EMPTY;let a=this;return a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),(a=a.copy(null,null,null,a.left.removeMin(),null)).fixUp()}remove(a,b){let c,d=this;if(0>b(a,d.key))d.left.isEmpty()||d.left.isRed()||d.left.left.isRed()||(d=d.moveRedLeft()),d=d.copy(null,null,null,d.left.remove(a,b),null);else{if(d.left.isRed()&&(d=d.rotateRight()),d.right.isEmpty()||d.right.isRed()||d.right.left.isRed()||(d=d.moveRedRight()),0===b(a,d.key)){if(d.right.isEmpty())return dY.EMPTY;c=d.right.min(),d=d.copy(c.key,c.value,null,null,d.right.removeMin())}d=d.copy(null,null,null,null,d.right.remove(a,b))}return d.fixUp()}isRed(){return this.color}fixUp(){let a=this;return a.right.isRed()&&!a.left.isRed()&&(a=a.rotateLeft()),a.left.isRed()&&a.left.left.isRed()&&(a=a.rotateRight()),a.left.isRed()&&a.right.isRed()&&(a=a.colorFlip()),a}moveRedLeft(){let a=this.colorFlip();return a.right.left.isRed()&&(a=(a=(a=a.copy(null,null,null,null,a.right.rotateRight())).rotateLeft()).colorFlip()),a}moveRedRight(){let a=this.colorFlip();return a.left.left.isRed()&&(a=(a=a.rotateRight()).colorFlip()),a}rotateLeft(){let a=this.copy(null,null,dY.RED,null,this.right.left);return this.right.copy(null,null,this.color,a,null)}rotateRight(){let a=this.copy(null,null,dY.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,a)}colorFlip(){let a=this.left.copy(null,null,!this.left.color,null,null),b=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,a,b)}checkMaxDepth(){let a=this.check();return Math.pow(2,a)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw c4();let a=this.left.check();if(a!==this.right.check())throw c4();return a+(this.isRed()?0:1)}}dY.EMPTY=null,dY.RED=!0,dY.BLACK=!1,dY.EMPTY=new class{constructor(){this.size=0}get key(){throw c4()}get value(){throw c4()}get color(){throw c4()}get left(){throw c4()}get right(){throw c4()}copy(a,b,c,d,e){return this}insert(a,b,c){return new dY(a,b)}remove(a,b){return this}isEmpty(){return!0}inorderTraversal(a){return!1}reverseTraversal(a){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */ class dZ{constructor(a){this.comparator=a,this.data=new dW(this.comparator)}has(a){return null!==this.data.get(a)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(a){return this.data.indexOf(a)}forEach(a){this.data.inorderTraversal((b,c)=>(a(b),!1))}forEachInRange(a,b){let c=this.data.getIteratorFrom(a[0]);for(;c.hasNext();){let d=c.getNext();if(this.comparator(d.key,a[1])>=0)return;b(d.key)}}forEachWhile(a,b){let c;for(c=void 0!==b?this.data.getIteratorFrom(b):this.data.getIterator();c.hasNext();)if(!a(c.getNext().key))return}firstAfterOrEqual(a){let b=this.data.getIteratorFrom(a);return b.hasNext()?b.getNext().key:null}getIterator(){return new d$(this.data.getIterator())}getIteratorFrom(a){return new d$(this.data.getIteratorFrom(a))}add(a){return this.copy(this.data.remove(a).insert(a,!0))}delete(a){return this.has(a)?this.copy(this.data.remove(a)):this}isEmpty(){return this.data.isEmpty()}unionWith(a){let b=this;return b.size<a.size&&(b=a,a=this),a.forEach(a=>{b=b.add(a)}),b}isEqual(a){if(!(a instanceof dZ)||this.size!==a.size)return!1;let b=this.data.getIterator(),c=a.data.getIterator();for(;b.hasNext();){let d=b.getNext().key,e=c.getNext().key;if(0!==this.comparator(d,e))return!1}return!0}toArray(){let a=[];return this.forEach(b=>{a.push(b)}),a}toString(){let a=[];return this.forEach(b=>a.push(b)),"SortedSet("+a.toString()+")"}copy(a){let b=new dZ(this.comparator);return b.data=a,b}}class d${constructor(a){this.iter=a}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function d_(a){return a.hasNext()?a.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */ class d0{constructor(a){this.fields=a,a.sort(dr.comparator)}static empty(){return new d0([])}unionWith(a){let b=new dZ(dr.comparator);for(let c of this.fields)b=b.add(c);for(let d of a)b=b.add(d);return new d0(b.toArray())}covers(a){for(let b of this.fields)if(b.isPrefixOf(a))return!0;return!1}isEqual(a){return dj(this.fields,a.fields,(a,b)=>a.isEqual(b))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 * @internal
 */ class d1{constructor(a){this.binaryString=a}static fromBase64String(a){let b=atob(a);return new d1(b)}static fromUint8Array(a){let b=function(a){let b="";for(let c=0;c<a.length;++c)b+=String.fromCharCode(a[c]);return b}(a);return new d1(b)}[Symbol.iterator](){let a=0;return{next:()=>a<this.binaryString.length?{value:this.binaryString.charCodeAt(a++),done:!1}:{value:void 0,done:!0}}}toBase64(){var a;return btoa(this.binaryString)}toUint8Array(){return function(a){let b=new Uint8Array(a.length);for(let c=0;c<a.length;c++)b[c]=a.charCodeAt(c);return b}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(a){return di(this.binaryString,a.binaryString)}isEqual(a){return this.binaryString===a.binaryString}}d1.EMPTY_BYTE_STRING=new d1("");let d2=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function d3(a){var b,c;if(!a&&c4(),"string"==typeof a){let d=0,e=d2.exec(a);if(!e&&c4(),e[1]){let f=e[1];d=Number(f=(f+"000000000").substr(0,9))}let g=new Date(a);return{seconds:Math.floor(g.getTime()/1e3),nanos:d}}return{seconds:d4(a.seconds),nanos:d4(a.nanos)}}function d4(a){return"number"==typeof a?a:"string"==typeof a?Number(a):0}function d5(a){return"string"==typeof a?d1.fromBase64String(a):d1.fromUint8Array(a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   transform. They can only exist in the local view of a document. Therefore
 *   they do not need to be parsed or serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */ function d6(a){var b,c;return"server_timestamp"===(null===(c=((null===(b=null==a?void 0:a.mapValue)|| void 0===b?void 0:b.fields)||{}).__type__)|| void 0===c?void 0:c.stringValue)}function d7(a){let b=a.mapValue.fields.__previous_value__;return d6(b)?d7(b):b}function d8(a){let b=d3(a.mapValue.fields.__local_write_time__.timestampValue);return new dl(b.seconds,b.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class d9{constructor(a,b,c,d,e,f,g,h){this.databaseId=a,this.appId=b,this.persistenceKey=c,this.host=d,this.ssl=e,this.forceLongPolling=f,this.autoDetectLongPolling=g,this.useFetchStreams=h}}class ea{constructor(a,b){this.projectId=a,this.database=b||"(default)"}static empty(){return new ea("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(a){return a instanceof ea&&a.projectId===this.projectId&&a.database===this.database}}function eb(a){return null==a}function ec(a){return 0===a&&1/a== -1/0}function ed(a){return"number"==typeof a&&Number.isInteger(a)&&!ec(a)&&a<=Number.MAX_SAFE_INTEGER&&a>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ee={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},ef={nullValue:"NULL_VALUE"};function eg(a){return"nullValue"in a?0:"booleanValue"in a?1:"integerValue"in a||"doubleValue"in a?2:"timestampValue"in a?3:"stringValue"in a?5:"bytesValue"in a?6:"referenceValue"in a?7:"geoPointValue"in a?8:"arrayValue"in a?9:"mapValue"in a?d6(a)?4:et(a)?9007199254740991:10:c4()}function eh(a,b){var c,d,e,f;if(a===b)return!0;let g=eg(a);if(g!==eg(b))return!1;switch(g){case 0:case 9007199254740991:return!0;case 1:return a.booleanValue===b.booleanValue;case 4:return d8(a).isEqual(d8(b));case 3:return function(a,b){if("string"==typeof a.timestampValue&&"string"==typeof b.timestampValue&&a.timestampValue.length===b.timestampValue.length)return a.timestampValue===b.timestampValue;let c=d3(a.timestampValue),d=d3(b.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(a,b);case 5:return a.stringValue===b.stringValue;case 6:return c=a,d=b,d5(c.bytesValue).isEqual(d5(d.bytesValue));case 7:return a.referenceValue===b.referenceValue;case 8:return e=a,f=b,d4(e.geoPointValue.latitude)===d4(f.geoPointValue.latitude)&&d4(e.geoPointValue.longitude)===d4(f.geoPointValue.longitude);case 2:return function(a,b){if("integerValue"in a&&"integerValue"in b)return d4(a.integerValue)===d4(b.integerValue);if("doubleValue"in a&&"doubleValue"in b){let c=d4(a.doubleValue),d=d4(b.doubleValue);return c===d?ec(c)===ec(d):isNaN(c)&&isNaN(d)}return!1}(a,b);case 9:return dj(a.arrayValue.values||[],b.arrayValue.values||[],eh);case 10:return function(a,b){let c=a.mapValue.fields||{},d=b.mapValue.fields||{};if(dT(c)!==dT(d))return!1;for(let e in c)if(c.hasOwnProperty(e)&&(void 0===d[e]||!eh(c[e],d[e])))return!1;return!0}(a,b);default:return c4()}}function ei(a,b){return void 0!==(a.values||[]).find(a=>eh(a,b))}function ej(a,b){if(a===b)return 0;let c=eg(a),d=eg(b);if(c!==d)return di(c,d);switch(c){case 0:case 9007199254740991:return 0;case 1:return di(a.booleanValue,b.booleanValue);case 2:return function(a,b){let c=d4(a.integerValue||a.doubleValue),d=d4(b.integerValue||b.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1}(a,b);case 3:return ek(a.timestampValue,b.timestampValue);case 4:return ek(d8(a),d8(b));case 5:return di(a.stringValue,b.stringValue);case 6:return function(a,b){let c=d5(a),d=d5(b);return c.compareTo(d)}(a.bytesValue,b.bytesValue);case 7:return function(a,b){let c=a.split("/"),d=b.split("/");for(let e=0;e<c.length&&e<d.length;e++){let f=di(c[e],d[e]);if(0!==f)return f}return di(c.length,d.length)}(a.referenceValue,b.referenceValue);case 8:return function(a,b){let c=di(d4(a.latitude),d4(b.latitude));return 0!==c?c:di(d4(a.longitude),d4(b.longitude))}(a.geoPointValue,b.geoPointValue);case 9:return function(a,b){let c=a.values||[],d=b.values||[];for(let e=0;e<c.length&&e<d.length;++e){let f=ej(c[e],d[e]);if(f)return f}return di(c.length,d.length)}(a.arrayValue,b.arrayValue);case 10:return function(a,b){if(a===ee.mapValue&&b===ee.mapValue)return 0;if(a===ee.mapValue)return 1;if(b===ee.mapValue)return -1;let c=a.fields||{},d=Object.keys(c),e=b.fields||{},f=Object.keys(e);d.sort(),f.sort();for(let g=0;g<d.length&&g<f.length;++g){let h=di(d[g],f[g]);if(0!==h)return h;let i=ej(c[d[g]],e[f[g]]);if(0!==i)return i}return di(d.length,f.length)}(a.mapValue,b.mapValue);default:throw c4()}}function ek(a,b){if("string"==typeof a&&"string"==typeof b&&a.length===b.length)return di(a,b);let c=d3(a),d=d3(b),e=di(c.seconds,d.seconds);return 0!==e?e:di(c.nanos,d.nanos)}function el(a){var b,c;return"nullValue"in a?"null":"booleanValue"in a?""+a.booleanValue:"integerValue"in a?""+a.integerValue:"doubleValue"in a?""+a.doubleValue:"timestampValue"in a?function(a){let b=d3(a);return`time(${b.seconds},${b.nanos})`}(a.timestampValue):"stringValue"in a?a.stringValue:"bytesValue"in a?d5(a.bytesValue).toBase64():"referenceValue"in a?(c=a.referenceValue,ds.fromName(c).toString()):"geoPointValue"in a?`geo(${(b=a.geoPointValue).latitude},${b.longitude})`:"arrayValue"in a?function(a){let b="[",c=!0;for(let d of a.values||[])c?c=!1:b+=",",b+=el(d);return b+"]"}(a.arrayValue):"mapValue"in a?function(a){let b=Object.keys(a.fields||{}).sort(),c="{",d=!0;for(let e of b)d?d=!1:c+=",",c+=`${e}:${el(a.fields[e])}`;return c+"}"}(a.mapValue):c4()}function em(a,b){return{referenceValue:`projects/${a.projectId}/databases/${a.database}/documents/${b.path.canonicalString()}`}}function en(a){return!!a&&"integerValue"in a}function eo(a){return!!a&&"arrayValue"in a}function ep(a){return!!a&&"nullValue"in a}function eq(a){return!!a&&"doubleValue"in a&&isNaN(Number(a.doubleValue))}function er(a){return!!a&&"mapValue"in a}function es(a){if(a.geoPointValue)return{geoPointValue:Object.assign({},a.geoPointValue)};if(a.timestampValue&&"object"==typeof a.timestampValue)return{timestampValue:Object.assign({},a.timestampValue)};if(a.mapValue){let b={mapValue:{fields:{}}};return dU(a.mapValue.fields,(a,c)=>b.mapValue.fields[a]=es(c)),b}if(a.arrayValue){let c={arrayValue:{values:[]}};for(let d=0;d<(a.arrayValue.values||[]).length;++d)c.arrayValue.values[d]=es(a.arrayValue.values[d]);return c}return Object.assign({},a)}function et(a){return"__max__"===(((a.mapValue||{}).fields||{}).__type__||{}).stringValue}function eu(a){return"nullValue"in a?ef:"booleanValue"in a?{booleanValue:!1}:"integerValue"in a||"doubleValue"in a?{doubleValue:NaN}:"timestampValue"in a?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in a?{stringValue:""}:"bytesValue"in a?{bytesValue:""}:"referenceValue"in a?em(ea.empty(),ds.empty()):"geoPointValue"in a?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in a?{arrayValue:{}}:"mapValue"in a?{mapValue:{}}:c4()}function ev(a){return"nullValue"in a?{booleanValue:!1}:"booleanValue"in a?{doubleValue:NaN}:"integerValue"in a||"doubleValue"in a?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in a?{stringValue:""}:"stringValue"in a?{bytesValue:""}:"bytesValue"in a?em(ea.empty(),ds.empty()):"referenceValue"in a?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in a?{arrayValue:{}}:"arrayValue"in a?{mapValue:{}}:"mapValue"in a?ee:c4()}function ew(a,b){let c=ej(a.value,b.value);return 0!==c?c:a.inclusive&&!b.inclusive?-1:!a.inclusive&&b.inclusive?1:0}function ex(a,b){let c=ej(a.value,b.value);return 0!==c?c:a.inclusive&&!b.inclusive?1:!a.inclusive&&b.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An ObjectValue represents a MapValue in the Firestore Proto and offers the
 * ability to add and remove fields (via the ObjectValueBuilder).
 */ class ey{constructor(a){this.value=a}static empty(){return new ey({mapValue:{}})}field(a){if(a.isEmpty())return this.value;{let b=this.value;for(let c=0;c<a.length-1;++c)if(!er(b=(b.mapValue.fields||{})[a.get(c)]))return null;return(b=(b.mapValue.fields||{})[a.lastSegment()])||null}}set(a,b){this.getFieldsMap(a.popLast())[a.lastSegment()]=es(b)}setAll(a){let b=dr.emptyPath(),c={},d=[];a.forEach((a,e)=>{if(!b.isImmediateParentOf(e)){let f=this.getFieldsMap(b);this.applyChanges(f,c,d),c={},d=[],b=e.popLast()}a?c[e.lastSegment()]=es(a):d.push(e.lastSegment())});let e=this.getFieldsMap(b);this.applyChanges(e,c,d)}delete(a){let b=this.field(a.popLast());er(b)&&b.mapValue.fields&&delete b.mapValue.fields[a.lastSegment()]}isEqual(a){return eh(this.value,a.value)}getFieldsMap(a){let b=this.value;b.mapValue.fields||(b.mapValue={fields:{}});for(let c=0;c<a.length;++c){let d=b.mapValue.fields[a.get(c)];er(d)&&d.mapValue.fields||(d={mapValue:{fields:{}}},b.mapValue.fields[a.get(c)]=d),b=d}return b.mapValue.fields}applyChanges(a,b,c){for(let d of(dU(b,(b,c)=>a[b]=c),c))delete a[d]}clone(){return new ey(es(this.value))}}function ez(a){let b=[];return dU(a.fields,(a,c)=>{let d=new dr([a]);if(er(c)){let e=ez(c.mapValue).fields;if(0===e.length)b.push(d);else for(let f of e)b.push(d.child(f))}else b.push(d)}),new d0(b)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a document in Firestore with a key, version, data and whether it
 * has local mutations applied to it.
 *
 * Documents can transition between states via `convertToFoundDocument()`,
 * `convertToNoDocument()` and `convertToUnknownDocument()`. If a document does
 * not transition to one of these states even after all mutations have been
 * applied, `isValidDocument()` returns false and the document should be removed
 * from all views.
 */ class eA{constructor(a,b,c,d,e,f){this.key=a,this.documentType=b,this.version=c,this.readTime=d,this.data=e,this.documentState=f}static newInvalidDocument(a){return new eA(a,0,dm.min(),dm.min(),ey.empty(),0)}static newFoundDocument(a,b,c){return new eA(a,1,b,dm.min(),c,0)}static newNoDocument(a,b){return new eA(a,2,b,dm.min(),ey.empty(),0)}static newUnknownDocument(a,b){return new eA(a,3,b,dm.min(),ey.empty(),2)}convertToFoundDocument(a,b){return this.version=a,this.documentType=1,this.data=b,this.documentState=0,this}convertToNoDocument(a){return this.version=a,this.documentType=2,this.data=ey.empty(),this.documentState=0,this}convertToUnknownDocument(a){return this.version=a,this.documentType=3,this.data=ey.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=dm.min(),this}setReadTime(a){return this.readTime=a,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(a){return a instanceof eA&&this.key.isEqual(a.key)&&this.version.isEqual(a.version)&&this.documentType===a.documentType&&this.documentState===a.documentState&&this.data.isEqual(a.data)}mutableCopy(){return new eA(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * Compares the value for field `field` in the provided documents. Throws if
 * the field does not exist in both documents.
 */ /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Visible for testing
class eB{constructor(a,b=null,c=[],d=[],e=null,f=null,g=null){this.path=a,this.collectionGroup=b,this.orderBy=c,this.filters=d,this.limit=e,this.startAt=f,this.endAt=g,this.ht=null}}function eC(a,b=null,c=[],d=[],e=null,f=null,g=null){return new eB(a,b,c,d,e,f,g)}function eD(a){var b;let c=b=a;if(null===c.ht){let d=c.path.canonicalString();null!==c.collectionGroup&&(d+="|cg:"+c.collectionGroup),d+="|f:",d+=c.filters.map(a=>{var b,c;return(b=a).field.canonicalString()+b.op.toString()+el(c=b.value)}).join(","),d+="|ob:",d+=c.orderBy.map(a=>{var b;return(b=a).field.canonicalString()+b.dir}).join(","),eb(c.limit)||(d+="|l:",d+=c.limit),c.startAt&&(d+="|lb:",d+=c.startAt.inclusive?"b:":"a:",d+=c.startAt.position.map(a=>{var b;return el(b=a)}).join(",")),c.endAt&&(d+="|ub:",d+=c.endAt.inclusive?"a:":"b:",d+=c.endAt.position.map(a=>{var b;return el(b=a)}).join(",")),c.ht=d}return c.ht}function eE(a,b){var c,d;if(a.limit!==b.limit||a.orderBy.length!==b.orderBy.length)return!1;for(let e=0;e<a.orderBy.length;e++)if(!eU(a.orderBy[e],b.orderBy[e]))return!1;if(a.filters.length!==b.filters.length)return!1;for(let f=0;f<a.filters.length;f++)if(c=a.filters[f],d=b.filters[f],c.op!==d.op||!c.field.isEqual(d.field)||!eh(c.value,d.value))return!1;return a.collectionGroup===b.collectionGroup&&!!a.path.isEqual(b.path)&&!!eW(a.startAt,b.startAt)&&eW(a.endAt,b.endAt)}function eF(a){return ds.isDocumentKey(a.path)&&null===a.collectionGroup&&0===a.filters.length}function eG(a,b){return a.filters.filter(a=>a instanceof eJ&&a.field.isEqual(b))}function eH(a,b,c){let d=ef,e=!0;for(let f of eG(a,b)){let g=ef,h=!0;switch(f.op){case"<":case"<=":g=eu(f.value);break;case"==":case"in":case">=":g=f.value;break;case">":g=f.value,h=!1;break;case"!=":case"not-in":g=ef}0>ew({value:d,inclusive:e},{value:g,inclusive:h})&&(d=g,e=h)}if(null!==c){for(let i=0;i<a.orderBy.length;++i)if(a.orderBy[i].field.isEqual(b)){let j=c.position[i];0>ew({value:d,inclusive:e},{value:j,inclusive:c.inclusive})&&(d=j,e=c.inclusive);break}}return{value:d,inclusive:e}}function eI(a,b,c){let d=ee,e=!0;for(let f of eG(a,b)){let g=ee,h=!0;switch(f.op){case">=":case">":g=ev(f.value),h=!1;break;case"==":case"in":case"<=":g=f.value;break;case"<":g=f.value,h=!1;break;case"!=":case"not-in":g=ee}ex({value:d,inclusive:e},{value:g,inclusive:h})>0&&(d=g,e=h)}if(null!==c){for(let i=0;i<a.orderBy.length;++i)if(a.orderBy[i].field.isEqual(b)){let j=c.position[i];ex({value:d,inclusive:e},{value:j,inclusive:c.inclusive})>0&&(d=j,e=c.inclusive);break}}return{value:d,inclusive:e}}class eJ extends class{}{constructor(a,b,c){super(),this.field=a,this.op=b,this.value=c}static create(a,b,c){return a.isKeyField()?"in"===b||"not-in"===b?this.lt(a,b,c):new eK(a,b,c):"array-contains"===b?new eO(a,c):"in"===b?new eP(a,c):"not-in"===b?new eQ(a,c):"array-contains-any"===b?new eR(a,c):new eJ(a,b,c)}static lt(a,b,c){return"in"===b?new eL(a,c):new eM(a,c)}matches(a){let b=a.data.field(this.field);return"!="===this.op?null!==b&&this.ft(ej(b,this.value)):null!==b&&eg(this.value)===eg(b)&&this.ft(ej(b,this.value))}ft(a){switch(this.op){case"<":return a<0;case"<=":return a<=0;case"==":return 0===a;case"!=":return 0!==a;case">":return a>0;case">=":return a>=0;default:return c4()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class eK extends eJ{constructor(a,b,c){super(a,b,c),this.key=ds.fromName(c.referenceValue)}matches(a){let b=ds.comparator(a.key,this.key);return this.ft(b)}}class eL extends eJ{constructor(a,b){super(a,"in",b),this.keys=eN("in",b)}matches(a){return this.keys.some(b=>b.isEqual(a.key))}}class eM extends eJ{constructor(a,b){super(a,"not-in",b),this.keys=eN("not-in",b)}matches(a){return!this.keys.some(b=>b.isEqual(a.key))}}function eN(a,b){var c;return((null===(c=b.arrayValue)|| void 0===c?void 0:c.values)||[]).map(a=>ds.fromName(a.referenceValue))}class eO extends eJ{constructor(a,b){super(a,"array-contains",b)}matches(a){let b=a.data.field(this.field);return eo(b)&&ei(b.arrayValue,this.value)}}class eP extends eJ{constructor(a,b){super(a,"in",b)}matches(a){let b=a.data.field(this.field);return null!==b&&ei(this.value.arrayValue,b)}}class eQ extends eJ{constructor(a,b){super(a,"not-in",b)}matches(a){if(ei(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let b=a.data.field(this.field);return null!==b&&!ei(this.value.arrayValue,b)}}class eR extends eJ{constructor(a,b){super(a,"array-contains-any",b)}matches(a){let b=a.data.field(this.field);return!(!eo(b)||!b.arrayValue.values)&&b.arrayValue.values.some(a=>ei(this.value.arrayValue,a))}}class eS{constructor(a,b){this.position=a,this.inclusive=b}}class eT{constructor(a,b="asc"){this.field=a,this.dir=b}}function eU(a,b){return a.dir===b.dir&&a.field.isEqual(b.field)}function eV(a,b,c){let d=0;for(let e=0;e<a.position.length;e++){let f=b[e],g=a.position[e];if(d=f.field.isKeyField()?ds.comparator(ds.fromName(g.referenceValue),c.key):ej(g,c.data.field(f.field)),"desc"===f.dir&&(d*=-1),0!==d)break}return d}function eW(a,b){if(null===a)return null===b;if(null===b||a.inclusive!==b.inclusive||a.position.length!==b.position.length)return!1;for(let c=0;c<a.position.length;c++)if(!eh(a.position[c],b.position[c]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Query encapsulates all the query attributes we support in the SDK. It can
 * be run against the LocalStore, as well as be converted to a `Target` to
 * query the RemoteStore results.
 *
 * Visible for testing.
 */ class eX{constructor(a,b=null,c=[],d=[],e=null,f="F",g=null,h=null){this.path=a,this.collectionGroup=b,this.explicitOrderBy=c,this.filters=d,this.limit=e,this.limitType=f,this.startAt=g,this.endAt=h,this._t=null,this.wt=null,this.startAt,this.endAt}}function eY(a,b,c,d,e,f,g,h){return new eX(a,b,c,d,e,f,g,h)}function eZ(a){return new eX(a)}function e$(a){return 0===a.filters.length&&null===a.limit&&null==a.startAt&&null==a.endAt&&(0===a.explicitOrderBy.length||1===a.explicitOrderBy.length&&a.explicitOrderBy[0].field.isKeyField())}function e_(a){return a.explicitOrderBy.length>0?a.explicitOrderBy[0].field:null}function e0(a){for(let b of a.filters)if(b.dt())return b.field;return null}function e1(a){return null!==a.collectionGroup}function e2(a){var b;let c=b=a;if(null===c._t){c._t=[];let d=e0(c),e=e_(c);if(null!==d&&null===e)d.isKeyField()||c._t.push(new eT(d)),c._t.push(new eT(dr.keyField(),"asc"));else{let f=!1;for(let g of c.explicitOrderBy)c._t.push(g),g.field.isKeyField()&&(f=!0);if(!f){let h=c.explicitOrderBy.length>0?c.explicitOrderBy[c.explicitOrderBy.length-1].dir:"asc";c._t.push(new eT(dr.keyField(),h))}}}return c._t}function e3(a){var b;let c=b=a;if(!c.wt){if("F"===c.limitType)c.wt=eC(c.path,c.collectionGroup,e2(c),c.filters,c.limit,c.startAt,c.endAt);else{let d=[];for(let e of e2(c)){let f="desc"===e.dir?"asc":"desc";d.push(new eT(e.field,f))}let g=c.endAt?new eS(c.endAt.position,c.endAt.inclusive):null,h=c.startAt?new eS(c.startAt.position,c.startAt.inclusive):null;c.wt=eC(c.path,c.collectionGroup,d,c.filters,c.limit,g,h)}}return c.wt}function e4(a,b,c){return new eX(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),b,c,a.startAt,a.endAt)}function e5(a,b){return eE(e3(a),e3(b))&&a.limitType===b.limitType}function e6(a){return`${eD(e3(a))}|lt:${a.limitType}`}function e7(a){var b;let c;return`Query(target=${c=(b=e3(a)).path.canonicalString(),null!==b.collectionGroup&&(c+=" collectionGroup="+b.collectionGroup),b.filters.length>0&&(c+=`, filters: [${b.filters.map(a=>{var b,c;return`${(b=a).field.canonicalString()} ${b.op} ${el(c=b.value)}`}).join(", ")}]`),eb(b.limit)||(c+=", limit: "+b.limit),b.orderBy.length>0&&(c+=`, orderBy: [${b.orderBy.map(a=>{var b;return b=a,`${b.field.canonicalString()} (${b.dir})`}).join(", ")}]`),b.startAt&&(c+=", startAt: ",c+=b.startAt.inclusive?"b:":"a:",c+=b.startAt.position.map(a=>{var b;return el(b=a)}).join(",")),b.endAt&&(c+=", endAt: ",c+=b.endAt.inclusive?"a:":"b:",c+=b.endAt.position.map(a=>{var b;return el(b=a)}).join(",")),`Target(${c})`}; limitType=${a.limitType})`}function e8(a,b){var c,d;return b.isFoundDocument()&&function(a,b){let c=b.key.path;return null!==a.collectionGroup?b.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(c):ds.isDocumentKey(a.path)?a.path.isEqual(c):a.path.isImmediateParentOf(c)}(a,b)&&function(a,b){for(let c of a.explicitOrderBy)if(!c.field.isKeyField()&&null===b.data.field(c.field))return!1;return!0}(a,b)&&function(a,b){for(let c of a.filters)if(!c.matches(b))return!1;return!0}(a,b)&&(c=a,d=b,(!c.startAt||!!function(a,b,c){let d=eV(a,b,c);return a.inclusive?d<=0:d<0}(c.startAt,e2(c),d))&&(!c.endAt||!!function(a,b,c){let d=eV(a,b,c);return a.inclusive?d>=0:d>0}(c.endAt,e2(c),d)))}function e9(a){return a.collectionGroup||(a.path.length%2==1?a.path.lastSegment():a.path.get(a.path.length-2))}function fa(a){return(b,c)=>{let d=!1;for(let e of e2(a)){let f=fb(e,b,c);if(0!==f)return f;d=d||e.field.isKeyField()}return 0}}function fb(a,b,c){let d=a.field.isKeyField()?ds.comparator(b.key,c.key):function(a,b,c){let d=b.data.field(a),e=c.data.field(a);return null!==d&&null!==e?ej(d,e):c4()}(a.field,b,c);switch(a.dir){case"asc":return d;case"desc":return -1*d;default:return c4()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */ function fc(a,b){if(a.gt){if(isNaN(b))return{doubleValue:"NaN"};if(b===1/0)return{doubleValue:"Infinity"};if(b=== -1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ec(b)?"-0":b}}function fd(a){return{integerValue:""+a}}function fe(a,b){return ed(b)?fd(b):fc(a,b)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Used to represent a field transform on a mutation. */ class ff{constructor(){this._=void 0}}function fg(a,b,c){return a instanceof fj?function(a,b){let c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return b&&(c.fields.__previous_value__=b),{mapValue:c}}(c,b):a instanceof fk?fl(a,b):a instanceof fm?fn(a,b):function(a,b){let c=fi(a,b),d=fp(c)+fp(a.yt);return en(c)&&en(a.yt)?fd(d):fc(a.It,d)}(a,b)}function fh(a,b,c){return a instanceof fk?fl(a,b):a instanceof fm?fn(a,b):c}function fi(a,b){var c,d;return a instanceof fo?en(c=b)||(d=c)&&"doubleValue"in d?b:{integerValue:0}:null}class fj extends ff{}class fk extends ff{constructor(a){super(),this.elements=a}}function fl(a,b){let c=fq(b);for(let d of a.elements)c.some(a=>eh(a,d))||c.push(d);return{arrayValue:{values:c}}}class fm extends ff{constructor(a){super(),this.elements=a}}function fn(a,b){let c=fq(b);for(let d of a.elements)c=c.filter(a=>!eh(a,d));return{arrayValue:{values:c}}}class fo extends ff{constructor(a,b){super(),this.It=a,this.yt=b}}function fp(a){return d4(a.integerValue||a.doubleValue)}function fq(a){return eo(a)&&a.arrayValue.values?a.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** A field path and the TransformOperation to perform upon it. */ class fr{constructor(a,b){this.field=a,this.transform=b}}class fs{constructor(a,b){this.version=a,this.transformResults=b}}class ft{constructor(a,b){this.updateTime=a,this.exists=b}static none(){return new ft}static exists(a){return new ft(void 0,a)}static updateTime(a){return new ft(a)}get isNone(){return void 0===this.updateTime&& void 0===this.exists}isEqual(a){return this.exists===a.exists&&(this.updateTime?!!a.updateTime&&this.updateTime.isEqual(a.updateTime):!a.updateTime)}}function fu(a,b){return void 0!==a.updateTime?b.isFoundDocument()&&b.version.isEqual(a.updateTime):void 0===a.exists||a.exists===b.isFoundDocument()}class fv{}function fw(a,b){if(!a.hasLocalMutations||b&&0===b.fields.length)return null;if(null===b)return a.isNoDocument()?new fG(a.key,ft.none()):new fB(a.key,a.data,ft.none());{let c=a.data,d=ey.empty(),e=new dZ(dr.comparator);for(let f of b.fields)if(!e.has(f)){let g=c.field(f);null===g&&f.length>1&&(f=f.popLast(),g=c.field(f)),null===g?d.delete(f):d.set(f,g),e=e.add(f)}return new fC(a.key,d,new d0(e.toArray()),ft.none())}}function fx(a,b,c){a instanceof fB?function(a,b,c){let d=a.value.clone(),e=fE(a.fieldTransforms,b,c.transformResults);d.setAll(e),b.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(a,b,c):a instanceof fC?function(a,b,c){if(!fu(a.precondition,b))return void b.convertToUnknownDocument(c.version);let d=fE(a.fieldTransforms,b,c.transformResults),e=b.data;e.setAll(fD(a)),e.setAll(d),b.convertToFoundDocument(c.version,e).setHasCommittedMutations()}(a,b,c):function(a,b,c){b.convertToNoDocument(c.version).setHasCommittedMutations()}(0,b,c)}function fy(a,b,c,d){var e,f,g;return a instanceof fB?function(a,b,c,d){if(!fu(a.precondition,b))return c;let e=a.value.clone(),f=fF(a.fieldTransforms,d,b);return e.setAll(f),b.convertToFoundDocument(b.version,e).setHasLocalMutations(),null}(a,b,c,d):a instanceof fC?function(a,b,c,d){if(!fu(a.precondition,b))return c;let e=fF(a.fieldTransforms,d,b),f=b.data;return(f.setAll(fD(a)),f.setAll(e),b.convertToFoundDocument(b.version,f).setHasLocalMutations(),null===c)?null:c.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(a=>a.field))}(a,b,c,d):(e=a,f=b,g=c,fu(e.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):g)}function fz(a,b){let c=null;for(let d of a.fieldTransforms){let e=b.data.field(d.field),f=fi(d.transform,e||null);null!=f&&(null===c&&(c=ey.empty()),c.set(d.field,f))}return c||null}function fA(a,b){var c,d;return a.type===b.type&& !!a.key.isEqual(b.key)&&!!a.precondition.isEqual(b.precondition)&&(c=a.fieldTransforms,d=b.fieldTransforms,!!(void 0===c&& void 0===d|| !(!c||!d)&&dj(c,d,(a,b)=>{var c,d,e,f;return c=a,d=b,c.field.isEqual(d.field)&&(e=c.transform,f=d.transform,e instanceof fk&&f instanceof fk||e instanceof fm&&f instanceof fm?dj(e.elements,f.elements,eh):e instanceof fo&&f instanceof fo?eh(e.yt,f.yt):e instanceof fj&&f instanceof fj)})))&&(0===a.type?a.value.isEqual(b.value):1!==a.type||a.data.isEqual(b.data)&&a.fieldMask.isEqual(b.fieldMask))}class fB extends fv{constructor(a,b,c,d=[]){super(),this.key=a,this.value=b,this.precondition=c,this.fieldTransforms=d,this.type=0}getFieldMask(){return null}}class fC extends fv{constructor(a,b,c,d,e=[]){super(),this.key=a,this.data=b,this.fieldMask=c,this.precondition=d,this.fieldTransforms=e,this.type=1}getFieldMask(){return this.fieldMask}}function fD(a){let b=new Map;return a.fieldMask.fields.forEach(c=>{if(!c.isEmpty()){let d=a.data.field(c);b.set(c,d)}}),b}function fE(a,b,c){var d;let e=new Map;(d=a.length===c.length)||c4();for(let f=0;f<c.length;f++){let g=a[f],h=g.transform,i=b.data.field(g.field);e.set(g.field,fh(h,i,c[f]))}return e}function fF(a,b,c){let d=new Map;for(let e of a){let f=e.transform,g=c.data.field(e.field);d.set(e.field,fg(f,g,b))}return d}class fG extends fv{constructor(a,b){super(),this.key=a,this.precondition=b,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fH extends fv{constructor(a,b){super(),this.key=a,this.precondition=b,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fI{constructor(a){this.count=a}}function fJ(a){switch(a){default:return c4();case c5.CANCELLED:case c5.UNKNOWN:case c5.DEADLINE_EXCEEDED:case c5.RESOURCE_EXHAUSTED:case c5.INTERNAL:case c5.UNAVAILABLE:case c5.UNAUTHENTICATED:return!1;case c5.INVALID_ARGUMENT:case c5.NOT_FOUND:case c5.ALREADY_EXISTS:case c5.PERMISSION_DENIED:case c5.FAILED_PRECONDITION:case c5.ABORTED:case c5.OUT_OF_RANGE:case c5.UNIMPLEMENTED:case c5.DATA_LOSS:return!0}}function fK(a){if(void 0===a)return c1("GRPC error has no .code"),c5.UNKNOWN;switch(a){case j.OK:return c5.OK;case j.CANCELLED:return c5.CANCELLED;case j.UNKNOWN:return c5.UNKNOWN;case j.DEADLINE_EXCEEDED:return c5.DEADLINE_EXCEEDED;case j.RESOURCE_EXHAUSTED:return c5.RESOURCE_EXHAUSTED;case j.INTERNAL:return c5.INTERNAL;case j.UNAVAILABLE:return c5.UNAVAILABLE;case j.UNAUTHENTICATED:return c5.UNAUTHENTICATED;case j.INVALID_ARGUMENT:return c5.INVALID_ARGUMENT;case j.NOT_FOUND:return c5.NOT_FOUND;case j.ALREADY_EXISTS:return c5.ALREADY_EXISTS;case j.PERMISSION_DENIED:return c5.PERMISSION_DENIED;case j.FAILED_PRECONDITION:return c5.FAILED_PRECONDITION;case j.ABORTED:return c5.ABORTED;case j.OUT_OF_RANGE:return c5.OUT_OF_RANGE;case j.UNIMPLEMENTED:return c5.UNIMPLEMENTED;case j.DATA_LOSS:return c5.DATA_LOSS;default:return c4()}}(k=j||(j={}))[k.OK=0]="OK",k[k.CANCELLED=1]="CANCELLED",k[k.UNKNOWN=2]="UNKNOWN",k[k.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",k[k.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",k[k.NOT_FOUND=5]="NOT_FOUND",k[k.ALREADY_EXISTS=6]="ALREADY_EXISTS",k[k.PERMISSION_DENIED=7]="PERMISSION_DENIED",k[k.UNAUTHENTICATED=16]="UNAUTHENTICATED",k[k.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",k[k.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",k[k.ABORTED=10]="ABORTED",k[k.OUT_OF_RANGE=11]="OUT_OF_RANGE",k[k.UNIMPLEMENTED=12]="UNIMPLEMENTED",k[k.INTERNAL=13]="INTERNAL",k[k.UNAVAILABLE=14]="UNAVAILABLE",k[k.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A map implementation that uses objects as keys. Objects must have an
 * associated equals function and must be immutable. Entries in the map are
 * stored together with the key being produced from the mapKeyFn. This map
 * automatically handles collisions of keys.
 */ class fL{constructor(a,b){this.mapKeyFn=a,this.equalsFn=b,this.inner={},this.innerSize=0}get(a){let b=this.mapKeyFn(a),c=this.inner[b];if(void 0!==c){for(let[d,e]of c)if(this.equalsFn(d,a))return e}}has(a){return void 0!==this.get(a)}set(a,b){let c=this.mapKeyFn(a),d=this.inner[c];if(void 0===d)return this.inner[c]=[[a,b]],void this.innerSize++;for(let e=0;e<d.length;e++)if(this.equalsFn(d[e][0],a))return void(d[e]=[a,b]);d.push([a,b]),this.innerSize++}delete(a){let b=this.mapKeyFn(a),c=this.inner[b];if(void 0===c)return!1;for(let d=0;d<c.length;d++)if(this.equalsFn(c[d][0],a))return 1===c.length?delete this.inner[b]:c.splice(d,1),this.innerSize--,!0;return!1}forEach(a){dU(this.inner,(b,c)=>{for(let[d,e]of c)a(d,e)})}isEmpty(){return dV(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let fM=new dW(ds.comparator),fN=new dW(ds.comparator);function fO(...a){let b=fN;for(let c of a)b=b.insert(c.key,c);return b}function fP(a){let b=fN;return a.forEach((a,c)=>b=b.insert(a,c.overlayedDocument)),b}function fQ(){return fS()}function fR(){return fS()}function fS(){return new fL(a=>a.toString(),(a,b)=>a.isEqual(b))}let fT=new dW(ds.comparator),fU=new dZ(ds.comparator);function fV(...a){let b=fU;for(let c of a)b=b.add(c);return b}let fW=new dZ(di);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An event from the RemoteStore. It is split into targetChanges (changes to the
 * state or the set of documents in our watched targets) and documentUpdates
 * (changes to the actual documents).
 */ class fX{constructor(a,b,c,d,e){this.snapshotVersion=a,this.targetChanges=b,this.targetMismatches=c,this.documentUpdates=d,this.resolvedLimboDocuments=e}static createSynthesizedRemoteEventForCurrentChange(a,b,c){let d=new Map;return d.set(a,fY.createSynthesizedTargetChangeForCurrentChange(a,b,c)),new fX(dm.min(),d,fW,fM,fV())}}class fY{constructor(a,b,c,d,e){this.resumeToken=a,this.current=b,this.addedDocuments=c,this.modifiedDocuments=d,this.removedDocuments=e}static createSynthesizedTargetChangeForCurrentChange(a,b,c){return new fY(c,b,fV(),fV(),fV())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a changed document and a list of target ids to which this change
 * applies.
 *
 * If document has been deleted NoDocument will be provided.
 */ class fZ{constructor(a,b,c,d){this.Tt=a,this.removedTargetIds=b,this.key=c,this.Et=d}}class f${constructor(a,b){this.targetId=a,this.At=b}}class f_{constructor(a,b,c=d1.EMPTY_BYTE_STRING,d=null){this.state=a,this.targetIds=b,this.resumeToken=c,this.cause=d}}class f0{constructor(){this.Rt=0,this.bt=f3(),this.Pt=d1.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(a){a.approximateByteSize()>0&&(this.Vt=!0,this.Pt=a)}xt(){let a=fV(),b=fV(),c=fV();return this.bt.forEach((d,e)=>{switch(e){case 0:a=a.add(d);break;case 2:b=b.add(d);break;case 1:c=c.add(d);break;default:c4()}}),new fY(this.Pt,this.vt,a,b,c)}Nt(){this.Vt=!1,this.bt=f3()}kt(a,b){this.Vt=!0,this.bt=this.bt.insert(a,b)}Ot(a){this.Vt=!0,this.bt=this.bt.remove(a)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class f1{constructor(a){this.Bt=a,this.Lt=new Map,this.Ut=fM,this.qt=f2(),this.Kt=new dZ(di)}Gt(a){for(let b of a.Tt)a.Et&&a.Et.isFoundDocument()?this.Qt(b,a.Et):this.jt(b,a.key,a.Et);for(let c of a.removedTargetIds)this.jt(c,a.key,a.Et)}Wt(a){this.forEachTarget(a,b=>{let c=this.zt(b);switch(a.state){case 0:this.Ht(b)&&c.Ct(a.resumeToken);break;case 1:c.Ft(),c.St||c.Nt(),c.Ct(a.resumeToken);break;case 2:c.Ft(),c.St||this.removeTarget(b);break;case 3:this.Ht(b)&&(c.$t(),c.Ct(a.resumeToken));break;case 4:this.Ht(b)&&(this.Jt(b),c.Ct(a.resumeToken));break;default:c4()}})}forEachTarget(a,b){a.targetIds.length>0?a.targetIds.forEach(b):this.Lt.forEach((a,c)=>{this.Ht(c)&&b(c)})}Yt(a){let b=a.targetId,c=a.At.count,d=this.Xt(b);if(d){let e=d.target;if(eF(e)){if(0===c){let f=new ds(e.path);this.jt(b,f,eA.newNoDocument(f,dm.min()))}else{var g;(g=1===c)||c4()}}else this.Zt(b)!==c&&(this.Jt(b),this.Kt=this.Kt.add(b))}}te(a){let b=new Map;this.Lt.forEach((c,d)=>{let e=this.Xt(d);if(e){if(c.current&&eF(e.target)){let f=new ds(e.target.path);null!==this.Ut.get(f)||this.ee(d,f)||this.jt(d,f,eA.newNoDocument(f,a))}c.Dt&&(b.set(d,c.xt()),c.Nt())}});let c=fV();this.qt.forEach((a,b)=>{let d=!0;b.forEachWhile(a=>{let b=this.Xt(a);return!b||2===b.purpose||(d=!1,!1)}),d&&(c=c.add(a))}),this.Ut.forEach((b,c)=>c.setReadTime(a));let d=new fX(a,b,this.Kt,this.Ut,c);return this.Ut=fM,this.qt=f2(),this.Kt=new dZ(di),d}Qt(a,b){if(!this.Ht(a))return;let c=this.ee(a,b.key)?2:0;this.zt(a).kt(b.key,c),this.Ut=this.Ut.insert(b.key,b),this.qt=this.qt.insert(b.key,this.ne(b.key).add(a))}jt(a,b,c){if(!this.Ht(a))return;let d=this.zt(a);this.ee(a,b)?d.kt(b,1):d.Ot(b),this.qt=this.qt.insert(b,this.ne(b).delete(a)),c&&(this.Ut=this.Ut.insert(b,c))}removeTarget(a){this.Lt.delete(a)}Zt(a){let b=this.zt(a).xt();return this.Bt.getRemoteKeysForTarget(a).size+b.addedDocuments.size-b.removedDocuments.size}Mt(a){this.zt(a).Mt()}zt(a){let b=this.Lt.get(a);return b||(b=new f0,this.Lt.set(a,b)),b}ne(a){let b=this.qt.get(a);return b||(b=new dZ(di),this.qt=this.qt.insert(a,b)),b}Ht(a){let b=null!==this.Xt(a);return b||c0("WatchChangeAggregator","Detected inactive target",a),b}Xt(a){let b=this.Lt.get(a);return b&&b.St?null:this.Bt.se(a)}Jt(a){this.Lt.set(a,new f0),this.Bt.getRemoteKeysForTarget(a).forEach(b=>{this.jt(a,b,null)})}ee(a,b){return this.Bt.getRemoteKeysForTarget(a).has(b)}}function f2(){return new dW(ds.comparator)}function f3(){return new dW(ds.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let f4={asc:"ASCENDING",desc:"DESCENDING"},f5={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class f6{constructor(a,b){this.databaseId=a,this.gt=b}}function f7(a,b){return a.gt?`${new Date(1e3*b.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+b.nanoseconds).slice(-9)}Z`:{seconds:""+b.seconds,nanos:b.nanoseconds}}function f8(a,b){return a.gt?b.toBase64():b.toUint8Array()}function f9(a){var b;return!a&&c4(),dm.fromTimestamp(function(a){let b=d3(a);return new dl(b.seconds,b.nanos)}(a))}function ga(a,b){var c;return(c=a,new dp(["projects",c.projectId,"databases",c.database])).child("documents").child(b).canonicalString()}function gb(a){var b;let c=dp.fromString(a);return gv(c)||c4(),c}function gc(a,b){return ga(a.databaseId,b.path)}function gd(a,b){let c=gb(b);if(c.get(1)!==a.databaseId.projectId)throw new c6(c5.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+c.get(1)+" vs "+a.databaseId.projectId);if(c.get(3)!==a.databaseId.database)throw new c6(c5.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+c.get(3)+" vs "+a.databaseId.database);return new ds(gh(c))}function ge(a,b){return ga(a.databaseId,b)}function gf(a){let b=gb(a);return 4===b.length?dp.emptyPath():gh(b)}function gg(a){return new dp(["projects",a.databaseId.projectId,"databases",a.databaseId.database]).canonicalString()}function gh(a){var b;return a.length>4&&"documents"===a.get(4)||c4(),a.popFirst(5)}function gi(a,b,c){return{name:gc(a,b),fields:c.value.mapValue.fields}}function gj(a,b,c){let d=gd(a,b.name),e=f9(b.updateTime),f=new ey({mapValue:{fields:b.fields}}),g=eA.newFoundDocument(d,e,f);return c&&g.setHasCommittedMutations(),c?g.setHasCommittedMutations():g}function gk(a,b){var c,d,e,f;let g;if(b instanceof fB)g={update:gi(a,b.key,b.value)};else if(b instanceof fG)g={delete:gc(a,b.key)};else if(b instanceof fC)g={update:gi(a,b.key,b.data),updateMask:gu(b.fieldMask)};else{if(!(b instanceof fH))return c4();g={verify:gc(a,b.key)}}return b.fieldTransforms.length>0&&(g.updateTransforms=b.fieldTransforms.map(a=>(function(a,b){let c=b.transform;if(c instanceof fj)return{fieldPath:b.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof fk)return{fieldPath:b.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof fm)return{fieldPath:b.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof fo)return{fieldPath:b.field.canonicalString(),increment:c.yt};throw c4()})(0,a))),b.precondition.isNone||(g.currentDocument=(c=a,void 0!==(d=b.precondition).updateTime?{updateTime:(e=c,f7(e,(f=d.updateTime).toTimestamp()))}:void 0!==d.exists?{exists:d.exists}:c4())),g}function gl(a,b){var c;let d=b.currentDocument?void 0!==(c=b.currentDocument).updateTime?ft.updateTime(f9(c.updateTime)):void 0!==c.exists?ft.exists(c.exists):ft.none():ft.none(),e=b.updateTransforms?b.updateTransforms.map(b=>(function(a,b){let c=null;if("setToServerValue"in b){var d;"REQUEST_TIME"===b.setToServerValue||c4(),c=new fj}else if("appendMissingElements"in b){let e=b.appendMissingElements.values||[];c=new fk(e)}else if("removeAllFromArray"in b){let f=b.removeAllFromArray.values||[];c=new fm(f)}else"increment"in b?c=new fo(a,b.increment):c4();let g=dr.fromServerFormat(b.fieldPath);return new fr(g,c)})(a,b)):[];if(b.update){b.update.name;let f=gd(a,b.update.name),g=new ey({mapValue:{fields:b.update.fields}});if(b.updateMask){let h=function(a){let b=a.fieldPaths||[];return new d0(b.map(a=>dr.fromServerFormat(a)))}(b.updateMask);return new fC(f,g,h,d,e)}return new fB(f,g,d,e)}if(b.delete){let i=gd(a,b.delete);return new fG(i,d)}if(b.verify){let j=gd(a,b.verify);return new fH(j,d)}return c4()}function gm(a,b){return{documents:[ge(a,b.path)]}}function gn(a,b){var c,d,e,f;let g={structuredQuery:{}},h=b.path;null!==b.collectionGroup?(g.parent=ge(a,h),g.structuredQuery.from=[{collectionId:b.collectionGroup,allDescendants:!0}]):(g.parent=ge(a,h.popLast()),g.structuredQuery.from=[{collectionId:h.lastSegment()}]);let i=function(a){if(0===a.length)return;let b=a.map(a=>(function(a){var b;if("=="===a.op){if(eq(a.value))return{unaryFilter:{field:gq(a.field),op:"IS_NAN"}};if(ep(a.value))return{unaryFilter:{field:gq(a.field),op:"IS_NULL"}}}else if("!="===a.op){if(eq(a.value))return{unaryFilter:{field:gq(a.field),op:"IS_NOT_NAN"}};if(ep(a.value))return{unaryFilter:{field:gq(a.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gq(a.field),op:(b=a.op,f5[b]),value:a.value}}})(a));return 1===b.length?b[0]:{compositeFilter:{op:"AND",filters:b}}}(b.filters);i&&(g.structuredQuery.where=i);let j=function(a){if(0!==a.length)return a.map(a=>{var b,c;return{field:gq((b=a).field),direction:(c=b.dir,f4[c])}})}(b.orderBy);j&&(g.structuredQuery.orderBy=j);let k=(d=a,e=b.limit,d.gt||eb(e)?e:{value:e});return null!==k&&(g.structuredQuery.limit=k),b.startAt&&(g.structuredQuery.startAt={before:(c=b.startAt).inclusive,values:c.position}),b.endAt&&(g.structuredQuery.endAt={before:!(f=b.endAt).inclusive,values:f.position}),g}function go(a){var b,c;let d=gf(a.parent),e=a.structuredQuery,f=e.from?e.from.length:0,g=null;if(f>0){(b=1===f)||c4();let h=e.from[0];h.allDescendants?g=h.collectionId:d=d.child(h.collectionId)}let i=[];e.where&&(i=gp(e.where));let j=[];e.orderBy&&(j=e.orderBy.map(a=>{var b;return b=a,new eT(gr(b.field),function(a){switch(a){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}));let k=null,l;e.limit&&(k=eb(l="object"==typeof(c=e.limit)?c.value:c)?null:l);let m=null;e.startAt&&(m=function(a){let b=!!a.before,c=a.values||[];return new eS(c,b)}(e.startAt));let n=null;return e.endAt&&(n=function(a){let b=!a.before,c=a.values||[];return new eS(c,b)}(e.endAt)),eY(d,g,j,i,k,"F",m,n)}function gp(a){return a?void 0!==a.unaryFilter?[gt(a)]:void 0!==a.fieldFilter?[gs(a)]:void 0!==a.compositeFilter?a.compositeFilter.filters.map(a=>gp(a)).reduce((a,b)=>a.concat(b)):c4():[]}function gq(a){return{fieldPath:a.canonicalString()}}function gr(a){return dr.fromServerFormat(a.fieldPath)}function gs(a){return eJ.create(gr(a.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return c4()}}(a.fieldFilter.op),a.fieldFilter.value)}function gt(a){switch(a.unaryFilter.op){case"IS_NAN":let b=gr(a.unaryFilter.field);return eJ.create(b,"==",{doubleValue:NaN});case"IS_NULL":let c=gr(a.unaryFilter.field);return eJ.create(c,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let d=gr(a.unaryFilter.field);return eJ.create(d,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let e=gr(a.unaryFilter.field);return eJ.create(e,"!=",{nullValue:"NULL_VALUE"});default:return c4()}}function gu(a){let b=[];return a.fields.forEach(a=>b.push(a.canonicalString())),{fieldPaths:b}}function gv(a){return a.length>=4&&"projects"===a.get(0)&&"databases"===a.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Encodes a resource path into a IndexedDb-compatible string form.
 */ function gw(a){let b="";for(let c=0;c<a.length;c++)b.length>0&&(b=gy(b)),b=gx(a.get(c),b);return gy(b)}function gx(a,b){let c=b,d=a.length;for(let e=0;e<d;e++){let f=a.charAt(e);switch(f){case"\0":c+="\x01\x10";break;case"\x01":c+="\x01\x11";break;default:c+=f}}return c}function gy(a){return a+"\x01\x01"}function gz(a){var b,c;let d=a.length;if(d>=2||c4(),2===d)return"\x01"===a.charAt(0)&&"\x01"===a.charAt(1)||c4(),dp.emptyPath();let e=d-2,f=[],g="";for(let h=0;h<d;){let i=a.indexOf("\x01",h);switch((i<0||i>e)&&c4(),a.charAt(i+1)){case"\x01":let j=a.substring(h,i),k;0===g.length?k=j:(g+=j,k=g,g=""),f.push(k);break;case"\x10":g+=a.substring(h,i),g+="\0";break;case"\x11":g+=a.substring(h,i+1);break;default:c4()}h=i+2}return new dp(f)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Name of the IndexedDb object store.
 *
 * Note that the name 'owner' is chosen to ensure backwards compatibility with
 * older clients that only supported single locked access to the persistence
 * layer.
 */ /**
 * Creates a [userId, encodedPath] key for use in the DbDocumentMutations
 * index to iterate over all at document mutations for a given path or lower.
 */ function gA(a,b){return[a,gw(b)]}function gB(a,b,c){return[a,gw(b),c]}let gC={},gD=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],gE=[...gD,"documentOverlays"],gF=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],gG=gF,gH=[...gG,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gI extends null{constructor(a,b){super(),this.ie=a,this.currentSequenceNumber=b}}function gJ(a,b){var c;let d=c=a;return dI.M(d.ie,b)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A batch of mutations that will be sent as one unit to the backend.
 */ class gK{constructor(a,b,c,d){this.batchId=a,this.localWriteTime=b,this.baseMutations=c,this.mutations=d}applyToRemoteDocument(a,b){let c=b.mutationResults;for(let d=0;d<this.mutations.length;d++){let e=this.mutations[d];e.key.isEqual(a.key)&&fx(e,a,c[d])}}applyToLocalView(a,b){for(let c of this.baseMutations)c.key.isEqual(a.key)&&(b=fy(c,a,b,this.localWriteTime));for(let d of this.mutations)d.key.isEqual(a.key)&&(b=fy(d,a,b,this.localWriteTime));return b}applyToLocalDocumentSet(a,b){let c=fR();return this.mutations.forEach(d=>{let e=a.get(d.key),f=e.overlayedDocument,g=this.applyToLocalView(f,e.mutatedFields);g=b.has(d.key)?null:g;let h=fw(f,g);null!==h&&c.set(d.key,h),f.isValidDocument()||f.convertToNoDocument(dm.min())}),c}keys(){return this.mutations.reduce((a,b)=>a.add(b.key),fV())}isEqual(a){return this.batchId===a.batchId&&dj(this.mutations,a.mutations,(a,b)=>fA(a,b))&&dj(this.baseMutations,a.baseMutations,(a,b)=>fA(a,b))}}class gL{constructor(a,b,c,d){this.batch=a,this.commitVersion=b,this.mutationResults=c,this.docVersions=d}static from(a,b,c){var d;(d=a.mutations.length===c.length)||c4();let e=fT,f=a.mutations;for(let g=0;g<f.length;g++)e=e.insert(f[g].key,c[g].version);return new gL(a,b,c,e)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Representation of an overlay computed by Firestore.
 *
 * Holds information about a mutation and the largest batch id in Firestore when
 * the mutation was created.
 */ class gM{constructor(a,b){this.largestBatchId=a,this.mutation=b}getKey(){return this.mutation.key}isEqual(a){return null!==a&&this.mutation===a.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An immutable set of metadata that the local store tracks for each target.
 */ class gN{constructor(a,b,c,d,e=dm.min(),f=dm.min(),g=d1.EMPTY_BYTE_STRING){this.target=a,this.targetId=b,this.purpose=c,this.sequenceNumber=d,this.snapshotVersion=e,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=g}withSequenceNumber(a){return new gN(this.target,this.targetId,this.purpose,a,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(a,b){return new gN(this.target,this.targetId,this.purpose,this.sequenceNumber,b,this.lastLimboFreeSnapshotVersion,a)}withLastLimboFreeSnapshotVersion(a){return new gN(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,a,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Serializer for values stored in the LocalStore. */ class gO{constructor(a){this.re=a}}function gP(a,b){let c=b.key,d={prefixPath:c.getCollectionPath().popLast().toArray(),collectionGroup:c.collectionGroup,documentId:c.path.lastSegment(),readTime:gQ(b.readTime),hasCommittedMutations:b.hasCommittedMutations};if(b.isFoundDocument()){var e,f;d.document=(e=a.re,{name:gc(e,(f=b).key),fields:f.data.value.mapValue.fields,updateTime:f7(e,f.version.toTimestamp())})}else if(b.isNoDocument())d.noDocument={path:c.path.toArray(),readTime:gR(b.version)};else{if(!b.isUnknownDocument())return c4();d.unknownDocument={path:c.path.toArray(),version:gR(b.version)}}return d}function gQ(a){let b=a.toTimestamp();return[b.seconds,b.nanoseconds]}function gR(a){let b=a.toTimestamp();return{seconds:b.seconds,nanoseconds:b.nanoseconds}}function gS(a){let b=new dl(a.seconds,a.nanoseconds);return dm.fromTimestamp(b)}function gT(a,b){let c=(b.baseMutations||[]).map(b=>gl(a.re,b));for(let d=0;d<b.mutations.length-1;++d){let e=b.mutations[d];if(d+1<b.mutations.length&& void 0!==b.mutations[d+1].transform){let f=b.mutations[d+1];e.updateTransforms=f.transform.fieldTransforms,b.mutations.splice(d+1,1),++d}}let g=b.mutations.map(b=>gl(a.re,b)),h=dl.fromMillis(b.localWriteTimeMs);return new gK(b.batchId,h,c,g)}function gU(a){var b,c,d;let e=gS(a.readTime),f=void 0!==a.lastLimboFreeSnapshotVersion?gS(a.lastLimboFreeSnapshotVersion):dm.min(),g;return void 0!==a.query.documents?(1===(b=a.query).documents.length||c4(),g=e3(eZ(gf(b.documents[0])))):g=e3(go(d=a.query)),new gN(g,a.targetId,0,a.lastListenSequenceNumber,e,f,d1.fromBase64String(a.resumeToken))}function gV(a,b){let c=gR(b.snapshotVersion),d=gR(b.lastLimboFreeSnapshotVersion),e;e=eF(b.target)?gm(a.re,b.target):gn(a.re,b.target);let f=b.resumeToken.toBase64();return{targetId:b.targetId,canonicalId:eD(b.target),readTime:c,resumeToken:f,lastListenSequenceNumber:b.sequenceNumber,lastLimboFreeSnapshotVersion:d,query:e}}function gW(a){let b=go({parent:a.parent,structuredQuery:a.structuredQuery});return"LAST"===a.limitType?e4(b,b.limit,"L"):b}function gX(a,b){return new gM(b.largestBatchId,gl(a.re,b.overlayMutation))}function gY(a,b){let c=b.path.lastSegment();return[a,gw(b.path.popLast()),c]}function gZ(a,b,c,d){return{indexId:a,uid:b.uid||"",sequenceNumber:c,readTime:gR(d.readTime),documentKey:gw(d.documentKey.path),largestBatchId:d.largestBatchId}}function g$(a){return gJ(a,"bundles")}function g_(a){return gJ(a,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Implementation of DocumentOverlayCache using IndexedDb.
 */ class g0{constructor(a,b){this.It=a,this.userId=b}static oe(a,b){let c=b.uid||"";return new g0(a,c)}getOverlay(a,b){return g1(a).get(gY(this.userId,b)).next(a=>a?gX(this.It,a):null)}getOverlays(a,b){let c=fQ();return dG.forEach(b,b=>this.getOverlay(a,b).next(a=>{null!==a&&c.set(b,a)})).next(()=>c)}saveOverlays(a,b,c){let d=[];return c.forEach((c,e)=>{let f=new gM(b,e);d.push(this.ue(a,f))}),dG.waitFor(d)}removeOverlaysForBatchId(a,b,c){let d=new Set;b.forEach(a=>d.add(gw(a.getCollectionPath())));let e=[];return d.forEach(b=>{let d=IDBKeyRange.bound([this.userId,b,c],[this.userId,b,c+1],!1,!0);e.push(g1(a).Y("collectionPathOverlayIndex",d))}),dG.waitFor(e)}getOverlaysForCollection(a,b,c){let d=fQ(),e=gw(b),f=IDBKeyRange.bound([this.userId,e,c],[this.userId,e,Number.POSITIVE_INFINITY],!0);return g1(a).W("collectionPathOverlayIndex",f).next(a=>{for(let b of a){let c=gX(this.It,b);d.set(c.getKey(),c)}return d})}getOverlaysForCollectionGroup(a,b,c,d){let e=fQ(),f,g=IDBKeyRange.bound([this.userId,b,c],[this.userId,b,Number.POSITIVE_INFINITY],!0);return g1(a).Z({index:"collectionGroupOverlayIndex",range:g},(a,b,c)=>{let g=gX(this.It,b);e.size()<d||g.largestBatchId===f?(e.set(g.getKey(),g),f=g.largestBatchId):c.done()}).next(()=>e)}ue(a,b){return g1(a).put(function(a,b,c){let[d,e,f]=gY(b,c.mutation.key);return{userId:b,collectionPath:e,documentId:f,collectionGroup:c.mutation.key.getCollectionGroup(),largestBatchId:c.largestBatchId,overlayMutation:gk(a.re,c.mutation)}}(this.It,this.userId,b))}}function g1(a){return gJ(a,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Note: This code is copied from the backend. Code that is not used by
// Firestore was removed.
/** Firestore index value writer.  */ class g2{constructor(){}ce(a,b){this.ae(a,b),b.he()}ae(a,b){if("nullValue"in a)this.le(b,5);else if("booleanValue"in a)this.le(b,10),b.fe(a.booleanValue?1:0);else if("integerValue"in a)this.le(b,15),b.fe(d4(a.integerValue));else if("doubleValue"in a){let c=d4(a.doubleValue);isNaN(c)?this.le(b,13):(this.le(b,15),ec(c)?b.fe(0):b.fe(c))}else if("timestampValue"in a){let d=a.timestampValue;this.le(b,20),"string"==typeof d?b.de(d):(b.de(`${d.seconds||""}`),b.fe(d.nanos||0))}else if("stringValue"in a)this._e(a.stringValue,b),this.we(b);else if("bytesValue"in a)this.le(b,30),b.me(d5(a.bytesValue)),this.we(b);else if("referenceValue"in a)this.ge(a.referenceValue,b);else if("geoPointValue"in a){let e=a.geoPointValue;this.le(b,45),b.fe(e.latitude||0),b.fe(e.longitude||0)}else"mapValue"in a?et(a)?this.le(b,Number.MAX_SAFE_INTEGER):(this.ye(a.mapValue,b),this.we(b)):"arrayValue"in a?(this.pe(a.arrayValue,b),this.we(b)):c4()}_e(a,b){this.le(b,25),this.Ie(a,b)}Ie(a,b){b.de(a)}ye(a,b){let c=a.fields||{};for(let d of(this.le(b,55),Object.keys(c)))this._e(d,b),this.ae(c[d],b)}pe(a,b){let c=a.values||[];for(let d of(this.le(b,50),c))this.ae(d,b)}ge(a,b){this.le(b,37),ds.fromName(a).path.forEach(a=>{this.le(b,60),this.Ie(a,b)})}le(a,b){a.fe(b)}we(a){a.fe(2)}}function g3(a){if(0===a)return 8;let b=0;return a>>4==0&&(b+=4,a<<=4),a>>6==0&&(b+=2,a<<=2),a>>7==0&&(b+=1),b}function g4(a){let b=64-function(a){let b=0;for(let c=0;c<8;++c){let d=g3(255&a[c]);if(b+=d,8!==d)break}return b}(a);return Math.ceil(b/8)}g2.Te=new g2;class g5{constructor(){this.Be=new class{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ee(a){let b=a[Symbol.iterator](),c=b.next();for(;!c.done;)this.Ae(c.value),c=b.next();this.Re()}be(a){let b=a[Symbol.iterator](),c=b.next();for(;!c.done;)this.Pe(c.value),c=b.next();this.ve()}Ve(a){for(let b of a){let c=b.charCodeAt(0);if(c<128)this.Ae(c);else if(c<2048)this.Ae(960|c>>>6),this.Ae(128|63&c);else if(b<"\ud800"||"\udbff"<b)this.Ae(480|c>>>12),this.Ae(128|63&c>>>6),this.Ae(128|63&c);else{let d=b.codePointAt(0);this.Ae(240|d>>>18),this.Ae(128|63&d>>>12),this.Ae(128|63&d>>>6),this.Ae(128|63&d)}}this.Re()}Se(a){for(let b of a){let c=b.charCodeAt(0);if(c<128)this.Pe(c);else if(c<2048)this.Pe(960|c>>>6),this.Pe(128|63&c);else if(b<"\ud800"||"\udbff"<b)this.Pe(480|c>>>12),this.Pe(128|63&c>>>6),this.Pe(128|63&c);else{let d=b.codePointAt(0);this.Pe(240|d>>>18),this.Pe(128|63&d>>>12),this.Pe(128|63&d>>>6),this.Pe(128|63&d)}}this.ve()}De(a){let b=this.Ce(a),c=g4(b);this.xe(1+c),this.buffer[this.position++]=255&c;for(let d=b.length-c;d<b.length;++d)this.buffer[this.position++]=255&b[d]}Ne(a){let b=this.Ce(a),c=g4(b);this.xe(1+c),this.buffer[this.position++]=~(255&c);for(let d=b.length-c;d<b.length;++d)this.buffer[this.position++]=~(255&b[d])}ke(){this.Oe(255),this.Oe(255)}Me(){this.Fe(255),this.Fe(255)}reset(){this.position=0}seed(a){this.xe(a.length),this.buffer.set(a,this.position),this.position+=a.length}$e(){return this.buffer.slice(0,this.position)}Ce(a){let b=function(a){let b=new DataView(new ArrayBuffer(8));return b.setFloat64(0,a,!1),new Uint8Array(b.buffer)}(a),c=0!=(128&b[0]);b[0]^=c?255:128;for(let d=1;d<b.length;++d)b[d]^=c?255:0;return b}Ae(a){let b=255&a;0===b?(this.Oe(0),this.Oe(255)):255===b?(this.Oe(255),this.Oe(0)):this.Oe(b)}Pe(a){let b=255&a;0===b?(this.Fe(0),this.Fe(255)):255===b?(this.Fe(255),this.Fe(0)):this.Fe(a)}Re(){this.Oe(0),this.Oe(1)}ve(){this.Fe(0),this.Fe(1)}Oe(a){this.xe(1),this.buffer[this.position++]=a}Fe(a){this.xe(1),this.buffer[this.position++]=~a}xe(a){let b=a+this.position;if(b<=this.buffer.length)return;let c=2*this.buffer.length;c<b&&(c=b);let d=new Uint8Array(c);d.set(this.buffer),this.buffer=d}},this.Le=new class{constructor(a){this.Be=a}me(a){this.Be.Ee(a)}de(a){this.Be.Ve(a)}fe(a){this.Be.De(a)}he(){this.Be.ke()}}(this.Be),this.Ue=new class{constructor(a){this.Be=a}me(a){this.Be.be(a)}de(a){this.Be.Se(a)}fe(a){this.Be.Ne(a)}he(){this.Be.Me()}}(this.Be)}seed(a){this.Be.seed(a)}qe(a){return 0===a?this.Le:this.Ue}$e(){return this.Be.$e()}reset(){this.Be.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Represents an index entry saved by the SDK in persisted storage. */ class g6{constructor(a,b,c,d){this.indexId=a,this.documentKey=b,this.arrayValue=c,this.directionalValue=d}Ke(){let a=this.directionalValue.length,b=0===a||255===this.directionalValue[a-1]?a+1:a,c=new Uint8Array(b);return c.set(this.directionalValue,0),b!==a?c.set([0],this.directionalValue.length):++c[c.length-1],new g6(this.indexId,this.documentKey,this.arrayValue,c)}}function g7(a,b){let c=a.indexId-b.indexId;return 0!==c?c:0!==(c=g8(a.arrayValue,b.arrayValue))?c:0!==(c=g8(a.directionalValue,b.directionalValue))?c:ds.comparator(a.documentKey,b.documentKey)}function g8(a,b){for(let c=0;c<a.length&&c<b.length;++c){let d=a[c]-b[c];if(0!==d)return d}return a.length-b.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A light query planner for Firestore.
 *
 * This class matches a `FieldIndex` against a Firestore Query `Target`. It
 * determines whether a given index can be used to serve the specified target.
 *
 * The following table showcases some possible index configurations:
 *
 * Query                                               | Index
 * -----------------------------------------------------------------------------
 * where('a', '==', 'a').where('b', '==', 'b')         | a ASC, b DESC
 * where('a', '==', 'a').where('b', '==', 'b')         | a ASC
 * where('a', '==', 'a').where('b', '==', 'b')         | b DESC
 * where('a', '>=', 'a').orderBy('a')                  | a ASC
 * where('a', '>=', 'a').orderBy('a', 'desc')          | a DESC
 * where('a', '>=', 'a').orderBy('a').orderBy('b')     | a ASC, b ASC
 * where('a', '>=', 'a').orderBy('a').orderBy('b')     | a ASC
 * where('a', 'array-contains', 'a').orderBy('b')      | a CONTAINS, b ASCENDING
 * where('a', 'array-contains', 'a').orderBy('b')      | a CONTAINS
 */ class g9{constructor(a){for(let b of(this.collectionId=null!=a.collectionGroup?a.collectionGroup:a.path.lastSegment(),this.Ge=a.orderBy,this.Qe=[],a.filters)){let c=b;c.dt()?this.je=c:this.Qe.push(c)}}We(a){let b=du(a);if(void 0!==b&&!this.ze(b))return!1;let c=dv(a),d=0,e=0;for(;d<c.length&&this.ze(c[d]);++d);if(d===c.length)return!0;if(void 0!==this.je){let f=c[d];if(!this.He(this.je,f)||!this.Je(this.Ge[e++],f))return!1;++d}for(;d<c.length;++d){let g=c[d];if(e>=this.Ge.length||!this.Je(this.Ge[e++],g))return!1}return!0}ze(a){for(let b of this.Qe)if(this.He(b,a))return!0;return!1}He(a,b){if(void 0===a||!a.field.isEqual(b.fieldPath))return!1;let c="array-contains"===a.op||"array-contains-any"===a.op;return 2===b.kind===c}Je(a,b){return!!a.field.isEqual(b.fieldPath)&&(0===b.kind&&"asc"===a.dir||1===b.kind&&"desc"===a.dir)}}class ha{constructor(){this.index={}}add(a){let b=a.lastSegment(),c=a.popLast(),d=this.index[b]||new dZ(dp.comparator),e=!d.has(c);return this.index[b]=d.add(c),e}has(a){let b=a.lastSegment(),c=a.popLast(),d=this.index[b];return d&&d.has(c)}getEntries(a){return(this.index[a]||new dZ(dp.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let hb=new Uint8Array(0);class hc{constructor(a,b){this.user=a,this.databaseId=b,this.Xe=new ha,this.Ze=new fL(a=>eD(a),(a,b)=>eE(a,b)),this.uid=a.uid||""}addToCollectionParentIndex(a,b){if(!this.Xe.has(b)){let c=b.lastSegment(),d=b.popLast();a.addOnCommittedListener(()=>{this.Xe.add(b)});let e={collectionId:c,parent:gw(d)};return hd(a).put(e)}return dG.resolve()}getCollectionParents(a,b){let c=[],d=IDBKeyRange.bound([b,""],[dk(b),""],!1,!0);return hd(a).W(d).next(a=>{for(let d of a){if(d.collectionId!==b)break;c.push(gz(d.parent))}return c})}addFieldIndex(a,b){var c;let d=hf(a),e={indexId:(c=b).indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])};delete e.indexId;let f=d.add(e);if(b.indexState){let g=hg(a);return f.next(a=>{g.put(gZ(a,this.user,b.indexState.sequenceNumber,b.indexState.offset))})}return f.next()}deleteFieldIndex(a,b){let c=hf(a),d=hg(a),e=he(a);return c.delete(b.indexId).next(()=>d.delete(IDBKeyRange.bound([b.indexId],[b.indexId+1],!1,!0))).next(()=>e.delete(IDBKeyRange.bound([b.indexId],[b.indexId+1],!1,!0)))}getDocumentsMatchingTarget(a,b){let c=he(a),d=!0,e=new Map;return dG.forEach(this.tn(b),b=>this.en(a,b).next(a=>{d&&(d=!!a),e.set(b,a)})).next(()=>{if(d){let a=fV(),f=[];return dG.forEach(e,(d,e)=>{var g;c0("IndexedDbIndexManager",`Using index ${(g=d,`id=${g.indexId}|cg=${g.collectionGroup}|f=${g.fields.map(a=>`${a.fieldPath}:${a.kind}`).join(",")}`)} to execute ${eD(b)}`);let h=function(a,b){let c=du(b);if(void 0===c)return null;for(let d of eG(a,c.fieldPath))switch(d.op){case"array-contains-any":return d.value.arrayValue.values||[];case"array-contains":return[d.value]}return null}(e,d),i=function(a,b){let c=new Map;for(let d of dv(b))for(let e of eG(a,d.fieldPath))switch(e.op){case"==":case"in":c.set(d.fieldPath.canonicalString(),e.value);break;case"not-in":case"!=":return c.set(d.fieldPath.canonicalString(),e.value),Array.from(c.values())}return null}(e,d),j=function(a,b){let c=[],d=!0;for(let e of dv(b)){let f=0===e.kind?eH(a,e.fieldPath,a.startAt):eI(a,e.fieldPath,a.startAt);c.push(f.value),d&&(d=f.inclusive)}return new eS(c,d)}(e,d),k=function(a,b){let c=[],d=!0;for(let e of dv(b)){let f=0===e.kind?eI(a,e.fieldPath,a.endAt):eH(a,e.fieldPath,a.endAt);c.push(f.value),d&&(d=f.inclusive)}return new eS(c,d)}(e,d),l=this.nn(d,e,j),m=this.nn(d,e,k),n=this.sn(d,e,i),o=this.rn(d.indexId,h,l,j.inclusive,m,k.inclusive,n);return dG.forEach(o,d=>c.J(d,b.limit).next(b=>{b.forEach(b=>{let c=ds.fromSegments(b.documentKey);a.has(c)||(a=a.add(c),f.push(c))})}))}).next(()=>f)}return dG.resolve(null)})}tn(a){let b=this.Ze.get(a);return b||(b=[a],this.Ze.set(a,b),b)}rn(a,b,c,d,e,f,g){let h=(null!=b?b.length:1)*Math.max(c.length,e.length),i=h/(null!=b?b.length:1),j=[];for(let k=0;k<h;++k){let l=b?this.on(b[k/i]):hb,m=this.un(a,l,c[k%i],d),n=this.cn(a,l,e[k%i],f),o=g.map(b=>this.un(a,l,b,!0));j.push(...this.createRange(m,n,o))}return j}un(a,b,c,d){let e=new g6(a,ds.empty(),b,c);return d?e:e.Ke()}cn(a,b,c,d){let e=new g6(a,ds.empty(),b,c);return d?e.Ke():e}en(a,b){let c=new g9(b),d=null!=b.collectionGroup?b.collectionGroup:b.path.lastSegment();return this.getFieldIndexes(a,d).next(a=>{let b=null;for(let d of a)c.We(d)&&(!b||d.fields.length>b.fields.length)&&(b=d);return b})}getIndexType(a,b){let c=2;return dG.forEach(this.tn(b),b=>this.en(a,b).next(a=>{a?0!==c&&a.fields.length<function(a){let b=new dZ(dr.comparator),c=!1;for(let d of a.filters){let e=d;e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?c=!0:b=b.add(e.field))}for(let f of a.orderBy)f.field.isKeyField()||(b=b.add(f.field));return b.size+(c?1:0)}(b)&&(c=1):c=0})).next(()=>c)}an(a,b){let c=new g5;for(let d of dv(a)){let e=b.data.field(d.fieldPath);if(null==e)return null;let f=c.qe(d.kind);g2.Te.ce(e,f)}return c.$e()}on(a){let b=new g5;return g2.Te.ce(a,b.qe(0)),b.$e()}hn(a,b){let c=new g5;return g2.Te.ce(em(this.databaseId,b),c.qe(function(a){let b=dv(a);return 0===b.length?0:b[b.length-1].kind}(a))),c.$e()}sn(a,b,c){if(null===c)return[];let d=[];d.push(new g5);let e=0;for(let f of dv(a)){let g=c[e++];for(let h of d)if(this.ln(b,f.fieldPath)&&eo(g))d=this.fn(d,f,g);else{let i=h.qe(f.kind);g2.Te.ce(g,i)}}return this.dn(d)}nn(a,b,c){return this.sn(a,b,c.position)}dn(a){let b=[];for(let c=0;c<a.length;++c)b[c]=a[c].$e();return b}fn(a,b,c){let d=[...a],e=[];for(let f of c.arrayValue.values||[])for(let g of d){let h=new g5;h.seed(g.$e()),g2.Te.ce(f,h.qe(b.kind)),e.push(h)}return e}ln(a,b){return!!a.filters.find(a=>a instanceof eJ&&a.field.isEqual(b)&&("in"===a.op||"not-in"===a.op))}getFieldIndexes(a,b){let c=hf(a),d=hg(a);return(b?c.W("collectionGroupIndex",IDBKeyRange.bound(b,b)):c.W()).next(a=>{let b=[];return dG.forEach(a,a=>d.get([a.indexId,this.uid]).next(c=>{b.push(function(a,b){let c=b?new dy(b.sequenceNumber,new dB(gS(b.readTime),new ds(gz(b.documentKey)),b.largestBatchId)):dy.empty(),d=a.fields.map(([a,b])=>new dw(dr.fromServerFormat(a),b));return new dt(a.indexId,a.collectionGroup,d,c)}(a,c))})).next(()=>b)})}getNextCollectionGroupToUpdate(a){return this.getFieldIndexes(a).next(a=>0===a.length?null:(a.sort((a,b)=>{let c=a.indexState.sequenceNumber-b.indexState.sequenceNumber;return 0!==c?c:di(a.collectionGroup,b.collectionGroup)}),a[0].collectionGroup))}updateCollectionGroup(a,b,c){let d=hf(a),e=hg(a);return this._n(a).next(a=>d.W("collectionGroupIndex",IDBKeyRange.bound(b,b)).next(b=>dG.forEach(b,b=>e.put(gZ(b.indexId,this.user,a,c)))))}updateIndexEntries(a,b){let c=new Map;return dG.forEach(b,(b,d)=>{let e=c.get(b.collectionGroup);return(e?dG.resolve(e):this.getFieldIndexes(a,b.collectionGroup)).next(e=>(c.set(b.collectionGroup,e),dG.forEach(e,c=>this.wn(a,b,c).next(b=>{let e=this.mn(d,c);return b.isEqual(e)?dG.resolve():this.gn(a,d,c,b,e)}))))})}yn(a,b,c,d){return he(a).put({indexId:d.indexId,uid:this.uid,arrayValue:d.arrayValue,directionalValue:d.directionalValue,orderedDocumentKey:this.hn(c,b.key),documentKey:b.key.path.toArray()})}pn(a,b,c,d){return he(a).delete([d.indexId,this.uid,d.arrayValue,d.directionalValue,this.hn(c,b.key),b.key.path.toArray()])}wn(a,b,c){let d=he(a),e=new dZ(g7);return d.Z({index:"documentKeyIndex",range:IDBKeyRange.only([c.indexId,this.uid,this.hn(c,b)])},(a,d)=>{e=e.add(new g6(c.indexId,b,d.arrayValue,d.directionalValue))}).next(()=>e)}mn(a,b){let c=new dZ(g7),d=this.an(b,a);if(null==d)return c;let e=du(b);if(null!=e){let f=a.data.field(e.fieldPath);if(eo(f))for(let g of f.arrayValue.values||[])c=c.add(new g6(b.indexId,a.key,this.on(g),d))}else c=c.add(new g6(b.indexId,a.key,hb,d));return c}gn(a,b,c,d,e){c0("IndexedDbIndexManager","Updating index entries for document '%s'",b.key);let f=[];return function(a,b,c,d,e){let f=a.getIterator(),g=b.getIterator(),h=d_(f),i=d_(g);for(;h||i;){let j=!1,k=!1;if(h&&i){let l=c(h,i);l<0?k=!0:l>0&&(j=!0)}else null!=h?k=!0:j=!0;j?(d(i),i=d_(g)):k?(e(h),h=d_(f)):(h=d_(f),i=d_(g))}}(d,e,g7,d=>{f.push(this.yn(a,b,c,d))},d=>{f.push(this.pn(a,b,c,d))}),dG.waitFor(f)}_n(a){let b=1;return hg(a).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(a,c,d)=>{d.done(),b=c.sequenceNumber+1}).next(()=>b)}createRange(a,b,c){c=c.sort((a,b)=>g7(a,b)).filter((a,b,c)=>!b||0!==g7(a,c[b-1]));let d=[];for(let e of(d.push(a),c)){let f=g7(e,a),g=g7(e,b);if(0===f)d[0]=a.Ke();else if(f>0&&g<0)d.push(e),d.push(e.Ke());else if(g>0)break}d.push(b);let h=[];for(let i=0;i<d.length;i+=2)h.push(IDBKeyRange.bound([d[i].indexId,this.uid,d[i].arrayValue,d[i].directionalValue,hb,[]],[d[i+1].indexId,this.uid,d[i+1].arrayValue,d[i+1].directionalValue,hb,[]]));return h}getMinOffsetFromCollectionGroup(a,b){return this.getFieldIndexes(a,b).next(hh)}getMinOffset(a,b){return dG.mapArray(this.tn(b),b=>this.en(a,b).next(a=>a||c4())).next(hh)}}function hd(a){return gJ(a,"collectionParents")}function he(a){return gJ(a,"indexEntries")}function hf(a){return gJ(a,"indexConfiguration")}function hg(a){return gJ(a,"indexState")}function hh(a){var b;(b=0!==a.length)||c4();let c=a[0].indexState.offset,d=c.largestBatchId;for(let e=1;e<a.length;e++){let f=a[e].indexState.offset;0>dC(f,c)&&(c=f),d<f.largestBatchId&&(d=f.largestBatchId)}return new dB(c.readTime,c.documentKey,d)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let hi={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class hj{constructor(a,b,c){this.cacheSizeCollectionThreshold=a,this.percentileToCollect=b,this.maximumSequenceNumbersToCollect=c}static withCacheSize(a){return new hj(a,hj.DEFAULT_COLLECTION_PERCENTILE,hj.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Delete a mutation batch and the associated document mutations.
 * @returns A PersistencePromise of the document mutations that were removed.
 */ function hk(a,b,c){let d=a.store("mutations"),e=a.store("documentMutations"),f=[],g=IDBKeyRange.only(c.batchId),h=0,i=d.Z({range:g},(a,b,c)=>(h++,c.delete()));f.push(i.next(()=>{var a;(a=1===h)||c4()}));let j=[];for(let k of c.mutations){let l=gB(b,k.key.path,c.batchId);f.push(e.delete(l)),j.push(k.key)}return dG.waitFor(f).next(()=>j)}function hl(a){if(!a)return 0;let b;if(a.document)b=a.document;else if(a.unknownDocument)b=a.unknownDocument;else{if(!a.noDocument)throw c4();b=a.noDocument}return JSON.stringify(b).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** A mutation queue for a specific user, backed by IndexedDB. */ hj.DEFAULT_COLLECTION_PERCENTILE=10,hj.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,hj.DEFAULT=new hj(41943040,hj.DEFAULT_COLLECTION_PERCENTILE,hj.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),hj.DISABLED=new hj(-1,0,0);class hm{constructor(a,b,c,d){this.userId=a,this.It=b,this.indexManager=c,this.referenceDelegate=d,this.In={}}static oe(a,b,c,d){var e;(e=""!==a.uid)||c4();let f=a.isAuthenticated()?a.uid:"";return new hm(f,b,c,d)}checkEmpty(a){let b=!0,c=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ho(a).Z({index:"userMutationsIndex",range:c},(a,c,d)=>{b=!1,d.done()}).next(()=>b)}addMutationBatch(a,b,c,d){let e=hp(a),f=ho(a);return f.add({}).next(g=>{var h;(h="number"==typeof g)||c4();let i=new gK(g,b,c,d),j=function(a,b,c){let d=c.baseMutations.map(b=>gk(a.re,b)),e=c.mutations.map(b=>gk(a.re,b));return{userId:b,batchId:c.batchId,localWriteTimeMs:c.localWriteTime.toMillis(),baseMutations:d,mutations:e}}(this.It,this.userId,i),k=[],l=new dZ((a,b)=>di(a.canonicalString(),b.canonicalString()));for(let m of d){let n=gB(this.userId,m.key.path,g);l=l.add(m.key.path.popLast()),k.push(f.put(j)),k.push(e.put(n,gC))}return l.forEach(b=>{k.push(this.indexManager.addToCollectionParentIndex(a,b))}),a.addOnCommittedListener(()=>{this.In[g]=i.keys()}),dG.waitFor(k).next(()=>i)})}lookupMutationBatch(a,b){return ho(a).get(b).next(a=>{var b;return a?(a.userId===this.userId||c4(),gT(this.It,a)):null})}Tn(a,b){return this.In[b]?dG.resolve(this.In[b]):this.lookupMutationBatch(a,b).next(a=>{if(a){let c=a.keys();return this.In[b]=c,c}return null})}getNextMutationBatchAfterBatchId(a,b){let c=b+1,d=IDBKeyRange.lowerBound([this.userId,c]),e=null;return ho(a).Z({index:"userMutationsIndex",range:d},(a,b,d)=>{var f;b.userId===this.userId&&(b.batchId>=c||c4(),e=gT(this.It,b)),d.done()}).next(()=>e)}getHighestUnacknowledgedBatchId(a){let b=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),c=-1;return ho(a).Z({index:"userMutationsIndex",range:b,reverse:!0},(a,b,d)=>{c=b.batchId,d.done()}).next(()=>c)}getAllMutationBatches(a){let b=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ho(a).W("userMutationsIndex",b).next(a=>a.map(a=>gT(this.It,a)))}getAllMutationBatchesAffectingDocumentKey(a,b){let c=gA(this.userId,b.path),d=IDBKeyRange.lowerBound(c),e=[];return hp(a).Z({range:d},(c,d,f)=>{let[g,h,i]=c,j=gz(h);if(g===this.userId&&b.path.isEqual(j))return ho(a).get(i).next(a=>{var b;if(!a)throw c4();a.userId===this.userId||c4(),e.push(gT(this.It,a))});f.done()}).next(()=>e)}getAllMutationBatchesAffectingDocumentKeys(a,b){let c=new dZ(di),d=[];return b.forEach(b=>{let e=gA(this.userId,b.path),f=IDBKeyRange.lowerBound(e),g=hp(a).Z({range:f},(a,d,e)=>{let[f,g,h]=a,i=gz(g);f===this.userId&&b.path.isEqual(i)?c=c.add(h):e.done()});d.push(g)}),dG.waitFor(d).next(()=>this.En(a,c))}getAllMutationBatchesAffectingQuery(a,b){let c=b.path,d=c.length+1,e=gA(this.userId,c),f=IDBKeyRange.lowerBound(e),g=new dZ(di);return hp(a).Z({range:f},(a,b,e)=>{let[f,h,i]=a,j=gz(h);f===this.userId&&c.isPrefixOf(j)?j.length===d&&(g=g.add(i)):e.done()}).next(()=>this.En(a,g))}En(a,b){let c=[],d=[];return b.forEach(b=>{d.push(ho(a).get(b).next(a=>{var b;if(null===a)throw c4();a.userId===this.userId||c4(),c.push(gT(this.It,a))}))}),dG.waitFor(d).next(()=>c)}removeMutationBatch(a,b){return hk(a.ie,this.userId,b).next(c=>(a.addOnCommittedListener(()=>{this.An(b.batchId)}),dG.forEach(c,b=>this.referenceDelegate.markPotentiallyOrphaned(a,b))))}An(a){delete this.In[a]}performConsistencyCheck(a){return this.checkEmpty(a).next(b=>{if(!b)return dG.resolve();let c=IDBKeyRange.lowerBound([this.userId]),d=[];return hp(a).Z({range:c},(a,b,c)=>{if(a[0]===this.userId){let e=gz(a[1]);d.push(e)}else c.done()}).next(()=>{var a;(a=0===d.length)||c4()})})}containsKey(a,b){return hn(a,this.userId,b)}Rn(a){return hq(a).get(this.userId).next(a=>a||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function hn(a,b,c){let d=gA(b,c.path),e=d[1],f=IDBKeyRange.lowerBound(d),g=!1;return hp(a).Z({range:f,X:!0},(a,c,d)=>{let[f,h,i]=a;f===b&&h===e&&(g=!0),d.done()}).next(()=>g)}function ho(a){return gJ(a,"mutations")}function hp(a){return gJ(a,"documentMutations")}function hq(a){return gJ(a,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Offset to ensure non-overlapping target ids. */ /**
 * Generates monotonically increasing target IDs for sending targets to the
 * watch stream.
 *
 * The client constructs two generators, one for the target cache, and one for
 * for the sync engine (to generate limbo documents targets). These
 * generators produce non-overlapping IDs (by using even and odd IDs
 * respectively).
 *
 * By separating the target ID space, the query cache can generate target IDs
 * that persist across client restarts, while sync engine can independently
 * generate in-memory target IDs that are transient and can be reused after a
 * restart.
 */ class hr{constructor(a){this.bn=a}next(){return this.bn+=2,this.bn}static Pn(){return new hr(0)}static vn(){return new hr(-1)}}function hs(a){return gJ(a,"targets")}function ht(a){return gJ(a,"targetGlobal")}function hu(a){return gJ(a,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function hv([a,b],[c,d]){let e=di(a,c);return 0===e?di(b,d):e}class hw{constructor(a){this.xn=a,this.buffer=new dZ(hv),this.Nn=0}kn(){return++this.Nn}On(a){let b=[a,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(b);else{let c=this.buffer.last();0>hv(b,c)&&(this.buffer=this.buffer.delete(c).add(b))}}get maxValue(){return this.buffer.last()[0]}}class hx{constructor(a,b,c){this.garbageCollector=a,this.asyncQueue=b,this.localStore=c,this.Mn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return null!==this.Mn}Fn(a){c0("LruGarbageCollector",`Garbage collection scheduled in ${a}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",a,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(a){dL(a)?c0("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",a):await dF(a)}await this.Fn(3e5)})}}function hy(a,b){var c,d;return hu(a).put((c=b,d=a.currentSequenceNumber,{targetId:0,path:gw(c.path),sequenceNumber:d}))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An in-memory buffer of entries to be written to a RemoteDocumentCache.
 * It can be used to batch up a set of changes to be written to the cache, but
 * additionally supports reading entries back with the `getEntry()` method,
 * falling back to the underlying RemoteDocumentCache if no entry is
 * buffered.
 *
 * Entries added to the cache *must* be read first. This is to facilitate
 * calculating the size delta of the pending changes.
 *
 * PORTING NOTE: This class was implemented then removed from other platforms.
 * If byte-counting ends up being needed on the other platforms, consider
 * porting this class as part of that implementation work.
 */ class hz{constructor(){this.changes=new fL(a=>a.toString(),(a,b)=>a.isEqual(b)),this.changesApplied=!1}addEntry(a){this.assertNotApplied(),this.changes.set(a.key,a)}removeEntry(a,b){this.assertNotApplied(),this.changes.set(a,eA.newInvalidDocument(a).setReadTime(b))}getEntry(a,b){this.assertNotApplied();let c=this.changes.get(b);return void 0!==c?dG.resolve(c):this.getFromCache(a,b)}getEntries(a,b){return this.getAllFromCache(a,b)}apply(a){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(a)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The RemoteDocumentCache for IndexedDb. To construct, invoke
 * `newIndexedDbRemoteDocumentCache()`.
 */ class hA{constructor(a){this.It=a}setIndexManager(a){this.indexManager=a}addEntry(a,b,c){return hE(a).put(c)}removeEntry(a,b,c){return hE(a).delete(function(a,b){let c=a.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],gQ(b),c[c.length-1]]}(b,c))}updateMetadata(a,b){return this.getMetadata(a).next(c=>(c.byteSize+=b,this.Qn(a,c)))}getEntry(a,b){let c=eA.newInvalidDocument(b);return hE(a).Z({index:"documentKeyIndex",range:IDBKeyRange.only(hF(b))},(a,d)=>{c=this.jn(b,d)}).next(()=>c)}Wn(a,b){let c={size:0,document:eA.newInvalidDocument(b)};return hE(a).Z({index:"documentKeyIndex",range:IDBKeyRange.only(hF(b))},(a,d)=>{c={document:this.jn(b,d),size:hl(d)}}).next(()=>c)}getEntries(a,b){let c=fM;return this.zn(a,b,(a,b)=>{let d=this.jn(a,b);c=c.insert(a,d)}).next(()=>c)}Hn(a,b){let c=fM,d=new dW(ds.comparator);return this.zn(a,b,(a,b)=>{let e=this.jn(a,b);c=c.insert(a,e),d=d.insert(a,hl(b))}).next(()=>({documents:c,Jn:d}))}zn(a,b,c){if(b.isEmpty())return dG.resolve();let d=new dZ(hH);b.forEach(a=>d=d.add(a));let e=IDBKeyRange.bound(hF(d.first()),hF(d.last())),f=d.getIterator(),g=f.getNext();return hE(a).Z({index:"documentKeyIndex",range:e},(a,b,d)=>{let e=ds.fromSegments([...b.prefixPath,b.collectionGroup,b.documentId]);for(;g&&0>hH(g,e);)c(g,null),g=f.getNext();g&&g.isEqual(e)&&(c(g,b),g=f.hasNext()?f.getNext():null),g?d.j(hF(g)):d.done()}).next(()=>{for(;g;)c(g,null),g=f.hasNext()?f.getNext():null})}getAllFromCollection(a,b,c){let d=[b.popLast().toArray(),b.lastSegment(),gQ(c.readTime),c.documentKey.path.isEmpty()?"":c.documentKey.path.lastSegment()],e=[b.popLast().toArray(),b.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return hE(a).W(IDBKeyRange.bound(d,e,!0)).next(a=>{let b=fM;for(let c of a){let d=this.jn(ds.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);b=b.insert(d.key,d)}return b})}getAllFromCollectionGroup(a,b,c,d){let e=fM,f=hG(b,c),g=hG(b,dB.max());return hE(a).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(f,g,!0)},(a,b,c)=>{let f=this.jn(ds.fromSegments(b.prefixPath.concat(b.collectionGroup,b.documentId)),b);(e=e.insert(f.key,f)).size===d&&c.done()}).next(()=>e)}newChangeBuffer(a){return new hC(this,!!a&&a.trackRemovals)}getSize(a){return this.getMetadata(a).next(a=>a.byteSize)}getMetadata(a){return hD(a).get("remoteDocumentGlobalKey").next(a=>{var b;return!a&&c4(),a})}Qn(a,b){return hD(a).put("remoteDocumentGlobalKey",b)}jn(a,b){if(b){let c=function(a,b){let c;if(b.document)c=gj(a.re,b.document,!!b.hasCommittedMutations);else if(b.noDocument){let d=ds.fromSegments(b.noDocument.path),e=gS(b.noDocument.readTime);c=eA.newNoDocument(d,e),b.hasCommittedMutations&&c.setHasCommittedMutations()}else{if(!b.unknownDocument)return c4();{let f=ds.fromSegments(b.unknownDocument.path),g=gS(b.unknownDocument.version);c=eA.newUnknownDocument(f,g)}}return b.readTime&&c.setReadTime(function(a){let b=new dl(a[0],a[1]);return dm.fromTimestamp(b)}(b.readTime)),c}(this.It,b);if(!(c.isNoDocument()&&c.version.isEqual(dm.min())))return c}return eA.newInvalidDocument(a)}}function hB(a){return new hA(a)}class hC extends null{constructor(a,b){super(),this.Yn=a,this.trackRemovals=b,this.Xn=new fL(a=>a.toString(),(a,b)=>a.isEqual(b))}applyChanges(a){let b=[],c=0,d=new dZ((a,b)=>di(a.canonicalString(),b.canonicalString()));return this.changes.forEach((e,f)=>{let g=this.Xn.get(e);if(b.push(this.Yn.removeEntry(a,e,g.readTime)),f.isValidDocument()){let h=gP(this.Yn.It,f);d=d.add(e.path.popLast());let i=hl(h);c+=i-g.size,b.push(this.Yn.addEntry(a,e,h))}else if(c-=g.size,this.trackRemovals){let j=gP(this.Yn.It,f.convertToNoDocument(dm.min()));b.push(this.Yn.addEntry(a,e,j))}}),d.forEach(c=>{b.push(this.Yn.indexManager.addToCollectionParentIndex(a,c))}),b.push(this.Yn.updateMetadata(a,c)),dG.waitFor(b)}getFromCache(a,b){return this.Yn.Wn(a,b).next(a=>(this.Xn.set(b,{size:a.size,readTime:a.document.readTime}),a.document))}getAllFromCache(a,b){return this.Yn.Hn(a,b).next(({documents:a,Jn:b})=>(b.forEach((b,c)=>{this.Xn.set(b,{size:c,readTime:a.get(b).readTime})}),a))}}function hD(a){return gJ(a,"remoteDocumentGlobal")}function hE(a){return gJ(a,"remoteDocumentsV14")}function hF(a){let b=a.path.toArray();return[b.slice(0,b.length-2),b[b.length-2],b[b.length-1]]}function hG(a,b){let c=b.documentKey.path.toArray();return[a,gQ(b.readTime),c.slice(0,c.length-2),c.length>0?c[c.length-1]:""]}function hH(a,b){let c=a.path.toArray(),d=b.path.toArray(),e=0;for(let f=0;f<c.length-2&&f<d.length-2;++f)if(e=di(c[f],d[f]))return e;return(e=di(c.length,d.length))||(e=di(c[c.length-2],d[d.length-2]))||di(c[c.length-1],d[d.length-1])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Schema Version for the Web client:
 * 1.  Initial version including Mutation Queue, Query Cache, and Remote
 *     Document Cache
 * 2.  Used to ensure a targetGlobal object exists and add targetCount to it. No
 *     longer required because migration 3 unconditionally clears it.
 * 3.  Dropped and re-created Query Cache to deal with cache corruption related
 *     to limbo resolution. Addresses
 *     https://github.com/firebase/firebase-ios-sdk/issues/1548
 * 4.  Multi-Tab Support.
 * 5.  Removal of held write acks.
 * 6.  Create document global for tracking document cache size.
 * 7.  Ensure every cached document has a sentinel row with a sequence number.
 * 8.  Add collection-parent index for Collection Group queries.
 * 9.  Change RemoteDocumentChanges store to be keyed by readTime rather than
 *     an auto-incrementing ID. This is required for Index-Free queries.
 * 10. Rewrite the canonical IDs to the explicit Protobuf-based format.
 * 11. Add bundles and named_queries for bundle support.
 * 12. Add document overlays.
 * 13. Rewrite the keys of the remote document cache to allow for efficient
 *     document lookup via `getAll()`.
 * 14. Add overlays.
 * 15. Add indexing support.
 */ /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a local view (overlay) of a document, and the fields that are
 * locally mutated.
 */ class hI{constructor(a,b){this.overlayedDocument=a,this.mutatedFields=b}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A readonly view of the local state of all documents we're tracking (i.e. we
 * have a cached version in remoteDocumentCache or local mutations for the
 * document). The view is computed by applying the mutations in the
 * MutationQueue to the RemoteDocumentCache.
 */ class hJ{constructor(a,b,c,d){this.remoteDocumentCache=a,this.mutationQueue=b,this.documentOverlayCache=c,this.indexManager=d}getDocument(a,b){let c=null;return this.documentOverlayCache.getOverlay(a,b).next(d=>(c=d,this.getBaseDocument(a,b,c))).next(a=>(null!==c&&fy(c.mutation,a,d0.empty(),dl.now()),a))}getDocuments(a,b){return this.remoteDocumentCache.getEntries(a,b).next(b=>this.getLocalViewOfDocuments(a,b,fV()).next(()=>b))}getLocalViewOfDocuments(a,b,c=fV()){let d=fQ();return this.populateOverlays(a,d,b).next(()=>this.computeViews(a,b,d,c).next(a=>{let b=fO();return a.forEach((a,c)=>{b=b.insert(a,c.overlayedDocument)}),b}))}getOverlayedDocuments(a,b){let c=fQ();return this.populateOverlays(a,c,b).next(()=>this.computeViews(a,b,c,fV()))}populateOverlays(a,b,c){let d=[];return c.forEach(a=>{b.has(a)||d.push(a)}),this.documentOverlayCache.getOverlays(a,d).next(a=>{a.forEach((a,c)=>{b.set(a,c)})})}computeViews(a,b,c,d){let e=fM,f=fS(),g=fS();return b.forEach((a,b)=>{let g=c.get(b.key);d.has(b.key)&&(void 0===g||g.mutation instanceof fC)?e=e.insert(b.key,b):void 0!==g&&(f.set(b.key,g.mutation.getFieldMask()),fy(g.mutation,b,g.mutation.getFieldMask(),dl.now()))}),this.recalculateAndSaveOverlays(a,e).next(a=>(a.forEach((a,b)=>f.set(a,b)),b.forEach((a,b)=>{var c;return g.set(a,new hI(b,null!==(c=f.get(a))&& void 0!==c?c:null))}),g))}recalculateAndSaveOverlays(a,b){let c=fS(),d=new dW((a,b)=>a-b),e=fV();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(a,b).next(a=>{for(let e of a)e.keys().forEach(a=>{let f=b.get(a);if(null===f)return;let g=c.get(a)||d0.empty();g=e.applyToLocalView(f,g),c.set(a,g);let h=(d.get(e.batchId)||fV()).add(a);d=d.insert(e.batchId,h)})}).next(()=>{let f=[],g=d.getReverseIterator();for(;g.hasNext();){let h=g.getNext(),i=h.key,j=h.value,k=fR();j.forEach(a=>{if(!e.has(a)){let d=fw(b.get(a),c.get(a));null!==d&&k.set(a,d),e=e.add(a)}}),f.push(this.documentOverlayCache.saveOverlays(a,i,k))}return dG.waitFor(f)}).next(()=>c)}recalculateAndSaveOverlaysForDocumentKeys(a,b){return this.remoteDocumentCache.getEntries(a,b).next(b=>this.recalculateAndSaveOverlays(a,b))}getDocumentsMatchingQuery(a,b,c){var d;return(d=b,ds.isDocumentKey(d.path)&&null===d.collectionGroup&&0===d.filters.length)?this.getDocumentsMatchingDocumentQuery(a,b.path):e1(b)?this.getDocumentsMatchingCollectionGroupQuery(a,b,c):this.getDocumentsMatchingCollectionQuery(a,b,c)}getNextDocuments(a,b,c,d){return this.remoteDocumentCache.getAllFromCollectionGroup(a,b,c,d).next(e=>{let f=d-e.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(a,b,c.largestBatchId,d-e.size):dG.resolve(fQ()),g=-1,h=e;return f.next(b=>dG.forEach(b,(b,c)=>(g<c.largestBatchId&&(g=c.largestBatchId),e.get(b)?dG.resolve():this.getBaseDocument(a,b,c).next(a=>{h=h.insert(b,a)}))).next(()=>this.populateOverlays(a,b,e)).next(()=>this.computeViews(a,h,b,fV())).next(a=>({batchId:g,changes:fP(a)})))})}getDocumentsMatchingDocumentQuery(a,b){return this.getDocument(a,new ds(b)).next(a=>{let b=fO();return a.isFoundDocument()&&(b=b.insert(a.key,a)),b})}getDocumentsMatchingCollectionGroupQuery(a,b,c){let d=b.collectionGroup,e=fO();return this.indexManager.getCollectionParents(a,d).next(f=>dG.forEach(f,f=>{var g,h;let i=(g=b,h=f.child(d),new eX(h,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt));return this.getDocumentsMatchingCollectionQuery(a,i,c).next(a=>{a.forEach((a,b)=>{e=e.insert(a,b)})})}).next(()=>e))}getDocumentsMatchingCollectionQuery(a,b,c){let d;return this.remoteDocumentCache.getAllFromCollection(a,b.path,c).next(e=>(d=e,this.documentOverlayCache.getOverlaysForCollection(a,b.path,c.largestBatchId))).next(a=>{a.forEach((a,b)=>{let c=b.getKey();null===d.get(c)&&(d=d.insert(c,eA.newInvalidDocument(c)))});let c=fO();return d.forEach((d,e)=>{let f=a.get(d);void 0!==f&&fy(f.mutation,e,d0.empty(),dl.now()),e8(b,e)&&(c=c.insert(d,e))}),c})}getBaseDocument(a,b,c){return null===c||1===c.mutation.type?this.remoteDocumentCache.getEntry(a,b):dG.resolve(eA.newInvalidDocument(b))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An in-memory implementation of DocumentOverlayCache.
 */ class hK{constructor(){this.overlays=new dW(ds.comparator),this.es=new Map}getOverlay(a,b){return dG.resolve(this.overlays.get(b))}getOverlays(a,b){let c=fQ();return dG.forEach(b,b=>this.getOverlay(a,b).next(a=>{null!==a&&c.set(b,a)})).next(()=>c)}saveOverlays(a,b,c){return c.forEach((c,d)=>{this.ue(a,b,d)}),dG.resolve()}removeOverlaysForBatchId(a,b,c){let d=this.es.get(c);return void 0!==d&&(d.forEach(a=>this.overlays=this.overlays.remove(a)),this.es.delete(c)),dG.resolve()}getOverlaysForCollection(a,b,c){let d=fQ(),e=b.length+1,f=new ds(b.child("")),g=this.overlays.getIteratorFrom(f);for(;g.hasNext();){let h=g.getNext().value,i=h.getKey();if(!b.isPrefixOf(i.path))break;i.path.length===e&&h.largestBatchId>c&&d.set(h.getKey(),h)}return dG.resolve(d)}getOverlaysForCollectionGroup(a,b,c,d){let e=new dW((a,b)=>a-b),f=this.overlays.getIterator();for(;f.hasNext();){let g=f.getNext().value;if(g.getKey().getCollectionGroup()===b&&g.largestBatchId>c){let h=e.get(g.largestBatchId);null===h&&(h=fQ(),e=e.insert(g.largestBatchId,h)),h.set(g.getKey(),g)}}let i=fQ(),j=e.getIterator();for(;j.hasNext()&&(j.getNext().value.forEach((a,b)=>i.set(a,b)),!(i.size()>=d)););return dG.resolve(i)}ue(a,b,c){let d=this.overlays.get(c.key);if(null!==d){let e=this.es.get(d.largestBatchId).delete(c.key);this.es.set(d.largestBatchId,e)}this.overlays=this.overlays.insert(c.key,new gM(b,c));let f=this.es.get(b);void 0===f&&(f=fV(),this.es.set(b,f)),this.es.set(b,f.add(c.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A collection of references to a document from some kind of numbered entity
 * (either a target ID or batch ID). As references are added to or removed from
 * the set corresponding events are emitted to a registered garbage collector.
 *
 * Each reference is represented by a DocumentReference object. Each of them
 * contains enough information to uniquely identify the reference. They are all
 * stored primarily in a set sorted by key. A document is considered garbage if
 * there's no references in that set (this can be efficiently checked thanks to
 * sorting by key).
 *
 * ReferenceSet also keeps a secondary set that contains references sorted by
 * IDs. This one is used to efficiently implement removal of all references by
 * some target ID.
 */ class hL{constructor(){this.ns=new dZ(hM.ss),this.rs=new dZ(hM.os)}isEmpty(){return this.ns.isEmpty()}addReference(a,b){let c=new hM(a,b);this.ns=this.ns.add(c),this.rs=this.rs.add(c)}us(a,b){a.forEach(a=>this.addReference(a,b))}removeReference(a,b){this.cs(new hM(a,b))}hs(a,b){a.forEach(a=>this.removeReference(a,b))}ls(a){let b=new ds(new dp([])),c=new hM(b,a),d=new hM(b,a+1),e=[];return this.rs.forEachInRange([c,d],a=>{this.cs(a),e.push(a.key)}),e}fs(){this.ns.forEach(a=>this.cs(a))}cs(a){this.ns=this.ns.delete(a),this.rs=this.rs.delete(a)}ds(a){let b=new ds(new dp([])),c=new hM(b,a),d=new hM(b,a+1),e=fV();return this.rs.forEachInRange([c,d],a=>{e=e.add(a.key)}),e}containsKey(a){let b=new hM(a,0),c=this.ns.firstAfterOrEqual(b);return null!==c&&a.isEqual(c.key)}}class hM{constructor(a,b){this.key=a,this._s=b}static ss(a,b){return ds.comparator(a.key,b.key)||di(a._s,b._s)}static os(a,b){return di(a._s,b._s)||ds.comparator(a.key,b.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hN{constructor(a,b){this.indexManager=a,this.referenceDelegate=b,this.mutationQueue=[],this.ws=1,this.gs=new dZ(hM.ss)}checkEmpty(a){return dG.resolve(0===this.mutationQueue.length)}addMutationBatch(a,b,c,d){let e=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let f=new gK(e,b,c,d);for(let g of(this.mutationQueue.push(f),d))this.gs=this.gs.add(new hM(g.key,e)),this.indexManager.addToCollectionParentIndex(a,g.key.path.popLast());return dG.resolve(f)}lookupMutationBatch(a,b){return dG.resolve(this.ys(b))}getNextMutationBatchAfterBatchId(a,b){let c=this.ps(b+1),d=c<0?0:c;return dG.resolve(this.mutationQueue.length>d?this.mutationQueue[d]:null)}getHighestUnacknowledgedBatchId(){return dG.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(a){return dG.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(a,b){let c=new hM(b,0),d=new hM(b,Number.POSITIVE_INFINITY),e=[];return this.gs.forEachInRange([c,d],a=>{let b=this.ys(a._s);e.push(b)}),dG.resolve(e)}getAllMutationBatchesAffectingDocumentKeys(a,b){let c=new dZ(di);return b.forEach(a=>{let b=new hM(a,0),d=new hM(a,Number.POSITIVE_INFINITY);this.gs.forEachInRange([b,d],a=>{c=c.add(a._s)})}),dG.resolve(this.Is(c))}getAllMutationBatchesAffectingQuery(a,b){let c=b.path,d=c.length+1,e=c;ds.isDocumentKey(e)||(e=e.child(""));let f=new hM(new ds(e),0),g=new dZ(di);return this.gs.forEachWhile(a=>{let b=a.key.path;return!!c.isPrefixOf(b)&&(b.length===d&&(g=g.add(a._s)),!0)},f),dG.resolve(this.Is(g))}Is(a){let b=[];return a.forEach(a=>{let c=this.ys(a);null!==c&&b.push(c)}),b}removeMutationBatch(a,b){var c;0===this.Ts(b.batchId,"removed")||c4(),this.mutationQueue.shift();let d=this.gs;return dG.forEach(b.mutations,c=>{let e=new hM(c.key,b.batchId);return d=d.delete(e),this.referenceDelegate.markPotentiallyOrphaned(a,c.key)}).next(()=>{this.gs=d})}An(a){}containsKey(a,b){let c=new hM(b,0),d=this.gs.firstAfterOrEqual(c);return dG.resolve(b.isEqual(d&&d.key))}performConsistencyCheck(a){return this.mutationQueue.length,dG.resolve()}Ts(a,b){return this.ps(a)}ps(a){return 0===this.mutationQueue.length?0:a-this.mutationQueue[0].batchId}ys(a){let b=this.ps(a);return b<0||b>=this.mutationQueue.length?null:this.mutationQueue[b]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The memory-only RemoteDocumentCache for IndexedDb. To construct, invoke
 * `newMemoryRemoteDocumentCache()`.
 */ class hO{constructor(a){this.Es=a,this.docs=new dW(ds.comparator),this.size=0}setIndexManager(a){this.indexManager=a}addEntry(a,b){let c=b.key,d=this.docs.get(c),e=d?d.size:0,f=this.Es(b);return this.docs=this.docs.insert(c,{document:b.mutableCopy(),size:f}),this.size+=f-e,this.indexManager.addToCollectionParentIndex(a,c.path.popLast())}removeEntry(a){let b=this.docs.get(a);b&&(this.docs=this.docs.remove(a),this.size-=b.size)}getEntry(a,b){let c=this.docs.get(b);return dG.resolve(c?c.document.mutableCopy():eA.newInvalidDocument(b))}getEntries(a,b){let c=fM;return b.forEach(a=>{let b=this.docs.get(a);c=c.insert(a,b?b.document.mutableCopy():eA.newInvalidDocument(a))}),dG.resolve(c)}getAllFromCollection(a,b,c){let d=fM,e=new ds(b.child("")),f=this.docs.getIteratorFrom(e);for(;f.hasNext();){let{key:g,value:{document:h}}=f.getNext();if(!b.isPrefixOf(g.path))break;g.path.length>b.length+1||0>=dC(dA(h),c)||(d=d.insert(h.key,h.mutableCopy()))}return dG.resolve(d)}getAllFromCollectionGroup(a,b,c,d){c4()}As(a,b){return dG.forEach(this.docs,a=>b(a))}newChangeBuffer(a){return new hP(this)}getSize(a){return dG.resolve(this.size)}}class hP extends hz{constructor(a){super(),this.Yn=a}applyChanges(a){let b=[];return this.changes.forEach((c,d)=>{d.isValidDocument()?b.push(this.Yn.addEntry(a,d)):this.Yn.removeEntry(c)}),dG.waitFor(b)}getFromCache(a,b){return this.Yn.getEntry(a,b)}getAllFromCache(a,b){return this.Yn.getEntries(a,b)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A memory-backed instance of Persistence. Data is stored only in RAM and
 * not persisted across sessions.
 */ class hQ{constructor(a,b){this.Vs={},this.overlays={},this.Ss=new dS(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=a(this),this.Cs=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(a){this.persistence=a,this.Rs=new fL(a=>eD(a),eE),this.lastRemoteSnapshotVersion=dm.min(),this.highestTargetId=0,this.bs=0,this.Ps=new hL,this.targetCount=0,this.vs=hr.Pn()}forEachTarget(a,b){return this.Rs.forEach((a,c)=>b(c)),dG.resolve()}getLastRemoteSnapshotVersion(a){return dG.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(a){return dG.resolve(this.bs)}allocateTargetId(a){return this.highestTargetId=this.vs.next(),dG.resolve(this.highestTargetId)}setTargetsMetadata(a,b,c){return c&&(this.lastRemoteSnapshotVersion=c),b>this.bs&&(this.bs=b),dG.resolve()}Dn(a){this.Rs.set(a.target,a);let b=a.targetId;b>this.highestTargetId&&(this.vs=new hr(b),this.highestTargetId=b),a.sequenceNumber>this.bs&&(this.bs=a.sequenceNumber)}addTargetData(a,b){return this.Dn(b),this.targetCount+=1,dG.resolve()}updateTargetData(a,b){return this.Dn(b),dG.resolve()}removeTargetData(a,b){return this.Rs.delete(b.target),this.Ps.ls(b.targetId),this.targetCount-=1,dG.resolve()}removeTargets(a,b,c){let d=0,e=[];return this.Rs.forEach((f,g)=>{g.sequenceNumber<=b&&null===c.get(g.targetId)&&(this.Rs.delete(f),e.push(this.removeMatchingKeysForTargetId(a,g.targetId)),d++)}),dG.waitFor(e).next(()=>d)}getTargetCount(a){return dG.resolve(this.targetCount)}getTargetData(a,b){let c=this.Rs.get(b)||null;return dG.resolve(c)}addMatchingKeys(a,b,c){return this.Ps.us(b,c),dG.resolve()}removeMatchingKeys(a,b,c){this.Ps.hs(b,c);let d=this.persistence.referenceDelegate,e=[];return d&&b.forEach(b=>{e.push(d.markPotentiallyOrphaned(a,b))}),dG.waitFor(e)}removeMatchingKeysForTargetId(a,b){return this.Ps.ls(b),dG.resolve()}getMatchingKeysForTargetId(a,b){let c=this.Ps.ds(b);return dG.resolve(c)}containsKey(a,b){return dG.resolve(this.Ps.containsKey(b))}}(this),this.indexManager=new /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An in-memory implementation of IndexManager.
 */ class{constructor(){this.Ye=new ha}addToCollectionParentIndex(a,b){return this.Ye.add(b),dG.resolve()}getCollectionParents(a,b){return dG.resolve(this.Ye.getEntries(b))}addFieldIndex(a,b){return dG.resolve()}deleteFieldIndex(a,b){return dG.resolve()}getDocumentsMatchingTarget(a,b){return dG.resolve(null)}getIndexType(a,b){return dG.resolve(0)}getFieldIndexes(a,b){return dG.resolve([])}getNextCollectionGroupToUpdate(a){return dG.resolve(null)}getMinOffset(a,b){return dG.resolve(dB.min())}getMinOffsetFromCollectionGroup(a,b){return dG.resolve(dB.min())}updateCollectionGroup(a,b,c){return dG.resolve()}updateIndexEntries(a,b){return dG.resolve()}},this.remoteDocumentCache=function(a){return new hO(a)}(a=>this.referenceDelegate.xs(a)),this.It=new gO(b),this.Ns=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(a){this.It=a,this.Zn=new Map,this.ts=new Map}getBundleMetadata(a,b){return dG.resolve(this.Zn.get(b))}saveBundleMetadata(a,b){var c;return this.Zn.set(b.id,{id:(c=b).id,version:c.version,createTime:f9(c.createTime)}),dG.resolve()}getNamedQuery(a,b){return dG.resolve(this.ts.get(b))}saveNamedQuery(a,b){var c;return this.ts.set(b.name,{name:(c=b).name,query:gW(c.bundledQuery),readTime:f9(c.readTime)}),dG.resolve()}}(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(a){return this.indexManager}getDocumentOverlayCache(a){let b=this.overlays[a.toKey()];return b||(b=new hK,this.overlays[a.toKey()]=b),b}getMutationQueue(a,b){let c=this.Vs[a.toKey()];return c||(c=new hN(b,this.referenceDelegate),this.Vs[a.toKey()]=c),c}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(a,b,c){c0("MemoryPersistence","Starting transaction:",a);let d=new hR(this.Ss.next());return this.referenceDelegate.ks(),c(d).next(a=>this.referenceDelegate.Os(d).next(()=>a)).toPromise().then(a=>(d.raiseOnCommittedEvent(),a))}Ms(a,b){return dG.or(Object.values(this.Vs).map(c=>()=>c.containsKey(a,b)))}}class hR extends dE{constructor(a){super(),this.currentSequenceNumber=a}}class hS{constructor(a){this.persistence=a,this.Fs=new hL,this.$s=null}static Bs(a){return new hS(a)}get Ls(){if(this.$s)return this.$s;throw c4()}addReference(a,b,c){return this.Fs.addReference(c,b),this.Ls.delete(c.toString()),dG.resolve()}removeReference(a,b,c){return this.Fs.removeReference(c,b),this.Ls.add(c.toString()),dG.resolve()}markPotentiallyOrphaned(a,b){return this.Ls.add(b.toString()),dG.resolve()}removeTarget(a,b){this.Fs.ls(b.targetId).forEach(a=>this.Ls.add(a.toString()));let c=this.persistence.getTargetCache();return c.getMatchingKeysForTargetId(a,b.targetId).next(a=>{a.forEach(a=>this.Ls.add(a.toString()))}).next(()=>c.removeTargetData(a,b))}ks(){this.$s=new Set}Os(a){let b=this.persistence.getRemoteDocumentCache().newChangeBuffer();return dG.forEach(this.Ls,c=>{let d=ds.fromPath(c);return this.Us(a,d).next(a=>{a||b.removeEntry(d,dm.min())})}).next(()=>(this.$s=null,b.apply(a)))}updateLimboDocument(a,b){return this.Us(a,b).next(a=>{a?this.Ls.delete(b.toString()):this.Ls.add(b.toString())})}xs(a){return 0}Us(a,b){return dG.or([()=>dG.resolve(this.Fs.containsKey(b)),()=>this.persistence.getTargetCache().containsKey(a,b),()=>this.persistence.Ms(a,b)])}}function hT(a){a.createObjectStore("targetDocuments",{keyPath:null}).createIndex("documentTargetsIndex",null,{unique:!0}),a.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",null,{unique:!0}),a.createObjectStore("targetGlobal")}let hU="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class hV{constructor(a,b,c,d,e,f,g,h,i,j,k=15){if(this.allowTabSynchronization=a,this.persistenceKey=b,this.clientId=c,this.Hs=e,this.window=f,this.document=g,this.Js=i,this.Ys=j,this.Xs=k,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=a=>Promise.resolve(),!hV.C())throw new c6(c5.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Provides LRU functionality for IndexedDB persistence. */ class{constructor(a,b){var c,d;this.db=a,this.garbageCollector=(c=this,d=b,new class a{constructor(a,b){this.$n=a,this.params=b}calculateTargetCount(a,b){return this.$n.Bn(a).next(a=>Math.floor(b/100*a))}nthSequenceNumber(a,b){if(0===b)return dG.resolve(dS.at);let c=new hw(b);return this.$n.forEachTarget(a,a=>c.On(a.sequenceNumber)).next(()=>this.$n.Ln(a,a=>c.On(a))).next(()=>c.maxValue)}removeTargets(a,b,c){return this.$n.removeTargets(a,b,c)}removeOrphanedDocuments(a,b){return this.$n.removeOrphanedDocuments(a,b)}collect(a,b){return -1===this.params.cacheSizeCollectionThreshold?(c0("LruGarbageCollector","Garbage collection skipped; disabled"),dG.resolve(hi)):this.getCacheSize(a).next(c=>c<this.params.cacheSizeCollectionThreshold?(c0("LruGarbageCollector",`Garbage collection skipped; Cache size ${c} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),hi):this.Un(a,b))}getCacheSize(a){return this.$n.getCacheSize(a)}Un(a,b){let c,d,e,f,g,h,i,j=Date.now();return this.calculateTargetCount(a,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(c0("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),d=this.params.maximumSequenceNumbersToCollect):d=b,f=Date.now(),this.nthSequenceNumber(a,d))).next(d=>(c=d,g=Date.now(),this.removeTargets(a,c,b))).next(b=>(e=b,h=Date.now(),this.removeOrphanedDocuments(a,c))).next(a=>(i=Date.now(),c_()<=LogLevel.DEBUG&&c0("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-j}ms
	Determined least recently used ${d} in `+(g-f)+"ms\n"+`	Removed ${e} targets in `+(h-g)+"ms\n"+`	Removed ${a} documents in `+(i-h)+"ms\n"+`Total Duration: ${i-j}ms`),dG.resolve({didRun:!0,sequenceNumbersCollected:d,targetsRemoved:e,documentsRemoved:a})))}}(c,d))}Bn(a){let b=this.qn(a);return this.db.getTargetCache().getTargetCount(a).next(a=>b.next(b=>a+b))}qn(a){let b=0;return this.Ln(a,a=>{b++}).next(()=>b)}forEachTarget(a,b){return this.db.getTargetCache().forEachTarget(a,b)}Ln(a,b){return this.Kn(a,(a,c)=>b(c))}addReference(a,b,c){return hy(a,c)}removeReference(a,b,c){return hy(a,c)}removeTargets(a,b,c){return this.db.getTargetCache().removeTargets(a,b,c)}markPotentiallyOrphaned(a,b){return hy(a,b)}Gn(a,b){var c,d;let e;return c=a,d=b,e=!1,hq(c).tt(a=>hn(c,a,d).next(a=>(a&&(e=!0),dG.resolve(!a)))).next(()=>e)}removeOrphanedDocuments(a,b){let c=this.db.getRemoteDocumentCache().newChangeBuffer(),d=[],e=0;return this.Kn(a,(f,g)=>{if(g<=b){let h=this.Gn(a,f).next(b=>{if(!b)return e++,c.getEntry(a,f).next(()=>(c.removeEntry(f,dm.min()),hu(a).delete([0,gw(f.path)])))});d.push(h)}}).next(()=>dG.waitFor(d)).next(()=>c.apply(a)).next(()=>e)}removeTarget(a,b){let c=b.withSequenceNumber(a.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(a,c)}updateLimboDocument(a,b){return hy(a,b)}Kn(a,b){let c=hu(a),d,e=dS.at;return c.Z({index:"documentTargetsIndex"},([a,c],{path:f,sequenceNumber:g})=>{0===a?(e!==dS.at&&b(new ds(gz(d)),e),e=g,d=f):e=dS.at}).next(()=>{e!==dS.at&&b(new ds(gz(d)),e)})}getCacheSize(a){return this.db.getRemoteDocumentCache().getSize(a)}}(this,d),this.ii=b+"main",this.It=new gO(h),this.ri=new dI(this.ii,this.Xs,new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Performs database creation and schema upgrades. */ class{constructor(a){this.It=a}$(a,b,c,d){var e,f;let g=new dH("createOrUpgrade",b);c<1&&d>=1&&(function(a){a.createObjectStore("owner")}(a),(e=a).createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",null,{unique:!0}),e.createObjectStore("documentMutations"),hT(a),function(a){a.createObjectStore("remoteDocuments")}(a));let h=dG.resolve();return c<3&&d>=3&&(0!==c&&((f=a).deleteObjectStore("targetDocuments"),f.deleteObjectStore("targets"),f.deleteObjectStore("targetGlobal"),hT(a)),h=h.next(()=>(function(a){let b=a.store("targetGlobal"),c={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:dm.min().toTimestamp(),targetCount:0};return b.put("targetGlobalKey",c)})(g))),c<4&&d>=4&&(0!==c&&(h=h.next(()=>{var b,c;return b=a,(c=g).store("mutations").W().next(a=>{b.deleteObjectStore("mutations"),b.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",null,{unique:!0});let d=c.store("mutations"),e=a.map(a=>d.put(a));return dG.waitFor(e)})})),h=h.next(()=>{!function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})}(a)})),c<5&&d>=5&&(h=h.next(()=>this.qs(g))),c<6&&d>=6&&(h=h.next(()=>((function(a){a.createObjectStore("remoteDocumentGlobal")})(a),this.Ks(g)))),c<7&&d>=7&&(h=h.next(()=>this.Gs(g))),c<8&&d>=8&&(h=h.next(()=>this.Qs(a,g))),c<9&&d>=9&&(h=h.next(()=>{var b;(b=a).objectStoreNames.contains("remoteDocumentChanges")&&b.deleteObjectStore("remoteDocumentChanges")})),c<10&&d>=10&&(h=h.next(()=>this.js(g))),c<11&&d>=11&&(h=h.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(a),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(a)})),c<12&&d>=12&&(h=h.next(()=>{!function(a){let b=a.createObjectStore("documentOverlays",{keyPath:null});b.createIndex("collectionPathOverlayIndex",null,{unique:!1}),b.createIndex("collectionGroupOverlayIndex",null,{unique:!1})}(a)})),c<13&&d>=13&&(h=h.next(()=>(function(a){let b=a.createObjectStore("remoteDocumentsV14",{keyPath:null});b.createIndex("documentKeyIndex",null),b.createIndex("collectionGroupIndex",null)})(a)).next(()=>this.Ws(a,g)).next(()=>a.deleteObjectStore("remoteDocuments"))),c<14&&d>=14&&(h=h.next(()=>this.zs(a,g))),c<15&&d>=15&&(h=h.next(()=>{var b;(b=a).createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),b.createObjectStore("indexState",{keyPath:null}).createIndex("sequenceNumberIndex",null,{unique:!1}),b.createObjectStore("indexEntries",{keyPath:null}).createIndex("documentKeyIndex",null,{unique:!1})})),h}Ks(a){let b=0;return a.store("remoteDocuments").Z((a,c)=>{b+=hl(c)}).next(()=>{let c={byteSize:b};return a.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",c)})}qs(a){let b=a.store("mutationQueues"),c=a.store("mutations");return b.W().next(b=>dG.forEach(b,b=>{let d=IDBKeyRange.bound([b.userId,-1],[b.userId,b.lastAcknowledgedBatchId]);return c.W("userMutationsIndex",d).next(c=>dG.forEach(c,c=>{var d;(d=c.userId===b.userId)||c4();let e=gT(this.It,c);return hk(a,b.userId,e).next(()=>{})}))}))}Gs(a){let b=a.store("targetDocuments"),c=a.store("remoteDocuments");return a.store("targetGlobal").get("targetGlobalKey").next(a=>{let d=[];return c.Z((c,e)=>{var f;let g=new dp(c),h=[0,gw(f=g)];d.push(b.get(h).next(c=>{var d;return c?dG.resolve():(d=g,b.put({targetId:0,path:gw(d),sequenceNumber:a.highestListenSequenceNumber}))}))}).next(()=>dG.waitFor(d))})}Qs(a,b){a.createObjectStore("collectionParents",{keyPath:null});let c=b.store("collectionParents"),d=new ha,e=a=>{if(d.add(a)){let b=a.lastSegment(),e=a.popLast();return c.put({collectionId:b,parent:gw(e)})}};return b.store("remoteDocuments").Z({X:!0},(a,b)=>{let c=new dp(a);return e(c.popLast())}).next(()=>b.store("documentMutations").Z({X:!0},([a,b,c],d)=>{let f=gz(b);return e(f.popLast())}))}js(a){let b=a.store("targets");return b.Z((a,c)=>{let d=gU(c),e=gV(this.It,d);return b.put(e)})}Ws(a,b){let c=b.store("remoteDocuments"),d=[];return c.Z((a,c)=>{var e;let f=b.store("remoteDocumentsV14"),g=((e=c).document?new ds(dp.fromString(e.document.name).popFirst(5)):e.noDocument?ds.fromSegments(e.noDocument.path):e.unknownDocument?ds.fromSegments(e.unknownDocument.path):c4()).path.toArray(),h={prefixPath:g.slice(0,g.length-2),collectionGroup:g[g.length-2],documentId:g[g.length-1],readTime:c.readTime||[0,0],unknownDocument:c.unknownDocument,noDocument:c.noDocument,document:c.document,hasCommittedMutations:!!c.hasCommittedMutations};d.push(f.put(h))}).next(()=>dG.waitFor(d))}zs(a,b){let c=b.store("mutations"),d=hB(this.It),e=new hQ(hS.Bs,this.It.re);return c.W().next(a=>{let c=new Map;return a.forEach(a=>{var b;let d=null!==(b=c.get(a.userId))&& void 0!==b?b:fV();gT(this.It,a).keys().forEach(a=>d=d.add(a)),c.set(a.userId,d)}),dG.forEach(c,(a,c)=>{let f=new cY(c),g=g0.oe(this.It,f),h=e.getIndexManager(f),i=hm.oe(f,this.It,h,e.referenceDelegate);return new hJ(d,i,g,h).recalculateAndSaveOverlaysForDocumentKeys(new gI(b,dS.at),a).next()})})}}(this.It)),this.Cs=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(a,b){this.referenceDelegate=a,this.It=b}allocateTargetId(a){return this.Vn(a).next(b=>{let c=new hr(b.highestTargetId);return b.highestTargetId=c.next(),this.Sn(a,b).next(()=>b.highestTargetId)})}getLastRemoteSnapshotVersion(a){return this.Vn(a).next(a=>dm.fromTimestamp(new dl(a.lastRemoteSnapshotVersion.seconds,a.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(a){return this.Vn(a).next(a=>a.highestListenSequenceNumber)}setTargetsMetadata(a,b,c){return this.Vn(a).next(d=>(d.highestListenSequenceNumber=b,c&&(d.lastRemoteSnapshotVersion=c.toTimestamp()),b>d.highestListenSequenceNumber&&(d.highestListenSequenceNumber=b),this.Sn(a,d)))}addTargetData(a,b){return this.Dn(a,b).next(()=>this.Vn(a).next(c=>(c.targetCount+=1,this.Cn(b,c),this.Sn(a,c))))}updateTargetData(a,b){return this.Dn(a,b)}removeTargetData(a,b){return this.removeMatchingKeysForTargetId(a,b.targetId).next(()=>hs(a).delete(b.targetId)).next(()=>this.Vn(a)).next(b=>{var c;return b.targetCount>0||c4(),b.targetCount-=1,this.Sn(a,b)})}removeTargets(a,b,c){let d=0,e=[];return hs(a).Z((f,g)=>{let h=gU(g);h.sequenceNumber<=b&&null===c.get(h.targetId)&&(d++,e.push(this.removeTargetData(a,h)))}).next(()=>dG.waitFor(e)).next(()=>d)}forEachTarget(a,b){return hs(a).Z((a,c)=>{let d=gU(c);b(d)})}Vn(a){return ht(a).get("targetGlobalKey").next(a=>{var b;return null!==a||c4(),a})}Sn(a,b){return ht(a).put("targetGlobalKey",b)}Dn(a,b){return hs(a).put(gV(this.It,b))}Cn(a,b){let c=!1;return a.targetId>b.highestTargetId&&(b.highestTargetId=a.targetId,c=!0),a.sequenceNumber>b.highestListenSequenceNumber&&(b.highestListenSequenceNumber=a.sequenceNumber,c=!0),c}getTargetCount(a){return this.Vn(a).next(a=>a.targetCount)}getTargetData(a,b){let c=eD(b),d=IDBKeyRange.bound([c,Number.NEGATIVE_INFINITY],[c,Number.POSITIVE_INFINITY]),e=null;return hs(a).Z({range:d,index:"queryTargetsIndex"},(a,c,d)=>{let f=gU(c);eE(b,f.target)&&(e=f,d.done())}).next(()=>e)}addMatchingKeys(a,b,c){let d=[],e=hu(a);return b.forEach(b=>{let f=gw(b.path);d.push(e.put({targetId:c,path:f})),d.push(this.referenceDelegate.addReference(a,c,b))}),dG.waitFor(d)}removeMatchingKeys(a,b,c){let d=hu(a);return dG.forEach(b,b=>{let e=gw(b.path);return dG.waitFor([d.delete([c,e]),this.referenceDelegate.removeReference(a,c,b)])})}removeMatchingKeysForTargetId(a,b){let c=hu(a),d=IDBKeyRange.bound([b],[b+1],!1,!0);return c.delete(d)}getMatchingKeysForTargetId(a,b){let c=IDBKeyRange.bound([b],[b+1],!1,!0),d=hu(a),e=fV();return d.Z({range:c,X:!0},(a,b,c)=>{let d=gz(a[1]),f=new ds(d);e=e.add(f)}).next(()=>e)}containsKey(a,b){let c=gw(b.path),d=IDBKeyRange.bound([c],[dk(c)],!1,!0),e=0;return hu(a).Z({index:"documentTargetsIndex",X:!0,range:d},([a,b],c,d)=>{0!==a&&(e++,d.done())}).next(()=>e>0)}se(a,b){return hs(a).get(b).next(a=>a?gU(a):null)}}(this.referenceDelegate,this.It),this.remoteDocumentCache=hB(this.It),this.Ns=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{getBundleMetadata(a,b){return g$(a).get(b).next(a=>{var b;if(a)return{id:(b=a).bundleId,createTime:gS(b.createTime),version:b.version}})}saveBundleMetadata(a,b){var c;return g$(a).put({bundleId:(c=b).id,createTime:gR(f9(c.createTime)),version:c.version})}getNamedQuery(a,b){return g_(a).get(b).next(a=>{var b;if(a)return{name:(b=a).name,query:gW(b.bundledQuery),readTime:gS(b.readTime)}})}saveNamedQuery(a,b){var c;return g_(a).put({name:(c=b).name,readTime:gR(f9(c.readTime)),bundledQuery:c.bundledQuery})}},this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,!1===j&&c1("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new c6(c5.FAILED_PRECONDITION,hU);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",a=>this.Cs.getHighestSequenceNumber(a))}).then(a=>{this.Ss=new dS(a,this.Js)}).then(()=>{this.Ds=!0}).catch(a=>(this.ri&&this.ri.close(),Promise.reject(a)))}li(a){return this.si=async b=>{if(this.started)return a(b)},a(this.isPrimary)}setDatabaseDeletedListener(a){this.ri.L(async b=>{null===b.newVersion&&await a()})}setNetworkEnabled(a){this.networkEnabled!==a&&(this.networkEnabled=a,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",a=>hX(a).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(a).next(a=>{a||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(a)).next(b=>this.isPrimary&&!b?this._i(a).next(()=>!1):!!b&&this.wi(a).next(()=>!0))).catch(a=>{if(dL(a))return c0("IndexedDbPersistence","Failed to extend owner lease: ",a),this.isPrimary;if(!this.allowTabSynchronization)throw a;return c0("IndexedDbPersistence","Releasing owner lease after error during lease refresh",a),!1}).then(a=>{this.isPrimary!==a&&this.Hs.enqueueRetryable(()=>this.si(a)),this.isPrimary=a})}fi(a){return hW(a).get("owner").next(a=>dG.resolve(this.mi(a)))}gi(a){return hX(a).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();let a=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",a=>{let b=gJ(a,"clientMetadata");return b.W().next(a=>{let c=this.Ii(a,18e5),d=a.filter(a=>-1===c.indexOf(a));return dG.forEach(d,a=>b.delete(a.clientId)).next(()=>d)})}).catch(()=>[]);if(this.oi)for(let b of a)this.oi.removeItem(this.Ti(b.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(a){return!!a&&a.ownerId===this.clientId}di(a){return this.Ys?dG.resolve(!0):hW(a).get("owner").next(b=>{if(null!==b&&this.pi(b.leaseTimestampMs,5e3)&&!this.Ei(b.ownerId)){if(this.mi(b)&&this.networkEnabled)return!0;if(!this.mi(b)){if(!b.allowTabSynchronization)throw new c6(c5.FAILED_PRECONDITION,hU);return!1}}return!(!this.networkEnabled||!this.inForeground)||hX(a).W().next(a=>void 0===this.Ii(a,5e3).find(a=>{if(this.clientId!==a.clientId){let b=!this.networkEnabled&&a.networkEnabled,c=!this.inForeground&&a.inForeground,d=this.networkEnabled===a.networkEnabled;if(b||c&&d)return!0}return!1}))}).next(a=>(this.isPrimary!==a&&c0("IndexedDbPersistence",`Client ${a?"is":"is not"} eligible for a primary lease.`),a))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],a=>{let b=new gI(a,dS.at);return this._i(b).next(()=>this.gi(b))}),this.ri.close(),this.Pi()}Ii(a,b){return a.filter(a=>this.pi(a.updateTimeMs,b)&&!this.Ei(a.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",a=>hX(a).W().next(a=>this.Ii(a,18e5).map(a=>a.clientId)))}get started(){return this.Ds}getMutationQueue(a,b){return hm.oe(a,this.It,b,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(a){return new hc(a,this.It.re.databaseId)}getDocumentOverlayCache(a){return g0.oe(this.It,a)}getBundleCache(){return this.Ns}runTransaction(a,b,c){var d;c0("IndexedDbPersistence","Starting transaction:",a);let e=15===(d=this.Xs)?gH:14===d?gG:13===d?gF:12===d?gE:11===d?gD:void c4(),f;return this.ri.runTransaction(a,"readonly"===b?"readonly":"readwrite",e,d=>(f=new gI(d,this.Ss?this.Ss.next():dS.at),"readwrite-primary"===b?this.fi(f).next(a=>!!a||this.di(f)).next(b=>{if(!b)throw c1(`Failed to obtain primary lease for action '${a}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new c6(c5.FAILED_PRECONDITION,dD);return c(f)}).next(a=>this.wi(f).next(()=>a)):this.Vi(f).next(()=>c(f)))).then(a=>(f.raiseOnCommittedEvent(),a))}Vi(a){return hW(a).get("owner").next(a=>{if(null!==a&&this.pi(a.leaseTimestampMs,5e3)&&!this.Ei(a.ownerId)&&!this.mi(a)&&!(this.Ys||this.allowTabSynchronization&&a.allowTabSynchronization))throw new c6(c5.FAILED_PRECONDITION,hU)})}wi(a){let b={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return hW(a).put("owner",b)}static C(){return dI.C()}_i(a){let b=hW(a);return b.get("owner").next(a=>this.mi(a)?(c0("IndexedDbPersistence","Releasing primary lease."),b.delete("owner")):dG.resolve())}pi(a,b){let c=Date.now();return!(a<c-b)&&(!(a>c)||(c1(`Detected an update time that is in the future: ${a} > ${c}`),!1))}ci(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground="visible"===this.document.visibilityState)}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var a;"function"==typeof(null===(a=this.window)|| void 0===a?void 0:a.addEventListener)&&(this.Zs=()=>{this.Ai(),isSafari()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(a){var b;try{let c=null!==(null===(b=this.oi)|| void 0===b?void 0:b.getItem(this.Ti(a)));return c0("IndexedDbPersistence",`Client '${a}' ${c?"is":"is not"} zombied in LocalStorage`),c}catch(d){return c1("IndexedDbPersistence","Failed to get zombied client id.",d),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(a){c1("Failed to set zombie client id.",a)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch(a){}}Ti(a){return`firestore_zombie_${this.persistenceKey}_${a}`}}function hW(a){return gJ(a,"owner")}function hX(a){return gJ(a,"clientMetadata")}function hY(a,b){let c=a.projectId;return a.isDefaultDatabase||(c+="."+a.database),"firestore/"+b+"/"+c+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A set of changes to what documents are currently in view and out of view for
 * a given query. These changes are sent to the LocalStore by the View (via
 * the SyncEngine) and are used to pin / unpin documents as appropriate.
 */ class hZ{constructor(a,b,c,d){this.targetId=a,this.fromCache=b,this.Si=c,this.Di=d}static Ci(a,b){let c=fV(),d=fV();for(let e of b.docChanges)switch(e.type){case 0:c=c.add(e.doc.key);break;case 1:d=d.add(e.doc.key)}return new hZ(a,b.fromCache,c,d)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The Firestore query engine.
 *
 * Firestore queries can be executed in three modes. The Query Engine determines
 * what mode to use based on what data is persisted. The mode only determines
 * the runtime complexity of the query - the result set is equivalent across all
 * implementations.
 *
 * The Query engine will use indexed-based execution if a user has configured
 * any index that can be used to execute query (via `setIndexConfiguration()`).
 * Otherwise, the engine will try to optimize the query by re-using a previously
 * persisted query result. If that is not possible, the query will be executed
 * via a full collection scan.
 *
 * Index-based execution is the default when available. The query engine
 * supports partial indexed execution and merges the result from the index
 * lookup with documents that have not yet been indexed. The index evaluation
 * matches the backend's format and as such, the SDK can use indexing for all
 * queries that the backend supports.
 *
 * If no index exists, the query engine tries to take advantage of the target
 * document mapping in the TargetCache. These mappings exists for all queries
 * that have been synced with the backend at least once and allow the query
 * engine to only read documents that previously matched a query plus any
 * documents that were edited after the query was last listened to.
 *
 * There are some cases when this optimization is not guaranteed to produce
 * the same results as full collection scans. In these cases, query
 * processing falls back to full scans. These cases are:
 *
 * - Limit queries where a document that matched the query previously no longer
 *   matches the query.
 *
 * - Limit queries where a document edit may cause the document to sort below
 *   another document that is in the local cache.
 *
 * - Queries that have never been CURRENT or free of limbo documents.
 */ class h${constructor(){this.xi=!1}initialize(a,b){this.Ni=a,this.indexManager=b,this.xi=!0}getDocumentsMatchingQuery(a,b,c,d){return this.ki(a,b).next(e=>e||this.Oi(a,b,d,c)).next(c=>c||this.Mi(a,b))}ki(a,b){if(e$(b))return dG.resolve(null);let c=e3(b);return this.indexManager.getIndexType(a,c).next(d=>0===d?null:(null!==b.limit&&1===d&&(b=e4(b,null,"F"),c=e3(b)),this.indexManager.getDocumentsMatchingTarget(a,c).next(d=>{let e=fV(...d);return this.Ni.getDocuments(a,e).next(d=>this.indexManager.getMinOffset(a,c).next(c=>{let f=this.Fi(b,d);return this.$i(b,f,e,c.readTime)?this.ki(a,e4(b,null,"F")):this.Bi(a,f,b,c)}))})))}Oi(a,b,c,d){return e$(b)||d.isEqual(dm.min())?this.Mi(a,b):this.Ni.getDocuments(a,c).next(e=>{let f=this.Fi(b,e);return this.$i(b,f,c,d)?this.Mi(a,b):(c_()<=o.in.DEBUG&&c0("QueryEngine","Re-using previous result from %s to execute query: %s",d.toString(),e7(b)),this.Bi(a,f,b,dz(d,-1)))})}Fi(a,b){let c=new dZ(fa(a));return b.forEach((b,d)=>{e8(a,d)&&(c=c.add(d))}),c}$i(a,b,c,d){if(null===a.limit)return!1;if(c.size!==b.size)return!0;let e="F"===a.limitType?b.last():b.first();return!!e&&(e.hasPendingWrites||e.version.compareTo(d)>0)}Mi(a,b){return c_()<=o.in.DEBUG&&c0("QueryEngine","Using full collection scan to execute query:",e7(b)),this.Ni.getDocumentsMatchingQuery(a,b,dB.min())}Bi(a,b,c,d){return this.Ni.getDocumentsMatchingQuery(a,c,d).next(a=>(b.forEach(b=>{a=a.insert(b.key,b)}),a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Implements `LocalStore` interface.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */ class h_{constructor(a,b,c,d){this.persistence=a,this.Li=b,this.It=d,this.Ui=new dW(di),this.qi=new fL(a=>eD(a),eE),this.Ki=new Map,this.Gi=a.getRemoteDocumentCache(),this.Cs=a.getTargetCache(),this.Ns=a.getBundleCache(),this.Qi(c)}Qi(a){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(a),this.indexManager=this.persistence.getIndexManager(a),this.mutationQueue=this.persistence.getMutationQueue(a,this.indexManager),this.localDocuments=new hJ(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(a){return this.persistence.runTransaction("Collect garbage","readwrite-primary",b=>a.collect(b,this.Ui))}}function h0(a,b,c,d){return new h_(a,b,c,d)}async function h1(a,b){var c;let d=c=a;return await d.persistence.runTransaction("Handle user change","readonly",a=>{let c;return d.mutationQueue.getAllMutationBatches(a).next(e=>(c=e,d.Qi(b),d.mutationQueue.getAllMutationBatches(a))).next(b=>{let e=[],f=[],g=fV();for(let h of c)for(let i of(e.push(h.batchId),h.mutations))g=g.add(i.key);for(let j of b)for(let k of(f.push(j.batchId),j.mutations))g=g.add(k.key);return d.localDocuments.getDocuments(a,g).next(a=>({ji:a,removedBatchIds:e,addedBatchIds:f}))})})}function h2(a){var b;let c=b=a;return c.persistence.runTransaction("Get last remote snapshot version","readonly",a=>c.Cs.getLastRemoteSnapshotVersion(a))}function h3(a,b,c){let d=fV(),e=fV();return c.forEach(a=>d=d.add(a)),b.getEntries(a,d).next(a=>{let d=fM;return c.forEach((c,f)=>{let g=a.get(c);f.isFoundDocument()!==g.isFoundDocument()&&(e=e.add(c)),f.isNoDocument()&&f.version.isEqual(dm.min())?(b.removeEntry(c,f.readTime),d=d.insert(c,f)):!g.isValidDocument()||f.version.compareTo(g.version)>0||0===f.version.compareTo(g.version)&&g.hasPendingWrites?(b.addEntry(f),d=d.insert(c,f)):c0("LocalStore","Ignoring outdated watch update for ",c,". Current version:",g.version," Watch version:",f.version)}),{Wi:d,zi:e}})}function h4(a,b){var c;let d=c=a;return d.persistence.runTransaction("Get next mutation batch","readonly",a=>(void 0===b&&(b=-1),d.mutationQueue.getNextMutationBatchAfterBatchId(a,b)))}function h5(a,b){var c;let d=c=a;return d.persistence.runTransaction("Allocate target","readwrite",a=>{let c;return d.Cs.getTargetData(a,b).next(e=>e?(c=e,dG.resolve(c)):d.Cs.allocateTargetId(a).next(e=>(c=new gN(b,e,0,a.currentSequenceNumber),d.Cs.addTargetData(a,c).next(()=>c))))}).then(a=>{let c=d.Ui.get(a.targetId);return(null===c||a.snapshotVersion.compareTo(c.snapshotVersion)>0)&&(d.Ui=d.Ui.insert(a.targetId,a),d.qi.set(b,a.targetId)),a})}async function h6(a,b,c){var d;let e=d=a,f=e.Ui.get(b);try{c||await e.persistence.runTransaction("Release target",c?"readwrite":"readwrite-primary",a=>e.persistence.referenceDelegate.removeTarget(a,f))}catch(g){if(!dL(g))throw g;c0("LocalStore",`Failed to update sequence numbers for target ${b}: ${g}`)}e.Ui=e.Ui.remove(b),e.qi.delete(f.target)}function h7(a,b,c){var d;let e=d=a,f=dm.min(),g=fV();return e.persistence.runTransaction("Execute query","readonly",a=>(function(a,b,c){var d;let e=d=a,f=e.qi.get(c);return void 0!==f?dG.resolve(e.Ui.get(f)):e.Cs.getTargetData(b,c)})(e,a,e3(b)).next(b=>{if(b)return f=b.lastLimboFreeSnapshotVersion,e.Cs.getMatchingKeysForTargetId(a,b.targetId).next(a=>{g=a})}).next(()=>e.Li.getDocumentsMatchingQuery(a,b,c?f:dm.min(),c?g:fV())).next(a=>(ia(e,e9(b),a),{documents:a,Hi:g})))}function h8(a,b){var c,d;let e=c=a,f=d=e.Cs,g=e.Ui.get(b);return g?Promise.resolve(g.target):e.persistence.runTransaction("Get target data","readonly",a=>f.se(a,b).next(a=>a?a.target:null))}function h9(a,b){var c;let d=c=a,e=d.Ki.get(b)||dm.min();return d.persistence.runTransaction("Get new document changes","readonly",a=>d.Gi.getAllFromCollectionGroup(a,b,dz(e,-1),Number.MAX_SAFE_INTEGER)).then(a=>(ia(d,b,a),a))}function ia(a,b,c){let d=a.Ki.get(b)||dm.min();c.forEach((a,b)=>{b.readTime.compareTo(d)>0&&(d=b.readTime)}),a.Ki.set(b,d)}async function ib(a,b,c,d){var e,f;let g=e=a,h=fV(),i=fM;for(let j of c){let k=b.Ji(j.metadata.name);j.document&&(h=h.add(k));let l=b.Yi(j);l.setReadTime(b.Xi(j.metadata.readTime)),i=i.insert(k,l)}let m=g.Gi.newChangeBuffer({trackRemovals:!0}),n=await h5(g,(f=d,e3(eZ(dp.fromString(`__bundle__/docs/${f}`)))));return g.persistence.runTransaction("Apply bundle documents","readwrite",a=>h3(a,m,i).next(b=>(m.apply(a),b)).next(b=>g.Cs.removeMatchingKeysForTargetId(a,n.targetId).next(()=>g.Cs.addMatchingKeys(a,h,n.targetId)).next(()=>g.localDocuments.getLocalViewOfDocuments(a,b.Wi,b.zi)).next(()=>b.Wi)))}async function ic(a,b,c=fV()){var d;let e=await h5(a,e3(gW(b.bundledQuery))),f=d=a;return f.persistence.runTransaction("Save named query","readwrite",a=>{let d=f9(b.readTime);if(e.snapshotVersion.compareTo(d)>=0)return f.Ns.saveNamedQuery(a,b);let g=e.withResumeToken(d1.EMPTY_BYTE_STRING,d);return f.Ui=f.Ui.insert(g.targetId,g),f.Cs.updateTargetData(a,g).next(()=>f.Cs.removeMatchingKeysForTargetId(a,e.targetId)).next(()=>f.Cs.addMatchingKeys(a,c,e.targetId)).next(()=>f.Ns.saveNamedQuery(a,b))})}function id(a,b){return`firestore_clients_${a}_${b}`}function ie(a,b,c){let d=`firestore_mutations_${a}_${c}`;return b.isAuthenticated()&&(d+=`_${b.uid}`),d}function ig(a,b){return`firestore_targets_${a}_${b}`}class ih{constructor(a,b,c,d){this.user=a,this.batchId=b,this.state=c,this.error=d}static Zi(a,b,c){let d=JSON.parse(c),e,f="object"==typeof d&& -1!==["pending","acknowledged","rejected"].indexOf(d.state)&&(void 0===d.error||"object"==typeof d.error);return f&&d.error&&(f="string"==typeof d.error.message&&"string"==typeof d.error.code)&&(e=new c6(d.error.code,d.error.message)),f?new ih(a,b,d.state,e):(c1("SharedClientState",`Failed to parse mutation state for ID '${b}': ${c}`),null)}tr(){let a={state:this.state,updateTimeMs:Date.now()};return this.error&&(a.error={code:this.error.code,message:this.error.message}),JSON.stringify(a)}}class ii{constructor(a,b,c){this.targetId=a,this.state=b,this.error=c}static Zi(a,b){let c=JSON.parse(b),d,e="object"==typeof c&& -1!==["not-current","current","rejected"].indexOf(c.state)&&(void 0===c.error||"object"==typeof c.error);return e&&c.error&&(e="string"==typeof c.error.message&&"string"==typeof c.error.code)&&(d=new c6(c.error.code,c.error.message)),e?new ii(a,c.state,d):(c1("SharedClientState",`Failed to parse target state for ID '${a}': ${b}`),null)}tr(){let a={state:this.state,updateTimeMs:Date.now()};return this.error&&(a.error={code:this.error.code,message:this.error.message}),JSON.stringify(a)}}class ij{constructor(a,b){this.clientId=a,this.activeTargetIds=b}static Zi(a,b){let c=JSON.parse(b),d="object"==typeof c&&c.activeTargetIds instanceof Array,e=fW;for(let f=0;d&&f<c.activeTargetIds.length;++f)d=ed(c.activeTargetIds[f]),e=e.add(c.activeTargetIds[f]);return d?new ij(a,e):(c1("SharedClientState",`Failed to parse client data for instance '${a}': ${b}`),null)}}class ik{constructor(a,b){this.clientId=a,this.onlineState=b}static Zi(a){let b=JSON.parse(a);return"object"==typeof b&& -1!==["Unknown","Online","Offline"].indexOf(b.onlineState)&&"string"==typeof b.clientId?new ik(b.clientId,b.onlineState):(c1("SharedClientState",`Failed to parse online state: ${a}`),null)}}class il{constructor(){this.activeTargetIds=fW}er(a){this.activeTargetIds=this.activeTargetIds.add(a)}nr(a){this.activeTargetIds=this.activeTargetIds.delete(a)}tr(){let a={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(a)}}class im{constructor(a,b,c,d,e){var f,g,h;this.window=a,this.Hs=b,this.persistenceKey=c,this.sr=d,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new dW(di),this.started=!1,this.cr=[];let i=c.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=e,this.ar=id(this.persistenceKey,this.sr),this.hr=`firestore_sequence_number_${f=this.persistenceKey}`,this.ur=this.ur.insert(this.sr,new il),this.lr=RegExp(`^firestore_clients_${i}_([^_]*)$`),this.dr=RegExp(`^firestore_mutations_${i}_(\\d+)(?:_(.*))?$`),this._r=RegExp(`^firestore_targets_${i}_(\\d+)$`),this.wr=`firestore_online_state_${g=this.persistenceKey}`,this.mr=`firestore_bundle_loaded_v2_${h=this.persistenceKey}`,this.window.addEventListener("storage",this.ir)}static C(a){return!(!a||!a.localStorage)}async start(){let a=await this.syncEngine.vi();for(let b of a){if(b===this.sr)continue;let c=this.getItem(id(this.persistenceKey,b));if(c){let d=ij.Zi(b,c);d&&(this.ur=this.ur.insert(d.clientId,d))}}this.gr();let e=this.storage.getItem(this.wr);if(e){let f=this.yr(e);f&&this.pr(f)}for(let g of this.cr)this.rr(g);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(a){this.setItem(this.hr,JSON.stringify(a))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(a){let b=!1;return this.ur.forEach((c,d)=>{d.activeTargetIds.has(a)&&(b=!0)}),b}addPendingMutation(a){this.Tr(a,"pending")}updateMutationState(a,b,c){this.Tr(a,b,c),this.Er(a)}addLocalQueryTarget(a){let b="not-current";if(this.isActiveQueryTarget(a)){let c=this.storage.getItem(ig(this.persistenceKey,a));if(c){let d=ii.Zi(a,c);d&&(b=d.state)}}return this.Ar.er(a),this.gr(),b}removeLocalQueryTarget(a){this.Ar.nr(a),this.gr()}isLocalQueryTarget(a){return this.Ar.activeTargetIds.has(a)}clearQueryState(a){this.removeItem(ig(this.persistenceKey,a))}updateQueryState(a,b,c){this.Rr(a,b,c)}handleUserChange(a,b,c){b.forEach(a=>{this.Er(a)}),this.currentUser=a,c.forEach(a=>{this.addPendingMutation(a)})}setOnlineState(a){this.br(a)}notifyBundleLoaded(a){this.Pr(a)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(a){let b=this.storage.getItem(a);return c0("SharedClientState","READ",a,b),b}setItem(a,b){c0("SharedClientState","SET",a,b),this.storage.setItem(a,b)}removeItem(a){c0("SharedClientState","REMOVE",a),this.storage.removeItem(a)}rr(a){let b=a;if(b.storageArea===this.storage){if(c0("SharedClientState","EVENT",b.key,b.newValue),b.key===this.ar)return void c1("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(null!==b.key){if(this.lr.test(b.key)){if(null==b.newValue){let a=this.vr(b.key);return this.Vr(a,null)}{let c=this.Sr(b.key,b.newValue);if(c)return this.Vr(c.clientId,c)}}else if(this.dr.test(b.key)){if(null!==b.newValue){let d=this.Dr(b.key,b.newValue);if(d)return this.Cr(d)}}else if(this._r.test(b.key)){if(null!==b.newValue){let e=this.Nr(b.key,b.newValue);if(e)return this.kr(e)}}else if(b.key===this.wr){if(null!==b.newValue){let f=this.yr(b.newValue);if(f)return this.pr(f)}}else if(b.key===this.hr){let g=function(a){let b=dS.at;if(null!=a)try{var c;let d=JSON.parse(a);"number"==typeof d||c4(),b=d}catch(e){c1("SharedClientState","Failed to read sequence number from WebStorage",e)}return b}(b.newValue);g!==dS.at&&this.sequenceNumberHandler(g)}else if(b.key===this.mr){let h=this.Or(b.newValue);await Promise.all(h.map(a=>this.syncEngine.Mr(a)))}}}else this.cr.push(b)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(a,b,c){let d=new ih(this.currentUser,a,b,c),e=ie(this.persistenceKey,this.currentUser,a);this.setItem(e,d.tr())}Er(a){let b=ie(this.persistenceKey,this.currentUser,a);this.removeItem(b)}br(a){let b={clientId:this.sr,onlineState:a};this.storage.setItem(this.wr,JSON.stringify(b))}Rr(a,b,c){let d=ig(this.persistenceKey,a),e=new ii(a,b,c);this.setItem(d,e.tr())}Pr(a){let b=JSON.stringify(Array.from(a));this.setItem(this.mr,b)}vr(a){let b=this.lr.exec(a);return b?b[1]:null}Sr(a,b){let c=this.vr(a);return ij.Zi(c,b)}Dr(a,b){let c=this.dr.exec(a),d=Number(c[1]),e=void 0!==c[2]?c[2]:null;return ih.Zi(new cY(e),d,b)}Nr(a,b){let c=this._r.exec(a),d=Number(c[1]);return ii.Zi(d,b)}yr(a){return ik.Zi(a)}Or(a){return JSON.parse(a)}async Cr(a){if(a.user.uid===this.currentUser.uid)return this.syncEngine.Fr(a.batchId,a.state,a.error);c0("SharedClientState",`Ignoring mutation for non-active user ${a.user.uid}`)}kr(a){return this.syncEngine.$r(a.targetId,a.state,a.error)}Vr(a,b){let c=b?this.ur.insert(a,b):this.ur.remove(a),d=this.Ir(this.ur),e=this.Ir(c),f=[],g=[];return e.forEach(a=>{d.has(a)||f.push(a)}),d.forEach(a=>{e.has(a)||g.push(a)}),this.syncEngine.Br(f,g).then(()=>{this.ur=c})}pr(a){this.ur.get(a.clientId)&&this.onlineStateHandler(a.onlineState)}Ir(a){let b=fW;return a.forEach((a,c)=>{b=b.unionWith(c.activeTargetIds)}),b}}class io{constructor(){this.Lr=new il,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(a){}updateMutationState(a,b,c){}addLocalQueryTarget(a){return this.Lr.er(a),this.Ur[a]||"not-current"}updateQueryState(a,b,c){this.Ur[a]=b}removeLocalQueryTarget(a){this.Lr.nr(a)}isLocalQueryTarget(a){return this.Lr.activeTargetIds.has(a)}clearQueryState(a){delete this.Ur[a]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(a){return this.Lr.activeTargetIds.has(a)}start(){return this.Lr=new il,Promise.resolve()}handleUserChange(a,b,c){}setOnlineState(a){}shutdown(){}writeSequenceNumber(a){}notifyBundleLoaded(a){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ip{qr(a){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // References to `window` are guarded by BrowserConnectivityMonitor.isAvailable()
/* eslint-disable no-restricted-globals */ /**
 * Browser implementation of ConnectivityMonitor.
 */ class iq{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(a){this.Wr.push(a)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){for(let a of(c0("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.Wr))a(0)}jr(){for(let a of(c0("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.Wr))a(1)}static C(){return"undefined"!=typeof window&& void 0!==window.addEventListener&& void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ir={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * Maps RPC names to the corresponding REST endpoint name.
 *
 * We use array notation to avoid mangling.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provides a simple helper class that implements the Stream interface to
 * bridge to other implementations that are streams but do not implement the
 * interface. The stream callbacks are invoked with the callOn... methods.
 */ class is{constructor(a){this.Hr=a.Hr,this.Jr=a.Jr}Yr(a){this.Xr=a}Zr(a){this.eo=a}onMessage(a){this.no=a}close(){this.Jr()}send(a){this.Hr(a)}so(){this.Xr()}io(a){this.eo(a)}ro(a){this.no(a)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class it extends class{constructor(a){this.databaseInfo=a,this.databaseId=a.databaseId;let b=a.ssl?"https":"http";this.oo=b+"://"+a.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(a,b,c,d,e){let f=this.ho(a,b);c0("RestConnection","Sending: ",f,c);let g={};return this.lo(g,d,e),this.fo(a,f,g,c).then(a=>(c0("RestConnection","Received: ",a),a),b=>{throw c2("RestConnection",`${a} failed with error: `,b,"url: ",f,"request:",c),b})}_o(a,b,c,d,e,f){return this.ao(a,b,c,d,e)}lo(a,b,c){a["X-Goog-Api-Client"]="gl-js/ fire/"+cZ,a["Content-Type"]="text/plain",this.databaseInfo.appId&&(a["X-Firebase-GMPID"]=this.databaseInfo.appId),b&&b.headers.forEach((b,c)=>a[c]=b),c&&c.headers.forEach((b,c)=>a[c]=b)}ho(a,b){let c=ir[a];return`${this.oo}/v1/${b}:${c}`}}{constructor(a){super(a),this.forceLongPolling=a.forceLongPolling,this.autoDetectLongPolling=a.autoDetectLongPolling,this.useFetchStreams=a.useFetchStreams}fo(a,b,c,d){return new Promise((e,f)=>{let g=new cV;g.setWithCredentials(!0),g.listenOnce(cQ.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case cP.NO_ERROR:let b=g.getResponseJson();c0("Connection","XHR received:",JSON.stringify(b)),e(b);break;case cP.TIMEOUT:c0("Connection",'RPC "'+a+'" timed out'),f(new c6(c5.DEADLINE_EXCEEDED,"Request time out"));break;case cP.HTTP_ERROR:let c=g.getStatus();if(c0("Connection",'RPC "'+a+'" failed with status:',c,"response text:",g.getResponseText()),c>0){let d=g.getResponseJson().error;if(d&&d.status&&d.message){let h=function(a){let b=a.toLowerCase().replace(/_/g,"-");return Object.values(c5).indexOf(b)>=0?b:c5.UNKNOWN}(d.status);f(new c6(h,d.message))}else f(new c6(c5.UNKNOWN,"Server responded with status "+g.getStatus()))}else f(new c6(c5.UNAVAILABLE,"Connection failed."));break;default:c4()}}finally{c0("Connection",'RPC "'+a+'" completed.')}});let h=JSON.stringify(d);g.send(b,"POST",h,c,15)})}wo(a,b,c){let d=[this.oo,"/","google.firestore.v1.Firestore","/",a,"/channel"],e=cN(),f=cO(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(g.xmlHttpFactory=new cT({})),this.lo(g.initMessageHeaders,b,c),g.encodeInitMessageHeaders=!0;let h=d.join("");c0("Connection","Creating WebChannel: "+h,g);let i=e.createWebChannel(h,g),k=!1,l=!1,m=new is({Hr:a=>{l?c0("Connection","Not sending because WebChannel is closed:",a):(k||(c0("Connection","Opening WebChannel transport."),i.open(),k=!0),c0("Connection","WebChannel sending:",a),i.send(a))},Jr:()=>i.close()}),n=(a,b,c)=>{a.listen(b,a=>{try{c(a)}catch(b){setTimeout(()=>{throw b},0)}})};return n(i,cU.EventType.OPEN,()=>{l||c0("Connection","WebChannel transport opened.")}),n(i,cU.EventType.CLOSE,()=>{l||(l=!0,c0("Connection","WebChannel transport closed"),m.io())}),n(i,cU.EventType.ERROR,a=>{l||(l=!0,c2("Connection","WebChannel transport errored:",a),m.io(new c6(c5.UNAVAILABLE,"The operation could not be completed")))}),n(i,cU.EventType.MESSAGE,a=>{var b,c;if(!l){let d=a.data[0];(c=!!d)||c4();let e=d,f=e.error||(null===(b=e[0])|| void 0===b?void 0:b.error);if(f){c0("Connection","WebChannel received error:",f);let g=f.status,h=function(a){let b=j[a];if(void 0!==b)return fK(b)}(g),k=f.message;void 0===h&&(h=c5.INTERNAL,k="Unknown error status: "+g+" with message "+f.message),l=!0,m.io(new c6(h,k)),i.close()}else c0("Connection","WebChannel received:",d),m.ro(d)}}),n(f,cR.STAT_EVENT,a=>{a.stat===cS.PROXY?c0("Connection","Detected buffering proxy"):a.stat===cS.NOPROXY&&c0("Connection","Detected no buffering proxy")}),setTimeout(()=>{m.so()},0),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Initializes the WebChannelConnection for the browser. */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** The Platform's 'window' implementation or null if not available. */ function iu(){return"undefined"!=typeof window?window:null}function iv(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function iw(a){return new f6(a,!0)}class ix{constructor(a,b,c=1e3,d=1.5,e=6e4){this.Hs=a,this.timerId=b,this.mo=c,this.yo=d,this.po=e,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(a){this.cancel();let b=Math.floor(this.Io+this.bo()),c=Math.max(0,Date.now()-this.Eo),d=Math.max(0,b-c);d>0&&c0("ExponentialBackoff",`Backing off for ${d} ms (base delay: ${this.Io} ms, delay with jitter: ${b} ms, last attempt: ${c} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,d,()=>(this.Eo=Date.now(),a())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A PersistentStream is an abstract base class that represents a streaming RPC
 * to the Firestore backend. It's built on top of the connections own support
 * for streaming RPCs, and adds several critical features for our clients:
 *
 *   - Exponential backoff on failure
 *   - Authentication via CredentialsProvider
 *   - Dispatching all callbacks into the shared worker queue
 *   - Closing idle streams after 60 seconds of inactivity
 *
 * Subclasses of PersistentStream implement serialization of models to and
 * from the JSON representation of the protocol buffers for a specific
 * streaming RPC.
 *
 * ## Starting and Stopping
 *
 * Streaming RPCs are stateful and need to be start()ed before messages can
 * be sent and received. The PersistentStream will call the onOpen() function
 * of the listener once the stream is ready to accept requests.
 *
 * Should a start() fail, PersistentStream will call the registered onClose()
 * listener with a FirestoreError indicating what went wrong.
 *
 * A PersistentStream can be started and stopped repeatedly.
 *
 * Generic types:
 *  SendType: The type of the outgoing message of the underlying
 *    connection stream
 *  ReceiveType: The type of the incoming message of the underlying
 *    connection stream
 *  ListenerType: The type of the listener that will be used for callbacks
 */ class iy{constructor(a,b,c,d,e,f,g,h){this.Hs=a,this.vo=c,this.Vo=d,this.connection=e,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=g,this.listener=h,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new ix(a,b)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(a){this.Lo(),this.stream.send(a)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(a,b){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,4!==a?this.xo.reset():b&&b.code===c5.RESOURCE_EXHAUSTED?(c1(b.toString()),c1("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):b&&b.code===c5.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=a,await this.listener.Zr(b)}qo(){}auth(){this.state=1;let a=this.Ko(this.So),b=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([a,c])=>{this.So===b&&this.Go(a,c)},b=>{a(()=>{let a=new c6(c5.UNKNOWN,"Fetching auth token failed: "+b.message);return this.Qo(a)})})}Go(a,b){let c=this.Ko(this.So);this.stream=this.jo(a,b),this.stream.Yr(()=>{c(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(a=>{c(()=>this.Qo(a))}),this.stream.onMessage(a=>{c(()=>this.onMessage(a))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(a){return c0("PersistentStream",`close with error: ${a}`),this.stream=null,this.close(4,a)}Ko(a){return b=>{this.Hs.enqueueAndForget(()=>this.So===a?b():(c0("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class iz extends iy{constructor(a,b,c,d,e,f){super(a,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",b,c,d,f),this.It=e}jo(a,b){return this.connection.wo("Listen",a,b)}onMessage(a){this.xo.reset();let b=function(a,b){let c;if("targetChange"in b){var d,e,f,g,h;b.targetChange;let i="NO_CHANGE"===(d=b.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===d?1:"REMOVE"===d?2:"CURRENT"===d?3:"RESET"===d?4:c4(),j=b.targetChange.targetIds||[],k=(e=a,f=b.targetChange.resumeToken,e.gt?(void 0===f||"string"==typeof f||c4(),d1.fromBase64String(f||"")):(void 0===f||f instanceof Uint8Array||c4(),d1.fromUint8Array(f||new Uint8Array))),l=b.targetChange.cause,m=l&&function(a){let b=void 0===a.code?c5.UNKNOWN:fK(a.code);return new c6(b,a.message||"")}(l);c=new f_(i,j,k,m||null)}else if("documentChange"in b){b.documentChange;let n=b.documentChange;n.document,n.document.name,n.document.updateTime;let o=gd(a,n.document.name),p=f9(n.document.updateTime),q=new ey({mapValue:{fields:n.document.fields}}),r=eA.newFoundDocument(o,p,q),s=n.targetIds||[],t=n.removedTargetIds||[];c=new fZ(s,t,r.key,r)}else if("documentDelete"in b){b.documentDelete;let u=b.documentDelete;u.document;let v=gd(a,u.document),w=u.readTime?f9(u.readTime):dm.min(),x=eA.newNoDocument(v,w),y=u.removedTargetIds||[];c=new fZ([],y,x.key,x)}else if("documentRemove"in b){b.documentRemove;let z=b.documentRemove;z.document;let A=gd(a,z.document),B=z.removedTargetIds||[];c=new fZ([],B,A,null)}else{if(!("filter"in b))return c4();{b.filter;let C=b.filter;C.targetId;let D=C.count||0,E=new fI(D),F=C.targetId;c=new f$(F,E)}}return c}(this.It,a),c=function(a){if(!("targetChange"in a))return dm.min();let b=a.targetChange;return b.targetIds&&b.targetIds.length?dm.min():b.readTime?f9(b.readTime):dm.min()}(a);return this.listener.Wo(b,c)}zo(a){let b={};b.database=gg(this.It),b.addTarget=function(a,b){let c,d=b.target;return(c=eF(d)?{documents:gm(a,d)}:{query:gn(a,d)}).targetId=b.targetId,b.resumeToken.approximateByteSize()>0?c.resumeToken=f8(a,b.resumeToken):b.snapshotVersion.compareTo(dm.min())>0&&(c.readTime=f7(a,b.snapshotVersion.toTimestamp())),c}(this.It,a);let c=function(a,b){let c=function(a,b){switch(b){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return c4()}}(0,b.purpose);return null==c?null:{"goog-listen-tags":c}}(this.It,a);c&&(b.labels=c),this.Bo(b)}Ho(a){let b={};b.database=gg(this.It),b.removeTarget=a,this.Bo(b)}}class iA extends iy{constructor(a,b,c,d,e,f){super(a,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",b,c,d,f),this.It=e,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(a,b){return this.connection.wo("Write",a,b)}onMessage(a){var b,c,d,e,f;if(!a.streamToken&&c4(),this.lastStreamToken=a.streamToken,this.Jo){this.xo.reset();let g=(c=a.writeResults,d=a.commitTime,c&&c.length>0?(void 0!==d||c4(),c.map(a=>{var b,c;let e;return b=a,c=d,(e=b.updateTime?f9(b.updateTime):f9(c)).isEqual(dm.min())&&(e=f9(c)),new fs(e,b.transformResults||[])})):[]),h=f9(a.commitTime);return this.listener.Zo(h,g)}return a.writeResults&&0!==a.writeResults.length&&c4(),this.Jo=!0,this.listener.tu()}eu(){let a={};a.database=gg(this.It),this.Bo(a)}Xo(a){let b={streamToken:this.lastStreamToken,writes:a.map(a=>gk(this.It,a))};this.Bo(b)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Datastore and its related methods are a wrapper around the external Google
 * Cloud Datastore grpc API, which provides an interface that is more convenient
 * for the rest of the client SDK architecture to consume.
 */ /**
 * An implementation of Datastore that exposes additional state for internal
 * consumption.
 */ class iB extends class{}{constructor(a,b,c,d){super(),this.authCredentials=a,this.appCheckCredentials=b,this.connection=c,this.It=d,this.nu=!1}su(){if(this.nu)throw new c6(c5.FAILED_PRECONDITION,"The client has already been terminated.")}ao(a,b,c){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([d,e])=>this.connection.ao(a,b,c,d,e)).catch(a=>{throw"FirebaseError"===a.name?(a.code===c5.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new c6(c5.UNKNOWN,a.toString())})}_o(a,b,c,d){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([e,f])=>this.connection._o(a,b,c,e,f,d)).catch(a=>{throw"FirebaseError"===a.name?(a.code===c5.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new c6(c5.UNKNOWN,a.toString())})}terminate(){this.nu=!0}}async function iC(a,b){var c;let d=c=a,e=function(a,b){let c=gn(a,b);return{structuredAggregationQuery:{aggregations:[{count:{},alias:"count_alias"}],structuredQuery:c.structuredQuery},parent:c.parent}}(d.It,e3(b)),f=e.parent;return d.connection.co||delete e.parent,(await d._o("RunAggregationQuery",f,e,1)).filter(a=>!!a.result).map(a=>a.result.aggregateFields)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iD{constructor(a,b,c,d,e){this.localStore=a,this.datastore=b,this.asyncQueue=c,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=e,this.mu.qr(a=>{c.enqueueAndForget(async()=>{iM(this)&&(c0("RemoteStore","Restarting streams for network reachability change."),await async function(a){var b;let c=b=a;c._u.add(4),await iF(c),c.gu.set("Unknown"),c._u.delete(4),await iE(c)}(this))})}),this.gu=new class{constructor(a,b){this.asyncQueue=a,this.onlineStateHandler=b,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(a){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${a.toString()}`),this.cu("Offline")))}set(a){this.lu(),this.iu=0,"Online"===a&&(this.ou=!1),this.cu(a)}cu(a){a!==this.state&&(this.state=a,this.onlineStateHandler(a))}au(a){let b=`Could not reach Cloud Firestore backend. ${a}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(c1(b),this.ou=!1):c0("OnlineStateTracker",b)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}(c,d)}}async function iE(a){if(iM(a))for(let b of a.wu)await b(!0)}async function iF(a){for(let b of a.wu)await b(!1)}function iG(a,b){var c;let d=c=a;d.du.has(b.targetId)||(d.du.set(b.targetId,b),iL(d)?iK(d):i2(d).ko()&&iI(d,b))}function iH(a,b){var c;let d=c=a,e=i2(d);d.du.delete(b),e.ko()&&iJ(d,b),0===d.du.size&&(e.ko()?e.Fo():iM(d)&&d.gu.set("Unknown"))}function iI(a,b){a.yu.Mt(b.targetId),i2(a).zo(b)}function iJ(a,b){a.yu.Mt(b),i2(a).Ho(b)}function iK(a){a.yu=new f1({getRemoteKeysForTarget:b=>a.remoteSyncer.getRemoteKeysForTarget(b),se:b=>a.du.get(b)||null}),i2(a).start(),a.gu.uu()}function iL(a){return iM(a)&&!i2(a).No()&&a.du.size>0}function iM(a){var b;return 0===(b=a)._u.size}function iN(a){a.yu=void 0}async function iO(a){a.du.forEach((b,c)=>{iI(a,b)})}async function iP(a,b){iN(a),iL(a)?(a.gu.hu(b),iK(a)):a.gu.set("Unknown")}async function iQ(a,b,c){if(a.gu.set("Online"),b instanceof f_&&2===b.state&&b.cause)try{await async function(a,b){let c=b.cause;for(let d of b.targetIds)a.du.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.du.delete(d),a.yu.removeTarget(d))}(a,b)}catch(d){c0("RemoteStore","Failed to remove targets %s: %s ",b.targetIds.join(","),d),await iR(a,d)}else if(b instanceof fZ?a.yu.Gt(b):b instanceof f$?a.yu.Yt(b):a.yu.Wt(b),!c.isEqual(dm.min()))try{let e=await h2(a.localStore);c.compareTo(e)>=0&&await function(a,b){let c=a.yu.te(b);return c.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){let e=a.du.get(d);e&&a.du.set(d,e.withResumeToken(c.resumeToken,b))}}),c.targetMismatches.forEach(b=>{let c=a.du.get(b);if(!c)return;a.du.set(b,c.withResumeToken(d1.EMPTY_BYTE_STRING,c.snapshotVersion)),iJ(a,b);let d=new gN(c.target,b,1,c.sequenceNumber);iI(a,d)}),a.remoteSyncer.applyRemoteEvent(c)}(a,c)}catch(f){c0("RemoteStore","Failed to raise snapshot:",f),await iR(a,f)}}async function iR(a,b,c){if(!dL(b))throw b;a._u.add(1),await iF(a),a.gu.set("Offline"),c||(c=()=>h2(a.localStore)),a.asyncQueue.enqueueRetryable(async()=>{c0("RemoteStore","Retrying IndexedDB access"),await c(),a._u.delete(1),await iE(a)})}function iS(a,b){return b().catch(c=>iR(a,c,b))}async function iT(a){var b;let c=b=a,d=i3(c),e=c.fu.length>0?c.fu[c.fu.length-1].batchId:-1;for(;iU(c);)try{let f=await h4(c.localStore,e);if(null===f){0===c.fu.length&&d.Fo();break}e=f.batchId,iV(c,f)}catch(g){await iR(c,g)}iW(c)&&iX(c)}function iU(a){return iM(a)&&a.fu.length<10}function iV(a,b){a.fu.push(b);let c=i3(a);c.ko()&&c.Yo&&c.Xo(b.mutations)}function iW(a){return iM(a)&&!i3(a).No()&&a.fu.length>0}function iX(a){i3(a).start()}async function iY(a){i3(a).eu()}async function iZ(a){let b=i3(a);for(let c of a.fu)b.Xo(c.mutations)}async function i$(a,b,c){let d=a.fu.shift(),e=gL.from(d,b,c);await iS(a,()=>a.remoteSyncer.applySuccessfulWrite(e)),await iT(a)}async function i_(a,b){b&&i3(a).Yo&&await async function(a,b){var c;if(fJ(c=b.code)&&c!==c5.ABORTED){let d=a.fu.shift();i3(a).Mo(),await iS(a,()=>a.remoteSyncer.rejectFailedWrite(d.batchId,b)),await iT(a)}}(a,b),iW(a)&&iX(a)}async function i0(a,b){var c;let d=c=a;d.asyncQueue.verifyOperationInProgress(),c0("RemoteStore","RemoteStore received new credentials");let e=iM(d);d._u.add(3),await iF(d),e&&d.gu.set("Unknown"),await d.remoteSyncer.handleCredentialChange(b),d._u.delete(3),await iE(d)}async function i1(a,b){var c;let d=c=a;b?(d._u.delete(2),await iE(d)):b||(d._u.add(2),await iF(d),d.gu.set("Unknown"))}function i2(a){return a.pu||(a.pu=function(a,b,c){var d;let e=d=a;return e.su(),new iz(b,e.connection,e.authCredentials,e.appCheckCredentials,e.It,c)}(a.datastore,a.asyncQueue,{Yr:iO.bind(null,a),Zr:iP.bind(null,a),Wo:iQ.bind(null,a)}),a.wu.push(async b=>{b?(a.pu.Mo(),iL(a)?iK(a):a.gu.set("Unknown")):(await a.pu.stop(),iN(a))})),a.pu}function i3(a){return a.Iu||(a.Iu=function(a,b,c){var d;let e=d=a;return e.su(),new iA(b,e.connection,e.authCredentials,e.appCheckCredentials,e.It,c)}(a.datastore,a.asyncQueue,{Yr:iY.bind(null,a),Zr:i_.bind(null,a),tu:iZ.bind(null,a),Zo:i$.bind(null,a)}),a.wu.push(async b=>{b?(a.Iu.Mo(),await iT(a)):(await a.Iu.stop(),a.fu.length>0&&(c0("RemoteStore",`Stopping write stream with ${a.fu.length} pending writes`),a.fu=[]))})),a.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 *
 * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
 * in newer versions of TypeScript defines `finally`, which is not available in
 * IE.
 */ class i4{constructor(a,b,c,d,e){this.asyncQueue=a,this.timerId=b,this.targetTimeMs=c,this.op=d,this.removalCallback=e,this.deferred=new c7,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}static createAndSchedule(a,b,c,d,e){let f=Date.now()+c,g=new i4(a,b,f,d,e);return g.start(c),g}start(a){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),a)}skipDelay(){return this.handleDelayElapsed()}cancel(a){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new c6(c5.CANCELLED,"Operation cancelled"+(a?": "+a:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(a=>this.deferred.resolve(a))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function i5(a,b){if(c1("AsyncQueue",`${b}: ${a}`),dL(a))return new c6(c5.UNAVAILABLE,`${b}: ${a}`);throw a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */ class i6{constructor(a){this.comparator=a?(b,c)=>a(b,c)||ds.comparator(b.key,c.key):(a,b)=>ds.comparator(a.key,b.key),this.keyedMap=fO(),this.sortedSet=new dW(this.comparator)}static emptySet(a){return new i6(a.comparator)}has(a){return null!=this.keyedMap.get(a)}get(a){return this.keyedMap.get(a)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(a){let b=this.keyedMap.get(a);return b?this.sortedSet.indexOf(b):-1}get size(){return this.sortedSet.size}forEach(a){this.sortedSet.inorderTraversal((b,c)=>(a(b),!1))}add(a){let b=this.delete(a.key);return b.copy(b.keyedMap.insert(a.key,a),b.sortedSet.insert(a,null))}delete(a){let b=this.get(a);return b?this.copy(this.keyedMap.remove(a),this.sortedSet.remove(b)):this}isEqual(a){if(!(a instanceof i6)||this.size!==a.size)return!1;let b=this.sortedSet.getIterator(),c=a.sortedSet.getIterator();for(;b.hasNext();){let d=b.getNext().key,e=c.getNext().key;if(!d.isEqual(e))return!1}return!0}toString(){let a=[];return this.forEach(b=>{a.push(b.toString())}),0===a.length?"DocumentSet ()":"DocumentSet (\n  "+a.join("  \n")+"\n)"}copy(a,b){let c=new i6;return c.comparator=this.comparator,c.keyedMap=a,c.sortedSet=b,c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */ class i7{constructor(){this.Tu=new dW(ds.comparator)}track(a){let b=a.doc.key,c=this.Tu.get(b);c?0!==a.type&&3===c.type?this.Tu=this.Tu.insert(b,a):3===a.type&&1!==c.type?this.Tu=this.Tu.insert(b,{type:c.type,doc:a.doc}):2===a.type&&2===c.type?this.Tu=this.Tu.insert(b,{type:2,doc:a.doc}):2===a.type&&0===c.type?this.Tu=this.Tu.insert(b,{type:0,doc:a.doc}):1===a.type&&0===c.type?this.Tu=this.Tu.remove(b):1===a.type&&2===c.type?this.Tu=this.Tu.insert(b,{type:1,doc:c.doc}):0===a.type&&1===c.type?this.Tu=this.Tu.insert(b,{type:2,doc:a.doc}):c4():this.Tu=this.Tu.insert(b,a)}Eu(){let a=[];return this.Tu.inorderTraversal((b,c)=>{a.push(c)}),a}}class i8{constructor(a,b,c,d,e,f,g,h,i){this.query=a,this.docs=b,this.oldDocs=c,this.docChanges=d,this.mutatedKeys=e,this.fromCache=f,this.syncStateChanged=g,this.excludesMetadataChanges=h,this.hasCachedResults=i}static fromInitialDocuments(a,b,c,d,e){let f=[];return b.forEach(a=>{f.push({type:0,doc:a})}),new i8(a,b,i6.emptySet(b),f,c,d,!0,!1,e)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(a){if(!(this.fromCache===a.fromCache&&this.hasCachedResults===a.hasCachedResults&&this.syncStateChanged===a.syncStateChanged&&this.mutatedKeys.isEqual(a.mutatedKeys)&&e5(this.query,a.query)&&this.docs.isEqual(a.docs)&&this.oldDocs.isEqual(a.oldDocs)))return!1;let b=this.docChanges,c=a.docChanges;if(b.length!==c.length)return!1;for(let d=0;d<b.length;d++)if(b[d].type!==c[d].type||!b[d].doc.isEqual(c[d].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Holds the listeners and the last received ViewSnapshot for a query being
 * tracked by EventManager.
 */ class i9{constructor(){this.Au=void 0,this.listeners=[]}}class ja{constructor(){this.queries=new fL(a=>e6(a),e5),this.onlineState="Unknown",this.Ru=new Set}}async function jb(a,b){var c;let d=c=a,e=b.query,f=!1,g=d.queries.get(e);if(g||(f=!0,g=new i9),f)try{g.Au=await d.onListen(e)}catch(h){let i=i5(h,`Initialization of query '${e7(b.query)}' failed`);return void b.onError(i)}d.queries.set(e,g),g.listeners.push(b),b.bu(d.onlineState),g.Au&&b.Pu(g.Au)&&jf(d)}async function jc(a,b){var c;let d=c=a,e=b.query,f=!1,g=d.queries.get(e);if(g){let h=g.listeners.indexOf(b);h>=0&&(g.listeners.splice(h,1),f=0===g.listeners.length)}if(f)return d.queries.delete(e),d.onUnlisten(e)}function jd(a,b){var c;let d=c=a,e=!1;for(let f of b){let g=f.query,h=d.queries.get(g);if(h){for(let i of h.listeners)i.Pu(f)&&(e=!0);h.Au=f}}e&&jf(d)}function je(a,b,c){var d;let e=d=a,f=e.queries.get(b);if(f)for(let g of f.listeners)g.onError(c);e.queries.delete(b)}function jf(a){a.Ru.forEach(a=>{a.next()})}class jg{constructor(a,b,c){this.query=a,this.vu=b,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=c||{}}Pu(a){if(!this.options.includeMetadataChanges){let b=[];for(let c of a.docChanges)3!==c.type&&b.push(c);a=new i8(a.query,a.docs,a.oldDocs,b,a.mutatedKeys,a.fromCache,a.syncStateChanged,!0,a.hasCachedResults)}let d=!1;return this.Vu?this.Du(a)&&(this.vu.next(a),d=!0):this.Cu(a,this.onlineState)&&(this.xu(a),d=!0),this.Su=a,d}onError(a){this.vu.error(a)}bu(a){this.onlineState=a;let b=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,a)&&(this.xu(this.Su),b=!0),b}Cu(a,b){if(!a.fromCache)return!0;let c="Offline"!==b;return(!this.options.Nu||!c)&&(!a.docs.isEmpty()||a.hasCachedResults||"Offline"===b)}Du(a){if(a.docChanges.length>0)return!0;let b=this.Su&&this.Su.hasPendingWrites!==a.hasPendingWrites;return!(!a.syncStateChanged&&!b)&& !0===this.options.includeMetadataChanges}xu(a){a=i8.fromInitialDocuments(a.query,a.docs,a.mutatedKeys,a.fromCache,a.hasCachedResults),this.Vu=!0,this.vu.next(a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A complete element in the bundle stream, together with the byte length it
 * occupies in the stream.
 */ class jh{constructor(a,b){this.ku=a,this.byteLength=b}Ou(){return"metadata"in this.ku}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Helper to convert objects from bundles to model objects in the SDK.
 */ class ji{constructor(a){this.It=a}Ji(a){return gd(this.It,a)}Yi(a){return a.metadata.exists?gj(this.It,a.document,!1):eA.newNoDocument(this.Ji(a.metadata.name),this.Xi(a.metadata.readTime))}Xi(a){return f9(a)}}/**
 * Returns a `LoadBundleTaskProgress` representing the progress that the loading
 * has succeeded.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jj{constructor(a){this.key=a}}class jk{constructor(a){this.key=a}}class jl{constructor(a,b){this.query=a,this.Uu=b,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=fV(),this.mutatedKeys=fV(),this.Gu=fa(a),this.Qu=new i6(this.Gu)}get ju(){return this.Uu}Wu(a,b){let c=b?b.zu:new i7,d=b?b.Qu:this.Qu,e=b?b.mutatedKeys:this.mutatedKeys,f=d,g=!1,h="F"===this.query.limitType&&d.size===this.query.limit?d.last():null,i="L"===this.query.limitType&&d.size===this.query.limit?d.first():null;if(a.inorderTraversal((a,b)=>{let j=d.get(a),k=e8(this.query,b)?b:null,l=!!j&&this.mutatedKeys.has(j.key),m=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations),n=!1;j&&k?j.data.isEqual(k.data)?l!==m&&(c.track({type:3,doc:k}),n=!0):this.Hu(j,k)||(c.track({type:2,doc:k}),n=!0,(h&&this.Gu(k,h)>0||i&&0>this.Gu(k,i))&&(g=!0)):!j&&k?(c.track({type:0,doc:k}),n=!0):j&&!k&&(c.track({type:1,doc:j}),n=!0,(h||i)&&(g=!0)),n&&(k?(f=f.add(k),e=m?e.add(a):e.delete(a)):(f=f.delete(a),e=e.delete(a)))}),null!==this.query.limit)for(;f.size>this.query.limit;){let j="F"===this.query.limitType?f.last():f.first();f=f.delete(j.key),e=e.delete(j.key),c.track({type:1,doc:j})}return{Qu:f,zu:c,$i:g,mutatedKeys:e}}Hu(a,b){return a.hasLocalMutations&&b.hasCommittedMutations&&!b.hasLocalMutations}applyChanges(a,b,c){let d=this.Qu;this.Qu=a.Qu,this.mutatedKeys=a.mutatedKeys;let e=a.zu.Eu();e.sort((a,b)=>(function(a,b){let c=a=>{switch(a){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return c4()}};return c(a)-c(b)})(a.type,b.type)||this.Gu(a.doc,b.doc)),this.Ju(c);let f=b?this.Yu():[],g=0===this.Ku.size&&this.current?1:0,h=g!==this.qu;return(this.qu=g,0!==e.length||h)?{snapshot:new i8(this.query,a.Qu,d,e,a.mutatedKeys,0===g,h,!1,!!c&&c.resumeToken.approximateByteSize()>0),Xu:f}:{Xu:f}}bu(a){return this.current&&"Offline"===a?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new i7,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(a){return!this.Uu.has(a)&&!!this.Qu.has(a)&&!this.Qu.get(a).hasLocalMutations}Ju(a){a&&(a.addedDocuments.forEach(a=>this.Uu=this.Uu.add(a)),a.modifiedDocuments.forEach(a=>{}),a.removedDocuments.forEach(a=>this.Uu=this.Uu.delete(a)),this.current=a.current)}Yu(){if(!this.current)return[];let a=this.Ku;this.Ku=fV(),this.Qu.forEach(a=>{this.Zu(a.key)&&(this.Ku=this.Ku.add(a.key))});let b=[];return a.forEach(a=>{this.Ku.has(a)||b.push(new jk(a))}),this.Ku.forEach(c=>{a.has(c)||b.push(new jj(c))}),b}tc(a){this.Uu=a.Hi,this.Ku=fV();let b=this.Wu(a.documents);return this.applyChanges(b,!0)}ec(){return i8.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class jm{constructor(a,b,c){this.query=a,this.targetId=b,this.view=c}}class jn{constructor(a){this.key=a,this.nc=!1}}class jo{constructor(a,b,c,d,e,f){this.localStore=a,this.remoteStore=b,this.eventManager=c,this.sharedClientState=d,this.currentUser=e,this.maxConcurrentLimboResolutions=f,this.sc={},this.ic=new fL(a=>e6(a),e5),this.rc=new Map,this.oc=new Set,this.uc=new dW(ds.comparator),this.cc=new Map,this.ac=new hL,this.hc={},this.lc=new Map,this.fc=hr.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function jp(a,b){let c=jR(a),d,e,f=c.ic.get(b);if(f)d=f.targetId,c.sharedClientState.addLocalQueryTarget(d),e=f.view.ec();else{let g=await h5(c.localStore,e3(b));c.isPrimaryClient&&iG(c.remoteStore,g);let h=c.sharedClientState.addLocalQueryTarget(g.targetId);d=g.targetId,e=await jq(c,b,d,"current"===h,g.resumeToken)}return e}async function jq(a,b,c,d,e){a._c=(b,c,d)=>(async function(a,b,c,d){let e=b.view.Wu(c);e.$i&&(e=await h7(a.localStore,b.query,!1).then(({documents:a})=>b.view.Wu(a,e)));let f=d&&d.targetChanges.get(b.targetId),g=b.view.applyChanges(e,a.isPrimaryClient,f);return jC(a,b.targetId,g.Xu),g.snapshot})(a,b,c,d);let f=await h7(a.localStore,b,!0),g=new jl(b,f.Hi),h=g.Wu(f.documents),i=fY.createSynthesizedTargetChangeForCurrentChange(c,d&&"Offline"!==a.onlineState,e),j=g.applyChanges(h,a.isPrimaryClient,i);jC(a,c,j.Xu);let k=new jm(b,c,g);return a.ic.set(b,k),a.rc.has(c)?a.rc.get(c).push(b):a.rc.set(c,[b]),j.snapshot}async function jr(a,b){var c;let d=c=a,e=d.ic.get(b),f=d.rc.get(e.targetId);if(f.length>1)return d.rc.set(e.targetId,f.filter(a=>!e5(a,b))),void d.ic.delete(b);d.isPrimaryClient?(d.sharedClientState.removeLocalQueryTarget(e.targetId),d.sharedClientState.isActiveQueryTarget(e.targetId)||await h6(d.localStore,e.targetId,!1).then(()=>{d.sharedClientState.clearQueryState(e.targetId),iH(d.remoteStore,e.targetId),jA(d,e.targetId)}).catch(dF)):(jA(d,e.targetId),await h6(d.localStore,e.targetId,!0))}async function js(a,b,c){let d=jS(a);try{var e,f,g;let h=await function(a,b){var c;let d=c=a,e=dl.now(),f=b.reduce((a,b)=>a.add(b.key),fV()),g,h;return d.persistence.runTransaction("Locally write mutations","readwrite",a=>{let c=fM,i=fV();return d.Gi.getEntries(a,f).next(a=>{(c=a).forEach((a,b)=>{b.isValidDocument()||(i=i.add(a))})}).next(()=>d.localDocuments.getOverlayedDocuments(a,c)).next(c=>{g=c;let f=[];for(let h of b){let i=fz(h,g.get(h.key).overlayedDocument);null!=i&&f.push(new fC(h.key,i,ez(i.value.mapValue),ft.exists(!0)))}return d.mutationQueue.addMutationBatch(a,e,f,b)}).next(b=>{h=b;let c=b.applyToLocalDocumentSet(g,i);return d.documentOverlayCache.saveOverlays(a,b.batchId,c)})}).then(()=>({batchId:h.batchId,changes:fP(g)}))}(d.localStore,b),i;d.sharedClientState.addPendingMutation(h.batchId),e=d,f=h.batchId,g=c,(i=e.hc[e.currentUser.toKey()])||(i=new dW(di)),i=i.insert(f,g),e.hc[e.currentUser.toKey()]=i,await jF(d,h.changes),await iT(d.remoteStore)}catch(j){let k=i5(j,"Failed to persist write");c.reject(k)}}async function jt(a,b){var c;let d=c=a;try{let e=await function(a,b){var c;let d=c=a,e=b.snapshotVersion,f=d.Ui;return d.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{let c=d.Gi.newChangeBuffer({trackRemovals:!0});f=d.Ui;let g=[];b.targetChanges.forEach((c,h)=>{var i,j,k;let l=f.get(h);if(!l)return;g.push(d.Cs.removeMatchingKeys(a,c.removedDocuments,h).next(()=>d.Cs.addMatchingKeys(a,c.addedDocuments,h)));let m=l.withSequenceNumber(a.currentSequenceNumber);b.targetMismatches.has(h)?m=m.withResumeToken(d1.EMPTY_BYTE_STRING,dm.min()).withLastLimboFreeSnapshotVersion(dm.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,e)),f=f.insert(h,m),i=l,j=m,k=c,(0===i.resumeToken.approximateByteSize()||j.snapshotVersion.toMicroseconds()-i.snapshotVersion.toMicroseconds()>=3e8||k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0)&&g.push(d.Cs.updateTargetData(a,m))});let h=fM,i=fV();if(b.documentUpdates.forEach(c=>{b.resolvedLimboDocuments.has(c)&&g.push(d.persistence.referenceDelegate.updateLimboDocument(a,c))}),g.push(h3(a,c,b.documentUpdates).next(a=>{h=a.Wi,i=a.zi})),!e.isEqual(dm.min())){let j=d.Cs.getLastRemoteSnapshotVersion(a).next(b=>d.Cs.setTargetsMetadata(a,a.currentSequenceNumber,e));g.push(j)}return dG.waitFor(g).next(()=>c.apply(a)).next(()=>d.localDocuments.getLocalViewOfDocuments(a,h,i)).next(()=>h)}).then(a=>(d.Ui=f,a))}(d.localStore,b);b.targetChanges.forEach((a,b)=>{var c,e,f;let g=d.cc.get(b);g&&(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1||c4(),a.addedDocuments.size>0?g.nc=!0:a.modifiedDocuments.size>0?(e=g.nc)||c4():a.removedDocuments.size>0&&(g.nc||c4(),g.nc=!1))}),await jF(d,e,b)}catch(f){await dF(f)}}function ju(a,b,c){var d;let e=d=a;if(e.isPrimaryClient&&0===c|| !e.isPrimaryClient&&1===c){let f=[];e.ic.forEach((a,c)=>{let d=c.view.bu(b);d.snapshot&&f.push(d.snapshot)}),function(a,b){var c;let d=c=a;d.onlineState=b;let e=!1;d.queries.forEach((a,c)=>{for(let d of c.listeners)d.bu(b)&&(e=!0)}),e&&jf(d)}(e.eventManager,b),f.length&&e.sc.Wo(f),e.onlineState=b,e.isPrimaryClient&&e.sharedClientState.setOnlineState(b)}}async function jv(a,b,c){var d;let e=d=a;e.sharedClientState.updateQueryState(b,"rejected",c);let f=e.cc.get(b),g=f&&f.key;if(g){let h=new dW(ds.comparator);h=h.insert(g,eA.newNoDocument(g,dm.min()));let i=fV().add(g),j=new fX(dm.min(),new Map,new dZ(di),h,i);await jt(e,j),e.uc=e.uc.remove(g),e.cc.delete(b),jE(e)}else await h6(e.localStore,b,!1).then(()=>jA(e,b,c)).catch(dF)}async function jw(a,b){var c;let d=c=a,e=b.batch.batchId;try{let f=await function(a,b){var c;let d=c=a;return d.persistence.runTransaction("Acknowledge batch","readwrite-primary",a=>{let c=b.batch.keys(),e=d.Gi.newChangeBuffer({trackRemovals:!0});return(function(a,b,c,d){let e=c.batch,f=e.keys(),g=dG.resolve();return f.forEach(a=>{g=g.next(()=>d.getEntry(b,a)).next(b=>{var f;let g=c.docVersions.get(a);null!==g||c4(),0>b.version.compareTo(g)&&(e.applyToRemoteDocument(b,c),b.isValidDocument()&&(b.setReadTime(c.commitVersion),d.addEntry(b)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(b,e))})(d,a,b,e).next(()=>e.apply(a)).next(()=>d.mutationQueue.performConsistencyCheck(a)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(a,c,b.batch.batchId)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,function(a){let b=fV();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(b=b.add(a.batch.mutations[c].key));return b}(b))).next(()=>d.localDocuments.getDocuments(a,c))})}(d.localStore,b);jz(d,e,null),jy(d,e),d.sharedClientState.updateMutationState(e,"acknowledged"),await jF(d,f)}catch(g){await dF(g)}}async function jx(a,b,c){var d;let e=d=a;try{let f=await function(a,b){var c;let d=c=a;return d.persistence.runTransaction("Reject batch","readwrite-primary",a=>{let c;return d.mutationQueue.lookupMutationBatch(a,b).next(b=>{var e;return null!==b||c4(),c=b.keys(),d.mutationQueue.removeMutationBatch(a,b)}).next(()=>d.mutationQueue.performConsistencyCheck(a)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(a,c,b)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,c)).next(()=>d.localDocuments.getDocuments(a,c))})}(e.localStore,b);jz(e,b,c),jy(e,b),e.sharedClientState.updateMutationState(b,"rejected",c),await jF(e,f)}catch(g){await dF(g)}}function jy(a,b){(a.lc.get(b)||[]).forEach(a=>{a.resolve()}),a.lc.delete(b)}function jz(a,b,c){var d;let e=d=a,f=e.hc[e.currentUser.toKey()];if(f){let g=f.get(b);g&&(c?g.reject(c):g.resolve(),f=f.remove(b)),e.hc[e.currentUser.toKey()]=f}}function jA(a,b,c=null){for(let d of(a.sharedClientState.removeLocalQueryTarget(b),a.rc.get(b)))a.ic.delete(d),c&&a.sc.wc(d,c);a.rc.delete(b),a.isPrimaryClient&&a.ac.ls(b).forEach(b=>{a.ac.containsKey(b)||jB(a,b)})}function jB(a,b){a.oc.delete(b.path.canonicalString());let c=a.uc.get(b);null!==c&&(iH(a.remoteStore,c),a.uc=a.uc.remove(b),a.cc.delete(c),jE(a))}function jC(a,b,c){for(let d of c)d instanceof jj?(a.ac.addReference(d.key,b),jD(a,d)):d instanceof jk?(c0("SyncEngine","Document no longer in limbo: "+d.key),a.ac.removeReference(d.key,b),a.ac.containsKey(d.key)||jB(a,d.key)):c4()}function jD(a,b){let c=b.key,d=c.path.canonicalString();a.uc.get(c)||a.oc.has(d)||(c0("SyncEngine","New document in limbo: "+c),a.oc.add(d),jE(a))}function jE(a){for(;a.oc.size>0&&a.uc.size<a.maxConcurrentLimboResolutions;){let b=a.oc.values().next().value;a.oc.delete(b);let c=new ds(dp.fromString(b)),d=a.fc.next();a.cc.set(d,new jn(c)),a.uc=a.uc.insert(c,d),iG(a.remoteStore,new gN(e3(eZ(c.path)),d,2,dS.at))}}async function jF(a,b,c){var d;let e=d=a,f=[],g=[],h=[];e.ic.isEmpty()||(e.ic.forEach((a,d)=>{h.push(e._c(d,b,c).then(a=>{if((a||c)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(d.targetId,(null==a?void 0:a.fromCache)?"not-current":"current"),a){f.push(a);let b=hZ.Ci(d.targetId,a);g.push(b)}}))}),await Promise.all(h),e.sc.Wo(f),await async function(a,b){var c;let d=c=a;try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",a=>dG.forEach(b,b=>dG.forEach(b.Si,c=>d.persistence.referenceDelegate.addReference(a,b.targetId,c)).next(()=>dG.forEach(b.Di,c=>d.persistence.referenceDelegate.removeReference(a,b.targetId,c)))))}catch(e){if(!dL(e))throw e;c0("LocalStore","Failed to update sequence numbers: "+e)}for(let f of b){let g=f.targetId;if(!f.fromCache){let h=d.Ui.get(g),i=h.snapshotVersion,j=h.withLastLimboFreeSnapshotVersion(i);d.Ui=d.Ui.insert(g,j)}}}(e.localStore,g))}async function jG(a,b){var c,d,e;let f=c=a;if(!f.currentUser.isEqual(b)){c0("SyncEngine","User change. New user:",b.toKey());let g=await h1(f.localStore,b);f.currentUser=b,e="'waitForPendingWrites' promise is rejected due to a user change.",(d=f).lc.forEach(a=>{a.forEach(a=>{a.reject(new c6(c5.CANCELLED,e))})}),d.lc.clear(),f.sharedClientState.handleUserChange(b,g.removedBatchIds,g.addedBatchIds),await jF(f,g.ji)}}function jH(a,b){var c;let d=c=a,e=d.cc.get(b);if(e&&e.nc)return fV().add(e.key);{let f=fV(),g=d.rc.get(b);if(!g)return f;for(let h of g){let i=d.ic.get(h);f=f.unionWith(i.view.ju)}return f}}async function jI(a,b){var c;let d=c=a,e=await h7(d.localStore,b.query,!0),f=b.view.tc(e);return d.isPrimaryClient&&jC(d,b.targetId,f.Xu),f}async function jJ(a,b){var c;let d=c=a;return h9(d.localStore,b).then(a=>jF(d,a))}async function jK(a,b,c,d){var e;let f=e=a,g=await function(a,b){var c,d;let e=c=a,f=d=e.mutationQueue;return e.persistence.runTransaction("Lookup mutation documents","readonly",a=>f.Tn(a,b).next(b=>b?e.localDocuments.getDocuments(a,b):dG.resolve(null)))}(f.localStore,b);null!==g?("pending"===c?await iT(f.remoteStore):"acknowledged"===c||"rejected"===c?(jz(f,b,d||null),jy(f,b),function(a,b){var c,d;(d=(c=a).mutationQueue).An(b)}(f.localStore,b)):c4(),await jF(f,g)):c0("SyncEngine","Cannot apply mutation batch with id: "+b)}async function jL(a,b){var c;let d=c=a;if(jR(d),jS(d),!0===b&& !0!==d.dc){let e=d.sharedClientState.getAllActiveQueryTargets(),f=await jM(d,e.toArray());for(let g of(d.dc=!0,await i1(d.remoteStore,!0),f))iG(d.remoteStore,g)}else if(!1===b&& !1!==d.dc){let h=[],i=Promise.resolve();d.rc.forEach((a,b)=>{d.sharedClientState.isLocalQueryTarget(b)?h.push(b):i=i.then(()=>(jA(d,b),h6(d.localStore,b,!0))),iH(d.remoteStore,b)}),await i,await jM(d,h),function(a){var b;let c=b=a;c.cc.forEach((a,b)=>{iH(c.remoteStore,b)}),c.ac.fs(),c.cc=new Map,c.uc=new dW(ds.comparator)}(d),d.dc=!1,await i1(d.remoteStore,!1)}}async function jM(a,b,c){var d;let e=d=a,f=[],g=[];for(let h of b){let i,j=e.rc.get(h);if(j&&0!==j.length)for(let k of(i=await h5(e.localStore,e3(j[0])),j)){let l=e.ic.get(k),m=await jI(e,l);m.snapshot&&g.push(m.snapshot)}else{let n=await h8(e.localStore,h);i=await h5(e.localStore,n),await jq(e,jN(n),h,!1,i.resumeToken)}f.push(i)}return e.sc.Wo(g),f}function jN(a){return eY(a.path,a.collectionGroup,a.orderBy,a.filters,a.limit,"F",a.startAt,a.endAt)}function jO(a){var b,c,d;let e=b=a;return(d=(c=e.localStore).persistence).vi()}async function jP(a,b,c,d){var e;let f=e=a;if(f.dc)return void c0("SyncEngine","Ignoring unexpected query state notification.");let g=f.rc.get(b);if(g&&g.length>0)switch(c){case"current":case"not-current":{let h=await h9(f.localStore,e9(g[0])),i=fX.createSynthesizedRemoteEventForCurrentChange(b,"current"===c,d1.EMPTY_BYTE_STRING);await jF(f,h,i);break}case"rejected":await h6(f.localStore,b,!0),jA(f,b,d);break;default:c4()}}async function jQ(a,b,c){let d=jR(a);if(d.dc){for(let e of b){if(d.rc.has(e)){c0("SyncEngine","Adding an already active target "+e);continue}let f=await h8(d.localStore,e),g=await h5(d.localStore,f);await jq(d,jN(f),g.targetId,!1,g.resumeToken),iG(d.remoteStore,g)}for(let h of c)d.rc.has(h)&&await h6(d.localStore,h,!1).then(()=>{iH(d.remoteStore,h),jA(d,h)}).catch(dF)}}function jR(a){var b;let c=b=a;return c.remoteStore.remoteSyncer.applyRemoteEvent=jt.bind(null,c),c.remoteStore.remoteSyncer.getRemoteKeysForTarget=jH.bind(null,c),c.remoteStore.remoteSyncer.rejectListen=jv.bind(null,c),c.sc.Wo=jd.bind(null,c.eventManager),c.sc.wc=je.bind(null,c.eventManager),c}function jS(a){var b;let c=b=a;return c.remoteStore.remoteSyncer.applySuccessfulWrite=jw.bind(null,c),c.remoteStore.remoteSyncer.rejectFailedWrite=jx.bind(null,c),c}class jT{constructor(){this.synchronizeTabs=!1}async initialize(a){this.It=iw(a.databaseInfo.databaseId),this.sharedClientState=this.gc(a),this.persistence=this.yc(a),await this.persistence.start(),this.localStore=this.Ic(a),this.gcScheduler=this.Tc(a,this.localStore),this.indexBackfillerScheduler=this.Ec(a,this.localStore)}Tc(a,b){return null}Ec(a,b){return null}Ic(a){return h0(this.persistence,new h$,a.initialUser,this.It)}yc(a){return new hQ(hS.Bs,this.It)}gc(a){return new io}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class jU{async initialize(a,b){this.localStore||(this.localStore=a.localStore,this.sharedClientState=a.sharedClientState,this.datastore=this.createDatastore(b),this.remoteStore=this.createRemoteStore(b),this.eventManager=this.createEventManager(b),this.syncEngine=this.createSyncEngine(b,!a.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>ju(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=jG.bind(null,this.syncEngine),await i1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(a){return new ja}createDatastore(a){var b,c,d,e,f;let g=iw(a.databaseInfo.databaseId),h=(b=a.databaseInfo,new it(b));return c=a.authCredentials,d=a.appCheckCredentials,e=h,f=g,new iB(c,d,e,f)}createRemoteStore(a){var b,c,d,e,f;return b=this.localStore,c=this.datastore,d=a.asyncQueue,e=a=>ju(this.syncEngine,a,0),f=iq.C()?new iq:new ip,new iD(b,c,d,e,f)}createSyncEngine(a,b){return function(a,b,c,d,e,f,g){let h=new jo(a,b,c,d,e,f);return g&&(h.dc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,a.initialUser,a.maxConcurrentLimboResolutions,b)}terminate(){return async function(a){var b;let c=b=a;c0("RemoteStore","RemoteStore shutting down."),c._u.add(5),await iF(c),c.mu.shutdown(),c.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function jV(a,b,c){if(!c)throw new c6(c5.INVALID_ARGUMENT,`Function ${a}() cannot be called with an empty ${b}.`)}function jW(a){if(!ds.isDocumentKey(a))throw new c6(c5.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${a} has ${a.length}.`)}function jX(a){if(ds.isDocumentKey(a))throw new c6(c5.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${a} has ${a.length}.`)}function jY(a){if(void 0===a)return"undefined";if(null===a)return"null";if("string"==typeof a)return a.length>20&&(a=`${a.substring(0,20)}...`),JSON.stringify(a);if("number"==typeof a||"boolean"==typeof a)return""+a;if("object"==typeof a){if(a instanceof Array)return"an array";{var b;let c=(b=a).constructor?b.constructor.name:null;return c?`a custom ${c} object`:"an object"}}return"function"==typeof a?"a function":c4()}function jZ(a,b){if("_delegate"in a&&(a=a._delegate),!(a instanceof b)){if(b.name===a.constructor.name)throw new c6(c5.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let c=jY(a);throw new c6(c5.INVALID_ARGUMENT,`Expected type '${b.name}', but it was: ${c}`)}}return a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let j$=new Map;class j_{constructor(a){var b;if(void 0===a.host){if(void 0!==a.ssl)throw new c6(c5.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=a.host,this.ssl=null===(b=a.ssl)|| void 0===b||b;if(this.credentials=a.credentials,this.ignoreUndefinedProperties=!!a.ignoreUndefinedProperties,void 0===a.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==a.cacheSizeBytes&&a.cacheSizeBytes<1048576)throw new c6(c5.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=a.cacheSizeBytes}this.experimentalForceLongPolling=!!a.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!a.experimentalAutoDetectLongPolling,this.useFetchStreams=!!a.useFetchStreams,function(a,b,c,d){if(!0===b&& !0===d)throw new c6(c5.INVALID_ARGUMENT,`${a} and ${c} cannot be used together.`)}("experimentalForceLongPolling",a.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",a.experimentalAutoDetectLongPolling)}isEqual(a){return this.host===a.host&&this.ssl===a.ssl&&this.credentials===a.credentials&&this.cacheSizeBytes===a.cacheSizeBytes&&this.experimentalForceLongPolling===a.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===a.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===a.ignoreUndefinedProperties&&this.useFetchStreams===a.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The Cloud Firestore service interface.
 *
 * Do not call this constructor directly. Instead, use {@link (getFirestore:1)}.
 */ class j0{constructor(a,b,c,d){this._authCredentials=a,this._appCheckCredentials=b,this._databaseId=c,this._app=d,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new j_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new c6(c5.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(a){if(this._settingsFrozen)throw new c6(c5.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new j_(a),void 0!==a.credentials&&(this._authCredentials=function(a){if(!a)return new c9;switch(a.type){case"gapi":let b=a.client;return new dd(b,a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new c6(c5.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(a.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(a){let b=j$.get(a);b&&(c0("ComponentProvider","Removing Datastore"),j$.delete(a),b.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A `DocumentReference` refers to a document location in a Firestore database
 * and can be used to write, read, or listen to the location. The document at
 * the referenced location may or may not exist.
 */ class j1{constructor(a,b,c){this.converter=b,this._key=c,this.type="document",this.firestore=a}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new j3(this.firestore,this.converter,this._key.path.popLast())}withConverter(a){return new j1(this.firestore,a,this._key)}}class j2{constructor(a,b,c){this.converter=b,this._query=c,this.type="query",this.firestore=a}withConverter(a){return new j2(this.firestore,a,this._query)}}class j3 extends j2{constructor(a,b,c){super(a,b,eZ(c)),this._path=c,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let a=this._path.popLast();return a.isEmpty()?null:new j1(this.firestore,null,new ds(a))}withConverter(a){return new j3(this.firestore,a,this._path)}}function j4(a,b,...c){if(a=(0,p.m9)(a),jV("collection","path",b),a instanceof j0){let d=dp.fromString(b,...c);return jX(d),new j3(a,null,d)}{if(!(a instanceof j1||a instanceof j3))throw new c6(c5.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let e=a._path.child(dp.fromString(b,...c));return jX(e),new j3(a.firestore,null,e)}}function j5(a,b,...c){if(a=(0,p.m9)(a),1===arguments.length&&(b=dh.R()),jV("doc","path",b),a instanceof j0){let d=dp.fromString(b,...c);return jW(d),new j1(a,null,new ds(d))}{if(!(a instanceof j1||a instanceof j3))throw new c6(c5.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let e=a._path.child(dp.fromString(b,...c));return jW(e),new j1(a.firestore,a instanceof j3?a.converter:null,new ds(e))}}function j6(a,b){return a=(0,p.m9)(a),b=(0,p.m9)(b),(a instanceof j1||a instanceof j3)&&(b instanceof j1||b instanceof j3)&&a.firestore===b.firestore&&a.path===b.path&&a.converter===b.converter}function j7(a,b){return a=(0,p.m9)(a),b=(0,p.m9)(b),a instanceof j2&&b instanceof j2&&a.firestore===b.firestore&&e5(a._query,b._query)&&a.converter===b.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * On web, a `ReadableStream` is wrapped around by a `ByteStreamReader`.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /*
 * A wrapper implementation of Observer<T> that will dispatch events
 * asynchronously. To allow immediate silencing, a mute call is added which
 * causes events scheduled to no longer be raised.
 */ class j8{constructor(a){this.observer=a,this.muted=!1}next(a){this.observer.next&&this.Rc(this.observer.next,a)}error(a){this.observer.error?this.Rc(this.observer.error,a):c1("Uncaught Error in snapshot listener:",a)}bc(){this.muted=!0}Rc(a,b){this.muted||setTimeout(()=>{this.muted||a(b)},0)}}class j9{constructor(a,b){this._data=b,this.type="AggregateQuerySnapshot",this.query=a}data(){return this._data}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * CountQueryRunner encapsulates the logic needed to run the count aggregation
 * queries.
 */ class ka{constructor(a,b,c){this.query=a,this.datastore=b,this.userDataWriter=c}run(){return iC(this.datastore,this.query._query).then(a=>{var b,c;(b=void 0!==a[0])||c4();let d=Object.entries(a[0]).filter(([a,b])=>"count_alias"===a).map(([a,b])=>this.userDataWriter.convertValue(b))[0];return"number"==typeof d||c4(),Promise.resolve(new j9(this.query,{count:d}))})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Internal transaction object responsible for accumulating the mutations to
 * perform and the base versions for any documents read.
 */ class kb{constructor(a){this.datastore=a,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(a){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new c6(c5.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");let b=await async function(a,b){var c;let d=c=a,e=gg(d.It)+"/documents",f={documents:b.map(a=>gc(d.It,a))},g=await d._o("BatchGetDocuments",e,f,b.length),h=new Map;g.forEach(a=>{var b,c;let e=(b=d.It,"found"in(c=a)?function(a,b){var c;b.found||c4(),b.found.name,b.found.updateTime;let d=gd(a,b.found.name),e=f9(b.found.updateTime),f=new ey({mapValue:{fields:b.found.fields}});return eA.newFoundDocument(d,e,f)}(b,c):"missing"in c?function(a,b){var c,d;b.missing||c4(),!b.readTime&&c4();let e=gd(a,b.missing),f=f9(b.readTime);return eA.newNoDocument(e,f)}(b,c):c4());h.set(e.key.toString(),e)});let i=[];return b.forEach(a=>{var b;let c=h.get(a.toString());c||c4(),i.push(c)}),i}(this.datastore,a);return b.forEach(a=>this.recordVersion(a)),b}set(a,b){this.write(b.toMutation(a,this.precondition(a))),this.writtenDocs.add(a.toString())}update(a,b){try{this.write(b.toMutation(a,this.preconditionForUpdate(a)))}catch(c){this.lastWriteError=c}this.writtenDocs.add(a.toString())}delete(a){this.write(new fG(a,this.precondition(a))),this.writtenDocs.add(a.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;let a=this.readVersions;this.mutations.forEach(b=>{a.delete(b.key.toString())}),a.forEach((a,b)=>{let c=ds.fromPath(b);this.mutations.push(new fH(c,this.precondition(c)))}),await async function(a,b){var c;let d=c=a,e=gg(d.It)+"/documents",f={writes:b.map(a=>gk(d.It,a))};await d.ao("Commit",e,f)}(this.datastore,this.mutations),this.committed=!0}recordVersion(a){let b;if(a.isFoundDocument())b=a.version;else{if(!a.isNoDocument())throw c4();b=dm.min()}let c=this.readVersions.get(a.key.toString());if(c){if(!b.isEqual(c))throw new c6(c5.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(a.key.toString(),b)}precondition(a){let b=this.readVersions.get(a.toString());return!this.writtenDocs.has(a.toString())&&b?b.isEqual(dm.min())?ft.exists(!1):ft.updateTime(b):ft.none()}preconditionForUpdate(a){let b=this.readVersions.get(a.toString());if(!this.writtenDocs.has(a.toString())&&b){if(b.isEqual(dm.min()))throw new c6(c5.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ft.updateTime(b)}return ft.exists(!0)}write(a){this.ensureCommitNotCalled(),this.mutations.push(a)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * FirestoreClient is a top-level class that constructs and owns all of the
 * pieces of the client SDK architecture. It is responsible for creating the
 * async queue that is shared by all of the other components in the system.
 */ class kc{constructor(a,b,c,d){this.authCredentials=a,this.appCheckCredentials=b,this.asyncQueue=c,this.databaseInfo=d,this.user=cY.UNAUTHENTICATED,this.clientId=dh.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(c,async a=>{c0("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(c,a=>(c0("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(a){this.authCredentialListener=a}setAppCheckTokenChangeListener(a){this.appCheckCredentialListener=a}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new c6(c5.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let a=new c7;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),a.resolve()}catch(b){let c=i5(b,"Failed to shutdown persistence");a.reject(c)}}),a.promise}}async function kd(a,b){a.asyncQueue.verifyOperationInProgress(),c0("FirestoreClient","Initializing OfflineComponentProvider");let c=await a.getConfiguration();await b.initialize(c);let d=c.initialUser;a.setCredentialChangeListener(async a=>{d.isEqual(a)||(await h1(b.localStore,a),d=a)}),b.persistence.setDatabaseDeletedListener(()=>a.terminate()),a.offlineComponents=b}async function ke(a,b){a.asyncQueue.verifyOperationInProgress();let c=await kf(a);c0("FirestoreClient","Initializing OnlineComponentProvider");let d=await a.getConfiguration();await b.initialize(c,d),a.setCredentialChangeListener(a=>i0(b.remoteStore,a)),a.setAppCheckTokenChangeListener((a,c)=>i0(b.remoteStore,c)),a.onlineComponents=b}async function kf(a){return a.offlineComponents||(c0("FirestoreClient","Using default OfflineComponentProvider"),await kd(a,new jT)),a.offlineComponents}async function kg(a){return a.onlineComponents||(c0("FirestoreClient","Using default OnlineComponentProvider"),await ke(a,new jU)),a.onlineComponents}async function kh(a){let b=await kg(a),c=b.eventManager;return c.onListen=jp.bind(null,b.syncEngine),c.onUnlisten=jr.bind(null,b.syncEngine),c}function ki(a){return function(a,b){if("object"!=typeof a||null===a)return!1;let c=a;for(let d of b)if(d in c&&"function"==typeof c[d])return!0;return!1}(a,["next","error","complete"])}class kj extends j0{constructor(a,b,c,d){super(a,b,c,d),this.type="firestore",this._queue=new class{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new ix(this,"async_queue_retry"),this.Wc=()=>{let a=iv();a&&c0("AsyncQueue","Visibility state changed to "+a.visibilityState),this.xo.Po()};let a=iv();a&&"function"==typeof a.addEventListener&&a.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(a){this.enqueue(a)}enqueueAndForgetEvenWhileRestricted(a){this.zc(),this.Hc(a)}enterRestrictedMode(a){if(!this.Uc){this.Uc=!0,this.Qc=a||!1;let b=iv();b&&"function"==typeof b.removeEventListener&&b.removeEventListener("visibilitychange",this.Wc)}}enqueue(a){if(this.zc(),this.Uc)return new Promise(()=>{});let b=new c7;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(a().then(b.resolve,b.reject),b.promise)).then(()=>b.promise)}enqueueRetryable(a){this.enqueueAndForget(()=>(this.Lc.push(a),this.Jc()))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(a){if(!dL(a))throw a;c0("AsyncQueue","Operation failed with retryable error: "+a)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(a){let b=this.Bc.then(()=>(this.Gc=!0,a().catch(a=>{var b;this.Kc=a,this.Gc=!1;let c,d=(c=(b=a).message||"",b.stack&&(c=b.stack.includes(b.message)?b.stack:b.message+"\n"+b.stack),c);throw c1("INTERNAL UNHANDLED ERROR: ",d),a}).then(a=>(this.Gc=!1,a))));return this.Bc=b,b}enqueueAfterDelay(a,b,c){this.zc(),this.jc.indexOf(a)> -1&&(b=0);let d=i4.createAndSchedule(this,a,b,c,a=>this.Yc(a));return this.qc.push(d),d}zc(){this.Kc&&c4()}verifyOperationInProgress(){}async Xc(){let a;do await (a=this.Bc);while(a!==this.Bc)}Zc(a){for(let b of this.qc)if(b.timerId===a)return!0;return!1}ta(a){return this.Xc().then(()=>{for(let b of(this.qc.sort((a,b)=>a.targetTimeMs-b.targetTimeMs),this.qc))if(b.skipDelay(),"all"!==a&&b.timerId===a)break;return this.Xc()})}ea(a){this.jc.push(a)}Yc(a){let b=this.qc.indexOf(a);this.qc.splice(b,1)}},this._persistenceKey=(null==d?void 0:d.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||km(this),this._firestoreClient.terminate()}}function kk(a,b){let c="object"==typeof a?a:(0,m.Mq)(),d=(0,m.qX)(c,"firestore").getImmediate({identifier:"string"==typeof a?a:b||"(default)"});if(!d._initialized){let e=(0,p.P0)("firestore");e&&function(a,b,c,d={}){var e;let f=(a=jZ(a,j0))._getSettings();if("firestore.googleapis.com"!==f.host&&f.host!==b&&c2("Host has been set in both settings() and useEmulator(), emulator host will be used"),a._setSettings(Object.assign(Object.assign({},f),{host:`${b}:${c}`,ssl:!1})),d.mockUserToken){let g,h;if("string"==typeof d.mockUserToken)g=d.mockUserToken,h=cY.MOCK_USER;else{g=(0,p.Sg)(d.mockUserToken,null===(e=a._app)|| void 0===e?void 0:e.options.projectId);let i=d.mockUserToken.sub||d.mockUserToken.user_id;if(!i)throw new c6(c5.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new cY(i)}a._authCredentials=new da(new c8(g,h))}}(d,...e)}return d}function kl(a){return a._firestoreClient||km(a),a._firestoreClient.verifyNotTerminated(),a._firestoreClient}function km(a){var b,c,d,e,f;let g=a._freezeSettings(),h=(c=a._databaseId,d=(null===(b=a._app)|| void 0===b?void 0:b.options.appId)||"",e=a._persistenceKey,f=g,new d9(c,d,e,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,f.useFetchStreams));a._firestoreClient=new kc(a._authCredentials,a._appCheckCredentials,a._queue,h)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An immutable object representing an array of bytes.
 */ class kn{constructor(a){this._byteString=a}static fromBase64String(a){try{return new kn(d1.fromBase64String(a))}catch(b){throw new c6(c5.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+b)}}static fromUint8Array(a){return new kn(d1.fromUint8Array(a))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(a){return this._byteString.isEqual(a._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a
 * list of field names (referring to a nested field in the document).
 *
 * Create a `FieldPath` by providing field names. If more than one field
 * name is provided, the path will point to a nested field in a document.
 */ class ko{constructor(...a){for(let b=0;b<a.length;++b)if(0===a[b].length)throw new c6(c5.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dr(a)}isEqual(a){return this._internalPath.isEqual(a._internalPath)}}function kp(){return new ko("__name__")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Sentinel values that can be used when writing document fields with `set()`
 * or `update()`.
 */ class kq{constructor(a){this._methodName=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An immutable object representing a geographic location in Firestore. The
 * location is represented as latitude/longitude pair.
 *
 * Latitude values are in the range of [-90, 90].
 * Longitude values are in the range of [-180, 180].
 */ class kr{constructor(a,b){if(!isFinite(a)||a< -90||a>90)throw new c6(c5.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+a);if(!isFinite(b)||b< -180||b>180)throw new c6(c5.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+b);this._lat=a,this._long=b}get latitude(){return this._lat}get longitude(){return this._long}isEqual(a){return this._lat===a._lat&&this._long===a._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(a){return di(this._lat,a._lat)||di(this._long,a._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ks=/^__.*__$/;class kt{constructor(a,b,c){this.data=a,this.fieldMask=b,this.fieldTransforms=c}toMutation(a,b){return null!==this.fieldMask?new fC(a,this.data,this.fieldMask,b,this.fieldTransforms):new fB(a,this.data,b,this.fieldTransforms)}}class ku{constructor(a,b,c){this.data=a,this.fieldMask=b,this.fieldTransforms=c}toMutation(a,b){return new fC(a,this.data,this.fieldMask,b,this.fieldTransforms)}}function kv(a){switch(a){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw c4()}}class kw{constructor(a,b,c,d,e,f){this.settings=a,this.databaseId=b,this.It=c,this.ignoreUndefinedProperties=d,void 0===e&&this.na(),this.fieldTransforms=e||[],this.fieldMask=f||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(a){return new kw(Object.assign(Object.assign({},this.settings),a),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(a){var b;let c=null===(b=this.path)|| void 0===b?void 0:b.child(a),d=this.ia({path:c,oa:!1});return d.ua(a),d}ca(a){var b;let c=null===(b=this.path)|| void 0===b?void 0:b.child(a),d=this.ia({path:c,oa:!1});return d.na(),d}aa(a){return this.ia({path:void 0,oa:!0})}ha(a){return kQ(a,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(a){return void 0!==this.fieldMask.find(b=>a.isPrefixOf(b))|| void 0!==this.fieldTransforms.find(b=>a.isPrefixOf(b.field))}na(){if(this.path)for(let a=0;a<this.path.length;a++)this.ua(this.path.get(a))}ua(a){if(0===a.length)throw this.ha("Document fields must not be empty");if(kv(this.sa)&&ks.test(a))throw this.ha('Document fields cannot begin and end with "__"')}}class kx{constructor(a,b,c){this.databaseId=a,this.ignoreUndefinedProperties=b,this.It=c||iw(a)}da(a,b,c,d=!1){return new kw({sa:a,methodName:b,fa:c,path:dr.emptyPath(),oa:!1,la:d},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function ky(a){let b=a._freezeSettings(),c=iw(a._databaseId);return new kx(a._databaseId,!!b.ignoreUndefinedProperties,c)}function kz(a,b,c,d,e,f={}){let g=a.da(f.merge||f.mergeFields?2:0,b,c,e);kM("Data must be an object, but it was:",g,d);let h=kK(d,g),i,j;if(f.merge)i=new d0(g.fieldMask),j=g.fieldTransforms;else if(f.mergeFields){let k=[];for(let l of f.mergeFields){let m=kN(b,l,c);if(!g.contains(m))throw new c6(c5.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);kR(k,m)||k.push(m)}i=new d0(k),j=g.fieldTransforms.filter(a=>i.covers(a.field))}else i=null,j=g.fieldTransforms;return new kt(new ey(h),i,j)}class kA extends kq{_toFieldTransform(a){if(2!==a.sa)throw 1===a.sa?a.ha(`${this._methodName}() can only appear at the top level of your update data`):a.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return a.fieldMask.push(a.path),null}isEqual(a){return a instanceof kA}}function kB(a,b,c){return new kw({sa:3,fa:b.settings.fa,methodName:a._methodName,oa:c},b.databaseId,b.It,b.ignoreUndefinedProperties)}class kC extends kq{_toFieldTransform(a){return new fr(a.path,new fj)}isEqual(a){return a instanceof kC}}class kD extends kq{constructor(a,b){super(a),this._a=b}_toFieldTransform(a){let b=kB(this,a,!0),c=this._a.map(a=>kJ(a,b)),d=new fk(c);return new fr(a.path,d)}isEqual(a){return this===a}}class kE extends kq{constructor(a,b){super(a),this._a=b}_toFieldTransform(a){let b=kB(this,a,!0),c=this._a.map(a=>kJ(a,b)),d=new fm(c);return new fr(a.path,d)}isEqual(a){return this===a}}class kF extends kq{constructor(a,b){super(a),this.wa=b}_toFieldTransform(a){let b=new fo(a.It,fe(a.It,this.wa));return new fr(a.path,b)}isEqual(a){return this===a}}function kG(a,b,c,d){let e=a.da(1,b,c);kM("Data must be an object, but it was:",e,d);let f=[],g=ey.empty();dU(d,(a,d)=>{let h=kP(b,a,c);d=(0,p.m9)(d);let i=e.ca(h);if(d instanceof kA)f.push(h);else{let j=kJ(d,i);null!=j&&(f.push(h),g.set(h,j))}});let h=new d0(f);return new ku(g,h,e.fieldTransforms)}function kH(a,b,c,d,e,f){let g=a.da(1,b,c),h=[kN(b,d,c)],i=[e];if(f.length%2!=0)throw new c6(c5.INVALID_ARGUMENT,`Function ${b}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let j=0;j<f.length;j+=2)h.push(kN(b,f[j])),i.push(f[j+1]);let k=[],l=ey.empty();for(let m=h.length-1;m>=0;--m)if(!kR(k,h[m])){let n=h[m],o=i[m];o=(0,p.m9)(o);let q=g.ca(n);if(o instanceof kA)k.push(n);else{let r=kJ(o,q);null!=r&&(k.push(n),l.set(n,r))}}let s=new d0(k);return new ku(l,s,g.fieldTransforms)}function kI(a,b,c,d=!1){return kJ(c,a.da(d?4:3,b))}function kJ(a,b){if(kL(a=(0,p.m9)(a)))return kM("Unsupported field value:",b,a),kK(a,b);if(a instanceof kq)return function(a,b){if(!kv(b.sa))throw b.ha(`${a._methodName}() can only be used with update() and set()`);if(!b.path)throw b.ha(`${a._methodName}() is not currently supported inside arrays`);let c=a._toFieldTransform(b);c&&b.fieldTransforms.push(c)}(a,b),null;if(void 0===a&&b.ignoreUndefinedProperties)return null;if(b.path&&b.fieldMask.push(b.path),a instanceof Array){if(b.settings.oa&&4!==b.sa)throw b.ha("Nested arrays are not supported");return function(a,b){let c=[],d=0;for(let e of a){let f=kJ(e,b.aa(d));null==f&&(f={nullValue:"NULL_VALUE"}),c.push(f),d++}return{arrayValue:{values:c}}}(a,b)}return function(a,b){if(null===(a=(0,p.m9)(a)))return{nullValue:"NULL_VALUE"};if("number"==typeof a)return fe(b.It,a);if("boolean"==typeof a)return{booleanValue:a};if("string"==typeof a)return{stringValue:a};if(a instanceof Date){let c=dl.fromDate(a);return{timestampValue:f7(b.It,c)}}if(a instanceof dl){let d=new dl(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:f7(b.It,d)}}if(a instanceof kr)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof kn)return{bytesValue:f8(b.It,a._byteString)};if(a instanceof j1){let e=b.databaseId,f=a.firestore._databaseId;if(!f.isEqual(e))throw b.ha(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${e.projectId}/${e.database}`);return{referenceValue:ga(a.firestore._databaseId||b.databaseId,a._key.path)}}throw b.ha(`Unsupported field value: ${jY(a)}`)}(a,b)}function kK(a,b){let c={};return dV(a)?b.path&&b.path.length>0&&b.fieldMask.push(b.path):dU(a,(a,d)=>{let e=kJ(d,b.ra(a));null!=e&&(c[a]=e)}),{mapValue:{fields:c}}}function kL(a){return!("object"!=typeof a||null===a||a instanceof Array||a instanceof Date||a instanceof dl||a instanceof kr||a instanceof kn||a instanceof j1||a instanceof kq)}function kM(a,b,c){var d;if(!kL(c)||"object"!=typeof(d=c)||null===d||Object.getPrototypeOf(d)!==Object.prototype&&null!==Object.getPrototypeOf(d)){let e=jY(c);throw"an object"===e?b.ha(a+" a custom object"):b.ha(a+" "+e)}}function kN(a,b,c){if((b=(0,p.m9)(b))instanceof ko)return b._internalPath;if("string"==typeof b)return kP(a,b);throw kQ("Field path arguments must be of type string or ",a,!1,void 0,c)}let kO=RegExp("[~\\*/\\[\\]]");function kP(a,b,c){if(b.search(kO)>=0)throw kQ(`Invalid field path (${b}). Paths must not contain '~', '*', '/', '[', or ']'`,a,!1,void 0,c);try{return new ko(...b.split("."))._internalPath}catch(d){throw kQ(`Invalid field path (${b}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,a,!1,void 0,c)}}function kQ(a,b,c,d,e){let f=d&&!d.isEmpty(),g=void 0!==e,h=`Function ${b}() called with invalid data`;c&&(h+=" (via `toFirestore()`)"),h+=". ";let i="";return(f||g)&&(i+=" (found",f&&(i+=` in field ${d}`),g&&(i+=` in document ${e}`),i+=")"),new c6(c5.INVALID_ARGUMENT,h+a+i)}function kR(a,b){return a.some(a=>a.isEqual(b))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */ class kS{constructor(a,b,c,d,e){this._firestore=a,this._userDataWriter=b,this._key=c,this._document=d,this._converter=e}get id(){return this._key.path.lastSegment()}get ref(){return new j1(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let a=new kT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(a)}return this._userDataWriter.convertValue(this._document.data.value)}}get(a){if(this._document){let b=this._document.data.field(kU("DocumentSnapshot.get",a));if(null!==b)return this._userDataWriter.convertValue(b)}}}class kT extends kS{data(){return super.data()}}function kU(a,b){return"string"==typeof b?kP(a,b):b instanceof ko?b._internalPath:b._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function kV(a){if("L"===a.limitType&&0===a.explicitOrderBy.length)throw new c6(c5.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kW{}function kX(a,...b){for(let c of b)a=c._apply(a);return a}class kY extends kW{constructor(a,b,c){super(),this.ma=a,this.ga=b,this.ya=c,this.type="where"}_apply(a){let b=ky(a.firestore),c=function(a,b,c,d,e,f,g){let h;if(e.isKeyField()){if("array-contains"===f||"array-contains-any"===f)throw new c6(c5.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if("in"===f||"not-in"===f){k4(g,f);let i=[];for(let j of g)i.push(k3(d,a,j));h={arrayValue:{values:i}}}else h=k3(d,a,g)}else"in"!==f&&"not-in"!==f&&"array-contains-any"!==f||k4(g,f),h=kI(c,b,g,"in"===f||"not-in"===f);let k=eJ.create(e,f,h);return function(a,b){if(b.dt()){let c=e0(a);if(null!==c&&!c.isEqual(b.field))throw new c6(c5.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${c.toString()}' and '${b.field.toString()}'`);let d=e_(a);null!==d&&k5(a,b.field,d)}let e=function(a,b){for(let c of a.filters)if(b.indexOf(c.op)>=0)return c.op;return null}(a,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(b.op));if(null!==e)throw e===b.op?new c6(c5.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${b.op.toString()}' filter.`):new c6(c5.INVALID_ARGUMENT,`Invalid query. You cannot use '${b.op.toString()}' filters with '${e.toString()}' filters.`)}(a,k),k}(a._query,"where",b,a.firestore._databaseId,this.ma,this.ga,this.ya);return new j2(a.firestore,a.converter,function(a,b){let c=a.filters.concat([b]);return new eX(a.path,a.collectionGroup,a.explicitOrderBy.slice(),c,a.limit,a.limitType,a.startAt,a.endAt)}(a._query,c))}}function kZ(a,b,c){let d=kU("where",a);return new kY(d,b,c)}class k$ extends kW{constructor(a,b){super(),this.ma=a,this.pa=b,this.type="orderBy"}_apply(a){let b=function(a,b,c){if(null!==a.startAt)throw new c6(c5.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==a.endAt)throw new c6(c5.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");let d=new eT(b,c);return function(a,b){if(null===e_(a)){let c=e0(a);null!==c&&k5(a,c,b.field)}}(a,d),d}(a._query,this.ma,this.pa);return new j2(a.firestore,a.converter,function(a,b){let c=a.explicitOrderBy.concat([b]);return new eX(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)}(a._query,b))}}function k_(a,b="asc"){let c=kU("orderBy",a);return new k$(c,b)}class k0 extends kW{constructor(a,b,c){super(),this.type=a,this.Ia=b,this.Ta=c}_apply(a){return new j2(a.firestore,a.converter,e4(a._query,this.Ia,this.Ta))}}function k1(a){return function a(b,c){if(c<=0)throw new c6(c5.INVALID_ARGUMENT,`Function ${b}() requires a positive number, but it was: ${c}.`)}("limit",a),new k0("limit",a,"F")}function k2(a,b,c,d){if(c[0]=getModularInstance(c[0]),c[0]instanceof kS)return function(a,b,c,d,e){if(!d)throw new c6(c5.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);let f=[];for(let g of e2(a))if(g.field.isKeyField())f.push(em(b,d.key));else{let h=d.data.field(g.field);if(d6(h))throw new c6(c5.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+g.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===h){let i=g.field.canonicalString();throw new c6(c5.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${i}' (used as the orderBy) does not exist.`)}f.push(h)}return new eS(f,e)}(a._query,a.firestore._databaseId,b,c[0]._document,d);{let e=ky(a.firestore);return function(a,b,c,d,e,f){let g=a.explicitOrderBy;if(e.length>g.length)throw new c6(c5.INVALID_ARGUMENT,`Too many arguments provided to ${d}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);let h=[];for(let i=0;i<e.length;i++){let j=e[i];if(g[i].field.isKeyField()){if("string"!=typeof j)throw new c6(c5.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${d}(), but got a ${typeof j}`);if(!e1(a)&& -1!==j.indexOf("/"))throw new c6(c5.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${d}() must be a plain document ID, but '${j}' contains a slash.`);let k=a.path.child(dp.fromString(j));if(!ds.isDocumentKey(k))throw new c6(c5.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${d}() must result in a valid document path, but '${k}' is not because it contains an odd number of segments.`);let l=new ds(k);h.push(em(b,l))}else{let m=kI(c,d,j);h.push(m)}}return new eS(h,f)}(a._query,a.firestore._databaseId,e,b,c,d)}}function k3(a,b,c){if("string"==typeof(c=(0,p.m9)(c))){if(""===c)throw new c6(c5.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!e1(b)&& -1!==c.indexOf("/"))throw new c6(c5.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${c}' contains a '/' character.`);let d=b.path.child(dp.fromString(c));if(!ds.isDocumentKey(d))throw new c6(c5.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${d}' is not because it has an odd number of segments (${d.length}).`);return em(a,new ds(d))}if(c instanceof j1)return em(a,c._key);throw new c6(c5.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${jY(c)}.`)}function k4(a,b){if(!Array.isArray(a)||0===a.length)throw new c6(c5.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${b.toString()}' filters.`);if(a.length>10)throw new c6(c5.INVALID_ARGUMENT,`Invalid Query. '${b.toString()}' filters support a maximum of 10 elements in the value array.`)}function k5(a,b,c){if(!c.isEqual(b))throw new c6(c5.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${b.toString()}' and so you must also use '${b.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${c.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Converts Firestore's internal types to the JavaScript types that we expose
 * to the user.
 *
 * @internal
 */ class k6{convertValue(a,b="none"){switch(eg(a)){case 0:return null;case 1:return a.booleanValue;case 2:return d4(a.integerValue||a.doubleValue);case 3:return this.convertTimestamp(a.timestampValue);case 4:return this.convertServerTimestamp(a,b);case 5:return a.stringValue;case 6:return this.convertBytes(d5(a.bytesValue));case 7:return this.convertReference(a.referenceValue);case 8:return this.convertGeoPoint(a.geoPointValue);case 9:return this.convertArray(a.arrayValue,b);case 10:return this.convertObject(a.mapValue,b);default:throw c4()}}convertObject(a,b){let c={};return dU(a.fields,(a,d)=>{c[a]=this.convertValue(d,b)}),c}convertGeoPoint(a){return new kr(d4(a.latitude),d4(a.longitude))}convertArray(a,b){return(a.values||[]).map(a=>this.convertValue(a,b))}convertServerTimestamp(a,b){switch(b){case"previous":let c=d7(a);return null==c?null:this.convertValue(c,b);case"estimate":return this.convertTimestamp(d8(a));default:return null}}convertTimestamp(a){let b=d3(a);return new dl(b.seconds,b.nanos)}convertDocumentKey(a,b){var c;let d=dp.fromString(a);(c=gv(d))||c4();let e=new ea(d.get(1),d.get(3)),f=new ds(d.popFirst(5));return e.isEqual(b)||c1(`Document ${f} contains a document reference within a different database (${e.projectId}/${e.database}) which is not supported. It will be treated as a reference in the current database (${b.projectId}/${b.database}) instead.`),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Converts custom model object of type T into `DocumentData` by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to `DocumentData`
 * because we want to provide the user with a more specific error message if
 * their `set()` or fails due to invalid data originating from a `toFirestore()`
 * call.
 */ function k7(a,b,c){return a?c&&(c.merge||c.mergeFields)?a.toFirestore(b,c):a.toFirestore(b):b}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Metadata about a snapshot, describing the state of the snapshot.
 */ class k8{constructor(a,b){this.hasPendingWrites=a,this.fromCache=b}isEqual(a){return this.hasPendingWrites===a.hasPendingWrites&&this.fromCache===a.fromCache}}class k9 extends kS{constructor(a,b,c,d,e,f){super(a,b,c,d,f),this._firestore=a,this._firestoreImpl=a,this.metadata=e}exists(){return super.exists()}data(a={}){if(this._document){if(this._converter){let b=new la(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(b,a)}return this._userDataWriter.convertValue(this._document.data.value,a.serverTimestamps)}}get(a,b={}){if(this._document){let c=this._document.data.field(kU("DocumentSnapshot.get",a));if(null!==c)return this._userDataWriter.convertValue(c,b.serverTimestamps)}}}class la extends k9{data(a={}){return super.data(a)}}class lb{constructor(a,b,c,d){this._firestore=a,this._userDataWriter=b,this._snapshot=d,this.metadata=new k8(d.hasPendingWrites,d.fromCache),this.query=c}get docs(){let a=[];return this.forEach(b=>a.push(b)),a}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(a,b){this._snapshot.docs.forEach(c=>{a.call(b,new la(this._firestore,this._userDataWriter,c.key,c,new k8(this._snapshot.mutatedKeys.has(c.key),this._snapshot.fromCache),this.query.converter))})}docChanges(a={}){let b=!!a.includeMetadataChanges;if(b&&this._snapshot.excludesMetadataChanges)throw new c6(c5.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===b||(this._cachedChanges=function(a,b){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map(b=>{let d=new la(a._firestore,a._userDataWriter,b.doc.key,b.doc,new k8(a._snapshot.mutatedKeys.has(b.doc.key),a._snapshot.fromCache),a.query.converter);return b.doc,{type:"added",doc:d,oldIndex:-1,newIndex:c++}})}{let d=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(a=>b||3!==a.type).map(b=>{let c=new la(a._firestore,a._userDataWriter,b.doc.key,b.doc,new k8(a._snapshot.mutatedKeys.has(b.doc.key),a._snapshot.fromCache),a.query.converter),e=-1,f=-1;return 0!==b.type&&(e=d.indexOf(b.doc.key),d=d.delete(b.doc.key)),1!==b.type&&(f=(d=d.add(b.doc)).indexOf(b.doc.key)),{type:lc(b.type),doc:c,oldIndex:e,newIndex:f}})}}(this,b),this._cachedChangesIncludeMetadataChanges=b),this._cachedChanges}}function lc(a){switch(a){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return c4()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Reads the document referred to by this `DocumentReference`.
 *
 * Note: `getDoc()` attempts to provide up-to-date data when possible by waiting
 * for data from the server, but it may return cached data or fail if you are
 * offline and the server cannot be reached. To specify this behavior, invoke
 * {@link getDocFromCache} or {@link getDocFromServer}.
 *
 * @param reference - The reference of the document to fetch.
 * @returns A Promise resolved with a `DocumentSnapshot` containing the
 * current document contents.
 */ function ld(a){a=jZ(a,j1);let b=jZ(a.firestore,kj);return(function a(b,c,d={}){let e=new c7;return b.asyncQueue.enqueueAndForget(async()=>(function(a,b,c,d,e){let f=new j8({next:f=>{b.enqueueAndForget(()=>jc(a,g));let h=f.docs.has(c);!h&&f.fromCache?e.reject(new c6(c5.UNAVAILABLE,"Failed to get document because the client is offline.")):h&&f.fromCache&&d&&"server"===d.source?e.reject(new c6(c5.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):e.resolve(f)},error:a=>e.reject(a)}),g=new jg(eZ(c.path),f,{includeMetadataChanges:!0,Nu:!0});return jb(a,g)})(await kh(b),b.asyncQueue,c,d,e)),e.promise})(kl(b),a._key).then(c=>lm(b,a,c))}class le extends k6{constructor(a){super(),this.firestore=a}convertBytes(a){return new kn(a)}convertReference(a){let b=this.convertDocumentKey(a,this.firestore._databaseId);return new j1(this.firestore,null,b)}}function lf(a){a=jZ(a,j2);let b=jZ(a.firestore,kj),c=kl(b),d=new le(b);return kV(a._query),(function a(b,c,d={}){let e=new c7;return b.asyncQueue.enqueueAndForget(async()=>(function(a,b,c,d,e){let f=new j8({next:c=>{b.enqueueAndForget(()=>jc(a,g)),c.fromCache&&"server"===d.source?e.reject(new c6(c5.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):e.resolve(c)},error:a=>e.reject(a)}),g=new jg(c,f,{includeMetadataChanges:!0,Nu:!0});return jb(a,g)})(await kh(b),b.asyncQueue,c,d,e)),e.promise})(c,a._query).then(c=>new lb(b,d,a,c))}function lg(a,b,c){a=jZ(a,j1);let d=jZ(a.firestore,kj),e=k7(a.converter,b,c);return ll(d,[kz(ky(d),"setDoc",a._key,e,null!==a.converter,c).toMutation(a._key,ft.none())])}function lh(a,b,c,...d){a=jZ(a,j1);let e=jZ(a.firestore,kj),f=ky(e),g;return g="string"==typeof(b=(0,p.m9)(b))||b instanceof ko?kH(f,"updateDoc",a._key,b,c,d):kG(f,"updateDoc",a._key,b),ll(e,[g.toMutation(a._key,ft.exists(!0))])}function li(a){return ll(jZ(a.firestore,kj),[new fG(a._key,ft.none())])}function lj(a,b){let c=jZ(a.firestore,kj),d=j5(a),e=k7(a.converter,b);return ll(c,[kz(ky(a.firestore),"addDoc",d._key,e,null!==a.converter,{}).toMutation(d._key,ft.exists(!1))]).then(()=>d)}function lk(a,...b){var c,d,e;a=(0,p.m9)(a);let f={includeMetadataChanges:!1},g=0;"object"!=typeof b[g]||ki(b[g])||(f=b[g],g++);let h={includeMetadataChanges:f.includeMetadataChanges};if(ki(b[g])){let i=b[g];b[g]=null===(c=i.next)|| void 0===c?void 0:c.bind(i),b[g+1]=null===(d=i.error)|| void 0===d?void 0:d.bind(i),b[g+2]=null===(e=i.complete)|| void 0===e?void 0:e.bind(i)}let j,k,l;if(a instanceof j1)k=jZ(a.firestore,kj),l=eZ(a._key.path),j={next:c=>{b[g]&&b[g](lm(k,a,c))},error:b[g+1],complete:b[g+2]};else{let m=jZ(a,j2);k=jZ(m.firestore,kj),l=m._query;let n=new le(k);j={next:a=>{b[g]&&b[g](new lb(k,n,m,a))},error:b[g+1],complete:b[g+2]},kV(a._query)}return function(a,b,c,d){let e=new j8(d),f=new jg(b,e,c);return a.asyncQueue.enqueueAndForget(async()=>jb(await kh(a),f)),()=>{e.bc(),a.asyncQueue.enqueueAndForget(async()=>jc(await kh(a),f))}}(kl(k),l,h,j)}function ll(a,b){return function(a,b){let c=new c7;return a.asyncQueue.enqueueAndForget(async()=>{var d;return js(await (d=a,kg(d).then(a=>a.syncEngine)),b,c)}),c.promise}(kl(a),b)}function lm(a,b,c){let d=c.docs.get(b._key),e=new le(a);return new k9(a,e,b._key,d,new k8(c.hasPendingWrites,c.fromCache),b.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Calculates the number of documents in the result set of the given query,
 * without actually downloading the documents.
 *
 * Using this function to count the documents is efficient because only the
 * final count, not the documents' data, is downloaded. This function can even
 * count the documents if the result set would be prohibitively large to
 * download entirely (e.g. thousands of documents).
 *
 * The result received from the server is presented, unaltered, without
 * considering any local state. That is, documents in the local cache are not
 * taken into consideration, neither are local modifications not yet
 * synchronized with the server. Previously-downloaded results, if any, are not
 * used: every request using this source necessarily involves a round trip to
 * the server.
 *
 * @param query - The query whose result set size to calculate.
 * @returns A Promise that will be resolved with the count; the count can be
 * retrieved from `snapshot.data().count`, where `snapshot` is the
 * `AggregateQuerySnapshot` to which the returned Promise resolves.
 */ function ln(a){let b=jZ(a.firestore,kj);return function(a,b,c){let d=new c7;return a.asyncQueue.enqueueAndForget(async()=>{try{var e,f;if(iM(await (e=a,kg(e).then(a=>a.remoteStore)))){let g=await (f=a,kg(f).then(a=>a.datastore)),h=new ka(b,g,c).run();d.resolve(h)}else d.reject(new c6(c5.UNAVAILABLE,"Failed to get count result because the client is offline."))}catch(i){d.reject(i)}}),d.promise}(kl(b),a,new le(b))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A write batch, used to perform multiple writes as a single atomic unit.
 *
 * A `WriteBatch` object can be acquired by calling {@link writeBatch}. It
 * provides methods for adding writes to the write batch. None of the writes
 * will be committed (or visible locally) until {@link WriteBatch.commit} is
 * called.
 */ class lo{constructor(a,b){this._firestore=a,this._commitHandler=b,this._mutations=[],this._committed=!1,this._dataReader=ky(a)}set(a,b,c){this._verifyNotCommitted();let d=lp(a,this._firestore),e=k7(d.converter,b,c),f=kz(this._dataReader,"WriteBatch.set",d._key,e,null!==d.converter,c);return this._mutations.push(f.toMutation(d._key,ft.none())),this}update(a,b,c,...d){this._verifyNotCommitted();let e=lp(a,this._firestore),f;return f="string"==typeof(b=(0,p.m9)(b))||b instanceof ko?kH(this._dataReader,"WriteBatch.update",e._key,b,c,d):kG(this._dataReader,"WriteBatch.update",e._key,b),this._mutations.push(f.toMutation(e._key,ft.exists(!0))),this}delete(a){this._verifyNotCommitted();let b=lp(a,this._firestore);return this._mutations=this._mutations.concat(new fG(b._key,ft.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new c6(c5.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function lp(a,b){if((a=(0,p.m9)(a)).firestore!==b)throw new c6(c5.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return a}function lq(){return new kC("serverTimestamp")}function lr(...a){return new kD("arrayUnion",a)}function ls(...a){return new kE("arrayRemove",a)}function lt(a){return new kF("increment",a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Creates a write batch, used for performing multiple writes as a single
 * atomic operation. The maximum number of writes allowed in a single {@link WriteBatch}
 * is 500.
 *
 * Unlike transactions, write batches are persisted offline and therefore are
 * preferable when you don't need to condition your writes on read data.
 *
 * @returns A {@link WriteBatch} that can be used to atomically execute multiple
 * writes.
 */ function lu(a){return kl(a=jZ(a,kj)),new lo(a,b=>ll(a,b))}!function(a,b=!0){var c;cZ=m.Jn,(0,m.Xd)(new n.wA("firestore",(a,{instanceIdentifier:c,options:d})=>{let e=a.getProvider("app").getImmediate(),f=new kj(new db(a.getProvider("auth-internal")),new df(a.getProvider("app-check-internal")),function(a,b){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new c6(c5.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ea(a.options.projectId,b)}(e,c),e);return d=Object.assign({useFetchStreams:b},d),f._setSettings(d),f},"PUBLIC").setMultipleInstances(!0)),(0,m.KN)(cX,"3.7.2",void 0),(0,m.KN)(cX,"3.7.2","esm2017")}()},1153:function(a,b,c){"use strict";c.d(b,{Jt:function(){return az},cF:function(){return aB},iH:function(){return aA},B0:function(){return ay}});var d,e,f=c(5816),g=c(4444),h=c(8463);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview Constants used in the Firebase Storage library.
 */ /**
 * Domain name for firebase storage.
 */ let i="firebasestorage.googleapis.com",j="storageBucket";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An error returned by the Firebase Storage SDK.
 * @public
 */ class k extends g.ZR{constructor(a,b,c=0){super(l(a),`Firebase Storage: ${b} (${l(a)})`),this.status_=c,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,k.prototype)}get status(){return this.status_}set status(a){this.status_=a}_codeEquals(a){return l(a)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(a){this.customData.serverResponse=a,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function l(a){return"storage/"+a}function m(){return new k("unknown","An unknown error occurred, please check the error payload for server response.")}function n(){return new k("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function o(){return new k("canceled","User canceled the upload/download.")}function p(){return new k("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function q(a){return new k("invalid-argument",a)}function r(){return new k("app-deleted","The Firebase app was deleted.")}function s(a,b){return new k("invalid-format","String does not match format '"+a+"': "+b)}function t(a){throw new k("internal-error","Internal error: "+a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Firebase Storage location data.
 *
 * @internal
 */ class u{constructor(a,b){this.bucket=a,this.path_=b}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){let a=encodeURIComponent;return"/b/"+a(this.bucket)+"/o/"+a(this.path)}bucketOnlyServerUrl(){let a=encodeURIComponent;return"/b/"+a(this.bucket)+"/o"}static makeFromBucketSpec(a,b){var c;let d;try{d=u.makeFromUrl(a,b)}catch(e){return new u(a,"")}if(""===d.path)return d;throw c=a,new k("invalid-default-bucket","Invalid default bucket '"+c+"'.")}static makeFromUrl(a,b){let c=null,d="([A-Za-z0-9.\\-_]+)",e=RegExp("^gs://"+d+"(/(.*))?$","i");function f(a){a.path_=decodeURIComponent(a.path)}let g=b.replace(/[.]/g,"\\."),h=RegExp(`^https?://${g}/v[A-Za-z0-9_]+/b/${d}/o(/([^?#]*).*)?$`,"i"),j=RegExp(`^https?://${b===i?"(?:storage.googleapis.com|storage.cloud.google.com)":b}/${d}/([^?#]*)`,"i"),l=[{regex:e,indices:{bucket:1,path:3},postModify:function(a){"/"===a.path.charAt(a.path.length-1)&&(a.path_=a.path_.slice(0,-1))}},{regex:h,indices:{bucket:1,path:3},postModify:f},{regex:j,indices:{bucket:1,path:2},postModify:f}];for(let m=0;m<l.length;m++){let n=l[m],o=n.regex.exec(a);if(o){let p=o[n.indices.bucket],q=o[n.indices.path];q||(q=""),c=new u(p,q),n.postModify(c);break}}if(null==c){var r;throw r=a,new k("invalid-url","Invalid URL '"+r+"'.")}return c}}class v{constructor(a){this.promise_=Promise.reject(a)}getPromise(){return this.promise_}cancel(a=!1){}}function w(a){return"string"==typeof a||a instanceof String}function x(a){return y()&&a instanceof Blob}function y(){return"undefined"!=typeof Blob&&!(0,g.UG)()}function z(a,b,c,d){if(d<b)throw q(`Invalid value for '${a}'. Expected ${b} or greater.`);if(d>c)throw q(`Invalid value for '${a}'. Expected ${c} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function A(a,b,c){let d=b;return null==c&&(d=`https://${b}`),`${c}://${d}/v0${a}`}function B(a){let b=encodeURIComponent,c="?";for(let d in a)if(a.hasOwnProperty(d)){let e=b(d)+"="+b(a[d]);c=c+e+"&"}return c.slice(0,-1)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Checks the status code to see if the action should be retried.
 *
 * @param status Current HTTP status code returned by server.
 * @param additionalRetryCodes additional retry codes to check against
 */ function C(a,b){let c=-1!==[408,429].indexOf(a),d=-1!==b.indexOf(a);return a>=500&&a<600||c||d}(d=e||(e={}))[d.NO_ERROR=0]="NO_ERROR",d[d.NETWORK_ERROR=1]="NETWORK_ERROR",d[d.ABORT=2]="ABORT";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Handles network logic for all Storage Requests, including error reporting and
 * retries with backoff.
 *
 * @param I - the type of the backend's network response.
 * @param - O the output type used by the rest of the SDK. The conversion
 * happens in the specified `callback_`.
 */ class D{constructor(a,b,c,d,e,f,g,h,i,j,k,l=!0){this.url_=a,this.method_=b,this.headers_=c,this.body_=d,this.successCodes_=e,this.additionalRetryCodes_=f,this.callback_=g,this.errorCallback_=h,this.timeout_=i,this.progressCallback_=j,this.connectionFactory_=k,this.retry=l,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((a,b)=>{this.resolve_=a,this.reject_=b,this.start_()})}start_(){let a=(a,b)=>{if(b){a(!1,new E(!1,null,!0));return}let c=this.connectionFactory_();this.pendingConnection_=c;let d=a=>{let b=a.loaded,c=a.lengthComputable?a.total:-1;null!==this.progressCallback_&&this.progressCallback_(b,c)};null!==this.progressCallback_&&c.addUploadProgressListener(d),c.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&c.removeUploadProgressListener(d),this.pendingConnection_=null;let b=c.getErrorCode()===e.NO_ERROR,f=c.getStatus();if((!b||C(f,this.additionalRetryCodes_))&&this.retry){let g=c.getErrorCode()===e.ABORT;a(!1,new E(!1,null,g));return}let h=-1!==this.successCodes_.indexOf(f);a(!0,new E(h,c))})},b=(a,b)=>{let c=this.resolve_,d=this.reject_,e=b.connection;if(b.wasSuccessCode)try{var f;let g=this.callback_(e,e.getResponse());(f=g,void 0!==f)?c(g):c()}catch(h){d(h)}else if(null!==e){let i=m();i.serverResponse=e.getErrorText(),d(this.errorCallback_?this.errorCallback_(e,i):i)}else if(b.canceled){let j=this.appDelete_?r():o();d(j)}else{let k=n();d(k)}};this.canceled_?b(!1,new E(!1,null,!0)):this.backoffId_=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Accepts a callback for an action to perform (`doRequest`),
 * and then a callback for when the backoff has completed (`backoffCompleteCb`).
 * The callback sent to start requires an argument to call (`onRequestComplete`).
 * When `start` calls `doRequest`, it passes a callback for when the request has
 * completed, `onRequestComplete`. Based on this, the backoff continues, with
 * another call to `doRequest` and the above loop continues until the timeout
 * is hit, or a successful response occurs.
 * @description
 * @param doRequest Callback to perform request
 * @param backoffCompleteCb Callback to call when backoff has been completed
 */ function(a,b,c){let d=1,e=null,f=null,g=!1,h=0;function i(){return 2===h}let j=!1;function k(...a){j||(j=!0,b.apply(null,a))}function l(b){e=setTimeout(()=>{e=null,a(n,i())},b)}function m(){f&&clearTimeout(f)}function n(a,...b){if(j){m();return}if(a){m(),k.call(null,a,...b);return}let c=i()||g;if(c){m(),k.call(null,a,...b);return}d<64&&(d*=2);let e;1===h?(h=2,e=0):e=(d+Math.random())*1e3,l(e)}let o=!1;function p(a){if(!o)o=!0,m(),!j&&(null!==e?(a||(h=2),clearTimeout(e),l(0)):a||(h=1))}return l(0),f=setTimeout(()=>{g=!0,p(!0)},c),p}(a,b,this.timeout_)}getPromise(){return this.promise_}cancel(a){if(this.canceled_=!0,this.appDelete_=a||!1,null!==this.backoffId_){var b;(b=this.backoffId_)(!1)}null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class E{constructor(a,b,c){this.wasSuccessCode=a,this.connection=b,this.canceled=!!c}}function F(...a){let b="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==b){let c=new b;for(let d=0;d<a.length;d++)c.append(a[d]);return c.getBlob()}if(y())return new Blob(a);throw new k("unsupported-environment","This browser doesn't seem to support creating Blobs")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An enumeration of the possible string formats for upload.
 * @public
 */ let G={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class H{constructor(a,b){this.data=a,this.contentType=b||null}}function I(a){let b=[];for(let c=0;c<a.length;c++){let d=a.charCodeAt(c);if(d<=127)b.push(d);else if(d<=2047)b.push(192|d>>6,128|63&d);else if((64512&d)==55296){let e=c<a.length-1&&(64512&a.charCodeAt(c+1))==56320;if(e){let f=d,g=a.charCodeAt(++c);d=65536|(1023&f)<<10|1023&g,b.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|63&d)}else b.push(239,191,189)}else(64512&d)==56320?b.push(239,191,189):b.push(224|d>>12,128|d>>6&63,128|63&d)}return new Uint8Array(b)}function J(a,b){switch(a){case G.BASE64:{let c=-1!==b.indexOf("-"),d=-1!==b.indexOf("_");if(c||d){let e=c?"-":"_";throw s(a,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case G.BASE64URL:{let f=-1!==b.indexOf("+"),g=-1!==b.indexOf("/");if(f||g){let h=f?"+":"/";throw s(a,"Invalid character '"+h+"' found: is it base64 encoded?")}b=b.replace(/-/g,"+").replace(/_/g,"/")}}let i;try{var j;i=(j=b,atob(j))}catch(k){throw s(a,"Invalid character found")}let l=new Uint8Array(i.length);for(let m=0;m<i.length;m++)l[m]=i.charCodeAt(m);return l}class K{constructor(a){this.base64=!1,this.contentType=null;let b=a.match(/^data:([^,]+)?,/);if(null===b)throw s(G.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");let c=b[1]||null;null!=c&&(this.base64=function(a,b){let c=a.length>=b.length;return!!c&&a.substring(a.length-b.length)===b}(c,";base64"),this.contentType=this.base64?c.substring(0,c.length-7):c),this.rest=a.substring(a.indexOf(",")+1)}}function L(a){let b=new K(a);return b.base64?J(G.BASE64,b.rest):function(a){let b;try{b=decodeURIComponent(a)}catch(c){throw s(G.DATA_URL,"Malformed data URL.")}return I(b)}(b.rest)}function M(a){let b=new K(a);return b.contentType}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @param opt_elideCopy - If true, doesn't copy mutable input data
 *     (e.g. Uint8Arrays). Pass true only if you know the objects will not be
 *     modified after this blob's construction.
 *
 * @internal
 */ class N{constructor(a,b){let c=0,d="";x(a)?(this.data_=a,c=a.size,d=a.type):a instanceof ArrayBuffer?(b?this.data_=new Uint8Array(a):(this.data_=new Uint8Array(a.byteLength),this.data_.set(new Uint8Array(a))),c=this.data_.length):a instanceof Uint8Array&&(b?this.data_=a:(this.data_=new Uint8Array(a.length),this.data_.set(a)),c=a.length),this.size_=c,this.type_=d}size(){return this.size_}type(){return this.type_}slice(a,b){if(x(this.data_)){var c,d,e;let f=this.data_,g=(c=f,d=a,e=b,c.webkitSlice?c.webkitSlice(d,e):c.mozSlice?c.mozSlice(d,e):c.slice?c.slice(d,e):null);return null===g?null:new N(g)}{let h=new Uint8Array(this.data_.buffer,a,b-a);return new N(h,!0)}}static getBlob(...a){if(y()){let b=a.map(a=>a instanceof N?a.data_:a);return new N(F.apply(null,b))}{let c=a.map(a=>w(a)?function a(b,c){switch(b){case G.RAW:return new H(I(c));case G.BASE64:case G.BASE64URL:return new H(J(b,c));case G.DATA_URL:return new H(L(c),M(c))}throw m()}(G.RAW,a).data:a.data_),d=0;c.forEach(a=>{d+=a.byteLength});let e=new Uint8Array(d),f=0;return c.forEach(a=>{for(let b=0;b<a.length;b++)e[f++]=a[b]}),new N(e,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns the Object resulting from parsing the given JSON, or null if the
 * given string does not represent a JSON object.
 */ function O(a){var b;let c;try{c=JSON.parse(a)}catch(d){return null}return"object"!=typeof(b=c)||Array.isArray(b)?null:c}function P(a){let b=a.lastIndexOf("/",a.length-2);return -1===b?a:a.slice(b+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Q(a,b){return b}class R{constructor(a,b,c,d){this.server=a,this.local=b||a,this.writable=!!c,this.xform=d||Q}}let S=null;function T(){if(S)return S;let a=[];a.push(new R("bucket")),a.push(new R("generation")),a.push(new R("metageneration")),a.push(new R("name","fullPath",!0));let b=new R("name");b.xform=function(a,b){var c;return!w(c=b)||c.length<2?c:P(c)},a.push(b);let c=new R("size");return c.xform=function(a,b){return void 0!==b?Number(b):b},a.push(c),a.push(new R("timeCreated")),a.push(new R("updated")),a.push(new R("md5Hash",null,!0)),a.push(new R("cacheControl",null,!0)),a.push(new R("contentDisposition",null,!0)),a.push(new R("contentEncoding",null,!0)),a.push(new R("contentLanguage",null,!0)),a.push(new R("contentType",null,!0)),a.push(new R("metadata","customMetadata",!0)),S=a}function U(a,b,c){let d=O(b);return null===d?null:function(a,b,c){var d,e;let f={};f.type="file";let g=c.length;for(let h=0;h<g;h++){let i=c[h];f[i.local]=i.xform(f,b[i.server])}return d=f,e=a,Object.defineProperty(d,"ref",{get:function(){let a=d.bucket,b=d.fullPath,c=new u(a,b);return e._makeStorageReference(c)}}),f}(a,d,c)}function V(a,b){let c={},d=b.length;for(let e=0;e<d;e++){let f=b[e];f.writable&&(c[f.server]=a[f.local])}return JSON.stringify(c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let W="prefixes",X="items";class Y{constructor(a,b,c,d){this.url=a,this.method=b,this.handler=c,this.timeout=d,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Throws the UNKNOWN StorageError if cndn is false.
 */ function Z(a){if(!a)throw m()}function $(a,b){return function(c,d){let e=U(a,d,b);return Z(null!==e),e}}function _(a){return function(b,c){var d,e;let f;return(f=401===b.getStatus()?b.getErrorText().includes("Firebase App Check token is invalid")?new k("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new k("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===b.getStatus()?(d=a.bucket,new k("quota-exceeded","Quota for bucket '"+d+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===b.getStatus()?(e=a.path,new k("unauthorized","User does not have permission to access '"+e+"'.")):c).status=b.getStatus(),f.serverResponse=c.serverResponse,f}}function aa(a){let b=_(a);return function(c,d){let e=b(c,d);if(404===c.getStatus()){var f;e=(f=a.path,new k("object-not-found","Object '"+f+"' does not exist."))}return e.serverResponse=d.serverResponse,e}}function ab(a,b,c){let d=Object.assign({},c);if(d.fullPath=a.path,d.size=b.size(),!d.contentType){var e,f;d.contentType=(e=null,f=b,e&&e.contentType||f&&f.type()||"application/octet-stream")}return d}function ac(a,b,c,d,e){let f=b.bucketOnlyServerUrl(),g={"X-Goog-Upload-Protocol":"multipart"},h=function(){let a="";for(let b=0;b<2;b++)a+=Math.random().toString().slice(2);return a}();g["Content-Type"]="multipart/related; boundary="+h;let i=ab(b,d,e),j=V(i,c),k="--"+h+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+j+"\r\n--"+h+"\r\nContent-Type: "+i.contentType+"\r\n\r\n",l=N.getBlob(k,d,"\r\n--"+h+"--");if(null===l)throw p();let m={name:i.fullPath},n=A(f,a.host,a._protocol),o=a.maxUploadRetryTime,q=new Y(n,"POST",$(a,c),o);return q.urlParams=m,q.headers=g,q.body=l.uploadData(),q.errorHandler=_(b),q}class ad{constructor(a,b,c,d){this.current=a,this.total=b,this.finalized=!!c,this.metadata=d||null}}function ae(a,b){let c=null;try{c=a.getResponseHeader("X-Goog-Upload-Status")}catch(d){Z(!1)}return Z(!!c&& -1!==(b||["active"]).indexOf(c)),c}let af={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ag(a){switch(a){case"running":case"pausing":case"canceling":return af.RUNNING;case"paused":return af.PAUSED;case"success":return af.SUCCESS;case"canceled":return af.CANCELED;default:return af.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ah{constructor(a,b,c){var d;let e="function"==typeof(d=a)||null!=b||null!=c;if(e)this.next=a,this.error=null!=b?b:void 0,this.complete=null!=c?c:void 0;else{let f=a;this.next=f.next,this.error=f.error,this.complete=f.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns a function that invokes f with its arguments asynchronously as a
 * microtask, i.e. as soon as possible after the current script returns back
 * into browser code.
 */ // eslint-disable-next-line @typescript-eslint/ban-types
function ai(a){return(...b)=>{Promise.resolve().then(()=>a(...b))}}class aj{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=e.NO_ERROR,this.sendPromise_=new Promise(a=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=e.ABORT,a()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=e.NETWORK_ERROR,a()}),this.xhr_.addEventListener("load",()=>{a()})})}send(a,b,c,d){if(this.sent_)throw t("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(b,a,!0),void 0!==d)for(let e in d)d.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,d[e].toString());return void 0!==c?this.xhr_.send(c):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw t("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw t("cannot .getStatus() before sending");try{return this.xhr_.status}catch(a){return -1}}getResponse(){if(!this.sent_)throw t("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw t("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(a){return this.xhr_.getResponseHeader(a)}addUploadProgressListener(a){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",a)}removeUploadProgressListener(a){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",a)}}class ak extends aj{initXhr(){this.xhr_.responseType="text"}}function al(){return new ak}class am extends null{initXhr(){this.xhr_.responseType="arraybuffer"}}class an extends null{initXhr(){this.xhr_.responseType="blob"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a blob being uploaded. Can be used to pause/resume/cancel the
 * upload and manage callbacks for various events.
 * @internal
 */ class ao{constructor(a,b,c=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=a,this._blob=b,this._metadata=c,this._mappings=T(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=a=>{if(this._request=void 0,this._chunkMultiplier=1,a._codeEquals("canceled"))this._needToFetchStatus=!0,this.completeTransitions_();else{let b=this.isExponentialBackoffExpired();if(C(a.status,[])){if(b)a=n();else{this.sleepTime=Math.max(2*this.sleepTime,1e3),this._needToFetchStatus=!0,this.completeTransitions_();return}}this._error=a,this._transition("error")}},this._metadataErrorHandler=a=>{this._request=void 0,a._codeEquals("canceled")?this.completeTransitions_():(this._error=a,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((a,b)=>{this._resolve=a,this._reject=b,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){let a=this._transferred;return b=>this._updateProgress(a+b)}_shouldDoResumable(a){return a.size()>262144}_start(){"running"===this._state&& void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(a){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([b,c])=>{switch(this._state){case"running":a(b,c);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}})}_createResumable(){this._resolveToken((a,b)=>{let c=function(a,b,c,d,e){let f=b.bucketOnlyServerUrl(),g=ab(b,d,e),h={name:g.fullPath},i=A(f,a.host,a._protocol),j={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${d.size()}`,"X-Goog-Upload-Header-Content-Type":g.contentType,"Content-Type":"application/json; charset=utf-8"},k=V(g,c),l=a.maxUploadRetryTime,m=new Y(i,"POST",function(a){ae(a);let b;try{b=a.getResponseHeader("X-Goog-Upload-URL")}catch(c){Z(!1)}return Z(w(b)),b},l);return m.urlParams=h,m.headers=j,m.body=k,m.errorHandler=_(b),m}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),d=this._ref.storage._makeRequest(c,al,a,b);this._request=d,d.getPromise().then(a=>{this._request=void 0,this._uploadUrl=a,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){let a=this._uploadUrl;this._resolveToken((b,c)=>{let d=function(a,b,c,d){let e=a.maxUploadRetryTime,f=new Y(c,"POST",function(a){let b=ae(a,["active","final"]),c=null;try{c=a.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){Z(!1)}c||Z(!1);let f=Number(c);return Z(!isNaN(f)),new ad(f,d.size(),"final"===b)},e);return f.headers={"X-Goog-Upload-Command":"query"},f.errorHandler=_(b),f}(this._ref.storage,this._ref._location,a,this._blob),e=this._ref.storage._makeRequest(d,al,b,c);this._request=e,e.getPromise().then(a=>{this._request=void 0,this._updateProgress(a.current),this._needToFetchStatus=!1,a.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){let a=262144*this._chunkMultiplier,b=new ad(this._transferred,this._blob.size()),c=this._uploadUrl;this._resolveToken((d,e)=>{let f;try{f=function(a,b,c,d,e,f,g,h){let i=new ad(0,0);if(g?(i.current=g.current,i.total=g.total):(i.current=0,i.total=d.size()),d.size()!==i.total)throw new k("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");let j=i.total-i.current,l=j;e>0&&(l=Math.min(l,e));let m=i.current,n=m+l,o="";o=0===l?"finalize":j===l?"upload, finalize":"upload";let q={"X-Goog-Upload-Command":o,"X-Goog-Upload-Offset":`${i.current}`},r=d.slice(m,n);if(null===r)throw p();let s=b.maxUploadRetryTime,t=new Y(c,"POST",function(a,c){let e=ae(a,["active","final"]),g=i.current+l,h=d.size(),j;return j="final"===e?$(b,f)(a,c):null,new ad(g,h,"final"===e,j)},s);return t.headers=q,t.body=r.uploadData(),t.progressCallback=h||null,t.errorHandler=_(a),t}(this._ref._location,this._ref.storage,c,this._blob,a,this._mappings,b,this._makeProgressCallback())}catch(g){this._error=g,this._transition("error");return}let h=this._ref.storage._makeRequest(f,al,d,e,!1);this._request=h,h.getPromise().then(a=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(a.current),a.finalized?(this._metadata=a.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){let a=262144*this._chunkMultiplier;2*a<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((a,b)=>{let c=function a(b,c,d){let e=c.fullServerUrl(),f=A(e,b.host,b._protocol),g=b.maxOperationRetryTime,h=new Y(f,"GET",$(b,d),g);return h.errorHandler=aa(c),h}(this._ref.storage,this._ref._location,this._mappings),d=this._ref.storage._makeRequest(c,al,a,b);this._request=d,d.getPromise().then(a=>{this._request=void 0,this._metadata=a,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((a,b)=>{let c=ac(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),d=this._ref.storage._makeRequest(c,al,a,b);this._request=d,d.getPromise().then(a=>{this._request=void 0,this._metadata=a,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(a){let b=this._transferred;this._transferred=a,this._transferred!==b&&this._notifyObservers()}_transition(a){if(this._state!==a)switch(a){case"canceling":case"pausing":this._state=a,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":let b="paused"===this._state;this._state=a,b&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=a,this._notifyObservers();break;case"canceled":this._error=o(),this._state=a,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){let a=ag(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:a,metadata:this._metadata,task:this,ref:this._ref}}on(a,b,c,d){let e=new ah(b||void 0,c||void 0,d||void 0);return this._addObserver(e),()=>{this._removeObserver(e)}}then(a,b){return this._promise.then(a,b)}catch(a){return this.then(null,a)}_addObserver(a){this._observers.push(a),this._notifyObserver(a)}_removeObserver(a){let b=this._observers.indexOf(a);-1!==b&&this._observers.splice(b,1)}_notifyObservers(){this._finishPromise();let a=this._observers.slice();a.forEach(a=>{this._notifyObserver(a)})}_finishPromise(){if(void 0!==this._resolve){let a=!0;switch(ag(this._state)){case af.SUCCESS:ai(this._resolve.bind(null,this.snapshot))();break;case af.CANCELED:case af.ERROR:let b=this._reject;ai(b.bind(null,this._error))();break;default:a=!1}a&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(a){let b=ag(this._state);switch(b){case af.RUNNING:case af.PAUSED:a.next&&ai(a.next.bind(a,this.snapshot))();break;case af.SUCCESS:a.complete&&ai(a.complete.bind(a))();break;case af.CANCELED:case af.ERROR:default:a.error&&ai(a.error.bind(a,this._error))()}}resume(){let a="paused"===this._state||"pausing"===this._state;return a&&this._transition("running"),a}pause(){let a="running"===this._state;return a&&this._transition("pausing"),a}cancel(){let a="running"===this._state||"pausing"===this._state;return a&&this._transition("canceling"),a}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provides methods to interact with a bucket in the Firebase Storage service.
 * @internal
 * @param _location - An fbs.location, or the URL at
 *     which to base this object, in one of the following forms:
 *         gs://<bucket>/<object-path>
 *         http[s]://firebasestorage.googleapis.com/
 *                     <api-version>/b/<bucket>/o/<object-path>
 *     Any query or fragment strings will be ignored in the http[s]
 *     format. If no value is passed, the storage object will use a URL based on
 *     the project ID of the base firebase.App instance.
 */ class ap{constructor(a,b){this._service=a,b instanceof u?this._location=b:this._location=u.makeFromUrl(b,a.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(a,b){return new ap(a,b)}get root(){let a=new u(this._location.bucket,"");return this._newRef(this._service,a)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return P(this._location.path)}get storage(){return this._service}get parent(){let a=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview Contains helper methods for manipulating paths.
 */ /**
 * @return Null if the path is already at the root.
 */ function(a){if(0===a.length)return null;let b=a.lastIndexOf("/");if(-1===b)return"";let c=a.slice(0,b);return c}(this._location.path);if(null===a)return null;let b=new u(this._location.bucket,a);return new ap(this._service,b)}_throwIfRoot(a){if(""===this._location.path){var b;throw b=a,new k("invalid-root-operation","The operation '"+b+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}}}async function aq(a,b,c){let d=await ar(a,{pageToken:c});b.prefixes.push(...d.prefixes),b.items.push(...d.items),null!=d.nextPageToken&&await aq(a,b,d.nextPageToken)}function ar(a,b){null!=b&&"number"==typeof b.maxResults&&z("options.maxResults",1,1e3,b.maxResults);let c=b||{},d=function(a,b,c,d,e){var f,g;let h={};b.isRoot?h.prefix="":h.prefix=b.path+"/",c&&c.length>0&&(h.delimiter=c),d&&(h.pageToken=d),e&&(h.maxResults=e);let i=b.bucketOnlyServerUrl(),j=A(i,a.host,a._protocol),k=a.maxOperationRetryTime,l=new Y(j,"GET",(f=a,g=b.bucket,function(a,b){let c=function(a,b,c){let d=O(c);return null===d?null:function(a,b,c){let d={prefixes:[],items:[],nextPageToken:c.nextPageToken};if(c[W])for(let e of c[W]){let f=e.replace(/\/$/,""),g=a._makeStorageReference(new u(b,f));d.prefixes.push(g)}if(c[X])for(let h of c[X]){let i=a._makeStorageReference(new u(b,h.name));d.items.push(i)}return d}(a,b,d)}(f,g,b);return Z(null!==c),c}),k);return l.urlParams=h,l.errorHandler=_(b),l}(a.storage,a._location,"/",c.pageToken,c.maxResults);return a.storage.makeRequestWithTokens(d,al)}function as(a,b){if(a instanceof au){let c=a;if(null==c._bucket)throw new k("no-default-bucket","No default bucket found. Did you set the '"+j+"' property when initializing the app?");let d=new ap(c,c._bucket);return null!=b?as(d,b):d}return void 0!==b?function a(b,c){let d=function(a,b){let c=b.split("/").filter(a=>a.length>0).join("/");return 0===a.length?c:a+"/"+c}(b._location.path,c),e=new u(b._location.bucket,d);return new ap(b.storage,e)}(a,b):a}function at(a,b){let c=null==b?void 0:b[j];return null==c?null:u.makeFromBucketSpec(c,a)}class au{constructor(a,b,c,d,e){this.app=a,this._authProvider=b,this._appCheckProvider=c,this._url=d,this._firebaseVersion=e,this._bucket=null,this._host=i,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=d?this._bucket=u.makeFromBucketSpec(d,this._host):this._bucket=at(this._host,this.app.options)}get host(){return this._host}set host(a){this._host=a,null!=this._url?this._bucket=u.makeFromBucketSpec(this._url,a):this._bucket=at(a,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(a){z("time",0,Number.POSITIVE_INFINITY,a),this._maxUploadRetryTime=a}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(a){z("time",0,Number.POSITIVE_INFINITY,a),this._maxOperationRetryTime=a}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let a=this._authProvider.getImmediate({optional:!0});if(a){let b=await a.getToken();if(null!==b)return b.accessToken}return null}async _getAppCheckToken(){let a=this._appCheckProvider.getImmediate({optional:!0});if(a){let b=await a.getToken();return b.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(a=>a.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(a){return new ap(this,a)}_makeRequest(a,b,c,d,e=!0){if(this._deleted)return new v(r());{let f=function(a,b,c,d,e,f,g=!0){var h,i,j,k,l,m,n,o;let p=B(a.urlParams),q=a.url+p,r=Object.assign({},a.headers);return h=r,(i=b)&&(h["X-Firebase-GMPID"]=i),j=r,null!==(k=c)&&k.length>0&&(j.Authorization="Firebase "+k),l=r,m=f,l["X-Firebase-Storage-Version"]="webjs/"+(null!=m?m:"AppManager"),n=r,null!==(o=d)&&(n["X-Firebase-AppCheck"]=o),new D(q,a.method,r,a.body,a.successCodes,a.additionalRetryCodes,a.handler,a.errorHandler,a.timeout,a.progressCallback,e,g)}(a,this._appId,c,d,b,this._firebaseVersion,e);return this._requests.add(f),f.getPromise().then(()=>this._requests.delete(f),()=>this._requests.delete(f)),f}}async makeRequestWithTokens(a,b){let[c,d]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(a,b,c,d).getPromise()}}let av="@firebase/storage",aw="0.9.13",ax="storage";function ay(a,b,c){var d,e,f;return d=a=(0,g.m9)(a),e=b,f=c,d._throwIfRoot("uploadBytesResumable"),new ao(d,new N(e),f)}function az(a){return function(a){a._throwIfRoot("getDownloadURL");let b=function(a,b,c){var d,e;let f=b.fullServerUrl(),g=A(f,a.host,a._protocol),h=a.maxOperationRetryTime,i=new Y(g,"GET",(d=a,e=c,function(a,b){let c=U(d,b,e);return Z(null!==c),function(a,b,c,d){let e=O(b);if(null===e||!w(e.downloadTokens))return null;let f=e.downloadTokens;if(0===f.length)return null;let g=encodeURIComponent,h=f.split(","),i=h.map(b=>{let e=a.bucket,f=a.fullPath,h="/b/"+g(e)+"/o/"+g(f),i=A(h,c,d),j=B({alt:"media",token:b});return i+j});return i[0]}(c,b,d.host,d._protocol)}),h);return i.errorHandler=aa(b),i}(a.storage,a._location,T());return a.storage.makeRequestWithTokens(b,al).then(a=>{if(null===a)throw new k("no-download-url","The given file does not have any download URLs.");return a})}(a=(0,g.m9)(a))}function aA(a,b){return function(a,b){var c,d,e;if(!(b&&(c=b,/^[A-Za-z]+:\/\//.test(c))))return as(a,b);if(a instanceof au)return d=a,e=b,new ap(d,e);throw q("To use ref(service, url), the first argument must be a Storage instance.")}(a=(0,g.m9)(a),b)}function aB(a=(0,f.Mq)(),b){a=(0,g.m9)(a);let c=(0,f.qX)(a,ax),d=c.getImmediate({identifier:b}),e=(0,g.P0)("storage");return e&&aC(d,...e),d}function aC(a,b,c,d={}){!function(a,b,c,d={}){a.host=`${b}:${c}`,a._protocol="http";let{mockUserToken:e}=d;e&&(a._overrideAuthToken="string"==typeof e?e:(0,g.Sg)(e,a.app.options.projectId))}(a,b,c,d)}(0,f.Xd)(new h.wA(ax,function a(b,{instanceIdentifier:c}){let d=b.getProvider("app").getImmediate(),e=b.getProvider("auth-internal"),g=b.getProvider("app-check-internal");return new au(d,e,g,c,f.Jn)},"PUBLIC").setMultipleInstances(!0)),(0,f.KN)(av,aw,""),(0,f.KN)(av,aw,"esm2017")},3454:function(a,b,c){"use strict";var d,e;a.exports=(null==(d=c.g.process)?void 0:d.env)&&"object"==typeof(null==(e=c.g.process)?void 0:e.env)?c.g.process:c(7663)},6840:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return c(4036)}])},2108:function(a,b,c){"use strict";c.d(b,{HD:function(){return o},aC:function(){return p}});var d=c(7568),e=c(4051),f=c.n(e),g=c(5893),h=c(7294),i=c(8006),j=c(5321),k=c(2355),l=c(1940),m=c(5195),n=(0,h.createContext)(null);function o(a){var b,c=a.children,e=(0,h.useState)(null),o=e[0],p=e[1],q=(0,h.useState)(null),r=q[0],s=q[1],t=(0,h.useState)(null),u=t[0],v=t[1],w=(0,h.useState)(!0),x=w[0],y=w[1];(0,h.useEffect)(function(){var a,b=(a=(0,d.Z)(f().mark(function a(b){var c,d,e,g,h,i,k,n,o,q,r,s,t;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=b.uid,d=b.displayName,e=b.photoURL,a.next=3,(0,j.QT)((0,j.JU)(l.W$,c));case 3:if((g=a.sent).exists()){a.next=33;break}h=!1,i="";case 7:if(h){a.next=17;break}return k=null==d?void 0:d.replace(/\s/g,"").toLowerCase(),n=(0,m.X)(1,1e4),i="".concat(k).concat(n),a.next=13,(0,j.QT)((0,j.JU)(l.W$,i));case 13:(o=a.sent).exists()||(h=!0),a.next=7;break;case 17:return q={id:c,bio:null,name:d,theme:null,accent:null,website:null,location:null,photoURL:e,username:i,verified:!1,following:[],followers:[],createdAt:(0,j.Bt)(),updatedAt:null,totalTweets:0,totalPhotos:0,pinnedTweet:null,coverPhotoURL:null},r={likes:[],tweets:[],updatedAt:null},a.prev=19,a.next=22,Promise.all([(0,j.pl)((0,j.JU)(l.W$,c),q),(0,j.pl)((0,j.JU)((0,l.bR)(c),"stats"),r)]);case 22:return a.next=24,(0,j.QT)((0,j.JU)(l.W$,c));case 24:p(s=a.sent.data()),a.next=31;break;case 28:a.prev=28,a.t0=a.catch(19),v(a.t0);case 31:a.next=34;break;case 33:p(t=g.data());case 34:y(!1);case 35:case"end":return a.stop()}},a,null,[[19,28]])})),function(b){return a.apply(this,arguments)}),c=function(a){y(!0),a?b(a):(p(null),y(!1))};(0,i.Aj)(k.I,c)},[]),(0,h.useEffect)(function(){if(o){var a=o.id,b=(0,j.cf)((0,j.JU)(l.W$,a),function(a){p(a.data())}),c=(0,j.cf)((0,l.we)(a),function(a){s(a.docs.map(function(a){return a.data()}))});return function(){b(),c()}}},[null==o?void 0:o.id]);var z,A=(b=(0,d.Z)(f().mark(function a(){var b;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,b=new i.hJ,a.next=4,(0,i.rh)(k.I,b);case 4:a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),v(a.t0);case 9:case"end":return a.stop()}},a,null,[[0,6]])})),function(){return b.apply(this,arguments)}),B=(z=(0,d.Z)(f().mark(function a(){return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,(0,i.w7)(k.I);case 3:a.next=8;break;case 5:a.prev=5,a.t0=a.catch(0),v(a.t0);case 8:case"end":return a.stop()}},a,null,[[0,5]])})),function(){return z.apply(this,arguments)}),C=!!o&&"ccrsxx"===o.username,D=(0,h.useMemo)(m.w,[null==o?void 0:o.id]);return(0,g.jsx)(n.Provider,{value:{user:o,error:u,loading:x,isAdmin:C,randomSeed:D,userBookmarks:r,signOut:B,signInWithGoogle:A},children:c})}function p(){var a=(0,h.useContext)(n);if(!a)throw Error("useAuth must be used within an AuthContextProvider");return a}},5655:function(a,b,c){"use strict";c.d(b,{Fg:function(){return l},ze:function(){return k}});var d=c(5893),e=c(7294),f=c(7359),g=c(2108),h=(0,e.createContext)(null);function i(){var a="dark",b=window.matchMedia("(prefers-color-scheme: dark)").matches;return null!=a?a:b?"dark":"light"}function j(){var a="purple";return null!=a?a:"purple"}function k(a){var b=a.children,c=(0,e.useState)(i),k=c[0],l=c[1],m=(0,e.useState)(j),n=m[0],o=m[1],p=(0,g.aC)().user,q=null!=p?p:{},r=q.id,s=q.theme,t=q.accent;(0,e.useEffect)(function(){p&&s&&l(s)},[r,s]),(0,e.useEffect)(function(){p&&t&&o(t)},[r,t]),(0,e.useEffect)(function(){var a=function(a){var b=document.documentElement;if("dark"===("dim"===a?"dark":a)?b.classList.add("dark"):b.classList.remove("dark"),b.style.setProperty("--main-background","var(--".concat(a,"-background)")),b.style.setProperty("--main-search-background","var(--".concat(a,"-search-background)")),b.style.setProperty("--main-sidebar-background","var(--".concat(a,"-sidebar-background)")),p)return localStorage.setItem("theme",a),setTimeout(function(){(0,f.Zs)(p.id,{theme:a})},500)}(k);return function(){return clearTimeout(a)}},[r,k]),(0,e.useEffect)(function(){var a=function(a){if(document.documentElement.style.setProperty("--main-accent","var(--accent-".concat(a,")")),p)return localStorage.setItem("accent",a),setTimeout(function(){(0,f.Zs)(p.id,{accent:a})},500)}(n);return function(){return clearTimeout(a)}},[r,n]);var u=function(a){return l(a.target.value)},v=function(a){return o(a.target.value)};return(0,d.jsx)(h.Provider,{value:{theme:k,accent:n,changeTheme:u,changeAccent:v},children:b})}function l(){var a=(0,e.useContext)(h);if(!a)throw Error("useTheme must be used within an ThemeContextProvider");return a}},2355:function(a,b,c){"use strict";c.d(b,{I:function(){return i},db:function(){return j},t:function(){return k}});var d=c(5816);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (0,d.KN)("firebase","9.13.0","app");var e=c(8006),f=c(5321),g=c(1153),h={apiKey:"AIzaSyAijyJItJNjz1rmRycG2wXsoUqQfxwHaqw",authDomain:"expensenewtracker.firebaseapp.com",projectId:"expensenewtracker",storageBucket:"expensenewtracker.appspot.com",messagingSenderId:"527144301736",appId:"1:527144301736:web:ec87b286e8f3342794fe9d",measurementId:"G-QMP7PCCZBN"};(0,d.ZF)(function(){if(Object.values(h).some(function(a){return!a}))throw Error("Firebase config is not set or incomplete");return h}());var i=(0,e.v0)(),j=(0,f.ad)(),k=(0,g.cF)()},1940:function(a,b,c){"use strict";c.d(b,{VV:function(){return j},we:function(){return k},bR:function(){return l},"W$":function(){return i}});var d=c(5321),e=c(6042),f={toFirestore:function(a){return(0,e.Z)({},a)},fromFirestore:function(a,b){var c=a.data(b);return(0,e.Z)({},c)}},g={toFirestore:function(a){return(0,e.Z)({},a)},fromFirestore:function(a,b){var c=a.data(b);return(0,e.Z)({},c)}},h=c(2355),i=(0,d.hJ)(h.db,"users").withConverter({toFirestore:function(a){return(0,e.Z)({},a)},fromFirestore:function(a,b){var c=a.data(b);return(0,e.Z)({},c)}}),j=(0,d.hJ)(h.db,"tweets").withConverter({toFirestore:function(a){return(0,e.Z)({},a)},fromFirestore:function(a,b){var c=a.id,d=a.data(b);return(0,e.Z)({id:c},d)}});function k(a){return(0,d.hJ)(h.db,"users/".concat(a,"/bookmarks")).withConverter(f)}function l(a){return(0,d.hJ)(h.db,"users/".concat(a,"/stats")).withConverter(g)}},7359:function(a,b,c){"use strict";c.d(b,{"$1":function(){return G},Al:function(){return q},BB:function(){return o},EJ:function(){return m},Mq:function(){return E},R1:function(){return L},X_:function(){return w},Zs:function(){return s},"_A":function(){return A},"_S":function(){return u},aE:function(){return K},as:function(){return O},eg:function(){return C},gL:function(){return y},iq:function(){return I},mN:function(){return M}});var d=c(7568),e=c(6042),f=c(9396),g=c(4051),h=c.n(g),i=c(5321),j=c(1153),k=c(2355),l=c(1940);function m(a){return n.apply(this,arguments)}function n(){return(n=(0,d.Z)(h().mark(function a(b){var c;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,i.PL)((0,i.IO)(l.W$,(0,i.ar)("username","==",b),(0,i.b9)(1)));case 2:return c=a.sent.empty,a.abrupt("return",c);case 4:case"end":return a.stop()}},a)}))).apply(this,arguments)}function o(a){return p.apply(this,arguments)}function p(){return(p=(0,d.Z)(h().mark(function a(b){var c;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,i.Yp)(b);case 2:return c=a.sent,a.abrupt("return",c.data().count);case 4:case"end":return a.stop()}},a)}))).apply(this,arguments)}function q(a,b){return r.apply(this,arguments)}function r(){return(r=(0,d.Z)(h().mark(function a(b,c){var d;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=(0,i.JU)(l.W$,b),a.next=3,(0,i.r7)(d,(0,f.Z)((0,e.Z)({},c),{updatedAt:(0,i.Bt)()}));case 3:case"end":return a.stop()}},a)}))).apply(this,arguments)}function s(a,b){return t.apply(this,arguments)}function t(){return(t=(0,d.Z)(h().mark(function a(b,c){var d;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=(0,i.JU)(l.W$,b),a.next=3,(0,i.r7)(d,(0,e.Z)({},c));case 3:case"end":return a.stop()}},a)}))).apply(this,arguments)}function u(a,b){return v.apply(this,arguments)}function v(){return(v=(0,d.Z)(h().mark(function a(b,c){var d;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=(0,i.JU)(l.W$,b),a.next=3,(0,i.r7)(d,(0,f.Z)((0,e.Z)({},c&&{username:c}),{updatedAt:(0,i.Bt)()}));case 3:case"end":return a.stop()}},a)}))).apply(this,arguments)}function w(a,b,c){return x.apply(this,arguments)}function x(){return(x=(0,d.Z)(h().mark(function a(b,c,d){var e;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e=(0,i.JU)(l.W$,c),a.next=3,(0,i.r7)(e,{updatedAt:(0,i.Bt)(),pinnedTweet:"pin"===b?d:null});case 3:case"end":return a.stop()}},a)}))).apply(this,arguments)}function y(a,b,c){return z.apply(this,arguments)}function z(){return(z=(0,d.Z)(h().mark(function a(b,c,d){var e,f,g;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e=(0,i.qs)(k.db),f=(0,i.JU)(l.W$,c),g=(0,i.JU)(l.W$,d),"follow"===b?(e.update(f,{following:(0,i.vr)(d),updatedAt:(0,i.Bt)()}),e.update(g,{followers:(0,i.vr)(c),updatedAt:(0,i.Bt)()})):(e.update(f,{following:(0,i.Ab)(d),updatedAt:(0,i.Bt)()}),e.update(g,{followers:(0,i.Ab)(c),updatedAt:(0,i.Bt)()})),a.next=6,e.commit();case 6:case"end":return a.stop()}},a)}))).apply(this,arguments)}function A(a){return B.apply(this,arguments)}function B(){return(B=(0,d.Z)(h().mark(function a(b){var c;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=(0,i.JU)(l.VV,b),a.next=3,(0,i.oe)(c);case 3:case"end":return a.stop()}},a)}))).apply(this,arguments)}function C(a,b){return D.apply(this,arguments)}function D(){return(D=(0,d.Z)(h().mark(function a(b,c){var e;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(c.length){a.next=2;break}return a.abrupt("return",null);case 2:return a.next=4,Promise.all(c.map(function(){var a=(0,d.Z)(h().mark(function a(c){var d,e,f,g;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e=c.id,f=c.name,g=(0,j.iH)(k.t,"images/".concat(b,"/").concat(f)),a.prev=3,a.next=6,(0,j.Jt)(g);case 6:d=a.sent,a.next=16;break;case 9:return a.prev=9,a.t0=a.catch(3),a.next=13,(0,j.B0)(g,c);case 13:return a.next=15,(0,j.Jt)(g);case 15:d=a.sent;case 16:return a.abrupt("return",{id:e,src:d,alt:f});case 17:case"end":return a.stop()}},a,null,[[3,9]])}));return function(b){return a.apply(this,arguments)}}()));case 4:return e=a.sent,a.abrupt("return",e);case 6:case"end":return a.stop()}},a)}))).apply(this,arguments)}function E(a,b){return F.apply(this,arguments)}function F(){return(F=(0,d.Z)(h().mark(function a(b,c){var d;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=(0,i.JU)(l.VV,c),a.prev=1,a.next=4,(0,i.r7)(d,{userReplies:(0,i.nP)("increment"===b?1:-1),updatedAt:(0,i.Bt)()});case 4:a.next=8;break;case 6:a.prev=6,a.t0=a.catch(1);case 8:case"end":return a.stop()}},a,null,[[1,6]])}))).apply(this,arguments)}function G(a,b){return H.apply(this,arguments)}function H(){return(H=(0,d.Z)(h().mark(function a(b,c){var d;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=(0,i.JU)(l.W$,c),a.next=3,(0,i.r7)(d,{totalTweets:(0,i.nP)("increment"===b?1:-1),updatedAt:(0,i.Bt)()});case 3:case"end":return a.stop()}},a)}))).apply(this,arguments)}function I(a,b){return J.apply(this,arguments)}function J(){return(J=(0,d.Z)(h().mark(function a(b,c){var d;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=(0,i.JU)(l.W$,c),a.next=3,(0,i.r7)(d,{totalPhotos:(0,i.nP)("increment"===b?1:-1),updatedAt:(0,i.Bt)()});case 3:case"end":return a.stop()}},a)}))).apply(this,arguments)}function K(a,b,c){return(0,d.Z)(h().mark(function d(){var e,f,g;return h().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return e=(0,i.qs)(k.db),f=(0,i.JU)(l.VV,c),g=(0,i.JU)((0,l.bR)(b),"stats"),"retweet"===a?(e.update(f,{userRetweets:(0,i.vr)(b),updatedAt:(0,i.Bt)()}),e.update(g,{tweets:(0,i.vr)(c),updatedAt:(0,i.Bt)()})):(e.update(f,{userRetweets:(0,i.Ab)(b),updatedAt:(0,i.Bt)()}),e.update(g,{tweets:(0,i.Ab)(c),updatedAt:(0,i.Bt)()})),d.next=6,e.commit();case 6:case"end":return d.stop()}},d)}))}function L(a,b,c){return(0,d.Z)(h().mark(function d(){var e,f,g;return h().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return e=(0,i.qs)(k.db),f=(0,i.JU)((0,l.bR)(b),"stats"),g=(0,i.JU)(l.VV,c),"like"===a?(e.update(g,{userLikes:(0,i.vr)(b),updatedAt:(0,i.Bt)()}),e.update(f,{likes:(0,i.vr)(c),updatedAt:(0,i.Bt)()})):(e.update(g,{userLikes:(0,i.Ab)(b),updatedAt:(0,i.Bt)()}),e.update(f,{likes:(0,i.Ab)(c),updatedAt:(0,i.Bt)()})),d.next=6,e.commit();case 6:case"end":return d.stop()}},d)}))}function M(a,b,c){return N.apply(this,arguments)}function N(){return(N=(0,d.Z)(h().mark(function a(b,c,d){var e,f;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(e=(0,i.JU)((0,l.we)(c),d),"bookmark"!==b){a.next=7;break}return f={id:d,createdAt:(0,i.Bt)()},a.next=5,(0,i.pl)(e,f);case 5:a.next=9;break;case 7:return a.next=9,(0,i.oe)(e);case 9:case"end":return a.stop()}},a)}))).apply(this,arguments)}function O(a){return P.apply(this,arguments)}function P(){return(P=(0,d.Z)(h().mark(function a(b){var c,d,e;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=(0,l.we)(b),a.next=3,(0,i.PL)(c);case 3:return d=a.sent,e=(0,i.qs)(k.db),d.forEach(function(a){var b=a.ref;return e.delete(b)}),a.next=8,e.commit();case 8:case"end":return a.stop()}},a)}))).apply(this,arguments)}},5195:function(a,b,c){"use strict";c.d(b,{X:function(){return f},w:function(){return e}});var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";function e(){return Array.from({length:20}).reduce(function(a){return a+d[~~(Math.random()*d.length)]},"")}function f(a,b){return Math.floor(Math.random()*(b-a+1))+a}},4036:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return k}});var d=c(6042),e=c(5893);c(1720);var f=c(2108),g=c(5655),h=c(9008),i=c.n(h);function j(){return(0,e.jsxs)(i(),{children:[(0,e.jsx)("title",{children:"ConnectED"}),(0,e.jsx)("meta",{name:"og:title",content:"ConnectED"}),(0,e.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,e.jsx)("link",{rel:"manifest",href:"/site.webmanifest"},"site-manifest"),(0,e.jsx)("meta",{name:"twitter:site",content:"@ccrsxx"}),(0,e.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})}function k(a){var b,c=a.Component,h=a.pageProps,i=null!==(b=c.getLayout)&& void 0!==b?b:function(a){return a};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(j,{}),(0,e.jsx)(f.HD,{children:(0,e.jsx)(g.ze,{children:i((0,e.jsx)(c,(0,d.Z)({},h)))})})]})}},1720:function(){},7663:function(a){!function(){var b={308:function(a){var b,c,d,e=a.exports={};function f(){throw Error("setTimeout has not been defined")}function g(){throw Error("clearTimeout has not been defined")}function h(a){if(b===setTimeout)return setTimeout(a,0);if((b===f||!b)&&setTimeout)return b=setTimeout,setTimeout(a,0);try{return b(a,0)}catch(c){try{return b.call(null,a,0)}catch(d){return b.call(this,a,0)}}}!function(){try{b="function"==typeof setTimeout?setTimeout:f}catch(a){b=f}try{c="function"==typeof clearTimeout?clearTimeout:g}catch(d){c=g}}();var i=[],j=!1,k=-1;function l(){j&&d&&(j=!1,d.length?i=d.concat(i):k=-1,i.length&&m())}function m(){if(!j){var a=h(l);j=!0;for(var b=i.length;b;){for(d=i,i=[];++k<b;)d&&d[k].run();k=-1,b=i.length}d=null,j=!1,function(a){if(c===clearTimeout)return clearTimeout(a);if((c===g||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(a);try{c(a)}catch(b){try{return c.call(null,a)}catch(d){return c.call(this,a)}}}(a)}}function n(a,b){this.fun=a,this.array=b}function o(){}e.nextTick=function(a){var b=Array(arguments.length-1);if(arguments.length>1)for(var c=1;c<arguments.length;c++)b[c-1]=arguments[c];i.push(new n(a,b)),1!==i.length||j||h(m)},n.prototype.run=function(){this.fun.apply(null,this.array)},e.title="browser",e.browser=!0,e.env={},e.argv=[],e.version="",e.versions={},e.on=o,e.addListener=o,e.once=o,e.off=o,e.removeListener=o,e.removeAllListeners=o,e.emit=o,e.prependListener=o,e.prependOnceListener=o,e.listeners=function(a){return[]},e.binding=function(a){throw Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(a){throw Error("process.chdir is not supported")},e.umask=function(){return 0}}},c={};function d(a){var e=c[a];if(void 0!==e)return e.exports;var f=c[a]={exports:{}},g=!0;try{b[a](f,f.exports,d),g=!1}finally{g&&delete c[a]}return f.exports}d.ab="//";var e=d(308);a.exports=e}()},9008:function(a,b,c){a.exports=c(5443)},655:function(a,b,c){"use strict";c.d(b,{"_T":function(){return f}});var d=function(a,b){return(d=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c])})(a,b)},e=function(){return(e=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)};function f(a,b){var c={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,d=Object.getOwnPropertySymbols(a);e<d.length;e++)0>b.indexOf(d[e])&&Object.prototype.propertyIsEnumerable.call(a,d[e])&&(c[d[e]]=a[d[e]]);return c}function g(a){return this instanceof g?(this.v=a,this):new g(a)}},5816:function(a,b,c){"use strict";c.d(b,{Jn:function(){return K},qX:function(){return H},Xd:function(){return G},Mq:function(){return M},ZF:function(){return L},KN:function(){return N}});var d,e=c(8463),f=c(3333),g=c(4444);let h=(a,b)=>b.some(b=>a instanceof b),i,j,k=new WeakMap,l=new WeakMap,m=new WeakMap,n=new WeakMap,o=new WeakMap,p={get(a,b,c){if(a instanceof IDBTransaction){if("done"===b)return l.get(a);if("objectStoreNames"===b)return a.objectStoreNames||m.get(a);if("store"===b)return c.objectStoreNames[1]?void 0:c.objectStore(c.objectStoreNames[0])}return q(a[b])},set(a,b,c){return a[b]=c,!0},has(a,b){return a instanceof IDBTransaction&&("done"===b||"store"===b)||b in a}};function q(a){if(a instanceof IDBRequest)return function(a){let b=new Promise((b,c)=>{let d=()=>{a.removeEventListener("success",e),a.removeEventListener("error",f)},e=()=>{b(q(a.result)),d()},f=()=>{c(a.error),d()};a.addEventListener("success",e),a.addEventListener("error",f)});return b.then(b=>{b instanceof IDBCursor&&k.set(b,a)}).catch(()=>{}),o.set(b,a),b}(a);if(n.has(a))return n.get(a);let b=function(a){if("function"==typeof a){var b;return(b=a)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(j||(j=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey,])).includes(b)?function(...a){return b.apply(r(this),a),q(k.get(this))}:function(...a){return q(b.apply(r(this),a))}:function(a,...c){let d=b.call(r(this),a,...c);return m.set(d,a.sort?a.sort():[a]),q(d)}}return(a instanceof IDBTransaction&&function(a){if(l.has(a))return;let b=new Promise((b,c)=>{let d=()=>{a.removeEventListener("complete",e),a.removeEventListener("error",f),a.removeEventListener("abort",f)},e=()=>{b(),d()},f=()=>{c(a.error||new DOMException("AbortError","AbortError")),d()};a.addEventListener("complete",e),a.addEventListener("error",f),a.addEventListener("abort",f)});l.set(a,b)}(a),h(a,i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction,])))?new Proxy(a,p):a}(a);return b!==a&&(n.set(a,b),o.set(b,a)),b}let r=a=>o.get(a),s=["get","getKey","getAll","getAllKeys","count"],t=["put","add","delete","clear"],u=new Map;function v(a,b){if(!(a instanceof IDBDatabase&&!(b in a)&&"string"==typeof b))return;if(u.get(b))return u.get(b);let c=b.replace(/FromIndex$/,""),d=b!==c,e=t.includes(c);if(!(c in(d?IDBIndex:IDBObjectStore).prototype)||!(e||s.includes(c)))return;let f=async function(a,...b){let f=this.transaction(a,e?"readwrite":"readonly"),g=f.store;return d&&(g=g.index(b.shift())),(await Promise.all([g[c](...b),e&&f.done,]))[0]};return u.set(b,f),f}!function(a){p=a(p)}(a=>({...a,get:(b,c,d)=>v(b,c)||a.get(b,c,d),has:(b,c)=>!!v(b,c)||a.has(b,c)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class w{constructor(a){this.container=a}getPlatformInfoString(){let a=this.container.getProviders();return a.map(a=>{if(!x(a))return null;{let b=a.getImmediate();return`${b.library}/${b.version}`}}).filter(a=>a).join(" ")}}function x(a){let b=a.getComponent();return(null==b?void 0:b.type)==="VERSION"}let y="@firebase/app",z="0.8.3",A=new f.Yd("@firebase/app"),B="[DEFAULT]",C={[y]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},D=new Map,E=new Map;function F(a,b){try{a.container.addComponent(b)}catch(c){A.debug(`Component ${b.name} failed to register with FirebaseApp ${a.name}`,c)}}function G(a){let b=a.name;if(E.has(b))return A.debug(`There were multiple attempts to register component ${b}.`),!1;for(let c of(E.set(b,a),D.values()))F(c,a);return!0}function H(a,b){let c=a.container.getProvider("heartbeat").getImmediate({optional:!0});return c&&c.triggerHeartbeat(),a.container.getProvider(b)}let I=new g.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class J{constructor(a,b,c){this._isDeleted=!1,this._options=Object.assign({},a),this._config=Object.assign({},b),this._name=b.name,this._automaticDataCollectionEnabled=b.automaticDataCollectionEnabled,this._container=c,this.container.addComponent(new e.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(a){this.checkDestroyed(),this._automaticDataCollectionEnabled=a}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(a){this._isDeleted=a}checkDestroyed(){if(this.isDeleted)throw I.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The current SDK version.
 *
 * @public
 */ let K="9.13.0";function L(a,b={}){let c=a;if("object"!=typeof b){let d=b;b={name:d}}let f=Object.assign({name:B,automaticDataCollectionEnabled:!1},b),h=f.name;if("string"!=typeof h||!h)throw I.create("bad-app-name",{appName:String(h)});if(c||(c=(0,g.aH)()),!c)throw I.create("no-options");let i=D.get(h);if(i){if((0,g.vZ)(c,i.options)&&(0,g.vZ)(f,i.config))return i;throw I.create("duplicate-app",{appName:h})}let j=new e.H0(h);for(let k of E.values())j.addComponent(k);let l=new J(c,f,j);return D.set(h,l),l}function M(a=B){let b=D.get(a);if(!b&&a===B)return L();if(!b)throw I.create("no-app",{appName:a});return b}function N(a,b,c){var d;let f=null!==(d=C[a])&& void 0!==d?d:a;c&&(f+=`-${c}`);let g=f.match(/\s|\//),h=b.match(/\s|\//);if(g||h){let i=[`Unable to register library "${f}" with version "${b}":`];g&&i.push(`library name "${f}" contains illegal characters (whitespace or "/")`),g&&h&&i.push("and"),h&&i.push(`version name "${b}" contains illegal characters (whitespace or "/")`),A.warn(i.join(" "));return}G(new e.wA(`${f}-version`,()=>({library:f,version:b}),"VERSION"))}let O="firebase-heartbeat-store",P=null;function Q(){return P||(P=(function(a,b,{blocked:c,upgrade:d,blocking:e,terminated:f}={}){let g=indexedDB.open(a,1),h=q(g);return d&&g.addEventListener("upgradeneeded",a=>{d(q(g.result),a.oldVersion,a.newVersion,q(g.transaction))}),c&&g.addEventListener("blocked",()=>c()),h.then(a=>{f&&a.addEventListener("close",()=>f()),e&&a.addEventListener("versionchange",()=>e())}).catch(()=>{}),h})("firebase-heartbeat-database",1,{upgrade:(a,b)=>{0===b&&a.createObjectStore(O)}}).catch(a=>{throw I.create("idb-open",{originalErrorMessage:a.message})})),P}async function R(a){var b;try{let c=await Q();return c.transaction(O).objectStore(O).get(T(a))}catch(d){if(d instanceof g.ZR)A.warn(d.message);else{let e=I.create("idb-get",{originalErrorMessage:null===(b=d)|| void 0===b?void 0:b.message});A.warn(e.message)}}}async function S(a,b){var c;try{let d=await Q(),e=d.transaction(O,"readwrite"),f=e.objectStore(O);return await f.put(b,T(a)),e.done}catch(h){if(h instanceof g.ZR)A.warn(h.message);else{let i=I.create("idb-set",{originalErrorMessage:null===(c=h)|| void 0===c?void 0:c.message});A.warn(i.message)}}}function T(a){return`${a.name}!${a.options.appId}`}class U{constructor(a){this.container=a,this._heartbeatsCache=null;let b=this.container.getProvider("app").getImmediate();this._storage=new X(b),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){let a=this.container.getProvider("platform-logger").getImmediate(),b=a.getPlatformInfoString(),c=V();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(a=>a.date===c))?void 0:(this._heartbeatsCache.heartbeats.push({date:c,agent:b}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{let b=new Date(a.date).valueOf(),c=Date.now();return c-b<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let a=V(),{heartbeatsToSend:b,unsentEntries:c}=W(this._heartbeatsCache.heartbeats),d=(0,g.L)(JSON.stringify({version:2,heartbeats:b}));return this._heartbeatsCache.lastSentHeartbeatDate=a,c.length>0?(this._heartbeatsCache.heartbeats=c,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),d}}function V(){let a=new Date;return a.toISOString().substring(0,10)}function W(a,b=1024){let c=[],d=a.slice();for(let e of a){let f=c.find(a=>a.agent===e.agent);if(f){if(f.dates.push(e.date),Y(c)>b){f.dates.pop();break}}else if(c.push({agent:e.agent,dates:[e.date]}),Y(c)>b){c.pop();break}d=d.slice(1)}return{heartbeatsToSend:c,unsentEntries:d}}class X{constructor(a){this.app=a,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,g.hl)()&&(0,g.eu)().then(()=>!0).catch(()=>!1)}async read(){let a=await this._canUseIndexedDBPromise;if(!a)return{heartbeats:[]};{let b=await R(this.app);return b||{heartbeats:[]}}}async overwrite(a){var b;let c=await this._canUseIndexedDBPromise;if(c){let d=await this.read();return S(this.app,{lastSentHeartbeatDate:null!==(b=a.lastSentHeartbeatDate)&& void 0!==b?b:d.lastSentHeartbeatDate,heartbeats:a.heartbeats})}}async add(a){var b;let c=await this._canUseIndexedDBPromise;if(c){let d=await this.read();return S(this.app,{lastSentHeartbeatDate:null!==(b=a.lastSentHeartbeatDate)&& void 0!==b?b:d.lastSentHeartbeatDate,heartbeats:[...d.heartbeats,...a.heartbeats]})}}}function Y(a){return(0,g.L)(JSON.stringify({version:2,heartbeats:a})).length}G(new e.wA("platform-logger",a=>new w(a),"PRIVATE")),G(new e.wA("heartbeat",a=>new U(a),"PRIVATE")),N(y,z,""),N(y,z,"esm2017"),N("fire-js","")},8463:function(a,b,c){"use strict";c.d(b,{H0:function(){return j},wA:function(){return e}});var d=c(4444);class e{constructor(a,b,c){this.name=a,this.instanceFactory=b,this.type=c,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(a){return this.instantiationMode=a,this}setMultipleInstances(a){return this.multipleInstances=a,this}setServiceProps(a){return this.serviceProps=a,this}setInstanceCreatedCallback(a){return this.onInstanceCreated=a,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let f="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */ class g{constructor(a,b){this.name=a,this.container=b,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(a){let b=this.normalizeInstanceIdentifier(a);if(!this.instancesDeferred.has(b)){let c=new d.BH;if(this.instancesDeferred.set(b,c),this.isInitialized(b)||this.shouldAutoInitialize())try{let e=this.getOrInitializeService({instanceIdentifier:b});e&&c.resolve(e)}catch(f){}}return this.instancesDeferred.get(b).promise}getImmediate(a){var b;let c=this.normalizeInstanceIdentifier(null==a?void 0:a.identifier),d=null!==(b=null==a?void 0:a.optional)&& void 0!==b&&b;if(this.isInitialized(c)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:c})}catch(e){if(d)return null;throw e}else{if(d)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(a){if(a.name!==this.name)throw Error(`Mismatching Component ${a.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=a,this.shouldAutoInitialize()){if(i(a))try{this.getOrInitializeService({instanceIdentifier:f})}catch(b){}for(let[c,d]of this.instancesDeferred.entries()){let e=this.normalizeInstanceIdentifier(c);try{let g=this.getOrInitializeService({instanceIdentifier:e});d.resolve(g)}catch(h){}}}}clearInstance(a=f){this.instancesDeferred.delete(a),this.instancesOptions.delete(a),this.instances.delete(a)}async delete(){let a=Array.from(this.instances.values());await Promise.all([...a.filter(a=>"INTERNAL"in a).map(a=>a.INTERNAL.delete()),...a.filter(a=>"_delete"in a).map(a=>a._delete())])}isComponentSet(){return null!=this.component}isInitialized(a=f){return this.instances.has(a)}getOptions(a=f){return this.instancesOptions.get(a)||{}}initialize(a={}){let{options:b={}}=a,c=this.normalizeInstanceIdentifier(a.instanceIdentifier);if(this.isInitialized(c))throw Error(`${this.name}(${c}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let d=this.getOrInitializeService({instanceIdentifier:c,options:b});for(let[e,f]of this.instancesDeferred.entries()){let g=this.normalizeInstanceIdentifier(e);c===g&&f.resolve(d)}return d}onInit(a,b){var c;let d=this.normalizeInstanceIdentifier(b),e=null!==(c=this.onInitCallbacks.get(d))&& void 0!==c?c:new Set;e.add(a),this.onInitCallbacks.set(d,e);let f=this.instances.get(d);return f&&a(f,d),()=>{e.delete(a)}}invokeOnInitCallbacks(a,b){let c=this.onInitCallbacks.get(b);if(c)for(let d of c)try{d(a,b)}catch(e){}}getOrInitializeService({instanceIdentifier:a,options:b={}}){let c=this.instances.get(a);if(!c&&this.component&&(c=this.component.instanceFactory(this.container,{instanceIdentifier:h(a),options:b}),this.instances.set(a,c),this.instancesOptions.set(a,b),this.invokeOnInitCallbacks(c,a),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,a,c)}catch(d){}return c||null}normalizeInstanceIdentifier(a=f){return this.component?this.component.multipleInstances?a:f:a}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function h(a){return a===f?void 0:a}function i(a){return"EAGER"===a.instantiationMode}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */ class j{constructor(a){this.name=a,this.providers=new Map}addComponent(a){let b=this.getProvider(a.name);if(b.isComponentSet())throw Error(`Component ${a.name} has already been registered with ${this.name}`);b.setComponent(a)}addOrOverwriteComponent(a){let b=this.getProvider(a.name);b.isComponentSet()&&this.providers.delete(a.name),this.addComponent(a)}getProvider(a){if(this.providers.has(a))return this.providers.get(a);let b=new g(a,this);return this.providers.set(a,b),b}getProviders(){return Array.from(this.providers.values())}}},3333:function(a,b,c){"use strict";var d,e;c.d(b,{Yd:function(){return j},in:function(){return d}});(e=d||(d={}))[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT";let f={debug:d.DEBUG,verbose:d.VERBOSE,info:d.INFO,warn:d.WARN,error:d.ERROR,silent:d.SILENT},g=d.INFO,h={[d.DEBUG]:"log",[d.VERBOSE]:"log",[d.INFO]:"info",[d.WARN]:"warn",[d.ERROR]:"error"},i=(a,b,...c)=>{if(b<a.logLevel)return;let d=new Date().toISOString(),e=h[b];if(e)console[e](`[${d}]  ${a.name}:`,...c);else throw Error(`Attempted to log a message with an invalid logType (value: ${b})`)};class j{constructor(a){this.name=a,this._logLevel=g,this._logHandler=i,this._userLogHandler=null,[].push(this)}get logLevel(){return this._logLevel}set logLevel(a){if(!(a in d))throw TypeError(`Invalid value "${a}" assigned to \`logLevel\``);this._logLevel=a}setLogLevel(a){this._logLevel="string"==typeof a?f[a]:a}get logHandler(){return this._logHandler}set logHandler(a){if("function"!=typeof a)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=a}get userLogHandler(){return this._userLogHandler}set userLogHandler(a){this._userLogHandler=a}debug(...a){this._userLogHandler&&this._userLogHandler(this,d.DEBUG,...a),this._logHandler(this,d.DEBUG,...a)}log(...a){this._userLogHandler&&this._userLogHandler(this,d.VERBOSE,...a),this._logHandler(this,d.VERBOSE,...a)}info(...a){this._userLogHandler&&this._userLogHandler(this,d.INFO,...a),this._logHandler(this,d.INFO,...a)}warn(...a){this._userLogHandler&&this._userLogHandler(this,d.WARN,...a),this._logHandler(this,d.WARN,...a)}error(...a){this._userLogHandler&&this._userLogHandler(this,d.ERROR,...a),this._logHandler(this,d.ERROR,...a)}}},7568:function(a,b,c){"use strict";function d(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(j){c(j);return}h.done?b(i):Promise.resolve(i).then(d,e)}function e(a){return function(){var b=this,c=arguments;return new Promise(function(e,f){var g=a.apply(b,c);function h(a){d(g,e,f,h,i,"next",a)}function i(a){d(g,e,f,h,i,"throw",a)}h(void 0)})}}c.d(b,{Z:function(){return e}})},4924:function(a,b,c){"use strict";function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}c.d(b,{Z:function(){return d}})},6042:function(a,b,c){"use strict";c.d(b,{Z:function(){return e}});var d=c(4924);function e(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},e=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),e.forEach(function(b){(0,d.Z)(a,b,c[b])})}return a}},9396:function(a,b,c){"use strict";function d(a,b){return b=null!=b?b:{},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))}),a}c.d(b,{Z:function(){return d}})}},function(a){var b=function(b){return a(a.s=b)};a.O(0,[774,179],function(){return b(6840),b(387)}),_N_E=a.O()}])