import{j as e,V as d,c as x,S as f}from"./iframe-B-hEVdgV.js";import{B as n}from"./BaseScrollView-B9gQl3Mj.js";import{T as u}from"./Text-iMRo778K.js";import"./preload-helper-Zf8nSx-t.js";import"./ChapterCardAccordion-DkcTV0_F.js";import"./dateTime-fpHczNBu.js";import"./Weight-gVtSDCax.js";import"./xml-By6rjAqG.js";import"./useColors-Bqk5IObG.js";import"./css.generated-BbmyNoiE.js";import"./FontAwesome-ezXvgRMU.js";import"./AppButton-BRagdtT5.js";import"./index-C0k7x8EO.js";import"./bundle-mjs-CESebHNu.js";import"./Spinner-Dhdd_DMQ.js";import"./Card-tZzU46-V.js";import"./CardButton-BT0R6Jg2.js";import"./TaskProgressBar-B3HH1aDT.js";import"./TaskPill-BfU29Fgp.js";import"./SwitchToggle-Bv9BIR6J.js";import"./Tag-DIbMaMTY.js";import"./Divider-DWJAKEDl.js";import"./useTranslation-DKyWQVbB.js";import"./AlertModal-DPSwbpIi.js";import"./PhoneNumberInput-D6ix-1zF.js";import"./InputField-BQIQ4Jv8.js";import"./Pill-BDUyAuVV.js";import"./ChapterCard-AVnpXfvB.js";import"./CardIcon-D807PmIP.js";import"./SuccessBanner-BtlAJs_O.js";import"./NotificationBadgeWrapper-j6YzXRnC.js";import"./ChapterCardStatic-0wezjSUN.js";import"./LocationPinThick-CoyXG0et.js";import"./Section-CV9vioSw.js";import"./avatar_02-DKvHTWQE.js";import"./RoundIconWithLabel-DugRrJrk.js";import"./MessageRow-Bii91OxD.js";const m={},p={},g=()=>{let r="#";const o="0123456789abcdef";for(let t=0;t<6;t++){let h=Math.floor(Math.random()*16),w=o[h];r+=w}return r},S=r=>{if(m[r])return m[r];let o;do o=g();while(p[o]);return m[r]=o,p[o]=!0,o};function s({rows:r=20}){return e.jsx(d,{style:{gap:12},children:Array.from({length:r}).map((o,t)=>e.jsxs(d,{style:{gap:6},children:[e.jsxs(u,{children:["Field ",t+1]}),e.jsx(x,{placeholder:`Type here… (${t+1})`,style:{height:44,borderWidth:1,borderRadius:10,paddingHorizontal:12,backgroundColor:S(`${t}`)},returnKeyType:t===r-1?"done":"next"})]},t))})}s.__docgenInfo={description:"",methods:[],displayName:"DemoContent",props:{rows:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"20",computed:!1}}}};const te={title:"Commons/Components/Scroll/BaseScrollView",component:n,decorators:[r=>e.jsxs(d,{style:f.absoluteFill,children:[e.jsx(d,{className:"m-4 bg-alertAlertDotRed justify-center align-center rounded",children:e.jsx(u,{className:"color-white self-center p-2",style:{fontSize:18,fontWeight:"600"},children:"Press full screen (bottom right)"})}),e.jsx(r,{})]})]},a={render:()=>e.jsx(n,{children:e.jsx(s,{rows:12})})},i={render:()=>e.jsx(n,{roundedButtons:!1,buttonProps:{title:"Save",onPress:()=>{},widthPercentage:"100%"},children:e.jsx(s,{rows:18})})},l={render:()=>e.jsx(n,{roundedButtons:!0,buttonProps:{title:"Confirm",onPress:()=>{},widthPercentage:"50%"},secondButtonProps:{title:"Cancel",onPress:()=>{},widthPercentage:"50%"},children:e.jsx(s,{rows:18})})},c={render:()=>e.jsx(n,{noHeader:!0,children:e.jsx(s,{rows:12})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <BaseScrollView>
      <DemoContent rows={12} />
    </BaseScrollView>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <BaseScrollView roundedButtons={false}
  // cast so Storybook doesn’t care about exact prop shape
  buttonProps={{
    title: 'Save',
    onPress: () => {},
    widthPercentage: '100%'
  } as any}>
      <DemoContent rows={18} />
    </BaseScrollView>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <BaseScrollView roundedButtons buttonProps={{
    title: 'Confirm',
    onPress: () => {},
    widthPercentage: '50%'
  } as any} secondButtonProps={{
    title: 'Cancel',
    onPress: () => {},
    widthPercentage: '50%'
  } as any}>
      <DemoContent rows={18} />
    </BaseScrollView>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <BaseScrollView noHeader>
      <DemoContent rows={12} />
    </BaseScrollView>
}`,...c.parameters?.docs?.source}}};const ne=["Default","FixedButton","RoundedButtons","NoHeader"];export{a as Default,i as FixedButton,c as NoHeader,l as RoundedButtons,ne as __namedExportsOrder,te as default};
