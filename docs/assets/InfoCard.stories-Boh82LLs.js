import{j as e,r as l,A as y,V as r,u as L,P as N,U as h,v as R,T as A,S as _}from"./iframe-BQwTaADa.js";import{C as V}from"./Card-TqFb8dJQ.js";import{C as D}from"./CardButton-nLF8jNIu.js";import{D as H}from"./Divider-CU40CuVl.js";import{S as F}from"./Spinner-DQ-ykSJI.js";import{T as w}from"./Text-B3XTQCDI.js";import{S as b,P as T}from"./xml-eTJ_1ewI.js";import{u as k}from"./useColors-TdzNx-1W.js";import{f as j}from"./Ribbon-nNOOJ6XA.js";import"./preload-helper-Zf8nSx-t.js";import"./index-C0k7x8EO.js";import"./bundle-mjs-CESebHNu.js";import"./SwitchToggle-BaVfB86v.js";import"./Tag-BbBMJgFn.js";import"./FontAwesome-G9WyAUdy.js";import"./css.generated-BbmyNoiE.js";function S(n){const t=k();return e.jsx(b,{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:e.jsx(T,{d:"M7 10L12 15L17 10",stroke:t.svgBase,strokeLinecap:"round",strokeLinejoin:"round"})})}S.__docgenInfo={description:"",methods:[],displayName:"SvgArrowDown2"};function P(n){return e.jsx(b,{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:e.jsx(T,{d:"M17 14L12 9L7 14",stroke:"#242328",strokeLinecap:"round",strokeLinejoin:"round"})})}P.__docgenInfo={description:"",methods:[],displayName:"SvgArrowUp2"};N.OS==="android"&&h.setLayoutAnimationEnabledExperimental&&h.setLayoutAnimationEnabledExperimental(!0);function z(n){if(!n)return e.jsx(e.Fragment,{});const{title:t,value:a}=n;return e.jsxs(r,{className:"flex-row justify-between gap-2 py-2 px-1",children:[e.jsx(r,{children:e.jsx(w,{children:t})}),e.jsx(r,{className:"flex-1 items-end",children:typeof a=="string"?e.jsx(w,{textBreakStrategy:"balanced",className:"text-right text-textTertiary",children:a}):e.jsx(r,{className:"items-end",children:a})})]})}function c({cardButtonProps:n,info:t,isLoading:a=!1,collapsible:s=!1}){const[g,C]=l.useState(!s),[i,I]=l.useState(0),f=l.useRef(new y.Value(0)).current,v=l.useMemo(()=>e.jsxs(e.Fragment,{children:[e.jsx(H,{}),e.jsx(r,{className:"gap-1",children:t?.map((o,E)=>e.jsx(z,{...o},`info_val_${E}`))})]}),[t]);l.useEffect(()=>{y.timing(f,{toValue:g?i:0,duration:250,useNativeDriver:!1}).start()},[g,i,f]);const q=()=>{C(o=>!o)};return e.jsx(V,{variant:"elevated",className:"p-4",children:e.jsx(L,{disabled:!s,onPress:q,children:a?e.jsx(r,{className:"py-4",children:e.jsx(F,{})}):e.jsxs(e.Fragment,{children:[e.jsx(D,{className:"px-0",disabled:!0,rightIcon:s?g?P:S:void 0,...n}),e.jsx(e.Fragment,{children:s?e.jsxs(y.View,{style:{height:f,overflow:"hidden"},children:[e.jsx(r,{style:{position:"absolute",opacity:0,zIndex:-1,left:0,right:0},pointerEvents:"none",onLayout:o=>{i===0&&I(o.nativeEvent.layout.height)},children:e.jsx(r,{children:v})}),e.jsx(r,{style:{opacity:i===0?0:1},children:v})]}):e.jsx(r,{children:v})})]})})})}c.__docgenInfo={description:"",methods:[],displayName:"InfoCard",props:{cardButtonProps:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  title?: string | null;
  leftIcon?: React.ComponentType<SvgProps>;
  className?: string;
  subTitle?: string;
  subTitleIcon?: React.ComponentType<SvgProps>;
  rightIcon?: React.ComponentType<SvgProps>;
  secondaryText?: string;
  statusTag?: string;
  statusTagColor?: string;
  eyebrowTimestamp?: string;
  eyebrowTitle?: string;
  border?: boolean;
  backgroundColor?: string;
  taskProgressBar?: TreatmentProgressItem[];
  onPress?: () => void;
  disabled?: boolean;
  toggleEnabled?: boolean;
  onToggleChange?: (value: boolean) => void;
}`,signature:{properties:[{key:"title",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"leftIcon",value:{name:"ReactComponentType",raw:"React.ComponentType<SvgProps>",elements:[{name:"SvgProps"}],required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"subTitle",value:{name:"string",required:!1}},{key:"subTitleIcon",value:{name:"ReactComponentType",raw:"React.ComponentType<SvgProps>",elements:[{name:"SvgProps"}],required:!1}},{key:"rightIcon",value:{name:"ReactComponentType",raw:"React.ComponentType<SvgProps>",elements:[{name:"SvgProps"}],required:!1}},{key:"secondaryText",value:{name:"string",required:!1}},{key:"statusTag",value:{name:"string",required:!1}},{key:"statusTagColor",value:{name:"string",required:!1}},{key:"eyebrowTimestamp",value:{name:"string",required:!1}},{key:"eyebrowTitle",value:{name:"string",required:!1}},{key:"border",value:{name:"boolean",required:!1}},{key:"backgroundColor",value:{name:"string",required:!1}},{key:"taskProgressBar",value:{name:"Array",elements:[{name:"TreatmentProgressItem"}],raw:"TreatmentProgressItem[]",required:!1}},{key:"onPress",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"toggleEnabled",value:{name:"boolean",required:!1}},{key:"onToggleChange",value:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}},required:!1}}]}},description:""},info:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"InfoProps | null",elements:[{name:"signature",type:"object",raw:`{
  title?: string | null;
  value?: string | ReactElement | null;
}`,signature:{properties:[{key:"title",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"value",value:{name:"union",raw:"string | ReactElement | null",elements:[{name:"string"},{name:"ReactElement"},{name:"null"}],required:!1}}]}},{name:"null"}]}],raw:"Array<InfoProps | null>"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},collapsible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};function x({title:n,variant:t="blue"}){const a=k();let s=a.pillBlue;switch(t){case"yellow":s=a.pillYellow;break;case"green":s=a.pillGreen;break;case"lightBlue":s=a.pillLightBlue;break;case"blue":s=a.pillBlue}return e.jsx(R,{style:[M.statusContainer,{backgroundColor:s}],children:e.jsx(A,{variant:"body",color:"primary",fontWeight:"600",lineHeight:18,children:n})})}const M=_.create({statusContainer:{borderRadius:5,paddingHorizontal:8,paddingVertical:2,justifyContent:"center",alignSelf:"flex-start"}});x.__docgenInfo={description:"",methods:[],displayName:"Pill",props:{title:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'blue' | 'green' | 'yellow' | 'lightBlue'",elements:[{name:"literal",value:"'blue'"},{name:"literal",value:"'green'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'lightBlue'"}]},description:"",defaultValue:{value:"'blue'",computed:!1}}}};const se={title:"Commons/Components/InfoCard",component:c,decorators:[n=>e.jsx(r,{style:{padding:16},children:e.jsx(n,{})})]},B=[{title:"Tegund",value:`Blóðmeinafræði
    Klínísk lífefnafræði
    Tekið af blóðtökusveit`},{title:"Tímasetning",value:"30.11.2026 14:15"},{title:"Staðsetning",value:"HNE (FV-A4)"},{title:"Læknir",value:"Óskar Einarsson"},{title:"Staða",value:"Beiðni send"}],u={args:{cardButtonProps:{title:"Blóðmeinafræði",leftIcon:j,eyebrowTitle:"Blóðrannsókn",eyebrowTimestamp:"30.11.26 14:15"},info:B},render:n=>e.jsx(c,{...n,info:n.info?.map(t=>({title:t.title,value:t.title==="Staða"?e.jsx(x,{title:t.value||""}):t.value}))})},d={args:{cardButtonProps:{title:"Blóðmeinafræði",leftIcon:j,eyebrowTitle:"Blóðrannsókn",eyebrowTimestamp:"30.11.26 14:15"},info:B,collapsible:!0},render:n=>e.jsx(c,{...n,info:n.info?.map(t=>({title:t.title,value:t.title==="Staða"?e.jsx(x,{title:t.value||""}):t.value}))})},m={args:{cardButtonProps:{title:""},info:[]}},p={args:{cardButtonProps:{title:"Loading state"},info:void 0,isLoading:!0}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    cardButtonProps: {
      title: ''
    } as any,
    info: []
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    cardButtonProps: {
      title: 'Loading state'
    } as any,
    info: undefined,
    isLoading: true
  }
}`,...p.parameters?.docs?.source}}};const oe=["Default","Collapsible","EmptyInfo","Loading"];export{d as Collapsible,u as Default,m as EmptyInfo,p as Loading,oe as __namedExportsOrder,se as default};
