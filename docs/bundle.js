!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){(function(e){var n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,a="object"==typeof self&&self&&self.Object===Object&&self,f=c||a||Function("return this")(),s=Object.prototype.toString,l=Math.max,d=Math.min,p=function(){return f.Date.now()};function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var c=o.test(t);return c||i.test(t)?u(t.slice(2),c?2:8):r.test(t)?NaN:+t}t.exports=function(t,e,n){var r,o,i,u,c,a,f=0,s=!1,y=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=r,i=o;return r=o=void 0,f=e,u=t.apply(i,n)}function h(t){return f=t,c=setTimeout(w,e),s?g(t):u}function j(t){var n=t-a;return void 0===a||n>=e||n<0||y&&t-f>=i}function w(){var t=p();if(j(t))return O(t);c=setTimeout(w,function(t){var n=e-(t-a);return y?d(n,i-(t-f)):n}(t))}function O(t){return c=void 0,m&&r?g(t):(r=o=void 0,u)}function x(){var t=p(),n=j(t);if(r=arguments,o=this,a=t,n){if(void 0===c)return h(a);if(y)return c=setTimeout(w,e),g(a)}return void 0===c&&(c=setTimeout(w,e)),u}return e=b(e)||0,v(n)&&(s=!!n.leading,i=(y="maxWait"in n)?l(b(n.maxWait)||0,e):i,m="trailing"in n?!!n.trailing:m),x.cancel=function(){void 0!==c&&clearTimeout(c),f=0,r=a=o=c=void 0},x.flush=function(){return void 0===c?u:O(p())},x}}).call(this,n(1))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r);const i={android:()=>navigator.userAgent.match(/Android/i),blackberry:()=>navigator.userAgent.match(/BlackBerry/i),ios:()=>navigator.userAgent.match(/iPhone|iPad|iPod/i),opera:()=>navigator.userAgent.match(/Opera Mini/i),windows:()=>navigator.userAgent.match(/IEMobile/i),any:()=>i.android()||i.blackberry()||i.ios()||i.opera()||i.windows()};var u=i;function c(){(function(t,e=document){return[...e.querySelectorAll(t)]})("[target='_blank']").forEach(t=>t.setAttribute("rel","noopener"))}d3.select("body");var a={init:function(){console.log("Make something awesome!")},resize:function(){}};const f=d3.select("body");let s=0;function l(){const t=f.node().offsetWidth;s!==t&&(s=t,a.resize())}c(),f.classed("is-mobile",u.any()),window.addEventListener("resize",o()(l,150)),a.init()}]);