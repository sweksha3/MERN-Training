// Change Text
z = document.getElementById('a')
console.log(z)
function abc(){
    z.textContent="Javascript is really tricky!!"
    console.log("Good Morning")
}

// Change Color of Text
x = document.getElementById('b')
console.log(x)
function changeColor(){
    x.style.color='yellow'
}

// Change font size of text
y = document.getElementById('c')
console.log(y)
function font(){
    y.style.fontSize='30px'
}

// Hide the text or make the text invisible
w = document.getElementById('d')
console.log(w)
function invisible(){
    // w.style.display='None'
    // w.style.visibility='hidden'
    document.querySelector('h4').style.visibility='hidden'
}
