import React from 'react';
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
        <div>﹡ Works</div>,
        <div>﹡ Works more</div>
      ]
    },
    {
      title : "Communications Intern",
      company : "The Play Company",
      timing : "Summer 2018",
      bullets : [
        <div>﹡ Established a new communications branch for the company, focused around branding and strengthening contact with potential donors</div>,
        <div>﹡ Created and executed multiple social media campaigns, increasing following on Instagram by over 10%</div>,
        <div>﹡ Composed layouts for promotional material in Adobe InDesign and circulated said material for upcoming productions via mass email</div>,
        <div>﹡ Designed the logo and template for a monthly newsletter in Adobe Illustrator • Coded a dynamic template calendar in Excel to be used for future productions</div>
      ]
    },
    {
      title : "Rower for the Columbia Lions",
      company : "NCAA Division I Men’s Heavyweight Rowing",
      timing : "Sept. 2015 – June 2019",
      bullets : [
        <div>﹡ Dedicated approximately 30 hours per week to practice, conditioning, and competition while maintaining a full course load</div>
      ]
    }
  ]
};

function ResumeContent() {

  let itemsToRender = [];

  //itemsToRender.push(
  //  <div className="skills-item leftmost-column">{"Skills: " + items.skills.join(", ")}</div> 
  //)

  items.roles.forEach(role => { /*TODO map or forEach*/
    Object.keys(role).forEach(key => {
      let itemClass = key;
      itemClass += (key === "title" || key === "bullets" ? " leftmost-column" : "");
      itemClass += (items.roles.indexOf(role) === items.roles.length - 1 && key === "bullets" ? " last-row" : "");
      itemsToRender.push(
        <div className={itemClass}>{role[key]}</div>
      );
    });
  });

  console.log(itemsToRender);

  return (
    <>
      {itemsToRender}
    </>
  );
}

export default ResumeContent;
