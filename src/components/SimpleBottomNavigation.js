import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonIcon from '@material-ui/icons/Person';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import HomeIcon from '@material-ui/icons/Home';
import DescriptionIcon from '@material-ui/icons/Description';
import COLORS from '../variables/colors';
import { withRouter } from 'react-router';

const useStyles = makeStyles({
  root: {
      position: 'fixed',
      width: '100%',
      bottom: 0,
      backgroundColor: COLORS.green,
  },
  icon: {
      fill: COLORS.white,
  },
  iconText: {
      color: COLORS.white,
  },
  bottomNavigation: {
    color: COLORS.white,
  },
});


function SimpleBottomNavigation(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  
  const onChnageBottom = (componentName) => {
    props.history.push(componentName);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction  onClick={() => {onChnageBottom('/');}} label="Home" icon={<HomeIcon className={classes.icon}/>}/>
      <BottomNavigationAction label="Eco tips" icon={<DescriptionIcon className={classes.icon}/>} />
      <BottomNavigationAction label="Loyalty" icon={<LoyaltyIcon className={classes.icon}/>} />
      <BottomNavigationAction label="Maps" onClick={() => {onChnageBottom('/map');}} icon={<LocationOnIcon className={classes.icon}/>} />
      <BottomNavigationAction label="Profile" icon={<PersonIcon className={classes.icon}/>} />
    </BottomNavigation>
  );
}

export default withRouter(SimpleBottomNavigation);