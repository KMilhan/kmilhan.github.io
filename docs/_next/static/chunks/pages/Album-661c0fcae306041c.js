(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29],{5302:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Album",function(){return n(3590)}])},3590:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ec}});var o=n(1527),r=n(959),a=n(5765),i=n(1163),s=n(574),l=n(5924),c=n(1401),d=n(2212),u=n(5780),h=n(1233),p=n(4641),m=n(4971);function g(e){return(0,m.Z)("MuiCard",e)}(0,p.Z)("MuiCard",["root"]);let f=["className","raised"],b=e=>{let{classes:t}=e;return(0,c.Z)({root:["root"]},g,t)},Z=(0,d.ZP)(h.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),x=r.forwardRef(function(e,t){let n=(0,u.Z)({props:e,name:"MuiCard"}),{className:r,raised:a=!1}=n,c=(0,s.Z)(n,f),d=(0,i.Z)({},n,{raised:a}),h=b(d);return(0,o.jsx)(Z,(0,i.Z)({className:(0,l.Z)(h.root,r),elevation:a?8:void 0,ref:t,ownerState:d},c))});function v(e){return(0,m.Z)("MuiCardActions",e)}(0,p.Z)("MuiCardActions",["root","spacing"]);let y=["disableSpacing","className"],k=e=>{let{classes:t,disableSpacing:n}=e;return(0,c.Z)({root:["root",!n&&"spacing"]},v,t)},j=(0,d.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,!n.disableSpacing&&t.spacing]}})(({ownerState:e})=>(0,i.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),C=r.forwardRef(function(e,t){let n=(0,u.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:r=!1,className:a}=n,c=(0,s.Z)(n,y),d=(0,i.Z)({},n,{disableSpacing:r}),h=k(d);return(0,o.jsx)(j,(0,i.Z)({className:(0,l.Z)(h.root,a),ownerState:d,ref:t},c))});function M(e){return(0,m.Z)("MuiCardContent",e)}(0,p.Z)("MuiCardContent",["root"]);let w=["className","component"],_=e=>{let{classes:t}=e;return(0,c.Z)({root:["root"]},M,t)},N=(0,d.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),R=r.forwardRef(function(e,t){let n=(0,u.Z)({props:e,name:"MuiCardContent"}),{className:r,component:a="div"}=n,c=(0,s.Z)(n,w),d=(0,i.Z)({},n,{component:a}),h=_(d);return(0,o.jsx)(N,(0,i.Z)({as:a,className:(0,l.Z)(h.root,r),ownerState:d,ref:t},c))});function S(e){return(0,m.Z)("MuiCardMedia",e)}(0,p.Z)("MuiCardMedia",["root","media","img"]);let G=["children","className","component","image","src","style"],P=e=>{let{classes:t,isMediaComponent:n,isImageComponent:o}=e;return(0,c.Z)({root:["root",n&&"media",o&&"img"]},S,t)},T=(0,d.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e,{isMediaComponent:o,isImageComponent:r}=n;return[t.root,o&&t.media,r&&t.img]}})(({ownerState:e})=>(0,i.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})),A=["video","audio","picture","iframe","img"],O=["picture","img"],B=r.forwardRef(function(e,t){let n=(0,u.Z)({props:e,name:"MuiCardMedia"}),{children:r,className:a,component:c="div",image:d,src:h,style:p}=n,m=(0,s.Z)(n,G),g=-1!==A.indexOf(c),f=!g&&d?(0,i.Z)({backgroundImage:`url("${d}")`},p):p,b=(0,i.Z)({},n,{component:c,isMediaComponent:g,isImageComponent:-1!==O.indexOf(c)}),Z=P(b);return(0,o.jsx)(T,(0,i.Z)({className:(0,l.Z)(Z.root,a),as:c,role:!g&&d?"img":void 0,ref:t,style:f,ownerState:b,src:g?d||h:void 0},m,{children:r}))});var I=n(7343),E=n(3761),D=n(8638),$=n(853),F=n(3849),W=n(6432),H=n(6799),L=n(4227);let z=["component","direction","spacing","divider","children","className","useFlexGap"],X=(0,W.Z)(),K=(0,D.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function V(e){return(0,$.Z)({props:e,name:"MuiStack",defaultTheme:X})}let Y=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],q=({ownerState:e,theme:t})=>{let n=(0,i.Z)({display:"flex",flexDirection:"column"},(0,H.k9)({theme:t},(0,H.P$)({values:e.direction,breakpoints:t.breakpoints.values}),e=>({flexDirection:e})));if(e.spacing){let o=(0,L.hB)(t),r=Object.keys(t.breakpoints.values).reduce((t,n)=>(("object"==typeof e.spacing&&null!=e.spacing[n]||"object"==typeof e.direction&&null!=e.direction[n])&&(t[n]=!0),t),{}),a=(0,H.P$)({values:e.direction,base:r}),i=(0,H.P$)({values:e.spacing,base:r});"object"==typeof a&&Object.keys(a).forEach((e,t,n)=>{let o=a[e];if(!o){let o=t>0?a[n[t-1]]:"column";a[e]=o}});let s=(t,n)=>e.useFlexGap?{gap:(0,L.NA)(o,t)}:{"& > :not(style) + :not(style)":{margin:0,[`margin${Y(n?a[n]:e.direction)}`]:(0,L.NA)(o,t)}};n=(0,E.Z)(n,(0,H.k9)({theme:t},i,s))}return(0,H.dt)(t.breakpoints,n)},J=function(e={}){let{createStyledComponent:t=K,useThemeProps:n=V,componentName:a="MuiStack"}=e,d=()=>(0,c.Z)({root:["root"]},e=>(0,m.Z)(a,e),{}),u=t(q),h=r.forwardRef(function(e,t){let a=n(e),c=(0,F.Z)(a),{component:h="div",direction:p="column",spacing:m=0,divider:g,children:f,className:b,useFlexGap:Z=!1}=c,x=(0,s.Z)(c,z),v=d();return(0,o.jsx)(u,(0,i.Z)({as:h,ownerState:{direction:p,spacing:m,useFlexGap:Z},ref:t,className:(0,l.Z)(v.root,b)},x,{children:g?function(e,t){let n=r.Children.toArray(e).filter(Boolean);return n.reduce((e,o,a)=>(e.push(o),a<n.length-1&&e.push(r.cloneElement(t,{key:`separator-${a}`})),e),[])}(f,g):f}))});return h}({createStyledComponent:(0,d.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,u.Z)({props:e,name:"MuiStack"})});var Q=n(3351),U=n(8010),ee=n(9376),et=n(9691),en=n(3866),eo=n(5965),er=n.n(eo);function ea(){return(0,o.jsxs)(U.Z,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 Milhan Kim, Soojeong Lim ",new Date().getFullYear(),"."]})}function ei(e,t,n,o,r){return{file:e,code:t,alternative_name:n,explanation:o,time_took:r}}let es=[ei("./m51_stacked_c8_3.png","M51","Whirlpool Galaxy","Interacting grand-design spiral galaxy with a Seyfert 2 active galactic nucleus","2023-04-28"),ei("./m51.png","M51","Whirlpool Galaxy","Interacting grand-design spiral galaxy with a Seyfert 2 active galactic nucleus","2023-04-09"),ei("./M42-orion-2023-01-21.png","M42, Sh2-279","The Great Orion Nebula and The Running Man Nebula","One of very few visible nebulae in the night sky, and one of the most beautiful deep sky objects.","2023-01-21"),ei("./M1_crab_nebula_2023-01-21.png","M1","Crab Nebula","Supernova remnant and pulsar wind nebula in the constellation of Taurus","2023-01-21"),ei("./NGC2244-rosette-nebula3.png","NGC-2244","Rosette Nebula","The nebula looks like a rose, so it's called the rosette nebula","2023-01-02"),ei("./ngc1499-california_nebula-2022-12-24_2.png","NGC-1499","California Nebula","The nebula looks like the state of California. Only a part of the massive deep sky object is presented here.","2022-12-24"),ei("./NGC896_heart_nebula_2023-01-02.png","NGC-896","Heart Nebula","Heart!!","2023-01-02"),ei("./ngc2264-christmas_tree_cluster-2022-12-24.png","NGC-2264","Christmas tree cluster, or cone nebula","One of the hardest target to capture so far. But you can check the cone-shaped nebula and (part of) christmas tree form","2022-12-24"),ei("./m42-orion-2022-11-27.png","M42","The Great Orion Nebula","One of very few visible nebulae in the night sky, and one of the most beautiful deep sky objects. This photo was took in Tokyo, our house veranda","2022-11-27"),ei("./r_r_p_stacked3 (1).png","M45","Pleiades star cluster","Also called seven sisters, One of very few visible nebulae in the night sky with bare eyes. Look at the beautiful blue gases","2022-10-03"),ei("./r_r_f_stacked2 (1).png","IC434, NGC-2024","Horsehead nebula and Flame nebula","One of the most famous deep sky object for the audiences, thanks to the hubble image. The image contains at least three nebulae, horse head, flame, and reflection nebular NGC-2023 (bright-star-looking object under the horse)","2022-10-03"),ei("./r_a_stacked (1).png","M31","Andromeda Galaxy","The nearest galaxy to our galaxy. Also you can see two more galaxies, M32 (center above) and M110 (below)","2022-10-03")],el=(0,et.Z)();function ec(){return(0,o.jsxs)(en.Z,{theme:el,children:[(0,o.jsxs)("main",{children:[(0,o.jsx)(Q.Z,{sx:{bgcolor:"background.paper",pt:8,pb:6},children:(0,o.jsxs)(ee.Z,{maxWidth:"sm",children:[(0,o.jsx)(U.Z,{component:"h1",variant:"h2",align:"center",color:"text.primary",gutterBottom:!0,children:"Astrophotography Album"}),(0,o.jsx)(U.Z,{variant:"h5",align:"center",color:"text.secondary",paragraph:!0,children:"When the sky is clear, we look up the sky and take a photo of night sky, especially deep sky objects."}),(0,o.jsx)(U.Z,{variant:"h6",align:"center",color:"text.secondary",paragraph:!0,children:"These are the best astrophotographies I and my partner have taken over the years"}),(0,o.jsx)(J,{sx:{pt:4},direction:"row",spacing:2,justifyContent:"center",children:(0,o.jsx)(er(),{href:"/",style:{textDecoration:"none"},children:(0,o.jsx)(a.Z,{variant:"contained",children:"Go back to the main page"})})})]})}),(0,o.jsx)(ee.Z,{sx:{py:8},maxWidth:"md",children:(0,o.jsx)(I.ZP,{container:!0,spacing:4,children:es.map(e=>(0,o.jsx)(I.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,o.jsxs)(x,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,o.jsx)(B,{component:"img",sx:{pt:"10%"},image:"thumb/"+e.file,alt:e.code}),(0,o.jsxs)(R,{sx:{flexGrow:1},children:[(0,o.jsx)(U.Z,{gutterBottom:!0,variant:"h4",component:"h2",children:e.code}),(0,o.jsx)(U.Z,{gutterBottom:!0,variant:"h5",component:"h5",children:e.alternative_name}),(0,o.jsx)(U.Z,{gutterBottom:!0,component:"h6",children:e.time_took}),(0,o.jsx)(U.Z,{children:e.explanation})]}),(0,o.jsx)(C,{children:(0,o.jsx)(a.Z,{size:"small",children:(0,o.jsx)(er(),{href:e.file,style:{textDecoration:"none"},children:"View large"})})})]})},e.file))})})]}),(0,o.jsxs)(Q.Z,{sx:{bgcolor:"background.paper",p:6},component:"footer",children:[(0,o.jsx)(U.Z,{variant:"h6",align:"center",gutterBottom:!0,children:"Hope you enjoyed the night sky objects!"}),(0,o.jsx)(U.Z,{variant:"subtitle1",align:"center",color:"text.secondary",component:"p",children:"All deep sky object references are tagged in the best-effort fashion. Please let me know if some are wrong."}),(0,o.jsx)(ea,{})]})]})}}},function(e){e.O(0,[66,774,888,179],function(){return e(e.s=5302)}),_N_E=e.O()}]);