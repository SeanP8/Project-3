import React, { Component } from 'react';
import HomeNav from "../components/HomeNav";
import Wrapper from "../components/Wrapper";
import Favorites from "../components/FavoriteComp";
import Footer from "../components/Footer";
import API from '../utils/API';

class FavoritesPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            favorites: []
        }
        this.loadFavorites = this.loadFavorites.bind(this);
    }
  

    componentDidMount() {
        this.loadFavorites();
    }

    loadFavorites = () => {
        API.getUsersFavorites()
        .then( res => {
            console.log(res.data);   
            API.getUsersFavProjects(res.data.map(datum => datum.projectID))
            .then(favs => {
                console.log(favs.data);
                this.setState({favorites: favs.data})
            });
        })
        .catch( err => console.log(err));
    }

  

    render() {
        return (
            <div>
                <HomeNav />
                <Wrapper>
                <div>
                    <h1 className="subTitle">Favorites</h1>
                    <ul>
                        {this.state.favorites.map((fav, key) => {
                            console.log(fav);
                        return <Favorites
                            key={key}
                            loadFavorites={this.loadFavorites}
                            details={fav}
                            />})}
                    </ul>
                </div>
                </Wrapper>
                <Footer/>
            </div>
        );
    }
}

export default FavoritesPage;