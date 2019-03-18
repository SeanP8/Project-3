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
      .alphanum().min(3).max(30)
      .required()
      .label("Firstname"),
    lastname: Joi.string()
      .alphanum().min(3).max(30)
      .required()
      .label("Lastname"),
    email: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required()
      .label("Email"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    console.log(this.state.data);

    var data = this.state.data;
    
    const { error, value } = Joi.validate(data, this.schema)
    if(error){
      console.log(error);
    }else{
      userService.register(value)
      .then(response => {
         console.log(response.data);
         if(response.data.email){
          login(response.data.email, this.state.data.password)
          .then(function () {
            window.location.href = "/home";
          })
          .catch(err => console.log(err));
         }else{
           document.getElementById("emailErr").innerHTML = response.data;
         }
        })
      .catch((err) => {
        console.log(err);
      });
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
            <div className="errorText" id="emailErr"></div>
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
