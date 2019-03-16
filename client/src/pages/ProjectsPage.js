import React, { Component } from "react";
import HomeNav from "../components/HomeNav";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import EditProject from "../components/EditProject";

import API from "../utils/API";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.titleRef = React.createRef();
    this.linkRef = React.createRef();
    this.fundLinkRef = React.createRef();
    this.descriptionRef = React.createRef();
    this.imageRef = React.createRef();
  }
  state = {
    projects: {}
  };
  componentDidMount() {
    this.loadProjects();
  }
  loadProjects = () => {
    API.getUsersProjects()
      .then(res => this.setState({ projects: res.data }))
      .catch(err => console.log(err));
  };
  handleSubmit = event => {
    event.preventDefault();
    const project = {
      title: this.titleRef.current.value,
      link: this.linkRef.current.value,
      fundLink: this.fundLinkRef.current.value,
      description: this.descriptionRef.current.value,
      image: this.imageRef.current.value
    };
    API.saveProject({
      title: project.title,
      link: project.link,
      fundLink: project.fundLink,
      description: project.description,
      image: project.image
    })
      .then(res => this.loadProjects())
      .catch(err => console.log(err));

    event.currentTarget.reset();
  };

  updateUserProject = (key, id, updatedProject) => {
    const projects = { ...this.state.projects };
    projects[key] = updatedProject;
    this.setState({ projects });
    API.updateProject(id, updatedProject)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  deleteUserProject = id => {
    API.deleteProject(id)
      .then(res => this.loadProjects())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <HomeNav />
        <Wrapper>
          <div>
            <h1 id="projectsTitle">Projects</h1>
          </div>
          {/* This button toggles the modal form to add a project */}
          <button
            id="addProject"
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#project-modal"
          >
            + Add Project
          </button>
          {/* Container that will display all your projects */}
          <div id="projectContainer">
            {Object.keys(this.state.projects).map(key => (
              <EditProject
                key={key}
                index={key}
                details={this.state.projects[key]}
                project={this.state.projects[key]}
                deleteUserProject={this.deleteUserProject}
                updateUserProject={this.updateUserProject}
              />
            ))}
          </div>
          {/* Modal to add a project */}
          <div
            className="modal fade"
            id="project-modal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">
                    Add Project
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form className="add-a-project" /*onSubmit={this.handleSubmit}*/ method="POST" action="/api/projects" encType="multipart/form-data">
                    <div className="form-group">
                      <label htmlFor="inputTitle">Title</label>
                      <input
                        name="title"
                        ref={this.titleRef}
                        type="text"
                        className="form-control"
                        id="inputTitle"
                        placeholder="title"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputLink">Link</label>
                      <input
                        name="link"
                        ref={this.linkRef}
                        type="text"
                        className="form-control"
                        id="inputTitle"
                        placeholder="Link to your project" />
                        </div>
                    <div className="form-group">
                      <label htmlFor="inputFundLink">Link for funding</label>
                      <input
                        name="fundLink"
                        ref={this.fundLinkRef}
                        type="text"
                        className="form-control"
                        id="inputTitle"
                        placeholder="Link to fund your project" />

                    </div>
                    <div className="form-group">
                      <label htmlFor="inputDescription">Description</label>
                      <textarea
                        name="description"
                        ref={this.descriptionRef}
                        className="form-control"
                        id="inputDescription"
                        rows="3"
                        placeholder="write a description here..."
                      />
                    </div>
                    <div className="form-group">
                      <label id="imgLabel" htmlFor="uploadImage">
                        Upload Image
                      </label>
                      <input
                        name="image"
                        ref={this.imageRef}
                        type="file"
                        className="form-control-file"
                        id="uploadImage"
                      />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        id="saveProject"
                        type="submit"
                        className="btn btn-primary"
                      >
                        Save Project
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default Projects;
