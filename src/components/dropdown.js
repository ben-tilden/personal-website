import React from 'react';
import BioContent from './bioContent.js'
import GithubContent from './githubContent.js'
import ResumeContent from './resumeContent.js'
import '../css/dropdown.css';

function Dropdown(props) {

  const dropdownType = props.dropdownType;
  const isDropped = props.isDropped;

  let isResume = false;
  let contentClass;
  let dropdownElement;

  if (dropdownType === "bio") {
    contentClass = " bio-content";
    dropdownElement = <BioContent />;
  } else if (dropdownType === "resume") {
    isResume = true;
    contentClass = " resume-content";
    dropdownElement = <ResumeContent />;
  } else if (dropdownType === "github") {
    contentClass = " github-content";
    dropdownElement = <GithubContent />;
  }

  return (
    <div className={"page-element-dropdown-container" + (isResume ? " resume-container" : "") + (isDropped ? " dropped" : " notDropped")}>
      <div className={"page-element-dropdown" + contentClass}>
        {dropdownElement}
      </div>
    </div>
  );
}

export default Dropdown;
