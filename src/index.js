import { Platform } from 'react-native'

const SelectInput = Platform.select({
  ios: () => require('./components/SelectInput.ios'),
  android: () => require('./components/SelectInput.android'),
})();

export default SelectInput.default
