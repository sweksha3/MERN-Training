const college = null

console.log(college)
try {
    console.log(college.length)
}catch(error){
    console.log(error.message)
}

console.log("This is very important code")

// async wait

async function greetMe(name) {
    const message = await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(name){
                resolve("Good Morning " + name)
            } else {
                reject("No name Passed")
            }
        },2000)
    })
    console.log(message)
}
greetMe("Mayank")

// ........syntax........
// setTimeout(()=>{

// },3000)
// if(){

// }
// else{

// }

// new Promise((res,rej)=>{
//     res == Then
//     rej == cathch
// })

// try{

// } catch {

// }

console.log("start")        // 1

setTimeout(()=>{
    console.log("Timeout")      // 4
})
console.log("end")      // 2

Promise.resolve()
    .then(()=>{
        console.log("Promise")      // 3
    })