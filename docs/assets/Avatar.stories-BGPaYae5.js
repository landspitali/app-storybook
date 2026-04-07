import{r as f,j as e,V as i,s as x,S as y}from"./iframe-CVORTbkl.js";import{T as g}from"./Text-7cdavWXQ.js";import{h as w}from"./colors-gjnxCQ4F.js";import{u as h}from"./useColors-BlZyYDc7.js";import"./preload-helper-Zf8nSx-t.js";import"./bundle-mjs-CN3GRbvm.js";import"./css.generated-BbmyNoiE.js";const m=["#1565D8","#1E40AF","#1D4ED8","#C62828","#B91C1C","#15803D","#166534","#6B21A8","#7C3AED","#0F766E","#0E7490","#BE185D"];function n({userName:t,size:r=40,style:u}){const a=f.useMemo(()=>t?.at(0)?.toUpperCase(),[t])||"",d=h(),c=w(d.border);return e.jsx(i,{style:[C.container,{backgroundColor:a?m.at((a?.charCodeAt(0)||0)%m.length):d.backgroundBgBrandSubtle,width:r,height:r,borderColor:`rgba(${c.r}, ${c.g}, ${c.b}, 0.4)`},u],children:a&&e.jsx(g,{className:"font-semibold",style:{lineHeight:r-4,textAlign:"center",fontSize:r*.5,textAlignVertical:"center",color:"white"},children:a})})}const C=x.create({container:{position:"relative",overflow:"hidden",borderRadius:100,justifyContent:"center",alignItems:"center",borderWidth:2}});n.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{userName:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"40",computed:!1}},style:{required:!1,tsType:{name:"union",raw:"ViewStyle | ViewStyle[]",elements:[{name:"ViewStyle"},{name:"Array",elements:[{name:"ViewStyle"}],raw:"ViewStyle[]"}]},description:""}}};const E={title:"Commons/Components/Avatar",component:n,decorators:[t=>e.jsx(i,{style:{flex:1,justifyContent:"flex-start",alignItems:"center",paddingTop:100},children:e.jsx(t,{})})],argTypes:{size:{control:{type:"number"},defaultValue:40}}},p="a á b d ð e é f g h i í j k l m n o ó p r s t u ú v x y ý þ æ ö".split(" ");console.log(p);const s={args:{size:40},render:({size:t})=>e.jsx(y,{style:{display:"flex",padding:16},contentContainerStyle:{flexDirection:"row",flexWrap:"wrap",justifyContent:"center",gap:12},children:p.map(r=>e.jsx(i,{style:{display:"flex"},children:e.jsx(n,{size:t,userName:r},r)}))})},o={render:()=>e.jsx(n,{})},l={args:{size:80},render:({size:t})=>e.jsx(y,{style:{display:"flex",padding:16},contentContainerStyle:{flexDirection:"row",flexWrap:"wrap",justifyContent:"center",gap:12},children:p.map(r=>e.jsx(i,{style:{display:"flex"},children:e.jsx(n,{size:t,userName:r},r)}))})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Avatar />
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const z=["Default","Empty","Large"];export{s as Default,o as Empty,l as Large,z as __namedExportsOrder,E as default};
