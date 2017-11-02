[![npm version](https://img.shields.io/npm/v/react-native-select-input-ios.svg?style=flat-square)](https://www.npmjs.com/package/react-native-select-input-ios)
[![npm downloads](https://img.shields.io/npm/dm/react-native-select-input-ios.svg?style=flat-square)](https://www.npmjs.com/package/react-native-select-input-ios)
[![Build Status](https://travis-ci.org/markuswind/react-native-select-input-ios.svg?branch=master)](https://travis-ci.org/markuswind/react-native-select-input-ios)
[![Code Climate](https://codeclimate.com/github/markuswind/react-native-select-input-ios/badges/gpa.svg)](https://codeclimate.com/github/markuswind/react-native-select-input-ios)
[![Issue Count](https://codeclimate.com/github/markuswind/react-native-select-input-ios/badges/issue_count.svg)](https://codeclimate.com/github/markuswind/react-native-select-input-ios)

# React Native SelectInputIOS

A React Native SelectInput for iOS (+Android) which shows the picker as a keyboard.


### Supported versions
- `v1.1.3` requires `RN>=0.49`
- Use `v1.1.2` for older RN versions.

### Installation

Installation can be done through ``npm`` or `yarn`:

```shell
npm i react-native-select-input-ios --save
```

```shell
yarn add react-native-select-input-ios
```

### Preview
<img src="https://github.com/markuswind/react-native-select-input-ios/blob/master/screenshots/example.ios.gif?raw=true" width=300px/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://github.com/markuswind/react-native-select-input-ios/blob/master/screenshots/example.android.gif?raw=true" width=300px/>

### Usage
Import ``react-native-keyboard-select-input-ios`` and wrap your content inside
it:

```js
import SelectInput from 'react-native-select-input-ios';
```

or:
```js
var SelectInput = require('react-native-select-input-ios');
```

### Example:
Check example directory or clone repository and run the example!

```bash
git clone https://github.com/markuswind/react-native-select-input-ios
cd example
npm install
react-native run-ios or react-native run-android
```

### Props

| **Prop**                  | **Type**           | **Default**               | **Description**                                 |
|---------------------------|--------------------|---------------------------|-------------------------------------------------|
| `buttonsBackgroundColor`  | `PropTypes.string` | '#CCCFD6'                 | background color of buttons bar                 |
| `buttonsTextColor`        | `PropTypes.string` | '#006BFF'                 | text color of buttons in buttons bar            |
| `buttonsTextSize`         | `PropTypes.number` | undefined                 | text size of buttons in buttons bar             |
| `cancelKeyText`           | `PropTypes.string` | 'Cancel'                  | text of cancel button in buttons bar            |
| `keyboardBackgroundColor` | `PropTypes.string` | '#FFFFFF'                 | background color of picker keyboard             |
| `mode`                    | `PropTypes.string` | 'dialog'                  | Picker mode on Android, 'dialog' or 'dropdown'  |
| `onBeginEditing`          | `PropTypes.func`   | undefined                 | function that is called when keyboard is opened |
| `onEndEditing`            | `PropTypes.func`   | undefined                 | function that is called when input is canceled  |
| `onSubmitEditing`         | `PropTypes.func`   | undefined                 | function that is called when input is submitted |
| `options`                 | `PropTypes.array`  | [{ value: 0: label: '0'}] | picker options                                  |
| `submitKeyText`           | `PropTypes.string` | 'Done'                    | Changes the text of the submit button           |
| `value`                   | `PropTypes.any`    | undefined                 | initial selected value                          |
| `style`                   | `PropTypes.object` | undefined                 | [View#style](https://facebook.github.io/react-native/docs/view.html#style "View#style") |
| `labelStyle`              | `PropTypes.object` | undefined                 | [Text#style](https://facebook.github.io/react-native/docs/text.html#style "Text#style") |

### Methods
| **Name**  | **Description**             |
|-----------|-----------------------------|
| `focus`   | toggles the picker keyboard |

## License

MIT.
