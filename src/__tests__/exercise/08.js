// testing custom hooks
// http://localhost:3000/counter-hook

import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import useCounter from '../../components/use-counter'
import { renderHook, act } from '@testing-library/react-hooks'

// 🐨 create a simple function component that uses the useCounter hook
// and then exposes some UI that our test can interact with to test the
// capabilities of this hook
// 💰 here's how to use the hook:
// const {count, increment, decrement} = useCounter()

// function useCustomHook() {
//   const {count, increment, decrement} = useCounter()

//   return (
//     <div>
//       <div>Count: {count}</div>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   )
// }

function setup(...args) {
  const results = {}

  function TestComponent(props) {
    Object.assign(results, useCounter(...args))
    return null
  }

  render(<TestComponent />)
  return results
}

test('exposes the count and increment/decrement functions', () => {
  // const state = setup({initialCount: 1, step: 4})
  const {result} = renderHook(() => useCounter({initialCount: 1, step: 4}))
  // const message = screen.getByText(/count/i)
  // const increment = screen.getByRole('button', {name: /increment/i})
  // const decrement = screen.getByRole('button', {name: /decrement/i})
  
  // expect(message).toHaveTextContent('Count: 0')
  // userEvent.type(increment)
  // expect(message).toHaveTextContent('Count: 1')
  // userEvent.type(decrement)
  // expect(message).toHaveTextContent('Count: 0')
  act(() => {
    result.current.increment()
    result.current.increment()
  })

  expect(result.current.count).toBe(9)
  act(() => {
    result.current.decrement()
  })
  expect(result.current.count).toBe(5)

  // 🐨 render the component
  // 🐨 get the elements you need using screen
  // 🐨 assert on the initial state of the hook
  // 🐨 interact with the UI using userEvent and assert on the changes in the UI
})

/* eslint no-unused-vars:0 */
