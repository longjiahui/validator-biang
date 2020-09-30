!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Validator=e():t.Validator=e()}(this,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=4)}([function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,e,r){t.exports=r(5)},function(t,e){function r(t,e,r,n,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void r(t)}a.done?e(c):Promise.resolve(c).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var u=t.apply(e,n);function a(t){r(u,o,i,a,c,"next",t)}function c(t){r(u,o,i,a,c,"throw",t)}a(void 0)}))}}},function(t,e){function r(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=r=function(t){return typeof t}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(e)}t.exports=r},function(t,e,r){"use strict";var n=r(0),o=n(r(1)),i=n(r(2)),u=n(r(6)),a=n(r(7));function c(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return u=t.done,t},e:function(t){a=!0,i=t},f:function(){try{u||null==r.return||r.return()}finally{if(a)throw i}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var l=r(8),s=r(9),p=r(10),h=r(11),d=r(12),y=r(13);t.exports=function(){function t(e){var r=this;(0,u.default)(this,t);var n=Object.assign({},l,e),o=Object.keys(n||{});this.presetRules={},o.forEach((function(t){r.addPresetRule(t,n[t])})),Object.assign(this,s),this.ruleParsers=[],this.use(y),this.use(p),this.use(h),this.use(d)}var e;return(0,a.default)(t,[{key:"use",value:function(t){var e=null==t?void 0:t.install.call(this,this);e&&this.ruleParsers.push(e)}},{key:"addPresetRule",value:function(t,e){this.presetRules[t.toUpperCase()]=e}},{key:"getPresetRule",value:function(t){return this.presetRules[t.toUpperCase()]}},{key:"v",value:function(){return this.validate.apply(this,arguments)}},{key:"validate",value:(e=(0,i.default)(o.default.mark((function t(e,r){var n,i,u,a;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=c(this.ruleParsers),t.prev=1,n.s();case 3:if((i=n.n()).done){t.next=10;break}if(u=i.value,!(a=u.parseRule(r))){t.next=8;break}return t.abrupt("return",this.validate(e,a));case 8:t.next=3;break;case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),n.e(t.t0);case 15:return t.prev=15,n.f(),t.finish(15);case 18:if(!r||"function"!=typeof r){t.next=20;break}return t.abrupt("return",r.call(this,e,this));case 20:case"end":return t.stop()}}),t,this,[[1,12,15,18]])}))),function(t,r){return e.apply(this,arguments)})}]),t}()},function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",u=n.toStringTag||"@@toStringTag";function a(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{a({},"")}catch(t){a=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=e&&e.prototype instanceof s?e:s,i=Object.create(o.prototype),u=new k(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var u=r.delegate;if(u){var a=x(u,r);if(a){if(a===l)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,u),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var l={};function s(){}function p(){}function h(){}var d={};d[o]=function(){return this};var y=Object.getPrototypeOf,v=y&&y(y(O([])));v&&v!==e&&r.call(v,o)&&(d=v);var m=h.prototype=s.prototype=Object.create(d);function b(t){["next","throw","return"].forEach((function(e){a(t,e,(function(t){return this._invoke(e,t)}))}))}function g(t,e){var n;this._invoke=function(o,i){function u(){return new e((function(n,u){!function n(o,i,u,a){var c=f(t[o],t,i);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==typeof s&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,u,a)}),(function(t){n("throw",t,u,a)})):e.resolve(s).then((function(t){l.value=t,u(l)}),(function(t){return n("throw",t,u,a)}))}a(c.arg)}(o,i,n,u)}))}return n=n?n.then(u,u):u()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=m.constructor=h,h.constructor=p,p.displayName=a(h,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,a(t,u,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},b(g.prototype),g.prototype[i]=function(){return this},t.AsyncIterator=g,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var u=new g(c(e,r,n,o),i);return t.isGeneratorFunction(r)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},b(m),a(m,u,"Generator"),m[o]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return u.type="throw",u.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(a&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},function(t,e,r){"use strict";var n=r(0)(r(3));t.exports={truthy:function(t){return!!t},truthyString:function(t){return!!t&&"string"==typeof t},falsy:function(t){return!t},object:function(t){return t&&"object"===(0,n.default)(t)},number:function(t){return"number"==typeof t},string:function(t){return"string"==typeof t},boolean:function(t){return"boolean"==typeof t},null:function(t){return null==t},completeNull:function(t){return null===t},completeUndefined:function(t){return void 0===t},function:function(t){return"function"==typeof t},array:function(t){return t instanceof Array},any:function(){return!0}}},function(t,e,r){"use strict";t.exports={checkAnd:function(t){return Promise.all(t).then((function(t){return!t.includes(!1)}))},checkOr:function(t){function e(t){return t.then((function(t){return!t}))}return e(this.checkAnd(null==t?void 0:t.map((function(t){return e(t)}))))}}},function(t,e,r){"use strict";t.exports={install:function(t){return{parseRule:function(e){var r=null;if(e&&"string"==typeof e)if(/\$$/.test(e))r={$or:["null",e.slice(0,-1)]};else{var n,o=null===(n=/^array\[(.+)\]\$?$/.exec(e))||void 0===n?void 0:n[1];r=o?{$:"array",$subItem:o}:t.getPresetRule(e)}return r}}}}},function(t,e,r){"use strict";var n=r(0),o=n(r(1)),i=n(r(2));t.exports={install:function(t){return{parseRule:function(e){var r=null;return e instanceof Array&&(r=function(r){return t.checkAnd(e.map(function(){var e=(0,i.default)(o.default.mark((function e(n){return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.v(r,n));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}),r}}}}},function(t,e,r){"use strict";t.exports={install:function(){return{parseRule:function(t){var e=null;return t instanceof RegExp&&(e=function(e){return t.test(e)}),e}}}}},function(t,e,r){"use strict";var n=r(0),o=n(r(3)),i=n(r(1)),u=n(r(2));function a(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return u=t.done,t},e:function(t){a=!0,i=t},f:function(){try{u||null==r.return||r.return()}finally{if(a)throw i}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}t.exports={install:function(t){return{getVal:function(t,e){var r,n=a(e.split("."));try{for(n.s();!(r=n.n()).done;){var o,i=r.value;t=null===(o=t)||void 0===o?void 0:o[i]}}catch(t){n.e(t)}finally{n.f()}return t},dealPrefix$:function(t){var e,r;return((null===(e=/^\$+/.exec(t))||void 0===e||null===(r=e[0])||void 0===r?void 0:r.length)||0)>1?t.slice(1):t},dealSuffix$:function(t){return null==t?void 0:t.replace(/\$\$$/g,"$")},doObjectRule:function(e){var r=this,n=[],o=Object.keys(e);if(o.includes("$subItem")){var a=e.$subItem;delete e.$subItem,n.push(function(){var e=(0,u.default)(i.default.mark((function e(r){var n;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},Object.keys(r).forEach((function(t){n[t]=a})),e.abrupt("return",t.v(r,n));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}if(o.includes("$or")){var c=e.$or;delete e.$or,n.push((function(e){return t.checkOr(c.map((function(r){return t.v(e,r)})))}))}return o=Object.keys(e),n.push((function(n){return t.checkAnd(o.map(function(){var o=(0,u.default)(i.default.mark((function o(u){var a,c,f,l,s;return i.default.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(f=r.dealPrefix$(u),l=!0,((null===(a=/\$+$/.exec(u))||void 0===a||null===(c=a[0])||void 0===c?void 0:c.length)||0)%2==0||(l=!1,f=u.slice(0,-1)),f=r.dealSuffix$(f),s="$"===u?n:r.getVal(n,f),!l||void 0!==s){o.next=9;break}return o.abrupt("return",!1);case 9:if(void 0===s){o.next=13;break}return o.abrupt("return",t.v(s,e[u]));case 13:return o.abrupt("return",!0);case 14:case"end":return o.stop()}}),o)})));return function(t){return o.apply(this,arguments)}}()))})),n},parseRule:function(t){var e=null;return t&&"object"===(0,o.default)(t)&&"Object"===t.constructor.name&&(e=this.doObjectRule(t)),e}}}}}])}));