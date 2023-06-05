(function(){"use strict";var e={5285:function(e,o,t){var n=t(9242),a=t(3396);function r(e,o,t,n,r,s){const c=(0,a.up)("top-header"),u=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c),(0,a.Wm)(u)],64)}var s=t(7139);const c=["src"];function u(e,o,t,n,r,u){return(0,a.wg)(),(0,a.iD)("header",{class:(0,s.C_)(e.$style.header)},[(0,a._)("img",{src:e.imageSrc,alt:"logo",class:(0,s.C_)(e.$style.logo),onClick:o[0]||(o[0]=o=>e.toHomeView(e.$router))},null,10,c)],2)}t(7658);var i=(0,a.aZ)({name:"TopHeader",data(){return{imageSrc:"https://dka575ofm4ao0.cloudfront.net/pages-transactional_logos/retina/284377/pokeapi_1024.png"}},methods:{toHomeView(e){e.push("/")}}}),l={header:"header-module_header_fg9bl",logo:"header-module_logo_cQnxs"},p=t(89);const m={};m["$style"]=l;const d=(0,p.Z)(i,[["render",u],["__cssModules",m]]);var _=d,k={components:{TopHeader:_}};const h=(0,p.Z)(k,[["render",r]]);var g=h,f=t(2483);function v(e,o,t,n,r,c){const u=(0,a.up)("poke-list");return(0,a.wg)(),(0,a.iD)("div",{class:(0,s.C_)(e.$style.container)},[(0,a.Wm)(u)],2)}function y(e,o,t,n,r,c){const u=(0,a.up)("poke-card"),i=(0,a.up)("a-pagination");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",{class:(0,s.C_)(e.$style.pokeList)},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.pokemonData,(o=>((0,a.wg)(),(0,a.iD)("div",{key:o.id,class:(0,s.C_)(e.$style.card)},[(0,a.Wm)(u,{data:o},null,8,["data"])],2)))),128))],2),(0,a._)("div",{class:(0,s.C_)(e.$style.pagination)},[(0,a.Wm)(i,{current:e.current,"onUpdate:current":o[0]||(o[0]=o=>e.current=o),total:e.pageCount,pageSize:e.pageSize,"onUpdate:pageSize":o[1]||(o[1]=o=>e.pageSize=o),"show-size-changer":""},null,8,["current","total","pageSize"])],2)],64)}var D=t(4870);function C(e,o,t,n,r,c){return(0,a.wg)(),(0,a.iD)("div",{class:(0,s.C_)(e.$style.cardBody)},[(0,a._)("h1",{class:(0,s.C_)(e.$style.header)},(0,s.zw)(e.data.name),3),(0,a._)("button",{class:(0,s.C_)(e.$style.button),onClick:o[0]||(o[0]=o=>e.toPokemonPage(e.$router,e.data))},"Подробнее...",2)],2)}var P=t(65),w=(0,a.aZ)({name:"PokeCard",data(){return{}},setup(){const e=(0,P.oR)(),o=(o,t)=>{e.dispatch("moduleMain/updatePokemonData",{name:t.name,link:t.url}),o.push("/pokemon/"+t.name)};return{toPokemonPage:o}},props:{data:{type:Object,required:!0}}}),b={cardBody:"pokecard-module_cardBody_DWZXv",button:"pokecard-module_button_tuZvJ"};const $={};$["$style"]=b;const M=(0,p.Z)(w,[["render",C],["__cssModules",$]]);var z=M,H=(0,a.aZ)({name:"PokeList",components:{PokeCard:z},setup(){const e=(0,P.oR)(),{size:o,page:t}=e.state.moduleMain,n=(0,D.iH)(o),r=(0,D.iH)(t),s=(0,D.iH)([]),c=(0,D.iH)(1);(0,a.YP)([n,r],(([o,t],[a,s])=>{e.dispatch("moduleMain/setCurrentOptions",{pageSize:n.value,pageNumber:r.value}),u(o,t).catch((e=>console.error(e)))}));const u=async(e,o)=>{const t=(o-1)*e,n=await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${e}&offset=${t}`,{method:"GET",redirect:"follow"}).then((e=>e.json())).then((e=>e)).catch((e=>console.log("error",e)));s.value=n.results.map((e=>({id:Date.now(),...e}))),c.value=n.count};return u(o,t).catch((e=>console.error(e))),{pageSize:n,current:r,pokemonData:s,pageCount:c}}}),S={pokeList:"pokeList-module_pokeList_S2x2a",card:"pokeList-module_card_ULMh6",pagination:"pokeList-module_pagination_iMSdU"};const O={};O["$style"]=S;const T=(0,p.Z)(H,[["render",y],["__cssModules",O]]);var Z=T,x=(0,a.aZ)({name:"HomeView",components:{PokeList:Z}}),j={container:"homeView-module_container_soSsB"};const L={};L["$style"]=j;const W=(0,p.Z)(x,[["render",v],["__cssModules",L]]);var V=W;const B={key:0},N=(0,a._)("h1",null,"Подождите",-1),I=[N];function K(e,o,t,n,r,c){const u=(0,a.up)("poke-doc");return(0,a.wg)(),(0,a.iD)("div",{class:(0,s.C_)(e.$style.pokemonPage)},[(0,a._)("button",{onClick:o[0]||(o[0]=o=>e.toHome(e.$router)),class:(0,s.C_)(e.$style.button)}," ← На главную",2),e.currentPokemonData?((0,a.wg)(),(0,a.iD)("div",{key:1,class:(0,s.C_)(e.$style.pokemonInfo)},[(0,a.Wm)(u)],2)):((0,a.wg)(),(0,a.iD)("div",B,I))],2)}function U(e,o,t,n,r,c){return(0,a.wg)(),(0,a.iD)("div",{class:(0,s.C_)(e.$style.pokeDoc)},[(0,a._)("h1",null,(0,s.zw)(e.currentPokemonData.name),1),(0,a._)("div",{class:(0,s.C_)(e.$style.charact)},[(0,a._)("p",{class:(0,s.C_)(e.$style.pText)},"Color: "+(0,s.zw)(e.currentPokemonData.color.name),3),(0,a._)("p",{class:(0,s.C_)(e.$style.pText)},"Baby: "+(0,s.zw)(e.currentPokemonData["is_baby"]),3),(0,a._)("p",{class:(0,s.C_)(e.$style.pText)},"Mythical: "+(0,s.zw)(e.currentPokemonData["is_mythical"]),3),(0,a._)("p",{class:(0,s.C_)(e.$style.pText)},"Legendary: "+(0,s.zw)(e.currentPokemonData["is_legendary"]),3),(0,a._)("p",{class:(0,s.C_)(e.$style.pText)},"Gender rate: "+(0,s.zw)(e.currentPokemonData["gender_rate"]),3),(0,a._)("p",{class:(0,s.C_)(e.$style.pText)},"Shape: "+(0,s.zw)(e.currentPokemonData.shape.name),3),(0,a._)("p",{class:(0,s.C_)(e.$style.pText)},"Habitat: "+(0,s.zw)(e.currentPokemonData.habitat.name),3),(0,a._)("h3",{class:(0,s.C_)(e.$style.subHeader)},"Другие имена",2),(0,a._)("div",{class:(0,s.C_)(e.$style.namesContainer)},[(0,a._)("div",{class:(0,s.C_)(e.$style.charactHeader)},[(0,a._)("div",{class:(0,s.C_)(e.$style.header)},"Язык",2),(0,a._)("div",{class:(0,s.C_)(e.$style.header)},"Ссылка",2),(0,a._)("div",{class:(0,s.C_)(e.$style.header)},"Имя",2)],2)],2)],2)],2)}var Y=t(3029),E=(0,a.aZ)({name:"PokeDoc",computed:{...(0,P.rn)("moduleMain",["currentPokemonData"])},methods:{generateUuid(e){return(0,Y.Z)()}},mounted(){console.log(2)}}),R={pokeDoc:"pokeDoc-module_pokeDoc_SjaLp",charact:"pokeDoc-module_charact_KoCDm",pText:"pokeDoc-module_pText_Mrv5s",subHeader:"pokeDoc-module_subHeader_IKoWn",namesContainer:"pokeDoc-module_namesContainer_NI4p4",charactHeader:"pokeDoc-module_charactHeader_KEAXn",nameData:"pokeDoc-module_nameData_bb3o7",header:"pokeDoc-module_header_M7Bs9"};const A={};A["$style"]=R;const F=(0,p.Z)(E,[["render",U],["__cssModules",A]]);var G=F,X=(0,a.aZ)({name:"PokemonPage",components:{PokeDoc:G},methods:{toHome(e){e.push("/")}},computed:{...(0,P.rn)("moduleMain",["currentPokemonData"])},mounted(){const e=(0,P.oR)(),o=this.$route.path.split("/")[2];console.log("р"),e.dispatch("moduleMain/fetchCurrentPokemonData",o)}}),q={pokemonPage:"pokemonView-module_pokemonPage_Aj1wr",button:"pokemonView-module_button_md_io",pokemonInfo:"pokemonView-module_pokemonInfo_KYFgD"};const J={};J["$style"]=q;const Q=(0,p.Z)(X,[["render",K],["__cssModules",J]]);var ee=Q;const oe=[{path:"/",component:V},{path:"/pokemon/:name",component:ee}],te=(0,f.p7)({routes:oe,history:(0,f.PO)("/")});var ne=te;const ae={namespaced:!0,state:{currentPage:1,pokemonName:"",page:1,size:10,currentPokemonData:null},getters:{},mutations:{setPokemonData(e,o){e.pokemonName=o.name},clearPokemonData(e,o){e.pokemonName=""},changeOptions(e,o){e.page=o.pageNumber,e.size=o.pageSize},changePokemonData(e,o){e.currentPokemonData=o}},actions:{setCurrentOptions({commit:e},o){e("changeOptions",o)},updatePokemonData({commit:e},o){e("setPokemonData",o)},fetchCurrentPokemonData:async({commit:e},o)=>{const t=await fetch(`https://pokeapi.co/api/v2/pokemon-species/${o}/`).then((e=>e.json())).then((e=>e));e("changePokemonData",t)}}};var re=ae,se=(0,P.MT)({modules:{moduleMain:re}}),ce=t(7241);t(2467);const ue=(0,n.ri)(g);ue.use(se).use(ne).use(ce.ZP).mount("#app")}},o={};function t(n){var a=o[n];if(void 0!==a)return a.exports;var r=o[n]={exports:{}};return e[n].call(r.exports,r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(o,n,a,r){if(!n){var s=1/0;for(l=0;l<e.length;l++){n=e[l][0],a=e[l][1],r=e[l][2];for(var c=!0,u=0;u<n.length;u++)(!1&r||s>=r)&&Object.keys(t.O).every((function(e){return t.O[e](n[u])}))?n.splice(u--,1):(c=!1,r<s&&(s=r));if(c){e.splice(l--,1);var i=a();void 0!==i&&(o=i)}}return o}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[n,a,r]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};t.O.j=function(o){return 0===e[o]};var o=function(o,n){var a,r,s=n[0],c=n[1],u=n[2],i=0;if(s.some((function(o){return 0!==e[o]}))){for(a in c)t.o(c,a)&&(t.m[a]=c[a]);if(u)var l=u(t)}for(o&&o(n);i<s.length;i++)r=s[i],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(l)},n=self["webpackChunkvue_test_project"]=self["webpackChunkvue_test_project"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(5285)}));n=t.O(n)})();
//# sourceMappingURL=app.78ded2c3.js.map