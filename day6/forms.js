let myData = document.getElementById('f')
console.log(myData)

myData.addEventListener('submit',(e)=>{
    e.preventDefault()
    let pass = document.getElementById('p').value
    console.log(pass)
    if(pass.length < 6){
        alert("Password too small")
    }
    else if(pass.length > 15){
        alert("Password too big")
    }
    else{
        // window.location.href='welcome.html'      // opens the webpage on the same tab
        sessionStorage.setItem('isLoggedIn','true')     
        window.open('welcome.html','_blank')        // opens the webpage in new tab
    }
})