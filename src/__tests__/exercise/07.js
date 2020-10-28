// testing with context and a custom render method
// http://localhost:3000/easy-button

import React from 'react'
import {screen} from '@testing-library/react'
// import {ThemeProvider} from '../../components/theme'
import {render} from '../../test/test-utils'
import EasyButton from '../../components/easy-button'


// function Wrapper({children}) {
//   const {theme} = children.props
//   return (
//     <ThemeProvider initialTheme={theme}>
//       {children}
//     </ThemeProvider>
//   )
// }

// function render(ui, options) {
//   return rtlRender(ui, {wrapper: Wrapper, ...options})
// }

test('renders with the light styles for the light theme', () => {
  // 🐨 uncomment all of this code and your test will be busted on the next line:
  // render(<EasyButton>Easy</EasyButton>)
  // const button = screen.getByRole('button', {name: /easy/i})
  // expect(button).toHaveStyle(`
  //   background-color: white;
  //   color: black;
  // `)
  //
  // 🐨 update the `render` call above to use the wrapper option using the
  // ThemeProvider

  render(<EasyButton>Easy</EasyButton>, {theme: 'light'})
  const button = screen.getByRole('button', {name: /easy/i})
  expect(button).toHaveStyle(`
    background-color: white;
    color: black;
  `)
})

test('renders with the dark styles for the dark theme', () => {
  render(<EasyButton>Easy</EasyButton>, {theme: 'dark'})
  const button = screen.getByRole('button', {name: /easy/i})
  expect(button).toHaveStyle(`
    background-color: black;
    color: white;
  `)
})

/* eslint no-unused-vars:0 */
