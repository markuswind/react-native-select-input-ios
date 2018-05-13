/**
 * CustomKeyboard
 * https://github.com/markuswind/react-native-select-input
 */

import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Modal, TouchableWithoutFeedback, View } from 'react-native'

import KeyboardButton from './KeyboardButton.js'
import styles from './../stylesheets/customKeyboard.css.js'

class CustomKeyboard extends Component {
  constructor(props) {
    super(props)
  }

  onCancelPress = () => {
    const { onCancelPress } = this.props
    onCancelPress()
  }

  onSubmitPress = () => {
    const { onSubmitPress } = this.props
    onSubmitPress()
  }

  renderKeyBoardButton = (onPress, text, textAlign) => {
    const { buttonsTextColor, buttonsTextSize } = this.props

    return (
      <KeyboardButton
        color={buttonsTextColor}
        onPress={onPress}
        text={text}
        textAlign={textAlign}
        textSize={buttonsTextSize}
      />
    )
  }

  render() {
    const {
      buttonsBackgroundColor,
      buttonsBorderColor,
      buttonsBorderWidth,
      visible,
      cancelKeyText,
      submitKeyText,
      children
    } = this.props

    const buttonsViewStyle = {
      backgroundColor: buttonsBackgroundColor,
      borderColor: buttonsBorderColor,
      borderBottomWidth: buttonsBorderWidth
    }

    return (
      <Modal animationType={'slide'} transparent={true} visible={visible}>
        <TouchableWithoutFeedback onPress={this.onCancelPress.bind(this)}>
          <View style={styles.container}>
            <View style={styles.modal}>
              <View style={[styles.buttonview, buttonsViewStyle]}>
                {this.renderKeyBoardButton(
                  this.onCancelPress,
                  cancelKeyText,
                  'left'
                )}
                {this.renderKeyBoardButton(
                  this.onSubmitPress,
                  submitKeyText,
                  'right'
                )}
              </View>

              <View>{children}</View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  }
}

CustomKeyboard.propTypes = {
  buttonsBackgroundColor: PropTypes.string,
  buttonsBorderColor: PropTypes.string,
  buttonsBorderWidth: PropTypes.number,
  buttonsTextColor: PropTypes.string,
  buttonsTextSize: PropTypes.number,
  cancelKeyText: PropTypes.string,
  onCancelPress: PropTypes.func.isRequired,
  onSubmitPress: PropTypes.func.isRequired,
  submitKeyText: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  children: PropTypes.element
}

export default CustomKeyboard
