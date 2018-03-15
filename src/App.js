import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
//import './App.css';
import Home from './pages/Home';

class Footer extends Component {
  render() {
    return (
      <div style={{
        minHeight: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'white'
      }}>
      <p>© Empress Transportation service, Inc.</p>
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
    <div>

      <Route exact path="/" component={Home} />
      
    <Footer />
    </div>
  </Router>
      </div>
    );
  }
}

export default App;
