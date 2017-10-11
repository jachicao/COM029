import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from 'react-native-action-button';
import { StyleSheet } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: '#4285f4',
  },
});

const MyLocationButton = () => (
  <ActionButton
    buttonColor="rgba(255, 255, 255, 255)"
    onPress={this.props.onPress()}
    icon={<MaterialIcon name="gps-fixed" style={styles.actionButtonIcon} />}
  />
);

MyLocationButton.propTypes = {
  onPress: PropTypes.func,
};

MyLocationButton.defaultProps = {
  onPress: () => {},
};

export default MyLocationButton;
