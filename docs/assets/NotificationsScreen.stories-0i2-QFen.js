import{a as t,_ as m}from"./BaseScrollView-B9gQl3Mj.js";import{j as r,G as p}from"./iframe-B-hEVdgV.js";import{N as d}from"./NavigationContainer-CqwEyzWu.js";import"./ChapterCardAccordion-DkcTV0_F.js";import"./dateTime-fpHczNBu.js";import"./Weight-gVtSDCax.js";import"./xml-By6rjAqG.js";import"./useColors-Bqk5IObG.js";import"./css.generated-BbmyNoiE.js";import"./FontAwesome-ezXvgRMU.js";import"./AppButton-BRagdtT5.js";import"./index-C0k7x8EO.js";import"./bundle-mjs-CESebHNu.js";import"./Spinner-Dhdd_DMQ.js";import"./Text-iMRo778K.js";import"./Card-tZzU46-V.js";import"./CardButton-BT0R6Jg2.js";import"./TaskProgressBar-B3HH1aDT.js";import"./TaskPill-BfU29Fgp.js";import"./SwitchToggle-Bv9BIR6J.js";import"./Tag-DIbMaMTY.js";import"./Divider-DWJAKEDl.js";import"./useTranslation-DKyWQVbB.js";import"./AlertModal-DPSwbpIi.js";import"./preload-helper-Zf8nSx-t.js";import"./PhoneNumberInput-D6ix-1zF.js";import"./InputField-BQIQ4Jv8.js";import"./Pill-BDUyAuVV.js";import"./ChapterCard-AVnpXfvB.js";import"./CardIcon-D807PmIP.js";import"./SuccessBanner-BtlAJs_O.js";import"./NotificationBadgeWrapper-j6YzXRnC.js";import"./ChapterCardStatic-0wezjSUN.js";import"./LocationPinThick-CoyXG0et.js";import"./Section-CV9vioSw.js";import"./avatar_02-DKvHTWQE.js";import"./RoundIconWithLabel-DugRrJrk.js";import"./MessageRow-Bii91OxD.js";const l=[{DateTime:"04.02.2026 9:57",Caption:"Active message!",Value:"This is a description",ReferenceID:"",ReferenceType:"Message",ReferencePageName:"",ReferencePageTitle:"",GUID:void 0},{DateTime:"04.02.2026 9:57",Caption:"Neutral message",Value:"This is a description",ReferenceID:"",ReferenceType:"Message",ReferencePageName:"",ReferencePageTitle:"",GUID:void 0},{DateTime:"04.02.2026 9:57",Caption:"Active again",Value:"This is a description",ReferenceID:"",ReferenceType:"Message",ReferencePageName:"",ReferencePageTitle:"",GUID:void 0}];let e={data:[],error:null,refetch:async()=>{},isLoading:!1,isFetching:!1,lastRed:"2026-02-03T12:00:00Z",setLastRed:()=>{},clearPushNotificationBadge:()=>{}};const c=m;c.useNotifications=()=>e;c.registrationDatetimeToDate=s=>new Date(s??0);const X={title:"Screens/NotificationsScreen",component:t,decorators:[s=>r.jsx(d,{children:r.jsx(p,{children:r.jsx(s,{})})})]},a={render:()=>(e={...e,data:l},r.jsx(t,{}))},o={render:()=>(e={...e,data:[],error:null,isLoading:!0,isFetching:!1},r.jsx(t,{}))},i={render:()=>(e={...e,data:[],error:"something wrong",isLoading:!1,isFetching:!1},r.jsx(t,{}))},n={render:()=>(e={...e,data:[],error:null,isLoading:!1,isFetching:!1},r.jsx(t,{}))};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    mockState = {
      ...mockState,
      data: mockData
    };
    return <NotificationsScreen />;
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    mockState = {
      ...mockState,
      data: [],
      error: null,
      isLoading: true,
      isFetching: false
    };
    return <NotificationsScreen />;
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    mockState = {
      ...mockState,
      data: [],
      error: 'something wrong',
      isLoading: false,
      isFetching: false
    };
    return <NotificationsScreen />;
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    mockState = {
      ...mockState,
      data: [],
      error: null,
      isLoading: false,
      isFetching: false
    };
    return <NotificationsScreen />;
  }
}`,...n.parameters?.docs?.source}}};const Y=["Default","Loading","Error","Empty"];export{a as Default,n as Empty,i as Error,o as Loading,Y as __namedExportsOrder,X as default};
