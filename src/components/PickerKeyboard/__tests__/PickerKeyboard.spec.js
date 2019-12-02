import React from 'react'
import renderer from 'react-test-renderer'

import PickerKeyboard from '../PickerKeyboard'

const props = {
  buttonsTextStyle: {
    color: '#BBBBBB',
    fontSize: 13
  },
  buttonViewStyle: {
    backgroundColor: '#FFFFFF',
    borderColor: '#AAAAAA',
    bottomBorderWidth: 0
  },
  pickerViewStyle: {
    backgroundColor: '#CCCCCC'
  },
  cancelKeyText: 'cancelKeyText',
  onCancel: jest.fn(),
  onSubmit: jest.fn(),
  options: [{ value: 0, label: '0' }],
  style: {},
  submitKeyText: 'submitKeyText',
  value: 0
}

describe('PickerKeyboard', () => {
  describe('rendering', () => {
    test('renders correctly with given props', () => {
      const pickerKeyboard = renderer.create(<PickerKeyboard {...props} />)
      expect(pickerKeyboard).toMatchSnapshot()
    })
  })

  describe('functions', () => {
    let pickerKeyboard = null

    beforeEach(() => {
      pickerKeyboard = renderer
        .create(<PickerKeyboard {...props} />)
        .getInstance()
    })

    afterEach(() => {
      pickerKeyboard = null
    })

    test('sets picker ref correctly', () => {
      pickerKeyboard.setPickerRef(1)
      expect(pickerKeyboard.picker).toBe(1)
    })

    test('updates value correctly', () => {
      expect(pickerKeyboard.state.value).toBe(0)
      pickerKeyboard.componentDidUpdate({ value: 1 })
      expect(pickerKeyboard.state.value).toBe(0)
    })

    test('updates visible state when focussing correctly', () => {
      expect(pickerKeyboard.state.visible).toBe(false)

      pickerKeyboard.focus()
      expect(pickerKeyboard.state.visible).toBe(true)
    })

    test('updates value correctly when value changes', () => {
      expect(pickerKeyboard.state.value).toBe(0)

      pickerKeyboard.onValueChange(1)
      expect(pickerKeyboard.state.value).toBe(1)
    })

    test('updates visibily correctly', () => {
      expect(pickerKeyboard.state.visible).toBe(false)

      pickerKeyboard.setVisible(true)
      expect(pickerKeyboard.state.visible).toBe(true)

      pickerKeyboard.setVisible(false)
      expect(pickerKeyboard.state.visible).toBe(false)
    })
  })

  describe('callbacks', () => {
    const onCancel = jest.fn()
    const onSubmit = jest.fn()

    const pickerKeyboard = renderer
      .create(
        <PickerKeyboard {...props} onCancel={onCancel} onSubmit={onSubmit} />
      )
      .getInstance()

    test('call onCancel prop correctly', () => {
      pickerKeyboard.onCancelPress()

      expect(onCancel).toBeCalled()
      expect(pickerKeyboard.state.visible).toBe(false)
    })

    test('call onSubmit prop correctly', () => {
      pickerKeyboard.onSubmitPress()

      expect(onSubmit).toBeCalledWith(0)
      expect(pickerKeyboard.state.visible).toBe(false)
    })
  })
})
