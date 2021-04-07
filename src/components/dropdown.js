import React from 'react';
import List from './list.js'

function Dropdown(props) {

  const dropdownType = props.dropdownType;
  const contentType = props.contentType;
  const isDropped = props.isDropped;

  var dropdownElement;

  if (dropdownType === "list") { /*TODO change name*/
    dropdownElement = <List contentType={contentType} />
  }

  return (
    <div className={"page-element-dropdown-container" + (isDropped ? " down" : " up")}>
      <div className="page-element-dropdown">
        {dropdownElement}
      </div>
    </div>
  );
}

export default Dropdown;