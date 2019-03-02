import React, { Component } from "react";
import HomeNav from "../components/HomeNav";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";

class Projects extends Component {
    render() {
        return (
            <div>
                <HomeNav />
                <Wrapper>
                    <div>
                        <h1 className="subTitle">Projects</h1>
                    </div>

                    <button onClick={this.handleClick} id="addProject" type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                        + Add Project
                    </button>
                    <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalCenterTitle">Add Project</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                   FORM GOES HERE 
                                </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button id="saveProject" type="button" className="btn btn-primary">Save Project</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                </Wrapper>
                    <Footer />
            </div>
                )
            }
        }
        
export default Projects;