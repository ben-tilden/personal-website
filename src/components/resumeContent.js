import React from 'react';
import '../css/resumeContent.css';

const items = {
  skills : [
    "JS", "Java", "C#", "Python", "C", "HTML/CSS", "SQL", "Microsoft Office", "Adobe Creative Suite"
  ],
  roles : [
    {
      title : "Associate Technical Solutions Engineer",
      company : "Flatiron Health",
      timing : "Jan. 2020 - Present",
      bullets : [
        "﹡ Investigate and resolve over 600 client-reported technical issues and requests regarding the company's EMR application using product knowledge, SQL updates, built-in JavaScript functionality, user authentication management, and review of third party API integration",
        "﹡ Troubleshoot complex software issues involving both frontend and backend logic by studying Splunk logs and a codebase comprised of C#, JS, React, VB, and SQL",
        "﹡ Collaborate cross-functionally with support team, account managers, product managers, and software engineers to actively define timelines, priorities, and solutions for customer reported bugs",
        "﹡ Customize and put into effect tools such as Datadog and New Relic to monitor system performance and contextualize other client interactions",
        "﹡ Build out internal tools using C# and SQL to allow broader usage of technical actions within the 35 person support team",
        "﹡ Perform 35 mass database updates for clients using in-depth SQL queries"
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
