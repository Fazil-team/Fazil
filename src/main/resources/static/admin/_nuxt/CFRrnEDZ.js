import{r as $,h as de,J as Re,ba as Ke,bb as ze,j as He,aV as Z,b9 as Le,aU as X,n as B,q as u,ab as ae,V as le,W as Me,aE as h,c3 as Te,bo as Be,ac as se,ad as j,c4 as he,B as C,am as q,ag as J,T as Oe,aF as ve,ae as Q,aZ as Ae,aH as _e,c5 as De,c6 as Fe,ap as $e,v as K,aq as je,u as U,Z as ce,y as H,X as T,a0 as L,z as We,A as me,a4 as re,C as Ee,b5 as Ue,E as F}from"./C_prpByR.js";import{c as qe}from"./BlRx4nbL.js";import{r as Ve}from"./Dyqypxy3.js";import{a as Ge,c as Ze}from"./CittKucm.js";import{e as Xe,h as pe,c as Je}from"./C0ZFq11c.js";import{f as be,B as Qe,V as Ye,a as eo,r as oo,N as no,p as ge}from"./CnsDiBjo.js";import{t as to}from"./BnZV5XsR.js";import{N as ro}from"./BkzJZeyl.js";import{u as io}from"./Bj0Boqh4.js";function ao(e,o,t){const n=$(e.value);let i=null;return de(e,r=>{i!==null&&window.clearTimeout(i),r===!0?t&&!t.value?n.value=!0:i=window.setTimeout(()=>{n.value=!0},o):n.value=!1}),n}function lo(e={},o){const t=Re({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:n,keyup:i}=e,r=d=>{switch(d.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}n!==void 0&&Object.keys(n).forEach(b=>{if(b!==d.key)return;const v=n[b];if(typeof v=="function")v(d);else{const{stop:y=!1,prevent:S=!1}=v;y&&d.stopPropagation(),S&&d.preventDefault(),v.handler(d)}})},l=d=>{switch(d.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}i!==void 0&&Object.keys(i).forEach(b=>{if(b!==d.key)return;const v=i[b];if(typeof v=="function")v(d);else{const{stop:y=!1,prevent:S=!1}=v;y&&d.stopPropagation(),S&&d.preventDefault(),v.handler(d)}})},a=()=>{(o===void 0||o.value)&&(X("keydown",document,r),X("keyup",document,l)),o!==void 0&&de(o,d=>{d?(X("keydown",document,r),X("keyup",document,l)):(Z("keydown",document,r),Z("keyup",document,l))})};return Ke()?(ze(a),He(()=>{(o===void 0||o.value)&&(Z("keydown",document,r),Z("keyup",document,l))})):a(),Le(t)}const so=B({name:"ChevronRight",render(){return u("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),uo=ae({name:"Ellipsis",common:le,peers:{Tooltip:to}}),co={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"};function po(e){const{primaryColor:o,textColor2:t,dividerColor:n,hoverColor:i,popoverColor:r,invertedColor:l,borderRadius:a,fontSizeSmall:d,fontSizeMedium:b,fontSizeLarge:v,fontSizeHuge:y,heightSmall:S,heightMedium:P,heightLarge:k,heightHuge:R,textColor3:g,opacityDisabled:N}=e;return Object.assign(Object.assign({},co),{optionHeightSmall:S,optionHeightMedium:P,optionHeightLarge:k,optionHeightHuge:R,borderRadius:a,fontSizeSmall:d,fontSizeMedium:b,fontSizeLarge:v,fontSizeHuge:y,optionTextColor:t,optionTextColorHover:t,optionTextColorActive:o,optionTextColorChildActive:o,color:r,dividerColor:n,suffixColor:t,prefixColor:t,optionColorHover:i,optionColorActive:Me(o,{alpha:.1}),groupHeaderTextColor:g,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:l,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:o,optionColorActiveInverted:o,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:N})}const fo=ae({name:"Dropdown",common:le,peers:{Popover:be},self:po}),xe=fo,ho={thPaddingSmall:"8px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"8px",tdPaddingMedium:"12px",tdPaddingLarge:"12px",sorterSize:"15px",resizableContainerSize:"8px",resizableSize:"2px",filterSize:"15px",paginationMargin:"12px 0 0 0",emptyPadding:"48px 0",actionPadding:"8px 12px",actionButtonMargin:"0 8px 0 0"};function vo(e){const{cardColor:o,modalColor:t,popoverColor:n,textColor2:i,textColor1:r,tableHeaderColor:l,tableColorHover:a,iconColor:d,primaryColor:b,fontWeightStrong:v,borderRadius:y,lineHeight:S,fontSizeSmall:P,fontSizeMedium:k,fontSizeLarge:R,dividerColor:g,heightSmall:N,opacityDisabled:O,tableColorStriped:A}=e;return Object.assign(Object.assign({},ho),{actionDividerColor:g,lineHeight:S,borderRadius:y,fontSizeSmall:P,fontSizeMedium:k,fontSizeLarge:R,borderColor:h(o,g),tdColorHover:h(o,a),tdColorSorting:h(o,a),tdColorStriped:h(o,A),thColor:h(o,l),thColorHover:h(h(o,l),a),thColorSorting:h(h(o,l),a),tdColor:o,tdTextColor:i,thTextColor:r,thFontWeight:v,thButtonColorHover:a,thIconColor:d,thIconColorActive:b,borderColorModal:h(t,g),tdColorHoverModal:h(t,a),tdColorSortingModal:h(t,a),tdColorStripedModal:h(t,A),thColorModal:h(t,l),thColorHoverModal:h(h(t,l),a),thColorSortingModal:h(h(t,l),a),tdColorModal:t,borderColorPopover:h(n,g),tdColorHoverPopover:h(n,a),tdColorSortingPopover:h(n,a),tdColorStripedPopover:h(n,A),thColorPopover:h(n,l),thColorHoverPopover:h(h(n,l),a),thColorSortingPopover:h(h(n,l),a),tdColorPopover:n,boxShadowBefore:"inset -12px 0 8px -12px rgba(0, 0, 0, .18)",boxShadowAfter:"inset 12px 0 8px -12px rgba(0, 0, 0, .18)",loadingColor:b,loadingSize:N,opacityLoading:O})}const mo=ae({name:"DataTable",common:le,peers:{Button:Te,Checkbox:qe,Radio:Ve,Pagination:Ge,Scrollbar:Be,Empty:Xe,Popover:be,Ellipsis:uo,Dropdown:xe},self:vo}),Bo=mo,we=B({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return u("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),ue=se("n-dropdown-menu"),Y=se("n-dropdown"),fe=se("n-dropdown-option");function ie(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function bo(e){return e.type==="group"}function ye(e){return e.type==="divider"}function go(e){return e.type==="render"}const Se=B({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=j(Y),{hoverKeyRef:t,keyboardKeyRef:n,lastToggledSubmenuKeyRef:i,pendingKeyPathRef:r,activeKeyPathRef:l,animatedRef:a,mergedShowRef:d,renderLabelRef:b,renderIconRef:v,labelFieldRef:y,childrenFieldRef:S,renderOptionRef:P,nodePropsRef:k,menuPropsRef:R}=o,g=j(fe,null),N=j(ue),O=j(he),A=C(()=>e.tmNode.rawNode),V=C(()=>{const{value:c}=S;return ie(e.tmNode.rawNode,c)}),ee=C(()=>{const{disabled:c}=e.tmNode;return c}),oe=C(()=>{if(!V.value)return!1;const{key:c,disabled:w}=e.tmNode;if(w)return!1;const{value:z}=t,{value:_}=n,{value:te}=i,{value:D}=r;return z!==null?D.includes(c):_!==null?D.includes(c)&&D[D.length-1]!==c:te!==null?D.includes(c):!1}),ne=C(()=>n.value===null&&!a.value),G=ao(oe,300,ne),W=C(()=>!!(g!=null&&g.enteringSubmenuRef.value)),E=$(!1);q(fe,{enteringSubmenuRef:E});function M(){E.value=!0}function s(){E.value=!1}function x(){const{parentKey:c,tmNode:w}=e;w.disabled||d.value&&(i.value=c,n.value=null,t.value=w.key)}function f(){const{tmNode:c}=e;c.disabled||d.value&&t.value!==c.key&&x()}function p(c){if(e.tmNode.disabled||!d.value)return;const{relatedTarget:w}=c;w&&!pe({target:w},"dropdownOption")&&!pe({target:w},"scrollbarRail")&&(t.value=null)}function I(){const{value:c}=V,{tmNode:w}=e;d.value&&!c&&!w.disabled&&(o.doSelect(w.key,w.rawNode),o.doUpdateShow(!1))}return{labelField:y,renderLabel:b,renderIcon:v,siblingHasIcon:N.showIconRef,siblingHasSubmenu:N.hasSubmenuRef,menuProps:R,popoverBody:O,animated:a,mergedShowSubmenu:C(()=>G.value&&!W.value),rawNode:A,hasSubmenu:V,pending:J(()=>{const{value:c}=r,{key:w}=e.tmNode;return c.includes(w)}),childActive:J(()=>{const{value:c}=l,{key:w}=e.tmNode,z=c.findIndex(_=>w===_);return z===-1?!1:z<c.length-1}),active:J(()=>{const{value:c}=l,{key:w}=e.tmNode,z=c.findIndex(_=>w===_);return z===-1?!1:z===c.length-1}),mergedDisabled:ee,renderOption:P,nodeProps:k,handleClick:I,handleMouseMove:f,handleMouseEnter:x,handleMouseLeave:p,handleSubmenuBeforeEnter:M,handleSubmenuAfterEnter:s}},render(){var e,o;const{animated:t,rawNode:n,mergedShowSubmenu:i,clsPrefix:r,siblingHasIcon:l,siblingHasSubmenu:a,renderLabel:d,renderIcon:b,renderOption:v,nodeProps:y,props:S,scrollable:P}=this;let k=null;if(i){const O=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,n,n.children);k=u(Ce,Object.assign({},O,{clsPrefix:r,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const R={class:[`${r}-dropdown-option-body`,this.pending&&`${r}-dropdown-option-body--pending`,this.active&&`${r}-dropdown-option-body--active`,this.childActive&&`${r}-dropdown-option-body--child-active`,this.mergedDisabled&&`${r}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},g=y==null?void 0:y(n),N=u("div",Object.assign({class:[`${r}-dropdown-option`,g==null?void 0:g.class],"data-dropdown-option":!0},g),u("div",ve(R,S),[u("div",{class:[`${r}-dropdown-option-body__prefix`,l&&`${r}-dropdown-option-body__prefix--show-icon`]},[b?b(n):Q(n.icon)]),u("div",{"data-dropdown-option":!0,class:`${r}-dropdown-option-body__label`},d?d(n):Q((o=n[this.labelField])!==null&&o!==void 0?o:n.title)),u("div",{"data-dropdown-option":!0,class:[`${r}-dropdown-option-body__suffix`,a&&`${r}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?u(ro,null,{default:()=>u(so,null)}):null)]),this.hasSubmenu?u(Qe,null,{default:()=>[u(Ye,null,{default:()=>u("div",{class:`${r}-dropdown-offset-container`},u(eo,{show:this.mergedShowSubmenu,placement:this.placement,to:P&&this.popoverBody||void 0,teleportDisabled:!P},{default:()=>u("div",{class:`${r}-dropdown-menu-wrapper`},t?u(Oe,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>k}):k)}))})]}):null);return v?v({node:N,option:n}):N}}),xo=B({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=j(ue),{renderLabelRef:t,labelFieldRef:n,nodePropsRef:i,renderOptionRef:r}=j(Y);return{labelField:n,showIcon:e,hasSubmenu:o,renderLabel:t,nodeProps:i,renderOption:r}},render(){var e;const{clsPrefix:o,hasSubmenu:t,showIcon:n,nodeProps:i,renderLabel:r,renderOption:l}=this,{rawNode:a}=this.tmNode,d=u("div",Object.assign({class:`${o}-dropdown-option`},i==null?void 0:i(a)),u("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},u("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,n&&`${o}-dropdown-option-body__prefix--show-icon`]},Q(a.icon)),u("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},r?r(a):Q((e=a.title)!==null&&e!==void 0?e:a[this.labelField])),u("div",{class:[`${o}-dropdown-option-body__suffix`,t&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return l?l({node:d,option:a}):d}}),wo=B({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:t}=this,{children:n}=e;return u(_e,null,u(xo,{clsPrefix:t,tmNode:e,key:e.key}),n==null?void 0:n.map(i=>{const{rawNode:r}=i;return r.show===!1?null:ye(r)?u(we,{clsPrefix:t,key:i.key}):i.isGroup?(Ae("dropdown","`group` node is not allowed to be put in `group` node."),null):u(Se,{clsPrefix:t,tmNode:i,parentKey:o,key:i.key})}))}}),yo=B({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return u("div",o,[e==null?void 0:e()])}}),Ce=B({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:t}=j(Y);q(ue,{showIconRef:C(()=>{const i=o.value;return e.tmNodes.some(r=>{var l;if(r.isGroup)return(l=r.children)===null||l===void 0?void 0:l.some(({rawNode:d})=>i?i(d):d.icon);const{rawNode:a}=r;return i?i(a):a.icon})}),hasSubmenuRef:C(()=>{const{value:i}=t;return e.tmNodes.some(r=>{var l;if(r.isGroup)return(l=r.children)===null||l===void 0?void 0:l.some(({rawNode:d})=>ie(d,i));const{rawNode:a}=r;return ie(a,i)})})});const n=$(null);return q(De,null),q(Fe,null),q(he,n),{bodyRef:n}},render(){const{parentKey:e,clsPrefix:o,scrollable:t}=this,n=this.tmNodes.map(i=>{const{rawNode:r}=i;return r.show===!1?null:go(r)?u(yo,{tmNode:i,key:i.key}):ye(r)?u(we,{clsPrefix:o,key:i.key}):bo(r)?u(wo,{clsPrefix:o,tmNode:i,parentKey:e,key:i.key}):u(Se,{clsPrefix:o,tmNode:i,parentKey:e,key:i.key,props:r.props,scrollable:t})});return u("div",{class:[`${o}-dropdown-menu`,t&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},t?u($e,{contentClass:`${o}-dropdown-menu__content`},{default:()=>n}):n,this.showArrow?oo({clsPrefix:o,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),So=K("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[je(),K("dropdown-option",`
 position: relative;
 `,[U("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[U("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),K("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[U("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),ce("disabled",[H("pending",`
 color: var(--n-option-text-color-hover);
 `,[T("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),U("&::before","background-color: var(--n-option-color-hover);")]),H("active",`
 color: var(--n-option-text-color-active);
 `,[T("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),U("&::before","background-color: var(--n-option-color-active);")]),H("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[T("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),H("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),H("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[T("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[H("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),T("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[H("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),K("icon",`
 font-size: var(--n-option-icon-size);
 `)]),T("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),T("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[H("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),K("icon",`
 font-size: var(--n-option-icon-size);
 `)]),K("dropdown-menu","pointer-events: all;")]),K("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),K("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),K("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),U(">",[K("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ce("scrollable",`
 padding: var(--n-padding);
 `),H("scrollable",[T("content",`
 padding: var(--n-padding);
 `)])]),Co={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Po=Object.keys(ge),ko=Object.assign(Object.assign(Object.assign({},ge),Co),me.props),Oo=B({name:"Dropdown",inheritAttrs:!1,props:ko,setup(e){const o=$(!1),t=io(L(e,"show"),o),n=C(()=>{const{keyField:s,childrenField:x}=e;return Je(e.options,{getKey(f){return f[s]},getDisabled(f){return f.disabled===!0},getIgnored(f){return f.type==="divider"||f.type==="render"},getChildren(f){return f[x]}})}),i=C(()=>n.value.treeNodes),r=$(null),l=$(null),a=$(null),d=C(()=>{var s,x,f;return(f=(x=(s=r.value)!==null&&s!==void 0?s:l.value)!==null&&x!==void 0?x:a.value)!==null&&f!==void 0?f:null}),b=C(()=>n.value.getPath(d.value).keyPath),v=C(()=>n.value.getPath(e.value).keyPath),y=J(()=>e.keyboard&&t.value);lo({keydown:{ArrowUp:{prevent:!0,handler:ee},ArrowRight:{prevent:!0,handler:V},ArrowDown:{prevent:!0,handler:oe},ArrowLeft:{prevent:!0,handler:A},Enter:{prevent:!0,handler:ne},Escape:O}},y);const{mergedClsPrefixRef:S,inlineThemeDisabled:P}=We(e),k=me("Dropdown","-dropdown",So,xe,e,S);q(Y,{labelFieldRef:L(e,"labelField"),childrenFieldRef:L(e,"childrenField"),renderLabelRef:L(e,"renderLabel"),renderIconRef:L(e,"renderIcon"),hoverKeyRef:r,keyboardKeyRef:l,lastToggledSubmenuKeyRef:a,pendingKeyPathRef:b,activeKeyPathRef:v,animatedRef:L(e,"animated"),mergedShowRef:t,nodePropsRef:L(e,"nodeProps"),renderOptionRef:L(e,"renderOption"),menuPropsRef:L(e,"menuProps"),doSelect:R,doUpdateShow:g}),de(t,s=>{!e.animated&&!s&&N()});function R(s,x){const{onSelect:f}=e;f&&re(f,s,x)}function g(s){const{"onUpdate:show":x,onUpdateShow:f}=e;x&&re(x,s),f&&re(f,s),o.value=s}function N(){r.value=null,l.value=null,a.value=null}function O(){g(!1)}function A(){W("left")}function V(){W("right")}function ee(){W("up")}function oe(){W("down")}function ne(){const s=G();s!=null&&s.isLeaf&&t.value&&(R(s.key,s.rawNode),g(!1))}function G(){var s;const{value:x}=n,{value:f}=d;return!x||f===null?null:(s=x.getNode(f))!==null&&s!==void 0?s:null}function W(s){const{value:x}=d,{value:{getFirstAvailableNode:f}}=n;let p=null;if(x===null){const I=f();I!==null&&(p=I.key)}else{const I=G();if(I){let c;switch(s){case"down":c=I.getNext();break;case"up":c=I.getPrev();break;case"right":c=I.getChild();break;case"left":c=I.getParent();break}c&&(p=c.key)}}p!==null&&(r.value=null,l.value=p)}const E=C(()=>{const{size:s,inverted:x}=e,{common:{cubicBezierEaseInOut:f},self:p}=k.value,{padding:I,dividerColor:c,borderRadius:w,optionOpacityDisabled:z,[F("optionIconSuffixWidth",s)]:_,[F("optionSuffixWidth",s)]:te,[F("optionIconPrefixWidth",s)]:D,[F("optionPrefixWidth",s)]:Pe,[F("fontSize",s)]:ke,[F("optionHeight",s)]:Ne,[F("optionIconSize",s)]:Ie}=p,m={"--n-bezier":f,"--n-font-size":ke,"--n-padding":I,"--n-border-radius":w,"--n-option-height":Ne,"--n-option-prefix-width":Pe,"--n-option-icon-prefix-width":D,"--n-option-suffix-width":te,"--n-option-icon-suffix-width":_,"--n-option-icon-size":Ie,"--n-divider-color":c,"--n-option-opacity-disabled":z};return x?(m["--n-color"]=p.colorInverted,m["--n-option-color-hover"]=p.optionColorHoverInverted,m["--n-option-color-active"]=p.optionColorActiveInverted,m["--n-option-text-color"]=p.optionTextColorInverted,m["--n-option-text-color-hover"]=p.optionTextColorHoverInverted,m["--n-option-text-color-active"]=p.optionTextColorActiveInverted,m["--n-option-text-color-child-active"]=p.optionTextColorChildActiveInverted,m["--n-prefix-color"]=p.prefixColorInverted,m["--n-suffix-color"]=p.suffixColorInverted,m["--n-group-header-text-color"]=p.groupHeaderTextColorInverted):(m["--n-color"]=p.color,m["--n-option-color-hover"]=p.optionColorHover,m["--n-option-color-active"]=p.optionColorActive,m["--n-option-text-color"]=p.optionTextColor,m["--n-option-text-color-hover"]=p.optionTextColorHover,m["--n-option-text-color-active"]=p.optionTextColorActive,m["--n-option-text-color-child-active"]=p.optionTextColorChildActive,m["--n-prefix-color"]=p.prefixColor,m["--n-suffix-color"]=p.suffixColor,m["--n-group-header-text-color"]=p.groupHeaderTextColor),m}),M=P?Ee("dropdown",C(()=>`${e.size[0]}${e.inverted?"i":""}`),E,e):void 0;return{mergedClsPrefix:S,mergedTheme:k,tmNodes:i,mergedShow:t,handleAfterLeave:()=>{e.animated&&N()},doUpdateShow:g,cssVars:P?void 0:E,themeClass:M==null?void 0:M.themeClass,onRender:M==null?void 0:M.onRender}},render(){const e=(n,i,r,l,a)=>{var d;const{mergedClsPrefix:b,menuProps:v}=this;(d=this.onRender)===null||d===void 0||d.call(this);const y=(v==null?void 0:v(void 0,this.tmNodes.map(P=>P.rawNode)))||{},S={ref:Ze(i),class:[n,`${b}-dropdown`,this.themeClass],clsPrefix:b,tmNodes:this.tmNodes,style:[...r,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:l,onMouseleave:a};return u(Ce,ve(this.$attrs,S,y))},{mergedTheme:o}=this,t={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return u(no,Object.assign({},Ue(this.$props,Po),t),{trigger:()=>{var n,i;return(i=(n=this.$slots).default)===null||i===void 0?void 0:i.call(n)}})}});export{so as C,Oo as _,vo as a,xe as b,Bo as d,uo as e,po as s};
