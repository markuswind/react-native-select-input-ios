# React Native SelectInputIOS
A React Native SelectInput for iOS which shows the picker as a keyboard.

### Installation
`npm install react-native-select-input-ios --save`

### Screenshot
![screen shot](https://raw.github.com/markuswind/react-native-select-input-ios/master/screenshots/screenshot.png)

### Usage
Import ``react-native-keyboard-select-input-ios`` and wrap your content inside
it:

```js
import { SelectInputIOS } from 'react-native-select-input-ios'
```

Example usage:
```js
var options = [
  { value: 'apple',      label: 'Apple' },
  { value: 'banana',     label: 'Banana' },
  { value: 'orange',     label: 'Orange' },
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
        onEndEditing={() => console.log('onEndEditing')}
      />
    </View>
  );
}
```

### Props

| **Prop** | **Type** | **Description** |
|----------|----------|-----------------|
| `style` | `object` | [Text#style](https://facebook.github.io/react-native/docs/text.html#style "Text#style") |
| `options` | `array` | options values and labels (see Example) |
| `color` | `string` | Changes the color of the keyboard buttons (default is 'blue') |
| `returnKeyText` | `string` | Changes the text of the submit button (default is 'Done') |
| `cancelKeyText` | `string` | Changes the text of the cancel button (default is 'Cancel') |
| `onEndEditing` | `PropTypes.func` | Callback that is called when select input ends. |

## License

MIT.
