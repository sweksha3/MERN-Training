let lights = document.querySelectorAll('.light')
console.log(lights)

let currentLight = 0

// initialize first light
lights[currentLight].classList.add('active')
setInterval(()=>{
    changeLight()
}, 3000)

const changeLight = ()=>{
    // Turn off the light
    lights[currentLight].classList.remove('active')
    // move to next light
    currentLight ++ 
    // 0 1 2 index only
    if(currentLight > 2){
        currentLight = 0
    }
    //Turn on the light
    lights[currentLight].classList.add('active')
}

