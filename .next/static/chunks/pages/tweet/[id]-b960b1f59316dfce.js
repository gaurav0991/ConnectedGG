(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[925],{6332:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tweet/[id]",function(){return c(1052)}])},1052:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return P}});var d=c(6042),e=c(9396),f=c(5893),g=c(7294),h=c(1163),i=c(5820),j=c(5321),k=c(1940),l=c(3872),m=c(5662),n=c(6269),o=c(9806),p=c(8244),q=c(722),r=c(4856),s=c(5053),t=c(1664),u=c.n(t),v=c(3136),w=c(6010),x=c(2108),y=c(3040),z=c(9099),A=c(2706),B=c(1400),C=c(1708),D=c(7391),E=c(4531),F=c(7876),G=c(44),H=c(4851),I=c(581),J=c(9557);function K(a){var b=a.id,c=a.text,g=a.images,h=a.parent,i=a.userLikes,j=a.createdBy,k=a.createdAt,l=a.userRetweets,m=a.userReplies,n=a.viewTweetRef,o=a.user,p=o.id,q=o.name,r=o.username,t=o.verified,K=o.photoURL,L=(0,x.aC)().user,M=(0,y.d)(),N=M.open,O=M.openModal,P=M.closeModal,Q="/tweet/".concat(b),R=null==L?void 0:L.id,S=R===j,T=!!h,U=null!=h?h:{},V=U.id,W=U.username,X=void 0===W?r:W;return(0,f.jsxs)(v.E.article,(0,e.Z)((0,d.Z)({className:(0,w.Z)("accent-tab h- relative flex cursor-default flex-col gap-3 border-b\n         border-light-border px-4 py-3 outline-none dark:border-dark-border",T&&"scroll-m-[3.25rem] pt-0")},s.o),{animate:(0,e.Z)((0,d.Z)({},s.o.animate),{transition:{duration:.2}}),exit:void 0,ref:n,children:[(0,f.jsx)(z.u_,{className:"flex items-start justify-center",modalClassName:"bg-main-background rounded-2xl max-w-xl w-full mt-8 overflow-hidden",open:N,closeModal:P,children:(0,f.jsx)(A.h,{tweet:a,closeModal:P})}),(0,f.jsxs)("div",{className:"flex flex-col gap-2",children:[T&&(0,f.jsx)("div",{className:"flex w-12 items-center justify-center",children:(0,f.jsx)("i",{className:"hover-animation h-2 w-0.5 bg-light-line-reply dark:bg-dark-line-reply"})}),(0,f.jsxs)("div",{className:"grid grid-cols-[auto,1fr] gap-3",children:[(0,f.jsx)(D.Y,(0,e.Z)((0,d.Z)({avatar:!0},o),{children:(0,f.jsx)(C.Y,{src:K,alt:q,username:r})})),(0,f.jsxs)("div",{className:"flex min-w-0 justify-between",children:[(0,f.jsxs)("div",{className:"flex flex-col truncate xs:overflow-visible xs:whitespace-normal",children:[(0,f.jsx)(D.Y,(0,e.Z)((0,d.Z)({},o),{children:(0,f.jsx)(E.v,{className:"-mb-1",name:q,username:r,verified:t})})),(0,f.jsx)(D.Y,(0,e.Z)((0,d.Z)({},o),{children:(0,f.jsx)(F.a,{username:r})}))]}),(0,f.jsx)("div",{className:"px-4",children:(0,f.jsx)(G.r,{viewTweet:!0,isOwner:S,ownerId:p,tweetId:b,parentId:V,username:r,hasImages:!!g,createdBy:j})})]})]})]}),T&&(0,f.jsxs)("p",{className:"text-light-secondary dark:text-dark-secondary",children:["Replying to"," ",(0,f.jsx)(u(),{href:"/user/".concat(X),children:(0,f.jsxs)("a",{className:"custom-underline text-main-accent",children:["@",X]})})]}),(0,f.jsxs)("div",{children:[c&&(0,f.jsx)("p",{className:"whitespace-pre-line break-words text-2xl",children:c}),g&&(0,f.jsx)(B.e,{viewTweet:!0,imagesPreview:g,previewCount:g.length}),(0,f.jsxs)("div",{className:"inner:hover-animation inner:border-b inner:border-light-border dark:inner:border-dark-border",children:[(0,f.jsx)(I.C,{viewTweet:!0,tweetLink:Q,createdAt:k}),(0,f.jsx)(H.b,{viewTweet:!0,reply:T,userId:R,isOwner:S,tweetId:b,userLikes:i,userRetweets:l,userReplies:m,openModal:O})]}),(0,f.jsx)(J.I,{reply:!0,parent:{id:b,username:r}})]})]}))}var L=c(585),M=c(9570),N=c(6028);function O(a){var b=a.parentId,c=a.viewTweetRef,e=(0,m.k)((0,j.JU)(k.VV,b),{includeUser:!0,allowNull:!0}),h=e.data,i=e.loading;return((0,g.useEffect)(function(){var a;i||null===(a=c.current)|| void 0===a||a.scrollIntoView()},[null==h?void 0:h.id,i]),i)?null:h?(0,f.jsx)(s.t,(0,d.Z)({parentTweet:!0},h)):(0,f.jsx)("div",{className:"px-4 pt-3 pb-2",children:(0,f.jsxs)("p",{className:"rounded-2xl bg-main-sidebar-background py-3 px-1 pl-4 text-light-secondary dark:text-dark-secondary",children:["This Tweet was deleted by the Tweet author."," ",(0,f.jsx)("a",{className:"custom-underline text-main-accent",href:"https://help.twitter.com/rules-and-policies/notices-on-twitter",target:"_blank",rel:"noreferrer",children:"Learn more"})]})})}function P(){var a,b,c=(0,h.useRouter)(),o=c.query.id,p=c.back,t=(0,m.k)((0,j.JU)(k.VV,o),{includeUser:!0,allowNull:!0}),u=t.data,v=t.loading,w=(0,g.useRef)(null),x=(0,l.K)((0,j.IO)(k.VV,(0,j.ar)("parent.id","==",o),(0,j.Xo)("createdAt","desc")),{includeUser:!0,allowNull:!0}),y=x.data,z=x.loading,A=null!=u?u:{},B=A.text,C=A.images,D=null!==(b=null==C?void 0:C.length)&& void 0!==b?b:0,E=null==u?void 0:null===(a=u.parent)|| void 0===a?void 0:a.id,F=u?"".concat(u.user.name,' on Twitter: "').concat(null!=B?B:"").concat(C?" (".concat(D," image").concat((0,n.uz)(D),")"):"",'" / Twitter'):null;return(0,f.jsxs)(q.t,{className:"!pb-[1280px]",children:[(0,f.jsx)(r.c,{useActionButton:!0,title:E?"Thread":"Tweet",action:p}),(0,f.jsx)("section",{children:v?(0,f.jsx)(M.g,{className:"mt-5"}):u?(0,f.jsxs)(f.Fragment,{children:[F&&(0,f.jsx)(L.H,{title:F}),E&&(0,f.jsx)(O,{parentId:E,viewTweetRef:w}),(0,f.jsx)(K,(0,d.Z)({viewTweetRef:w},u)),u&&(z?(0,f.jsx)(M.g,{className:"mt-5"}):(0,f.jsx)(i.M,{mode:"popLayout",children:null==y?void 0:y.map(function(a){return(0,g.createElement)(s.t,(0,e.Z)((0,d.Z)({},a),{key:a.id}))})}))]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(L.H,{title:"Tweet not found / Twitter"}),(0,f.jsx)(N.j,{message:"Tweet not found"})]})})]})}P.getLayout=function(a){return(0,f.jsx)(o.IP,{children:(0,f.jsx)(p.Z,{children:(0,f.jsx)(o.Os,{children:a})})})}}},function(a){a.O(0,[493,667,465,774,888,179],function(){var b;return a(a.s=6332)}),_N_E=a.O()}])