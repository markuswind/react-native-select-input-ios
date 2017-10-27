/**
 * CustomKeyboard
 * https://github.com/markuswind/react-native-select-input
 */

import KeyboardButton from './KeyboardButton.js';
import styles from './../stylesheets/customKeyboard.css.js';

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {
  Modal,
  TouchableWithoutFeedback,
  View
} from 'react-native';

class CustomKeyboard extends Component {
  constructor(props) {
     super(props);
  }

  onCancelPress() {
    this.props.onCancelPress();
  }

  onSubmitPress() {
    this.props.onSubmitPress();
  }

  render() {
    let props = this.props;

    return (
      <Modal animationType={'slide'} transparent={true} visible={props.visible}>
        <TouchableWithoutFeedback onPress={this.onCancelPress.bind(this)}>
          <View style={styles.container}>
            <View style={styles.modal}>
              <View style={[styles.buttonview, { backgroundColor: props.buttonsBackgroundColor }]}>
                <KeyboardButton
                  color={props.buttonsTextColor}
                  onPress={this.onCancelPress.bind(this)}
                  text={props.cancelKeyText}
                  textAlign={'left'}
                  textSize={props.buttonsTextSize}
                />

                <KeyboardButton
                  color={props.buttonsTextColor}
                  onPress={this.onSubmitPress.bind(this)}
                  text={props.submitKeyText}
                  textAlign={'right'}
                  textSize={props.buttonsTextSize}
                />
              </View>

              <View>
                  {props.children}
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

CustomKeyboard.propTypes =  {
  buttonsBackgroundColor: PropTypes.string,
  buttonTextColor:        PropTypes.string,
  buttonTextSize:         PropTypes.number,
  cancelKeyText:          PropTypes.string,
  onCancelPress:          PropTypes.func.isRequired,
  onSubmitPress:          PropTypes.func.isRequired,
  submitKeyText:          PropTypes.string,
  visible:                PropTypes.bool.isRequired,
};

export default CustomKeyboard;
