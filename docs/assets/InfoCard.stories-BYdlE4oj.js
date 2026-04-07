import{j as e,r as i,A as x,V as l,v as N,P as R,U as h,w as A,T as _,s as V}from"./iframe-CVORTbkl.js";import{C as M}from"./Card-CVhWTodF.js";import{C as D}from"./CardButton-ZnJ4ss1u.js";import{D as H}from"./Divider-cboicak1.js";import{S as O}from"./Spinner-HpOrfyyC.js";import{T}from"./Text-7cdavWXQ.js";import{S as k,P as S}from"./xml-CG9CLr3d.js";import{u as j}from"./useColors-BlZyYDc7.js";import{f as b}from"./Ribbon-CVuK3ZYl.js";import"./preload-helper-Zf8nSx-t.js";import"./index-C0k7x8EO.js";import"./bundle-mjs-CN3GRbvm.js";import"./SwitchToggle-Nia7f0u3.js";import"./Tag-XGZ9iNiV.js";import"./FontAwesome-CENF4zvs.js";import"./colors-gjnxCQ4F.js";import"./css.generated-BbmyNoiE.js";function B(t){const n=j();return e.jsx(k,{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:e.jsx(S,{d:"M7 10L12 15L17 10",stroke:n.svgBase,strokeLinecap:"round",strokeLinejoin:"round"})})}B.__docgenInfo={description:"",methods:[],displayName:"SvgArrowDown2"};function P(t){return e.jsx(k,{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:e.jsx(S,{d:"M17 14L12 9L7 14",stroke:"#242328",strokeLinecap:"round",strokeLinejoin:"round"})})}P.__docgenInfo={description:"",methods:[],displayName:"SvgArrowUp2"};R.OS==="android"&&h.setLayoutAnimationEnabledExperimental&&h.setLayoutAnimationEnabledExperimental(!0);function z(t){if(!t)return e.jsx(e.Fragment,{});const{title:n,value:a}=t;return e.jsxs(l,{className:"flex-row justify-between gap-2 py-2 px-1 flex-wrap",children:[e.jsx(l,{className:"flex-none",children:e.jsx(T,{children:n})}),typeof a=="string"?e.jsx(T,{textBreakStrategy:"balanced",className:"grow text-right text-textTertiary",children:a}):e.jsx(l,{className:"items-end",children:a})]})}function o({cardButtonProps:t,info:n,isLoading:a=!1,collapsible:r=!1}){const[v,C]=i.useState(!r),[u,L]=i.useState(0),y=i.useRef(new x.Value(0)).current,w=i.useMemo(()=>e.jsxs(e.Fragment,{children:[e.jsx(H,{}),e.jsx(l,{className:"gap-1",children:n?.map((s,E)=>e.jsx(z,{...s},`info_val_${E}`))})]}),[n]);i.useEffect(()=>{x.timing(y,{toValue:v?u:0,duration:250,useNativeDriver:!1}).start()},[v,u,y]);const q=()=>{C(s=>!s)};return e.jsx(M,{variant:"elevated",className:"p-4",children:e.jsx(N,{disabled:!r,onPress:q,children:a?e.jsx(l,{className:"py-4",children:e.jsx(O,{})}):e.jsxs(e.Fragment,{children:[e.jsx(D,{className:"px-0",disabled:!0,numberOfLines:0,rightIcon:r?v?P:B:void 0,...t}),e.jsx(e.Fragment,{children:r?e.jsxs(x.View,{style:{height:y,overflow:"hidden"},children:[e.jsx(l,{style:{position:"absolute",opacity:0,zIndex:-1,left:0,right:0},pointerEvents:"none",onLayout:s=>{u===0&&L(s.nativeEvent.layout.height)},children:e.jsx(l,{children:w})}),e.jsx(l,{style:{opacity:u===0?0:1},children:w})]}):e.jsx(l,{children:w})})]})})})}o.__docgenInfo={description:"",methods:[],displayName:"InfoCard",props:{cardButtonProps:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  title?: string | null;
  leftIcon?: React.ComponentType<SvgProps>;
  className?: string | null;
  subTitle?: string | null;
  subTitleIcon?: React.ComponentType<SvgProps>;
  rightIcon?: React.ComponentType<SvgProps>;
  secondaryText?: string | null;
  statusTag?: string | null;
  statusTagColor?: string | null;
  eyebrowTimestamp?: string | null;
  eyebrowTitle?: string | null;
  border?: boolean;
  backgroundColor?: string | null;
  taskProgressBar?: TreatmentProgressItem[];
  onPress?: () => void;
  disabled?: boolean;
  toggleEnabled?: boolean;
  onToggleChange?: (value: boolean) => void;
  variant?: 'elevated';
  numberOfLines?: number;
}`,signature:{properties:[{key:"title",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"leftIcon",value:{name:"ReactComponentType",raw:"React.ComponentType<SvgProps>",elements:[{name:"SvgProps"}],required:!1}},{key:"className",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"subTitle",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"subTitleIcon",value:{name:"ReactComponentType",raw:"React.ComponentType<SvgProps>",elements:[{name:"SvgProps"}],required:!1}},{key:"rightIcon",value:{name:"ReactComponentType",raw:"React.ComponentType<SvgProps>",elements:[{name:"SvgProps"}],required:!1}},{key:"secondaryText",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"statusTag",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"statusTagColor",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"eyebrowTimestamp",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"eyebrowTitle",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"border",value:{name:"boolean",required:!1}},{key:"backgroundColor",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"taskProgressBar",value:{name:"Array",elements:[{name:"TreatmentProgressItem"}],raw:"TreatmentProgressItem[]",required:!1}},{key:"onPress",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"toggleEnabled",value:{name:"boolean",required:!1}},{key:"onToggleChange",value:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}},required:!1}},{key:"variant",value:{name:"literal",value:"'elevated'",required:!1}},{key:"numberOfLines",value:{name:"number",required:!1}}]}},description:""},info:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"InfoProps | null",elements:[{name:"signature",type:"object",raw:`{
  title?: string | null;
  value?: string | ReactElement | null;
}`,signature:{properties:[{key:"title",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"value",value:{name:"union",raw:"string | ReactElement | null",elements:[{name:"string"},{name:"ReactElement"},{name:"null"}],required:!1}}]}},{name:"null"}]}],raw:"Array<InfoProps | null>"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},collapsible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};function f({title:t,variant:n="blue"}){const a=j();let r=a.pillBlue;switch(n){case"yellow":r=a.pillYellow;break;case"green":r=a.pillGreen;break;case"lightBlue":r=a.pillLightBlue;break;case"blue":r=a.pillBlue}return e.jsx(A,{style:[F.statusContainer,{backgroundColor:r}],children:e.jsx(_,{variant:"body",color:"primary",fontWeight:"600",lineHeight:18,children:t})})}const F=V.create({statusContainer:{borderRadius:5,paddingHorizontal:8,paddingVertical:2,justifyContent:"center",alignSelf:"flex-start"}});f.__docgenInfo={description:"",methods:[],displayName:"Pill",props:{title:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'blue' | 'green' | 'yellow' | 'lightBlue'",elements:[{name:"literal",value:"'blue'"},{name:"literal",value:"'green'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'lightBlue'"}]},description:"",defaultValue:{value:"'blue'",computed:!1}}}};const oe={title:"Commons/Components/InfoCard",component:o,decorators:[t=>e.jsx(l,{style:{padding:16},children:e.jsx(t,{})})]},U=[{title:"Tegund",value:`Blóðmeinafræði
    Klínísk lífefnafræði
    Tekið af blóðtökusveit`},{title:"Tímasetning",value:"30.11.2026 14:15"},{title:"Staðsetning",value:"HNE (FV-A4)"},{title:"Læknir",value:"Óskar Einarsson"},{title:"Staða",value:"Beiðni send"}],m={args:{cardButtonProps:{title:"Blóðmeinafræði",leftIcon:b,eyebrowTitle:"Blóðrannsókn",eyebrowTimestamp:"30.11.26 14:15"},info:U},render:t=>e.jsx(o,{...t,info:t.info?.map(n=>({title:n.title,value:n.title==="Staða"?e.jsx(f,{title:n.value||""}):n.value}))})},I=[{title:"Stutt",value:"Stutt"},{title:"Multiline",value:`Blóðmeinafræði
    Klínísk lífefnafræði
    Tekið af blóðtökusveit`},{title:"Miðlungs",value:"Aðeins lengri texti"},{title:"Langt",value:"Allra lengsta sem kemst fyrir í einni línu---"},{title:"Lengra",value:"Kemst útfyrir fyrstu línuna þótt ekki multiline"},{title:"Mjög Langt",value:"Rosalega langur texti fyrir þegar það birtist fyrir notendur sem þurfa sérstaklega langan texta"},{title:"Langt multiline",value:`Rosalega langur texti fyrir þegar það birtist
    Önnur lína af svakalega löngum texta og fleira og meira`}],d={args:{cardButtonProps:{title:"Blóðmeinafræði",leftIcon:b,eyebrowTitle:"Blóðrannsókn"},info:I},render:t=>e.jsx(o,{...t,info:t.info?.map(n=>({title:n.title,value:n.title==="Staða"?e.jsx(f,{title:n.value||""}):n.value}))})},g={args:{cardButtonProps:{title:"Blóðmeinafræði",leftIcon:b,eyebrowTitle:"Blóðrannsókn",eyebrowTimestamp:"30.11.26 14:15"},info:I,collapsible:!0},render:t=>e.jsx(o,{...t,info:t.info?.map(n=>({title:n.title,value:n.title==="Staða"?e.jsx(f,{title:n.value||""}):n.value}))})},p={args:{cardButtonProps:{title:""},info:[]}},c={args:{cardButtonProps:{title:"Loading state"},info:void 0,isLoading:!0}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    cardButtonProps: {
      title: 'Blóðmeinafræði',
      leftIcon: BloodTest,
      eyebrowTitle: 'Blóðrannsókn'
    },
    info: lengthSampleInfo
  },
  render: (args: StoryProps) => {
    return <InfoCard {...args} info={args.info?.map(x => ({
      title: x.title,
      // Nativewind doesn't allow non-serializable props, so we do it like this to showcase passing JSX elements in value
      value: x.title === 'Staða' ? <Pill title={x.value || ''} /> : x.value
    }))} />;
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    cardButtonProps: {
      title: 'Blóðmeinafræði',
      leftIcon: BloodTest,
      eyebrowTitle: 'Blóðrannsókn',
      eyebrowTimestamp: '30.11.26 14:15'
    },
    info: lengthSampleInfo,
    collapsible: true
  },
  render: (args: StoryProps) => {
    return <InfoCard {...args} info={args.info?.map(x => ({
      title: x.title,
      // Nativewind doesn't allow non-serializable props, so we do it like this to showcase passing JSX elements in value
      value: x.title === 'Staða' ? <Pill title={x.value || ''} /> : x.value
    }))} />;
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    cardButtonProps: {
      title: ''
    } as any,
    info: []
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    cardButtonProps: {
      title: 'Loading state'
    } as any,
    info: undefined,
    isLoading: true
  }
}`,...c.parameters?.docs?.source}}};const ue=["Default","TextLength","Collapsible","EmptyInfo","Loading"];export{g as Collapsible,m as Default,p as EmptyInfo,c as Loading,d as TextLength,ue as __namedExportsOrder,oe as default};
