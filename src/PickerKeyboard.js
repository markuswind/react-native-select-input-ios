/**
 * PickerKeyboard
 * https://github.com/markuswind/react-native-select-input
 */

import styles from './stylesheets/pickerKeyboard.css.js';

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {
  Modal,
  Picker,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

class PickerKeyboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
      visible: false,
    };
  }

  focus() {
    this.setVisible(true);
  }

  onCancelPressed() {
    let onCancel = this.props.onCancel;

    this.setVisible(false);
    onCancel && onCancel();
  }

  onSubmitPressed() {
    let onSubmit = this.props.onSubmit;

    this.setVisible(false);
    onSubmit && onSubmit(this.state.value);
  }

  onValueChange(value) {
    this.setState({
      value: value
    });
  }

  setVisible(visible) {
    this.setState({
      visible: visible
    });
  }

  getPickerItems() {
    return this.props.options.map((option, index) => {
      return (
        <Picker.Item
          key={option.value}
          value={option.value}
          label={option.label}
        />
      );
    });
  }

  render() {
    let props = this.props;
    let state = this.state;

    return (
      <Modal animationType={'slide'} transparent={true} visible={state.visible}>
        <View style={styles.container}>
          <View style={styles.modal}>
            <View style={[styles.buttonview, { backgroundColor: props.buttonsBackgroundColor }]}>
              <TouchableOpacity onPress={this.onCancelPressed.bind(this)}>
                <Text style={{color: props.color}}>
                  {props.cancelKeyText}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.onSubmitPressed.bind(this)}>
                <Text style={{color: props.color}}>{props.returnKeyText}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

PickerKeyboard.propTypes = {
  buttonsBackgroundColor: PropTypes.string,
  cancelKeyText:          PropTypes.string,
  onEndEditting:          PropTypes.func,
  onSubmitEditting:       PropTypes.func,
  options:                PropTypes.array,
  returnKeyText:          PropTypes.string,
  style:                  PropTypes.object,
  value:                  PropTypes.any,
};

export default PickerKeyboard;
