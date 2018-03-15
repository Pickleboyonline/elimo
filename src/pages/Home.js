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

class Button extends Component {
    render() {
        return (
            <button 
            //style={style}
            className="button-standard"
            
            type="button">{this.props.text.toUpperCase()}</button>
        );
    }
}


class ButtonFleet extends Component {
    render() {
        return (
            <button 
            //style={style}
            //className="button-fleet-active"
            onClick={this.props.onClick}
            
            className={this.props.mode}
            type="button">{this.props.text.toUpperCase()}</button>
        );
    }
}

class Image extends Component {
    render() {
        return (
            <div style={{
                display: 'flex',
    flexDirection: 'column',
            }}>
            <img style={{
                width: '100%'
            }}src={this.props.src} />
            <p>{this.props.text}</p>
                </div>
        )
    }
}


class All extends Component {
    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Image src={limo0} text="6-10 Pax Limousine" />
                <Image src={sedan} text="3-4 Passenger Executive Sedan" />
                <Image src={suv0} text="5-7 Passenger SUV" />
            </div>
        )
    }
}

class Limo extends Component {
    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Image src={limo0} text="SUV" />
            </div>
        )
    }
}

class Suv extends Component {
    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Image src={suv0} text="SUV" />
            </div>
        )
    }
}

class Sedan extends Component {
    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Image src={sedan} text="Sedan" />
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
                            maxWidth: 250
                        }}>A complete line of Limousine 
                            Service for all occasions</h1>
                        <p style={{
                            maxWidth: 250,
                            marginTop: 10,
                            fontSize: '14pt'
                        }}>At Empress Transportation Service Inc, we strive to be the very best Limousine and Transportation service in Houston and the Greater Houston Metro Area. </p>
                        <div>
                        <Button text="Reserve now" />
                        </div>
                    </div>
                </div> 
                    <div className="about-us standard-section">
                        <h1 style={{
                            fontSize: '4.5em',
                            textAlign: 'center'
                        }}>Safe, Reliable, and Luxurious</h1>
                        <p style={{
                        textAlign: 'center'
                    }}>We are dedicated to developing and maintaining long term relationships with our clients. Our chauffeurs are well trained perfessionals that are experienced and familiar with the city. Our Vehicles are well maintained, fully licensed, and insured as required by law. Here at Empress we take every precaution to ensure the satisfaction of our customers.
</p>

                    </div>
                    <div className="fleet standard-section">
                    <h1 style={{
                        textAlign: 'center',
                        fontSize: 35
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
            </div>
        );
    }
}

export default Home;