(function(){"use strict";var e={6745:function(e,t,n){var i=n(9963),l=n(6252),o=n.p+"img/banner.c0169696.jpg";const a=e=>((0,l.dD)("data-v-63bb8b20"),e=e(),(0,l.Cn)(),e),r={class:"image-container"},c={class:"centered-image"},s=a((()=>(0,l._)("div",{class:"image-overlay"},null,-1)));function u(e,t,n,i,a,u){return(0,l.wg)(),(0,l.iD)("div",r,[(0,l._)("div",c,[(0,l._)("img",{src:o,alt:"橫幅圖片",onClick:t[0]||(t[0]=(...e)=>u.goToMainPage&&u.goToMainPage(...e))})]),s])}var d={methods:{goToMainPage(){window.location.href="index.html"}}},g=n(3744);const b=(0,g.Z)(d,[["render",u],["__scopeId","data-v-63bb8b20"]]);var h=b,f=n(3577);const v={class:"word"},_={class:"location box"},m={key:0},p=["onClick"];function w(e,t,n,i,o,a){return(0,l.wg)(),(0,l.iD)("div",v,[(0,l._)("div",_,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.categories,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t},[(0,l.Uk)((0,f.zw)(e.name)+" ",1),a.shouldDisplayLinks(e)?((0,l.wg)(),(0,l.iD)("ul",m,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.links,((e,t)=>((0,l.wg)(),(0,l.iD)("li",{key:t},[(0,l._)("a",{href:"#",onClick:t=>a.handleLinkClick(e)},(0,f.zw)(e.label),9,p)])))),128))])):(0,l.kq)("",!0)])))),128))])])}var y={data(){return{categories:[{name:"關於我們",links:[{label:"社團介紹",url:"about_us.html"},{label:"幹部介紹",url:"about_executive.html"},{label:"器材介紹",url:"about_equipment.html"}]},{name:"公告",links:[{label:"所有公告",url:"all_announcement.html"}]},{name:"活動",links:[{label:"活動介紹",url:"activity_introduction.html"},{label:"活動日程",url:"my_calendar.html"}]},{name:"加入我們",links:[]}]}},methods:{shouldDisplayLinks(e){if("加入我們"===e.name){const t=localStorage.getItem("isLogin");if("true"===t){const t=localStorage.getItem("user");t&&(e.name=t,e.links=[{label:"搶團&個練",url:"band_use.html"},{label:"檢查相簿",url:"https://photos.app.goo.gl/R7r6JJphuTTtQDr49"},{label:"登出",url:"index.html"}])}else e.links=[{label:"登入",url:"log_in.html"}]}return e.links.length>0},handleLinkClick(e){"登出"===e.label&&(localStorage.removeItem("isLogin"),localStorage.removeItem("user")),window.location.href=e.url}}};const k=(0,g.Z)(y,[["render",w]]);var D=k;const P=(0,l._)("br",null,null,-1),z={class:"container word"},x=(0,l._)("div",{class:"row"},[(0,l._)("div",{class:"col-md-12 text-center"},[(0,l._)("h2",{style:{"font-weight":"bold"}},"所有公告")])],-1),S=(0,l._)("br",null,null,-1),O={class:"row"},T={class:"accordion",id:"bulletinAccordion"},C={class:"accordion-item"},j=["id"],I=["data-bs-target","aria-controls"],H={class:"row"},L={class:"col-md-2"},M={class:"text-secondary"},Y={class:"col-md-2"},Z={class:"text-secondary"},B={class:"col-md-2"},K={class:"text-secondary"},R={class:"col-md-3"},q={class:"text-secondary"},A=["id","aria-labelledby"],E={class:"accordion-body",style:{"white-space":"pre-line"}},J=["innerHTML"],U=(0,l._)("br",null,null,-1),F={"aria-label":"Page navigation",class:"custom-pagination"},N={class:"pagination justify-content-center"},Q=["onClick"];function G(e,t,n,i,o,a){return(0,l.wg)(),(0,l.iD)(l.HY,null,[P,(0,l._)("div",z,[x,S,(0,l._)("div",O,[(0,l._)("div",T,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.cut,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e.bulletin_ID},[(0,l._)("div",C,[(0,l._)("div",{class:"accordion-header",id:e.headid},[(0,l._)("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":e.actbody,"aria-expanded":"true","aria-controls":e.bodyid},[(0,l._)("strong",null,(0,f.zw)(e.title),1)],8,I),(0,l._)("div",H,[(0,l._)("div",L,[(0,l._)("div",M,"     "+(0,f.zw)(e.name),1)]),(0,l._)("div",Y,[(0,l._)("div",Z," 發布者："+(0,f.zw)(e.sender),1)]),(0,l._)("div",B,[(0,l._)("div",K," 對象："+(0,f.zw)(e.receiver),1)]),(0,l._)("div",R,[(0,l._)("div",q,(0,f.zw)(e.time),1)])])],8,j),(0,l._)("div",{id:e.bodyid,class:"accordion-collapse collapse","aria-labelledby":e.headid,"data-bs-parent":"#bulletin"},[(0,l._)("div",E,[(0,l._)("div",{innerHTML:e.content.replace(/\\n/g,"<br>")},null,8,J)])],8,A)])])))),128))])]),U,(0,l._)("nav",F,[(0,l._)("ul",N,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.totPage,(t=>((0,l.wg)(),(0,l.iD)("li",{key:t,class:(0,f.C_)(["page-item",{active:t===e.curPage}])},[(0,l._)("a",{class:"page-link",onClick:e=>a.slice(t)},(0,f.zw)(t),9,Q)],2)))),128))])])])],64)}var V=n(9423),W=(n(8702),{data:function(){return{bulletin_info:[],totBulletin:0,pageSize:10,curPage:1,cut:[],totPage:0,authorization:0}},created:function(){V.Z.get("https://websiteprogrammingteam31.000webhostapp.com/announcement.php").then((e=>{this.bulletin_info=e.data;for(let t of this.bulletin_info)t.headid="head"+t.bulletin_ID,t.bodyid="body"+t.bulletin_ID,t.actbody="#"+t.bodyid,this.totBulletin+=1;this.slice(1),this.totPage=Math.ceil(this.totBulletin/this.pageSize),console.log(this.totPage),this.authorization=window.sessionStorage.getItem("authorization"),console.log(this.authorization)}))},methods:{slice:function(e){window.scrollTo(0,0),console.log(e),this.curPage=e,this.cut=this.bulletin_info.slice(this.curPage*this.pageSize-this.pageSize,this.curPage*this.pageSize)},edit:function(){location.href="../bulletin_edit/bulletin_edit.html"}},mounted:function(){}});const X=(0,g.Z)(W,[["render",G]]);var $=X;const ee=e=>((0,l.dD)("data-v-6fe6989b"),e=e(),(0,l.Cn)(),e),te=ee((()=>(0,l._)("br",null,null,-1))),ne=ee((()=>(0,l._)("br",null,null,-1))),ie=ee((()=>(0,l._)("br",null,null,-1))),le=ee((()=>(0,l._)("div",{class:"footer"},[(0,l._)("div",{class:"container text-center"},[(0,l._)("p",null,"Designed By NTOU CSE Tsai Pei Ying © 2023 All Rights Reserved.")])],-1)));function oe(e,t){return(0,l.wg)(),(0,l.iD)(l.HY,null,[te,ne,ie,le],64)}const ae={},re=(0,g.Z)(ae,[["render",oe],["__scopeId","data-v-6fe6989b"]]);var ce=re;(0,i.ri)(h).mount("#banner"),(0,i.ri)(D).mount("#drop_down"),(0,i.ri)($).mount("#all_announcement"),(0,i.ri)(ce).mount("#foot")}},t={};function n(i){var l=t[i];if(void 0!==l)return l.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,i,l,o){if(!i){var a=1/0;for(u=0;u<e.length;u++){i=e[u][0],l=e[u][1],o=e[u][2];for(var r=!0,c=0;c<i.length;c++)(!1&o||a>=o)&&Object.keys(n.O).every((function(e){return n.O[e](i[c])}))?i.splice(c--,1):(r=!1,o<a&&(a=o));if(r){e.splice(u--,1);var s=l();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[i,l,o]}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.j=265}(),function(){n.p="/ntou-pop-music/"}(),function(){var e={265:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var l,o,a=i[0],r=i[1],c=i[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(l in r)n.o(r,l)&&(n.m[l]=r[l]);if(c)var u=c(n)}for(t&&t(i);s<a.length;s++)o=a[s],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},i=self["webpackChunkntou_pop_music"]=self["webpackChunkntou_pop_music"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(6745)}));i=n.O(i)})();
//# sourceMappingURL=all_announcement.6eff6764.js.map