import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Picker } from 'react-native'

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

PickerItems.propTypes = {
  options: PropTypes.array
}

export default PickerItems
