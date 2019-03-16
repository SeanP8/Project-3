import React from 'react';
import CommentForm from './CommentForm';

const CommentBox = props => {
    const id = props.project
    return (
        <div className="commentBox">
            <h2 className="comment-title">Comments</h2>
            <CommentForm projectId = {id}/>       
        </div>
    );
};

export default CommentBox;