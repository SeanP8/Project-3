import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

class GitHubLoginBtn extends React.Component {
    render() {
        return(
            <div>
                <Link to="/auth/github" className="loginBtn">
                <button type="button" id="gitHubLoginBtn" className="btn btn-git"><i className="fab fa-github pr-1"></i> Github</button></Link>
            </div>
        )
    }
}

export default GitHubLoginBtn;