import React from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'

import AbstractSelectInput from '../AbstractSelectInput'
import PickerKeyboard from '../PickerKeyboard'

import styles from './styles'
import propTypes, { defaultProps } from './types'

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
    const { enabled, onBeginEditing } = this.props
    const pickerKeyboard = this.pickerKeyboard

    if (enabled) {
      pickerKeyboard && pickerKeyboard.focus()
      onBeginEditing && onBeginEditing()
    }
  }

  render() {
    const {
      buttonsTextStyle,
      buttonsViewStyle,
      pickerItemStyle,
      pickerViewStyle,
      options,
      labelStyle,
      style,
      submitKeyText,
      cancelKeyText,
      value
    } = this.props

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
            submitKeyText={submitKeyText}
            cancelKeyText={cancelKeyText}
            buttonsTextStyle={buttonsTextStyle}
            buttonsViewStyle={buttonsViewStyle}
            pickerItemStyle={pickerItemStyle}
            pickerViewStyle={pickerViewStyle}
          />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

SelectInput.propTypes = propTypes
SelectInput.defaultProps = defaultProps

export default SelectInput
