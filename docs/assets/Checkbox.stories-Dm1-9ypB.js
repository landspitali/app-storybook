import{j as e,V as o,r as h}from"./iframe-CVORTbkl.js";import{C as c}from"./Checkbox-D5KjSGtW.js";import"./preload-helper-Zf8nSx-t.js";import"./FontAwesome-CENF4zvs.js";import"./useColors-BlZyYDc7.js";import"./css.generated-BbmyNoiE.js";const g={title:"Commons/Components/CheckBox",component:c,args:{value:!1,disabled:!1,rounded:!1}},a=({initialValue:l=!1,disabled:d=!1,rounded:u=!1})=>{const[p,m]=h.useState(l);return e.jsx(c,{value:p,disabled:d,rounded:u,onValueChange:x=>m(x)})},r={render:()=>e.jsx(a,{initialValue:!1})},s={render:()=>e.jsx(a,{initialValue:!0})},t={render:()=>e.jsx(a,{initialValue:!1,disabled:!0})},n={render:()=>e.jsx(a,{initialValue:!0,disabled:!0})},i={render:()=>e.jsxs(o,{style:{padding:16,flexDirection:"row",gap:16},children:[e.jsxs(o,{style:{gap:16},children:[e.jsx(a,{initialValue:!1}),e.jsx(a,{initialValue:!0}),e.jsx(a,{disabled:!0})]}),e.jsxs(o,{style:{gap:16},children:[e.jsx(a,{rounded:!0,initialValue:!1}),e.jsx(a,{rounded:!0,initialValue:!0}),e.jsx(a,{rounded:!0,disabled:!0})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveCheckbox initialValue={false} />
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveCheckbox initialValue={true} />
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveCheckbox initialValue={false} disabled />
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveCheckbox initialValue={true} disabled />
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const v=["Unchecked","Checked","DisabledUnchecked","DisabledChecked","AllVariants"];export{i as AllVariants,s as Checked,n as DisabledChecked,t as DisabledUnchecked,r as Unchecked,v as __namedExportsOrder,g as default};
