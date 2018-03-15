import React, { Component } from 'react';
import './styles/NavBar.css';
import logo from './../img/logo-dark.svg';

class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
            <img src={logo} className="navbar-logo" />
            </div>
        )
    }
}

export default NavBar;