/**
 * PickerKeyboard
 * https://github.com/markuswind/react-native-select-input
 */

'use strict';

var Dimensions       = require('react-native').Dimensions;
var Modal            = require('react-native').Modal;
var Picker           = require('react-native').Picker;
var React            = require('react');
var StyleSheet       = require('react-native').StyleSheet;
var Text             = require('react-native').Text;
var TouchableOpacity = require('react-native').TouchableOpacity;
var View             = require('react-native').View;

var PickerKeyboard = React.createClass({
    getInitialState: function() {
        return {
            visible: false,
            value:   this.props.value
        };
    },

    focus: function() {
        this.setState({visible: true});
    },

    onCancelPressed: function() {
        this.setState({visible: false});
    },

    onSubmitPressed: function() {
        this.props.onSubmit && this.props.onSubmit(this.state.value);
        this.setState({visible: false});
    },

    onValueChange: function(value) {
        this.setState({value: value});
    },

    render: function() {
        return (
            <Modal animationType={'slide'} transparent={true} visible={this.state.visible}>
                <View style={styles.container}>
                    <View style={styles.modal}>
                        <View style={styles.buttonview}>
                            <TouchableOpacity onPress={this.onCancelPressed}>
                                <Text style={{color: this.props.color}}>{this.props.cancelKeyText}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.onSubmitPressed}>
                                <Text style={{color: this.props.color}}>{this.props.returnKeyText}</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Picker ref={'picker'} style={styles.picker_bottom} selectedValue={this.state.value} onValueChange={this.onValueChange}>
                                {this.getPickerItems()}
                            </Picker>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    },

    getPickerItems: function() {
        return this.props.options.map((option, index) => {
            return (
                <Picker.Item
                    key={option.value}
                    value={option.value}
                    label={option.label}
                />
            );
        });
    }

});

var SCREEN_WIDTH = Dimensions.get('window').width;
var styles = StyleSheet.create({
    container: {
        flex:           1,
        justifyContent: 'flex-end',
        alignItems:     'center'
    },

    modal: {
        width:           SCREEN_WIDTH,
        justifyContent:  'center',
        alignItems:      'center',
        padding:         0,
        backgroundColor: '#F5FCFF'
    },

    buttonview:{
        flexDirection:  'row',
        justifyContent: 'space-between',
        flexDirection:  'row',
        width:          SCREEN_WIDTH,
        padding:        8,
        borderTopWidth: 0.5,
        borderTopColor: 'lightgrey',
    },

    picker_bottom: {
        width: SCREEN_WIDTH,
    }
});

module.exports = PickerKeyboard;
