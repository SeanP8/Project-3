import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeNav from "../components/HomeNav";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import favoritesLogo from "../heartLogo.png";
import deleteLogo from "../trashCanSmall.png";
import Donate from "../components/DonateButton";
import API from "../utils/API";
import CommentBox from "../components/CommentBox";

class DisplayIndividual extends Component {
  state = {
    project: {},
    favorites: []
  };

  componentDidMount() {
    API.getProject(this.props.match.params.id)
      .then(res => this.setState({ project: res.data },  this.getFavorites))
      .catch(err => console.log(err));
   
  }

  getFavorites = () => {
    API.getUsersFavorites().then((res)=> this.setState({favorites: res.data.map(datum => datum.projectID)}));
  }

  addFavorite = () => {
    API.addToFavorites(this.state.project.id).then(() =>{ 
      this.getFavorites()}
    ).catch((err) => {
      this.getFavorites()
    });
  }

  deleteThisFavorite = () => {
    API.deleteFavorite(this.state.project.id).then(() => {
      this.getFavorites();
    })
    .catch((err) => {
      this.getFavorites();
    });
  }
   

  handleBtnClick = (e) => {
    e.preventDefault();
    const projectID = this.state.project.id;
    const { favorites } = this.state;
    if(favorites.includes(projectID)){
      this.deleteThisFavorite();
    }else{
      this.addFavorite();
    }
  }

  render() {
    let { title, image, link, fundLink, description, id } = this.state.project;
    const { favorites } = this.state;
    if(link){
     let http = link.slice(0,7).toLowerCase();
     let https = link.slice(0, 8).toLowerCase();
     if(http !== "http://" && https !== "https://"){
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
              
                <h1 className="display-4">{ title }</h1>
              </div>
            </div>
            <button id="favorites-btn" onClick={this.handleBtnClick}><img src={favorites.includes(id) ? deleteLogo : favoritesLogo } alt="favorite button"/></button>
            <Donate fundLink={fundLink}/>
            <img id="display-image" src={ image } className="img-fluid" alt={ title }/>
            <p>{ description }</p>
            <a href={ link }>See Project</a>
            <Link id="back-anchor" to="/all-projects">← Back</Link>
          </div>
          <CommentBox project={id}/>
        </Wrapper>
        <Footer />
      </div>
    );
  }
}
export default DisplayIndividual;
