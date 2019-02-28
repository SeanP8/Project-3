import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";

class HomeNav extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <Wrapper>
                        <Link to="/home" className="navbar-brand">
                            <img src="/techLogo.jpg" width="30" height="30" className="d-inline-block align-top" alt="logo" style={{ borderRadius: 7 }} /> TechBook</Link>
                        <Link to="/projects" className="navbarLinks">Projects </Link><span className="link-divider"> | </span>
                        <Link to="/favorites" className="navbarLinks"> Favorites</Link>
                        <a className="logout" href="http://localhost:5000/api/logout">Logout</a>
                    </Wrapper>
                </nav>
            </div>
        );
    }
}

export default HomeNav;
