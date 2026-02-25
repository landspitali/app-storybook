import{j as o,v as i,V as m}from"./iframe-BQwTaADa.js";import{u}from"./useColors-TdzNx-1W.js";import{F as p}from"./FontAwesome-G9WyAUdy.js";import"./preload-helper-Zf8nSx-t.js";import"./css.generated-BbmyNoiE.js";const s=({show:r,position:e={top:-4,left:20},size:t=8,children:l})=>{const d=u();return o.jsxs(i,{children:[r&&o.jsx(i,{position:"absolute",top:e.top,left:e.left,right:e.right,bottom:e.bottom,flexDirection:"row",alignItems:"center",justifyContent:"center",width:t,height:t,margin:"none",padding:"none",borderRadius:t,style:{backgroundColor:d.bottomNavbarBottomNavAlertDot}}),l]})};s.__docgenInfo={description:"",methods:[],displayName:"NotificationBadgeWrapper",props:{show:{required:!0,tsType:{name:"boolean"},description:""},position:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}`,signature:{properties:[{key:"top",value:{name:"number",required:!1}},{key:"left",value:{name:"number",required:!1}},{key:"right",value:{name:"number",required:!1}},{key:"bottom",value:{name:"number",required:!1}}]}},description:"",defaultValue:{value:`{
  top: -4,
  left: 20
}`,computed:!1}},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const w={title:"Commons/Components/NotificationBadgeWrapper",component:s,decorators:[r=>o.jsx(m,{style:{flex:1,justifyContent:"flex-start",alignItems:"center",paddingTop:100},children:o.jsx(r,{})})],argTypes:{show:{control:"boolean",defaultValue:!0},size:{control:{type:"number",min:8,max:32},defaultValue:24},position:{control:"object",defaultValue:{top:-4,left:20}}}},n={args:{size:24,show:!0,position:{top:-4,left:20}},render:({show:r,position:e,size:t})=>o.jsx(s,{show:r,position:e,children:o.jsx(p,{name:"bell",size:t,color:"#1e90ff",variant:"regular"})})},a={args:{size:24,show:!1,position:{top:-4,left:20}},render:({show:r,position:e,size:t})=>o.jsx(s,{show:r,position:e,children:o.jsx(p,{name:"bell",size:t,color:"#1e90ff",variant:"regular"})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const x=["Show","Hidden"];export{a as Hidden,n as Show,x as __namedExportsOrder,w as default};
