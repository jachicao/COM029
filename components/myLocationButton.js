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

// eslint-disable-next-line
class MyLocationButton extends React.Component {
  render() {
    return (
      <ActionButton
        buttonColor="rgba(255, 255, 255, 255)"
        onPress={this.props.onPress()}
        icon={<MaterialIcon name="my-location" style={styles.actionButtonIcon} />}
      />
    );
  }
}

MyLocationButton.propTypes = {
  onPress: PropTypes.func,
};

MyLocationButton.defaultProps = {
  onPress: () => {},
};

export default MyLocationButton;
