import { Container, CssBaseline, withStyles } from '@material-ui/core';
import L from 'leaflet';
import PropTypes from 'prop-types';
import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { withRouter } from 'react-router';
import Item from './Item';
import panda from '../img/panda.png';
import ziel from '../img/ziel.png';
import iqosBlack from '../img/iqos-black.png';
import iqosWhite from '../img/iqos-white.png';
import Alternative from "./Alternative";
import PointCounter from './PointCounter';
import Carousel from "./Carousel";

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

export const items = [
  {
    id: "1",
    img: panda,
    name: 'Wesprzyj funacje WWF',
    price: '220pkt = 5zł',
    amount: 'Przekaż 220pkt',
  },
  {
    id: "2",
    img: ziel,
    name: 'Posadź drzewo!',
    price: '220pkt = Drzewo',
    amount: 'Przekaż 220pkt',
  }
]

const alternatives = [
  {
    img: iqosBlack,
    name: 'Iqos',
    description: '10% zniżki',
  },
  {
    img: iqosWhite,
    name: 'Iqos',
    description: '10% zniżki',
  }
]

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
        <div>
          <PointCounter content={{leftPoint: 170, leftText: "PETÓW", rightPoint: 510, rightText: "PKT"}} />
        </div>
        <div style={{ height: '220px' }}>
          <Map center={position} zoom={15} onClick={this.onMapClick}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            {leafetMarkers}
          </Map>
        </div>
        <div>
          <div style={{ paddingTop: '15px' }} > MAKE THE WORLD BETTER</div>
          {items.map(item => <Item {...item} />)}
        </div>
        <div>
          <div style={{ paddingTop: '15px' }} >SMOKE BETTER FOR THE ENVIRONMENT</div>
          <Carousel >{alternatives.map(alternative => <Alternative {...alternative} />)}</Carousel>
        </div>
      </Container>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Dashboard));
