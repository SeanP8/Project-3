import React, { Component } from "react";

const Favorite = props => {
  let fav = "far fa-thumbs-up";
  if (!props.favorited) fav += "fas fa-thumbs-up";
  return (
    <i onClick={props.onClick} style={{ cursor: "pointer" }} className={fav} />
  );
};

export default Favorite;
