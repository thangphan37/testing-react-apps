// form testing
// http://localhost:3000/login

import React from 'react'
import {render, screen} from '@testing-library/react'
import faker from 'faker'
import userEvent from '@testing-library/user-event'
import {build, fake} from '@jackfranklin/test-data-bot'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', () => {
  // 🐨 create a variable called "submittedData" and a handleSubmit function that
  // accepts the data and assigns submittedData to the data that was submitted
  // 💰 if you need a hand, here's what the handleSubmit function should do:
  // const handleSubmit = data => (submittedData = data)
  function buildLoginForm({password = '',}) {
    const username = faker.internet.userName()
    const generatedPassword = password || faker.internet.password()

    return {
      username, 
      password: generatedPassword
    }
  }

  const userBuilder = build('User', {
    fields: {
      username: fake(f => f.internet.userName()),
      password: fake(f => f.internet.password()),
    }
  })

  let submittedData;
  const mockSubmit = jest.fn()
  const handleSubmit = (data) => mockSubmit(data)
  // let submittedData;
  // const handleSubmit = data => (submittedData = data)
  //
  // 🐨 render the login with your handleSubmit function as the onSubmit prop
  render(<Login onSubmit={handleSubmit}/>)
  //
  // 🐨 get the username and password fields via `getByLabelText`
  const usernameInput = screen.getByLabelText(/username/i)
  const passwordInput = screen.getByLabelText(/password/i)
  const submitBtn = screen.getByRole('button', {name: 'Submit'})
  // 🐨 use userEvent.type to change the username and password fields to
  //    whatever you want
  //
  // const {username, password} = buildLoginForm({password: 'abc'})
  const {username, password} = userBuilder()
  userEvent.type(usernameInput, username)
  userEvent.type(passwordInput, password)
  userEvent.type(submitBtn)
  // 🐨 click on the button with the text "Submit"
  //
  // assert that submittedData is correct
  // 💰 use `toEqual` from Jest: 📜 https://jestjs.io/docs/en/expect#toequalvalue
  // expect(submittedData).toEqual({username: 'thang', password: 'password'})
  expect(mockSubmit).toHaveBeenCalledWith({username, password})
})

/*
eslint
  no-unused-vars: "off",
*/
