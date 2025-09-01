const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const PORT = 3001

app.get("/",(req,res)=>{
    res.json({message:"jwt demo"})      // since we want it in jason format (key-value pair)
})

app.post("/posts",verifyToken,(req,res)=>{
    jwt.verify(req.token, 'secret', (err,authData)=>{
        if(err){
            res.sendStatus(403)
        } else{
            res.json({
                message : "post created..."
            })
        }
    })
})
app.post("/login",(req,res)=>{
    const user = {
        id:1,
        user:"jwt demo",
        email:"demo@jwt.io"
    }
    jwt.sign({user:user},'secret',(err,token)=>{
        res.json({
            token
        })
    })
})

function verifyToken(req,res,next){
    const bearerHeader = req.headers['authorization']
    if(typeof bearerHeader !== 'undefined'){
        const bearerToken = bearerHeader.split(' ')[1]
        req.token = bearerToken
        next()
    } else {
        res.sendStatus(403)     // forbidden
    }
}

app.listen(PORT,()=>{
    console.log("json web token")
})