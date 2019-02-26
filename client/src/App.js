import React, { Component } from 'react';
import './App.css';
import queryString from "query-string";

class App extends Component {
  componentWillMount() {
    var query = queryString.parse(this.props.location.search);
    if (query.token) {
      window.localStorage.setItem("jwt", query.token);
      this.props.history.push("/");
   }
  }
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;