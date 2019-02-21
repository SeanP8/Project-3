import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import GitHubLoginBtn from "../GitHubLoginBtn/GitHubLoginBtn";
import GoogleLoginBtn from "../GoogleLoginBtn/GoogleLoginBtn";
import "./style.css"

class LoginForm extends React.Component {
    render() {
        return (
            <div>
                <Wrapper>
                    <form id="loginForm">
                        <h2>Sign Up</h2>
                        <h6>It's free and always will be</h6><hr/>
                        <div className="form-group">
                            <label for="firstName">First Name</label>
                            <input type="email" className="form-control" id="firstName" aria-describedby="firstNameHelp" placeholder="First Name" />
                        </div>
                        <div className="form-group">
                            <label for="lastName">Last Name</label>
                            <input type="email" className="form-control" id="lastName" aria-describedby="lastNameHelp" placeholder="Last Name" />
                        </div>
                        <div className="form-group">
                            <label for="inputEmail">Email address</label>
                            <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label for="inputPassword">Password</label>
                            <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-outline-success"/>
                        </div>
                    </form>
                    <h2>Login</h2>
                    <h6>With GitHub or Google+</h6>
                        <GitHubLoginBtn/>
                        <GoogleLoginBtn/>
                </Wrapper>
            </div>
        );
    }
}

export default LoginForm;