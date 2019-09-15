import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';
import {NavLink} from "react-router-dom";
import COLORS from '../variables/colors';

const styles = theme => ({
  '@global': {
    'a': {
      textDecoration: "none",
      color: COLORS.black
    },
  },
  container: {
    display: 'flex',
    padding: '10px 14px',
    margin: '10px 0px',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '14px',
    width: '100%',
    cursor: "pointer",
  },
  image: {
    width: "auto !important",
    height: "80px",
    paddingLeft: '10px',
    paddingRight: '20px'
  },
  spread: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: "100%"
  },
  text: {

  },
  textBold: {
    fontWeight: "600"
  },
  textRight: {
    textAlign: "right"
  },
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
    const { id, img, name, price, amount } = this.props;

    return (
      <NavLink className={classes.container} to={`/trade/${id}`}>
        <img className={classes.image} src={img} alt="" />
        <div className={classes.spread}>
          <div className={classes.name}>
            <div className={classes.textBold}>{name}</div>
            <div className={classes.text}>{price}</div>
          </div>
          <div className={classes.textRight}>{amount}</div>
        </div>
      </NavLink>
    );
  }
}

ReturnWaste.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(ReturnWaste));
