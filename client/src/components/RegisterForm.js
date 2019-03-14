import React from "react";
import Wrapper from "./Wrapper";
import Joi from "joi-browser";
import Form from "./Form";
import { addAuth } from "../utils/API";

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
    console.log(this.state.data);

    try {
      const response = await addAuth(this.state.data);
      console.log(response);
      // this.props.history.push("/");
      window.location("/");
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
