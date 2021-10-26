var e=Object.defineProperty,l=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(l,t,a)=>t in l?e(l,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[t]=a;import{J as n}from"./jszip.5637a6dd.js";import{l as r}from"./jszip-utils.28b46b3b.js";import{F as p}from"./file-saver.dc65ec7b.js";import{h as c}from"./element-plus.c35c14b5.js";import{_ as d}from"./richEditor.88b78e89.js";import{a7 as u,r as m,k as f,av as b,v as g,aJ as h,aB as v,Z as y,_ as j,a5 as w,b4 as x,a4 as z,D as _,aE as S,aC as F}from"./@vue.9dcf4325.js";import"./lodash.a533b6d4.js";import"./resize-observer-polyfill.af5c5caa.js";import"./@popperjs.b42a2641.js";import"./dayjs.80b0a338.js";import"./mitt.06a3009f.js";import"./async-validator.9224cb80.js";import"./normalize-wheel.1d574cd1.js";import"./vue.1f809ab3.js";import"./wangeditor.1b221b02.js";var k=u({name:"ExportZip",components:{RichEditor:d},setup(){const e=m({contentTip:"JSZip的实例表示一组文件。您可以添加它们、删除它们、修改它们。您还可以导入现有的zip文件或生成一个。",downloadTip:"FileSaver API适用于firefox、chrome、opera &gt;= 15和IE &gt;= 10(但不适用于兼容性视图)。",tableData:[{fileName:"package.zip",fileUrl:"./test/package.zip",uploadTime:"2021-07-01",uploadUser:"MrZip"},{fileName:"jszip.js",fileUrl:"./test/jszip.js",uploadTime:"2021-07-02",uploadUser:"MrZip"},{fileName:"style.css",fileUrl:"./test/style.css",uploadTime:"2021-07-03",uploadUser:"MrCss"}],multipleSelection:[],percentage:0}),d=f(),u=f(),h=f(),v=f();let y,j;return b((()=>{j=new n,y=new n})),w=((e,l)=>{for(var t in l||(l={}))i.call(l,t)&&s(e,t,l[t]);if(a)for(var t of a(l))o.call(l,t)&&s(e,t,l[t]);return e})({},g(e)),l(w,t({editorValue:d,zipFileName:h,fileName:v,handleSelectionChange:l=>{e.percentage>0&&(e.percentage=0),e.multipleSelection=l},handleDownloadFile:e=>{y.file(`${v.value||"default"}.html`,u.value),"FileSaver"===e&&y.generateAsync({type:"blob"}).then((e=>{p.exports.saveAs(e,`${h.value||"压缩"}`),c.ElNotification({type:"success",message:"文件下载成功"})}),(e=>{c.ElNotification({type:"warning",message:`文件下载失败,${e}`})}))},handleDownloadSelectFile:()=>0===e.multipleSelection.length?(c.ElMessage({type:"warning",message:"请先选择需要下载的文件"}),!1):(e.multipleSelection.forEach((e=>{var l;j.file(e.fileName,(l=e.fileUrl,new Promise(((e,t)=>{r.getBinaryContent(l,((l,a)=>{l?t(l):e(a)}))}))),{binary:!0})})),j.generateAsync({type:"blob"},(l=>{let t=`progression : ${l.percent.toFixed(2)} %`;l.currentFile&&(t+=`, current file = ${l.currentFile}`),console.log(t),e.percentage=l.percent})).then((e=>{p.exports.saveAs(e,"example.zip")}),(e=>{console.log(e)})),!0),handleUpdateValue:e=>{console.log(e),u.value=e}}));var w}});const N=e=>(S("data-v-37a52822"),e=e(),F(),e),U={class:"zip-container"},V={class:"info"},E=z("导出压缩文件Zip"),T={style:{"text-align":"left"}},C=N((()=>j("span",{class:"title"},"导出压缩文件场景：",-1))),O=z("通常用于选择某些文件，并将其压缩导出的场景，比如蓝湖批量导出压缩图片文件等"),P=z("JSZip "),Z=N((()=>j("i",{class:"el-icon-question"},null,-1))),D={class:"grid-content bg-purple-dark"},A={style:{"text-align":"left"}},I=N((()=>j("span",{style:{"margin-right":"20px"}},"下载生成编辑文件zip场景",-1))),$=z("下载 Zip (FileSaver API) "),J=N((()=>j("i",{class:"el-icon-question"},null,-1))),M={class:"section"},q={class:"grid-content bg-purple-dark"},B={style:{"text-align":"left"}},R=N((()=>j("span",{style:{"margin-right":"20px"}},"下载压缩已上传文件的zip场景",-1))),G=z("下载 Zip (FileSaver API) "),H=N((()=>j("i",{class:"el-icon-question"},null,-1))),K={class:"section"};k.render=function(e,l,t,a,i,o){const s=h("el-divider"),n=h("el-tooltip"),r=h("el-link"),p=h("el-button"),c=h("el-input"),d=h("RichEditor"),u=h("el-card"),m=h("el-col"),f=h("el-row"),b=h("el-progress"),g=h("el-table-column"),S=h("el-table");return v(),y("div",U,[j("div",V,[w(s,{"content-position":"left"},{default:x((()=>[E])),_:1}),j("span",T,[C,O,w(r,{type:"primary",href:"https://stuk.github.io/jszip/documentation/examples.html"},{default:x((()=>[P,w(n,{class:"item",effect:"dark",content:e.contentTip,placement:"top-start"},{default:x((()=>[Z])),_:1},8,["content"])])),_:1})])]),w(f,null,{default:x((()=>[w(m,{offset:1,span:22},{default:x((()=>[j("div",D,[w(u,{class:"box-card"},{default:x((()=>[j("div",A,[I,w(p,{id:"blob",size:"medium",type:"success",plain:"",onClick:l[0]||(l[0]=l=>e.handleDownloadFile("FileSaver"))},{default:x((()=>[$,w(n,{class:"item",effect:"dark",content:e.downloadTip,placement:"bottom-start"},{default:x((()=>[J])),_:1},8,["content"])])),_:1}),w(c,{modelValue:e.zipFileName,"onUpdate:modelValue":l[1]||(l[1]=l=>e.zipFileName=l),placeholder:"请输入zip压缩文件名",style:{width:"200px","margin-left":"10px"},clearable:""},null,8,["modelValue"]),w(c,{modelValue:e.fileName,"onUpdate:modelValue":l[2]||(l[2]=l=>e.fileName=l),placeholder:"请输入编辑文件名",style:{width:"200px","margin-left":"10px"},clearable:""},null,8,["modelValue"]),w(s)]),j("div",M,[w(d,{"model-value":e.editorValue,"onUpdate:modelValue":e.handleUpdateValue},null,8,["model-value","onUpdate:modelValue"])])])),_:1})])])),_:1})])),_:1}),w(f,null,{default:x((()=>[w(m,{offset:1,span:22},{default:x((()=>[j("div",q,[w(u,{class:"box-card"},{default:x((()=>[j("div",B,[R,w(p,{id:"blob",size:"medium",type:"success",plain:"",onClick:l[3]||(l[3]=l=>e.handleDownloadSelectFile())},{default:x((()=>[G,w(n,{class:"item",effect:"dark",content:e.downloadTip,placement:"bottom-start"},{default:x((()=>[H])),_:1},8,["content"])])),_:1}),w(b,{style:{width:"40%",margin:"10px"},"text-inside":!0,"stroke-width":20,percentage:e.percentage,status:"success"},null,8,["percentage"]),w(s)]),j("div",K,[w(S,{ref:"multipleTable",data:e.tableData,"tooltip-effect":"dark",style:{width:"100%"},onSelectionChange:e.handleSelectionChange},{default:x((()=>[w(g,{type:"selection",width:"55"}),w(g,{prop:"fileName",label:"文件名称"},{default:x((e=>[z(_(e.row.fileName),1)])),_:1}),w(g,{prop:"uploadTime",label:"上传时间"}),w(g,{prop:"uploadUser",label:"上传人","show-overflow-tooltip":""})])),_:1},8,["data","onSelectionChange"])])])),_:1})])])),_:1})])),_:1})])},k.__scopeId="data-v-37a52822";export{k as default};