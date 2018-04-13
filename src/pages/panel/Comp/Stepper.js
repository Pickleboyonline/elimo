import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Stepper, { Step, StepLabel, StepContent } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
  group: {
    marginLeft: 20,
  },
  radioHeading: {
      marginBottom: 0
  },
  radioSingle: {
    marginBottom: 10
}
});

function getSteps() {
  return ['Select type', 'Choose your options', 'Payment informantion', 'Review'];
}



class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
    type: 'airport',
    form: {
      type: 'airport',
      options: {},
      payment: {},
    }
  };

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };
  handleChange = event => {
    this.setState({ form: {
      type: event.target.value
    } });
  };


  getStepOptions = value => {
    const { classes } = this.props;
    switch (value) {
      case 'airport': 
        return 'hi';
      default:
        return ';(';
    }
  }

   getStepContent = (step) => {
    const { classes } = this.props;
    switch (step) {
      case 0:
        return (
            <RadioGroup
            aria-label="gender"
            name="gender1"
            className={classes.group}
            value={this.state.form.type}
            onChange={this.handleChange}
          >
            <FormControlLabel className={classes.radioSingle} value="airport" control={<Radio />} label={<div> 
                <Typography className={classes.radioHeading} variant="subheading" gutterBottom>
        <b>Airport</b>
      </Typography>
      <Typography  gutterBottom>
        Airport rates apply for transportation services in IAH ( George Bush Intercontinental Airport), HOU (William P Hobby), Ellington Field, Sugar Land Airport and all other private FBO around Houston TX and Houston metro area.
      </Typography>
            </div>} />
            <FormControlLabel className={classes.radioSingle} value="hourly" control={<Radio />} label={<div> 
                <Typography className={classes.radioHeading} variant="subheading" gutterBottom>
        <b>Hourly</b>
      </Typography>
      <Typography  gutterBottom>
      Hourly Rate applys for events in which the driver has to stay with the customer and drive them to more than one place
such as a party where the driver takes the passenger to multiple clubs and waits outside for them

      </Typography>
            </div>} />
            <FormControlLabel className={classes.radioSingle} value="mileage" control={<Radio />} label={<div> 
                <Typography className={classes.radioHeading} variant="subheading" gutterBottom>
        <b>Mileage</b>
      </Typography>
      <Typography  gutterBottom>
      Mileage rates apply for pick-up drop-off situations in which the driver takes a passanger from point a to point b
      </Typography>
            </div>} />
            
          </RadioGroup>
        );
      case 1:
        return this.getStepOptions(this.state.form.type);
      case 2:
        return `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`;
      default:
        return 'Unknown step';
    }
  }


  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{this.getStepContent(index)}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="raised"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&quot;re finished</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(VerticalLinearStepper);