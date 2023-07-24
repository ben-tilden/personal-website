import React from 'react';
import '../css/resumeContent.css';

const items = {
  skills : [
    "Ruby on Rails", "JavaScript (React, Ember.js)", "Java", "C#", "Python", "C", "HTML/CSS", "SQL", "Kafka", "gRPC", "Docker", "Unix", "Datadog", "Microsoft Office", "Adobe Creative Suite"
  ],
  roles : [
    {
      title : "Software Engineer",
      company : "Blue Apron",
      timing : "Dec. 2021 - Present",
      bullets : [
        "﹡ Architect, implement, and maintain features in Ruby on Rails and JavaScript (React, Ember.js) as a member of the Ingredients team which is responsible for a series of 10 microservices in the company’s recipe ideation, ingredient purchasing, and warehouse management pipeline",
        "﹡ Designed and built out a high-usage inventory reconciliation tool for ensuring inventory accuracy in Blue Apron's fulfillment center, successfully leading the team to levels of 95% physical-to-digital accuracy",
        "﹡ Optimized recipe forecasting data pipeline by setting up a Kafka processing framework in the team's data pooling service, deprecating a legacy job pulling daily from S3 and allowing for immediate updates of mission critical data",
        "﹡ Collaborate with other engineers and product managers in an Agile environment - actively participating at every point in the software development lifecycle, from planning, development, and testing to code review and release monitoring over the course of two week sprints",
        "﹡ Proactively identify tech debt throughout the team's software infrastructure (duplicated and deprecated code, suboptimal implementations, etc.) and work with manager to prioritize while upholding current sprint velocity",
        "﹡ Investigate and resolve urgent stakeholder requests regarding day-to-day operations from within the test kitchen to the fulfillment center while on the team's on-call shift twice a quarter"
      ]
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
      if (key === "bullets" && itemContents.length) {
        itemContents = itemContents.map(bullet => {
          return <div key={bullet} className="resume-info-bullet">{bullet}</div>;
        });
      }

      if (itemContents.length) {
        itemsToRender.push(
          <div key={role[key]} className={itemClass}>{itemContents}</div>
        );
      }
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
