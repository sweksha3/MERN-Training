const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user/:id', (req, res) => {      //:id will allocate the id whichever we will define in url
  const userId = req.params.id            //dynamic routing in express
  res.send(`User id is :${userId}`)
})

app.post("/data",(req,res)=>{
  const {movie,actor}=req.body
  res.send(`The ${movie} of the ${actor} is too good`)
})

app.get("/data",(req,res)=>{
  const {movie,actor}=req.body
  res.send(`The ${movie} of the ${actor} is too good`)
  console.log(req.body)
  console.log(req.body.movie)      //it will only print the movie      //this is called destructuring where we want 1 thing out of many
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
