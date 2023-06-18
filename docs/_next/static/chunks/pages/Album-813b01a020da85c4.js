(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29],{7876:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Album",function(){return n(5703)}])},5703:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ec}});var a=n(1527),o=n(959),r=n(5527),i=n(795),s=n(1833),l=n(5924),c=n(3409),u=n(4532),d=n(4977),h=n(536),p=n(956),g=n(442);function m(e){return(0,g.Z)("MuiCard",e)}(0,p.Z)("MuiCard",["root"]);let f=["className","raised"],b=e=>{let{classes:t}=e;return(0,c.Z)({root:["root"]},m,t)},y=(0,u.ZP)(h.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),x=o.forwardRef(function(e,t){let n=(0,d.Z)({props:e,name:"MuiCard"}),{className:o,raised:r=!1}=n,c=(0,s.Z)(n,f),u=(0,i.Z)({},n,{raised:r}),h=b(u);return(0,a.jsx)(y,(0,i.Z)({className:(0,l.Z)(h.root,o),elevation:r?8:void 0,ref:t,ownerState:u},c))});function Z(e){return(0,g.Z)("MuiCardActions",e)}(0,p.Z)("MuiCardActions",["root","spacing"]);let v=["disableSpacing","className"],k=e=>{let{classes:t,disableSpacing:n}=e;return(0,c.Z)({root:["root",!n&&"spacing"]},Z,t)},j=(0,u.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,!n.disableSpacing&&t.spacing]}})(({ownerState:e})=>(0,i.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),C=o.forwardRef(function(e,t){let n=(0,d.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:o=!1,className:r}=n,c=(0,s.Z)(n,v),u=(0,i.Z)({},n,{disableSpacing:o}),h=k(u);return(0,a.jsx)(j,(0,i.Z)({className:(0,l.Z)(h.root,r),ownerState:u,ref:t},c))});function M(e){return(0,g.Z)("MuiCardContent",e)}(0,p.Z)("MuiCardContent",["root"]);let w=["className","component"],N=e=>{let{classes:t}=e;return(0,c.Z)({root:["root"]},M,t)},_=(0,u.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),S=o.forwardRef(function(e,t){let n=(0,d.Z)({props:e,name:"MuiCardContent"}),{className:o,component:r="div"}=n,c=(0,s.Z)(n,w),u=(0,i.Z)({},n,{component:r}),h=N(u);return(0,a.jsx)(_,(0,i.Z)({as:r,className:(0,l.Z)(h.root,o),ownerState:u,ref:t},c))});function R(e){return(0,g.Z)("MuiCardMedia",e)}(0,p.Z)("MuiCardMedia",["root","media","img"]);let G=["children","className","component","image","src","style"],T=e=>{let{classes:t,isMediaComponent:n,isImageComponent:a}=e;return(0,c.Z)({root:["root",n&&"media",a&&"img"]},R,t)},P=(0,u.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e,{isMediaComponent:a,isImageComponent:o}=n;return[t.root,a&&t.media,o&&t.img]}})(({ownerState:e})=>(0,i.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})),O=["video","audio","picture","iframe","img"],E=["picture","img"],I=o.forwardRef(function(e,t){let n=(0,d.Z)({props:e,name:"MuiCardMedia"}),{children:o,className:r,component:c="div",image:u,src:h,style:p}=n,g=(0,s.Z)(n,G),m=-1!==O.indexOf(c),f=!m&&u?(0,i.Z)({backgroundImage:`url("${u}")`},p):p,b=(0,i.Z)({},n,{component:c,isMediaComponent:m,isImageComponent:-1!==E.indexOf(c)}),y=T(b);return(0,a.jsx)(P,(0,i.Z)({className:(0,l.Z)(y.root,r),as:c,role:!m&&u?"img":void 0,ref:t,style:f,ownerState:b,src:m?u||h:void 0},g,{children:o}))});var A=n(8403),B=n(6344),D=n(6647),H=n(8712),L=n(6123),W=n(4139),$=n(8263),F=n(4282);let z=["component","direction","spacing","divider","children","className","useFlexGap"],V=(0,W.Z)(),Q=(0,D.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function X(e){return(0,H.Z)({props:e,name:"MuiStack",defaultTheme:V})}let J=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],K=({ownerState:e,theme:t})=>{let n=(0,i.Z)({display:"flex",flexDirection:"column"},(0,$.k9)({theme:t},(0,$.P$)({values:e.direction,breakpoints:t.breakpoints.values}),e=>({flexDirection:e})));if(e.spacing){let a=(0,F.hB)(t),o=Object.keys(t.breakpoints.values).reduce((t,n)=>(("object"==typeof e.spacing&&null!=e.spacing[n]||"object"==typeof e.direction&&null!=e.direction[n])&&(t[n]=!0),t),{}),r=(0,$.P$)({values:e.direction,base:o}),i=(0,$.P$)({values:e.spacing,base:o});"object"==typeof r&&Object.keys(r).forEach((e,t,n)=>{let a=r[e];if(!a){let a=t>0?r[n[t-1]]:"column";r[e]=a}}),n=(0,B.Z)(n,(0,$.k9)({theme:t},i,(t,n)=>e.useFlexGap?{gap:(0,F.NA)(a,t)}:{"& > :not(style) + :not(style)":{margin:0,[`margin${J(n?r[n]:e.direction)}`]:(0,F.NA)(a,t)}}))}return(0,$.dt)(t.breakpoints,n)},Y=function(e={}){let{createStyledComponent:t=Q,useThemeProps:n=X,componentName:r="MuiStack"}=e,u=()=>(0,c.Z)({root:["root"]},e=>(0,g.Z)(r,e),{}),d=t(K),h=o.forwardRef(function(e,t){let r=n(e),c=(0,L.Z)(r),{component:h="div",direction:p="column",spacing:g=0,divider:m,children:f,className:b,useFlexGap:y=!1}=c,x=(0,s.Z)(c,z),Z=u();return(0,a.jsx)(d,(0,i.Z)({as:h,ownerState:{direction:p,spacing:g,useFlexGap:y},ref:t,className:(0,l.Z)(Z.root,b)},x,{children:m?function(e,t){let n=o.Children.toArray(e).filter(Boolean);return n.reduce((e,a,r)=>(e.push(a),r<n.length-1&&e.push(o.cloneElement(t,{key:`separator-${r}`})),e),[])}(f,m):f}))});return h}({createStyledComponent:(0,u.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,d.Z)({props:e,name:"MuiStack"})});var q=n(6038),U=n(2203),ee=n(6608),et=n(906),en=n(9196),ea=n(7600),eo=n.n(ea);function er(){return(0,a.jsxs)(U.Z,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 Milhan Kim, Soojeong Lim ",new Date().getFullYear(),"."]})}function ei(e,t,n,a,o){return{file:e,code:t,alternative_name:n,explanation:a,time_took:o}}let es=[ei("./m16.png","M16","Eagle Nebula, Pillars of Creation",'The Eagle Nebula (catalogued as Messier 16 or M16, and as NGC 6611, and also known as the Star Queen Nebula) is a young open cluster of stars in the constellation Serpens, discovered by Jean-Philippe de Cheseaux in 1745–46. Both the "Eagle" and the "Star Queen" refer to visual impressions of the dark silhouette near the center of the nebula, an area made famous as the "Pillars of Creation" imaged by the Hubble Space Telescope. Pillars of Creation is a photograph taken by the Hubble Space Telescope of elephant trunks of interstellar gas and dust in the Eagle Nebula, in the Serpens constellation, some 6,500–7,000 light-years (2,000–2,100 pc; 61–66 Em) from Earth.',"2023-01-02"),ei("./ngc2244.jpg","NGC-2244","Rosette Nebula","The Rosette Nebula (also known as Caldwell 49) is an H II region located near one end of a giant molecular cloud in the Monoceros region of the Milky Way Galaxy. The open cluster NGC 2244 (Caldwell 50) is closely associated with the nebulosity, the stars of the cluster having been formed from the nebula's matter.","2023-01-02"),ei("./m42_pixinsight.png","M42, Sh2-279","The Great Orion Nebula and The Running Man Nebula","One of very few visible nebulae in the night sky, and one of the most beautiful deep sky objects.","2023-01-21"),ei("./m51_edge.png","M51","Whirlpool Galaxy","Interacting grand-design spiral galaxy with a Seyfert 2 active galactic nucleus","2023-05-17"),ei("./IMG_2027.jpg","Vega","α Lyr","Vega is the brightest star in the northern constellation of Lyra","2023-05-02"),ei("./m51.png","M51","Whirlpool Galaxy","Interacting grand-design spiral galaxy with a Seyfert 2 active galactic nucleus","2023-04-09"),ei("./M42-orion-2023-01-21.png","M42, Sh2-279","The Great Orion Nebula and The Running Man Nebula","One of very few visible nebulae in the night sky, and one of the most beautiful deep sky objects.","2023-01-21"),ei("./M1_crab_nebula_2023-01-21.png","M1","Crab Nebula","Supernova remnant and pulsar wind nebula in the constellation of Taurus","2023-01-21"),ei("./NGC2244-rosette-nebula3.png","NGC-2244","Rosette Nebula","The nebula looks like a rose, so it's called the rosette nebula","2023-01-02"),ei("./ngc1499-california_nebula-2022-12-24_2.png","NGC-1499","California Nebula","The nebula looks like the state of California. Only a part of the massive deep sky object is presented here.","2022-12-24"),ei("./NGC896_heart_nebula_2023-01-02.png","NGC-896","Heart Nebula","It displays glowing ionized hydrogen gas and darker dust lanes.","2023-01-02"),ei("./ngc2264-christmas_tree_cluster-2022-12-24.png","NGC-2264","Christmas tree cluster, or cone nebula","One of the hardest target to capture so far. But you can check the cone-shaped nebula and (part of) christmas tree form","2022-12-24"),ei("./m42-orion-2022-11-27.png","M42","The Great Orion Nebula","One of very few visible nebulae in the night sky, and one of the most beautiful deep sky objects. This photo was took in Tokyo, our house veranda","2022-11-27"),ei("./r_r_p_stacked3 (1).png","M45","Pleiades star cluster","Also called seven sisters, One of very few visible nebulae in the night sky with bare eyes. Look at the beautiful blue gases","2022-10-03"),ei("./r_r_f_stacked2 (1).png","IC434, NGC-2024","Horsehead nebula and Flame nebula","One of the most famous deep sky object for the audiences, thanks to the hubble image. The image contains at least three nebulae, horse head, flame, and reflection nebular NGC-2023 (bright-star-looking object under the horse)","2022-10-03"),ei("./r_a_stacked (1).png","M31","Andromeda Galaxy","The nearest galaxy to our galaxy. Also you can see two more galaxies, M32 (center above) and M110 (below)","2022-10-03")],el=(0,et.Z)();function ec(){return(0,a.jsxs)(en.Z,{theme:el,children:[(0,a.jsxs)("main",{children:[(0,a.jsx)(q.Z,{sx:{bgcolor:"background.paper",pt:8,pb:6},children:(0,a.jsxs)(ee.Z,{maxWidth:"sm",children:[(0,a.jsx)(U.Z,{component:"h1",variant:"h2",align:"center",color:"text.primary",gutterBottom:!0,children:"Gallery of Astrophotography"}),(0,a.jsx)(U.Z,{variant:"h5",align:"center",color:"text.secondary",paragraph:!0,children:"Whenever the sky is clear, we gaze upwards and capture images of the night sky, focusing particularly on deep sky objects."}),(0,a.jsx)(U.Z,{variant:"h6",align:"center",color:"text.secondary",paragraph:!0,children:"These are some of the finest astrophotography images that my partner and I have captured over the years."}),(0,a.jsx)(Y,{sx:{pt:4},direction:"row",spacing:2,justifyContent:"center",children:(0,a.jsx)(eo(),{href:"/",style:{textDecoration:"none"},children:(0,a.jsx)(r.Z,{variant:"contained",children:"Go back to the main page"})})})]})}),(0,a.jsx)(ee.Z,{sx:{py:8},maxWidth:"md",children:(0,a.jsx)(A.ZP,{container:!0,spacing:4,children:es.map(e=>(0,a.jsx)(A.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,a.jsxs)(x,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,a.jsx)(I,{component:"img",sx:{pt:"10%"},image:"thumb/"+e.file,alt:e.code}),(0,a.jsxs)(S,{sx:{flexGrow:1},children:[(0,a.jsx)(U.Z,{gutterBottom:!0,variant:"h4",component:"h2",children:e.code}),(0,a.jsx)(U.Z,{gutterBottom:!0,variant:"h5",component:"h5",children:e.alternative_name}),(0,a.jsx)(U.Z,{gutterBottom:!0,component:"h6",children:e.time_took}),(0,a.jsx)(U.Z,{children:e.explanation})]}),(0,a.jsx)(C,{children:(0,a.jsx)(r.Z,{size:"small",children:(0,a.jsx)(eo(),{href:e.file,style:{textDecoration:"none"},children:"View large"})})})]})},e.file))})})]}),(0,a.jsxs)(q.Z,{sx:{bgcolor:"background.paper",p:6},component:"footer",children:[(0,a.jsx)(U.Z,{variant:"h6",align:"center",gutterBottom:!0,children:"Hope you enjoyed the night sky objects!"}),(0,a.jsx)(U.Z,{variant:"subtitle1",align:"center",color:"text.secondary",component:"p",children:"References to all celestial deep sky objects are labeled as accurately as possible. If you find any inaccuracies, do not hesitate to inform me."}),(0,a.jsx)(er,{})]})]})}}},function(e){e.O(0,[463,774,888,179],function(){return e(e.s=7876)}),_N_E=e.O()}]);