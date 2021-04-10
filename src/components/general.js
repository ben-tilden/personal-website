import React, { useState } from 'react';
const bulletItems = [
  ["﹡ Works at the intersection of technology and user experience"],
  ["﹡ Troubleshoots professionally"],
  ["﹡ Feels strongly about social justice"],
  ["﹡ Is hoping to add a dropdown for 'Music', 'Writing', and/or 'Visual Arts' soon"],
  ["﹡ Loves collaborating! ", <span>&nbsp;</span>, <a href="mailto:benntilden@gmail.com" target="_blank" rel="noopener noreferrer">benntilden@gmail.com</a>],
  ["﹡ Watches every Dallas Mavericks game"],
  ["﹡ Has been listening to ", <span>&nbsp;</span>, <a href="https://www.youtube.com/watch?v=k9fzUySXd-4">this song</a>, <span>&nbsp;</span>, " a lot recently"],
  ["﹡ Took inspiration liberally from other sites to create this"]
]

function General(props) {

  //const contentType = props.contentType; // not currently used - TODO change this

  let itemsToRender = [];
  let columnNum = 0;
  bulletItems.map(bulletItem => {
    columnNum = (columnNum + 1) % 3;
    itemsToRender.push(
      <div className={"general-bullet column-" + columnNum}>{bulletItem}</div>
    );
    return itemsToRender;
  });

  return (
    <>
      {itemsToRender}
    </> /*TODO need?*/
  );
}

export default General;