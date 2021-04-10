import PageElement from './pageElement.js'
import '../css/App.css';

const pageElements = [/*TODO content type and dropdown type can likely be an object*/
  {
    text : "Ben Tilden",
    isFooter : false,
    contentType : "bullets",
    dropdownType : "general"
  },
  {
    text : "Github Projects",
    isFooter : false,
    contentType : "github",
    dropdownType : "list"
  },
  {
    text : "Resume",
    isFooter : false,
    contentType : "",
    dropdownType : "list"
  },
  {
    text : "",
    isFooter : true,
    contentType : "",
    dropdownType : "none"
  }
]


function App() {

  const pageElementsComponents = pageElements.map(
    pageElement =>
      <PageElement
        text={pageElement.text}
        isFooter={pageElement.isFooter}
        dropdownType={pageElement.dropdownType}
        contentType={pageElement.contentType} /*TODO only need to pass down object here*/

      />
  );

  return (
    <div className="page-element-container">
      {pageElementsComponents}
    </div>
  );
}

export default App;
