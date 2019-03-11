import React, { Component } from 'react';
import HomeNav from "../components/HomeNav";
import Wrapper from "../components/Wrapper";

class FavoritesPage extends Component {
    render() {
        return (
            <div>
                <HomeNav />
                <Wrapper>
                <div>
                    <h1 className="subTitle">Favorites</h1>
                </div>
                </Wrapper>
            </div>
        );
    }
}

export default FavoritesPage;