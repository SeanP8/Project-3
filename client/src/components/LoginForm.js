import React from "react";
<<<<<<< HEAD:client/src/components/LoginForm.js
import Wrapper from "./Wrapper";
import GitHubLoginBtn from "./GitHubLoginBtn";
import GoogleLoginBtn from "./GoogleLoginBtn";
import Joi from "joi-browser";
<<<<<<< HEAD
import Input from "./input";
=======
import Wrapper from "../Wrapper/Wrapper";

import Joi from "joi-browser";
import Form from "../Form/form";

import "./style.css";
>>>>>>> origin/seanDevelop:tech-startup/src/components/LoginForm/LoginForm.js

=======
import Form from "./Form";

>>>>>>> origin/develop
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
<<<<<<< HEAD
          <h2>Sign Up</h2>
          <h6>It's free and always will be</h6>
          <hr />
<<<<<<< HEAD:client/src/components/LoginForm.js
          <form id="loginForm" onSubmit={this.handleSubmit}>
            <Input
              name="firstname"
              value={account.firstname}
              label="First Name"
              onChange={this.handleChange}
              error={errors.firstname}
            />

            <Input
              name="lastname"
              value={account.lastname}
              label="Last Name"
              onChange={this.handleChange}
              error={errors.lastname}
            />

            <Input
              name="email"
              value={account.email}
              label="Email"
              onChange={this.handleChange}
              error={errors.email}
            />

            <Input
              name="password"
              value={account.password}
              label="Password"
              onChange={this.handleChange}
              error={errors.password}
            />
=======
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("email", "Email")}
            {this.renderInput("password", "Password", "password")}
>>>>>>> origin/seanDevelop:tech-startup/src/components/LoginForm/LoginForm.js

            {this.renderButton("Login")}
          </form>
=======
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
>>>>>>> origin/develop
        </Wrapper>
      </div>
    );
  }
}

export default LoginForm;
