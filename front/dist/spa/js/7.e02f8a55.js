(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"2c2c":function(s,t,a){"use strict";a("714c")},"42a8":function(s,t,a){"use strict";a("d17d")},"714c":function(s,t,a){},"9aeb":function(s,t,a){"use strict";a.r(t);var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"row full-width justify-around"},[s.$q.screen.lt.md?a("div",{staticClass:"row col-12 justify-around"},[a("q-tabs",{staticClass:"col-11 q-mt-md",model:{value:s.tab,callback:function(t){s.tab=t},expression:"tab"}},[a("q-tab",{staticClass:"col-6",attrs:{name:"users"}},[a("p",{staticClass:"title-text"},[s._v("Usuarios")])]),a("q-tab",{staticClass:"col-6",attrs:{name:"banned"}},[a("p",{staticClass:"title-text"},[s._v("Baneados")])])],1)],1):s._e(),a("q-tab-panels",{staticClass:"row col-12 justify-around",model:{value:s.tab,callback:function(t){s.tab=t},expression:"tab"}},[a("q-tab-panel",{staticClass:"row col-12 justify-around",attrs:{name:"users"}},[a("UsersTable",{staticClass:"col-md-5 col-sm-11 q-mt-lg"}),s.$q.screen.gt.sm?a("div",{staticClass:"row col-md-5 col-sm-11"},[a("BannedUsers",{staticClass:"col-12 q-mt-lg"})],1):s._e()],1),a("q-tab-panel",{staticClass:"row col-12 justify-around",attrs:{name:"banned"}},[a("BannedUsers",{staticClass:"col-md-5 col-sm-11 q-mt-lg"})],1)],1)],1)},n=[],c=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"row justify-around"},[s.$q.screen.gt.sm?a("p",{staticClass:"col-12 title-text q-mt-lg"},[s._v("Usuarios")]):s._e(),a("div",{staticClass:"row col-12 justify-start"},[a("UserSearchBar",{staticClass:"col-md-5 col-xs-11"})],1),s.$q.screen.gt.sm?a("div",{staticClass:"row col-12 justify-around table-header q-mt-xl q-py-sm"},[a("div",{staticClass:"col-2 table-title-font q-pl-sm"},[s._v("Cédula")]),a("div",{staticClass:"col-4 table-title-font"},[s._v("Nombre")]),a("div",{staticClass:"col-5"})]):s._e(),a("div",{staticClass:"row col-12 justify-start table-body q-mt-lg"},s._l(s.users,(function(t){return a("UsersTableInstance",s._b({key:t.id,staticClass:"col-12"},"UsersTableInstance",t,!1))})),1)])},l=[],o=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("p",{staticClass:"col-12 subtitle-text"},[s._v("Buscar usuario")]),a("q-input",{staticClass:"user-searchbar",attrs:{dense:"",borderless:"",placeholder:"Buscar..."},scopedSlots:s._u([{key:"append",fn:function(){return[""===s.searchContent?a("q-icon",{staticClass:"us-sb-icon",attrs:{name:"fas fa-search"}}):a("q-icon",{staticClass:"us-sb-icon cursor-pointer",attrs:{name:"fas fa-times"},on:{click:function(t){s.searchContent=""}}})]},proxy:!0}]),model:{value:s.searchContent,callback:function(t){s.searchContent=t},expression:"searchContent"}})],1)},r=[],i={name:"UserSearchBar",data(){return{searchContent:""}}},d=i,u=(a("d89f"),a("2877")),m=a("27f9"),p=a("0016"),b=a("eebe"),f=a.n(b),C=Object(u["a"])(d,o,r,!1,null,"6ee8ddfb",null),v=C.exports;f()(C,"components",{QInput:m["a"],QIcon:p["a"]});var q=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"row q-py-md justify-around q-px-sm"},[s.$q.screen.gt.sm?a("div",{staticClass:"row col-md-6 col-xs-5"},[a("p",{staticClass:"col-md-4 col-xs-12 instance-font",attrs:{id:"UTI-p1"}},[s._v(s._s(s.id))]),a("p",{staticClass:"col-md-8 col-xs-12 instance-font",attrs:{id:"UTI-p2"}},[s._v(s._s(s.name))])]):a("div",{staticClass:"row col-md-6 col-xs-5"},[a("p",{staticClass:"col-md-8 col-xs-12 instance-font q-m-none",attrs:{id:"UTI-p3"}},[s._v(s._s(s.name))]),a("p",{staticClass:"col-md-4 col-xs-12 instance-font-light",attrs:{id:"UTI-p4"}},[s._v("CC. "+s._s(s.id))])]),a("q-btn",{staticClass:"col-md-2 col-xs-3 instance-font instance-btn",attrs:{id:"boton1",label:"Expandir"},on:{click:s.expandirMethod}}),a("q-btn",{staticClass:"col-md-2 col-xs-3 instance-font instance-btn",attrs:{label:"Banear"},on:{click:s.banearMethod}})],1)},_=[],h={name:"UsersTableInstance",props:{id:{type:Number,required:!0},name:{type:String,required:!0},email:{type:String,required:!0}},methods:{expandirMethod:function(){console.log("Función para expandir los datos")},banearMethod:function(){console.log("Función para banear al usuario")}}},x=h,y=(a("42a8"),a("9c40")),U=Object(u["a"])(x,q,_,!1,null,null,null),g=U.exports;f()(U,"components",{QBtn:y["a"]});var w={name:"UsersTable",components:{UserSearchBar:v,UsersTableInstance:g},data(){return{users:[{id:111222,name:"Juanito alicante",email:"juanito.alicante@gmail.com",phone:3178881122},{id:666777,name:"María Pepa",email:"maria.pepa@gmail.com",phone:3178883344},{id:888999,name:"José José Ramirez",email:"jose.ramirez@gmail.com",phone:3178885566}]}}},j=w,B=(a("2c2c"),Object(u["a"])(j,c,l,!1,null,"78a7233a",null)),T=B.exports,I=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"row justify-around"},[s.$q.screen.gt.sm?a("p",{staticClass:"col-12 title-text q-mt-lg"},[s._v("Baneados")]):s._e(),a("div",{staticClass:"row col-12 justify-start q-mb-xl"},[a("UserSearchBar",{staticClass:"col-md-5 col-xs-11"})],1),s._l(s.users,(function(t){return a("BannedUsersInstance",s._b({key:t.id,staticClass:"col-12"},"BannedUsersInstance",t,!1))}))],2)},k=[],$=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"row q-py-xs justify-around q-px-xs"},[a("div",{staticClass:"row col-md-9 col-xs-8"},[a("p",{staticClass:"col-md-12 col-xs-12 instance-font q-m-none"},[s._v(s._s(s.name))]),a("p",{staticClass:"col-md-12 col-xs-12 instance-font-light"},[s._v("CC. "+s._s(s.id))])]),a("q-btn",{staticClass:"col-md-3 col-xs-4 instance-font instance-btn",attrs:{color:"warning","text-color":"dark",label:"Desbanear"}})],1)},S=[],Q={name:"BannedUsersInstance",props:{id:{type:Number,required:!0},name:{type:String,required:!0},email:{type:String,required:!0}}},E=Q,J=Object(u["a"])(E,$,S,!1,null,null,null),M=J.exports;f()(J,"components",{QBtn:y["a"]});var O={name:"BannedUsers",components:{UserSearchBar:v,BannedUsersInstance:M},data(){return{users:[{name:"Juanchopancho Martinez",id:123444,email:"Juancho@gmail.com"},{name:"Panchita la del Pueblo",id:111234,email:"Panchita@yahoo.com"},{name:"Andrés Zuluaga",id:768111,email:"AndresZ@hotmail.com"}]}}},P=O,z=Object(u["a"])(P,I,k,!1,null,"217b68e0",null),N=z.exports,A={name:"UsersManagement",components:{UsersTable:T,BannedUsers:N},data(){return{tab:"users"}}},F=A,Z=a("429b"),D=a("7460"),R=a("adad"),G=a("823b"),H=Object(u["a"])(F,e,n,!1,null,"2f21f948",null);t["default"]=H.exports;f()(H,"components",{QTabs:Z["a"],QTab:D["a"],QTabPanels:R["a"],QTabPanel:G["a"]})},d17d:function(s,t,a){},d4d3:function(s,t,a){},d89f:function(s,t,a){"use strict";a("d4d3")}}]);