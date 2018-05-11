/**
 * SelectInput
 * https://github.com/markuswind/react-native-select-input
 */

import PropTypes from 'prop-types'
import { Component } from 'react'

class AbstractSelectInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedValue: props.value
    }
  }

  componentWillReceiveProps(nextProps) {
    const { value } = this.props

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

AbstractSelectInput.propTypes = {
  value: PropTypes.any,
  onEndEditing: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.any
}

export default AbstractSelectInput
