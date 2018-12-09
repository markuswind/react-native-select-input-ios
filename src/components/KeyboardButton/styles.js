import { Dimensions, StyleSheet } from 'react-native'

const BUTTON_WIDTH = Dimensions.get('window').width * 0.25

const styles = StyleSheet.create({
  buttontext: {
    width: BUTTON_WIDTH,
    color: '#006BFF',
    padding: 8
  }
})

export default styles
