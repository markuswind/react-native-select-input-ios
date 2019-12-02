import React, { Component } from 'react'
import { Dimensions, Picker } from 'react-native'

import CustomKeyboard from '../CustomKeyboard'

import propTypes from './types.js'
import styles from './styles.js'

class PickerKeyboard extends Component {
  constructor(props) {
    super(props)

    this.picker = null
    this.state = {
      value: props.value,
      visible: false,
      width: Dimensions.get('window').width
    }
  }

  componentDidMount() {
    Dimensions.addEventListener('change', this.updateDimensions)
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.updateDimensions)
  }

  updateDimensions = () => {
    this.setState({
      width: Dimensions.get('window').width
    })
  }

  setPickerRef = component => {
    this.picker = component
  }

  componentDidUpdate(prevProps) {
    const { value } = this.props
    const prevValue = prevProps.value

    if (value !== prevValue) {
      this.setState({
        value
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
    const { onValueChange } = this.props
    onValueChange && onValueChange(value)

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
    const { value, visible, width } = this.state
    const {
      buttonsTextStyle,
      buttonsViewStyle,
      pickerItemStyle,
      pickerViewStyle,
      cancelKeyText,
      submitKeyText,
      options
    } = this.props

    return (
      <CustomKeyboard
        buttonsTextStyle={buttonsTextStyle}
        buttonsViewStyle={buttonsViewStyle}
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
          style={[styles.pickerview, pickerViewStyle, { width }]}
          itemStyle={pickerItemStyle}
        >
          {options.map(option => (
            <Picker.Item
              key={option.value}
              value={option.value}
              label={option.label}
            />
          ))}
        </Picker>
      </CustomKeyboard>
    )
  }
}

PickerKeyboard.propTypes = propTypes

export default PickerKeyboard
