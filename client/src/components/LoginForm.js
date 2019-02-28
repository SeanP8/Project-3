import React from "react";
import Wrapper from "./Wrapper";
import GitHubLoginBtn from "./GitHubLoginBtn";
import GoogleLoginBtn from "./GoogleLoginBtn";
import Joi from "joi-browser";
import Form from "./Form";

class LoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {}
  };
  schema = {
    email: Joi.string()
      .required()
      .label("Email"),
    password: Joi.string()
      .required()
      .label("Pastname")
  };

  doSubmit = () => {
    console.log("submitted");
  };

  render() {
    return (
      <div>
        <Wrapper>
          <h2>Login</h2> 
          <h6>Enter you email and password</h6>
          <hr/>
          <form className="loginForm" onSubmit={this.handleSubmit}>
            {this.renderInput("email", "Email")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("Login")}
          </form>
          <hr/>
          <h6>Login with GitHub or Google+</h6>
          <GitHubLoginBtn />
          <GoogleLoginBtn />
        </Wrapper>
      </div>
    );
  }
}

export default LoginForm;
