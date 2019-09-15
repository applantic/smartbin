import { Container, CssBaseline, Grid, Typography, withStyles } from '@material-ui/core';
import L from 'leaflet';
import PropTypes from 'prop-types';
import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { withRouter } from 'react-router';
import Background from '../img/no-image.png';
import NavigationIcon from './NavigationIcon';
import SmartBinBigIcon from './SmartBinBigIcon';
import ArrowIcon from './ArrowIcon';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
    '.leaflet-container': {
      height: '100%',
    },
    '.hidden': {
      display: 'none'
    }
  },
  map: {
    position: 'absolute',
    top: 56,
    bottom: 56,
    width: '100%',
  },
  mapMarkerTooltip: {
    position: 'fixed',
    bottom: '56px',
    backgroundColor: theme.palette.common.white,
    width: '100%',
    zIndex: 1000,
    paddingTop: '15px',
    paddingBottom: '15px',
    borderRadius: '15px 15px 0 0'
  },
  noImage: {
    height: '100px',
    width: '100px',
    backgroundSize: '100px 100px',
    backgroundImage: `url(${Background})`
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
}, {
  latlng: [52.114133, 20.831649],
  name: 'bin6'
}, {
  latlng: [52.116164, 20.839485],
  name: 'bin7'
}, {
  latlng: [52.114970, 20.826790],
  name: 'bin8'
}, {
  latlng: [52.106934, 20.824262],
  name: 'bin9'
}];

class BinMap extends React.Component {

  constructor(props) {
    super(props);
    this.onReturnClick = this.onReturnClick.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showMarkerPopup: false
    };
  }

  onReturnClick() {
    this.props.history.push('/dashboard');
  }

  onMarkerClick() {
    const marker = markers[0];
    this.setState({
      showMarkerPopup: !this.state.showMarkerPopup
    });
  }

  render() {
    const classes = this.props.classes;
    const position = [52.111651, 20.831206];

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
          <Map center={position} zoom={15} onClick={this.onMarkerClick}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            {leafetMarkers}
          </Map>
        </div>
        <div className={this.state.showMarkerPopup ? '' : 'hidden'}>
          <div className={classes.mapMarkerTooltip}>
            <Container maxWidth="lg">
              <CssBaseline/>
              <Grid container justify="center" alignItems="center">
                <Grid item xs={4}>
                  <div className={classes.noImage}>
                  </div>
                </Grid>
                <Grid item xs={8} container direction="column" spacing={2}>
                  <Grid item xs={12} container alignItems="center">
                    <Grid item xs={2} style={{textAlign: 'center'}}>
                      <SmartBinBigIcon fontSize="large"/>
                    </Grid>
                    <Grid item xs={10} container direction="column">
                      <Grid item>
                        <Typography component="h1" variant="h6">Smart Bin 283</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2">ul. Jerozolimska 20</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} container spacing={1}>
                    <Grid item xs={9}>
                      <Grid container justify="center" alignItems="center" style={{backgroundColor: '#29B574', color: '#fff', height: '50px'}}>
                        <Grid item xs={3}>
                          <div style={{backgroundColor: '#29B574', color: '#fff', height: '50px', width: '50px', verticalAlign: 'middle', display: 'table-cell', textAlign: 'center'}}>
                            <ArrowIcon />
                          </div>
                        </Grid>
                        <Grid item xs={9}>
                          <div style={{marginRight: '3px'}}>
                            <Typography variant="caption">Kieruj się na północny wschód</Typography>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={3}>
                      <div style={{backgroundColor: '#29B574', color: '#fff', height: '50px'}}>
                        <div style={{backgroundColor: '#29B574', color: '#fff', height: '50px', width: '50px', verticalAlign: 'middle', display: 'table-cell', textAlign: 'center'}}>
                          <NavigationIcon/>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

BinMap.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(BinMap));
