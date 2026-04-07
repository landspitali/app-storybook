import{R as i,j as t,V as o}from"./iframe-CVORTbkl.js";import{S as n}from"./SwitchToggle-Nia7f0u3.js";import"./preload-helper-Zf8nSx-t.js";import"./useColors-BlZyYDc7.js";import"./css.generated-BbmyNoiE.js";const p={title:"Commons/Components/SwitchToggle",component:n,decorators:[s=>t.jsx(o,{style:{flex:1,justifyContent:"center",alignItems:"center"},children:t.jsx(o,{style:{bottom:"30%"},children:t.jsx(s,{})})})],argTypes:{isEnabled:{control:"boolean"}}},e={args:{isEnabled:!0},render:()=>{const[s,r]=i.useState(!0),a=()=>r(l=>!l);return t.jsx(n,{onValueChange:a,isEnabled:s})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    isEnabled: true
  },
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isEnabled, setIsEnabled] = React.useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return <SwitchToggle onValueChange={toggleSwitch} isEnabled={isEnabled} />;
  }
}`,...e.parameters?.docs?.source}}};const b=["Toggle"];export{e as Toggle,b as __namedExportsOrder,p as default};
