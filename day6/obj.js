console.log(console)
console.log(typeof(console))

// object == key value pairs
// curly braces
// values in '' / "" except for number, null and boolean
// json is superset of object useful for transporting data{"":""}

const person = [{
    name : 'Sweksha',
    age : 21,
    isTrainer : false,
    hobbies : ["Reading", " Cooking", " Coding"],
    city : {location : "Greater Noida"},
    nationality : "Indian",
    gender : "female"
},
{
    name : "Sneha",
    hobbies : ["Sleeping", " Cycling"],
    city : {location : "Ludhiana"},
    gender : "female"
}]
console.log(person)
console.log(typeof(person))

// to print name in webpage by extracting it from object
// document.querySelector('#a').textContent += person.name 
// document.querySelector('#b').textContent += person.hobbies
// document.querySelector('#c').textContent += person.nationality
// document.querySelector('#d').textContent += person.age
// document.querySelector('#e').textContent += person.hobbies[1]
// document.querySelector('#f').textContent += person.city.location

document.querySelector('h2').textContent += person[0].name                  // My name is : Sweksha
document.querySelectorAll('h2')[1].textContent += person[0].hobbies         // My hobbies are : Reading, Cooking, Coding
document.querySelectorAll('h2')[2].textContent += person[0].nationality     // My nationality is : Indian
document.querySelectorAll('h2')[3].textContent += person[0].age             // My age is : 21
document.querySelectorAll('h2')[4].textContent += person[0].hobbies[1]      // My hobby is : Cooking
document.querySelectorAll('h2')[5].textContent += person[0].city.location   // My location is : Greater Noida

// document.querySelector('h2').textContent += person[1].name                       // My name is : Sneha
// document.querySelectorAll('h2')[4].textContent += person[1].hobbies[1]           // My hobby is : Cycling
// document.querySelectorAll('h2')[5].textContent += person[1].city.location        // My location is : Ludhiana