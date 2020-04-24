import React, { Component } from 'react'
import { Dimensions, Modal, TouchableWithoutFeedback, View } from 'react-native'

import KeyboardButton from '../KeyboardButton'

import propTypes from './types.js'
import styles from './styles.js'

class CustomKeyboard extends Component {
  state = {
    width: Dimensions.get('window').width
  }

  updateDimensions = () => {
    this.setState({
      width: Dimensions.get('window').width
    })
  }

  onCancelPress = () => {
    const { onCancelPress } = this.props
    onCancelPress()
  }

  onSubmitPress = () => {
    const { onSubmitPress } = this.props
    onSubmitPress()
  }

  render() {
    const { width } = this.state
    const {
      buttonsTextStyle,
      buttonsViewStyle,
      visible,
      cancelKeyText,
      submitKeyText,
      children
    } = this.props

    return (
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={visible}
        onOrientationChange={this.updateDimensions}
        supportedOrientations={[
          'portrait',
          'landscape',
          'landscape-left',
          'landscape-right'
        ]}
      >
        <TouchableWithoutFeedback>
          <View style={styles.container}>
            <View style={[styles.modal, { width }]}>
              <View style={[styles.buttonview, buttonsViewStyle, { width }]}>
                <KeyboardButton
                  onPress={this.onCancelPress}
                  text={cancelKeyText}
                  textAlign={'left'}
                  textStyle={buttonsTextStyle}
                />

                <KeyboardButton
                  onPress={this.onSubmitPress}
                  text={submitKeyText}
                  textAlign={'right'}
                  textStyle={buttonsTextStyle}
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
