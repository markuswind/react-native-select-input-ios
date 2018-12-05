import PropTypes from 'prop-types'
import React from 'react'
import { Picker, View, ViewPropTypes } from 'react-native'

import AbstractSelectInput from './AbstractSelectInput.js'

import styles from './../../stylesheets/selectInputAndroid.css.js'

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

SelectInput.propTypes = {
  labelStyle: PropTypes.PropTypes.object,
  mode: PropTypes.oneOf(['dialog', 'dropdown']),
  options: PropTypes.array,
  style: PropTypes.oneOfType([
    ViewPropTypes.style,
    PropTypes.arrayOf(ViewPropTypes.style)
  ]),
  value: PropTypes.any
}

SelectInput.defaultProps = {
  mode: 'dialog',
  options: [{ value: 0, label: '0' }],
  value: 0
}

export default SelectInput
