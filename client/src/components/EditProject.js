import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label, Input, ModalFooter } from 'reactstrap';

class EditProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            backdrop: true
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({ modal: !prevState.modal }));
    }

    handleChange = event => {
        const updateProject = { ...this.props.project, [event.currentTarget.name]: event.currentTarget.value };
        this.props.updateUserProject(this.props.index, this.props.project.id, updateProject);
    }

    render() {
        const { title, description, image, link } = this.props.details;
        return (
            <div>
                <ul>
                    <li className="project-info">
                        <button
                            className="btn btn-outline-danger btn-sm delete-btn" onClick={() => this.props.deleteUserProject(this.props.details.id)}>Delete</button>
                        <button
                            className="btn btn-outline-info btn-sm update-btn" data-toggle="modal" onClick={this.toggle}>Update</button>
                        <h3 className="project-title">{title}</h3>
                        <img src={image} alt={title} />
                        <p>{description}</p>
                        <a className="project-link" href={link}>See Project</a>
                    </li>
                </ul>
                {/* Updating Project modal */}
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
                    <ModalHeader toggle={this.toggle}>Update Project</ModalHeader>
                    <ModalBody>
                        <Label for="inputTitle">Title</Label>
                        <Input
                            name="title"
                            onChange={this.handleChange}
                            value={this.props.project.title}
                            type="text"
                            className="form-control"
                            id="inputTitle"
                            placeholder="title" />
                        <Label for="inputLink">Link</Label>
                        <Input
                            name="link"
                            onChange={this.handleChange}
                            value={this.props.project.link}
                            type="text"
                            className="form-control"
                            id="inputTitle"
                            placeholder="Link to your project" />
                        <Label for="inputDescription">Description</Label>
                        <textarea
                            name="description"
                            onChange={this.handleChange}
                            value={this.props.project.description}
                            className="form-control"
                            id="inputDescription"
                            rows="3"
                            placeholder="write a description here...">
                        </textarea>
                        <Label for="inputImage">Upload an Image</Label>
                        <Input
                            name="image"
                            onChange={this.handleChange}
                            value={this.props.project.image}
                            type="file"
                            className="form-control-file"
                            id="uploadImage" />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
                        <Button color="info" onClick={this.toggle}>Update</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default EditProject;