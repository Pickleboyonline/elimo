import React, { Component } from 'react';
import './styles/Home.css';
import NavBar from './../components/NavBar';

class Home extends Component {
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
                            fontSize: '14pt'
                        }}>At Elimo, we strive to be the very best Limousine and Transportation service in Houston and the Greater Houston Metro Area. </p>
                    </div>
                </div> 
            </div>
        );
    }
}

export default Home;