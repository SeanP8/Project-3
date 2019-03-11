import React from "react";
import Wrapper from "./Wrapper";
import GitHubLoginBtn from "./GitHubLoginBtn";
import GoogleLoginBtn from "./GoogleLoginBtn";

import { login } from "../services/authService";

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

  doSubmit = async () => {
    // var jwt;
    try {
      const { data } = this.state;
      console.log("SUBMIT")

      login(data.email, data.password);
      
     
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // clone errors obj
        const errors = { ...this.state.errors };
        errors.username = error.response.data;
        this.setState({ errors });
      }
    }
    // console.log("jwt " + Object.keys(jwt.data))
    window.location.href = "/home";
  };

  render() {
    return (
      <div>
        <Wrapper>
          <h2>Login</h2>
          <h6>Enter you email and password</h6>
          <hr />
          <form className="loginForm" onSubmit={this.handleSubmit}>
            {this.renderInput("email", "Email")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("Login")}
          </form>
          <hr />
          <h6>Login with GitHub or Google+</h6>
          <GitHubLoginBtn/>
          <GoogleLoginBtn/>
        </Wrapper>
      </div>
    );
  }
}

export default LoginForm;
