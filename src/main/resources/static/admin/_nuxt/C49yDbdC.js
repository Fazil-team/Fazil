import{ac as ee,ad as oe,$,r as k,a0 as I,ag as V,z as A,a4 as B,v as _,X as m,y as C,u as F,Z as T,n as te,A as D,am as re,ak as ne,B as U,C as ae,aJ as ie,q as P,E}from"./C_prpByR.js";import{u as G}from"./Bj0Boqh4.js";import{g as de}from"./Bk_rJcZu.js";import{r as se}from"./Dyqypxy3.js";const ge={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},j=ee("n-radio-group");function pe(e){const o=oe(j,null),r=$(e,{mergedSize(t){const{size:a}=e;if(a!==void 0)return a;if(o){const{mergedSizeRef:{value:d}}=o;if(d!==void 0)return d}return t?t.mergedSize.value:"medium"},mergedDisabled(t){return!!(e.disabled||o!=null&&o.disabledRef.value||t!=null&&t.disabled.value)}}),{mergedSizeRef:b,mergedDisabledRef:n}=r,s=k(null),l=k(null),u=k(e.defaultChecked),f=I(e,"checked"),g=G(f,u),h=V(()=>o?o.valueRef.value===e.value:g.value),R=V(()=>{const{name:t}=e;if(t!==void 0)return t;if(o)return o.nameRef.value}),v=k(!1);function x(){if(o){const{doUpdateValue:t}=o,{value:a}=e;B(t,a)}else{const{onUpdateChecked:t,"onUpdate:checked":a}=e,{nTriggerFormInput:d,nTriggerFormChange:i}=r;t&&B(t,!0),a&&B(a,!0),d(),i(),u.value=!0}}function p(){n.value||h.value||x()}function y(){p(),s.value&&(s.value.checked=h.value)}function z(){v.value=!1}function S(){v.value=!0}return{mergedClsPrefix:o?o.mergedClsPrefixRef:A(e).mergedClsPrefixRef,inputRef:s,labelRef:l,mergedName:R,mergedDisabled:n,renderSafeChecked:h,focus:v,mergedSize:b,handleRadioInputChange:y,handleRadioInputBlur:z,handleRadioInputFocus:S}}const le=_("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[m("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[C("checked",{backgroundColor:"var(--n-button-border-color-active)"}),C("disabled",{opacity:"var(--n-opacity-disabled)"})]),C("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[_("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),m("splitor",{height:"var(--n-height)"})]),_("radio-button",`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background: var(--n-button-color);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[_("radio-input",`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),m("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),F("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[m("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),F("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[m("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),T("disabled",`
 cursor: pointer;
 `,[F("&:hover",[m("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),T("checked",{color:"var(--n-button-text-color-hover)"})]),C("focus",[F("&:not(:active)",[m("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),C("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),C("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function ue(e,o,r){var b;const n=[];let s=!1;for(let l=0;l<e.length;++l){const u=e[l],f=(b=u.type)===null||b===void 0?void 0:b.name;f==="RadioButton"&&(s=!0);const g=u.props;if(f!=="RadioButton"){n.push(u);continue}if(l===0)n.push(u);else{const h=n[n.length-1].props,R=o===h.value,v=h.disabled,x=o===g.value,p=g.disabled,y=(R?2:0)+(v?0:1),z=(x?2:0)+(p?0:1),S={[`${r}-radio-group__splitor--disabled`]:v,[`${r}-radio-group__splitor--checked`]:R},t={[`${r}-radio-group__splitor--disabled`]:p,[`${r}-radio-group__splitor--checked`]:x},a=y<z?t:S;n.push(P("div",{class:[`${r}-radio-group__splitor`,a]}),u)}}return{children:n,isButtonGroup:s}}const ce=Object.assign(Object.assign({},D.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),me=te({name:"RadioGroup",props:ce,setup(e){const o=k(null),{mergedSizeRef:r,mergedDisabledRef:b,nTriggerFormChange:n,nTriggerFormInput:s,nTriggerFormBlur:l,nTriggerFormFocus:u}=$(e),{mergedClsPrefixRef:f,inlineThemeDisabled:g,mergedRtlRef:h}=A(e),R=D("Radio","-radio-group",le,se,e,f),v=k(e.defaultValue),x=I(e,"value"),p=G(x,v);function y(i){const{onUpdateValue:c,"onUpdate:value":w}=e;c&&B(c,i),w&&B(w,i),v.value=i,n(),s()}function z(i){const{value:c}=o;c&&(c.contains(i.relatedTarget)||u())}function S(i){const{value:c}=o;c&&(c.contains(i.relatedTarget)||l())}re(j,{mergedClsPrefixRef:f,nameRef:I(e,"name"),valueRef:p,disabledRef:b,mergedSizeRef:r,doUpdateValue:y});const t=ne("Radio",h,f),a=U(()=>{const{value:i}=r,{common:{cubicBezierEaseInOut:c},self:{buttonBorderColor:w,buttonBorderColorActive:H,buttonBorderRadius:M,buttonBoxShadow:N,buttonBoxShadowFocus:K,buttonBoxShadowHover:O,buttonColor:q,buttonColorActive:J,buttonTextColor:L,buttonTextColorActive:X,buttonTextColorHover:Z,opacityDisabled:Q,[E("buttonHeight",i)]:W,[E("fontSize",i)]:Y}}=R.value;return{"--n-font-size":Y,"--n-bezier":c,"--n-button-border-color":w,"--n-button-border-color-active":H,"--n-button-border-radius":M,"--n-button-box-shadow":N,"--n-button-box-shadow-focus":K,"--n-button-box-shadow-hover":O,"--n-button-color":q,"--n-button-color-active":J,"--n-button-text-color":L,"--n-button-text-color-hover":Z,"--n-button-text-color-active":X,"--n-height":W,"--n-opacity-disabled":Q}}),d=g?ae("radio-group",U(()=>r.value[0]),a,e):void 0;return{selfElRef:o,rtlEnabled:t,mergedClsPrefix:f,mergedValue:p,handleFocusout:S,handleFocusin:z,cssVars:g?void 0:a,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){var e;const{mergedValue:o,mergedClsPrefix:r,handleFocusin:b,handleFocusout:n}=this,{children:s,isButtonGroup:l}=ue(ie(de(this)),o,r);return(e=this.onRender)===null||e===void 0||e.call(this),P("div",{onFocusin:b,onFocusout:n,ref:"selfElRef",class:[`${r}-radio-group`,this.rtlEnabled&&`${r}-radio-group--rtl`,this.themeClass,l&&`${r}-radio-group--button-group`],style:this.cssVars},s)}});export{me as _,ge as r,pe as s};
