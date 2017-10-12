import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView from 'react-native-maps';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Communications from 'react-native-communications';

import { STORES } from '../constants/stores';
import buildImage from '../images/build.png';

const styles = StyleSheet.create({
  starsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starIcon: {
    color: '#eb6e00',
  },
});

class Stores extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: STORES,
    };
  }
  render() {
    return (
      <View>
        {this.state.stores.map((obj, index) => (
          <MapView.Marker
            title={obj.name}
            coordinate={{
              latitude: obj.latitude,
              longitude: obj.longitude,
            }}
            image={buildImage}
            key={index}
          >
            <MapView.Callout onPress={() => Communications.phonecall(obj.contact, true)}>
              <View>
                <Text>{obj.name}</Text>
                <View style={styles.starsContainer}>
                  <Text style={styles.starIcon}>{obj.score}</Text>
                  <MaterialIcon name={obj.score > 0 ? (obj.score > 0.5 ? 'star' : 'star-half') : 'star-border'} style={styles.starIcon} />
                  <MaterialIcon name={obj.score > 1 ? (obj.score > 1.5 ? 'star' : 'star-half') : 'star-border'} style={styles.starIcon} />
                  <MaterialIcon name={obj.score > 2 ? (obj.score > 2.5 ? 'star' : 'star-half') : 'star-border'} style={styles.starIcon} />
                  <MaterialIcon name={obj.score > 3 ? (obj.score > 3.5 ? 'star' : 'star-half') : 'star-border'} style={styles.starIcon} />
                  <MaterialIcon name={obj.score > 4 ? (obj.score > 4.5 ? 'star' : 'star-half') : 'star-border'} style={styles.starIcon} />
                </View>
              </View>
            </MapView.Callout>
          </MapView.Marker>
        ))}
      </View>
    );
  }
}

export default Stores;
