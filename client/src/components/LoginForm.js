import React from "react";
import Wrapper from "./Wrapper";
import { login } from "../services/authService";
import Joi from "joi-browser";
import Form from "./Form/form";

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
    try {
      const { data } = this.state;

      const { data: jwt } = await login(data.username, data.password);
      localStorage.setItem("token", jwt);
      this.props.history.push("/");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // clone errors obj
        const errors = { ...this.state.errors };
        errors.username = error.response.data;
        this.setState({ errors });
      }
    }
    console.log("submitted");
  };

  render() {
    return (
      <div>
        <Wrapper>
          <h2>Sign Up</h2>
          <h6>It's free and always will be</h6>
          <hr />
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("email", "Email")}
            {this.renderInput("password", "Password", "password")}

            {this.renderButton("Login")}
          </form>
        </Wrapper>
      </div>
    );
  }
}

export default LoginForm;
