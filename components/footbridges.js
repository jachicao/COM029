import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import MapView from 'react-native-maps';

import { FOOTBRIDGES } from '../constants/footbridges';
import walkImage from '../images/walk.png';

const styles = StyleSheet.create({
  icon: {
    height: 25,
    width: 25,
  },
});

class Footbridges extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      footbridges: FOOTBRIDGES,
    };
  }
  render() {
    return (
      <View>
        {this.state.footbridges.map((obj, index) => (
          <MapView.Marker
            title="Pasarela"
            coordinate={{
              latitude: obj.latitude,
              longitude: obj.longitude,
            }}
            key={index}
          >
            <Image source={walkImage} style={styles.icon} />
          </MapView.Marker>
        ))}
      </View>
    );
  }
}

export default Footbridges;
