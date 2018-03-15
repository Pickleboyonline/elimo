import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
//import './App.css';
import Home from './pages/Home';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
    

      <Route exact path="/" component={Home} />
      
    
  </Router>
      </div>
    );
  }
}

export default App;
