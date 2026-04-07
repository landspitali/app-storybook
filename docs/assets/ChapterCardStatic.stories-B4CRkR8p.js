import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{r as n}from"./client-CWOoj4ER.js";import{L as r,M as i,c as a,t as o}from"./jsx-runtime-D3nZEPZm.js";import{r as s,t as c}from"./es-EqOyRdpy.js";import{t as l}from"./dist-CAGGA5su.js";import{i as u,n as d}from"./theme-Cr_InoL-.js";import{n as f,t as p}from"./useColors-BPFFy23u.js";import{n as m,t as h}from"./AppButton-4KDcz034.js";import{n as g,t as _}from"./Card-DmOGX43c.js";import{n as v,t as y}from"./CardButton-BxsocnOE.js";import{l as b,p as x,s as S,t as C}from"./assets-CEGzIyTJ.js";import{a as w,i as T,n as E,o as D,r as O,t as k}from"./dateTime-C121vuJw.js";import{n as A,t as j}from"./Divider-C_BlCPzx.js";var M,N,P,F,I,L,R=e((()=>{n(),a(),M=l(),N=t(D()),P=t(w()),c(),u(),C(),k(),p(),m(),g(),v(),A(),F=o(),I=({caption:e,description:t,date:n,location:r,onPressButton:a,dateCaption:o,isExternalLink:c,isLoading:l})=>{let{t:u,i18n:p}=s(`more`);N.default.extend(P.default);let m=(0,M.useTheme)(),g=f(),v=!!a;return(0,F.jsxs)(_,{variant:`elevated`,children:[(0,F.jsx)(y,{className:`mt-1 mx-1`,numberOfLines:5,title:e}),(0,F.jsxs)(i,{className:`px-5 pb-5`,children:[(0,F.jsx)(j,{}),(0,F.jsxs)(i,{children:[(0,F.jsx)(i,{children:(0,F.jsxs)(i,{children:[(0,F.jsx)(d,{color:`textSecondary`,lineHeight:18,fontSize:14,children:u(`Lýsing`)}),t?.split(`
`).map((e,t)=>(0,F.jsx)(d,{lineHeight:24,fontSize:16,children:e},t))]})}),(0,F.jsxs)(i,{style:L.infoItems,children:[(0,F.jsxs)(i,{style:L.infoItem,children:[(0,F.jsx)(i,{style:L.infoItemIcon,children:(0,F.jsx)(b,{})}),(0,F.jsx)(d,{style:L.infoItemText,color:`primary`,children:`${o} ${n&&O((0,N.default)(n,T).format(E),p.language)}`})]}),(0,F.jsxs)(i,{style:L.infoItem,children:[(0,F.jsx)(i,{style:L.infoItemIcon,children:(0,F.jsx)(S,{})}),(0,F.jsx)(d,{style:L.infoItemText,color:`primary`,children:r})]})]}),v&&(0,F.jsx)(i,{children:(0,F.jsx)(i,{style:[{paddingTop:m.spacing.s}],children:(0,F.jsx)(h,{title:u(`Opna spurningalista`),iconRight:c?(0,F.jsx)(x,{stroke:g.onPrimary}):void 0,onPress:a,round:!0,isLoading:l})})})]})]})]})},L=r.create({infoItems:{display:`flex`,flexDirection:`column`,paddingTop:10},infoItem:{display:`flex`,flexDirection:`row`,paddingBottom:5},infoItemIcon:{alignSelf:`center`,paddingRight:10},infoItemText:{fontSize:14,lineHeight:22}}),I.__docgenInfo={description:``,methods:[],displayName:`ChapterCardStatic`,props:{caption:{required:!1,tsType:{name:`string`},description:``},onPress:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},description:{required:!1,tsType:{name:`string`},description:``},date:{required:!1,tsType:{name:`string`},description:``},location:{required:!1,tsType:{name:`string`},description:``},dateCaption:{required:!0,tsType:{name:`string`},description:``},onPressButton:{required:!0,tsType:{name:`union`,raw:`(() => any) | null`,elements:[{name:`unknown`},{name:`null`}]},description:``},isExternalLink:{required:!1,tsType:{name:`boolean`},description:``},isLoading:{required:!1,tsType:{name:`boolean`},description:``}}}})),z,B,V,H,U,W,G,K,q,J;e((()=>{n(),a(),R(),z=o(),B={title:`Commons/Components/ChapterCard/ChapterCardStatic`,component:I,tags:[`autodocs`],decorators:[e=>(0,z.jsx)(i,{style:{padding:16},children:(0,z.jsx)(e,{})})],parameters:{docs:{description:{component:`A non-collapsible chapter card that shows description, date/location info, and an optional CTA button.`}}},argTypes:{caption:{control:`text`},description:{control:`text`},date:{control:`text`,description:`Date string parsed internally using dayjs and wsDateFormat.`},location:{control:`text`},dateCaption:{control:`text`},isExternalLink:{control:`boolean`},isLoading:{control:`boolean`},onPress:{control:!1,description:`Not used by this component (kept for prop parity).`},onPressButton:{control:!1,description:`CTA handler. Button renders only when provided.`}}},V=()=>{},H={caption:`ChapterCardStatic`,description:`This is the first line.
And here is the second line.`,dateCaption:`Dags:`,date:`03-09-2026 11:15:29`,location:`Reykjavík`},U={args:{...H}},W={args:{...H,onPressButton:V}},G={args:{...H,onPressButton:V,isExternalLink:!0}},K={args:{...H,onPressButton:V,isLoading:!0}},q={args:{...H,caption:`A very long chapter title that should wrap onto multiple lines nicely`,description:`Line one of a longer description.
Line two adds more detail.
Line three keeps going to show spacing.`,onPressButton:V}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    onPressButton: noop
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    onPressButton: noop,
    isExternalLink: true
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    onPressButton: noop,
    isLoading: true
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    caption: 'A very long chapter title that should wrap onto multiple lines nicely',
    description: 'Line one of a longer description.\\nLine two adds more detail.\\nLine three keeps going to show spacing.',
    onPressButton: noop
  }
}`,...q.parameters?.docs?.source}}},J=[`Default`,`WithButton`,`WithExternalLinkButton`,`WithLoadingButton`,`LongContent`]}))();export{U as Default,q as LongContent,W as WithButton,G as WithExternalLinkButton,K as WithLoadingButton,J as __namedExportsOrder,B as default};