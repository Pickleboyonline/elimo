import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
//import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';


export class Footer extends Component {
  render() {
    const style = this.props.style || {}
    return (
      <div style={Object.assign({
        minHeight: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'white'
      }, style)}>
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
      <Route  path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    </div>
  </Router>
      </div>
    );
  }
}

export default App;
