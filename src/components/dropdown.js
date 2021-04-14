import React from 'react';
import BioContent from './bioContent.js'
import GithubContent from './githubContent.js'
import ResumeContent from './resumeContent.js'

function Dropdown(props) {

  const dropdownType = props.dropdownType;
  const isDropped = props.isDropped;

  var contentClass;
  var dropdownElement;

  if (dropdownType === "bio") {
    contentClass = " bio-list";
    dropdownElement = <BioContent />;
  } else if (dropdownType === "resume") {
    contentClass = " resume-list";
    dropdownElement = <ResumeContent />;
  } else if (dropdownType === "github") {
    contentClass = " github-list";
    dropdownElement = <GithubContent />;
  }

  return (
    <div className={"page-element-dropdown-container" + (isDropped ? " down" : " up")}>
      <div className={"page-element-dropdown" + contentClass}>
        {dropdownElement}
      </div>
    </div>
  );
}

export default Dropdown;
