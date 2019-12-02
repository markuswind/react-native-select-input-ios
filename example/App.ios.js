import React, {Component} from 'react';
import {Image, StyleSheet, ScrollView, Text, View} from 'react-native';
import SelectInput from 'react-native-select-input-ios';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valueSmall0: 0,
      valueSmall1: 1,
      valueLarge: 2,
    };
  }

  onSubmitEditingSmall0(value) {
    this.setState({
      valueSmall0: value,
    });
  }

  onSubmitEditingSmall1(value) {
    this.setState({
      valueSmall1: value,
    });
  }

  onSubmitEditingLarge(value) {
    this.setState({
      valueLarge: value,
    });
  }

  getBananaImage() {
    const state = this.state;
    let bananaImage = require('./assets/sad-banana.gif');

    state.valueSmall0 === 1 &&
      state.valueSmall1 === 1 &&
      state.valueLarge === 1 &&
      (bananaImage = require('./assets/happy-banana.gif'));

    return bananaImage;
  }

  getPickerOptions() {
    return [
      {value: 0, label: 'Apple'},
      {value: 1, label: 'Banana'},
      {value: 2, label: 'Orange'},
      {value: 3, label: 'Strawberry'},
    ];
  }

  render() {
    const state = this.state;
    const bananaImage = this.getBananaImage();

    return (
      <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
        <View style={styles.row}>
          <View style={styles.smallInputWrapper}>
            <Text style={styles.label}>Small input 0</Text>

            <SelectInput
              value={state.valueSmall0}
              options={this.getPickerOptions()}
              onCancelEditing={() => console.log('onCancel')}
              onSubmitEditing={this.onSubmitEditingSmall0.bind(this)}
              style={[styles.selectInput, styles.selectInputSmall]}
            />
          </View>

          <View style={styles.smallInputWrapper}>
            <Text style={styles.label}>Small input 1</Text>

            <SelectInput
              value={state.valueSmall1}
              options={this.getPickerOptions()}
              onCancelEditing={() => console.log('onCancel')}
              onSubmitEditing={this.onSubmitEditingSmall1.bind(this)}
              style={[styles.selectInput, styles.selectInputSmall]}
            />
          </View>
        </View>

        <Text style={styles.label}>Large input</Text>

        <SelectInput
          value={state.valueLarge}
          options={this.getPickerOptions()}
          onCancelEditing={() => console.log('onCancel')}
          onSubmitEditing={this.onSubmitEditingLarge.bind(this)}
          style={[styles.selectInput, styles.selectInputLarge]}
        />

        <View style={styles.bananawrapper}>
          <Image style={{width: 100, height: 100}} source={bananaImage} />
        </View>

        <View style={styles.line} />
      </ScrollView>
    );
  }
}

const MARGIN_SMALL = 8;
const MARGIN_LARGE = 16;

const styles = StyleSheet.create({
  scrollViewContentContainer: {
    flex: 1,
    width: '100%',
    padding: MARGIN_LARGE,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  label: {
    fontSize: 13,
    marginTop: MARGIN_LARGE,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallInputWrapper: {
    width: '45%',
    flexDirection: 'column',
  },
  selectInput: {
    flexDirection: 'row',
    height: 36,
    borderWidth: 1,
    borderRadius: 4,
    padding: MARGIN_SMALL,
    marginTop: MARGIN_LARGE,
    backgroundColor: '#FFFFFF',
  },
  selectInputSmall: {
    width: '100%',
  },
  selectInputLarge: {
    width: '100%',
    paddingHorizontal: MARGIN_LARGE,
  },
  bananawrapper: {
    margin: MARGIN_LARGE * 2,
    marginBottom: 0,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    height: 1,
    marginHorizontal: MARGIN_SMALL,
    backgroundColor: 'black',
  },
});
