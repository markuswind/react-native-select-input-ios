import PropTypes from 'prop-types'
import { ViewPropTypes } from 'react-native'

export default {
  labelStyle: PropTypes.oneOfType([
    ViewPropTypes.style,
    PropTypes.arrayOf(ViewPropTypes.style)
  ]),
  onEndEditing: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  onValueChange: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.any
}
