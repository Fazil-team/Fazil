import{load_menus as ge,change_menu as _e,add_menu as we}from"./w1FxArkT.js";import{i as T}from"./NEECUfFJ.js";import{V as ye,W as xe,v as ee,X as s,Y as te,u as G,y as p,Z as oe,n as j,z as le,A as E,$ as Ce,r as O,a0 as ke,B as R,C as ie,a1 as J,q as i,s as S,a2 as $e,N as Be,E as B,D as Z,a3 as C,a4 as Q,o as re,c as Se,a as se,J as Re,O as Ve,w as b,a5 as ze,b as l,d as ne,G as Te,S as Fe,_ as Pe}from"./DJIGoAyo.js";import{u as Ne}from"./DOOFZEXn.js";import{c as Me,t as Ue}from"./BInMiL1Q.js";import{_ as De}from"./CTHR6n9L.js";import{_ as Ie,a as Oe}from"./B1dp0TcH.js";import{_ as je}from"./CwDJcOo-.js";import{_ as Ee}from"./DCYDan6O.js";import{_ as We}from"./DcF8Jjrk.js";import{u as Ke}from"./2u5eoNNW.js";import{N as ae}from"./BguVQ-rP.js";import{_ as Le}from"./BV_k87xS.js";function Ae(e){const{primaryColor:f,opacityDisabled:v,borderRadius:c,textColor3:m}=e;return Object.assign(Object.assign({},Me),{iconColor:m,textColor:"white",loadingColor:f,opacityDisabled:v,railColor:"rgba(0, 0, 0, .14)",railColorActive:f,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:c,railBorderRadiusMedium:c,railBorderRadiusLarge:c,buttonBorderRadiusSmall:c,buttonBorderRadiusMedium:c,buttonBorderRadiusLarge:c,boxShadowFocus:`0 0 0 2px ${xe(f,{alpha:.2})}`})}const He={name:"Switch",common:ye,self:Ae},Xe=ee("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[s("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),s("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),s("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),ee("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[te({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),s("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),s("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),s("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),G("&:focus",[s("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),p("round",[s("rail","border-radius: calc(var(--n-rail-height) / 2);",[s("button","border-radius: calc(var(--n-button-height) / 2);")])]),oe("disabled",[oe("icon",[p("rubber-band",[p("pressed",[s("rail",[s("button","max-width: var(--n-button-width-pressed);")])]),s("rail",[G("&:active",[s("button","max-width: var(--n-button-width-pressed);")])]),p("active",[p("pressed",[s("rail",[s("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),s("rail",[G("&:active",[s("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),p("active",[s("rail",[s("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),s("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[s("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[te()]),s("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),p("active",[s("rail","background-color: var(--n-rail-color-active);")]),p("loading",[s("rail",`
 cursor: wait;
 `)]),p("disabled",[s("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Ye=Object.assign(Object.assign({},E.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let F;const qe=j({name:"Switch",props:Ye,setup(e){F===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?F=CSS.supports("width","max(1px)"):F=!1:F=!0);const{mergedClsPrefixRef:f,inlineThemeDisabled:v}=le(e),c=E("Switch","-switch",Xe,He,e,f),m=Ce(e),{mergedSizeRef:h,mergedDisabledRef:g}=m,y=O(e.defaultValue),o=ke(e,"value"),w=Ke(o,y),u=R(()=>w.value===e.checkedValue),t=O(!1),n=O(!1),r=R(()=>{const{railStyle:d}=e;if(d)return d({focused:n.value,checked:u.value})});function _(d){const{"onUpdate:value":U,onChange:D,onUpdateValue:I}=e,{nTriggerFormInput:A,nTriggerFormChange:H}=m;U&&Q(U,d),I&&Q(I,d),D&&Q(D,d),y.value=d,A(),H()}function V(){const{nTriggerFormFocus:d}=m;d()}function x(){const{nTriggerFormBlur:d}=m;d()}function P(){e.loading||g.value||(w.value!==e.checkedValue?_(e.checkedValue):_(e.uncheckedValue))}function W(){n.value=!0,V()}function K(){n.value=!1,x(),t.value=!1}function N(d){e.loading||g.value||d.key===" "&&(w.value!==e.checkedValue?_(e.checkedValue):_(e.uncheckedValue),t.value=!1)}function L(d){e.loading||g.value||d.key===" "&&(d.preventDefault(),t.value=!0)}const M=R(()=>{const{value:d}=h,{self:{opacityDisabled:U,railColor:D,railColorActive:I,buttonBoxShadow:A,buttonColor:H,boxShadowFocus:de,loadingColor:ue,textColor:ce,iconColor:he,[B("buttonHeight",d)]:k,[B("buttonWidth",d)]:me,[B("buttonWidthPressed",d)]:fe,[B("railHeight",d)]:$,[B("railWidth",d)]:z,[B("railBorderRadius",d)]:ve,[B("buttonBorderRadius",d)]:be},common:{cubicBezierEaseInOut:pe}}=c.value;let X,Y,q;return F?(X=`calc((${$} - ${k}) / 2)`,Y=`max(${$}, ${k})`,q=`max(${z}, calc(${z} + ${k} - ${$}))`):(X=Z((C($)-C(k))/2),Y=Z(Math.max(C($),C(k))),q=C($)>C(k)?z:Z(C(z)+C(k)-C($))),{"--n-bezier":pe,"--n-button-border-radius":be,"--n-button-box-shadow":A,"--n-button-color":H,"--n-button-width":me,"--n-button-width-pressed":fe,"--n-button-height":k,"--n-height":Y,"--n-offset":X,"--n-opacity-disabled":U,"--n-rail-border-radius":ve,"--n-rail-color":D,"--n-rail-color-active":I,"--n-rail-height":$,"--n-rail-width":z,"--n-width":q,"--n-box-shadow-focus":de,"--n-loading-color":ue,"--n-text-color":ce,"--n-icon-color":he}}),a=v?ie("switch",R(()=>h.value[0]),M,e):void 0;return{handleClick:P,handleBlur:K,handleFocus:W,handleKeyup:N,handleKeydown:L,mergedRailStyle:r,pressed:t,mergedClsPrefix:f,mergedValue:w,checked:u,mergedDisabled:g,cssVars:v?void 0:M,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:f,checked:v,mergedRailStyle:c,onRender:m,$slots:h}=this;m==null||m();const{checked:g,unchecked:y,icon:o,"checked-icon":w,"unchecked-icon":u}=h,t=!(J(o)&&J(w)&&J(u));return i("div",{role:"switch","aria-checked":v,class:[`${e}-switch`,this.themeClass,t&&`${e}-switch--icon`,v&&`${e}-switch--active`,f&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},i("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:c},S(g,n=>S(y,r=>n||r?i("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},i("div",{class:`${e}-switch__rail-placeholder`},i("div",{class:`${e}-switch__button-placeholder`}),n),i("div",{class:`${e}-switch__rail-placeholder`},i("div",{class:`${e}-switch__button-placeholder`}),r)):null)),i("div",{class:`${e}-switch__button`},S(o,n=>S(w,r=>S(u,_=>i($e,null,{default:()=>this.loading?i(Be,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(r||n)?i("div",{class:`${e}-switch__button-icon`,key:r?"checked-icon":"icon"},r||n):!this.checked&&(_||n)?i("div",{class:`${e}-switch__button-icon`,key:_?"unchecked-icon":"icon"},_||n):null})))),S(g,n=>n&&i("div",{key:"checked",class:`${e}-switch__checked`},n)),S(y,n=>n&&i("div",{key:"unchecked",class:`${e}-switch__unchecked`},n)))))}}),Ge=ee("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[p("strong",`
 font-weight: var(--n-font-weight-strong);
 `),p("italic",{fontStyle:"italic"}),p("underline",{textDecoration:"underline"}),p("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),Je=Object.assign(Object.assign({},E.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),Ze=j({name:"Text",props:Je,setup(e){const{mergedClsPrefixRef:f,inlineThemeDisabled:v}=le(e),c=E("Typography","-text",Ge,Ue,e,f),m=R(()=>{const{depth:g,type:y}=e,o=y==="default"?g===void 0?"textColor":`textColor${g}Depth`:B("textColor",y),{common:{fontWeightStrong:w,fontFamilyMono:u,cubicBezierEaseInOut:t},self:{codeTextColor:n,codeBorderRadius:r,codeColor:_,codeBorder:V,[o]:x}}=c.value;return{"--n-bezier":t,"--n-text-color":x,"--n-font-weight-strong":w,"--n-font-famliy-mono":u,"--n-code-border-radius":r,"--n-code-text-color":n,"--n-code-color":_,"--n-code-border":V}}),h=v?ie("text",R(()=>`${e.type[0]}${e.depth||""}`),m,e):void 0;return{mergedClsPrefix:f,compitableTag:Ne(e,["as","tag"]),cssVars:v?void 0:m,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender}},render(){var e,f,v;const{mergedClsPrefix:c}=this;(e=this.onRender)===null||e===void 0||e.call(this);const m=[`${c}-text`,this.themeClass,{[`${c}-text--code`]:this.code,[`${c}-text--delete`]:this.delete,[`${c}-text--strong`]:this.strong,[`${c}-text--italic`]:this.italic,[`${c}-text--underline`]:this.underline}],h=(v=(f=this.$slots).default)===null||v===void 0?void 0:v.call(f);return this.code?i("code",{class:m,style:this.cssVars},this.delete?i("del",null,h):h):this.delete?i("del",{class:m,style:this.cssVars},h):i(this.compitableTag||"span",{class:m,style:this.cssVars},h)}}),Qe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},et=se("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M184 112l144 144l-144 144"},null,-1),tt=[et],ot=j({name:"ChevronForward",render:function(f,v){return re(),Se("svg",Qe,tt)}}),nt={style:{display:"flex","justify-content":"right"}},pt=j({__name:"NewMenuDialog",emits:["success"],setup(e,{expose:f,emit:v}){const c=v;function m(u){return i(ae,{size:"1.4rem"},{default:()=>i(u)})}const h=O([]),g=({option:u})=>{let t=null;for(let n=0;n<T.length;n++){let r=T[n];r.label==u.label&&(t=r.value)}return i("div",{style:{display:"flex",alignItems:"center"}},[m(t),u.label])},y=u=>{let t=null;for(let n=0;n<T.length;n++){let r=T[n];r.label==u.label&&(t=r.value)}return i("div",{style:{display:"flex",alignItems:"center"}},[m(t),i("div",{style:{marginLeft:"12px",padding:"4px 0"}},[i("div",null,[u.label]),i(Ze,{depth:3,tag:"div"},{default:()=>"description"})])])},o=Re({title:"添加菜单",open:!1,data:{id:0,menuName:"",menuPurview:"",menuRouterPath:"",menuPid:"",menuComment:"",icon:"",outline:"",menuType:"ITEM",sys:"sys"},show:u=>{u!=null&&(Object.assign(o.data,u),o.title="修改菜单"),o.open=!0,ge().then(t=>{h.value=t.data.data,h.value=[{menuName:"主类目",id:0,treeMenus:h.value}]})},close:()=>{Object.assign(o.data,{id:0,menuName:"",menuPurview:"",menuRouterPath:"",menuPid:"",menuComment:"",icon:"",outline:"",menuType:"ITEM",sys:"sys"}),o.open=!1},rules:{},submit:()=>{o.title=="修改菜单"?_e(o.data).then(u=>{o.close(),c("success")}):we(o.data).then(u=>{o.close(),c("success")})}}),w=(u,t,n)=>u.option.treeMenus.length==0?"":i(ae,null,{default:()=>i(ot)});return f({dialog:o}),(u,t)=>{const n=De,r=Ie,_=je,V=Ee,x=We,P=Le,W=qe,K=Oe,N=Fe,L=Pe,M=ze;return re(),Ve(M,{show:o.open,"onUpdate:show":t[11]||(t[11]=a=>o.open=a)},{default:b(()=>[l(L,{style:{width:"600px"},title:o.title,bordered:!0,role:"dialog","aria-modal":"true"},{footer:b(()=>[se("div",nt,[l(N,{onClick:t[9]||(t[9]=a=>o.close())},{default:b(()=>[ne("取消")]),_:1}),l(N,{style:{"margin-left":"1rem"},type:"primary",onClick:t[10]||(t[10]=a=>o.submit())},{default:b(()=>[ne("提交")]),_:1})])]),default:b(()=>[l(K,null,{default:b(()=>[l(r,{label:"菜单名称"},{default:b(()=>[l(n,{placeholder:"请输入菜单名称",value:o.data.menuName,"onUpdate:value":t[0]||(t[0]=a=>o.data.menuName=a)},null,8,["value"])]),_:1}),l(r,{label:"菜单列表"},{default:b(()=>[l(_,{value:o.data.menuPid,"onUpdate:value":t[1]||(t[1]=a=>o.data.menuPid=a),"key-field":"id","label-field":"menuName","children-field":"treeMenus",options:h.value,"render-switcher-icon":w,clearable:"",placeholder:"请选择父级"},null,8,["value","options"])]),_:1}),l(r,{label:"菜单图标"},{default:b(()=>[l(V,{placeholder:"请选择图标",clearable:"",value:o.data.icon,"onUpdate:value":t[2]||(t[2]=a=>o.data.icon=a),"value-field":"label","render-label":y,"render-tag":g,options:Te(T)},null,8,["value","options"])]),_:1}),l(r,{label:"权限标识"},{default:b(()=>[l(P,{value:o.data.menuType,"onUpdate:value":t[3]||(t[3]=a=>o.data.menuType=a)},{default:b(()=>[l(x,{value:"FOLDER",label:"目录"}),l(x,{value:"ITEM",label:"菜单"}),l(x,{value:"ACTIVE",label:"按钮"})]),_:1},8,["value"])]),_:1}),l(r,{label:"权限标识"},{default:b(()=>[l(n,{value:o.data.menuPurview,"onUpdate:value":t[4]||(t[4]=a=>o.data.menuPurview=a),placeholder:"请输入权限标识"},null,8,["value"])]),_:1}),l(r,{label:"路由地址"},{default:b(()=>[l(n,{value:o.data.menuRouterPath,"onUpdate:value":t[5]||(t[5]=a=>o.data.menuRouterPath=a),placeholder:"请输入路由地址"},null,8,["value"])]),_:1}),l(r,{label:"菜单备注"},{default:b(()=>[l(n,{value:o.data.menuComment,"onUpdate:value":t[6]||(t[6]=a=>o.data.menuComment=a),placeholder:"请输入菜单备注"},null,8,["value"])]),_:1}),l(r,{label:"是否为外链地址"},{default:b(()=>[l(W,{value:o.data.outline,"onUpdate:value":t[7]||(t[7]=a=>o.data.outline=a)},null,8,["value"])]),_:1}),l(r,{label:"是否为外链地址"},{default:b(()=>[l(P,{value:o.data.sys,"onUpdate:value":t[8]||(t[8]=a=>o.data.sys=a)},{default:b(()=>[l(x,{label:"管理端",value:"sys"}),l(x,{label:"客户端",value:"client"})]),_:1},8,["value"])]),_:1})]),_:1})]),_:1},8,["title"])]),_:1},8,["show"])}}});export{pt as _};
