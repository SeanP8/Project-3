import React from "react";

const TopFiveProjects = props => {
    const { title, description, image, link } = props.details;
    return (
        <li className="topFiveProjects">
            <h3 className="project-title">{title}</h3>
            <img src={ image } alt={ title }/>
            <p>{ description }</p>
            <a className="project-link" href={ link }>See Project</a>
        </li>
    )
};

export default TopFiveProjects;