import React from "react";

const GoogleLoginBtn = props => {
  return (
    <div>
      <button id="googleLogInBtn" onClick={() => props.googleOnClick()}type="button" className="btn btn-gplus">
        <i className="fab fa-google-plus-g pr-1" />Google +
      </button>
    </div>
  );
};

export default GoogleLoginBtn;
