const generateRandomNum=require('./randomNum')
console.log(`the first random number is :${generateRandomNum()}`)

console.log("Give me a random numbers")


const greeting=require('./sayHii')
greeting("students")

const operation=require('./math')
console.log(`the result is ${operation.add(5,6)}`)
console.log(`the result is ${operation.mult(5,6)}`)
// console.log(`the result is ${operation.addMe(5,6)}`)
// console.log(`the result is ${operation.Multiply(5,6)}`)
