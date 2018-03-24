import React, { Component } from 'react';
import injectSheet, { jss, ThemeProvider } from 'react-jss';

const styles = {
    wrapper: {
        backgroundColor: 'black',
        height: '100px',
        color: 'white'
    }
}

class ControlPanel extends Component {
    
  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.wrapper}>
        cp
      </div>
    )
  }
}


export default injectSheet(styles)(ControlPanel);
