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
          var itemsTempArr = []; /*change var name*/
          resJSONList.forEach(project => {
            itemsTempArr.push(project);
          })
          setItems(itemsTempArr);
        }
      })
      .catch((err) => console.log(err));
  }, [contentType]);


  /*TODO sort by date*/
  let itemsToRender = [];
  items.map(project => {
    itemsToRender.push(
      <div key={project.node_id} className="project">
        <p className="project-name">{project.name}</p>
        <p className="project-updated">{new Date(project.updated_at).toLocaleString()}</p>
        <p className="project-description">{project.description}</p>
        <p className="project-language">{project.language}</p>
      </div>
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