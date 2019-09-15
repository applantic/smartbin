import { Container, CssBaseline, Typography, withStyles, Button, Grid, Avatar } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';
import COLORS from '../variables/colors';
import Photo from '../img/profile_photo.png';
import PointCounter from './PointCounter';


const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  avatar: {
    margin: 10,
    width: 106,
    height: 106,
  },
  info: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 40,
    marginBottom: 30,
    width: '100%',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: COLORS.green,
    color: COLORS.white,
    marginLeft: 20,
    marginRight: 20,
    width: '100%',
    height: 50,
    borderRadius: 6,
  },
  text: {
    
  },
  textBold: {
    fontWeight: "600",
    fontSize: 20,
  },
});

class Profile extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const classes = this.props.classes;

    return (
      <Container maxWidth="lg">
        <CssBaseline />
        <Grid container justify="center" alignItems="center">
      <div>
      <Avatar alt="Profile photo" src={Photo} className={classes.avatar} />
      </div>
      <div class={classes.info}>
            <div className={classes.textBold}>Anna Kowalska</div>
            <div className={classes.text}>annakowalska@gmail.com</div>
      </div>
      <div>
          <PointCounter content={{leftPoint: 170, leftText: "PETÓW", rightPoint: 510, rightText: "PKT"}} />
      </div>
    </Grid>
        <div className={classes.buttons}>
        <Button variant="contained" className={classes.button}>
        Twoje Kupony
      </Button>
      <Button variant="contained" className={classes.button}>
        Historia
      </Button>
        </div>
      </Container>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Profile));
