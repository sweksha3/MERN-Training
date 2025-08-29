function generateRandomNum(){
    return Math.floor(Math.random()*100)+1
}
console.log(`the first random number is :${generateRandomNum()}`)
console.log(`the second random number is :${generateRandomNum()}`)
console.log(`the third random number is :${generateRandomNum()}`)

module.exports=generateRandomNum