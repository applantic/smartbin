import { Container, CssBaseline, Typography, withStyles, Button } from '@material-ui/core';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';
import MainAppBar from './AppBar';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  returnWaste: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  returnFooter: {
    position: 'fixed',
    bottom: 10
  }
});

class ReturnWaste extends React.Component {

  constructor(props) {
    super(props);
    this.onReturnClick = this.onReturnClick.bind(this);
  }

  onReturnClick() {
    this.props.history.push('/dashboard');
  }

  render() {
    const classes = this.props.classes;

    return (
      <Container maxWidth="lg">
        <CssBaseline />
        <div className={classes.returnWaste}>
          <RssFeedIcon className="material-icons" style={{fontSize: '120px'}} />
          <Typography variant="body2">Please connect to the smart bin</Typography>
        </div>
        <div className={classes.returnFooter}>
          <Button color="secondary" onClick={this.onReturnClick}>
            Return
          </Button>
        </div>
      </Container>
    );
  }
}

ReturnWaste.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(ReturnWaste));
