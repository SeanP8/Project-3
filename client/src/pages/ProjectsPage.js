import React, { Component } from "react";
import HomeNav from "../components/HomeNav";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";

class Projects extends Component {
    render() {
        return (
            <div>
                <HomeNav/>
                <Wrapper>
                   <p>Projects Page!</p> 
                </Wrapper>
                <Footer />
            </div>
        )
    }
}

export default Projects;