import{R as e,j as n,V as m}from"./iframe-B-hEVdgV.js";import{P as a}from"./PhoneNumberInput-D6ix-1zF.js";import{D as u}from"./InputField-BQIQ4Jv8.js";import{N}from"./NavigationContainer-CqwEyzWu.js";import"./preload-helper-Zf8nSx-t.js";import"./bundle-mjs-CESebHNu.js";import"./useColors-Bqk5IObG.js";import"./css.generated-BbmyNoiE.js";const F={title:"Commons/Components/PhoneNumberInput",component:a,decorators:[t=>n.jsx(N,{children:n.jsx(m,{style:{top:"15%",padding:20},children:n.jsx(t,{})})})],argTypes:{isError:{control:"boolean"},disabled:{control:"boolean"},disableCountryPicker:{control:"boolean"}},args:{setValue:()=>{},isError:!1,disabled:!1,disableCountryPicker:!1}},l={render:()=>{const[t,o]=e.useState(""),[r,s]=e.useState(u);return n.jsx(a,{value:t,setValue:o,countryCode:r,onCountryCodeChange:s,placeholder:"Enter phone number"})}},c={render:()=>{const[t,o]=e.useState(""),[r,s]=e.useState(u);return n.jsx(a,{label:"Mobile Phone",value:t,setValue:o,countryCode:r,onCountryCodeChange:s,placeholder:"777 7777"})}},d={render:()=>{const[t,o]=e.useState("7777777"),[r,s]=e.useState("IS");return n.jsx(a,{label:"Icelandic Phone",value:t,setValue:o,countryCode:r,onCountryCodeChange:s})}},C={render:()=>{const[t,o]=e.useState("5551234567"),[r,s]=e.useState("US");return n.jsx(a,{label:"US Phone",value:t,setValue:o,countryCode:r,onCountryCodeChange:s})}},i={render:()=>{const[t,o]=e.useState("123"),[r,s]=e.useState(u);return n.jsx(a,{label:"Phone Number",value:t,setValue:o,countryCode:r,onCountryCodeChange:s,isError:!0,errorMessage:"Invalid phone number"})}},h={render:()=>{const[t,o]=e.useState("7777777"),[r,s]=e.useState(u);return n.jsx(a,{label:"Phone Number",value:t,setValue:o,countryCode:r,onCountryCodeChange:s,disabled:!0})}},y={render:()=>{const[t,o]=e.useState("7777777");return n.jsx(a,{label:"Phone Number",value:t,setValue:o,countryCode:u,disableCountryPicker:!0,placeholder:"777 7777"})}},b={render:()=>{const[t,o]=e.useState(""),[r,s]=e.useState(u),[p,S]=e.useState("7777777"),[V,v]=e.useState(u),[k,x]=e.useState("123"),[E,g]=e.useState(u),[P,f]=e.useState("7777777"),[I,D]=e.useState(u);return n.jsxs(m,{style:{gap:16},children:[n.jsx(a,{label:"Empty",value:t,setValue:o,countryCode:r,onCountryCodeChange:s,placeholder:"Enter phone"}),n.jsx(a,{label:"With Value",value:p,setValue:S,countryCode:V,onCountryCodeChange:v}),n.jsx(a,{label:"With Error",value:k,setValue:x,countryCode:E,onCountryCodeChange:g,isError:!0}),n.jsx(a,{label:"Disabled",value:P,setValue:f,countryCode:I,onCountryCodeChange:D,disabled:!0})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [countryCode, setCountryCode] = React.useState(DEFAULT_ISO_CODE);
    return <PhoneNumberInput value={value} setValue={setValue} countryCode={countryCode} onCountryCodeChange={setCountryCode} placeholder='Enter phone number' />;
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [countryCode, setCountryCode] = React.useState(DEFAULT_ISO_CODE);
    return <PhoneNumberInput label='Mobile Phone' value={value} setValue={setValue} countryCode={countryCode} onCountryCodeChange={setCountryCode} placeholder='777 7777' />;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState('7777777');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [countryCode, setCountryCode] = React.useState('IS');
    return <PhoneNumberInput label='Icelandic Phone' value={value} setValue={setValue} countryCode={countryCode} onCountryCodeChange={setCountryCode} />;
  }
}`,...d.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState('5551234567');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [countryCode, setCountryCode] = React.useState('US');
    return <PhoneNumberInput label='US Phone' value={value} setValue={setValue} countryCode={countryCode} onCountryCodeChange={setCountryCode} />;
  }
}`,...C.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState('123');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [countryCode, setCountryCode] = React.useState(DEFAULT_ISO_CODE);
    return <PhoneNumberInput label='Phone Number' value={value} setValue={setValue} countryCode={countryCode} onCountryCodeChange={setCountryCode} isError={true} errorMessage='Invalid phone number' />;
  }
}`,...i.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState('7777777');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [countryCode, setCountryCode] = React.useState(DEFAULT_ISO_CODE);
    return <PhoneNumberInput label='Phone Number' value={value} setValue={setValue} countryCode={countryCode} onCountryCodeChange={setCountryCode} disabled={true} />;
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState('7777777');
    return <PhoneNumberInput label='Phone Number' value={value} setValue={setValue} countryCode={DEFAULT_ISO_CODE} disableCountryPicker={true} placeholder='777 7777' />;
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value1, setValue1] = React.useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [countryCode1, setCountryCode1] = React.useState(DEFAULT_ISO_CODE);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value2, setValue2] = React.useState('7777777');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [countryCode2, setCountryCode2] = React.useState(DEFAULT_ISO_CODE);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value3, setValue3] = React.useState('123');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [countryCode3, setCountryCode3] = React.useState(DEFAULT_ISO_CODE);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value4, setValue4] = React.useState('7777777');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [countryCode4, setCountryCode4] = React.useState(DEFAULT_ISO_CODE);
    return <View style={{
      gap: 16
    }}>
        <PhoneNumberInput label='Empty' value={value1} setValue={setValue1} countryCode={countryCode1} onCountryCodeChange={setCountryCode1} placeholder='Enter phone' />
        <PhoneNumberInput label='With Value' value={value2} setValue={setValue2} countryCode={countryCode2} onCountryCodeChange={setCountryCode2} />
        <PhoneNumberInput label='With Error' value={value3} setValue={setValue3} countryCode={countryCode3} onCountryCodeChange={setCountryCode3} isError={true} />
        <PhoneNumberInput label='Disabled' value={value4} setValue={setValue4} countryCode={countryCode4} onCountryCodeChange={setCountryCode4} disabled={true} />
      </View>;
  }
}`,...b.parameters?.docs?.source}}};const W=["Default","WithLabel","IcelandicNumber","USNumber","WithError","Disabled","WithoutCountryPicker","AllStates"];export{b as AllStates,l as Default,h as Disabled,d as IcelandicNumber,C as USNumber,i as WithError,c as WithLabel,y as WithoutCountryPicker,W as __namedExportsOrder,F as default};
