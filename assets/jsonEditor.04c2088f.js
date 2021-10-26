var e=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,o=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{C as n}from"./codemirror.41ea1057.js";import{a7 as s,k as r,r as d,av as i,a$ as u,aB as p,Z as c,_ as m,v as f,aJ as b,a5 as h,b4 as v,M as g,aH as j,X as _,a4 as y,aE as O,aC as w}from"./@vue.9dcf4325.js";import"./element-plus.c35c14b5.js";import"./lodash.a533b6d4.js";import"./resize-observer-polyfill.af5c5caa.js";import"./@popperjs.b42a2641.js";import"./dayjs.80b0a338.js";import"./mitt.06a3009f.js";import"./async-validator.9224cb80.js";import"./normalize-wheel.1d574cd1.js";import"./vue.1f809ab3.js";var V=s({name:"CodeJson",props:{modelValue:{type:Object,default:()=>{}},theme:{type:String,default:"shadowfox"}},emits:["changed","input","update:modelValue"],setup(e,{emit:a}){const l=r();let t=null;const o=d({options:{lineNumbers:!0,mode:"application/json",gutters:["CodeMirror-lint-markers"],theme:e.theme,lint:!1,selfContain:!0}});return i((()=>{t=n.fromTextArea(l.value,o.options),t.setValue(JSON.stringify(e.modelValue,null,2)),t.on("change",(e=>{console.log("ssss"),a("changed",e.getValue()),a("input",e.getValue())})),t.addPanel=()=>{}})),u((()=>e.theme),((e,a)=>{e!==a&&t.setOption("theme",e)})),{jsonPaneRef:l,getValue:()=>t.getValue()}}});const J={class:"json-container"},x={ref:"jsonPaneRef"};V.render=function(e,a,l,t,o,n){return p(),c("div",J,[m("textarea",x,null,512)])},V.__scopeId="data-v-4cae361d";var C=s({name:"JsonEditor",components:{codeJson:V},directives:{},setup(){const e=r(JSON.parse('[{"_id":"post 1","author":"Bob","content":"...","page_views":5},{"_id":"post 2","author":"Bob","content":"...","page_views":9},{"_id":"post 3","author":"Bob","content":"...","page_views":8},{"_id":"post 4","author":"Bob","content":"...","page_views":7}]')),n=d({selectForm:{theme:"material-ocean"}});return((e,n)=>{for(var s in n||(n={}))l.call(n,s)&&o(e,s,n[s]);if(a)for(var s of a(n))t.call(n,s)&&o(e,s,n[s]);return e})({value:e,options:[{value:"shadowfox",label:"shadowfox"},{value:"night",label:"night"},{value:"rubyblue",label:"rubyblue"},{value:"solarized",label:"solarized"},{value:"material-ocean",label:"material-ocean"}],handleUpdate:()=>{console.log("sss")},handleInput:e=>{console.log("input handleInput",e)},handleChanged:e=>{console.log("changed handleChanged",e)}},f(n))}});const I=e=>(O("data-v-5e7bfb4a"),e=e(),w(),e),S={class:"editorWrapper"},N={class:"info"},P=y("JSON编辑器"),B=I((()=>m("span",{style:{"text-align":"left"}},"JSON编辑器编辑通常用于JSON格式配置文件、例如oss配置资源场景。",-1))),F={class:"grid-content bg-purple-dark"},U={style:{"text-align":"left"}},k=I((()=>m("span",null,"JSON编辑器",-1))),z={class:"form-container"},E={class:"editor-container"};C.render=function(e,a,l,t,o,n){const s=b("el-divider"),r=b("el-option"),d=b("el-select"),i=b("el-form-item"),u=b("el-form"),f=b("codeJson"),y=b("el-card"),O=b("el-col"),w=b("el-row");return p(),c("div",S,[m("div",N,[h(s,{"content-position":"left"},{default:v((()=>[P])),_:1}),B]),m("div",null,[h(w,null,{default:v((()=>[h(O,{offset:1,span:22},{default:v((()=>[m("div",F,[h(y,{class:"box-card"},{default:v((()=>[m("div",U,[k,h(s)]),m("div",z,[h(u,{ref:"form",model:e.selectForm,"label-width":"120px"},{default:v((()=>[h(i,{label:"主题 theme",inline:!0,"label-position":"right"},{default:v((()=>[h(d,{modelValue:e.selectForm.theme,"onUpdate:modelValue":a[0]||(a[0]=a=>e.selectForm.theme=a),placeholder:"请选择活动区域"},{default:v((()=>[(p(!0),c(g,null,j(e.options,(e=>(p(),_(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model"])]),m("div",E,[h(f,{"model-value":e.value,theme:e.selectForm.theme,onChanged:e.handleChanged,onInput:e.handleInput,"onUpdate:modelValue":e.handleUpdate},null,8,["model-value","theme","onChanged","onInput","onUpdate:modelValue"])])])),_:1})])])),_:1})])),_:1})])])},C.__scopeId="data-v-5e7bfb4a";export{C as default};