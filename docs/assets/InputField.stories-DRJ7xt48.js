import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{r as n}from"./client-CWOoj4ER.js";import{M as r,c as i,t as a}from"./jsx-runtime-D3nZEPZm.js";import{n as o,t as s}from"./FontAwesome-BgXq5w0K.js";import{n as c,t as l}from"./InputField-cJ--VetE.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{u=t(n()),i(),c(),o(),d=a(),f={title:`Commons/Components/InputField`,component:l,decorators:[e=>(0,d.jsx)(r,{style:{top:`15%`,padding:20},children:(0,d.jsx)(e,{})})],argTypes:{maskType:{control:`select`,options:[`TEXT`,`NAME`,`KENNITALA`,`PHONE`,`INTEGER`,`NUMBER`]},isError:{control:`boolean`},disabled:{control:`boolean`}},args:{setValue:()=>{},maskType:`TEXT`,isError:!1,disabled:!1}},p={render:()=>{let[e,t]=u.useState(``);return(0,d.jsx)(l,{value:e,setValue:t,placeholder:`Enter text`})}},m={render:()=>{let[e,t]=u.useState(``);return(0,d.jsx)(l,{label:`Full Name`,value:e,setValue:t,placeholder:`John Doe`})}},h={render:()=>{let[e,t]=u.useState(`Invalid input`);return(0,d.jsx)(l,{label:`Email`,value:e,setValue:t,placeholder:`email@example.com`,isError:!0,errorMessage:`Invalid email address`})}},g={render:()=>{let[e,t]=u.useState(`Cannot edit this`);return(0,d.jsx)(l,{label:`Disabled Field`,value:e,setValue:t,disabled:!0})}},_={render:()=>{let[e,t]=u.useState(``);return(0,d.jsx)(l,{label:`Search`,value:e,setValue:t,placeholder:`Search...`,leftIcon:(0,d.jsx)(r,{style:{justifyContent:`center`,paddingRight:8},children:(0,d.jsx)(s,{name:`magnifying-glass`,variant:`sharp`,size:16,color:`#999`})})})}},v={render:()=>{let[e,t]=u.useState(``);return(0,d.jsx)(l,{label:`Search`,value:e,setValue:t,placeholder:`Search...`,rightIcon:(0,d.jsx)(s,{name:`magnifying-glass`,variant:`sharp`,size:16,color:`#999`})})}},y={render:()=>{let[e,t]=u.useState(``);return(0,d.jsx)(l,{label:`Full Name`,value:e,setValue:t,maskType:`NAME`,placeholder:`Enter your name`})}},b={render:()=>{let[e,t]=u.useState(``);return(0,d.jsx)(l,{label:`Kennitala`,value:e,setValue:t,maskType:`KENNITALA`,placeholder:`000000-0000`})}},x={render:()=>{let[e,t]=u.useState(``);return(0,d.jsx)(l,{label:`Age`,value:e,setValue:t,maskType:`INTEGER`,placeholder:`Enter age`})}},S={render:()=>{let[e,t]=u.useState(``);return(0,d.jsx)(l,{label:`Weight (kg)`,value:e,setValue:t,maskType:`NUMBER`,placeholder:`Enter weight`})}},C={render:()=>{let[e,t]=u.useState(``),[n,i]=u.useState(`Example text`),[a,o]=u.useState(`Error value`),[s,c]=u.useState(`Disabled value`);return(0,d.jsxs)(r,{style:{gap:16},children:[(0,d.jsx)(l,{label:`Empty`,value:e,setValue:t,placeholder:`Placeholder text`}),(0,d.jsx)(l,{label:`With Value`,value:n,setValue:i}),(0,d.jsx)(l,{label:`With Error`,value:a,setValue:o,isError:!0}),(0,d.jsx)(l,{label:`Disabled`,value:s,setValue:c,disabled:!0})]})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState('');
    return <InputField value={value} setValue={setValue} placeholder='Enter text' />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState('');
    return <InputField label='Full Name' value={value} setValue={setValue} placeholder='John Doe' />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState('Invalid input');
    return <InputField label='Email' value={value} setValue={setValue} placeholder='email@example.com' isError={true} errorMessage='Invalid email address' />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState('Cannot edit this');
    return <InputField label='Disabled Field' value={value} setValue={setValue} disabled={true} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState('');
    return <InputField label='Search' value={value} setValue={setValue} placeholder='Search...' rightIcon={<FontAwesome name='magnifying-glass' variant='sharp' size={16} color='#999' />} />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState('');
    return <InputField label='Full Name' value={value} setValue={setValue} maskType='NAME' placeholder='Enter your name' />;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState('');
    return <InputField label='Kennitala' value={value} setValue={setValue} maskType='KENNITALA' placeholder='000000-0000' />;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState('');
    return <InputField label='Age' value={value} setValue={setValue} maskType='INTEGER' placeholder='Enter age' />;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState('');
    return <InputField label='Weight (kg)' value={value} setValue={setValue} maskType='NUMBER' placeholder='Enter weight' />;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`Default`,`WithLabel`,`WithError`,`Disabled`,`WithLeftIcon`,`WithRightIcon`,`NameMask`,`KennitalaMask`,`IntegerMask`,`NumberMask`,`AllStates`]}))();export{C as AllStates,p as Default,g as Disabled,x as IntegerMask,b as KennitalaMask,y as NameMask,S as NumberMask,h as WithError,m as WithLabel,_ as WithLeftIcon,v as WithRightIcon,w as __namedExportsOrder,f as default};