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
  ScrollView,
  Text
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
      valueMedium: value
    });
  }

  onSubmitEditingLarge(value) {
    this.setState({
      valueLarge: value
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
      <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
        <Text style={styles.label}>
          Small input
        </Text>

        <SelectInputIOS
          value={state.valueSmall}
          options={this.getPickerOptions()}
          onCancelEditing={() => console.log('onCancel')}
          onSubmitEditing={this.onSubmitEditingSmall.bind(this)}
          style={[styles.selectInput, styles.selectInputSmall]}
        />

        <Text style={styles.label}>
          Medium input
        </Text>

        <SelectInputIOS
          value={state.valueMedium}
          options={this.getPickerOptions()}
          onCancelEditing={() => console.log('onCancel')}
          onSubmitEditing={this.onSubmitEditingMedium.bind(this)}
          style={[styles.selectInput, styles.selectInputMedium]}
        />

        <Text style={styles.label}>
          Large input
        </Text>

        <SelectInputIOS
          value={state.valueLarge}
          options={this.getPickerOptions()}
          onCancelEditing={() => console.log('onCancel')}
          onSubmitEditing={this.onSubmitEditingLarge.bind(this)}
          style={[styles.selectInput, styles.selectInputLarge]}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollViewContentContainer: {
    flex:                     1,
    width:                    SCREEN_WIDTH,
    padding:                  16,
    flexDirection:            'column',
    justifyContent:           'flex-start',
  },
  label: {
    fontSize:                 13,
    marginTop:                16,
  },
  selectInput: {
    flexDirection:            'row',
    borderWidth:              1,
    padding:                  8,
    marginTop:                16,
  },
  selectInputSmall: {
    flexDirection:            'row',
    width:                    SCREEN_WIDTH * 0.25,
    height:                   30,
  },
  selectInputMedium: {
    width:                    SCREEN_WIDTH * 0.5,
    height:                   36,
  },
  selectInputLarge: {
    width:                    SCREEN_WIDTH - 32,
    height:                   44,
  }
});

AppRegistry.registerComponent('example', () => example);
