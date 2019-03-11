import React from "react";

const GoogleLoginBtn = () => {

    return (
        <div>
            <a href="/auth/google">
                <button id="googleLogInBtn" type="button" className="btn btn-gplus"><i className="fab fa-google-plus-g pr-1"></i>Google +
                </button>
            </a>
        </div>
    )
};

export default GoogleLoginBtn;