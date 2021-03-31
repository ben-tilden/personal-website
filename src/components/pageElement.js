import React from 'react';

function PageElement(props) {

  const text = props.text
  const isHeader = props.isHeader

  return (
    <div className="App">
        <div className={isHeader ? "page-element page-element-head" : "page-element"}>
          <span className="page-element-text">
            {text}
          </span>
        </div>
        <div className="page-element-dropdown"></div>
    </div>
  );
}

export default PageElement;