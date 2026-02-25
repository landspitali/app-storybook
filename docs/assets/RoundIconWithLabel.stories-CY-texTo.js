import{j as o,V as a}from"./iframe-BQwTaADa.js";import{R as c}from"./RoundIconWithLabel-BAQXxMHa.js";import{C as i,R as m,g as u}from"./Ribbon-nNOOJ6XA.js";import"./xml-eTJ_1ewI.js";import"./preload-helper-Zf8nSx-t.js";import"./useColors-TdzNx-1W.js";import"./css.generated-BbmyNoiE.js";const d={DNA:o.jsx(u,{}),Ribbon:o.jsx(m,{}),Chlamydia:o.jsx(i,{})},f={title:"Assets/Icons/RoundIconWithLabel",component:c,render:r=>o.jsx(a,{style:{flex:1,justifyContent:"center",alignItems:"center"},children:o.jsx(a,{style:{bottom:"30%",borderWidth:r.showBorder?1:0,borderStyle:"dotted",borderColor:"black",backgroundColor:r.showBackgroundContrast?"#fafaff":"transparent",padding:10},children:o.jsx(c,{icon:d[r.iconName],text:r.text})})}),argTypes:{text:{control:"text",description:"Text displayed below the icon",maxLength:15},iconName:{name:"icon",control:{type:"select"},options:Object.keys(d),description:"Icon to display"},showBorder:{control:"boolean",description:"Show border around the RoundIconWithLabel component for debugging purposes",defaultValue:!1},showBackgroundContrast:{control:"boolean",description:"Show background contrast for debugging purposes",defaultValue:!0}}},e={args:{text:"Erfðarrannsókn",iconName:"DNA",showBorder:!1,showBackgroundContrast:!0}},t={args:{text:"Brjóstaskimun",iconName:"Ribbon",showBorder:!1,showBackgroundContrast:!0}},n={args:{text:"Húð- & kyn",iconName:"Chlamydia",showBorder:!1,showBackgroundContrast:!0}},s={args:{text:"Lorem Ipsum Dolor Sit Amet",iconName:"Ribbon",showBorder:!0,showBackgroundContrast:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Erfðarrannsókn',
    iconName: 'DNA',
    showBorder: false,
    showBackgroundContrast: true
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Brjóstaskimun',
    iconName: 'Ribbon',
    showBorder: false,
    showBackgroundContrast: true
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Húð- & kyn',
    iconName: 'Chlamydia',
    showBorder: false,
    showBackgroundContrast: true
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Lorem Ipsum Dolor Sit Amet',
    iconName: 'Ribbon',
    showBorder: true,
    showBackgroundContrast: true
  }
}`,...s.parameters?.docs?.source}}};const B=["First","Second","Third","LongText"];export{e as First,s as LongText,t as Second,n as Third,B as __namedExportsOrder,f as default};
