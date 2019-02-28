import React from "react";
import Wrapper from "./Wrapper";

class HomeNav extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <Wrapper>
                        <a className="navbar-brand" href="/home">
                            <img src="/techLogo.jpg" width="30" height="30" className="d-inline-block align-top" alt="logo" style={{ borderRadius: 7 }} /> TechBook</a>
                        <a className="logout" href="http://localhost:5000/api/logout">Logout</a>
                    </Wrapper>
                </nav>
            </div>
        );
    }
}

export default HomeNav;