import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Dimensions, Text, TouchableOpacity } from 'react-native'

const BUTTON_WIDTH = Dimensions.get('window').width * 0.25

class KeyboardButton extends Component {
  render() {
    const { onPress, color, text, textAlign, textSize } = this.props

    return (
      <TouchableOpacity onPress={onPress}>
        <Text
          allowFontScaling={false}
          style={{
            width: BUTTON_WIDTH,
            color: color,
            textAlign: textAlign,
            fontSize: textSize || null,
            padding: 8
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    )
  }
}

KeyboardButton.propTypes = {
  color: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  textAlign: PropTypes.string.isRequired,
  textSize: PropTypes.number
}

export default KeyboardButton
