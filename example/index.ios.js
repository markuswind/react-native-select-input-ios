/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class example extends Component {
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
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
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
  welcome: {
    margin:                   10,
    fontSize:                 20,
    textAlign:                'center',
  },
  instructions: {
    marginBottom:             5,
    textAlign:                'center',
    color:                    '#333333',
  },
});

AppRegistry.registerComponent('example', () => example);
