import React from "react";
import "./style.css";
import { render } from "react-dom";
import GoogleLogin from "react-google-login";
//import GoogleLoginBtn from "./GoogleLoginBtn";

const responseGoogle = (response) => {
    console.log(response);
}

render(
    <GoogleLogin
        clientId="process.env.GOOGLE_CLIENT_ID"
        render={ renderProps => (
            <button onClick={renderProps.onClick} id="googleButton" type="button" className="btn btn-gplus">Google+</button>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
    />,
    document.getElementById("googleButton")
);


