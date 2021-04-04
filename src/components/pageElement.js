import React from 'react';

function PageElement(props) {

  const text = props.text;
  const isFooter = props.isFooter;
  const dropDownType = props.dropDownType;

  return (
    <div className="page-element">
        <div className={isFooter ? "page-element-plaque page-element-plaque-foot" : "page-element-plaque"}>
          <span className="page-element-text">
            {text}
          </span>
        </div>
        <div className="page-element-dropdown"></div>
    </div>
  );
}

export default PageElement;