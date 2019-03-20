import React from "react";

const GitHubLoginBtn = props => {
  return (
    <div>
      <button type="button" onClick={() => props.gitHubOnClick()}id="gitHubLoginBtn" className="btn btn-git">
        <i className="fab fa-github pr-1" /> Github
      </button>
    </div>
  );
};

export default GitHubLoginBtn;
