import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Registration from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";
import API from "../utils/API";

class Login extends React.Component {
  componentWillMount(){
    API.getCurrentUser().then(response => {
      console.log(response.data);
      if(response.data.id){
        window.location.href = "/home"
      }
    })
  }
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
