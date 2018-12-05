import React from 'react'
import { Picker, View } from 'react-native'

import AbstractSelectInput from '../AbstractSelectInput'

import propTypes, { defaultProps } from './types.js'
import styles from './styles.js'

class SelectInput extends AbstractSelectInput {
  render() {
    const { labelStyle, mode, options, style } = this.props
    const { selectedValue } = this.state

    return (
      <View style={style}>
        <Picker
          onValueChange={this.onSubmit}
          style={labelStyle || styles.defaultLabelStyle}
          selectedValue={selectedValue}
          mode={mode}
        >
          {renderPickerItems(options)}
        </Picker>
      </View>
    )
  }
}

SelectInput.propTypes = propTypes
SelectInput.defaultProps = defaultProps

export default SelectInput
