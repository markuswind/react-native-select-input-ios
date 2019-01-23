# React Native Select Input

[![npm version](https://img.shields.io/npm/v/react-native-select-input-ios.svg?style=flat-square)](https://www.npmjs.com/package/react-native-select-input-ios) [![npm downloads](https://img.shields.io/npm/dm/react-native-select-input-ios.svg?style=flat-square)](https://www.npmjs.com/package/react-native-select-input-ios) [![Build Status](https://travis-ci.org/markuswind/react-native-select-input-ios.svg?branch=master)](https://travis-ci.org/markuswind/react-native-select-input-ios) [![Code Climate](https://codeclimate.com/github/markuswind/react-native-select-input-ios/badges/gpa.svg)](https://codeclimate.com/github/markuswind/react-native-select-input-ios) [![Issue Count](https://codeclimate.com/github/markuswind/react-native-select-input-ios/badges/issue_count.svg)](https://codeclimate.com/github/markuswind/react-native-select-input-ios)

<p>A React Native SelectInput for iOS (+Android) which shows the picker as a keyboard.</p>

### Preview
<img src="https://github.com/markuswind/react-native-select-input-ios/blob/master/images/example.ios.gif?raw=true" width=300px/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://github.com/markuswind/react-native-select-input-ios/blob/master/images/example.android.gif?raw=true" width=300px/>

### Installation

Installation can be done through `npm` or `yarn`:

```bash
npm install react-native-select-input-ios --save
# or
yarn add react-native-select-input-ios
```
### Usage

Import the `SelectInput` and wrap you content inside of it.

```js
import React from 'react'
import { View } from 'react-native'
import SelectInput from 'react-native-select-input-ios'

class Component extends React.Component {
  render() {
    const options = [{ value: 0, label: '0' }]
    
    return (
      <View>
        <SelectInput value={0} options={options} />
      </View>
    )
  }
}
```

### Props

Check out the [properties wiki page](https://github.com/markuswind/react-native-select-input-ios/wiki/Properties) to see the list of available props to pass. Also check out the [methods wiki page](https://github.com/markuswind/react-native-select-input-ios/wiki/Methods) to see the list of callable methods available.

### Migrating to version 2.x.x

There are some breaking changes introduced in version 2.0, see this [migration guide](https://github.com/markuswind/react-native-select-input-ios/wiki/Migrating-to-version-2.0) to fix this issues!

### Example:

Check out the repository and run the example project with the following commands:

```bash
# clone and open example project
git clone https://github.com/markuswind/react-native-select-input-ios
cd example

# install dependencies with
npm install 
# or
yarn install

# run the project with
react-native run-ios
# or
react-native run-android
```

## License

[MIT.](https://github.com/markuswind/react-native-select-input-ios/blob/master/LICENSE)
