import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Registration from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";


class Login extends React.Component {
  render() {
    return (
      <div>
        <Navbar />     
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
