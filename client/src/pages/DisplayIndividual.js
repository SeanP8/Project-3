import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeNav from "../components/HomeNav";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import favoritesLogo from "../heartLogo.png";
import deleteLogo from "../trashCanSmall.png";
import Donate from "../components/DonateButton";
import API from "../utils/API";
//import CommentForm from "../components/CommentForm";
import Comment from "../components/Comment";

class DisplayIndividual extends Component {
  state = {
    project: {},
    favorites: [],  
    user: {},
    comments: {},
    message: ""
  };

  componentDidMount() {
    API.getProject(this.props.match.params.id)
      .then(res => this.setState({ project: res.data }, this.getFavorites))
      .catch(err => console.log(err));
    API.getCurrentUser().then(res => {
      const currentUser = res.data;
      if (currentUser) {
        this.setState({ user: currentUser });
      }
    });
    API.getComments(this.props.match.params.id)
      .then(res => this.setState({ comments: res.data }))
      .catch(err => console.log(err));
  };

  getFavorites = () => {
    API.getUsersFavorites().then(res =>
      this.setState({ favorites: res.data.map(datum => datum.projectID) })
    );
  };

  loadComments = () => {
    console.log("loading comments...");
    API.getComments(this.state.project.id)
      .then(res => {
        console.log(res.data);
        this.setState({ comments: res.data });
      })
      .catch(err => console.log(err));
    console.log("HEY, comments should be loaded");
  };

  handleChange = event => {
    this.setState({ message: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { avatar, firstName } = this.state.user;
    const newComment = this.state.message;
    API.submitComment({
      image: avatar,
      name: firstName,
      comment: newComment,
      ProjectId: this.state.project.id
    })
      .then(res => {
        console.log(`comment: ${JSON.stringify(res.data)}`);
        this.loadComments();
      })
      .catch(err => console.log(err));
    this.setState({ message: "" });
  };

  addFavorite = () => {
    API.addToFavorites(this.state.project.id)
      .then(() => {
        this.getFavorites();
      })
      .catch(err => {
        this.getFavorites();
      });
  };

  deleteThisFavorite = () => {
    API.deleteFavorite(this.state.project.id)
      .then(() => {
        this.getFavorites();
      })
      .catch(err => {
        this.getFavorites();
      });
  };

  handleBtnClick = e => {
    e.preventDefault();
    const projectID = this.state.project.id;
    const { favorites } = this.state;
    if (favorites.includes(projectID)) {
      this.deleteThisFavorite();
    } else {
      this.addFavorite();
    }
  };

  render() {

    let { title, image, link, fundLink, description, id } = this.state.project;
    const { favorites } = this.state;
    if (link) {
      let http = link.slice(0, 7).toLowerCase();
      let https = link.slice(0, 8).toLowerCase();
      if (http !== "http://" && https !== "https://") {
        link = "https://" + link;
      }
    }
    return (
      <div>
        <HomeNav />
        <Wrapper>
          <div>
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <h1 className="display-4">{title}</h1>
              </div>
            </div>
            <button id="favorites-btn" onClick={this.handleBtnClick}>
              <img
                src={favorites.includes(id) ? deleteLogo : favoritesLogo}
                alt="favorite button"
              />
            </button>
            <Donate fundLink={fundLink} />
            <img
              id="display-image"
              src={image}
              className="img-fluid"
              alt={title}
            />
            <p>{description}</p>
            <a href={link}>See Project</a>
            <Link id="back-anchor" to="/all-projects">
              ← Back
            </Link>
          </div>
          {/* <CommentForm project={this.props.match.params.id} /> */}
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
        </Wrapper>
        <Footer />
      </div>
    );
  }
}
export default DisplayIndividual;
