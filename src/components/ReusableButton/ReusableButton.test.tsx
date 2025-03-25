import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ReusableButton from './index'


test('renders button with label', () => {
  render(<ReusableButton label="Click me" onClick={() => {}} />)
  const button = screen.getByText(/click me/i)
  expect(button).toBeTruthy()
})

test('calls onClick when clicked', () => {
  const handleClick = jest.fn()
  render(<ReusableButton label="Click me" onClick={handleClick} />)
  fireEvent.click(screen.getByText(/click me/i))
  expect(handleClick).toHaveBeenCalled()
})