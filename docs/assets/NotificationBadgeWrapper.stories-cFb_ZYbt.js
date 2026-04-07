import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{r as n}from"./client-CWOoj4ER.js";import{M as r,c as i,t as a}from"./jsx-runtime-D3nZEPZm.js";import{i as o,t as s}from"./theme-Cr_InoL-.js";import{n as c,t as l}from"./useColors-BPFFy23u.js";import{n as u,t as d}from"./FontAwesome-BgXq5w0K.js";var f,p,m=e((()=>{n(),o(),l(),f=a(),p=({show:e,position:t={top:-4,left:20},size:n=8,children:r})=>{let i=c();return(0,f.jsxs)(s,{children:[e&&(0,f.jsx)(s,{position:`absolute`,top:t.top,left:t.left,right:t.right,bottom:t.bottom,flexDirection:`row`,alignItems:`center`,justifyContent:`center`,width:n,height:n,margin:`none`,padding:`none`,borderRadius:n,style:{backgroundColor:i.bottomNavbarBottomNavAlertDot}}),r]})},p.__docgenInfo={description:``,methods:[],displayName:`NotificationBadgeWrapper`,props:{show:{required:!0,tsType:{name:`boolean`},description:``},position:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}`,signature:{properties:[{key:`top`,value:{name:`number`,required:!1}},{key:`left`,value:{name:`number`,required:!1}},{key:`right`,value:{name:`number`,required:!1}},{key:`bottom`,value:{name:`number`,required:!1}}]}},description:``,defaultValue:{value:`{
  top: -4,
  left: 20
}`,computed:!1}},size:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`8`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:``}}}})),h,g,_,v,y;e((()=>{n(),i(),m(),u(),h=a(),g={title:`Commons/Components/NotificationBadgeWrapper`,component:p,decorators:[e=>(0,h.jsx)(r,{style:{flex:1,justifyContent:`flex-start`,alignItems:`center`,paddingTop:100},children:(0,h.jsx)(e,{})})],argTypes:{show:{control:`boolean`,defaultValue:!0},size:{control:{type:`number`,min:8,max:32},defaultValue:24},position:{control:`object`,defaultValue:{top:-4,left:20}}}},_={args:{size:24,show:!0,position:{top:-4,left:20}},render:({show:e,position:t,size:n})=>(0,h.jsx)(p,{show:e,position:t,children:(0,h.jsx)(d,{name:`bell`,size:n,color:`#1e90ff`,variant:`regular`})})},v={args:{size:24,show:!1,position:{top:-4,left:20}},render:({show:e,position:t,size:n})=>(0,h.jsx)(p,{show:e,position:t,children:(0,h.jsx)(d,{name:`bell`,size:n,color:`#1e90ff`,variant:`regular`})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    size: 24,
    show: true,
    position: {
      top: -4,
      left: 20
    }
  },
  render: ({
    show,
    position,
    size
  }: NotificationBadgeWrapperProps) => <NotificationBadgeWrapper show={show} position={position}>
      <FontAwesome name='bell' size={size} color='#1e90ff' variant='regular' />
    </NotificationBadgeWrapper>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: 24,
    show: false,
    position: {
      top: -4,
      left: 20
    }
  },
  render: ({
    show,
    position,
    size
  }: NotificationBadgeWrapperProps) => <NotificationBadgeWrapper show={show} position={position}>
      <FontAwesome name='bell' size={size} color='#1e90ff' variant='regular' />
    </NotificationBadgeWrapper>
}`,...v.parameters?.docs?.source}}},y=[`Show`,`Hidden`]}))();export{v as Hidden,_ as Show,y as __namedExportsOrder,g as default};