import React, { Component } from "react";
import HomeNav from "../components/HomeNav";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";

class Home extends Component {
    render() {
        return (
            <div>
                <HomeNav/>
                <Wrapper>
                   <p>Home Page!</p> 
                </Wrapper>
                <Footer />
            </div>
        )
    }
}

export default Home;
