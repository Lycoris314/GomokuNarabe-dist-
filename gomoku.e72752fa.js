parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"dgRt":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.GAME_STATE=exports.STONE=void 0,exports.STONE={NONE:0,FIRST:1,SECOND:2,WALL:-1},exports.GAME_STATE={PENDING:0,WIN:1,DRAW:2};
},{}],"dIrE":[function(require,module,exports) {
"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(t)}var t,e,r,o=this&&this.__classPrivateFieldSet||function(n,t,e,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?n!==t||!o:!t.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(n,e):o?o.value=e:t.set(n,e),e},u=this&&this.__classPrivateFieldGet||function(n,t,e,r){if("a"===e&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?n!==t||!r:!t.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===e?r:"a"===e?r.call(n):r?r.value:t.get(n)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.GomokuNarabe=void 0;var i=require("./global"),s=function(){function s(n){t.set(this,void 0),e.set(this,void 0),r.set(this,void 0),o(this,r,n,"f"),o(this,e,i.STONE.FIRST,"f"),o(this,t,new Array(n+2).fill(null).map(function(t){return new Array(n+2).fill(i.STONE.NONE)}),"f");for(var s=0;s<n+2;s++)u(this,t,"f")[s][0]=i.STONE.WALL,u(this,t,"f")[s][n+1]=i.STONE.WALL,u(this,t,"f")[0][s]=i.STONE.WALL,u(this,t,"f")[n+1][s]=i.STONE.WALL}return Object.defineProperty(s.prototype,"field",{get:function(){return u(this,t,"f").slice(1,-1).map(function(n){return n.slice(1,-1)})},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"turn",{get:function(){return u(this,e,"f")},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"size",{get:function(){return u(this,r,"f")},enumerable:!1,configurable:!0}),s.prototype.getOpponentTurn=function(){return this.turn===i.STONE.FIRST?i.STONE.SECOND:i.STONE.FIRST},s.prototype.putStone=function(n,r){if(u(this,t,"f")[n][r]!==i.STONE.NONE)return null;u(this,t,"f")[n][r]=u(this,e,"f");var s=this.checkGameState(n,r,u(this,t,"f"),u(this,e,"f"));return o(this,e,this.getOpponentTurn(),"f"),s},s.prototype.checkGameState=function(n,t,e,r){return o([0,1])+o([0,-1])>=4?i.GAME_STATE.WIN:o([1,0])+o([-1,0])>=4?i.GAME_STATE.WIN:o([1,1])+o([-1,-1])>=4?i.GAME_STATE.WIN:o([1,-1])+o([-1,1])>=4?i.GAME_STATE.WIN:e.every(function(n){return n.every(function(n){return n!==i.STONE.NONE})})?i.GAME_STATE.DRAW:i.GAME_STATE.PENDING;function o(o){var u=n,i=t,s=0;return function n(){u+=o[0];i+=o[1];if(e[u][i]!==r)return;s++;n()}(),s}},s.prototype.comNext=function(){for(var e=[],o=1;o<=u(this,r,"f");o++)for(var s=1;s<=u(this,r,"f");s++)u(this,t,"f")[o][s]==i.STONE.NONE&&e.push([o,s]);for(var f=0,a=e;f<a.length;f++){var c=(on=a[f])[0],d=on[1];if((V=structuredClone(u(this,t,"f")))[c][d]=this.turn,this.checkGameState(c,d,V,this.turn)===i.GAME_STATE.WIN)return[c-1,d-1]}for(var h=0,l=e;h<l.length;h++){var p=(on=l[h])[0],v=on[1];if((V=structuredClone(u(this,t,"f")))[p][v]=this.getOpponentTurn(),this.checkGameState(p,v,V,this.getOpponentTurn())===i.GAME_STATE.WIN)return[p-1,v-1]}for(var E=0,T=e;E<T.length;E++){var y=(on=T[E])[0],S=on[1];if((V=structuredClone(u(this,t,"f")))[y][S]=this.turn,(Y=(X=this.getStoneArray(y,S,V,this.turn)).counts.findIndex(function(n){return 3===n}))>=0&&2===X.noneEnds[Y])return[y-1,S-1]}for(var g=function(n){var e=n[0],r=n[1],o=structuredClone(u(N,t,"f"));o[e][r]=N.turn;var i=N.getStoneArray(e,r,o,N.turn),s=i.counts.findIndex(function(n){return 3===n}),f=i.counts.findIndex(function(n){return 2===n}),a=i.counts.findIndex(function(n,t){return 3===n&&t>s});return s>=0&&1==i.noneEnds[s]&&f>=0&&2==i.noneEnds[f]?{value:[e-1,r-1]}:s>=0&&1==i.noneEnds[s]&&a>=0&&1==i.noneEnds[a]?{value:[e-1,r-1]}:void 0},N=this,A=0,O=e;A<O.length;A++){var b=g(on=O[A]);if("object"===n(b))return b.value}for(var m=0,I=e;m<I.length;m++){var w=(on=I[m])[0],x=on[1];if((V=structuredClone(u(this,t,"f")))[w][x]=this.turn,(Y=(X=this.getStoneArray(w,x,V,this.turn)).counts.findIndex(function(n){return 3===n}))>=0&&1===X.noneEnds[Y]){if(Math.random()<.5)continue;return[w-1,x-1]}}for(var G=0,C=e;G<C.length;G++){var M=(on=C[G])[0],W=on[1];if((V=structuredClone(u(this,t,"f")))[M][W]=this.getOpponentTurn(),(Y=(X=this.getStoneArray(M,W,V,this.getOpponentTurn())).counts.findIndex(function(n){return 3===n}))>=0&&2===X.noneEnds[Y])return[M-1,W-1]}for(var _=function(n){var e=n[0],r=n[1],o=structuredClone(u(j,t,"f"));o[e][r]=j.getOpponentTurn();var i=j.getStoneArray(e,r,o,j.getOpponentTurn()),s=i.counts.findIndex(function(n){return 3==n}),f=i.counts.findIndex(function(n){return 2==n}),a=i.counts.findIndex(function(n,t){return 3===n&&t>s});return s>=0&&1==i.noneEnds[s]&&f>=0&&2==i.noneEnds[f]?{value:[e-1,r-1]}:s>=0&&1==i.noneEnds[s]&&a>=0&&1==i.noneEnds[a]?{value:[e-1,r-1]}:void 0},j=this,P=0,k=e;P<k.length;P++){var L=_(on=k[P]);if("object"===n(L))return L.value}for(var F=function(n){var e=n[0],r=n[1],o=structuredClone(u(R,t,"f"));o[e][r]=R.turn;var i=R.getStoneArray(e,r,o,R.turn),s=i.counts.findIndex(function(n){return 2==n}),f=i.counts.findIndex(function(n,t){return 2==n&&t>s});if(s>=0&&2==i.noneEnds[s]&&f>=0&&2==i.noneEnds[f])return{value:[e-1,r-1]}},R=this,D=0,q=e;D<q.length;D++){var z=F(on=q[D]);if("object"===n(z))return z.value}for(var B=0,H=e;B<H.length;B++){var J=(on=H[B])[0],K=on[1];if((V=structuredClone(u(this,t,"f")))[J][K]=this.turn,(Y=(X=this.getStoneArray(J,K,V,this.turn)).counts.findIndex(function(n){return 2==n}))>=0&&2==X.noneEnds[Y])return[J-1,K-1]}for(var Q=0,U=e;Q<U.length;Q++){var V,X,Y,Z=(on=U[Q])[0],$=on[1];if((V=structuredClone(u(this,t,"f")))[Z][$]=this.getOpponentTurn(),(Y=(X=this.getStoneArray(Z,$,V,this.getOpponentTurn())).counts.findIndex(function(n){return 2==n}))>=0&&2==X.noneEnds[Y])return[Z-1,$-1]}for(var nn=function(n){var e=n[0],r=n[1],o=structuredClone(u(tn,t,"f"));o[e][r]=tn.turn;var i=tn.getStoneArray(e,r,o,tn.turn),s=i.counts.findIndex(function(n){return 1==n}),f=i.counts.findIndex(function(n,t){return 1==n&&t>s}),a=i.counts.findIndex(function(n){return 2==n});return s>=0&&2==i.noneEnds[s]&&a>=0&&1==i.noneEnds[a]?{value:[e-1,r-1]}:s>=0&&2==i.noneEnds[s]&&f>=0&&2==i.noneEnds[f]?{value:[e-1,r-1]}:void 0},tn=this,en=0,rn=e;en<rn.length;en++){var on,un=nn(on=rn[en]);if("object"===n(un))return un.value}var sn=e[Math.floor(e.length/2)];return[sn[0]-1,sn[1]-1]},s.prototype.getStoneArray=function(n,t,e,r){var o=[],u=[];return o.push(s([0,1]).count+s([0,-1]).count),u.push(s([0,1]).noneEnd+s([0,-1]).noneEnd),o.push(s([1,0]).count+s([-1,0]).count),u.push(s([1,0]).noneEnd+s([-1,0]).noneEnd),o.push(s([1,1]).count+s([-1,-1]).count),u.push(s([1,1]).noneEnd+s([-1,-1]).noneEnd),o.push(s([1,-1]).count+s([-1,1]).count),u.push(s([1,-1]).noneEnd+s([-1,1]).noneEnd),{counts:o,noneEnds:u};function s(o){var u=n,s=t,f=0,a=0;return function n(){u+=o[0];s+=o[1];if(e[u][s]!==r)return void(a=e[u][s]==i.STONE.NONE?1:0);f++;n()}(),{count:f,noneEnd:a}}},s}();exports.GomokuNarabe=s,t=new WeakMap,e=new WeakMap,r=new WeakMap;
},{"./global":"dgRt"}]},{},["dIrE"], null)
//# sourceMappingURL=https://lycoris314.github.io/GomokuNarabe-dist-/gomoku.e72752fa.js.map