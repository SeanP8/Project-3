import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Registration from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";
import axios from 'axios';


class Login extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <form method="POST" action="/api/user/login" onSubmit={function(){
            axios.post("/api/user/login", {email:"email", password: "password"})
          }} >
            <input name="email" placeholder="email">
            </input>
            <input name="password" type="password" placeholder="password"> 
            </input>        
            <input type="submit" className="btn btn-primary" value="Submit"></input>
          </form>
        </div>
        <div className="flexBox">
          <Registration />
          <LoginForm />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;
