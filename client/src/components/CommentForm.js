import React from "react";
import Comment from "./Comment";
import API from "../utils/API";

class CommentForm extends React.Component {
  state = {
    message: "",
    user: {},
    comments: {}
  };

  componentWillReceiveProps() {
    API.getCurrentUser().then(res => {
      const currentUser = res.data;
      if (currentUser) {
        this.setState({ user: currentUser });
      }
      this.loadComments();
    });
  }

  loadComments = () => {
    console.log("loading comments...");
    API.getComments(this.props.project)
    .then(res => {console.log(res.data); this.setState({ comments: res.data })})
    .catch(err => console.log(err));
    console.log("HEY, comments should be loaded");
  }

  handleChange = event => {
    this.setState({ message: event.target.value });
  }

  handleSubmit = event => {
      event.preventDefault();
    const { avatar, firstName } = this.state.user;
    const newComment = this.state.message;
    API.submitComment({
      image: avatar,
      name: firstName,
      comment: newComment,
      ProjectId: this.props.project
    })
      .then(res => {console.log(`comment: ${JSON.stringify(res.data)}`); this.loadComments()})
      .catch(err => console.log(err));
      this.setState({ message: "" });
  }

  render() {
    return (
      <div className="commentBox"> 
        <h2 className="comment-title">Comments</h2>
        <form className="commentForm" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="message"
            className="comment-textbox"
            placeholder="write a comment..."
            value={this.state.message}
            onChange={this.handleChange}
          />
          <button type="submit" id="postcmt" className="btn btn-sm btn-outline-success">
            POST
          </button>
        </form>
        <div className="commentList">
          {Object.keys(this.state.comments).map(key => (
            <Comment key={key} details={this.state.comments[key]} />
          ))}
        </div>
      </div>
    );
  }
}

export default CommentForm;
