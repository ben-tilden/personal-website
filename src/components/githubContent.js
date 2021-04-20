import React, { useState, useEffect } from 'react';
import '../css/githubContent.css';

const githubRoot = "https://api.github.com/"
const githubRequests = {
  repos : "users/ben-tilden/repos"
}
const reposRequestUrl = githubRoot + githubRequests.repos;

function GithubContent() {

  const [items, setItems] = useState([]);

  useEffect(() => { //currently only renders onMount
    fetch(reposRequestUrl)
      .then(res => res.json())
      .then(resJSONList => {
        if (resJSONList) {
          resJSONList.sort((a, b) => {
            return (a.updated_at > b.updated_at) ? -1 : 1;
          });
          setItems(resJSONList);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  let itemsToRender = [];
  items.map(project => {
    let rowClass = "project-item-data" + (itemsToRender.length === items.length - 1 ? " last-row" : " ");
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
