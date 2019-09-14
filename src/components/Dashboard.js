import { Avatar, Button, Container, CssBaseline, Grid, Typography, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  dashboard: {
    marginTop: theme.spacing(4)
  },
  avatar: {
    margin: 10
  },
  wasteButton: {
    marginTop: theme.spacing(2)
  }
});

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.goToReturnWaste = this.goToReturnWaste.bind(this);
    this.goToBinMap = this.goToBinMap.bind(this);
  }

  goToReturnWaste() {
    this.props.history.push('/return');
  }

  goToBinMap() {
    this.props.history.push('/map');
  }

  render() {
    const classes = this.props.classes;
    const points = 1015;

    return (
      <Container maxWidth="lg">
        <CssBaseline />
        <div className={classes.dashboard}>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={3}><Avatar className={classes.avatar}>JK</Avatar></Grid>
            <Grid item xs={9} container direction="column">
              <Grid item>
                <Typography component="h1" variant="h5">John Kowalski</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">Points: {points}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" className={classes.wasteButton} fullWidth onClick={this.goToReturnWaste}>
            Return waste
          </Button>
          <Button fullWidth onClick={this.goToBinMap}>
            Find bin
          </Button>
        </div>
      </Container>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Dashboard));
