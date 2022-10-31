const {returnTwo, add, greeting, multiply, divide, subtract} = require('./functions')

test('This test should check to see if it returns 2', () => {
    expect(returnTwo()).toBe(2)
})

test('This should return a string that greets the user', () => {
    expect(greeting('James')).toBe('Hello, James.')
    expect(greeting('Jill')).toBe('Hello, Jill.')
    expect(greeting('123')).toBe('Hello, 123.')
})

test('This should return the sum of two numbers', () => {
    expect(add(1, 2)).toBe(3)
    expect(add(5, 9)).toBe(14)
})


describe('Math functions', () => {
    test('This function will multiply two numbers',  () => {
        expect(multiply(5, 5)).toBe(25)
        expect(multiply(10, 5)).toBe(50)
    })
    test('This function will divide two numbers',  () => {
        expect(divide(5, 5)).toBe(1)
        expect(divide(100, 50)).toBe(2)
    })
    test('This function will subtract two numbers',  () => {
        expect(subtract(20, 20)).toBe(0)
        expect(subtract(10, 5)).toBe(5)
    })
})
