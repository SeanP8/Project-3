import React from "react";
import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";

class Login extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <LoginForm />
        <Footer />
      </div>
    );
  }
}

export default Login;
