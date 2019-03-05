import React, {Component} from "react";
import HomeNav from "../components/HomeNav";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import YourProjects from "../components/YourProjects";
//import Axios from "axios";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.titleRef = React.createRef();
        this.linkRef = React.createRef();
        this.descriptionRef = React.createRef();
        this.imageRef = React.createRef();
    }
    state = {
        projects: {},
    }
    //  ----  When component mounts grab all user's projects from db and display ----
    // componentDidMount(id) { 
    //     Axios.get("api/projects/" + id).then(res => {
    //         this.setState({
    //             projects: res.data
    //         })
    //     }).catch(err => console.log(err));
    // }

    handleSubmit = event => {
        event.preventDefault();
        const project = {
            title: this.titleRef.current.value,
            link: this.linkRef.current.value,
            description: this.descriptionRef.current.value,
            image: this.imageRef.current.value
        }
        this.addProject(project);
        event.currentTarget.reset();
        console.log(project);

    }  


    addProject = project => {
        const projects = {...this.state.projects};
        projects[`${Date.now()}`] = project 
        this.setState({ projects });
    }
        
    render() {
        return (
            <div>
                <HomeNav />
                <Wrapper>
                    <div>
                        <h1 className="subTitle">Projects</h1>
                    </div>
                    {/* This button toggles the modal form to add a project */}
                    <button id="addProject" type="button" className="btn btn-primary" data-toggle="modal" data-target="#project-modal">
                        + Add Project
                    </button>
                    {/* Container that will display all your projects */}
                    <div id="projectContainer">
                        <ul className="project-list">
                            {Object.keys(this.state.projects).map(key => <YourProjects
                                key={key}
                                index={key}
                                details={this.state.projects[key]}
                            />)}
                        </ul>
                    </div>
                    {/* Modal to add a project */}
                    <div className="modal fade" id="project-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalCenterTitle">Add Project</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form className="add-a-project" onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="inputTitle">Title</label>
                                            <input
                                                name="title"
                                                ref={this.titleRef}
                                                type="text"
                                                className="form-control"
                                                id="inputTitle"
                                                placeholder="title" />
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
                                            <label htmlFor="inputDescription">Description</label>
                                            <textarea
                                                name="description"
                                                ref={this.descriptionRef}
                                                className="form-control"
                                                id="inputDescription"
                                                rows="3"
                                                placeholder="write a description here...">
                                            </textarea>
                                        </div>
                                        <div className="form-group">
                                            <label id="imgLabel" htmlFor="uploadImage">Upload Image</label>
                                            <input
                                                name="image"
                                                ref={this.imageRef}
                                                type="file"
                                                className="form-control-file"
                                                id="uploadImage" />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button id="saveProject" type="submit" className="btn btn-primary">Save Project</button>
                                        </div>
                                    </form>
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