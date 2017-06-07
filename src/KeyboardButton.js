/**
 * KeyboardButton
 * https://github.com/markuswind/react-native-select-input
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {
  Text,
  TouchableOpacity
} from 'react-native';

class KeyboardButton extends Component {
  render() {
    let props = this.props;

    return (
      <TouchableOpacity onPress={props.onPress}>
        <Text style={{ color: props.text}}>
          {props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

KeyboardButton.propTypes =  {
  color:   PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  text:    PropTypes.string.isRequired,
};

export default KeyboardButton;
