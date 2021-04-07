import React, { useState } from 'react';
import Dropdown from './dropdown.js'

function PageElement(props) {

  const text = props.text;
  const isFooter = props.isFooter;
  const dropdownType = props.dropdownType;
  const contentType = props.contentType;

  const [isDropped, setDropped] = useState(false)

  return (
    <div className="page-element">
        <div className={"page-element-plaque" + (isFooter ? " page-element-plaque-foot" : "")} onClick={() => setDropped(!isDropped)}>
          <div className="page-element-text">
            {text}
          </div>
        </div>
        {!isFooter && <Dropdown dropdownType={dropdownType} contentType={contentType} isDropped={isDropped} />}
    </div>
  );
}

export default PageElement;