import React, { useState } from 'react';
import Dropdown from './dropdown.js'
import '../css/pageElement.css';

function PageElement(props) {

  const text = props.text;
  const isFooter = props.isFooter;
  const dropdownType = props.dropdownType;

  const [isDropped, setDropped] = useState(false);

  return (
    <div className="page-element">
        <div className={"page-element-plaque" + (isFooter ? " page-element-plaque-foot" : "")} onClick={() => setDropped(!isDropped)/*NOTE2 - is this clean?*/}>
          <div className="page-element-text">
            {text}
          </div>
        </div>
        {!isFooter && <Dropdown dropdownType={dropdownType} isDropped={isDropped} />}
    </div>
  );
}

export default PageElement;
