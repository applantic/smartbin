import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Grid, withStyles } from '@material-ui/core';
import { withRouter } from 'react-router';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 14,
  },
  arrow: {
    position: 'absolute',
    left: '5%',
  },
  info: {
    position: 'absolute',
    right: '5%',
  },
  title: {
    flexGrow: 1,
  },
  header: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24.2907,
    textAlign: 'center',
    textTransform: 'uppercase',
  }
});

class MainAppBar extends React.Component {

    constructor(props) {
        super(props);
        this.onBackHandler = this.onBackHandler.bind(this);
      }

  onBackHandler = () => {
    this.props.history.goBack();
  };

  render() {
    const classes = this.props.classes;

      return (
        <div className={this.props.classes.root}>
        <AppBar position="static">
          <Toolbar>
          <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          >
          {this.props.canGoBack && (
            <ArrowBackIosIcon className={classes.arrow} onClick={this.onBackHandler}/>
          )}
            <div className={classes.header}>
            <div>
            {this.props.header}
            </div>
            </div>
            <InfoOutlinedIcon className={classes.info} />
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
      )
};
}
  
export default withRouter(withStyles(styles)(MainAppBar));