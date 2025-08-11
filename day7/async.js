console.log("Good Morning")
// setTimeout(function(){               // Good Morning
//     console.log("Good Night")        // Good Afternoon
// })                                   // Good Night
setTimeout(()=>{                        // to print Good Night after Good Afternoon without changing the sequence of print statements
    console.log("Good Night")
}, 3000)         // Good Night is printed after the delay of 3sec

const x = setInterval(()=>{
    console.log("Tea Time")          // console will continue to print after every interval of 2sec
}, 2000)            // set interval again and again

setTimeout(()=>{
    console.log("No more Tea")
    clearInterval(x)
}, 10000)

console.log("Good Afternoon")
