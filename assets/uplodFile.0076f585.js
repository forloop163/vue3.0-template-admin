import{_ as e}from"./index.c2f2c5da.js";import{d as l,r as a,j as s,e as t,c as o,g as d,s as i,m as n,J as p,p as c,f as r}from"./vendor.e22f163e.js";const f=l({setup:()=>({fileList:a([{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]),handleRemove:(e,l)=>{console.log(e,l)},handlePreview:e=>{console.log(e)}})}),u=e=>(c("data-v-0f0d0c50"),e=e(),r(),e),m={class:"upload-container"},v={class:"copy-container"},g={class:"info"},_=p("文件上传"),b=u((()=>d("span",{style:{"text-align":"left"}},"文件、图片上传场景。",-1))),j={class:"grid-content bg-purple-dark"},h={style:{"text-align":"left"}},y=u((()=>d("span",null,"拖拽上传场景",-1))),x={class:"section"},w=u((()=>d("i",{class:"el-icon-upload"},null,-1))),k=u((()=>d("div",{class:"el-upload__text"},[p("将文件拖到此处，或"),d("em",null,"点击上传")],-1))),q=u((()=>d("div",{class:"el-upload__tip"},"只能上传 jpg/png 文件，且不超过 500kb",-1))),L={style:{"text-align":"left"}},M=u((()=>d("span",null,"图片列表缩略图场景",-1))),P={class:"section"},R=p("点击上传"),z=u((()=>d("div",{class:"el-upload__tip"},"只能上传 jpg/png 文件，且不超过 500kb",-1)));var I=e(f,[["render",function(e,l,a,p,c,r){const f=s("el-divider"),u=s("el-upload"),I=s("el-card"),J=s("el-button"),A=s("el-col"),B=s("el-row");return t(),o("div",m,[d("div",v,[d("div",g,[i(f,{"content-position":"left"},{default:n((()=>[_])),_:1}),b]),d("div",null,[i(B,null,{default:n((()=>[i(A,{offset:1,span:22},{default:n((()=>[d("div",j,[i(I,{class:"box-card"},{default:n((()=>[d("div",h,[y,i(f)]),d("div",x,[i(u,{class:"upload-demo",drag:"",action:"https://jsonplaceholder.typicode.com/posts/",multiple:""},{tip:n((()=>[q])),default:n((()=>[w,k])),_:1})])])),_:1}),i(I,{class:"box-card"},{default:n((()=>[d("div",L,[M,i(f)]),d("div",P,[i(u,{class:"upload-demo",action:"https://jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"file-list":e.fileList,"list-type":"picture"},{tip:n((()=>[z])),default:n((()=>[i(J,{size:"small",type:"primary"},{default:n((()=>[R])),_:1})])),_:1},8,["on-preview","on-remove","file-list"])])])),_:1})])])),_:1})])),_:1})])])])}],["__scopeId","data-v-0f0d0c50"]]);export{I as default};