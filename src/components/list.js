import React, { useState, useEffect } from 'react';
const githubRoot = "https://api.github.com/"
const githubRequests = {
  repos : "users/ben-tilden/repos"
}

function List(props) {

  const [items, setItems] = useState([]);

  const contentType = props.contentType;

  useEffect(() => {
    var requestUrl;
    if (contentType === "github") {
      requestUrl = githubRoot + githubRequests.repos;
    }
    fetch(requestUrl)
      .then(res => res.json())
      .then(resJSONList => {
        if (resJSONList) {
          var itemsTempArr = []; //change var name
          resJSONList.forEach(project => {
            itemsTempArr.push(project);
          })/*TODO semicolon*/
          setItems(itemsTempArr);
        }
      })
      .catch((err) => console.log(err));
  }, [contentType]);


  //TODO sort by date
  //TODO format text to fit column limit here
  //TODO update info on GitHub to clean up some of this
  let itemsToRender = [];
  items.map(project => {
    let rowClass = "project-item-info " + (itemsToRender.length === items.length - 1 ? "last-row" : "");
    itemsToRender.push(
      <>
        <div className={rowClass + " date"}>{new Date(project.updated_at).toLocaleString().split(',')[0]}</div>
        <div className={rowClass + " name"}>{project.name}</div>
        <div className={rowClass + " desc"}>{project.description}</div>
        <div className={rowClass + " lang"}>{project.language}</div>
      </>
    );
    return itemsToRender;
  });

  return (
    <>
      {itemsToRender}
    </>
  );
}

export default List;