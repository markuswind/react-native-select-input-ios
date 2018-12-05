import React, { Component } from 'react'
import { Modal, TouchableWithoutFeedback, View } from 'react-native'

import KeyboardButton from '../KeyboardButton'

import propTypes from './types.js'
import styles from './styles.js'

class CustomKeyboard extends Component {
  onCancelPress = () => {
    const { onCancelPress } = this.props
    onCancelPress()
  }

  onSubmitPress = () => {
    const { onSubmitPress } = this.props
    onSubmitPress()
  }

  render() {
    const {
      buttonsBackgroundColor,
      buttonsBorderColor,
      buttonsBorderWidth,
      buttonsTextColor,
      buttonsTextSize,
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
                <KeyboardButton
                  color={buttonsTextColor}
                  onPress={this.onCancelPress}
                  text={cancelKeyText}
                  textAlign={'left'}
                  textSize={buttonsTextSize}
                />

                <KeyboardButton
                  color={buttonsTextColor}
                  onPress={this.onSubmitPress}
                  text={submitKeyText}
                  textAlign={'right'}
                  textSize={buttonsTextSize}
                />
              </View>

              <View>{children}</View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  }
}

CustomKeyboard.propTypes = propTypes

export default CustomKeyboard
