import  React, { Component } from "react";
import NavBar from "../components/NavBar";
 import './styles/Login.css';
 import axios from 'axios';
 import {ButtonFleet} from './Home'
import {Footer} from './../App';
class Form extends Component {
    state ={
        name: "",
        email: "",
        message: "",
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

      checkForm = () => {
        // TODO: add from validation
        this.sendForm()
      }

      sendForm = () => {
        axios.post("http://192.168.1.74/api/contact", {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }).then((result) => {
            console.log(result.data)
        }).catch((err) => {
            console.log(err.response.data)
        })
      }
    
      handleSubmit = (event) => {
        //alert('A name was submitted: ' + this.state.name);
        this.checkForm();
        event.preventDefault();
      }

    render() {
        return (
            <div style={{
                //backgroundColor: 'white',
                marginTop: 28,
                marginBottom: 28,
                minHeight: 300,
                display: 'flex',
                flexDirection: 'column',
                padding: 16,
                //maxWidth: 500
            }}>
            <form  style={{
                display: 'flex',
                flexDirection: 'column',
            }}onSubmit={this.handleSubmit}>
        
          
          
          <input type="text" 
          placeholder="Name"
          className="contact-input-text"
          value={this.state.name} 
          onChange={this.handleChange('name')} />
          <input type="email" 
          required
          placeholder="Email"
          className="contact-input-text"
          value={this.state.email} 
          onChange={this.handleChange('email')} />
<textarea style={{
    height: 150
}}
placeholder="Message"
value={this.state.message} 
          onChange={this.handleChange('message')}
></textarea>
        <div style={{
            display: 'flex',
            justifyContent: 'flex-end'
        }}>
        <ButtonFleet 
        onClick={this.handleSubmit} 
        text="submit" 
        type="Submit" 
        style={{
            margin: 0,
            fontSize: '1.3rem'
        }}
        mode="button-fleet"
        //mode="button-fleet-active" 
        />
        </div>
        
      </form>
            </div>
        )
    }
}

class Login extends Component {
    render() {
        return (
        <div>
        <NavBar mode="light"/>
        <div className="Login-App"> 
        <h1>Contact Us</h1>
        <Form />
        </div>
        <Footer style={{
            
        }}/>
        </div>
        )
        
    }
}

export default Login;