import React, { Component } from 'react';
import './styles/NavBar.css';
import logoLight from './../img/logo-dark.svg';
import logoDark from './../img/logo-light.svg';
import {  Link } from "react-router-dom"
class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
            <Link to="/">
            <img src={!(this.props.mode === "light") ? logoLight : logoDark} 
            className="navbar-logo" />
            </Link>
            </div>
        )
    }
}

export default NavBar;