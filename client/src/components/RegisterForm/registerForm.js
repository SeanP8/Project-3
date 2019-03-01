import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import GitHubLoginBtn from "../GitHubLoginBtn/GitHubLoginBtn";
import GoogleLoginBtn from "../GoogleLoginBtn/GoogleLoginBtn";
import Joi from "joi-browser";
import Form from "../Form/form";
import * as userService from "../services/userService";

// import "./style.css";

class RegisterForm extends Form {
  state = {
    data: { firstname: "", lastname: "", email: "", password: "" },
    errors: {}
  };
  schema = {
    firstname: Joi.string()
      .required()
      .label("Firstname"),
    lastname: Joi.string()
      .required()
      .label("Lastname"),
    email: Joi.string()
      .required()
      .label("Email"),
    password: Joi.string()
      .required()
      .label("Pastname")
  };

  doSubmit = async () => {
    try {
      await userService.register(this.state.data);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <Wrapper>
          <h2>Sign Up</h2>
          <h6>It's free and always will be</h6>
          <hr />
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("firstname", "Firstname")}
            {this.renderInput("lastname", "Lastname")}
            {this.renderInput("email", "Email")}
            {this.renderInput("password", "Password", "password")}

            {this.renderButton("Login")}
          </form>
          <h2>Login</h2>
          <h6>With GitHub or Google+</h6>
          <GitHubLoginBtn />
          <GoogleLoginBtn />
        </Wrapper>
      </div>
    );
  }
}

export default RegisterForm;
