import React from "react";
import "./style.css";

function Login(props) {
    return (
        <main>
             <h1>Login with Google</h1>
            <a className="google-btn" href="/auth/google">Google+</a>
        </main>
    );
}

export default Login;