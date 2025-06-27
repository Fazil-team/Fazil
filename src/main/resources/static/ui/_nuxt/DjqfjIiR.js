import{A as en,c2 as on,h as vn,q as ue,x as o,$ as R,ak as P,ah as Z,y as je,a0 as ce,s as nn,bP as qn,n as M,a2 as re,a1 as He,ao as hn,z as Ge,bU as Oe,ap as gn,ai as U,al as Qe,aj as pn,bv as bn,C as H,r as T,g as Re,a9 as mn,B as ln,bx as rn,bH as Gn,ag as Zn,aw as Yn,bF as Jn,b_ as Ie,e as Qn,c3 as Xn,N as et,am as nt,an as tt,aq as ot,v as it,ar as an,au as lt,at as rt,as as ne}from"./CEmLkHO2.js";import{u as wn,a as sn}from"./ALj0Y5_P.js";import{N as at,u as st}from"./CkeKcMRZ.js";import{i as tn,d as dt,u as Xe,B as ct,V as ut,a as ft}from"./DichKqvR.js";import{e as vt,i as ht,a as gt,b as pt,_ as Ze,V as dn,s as bt,c as mt}from"./Cv2iIsLt.js";import{N as wt}from"./DvKLQzUv.js";import{F as yt,V as xt}from"./C6Bkt8Q-.js";import{h as Be}from"./CM8LO42l.js";function cn(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function Ye(e){const l=e.filter(s=>s!==void 0);if(l.length!==0)return l.length===1?l[0]:s=>{e.forEach(c=>{c&&c(s)})}}function yn(e,l){l&&(en(()=>{const{value:s}=e;s&&on.registerHandler(s,l)}),vn(()=>{const{value:s}=e;s&&on.unregisterHandler(s)}))}const Ct=ue({name:"Checkmark",render(){return o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},o("g",{fill:"none"},o("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Ot=ue({name:"Empty",render(){return o("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),o("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),Rt=R("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[P("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[Z("+",[P("description",`
 margin-top: 8px;
 `)])]),P("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),P("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Ft=Object.assign(Object.assign({},ce.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),St=ue({name:"Empty",props:Ft,setup(e){const{mergedClsPrefixRef:l,inlineThemeDisabled:s}=je(e),c=ce("Empty","-empty",Rt,vt,e,l),{localeRef:f}=wn("Empty"),v=nn(qn,null),h=M(()=>{var g,F,x;return(g=e.description)!==null&&g!==void 0?g:(x=(F=v==null?void 0:v.mergedComponentPropsRef.value)===null||F===void 0?void 0:F.Empty)===null||x===void 0?void 0:x.description}),a=M(()=>{var g,F;return((F=(g=v==null?void 0:v.mergedComponentPropsRef.value)===null||g===void 0?void 0:g.Empty)===null||F===void 0?void 0:F.renderIcon)||(()=>o(Ot,null))}),k=M(()=>{const{size:g}=e,{common:{cubicBezierEaseInOut:F},self:{[re("iconSize",g)]:x,[re("fontSize",g)]:C,textColor:b,iconColor:I,extraTextColor:V}}=c.value;return{"--n-icon-size":x,"--n-font-size":C,"--n-bezier":F,"--n-text-color":b,"--n-icon-color":I,"--n-extra-text-color":V}}),z=s?He("empty",M(()=>{let g="";const{size:F}=e;return g+=F[0],g}),k,e):void 0;return{mergedClsPrefix:l,mergedRenderIcon:a,localizedDescription:M(()=>h.value||f.value.description),cssVars:s?void 0:k,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender}},render(){const{$slots:e,mergedClsPrefix:l,onRender:s}=this;return s==null||s(),o("div",{class:[`${l}-empty`,this.themeClass],style:this.cssVars},this.showIcon?o("div",{class:`${l}-empty__icon`},e.icon?e.icon():o(hn,{clsPrefix:l},{default:this.mergedRenderIcon})):null,this.showDescription?o("div",{class:`${l}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?o("div",{class:`${l}-empty__extra`},e.extra()):null)}});function Pt(e,l){return o(gn,{name:"fade-in-scale-up-transition"},{default:()=>e?o(hn,{clsPrefix:l,class:`${l}-base-select-option__check`},{default:()=>o(Ct)}):null})}const un=ue({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:l,pendingTmNodeRef:s,multipleRef:c,valueSetRef:f,renderLabelRef:v,renderOptionRef:h,labelFieldRef:a,valueFieldRef:k,showCheckmarkRef:z,nodePropsRef:g,handleOptionClick:F,handleOptionMouseEnter:x}=nn(tn),C=Ge(()=>{const{value:_}=s;return _?e.tmNode.key===_.key:!1});function b(_){const{tmNode:S}=e;S.disabled||F(_,S)}function I(_){const{tmNode:S}=e;S.disabled||x(_,S)}function V(_){const{tmNode:S}=e,{value:B}=C;S.disabled||B||x(_,S)}return{multiple:c,isGrouped:Ge(()=>{const{tmNode:_}=e,{parent:S}=_;return S&&S.rawNode.type==="group"}),showCheckmark:z,nodeProps:g,isPending:C,isSelected:Ge(()=>{const{value:_}=l,{value:S}=c;if(_===null)return!1;const B=e.tmNode.rawNode[k.value];if(S){const{value:D}=f;return D.has(B)}else return _===B}),labelField:a,renderLabel:v,renderOption:h,handleMouseMove:V,handleMouseEnter:I,handleClick:b}},render(){const{clsPrefix:e,tmNode:{rawNode:l},isSelected:s,isPending:c,isGrouped:f,showCheckmark:v,nodeProps:h,renderOption:a,renderLabel:k,handleClick:z,handleMouseEnter:g,handleMouseMove:F}=this,x=Pt(s,e),C=k?[k(l,s),v&&x]:[Oe(l[this.labelField],l,s),v&&x],b=h==null?void 0:h(l),I=o("div",Object.assign({},b,{class:[`${e}-base-select-option`,l.class,b==null?void 0:b.class,{[`${e}-base-select-option--disabled`]:l.disabled,[`${e}-base-select-option--selected`]:s,[`${e}-base-select-option--grouped`]:f,[`${e}-base-select-option--pending`]:c,[`${e}-base-select-option--show-checkmark`]:v}],style:[(b==null?void 0:b.style)||"",l.style||""],onClick:Ye([z,b==null?void 0:b.onClick]),onMouseenter:Ye([g,b==null?void 0:b.onMouseenter]),onMousemove:Ye([F,b==null?void 0:b.onMousemove])}),o("div",{class:`${e}-base-select-option__content`},C));return l.render?l.render({node:I,option:l,selected:s}):a?a({node:I,option:l,selected:s}):I}}),fn=ue({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:l,labelFieldRef:s,nodePropsRef:c}=nn(tn);return{labelField:s,nodeProps:c,renderLabel:e,renderOption:l}},render(){const{clsPrefix:e,renderLabel:l,renderOption:s,nodeProps:c,tmNode:{rawNode:f}}=this,v=c==null?void 0:c(f),h=l?l(f,!1):Oe(f[this.labelField],f,!1),a=o("div",Object.assign({},v,{class:[`${e}-base-select-group-header`,v==null?void 0:v.class]}),h);return f.render?f.render({node:a,option:f}):s?s({node:a,option:f,selected:!1}):a}}),Tt=R("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[R("scrollbar",`
 max-height: var(--n-height);
 `),R("virtual-list",`
 max-height: var(--n-height);
 `),R("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[P("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),R("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),R("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),P("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),P("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),P("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),P("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),R("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),R("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[U("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),Z("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),Z("&:active",`
 color: var(--n-option-text-color-pressed);
 `),U("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),U("pending",[Z("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),U("selected",`
 color: var(--n-option-text-color-active);
 `,[Z("&::before",`
 background-color: var(--n-option-color-active);
 `),U("pending",[Z("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),U("disabled",`
 cursor: not-allowed;
 `,[Qe("selected",`
 color: var(--n-option-text-color-disabled);
 `),U("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),P("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[pn({enterScale:"0.5"})])])]),Mt=ue({name:"InternalSelectMenu",props:Object.assign(Object.assign({},ce.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:l,mergedRtlRef:s}=je(e),c=bn("InternalSelectMenu",s,l),f=ce("InternalSelectMenu","-internal-select-menu",Tt,ht,e,H(e,"clsPrefix")),v=T(null),h=T(null),a=T(null),k=M(()=>e.treeMate.getFlattenedNodes()),z=M(()=>gt(k.value)),g=T(null);function F(){const{treeMate:i}=e;let d=null;const{value:A}=e;A===null?d=i.getFirstAvailableNode():(e.multiple?d=i.getNode((A||[])[(A||[]).length-1]):d=i.getNode(A),(!d||d.disabled)&&(d=i.getFirstAvailableNode())),Q(d||null)}function x(){const{value:i}=g;i&&!e.treeMate.getNode(i.key)&&(g.value=null)}let C;Re(()=>e.show,i=>{i?C=Re(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?F():x(),mn(he)):x()},{immediate:!0}):C==null||C()},{immediate:!0}),vn(()=>{C==null||C()});const b=M(()=>Jn(f.value.self[re("optionHeight",e.size)])),I=M(()=>Ie(f.value.self[re("padding",e.size)])),V=M(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),_=M(()=>{const i=k.value;return i&&i.length===0});function S(i){const{onToggle:d}=e;d&&d(i)}function B(i){const{onScroll:d}=e;d&&d(i)}function D(i){var d;(d=a.value)===null||d===void 0||d.sync(),B(i)}function $(){var i;(i=a.value)===null||i===void 0||i.sync()}function G(){const{value:i}=g;return i||null}function q(i,d){d.disabled||Q(d,!1)}function fe(i,d){d.disabled||S(d)}function ve(i){var d;Be(i,"action")||(d=e.onKeyup)===null||d===void 0||d.call(e,i)}function Y(i){var d;Be(i,"action")||(d=e.onKeydown)===null||d===void 0||d.call(e,i)}function J(i){var d;(d=e.onMousedown)===null||d===void 0||d.call(e,i),!e.focusable&&i.preventDefault()}function te(){const{value:i}=g;i&&Q(i.getNext({loop:!0}),!0)}function E(){const{value:i}=g;i&&Q(i.getPrev({loop:!0}),!0)}function Q(i,d=!1){g.value=i,d&&he()}function he(){var i,d;const A=g.value;if(!A)return;const ie=z.value(A.key);ie!==null&&(e.virtualScroll?(i=h.value)===null||i===void 0||i.scrollTo({index:ie}):(d=a.value)===null||d===void 0||d.scrollTo({index:ie,elSize:b.value}))}function ae(i){var d,A;!((d=v.value)===null||d===void 0)&&d.contains(i.target)&&((A=e.onFocus)===null||A===void 0||A.call(e,i))}function Fe(i){var d,A;!((d=v.value)===null||d===void 0)&&d.contains(i.relatedTarget)||(A=e.onBlur)===null||A===void 0||A.call(e,i)}ln(tn,{handleOptionMouseEnter:q,handleOptionClick:fe,valueSetRef:V,pendingTmNodeRef:g,nodePropsRef:H(e,"nodeProps"),showCheckmarkRef:H(e,"showCheckmark"),multipleRef:H(e,"multiple"),valueRef:H(e,"value"),renderLabelRef:H(e,"renderLabel"),renderOptionRef:H(e,"renderOption"),labelFieldRef:H(e,"labelField"),valueFieldRef:H(e,"valueField")}),ln(dt,v),en(()=>{const{value:i}=a;i&&i.sync()});const oe=M(()=>{const{size:i}=e,{common:{cubicBezierEaseInOut:d},self:{height:A,borderRadius:ie,color:we,groupHeaderTextColor:ye,actionDividerColor:le,optionTextColorPressed:W,optionTextColor:xe,optionTextColorDisabled:se,optionTextColorActive:Se,optionOpacityDisabled:Pe,optionCheckColor:Te,actionTextColor:Me,optionColorPending:ge,optionColorActive:pe,loadingColor:ze,loadingSize:_e,optionColorActivePending:ke,[re("optionFontSize",i)]:Ce,[re("optionHeight",i)]:be,[re("optionPadding",i)]:j}}=f.value;return{"--n-height":A,"--n-action-divider-color":le,"--n-action-text-color":Me,"--n-bezier":d,"--n-border-radius":ie,"--n-color":we,"--n-option-font-size":Ce,"--n-group-header-text-color":ye,"--n-option-check-color":Te,"--n-option-color-pending":ge,"--n-option-color-active":pe,"--n-option-color-active-pending":ke,"--n-option-height":be,"--n-option-opacity-disabled":Pe,"--n-option-text-color":xe,"--n-option-text-color-active":Se,"--n-option-text-color-disabled":se,"--n-option-text-color-pressed":W,"--n-option-padding":j,"--n-option-padding-left":Ie(j,"left"),"--n-option-padding-right":Ie(j,"right"),"--n-loading-color":ze,"--n-loading-size":_e}}),{inlineThemeDisabled:me}=e,K=me?He("internal-select-menu",M(()=>e.size[0]),oe,e):void 0,X={selfRef:v,next:te,prev:E,getPendingTmNode:G};return yn(v,e.onResize),Object.assign({mergedTheme:f,mergedClsPrefix:l,rtlEnabled:c,virtualListRef:h,scrollbarRef:a,itemSize:b,padding:I,flattenedNodes:k,empty:_,virtualListContainer(){const{value:i}=h;return i==null?void 0:i.listElRef},virtualListContent(){const{value:i}=h;return i==null?void 0:i.itemsElRef},doScroll:B,handleFocusin:ae,handleFocusout:Fe,handleKeyUp:ve,handleKeyDown:Y,handleMouseDown:J,handleVirtualListResize:$,handleVirtualListScroll:D,cssVars:me?void 0:oe,themeClass:K==null?void 0:K.themeClass,onRender:K==null?void 0:K.onRender},X)},render(){const{$slots:e,virtualScroll:l,clsPrefix:s,mergedTheme:c,themeClass:f,onRender:v}=this;return v==null||v(),o("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${s}-base-select-menu`,this.rtlEnabled&&`${s}-base-select-menu--rtl`,f,this.multiple&&`${s}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},rn(e.header,h=>h&&o("div",{class:`${s}-base-select-menu__header`,"data-header":!0,key:"header"},h)),this.loading?o("div",{class:`${s}-base-select-menu__loading`},o(Gn,{clsPrefix:s,strokeWidth:20})):this.empty?o("div",{class:`${s}-base-select-menu__empty`,"data-empty":!0},Yn(e.empty,()=>[o(St,{theme:c.peers.Empty,themeOverrides:c.peerOverrides.Empty})])):o(Zn,{ref:"scrollbarRef",theme:c.peers.Scrollbar,themeOverrides:c.peerOverrides.Scrollbar,scrollable:this.scrollable,container:l?this.virtualListContainer:void 0,content:l?this.virtualListContent:void 0,onScroll:l?void 0:this.doScroll},{default:()=>l?o(xt,{ref:"virtualListRef",class:`${s}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:h})=>h.isGroup?o(fn,{key:h.key,clsPrefix:s,tmNode:h}):h.ignored?null:o(un,{clsPrefix:s,key:h.key,tmNode:h})}):o("div",{class:`${s}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(h=>h.isGroup?o(fn,{key:h.key,clsPrefix:s,tmNode:h}):o(un,{clsPrefix:s,key:h.key,tmNode:h})))}),rn(e.action,h=>h&&[o("div",{class:`${s}-base-select-menu__action`,"data-action":!0,key:"action"},h),o(yt,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),zt=Z([R("base-selection",`
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
 `,[R("base-loading",`
 color: var(--n-loading-color);
 `),R("base-selection-tags","min-height: var(--n-height);"),P("border, state-border",`
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
 `),P("state-border",`
 z-index: 1;
 border-color: #0000;
 `),R("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[P("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),R("base-selection-overlay",`
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
 `,[P("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),R("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[P("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),R("base-selection-tags",`
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
 `),R("base-selection-label",`
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
 `,[R("base-selection-input",`
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
 `,[P("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),P("render-label",`
 color: var(--n-text-color);
 `)]),Qe("disabled",[Z("&:hover",[P("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),U("focus",[P("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),U("active",[P("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),R("base-selection-label","background-color: var(--n-color-active);"),R("base-selection-tags","background-color: var(--n-color-active);")])]),U("disabled","cursor: not-allowed;",[P("arrow",`
 color: var(--n-arrow-color-disabled);
 `),R("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[R("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),P("render-label",`
 color: var(--n-text-color-disabled);
 `)]),R("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),R("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),R("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[P("input",`
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
 `),P("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>U(`${e}-status`,[P("state-border",`border: var(--n-border-${e});`),Qe("disabled",[Z("&:hover",[P("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),U("active",[P("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),R("base-selection-label",`background-color: var(--n-color-active-${e});`),R("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),U("focus",[P("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),R("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),R("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[Z("&:last-child","padding-right: 0;"),R("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[P("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),_t=ue({name:"InternalSelection",props:Object.assign(Object.assign({},ce.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:l,mergedRtlRef:s}=je(e),c=bn("InternalSelection",s,l),f=T(null),v=T(null),h=T(null),a=T(null),k=T(null),z=T(null),g=T(null),F=T(null),x=T(null),C=T(null),b=T(!1),I=T(!1),V=T(!1),_=ce("InternalSelection","-internal-selection",zt,pt,e,H(e,"clsPrefix")),S=M(()=>e.clearable&&!e.disabled&&(V.value||e.active)),B=M(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Oe(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),D=M(()=>{const t=e.selectedOption;if(t)return t[e.labelField]}),$=M(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function G(){var t;const{value:u}=f;if(u){const{value:N}=v;N&&(N.style.width=`${u.offsetWidth}px`,e.maxTagCount!=="responsive"&&((t=x.value)===null||t===void 0||t.sync({showAllItemsBeforeCalculate:!1})))}}function q(){const{value:t}=C;t&&(t.style.display="none")}function fe(){const{value:t}=C;t&&(t.style.display="inline-block")}Re(H(e,"active"),t=>{t||q()}),Re(H(e,"pattern"),()=>{e.multiple&&mn(G)});function ve(t){const{onFocus:u}=e;u&&u(t)}function Y(t){const{onBlur:u}=e;u&&u(t)}function J(t){const{onDeleteOption:u}=e;u&&u(t)}function te(t){const{onClear:u}=e;u&&u(t)}function E(t){const{onPatternInput:u}=e;u&&u(t)}function Q(t){var u;(!t.relatedTarget||!(!((u=h.value)===null||u===void 0)&&u.contains(t.relatedTarget)))&&ve(t)}function he(t){var u;!((u=h.value)===null||u===void 0)&&u.contains(t.relatedTarget)||Y(t)}function ae(t){te(t)}function Fe(){V.value=!0}function oe(){V.value=!1}function me(t){!e.active||!e.filterable||t.target!==v.value&&t.preventDefault()}function K(t){J(t)}const X=T(!1);function i(t){if(t.key==="Backspace"&&!X.value&&!e.pattern.length){const{selectedOptions:u}=e;u!=null&&u.length&&K(u[u.length-1])}}let d=null;function A(t){const{value:u}=f;if(u){const N=t.target.value;u.textContent=N,G()}e.ignoreComposition&&X.value?d=t:E(t)}function ie(){X.value=!0}function we(){X.value=!1,e.ignoreComposition&&E(d),d=null}function ye(t){var u;I.value=!0,(u=e.onPatternFocus)===null||u===void 0||u.call(e,t)}function le(t){var u;I.value=!1,(u=e.onPatternBlur)===null||u===void 0||u.call(e,t)}function W(){var t,u;if(e.filterable)I.value=!1,(t=z.value)===null||t===void 0||t.blur(),(u=v.value)===null||u===void 0||u.blur();else if(e.multiple){const{value:N}=a;N==null||N.blur()}else{const{value:N}=k;N==null||N.blur()}}function xe(){var t,u,N;e.filterable?(I.value=!1,(t=z.value)===null||t===void 0||t.focus()):e.multiple?(u=a.value)===null||u===void 0||u.focus():(N=k.value)===null||N===void 0||N.focus()}function se(){const{value:t}=v;t&&(fe(),t.focus())}function Se(){const{value:t}=v;t&&t.blur()}function Pe(t){const{value:u}=g;u&&u.setTextContent(`+${t}`)}function Te(){const{value:t}=F;return t}function Me(){return v.value}let ge=null;function pe(){ge!==null&&window.clearTimeout(ge)}function ze(){e.active||(pe(),ge=window.setTimeout(()=>{$.value&&(b.value=!0)},100))}function _e(){pe()}function ke(t){t||(pe(),b.value=!1)}Re($,t=>{t||(b.value=!1)}),en(()=>{Qn(()=>{const t=z.value;t&&(e.disabled?t.removeAttribute("tabindex"):t.tabIndex=I.value?-1:0)})}),yn(h,e.onResize);const{inlineThemeDisabled:Ce}=e,be=M(()=>{const{size:t}=e,{common:{cubicBezierEaseInOut:u},self:{borderRadius:N,color:Ke,placeholderColor:We,textColor:$e,paddingSingle:Ee,paddingMultiple:Ae,caretColor:Ue,colorDisabled:qe,textColorDisabled:Ne,placeholderColorDisabled:de,colorActive:n,boxShadowFocus:r,boxShadowActive:p,boxShadowHover:O,border:w,borderFocus:m,borderHover:y,borderActive:L,arrowColor:ee,arrowColorDisabled:Cn,loadingColor:On,colorActiveWarning:Rn,boxShadowFocusWarning:Fn,boxShadowActiveWarning:Sn,boxShadowHoverWarning:Pn,borderWarning:Tn,borderFocusWarning:Mn,borderHoverWarning:zn,borderActiveWarning:_n,colorActiveError:kn,boxShadowFocusError:In,boxShadowActiveError:Bn,boxShadowHoverError:$n,borderError:En,borderFocusError:An,borderHoverError:Nn,borderActiveError:Dn,clearColor:Ln,clearColorHover:Vn,clearColorPressed:jn,clearSize:Hn,arrowSize:Kn,[re("height",t)]:Wn,[re("fontSize",t)]:Un}}=_.value,De=Ie(Ee),Le=Ie(Ae);return{"--n-bezier":u,"--n-border":w,"--n-border-active":L,"--n-border-focus":m,"--n-border-hover":y,"--n-border-radius":N,"--n-box-shadow-active":p,"--n-box-shadow-focus":r,"--n-box-shadow-hover":O,"--n-caret-color":Ue,"--n-color":Ke,"--n-color-active":n,"--n-color-disabled":qe,"--n-font-size":Un,"--n-height":Wn,"--n-padding-single-top":De.top,"--n-padding-multiple-top":Le.top,"--n-padding-single-right":De.right,"--n-padding-multiple-right":Le.right,"--n-padding-single-left":De.left,"--n-padding-multiple-left":Le.left,"--n-padding-single-bottom":De.bottom,"--n-padding-multiple-bottom":Le.bottom,"--n-placeholder-color":We,"--n-placeholder-color-disabled":de,"--n-text-color":$e,"--n-text-color-disabled":Ne,"--n-arrow-color":ee,"--n-arrow-color-disabled":Cn,"--n-loading-color":On,"--n-color-active-warning":Rn,"--n-box-shadow-focus-warning":Fn,"--n-box-shadow-active-warning":Sn,"--n-box-shadow-hover-warning":Pn,"--n-border-warning":Tn,"--n-border-focus-warning":Mn,"--n-border-hover-warning":zn,"--n-border-active-warning":_n,"--n-color-active-error":kn,"--n-box-shadow-focus-error":In,"--n-box-shadow-active-error":Bn,"--n-box-shadow-hover-error":$n,"--n-border-error":En,"--n-border-focus-error":An,"--n-border-hover-error":Nn,"--n-border-active-error":Dn,"--n-clear-size":Hn,"--n-clear-color":Ln,"--n-clear-color-hover":Vn,"--n-clear-color-pressed":jn,"--n-arrow-size":Kn}}),j=Ce?He("internal-selection",M(()=>e.size[0]),be,e):void 0;return{mergedTheme:_,mergedClearable:S,mergedClsPrefix:l,rtlEnabled:c,patternInputFocused:I,filterablePlaceholder:B,label:D,selected:$,showTagsPanel:b,isComposing:X,counterRef:g,counterWrapperRef:F,patternInputMirrorRef:f,patternInputRef:v,selfRef:h,multipleElRef:a,singleElRef:k,patternInputWrapperRef:z,overflowRef:x,inputTagElRef:C,handleMouseDown:me,handleFocusin:Q,handleClear:ae,handleMouseEnter:Fe,handleMouseLeave:oe,handleDeleteOption:K,handlePatternKeyDown:i,handlePatternInputInput:A,handlePatternInputBlur:le,handlePatternInputFocus:ye,handleMouseEnterCounter:ze,handleMouseLeaveCounter:_e,handleFocusout:he,handleCompositionEnd:we,handleCompositionStart:ie,onPopoverUpdateShow:ke,focus:xe,focusInput:se,blur:W,blurInput:Se,updateCounter:Pe,getCounter:Te,getTail:Me,renderLabel:e.renderLabel,cssVars:Ce?void 0:be,themeClass:j==null?void 0:j.themeClass,onRender:j==null?void 0:j.onRender}},render(){const{status:e,multiple:l,size:s,disabled:c,filterable:f,maxTagCount:v,bordered:h,clsPrefix:a,ellipsisTagPopoverProps:k,onRender:z,renderTag:g,renderLabel:F}=this;z==null||z();const x=v==="responsive",C=typeof v=="number",b=x||C,I=o(Xn,null,{default:()=>o(wt,{clsPrefix:a,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var _,S;return(S=(_=this.$slots).arrow)===null||S===void 0?void 0:S.call(_)}})});let V;if(l){const{labelField:_}=this,S=E=>o("div",{class:`${a}-base-selection-tag-wrapper`,key:E.value},g?g({option:E,handleClose:()=>{this.handleDeleteOption(E)}}):o(Ze,{size:s,closable:!E.disabled,disabled:c,onClose:()=>{this.handleDeleteOption(E)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>F?F(E,!0):Oe(E[_],E,!0)})),B=()=>(C?this.selectedOptions.slice(0,v):this.selectedOptions).map(S),D=f?o("div",{class:`${a}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},o("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:c,value:this.pattern,autofocus:this.autofocus,class:`${a}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),o("span",{ref:"patternInputMirrorRef",class:`${a}-base-selection-input-tag__mirror`},this.pattern)):null,$=x?()=>o("div",{class:`${a}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},o(Ze,{size:s,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:c})):void 0;let G;if(C){const E=this.selectedOptions.length-v;E>0&&(G=o("div",{class:`${a}-base-selection-tag-wrapper`,key:"__counter__"},o(Ze,{size:s,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:c},{default:()=>`+${E}`})))}const q=x?f?o(dn,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:B,counter:$,tail:()=>D}):o(dn,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:B,counter:$}):C&&G?B().concat(G):B(),fe=b?()=>o("div",{class:`${a}-base-selection-popover`},x?B():this.selectedOptions.map(S)):void 0,ve=b?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},k):null,J=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?o("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`},o("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)):null,te=f?o("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-tags`},q,x?null:D,I):o("div",{ref:"multipleElRef",class:`${a}-base-selection-tags`,tabindex:c?void 0:0},q,I);V=o(et,null,b?o(at,Object.assign({},ve,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>te,default:fe}):te,J)}else if(f){const _=this.pattern||this.isComposing,S=this.active?!_:!this.selected,B=this.active?!1:this.selected;V=o("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-label`,title:this.patternInputFocused?void 0:cn(this.label)},o("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${a}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:c,disabled:c,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),B?o("div",{class:`${a}-base-selection-label__render-label ${a}-base-selection-overlay`,key:"input"},o("div",{class:`${a}-base-selection-overlay__wrapper`},g?g({option:this.selectedOption,handleClose:()=>{}}):F?F(this.selectedOption,!0):Oe(this.label,this.selectedOption,!0))):null,S?o("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},o("div",{class:`${a}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,I)}else V=o("div",{ref:"singleElRef",class:`${a}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?o("div",{class:`${a}-base-selection-input`,title:cn(this.label),key:"input"},o("div",{class:`${a}-base-selection-input__content`},g?g({option:this.selectedOption,handleClose:()=>{}}):F?F(this.selectedOption,!0):Oe(this.label,this.selectedOption,!0))):o("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},o("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)),I);return o("div",{ref:"selfRef",class:[`${a}-base-selection`,this.rtlEnabled&&`${a}-base-selection--rtl`,this.themeClass,e&&`${a}-base-selection--${e}-status`,{[`${a}-base-selection--active`]:this.active,[`${a}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${a}-base-selection--disabled`]:this.disabled,[`${a}-base-selection--multiple`]:this.multiple,[`${a}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},V,h?o("div",{class:`${a}-base-selection__border`}):null,h?o("div",{class:`${a}-base-selection__state-border`}):null)}});function Ve(e){return e.type==="group"}function xn(e){return e.type==="ignored"}function Je(e,l){try{return!!(1+l.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function kt(e,l){return{getIsGroup:Ve,getIgnored:xn,getKey(c){return Ve(c)?c.name||c.key||"key-required":c[e]},getChildren(c){return c[l]}}}function It(e,l,s,c){if(!l)return e;function f(v){if(!Array.isArray(v))return[];const h=[];for(const a of v)if(Ve(a)){const k=f(a[c]);k.length&&h.push(Object.assign({},a,{[c]:k}))}else{if(xn(a))continue;l(s,a)&&h.push(a)}return h}return f(e)}function Bt(e,l,s){const c=new Map;return e.forEach(f=>{Ve(f)?f[s].forEach(v=>{c.set(v[l],v)}):c.set(f[l],f)}),c}const $t=Z([R("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),R("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[pn({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),Et=Object.assign(Object.assign({},ce.props),{to:Xe.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),Wt=ue({name:"Select",props:Et,setup(e){const{mergedClsPrefixRef:l,mergedBorderedRef:s,namespaceRef:c,inlineThemeDisabled:f}=je(e),v=ce("Select","-select",$t,bt,e,l),h=T(e.defaultValue),a=H(e,"value"),k=sn(a,h),z=T(!1),g=T(""),F=st(e,["items","options"]),x=T([]),C=T([]),b=M(()=>C.value.concat(x.value).concat(F.value)),I=M(()=>{const{filter:n}=e;if(n)return n;const{labelField:r,valueField:p}=e;return(O,w)=>{if(!w)return!1;const m=w[r];if(typeof m=="string")return Je(O,m);const y=w[p];return typeof y=="string"?Je(O,y):typeof y=="number"?Je(O,String(y)):!1}}),V=M(()=>{if(e.remote)return F.value;{const{value:n}=b,{value:r}=g;return!r.length||!e.filterable?n:It(n,I.value,r,e.childrenField)}}),_=M(()=>{const{valueField:n,childrenField:r}=e,p=kt(n,r);return mt(V.value,p)}),S=M(()=>Bt(b.value,e.valueField,e.childrenField)),B=T(!1),D=sn(H(e,"show"),B),$=T(null),G=T(null),q=T(null),{localeRef:fe}=wn("Select"),ve=M(()=>{var n;return(n=e.placeholder)!==null&&n!==void 0?n:fe.value.placeholder}),Y=[],J=T(new Map),te=M(()=>{const{fallbackOption:n}=e;if(n===void 0){const{labelField:r,valueField:p}=e;return O=>({[r]:String(O),[p]:O})}return n===!1?!1:r=>Object.assign(n(r),{value:r})});function E(n){const r=e.remote,{value:p}=J,{value:O}=S,{value:w}=te,m=[];return n.forEach(y=>{if(O.has(y))m.push(O.get(y));else if(r&&p.has(y))m.push(p.get(y));else if(w){const L=w(y);L&&m.push(L)}}),m}const Q=M(()=>{if(e.multiple){const{value:n}=k;return Array.isArray(n)?E(n):[]}return null}),he=M(()=>{const{value:n}=k;return!e.multiple&&!Array.isArray(n)?n===null?null:E([n])[0]||null:null}),ae=nt(e),{mergedSizeRef:Fe,mergedDisabledRef:oe,mergedStatusRef:me}=ae;function K(n,r){const{onChange:p,"onUpdate:value":O,onUpdateValue:w}=e,{nTriggerFormChange:m,nTriggerFormInput:y}=ae;p&&ne(p,n,r),w&&ne(w,n,r),O&&ne(O,n,r),h.value=n,m(),y()}function X(n){const{onBlur:r}=e,{nTriggerFormBlur:p}=ae;r&&ne(r,n),p()}function i(){const{onClear:n}=e;n&&ne(n)}function d(n){const{onFocus:r,showOnFocus:p}=e,{nTriggerFormFocus:O}=ae;r&&ne(r,n),O(),p&&le()}function A(n){const{onSearch:r}=e;r&&ne(r,n)}function ie(n){const{onScroll:r}=e;r&&ne(r,n)}function we(){var n;const{remote:r,multiple:p}=e;if(r){const{value:O}=J;if(p){const{valueField:w}=e;(n=Q.value)===null||n===void 0||n.forEach(m=>{O.set(m[w],m)})}else{const w=he.value;w&&O.set(w[e.valueField],w)}}}function ye(n){const{onUpdateShow:r,"onUpdate:show":p}=e;r&&ne(r,n),p&&ne(p,n),B.value=n}function le(){oe.value||(ye(!0),B.value=!0,e.filterable&&Ae())}function W(){ye(!1)}function xe(){g.value="",C.value=Y}const se=T(!1);function Se(){e.filterable&&(se.value=!0)}function Pe(){e.filterable&&(se.value=!1,D.value||xe())}function Te(){oe.value||(D.value?e.filterable?Ae():W():le())}function Me(n){var r,p;!((p=(r=q.value)===null||r===void 0?void 0:r.selfRef)===null||p===void 0)&&p.contains(n.relatedTarget)||(z.value=!1,X(n),W())}function ge(n){d(n),z.value=!0}function pe(){z.value=!0}function ze(n){var r;!((r=$.value)===null||r===void 0)&&r.$el.contains(n.relatedTarget)||(z.value=!1,X(n),W())}function _e(){var n;(n=$.value)===null||n===void 0||n.focus(),W()}function ke(n){var r;D.value&&(!((r=$.value)===null||r===void 0)&&r.$el.contains(lt(n))||W())}function Ce(n){if(!Array.isArray(n))return[];if(te.value)return Array.from(n);{const{remote:r}=e,{value:p}=S;if(r){const{value:O}=J;return n.filter(w=>p.has(w)||O.has(w))}else return n.filter(O=>p.has(O))}}function be(n){j(n.rawNode)}function j(n){if(oe.value)return;const{tag:r,remote:p,clearFilterAfterSelect:O,valueField:w}=e;if(r&&!p){const{value:m}=C,y=m[0]||null;if(y){const L=x.value;L.length?L.push(y):x.value=[y],C.value=Y}}if(p&&J.value.set(n[w],n),e.multiple){const m=Ce(k.value),y=m.findIndex(L=>L===n[w]);if(~y){if(m.splice(y,1),r&&!p){const L=t(n[w]);~L&&(x.value.splice(L,1),O&&(g.value=""))}}else m.push(n[w]),O&&(g.value="");K(m,E(m))}else{if(r&&!p){const m=t(n[w]);~m?x.value=[x.value[m]]:x.value=Y}Ee(),W(),K(n[w],n)}}function t(n){return x.value.findIndex(p=>p[e.valueField]===n)}function u(n){D.value||le();const{value:r}=n.target;g.value=r;const{tag:p,remote:O}=e;if(A(r),p&&!O){if(!r){C.value=Y;return}const{onCreate:w}=e,m=w?w(r):{[e.labelField]:r,[e.valueField]:r},{valueField:y,labelField:L}=e;F.value.some(ee=>ee[y]===m[y]||ee[L]===m[L])||x.value.some(ee=>ee[y]===m[y]||ee[L]===m[L])?C.value=Y:C.value=[m]}}function N(n){n.stopPropagation();const{multiple:r}=e;!r&&e.filterable&&W(),i(),r?K([],[]):K(null,null)}function Ke(n){!Be(n,"action")&&!Be(n,"empty")&&!Be(n,"header")&&n.preventDefault()}function We(n){ie(n)}function $e(n){var r,p,O,w,m;if(!e.keyboard){n.preventDefault();return}switch(n.key){case" ":if(e.filterable)break;n.preventDefault();case"Enter":if(!(!((r=$.value)===null||r===void 0)&&r.isComposing)){if(D.value){const y=(p=q.value)===null||p===void 0?void 0:p.getPendingTmNode();y?be(y):e.filterable||(W(),Ee())}else if(le(),e.tag&&se.value){const y=C.value[0];if(y){const L=y[e.valueField],{value:ee}=k;e.multiple&&Array.isArray(ee)&&ee.includes(L)||j(y)}}}n.preventDefault();break;case"ArrowUp":if(n.preventDefault(),e.loading)return;D.value&&((O=q.value)===null||O===void 0||O.prev());break;case"ArrowDown":if(n.preventDefault(),e.loading)return;D.value?(w=q.value)===null||w===void 0||w.next():le();break;case"Escape":D.value&&(rt(n),W()),(m=$.value)===null||m===void 0||m.focus();break}}function Ee(){var n;(n=$.value)===null||n===void 0||n.focus()}function Ae(){var n;(n=$.value)===null||n===void 0||n.focusInput()}function Ue(){var n;D.value&&((n=G.value)===null||n===void 0||n.syncPosition())}we(),Re(H(e,"options"),we);const qe={focus:()=>{var n;(n=$.value)===null||n===void 0||n.focus()},focusInput:()=>{var n;(n=$.value)===null||n===void 0||n.focusInput()},blur:()=>{var n;(n=$.value)===null||n===void 0||n.blur()},blurInput:()=>{var n;(n=$.value)===null||n===void 0||n.blurInput()}},Ne=M(()=>{const{self:{menuBoxShadow:n}}=v.value;return{"--n-menu-box-shadow":n}}),de=f?He("select",void 0,Ne,e):void 0;return Object.assign(Object.assign({},qe),{mergedStatus:me,mergedClsPrefix:l,mergedBordered:s,namespace:c,treeMate:_,isMounted:tt(),triggerRef:$,menuRef:q,pattern:g,uncontrolledShow:B,mergedShow:D,adjustedTo:Xe(e),uncontrolledValue:h,mergedValue:k,followerRef:G,localizedPlaceholder:ve,selectedOption:he,selectedOptions:Q,mergedSize:Fe,mergedDisabled:oe,focused:z,activeWithoutMenuOpen:se,inlineThemeDisabled:f,onTriggerInputFocus:Se,onTriggerInputBlur:Pe,handleTriggerOrMenuResize:Ue,handleMenuFocus:pe,handleMenuBlur:ze,handleMenuTabOut:_e,handleTriggerClick:Te,handleToggle:be,handleDeleteOption:j,handlePatternInput:u,handleClear:N,handleTriggerBlur:Me,handleTriggerFocus:ge,handleKeydown:$e,handleMenuAfterLeave:xe,handleMenuClickOutside:ke,handleMenuScroll:We,handleMenuKeydown:$e,handleMenuMousedown:Ke,mergedTheme:v,cssVars:f?void 0:Ne,themeClass:de==null?void 0:de.themeClass,onRender:de==null?void 0:de.onRender})},render(){return o("div",{class:`${this.mergedClsPrefix}-select`},o(ct,null,{default:()=>[o(ut,null,{default:()=>o(_t,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,l;return[(l=(e=this.$slots).arrow)===null||l===void 0?void 0:l.call(e)]}})}),o(ft,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Xe.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>o(gn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,l,s;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),ot(o(Mt,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(l=this.menuProps)===null||l===void 0?void 0:l.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(s=this.menuProps)===null||s===void 0?void 0:s.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var c,f;return[(f=(c=this.$slots).empty)===null||f===void 0?void 0:f.call(c)]},header:()=>{var c,f;return[(f=(c=this.$slots).header)===null||f===void 0?void 0:f.call(c)]},action:()=>{var c,f;return[(f=(c=this.$slots).action)===null||f===void 0?void 0:f.call(c)]}}),this.displayDirective==="show"?[[it,this.mergedShow],[an,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[an,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{Mt as N,Wt as _,St as a,kt as c,Ye as m};
