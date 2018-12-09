import PropTypes from 'prop-types'
import { ViewPropTypes } from 'react-native'

export default {
  onPress: PropTypes.func.isRequired,
  style: PropTypes.oneOfType([
    ViewPropTypes.style,
    PropTypes.arrayOf(ViewPropTypes.style)
  ]),
  text: PropTypes.string.isRequired,
  textAlign: PropTypes.string.isRequired
}
