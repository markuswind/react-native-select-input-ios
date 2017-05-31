/**
 * SelectInputIOS
 * https://github.com/markuswind/react-native-select-input
 */


import PickerKeyboard from ('./PickerKeyboard.js');
import styles from './stylesheets/selectInputIOS.css.js';

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {
  AppRegistry,
  Text,
  View
} from 'react-native';

class SelectInputIOS extends Component {
  // getDefaultProps() {
    // cancelKeyText: 'Cancel',
    // color: 'blue',
    // keyboardBackgroundColor: PropTypes.string,
    // buttonsBackgroundColor:  PropTypes.string,
    // options:                 PropTypes.array,
    // returnKeyText: 'Done',
    // value:                   PropTypes.string,
  // }

  getInitialState() {
    return {
      selectedValue: this.props.value || ''
    };
  }

  focus() {
    let props = this.props;

    this.refs.pickerkeyboard.focus();
    props.onBeginEditing && props.onBeginEditing();
  }

  onEndEditing() {
    let props = this.props;

    props.onEndEditing && props.onEndEditing();
  }

  onSubmitEditing(value) {
    var props = this.props;

    this.setState({selectedValue: value}, function() {
      props.onSubmitEditing && props.onSubmitEditing();
    });
  }

  render() {
    let props = this.props;

    return (
      <View>
        <Text onPress={this.focus} style={props.style || styles.default}>
          {this.getValueLabel()}
        </Text>

        <PickerKeyboard
          ref={'pickerkeyboard'}
          color={props.color || 'blue'}
          options={props.options || [{value: '', label: ''}]}
          value={props.value}
          onEndEditing={this.onEndEditing}
          onSubmitEditing={this.onSubmitEditing}
          buttonsBackgroundColor={props.buttonsBackgroundColor}
          keyboardBackgroundColor={props.keyboardBackgroundColor}
          returnKeyText={props.returnKeyText || 'Done'}
          cancelKeyText={props.cancelKeyText || 'Cancel'}
        />
      </View>
    );
  }

  getValueLabel() {
    let props = this.props;

    var label = '';
    var options = props.options || [{value: '', label: ''}];

    for(var index = 0; index < options.length; index++) {
      if(options[index].value == props.value) {
        label = options[index].label;
        break;
      }
    }

    return label;
  }
});

SelectInputIOS.propTypes = {
  buttonsBackgroundColor: PropTypes.string,
  cancelKeyText: PropTypes.string
  color: PropTypes.string,
  keyboardBackgroundColor: PropTypes.string,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  options: PropTypes.array.isRequired,
  returnKeyText: PropTypes.string,
  value: PropTypes.string,
};

export default SelectInputIOS;
