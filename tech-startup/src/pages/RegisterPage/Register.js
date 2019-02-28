import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import RegisterForm from "../../components/RegisterForm/registerForm";
import Footer from "../../components/Footer/Footer";
// import "./style.css";

class Login extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <RegisterForm />
        <Footer />
      </div>
    );
  }
}

export default Login;
