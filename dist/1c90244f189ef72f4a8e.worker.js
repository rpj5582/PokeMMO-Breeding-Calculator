!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(){function e(e,t,n){this.gender="Genderless",this.nature="Unknown Nature",this.stats=[0,0,0,0,0,0],this.stats=e,this.gender=t||this.gender,this.nature=n||this.nature}return e.copy=function(t){return new e(t.stats,t.gender,t.nature)},Object.defineProperty(e.prototype,"rank",{get:function(){return this.stats.filter(function(e){return e>0}).length-1},enumerable:!0,configurable:!0}),e.prototype.equals=function(e){var t=this.stats.filter(function(e){return e>0}),n=e.stats.filter(function(e){return e>0}),r=!0;if(t.length===n.length){for(var o=0;o<this.stats.length;o++)if(t[o]!=n[o]){r=!1;break}if(r)return this.gender===e.gender&&this.nature===e.nature}return!1},e.prototype.findPokemonInStartingPool=function(e){for(var t=0;t<e.length;t++)if(this.equals(e[t]))return t;return-1},e}(),o=function(){function e(e,t,n,r){this.defineGender=!1,this.pokemon=e,this.parent=t,this.left=n,this.right=r}return e.copy=function(t){var n=new e(t.pokemon,t.parent,t.left,t.right);return n.defineGender=t.defineGender,n},e.prototype.calculateNodeCost=function(e){if(!this.left||!this.right)return 0;if(this.left.pokemon.gender===this.right.pokemon.gender&&"Genderless"!=this.left.pokemon.gender)return console.log("Error calculating cost: invalid pokemon combination "+this.left+" and "+this.right+" for pokemon "+this.pokemon),0;var t=this.pokemon.findPokemonInStartingPool(e);if(t>-1)return console.log("Saved money by using the following pokemon from starting pool."),console.log(e[t]),e.splice(t,1),0;if(this.parent){var n=this.parent.left===this?this.parent.right:this.parent.left;n&&!n.defineGender&&(this.defineGender=!0)}var r=2e4;return this.defineGender&&(r+=5e3),r+this.left.calculateNodeCost(e)+this.right.calculateNodeCost(e)},e}(),i=function(){function e(){this.trees=[],this.bestTree=null}return e.copy=function(t){var n=new e;return n.trees=t.trees,n.bestTree=t.bestTree,n},e.prototype.decomposePokemon=function(e,t){var n=[],i=Math.max(e.pokemon.rank,0);if(0!=i){l(e.pokemon.stats.filter(function(e){return e>0}),i,0,n);var s=[];l(n,2,0,s);for(var u=[],a=0;a<s.length;a++){var f=void 0,c=void 0;if(t?(f=new o(e.pokemon,e.parent,null,null),"Genderless"!=e.pokemon.gender&&(c=new o(e.pokemon,e.parent,null,null))):"Male"===e.pokemon.gender?(f=e,c=new o(e.pokemon,e.parent,null,null)):"Female"===e.pokemon.gender?(f=new o(e.pokemon,e.parent,null,null),c=e):f=e,c){var h=new r(s[a][0],"Male"),d=new r(s[a][1],"Female");f.left=new o(h,f,null,null),f.right=new o(d,f,null,null),u.push(f),this.decomposePokemon(f.left,!1),this.decomposePokemon(f.right,!1),h=new r(s[a][0],"Female"),d=new r(s[a][1],"Male"),c.left=new o(h,c,null,null),c.right=new o(d,c,null,null),u.push(c),this.decomposePokemon(c.left,!1),this.decomposePokemon(c.right,!1)}else{h=new r(s[a][0],"Genderless"),d=new r(s[a][1],"Genderless");f.left=new o(h,f,null,null),f.right=new o(d,f,null,null),u.push(f),this.decomposePokemon(f.left,!1),this.decomposePokemon(f.right,!1)}}this.trees=u}},e.prototype.calculateBestTree=function(e){for(var t=1/0,n=-1,r=0;r<this.trees.length;r++){var o=e.slice(),i=this.trees[r].calculateNodeCost(o);i<t&&(t=i,n=r)}return console.log("Lowest cost tree index: "+n),this.bestTree={tree:this.trees[n],cost:t},this.bestTree},e.prototype.getTree=function(e){return this.trees[e]},e}();function l(e,t,n,r,o,i){if(void 0===o&&(o=t),void 0===i&&((i=[]).length=o),0!==t)for(var s=n;s<=e.length-t;s++)i[i.length-t]=e[s],l(e,t-1,s+1,r,o,i);else r.push(i.slice())}var s=self;function u(e,t,n){var l=function(e,t,n){for(var o=i.copy(e),l=r.copy(t),s=[],u=0;u<n.length;u++){var a=n[u],f=r.copy(a);s.push(f)}return{treeFinder:o,desiredPokemon:l,startingPokemonPool:s}}(e,t,n),u=new o(l.desiredPokemon,null,null,null);l.treeFinder.decomposePokemon(u,!0);var a=l.treeFinder.calculateBestTree(l.startingPokemonPool);s.postMessage({treeFinder:l.treeFinder,bestTree:a})}s.onmessage=function(e){u(e.data.treeFinder,e.data.desiredPokemon,e.data.startingPokemonPool)}}]);
//# sourceMappingURL=1c90244f189ef72f4a8e.worker.js.map