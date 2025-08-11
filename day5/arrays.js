const fruits = ['apple','banana','mango','grapes']
console.log(fruits)
x = fruits.pop()
console.log(x)
console.log(fruits)
fruits.push('watermelon')
console.log(fruits)
fruits.shift()  // removes the first element from the array
console.log(fruits)
fruits.unshift('kiwi')  // adds element in the starting
console.log(fruits)
z = fruits.reverse()
console.log(z)

// code with the help of Math keyword 
console.log(Math.PI)
console.log(Math.max(4,8,56,2,66,49))
console.log('Hard coded num : 0.6067870577728914')
console.log(Math.random())
console.log(Math.random() * 10)
console.log(Math.floor(0.6067870577728914))
console.log(Math.ceil(0.6067870577728914))
console.log(Math.floor(0.6067870577728914) * 10)
console.log(Math.ceil(0.6067870577728914) * 10)
console.log(Math.ceil(8.01))  // returns upper round-off value  // 9
console.log(Math.floor(8.91))  // returns lower round-off value  // 8

// code for otp generation (six digit otp)
function myOtp(){
    let otp = ' '
    for(i=0; i<6; i++){
        otp += Math.floor(Math.random() *10)   
    }
    console.log(otp)
    document.querySelector('span').textContent = otp
}