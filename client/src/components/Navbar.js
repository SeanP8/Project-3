import React from "react";
import Wrapper from "./Wrapper";

const Navbar = () => {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                <Wrapper>s
                    <a className="navbar-brand" href="/">
                        <img src="/techLogo.jpg" width="30" height="30" className="d-inline-block align-top" alt="logo" style={{borderRadius: 7}}/> TechBook</a>
                </Wrapper>
                </nav>
            </div>
        );
    }

export default Navbar;