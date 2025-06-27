import{checkConnect as N,newStorage as R}from"./B5REno9h.js";import{ah as k,$ as g,bM as j,ai as x,q as P,y as O,a0 as U,n as h,a1 as E,r as W,e as I,x as v,bH as A,ap as H,u as K,a2 as L,a7 as M,o as w,Q as q,w as s,b as n,a as Q,d as T,c as z,a6 as S,R as X,_ as Y,ac as G}from"./CEmLkHO2.js";import{u as J}from"./CkeKcMRZ.js";import{s as Z}from"./DPagiUDI.js";import{_ as ee}from"./DjqfjIiR.js";import{_ as te}from"./CZjMyia5.js";import{_ as ne}from"./DvKLQzUv.js";import{_ as ae}from"./B4YAdSrT.js";import{_ as se}from"./BSkhU9Mb.js";import{_ as oe}from"./ByTe6Nb4.js";const le=k([k("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),g("spin-container",`
 position: relative;
 `,[g("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[j()])]),g("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),g("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[x("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),g("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),g("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[x("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),ie={small:20,medium:18,large:16},re=Object.assign(Object.assign({},U.props),{contentClass:String,contentStyle:[Object,String],description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),de=P({name:"Spin",props:re,setup(l){const{mergedClsPrefixRef:m,inlineThemeDisabled:o}=O(l),i=U("Spin","-spin",le,Z,l,m),c=h(()=>{const{size:r}=l,{common:{cubicBezierEaseInOut:u},self:t}=i.value,{opacitySpinning:b,color:d,textColor:p}=t,y=typeof r=="number"?K(r):t[L("size",r)];return{"--n-bezier":u,"--n-opacity-spinning":b,"--n-size":y,"--n-color":d,"--n-text-color":p}}),e=o?E("spin",h(()=>{const{size:r}=l;return typeof r=="number"?String(r):r[0]}),c,l):void 0,_=J(l,["spinning","show"]),f=W(!1);return I(r=>{let u;if(_.value){const{delay:t}=l;if(t){u=window.setTimeout(()=>{f.value=!0},t),r(()=>{clearTimeout(u)});return}}f.value=_.value}),{mergedClsPrefix:m,active:f,mergedStrokeWidth:h(()=>{const{strokeWidth:r}=l;if(r!==void 0)return r;const{size:u}=l;return ie[typeof u=="number"?"medium":u]}),cssVars:o?void 0:c,themeClass:e==null?void 0:e.themeClass,onRender:e==null?void 0:e.onRender}},render(){var l,m;const{$slots:o,mergedClsPrefix:i,description:c}=this,e=o.icon&&this.rotate,_=(c||o.description)&&v("div",{class:`${i}-spin-description`},c||((l=o.description)===null||l===void 0?void 0:l.call(o))),f=o.icon?v("div",{class:[`${i}-spin-body`,this.themeClass]},v("div",{class:[`${i}-spin`,e&&`${i}-spin--rotate`],style:o.default?"":this.cssVars},o.icon()),_):v("div",{class:[`${i}-spin-body`,this.themeClass]},v(A,{clsPrefix:i,style:o.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${i}-spin`}),_);return(m=this.onRender)===null||m===void 0||m.call(this),o.default?v("div",{class:[`${i}-spin-container`,this.themeClass],style:this.cssVars},v("div",{class:[`${i}-spin-content`,this.active&&`${i}-spin-content--spinning`,this.contentClass],style:this.contentStyle},o),v(H,{name:"fade-in-transition"},{default:()=>this.active?f:null})):f}}),ue={key:0},pe={key:1},ce={style:{display:"flex","justify-content":"end"}},ke=P({__name:"new-storage-dialog",emits:["success"],setup(l,{expose:m,emit:o}){const i=o,c=W(!1),e=M({title:"创建外部存储",open:!1,data:{type:"webdav",name:"",success:!1,config:{}},show:()=>{Object.assign(e.data,{type:"webdav",name:"",success:!1,config:{}}),e.open=!0},close:()=>{e.open=!1}}),_=[{label:"WebDAV",value:"webdav"},{label:"FTP",value:"ftp"}],f=()=>{c.value=!0,e.data.success=!1,N(e.data).then(u=>{e.data.success=!0,c.value=!1}).catch(u=>{c.value=!1})},r=()=>{R(e.data).then(u=>{e.close(),i("success")})};return m({dialog:e}),(u,t)=>{const b=ee,d=te,p=ne,y=ae,$=se,V=de,C=X,B=oe,D=Y,F=G;return w(),q(F,{show:e.open,"onUpdate:show":t[11]||(t[11]=a=>e.open=a),title:""},{default:s(()=>[n(D,{style:{width:"600px"},title:e.title,bordered:!0,role:"dialog","aria-modal":"true"},{footer:s(()=>[Q("div",ce,[n(B,null,{default:s(()=>[n(C,{type:"primary",onClick:f},{default:s(()=>t[12]||(t[12]=[T("连接测试")])),_:1}),n(C,{disabled:!e.data.success,onClick:r,type:"primary"},{default:s(()=>t[13]||(t[13]=[T("确定")])),_:1},8,["disabled"])]),_:1})])]),default:s(()=>[n(V,{spinning:c.value},{default:s(()=>[n($,null,{default:s(()=>[n(d,{label:"存储类型"},{default:s(()=>[n(b,{value:e.data.type,"onUpdate:value":t[0]||(t[0]=a=>e.data.type=a),placeholder:"请选择存储类型",items:_},null,8,["value"])]),_:1}),e.data.type=="webdav"?(w(),z("section",ue,[n(d,{label:"WebDAV地址"},{default:s(()=>[n(p,{value:e.data.config.baseUrl,"onUpdate:value":t[1]||(t[1]=a=>e.data.config.baseUrl=a),placeholder:"请输入WebDAV地址"},null,8,["value"])]),_:1}),n(d,{label:"WebDav文件夹"},{default:s(()=>[n(p,{value:e.data.config.folder,"onUpdate:value":t[2]||(t[2]=a=>e.data.config.folder=a),placeholder:"请输入WebDav文件夹"},null,8,["value"])]),_:1}),n(d,{label:"映射地址"},{default:s(()=>[n(p,{value:e.data.name,"onUpdate:value":t[3]||(t[3]=a=>e.data.name=a),placeholder:"请输入映射地址"},null,8,["value"])]),_:1}),n(d,{label:"WebDav用户名"},{default:s(()=>[n(p,{value:e.data.config.username,"onUpdate:value":t[4]||(t[4]=a=>e.data.config.username=a),placeholder:"请输入WebDav用户名"},null,8,["value"])]),_:1}),n(d,{label:"WebDav密码"},{default:s(()=>[n(p,{type:"password",value:e.data.config.password,"onUpdate:value":t[5]||(t[5]=a=>e.data.config.password=a),placeholder:"请输WebDav密码"},null,8,["value"])]),_:1})])):S("",!0),e.data.type=="ftp"?(w(),z("section",pe,[n(d,{label:"FTP地址"},{default:s(()=>[n(p,{value:e.data.config.host,"onUpdate:value":t[6]||(t[6]=a=>e.data.config.host=a),placeholder:"请输入FTP地址"},null,8,["value"])]),_:1}),n(d,{label:"FTP端口"},{default:s(()=>[n(y,{style:{width:"100%"},value:e.data.config.port,"onUpdate:value":t[7]||(t[7]=a=>e.data.config.port=a),placeholder:"请输入FTP地址"},null,8,["value"])]),_:1}),n(d,{label:"映射地址"},{default:s(()=>[n(p,{value:e.data.name,"onUpdate:value":t[8]||(t[8]=a=>e.data.name=a),placeholder:"请输入映射地址"},null,8,["value"])]),_:1}),n(d,{label:"FTP用户名"},{default:s(()=>[n(p,{value:e.data.config.username,"onUpdate:value":t[9]||(t[9]=a=>e.data.config.username=a),placeholder:"请输入FTP地址"},null,8,["value"])]),_:1}),n(d,{label:"FTP密码"},{default:s(()=>[n(p,{type:"password",value:e.data.config.password,"onUpdate:value":t[10]||(t[10]=a=>e.data.config.password=a),placeholder:"请输FTP地址"},null,8,["value"])]),_:1})])):S("",!0)]),_:1})]),_:1},8,["spinning"])]),_:1},8,["title"])]),_:1},8,["show"])}}});export{ke as _};
