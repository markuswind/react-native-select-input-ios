import {
  Dimensions,
  StyleSheet
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex:                       1,
    alignItems:                 'center',
    justifyContent:             'flex-end',
  },
  modal: {
    width:                      SCREEN_WIDTH,
    padding:                    0,
    alignItems:                 'center',
    justifyContent:             'center',
    backgroundColor:            '#F5FCFF',
  },
  buttonview:{
    width:                      SCREEN_WIDTH,
    paddingLeft:                    0,
    paddingRight:                   0,
    paddingTop:                     5,
    paddingBottom:                  5,
    borderTopWidth:             StyleSheet.hairlineWidth,
    flexDirection:              'row',
    justifyContent:             'space-between',
    borderTopColor:             'lightgrey',
  },
  picker_bottom: {
    width:                      SCREEN_WIDTH,
  },
});

export default styles;
