import{j as a,V as p}from"./iframe-B-hEVdgV.js";import{C as d}from"./ChapterCardAccordion-DkcTV0_F.js";import"./preload-helper-Zf8nSx-t.js";import"./dateTime-fpHczNBu.js";import"./Weight-gVtSDCax.js";import"./xml-By6rjAqG.js";import"./useColors-Bqk5IObG.js";import"./css.generated-BbmyNoiE.js";import"./FontAwesome-ezXvgRMU.js";import"./AppButton-BRagdtT5.js";import"./index-C0k7x8EO.js";import"./bundle-mjs-CESebHNu.js";import"./Spinner-Dhdd_DMQ.js";import"./Text-iMRo778K.js";import"./Card-tZzU46-V.js";import"./CardButton-BT0R6Jg2.js";import"./TaskProgressBar-B3HH1aDT.js";import"./TaskPill-BfU29Fgp.js";import"./SwitchToggle-Bv9BIR6J.js";import"./Tag-DIbMaMTY.js";import"./Divider-DWJAKEDl.js";import"./useTranslation-DKyWQVbB.js";const T={title:"Commons/Components/ChapterCard/ChapterCardAccordion",component:d,tags:["autodocs"],decorators:[i=>a.jsx(p,{style:{padding:16},children:a.jsx(i,{})})],parameters:{docs:{description:{component:"An accordion-style chapter card that animates open and closed, displays description text, date/location info, and an optional CTA button."}}},argTypes:{caption:{control:"text"},description:{control:"text"},date:{control:"text",description:"Date string parsed internally using dayjs and wsDateFormat."},location:{control:"text"},dateCaption:{control:"text"},isCollapsed:{control:"boolean"},isExternalLink:{control:"boolean"},isLoading:{control:"boolean"},onPress:{control:!1,description:"Triggered when the accordion header is pressed."},onPressButton:{control:!1,description:"onPress function for internal button."}}},o=()=>{},s={_key:"chapter-1",caption:"ChapterCardAccordion",description:`Fyrsta lina.
Seinni lina.`,dateCaption:"Dags.:",date:"03-09-2026 11:15:20",location:"Reykjavík",onPress:o},t={args:{...s,isCollapsed:!0,onPressButton:o}},r={args:{...s,isCollapsed:!1,onPressButton:o}},e={args:{...s,isCollapsed:!1,onPressButton:o,isExternalLink:!0}},n={args:{...s,isCollapsed:!1,onPressButton:o,isLoading:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    isCollapsed: true,
    onPressButton: noop
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    isCollapsed: false,
    onPressButton: noop
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    isCollapsed: false,
    onPressButton: noop,
    isExternalLink: true
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    isCollapsed: false,
    onPressButton: noop,
    isLoading: true
  }
}`,...n.parameters?.docs?.source}}};const _=["Default","ExpandedWithButton","ExpandedWithExternalLinkButton","ExpandedWithLoadingButton"];export{t as Default,r as ExpandedWithButton,e as ExpandedWithExternalLinkButton,n as ExpandedWithLoadingButton,_ as __namedExportsOrder,T as default};
