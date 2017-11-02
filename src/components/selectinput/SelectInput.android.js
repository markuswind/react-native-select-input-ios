/**
 * SelectInput
 * https://github.com/markuswind/react-native-select-input
 */

import AbstractSelectInput from './AbstractSelectInput.js';
import styles from './../../stylesheets/selectInputAndroid.css.js';

import PropTypes from 'prop-types';
import React from 'react';

import { Picker, View, ViewPropTypes } from 'react-native';

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
          mode={props.mode}
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
  labelStyle: PropTypes.oneOfType([Picker.propTypes.style, PropTypes.arrayOf(Picker.propTypes.style)]),
  mode:       PropTypes.oneOf(['dialog', 'dropdown']),
  options:    PropTypes.array,
  style:      PropTypes.oneOfType([ViewPropTypes.style, PropTypes.arrayOf(ViewPropTypes.style)]),
  value:      PropTypes.any,
};

SelectInput.defaultProps = {
  mode:    'dialog',
  options: [{ value: 0, label: '0' }],
  value:   0
};

export default SelectInput;
