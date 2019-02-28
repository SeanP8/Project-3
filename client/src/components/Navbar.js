import React from "react";
import Wrapper from "./Wrapper";

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                <Wrapper>
                    <a className="navbar-brand" href="/">
                        <img src="/techLogo.jpg" width="30" height="30" className="d-inline-block align-top" alt="logo" style={{borderRadius: 7}}/> TechBook</a>
                        <button className="btn btn-outline-success" type="submit">Sign In</button>
                        <input className="password" type="password" placeholder=" password"/>
                        <input className="email" type="text" placeholder=" email"/>
                </Wrapper>
                </nav>
            </div>
        );
    }
}

export default Navbar;