import{s as O,l as xe,g as oe,h as we,Z as Re,p as se,n as h,r as j,ah as H,bF as Se,a0 as _,ak as Z,ai as S,q as ye,C as G,y as $e,bq as te,a1 as de,B as _e,d5 as ze,A as Ce,a2 as Pe,x as k,ap as Le,bj as Me,a3 as P,ay as ae}from"./BEw8kgE9.js";import{S as ne}from"./DKvM95Vc.js";import{f as Q}from"./B-p6aW7q.js";import{g as fe}from"./DpnOLSIH.js";function Ae(t,e,s){var a;const m=O(t,null);if(m===null)return;const l=(a=xe())===null||a===void 0?void 0:a.proxy;oe(s,o),o(s.value),we(()=>{o(void 0,s.value)});function o(i,n){if(!m)return;const c=m[e];n!==void 0&&g(c,n),i!==void 0&&b(c,i)}function g(i,n){i[n]||(i[n]=[]),i[n].splice(i[n].findIndex(c=>c===l),1)}function b(i,n){i[n]||(i[n]=[]),~i[n].findIndex(c=>c===l)||i[n].push(l)}}const Fe={feedbackPadding:"4px 0 0 2px",feedbackHeightSmall:"24px",feedbackHeightMedium:"24px",feedbackHeightLarge:"26px",feedbackFontSizeSmall:"13px",feedbackFontSizeMedium:"14px",feedbackFontSizeLarge:"14px",labelFontSizeLeftSmall:"14px",labelFontSizeLeftMedium:"14px",labelFontSizeLeftLarge:"15px",labelFontSizeTopSmall:"13px",labelFontSizeTopMedium:"14px",labelFontSizeTopLarge:"14px",labelHeightSmall:"24px",labelHeightMedium:"26px",labelHeightLarge:"28px",labelPaddingVertical:"0 0 6px 2px",labelPaddingHorizontal:"0 12px 0 0",labelTextAlignVertical:"left",labelTextAlignHorizontal:"right",labelFontWeight:"400"};function Ie(t){const{heightSmall:e,heightMedium:s,heightLarge:a,textColor1:m,errorColor:l,warningColor:o,lineHeight:g,textColor3:b}=t;return Object.assign(Object.assign({},Fe),{blankHeightSmall:e,blankHeightMedium:s,blankHeightLarge:a,lineHeight:g,labelTextColor:m,asteriskColor:l,feedbackTextColorError:l,feedbackTextColorWarning:o,feedbackTextColor:b})}const We={name:"Form",common:Re,self:Ie},J=se("n-form"),qe=se("n-form-item-insts");function je(t){const e=O(J,null);return{mergedSize:h(()=>t.size!==void 0?t.size:(e==null?void 0:e.props.size)!==void 0?e.props.size:"medium")}}function Ve(t){const e=O(J,null),s=h(()=>{const{labelPlacement:r}=t;return r!==void 0?r:e!=null&&e.props.labelPlacement?e.props.labelPlacement:"top"}),a=h(()=>s.value==="left"&&(t.labelWidth==="auto"||(e==null?void 0:e.props.labelWidth)==="auto")),m=h(()=>{if(s.value==="top")return;const{labelWidth:r}=t;if(r!==void 0&&r!=="auto")return Q(r);if(a.value){const T=e==null?void 0:e.maxChildLabelWidthRef.value;return T!==void 0?Q(T):void 0}if((e==null?void 0:e.props.labelWidth)!==void 0)return Q(e.props.labelWidth)}),l=h(()=>{const{labelAlign:r}=t;if(r)return r;if(e!=null&&e.props.labelAlign)return e.props.labelAlign}),o=h(()=>{var r;return[(r=t.labelProps)===null||r===void 0?void 0:r.style,t.labelStyle,{width:m.value}]}),g=h(()=>{const{showRequireMark:r}=t;return r!==void 0?r:e==null?void 0:e.props.showRequireMark}),b=h(()=>{const{requireMarkPlacement:r}=t;return r!==void 0?r:(e==null?void 0:e.props.requireMarkPlacement)||"right"}),i=j(!1),n=j(!1),c=h(()=>{const{validationStatus:r}=t;if(r!==void 0)return r;if(i.value)return"error";if(n.value)return"warning"}),R=h(()=>{const{showFeedback:r}=t;return r!==void 0?r:(e==null?void 0:e.props.showFeedback)!==void 0?e.props.showFeedback:!0}),V=h(()=>{const{showLabel:r}=t;return r!==void 0?r:(e==null?void 0:e.props.showLabel)!==void 0?e.props.showLabel:!0});return{validationErrored:i,validationWarned:n,mergedLabelStyle:o,mergedLabelPlacement:s,mergedLabelAlign:l,mergedShowRequireMark:g,mergedRequireMarkPlacement:b,mergedValidationStatus:c,mergedShowFeedback:R,mergedShowLabel:V,isAutoLabelWidth:a}}function Te(t){const e=O(J,null),s=h(()=>{const{rulePath:o}=t;if(o!==void 0)return o;const{path:g}=t;if(g!==void 0)return g}),a=h(()=>{const o=[],{rule:g}=t;if(g!==void 0&&(Array.isArray(g)?o.push(...g):o.push(g)),e){const{rules:b}=e.props,{value:i}=s;if(b!==void 0&&i!==void 0){const n=fe(b,i);n!==void 0&&(Array.isArray(n)?o.push(...n):o.push(n))}}return o}),m=h(()=>a.value.some(o=>o.required)),l=h(()=>m.value||t.required);return{mergedRules:a,mergedRequired:l}}const{cubicBezierEaseInOut:re}=Se;function Ee({name:t="fade-down",fromOffset:e="-4px",enterDuration:s=".3s",leaveDuration:a=".3s",enterCubicBezier:m=re,leaveCubicBezier:l=re}={}){return[H(`&.${t}-transition-enter-from, &.${t}-transition-leave-to`,{opacity:0,transform:`translateY(${e})`}),H(`&.${t}-transition-enter-to, &.${t}-transition-leave-from`,{opacity:1,transform:"translateY(0)"}),H(`&.${t}-transition-leave-active`,{transition:`opacity ${a} ${l}, transform ${a} ${l}`}),H(`&.${t}-transition-enter-active`,{transition:`opacity ${s} ${m}, transform ${s} ${m}`})]}const He=_("form-item",`
 display: grid;
 line-height: var(--n-line-height);
`,[_("form-item-label",`
 grid-area: label;
 align-items: center;
 line-height: 1.25;
 text-align: var(--n-label-text-align);
 font-size: var(--n-label-font-size);
 min-height: var(--n-label-height);
 padding: var(--n-label-padding);
 color: var(--n-label-text-color);
 transition: color .3s var(--n-bezier);
 box-sizing: border-box;
 font-weight: var(--n-label-font-weight);
 `,[Z("asterisk",`
 white-space: nowrap;
 user-select: none;
 -webkit-user-select: none;
 color: var(--n-asterisk-color);
 transition: color .3s var(--n-bezier);
 `),Z("asterisk-placeholder",`
 grid-area: mark;
 user-select: none;
 -webkit-user-select: none;
 visibility: hidden; 
 `)]),_("form-item-blank",`
 grid-area: blank;
 min-height: var(--n-blank-height);
 `),S("auto-label-width",[_("form-item-label","white-space: nowrap;")]),S("left-labelled",`
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 grid-template-rows: auto 1fr;
 align-items: flex-start;
 `,[_("form-item-label",`
 display: grid;
 grid-template-columns: 1fr auto;
 min-height: var(--n-blank-height);
 height: auto;
 box-sizing: border-box;
 flex-shrink: 0;
 flex-grow: 0;
 `,[S("reverse-columns-space",`
 grid-template-columns: auto 1fr;
 `),S("left-mark",`
 grid-template-areas:
 "mark text"
 ". text";
 `),S("right-mark",`
 grid-template-areas: 
 "text mark"
 "text .";
 `),S("right-hanging-mark",`
 grid-template-areas: 
 "text mark"
 "text .";
 `),Z("text",`
 grid-area: text; 
 `),Z("asterisk",`
 grid-area: mark; 
 align-self: end;
 `)])]),S("top-labelled",`
 grid-template-areas:
 "label"
 "blank"
 "feedback";
 grid-template-rows: minmax(var(--n-label-height), auto) 1fr;
 grid-template-columns: minmax(0, 100%);
 `,[S("no-label",`
 grid-template-areas:
 "blank"
 "feedback";
 grid-template-rows: 1fr;
 `),_("form-item-label",`
 display: flex;
 align-items: flex-start;
 justify-content: var(--n-label-text-align);
 `)]),_("form-item-blank",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `),_("form-item-feedback-wrapper",`
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `,[H("&:not(:empty)",`
 padding: var(--n-feedback-padding);
 `),_("form-item-feedback",{transition:"color .3s var(--n-bezier)",color:"var(--n-feedback-text-color)"},[S("warning",{color:"var(--n-feedback-text-color-warning)"}),S("error",{color:"var(--n-feedback-text-color-error)"}),Ee({fromOffset:"-3px",enterDuration:".3s",leaveDuration:".2s"})])])]);var ie=function(t,e,s,a){function m(l){return l instanceof s?l:new s(function(o){o(l)})}return new(s||(s=Promise))(function(l,o){function g(n){try{i(a.next(n))}catch(c){o(c)}}function b(n){try{i(a.throw(n))}catch(c){o(c)}}function i(n){n.done?l(n.value):m(n.value).then(g,b)}i((a=a.apply(t,e||[])).next())})};const Oe=Object.assign(Object.assign({},de.props),{label:String,labelWidth:[Number,String],labelStyle:[String,Object],labelAlign:String,labelPlacement:String,path:String,first:Boolean,rulePath:String,required:Boolean,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:void 0},rule:[Object,Array],size:String,ignorePathChange:Boolean,validationStatus:String,feedback:String,feedbackClass:String,feedbackStyle:[String,Object],showLabel:{type:Boolean,default:void 0},labelProps:Object});function le(t,e){return(...s)=>{try{const a=t(...s);return!e&&(typeof a=="boolean"||a instanceof Error||Array.isArray(a))||a!=null&&a.then?a:(a===void 0||ae("form-item/validate",`You return a ${typeof a} typed value in the validator method, which is not recommended. Please use ${e?"`Promise`":"`boolean`, `Error` or `Promise`"} typed value instead.`),!0)}catch(a){ae("form-item/validate","An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation."),console.error(a);return}}}const Ke=ye({name:"FormItem",props:Oe,setup(t){Ae(qe,"formItems",G(t,"path"));const{mergedClsPrefixRef:e,inlineThemeDisabled:s}=$e(t),a=O(J,null),m=je(t),l=Ve(t),{validationErrored:o,validationWarned:g}=l,{mergedRequired:b,mergedRules:i}=Te(t),{mergedSize:n}=m,{mergedLabelPlacement:c,mergedLabelAlign:R,mergedRequireMarkPlacement:V}=l,r=j([]),T=j(te()),ce=a?G(a.props,"disabled"):j(!1),ue=de("Form","-form-item",He,We,t,e);oe(G(t,"path"),()=>{t.ignorePathChange||B()});function B(){r.value=[],o.value=!1,g.value=!1,t.feedback&&(T.value=te())}const M=(...f)=>ie(this,[...f],void 0,function*(x=null,y=()=>!0,v={suppressWarning:!0}){const{path:$}=t;v?v.first||(v.first=t.first):v={};const{value:L}=i,F=a?fe(a.props.model,$||""):void 0,I={},W={},z=(x?L.filter(d=>Array.isArray(d.trigger)?d.trigger.includes(x):d.trigger===x):L).filter(y).map((d,p)=>{const u=Object.assign({},d);if(u.validator&&(u.validator=le(u.validator,!1)),u.asyncValidator&&(u.asyncValidator=le(u.asyncValidator,!0)),u.renderMessage){const U=`__renderMessage__${p}`;W[U]=u.message,u.message=U,I[U]=u.renderMessage}return u}),C=z.filter(d=>d.level!=="warning"),N=z.filter(d=>d.level==="warning"),w={valid:!0,errors:void 0,warnings:void 0};if(!z.length)return w;const q=$??"__n_no_path__",Y=new ne({[q]:C}),D=new ne({[q]:N}),{validateMessages:E}=(a==null?void 0:a.props)||{};E&&(Y.messages(E),D.messages(E));const K=d=>{r.value=d.map(p=>{const u=(p==null?void 0:p.message)||"";return{key:u,render:()=>u.startsWith("__renderMessage__")?I[u]():u}}),d.forEach(p=>{var u;!((u=p.message)===null||u===void 0)&&u.startsWith("__renderMessage__")&&(p.message=W[p.message])})};if(C.length){const d=yield new Promise(p=>{Y.validate({[q]:F},v,p)});d!=null&&d.length&&(w.valid=!1,w.errors=d,K(d))}if(N.length&&!w.errors){const d=yield new Promise(p=>{D.validate({[q]:F},v,p)});d!=null&&d.length&&(K(d),w.warnings=d)}return!w.errors&&!w.warnings?B():(o.value=!!w.errors,g.value=!!w.warnings),w});function me(){M("blur")}function ge(){M("change")}function be(){M("focus")}function he(){M("input")}function ve(f,x){return ie(this,void 0,void 0,function*(){let y,v,$,L;return typeof f=="string"?(y=f,v=x):f!==null&&typeof f=="object"&&(y=f.trigger,v=f.callback,$=f.shouldRuleBeApplied,L=f.options),yield new Promise((F,I)=>{M(y,$,L).then(({valid:W,errors:z,warnings:C})=>{W?(v&&v(void 0,{warnings:C}),F({warnings:C})):(v&&v(z,{warnings:C}),I(z))})})})}_e(ze,{path:G(t,"path"),disabled:ce,mergedSize:m.mergedSize,mergedValidationStatus:l.mergedValidationStatus,restoreValidation:B,handleContentBlur:me,handleContentChange:ge,handleContentFocus:be,handleContentInput:he});const pe={validate:ve,restoreValidation:B,internalValidate:M},X=j(null);Ce(()=>{if(!l.isAutoLabelWidth.value)return;const f=X.value;if(f!==null){const x=f.style.whiteSpace;f.style.whiteSpace="nowrap",f.style.width="",a==null||a.deriveMaxChildLabelWidth(Number(getComputedStyle(f).width.slice(0,-2))),f.style.whiteSpace=x}});const ee=h(()=>{var f;const{value:x}=n,{value:y}=c,v=y==="top"?"vertical":"horizontal",{common:{cubicBezierEaseInOut:$},self:{labelTextColor:L,asteriskColor:F,lineHeight:I,feedbackTextColor:W,feedbackTextColorWarning:z,feedbackTextColorError:C,feedbackPadding:N,labelFontWeight:w,[P("labelHeight",x)]:q,[P("blankHeight",x)]:Y,[P("feedbackFontSize",x)]:D,[P("feedbackHeight",x)]:E,[P("labelPadding",v)]:K,[P("labelTextAlign",v)]:d,[P(P("labelFontSize",y),x)]:p}}=ue.value;let u=(f=R.value)!==null&&f!==void 0?f:d;return y==="top"&&(u=u==="right"?"flex-end":"flex-start"),{"--n-bezier":$,"--n-line-height":I,"--n-blank-height":Y,"--n-label-font-size":p,"--n-label-text-align":u,"--n-label-height":q,"--n-label-padding":K,"--n-label-font-weight":w,"--n-asterisk-color":F,"--n-label-text-color":L,"--n-feedback-padding":N,"--n-feedback-font-size":D,"--n-feedback-height":E,"--n-feedback-text-color":W,"--n-feedback-text-color-warning":z,"--n-feedback-text-color-error":C}}),A=s?Pe("form-item",h(()=>{var f;return`${n.value[0]}${c.value[0]}${((f=R.value)===null||f===void 0?void 0:f[0])||""}`}),ee,t):void 0,ke=h(()=>c.value==="left"&&V.value==="left"&&R.value==="left");return Object.assign(Object.assign(Object.assign(Object.assign({labelElementRef:X,mergedClsPrefix:e,mergedRequired:b,feedbackId:T,renderExplains:r,reverseColSpace:ke},l),m),pe),{cssVars:s?void 0:ee,themeClass:A==null?void 0:A.themeClass,onRender:A==null?void 0:A.onRender})},render(){const{$slots:t,mergedClsPrefix:e,mergedShowLabel:s,mergedShowRequireMark:a,mergedRequireMarkPlacement:m,onRender:l}=this,o=a!==void 0?a:this.mergedRequired;l==null||l();const g=()=>{const b=this.$slots.label?this.$slots.label():this.label;if(!b)return null;const i=k("span",{class:`${e}-form-item-label__text`},b),n=o?k("span",{class:`${e}-form-item-label__asterisk`},m!=="left"?" *":"* "):m==="right-hanging"&&k("span",{class:`${e}-form-item-label__asterisk-placeholder`}," *"),{labelProps:c}=this;return k("label",Object.assign({},c,{class:[c==null?void 0:c.class,`${e}-form-item-label`,`${e}-form-item-label--${m}-mark`,this.reverseColSpace&&`${e}-form-item-label--reverse-columns-space`],style:this.mergedLabelStyle,ref:"labelElementRef"}),m==="left"?[n,i]:[i,n])};return k("div",{class:[`${e}-form-item`,this.themeClass,`${e}-form-item--${this.mergedSize}-size`,`${e}-form-item--${this.mergedLabelPlacement}-labelled`,this.isAutoLabelWidth&&`${e}-form-item--auto-label-width`,!s&&`${e}-form-item--no-label`],style:this.cssVars},s&&g(),k("div",{class:[`${e}-form-item-blank`,this.mergedValidationStatus&&`${e}-form-item-blank--${this.mergedValidationStatus}`]},t),this.mergedShowFeedback?k("div",{key:this.feedbackId,style:this.feedbackStyle,class:[`${e}-form-item-feedback-wrapper`,this.feedbackClass]},k(Le,{name:"fade-down-transition",mode:"out-in"},{default:()=>{const{mergedValidationStatus:b}=this;return Me(t.feedback,i=>{var n;const{feedback:c}=this,R=i||c?k("div",{key:"__feedback__",class:`${e}-form-item-feedback__line`},i||c):this.renderExplains.length?(n=this.renderExplains)===null||n===void 0?void 0:n.map(({key:V,render:r})=>k("div",{key:V,class:`${e}-form-item-feedback__line`},r())):null;return R?b==="warning"?k("div",{key:"controlled-warning",class:`${e}-form-item-feedback ${e}-form-item-feedback--warning`},R):b==="error"?k("div",{key:"controlled-error",class:`${e}-form-item-feedback ${e}-form-item-feedback--error`},R):b==="success"?k("div",{key:"controlled-success",class:`${e}-form-item-feedback ${e}-form-item-feedback--success`},R):k("div",{key:"controlled-default",class:`${e}-form-item-feedback`},R):null})}})):null)}});export{Ke as _,qe as a,We as b,J as f,Ie as s};
