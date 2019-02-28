import PropTypes from 'prop-types'
import { TextStylePropTypes } from 'react-native'

export default {
  enabled: PropTypes.bool,
  labelStyle: PropTypes.oneOfType([
    TextStylePropTypes.style,
    PropTypes.arrayOf(TextStylePropTypes.style)
  ]),
  onEndEditing: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  onValueChange: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.any
}
