import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  focusIcon: {
    fontSize: 20,
    height: 22,
    color: '#4285f4',
  },
  notFocusIcon: {
    fontSize: 20,
    height: 22,
    color: '#616161',
  },
});

// eslint-disable-next-line
class MyLocationButton extends React.Component {
  render() {
    return (
      <ActionButton
        buttonColor="rgba(255, 255, 255, 255)"
        onPress={() => { this.props.onPress(); }}
        icon={
          <MaterialIcon
            name="my-location"
            style={this.props.focus ? styles.focusIcon : styles.notFocusIcon}
          />
        }
      />
    );
  }
}

MyLocationButton.propTypes = {
  onPress: PropTypes.func,
  focus: PropTypes.bool,
};

MyLocationButton.defaultProps = {
  onPress: () => {},
  focus: false,
};

export default MyLocationButton;
