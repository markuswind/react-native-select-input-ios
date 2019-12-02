import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  modal: {
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  buttonview: {
    padding: 0,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#CCCFD6',
    borderColor: '#CCCFD6',
    borderTopColor: 'lightgrey'
  }
})

export default styles
