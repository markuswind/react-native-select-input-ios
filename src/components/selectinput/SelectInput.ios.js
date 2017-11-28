/**
 * SelectInput
 * https://github.com/markuswind/react-native-select-input
 */

import AbstractSelectInput from './AbstractSelectInput.js';
import PickerKeyboard from './../PickerKeyboard.js';

import styles from './../../stylesheets/selectInputIOS.css.js';

import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableWithoutFeedback, View, ViewPropTypes } from 'react-native';

class SelectInput extends AbstractSelectInput {
  constructor(props) {
    super(props);

    // refs
    this.pickerKeyboard = null;

    // initial state
    this.state = {
      selectedValue: props.value
    };
  }

  getValue() {
    return this.state.selectedValue;
  }

  focus() {
    let props = this.props;
    let pickerKeyboard = this.pickerKeyboard;

    pickerKeyboard && pickerKeyboard.focus();
    props.onBeginEditing && props.onBeginEditing();
  }

  render() {
    let props = this.props;

    // TODO: - add fully customizable styles
    return (
      <TouchableWithoutFeedback onPress={this.focus.bind(this)}>
        <View style={props.style}>
          <Text
            style={props.labelStyle || styles.defaultlabelstyle}
            adjustFontSizeToFit={true}
            allowFontScaling={false}
            numberOfLines={1}
            >
            {this.getValueLabel()}
          </Text>

          <PickerKeyboard
            ref={(c) => { this.pickerKeyboard = c; }}
            options={props.options}
            value={props.value}
            onCancel={this.onCancel.bind(this)}
            onSubmit={this.onSubmit.bind(this)}
            buttonsBackgroundColor={props.buttonsBackgroundColor}
            buttonsTextColor={props.buttonsTextColor}
            buttonsTextSize={props.buttonsTextSize}
            keyboardBackgroundColor={props.keyboardBackgroundColor}
            submitKeyText={props.submitKeyText}
            cancelKeyText={props.cancelKeyText}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

SelectInput.propTypes = {
  buttonsBackgroundColor:  PropTypes.string,
  buttonsTextColor:        PropTypes.string,
  buttonsTextSize:         PropTypes.number,
  cancelKeyText:           PropTypes.string,
  keyboardBackgroundColor: PropTypes.string,
  labelStyle:              PropTypes.object,
  onEndEditing:            PropTypes.func,
  onSubmitEditing:         PropTypes.func,
  options:                 PropTypes.array,
  submitKeyText:           PropTypes.string,
  style:                   PropTypes.oneOfType([ViewPropTypes.style, PropTypes.arrayOf(ViewPropTypes.style)]),
  value:                   PropTypes.any,
};

SelectInput.defaultProps = {
  cancelKeyText:           'Cancel',
  keyboardBackgroundColor: '#FFFFFF',
  buttonsBackgroundColor:  '#CCCFD6',
  buttonsTextColor:        '#006BFF',
  options:                 [{ value: 0, label: '0' }],
  submitKeyText:           'Done',
  value:                   0,
};

export default SelectInput;
