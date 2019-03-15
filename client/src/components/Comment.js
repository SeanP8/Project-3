import React from "react";
import moment from "moment";

const Comment = props => {
    const { name, image, comment, createdAt } = props.details
    return (
      <div className="comment">
      <div className="author">  
      <img src={ image } alt={ name } style={{width: 25, height:25, borderRadius: 5}}/>
        <span className="author-name">{ name }</span><span>{moment(createdAt).format('llll')}</span>
      </div>
    
        <p>{ comment }</p>
      </div>
    );
  }

export default Comment;
