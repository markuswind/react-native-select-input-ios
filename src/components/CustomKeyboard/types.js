import PropTypes from 'prop-types'
import { Text, ViewPropTypes } from 'react-native'

export default {
  buttonsTextStyle: PropTypes.oneOfType([
    Text.propTypes.style,
    PropTypes.arrayOf(Text.propTypes.style)
  ]),
  buttonsViewStyle: PropTypes.oneOfType([
    ViewPropTypes.style,
    PropTypes.arrayOf(ViewPropTypes.style)
  ]),
  cancelKeyText: PropTypes.string,
  onCancelPress: PropTypes.func.isRequired,
  onSubmitPress: PropTypes.func.isRequired,
  submitKeyText: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  children: PropTypes.element
}
