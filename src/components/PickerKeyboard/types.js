import PropTypes from 'prop-types'

export default {
  buttonsBackgroundColor: PropTypes.string,
  buttonsBorderColor: PropTypes.string,
  buttonsBorderWidth: PropTypes.number,
  buttonsTextColor: PropTypes.string,
  buttonsTextSize: PropTypes.number,
  keyboardBackgroundColor: PropTypes.string,
  cancelKeyText: PropTypes.string,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  onValueChange: PropTypes.func,
  options: PropTypes.array,
  style: PropTypes.object,
  submitKeyText: PropTypes.string,
  value: PropTypes.any
}
