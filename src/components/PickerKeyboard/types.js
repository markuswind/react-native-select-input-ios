import PropTypes from 'prop-types'
import { TextStylePropTypes, ViewPropTypes } from 'react-native'

export default {
  buttonsTextStyle: PropTypes.oneOfType([
    PropTypes.instanceOf(TextStylePropTypes),
    PropTypes.arrayOf(TextStylePropTypes)
  ]),
  buttonsViewStyle: PropTypes.oneOfType([
    ViewPropTypes.style,
    PropTypes.arrayOf(ViewPropTypes.style)
  ]),
  pickerItemStyle: PropTypes.oneOfType([
    PropTypes.instanceOf(TextStylePropTypes),
    PropTypes.arrayOf(TextStylePropTypes)
  ]),
  pickerViewStyle: PropTypes.oneOfType([
    ViewPropTypes.style,
    PropTypes.arrayOf(ViewPropTypes.style)
  ]),
  cancelKeyText: PropTypes.string,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  onValueChange: PropTypes.func,
  options: PropTypes.array,
  submitKeyText: PropTypes.string,
  value: PropTypes.any
}
