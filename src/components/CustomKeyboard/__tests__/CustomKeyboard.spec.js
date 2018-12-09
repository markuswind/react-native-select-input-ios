import React from 'react'
import renderer from 'react-test-renderer'

import CustomKeyboard from '../CustomKeyboard'

const props = {
  buttonsBackgroundColor: '#AAAAAA',
  buttonsBorderColor: '#BBBBBB',
  buttonsBorderWidth: 1,
  buttonsTextColor: '#CCCCCC',
  buttonsTextSize: 13,
  cancelKeyText: 'cancelKeyText',
  onCancelPress: jest.fn(),
  onSubmitPress: jest.fn(),
  submitKeyText: 'submitKeyText',
  visible: false,
  children: null
}

describe('CustomKeyboard', () => {
  describe('rendering', () => {
    test('renders correctly with given props', () => {
      const customKeyboard = renderer.create(<CustomKeyboard {...props} />)
      expect(customKeyboard).toMatchSnapshot()
    })
  })

  describe('callbacks', () => {
    const onCancelPress = jest.fn()
    const onSubmitPress = jest.fn()

    const customKeyboard = renderer
      .create(
        <CustomKeyboard
          {...props}
          onCancelPress={onCancelPress}
          onSubmitPress={onSubmitPress}
        />
      )
      .getInstance()

    test('call onCancelPress prop correctly', () => {
      customKeyboard.onCancelPress()
      expect(onCancelPress).toBeCalled()
    })

    test('call onSubmitPress prop correctly', () => {
      customKeyboard.onSubmitPress()
      expect(onSubmitPress).toBeCalled()
    })
  })
})
