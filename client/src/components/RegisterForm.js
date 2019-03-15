import React from "react";
import Wrapper from "./Wrapper";
import Joi from "joi-browser";
import Form from "./Form";
import * as userService from "../services/userService";
import { login } from "../services/authService";

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
      .label("Password")
  };

  doSubmit = async () => {
    try {
      console.log(this.state.data);
      await userService.register(this.state.data).then(user => {
        login(this.state.data.email, this.state.data.password).then(function() {
          window.location.href = "/home";
        });
      });
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
      <div className="signupContainer">
        <Wrapper>
          <h2>Sign Up</h2>
          <h6>It's free and always will be</h6>
          <hr />
          <form className="RegisterForm" onSubmit={this.handleSubmit}>
            {this.renderInput("firstname", "Firstname")}
            {this.renderInput("lastname", "Lastname")}
            {this.renderInput("email", "Email")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("Register")}
          </form>
        </Wrapper>
      </div>
    );
  }
}

export default RegisterForm;
