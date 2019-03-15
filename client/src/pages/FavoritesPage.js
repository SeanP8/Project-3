import React, { Component } from 'react';
import HomeNav from "../components/HomeNav";
import Wrapper from "../components/Wrapper";
import Favorites from "../components/Favorite";
import Footer from "../components/Footer";
import API from '../utils/API';

class FavoritesPage extends Component {
    state = {
        favorites: {}
    }

    componentDidMount() {
        this.loadFavorites();
    }

    loadFavorites = () => {
        API.getUsersFavorites()
        .then( res => {
            console.log(res.data);
            this.setState({ favorites: res.data });
        })
        .catch( err => console.log(err));
    }
    deleteFavorite = id => {
        API.deleteFavorite(id)
        .then( res => this.loadFavorites())
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
                        {Object.keys(this.state.favorites).map( key => <Favorites
                            key={key}
                            index={key}
                            details={this.state.favorites[key]}
                            deleteFavorite={this.deleteFavorite}
                            />)}
                    </ul>
                </div>
                </Wrapper>
                <Footer/>
            </div>
        );
    }
}

export default FavoritesPage;