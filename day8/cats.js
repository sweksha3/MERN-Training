console.log("cats")

function catty(){
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(res => res.json())
    .then(data => {
        document.querySelector('img').src = data[0].url
    })
}
