import React from 'react';
import List from './list.js'
import General from './general.js'

function Dropdown(props) {

  const dropdownType = props.dropdownType;
  const contentType = props.contentType;
  const isDropped = props.isDropped;

  if (contentType === "github") {
    var contentClass = "list-grid" /*TODO*/
  } else if (contentType === "bullets") {
    contentClass = "list-columns"
  }

  var dropdownElement;

  if (dropdownType === "list") { /*TODO change name and review react semicolons*/
    dropdownElement = <List contentType={contentType} />
  } else if (dropdownType === "general") {
    dropdownElement = <General contentType={contentType} />
  }

  return (
    <div className={"page-element-dropdown-container" + (isDropped ? " down" : " up")}>
      <div className={"page-element-dropdown " + contentClass}>
        {dropdownElement}
      </div>
    </div>
  );
}

export default Dropdown;