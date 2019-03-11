import React, { Component } from "react";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";
import API from "../utils/API";

class HomeNav extends Component {
    state = {
        user: {},
        search: "",
        searchResults: {}
    };

    componentDidMount() {
        API.getCurrentUser()
            .then(res => {
                const currentUser = res.data
                if (currentUser) {
                    this.setState({ user: currentUser })
                }
            })
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        window.location.href = "/search?q=" + this.state.search;
        
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
                        <div className="search-container">
                            <h6 className="searchBar-title"><strong>Find a Project</strong></h6>
                            <input
                            onChange={this.handleInputChange}
                            value={this.state.search}
                            name="search" 
                            type="text" 
                            id="character-search" 
                            className="form-control" />
                            <br />
                            <div className="text-right">
                                <button onClick={this.handleSubmit} type="submit" className="btn btn-primary btn-md" id="search-btn"><span className="fa fa-search"></span>
                                    Search
                            </button>
                            </div>
                        </div>
                        <div className="dropdown avatarDropdown">
                            <button className="btn btn-dark bg-dark dropdown-toggle" type="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false"><img id="avatar" src={avatar} alt={firstName} />
                            </button>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="avatar-dropdown-menu">
                                <a className="dropdown-item" href="/api/logout">Logout</a>
                                <a className="dropdown-item" href="/profile">Edit Profile</a>

                            </div>
                        </div>
                    </Wrapper>
                </nav>
            </div>
        );
    }
}

export default HomeNav;
