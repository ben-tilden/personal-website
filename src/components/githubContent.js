import React, { useState, useEffect } from 'react';
const githubRoot = "https://api.github.com/"
const githubRequests = {
  repos : "users/ben-tilden/repos"
}
const reposRequestUrl = githubRoot + githubRequests.repos;

function GithubContent() {

  const [items, setItems] = useState([]);

  useEffect(() => { /* */
    fetch(reposRequestUrl)
      .then(res => res.json())
      .then(resJSONList => {
        if (resJSONList) {
          var itemsTempArr = []; //change var name - do we need?
          resJSONList.forEach(project => {
            itemsTempArr.push(project);
          });
          itemsTempArr.sort((a, b) => {
            return (a.updated_at > b.updated_at) ? -1 : 1;
          });
          setItems(itemsTempArr);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  //TODO update info on GitHub to clean up some of this
  let itemsToRender = [];
  items.map(project => {
    let rowClass = "project-item-info " + (itemsToRender.length === items.length - 1 ? "last-row" : "");
    itemsToRender.push(
      <>
        <div className={rowClass + " date leftmost-column"}>{new Date(project.updated_at).toLocaleString().split(',')[0]}</div>
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

export default GithubContent;