import{o as I,i as W}from"./Xg6m9XJh.js";import{t as A}from"./Cv2iIsLt.js";import{bQ as C,Y as V,p as K,$,bt as N,ah as E,bu as G,ak as k,q as Y,y as q,r as y,s as H,n as O,a0 as _,a1 as D,A as Q,e as U,h as X,g as J,aw as Z,bx as ee,x,V as oe,a2 as re,b$ as te}from"./CEmLkHO2.js";function ne(o){const{borderRadius:l,avatarColor:a,cardColor:d,fontSize:c,heightTiny:u,heightSmall:s,heightMedium:z,heightLarge:h,heightHuge:i,modalColor:f,popoverColor:m}=o;return{borderRadius:l,fontSize:c,border:`2px solid ${d}`,heightTiny:u,heightSmall:s,heightMedium:z,heightLarge:h,heightHuge:i,color:C(d,a),colorModal:C(f,a),colorPopover:C(m,a)}}const ae={name:"Avatar",common:V,self:ne},se=K("n-avatar-group"),ie=$("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[N(E("&","--n-merged-color: var(--n-color-modal);")),G(E("&","--n-merged-color: var(--n-color-popover);")),E("img",`
 width: 100%;
 height: 100%;
 `),k("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),$("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),k("text","line-height: 1.25")]),le=Object.assign(Object.assign({},_.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),fe=Y({name:"Avatar",props:le,setup(o){const{mergedClsPrefixRef:l,inlineThemeDisabled:a}=q(o),d=y(!1);let c=null;const u=y(null),s=y(null),z=()=>{const{value:e}=u;if(e&&(c===null||c!==e.innerHTML)){c=e.innerHTML;const{value:r}=s;if(r){const{offsetWidth:t,offsetHeight:v}=r,{offsetWidth:n,offsetHeight:S}=e,R=.9,P=Math.min(t/n*R,v/S*R,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${P})`}}},h=H(se,null),i=O(()=>{const{size:e}=o;if(e)return e;const{size:r}=h||{};return r||"medium"}),f=_("Avatar","-avatar",ie,ae,o,l),m=H(A,null),g=O(()=>{if(h)return!0;const{round:e,circle:r}=o;return e!==void 0||r!==void 0?e||r:m?m.roundRef.value:!1}),b=O(()=>h?!0:o.bordered||!1),F=O(()=>{const e=i.value,r=g.value,t=b.value,{color:v}=o,{self:{borderRadius:n,fontSize:S,color:R,border:P,colorModal:w,colorPopover:B},common:{cubicBezierEaseInOut:M}}=f.value;let j;return typeof e=="number"?j=`${e}px`:j=f.value.self[re("height",e)],{"--n-font-size":S,"--n-border":t?P:"none","--n-border-radius":r?"50%":n,"--n-color":v||R,"--n-color-modal":v||w,"--n-color-popover":v||B,"--n-bezier":M,"--n-merged-size":`var(--n-avatar-size-override, ${j})`}}),p=a?D("avatar",O(()=>{const e=i.value,r=g.value,t=b.value,{color:v}=o;let n="";return e&&(typeof e=="number"?n+=`a${e}`:n+=e[0]),r&&(n+="b"),t&&(n+="c"),v&&(n+=te(v)),n}),F,o):void 0,L=y(!o.lazy);Q(()=>{if(o.lazy&&o.intersectionObserverOptions){let e;const r=U(()=>{e==null||e(),e=void 0,o.lazy&&(e=I(s.value,o.intersectionObserverOptions,L))});X(()=>{r(),e==null||e()})}}),J(()=>{var e;return o.src||((e=o.imgProps)===null||e===void 0?void 0:e.src)},()=>{d.value=!1});const T=y(!o.lazy);return{textRef:u,selfRef:s,mergedRoundRef:g,mergedClsPrefix:l,fitTextTransform:z,cssVars:a?void 0:F,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender,hasLoadError:d,shouldStartLoading:L,loaded:T,mergedOnError:e=>{if(!L.value)return;d.value=!0;const{onError:r,imgProps:{onError:t}={}}=o;r==null||r(e),t==null||t(e)},mergedOnLoad:e=>{const{onLoad:r,imgProps:{onLoad:t}={}}=o;r==null||r(e),t==null||t(e),T.value=!0}}},render(){var o,l;const{$slots:a,src:d,mergedClsPrefix:c,lazy:u,onRender:s,loaded:z,hasLoadError:h,imgProps:i={}}=this;s==null||s();let f;const m=!z&&!h&&(this.renderPlaceholder?this.renderPlaceholder():(l=(o=this.$slots).placeholder)===null||l===void 0?void 0:l.call(o));return this.hasLoadError?f=this.renderFallback?this.renderFallback():Z(a.fallback,()=>[x("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):f=ee(a.default,g=>{if(g)return x(oe,{onResize:this.fitTextTransform},{default:()=>x("span",{ref:"textRef",class:`${c}-avatar__text`},g)});if(d||i.src){const b=this.src||i.src;return x("img",Object.assign(Object.assign({},i),{loading:W&&!this.intersectionObserverOptions&&u?"lazy":"eager",src:u&&this.intersectionObserverOptions?this.shouldStartLoading?b:void 0:b,"data-image-src":b,onLoad:this.mergedOnLoad,onError:this.mergedOnError,style:[i.style||"",{objectFit:this.objectFit},m?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),x("span",{ref:"selfRef",class:[`${c}-avatar`,this.themeClass],style:this.cssVars},f,u&&m)}});export{fe as _,ne as s};
