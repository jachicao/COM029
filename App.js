import React from 'react';
import { StyleSheet, View } from 'react-native';

import Map from './components/map';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default () => (
  <View style={styles.container}>
    <Map />
  </View>
);
