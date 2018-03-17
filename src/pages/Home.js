import React, { Component } from 'react';
import './styles/Home.css';
import NavBar from './../components/NavBar';
//import pseudo from 'react-pseudo'
import limo0 from './../img/cars/limo0.jpg';
import limo1 from './../img/cars/limo1.gif';
import limo2 from './../img/cars/limo2.jpg';
import limo3 from './../img/cars/limo3.jpg';
import sedan from './../img/cars/sedan.jpg';
import suv0 from './../img/cars/suv0.jpg';
import suv1 from './../img/cars/suv1.jpg';
import StackGrid from "react-stack-grid";
import axios from 'axios';
import {Footer} from './../App';
import {
    withRouter
  } from 'react-router-dom'


var mobile = require('is-mobile');



 export class ButtonFleet extends Component {
    render() {
        return (
            <button 
            //style={style}
            //className="button-fleet-active"
            onClick={this.props.onClick}
            type={this.props.type || "button"}
            className={this.props.mode || "button-standard"}
            style={this.props.style}
           >{this.props.text.toUpperCase()}</button>
        );
    }
}

class Image extends Component {
    render() {
        return (
            <div className="fleet-image">
            <div style={{
                display: 'flex',
    flexDirection: 'column',
    marginBottom: 20,
    alignItems: 'center',
    //backgroundColor: 'whitesmoke',
    padding: 5
            }}>
            <div style={{
                width: '100%',
                height: 200,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url('` + this.props.src + `')`
            }} />
            <h1 style={{
                margin: '5px 0px 5px 5px',
               
                fontSize: '16pt'
            }}>{this.props.text}</h1>
                </div>
                </div>
        )
    }
}


class All extends Component {
    render() {
        return (
            <div className="fleet-image-cont">
            <StackGrid
        columnWidth={300}
      >
                <Image src={limo0} text="6-10 Pax Limousine" />
                <Image src={sedan} text="3-4 Passenger Executive Sedan" />
                <Image src={suv0} text="5-7 Passenger SUV" />
                <Image src={limo1} text="44-56 Passenger Coach Bus" />
                <Image src={limo2} text="24-36 Passenger Bus" />
        <Image src={limo3} text="25 Passenger Limo Bus" />
                </StackGrid >
            </div>
        )
    }
}

class Limo extends Component {
    render() {
        return (
            
                

 <StackGrid
        columnWidth={300}
      >
        <Image src={limo0} text="6-10 Pax Limousine" />
                <Image src={limo1} text="44-56 Passenger Coach Bus" />
                <Image src={limo2} text="24-36 Passenger Bus" />
        <Image src={limo3} text="25 Passenger Limo Bus" />
      </StackGrid>


            
        )
    }
}


{/*<Image src={limo0} text="6-10 Pax Limousine" />
                <Image src={limo1} text="44-56 Passenger Coach Bus" />
                <Image src={limo2} text="24-36 Passenger Bus" />
        <Image src={limo3} text="25 Passenger Limo Bus" />*/}
class Suv extends Component {
    render() {
        return (
            <div className="fleet-image-cont">
            <StackGrid
        columnWidth={300}
      >
                <Image src={suv0} text="5-7 Passenger SUV" />
                </StackGrid>
            </div>
        )
    }
}

class Sedan extends Component {
    render() {
        return (
            <div className="fleet-image-cont">
            <StackGrid
        columnWidth={300}
      >
                <Image src={sedan} text="3-4 Passenger Executive Sedan" />
                </StackGrid>
            </div>
        )
    }
}


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



class Home extends Component {
    state = {
        fleetPage: 0
    }
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <NavBar />
                    <div className="jumbotron-cta">
                        <h1 style={{
                            //maxWidth: 250
                        }}>A complete line of Limousine 
                            Service for all occasions</h1>
                        <p style={{
                            //maxWidth: 250,
                            //marginTop: 10,
                            //fontSize: '14pt'
                        }}>At eLimo, we strive to be the very best Limousine and Transportation service in Houston and the Greater Houston Metro Area. </p>
                        <div>
                        <ButtonFleet text="Reserve now" onClick={(e)=> {
                            this.props.history.push('/signup')
                        }}/>
                        </div>
                    </div>
                </div> 
                    <div className="about-us standard-section">
                        <h1 style={{
                            //fontSize: '4.5em',
                            textAlign: 'center'
                        }}>Safe, Reliable, and Luxurious</h1>
                        <p style={{
                        textAlign: 'center'
                    }}>We are dedicated to developing and maintaining long term relationships with our clients. Our chauffeurs are well trained, screened and experienced and knowledge able of the city and professional. Our Vehicles are clean, well maintained, fully licensed and insured as required by law. Empress Transportation Service, Inc. continues to make every effort and whatever it takes to keep our clients happy.
</p>

                    </div>
                    <div className="fleet "
                    /* style={ !mobile() ? {
                        height: 850
                    } : {
                        height: 'unset'
                    }} */
                    >
                    <h1 style={{
                        textAlign: 'center',
                        fontSize: 60
                        
                    }}>{"Our Fleet".toUpperCase()}</h1>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: 10

                    }}>
                    <ButtonFleet mode={
                        !(this.state.fleetPage === 0) ? "button-fleet" : "button-fleet-active"
                    }text="all" 
                    onClick={(e) => {
                        this.setState({fleetPage: 0});
                    }}
                    />

                    <ButtonFleet mode={
                        !(this.state.fleetPage === 1) ? "button-fleet" : "button-fleet-active"
                    }
                    text="sedan" 
                    onClick={(e) => {
                        this.setState({fleetPage: 1});
                    }}/>

                    <ButtonFleet mode={
                        !(this.state.fleetPage === 2) ? "button-fleet" : "button-fleet-active"
                    }
                    text="suv" onClick={(e) => {
                        this.setState({fleetPage: 2});
                    }}
                    />

                    <ButtonFleet mode={
                        !(this.state.fleetPage === 3) ? "button-fleet" : "button-fleet-active"
                    }
                    text="limo" onClick={(e) => {
                        this.setState({fleetPage: 3});
                    }}
                    />
                    </div>
                    {this.state.fleetPage === 0 && <All />}
                    {this.state.fleetPage === 1 && <Sedan />}
                    {this.state.fleetPage === 2 && <Suv />}
                    {this.state.fleetPage === 3 && <Limo />}
                        </div>

                        <div className="standard-section" style={{
                            //backgroundColor: 'black',
                            alignItems: 'center',
                            marginBottom: 100
                        }}>
                        <h1 style={{
                            //color: 'white',
                            textAlign: 'center',
                            fontSize: '4.5em',
                        }}>Contact Us</h1>
                        <Form />
                        </div>
                        <Footer />
            </div>
        );
    }
}

export default withRouter(Home) ;