import  React, { Component } from "react";
import NavBar from "../components/NavBar";
 import './styles/Login.css';
 import axios from 'axios';
 import {ButtonFleet} from './Home'
import {Footer} from './../App';
import Modal from './../components/Modal'

 class Form extends Component {
    state ={
        password: "",
        email: "",
        nameFirst: "",
        nameLast: "",
        open: false,
        error: {
            nameFirst: true,
            nameLast: true,
            email: true,
            password: true
        }
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
        const error = {
            nameFirst: (this.state.error.nameFirst) ? {
                borderColor: 'red'
            } : {},
            email: (this.state.error.email) ? {
                borderColor: 'red'
            } : {},
            password: (this.state.error.password) ? {
                borderColor: 'red'
            } : {},
            nameLast: (this.state.error.nameLast) ? {
                borderColor: 'red'
            } : {},
        }



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
 
            <Modal 
            open={this.state.open}
            heading="Success"
            body="Please go verify your account with the link sent to your email."
            buttonText="ok"
            onClick={(e)=> {
                this.setState({
                    open: !this.state.open
                });
            }}
            />
            <form  style={{
                display: 'flex',
                flexDirection: 'column',
            }}onSubmit={this.handleSubmit}>
        
          
          
          
          <input type="email" 
          required
          placeholder="Email"
          className="contact-input-text"
          style={error.email}
          value={this.state.email} 
          onChange={this.handleChange('email')} />

<input type="password" 
          required
          placeholder="Password"
          className="contact-input-text"
          style={error.password}
          value={this.state.password} 
          onChange={this.handleChange('password')} />

          <input type="text" 
          required
          placeholder="First Name"
          style={error.nameFirst}
          className="contact-input-text"
          value={this.state.nameFirst} 
          onChange={this.handleChange('nameFirst')} />

          <input type="text" 
          required
          placeholder="Last Name"
          style={error.nameLast}
          className="contact-input-text"
          value={this.state.nameLast} 
          onChange={this.handleChange('nameLast')} />



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
        <h1>Sign Up</h1>
        <Form />
        </div>
        <Footer style={{
            //position: 'absolute',
            //width: '100%',
            //bottom: 0,
            //left: 0
        }}/>
        </div>
        )
        
    }
}

export default Login;