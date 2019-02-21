import React from "react";
import "./style.css";

class GitHubLoginBtn extends React.Component {
    render() {
        return(
            <div>
                <a href="/auth/github" className="loginBtn">
                <button type="button" id="gitHubLoginBtn" className="btn btn-git"><i className="fab fa-github pr-1"></i> Github</button></a>
            </div>
        )
    }
}

export default GitHubLoginBtn;