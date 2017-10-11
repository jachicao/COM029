import React from 'react';

import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

import MapView from 'react-native-maps';

import { FOOTBRIDGES } from '../constants/footbridges';
import { SOS_POINTS } from '../constants/sosPoints';
import runImage from '../images/run.png';
import walkImage from '../images/walk.png';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = -33.406510645638214;
const LONGITUDE = -70.69873809814453;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const styles = StyleSheet.create({
  callout: {
    width: 60,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  event: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 8,
  },
  eventData: {
    fontSize: 10,
    fontFamily: 'courier',
    color: '#555',
  },
  eventName: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#222',
  },
  eventList: {
    position: 'absolute',
    top: height / 2,
    left: 0,
    right: 0,
    bottom: 0,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

// eslint-disable-next-line react/no-multi-comp
class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={this.state.region}
        >
          {SOS_POINTS.map((obj, index) => (
            <MapView.Marker
              title="Punto S.O.S."
              coordinate={{
                latitude: obj.latitude,
                longitude: obj.longitude,
              }}
              image={runImage}
              key={index}
            />
          ))}
          {FOOTBRIDGES.map((obj, index) => (
            <MapView.Marker
              title="Pasarela"
              coordinate={{
                latitude: obj.latitude,
                longitude: obj.longitude,
              }}
              image={walkImage}
              key={index}
            />
          ))}
        </MapView>
      </View>
    );
  }
}

Map.propTypes = {
  provider: MapView.ProviderPropType
};

export default Map;
