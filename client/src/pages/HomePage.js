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
        let display;
        const { avatar, firstName } = this.state.user
        if (this.state.user) {
            display = <p>Hello {this.state.user.firstName}!</p>
        } else {
            display = <p>Hello there! <a href="/">Sign up here!</a></p>
        }

        return (
            <div>
                <HomeNav options={this.state.user} />
                <Wrapper>
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">{display}</h1>
                            <a id="linkToProjects" href="/projects" target="_blank">Add Project Here</a>
                        </div>
                    </div>
                    <div className="userInfo">
                        <img src={avatar} alt={firstName} width="150" height="150" />
                        <h3>{firstName}</h3>
                        <textarea rows="4" cols="18" placeholder="write a small bio here..."></textarea>
                    </div>
                </Wrapper>
                <Footer />
            </div>
                    )
                }
            }
            
            export default Home;
