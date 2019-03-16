import React from 'react';
import CommentForm from './CommentForm';

const CommentBox = props => {
    return (
        <div className="commentBox">
            <h2 className="comment-title">Comments</h2>
            <CommentForm projectId = {props.project}/>       
        </div>
    );
};

export default CommentBox;