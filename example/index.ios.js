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
  Text,
  View
} from 'react-native';

export default class example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valueSmall0: 0,
      valueSmall1: 1,
      valueLarge:  2,
    };
  }

  onSubmitEditingSmall0(value) {
    this.setState({
      valueSmall0: value
    });
  }

  onSubmitEditingSmall1(value) {
    this.setState({
      valueSmall1: value
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
        <View style={styles.row}>
          <View style={styles.smallInputWrapper}>
            <Text style={styles.label}>
              Small input 0
            </Text>

            <SelectInputIOS
              value={state.valueSmall0}
              options={this.getPickerOptions()}
              onCancelEditing={() => console.log('onCancel')}
              onSubmitEditing={this.onSubmitEditingSmall0.bind(this)}
              style={[styles.selectInput, styles.selectInputSmall]}
            />
          </View>

          <View style={styles.smallInputWrapper}>
            <Text style={styles.label}>
              Small input 1
            </Text>

            <SelectInputIOS
              value={state.valueSmall1}
              options={this.getPickerOptions()}
              onCancelEditing={() => console.log('onCancel')}
              onSubmitEditing={this.onSubmitEditingSmall1.bind(this)}
              style={[styles.selectInput, styles.selectInputSmall]}
            />
          </View>
        </View>

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

const SCREEN_WIDTH = Dimensions.get('window').width;
const MARGIN_SMALL = 8;
const MARGIN_LARGE = 16;

const styles = StyleSheet.create({
  scrollViewContentContainer: {
    flex:                     1,
    width:                    SCREEN_WIDTH,
    padding:                  MARGIN_LARGE,
    flexDirection:            'column',
    justifyContent:           'flex-start',
  },
  label: {
    fontSize:                 13,
    marginTop:                MARGIN_LARGE,
  },
  row: {
    flexDirection:            'row',
    justifyContent:           'space-between',
  },
  smallInputWrapper: {
    flexDirection:            'column'
  },
  selectInput: {
    flexDirection:            'row',
    height:                   36,
    borderWidth:              1,
    borderRadius:             4,
    padding:                  MARGIN_SMALL,
    marginTop:                MARGIN_LARGE,
    backgroundColor:          '#FFFFFF',
  },
  selectInputSmall: {
    width:                    SCREEN_WIDTH * 0.5 - (MARGIN_LARGE * 2),
  },
  selectInputLarge: {
    width:                    SCREEN_WIDTH - (MARGIN_LARGE * 2),
  }
});

AppRegistry.registerComponent('example', () => example);
