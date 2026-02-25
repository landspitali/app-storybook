import{j as e,V as p}from"./iframe-B-hEVdgV.js";import{N as a}from"./NotificationBadgeWrapper-j6YzXRnC.js";import{F as i}from"./FontAwesome-ezXvgRMU.js";import"./preload-helper-Zf8nSx-t.js";import"./useColors-Bqk5IObG.js";import"./css.generated-BbmyNoiE.js";const g={title:"Commons/Components/NotificationBadgeWrapper",component:a,decorators:[o=>e.jsx(p,{style:{flex:1,justifyContent:"flex-start",alignItems:"center",paddingTop:100},children:e.jsx(o,{})})],argTypes:{show:{control:"boolean",defaultValue:!0},size:{control:{type:"number",min:8,max:32},defaultValue:24},position:{control:"object",defaultValue:{top:-4,left:20}}}},r={args:{size:24,show:!0,position:{top:-4,left:20}},render:({show:o,position:t,size:s})=>e.jsx(a,{show:o,position:t,children:e.jsx(i,{name:"bell",size:s,color:"#1e90ff",variant:"regular"})})},n={args:{size:24,show:!1,position:{top:-4,left:20}},render:({show:o,position:t,size:s})=>e.jsx(a,{show:o,position:t,children:e.jsx(i,{name:"bell",size:s,color:"#1e90ff",variant:"regular"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const w=["Show","Hidden"];export{n as Hidden,r as Show,w as __namedExportsOrder,g as default};
