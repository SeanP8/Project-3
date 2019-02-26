import React from "react";
import Wrapper from "./Wrapper";
import GitHubLoginBtn from "./GitHubLoginBtn";
import GoogleLoginBtn from "./GoogleLoginBtn";
import Joi from "joi-browser";
import Input from "./input";

class LoginForm extends React.Component {
  state = {
    account: { firstname: "", lastname: "", email: "", password: "" },
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

  validate = () => {
    const { error } = Joi.validate(this.state.account, this.schema, {
      abortEarly: false
    });
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();

    this.setState({ errors: errors || {} });
    if (errors) return;

    console.log("submitted");
  };

  validateProperty = ({ name, value }) => {
    if (name === "firstname") {
      if (value.trim() === "") return "Firstname is required";
    }
    if (name === "lastname") {
      if (value.trim() === "") return "Lastname is required";
    }
    if (name === "email") {
      if (value.trim() === "") return "Email is required";
    }
    if (name === "password") {
      if (value.trim() === "") return "Password is required";
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <Wrapper>
          <h2>Sign Up</h2>
          <h6>It's free and always will be</h6>
          <hr />
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

            <div className="form-group">
              <input type="submit" className="btn btn-outline-success" />
            </div>
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

export default LoginForm;
