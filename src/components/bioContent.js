import React from 'react';
import '../css/bioContent.css';

const items = [
  ["﹡ Works at the intersection of technology and user experience"],
  ["﹡ Troubleshoots professionally"],
  ["﹡ Feels strongly about social justice"],
  ["﹡ Hopes to add a dropdown for 'Music', 'Writing', and/or 'Visual Arts' soon"],
  ["﹡ Loves collaborating! ", <a key="gmail" href="mailto:benntilden@gmail.com" target="_blank" rel="noopener noreferrer">benntilden@gmail.com</a>],
  ["﹡ Watches every Dallas Mavericks game"],
  ["﹡ Has been listening to ", <a key="song" href="https://www.youtube.com/watch?v=k9fzUySXd-4" target="_blank" rel="noopener noreferrer">this song</a>, " a lot recently"],
  ["﹡ Took inspiration liberally from other sites to create this"]
];

function BioContent() {

  let itemsToRender = [];
  items.forEach(bullet => {
    let rowClass = "bio-item" + (itemsToRender.length === items.length - 1 ? " last-row" : "");
    itemsToRender.push(
      <div key={bullet[0]} className={rowClass + " leftmost-column"}>
        <span className="bio-item-bullet">
          {bullet}
        </span>
      </div>
    );
  });

  return (
    <>
      {itemsToRender}
    </>
  );
}

export default BioContent;
