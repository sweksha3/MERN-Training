// A string is a sequence of characters

let theString = " College"
console.log(theString)      // College
console.log(theString.toLowerCase())      // college
console.log(theString.toUpperCase())      // COLLEGE
console.log(theString.length)          // 7
console.log(theString.charAt(0))        // C    // char starts at zero index
console.log(theString.endsWith('e'))      // true
console.log(theString.endsWith('a'))      // false
console.log(theString.replace('lege', 'ony'))       // Colony
console.log(theString.slice(1,4))        // Col
console.log(theString.split())       // ['College']  // to convert string to array
console.log(theString.split(''))        // ['C', 'o', 'l', 'l', 'e', 'g', 'e']
console.log(theString.repeat(3))        // College College College
console.log(theString.trim())       // College