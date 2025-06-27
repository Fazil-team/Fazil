import{Y as y,$ as g,ai as l,ah as d,a0 as m,q as v,y as b,n as a,a1 as C,ax as $,x as h,E as _}from"./CEmLkHO2.js";import{f as x}from"./B-p6aW7q.js";function z(e){const{textColorBase:o,opacity1:i,opacity2:s,opacity3:r,opacity4:n,opacity5:t}=e;return{color:o,opacity1Depth:i,opacity2Depth:s,opacity3Depth:r,opacity4Depth:n,opacity5Depth:t}}const D={name:"Icon",common:y,self:z},R=g("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[l("color-transition",{transition:"color .3s var(--n-bezier)"}),l("depth",{color:"var(--n-color)"},[d("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),d("svg",{height:"1em",width:"1em"})]),S=Object.assign(Object.assign({},m.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),w=v({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:S,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:i}=b(e),s=m("Icon","-icon",R,D,e,o),r=a(()=>{const{depth:t}=e,{common:{cubicBezierEaseInOut:c},self:p}=s.value;if(t!==void 0){const{color:u,[`opacity${t}Depth`]:f}=p;return{"--n-bezier":c,"--n-color":u,"--n-opacity":f}}return{"--n-bezier":c,"--n-color":"","--n-opacity":""}}),n=i?C("icon",a(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:o,mergedStyle:a(()=>{const{size:t,color:c}=e;return{fontSize:x(t),color:c}}),cssVars:i?void 0:r,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{$parent:o,depth:i,mergedClsPrefix:s,component:r,onRender:n,themeClass:t}=this;return!((e=o==null?void 0:o.$options)===null||e===void 0)&&e._n_icon__&&$("icon","don't wrap `n-icon` inside `n-icon`"),n==null||n(),h("i",_(this.$attrs,{role:"img",class:[`${s}-icon`,t,{[`${s}-icon--depth`]:i,[`${s}-icon--color-transition`]:i!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?h(r):this.$slots)}});export{w as N,z as s};
