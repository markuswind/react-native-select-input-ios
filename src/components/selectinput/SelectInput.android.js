/**
 * SelectInput
 * https://github.com/markuswind/react-native-select-input
 */

import AbstractSelectInput from './AbstractSelectInput.js';
import styles from './../../stylesheets/selectInputAndroid.css.js';

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Picker, View } from 'react-native';

class SelectInput extends AbstractSelectInput {
  constructor(props) {
    super(props);

    // refs
    this.picker = null;

    // initial state
    this.state = {
      selectedValue: props.value
    };
  }

  render() {
    let props = this.props;
    let state = this.state;

    return (
      <View style={props.style}>
        <Picker
          ref={(c) => {this.picker = c; }}
          selectedValue={state.selectedValue}
          onValueChange={this.onSubmit.bind(this)}
          style={props.labelStyle || styles.defaultLabelStyle}
          >
            {props.options.map((option, index) => {
              return (
                <Picker.Item
                  key={option.value}
                  value={option.value}
                  label={option.label}
                />
              );
            })}
        </Picker>
      </View>
    );
  }
}

SelectInput.propTypes = {
  labelStyle: PropTypes.object,
  options:    PropTypes.array,
  style:      PropTypes.object,
  value:      PropTypes.any,
};

SelectInput.defaultProps = {

};

export default SelectInput;
