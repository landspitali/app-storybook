import{j as n,V as d}from"./iframe-B-hEVdgV.js";import{I as s,P as l}from"./Pill-BDUyAuVV.js";import{j as p}from"./Weight-gVtSDCax.js";import"./xml-By6rjAqG.js";import"./preload-helper-Zf8nSx-t.js";import"./Card-tZzU46-V.js";import"./index-C0k7x8EO.js";import"./bundle-mjs-CESebHNu.js";import"./CardButton-BT0R6Jg2.js";import"./TaskProgressBar-B3HH1aDT.js";import"./TaskPill-BfU29Fgp.js";import"./SwitchToggle-Bv9BIR6J.js";import"./useColors-Bqk5IObG.js";import"./css.generated-BbmyNoiE.js";import"./Tag-DIbMaMTY.js";import"./FontAwesome-ezXvgRMU.js";import"./Text-iMRo778K.js";import"./Divider-DWJAKEDl.js";import"./Spinner-Dhdd_DMQ.js";const h={title:"Commons/Components/InfoCard",component:s,decorators:[t=>n.jsx(d,{style:{padding:16},children:n.jsx(t,{})})]},m=[{title:"Tegund",value:`Blóðmeinafræði
    Klínísk lífefnafræði
    Tekið af blóðtökusveit`},{title:"Tímasetning",value:"30.11.2026 14:15"},{title:"Staðsetning",value:"HNE (FV-A4)"},{title:"Læknir",value:"Óskar Einarsson"},{title:"Staða",value:"Beiðni send"}],o={args:{cardButtonProps:{title:"Blóðmeinafræði",leftIcon:p,eyebrowTitle:"Blóðrannsókn",eyebrowTimestamp:"30.11.26 14:15"},info:m},render:t=>n.jsx(s,{...t,info:t.info?.map(e=>({title:e.title,value:e.title==="Staða"?n.jsx(l,{title:e.value||""}):e.value}))})},r={args:{cardButtonProps:{title:"Blóðmeinafræði",leftIcon:p,eyebrowTitle:"Blóðrannsókn",eyebrowTimestamp:"30.11.26 14:15"},info:m,collapsible:!0},render:t=>n.jsx(s,{...t,info:t.info?.map(e=>({title:e.title,value:e.title==="Staða"?n.jsx(l,{title:e.value||""}):e.value}))})},a={args:{cardButtonProps:{title:""},info:[]}},i={args:{cardButtonProps:{title:"Loading state"},info:void 0,isLoading:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    cardButtonProps: {
      title: 'Blóðmeinafræði',
      leftIcon: BloodTest,
      eyebrowTitle: 'Blóðrannsókn',
      eyebrowTimestamp: '30.11.26 14:15'
    },
    info: sampleInfo
  },
  render: (args: StoryProps) => {
    return <InfoCard {...args} info={args.info?.map(x => ({
      title: x.title,
      // Nativewind doesn't allow non-serializable props, so we do it like this to showcase passing JSX elements in value
      value: x.title === 'Staða' ? <Pill title={x.value || ''} /> : x.value
    }))} />;
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    cardButtonProps: {
      title: 'Blóðmeinafræði',
      leftIcon: BloodTest,
      eyebrowTitle: 'Blóðrannsókn',
      eyebrowTimestamp: '30.11.26 14:15'
    },
    info: sampleInfo,
    collapsible: true
  },
  render: (args: StoryProps) => {
    return <InfoCard {...args} info={args.info?.map(x => ({
      title: x.title,
      // Nativewind doesn't allow non-serializable props, so we do it like this to showcase passing JSX elements in value
      value: x.title === 'Staða' ? <Pill title={x.value || ''} /> : x.value
    }))} />;
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    cardButtonProps: {
      title: ''
    } as any,
    info: []
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    cardButtonProps: {
      title: 'Loading state'
    } as any,
    info: undefined,
    isLoading: true
  }
}`,...i.parameters?.docs?.source}}};const N=["Default","Collapsible","EmptyInfo","Loading"];export{r as Collapsible,o as Default,a as EmptyInfo,i as Loading,N as __namedExportsOrder,h as default};
