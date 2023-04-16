"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[478],{2050:function(a,b,c){c.d(b,{U:function(){return f}});var d=c(5893),e=c(6010);function f(a){var b,c=a.label,f=a.inputId,g=a.inputValue,h=a.inputLimit,i=a.useTextArea,j=a.errorMessage,k=a.handleChange,l=a.handleKeyboardShortcut,m=null!==(b=null==g?void 0:g.slice(0,h))&& void 0!==b?b:"",n=m.length,o=h&&n>h;return(0,d.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,d.jsxs)("div",{className:(0,e.Z)("relative rounded ring-1 transition-shadow duration-200",j?"ring-accent-red":"ring-light-line-reply focus-within:ring-2 \n                 focus-within:!ring-main-accent dark:ring-dark-border"),children:[i?(0,d.jsx)("textarea",{className:"peer mt-6 w-full resize-none bg-inherit px-3 pb-1 placeholder-transparent outline-none transition",id:f,placeholder:f,onChange:o?void 0:k,onKeyUp:l,value:m,rows:3}):(0,d.jsx)("input",{className:"peer mt-6 w-full bg-inherit px-3 pb-1 placeholder-transparent outline-none transition",id:f,type:"text",placeholder:f,onChange:o?void 0:k,value:m,onKeyUp:l}),(0,d.jsx)("label",{className:(0,e.Z)("group-peer absolute left-3 translate-y-1 bg-main-background text-sm\n             text-light-secondary transition-all peer-placeholder-shown:translate-y-3\n             peer-placeholder-shown:text-lg peer-focus:translate-y-1 peer-focus:text-sm\n             dark:text-dark-secondary",j?"!text-accent-red peer-focus:text-accent-red":"peer-focus:text-main-accent"),htmlFor:f,children:c}),h&&(0,d.jsxs)("span",{className:(0,e.Z)("absolute right-3 top-0 translate-y-1 text-sm text-light-secondary transition-opacity \n               duration-200 peer-focus:visible peer-focus:opacity-100 dark:text-dark-secondary",j?"visible opacity-100":"invisible opacity-0"),children:[n," / ",h]})]}),j&&(0,d.jsx)("p",{className:"text-sm text-accent-red",children:j})]})}},6993:function(a,b,c){c.d(b,{I:function(){return n}});var d=c(5893),e=c(1163),f=c(5321),g=c(5127),h=c(3872),i=c(1940),j=c(585),k=c(722),l=c(4856),m=c(8162);function n(a){var b=a.children,c=(0,e.useRouter)(),n=c.query.id,o=c.back,p=(0,h.K)((0,f.IO)(i.W$,(0,f.ar)("username","==",n),(0,f.b9)(1)),{allowNull:!0}),q=p.data,r=p.loading,s=q?q[0]:null;return(0,d.jsxs)(g.fS,{value:{user:s,loading:r},children:[!s&&!r&&(0,d.jsx)(j.H,{title:"User not found / Twitter"}),(0,d.jsxs)(k.t,{children:[(0,d.jsx)(l.c,{useActionButton:!0,action:o,children:(0,d.jsx)(m.w,{})}),b]})]})}},2474:function(a,b,c){c.d(b,{w:function(){return $}});var d=c(6042),e=c(9396),f=c(5893),g=c(1163),h=c(3136),i=c(2108),j=c(5127),k=c(585),l=c(3040),m=c(4685),n=c(4664),o=c(9099),p=c(3644);function q(a){var b=a.coverData,c=(0,l.d)(),d=c.open,e=c.openModal,g=c.closeModal;return(0,f.jsxs)("div",{className:"mt-0.5 h-36 xs:h-48 sm:h-52",children:[(0,f.jsx)(o.u_,{open:d,closeModal:g,children:(0,f.jsx)(p.y,{imageData:b,previewCount:1})}),b?(0,f.jsx)(m.z,{className:"accent-tab relative h-full w-full rounded-none p-0 transition hover:brightness-75",onClick:e,children:(0,f.jsx)(n.o,{useSkeleton:!0,layout:"fill",imgClassName:"object-cover",src:b.src,alt:b.alt},b.src)}):(0,f.jsx)("div",{className:"h-full bg-light-line-reply dark:bg-dark-line-reply"})]})}function r(a){var b=a.profileData,c=(0,l.d)(),d=c.open,e=c.openModal,g=c.closeModal;return(0,f.jsxs)("div",{className:"mb-8 xs:mb-14 sm:mb-16",children:[(0,f.jsx)(o.u_,{open:d,closeModal:g,children:(0,f.jsx)(p.y,{imageData:{src:null==b?void 0:b.src,alt:null==b?void 0:b.alt},previewCount:1})}),(0,f.jsx)(m.z,{className:"accent-tab absolute -mt-3 aspect-square w-24 -translate-y-1/2 overflow-hidden p-0 disabled:cursor-auto disabled:opacity-100 xs:w-32 sm:w-36 [&:hover>figure>span]:brightness-75",onClick:e,disabled:!b,children:b?(0,f.jsx)(n.o,{useSkeleton:!0,className:"hover-animation relative h-full w-full bg-main-background inner:!m-1 inner:rounded-full inner:transition inner:duration-200",imgClassName:"rounded-full",src:b.src,alt:b.alt,layout:"fill"},b.src):(0,f.jsx)("div",{className:"h-full rounded-full bg-main-background p-1",children:(0,f.jsx)("div",{className:"h-full rounded-full bg-main-sidebar-background"})})})]})}var s=c(828),t=c(1944),u=c(4266),v=c(3276),w=c(4531),x=c(6154),y=c(7294),z=c(1664),A=c.n(z),B=c(5072);function C(a){var b=a.following,c=a.followers,d=b.length,e=c.length,h=(0,y.useState)({currentFollowing:d,currentFollowers:e}),i=h[0],j=i.currentFollowers,k=i.currentFollowing,l=h[1];(0,y.useEffect)(function(){l({currentFollowing:d,currentFollowers:e})},[d,e]);var m=(0,y.useMemo)(function(){return d>k?-25:25},[d]),n=(0,y.useMemo)(function(){return e>j?-25:25},[e]),o=(0,g.useRouter)(),p=o.query.id,q="/user/".concat(p),r=[["Following","".concat(q,"/following"),m,k],["Follower","".concat(q,"/followers"),n,j]];return(0,f.jsx)("div",{className:"flex gap-4 text-light-secondary dark:text-dark-secondary [&>a>div]:font-bold [&>a>div]:text-light-primary dark:[&>a>div]:text-dark-primary",children:r.map(function(a,b){var c=(0,s.Z)(a,4),d=c[0],e=c[1],g=c[2],h=c[3];return(0,f.jsx)(A(),{href:e,children:(0,f.jsxs)("a",{className:"hover-animation mt-0.5 mb-[3px] flex h-4 items-center gap-1 border-b border-b-transparent outline-none hover:border-b-light-primary focus-visible:border-b-light-primary dark:hover:border-b-dark-primary dark:focus-visible:border-b-dark-primary",children:[(0,f.jsx)(B.H,{move:g,stats:h,alwaysShowStats:!0}),(0,f.jsx)("p",{children:1===b&&h>1?"".concat(d,"s"):d})]})},d)})})}function D(a){var b=a.id,c=a.bio,d=a.name,e=a.website,g=a.username,h=a.location,i=a.verified,j=a.createdAt,k=a.following,l=a.followers,m=[[h,"MapPinIcon"],[e,"LinkIcon"],["Joined ".concat((0,t.p)(j,"joined")),"CalendarDaysIcon"]];return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)(w.v,{className:"-mb-1 text-xl",name:d,iconClassName:"w-6 h-6",verified:i}),(0,f.jsxs)("div",{className:"flex items-center gap-1 text-light-secondary dark:text-dark-secondary",children:[(0,f.jsxs)("p",{children:["@",g]}),(0,f.jsx)(x.y,{userTargetId:b})]})]}),(0,f.jsxs)("div",{className:"flex flex-col gap-2",children:[c&&(0,f.jsx)("p",{className:"whitespace-pre-line break-words",children:c}),(0,f.jsx)("div",{className:"flex flex-wrap gap-x-3 gap-y-1 text-light-secondary dark:text-dark-secondary",children:m.map(function(a,b){var c=(0,s.Z)(a,2),d=c[0],e=c[1];return d&&(0,f.jsxs)("div",{className:"flex items-center gap-1",children:[(0,f.jsx)("i",{children:(0,f.jsx)(u.e,{className:"h-5 w-5",iconName:e})}),1===b?(0,f.jsx)("a",{className:"custom-underline text-main-accent",href:"https://".concat(d),target:"_blank",rel:"noreferrer",children:d}):2===b?(0,f.jsxs)("button",{className:"custom-underline group relative",children:[d,(0,f.jsx)(v.e,{className:"translate-y-1",tip:(0,t.p)(j,"full")})]}):(0,f.jsx)("p",{children:d})]},e)})})]}),(0,f.jsx)(C,{following:k,followers:l})]})}var E=c(9186),F=c(9570),G=c(5122),H=c(8162),I=c(7568),J=c(4924),K=c(4051),L=c.n(K),M=c(6501),N=c(6010),O=c(7359),P=c(6269),Q=c(3521),R=c(4856);function S(a){var b=a.name,c=a.loading,d=a.photoURL,e=a.children,g=a.coverPhotoURL,h=a.inputNameError,i=a.editImage,j=a.closeModal,k=a.updateData,l=a.removeCoverImage,o=a.resetUserEditData,p=(0,y.useRef)(null),q=(0,y.useRef)(null),r=function(a){return function(){var b,c;"cover"===a?null===(b=p.current)|| void 0===b||b.click():null===(c=q.current)|| void 0===c||c.click()}};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(R.c,{useActionButton:!0,disableSticky:!0,iconName:"XMarkIcon",tip:"Close",className:"absolute flex w-full items-center gap-6 rounded-tl-2xl",title:"Edit profile",action:j,children:(0,f.jsxs)("div",{className:"ml-auto flex items-center gap-3",children:[(0,f.jsxs)(m.z,{className:"dark-bg-tab group relative p-2 hover:bg-light-primary/10 active:bg-light-primary/20 dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/10",onClick:o,disabled:c,children:[(0,f.jsx)(u.e,{className:"h-5 w-5",iconName:"ArrowPathIcon"}),(0,f.jsx)(v.e,{tip:"Reset"})]}),(0,f.jsx)(m.z,{className:"bg-light-primary py-1 px-4 font-bold text-white focus-visible:bg-light-primary/90 enabled:hover:bg-light-primary/90 enabled:active:bg-light-primary/80 disabled:brightness-75 dark:bg-light-border dark:text-light-primary dark:focus-visible:bg-light-border/90 dark:enabled:hover:bg-light-border/90 dark:enabled:active:bg-light-border/75",onClick:k,disabled:!!h,loading:c,children:"Save"})]})}),(0,f.jsxs)("section",{className:(0,N.Z)("h-full overflow-y-auto transition-opacity",c&&"pointer-events-none opacity-50"),children:[(0,f.jsxs)("div",{className:"group relative mt-[52px] h-36 xs:h-44 sm:h-48",children:[(0,f.jsx)("input",{className:"hidden",type:"file",accept:"image/*",ref:p,onChange:i("cover")}),g?(0,f.jsx)(n.o,{useSkeleton:!0,className:"relative h-full",imgClassName:"object-cover transition group-hover:brightness-75 duration-200 group-focus-within:brightness-75",src:g,alt:b,layout:"fill"}):(0,f.jsx)("div",{className:"h-full bg-light-line-reply dark:bg-dark-line-reply"}),(0,f.jsxs)("div",{className:"absolute left-1/2 top-1/2 flex -translate-y-1/2 -translate-x-1/2 gap-4",children:[(0,f.jsxs)(m.z,{className:"group/inner relative bg-light-primary/60 p-2 hover:bg-image-preview-hover/50 focus-visible:bg-image-preview-hover/50",onClick:r("cover"),children:[(0,f.jsx)(u.e,{className:"hover-animation h-6 w-6 text-dark-primary group-hover:text-white",iconName:"CameraIcon"}),(0,f.jsx)(v.e,{groupInner:!0,tip:"Add photo"})]}),g&&(0,f.jsxs)(m.z,{className:"group/inner relative bg-light-primary/60 p-2 hover:bg-image-preview-hover/50 focus-visible:bg-image-preview-hover/50",onClick:l,children:[(0,f.jsx)(u.e,{className:"hover-animation h-6 w-6 text-dark-primary group-hover:text-white",iconName:"XMarkIcon"}),(0,f.jsx)(v.e,{groupInner:!0,tip:"Remove photo"})]})]})]}),(0,f.jsxs)("div",{className:"relative flex flex-col gap-6 px-4 py-3",children:[(0,f.jsxs)("div",{className:"mb-8 xs:mb-12 sm:mb-14",children:[(0,f.jsx)("input",{className:"hidden",type:"file",accept:"image/*",ref:q,onChange:i("profile")}),(0,f.jsxs)("div",{className:"group absolute aspect-square w-24 -translate-y-1/2 overflow-hidden rounded-full xs:w-32 sm:w-36",children:[(0,f.jsx)(n.o,{useSkeleton:!0,className:"h-full w-full bg-main-background inner:!m-1 inner:rounded-full",imgClassName:"rounded-full transition group-hover:brightness-75 duration-200 group-focus-within:brightness-75",src:d,alt:b,layout:"fill"}),(0,f.jsxs)(m.z,{className:"group/inner absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-light-primary/60 p-2 hover:bg-image-preview-hover/50 focus-visible:bg-image-preview-hover/50",onClick:r("profile"),children:[(0,f.jsx)(u.e,{className:"hover-animation h-6 w-6 text-dark-primary group-hover:text-white",iconName:"CameraIcon"}),(0,f.jsx)(v.e,{groupInner:!0,tip:"Add photo"})]})]})]}),e,(0,f.jsxs)(m.z,{className:"accent-tab -mx-4 mb-4 flex cursor-not-allowed items-center justify-between rounded-none py-2 hover:bg-light-primary/10 active:bg-light-primary/20 disabled:brightness-100 dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20",children:[(0,f.jsx)("span",{className:"mx-2 text-xl",children:"Switch to professional"}),(0,f.jsx)("i",{children:(0,f.jsx)(u.e,{className:"h-6 w-6 text-light-secondary dark:text-dark-secondary",iconName:"ChevronRightIcon"})})]})]})]})]})}var T=c(2050);function U(a){var b,c=a.hide,g=(0,j.aF)().user,h=(0,l.d)(),i=h.open,k=h.openModal,n=h.closeModal,p=(0,y.useState)(!1),q=p[0],r=p[1],t=g.bio,u=g.name,v=g.website,w=g.location,x=g.photoURL,z=g.coverPhotoURL,A=(0,y.useState)({bio:t,name:u,website:v,photoURL:x,location:w,coverPhotoURL:z}),B=A[0],C=A[1],D=(0,y.useState)({photoURL:[],coverPhotoURL:[]}),E=D[0],F=D[1];(0,y.useEffect)(function(){return V},[]);var G,H=(null===(b=B.name)|| void 0===b?void 0:b.trim())?"":"Name can't be blank",K=(G=(0,I.Z)(L().mark(function a(){var b,c,f,h,i,j,k,l,m,o,p,q;return L().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return r(!0),b=null==g?void 0:g.id,c=E.photoURL,f=E.coverPhotoURL,a.t0=s.Z,a.next=6,Promise.all([c,f].map(function(a){return(0,O.eg)(b,a)}));case 6:return a.t1=a.sent,i=(h=(0,a.t0)(a.t1,2))[0],j=h[1],l=(0,d.Z)({coverPhotoURL:z===B.coverPhotoURL?z:null!==(k=null==j?void 0:j[0].src)&& void 0!==k?k:null},i&&{photoURL:i[0].src}),m=["name","bio","location","website"],p=m.reduce(function(a,b){var c;return(0,e.Z)((0,d.Z)({},a),(0,J.Z)({},b,null!==(o=null===(c=B[b])|| void 0===c?void 0:c.trim())&& void 0!==o?o:null))},{}),q=(0,d.Z)({},B,p,l),a.next=18,(0,P._v)(500);case 18:return a.next=20,(0,O.Al)(b,q);case 20:n(),V(),r(!1),C(q),M.Am.success("Profile updated successfully");case 25:case"end":return a.stop()}},a)})),function(){return G.apply(this,arguments)}),R=function(a){return function(b){var c=b.target.files,f=(0,Q.t6)(c);if(!f){M.Am.error("Please choose a valid GIF or Photo");return}var g=f.imagesPreviewData,h=f.selectedImagesData,i="cover"===a?"coverPhotoURL":"photoURL",j=g[0].src;C((0,e.Z)((0,d.Z)({},B),(0,J.Z)({},i,j))),F((0,e.Z)((0,d.Z)({},E),(0,J.Z)({},i,h)))}},U=function(){var a;C((0,e.Z)((0,d.Z)({},B),{coverPhotoURL:null})),F((0,e.Z)((0,d.Z)({},E),{coverPhotoURL:[]})),URL.revokeObjectURL(null!==(a=B.coverPhotoURL)&& void 0!==a?a:"")},V=function(){var a;["photoURL","coverPhotoURL"].forEach(function(b){return URL.revokeObjectURL(null!==(a=B[b])&& void 0!==a?a:"")}),F({photoURL:[],coverPhotoURL:[]})},W=function(){return C({bio:t,name:u,website:v,photoURL:x,location:w,coverPhotoURL:z})},X=function(a){var b=a.key,c=a.target,d=a.ctrlKey;d&&"Enter"===b&&!H&&(c.blur(),K())},Y=[{label:"Name",inputId:"name",inputValue:B.name,inputLimit:50,errorMessage:H},{label:"Bio",inputId:"bio",inputValue:B.bio,inputLimit:160,useTextArea:!0},{label:"Location",inputId:"location",inputValue:B.location,inputLimit:30},{label:"Website",inputId:"website",inputValue:B.website,inputLimit:100}];return(0,f.jsxs)("form",{className:(0,N.Z)(c&&"hidden md:block"),children:[(0,f.jsx)(o.u_,{modalClassName:"relative bg-main-background rounded-2xl max-w-xl w-full h-[672px] overflow-hidden",open:i,closeModal:n,children:(0,f.jsx)(S,{name:u,loading:q,photoURL:B.photoURL,coverPhotoURL:B.coverPhotoURL,inputNameError:H,editImage:R,closeModal:n,updateData:K,removeCoverImage:U,resetUserEditData:W,children:Y.map(function(a){var b;return(0,y.createElement)(T.U,(0,e.Z)((0,d.Z)({},a),{handleChange:(b=a.inputId,function(a){var c=a.target.value;return C((0,e.Z)((0,d.Z)({},B),(0,J.Z)({},b,c)))}),handleKeyboardShortcut:X,key:a.inputId}))})})}),(0,f.jsx)(m.z,{className:"dark-bg-tab self-start border border-light-line-reply px-4 py-1.5 font-bold hover:bg-light-primary/10 active:bg-light-primary/20 dark:border-light-secondary dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20",onClick:k,children:"Edit profile"})]})}var V=c(6215),W=c(5820),X=c(1923),Y=c(44);function Z(a){var b=a.username;return(0,f.jsx)(V.J,{className:"relative",children:function(a){var c,g=a.open,i=a.close;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(V.J.Button,{as:m.z,className:(0,N.Z)("dark-bg-tab group relative border border-light-line-reply p-2\n               hover:bg-light-primary/10 active:bg-light-primary/20 dark:border-light-secondary\n               dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20",g&&"bg-light-primary/10 dark:bg-dark-primary/10"),children:[(0,f.jsx)(u.e,{className:"h-5 w-5",iconName:"EllipsisHorizontalIcon"}),!g&&(0,f.jsx)(v.e,{tip:"More"})]}),(0,f.jsx)(W.M,{children:g&&(0,f.jsx)(V.J.Panel,(0,e.Z)((0,d.Z)({className:"menu-container group absolute right-0 top-11 whitespace-nowrap text-light-primary dark:text-dark-primary",as:h.E.div},Y.o),{static:!0,children:(0,f.jsxs)(V.J.Button,{className:"flex w-full gap-3 rounded-md rounded-b-none p-4 hover:bg-main-sidebar-background",as:m.z,onClick:(0,P.Db)((c=i,(0,I.Z)(L().mark(function a(){return L().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c(),a.next=3,navigator.clipboard.writeText("".concat(X.f7,"/user/").concat(b));case 3:M.Am.success("Copied to clipboard");case 4:case"end":return a.stop()}},a)})))),children:[(0,f.jsx)(u.e,{iconName:"LinkIcon"}),"Copy link to Profile"]})}))})]})}})}function $(a){var b=a.children,c=(0,i.aC)(),l=c.user,n=c.isAdmin,o=(0,j.aF)(),p=o.user,s=o.loading,t=(0,g.useRouter)().query.id,w=(null==p?void 0:p.coverPhotoURL)?{src:p.coverPhotoURL,alt:p.name}:null,x=p?{src:p.photoURL,alt:p.name}:null,y=(null!=l?l:{}).id,z=(null==p?void 0:p.id)===y;return(0,f.jsxs)(f.Fragment,{children:[p&&(0,f.jsx)(k.H,{title:"".concat("".concat(p.name," (@").concat(p.username,")")," / Twitter")}),(0,f.jsx)(h.E.section,(0,e.Z)((0,d.Z)({},H.o),{exit:void 0,children:s?(0,f.jsx)(F.g,{className:"mt-5"}):p?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(q,{coverData:w}),(0,f.jsxs)("div",{className:"relative flex flex-col gap-3 px-4 py-3",children:[(0,f.jsxs)("div",{className:"flex justify-between",children:[(0,f.jsx)(r,{profileData:x}),z?(0,f.jsx)(U,{}):(0,f.jsxs)("div",{className:"flex gap-2 self-start",children:[(0,f.jsx)(Z,{username:p.username}),(0,f.jsxs)(m.z,{className:"dark-bg-tab group relative cursor-not-allowed border border-light-line-reply p-2 hover:bg-light-primary/10 active:bg-light-primary/20 dark:border-light-secondary dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20",children:[(0,f.jsx)(u.e,{className:"h-5 w-5",iconName:"EnvelopeIcon"}),(0,f.jsx)(v.e,{tip:"Message"})]}),(0,f.jsx)(G.e,{userTargetId:p.id,userTargetUsername:p.username}),n&&(0,f.jsx)(U,{hide:!0})]})]}),(0,f.jsx)(D,(0,d.Z)({},p))]})]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(q,{}),(0,f.jsxs)("div",{className:"flex flex-col gap-8",children:[(0,f.jsxs)("div",{className:"relative flex flex-col gap-3 px-4 py-3",children:[(0,f.jsx)(r,{}),(0,f.jsxs)("p",{className:"text-xl font-bold",children:["@",t]})]}),(0,f.jsxs)("div",{className:"p-8 text-center",children:[(0,f.jsx)("p",{className:"text-3xl font-bold",children:"This account doesn’t exist"}),(0,f.jsx)("p",{className:"text-light-secondary dark:text-dark-secondary",children:"Try searching for another."})]})]})]})})),p&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(E.T,{}),b]})]})}},9186:function(a,b,c){c.d(b,{T:function(){return o}});var d=c(6042),e=c(9396),f=c(5893),g=c(3136),h=c(6010),i=c(8162),j=c(1163),k=c(1664),l=c.n(k);function m(a){var b=a.name,c=a.path,d=(0,j.useRouter)(),e=d.asPath,g=d.query.id,i="/user/".concat(g).concat(c?"/".concat(c):"");return(0,f.jsx)(l(),{href:i,scroll:!1,children:(0,f.jsx)("a",{className:"hover-animation main-tab dark-bg-tab flex flex-1 justify-center hover:bg-light-primary/10 dark:hover:bg-dark-primary/10",children:(0,f.jsx)("div",{className:"px-6 md:px-8",children:(0,f.jsxs)("p",{className:(0,h.Z)("flex flex-col gap-3 whitespace-nowrap pt-3 font-bold transition-colors duration-200",e===i?"text-light-primary dark:text-dark-primary [&>i]:scale-100 [&>i]:opacity-100":"text-light-secondary dark:text-dark-secondary"),children:[b,(0,f.jsx)("i",{className:"h-1 scale-50 rounded-full bg-main-accent opacity-0 transition duration-200"})]})})})})}var n=[[{name:"Tweets",path:""},{name:"Tweets & replies",path:"with_replies"},{name:"Media",path:"media"},{name:"Likes",path:"likes"}],[{name:"Following",path:"following"},{name:"Followers",path:"followers"}]];function o(a){var b=a.follow,c=n[+!!b];return(0,f.jsx)(g.E.nav,(0,e.Z)((0,d.Z)({className:(0,h.Z)("hover-animation flex justify-between overflow-y-auto\n         border-b border-light-border dark:border-dark-border",b&&"mt-1 mb-0.5")},i.o),{exit:void 0,children:c.map(function(a){var b=a.name,c=a.path;return(0,f.jsx)(m,{name:b,path:c},b)})}))}}}])