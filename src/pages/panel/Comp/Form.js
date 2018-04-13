import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Fade from 'material-ui/transitions/Fade';
import Stepper from './Stepper';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5,
    width: 700
  }),
  skim: {
    position: 'absolute',
    height: '100vh',
    top: 0,
    left: 0,
    width: '100vw',
    zIndex: 10000,
    backgroundColor: 'rgba(0, 0, 0, 0.22)'
  },
  cont: {
    position: 'absolute',
    zIndex: 10001,
    display: 'flex',
    height: '100vh',
    width: '100%',
    justifyContent: 'center',
    //alignItems: 'center',
    top: 0,
    left: 0,
  }
});

function PaperSheet(props) {
  const { classes } = props;
  return (
    <div>
        <Fade in={true}>
    <div className={classes.skim} />
    </Fade>
        <Fade in={true}>
        <div className={classes.cont}>
      <Paper className={classes.root} elevation={4}>
        <Typography variant="headline" component="h3">
          Make a Reservation
        </Typography>
        <Typography component="p">
          Please complete the steps below.
        </Typography>
        <Stepper />
      </Paper>
      </div>
      </Fade>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);