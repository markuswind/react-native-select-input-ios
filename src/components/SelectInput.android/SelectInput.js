import React from 'react'
import { Picker, View } from 'react-native'

import AbstractSelectInput from '../AbstractSelectInput'

import propTypes, { defaultProps } from './types.js'
import styles from './styles.js'

class SelectInput extends AbstractSelectInput {
  render() {
    const { enabled, labelStyle, mode, options, style } = this.props
    const { selectedValue } = this.state

    return (
      <View style={style}>
        <Picker
          enabled={enabled}
          onValueChange={this.onSubmit}
          style={labelStyle || styles.defaultLabelStyle}
          selectedValue={selectedValue}
          mode={mode}
        >
          {options.map(option => (
            <Picker.Item
              key={option.value}
              value={option.value}
              label={option.label}
            />
          ))}
        </Picker>
      </View>
    )
  }
}

SelectInput.propTypes = propTypes
SelectInput.defaultProps = defaultProps

export default SelectInput
