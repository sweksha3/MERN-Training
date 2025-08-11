console.log("Ho Ho Ho")

// Theory of JSON
// JSON is superset of object
// parse and STRINGIFY

function jsonDemo(){
    const person = {
        name : "Raj",
        age : 25,
        isStudent : false,
        hobbies : ['reading','writing','swimming']
    }
    console.log(person)
    console.log(typeof(person))     // object

    // convert our object to JSON.string
    const jsonString = JSON.stringify(person)
    console.log("Stringified JSON : ", jsonString)
    console.log(typeof(jsonString))         // string
    console.log(jsonString.toUpperCase())
    console.log(jsonString.charAt(7))       // :
    console.log(jsonString.substring(5, 9))       // e":"
    console.log("The name is", jsonString.substring(9,12))      // Raj

    // convert string to object
    const parseObj = JSON.parse(jsonString)
    console.log("Parsed Object is ", parseObj)
    console.log(typeof(parseObj))       // object
}

// json
// key and value both in double quote("key" : "value")
const person1 = {
    "name" : "Max",
    "age" : 22,
    "hobbies" : ["Read","cook","sleep"]
}

// JSON parse is used to make object
// JSON stringify is used to make string