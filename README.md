# React Native SelectInputIOS
[![npm version](https://img.shields.io/npm/v/react-native-select-input-ios.svg?style=flat-square)](https://www.npmjs.com/package/react-native-select-input-ios)
[![npm downloads](https://img.shields.io/npm/dm/react-native-select-input-ios.svg?style=flat-square)](https://www.npmjs.com/package/react-native-select-input-ios)

A React Native SelectInput for iOS which shows the picker as a keyboard.

### Installation
`npm install react-native-select-input-ios --save`

### Screenshot
<img src="https://raw.github.com/markuswind/react-native-select-input-ios/master/screenshots/screenshot.png" alt="Screenshot" | width=300px/>

### Usage
Import ``react-native-keyboard-select-input-ios`` and wrap your content inside
it:

```js
import SelectInputIOS from 'react-native-select-input-ios';
```

or:
```js
var SelectInputIOS = require('react-native-select-input-ios');
```

Example:
```js
var options = [
  { value: 'apple',      label: 'Apple'      },
  { value: 'banana',     label: 'Banana'     },
  { value: 'orange',     label: 'Orange'     },
  { value: 'strawberry', label: 'Strawberry' }
];

render() {
  return (
    <View style={styles.container}>
      <SelectInputIOS
        value={'orange'}
        options={options}
        color={'#FF8000'}
        returnKeyText={'customReturnKeyText'}
        cancelKeyText={'customCancelKeyText'}
        buttonsBackgroundColor={'#F2F2F2'}
        keyboardBackgroundColor={'#F8F8F8'}
        onBeginEditing={() => console.log('onBeginEditing')}
        onEndEditing={() => console.log('onEndEditing')}
      />
    </View>
  );
}
```

### Props

| **Prop**                  | **Type**         | **Default** | **Description**                                                                          |
|---------------------------|------------------|-------------|------------------------------------------------------------------------------------------|
| `style`                   | `object`         | object      |  [Text#style](https://facebook.github.io/react-native/docs/text.html#style "Text#style") |
| `value`                   | `string`         | ''          | Selected value                                                                           |
| `options`                 | `array`          | []          | options values and labels (see Example)                                                  |
| `color`                   | `string`         | 'blue'      | Changes the color of the keyboard buttons                                                |
| `returnKeyText`           | `string`         | 'Done'      | Changes the text of the submit button                                                    |
| `cancelKeyText`           | `string`         | 'Cancel'    | Changes the text of the cancel button                                                    |
| `buttonsBackgroundColor`  | `string`         | '#F2F2F2'   | Changes the background color of the keyboard toolbar                                     |
| `keyboardBackgroundColor` | `string`         | '#F8F8F8'   | Changed the background color of the keyboard pickerview                                  |
| `onBeginEditing`          | `PropTypes.func` | undefined   | Callback that is called when select input starts                                         |
| `onEndEditing`            | `PropTypes.func` | undefined   | Callback that is called when select input ends.                                          |

## License

MIT.
