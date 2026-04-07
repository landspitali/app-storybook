import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{r as n}from"./client-CWOoj4ER.js";import{C as r,L as i,M as a,N as o,P as s,c,t as l,v as u}from"./jsx-runtime-D3nZEPZm.js";import{i as d,n as f,t as ee}from"./theme-Cr_InoL-.js";import{n as p,t as m}from"./useColors-BPFFy23u.js";import{n as h,t as g}from"./Spinner-DLB_4DAX.js";import{n as _,t as v}from"./Text-DTibF0Cq.js";import{n as y,t as b}from"./Card-DmOGX43c.js";import{n as x,t as S}from"./CardButton-BxsocnOE.js";import{f as C,l as w,t as T}from"./module-BpfwklbD.js";import{t as te,u as E}from"./assets-CEGzIyTJ.js";import{n as D,t as O}from"./Divider-C_BlCPzx.js";function k(e){let t=p();return(0,A.jsx)(C,{width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,A.jsx)(w,{d:`M7 10L12 15L17 10`,stroke:t.svgBase,strokeLinecap:`round`,strokeLinejoin:`round`})})}var A,j=e((()=>{n(),T(),m(),A=l(),k.__docgenInfo={description:``,methods:[],displayName:`SvgArrowDown2`}}));function M(e){return(0,N.jsx)(C,{width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,N.jsx)(w,{d:`M17 14L12 9L7 14`,stroke:`#242328`,strokeLinecap:`round`,strokeLinejoin:`round`})})}var N,P=e((()=>{n(),T(),N=l(),M.__docgenInfo={description:``,methods:[],displayName:`SvgArrowUp2`}}));function F(e){if(!e)return(0,R.jsx)(R.Fragment,{});let{title:t,value:n}=e;return(0,R.jsxs)(a,{className:`flex-row justify-between gap-2 py-2 px-1 flex-wrap`,children:[(0,R.jsx)(a,{className:`flex-none`,children:(0,R.jsx)(v,{children:t})}),typeof n==`string`?(0,R.jsx)(v,{textBreakStrategy:`balanced`,className:`grow text-right text-textTertiary`,children:n}):(0,R.jsx)(a,{className:`items-end`,children:n})]})}function I({cardButtonProps:e,info:t,isLoading:n=!1,collapsible:i=!1}){let[o,s]=(0,L.useState)(!i),[c,l]=(0,L.useState)(0),d=(0,L.useRef)(new r.Value(0)).current,f=(0,L.useMemo)(()=>(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(O,{}),(0,R.jsx)(a,{className:`gap-1`,children:t?.map((e,t)=>(0,R.jsx)(F,{...e},`info_val_${t}`))})]}),[t]);return(0,L.useEffect)(()=>{r.timing(d,{toValue:o?c:0,duration:250,useNativeDriver:!1}).start()},[o,c,d]),(0,R.jsx)(b,{variant:`elevated`,className:`p-4`,children:(0,R.jsx)(u,{disabled:!i,onPress:()=>{s(e=>!e)},children:n?(0,R.jsx)(a,{className:`py-4`,children:(0,R.jsx)(g,{})}):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(S,{className:`px-0`,disabled:!0,numberOfLines:0,rightIcon:i?o?M:k:void 0,...e}),(0,R.jsx)(R.Fragment,{children:i?(0,R.jsxs)(r.View,{style:{height:d,overflow:`hidden`},children:[(0,R.jsx)(a,{style:{position:`absolute`,opacity:0,zIndex:-1,left:0,right:0},pointerEvents:`none`,onLayout:e=>{c===0&&l(e.nativeEvent.layout.height)},children:(0,R.jsx)(a,{children:f})}),(0,R.jsx)(a,{style:{opacity:c===0?0:1},children:f})]}):(0,R.jsx)(a,{children:f})})]})})})}var L,R,z=e((()=>{L=t(n()),c(),y(),x(),D(),h(),_(),j(),P(),R=l(),o.OS===`android`&&s.setLayoutAnimationEnabledExperimental&&s.setLayoutAnimationEnabledExperimental(!0),I.__docgenInfo={description:``,methods:[],displayName:`InfoCard`,props:{cardButtonProps:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{
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
}`,signature:{properties:[{key:`title`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`leftIcon`,value:{name:`ReactComponentType`,raw:`React.ComponentType<SvgProps>`,elements:[{name:`SvgProps`}],required:!1}},{key:`className`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`subTitle`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`subTitleIcon`,value:{name:`ReactComponentType`,raw:`React.ComponentType<SvgProps>`,elements:[{name:`SvgProps`}],required:!1}},{key:`rightIcon`,value:{name:`ReactComponentType`,raw:`React.ComponentType<SvgProps>`,elements:[{name:`SvgProps`}],required:!1}},{key:`secondaryText`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`statusTag`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`statusTagColor`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`eyebrowTimestamp`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`eyebrowTitle`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`border`,value:{name:`boolean`,required:!1}},{key:`backgroundColor`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`taskProgressBar`,value:{name:`Array`,elements:[{name:`TreatmentProgressItem`}],raw:`TreatmentProgressItem[]`,required:!1}},{key:`onPress`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!1}},{key:`disabled`,value:{name:`boolean`,required:!1}},{key:`toggleEnabled`,value:{name:`boolean`,required:!1}},{key:`onToggleChange`,value:{name:`signature`,type:`function`,raw:`(value: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`value`}],return:{name:`void`}},required:!1}},{key:`variant`,value:{name:`literal`,value:`'elevated'`,required:!1}},{key:`numberOfLines`,value:{name:`number`,required:!1}}]}},description:``},info:{required:!1,tsType:{name:`Array`,elements:[{name:`union`,raw:`InfoProps | null`,elements:[{name:`signature`,type:`object`,raw:`{
  title?: string | null;
  value?: string | ReactElement | null;
}`,signature:{properties:[{key:`title`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`value`,value:{name:`union`,raw:`string | ReactElement | null`,elements:[{name:`string`},{name:`ReactElement`},{name:`null`}],required:!1}}]}},{name:`null`}]}],raw:`Array<InfoProps | null>`},description:``},isLoading:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},collapsible:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}}));function B({title:e,variant:t=`blue`}){let n=p(),r=n.pillBlue;switch(t){case`yellow`:r=n.pillYellow;break;case`green`:r=n.pillGreen;break;case`lightBlue`:r=n.pillLightBlue;break;case`blue`:r=n.pillBlue}return(0,V.jsx)(ee,{style:[H.statusContainer,{backgroundColor:r}],children:(0,V.jsx)(f,{variant:`body`,color:`primary`,fontWeight:`600`,lineHeight:18,children:e})})}var V,H,U=e((()=>{n(),c(),d(),m(),V=l(),H=i.create({statusContainer:{borderRadius:5,paddingHorizontal:8,paddingVertical:2,justifyContent:`center`,alignSelf:`flex-start`}}),B.__docgenInfo={description:``,methods:[],displayName:`Pill`,props:{title:{required:!0,tsType:{name:`string`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'blue' | 'green' | 'yellow' | 'lightBlue'`,elements:[{name:`literal`,value:`'blue'`},{name:`literal`,value:`'green'`},{name:`literal`,value:`'yellow'`},{name:`literal`,value:`'lightBlue'`}]},description:``,defaultValue:{value:`'blue'`,computed:!1}}}}})),W,G,K,q,J,Y,X,Z,Q,$;e((()=>{n(),c(),z(),U(),te(),W=l(),G={title:`Commons/Components/InfoCard`,component:I,decorators:[e=>(0,W.jsx)(a,{style:{padding:16},children:(0,W.jsx)(e,{})})]},K=[{title:`Tegund`,value:`Blóðmeinafræði
    Klínísk lífefnafræði
    Tekið af blóðtökusveit`},{title:`Tímasetning`,value:`30.11.2026 14:15`},{title:`Staðsetning`,value:`HNE (FV-A4)`},{title:`Læknir`,value:`Óskar Einarsson`},{title:`Staða`,value:`Beiðni send`}],q={args:{cardButtonProps:{title:`Blóðmeinafræði`,leftIcon:E,eyebrowTitle:`Blóðrannsókn`,eyebrowTimestamp:`30.11.26 14:15`},info:K},render:e=>(0,W.jsx)(I,{...e,info:e.info?.map(e=>({title:e.title,value:e.title===`Staða`?(0,W.jsx)(B,{title:e.value||``}):e.value}))})},J=[{title:`Stutt`,value:`Stutt`},{title:`Multiline`,value:`Blóðmeinafræði
    Klínísk lífefnafræði
    Tekið af blóðtökusveit`},{title:`Miðlungs`,value:`Aðeins lengri texti`},{title:`Langt`,value:`Allra lengsta sem kemst fyrir í einni línu---`},{title:`Lengra`,value:`Kemst útfyrir fyrstu línuna þótt ekki multiline`},{title:`Mjög Langt`,value:`Rosalega langur texti fyrir þegar það birtist fyrir notendur sem þurfa sérstaklega langan texta`},{title:`Langt multiline`,value:`Rosalega langur texti fyrir þegar það birtist
    Önnur lína af svakalega löngum texta og fleira og meira`}],Y={args:{cardButtonProps:{title:`Blóðmeinafræði`,leftIcon:E,eyebrowTitle:`Blóðrannsókn`},info:J},render:e=>(0,W.jsx)(I,{...e,info:e.info?.map(e=>({title:e.title,value:e.title===`Staða`?(0,W.jsx)(B,{title:e.value||``}):e.value}))})},X={args:{cardButtonProps:{title:`Blóðmeinafræði`,leftIcon:E,eyebrowTitle:`Blóðrannsókn`,eyebrowTimestamp:`30.11.26 14:15`},info:J,collapsible:!0},render:e=>(0,W.jsx)(I,{...e,info:e.info?.map(e=>({title:e.title,value:e.title===`Staða`?(0,W.jsx)(B,{title:e.value||``}):e.value}))})},Z={args:{cardButtonProps:{title:``},info:[]}},Q={args:{cardButtonProps:{title:`Loading state`},info:void 0,isLoading:!0}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    cardButtonProps: {
      title: ''
    } as any,
    info: []
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    cardButtonProps: {
      title: 'Loading state'
    } as any,
    info: undefined,
    isLoading: true
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`TextLength`,`Collapsible`,`EmptyInfo`,`Loading`]}))();export{X as Collapsible,q as Default,Z as EmptyInfo,Q as Loading,Y as TextLength,$ as __namedExportsOrder,G as default};