(function(){"use strict";var n={5963:function(n,e,t){var l=t(9963),o=t(6252),r=t.p+"img/banner.c0169696.jpg";const i=n=>((0,o.dD)("data-v-63bb8b20"),n=n(),(0,o.Cn)(),n),a={class:"image-container"},c={class:"centered-image"},u=i((()=>(0,o._)("div",{class:"image-overlay"},null,-1)));function s(n,e,t,l,i,s){return(0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("div",c,[(0,o._)("img",{src:r,alt:"橫幅圖片",onClick:e[0]||(e[0]=(...n)=>s.goToMainPage&&s.goToMainPage(...n))})]),u])}var d={methods:{goToMainPage(){window.location.href="index.html"}}},f=t(3744);const b=(0,f.Z)(d,[["render",s],["__scopeId","data-v-63bb8b20"]]);var g=b,m=t(3577);const h={class:"word"},v={class:"location box"},p={key:0},_=["onClick"];function w(n,e,t,l,r,i){return(0,o.wg)(),(0,o.iD)("div",h,[(0,o._)("div",v,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.categories,((n,e)=>((0,o.wg)(),(0,o.iD)("div",{key:e},[(0,o.Uk)((0,m.zw)(n.name)+" ",1),i.shouldDisplayLinks(n)?((0,o.wg)(),(0,o.iD)("ul",p,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.links,((n,e)=>((0,o.wg)(),(0,o.iD)("li",{key:e},[(0,o._)("a",{href:"#",onClick:e=>i.handleLinkClick(n)},(0,m.zw)(n.label),9,_)])))),128))])):(0,o.kq)("",!0)])))),128))])])}var k={data(){return{categories:[{name:"關於我們",links:[{label:"社團介紹",url:"about_us.html"},{label:"幹部介紹",url:"about_executive.html"},{label:"器材介紹",url:"about_equipment.html"}]},{name:"公告",links:[{label:"所有公告",url:"all_announcement.html"}]},{name:"活動",links:[{label:"活動介紹",url:"activity_introduction.html"},{label:"活動日程",url:"my_calendar.html"}]},{name:"加入我們",links:[]}]}},methods:{shouldDisplayLinks(n){if("加入我們"===n.name){const e=localStorage.getItem("isLogin");if("true"===e){const e=localStorage.getItem("user");e&&(n.name=e,n.links=[{label:"搶團&個練",url:"band_use.html"},{label:"檢查相簿",url:"https://photos.app.goo.gl/R7r6JJphuTTtQDr49"},{label:"登出",url:"index.html"}])}else n.links=[{label:"登入",url:"log_in.html"}]}return n.links.length>0},handleLinkClick(n){"登出"===n.label&&(localStorage.removeItem("isLogin"),localStorage.removeItem("user")),window.location.href=n.url}}};const y=(0,f.Z)(k,[["render",w]]);var D=y;const O=(0,o._)("br",null,null,-1),T=(0,o._)("div",{class:"container word"},[(0,o._)("div",{class:"row"},[(0,o._)("div",{class:"col-md-12 text-center"},[(0,o._)("h2",{style:{"font-weight":"bold"}},"行事曆")])]),(0,o._)("br"),(0,o._)("div",{class:"row"},[(0,o._)("iframe",{src:"https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23B39DDB&ctz=Asia%2FTaipei&title=%E7%86%B1%E9%9F%B3%E8%A1%8C%E4%BA%8B%E6%9B%86&src=NTYxOGQ4MzkyN2YyZjRjZjIzNGNkZWU3ODM3OTYyYjZjYTRjYzUyODVkNmI2NzEwOTc1NzViMTA0NDYyMTQ0MEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23B39DDB",style:{"border-width":"0"},width:"800",height:"600",frameborder:"0",scrolling:"no"})]),(0,o._)("br")],-1);function j(n,e){return(0,o.wg)(),(0,o.iD)(o.HY,null,[O,T],64)}const Y={},x=(0,f.Z)(Y,[["render",j]]);var C=x;const B=n=>((0,o.dD)("data-v-6fe6989b"),n=n(),(0,o.Cn)(),n),M=B((()=>(0,o._)("br",null,null,-1))),S=B((()=>(0,o._)("br",null,null,-1))),E=B((()=>(0,o._)("br",null,null,-1))),N=B((()=>(0,o._)("div",{class:"footer"},[(0,o._)("div",{class:"container text-center"},[(0,o._)("p",null,"Designed By NTOU CSE Tsai Pei Ying © 2023 All Rights Reserved.")])],-1)));function z(n,e){return(0,o.wg)(),(0,o.iD)(o.HY,null,[M,S,E,N],64)}const I={},P=(0,f.Z)(I,[["render",z],["__scopeId","data-v-6fe6989b"]]);var Z=P;(0,l.ri)(g).mount("#banner"),(0,l.ri)(D).mount("#drop_down"),(0,l.ri)(C).mount("#my_calendar"),(0,l.ri)(Z).mount("#foot")}},e={};function t(l){var o=e[l];if(void 0!==o)return o.exports;var r=e[l]={exports:{}};return n[l].call(r.exports,r,r.exports,t),r.exports}t.m=n,function(){var n=[];t.O=function(e,l,o,r){if(!l){var i=1/0;for(s=0;s<n.length;s++){l=n[s][0],o=n[s][1],r=n[s][2];for(var a=!0,c=0;c<l.length;c++)(!1&r||i>=r)&&Object.keys(t.O).every((function(n){return t.O[n](l[c])}))?l.splice(c--,1):(a=!1,r<i&&(i=r));if(a){n.splice(s--,1);var u=o();void 0!==u&&(e=u)}}return e}r=r||0;for(var s=n.length;s>0&&n[s-1][2]>r;s--)n[s]=n[s-1];n[s]=[l,o,r]}}(),function(){t.d=function(n,e){for(var l in e)t.o(e,l)&&!t.o(n,l)&&Object.defineProperty(n,l,{enumerable:!0,get:e[l]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){t.j=548}(),function(){t.p="/ntou-pop-music/"}(),function(){var n={548:0};t.O.j=function(e){return 0===n[e]};var e=function(e,l){var o,r,i=l[0],a=l[1],c=l[2],u=0;if(i.some((function(e){return 0!==n[e]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var s=c(t)}for(e&&e(l);u<i.length;u++)r=i[u],t.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return t.O(s)},l=self["webpackChunkntou_pop_music"]=self["webpackChunkntou_pop_music"]||[];l.forEach(e.bind(null,0)),l.push=e.bind(null,l.push.bind(l))}();var l=t.O(void 0,[998],(function(){return t(5963)}));l=t.O(l)})();
//# sourceMappingURL=calendar.c7fa9dc0.js.map