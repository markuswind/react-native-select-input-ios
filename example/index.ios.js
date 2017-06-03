/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import SelectInputIOS from 'react-native-select-input-ios';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

export default class example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 1
    };
  }

  // onCancel() {
  //   console.log('onCancel');
  // }

  onSubmit(value) {
    this.setState({
      value: value
    });
  }

  getPickerOptions() {
    return [
      { value: 0, label:  'Apple'      },
      { value: 1, label:  'Banana'     },
      { value: 2, label:  'Orange'     },
      { value: 3, label:  'Strawberry' }
    ];
  }

  render() {
    return (
      <View style={styles.container}>
        <SelectInputIOS
          ref={(c) => { this.selectInput = c; }}
          value={this.state.value}
          options={this.getPickerOptions()}
          onCancel={() => console.log('onCancel')}
          onSubmit={this.onSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:                     1,
    justifyContent:           'center',
    alignItems:               'center',
    backgroundColor:          '#F5FCFF',
  },
});

AppRegistry.registerComponent('example', () => example);
