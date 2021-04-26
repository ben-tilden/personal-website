import PageElement from './pageElement.js'
import '../css/App.css';

const pageElements = [
  {
    text : "Ben Tilden",
    isFooter : false,
    dropdownType : "bio"
  },
  {
    text : "Github Projects",
    isFooter : false,
    dropdownType : "github"
  },
  {
    text : "Resume",
    isFooter : false,
    dropdownType : "resume"
  },
  {
    text : "",
    isFooter : true,
    dropdownType : "none"
  }
];


function App() {

  let i = -1;
  const pageElementsComponents = pageElements.map(
    pageElement =>
      <PageElement
        key={i++}
        {...pageElement}
      />
  );

  return (
    <div className="page-element-container">
      {pageElementsComponents}
    </div>
  );
}

export default App;
