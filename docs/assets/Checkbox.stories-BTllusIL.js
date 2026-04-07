import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{r as n}from"./client-CWOoj4ER.js";import{M as r,c as i,t as a}from"./jsx-runtime-D3nZEPZm.js";import{n as o,t as s}from"./Checkbox-Iwc4tPE3.js";var c,l,u,d,f,p,m,h,g,_;e((()=>{c=t(n()),i(),o(),l=a(),u={title:`Commons/Components/CheckBox`,component:s,args:{value:!1,disabled:!1,rounded:!1}},d=({initialValue:e=!1,disabled:t=!1,rounded:n=!1})=>{let[r,i]=(0,c.useState)(e);return(0,l.jsx)(s,{value:r,disabled:t,rounded:n,onValueChange:e=>i(e)})},f={render:()=>(0,l.jsx)(d,{initialValue:!1})},p={render:()=>(0,l.jsx)(d,{initialValue:!0})},m={render:()=>(0,l.jsx)(d,{initialValue:!1,disabled:!0})},h={render:()=>(0,l.jsx)(d,{initialValue:!0,disabled:!0})},g={render:()=>(0,l.jsxs)(r,{style:{padding:16,flexDirection:`row`,gap:16},children:[(0,l.jsxs)(r,{style:{gap:16},children:[(0,l.jsx)(d,{initialValue:!1}),(0,l.jsx)(d,{initialValue:!0}),(0,l.jsx)(d,{disabled:!0})]}),(0,l.jsxs)(r,{style:{gap:16},children:[(0,l.jsx)(d,{rounded:!0,initialValue:!1}),(0,l.jsx)(d,{rounded:!0,initialValue:!0}),(0,l.jsx)(d,{rounded:!0,disabled:!0})]})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveCheckbox initialValue={false} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveCheckbox initialValue={true} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveCheckbox initialValue={false} disabled />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveCheckbox initialValue={true} disabled />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    padding: 16,
    flexDirection: 'row',
    gap: 16
  }}>
      <View style={{
      gap: 16
    }}>
        <InteractiveCheckbox initialValue={false} />
        <InteractiveCheckbox initialValue={true} />
        <InteractiveCheckbox disabled />
      </View>
      <View style={{
      gap: 16
    }}>
        <InteractiveCheckbox rounded initialValue={false} />
        <InteractiveCheckbox rounded initialValue={true} />
        <InteractiveCheckbox rounded disabled />
      </View>
    </View>
}`,...g.parameters?.docs?.source}}},_=[`Unchecked`,`Checked`,`DisabledUnchecked`,`DisabledChecked`,`AllVariants`]}))();export{g as AllVariants,p as Checked,h as DisabledChecked,m as DisabledUnchecked,f as Unchecked,_ as __namedExportsOrder,u as default};