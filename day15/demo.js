//-----------------------********************** PRE-REQUISITE OF THR REACT  **********************-----------------------\\

//string literals
const myCollege ="NIET Noida"

//concat
console.log("i am studying in "+myCollege)
//string literal
console.log(`i study in ${myCollege}`)


//normal function
function add(a,b){
    return a+b
}
console.log(add(5,6))


//arrow function

// const addMe=(x,y)=>{
//     return x+y
// }

const addMe=(x,y)=>x+y

console.log(addMe(3,5))


//ternary operator
let speed =55
let message=speed > 50 ? "please slow down" : "you are driving safely"
console.log(message)


//destructuring object

let person={
    name : "Sneha",
    age : 21,
    hobbies : ['reading','playing'],
    nationality : 'Indian',
    profession : 'student'
}

// console.log(person)
// console.log(person.age)

const {name,age,profession}=person    //this is destructuring where we destructure the object and take out different parameters
console.log(age)
console.log(name)


//spread operator

const languages = ['cpp','java','kotlin','css']
console.log(languages)
// const addedLan= ['cpp','java','kotlin','css','python','.net']         //this approach is not good so we use spread operator
// console.log(addedLan)

const addedLan= [...languages,'python','.net']                            //spread will make the copy of the array/object/varaible
console.log(addedLan)


//rest operator

const [first,secod,third,...abc]= ['raj','tarun','madhu','amol','sneha','reena']
console.log(abc)



//map == iterate thru each individual iteam in an array

addedLan.map(lang=>{
    console.log(lang)
})


//slice : does not modify original array and   splice : modify original array
const veggies = ["potato","tomato","onion","greenpeas","cucumber","cauliflower"]
console.log(veggies)
const z=veggies.slice(1,4)
console.log(z)
console.log(veggies)
const x=veggies.splice(1,4)
console.log(x)
console.log(veggies)