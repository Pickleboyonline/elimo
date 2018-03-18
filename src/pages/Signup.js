import  React, { Component } from "react";
import NavBar from "../components/NavBar";
 import './styles/Login.css';
 import axios from 'axios';
 import {ButtonFleet} from './Home'
import {Footer} from './../App';
import Modal from './../components/Modal'
import isEmail from 'validator/lib/isEmail';

 class Form extends Component {
    state ={
        password: "",
        email: "",
        nameFirst: "",
        nameLast: "",
        submit: false,
        open: false,
        modalMessage: "",
        modalHeading: "",
            errorNameFirst: false,
            errorNameLast: false,
            errorEmail: false,
            errorPassword: false
        
        //message: "",
    }
 
    handleChange = (name, errorName) => event => {
        this.setState({
          [name]: event.target.value,
          [errorName]: false
        });
      }



      checkForm = () => {
        // TODO: add from validation
        var sendForm = true;
       
        if (!isEmail(this.state.email)) {
            this.setState({
                errorEmail: true
            })
            sendForm = false;
        }
        if (!this.state.nameFirst) {
            this.setState({
                errorNameFirst: true
            })
            sendForm = false;
        }
        if (!(this.state.nameLast)) {
            this.setState({
                errorNameLast: true
            })
            sendForm = false;
        }
        if (!(this.state.password)) {
            this.setState({
                errorPassword: true
            })
            sendForm = false;
        }
        
        if (sendForm === true) {
            this.sendForm();
            //this.setState({
            //    open: true
            //})
        }
        //isEmail(this.state.email)
        
        //this.sendForm()
      }

      sendForm = () => {
          var self = this;

        axios.post("http://192.168.1.74/api/user", {
            email: this.state.email,
            password: this.state.password,
            nameLast: this.state.nameLast,
            nameFirst: this.state.nameFirst
            //message: this.state.message
        }).then((result) => {
            console.log(result.data)
            self.setState({
                open: true,
                modalHeading: "Success",
                modalMessage: result.data.message
            })

        }).catch((err) => {
            console.log(err.response)
            if (err.response) {
                self.setState({
                    open: true,
                    modalHeading: "Failed",
                    modalMessage: err.response.data.error
                })
            } else {
                self.setState({
                    open: true,
                    modalHeading: "Failed",
                    modalMessage: err.message
                })
            }

            
        })
      }
    
      handleSubmit = (event) => {
        //alert('A name was submitted: ' + this.state.name);
        this.checkForm();
        event.preventDefault();
      }

    render() {
        const error = {
            nameFirst: (this.state.errorNameFirst) ? {
                borderColor: 'red'
            } : {},
            email: (this.state.errorEmail) ? {
                borderColor: 'red'
            } : {},
            password: (this.state.errorPassword) ? {
                borderColor: 'red'
            } : {},
            nameLast: (this.state.errorNameLast) ? {
                borderColor: 'red'
            } : {},
        }

        //if (this.)



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
            heading={this.state.modalHeading}
            body={this.state.modalMessage}
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
          onChange={this.handleChange('email', 'errorEmail')} />

<input type="password" 
          required
          placeholder="Password"
          className="contact-input-text"
          style={error.password}
          value={this.state.password} 
          onChange={this.handleChange('password', 'errorPassword')} />

          <input type="text" 
          required
          placeholder="First Name"
          style={error.nameFirst}
          className="contact-input-text"
          value={this.state.nameFirst} 
          onChange={this.handleChange('nameFirst', 'errorNameFirst')} />

          <input type="text" 
          required
          placeholder="Last Name"
          style={error.nameLast}
          className="contact-input-text"
          value={this.state.nameLast} 
          onChange={this.handleChange('nameLast', 'errorNameLast')} />



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
        <p>You need an account in order to make a reservation</p>
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