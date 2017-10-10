import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import Map from './components/map';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// http://oficinavirtual.vespucionorte.cl/mapa_avn-nuevo/js/marks.js
// http://oficinavirtual.vespucionorte.cl/mapa_avn-nuevo/js/core.js
// http://web.costaneranorte.cl/wp-content/themes/costanera/js/cn_map.js
// http://www.vespuciosur.cl/wp-content/themes/costanera/js/vs_map.js

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Map/>
      </View>
    );
  }
}


export default App;
