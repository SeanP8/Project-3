import React, { Component } from "react";
import HomeNav from "../components/HomeNav";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import axios from "axios";

class Home extends Component {
    state = {
        user: {}
    };

    componentDidMount() {
        axios.get("/api/current_user").then((response) => {
            const currentUser = response.data;
            console.log(currentUser);
            console.log("MOUNT CALL + " + Object.keys(currentUser))
            if (currentUser) {
                this.setState({
                    user: currentUser
                })
            }
        })
    }

    render() {
        var display;
        if (this.state.user) {
            display = <p>Hello {this.state.user.firstName}!</p>
        } else {
            display = <p>Hello there! <a href="/">Sign up here!</a></p>
        }

        return (
            <div>
                <HomeNav />
                <Wrapper>
                    {display}
                    <div className="userInfo">
                        <img src={this.state.user.avatar} alt={this.state.user.firstName} width="150" height="150"/>
                        <h3>{this.state.user.firstName}</h3>
                        <textarea rows="4" cols="18" placeholder="write a small bio here..."></textarea>
                    </div>
                    
                </Wrapper>
                <Footer />
            </div>
        )
    }
}

export default Home;
