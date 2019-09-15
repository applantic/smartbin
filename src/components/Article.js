import { Container, CssBaseline, Grid, withStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';
import Background from '../img/no-image.png';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    }
  },
  article: {
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '14px',
    padding: '12px'
  },
  noImage: {
    height: '80px',
    width: '80px',
    backgroundSize: '80px 80px',
    backgroundImage: `url(${Background})`
  }
});

class Article extends React.Component {

  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.article}>
        <Grid container>
          <Grid item xs={3}>
            <div className={classes.noImage}>
            </div>
          </Grid>
          <Grid item xs={9} container direction="column">
            <Grid item><Typography variant="subtitle2">{this.props.title}</Typography></Grid>
            <Grid item><Typography variant="body2">{this.props.text}</Typography></Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Article.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Article));
