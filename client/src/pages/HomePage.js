import React, { Component } from "react";
import HomeNav from "../components/HomeNav";
import Wrapper from "../components/Wrapper";

class Home extends Component {
    render() {
        return (
            <div>
                <HomeNav/>
                <Wrapper>
                   <p>Home Page!</p> 
                </Wrapper>
            </div>
        )
    }
}

export default Home;