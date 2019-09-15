import { Container, CssBaseline, Grid, withStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    }
  },
  container: {
    marginBottom: '10px'
  },
  pointCard: {
    boxShadow: '0px 0px 2.5px rgba(0, 0, 0, 0.25)',
    borderRadius: '9px',
    width: '180px',
    lineHeight: '65px',
    height: '65px',
    textAlign: 'center',
    verticalAlign: 'middle',
    display: 'table-cell'
  }
});

class PointCounter extends React.Component {

  render() {
    const {classes, content}= this.props;

    return (
      <Container maxWidth="lg" className={classes.container}>
        <CssBaseline/>
        <Grid container>
          <Grid item xs={5}>
            <Grid container direction="column" justify="center" alignItems="center" spacing={1}>
              <Grid item>
                <div className={classes.pointCard}><Typography variant="h4">{content.leftPoint}</Typography></div>
              </Grid>
              <Grid item>
                <Typography variant="body2">{content.leftText}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2} className={classes.equation}><Typography variant="body2" align="center" style={{fontSize: '1.8rem', marginTop: '12px'}}>=</Typography></Grid>
          <Grid item xs={5}>
            <Grid container direction="column" justify="center" alignItems="center" spacing={1}>
              <Grid item>
                <div className={classes.pointCard}><Typography variant="h4">{content.rightPoint}</Typography></div>
              </Grid>
              <Grid item>
                <Typography variant="body2">{content.rightText}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        
      </Container>
    );
  }
}

PointCounter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(PointCounter));
