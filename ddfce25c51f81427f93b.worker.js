!function(e){function o(s){if(n[s])return n[s].exports;var t=n[s]={exports:{},id:s,loaded:!1};return e[s].call(t.exports,t,t.exports,o),t.loaded=!0,t.exports}var n={};return o.m=e,o.c=n,o.p="/",o(0)}([function(e,o){"use strict";"undefined"==typeof window&&(console.log("yay! inside the worker scope 😎"),console.log("current context is -- ",self),onmessage=function(e){var o=e.data,n=o.type,s=o.count;switch(n){case"Inc":return console.log("inc message, new count is "+(s+1)),void postMessage({count:s+1});case"Dec":return console.log("dec message, new count is "+(s-1)),void(s>0&&postMessage({count:s-1}));default:return void console.log('unknown message of type "'+n+'"')}})}]);
//# sourceMappingURL=ddfce25c51f81427f93b.worker.js.map