import React from "react";

const YourProjects = props => {
    const { title, description, image, link } = props.details;
    return (
        <li className="project-info">
            <button 
            className="btn btn-outline-danger btn-sm delete-btn" onClick={() => props.deleteYourProject(props.details.id)}>Delete</button>
            <button 
            className="btn btn-outline-info btn-sm update-btn">Update</button>
            <h3 className="project-title">{title}</h3>
            <img src={ image } alt={ title }/>
            <p>{ description }</p>
            <a className="project-link" href={ link }>See Project</a>
        </li>
    )
};

export default YourProjects;