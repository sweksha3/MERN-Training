// console.log(a)  // will throw an error as it is not yet declared
a = true  // hoisting == declare variables on top and then use them
console.log(a)

a = 22
console.log(a)

// var is global scope and it can be redeclared and should also be hoisted 
console.log(b)  // will not show error but rather give the output as undefined because 'b' is declared below using var

var b = 'mern'
console.log(b)

var b = 'college'
console.log(b)

// let is lexical or function scoped and we cannot redeclare it with let keyword and should be hoisted
let course = "Full Stack"
console.log(course)

// let course = "JavaScript"  // cannot be redeclared
// console.log(course)

// const is constant == no changes and should be hoisted
const holiday = "sunday"
// holiday = "monday" // will throw error
console.log(holiday)

// If-Else Statements
// if less then 18 cannot vote
// else can vote
let age = 19
if(age>=18){
    console.log("Eligible to vote")
}
else{
    console.log("Not eleigible to vote")
}

// if else statement to change text1 to text2 on click of the button and vice versa (everytime we click on the button)
// let line = document.querySelector('h1')
// console.log(line)
// function myText(){
//     line.textContent = 'JavaScript is interesting'
// }
let line = document.querySelector('h1')
console.log(line)
function changetext(){
    if(line.textContent == 'I am learning keywords'){
        line.textContent = 'JavaScript is interesting'
    }
    else{
        line.textContent = 'I am learning keywords'
    }
}