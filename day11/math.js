function add(a,b){
    return a+b
}

function mult(a,b){
    return a*b
}

console.log(add(4,6))
console.log(mult(4,6))

module.exports = {
add,
mult


// addMe : add,
// Multiply : mult                       these can be used when we want to use different names
}
//module.exports=mult
