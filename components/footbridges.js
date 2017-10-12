import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

import { FOOTBRIDGES } from '../constants/footbridges';
import walkImage from '../images/walk.png';

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
            image={walkImage}
            key={index}
          />
        ))}
      </View>
    );
  }
}

export default Footbridges;
