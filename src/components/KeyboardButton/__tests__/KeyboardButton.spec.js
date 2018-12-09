import React from 'react'
import renderer from 'react-test-renderer'

import KeyboardButton from '../KeyboardButton'

const props = {
  color: '#ABCDEF',
  onPress: jest.fn(),
  text: 'buttonText',
  textAlign: 'left',
  textSize: 13
}

describe('KeyboardButton', () => {
  test('renders correctly with given props', () => {
    const keyboardButton = renderer.create(<KeyboardButton {...props} />)
    expect(keyboardButton).toMatchSnapshot()
  })
})
