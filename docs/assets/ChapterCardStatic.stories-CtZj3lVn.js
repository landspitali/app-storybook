import{j as i,V as c}from"./iframe-B-hEVdgV.js";import{C as d}from"./ChapterCardStatic-0wezjSUN.js";import"./preload-helper-Zf8nSx-t.js";import"./dateTime-fpHczNBu.js";import"./Weight-gVtSDCax.js";import"./xml-By6rjAqG.js";import"./useColors-Bqk5IObG.js";import"./css.generated-BbmyNoiE.js";import"./AppButton-BRagdtT5.js";import"./index-C0k7x8EO.js";import"./bundle-mjs-CESebHNu.js";import"./Spinner-Dhdd_DMQ.js";import"./FontAwesome-ezXvgRMU.js";import"./Text-iMRo778K.js";import"./Card-tZzU46-V.js";import"./CardButton-BT0R6Jg2.js";import"./TaskProgressBar-B3HH1aDT.js";import"./TaskPill-BfU29Fgp.js";import"./SwitchToggle-Bv9BIR6J.js";import"./Tag-DIbMaMTY.js";import"./Divider-DWJAKEDl.js";import"./useTranslation-DKyWQVbB.js";const T={title:"Commons/Components/ChapterCard/ChapterCardStatic",component:d,tags:["autodocs"],decorators:[p=>i.jsx(c,{style:{padding:16},children:i.jsx(p,{})})],parameters:{docs:{description:{component:"A non-collapsible chapter card that shows description, date/location info, and an optional CTA button."}}},argTypes:{caption:{control:"text"},description:{control:"text"},date:{control:"text",description:"Date string parsed internally using dayjs and wsDateFormat."},location:{control:"text"},dateCaption:{control:"text"},isExternalLink:{control:"boolean"},isLoading:{control:"boolean"},onPress:{control:!1,description:"Not used by this component (kept for prop parity)."},onPressButton:{control:!1,description:"CTA handler. Button renders only when provided."}}},a=()=>{},t={caption:"ChapterCardStatic",description:`This is the first line.
And here is the second line.`,dateCaption:"Dags:",date:"03-09-2026 11:15:29",location:"Reykjavík"},o={args:{...t}},e={args:{...t,onPressButton:a}},n={args:{...t,onPressButton:a,isExternalLink:!0}},r={args:{...t,onPressButton:a,isLoading:!0}},s={args:{...t,caption:"A very long chapter title that should wrap onto multiple lines nicely",description:`Line one of a longer description.
Line two adds more detail.
Line three keeps going to show spacing.`,onPressButton:a}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    onPressButton: noop
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    onPressButton: noop,
    isExternalLink: true
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    onPressButton: noop,
    isLoading: true
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    caption: 'A very long chapter title that should wrap onto multiple lines nicely',
    description: 'Line one of a longer description.\\nLine two adds more detail.\\nLine three keeps going to show spacing.',
    onPressButton: noop
  }
}`,...s.parameters?.docs?.source}}};const R=["Default","WithButton","WithExternalLinkButton","WithLoadingButton","LongContent"];export{o as Default,s as LongContent,e as WithButton,n as WithExternalLinkButton,r as WithLoadingButton,R as __namedExportsOrder,T as default};
