import React from 'react';
import { StyleSheet, View } from 'react-native';

import Map from './components/map';
import MyLocationButton from './components/myLocationButton';
import MyLocation from './components/myLocation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default () => (
  <View style={styles.container}>
    <Map />
    <MyLocationButton />
    <MyLocation />
  </View>
);
