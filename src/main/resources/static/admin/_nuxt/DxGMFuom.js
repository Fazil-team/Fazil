import{V as ao,W as e,v as no,y as u,X as x,Z as I,u as S,n as so,r as to,z as io,A as D,am as ho,a0 as go,ak as Co,B as L,C as bo,s as U,q as y,aG as vo,ac as uo,a4 as po,E as d,an as fo,bg as V}from"./C_prpByR.js";const ko={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px"};function mo(l){const{textColor2:h,primaryColorHover:r,primaryColorPressed:p,primaryColor:a,infoColor:i,successColor:s,warningColor:n,errorColor:t,baseColor:f,borderColor:k,opacityDisabled:g,tagColor:b,closeIconColor:o,closeIconColorHover:c,closeIconColorPressed:v,borderRadiusSmall:C,fontSizeMini:m,fontSizeTiny:P,fontSizeSmall:B,fontSizeMedium:$,heightMini:H,heightTiny:M,heightSmall:R,heightMedium:T,closeColorHover:_,closeColorPressed:E,buttonColor2Hover:W,buttonColor2Pressed:w,fontWeightStrong:O}=l;return Object.assign(Object.assign({},ko),{closeBorderRadius:C,heightTiny:H,heightSmall:M,heightMedium:R,heightLarge:T,borderRadius:C,opacityDisabled:g,fontSizeTiny:m,fontSizeSmall:P,fontSizeMedium:B,fontSizeLarge:$,fontWeightStrong:O,textColorCheckable:h,textColorHoverCheckable:h,textColorPressedCheckable:h,textColorChecked:f,colorCheckable:"#0000",colorHoverCheckable:W,colorPressedCheckable:w,colorChecked:a,colorCheckedHover:r,colorCheckedPressed:p,border:`1px solid ${k}`,textColor:h,color:b,colorBordered:"rgb(250, 250, 252)",closeIconColor:o,closeIconColorHover:c,closeIconColorPressed:v,closeColorHover:_,closeColorPressed:E,borderPrimary:`1px solid ${e(a,{alpha:.3})}`,textColorPrimary:a,colorPrimary:e(a,{alpha:.12}),colorBorderedPrimary:e(a,{alpha:.1}),closeIconColorPrimary:a,closeIconColorHoverPrimary:a,closeIconColorPressedPrimary:a,closeColorHoverPrimary:e(a,{alpha:.12}),closeColorPressedPrimary:e(a,{alpha:.18}),borderInfo:`1px solid ${e(i,{alpha:.3})}`,textColorInfo:i,colorInfo:e(i,{alpha:.12}),colorBorderedInfo:e(i,{alpha:.1}),closeIconColorInfo:i,closeIconColorHoverInfo:i,closeIconColorPressedInfo:i,closeColorHoverInfo:e(i,{alpha:.12}),closeColorPressedInfo:e(i,{alpha:.18}),borderSuccess:`1px solid ${e(s,{alpha:.3})}`,textColorSuccess:s,colorSuccess:e(s,{alpha:.12}),colorBorderedSuccess:e(s,{alpha:.1}),closeIconColorSuccess:s,closeIconColorHoverSuccess:s,closeIconColorPressedSuccess:s,closeColorHoverSuccess:e(s,{alpha:.12}),closeColorPressedSuccess:e(s,{alpha:.18}),borderWarning:`1px solid ${e(n,{alpha:.35})}`,textColorWarning:n,colorWarning:e(n,{alpha:.15}),colorBorderedWarning:e(n,{alpha:.12}),closeIconColorWarning:n,closeIconColorHoverWarning:n,closeIconColorPressedWarning:n,closeColorHoverWarning:e(n,{alpha:.12}),closeColorPressedWarning:e(n,{alpha:.18}),borderError:`1px solid ${e(t,{alpha:.23})}`,textColorError:t,colorError:e(t,{alpha:.1}),colorBorderedError:e(t,{alpha:.08}),closeIconColorError:t,closeIconColorHoverError:t,closeIconColorPressedError:t,closeColorHoverError:e(t,{alpha:.12}),closeColorPressedError:e(t,{alpha:.18})})}const xo={name:"Tag",common:ao,self:mo},yo={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},zo=no("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[u("strong",`
 font-weight: var(--n-font-weight-strong);
 `),x("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),x("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),x("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),x("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),u("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[x("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),x("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),u("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),u("icon, avatar",[u("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),u("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),u("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[I("disabled",[S("&:hover","background-color: var(--n-color-hover-checkable);",[I("checked","color: var(--n-text-color-hover-checkable);")]),S("&:active","background-color: var(--n-color-pressed-checkable);",[I("checked","color: var(--n-text-color-pressed-checkable);")])]),u("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[I("disabled",[S("&:hover","background-color: var(--n-color-checked-hover);"),S("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Io=Object.assign(Object.assign(Object.assign({},D.props),yo),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),So=uo("n-tag"),Bo=so({name:"Tag",props:Io,setup(l){const h=to(null),{mergedBorderedRef:r,mergedClsPrefixRef:p,inlineThemeDisabled:a,mergedRtlRef:i}=io(l),s=D("Tag","-tag",zo,xo,l,p);ho(So,{roundRef:go(l,"round")});function n(){if(!l.disabled&&l.checkable){const{checked:o,onCheckedChange:c,onUpdateChecked:v,"onUpdate:checked":C}=l;v&&v(!o),C&&C(!o),c&&c(!o)}}function t(o){if(l.triggerClickOnClose||o.stopPropagation(),!l.disabled){const{onClose:c}=l;c&&po(c,o)}}const f={setTextContent(o){const{value:c}=h;c&&(c.textContent=o)}},k=Co("Tag",i,p),g=L(()=>{const{type:o,size:c,color:{color:v,textColor:C}={}}=l,{common:{cubicBezierEaseInOut:m},self:{padding:P,closeMargin:B,borderRadius:$,opacityDisabled:H,textColorCheckable:M,textColorHoverCheckable:R,textColorPressedCheckable:T,textColorChecked:_,colorCheckable:E,colorHoverCheckable:W,colorPressedCheckable:w,colorChecked:O,colorCheckedHover:N,colorCheckedPressed:K,closeBorderRadius:A,fontWeightStrong:q,[d("colorBordered",o)]:G,[d("closeSize",c)]:X,[d("closeIconSize",c)]:Z,[d("fontSize",c)]:J,[d("height",c)]:j,[d("color",o)]:Q,[d("textColor",o)]:Y,[d("border",o)]:oo,[d("closeIconColor",o)]:F,[d("closeIconColorHover",o)]:eo,[d("closeIconColorPressed",o)]:ro,[d("closeColorHover",o)]:lo,[d("closeColorPressed",o)]:co}}=s.value,z=fo(B);return{"--n-font-weight-strong":q,"--n-avatar-size-override":`calc(${j} - 8px)`,"--n-bezier":m,"--n-border-radius":$,"--n-border":oo,"--n-close-icon-size":Z,"--n-close-color-pressed":co,"--n-close-color-hover":lo,"--n-close-border-radius":A,"--n-close-icon-color":F,"--n-close-icon-color-hover":eo,"--n-close-icon-color-pressed":ro,"--n-close-icon-color-disabled":F,"--n-close-margin-top":z.top,"--n-close-margin-right":z.right,"--n-close-margin-bottom":z.bottom,"--n-close-margin-left":z.left,"--n-close-size":X,"--n-color":v||(r.value?G:Q),"--n-color-checkable":E,"--n-color-checked":O,"--n-color-checked-hover":N,"--n-color-checked-pressed":K,"--n-color-hover-checkable":W,"--n-color-pressed-checkable":w,"--n-font-size":J,"--n-height":j,"--n-opacity-disabled":H,"--n-padding":P,"--n-text-color":C||Y,"--n-text-color-checkable":M,"--n-text-color-checked":_,"--n-text-color-hover-checkable":R,"--n-text-color-pressed-checkable":T}}),b=a?bo("tag",L(()=>{let o="";const{type:c,size:v,color:{color:C,textColor:m}={}}=l;return o+=c[0],o+=v[0],C&&(o+=`a${V(C)}`),m&&(o+=`b${V(m)}`),r.value&&(o+="c"),o}),g,l):void 0;return Object.assign(Object.assign({},f),{rtlEnabled:k,mergedClsPrefix:p,contentRef:h,mergedBordered:r,handleClick:n,handleCloseClick:t,cssVars:a?void 0:g,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender})},render(){var l,h;const{mergedClsPrefix:r,rtlEnabled:p,closable:a,color:{borderColor:i}={},round:s,onRender:n,$slots:t}=this;n==null||n();const f=U(t.avatar,g=>g&&y("div",{class:`${r}-tag__avatar`},g)),k=U(t.icon,g=>g&&y("div",{class:`${r}-tag__icon`},g));return y("div",{class:[`${r}-tag`,this.themeClass,{[`${r}-tag--rtl`]:p,[`${r}-tag--strong`]:this.strong,[`${r}-tag--disabled`]:this.disabled,[`${r}-tag--checkable`]:this.checkable,[`${r}-tag--checked`]:this.checkable&&this.checked,[`${r}-tag--round`]:s,[`${r}-tag--avatar`]:f,[`${r}-tag--icon`]:k,[`${r}-tag--closable`]:a}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},k||f,y("span",{class:`${r}-tag__content`,ref:"contentRef"},(h=(l=this.$slots).default)===null||h===void 0?void 0:h.call(l)),!this.checkable&&a?y(vo,{clsPrefix:r,class:`${r}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:s,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?y("div",{class:`${r}-tag__border`,style:{borderColor:i}}):null)}});export{Bo as _,ko as c,So as t};
