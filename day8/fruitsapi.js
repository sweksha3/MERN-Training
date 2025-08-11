//console.log("fruits")

fetch("https://sweetfruit.vercel.app/fruits")
    .then(res => res.json())
    .then(data => {
        document.getElementsByTagName('h1')[0].textContent += data[3].name
        document.getElementsByTagName('h3')[0].textContent += data[3].color
        document.getElementsByTagName('h4')[0].textContent += data[3].taste
    })