import { Button, Container, CssBaseline, withStyles } from '@material-ui/core';
import L from 'leaflet';
import PropTypes from 'prop-types';
import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { withRouter } from 'react-router';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
    '.leaflet-container': {
      height: '100%',
    }
  },
  map: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
    height: '92%'
  },
  returnFooter: {
    position: 'fixed',
    bottom: 10
  }
});

export const binIcon = new L.Icon({
  iconUrl: require('../img/pointerIcon.svg'),
  iconRetinaUrl: require('../img/pointerIcon.svg'),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [25, 55],
  shadowUrl: '../img/marker-shadow.png',
  shadowSize: [68, 95],
  shadowAnchor: [20, 92],
})

class BinMap extends React.Component {

  constructor(props) {
    super(props);
    this.onReturnClick = this.onReturnClick.bind(this);
  }

  onReturnClick() {
    this.props.history.push('/dashboard');
  }

  render() {
    const classes = this.props.classes;
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
      <div>
        <div className={classes.map}>
          <Map center={position} zoom={15}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            {leafetMarkers}
          </Map>
        </div>
        <Container maxWidth="lg">
          <CssBaseline />
          <div className={classes.returnFooter}>
            <Button color="secondary" onClick={this.onReturnClick}>
              Return
            </Button>
          </div>
        </Container>
      </div>
    );
  }
}

BinMap.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(BinMap));
