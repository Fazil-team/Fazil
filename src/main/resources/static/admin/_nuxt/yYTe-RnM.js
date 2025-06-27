import{n as G,aA as Et,F as fe,l as Pt,k as $t,B as _,r as y,ag as Ot,a3 as be,q as l,aF as Bt,aI as pe,D as ee,b6 as ge,j as kt,v as g,X as p,u as q,z as Ie,A as oe,ad as Mt,b7 as Lt,C as Re,a6 as Ht,E as ie,Z as me,y as Y,ak as Dt,a0 as ae,h as se,al as At,f as Wt,b8 as Nt,aH as Vt,ae as te,an as we}from"./C_prpByR.js";import{c as jt,b as ce,d as Kt,N as Ut}from"./CnsDiBjo.js";import{u as Yt}from"./LJ7Qsgh4.js";import{e as Zt,i as Xt,V as xe}from"./C0ZFq11c.js";import{N as qt}from"./BBANRMOJ.js";import{_ as de}from"./DxGMFuom.js";function ye(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function Ce(e){return e&-e}class Gt{constructor(r,s){this.l=r,this.min=s;const f=new Array(r+1);for(let u=0;u<r+1;++u)f[u]=0;this.ft=f}add(r,s){if(s===0)return;const{l:f,ft:u}=this;for(r+=1;r<=f;)u[r]+=s,r+=Ce(r)}get(r){return this.sum(r+1)-this.sum(r)}sum(r){if(r===void 0&&(r=this.l),r<=0)return 0;const{ft:s,min:f,l:u}=this;if(r>u)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let d=r*f;for(;r>0;)d+=s[r],r-=Ce(r);return d}getBound(r){let s=0,f=this.l;for(;f>s;){const u=Math.floor((s+f)/2),d=this.sum(u);if(d>r){f=u;continue}else if(d<r){if(s===u)return this.sum(s+1)<=r?s+1:u;s=u}else return u}return s}}let ne;function Jt(){return typeof document>"u"?!1:(ne===void 0&&("matchMedia"in window?ne=window.matchMedia("(pointer:coarse)").matches:ne=!1),ne)}let ue;function ze(){return typeof document>"u"?1:(ue===void 0&&(ue="chrome"in window?window.devicePixelRatio:1),ue)}const Qt=ce(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[ce("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[ce("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),fn=G({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const r=Et();Qt.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:jt,ssr:r}),fe(()=>{const{defaultScrollIndex:o,defaultScrollKey:a}=e;o!=null?E({index:o}):a!=null&&E({key:a})});let s=!1,f=!1;Pt(()=>{if(s=!1,!f){f=!0;return}E({top:v.value,left:h})}),$t(()=>{s=!0,f||(f=!0)});const u=_(()=>{const o=new Map,{keyField:a}=e;return e.items.forEach((c,x)=>{o.set(c[a],x)}),o}),d=y(null),I=y(void 0),i=new Map,S=_(()=>{const{items:o,itemSize:a,keyField:c}=e,x=new Gt(o.length,a);return o.forEach((C,T)=>{const m=C[c],F=i.get(m);F!==void 0&&x.add(T,F)}),x}),b=y(0);let h=0;const v=y(0),R=Ot(()=>Math.max(S.value.getBound(v.value-be(e.paddingTop))-1,0)),O=_(()=>{const{value:o}=I;if(o===void 0)return[];const{items:a,itemSize:c}=e,x=R.value,C=Math.min(x+Math.ceil(o/c+1),a.length-1),T=[];for(let m=x;m<=C;++m)T.push(a[m]);return T}),E=(o,a)=>{if(typeof o=="number"){$(o,a,"auto");return}const{left:c,top:x,index:C,key:T,position:m,behavior:F,debounce:H=!0}=o;if(c!==void 0||x!==void 0)$(c,x,F);else if(C!==void 0)B(C,F,H);else if(T!==void 0){const K=u.value.get(T);K!==void 0&&B(K,F,H)}else m==="bottom"?$(0,Number.MAX_SAFE_INTEGER,F):m==="top"&&$(0,0,F)};let w,P=null;function B(o,a,c){const{value:x}=S,C=x.sum(o)+be(e.paddingTop);if(!c)d.value.scrollTo({left:0,top:C,behavior:a});else{w=o,P!==null&&window.clearTimeout(P),P=window.setTimeout(()=>{w=void 0,P=null},16);const{scrollTop:T,offsetHeight:m}=d.value;if(C>T){const F=x.get(o);C+F<=T+m||d.value.scrollTo({left:0,top:C+F-m,behavior:a})}else d.value.scrollTo({left:0,top:C,behavior:a})}}function $(o,a,c){d.value.scrollTo({left:o,top:a,behavior:c})}function k(o,a){var c,x,C;if(s||e.ignoreItemResize||X(a.target))return;const{value:T}=S,m=u.value.get(o),F=T.get(m),H=(C=(x=(c=a.borderBoxSize)===null||c===void 0?void 0:c[0])===null||x===void 0?void 0:x.blockSize)!==null&&C!==void 0?C:a.contentRect.height;if(H===F)return;H-e.itemSize===0?i.delete(o):i.set(o,H-e.itemSize);const M=H-F;if(M===0)return;T.add(m,M);const D=d.value;if(D!=null){if(w===void 0){const V=T.sum(m);D.scrollTop>V&&D.scrollBy(0,M)}else if(m<w)D.scrollBy(0,M);else if(m===w){const V=T.sum(m);H+V>D.scrollTop+D.offsetHeight&&D.scrollBy(0,M)}N()}b.value++}const W=!Jt();let L=!1;function A(o){var a;(a=e.onScroll)===null||a===void 0||a.call(e,o),(!W||!L)&&N()}function j(o){var a;if((a=e.onWheel)===null||a===void 0||a.call(e,o),W){const c=d.value;if(c!=null){if(o.deltaX===0&&(c.scrollTop===0&&o.deltaY<=0||c.scrollTop+c.offsetHeight>=c.scrollHeight&&o.deltaY>=0))return;o.preventDefault(),c.scrollTop+=o.deltaY/ze(),c.scrollLeft+=o.deltaX/ze(),N(),L=!0,Kt(()=>{L=!1})}}}function Z(o){if(s||X(o.target)||o.contentRect.height===I.value)return;I.value=o.contentRect.height;const{onResize:a}=e;a!==void 0&&a(o)}function N(){const{value:o}=d;o!=null&&(v.value=o.scrollTop,h=o.scrollLeft)}function X(o){let a=o;for(;a!==null;){if(a.style.display==="none")return!0;a=a.parentElement}return!1}return{listHeight:I,listStyle:{overflow:"auto"},keyToIndex:u,itemsStyle:_(()=>{const{itemResizable:o}=e,a=ee(S.value.sum());return b.value,[e.itemsStyle,{boxSizing:"content-box",height:o?"":a,minHeight:o?a:"",paddingTop:ee(e.paddingTop),paddingBottom:ee(e.paddingBottom)}]}),visibleItemsStyle:_(()=>(b.value,{transform:`translateY(${ee(S.value.sum(R.value))})`})),viewportItems:O,listElRef:d,itemsElRef:y(null),scrollTo:E,handleListResize:Z,handleListScroll:A,handleListWheel:j,handleItemResize:k}},render(){const{itemResizable:e,keyField:r,keyToIndex:s,visibleItemsTag:f}=this;return l(pe,{onResize:this.handleListResize},{default:()=>{var u,d;return l("div",Bt(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?l("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[l(f,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(I=>{const i=I[r],S=s.get(i),b=this.$slots.default({item:I,index:S})[0];return e?l(pe,{key:i,onResize:h=>this.handleItemResize(i,h)},{default:()=>b}):(b.key=i,b)})})]):(d=(u=this.$slots).empty)===null||d===void 0?void 0:d.call(u)])}})}});function en(e,r){r&&(fe(()=>{const{value:s}=e;s&&ge.registerHandler(s,r)}),kt(()=>{const{value:s}=e;s&&ge.unregisterHandler(s)}))}const tn=G({name:"Empty",render(){return l("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),l("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),hn=G({props:{onFocus:Function,onBlur:Function},setup(e){return()=>l("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),nn=g("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[p("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[q("+",[p("description",`
 margin-top: 8px;
 `)])]),p("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),p("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),on=Object.assign(Object.assign({},oe.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),vn=G({name:"Empty",props:on,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:s}=Ie(e),f=oe("Empty","-empty",nn,Zt,e,r),{localeRef:u}=Yt("Empty"),d=Mt(Lt,null),I=_(()=>{var h,v,R;return(h=e.description)!==null&&h!==void 0?h:(R=(v=d==null?void 0:d.mergedComponentPropsRef.value)===null||v===void 0?void 0:v.Empty)===null||R===void 0?void 0:R.description}),i=_(()=>{var h,v;return((v=(h=d==null?void 0:d.mergedComponentPropsRef.value)===null||h===void 0?void 0:h.Empty)===null||v===void 0?void 0:v.renderIcon)||(()=>l(tn,null))}),S=_(()=>{const{size:h}=e,{common:{cubicBezierEaseInOut:v},self:{[ie("iconSize",h)]:R,[ie("fontSize",h)]:O,textColor:E,iconColor:w,extraTextColor:P}}=f.value;return{"--n-icon-size":R,"--n-font-size":O,"--n-bezier":v,"--n-text-color":E,"--n-icon-color":w,"--n-extra-text-color":P}}),b=s?Re("empty",_(()=>{let h="";const{size:v}=e;return h+=v[0],h}),S,e):void 0;return{mergedClsPrefix:r,mergedRenderIcon:i,localizedDescription:_(()=>I.value||u.value.description),cssVars:s?void 0:S,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender}},render(){const{$slots:e,mergedClsPrefix:r,onRender:s}=this;return s==null||s(),l("div",{class:[`${r}-empty`,this.themeClass],style:this.cssVars},this.showIcon?l("div",{class:`${r}-empty__icon`},e.icon?e.icon():l(Ht,{clsPrefix:r},{default:this.mergedRenderIcon})):null,this.showDescription?l("div",{class:`${r}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?l("div",{class:`${r}-empty__extra`},e.extra()):null)}}),ln=q([g("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[g("base-loading",`
 color: var(--n-loading-color);
 `),g("base-selection-tags","min-height: var(--n-height);"),p("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),p("state-border",`
 z-index: 1;
 border-color: #0000;
 `),g("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[p("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),g("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[p("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),g("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[p("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),g("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),g("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[g("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[p("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),p("render-label",`
 color: var(--n-text-color);
 `)]),me("disabled",[q("&:hover",[p("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),Y("focus",[p("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),Y("active",[p("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),g("base-selection-label","background-color: var(--n-color-active);"),g("base-selection-tags","background-color: var(--n-color-active);")])]),Y("disabled","cursor: not-allowed;",[p("arrow",`
 color: var(--n-arrow-color-disabled);
 `),g("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[g("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),p("render-label",`
 color: var(--n-text-color-disabled);
 `)]),g("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),g("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),g("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[p("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),p("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>Y(`${e}-status`,[p("state-border",`border: var(--n-border-${e});`),me("disabled",[q("&:hover",[p("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),Y("active",[p("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),g("base-selection-label",`background-color: var(--n-color-active-${e});`),g("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),Y("focus",[p("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),g("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),g("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[q("&:last-child","padding-right: 0;"),g("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[p("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),bn=G({name:"InternalSelection",props:Object.assign(Object.assign({},oe.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:r,mergedRtlRef:s}=Ie(e),f=Dt("InternalSelection",s,r),u=y(null),d=y(null),I=y(null),i=y(null),S=y(null),b=y(null),h=y(null),v=y(null),R=y(null),O=y(null),E=y(!1),w=y(!1),P=y(!1),B=oe("InternalSelection","-internal-selection",ln,Xt,e,ae(e,"clsPrefix")),$=_(()=>e.clearable&&!e.disabled&&(P.value||e.active)),k=_(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):te(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),W=_(()=>{const t=e.selectedOption;if(t)return t[e.labelField]}),L=_(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function A(){var t;const{value:n}=u;if(n){const{value:z}=d;z&&(z.style.width=`${n.offsetWidth}px`,e.maxTagCount!=="responsive"&&((t=R.value)===null||t===void 0||t.sync({showAllItemsBeforeCalculate:!1})))}}function j(){const{value:t}=O;t&&(t.style.display="none")}function Z(){const{value:t}=O;t&&(t.style.display="inline-block")}se(ae(e,"active"),t=>{t||j()}),se(ae(e,"pattern"),()=>{e.multiple&&At(A)});function N(t){const{onFocus:n}=e;n&&n(t)}function X(t){const{onBlur:n}=e;n&&n(t)}function o(t){const{onDeleteOption:n}=e;n&&n(t)}function a(t){const{onClear:n}=e;n&&n(t)}function c(t){const{onPatternInput:n}=e;n&&n(t)}function x(t){var n;(!t.relatedTarget||!(!((n=I.value)===null||n===void 0)&&n.contains(t.relatedTarget)))&&N(t)}function C(t){var n;!((n=I.value)===null||n===void 0)&&n.contains(t.relatedTarget)||X(t)}function T(t){a(t)}function m(){P.value=!0}function F(){P.value=!1}function H(t){!e.active||!e.filterable||t.target!==d.value&&t.preventDefault()}function K(t){o(t)}const M=y(!1);function D(t){if(t.key==="Backspace"&&!M.value&&!e.pattern.length){const{selectedOptions:n}=e;n!=null&&n.length&&K(n[n.length-1])}}let V=null;function Te(t){const{value:n}=u;if(n){const z=t.target.value;n.textContent=z,A()}e.ignoreComposition&&M.value?V=t:c(t)}function Se(){M.value=!0}function Fe(){M.value=!1,e.ignoreComposition&&c(V),V=null}function _e(t){var n;w.value=!0,(n=e.onPatternFocus)===null||n===void 0||n.call(e,t)}function Ee(t){var n;w.value=!1,(n=e.onPatternBlur)===null||n===void 0||n.call(e,t)}function Pe(){var t,n;if(e.filterable)w.value=!1,(t=b.value)===null||t===void 0||t.blur(),(n=d.value)===null||n===void 0||n.blur();else if(e.multiple){const{value:z}=i;z==null||z.blur()}else{const{value:z}=S;z==null||z.blur()}}function $e(){var t,n,z;e.filterable?(w.value=!1,(t=b.value)===null||t===void 0||t.focus()):e.multiple?(n=i.value)===null||n===void 0||n.focus():(z=S.value)===null||z===void 0||z.focus()}function Oe(){const{value:t}=d;t&&(Z(),t.focus())}function Be(){const{value:t}=d;t&&t.blur()}function ke(t){const{value:n}=h;n&&n.setTextContent(`+${t}`)}function Me(){const{value:t}=v;return t}function Le(){return d.value}let le=null;function re(){le!==null&&window.clearTimeout(le)}function He(){e.active||(re(),le=window.setTimeout(()=>{L.value&&(E.value=!0)},100))}function De(){re()}function Ae(t){t||(re(),E.value=!1)}se(L,t=>{t||(E.value=!1)}),fe(()=>{Wt(()=>{const t=b.value;t&&(e.disabled?t.removeAttribute("tabindex"):t.tabIndex=w.value?-1:0)})}),en(I,e.onResize);const{inlineThemeDisabled:he}=e,ve=_(()=>{const{size:t}=e,{common:{cubicBezierEaseInOut:n},self:{borderRadius:z,color:We,placeholderColor:Ne,textColor:Ve,paddingSingle:je,paddingMultiple:Ke,caretColor:Ue,colorDisabled:Ye,textColorDisabled:Ze,placeholderColorDisabled:Xe,colorActive:qe,boxShadowFocus:Ge,boxShadowActive:Je,boxShadowHover:Qe,border:et,borderFocus:tt,borderHover:nt,borderActive:ot,arrowColor:it,arrowColorDisabled:lt,loadingColor:rt,colorActiveWarning:at,boxShadowFocusWarning:st,boxShadowActiveWarning:ct,boxShadowHoverWarning:dt,borderWarning:ut,borderFocusWarning:ft,borderHoverWarning:ht,borderActiveWarning:vt,colorActiveError:bt,boxShadowFocusError:pt,boxShadowActiveError:gt,boxShadowHoverError:mt,borderError:wt,borderFocusError:xt,borderHoverError:yt,borderActiveError:Ct,clearColor:zt,clearColorHover:It,clearColorPressed:Rt,clearSize:Tt,arrowSize:St,[ie("height",t)]:Ft,[ie("fontSize",t)]:_t}}=B.value,J=we(je),Q=we(Ke);return{"--n-bezier":n,"--n-border":et,"--n-border-active":ot,"--n-border-focus":tt,"--n-border-hover":nt,"--n-border-radius":z,"--n-box-shadow-active":Je,"--n-box-shadow-focus":Ge,"--n-box-shadow-hover":Qe,"--n-caret-color":Ue,"--n-color":We,"--n-color-active":qe,"--n-color-disabled":Ye,"--n-font-size":_t,"--n-height":Ft,"--n-padding-single-top":J.top,"--n-padding-multiple-top":Q.top,"--n-padding-single-right":J.right,"--n-padding-multiple-right":Q.right,"--n-padding-single-left":J.left,"--n-padding-multiple-left":Q.left,"--n-padding-single-bottom":J.bottom,"--n-padding-multiple-bottom":Q.bottom,"--n-placeholder-color":Ne,"--n-placeholder-color-disabled":Xe,"--n-text-color":Ve,"--n-text-color-disabled":Ze,"--n-arrow-color":it,"--n-arrow-color-disabled":lt,"--n-loading-color":rt,"--n-color-active-warning":at,"--n-box-shadow-focus-warning":st,"--n-box-shadow-active-warning":ct,"--n-box-shadow-hover-warning":dt,"--n-border-warning":ut,"--n-border-focus-warning":ft,"--n-border-hover-warning":ht,"--n-border-active-warning":vt,"--n-color-active-error":bt,"--n-box-shadow-focus-error":pt,"--n-box-shadow-active-error":gt,"--n-box-shadow-hover-error":mt,"--n-border-error":wt,"--n-border-focus-error":xt,"--n-border-hover-error":yt,"--n-border-active-error":Ct,"--n-clear-size":Tt,"--n-clear-color":zt,"--n-clear-color-hover":It,"--n-clear-color-pressed":Rt,"--n-arrow-size":St}}),U=he?Re("internal-selection",_(()=>e.size[0]),ve,e):void 0;return{mergedTheme:B,mergedClearable:$,mergedClsPrefix:r,rtlEnabled:f,patternInputFocused:w,filterablePlaceholder:k,label:W,selected:L,showTagsPanel:E,isComposing:M,counterRef:h,counterWrapperRef:v,patternInputMirrorRef:u,patternInputRef:d,selfRef:I,multipleElRef:i,singleElRef:S,patternInputWrapperRef:b,overflowRef:R,inputTagElRef:O,handleMouseDown:H,handleFocusin:x,handleClear:T,handleMouseEnter:m,handleMouseLeave:F,handleDeleteOption:K,handlePatternKeyDown:D,handlePatternInputInput:Te,handlePatternInputBlur:Ee,handlePatternInputFocus:_e,handleMouseEnterCounter:He,handleMouseLeaveCounter:De,handleFocusout:C,handleCompositionEnd:Fe,handleCompositionStart:Se,onPopoverUpdateShow:Ae,focus:$e,focusInput:Oe,blur:Pe,blurInput:Be,updateCounter:ke,getCounter:Me,getTail:Le,renderLabel:e.renderLabel,cssVars:he?void 0:ve,themeClass:U==null?void 0:U.themeClass,onRender:U==null?void 0:U.onRender}},render(){const{status:e,multiple:r,size:s,disabled:f,filterable:u,maxTagCount:d,bordered:I,clsPrefix:i,ellipsisTagPopoverProps:S,onRender:b,renderTag:h,renderLabel:v}=this;b==null||b();const R=d==="responsive",O=typeof d=="number",E=R||O,w=l(Nt,null,{default:()=>l(qt,{clsPrefix:i,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var B,$;return($=(B=this.$slots).arrow)===null||$===void 0?void 0:$.call(B)}})});let P;if(r){const{labelField:B}=this,$=c=>l("div",{class:`${i}-base-selection-tag-wrapper`,key:c.value},h?h({option:c,handleClose:()=>{this.handleDeleteOption(c)}}):l(de,{size:s,closable:!c.disabled,disabled:f,onClose:()=>{this.handleDeleteOption(c)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>v?v(c,!0):te(c[B],c,!0)})),k=()=>(O?this.selectedOptions.slice(0,d):this.selectedOptions).map($),W=u?l("div",{class:`${i}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},l("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:f,value:this.pattern,autofocus:this.autofocus,class:`${i}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),l("span",{ref:"patternInputMirrorRef",class:`${i}-base-selection-input-tag__mirror`},this.pattern)):null,L=R?()=>l("div",{class:`${i}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},l(de,{size:s,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:f})):void 0;let A;if(O){const c=this.selectedOptions.length-d;c>0&&(A=l("div",{class:`${i}-base-selection-tag-wrapper`,key:"__counter__"},l(de,{size:s,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:f},{default:()=>`+${c}`})))}const j=R?u?l(xe,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:k,counter:L,tail:()=>W}):l(xe,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:k,counter:L}):O&&A?k().concat(A):k(),Z=E?()=>l("div",{class:`${i}-base-selection-popover`},R?k():this.selectedOptions.map($)):void 0,N=E?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},S):null,o=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?l("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`},l("div",{class:`${i}-base-selection-placeholder__inner`},this.placeholder)):null,a=u?l("div",{ref:"patternInputWrapperRef",class:`${i}-base-selection-tags`},j,R?null:W,w):l("div",{ref:"multipleElRef",class:`${i}-base-selection-tags`,tabindex:f?void 0:0},j,w);P=l(Vt,null,E?l(Ut,Object.assign({},N,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>a,default:Z}):a,o)}else if(u){const B=this.pattern||this.isComposing,$=this.active?!B:!this.selected,k=this.active?!1:this.selected;P=l("div",{ref:"patternInputWrapperRef",class:`${i}-base-selection-label`,title:this.patternInputFocused?void 0:ye(this.label)},l("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${i}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:f,disabled:f,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),k?l("div",{class:`${i}-base-selection-label__render-label ${i}-base-selection-overlay`,key:"input"},l("div",{class:`${i}-base-selection-overlay__wrapper`},h?h({option:this.selectedOption,handleClose:()=>{}}):v?v(this.selectedOption,!0):te(this.label,this.selectedOption,!0))):null,$?l("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`,key:"placeholder"},l("div",{class:`${i}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,w)}else P=l("div",{ref:"singleElRef",class:`${i}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?l("div",{class:`${i}-base-selection-input`,title:ye(this.label),key:"input"},l("div",{class:`${i}-base-selection-input__content`},h?h({option:this.selectedOption,handleClose:()=>{}}):v?v(this.selectedOption,!0):te(this.label,this.selectedOption,!0))):l("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`,key:"placeholder"},l("div",{class:`${i}-base-selection-placeholder__inner`},this.placeholder)),w);return l("div",{ref:"selfRef",class:[`${i}-base-selection`,this.rtlEnabled&&`${i}-base-selection--rtl`,this.themeClass,e&&`${i}-base-selection--${e}-status`,{[`${i}-base-selection--active`]:this.active,[`${i}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${i}-base-selection--disabled`]:this.disabled,[`${i}-base-selection--multiple`]:this.multiple,[`${i}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},P,I?l("div",{class:`${i}-base-selection__border`}):null,I?l("div",{class:`${i}-base-selection__state-border`}):null)}});export{hn as F,vn as N,fn as V,bn as a,en as u};
