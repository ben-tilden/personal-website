(this.webpackJsonppersonal_website=this.webpackJsonppersonal_website||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),o=n(4),r=n.n(o),s=(n(10),n(5)),c=n(2),l=(n(11),n(0)),d=[["\ufe61 Works at the intersection of technology and user experience"],["\ufe61 Troubleshoots professionally"],["\ufe61 Feels strongly about social justice"],["\ufe61 Hopes to add a dropdown for 'Music', 'Writing', and/or 'Visual Arts' soon"],["\ufe61 Loves collaborating! ",Object(l.jsx)("a",{href:"mailto:benntilden@gmail.com",target:"_blank",rel:"noopener noreferrer",children:"benntilden@gmail.com"},"gmail")],["\ufe61 Watches every Dallas Mavericks game"],["\ufe61 Moonlights as an amateur, amateur guitarist"],["\ufe61 Starts the day by cycling around the park"],["\ufe61 Has been listening to ",Object(l.jsx)("a",{href:"https://www.youtube.com/watch?v=jQt8C4dM6ws",target:"_blank",rel:"noopener noreferrer",children:"this song"},"song")," a lot recently"],["\ufe61 Took inspiration liberally from other sites to create this"],["\ufe61 Spends far too much money on synthesizers"],["\ufe61 Would like to thank you for scrolling this far"]];var u=function(){var e=[];return d.forEach((function(t){var n="bio-item"+(e.length===d.length-1?" last-row":"");e.push(Object(l.jsx)("div",{className:n+" leftmost-column",children:Object(l.jsx)("span",{className:"bio-item-bullet",children:t})},t[0]))})),Object(l.jsx)(l.Fragment,{children:e})};n(13);var m=function(){var e=Object(i.useState)([]),t=Object(c.a)(e,2),n=t[0],a=t[1];Object(i.useEffect)((function(){fetch("https://api.github.com/users/ben-tilden/repos").then((function(e){return e.json()})).then((function(e){e&&(e.sort((function(e,t){return Number(e.archived)-Number(t.archived)||Date.parse(t.updated_at)-Date.parse(e.updated_at)})),a(e))})).catch((function(e){return console.log(e)}))}),[]);var o=[];return n.forEach((function(e){console.log(o.length),console.log(n.length-1);var t="project-item-data"+(o.length===4*(n.length-1)?" last-row":""),i=new Date(e.updated_at).toLocaleString().split(",")[0];o.push(Object(l.jsxs)("div",{className:t+" date leftmost-column",children:[i,e.archived&&"\n(archived)"]},i+e.name),Object(l.jsx)("div",{className:t+" name",children:Object(l.jsx)("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer",children:e.name},e.html_url)},e.name),Object(l.jsx)("div",{className:t+" desc",children:e.description},e.description),Object(l.jsx)("div",{className:t+" lang",children:e.language},e.language+e.name))})),Object(l.jsx)(l.Fragment,{children:o})},p=(n(14),{skills:["Ruby on Rails","JavaScript (React, Ember.js)","Java","C#","Python","C","HTML/CSS","SQL","Kafka","gRPC","Docker","Unix","Datadog","Microsoft Office","Adobe Creative Suite"],roles:[{title:"Software Engineer",company:"Blue Apron",timing:"Dec. 2021 - Present",bullets:["\ufe61 Architect, implement, and maintain features in Ruby on Rails and JavaScript (React, Ember.js) as a member of the Ingredients team which is responsible for a series of 10 microservices in the company\u2019s recipe ideation, ingredient purchasing, and warehouse management pipeline","\ufe61 Designed and built out a high-usage inventory reconciliation tool for ensuring inventory accuracy in Blue Apron's fulfillment center, successfully leading the team to levels of 95% physical-to-digital accuracy","\ufe61 Optimized recipe forecasting data pipeline by setting up a Kafka processing framework in the team's data pooling service, deprecating a legacy job pulling daily from S3 and allowing for immediate updates of mission critical data","\ufe61 Collaborate with other engineers and product managers in an Agile environment - actively participating at every point in the software development lifecycle, from planning, development, and testing to code review and release monitoring over the course of two week sprints","\ufe61 Proactively identify tech debt throughout the team's software infrastructure (duplicated and deprecated code, suboptimal implementations, etc.) and work with manager to prioritize while upholding current sprint velocity","\ufe61 Investigate and resolve urgent stakeholder requests regarding day-to-day operations from within the test kitchen to the fulfillment center while on the team's on-call shift twice a quarter"]},{title:"Associate Technical Solutions Engineer",company:"Flatiron Health",timing:"Jan. 2020 - Dec. 2021",bullets:["\ufe61 Unblock clients by investigating and resolving over 600 technical issues and requests regarding the company's EMR application. This involves writing SQL scripts, coding user-facing alerts in JS, managing user authentication, and query- ing third party APIs to debug error codes","\ufe61 Solve complex software issues by reviewing Splunk logs and actively debugging in a codebase comprised of C#, JS, React, VB, and SQL","\ufe61 Build internal tools in C# and SQL to enable a non-technical 35 person customer support team to quickly and efficiently look up customer billing information","\ufe61 Customize and put into effect tools such as Datadog and New Relic to monitor system performance and contextualize other client interactions","\ufe61 Collaborate cross-functionally with support team, account managers, product managers, and software engineers to establish priorities, define timelines, and implement solutions for customer reported bugs"]},{title:"Communications Intern",company:"The Play Company",timing:"Summer 2018",bullets:["\ufe61 Established a new communications branch for the company, focused around branding and strengthening contact with potential donors","\ufe61 Created and executed multiple social media campaigns, increasing following on Instagram by over 10%","\ufe61 Composed layouts for promotional material in Adobe InDesign and circulated said material for upcoming productions via mass email","\ufe61 Designed the logo and template for a monthly newsletter in Adobe Illustrator","\ufe61 Coded a dynamic template calendar in Excel to be used for future productions"]},{title:"Rower for the Columbia Lions",company:"NCAA Division I Men\u2019s Heavyweight Rowing",timing:"Sept. 2015 \u2013 June 2019",bullets:["\ufe61 Dedicated approximately 30 hours per week to practice, conditioning, and competition while maintaining a full course load","\ufe61 Awarded the Richard Goodridge Jackson Memorial Prize in 2019 for maintaining the highest cumulative GPA on the men's Heavyweight team"]}]});var h=function(){var e=[];return p.roles.forEach((function(t){Object.keys(t).forEach((function(n){var i=n,a=t[n];"title"!==n&&"bullets"!==n||(i+=" leftmost-column"),"bullets"===n&&a.length&&(a=a.map((function(e){return Object(l.jsx)("div",{className:"resume-info-bullet",children:e},e)}))),a.length&&e.push(Object(l.jsx)("div",{className:i,children:a},t[n]))}))})),e.push(Object(l.jsx)("div",{className:"skills-item leftmost-column last-row",children:"Skills: "+p.skills.join(", ")},"skills")),Object(l.jsx)(l.Fragment,{children:e})};n(15);var g=function(e){var t,n,i=e.dropdownType,a=e.isDropped,o=!1;return"bio"===i?(t=" bio-content",n=Object(l.jsx)(u,{})):"resume"===i?(o=!0,t=" resume-content",n=Object(l.jsx)(h,{})):"github"===i&&(t=" github-content",n=Object(l.jsx)(m,{})),Object(l.jsx)("div",{className:"page-element-dropdown-container"+(o?" resume-container":"")+(a?" dropped":" notDropped"),children:Object(l.jsx)("div",{className:"page-element-dropdown"+t,children:n})})};n(16);var f=function(e){var t=e.text,n=e.isFooter,a=e.dropdownType,o=Object(i.useState)(!1),r=Object(c.a)(o,2),s=r[0],d=r[1];return Object(l.jsxs)("div",{className:"page-element",children:[Object(l.jsx)("div",{className:"page-element-plaque"+(n?" page-element-plaque-foot":""),onClick:function(){return d(!s)},children:Object(l.jsx)("div",{className:"page-element-text",children:t})}),!n&&Object(l.jsx)(g,{dropdownType:a,isDropped:s})]})},b=(n(17),[{text:"Ben Tilden",isFooter:!1,dropdownType:"bio"},{text:"Github Projects",isFooter:!1,dropdownType:"github"},{text:"Resume",isFooter:!1,dropdownType:"resume"},{text:"",isFooter:!0,dropdownType:"none"}]);var v=function(){var e=-1,t=b.map((function(t){return Object(l.jsx)(f,Object(s.a)({},t),e++)}));return Object(l.jsx)("div",{className:"page-element-container",children:t})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),o(e),r(e)}))};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),j()}],[[18,1,2]]]);
//# sourceMappingURL=main.824952b4.chunk.js.map