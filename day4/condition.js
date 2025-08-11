// black --> yellow --> blue --> green --> black

let box = document.querySelector('div')
console.log(box)

function changeColor(){
    if(box.style.background == 'black'){
        box.style.background = 'yellow'
    }
    else if(box.style.background == 'yellow'){
        box.style.background = 'blue'
    }
    else if(box.style.background == 'blue'){
        box.style.background = 'green'
    }
    else{
        box.style.background = 'black'
    }
}