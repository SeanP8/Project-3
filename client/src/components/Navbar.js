import React from "react";
import Wrapper from "./Wrapper";

class Navbar extends React.Component {
    state = {
        email: "",
        password: ""
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                <Wrapper>
                    <a className="navbar-brand" href="/">
                        <img src="/techLogo.jpg" width="30" height="30" className="d-inline-block align-top" alt="logo" style={{borderRadius: 7}}/> TechBook</a>
                        <button className="btn btn-outline-success" type="submit">Sign In</button>
                        <input name="password" type="password" placeholder=" password"/>
                        <input name="email" type="text" placeholder=" email"/>
                </Wrapper>
                </nav>
            </div>
        );
    }
}

export default Navbar;