import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
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
      <BottomNavigationAction  onClick={() => {onChnageBottom('/');}} label="Home" icon={<RestoreIcon color="secondary" className={classes.icon}/>}/>
      <BottomNavigationAction label="Eko porady" icon={<FavoriteIcon color="secondary"  className={classes.icon}/>} />
      <BottomNavigationAction label="Wymień pkt" icon={<LocationOnIcon className={classes.icon}/>} />
      <BottomNavigationAction label="Maps" icon={<LocationOnIcon className={classes.icon}/>} />
      <BottomNavigationAction label="Profil" icon={<LocationOnIcon className={classes.icon}/>} />
    </BottomNavigation>
  );
}

export default withRouter(SimpleBottomNavigation);