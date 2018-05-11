import React from 'react'
import { Picker } from 'react-native'

const renderPickerItems = options => {
  return options.map((option, index) => (
    <Picker.Item key={option.value} value={option.value} label={option.label} />
  ))
}

export default renderPickerItems
