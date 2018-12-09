import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from './styles.js'
import propTypes from './types.js'

class KeyboardButton extends Component {
  render() {
    const { onPress, style, text, textAlign, } = this.props

    return (
      <TouchableOpacity onPress={onPress}>
        <Text
          allowFontScaling={false}
          style={[styles.buttontext, style, { textAlign: textAlign }]}
        >
          {text}
        </Text>
      </TouchableOpacity>
    )
  }
}

KeyboardButton.propTypes = propTypes

export default KeyboardButton
