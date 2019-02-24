import React from "react";
import "./style.css";

class GoogleLoginBtn extends React.Component {
    render() {
        return (
            <div>
                <a href="/auth/google" className="loginBtn"><button id="googleLogInBtn" type="button" className="btn btn-gplus"><i className="fab fa-google-plus-g pr-1"></i>
                    Google +</button></a>
            </div>
        );
    }
}

export default GoogleLoginBtn;