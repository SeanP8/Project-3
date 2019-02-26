import React from "react";

class GoogleLoginBtn extends React.Component {

    handleClick = () => {
        document.location.href="http://localhost:5000/auth/google"
    }

    render() {
        return (
            <div>
            <button onClick={this.handleClick} type="button" id="googleLogInBtn" className="btn btn-gplus"><i className="fab fa-google-plus-g pr-1"></i>Google +</button>
            </div>
        )
    }
};

export default GoogleLoginBtn;