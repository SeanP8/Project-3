import React from 'react';
import CommentForm from './CommentForm';

const CommentBox = () => {
    return (
        <div className="commentBox">
            <h2 className="comment-title">Comments</h2>
            <CommentForm/>       
        </div>
    );
};

export default CommentBox;