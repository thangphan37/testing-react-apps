const sum = (a,b) => a + b
const subtract = (a,b) => a - b

/*
  a JavaScript Test:
  -testing is a assertion
  -we use test function with title argument -> we know which one to go about fixing
  a Javascript Mock:
  -ex: we want to ensure thumbWar function is integrating properly with third party
  -use jest.mock to mock module without pulling it into another file
  -create a __mocks__ directory
*/
function expect(actual) {
  return {
    toBe(expected) {
      if(expected !== actual) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}

function test(title, callback) {
  try {
    callback()
    console.log(`✓ ${title}`)
  } catch(err) {
    console.log(`✓ ${title}`)
    console.log(err)
  }
}

test('sum adds numbers', () => {
  const result = sum(3,7)
  const expected = 4
  expect(expected).toBe(result)
})