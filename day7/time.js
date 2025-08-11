// console.log(Date())
const now = new Date()
console.log(now)
console.log(now.getMinutes())       // 60 min = 1 hr
// console.log(now.getMonth() + 1)
// console.log(now.getTime())
console.log(now.getSeconds())      // 60 sec = 1 min
console.log(now.getHours())      // 24 hr
// console.log(now.getFullYear())      // 2025
// console.log(now.getMonth())
// console.log(now.getDay())

let h = now.getHours();
let m = now.getMinutes();
let s = now.getSeconds();

console.log(`The current Time is ${h}:${m}:${s}`)

function updateClock(){
    const now = new Date()
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s

    const timeNow = `${h}:${m}:${s}`
    document.getElementById('time').textContent = timeNow
}
setInterval(updateClock, 1000)
updateClock()



// ternary operator : ternary ? if and : else
const age = 19
let statement = age < 18 ? "Hi small kid" : "Hello Uncle"

console.log(age)        // 19
console.log(statement)      // Hello Uncle

for(i=0; i<4; i++){
    setTimeout(()=>{})
    console.log(i)      // 0 1 2 3 
}

for(let i=1; i<5; i++){
    setTimeout(()=>{
        console.log("number", i)      // 1 2 3 4 with let
                                      // 4 4 4 4
    }, 1000)
}