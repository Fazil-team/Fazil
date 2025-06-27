import{n as P,bz as J,bG as Q,aV as ge,aC as we,aW as be,Y as me,ah as O,$ as x,al as Z,ak as ee,ai as X,c9 as ye,q as ue,y as Se,a0 as ae,r as T,s as Ce,e as fe,a1 as $e,h as xe,g as Be,C as K,B as U,bT as Me,bW as ze,bV as Oe,x as p,ap as Te,ar as ie,v as Re,au as se,ca as le,cb as ke,E as Ee,aq as he,bx as te,N as Ae,bX as Ie,an as _e,z as de,cc as ce,G as Pe,b3 as je,bO as Fe,bB as We,as as L}from"./CEmLkHO2.js";import{e as De,f as Ne}from"./VHRASyw9.js";import{u as Y,a as He,V as Ve,B as Le}from"./DichKqvR.js";import{f as oe}from"./B-p6aW7q.js";import{a as Ke}from"./ALj0Y5_P.js";let re;function Ue(){return re===void 0&&(re=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),re}function Xe(e,t){return P(()=>{for(const n of t)if(e[n]!==void 0)return e[n];return e[t[t.length-1]]})}const _="@@mmoContext",Ye={mounted(e,{value:t}){e[_]={handler:void 0},typeof t=="function"&&(e[_].handler=t,J("mousemoveoutside",e,t))},updated(e,{value:t}){const n=e[_];typeof t=="function"?n.handler?n.handler!==t&&(Q("mousemoveoutside",e,n.handler),n.handler=t,J("mousemoveoutside",e,t)):(e[_].handler=t,J("mousemoveoutside",e,t)):n.handler&&(Q("mousemoveoutside",e,n.handler),n.handler=void 0)},unmounted(e){const{handler:t}=e[_];t&&Q("mousemoveoutside",e,t),e[_].handler=void 0}};function qe(e,t){var n=-1,r=ge(e)?Array(e.length):[];return De(e,function(d,c,u){r[++n]=t(d,c,u)}),r}function Ge(e,t){var n=we(e)?be:qe;return n(e,Ne(t))}const Je={space:"6px",spaceArrow:"10px",arrowOffset:"10px",arrowOffsetVertical:"10px",arrowHeight:"6px",padding:"8px 14px"};function Qe(e){const{boxShadow2:t,popoverColor:n,textColor2:r,borderRadius:d,fontSize:c,dividerColor:u}=e;return Object.assign(Object.assign({},Je),{fontSize:c,borderRadius:d,color:n,dividerColor:u,textColor:r,boxShadow:t})}const Ze={name:"Popover",common:me,self:Qe},ne={top:"bottom",bottom:"top",left:"right",right:"left"},f="var(--n-arrow-height) * 1.414",et=O([x("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[O(">",[x("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),Z("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[Z("scrollable",[Z("show-header-or-footer","padding: var(--n-padding);")])]),ee("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),ee("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),X("scrollable, show-header-or-footer",[ee("content",`
 padding: var(--n-padding);
 `)])]),x("popover-shared",`
 transform-origin: inherit;
 `,[x("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[x("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${f});
 height: calc(${f});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),O("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),O("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),O("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),O("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),S("top-start",`
 top: calc(${f} / -2);
 left: calc(${$("top-start")} - var(--v-offset-left));
 `),S("top",`
 top: calc(${f} / -2);
 transform: translateX(calc(${f} / -2)) rotate(45deg);
 left: 50%;
 `),S("top-end",`
 top: calc(${f} / -2);
 right: calc(${$("top-end")} + var(--v-offset-left));
 `),S("bottom-start",`
 bottom: calc(${f} / -2);
 left: calc(${$("bottom-start")} - var(--v-offset-left));
 `),S("bottom",`
 bottom: calc(${f} / -2);
 transform: translateX(calc(${f} / -2)) rotate(45deg);
 left: 50%;
 `),S("bottom-end",`
 bottom: calc(${f} / -2);
 right: calc(${$("bottom-end")} + var(--v-offset-left));
 `),S("left-start",`
 left: calc(${f} / -2);
 top: calc(${$("left-start")} - var(--v-offset-top));
 `),S("left",`
 left: calc(${f} / -2);
 transform: translateY(calc(${f} / -2)) rotate(45deg);
 top: 50%;
 `),S("left-end",`
 left: calc(${f} / -2);
 bottom: calc(${$("left-end")} + var(--v-offset-top));
 `),S("right-start",`
 right: calc(${f} / -2);
 top: calc(${$("right-start")} - var(--v-offset-top));
 `),S("right",`
 right: calc(${f} / -2);
 transform: translateY(calc(${f} / -2)) rotate(45deg);
 top: 50%;
 `),S("right-end",`
 right: calc(${f} / -2);
 bottom: calc(${$("right-end")} + var(--v-offset-top));
 `),...Ge({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,t)=>{const n=["right","left"].includes(t),r=n?"width":"height";return e.map(d=>{const c=d.split("-")[1]==="end",a=`calc((${`var(--v-target-${r}, 0px)`} - ${f}) / 2)`,l=$(d);return O(`[v-placement="${d}"] >`,[x("popover-shared",[X("center-arrow",[x("popover-arrow",`${t}: calc(max(${a}, ${l}) ${c?"+":"-"} var(--v-offset-${n?"left":"top"}));`)])])])})})]);function $(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function S(e,t){const n=e.split("-")[0],r=["top","bottom"].includes(n)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return O(`[v-placement="${e}"] >`,[x("popover-shared",`
 margin-${ne[n]}: var(--n-space);
 `,[X("show-arrow",`
 margin-${ne[n]}: var(--n-space-arrow);
 `),X("overlap",`
 margin: 0;
 `),ye("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${ne[n]}: auto;
 ${r}
 `,[x("popover-arrow",t)])])])}const ve=Object.assign(Object.assign({},ae.props),{to:Y.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number});function tt({arrowClass:e,arrowStyle:t,arrowWrapperClass:n,arrowWrapperStyle:r,clsPrefix:d}){return p("div",{key:"__popover-arrow__",style:r,class:[`${d}-popover-arrow-wrapper`,n]},p("div",{class:[`${d}-popover-arrow`,e],style:t}))}const ot=ue({name:"PopoverBody",inheritAttrs:!1,props:ve,setup(e,{slots:t,attrs:n}){const{namespaceRef:r,mergedClsPrefixRef:d,inlineThemeDisabled:c}=Se(e),u=ae("Popover","-popover",et,Ze,e,d),a=T(null),l=Ce("NPopover"),w=T(null),b=T(e.show),B=T(!1);fe(()=>{const{show:i}=e;i&&!Ue()&&!e.internalDeactivateImmediately&&(B.value=!0)});const R=P(()=>{const{trigger:i,onClickoutside:g}=e,m=[],{positionManuallyRef:{value:s}}=l;return s||(i==="click"&&!g&&m.push([ie,V,void 0,{capture:!0}]),i==="hover"&&m.push([Ye,G])),g&&m.push([ie,V,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&B.value)&&m.push([Re,e.show]),m}),M=P(()=>{const{common:{cubicBezierEaseInOut:i,cubicBezierEaseIn:g,cubicBezierEaseOut:m},self:{space:s,spaceArrow:D,padding:N,fontSize:z,textColor:H,dividerColor:o,color:v,boxShadow:y,borderRadius:A,arrowHeight:I,arrowOffset:C,arrowOffsetVertical:pe}}=u.value;return{"--n-box-shadow":y,"--n-bezier":i,"--n-bezier-ease-in":g,"--n-bezier-ease-out":m,"--n-font-size":z,"--n-text-color":H,"--n-color":v,"--n-divider-color":o,"--n-border-radius":A,"--n-arrow-height":I,"--n-arrow-offset":C,"--n-arrow-offset-vertical":pe,"--n-padding":N,"--n-space":s,"--n-space-arrow":D}}),j=P(()=>{const i=e.width==="trigger"?void 0:oe(e.width),g=[];i&&g.push({width:i});const{maxWidth:m,minWidth:s}=e;return m&&g.push({maxWidth:oe(m)}),s&&g.push({maxWidth:oe(s)}),c||g.push(M.value),g}),h=c?$e("popover",void 0,M,e):void 0;l.setBodyInstance({syncPosition:q}),xe(()=>{l.setBodyInstance(null)}),Be(K(e,"show"),i=>{e.animated||(i?b.value=!0:b.value=!1)});function q(){var i;(i=a.value)===null||i===void 0||i.syncPosition()}function k(i){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&l.handleMouseEnter(i)}function E(i){e.trigger==="hover"&&e.keepAliveOnHover&&l.handleMouseLeave(i)}function G(i){e.trigger==="hover"&&!F().contains(se(i))&&l.handleMouseMoveOutside(i)}function V(i){(e.trigger==="click"&&!F().contains(se(i))||e.onClickoutside)&&l.handleClickOutside(i)}function F(){return l.getTriggerElement()}U(Me,w),U(ze,null),U(Oe,null);function W(){if(h==null||h.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&B.value))return null;let g;const m=l.internalRenderBodyRef.value,{value:s}=d;if(m)g=m([`${s}-popover-shared`,h==null?void 0:h.themeClass.value,e.overlap&&`${s}-popover-shared--overlap`,e.showArrow&&`${s}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${s}-popover-shared--center-arrow`],w,j.value,k,E);else{const{value:D}=l.extraClassRef,{internalTrapFocus:N}=e,z=!le(t.header)||!le(t.footer),H=()=>{var o,v;const y=z?p(Ae,null,te(t.header,C=>C?p("div",{class:[`${s}-popover__header`,e.headerClass],style:e.headerStyle},C):null),te(t.default,C=>C?p("div",{class:[`${s}-popover__content`,e.contentClass],style:e.contentStyle},t):null),te(t.footer,C=>C?p("div",{class:[`${s}-popover__footer`,e.footerClass],style:e.footerStyle},C):null)):e.scrollable?(o=t.default)===null||o===void 0?void 0:o.call(t):p("div",{class:[`${s}-popover__content`,e.contentClass],style:e.contentStyle},t),A=e.scrollable?p(Ie,{contentClass:z?void 0:`${s}-popover__content ${(v=e.contentClass)!==null&&v!==void 0?v:""}`,contentStyle:z?void 0:e.contentStyle},{default:()=>y}):y,I=e.showArrow?tt({arrowClass:e.arrowClass,arrowStyle:e.arrowStyle,arrowWrapperClass:e.arrowWrapperClass,arrowWrapperStyle:e.arrowWrapperStyle,clsPrefix:s}):null;return[A,I]};g=p("div",Ee({class:[`${s}-popover`,`${s}-popover-shared`,h==null?void 0:h.themeClass.value,D.map(o=>`${s}-${o}`),{[`${s}-popover--scrollable`]:e.scrollable,[`${s}-popover--show-header-or-footer`]:z,[`${s}-popover--raw`]:e.raw,[`${s}-popover-shared--overlap`]:e.overlap,[`${s}-popover-shared--show-arrow`]:e.showArrow,[`${s}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:w,style:j.value,onKeydown:l.handleKeydown,onMouseenter:k,onMouseleave:E},n),N?p(ke,{active:e.show,autoFocus:!0},{default:H}):H())}return he(g,R.value)}return{displayed:B,namespace:r,isMounted:l.isMountedRef,zIndex:l.zIndexRef,followerRef:a,adjustedTo:Y(e),followerEnabled:b,renderContentNode:W}},render(){return p(He,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===Y.tdkey},{default:()=>this.animated?p(Te,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),rt=Object.keys(ve),nt={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function at(e,t,n){nt[t].forEach(r=>{e.props?e.props=Object.assign({},e.props):e.props={};const d=e.props[r],c=n[r];d?e.props[r]=(...u)=>{d(...u),c(...u)}:e.props[r]=c})}const it={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:Y.propTo,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},st=Object.assign(Object.assign(Object.assign({},ae.props),it),{internalOnAfterLeave:Function,internalRenderBody:Function}),ht=ue({name:"Popover",inheritAttrs:!1,props:st,__popover__:!0,setup(e){const t=_e(),n=T(null),r=P(()=>e.show),d=T(e.defaultShow),c=Ke(r,d),u=de(()=>e.disabled?!1:c.value),a=()=>{if(e.disabled)return!0;const{getDisabled:o}=e;return!!(o!=null&&o())},l=()=>a()?!1:c.value,w=Xe(e,["arrow","showArrow"]),b=P(()=>e.overlap?!1:w.value);let B=null;const R=T(null),M=T(null),j=de(()=>e.x!==void 0&&e.y!==void 0);function h(o){const{"onUpdate:show":v,onUpdateShow:y,onShow:A,onHide:I}=e;d.value=o,v&&L(v,o),y&&L(y,o),o&&A&&L(A,!0),o&&I&&L(I,!1)}function q(){B&&B.syncPosition()}function k(){const{value:o}=R;o&&(window.clearTimeout(o),R.value=null)}function E(){const{value:o}=M;o&&(window.clearTimeout(o),M.value=null)}function G(){const o=a();if(e.trigger==="focus"&&!o){if(l())return;h(!0)}}function V(){const o=a();if(e.trigger==="focus"&&!o){if(!l())return;h(!1)}}function F(){const o=a();if(e.trigger==="hover"&&!o){if(E(),R.value!==null||l())return;const v=()=>{h(!0),R.value=null},{delay:y}=e;y===0?v():R.value=window.setTimeout(v,y)}}function W(){const o=a();if(e.trigger==="hover"&&!o){if(k(),M.value!==null||!l())return;const v=()=>{h(!1),M.value=null},{duration:y}=e;y===0?v():M.value=window.setTimeout(v,y)}}function i(){W()}function g(o){var v;l()&&(e.trigger==="click"&&(k(),E(),h(!1)),(v=e.onClickoutside)===null||v===void 0||v.call(e,o))}function m(){if(e.trigger==="click"&&!a()){k(),E();const o=!l();h(o)}}function s(o){e.internalTrapFocus&&o.key==="Escape"&&(k(),E(),h(!1))}function D(o){d.value=o}function N(){var o;return(o=n.value)===null||o===void 0?void 0:o.targetRef}function z(o){B=o}return U("NPopover",{getTriggerElement:N,handleKeydown:s,handleMouseEnter:F,handleMouseLeave:W,handleClickOutside:g,handleMouseMoveOutside:i,setBodyInstance:z,positionManuallyRef:j,isMountedRef:t,zIndexRef:K(e,"zIndex"),extraClassRef:K(e,"internalExtraClass"),internalRenderBodyRef:K(e,"internalRenderBody")}),fe(()=>{c.value&&a()&&h(!1)}),{binderInstRef:n,positionManually:j,mergedShowConsideringDisabledProp:u,uncontrolledShow:d,mergedShowArrow:b,getMergedShow:l,setShow:D,handleClick:m,handleMouseEnter:F,handleMouseLeave:W,handleFocus:G,handleBlur:V,syncPosition:q}},render(){var e;const{positionManually:t,$slots:n}=this;let r,d=!1;if(!t&&(n.activator?r=ce(n,"activator"):r=ce(n,"trigger"),r)){r=Pe(r),r=r.type===je?p("span",[r]):r;const c={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=r.type)===null||e===void 0)&&e.__popover__)d=!0,r.props||(r.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),r.props.internalSyncTargetWithParent=!0,r.props.internalInheritedEventHandlers?r.props.internalInheritedEventHandlers=[c,...r.props.internalInheritedEventHandlers]:r.props.internalInheritedEventHandlers=[c];else{const{internalInheritedEventHandlers:u}=this,a=[c,...u],l={onBlur:w=>{a.forEach(b=>{b.onBlur(w)})},onFocus:w=>{a.forEach(b=>{b.onFocus(w)})},onClick:w=>{a.forEach(b=>{b.onClick(w)})},onMouseenter:w=>{a.forEach(b=>{b.onMouseenter(w)})},onMouseleave:w=>{a.forEach(b=>{b.onMouseleave(w)})}};at(r,u?"nested":t?"manual":this.trigger,l)}}return p(Le,{ref:"binderInstRef",syncTarget:!d,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const c=this.getMergedShow();return[this.internalTrapFocus&&c?he(p("div",{style:{position:"fixed",inset:0}}),[[Fe,{enabled:c,zIndex:this.zIndex}]]):null,t?null:p(Ve,null,{default:()=>r}),p(ot,We(this.$props,rt,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:c})),{default:()=>{var u,a;return(a=(u=this.$slots).default)===null||a===void 0?void 0:a.call(u)},header:()=>{var u,a;return(a=(u=this.$slots).header)===null||a===void 0?void 0:a.call(u)},footer:()=>{var u,a;return(a=(u=this.$slots).footer)===null||a===void 0?void 0:a.call(u)}})]}})}});export{ht as N,Ze as a,it as p,tt as r,Qe as s,Xe as u};
