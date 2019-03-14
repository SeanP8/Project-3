import React, { Component } from "react";

class DonateButton extends Component {


    render(){
        return (
            <div>
                <a target="_blank" href={this.props.fundLink ? this.props.fundLink : "#"}><img src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" /></a>
            </div>
        );
    }
}

export default DonateButton;