/**
 * PickerKeyboard
 * https://github.com/markuswind/react-native-select-input
 */

import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Picker } from 'react-native'

import CustomKeyboard from './CustomKeyboard.js'

import renderPickerItems from './selectinput/helpers/renderPickerItems'
import styles from './../stylesheets/pickerKeyboard.css.js'

class PickerKeyboard extends Component {
  constructor(props) {
    super(props)

    this.customKeyboard = null
    this.state = {
      value: props.value,
      visible: false
    }
  }

  setPickerRef = component => {
    this.picker = component
  }

  componentWillReceiveProps(nextProps) {
    const { value } = this.state

    if (nextProps.value !== value) {
      this.setState({
        value: nextProps.value
      })
    }
  }

  focus() {
    this.setVisible(true)
  }

  onCancelPress = () => {
    const { onCancel } = this.props

    this.setVisible(false)
    onCancel && onCancel()
  }

  onSubmitPress = () => {
    const { onSubmit } = this.props
    const { value } = this.state

    this.setVisible(false)
    onSubmit && onSubmit(value)
  }

  onValueChange = value => {
    this.setState({
      value: value
    })
  }

  setVisible = visible => {
    this.setState({
      visible: visible
    })
  }

  render() {
    const {
      buttonsBackgroundColor,
      buttonsTextColor,
      buttonsTextSize,
      buttonsBorderColor,
      buttonsBorderWidth,
      cancelKeyText,
      submitKeyText,
      keyboardBackgroundColor,
      options
    } = this.props

    const { value, visible } = this.state

    return (
      <CustomKeyboard
        buttonsBackgroundColor={buttonsBackgroundColor}
        buttonsTextColor={buttonsTextColor}
        buttonsTextSize={buttonsTextSize}
        buttonsBorderColor={buttonsBorderColor}
        buttonsBorderWidth={buttonsBorderWidth}
        cancelKeyText={cancelKeyText}
        onCancelPress={this.onCancelPress}
        onSubmitPress={this.onSubmitPress}
        submitKeyText={submitKeyText}
        visible={visible}
      >
        <Picker
          ref={this.setPickerRef}
          onValueChange={this.onValueChange}
          selectedValue={value}
          style={[
            styles.pickerview,
            { backgroundColor: keyboardBackgroundColor }
          ]}
        >
          {renderPickerItems(options)}
        </Picker>
      </CustomKeyboard>
    )
  }
}

PickerKeyboard.propTypes = {
  buttonsBackgroundColor: PropTypes.string,
  buttonsBorderColor: PropTypes.string,
  buttonsBorderWidth: PropTypes.number,
  buttonsTextColor: PropTypes.string,
  buttonsTextSize: PropTypes.number,
  cancelKeyText: PropTypes.string,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  options: PropTypes.array,
  style: PropTypes.object,
  submitKeyText: PropTypes.string,
  value: PropTypes.any
}

export default PickerKeyboard
