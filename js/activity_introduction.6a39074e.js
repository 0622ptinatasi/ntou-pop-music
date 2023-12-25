(function(){"use strict";var n={4187:function(n,t,e){var o=e(9963),i=e(6252),l=e.p+"img/banner.c0169696.jpg";const r=n=>((0,i.dD)("data-v-63bb8b20"),n=n(),(0,i.Cn)(),n),a={class:"image-container"},c={class:"centered-image"},u=r((()=>(0,i._)("div",{class:"image-overlay"},null,-1)));function s(n,t,e,o,r,s){return(0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("div",c,[(0,i._)("img",{src:l,alt:"橫幅圖片",onClick:t[0]||(t[0]=(...n)=>s.goToMainPage&&s.goToMainPage(...n))})]),u])}var d={methods:{goToMainPage(){window.location.href="index.html"}}},g=e(3744);const m=(0,g.Z)(d,[["render",s],["__scopeId","data-v-63bb8b20"]]);var f=m,p=e(3577);const b={class:"word"},v={class:"location box"},h={key:0},_=["onClick"];function w(n,t,e,o,l,r){return(0,i.wg)(),(0,i.iD)("div",b,[(0,i._)("div",v,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.categories,((n,t)=>((0,i.wg)(),(0,i.iD)("div",{key:t},[(0,i.Uk)((0,p.zw)(n.name)+" ",1),r.shouldDisplayLinks(n)?((0,i.wg)(),(0,i.iD)("ul",h,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.links,((n,t)=>((0,i.wg)(),(0,i.iD)("li",{key:t},[(0,i._)("a",{href:"#",onClick:t=>r.handleLinkClick(n)},(0,p.zw)(n.label),9,_)])))),128))])):(0,i.kq)("",!0)])))),128))])])}var k={data(){return{categories:[{name:"關於我們",links:[{label:"社團介紹",url:"about_us.html"},{label:"幹部介紹",url:"about_executive.html"},{label:"器材介紹",url:"about_equipment.html"}]},{name:"公告",links:[{label:"所有公告",url:"all_announcement.html"}]},{name:"活動",links:[{label:"活動介紹",url:"activity_introduction.html"},{label:"活動日程",url:"my_calendar.html"}]},{name:"加入我們",links:[]}]}},methods:{shouldDisplayLinks(n){if("加入我們"===n.name){const t=localStorage.getItem("isLogin");if("true"===t){const t=localStorage.getItem("user");t&&(n.name=t,n.links=[{label:"搶團&個練",url:"band_use.html"},{label:"檢查相簿",url:"https://photos.app.goo.gl/R7r6JJphuTTtQDr49"},{label:"登出",url:"index.html"}])}else n.links=[{label:"登入",url:"log_in.html"}]}return n.links.length>0},handleLinkClick(n){"登出"===n.label&&(localStorage.removeItem("isLogin"),localStorage.removeItem("user")),window.location.href=n.url}}};const y=(0,g.Z)(k,[["render",w]]);var x=y;const D=(0,i._)("br",null,null,-1),j={class:"container word"},O=(0,i._)("div",{class:"row"},[(0,i._)("div",{class:"col-md-12 text-center"},[(0,i._)("h2",{style:{"font-weight":"bold"}},"活動介紹")])],-1),T=(0,i._)("br",null,null,-1),C={class:"row"},S={class:"card",style:{"margin-bottom":"20px",height:"750px"}},P={class:"card-header text-center"},I={class:"card-title",style:{"font-weight":"bold"}},L=(0,i._)("br",null,null,-1),Y=["src"],H={class:"card-body mx-auto"},M={class:"card-text"},z=(0,i._)("br",null,null,-1);function Z(n,t,e,o,l,r){return(0,i.wg)(),(0,i.iD)(i.HY,null,[D,(0,i._)("div",j,[O,T,(0,i._)("div",C,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.cards,((n,t)=>((0,i.wg)(),(0,i.iD)("div",{class:"col-9 mx-auto",key:t},[(0,i._)("div",S,[(0,i._)("div",P,[(0,i._)("h5",I,"✨"+(0,p.zw)(n.name)+"✨",1)]),L,(0,i._)("img",{src:n.image,class:"card-img-top card-img-small mx-auto img-fluid",alt:"器材圖片"},null,8,Y),(0,i._)("div",H,[(0,i._)("p",M,(0,p.zw)(n.introduction),1)])])])))),128))]),z])],64)}var K={data(){return{cards:[{name:"期初迎新",image:e(7384),introduction:"由學長姐組團表演給對熱音有興趣的學弟妹參加，其中有熱音社介紹，各樂器介紹，使學弟妹評估自己是否想加入熱音社。"},{name:"社員大會",image:e(9874),introduction:"給已確定要加入熱音社的學弟妹參加，會由幹部們帶領進行團康，使同屆更了解彼此，以及社辦各器材使用方式講解，並進行組團。"},{name:"冬季小成",image:e(8764),introduction:"主要由社員大會所組的新生團進行演出，給剛加入熱音社的學弟妹一個表演的舞台。"},{name:"春季小成",image:e(6049),introduction:"進行演出的團涵蓋了大一到大四的社員，能在驗團中脫穎而出，才有辦法在本次小成上台表演，也有機會跟別的社團合作演出噢。"},{name:"凰音祭",image:e(5299),introduction:"是海大熱音一年一度的盛事！會由外包PA幫我們控台，對於表演的團要求較為嚴格，也會邀請藝人來我們的舞台進行演出！活動當天也會有許多市集的擺攤噢。"},{name:"寒假社遊",image:e(5329),introduction:"使所有大一到大四的社員一同參與的出遊，是一個很好與其他社員認識的機會，能在熱音社認識更多厲害的人噢。"}]}}};const R=(0,g.Z)(K,[["render",Z]]);var q=R;const A=n=>((0,i.dD)("data-v-6fe6989b"),n=n(),(0,i.Cn)(),n),E=A((()=>(0,i._)("br",null,null,-1))),J=A((()=>(0,i._)("br",null,null,-1))),U=A((()=>(0,i._)("br",null,null,-1))),B=A((()=>(0,i._)("div",{class:"footer"},[(0,i._)("div",{class:"container text-center"},[(0,i._)("p",null,"Designed By NTOU CSE Tsai Pei Ying © 2023 All Rights Reserved.")])],-1)));function F(n,t){return(0,i.wg)(),(0,i.iD)(i.HY,null,[E,J,U,B],64)}const N={},Q=(0,g.Z)(N,[["render",F],["__scopeId","data-v-6fe6989b"]]);var G=Q;(0,o.ri)(f).mount("#banner"),(0,o.ri)(x).mount("#drop_down"),(0,o.ri)(q).mount("#introduction"),(0,o.ri)(G).mount("#foot")},7384:function(n,t,e){n.exports=e.p+"img/act01.21f7de9f.jpg"},9874:function(n,t,e){n.exports=e.p+"img/act02.d04cba7e.jpg"},8764:function(n,t,e){n.exports=e.p+"img/act03.59d37a10.jpeg"},6049:function(n,t,e){n.exports=e.p+"img/act04.574b8c5e.jpg"},5299:function(n,t,e){n.exports=e.p+"img/act05.931e82ef.jpg"},5329:function(n,t,e){n.exports=e.p+"img/act06.3f49942c.jpg"}},t={};function e(o){var i=t[o];if(void 0!==i)return i.exports;var l=t[o]={exports:{}};return n[o].call(l.exports,l,l.exports,e),l.exports}e.m=n,function(){var n=[];e.O=function(t,o,i,l){if(!o){var r=1/0;for(s=0;s<n.length;s++){o=n[s][0],i=n[s][1],l=n[s][2];for(var a=!0,c=0;c<o.length;c++)(!1&l||r>=l)&&Object.keys(e.O).every((function(n){return e.O[n](o[c])}))?o.splice(c--,1):(a=!1,l<r&&(r=l));if(a){n.splice(s--,1);var u=i();void 0!==u&&(t=u)}}return t}l=l||0;for(var s=n.length;s>0&&n[s-1][2]>l;s--)n[s]=n[s-1];n[s]=[o,i,l]}}(),function(){e.d=function(n,t){for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){e.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){e.j=876}(),function(){e.p="/ntou-pop-music/"}(),function(){var n={876:0};e.O.j=function(t){return 0===n[t]};var t=function(t,o){var i,l,r=o[0],a=o[1],c=o[2],u=0;if(r.some((function(t){return 0!==n[t]}))){for(i in a)e.o(a,i)&&(e.m[i]=a[i]);if(c)var s=c(e)}for(t&&t(o);u<r.length;u++)l=r[u],e.o(n,l)&&n[l]&&n[l][0](),n[l]=0;return e.O(s)},o=self["webpackChunkntou_pop_music"]=self["webpackChunkntou_pop_music"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(4187)}));o=e.O(o)})();
//# sourceMappingURL=activity_introduction.6a39074e.js.map