import { Component } from 'react'

import propTypes from './types.js'

class AbstractSelectInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedValue: props.value
    }
  }

  componentDidUpdate(prevProps) {
    const { value } = this.props
    const prevValue = prevProps.value

    if (value !== prevValue) {
      this.setState({
        selectedValue: value
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

  onValueChange = value => {
    const { onValueChange } = this.props
    onValueChange && onValueChange(value)
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

AbstractSelectInput.propTypes = propTypes

export default AbstractSelectInput
