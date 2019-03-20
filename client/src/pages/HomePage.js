import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeNav from "../components/HomeNav";
import TopFiveProjects from "../components/TopFiveProjects";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import API from "../utils/API";

class Home extends Component {
  state = {
    user: {},
    projects: {}
  };

  componentDidMount() {
    API.getCurrentUser().then(response => {
      const currentUser = response.data;
      if (currentUser) {
        this.setState({
          user: currentUser
        });
      }
    });
    API.getTopFiveProjects()
      .then(res => {
        this.setState({ projects: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    let display;
    const { avatar, firstName } = this.state.user
    if (this.state.user) {
        display = <p>Hello {this.state.user.firstName}!</p>
    } else {
        display = <p>Hello there! <a href="/">Sign up here!</a></p>
    }

    return (
        <div>
            <HomeNav options={this.state.user} />
            <Wrapper>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <img className="jumbotron-avatar" src={avatar} alt={firstName} width="150" height="150" />
                        <h1 className="display-4">{display}</h1>
                        <p className="lead">Search for Startups to Endorse or <Link to="/projects" id="linkToProjects">Add A Project</Link> to get Endorsed!</p>

                    </div>
                    </div>
                    <div>
                    <h1 className="subTitle">New Posts!</h1>
                    <div className="topFive">
                        <ul>
                            {Object.keys(this.state.projects).map(key => <TopFiveProjects
                                key={key}
                                details={this.state.projects[key]}
                            />)}
                        </ul>
                    </div>
                </div>
            </Wrapper>
            <Footer />
        </div>
    )
}
}

export default Home;
