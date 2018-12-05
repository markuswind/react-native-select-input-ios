import PropTypes from 'prop-types'
import { ViewPropTypes } from 'react-native'

export default {
  labelStyle: PropTypes.PropTypes.object,
  mode: PropTypes.oneOf(['dialog', 'dropdown']),
  options: PropTypes.array,
  style: PropTypes.oneOfType([
    ViewPropTypes.style,
    PropTypes.arrayOf(ViewPropTypes.style)
  ]),
  value: PropTypes.any
}

export const defaultProps = {
  mode: 'dialog',
  options: [{ value: 0, label: '0' }],
  value: 0
}
