import React, { Component } from "react";

class GitHubLoginBtn extends Component {
    handleClick = () => {
        document.location.href= "http://localhost:5000/auth/github"
    }
    render() {
        return(
            <div>
                <button onClick={this.handleClick} type="button" id="gitHubLoginBtn" className="btn btn-git"><i className="fab fa-github pr-1"></i> Github</button>
            </div>
        )
    }
}

export default GitHubLoginBtn;