import React from "react";
import HomeNav from "../components/HomeNav";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import Joi from "joi-browser";
import Form from "../../src/components/Form";
import * as userService from "../services/userService";


class ProjectsPage extends Form {

    state = {
        data: { name: "", description: "", image: "", authID: null },
        errors: {}
    };
    schema = {
        name: Joi.string()
            .required()
            .label("Name"),
        description: Joi.string()
            .required()
            .label("Description"),
        image: Joi.string()
            .required()
            .label("Image"),
        authID: Joi.integer()
            .required()
            .label("AuthID")
    };

    // handleSaveProject = event => {
    //     alert("Project Saved!");
    //     // handle saving project here
    // }

    // handleSubmit = event => {
    //     this.setState({
    //         name: event.target.value,
    //         description: event.target.value,
    //         image: event.target.value
    //     })
    // }

    doSubmit = async () => {
        try {
          console.log(this.state.data)
          await userService.register(this.state.data).then((user) => {
            window.location = "/home";
          });
        } catch (ex) {
          if (ex.response && ex.response.status === 400) {
            const errors = { ...this.state.errors };
            errors.username = ex.response.data;
            this.setState({ errors });
          }
        }
      };


    render() {
        var display;
        if (this.state.name) {
            display = <p>Project {this.state.name}!</p>
        } else {
            display = <h2>No Projects to Show</h2>
        }
        return (
            <div>
                <HomeNav />
                <Wrapper>
                    <div>
                        <h1 className="subTitle">Projects</h1>
                    </div><br />

                    <button id="addProject" type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                        + Add Project
                    </button>
                    <div id="projectContainer">
                        {/* <div id="displayName">Title goes here</div><br />
                        <div id="displayDescription">Description goes here</div><br />
                        <div id="displayImage">Image goes here</div> */}
                        {
                            display
                        }
                    </div>
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
                                    <form className="ProjectForm" onSubmit={this.handleSubmit}>
                                        {this.renderInput("name", "Name")}
                                        {this.renderInput("description", "Description")}
                                        {this.renderInput("image", "Image")}
                                        {this.renderInput("authID", "AuthID")}
                                        {this.renderButton("Register")}
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    {/* <button onClick={this.handleSaveProject} id="saveProject" type="button" className="btn btn-primary">Save Project</button> */}
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

export default ProjectsPage;