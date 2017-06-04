/**
 * SelectInputIOS
 * https://github.com/markuswind/react-native-select-input
 */

import PickerKeyboard from './PickerKeyboard.js';
import styles from './stylesheets/selectInputIOS.css.js';

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class SelectInputIOS extends Component {
  constructor(props) {
    super(props);

    // refs
    this.pickerKeyboard = null;

    // initial state
    this.state = {
      selectedValue: props.value
    };
  }

  focus() {
    let props = this.props;
    let pickerKeyboard = this.pickerKeyboard;

    pickerKeyboard && pickerKeyboard.focus();
    props.onBeginEditing && props.onBeginEditing();
  }

  onEndEditing() {
    let props = this.props;

    props.onEndEditing && props.onEndEditing();
  }

  onSubmitEditing(value) {
    let onSubmitEditing = this.props.onSubmitEditing;

    this.setState({selectedValue: value}, function() {
      onSubmitEditing && onSubmitEditing(value);
    });
  }

  render() {
    let props = this.props;

    return (
      <View>
        <Text onPress={this.focus.bind(this)} style={props.style || styles.default}>
          {this.getValueLabel()}
        </Text>

        <PickerKeyboard
          ref={(c) => { this.pickerKeyboard = c; }}
          color={props.color}
          options={props.options}
          value={props.value}
          onEndEditing={this.onEndEditing}
          onSubmitEditing={this.onSubmitEditing}
          buttonsBackgroundColor={props.buttonsBackgroundColor}
          keyboardBackgroundColor={props.keyboardBackgroundColor}
          returnKeyText={props.returnKeyText}
          cancelKeyText={props.cancelKeyText}
        />
      </View>
    );
  }

  getValueLabel() {
    let props = this.props;
    let options = props.options || [{value: '', label: ''}];

    var label = options.map(function(object) {
      if (object.value === props.value) {
        return object.label;
      }
    });

    return label || '';
  }
}

SelectInputIOS.propTypes = {
  buttonsBackgroundColor:  PropTypes.string,
  cancelKeyText:           PropTypes.string,
  color:                   PropTypes.string,
  keyboardBackgroundColor: PropTypes.string,
  onCancel:                PropTypes.func,
  onSubmit:                PropTypes.func,
  options:                 PropTypes.array,
  returnKeyText:           PropTypes.string,
  value:                   PropTypes.any,
};

SelectInputIOS.defaultProps = {
  cancelKeyText:           'Cancel',
  color:                   'blue',
  keyboardBackgroundColor: '#FF0000',
  buttonsBackgroundColor:  '#00FF00',
  options:                 [{ value: 0, label: '0' }],
  returnKeyText:           'Done',
  value:                   0
};

export default SelectInputIOS;
