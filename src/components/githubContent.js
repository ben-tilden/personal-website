import React, { useState, useEffect } from 'react';
import '../css/githubContent.css';

const githubRoot = "https://api.github.com/"
const githubRequests = {
  repos : "users/ben-tilden/repos"
}
const reposRequestUrl = githubRoot + githubRequests.repos;

function GithubContent() {

  const [items, setItems] = useState([]);

  useEffect(() => {
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
  items.forEach(project => {
    let rowClass = "project-item-data" + (itemsToRender.length === items.length - 1 ? " last-row" : "");
    let projectDateString = new Date(project.updated_at).toLocaleString().split(',')[0]
    itemsToRender.push(
      <div key={projectDateString + project.name} className={rowClass + " date leftmost-column"}>{projectDateString}</div>,
      <div key={project.name} className={rowClass + " name"}><a key={project.html_url} href={project.html_url} target="_blank" rel="noopener noreferrer">{project.name}</a></div>,
      <div key={project.description} className={rowClass + " desc"}>{project.description}</div>,
      <div key={project.language + project.name} className={rowClass + " lang"}>{project.language}</div>
    );
  });

  return (
    <>
      {itemsToRender}
    </>
  );
}

export default GithubContent;
