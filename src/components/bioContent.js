import React from 'react'; /*TODO improve based on resumeContent */
const items = [ /*NOTE3 - can this be done better? or does this work alright?*/
  ["﹡ Works at the intersection of technology and user experience"],
  ["﹡ Troubleshoots professionally"],
  ["﹡ Feels strongly about social justice"],
  ["﹡ Hopes to add a dropdown for 'Music', 'Writing', and/or 'Visual Arts' soon"],
  ["﹡ Loves collaborating! ", <span>&nbsp;</span>, <a href="mailto:benntilden@gmail.com" target="_blank" rel="noopener noreferrer">benntilden@gmail.com</a>],
  ["﹡ Watches every Dallas Mavericks game"],
  ["﹡ Has been listening to ", <span>&nbsp;</span>, <a href="https://www.youtube.com/watch?v=k9fzUySXd-4">this song</a>, <span>&nbsp;</span>, " a lot recently"],
  ["﹡ Took inspiration liberally from other sites to create this"]
];

function BioContent() {

  let itemsToRender = [];
  items.map(bullet => {
    let rowClass = "bio-item" + (itemsToRender.length === items.length - 1 ? " last-row" : "");
    itemsToRender.push(
      <div className={rowClass + " leftmost-column"}>{bullet}</div>
    );
    return itemsToRender;
  });

  return (
    <>
      {itemsToRender}
    </>
  );
}

export default BioContent;
