import React from "react";
import { Link } from "react-router-dom";

const Favorite = props => {
  const { title, description, image, id } = props.details;
  return (
    <li className="favorites-container">
      <button
        className="btn btn-outline-danger btn-sm delete-btn"
        onClick={() => props.deleteFavorite(id)}
      >
        Delete
      </button>
      <h3 className="project-title">{title}</h3>
      <img className="project-image" src={image} alt={title} />
      <p>{description}</p>
      <Link to={"/project/" + id}>View Project</Link>
    </li>
  );
};

export default Favorite;
