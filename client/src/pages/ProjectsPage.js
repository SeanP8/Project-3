import React, {Component} from "react";
import HomeNav from "../components/HomeNav";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
// import Joi from "joi-browser";
// import Form from "../../src/components/Form";
// import { project } from "../services/authService";


class ProjectsPage extends Component {

    state = {
        name: "",
        description: "",
        image: ""
    }
    



// state = {
//     data: { name: "", description: "", image: "", authID: null },
//     errors: {}
// };
// schema = {
//     name: Joi.string()
//         .required()
//         .label("Name"),
//     description: Joi.string()
//         .required()
//         .label("Description"),
//     image: Joi.string()
//         .required()
//         .label("Image"),
//     authID: Joi.integer()
//         .required()
//         .label("AuthID")
// };

// handleSaveProject = event => {
//     alert("Project Saved!");
//     // handle saving project here
// }

handleSubmit = event => {
    this.setState({
        name: event.target.value,
        description: event.target.value,
        image: event.target.value
    })
}

// doSubmit = async () => {
//     try {
//         const { data } = this.state;

//         const { data: jwt } = await project(data.name, data.description, data.image, data.authID);
//         localStorage.setItem("token", jwt);
//         this.props.history.push("/");
//       } catch (error) {
//         if (error.response && error.response.status === 400) {
//           // clone errors obj
//           const errors = { ...this.state.errors };
//           errors.username = error.response.data;
//           this.setState({ errors });
//         }
//       }
//       console.log("submitted");
//     };


render() {
    var display;
    if (this.state.name) {
        display = <p>{this.state.name}</p>
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
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">Add Project</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {/* <form className="ProjectForm" onSubmit={this.handleSubmit}>
                                        {this.renderInput("name", "Name")}
                                        {this.renderInput("description", "Description")}
                                        {this.renderInput("image", "Image")}
                                        {this.renderInput("authID", "AuthID")}
                                        {this.renderButton("Register")}
                                    </form> */}
                                <form onSubmit={this.handleSubmit.bind(this)}>
                                    <div className="form-group">
                                        <label htmlFor="inputName">Title</label>
                                        <input
                                              //value={this.state.name}
                                              onSubmit={this.handleSubmit.bind(this)}
                                            type="name"
                                            className="form-control"
                                            id="inputName"
                                            placeholder="My Project" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputDescription">Description</label>
                                        <textarea
                                            // value={this.state.description}
                                            // onSubmit={this.handleSubmit.bind(this)}
                                            className="form-control"
                                            id="inputDescription"
                                            rows="3"
                                            placeholder="The My Project app is a simple and quick way to...">
                                        </textarea>
                                    </div>
                                    <div className="form-group">
                                        <label id="imgLabel" htmlFor="uploadImage">Upload Image</label>
                                        <input
                                            // value={this.state.image}
                                            // onSubmit={this.handleSubmit.bind(this)}
                                            type="file"
                                            className="form-control-file"
                                            id="uploadImage" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
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