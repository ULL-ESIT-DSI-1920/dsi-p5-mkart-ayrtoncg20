parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"wwJ9":[function(require,module,exports) {
module.exports="/dsi-p5-mkart-ayrtoncg20/kart-birdo.833d6c78.png";
},{}],"mT69":[function(require,module,exports) {
module.exports="/dsi-p5-mkart-ayrtoncg20/kart-boo.db764f0c.png";
},{}],"mDNR":[function(require,module,exports) {
module.exports="/dsi-p5-mkart-ayrtoncg20/kart-luigi.ef839890.png";
},{}],"UL1V":[function(require,module,exports) {
module.exports="/dsi-p5-mkart-ayrtoncg20/kart-mario.a20ee256.png";
},{}],"C4Jj":[function(require,module,exports) {
module.exports="/dsi-p5-mkart-ayrtoncg20/kart-shroom.148f2fea.png";
},{}],"hv8n":[function(require,module,exports) {
module.exports="/dsi-p5-mkart-ayrtoncg20/kart-yoshi.6183b947.png";
},{}],"IqMo":[function(require,module,exports) {
module.exports={birdo:require("./kart-birdo.png"),boo:require("./kart-boo.png"),luigi:require("./kart-luigi.png"),mario:require("./kart-mario.png"),shroom:require("./kart-shroom.png"),yoshi:require("./kart-yoshi.png")};
},{"./kart-birdo.png":"wwJ9","./kart-boo.png":"mT69","./kart-luigi.png":"mDNR","./kart-mario.png":"UL1V","./kart-shroom.png":"C4Jj","./kart-yoshi.png":"hv8n"}],"ZlrI":[function(require,module,exports) {
"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}function n(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function e(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}function o(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&p(t,n)}function i(t){var n=l();return function(){var e,r=y(t);if(n){var o=y(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return c(this,e)}}function c(n,e){return!e||"object"!==t(e)&&"function"!=typeof e?a(n):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){var n="function"==typeof Map?new Map:void 0;return(u=function(t){if(null===t||!f(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return s(t,arguments,y(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),p(e,t)})(t)}function s(t,n,e){return(s=l()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&p(o,e.prototype),o}).apply(null,arguments)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function f(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function p(t,n){return(p=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.KartPlayer=void 0;var h=function(t){o(c,u(HTMLElement));var e=i(c);function c(t,r){var o;return n(this,c),(o=e.call(this)).attachShadow({mode:"open"}),o.name=t,o.y=r.y,o.image=r.image,o.x=0,o}return r(c,[{key:"render",value:function(){this.shadowRoot.innerHTML="\n          <style>".concat(this.styles,'</style>\n          <item-kart></item-kart>\n          <img src="').concat(this.image,'" alt="').concat(this.name,'">\n        ')}},{key:"addToRoad",value:function(t){t.appendChild(this),this.render()}},{key:"inc",value:function(){console.log(this.imagen_item),this.x+=5*Math.random()+0,this.render()}},{key:"isWinner",value:function(){return this.x>=930}},{key:"win",value:function(){this.shadowRoot.innerHTML="\n          <style>".concat(this.styles,'</style>\n          <item-kart></item-kart>\n          <img class="winner" src="').concat(this.image,'">\n        ')}},{key:"lose",value:function(){this.shadowRoot.innerHTML="\n          <style>".concat(this.styles,'</style>\n          <item-kart></item-kart>\n          <img class="lose" src="').concat(this.image,'">\n        ')}},{key:"restart",value:function(){this.x=0,this.render()}},{key:"styles",get:function(){return"\n       :host {\n         position: absolute;\n         display: inline-block;\n         left: ".concat(this.x,"px;\n         top: ").concat(this.y,"px;\n         transform: translateX(var(--x)) translateY(var(--y));\n         transition: transform 10s;\n         will-change: transform;\n       }\n       .winner{\n         filter: drop-shadow(0 0 10px yellow);\n         z-index: 5;\n       }\n       .lose{\n         opacity: 0.25;\n       }\n       .item{\n         left: ").concat(this.x_item,"px;\n         top: ").concat(this.y_item,"px;\n       }\n     ")}}]),c}();exports.KartPlayer=h,customElements.define("kart-player",h);
},{}],"QvaY":[function(require,module,exports) {
"use strict";var r=e(require("../assets/kart-*.png")),t=require("./KartPlayer.js");function e(r){return r&&r.__esModule?r:{default:r}}function n(r,t){return c(r)||i(r,t)||u(r,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(r,t){if(r){if("string"==typeof r)return a(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(r,t):void 0}}function a(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function i(r,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var e=[],n=!0,o=!1,u=void 0;try{for(var a,i=r[Symbol.iterator]();!(n=(a=i.next()).done)&&(e.push(a.value),!t||e.length!==t);n=!0);}catch(c){o=!0,u=c}finally{try{n||null==i.return||i.return()}finally{if(o)throw u}}return e}}function c(r){if(Array.isArray(r))return r}for(var l=document.querySelector(".start"),f=document.querySelector(".restart"),s=document.querySelector(".road"),d=[],y=null,b=0,m=Object.entries(r.default);b<m.length;b++){var h=n(m[b],2),v=h[0],p=h[1],g={image:p,y:64*d.length},S=new t.KartPlayer(v,g);S.addToRoad(s),d.push(S)}var j=function(){y=setInterval(function(){return q()},1e3/60),l.disabled=!0,f.disabled=!0},w=function(){clearInterval(y),d.forEach(function(r){return r.isWinner()?r.win():r.lose()}),f.disabled=!1},A=function(){d.forEach(function(r){return r.restart()}),l.disabled=!1},q=function(){d.forEach(function(r){return r.inc()}),d.some(function(r){return r.isWinner()})&&w()};l.onclick=function(){return j()},f.onclick=function(){return A()};
},{"../assets/kart-*.png":"IqMo","./KartPlayer.js":"ZlrI"}]},{},["QvaY"], null)
//# sourceMappingURL=/dsi-p5-mkart-ayrtoncg20/js.fcf5d291.js.map