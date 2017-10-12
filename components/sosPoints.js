import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

import { SOS_POINTS } from '../constants/sosPoints';
import runImage from '../images/run.png';

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
            image={runImage}
            key={index}
          />
        ))}
      </View>
    );
  }
}

export default SosPoints;
