import { Avatar, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography, withStyles } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.submitLoginForm = this.submitLoginForm.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.state = {
      phone: '',
      password: ''
    };
  }

  submitLoginForm(event) {
    event.preventDefault();
    console.log('Logged in as ' + this.state.phone + ' with password ' + this.state.password);
    this.props.history.push('/dashboard');
  }

  onPhoneChange(e) {
    this.setState({
      phone: e.target.value
    });
  }

  onPasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  render() {
    const classes = this.props.classes;

    return (
      <Container maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">Sign in</Typography>
          <form className={classes.form} noValidate onSubmit={this.submitLoginForm}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone number"
              name="phone"
              autoComplete="phone"
              autoFocus
              value={this.state.email}
              onChange={this.onPhoneChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={this.state.password}
              onChange={this.onPasswordChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Login));
