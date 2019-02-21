import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Login />
      </div>
    );
  }
}

export default App;
