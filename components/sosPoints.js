import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import MapView from 'react-native-maps';

import { SOS_POINTS } from '../constants/sosPoints';
import runImage from '../images/run.png';

const styles = StyleSheet.create({
  icon: {
    height: 25,
    width: 25,
  },
});

class SosPoints extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sosPoints: SOS_POINTS,
    };
  }
  render() {
    return (
      <View>
        {this.state.sosPoints.map((obj, index) => (
          <MapView.Marker
            title="Punto S.O.S."
            coordinate={{
              latitude: obj.latitude,
              longitude: obj.longitude,
            }}
            key={index}
          >
            <Image source={runImage} style={styles.icon} />
          </MapView.Marker>
        ))}
      </View>
    );
  }
}

export default SosPoints;
