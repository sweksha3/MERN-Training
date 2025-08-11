// fetch & promise + api
// promise denotes to something thath will happen in future
// pending state
// success / failure
// then / catch

console.log(Promise)        // Promise is a predefined keyword and 
// console.log(promise) will throw an error as it is lowercase p and the predefined keyword starts with uppercase P

// let p = new Promise((resolve)=>{
//     resolve("Success I am good")
// })
let p = new Promise((resolve, reject)=>{
    reject("Failure not good")
})
p.then((msg)=>{
    console.log(msg)
}).catch((err)=>{
    console.log(err)
})
console.log(p)

// Simple promise in action
let myCal = new Promise((resolve,reject)=>{
    let num = 3 + 2
    if(num == 5){
        resolve("success")
    }
    else{
        reject("failure")
    }
})

myCal
    .then((message)=>{
        console.log("good news", message)
}).catch((error)=>{
    console.error("Oh no", error)
})

console.log(fetch)      // fetch with lowercase f is predefined keyword but not f with uppercase

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => console.log(res))

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => console.log(data))

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => console.log(data[1]))

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
        document.getElementsByTagName('h2')[0].textContent += data[2].name
        document.getElementsByTagName('h2')[1].textContent += data[2].email
    })