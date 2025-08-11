console.log("Good Morning")

// arrays are in [] and 0 index
const city = ['delhi', 'noida', 'pune', 'goa', 'chandigarh']
console.log(city[3])    // goa
let z = city.pop()
console.log(city)       // ['delhi', 'noida', 'pune', 'goa']
console.log(z)          // chandigarh
city.push('amritsar')
console.log(city)       // ['delhi', 'noida', 'pune', 'goa', 'amritsar']
let a = city.shift()
console.log(city)       // ['noida', 'pune', 'goa', 'amritsar']
console.log(a)          // delhi
city.unshift('mysuru')
console.log(city)       // ['mysuru', 'noida', 'pune', 'goa', 'amritsar']
console.log(city.reverse())     // ['amritsar', 'goa', 'pune', 'noida', 'mysuru']
city[1] = 'Kolkata'
console.log(city)       // ['amritsar', 'Kolkata', 'pune', 'noida', 'mysuru']

// to print a city in the main web page
let myCity = document.querySelector('h2')
console.log(myCity)
myCity.textContent += city[3]