const fb = (nums)=>{
    for(let i=1; i<=nums; i++){
        if(i%3 === 0 && i%5 ===0){
            console.log("FizzBuzz")
        } else if (i%3===0){
            console.log("Fizz")
        } else if(i%5===0){
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

fb(15)

// for(let i=1; i<=10; i++){
//     console.log(i)
// }
