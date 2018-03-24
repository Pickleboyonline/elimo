import React, { Component } from 'react'

import {
    withRouter
  } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List ,{ ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';
import logo from './../../../img/logo-light.svg';
import CarIcon from 'material-ui-icons/DirectionsCar';
import SettingsIcon from 'material-ui-icons/Settings';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    //height: 430,
    zIndex: 1,
    minHeight: '100vh',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: Object.assign({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
  },theme.mixins.toolbar),
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

 class App extends Component {
     state = {
    mobileOpen: false,
    heading: "Welcome Imran",
  };

componentDidMount () {
    var secondRoute = window.location.pathname.split("/")[2];
    console.log(secondRoute);
    if (!secondRoute) {
        //console.log(secondRoute);
        this.props.history.push('/cp/reservations');
    }
    
}

changeHeading = (x) => {
    this.setState({
        heading: x
    })
}

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} >
        <img src={logo} 
            style={{
                height: 30
            }} />
        </div>
        
        <Divider />
        <List>
            <ListItem
            button
            onClick={(e)=> {
                this.props.history.push('/cp/reservations')
            }}
            >
          <ListItemIcon>
            <CarIcon />
          </ListItemIcon>
          <ListItemText primary="Reservations" />
        </ListItem>

        <ListItem button
        onClick={(e)=> {
            this.props.history.push('/cp/settings')
        }}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        
        </List>
        
        <List>{}</List>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              {this.state.heading}
            </Typography>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography wrap>{'Make a reservation here'}</Typography>
        </main>
      </div>
    );
  }
}



export default withRouter(withStyles(styles)(App)) 
