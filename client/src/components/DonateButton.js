import React from "react";

const DonateButton = props => {
  return (
    <div>
      <a
        className="donateBtn"
        target="_blank"
        rel="noopener noreferrer"
        href={props.fundLink ? props.fundLink : "#"}
      >
        <img
          src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif"
          alt="donate"
        />
      </a>
    </div>
  );
};

export default DonateButton;
