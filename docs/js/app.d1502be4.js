(function(t){function e(e){for(var o,a,u=e[0],s=e[1],c=e[2],p=0,d=[];p<u.length;p++)a=u[p],r[a]&&d.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,u=1;u<n.length;u++){var s=n[u];0!==r[s]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},i=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-canvas-demo/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("CanvasDemo")],1)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Canvas Demo"),n("br"),n("canvas",{ref:"canvas",staticStyle:{cursor:"pointer",border:"1px solid blue"},attrs:{ts:t.drawCanvas,width:"500",height:"400"},on:{mousedown:t.mousedown,mouseup:t.mouseup,mousemove:t.mousemove}}),n("br"),t._v(" X: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.x,expression:"x"}],attrs:{type:"number"},domProps:{value:t.x},on:{input:function(e){e.target.composing||(t.x=e.target.value)}}}),t._v(" Y: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.y,expression:"y"}],attrs:{type:"number"},domProps:{value:t.y},on:{input:function(e){e.target.composing||(t.y=e.target.value)}}}),n("div",t._l(t.colors,(function(e){return n("button",{key:e,style:{backgroundColor:e},on:{click:function(n){t.selectedColor=e}}},[t._v(t._s(e))])})),0)])},u=[],s={name:"CanvasDemo",data:function(){return{colors:["white","black","red","blue","yellow","green"],x:0,y:0,width:0,height:0,ctx:null,updateCount:0,canvasBoundingRect:{},penDown:!1,selectedColor:"red"}},computed:{drawCanvas:function(){return this.ctx&&this.penDown&&(this.ctx.beginPath(),this.ctx.fillStyle=this.selectedColor,this.ctx.strokeStyle=this.selectedColor,this.ctx.arc(this.x,this.y,10,0,2*Math.PI,!0),this.ctx.stroke()),this.updateCount++}},methods:{mousedown:function(){this.penDown=!0},mouseup:function(){this.penDown=!1},mousemove:function(t){this.canvasBoundingRect&&(this.x=t.clientX-this.ctx.canvas.offsetLeft,this.y=t.clientY-this.ctx.canvas.offsetTop)}},mounted:function(){var t=this.$refs["canvas"];this.ctx=t.getContext("2d"),this.ctx.clearRect(0,0,this.width,this.height);var e=window.getComputedStyle(t);this.width=parseInt(e.getPropertyValue("width"),10),this.height=parseInt(e.getPropertyValue("height"),10),this.canvasBoundingRect=t.getBoundingClientRect()}},c=s,l=(n("74f7"),n("2877")),p=Object(l["a"])(c,a,u,!1,null,"a8c59a0e",null),d=p.exports,f={name:"app",components:{CanvasDemo:d}},h=f,v=(n("034f"),Object(l["a"])(h,r,i,!1,null,null,null)),m=v.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(m)}}).$mount("#app")},"5a52":function(t,e,n){},"74f7":function(t,e,n){"use strict";var o=n("5a52"),r=n.n(o);r.a},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.d1502be4.js.map