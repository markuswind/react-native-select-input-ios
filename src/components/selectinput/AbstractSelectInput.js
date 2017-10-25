/**
 * SelectInput
 * https://github.com/markuswind/react-native-select-input
 */

import { Component } from 'react';

class AbstractSelectInput extends Component {

  componentWillReceiveProps(nextProps) {
    let currentValue = this.props.value;

    if (nextProps.value !== currentValue) {
      this.setState({
        selectedValue: nextProps.value
      });
    }
  }

  focus() {
    // NOTE: - implemented on iOS only..
  }

  onCancel() {
    let props = this.props;

    props.onEndEditing && props.onEndEditing();
  }

  onSubmit(value) {
    let onSubmitEditing = this.props.onSubmitEditing;

    this.setState({selectedValue: value}, function() {
      onSubmitEditing && onSubmitEditing(value);
    });
  }

  getValueLabel() {
    let props = this.props;
    let options = props.options || [{value: '', label: ''}];

    var label = options.map(function(object) {
      if (object.value === props.value) {
        return object.label;
      }
    });

    return label || '';
  }
}

export default AbstractSelectInput;
