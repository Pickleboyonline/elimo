import  React, { Component } from "react";
import NavBar from "../components/NavBar";
 import './styles/Login.css';
 import axios from 'axios';
 import {ButtonFleet} from './Home'
import {Footer} from './../App';

 class Form extends Component {
    state ={
        password: "",
        email: "",
        //message: "",
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
        axios.post("http://192.168.1.74/api/auth", {
            email: this.state.email,
            password: this.state.password,
            //message: this.state.message
        }).then((result) => {
            console.log(result.data)
        }).catch((err) => {
            console.log(err.response)
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
                marginBottom: 100,
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
        
          
          
          
          <input type="email" 
          required
          placeholder="Email"
          className="contact-input-text"
          value={this.state.email} 
          onChange={this.handleChange('email')} />
<input type="password" 
          required
          placeholder="Password"
          className="contact-input-text"
          value={this.state.password} 
          onChange={this.handleChange('password')} />



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
        <h1>Login</h1>
        <Form />
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

export default Login;