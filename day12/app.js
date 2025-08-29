const express=require('express')
const app = express()
const PORT = 5001

app.get("/",(req,res)=>{
    res.send("Welcome to my app")
})

app.get("/feedback",(req,res)=>{
    res.send("This is the feedback page")
})

app.listen(PORT,()=>
    console.log(`The app is up on ${PORT}`)
)