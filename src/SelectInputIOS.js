/**
 * SelectInputIOS
 * https://github.com/markuswind/react-native-select-input
 */

import PickerKeyboard from './PickerKeyboard.js';
import styles from './stylesheets/selectInputIOS.css.js';

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';

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

  getValue() {
    return this.state.selectedValue;
  }

  focus() {
    let props = this.props;
    let pickerKeyboard = this.pickerKeyboard;

    pickerKeyboard && pickerKeyboard.focus();
    props.onBeginEditing && props.onBeginEditing();
  }

  onCancel() {
    let props = this.props;

    props.onEndEditing && props.onEndEditing();
  }

  onSubmit(value) {
    let onSubmitEditing = this.props.onSubmitEditing;

    this.setState({selectedValue: value}, function() {
      onSubmitEditing && onSubmitEditing(value);
    });
  }

  render() {
    let props = this.props;

    // TODO: - add fully customizable styles
    return (
      <TouchableWithoutFeedback onPress={this.focus.bind(this)}>
        <View style={props.style}>
          <Text
            style={styles.defaultlabelstyle}
            adjustFontSizeToFit={true}
            allowsFontScaling={false}
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
            keyboardBackgroundColor={props.keyboardBackgroundColor}
            returnKeyText={props.returnKeyText}
            cancelKeyText={props.cancelKeyText}
          />
        </View>
      </TouchableWithoutFeedback>
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
  buttonsTextColor:        PropTypes.string,
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
  buttonsTextColor:        '#FFFFFF',
  options:                 [{ value: 0, label: '0' }],
  returnKeyText:           'Done',
  value:                   0,
};

export default SelectInputIOS;
