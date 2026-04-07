import{R as r,j as t,V}from"./iframe-CVORTbkl.js";import{I as s}from"./InputField-DL2KvS28.js";import{F as b}from"./FontAwesome-CENF4zvs.js";import"./preload-helper-Zf8nSx-t.js";import"./bundle-mjs-CN3GRbvm.js";import"./index-Jdp8aPWW.js";import"./useColors-BlZyYDc7.js";import"./css.generated-BbmyNoiE.js";const M={title:"Commons/Components/InputField",component:s,decorators:[e=>t.jsx(V,{style:{top:"15%",padding:20},children:t.jsx(e,{})})],argTypes:{maskType:{control:"select",options:["TEXT","NAME","KENNITALA","PHONE","INTEGER","NUMBER"]},isError:{control:"boolean"},disabled:{control:"boolean"}},args:{setValue:()=>{},maskType:"TEXT",isError:!1,disabled:!1}},l={render:()=>{const[e,a]=r.useState("");return t.jsx(s,{value:e,setValue:a,placeholder:"Enter text"})}},n={render:()=>{const[e,a]=r.useState("");return t.jsx(s,{label:"Full Name",value:e,setValue:a,placeholder:"John Doe"})}},o={render:()=>{const[e,a]=r.useState("Invalid input");return t.jsx(s,{label:"Email",value:e,setValue:a,placeholder:"email@example.com",isError:!0,errorMessage:"Invalid email address"})}},u={render:()=>{const[e,a]=r.useState("Cannot edit this");return t.jsx(s,{label:"Disabled Field",value:e,setValue:a,disabled:!0})}},c={render:()=>{const[e,a]=r.useState("");return t.jsx(s,{label:"Search",value:e,setValue:a,placeholder:"Search...",leftIcon:t.jsx(V,{style:{justifyContent:"center",paddingRight:8},children:t.jsx(b,{name:"magnifying-glass",variant:"sharp",size:16,color:"#999"})})})}},i={render:()=>{const[e,a]=r.useState("");return t.jsx(s,{label:"Search",value:e,setValue:a,placeholder:"Search...",rightIcon:t.jsx(b,{name:"magnifying-glass",variant:"sharp",size:16,color:"#999"})})}},d={render:()=>{const[e,a]=r.useState("");return t.jsx(s,{label:"Full Name",value:e,setValue:a,maskType:"NAME",placeholder:"Enter your name"})}},p={render:()=>{const[e,a]=r.useState("");return t.jsx(s,{label:"Kennitala",value:e,setValue:a,maskType:"KENNITALA",placeholder:"000000-0000"})}},m={render:()=>{const[e,a]=r.useState("");return t.jsx(s,{label:"Age",value:e,setValue:a,maskType:"INTEGER",placeholder:"Enter age"})}},h={render:()=>{const[e,a]=r.useState("");return t.jsx(s,{label:"Weight (kg)",value:e,setValue:a,maskType:"NUMBER",placeholder:"Enter weight"})}},v={render:()=>{const[e,a]=r.useState(""),[g,S]=r.useState("Example text"),[k,x]=r.useState("Error value"),[E,I]=r.useState("Disabled value");return t.jsxs(V,{style:{gap:16},children:[t.jsx(s,{label:"Empty",value:e,setValue:a,placeholder:"Placeholder text"}),t.jsx(s,{label:"With Value",value:g,setValue:S}),t.jsx(s,{label:"With Error",value:k,setValue:x,isError:!0}),t.jsx(s,{label:"Disabled",value:E,setValue:I,disabled:!0})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState('');
    return <InputField value={value} setValue={setValue} placeholder='Enter text' />;
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState('');
    return <InputField label='Full Name' value={value} setValue={setValue} placeholder='John Doe' />;
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState('Invalid input');
    return <InputField label='Email' value={value} setValue={setValue} placeholder='email@example.com' isError={true} errorMessage='Invalid email address' />;
  }
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState('Cannot edit this');
    return <InputField label='Disabled Field' value={value} setValue={setValue} disabled={true} />;
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState('');
    return <InputField label='Search' value={value} setValue={setValue} placeholder='Search...' leftIcon={<View style={{
      justifyContent: 'center',
      paddingRight: 8
    }}>
            <FontAwesome name='magnifying-glass' variant='sharp' size={16} color='#999' />
          </View>} />;
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState('');
    return <InputField label='Search' value={value} setValue={setValue} placeholder='Search...' rightIcon={<FontAwesome name='magnifying-glass' variant='sharp' size={16} color='#999' />} />;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState('');
    return <InputField label='Full Name' value={value} setValue={setValue} maskType='NAME' placeholder='Enter your name' />;
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState('');
    return <InputField label='Kennitala' value={value} setValue={setValue} maskType='KENNITALA' placeholder='000000-0000' />;
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState('');
    return <InputField label='Age' value={value} setValue={setValue} maskType='INTEGER' placeholder='Enter age' />;
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState('');
    return <InputField label='Weight (kg)' value={value} setValue={setValue} maskType='NUMBER' placeholder='Enter weight' />;
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value1, setValue1] = React.useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value2, setValue2] = React.useState('Example text');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value3, setValue3] = React.useState('Error value');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value4, setValue4] = React.useState('Disabled value');
    return <View style={{
      gap: 16
    }}>
        <InputField label='Empty' value={value1} setValue={setValue1} placeholder='Placeholder text' />
        <InputField label='With Value' value={value2} setValue={setValue2} />
        <InputField label='With Error' value={value3} setValue={setValue3} isError={true} />
        <InputField label='Disabled' value={value4} setValue={setValue4} disabled={true} />
      </View>;
  }
}`,...v.parameters?.docs?.source}}};const W=["Default","WithLabel","WithError","Disabled","WithLeftIcon","WithRightIcon","NameMask","KennitalaMask","IntegerMask","NumberMask","AllStates"];export{v as AllStates,l as Default,u as Disabled,m as IntegerMask,p as KennitalaMask,d as NameMask,h as NumberMask,o as WithError,n as WithLabel,c as WithLeftIcon,i as WithRightIcon,W as __namedExportsOrder,M as default};
