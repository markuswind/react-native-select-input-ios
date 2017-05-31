import {
  Dimensions,
  StyleSheet
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  default: {
    flex:                       1,
    height:                     26,
    padding:                    4,
    fontSize:                   13,
    borderWidth:                0.5,
    borderColor:                '#0f0f0f'
  },
});

export default styles;