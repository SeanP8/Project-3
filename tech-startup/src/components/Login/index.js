import React from "react";
import "./style.css";
import googlelogo from "./img/googlelogo.jpg";

function Login() {
    return (
        <main>
            <h3>Login with Google</h3><br />
            <a className="google-btn" href="/auth/google">
                <img className="google-logo" src={googlelogo} alt="google-logo" />Google+</a>
        </main>
    );
}

export default Login;