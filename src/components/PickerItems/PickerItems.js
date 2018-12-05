import React, { Component } from 'react'
import { Picker } from 'react-native'

import propTypes from './types.js'

class PickerItems extends Component {
  render() {
    const { options } = this.props

    return options.map(option => (
      <Picker.Item
        key={option.value}
        value={option.value}
        label={option.label}
      />
    ))
  }
}

PickerItems.propTypes = propTypes

export default PickerItems
