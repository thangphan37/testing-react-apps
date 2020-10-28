// simple test with ReactDOM
// http://localhost:3000/counter

import React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

test('counter increments and decrements when the buttons are clicked', () => {
  // 🐨 create a div to render your component to (💰 document.createElement)
  const div = document.createElement('div')

  document.body.append(div)
  ReactDOM.render(<Counter />, div)

  const buttons = div.querySelectorAll('button')
  const message = div.firstChild.querySelector('div')
  const event = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0
  })
  const decrement = buttons[0]
  const increment = buttons[1]

  expect(message.textContent).toBe('Current count: 0')
  increment.dispatchEvent(event)
  expect(message.textContent).toBe('Current count: 1')
  decrement.dispatchEvent(event)
  expect(message.textContent).toBe('Current count: 0')
  //
  // 🐨 append the div to document.body (💰 document.body.append)
  //
  // 🐨 use ReactDOM.render to render the <Counter /> to the div
  // 🐨 get a reference to the increment and decrement buttons:
  //   💰 div.querySelectorAll('button')
  // 🐨 get a reference to the message div:
  //   💰 div.firstChild.querySelector('div')
  //
  // 🐨 expect the message.textContent toBe 'Current count: 0'
  // 🐨 click the increment button (💰 increment.click())
  // 🐨 assert the message.textContent
  // 🐨 click the decrement button (💰 decrement.click())
  // 🐨 assert the message.textContent
  //
  // 🐨 cleanup by removing the div from the page (💰 div.remove())
  // 🦉 If you don't cleanup, then it could impact other tests and/or cause a memory leak
})

/* eslint no-unused-vars:0 */
