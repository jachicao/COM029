import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

import Stores from './stores';
import Footbridges from './footbridges';
import SosPoints from './sosPoints';
import MyLocationMarker from './myLocationMarker';
import MyLocationButton from './myLocationButton';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = -33.406510645638214;
const LONGITUDE = -70.69873809814453;
const LATITUDE_DELTA = 0.09;// 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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
      myPosition: null,
      focusMyPosition: false,
      focusing: false,
    };
  }

  onFocus() {
    if (this.state.myPosition != null) {
      this.setState({ focusMyPosition: true, focusing: true });
      if (this.map != null) {
        this.map.animateToCoordinate(this.state.myPosition);
      }
    }
  }
  onNewPosition(position) {
    const isNull = this.state.myPosition == null;
    this.setState({ myPosition: position });
    if (isNull) {
      this.onFocus();
    }
  }
  onRegionChange() {
    if (!this.state.focusing) {
      this.setState({ focusMyPosition: false });
    }
  }
  onRegionChangeComplete() {
    if (this.state.focusing) {
      this.setState({ focusing: false });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={this.state.region}
          ref={(ref) => { this.map = ref; }}
          onRegionChange={() => { this.onRegionChange(); }}
          onRegionChangeComplete={() => { this.onRegionChangeComplete(); }}
        >
          <SosPoints />
          <Stores />
          <Footbridges />
          <MyLocationMarker
            onNewPosition={(position) => { this.onNewPosition(position); }}
          />
        </MapView>
        <MyLocationButton
          onPress={() => { this.onFocus(); }}
          focus={this.state.focusMyPosition}
        />
      </View>
    );
  }
}

export default Map;
