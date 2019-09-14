import { Avatar, Container, CssBaseline, Grid, Typography, withStyles } from '@material-ui/core';
import L from 'leaflet';
import PropTypes from 'prop-types';
import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { withRouter } from 'react-router';
import MainAppBar from './AppBar';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
    '.leaflet-container': {
      height: '100%',
      borderRadius: '20px'
    }
  },
  dashboard: {
    marginTop: theme.spacing(4)
  },
  avatar: {
    margin: 10
  },
  wasteButton: {
    marginTop: theme.spacing(2)
  }
});

const binIcon = new L.Icon({
  iconUrl: require('../img/smart-bin.svg'),
  iconRetinaUrl: require('../img/smart-bin.svg'),
  iconAnchor: [12.5, 35],
  popupAnchor: null,
  iconSize: [25, 35],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
})

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMapClick() {
    this.props.history.push('/map');
  }

  render() {
    const classes = this.props.classes;
    const points = 1015;

    const position = [52.111651, 20.831206];
    const markers = [{
      latlng: [52.110651, 20.831206],
      name: 'bin1'
    }, {
      latlng: [52.111712, 20.829563],
      name: 'bin2'
    }, {
      latlng: [52.113116, 20.834403],
      name: 'bin3'
    }, {
      latlng: [52.104883, 20.829565],
      name: 'bin4'
    }, {
      latlng: [52.115961, 20.836083],
      name: 'bin5'
    }];
    const leafetMarkers = markers.map(marker => (
      <Marker position={marker.latlng} key={`marker_${marker.name}`} icon={binIcon}>
        <Popup>
          <span>{marker.name}</span>
        </Popup>
      </Marker>
    ));

    return (
      <Container maxWidth="lg">
        <CssBaseline />
        <div className={classes.dashboard}>
        <MainAppBar header="SMART BIN"/>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={3}><Avatar className={classes.avatar}>JK</Avatar></Grid>
            <Grid item xs={9} container direction="column">
              <Grid item>
                <Typography component="h1" variant="h5">John Kowalski</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">Points: {points}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div style={{height: '220px'}}>
          <Map center={position} zoom={15} onClick={this.onMapClick}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            {leafetMarkers}
          </Map>
        </div>
      </Container>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Dashboard));
