import React, { Component } from "react";

class DonateButton extends Component {


    render(){
        let link = "#";
       if(this.props.fundLink){
        link = this.props.fundLink;
        let http = link.slice(0,7).toLowerCase();
        let https = link.slice(0, 8).toLowerCase();
        if(http !== "http://" && https !== "https://"){
            link = "https://" + link;
        }
       }
        return (
            <div>
                <a target="_blank" rel="noopener noreferrer" className="donateBtn" href={link}><img src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" alt="donate"/></a>
            </div>
        );
    }
}

export default DonateButton;
