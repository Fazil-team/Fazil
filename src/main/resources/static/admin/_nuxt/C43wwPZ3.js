import{q as s,n as K,z as j,$ as E,r as N,B as I,am as se,a0 as P,ac as be,a4 as l,u,v as n,y as S,X as C,Y as ue,aQ as he,aR as fe,ad as ve,ag as ke,A as H,ak as me,E as _,C as xe,aY as ge,s as pe,a2 as Ce,aU as ye}from"./C_prpByR.js";import{u as G}from"./Bj0Boqh4.js";import{c as we}from"./BlRx4nbL.js";const Re=s("svg",{viewBox:"0 0 64 64",class:"check-icon"},s("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),ze=s("svg",{viewBox:"0 0 100 100",class:"line-icon"},s("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),V=be("n-checkbox-group"),Se={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},Me=K({name:"CheckboxGroup",props:Se,setup(o){const{mergedClsPrefixRef:i}=j(o),x=E(o),{mergedSizeRef:y,mergedDisabledRef:w}=x,g=N(o.defaultValue),T=I(()=>o.value),h=G(T,g),D=I(()=>{var b;return((b=h.value)===null||b===void 0?void 0:b.length)||0}),r=I(()=>Array.isArray(h.value)?new Set(h.value):new Set);function R(b,a){const{nTriggerFormInput:p,nTriggerFormChange:f}=x,{onChange:c,"onUpdate:value":v,onUpdateValue:k}=o;if(Array.isArray(h.value)){const t=Array.from(h.value),M=t.findIndex(U=>U===a);b?~M||(t.push(a),k&&l(k,t,{actionType:"check",value:a}),v&&l(v,t,{actionType:"check",value:a}),p(),f(),g.value=t,c&&l(c,t)):~M&&(t.splice(M,1),k&&l(k,t,{actionType:"uncheck",value:a}),v&&l(v,t,{actionType:"uncheck",value:a}),c&&l(c,t),g.value=t,p(),f())}else b?(k&&l(k,[a],{actionType:"check",value:a}),v&&l(v,[a],{actionType:"check",value:a}),c&&l(c,[a]),g.value=[a],p(),f()):(k&&l(k,[],{actionType:"uncheck",value:a}),v&&l(v,[],{actionType:"uncheck",value:a}),c&&l(c,[]),g.value=[],p(),f())}return se(V,{checkedCountRef:D,maxRef:P(o,"max"),minRef:P(o,"min"),valueSetRef:r,disabledRef:w,mergedSizeRef:y,toggleCheckbox:R}),{mergedClsPrefix:i}},render(){return s("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),Te=u([n("checkbox",`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[S("show-label","line-height: var(--n-label-line-height);"),u("&:hover",[n("checkbox-box",[C("border","border: var(--n-border-checked);")])]),u("&:focus:not(:active)",[n("checkbox-box",[C("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),S("inside-table",[n("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),S("checked",[n("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[n("checkbox-icon",[u(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),S("indeterminate",[n("checkbox-box",[n("checkbox-icon",[u(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),u(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),S("checked, indeterminate",[u("&:focus:not(:active)",[n("checkbox-box",[C("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),n("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[C("border",{border:"var(--n-border-checked)"})])]),S("disabled",{cursor:"not-allowed"},[S("checked",[n("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[C("border",{border:"var(--n-border-disabled-checked)"}),n("checkbox-icon",[u(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),n("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[C("border",`
 border: var(--n-border-disabled);
 `),n("checkbox-icon",[u(".check-icon, .line-icon",`
 fill: var(--n-check-mark-color-disabled);
 `)])]),C("label",`
 color: var(--n-text-color-disabled);
 `)]),n("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),n("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[C("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),n("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[u(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),ue({left:"1px",top:"1px"})])]),C("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[u("&:empty",{display:"none"})])]),he(n("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),fe(n("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),De=Object.assign(Object.assign({},H.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),Ie=K({name:"Checkbox",props:De,setup(o){const i=ve(V,null),x=N(null),{mergedClsPrefixRef:y,inlineThemeDisabled:w,mergedRtlRef:g}=j(o),T=N(o.defaultChecked),h=P(o,"checked"),D=G(h,T),r=ke(()=>{if(i){const e=i.valueSetRef.value;return e&&o.value!==void 0?e.has(o.value):!1}else return D.value===o.checkedValue}),R=E(o,{mergedSize(e){const{size:m}=o;if(m!==void 0)return m;if(i){const{value:d}=i.mergedSizeRef;if(d!==void 0)return d}if(e){const{mergedSize:d}=e;if(d!==void 0)return d.value}return"medium"},mergedDisabled(e){const{disabled:m}=o;if(m!==void 0)return m;if(i){if(i.disabledRef.value)return!0;const{maxRef:{value:d},checkedCountRef:z}=i;if(d!==void 0&&z.value>=d&&!r.value)return!0;const{minRef:{value:A}}=i;if(A!==void 0&&z.value<=A&&r.value)return!0}return e?e.disabled.value:!1}}),{mergedDisabledRef:b,mergedSizeRef:a}=R,p=H("Checkbox","-checkbox",Te,we,o,y);function f(e){if(i&&o.value!==void 0)i.toggleCheckbox(!r.value,o.value);else{const{onChange:m,"onUpdate:checked":d,onUpdateChecked:z}=o,{nTriggerFormInput:A,nTriggerFormChange:F}=R,B=r.value?o.uncheckedValue:o.checkedValue;d&&l(d,B,e),z&&l(z,B,e),m&&l(m,B,e),A(),F(),T.value=B}}function c(e){b.value||f(e)}function v(e){if(!b.value)switch(e.key){case" ":case"Enter":f(e)}}function k(e){switch(e.key){case" ":e.preventDefault()}}const t={focus:()=>{var e;(e=x.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=x.value)===null||e===void 0||e.blur()}},M=me("Checkbox",g,y),U=I(()=>{const{value:e}=a,{common:{cubicBezierEaseInOut:m},self:{borderRadius:d,color:z,colorChecked:A,colorDisabled:F,colorTableHeader:B,colorTableHeaderModal:L,colorTableHeaderPopover:O,checkMarkColor:Y,checkMarkColorDisabled:W,border:q,borderFocus:Q,borderDisabled:X,borderChecked:J,boxShadowFocus:Z,textColor:ee,textColorDisabled:oe,checkMarkColorDisabledChecked:re,colorDisabledChecked:ae,borderDisabledChecked:ne,labelPadding:ce,labelLineHeight:le,labelFontWeight:ie,[_("fontSize",e)]:te,[_("size",e)]:de}}=p.value;return{"--n-label-line-height":le,"--n-label-font-weight":ie,"--n-size":de,"--n-bezier":m,"--n-border-radius":d,"--n-border":q,"--n-border-checked":J,"--n-border-focus":Q,"--n-border-disabled":X,"--n-border-disabled-checked":ne,"--n-box-shadow-focus":Z,"--n-color":z,"--n-color-checked":A,"--n-color-table":B,"--n-color-table-modal":L,"--n-color-table-popover":O,"--n-color-disabled":F,"--n-color-disabled-checked":ae,"--n-text-color":ee,"--n-text-color-disabled":oe,"--n-check-mark-color":Y,"--n-check-mark-color-disabled":W,"--n-check-mark-color-disabled-checked":re,"--n-font-size":te,"--n-label-padding":ce}}),$=w?xe("checkbox",I(()=>a.value[0]),U,o):void 0;return Object.assign(R,t,{rtlEnabled:M,selfRef:x,mergedClsPrefix:y,mergedDisabled:b,renderedChecked:r,mergedTheme:p,labelId:ge(),handleClick:c,handleKeyUp:v,handleKeyDown:k,cssVars:w?void 0:U,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender})},render(){var o;const{$slots:i,renderedChecked:x,mergedDisabled:y,indeterminate:w,privateInsideTable:g,cssVars:T,labelId:h,label:D,mergedClsPrefix:r,focusable:R,handleKeyUp:b,handleKeyDown:a,handleClick:p}=this;(o=this.onRender)===null||o===void 0||o.call(this);const f=pe(i.default,c=>D||c?s("span",{class:`${r}-checkbox__label`,id:h},D||c):null);return s("div",{ref:"selfRef",class:[`${r}-checkbox`,this.themeClass,this.rtlEnabled&&`${r}-checkbox--rtl`,x&&`${r}-checkbox--checked`,y&&`${r}-checkbox--disabled`,w&&`${r}-checkbox--indeterminate`,g&&`${r}-checkbox--inside-table`,f&&`${r}-checkbox--show-label`],tabindex:y||!R?void 0:0,role:"checkbox","aria-checked":w?"mixed":x,"aria-labelledby":h,style:T,onKeyup:b,onKeydown:a,onClick:p,onMousedown:()=>{ye("selectstart",window,c=>{c.preventDefault()},{once:!0})}},s("div",{class:`${r}-checkbox-box-wrapper`}," ",s("div",{class:`${r}-checkbox-box`},s(Ce,null,{default:()=>this.indeterminate?s("div",{key:"indeterminate",class:`${r}-checkbox-icon`},ze):s("div",{key:"check",class:`${r}-checkbox-icon`},Re)}),s("div",{class:`${r}-checkbox-box__border`}))),f)}});export{Ie as N,Me as a};
