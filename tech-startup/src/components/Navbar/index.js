import React from "react";
import "./style.css"

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">
                        <img className="logo" src="../../techLogo.jpg" width="30" height="30" class="d-inline-block align-top" alt="logo" /> TechBook</a>
                </nav>
            </div>
        );
    }
}

export default Navbar;