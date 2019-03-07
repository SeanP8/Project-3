import React, { Component } from "react";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";
import Axios from "axios";

class HomeNav extends Component {
    state = {
        user: {}
    };

    componentDidMount() {
        Axios.get("/api/current_user")
            .then(res => {
                const currentUser = res.data
                if (currentUser) {
                    this.setState({ user: currentUser })
                }
            })
    }
    render() {
        const { avatar, firstName } = this.state.user
        return (
            <div>
                <nav className="navbar fixed-top navbar-dark bg-dark">
                    <Wrapper>
                        <Link to="/home" className="navbar-brand homeLink" ><img src="/techLogo.jpg" width="30" height="30" className="d-inline-block align-top" alt="logo" style={{ borderRadius: 7 }} /> Techbook</Link>
                        <Link to="/favorites" className="navbar-item favoritesLink">Favorites</Link>
                        <div className="dropdown projectsDropdown">
                            <button className="dropBtn">Projects</button>
                            <div className="dropdown-content">
                                <Link to="/all-projects" className="dropLinks">All Projects</Link>
                                <Link to="/projects" className="dropLinks">Your Projects</Link>
                            </div>
                        </div>
                        <div className="dropdown avatarDropdown">
                            <button className="btn btn-dark bg-dark dropdown-toggle" type="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false"><img id="avatar" src={avatar} alt={firstName} />
                            </button>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="avatar-dropdown-menu">
                                <a className="dropdown-item" href="http://localhost:5000/api/logout">Logout</a>
                            </div>
                        </div>
                    </Wrapper>
                </nav>
            </div>
        );
    }
}

export default HomeNav;
