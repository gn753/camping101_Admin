(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[233],{6083:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/userInfo",function(){return n(7838)}])},7907:function(e,t,n){"use strict";n.d(t,{r:function(){return i}});var r=n(6154);let i=r.Z.create({headers:{"Content-Type":"application/json"}});i.defaults.withCredentials=!0,i.interceptors.request.use(function(e){let t=localStorage.getItem("jwt");if(!t)return e.headers.Authorization=null,e;if(e.data){let{access_token:n}=JSON.parse(t);return e.headers.Authorization=n,e}let{access_token:n,refresh_token:r}=JSON.parse(t);return e.headers.Authorization=n,e}),i.interceptors.response.use(function(e){return e},async function(e){if(403===e.response.status){let t=null;try{t=localStorage.getItem("jwt");let n=e.config,{refresh_token:r}=JSON.parse(t);r||localStorage.removeItem("jwt");let l=await i.post("/api/signin/refresh",r,{headers:{"Content-Type":"application/json"}});if(l){let{access_token:e}=l.data;return n.headers.Authorization=e,localStorage.setItem("jwt",JSON.stringify({access_token:e})),await i.request(n)}}catch(e){console.log("실행 리플레쉬 실패함요")}}return Promise.reject(e)})},4069:function(e,t,n){"use strict";n.d(t,{Em:function(){return l},SY:function(){return a}});var r=n(7907),i=n(4480);(0,i.cn)({key:"isLogin",default:!0});let l=(0,i.cn)({key:"userData",default:""}),a=(0,i.nZ)({key:"postingId",get:async()=>{let e=await r.r.get("/api/member",{headers:{"Content-Type":"application/json"}});return e.data}})},4405:function(e,t,n){"use strict";var r=n(7297),i=n(5944),l=n(6829);function a(){let e=(0,r.Z)(["\n  width: 100%;\n  height: 30px;\n  background-color: #f2f2f2;\n  position: relative;\n  overflow: hidden;\n  border-radius: 4px;\n\n  @keyframes skeleton-gradient {\n    0% {\n      background-color: rgba(165, 165, 165, 0.1);\n    }\n    50% {\n      background-color: rgba(165, 165, 165, 0.3);\n    }\n    100% {\n      background-color: rgba(165, 165, 165, 0.1);\n    }\n  }\n\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0px;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    animation: skeleton-gradient 1.5s infinite ease-in-out;\n  }\n"]);return a=function(){return e},e}function o(){let e=(0,r.Z)([""]);return o=function(){return e},e}function c(){let e=(0,r.Z)([""]);return c=function(){return e},e}function d(){let e=(0,r.Z)(["\n  margin: 10px 0;\n"]);return d=function(){return e},e}function u(){let e=(0,r.Z)(["\n  height: 130px;\n"]);return u=function(){return e},e}function s(){let e=(0,r.Z)(["\n  display: flex;\n  gap: 12px;\n"]);return s=function(){return e},e}function Z(){let e=(0,r.Z)(["\n  width: 35px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: #f2f2f2;\n  position: relative;\n  top: 10px;\n  overflow: hidden;\n"]);return Z=function(){return e},e}let h=()=>(0,i.tZ)(p,{children:(0,i.BX)(f,{children:[(0,i.tZ)(g,{}),(0,i.BX)(S,{children:[(0,i.tZ)(y,{}),(0,i.tZ)(g,{})]}),(0,i.tZ)(b,{})]},1)}),m=l.Z.div(a()),p=l.Z.ul(o()),f=l.Z.li(c()),g=(0,l.Z)(m)(d()),b=(0,l.Z)(m)(u()),S=l.Z.div(s()),y=(0,l.Z)(m)(Z());t.Z=h},7838:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var r=n(7297),i=n(5944),l=n(6829),a=n(92),o=n(1230),c=n(1577),d=n(7907),u=n(381),s=n.n(u),Z=n(7294),h=n(2186),m=n(6981),p=n(9899),f=n(442),g=n(7790),b=n(9014),S=n(5746);function y(){let e=(0,r.Z)(["\n  margin-top: 20px;\n  width: 200px;\n  height: auto;\n"]);return y=function(){return e},e}let{Option:I}=h.Z,{TabPane:w}=m.Z,{Column:v}=a.Z,{TextArea:k}=p.Z;function x(e){let{modalData:t,setModalData:n}=e,[r]=f.Z.useForm(),[l,a]=(0,Z.useState)({...t.data});console.log(l);let c=localStorage.getItem("jwt"),{access_token:u,refresh_token:m}=JSON.parse(c);console.log(u);let y=async()=>{let e=r.getFieldValue("memberStatus");console.log(e,"memberStatus");let t=l.memberId;console.log(t,"memberId");try{let r="api/admin/member?memberId=".concat(t,"&memberStatus=").concat(e);await d.r.put(r,{memberStatus:e},{headers:{Authorization:u,"Content-Type":"application/json"}}),n({visible:!1,data:{}})}catch(e){g.ZP.error(e)}};return(0,i.tZ)(b.Z,{title:"상세정보",open:!0,closable:!1,maskClosable:!1,width:"80%",style:{top:25,bottom:25},onCancel:()=>{n({visible:!1,data:{}})},onOk:()=>y(),children:(0,i.BX)(f.Z,{form:r,layout:"vertical",labelAlign:"left",style:{textAlign:"left"},initialValues:l,children:[(0,i.BX)(o.Z,{children:[(0,i.tZ)(S.Z,{span:11,children:(0,i.tZ)(f.Z.Item,{label:"memberId",required:!0,tooltip:"memberId",name:["memberId"].toString(),children:(0,i.tZ)(p.Z,{placeholder:"memberId 입력해주세요",readOnly:!0})})}),(0,i.tZ)(S.Z,{span:11,offset:2,children:(0,i.tZ)(f.Z.Item,{label:"생성 일자",required:!0,tooltip:"생성 날짜 입니다",children:(0,i.tZ)(p.Z,{placeholder:"생성일자 입력해주세요",readOnly:!0,value:s()(l.createdAt).format("YYYY-MM-DD").toString()})})})]}),(0,i.BX)(o.Z,{children:[(0,i.tZ)(S.Z,{span:11,children:(0,i.tZ)(f.Z.Item,{label:"닉네임",required:!0,tooltip:"닉네임를 입력해주세요",name:["nickname"].toString(),children:(0,i.tZ)(p.Z,{placeholder:"닉네임를 입력해주세요",readOnly:!0})})}),(0,i.tZ)(S.Z,{span:11,offset:2,children:(0,i.tZ)(f.Z.Item,{label:"이메일",required:!0,tooltip:"이메일 입니다",name:["email"].toString(),children:(0,i.tZ)(p.Z,{placeholder:"이메일을 입력해주세요",readOnly:!0})})})]}),(0,i.BX)(o.Z,{children:[(0,i.tZ)(S.Z,{span:11,children:(0,i.tZ)(f.Z.Item,{label:"타입",required:!0,tooltip:"멤버 타입 입력해주세요",name:["memberType"].toString(),children:(0,i.tZ)(p.Z,{placeholder:"memberType",readOnly:!0})})}),(0,i.tZ)(S.Z,{span:11,offset:2,children:(0,i.tZ)(f.Z.Item,{label:"핸드폰번호",required:!0,tooltip:"핸드폰 입니다",name:["phoneNumber"].toString(),children:(0,i.tZ)(p.Z,{placeholder:"핸드폰 번호를 입력해주세요",readOnly:!0})})})]}),(0,i.tZ)(o.Z,{children:(0,i.tZ)(S.Z,{span:12,children:(0,i.tZ)(f.Z.Item,{label:"회원 상태",required:!0,tooltip:"회원 상태 입니다",name:["memberStatus"].toString(),children:(0,i.BX)(h.Z,{children:[(0,i.tZ)(I,{value:"NOT_ACTIVATED",children:"NOT_ACTIVATED"}),(0,i.tZ)(I,{value:"IN_USE",children:"IN_USE"}),(0,i.tZ)(I,{value:"STOPPED",children:"STOPPED"}),(0,i.tZ)(I,{value:"WITHDRAW",children:"WITHDRAW"})]})})})}),(0,i.tZ)(o.Z,{children:(0,i.tZ)(S.Z,{span:24,children:(0,i.tZ)("div",{children:"프로필 사진"})})})]})})}l.Z.img(y());var T=n(4405),O=n(4480),C=n(4069);function N(){let e=(0,r.Z)(["\n  font-weight: ",";\n  font-size: ",";\n  cursor: pointer;\n"]);return N=function(){return e},e}let{Column:Y}=a.Z;function _(){let e=(0,O.sJ)(C.SY),t=(0,O.C)(C.SY);console.log(e,"jwt");let[n,r]=(0,Z.useState)("일반"),[l,u]=(0,Z.useState)([]),[h,m]=(0,Z.useState)({visible:!1,data:{}}),[p,f]=(0,Z.useState)([]),[g,b]=(0,Z.useState)(!1),S=(0,Z.useCallback)(async()=>{console.log("호출");try{let e=await d.r.get("api/admin/member?memberType=".concat("일반"===n?"CUSTOMER":"OWNER"));f(e.data.content),b(!0)}catch(e){console.log(e,"옴?")}},[n]);return(0,Z.useEffect)(()=>{S(),e||(t(),console.log("도달"))},[h,n,S,e,t]),(0,i.BX)(i.HY,{children:[!g&&(0,i.tZ)(T.Z,{}),g&&(0,i.BX)(i.HY,{children:[h.visible&&(0,i.tZ)(i.HY,{children:(0,i.tZ)(x,{modalData:h,setModalData:m})}),(0,i.BX)(o.Z,{justify:"start",style:{marginBottom:16},children:[(0,i.tZ)(A,{selected:n.includes("일반"),onClick:e=>r(e.target.innerText),children:"일반"}),"\xa0 / \xa0",(0,i.tZ)(A,{selected:n.includes("주인"),onClick:e=>r(e.target.innerText),children:"주인"})]}),(0,i.BX)(a.Z,{style:{marginBottom:100},rowKey:e=>e.memberId,dataSource:p,rowSelection:{},pagination:{hideOnSinglePage:!0},children:[(0,i.tZ)(Y,{title:"생성일자",dataIndex:"createdAt",render:e=>(0,i.tZ)(i.HY,{children:s()(e).format("YYYY-MM-DD")})}),(0,i.tZ)(Y,{title:"분류",dataIndex:"memberType"}),(0,i.tZ)(Y,{title:"이메일",dataIndex:"email"}),(0,i.tZ)(Y,{title:"닉네임",dataIndex:"nickname"}),(0,i.tZ)(Y,{title:"핸드폰",dataIndex:"phoneNumber"}),(0,i.tZ)(Y,{title:"상태",dataIndex:"memberStatus"}),(0,i.tZ)(Y,{title:()=>(0,i.tZ)(i.HY,{}),width:"7%",align:"center",render:(e,t)=>(0,i.tZ)(i.HY,{children:(0,i.tZ)(c.ZP,{size:"small",type:"ghost",onClick:()=>m({visible:!0,data:t}),children:"더보기"})})},"")]})]})]})}let A=l.Z.div(N(),e=>e.selected?"700":"400",e=>e.selected?"16":"14")}},function(e){e.O(0,[885,324,343,790,774,888,179],function(){return e(e.s=6083)}),_N_E=e.O()}]);