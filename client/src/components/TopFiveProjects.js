import React from "react";
import { Link } from "react-router-dom";

const TopFiveProjects = props => {
    const { title, description, image, id } = props.details;
    return (
        <li className="topFiveProjects">
            <h3 className="project-title">{title}</h3>
            <img className="project-image" src={ image } alt={ title }/>
            <p>{ description }</p>
            <Link to={"/project/" + id}>View Project</Link>
        </li>
    )
};

export default TopFiveProjects;