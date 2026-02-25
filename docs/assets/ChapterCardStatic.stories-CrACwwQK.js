import{e as k,j as e,V as t,T as s,S as A}from"./iframe-BQwTaADa.js";import{d as h,c as P,f as v,w as D,a as E}from"./dateTime-CvzloA-p.js";import{S as q,a as W,b as F}from"./Ribbon-nNOOJ6XA.js";import"./xml-eTJ_1ewI.js";import{u as N}from"./useColors-TdzNx-1W.js";import{A as R}from"./AppButton-DkXjm21D.js";import{C as _}from"./Card-TqFb8dJQ.js";import{C as z}from"./CardButton-nLF8jNIu.js";import{D as H}from"./Divider-CU40CuVl.js";import{u as O}from"./useTranslation-5Euw0K4a.js";import"./preload-helper-Zf8nSx-t.js";import"./css.generated-BbmyNoiE.js";import"./index-C0k7x8EO.js";import"./bundle-mjs-CESebHNu.js";import"./Spinner-DQ-ykSJI.js";import"./FontAwesome-G9WyAUdy.js";import"./Text-B3XTQCDI.js";import"./SwitchToggle-BaVfB86v.js";import"./Tag-BbBMJgFn.js";const x=({caption:l,description:f,date:m,location:y,onPressButton:u,dateCaption:j,isExternalLink:C,isLoading:L})=>{const{t:g,i18n:T}=O("more");h.extend(P);const S=k.useTheme(),B=N(),w=!!u;return e.jsxs(_,{variant:"elevated",children:[e.jsx(z,{className:"mt-1 mx-1",title:l}),e.jsxs(t,{className:"px-5 pb-5",children:[e.jsx(H,{}),e.jsxs(t,{children:[e.jsx(t,{children:e.jsxs(t,{children:[e.jsx(s,{color:"textSecondary",lineHeight:18,fontSize:14,children:g("Lýsing")}),f?.split(`
`).map((b,I)=>e.jsx(s,{lineHeight:24,fontSize:16,children:b},I))]})}),e.jsxs(t,{style:n.infoItems,children:[e.jsxs(t,{style:n.infoItem,children:[e.jsx(t,{style:n.infoItemIcon,children:e.jsx(q,{})}),e.jsx(s,{style:n.infoItemText,color:"primary",children:`${j} ${m&&v(h(m,D).format(E),T.language)}`})]}),e.jsxs(t,{style:n.infoItem,children:[e.jsx(t,{style:n.infoItemIcon,children:e.jsx(W,{})}),e.jsx(s,{style:n.infoItemText,color:"primary",children:y})]})]}),w&&e.jsx(t,{children:e.jsx(t,{style:[{paddingTop:S.spacing.s}],children:e.jsx(R,{title:g("Opna spurningalista"),iconRight:C?e.jsx(F,{stroke:B.onPrimary}):void 0,onPress:u,round:!0,isLoading:L})})})]})]})]})},n=A.create({infoItems:{display:"flex",flexDirection:"column",paddingTop:10},infoItem:{display:"flex",flexDirection:"row",paddingBottom:5},infoItemIcon:{alignSelf:"center",paddingRight:10},infoItemText:{fontSize:14,lineHeight:22}});x.__docgenInfo={description:"",methods:[],displayName:"ChapterCardStatic",props:{caption:{required:!1,tsType:{name:"string"},description:""},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},description:{required:!1,tsType:{name:"string"},description:""},date:{required:!1,tsType:{name:"string"},description:""},location:{required:!1,tsType:{name:"string"},description:""},dateCaption:{required:!0,tsType:{name:"string"},description:""},onPressButton:{required:!0,tsType:{name:"union",raw:"(() => any) | null",elements:[{name:"unknown"},{name:"null"}]},description:""},isExternalLink:{required:!1,tsType:{name:"boolean"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""}}};const ce={title:"Commons/Components/ChapterCard/ChapterCardStatic",component:x,tags:["autodocs"],decorators:[l=>e.jsx(t,{style:{padding:16},children:e.jsx(l,{})})],parameters:{docs:{description:{component:"A non-collapsible chapter card that shows description, date/location info, and an optional CTA button."}}},argTypes:{caption:{control:"text"},description:{control:"text"},date:{control:"text",description:"Date string parsed internally using dayjs and wsDateFormat."},location:{control:"text"},dateCaption:{control:"text"},isExternalLink:{control:"boolean"},isLoading:{control:"boolean"},onPress:{control:!1,description:"Not used by this component (kept for prop parity)."},onPressButton:{control:!1,description:"CTA handler. Button renders only when provided."}}},d=()=>{},o={caption:"ChapterCardStatic",description:`This is the first line.
And here is the second line.`,dateCaption:"Dags:",date:"03-09-2026 11:15:29",location:"Reykjavík"},r={args:{...o}},a={args:{...o,onPressButton:d}},i={args:{...o,onPressButton:d,isExternalLink:!0}},c={args:{...o,onPressButton:d,isLoading:!0}},p={args:{...o,caption:"A very long chapter title that should wrap onto multiple lines nicely",description:`Line one of a longer description.
Line two adds more detail.
Line three keeps going to show spacing.`,onPressButton:d}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    onPressButton: noop
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    onPressButton: noop,
    isExternalLink: true
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    onPressButton: noop,
    isLoading: true
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    caption: 'A very long chapter title that should wrap onto multiple lines nicely',
    description: 'Line one of a longer description.\\nLine two adds more detail.\\nLine three keeps going to show spacing.',
    onPressButton: noop
  }
}`,...p.parameters?.docs?.source}}};const pe=["Default","WithButton","WithExternalLinkButton","WithLoadingButton","LongContent"];export{r as Default,p as LongContent,a as WithButton,i as WithExternalLinkButton,c as WithLoadingButton,pe as __namedExportsOrder,ce as default};
