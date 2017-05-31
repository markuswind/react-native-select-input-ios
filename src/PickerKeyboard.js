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
  getInitialState() {
    return {
      visible: false,
      value: this.props.value,
    };
  }

  focus() {
    this.setVisible(true);
  }

  onCancelPressed() {
    this.setVisible(false);
    this.props.onCancel();
  }

  onSubmitPressed() {
    this.setVisible(false);
    this.props.onSubmit(this.state.value);
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

  getPickerProps() {
    let pickerProps = {
      selectedValue: {this.state.value}
      onValueChange: {this.onValueChange}
      style: [
        styles.picker_bottom,
        { backgroundColor: this.props.keyboardBackgroundColor }
      ]
    };

    return pickerProps;
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

    return (
      <Modal animationType={'slide'} transparent={true} visible={this.state.visible}>
        <View style={styles.container}>
          <View style={styles.modal}>
            <View style={[styles.buttonview, { backgroundColor: props.buttonsBackgroundColor }]}>
              <TouchableOpacity onPress={this.onCancelPressed}>
                <Text style={{color: props.color}}>
                  {props.cancelKeyText}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.onSubmitPressed}>
                <Text style={{color: props.color}}>{props.returnKeyText}</Text>
              </TouchableOpacity>
            </View>

            <View>
              <Picker ref={'picker'} ...this.getPickerProps()>
                {this.getPickerItems()}
              </Picker>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
});

PickerKeyboard.propTypes = {
  buttonsBackgroundColor: PropTypes.string,
  cancelKeyText: PropTypes.string,
  onEndEditting: PropTypes.func,
  onSubmitEditting: PropTypes.func,
  options: PropTypes.array,
  returnKeyText: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string,
};

export default PickerKeyboard;
