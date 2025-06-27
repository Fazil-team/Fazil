import{D as M,Y as X,ah as P,$ as l,ai as x,q as z,n as b,x as r,ao as q,cw as O,cx as L,cy as T,cz as _,y as Y,a0 as A,a1 as j,a2 as I}from"./CEmLkHO2.js";import{f as S}from"./B-p6aW7q.js";let W=!1;function re(){if(M&&window.CSS&&!W&&(W=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}function G(e){const{infoColor:c,successColor:g,warningColor:n,errorColor:t,textColor2:o,progressRailColor:f,fontSize:s,fontWeight:d}=e;return{fontSize:s,fontSizeCircle:"28px",fontWeightCircle:d,railColor:f,railHeight:"8px",iconSizeCircle:"36px",iconSizeLine:"18px",iconColor:c,iconColorInfo:c,iconColorSuccess:g,iconColorWarning:n,iconColorError:t,textColorCircle:o,textColorLineInner:"rgb(255, 255, 255)",textColorLineOuter:o,fillColor:c,fillColorInfo:c,fillColorSuccess:g,fillColorWarning:n,fillColorError:t,lineBgProcessing:"linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)"}}const H={name:"Progress",common:X,self:G},V=P([l("progress",{display:"inline-block"},[l("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),x("line",`
 width: 100%;
 display: block;
 `,[l("progress-content",`
 display: flex;
 align-items: center;
 `,[l("progress-graph",{flex:1})]),l("progress-custom-content",{marginLeft:"14px"}),l("progress-icon",`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[x("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),x("circle, dashboard",{width:"120px"},[l("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),l("progress-text",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),l("progress-icon",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),x("multiple-circle",`
 width: 200px;
 color: inherit;
 `,[l("progress-text",`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),l("progress-content",{position:"relative"}),l("progress-graph",{position:"relative"},[l("progress-graph-circle",[P("svg",{verticalAlign:"bottom"}),l("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[x("empty",{opacity:0})]),l("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),l("progress-graph-line",[x("indicator-inside",[l("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[l("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),l("progress-graph-line-indicator",`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),x("indicator-inside-label",`
 height: 16px;
 display: flex;
 align-items: center;
 `,[l("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),l("progress-graph-line-indicator",`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),l("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[l("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[x("processing",[P("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),P("@keyframes progress-processing-animation",`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),E={success:r(O,null),error:r(L,null),warning:r(T,null),info:r(_,null)},F=z({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:String,status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:c}){const g=b(()=>S(e.height)),n=b(()=>e.railBorderRadius!==void 0?S(e.railBorderRadius):e.height!==void 0?S(e.height,{c:.5}):""),t=b(()=>e.fillBorderRadius!==void 0?S(e.fillBorderRadius):e.railBorderRadius!==void 0?S(e.railBorderRadius):e.height!==void 0?S(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:o,railColor:f,railStyle:s,percentage:d,unit:u,indicatorTextColor:h,status:p,showIndicator:y,fillColor:i,processing:v,clsPrefix:a}=e;return r("div",{class:`${a}-progress-content`,role:"none"},r("div",{class:`${a}-progress-graph`,"aria-hidden":!0},r("div",{class:[`${a}-progress-graph-line`,{[`${a}-progress-graph-line--indicator-${o}`]:!0}]},r("div",{class:`${a}-progress-graph-line-rail`,style:[{backgroundColor:f,height:g.value,borderRadius:n.value},s]},r("div",{class:[`${a}-progress-graph-line-fill`,v&&`${a}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,backgroundColor:i,height:g.value,lineHeight:g.value,borderRadius:t.value}},o==="inside"?r("div",{class:`${a}-progress-graph-line-indicator`,style:{color:h}},c.default?c.default():`${d}${u}`):null)))),y&&o==="outside"?r("div",null,c.default?r("div",{class:`${a}-progress-custom-content`,style:{color:h},role:"none"},c.default()):p==="default"?r("div",{role:"none",class:`${a}-progress-icon ${a}-progress-icon--as-text`,style:{color:h}},d,u):r("div",{class:`${a}-progress-icon`,"aria-hidden":!0},r(q,{clsPrefix:a},{default:()=>E[p]}))):null)}}}),K={success:r(O,null),error:r(L,null),warning:r(T,null),info:r(_,null)},Z=z({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:String,railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:c}){function g(n,t,o){const{gapDegree:f,viewBoxWidth:s,strokeWidth:d}=e,u=50,h=0,p=u,y=0,i=2*u,v=50+d/2,a=`M ${v},${v} m ${h},${p}
      a ${u},${u} 0 1 1 ${y},${-i}
      a ${u},${u} 0 1 1 ${-y},${i}`,C=Math.PI*2*u,$={stroke:o,strokeDasharray:`${n/100*(C-f)}px ${s*8}px`,strokeDashoffset:`-${f/2}px`,transformOrigin:t?"center":void 0,transform:t?`rotate(${t}deg)`:void 0};return{pathString:a,pathStyle:$}}return()=>{const{fillColor:n,railColor:t,strokeWidth:o,offsetDegree:f,status:s,percentage:d,showIndicator:u,indicatorTextColor:h,unit:p,gapOffsetDegree:y,clsPrefix:i}=e,{pathString:v,pathStyle:a}=g(100,0,t),{pathString:C,pathStyle:$}=g(d,f,n),m=100+o;return r("div",{class:`${i}-progress-content`,role:"none"},r("div",{class:`${i}-progress-graph`,"aria-hidden":!0},r("div",{class:`${i}-progress-graph-circle`,style:{transform:y?`rotate(${y}deg)`:void 0}},r("svg",{viewBox:`0 0 ${m} ${m}`},r("g",null,r("path",{class:`${i}-progress-graph-circle-rail`,d:v,"stroke-width":o,"stroke-linecap":"round",fill:"none",style:a})),r("g",null,r("path",{class:[`${i}-progress-graph-circle-fill`,d===0&&`${i}-progress-graph-circle-fill--empty`],d:C,"stroke-width":o,"stroke-linecap":"round",fill:"none",style:$}))))),u?r("div",null,c.default?r("div",{class:`${i}-progress-custom-content`,role:"none"},c.default()):s!=="default"?r("div",{class:`${i}-progress-icon`,"aria-hidden":!0},r(q,{clsPrefix:i},{default:()=>K[s]})):r("div",{class:`${i}-progress-text`,style:{color:h},role:"none"},r("span",{class:`${i}-progress-text__percentage`},d),r("span",{class:`${i}-progress-text__unit`},p))):null)}}});function N(e,c,g=100){return`m ${g/2} ${g/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const J=z({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:c}){const g=b(()=>e.percentage.map((t,o)=>`${Math.PI*t/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*o)-e.circleGap*o)*2}, ${e.viewBoxWidth*8}`));return()=>{const{viewBoxWidth:n,strokeWidth:t,circleGap:o,showIndicator:f,fillColor:s,railColor:d,railStyle:u,percentage:h,clsPrefix:p}=e;return r("div",{class:`${p}-progress-content`,role:"none"},r("div",{class:`${p}-progress-graph`,"aria-hidden":!0},r("div",{class:`${p}-progress-graph-circle`},r("svg",{viewBox:`0 0 ${n} ${n}`},h.map((y,i)=>r("g",{key:i},r("path",{class:`${p}-progress-graph-circle-rail`,d:N(n/2-t/2*(1+2*i)-o*i,t,n),"stroke-width":t,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:d[i]},u[i]]}),r("path",{class:[`${p}-progress-graph-circle-fill`,y===0&&`${p}-progress-graph-circle-fill--empty`],d:N(n/2-t/2*(1+2*i)-o*i,t,n),"stroke-width":t,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:g.value[i],strokeDashoffset:0,stroke:s[i]}})))))),f&&c.default?r("div",null,r("div",{class:`${p}-progress-text`},c.default())):null)}}}),Q=Object.assign(Object.assign({},A.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),ie=z({name:"Progress",props:Q,setup(e){const c=b(()=>e.indicatorPlacement||e.indicatorPosition),g=b(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:n,inlineThemeDisabled:t}=Y(e),o=A("Progress","-progress",V,H,e,n),f=b(()=>{const{status:d}=e,{common:{cubicBezierEaseInOut:u},self:{fontSize:h,fontSizeCircle:p,railColor:y,railHeight:i,iconSizeCircle:v,iconSizeLine:a,textColorCircle:C,textColorLineInner:$,textColorLineOuter:m,lineBgProcessing:k,fontWeightCircle:B,[I("iconColor",d)]:R,[I("fillColor",d)]:w}}=o.value;return{"--n-bezier":u,"--n-fill-color":w,"--n-font-size":h,"--n-font-size-circle":p,"--n-font-weight-circle":B,"--n-icon-color":R,"--n-icon-size-circle":v,"--n-icon-size-line":a,"--n-line-bg-processing":k,"--n-rail-color":y,"--n-rail-height":i,"--n-text-color-circle":C,"--n-text-color-line-inner":$,"--n-text-color-line-outer":m}}),s=t?j("progress",b(()=>e.status[0]),f,e):void 0;return{mergedClsPrefix:n,mergedIndicatorPlacement:c,gapDeg:g,cssVars:t?void 0:f,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){const{type:e,cssVars:c,indicatorTextColor:g,showIndicator:n,status:t,railColor:o,railStyle:f,color:s,percentage:d,viewBoxWidth:u,strokeWidth:h,mergedIndicatorPlacement:p,unit:y,borderRadius:i,fillBorderRadius:v,height:a,processing:C,circleGap:$,mergedClsPrefix:m,gapDeg:k,gapOffsetDegree:B,themeClass:R,$slots:w,onRender:D}=this;return D==null||D(),r("div",{class:[R,`${m}-progress`,`${m}-progress--${e}`,`${m}-progress--${t}`],style:c,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":d,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?r(Z,{clsPrefix:m,status:t,showIndicator:n,indicatorTextColor:g,railColor:o,fillColor:s,railStyle:f,offsetDegree:this.offsetDegree,percentage:d,viewBoxWidth:u,strokeWidth:h,gapDegree:k===void 0?e==="dashboard"?75:0:k,gapOffsetDegree:B,unit:y},w):e==="line"?r(F,{clsPrefix:m,status:t,showIndicator:n,indicatorTextColor:g,railColor:o,fillColor:s,railStyle:f,percentage:d,processing:C,indicatorPlacement:p,unit:y,fillBorderRadius:v,railBorderRadius:i,height:a},w):e==="multiple-circle"?r(J,{clsPrefix:m,strokeWidth:h,railColor:o,fillColor:s,railStyle:f,viewBoxWidth:u,percentage:d,showIndicator:n,circleGap:$},w):null)}});export{ie as _,H as p,G as s,re as u};
