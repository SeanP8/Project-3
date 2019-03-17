import React from "react";
import { Link } from "react-router-dom";
import deleteLogo from "../trashCanSmall.png"
import API from "../utils/API";


const Favorite = props => {
  const { title, description, image, id } = props.details;
  let deleteThisFavorite = (id) => {
    console.log(id);
    API.deleteFavorite(id)
      .then(res => props.loadFavorites())
      .catch(err => console.log(err));
  }

  return (
    <li className="favorites-container">
      <button id="favorites-btn" onClick={(e) => {
        e.preventDefault();
        deleteThisFavorite(id);
      }}><img src={deleteLogo} alt="favorite button" id="deleteLogo" /></button>

      <h3 className="project-title">{title}</h3>
      <img className="project-image" src={image} alt={title} />
      <p>{description}</p>
      <Link to={"/project/" + id}>View Project</Link>
    </li>
  );
};

export default Favorite;
