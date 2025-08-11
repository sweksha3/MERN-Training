let pic = document.querySelector('img')
console.log(pic)

// let b1 = document.getElementsByTagName('button')[0]
let b1 = document.querySelector('button')
console.log(b1)
let b2 = document.getElementsByTagName('button')[1]
console.log(b2)

// ES6 Modern way
b1.addEventListener('click', function(){
    pic.src = "happy.webp"
})

b2.addEventListener('click', function(){
    pic.src = "sad.webp"
})

// string literals / backticks

const college = "NIET"
console.log(`I am studying in ${college}`)


function add(a,b){
    console.log(a+b)
}

// nameless arrow function
const add1 = (x,y)=> x + y

add(12,5)
add(7,7)
add(6,5)
add(7,7)

// when you click the button (Alert : Good Bye) ES6
alert("Good Bye")