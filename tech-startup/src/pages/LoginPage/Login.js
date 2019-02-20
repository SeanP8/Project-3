import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import LoginForm from "../../components/LoginForm/LoginForm";
import Footer from "../../components/Footer/Footer";
import "./style.css";

class Login extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <LoginForm />
                <Footer />
            </div>
        )
    }
}

export default Login;