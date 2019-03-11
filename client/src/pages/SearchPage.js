import React, {Component} from "react";
import TopFiveProjects from "../components/TopFiveProjects";
import API from "../utils/API";
import Footer from "../components/Footer";
import Header from "../components/HomeNav";

class SearchPage extends Component {
    state = {
        searchResults: {}
    }

    searchProjects = query => {
        API.searchForProjects(query)
        .then( res => this.setState({ searchResults: res.data }, function(){
            console.log(this.state.searchResults)
        }))
        .catch(err => console.log(err));
    }

    componentDidMount(){
        this.searchProjects(window.location.href.split("q=").pop());
    
    }

    render(){
        return (
            <div>
                <Header />
                     {Object.keys(this.state.searchResults).map(key => <TopFiveProjects
                        key={key}
                        details={this.state.searchResults[key]}
                    />)}
                <Footer />
            </div>
        );
    }

}

export default SearchPage;