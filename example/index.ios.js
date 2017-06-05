/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import SelectInputIOS from 'react-native-select-input-ios';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  View
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valueSmall:  0,
      valueMedium: 1,
      valueLarge:  2,
    };
  }

  onSubmitEditingSmall(value) {
    this.setState({
      valueSmall: value
    });
  }

  onSubmitEditingMedium(value) {
    this.setState({
      valueSmall: value
    });
  }

  onSubmitEditingLarge(value) {
    this.setState({
      valueSmall: value
    });
  }

  getPickerOptions() {
    return [
      { value: 0, label: 'Apple'      },
      { value: 1, label: 'Banana'     },
      { value: 2, label: 'Orange'     },
      { value: 3, label: 'Strawberry' }
    ];
  }

  render() {
    let state = this.state;

    return (
      <View style={styles.container}>
        <SelectInputIOS
          value={state.valueSmall}
          options={this.getPickerOptions()}
          onCancelEditing={() => console.log('onCancel')}
          onSubmitEditing={this.onSubmitEditingSmall.bind(this)}
          style={styles.selectInputSmall}
        />

        <SelectInputIOS
          value={state.valueMedium}
          options={this.getPickerOptions()}
          onCancelEditing={() => console.log('onCancel')}
          onSubmitEditing={this.onSubmitEditingMedium.bind(this)}
          style={styles.selectInputMedium}
        />

        <SelectInputIOS
          value={state.valueLarge}
          options={this.getPickerOptions()}
          onCancelEditing={() => console.log('onCancel')}
          onSubmitEditing={this.onSubmitEditingLarge.bind(this)}
          style={styles.selectInputLarge}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:                     1,
    width:                    SCREEN_WIDTH,
    flexDirection:            'column',
    justifyContent:           'center',
    backgroundColor:          '#F5FCFF',
  },
  selectInputSmall: {
    width:                    SCREEN_WIDTH * 0.25,
    height:                   30,
    borderWidth:              1,
    margin:                   16
  },
  selectInputMedium: {
    width:                    SCREEN_WIDTH * 0.5,
    height:                   36,
    borderWidth:              1,
    margin:                   16
  },
  selectInputLarge: {
    width:                    SCREEN_WIDTH - 32,
    height:                   44,
    borderWidth:              1,
    margin:                   16
  }
});

AppRegistry.registerComponent('example', () => example);
