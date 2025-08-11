const fruit = 'apple'

switch(fruit){
    case "banana":
        console.log("yellow fruit")
        break;
    case "apple":
        console.log("red fruit")
        break;
    case "mango":
        console.log("green fruit")
        break;
    default : 
        console.log("unknown fruit")
}

let box = document.querySelector('div')
console.log(box)
function color(){
    const myColor = box.style.background
    switch(myColor){
        case 'lightseagreen' : 
            box.style.background = 'lightcoral'
            break;
        case 'lightcoral' : 
            box.style.background = 'lightsteelblue'
            break;
        case 'lightsteelblue' : 
            box.style.background = 'lightgoldenrodyellow'
            break;
        default: 
            box.style.background = 'lightseagreen'
    }
}