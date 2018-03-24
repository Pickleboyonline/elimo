import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import AppBar from './Comp/AppBar';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#82f7ff',
      main: '#40c4ff',
      dark: '#0094cc',
      contrastText: '#000',
    },
  },
});

class ControlPanel extends Component {
    
  render() {
    //const classes = this.props.classes;

    return (
      <MuiThemeProvider theme={theme}>
      
      <AppBar />
    </MuiThemeProvider>
    )
  }
}


//export default injectSheet(styles)(ControlPanel);
export default ControlPanel;