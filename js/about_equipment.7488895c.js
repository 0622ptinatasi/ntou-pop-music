(function(){"use strict";var e={1281:function(e,n,t){var i=t(9963),o=t(6252),a=t.p+"img/banner.c0169696.jpg";const l=e=>((0,o.dD)("data-v-63bb8b20"),e=e(),(0,o.Cn)(),e),r={class:"image-container"},c={class:"centered-image"},u=l((()=>(0,o._)("div",{class:"image-overlay"},null,-1)));function s(e,n,t,i,l,s){return(0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("div",c,[(0,o._)("img",{src:a,alt:"橫幅圖片",onClick:n[0]||(n[0]=(...e)=>s.goToMainPage&&s.goToMainPage(...e))})]),u])}var m={methods:{goToMainPage(){window.location.href="index.html"}}},g=t(3744);const p=(0,g.Z)(m,[["render",s],["__scopeId","data-v-63bb8b20"]]);var d=p,f=t(3577);const b={class:"word"},_={class:"location box"},v={key:0},h=["onClick"];function w(e,n,t,i,a,l){return(0,o.wg)(),(0,o.iD)("div",b,[(0,o._)("div",_,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.categories,((e,n)=>((0,o.wg)(),(0,o.iD)("div",{key:n},[(0,o.Uk)((0,f.zw)(e.name)+" ",1),l.shouldDisplayLinks(e)?((0,o.wg)(),(0,o.iD)("ul",v,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.links,((e,n)=>((0,o.wg)(),(0,o.iD)("li",{key:n},[(0,o._)("a",{href:"#",onClick:n=>l.handleLinkClick(e)},(0,f.zw)(e.label),9,h)])))),128))])):(0,o.kq)("",!0)])))),128))])])}var x={data(){return{categories:[{name:"關於我們",links:[{label:"社團介紹",url:"about_us.html"},{label:"幹部介紹",url:"about_executive.html"},{label:"器材介紹",url:"about_equipment.html"}]},{name:"公告",links:[{label:"所有公告",url:"all_announcement.html"}]},{name:"活動",links:[{label:"活動介紹",url:"activity_introduction.html"},{label:"活動日程",url:"my_calendar.html"}]},{name:"加入我們",links:[]}]}},methods:{shouldDisplayLinks(e){if("加入我們"===e.name){const n=localStorage.getItem("isLogin");if("true"===n){const n=localStorage.getItem("user");n&&(e.name=n,e.links=[{label:"搶團&個練",url:"band_use.html"},{label:"檢查相簿",url:"https://photos.app.goo.gl/R7r6JJphuTTtQDr49"},{label:"登出",url:"index.html"}])}else e.links=[{label:"登入",url:"log_in.html"}]}return e.links.length>0},handleLinkClick(e){"登出"===e.label&&(localStorage.removeItem("isLogin"),localStorage.removeItem("user")),window.location.href=e.url}}};const k=(0,g.Z)(x,[["render",w]]);var y=k;const j={class:"container word"},A=(0,o._)("div",{class:"row"},[(0,o._)("div",{class:"col-md-12 text-center"},[(0,o._)("h2",{style:{"font-weight":"bold"}},"器材介紹")])],-1),S=(0,o._)("br",null,null,-1),q={class:"row"},D={class:"card",style:{"margin-bottom":"20px",height:"400px"}},O={class:"card-header text-center"},C={class:"card-title",style:{"font-weight":"bold"}},M=(0,o._)("br",null,null,-1),H=["src"];function R(e,n,t,i,a,l){return(0,o.wg)(),(0,o.iD)("div",j,[A,S,(0,o._)("div",q,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.cards,((e,n)=>((0,o.wg)(),(0,o.iD)("div",{class:"col-md-5 mx-auto",key:n},[(0,o._)("div",D,[(0,o._)("div",O,[(0,o._)("h5",C,(0,f.zw)(e.name),1)]),M,(0,o._)("img",{src:e.image,class:"card-img-top card-img-small mx-auto img-fluid",alt:"器材圖片"},null,8,H)])])))),128))])])}var T={data(){return{cards:[{name:"Marshall DSL100H",image:t(9365)},{name:"VOX AC30",image:t(5923)},{name:"Fender Frontman 212R",image:t(9698)},{name:"Marshall MG102CFX",image:t(6178)},{name:"WARWICK WA600",image:t(8467)},{name:"Albion ABH300",image:t(3742)},{name:"Roland VR-09",image:t(4182)},{name:"YAMAHA CP-4",image:t(4292)},{name:"KORG KROSS",image:t(4292)},{name:"Roland KC-400",image:t(2503)},{name:"TAMA 5pcs套鼓",image:t(2635)},{name:"YAMAHA 5pcs套鼓",image:t(1966)},{name:"YAMAHA EMX5016CF",image:t(7604)},{name:"YAMAHA P7000S",image:t(5835)},{name:"B52 US-3000",image:t(5835)},{name:"SHURE SM57",image:t(1179)},{name:"SHURE SM58",image:t(5889)}]}}};const P=(0,g.Z)(T,[["render",R]]);var Y=P;const I=e=>((0,o.dD)("data-v-6fe6989b"),e=e(),(0,o.Cn)(),e),K=I((()=>(0,o._)("br",null,null,-1))),L=I((()=>(0,o._)("br",null,null,-1))),E=I((()=>(0,o._)("br",null,null,-1))),F=I((()=>(0,o._)("div",{class:"footer"},[(0,o._)("div",{class:"container text-center"},[(0,o._)("p",null,"Designed By NTOU CSE Tsai Pei Ying © 2023 All Rights Reserved.")])],-1)));function U(e,n){return(0,o.wg)(),(0,o.iD)(o.HY,null,[K,L,E,F],64)}const Z={},z=(0,g.Z)(Z,[["render",U],["__scopeId","data-v-6fe6989b"]]);var B=z;(0,i.ri)(d).mount("#banner"),(0,i.ri)(y).mount("#drop_down"),(0,i.ri)(Y).mount("#equipment"),(0,i.ri)(B).mount("#foot")},9365:function(e,n,t){e.exports=t.p+"img/eq_01.b90a7e9e.jpg"},5923:function(e,n,t){e.exports=t.p+"img/eq_02.a849c223.jpg"},9698:function(e,n,t){e.exports=t.p+"img/eq_03.e1fb479e.jpg"},6178:function(e,n,t){e.exports=t.p+"img/eq_04.931093b8.jpg"},8467:function(e,n,t){e.exports=t.p+"img/eq_05.3fd3e80a.jpg"},3742:function(e,n,t){e.exports=t.p+"img/eq_06.30a68b72.jpg"},4182:function(e,n,t){e.exports=t.p+"img/eq_07.5b242c01.jpg"},4292:function(e,n,t){e.exports=t.p+"img/eq_0809.af780721.jpg"},2503:function(e,n,t){e.exports=t.p+"img/eq_10.d73e31e3.jpg"},2635:function(e,n,t){e.exports=t.p+"img/eq_11.99f47649.jpg"},1966:function(e,n,t){e.exports=t.p+"img/eq_12.5734e4d0.jpg"},7604:function(e,n,t){e.exports=t.p+"img/eq_13.e8e08bad.jpg"},5835:function(e,n,t){e.exports=t.p+"img/eq_1415.0802fb16.jpg"},1179:function(e,n,t){e.exports=t.p+"img/eq_16.6e59e230.jpg"},5889:function(e,n,t){e.exports=t.p+"img/eq_17.45772c21.jpg"}},n={};function t(i){var o=n[i];if(void 0!==o)return o.exports;var a=n[i]={exports:{}};return e[i].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,i,o,a){if(!i){var l=1/0;for(s=0;s<e.length;s++){i=e[s][0],o=e[s][1],a=e[s][2];for(var r=!0,c=0;c<i.length;c++)(!1&a||l>=a)&&Object.keys(t.O).every((function(e){return t.O[e](i[c])}))?i.splice(c--,1):(r=!1,a<l&&(l=a));if(r){e.splice(s--,1);var u=o();void 0!==u&&(n=u)}}return n}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[i,o,a]}}(),function(){t.d=function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.j=449}(),function(){t.p="/ntou-pop-music/"}(),function(){var e={449:0};t.O.j=function(n){return 0===e[n]};var n=function(n,i){var o,a,l=i[0],r=i[1],c=i[2],u=0;if(l.some((function(n){return 0!==e[n]}))){for(o in r)t.o(r,o)&&(t.m[o]=r[o]);if(c)var s=c(t)}for(n&&n(i);u<l.length;u++)a=l[u],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(s)},i=self["webpackChunkntou_pop_music"]=self["webpackChunkntou_pop_music"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(1281)}));i=t.O(i)})();
//# sourceMappingURL=about_equipment.7488895c.js.map