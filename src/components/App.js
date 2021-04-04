import React, { useState, useEffect } from 'react';
import PageElement from './pageElement.js'
import '../css/App.css';

const pageElements = [
  {
    text : "Ben Tilden",
    isFooter : false,
    dropDownType : "paragraph"
  },
  {
    text : "Hey there",
    isFooter : false,
    dropDownType : "list"
  },
  {
    text : "Github Projects",
    isFooter : false,
    dropDownType : "gallery"
  },
  {
    text : "",
    isFooter : true,
    dropDownType : "none"
  }
]


function App() {

  const pageElementsComponents = pageElements.map(
    pageElement =>
      <PageElement
        text={pageElement.text}
        isFooter={pageElement.isFooter}
      />
  );

  return (
    <div className="page-element-container">
      {pageElementsComponents}
    </div>
  );
}

export default App;
