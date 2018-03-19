import React, { Component } from 'react'
import NavBar from "../components/NavBar";
import axios from 'axios';
import {ButtonFleet} from './Home'
import {Footer} from './../App';
import './styles/Verify.css';

export default class Verify extends Component {
    state = {
        heading: ""
    }
    componentDidMount() {
        var id = this.props.match.params.id;
        var self = this;
            axios.put("http://192.168.1.74/api/user/verify/" + id)
            .then((result) => {
                self.setState({
                    heading: "Success",
                    message: result.data.message
                })
            })
            .catch((err) => {
                console.log(err.response)
                if (err.response) {
                    self.setState({
                        heading: "Error",
                        message: err.response.data.error || err.response.data.message
                    })
                } else {
                    self.setState({
                        heading: "Error",
                        message: err.message
                    })
                }
            })
        
        
    }


  render() {
    return (
      <div className="Verify-root">
        <NavBar mode="light"/>
        <div className="Verify-App"> 
        <h1>{this.state.heading}</h1>
        <p>{this.state.message}</p>
        </div>
        <Footer style={{
            position: 'absolute',
            width: '100%',
            bottom: 0,
            left: 0
        }}/>
      </div>
    )
  }
}
