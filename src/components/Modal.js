import  React, { Component } from "react";
import './styles/Modal.css';
import { ButtonFleet} from './../pages/Home';

class Modal extends Component {

 
    
    render() {

        if (this.props.open === true) {
            return (
            <div className="Modal-root">
                <div className="Modal-container">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.body}</p>
                    <div>
                        <ButtonFleet 
                        text={this.props.buttonText || " "}
                        style={{
                            float: 'right',
                            fontSize: '1.3rem'
                        }}
                        mode="button-fleet"
                        onClick={this.props.onClick}
                        />
                    </div>
                </div>
                
            </div>
            );
        } else {
            return (
                <div />
            )
        }
    }
}

export default Modal;