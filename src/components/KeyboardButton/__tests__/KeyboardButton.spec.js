import React from 'react'
import renderer from 'react-test-renderer'

import KeyboardButton from '../KeyboardButton'

const props = {
  onPress: jest.fn(),
  style: {
    color: '#ABCDEF',
    fontSize: 13,
  },
  text: 'buttonText',
  textAlign: 'left',
}

describe('KeyboardButton', () => {
  test('renders correctly with given props', () => {
    const keyboardButton = renderer.create(<KeyboardButton {...props} />)
    expect(keyboardButton).toMatchSnapshot()
  })
})
