import React, { useState, useEffect } from 'react';
import PageElement from './pageElement.js'
import '../css/App.css';

const pageElements = [
  {
    text : "Ben Tilden",
    isHeader : true,
    dropDownType : "paragraph"
  },
  {
    text : "",
    isHeader : false,
    dropDownType : "list"
  },
  {
    text : "",
    isHeader : false,
    dropDownType : "gallery"
  }
]


function App() {

  const pageElementsComponents = pageElements.map(
    pageElement =>
      <PageElement
        text={pageElement.text}
        isHeader={pageElement.isHeader}
      />
  );

  return (
    <>
      {pageElementsComponents}
    </>
  );
}

export default App;
