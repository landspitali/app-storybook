import{j as a,V as i}from"./iframe-B-hEVdgV.js";import{T as s}from"./TaskPill-BfU29Fgp.js";import{T as l}from"./TaskProgressBar-B3HH1aDT.js";import"./preload-helper-Zf8nSx-t.js";const p=({numberOfPills:r,completedCount:n,inProgressCount:m,warningCount:g})=>Array.from({length:r},(c,o)=>{let e;return o<n?e=s.Green:o<n+m?e=s.Yellow:o<n+m+g?e=s.Red:e=s.Grey,e}),x={title:"Features/Treatments/TaskProgressBar",component:l,decorators:[r=>a.jsx(i,{style:{paddingLeft:40,paddingRight:70,bottom:"25%",flex:1},children:a.jsx(r,{})})],argTypes:{numberOfPills:{control:{type:"range",min:5,max:30,step:1}},completedCount:{control:{type:"range",min:0,max:30,step:1}},inProgressCount:{control:{type:"range",min:0,max:30,step:1}},warningCount:{control:{type:"range",min:0,max:30,step:1}}}},t={args:{numberOfPills:12,completedCount:5,inProgressCount:2,warningCount:1},render:r=>a.jsx(l,{treatmentProgress:p(r)})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    numberOfPills: 12,
    completedCount: 5,
    inProgressCount: 2,
    warningCount: 1
  },
  render: (args: StoryProps) => <TaskProgressBar treatmentProgress={generateProgress(args)} />
}`,...t.parameters?.docs?.source}}};const y=["Default"];export{t as Default,y as __namedExportsOrder,x as default};
