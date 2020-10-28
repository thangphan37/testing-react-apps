// Avoid implementation details
// http://localhost:3000/counter

/*
  -avoid testing implementation details(remove firstChild)
  -replace fireEvent by userEvent because user can fire any event
*/
import React from 'react'
// 🐨 add `screen` to the import here:
import {render, fireEvent, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from '../../components/counter'

test('counter increments and decrements when the buttons are clicked', () => {
  const {container} = render(<Counter />)
  // 🐨 replace these with screen queries
  // 💰 you can use `getByText` for each of these (`getByRole` can work for the button too)
  const decrement = screen.getByRole('button', {name: 'Decrement'})
  const increment = screen.getByRole('button', {name: 'Increment'})
  const message = screen.getByText(/Current count: 0/)
  // const [decrement, increment] = container.querySelectorAll('button')
  // const message = container.firstChild.querySelector('div')

  expect(message).toHaveTextContent('Current count: 0')
  userEvent.type(increment)
  // fireEvent.click(increment)
  expect(message).toHaveTextContent('Current count: 1')
  userEvent.type(decrement)
  // fireEvent.click(decrement)
  expect(message).toHaveTextContent('Current count: 0')
})
