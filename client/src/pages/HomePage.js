import React, { Component } from "react";
import HomeNav from "../components/HomeNav";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import axios from "axios";

class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            user: null
        }
    }

    componentDidMount() {
        axios.get("/api/current_user").then((response) => {
            const currentUser = response.data;
            console.log("MOUNT CALL + " + Object.keys(response.data))
            if(currentUser){
                this.setState({
                    user: currentUser
                })
            }
        })
    }

    render() {
        var display;
        if(this.state.user){
            display = <p>Hello {this.state.user.firstName}!</p>
        }else{
            display = <p>Hello there! <a href="/">Sign up here!</a></p>
        }
        return (
            <div>
                <HomeNav/>
                <Wrapper>
                   {
                       display
                   }
                </Wrapper>
                <Footer />
            </div>
        )
    }
}

export default Home;
