/**
 * CustomKeybard
 * https://github.com/markuswind/react-native-select-input
 */

import styles from './stylesheets/customKeyboard.css.js';

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';

class CustomKeyboard extends Component {
  constructor(props) {
     super(props);

    this.state = {
      visible: false,
    };
  }

  onCancelPress() {
    this.setVisible(false);
    this.props.onSubmitPress();
  }

  onSubmitPress() {
    this.setVisible(false);
    this.props.onSubmitPress();
  }

  setVisible(visible) {
    this.setState({
      visible: visible
    });
  }

  render() {
    let props = this.props;
    let state = this.state;

    return (
      <Modal animationType={'slide'} transparent={true} visible={state.visible}>
        <TouchableWithoutFeedback onPress={this.onCancelPress.bind(this)}>
          <View style={styles.container}>
            <View style={styles.modal}>
              <View style={[styles.buttonview, { backgroundColor: props.buttonsBackgroundColor }]}>
                <TouchableOpacity onPress={this.onCancelPress.bind(this)}>
                  <Text style={{ color: props.buttonTextColor }}>
                    {props.cancelKeyText}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onSubmitPress.bind(this)}>
                  <Text style={{ color: props.buttonTextColor }}>
                    {props.returnKeyText}
                  </Text>
                </TouchableOpacity>
              </View>

              <View>
                  {props.children}
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

CustomKeyboard.propTypes =  {
  buttonsBackgroundColor: PropTypes.string,
  buttonTextColor:        PropTypes.string,
  onCancelPress:          PropTypes.func.isRequired,
  onSubmitPress:          PropTypes.func.isRequired,
};

export default CustomKeyboard;
