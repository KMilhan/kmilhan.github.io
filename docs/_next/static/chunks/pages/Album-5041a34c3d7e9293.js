(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29],{7876:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Album",function(){return n(5703)}])},5703:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ec}});var o=n(1527),r=n(959),a=n(5527),i=n(795),s=n(1833),l=n(5924),c=n(3409),d=n(4532),u=n(4977),h=n(536),p=n(956),g=n(442);function m(e){return(0,g.Z)("MuiCard",e)}(0,p.Z)("MuiCard",["root"]);let f=["className","raised"],b=e=>{let{classes:t}=e;return(0,c.Z)({root:["root"]},m,t)},x=(0,d.ZP)(h.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),Z=r.forwardRef(function(e,t){let n=(0,u.Z)({props:e,name:"MuiCard"}),{className:r,raised:a=!1}=n,c=(0,s.Z)(n,f),d=(0,i.Z)({},n,{raised:a}),h=b(d);return(0,o.jsx)(x,(0,i.Z)({className:(0,l.Z)(h.root,r),elevation:a?8:void 0,ref:t,ownerState:d},c))});function y(e){return(0,g.Z)("MuiCardActions",e)}(0,p.Z)("MuiCardActions",["root","spacing"]);let v=["disableSpacing","className"],k=e=>{let{classes:t,disableSpacing:n}=e;return(0,c.Z)({root:["root",!n&&"spacing"]},y,t)},j=(0,d.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,!n.disableSpacing&&t.spacing]}})(({ownerState:e})=>(0,i.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),C=r.forwardRef(function(e,t){let n=(0,u.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:r=!1,className:a}=n,c=(0,s.Z)(n,v),d=(0,i.Z)({},n,{disableSpacing:r}),h=k(d);return(0,o.jsx)(j,(0,i.Z)({className:(0,l.Z)(h.root,a),ownerState:d,ref:t},c))});function M(e){return(0,g.Z)("MuiCardContent",e)}(0,p.Z)("MuiCardContent",["root"]);let w=["className","component"],_=e=>{let{classes:t}=e;return(0,c.Z)({root:["root"]},M,t)},N=(0,d.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),R=r.forwardRef(function(e,t){let n=(0,u.Z)({props:e,name:"MuiCardContent"}),{className:r,component:a="div"}=n,c=(0,s.Z)(n,w),d=(0,i.Z)({},n,{component:a}),h=_(d);return(0,o.jsx)(N,(0,i.Z)({as:a,className:(0,l.Z)(h.root,r),ownerState:d,ref:t},c))});function S(e){return(0,g.Z)("MuiCardMedia",e)}(0,p.Z)("MuiCardMedia",["root","media","img"]);let G=["children","className","component","image","src","style"],T=e=>{let{classes:t,isMediaComponent:n,isImageComponent:o}=e;return(0,c.Z)({root:["root",n&&"media",o&&"img"]},S,t)},O=(0,d.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e,{isMediaComponent:o,isImageComponent:r}=n;return[t.root,o&&t.media,r&&t.img]}})(({ownerState:e})=>(0,i.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})),P=["video","audio","picture","iframe","img"],A=["picture","img"],B=r.forwardRef(function(e,t){let n=(0,u.Z)({props:e,name:"MuiCardMedia"}),{children:r,className:a,component:c="div",image:d,src:h,style:p}=n,g=(0,s.Z)(n,G),m=-1!==P.indexOf(c),f=!m&&d?(0,i.Z)({backgroundImage:`url("${d}")`},p):p,b=(0,i.Z)({},n,{component:c,isMediaComponent:m,isImageComponent:-1!==A.indexOf(c)}),x=T(b);return(0,o.jsx)(O,(0,i.Z)({className:(0,l.Z)(x.root,a),as:c,role:!m&&d?"img":void 0,ref:t,style:f,ownerState:b,src:m?d||h:void 0},g,{children:r}))});var I=n(8403),E=n(6344),D=n(6647),L=n(8712),$=n(6123),F=n(4139),W=n(8263),H=n(4282);let V=["component","direction","spacing","divider","children","className","useFlexGap"],z=(0,F.Z)(),X=(0,D.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function K(e){return(0,L.Z)({props:e,name:"MuiStack",defaultTheme:z})}let Y=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],q=({ownerState:e,theme:t})=>{let n=(0,i.Z)({display:"flex",flexDirection:"column"},(0,W.k9)({theme:t},(0,W.P$)({values:e.direction,breakpoints:t.breakpoints.values}),e=>({flexDirection:e})));if(e.spacing){let o=(0,H.hB)(t),r=Object.keys(t.breakpoints.values).reduce((t,n)=>(("object"==typeof e.spacing&&null!=e.spacing[n]||"object"==typeof e.direction&&null!=e.direction[n])&&(t[n]=!0),t),{}),a=(0,W.P$)({values:e.direction,base:r}),i=(0,W.P$)({values:e.spacing,base:r});"object"==typeof a&&Object.keys(a).forEach((e,t,n)=>{let o=a[e];if(!o){let o=t>0?a[n[t-1]]:"column";a[e]=o}}),n=(0,E.Z)(n,(0,W.k9)({theme:t},i,(t,n)=>e.useFlexGap?{gap:(0,H.NA)(o,t)}:{"& > :not(style) + :not(style)":{margin:0,[`margin${Y(n?a[n]:e.direction)}`]:(0,H.NA)(o,t)}}))}return(0,W.dt)(t.breakpoints,n)},J=function(e={}){let{createStyledComponent:t=X,useThemeProps:n=K,componentName:a="MuiStack"}=e,d=()=>(0,c.Z)({root:["root"]},e=>(0,g.Z)(a,e),{}),u=t(q),h=r.forwardRef(function(e,t){let a=n(e),c=(0,$.Z)(a),{component:h="div",direction:p="column",spacing:g=0,divider:m,children:f,className:b,useFlexGap:x=!1}=c,Z=(0,s.Z)(c,V),y=d();return(0,o.jsx)(u,(0,i.Z)({as:h,ownerState:{direction:p,spacing:g,useFlexGap:x},ref:t,className:(0,l.Z)(y.root,b)},Z,{children:m?function(e,t){let n=r.Children.toArray(e).filter(Boolean);return n.reduce((e,o,a)=>(e.push(o),a<n.length-1&&e.push(r.cloneElement(t,{key:`separator-${a}`})),e),[])}(f,m):f}))});return h}({createStyledComponent:(0,d.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,u.Z)({props:e,name:"MuiStack"})});var Q=n(6038),U=n(2203),ee=n(6608),et=n(906),en=n(9196),eo=n(7600),er=n.n(eo);function ea(){return(0,o.jsxs)(U.Z,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 Milhan Kim, Soojeong Lim ",new Date().getFullYear(),"."]})}function ei(e,t,n,o,r){return{file:e,code:t,alternative_name:n,explanation:o,time_took:r}}let es=[ei("./ngc2244.jpg","NGC-2244","Rosette Nebula","The nebula looks like a rose, so it's called the rosette nebula","2023-01-02"),ei("./m42_pixinsight.png","M42, Sh2-279","The Great Orion Nebula and The Running Man Nebula","One of very few visible nebulae in the night sky, and one of the most beautiful deep sky objects.","2023-01-21"),ei("./m51_edge.png","M51","Whirlpool Galaxy","Interacting grand-design spiral galaxy with a Seyfert 2 active galactic nucleus","2023-05-17"),ei("./IMG_2027.jpg","Vega","α Lyr","Vega is the brightest star in the northern constellation of Lyra","2023-05-02"),ei("./m51.png","M51","Whirlpool Galaxy","Interacting grand-design spiral galaxy with a Seyfert 2 active galactic nucleus","2023-04-09"),ei("./M42-orion-2023-01-21.png","M42, Sh2-279","The Great Orion Nebula and The Running Man Nebula","One of very few visible nebulae in the night sky, and one of the most beautiful deep sky objects.","2023-01-21"),ei("./M1_crab_nebula_2023-01-21.png","M1","Crab Nebula","Supernova remnant and pulsar wind nebula in the constellation of Taurus","2023-01-21"),ei("./NGC2244-rosette-nebula3.png","NGC-2244","Rosette Nebula","The nebula looks like a rose, so it's called the rosette nebula","2023-01-02"),ei("./ngc1499-california_nebula-2022-12-24_2.png","NGC-1499","California Nebula","The nebula looks like the state of California. Only a part of the massive deep sky object is presented here.","2022-12-24"),ei("./NGC896_heart_nebula_2023-01-02.png","NGC-896","Heart Nebula","Heart!!","2023-01-02"),ei("./ngc2264-christmas_tree_cluster-2022-12-24.png","NGC-2264","Christmas tree cluster, or cone nebula","One of the hardest target to capture so far. But you can check the cone-shaped nebula and (part of) christmas tree form","2022-12-24"),ei("./m42-orion-2022-11-27.png","M42","The Great Orion Nebula","One of very few visible nebulae in the night sky, and one of the most beautiful deep sky objects. This photo was took in Tokyo, our house veranda","2022-11-27"),ei("./r_r_p_stacked3 (1).png","M45","Pleiades star cluster","Also called seven sisters, One of very few visible nebulae in the night sky with bare eyes. Look at the beautiful blue gases","2022-10-03"),ei("./r_r_f_stacked2 (1).png","IC434, NGC-2024","Horsehead nebula and Flame nebula","One of the most famous deep sky object for the audiences, thanks to the hubble image. The image contains at least three nebulae, horse head, flame, and reflection nebular NGC-2023 (bright-star-looking object under the horse)","2022-10-03"),ei("./r_a_stacked (1).png","M31","Andromeda Galaxy","The nearest galaxy to our galaxy. Also you can see two more galaxies, M32 (center above) and M110 (below)","2022-10-03")],el=(0,et.Z)();function ec(){return(0,o.jsxs)(en.Z,{theme:el,children:[(0,o.jsxs)("main",{children:[(0,o.jsx)(Q.Z,{sx:{bgcolor:"background.paper",pt:8,pb:6},children:(0,o.jsxs)(ee.Z,{maxWidth:"sm",children:[(0,o.jsx)(U.Z,{component:"h1",variant:"h2",align:"center",color:"text.primary",gutterBottom:!0,children:"Astrophotography Album"}),(0,o.jsx)(U.Z,{variant:"h5",align:"center",color:"text.secondary",paragraph:!0,children:"When the sky is clear, we look up the sky and take a photo of night sky, especially deep sky objects."}),(0,o.jsx)(U.Z,{variant:"h6",align:"center",color:"text.secondary",paragraph:!0,children:"These are the best astrophotographies I and my partner have taken over the years"}),(0,o.jsx)(J,{sx:{pt:4},direction:"row",spacing:2,justifyContent:"center",children:(0,o.jsx)(er(),{href:"/",style:{textDecoration:"none"},children:(0,o.jsx)(a.Z,{variant:"contained",children:"Go back to the main page"})})})]})}),(0,o.jsx)(ee.Z,{sx:{py:8},maxWidth:"md",children:(0,o.jsx)(I.ZP,{container:!0,spacing:4,children:es.map(e=>(0,o.jsx)(I.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,o.jsxs)(Z,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,o.jsx)(B,{component:"img",sx:{pt:"10%"},image:"thumb/"+e.file,alt:e.code}),(0,o.jsxs)(R,{sx:{flexGrow:1},children:[(0,o.jsx)(U.Z,{gutterBottom:!0,variant:"h4",component:"h2",children:e.code}),(0,o.jsx)(U.Z,{gutterBottom:!0,variant:"h5",component:"h5",children:e.alternative_name}),(0,o.jsx)(U.Z,{gutterBottom:!0,component:"h6",children:e.time_took}),(0,o.jsx)(U.Z,{children:e.explanation})]}),(0,o.jsx)(C,{children:(0,o.jsx)(a.Z,{size:"small",children:(0,o.jsx)(er(),{href:e.file,style:{textDecoration:"none"},children:"View large"})})})]})},e.file))})})]}),(0,o.jsxs)(Q.Z,{sx:{bgcolor:"background.paper",p:6},component:"footer",children:[(0,o.jsx)(U.Z,{variant:"h6",align:"center",gutterBottom:!0,children:"Hope you enjoyed the night sky objects!"}),(0,o.jsx)(U.Z,{variant:"subtitle1",align:"center",color:"text.secondary",component:"p",children:"All deep sky object references are tagged in the best-effort fashion. Please let me know if some are wrong."}),(0,o.jsx)(ea,{})]})]})}}},function(e){e.O(0,[463,774,888,179],function(){return e(e.s=7876)}),_N_E=e.O()}]);