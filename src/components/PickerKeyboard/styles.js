import { Dimensions, StyleSheet } from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  pickerview: {
    width: SCREEN_WIDTH,
    backgroundColor: '#FFFFFF'
  }
})

export default styles
