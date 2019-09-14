import { Container, CssBaseline, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  }
});

class Dashboard extends React.Component {
  render() {
    const classes = this.props.classes;

    return (
      <Container maxWidth="md">
        <CssBaseline />
        Dashboard site
      </Container>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
