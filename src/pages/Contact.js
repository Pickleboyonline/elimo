import  React, { Component } from "react";
import NavBar from "../components/NavBar";
 import './styles/Login.css';
 import axios from 'axios';
 import {ButtonFleet} from './Home';
 import Modal from './../components/Modal';
import {Footer} from './../App';

class Form extends Component {
    state ={
        name: "",
        email: "",
        message: "",
        open: false,
        modalMessage: " ",
        modalHeading: " ",
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
          var self = this;
        axios.post("http://localhost/api/contact", {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }).then((result) => {
            console.log(result.data)
            self.setState({
                open: true,
                modalHeading: "Success",
                modalMessage: result.data.message
            })
        }).catch((err) => {
            //console.log(err.response.data)
            if (err.response) {
                self.setState({
                    open: true,
                    modalHeading: "Failed",
                    modalMessage: err.response.data.message
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
         <Modal 
            open={this.state.open}
            buttonText="ok"
            heading={this.state.modalHeading}
            body={this.state.modalMessage}
            onClick={(e)=>{
                this.setState({
                    open: false
                })
            }}
            />
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