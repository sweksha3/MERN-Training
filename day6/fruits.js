const fruits = ["🍎", "🥭", "🍓", "🍎", "🥭", "🍓", "🍎", "🥭", "🍓"]

// practical usage of array + conditionals + loop
// sort the fruits in array in display in UI
//console.log(fruits[1])

for(i=0; i<fruits.length; i++){
    // if(fruits[i] == "🍎"){
    //     myFruits.textContent += fruits[i]
    // }
    console.log(i, fruits[i])
    if(fruits[i] == "🍎"){
        document.getElementById('a').textContent += "🍎"
    }
    else if(fruits[i] == "🥭"){
        document.getElementById('b').textContent += "🥭"
    }
    else{
        document.getElementById('c').textContent += "🍓"
    }
}