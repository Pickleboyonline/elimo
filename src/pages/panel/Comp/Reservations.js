import React, { Component } from 'react'
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Form from './Form';
export default class Reservations extends Component {
  render() {
    return (
      <div>
        <Button variant="raised" color="primary" >
        make a reservation
      </Button>
      <Form />
      </div>
    )
  }
}
