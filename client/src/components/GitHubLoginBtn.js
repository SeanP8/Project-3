import React from "react";

const GitHubLoginBtn = () => {

    return (
        <div>
            <a href="/auth/github">
                <button type="button" id="gitHubLoginBtn" className="btn btn-git"><i className="fab fa-github pr-1"></i> Github
                </button>
            </a>
        </div>
    )
};

export default GitHubLoginBtn;