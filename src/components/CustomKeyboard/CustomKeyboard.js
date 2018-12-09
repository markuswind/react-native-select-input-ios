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
      buttonsTextStyle,
      buttonsViewStyle,
      visible,
      cancelKeyText,
      submitKeyText,
      children
    } = this.props

    return (
      <Modal animationType={'slide'} transparent={true} visible={visible}>
        <TouchableWithoutFeedback onPress={this.onCancelPress.bind(this)}>
          <View style={styles.container}>
            <View style={styles.modal}>
              <View style={[styles.buttonview, buttonsViewStyle]}>
                <KeyboardButton
                  onPress={this.onCancelPress}
                  style={buttonsTextStyle}
                  text={cancelKeyText}
                  textAlign={'left'}
                />

                <KeyboardButton
                  onPress={this.onSubmitPress}
                  style={buttonsTextStyle}
                  text={submitKeyText}
                  textAlign={'right'}
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
