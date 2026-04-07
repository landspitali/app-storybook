import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{r as n}from"./client-CWOoj4ER.js";import{M as r,c as i,t as a}from"./jsx-runtime-D3nZEPZm.js";import{n as o,t as s}from"./SwitchToggle-CRBLBMEn.js";var c,l,u,d,f;e((()=>{c=t(n()),i(),o(),l=a(),u={title:`Commons/Components/SwitchToggle`,component:s,decorators:[e=>(0,l.jsx)(r,{style:{flex:1,justifyContent:`center`,alignItems:`center`},children:(0,l.jsx)(r,{style:{bottom:`30%`},children:(0,l.jsx)(e,{})})})],argTypes:{isEnabled:{control:`boolean`}}},d={args:{isEnabled:!0},render:()=>{let[e,t]=c.useState(!0);return(0,l.jsx)(s,{onValueChange:()=>t(e=>!e),isEnabled:e})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    isEnabled: true
  },
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isEnabled, setIsEnabled] = React.useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return <SwitchToggle onValueChange={toggleSwitch} isEnabled={isEnabled} />;
  }
}`,...d.parameters?.docs?.source}}},f=[`Toggle`]}))();export{d as Toggle,f as __namedExportsOrder,u as default};