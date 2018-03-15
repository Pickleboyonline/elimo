import React, { Component } from 'react';
import './styles/Home.css';
import NavBar from './../components/NavBar';
//import pseudo from 'react-pseudo'

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
                        }}>At eLimo, we strive to be the very best Limousine and Transportation service in Houston and the Greater Houston Metro Area. </p>
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
                    }}>We are dedicated to developing and maintaining long term relationships with our clients. Our chauffeurs are well trained, screened and experienced and knowledge able of the city and professional. Our Vehicles are clean, well maintained, fully licensed and insured as required by law. Empress Transportation Service, Inc. continues to make every effort and whatever it takes to keep our clients happy.
</p>

                    </div>
                    <div className="fleet standard-section">
                    <h1 style={{
                        textAlign: 'center',
                        fontSize: 35
                    }}>{"Our Fleet".toUpperCase()}</h1>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center'
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
                        </div>
            </div>
        );
    }
}

export default Home;