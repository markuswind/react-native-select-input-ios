/**
 * SelectInput
 * https://github.com/markuswind/react-native-select-input
 */

import PropTypes from 'prop-types'
import React from 'react'

import {
  Text,
  TouchableWithoutFeedback,
  View,
  ViewPropTypes
} from 'react-native'

import AbstractSelectInput from './AbstractSelectInput.js'
import PickerKeyboard from './../PickerKeyboard.js'

import styles from './../../stylesheets/selectInputIOS.css.js'

class SelectInput extends AbstractSelectInput {
  constructor(props) {
    super(props)
    this.pickerKeyboard = null
  }

  setPickerKeyboardRef = component => {
    this.pickerKeyboard = component
  }

  getValue = () => {
    const { selectedValue } = this.state
    return selectedValue
  }

  focus = () => {
    const { onBeginEditing } = this.props
    const pickerKeyboard = this.pickerKeyboard

    pickerKeyboard && pickerKeyboard.focus()
    onBeginEditing && onBeginEditing()
  }

  render() {
    const {
      buttonsBackgroundColor,
      buttonsBorderColor,
      buttonsBorderWidth,
      buttonsTextColor,
      buttonsTextSize,
      keyboardBackgroundColor,
      options,
      labelStyle,
      style,
      submitKeyText,
      cancelKeyText,
      value
    } = this.props

    // TODO: - add fully customizable styles
    return (
      <TouchableWithoutFeedback onPress={this.focus}>
        <View style={style}>
          <Text
            style={labelStyle || styles.defaultlabelstyle}
            adjustFontSizeToFit={true}
            allowFontScaling={false}
            numberOfLines={1}
          >
            {this.getValueLabel()}
          </Text>

          <PickerKeyboard
            ref={this.setPickerKeyboardRef}
            options={options}
            value={value}
            onCancel={this.onCancel}
            onSubmit={this.onSubmit}
            onValueChange={this.onValueChange}
            buttonsBackgroundColor={buttonsBackgroundColor}
            buttonsBorderColor={buttonsBorderColor}
            buttonsBorderWidth={buttonsBorderWidth}
            buttonsTextColor={buttonsTextColor}
            buttonsTextSize={buttonsTextSize}
            keyboardBackgroundColor={keyboardBackgroundColor}
            submitKeyText={submitKeyText}
            cancelKeyText={cancelKeyText}
          />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

SelectInput.propTypes = {
  buttonsBackgroundColor: PropTypes.string,
  buttonsBorderColor: PropTypes.string,
  buttonsBorderWidth: PropTypes.number,
  buttonsTextColor: PropTypes.string,
  buttonsTextSize: PropTypes.number,
  cancelKeyText: PropTypes.string,
  keyboardBackgroundColor: PropTypes.string,
  labelStyle: PropTypes.any, // FIXME: - use real proptype
  onEndEditing: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  options: PropTypes.array,
  submitKeyText: PropTypes.string,
  style: PropTypes.oneOfType([
    ViewPropTypes.style,
    PropTypes.arrayOf(ViewPropTypes.style)
  ]),
  value: PropTypes.any
}

SelectInput.defaultProps = {
  cancelKeyText: 'Cancel',
  keyboardBackgroundColor: '#FFFFFF',
  buttonsBackgroundColor: '#CCCFD6',
  buttonsTextColor: '#006BFF',
  buttonsBorderColor: '#CCCFD6',
  buttonsBorderWidth: 0,
  options: [{ value: 0, label: '0' }],
  submitKeyText: 'Done',
  value: 0
}

export default SelectInput
