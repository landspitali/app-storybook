import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{r as n}from"./client-CWOoj4ER.js";import{L as r,M as i,c as a,t as o}from"./jsx-runtime-D3nZEPZm.js";import{n as s,t as c}from"./module-lR1eCq1T.js";import{n as l,t as u}from"./useColors-BPFFy23u.js";import{n as d,t as f}from"./Text-DTibF0Cq.js";import{n as p,r as m}from"./colors-CR0XLFWf.js";function h({userName:e,size:t=40,style:n}){let r=(0,g.useMemo)(()=>e?.at(0)?.toUpperCase(),[e])||``,a=l(),o=p(a.border);return(0,_.jsx)(i,{style:[y.container,{backgroundColor:r?v.at((r?.charCodeAt(0)||0)%v.length):a.backgroundBgBrandSubtle,width:t,height:t,borderColor:`rgba(${o.r}, ${o.g}, ${o.b}, 0.4)`},n],children:r&&(0,_.jsx)(f,{className:`font-semibold`,style:{lineHeight:t-4,textAlign:`center`,fontSize:t*.5,textAlignVertical:`center`,color:`white`},children:r})})}var g,_,v,y,b=e((()=>{g=t(n()),a(),d(),m(),u(),_=o(),v=[`#1565D8`,`#1E40AF`,`#1D4ED8`,`#C62828`,`#B91C1C`,`#15803D`,`#166534`,`#6B21A8`,`#7C3AED`,`#0F766E`,`#0E7490`,`#BE185D`],y=r.create({container:{position:`relative`,overflow:`hidden`,borderRadius:100,justifyContent:`center`,alignItems:`center`,borderWidth:2}}),h.__docgenInfo={description:``,methods:[],displayName:`Avatar`,props:{userName:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},size:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`40`,computed:!1}},style:{required:!1,tsType:{name:`union`,raw:`ViewStyle | ViewStyle[]`,elements:[{name:`ViewStyle`},{name:`Array`,elements:[{name:`ViewStyle`}],raw:`ViewStyle[]`}]},description:``}}}})),x,S,C,w,T,E,D;e((()=>{n(),a(),c(),b(),x=o(),S={title:`Commons/Components/Avatar`,component:h,decorators:[e=>(0,x.jsx)(i,{style:{flex:1,justifyContent:`flex-start`,alignItems:`center`,paddingTop:100},children:(0,x.jsx)(e,{})})],argTypes:{size:{control:{type:`number`},defaultValue:40}}},C=`a á b d ð e é f g h i í j k l m n o ó p r s t u ú v x y ý þ æ ö`.split(` `),console.log(C),w={args:{size:40},render:({size:e})=>(0,x.jsx)(s,{style:{display:`flex`,padding:16},contentContainerStyle:{flexDirection:`row`,flexWrap:`wrap`,justifyContent:`center`,gap:12},children:C.map(t=>(0,x.jsx)(i,{style:{display:`flex`},children:(0,x.jsx)(h,{size:e,userName:t},t)}))})},T={render:()=>(0,x.jsx)(h,{})},E={args:{size:80},render:({size:e})=>(0,x.jsx)(s,{style:{display:`flex`,padding:16},contentContainerStyle:{flexDirection:`row`,flexWrap:`wrap`,justifyContent:`center`,gap:12},children:C.map(t=>(0,x.jsx)(i,{style:{display:`flex`},children:(0,x.jsx)(h,{size:e,userName:t},t)}))})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    size: 40
  },
  render: ({
    size
  }: AvatarProps) => <ScrollView style={{
    display: 'flex',
    padding: 16
  }} contentContainerStyle={{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12
  }}>
      {alphabet.map(val => <View style={{
      display: 'flex'
    }}>
          <Avatar size={size} key={val} userName={val} />
        </View>)}
    </ScrollView>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Avatar />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    size: 80
  },
  render: ({
    size
  }: AvatarProps) => <ScrollView style={{
    display: 'flex',
    padding: 16
  }} contentContainerStyle={{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12
  }}>
      {alphabet.map(val => <View style={{
      display: 'flex'
    }}>
          <Avatar size={size} key={val} userName={val} />
        </View>)}
    </ScrollView>
}`,...E.parameters?.docs?.source}}},D=[`Default`,`Empty`,`Large`]}))();export{w as Default,T as Empty,E as Large,D as __namedExportsOrder,S as default};