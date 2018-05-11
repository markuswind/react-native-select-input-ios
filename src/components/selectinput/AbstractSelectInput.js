/**
 * SelectInput
 * https://github.com/markuswind/react-native-select-input
 */

import { Component } from 'react'

class AbstractSelectInput extends Component {
  componentWillReceiveProps(nextProps) {
    const { value } = this.props.value

    if (nextProps.value !== value) {
      this.setState({
        selectedValue: nextProps.value
      })
    }
  }

  focus() {
    // NOTE: - implemented on iOS only..
  }

  onCancel = () => {
    const { onEndEditing } = this.props
    onEndEditing && onEndEditing()
  }

  onSubmit = value => {
    const { onSubmitEditing } = this.props

    this.setState({ selectedValue: value }, function() {
      onSubmitEditing && onSubmitEditing(value)
    })
  }

  getValueLabel = () => {
    const { options, value } = this.props
    const valueOptions = options || [{ value: '', label: '' }]

    return (
      valueOptions.map(function(option) {
        if (option.value === value) {
          return option.label
        }
      }) || ''
    )
  }
}

export default AbstractSelectInput
