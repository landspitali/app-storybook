import{j as n,V as i}from"./iframe-B-hEVdgV.js";import{C as c}from"./ChapterCard-AVnpXfvB.js";import{F as p}from"./FontAwesome-ezXvgRMU.js";import"./preload-helper-Zf8nSx-t.js";import"./bundle-mjs-CESebHNu.js";import"./CardButton-BT0R6Jg2.js";import"./TaskProgressBar-B3HH1aDT.js";import"./TaskPill-BfU29Fgp.js";import"./SwitchToggle-Bv9BIR6J.js";import"./useColors-Bqk5IObG.js";import"./css.generated-BbmyNoiE.js";import"./Tag-DIbMaMTY.js";import"./index-C0k7x8EO.js";import"./Text-iMRo778K.js";import"./xml-By6rjAqG.js";import"./CardIcon-D807PmIP.js";const y={title:"Commons/Components/ChapterCard/ChapterCard",component:c,tags:["autodocs"],decorators:[s=>n.jsx(i,{style:{padding:16},children:n.jsx(s,{})})],argTypes:{caption:{control:"text",description:"Primary text shown as the card title."},isError:{control:"boolean",description:"When true, applies the error border/background styling."},height:{control:"number",description:"Fixed height in pixels. (Component currently assumes a numeric pixel value.)"},rightIcon:{control:!1,description:"Optional render function for the right-side icon."},onPress:{action:"press",description:"Press handler forwarded to CardButton."},disabled:{control:"boolean",description:"Disables the button behavior (forwarded to CardButton)."}},parameters:{docs:{description:{component:"A wrapper around `CardButton` that maps `caption` to `title` and provides a default right chevron icon."}}}},r={args:{caption:"Chapter 1"}},o={args:{caption:"Failed to load chapter",isError:!0}},t={args:{caption:"Taller card",height:96}},e={args:{caption:"With info icon",rightIcon:()=>n.jsx(p,{name:"circle-info",variant:"regular"})}},a={args:{caption:null}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Chapter 1'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Failed to load chapter',
    isError: true
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Taller card',
    height: 96 as unknown as ChapterCardProps['height']
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'With info icon',
    rightIcon: () => <FontAwesome name='circle-info' variant='regular' />
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    caption: null
  }
}`,...a.parameters?.docs?.source}}};const I=["Default","ErrorState","CustomHeight","CustomRightIcon","NullCaption"];export{t as CustomHeight,e as CustomRightIcon,r as Default,o as ErrorState,a as NullCaption,I as __namedExportsOrder,y as default};
