import React from 'react';
import '../css/resumeContent.css';

const items = {
  skills : [
    "JS", "Java", "C#", "Python", "C", "HTML/CSS", "SQL", "Microsoft Office", "Adobe Creative Suite"
  ],
  roles : [
    {
      title : "Software Engineer",
      company : "Blue Apron",
      timing : "Dec. 2021 - Present",
      bullets : []
    },
    {
      title : "Associate Technical Solutions Engineer",
      company : "Flatiron Health",
      timing : "Jan. 2020 - Dec. 2021",
      bullets : [
        "﹡ Unblock clients by investigating and resolving over 600 technical issues and requests regarding the company's EMR application. This involves writing SQL scripts, coding user-facing alerts in JS, managing user authentication, and query- ing third party APIs to debug error codes",
        "﹡ Solve complex software issues by reviewing Splunk logs and actively debugging in a codebase comprised of C#, JS, React, VB, and SQL",
        "﹡ Build internal tools in C# and SQL to enable a non-technical 35 person customer support team to quickly and efficiently look up customer billing information",
        "﹡ Customize and put into effect tools such as Datadog and New Relic to monitor system performance and contextualize other client interactions",
        "﹡ Collaborate cross-functionally with support team, account managers, product managers, and software engineers to establish priorities, define timelines, and implement solutions for customer reported bugs"
      ]
    },
    {
      title : "Communications Intern",
      company : "The Play Company",
      timing : "Summer 2018",
      bullets : [
        "﹡ Established a new communications branch for the company, focused around branding and strengthening contact with potential donors",
        "﹡ Created and executed multiple social media campaigns, increasing following on Instagram by over 10%",
        "﹡ Composed layouts for promotional material in Adobe InDesign and circulated said material for upcoming productions via mass email",
        "﹡ Designed the logo and template for a monthly newsletter in Adobe Illustrator",
        "﹡ Coded a dynamic template calendar in Excel to be used for future productions"
      ]
    },
    {
      title : "Rower for the Columbia Lions",
      company : "NCAA Division I Men’s Heavyweight Rowing",
      timing : "Sept. 2015 – June 2019",
      bullets : [
        "﹡ Dedicated approximately 30 hours per week to practice, conditioning, and competition while maintaining a full course load",
        "﹡ Awarded the Richard Goodridge Jackson Memorial Prize in 2019 for maintaining the highest cumulative GPA on the men's Heavyweight team"
      ]
    }
  ]
};

function ResumeContent() {

  let itemsToRender = [];

  items.roles.forEach(role => {
    Object.keys(role).forEach(key => {
      let itemClass = key;
      let itemContents = role[key];

      if (key === "title" || key === "bullets") {
        itemClass += " leftmost-column";
      }
      if (key === "bullets") {
        itemContents = itemContents.map(bullet => {
          return <div key={bullet} className="resume-info-bullet">{bullet}</div>;
        });
      }

      itemsToRender.push(
        <div key={role[key]} className={itemClass}>{itemContents}</div>
      );
    });
  });

  itemsToRender.push(
    <div key="skills" className="skills-item leftmost-column last-row">{"Skills: " + items.skills.join(", ")}</div>
  )

  return (
    <>
      {itemsToRender}
    </>
  );
}

export default ResumeContent;
